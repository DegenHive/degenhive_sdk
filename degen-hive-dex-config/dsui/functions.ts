import {PUBLISHED_AT} from "..";
import {ObjectArg, obj} from "../../_framework/util";
import {TransactionBlock} from "@mysten/sui.js/transactions";

export function init( txb: TransactionBlock, witnessHsui: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dsui::init`, arguments: [ obj(txb, witnessHsui) ], }) }
