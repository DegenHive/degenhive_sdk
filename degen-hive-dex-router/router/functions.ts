import { dex } from ".."
const PUBLISHED_AT = dex.PUBLISHED_AT
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export function init(tx: Transaction,) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::init`, arguments: [], }) }

export interface DestroyOrTransferBalanceArgs { balance: TransactionObjectInput; recipient: string | TransactionArgument }

export function destroyOrTransferBalance(tx: Transaction, typeArg: string, args: DestroyOrTransferBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::destroy_or_transfer_balance`, typeArguments: [typeArg], arguments: [obj(tx, args.balance), pure(tx, args.recipient, `address`)], }) }

export interface DeployerRegisterPoolBothCoinMetadataAvailableArgs { clock: TransactionObjectInput; cap: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function deployerRegisterPoolBothCoinMetadataAvailable(tx: Transaction, typeArgs: [string, string, string], args: DeployerRegisterPoolBothCoinMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::deployer_register_pool_both_coin_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.cap), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataX), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface DeployerRegisterPoolXMetadataAvailableArgs { clock: TransactionObjectInput; cap: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function deployerRegisterPoolXMetadataAvailable(tx: Transaction, typeArgs: [string, string, string], args: DeployerRegisterPoolXMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::deployer_register_pool_x_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.cap), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataX), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface DeployerRegisterPoolYMetadataAvailableArgs { clock: TransactionObjectInput; cap: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function deployerRegisterPoolYMetadataAvailable(tx: Transaction, typeArgs: [string, string, string], args: DeployerRegisterPoolYMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::deployer_register_pool_y_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.cap), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface AddLiquidityTo2poolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; coinXVal: bigint | TransactionArgument; coinY: TransactionObjectInput; coinYVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo2pool(tx: Transaction, typeArgs: [string, string, string], args: AddLiquidityTo2poolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_2pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), pure(tx, args.coinXVal, `u64`), obj(tx, args.coinY), pure(tx, args.coinYVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo2poolOnlyXArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; coinXVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo2poolOnlyX(tx: Transaction, typeArgs: [string, string, string], args: AddLiquidityTo2poolOnlyXArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_2pool_only_x`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), pure(tx, args.coinXVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo2poolOnlyXReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; coinXVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo2poolOnlyXReturnBalance(tx: Transaction, typeArgs: [string, string, string], args: AddLiquidityTo2poolOnlyXReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_2pool_only_x_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), pure(tx, args.coinXVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo2poolOnlyYArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinY: TransactionObjectInput; coinYVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo2poolOnlyY(tx: Transaction, typeArgs: [string, string, string], args: AddLiquidityTo2poolOnlyYArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_2pool_only_y`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinY), pure(tx, args.coinYVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo2poolOnlyYReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinY: TransactionObjectInput; coinYVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo2poolOnlyYReturnBalance(tx: Transaction, typeArgs: [string, string, string], args: AddLiquidityTo2poolOnlyYReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_2pool_only_y_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinY), pure(tx, args.coinYVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo2poolReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; coinXVal: bigint | TransactionArgument; coinY: TransactionObjectInput; coinYVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo2poolReturnBalance(tx: Transaction, typeArgs: [string, string, string], args: AddLiquidityTo2poolReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_2pool_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), pure(tx, args.coinXVal, `u64`), obj(tx, args.coinY), pure(tx, args.coinYVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo3poolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; coinXVal: bigint | TransactionArgument; coinY: TransactionObjectInput; coinYVal: bigint | TransactionArgument; coinZ: TransactionObjectInput; coinZVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo3pool(tx: Transaction, typeArgs: [string, string, string, string], args: AddLiquidityTo3poolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_3pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), pure(tx, args.coinXVal, `u64`), obj(tx, args.coinY), pure(tx, args.coinYVal, `u64`), obj(tx, args.coinZ), pure(tx, args.coinZVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo3poolOnlyXArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; coinXVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo3poolOnlyX(tx: Transaction, typeArgs: [string, string, string, string], args: AddLiquidityTo3poolOnlyXArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_3pool_only_x`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), pure(tx, args.coinXVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo3poolOnlyXReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; coinXVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo3poolOnlyXReturnBalance(tx: Transaction, typeArgs: [string, string, string, string], args: AddLiquidityTo3poolOnlyXReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_3pool_only_x_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), pure(tx, args.coinXVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo3poolOnlyYArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinY: TransactionObjectInput; coinYVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo3poolOnlyY(tx: Transaction, typeArgs: [string, string, string, string], args: AddLiquidityTo3poolOnlyYArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_3pool_only_y`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinY), pure(tx, args.coinYVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo3poolOnlyYReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinY: TransactionObjectInput; coinYVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo3poolOnlyYReturnBalance(tx: Transaction, typeArgs: [string, string, string, string], args: AddLiquidityTo3poolOnlyYReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_3pool_only_y_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinY), pure(tx, args.coinYVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo3poolOnlyZArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinZ: TransactionObjectInput; coinZVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo3poolOnlyZ(tx: Transaction, typeArgs: [string, string, string, string], args: AddLiquidityTo3poolOnlyZArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_3pool_only_z`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinZ), pure(tx, args.coinZVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo3poolOnlyZReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinZ: TransactionObjectInput; coinZVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo3poolOnlyZReturnBalance(tx: Transaction, typeArgs: [string, string, string, string], args: AddLiquidityTo3poolOnlyZReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_3pool_only_z_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinZ), pure(tx, args.coinZVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface AddLiquidityTo3poolReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; coinXVal: bigint | TransactionArgument; coinY: TransactionObjectInput; coinYVal: bigint | TransactionArgument; coinZ: TransactionObjectInput; coinZVal: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument }

export function addLiquidityTo3poolReturnBalance(tx: Transaction, typeArgs: [string, string, string, string], args: AddLiquidityTo3poolReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_liquidity_to_3pool_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), pure(tx, args.coinXVal, `u64`), obj(tx, args.coinY), pure(tx, args.coinYVal, `u64`), obj(tx, args.coinZ), pure(tx, args.coinZVal, `u64`), pure(tx, args.minLpMinted, `u64`)], }) }

export interface CreateThreeCoinVectorArgs { x: number | TransactionArgument; y: number | TransactionArgument; z: number | TransactionArgument }

export function createThreeCoinVector(tx: Transaction, args: CreateThreeCoinVectorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::create_three_coin_vector`, arguments: [pure(tx, args.x, `u8`), pure(tx, args.y, `u8`), pure(tx, args.z, `u8`)], }) }

export interface CreateTwoCoinVectorArgs { x: number | TransactionArgument; y: number | TransactionArgument }

export function createTwoCoinVector(tx: Transaction, args: CreateTwoCoinVectorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::create_two_coin_vector`, arguments: [pure(tx, args.x, `u8`), pure(tx, args.y, `u8`)], }) }

export interface GetSortedOrderThreeCoinArgs { yieldFlow: TransactionObjectInput; indexX: number | TransactionArgument; indexY: number | TransactionArgument; indexZ: number | TransactionArgument }

export function getSortedOrderThreeCoin(tx: Transaction, typeArgs: [string, string, string, string], args: GetSortedOrderThreeCoinArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::get_sorted_order_three_coin`, typeArguments: typeArgs, arguments: [obj(tx, args.yieldFlow), pure(tx, args.indexX, `u8`), pure(tx, args.indexY, `u8`), pure(tx, args.indexZ, `u8`)], }) }

export function getSortedOrderTwoCoin(tx: Transaction, typeArgs: [string, string, string], yieldFlow: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::get_sorted_order_two_coin`, typeArguments: typeArgs, arguments: [obj(tx, yieldFlow)], }) }

export interface GetThreeCoinOrderedWeightsAndPricesArgs { initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument; sortedOrder: Array<number | TransactionArgument> | TransactionArgument }

export function getThreeCoinOrderedWeightsAndPrices(tx: Transaction, typeArg: string, args: GetThreeCoinOrderedWeightsAndPricesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::get_three_coin_ordered_weights_and_prices`, typeArguments: [typeArg], arguments: [pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`), pure(tx, args.sortedOrder, `vector<u8>`)], }) }

export interface GetTwoCoinOrderedWeightsAndPricesArgs { initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function getTwoCoinOrderedWeightsAndPrices(tx: Transaction, typeArg: string, args: GetTwoCoinOrderedWeightsAndPricesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::get_two_coin_ordered_weights_and_prices`, typeArguments: [typeArg], arguments: [pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterThreePoolAllCoinMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; metadataY: TransactionObjectInput; metadataZ: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerThreePoolAllCoinMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterThreePoolAllCoinMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_three_pool_all_coin_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataX), obj(tx, args.metadataY), obj(tx, args.metadataZ), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterThreePoolNoMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerThreePoolNoMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterThreePoolNoMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_three_pool_no_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterThreePoolXMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerThreePoolXMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterThreePoolXMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_three_pool_x_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataX), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterThreePoolXYMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerThreePoolXYMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterThreePoolXYMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_three_pool_x_y_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataX), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterThreePoolXZMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; metadataZ: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerThreePoolXZMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterThreePoolXZMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_three_pool_x_z_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataX), obj(tx, args.metadataZ), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterThreePoolYMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerThreePoolYMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterThreePoolYMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_three_pool_y_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterThreePoolYZMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataY: TransactionObjectInput; metadataZ: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerThreePoolYZMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterThreePoolYZMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_three_pool_y_z_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataY), obj(tx, args.metadataZ), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterThreePoolZMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataZ: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerThreePoolZMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterThreePoolZMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_three_pool_z_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataZ), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterTwoPoolBothCoinMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerTwoPoolBothCoinMetadataAvailable(tx: Transaction, typeArgs: [string, string, string], args: RegisterTwoPoolBothCoinMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_two_pool_both_coin_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataX), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterTwoPoolNoMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerTwoPoolNoMetadataAvailable(tx: Transaction, typeArgs: [string, string, string], args: RegisterTwoPoolNoMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_two_pool_no_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterTwoPoolXMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerTwoPoolXMetadataAvailable(tx: Transaction, typeArgs: [string, string, string], args: RegisterTwoPoolXMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_two_pool_x_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataX), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RegisterTwoPoolYMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; fee: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function registerTwoPoolYMetadataAvailable(tx: Transaction, typeArgs: [string, string, string], args: RegisterTwoPoolYMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::register_two_pool_y_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.fee), obj(tx, args.feeCollector), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface RemoveLiquidityFrom2poolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; lpCoin: TransactionObjectInput; lpCoinVal: bigint | TransactionArgument; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument }

export function removeLiquidityFrom2pool(tx: Transaction, typeArgs: [string, string, string], args: RemoveLiquidityFrom2poolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::remove_liquidity_from_2pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.lpCoin), pure(tx, args.lpCoinVal, `u64`), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`)], }) }

export interface RemoveLiquidityFrom3poolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; lpCoin: TransactionObjectInput; lpCoinVal: bigint | TransactionArgument; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; coinZOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument }

export function removeLiquidityFrom3pool(tx: Transaction, typeArgs: [string, string, string, string], args: RemoveLiquidityFrom3poolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::remove_liquidity_from_3pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.lpCoin), pure(tx, args.lpCoinVal, `u64`), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.coinZOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`)], }) }

export interface Swap2poolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinXIn: TransactionObjectInput; xIn: bigint | TransactionArgument; xOutMin: bigint | TransactionArgument; coinYIn: TransactionObjectInput; yIn: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap2pool(tx: Transaction, typeArgs: [string, string, string], args: Swap2poolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap2pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinXIn), pure(tx, args.xIn, `u64`), pure(tx, args.xOutMin, `u64`), obj(tx, args.coinYIn), pure(tx, args.yIn, `u64`), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap2poolProvideXArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; tokenXIn: TransactionObjectInput; xInAmt: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap2poolProvideX(tx: Transaction, typeArgs: [string, string, string], args: Swap2poolProvideXArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap2pool_provide_x`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.tokenXIn), pure(tx, args.xInAmt, `u64`), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap2poolProvideXReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; tokenXIn: TransactionObjectInput; xInAmt: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap2poolProvideXReturnBalance(tx: Transaction, typeArgs: [string, string, string], args: Swap2poolProvideXReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap2pool_provide_x_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.tokenXIn), pure(tx, args.xInAmt, `u64`), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap2poolProvideYArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xOutMin: bigint | TransactionArgument; tokenYIn: TransactionObjectInput; yInAmt: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap2poolProvideY(tx: Transaction, typeArgs: [string, string, string], args: Swap2poolProvideYArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap2pool_provide_y`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), pure(tx, args.xOutMin, `u64`), obj(tx, args.tokenYIn), pure(tx, args.yInAmt, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap2poolProvideYReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xOutMin: bigint | TransactionArgument; tokenYIn: TransactionObjectInput; yInAmt: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap2poolProvideYReturnBalance(tx: Transaction, typeArgs: [string, string, string], args: Swap2poolProvideYReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap2pool_provide_y_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), pure(tx, args.xOutMin, `u64`), obj(tx, args.tokenYIn), pure(tx, args.yInAmt, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap2poolReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinXIn: TransactionObjectInput; xIn: bigint | TransactionArgument; xOutMin: bigint | TransactionArgument; coinYIn: TransactionObjectInput; yIn: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap2poolReturnBalance(tx: Transaction, typeArgs: [string, string, string], args: Swap2poolReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap2pool_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinXIn), pure(tx, args.xIn, `u64`), pure(tx, args.xOutMin, `u64`), obj(tx, args.coinYIn), pure(tx, args.yIn, `u64`), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap3poolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinXIn: TransactionObjectInput; xIn: bigint | TransactionArgument; xOutMin: bigint | TransactionArgument; coinYIn: TransactionObjectInput; yIn: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; coinZIn: TransactionObjectInput; zIn: bigint | TransactionArgument; zOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap3pool(tx: Transaction, typeArgs: [string, string, string, string], args: Swap3poolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap3pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinXIn), pure(tx, args.xIn, `u64`), pure(tx, args.xOutMin, `u64`), obj(tx, args.coinYIn), pure(tx, args.yIn, `u64`), pure(tx, args.yOutMin, `u64`), obj(tx, args.coinZIn), pure(tx, args.zIn, `u64`), pure(tx, args.zOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap3poolProvidexArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinXIn: TransactionObjectInput; xInAmt: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; zOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap3poolProvidex(tx: Transaction, typeArgs: [string, string, string, string], args: Swap3poolProvidexArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap3pool_provideX`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinXIn), pure(tx, args.xInAmt, `u64`), pure(tx, args.yOutMin, `u64`), pure(tx, args.zOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap3poolProvidexReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinXIn: TransactionObjectInput; xInAmt: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; zOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap3poolProvidexReturnBalance(tx: Transaction, typeArgs: [string, string, string, string], args: Swap3poolProvidexReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap3pool_provideX_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinXIn), pure(tx, args.xInAmt, `u64`), pure(tx, args.yOutMin, `u64`), pure(tx, args.zOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap3poolProvideyArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xOutMin: bigint | TransactionArgument; coinYIn: TransactionObjectInput; yInAmt: bigint | TransactionArgument; zOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap3poolProvidey(tx: Transaction, typeArgs: [string, string, string, string], args: Swap3poolProvideyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap3pool_provideY`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), pure(tx, args.xOutMin, `u64`), obj(tx, args.coinYIn), pure(tx, args.yInAmt, `u64`), pure(tx, args.zOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap3poolProvideyReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xOutMin: bigint | TransactionArgument; coinYIn: TransactionObjectInput; yInAmt: bigint | TransactionArgument; zOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap3poolProvideyReturnBalance(tx: Transaction, typeArgs: [string, string, string, string], args: Swap3poolProvideyReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap3pool_provideY_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), pure(tx, args.xOutMin, `u64`), obj(tx, args.coinYIn), pure(tx, args.yInAmt, `u64`), pure(tx, args.zOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap3poolProvidezArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xOutMin: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; coinZIn: TransactionObjectInput; zInAmt: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap3poolProvidez(tx: Transaction, typeArgs: [string, string, string, string], args: Swap3poolProvidezArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap3pool_provideZ`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), pure(tx, args.xOutMin, `u64`), pure(tx, args.yOutMin, `u64`), obj(tx, args.coinZIn), pure(tx, args.zInAmt, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap3poolProvidezReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xOutMin: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; coinZIn: TransactionObjectInput; zInAmt: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap3poolProvidezReturnBalance(tx: Transaction, typeArgs: [string, string, string, string], args: Swap3poolProvidezReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap3pool_provideZ_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), pure(tx, args.xOutMin, `u64`), pure(tx, args.yOutMin, `u64`), obj(tx, args.coinZIn), pure(tx, args.zInAmt, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface Swap3poolReturnBalanceArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinXIn: TransactionObjectInput; xIn: bigint | TransactionArgument; xOutMin: bigint | TransactionArgument; coinYIn: TransactionObjectInput; yIn: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; coinZIn: TransactionObjectInput; zIn: bigint | TransactionArgument; zOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap3poolReturnBalance(tx: Transaction, typeArgs: [string, string, string, string], args: Swap3poolReturnBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::swap3pool_return_balance`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinXIn), pure(tx, args.xIn, `u64`), pure(tx, args.xOutMin, `u64`), obj(tx, args.coinYIn), pure(tx, args.yIn, `u64`), pure(tx, args.yOutMin, `u64`), obj(tx, args.coinZIn), pure(tx, args.zIn, `u64`), pure(tx, args.zOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }
