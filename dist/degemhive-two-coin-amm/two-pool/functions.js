"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = swap;
exports.updateInitialPrices = updateInitialPrices;
exports.updateWeightedConfig = updateWeightedConfig;
exports.updateStableConfig = updateStableConfig;
exports.addLiquidity = addLiquidity;
exports.addSuiForBuyback = addSuiForBuyback;
exports.claimFeesOneHopViaSuiXPool = claimFeesOneHopViaSuiXPool;
exports.claimFeesOneHopViaSuiYPool = claimFeesOneHopViaSuiYPool;
exports.claimFeesOneHopViaXSuiPool = claimFeesOneHopViaXSuiPool;
exports.claimFeesOneHopViaYSuiPool = claimFeesOneHopViaYSuiPool;
exports.claimFeesSuiHivePool = claimFeesSuiHivePool;
exports.claimFeesSuiHoneyPool = claimFeesSuiHoneyPool;
exports.claimFeesSuiXPool = claimFeesSuiXPool;
exports.claimFeesXSuiPool = claimFeesXSuiPool;
exports.claimYieldFromQueenMaker = claimYieldFromQueenMaker;
exports.convertSuiFeesToHiveAndHoney = convertSuiFeesToHiveAndHoney;
exports.dangerousBurnLpCoins = dangerousBurnLpCoins;
exports.deployerRegisterPoolBothCoinMetadataAvailable = deployerRegisterPoolBothCoinMetadataAvailable;
exports.deployerRegisterPoolXMetadataAvailable = deployerRegisterPoolXMetadataAvailable;
exports.deployerRegisterPoolYMetadataAvailable = deployerRegisterPoolYMetadataAvailable;
exports.flashloan = flashloan;
exports.getCollectedFee = getCollectedFee;
exports.getDecimalForCoin = getDecimalForCoin;
exports.getKraftFee = getKraftFee;
exports.getLiquidityPoolId = getLiquidityPoolId;
exports.getPoolAddr = getPoolAddr;
exports.getPoolCumulativePrices = getPoolCumulativePrices;
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
exports.getSuiHivePoolForPol = getSuiHivePoolForPol;
exports.harvestHiveFee = harvestHiveFee;
exports.harvestHoneyFee = harvestHoneyFee;
exports.imbalancedExit = imbalancedExit;
exports.incrementLiquidityPool = incrementLiquidityPool;
exports.incrementPoolRegistry = incrementPoolRegistry;
exports.initializePoolRegistry = initializePoolRegistry;
exports.internalAddLiquidity = internalAddLiquidity;
exports.internalRegisterPool = internalRegisterPool;
exports.internalRemoveLiquidity = internalRemoveLiquidity;
exports.internalSwap = internalSwap;
exports.isPoolRegistered = isPoolRegistered;
exports.isPoolWithMemeTax = isPoolWithMemeTax;
exports.lockInSuiHivePoolAddr = lockInSuiHivePoolAddr;
exports.lockInSuiHoneyPoolAddr = lockInSuiHoneyPoolAddr;
exports.payFlashloan = payFlashloan;
exports.queryAcrossAllPools = queryAcrossAllPools;
exports.queryFirstPool = queryFirstPool;
exports.querySwap = querySwap;
exports.registerMemePool = registerMemePool;
exports.registerPoolBothCoinMetadataAvailable = registerPoolBothCoinMetadataAvailable;
exports.registerPoolNoMetadataAvailable = registerPoolNoMetadataAvailable;
exports.registerPoolXMetadataAvailable = registerPoolXMetadataAvailable;
exports.registerPoolYMetadataAvailable = registerPoolYMetadataAvailable;
exports.registryAdd = registryAdd;
exports.removeLiquidity = removeLiquidity;
exports.removeLiquidityBurnTax = removeLiquidityBurnTax;
exports.removeLiquidityFromXHoneyPool = removeLiquidityFromXHoneyPool;
exports.setPoolHiveAddr = setPoolHiveAddr;
exports.swapHoneyCoins = swapHoneyCoins;
exports.swapMemeWithTax = swapMemeWithTax;
exports.switchBuyback = switchBuyback;
exports.switchSwapSwitch = switchSwapSwitch;
exports.updateCumulativePrices = updateCumulativePrices;
exports.updateCurvedAAndGamma = updateCurvedAAndGamma;
exports.updateCurvedConfigFeeParams = updateCurvedConfigFeeParams;
exports.updateFeeForPool = updateFeeForPool;
exports.updateInitialPricesMemeCoin = updateInitialPricesMemeCoin;
exports.updateKraftFee = updateKraftFee;
exports.updateSuiPolDistribution = updateSuiPolDistribution;
exports.updateThirdPoolForPol = updateThirdPoolForPol;
exports.useSuiForBuybacks = useSuiForBuybacks;
exports.useSuiForYieldFarm = useSuiForYieldFarm;
exports.useXForBuybacksViaSuiXPool = useXForBuybacksViaSuiXPool;
exports.useXForBuybacksViaXSuiPool = useXForBuybacksViaXSuiPool;
const __1 = require("..");
const PUBLISHED_AT = __1.twopool.PUBLISHED_AT;
const TWO_POOL_REGISTRY = __1.twopool.TWO_POOL_REGISTRY;
const BEES_MANAGER = __1.twopool.BEES_MANAGER;
const YIELD_FARM = __1.twopool.YIELD_FARM;
const CLOCK = __1.twopool.CLOCK;
const YIELD_FLOW = __1.twopool.YIELD_FLOW_OBJECT;
const structs_1 = require("../../_dependencies/source/0x1/option/structs");
const structs_2 = require("../../_dependencies/source/0x2/object/structs");
const util_1 = require("../../_framework/util");
function swap(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::swap`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.xIn), (0, util_1.pure)(tx, args.xOutMin, `u64`), (0, util_1.obj)(tx, args.yIn), (0, util_1.pure)(tx, args.yOutMin, `u64`), (0, util_1.pure)(tx, args.isGiveIn, `bool`)], }); }
function updateInitialPrices(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_initial_prices`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.pool), (0, util_1.pure)(tx, args.initialPrices, `vector<u256>`)], }); }
function updateWeightedConfig(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_weighted_config`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.newWeights, `vector<u64>`), (0, util_1.pure)(tx, args.newExitFee, `u64`)], }); }
function updateStableConfig(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_stable_config`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.nextAmp, `u64`), (0, util_1.pure)(tx, args.initAmpTime, `u64`), (0, util_1.pure)(tx, args.nextAmpTime, `u64`)], }); }
function addLiquidity(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::add_liquidity`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.coinX), (0, util_1.obj)(tx, args.coinY), (0, util_1.pure)(tx, args.minLpMinted, `u64`)], }); }
function addSuiForBuyback(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::add_sui_for_buyback`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance)], }); }
function claimFeesOneHopViaSuiXPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_one_hop_via_sui_x_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.xYPool), (0, util_1.obj)(tx, args.suiXPool), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool), (0, util_1.obj)(tx, YIELD_FARM)], }); }
function claimFeesOneHopViaSuiYPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_one_hop_via_sui_y_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.xYPool), (0, util_1.obj)(tx, args.suiYPool), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool), (0, util_1.obj)(tx, YIELD_FARM)], }); }
function claimFeesOneHopViaXSuiPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_one_hop_via_x_sui_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.xYPool), (0, util_1.obj)(tx, args.xSuiPool), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool), (0, util_1.obj)(tx, YIELD_FARM)], }); }
function claimFeesOneHopViaYSuiPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_one_hop_via_y_sui_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.xYPool), (0, util_1.obj)(tx, args.ySuiPool), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool), (0, util_1.obj)(tx, YIELD_FARM)], }); }
function claimFeesSuiHivePool(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_sui_hive_pool`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.suiHivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function claimFeesSuiHoneyPool(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_sui_honey_pool`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.suiHoneyPool)], }); }
function claimFeesSuiXPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_sui_x_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.suiXPool), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool), (0, util_1.obj)(tx, YIELD_FARM)], }); }
function claimFeesXSuiPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_fees_x_sui_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.xSuiPool), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function claimYieldFromQueenMaker(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::claim_yield_from_queen_maker`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.queenMaker), (0, util_1.obj)(tx, args.suiHivePool), (0, util_1.obj)(tx, args.suiHoneyPool), (0, util_1.obj)(tx, args.thirdPool), (0, util_1.obj)(tx, args.suiFeeCollector)], }); }
function convertSuiFeesToHiveAndHoney(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::convert_sui_fees_to_hive_and_honey`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.pure)(tx, args.poolAddr, `address`), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool), (0, util_1.obj)(tx, YIELD_FARM)], }); }
function dangerousBurnLpCoins(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::dangerous_burn_lp_coins`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.lpCoinsToBurn)], }); }
function deployerRegisterPoolBothCoinMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_both_coin_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataX), (0, util_1.obj)(tx, args.metadataY), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function deployerRegisterPoolXMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_x_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataX), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function deployerRegisterPoolYMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_y_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataY), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function flashloan(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::flashloan`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.pure)(tx, args.xLoan, `u64`), (0, util_1.pure)(tx, args.yLoan, `u64`)], }); }
function getCollectedFee(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_collected_fee`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getDecimalForCoin(tx, typeArg) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_decimal_for_coin`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, YIELD_FLOW)], }); }
function getKraftFee(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_kraft_fee`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY)], }); }
function getLiquidityPoolId(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_liquidity_pool_id`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolAddr(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_addr`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCumulativePrices(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_cumulative_prices`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCurvedConfigAmpGamma(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_amp_gamma`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCurvedConfigFee(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_fee`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCurvedConfigPrecision(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_precision`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCurvedConfigPricesInfo(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_prices_info`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolCurvedConfigXcp(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_xcp`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolFeeConfig(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_fee_config`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolId(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_id`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY)], }); }
function getPoolIdAsAddress(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_id_as_address`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY)], }); }
function getPoolRegistry(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_registry`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY)], }); }
function getPoolReserves(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_reserves`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolReservesDecimals(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_reserves_decimals`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolStableConfig(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_stable_config`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolTotalSupply(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_total_supply`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolWeightedConfig(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_pool_weighted_config`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getPoolhiveAddr(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_poolhive_addr`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function getScalingFactor(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_scaling_factor`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool)], }); }
function getSuiHivePoolForPol(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::get_sui_hive_pool_for_pol`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY)], }); }
function harvestHiveFee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::harvest_hive_fee`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, YIELD_FARM)], }); }
function harvestHoneyFee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::harvest_honey_fee`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, YIELD_FARM)], }); }
function imbalancedExit(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::imbalanced_exit`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.pure)(tx, args.lpCoinSupply, `u64`), (0, util_1.pure)(tx, args.existingLiquidity, `vector<u64>`), (0, util_1.pure)(tx, args.coinsToRefund, `vector<u64>`), (0, util_1.pure)(tx, args.totalFeeBps, `u64`)], }); }
function incrementLiquidityPool(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::increment_liquidity_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function incrementPoolRegistry(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::increment_pool_registry`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY)], }); }
function initializePoolRegistry(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::initialize_pool_registry`, arguments: [(0, util_1.obj)(tx, args.feeClaimCap), (0, util_1.pure)(tx, args.initHivePolPct, `u64`), (0, util_1.pure)(tx, args.initHoneyPolPct, `u64`)], }); }
function internalAddLiquidity(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::internal_add_liquidity`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.coinX), (0, util_1.obj)(tx, args.coinY)], }); }
function internalRegisterPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::internal_register_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.pure)(tx, args.decimalX, `u8`), (0, util_1.pure)(tx, args.decimalY, `u8`), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`), (0, util_1.pure)(tx, args.isMemeWithTax, `bool`)], }); }
function internalRemoveLiquidity(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::internal_remove_liquidity`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.pure)(tx, args.lpCoinsProvidedVal, `u64`), (0, util_1.pure)(tx, args.coinXOutVal, `u64`), (0, util_1.pure)(tx, args.coinYOutVal, `u64`)], }); }
function internalSwap(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::internal_swap`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.xIn), (0, util_1.pure)(tx, args.xOutMin, `u64`), (0, util_1.obj)(tx, args.yIn), (0, util_1.pure)(tx, args.yOutMin, `u64`), (0, util_1.pure)(tx, args.isGiveIn, `bool`)], }); }
function isPoolRegistered(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::is_pool_registered`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY)], }); }
function isPoolWithMemeTax(tx, typeArgs, pool) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::is_pool_with_meme_tax`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, pool)], }); }
function lockInSuiHivePoolAddr(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::lock_in_sui_hive_pool_addr`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.metadataY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function lockInSuiHoneyPoolAddr(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::lock_in_sui_honey_pool_addr`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.metadataY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function payFlashloan(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::pay_flashloan`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.xIn), (0, util_1.obj)(tx, args.yIn), (0, util_1.obj)(tx, args.loan)], }); }
function queryAcrossAllPools(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::query_across_all_pools`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function queryFirstPool(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::query_first_pool`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY)], }); }
function querySwap(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::query_swap`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.pure)(tx, args.xIn, `u64`), (0, util_1.pure)(tx, args.xOutMin, `u64`), (0, util_1.pure)(tx, args.yIn, `u64`), (0, util_1.pure)(tx, args.yOutMin, `u64`), (0, util_1.pure)(tx, args.isGiveIn, `bool`)], }); }
function registerMemePool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::register_meme_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataY), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`), (0, util_1.pure)(tx, args.isMemeWithTax, `bool`), (0, util_1.obj)(tx, args.treasuryCap)], }); }
function registerPoolBothCoinMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::register_pool_both_coin_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataX), (0, util_1.obj)(tx, args.metadataY), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registerPoolNoMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::register_pool_no_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registerPoolXMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::register_pool_x_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataX), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registerPoolYMetadataAvailable(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::register_pool_y_metadata_available`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.metadataY), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`), (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`)], }); }
function registryAdd(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::registry_add`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.pure)(tx, args.decimalX, `u8`), (0, util_1.pure)(tx, args.decimalY, `u8`), (0, util_1.pure)(tx, args.poolId, `${structs_2.ID.$typeName}`)], }); }
function removeLiquidity(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::remove_liquidity`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.lpCoins), (0, util_1.pure)(tx, args.coinXOutVal, `u64`), (0, util_1.pure)(tx, args.coinYOutVal, `u64`), (0, util_1.pure)(tx, args.maxLpCoinsToBurn, `u64`)], }); }
function removeLiquidityBurnTax(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::remove_liquidity_burn_tax`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.treasuryCap), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.lpCoins), (0, util_1.pure)(tx, args.coinXOutVal, `u64`), (0, util_1.pure)(tx, args.coinYOutVal, `u64`), (0, util_1.pure)(tx, args.maxLpCoinsToBurn, `u64`)], }); }
function removeLiquidityFromXHoneyPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::remove_liquidity_from_x_honey_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.lpCoins), (0, util_1.pure)(tx, args.coinXOutVal, `u64`), (0, util_1.pure)(tx, args.coinYOutVal, `u64`), (0, util_1.pure)(tx, args.maxLpCoinsToBurn, `u64`)], }); }
function setPoolHiveAddr(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::set_pool_hive_addr`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.poolHiveAddr, `address`)], }); }
function swapHoneyCoins(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::swap_honey_coins`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.xIn), (0, util_1.pure)(tx, args.xOutMin, `u64`), (0, util_1.obj)(tx, args.yIn), (0, util_1.pure)(tx, args.yOutMin, `u64`), (0, util_1.pure)(tx, args.isGiveIn, `bool`)], }); }
function swapMemeWithTax(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::swap_meme_with_tax`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.treasuryCap), (0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.xIn), (0, util_1.pure)(tx, args.xOutMin, `u64`), (0, util_1.obj)(tx, args.yIn), (0, util_1.pure)(tx, args.yOutMin, `u64`), (0, util_1.pure)(tx, args.isGiveIn, `bool`)], }); }
function switchBuyback(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::switch_buyback`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, TWO_POOL_REGISTRY)], }); }
function switchSwapSwitch(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::switch_swap_switch`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.cap), (0, util_1.pure)(tx, args.isSwapEnabled, `bool`)], }); }
function updateCumulativePrices(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_cumulative_prices`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.pool)], }); }
function updateCurvedAAndGamma(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_curved_A_and_gamma`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.initAGammaTime, `u64`), (0, util_1.pure)(tx, args.nextAmp, `u64`), (0, util_1.pure)(tx, args.nextGamma, `u256`), (0, util_1.pure)(tx, args.futureAGammaTime, `u64`)], }); }
function updateCurvedConfigFeeParams(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_curved_config_fee_params`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.newMidFee, `u64`), (0, util_1.pure)(tx, args.newOutFee, `u64`), (0, util_1.pure)(tx, args.newFeeGamma, `u64`), (0, util_1.pure)(tx, args.newMaHalfTime, `u64`), (0, util_1.pure)(tx, args.newAllowedExtraProfit, `u64`), (0, util_1.pure)(tx, args.newAdjustmentStep, `u64`)], }); }
function updateFeeForPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_fee_for_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.dexCap), (0, util_1.pure)(tx, args.totalFeeBps, `u64`), (0, util_1.pure)(tx, args.beesFeePct, `u64`)], }); }
function updateInitialPricesMemeCoin(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_initial_prices_meme_coin`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.pool), (0, util_1.pure)(tx, args.initialPrices, `vector<u256>`)], }); }
function updateKraftFee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_kraft_fee`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.dragonDaoCap), (0, util_1.pure)(tx, args.kraftFee, `u64`)], }); }
function updateSuiPolDistribution(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_sui_pol_distribution`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.dragonDaoCap), (0, util_1.pure)(tx, args.suiForHivePoolPct, `u64`), (0, util_1.pure)(tx, args.suiForHoneyPoolPct, `u64`)], }); }
function updateThirdPoolForPol(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::update_third_pool_for_pol`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, args.dragonDaoCap), (0, util_1.obj)(tx, args.thirdPool)], }); }
function useSuiForBuybacks(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::use_sui_for_buybacks`, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function useSuiForYieldFarm(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::use_sui_for_yield_farm`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool), (0, util_1.obj)(tx, YIELD_FARM)], }); }
function useXForBuybacksViaSuiXPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::use_x_for_buybacks_via_sui_x_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.suiXPool), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
function useXForBuybacksViaXSuiPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::two_pool::use_x_for_buybacks_via_x_sui_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.xSuiPool), (0, util_1.obj)(tx, args.hivePool), (0, util_1.obj)(tx, args.honeyPool)], }); }
