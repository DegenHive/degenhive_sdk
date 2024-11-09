import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface ClaimUnstakedSuiArgs { vault: TransactionObjectInput; unstakeRequest: TransactionObjectInput }

export function claimUnstakedSui( tx: Transaction, args: ClaimUnstakedSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::claim_unstaked_sui`, arguments: [ obj(tx, args.vault), obj(tx, args.unstakeRequest) ], }) }

export interface RequestDelayedUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiCoin: TransactionObjectInput; toUnstake: bigint | TransactionArgument }

export function requestDelayedUnstake( tx: Transaction, args: RequestDelayedUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_delayed_unstake`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.dsuiCoin), pure(tx, args.toUnstake, `u64`) ], }) }

export interface RequestInstantUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiCoin: TransactionObjectInput; toUnstake: bigint | TransactionArgument }

export function requestInstantUnstake( tx: Transaction, args: RequestInstantUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_instant_unstake`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.dsuiCoin), pure(tx, args.toUnstake, `u64`) ], }) }

export interface StakeWithValidatorArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; suiCoin: TransactionObjectInput; toStake: bigint | TransactionArgument; selectedValidator: string | TransactionArgument }

export function stakeWithValidator( tx: Transaction, args: StakeWithValidatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_with_validator`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.suiCoin), pure(tx, args.toStake, `u64`), pure(tx, args.selectedValidator, `address`) ], }) }

export interface StakeSuiArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; suiCoin: TransactionObjectInput; toStake: bigint | TransactionArgument }

export function stakeSui( tx: Transaction, args: StakeSuiArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_sui`, arguments: [ obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.suiCoin), pure(tx, args.toStake, `u64`) ], }) }
