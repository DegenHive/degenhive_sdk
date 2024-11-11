"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLiquidityComputation = addLiquidityComputation;
exports.calculateFeeCharged = calculateFeeCharged;
exports.computeAskAmount = computeAskAmount;
exports.computeOfferAmount = computeOfferAmount;
exports.imbalancedLiquidityWithdraw = imbalancedLiquidityWithdraw;
exports.calcY = calcY;
exports.computeCurrentAmp = computeCurrentAmp;
exports.computeD = computeD;
exports.getCurAAndScalingFactors = getCurAAndScalingFactors;
exports.getStableConfigParams = getStableConfigParams;
exports.initializeStableConfig = initializeStableConfig;
exports.updateStableConfig = updateStableConfig;
const __1 = require("..");
const PUBLISHED_AT = __1.poolmaths.PUBLISHED_AT;
const util_1 = require("../../_framework/util");
function addLiquidityComputation(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::add_liquidity_computation`, arguments: [(0, util_1.pure)(tx, args.amp, `u64`), (0, util_1.pure)(tx, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(tx, args.providedTokens, `vector<u256>`), (0, util_1.pure)(tx, args.totalFeeBps, `u64`), (0, util_1.pure)(tx, args.lpSupply, `u256`)], }); }
function calculateFeeCharged(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::calculate_fee_charged`, arguments: [(0, util_1.pure)(tx, args.initReserveSize, `u256`), (0, util_1.pure)(tx, args.updatedReserveSize, `u256`), (0, util_1.pure)(tx, args.initD, `u256`), (0, util_1.pure)(tx, args.updatedD, `u256`), (0, util_1.pure)(tx, args.fee, `u64`)], }); }
function computeAskAmount(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_ask_amount`, arguments: [(0, util_1.pure)(tx, args.amp, `u64`), (0, util_1.pure)(tx, args.offerAssetIndex, `u64`), (0, util_1.pure)(tx, args.offerAmount, `u256`), (0, util_1.pure)(tx, args.askAssetIndex, `u64`), (0, util_1.pure)(tx, args.pools, `vector<u256>`)], }); }
function computeOfferAmount(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_offer_amount`, arguments: [(0, util_1.pure)(tx, args.amp, `u64`), (0, util_1.pure)(tx, args.askAmount, `u256`), (0, util_1.pure)(tx, args.askAssetIndex, `u64`), (0, util_1.pure)(tx, args.offerAssetIndex, `u64`), (0, util_1.pure)(tx, args.pools, `vector<u256>`), (0, util_1.pure)(tx, args.commissionRate, `u64`)], }); }
function imbalancedLiquidityWithdraw(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::imbalanced_liquidity_withdraw`, arguments: [(0, util_1.pure)(tx, args.amp, `u64`), (0, util_1.pure)(tx, args.existingLiquidity, `vector<u256>`), (0, util_1.pure)(tx, args.lpCoinSupply, `u256`), (0, util_1.pure)(tx, args.coinsToRefund, `vector<u256>`), (0, util_1.pure)(tx, args.totalFeeBps, `u64`)], }); }
function calcY(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::calc_y`, arguments: [(0, util_1.pure)(tx, args.fromAssetIndex, `u64`), (0, util_1.pure)(tx, args.toAssetIndex, `u64`), (0, util_1.pure)(tx, args.newOfferPoolBalance, `u256`), (0, util_1.pure)(tx, args.pools, `vector<u256>`), (0, util_1.pure)(tx, args.amp, `u64`)], }); }
function computeCurrentAmp(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_current_amp`, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.pure)(tx, args.initAmp, `u64`), (0, util_1.pure)(tx, args.initAmpTime, `u64`), (0, util_1.pure)(tx, args.nextAmp, `u64`), (0, util_1.pure)(tx, args.nextAmpTime, `u64`)], }); }
function computeD(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::compute_d`, arguments: [(0, util_1.pure)(tx, args.amp, `u64`), (0, util_1.pure)(tx, args.u256Pools, `vector<u256>`)], }); }
function getCurAAndScalingFactors(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::get_cur_A_and_scaling_factors`, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.obj)(tx, args.stableConfig)], }); }
function getStableConfigParams(tx, stableConfig) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::get_stable_config_params`, arguments: [(0, util_1.obj)(tx, stableConfig)], }); }
function initializeStableConfig(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::initialize_stable_config`, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.scalingFactor, `vector<u256>`)], }); }
function updateStableConfig(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::stable_math::update_stable_config`, arguments: [(0, util_1.obj)(tx, args.stableConfig), (0, util_1.pure)(tx, args.initAmpTime, `u64`), (0, util_1.pure)(tx, args.nextAmp, `u64`), (0, util_1.pure)(tx, args.nextAmpTime, `u64`)], }); }
