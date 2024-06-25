"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHsuiBySui = getHsuiBySui;
exports.getSplitAmount = getSplitAmount;
exports.getSuiByHsui = getSuiByHsui;
exports.getSuiClaimablePerHsui = getSuiClaimablePerHsui;
exports.getTotalSui = getTotalSui;
exports.initHsuiVault = initHsuiVault;
exports.migrate = migrate;
exports.processStakeSuiRequests = processStakeSuiRequests;
exports.processUnstakeSuiRequests = processUnstakeSuiRequests;
exports.queryAllSelectedValidatorMapping = queryAllSelectedValidatorMapping;
exports.queryAllStakedSuiObjsForPool = queryAllStakedSuiObjsForPool;
exports.queryHsuiVaultConfig = queryHsuiVaultConfig;
exports.queryRequestDelayedUnstake = queryRequestDelayedUnstake;
exports.queryRequestInstantUnstake = queryRequestInstantUnstake;
exports.querySelectedValidatorMapping = querySelectedValidatorMapping;
exports.queryStakeSuiRequest = queryStakeSuiRequest;
exports.queryStakedSuiObjForPool = queryStakedSuiObjForPool;
exports.querySuiAvailableWithVaultOverview = querySuiAvailableWithVaultOverview;
exports.queryUnstakeRequest = queryUnstakeRequest;
exports.queryUnstakeRequestClaimEpoch = queryUnstakeRequestClaimEpoch;
exports.queryUnstakeRequestForEpoch = queryUnstakeRequestForEpoch;
exports.queryUnstakeRequestForEpochs = queryUnstakeRequestForEpochs;
exports.queryValidatorPool = queryValidatorPool;
exports.queryValidatorPools = queryValidatorPools;
exports.queryVaultOverview = queryVaultOverview;
exports.queryWhitelistedValidators = queryWhitelistedValidators;
exports.sortValsInDecreasingOrder = sortValsInDecreasingOrder;
exports.stakeSuiRequest = stakeSuiRequest;
exports.stakeUserSelectedValidators = stakeUserSelectedValidators;
exports.unstakeFromValidatorPools = unstakeFromValidatorPools;
exports.unstakeInactiveValidators = unstakeInactiveValidators;
exports.updateCalculatedAccruedRewards = updateCalculatedAccruedRewards;
exports.updateGlobalFeeConfig = updateGlobalFeeConfig;
exports.updateValidatorList = updateValidatorList;
exports.withdrawStakedSui = withdrawStakedSui;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.hsuivault.PUBLISHED_AT;
function getHsuiBySui(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_hsui_by_sui`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.suiAmount, `u64`)], }); }
function getSplitAmount(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_split_amount`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.stakedSuiObj), (0, util_1.pure)(txb, args.suiToUnstake, `u64`), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
function getSuiByHsui(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_sui_by_hsui`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.hsuiAmount, `u64`)], }); }
function getSuiClaimablePerHsui(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_sui_claimable_per_hsui`, arguments: [(0, util_1.obj)(txb, vault)], }); }
function getTotalSui(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_total_sui`, arguments: [(0, util_1.obj)(txb, vault)], }); }
function initHsuiVault(txb, treasuryCap) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::init_hsui_vault`, arguments: [(0, util_1.obj)(txb, treasuryCap)], }); }
function migrate(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::migrate`, arguments: [(0, util_1.obj)(txb, vault)], }); }
function processStakeSuiRequests(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::process_stake_sui_requests`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault)], }); }
function processUnstakeSuiRequests(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::process_unstake_sui_requests`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault)], }); }
function queryAllSelectedValidatorMapping(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_all_selected_validator_mapping`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function queryAllStakedSuiObjsForPool(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_all_staked_sui_objs_for_pool`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.validatorAddr, `address`), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function queryHsuiVaultConfig(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_hsui_vault_config`, arguments: [(0, util_1.obj)(txb, vault)], }); }
function queryRequestDelayedUnstake(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_request_delayed_unstake`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.hsuiBalance, `u64`)], }); }
function queryRequestInstantUnstake(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_request_instant_unstake`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.hsuiBalanceAmt, `u64`)], }); }
function querySelectedValidatorMapping(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_selected_validator_mapping`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.validatorAddr, `address`)], }); }
function queryStakeSuiRequest(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_stake_sui_request`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.suiBalanceAmt, `u64`)], }); }
function queryStakedSuiObjForPool(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_staked_sui_obj_for_pool`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.validatorAddr, `address`), (0, util_1.pure)(txb, args.epoch, `u64`)], }); }
function querySuiAvailableWithVaultOverview(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_sui_available_with_vault_overview`, arguments: [(0, util_1.obj)(txb, vault)], }); }
function queryUnstakeRequest(txb, request) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request`, arguments: [(0, util_1.obj)(txb, request)], }); }
function queryUnstakeRequestClaimEpoch(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request_claim_epoch`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.request)], }); }
function queryUnstakeRequestForEpoch(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request_for_epoch`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.epoch, `u64`)], }); }
function queryUnstakeRequestForEpochs(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request_for_epochs`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function queryValidatorPool(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_validator_pool`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.validatorAddr, `address`)], }); }
function queryValidatorPools(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_validator_pools`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function queryVaultOverview(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_vault_overview`, arguments: [(0, util_1.obj)(txb, vault)], }); }
function queryWhitelistedValidators(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_whitelisted_validators`, arguments: [(0, util_1.obj)(txb, vault)], }); }
function sortValsInDecreasingOrder(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::sort_vals_in_decreasing_order`, arguments: [(0, util_1.obj)(txb, vault)], }); }
function stakeSuiRequest(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::stake_sui_request`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.suiBalance), (0, util_1.pure)(txb, args.selectedValidator, `0x1::option::Option<address>`)], }); }
function stakeUserSelectedValidators(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::stake_user_selected_validators`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.activeValidators, `vector<address>`)], }); }
function unstakeFromValidatorPools(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::unstake_from_validator_pools`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.totalSuiToUnstake, `u64`)], }); }
function unstakeInactiveValidators(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::unstake_inactive_validators`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault)], }); }
function updateCalculatedAccruedRewards(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::update_calculated_accrued_rewards`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault)], }); }
function updateGlobalFeeConfig(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::update_global_fee_config`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.protocolFeePercent, `u64`), (0, util_1.pure)(txb, args.serviceFeePercent, `u64`), (0, util_1.pure)(txb, args.treasuryPercent, `u64`)], }); }
function updateValidatorList(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::update_validator_list`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.validatorList, `vector<address>`), (0, util_1.pure)(txb, args.toAdd, `bool`)], }); }
function withdrawStakedSui(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::withdraw_staked_sui`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.stakedSuiObj), (0, util_1.obj)(txb, args.suiBalance), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
