import { yieldflow } from ".."
const PUBLISHED_AT = yieldflow.PUBLISHED_AT
import { obj } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export function init(tx: Transaction, witnessHive: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::hive::init`, arguments: [obj(tx, witnessHive)], }) }
