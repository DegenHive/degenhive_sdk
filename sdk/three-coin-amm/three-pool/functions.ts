import { threecoin } from ".."
const PUBLISHED_AT = threecoin.PUBLISHED_AT
const THREE_POOL_REGISTRY = threecoin.THREE_POOL_REGISTRY
const CLOCK = threecoin.CLOCK
const YIELD_FLOW = threecoin.YIELD_FLOW
const YIELD_FARM = threecoin.YIELD_FARM
import { Option } from "../../source/0x1/option/structs";
import { ID } from "../../source/0x2/object/structs";
import { obj, pure } from "../../_framework/util";


import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export interface SwapArgs {  pool: TransactionObjectInput; xIn: TransactionObjectInput; xOutMin: bigint | TransactionArgument; yIn: TransactionObjectInput; yOutMin: bigint | TransactionArgument; zIn: TransactionObjectInput; zOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap(tx: Transaction, typeArgs: [string, string, string, string], args: SwapArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::swap`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.pool), obj(tx, args.xIn), pure(tx, args.xOutMin, `u64`), obj(tx, args.yIn), pure(tx, args.yOutMin, `u64`), obj(tx, args.zIn), pure(tx, args.zOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export function init(tx: Transaction,) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::init`, arguments: [], }) }

export interface UpdateWeightedConfigArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; newWeights: Array<bigint | TransactionArgument> | TransactionArgument; newExitFee: bigint | TransactionArgument }

export function updateWeightedConfig(tx: Transaction, typeArgs: [string, string, string, string], args: UpdateWeightedConfigArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_weighted_config`, typeArguments: typeArgs, arguments: [obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.newWeights, `vector<u64>`), pure(tx, args.newExitFee, `u64`)], }) }

export interface UpdateStableConfigArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; nextAmp: bigint | TransactionArgument; initAmpTime: bigint | TransactionArgument; nextAmpTime: bigint | TransactionArgument }

export function updateStableConfig(tx: Transaction, typeArgs: [string, string, string, string], args: UpdateStableConfigArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_stable_config`, typeArguments: typeArgs, arguments: [obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.nextAmp, `u64`), pure(tx, args.initAmpTime, `u64`), pure(tx, args.nextAmpTime, `u64`)], }) }

export interface AddLiquidityArgs {  pool: TransactionObjectInput; coinX: TransactionObjectInput; coinY: TransactionObjectInput; coinZ: TransactionObjectInput; minLpMinted: bigint | TransactionArgument }

export function addLiquidity(tx: Transaction, typeArgs: [string, string, string, string], args: AddLiquidityArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::add_liquidity`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.pool), obj(tx, args.coinX), obj(tx, args.coinY), obj(tx, args.coinZ), pure(tx, args.minLpMinted, `u64`)], }) }

export interface DangerousBurnLpCoinsArgs { pool: TransactionObjectInput; lpCoinsToBurn: TransactionObjectInput }

export function dangerousBurnLpCoins(tx: Transaction, typeArgs: [string, string, string, string], args: DangerousBurnLpCoinsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::dangerous_burn_lp_coins`, typeArguments: typeArgs, arguments: [obj(tx, args.pool), obj(tx, args.lpCoinsToBurn)], }) }

export interface FlashloanArgs {  pool: TransactionObjectInput; xLoan: bigint | TransactionArgument; yLoan: bigint | TransactionArgument; zLoan: bigint | TransactionArgument }

export function flashloan(tx: Transaction, typeArgs: [string, string, string, string], args: FlashloanArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::flashloan`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.pool), pure(tx, args.xLoan, `u64`), pure(tx, args.yLoan, `u64`), pure(tx, args.zLoan, `u64`)], }) }

export function getCollectedFee(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_collected_fee`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getDecimalForCoin(tx: Transaction, typeArg: string) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_decimal_for_coin`, typeArguments: [typeArg], arguments: [obj(tx, YIELD_FLOW)], }) }

export function getLiquidityPoolId(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_liquidity_pool_id`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolAddr(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_addr`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolCurvedConfigAmpGamma(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_curved_config_amp_gamma`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolCurvedConfigFee(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_curved_config_fee`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolCurvedConfigPrecision(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_curved_config_precision`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolCurvedConfigPricesInfo(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_curved_config_prices_info`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolCurvedConfigXcp(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_curved_config_xcp`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolFeeConfig(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_fee_config`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolId(tx: Transaction, typeArgs: [string, string, string, string] ) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_id`, typeArguments: typeArgs, arguments: [obj(tx, THREE_POOL_REGISTRY)], }) }

export function getPoolIdAsAddress(tx: Transaction, typeArgs: [string, string, string, string]) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_id_as_address`, typeArguments: typeArgs, arguments: [obj(tx, THREE_POOL_REGISTRY)], }) }

export function getPoolRegistry(tx: Transaction ) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_registry`, arguments: [obj(tx, THREE_POOL_REGISTRY)], }) }

export function getPoolReserves(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_reserves`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolReservesDecimals(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_reserves_decimals`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolStableConfig(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_stable_config`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolTotalSupply(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_total_supply`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolWeightedConfig(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_weighted_config`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolhiveAddr(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_poolhive_addr`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export interface GetScalingFactorArgs {  pool: TransactionObjectInput }

export function getScalingFactor(tx: Transaction, typeArgs: [string, string, string, string], args: GetScalingFactorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_scaling_factor`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.pool)], }) }

export interface ImbalancedExitArgs {  pool: TransactionObjectInput; lpCoinSupply: bigint | TransactionArgument; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; coinsToRefund: Array<bigint | TransactionArgument> | TransactionArgument; totalFeeBps: bigint | TransactionArgument }

export function imbalancedExit(tx: Transaction, typeArgs: [string, string, string, string], args: ImbalancedExitArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::imbalanced_exit`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.pool), pure(tx, args.lpCoinSupply, `u64`), pure(tx, args.existingLiquidity, `vector<u64>`), pure(tx, args.coinsToRefund, `vector<u64>`), pure(tx, args.totalFeeBps, `u64`)], }) }

export function incrementLiquidityPool(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::increment_liquidity_pool`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function incrementPoolRegistry(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::increment_pool_registry`, arguments: [obj(tx, THREE_POOL_REGISTRY)], }) }

export function initializePoolRegistry(tx: Transaction, feeClaimCap: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::initialize_pool_registry`, arguments: [obj(tx, feeClaimCap)], }) }

export interface InternalAddLiquidityArgs {  pool: TransactionObjectInput; coinX: TransactionObjectInput; coinY: TransactionObjectInput; coinZ: TransactionObjectInput }

export function internalAddLiquidity(tx: Transaction, typeArgs: [string, string, string, string], args: InternalAddLiquidityArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::internal_add_liquidity`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.pool), obj(tx, args.coinX), obj(tx, args.coinY), obj(tx, args.coinZ)], }) }

export interface InternalRegisterPoolArgs {    suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; decimalX: number | TransactionArgument; decimalY: number | TransactionArgument; decimalZ: number | TransactionArgument; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function internalRegisterPool(tx: Transaction, typeArgs: [string, string, string, string], args: InternalRegisterPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::internal_register_pool`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, THREE_POOL_REGISTRY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), pure(tx, args.decimalX, `u8`), pure(tx, args.decimalY, `u8`), pure(tx, args.decimalZ, `u8`), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`)], }) }

export interface InternalRemoveLiquidityArgs {  pool: TransactionObjectInput; lpCoinsProvidedVal: bigint | TransactionArgument; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; coinZOutVal: bigint | TransactionArgument }

export function internalRemoveLiquidity(tx: Transaction, typeArgs: [string, string, string, string], args: InternalRemoveLiquidityArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::internal_remove_liquidity`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.pool), pure(tx, args.lpCoinsProvidedVal, `u64`), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.coinZOutVal, `u64`)], }) }

export function isPoolRegistered(tx: Transaction, typeArgs: [string, string, string, string]) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::is_pool_registered`, typeArguments: typeArgs, arguments: [obj(tx, THREE_POOL_REGISTRY)], }) }

export interface PayFlashloanArgs { pool: TransactionObjectInput; xIn: TransactionObjectInput; yIn: TransactionObjectInput; zIn: TransactionObjectInput; loan: TransactionObjectInput }

export function payFlashloan(tx: Transaction, typeArgs: [string, string, string, string], args: PayFlashloanArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::pay_flashloan`, typeArguments: typeArgs, arguments: [obj(tx, args.pool), obj(tx, args.xIn), obj(tx, args.yIn), obj(tx, args.zIn), obj(tx, args.loan)], }) }

export interface QueryAcrossAllPoolsArgs {  limit: bigint | TransactionArgument }

export function queryAcrossAllPools(tx: Transaction, typeArgs: [string, string, string, string], args: QueryAcrossAllPoolsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::query_across_all_pools`, typeArguments: typeArgs, arguments: [obj(tx, THREE_POOL_REGISTRY), pure(tx, args.limit, `u64`)], }) }

export function queryFirstPool(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::query_first_pool`, arguments: [obj(tx, THREE_POOL_REGISTRY)], }) }

export interface QuerySwapArgs {  pool: TransactionObjectInput; xIn: bigint | TransactionArgument; xOutMin: bigint | TransactionArgument; yIn: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; zIn: bigint | TransactionArgument; zOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function querySwap(tx: Transaction, typeArgs: [string, string, string, string], args: QuerySwapArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::query_swap`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.pool), pure(tx, args.xIn, `u64`), pure(tx, args.xOutMin, `u64`), pure(tx, args.yIn, `u64`), pure(tx, args.yOutMin, `u64`), pure(tx, args.zIn, `u64`), pure(tx, args.zOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface RegisterPoolNoMetadataAvailableArgs {    suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolNoMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterPoolNoMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_no_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, THREE_POOL_REGISTRY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`)], }) }

export interface RegisterPoolXMetadataAvailableArgs {    suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolXMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterPoolXMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_x_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, THREE_POOL_REGISTRY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataX), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`)], }) }

export interface RegisterPoolYMetadataAvailableArgs {    suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolYMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterPoolYMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_y_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, THREE_POOL_REGISTRY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`)], }) }

export interface RegistryAddArgs {   decimalX: number | TransactionArgument; decimalY: number | TransactionArgument; decimalZ: number | TransactionArgument; poolId: string | TransactionArgument }

export function registryAdd(tx: Transaction, typeArgs: [string, string, string, string], args: RegistryAddArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::registry_add`, typeArguments: typeArgs, arguments: [obj(tx, THREE_POOL_REGISTRY), obj(tx, YIELD_FLOW), pure(tx, args.decimalX, `u8`), pure(tx, args.decimalY, `u8`), pure(tx, args.decimalZ, `u8`), pure(tx, args.poolId, `${ID.$typeName}`)], }) }

export interface RemoveLiquidityArgs {  pool: TransactionObjectInput; lpCoins: TransactionObjectInput; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; coinZOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument }

export function removeLiquidity(tx: Transaction, typeArgs: [string, string, string, string], args: RemoveLiquidityArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::remove_liquidity`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.pool), obj(tx, args.lpCoins), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.coinZOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`)], }) }

export interface SetPoolHiveAddrArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; poolHiveAddr: string | TransactionArgument }

export function setPoolHiveAddr(tx: Transaction, typeArgs: [string, string, string, string], args: SetPoolHiveAddrArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::set_pool_hive_addr`, typeArguments: typeArgs, arguments: [obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.poolHiveAddr, `address`)], }) }

export interface UpdateCumulativePricesArgs {  pool: TransactionObjectInput }

export function updateCumulativePrices(tx: Transaction, typeArgs: [string, string, string, string], args: UpdateCumulativePricesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_cumulative_prices`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.pool)], }) }

export interface UpdateCurvedAAndGammaArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; initAGammaTime: bigint | TransactionArgument; nextAmp: bigint | TransactionArgument; nextGamma: bigint | TransactionArgument; futureAGammaTime: bigint | TransactionArgument }

export function updateCurvedAAndGamma(tx: Transaction, typeArgs: [string, string, string, string], args: UpdateCurvedAAndGammaArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_curved_A_and_gamma`, typeArguments: typeArgs, arguments: [obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.initAGammaTime, `u64`), pure(tx, args.nextAmp, `u64`), pure(tx, args.nextGamma, `u256`), pure(tx, args.futureAGammaTime, `u64`)], }) }

export interface UpdateCurvedConfigFeeParamsArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; newMidFee: bigint | TransactionArgument; newOutFee: bigint | TransactionArgument; newFeeGamma: bigint | TransactionArgument; newMaHalfTime: bigint | TransactionArgument; newAllowedExtraProfit: bigint | TransactionArgument; newAdjustmentStep: bigint | TransactionArgument }

export function updateCurvedConfigFeeParams(tx: Transaction, typeArgs: [string, string, string, string], args: UpdateCurvedConfigFeeParamsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_curved_config_fee_params`, typeArguments: typeArgs, arguments: [obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.newMidFee, `u64`), pure(tx, args.newOutFee, `u64`), pure(tx, args.newFeeGamma, `u64`), pure(tx, args.newMaHalfTime, `u64`), pure(tx, args.newAllowedExtraProfit, `u64`), pure(tx, args.newAdjustmentStep, `u64`)], }) }

export interface UpdateFeeForPoolArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; totalFeeBps: bigint | TransactionArgument; beesFeePct: bigint | TransactionArgument }

export function updateFeeForPool(tx: Transaction, typeArgs: [string, string, string, string], args: UpdateFeeForPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_fee_for_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.totalFeeBps, `u64`), pure(tx, args.beesFeePct, `u64`)], }) }

export interface UpdateKraftFeeArgs {  dragonDaoCap: TransactionObjectInput; kraftFee: bigint | TransactionArgument }

export function updateKraftFee(tx: Transaction, args: UpdateKraftFeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_kraft_fee`, arguments: [obj(tx, THREE_POOL_REGISTRY), obj(tx, args.dragonDaoCap), pure(tx, args.kraftFee, `u64`)], }) }

export function getPoolCumulativePricesXY(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_cumulative_prices_x_y`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolCumulativePricesXZ(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_cumulative_prices_x_z`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export function getPoolCumulativePricesYZ(tx: Transaction, typeArgs: [string, string, string, string], pool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_cumulative_prices_y_z`, typeArguments: typeArgs, arguments: [obj(tx, pool)], }) }

export interface HandleSuiYZPoolFeeArgs {   pool: TransactionObjectInput;  hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function handleSuiYZPoolFee(tx: Transaction, typeArgs: [string, string, string], args: HandleSuiYZPoolFeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_sui_y_z_pool_fee`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, args.pool), obj(tx, YIELD_FARM), obj(tx, args.hivePool), obj(tx, args.honeyPool)], }) }

export interface HandleXSuiZPoolFeeArgs {   pool: TransactionObjectInput;  hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function handleXSuiZPoolFee(tx: Transaction, typeArgs: [string, string, string], args: HandleXSuiZPoolFeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_sui_z_pool_fee`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, args.pool), obj(tx, YIELD_FARM), obj(tx, args.hivePool), obj(tx, args.honeyPool)], }) }

export interface HandleXYSuiPoolFeeArgs {   pool: TransactionObjectInput;  hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function handleXYSuiPoolFee(tx: Transaction, typeArgs: [string, string, string], args: HandleXYSuiPoolFeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_sui_pool_fee`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, args.pool), obj(tx, YIELD_FARM), obj(tx, args.hivePool), obj(tx, args.honeyPool)], }) }

export interface HandleXYZPoolViaSuiXHopArgs {   pool: TransactionObjectInput; suiXPool: TransactionObjectInput;  hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function handleXYZPoolViaSuiXHop(tx: Transaction, typeArgs: [string, string, string, string, string], args: HandleXYZPoolViaSuiXHopArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_sui_x_hop`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, args.pool), obj(tx, args.suiXPool), obj(tx, YIELD_FARM), obj(tx, args.hivePool), obj(tx, args.honeyPool)], }) }

export interface HandleXYZPoolViaSuiYHopArgs {   pool: TransactionObjectInput; suiYPool: TransactionObjectInput;  hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function handleXYZPoolViaSuiYHop(tx: Transaction, typeArgs: [string, string, string, string, string], args: HandleXYZPoolViaSuiYHopArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_sui_y_hop`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, args.pool), obj(tx, args.suiYPool), obj(tx, YIELD_FARM), obj(tx, args.hivePool), obj(tx, args.honeyPool)], }) }

export interface HandleXYZPoolViaSuiZHopArgs {   pool: TransactionObjectInput; suiZPool: TransactionObjectInput;  hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function handleXYZPoolViaSuiZHop(tx: Transaction, typeArgs: [string, string, string, string, string], args: HandleXYZPoolViaSuiZHopArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_sui_z_hop`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, args.pool), obj(tx, args.suiZPool), obj(tx, YIELD_FARM), obj(tx, args.hivePool), obj(tx, args.honeyPool)], }) }

export interface HandleXYZPoolViaXSuiHopArgs {   pool: TransactionObjectInput; xSuiPool: TransactionObjectInput;  hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function handleXYZPoolViaXSuiHop(tx: Transaction, typeArgs: [string, string, string, string, string], args: HandleXYZPoolViaXSuiHopArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_x_sui_hop`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, args.pool), obj(tx, args.xSuiPool), obj(tx, YIELD_FARM), obj(tx, args.hivePool), obj(tx, args.honeyPool)], }) }

export interface HandleXYZPoolViaYSuiHopArgs {   pool: TransactionObjectInput; ySuiPool: TransactionObjectInput;  hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function handleXYZPoolViaYSuiHop(tx: Transaction, typeArgs: [string, string, string, string, string], args: HandleXYZPoolViaYSuiHopArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_y_sui_hop`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, args.pool), obj(tx, args.ySuiPool), obj(tx, YIELD_FARM), obj(tx, args.hivePool), obj(tx, args.honeyPool)], }) }

export interface HandleXYZPoolViaZSuiHopArgs {   pool: TransactionObjectInput; zSuiPool: TransactionObjectInput;  hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function handleXYZPoolViaZSuiHop(tx: Transaction, typeArgs: [string, string, string, string, string], args: HandleXYZPoolViaZSuiHopArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_z_sui_hop`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, args.pool), obj(tx, args.zSuiPool), obj(tx, YIELD_FARM), obj(tx, args.hivePool), obj(tx, args.honeyPool)], }) }

export interface RegisterPoolAllCoinMetadataAvailableArgs {    suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; metadataY: TransactionObjectInput; metadataZ: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolAllCoinMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterPoolAllCoinMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_all_coin_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, THREE_POOL_REGISTRY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataX), obj(tx, args.metadataY), obj(tx, args.metadataZ), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`)], }) }

export interface RegisterPoolXYMetadataAvailableArgs {    suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolXYMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterPoolXYMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_x_y_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, THREE_POOL_REGISTRY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataX), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`)], }) }

export interface RegisterPoolXZMetadataAvailableArgs {    suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; metadataZ: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolXZMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterPoolXZMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_x_z_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, THREE_POOL_REGISTRY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataX), obj(tx, args.metadataZ), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`)], }) }

export interface RegisterPoolYZMetadataAvailableArgs {    suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataY: TransactionObjectInput; metadataZ: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolYZMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterPoolYZMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_y_z_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, THREE_POOL_REGISTRY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataY), obj(tx, args.metadataZ), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`)], }) }

export interface RegisterPoolZMetadataAvailableArgs {    suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataZ: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolZMetadataAvailable(tx: Transaction, typeArgs: [string, string, string, string], args: RegisterPoolZMetadataAvailableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_z_metadata_available`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FLOW), obj(tx, THREE_POOL_REGISTRY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataZ), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`)], }) }
