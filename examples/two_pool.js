import { RouterFunctions, yieldflow } from "degenhive";
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

// RouterFunctions
const { swap2poolProvideX, swap2poolProvideY, swap3poolProvideX, swap3poolProvideY, swap3poolProvideZ  } = RouterFunctions;


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


const SUI_TYPE = "0x2::sui::SUI";
const USDC_TYPE = "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC";
const CURVED_TYPE = "0x50c2216a078d3bdf5081fe436df9f42dfdbe538ebd9c935913ce2436362cff90::curves::Curved";

(async () => {

  let txb = new TransactionBlock();
  txb.setGasBudget(30000000);

  // TWO POOl -::- USDC-SUI :: 0x091259858e939b453e04171de59c2fb8e53c17d802efbd550f83c92617596eae
  let sui_usdc_pool_addr = "0x091259858e939b453e04171de59c2fb8e53c17d802efbd550f83c92617596eae";
  let typeArguments = [];


  /// TWO TOKEN POOL ::: SWAP SUI --> USDC
  let sui_in_amt = 1 * 1e9 / 100;
  let sui_to_pay = txb.splitCoins(txb.gas, [txb.pure(sui_in_amt)]);
  typeArguments = [USDC_TYPE, SUI_TYPE, CURVED_TYPE];

  swap2poolProvideY(txb, typeArguments, {  pool: txb.object(sui_usdc_pool_addr), tokenYIn: sui_to_pay, yInAmt: sui_in_amt, xOutMin: 1, isGiveIn: true });
  await execute_tx(txb);


  /// TWO TOKEN POOL ::: SWAP USDC --> SUI
  let usdc_obj_id = await getCoinObjectId(sui_client, signer_address, USDC_TYPE);
  let usdc_in_amt = 29008;
  typeArguments = [USDC_TYPE, SUI_TYPE, CURVED_TYPE];

  swap2poolProvideX(txb, typeArguments, {  pool: txb.object(sui_usdc_pool_addr), tokenXIn: usdc_obj_id, xInAmt: usdc_in_amt, yOutMin: 1, isGiveIn: true });
  await execute_tx(txb);

 

})();

