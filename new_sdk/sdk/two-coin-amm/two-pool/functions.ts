import {PUBLISHED_AT} from "..";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface SwapArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xIn: TransactionObjectInput; xOutMin: bigint | TransactionArgument; yIn: TransactionObjectInput; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swap( tx: Transaction, typeArgs: [string, string, string], args: SwapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::swap`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.xIn), pure(tx, args.xOutMin, `u64`), obj(tx, args.yIn), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`) ], }) }

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::init`, arguments: [ ], }) }

export interface UpdateInitialPricesArgs { cap: TransactionObjectInput; pool: TransactionObjectInput; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument }

export function updateInitialPrices( tx: Transaction, typeArgs: [string, string, string], args: UpdateInitialPricesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_initial_prices`, typeArguments: typeArgs, arguments: [ obj(tx, args.cap), obj(tx, args.pool), pure(tx, args.initialPrices, `vector<u256>`) ], }) }

export interface UpdateWeightedConfigArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; newWeights: Array<bigint | TransactionArgument> | TransactionArgument; newExitFee: bigint | TransactionArgument }

export function updateWeightedConfig( tx: Transaction, typeArgs: [string, string, string], args: UpdateWeightedConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_weighted_config`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.newWeights, `vector<u64>`), pure(tx, args.newExitFee, `u64`) ], }) }

export interface UpdateStableConfigArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; nextAmp: bigint | TransactionArgument; initAmpTime: bigint | TransactionArgument; nextAmpTime: bigint | TransactionArgument }

export function updateStableConfig( tx: Transaction, typeArgs: [string, string, string], args: UpdateStableConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_stable_config`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.nextAmp, `u64`), pure(tx, args.initAmpTime, `u64`), pure(tx, args.nextAmpTime, `u64`) ], }) }

export interface AddLiquidityArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; coinY: TransactionObjectInput; minLpMinted: bigint | TransactionArgument }

export function addLiquidity( tx: Transaction, typeArgs: [string, string, string], args: AddLiquidityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::add_liquidity`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), obj(tx, args.coinY), pure(tx, args.minLpMinted, `u64`) ], }) }

export interface AddSuiForBuybackArgs { poolRegistry: TransactionObjectInput; suiBalance: TransactionObjectInput }

export function addSuiForBuyback( tx: Transaction, args: AddSuiForBuybackArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::add_sui_for_buyback`, arguments: [ obj(tx, args.poolRegistry), obj(tx, args.suiBalance) ], }) }

export interface ClaimFeesOneHopViaSuiXPoolArgs { clock: TransactionObjectInput; xYPool: TransactionObjectInput; suiXPool: TransactionObjectInput; yieldFlow: TransactionObjectInput; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput; yieldFarm: TransactionObjectInput }

export function claimFeesOneHopViaSuiXPool( tx: Transaction, typeArgs: [string, string, string, string], args: ClaimFeesOneHopViaSuiXPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_one_hop_via_sui_x_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.xYPool), obj(tx, args.suiXPool), obj(tx, args.yieldFlow), obj(tx, args.hivePool), obj(tx, args.honeyPool), obj(tx, args.yieldFarm) ], }) }

export interface ClaimFeesOneHopViaSuiYPoolArgs { clock: TransactionObjectInput; xYPool: TransactionObjectInput; suiYPool: TransactionObjectInput; yieldFlow: TransactionObjectInput; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput; yieldFarm: TransactionObjectInput }

export function claimFeesOneHopViaSuiYPool( tx: Transaction, typeArgs: [string, string, string, string], args: ClaimFeesOneHopViaSuiYPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_one_hop_via_sui_y_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.xYPool), obj(tx, args.suiYPool), obj(tx, args.yieldFlow), obj(tx, args.hivePool), obj(tx, args.honeyPool), obj(tx, args.yieldFarm) ], }) }

export interface ClaimFeesOneHopViaXSuiPoolArgs { clock: TransactionObjectInput; xYPool: TransactionObjectInput; xSuiPool: TransactionObjectInput; yieldFlow: TransactionObjectInput; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput; yieldFarm: TransactionObjectInput }

export function claimFeesOneHopViaXSuiPool( tx: Transaction, typeArgs: [string, string, string, string], args: ClaimFeesOneHopViaXSuiPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_one_hop_via_x_sui_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.xYPool), obj(tx, args.xSuiPool), obj(tx, args.yieldFlow), obj(tx, args.hivePool), obj(tx, args.honeyPool), obj(tx, args.yieldFarm) ], }) }

export interface ClaimFeesOneHopViaYSuiPoolArgs { clock: TransactionObjectInput; xYPool: TransactionObjectInput; ySuiPool: TransactionObjectInput; yieldFlow: TransactionObjectInput; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput; yieldFarm: TransactionObjectInput }

export function claimFeesOneHopViaYSuiPool( tx: Transaction, typeArgs: [string, string, string, string], args: ClaimFeesOneHopViaYSuiPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_one_hop_via_y_sui_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.xYPool), obj(tx, args.ySuiPool), obj(tx, args.yieldFlow), obj(tx, args.hivePool), obj(tx, args.honeyPool), obj(tx, args.yieldFarm) ], }) }

export interface ClaimFeesSuiHivePoolArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; yieldFarm: TransactionObjectInput; suiHivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function claimFeesSuiHivePool( tx: Transaction, args: ClaimFeesSuiHivePoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_sui_hive_pool`, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.yieldFarm), obj(tx, args.suiHivePool), obj(tx, args.honeyPool) ], }) }

export interface ClaimFeesSuiHoneyPoolArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; yieldFarm: TransactionObjectInput; hivePool: TransactionObjectInput; suiHoneyPool: TransactionObjectInput }

export function claimFeesSuiHoneyPool( tx: Transaction, args: ClaimFeesSuiHoneyPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_sui_honey_pool`, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.yieldFarm), obj(tx, args.hivePool), obj(tx, args.suiHoneyPool) ], }) }

export interface ClaimFeesSuiXPoolArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; suiXPool: TransactionObjectInput; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput; yieldFarm: TransactionObjectInput }

export function claimFeesSuiXPool( tx: Transaction, typeArgs: [string, string], args: ClaimFeesSuiXPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_sui_x_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.suiXPool), obj(tx, args.hivePool), obj(tx, args.honeyPool), obj(tx, args.yieldFarm) ], }) }

export interface ClaimFeesXSuiPoolArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; yieldFarm: TransactionObjectInput; xSuiPool: TransactionObjectInput; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function claimFeesXSuiPool( tx: Transaction, typeArgs: [string, string], args: ClaimFeesXSuiPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_x_sui_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.yieldFarm), obj(tx, args.xSuiPool), obj(tx, args.hivePool), obj(tx, args.honeyPool) ], }) }

export interface ClaimYieldFromQueenMakerArgs { clock: TransactionObjectInput; registry: TransactionObjectInput; beesManager: TransactionObjectInput; queenMaker: TransactionObjectInput; suiHivePool: TransactionObjectInput; suiHoneyPool: TransactionObjectInput; thirdPool: TransactionObjectInput; suiFeeCollector: TransactionObjectInput }

export function claimYieldFromQueenMaker( tx: Transaction, typeArgs: [string, string], args: ClaimYieldFromQueenMakerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_yield_from_queen_maker`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.registry), obj(tx, args.beesManager), obj(tx, args.queenMaker), obj(tx, args.suiHivePool), obj(tx, args.suiHoneyPool), obj(tx, args.thirdPool), obj(tx, args.suiFeeCollector) ], }) }

export interface ConvertSuiFeesToHiveAndHoneyArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; suiBalance: TransactionObjectInput; poolAddr: string | TransactionArgument; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput; yieldFarm: TransactionObjectInput }

export function convertSuiFeesToHiveAndHoney( tx: Transaction, args: ConvertSuiFeesToHiveAndHoneyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::convert_sui_fees_to_hive_and_honey`, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.suiBalance), pure(tx, args.poolAddr, `address`), obj(tx, args.hivePool), obj(tx, args.honeyPool), obj(tx, args.yieldFarm) ], }) }

export interface DangerousBurnLpCoinsArgs { pool: TransactionObjectInput; lpCoinsToBurn: TransactionObjectInput }

export function dangerousBurnLpCoins( tx: Transaction, typeArgs: [string, string, string], args: DangerousBurnLpCoinsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::dangerous_burn_lp_coins`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.lpCoinsToBurn) ], }) }

export interface DeployerRegisterPoolBothCoinMetadataAvailableArgs { clock: TransactionObjectInput; cap: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function deployerRegisterPoolBothCoinMetadataAvailable( tx: Transaction, typeArgs: [string, string, string], args: DeployerRegisterPoolBothCoinMetadataAvailableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_both_coin_metadata_available`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.cap), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataX), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`) ], }) }

export interface DeployerRegisterPoolXMetadataAvailableArgs { clock: TransactionObjectInput; cap: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function deployerRegisterPoolXMetadataAvailable( tx: Transaction, typeArgs: [string, string, string], args: DeployerRegisterPoolXMetadataAvailableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_x_metadata_available`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.cap), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataX), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`) ], }) }

export interface DeployerRegisterPoolYMetadataAvailableArgs { clock: TransactionObjectInput; cap: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function deployerRegisterPoolYMetadataAvailable( tx: Transaction, typeArgs: [string, string, string], args: DeployerRegisterPoolYMetadataAvailableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_y_metadata_available`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.cap), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`) ], }) }

export interface FlashloanArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xLoan: bigint | TransactionArgument; yLoan: bigint | TransactionArgument }

export function flashloan( tx: Transaction, typeArgs: [string, string, string], args: FlashloanArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::flashloan`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), pure(tx, args.xLoan, `u64`), pure(tx, args.yLoan, `u64`) ], }) }

export function getCollectedFee( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_collected_fee`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getDecimalForCoin( tx: Transaction, typeArg: string, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_decimal_for_coin`, typeArguments: [typeArg], arguments: [ obj(tx, yieldFlow) ], }) }

export function getKraftFee( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_kraft_fee`, arguments: [ obj(tx, registry) ], }) }

export function getLiquidityPoolId( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_liquidity_pool_id`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolAddr( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_addr`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolCumulativePrices( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_cumulative_prices`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolCurvedConfigAmpGamma( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_amp_gamma`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolCurvedConfigFee( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_fee`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolCurvedConfigPrecision( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_precision`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolCurvedConfigPricesInfo( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_prices_info`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolCurvedConfigXcp( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_xcp`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolFeeConfig( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_fee_config`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolId( tx: Transaction, typeArgs: [string, string, string], registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_id`, typeArguments: typeArgs, arguments: [ obj(tx, registry) ], }) }

export function getPoolIdAsAddress( tx: Transaction, typeArgs: [string, string, string], registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_id_as_address`, typeArguments: typeArgs, arguments: [ obj(tx, registry) ], }) }

export function getPoolRegistry( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_registry`, arguments: [ obj(tx, registry) ], }) }

export function getPoolReserves( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_reserves`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolReservesDecimals( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_reserves_decimals`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolStableConfig( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_stable_config`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolTotalSupply( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_total_supply`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolWeightedConfig( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_weighted_config`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolhiveAddr( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_poolhive_addr`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface GetScalingFactorArgs { clock: TransactionObjectInput; pool: TransactionObjectInput }

export function getScalingFactor( tx: Transaction, typeArgs: [string, string, string], args: GetScalingFactorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_scaling_factor`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool) ], }) }

export function getSuiHivePoolForPol( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_sui_hive_pool_for_pol`, arguments: [ obj(tx, registry) ], }) }

export interface HarvestHiveFeeArgs { registry: TransactionObjectInput; feeCollector: TransactionObjectInput; yieldFarm: TransactionObjectInput }

export function harvestHiveFee( tx: Transaction, args: HarvestHiveFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::harvest_hive_fee`, arguments: [ obj(tx, args.registry), obj(tx, args.feeCollector), obj(tx, args.yieldFarm) ], }) }

export interface HarvestHoneyFeeArgs { registry: TransactionObjectInput; feeCollector: TransactionObjectInput; yieldFarm: TransactionObjectInput }

export function harvestHoneyFee( tx: Transaction, args: HarvestHoneyFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::harvest_honey_fee`, arguments: [ obj(tx, args.registry), obj(tx, args.feeCollector), obj(tx, args.yieldFarm) ], }) }

export interface ImbalancedExitArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; lpCoinSupply: bigint | TransactionArgument; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; coinsToRefund: Array<bigint | TransactionArgument> | TransactionArgument; totalFeeBps: bigint | TransactionArgument }

export function imbalancedExit( tx: Transaction, typeArgs: [string, string, string], args: ImbalancedExitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::imbalanced_exit`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), pure(tx, args.lpCoinSupply, `u64`), pure(tx, args.existingLiquidity, `vector<u64>`), pure(tx, args.coinsToRefund, `vector<u64>`), pure(tx, args.totalFeeBps, `u64`) ], }) }

export function incrementLiquidityPool( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::increment_liquidity_pool`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function incrementPoolRegistry( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::increment_pool_registry`, arguments: [ obj(tx, registry) ], }) }

export interface InitializePoolRegistryArgs { feeClaimCap: TransactionObjectInput; initHivePolPct: bigint | TransactionArgument; initHoneyPolPct: bigint | TransactionArgument }

export function initializePoolRegistry( tx: Transaction, args: InitializePoolRegistryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::initialize_pool_registry`, arguments: [ obj(tx, args.feeClaimCap), pure(tx, args.initHivePolPct, `u64`), pure(tx, args.initHoneyPolPct, `u64`) ], }) }

export interface InternalAddLiquidityArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; coinY: TransactionObjectInput }

export function internalAddLiquidity( tx: Transaction, typeArgs: [string, string, string], args: InternalAddLiquidityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::internal_add_liquidity`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), obj(tx, args.coinY) ], }) }

export interface InternalRegisterPoolArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; decimalX: number | TransactionArgument; decimalY: number | TransactionArgument; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); isMemeWithTax: boolean | TransactionArgument }

export function internalRegisterPool( tx: Transaction, typeArgs: [string, string, string], args: InternalRegisterPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::internal_register_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.suiBalance), obj(tx, args.feeCollector), pure(tx, args.decimalX, `u8`), pure(tx, args.decimalY, `u8`), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`), pure(tx, args.isMemeWithTax, `bool`) ], }) }

export interface InternalRemoveLiquidityArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; lpCoinsProvidedVal: bigint | TransactionArgument; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument }

export function internalRemoveLiquidity( tx: Transaction, typeArgs: [string, string, string], args: InternalRemoveLiquidityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::internal_remove_liquidity`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), pure(tx, args.lpCoinsProvidedVal, `u64`), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`) ], }) }

export interface InternalSwapArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xIn: TransactionObjectInput; xOutMin: bigint | TransactionArgument; yIn: TransactionObjectInput; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function internalSwap( tx: Transaction, typeArgs: [string, string, string], args: InternalSwapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::internal_swap`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.xIn), pure(tx, args.xOutMin, `u64`), obj(tx, args.yIn), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`) ], }) }

export function isPoolRegistered( tx: Transaction, typeArgs: [string, string, string], registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::is_pool_registered`, typeArguments: typeArgs, arguments: [ obj(tx, registry) ], }) }

export function isPoolWithMemeTax( tx: Transaction, typeArgs: [string, string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::is_pool_with_meme_tax`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface LockInSuiHivePoolAddrArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; metadataY: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function lockInSuiHivePoolAddr( tx: Transaction, typeArgs: [string, string, string], args: LockInSuiHivePoolAddrArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::lock_in_sui_hive_pool_addr`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.metadataY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`) ], }) }

export interface LockInSuiHoneyPoolAddrArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; metadataY: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function lockInSuiHoneyPoolAddr( tx: Transaction, typeArgs: [string, string, string], args: LockInSuiHoneyPoolAddrArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::lock_in_sui_honey_pool_addr`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.metadataY), obj(tx, args.suiBalance), obj(tx, args.feeCollector), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`) ], }) }

export interface PayFlashloanArgs { pool: TransactionObjectInput; xIn: TransactionObjectInput; yIn: TransactionObjectInput; loan: TransactionObjectInput }

export function payFlashloan( tx: Transaction, typeArgs: [string, string, string], args: PayFlashloanArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::pay_flashloan`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.xIn), obj(tx, args.yIn), obj(tx, args.loan) ], }) }

export interface QueryAcrossAllPoolsArgs { registry: TransactionObjectInput; limit: bigint | TransactionArgument }

export function queryAcrossAllPools( tx: Transaction, typeArgs: [string, string, string], args: QueryAcrossAllPoolsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::query_across_all_pools`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), pure(tx, args.limit, `u64`) ], }) }

export function queryFirstPool( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::query_first_pool`, arguments: [ obj(tx, registry) ], }) }

export interface QuerySwapArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xIn: bigint | TransactionArgument; xOutMin: bigint | TransactionArgument; yIn: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function querySwap( tx: Transaction, typeArgs: [string, string, string], args: QuerySwapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::query_swap`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), pure(tx, args.xIn, `u64`), pure(tx, args.xOutMin, `u64`), pure(tx, args.yIn, `u64`), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`) ], }) }

export interface RegisterMemePoolArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); isMemeWithTax: boolean | TransactionArgument; treasuryCap: TransactionObjectInput }

export function registerMemePool( tx: Transaction, typeArgs: [string, string, string], args: RegisterMemePoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::register_meme_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`), pure(tx, args.isMemeWithTax, `bool`), obj(tx, args.treasuryCap) ], }) }

export interface RegisterPoolBothCoinMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolBothCoinMetadataAvailable( tx: Transaction, typeArgs: [string, string, string], args: RegisterPoolBothCoinMetadataAvailableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::register_pool_both_coin_metadata_available`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataX), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`) ], }) }

export interface RegisterPoolNoMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolNoMetadataAvailable( tx: Transaction, typeArgs: [string, string, string], args: RegisterPoolNoMetadataAvailableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::register_pool_no_metadata_available`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.suiBalance), obj(tx, args.feeCollector), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`) ], }) }

export interface RegisterPoolXMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataX: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolXMetadataAvailable( tx: Transaction, typeArgs: [string, string, string], args: RegisterPoolXMetadataAvailableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::register_pool_x_metadata_available`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataX), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`) ], }) }

export interface RegisterPoolYMetadataAvailableArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; registry: TransactionObjectInput; suiBalance: TransactionObjectInput; feeCollector: TransactionObjectInput; metadataY: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); weights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function registerPoolYMetadataAvailable( tx: Transaction, typeArgs: [string, string, string], args: RegisterPoolYMetadataAvailableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::register_pool_y_metadata_available`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.registry), obj(tx, args.suiBalance), obj(tx, args.feeCollector), obj(tx, args.metadataY), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`), pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`) ], }) }

export interface RegistryAddArgs { registry: TransactionObjectInput; yieldFlow: TransactionObjectInput; decimalX: number | TransactionArgument; decimalY: number | TransactionArgument; poolId: string | TransactionArgument }

export function registryAdd( tx: Transaction, typeArgs: [string, string, string], args: RegistryAddArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::registry_add`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), obj(tx, args.yieldFlow), pure(tx, args.decimalX, `u8`), pure(tx, args.decimalY, `u8`), pure(tx, args.poolId, `${ID.$typeName}`) ], }) }

export interface RemoveLiquidityArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; lpCoins: TransactionObjectInput; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument }

export function removeLiquidity( tx: Transaction, typeArgs: [string, string, string], args: RemoveLiquidityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::remove_liquidity`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.lpCoins), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`) ], }) }

export interface RemoveLiquidityBurnTaxArgs { clock: TransactionObjectInput; treasuryCap: TransactionObjectInput; pool: TransactionObjectInput; lpCoins: TransactionObjectInput; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument }

export function removeLiquidityBurnTax( tx: Transaction, typeArgs: [string, string, string], args: RemoveLiquidityBurnTaxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::remove_liquidity_burn_tax`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.treasuryCap), obj(tx, args.pool), obj(tx, args.lpCoins), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`) ], }) }

export interface RemoveLiquidityFromXHoneyPoolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; lpCoins: TransactionObjectInput; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument }

export function removeLiquidityFromXHoneyPool( tx: Transaction, typeArgs: [string, string, string], args: RemoveLiquidityFromXHoneyPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::remove_liquidity_from_x_honey_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.lpCoins), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`) ], }) }

export interface SetPoolHiveAddrArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; poolHiveAddr: string | TransactionArgument }

export function setPoolHiveAddr( tx: Transaction, typeArgs: [string, string, string], args: SetPoolHiveAddrArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::set_pool_hive_addr`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.poolHiveAddr, `address`) ], }) }

export interface SwapHoneyCoinsArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xIn: TransactionObjectInput; xOutMin: bigint | TransactionArgument; yIn: TransactionObjectInput; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swapHoneyCoins( tx: Transaction, typeArgs: [string, string, string], args: SwapHoneyCoinsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::swap_honey_coins`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.xIn), pure(tx, args.xOutMin, `u64`), obj(tx, args.yIn), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`) ], }) }

export interface SwapMemeWithTaxArgs { clock: TransactionObjectInput; treasuryCap: TransactionObjectInput; pool: TransactionObjectInput; xIn: TransactionObjectInput; xOutMin: bigint | TransactionArgument; yIn: TransactionObjectInput; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swapMemeWithTax( tx: Transaction, typeArgs: [string, string, string], args: SwapMemeWithTaxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::swap_meme_with_tax`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.treasuryCap), obj(tx, args.pool), obj(tx, args.xIn), pure(tx, args.xOutMin, `u64`), obj(tx, args.yIn), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`) ], }) }

export interface SwitchBuybackArgs { cap: TransactionObjectInput; registry: TransactionObjectInput }

export function switchBuyback( tx: Transaction, args: SwitchBuybackArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::switch_buyback`, arguments: [ obj(tx, args.cap), obj(tx, args.registry) ], }) }

export interface SwitchSwapSwitchArgs { pool: TransactionObjectInput; cap: TransactionObjectInput; isSwapEnabled: boolean | TransactionArgument }

export function switchSwapSwitch( tx: Transaction, typeArgs: [string, string, string], args: SwitchSwapSwitchArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::switch_swap_switch`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.cap), pure(tx, args.isSwapEnabled, `bool`) ], }) }

export interface UpdateCumulativePricesArgs { clock: TransactionObjectInput; pool: TransactionObjectInput }

export function updateCumulativePrices( tx: Transaction, typeArgs: [string, string, string], args: UpdateCumulativePricesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_cumulative_prices`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.pool) ], }) }

export interface UpdateCurvedAAndGammaArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; initAGammaTime: bigint | TransactionArgument; nextAmp: bigint | TransactionArgument; nextGamma: bigint | TransactionArgument; futureAGammaTime: bigint | TransactionArgument }

export function updateCurvedAAndGamma( tx: Transaction, typeArgs: [string, string, string], args: UpdateCurvedAAndGammaArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_curved_A_and_gamma`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.initAGammaTime, `u64`), pure(tx, args.nextAmp, `u64`), pure(tx, args.nextGamma, `u256`), pure(tx, args.futureAGammaTime, `u64`) ], }) }

export interface UpdateCurvedConfigFeeParamsArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; newMidFee: bigint | TransactionArgument; newOutFee: bigint | TransactionArgument; newFeeGamma: bigint | TransactionArgument; newMaHalfTime: bigint | TransactionArgument; newAllowedExtraProfit: bigint | TransactionArgument; newAdjustmentStep: bigint | TransactionArgument }

export function updateCurvedConfigFeeParams( tx: Transaction, typeArgs: [string, string, string], args: UpdateCurvedConfigFeeParamsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_curved_config_fee_params`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.newMidFee, `u64`), pure(tx, args.newOutFee, `u64`), pure(tx, args.newFeeGamma, `u64`), pure(tx, args.newMaHalfTime, `u64`), pure(tx, args.newAllowedExtraProfit, `u64`), pure(tx, args.newAdjustmentStep, `u64`) ], }) }

export interface UpdateFeeForPoolArgs { pool: TransactionObjectInput; dexCap: TransactionObjectInput; totalFeeBps: bigint | TransactionArgument; beesFeePct: bigint | TransactionArgument }

export function updateFeeForPool( tx: Transaction, typeArgs: [string, string, string], args: UpdateFeeForPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_fee_for_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.dexCap), pure(tx, args.totalFeeBps, `u64`), pure(tx, args.beesFeePct, `u64`) ], }) }

export interface UpdateInitialPricesMemeCoinArgs { cap: TransactionObjectInput; pool: TransactionObjectInput; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument }

export function updateInitialPricesMemeCoin( tx: Transaction, typeArgs: [string, string, string], args: UpdateInitialPricesMemeCoinArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_initial_prices_meme_coin`, typeArguments: typeArgs, arguments: [ obj(tx, args.cap), obj(tx, args.pool), pure(tx, args.initialPrices, `vector<u256>`) ], }) }

export interface UpdateKraftFeeArgs { registry: TransactionObjectInput; dragonDaoCap: TransactionObjectInput; kraftFee: bigint | TransactionArgument }

export function updateKraftFee( tx: Transaction, args: UpdateKraftFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_kraft_fee`, arguments: [ obj(tx, args.registry), obj(tx, args.dragonDaoCap), pure(tx, args.kraftFee, `u64`) ], }) }

export interface UpdateSuiPolDistributionArgs { poolRegistry: TransactionObjectInput; dragonDaoCap: TransactionObjectInput; suiForHivePoolPct: bigint | TransactionArgument; suiForHoneyPoolPct: bigint | TransactionArgument }

export function updateSuiPolDistribution( tx: Transaction, args: UpdateSuiPolDistributionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_sui_pol_distribution`, arguments: [ obj(tx, args.poolRegistry), obj(tx, args.dragonDaoCap), pure(tx, args.suiForHivePoolPct, `u64`), pure(tx, args.suiForHoneyPoolPct, `u64`) ], }) }

export interface UpdateThirdPoolForPolArgs { poolRegistry: TransactionObjectInput; dragonDaoCap: TransactionObjectInput; thirdPool: TransactionObjectInput }

export function updateThirdPoolForPol( tx: Transaction, typeArgs: [string, string], args: UpdateThirdPoolForPolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_third_pool_for_pol`, typeArguments: typeArgs, arguments: [ obj(tx, args.poolRegistry), obj(tx, args.dragonDaoCap), obj(tx, args.thirdPool) ], }) }

export interface UseSuiForBuybacksArgs { registry: TransactionObjectInput; clock: TransactionObjectInput; feeCollector: TransactionObjectInput; yieldFlow: TransactionObjectInput; yieldFarm: TransactionObjectInput; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function useSuiForBuybacks( tx: Transaction, args: UseSuiForBuybacksArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::use_sui_for_buybacks`, arguments: [ obj(tx, args.registry), obj(tx, args.clock), obj(tx, args.feeCollector), obj(tx, args.yieldFlow), obj(tx, args.yieldFarm), obj(tx, args.hivePool), obj(tx, args.honeyPool) ], }) }

export interface UseSuiForYieldFarmArgs { clock: TransactionObjectInput; yieldFlow: TransactionObjectInput; suiBalance: TransactionObjectInput; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput; yieldFarm: TransactionObjectInput }

export function useSuiForYieldFarm( tx: Transaction, args: UseSuiForYieldFarmArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::use_sui_for_yield_farm`, arguments: [ obj(tx, args.clock), obj(tx, args.yieldFlow), obj(tx, args.suiBalance), obj(tx, args.hivePool), obj(tx, args.honeyPool), obj(tx, args.yieldFarm) ], }) }

export interface UseXForBuybacksViaSuiXPoolArgs { registry: TransactionObjectInput; clock: TransactionObjectInput; feeCollector: TransactionObjectInput; yieldFlow: TransactionObjectInput; yieldFarm: TransactionObjectInput; suiXPool: TransactionObjectInput; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function useXForBuybacksViaSuiXPool( tx: Transaction, typeArgs: [string, string], args: UseXForBuybacksViaSuiXPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::use_x_for_buybacks_via_sui_x_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), obj(tx, args.clock), obj(tx, args.feeCollector), obj(tx, args.yieldFlow), obj(tx, args.yieldFarm), obj(tx, args.suiXPool), obj(tx, args.hivePool), obj(tx, args.honeyPool) ], }) }

export interface UseXForBuybacksViaXSuiPoolArgs { registry: TransactionObjectInput; clock: TransactionObjectInput; feeCollector: TransactionObjectInput; yieldFlow: TransactionObjectInput; yieldFarm: TransactionObjectInput; xSuiPool: TransactionObjectInput; hivePool: TransactionObjectInput; honeyPool: TransactionObjectInput }

export function useXForBuybacksViaXSuiPool( tx: Transaction, typeArgs: [string, string], args: UseXForBuybacksViaXSuiPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::use_x_for_buybacks_via_x_sui_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), obj(tx, args.clock), obj(tx, args.feeCollector), obj(tx, args.yieldFlow), obj(tx, args.yieldFarm), obj(tx, args.xSuiPool), obj(tx, args.hivePool), obj(tx, args.honeyPool) ], }) }
