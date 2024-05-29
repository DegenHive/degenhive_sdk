import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export function value( txb: TransactionBlock, self: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::value`, arguments: [ obj(txb, self) ], }) }

export function destroyZero( txb: TransactionBlock, hiveGems: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::destroy_zero`, arguments: [ obj(txb, hiveGems) ], }) }

export interface JoinArgs { self: ObjectArg; hiveGems: ObjectArg }

export function join( txb: TransactionBlock, args: JoinArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::join`, arguments: [ obj(txb, args.self), obj(txb, args.hiveGems) ], }) }

export interface SplitArgs { self: ObjectArg; value: bigint | TransactionArgument }

export function split( txb: TransactionBlock, args: SplitArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::split`, arguments: [ obj(txb, args.self), pure(txb, args.value, `u64`) ], }) }

export function withdrawAll( txb: TransactionBlock, self: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::withdraw_all`, arguments: [ obj(txb, self) ], }) }

export function zero( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::zero`, arguments: [ ], }) }

export function burn( txb: TransactionBlock, hiveGems: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::burn`, arguments: [ obj(txb, hiveGems) ], }) }

export interface KraftHiveGemsArgs { mintCap: ObjectArg; amount: bigint | TransactionArgument }

export function kraftHiveGems( txb: TransactionBlock, args: KraftHiveGemsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::kraft_hive_gems`, arguments: [ obj(txb, args.mintCap), pure(txb, args.amount, `u64`) ], }) }

export function totalCapId( txb: TransactionBlock, self: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::total_cap_id`, arguments: [ obj(txb, self) ], }) }

export function totalKraftedByCap( txb: TransactionBlock, self: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::total_krafted_by_cap`, arguments: [ obj(txb, self) ], }) }
