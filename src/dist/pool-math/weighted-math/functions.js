"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePow = calculatePow;
exports.powApprox = powApprox;
exports.subSign = subSign;
exports.addLiquidityComputation = addLiquidityComputation;
exports.computeAskAmount = computeAskAmount;
exports.computeOfferAmount = computeOfferAmount;
exports.calcMintedSharesGivenSingleAssetIn = calcMintedSharesGivenSingleAssetIn;
exports.calcSharesGivenSingleAssetOut = calcSharesGivenSingleAssetOut;
exports.computescalingfactor = computescalingfactor;
exports.feeRatio = feeRatio;
exports.getExitFee = getExitFee;
exports.getScalingFactorVec = getScalingFactorVec;
exports.getWeightAndSfAtIndex = getWeightAndSfAtIndex;
exports.getWeightAtIndex = getWeightAtIndex;
exports.getWeightedConfigParams = getWeightedConfigParams;
exports.imbalancedLiquidityWithdraw = imbalancedLiquidityWithdraw;
exports.initializeWeightedConfig = initializeWeightedConfig;
exports.maximalExactRatioJoin = maximalExactRatioJoin;
exports.solveForInvariant = solveForInvariant;
exports.updateWeightedConfig = updateWeightedConfig;
const __1 = require("..");
const PUBLISHED_AT = __1.poolmaths.PUBLISHED_AT;
const util_1 = require("../../_framework/util");
function calculatePow(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::calculate_pow`, arguments: [(0, util_1.pure)(tx, args.baseNumerator, `u256`), (0, util_1.pure)(tx, args.baseDenominator, `u256`), (0, util_1.pure)(tx, args.expNumerator, `u256`), (0, util_1.pure)(tx, args.expDenominator, `u256`)], }); }
function powApprox(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::pow_approx`, arguments: [(0, util_1.pure)(tx, args.base, `u256`), (0, util_1.pure)(tx, args.exp, `u128`), (0, util_1.pure)(tx, args.precision, `u64`)], }); }
function subSign(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::sub_sign`, arguments: [(0, util_1.pure)(tx, args.a, `u256`), (0, util_1.pure)(tx, args.b, `u256`)], }); }
function addLiquidityComputation(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::add_liquidity_computation`, arguments: [(0, util_1.obj)(tx, args.weightedConfig), (0, util_1.pure)(tx, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(tx, args.providedTokens, `vector<u256>`), (0, util_1.pure)(tx, args.totalFeeBps, `u64`), (0, util_1.pure)(tx, args.lpSupply, `u256`)], }); }
function computeAskAmount(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::compute_ask_amount`, arguments: [(0, util_1.pure)(tx, args.offerAmount, `u256`), (0, util_1.pure)(tx, args.offerPoolAmount, `u256`), (0, util_1.pure)(tx, args.offerWeight, `u256`), (0, util_1.pure)(tx, args.askPoolAmount, `u256`), (0, util_1.pure)(tx, args.askWeight, `u256`)], }); }
function computeOfferAmount(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::compute_offer_amount`, arguments: [(0, util_1.pure)(tx, args.askAmount, `u256`), (0, util_1.pure)(tx, args.askPoolAmount, `u256`), (0, util_1.pure)(tx, args.askWeight, `u256`), (0, util_1.pure)(tx, args.offerPoolAmount, `u256`), (0, util_1.pure)(tx, args.offerWeight, `u256`), (0, util_1.pure)(tx, args.commissionRate, `u64`)], }); }
function calcMintedSharesGivenSingleAssetIn(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::calc_minted_shares_given_single_asset_in`, arguments: [(0, util_1.pure)(tx, args.tokenAmountIn, `u256`), (0, util_1.pure)(tx, args.tokenWeightNormalized, `u256`), (0, util_1.pure)(tx, args.tokenPoolBalance, `u256`), (0, util_1.pure)(tx, args.currentLpSupply, `u256`), (0, util_1.pure)(tx, args.swapFee, `u64`)], }); }
function calcSharesGivenSingleAssetOut(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::calc_shares_given_single_asset_out`, arguments: [(0, util_1.pure)(tx, args.tokenWeightNormalized, `u256`), (0, util_1.pure)(tx, args.tokenPoolBalance, `u256`), (0, util_1.pure)(tx, args.currentLpSupply, `u256`), (0, util_1.pure)(tx, args.tokenAmountOut, `u256`), (0, util_1.pure)(tx, args.swapFee, `u64`)], }); }
function computescalingfactor(tx, tokenDecimals) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::computeScalingFactor`, arguments: [(0, util_1.pure)(tx, tokenDecimals, `u8`)], }); }
function feeRatio(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::fee_ratio`, arguments: [(0, util_1.pure)(tx, args.normalizedWeight, `u256`), (0, util_1.pure)(tx, args.swapFee, `u256`)], }); }
function getExitFee(tx, weightedConfig) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_exit_fee`, arguments: [(0, util_1.obj)(tx, weightedConfig)], }); }
function getScalingFactorVec(tx, weightedConfig) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_scaling_factor_vec`, arguments: [(0, util_1.obj)(tx, weightedConfig)], }); }
function getWeightAndSfAtIndex(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weight_and_sf_at_index`, arguments: [(0, util_1.obj)(tx, args.weightedConfig), (0, util_1.pure)(tx, args.index, `u64`), (0, util_1.pure)(tx, args.returnNormalized, `bool`)], }); }
function getWeightAtIndex(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weight_at_index`, arguments: [(0, util_1.obj)(tx, args.weightedConfig), (0, util_1.pure)(tx, args.index, `u64`), (0, util_1.pure)(tx, args.returnNormalized, `bool`)], }); }
function getWeightedConfigParams(tx, weightedConfig) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weighted_config_params`, arguments: [(0, util_1.obj)(tx, weightedConfig)], }); }
function imbalancedLiquidityWithdraw(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::imbalanced_liquidity_withdraw`, arguments: [(0, util_1.obj)(tx, args.weightedConfig), (0, util_1.pure)(tx, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(tx, args.lpCoinSupply, `u256`), (0, util_1.pure)(tx, args.assetsToRefund, `vector<u256>`), (0, util_1.pure)(tx, args.totalFeeBps, `u64`)], }); }
function initializeWeightedConfig(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::initialize_weighted_config`, arguments: [(0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.weights, `vector<u64>`), (0, util_1.pure)(tx, args.scalingFactor, `vector<u256>`), (0, util_1.pure)(tx, args.nCoins, `u64`)], }); }
function maximalExactRatioJoin(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::maximal_exact_ratio_join`, arguments: [(0, util_1.pure)(tx, args.assetsIn, `vector<u256>`), (0, util_1.pure)(tx, args.assetBalances, `vector<u256>`), (0, util_1.pure)(tx, args.totalLpSupply, `u256`)], }); }
function solveForInvariant(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::solve_for_invariant`, arguments: [(0, util_1.pure)(tx, args.tokenBalanceFixedBefore, `u256`), (0, util_1.pure)(tx, args.tokenBalanceFixedAfter, `u256`), (0, util_1.pure)(tx, args.tokenWeightFixed, `u256`), (0, util_1.pure)(tx, args.tokenBalanceUnknownBefore, `u256`), (0, util_1.pure)(tx, args.tokenWeightUnknown, `u256`)], }); }
function updateWeightedConfig(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::weighted_math::update_weighted_config`, arguments: [(0, util_1.obj)(tx, args.weightedConfig), (0, util_1.pure)(tx, args.newWeights, `vector<u64>`), (0, util_1.pure)(tx, args.newExitFee, `u64`)], }); }
