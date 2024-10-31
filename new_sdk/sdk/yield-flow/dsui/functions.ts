import {PUBLISHED_AT} from "..";
import {obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, witnessDsui: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui::init`, arguments: [ obj(tx, witnessDsui) ], }) }
