"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLiquidityComputation = addLiquidityComputation;
exports.computeAskAmount = computeAskAmount;
exports.computeOfferAmount = computeOfferAmount;
exports.imbalancedLiquidityWithdraw = imbalancedLiquidityWithdraw;
exports.calcMintedSharesGivenSingleAssetIn = calcMintedSharesGivenSingleAssetIn;
exports.calcSharesGivenSingleAssetOut = calcSharesGivenSingleAssetOut;
exports.calculatePow = calculatePow;
exports.computescalingfactor = computescalingfactor;
exports.feeRatio = feeRatio;
exports.getExitFee = getExitFee;
exports.getScalingFactorVec = getScalingFactorVec;
exports.getWeightAndSfAtIndex = getWeightAndSfAtIndex;
exports.getWeightAtIndex = getWeightAtIndex;
exports.getWeightedConfigParams = getWeightedConfigParams;
exports.initializeWeightedConfig = initializeWeightedConfig;
exports.maximalExactRatioJoin = maximalExactRatioJoin;
exports.powApprox = powApprox;
exports.solveForInvariant = solveForInvariant;
exports.subSign = subSign;
exports.updateWeightedConfig = updateWeightedConfig;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function addLiquidityComputation(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::add_liquidity_computation`, arguments: [(0, util_1.obj)(txb, args.weightedConfig), (0, util_1.pure)(txb, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(txb, args.providedTokens, `vector<u256>`), (0, util_1.pure)(txb, args.totalFeeBps, `u64`), (0, util_1.pure)(txb, args.lpSupply, `u256`)], }); }
function computeAskAmount(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::compute_ask_amount`, arguments: [(0, util_1.pure)(txb, args.offerAmount, `u256`), (0, util_1.pure)(txb, args.offerPoolAmount, `u256`), (0, util_1.pure)(txb, args.offerWeight, `u256`), (0, util_1.pure)(txb, args.askPoolAmount, `u256`), (0, util_1.pure)(txb, args.askWeight, `u256`)], }); }
function computeOfferAmount(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::compute_offer_amount`, arguments: [(0, util_1.pure)(txb, args.askAmount, `u256`), (0, util_1.pure)(txb, args.askPoolAmount, `u256`), (0, util_1.pure)(txb, args.askWeight, `u256`), (0, util_1.pure)(txb, args.offerPoolAmount, `u256`), (0, util_1.pure)(txb, args.offerWeight, `u256`), (0, util_1.pure)(txb, args.commissionRate, `u64`)], }); }
function imbalancedLiquidityWithdraw(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::imbalanced_liquidity_withdraw`, arguments: [(0, util_1.obj)(txb, args.weightedConfig), (0, util_1.pure)(txb, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(txb, args.lpCoinSupply, `u256`), (0, util_1.pure)(txb, args.assetsToRefund, `vector<u256>`), (0, util_1.pure)(txb, args.totalFeeBps, `u64`)], }); }
function calcMintedSharesGivenSingleAssetIn(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::calc_minted_shares_given_single_asset_in`, arguments: [(0, util_1.pure)(txb, args.tokenAmountIn, `u256`), (0, util_1.pure)(txb, args.tokenWeightNormalized, `u256`), (0, util_1.pure)(txb, args.tokenPoolBalance, `u256`), (0, util_1.pure)(txb, args.currentLpSupply, `u256`), (0, util_1.pure)(txb, args.swapFee, `u64`)], }); }
function calcSharesGivenSingleAssetOut(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::calc_shares_given_single_asset_out`, arguments: [(0, util_1.pure)(txb, args.tokenWeightNormalized, `u256`), (0, util_1.pure)(txb, args.tokenPoolBalance, `u256`), (0, util_1.pure)(txb, args.currentLpSupply, `u256`), (0, util_1.pure)(txb, args.tokenAmountOut, `u256`), (0, util_1.pure)(txb, args.swapFee, `u64`)], }); }
function calculatePow(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::calculate_pow`, arguments: [(0, util_1.pure)(txb, args.baseNumerator, `u256`), (0, util_1.pure)(txb, args.baseDenominator, `u256`), (0, util_1.pure)(txb, args.expNumerator, `u256`), (0, util_1.pure)(txb, args.expDenominator, `u256`)], }); }
function computescalingfactor(txb, tokenDecimals) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::computeScalingFactor`, arguments: [(0, util_1.pure)(txb, tokenDecimals, `u8`)], }); }
function feeRatio(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::fee_ratio`, arguments: [(0, util_1.pure)(txb, args.normalizedWeight, `u256`), (0, util_1.pure)(txb, args.swapFee, `u256`)], }); }
function getExitFee(txb, weightedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::get_exit_fee`, arguments: [(0, util_1.obj)(txb, weightedConfig)], }); }
function getScalingFactorVec(txb, weightedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::get_scaling_factor_vec`, arguments: [(0, util_1.obj)(txb, weightedConfig)], }); }
function getWeightAndSfAtIndex(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::get_weight_and_sf_at_index`, arguments: [(0, util_1.obj)(txb, args.weightedConfig), (0, util_1.pure)(txb, args.index, `u64`), (0, util_1.pure)(txb, args.returnNormalized, `bool`)], }); }
function getWeightAtIndex(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::get_weight_at_index`, arguments: [(0, util_1.obj)(txb, args.weightedConfig), (0, util_1.pure)(txb, args.index, `u64`), (0, util_1.pure)(txb, args.returnNormalized, `bool`)], }); }
function getWeightedConfigParams(txb, weightedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::get_weighted_config_params`, arguments: [(0, util_1.obj)(txb, weightedConfig)], }); }
function initializeWeightedConfig(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::initialize_weighted_config`, arguments: [(0, util_1.pure)(txb, args.initParams, `vector<u64>`), (0, util_1.pure)(txb, args.weights, `vector<u64>`), (0, util_1.pure)(txb, args.scalingFactor, `vector<u256>`), (0, util_1.pure)(txb, args.nCoins, `u64`)], }); }
function maximalExactRatioJoin(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::maximal_exact_ratio_join`, arguments: [(0, util_1.pure)(txb, args.assetsIn, `vector<u256>`), (0, util_1.pure)(txb, args.assetBalances, `vector<u256>`), (0, util_1.pure)(txb, args.totalLpSupply, `u256`)], }); }
function powApprox(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::pow_approx`, arguments: [(0, util_1.pure)(txb, args.base, `u256`), (0, util_1.pure)(txb, args.exp, `u128`), (0, util_1.pure)(txb, args.precision, `u64`)], }); }
function solveForInvariant(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::solve_for_invariant`, arguments: [(0, util_1.pure)(txb, args.tokenBalanceFixedBefore, `u256`), (0, util_1.pure)(txb, args.tokenBalanceFixedAfter, `u256`), (0, util_1.pure)(txb, args.tokenWeightFixed, `u256`), (0, util_1.pure)(txb, args.tokenBalanceUnknownBefore, `u256`), (0, util_1.pure)(txb, args.tokenWeightUnknown, `u256`)], }); }
function subSign(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::sub_sign`, arguments: [(0, util_1.pure)(txb, args.a, `u256`), (0, util_1.pure)(txb, args.b, `u256`)], }); }
function updateWeightedConfig(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::update_weighted_config`, arguments: [(0, util_1.obj)(txb, args.weightedConfig), (0, util_1.pure)(txb, args.newWeights, `vector<u64>`), (0, util_1.pure)(txb, args.newExitFee, `u64`)], }); }
