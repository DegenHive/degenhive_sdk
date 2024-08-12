"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLiquidityComputation = addLiquidityComputation;
exports.assertNewConfigParams = assertNewConfigParams;
exports.calcGeometricMean = calcGeometricMean;
exports.calcWithdrawOneCoin = calcWithdrawOneCoin;
exports.calculateFeeCharged = calculateFeeCharged;
exports.fee = fee;
exports.computeAskAmount = computeAskAmount;
exports.computeOfferAmount = computeOfferAmount;
exports.emaRecorder = emaRecorder;
exports.xp = xp;
exports.getCurAGamma = getCurAGamma;
exports.getCurvedConfigAmpGammaParams = getCurvedConfigAmpGammaParams;
exports.getCurvedConfigFeeParams = getCurvedConfigFeeParams;
exports.getCurvedConfigPricesInfo = getCurvedConfigPricesInfo;
exports.getCurvedConfigScalingFactor = getCurvedConfigScalingFactor;
exports.getCurvedConfigXcpParams = getCurvedConfigXcpParams;
exports.getDx = getDx;
exports.getDy = getDy;
exports.getMaxAmp = getMaxAmp;
exports.getMinAmp = getMinAmp;
exports.getXcp = getXcp;
exports.halfpow = halfpow;
exports.initializeCurvedConfig = initializeCurvedConfig;
exports.newtonD = newtonD;
exports.newtonY = newtonY;
exports.queryAskAmount = queryAskAmount;
exports.queryOfferAmount = queryOfferAmount;
exports.reduceD = reduceD;
exports.reductionCoefficient = reductionCoefficient;
exports.solveD = solveD;
exports.tweakPrice = tweakPrice;
exports.updateAAndGamma = updateAAndGamma;
exports.updateConfigFeeParams = updateConfigFeeParams;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function addLiquidityComputation(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::add_liquidity_computation`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.poolConfig), (0, util_1.pure)(txb, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(txb, args.providedTokens, `vector<u256>`), (0, util_1.pure)(txb, args.lpSupply, `u256`)], }); }
function assertNewConfigParams(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::assert_new_config_params`, arguments: [(0, util_1.pure)(txb, args.newMidFee, `u64`), (0, util_1.pure)(txb, args.newOutFee, `u64`), (0, util_1.pure)(txb, args.newFeeGamma, `u64`), (0, util_1.pure)(txb, args.newMaHalfTime, `u64`), (0, util_1.pure)(txb, args.newAllowedExtraProfit, `u64`), (0, util_1.pure)(txb, args.newAdjustmentStep, `u64`)], }); }
function calcGeometricMean(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::calc_geometric_mean`, arguments: [(0, util_1.pure)(txb, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(txb, args.sort, `bool`)], }); }
function calcWithdrawOneCoin(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::calc_withdraw_one_coin`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.poolConfig), (0, util_1.pure)(txb, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(txb, args.lpSupply, `u256`), (0, util_1.pure)(txb, args.withdrawTokenIndex, `u64`), (0, util_1.pure)(txb, args.burnAmount, `u256`), (0, util_1.pure)(txb, args.updateD, `bool`), (0, util_1.pure)(txb, args.calcPrice, `bool`)], }); }
function calculateFeeCharged(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::calculate_fee_charged`, arguments: [(0, util_1.pure)(txb, args.initXp, `u256`), (0, util_1.pure)(txb, args.updatedXp, `u256`), (0, util_1.pure)(txb, args.initD, `u256`), (0, util_1.pure)(txb, args.updatedD, `u256`), (0, util_1.pure)(txb, args.priceScale, `u256`), (0, util_1.pure)(txb, args.fee, `u256`)], }); }
function fee(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::fee`, arguments: [(0, util_1.pure)(txb, args.xp, `vector<u256>`), (0, util_1.pure)(txb, args.midFee, `u64`), (0, util_1.pure)(txb, args.outFee, `u64`), (0, util_1.pure)(txb, args.feeGamma, `u256`)], }); }
function computeAskAmount(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::compute_ask_amount`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.poolConfig), (0, util_1.pure)(txb, args.offeredAssetIndex, `u64`), (0, util_1.pure)(txb, args.askAssetIndex, `u64`), (0, util_1.pure)(txb, args.providedAmount, `u256`), (0, util_1.pure)(txb, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(txb, args.lpSupply, `u256`)], }); }
function computeOfferAmount(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::compute_offer_amount`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.poolConfig), (0, util_1.pure)(txb, args.offeredAssetIndex, `u64`), (0, util_1.pure)(txb, args.askAssetIndex, `u64`), (0, util_1.pure)(txb, args.askAmount, `u256`), (0, util_1.pure)(txb, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(txb, args.lpSupply, `u256`)], }); }
function emaRecorder(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::ema_recorder`, arguments: [(0, util_1.obj)(txb, args.poolConfig), (0, util_1.pure)(txb, args.tPrev, `u256`), (0, util_1.pure)(txb, args.curTimestamp, `u256`), (0, util_1.pure)(txb, args.lastPrices, `vector<u256>`), (0, util_1.pure)(txb, args.nCoins, `u64`)], }); }
function xp(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::xp`, arguments: [(0, util_1.pure)(txb, args.x, `vector<u256>`), (0, util_1.pure)(txb, args.p, `vector<u256>`)], }); }
function getCurAGamma(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_cur_A_gamma`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.curvedConfig)], }); }
function getCurvedConfigAmpGammaParams(txb, curvedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_curved_config_amp_gamma_params`, arguments: [(0, util_1.obj)(txb, curvedConfig)], }); }
function getCurvedConfigFeeParams(txb, curvedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_curved_config_fee_params`, arguments: [(0, util_1.obj)(txb, curvedConfig)], }); }
function getCurvedConfigPricesInfo(txb, curvedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_curved_config_prices_info`, arguments: [(0, util_1.obj)(txb, curvedConfig)], }); }
function getCurvedConfigScalingFactor(txb, curvedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_curved_config_scaling_factor`, arguments: [(0, util_1.obj)(txb, curvedConfig)], }); }
function getCurvedConfigXcpParams(txb, curvedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_curved_config_xcp_params`, arguments: [(0, util_1.obj)(txb, curvedConfig)], }); }
function getDx(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_dx`, arguments: [(0, util_1.pure)(txb, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(txb, args.priceVec, `vector<u256>`), (0, util_1.pure)(txb, args.amp, `u64`), (0, util_1.pure)(txb, args.gamma, `u256`), (0, util_1.pure)(txb, args.midFee, `u64`), (0, util_1.pure)(txb, args.outFee, `u64`), (0, util_1.pure)(txb, args.feeGamma, `u256`), (0, util_1.pure)(txb, args.d0, `u256`), (0, util_1.pure)(txb, args.offeredAssetIndex, `u64`), (0, util_1.pure)(txb, args.askAssetIndex, `u64`), (0, util_1.pure)(txb, args.askAmount, `u256`)], }); }
function getDy(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_dy`, arguments: [(0, util_1.pure)(txb, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(txb, args.priceVec, `vector<u256>`), (0, util_1.pure)(txb, args.amp, `u64`), (0, util_1.pure)(txb, args.gamma, `u256`), (0, util_1.pure)(txb, args.midFee, `u64`), (0, util_1.pure)(txb, args.outFee, `u64`), (0, util_1.pure)(txb, args.feeGamma, `u256`), (0, util_1.pure)(txb, args.d0, `u256`), (0, util_1.pure)(txb, args.xValue, `u256`), (0, util_1.pure)(txb, args.i, `u64`), (0, util_1.pure)(txb, args.j, `u64`)], }); }
function getMaxAmp(txb, nCoins) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_max_amp`, arguments: [(0, util_1.pure)(txb, nCoins, `u64`)], }); }
function getMinAmp(txb, nCoins) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_min_amp`, arguments: [(0, util_1.pure)(txb, nCoins, `u64`)], }); }
function getXcp(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::get_xcp`, arguments: [(0, util_1.pure)(txb, args.d, `u256`), (0, util_1.pure)(txb, args.priceScale, `vector<u256>`), (0, util_1.pure)(txb, args.nCoins, `u256`)], }); }
function halfpow(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::halfpow`, arguments: [(0, util_1.pure)(txb, args.expNumerator, `u256`), (0, util_1.pure)(txb, args.expDenominator, `u256`), (0, util_1.pure)(txb, args.precision, `u256`)], }); }
function initializeCurvedConfig(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::initialize_curved_config`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.pure)(txb, args.initParams, `vector<u64>`), (0, util_1.pure)(txb, args.initialPrices, `vector<u256>`), (0, util_1.pure)(txb, args.scalingFactor, `vector<u256>`), (0, util_1.pure)(txb, args.nCoins, `u128`)], }); }
function newtonD(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::newton_D`, arguments: [(0, util_1.pure)(txb, args.ann, `u64`), (0, util_1.pure)(txb, args.gamma, `u256`), (0, util_1.pure)(txb, args.xSorted, `vector<u256>`), (0, util_1.pure)(txb, args.dValue, `u256`)], }); }
function newtonY(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::newton_y`, arguments: [(0, util_1.pure)(txb, args.ann, `u256`), (0, util_1.pure)(txb, args.gamma, `u256`), (0, util_1.pure)(txb, args.xpUnsorted, `vector<u256>`), (0, util_1.pure)(txb, args.d, `u256`), (0, util_1.pure)(txb, args.i, `u64`)], }); }
function queryAskAmount(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::query_ask_amount`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.poolConfig), (0, util_1.pure)(txb, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(txb, args.offerAmount, `u256`), (0, util_1.pure)(txb, args.offerAssetIndex, `u64`), (0, util_1.pure)(txb, args.askAssetIndex, `u64`)], }); }
function queryOfferAmount(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::query_offer_amount`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.poolConfig), (0, util_1.pure)(txb, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(txb, args.askAmount, `u256`), (0, util_1.pure)(txb, args.offerAssetIndex, `u64`), (0, util_1.pure)(txb, args.askAssetIndex, `u64`)], }); }
function reduceD(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::reduce_d`, arguments: [(0, util_1.obj)(txb, args.poolConfig), (0, util_1.pure)(txb, args.burnAmount, `u256`), (0, util_1.pure)(txb, args.totalSupply, `u256`)], }); }
function reductionCoefficient(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::reduction_coefficient`, arguments: [(0, util_1.pure)(txb, args.xpUnsorted, `vector<u256>`), (0, util_1.pure)(txb, args.feeGamma, `u256`)], }); }
function solveD(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::solve_D`, arguments: [(0, util_1.pure)(txb, args.ann, `u64`), (0, util_1.pure)(txb, args.gamma, `u256`), (0, util_1.pure)(txb, args.xpUnsorted, `vector<u256>`)], }); }
function tweakPrice(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::tweak_price`, arguments: [(0, util_1.obj)(txb, args.poolConfig), (0, util_1.pure)(txb, args.amp, `u64`), (0, util_1.pure)(txb, args.gamma, `u256`), (0, util_1.pure)(txb, args.xp, `vector<u256>`), (0, util_1.pure)(txb, args.i, `u64`), (0, util_1.pure)(txb, args.pI, `u256`), (0, util_1.pure)(txb, args.newD, `u256`), (0, util_1.pure)(txb, args.totalSupply, `u256`), (0, util_1.pure)(txb, args.tPrev, `u64`), (0, util_1.pure)(txb, args.curTimestamp, `u64`), (0, util_1.pure)(txb, args.lastPrices, `vector<u256>`)], }); }
function updateAAndGamma(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::update_A_and_gamma`, arguments: [(0, util_1.obj)(txb, args.curvedConfig), (0, util_1.pure)(txb, args.initAGammaTime, `u64`), (0, util_1.pure)(txb, args.nextAmp, `u64`), (0, util_1.pure)(txb, args.nextGamma, `u256`), (0, util_1.pure)(txb, args.futureAGammaTime, `u64`)], }); }
function updateConfigFeeParams(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curved_math::update_config_fee_params`, arguments: [(0, util_1.obj)(txb, args.curvedConfig), (0, util_1.pure)(txb, args.newMidFee, `u64`), (0, util_1.pure)(txb, args.newOutFee, `u64`), (0, util_1.pure)(txb, args.newFeeGamma, `u64`), (0, util_1.pure)(txb, args.newMaHalfTime, `u64`), (0, util_1.pure)(txb, args.newAllowedExtraProfit, `u64`), (0, util_1.pure)(txb, args.newAdjustmentStep, `u64`)], }); }
