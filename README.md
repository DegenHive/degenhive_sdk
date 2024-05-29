# DegenHive JavaScript SDK

The DegenHive JavaScript SDK provides developers with the tools required to interact easily with the DegenHive smart contracts on the Sui Network. This SDK abstracts away the complexities of directly interacting with move modules, offering simple asynchronous methods to perform various on-chain actions such as querying contract states and executing transactions.

## Usage

Here is an example of how to use the SDK to get the total supply of Bee tokens on the DegenHive DEX. Several changes to the ease of use are coming. Stay tuned!

```ts
import { getTotalBeeSupply } from 'degenhive_sdk/dist/degen-hive-dex-config/bee/functions'
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { SuiClient } from '@mysten/sui.js/client';

const private_key = "<your pvt key>";
const sui_client = new SuiClient({ url: "https://fullnode.testnet.sui.io:443/" });
const signer = Ed25519Keypair.fromSecretKey(
    Buffer.from(private_key, 'hex')
);

(async () => {
    const txb = new TransactionBlock();
    const totalBeeSupply = getTotalBeeSupply(txb);
    const result = await sui_client.signAndExecuteTransactionBlock({ signer: signer, transactionBlock: txb, requestType: 'WaitForEffectsCert' });
    txb.setGasBudget(30000000);
    let txhash = result.digest;
    console.log(`Transaction hash: ${txhash}`);
    // console.log(`Total Bee Supply: ${result}`);
    }
)();
```

## Support
If you have any issues or feature requests, please submit an issue on our GitHub issues page. For more direct support, join our Discord community.



