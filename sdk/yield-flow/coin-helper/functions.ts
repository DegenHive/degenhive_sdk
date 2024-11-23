import { yieldflow } from ".."
const PUBLISHED_AT = yieldflow.PUBLISHED_AT
import { Option } from "../../source/0x1/option/structs";
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export interface CmpTypeNamesArgs { a: TransactionObjectInput; b: TransactionObjectInput }

export function cmpTypeNames(tx: Transaction, args: CmpTypeNamesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::cmp_type_names`, arguments: [obj(tx, args.a), obj(tx, args.b)], }) }

export interface CreateVectorArgs { a: (bigint | TransactionArgument | TransactionArgument | null); b: (bigint | TransactionArgument | TransactionArgument | null); c: (bigint | TransactionArgument | TransactionArgument | null); d: (bigint | TransactionArgument | TransactionArgument | null); e: (bigint | TransactionArgument | TransactionArgument | null) }

export function createVector(tx: Transaction, args: CreateVectorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::create_vector`, arguments: [pure(tx, args.a, `${Option.$typeName}<u64>`), pure(tx, args.b, `${Option.$typeName}<u64>`), pure(tx, args.c, `${Option.$typeName}<u64>`), pure(tx, args.d, `${Option.$typeName}<u64>`), pure(tx, args.e, `${Option.$typeName}<u64>`)], }) }

export interface DestroyOrTransferBalanceArgs { balance: TransactionObjectInput; recipient: string | TransactionArgument }

export function destroyOrTransferBalance(tx: Transaction, typeArg: string, args: DestroyOrTransferBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::destroy_or_transfer_balance`, typeArguments: [typeArg], arguments: [obj(tx, args.balance), pure(tx, args.recipient, `address`)], }) }

export function getAssetIndexAndAmount(tx: Transaction, assets: Array<bigint | TransactionArgument> | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::get_asset_index_and_amount`, arguments: [pure(tx, assets, `vector<u64>`)], }) }

export interface GetIndexAssetPrecision2poolArgs { xDecimals: number | TransactionArgument; yDecimals: number | TransactionArgument; index: bigint | TransactionArgument }

export function getIndexAssetPrecision2pool(tx: Transaction, args: GetIndexAssetPrecision2poolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::get_index_asset_precision2Pool`, arguments: [pure(tx, args.xDecimals, `u8`), pure(tx, args.yDecimals, `u8`), pure(tx, args.index, `u64`)], }) }

export function isSorted(tx: Transaction, typeArgs: [string, string],) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted`, typeArguments: typeArgs, arguments: [], }) }

export function isSorted2(tx: Transaction, typeArgs: [string, string],) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_2`, typeArguments: typeArgs, arguments: [], }) }

export function isSorted3(tx: Transaction, typeArgs: [string, string, string],) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_3`, typeArguments: typeArgs, arguments: [], }) }

export function isSorted4(tx: Transaction, typeArgs: [string, string, string, string],) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_4`, typeArguments: typeArgs, arguments: [], }) }

export function isSorted5(tx: Transaction, typeArgs: [string, string, string, string, string],) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_5`, typeArguments: typeArgs, arguments: [], }) }

export interface ProcessCoinBalancesProcessingForSwapArgs { coinInReserve: TransactionObjectInput; coinIn: TransactionObjectInput; offerAmount: bigint | TransactionArgument; coinOutReserve: TransactionObjectInput; coinOut: TransactionObjectInput; askAmount: bigint | TransactionArgument; feeChargedVal: bigint | TransactionArgument; beesFeePct: bigint | TransactionArgument }

export function processCoinBalancesProcessingForSwap(tx: Transaction, typeArgs: [string, string], args: ProcessCoinBalancesProcessingForSwapArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::process_coin_balances_processing_for_swap`, typeArguments: typeArgs, arguments: [obj(tx, args.coinInReserve), obj(tx, args.coinIn), pure(tx, args.offerAmount, `u64`), obj(tx, args.coinOutReserve), obj(tx, args.coinOut), pure(tx, args.askAmount, `u64`), pure(tx, args.feeChargedVal, `u64`), pure(tx, args.beesFeePct, `u64`)], }) }

export function u64ToAscii(tx: Transaction, num: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::u64_to_ascii`, arguments: [pure(tx, num, `u64`)], }) }

export function validCurvedCoins2Pool(tx: Transaction, typeArgs: [string, string], yieldFlow: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::valid_curved_coins_2_pool`, typeArguments: typeArgs, arguments: [obj(tx, yieldFlow)], }) }

export function validCurvedCoins3Pool(tx: Transaction, typeArgs: [string, string, string], yieldFlow: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::valid_curved_coins_3_pool`, typeArguments: typeArgs, arguments: [obj(tx, yieldFlow)], }) }
