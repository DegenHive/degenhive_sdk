import { DSuiVaultFunctions, EntryScriptFunctions } from "degenhive_pool_sdk";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair, Ed25519PublicKey } from '@mysten/sui.js/keypairs/ed25519';
import chalk from 'chalk';
import figlet from 'figlet';
import {  readJsonFile, writeJsonToFile,   getSuiBalance,  } from './helpers.js';

const { stakeSui } = EntryScriptFunctions;

const private_key =
  "3be7c260dd2c9e6f4b667c632f129572630a1129d208d9a893aea6f0e39ca119";
const sui_client = new SuiClient({
  url: "https://fullnode.mainnet.sui.io:443/",
});



const ED25519_DERIVE_PATH = `m/44'/784'/0'/0'/0'`
const SECP_256_DERIVE_PATH = `m/54'/784'/0'/0/0`;

const deriveKeypairPath = {
  Ed25519: ED25519_DERIVE_PATH,
  Secp256k1: SECP_256_DERIVE_PATH
}


let signer = Ed25519Keypair.deriveKeypairFromSeed("private_key private_key private_key private_key private_key private_key private_key private_key private_key private_key private_key private_key", deriveKeypairPath.Ed25519);


// const publicKey = new Ed25519PublicKey(signer.getPublicKey().toSuiAddress());
const deployer_address =(signer.getPublicKey().toSuiAddress())

console.log(chalk.magentaBright(`🚀 Deployer Account Address: ${chalk.bold(deployer_address)} \nThis will be used for the upcoming deployment tasks!`));


let sui_balance = (await getSuiBalance(sui_client, deployer_address) / 1000000000).toFixed(3);
console.log(chalk.magentaBright(`🚀 Deployer Account SUI Balance: ${chalk.bold(sui_balance)} \n`));
// return


(async () => {

  let txb = new TransactionBlock();
  console.log(txb);
  txb.setGasBudget(30000000);
  let sui_coin = txb.splitCoins(txb.gas, [txb.pure(100000)]);
  // StakeSuiArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; suiCoin: TransactionObjectInput; toStake: bigint | TransactionArgument }
  // { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; suiCoin: TransactionObjectInput; toStake: bigint | TransactionArgument }

  console.log(stakeSui);
  stakeSui(txb,  {
    suiSystemState: "0x5",
    vault: "0x85aaf87a770b4a09822e7ca3de7f9424a4f58688cfa120f55b294a98d599d402",
    suiCoin: sui_coin,
    toStake: 100000
  });
  // console.log(stake_sui_resp);
  console.log(txb);
  // return


  // stake_sui_resp.setGasBudget(30000000);
  // stake_sui_resp.setSenderIfNotSet(deployer_address);
  // console.log(DSuiVaultFunctions);
  // console.log(stakeSui);
  // return; 

  const result = await sui_client.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: txb,
    requestType: "WaitForEffectsCert",
    // sender: deployer_address
  });
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
})();

// stakeSui(tx: Transaction, args: StakeSuiArgs)