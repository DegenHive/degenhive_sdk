import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface AddLiquidityComputationArgs { amp: bigint | TransactionArgument; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; providedTokens: Array<bigint | TransactionArgument> | TransactionArgument; totalFeeBps: bigint | TransactionArgument; lpSupply: bigint | TransactionArgument }

export function addLiquidityComputation( txb: TransactionBlock, args: AddLiquidityComputationArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::add_liquidity_computation`, arguments: [ pure(txb, args.amp, `u64`), pure(txb, args.existingLiquidity, `vector<u256>`), pure(txb, args.providedTokens, `vector<u256>`), pure(txb, args.totalFeeBps, `u64`), pure(txb, args.lpSupply, `u256`) ], }) }

export interface CalculateFeeChargedArgs { initReserveSize: bigint | TransactionArgument; updatedReserveSize: bigint | TransactionArgument; initD: bigint | TransactionArgument; updatedD: bigint | TransactionArgument; fee: bigint | TransactionArgument }

export function calculateFeeCharged( txb: TransactionBlock, args: CalculateFeeChargedArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::calculate_fee_charged`, arguments: [ pure(txb, args.initReserveSize, `u256`), pure(txb, args.updatedReserveSize, `u256`), pure(txb, args.initD, `u256`), pure(txb, args.updatedD, `u256`), pure(txb, args.fee, `u64`) ], }) }

export interface ComputeAskAmountArgs { amp: bigint | TransactionArgument; offerAssetIndex: bigint | TransactionArgument; offerAmount: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; pools: Array<bigint | TransactionArgument> | TransactionArgument }

export function computeAskAmount( txb: TransactionBlock, args: ComputeAskAmountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_ask_amount`, arguments: [ pure(txb, args.amp, `u64`), pure(txb, args.offerAssetIndex, `u64`), pure(txb, args.offerAmount, `u256`), pure(txb, args.askAssetIndex, `u64`), pure(txb, args.pools, `vector<u256>`) ], }) }

export interface ComputeOfferAmountArgs { amp: bigint | TransactionArgument; askAmount: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; offerAssetIndex: bigint | TransactionArgument; pools: Array<bigint | TransactionArgument> | TransactionArgument; commissionRate: bigint | TransactionArgument }

export function computeOfferAmount( txb: TransactionBlock, args: ComputeOfferAmountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_offer_amount`, arguments: [ pure(txb, args.amp, `u64`), pure(txb, args.askAmount, `u256`), pure(txb, args.askAssetIndex, `u64`), pure(txb, args.offerAssetIndex, `u64`), pure(txb, args.pools, `vector<u256>`), pure(txb, args.commissionRate, `u64`) ], }) }

export interface CalcYArgs { fromAssetIndex: bigint | TransactionArgument; toAssetIndex: bigint | TransactionArgument; newOfferPoolBalanceBalance: bigint | TransactionArgument; pools: Array<bigint | TransactionArgument> | TransactionArgument; amp: bigint | TransactionArgument }

export function calcY( txb: TransactionBlock, args: CalcYArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::calc_y`, arguments: [ pure(txb, args.fromAssetIndex, `u64`), pure(txb, args.toAssetIndex, `u64`), pure(txb, args.newOfferPoolBalanceBalance, `u256`), pure(txb, args.pools, `vector<u256>`), pure(txb, args.amp, `u64`) ], }) }

export interface ComputeCurrentAmpArgs { clock: ObjectArg; initAmp: bigint | TransactionArgument; initAmpTime: bigint | TransactionArgument; nextAmp: bigint | TransactionArgument; nextAmpTime: bigint | TransactionArgument }

export function computeCurrentAmp( txb: TransactionBlock, args: ComputeCurrentAmpArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_current_amp`, arguments: [ obj(txb, args.clock), pure(txb, args.initAmp, `u64`), pure(txb, args.initAmpTime, `u64`), pure(txb, args.nextAmp, `u64`), pure(txb, args.nextAmpTime, `u64`) ], }) }

export interface ComputeDArgs { amp: bigint | TransactionArgument; u256Pools: Array<bigint | TransactionArgument> | TransactionArgument }

export function computeD( txb: TransactionBlock, args: ComputeDArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_d`, arguments: [ pure(txb, args.amp, `u64`), pure(txb, args.u256Pools, `vector<u256>`) ], }) }

export interface GetCurAAndScalingFactorsArgs { clock: ObjectArg; stableConfig: ObjectArg }

export function getCurAAndScalingFactors( txb: TransactionBlock, args: GetCurAAndScalingFactorsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::get_cur_A_and_scaling_factors`, arguments: [ obj(txb, args.clock), obj(txb, args.stableConfig) ], }) }

export function getStableConfigParams( txb: TransactionBlock, stableConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::get_stable_config_params`, arguments: [ obj(txb, stableConfig) ], }) }

export interface ImbalancedLiquidityWithdrawArgs { amp: bigint | TransactionArgument; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; lpCoinSupply: bigint | TransactionArgument; coinsToRefund: Array<bigint | TransactionArgument> | TransactionArgument; totalFeeBps: bigint | TransactionArgument }

export function imbalancedLiquidityWithdraw( txb: TransactionBlock, args: ImbalancedLiquidityWithdrawArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::imbalanced_liquidity_withdraw`, arguments: [ pure(txb, args.amp, `u64`), pure(txb, args.existingLiquidity, `vector<u256>`), pure(txb, args.lpCoinSupply, `u256`), pure(txb, args.coinsToRefund, `vector<u256>`), pure(txb, args.totalFeeBps, `u64`) ], }) }

export interface InitializeStableConfigArgs { clock: ObjectArg; initParams: Array<bigint | TransactionArgument> | TransactionArgument; scalingFactor: Array<bigint | TransactionArgument> | TransactionArgument }

export function initializeStableConfig( txb: TransactionBlock, args: InitializeStableConfigArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::initialize_stable_config`, arguments: [ obj(txb, args.clock), pure(txb, args.initParams, `vector<u64>`), pure(txb, args.scalingFactor, `vector<u256>`) ], }) }

export interface UpdateStableConfigArgs { stableConfig: ObjectArg; initAmpTime: bigint | TransactionArgument; nextAmp: bigint | TransactionArgument; nextAmpTime: bigint | TransactionArgument }

export function updateStableConfig( txb: TransactionBlock, args: UpdateStableConfigArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::update_stable_config`, arguments: [ obj(txb, args.stableConfig), pure(txb, args.initAmpTime, `u64`), pure(txb, args.nextAmp, `u64`), pure(txb, args.nextAmpTime, `u64`) ], }) }
