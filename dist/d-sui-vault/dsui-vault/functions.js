"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = isEmpty;
exports.getSuiAmount = getSuiAmount;
exports.init = init;
exports.adminEmergencyPauseUpdate = adminEmergencyPauseUpdate;
exports.claimCollectedLsdFee = claimCollectedLsdFee;
exports.claimUnstakeEpoch = claimUnstakeEpoch;
exports.claimUnstakedSui = claimUnstakedSui;
exports.destroyTicket = destroyTicket;
exports.destroyUnstakeEpoch = destroyUnstakeEpoch;
exports.destroyValidatorPool = destroyValidatorPool;
exports.emergencyPauseUpdate = emergencyPauseUpdate;
exports.extractFromActiveStake = extractFromActiveStake;
exports.extractInactiveStake = extractInactiveStake;
exports.getDsuiBySui = getDsuiBySui;
exports.getLatestExchangeRate = getLatestExchangeRate;
exports.getSuiByDsui = getSuiByDsui;
exports.getSuiClaimablePerDsui = getSuiClaimablePerDsui;
exports.getTotalSui = getTotalSui;
exports.initDsuiVault = initDsuiVault;
exports.joinFungibleStakedSuiToValidator = joinFungibleStakedSuiToValidator;
exports.migrate = migrate;
exports.processStakeSuiRequests = processStakeSuiRequests;
exports.processUnstakingRequests = processUnstakingRequests;
exports.queryAllSelectedValidatorMapping = queryAllSelectedValidatorMapping;
exports.queryDsuiVaultConfig = queryDsuiVaultConfig;
exports.queryRequestDelayedUnstake = queryRequestDelayedUnstake;
exports.queryRequestInstantUnstake = queryRequestInstantUnstake;
exports.querySelectedValidatorMapping = querySelectedValidatorMapping;
exports.queryStakeSuiRequest = queryStakeSuiRequest;
exports.queryUnstakeRequest = queryUnstakeRequest;
exports.queryUnstakeRequestClaimEpoch = queryUnstakeRequestClaimEpoch;
exports.queryUnstakeRequestForEpoch = queryUnstakeRequestForEpoch;
exports.queryUnstakeRequestForEpochs = queryUnstakeRequestForEpochs;
exports.queryValidatorPool = queryValidatorPool;
exports.queryValidatorPools = queryValidatorPools;
exports.queryVaultOverview = queryVaultOverview;
exports.queryWhitelistedValidators = queryWhitelistedValidators;
exports.refreshValidatorInfo = refreshValidatorInfo;
exports.refreshValidatorPools = refreshValidatorPools;
exports.requestDelayedUnstake = requestDelayedUnstake;
exports.requestInstantUnstake = requestInstantUnstake;
exports.sortValsInDecreasingOrder = sortValsInDecreasingOrder;
exports.splitFromActiveStake = splitFromActiveStake;
exports.splitFromInactiveStake = splitFromInactiveStake;
exports.stakeSuiRequest = stakeSuiRequest;
exports.stakeUserSelectedValidators = stakeUserSelectedValidators;
exports.stakeWithValidator = stakeWithValidator;
exports.unstakeFromActiveStake = unstakeFromActiveStake;
exports.unstakeFromInactiveStake = unstakeFromInactiveStake;
exports.unstakeSuiFromValidator = unstakeSuiFromValidator;
exports.unstakeSuiFromValidators = unstakeSuiFromValidators;
exports.updateAccruedRewards = updateAccruedRewards;
exports.updateDsuiFeeConfig = updateDsuiFeeConfig;
exports.updateValidatorList = updateValidatorList;
const __1 = require("..");
const PUBLISHED_AT = __1.dsuivault.PUBLISHED_AT;
const structs_1 = require("../../_dependencies/source/0x1/option/structs");
const structs_2 = require("../../_dependencies/source/0x2/object/structs");
const util_1 = require("../../_framework/util");
function isEmpty(tx, validatorPool) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::is_empty`, arguments: [(0, util_1.obj)(tx, validatorPool)], }); }
function getSuiAmount(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_sui_amount`, arguments: [(0, util_1.obj)(tx, args.poolTokenExRate), (0, util_1.pure)(tx, args.stakedSuiTokenAmt, `u64`)], }); }
function init(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::init`, arguments: [], }); }
function adminEmergencyPauseUpdate(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::admin_emergency_pause_update`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.pauseStake, `bool`)], }); }
function claimCollectedLsdFee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::claim_collected_lsd_fee`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.obj)(tx, args.yieldFlow), (0, util_1.obj)(tx, args.feeCollector)], }); }
function claimUnstakeEpoch(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::claim_unstake_epoch`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.requestedAtEpoch, `u64`), (0, util_1.pure)(tx, args.suiToClaim, `u64`)], }); }
function claimUnstakedSui(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::claim_unstaked_sui`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.obj)(tx, args.unstakeTicket)], }); }
function destroyTicket(tx, ticket) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::destroy_ticket`, arguments: [(0, util_1.obj)(tx, ticket)], }); }
function destroyUnstakeEpoch(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::destroy_unstake_epoch`, arguments: [(0, util_1.pure)(tx, args.curEpoch, `u64`), (0, util_1.obj)(tx, args.unstakeEpoch)], }); }
function destroyValidatorPool(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::destroy_validator_pool`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.valAddress, `address`)], }); }
function emergencyPauseUpdate(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::emergency_pause_update`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.pauseStake, `bool`)], }); }
function extractFromActiveStake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::extract_from_active_stake`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.validatorPool)], }); }
function extractInactiveStake(tx, validatorPool) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::extract_inactive_stake`, arguments: [(0, util_1.obj)(tx, validatorPool)], }); }
function getDsuiBySui(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_dsui_by_sui`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.suiAmount, `u64`)], }); }
function getLatestExchangeRate(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_latest_exchange_rate`, arguments: [(0, util_1.pure)(tx, args.validatorPoolId, `${structs_2.ID.$typeName}`), (0, util_1.obj)(tx, args.suiSystemState), (0, util_1.pure)(tx, args.lastRefreshEpoch, `u64`)], }); }
function getSuiByDsui(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_sui_by_dsui`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.dsuiAmount, `u64`)], }); }
function getSuiClaimablePerDsui(tx, vault) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_sui_claimable_per_dsui`, arguments: [(0, util_1.obj)(tx, vault)], }); }
function getTotalSui(tx, vault) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_total_sui`, arguments: [(0, util_1.obj)(tx, vault)], }); }
function initDsuiVault(tx, treasuryCap) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::init_dsui_vault`, arguments: [(0, util_1.obj)(tx, treasuryCap)], }); }
function joinFungibleStakedSuiToValidator(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::join_fungible_staked_sui_to_validator`, arguments: [(0, util_1.obj)(tx, args.dsuiVault), (0, util_1.pure)(tx, args.validatorAddr, `address`), (0, util_1.obj)(tx, args.fungibleStakedSui)], }); }
function migrate(tx, vault) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::migrate`, arguments: [(0, util_1.obj)(tx, vault)], }); }
function processStakeSuiRequests(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::process_stake_sui_requests`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.vault)], }); }
function processUnstakingRequests(tx, vault) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::process_unstaking_requests`, arguments: [(0, util_1.obj)(tx, vault)], }); }
function queryAllSelectedValidatorMapping(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_all_selected_validator_mapping`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.startFrom, `${structs_1.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function queryDsuiVaultConfig(tx, vault) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_dsui_vault_config`, arguments: [(0, util_1.obj)(tx, vault)], }); }
function queryRequestDelayedUnstake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_request_delayed_unstake`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.dsuiBalance, `u64`)], }); }
function queryRequestInstantUnstake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_request_instant_unstake`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.dsuiBalanceAmt, `u64`)], }); }
function querySelectedValidatorMapping(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_selected_validator_mapping`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.validatorAddr, `address`)], }); }
function queryStakeSuiRequest(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_stake_sui_request`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.suiBalanceAmt, `u64`)], }); }
function queryUnstakeRequest(tx, request) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request`, arguments: [(0, util_1.obj)(tx, request)], }); }
function queryUnstakeRequestClaimEpoch(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request_claim_epoch`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.obj)(tx, args.request)], }); }
function queryUnstakeRequestForEpoch(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request_for_epoch`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.epoch, `u64`)], }); }
function queryUnstakeRequestForEpochs(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request_for_epochs`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.startFrom, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function queryValidatorPool(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_validator_pool`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.validatorAddr, `address`)], }); }
function queryValidatorPools(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_validator_pools`, arguments: [(0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.startFrom, `${structs_1.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function queryVaultOverview(tx, vault) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_vault_overview`, arguments: [(0, util_1.obj)(tx, vault)], }); }
function queryWhitelistedValidators(tx, vault) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_whitelisted_validators`, arguments: [(0, util_1.obj)(tx, vault)], }); }
function refreshValidatorInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::refresh_validator_info`, arguments: [(0, util_1.obj)(tx, args.dsuiVault), (0, util_1.pure)(tx, args.validatorAddr, `address`)], }); }
function refreshValidatorPools(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::refresh_validator_pools`, arguments: [(0, util_1.obj)(tx, args.dsuiVault), (0, util_1.obj)(tx, args.suiSystemState)], }); }
function requestDelayedUnstake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::request_delayed_unstake`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.vault), (0, util_1.obj)(tx, args.dsuiBalance)], }); }
function requestInstantUnstake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::request_instant_unstake`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.vault), (0, util_1.obj)(tx, args.dsuiBalance)], }); }
function sortValsInDecreasingOrder(tx, vault) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::sort_vals_in_decreasing_order`, arguments: [(0, util_1.obj)(tx, vault)], }); }
function splitFromActiveStake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::split_from_active_stake`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.validatorPool), (0, util_1.pure)(tx, args.amtToUnstake, `u64`)], }); }
function splitFromInactiveStake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::split_from_inactive_stake`, arguments: [(0, util_1.obj)(tx, args.validatorPool), (0, util_1.pure)(tx, args.amtToUnstake, `u64`)], }); }
function stakeSuiRequest(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::stake_sui_request`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.vault), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.pure)(tx, args.selectedValidator, `${structs_1.Option.$typeName}<address>`)], }); }
function stakeUserSelectedValidators(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::stake_user_selected_validators`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.activeValidators, `vector<address>`)], }); }
function stakeWithValidator(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::stake_with_validator`, arguments: [(0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.validatorAddr, `address`), (0, util_1.obj)(tx, args.suiBalance)], }); }
function unstakeFromActiveStake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::unstake_from_active_stake`, arguments: [(0, util_1.obj)(tx, args.dsuiVault), (0, util_1.obj)(tx, args.suiSystemState), (0, util_1.pure)(tx, args.validatorAddr, `address`), (0, util_1.pure)(tx, args.amtToUnstake, `u64`)], }); }
function unstakeFromInactiveStake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::unstake_from_inactive_stake`, arguments: [(0, util_1.obj)(tx, args.dsuiVault), (0, util_1.obj)(tx, args.suiSystemState), (0, util_1.pure)(tx, args.validatorAddr, `address`), (0, util_1.pure)(tx, args.amtToUnstake, `u64`)], }); }
function unstakeSuiFromValidator(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::unstake_sui_from_validator`, arguments: [(0, util_1.obj)(tx, args.dsuiVault), (0, util_1.obj)(tx, args.suiSystemState), (0, util_1.pure)(tx, args.validatorAddr, `address`), (0, util_1.pure)(tx, args.amtToUnstake, `u64`)], }); }
function unstakeSuiFromValidators(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::unstake_sui_from_validators`, arguments: [(0, util_1.obj)(tx, args.dsuiVault), (0, util_1.obj)(tx, args.suiSystemState), (0, util_1.pure)(tx, args.suiToUnstake, `u64`)], }); }
function updateAccruedRewards(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::update_accrued_rewards`, arguments: [(0, util_1.obj)(tx, args.dsuiVault), (0, util_1.obj)(tx, args.suiSystemState)], }); }
function updateDsuiFeeConfig(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::update_dsui_fee_config`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.protocolFeePercent, `u64`), (0, util_1.pure)(tx, args.redeemFeeBps, `u64`), (0, util_1.pure)(tx, args.treasuryPercent, `u64`), (0, util_1.pure)(tx, args.unstakeDelayEpoches, `u64`)], }); }
function updateValidatorList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::update_validator_list`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.suiSystemState), (0, util_1.obj)(tx, args.vault), (0, util_1.pure)(tx, args.validatorList, `vector<address>`), (0, util_1.pure)(tx, args.toAdd, `bool`)], }); }
