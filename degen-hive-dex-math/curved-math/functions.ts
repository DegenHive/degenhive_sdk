import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

import { math } from "..";
const PUBLISHED_AT = math.PUBLISHED_AT

export interface GetCurAGammaArgs { clock: ObjectArg; curvedConfig: ObjectArg }

export function getCurAGamma( txb: TransactionBlock, args: GetCurAGammaArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_cur_A_gamma`, arguments: [ obj(txb, args.clock), obj(txb, args.curvedConfig) ], }) }

export function getCurvedConfigAmpGammaParams( txb: TransactionBlock, curvedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_amp_gamma_params`, arguments: [ obj(txb, curvedConfig) ], }) }

export function getCurvedConfigFeeParams( txb: TransactionBlock, curvedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_fee_params`, arguments: [ obj(txb, curvedConfig) ], }) }

export function getCurvedConfigPricesInfo( txb: TransactionBlock, curvedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_prices_info`, arguments: [ obj(txb, curvedConfig) ], }) }

export function getCurvedConfigScalingFactor( txb: TransactionBlock, curvedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_scaling_factor`, arguments: [ obj(txb, curvedConfig) ], }) }

export function getCurvedConfigXcpParams( txb: TransactionBlock, curvedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_xcp_params`, arguments: [ obj(txb, curvedConfig) ], }) }

export interface GetDxArgs { xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; priceVec: Array<bigint | TransactionArgument> | TransactionArgument; amp: bigint | TransactionArgument; gamma: bigint | TransactionArgument; midFee: bigint | TransactionArgument; outFee: bigint | TransactionArgument; feeGamma: bigint | TransactionArgument; d0: bigint | TransactionArgument; offeredAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; askAmount: bigint | TransactionArgument }

export function getDx( txb: TransactionBlock, args: GetDxArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_dx`, arguments: [ pure(txb, args.xUnsorted, `vector<u256>`), pure(txb, args.priceVec, `vector<u256>`), pure(txb, args.amp, `u64`), pure(txb, args.gamma, `u256`), pure(txb, args.midFee, `u64`), pure(txb, args.outFee, `u64`), pure(txb, args.feeGamma, `u256`), pure(txb, args.d0, `u256`), pure(txb, args.offeredAssetIndex, `u64`), pure(txb, args.askAssetIndex, `u64`), pure(txb, args.askAmount, `u256`) ], }) }

export interface GetDyArgs { xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; priceVec: Array<bigint | TransactionArgument> | TransactionArgument; amp: bigint | TransactionArgument; gamma: bigint | TransactionArgument; midFee: bigint | TransactionArgument; outFee: bigint | TransactionArgument; feeGamma: bigint | TransactionArgument; d0: bigint | TransactionArgument; xValue: bigint | TransactionArgument; i: bigint | TransactionArgument; j: bigint | TransactionArgument }

export function getDy( txb: TransactionBlock, args: GetDyArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_dy`, arguments: [ pure(txb, args.xUnsorted, `vector<u256>`), pure(txb, args.priceVec, `vector<u256>`), pure(txb, args.amp, `u64`), pure(txb, args.gamma, `u256`), pure(txb, args.midFee, `u64`), pure(txb, args.outFee, `u64`), pure(txb, args.feeGamma, `u256`), pure(txb, args.d0, `u256`), pure(txb, args.xValue, `u256`), pure(txb, args.i, `u64`), pure(txb, args.j, `u64`) ], }) }

export function getMaxAmp( txb: TransactionBlock, nCoins: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_max_amp`, arguments: [ pure(txb, nCoins, `u64`) ], }) }

export function getMinAmp( txb: TransactionBlock, nCoins: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_min_amp`, arguments: [ pure(txb, nCoins, `u64`) ], }) }

export interface GetXcpArgs { d: bigint | TransactionArgument; priceScale: Array<bigint | TransactionArgument> | TransactionArgument; nCoins: bigint | TransactionArgument }

export function getXcp( txb: TransactionBlock, args: GetXcpArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_xcp`, arguments: [ pure(txb, args.d, `u256`), pure(txb, args.priceScale, `vector<u256>`), pure(txb, args.nCoins, `u256`) ], }) }