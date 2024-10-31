import {PUBLISHED_AT} from "..";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::init`, arguments: [ ], }) }

export interface AdminEmergencyPauseUpdateArgs { cap: TransactionObjectInput; vault: TransactionObjectInput; pauseStake: boolean | TransactionArgument }

export function adminEmergencyPauseUpdate( tx: Transaction, args: AdminEmergencyPauseUpdateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::admin_emergency_pause_update`, arguments: [ obj(tx, args.cap), obj(tx, args.vault), pure(tx, args.pauseStake, `bool`) ], }) }

export interface CalculateStakedSuiRewardsArgs { suiSystemState: TransactionObjectInput; stakedSuiObj: TransactionObjectInput; curEpoch: bigint | TransactionArgument }

export function calculateStakedSuiRewards( tx: Transaction, args: CalculateStakedSuiRewardsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::calculate_staked_sui_rewards`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.stakedSuiObj), pure(tx, args.curEpoch, `u64`) ], }) }

export interface CalculateValidatorPoolRewardsIncreaseArgs { suiSystemState: TransactionObjectInput; validatorAddr: string | TransactionArgument; validatorPool: TransactionObjectInput; curEpoch: bigint | TransactionArgument }

export function calculateValidatorPoolRewardsIncrease( tx: Transaction, args: CalculateValidatorPoolRewardsIncreaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::calculate_validator_pool_rewards_increase`, arguments: [ obj(tx, args.suiSystemState), pure(tx, args.validatorAddr, `address`), obj(tx, args.validatorPool), pure(tx, args.curEpoch, `u64`) ], }) }

export interface ClaimCollectedLsdFeeArgs { vault: TransactionObjectInput; yieldFlow: TransactionObjectInput; feeCollector: TransactionObjectInput }

export function claimCollectedLsdFee( tx: Transaction, args: ClaimCollectedLsdFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::claim_collected_lsd_fee`, arguments: [ obj(tx, args.vault), obj(tx, args.yieldFlow), obj(tx, args.feeCollector) ], }) }

export interface ClaimUnstakeEpochArgs { vault: TransactionObjectInput; requestedAtEpoch: bigint | TransactionArgument; suiToClaim: bigint | TransactionArgument }

export function claimUnstakeEpoch( tx: Transaction, args: ClaimUnstakeEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::claim_unstake_epoch`, arguments: [ obj(tx, args.vault), pure(tx, args.requestedAtEpoch, `u64`), pure(tx, args.suiToClaim, `u64`) ], }) }

export interface ClaimUnstakedSuiArgs { vault: TransactionObjectInput; unstakeTicket: TransactionObjectInput }

export function claimUnstakedSui( tx: Transaction, args: ClaimUnstakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::claim_unstaked_sui`, arguments: [ obj(tx, args.vault), obj(tx, args.unstakeTicket) ], }) }

export function destroyTicket( tx: Transaction, ticket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::destroy_ticket`, arguments: [ obj(tx, ticket) ], }) }

export interface DestroyUnstakeEpochArgs { curEpoch: bigint | TransactionArgument; unstakeEpoch: TransactionObjectInput }

export function destroyUnstakeEpoch( tx: Transaction, args: DestroyUnstakeEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::destroy_unstake_epoch`, arguments: [ pure(tx, args.curEpoch, `u64`), obj(tx, args.unstakeEpoch) ], }) }

export interface DestroyValidatorPoolArgs { vault: TransactionObjectInput; valAddress: string | TransactionArgument; curEpoch: bigint | TransactionArgument }

export function destroyValidatorPool( tx: Transaction, args: DestroyValidatorPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::destroy_validator_pool`, arguments: [ obj(tx, args.vault), pure(tx, args.valAddress, `address`), pure(tx, args.curEpoch, `u64`) ], }) }

export function doBeforeUnstake( tx: Transaction, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::do_before_unstake`, arguments: [ obj(tx, vault) ], }) }

export interface EmergencyPauseUpdateArgs { cap: TransactionObjectInput; vault: TransactionObjectInput; pauseStake: boolean | TransactionArgument }

export function emergencyPauseUpdate( tx: Transaction, args: EmergencyPauseUpdateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::emergency_pause_update`, arguments: [ obj(tx, args.cap), obj(tx, args.vault), pure(tx, args.pauseStake, `bool`) ], }) }

export interface ExecuteValidatorUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; suiUnstakedBalance: TransactionObjectInput; valAddress: string | TransactionArgument; suiToUnstake: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument }

export function executeValidatorUnstake( tx: Transaction, args: ExecuteValidatorUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::execute_validator_unstake`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.suiUnstakedBalance), pure(tx, args.valAddress, `address`), pure(tx, args.suiToUnstake, `u64`), pure(tx, args.curEpoch, `u64`) ], }) }

export interface GetDsuiBySuiArgs { vault: TransactionObjectInput; suiAmount: bigint | TransactionArgument }

export function getDsuiBySui( tx: Transaction, args: GetDsuiBySuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_dsui_by_sui`, arguments: [ obj(tx, args.vault), pure(tx, args.suiAmount, `u64`) ], }) }

export interface GetSplitAmountArgs { suiSystemState: TransactionObjectInput; stakedSuiObj: TransactionObjectInput; suiToUnstake: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument }

export function getSplitAmount( tx: Transaction, args: GetSplitAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_split_amount`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.stakedSuiObj), pure(tx, args.suiToUnstake, `u64`), pure(tx, args.curEpoch, `u64`) ], }) }

export interface GetSuiByDsuiArgs { vault: TransactionObjectInput; dsuiAmount: bigint | TransactionArgument }

export function getSuiByDsui( tx: Transaction, args: GetSuiByDsuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_sui_by_dsui`, arguments: [ obj(tx, args.vault), pure(tx, args.dsuiAmount, `u64`) ], }) }

export function getSuiClaimablePerDsui( tx: Transaction, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_sui_claimable_per_dsui`, arguments: [ obj(tx, vault) ], }) }

export function getTotalSui( tx: Transaction, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_total_sui`, arguments: [ obj(tx, vault) ], }) }

export function initDsuiVault( tx: Transaction, treasuryCap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::init_dsui_vault`, arguments: [ obj(tx, treasuryCap) ], }) }

export function migrate( tx: Transaction, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::migrate`, arguments: [ obj(tx, vault) ], }) }

export interface ProcessStakeSuiRequestsArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput }

export function processStakeSuiRequests( tx: Transaction, args: ProcessStakeSuiRequestsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::process_stake_sui_requests`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault) ], }) }

export interface ProcessUnstakeSuiRequestsArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput }

export function processUnstakeSuiRequests( tx: Transaction, args: ProcessUnstakeSuiRequestsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::process_unstake_sui_requests`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault) ], }) }

export interface QueryAllSelectedValidatorMappingArgs { vault: TransactionObjectInput; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryAllSelectedValidatorMapping( tx: Transaction, args: QueryAllSelectedValidatorMappingArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_all_selected_validator_mapping`, arguments: [ obj(tx, args.vault), pure(tx, args.startFrom, `${Option.$typeName}<address>`), pure(tx, args.limit, `u64`) ], }) }

export interface QueryAllStakedSuiObjsForPoolArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; validatorAddr: string | TransactionArgument; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryAllStakedSuiObjsForPool( tx: Transaction, args: QueryAllStakedSuiObjsForPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_all_staked_sui_objs_for_pool`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.validatorAddr, `address`), pure(tx, args.startFrom, `${Option.$typeName}<u64>`), pure(tx, args.limit, `u64`) ], }) }

export function queryDsuiVaultConfig( tx: Transaction, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_dsui_vault_config`, arguments: [ obj(tx, vault) ], }) }

export interface QueryRequestDelayedUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiBalance: bigint | TransactionArgument }

export function queryRequestDelayedUnstake( tx: Transaction, args: QueryRequestDelayedUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_request_delayed_unstake`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.dsuiBalance, `u64`) ], }) }

export interface QueryRequestInstantUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiBalanceAmt: bigint | TransactionArgument }

export function queryRequestInstantUnstake( tx: Transaction, args: QueryRequestInstantUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_request_instant_unstake`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.dsuiBalanceAmt, `u64`) ], }) }

export interface QuerySelectedValidatorMappingArgs { vault: TransactionObjectInput; validatorAddr: string | TransactionArgument }

export function querySelectedValidatorMapping( tx: Transaction, args: QuerySelectedValidatorMappingArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_selected_validator_mapping`, arguments: [ obj(tx, args.vault), pure(tx, args.validatorAddr, `address`) ], }) }

export interface QueryStakeSuiRequestArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; suiBalanceAmt: bigint | TransactionArgument }

export function queryStakeSuiRequest( tx: Transaction, args: QueryStakeSuiRequestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_stake_sui_request`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.suiBalanceAmt, `u64`) ], }) }

export interface QueryStakedSuiObjForPoolArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; validatorAddr: string | TransactionArgument; epoch: bigint | TransactionArgument }

export function queryStakedSuiObjForPool( tx: Transaction, args: QueryStakedSuiObjForPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_staked_sui_obj_for_pool`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.validatorAddr, `address`), pure(tx, args.epoch, `u64`) ], }) }

export function querySuiAvailableWithVaultOverview( tx: Transaction, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_sui_available_with_vault_overview`, arguments: [ obj(tx, vault) ], }) }

export function queryUnstakeRequest( tx: Transaction, request: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request`, arguments: [ obj(tx, request) ], }) }

export interface QueryUnstakeRequestClaimEpochArgs { vault: TransactionObjectInput; request: TransactionObjectInput }

export function queryUnstakeRequestClaimEpoch( tx: Transaction, args: QueryUnstakeRequestClaimEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request_claim_epoch`, arguments: [ obj(tx, args.vault), obj(tx, args.request) ], }) }

export interface QueryUnstakeRequestForEpochArgs { vault: TransactionObjectInput; epoch: bigint | TransactionArgument }

export function queryUnstakeRequestForEpoch( tx: Transaction, args: QueryUnstakeRequestForEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request_for_epoch`, arguments: [ obj(tx, args.vault), pure(tx, args.epoch, `u64`) ], }) }

export interface QueryUnstakeRequestForEpochsArgs { vault: TransactionObjectInput; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryUnstakeRequestForEpochs( tx: Transaction, args: QueryUnstakeRequestForEpochsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request_for_epochs`, arguments: [ obj(tx, args.vault), pure(tx, args.startFrom, `${Option.$typeName}<u64>`), pure(tx, args.limit, `u64`) ], }) }

export interface QueryValidatorPoolArgs { vault: TransactionObjectInput; validatorAddr: string | TransactionArgument }

export function queryValidatorPool( tx: Transaction, args: QueryValidatorPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_validator_pool`, arguments: [ obj(tx, args.vault), pure(tx, args.validatorAddr, `address`) ], }) }

export interface QueryValidatorPoolsArgs { vault: TransactionObjectInput; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryValidatorPools( tx: Transaction, args: QueryValidatorPoolsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_validator_pools`, arguments: [ obj(tx, args.vault), pure(tx, args.startFrom, `${Option.$typeName}<address>`), pure(tx, args.limit, `u64`) ], }) }

export function queryVaultOverview( tx: Transaction, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_vault_overview`, arguments: [ obj(tx, vault) ], }) }

export function queryWhitelistedValidators( tx: Transaction, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_whitelisted_validators`, arguments: [ obj(tx, vault) ], }) }

export interface RequestDelayedUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiBalance: TransactionObjectInput }

export function requestDelayedUnstake( tx: Transaction, args: RequestDelayedUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::request_delayed_unstake`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.dsuiBalance) ], }) }

export interface RequestInstantUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiBalance: TransactionObjectInput }

export function requestInstantUnstake( tx: Transaction, args: RequestInstantUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::request_instant_unstake`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.dsuiBalance) ], }) }

export function sortValsInDecreasingOrder( tx: Transaction, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::sort_vals_in_decreasing_order`, arguments: [ obj(tx, vault) ], }) }

export interface StakeSuiRequestArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; suiBalance: TransactionObjectInput; selectedValidator: (string | TransactionArgument | TransactionArgument | null) }

export function stakeSuiRequest( tx: Transaction, args: StakeSuiRequestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::stake_sui_request`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.suiBalance), pure(tx, args.selectedValidator, `${Option.$typeName}<address>`) ], }) }

export interface StakeUserSelectedValidatorsArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; activeValidators: Array<string | TransactionArgument> | TransactionArgument }

export function stakeUserSelectedValidators( tx: Transaction, args: StakeUserSelectedValidatorsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::stake_user_selected_validators`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.activeValidators, `vector<address>`) ], }) }

export interface StakeWithValidatorArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; validatorAddr: string | TransactionArgument; suiBalance: TransactionObjectInput }

export function stakeWithValidator( tx: Transaction, args: StakeWithValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::stake_with_validator`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.validatorAddr, `address`), obj(tx, args.suiBalance) ], }) }

export interface UnstakeFromValidatorPoolsArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; totalSuiToUnstake: bigint | TransactionArgument }

export function unstakeFromValidatorPools( tx: Transaction, args: UnstakeFromValidatorPoolsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::unstake_from_validator_pools`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.totalSuiToUnstake, `u64`) ], }) }

export interface UnstakeInactiveValidatorsArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput }

export function unstakeInactiveValidators( tx: Transaction, args: UnstakeInactiveValidatorsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::unstake_inactive_validators`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault) ], }) }

export interface UpdateCalculatedAccruedRewardsArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput }

export function updateCalculatedAccruedRewards( tx: Transaction, args: UpdateCalculatedAccruedRewardsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::update_calculated_accrued_rewards`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault) ], }) }

export interface UpdateDsuiFeeConfigArgs { cap: TransactionObjectInput; vault: TransactionObjectInput; protocolFeePercent: bigint | TransactionArgument; serviceFeePercent: bigint | TransactionArgument; treasuryPercent: bigint | TransactionArgument }

export function updateDsuiFeeConfig( tx: Transaction, args: UpdateDsuiFeeConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::update_dsui_fee_config`, arguments: [ obj(tx, args.cap), obj(tx, args.vault), pure(tx, args.protocolFeePercent, `u64`), pure(tx, args.serviceFeePercent, `u64`), pure(tx, args.treasuryPercent, `u64`) ], }) }

export interface UpdateValidatorListArgs { cap: TransactionObjectInput; suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; validatorList: Array<string | TransactionArgument> | TransactionArgument; toAdd: boolean | TransactionArgument }

export function updateValidatorList( tx: Transaction, args: UpdateValidatorListArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::update_validator_list`, arguments: [ obj(tx, args.cap), obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.validatorList, `vector<address>`), pure(tx, args.toAdd, `bool`) ], }) }

export interface WithdrawStakedSuiArgs { suiSystemState: TransactionObjectInput; stakedSuiObj: TransactionObjectInput; suiBalance: TransactionObjectInput; curEpoch: bigint | TransactionArgument }

export function withdrawStakedSui( tx: Transaction, args: WithdrawStakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::withdraw_staked_sui`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.stakedSuiObj), obj(tx, args.suiBalance), pure(tx, args.curEpoch, `u64`) ], }) }
