"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.epochDurationMs = epochDurationMs;
exports.adminFeeTrainerKraft = adminFeeTrainerKraft;
exports.ammFeePrecision = ammFeePrecision;
exports.curvedBeesFeePct = curvedBeesFeePct;
exports.curvedTotalFeeBps = curvedTotalFeeBps;
exports.honeyBurnPct = honeyBurnPct;
exports.initHoneyBuybackPct = initHoneyBuybackPct;
exports.initTreasuryPercent = initTreasuryPercent;
exports.initVoterIncentivesPct = initVoterIncentivesPct;
exports.lsdExchangeRatePrecision = lsdExchangeRatePrecision;
exports.maxHiveFee = maxHiveFee;
exports.maxHoneyBuybackPct = maxHoneyBuybackPct;
exports.maxQueenEggsLimit = maxQueenEggsLimit;
exports.maxSwapFee = maxSwapFee;
exports.maxTrainerNameLength = maxTrainerNameLength;
exports.maxTreasuryFee = maxTreasuryFee;
exports.maxWeightedExitFee = maxWeightedExitFee;
exports.minHiveFee = minHiveFee;
exports.minHoneyBuybackPct = minHoneyBuybackPct;
exports.minSwapFee = minSwapFee;
exports.minTreasuryFee = minTreasuryFee;
exports.percentPrecision = percentPrecision;
exports.precisionConstant = precisionConstant;
exports.stableBeesFeePct = stableBeesFeePct;
exports.stableTotalFeeBps = stableTotalFeeBps;
exports.totalHiveSupply = totalHiveSupply;
exports.totalHoneySupply = totalHoneySupply;
exports.twapInitTolerance = twapInitTolerance;
exports.twapInitWindowSize = twapInitWindowSize;
exports.twapMaxTolerance = twapMaxTolerance;
exports.twapMaxWindowSize = twapMaxWindowSize;
exports.twapPrecision = twapPrecision;
exports.weightedBeesFeePct = weightedBeesFeePct;
exports.weightedTotalFeeBps = weightedTotalFeeBps;
const __1 = require("..");
const PUBLISHED_AT = __1.yieldflow.PUBLISHED_AT;
function epochDurationMs(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::epoch_duration_ms`, arguments: [], }); }
function adminFeeTrainerKraft(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::admin_fee_trainer_kraft`, arguments: [], }); }
function ammFeePrecision(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::amm_fee_precision`, arguments: [], }); }
function curvedBeesFeePct(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::curved_bees_fee_pct`, arguments: [], }); }
function curvedTotalFeeBps(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::curved_total_fee_bps`, arguments: [], }); }
function honeyBurnPct(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::honey_burn_pct`, arguments: [], }); }
function initHoneyBuybackPct(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::init_honey_buyback_pct`, arguments: [], }); }
function initTreasuryPercent(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::init_treasury_percent`, arguments: [], }); }
function initVoterIncentivesPct(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::init_voter_incentives_pct`, arguments: [], }); }
function lsdExchangeRatePrecision(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::lsd_exchange_rate_precision`, arguments: [], }); }
function maxHiveFee(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_hive_fee`, arguments: [], }); }
function maxHoneyBuybackPct(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_honey_buyback_pct`, arguments: [], }); }
function maxQueenEggsLimit(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_queen_eggs_limit`, arguments: [], }); }
function maxSwapFee(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_swap_fee`, arguments: [], }); }
function maxTrainerNameLength(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_trainer_name_length`, arguments: [], }); }
function maxTreasuryFee(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_treasury_fee`, arguments: [], }); }
function maxWeightedExitFee(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_weighted_exit_fee`, arguments: [], }); }
function minHiveFee(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_hive_fee`, arguments: [], }); }
function minHoneyBuybackPct(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_honey_buyback_pct`, arguments: [], }); }
function minSwapFee(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_swap_fee`, arguments: [], }); }
function minTreasuryFee(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_treasury_fee`, arguments: [], }); }
function percentPrecision(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::percent_precision`, arguments: [], }); }
function precisionConstant(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::precision_constant`, arguments: [], }); }
function stableBeesFeePct(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::stable_bees_fee_pct`, arguments: [], }); }
function stableTotalFeeBps(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::stable_total_fee_bps`, arguments: [], }); }
function totalHiveSupply(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::total_hive_supply`, arguments: [], }); }
function totalHoneySupply(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::total_honey_supply`, arguments: [], }); }
function twapInitTolerance(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::twap_init_tolerance`, arguments: [], }); }
function twapInitWindowSize(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::twap_init_window_size`, arguments: [], }); }
function twapMaxTolerance(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::twap_max_tolerance`, arguments: [], }); }
function twapMaxWindowSize(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::twap_max_window_size`, arguments: [], }); }
function twapPrecision(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::twap_precision`, arguments: [], }); }
function weightedBeesFeePct(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::weighted_bees_fee_pct`, arguments: [], }); }
function weightedTotalFeeBps(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::weighted_total_fee_bps`, arguments: [], }); }
