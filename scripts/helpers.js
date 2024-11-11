import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { TransactionBlock, UpgradePolicy } from '@mysten/sui.js/transactions';
import * as fs from 'fs';
import { execSync } from "child_process";
// import { BCS, getSuiMoveConfig } from "@mysten/bcs";

const FULLNODE_URL = "https://fullnode.mainnet.sui.io:443/";

const bcs = {}; // new BCS(getSuiMoveConfig());

const CLOCK = "0x6";
const SUI_COIN = "0x2::sui::SUI";
// --------------------x--------------------xxx--------------------x-------------------------------------
// --------------------x-------------- DEX - ADMIN ENTRY FUNCTIONS --------------------x--------------------
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



export async function mergeCoinsIfNeeded(
  suiClient,
  type,
  coinVec,
  spendable_val,
  tx,
) {
  // ------ If its a single Object
  // --------------------------------
  if (coinVec.length === 1) {
    console.log("mergeCoinsIfNeeded --- Objects = 1");
    // If the coin is a SUI coin, split the coin to the spendable value to cover gas cost
    if (type == SUI_COIN && coinVec.length == 1) {
      // tx.setGasBudget(1000000000);
      let gas_obj_ref_ = await suiClient.getObject({
        id: coinVec[0],
        options: { showType: true, showContent: true },
      });
      tx.setGasPayment([
        {
          objectId: gas_obj_ref_.data.objectId,
          version: gas_obj_ref_.data.version,
          digest: gas_obj_ref_.data.digest,
        },
      ]);
      return tx.splitCoins(tx.gas, [tx.pure(Number(spendable_val))]);
    }
    return tx.splitCoins(coinVec[0], [tx.pure(Number(spendable_val))]);
  }
  // ------ If its a multiple Objects
  // --------------------------------
  // If its SUI token, we split the spendable coin from the merged coins, so remaining can be used for gas
  if (type == SUI_COIN) {
    // Need to set gas payment
    console.log(
      "mergeCoinsIfNeeded --- SUI Objects > 1 ---> Setting gas payment"
    );
    let gas_obj_ref = null;
    let n_coinVec = [];
    for (let i = 0; i < coinVec.length; i++) {
      let gas_obj_ref_ = await suiClient.getObject({
        id: coinVec[i],
        options: { showType: true, showContent: true },
      });
      if (gas_obj_ref_.data.content.fields.balance > 1e8) {
        gas_obj_ref = gas_obj_ref_;
        n_coinVec.push(coinVec[i]);
        break;
      }
    }
    tx.setGasPayment([
      {
        objectId: gas_obj_ref.data.objectId,
        version: gas_obj_ref.data.version,
        digest: gas_obj_ref.data.digest,
      },
    ]);

    for (let i = 0; i < coinVec.length; i++) {
      if (coinVec[i] != gas_obj_ref.data.objectId) {
        n_coinVec.push(coinVec[i]);
      }
    }

    // Now merge the remaining coins into SUI gas coin
    let coinsToMerge = n_coinVec
      .slice(1)
      .map((coinId) => tx.object(coinId));

    if (coinsToMerge.length > 15) {
      coinsToMerge = coinsToMerge.slice(0, 15);
    }
    tx.mergeCoins(tx.gas, coinsToMerge);
    // Now split the SUI gas coin to the spendable value which needs to be supplied for tx
    return tx.splitCoins(tx.gas, [tx.pure(Number(spendable_val))]);
  }
  // If coins other than SUI, just merge them
  else {
    const coinsToMerge = coinVec.slice(1).map(coinId => tx.object(coinId));
    console.log(coinsToMerge)
    tx.mergeCoins(tx.object(coinVec[0]), coinsToMerge);
    console.log(tx)
    return tx.splitCoins(coinVec[0], [tx.pure(Number(spendable_val))]);
  }
}


// -----------------------------------------------------------------------x-------------------
// ----------------------------------- READ / WRITE TO JSON FILE ---------x-------------------
// -----------------------------------------------------------------------x-------------------


export async function readJsonFile(filePath) {
  try {
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContent);
    return jsonData;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error reading JSON file: ${error.message}`);
    } else {
      console.error(`Error parsing JSON file: ${error.message}`);
    }
    throw error;
  }
}

export function writeJsonToFile(jsonData, filename) {
  const jsonString = JSON.stringify(jsonData, null, 2);

  fs.writeFile(filename, jsonString, (err) => {
    if (err) {
      console.error('Error writing JSON data to file:', err);
    } else {
      console.log(`JSON data successfully written to ${filename}`);
    }
  });
}

// --------------------------------------------------------------------------------------------x-------------------
// ----------------------------------- PUBLISH PACKAGE / REQUEST FUNDS VIA FAUCET etc ---------x-------------------
// --------------------------------------------------------------------------------------------x-------------------
// - getExecutionStatusType
// - parsePublishTxn
// - parseOwnerFromObjectChange

export async function publish(packagePath, sui_client, signer, signer_address, gas_budget) {
  try {
    const { modules, dependencies } = JSON.parse(
      execSync(`sui move build --dump-bytecode-as-base64 --path ${packagePath}`, {
        encoding: "utf-8",
      })
    );
    const tx = new TransactionBlock();
    const [upgradeCap] = tx.publish({ modules, dependencies });
    
    tx.transferObjects([upgradeCap], tx.pure(await signer_address));
    tx.setGasBudget(gas_budget);
    try {
      const publishTxn = await sui_client.signAndExecuteTransactionBlock({
        signer: signer,
        transactionBlock: tx,
        options: {
          showInput: true,
          showEffects: true,
          showEvents: true,
          showObjectChanges: true,
        },
      });
      // console.log("Publish transaction: ", publishTxn);
      return publishTxn;
    } catch (error) {
      console.log("Error publishing package: ", packagePath);
      console.log(error);
    }
  } catch (error) {
    console.log("Error publishing package: ", packagePath);
    console.log(error);
  }
}

export async function request_funds(provider, deployer_address) {
  try {
    const faucet = await provider.requestSuiFromFaucet(deployer_address);
    console.log(faucet);
  } catch (error) {
    console.log(error);
  }
}

export async function getSuiBalance(provider, address) {
  const response = await provider.getCoins({ owner: address, coinType: "0x2::sui::SUI" });
  const coins = response['data'];
  let balance = 0;

  for (let coin of coins) {
    if (coin.coinType === "0x2::sui::SUI") {
      balance += parseFloat(coin["balance"]);
    }
  }

  return balance;  // return balance directly, or you can make adjustments if you want to return other info
}

export function getExecutionStatusType(txresponse) {
  if (txresponse.effects.status.status === 'success') {
    return 'success';
  } else if (txresponse.effects.status.status === 'failure') {
    console.log("Transaction failed: ", txresponse.effects.status.error);
    return 'failure';
  }
}

export const parsePublishTxn = (suiResponse) => {
  const objectChanges = suiResponse.objectChanges;
  const parseRes = { packageId: '', upgradeCapId: '', created: [] }
  if (objectChanges) {
    for (const change of objectChanges) {
      if (change.type === 'created' && change.objectType === '0x2::package::UpgradeCap') {
        parseRes.upgradeCapId = change.objectId;
      } else if (change.type === 'published') {
        parseRes.packageId = change.packageId;
      } else if (change.type === 'created') {
        const owner = parseOwnerFromObjectChange(change)
        parseRes.created.push({ type: change.objectType, objectId: change.objectId, owner });
      }
    }
  }
  return parseRes;
}

const parseOwnerFromObjectChange = (change) => {
  const sender = change?.sender;
  if (change?.owner?.AddressOwner) {
    return (change.owner.AddressOwner === sender) ? `(you) ${sender}` : change.owner.AddressOwner;
  } else if (change?.owner?.Shared) {
    return 'Shared';
  } else if (change?.owner === 'Immutable') {
    return 'Immutable';
  }
  return '';
}

export async function simulate_for_gas( client, sender, txb, gasBudget   ) {
  try {

    txb.setGasBudget(gasBudget && gasBudget > 0 ? gasBudget : 500000000);
    txb.setSenderIfNotSet(
      sender && sender != "" ? sender : DEFAULT_SENDER_ADDRESS
    );
    let build_ = await txb.build({ client: client });
    // Simulate tx
    let resp = await client.dryRunTransactionBlock({
      transactionBlock: build_,
    });

    // Check status
    let status = resp.effects.status.status;
    // If success, check transition change
    if (status == "success") {
      let computationCost = Number(resp.effects.gasUsed.computationCost);
      let storageCost = Number(resp.effects.gasUsed.storageCost);
      let gas = computationCost + storageCost;
      console.log(
        `Computation cost: ${computationCost}, Storage cost: ${storageCost}`
      );
      console.log("Gas used: " + gas);
      return { status: true, total_gas: Number(gas), events: resp.events };
    } else {
      console.log(`Transaction failed: ${status}`);
      let error = resp.effects.status.error;
      console.log("Error: " + error);
      return {
        status: false,
        total_gas: Number(0),
        events: [],
        error: error,
      };
    }
  } catch (e) {
    console.log("Error in simulate_for_gas: ", e);
    return {
      status: false,
      total_gas: 0,
      events: [],
      error: JSON.stringify(e),
    };
  }
}


// ---------------------------------------------------------------------x-------------------
// ----------------------------------- ARBITRAGE FUNCTIONS -------------x-------------------
// ---------------------------------------------------------------------x-------------------

export async function arb_sui_dsui_via_staking(
  provider,
  signer,
  deployer_address,
  ARBITRAGE_PACKAGE_ID,
  sui_system_state,
  vault,
  two_pool,
  sui_coin_vec,
  sui_amt,
  min_profit,
  recepient,
  gas_budget,
  node_url
) {
  console.log(`ARBITRAGE: SUI <> DSUI via Staking...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(gas_budget);

  let sui_coin = await mergeCoinsIfNeeded(provider, "0x2::sui::SUI", sui_coin_vec, sui_amt, tx);  

  tx.moveCall({
    target: `${ARBITRAGE_PACKAGE_ID}::script::arb_sui_dsui_via_staking`,
    typeArguments: [],
    arguments: [tx.object(CLOCK), tx.object(sui_system_state), tx.object(vault), tx.object(two_pool), sui_coin, tx.pure(sui_amt), tx.pure(min_profit), tx.pure([recepient]) ]
  });

  console.log("simulate_for_gas");
  let resp = await simulate_for_gas(provider, deployer_address, tx, gas_budget);
  
  if (resp.status == true) {
    const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
    let txhash = result.digest;
    console.log(`Transaction hash: ${txhash}`);
    console.log(result);
    return true;
  }
  
  return false;
}

export async function arb_sui_dsui_via_swap(
  provider,
  signer,
  deployer_address,
  ARBITRAGE_PACKAGE_ID,
  sui_system_state,
  vault,
  two_pool,
  sui_coin_vec,
  sui_amt,
  min_profit,
  recepient,
  gas_budget,
) {
  console.log(`ARBITRAGE: SUI <> DSUI via Swap...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(gas_budget);

  let sui_coin = await mergeCoinsIfNeeded(provider, "0x2::sui::SUI", sui_coin_vec, sui_amt, tx);  

  tx.moveCall({
    target: `${ARBITRAGE_PACKAGE_ID}::script::arb_sui_dsui_via_swap`,
    typeArguments: [],
    arguments: [tx.object(CLOCK), tx.object(sui_system_state), tx.object(vault), tx.object(two_pool), sui_coin, tx.pure(sui_amt), tx.pure(min_profit), tx.pure([recepient]) ]
  });

  console.log("simulate_for_gas");
  let resp = await simulate_for_gas(provider, deployer_address, tx, gas_budget);
  
  if (resp.status == true) {
    const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
    let txhash = result.digest;
    console.log(`Transaction hash: ${txhash}`);
    console.log(result);
    return true;
  } 

  return false;
}

export async function arb_sui_X_via_cetus(
  provider,
  signer,
  deployer_address,
  ARBITRAGE_PACKAGE_ID,
  type_args,
  cetus_config,
  cetus_pool,
  dh_pool,
  sui_coin_vec,
  sui_amt,
  min_profit,
  sqrt_price_limit,
  recepient,
  gas_budget,
) {
  console.log(`ARBITRAGE: SUI <> X via Cetus...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(gas_budget);

  let sui_coin = await mergeCoinsIfNeeded(provider, "0x2::sui::SUI", sui_coin_vec, sui_amt, tx);  

  tx.moveCall({
    target: `${ARBITRAGE_PACKAGE_ID}::script::arb_sui_X_via_cetus`,
    typeArguments: type_args,
    arguments: [tx.object(CLOCK), tx.object(cetus_config), tx.object(cetus_pool), tx.object(dh_pool), sui_coin, 
                tx.pure(sui_amt), tx.pure(min_profit), tx.pure(sqrt_price_limit)  ]
  });
  console.log("simulate_for_gas");
  let resp = await simulate_for_gas(provider, deployer_address, tx, gas_budget);
  
  if (resp.status == true) {
    const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
    let txhash = result.digest;
    console.log(`Transaction hash: ${txhash}`);
    console.log(result);
    return true;
  } 

  return false;
}

export async function arb_sui_X_via_degenhive(
  provider,
  signer,
  deployer_address,
  ARBITRAGE_PACKAGE_ID,
  type_args,
  cetus_config,
  cetus_pool,
  dh_pool,
  sui_coin_vec,
  sui_amt,
  min_profit,
  sqrt_price_limit,
  recepient,
  gas_budget,
) {
  console.log(`ARBITRAGE: SUI <> X via DegenHive...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(gas_budget);

  let sui_coin = await mergeCoinsIfNeeded(provider, "0x2::sui::SUI", sui_coin_vec, sui_amt, tx);  

  tx.moveCall({
    target: `${ARBITRAGE_PACKAGE_ID}::script::arb_sui_X_via_degenhive`,
    typeArguments: type_args,
    arguments: [tx.object(CLOCK), tx.object(cetus_config), tx.object(cetus_pool), tx.object(dh_pool), sui_coin, 
                tx.pure(sui_amt), tx.pure(min_profit), tx.pure(sqrt_price_limit) ]
  });
  console.log("simulate_for_gas");
  let resp = await simulate_for_gas(provider, deployer_address, tx, gas_budget);
  
  if (resp.status == true) {
    const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
    let txhash = result.digest;
    console.log(`Transaction hash: ${txhash}`);
    console.log(result);
    return true;
  } 

  return false;
}




export async function arb_stables_via_wusdc_bridge(
  provider,
  signer,
  deployer_address,
  ARBITRAGE_PACKAGE_ID,
  type_args,
  cetus_config,
  usdc_wusdc_cetus_pool,
  dh_pool,
  usdc_coin_vec,
  usdc_amount,
  min_profit,
  sqrt_price_limit,
  is_reverse,
  gas_budget,
) {
  console.log(`ARBITRAGE: STABLES <> USDC via WUSDC Bridge...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(gas_budget);
  // console.log(usdc_coin_vec)
  // let usdc_coin = await mergeCoinsIfNeeded(provider, "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC", usdc_coin_vec, usdc_amount, tx);  
  // console.log(usdc_coin)

  tx.moveCall({
    target: `${ARBITRAGE_PACKAGE_ID}::script::arb_stables_via_wusdc_bridge`,
    typeArguments: type_args,
    arguments: [tx.object(CLOCK), tx.object(cetus_config), tx.object(usdc_wusdc_cetus_pool), tx.object(dh_pool), tx.object(usdc_coin_vec[0]), 
                tx.pure(usdc_amount), tx.pure(min_profit), tx.pure(sqrt_price_limit), tx.pure(is_reverse) ]
  });

  console.log("simulate_for_gas");
  let resp = await simulate_for_gas(provider, deployer_address, tx, gas_budget);
  
  if (resp.status == true) {
    const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
    let txhash = result.digest;
    console.log(`Transaction hash: ${txhash}`);
    console.log(result);
    return true;
  } 

  return false;
}




export async function arb_stables_via_wusdt_bridge(
  provider,
  signer,
  deployer_address,
  ARBITRAGE_PACKAGE_ID,
  type_args,
  cetus_config,
  usdc_wusdc_cetus_pool,
  dh_pool,
  usdc_coin_vec,
  usdc_amount,
  min_profit,
  sqrt_price_limit,
  is_reverse,
  gas_budget,
) {
  console.log(`ARBITRAGE: STABLES <> USDC via WUSDT Bridge...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(gas_budget);

  // let wusdc_coin = await mergeCoinsIfNeeded(provider, "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN", usdc_coin_vec, usdc_amount, tx);  

  console.log(usdc_coin_vec);
  console.log(CLOCK);
  console.log(cetus_config);
  console.log(usdc_wusdc_cetus_pool);
  console.log(dh_pool);
  console.log(usdc_coin_vec[0]);

  tx.moveCall({
    target: `${ARBITRAGE_PACKAGE_ID}::script::arb_stables_via_wusdt_bridge`,
    typeArguments: type_args,
    arguments: [tx.object(CLOCK), tx.object(cetus_config), tx.object(usdc_wusdc_cetus_pool), tx.object(dh_pool), tx.object(usdc_coin_vec[0]), 
                tx.pure(usdc_amount), tx.pure(min_profit), tx.pure(sqrt_price_limit), tx.pure(is_reverse) ]
  });
 

  console.log("simulate_for_gas");
  let resp = await simulate_for_gas(provider, deployer_address, tx, gas_budget);
  
  if (resp.status == true) {
    const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
    let txhash = result.digest;
    console.log(`Transaction hash: ${txhash}`);
    console.log(result);
    return true;
  } 

  return false;
}








































export async function cetus_swap(
  provider,
  signer,
  deployer_address,
  ARBITRAGE_PACKAGE_ID,
  type_args,
  sui_coin_vec,
  cetus_config,
  cetus_pool,
  amount,
  sqrt_price_limit,
  recepient,
  gas_budget,
) {
  console.log(`ARBITRAGE: SUI <> X via Cetus...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(gas_budget);

  let sui_coin = await mergeCoinsIfNeeded(provider, "0x2::sui::SUI", sui_coin_vec, amount, tx);  

  let sui_balance = tx.moveCall({ target: `0x2::coin::into_balance`,
    typeArguments: ["0x2::sui::SUI"],
    arguments: [sui_coin]
  });
  let zero_balance = tx.moveCall({ target: `0x2::balance::zero`,
    typeArguments: ["0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC"],
    arguments: []
  });

  console.log("cetus_swap");  
  console.log(type_args);
  console.log(cetus_config);
  console.log(cetus_pool);
  console.log(zero_balance);
  console.log(sui_balance);
  console.log(amount);
  console.log(sqrt_price_limit);

  let [ret_wusdc, ret_sui] = tx.moveCall({
    target: `${ARBITRAGE_PACKAGE_ID}::script::cetus_swap`,
    typeArguments: type_args,
    arguments: [tx.object(cetus_config), tx.object(cetus_pool), zero_balance,  sui_balance, tx.pure(false), tx.pure(true),
                tx.pure(amount), tx.pure(1), tx.pure(sqrt_price_limit), tx.object(CLOCK)  ]
  });
   tx.moveCall({ target: `0x50c2216a078d3bdf5081fe436df9f42dfdbe538ebd9c935913ce2436362cff90::coin_helper::destroy_or_transfer_balance`,
    typeArguments: ["0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC"],
    arguments: [ret_wusdc, tx.pure(recepient)]
  });
  tx.moveCall({ target: `0x50c2216a078d3bdf5081fe436df9f42dfdbe538ebd9c935913ce2436362cff90::coin_helper::destroy_or_transfer_balance`,
    typeArguments: ["0x2::sui::SUI"],
    arguments: [ret_sui, tx.pure(recepient)]
  });

  console.log("simulate_for_gas");
  let resp = await simulate_for_gas(provider, deployer_address, tx, gas_budget);
  
  if (resp.status == true) {
    const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
    let txhash = result.digest;
    console.log(`Transaction hash: ${txhash}`);
    console.log(result);
    return true;
  } 

  return false;
}









// ---------------------------------------------------------------------x-------------------
// ----------------------------------- INITIALZATION FUNCTIONS ---------x-------------------
// ---------------------------------------------------------------------x-------------------
// - setup_bees_manager::  `BeesManager` Shared Object Initialized
// - initialize_dragon_food_emissions::    `DragonFood` Shared Object Initialized
// - init_dragon_dao::             `DragonDaoGovernor` Shared Object Initialized
// ---------------------------------------------------------------------x-------------------

export async function init_dsui_vault_config(
  provider,
  signer,
  DSUI_PACKAGE_ID,
  treasury_cap
) {
  console.log(`Initialzing DSUI_VAULT Object...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  tx.moveCall({
    target: `${DSUI_PACKAGE_ID}::dsui_vault::init_dsui_vault`,
    typeArguments: [],
    arguments: [tx.object(treasury_cap)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function update_validator_list(
  provider,
  signer,
  sui_system_state,
  DSUI_PACKAGE_ID,
  vault_ID,
  dragon_dao_cap,
  validator_list,
  to_add
) {
  console.log(`Updating Validators List in dSUI Vault Object...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  tx.moveCall({
    target: `${DSUI_PACKAGE_ID}::dsui_vault::update_validator_list`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_cap), tx.object(sui_system_state), tx.object(vault_ID), tx.pure(validator_list), tx.pure(to_add)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function handle_liquid_staking_functions(
  provider,
  signer,
  DSUI_VAULT_PACKAGE_ID,
  BEE_DAO_PACKAGE_ID,
  sui_system_state,
  dsui_vault,
  dragon_dao_governor,
  treasury_dsui,
  dsui_disperser

) {
  console.log(`Processing all liquid staking processing functions...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  tx.moveCall({
    target: `${DSUI_VAULT_PACKAGE_ID}::dsui_vault::process_unstake_sui_requests`,
    typeArguments: [],
    arguments: [ tx.object(sui_system_state),
      tx.object(dsui_vault) ]
  });

  tx.moveCall({
    target: `${DSUI_VAULT_PACKAGE_ID}::dsui_vault::update_calculated_accrued_rewards`,
    typeArguments: [],
    arguments: [ tx.object(sui_system_state),
      tx.object(dsui_vault) ]
  });

  tx.moveCall({
    target: `${DSUI_VAULT_PACKAGE_ID}::dsui_vault::process_stake_sui_requests`,
    typeArguments: [],
    arguments: [ tx.object(sui_system_state),
      tx.object(dsui_vault) ]
  });

  if (dragon_dao_governor && dragon_dao_governor != "") {
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE_ID}::dragon_dao::claim_collected_degensui`,
    typeArguments: [],
    arguments: [
      tx.object(sui_system_state),
      tx.object(dragon_dao_governor),
      tx.object(dsui_vault),
      tx.object(treasury_dsui),
      tx.object(dsui_disperser),
    ],
  });
}

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


// Deserialize other values in order
export const deserializeValueFromResult = (
  result_index,
  index,
  type,
  resp
) => {
  const value = bcs.de(
    type,
    Uint8Array.from(resp.results[result_index].returnValues[index][0]),
    "hex"
  );
  return value;
};



/// 1. Caim HONEYs to be distributed to the content creators from Infusion Vault
export async function query_honey_farming_snampshot(  provider,
  signer,
  deployer_address,
  HIVE_ENTRY_PACKAGE,
  chronicles_vault,
  epoch) {
  console.log(
    "\n\n\n\n\nQuery HONEY Farming snapshots.."
  );
  console.log(`Epoch: ${epoch}`);
  console.log(`Chronicles Vault: ${chronicles_vault}`);
  const tx =  new TransactionBlock();
  tx.moveCall({
    target: `${HIVE_ENTRY_PACKAGE}::hive_chronicles::query_honey_farming_snampshot`,
    typeArguments: [],
    arguments: [
      tx.object(chronicles_vault),
      tx.pure(epoch),
    ],
  });

  const result = await provider.devInspectTransactionBlock({ 
    transactionBlock: tx,
    sender: deployer_address
  });

  // console.log(result);
  // console.log(result["effects"]);
  // console.log(result["effects"]["status"]);
  // console.log(result["effects"]["status"]["status"]);

  if ( result["effects"]["status"]["status"] == "failure" ) {
    console.log("Transaction failed: ", result["effects"]["status"]["error"]);
    return;
  }

  let response = {};

  response.epoch = deserializeValueFromResult(0, 0, BCS.U64, result);
  response.honey_distributed = deserializeValueFromResult(0, 1, BCS.U64, result);
  response.entropy_during_epoch = deserializeValueFromResult(0, 2, BCS.U64, result);
  response.honey_per_entropy = deserializeValueFromResult(0, 3, BCS.U256, result);
  response.honey_burnt = deserializeValueFromResult(0, 4, BCS.U64, result);

  console.log(response);
}













/// 1. Caim HONEYs to be distributed to the content creators from Infusion Vault
export async function increment_honey_farm_epoch(  provider,
  signer,
  HIVE_ENTRY_PACKAGE,
  chronicles_vault,
  honey_manager,
  policy) {
  console.log(
    "\n\n\n\n\nIncrementing HONEY farming epoch, claiming HONEYs from Infusion Vault..."
  );
  const tx =  new TransactionBlock();
  tx.moveCall({
    target: `${HIVE_ENTRY_PACKAGE}::hive_chronicles::increment_honey_farm_epoch`,
    typeArguments: [],
    arguments: [
      tx.object(chronicles_vault),
      tx.object(honey_manager),
      tx.object(policy),
    ],
  });

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function getStreamingBuzzesState(provider, QUEEN_MAKER_PACKAGE1, QUEEN_MAKER, sender_address ) {
  try {
      let TYPE_SUI = "0x2::sui::SUI";

      let tx = new TransactionBlock();
      tx.moveCall({
          target: `${QUEEN_MAKER_PACKAGE1}::queen_maker::get_streamer_buzzes_params`,
          typeArguments: [ TYPE_SUI ],
          arguments: [ tx.object(QUEEN_MAKER)],
      });
      tx.moveCall({
          target: `${QUEEN_MAKER_PACKAGE1}::queen_maker::get_streamer_info`,
          typeArguments: [ TYPE_SUI ],
          arguments: [ tx.object(QUEEN_MAKER), tx.pure(0) ],
      });
      tx.moveCall({
          target: `${QUEEN_MAKER_PACKAGE1}::queen_maker::get_streamer_info`,
          typeArguments: [ TYPE_SUI ],
          arguments: [ tx.object(QUEEN_MAKER), tx.pure(1) ],
      });
      tx.moveCall({
          target: `${QUEEN_MAKER_PACKAGE1}::queen_maker::get_streamer_info`,
          typeArguments: [ TYPE_SUI ],
          arguments: [ tx.object(QUEEN_MAKER), tx.pure(2) ],
      });
      tx.moveCall({
          target: `${QUEEN_MAKER_PACKAGE1}::queen_maker::get_leading_bids_info`,
          typeArguments: [ TYPE_SUI ],
          arguments: [ tx.object(QUEEN_MAKER)],
      });
      tx.moveCall({
          target: `${QUEEN_MAKER_PACKAGE1}::queen_maker::get_streamer_pol_info`,
          typeArguments: [ TYPE_SUI ],
          arguments: [ tx.object(QUEEN_MAKER)],
      });
      tx.moveCall({
          target: `${QUEEN_MAKER_PACKAGE1}::queen_maker::get_engagement_scores_state`,
          typeArguments: [ TYPE_SUI ],
          arguments: [ tx.object(QUEEN_MAKER)],
      });


      let resp = await provider.devInspectTransactionBlock({
          transactionBlock: tx,
          sender: sender_address,
      });
      console.log(`resp:: `);
      console.log(resp.results);


      let response = { engagement_scores: {}, leading_bid: {} } ;

      // deserialize `get_streamer_buzzes_params` response
      response.are_live = deserializeValueFromResult(0, 0, BCS.BOOL, resp);
      response.ongoing_stream = deserializeValueFromResult(0, 1, BCS.U64, resp);
      response.stream_init_ms = deserializeValueFromResult(0, 2, BCS.U64, resp);
      response.first_rank_assets_limit = deserializeValueFromResult(0, 3, BCS.U64, resp);
      response.second_rank_assets_limit = deserializeValueFromResult(0, 4, BCS.U64, resp);
      response.third_rank_assets_limit = deserializeValueFromResult(0, 5, BCS.U64, resp);

      response.buzzes_count = deserializeValueFromResult(0, 6, BCS.U64, resp);
      response.engagement_scores.hive_per_ad_slot = deserializeValueFromResult(0, 7, BCS.U64, resp);
      response.engagement_scores.honey_per_ad_slot = deserializeValueFromResult(0, 8, BCS.U64, resp);
      response.min_bid_limit = deserializeValueFromResult(0, 9, BCS.U64, resp);
      response.energy_tax = deserializeValueFromResult(0, 10, BCS.U64, resp);

      console.log(`response:: `);
      console.log(response);

      response.streamers_info = { streamer1: {}, streamer2: {}, streamer3: {}} ;
      // deserialize `get_streamer_info` response - 1
      response.streamers_info.streamer1.profile  = deserializeValueFromResult(1, 0, ["vector", BCS.ADDRESS], resp);
      response.streamers_info.streamer1.username = deserializeValueFromResult(1, 1, ["vector", BCS.STRING], resp);
      response.streamers_info.streamer1.streams_count = deserializeValueFromResult(1, 2, BCS.U64, resp);
      response.streamers_info.streamer1.access_type = deserializeValueFromResult(1, 3, BCS.U8, resp);
      response.streamers_info.streamer1.sui_per_buzz = deserializeValueFromResult(1, 4, BCS.U64, resp);
      response.streamers_info.streamer1.buzz_cost_in_hive = deserializeValueFromResult(1, 5, BCS.U64, resp);
      response.streamers_info.streamer1.remaining_buzzes_count = deserializeValueFromResult(1, 6, BCS.U64, resp);
      response.streamers_info.streamer1.engagement_points = deserializeValueFromResult(1, 7, BCS.U128, resp);
      response.streamers_info.streamer1.collection_name = deserializeValueFromResult(1, 8, BCS.STRING, resp);

      // deserialize `get_streamer_info` response - 2
      response.streamers_info.streamer2.profile  = deserializeValueFromResult(2, 0, ["vector", BCS.ADDRESS], resp);
      response.streamers_info.streamer2.username = deserializeValueFromResult(2, 1, ["vector", BCS.STRING], resp);
      response.streamers_info.streamer2.streams_count = deserializeValueFromResult(2, 2, BCS.U64, resp);
      response.streamers_info.streamer2.access_type = deserializeValueFromResult(2, 3, BCS.U8, resp);
      response.streamers_info.streamer2.sui_per_buzz = deserializeValueFromResult(2, 4, BCS.U64, resp);
      response.streamers_info.streamer2.buzz_cost_in_hive = deserializeValueFromResult(2, 5, BCS.U64, resp);
      response.streamers_info.streamer2.remaining_buzzes_count = deserializeValueFromResult(2, 6, BCS.U64, resp);
      response.streamers_info.streamer2.engagement_points = deserializeValueFromResult(2, 7, BCS.U128, resp);
      response.streamers_info.streamer2.collection_name = deserializeValueFromResult(2, 8, BCS.STRING, resp);

      console.log(`response:: `);
      console.log(response);

      // deserialize `get_streamer_info` response - 3
      response.streamers_info.streamer3.profile  = deserializeValueFromResult(3, 0, ["vector", BCS.ADDRESS], resp);
      response.streamers_info.streamer3.username = deserializeValueFromResult(3, 1, ["vector", BCS.STRING], resp);
      response.streamers_info.streamer3.streams_count = deserializeValueFromResult(3, 2, BCS.U64, resp);
      response.streamers_info.streamer3.access_type = deserializeValueFromResult(3, 3, BCS.U8, resp);
      response.streamers_info.streamer3.sui_per_buzz = deserializeValueFromResult(3, 4, BCS.U64, resp);
      response.streamers_info.streamer3.buzz_cost_in_hive = deserializeValueFromResult(3, 5, BCS.U64, resp);
      response.streamers_info.streamer3.remaining_buzzes_count = deserializeValueFromResult(3, 6, BCS.U64, resp);
      response.streamers_info.streamer3.engagement_points = deserializeValueFromResult(3, 7, BCS.U128, resp);
      response.streamers_info.streamer3.collection_name = deserializeValueFromResult(3, 8, BCS.STRING, resp);

      // deserialize `get_leading_bids_info` response
      response.leading_bid.profile_addr1 = deserializeValueFromResult(4, 0,  ["vector", BCS.ADDRESS], resp);
      response.leading_bid.bid_amt1 = deserializeValueFromResult(4, 1, BCS.U64, resp);
      response.leading_bid.profile_addr2 = deserializeValueFromResult(4, 2,  ["vector", BCS.ADDRESS], resp);
      response.leading_bid.bid_amt2 = deserializeValueFromResult(4, 3, BCS.U64, resp);
      response.leading_bid.profile_addr3 = deserializeValueFromResult(4, 4,  ["vector", BCS.ADDRESS], resp);
      response.leading_bid.bid_amt3 = deserializeValueFromResult(4, 5, BCS.U64, resp);

      // console.log(`response:: `);
      // console.log(response);

      // // deserialize `get_streamer_pol_info` response
      response.bid_pool = deserializeValueFromResult(5, 0, BCS.U64, resp);
      response.sui_avail_for_pol = deserializeValueFromResult(5, 1, BCS.U64, resp);

      // // deserialize `get_engagement_scores_state` response
      response.engagement_scores.hive_available = deserializeValueFromResult(6, 0, BCS.U64, resp);
      response.engagement_scores.hive_per_ad_slot = deserializeValueFromResult(6, 1, BCS.U64, resp);
      response.engagement_scores.honey_available = deserializeValueFromResult(6, 2, BCS.U64, resp);
      response.engagement_scores.honey_per_ad_slot = deserializeValueFromResult(6, 3, BCS.U64, resp);
      response.engagement_scores.total_sui_bidded = deserializeValueFromResult(6, 4, BCS.U64, resp);
      response.engagement_scores.ongoing_points_sum = deserializeValueFromResult(6, 5, BCS.U128, resp);
      response.engagement_scores.user_points_score = deserializeValueFromResult(6, 6, BCS.U64, resp);
      response.engagement_scores.leading_bid_amt = deserializeValueFromResult(6, 7, BCS.U64, resp);
      response.engagement_scores.points_per_sui_bidded = deserializeValueFromResult(6, 8, BCS.U128, resp);

      // console.log(`response:: `);
      // console.log(response);

      console.log(response);
      return response
  } catch (error) {
      console.log(error);
      throw error
  }
}


export async function sui_get_state_for_trainer(provider, QUEEN_MAKER_PACKAGE1, QUEEN_MAKER, user_trainer_id, sender_address ) {
  try {
      let TYPE_SUI = "0x2::sui::SUI";

      let tx = new TransactionBlock();
      tx.moveCall({
          target: `${QUEEN_MAKER_PACKAGE1}::queen_maker::get_state_for_trainer`,
          typeArguments: [ TYPE_SUI ],
          arguments: [ tx.object(QUEEN_MAKER), tx.pure(user_trainer_id) ],
      });


      let resp = await provider.devInspectTransactionBlock({
          transactionBlock: tx,
          sender: sender_address,
      });
      console.log("Response from sui_get_state_for_trainer");
      console.log(resp);

      let user_stream_points = {};
      user_stream_points.stream_epoch = deserializeValueFromResult(0, 0, BCS.U64, resp);
      user_stream_points.points = deserializeValueFromResult(0, 1, BCS.U64, resp);
      user_stream_points.flag = deserializeValueFromResult(0, 2, BCS.BOOL, resp);
      user_stream_points.sui_bidded = deserializeValueFromResult(0, 3, BCS.U64, resp);
  
      user_stream_points.buzz_cost_in_hive = deserializeValueFromResult(0, 4, BCS.U64, resp);
      user_stream_points.subscription_type = deserializeValueFromResult(0, 5, BCS.U8, resp);
      user_stream_points.user_total_points = deserializeValueFromResult(0, 6, BCS.U64, resp);
      user_stream_points.hive_earned = deserializeValueFromResult(0, 7, BCS.U64, resp);
      user_stream_points.honey_earned = deserializeValueFromResult(0, 8, BCS.U64, resp);
      user_stream_points.rewards_final = deserializeValueFromResult(0, 9, BCS.BOOL, resp);
      user_stream_points.total_points_sum = deserializeValueFromResult(0, 10, BCS.U128, resp);


      // console.log(response);
      return user_stream_points
  } catch (error) {
      console.log(error);
      throw error
  }
}




/// 1. INCREMENT TIME-STREAM AUCTION 
export async function increment_stream_part_1(  provider,
  signer,
  QUEEN_MAKER_PACKAGE,
  SUI_COIN,
  mapping_store,
  queen_maker,
  prev_streamer_rank1_trainer,
  prev_streamer_rank2_trainer,
  prev_streamer_rank3_trainer) {
  console.log(
    "\n\n\n\n\nIncrementing Time_Stream Auction - Onboard existing Streamers as Creators on the platform"
  );

  console.log(`prev_streamer_rank1_trainer: ${prev_streamer_rank1_trainer}`);
  console.log(`prev_streamer_rank2_trainer: ${prev_streamer_rank2_trainer}`);
  console.log(`prev_streamer_rank3_trainer: ${prev_streamer_rank3_trainer}`);
  console.log(`queen_maker: ${queen_maker}`);
  console.log(`mapping_store: ${mapping_store}`);


  const tx =  new TransactionBlock();
  tx.moveCall({
    target: `${QUEEN_MAKER_PACKAGE}::queen_maker::increment_stream_part_1`,
    typeArguments: [SUI_COIN],
    arguments: [
      tx.object(mapping_store),
      tx.object(queen_maker),
      tx.object(prev_streamer_rank1_trainer),
      tx.object(prev_streamer_rank2_trainer),
      tx.object(prev_streamer_rank3_trainer),
    ],
  });

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

/// 2. INCREMENT TIME-STREAM AUCTION 
export async function increment_stream_part_2(  provider,
  signer,
  TWO_POOL_AMM_PACKAGE,
  SUI_COIN,
  mapping_store,
  queen_maker,
  new_streamer_rank1,
  new_streamer_rank2,
  new_streamer_rank3,
  honey_manager,
  honey_policy) {
  console.log(
    "\n\n\n\n\nIncrementing Time_Stream Auction - Onboard new streamers on the platform"
  );

  const tx =  new TransactionBlock();
  tx.moveCall({
    target: `${TWO_POOL_AMM_PACKAGE}::honey_trade::increment_stream_part_2`,
    typeArguments: [SUI_COIN],
    arguments: [
      tx.object(CLOCK),
      tx.object(mapping_store),
      tx.object(queen_maker),
      tx.object(new_streamer_rank1),
      tx.object(new_streamer_rank2),
      tx.object(new_streamer_rank3),
      tx.object(honey_manager),
      tx.object(honey_policy)
    ],
  });

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}




export async function getEpochInfo(suiClient, sender_adr) {
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `0x2::tx_context::epoch`,
    arguments: [],
  });
  tx.moveCall({
    target: `0x2::tx_context::epoch_timestamp_ms`,
    arguments: [],
  });


  let resp = await suiClient.devInspectTransactionBlock({
    transactionBlock: tx,
    sender: sender_adr,
  });

  let current_epoch = deserializeValueFromResult(0, 0, BCS.U64, resp);
  let timestamp_ms = deserializeValueFromResult(1, 0, BCS.U64, resp);
  // console.log(`current_epoch: ${current_epoch}`);
  // console.log(`timestamp_ms: ${timestamp_ms}`);
  return { current_epoch: current_epoch, cur_epoch_start_ms: timestamp_ms };
}



export async function init_vesting_vault_config(
  provider,
  signer,
  VESTING_PACKAGE_ID,
  sui_system_state,
  vesting_admin_cap,
  dsui_vault,
  hive_degenhive_map_store,
  bees_manager,
  disperser
) {
  console.log(`Initialzing VESTING VAULT Object...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  let sui_to_pay = tx.splitCoins(tx.gas, [tx.pure(Number(1000000000))]);
  tx.moveCall({
    target: `${VESTING_PACKAGE_ID}::vesting::kraft_vesting_vault_obj`,
    typeArguments: [],
    arguments: [tx.object(sui_system_state), tx.object(vesting_admin_cap), tx.object(dsui_vault), tx.object(hive_degenhive_map_store), tx.object(bees_manager), tx.object(disperser),
      sui_to_pay]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      // Extract pool ID
      // console.log(txn);
      let created = txn.effects.created;
      // console.log(created);
      for (const object of created) {
        // find id of liquidity pool
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function add_system_buzz(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  cap,
  chronicles_vault,
  system_buzzes
) {
  console.log(`Adding System Buzzes...`)
  console.log(system_buzzes);

  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);

  let index = 0;
  for (const buzz of system_buzzes) {
    console.log(`type = ${buzz.type}, buzz = ${buzz.buzz}, gen_ai = ${buzz.gen_ai}`);
    tx.moveCall({
      target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::new_add_system_buzz`,
      typeArguments: [],
      arguments: [tx.object(cap), tx.object(chronicles_vault), tx.pure(buzz.type), tx.pure(buzz.buzz), tx.pure(buzz.gen_ai)]
    });
    index++;
  }

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function add_welcome_buzz(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  cap,
  chronicles_vault,
  welcome_buzzes
) {
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);

  let index = 0;
  for (const buzz of welcome_buzzes) {
    tx.moveCall({
      target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::add_welcome_buzz`,
      typeArguments: [],
      arguments: [tx.object(cap), tx.object(chronicles_vault), tx.pure(buzz.type), tx.pure(buzz.user_log), tx.pure(buzz.gen_ai)]
    });
    index++;
  }

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function add_pool_governance_buzz(
  provider,
  signer,
  DRAGON_FOOD_PACKAGE_ID,
  dragon_food,
  buidlers_cap,
  governance_buzzes
) {
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);

  let index = 0;
  for (const buzz of governance_buzzes) {
    tx.moveCall({
      target: `${DRAGON_FOOD_PACKAGE_ID}::dragon_food::update_system_buzz`,
      typeArguments: [],
      arguments: [tx.object(dragon_food), tx.object(buidlers_cap), tx.pure(buzz.type), tx.pure(buzz.buzz)]
    });
    index++;
  }

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}


export async function initialize_airdrop_vault(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  stream_coin_type,
  buidlers_cap,
  chronicles_vault,
  clock,
  bees_manager,
  queen_maker,
  user_position_access_cap,
  merkle_tree_roots,
  claim_start_timestamp,
  claim_end_timestamp
) {
  console.log(`Initialzing AIRDROP VAULT Object...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(100000000);
  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::initialize_airdrop_vault`,
    typeArguments: [stream_coin_type],
    arguments: [tx.object(buidlers_cap), tx.object(chronicles_vault), tx.object(clock), tx.object(bees_manager), tx.object(queen_maker),
    tx.object(user_position_access_cap),
    tx.pure(merkle_tree_roots), tx.pure(claim_start_timestamp), tx.pure(claim_end_timestamp)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);
      return dex_objects;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}


export async function update_airdrop_vault(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  stream_coin_type,
  builders_cap,
  chronicles_vault,
  clock,
  bees_manager,
  queen_maker,
  merkle_tree_roots,
  claim_end_timestamp
) {
  console.log(`Updating AIRDROP VAULT Object...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::update_airdrop_vault`,
    typeArguments: [stream_coin_type],
    arguments: [tx.object(builders_cap), tx.object(chronicles_vault), tx.object(clock), tx.object(bees_manager), tx.object(queen_maker),
    tx.pure(merkle_tree_roots), tx.pure(claim_end_timestamp)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}



export async function add_hive_for_airdrop(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  stream_coin_type,
  builders_cap,
  chronicles_vault,
  clock,
  bees_manager,
  queen_maker,
  hive_tokens,
  to_add_amt
) {
  console.log(`Adding ${to_add_amt / (1000000)} HIVE Tokens for AIRDROP...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::add_hive_for_airdrop`,
    typeArguments: [stream_coin_type],
    arguments: [tx.object(builders_cap), tx.object(chronicles_vault), tx.object(clock), tx.object(bees_manager), tx.object(queen_maker)
      , tx.object(hive_tokens), tx.pure(to_add_amt)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

// ---------------------------------------------------------------------x-------------------
// ----------------------------------- INITIALZATION FUNCTIONS ---------x-------------------
// ---------------------------------------------------------------------x-------------------
// - LOCKDROPS
// ---------------------------------------------------------------------x-------------------

export async function initialize_lockdrops(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  stream_coin_type,
  chronicles_vault,
  hive_rewards_access_cap,
  lsd_user_positions_access_cap,
  user_trainer_access_cap,
  sui_system_state,
  dsui_vault,
  hive_degenhive_map_store,
  bees_manager,
  disperser,
  queen_maker,
  clock,
  profile_username,
  profile_bio,
  max_positions,
  init_timestamp,
  deposit_window,
  withdrawal_window,
  min_lock_duration,
  max_lock_duration,
  weekly_multiplier,
  weekly_divider
) {
  console.log(`Initialzing LOCKDROP CONFIGs Objects...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(3000000000);
  let sui_for_trainer = tx.splitCoins(tx.gas, [tx.pure(Number(1000000000))]);
  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::initialize_lockdrops`,
    typeArguments: [stream_coin_type],
    arguments: [tx.object(chronicles_vault), tx.object(hive_rewards_access_cap), tx.object(lsd_user_positions_access_cap), tx.object(user_trainer_access_cap),
    tx.object(sui_system_state), tx.object(dsui_vault), tx.object(hive_degenhive_map_store), tx.object(bees_manager), tx.object(disperser), sui_for_trainer, tx.object(queen_maker), tx.object(clock), tx.pure(profile_username),
    tx.pure(profile_bio), tx.pure(max_positions), tx.pure(init_timestamp), tx.pure(deposit_window), tx.pure(withdrawal_window), tx.pure(min_lock_duration), tx.pure(max_lock_duration), tx.pure(weekly_multiplier), tx.pure(weekly_divider)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return parsePublishTxn(result);
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}


export async function initialize_infusion_vault(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  stream_coin_type,
  chronicles_vault,
  clock,
  username,
  bio,
  bees_manager,
  queen_maker,
  user_trainer_access_cap,
  sui_system_state,
  dsui_vault,
  hive_degenhive_map_store,
  disperser,
  begin_timestamp,
  deposit_window,
  withdrawal_window,
  vesting_duration
) {
  console.log(`Initialzing INFUSION VAULT FOR SUI - HIVE...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(3000000000);
  let sui_for_trainer = tx.splitCoins(tx.gas, [tx.pure(Number(1000000000))]);
  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::initialize_infusion_vault`,
    typeArguments: [stream_coin_type],
    arguments: [tx.object(chronicles_vault), tx.object(clock), tx.object(bees_manager), tx.object(queen_maker),
    tx.object(user_trainer_access_cap), tx.object(sui_system_state), tx.object(dsui_vault), tx.object(hive_degenhive_map_store),
    tx.object(disperser), sui_for_trainer,
    tx.pure(username), tx.pure(bio), tx.pure(begin_timestamp), tx.pure(deposit_window), tx.pure(withdrawal_window), tx.pure(vesting_duration)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return parsePublishTxn(result);
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function infuse_hive_incentives(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  stream_coin_type,
  chronicles_vault,
  clock,
  bees_manager,
  queen_maker,
  hive_coin_id,
  hive_incentives
) {
  console.log(`Initialzing INFUSION VAULT FOR SUI - HIVE...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(3000000000);

  // tx.moveCall({
  //   target: `0x12e7d4e7cd69706ba9916126eae7d7d7fe370a7f6f70f569dbe53a09fe89ab5a::queen_maker::burn_hive_for_gems`,
  //   typeArguments: [],
  //   arguments: [tx.object("0xe4cbfb9fbebeaa696edcf511e2ae9dbe10c8aa19ef70edb80010f42ca5aa24c3"), tx.object("0x1a974594f998d502925f7a3d3c922e5036230c0b13291475c815fee1021ada17"), tx.object(hive_coin_id),
  //   tx.pure(hive_incentives)]
  // });

  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::infuse_hive_incentives`,
    typeArguments: [stream_coin_type],
    arguments: [tx.object(chronicles_vault), tx.object(clock), tx.object(bees_manager), tx.object(queen_maker),
    tx.object(hive_coin_id), tx.pure(hive_incentives)]
  });

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}















// ----------------------------------- LSD -::- USER ENTRY FUNCTIONS ---------x-------------------
// ---------------------------------------------------------------------------x-------------------

export async function stake_with_validator(
  provider,
  signer,
  DSUI_PACKAGE_ID,
  vault_ID,
  sui_system_state,
  coin_X_vec,
  selected_validator,
  to_stake,
  network_url
) {
  console.log(`Staking with Validator.. network_url = ${network_url}.`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  const coin_X_in = await mergeCoinsIfNeeded(
    "0x2::sui::SUI",
    coin_X_vec,
    to_stake,
    tx,
    network_url
  );
  tx.moveCall({
    target: `${DSUI_PACKAGE_ID}::entry_script::stake_with_validator`,
    typeArguments: [],
    arguments: [tx.object(sui_system_state), tx.object(vault_ID), coin_X_in, tx.pure(Math.floor(to_stake)), tx.pure(selected_validator)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function infusion_withdraw_hive_testing(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  stream_coin_type,
  chronicles_vault,
  bees_manager,
  hive_towithdraw
) {
  console.log(`Withdrawing HIVE from infusion Vault.`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(3000000000);
  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::withdraw_hive`,
    typeArguments: [stream_coin_type],
    arguments: [tx.object(chronicles_vault), tx.object(bees_manager), tx.pure(hive_towithdraw)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function update_staked_shares_infusion_testing(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  stream_coin_type,
  chronicles_vault,
  bees_manager
) {
  console.log(`update_staked_shares`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(3000000000);
  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::update_staked_shares`,
    typeArguments: [stream_coin_type],
    arguments: [tx.object(chronicles_vault), tx.object(bees_manager)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}


export async function stake_sui(
  provider,
  signer,
  DSUI_PACKAGE_ID,
  vault_ID,
  sui_system_state,
  coin_X_vec,
  to_stake,
  network_url
) {
  console.log(`Staking SUI...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  const coin_X_in = await mergeCoinsIfNeeded(
    "0x2::sui::SUI",
    coin_X_vec,
    to_stake,
    tx,
    network_url
  );
  tx.moveCall({
    target: `${DSUI_PACKAGE_ID}::entry_script::stake_sui`,
    typeArguments: [],
    arguments: [tx.object(sui_system_state), tx.object(vault_ID), coin_X_in, tx.pure(Math.floor(to_stake))]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function sui_request_instant_unstake(
  provider,
  signer,
  DSUI_PACKAGE_ID,
  vault_ID,
  dSUI_type,
  coin_dSUI_vec,
  to_unstake,
  network_url
) {
  console.log(`Unstaking SUI INSTANTLY...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  const coin_dSUI_in = await mergeCoinsIfNeeded(
    dSUI_type,
    coin_dSUI_vec,
    to_unstake,
    tx,
    network_url
  );
  tx.moveCall({
    target: `${DSUI_PACKAGE_ID}::entry_script::request_instant_unstake`,
    typeArguments: [],
    arguments: [tx.object(vault_ID), coin_dSUI_in, tx.pure(Math.floor(to_unstake))]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function sui_unstake_sui_delayed(
  provider,
  signer,
  DSUI_PACKAGE_ID,
  vault_ID,
  dSUI_type,
  coin_dSUI_vec,
  to_unstake,
  network_url
) {
  console.log(`Unstaking SUI DELAYED...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  const coin_dSUI_in = await mergeCoinsIfNeeded(
    dSUI_type,
    coin_dSUI_vec,
    to_unstake,
    tx,
    network_url
  );
  tx.moveCall({
    target: `${DSUI_PACKAGE_ID}::entry_script::request_delayed_unstake`,
    typeArguments: [],
    arguments: [tx.object(vault_ID), tx.object(CLOCK), coin_dSUI_in, tx.pure(Math.floor(to_unstake))]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function sui_claim_unstaked_sui(
  provider,
  signer,
  DSUI_PACKAGE_ID,
  vault_ID,
  unstake_request_id,
) {
  console.log(`CLAIMING UNSTAKED SUI...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DSUI_PACKAGE_ID}::entry_script::claim_unstaked_sui`,
    typeArguments: [],
    arguments: [tx.object(vault_ID), tx.object(unstake_request_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


// ----------------------------------- LSD -::- OPERATOR FUNCTIONS ---------x-------------------
// ---------------------------------------------------------------------------x-------------------



export async function process_stake_sui_requests(
  provider,
  signer,
  DSUI_PACKAGE_ID,
  sui_system_state,
  vault_ID
) {
  console.log(`\n\n\nEXECUTING staking of SUI to a list of selected validators....`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DSUI_PACKAGE_ID}::dsui_vault::process_stake_sui_requests`,
    typeArguments: [],
    arguments: [tx.object(sui_system_state), tx.object(vault_ID)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function update_calculated_total_rewards(
  provider,
  signer,
  DSUI_PACKAGE_ID,
  sui_system_state,
  vault_ID
) {
  console.log(`\n\n\nRE-CALCULATING rewards for all validators and updates the vault accordingly.....`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DSUI_PACKAGE_ID}::dsui_vault::update_calculated_total_rewards`,
    typeArguments: [],
    arguments: [tx.object(sui_system_state), tx.object(vault_ID)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function do_unstake_onchain_by_validator(
  provider,
  signer,
  DSUI_PACKAGE_ID,
  sui_system_state,
  vault_ID
) {
  console.log(`\n\n\nINITIATING the unstaking process for a list of validators on-chain......`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DSUI_PACKAGE_ID}::dsui_vault::do_unstake_onchain_by_validator`,
    typeArguments: [],
    arguments: [tx.object(sui_system_state), tx.object(vault_ID)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


// ----------------------------------- LSD -::- OPERATOR FUNCTIONS ---------x-------------------
// ---------------------------------------------------------------------------x-------------------
 

export async function setup_bees_manager(
  provider,
  signer,
  DRAGON_TRAINERS_PACKAGE_ID,
  DeployerCap,
  trading_royalty_pct,
  trading_gov_yield_pct,
  trading_queen_maker_pct,
  breeding_royalty_platform_pct,
  breeding_royalty_gov_yield_pct,
  breeding_royalty_treasury_pct,
  max_bids_per_bee,
  min_bid_amt,
  trainer_onboarding_fee_sui,
  mutation_fee,
  start_time,
  eggs_count,
  queen_bee_eggs_count,
  queen_chance,
  max_eggs_limit,
  per_user_limit,
  trading_enabled,
  min_energy_to_hatch,
  min_health_to_hatch
) {
  console.log(`Initialzing BeesManager Object...`)
  console.log(` genesis mint start time = ${start_time}`)
  console.log(` eggs_count = ${eggs_count}`)
  console.log(` per_user_limit = ${per_user_limit}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(100000000);

  tx.moveCall({
    target: `${DRAGON_TRAINERS_PACKAGE_ID}::dragon_trainer::setup_bees_manager`,
    typeArguments: [],
    arguments: [tx.object(DeployerCap), 
                tx.pure(trading_royalty_pct), tx.pure(trading_gov_yield_pct),  tx.pure(trading_queen_maker_pct), 
                tx.pure(breeding_royalty_platform_pct), tx.pure(breeding_royalty_gov_yield_pct),  tx.pure(breeding_royalty_treasury_pct), 
                
                tx.pure(max_bids_per_bee), tx.pure(min_bid_amt),
                tx.pure(trainer_onboarding_fee_sui), tx.pure(mutation_fee),
                 tx.pure(start_time), tx.pure(eggs_count), 
                 tx.pure(queen_bee_eggs_count), tx.pure(queen_chance),
                  tx.pure(max_eggs_limit),
                  tx.pure(per_user_limit),
                  tx.pure(trading_enabled),
                  tx.pure(min_energy_to_hatch),
                  tx.pure(min_health_to_hatch) ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);
      return dex_objects;
      // Extract pool ID
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function setup_hidden_world(
  provider,
  signer,
  DRAGON_TRAINERS_PACKAGE_ID,
  DeployerCap,
  HiddenWorldCapability,
  max_active_duration, turn_duration, expiry_penalty_pct,
  min_sui_bet_amt, max_sui_bet_amt, session_health,
  session_energy, min_dragon_dust_chance, max_dragon_dust_chance,
  half_life, health_pct_to_emit_dust, max_capability_increase,
  max_power_pct
) {
  console.log(`Initialzing HiddenWorld Object...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(100000000);

  tx.moveCall({
    target: `${DRAGON_TRAINERS_PACKAGE_ID}::dragon_trainer::setup_hidden_world`,
    typeArguments: [], 
    arguments: [tx.object(DeployerCap),  tx.object(HiddenWorldCapability),
                tx.pure(max_active_duration), tx.pure(turn_duration), tx.pure(expiry_penalty_pct),
                tx.pure(min_sui_bet_amt), tx.pure(max_sui_bet_amt), tx.pure(session_health),
                tx.pure(session_energy), tx.pure(min_dragon_dust_chance), tx.pure(max_dragon_dust_chance),
                tx.pure(half_life), tx.pure(health_pct_to_emit_dust), tx.pure(max_capability_increase),
                tx.pure(max_power_pct) ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);
      return dex_objects;
      // Extract pool ID
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}





 

export async function setup_vesting_vault(
  provider,
  signer,
  VESTING_PACKAGE_ID,
  VestingVoteCap,
  VestingAdminCapability,
) {
  console.log(`Initialzing VestinVault Object...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${VESTING_PACKAGE_ID}::vesting::kraft_vesting_vault_obj`,
    typeArguments: [],
    arguments: [tx.object(VestingVoteCap), tx.object(VestingAdminCapability) ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);      
      let created = txn.effects.created;
      return dex_objects;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function add_hive_for_vesting(
  provider,
  signer,
  VESTING_PACKAGE_ID,
  vesting_vault,
  _cap,
  hive_coin,
  to_vest) {
  console.log(`ADDING HIVE TOKENS TO BE VESTED...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${VESTING_PACKAGE_ID}::vesting::add_hive_for_vesting`,
    typeArguments: [],
    arguments: [ tx.object(vesting_vault), tx.object(_cap), tx.object(hive_coin),
    tx.pure(to_vest) ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);      
      let created = txn.effects.created;
      return dex_objects;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function init_vesting_schedule(
  provider,
  signer,
  VESTING_PACKAGE_ID,
  vesting_vault,
  VestingAdminCapability,
  bee_governor,
  beneficiary, vested_hive_amt, is_clawback_allowed, start_timestamp, unlock_timestamp, vesting_duration) {
  console.log(`ADDING HIVE TOKENS TO BE VESTED...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${VESTING_PACKAGE_ID}::vesting::init_vesting_schedule`,
    typeArguments: [],
    arguments: [  tx.object(CLOCK), tx.object(vesting_vault), tx.object(VestingAdminCapability),  
                  tx.object(bee_governor),  tx.object(beneficiary),  tx.pure(vested_hive_amt), 
                  tx.pure(is_clawback_allowed),  tx.pure(start_timestamp),  tx.pure(unlock_timestamp),  tx.pure(vesting_duration)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });


 
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);      
      let created = txn.effects.created;
      return dex_objects;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
    return false
  }
}

export async function add_to_vesting_schedule(
  provider,
  signer,
  VESTING_PACKAGE_ID,
  vesting_vault,
  VestingAdminCapability,
  bee_governor,
  schedule, vested_hive_amt) {
  console.log(`ADDING HIVE TOKENS TO BE VESTED...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${VESTING_PACKAGE_ID}::vesting::add_to_vesting_schedule`,
    typeArguments: [],
    arguments: [  tx.object(CLOCK),  tx.object(VestingAdminCapability),  tx.object(vesting_vault),
                  tx.object(bee_governor),  tx.object(schedule),  tx.pure(vested_hive_amt)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });


 
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);      
      let created = txn.effects.created;
      return dex_objects;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
    return false
  }
}



export async function harvest_royalty_yield_for_builders(
  provider,
  signer,
  DRAGON_TRAINER_PACKAGE,
  MasterAccessKey,
  BEES_MANAGER,
  recepient_addr
) {
 
  // Execute transaction
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${DRAGON_TRAINER_PACKAGE}::dragon_trainer::harvest_royalty_yield_for_builders`,
    typeArguments: [],
    arguments: [ tx.object(MasterAccessKey),  tx.object(BEES_MANAGER),  
                  tx.pure(recepient_addr)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });


  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);      
      let created = txn.effects.created;
      return dex_objects;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
    return false
  }
}





export async function clawback_unvested_gems(
  provider,
  signer,
  VESTING_PACKAGE_ID,
  vesting_vault,
  queen_maker,
  VestingAdminCapability,
  bee_governor,
  schedule, vested_hive_amt) {
  console.log(`ADDING HIVE TOKENS TO BE VESTED...`)
    console.log(VESTING_PACKAGE_ID)
    console.log(vesting_vault)
    console.log(queen_maker)
    console.log(VestingAdminCapability)
    console.log(bee_governor)
    console.log(schedule)
    console.log(vested_hive_amt)

  // Execute transaction
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${VESTING_PACKAGE_ID}::vesting::clawback_unvested_gems`,
    typeArguments: [],
    arguments: [  tx.object(CLOCK),  tx.object(VestingAdminCapability),  tx.object(vesting_vault),  tx.object(queen_maker),
                  tx.object(bee_governor),  tx.object(schedule),  tx.pure(4000000)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });

  console.log(result);
  return

  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);      
      let created = txn.effects.created;
      return dex_objects;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
    return false
  }
}




export async function claim_released_tokens(
  provider,
  signer,
  VESTING_PACKAGE_ID,
  queen_maker,
  vesting_vault,
  bee_governor,
  schedule) {
  console.log(`ADDING HIVE TOKENS TO BE VESTED...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${VESTING_PACKAGE_ID}::vesting::claim_released_tokens`,
    typeArguments: [],
    arguments: [  tx.object(CLOCK), tx.object(queen_maker), tx.object(vesting_vault), tx.object(bee_governor), tx.object(schedule)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });

  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);      
      let created = txn.effects.created;
      return dex_objects;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
    return false
  }
}




export async function kraft_hive_entry_cap(
  provider,
  signer,
  YIELD_FLOW_PACKAGE_ID) {
  console.log(` Krafting HiveEntryCap ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  tx.moveCall({
    target: `${YIELD_FLOW_PACKAGE_ID}::yield_flow::kraft_hive_entry_cap`,
    typeArguments: [],
    arguments: []
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);
      return dex_objects;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function kraft_caps_for_launch(
  provider,
  signer,
  DRAGON_TRAINERS_PACKAGE_ID,
  deployer_cap,
  BEES_MANAGER,
  HIVE_AIRDROP_APP_NAME,
  HIVE_LOCKDROP_APP_NAME,
  INFUSION_APP_NAME,
  HIVE_CHRONICES_APP_NAME
) {
  console.log(` Krafting CAPS for Lockdrop + Infusion PHASE ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  tx.moveCall({
    target: `${DRAGON_TRAINERS_PACKAGE_ID}::dragon_trainer::kraft_caps_for_launch`,
    typeArguments: [],
    arguments: [tx.object(deployer_cap), tx.object(BEES_MANAGER),
    tx.pure(HIVE_AIRDROP_APP_NAME), tx.pure(HIVE_LOCKDROP_APP_NAME),
    tx.pure(INFUSION_APP_NAME), tx.pure(HIVE_CHRONICES_APP_NAME)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let dex_objects = parsePublishTxn(result);
      return dex_objects;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function init_AMM_pool_registry(
  provider,
  signer,
  is_two_pool,
  AMM_PACKAGE,
  AmmFeeCollectionCapability,
  init_hive_pol_pct,
  init_honey_pol_pct
) {
  console.log(`Initialzing 2 AMM PoolRegistry Object...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  if (is_two_pool) {
    tx.moveCall({
      target: `${AMM_PACKAGE}::two_pool::initialize_pool_registry`,
      typeArguments: [],
      arguments: [  tx.object(AmmFeeCollectionCapability), 
                    tx.pure(init_hive_pol_pct),
                    tx.pure(init_honey_pol_pct)
       ]
    });
  } else {
    tx.moveCall({
      target: `${AMM_PACKAGE}::three_pool::initialize_pool_registry`,
      typeArguments: [],
      arguments: [tx.object(AmmFeeCollectionCapability)]
    });

  }
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      // Extract pool ID
      // console.log(txn);
      let created = txn.effects.created;
      // console.log(created);
      for (const object of created) {
        // find id of liquidity pool
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function transfer_sui(provider, signer, receipient, amount, gas_budget) {
  console.log(`\n\n\nTRANSFERING ${amount / (1000000000)}M SUI to ${receipient}...`)
  const tx = new TransactionBlock();
  tx.setGasBudget(gas_budget);
  let sui_for_dragon_trainer = tx.splitCoins(tx.gas, [tx.pure(Number(amount))]);
  tx.transferObjects([sui_for_dragon_trainer], tx.pure(receipient));

  // tx.moveCall({
  //   target: `0x2::transfer::public_transfer`,
  //   typeArguments: [type],
  //   arguments: [sui_for_dragon_trainer, tx.pure(receipient)]
  // });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
}

export async function transfer_objects(provider, signer, receipient, objects, gas_budget) {
  const tx = new TransactionBlock();
  tx.setGasBudget(gas_budget);
  let objects_ = [];
  for (let i = 0; i < objects.length; i++) {
    objects_.push(tx.object(objects[i]));
  }
  tx.transferObjects(objects_, tx.pure(receipient));
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
}

export async function flip_claim_rewards_switch(provider, signer, _PACKAGE_ID, array, cap, lockdrop_for_pool) {
  const tx = new TransactionBlock();
  tx.setGasBudget(100000000);
  tx.moveCall({
    target: `${_PACKAGE_ID}::cetus_vampire_attack::flip_claim_rewards_switch`,
    typeArguments: array,
    arguments: [
      tx.object(cap),
      tx.object(lockdrop_for_pool)    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
}
 



export async function initialize_dragon_food_emissions(
  provider,
  signer,
  DRAGON_FOOD_PACKAGE_ID,
  dragon_food_cap,
  start_epoch,
  hive_proposal_deposit,
  voting_start_delay,
  voting_period_length,
  execution_delay,
  execution_period_length,
  proposal_required_quorum,
  proposal_approval_threshold,
  cur_cycle_start_epoch,
  cycle_duration,
  change_pct_per_cycle,
) {
  console.log(`\n Initializing POOL HIVES NECTAR (REPUTATION INFLATION ... ..`)
  console.log(`\n DRAGON-FOOD CAPABILITY STORED WITH DRAGON-FOOD OBJECT...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE_ID}::dragon_food::initialize_dragon_food_emissions`,
    typeArguments: [],
    arguments: [
      tx.object(dragon_food_cap),
      tx.pure(start_epoch), tx.pure(hive_proposal_deposit),
      tx.pure(voting_start_delay), tx.pure(voting_period_length), tx.pure(execution_delay),
      tx.pure(execution_period_length), tx.pure(proposal_required_quorum), tx.pure(proposal_approval_threshold),
      tx.pure(cur_cycle_start_epoch), tx.pure(cycle_duration), tx.pure(change_pct_per_cycle)
    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      false
    }
  } catch (error) {
    console.log(error);
  }
}



// export async function publish(packagePath, sui_client, signer, signer_address, gas_budget) {
//   try {
//     const { modules, dependencies } = JSON.parse(
//       execSync(`sui move build --dump-bytecode-as-base64 --path ${packagePath}`, {
//         encoding: "utf-8",
//       })
//     );
//     const tx = new TransactionBlock();
//     const [upgradeCap] = tx.publish({ modules, dependencies });
//     tx.transferObjects([upgradeCap], tx.pure(await signer_address));
//     tx.setGasBudget(gas_budget);
//     const publishTxn = await sui_client.signAndExecuteTransactionBlock({
//       signer: signer,
//       transactionBlock: tx,
//       options: {
//         showInput: true,
//         showEffects: true,
//         showEvents: true,
//         showObjectChanges: true,
//       },
//     });
//     return publishTxn;
//   } catch (error) {
//     console.log(error);
//   }
// }


// export async function upgradePackage(
//   packageId: string,
//   capId: string,
//   packagePath: string,
//   toolbox?: TestToolbox,
// ) {
//   // TODO: We create a unique publish address per publish, but we really could share one for all publishes.
//   if (!toolbox) {
//     toolbox = await setup();
//   }

//   // remove all controlled temporary objects on process exit
//   tmp.setGracefulCleanup();

//   const tmpobj = tmp.dirSync({ unsafeCleanup: true });

//   const { modules, dependencies, digest } = JSON.parse(
//     execSync(
//       `${SUI_BIN} move build --dump-bytecode-as-base64 --path ${packagePath} --install-dir ${tmpobj.name}`,
//       { encoding: 'utf-8' },
//     ),
//   );

//   const tx = new TransactionBlock();

//   const cap = tx.object(capId);
//   const ticket = tx.moveCall({
//     target: '0x2::package::authorize_upgrade',
//     arguments: [cap, tx.pure(UpgradePolicy.COMPATIBLE), tx.pure(digest)],
//   });

//   const receipt = tx.upgrade({
//     modules,
//     dependencies,
//     packageId,
//     ticket,
//   });

//   tx.moveCall({
//     target: '0x2::package::commit_upgrade',
//     arguments: [cap, receipt],
//   });

//   const result = await toolbox.client.signAndExecuteTransactionBlock({
//     transactionBlock: tx,
//     signer: toolbox.keypair,
//     options: {
//       showEffects: true,
//       showObjectChanges: true,
//     },
//   });

//   expect(result.effects?.status.status).toEqual('success');
// }



export async function upgrade_package(
  provider,
  signer,
  packageId,
  capId,
  packagePath,
) {
  console.log(`\n Upgrading Package ${packageId}...`)


  const { modules, dependencies, digest } = JSON.parse(
    execSync(
      `sui move build --dump-bytecode-as-base64 --path ${packagePath}`,
      { encoding: 'utf-8' },
    ),
  );

  const tx = new TransactionBlock();

  const cap = tx.object(capId);
  const ticket = tx.moveCall({
    target: '0x2::package::authorize_upgrade',
    arguments: [cap, tx.pure(UpgradePolicy.COMPATIBLE), tx.pure(digest)],
  });

  const receipt = tx.upgrade({
    modules,
    dependencies,
    packageId,
    ticket,
  });

  tx.moveCall({
    target: '0x2::package::commit_upgrade',
    arguments: [cap, receipt],
  });


  const result = await provider.signAndExecuteTransactionBlock({
    transactionBlock: tx,
    signer: signer,
    options: {
      showEffects: true,
      showObjectChanges: true,
    },
  });

  console.log(result.effects?.status);
}



export async function deposit_hive_as_lp_incentives(
  provider,
  signer,
  DRAGON_FOOD_PACKAGE_ID,
  dragon_food,
  hive_coins,
  incentives_amount
) {
  console.log(`\n Deposit HIVE as LP incentives  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  // let hive_coins = tx.splitCoins(tx.gas, [tx.pure(Number(1000000000))]);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE_ID}::dragon_food::deposit_hive_as_lp_incentives`,
    typeArguments: [],
    arguments: [tx.object(dragon_food),
    tx.object(hive_coins),
    tx.pure(incentives_amount)
    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");

    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}




export async function deposit_hive_to_treasury(
  provider,
  signer,
  DRAGON_TRAINER_PACKAGE_ID,
  bees_manager,
  hive_type,
  hive_coins,
  amt_to_deposit_in_treasury
) {
  console.log(`\n Deposit HIVE to DragonTrainer treasury ...`)
  console.log(DRAGON_TRAINER_PACKAGE_ID, bees_manager, hive_coins, amt_to_deposit_in_treasury);
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  let hive_to_deposit = tx.moveCall({
    target: `0x2::coin::split`,
    typeArguments: [hive_type],
    arguments: [ 
      tx.object(hive_coins),
      tx.pure(amt_to_deposit_in_treasury)
    ]
  });
  let hive_balance = tx.moveCall({
    target: `0x2::coin::into_balance`,
    typeArguments: [hive_type],
    arguments: [  hive_to_deposit ]
  });

  tx.moveCall({
    target: `${DRAGON_TRAINER_PACKAGE_ID}::dragon_trainer::deposit_hive_with_treasury`,
    typeArguments: [],
    arguments: [tx.object(bees_manager),
      hive_balance,
    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");

    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}





export async function add_app_to_hive_store(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  DragonDaoCapability,
  mapping_store,
  dof_identifier,
  only_owner_can_add_dof,
  only_owner_can_update_dof,
  only_owner_can_remove_dof,
  receipient
) {
  console.log(`\nKraft DOF Capability for accessing DOF's on UserProfiles ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  // let hive_coins = tx.splitCoins(tx.gas, [tx.pure(Number(1000000000))]);
  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::add_app_to_hive_store`,
    typeArguments: [],
    arguments: [tx.object(DragonDaoCapability),
    tx.object(mapping_store),
    tx.pure(dof_identifier),
    tx.pure(only_owner_can_add_dof),
    tx.pure(only_owner_can_update_dof),
    tx.pure(only_owner_can_remove_dof),
    tx.pure(receipient)
    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return parsePublishTxn(result)
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function initialize_hive_chronicles(
  provider,
  signer,
  hive_entry_PACKAGE_ID,
  hive_entry_cap,
  hive_chronicle_dof_cap,
  AIRDROP_APP_ACCESS_CAP,
  LOCKDROP_APP_ACCESS_CAP,
  INFUSION_APP_ACCESS_CAP,
  max_noises, max_chronicles, max_buzz_chains, max_rebuzzes, buffer
) {
  console.log(`\nINITIALIZING HIVE-CHRONICLES-ACCESS SHARED-OBJECT  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${hive_entry_PACKAGE_ID}::hive_chronicles::initialize_hive_chronicles`,
    typeArguments: [],
    arguments: [tx.object(hive_entry_cap), tx.object(hive_chronicle_dof_cap)
      , tx.object(AIRDROP_APP_ACCESS_CAP), tx.object(LOCKDROP_APP_ACCESS_CAP), tx.object(INFUSION_APP_ACCESS_CAP)
    
      , tx.pure(max_noises), tx.pure(max_chronicles), tx.pure(max_buzz_chains), tx.pure(max_rebuzzes), tx.pure(buffer)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
      return parsePublishTxn(result)
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function init_queen_maker(
  provider,
  signer,
  QUEEN_MAKER_PACKAGE_ID,
  Clock,
  hive_kraft_cap,
  init_tax_allowed,
  unlimited_deposit_window,
  limited_deposit_window,
  cooldown_period, 
) {
  console.log(`\n INITIALIZING HIVE TOTAL SUPPLY.....`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  console.log(`QUEEN_MAKER_PACKAGE_ID = ${QUEEN_MAKER_PACKAGE_ID}`)

  tx.moveCall({
    target: `${QUEEN_MAKER_PACKAGE_ID}::queen_maker::init_queen_maker`,
    typeArguments: [],
    arguments: [  tx.object(Clock), tx.object(hive_kraft_cap),
                  tx.pure(init_tax_allowed),
                  tx.pure(unlimited_deposit_window), tx.pure(limited_deposit_window), tx.pure(cooldown_period) ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  return parsePublishTxn(result);
}

// export async function deposit_hive_for_distribution(
//   provider,
//   signer,
//   DRAGON_FOOD_PACKAGE_ID,
//   dragon_food,
//   hive_gem_kraft_cap,
//   hive_kraft_cap,
//   bees_manager
// ) {
//   console.log(`\n INITIALIZING HIVE TOTAL SUPPLY.....`)
//   // Execute transaction
//   const tx = new TransactionBlock();
//   tx.setGasBudget(1000000000);
//   tx.moveCall({
//     target: `${DRAGON_FOOD_PACKAGE_ID}::dragon_food::deposit_hive_for_distribution`,
//     typeArguments: [],
//     arguments: [tx.object(dragon_food), tx.object(hive_gem_kraft_cap), tx.object(hive_kraft_cap), tx.object(bees_manager)]
//   });
//   const result = await provider.signAndExecuteTransactionBlock({
//     signer: signer,
//     transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
//       showInput: true,
//       showEffects: true,
//       showEvents: true,
//       showObjectChanges: true,
//     },
//   });
//   // Get transaction results 
//   let txhash = result.digest;
//   console.log(`Transaction hash: ${txhash}`);
//   return parsePublishTxn(result);
// }


export async function add_to_treasury(
  provider,
  signer,
  QUEEN_MAKER_PACKAGE_ID,
  queen_maker,
  bees_manager,
  hive_coin,
  to_deposit
) {
  console.log(`\n Depositing ${to_deposit / (1000000 * 1000000)}M HIVE Tokens into Treasury.....`);
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${QUEEN_MAKER_PACKAGE_ID}::queen_maker::deposit_hive_to_treasury`,
    typeArguments: [],
    arguments: [tx.object(queen_maker), tx.object(bees_manager), tx.object(hive_coin), tx.pure(to_deposit)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  return parsePublishTxn(result);
}


export async function init_dragon_dao(
  provider,
  signer,
  BEE_DAO_PACKAGE_ID,
  clock,
  dragon_dao_cap,
  sui_system_state,
  dsui_vault,
  hive_degenhive_map_store,
  bees_manager,
  disperser,
  sui_for_trainer_cost,
  hive_proposal_deposit,
  voting_start_delay,
  voting_period_length,
  execution_delay,
  execution_period_length,
  proposal_required_quorum,
  proposal_approval_threshold
) {
  console.log(`\n Initializing DRAGON DAO ...`)
  console.log(`\n DRAGON DAO CAPABILITY STORED WITH BEE-DAO-CONFIG OBJECT...`)
  console.log(`BEE_DAO_PACKAGE_ID = ${BEE_DAO_PACKAGE_ID}`)
  console.log(`clock = ${clock}`)
  console.log(`dragon_dao_cap = ${dragon_dao_cap}`)
  console.log(`sui_system_state = ${sui_system_state}`)
  console.log(`dsui_vault = ${dsui_vault}`)
  console.log(`hive_degenhive_map_store = ${hive_degenhive_map_store}`)
  console.log(`bees_manager = ${bees_manager}`)
  console.log(`disperser = ${disperser}`)
  console.log(`sui_for_trainer_cost = ${sui_for_trainer_cost}`)
  console.log(`hive_proposal_deposit = ${hive_proposal_deposit}`)
  console.log(`voting_start_delay = ${voting_start_delay}`)
  console.log(`voting_period_length = ${voting_period_length}`)
  console.log(`execution_delay = ${execution_delay}`)
  console.log(`execution_period_length = ${execution_period_length}`)
  console.log(`proposal_required_quorum = ${proposal_required_quorum}`)
  console.log(`proposal_approval_threshold = ${proposal_approval_threshold}`)


  // Execute transaction
  const tx = new TransactionBlock();

  tx.setGasBudget(1000000000);
  let sui_for_trainer = tx.splitCoins(tx.gas, [tx.pure(Number(sui_for_trainer_cost))]);


  tx.moveCall({
    target: `${BEE_DAO_PACKAGE_ID}::dragon_dao::init_dragon_dao`,
    typeArguments: [],
    arguments: [tx.object(clock), tx.object(dragon_dao_cap), tx.object(sui_system_state), tx.object(dsui_vault),
    tx.object(hive_degenhive_map_store), tx.object(bees_manager), tx.object(disperser), sui_for_trainer,
    tx.pure(hive_proposal_deposit), tx.pure(voting_start_delay), tx.pure(voting_period_length), tx.pure(execution_delay),
    tx.pure(execution_period_length), tx.pure(proposal_required_quorum), tx.pure(proposal_approval_threshold)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      // Extract pool ID
      // console.log(txn);
      let created = txn.effects.created;
      // console.log(created);
      for (const object of created) {
        // find id of liquidity pool
        if (object.owner.hasOwnProperty("Shared")) {
          let dragon_dao_obj =  object.reference.objectId;
          let other_objects = parsePublishTxn(result);
          return {"dragon_dao_obj": dragon_dao_obj, "other_objects": other_objects};
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function update_streamer_buzzes(
  provider,
  signer,
  DRAGON_TRAINER_PACKAGE,
  SUI_TYPE,
  cap,
  queen_maker,
  new_live_status,
  new_buzzes_count,
  energy_tax,
  new_max_streams_per_slot,
  hive_per_ad_slot,
  honey_per_ad_slot,
  first_rank_assets_limit,
  second_rank_assets_limit,
  third_rank_assets_limit,
  max_streams_to_store
) {
  console.log(`\n Making STREAMS LIVE...`)
  // console.log(DRAGON_TRAINER_PACKAGE)
  // console.log(SUI_TYPE)
  // console.log(cap)
  // console.log(queen_maker)
  // console.log(new_live_status)
  // console.log(new_buzzes_count)
  // console.log(min_bid_limit)
  // console.log(energy_tax)
  // console.log(new_max_streams_per_slot)
  // console.log(hive_per_ad_slot)
  // console.log(honey_per_ad_slot)

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${DRAGON_TRAINER_PACKAGE}::queen_maker::update_streamer_buzzes`,
    typeArguments: [SUI_TYPE],
    arguments: [tx.object(cap), tx.object(queen_maker),  
    tx.pure(new_live_status), tx.pure(new_buzzes_count), tx.pure(energy_tax),
    tx.pure(new_max_streams_per_slot), tx.pure(hive_per_ad_slot), tx.pure(honey_per_ad_slot)   
    , tx.pure(first_rank_assets_limit), tx.pure(second_rank_assets_limit), tx.pure(third_rank_assets_limit), tx.pure(max_streams_to_store)]
  });


  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function update_streamer_by_admin(
  provider,
  signer,
  DRAGON_TRAINER_PACKAGE,
  SUI_TYPE,
  cap,
  mapping_store,
  queen_maker,
  rank,
  user_trainer,
  access_type,
  sui_per_buzz,
  buzz_cost_in_hive,
  choosen_buzzes_count,
  collection_name,
  to_onboard,
  assets_limit,
  stream_over_for_epoch) {
  console.log(`\n Setting streamer ${user_trainer} fro rank ${rank}...`)
  // console.log(DRAGON_TRAINER_PACKAGE)
  // console.log(SUI_TYPE)
  // console.log(cap)
  // console.log(queen_maker)
  // console.log(new_live_status)
  // console.log(new_buzzes_count)
  // console.log(min_bid_limit)
  // console.log(energy_tax)
  // console.log(new_max_streams_per_slot)
  // console.log(hive_per_ad_slot)
  // console.log(honey_per_ad_slot)

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${DRAGON_TRAINER_PACKAGE}::queen_maker::update_streamer_by_admin`,
    typeArguments: [SUI_TYPE],
    arguments: [tx.object(CLOCK), tx.object(cap), tx.object(mapping_store),   tx.object(queen_maker),  tx.pure(rank),
    tx.object(user_trainer), tx.pure(access_type), tx.pure(sui_per_buzz),
    tx.pure(buzz_cost_in_hive), tx.pure(choosen_buzzes_count), tx.pure(collection_name)   
    , tx.pure(to_onboard), tx.pure(assets_limit), tx.pure(stream_over_for_epoch) ]
  });


  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


















// ---------------------------------------------------------------------x-------------------
// ----------------------------------- LOCKDROP MIGRATION FUNCTIONS ---------x-------------------
// ---------------------------------------------------------------------x-------------------
// ---------------------------------------------------------------------x-------------------

/// -=--> Initialize SUI - degenSUI POOL 
export async function infuse_sui_dsui_pool(
  provider,
  signer,
  hive_entry_PACKAGE_ID,
  SUI_TYPE,
  buidlers_cap,
  clock,
  chronicles_vault,
  lockdrop_vault,
  degenhive_pool,
  sui_system_state,
  dsui_vault,
  queen_maker,
  degensui_pirate_vault
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${hive_entry_PACKAGE_ID}::hive_chronicles::infuse_sui_dsui_pool`,
    typeArguments: [SUI_TYPE],
    arguments: [tx.object(buidlers_cap), tx.object(clock), tx.object(chronicles_vault), tx.object(lockdrop_vault), tx.object(degenhive_pool),
    tx.object(sui_system_state), tx.object(dsui_vault), tx.object(queen_maker), tx.object(degensui_pirate_vault)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return txhash;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
  return txhash;
}

export async function extract_liquidity_from_kriya(
  provider,
  signer,
  hive_entry_PACKAGE_ID,
  types_array,
  buidlers_cap,
  clock,
  chronicles_vault,
  KriyaAttackConfig,
  KriyaLockdropForPool,
  kriya_pool,
  LockdropForPool,
  queen_maker, 
  is_reverse
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${hive_entry_PACKAGE_ID}::hive_chronicles::${is_reverse ? "extract_liquidity_from_rev_kriya" : "extract_liquidity_from_kriya"}`,
    typeArguments: types_array,
    arguments: [tx.object(buidlers_cap), tx.object(clock), tx.object(chronicles_vault), tx.object(KriyaAttackConfig), tx.object(KriyaLockdropForPool),
    tx.object(kriya_pool), tx.object(LockdropForPool), tx.object(queen_maker)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return txhash;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
  return txhash;
}

export async function extract_liquidity_from_flowx(
  provider,
  signer,
  hive_entry_PACKAGE_ID,
  types_array,
  buidlers_cap,
  clock,
  chronicles_vault,
  FlowxAttackConfig,
  FlowxLockdropForPool,
  flowx_container,
  LockdropForPool,
  queen_maker
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${hive_entry_PACKAGE_ID}::hive_chronicles::extract_liquidity_from_flowx`,
    typeArguments: types_array,
    arguments: [tx.object(buidlers_cap), tx.object(clock), tx.object(chronicles_vault), tx.object(FlowxAttackConfig), tx.object(FlowxLockdropForPool),
    tx.object(flowx_container), tx.object(LockdropForPool), tx.object(queen_maker)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return txhash;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
  return txhash;
}

export async function extract_liquidity_from_rev_flowx(
  provider,
  signer,
  hive_entry_PACKAGE_ID,
  types_array,
  buidlers_cap,
  clock,
  chronicles_vault,
  FlowxAttackConfig,
  FlowxLockdropForPool,
  flowx_container,
  LockdropForPool,
  queen_maker
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${hive_entry_PACKAGE_ID}::hive_chronicles::extract_liquidity_from_rev_flowx`,
    typeArguments: types_array,
    arguments: [tx.object(buidlers_cap), tx.object(clock), tx.object(chronicles_vault), tx.object(FlowxAttackConfig), tx.object(FlowxLockdropForPool),
    tx.object(flowx_container), tx.object(LockdropForPool), tx.object(queen_maker)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return txhash;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
  return txhash;
}


export async function extract_liquidity_from_cetus(
  provider,
  signer,
  cetus_lockdrop_PACKAGE_ID,
  types_array,
  buidlers_cap,
  clock,
  CetusAttackConfig,
  CetusLockdropForPool,
  limit,
  CetusGlobalConfig,
  cetus_pool,
  rewards_vault
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${cetus_lockdrop_PACKAGE_ID}::cetus_vampire_attack::extract_liquidity_from_cetus`,
    typeArguments: types_array,
    arguments: [tx.object(clock), tx.object(buidlers_cap), tx.object(CetusAttackConfig), tx.object(CetusLockdropForPool),
    tx.pure(limit), tx.object(CetusGlobalConfig), tx.object(cetus_pool), tx.object(rewards_vault)]
  });


  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return txhash;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
  return txhash;
}

export async function claim_liquidity_from_cetus(
  provider,
  signer,
  hive_entry_PACKAGE_ID,
  types_array,
  buidlers_cap,
  clock,
  chronicles_vault,
  CetusAttackConfig,
  CetusLockdropForPool,
  lockdrop_pool,
  queen_maker,
  is__reverse
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${hive_entry_PACKAGE_ID}::hive_chronicles::${is__reverse ? "claim_liquidity_from_rev_cetus" : "claim_liquidity_from_cetus"}`,
    typeArguments: types_array,
    arguments: [tx.object(buidlers_cap), tx.object(clock), tx.object(chronicles_vault),
    tx.object(CetusAttackConfig),
    tx.object(CetusLockdropForPool),
    tx.object(lockdrop_pool),
    tx.object(queen_maker)]
  });

  // await simulate_transaction(provider, tx, "0x9748d7b844074b9ca28dd3fd14ca9a6bef1c9351d0c3401ca2ad95e330e958c7");
  // return
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return txhash;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function add_liquidity_to_degenhive(
  provider,
  signer,
  hive_entry_PACKAGE_ID,
  types_array,
  buidlers_cap,
  clock,
  chronicles_vault,
  lockdrop_pool,
  degenhive_pool,
  queen_maker
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${hive_entry_PACKAGE_ID}::hive_chronicles::add_liquidity_to_degenhive`,
    typeArguments: types_array,
    arguments: [tx.object(buidlers_cap), tx.object(clock), tx.object(chronicles_vault),

    tx.object(lockdrop_pool),
    tx.object(degenhive_pool),

    tx.object(queen_maker)]
  });

  // await simulate_transaction(provider, tx, "0x9748d7b844074b9ca28dd3fd14ca9a6bef1c9351d0c3401ca2ad95e330e958c7");
  // return
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return txhash;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function stake_vault_lp_tokens_0_fruits(
  provider,
  signer,
  lockdrop_PACKAGE_ID,
  lockdrop_vault,
  dragon_food,
  pool_hive
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${lockdrop_PACKAGE_ID}::lockdrop::stake_vault_lp_tokens_0_fruits`,
    typeArguments: [],
    arguments: [tx.object(lockdrop_vault), tx.object(dragon_food), tx.object(pool_hive)]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function stake_pooldrop_lp_tokens_0_fruits(
  provider,
  signer,
  lockdrop_PACKAGE_ID,
  types,
  lockdrop_for_pool,
  dragon_food,
  pool_hive
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${lockdrop_PACKAGE_ID}::lockdrop::stake_pooldrop_lp_tokens_0_fruits`,
    typeArguments: types,
    arguments: [tx.object(lockdrop_for_pool), tx.object(dragon_food), tx.object(pool_hive)]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


// ---------------------------------------------------------------------x-------------------
// ----------------------------------- SUI-HIVE POOL INFUSION ---------x-------------------
// ---------------------------------------------------------------------x-------------------
// ---------------------------------------------------------------------x-------------------


export async function query_infusion_vault_state(
  provider,
  sender,
  infusion_PACKAGE_ID,
  types,
  identifier,
  bees_manager
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${infusion_PACKAGE_ID}::infusion::query_infusion_vault_state`,
    typeArguments: types,
    arguments: [tx.pure(identifier), tx.object(bees_manager)]
  });

  const result = await provider.devInspectTransactionBlock({
    sender: sender,
    transactionBlock: tx,
  });
  console.log(result);

  const bcs = new BCS(getSuiMoveConfig());
  // let pool_address = bcs.de(BCS.ADDRESS, Uint8Array.from(result.results[0].returnValues[5][0]), "hex");
  let available_usdc_balance = bcs.de(BCS.U64, Uint8Array.from(result.results[0].returnValues[6][0]), "hex");
  let available_hive_balance = bcs.de(BCS.U64, Uint8Array.from(result.results[0].returnValues[7][0]), "hex");
  let total_hive_delegated = bcs.de(BCS.U64, Uint8Array.from(result.results[0].returnValues[8][0]), "hex");
  let total_usdc_delegated = bcs.de(BCS.U64, Uint8Array.from(result.results[0].returnValues[9][0]), "hex");

  // console.log(`\nPool Address: ${pool_address}`);
  console.log(`\nAvailable SUI Balance: ${available_usdc_balance}`);
  console.log(`\nAvailable HIVE Balance: ${available_hive_balance}`);
  console.log(`\nTotal HIVE Delegated: ${total_hive_delegated}`);
  console.log(`\nTotal SUI Delegated: ${total_usdc_delegated}`);

}


export async function get_released_and_claimable_gems_for_schedule(
  provider,
  sender,
  vesting_PACKAGE_ID,
  schedule
) {

  console.log(`\n Getting released and claimable gems for schedule.....`)
  console.log(`vesting_PACKAGE_ID = ${vesting_PACKAGE_ID}`)
  console.log(`schedule = ${schedule}`)

  // Execute transaction
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${vesting_PACKAGE_ID}::vesting::get_released_and_claimable_gems_for_schedule`,
    typeArguments: [],
    arguments: [tx.object("0xe7f58748d077b086c6a6f6fa0e0cedf51b2edf516155c4487ccf58501d68ff8f"), tx.object(CLOCK)]
  });

  const result = await provider.devInspectTransactionBlock({
    sender: "0x7e4c78541f4c1731abef4e7604807359f200d4d16f8565082cb115a627832d6c",
    transactionBlock: tx,
  });
 
  const bcs = new BCS(getSuiMoveConfig());
  let total_vested_gems_amt = bcs.de(BCS.U64, Uint8Array.from(result.results[0].returnValues[0][0]), "hex");
  let claimable_hive_amt = bcs.de(BCS.U64, Uint8Array.from(result.results[0].returnValues[1][0]), "hex");

  console.log(`total_vested_gems_amt: ${total_vested_gems_amt}`);
  console.log(`claimable_hive_amt: ${claimable_hive_amt}`);

}



export async function query_infusion_vault_pol_metrics(
  provider,
  sender,
  infusion_PACKAGE_ID,
  types,
  identifier,
  bees_manager
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${infusion_PACKAGE_ID}::infusion::query_infusion_vault_pol_metrics`,
    typeArguments: types,
    arguments: [tx.pure(identifier), tx.object(bees_manager)]
  });

  const result = await provider.devInspectTransactionBlock({
    sender: sender,
    transactionBlock: tx,
  });
  console.log(result);
}


export async function update_initial_prices(
  provider,
  signer,
  two_pool_PACKAGE_ID,
  types,
  pool_id,
  prices_vec
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${two_pool_PACKAGE_ID}::two_pool::update_initial_prices`,
    typeArguments: types,
    arguments: [tx.object(pool_id), tx.pure(prices_vec)]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function kraft_genesis_honey(
  provider,
  signer,
  VESTING_PACKAGE,
  vesting_vault,
  dragon_food,
  honey_kraft_cap,
  bees_manager,
  lp_incentives_pct,
  treasury_pct,
  dragon_eggs_basket_pct,
  vesting_pct
) {
  console.log(VESTING_PACKAGE)
  console.log(vesting_vault)
  console.log(dragon_food)
  console.log(bees_manager)
  console.log(lp_incentives_pct)
  console.log(treasury_pct)

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${VESTING_PACKAGE}::vesting::kraft_genesis_honey`,
    typeArguments: [],
    arguments: [ tx.object(vesting_vault), tx.object(dragon_food), tx.object(honey_kraft_cap), 
                tx.object(bees_manager), tx.pure(lp_incentives_pct), tx.pure(treasury_pct),  
                tx.pure(dragon_eggs_basket_pct), tx.pure(vesting_pct) ]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}




export async function deposit_hive_with_dragon_eggs_basket(
  provider,
  signer,
  DRAGON_TRAINER_PACKAGE,
  bees_manager,
  hive_coins,
  amt,
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${DRAGON_TRAINER_PACKAGE}::dragon_trainer::deposit_hive_with_dragon_eggs_basket`,
    typeArguments: [],
    arguments: [ tx.object(bees_manager), tx.object(hive_coins), tx.pure(amt) ]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}




export async function new_add_app_to_hive_store(
  provider,
  signer,
  DRAGON_TRAINER_PACKAGE,
  cap,
  bees_manager,
  mapping_store,
  app_name,
  hive_rewards,
  honey_rewards,
  receipient,
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${DRAGON_TRAINER_PACKAGE}::dragon_trainer::add_app_to_hive_store`,
    typeArguments: [],
    arguments: [ tx.object(cap), tx.object(bees_manager), tx.object(mapping_store), tx.pure(app_name), tx.pure(hive_rewards), tx.pure(honey_rewards), tx.pure(receipient) ]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function init_meme_launchpad(
  provider,
  signer,
  MEME_LAUNCHPAD_PACKAGE,
  cap,
  meme_cap,
  game_master_key,
  is_live,
  init_params,
  weights,
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${MEME_LAUNCHPAD_PACKAGE}::memepad::init_meme_launchpad`,
    typeArguments: [],
    arguments: [ tx.object(cap), tx.object(meme_cap), tx.object(game_master_key), tx.pure(is_live), tx.pure(init_params), tx.pure(weights) ]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}






export async function infuse_sui_hive_pool(
  provider,
  signer,
  hive_entry_PACKAGE_ID,
  types,
  chronicles_vault,
  clock,
  honey_kraft_cap,
  user_hive_rewards_access_cap,
  bees_manager,
  queen_maker,
  sui_hive_pool,
  sui_honey_pool,
  two_pool_registry,
  three_pool_registry
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${hive_entry_PACKAGE_ID}::hive_chronicles::infuse_sui_hive_pool`,
    typeArguments: types,
    arguments: [tx.object(chronicles_vault), tx.object(clock), tx.object(user_hive_rewards_access_cap),  tx.object(honey_kraft_cap),
    tx.object(bees_manager), tx.object(queen_maker), tx.object(sui_hive_pool), tx.object(sui_honey_pool)
      , tx.object(two_pool_registry), tx.object(three_pool_registry) ]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function testnet_infuse_sui_hive_pool(
  provider,
  signer,
  HIVE_ENTRY_PACKAGE,
  types,
  chronicles_vault,
  clock,
  honey_kraft_cap,
  bees_manager,
  queen_maker,
  sui_amt,
  hive_coins,
  hive_amt,
  sui_hive_pool,
  sui_honey_pool,
  two_pool_registry,
  three_pool_registry
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  let sui_for_pools = tx.splitCoins(tx.gas, [tx.pure(Number(sui_amt))]);

  tx.moveCall({
    target: `${HIVE_ENTRY_PACKAGE}::hive_chronicles::new_test_infuse_sui_hive_pool`,
    typeArguments: types,
    arguments: [  tx.object(chronicles_vault), tx.object(clock),   tx.object(honey_kraft_cap),
    tx.object(bees_manager), tx.object(queen_maker), sui_for_pools, tx.pure(sui_amt), tx.object(hive_coins), tx.pure(hive_amt),    
    tx.object(sui_hive_pool), tx.object(sui_honey_pool)
      , tx.object(two_pool_registry), tx.object(three_pool_registry) ]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function kraft_honey_manager(
  provider,
  signer,
  infusion_PACKAGE_ID,
  honey_type,
  policy_cap
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${infusion_PACKAGE_ID}::burn_honey::kraft_burn_cap`,
    typeArguments: [honey_type],
    arguments: [tx.object(policy_cap)]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function testing_update_policy(
  provider,
  signer,
  PACKAGE_ID,
  type,
  policy,
  brn_cap
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${PACKAGE_ID}::burn_honey::testing_update_policy`,
    typeArguments: [type],
    arguments: [tx.object(policy), tx.object(brn_cap)]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function infusion_stake_lp_tokens_0_fruits(
  provider,
  signer,
  hive_entry_PACKAGE_ID,
  types,
  chronicles_vault,
  bees_manager,
  dragon_food,
  pool_hive
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${hive_entry_PACKAGE_ID}::hive_chronicles::stake_lp_tokens_0_fruits`,
    typeArguments: types,
    arguments: [tx.object(chronicles_vault), tx.object(bees_manager), tx.object(dragon_food), tx.object(pool_hive)]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function simulate_transaction(suiClient, txb, sender) {

  // Simulate tx
  let resp = await suiClient.devInspectTransactionBlock({
    transactionBlock: txb,
    sender: sender
  });
  console.log("simulate_for_gas");
  console.log(resp);
}


// ---------------------------------------------------------------------x-------------------
// ----------------------------------- HIVE ORACLE FUNCTIONS -----------x-------------------
// ---------------------------------------------------------------------x-------------------

export async function setup_hive_oracle(
  provider,
  signer,
  TWO_TOKEN_AMM_PACKAGE,
  TWAP_UPDATE_CAP,
  sui_hive_pool_addr,
  usdc_sui_pool_addr
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  tx.moveCall({
    target: `${TWO_TOKEN_AMM_PACKAGE}::oracle::setup_hive_oracle`,
    typeArguments: [],
    arguments: [tx.object(TWAP_UPDATE_CAP), tx.pure(sui_hive_pool_addr), tx.pure(usdc_sui_pool_addr)]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function update_honey_for_engagement_per_epoch(
  provider,
  signer,
  TWO_TOKEN_AMM_PACKAGE,
  cap,
  honey_manager,
  honey_for_engagement_per_epoch
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  tx.moveCall({
    target: `${TWO_TOKEN_AMM_PACKAGE}::honey_trade::update_honey_for_engagement_per_epoch`,
    typeArguments: [],
    arguments: [tx.object(cap), tx.object(honey_manager), tx.pure(honey_for_engagement_per_epoch)]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function update_hive_oracle(
  provider,
  signer,
  TWO_TOKEN_AMM_PACKAGE,
  BEE_DAO_CAP,
  oracle,
  sui_hive_pool_addr,
  usdc_sui_pool_addr
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  tx.moveCall({
    target: `${TWO_TOKEN_AMM_PACKAGE}::oracle::update_hive_oracle`,
    typeArguments: [],
    arguments: [tx.object(BEE_DAO_CAP), tx.pure(oracle), tx.pure(sui_hive_pool_addr), tx.pure(usdc_sui_pool_addr)]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}




export async function update_hive_oracle_price(
  provider,
  signer,
  TWO_TOKEN_AMM_PACKAGE,
  types_array,
  clock,
  HiveOracle,
  bees_manager,
  usdc_sui_pool,
  sui_hive_pool
) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  tx.moveCall({
    target: `${TWO_TOKEN_AMM_PACKAGE}::oracle::update_hive_oracle_price`,
    typeArguments: types_array,
    arguments: [tx.object(clock), tx.object(HiveOracle), tx.object(bees_manager), tx.pure(usdc_sui_pool), tx.pure(sui_hive_pool)]
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



// ---------------------------------------------------------------------x-------------------
// ----------------------------------- DRAGON-FOOD -::- ADMIN FUNCTIONS ---------x-------------------
// ---------------------------------------------------------------------x-------------------
// - update_pool_hive_points::  Update points via which hives are distributed to LP coin pool stakers
// ---------------------------------------------------------------------x-------------------

export async function deposit_honey_to_dragon_food(
  provider,
  signer,
  DRAGON_FOOD_PACKAGE,
  dragon_food,
  dragon_dao_capability,
  honey_manager,
  to_deposit
) {
  console.log(`\nDeposiing HONEY Tokens to DRAGON-FOOD = ${to_deposit / 1e6} HONEYs ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::deposit_honey_to_dragon_food`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_capability), tx.object(dragon_food), tx.object(honey_manager), tx.pure(to_deposit)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}


export async function update_emissions_per_epoch(
  provider,
  signer,
  DRAGON_FOOD_PACKAGE,
  dragon_food,
  dragon_dao_capability,
  new_honey_per_epoch,
  new_gems_per_epoch,
  change_pct_per_cycle
) {
  console.log(`\nSetting HONEY per epoch = ${new_honey_per_epoch / 1e6} HONEY per epoch,  HIVE per epoch = ${new_gems_per_epoch / 1e6} HIVE per epoch..`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::update_emissions_per_epoch`,
    typeArguments: [],
    arguments: [tx.object(dragon_food), tx.object(dragon_dao_capability), tx.pure(new_honey_per_epoch), tx.pure(new_gems_per_epoch), tx.pure(change_pct_per_cycle)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}


export async function update_pool_hive_points(
  provider,
  signer,
  DRAGON_FOOD_PACKAGE,
  dragon_food,
  dragon_dao_capability,
  pool_hive_ids,
  points_for_pool_hives
) {
  console.log(`\nUpdating points for PoolHive's...`)
  console.log(`\DRAGON_FOOD_PACKAGE: ${DRAGON_FOOD_PACKAGE}`)
  console.log(`\nDragonFood: ${dragon_food}`)
  console.log(`\nDragonDaoCapability: ${dragon_dao_capability}`)
  console.log(`\nPoolHiveIds: ${pool_hive_ids}`)
  console.log(`\nPointsForPoolHives: ${points_for_pool_hives}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::update_pool_hive_points`,
    typeArguments: [],
    arguments: [tx.object(dragon_food), tx.object(dragon_dao_capability), tx.pure(pool_hive_ids), tx.pure(points_for_pool_hives)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function submit_pool_hive_proposal(
  provider,
  signer,
  type_array,
  DRAGON_FOOD_PACKAGE,
  dragon_food,
  pool_hive_id,
  sui_lockup_amt,
  proposal_type,
  title,
  description,
  link,
  new_fee_info, // vector (min 2 length) [total_fee_bps, bees_fee_pct]
  new_params, // vector
  new_weights, // vector
) {
  console.log(`\nCreating proposal for PoolHive ${pool_hive_id}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  let sui_lockup = tx.splitCoins(tx.gas, [tx.pure(Number(sui_lockup_amt))]);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::submit_proposal`,
    typeArguments: type_array,
    arguments: [tx.object(dragon_food), tx.object(pool_hive_id), sui_lockup, tx.pure(proposal_type)
      , tx.pure(title), tx.pure(description), tx.pure(link), tx.pure(new_fee_info), tx.pure(new_params), tx.pure(new_weights)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function removeExpiredPoolHiveProposal(
  provider,
  signer,
  type_array,
  DRAGON_FOOD_PACKAGE,
  pool_hive_id,
  disperser,
  proposal_id,
) {
  console.log(`\nRemoving Expired propsoal for PoolHive ${pool_hive_id}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::removeExpiredProposal`,
    typeArguments: type_array,
    arguments: [tx.object(pool_hive_id), tx.object(disperser), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function executeTwoPoolProposal(
  provider,
  signer,
  type_array,
  DRAGON_FOOD_PACKAGE,
  dragon_food,
  pool_hive_id,
  liquidity_pool,
  proposal_id,
) {
  console.log(`\nExecuting 2 pool propsoal via PoolHive - ${pool_hive_id}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::executeTwoPoolProposal`,
    typeArguments: type_array,
    arguments: [tx.object(dragon_food), tx.object(pool_hive_id), tx.object(liquidity_pool), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function executeThreePoolProposal(
  provider,
  signer,
  type_array,
  DRAGON_FOOD_PACKAGE,
  dragon_food,
  pool_hive_id,
  liquidity_pool,
  proposal_id,
) {
  console.log(`\nExecuting 3 pool propsoal via PoolHive - ${pool_hive_id}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::executeThreePoolProposal`,
    typeArguments: type_array,
    arguments: [tx.object(dragon_food), tx.object(pool_hive_id), tx.object(liquidity_pool), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function submit_proposal_to_add_fruit(
  provider,
  signer,
  HIVE_TYPE,
  type_array,
  DRAGON_FOOD_PACKAGE,
  dragon_food,
  pool_hive_id,
  hive_lockup,
  proposal_type,
  title,
  description,
  link,
  fruit_start_epoch,
  fruit_end_epoch,
  network_url
) {
  console.log(`\nCreating proposal to add HoneyFruit ${type_array[1]} points for PoolHive ${pool_hive_id}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  const hive_lockup_ = await mergeCoinsIfNeeded(
    HIVE_TYPE,
    hive_lockup,
    1000 * 1000000,
    tx,
    network_url
  );

  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::submit_proposal_to_add_fruit`,
    typeArguments: type_array,
    arguments: [tx.object(dragon_food), tx.object(pool_hive_id), hive_lockup_, tx.pure(proposal_type)
      , tx.pure(title), tx.pure(description), tx.pure(link), tx.pure(fruit_start_epoch), tx.pure(fruit_end_epoch)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function make_vote_on_proposal_for_pooldrop(
  provider,
  signer,
  type_array,
  LOCKDROP_PACKAGE,
  cap,
  pool_hive_id,
  lockdrop_for_pool,
  proposal_id,
  vote) {
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${LOCKDROP_PACKAGE}::lockdrop::make_vote_on_proposal_for_pooldrop`,
    typeArguments: type_array,
    arguments: [tx.object(cap), tx.object(pool_hive_id), tx.object(lockdrop_for_pool), tx.pure(proposal_id)
      , tx.pure(vote)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function make_vote_on_proposal_for_vault(
  provider,
  signer,
  type_array,
  LOCKDROP_PACKAGE,
  cap,
  pool_hive_id,
  lockdrop_vault,
  proposal_id,
  vote) {

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${LOCKDROP_PACKAGE}::lockdrop::make_vote_on_proposal_for_vault`,
    typeArguments: type_array,
    arguments: [tx.object(cap), tx.object(pool_hive_id), tx.object(lockdrop_vault), tx.pure(proposal_id), tx.pure(vote)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}
















export async function evaluate_poolHive_proposal(
  provider,
  signer,
  type_array,
  DRAGON_FOOD_PACKAGE,
  dragon_food,
  pool_hive_id,
  queen_maker,
  proposal_id,
  YieldFarm
) {
  console.log(`\nEvaluating proposal ${proposal_id} for PoolHive ${pool_hive_id}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::evaluateProposal`,
    typeArguments: type_array,
    arguments: [tx.object(dragon_food), tx.object(pool_hive_id), tx.object(queen_maker), tx.pure(proposal_id), tx.object(YieldFarm)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function executeProposalToAddFruit(
  provider,
  signer,
  type_array,
  DRAGON_FOOD_PACKAGE,
  dragon_food,
  pool_hive_id,
  proposal_id
) {
  console.log(`\nExecuting proposal ${proposal_id} to add HoneyFruit for PoolHive ${pool_hive_id}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::executeProposalToAddFruit`,
    typeArguments: type_array,
    arguments: [tx.object(dragon_food), tx.object(pool_hive_id), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    }
    else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function transfer_kiosk(
  provider,
  signer,
  type_array,
  DRAGON_TRAINER_PACKAGE,
  creator_trainer,
  new_creator_trainer
) {
  console.log(`\ntrnasferring HiveKiosk objects`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  if (is_sui_fruit) {
    tx.setGasBudget(fruits_amt + 30000000);
    fruits_coin_obj = tx.splitCoins(tx.gas, [tx.pure(Number(fruits_amt))]);
  } else {
    fruits_coin_obj = tx.object(fruits_coin_obj);
  }

  tx.moveCall({
    target: `${DRAGON_TRAINER_PACKAGE}::dragon_trainer::transfer_kiosk`,
    typeArguments: type_array,
    arguments: [tx.object(MAPPING_STORE), tx.object(creator_trainer), tx.object(new_creator_trainer), tx.pure(collection_name)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


















export async function add_more_fruits(
  provider,
  signer,
  type_array,
  DRAGON_FOOD_PACKAGE,
  pool_hive_id,
  fruits_coin_obj,
  fruits_amt,
  is_sui_fruit
) {
  console.log(`\nAdding HoneyFruits for PoolHive ${pool_hive_id}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  if (is_sui_fruit) {
    tx.setGasBudget(fruits_amt + 30000000);
    fruits_coin_obj = tx.splitCoins(tx.gas, [tx.pure(Number(fruits_amt))]);
  } else {
    fruits_coin_obj = tx.object(fruits_coin_obj);
  }

  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::add_more_fruits_coins`,
    typeArguments: type_array,
    arguments: [tx.object(pool_hive_id), fruits_coin_obj, tx.pure(fruits_amt)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function remove_expired_fruit(
  provider,
  signer,
  type_array,
  DRAGON_FOOD_PACKAGE,
  pool_hive_id,
  honey_fruits_object_id,
) {
  console.log(`\nRemoving expired HoneyFruit ${honey_fruits_object_id} for PoolHive ${pool_hive_id}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${DRAGON_FOOD_PACKAGE}::dragon_food::remove_expired_fruit`,
    typeArguments: type_array,
    arguments: [tx.object(pool_hive_id), tx.object(honey_fruits_object_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}




// ---------------------------------------------------------------------x-------------------
// ----------------------------------- DRAGON DAO -::- ADMIN FUNCTIONS ---------x-------------------
// ---------------------------------------------------------------------x-------------------
// - update_pool_hive_points::  Update points via which hives are distributed to LP coin pool stakers
// ---------------------------------------------------------------------x-------------------

// export async function update_pool_hive_points(
//   provider,
//   signer,
//   DRAGON_FOOD_PACKAGE,
//   dragon_food,
//   dragon_dao_capability,
//   pool_hive_ids,
//   points_for_pool_hives
// ) {
//   console.log(`\nCrafting new skin...`)
//   // Execute transaction
//   const tx = new TransactionBlock();
//   tx.setGasBudget(30000000);
//   tx.moveCall({
//     target: `${DRAGON_FOOD_PACKAGE}::dragon_dao::craft_new_skin`,
//     typeArguments: [],
//     arguments: [tx.object(CLOCK), tx.object(dragon_dao_config), tx.object(skin_kraft_cap), tx.object(bees_manager), tx.object(sui_disperser),
//                 tx.object(prompts_record), tx.object(profile), tx.object(skin), tx.object(version), tx.object(sui_coins),
//     ]
//   });
//   const result = await provider.signAndExecuteTransactionBlock({ signer: signer,  transactionBlock: tx, requestType: 'WaitForEffectsCert' });
//   // Get transaction results 
//   let txhash = result.digest;
//   console.log(`Transaction hash: ${txhash}`);
//   try {
//     await sleep(3500);
//     const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
//     let status = txn.effects.status;
//     if (status.status == 'success') {
//       console.log("Transaction successful\n");
//     } else {
//       console.log(`Transaction failed: ${status.error}\n`);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }


export async function make_proposal_add_coins_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  title,
  description,
  link,
  sui_lockup_amt,
  tokens,
  decimals
) {
  console.log(`\nMaking proposal -- Add decimal values for coins which don't have metadata to Config ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  let sui_lockup = tx.splitCoins(tx.gas, [tx.pure(Number(sui_lockup_amt))]);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::make_proposal_add_coins_transition`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.pure(title), tx.pure(description), tx.pure(link), sui_lockup,
    tx.pure(tokens), tx.pure(decimals)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function make_proposal_stable_identifier_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  stable_coin_identifier,
  title,
  description,
  link,
  sui_lockup_amt,
  to_add
) {
  console.log(`\nMaking proposal -- Set coins as stable identifiers to Config (so they are set as 1st coins in a curve pool) ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  let sui_lockup = tx.splitCoins(tx.gas, [tx.pure(Number(sui_lockup_amt))]);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::make_proposal_stable_identifier_transition`,
    typeArguments: [stable_coin_identifier],
    arguments: [tx.object(dragon_dao_config), tx.pure(title), tx.pure(description), tx.pure(link), sui_lockup, tx.pure(to_add)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function make_proposal_curve_fee_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  curve_identifier,
  title,
  description,
  link,
  sui_lockup_amt,
  total_fee_bps,
  bees_fee_pct,
) {
  console.log(`\nMaking proposal -- update default fee for a curve type in Config ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  let sui_lockup = tx.splitCoins(tx.gas, [tx.pure(Number(sui_lockup_amt))]);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::make_proposal_curve_fee_transition`,
    typeArguments: [curve_identifier],
    arguments: [tx.object(dragon_dao_config), tx.pure(title), tx.pure(description), tx.pure(link), sui_lockup, tx.pure(total_fee_bps), tx.pure(bees_fee_pct)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function make_proposal_treasury_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  title,
  description,
  link,
  sui_lockup_amt,
  new_treasury_percent,
  to_distribute,
  recepient
) {
  console.log(`\nMaking proposal --  Update treasury % / distribute treasury resources (Config) ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  let sui_lockup = tx.splitCoins(tx.gas, [tx.pure(Number(sui_lockup_amt))]);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::make_proposal_treasury_transition`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.pure(title), tx.pure(description), tx.pure(link), sui_lockup, tx.pure(new_treasury_percent), tx.pure(to_distribute), tx.pure(recepient)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function make_proposal_pool_kraft_fee_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  title,
  description,
  link,
  sui_lockup_amt,
  new_fee,
  for_2_amm,
  for_3_amm
) {
  console.log(`\nMaking proposal --   2 / 3 token amm - update creation fee for pool ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  let sui_lockup = tx.splitCoins(tx.gas, [tx.pure(Number(sui_lockup_amt))]);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::make_proposal_pool_kraft_fee_transition`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.pure(title), tx.pure(description), tx.pure(link), sui_lockup, tx.pure(new_fee), tx.pure(for_2_amm), tx.pure(for_3_amm)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function make_proposal_dragon_food_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  title,
  description,
  link,
  hive_lockup,
  new_params,
  to_update_emissions_per_epoch,
  new_hive_per_epoch,
  pool_hive_addrs,
  points_for_pool_hives
) {
  console.log(`\nMaking proposal --   dragon_food_transition  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::make_proposal_dragon_food_transition`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.pure(title), tx.pure(description), tx.pure(link), tx.object(hive_lockup), tx.pure(new_params)
      , tx.pure(to_update_emissions_per_epoch), tx.pure(new_hive_per_epoch), tx.pure(pool_hive_addrs) , tx.pure(points_for_pool_hives) 
    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

 


export async function make_proposal_update_trainer_config_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  title,
  description,
  link,
  sui_lockup_amt,
  new_max_bids,
  new_min_bid,
  new_trainer_kraft_fee,
  new_trade_increments_balancer,
  new_skin_increments_balancer,
  royalty_num,
  royalty_denom,
  gov_yield_pct
) {
  console.log(`\nMaking proposal --   make_proposal_update_trainer_config_transition (HIVE PROFLE)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::make_proposal_update_trainer_config_transition`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.pure(title), tx.pure(description), tx.pure(link), sui_lockup,
    tx.pure(new_max_bids), tx.pure(new_min_bid), tx.pure(new_trainer_kraft_fee), tx.pure(new_trade_increments_balancer)
      , tx.pure(new_skin_increments_balancer), tx.pure(royalty_num), tx.pure(royalty_denom), tx.pure(gov_yield_pct)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function hiveDao_castVote(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  proposal_id,
  profile,
  latest_vote
) {
  console.log(`\nMaking vote on DRAGON DAO proposal ${proposal_id} --   hiveDao_castVote (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::castVote`,
    typeArguments: [],
    arguments: [tx.object(CLOCK), tx.object(dragon_dao_config), tx.pure(proposal_id), tx.object(profile), tx.pure(latest_vote)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function hiveDao_evaluateProposal(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  proposal_id,
  disperser
) {
  console.log(`\nEvaluating proposal ${proposal_id} --   hiveDao_evaluateProposal (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::evaluateProposal`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.pure(proposal_id), tx.object(disperser)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function executeProposal_add_coins_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  degenhive_config,
  proposal_id
) {
  console.log(`\nExecuting proposal ${proposal_id} --   executeProposal_add_coins_transition (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::executeProposal_add_coins_transition`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.object(degenhive_config), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function executeProposal_stable_update_identifier(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  degenhive_config,
  proposal_id
) {
  console.log(`\nExecuting proposal ${proposal_id} --   executeProposal_stable_update_identifier (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::executeProposal_stable_update_identifier`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.object(degenhive_config), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function executeProposal_curve_fee_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  degenhive_config,
  curve_type_identifier,
  proposal_id
) {
  console.log(`\nExecuting proposal ${proposal_id} --   executeProposal_curve_fee_transition (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::executeProposal_curve_fee_transition`,
    typeArguments: [curve_type_identifier],
    arguments: [tx.object(dragon_dao_config), tx.object(degenhive_config), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function executeProposal_treasury_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  degenhive_config,
  proposal_id,
  treasury
) {
  console.log(`\nExecuting proposal ${proposal_id} --   executeProposal_treasury_transition (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::executeProposal_treasury_transition`,
    typeArguments: ["0x2::sui::SUI"],
    arguments: [tx.object(dragon_dao_config), tx.object(degenhive_config), tx.pure(proposal_id), tx.object(treasury)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function executeProposal_pool_kraft_fee_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  proposal_id,
  two_pool_registry,
  three_pool_registry
) {
  console.log(`\nExecuting proposal ${proposal_id} --   executeProposal_pool_kraft_fee_transition (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::executeProposal_pool_kraft_fee_transition`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.pure(proposal_id), tx.object(two_pool_registry), tx.object(three_pool_registry)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function executeProposal_dragon_food_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  dragon_food,
  proposal_id) {
  console.log(`\nExecuting proposal ${proposal_id} --   executeProposal_dragon_food_transition (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::executeProposal_dragon_food_transition`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.object(dragon_food), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function executeProposal_update_hivepoints_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  dragon_food,
  proposal_id) {
  console.log(`\nExecuting proposal ${proposal_id} --   executeProposal_update_hivepoints_transition (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::executeProposal_update_hivepoints_transition`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.object(dragon_food), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function executeProposal_update_trainer_config_transition(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  bees_manager,
  proposal_id) {
  console.log(`\nExecuting proposal ${proposal_id} --   executeProposal_update_trainer_config_transition (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::executeProposal_update_trainer_config_transition`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.object(bees_manager), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function executeProposal_addSkin(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  proposal_id) {
  console.log(`\nExecuting proposal ${proposal_id} --   executeProposal_addSkin (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::executeProposal_addSkin`,
    typeArguments: ["0x2::sui::SUI", "0x2::sui::SUI"],
    arguments: [tx.object(dragon_dao_config), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      // let created = txn.effects.created;
      // for (const object of created) {
      //   if (object.owner.hasOwnProperty("Shared")) {
      //     return object.reference.objectId;
      //   }
      // }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function set_skin_kraft_cap(
  provider,
  signer,
  SKIN_PACKAGE,
  kraft_cap) {
  console.log(`\nStoring SkinFraftCap with SkinKraftCapHolder   ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${SKIN_PACKAGE}::new_skin::set_skin_kraft_cap`,
    typeArguments: [],
    arguments: [tx.object(kraft_cap)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function hiveDao_removeExpiredProposal(
  provider,
  signer,
  BEE_DAO_PACKAGE,
  dragon_dao_config,
  disperser,
  proposal_id) {
  console.log(`\nExecuting proposal ${proposal_id} --   removeExpiredProposal (DRAGON DAO)  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  tx.moveCall({
    target: `${BEE_DAO_PACKAGE}::dragon_dao::removeExpiredProposal`,
    typeArguments: [],
    arguments: [tx.object(dragon_dao_config), tx.object(disperser), tx.pure(proposal_id)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function add_new_aesthetic_for_skin_config(
  provider,
  signer,
  SKIN_PACKAGE_ID,
  skin_config,
  aesthetic,
  characters
) {
  console.log(`\n Adding new aesthetic for skin ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);
  tx.moveCall({
    target: `${SKIN_PACKAGE_ID}::new_skin::add_new_aesthetic_for_skin_config`,
    typeArguments: [],
    arguments: [tx.object(skin_config), tx.pure(aesthetic), tx.pure(characters)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function set_skin_craft_cap(
  provider,
  signer,
  SKIN_PACKAGE_ID,
  skin_config,
  skin_craft_cap
) {
  console.log(`\n Setting SkinKraftCap for skin ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);
  tx.moveCall({
    target: `${SKIN_PACKAGE_ID}::new_skin::add_new_aesthetic_for_skin_config`,
    typeArguments: [],
    arguments: [tx.object(skin_config), tx.object(skin_craft_cap)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function test_make_proposal_add_skin_transition(
  provider,
  signer,
  SKIN_PACKAGE_ID,
  skin_config,
  dao_config,
  title,
  description,
  link,
  sui_lockup_amt,
  cap_recepient
) {
  console.log(`\n Creating proposal for a new skin in DRAGON DAO ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);
  let sui_lockup = tx.splitCoins(tx.gas, [tx.pure(Number(sui_lockup_amt))]);
  tx.moveCall({
    target: `${SKIN_PACKAGE_ID}::new_skin::test_make_proposal_add_skin_transition`,
    typeArguments: [],
    arguments: [tx.object(skin_config), tx.object(dao_config), tx.pure(title), tx.pure(description), tx.pure(link), sui_lockup, tx.pure(cap_recepient)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function update_config_for_skin_kraft(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  profile,
  skin_type,
  version,
  royalty_fee_percent,
  public_skin_kraft_enabled
) {
  console.log(`\n Updating config related to skin kraft for ${skin_type}, version ${version}...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);
  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::update_config_for_skin_kraft`,
    typeArguments: [],
    arguments: [tx.object(profile), tx.pure(skin_type), tx.pure(version), tx.pure(royalty_fee_percent), tx.pure(public_skin_kraft_enabled)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function test_kraft_new_skin(
  provider,
  signer,
  SKIN_PACKAGE_ID,
  skin_config,
  skin_kraft_cap_holder,
  dao_config,
  bees_manager,
  sui_disperser,
  prompts_record,
  profile,
  skin,
  version,
  sui_to_pay_amt
) {
  console.log(`\n Krafting a new skin  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);
  let sui_to_pay = tx.splitCoins(tx.gas, [tx.pure(Number(sui_to_pay_amt))]);
  tx.moveCall({
    target: `${SKIN_PACKAGE_ID}::new_skin::test_kraft_new_skin`,
    typeArguments: [],
    arguments: [tx.object(CLOCK), tx.object(skin_config), tx.object(skin_kraft_cap_holder), tx.object(dao_config),
    tx.object(bees_manager), tx.object(sui_disperser), tx.object(prompts_record), tx.object(profile),
    tx.pure(skin), tx.pure(version), sui_to_pay]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function test_port_gems_for_skin(
  provider,
  signer,
  SKIN_PACKAGE_ID,
  skin_config,
  skin_kraft_cap_holder,
  dao_config,
  bees_manager,
  sui_disperser,
  skinCard,
  profile,
  skin,
  version,
  gems_to_port
) {
  console.log(`\n Porting gems via skin  ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);
  tx.moveCall({
    target: `${SKIN_PACKAGE_ID}::new_skin::test_port_gems_for_skin`,
    typeArguments: [],
    arguments: [tx.object(CLOCK), tx.object(skin_config), tx.object(skin_kraft_cap_holder), tx.object(dao_config),
    tx.object(bees_manager), tx.object(sui_disperser), tx.object(skinCard), tx.object(profile),
    tx.pure(skin), tx.pure(version), tx.pure(gems_to_port)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



// -------------------------------------------------------------------------x-------------------
// ----------------------------------- CONFIG -::- ADMIN FUNCTIONS ---------x-------------------
// -------------------------------------------------------------------------x-------------------
// - whitelist_decimal_precisions::  Add coins decimals to Config Object which don't have metadata object on chain (e.g. SUI)
// - add_stable_identifier::   Add stable coin identifiers to Config Object. 
// --------------------------------------------------------------------------x-------------------

export async function whitelist_decimal_precisions(provider, signer, ConfigPackageId, config_object, dragon_dao_cap, tokens, decimals) {
  console.log(`Adding Coin Decimals : ${tokens}...`)
  console.log(`Precisions : ${decimals}...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);
  tx.moveCall({
    target: `${ConfigPackageId}::yield_flow::whitelist_decimal_precisions`,
    typeArguments: [],
    arguments: [tx.object(config_object), tx.object(dragon_dao_cap), tx.pure(tokens), tx.pure(decimals)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(1500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function add_stable_identifier(provider, signer, ConfigPackageId, config_object, admin_cap, coin_type) {
  console.log(`Adding stable identifier : ${coin_type}...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);
  tx.moveCall({
    target: `${ConfigPackageId}::yield_flow::add_stable_identifier`,
    typeArguments: [],
    arguments: [tx.object(config_object), tx.object(admin_cap), tx.pure(coin_type)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(1500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

// -------------------------------------------------------------------------x-------------------
// ----------------------------------- AMMs -::- ADMIN FUNCTIONS ---------x-------------------
// -------------------------------------------------------------------------x-------------------
// - update_pool_kraft_fee
// --------------------------------------------------------------------------x-------------------

export async function TwoPool_update_creation_fee(provider, signer, DexPackageId, pool_registry, admin_cap, fee_amt) {
  console.log(`Setting pool creation Fee for 2 pool DEX instance...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(3000000);
  tx.moveCall({
    target: `${DexPackageId}::two_pool::update_pool_kraft_fee`,
    typeArguments: [],
    arguments: [tx.object(pool_registry), tx.object(admin_cap), tx.pure(fee_amt)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(11500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function ThreePool_update_creation_fee(provider, signer, DexPackageId, pool_registry, admin_cap, fee_amt) {
  console.log(`Initializing Fee for 3 pool DEX instance...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(300000000);
  tx.moveCall({
    target: `${DexPackageId}::three_pool::update_pool_kraft_fee`,
    typeArguments: [],
    arguments: [tx.object(pool_registry), tx.object(admin_cap), tx.pure(fee_amt)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(1500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


// -------------------------------------------------------------------------------x-------------------
// ----------------------------------- DRAGON-TRAINER -::- ADMIN FUNCTIONS ---------x-------------------
// -------------------------------------------------------------------------------x-------------------
// - onboard_creator_with_kiosk
// - update_traits_in_hive_kiosk
// - add_dna_for_dragon_egg
// - initialize_public_kraft
// - initialize_whitelisted_kraft
// - add_to_whitelist
// --------------------------------------------------------------------------x-------------------





export async function transfer_cap_object(provider, signer, type, objectId, recepient_rddr) {
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `0x2::transfer::public_transfer`,
    typeArguments: [type],
    arguments: [tx.object(objectId), tx.pure(recepient_rddr)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  // try {
  //   let status = tx.effects.effects.status;
  //   if (status.status == 'success') {
  //     console.log("Transaction successful\n");
  //   } else {
  //     console.log(`Transaction failed: ${status.error}\n`);
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
}



export async function kraft_dragon_trainer(
  provider,
  signer,
  HIVE_ENTRY_PACKAGE,
  clock,
  mapping_store,
  bees_manager,
  hive_graph,
  fee_collector,
  name,
) {
  const tx = new TransactionBlock();

  let spendable_sui = tx.splitCoins(tx.gas, [
    tx.pure( 1 * 1e9),
  ]);

  tx.moveCall({
    target: `${HIVE_ENTRY_PACKAGE}::dragon_trainer::kraft_dragon_trainer`,
    arguments: [
      tx.object(clock),
      tx.object(mapping_store),
      tx.object(bees_manager),
      tx.object(hive_graph),
      tx.object(fee_collector),
      spendable_sui,
      tx.pure(name),
    ],
  });

  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function kraft_kiosks_for_builder(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  _cap,
  bees_manager,
  mapping_store,
  max_assets_limit,
  collection_name,
  img_url,
  creator_trainer,
) {
  console.log(`\n Onboarding creator ${creator_trainer} by krafting him HiveKiosk of collection_name ${collection_name}.`)
  console.log(`cap: ${_cap}, mapping_store: ${mapping_store}, max_assets_limit: ${max_assets_limit}, collection_name: ${collection_name}, img_url: ${img_url}, creator_trainer: ${creator_trainer}`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  // console.log(_cap);
  // console.log(mapping_store);
  // console.log(aesthetic);
  // console.log(type);
  // console.log(creator_trainer);
  // console.log(img_url);
  // console.log(init_hive_gems);
  // console.log(max_assets_limit);
  // console.log(base_price);
  // console.log(curve_a);
  // console.log(post_number);

  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::kraft_kiosks_for_builder`,
    typeArguments: [],
    arguments: [tx.object(_cap), tx.object(bees_manager),  tx.object(mapping_store), tx.pure(max_assets_limit), tx.pure(collection_name),
    tx.object(img_url), tx.object(creator_trainer)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}




export async function onboard_creator_with_kiosk(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  _cap,
  mapping_store,
  aesthetic,
  type,
  creator_trainer,
  img_url,
  init_hive_gems,
  max_assets_limit,
  base_price,
  curve_a,
  post_number
) {
  console.log(`\n Onboarding creator ${creator_trainer} by krafting him HiveKiosk of aesthetic ${aesthetic} and type ${type} with ${init_hive_gems} Gems...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  // console.log(_cap);
  // console.log(mapping_store);
  // console.log(aesthetic);
  // console.log(type);
  // console.log(creator_trainer);
  // console.log(img_url);
  // console.log(init_hive_gems);
  // console.log(max_assets_limit);
  // console.log(base_price);
  // console.log(curve_a);
  // console.log(post_number);

  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::onboard_creator_with_kiosk`,
    typeArguments: [],
    arguments: [tx.object(_cap), tx.object(mapping_store), tx.pure(aesthetic), tx.pure(type),
    tx.object(creator_trainer), tx.pure(img_url), tx.pure(init_hive_gems), tx.pure(max_assets_limit),
    tx.pure(base_price), tx.pure(curve_a), tx.pure(post_number)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function update_prompts_record(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  _admin_cap,
  prompt_record,
  aesthetic,
  character,
  img_url,
  init_hive_gems,
  total_characters,
  base_price,
  curve_a
) {
  console.log(`\n Updating PromptsRecord for ${aesthetic} - ${character} with ${init_hive_gems} Gems...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::update_prompts_record`,
    typeArguments: [],
    arguments: [tx.object(_admin_cap), tx.object(prompt_record), tx.pure(aesthetic), tx.pure(character), tx.pure(img_url), tx.pure(init_hive_gems)
      , tx.pure(total_characters), tx.pure(base_price), tx.pure(curve_a)]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function update_traits_in_hive_kiosk(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  creator_trainer,
  collection_name,
  traits,
  img_url
) {
  console.log(`\n Set traits for creator_trainer's  ${creator_trainer} HiveKiosk ::...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::update_traits_in_hive_kiosk`,
    typeArguments: [],
    arguments: [ tx.object(creator_trainer), tx.pure(collection_name), tx.pure(traits) , tx.pure(img_url) ]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function add_dna_for_dragon_egg(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  cap,
  bees_manager,
  genes_list,
  img_list,
) {
  console.log(`\n  Inserting Gen0 BEEs ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(3000000000);
  for (let i = 0; i < genes_list.length; i++) {
    tx.moveCall({
      target: `${PROFILE_PACKAGE_ID}::dragon_trainer::add_dna_for_dragon_egg`,
      typeArguments: [],
      arguments: [ tx.object(cap), tx.object(bees_manager),tx.pure(genes_list[i]), tx.pure(img_list[i]) ]
    });
  }
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3550);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}




export async function update_capability_in_bee_manager(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  cap,
  bees_manager,
  spot,
  cap_type,
  health_impact,
  energy_cost,
  attempts,
  cooldown,
  base_attempts,
  tx_payload,
  to_make_tx,
  to_do_tx
) {
  console.log(`\n  Inserting Capability in BeeManager ...`)
  // Execute transaction
  const tx = tx_payload ? tx_payload : new TransactionBlock();
  tx.setGasBudget(100000000);
  if (to_make_tx) {
    tx.moveCall({
      target: `${PROFILE_PACKAGE_ID}::dragon_trainer::update_capability_in_bee_manager`,
      typeArguments: [],
      arguments: [ tx.object(cap), tx.object(bees_manager),tx.pure(spot), tx.pure(cap_type),
                tx.pure(health_impact), tx.pure(energy_cost), 
                 tx.pure(attempts), tx.pure(cooldown), tx.pure(base_attempts)   
       ]
    });
  }

  if (!to_do_tx) {
    return tx;
  }

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });

    // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(1550);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


 
export async function update_pricing_for_genesis_mint(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  cap,
  bees_manager, start_time,
  base_price,
  curve_a,
  per_user_limit
) {
  console.log(`\n  update_pricing_for_genesis_mint ..`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
    tx.moveCall({
      target: `${PROFILE_PACKAGE_ID}::dragon_trainer::update_pricing_for_genesis_mint`,
      typeArguments: [],
      arguments: [ tx.object(cap), tx.pure(bees_manager), tx.pure(start_time),
                    tx.pure(base_price), tx.pure(curve_a), tx.pure(per_user_limit) ]
    });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(1550);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}
  

export async function whitelist_user_for_genesis_mint(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  cap,
  bees_manager, user_addr,
  wl_price,
  num_eggs_limit
) {
  console.log(`\n  whitelist_user_for_genesis_mint ..`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
    tx.moveCall({
      target: `${PROFILE_PACKAGE_ID}::dragon_trainer::whitelist_user_for_genesis_mint`,
      typeArguments: [],
      arguments: [ tx.object(cap), tx.pure(bees_manager), tx.pure(user_addr),
                    tx.pure(wl_price), tx.pure(num_eggs_limit) ]
    });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(1550);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}
  




export async function initialize_public_kraft(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  creator_trainer,
  collection_name,
  start_time,
  per_user_limit,
) {
  console.log(`\n Initializing Public kraft...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::initialize_public_kraft`,
    typeArguments: [],
    arguments: [
    tx.object(CLOCK),
    tx.pure(creator_trainer),
    tx.pure(collection_name),
    tx.pure(start_time),
    tx.pure(per_user_limit),
    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function initialize_whitelisted_kraft(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  _admin_cap,
  creator_trainer,
  post_number,
  aesthetic,
  type,
  start_time,
  end_time,
  per_subscriber_limit,
  available_assets_to_kraft
) {
  console.log(`\n Initializing Whitelisted mint...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::initialize_whitelisted_kraft`,
    typeArguments: [],
    arguments: [tx.object(_admin_cap),
    tx.object(CLOCK),
    tx.object(creator_trainer),
    tx.pure(post_number),
    tx.pure(aesthetic),
    tx.pure(type),
    tx.pure(start_time),
    tx.pure(end_time),
    tx.pure(per_subscriber_limit),
    tx.pure(available_assets_to_kraft)
    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({
    signer: signer, transactionBlock: tx, requestType: 'WaitForLocalExecution', options: {
      showInput: true,
      showEffects: true,
      showEvents: true,
      showObjectChanges: true,
    },
  });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return result;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function add_to_whitelist(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  _admin_cap,
  whitelist_mint_config,
  wl_addresses,
  mint_limit
) {
  console.log(`\n Adding to whitelist...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::initialize_whitelisted_kraft`,
    typeArguments: [],
    arguments: [tx.object(CLOCK),
    tx.object(_admin_cap),
    tx.object(whitelist_mint_config),
    tx.object(clock),
    tx.pure(wl_addresses),
    tx.pure(mint_limit)
    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



// --------------------x--------------------xxx--------------------x-------------------------------------
// --------------------x-------------- MINT TEST TOKENS  --------------------x--------------------

export async function mint_and_transfer(provider, signer, DexPackageId, token_type, treasury_cap, amount, recepient_addr) {
  console.log(`Minting tokens :: ${token_type}...`)
  // Execute transaction
  try {
    const tx = new TransactionBlock();
    tx.setGasBudget(3000000);
    tx.moveCall({
      target: `${DexPackageId}::coin::mint_and_transfer`,
      typeArguments: [token_type],
      arguments: [tx.object(treasury_cap), tx.pure(amount), tx.pure(recepient_addr)]
    });
    const result = await provider.signAndExecuteTransactionBlock({
      signer: signer,
      transactionBlock: tx
    });
    // Get transaction results 
    let txhash = result.digest;
    console.log(`Transaction hash: ${txhash}`);
    await sleep(9500);
  } catch (error) {
    console.log(error);
  }
  // try {
  //     await sleep(1500);
  //     const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true }});    
  //     // console.log(txn);
  //     let status =  txn.effects.status;
  //     if (status.status == 'success') {
  //         console.log("Transaction successful\n");
  //     } else {
  //         console.log(`Transaction failed: ${status.error}\n`);
  //     }
  // } catch (error) {
  //     console.log(error);
  // }
}

export async function transfer_object(signer, recepient, objectId) {
  console.log(`Minting tokens :: ${token_type}...`)
  let tx = await signer.executeMoveCall({
    packageObjectId: DexPackageId,
    module: 'coin',
    function: 'mint_and_transfer',
    typeArguments: [token_type],
    arguments: [treasury_cap, amount, recepient_rddr],
    gasBudget: 10000,
  });
  let txhash = tx.certificate.transactionDigest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    let status = tx.effects.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

// --------------------x--------------------xxx--------------------x-------------------------------------
// --------------------x-------------- INITIALIZE LOCKDROP FUNCTIONS --------------------x--------------------

export async function add_hive_incentives_to_degensui_pirate(
  provider,
  signer,
  LSD_LOCKDROP_PACKAGE_ID,
  clock,
  global_lsd_lockup,
  hive_coin,
  incentives_amount
) {
  console.log(`ADDING HIVE as INCENTIVES TO LSD LOCKDROP POOL :: ${incentives_amount / 1e6} ...`);

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  tx.moveCall({
    target: `${LSD_LOCKDROP_PACKAGE_ID}::degensui_pirate::add_hive_incentives`,
    typeArguments: [],
    arguments: [tx.object(clock), tx.object(global_lsd_lockup), tx.object(hive_coin), tx.pure(incentives_amount)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
  }
}



export async function initialize_lockdrop_pool(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  type_A,
  type_X,
  type_Y,
  type_curve,
  clock,
  chronicles_vault,
  user_trainer_access_cap,
  lockdrop_vault,
  sui_system_state,
  dsui_vault,
  hive_degenhive_map_store,
  bees_manager,
  sui_disperser,
  queen_maker,
  username,
  bio,
  pool_identifier,
  x_identifier,
  y_identifier,
  x_precision,
  y_precision,
) {
  console.log(`KRAFTING LOCKDROP POOL :: ${username} ...`);

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  const SUI_FOR_PROFILE_AMT = 1000000000;
  let SUI_FOR_PROFILE = tx.splitCoins(tx.gas, [tx.pure(Number(SUI_FOR_PROFILE_AMT))]);

  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::initialize_lockdrop_pool`,
    typeArguments: [type_A, type_X, type_Y, type_curve],
    arguments: [tx.object(clock),
    tx.object(chronicles_vault), tx.object(user_trainer_access_cap), tx.object(lockdrop_vault),
    tx.object(sui_system_state), tx.object(dsui_vault), tx.object(hive_degenhive_map_store), tx.object(bees_manager),
    tx.object(sui_disperser), SUI_FOR_PROFILE, tx.object(queen_maker),
    tx.pure(username), tx.pure(bio), tx.pure(pool_identifier), tx.pure(x_identifier), tx.pure(y_identifier), tx.pure(x_precision)
      , tx.pure(y_precision)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
  }
}


export async function initialize_attack_on_kriya_pool(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  type_A,
  type_X,
  type_Y,
  type_curve,
  clock,
  chronicles_vault,
  user_trainer_access_cap,
  lockdrop_for_pool,
  kriya_lp_to_store,
  kriya_attack_config,
  identifier,
  precision,
  hive,
  hive_incentives_amt,
  queen_maker,
  is_reverse
) {
  console.log(`INITIALIZE ATTACK ON KRIYA POOL - ${identifier} ...`)
  console.log(`INITIALIZE ATTACK ON KRIYA POOL - ${precision} ...`)
  // console.log(`INITIALIZE ATTACK ON KRIYA POOL - ${identifier} ...`)

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::${is_reverse ? "initialize_attack_on_rev_kriya_pool" : "initialize_attack_on_kriya_pool"}`,
    typeArguments: [type_A, type_X, type_Y, type_curve],
    arguments: [tx.object(clock), tx.object(chronicles_vault), tx.object(user_trainer_access_cap), tx.object(lockdrop_for_pool),
    tx.object(kriya_lp_to_store), tx.object(kriya_attack_config), tx.pure(identifier), tx.pure(precision), tx.object(hive), tx.pure(hive_incentives_amt),
    tx.object(queen_maker)   ]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
  }
}

export async function initialize_attack_on_flowx_pool(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  type_A,
  type_X,
  type_Y,
  type_curve,
  clock,
  chronicles_vault,
  user_trainer_access_cap,
  lockdrop_for_pool,
  flowx_attack_config,
  identifier,
  precision,
  hive,
  hive_incentives_amt,
  queen_maker,
  is_reverse
) {
  console.log(`INITIALIZE ATTACK ON FLOWX POOL - ${identifier} ...`)

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::initialize_attack_on_flowx_pool`,
    typeArguments: [type_A, type_X, type_Y, type_curve],
    arguments: [tx.object(clock), tx.object(chronicles_vault), tx.object(user_trainer_access_cap), tx.object(lockdrop_for_pool),
    tx.object(flowx_attack_config), tx.pure(identifier), tx.pure(precision), tx.object(hive), tx.pure(hive_incentives_amt),
    tx.object(queen_maker), tx.pure(is_reverse)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
  }
}


export async function initialize_attack_on_cetus_pool(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  type_A,
  type_X,
  type_Y,
  type_curve,
  clock,
  chronicles_vault,
  user_trainer_access_cap,
  lockdrop_for_pool,
  cetus_pool,
  cetus_attack_config,
  identifier,
  precision,
  hive,
  hive_incentives_amt,
  to_claim_rewards,
  queen_maker
) {
  console.log(`INITIALIZE ATTACK ON CETUS POOL - ${identifier} ...`)

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::initialize_attack_on_cetus_pool`,
    typeArguments: [type_A, type_X, type_Y, type_curve],
    arguments: [tx.object(clock), tx.object(chronicles_vault), tx.object(user_trainer_access_cap), tx.object(lockdrop_for_pool),
    tx.object(cetus_pool), tx.object(cetus_attack_config), tx.pure(identifier), tx.pure(precision), tx.object(hive), tx.pure(hive_incentives_amt), tx.pure(to_claim_rewards),
    tx.object(queen_maker)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
  }
}



export async function initialize_attack_on_rev_cetus_pool(
  provider,
  signer,
  CHRONICLES_PACKAGE_ID,
  type_A,
  type_X,
  type_Y,
  type_curve,
  clock,
  chronicles_vault,
  user_trainer_access_cap,
  lockdrop_for_pool,
  cetus_pool,
  cetus_attack_config,
  identifier,
  precision,
  hive,
  hive_incentives_amt,
  to_claim_rewards,
  queen_maker
) {
  console.log(`INITIALIZE ATTACK ON CETUS POOL - ${identifier} ...`)

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::hive_chronicles::initialize_attack_on_rev_cetus_pool`,
    typeArguments: [type_A, type_X, type_Y, type_curve],
    arguments: [tx.object(clock), tx.object(chronicles_vault), tx.object(user_trainer_access_cap), tx.object(lockdrop_for_pool),
    tx.object(cetus_pool), tx.object(cetus_attack_config), tx.pure(identifier), tx.pure(precision), tx.object(hive), tx.pure(hive_incentives_amt),  tx.pure(to_claim_rewards),
    tx.object(queen_maker)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false
    }
  } catch (error) {
    console.log(error);
  }
}


// --------------------x--------------------xxx--------------------x-------------------------------------
// --------------------x-------------- SCRIPT - ENTRY FUNCTIONS --------------------x--------------------

// export async function merge_sui_coins(
//   provider,
//   signer, 
//   accountAddress,
//   type_X, 
//   coin_obj,
//   amount) {
//   console.log(`Splitting coins...`)
//   // Execute transaction
//   const txb = new TransactionBlock();
//   const [coin] = txb.splitCoins(txb.gas, [txb.pure(1000000)]);
//   txb.transferObjects([coin], txb.pure(accountAddress));
//   const result = await provider.signAndExecuteTransactionBlock({ signer:signer,  transactionBlock: txb, requestType: 'WaitForEffectsCert' });
//   console.log(result);
// }

export async function split_coins(
  provider,
  signer,
  accountAddress,
  type_X,
  coin_obj,
  amount) {
  console.log(`Splitting coins...`)
  // Execute transaction
  const txb = new TransactionBlock();
  const [coin] = txb.splitCoins(txb.gas, [txb.pure(1000000)]);
  txb.transferObjects([coin], txb.pure(accountAddress));
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: txb, requestType: 'WaitForEffectsCert' });
  console.log(result);
}

export async function split_and_transfer(
  provider,
  signer,
  type_X,
  coin_obj,
  amount,
  recepient,
  to_split_gas) {
  // Execute transaction
  const tx = new TransactionBlock();
  if (to_split_gas) {
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
    tx.transferObjects([coin], tx.pure(recepient));
  } else {
    tx.moveCall({
      target: `0x2::pay::split_and_transfer`,
      typeArguments: [type_X],
      arguments: [tx.object(coin_obj), tx.pure(amount), tx.pure(recepient)]
    });
  }
  tx.setGasBudget(7000000);
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  console.log(result);
}

 
export async function switch_trading_enabled(
  provider,
  signer,
  dragon_trainer_package_id,
  deployer_cap,
  yield_farm,
  trading_enabled) {
  console.log(`Switching trading enabled...`)

  // Execute transaction
  const tx = new TransactionBlock();

  tx.moveCall({
      target: `${dragon_trainer_package_id}::dragon_trainer::switch_trading_enabled`,
      typeArguments: [],
      arguments: [tx.object(deployer_cap), tx.object(yield_farm), tx.pure(trading_enabled)]
    });
  tx.setGasBudget(7000000);
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  console.log(result);
}

export async function update_food_cycle(
  provider,
  signer,
  dragon_trainer_package_id,
  deployer_cap,
  yield_farm,
  trading_enabled) {
  console.log(`Switching trading enabled...`)

  // Execute transaction
  const tx = new TransactionBlock();

  tx.moveCall({
      target: `${dragon_trainer_package_id}::dragon_food::update_food_cycle`,
      typeArguments: [],
      arguments: [tx.object("0xa9723a523bf492801c1abfdc41d8b9b8c53c45825cd73862495baf246abe336d")]
    });
  tx.setGasBudget(70000000);
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  console.log(result);
}


export async function transfer_honey(
  provider,
  signer,
  TWO_Pool_PACKAGE_ID,
  honey_token,
  honey_manager,
  policy,
  transfer_amt,
  receipient) {
  console.log(`Transferring honey...`)
  console.log(`TWO_Pool_PACKAGE_ID : ${TWO_Pool_PACKAGE_ID}`)
  console.log(`honey_token : ${honey_token}`)
  console.log(`honey_manager : ${honey_manager}`)
  console.log(`policy : ${policy}`)
  console.log(`transfer_amt : ${transfer_amt}`)
  console.log(`receipient : ${receipient}`)

  // Execute transaction
  const tx = new TransactionBlock();

  tx.moveCall({
      target: `${TWO_Pool_PACKAGE_ID}::honey_trade::transfer_honey`,
      typeArguments: [],
      arguments: [tx.object(honey_token), tx.object(honey_manager), tx.object(policy), tx.pure(transfer_amt), tx.pure(receipient)]
    });
  tx.setGasBudget(7000000);
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  console.log(result);
}

export async function split_and_transfer_after_merge(
  provider,
  signer,
  type_X,
  coin_objs,
  amount,
  recepient,
  to_split_gas,
  network_url) {
  // Execute transaction
  const tx = new TransactionBlock();
  if (to_split_gas) {
    const [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
    tx.transferObjects([coin], tx.pure(recepient));
  } else {
    const coin_X = await mergeCoinsIfNeeded(
      type_X,
      coin_objs,
      amount,
      tx,
      network_url
    );

    tx.moveCall({
      target: `0x2::pay::split_and_transfer`,
      typeArguments: [type_X],
      arguments: [coin_X, tx.pure(amount), tx.pure(recepient)]
    });
  }
  tx.setGasBudget(7000000);
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  console.log(result);
}



export async function new_update_initial_prices(
  provider,
  signer,
  TWO_Pool_PACKAGE_ID,
  type_X,
  type_Y,
  type_curve,
  cap ,
  pool,
  initial_prices,
) {
  console.log(`Updating initial prices...`)
  console.log(`TWO_Pool_PACKAGE_ID : ${TWO_Pool_PACKAGE_ID}`)
  console.log(`initial_prices : ${initial_prices}`)
  console.log(`type_X : ${type_X}`);
  console.log(`type_Y : ${type_Y}`);
  console.log(`type_curve : ${type_curve}`);
  console.log(`pool : ${pool}`);
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(900000000);

 
  tx.moveCall({
    target: `${TWO_Pool_PACKAGE_ID}::two_pool::update_initial_prices`,
    typeArguments: [type_X, type_Y, type_curve],
    arguments: [tx.object(cap), tx.object(pool), tx.pure(initial_prices)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function lock_in_x_hive_pool_addr(
  provider,
  signer,
  accountAddress,
  CHRONICLES_PACKAGE_ID,
  type_X,
  type_Y,
  type_curve,
  clock,
  config,
  poolRegistry,
  fee_collector,
  metadata_y,
  init_params,
  initial_prices,
  weights,
  is_hive_pool
) {
  console.log(`Krafting SUI-HIVE POOL ...`)
  console.log(`initial_prices : ${initial_prices}`)

  console.log(`type_X : ${type_X}`);
  console.log(`type_Y : ${type_Y}`);
  console.log(`type_curve : ${type_curve}`);

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(900000000);

  const POOL_INIT_FEES = 10000000;
  let SUI_fee = tx.splitCoins(tx.gas, [tx.pure(Number(POOL_INIT_FEES))]);

  // let [sui_balance] = tx.moveCall({
  //   target: `${CHRONICLES_PACKAGE_ID}::two_pool::get_sui_balance`,
  //   typeArguments: [type_X],
  //   arguments: [tx.object(cap)]
  // });

  let [sui_balance] = tx.moveCall({
    target: `0x2::coin::into_balance`,
    typeArguments: ["0x2::sui::SUI"],
    arguments: [SUI_fee],
  });

  let [_, rem_sui] = tx.moveCall({
    target: `${CHRONICLES_PACKAGE_ID}::two_pool::${is_hive_pool ? "lock_in_sui_hive_pool_addr" : "lock_in_sui_honey_pool_addr"}`,
    typeArguments: [type_X, type_Y, type_curve],
    arguments: [tx.object(clock), tx.object(config), tx.object(poolRegistry),  tx.object(metadata_y), sui_balance,  tx.object(fee_collector), 
    tx.pure(init_params), tx.pure([initial_prices]), tx.pure(weights)]
  });

  let [coin] = tx.moveCall({
    target: `0x2::coin::from_balance`,
    typeArguments: ["0x2::sui::SUI"],
    arguments: [rem_sui],
  });

  tx.transferObjects([coin], tx.pure(accountAddress));

  

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function deployer_register_2_pool_both_coin_metadata_available(
  provider,
  signer,
  SCRIPTS_PACKAGE_ID,
  DeployerCap,
  type_X,
  type_Y,
  type_curve,
  clock,
  fee_collector, 
  config,
  poolRegistry,
  metadata_x,
  metadata_y,
  init_params,
  initial_prices,
  weights
) {
  console.log(`Creating 2 token pool (Both metadata available) ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(100000000);

  const POOL_INIT_FEES = 10000000;
  let SUI_fee = tx.splitCoins(tx.gas, [tx.pure(Number(POOL_INIT_FEES))]);

  tx.moveCall({
    target: `${SCRIPTS_PACKAGE_ID}::router::deployer_register_pool_both_coin_metadata_available`,
    typeArguments: [type_X, type_Y, type_curve],
    arguments: [tx.object(clock), tx.object(DeployerCap),  tx.object(config), tx.object(poolRegistry), SUI_fee, tx.object(fee_collector), 
    tx.pure(metadata_x), tx.pure(metadata_y), tx.pure(init_params), tx.pure(initial_prices), tx.pure(weights)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


// export async function update_queen_maker(
//   provider,
//   signer,
//   QUEEN_MAKER_PACKAGE_ID,
//   cap,
//   queen_maker,
//   new_live_status,
//   price_to_be_a_queen,
//   bid_increase_pct,
//   bid_decrease_pct,
//   max_eggs_per_queen,
//   energy_tax,
//   unlimited_deposit_window,
//   limited_deposit_window,
//   cooldown_period,
// ) {
//   console.log(`Updating QueenMaker ...`)

//   // Execute transaction
//   const tx = new TransactionBlock();
//   tx.setGasBudget(30000000);

//   tx.moveCall({
//     target: `${QUEEN_MAKER_PACKAGE_ID}::queen_maker::update_queen_maker`,
//     typeArguments: [],
//     arguments: [tx.object(cap), tx.object(queen_maker),  
//                 tx.pure(new_live_status), tx.pure(price_to_be_a_queen), tx.pure(bid_increase_pct), tx.pure(bid_decrease_pct),
//                 tx.pure(max_eggs_per_queen), tx.pure(energy_tax), tx.pure(unlimited_deposit_window),
//                 tx.pure(limited_deposit_window), tx.pure(cooldown_period) ]
//   });

//   const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
//   // Get transaction results 
//   let txhash = result.digest;
//   console.log(`Transaction hash: ${txhash}`);
//   try {
//     await sleep(3500);
//     const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
//     let status = txn.effects.status;
//     if (status.status == 'success') {
//       console.log("Transaction successful\n");
//       return true;
//     } else {
//       console.log(`Transaction failed: ${status.error}\n`);
//       return false;
//     }
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// }




export async function update_queen_maker(
  provider,
  signer,
  QUEEN_MAKER_PACKAGE_ID,
  cap,
  queen_maker,
  new_live_status,
  price_to_be_a_queen,
  bid_increase_pct,
  bid_decrease_pct,
  max_eggs_per_queen,
  energy_tax,
  unlimited_deposit_window,
  limited_deposit_window,
  cooldown_period,
) {
  console.log(`Updating QueenMaker ...`)

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  tx.moveCall({
    target: `${QUEEN_MAKER_PACKAGE_ID}::dragon_trainer::update_bees_manager_config`,
    typeArguments: [],
    arguments: [tx.object(dao_cap), tx.object(bees_manager),  
                tx.pure(new_max_bids_per_bee), tx.pure(new_min_bid_amt), tx.pure(new_trainer_mint_fee), tx.pure(mutation_fee),
                tx.pure(max_eggs_per_queen), tx.pure(energy_tax), tx.pure(unlimited_deposit_window),
                tx.pure(limited_deposit_window), tx.pure(cooldown_period) ]
  });

  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      return true;
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}















export async function deployer_register_2_pool_x_metadata_available(
  provider,
  signer,
  SCRIPTS_PACKAGE_ID,
  DeployerCap,
  type_X,
  type_Y,
  type_curve,
  clock,
fee_collector, 
  config,
  poolRegistry,
  metadata_x,
  init_params,
  initial_prices,
  weights
) {
  console.log(`Creating 2 token pool (CURVED) ...`)
  console.log(init_params);
  console.log(initial_prices);
  console.log(weights);

  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  const POOL_INIT_FEES = 10000000;
  let SUI_fee = tx.splitCoins(tx.gas, [tx.pure(Number(POOL_INIT_FEES))]);
  console.log(SUI_fee);

  tx.moveCall({
    target: `${SCRIPTS_PACKAGE_ID}::router::deployer_register_pool_x_metadata_available`,
    typeArguments: [type_X, type_Y, type_curve],
    arguments: [tx.object(clock), tx.object(DeployerCap),  tx.object(config), tx.object(poolRegistry), SUI_fee, tx.object(fee_collector), 
    tx.pure(metadata_x), tx.pure(init_params), tx.pure(initial_prices), tx.pure(weights)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}






export async function register_2_pool_both_coin_metadata_available(
  provider,
  signer,
  SCRIPTS_PACKAGE_ID,
  type_X,
  type_Y,
  type_curve,
  clock,
fee_collector, 
  config,
  poolRegistry,
  sui_disperser,
  SUI_fee_,
  metadata_x,
  metadata_y,
  init_params,
  initial_prices,
  weights
) {
  console.log(`Creating 2 token pool (Both metadata available) ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  const POOL_INIT_FEES = 10000000;
  let SUI_fee = tx.splitCoins(tx.gas, [tx.pure(Number(POOL_INIT_FEES))]);

  tx.moveCall({
    target: `${SCRIPTS_PACKAGE_ID}::router::register_two_pool_both_coin_metadata_available`,
    typeArguments: [type_X, type_Y, type_curve],
    arguments: [tx.object(clock),  tx.object(config), tx.object(poolRegistry), SUI_fee, tx.object(fee_collector), 
    tx.pure(metadata_x), tx.pure(metadata_y), tx.pure(init_params), tx.pure(initial_prices), tx.pure(weights)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      let created = txn.effects.created;
      for (const object of created) {
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function register_2_pool_single_coin_metadata_available(
  provider,
  signer,
  SCRIPTS_PACKAGE_ID,
  type_X,
  type_Y,
  type_curve,
  clock,
fee_collector, 
  config,
  poolRegistry,
  sui_disperser,
  SUI_fee_,
  metadata_x,
  init_params,
  initial_prices,
  weights
) {
  console.log(`Creating 2 token pool (Single metadata available) ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  const POOL_INIT_FEES = 10000000;
  let SUI_fee = tx.splitCoins(tx.gas, [tx.pure(Number(POOL_INIT_FEES))]);

  tx.moveCall({
    target: `${SCRIPTS_PACKAGE_ID}::router::register_two_pool_x_metadata_available`,
    typeArguments: [type_X, type_Y, type_curve],
    arguments: [tx.object(clock),  tx.object(config), tx.object(poolRegistry), SUI_fee, tx.object(fee_collector), 
    tx.pure(metadata_x), tx.pure(init_params), tx.pure(initial_prices), tx.pure(weights)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      // Extract pool ID
      // console.log(txn);
      let created = txn.effects.created;
      // console.log(created);
      for (const object of created) {
        // find id of liquidity pool
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function register_3_pool_both_coin_metadata_available(
  provider,
  signer,
  SCRIPTS_PACKAGE_ID,
  type_X,
  type_Y,
  type_Z,
  type_curve,
  clock,
fee_collector, 
  config,
  poolRegistry,
  metadata_x,
  metadata_y,
  metadata_z,
  init_params,
  initial_prices,
  weights
) {
  console.log(`Creating 3 token pool (Both metadata available) ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(50000000);

  const POOL_INIT_FEES = 10000000;
  let SUI_fee = tx.splitCoins(tx.gas, [tx.pure(Number(POOL_INIT_FEES))]);

  tx.moveCall({
    target: `${SCRIPTS_PACKAGE_ID}::router::register_three_pool_all_coin_metadata_available`,
    typeArguments: [type_X, type_Y, type_Z, type_curve],
    arguments: [tx.object(clock),  tx.object(config), tx.object(poolRegistry), SUI_fee, tx.object(fee_collector), 
    tx.pure(metadata_x), tx.pure(metadata_y), tx.pure(metadata_z), tx.pure(init_params), tx.pure(initial_prices), tx.pure(weights)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      // Extract pool ID
      // console.log(txn);
      let created = txn.effects.created;
      // console.log(created);
      for (const object of created) {
        // find id of liquidity pool
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


export async function register_three_pool_x_z_metadata_available(
  provider,
  signer,
  SCRIPTS_PACKAGE_ID,
  type_X,
  type_Y,
  type_Z,
  type_curve,
  clock,
fee_collector, 
  config,
  poolRegistry,
  sui_disperser,
  SUI_fee_,
  metadata_x,
  metadata_z,
  init_params,
  initial_prices,
  weights
) {
  console.log(`Creating 3 token pool (Both metadata available) ...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(50000000);

  const POOL_INIT_FEES = 10000000;
  let SUI_fee = tx.splitCoins(tx.gas, [tx.pure(Number(POOL_INIT_FEES))]);

  tx.moveCall({
    target: `${SCRIPTS_PACKAGE_ID}::router::register_three_pool_x_z_metadata_available`,
    typeArguments: [type_X, type_Y, type_Z, type_curve],
    arguments: [tx.object(clock),  tx.object(config), tx.object(poolRegistry), SUI_fee, tx.object(fee_collector), 
    tx.object(metadata_x), tx.object(metadata_z), tx.pure(init_params), tx.pure(initial_prices), tx.pure(weights)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      // Extract pool ID
      // console.log(txn);
      let created = txn.effects.created;
      // console.log(created);
      for (const object of created) {
        // find id of liquidity pool
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



// export async function register_2_pool_single_coin_metadata_available(
//   provider,
//   signer,
//   SCRIPTS_PACKAGE_ID,
//   type_X,
//   type_Y,
//   type_curve,
//   clock,
//   config,
//   poolRegistry,
//   sui_disperser,
//   SUI_fee_,
//   metadata_x,
//   init_params,
//   initial_prices,
//   weights
// ) {
//   console.log(`Creating 2 token pool (Both metadata available) ...`)
//   // Execute transaction
//   const tx = new TransactionBlock();
//   tx.setGasBudget(30000000);

//   const POOL_INIT_FEES = 10000000;
//   let SUI_fee = tx.splitCoins(tx.gas, [tx.pure(Number(POOL_INIT_FEES))]);

//   tx.moveCall({
//     target: `${SCRIPTS_PACKAGE_ID}::router::register_two_pool_x_metadata_available`,
//     typeArguments: [type_X, type_Y, type_curve],
//     arguments: [tx.object(clock), tx.object(config), tx.object(poolRegistry), SUI_fee, tx.object(fee_collector), 
//     tx.pure(metadata_x), tx.pure(init_params), tx.pure(initial_prices), tx.pure(weights)]
//   });
//   const result = await provider.signAndExecuteTransactionBlock({ signer: signer,  transactionBlock: tx, requestType: 'WaitForEffectsCert' });
//   // Get transaction results 
//   let txhash = result.digest;
//   console.log(`Transaction hash: ${txhash}`);
//   try {
//     await sleep(3500);
//     const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
//     let status = txn.effects.status;
//     if (status.status == 'success') {
//       console.log("Transaction successful\n");
//       // Extract pool ID
//       // console.log(txn);
//       let created = txn.effects.created;
//       // console.log(created);
//       for (const object of created) {
//         // find id of liquidity pool
//         if (object.owner.hasOwnProperty("Shared")) {
//           return object.reference.objectId;
//         }
//       }
//     } else {
//       console.log(`Transaction failed: ${status.error}\n`);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }




export async function add_liquidity_2_pool(
  provider,
  signer,
  SCRIPTS_PACKAGE_ID,
  type_X,
  type_Y,
  type_curve,
  clock,
  liquidity_pool,
  coin_x,
  coin_x_val,
  coin_y,
  coin_y_val
) {
  console.log(`\n Adding liquidity to 2 token pool...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${SCRIPTS_PACKAGE_ID}::router::add_liquidity_to_2pool`,
    typeArguments: [type_X, type_Y, type_curve],
    arguments: [tx.object(clock), tx.object(liquidity_pool), tx.object(coin_x), tx.pure(coin_x_val), tx.object(coin_y), tx.pure(coin_y_val)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}



export async function register_3_pool(
  provider,
  signer,
  SCRIPTS_PACKAGE_ID,
  type_X,
  type_Y,
  type_Z,
  type_curve,
  clock,
  config,
  poolRegistry,
  sui_fee_collector,
  SUI_fee_,
  decimal_X,
  decimal_Y,
  decimal_Z,
  init_params,
  initial_prices,
  weights
) {
  console.log(`Creating 3 token pool...`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);

  const POOL_INIT_FEES = 10000000;
  let SUI_fee = tx.splitCoins(tx.gas, [tx.pure(Number(POOL_INIT_FEES))]);

  tx.moveCall({
    target: `${SCRIPTS_PACKAGE_ID}::router::register_3_pool`,
    typeArguments: [type_X, type_Y, type_Z, type_curve],
    arguments: [tx.object(clock), tx.object(config), tx.object(poolRegistry), tx.object(sui_fee_collector), SUI_fee,
    tx.pure(decimal_X), tx.pure(decimal_Y), tx.pure(decimal_Z), tx.pure(init_params), tx.pure(initial_prices), tx.pure(weights)]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(3500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
      // Extract pool ID
      // console.log(txn);
      let created = txn.effects.created;
      // console.log(created);
      for (const object of created) {
        // find id of liquidity pool
        if (object.owner.hasOwnProperty("Shared")) {
          return object.reference.objectId;
        }
      }
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


// --------------------x--------------------xxx--------------------x-------------------------------------
// --------------------x-------------- QUERY FUNCTIONS --------------------x--------------------


export async function getSuiForGas(provider, address) {
  let obj = await provider.getCoins({ owner: address, coinType: "0x2::sui::SUI" });
  // console.log(obj);
  obj = obj['data']
  let i = 0;
  for (i = 0; obj.length; i++) {
    // console.log(obj[i]);
    // console.log(obj[i].coinType);
    // console.log(obj[i]["coinObjectId"]);
    if (obj[i].coinType == "0x2::sui::SUI") {
      return obj[i]["coinObjectId"]
    }
  }
}

export async function getCoinObjectId(provider, address, type) {
  console.log(`Getting coin object id for ${type}...`)
  let obj = await provider.getCoins({ owner: address, coinType: type });
  // console.log(obj)
  obj = obj['data']
  let i = 0;
  for (i = 0; obj.length; i++) {
    return obj[i]["coinObjectId"]
  }
}

export async function getAllCoinObjectIds(provider, address, type) {
  let obj = await provider.getCoins({ owner: address, coinType: type });
  // console.log(obj)
  obj = obj['data']

  let objectIds = [];
  let i = 0;
  for (i = 0; i < obj.length; i++) {
    objectIds.push(obj[i]["coinObjectId"])
  }
  return objectIds;
}

export async function getObjectOfType(provider, address, type) {
  let obj = await provider.getOwnedObjects({ owner: address, coinType: type });
  // console.log(obj)
  obj = obj['data']

  let objectIds = [];
  let i = 0;
  for (i = 0; i < obj.length; i++) {
    objectIds.push(obj[i]["coinObjectId"])
  }
  return objectIds;
}

export async function getHoneyObjectOfType(provider, address, type) {
  let obj = await provider.getOwnedObjects({ owner: address, filter: {
    MatchAny: [
      {
        StructType: type,
      },
    ],
  },
  options: { showType: true, showContent: true },
  cursor: null,
  limit: 10, });

  obj = obj['data']
  console.log(obj)

  let objectIds = [];
  let i = 0;
  for (i = 0; i < obj.length; i++) {
    objectIds.push(obj[i]["data"]["objectId"])
  }
  return objectIds;
}






/**
 * Constructs a transaction payload for providing token X liquidity in a two-token pool.
 * @returns {TransactionBlock} Transaction payload for providing token X liquidity in a two-token pool.
 */
export function get_swap2pool_provide_x_payload(
  scripts_address,
  pool_object_id,
  type_array,
  coin_X_in,
  x_in_amt,
  y_out_min,
  is_give_in
) {
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${scripts_address}::router::swap2pool_provide_x`,
    typeArguments: type_array,
    arguments: [
      tx.object(CLOCK),
      tx.object(pool_object_id),
      tx.object(coin_X_in),
      tx.pure(Math.floor(x_in_amt)),
      tx.pure(Math.floor(y_out_min)),
      tx.pure(is_give_in),
    ],
  });
  return tx;
}



/**
 * Constructs a transaction payload for providing token X liquidity in a two-token pool.
 * @returns {TransactionBlock} Transaction payload for providing token X liquidity in a two-token pool.
 */
export async function get_swap2pool_provide_sui_x_payload(
  scripts_address,
  pool_object_id,
  type_array,
  coin_X_vec,
  x_in_amt,
  y_out_min,
  is_give_in,
  network_url
) {
  const tx = new TransactionBlock();
  tx.setGasBudget(30000000);
  const coin_X_in = await mergeCoinsIfNeeded(
    "0x2::sui::SUI",
    coin_X_vec,
    x_in_amt,
    tx,
    network_url
  );

  tx.moveCall({
    target: `${scripts_address}::router::swap2pool_provide_x`,
    typeArguments: type_array,
    arguments: [
      tx.object(CLOCK),
      tx.object(pool_object_id),
      coin_X_in,
      tx.pure(Math.floor(x_in_amt)),
      tx.pure(Math.floor(y_out_min)),
      tx.pure(is_give_in),
    ],
  });
  return tx;
}






/**
 * Constructs a transaction payload for providing token Y liquidity in a two-token pool.
 * @returns {TransactionBlock} Transaction payload for providing token Y liquidity in a two-token pool.
 */
export function get_swap2pool_provide_y_payload(
  scripts_address,
  pool_object_id,
  type_array,
  x_out_min,
  coin_Y_in,
  y_in_amt,
  is_give_in
) {
  // Make txBlock
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${scripts_address}::router::swap2pool_provide_y`,
    typeArguments: type_array,
    arguments: [
      tx.object(CLOCK),
      tx.object(pool_object_id),
      tx.pure(Math.floor(x_out_min)),
      tx.object(coin_Y_in),
      tx.pure(Math.floor(y_in_amt)),
      tx.pure(is_give_in),
    ],
  });
  return tx;
}


export async function execute_2_pool_swap(provider, signer, tx) {
  console.log(`Executing swap tx (2 pool)...`)
  // Execute transaction
  tx.setGasBudget(30000000);
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(1950);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function update_dragon_trainer_kraft_fee(signer, WalletPackageID, adminCap, ApeConfig, fee) {
  console.log(`Updating dragon_trainer mint fee...`)
  const tx = new TransactionBlock();
  tx.moveCall({
    target: `${WalletPackageID}::dragon_trainer::update_trainer_kraft_fee`,
    typeArguments: [],
    arguments: [tx.object(adminCap), tx.object(ApeConfig), tx.pure(fee)],
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
}





export async function claim_fee_for_dragon_trainer(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  _fee_claim_cap,
  bees_manager,
  recepient_addr
) {
  console.log(`\n Claiming all collected fee via DragonTrainer..`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);
  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::harvest_kraft_yield`,
    typeArguments: [],
    arguments: [tx.object(_fee_claim_cap),
    tx.object(bees_manager),
    tx.pure(recepient_addr)
    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}




export async function admin_mint_queen(
  provider,
  signer,
  PROFILE_PACKAGE_ID,
  clock, 
  cap,
  random,
  fee_collector,
  bees_manager,
  yield_farm,
  user_trainer,
  coin_X_vec,
  x_in_amt,
  network_url
) {
  console.log(`\n Claiming all collected fee via DragonTrainer..`)
  // Execute transaction
  const tx = new TransactionBlock();
  tx.setGasBudget(1000000000);

  let payable_sui = await mergeCoinsIfNeeded("0x2::sui::SUI", coin_X_vec, x_in_amt, tx, network_url);


  tx.moveCall({
    target: `${PROFILE_PACKAGE_ID}::dragon_trainer::transfer_bee_to_trainer`,
    typeArguments: [],
    arguments: [tx.object(clock),
    tx.object(cap),
    tx.object(random), 
    tx.object(fee_collector),
    tx.object(bees_manager),
    tx.object(yield_farm),
    tx.object(user_trainer),
    payable_sui,
    ]
  });
  const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
  // Get transaction results 
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
  try {
    await sleep(5500);
    const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
    let status = txn.effects.status;
    if (status.status == 'success') {
      console.log("Transaction successful\n");
    } else {
      console.log(`Transaction failed: ${status.error}\n`);
    }
  } catch (error) {
    console.log(error);
  }
}


                                             export async function transfer_bee_to_trainer(
                                              provider,
                                              signer,
                                              PROFILE_PACKAGE_ID,
                                              bees_manager,
                                              transferred_by, 
                                              recepient,
                                              version
                                            ) {
                                              console.log(`\n Claiming all collected fee via DragonTrainer..`)
                                              // Execute transaction
                                              const tx = new TransactionBlock();
                                              tx.setGasBudget(1000000000);
                                            
                                              tx.moveCall({
                                                target: `${PROFILE_PACKAGE_ID}::dragon_trainer::transfer_bee_to_trainer`,
                                                typeArguments: [],
                                                arguments: [tx.object(bees_manager),
                                                tx.object(transferred_by),
                                                tx.pure(recepient), 
                                                tx.pure(version),
                                                ]
                                              });
                                              const result = await provider.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: tx, requestType: 'WaitForEffectsCert' });
                                              // Get transaction results 
                                              let txhash = result.digest;
                                              console.log(`Transaction hash: ${txhash}`);
                                              try {
                                                await sleep(5500);
                                                const txn = await provider.getTransactionBlock({ digest: txhash, options: { showEffects: true } });
                                                let status = txn.effects.status;
                                                if (status.status == 'success') {
                                                  console.log("Transaction successful\n");
                                                } else {
                                                  console.log(`Transaction failed: ${status.error}\n`);
                                                }
                                              } catch (error) {
                                                console.log(error);
                                              }
                                            }
                                            
                                            
                                             