"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLiquidityComputation = addLiquidityComputation;
exports.assertNewConfigParams = assertNewConfigParams;
exports.calcGeometricMean = calcGeometricMean;
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
exports.updateInitialPrices = updateInitialPrices;
const __1 = require("..");
const PUBLISHED_AT = __1.poolmaths.PUBLISHED_AT;
const util_1 = require("../../_framework/util");
function addLiquidityComputation(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::add_liquidity_computation`, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.obj)(tx, args.poolConfig), (0, util_1.pure)(tx, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(tx, args.providedTokens, `vector<u256>`), (0, util_1.pure)(tx, args.lpSupply, `u256`)], }); }
function assertNewConfigParams(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::assert_new_config_params`, arguments: [(0, util_1.pure)(tx, args.newMidFee, `u64`), (0, util_1.pure)(tx, args.newOutFee, `u64`), (0, util_1.pure)(tx, args.newFeeGamma, `u64`), (0, util_1.pure)(tx, args.newMaHalfTime, `u64`), (0, util_1.pure)(tx, args.newAllowedExtraProfit, `u64`), (0, util_1.pure)(tx, args.newAdjustmentStep, `u64`)], }); }
function calcGeometricMean(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::calc_geometric_mean`, arguments: [(0, util_1.pure)(tx, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(tx, args.sort, `bool`)], }); }
function calculateFeeCharged(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::calculate_fee_charged`, arguments: [(0, util_1.pure)(tx, args.initXp, `u256`), (0, util_1.pure)(tx, args.updatedXp, `u256`), (0, util_1.pure)(tx, args.initD, `u256`), (0, util_1.pure)(tx, args.updatedD, `u256`), (0, util_1.pure)(tx, args.priceScale, `u256`), (0, util_1.pure)(tx, args.fee, `u256`)], }); }
function fee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::fee`, arguments: [(0, util_1.pure)(tx, args.xp, `vector<u256>`), (0, util_1.pure)(tx, args.midFee, `u64`), (0, util_1.pure)(tx, args.outFee, `u64`), (0, util_1.pure)(tx, args.feeGamma, `u256`)], }); }
function computeAskAmount(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::compute_ask_amount`, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.obj)(tx, args.poolConfig), (0, util_1.pure)(tx, args.offeredAssetIndex, `u64`), (0, util_1.pure)(tx, args.askAssetIndex, `u64`), (0, util_1.pure)(tx, args.providedAmount, `u256`), (0, util_1.pure)(tx, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(tx, args.lpSupply, `u256`)], }); }
function computeOfferAmount(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::compute_offer_amount`, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.obj)(tx, args.poolConfig), (0, util_1.pure)(tx, args.offeredAssetIndex, `u64`), (0, util_1.pure)(tx, args.askAssetIndex, `u64`), (0, util_1.pure)(tx, args.askAmount, `u256`), (0, util_1.pure)(tx, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(tx, args.lpSupply, `u256`)], }); }
function emaRecorder(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::ema_recorder`, arguments: [(0, util_1.obj)(tx, args.poolConfig), (0, util_1.pure)(tx, args.tPrev, `u256`), (0, util_1.pure)(tx, args.curTimestamp, `u256`), (0, util_1.pure)(tx, args.lastPrices, `vector<u256>`), (0, util_1.pure)(tx, args.nCoins, `u64`)], }); }
function xp(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::xp`, arguments: [(0, util_1.pure)(tx, args.x, `vector<u256>`), (0, util_1.pure)(tx, args.p, `vector<u256>`)], }); }
function getCurAGamma(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_cur_A_gamma`, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.obj)(tx, args.curvedConfig)], }); }
function getCurvedConfigAmpGammaParams(tx, curvedConfig) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_amp_gamma_params`, arguments: [(0, util_1.obj)(tx, curvedConfig)], }); }
function getCurvedConfigFeeParams(tx, curvedConfig) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_fee_params`, arguments: [(0, util_1.obj)(tx, curvedConfig)], }); }
function getCurvedConfigPricesInfo(tx, curvedConfig) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_prices_info`, arguments: [(0, util_1.obj)(tx, curvedConfig)], }); }
function getCurvedConfigScalingFactor(tx, curvedConfig) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_scaling_factor`, arguments: [(0, util_1.obj)(tx, curvedConfig)], }); }
function getCurvedConfigXcpParams(tx, curvedConfig) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_xcp_params`, arguments: [(0, util_1.obj)(tx, curvedConfig)], }); }
function getDx(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_dx`, arguments: [(0, util_1.pure)(tx, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(tx, args.priceVec, `vector<u256>`), (0, util_1.pure)(tx, args.amp, `u64`), (0, util_1.pure)(tx, args.gamma, `u256`), (0, util_1.pure)(tx, args.midFee, `u64`), (0, util_1.pure)(tx, args.outFee, `u64`), (0, util_1.pure)(tx, args.feeGamma, `u256`), (0, util_1.pure)(tx, args.d0, `u256`), (0, util_1.pure)(tx, args.offeredAssetIndex, `u64`), (0, util_1.pure)(tx, args.askAssetIndex, `u64`), (0, util_1.pure)(tx, args.askAmount, `u256`)], }); }
function getDy(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_dy`, arguments: [(0, util_1.pure)(tx, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(tx, args.priceVec, `vector<u256>`), (0, util_1.pure)(tx, args.amp, `u64`), (0, util_1.pure)(tx, args.gamma, `u256`), (0, util_1.pure)(tx, args.midFee, `u64`), (0, util_1.pure)(tx, args.outFee, `u64`), (0, util_1.pure)(tx, args.feeGamma, `u256`), (0, util_1.pure)(tx, args.d0, `u256`), (0, util_1.pure)(tx, args.xValue, `u256`), (0, util_1.pure)(tx, args.i, `u64`), (0, util_1.pure)(tx, args.j, `u64`)], }); }
function getMaxAmp(tx, nCoins) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_max_amp`, arguments: [(0, util_1.pure)(tx, nCoins, `u64`)], }); }
function getMinAmp(tx, nCoins) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_min_amp`, arguments: [(0, util_1.pure)(tx, nCoins, `u64`)], }); }
function getXcp(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_xcp`, arguments: [(0, util_1.pure)(tx, args.d, `u256`), (0, util_1.pure)(tx, args.priceScale, `vector<u256>`), (0, util_1.pure)(tx, args.nCoins, `u256`)], }); }
function halfpow(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::halfpow`, arguments: [(0, util_1.pure)(tx, args.expNumerator, `u256`), (0, util_1.pure)(tx, args.expDenominator, `u256`), (0, util_1.pure)(tx, args.precision, `u256`)], }); }
function initializeCurvedConfig(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::initialize_curved_config`, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `vector<u256>`), (0, util_1.pure)(tx, args.scalingFactor, `vector<u256>`), (0, util_1.pure)(tx, args.nCoins, `u128`)], }); }
function newtonD(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::newton_D`, arguments: [(0, util_1.pure)(tx, args.ann, `u64`), (0, util_1.pure)(tx, args.gamma, `u256`), (0, util_1.pure)(tx, args.xSorted, `vector<u256>`), (0, util_1.pure)(tx, args.dValue, `u256`)], }); }
function newtonY(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::newton_y`, arguments: [(0, util_1.pure)(tx, args.ann, `u256`), (0, util_1.pure)(tx, args.gamma, `u256`), (0, util_1.pure)(tx, args.xpUnsorted, `vector<u256>`), (0, util_1.pure)(tx, args.d, `u256`), (0, util_1.pure)(tx, args.i, `u64`)], }); }
function queryAskAmount(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::query_ask_amount`, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.obj)(tx, args.poolConfig), (0, util_1.pure)(tx, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(tx, args.offerAmount, `u256`), (0, util_1.pure)(tx, args.offerAssetIndex, `u64`), (0, util_1.pure)(tx, args.askAssetIndex, `u64`)], }); }
function queryOfferAmount(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::query_offer_amount`, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.obj)(tx, args.poolConfig), (0, util_1.pure)(tx, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(tx, args.askAmount, `u256`), (0, util_1.pure)(tx, args.offerAssetIndex, `u64`), (0, util_1.pure)(tx, args.askAssetIndex, `u64`)], }); }
function reduceD(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::reduce_d`, arguments: [(0, util_1.obj)(tx, args.poolConfig), (0, util_1.pure)(tx, args.burnAmount, `u256`), (0, util_1.pure)(tx, args.totalSupply, `u256`)], }); }
function reductionCoefficient(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::reduction_coefficient`, arguments: [(0, util_1.pure)(tx, args.xpUnsorted, `vector<u256>`), (0, util_1.pure)(tx, args.feeGamma, `u256`)], }); }
function solveD(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::solve_D`, arguments: [(0, util_1.pure)(tx, args.ann, `u64`), (0, util_1.pure)(tx, args.gamma, `u256`), (0, util_1.pure)(tx, args.xpUnsorted, `vector<u256>`)], }); }
function tweakPrice(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::tweak_price`, arguments: [(0, util_1.obj)(tx, args.poolConfig), (0, util_1.pure)(tx, args.amp, `u64`), (0, util_1.pure)(tx, args.gamma, `u256`), (0, util_1.pure)(tx, args.xp, `vector<u256>`), (0, util_1.pure)(tx, args.i, `u64`), (0, util_1.pure)(tx, args.pI, `u256`), (0, util_1.pure)(tx, args.newD, `u256`), (0, util_1.pure)(tx, args.totalSupply, `u256`), (0, util_1.pure)(tx, args.tPrev, `u64`), (0, util_1.pure)(tx, args.curTimestamp, `u64`), (0, util_1.pure)(tx, args.lastPrices, `vector<u256>`)], }); }
function updateAAndGamma(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::update_A_and_gamma`, arguments: [(0, util_1.obj)(tx, args.curvedConfig), (0, util_1.pure)(tx, args.initAGammaTime, `u64`), (0, util_1.pure)(tx, args.nextAmp, `u64`), (0, util_1.pure)(tx, args.nextGamma, `u256`), (0, util_1.pure)(tx, args.futureAGammaTime, `u64`)], }); }
function updateConfigFeeParams(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::update_config_fee_params`, arguments: [(0, util_1.obj)(tx, args.curvedConfig), (0, util_1.pure)(tx, args.newMidFee, `u64`), (0, util_1.pure)(tx, args.newOutFee, `u64`), (0, util_1.pure)(tx, args.newFeeGamma, `u64`), (0, util_1.pure)(tx, args.newMaHalfTime, `u64`), (0, util_1.pure)(tx, args.newAllowedExtraProfit, `u64`), (0, util_1.pure)(tx, args.newAdjustmentStep, `u64`)], }); }
function updateInitialPrices(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::update_initial_prices`, arguments: [(0, util_1.obj)(tx, args.curvedConfig), (0, util_1.pure)(tx, args.initialPrices, `vector<u256>`)], }); }
