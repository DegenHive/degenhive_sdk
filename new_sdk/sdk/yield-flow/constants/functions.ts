import {PUBLISHED_AT} from "..";
import {Transaction} from "@mysten/sui/transactions";

export function epochDurationMs( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::epoch_duration_ms`, arguments: [ ], }) }

export function adminFeeTrainerKraft( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::admin_fee_trainer_kraft`, arguments: [ ], }) }

export function ammFeePrecision( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::amm_fee_precision`, arguments: [ ], }) }

export function curvedBeesFeePct( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::curved_bees_fee_pct`, arguments: [ ], }) }

export function curvedTotalFeeBps( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::curved_total_fee_bps`, arguments: [ ], }) }

export function honeyBurnPct( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::honey_burn_pct`, arguments: [ ], }) }

export function initHoneyBuybackPct( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::init_honey_buyback_pct`, arguments: [ ], }) }

export function initTreasuryPercent( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::init_treasury_percent`, arguments: [ ], }) }

export function initVoterIncentivesPct( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::init_voter_incentives_pct`, arguments: [ ], }) }

export function lsdExchangeRatePrecision( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::lsd_exchange_rate_precision`, arguments: [ ], }) }

export function lsdInitDelayEpoches( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::lsd_init_delay_epoches`, arguments: [ ], }) }

export function lsdInitProtocolFeePercent( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::lsd_init_protocol_fee_percent`, arguments: [ ], }) }

export function lsdInitServiceFeePercent( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::lsd_init_service_fee_percent`, arguments: [ ], }) }

export function lsdInitTreasuryFeePercent( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::lsd_init_treasury_fee_percent`, arguments: [ ], }) }

export function lsdMaxProtocolFeePercent( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::lsd_max_protocol_fee_percent`, arguments: [ ], }) }

export function lsdMaxServiceFeePercent( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::lsd_max_service_fee_percent`, arguments: [ ], }) }

export function lsdMaxTreasuryFeePercent( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::lsd_max_treasury_fee_percent`, arguments: [ ], }) }

export function maxHiveFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_hive_fee`, arguments: [ ], }) }

export function maxHoneyBuybackPct( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_honey_buyback_pct`, arguments: [ ], }) }

export function maxQueenEggsLimit( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_queen_eggs_limit`, arguments: [ ], }) }

export function maxSwapFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_swap_fee`, arguments: [ ], }) }

export function maxTrainerNameLength( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_trainer_name_length`, arguments: [ ], }) }

export function maxTreasuryFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_treasury_fee`, arguments: [ ], }) }

export function maxWeightedExitFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_weighted_exit_fee`, arguments: [ ], }) }

export function maxWhitelistedValidatorsAllowed( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_whitelisted_validators_allowed`, arguments: [ ], }) }

export function minHiveFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_hive_fee`, arguments: [ ], }) }

export function minHoneyBuybackPct( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_honey_buyback_pct`, arguments: [ ], }) }

export function minSwapFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_swap_fee`, arguments: [ ], }) }

export function minTreasuryFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_treasury_fee`, arguments: [ ], }) }

export function percentPrecision( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::percent_precision`, arguments: [ ], }) }

export function precisionConstant( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::precision_constant`, arguments: [ ], }) }

export function stableBeesFeePct( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::stable_bees_fee_pct`, arguments: [ ], }) }

export function stableTotalFeeBps( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::stable_total_fee_bps`, arguments: [ ], }) }

export function totalHiveSupply( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::total_hive_supply`, arguments: [ ], }) }

export function totalHoneySupply( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::total_honey_supply`, arguments: [ ], }) }

export function twapInitTolerance( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::twap_init_tolerance`, arguments: [ ], }) }

export function twapInitWindowSize( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::twap_init_window_size`, arguments: [ ], }) }

export function twapMaxTolerance( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::twap_max_tolerance`, arguments: [ ], }) }

export function twapMaxWindowSize( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::twap_max_window_size`, arguments: [ ], }) }

export function twapPrecision( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::twap_precision`, arguments: [ ], }) }

export function weightedBeesFeePct( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::weighted_bees_fee_pct`, arguments: [ ], }) }

export function weightedTotalFeeBps( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::weighted_total_fee_bps`, arguments: [ ], }) }
