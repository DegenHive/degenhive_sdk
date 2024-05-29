import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface CmpTypeNamesArgs { a: ObjectArg; b: ObjectArg }

export function cmpTypeNames( txb: TransactionBlock, args: CmpTypeNamesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::cmp_type_names`, arguments: [ obj(txb, args.a), obj(txb, args.b) ], }) }

export interface CreateVectorArgs { a: (bigint | TransactionArgument | TransactionArgument | null); b: (bigint | TransactionArgument | TransactionArgument | null); c: (bigint | TransactionArgument | TransactionArgument | null); d: (bigint | TransactionArgument | TransactionArgument | null); e: (bigint | TransactionArgument | TransactionArgument | null) }

export function createVector( txb: TransactionBlock, args: CreateVectorArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::create_vector`, arguments: [ pure(txb, args.a, `0x1::option::Option<u64>`), pure(txb, args.b, `0x1::option::Option<u64>`), pure(txb, args.c, `0x1::option::Option<u64>`), pure(txb, args.d, `0x1::option::Option<u64>`), pure(txb, args.e, `0x1::option::Option<u64>`) ], }) }

export function getAssetIndexAndAmount( txb: TransactionBlock, assets: Array<bigint | TransactionArgument> | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::get_asset_index_and_amount`, arguments: [ pure(txb, assets, `vector<u64>`) ], }) }

export interface GetIndexAssetPrecision2poolArgs { xDecimals: number | TransactionArgument; yDecimals: number | TransactionArgument; index: bigint | TransactionArgument }

export function getIndexAssetPrecision2pool( txb: TransactionBlock, args: GetIndexAssetPrecision2poolArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::get_index_asset_precision2Pool`, arguments: [ pure(txb, args.xDecimals, `u8`), pure(txb, args.yDecimals, `u8`), pure(txb, args.index, `u64`) ], }) }

export interface GetIndexAssetPrecision3poolArgs { xDecimals: number | TransactionArgument; yDecimals: number | TransactionArgument; zDecimals: number | TransactionArgument; index: bigint | TransactionArgument }

export function getIndexAssetPrecision3pool( txb: TransactionBlock, args: GetIndexAssetPrecision3poolArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::get_index_asset_precision3Pool`, arguments: [ pure(txb, args.xDecimals, `u8`), pure(txb, args.yDecimals, `u8`), pure(txb, args.zDecimals, `u8`), pure(txb, args.index, `u64`) ], }) }

export function isSorted( txb: TransactionBlock, typeArgs: [string, string], ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted`, typeArguments: typeArgs, arguments: [ ], }) }

export function isSorted2( txb: TransactionBlock, typeArgs: [string, string], ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_2`, typeArguments: typeArgs, arguments: [ ], }) }

export function isSorted3( txb: TransactionBlock, typeArgs: [string, string, string], ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_3`, typeArguments: typeArgs, arguments: [ ], }) }

export function isSorted4( txb: TransactionBlock, typeArgs: [string, string, string, string], ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_4`, typeArguments: typeArgs, arguments: [ ], }) }

export function isSorted5( txb: TransactionBlock, typeArgs: [string, string, string, string, string], ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_5`, typeArguments: typeArgs, arguments: [ ], }) }

export interface ProcessCoinBalancesProcessingForSwapArgs { coinInReserve: ObjectArg; coinIn: ObjectArg; offerAmount: bigint | TransactionArgument; coinOutReserve: ObjectArg; coinOut: ObjectArg; askAmount: bigint | TransactionArgument; feeChargedVal: bigint | TransactionArgument; hiveFeePercent: bigint | TransactionArgument }

export function processCoinBalancesProcessingForSwap( txb: TransactionBlock, typeArgs: [string, string], args: ProcessCoinBalancesProcessingForSwapArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::process_coin_balances_processing_for_swap`, typeArguments: typeArgs, arguments: [ obj(txb, args.coinInReserve), obj(txb, args.coinIn), pure(txb, args.offerAmount, `u64`), obj(txb, args.coinOutReserve), obj(txb, args.coinOut), pure(txb, args.askAmount, `u64`), pure(txb, args.feeChargedVal, `u64`), pure(txb, args.hiveFeePercent, `u64`) ], }) }

export function u64ToAscii( txb: TransactionBlock, num: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::u64_to_ascii`, arguments: [ pure(txb, num, `u64`) ], }) }

export function validCurvedCoins2Pool( txb: TransactionBlock, typeArgs: [string, string], config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::valid_curved_coins_2_pool`, typeArguments: typeArgs, arguments: [ obj(txb, config) ], }) }

export function validCurvedCoins3Pool( txb: TransactionBlock, typeArgs: [string, string, string], config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::coin_helper::valid_curved_coins_3_pool`, typeArguments: typeArgs, arguments: [ obj(txb, config) ], }) }
