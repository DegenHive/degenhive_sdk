import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface AddLiquidityComputationArgs { weightedConfig: TransactionObjectInput; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; providedTokens: Array<bigint | TransactionArgument> | TransactionArgument; totalFeeBps: bigint | TransactionArgument; lpSupply: bigint | TransactionArgument }

export function addLiquidityComputation( tx: Transaction, args: AddLiquidityComputationArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::add_liquidity_computation`, arguments: [ obj(tx, args.weightedConfig), pure(tx, args.existingLiquidity, `vector<u256>`), pure(tx, args.providedTokens, `vector<u256>`), pure(tx, args.totalFeeBps, `u64`), pure(tx, args.lpSupply, `u256`) ], }) }

export interface CalcMintedSharesGivenSingleAssetInArgs { tokenAmountIn: bigint | TransactionArgument; tokenWeightNormalized: bigint | TransactionArgument; tokenPoolBalance: bigint | TransactionArgument; currentLpSupply: bigint | TransactionArgument; swapFee: bigint | TransactionArgument }

export function calcMintedSharesGivenSingleAssetIn( tx: Transaction, args: CalcMintedSharesGivenSingleAssetInArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::calc_minted_shares_given_single_asset_in`, arguments: [ pure(tx, args.tokenAmountIn, `u256`), pure(tx, args.tokenWeightNormalized, `u256`), pure(tx, args.tokenPoolBalance, `u256`), pure(tx, args.currentLpSupply, `u256`), pure(tx, args.swapFee, `u64`) ], }) }

export interface CalcSharesGivenSingleAssetOutArgs { tokenWeightNormalized: bigint | TransactionArgument; tokenPoolBalance: bigint | TransactionArgument; currentLpSupply: bigint | TransactionArgument; tokenAmountOut: bigint | TransactionArgument; swapFee: bigint | TransactionArgument }

export function calcSharesGivenSingleAssetOut( tx: Transaction, args: CalcSharesGivenSingleAssetOutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::calc_shares_given_single_asset_out`, arguments: [ pure(tx, args.tokenWeightNormalized, `u256`), pure(tx, args.tokenPoolBalance, `u256`), pure(tx, args.currentLpSupply, `u256`), pure(tx, args.tokenAmountOut, `u256`), pure(tx, args.swapFee, `u64`) ], }) }

export interface CalculatePowArgs { baseNumerator: bigint | TransactionArgument; baseDenominator: bigint | TransactionArgument; expNumerator: bigint | TransactionArgument; expDenominator: bigint | TransactionArgument }

export function calculatePow( tx: Transaction, args: CalculatePowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::calculate_pow`, arguments: [ pure(tx, args.baseNumerator, `u256`), pure(tx, args.baseDenominator, `u256`), pure(tx, args.expNumerator, `u256`), pure(tx, args.expDenominator, `u256`) ], }) }

export function computescalingfactor( tx: Transaction, tokenDecimals: number | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::computeScalingFactor`, arguments: [ pure(tx, tokenDecimals, `u8`) ], }) }

export interface ComputeAskAmountArgs { offerAmount: bigint | TransactionArgument; offerPoolAmount: bigint | TransactionArgument; offerWeight: bigint | TransactionArgument; askPoolAmount: bigint | TransactionArgument; askWeight: bigint | TransactionArgument }

export function computeAskAmount( tx: Transaction, args: ComputeAskAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::compute_ask_amount`, arguments: [ pure(tx, args.offerAmount, `u256`), pure(tx, args.offerPoolAmount, `u256`), pure(tx, args.offerWeight, `u256`), pure(tx, args.askPoolAmount, `u256`), pure(tx, args.askWeight, `u256`) ], }) }

export interface ComputeOfferAmountArgs { askAmount: bigint | TransactionArgument; askPoolAmount: bigint | TransactionArgument; askWeight: bigint | TransactionArgument; offerPoolAmount: bigint | TransactionArgument; offerWeight: bigint | TransactionArgument; commissionRate: bigint | TransactionArgument }

export function computeOfferAmount( tx: Transaction, args: ComputeOfferAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::compute_offer_amount`, arguments: [ pure(tx, args.askAmount, `u256`), pure(tx, args.askPoolAmount, `u256`), pure(tx, args.askWeight, `u256`), pure(tx, args.offerPoolAmount, `u256`), pure(tx, args.offerWeight, `u256`), pure(tx, args.commissionRate, `u64`) ], }) }

export interface FeeRatioArgs { normalizedWeight: bigint | TransactionArgument; swapFee: bigint | TransactionArgument }

export function feeRatio( tx: Transaction, args: FeeRatioArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::fee_ratio`, arguments: [ pure(tx, args.normalizedWeight, `u256`), pure(tx, args.swapFee, `u256`) ], }) }

export function getExitFee( tx: Transaction, weightedConfig: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_exit_fee`, arguments: [ obj(tx, weightedConfig) ], }) }

export function getScalingFactorVec( tx: Transaction, weightedConfig: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_scaling_factor_vec`, arguments: [ obj(tx, weightedConfig) ], }) }

export interface GetWeightAndSfAtIndexArgs { weightedConfig: TransactionObjectInput; index: bigint | TransactionArgument; returnNormalized: boolean | TransactionArgument }

export function getWeightAndSfAtIndex( tx: Transaction, args: GetWeightAndSfAtIndexArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weight_and_sf_at_index`, arguments: [ obj(tx, args.weightedConfig), pure(tx, args.index, `u64`), pure(tx, args.returnNormalized, `bool`) ], }) }

export interface GetWeightAtIndexArgs { weightedConfig: TransactionObjectInput; index: bigint | TransactionArgument; returnNormalized: boolean | TransactionArgument }

export function getWeightAtIndex( tx: Transaction, args: GetWeightAtIndexArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weight_at_index`, arguments: [ obj(tx, args.weightedConfig), pure(tx, args.index, `u64`), pure(tx, args.returnNormalized, `bool`) ], }) }

export function getWeightedConfigParams( tx: Transaction, weightedConfig: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weighted_config_params`, arguments: [ obj(tx, weightedConfig) ], }) }

export interface ImbalancedLiquidityWithdrawArgs { weightedConfig: TransactionObjectInput; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; lpCoinSupply: bigint | TransactionArgument; assetsToRefund: Array<bigint | TransactionArgument> | TransactionArgument; totalFeeBps: bigint | TransactionArgument }

export function imbalancedLiquidityWithdraw( tx: Transaction, args: ImbalancedLiquidityWithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::imbalanced_liquidity_withdraw`, arguments: [ obj(tx, args.weightedConfig), pure(tx, args.existingLiquidity, `vector<u256>`), pure(tx, args.lpCoinSupply, `u256`), pure(tx, args.assetsToRefund, `vector<u256>`), pure(tx, args.totalFeeBps, `u64`) ], }) }

export interface InitializeWeightedConfigArgs { initParams: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument; scalingFactor: Array<bigint | TransactionArgument> | TransactionArgument; nCoins: bigint | TransactionArgument }

export function initializeWeightedConfig( tx: Transaction, args: InitializeWeightedConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::initialize_weighted_config`, arguments: [ pure(tx, args.initParams, `vector<u64>`), pure(tx, args.weights, `vector<u64>`), pure(tx, args.scalingFactor, `vector<u256>`), pure(tx, args.nCoins, `u64`) ], }) }

export interface MaximalExactRatioJoinArgs { assetsIn: Array<bigint | TransactionArgument> | TransactionArgument; assetBalances: Array<bigint | TransactionArgument> | TransactionArgument; totalLpSupply: bigint | TransactionArgument }

export function maximalExactRatioJoin( tx: Transaction, args: MaximalExactRatioJoinArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::maximal_exact_ratio_join`, arguments: [ pure(tx, args.assetsIn, `vector<u256>`), pure(tx, args.assetBalances, `vector<u256>`), pure(tx, args.totalLpSupply, `u256`) ], }) }

export interface PowApproxArgs { base: bigint | TransactionArgument; exp: bigint | TransactionArgument; precision: bigint | TransactionArgument }

export function powApprox( tx: Transaction, args: PowApproxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::pow_approx`, arguments: [ pure(tx, args.base, `u256`), pure(tx, args.exp, `u128`), pure(tx, args.precision, `u64`) ], }) }

export interface SolveForInvariantArgs { tokenBalanceFixedBefore: bigint | TransactionArgument; tokenBalanceFixedAfter: bigint | TransactionArgument; tokenWeightFixed: bigint | TransactionArgument; tokenBalanceUnknownBefore: bigint | TransactionArgument; tokenWeightUnknown: bigint | TransactionArgument }

export function solveForInvariant( tx: Transaction, args: SolveForInvariantArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::solve_for_invariant`, arguments: [ pure(tx, args.tokenBalanceFixedBefore, `u256`), pure(tx, args.tokenBalanceFixedAfter, `u256`), pure(tx, args.tokenWeightFixed, `u256`), pure(tx, args.tokenBalanceUnknownBefore, `u256`), pure(tx, args.tokenWeightUnknown, `u256`) ], }) }

export interface SubSignArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function subSign( tx: Transaction, args: SubSignArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::sub_sign`, arguments: [ pure(tx, args.a, `u256`), pure(tx, args.b, `u256`) ], }) }

export interface UpdateWeightedConfigArgs { weightedConfig: TransactionObjectInput; newWeights: Array<bigint | TransactionArgument> | TransactionArgument; newExitFee: bigint | TransactionArgument }

export function updateWeightedConfig( tx: Transaction, args: UpdateWeightedConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::update_weighted_config`, arguments: [ obj(tx, args.weightedConfig), pure(tx, args.newWeights, `vector<u64>`), pure(tx, args.newExitFee, `u64`) ], }) }
