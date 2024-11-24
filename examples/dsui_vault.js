import { DSuiVaultFunctions, EntryScriptFunctions, yieldflow } from "degenhive";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair, Ed25519PublicKey } from '@mysten/sui.js/keypairs/ed25519';
import chalk from 'chalk';
import {  readJsonFile, writeJsonToFile,  getCoinObjectId,  getSuiBalance,  } from './helpers.js';
import dotenv from 'dotenv';
dotenv.config();

const ED25519_DERIVE_PATH = `m/44'/784'/0'/0'/0'`
const SECP_256_DERIVE_PATH = `m/54'/784'/0'/0/0`;

const deriveKeypairPath = {
    Ed25519: ED25519_DERIVE_PATH,
    Secp256k1: SECP_256_DERIVE_PATH
  }

// EntryScriptFunctions
const { stakeSui, stakeWithValidator, requestInstantUnstake, requestDelayedUnstake, claimUnstakedSui } = EntryScriptFunctions;

// DSuiVaultFunctions
const { claimCollectedLsdFee, claimUnstakeEpoch, updateAccruedRewards, stakeSuiRequest, query_stake_sui_request, request_instant_unstake,
    query_request_instant_unstake, request_delayed_unstake, query_request_delayed_unstake, claim_unstaked_sui, process_stake_sui_requests,
    update_accrued_rewards, get_total_sui, get_dsui_by_sui, get_sui_by_dsui, get_sui_claimable_per_dsui
  } = DSuiVaultFunctions;

const { PACKAGE_ID } = yieldflow;

// DSUI Type
const DSUI_TYPE = `${PACKAGE_ID}::dsui::DSUI`


const sui_client = new SuiClient({ url: "https://fullnode.mainnet.sui.io:443/" });
const MNEMONIC = process.env.MNEMONIC;

// Create signer wallet and print the address
let signer = Ed25519Keypair.deriveKeypairFromSeed(MNEMONIC, deriveKeypairPath.Ed25519);
const signer_address =(signer.getPublicKey().toSuiAddress())
console.log(chalk.magentaBright(`🚀 Signer a/c Address: ${chalk.bold(signer_address)} \nThis will be used for the upcoming deployment tasks!`));

// Get the SUI balance of the signer wallet
let sui_balance = (await getSuiBalance(sui_client, signer_address) / 1000000000).toFixed(3);
console.log(chalk.magentaBright(`🚀 Signer a/c SUI Balance: ${chalk.bold(sui_balance)} \n`));


// Function to execute the transaction
async function execute_tx(txb) {
  const result = await sui_client.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: txb,
    requestType: "WaitForEffectsCert",
  });
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
}


(async () => {

    
  let txb = new TransactionBlock();
  txb.setGasBudget(30000000);

  // 1. Stake SUI with dSUI Vault --> User will get dSUI against the staked SUI
  let sui_to_stake = txb.splitCoins(txb.gas, [txb.pure(100000)]);
  stakeSui(txb,  {  suiCoin: sui_to_stake, toStake: 100000 });
  await execute_tx(txb);

  // 2. Stake SUI with Validator --> User can choose validator to stake his SUI with
  let sui_to_stake_with_validator = txb.splitCoins(txb.gas, [txb.pure(100000000)]);
  let validator_address = "0xd6edebcfa598dcb6e71037b34f09ddc6a20dd874edca1d89d5ccd11ec070d040";
  stakeWithValidator(txb, { suiCoin: sui_to_stake_with_validator, toStake: 100000000, selectedValidator: validator_address });
  await execute_tx(txb);

  // 3. Request Instant Unstake --> User can request instant unstake of his dSUI to get back his SUI
  let dsui_to_instant_unstake = await getCoinObjectId(sui_client, signer_address, DSUI_TYPE);
  requestInstantUnstake(txb, { dsuiCoin: dsui_to_instant_unstake, toUnstake: 10000000 });
  await execute_tx(txb);


})();

