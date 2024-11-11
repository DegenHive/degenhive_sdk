"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = swap;
exports.init = init;
exports.updateWeightedConfig = updateWeightedConfig;
exports.updateStableConfig = updateStableConfig;
exports.addLiquidity = addLiquidity;
exports.dangerousBurnLpCoins = dangerousBurnLpCoins;
exports.flashloan = flashloan;
exports.getCollectedFee = getCollectedFee;
exports.getDecimalForCoin = getDecimalForCoin;
exports.getLiquidityPoolId = getLiquidityPoolId;
exports.getPoolAddr = getPoolAddr;
exports.getPoolCurvedConfigAmpGamma = getPoolCurvedConfigAmpGamma;
exports.getPoolCurvedConfigFee = getPoolCurvedConfigFee;
exports.getPoolCurvedConfigPrecision = getPoolCurvedConfigPrecision;
exports.getPoolCurvedConfigPricesInfo = getPoolCurvedConfigPricesInfo;
exports.getPoolCurvedConfigXcp = getPoolCurvedConfigXcp;
exports.getPoolFeeConfig = getPoolFeeConfig;
exports.getPoolId = getPoolId;
exports.getPoolIdAsAddress = getPoolIdAsAddress;
exports.getPoolRegistry = getPoolRegistry;
exports.getPoolReserves = getPoolReserves;
exports.getPoolReservesDecimals = getPoolReservesDecimals;
exports.getPoolStableConfig = getPoolStableConfig;
exports.getPoolTotalSupply = getPoolTotalSupply;
exports.getPoolWeightedConfig = getPoolWeightedConfig;
exports.getPoolhiveAddr = getPoolhiveAddr;
exports.getScalingFactor = getScalingFactor;
exports.imbalancedExit = imbalancedExit;
exports.incrementLiquidityPool = incrementLiquidityPool;
exports.incrementPoolRegistry = incrementPoolRegistry;
exports.initializePoolRegistry = initializePoolRegistry;
exports.internalAddLiquidity = internalAddLiquidity;
exports.internalRegisterPool = internalRegisterPool;
exports.internalRemoveLiquidity = internalRemoveLiquidity;
exports.isPoolRegistered = isPoolRegistered;
exports.payFlashloan = payFlashloan;
exports.queryAcrossAllPools = queryAcrossAllPools;
exports.queryFirstPool = queryFirstPool;
exports.querySwap = querySwap;
exports.registerPoolNoMetadataAvailable = registerPoolNoMetadataAvailable;
exports.registerPoolXMetadataAvailable = registerPoolXMetadataAvailable;
exports.registerPoolYMetadataAvailable = registerPoolYMetadataAvailable;
exports.registryAdd = registryAdd;
exports.removeLiquidity = removeLiquidity;
exports.setPoolHiveAddr = setPoolHiveAddr;
exports.updateCumulativePrices = updateCumulativePrices;
exports.updateCurvedAAndGamma = updateCurvedAAndGamma;
exports.updateCurvedConfigFeeParams = updateCurvedConfigFeeParams;
exports.updateFeeForPool = updateFeeForPool;
exports.updateKraftFee = updateKraftFee;
exports.getPoolCumulativePricesXY = getPoolCumulativePricesXY;
exports.getPoolCumulativePricesXZ = getPoolCumulativePricesXZ;
exports.getPoolCumulativePricesYZ = getPoolCumulativePricesYZ;
exports.handleSuiYZPoolFee = handleSuiYZPoolFee;
exports.handleXSuiZPoolFee = handleXSuiZPoolFee;
exports.handleXYSuiPoolFee = handleXYSuiPoolFee;
exports.handleXYZPoolViaSuiXHop = handleXYZPoolViaSuiXHop;
exports.handleXYZPoolViaSuiYHop = handleXYZPoolViaSuiYHop;
exports.handleXYZPoolViaSuiZHop = handleXYZPoolViaSuiZHop;
exports.handleXYZPoolViaXSuiHop = handleXYZPoolViaXSuiHop;
exports.handleXYZPoolViaYSuiHop = handleXYZPoolViaYSuiHop;
exports.handleXYZPoolViaZSuiHop = handleXYZPoolViaZSuiHop;
exports.registerPoolAllCoinMetadataAvailable = registerPoolAllCoinMetadataAvailable;
exports.registerPoolXYMetadataAvailable = registerPoolXYMetadataAvailable;
exports.registerPoolXZMetadataAvailable = registerPoolXZMetadataAvailable;
exports.registerPoolYZMetadataAvailable = registerPoolYZMetadataAvailable;
exports.registerPoolZMetadataAvailable = registerPoolZMetadataAvailable;
const __1 = require("..");
const PUBLISHED_AT = __1.threecoin.PUBLISHED_AT;
const THREE_POOL_REGISTRY = __1.threecoin.THREE_POOL_REGISTRY;
const CLOCK = __1.threecoin.CLOCK;
const YIELD_FLOW = __1.threecoin.YIELD_FLOW;
const YIELD_FARM = __1.threecoin.YIELD_FARM;
const structs_1 = require("../../_dependencies/source/0x1/option/structs");
const structs_2 = require("../../_dependencies/source/0x2/object/structs");
const util_1 = require("../../_framework/util");
function swap(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::swap`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.xIn), (0, util_1.pure)(tx, args.xOutMin, `u64`), (0, util_1.obj)(tx, args.yIn), (0, util_1.pure)(tx, args.yOutMin, `u64`), (0, util_1.obj)(tx, args.zIn), (0, util_1.pure)(tx, args.zOutMin, `u64`), (0, util_1.pure)(tx, args.isGiveIn, `bool`)], }); }
function init(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::init`, arguments: [], }); }
function updateWeightedConfig(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_weighted_config`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.newWeights, `vector<u64>`), (0, util_1.pure)(tx, args.newExitFee, `u64`)], }); }
function updateStableConfig(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_stable_config`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.nextAmp, `u64`), (0, util_1.pure)(tx, args.initAmpTime, `u64`), (0, util_1.pure)(tx, args.nextAmpTime, `u64`)], }); }
function addLiquidity(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::add_liquidity`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.coinX), (0, util_1.obj)(tx, args.coinY), (0, util_1.obj)(tx, args.coinZ), (0, util_1.pure)(tx, args.minLpMinted, `u64`)], }); }
function dangerousBurnLpCoins(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::dangerous_burn_lp_coins`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.lpCoinsToBurn)], }); }
function flashloan(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::flashloan`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.pure)(tx, args.xLoan, `u64`), (0, util_1.pure)(tx, args.yLoan, `u64`), (0, util_1.pure)(tx, args.zLoan, `u64`)], }); }
function getCollectedFee(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_collected_fee`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getDecimalForCoin(tx, typeArg) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_decimal_for_coin`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, YIELD_FLOW)], }); }
function getLiquidityPoolId(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_liquidity_pool_id`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolAddr(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_addr`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCurvedConfigAmpGamma(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_curved_config_amp_gamma`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCurvedConfigFee(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_curved_config_fee`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCurvedConfigPrecision(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_curved_config_precision`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCurvedConfigPricesInfo(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_curved_config_prices_info`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCurvedConfigXcp(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_curved_config_xcp`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolFeeConfig(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_fee_config`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolId(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_id`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, THREE_POOL_REGISTRY)], }); }
function getPoolIdAsAddress(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_id_as_address`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, THREE_POOL_REGISTRY)], }); }
function getPoolRegistry(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_registry`, arguments: [(0, util_1.obj)(tx, THREE_POOL_REGISTRY)], }); }
function getPoolReserves(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_reserves`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolReservesDecimals(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_reserves_decimals`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolStableConfig(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_stable_config`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolTotalSupply(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_total_supply`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolWeightedConfig(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_weighted_config`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolhiveAddr(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_poolhive_addr`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getScalingFactor(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_scaling_factor`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool)], }); }
function imbalancedExit(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::imbalanced_exit`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.pure)(tx, args.lpCoinSupply, `u64`), (0, util_1.pure)(tx, args.existingLiquidity, `vector<u64>`), (0, util_1.pure)(tx, args.coinsToRefund, `vector<u64>`), (0, util_1.pure)(tx, args.totalFeeBps, `u64`)], }); }
function incrementLiquidityPool(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::increment_liquidity_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function incrementPoolRegistry(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::increment_pool_registry`, arguments: [(0, util_1.obj)(tx, THREE_POOL_REGISTRY)], }); }
function initializePoolRegistry(tx, feeClaimCap) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::initialize_pool_registry`, arguments: [(0, util_1.obj)(tx, feeClaimCap)], }); }
function internalAddLiquidity(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::internal_add_liquidity`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.coinX), (0, util_1.obj)(tx, args.coinY), (0, util_1.obj)(tx, args.coinZ)], }); }
function internalRegisterPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::internal_register_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.pure)(tx, args.decimalX, `u8`), (0, util_1.pure)(tx, args.decimalY, `u8`), (0, util_1.pure)(tx, args.decimalZ, `u8`), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function internalRemoveLiquidity(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::internal_remove_liquidity`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.pure)(tx, args.lpCoinsProvidedVal, `u64`), (0, util_1.pure)(tx, args.coinXOutVal, `u64`), (0, util_1.pure)(tx, args.coinYOutVal, `u64`), (0, util_1.pure)(tx, args.coinZOutVal, `u64`)], }); }
function isPoolRegistered(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::is_pool_registered`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, THREE_POOL_REGISTRY)], }); }
function payFlashloan(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::pay_flashloan`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.xIn), (0, util_1.obj)(tx, args.yIn), (0, util_1.obj)(tx, args.zIn), (0, util_1.obj)(tx, args.loan)], }); }
function queryAcrossAllPools(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::query_across_all_pools`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function queryFirstPool(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::query_first_pool`, arguments: [(0, util_1.obj)(tx, THREE_POOL_REGISTRY)], }); }
function querySwap(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::query_swap`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.pure)(tx, args.xIn, `u64`), (0, util_1.pure)(tx, args.xOutMin, `u64`), (0, util_1.pure)(tx, args.yIn, `u64`), (0, util_1.pure)(tx, args.yOutMin, `u64`), (0, util_1.pure)(tx, args.zIn, `u64`), (0, util_1.pure)(tx, args.zOutMin, `u64`), (0, util_1.pure)(tx, args.isGiveIn, `bool`)], }); }
function registerPoolNoMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_no_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registerPoolXMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_x_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataX), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registerPoolYMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_y_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataY), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registryAdd(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::registry_add`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.pure)(tx, args.decimalX, `u8`), (0, util_1.pure)(tx, args.decimalY, `u8`), (0, util_1.pure)(tx, args.decimalZ, `u8`), (0, util_1.pure)(tx, args.poolId, `${structs_2.ID.$typeName}`)], }); }
function removeLiquidity(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::remove_liquidity`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.lpCoins), (0, util_1.pure)(tx, args.coinXOutVal, `u64`), (0, util_1.pure)(tx, args.coinYOutVal, `u64`), (0, util_1.pure)(tx, args.coinZOutVal, `u64`), (0, util_1.pure)(tx, args.maxLpCoinsToBurn, `u64`)], }); }
function setPoolHiveAddr(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::set_pool_hive_addr`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.poolHiveAddr, `address`)], }); }
function updateCumulativePrices(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_cumulative_prices`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool)], }); }
function updateCurvedAAndGamma(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_curved_A_and_gamma`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.initAGammaTime, `u64`), (0, util_1.pure)(tx, args.nextAmp, `u64`), (0, util_1.pure)(tx, args.nextGamma, `u256`), (0, util_1.pure)(tx, args.futureAGammaTime, `u64`)], }); }
function updateCurvedConfigFeeParams(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_curved_config_fee_params`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.newMidFee, `u64`), (0, util_1.pure)(tx, args.newOutFee, `u64`), (0, util_1.pure)(tx, args.newFeeGamma, `u64`), (0, util_1.pure)(tx, args.newMaHalfTime, `u64`), (0, util_1.pure)(tx, args.newAllowedExtraProfit, `u64`), (0, util_1.pure)(tx, args.newAdjustmentStep, `u64`)], }); }
function updateFeeForPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_fee_for_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.totalFeeBps, `u64`), (0, util_1.pure)(tx, args.beesFeePct, `u64`)], }); }
function updateKraftFee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::update_kraft_fee`, arguments: [(0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, args.dragonDaoCap), (0, util_1.pure)(tx, args.kraftFee, `u64`)], }); }
function getPoolCumulativePricesXY(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_cumulative_prices_x_y`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCumulativePricesXZ(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_cumulative_prices_x_z`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCumulativePricesYZ(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::get_pool_cumulative_prices_y_z`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function handleSuiYZPoolFee(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_sui_y_z_pool_fee`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function handleXSuiZPoolFee(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_sui_z_pool_fee`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function handleXYSuiPoolFee(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_sui_pool_fee`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function handleXYZPoolViaSuiXHop(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_sui_x_hop`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.suiXPool), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function handleXYZPoolViaSuiYHop(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_sui_y_hop`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.suiYPool), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function handleXYZPoolViaSuiZHop(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_sui_z_hop`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.suiZPool), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function handleXYZPoolViaXSuiHop(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_x_sui_hop`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.xSuiPool), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function handleXYZPoolViaYSuiHop(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_y_sui_hop`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.ySuiPool), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function handleXYZPoolViaZSuiHop(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::handle_x_y_z_pool_via_z_sui_hop`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.zSuiPool), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function registerPoolAllCoinMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_all_coin_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataX), (0, util_1.obj)(tx, args.metadataY), (0, util_1.obj)(tx, args.metadataZ), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registerPoolXYMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_x_y_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataX), (0, util_1.obj)(tx, args.metadataY), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registerPoolXZMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_x_z_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataX), (0, util_1.obj)(tx, args.metadataZ), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registerPoolYZMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_y_z_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataY), (0, util_1.obj)(tx, args.metadataZ), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registerPoolZMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::three_pool::register_pool_z_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, THREE_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataZ), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
