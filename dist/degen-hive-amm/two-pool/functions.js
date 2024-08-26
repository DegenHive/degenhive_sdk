"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = swap;
exports.init = init;
exports.updateWeightedConfig = updateWeightedConfig;
exports.updateStableConfig = updateStableConfig;
exports.updateInitialPrices = updateInitialPrices;
exports.addLiquidity = addLiquidity;
exports.claimPolFromStreamerBuzz = claimPolFromStreamerBuzz;
exports.collectFeeForPool = collectFeeForPool;
exports.dangerousBurnLpCoins = dangerousBurnLpCoins;
exports.deployerRegisterPoolBothCoinMetadataAvailable = deployerRegisterPoolBothCoinMetadataAvailable;
exports.deployerRegisterPoolXMetadataAvailable = deployerRegisterPoolXMetadataAvailable;
exports.deployerRegisterPoolYMetadataAvailable = deployerRegisterPoolYMetadataAvailable;
exports.distributeDegensui = distributeDegensui;
exports.enablePublicPools = enablePublicPools;
exports.flashloan = flashloan;
exports.getCollectedFee = getCollectedFee;
exports.getDecimalForCoin = getDecimalForCoin;
exports.getLiquidityPoolId = getLiquidityPoolId;
exports.getPoolCumulativePrices = getPoolCumulativePrices;
exports.getPoolCurvedConfigAmpGamma = getPoolCurvedConfigAmpGamma;
exports.getPoolCurvedConfigFee = getPoolCurvedConfigFee;
exports.getPoolCurvedConfigPrecision = getPoolCurvedConfigPrecision;
exports.getPoolCurvedConfigPricesInfo = getPoolCurvedConfigPricesInfo;
exports.getPoolCurvedConfigXcp = getPoolCurvedConfigXcp;
exports.getPoolFeeConfig = getPoolFeeConfig;
exports.getPoolId = getPoolId;
exports.getPoolIdAsAddress = getPoolIdAsAddress;
exports.getPoolRegistery = getPoolRegistery;
exports.getPoolReserves = getPoolReserves;
exports.getPoolReservesDecimals = getPoolReservesDecimals;
exports.getPoolStableConfig = getPoolStableConfig;
exports.getPoolTotalSupply = getPoolTotalSupply;
exports.getPoolWeightedConfig = getPoolWeightedConfig;
exports.getPoolhiveAddr = getPoolhiveAddr;
exports.getScalingFactor = getScalingFactor;
exports.getSuiHivePoolForPol = getSuiHivePoolForPol;
exports.harvestCollectedDegensuiFee = harvestCollectedDegensuiFee;
exports.harvestDsuiForCollectedFeeX = harvestDsuiForCollectedFeeX;
exports.harvestDsuiForCollectedFeeY = harvestDsuiForCollectedFeeY;
exports.harvestSuiForCollectedFeeX = harvestSuiForCollectedFeeX;
exports.harvestSuiForCollectedFeeY = harvestSuiForCollectedFeeY;
exports.harvestSuiOneHopViaXYSuiX = harvestSuiOneHopViaXYSuiX;
exports.harvestSuiOneHopViaXYSuiY = harvestSuiOneHopViaXYSuiY;
exports.harvestSuiOneHopViaXYXSui = harvestSuiOneHopViaXYXSui;
exports.harvestSuiOneHopViaXYYSui = harvestSuiOneHopViaXYYSui;
exports.imbalancedExit = imbalancedExit;
exports.incrementLiquidityPool = incrementLiquidityPool;
exports.incrementPoolRegistry = incrementPoolRegistry;
exports.initializePoolRegistry = initializePoolRegistry;
exports.internalAddLiquidity = internalAddLiquidity;
exports.internalRegisterPool = internalRegisterPool;
exports.internalRemoveLiquidity = internalRemoveLiquidity;
exports.internalSwap = internalSwap;
exports.isPoolRegistered = isPoolRegistered;
exports.lockInSuiBeePoolAddr = lockInSuiBeePoolAddr;
exports.lockInSuiHivePoolAddr = lockInSuiHivePoolAddr;
exports.payFlashloan = payFlashloan;
exports.queryAcrossAllPools = queryAcrossAllPools;
exports.queryFirstPool = queryFirstPool;
exports.querySwap = querySwap;
exports.registerPoolBothCoinMetadataAvailable = registerPoolBothCoinMetadataAvailable;
exports.registerPoolNoMetadataAvailable = registerPoolNoMetadataAvailable;
exports.registerPoolXMetadataAvailable = registerPoolXMetadataAvailable;
exports.registerPoolYMetadataAvailable = registerPoolYMetadataAvailable;
exports.registryAdd = registryAdd;
exports.removeLiquidity = removeLiquidity;
exports.removeLiquidityFromXBeePool = removeLiquidityFromXBeePool;
exports.setPoolHiveAddr = setPoolHiveAddr;
exports.stakeAndDistributeHarvestedDegensui = stakeAndDistributeHarvestedDegensui;
exports.stakeAndHarvestCollectedSuiFee = stakeAndHarvestCollectedSuiFee;
exports.swapBeeCoins = swapBeeCoins;
exports.updateCumulativePrices = updateCumulativePrices;
exports.updateCurvedAAndGamma = updateCurvedAAndGamma;
exports.updateCurvedConfigFeeParams = updateCurvedConfigFeeParams;
exports.updateFeeForPool = updateFeeForPool;
exports.updateKraftFee = updateKraftFee;
exports.updateSuiPolDistribution = updateSuiPolDistribution;
exports.updateThirdPoolForPol = updateThirdPoolForPol;
const structs_1 = require("../../_dependencies/source/0x1/option/structs");
const structs_2 = require("../../_dependencies/source/0x2/object/structs");
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.twopool.PUBLISHED_AT;
function swap(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::swap`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.xIn),
            (0, util_1.pure)(tx, args.xOutMin, `u64`),
            (0, util_1.obj)(tx, args.yIn),
            (0, util_1.pure)(tx, args.yOutMin, `u64`),
            (0, util_1.pure)(tx, args.isGiveIn, `bool`),
        ],
    });
}
function init(tx) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::init`,
        arguments: [],
    });
}
function updateWeightedConfig(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_weighted_config`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.dexCap),
            (0, util_1.pure)(tx, args.newWeights, `vector<u64>`),
            (0, util_1.pure)(tx, args.newExitFee, `u64`),
        ],
    });
}
function updateStableConfig(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_stable_config`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.dexCap),
            (0, util_1.pure)(tx, args.nextAmp, `u64`),
            (0, util_1.pure)(tx, args.initAmpTime, `u64`),
            (0, util_1.pure)(tx, args.nextAmpTime, `u64`),
        ],
    });
}
function updateInitialPrices(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_initial_prices`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.cap),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.pure)(tx, args.initialPrices, `vector<u256>`),
        ],
    });
}
function addLiquidity(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::add_liquidity`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.coinX),
            (0, util_1.obj)(tx, args.coinY),
            (0, util_1.pure)(tx, args.minLpMinted, `u64`),
        ],
    });
}
function claimPolFromStreamerBuzz(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::claim_pol_from_streamer_buzz`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.cap),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.hiveVault),
            (0, util_1.obj)(tx, args.suiHivePool),
            (0, util_1.obj)(tx, args.suiBeePool),
            (0, util_1.obj)(tx, args.thirdPool),
            (0, util_1.obj)(tx, args.suiFeeCollector),
        ],
    });
}
function collectFeeForPool(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::collect_fee_for_pool`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.xFeeCollector),
            (0, util_1.obj)(tx, args.yFeeCollector),
        ],
    });
}
function dangerousBurnLpCoins(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::dangerous_burn_lp_coins`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, args.pool), (0, util_1.obj)(tx, args.lpCoinsToBurn)],
    });
}
function deployerRegisterPoolBothCoinMetadataAvailable(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_both_coin_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.cap),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.suiBalance),
            (0, util_1.obj)(tx, args.feeCollector),
            (0, util_1.obj)(tx, args.metadataX),
            (0, util_1.obj)(tx, args.metadataY),
            (0, util_1.pure)(tx, args.initParams, `vector<u64>`),
            (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`),
            (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`),
        ],
    });
}
function deployerRegisterPoolXMetadataAvailable(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_x_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.cap),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.suiBalance),
            (0, util_1.obj)(tx, args.feeCollector),
            (0, util_1.obj)(tx, args.metadataX),
            (0, util_1.pure)(tx, args.initParams, `vector<u64>`),
            (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`),
            (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`),
        ],
    });
}
function deployerRegisterPoolYMetadataAvailable(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_y_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.cap),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.suiBalance),
            (0, util_1.obj)(tx, args.feeCollector),
            (0, util_1.obj)(tx, args.metadataY),
            (0, util_1.pure)(tx, args.initParams, `vector<u64>`),
            (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`),
            (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`),
        ],
    });
}
function distributeDegensui(tx, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::distribute_degensui`,
        arguments: [
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
            (0, util_1.obj)(tx, args.degensuiBalance),
        ],
    });
}
function enablePublicPools(tx, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::enable_public_pools`,
        arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.registry)],
    });
}
function flashloan(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::flashloan`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.pure)(tx, args.xLoan, `u64`),
            (0, util_1.pure)(tx, args.yLoan, `u64`),
        ],
    });
}
function getCollectedFee(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_collected_fee`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getDecimalForCoin(tx, typeArg, config) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_decimal_for_coin`,
        typeArguments: [typeArg],
        arguments: [(0, util_1.obj)(tx, config)],
    });
}
function getLiquidityPoolId(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_liquidity_pool_id`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolCumulativePrices(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_cumulative_prices`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolCurvedConfigAmpGamma(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_amp_gamma`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolCurvedConfigFee(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_fee`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolCurvedConfigPrecision(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_precision`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolCurvedConfigPricesInfo(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_prices_info`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolCurvedConfigXcp(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_xcp`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolFeeConfig(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_fee_config`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolId(tx, typeArgs, registry) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_id`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, registry)],
    });
}
function getPoolIdAsAddress(tx, typeArgs, registry) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_id_as_address`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, registry)],
    });
}
function getPoolRegistery(tx, registry) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_registery`,
        arguments: [(0, util_1.obj)(tx, registry)],
    });
}
function getPoolReserves(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_reserves`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolReservesDecimals(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_reserves_decimals`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolStableConfig(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_stable_config`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolTotalSupply(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_total_supply`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolWeightedConfig(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_weighted_config`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getPoolhiveAddr(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_poolhive_addr`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function getScalingFactor(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_scaling_factor`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.obj)(tx, args.pool)],
    });
}
function getSuiHivePoolForPol(tx, registry) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_sui_hive_pool_for_pol`,
        arguments: [(0, util_1.obj)(tx, registry)],
    });
}
function harvestCollectedDegensuiFee(tx, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_collected_degensui_fee`,
        arguments: [
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.dsuiFeeCollector),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
        ],
    });
}
function harvestDsuiForCollectedFeeX(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_dsui_for_collected_fee_x`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.xFeeCollector),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
        ],
    });
}
function harvestDsuiForCollectedFeeY(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_dsui_for_collected_fee_y`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.yFeeCollector),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
        ],
    });
}
function harvestSuiForCollectedFeeX(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_for_collected_fee_x`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.suiSystemState),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.dsuiVault),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.xFeeCollector),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
        ],
    });
}
function harvestSuiForCollectedFeeY(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_for_collected_fee_y`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.suiSystemState),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.dsuiVault),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.yFeeCollector),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
        ],
    });
}
function harvestSuiOneHopViaXYSuiX(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_one_hop_via_x_y_sui_x`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.suiSystemState),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.dsuiVault),
            (0, util_1.obj)(tx, args.xYPool),
            (0, util_1.obj)(tx, args.suiXPool),
            (0, util_1.obj)(tx, args.yFeeCollector),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
        ],
    });
}
function harvestSuiOneHopViaXYSuiY(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_one_hop_via_x_y_sui_y`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.suiSystemState),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.dsuiVault),
            (0, util_1.obj)(tx, args.xYPool),
            (0, util_1.obj)(tx, args.suiYPool),
            (0, util_1.obj)(tx, args.xFeeCollector),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
        ],
    });
}
function harvestSuiOneHopViaXYXSui(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_one_hop_via_x_y_x_sui`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.suiSystemState),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.dsuiVault),
            (0, util_1.obj)(tx, args.xYPool),
            (0, util_1.obj)(tx, args.xSuiPool),
            (0, util_1.obj)(tx, args.yFeeCollector),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
        ],
    });
}
function harvestSuiOneHopViaXYYSui(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_one_hop_via_x_y_y_sui`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.suiSystemState),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.dsuiVault),
            (0, util_1.obj)(tx, args.xYPool),
            (0, util_1.obj)(tx, args.ySuiPool),
            (0, util_1.obj)(tx, args.xFeeCollector),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
        ],
    });
}
function imbalancedExit(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::imbalanced_exit`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.pure)(tx, args.lpCoinSupply, `u64`),
            (0, util_1.pure)(tx, args.existingLiquidity, `vector<u64>`),
            (0, util_1.pure)(tx, args.coinsToRefund, `vector<u64>`),
            (0, util_1.pure)(tx, args.totalFeeBps, `u64`),
        ],
    });
}
function incrementLiquidityPool(tx, typeArgs, pool) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::increment_liquidity_pool`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, pool)],
    });
}
function incrementPoolRegistry(tx, registry) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::increment_pool_registry`,
        arguments: [(0, util_1.obj)(tx, registry)],
    });
}
function initializePoolRegistry(tx, feeClaimCap) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::initialize_pool_registry`,
        arguments: [(0, util_1.obj)(tx, feeClaimCap)],
    });
}
function internalAddLiquidity(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::internal_add_liquidity`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.coinX),
            (0, util_1.obj)(tx, args.coinY),
        ],
    });
}
function internalRegisterPool(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::internal_register_pool`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.suiBalance),
            (0, util_1.obj)(tx, args.feeCollector),
            (0, util_1.pure)(tx, args.decimalX, `u8`),
            (0, util_1.pure)(tx, args.decimalY, `u8`),
            (0, util_1.pure)(tx, args.initParams, `vector<u64>`),
            (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`),
            (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`),
        ],
    });
}
function internalRemoveLiquidity(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::internal_remove_liquidity`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.pure)(tx, args.lpCoinsProvidedVal, `u64`),
            (0, util_1.pure)(tx, args.coinXOutVal, `u64`),
            (0, util_1.pure)(tx, args.coinYOutVal, `u64`),
        ],
    });
}
function internalSwap(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::internal_swap`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.xIn),
            (0, util_1.pure)(tx, args.xOutMin, `u64`),
            (0, util_1.obj)(tx, args.yIn),
            (0, util_1.pure)(tx, args.yOutMin, `u64`),
            (0, util_1.pure)(tx, args.isGiveIn, `bool`),
        ],
    });
}
function isPoolRegistered(tx, typeArgs, registry) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::is_pool_registered`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, registry)],
    });
}
function lockInSuiBeePoolAddr(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::lock_in_sui_bee_pool_addr`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.cap),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.metadataY),
            (0, util_1.obj)(tx, args.suiBalance),
            (0, util_1.obj)(tx, args.feeCollector),
            (0, util_1.pure)(tx, args.initParams, `vector<u64>`),
            (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`),
            (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`),
        ],
    });
}
function lockInSuiHivePoolAddr(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::lock_in_sui_hive_pool_addr`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.cap),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.metadataY),
            (0, util_1.obj)(tx, args.suiBalance),
            (0, util_1.obj)(tx, args.feeCollector),
            (0, util_1.pure)(tx, args.initParams, `vector<u64>`),
            (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`),
            (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`),
        ],
    });
}
function payFlashloan(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::pay_flashloan`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.xIn),
            (0, util_1.obj)(tx, args.yIn),
            (0, util_1.obj)(tx, args.loan),
        ],
    });
}
function queryAcrossAllPools(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::query_across_all_pools`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, args.registry), (0, util_1.pure)(tx, args.limit, `u64`)],
    });
}
function queryFirstPool(tx, registry) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::query_first_pool`,
        arguments: [(0, util_1.obj)(tx, registry)],
    });
}
function querySwap(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::query_swap`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.pure)(tx, args.xIn, `u64`),
            (0, util_1.pure)(tx, args.xOutMin, `u64`),
            (0, util_1.pure)(tx, args.yIn, `u64`),
            (0, util_1.pure)(tx, args.yOutMin, `u64`),
            (0, util_1.pure)(tx, args.isGiveIn, `bool`),
        ],
    });
}
function registerPoolBothCoinMetadataAvailable(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::register_pool_both_coin_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.suiBalance),
            (0, util_1.obj)(tx, args.feeCollector),
            (0, util_1.obj)(tx, args.metadataX),
            (0, util_1.obj)(tx, args.metadataY),
            (0, util_1.pure)(tx, args.initParams, `vector<u64>`),
            (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`),
            (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`),
        ],
    });
}
function registerPoolNoMetadataAvailable(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::register_pool_no_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.suiBalance),
            (0, util_1.obj)(tx, args.feeCollector),
            (0, util_1.pure)(tx, args.initParams, `vector<u64>`),
            (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`),
            (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`),
        ],
    });
}
function registerPoolXMetadataAvailable(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::register_pool_x_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.suiBalance),
            (0, util_1.obj)(tx, args.feeCollector),
            (0, util_1.obj)(tx, args.metadataX),
            (0, util_1.pure)(tx, args.initParams, `vector<u64>`),
            (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`),
            (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`),
        ],
    });
}
function registerPoolYMetadataAvailable(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::register_pool_y_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.suiBalance),
            (0, util_1.obj)(tx, args.feeCollector),
            (0, util_1.obj)(tx, args.metadataY),
            (0, util_1.pure)(tx, args.initParams, `vector<u64>`),
            (0, util_1.pure)(tx, args.initialPrices, `${structs_1.Option.$typeName}<vector<u256>>`),
            (0, util_1.pure)(tx, args.weights, `${structs_1.Option.$typeName}<vector<u64>>`),
        ],
    });
}
function registryAdd(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::registry_add`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.pure)(tx, args.decimalX, `u8`),
            (0, util_1.pure)(tx, args.decimalY, `u8`),
            (0, util_1.pure)(tx, args.poolId, `${structs_2.ID.$typeName}`),
        ],
    });
}
function removeLiquidity(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::remove_liquidity`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.lpCoins),
            (0, util_1.pure)(tx, args.coinXOutVal, `u64`),
            (0, util_1.pure)(tx, args.coinYOutVal, `u64`),
            (0, util_1.pure)(tx, args.maxLpCoinsToBurn, `u64`),
        ],
    });
}
function removeLiquidityFromXBeePool(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::remove_liquidity_from_x_bee_pool`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.lpCoins),
            (0, util_1.pure)(tx, args.coinXOutVal, `u64`),
            (0, util_1.pure)(tx, args.coinYOutVal, `u64`),
            (0, util_1.pure)(tx, args.maxLpCoinsToBurn, `u64`),
        ],
    });
}
function setPoolHiveAddr(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::set_pool_hive_addr`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.dexCap),
            (0, util_1.pure)(tx, args.poolHiveAddr, `address`),
        ],
    });
}
function stakeAndDistributeHarvestedDegensui(tx, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::stake_and_distribute_harvested_degensui`,
        arguments: [
            (0, util_1.obj)(tx, args.suiSystemState),
            (0, util_1.obj)(tx, args.dsuiVault),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
            (0, util_1.obj)(tx, args.suiBalance),
        ],
    });
}
function stakeAndHarvestCollectedSuiFee(tx, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::stake_and_harvest_collected_sui_fee`,
        arguments: [
            (0, util_1.obj)(tx, args.suiSystemState),
            (0, util_1.obj)(tx, args.config),
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.dsuiVault),
            (0, util_1.obj)(tx, args.suiFeeCollector),
            (0, util_1.obj)(tx, args.dsuiDisperser),
            (0, util_1.obj)(tx, args.treasury),
        ],
    });
}
function swapBeeCoins(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::swap_bee_coins`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.clock),
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.xIn),
            (0, util_1.pure)(tx, args.xOutMin, `u64`),
            (0, util_1.obj)(tx, args.yIn),
            (0, util_1.pure)(tx, args.yOutMin, `u64`),
            (0, util_1.pure)(tx, args.isGiveIn, `bool`),
        ],
    });
}
function updateCumulativePrices(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_cumulative_prices`,
        typeArguments: typeArgs,
        arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.obj)(tx, args.pool)],
    });
}
function updateCurvedAAndGamma(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_curved_A_and_gamma`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.dexCap),
            (0, util_1.pure)(tx, args.initAGammaTime, `u64`),
            (0, util_1.pure)(tx, args.nextAmp, `u64`),
            (0, util_1.pure)(tx, args.nextGamma, `u256`),
            (0, util_1.pure)(tx, args.futureAGammaTime, `u64`),
        ],
    });
}
function updateCurvedConfigFeeParams(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_curved_config_fee_params`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.dexCap),
            (0, util_1.pure)(tx, args.newMidFee, `u64`),
            (0, util_1.pure)(tx, args.newOutFee, `u64`),
            (0, util_1.pure)(tx, args.newFeeGamma, `u64`),
            (0, util_1.pure)(tx, args.newMaHalfTime, `u64`),
            (0, util_1.pure)(tx, args.newAllowedExtraProfit, `u64`),
            (0, util_1.pure)(tx, args.newAdjustmentStep, `u64`),
        ],
    });
}
function updateFeeForPool(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_fee_for_pool`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.pool),
            (0, util_1.obj)(tx, args.dexCap),
            (0, util_1.pure)(tx, args.totalFeeBps, `u64`),
            (0, util_1.pure)(tx, args.hiveFeePercent, `u64`),
        ],
    });
}
function updateKraftFee(tx, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_kraft_fee`,
        arguments: [
            (0, util_1.obj)(tx, args.registry),
            (0, util_1.obj)(tx, args.hiveDaoCap),
            (0, util_1.pure)(tx, args.kraftFee, `u64`),
        ],
    });
}
function updateSuiPolDistribution(tx, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_sui_pol_distribution`,
        arguments: [
            (0, util_1.obj)(tx, args.poolRegistry),
            (0, util_1.obj)(tx, args.hiveDaoCap),
            (0, util_1.pure)(tx, args.suiForHivePoolPct, `u64`),
            (0, util_1.pure)(tx, args.suiForBeePoolPct, `u64`),
        ],
    });
}
function updateThirdPoolForPol(tx, typeArgs, args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_third_pool_for_pol`,
        typeArguments: typeArgs,
        arguments: [
            (0, util_1.obj)(tx, args.poolRegistry),
            (0, util_1.obj)(tx, args.hiveDaoCap),
            (0, util_1.obj)(tx, args.thirdPool),
        ],
    });
}
