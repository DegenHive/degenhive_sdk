import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

// export function init( txb: TransactionBlock, witnessBee: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::init`, arguments: [ obj(txb, witnessBee) ], }) }

export function getTotalBeeSupply( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::get_total_bee_Supply`, arguments: [ ], }) }

export interface SetBurnPercentArgs { policy: ObjectArg; policyCap: ObjectArg; newBurnPcts: ObjectArg }

export function setBurnPercent( txb: TransactionBlock, typeArg: string, args: SetBurnPercentArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::set_burn_percent`, typeArguments: [typeArg], arguments: [ obj(txb, args.policy), obj(txb, args.policyCap), obj(txb, args.newBurnPcts) ], }) }

export interface SetRulesArgs { policy: ObjectArg; policyCap: ObjectArg }

export function setRules( txb: TransactionBlock, typeArg: string, args: SetRulesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::set_rules`, typeArguments: [typeArg], arguments: [ obj(txb, args.policy), obj(txb, args.policyCap) ], }) }

export interface TransferBeesArgs { beeToken: ObjectArg; beePolicyCap: ObjectArg; policy: ObjectArg; transferAmt: bigint | TransactionArgument; receipient: string | TransactionArgument }

export function transferBees( txb: TransactionBlock, typeArg: string, args: TransferBeesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::transfer_bees`, typeArguments: [typeArg], arguments: [ obj(txb, args.beeToken), obj(txb, args.beePolicyCap), obj(txb, args.policy), pure(txb, args.transferAmt, `u64`), pure(txb, args.receipient, `address`) ], }) }

export interface TransferBeesBalanceArgs { policy: ObjectArg; beePolicyCap: ObjectArg; beesBalance: ObjectArg; recepient: string | TransactionArgument }

export function transferBeesBalance( txb: TransactionBlock, typeArg: string, args: TransferBeesBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::transfer_bees_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.policy), obj(txb, args.beePolicyCap), obj(txb, args.beesBalance), pure(txb, args.recepient, `address`) ], }) }

export interface UnwrapBeeTokensToCoinsArgs { beeToken: ObjectArg; policyCap: ObjectArg; policy: ObjectArg; toCoinAmt: bigint | TransactionArgument }

export function unwrapBeeTokensToCoins( txb: TransactionBlock, typeArg: string, args: UnwrapBeeTokensToCoinsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::unwrap_bee_tokens_to_coins`, typeArguments: [typeArg], arguments: [ obj(txb, args.beeToken), obj(txb, args.policyCap), obj(txb, args.policy), pure(txb, args.toCoinAmt, `u64`) ], }) }

export interface VerifyArgs { policy: ObjectArg; request: ObjectArg }

export function verify( txb: TransactionBlock, typeArg: string, args: VerifyArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::verify`, typeArguments: [typeArg], arguments: [ obj(txb, args.policy), obj(txb, args.request) ], }) }
