import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

import { math } from "..";
const PUBLISHED_AT = math.PUBLISHED_AT

export function getExitFee( txb: TransactionBlock, weightedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_exit_fee`, arguments: [ obj(txb, weightedConfig) ], }) }

export function getScalingFactorVec( txb: TransactionBlock, weightedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_scaling_factor_vec`, arguments: [ obj(txb, weightedConfig) ], }) }

export interface GetWeightAndSfAtIndexArgs { weightedConfig: ObjectArg; index: bigint | TransactionArgument; returnNormalized: boolean | TransactionArgument }

export function getWeightAndSfAtIndex( txb: TransactionBlock, args: GetWeightAndSfAtIndexArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weight_and_sf_at_index`, arguments: [ obj(txb, args.weightedConfig), pure(txb, args.index, `u64`), pure(txb, args.returnNormalized, `bool`) ], }) }

export interface GetWeightAtIndexArgs { weightedConfig: ObjectArg; index: bigint | TransactionArgument; returnNormalized: boolean | TransactionArgument }

export function getWeightAtIndex( txb: TransactionBlock, args: GetWeightAtIndexArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weight_at_index`, arguments: [ obj(txb, args.weightedConfig), pure(txb, args.index, `u64`), pure(txb, args.returnNormalized, `bool`) ], }) }

export function getWeightedConfigParams( txb: TransactionBlock, weightedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weighted_config_params`, arguments: [ obj(txb, weightedConfig) ], }) }