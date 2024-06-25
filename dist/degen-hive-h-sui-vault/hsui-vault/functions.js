"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdrawStakedSui = exports.updateValidatorList = exports.updateGlobalFeeConfig = exports.updateCalculatedAccruedRewards = exports.unstakeInactiveValidators = exports.unstakeFromValidatorPools = exports.stakeUserSelectedValidators = exports.stakeSuiRequest = exports.sortValsInDecreasingOrder = exports.queryWhitelistedValidators = exports.queryVaultOverview = exports.queryValidatorPools = exports.queryValidatorPool = exports.queryUnstakeRequestForEpochs = exports.queryUnstakeRequestForEpoch = exports.queryUnstakeRequestClaimEpoch = exports.queryUnstakeRequest = exports.querySuiAvailableWithVaultOverview = exports.queryStakedSuiObjForPool = exports.queryStakeSuiRequest = exports.querySelectedValidatorMapping = exports.queryRequestInstantUnstake = exports.queryRequestDelayedUnstake = exports.queryHsuiVaultConfig = exports.queryAllStakedSuiObjsForPool = exports.queryAllSelectedValidatorMapping = exports.processUnstakeSuiRequests = exports.processStakeSuiRequests = exports.migrate = exports.initHsuiVault = exports.getTotalSui = exports.getSuiClaimablePerHsui = exports.getSuiByHsui = exports.getSplitAmount = exports.getHsuiBySui = void 0;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.hsuivault.PUBLISHED_AT;
function getHsuiBySui(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_hsui_by_sui`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.suiAmount, `u64`)], }); }
exports.getHsuiBySui = getHsuiBySui;
function getSplitAmount(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_split_amount`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.stakedSuiObj), (0, util_1.pure)(txb, args.suiToUnstake, `u64`), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
exports.getSplitAmount = getSplitAmount;
function getSuiByHsui(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_sui_by_hsui`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.hsuiAmount, `u64`)], }); }
exports.getSuiByHsui = getSuiByHsui;
function getSuiClaimablePerHsui(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_sui_claimable_per_hsui`, arguments: [(0, util_1.obj)(txb, vault)], }); }
exports.getSuiClaimablePerHsui = getSuiClaimablePerHsui;
function getTotalSui(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_total_sui`, arguments: [(0, util_1.obj)(txb, vault)], }); }
exports.getTotalSui = getTotalSui;
function initHsuiVault(txb, treasuryCap) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::init_hsui_vault`, arguments: [(0, util_1.obj)(txb, treasuryCap)], }); }
exports.initHsuiVault = initHsuiVault;
function migrate(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::migrate`, arguments: [(0, util_1.obj)(txb, vault)], }); }
exports.migrate = migrate;
function processStakeSuiRequests(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::process_stake_sui_requests`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault)], }); }
exports.processStakeSuiRequests = processStakeSuiRequests;
function processUnstakeSuiRequests(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::process_unstake_sui_requests`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault)], }); }
exports.processUnstakeSuiRequests = processUnstakeSuiRequests;
function queryAllSelectedValidatorMapping(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_all_selected_validator_mapping`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
exports.queryAllSelectedValidatorMapping = queryAllSelectedValidatorMapping;
function queryAllStakedSuiObjsForPool(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_all_staked_sui_objs_for_pool`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.validatorAddr, `address`), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
exports.queryAllStakedSuiObjsForPool = queryAllStakedSuiObjsForPool;
function queryHsuiVaultConfig(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_hsui_vault_config`, arguments: [(0, util_1.obj)(txb, vault)], }); }
exports.queryHsuiVaultConfig = queryHsuiVaultConfig;
function queryRequestDelayedUnstake(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_request_delayed_unstake`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.hsuiBalance, `u64`)], }); }
exports.queryRequestDelayedUnstake = queryRequestDelayedUnstake;
function queryRequestInstantUnstake(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_request_instant_unstake`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.hsuiBalanceAmt, `u64`)], }); }
exports.queryRequestInstantUnstake = queryRequestInstantUnstake;
function querySelectedValidatorMapping(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_selected_validator_mapping`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.validatorAddr, `address`)], }); }
exports.querySelectedValidatorMapping = querySelectedValidatorMapping;
function queryStakeSuiRequest(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_stake_sui_request`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.suiBalanceAmt, `u64`)], }); }
exports.queryStakeSuiRequest = queryStakeSuiRequest;
function queryStakedSuiObjForPool(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_staked_sui_obj_for_pool`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.validatorAddr, `address`), (0, util_1.pure)(txb, args.epoch, `u64`)], }); }
exports.queryStakedSuiObjForPool = queryStakedSuiObjForPool;
function querySuiAvailableWithVaultOverview(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_sui_available_with_vault_overview`, arguments: [(0, util_1.obj)(txb, vault)], }); }
exports.querySuiAvailableWithVaultOverview = querySuiAvailableWithVaultOverview;
function queryUnstakeRequest(txb, request) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request`, arguments: [(0, util_1.obj)(txb, request)], }); }
exports.queryUnstakeRequest = queryUnstakeRequest;
function queryUnstakeRequestClaimEpoch(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request_claim_epoch`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.request)], }); }
exports.queryUnstakeRequestClaimEpoch = queryUnstakeRequestClaimEpoch;
function queryUnstakeRequestForEpoch(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request_for_epoch`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.epoch, `u64`)], }); }
exports.queryUnstakeRequestForEpoch = queryUnstakeRequestForEpoch;
function queryUnstakeRequestForEpochs(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request_for_epochs`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
exports.queryUnstakeRequestForEpochs = queryUnstakeRequestForEpochs;
function queryValidatorPool(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_validator_pool`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.validatorAddr, `address`)], }); }
exports.queryValidatorPool = queryValidatorPool;
function queryValidatorPools(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_validator_pools`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
exports.queryValidatorPools = queryValidatorPools;
function queryVaultOverview(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_vault_overview`, arguments: [(0, util_1.obj)(txb, vault)], }); }
exports.queryVaultOverview = queryVaultOverview;
function queryWhitelistedValidators(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_whitelisted_validators`, arguments: [(0, util_1.obj)(txb, vault)], }); }
exports.queryWhitelistedValidators = queryWhitelistedValidators;
function sortValsInDecreasingOrder(txb, vault) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::sort_vals_in_decreasing_order`, arguments: [(0, util_1.obj)(txb, vault)], }); }
exports.sortValsInDecreasingOrder = sortValsInDecreasingOrder;
function stakeSuiRequest(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::stake_sui_request`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.suiBalance), (0, util_1.pure)(txb, args.selectedValidator, `0x1::option::Option<address>`)], }); }
exports.stakeSuiRequest = stakeSuiRequest;
function stakeUserSelectedValidators(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::stake_user_selected_validators`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.activeValidators, `vector<address>`)], }); }
exports.stakeUserSelectedValidators = stakeUserSelectedValidators;
function unstakeFromValidatorPools(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::unstake_from_validator_pools`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.totalSuiToUnstake, `u64`)], }); }
exports.unstakeFromValidatorPools = unstakeFromValidatorPools;
function unstakeInactiveValidators(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::unstake_inactive_validators`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault)], }); }
exports.unstakeInactiveValidators = unstakeInactiveValidators;
function updateCalculatedAccruedRewards(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::update_calculated_accrued_rewards`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault)], }); }
exports.updateCalculatedAccruedRewards = updateCalculatedAccruedRewards;
function updateGlobalFeeConfig(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::update_global_fee_config`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.protocolFeePercent, `u64`), (0, util_1.pure)(txb, args.serviceFeePercent, `u64`), (0, util_1.pure)(txb, args.treasuryPercent, `u64`)], }); }
exports.updateGlobalFeeConfig = updateGlobalFeeConfig;
function updateValidatorList(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::update_validator_list`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.pure)(txb, args.validatorList, `vector<address>`), (0, util_1.pure)(txb, args.toAdd, `bool`)], }); }
exports.updateValidatorList = updateValidatorList;
function withdrawStakedSui(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::withdraw_staked_sui`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.stakedSuiObj), (0, util_1.obj)(txb, args.suiBalance), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
exports.withdrawStakedSui = withdrawStakedSui;
