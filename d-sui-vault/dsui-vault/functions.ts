import { dsuivault } from ".."
const PUBLISHED_AT = dsuivault.PUBLISHED_AT
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { ID } from "../../_dependencies/source/0x2/object/structs";
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export function isEmpty(tx: Transaction, validatorPool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::is_empty`, arguments: [obj(tx, validatorPool)], }) }

export interface GetSuiAmountArgs { poolTokenExRate: TransactionObjectInput; stakedSuiTokenAmt: bigint | TransactionArgument }

export function getSuiAmount(tx: Transaction, args: GetSuiAmountArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_sui_amount`, arguments: [obj(tx, args.poolTokenExRate), pure(tx, args.stakedSuiTokenAmt, `u64`)], }) }

export function init(tx: Transaction,) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::init`, arguments: [], }) }

export interface AdminEmergencyPauseUpdateArgs { cap: TransactionObjectInput; vault: TransactionObjectInput; pauseStake: boolean | TransactionArgument }

export function adminEmergencyPauseUpdate(tx: Transaction, args: AdminEmergencyPauseUpdateArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::admin_emergency_pause_update`, arguments: [obj(tx, args.cap), obj(tx, args.vault), pure(tx, args.pauseStake, `bool`)], }) }

export interface ClaimCollectedLsdFeeArgs { vault: TransactionObjectInput; yieldFlow: TransactionObjectInput; feeCollector: TransactionObjectInput }

export function claimCollectedLsdFee(tx: Transaction, args: ClaimCollectedLsdFeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::claim_collected_lsd_fee`, arguments: [obj(tx, args.vault), obj(tx, args.yieldFlow), obj(tx, args.feeCollector)], }) }

export interface ClaimUnstakeEpochArgs { vault: TransactionObjectInput; requestedAtEpoch: bigint | TransactionArgument; suiToClaim: bigint | TransactionArgument }

export function claimUnstakeEpoch(tx: Transaction, args: ClaimUnstakeEpochArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::claim_unstake_epoch`, arguments: [obj(tx, args.vault), pure(tx, args.requestedAtEpoch, `u64`), pure(tx, args.suiToClaim, `u64`)], }) }

export interface ClaimUnstakedSuiArgs { vault: TransactionObjectInput; unstakeTicket: TransactionObjectInput }

export function claimUnstakedSui(tx: Transaction, args: ClaimUnstakedSuiArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::claim_unstaked_sui`, arguments: [obj(tx, args.vault), obj(tx, args.unstakeTicket)], }) }

export function destroyTicket(tx: Transaction, ticket: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::destroy_ticket`, arguments: [obj(tx, ticket)], }) }

export interface DestroyUnstakeEpochArgs { curEpoch: bigint | TransactionArgument; unstakeEpoch: TransactionObjectInput }

export function destroyUnstakeEpoch(tx: Transaction, args: DestroyUnstakeEpochArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::destroy_unstake_epoch`, arguments: [pure(tx, args.curEpoch, `u64`), obj(tx, args.unstakeEpoch)], }) }

export interface DestroyValidatorPoolArgs { vault: TransactionObjectInput; valAddress: string | TransactionArgument }

export function destroyValidatorPool(tx: Transaction, args: DestroyValidatorPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::destroy_validator_pool`, arguments: [obj(tx, args.vault), pure(tx, args.valAddress, `address`)], }) }

export interface EmergencyPauseUpdateArgs { cap: TransactionObjectInput; vault: TransactionObjectInput; pauseStake: boolean | TransactionArgument }

export function emergencyPauseUpdate(tx: Transaction, args: EmergencyPauseUpdateArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::emergency_pause_update`, arguments: [obj(tx, args.cap), obj(tx, args.vault), pure(tx, args.pauseStake, `bool`)], }) }

export interface ExtractFromActiveStakeArgs { suiSystemState: TransactionObjectInput; validatorPool: TransactionObjectInput }

export function extractFromActiveStake(tx: Transaction, args: ExtractFromActiveStakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::extract_from_active_stake`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.validatorPool)], }) }

export function extractInactiveStake(tx: Transaction, validatorPool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::extract_inactive_stake`, arguments: [obj(tx, validatorPool)], }) }

export interface GetDsuiBySuiArgs { vault: TransactionObjectInput; suiAmount: bigint | TransactionArgument }

export function getDsuiBySui(tx: Transaction, args: GetDsuiBySuiArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_dsui_by_sui`, arguments: [obj(tx, args.vault), pure(tx, args.suiAmount, `u64`)], }) }

export interface GetLatestExchangeRateArgs { validatorPoolId: string | TransactionArgument; suiSystemState: TransactionObjectInput; lastRefreshEpoch: bigint | TransactionArgument }

export function getLatestExchangeRate(tx: Transaction, args: GetLatestExchangeRateArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_latest_exchange_rate`, arguments: [pure(tx, args.validatorPoolId, `${ID.$typeName}`), obj(tx, args.suiSystemState), pure(tx, args.lastRefreshEpoch, `u64`)], }) }

export interface GetSuiByDsuiArgs { vault: TransactionObjectInput; dsuiAmount: bigint | TransactionArgument }

export function getSuiByDsui(tx: Transaction, args: GetSuiByDsuiArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_sui_by_dsui`, arguments: [obj(tx, args.vault), pure(tx, args.dsuiAmount, `u64`)], }) }

export function getSuiClaimablePerDsui(tx: Transaction, vault: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_sui_claimable_per_dsui`, arguments: [obj(tx, vault)], }) }

export function getTotalSui(tx: Transaction, vault: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::get_total_sui`, arguments: [obj(tx, vault)], }) }

export function initDsuiVault(tx: Transaction, treasuryCap: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::init_dsui_vault`, arguments: [obj(tx, treasuryCap)], }) }

export interface JoinFungibleStakedSuiToValidatorArgs { dsuiVault: TransactionObjectInput; validatorAddr: string | TransactionArgument; fungibleStakedSui: TransactionObjectInput }

export function joinFungibleStakedSuiToValidator(tx: Transaction, args: JoinFungibleStakedSuiToValidatorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::join_fungible_staked_sui_to_validator`, arguments: [obj(tx, args.dsuiVault), pure(tx, args.validatorAddr, `address`), obj(tx, args.fungibleStakedSui)], }) }

export function migrate(tx: Transaction, vault: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::migrate`, arguments: [obj(tx, vault)], }) }

export interface ProcessStakeSuiRequestsArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput }

export function processStakeSuiRequests(tx: Transaction, args: ProcessStakeSuiRequestsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::process_stake_sui_requests`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault)], }) }

export function processUnstakingRequests(tx: Transaction, vault: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::process_unstaking_requests`, arguments: [obj(tx, vault)], }) }

export interface QueryAllSelectedValidatorMappingArgs { vault: TransactionObjectInput; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryAllSelectedValidatorMapping(tx: Transaction, args: QueryAllSelectedValidatorMappingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_all_selected_validator_mapping`, arguments: [obj(tx, args.vault), pure(tx, args.startFrom, `${Option.$typeName}<address>`), pure(tx, args.limit, `u64`)], }) }

export function queryDsuiVaultConfig(tx: Transaction, vault: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_dsui_vault_config`, arguments: [obj(tx, vault)], }) }

export interface QueryRequestDelayedUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiBalance: bigint | TransactionArgument }

export function queryRequestDelayedUnstake(tx: Transaction, args: QueryRequestDelayedUnstakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_request_delayed_unstake`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.dsuiBalance, `u64`)], }) }

export interface QueryRequestInstantUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiBalanceAmt: bigint | TransactionArgument }

export function queryRequestInstantUnstake(tx: Transaction, args: QueryRequestInstantUnstakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_request_instant_unstake`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.dsuiBalanceAmt, `u64`)], }) }

export interface QuerySelectedValidatorMappingArgs { vault: TransactionObjectInput; validatorAddr: string | TransactionArgument }

export function querySelectedValidatorMapping(tx: Transaction, args: QuerySelectedValidatorMappingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_selected_validator_mapping`, arguments: [obj(tx, args.vault), pure(tx, args.validatorAddr, `address`)], }) }

export interface QueryStakeSuiRequestArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; suiBalanceAmt: bigint | TransactionArgument }

export function queryStakeSuiRequest(tx: Transaction, args: QueryStakeSuiRequestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_stake_sui_request`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.suiBalanceAmt, `u64`)], }) }

export function queryUnstakeRequest(tx: Transaction, request: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request`, arguments: [obj(tx, request)], }) }

export interface QueryUnstakeRequestClaimEpochArgs { vault: TransactionObjectInput; request: TransactionObjectInput }

export function queryUnstakeRequestClaimEpoch(tx: Transaction, args: QueryUnstakeRequestClaimEpochArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request_claim_epoch`, arguments: [obj(tx, args.vault), obj(tx, args.request)], }) }

export interface QueryUnstakeRequestForEpochArgs { vault: TransactionObjectInput; epoch: bigint | TransactionArgument }

export function queryUnstakeRequestForEpoch(tx: Transaction, args: QueryUnstakeRequestForEpochArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request_for_epoch`, arguments: [obj(tx, args.vault), pure(tx, args.epoch, `u64`)], }) }

export interface QueryUnstakeRequestForEpochsArgs { vault: TransactionObjectInput; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryUnstakeRequestForEpochs(tx: Transaction, args: QueryUnstakeRequestForEpochsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_unstake_request_for_epochs`, arguments: [obj(tx, args.vault), pure(tx, args.startFrom, `${Option.$typeName}<u64>`), pure(tx, args.limit, `u64`)], }) }

export interface QueryValidatorPoolArgs { vault: TransactionObjectInput; validatorAddr: string | TransactionArgument }

export function queryValidatorPool(tx: Transaction, args: QueryValidatorPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_validator_pool`, arguments: [obj(tx, args.vault), pure(tx, args.validatorAddr, `address`)], }) }

export interface QueryValidatorPoolsArgs { vault: TransactionObjectInput; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryValidatorPools(tx: Transaction, args: QueryValidatorPoolsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_validator_pools`, arguments: [obj(tx, args.vault), pure(tx, args.startFrom, `${Option.$typeName}<address>`), pure(tx, args.limit, `u64`)], }) }

export function queryVaultOverview(tx: Transaction, vault: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_vault_overview`, arguments: [obj(tx, vault)], }) }

export function queryWhitelistedValidators(tx: Transaction, vault: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::query_whitelisted_validators`, arguments: [obj(tx, vault)], }) }

export interface RefreshValidatorInfoArgs { dsuiVault: TransactionObjectInput; validatorAddr: string | TransactionArgument }

export function refreshValidatorInfo(tx: Transaction, args: RefreshValidatorInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::refresh_validator_info`, arguments: [obj(tx, args.dsuiVault), pure(tx, args.validatorAddr, `address`)], }) }

export interface RefreshValidatorPoolsArgs { dsuiVault: TransactionObjectInput; suiSystemState: TransactionObjectInput }

export function refreshValidatorPools(tx: Transaction, args: RefreshValidatorPoolsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::refresh_validator_pools`, arguments: [obj(tx, args.dsuiVault), obj(tx, args.suiSystemState)], }) }

export interface RequestDelayedUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiBalance: TransactionObjectInput }

export function requestDelayedUnstake(tx: Transaction, args: RequestDelayedUnstakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::request_delayed_unstake`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.dsuiBalance)], }) }

export interface RequestInstantUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiBalance: TransactionObjectInput }

export function requestInstantUnstake(tx: Transaction, args: RequestInstantUnstakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::request_instant_unstake`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.dsuiBalance)], }) }

export function sortValsInDecreasingOrder(tx: Transaction, vault: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::sort_vals_in_decreasing_order`, arguments: [obj(tx, vault)], }) }

export interface SplitFromActiveStakeArgs { suiSystemState: TransactionObjectInput; validatorPool: TransactionObjectInput; amtToUnstake: bigint | TransactionArgument }

export function splitFromActiveStake(tx: Transaction, args: SplitFromActiveStakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::split_from_active_stake`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.validatorPool), pure(tx, args.amtToUnstake, `u64`)], }) }

export interface SplitFromInactiveStakeArgs { validatorPool: TransactionObjectInput; amtToUnstake: bigint | TransactionArgument }

export function splitFromInactiveStake(tx: Transaction, args: SplitFromInactiveStakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::split_from_inactive_stake`, arguments: [obj(tx, args.validatorPool), pure(tx, args.amtToUnstake, `u64`)], }) }

export interface StakeSuiRequestArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; suiBalance: TransactionObjectInput; selectedValidator: (string | TransactionArgument | TransactionArgument | null) }

export function stakeSuiRequest(tx: Transaction, args: StakeSuiRequestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::stake_sui_request`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.suiBalance), pure(tx, args.selectedValidator, `${Option.$typeName}<address>`)], }) }

export interface StakeUserSelectedValidatorsArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; activeValidators: Array<string | TransactionArgument> | TransactionArgument }

export function stakeUserSelectedValidators(tx: Transaction, args: StakeUserSelectedValidatorsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::stake_user_selected_validators`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.activeValidators, `vector<address>`)], }) }

export interface StakeWithValidatorArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; validatorAddr: string | TransactionArgument; suiBalance: TransactionObjectInput }

export function stakeWithValidator(tx: Transaction, args: StakeWithValidatorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::stake_with_validator`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.validatorAddr, `address`), obj(tx, args.suiBalance)], }) }

export interface UnstakeFromActiveStakeArgs { dsuiVault: TransactionObjectInput; suiSystemState: TransactionObjectInput; validatorAddr: string | TransactionArgument; amtToUnstake: bigint | TransactionArgument }

export function unstakeFromActiveStake(tx: Transaction, args: UnstakeFromActiveStakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::unstake_from_active_stake`, arguments: [obj(tx, args.dsuiVault), obj(tx, args.suiSystemState), pure(tx, args.validatorAddr, `address`), pure(tx, args.amtToUnstake, `u64`)], }) }

export interface UnstakeFromInactiveStakeArgs { dsuiVault: TransactionObjectInput; suiSystemState: TransactionObjectInput; validatorAddr: string | TransactionArgument; amtToUnstake: bigint | TransactionArgument }

export function unstakeFromInactiveStake(tx: Transaction, args: UnstakeFromInactiveStakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::unstake_from_inactive_stake`, arguments: [obj(tx, args.dsuiVault), obj(tx, args.suiSystemState), pure(tx, args.validatorAddr, `address`), pure(tx, args.amtToUnstake, `u64`)], }) }

export interface UnstakeSuiFromValidatorArgs { dsuiVault: TransactionObjectInput; suiSystemState: TransactionObjectInput; validatorAddr: string | TransactionArgument; amtToUnstake: bigint | TransactionArgument }

export function unstakeSuiFromValidator(tx: Transaction, args: UnstakeSuiFromValidatorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::unstake_sui_from_validator`, arguments: [obj(tx, args.dsuiVault), obj(tx, args.suiSystemState), pure(tx, args.validatorAddr, `address`), pure(tx, args.amtToUnstake, `u64`)], }) }

export interface UnstakeSuiFromValidatorsArgs { dsuiVault: TransactionObjectInput; suiSystemState: TransactionObjectInput; suiToUnstake: bigint | TransactionArgument }

export function unstakeSuiFromValidators(tx: Transaction, args: UnstakeSuiFromValidatorsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::unstake_sui_from_validators`, arguments: [obj(tx, args.dsuiVault), obj(tx, args.suiSystemState), pure(tx, args.suiToUnstake, `u64`)], }) }

export interface UpdateAccruedRewardsArgs { dsuiVault: TransactionObjectInput; suiSystemState: TransactionObjectInput }

export function updateAccruedRewards(tx: Transaction, args: UpdateAccruedRewardsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::update_accrued_rewards`, arguments: [obj(tx, args.dsuiVault), obj(tx, args.suiSystemState)], }) }

export interface UpdateDsuiFeeConfigArgs { cap: TransactionObjectInput; vault: TransactionObjectInput; protocolFeePercent: bigint | TransactionArgument; redeemFeeBps: bigint | TransactionArgument; treasuryPercent: bigint | TransactionArgument; unstakeDelayEpoches: bigint | TransactionArgument }

export function updateDsuiFeeConfig(tx: Transaction, args: UpdateDsuiFeeConfigArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::update_dsui_fee_config`, arguments: [obj(tx, args.cap), obj(tx, args.vault), pure(tx, args.protocolFeePercent, `u64`), pure(tx, args.redeemFeeBps, `u64`), pure(tx, args.treasuryPercent, `u64`), pure(tx, args.unstakeDelayEpoches, `u64`)], }) }

export interface UpdateValidatorListArgs { cap: TransactionObjectInput; suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; validatorList: Array<string | TransactionArgument> | TransactionArgument; toAdd: boolean | TransactionArgument }

export function updateValidatorList(tx: Transaction, args: UpdateValidatorListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dsui_vault::update_validator_list`, arguments: [obj(tx, args.cap), obj(tx, args.suiSystemState), obj(tx, args.vault), pure(tx, args.validatorList, `vector<address>`), pure(tx, args.toAdd, `bool`)], }) }
