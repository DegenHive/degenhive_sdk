"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLiquidityComputation = addLiquidityComputation;
exports.calculateFeeCharged = calculateFeeCharged;
exports.computeAskAmount = computeAskAmount;
exports.computeOfferAmount = computeOfferAmount;
exports.calcY = calcY;
exports.computeCurrentAmp = computeCurrentAmp;
exports.computeD = computeD;
exports.getCurAAndScalingFactors = getCurAAndScalingFactors;
exports.getStableConfigParams = getStableConfigParams;
exports.imbalancedLiquidityWithdraw = imbalancedLiquidityWithdraw;
exports.initializeStableConfig = initializeStableConfig;
exports.updateStableConfig = updateStableConfig;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function addLiquidityComputation(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::add_liquidity_computation`, arguments: [(0, util_1.pure)(txb, args.amp, `u64`), (0, util_1.pure)(txb, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(txb, args.providedTokens, `vector<u256>`), (0, util_1.pure)(txb, args.totalFeeBps, `u64`), (0, util_1.pure)(txb, args.lpSupply, `u256`)], }); }
function calculateFeeCharged(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::calculate_fee_charged`, arguments: [(0, util_1.pure)(txb, args.initReserveSize, `u256`), (0, util_1.pure)(txb, args.updatedReserveSize, `u256`), (0, util_1.pure)(txb, args.initD, `u256`), (0, util_1.pure)(txb, args.updatedD, `u256`), (0, util_1.pure)(txb, args.fee, `u64`)], }); }
function computeAskAmount(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::compute_ask_amount`, arguments: [(0, util_1.pure)(txb, args.amp, `u64`), (0, util_1.pure)(txb, args.offerAssetIndex, `u64`), (0, util_1.pure)(txb, args.offerAmount, `u256`), (0, util_1.pure)(txb, args.askAssetIndex, `u64`), (0, util_1.pure)(txb, args.pools, `vector<u256>`)], }); }
function computeOfferAmount(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::compute_offer_amount`, arguments: [(0, util_1.pure)(txb, args.amp, `u64`), (0, util_1.pure)(txb, args.askAmount, `u256`), (0, util_1.pure)(txb, args.askAssetIndex, `u64`), (0, util_1.pure)(txb, args.offerAssetIndex, `u64`), (0, util_1.pure)(txb, args.pools, `vector<u256>`), (0, util_1.pure)(txb, args.commissionRate, `u64`)], }); }
function calcY(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::calc_y`, arguments: [(0, util_1.pure)(txb, args.fromAssetIndex, `u64`), (0, util_1.pure)(txb, args.toAssetIndex, `u64`), (0, util_1.pure)(txb, args.newOfferPoolBalanceBalance, `u256`), (0, util_1.pure)(txb, args.pools, `vector<u256>`), (0, util_1.pure)(txb, args.amp, `u64`)], }); }
function computeCurrentAmp(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::compute_current_amp`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.pure)(txb, args.initAmp, `u64`), (0, util_1.pure)(txb, args.initAmpTime, `u64`), (0, util_1.pure)(txb, args.nextAmp, `u64`), (0, util_1.pure)(txb, args.nextAmpTime, `u64`)], }); }
function computeD(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::compute_d`, arguments: [(0, util_1.pure)(txb, args.amp, `u64`), (0, util_1.pure)(txb, args.u256Pools, `vector<u256>`)], }); }
function getCurAAndScalingFactors(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::get_cur_A_and_scaling_factors`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.stableConfig)], }); }
function getStableConfigParams(txb, stableConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::get_stable_config_params`, arguments: [(0, util_1.obj)(txb, stableConfig)], }); }
function imbalancedLiquidityWithdraw(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::imbalanced_liquidity_withdraw`, arguments: [(0, util_1.pure)(txb, args.amp, `u64`), (0, util_1.pure)(txb, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(txb, args.lpCoinSupply, `u256`), (0, util_1.pure)(txb, args.coinsToRefund, `vector<u256>`), (0, util_1.pure)(txb, args.totalFeeBps, `u64`)], }); }
function initializeStableConfig(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::initialize_stable_config`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.pure)(txb, args.initParams, `vector<u64>`), (0, util_1.pure)(txb, args.scalingFactor, `vector<u256>`)], }); }
function updateStableConfig(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::stable_math::update_stable_config`, arguments: [(0, util_1.obj)(txb, args.stableConfig), (0, util_1.pure)(txb, args.initAmpTime, `u64`), (0, util_1.pure)(txb, args.nextAmp, `u64`), (0, util_1.pure)(txb, args.nextAmpTime, `u64`)], }); }
