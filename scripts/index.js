import { stakeSui } from "degenhive_pool_sdk";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";

const private_key =
  "3be7c260dd2c9e6f4b667c632f129572630a1129d208d9a893aea6f0e39ca119";
const sui_client = new SuiClient({
  url: "https://fullnode.mainnet.sui.io:443/",
});


const signer = Ed25519Keypair.fromSecretKey(Buffer.from(private_key, "hex"));

(async () => {
  console.log(signer);
  const txb = new TransactionBlock();
  const totalBeeSupply = stakeSui(txb);
  const result = await sui_client.signAndExecuteTransactionBlock({
    signer: signer,
    transactionBlock: txb,
    requestType: "WaitForEffectsCert",
  });
  txb.setGasBudget(30000000);
  let txhash = result.digest;
  console.log(`Transaction hash: ${txhash}`);
})();

stakeSui(tx: Transaction, args: StakeSuiArgs)