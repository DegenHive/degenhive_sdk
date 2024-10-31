import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface AddLiquidityComputationArgs { amp: bigint | TransactionArgument; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; providedTokens: Array<bigint | TransactionArgument> | TransactionArgument; totalFeeBps: bigint | TransactionArgument; lpSupply: bigint | TransactionArgument }

export function addLiquidityComputation( tx: Transaction, args: AddLiquidityComputationArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::add_liquidity_computation`, arguments: [ pure(tx, args.amp, `u64`), pure(tx, args.existingLiquidity, `vector<u256>`), pure(tx, args.providedTokens, `vector<u256>`), pure(tx, args.totalFeeBps, `u64`), pure(tx, args.lpSupply, `u256`) ], }) }

export interface ComputeAskAmountArgs { amp: bigint | TransactionArgument; offerAssetIndex: bigint | TransactionArgument; offerAmount: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; pools: Array<bigint | TransactionArgument> | TransactionArgument }

export function computeAskAmount( tx: Transaction, args: ComputeAskAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_ask_amount`, arguments: [ pure(tx, args.amp, `u64`), pure(tx, args.offerAssetIndex, `u64`), pure(tx, args.offerAmount, `u256`), pure(tx, args.askAssetIndex, `u64`), pure(tx, args.pools, `vector<u256>`) ], }) }

export interface ComputeOfferAmountArgs { amp: bigint | TransactionArgument; askAmount: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; offerAssetIndex: bigint | TransactionArgument; pools: Array<bigint | TransactionArgument> | TransactionArgument; commissionRate: bigint | TransactionArgument }

export function computeOfferAmount( tx: Transaction, args: ComputeOfferAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_offer_amount`, arguments: [ pure(tx, args.amp, `u64`), pure(tx, args.askAmount, `u256`), pure(tx, args.askAssetIndex, `u64`), pure(tx, args.offerAssetIndex, `u64`), pure(tx, args.pools, `vector<u256>`), pure(tx, args.commissionRate, `u64`) ], }) }

export interface ImbalancedLiquidityWithdrawArgs { amp: bigint | TransactionArgument; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; lpCoinSupply: bigint | TransactionArgument; coinsToRefund: Array<bigint | TransactionArgument> | TransactionArgument; totalFeeBps: bigint | TransactionArgument }

export function imbalancedLiquidityWithdraw( tx: Transaction, args: ImbalancedLiquidityWithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::imbalanced_liquidity_withdraw`, arguments: [ pure(tx, args.amp, `u64`), pure(tx, args.existingLiquidity, `vector<u256>`), pure(tx, args.lpCoinSupply, `u256`), pure(tx, args.coinsToRefund, `vector<u256>`), pure(tx, args.totalFeeBps, `u64`) ], }) }

export interface CalcYArgs { fromAssetIndex: bigint | TransactionArgument; toAssetIndex: bigint | TransactionArgument; newOfferPoolBalance: bigint | TransactionArgument; pools: Array<bigint | TransactionArgument> | TransactionArgument; amp: bigint | TransactionArgument }

export function calcY( tx: Transaction, args: CalcYArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::calc_y`, arguments: [ pure(tx, args.fromAssetIndex, `u64`), pure(tx, args.toAssetIndex, `u64`), pure(tx, args.newOfferPoolBalance, `u256`), pure(tx, args.pools, `vector<u256>`), pure(tx, args.amp, `u64`) ], }) }

export interface CalculateFeeChargedArgs { initReserveSize: bigint | TransactionArgument; updatedReserveSize: bigint | TransactionArgument; initD: bigint | TransactionArgument; updatedD: bigint | TransactionArgument; fee: bigint | TransactionArgument }

export function calculateFeeCharged( tx: Transaction, args: CalculateFeeChargedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::calculate_fee_charged`, arguments: [ pure(tx, args.initReserveSize, `u256`), pure(tx, args.updatedReserveSize, `u256`), pure(tx, args.initD, `u256`), pure(tx, args.updatedD, `u256`), pure(tx, args.fee, `u64`) ], }) }

export interface ComputeCurrentAmpArgs { clock: TransactionObjectInput; initAmp: bigint | TransactionArgument; initAmpTime: bigint | TransactionArgument; nextAmp: bigint | TransactionArgument; nextAmpTime: bigint | TransactionArgument }

export function computeCurrentAmp( tx: Transaction, args: ComputeCurrentAmpArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_current_amp`, arguments: [ obj(tx, args.clock), pure(tx, args.initAmp, `u64`), pure(tx, args.initAmpTime, `u64`), pure(tx, args.nextAmp, `u64`), pure(tx, args.nextAmpTime, `u64`) ], }) }

export interface ComputeDArgs { amp: bigint | TransactionArgument; u256Pools: Array<bigint | TransactionArgument> | TransactionArgument }

export function computeD( tx: Transaction, args: ComputeDArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_d`, arguments: [ pure(tx, args.amp, `u64`), pure(tx, args.u256Pools, `vector<u256>`) ], }) }

export interface GetCurAAndScalingFactorsArgs { clock: TransactionObjectInput; stableConfig: TransactionObjectInput }

export function getCurAAndScalingFactors( tx: Transaction, args: GetCurAAndScalingFactorsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::get_cur_A_and_scaling_factors`, arguments: [ obj(tx, args.clock), obj(tx, args.stableConfig) ], }) }

export function getStableConfigParams( tx: Transaction, stableConfig: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::get_stable_config_params`, arguments: [ obj(tx, stableConfig) ], }) }

export interface InitializeStableConfigArgs { clock: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; scalingFactor: Array<bigint | TransactionArgument> | TransactionArgument }

export function initializeStableConfig( tx: Transaction, args: InitializeStableConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::initialize_stable_config`, arguments: [ obj(tx, args.clock), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.scalingFactor, `vector<u256>`) ], }) }

export interface UpdateStableConfigArgs { stableConfig: TransactionObjectInput; initAmpTime: bigint | TransactionArgument; nextAmp: bigint | TransactionArgument; nextAmpTime: bigint | TransactionArgument }

export function updateStableConfig( tx: Transaction, args: UpdateStableConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::update_stable_config`, arguments: [ obj(tx, args.stableConfig), pure(tx, args.initAmpTime, `u64`), pure(tx, args.nextAmp, `u64`), pure(tx, args.nextAmpTime, `u64`) ], }) }
