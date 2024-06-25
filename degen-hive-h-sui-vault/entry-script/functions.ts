import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

import { hsuivault } from "..";
const PUBLISHED_AT = hsuivault.PUBLISHED_AT

export interface ClaimUnstakedSuiArgs { vault: ObjectArg; unstakeRequest: ObjectArg }

export function claimUnstakedSui( txb: TransactionBlock, args: ClaimUnstakedSuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::entry_script::claim_unstaked_sui`, arguments: [ obj(txb, args.vault), obj(txb, args.unstakeRequest) ], }) }

export interface RequestDelayedUnstakeArgs { suiSystemState: ObjectArg; vault: ObjectArg; hsuiCoin: ObjectArg; toUnstake: bigint | TransactionArgument }

export function requestDelayedUnstake( txb: TransactionBlock, args: RequestDelayedUnstakeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_delayed_unstake`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), obj(txb, args.hsuiCoin), pure(txb, args.toUnstake, `u64`) ], }) }

export interface RequestInstantUnstakeArgs { suiSystemState: ObjectArg; vault: ObjectArg; hsuiCoin: ObjectArg; toUnstake: bigint | TransactionArgument }

export function requestInstantUnstake( txb: TransactionBlock, args: RequestInstantUnstakeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_instant_unstake`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), obj(txb, args.hsuiCoin), pure(txb, args.toUnstake, `u64`) ], }) }

export interface StakeWithValidatorArgs { suiSystemState: ObjectArg; vault: ObjectArg; suiCoin: ObjectArg; toStake: bigint | TransactionArgument; selectedValidator: string | TransactionArgument }

export function stakeWithValidator( txb: TransactionBlock, args: StakeWithValidatorArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_with_validator`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), obj(txb, args.suiCoin), pure(txb, args.toStake, `u64`), pure(txb, args.selectedValidator, `address`) ], }) }

export interface StakeSuiArgs { suiSystemState: ObjectArg; vault: ObjectArg; suiCoin: ObjectArg; toStake: bigint | TransactionArgument }

export function stakeSui( txb: TransactionBlock, args: StakeSuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_sui`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), obj(txb, args.suiCoin), pure(txb, args.toStake, `u64`) ], }) }
