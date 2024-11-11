import { dsuivault } from ".."
const PUBLISHED_AT = dsuivault.PUBLISHED_AT
const SUI_SYSTEM_STATE = dsuivault.SUI_SYSTEM_STATE
const CLOCK = dsuivault.CLOCK
const DSUI_VAULT = dsuivault.DSUI_VAULT
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export interface ClaimUnstakedSuiArgs {  unstakeRequest: TransactionObjectInput }

export function claimUnstakedSui(tx: Transaction, args: ClaimUnstakedSuiArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::claim_unstaked_sui`, arguments: [obj(tx, DSUI_VAULT), obj(tx, args.unstakeRequest)], }) }

export interface RequestDelayedUnstakeArgs {   dsuiCoin: TransactionObjectInput; toUnstake: bigint | TransactionArgument }

export function requestDelayedUnstake(tx: Transaction, args: RequestDelayedUnstakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_delayed_unstake`, arguments: [obj(tx, SUI_SYSTEM_STATE), obj(tx, DSUI_VAULT), obj(tx, args.dsuiCoin), pure(tx, args.toUnstake, `u64`)], }) }

export interface RequestInstantUnstakeArgs {   dsuiCoin: TransactionObjectInput; toUnstake: bigint | TransactionArgument }

export function requestInstantUnstake(tx: Transaction, args: RequestInstantUnstakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_instant_unstake`, arguments: [obj(tx, SUI_SYSTEM_STATE), obj(tx, DSUI_VAULT), obj(tx, args.dsuiCoin), pure(tx, args.toUnstake, `u64`)], }) }

export interface StakeWithValidatorArgs {   suiCoin: TransactionObjectInput; toStake: bigint | TransactionArgument; selectedValidator: string | TransactionArgument }

export function stakeWithValidator(tx: Transaction, args: StakeWithValidatorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_with_validator`, arguments: [obj(tx, SUI_SYSTEM_STATE), obj(tx, DSUI_VAULT), obj(tx, args.suiCoin), pure(tx, args.toStake, `u64`), pure(tx, args.selectedValidator, `address`)], }) }

export interface StakeSuiArgs { suiCoin: TransactionObjectInput; toStake: bigint | TransactionArgument }

export function stakeSui(tx: Transaction, args: StakeSuiArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_sui`, arguments: [obj(tx, SUI_SYSTEM_STATE), obj(tx, DSUI_VAULT), obj(tx, args.suiCoin), pure(tx, args.toStake, `u64`)], }) }
