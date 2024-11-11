import { dsuivault } from ".."
const PUBLISHED_AT = dsuivault.PUBLISHED_AT
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export interface ClaimUnstakedSuiArgs { vault: TransactionObjectInput; unstakeRequest: TransactionObjectInput }

export function claimUnstakedSui(tx: Transaction, args: ClaimUnstakedSuiArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::claim_unstaked_sui`, arguments: [obj(tx, args.vault), obj(tx, args.unstakeRequest)], }) }

export interface RequestDelayedUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiCoin: TransactionObjectInput; toUnstake: bigint | TransactionArgument }

export function requestDelayedUnstake(tx: Transaction, args: RequestDelayedUnstakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_delayed_unstake`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.dsuiCoin), pure(tx, args.toUnstake, `u64`)], }) }

export interface RequestInstantUnstakeArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; dsuiCoin: TransactionObjectInput; toUnstake: bigint | TransactionArgument }

export function requestInstantUnstake(tx: Transaction, args: RequestInstantUnstakeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_instant_unstake`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.dsuiCoin), pure(tx, args.toUnstake, `u64`)], }) }

export interface StakeWithValidatorArgs { suiSystemState: TransactionObjectInput; vault: TransactionObjectInput; suiCoin: TransactionObjectInput; toStake: bigint | TransactionArgument; selectedValidator: string | TransactionArgument }

export function stakeWithValidator(tx: Transaction, args: StakeWithValidatorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_with_validator`, arguments: [obj(tx, args.suiSystemState), obj(tx, args.vault), obj(tx, args.suiCoin), pure(tx, args.toStake, `u64`), pure(tx, args.selectedValidator, `address`)], }) }

export interface StakeSuiArgs { suiCoin: TransactionObjectInput; toStake: bigint | TransactionArgument }

export function stakeSui(tx: Transaction, args: StakeSuiArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_sui`, arguments: [obj(tx, "0x5"), obj(tx, "0x85aaf87a770b4a09822e7ca3de7f9424a4f58688cfa120f55b294a98d599d402"), obj(tx, args.suiCoin), pure(tx, args.toStake, `u64`)], }) }
