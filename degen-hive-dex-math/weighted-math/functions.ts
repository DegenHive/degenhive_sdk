import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface AddLiquidityComputationArgs { weightedConfig: ObjectArg; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; providedTokens: Array<bigint | TransactionArgument> | TransactionArgument; totalFeeBps: bigint | TransactionArgument; lpSupply: bigint | TransactionArgument }

export function addLiquidityComputation( txb: TransactionBlock, args: AddLiquidityComputationArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::add_liquidity_computation`, arguments: [ obj(txb, args.weightedConfig), pure(txb, args.existingLiquidity, `vector<u256>`), pure(txb, args.providedTokens, `vector<u256>`), pure(txb, args.totalFeeBps, `u64`), pure(txb, args.lpSupply, `u256`) ], }) }

export interface ComputeAskAmountArgs { offerAmount: bigint | TransactionArgument; offerPoolAmount: bigint | TransactionArgument; offerWeight: bigint | TransactionArgument; askPoolAmount: bigint | TransactionArgument; askWeight: bigint | TransactionArgument }

export function computeAskAmount( txb: TransactionBlock, args: ComputeAskAmountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::compute_ask_amount`, arguments: [ pure(txb, args.offerAmount, `u256`), pure(txb, args.offerPoolAmount, `u256`), pure(txb, args.offerWeight, `u256`), pure(txb, args.askPoolAmount, `u256`), pure(txb, args.askWeight, `u256`) ], }) }

export interface ComputeOfferAmountArgs { askAmount: bigint | TransactionArgument; askPoolAmount: bigint | TransactionArgument; askWeight: bigint | TransactionArgument; offerPoolAmount: bigint | TransactionArgument; offerWeight: bigint | TransactionArgument; commissionRate: bigint | TransactionArgument }

export function computeOfferAmount( txb: TransactionBlock, args: ComputeOfferAmountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::compute_offer_amount`, arguments: [ pure(txb, args.askAmount, `u256`), pure(txb, args.askPoolAmount, `u256`), pure(txb, args.askWeight, `u256`), pure(txb, args.offerPoolAmount, `u256`), pure(txb, args.offerWeight, `u256`), pure(txb, args.commissionRate, `u64`) ], }) }

export interface ImbalancedLiquidityWithdrawArgs { weightedConfig: ObjectArg; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; lpCoinSupply: bigint | TransactionArgument; assetsToRefund: Array<bigint | TransactionArgument> | TransactionArgument; totalFeeBps: bigint | TransactionArgument }

export function imbalancedLiquidityWithdraw( txb: TransactionBlock, args: ImbalancedLiquidityWithdrawArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::imbalanced_liquidity_withdraw`, arguments: [ obj(txb, args.weightedConfig), pure(txb, args.existingLiquidity, `vector<u256>`), pure(txb, args.lpCoinSupply, `u256`), pure(txb, args.assetsToRefund, `vector<u256>`), pure(txb, args.totalFeeBps, `u64`) ], }) }

export interface CalcMintedSharesGivenSingleAssetInArgs { tokenAmountIn: bigint | TransactionArgument; tokenWeightNormalized: bigint | TransactionArgument; tokenPoolBalance: bigint | TransactionArgument; currentLpSupply: bigint | TransactionArgument; swapFee: bigint | TransactionArgument }

export function calcMintedSharesGivenSingleAssetIn( txb: TransactionBlock, args: CalcMintedSharesGivenSingleAssetInArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::calc_minted_shares_given_single_asset_in`, arguments: [ pure(txb, args.tokenAmountIn, `u256`), pure(txb, args.tokenWeightNormalized, `u256`), pure(txb, args.tokenPoolBalance, `u256`), pure(txb, args.currentLpSupply, `u256`), pure(txb, args.swapFee, `u64`) ], }) }

export interface CalcSharesGivenSingleAssetOutArgs { tokenWeightNormalized: bigint | TransactionArgument; tokenPoolBalance: bigint | TransactionArgument; currentLpSupply: bigint | TransactionArgument; tokenAmountOut: bigint | TransactionArgument; swapFee: bigint | TransactionArgument }

export function calcSharesGivenSingleAssetOut( txb: TransactionBlock, args: CalcSharesGivenSingleAssetOutArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::calc_shares_given_single_asset_out`, arguments: [ pure(txb, args.tokenWeightNormalized, `u256`), pure(txb, args.tokenPoolBalance, `u256`), pure(txb, args.currentLpSupply, `u256`), pure(txb, args.tokenAmountOut, `u256`), pure(txb, args.swapFee, `u64`) ], }) }

export interface CalculatePowArgs { baseNumerator: bigint | TransactionArgument; baseDenominator: bigint | TransactionArgument; expNumerator: bigint | TransactionArgument; expDenominator: bigint | TransactionArgument }

export function calculatePow( txb: TransactionBlock, args: CalculatePowArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::calculate_pow`, arguments: [ pure(txb, args.baseNumerator, `u256`), pure(txb, args.baseDenominator, `u256`), pure(txb, args.expNumerator, `u256`), pure(txb, args.expDenominator, `u256`) ], }) }

export function computescalingfactor( txb: TransactionBlock, tokenDecimals: number | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::computeScalingFactor`, arguments: [ pure(txb, tokenDecimals, `u8`) ], }) }

export interface FeeRatioArgs { normalizedWeight: bigint | TransactionArgument; swapFee: bigint | TransactionArgument }

export function feeRatio( txb: TransactionBlock, args: FeeRatioArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::fee_ratio`, arguments: [ pure(txb, args.normalizedWeight, `u256`), pure(txb, args.swapFee, `u256`) ], }) }

export function getExitFee( txb: TransactionBlock, weightedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_exit_fee`, arguments: [ obj(txb, weightedConfig) ], }) }

export function getScalingFactorVec( txb: TransactionBlock, weightedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_scaling_factor_vec`, arguments: [ obj(txb, weightedConfig) ], }) }

export interface GetWeightAndSfAtIndexArgs { weightedConfig: ObjectArg; index: bigint | TransactionArgument; returnNormalized: boolean | TransactionArgument }

export function getWeightAndSfAtIndex( txb: TransactionBlock, args: GetWeightAndSfAtIndexArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weight_and_sf_at_index`, arguments: [ obj(txb, args.weightedConfig), pure(txb, args.index, `u64`), pure(txb, args.returnNormalized, `bool`) ], }) }

export interface GetWeightAtIndexArgs { weightedConfig: ObjectArg; index: bigint | TransactionArgument; returnNormalized: boolean | TransactionArgument }

export function getWeightAtIndex( txb: TransactionBlock, args: GetWeightAtIndexArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weight_at_index`, arguments: [ obj(txb, args.weightedConfig), pure(txb, args.index, `u64`), pure(txb, args.returnNormalized, `bool`) ], }) }

export function getWeightedConfigParams( txb: TransactionBlock, weightedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weighted_config_params`, arguments: [ obj(txb, weightedConfig) ], }) }

export interface InitializeWeightedConfigArgs { initParams: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument; scalingFactor: Array<bigint | TransactionArgument> | TransactionArgument; nCoins: bigint | TransactionArgument }

export function initializeWeightedConfig( txb: TransactionBlock, args: InitializeWeightedConfigArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::initialize_weighted_config`, arguments: [ pure(txb, args.initParams, `vector<u64>`), pure(txb, args.weights, `vector<u64>`), pure(txb, args.scalingFactor, `vector<u256>`), pure(txb, args.nCoins, `u64`) ], }) }

export interface MaximalExactRatioJoinArgs { assetsIn: Array<bigint | TransactionArgument> | TransactionArgument; assetBalances: Array<bigint | TransactionArgument> | TransactionArgument; totalLpSupply: bigint | TransactionArgument }

export function maximalExactRatioJoin( txb: TransactionBlock, args: MaximalExactRatioJoinArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::maximal_exact_ratio_join`, arguments: [ pure(txb, args.assetsIn, `vector<u256>`), pure(txb, args.assetBalances, `vector<u256>`), pure(txb, args.totalLpSupply, `u256`) ], }) }

export interface PowApproxArgs { base: bigint | TransactionArgument; exp: bigint | TransactionArgument; precision: bigint | TransactionArgument }

export function powApprox( txb: TransactionBlock, args: PowApproxArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::pow_approx`, arguments: [ pure(txb, args.base, `u256`), pure(txb, args.exp, `u128`), pure(txb, args.precision, `u64`) ], }) }

export interface SolveForInvariantArgs { tokenBalanceFixedBefore: bigint | TransactionArgument; tokenBalanceFixedAfter: bigint | TransactionArgument; tokenWeightFixed: bigint | TransactionArgument; tokenBalanceUnknownBefore: bigint | TransactionArgument; tokenWeightUnknown: bigint | TransactionArgument }

export function solveForInvariant( txb: TransactionBlock, args: SolveForInvariantArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::solve_for_invariant`, arguments: [ pure(txb, args.tokenBalanceFixedBefore, `u256`), pure(txb, args.tokenBalanceFixedAfter, `u256`), pure(txb, args.tokenWeightFixed, `u256`), pure(txb, args.tokenBalanceUnknownBefore, `u256`), pure(txb, args.tokenWeightUnknown, `u256`) ], }) }

export interface SubSignArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function subSign( txb: TransactionBlock, args: SubSignArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::sub_sign`, arguments: [ pure(txb, args.a, `u256`), pure(txb, args.b, `u256`) ], }) }

export interface UpdateWeightedConfigArgs { weightedConfig: ObjectArg; newWeights: Array<bigint | TransactionArgument> | TransactionArgument; newExitFee: bigint | TransactionArgument }

export function updateWeightedConfig( txb: TransactionBlock, args: UpdateWeightedConfigArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::update_weighted_config`, arguments: [ obj(txb, args.weightedConfig), pure(txb, args.newWeights, `vector<u64>`), pure(txb, args.newExitFee, `u64`) ], }) }
