import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface GetHsuiBySuiArgs { vault: ObjectArg; suiAmount: bigint | TransactionArgument }

export function getHsuiBySui( txb: TransactionBlock, args: GetHsuiBySuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_hsui_by_sui`, arguments: [ obj(txb, args.vault), pure(txb, args.suiAmount, `u64`) ], }) }

export interface GetSplitAmountArgs { suiSystemState: ObjectArg; stakedSuiObj: ObjectArg; suiToUnstake: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument }

export function getSplitAmount( txb: TransactionBlock, args: GetSplitAmountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_split_amount`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.stakedSuiObj), pure(txb, args.suiToUnstake, `u64`), pure(txb, args.curEpoch, `u64`) ], }) }

export interface GetSuiByHsuiArgs { vault: ObjectArg; hsuiAmount: bigint | TransactionArgument }

export function getSuiByHsui( txb: TransactionBlock, args: GetSuiByHsuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_sui_by_hsui`, arguments: [ obj(txb, args.vault), pure(txb, args.hsuiAmount, `u64`) ], }) }

export function getSuiClaimablePerHsui( txb: TransactionBlock, vault: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_sui_claimable_per_hsui`, arguments: [ obj(txb, vault) ], }) }

export function getTotalSui( txb: TransactionBlock, vault: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::get_total_sui`, arguments: [ obj(txb, vault) ], }) }

export function initHsuiVault( txb: TransactionBlock, treasuryCap: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::init_hsui_vault`, arguments: [ obj(txb, treasuryCap) ], }) }

export function migrate( txb: TransactionBlock, vault: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::migrate`, arguments: [ obj(txb, vault) ], }) }

export interface ProcessStakeSuiRequestsArgs { suiSystemState: ObjectArg; vault: ObjectArg }

export function processStakeSuiRequests( txb: TransactionBlock, args: ProcessStakeSuiRequestsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::process_stake_sui_requests`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault) ], }) }

export interface ProcessUnstakeSuiRequestsArgs { suiSystemState: ObjectArg; vault: ObjectArg }

export function processUnstakeSuiRequests( txb: TransactionBlock, args: ProcessUnstakeSuiRequestsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::process_unstake_sui_requests`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault) ], }) }

export interface QueryAllSelectedValidatorMappingArgs { vault: ObjectArg; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryAllSelectedValidatorMapping( txb: TransactionBlock, args: QueryAllSelectedValidatorMappingArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_all_selected_validator_mapping`, arguments: [ obj(txb, args.vault), pure(txb, args.startFrom, `0x1::option::Option<address>`), pure(txb, args.limit, `u64`) ], }) }

export interface QueryAllStakedSuiObjsForPoolArgs { suiSystemState: ObjectArg; vault: ObjectArg; validatorAddr: string | TransactionArgument; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryAllStakedSuiObjsForPool( txb: TransactionBlock, args: QueryAllStakedSuiObjsForPoolArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_all_staked_sui_objs_for_pool`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), pure(txb, args.validatorAddr, `address`), pure(txb, args.startFrom, `0x1::option::Option<u64>`), pure(txb, args.limit, `u64`) ], }) }

export function queryHsuiVaultConfig( txb: TransactionBlock, vault: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_hsui_vault_config`, arguments: [ obj(txb, vault) ], }) }

export interface QueryRequestDelayedUnstakeArgs { suiSystemState: ObjectArg; vault: ObjectArg; hsuiBalance: bigint | TransactionArgument }

export function queryRequestDelayedUnstake( txb: TransactionBlock, args: QueryRequestDelayedUnstakeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_request_delayed_unstake`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), pure(txb, args.hsuiBalance, `u64`) ], }) }

export interface QueryRequestInstantUnstakeArgs { suiSystemState: ObjectArg; vault: ObjectArg; hsuiBalanceAmt: bigint | TransactionArgument }

export function queryRequestInstantUnstake( txb: TransactionBlock, args: QueryRequestInstantUnstakeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_request_instant_unstake`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), pure(txb, args.hsuiBalanceAmt, `u64`) ], }) }

export interface QuerySelectedValidatorMappingArgs { vault: ObjectArg; validatorAddr: string | TransactionArgument }

export function querySelectedValidatorMapping( txb: TransactionBlock, args: QuerySelectedValidatorMappingArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_selected_validator_mapping`, arguments: [ obj(txb, args.vault), pure(txb, args.validatorAddr, `address`) ], }) }

export interface QueryStakeSuiRequestArgs { suiSystemState: ObjectArg; vault: ObjectArg; suiBalanceAmt: bigint | TransactionArgument }

export function queryStakeSuiRequest( txb: TransactionBlock, args: QueryStakeSuiRequestArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_stake_sui_request`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), pure(txb, args.suiBalanceAmt, `u64`) ], }) }

export interface QueryStakedSuiObjForPoolArgs { suiSystemState: ObjectArg; vault: ObjectArg; validatorAddr: string | TransactionArgument; epoch: bigint | TransactionArgument }

export function queryStakedSuiObjForPool( txb: TransactionBlock, args: QueryStakedSuiObjForPoolArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_staked_sui_obj_for_pool`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), pure(txb, args.validatorAddr, `address`), pure(txb, args.epoch, `u64`) ], }) }

export function querySuiAvailableWithVaultOverview( txb: TransactionBlock, vault: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_sui_available_with_vault_overview`, arguments: [ obj(txb, vault) ], }) }

export function queryUnstakeRequest( txb: TransactionBlock, request: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request`, arguments: [ obj(txb, request) ], }) }

export interface QueryUnstakeRequestClaimEpochArgs { vault: ObjectArg; request: ObjectArg }

export function queryUnstakeRequestClaimEpoch( txb: TransactionBlock, args: QueryUnstakeRequestClaimEpochArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request_claim_epoch`, arguments: [ obj(txb, args.vault), obj(txb, args.request) ], }) }

export interface QueryUnstakeRequestForEpochArgs { vault: ObjectArg; epoch: bigint | TransactionArgument }

export function queryUnstakeRequestForEpoch( txb: TransactionBlock, args: QueryUnstakeRequestForEpochArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request_for_epoch`, arguments: [ obj(txb, args.vault), pure(txb, args.epoch, `u64`) ], }) }

export interface QueryUnstakeRequestForEpochsArgs { vault: ObjectArg; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryUnstakeRequestForEpochs( txb: TransactionBlock, args: QueryUnstakeRequestForEpochsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_unstake_request_for_epochs`, arguments: [ obj(txb, args.vault), pure(txb, args.startFrom, `0x1::option::Option<u64>`), pure(txb, args.limit, `u64`) ], }) }

export interface QueryValidatorPoolArgs { vault: ObjectArg; validatorAddr: string | TransactionArgument }

export function queryValidatorPool( txb: TransactionBlock, args: QueryValidatorPoolArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_validator_pool`, arguments: [ obj(txb, args.vault), pure(txb, args.validatorAddr, `address`) ], }) }

export interface QueryValidatorPoolsArgs { vault: ObjectArg; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryValidatorPools( txb: TransactionBlock, args: QueryValidatorPoolsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_validator_pools`, arguments: [ obj(txb, args.vault), pure(txb, args.startFrom, `0x1::option::Option<address>`), pure(txb, args.limit, `u64`) ], }) }

export function queryVaultOverview( txb: TransactionBlock, vault: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_vault_overview`, arguments: [ obj(txb, vault) ], }) }

export function queryWhitelistedValidators( txb: TransactionBlock, vault: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::query_whitelisted_validators`, arguments: [ obj(txb, vault) ], }) }

export function sortValsInDecreasingOrder( txb: TransactionBlock, vault: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::sort_vals_in_decreasing_order`, arguments: [ obj(txb, vault) ], }) }

export interface StakeSuiRequestArgs { suiSystemState: ObjectArg; vault: ObjectArg; suiBalance: ObjectArg; selectedValidator: (string | TransactionArgument | TransactionArgument | null) }

export function stakeSuiRequest( txb: TransactionBlock, args: StakeSuiRequestArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::stake_sui_request`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), obj(txb, args.suiBalance), pure(txb, args.selectedValidator, `0x1::option::Option<address>`) ], }) }

export interface StakeUserSelectedValidatorsArgs { suiSystemState: ObjectArg; vault: ObjectArg; activeValidators: Array<string | TransactionArgument> | TransactionArgument }

export function stakeUserSelectedValidators( txb: TransactionBlock, args: StakeUserSelectedValidatorsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::stake_user_selected_validators`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), pure(txb, args.activeValidators, `vector<address>`) ], }) }

export interface UnstakeFromValidatorPoolsArgs { suiSystemState: ObjectArg; vault: ObjectArg; totalSuiToUnstake: bigint | TransactionArgument }

export function unstakeFromValidatorPools( txb: TransactionBlock, args: UnstakeFromValidatorPoolsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::unstake_from_validator_pools`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), pure(txb, args.totalSuiToUnstake, `u64`) ], }) }

export interface UnstakeInactiveValidatorsArgs { suiSystemState: ObjectArg; vault: ObjectArg }

export function unstakeInactiveValidators( txb: TransactionBlock, args: UnstakeInactiveValidatorsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::unstake_inactive_validators`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault) ], }) }

export interface UpdateCalculatedAccruedRewardsArgs { suiSystemState: ObjectArg; vault: ObjectArg }

export function updateCalculatedAccruedRewards( txb: TransactionBlock, args: UpdateCalculatedAccruedRewardsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::update_calculated_accrued_rewards`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault) ], }) }

export interface UpdateGlobalFeeConfigArgs { cap: ObjectArg; vault: ObjectArg; protocolFeePercent: bigint | TransactionArgument; serviceFeePercent: bigint | TransactionArgument; treasuryPercent: bigint | TransactionArgument }

export function updateGlobalFeeConfig( txb: TransactionBlock, args: UpdateGlobalFeeConfigArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::update_global_fee_config`, arguments: [ obj(txb, args.cap), obj(txb, args.vault), pure(txb, args.protocolFeePercent, `u64`), pure(txb, args.serviceFeePercent, `u64`), pure(txb, args.treasuryPercent, `u64`) ], }) }

export interface UpdateValidatorListArgs { cap: ObjectArg; suiSystemState: ObjectArg; vault: ObjectArg; validatorList: Array<string | TransactionArgument> | TransactionArgument; toAdd: boolean | TransactionArgument }

export function updateValidatorList( txb: TransactionBlock, args: UpdateValidatorListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::update_validator_list`, arguments: [ obj(txb, args.cap), obj(txb, args.suiSystemState), obj(txb, args.vault), pure(txb, args.validatorList, `vector<address>`), pure(txb, args.toAdd, `bool`) ], }) }

export interface WithdrawStakedSuiArgs { suiSystemState: ObjectArg; stakedSuiObj: ObjectArg; suiBalance: ObjectArg; curEpoch: bigint | TransactionArgument }

export function withdrawStakedSui( txb: TransactionBlock, args: WithdrawStakedSuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hsui_vault::withdraw_staked_sui`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.stakedSuiObj), obj(txb, args.suiBalance), pure(txb, args.curEpoch, `u64`) ], }) }
