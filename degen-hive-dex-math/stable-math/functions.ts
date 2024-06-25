import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

import { math } from "..";
const PUBLISHED_AT = math.PUBLISHED_AT

export interface GetCurAAndScalingFactorsArgs { clock: ObjectArg; stableConfig: ObjectArg }

export function getCurAAndScalingFactors( txb: TransactionBlock, args: GetCurAAndScalingFactorsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::get_cur_A_and_scaling_factors`, arguments: [ obj(txb, args.clock), obj(txb, args.stableConfig) ], }) }

export function getStableConfigParams( txb: TransactionBlock, stableConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::get_stable_config_params`, arguments: [ obj(txb, stableConfig) ], }) }