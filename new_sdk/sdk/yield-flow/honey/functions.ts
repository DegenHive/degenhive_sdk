import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, witnessBee: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::init`, arguments: [ obj(tx, witnessBee) ], }) }

export function getTotalHoneySupply( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::get_total_honey_Supply`, arguments: [ ], }) }

export interface SetConsumptionPctArgs { policy: TransactionObjectInput; policyCap: TransactionObjectInput; newBurnPcts: TransactionObjectInput }

export function setConsumptionPct( tx: Transaction, typeArg: string, args: SetConsumptionPctArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::set_consumption_pct`, typeArguments: [typeArg], arguments: [ obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, args.newBurnPcts) ], }) }

export interface SetRulesArgs { policy: TransactionObjectInput; policyCap: TransactionObjectInput }

export function setRules( tx: Transaction, typeArg: string, args: SetRulesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::set_rules`, typeArguments: [typeArg], arguments: [ obj(tx, args.policy), obj(tx, args.policyCap) ], }) }

export interface TransferHoneyArgs { honeyToken: TransactionObjectInput; honeyPolicyCap: TransactionObjectInput; policy: TransactionObjectInput; transferAmt: bigint | TransactionArgument; receipient: string | TransactionArgument }

export function transferHoney( tx: Transaction, typeArg: string, args: TransferHoneyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::transfer_honey`, typeArguments: [typeArg], arguments: [ obj(tx, args.honeyToken), obj(tx, args.honeyPolicyCap), obj(tx, args.policy), pure(tx, args.transferAmt, `u64`), pure(tx, args.receipient, `address`) ], }) }

export interface TransferHoneyBalanceArgs { policy: TransactionObjectInput; honeyPolicyCap: TransactionObjectInput; honeyBalance: TransactionObjectInput; recepient: string | TransactionArgument }

export function transferHoneyBalance( tx: Transaction, typeArg: string, args: TransferHoneyBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::transfer_honey_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.policy), obj(tx, args.honeyPolicyCap), obj(tx, args.honeyBalance), pure(tx, args.recepient, `address`) ], }) }

export interface UnwrapHoneyTokensToCoinsArgs { honeyToken: TransactionObjectInput; policyCap: TransactionObjectInput; policy: TransactionObjectInput; toCoinAmt: bigint | TransactionArgument }

export function unwrapHoneyTokensToCoins( tx: Transaction, typeArg: string, args: UnwrapHoneyTokensToCoinsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::unwrap_honey_tokens_to_coins`, typeArguments: [typeArg], arguments: [ obj(tx, args.honeyToken), obj(tx, args.policyCap), obj(tx, args.policy), pure(tx, args.toCoinAmt, `u64`) ], }) }

export interface VerifyArgs { policy: TransactionObjectInput; request: TransactionObjectInput }

export function verify( tx: Transaction, typeArg: string, args: VerifyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::verify`, typeArguments: [typeArg], arguments: [ obj(tx, args.policy), obj(tx, args.request) ], }) }
