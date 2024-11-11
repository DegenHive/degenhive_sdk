import { TransactionBlock } from '@mysten/sui.js/transactions';
import * as fs from 'fs';
import { execSync } from "child_process";

const SUI_COIN = "0x2::sui::SUI";

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
