import {ObjectArg, obj} from "../../_framework/util";
import {TransactionBlock} from "@mysten/sui.js/transactions";

import { config } from "..";
const PUBLISHED_AT = config.PUBLISHED_AT

export function init( txb: TransactionBlock, witnessHsui: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dsui::init`, arguments: [ obj(txb, witnessHsui) ], }) }