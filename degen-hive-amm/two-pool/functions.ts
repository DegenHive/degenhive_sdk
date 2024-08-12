import { Option } from "../../_dependencies/source/0x1/option/structs";
import { ID } from "../../_dependencies/source/0x2/object/structs";
import { obj, pure } from "../../_framework/util";
import {
    TransactionBlock,
    TransactionArgument,
    TransactionObjectInput,
} from "@mysten/sui.js/transactions";
import { twopool } from "..";
const PUBLISHED_AT = twopool.PUBLISHED_AT;

export interface SwapArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    xIn: TransactionObjectInput;
    xOutMin: bigint | TransactionArgument;
    yIn: TransactionObjectInput;
    yOutMin: bigint | TransactionArgument;
    isGiveIn: boolean | TransactionArgument;
}

export function swap(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: SwapArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::swap`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            obj(tx, args.xIn),
            pure(tx, args.xOutMin, `u64`),
            obj(tx, args.yIn),
            pure(tx, args.yOutMin, `u64`),
            pure(tx, args.isGiveIn, `bool`),
        ],
    });
}

export function init(tx: TransactionBlock) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::init`,
        arguments: [],
    });
}

export interface UpdateWeightedConfigArgs {
    pool: TransactionObjectInput;
    dexCap: TransactionObjectInput;
    newWeights: Array<bigint | TransactionArgument> | TransactionArgument;
    newExitFee: bigint | TransactionArgument;
}

export function updateWeightedConfig(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: UpdateWeightedConfigArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_weighted_config`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.pool),
            obj(tx, args.dexCap),
            pure(tx, args.newWeights, `vector<u64>`),
            pure(tx, args.newExitFee, `u64`),
        ],
    });
}

export interface UpdateStableConfigArgs {
    pool: TransactionObjectInput;
    dexCap: TransactionObjectInput;
    nextAmp: bigint | TransactionArgument;
    initAmpTime: bigint | TransactionArgument;
    nextAmpTime: bigint | TransactionArgument;
}

export function updateStableConfig(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: UpdateStableConfigArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_stable_config`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.pool),
            obj(tx, args.dexCap),
            pure(tx, args.nextAmp, `u64`),
            pure(tx, args.initAmpTime, `u64`),
            pure(tx, args.nextAmpTime, `u64`),
        ],
    });
}

export interface UpdateInitialPricesArgs {
    cap: TransactionObjectInput;
    pool: TransactionObjectInput;
    initialPrices: Array<bigint | TransactionArgument> | TransactionArgument;
}

export function updateInitialPrices(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: UpdateInitialPricesArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_initial_prices`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.cap),
            obj(tx, args.pool),
            pure(tx, args.initialPrices, `vector<u256>`),
        ],
    });
}

export interface AddLiquidityArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    coinX: TransactionObjectInput;
    coinY: TransactionObjectInput;
    minLpMinted: bigint | TransactionArgument;
}

export function addLiquidity(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: AddLiquidityArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::add_liquidity`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            obj(tx, args.coinX),
            obj(tx, args.coinY),
            pure(tx, args.minLpMinted, `u64`),
        ],
    });
}

export interface ClaimPolFromStreamerBuzzArgs {
    clock: TransactionObjectInput;
    cap: TransactionObjectInput;
    registry: TransactionObjectInput;
    hiveVault: TransactionObjectInput;
    suiHivePool: TransactionObjectInput;
    suiBeePool: TransactionObjectInput;
    thirdPool: TransactionObjectInput;
    suiFeeCollector: TransactionObjectInput;
}

export function claimPolFromStreamerBuzz(
    tx: TransactionBlock,
    typeArgs: [string, string, string, string, string, string],
    args: ClaimPolFromStreamerBuzzArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::claim_pol_from_streamer_buzz`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.cap),
            obj(tx, args.registry),
            obj(tx, args.hiveVault),
            obj(tx, args.suiHivePool),
            obj(tx, args.suiBeePool),
            obj(tx, args.thirdPool),
            obj(tx, args.suiFeeCollector),
        ],
    });
}

export interface CollectFeeForPoolArgs {
    pool: TransactionObjectInput;
    xFeeCollector: TransactionObjectInput;
    yFeeCollector: TransactionObjectInput;
}

export function collectFeeForPool(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: CollectFeeForPoolArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::collect_fee_for_pool`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.pool),
            obj(tx, args.xFeeCollector),
            obj(tx, args.yFeeCollector),
        ],
    });
}

export interface DangerousBurnLpCoinsArgs {
    pool: TransactionObjectInput;
    lpCoinsToBurn: TransactionObjectInput;
}

export function dangerousBurnLpCoins(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: DangerousBurnLpCoinsArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::dangerous_burn_lp_coins`,
        typeArguments: typeArgs,
        arguments: [obj(tx, args.pool), obj(tx, args.lpCoinsToBurn)],
    });
}

export interface DeployerRegisterPoolBothCoinMetadataAvailableArgs {
    clock: TransactionObjectInput;
    cap: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
    feeCollector: TransactionObjectInput;
    metadataX: TransactionObjectInput;
    metadataY: TransactionObjectInput;
    initParams: Array<bigint | TransactionArgument> | TransactionArgument;
    initialPrices:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
    weights:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
}

export function deployerRegisterPoolBothCoinMetadataAvailable(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: DeployerRegisterPoolBothCoinMetadataAvailableArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_both_coin_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.cap),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.suiBalance),
            obj(tx, args.feeCollector),
            obj(tx, args.metadataX),
            obj(tx, args.metadataY),
            pure(tx, args.initParams, `vector<u64>`),
            pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`),
            pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`),
        ],
    });
}

export interface DeployerRegisterPoolXMetadataAvailableArgs {
    clock: TransactionObjectInput;
    cap: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
    feeCollector: TransactionObjectInput;
    metadataX: TransactionObjectInput;
    initParams: Array<bigint | TransactionArgument> | TransactionArgument;
    initialPrices:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
    weights:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
}

export function deployerRegisterPoolXMetadataAvailable(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: DeployerRegisterPoolXMetadataAvailableArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_x_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.cap),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.suiBalance),
            obj(tx, args.feeCollector),
            obj(tx, args.metadataX),
            pure(tx, args.initParams, `vector<u64>`),
            pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`),
            pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`),
        ],
    });
}

export interface DeployerRegisterPoolYMetadataAvailableArgs {
    clock: TransactionObjectInput;
    cap: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
    feeCollector: TransactionObjectInput;
    metadataY: TransactionObjectInput;
    initParams: Array<bigint | TransactionArgument> | TransactionArgument;
    initialPrices:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
    weights:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
}

export function deployerRegisterPoolYMetadataAvailable(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: DeployerRegisterPoolYMetadataAvailableArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::deployer_register_pool_y_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.cap),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.suiBalance),
            obj(tx, args.feeCollector),
            obj(tx, args.metadataY),
            pure(tx, args.initParams, `vector<u64>`),
            pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`),
            pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`),
        ],
    });
}

export interface DistributeDegensuiArgs {
    config: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
    degensuiBalance: TransactionObjectInput;
}

export function distributeDegensui(
    tx: TransactionBlock,
    args: DistributeDegensuiArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::distribute_degensui`,
        arguments: [
            obj(tx, args.config),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
            obj(tx, args.degensuiBalance),
        ],
    });
}

export interface EnablePublicPoolsArgs {
    cap: TransactionObjectInput;
    registry: TransactionObjectInput;
}

export function enablePublicPools(
    tx: TransactionBlock,
    args: EnablePublicPoolsArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::enable_public_pools`,
        arguments: [obj(tx, args.cap), obj(tx, args.registry)],
    });
}

export interface FlashloanArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    xLoan: bigint | TransactionArgument;
    yLoan: bigint | TransactionArgument;
}

export function flashloan(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: FlashloanArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::flashloan`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            pure(tx, args.xLoan, `u64`),
            pure(tx, args.yLoan, `u64`),
        ],
    });
}

export function getCollectedFee(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_collected_fee`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getDecimalForCoin(
    tx: TransactionBlock,
    typeArg: string,
    config: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_decimal_for_coin`,
        typeArguments: [typeArg],
        arguments: [obj(tx, config)],
    });
}

export function getLiquidityPoolId(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_liquidity_pool_id`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolCumulativePrices(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_cumulative_prices`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolCurvedConfigAmpGamma(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_amp_gamma`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolCurvedConfigFee(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_fee`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolCurvedConfigPrecision(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_precision`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolCurvedConfigPricesInfo(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_prices_info`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolCurvedConfigXcp(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_curved_config_xcp`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolFeeConfig(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_fee_config`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolId(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    registry: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_id`,
        typeArguments: typeArgs,
        arguments: [obj(tx, registry)],
    });
}

export function getPoolIdAsAddress(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    registry: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_id_as_address`,
        typeArguments: typeArgs,
        arguments: [obj(tx, registry)],
    });
}

export function getPoolRegistery(
    tx: TransactionBlock,
    registry: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_registery`,
        arguments: [obj(tx, registry)],
    });
}

export function getPoolReserves(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_reserves`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolReservesDecimals(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_reserves_decimals`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolStableConfig(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_stable_config`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolTotalSupply(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_total_supply`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolWeightedConfig(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_pool_weighted_config`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function getPoolhiveAddr(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_poolhive_addr`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export interface GetScalingFactorArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
}

export function getScalingFactor(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: GetScalingFactorArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_scaling_factor`,
        typeArguments: typeArgs,
        arguments: [obj(tx, args.clock), obj(tx, args.pool)],
    });
}

export function getSuiHivePoolForPol(
    tx: TransactionBlock,
    registry: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::get_sui_hive_pool_for_pol`,
        arguments: [obj(tx, registry)],
    });
}

export interface HarvestCollectedDegensuiFeeArgs {
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    dsuiFeeCollector: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
}

export function harvestCollectedDegensuiFee(
    tx: TransactionBlock,
    args: HarvestCollectedDegensuiFeeArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_collected_degensui_fee`,
        arguments: [
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.dsuiFeeCollector),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
        ],
    });
}

export interface HarvestDsuiForCollectedFeeXArgs {
    clock: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    pool: TransactionObjectInput;
    xFeeCollector: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
}

export function harvestDsuiForCollectedFeeX(
    tx: TransactionBlock,
    typeArgs: [string, string],
    args: HarvestDsuiForCollectedFeeXArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_dsui_for_collected_fee_x`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.pool),
            obj(tx, args.xFeeCollector),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
        ],
    });
}

export interface HarvestDsuiForCollectedFeeYArgs {
    clock: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    pool: TransactionObjectInput;
    yFeeCollector: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
}

export function harvestDsuiForCollectedFeeY(
    tx: TransactionBlock,
    typeArgs: [string, string],
    args: HarvestDsuiForCollectedFeeYArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_dsui_for_collected_fee_y`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.pool),
            obj(tx, args.yFeeCollector),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
        ],
    });
}

export interface HarvestSuiForCollectedFeeXArgs {
    clock: TransactionObjectInput;
    suiSystemState: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    dsuiVault: TransactionObjectInput;
    pool: TransactionObjectInput;
    xFeeCollector: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
}

export function harvestSuiForCollectedFeeX(
    tx: TransactionBlock,
    typeArgs: [string, string],
    args: HarvestSuiForCollectedFeeXArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_for_collected_fee_x`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.suiSystemState),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.dsuiVault),
            obj(tx, args.pool),
            obj(tx, args.xFeeCollector),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
        ],
    });
}

export interface HarvestSuiForCollectedFeeYArgs {
    clock: TransactionObjectInput;
    suiSystemState: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    dsuiVault: TransactionObjectInput;
    pool: TransactionObjectInput;
    yFeeCollector: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
}

export function harvestSuiForCollectedFeeY(
    tx: TransactionBlock,
    typeArgs: [string, string],
    args: HarvestSuiForCollectedFeeYArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_for_collected_fee_y`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.suiSystemState),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.dsuiVault),
            obj(tx, args.pool),
            obj(tx, args.yFeeCollector),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
        ],
    });
}

export interface HarvestSuiOneHopViaXYSuiXArgs {
    clock: TransactionObjectInput;
    suiSystemState: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    dsuiVault: TransactionObjectInput;
    xYPool: TransactionObjectInput;
    suiXPool: TransactionObjectInput;
    yFeeCollector: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
}

export function harvestSuiOneHopViaXYSuiX(
    tx: TransactionBlock,
    typeArgs: [string, string, string, string],
    args: HarvestSuiOneHopViaXYSuiXArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_one_hop_via_x_y_sui_x`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.suiSystemState),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.dsuiVault),
            obj(tx, args.xYPool),
            obj(tx, args.suiXPool),
            obj(tx, args.yFeeCollector),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
        ],
    });
}

export interface HarvestSuiOneHopViaXYSuiYArgs {
    clock: TransactionObjectInput;
    suiSystemState: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    dsuiVault: TransactionObjectInput;
    xYPool: TransactionObjectInput;
    suiYPool: TransactionObjectInput;
    xFeeCollector: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
}

export function harvestSuiOneHopViaXYSuiY(
    tx: TransactionBlock,
    typeArgs: [string, string, string, string],
    args: HarvestSuiOneHopViaXYSuiYArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_one_hop_via_x_y_sui_y`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.suiSystemState),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.dsuiVault),
            obj(tx, args.xYPool),
            obj(tx, args.suiYPool),
            obj(tx, args.xFeeCollector),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
        ],
    });
}

export interface HarvestSuiOneHopViaXYXSuiArgs {
    clock: TransactionObjectInput;
    suiSystemState: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    dsuiVault: TransactionObjectInput;
    xYPool: TransactionObjectInput;
    xSuiPool: TransactionObjectInput;
    yFeeCollector: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
}

export function harvestSuiOneHopViaXYXSui(
    tx: TransactionBlock,
    typeArgs: [string, string, string, string],
    args: HarvestSuiOneHopViaXYXSuiArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_one_hop_via_x_y_x_sui`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.suiSystemState),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.dsuiVault),
            obj(tx, args.xYPool),
            obj(tx, args.xSuiPool),
            obj(tx, args.yFeeCollector),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
        ],
    });
}

export interface HarvestSuiOneHopViaXYYSuiArgs {
    clock: TransactionObjectInput;
    suiSystemState: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    dsuiVault: TransactionObjectInput;
    xYPool: TransactionObjectInput;
    ySuiPool: TransactionObjectInput;
    xFeeCollector: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
}

export function harvestSuiOneHopViaXYYSui(
    tx: TransactionBlock,
    typeArgs: [string, string, string, string],
    args: HarvestSuiOneHopViaXYYSuiArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::harvest_sui_one_hop_via_x_y_y_sui`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.suiSystemState),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.dsuiVault),
            obj(tx, args.xYPool),
            obj(tx, args.ySuiPool),
            obj(tx, args.xFeeCollector),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
        ],
    });
}

export interface ImbalancedExitArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    lpCoinSupply: bigint | TransactionArgument;
    existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument;
    coinsToRefund: Array<bigint | TransactionArgument> | TransactionArgument;
    totalFeeBps: bigint | TransactionArgument;
}

export function imbalancedExit(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: ImbalancedExitArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::imbalanced_exit`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            pure(tx, args.lpCoinSupply, `u64`),
            pure(tx, args.existingLiquidity, `vector<u64>`),
            pure(tx, args.coinsToRefund, `vector<u64>`),
            pure(tx, args.totalFeeBps, `u64`),
        ],
    });
}

export function incrementLiquidityPool(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    pool: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::increment_liquidity_pool`,
        typeArguments: typeArgs,
        arguments: [obj(tx, pool)],
    });
}

export function incrementPoolRegistry(
    tx: TransactionBlock,
    registry: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::increment_pool_registry`,
        arguments: [obj(tx, registry)],
    });
}

export function initializePoolRegistry(
    tx: TransactionBlock,
    feeClaimCap: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::initialize_pool_registry`,
        arguments: [obj(tx, feeClaimCap)],
    });
}

export interface InternalAddLiquidityArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    coinX: TransactionObjectInput;
    coinY: TransactionObjectInput;
}

export function internalAddLiquidity(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: InternalAddLiquidityArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::internal_add_liquidity`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            obj(tx, args.coinX),
            obj(tx, args.coinY),
        ],
    });
}

export interface InternalRegisterPoolArgs {
    clock: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
    feeCollector: TransactionObjectInput;
    decimalX: number | TransactionArgument;
    decimalY: number | TransactionArgument;
    initParams: Array<bigint | TransactionArgument> | TransactionArgument;
    initialPrices:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
    weights:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
}

export function internalRegisterPool(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: InternalRegisterPoolArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::internal_register_pool`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.suiBalance),
            obj(tx, args.feeCollector),
            pure(tx, args.decimalX, `u8`),
            pure(tx, args.decimalY, `u8`),
            pure(tx, args.initParams, `vector<u64>`),
            pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`),
            pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`),
        ],
    });
}

export interface InternalRemoveLiquidityArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    lpCoinsProvidedVal: bigint | TransactionArgument;
    coinXOutVal: bigint | TransactionArgument;
    coinYOutVal: bigint | TransactionArgument;
}

export function internalRemoveLiquidity(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: InternalRemoveLiquidityArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::internal_remove_liquidity`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            pure(tx, args.lpCoinsProvidedVal, `u64`),
            pure(tx, args.coinXOutVal, `u64`),
            pure(tx, args.coinYOutVal, `u64`),
        ],
    });
}

export interface InternalSwapArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    xIn: TransactionObjectInput;
    xOutMin: bigint | TransactionArgument;
    yIn: TransactionObjectInput;
    yOutMin: bigint | TransactionArgument;
    isGiveIn: boolean | TransactionArgument;
}

export function internalSwap(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: InternalSwapArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::internal_swap`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            obj(tx, args.xIn),
            pure(tx, args.xOutMin, `u64`),
            obj(tx, args.yIn),
            pure(tx, args.yOutMin, `u64`),
            pure(tx, args.isGiveIn, `bool`),
        ],
    });
}

export function isPoolRegistered(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    registry: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::is_pool_registered`,
        typeArguments: typeArgs,
        arguments: [obj(tx, registry)],
    });
}

export interface LockInSuiBeePoolAddrArgs {
    clock: TransactionObjectInput;
    cap: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    metadataY: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
    feeCollector: TransactionObjectInput;
    initParams: Array<bigint | TransactionArgument> | TransactionArgument;
    initialPrices:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
    weights:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
}

export function lockInSuiBeePoolAddr(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: LockInSuiBeePoolAddrArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::lock_in_sui_bee_pool_addr`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.cap),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.metadataY),
            obj(tx, args.suiBalance),
            obj(tx, args.feeCollector),
            pure(tx, args.initParams, `vector<u64>`),
            pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`),
            pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`),
        ],
    });
}

export interface LockInSuiHivePoolAddrArgs {
    clock: TransactionObjectInput;
    cap: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    metadataY: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
    feeCollector: TransactionObjectInput;
    initParams: Array<bigint | TransactionArgument> | TransactionArgument;
    initialPrices:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
    weights:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
}

export function lockInSuiHivePoolAddr(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: LockInSuiHivePoolAddrArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::lock_in_sui_hive_pool_addr`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.cap),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.metadataY),
            obj(tx, args.suiBalance),
            obj(tx, args.feeCollector),
            pure(tx, args.initParams, `vector<u64>`),
            pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`),
            pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`),
        ],
    });
}

export interface PayFlashloanArgs {
    pool: TransactionObjectInput;
    xIn: TransactionObjectInput;
    yIn: TransactionObjectInput;
    loan: TransactionObjectInput;
}

export function payFlashloan(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: PayFlashloanArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::pay_flashloan`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.pool),
            obj(tx, args.xIn),
            obj(tx, args.yIn),
            obj(tx, args.loan),
        ],
    });
}

export interface QueryAcrossAllPoolsArgs {
    registry: TransactionObjectInput;
    limit: bigint | TransactionArgument;
}

export function queryAcrossAllPools(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: QueryAcrossAllPoolsArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::query_across_all_pools`,
        typeArguments: typeArgs,
        arguments: [obj(tx, args.registry), pure(tx, args.limit, `u64`)],
    });
}

export function queryFirstPool(
    tx: TransactionBlock,
    registry: TransactionObjectInput
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::query_first_pool`,
        arguments: [obj(tx, registry)],
    });
}

export interface QuerySwapArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    xIn: bigint | TransactionArgument;
    xOutMin: bigint | TransactionArgument;
    yIn: bigint | TransactionArgument;
    yOutMin: bigint | TransactionArgument;
    isGiveIn: boolean | TransactionArgument;
}

export function querySwap(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: QuerySwapArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::query_swap`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            pure(tx, args.xIn, `u64`),
            pure(tx, args.xOutMin, `u64`),
            pure(tx, args.yIn, `u64`),
            pure(tx, args.yOutMin, `u64`),
            pure(tx, args.isGiveIn, `bool`),
        ],
    });
}

export interface RegisterPoolBothCoinMetadataAvailableArgs {
    clock: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
    feeCollector: TransactionObjectInput;
    metadataX: TransactionObjectInput;
    metadataY: TransactionObjectInput;
    initParams: Array<bigint | TransactionArgument> | TransactionArgument;
    initialPrices:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
    weights:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
}

export function registerPoolBothCoinMetadataAvailable(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: RegisterPoolBothCoinMetadataAvailableArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::register_pool_both_coin_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.suiBalance),
            obj(tx, args.feeCollector),
            obj(tx, args.metadataX),
            obj(tx, args.metadataY),
            pure(tx, args.initParams, `vector<u64>`),
            pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`),
            pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`),
        ],
    });
}

export interface RegisterPoolNoMetadataAvailableArgs {
    clock: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
    feeCollector: TransactionObjectInput;
    initParams: Array<bigint | TransactionArgument> | TransactionArgument;
    initialPrices:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
    weights:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
}

export function registerPoolNoMetadataAvailable(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: RegisterPoolNoMetadataAvailableArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::register_pool_no_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.suiBalance),
            obj(tx, args.feeCollector),
            pure(tx, args.initParams, `vector<u64>`),
            pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`),
            pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`),
        ],
    });
}

export interface RegisterPoolXMetadataAvailableArgs {
    clock: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
    feeCollector: TransactionObjectInput;
    metadataX: TransactionObjectInput;
    initParams: Array<bigint | TransactionArgument> | TransactionArgument;
    initialPrices:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
    weights:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
}

export function registerPoolXMetadataAvailable(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: RegisterPoolXMetadataAvailableArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::register_pool_x_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.suiBalance),
            obj(tx, args.feeCollector),
            obj(tx, args.metadataX),
            pure(tx, args.initParams, `vector<u64>`),
            pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`),
            pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`),
        ],
    });
}

export interface RegisterPoolYMetadataAvailableArgs {
    clock: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
    feeCollector: TransactionObjectInput;
    metadataY: TransactionObjectInput;
    initParams: Array<bigint | TransactionArgument> | TransactionArgument;
    initialPrices:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
    weights:
    | Array<bigint | TransactionArgument>
    | TransactionArgument
    | TransactionArgument
    | null;
}

export function registerPoolYMetadataAvailable(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: RegisterPoolYMetadataAvailableArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::register_pool_y_metadata_available`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.suiBalance),
            obj(tx, args.feeCollector),
            obj(tx, args.metadataY),
            pure(tx, args.initParams, `vector<u64>`),
            pure(tx, args.initialPrices, `${Option.$typeName}<vector<u256>>`),
            pure(tx, args.weights, `${Option.$typeName}<vector<u64>>`),
        ],
    });
}

export interface RegistryAddArgs {
    registry: TransactionObjectInput;
    config: TransactionObjectInput;
    decimalX: number | TransactionArgument;
    decimalY: number | TransactionArgument;
    poolId: string | TransactionArgument;
}

export function registryAdd(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: RegistryAddArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::registry_add`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.registry),
            obj(tx, args.config),
            pure(tx, args.decimalX, `u8`),
            pure(tx, args.decimalY, `u8`),
            pure(tx, args.poolId, `${ID.$typeName}`),
        ],
    });
}

export interface RemoveLiquidityArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    lpCoins: TransactionObjectInput;
    coinXOutVal: bigint | TransactionArgument;
    coinYOutVal: bigint | TransactionArgument;
    maxLpCoinsToBurn: bigint | TransactionArgument;
}

export function removeLiquidity(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: RemoveLiquidityArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::remove_liquidity`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            obj(tx, args.lpCoins),
            pure(tx, args.coinXOutVal, `u64`),
            pure(tx, args.coinYOutVal, `u64`),
            pure(tx, args.maxLpCoinsToBurn, `u64`),
        ],
    });
}

export interface RemoveLiquidityFromXBeePoolArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    lpCoins: TransactionObjectInput;
    coinXOutVal: bigint | TransactionArgument;
    coinYOutVal: bigint | TransactionArgument;
    maxLpCoinsToBurn: bigint | TransactionArgument;
}

export function removeLiquidityFromXBeePool(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: RemoveLiquidityFromXBeePoolArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::remove_liquidity_from_x_bee_pool`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            obj(tx, args.lpCoins),
            pure(tx, args.coinXOutVal, `u64`),
            pure(tx, args.coinYOutVal, `u64`),
            pure(tx, args.maxLpCoinsToBurn, `u64`),
        ],
    });
}

export interface SetPoolHiveAddrArgs {
    pool: TransactionObjectInput;
    dexCap: TransactionObjectInput;
    poolHiveAddr: string | TransactionArgument;
}

export function setPoolHiveAddr(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: SetPoolHiveAddrArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::set_pool_hive_addr`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.pool),
            obj(tx, args.dexCap),
            pure(tx, args.poolHiveAddr, `address`),
        ],
    });
}

export interface StakeAndDistributeHarvestedDegensuiArgs {
    suiSystemState: TransactionObjectInput;
    dsuiVault: TransactionObjectInput;
    config: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
    suiBalance: TransactionObjectInput;
}

export function stakeAndDistributeHarvestedDegensui(
    tx: TransactionBlock,
    args: StakeAndDistributeHarvestedDegensuiArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::stake_and_distribute_harvested_degensui`,
        arguments: [
            obj(tx, args.suiSystemState),
            obj(tx, args.dsuiVault),
            obj(tx, args.config),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
            obj(tx, args.suiBalance),
        ],
    });
}

export interface StakeAndHarvestCollectedSuiFeeArgs {
    suiSystemState: TransactionObjectInput;
    config: TransactionObjectInput;
    registry: TransactionObjectInput;
    dsuiVault: TransactionObjectInput;
    suiFeeCollector: TransactionObjectInput;
    dsuiDisperser: TransactionObjectInput;
    treasury: TransactionObjectInput;
}

export function stakeAndHarvestCollectedSuiFee(
    tx: TransactionBlock,
    args: StakeAndHarvestCollectedSuiFeeArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::stake_and_harvest_collected_sui_fee`,
        arguments: [
            obj(tx, args.suiSystemState),
            obj(tx, args.config),
            obj(tx, args.registry),
            obj(tx, args.dsuiVault),
            obj(tx, args.suiFeeCollector),
            obj(tx, args.dsuiDisperser),
            obj(tx, args.treasury),
        ],
    });
}

export interface SwapBeeCoinsArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
    xIn: TransactionObjectInput;
    xOutMin: bigint | TransactionArgument;
    yIn: TransactionObjectInput;
    yOutMin: bigint | TransactionArgument;
    isGiveIn: boolean | TransactionArgument;
}

export function swapBeeCoins(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: SwapBeeCoinsArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::swap_bee_coins`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.clock),
            obj(tx, args.pool),
            obj(tx, args.xIn),
            pure(tx, args.xOutMin, `u64`),
            obj(tx, args.yIn),
            pure(tx, args.yOutMin, `u64`),
            pure(tx, args.isGiveIn, `bool`),
        ],
    });
}

export interface UpdateCumulativePricesArgs {
    clock: TransactionObjectInput;
    pool: TransactionObjectInput;
}

export function updateCumulativePrices(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: UpdateCumulativePricesArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_cumulative_prices`,
        typeArguments: typeArgs,
        arguments: [obj(tx, args.clock), obj(tx, args.pool)],
    });
}

export interface UpdateCurvedAAndGammaArgs {
    pool: TransactionObjectInput;
    dexCap: TransactionObjectInput;
    initAGammaTime: bigint | TransactionArgument;
    nextAmp: bigint | TransactionArgument;
    nextGamma: bigint | TransactionArgument;
    futureAGammaTime: bigint | TransactionArgument;
}

export function updateCurvedAAndGamma(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: UpdateCurvedAAndGammaArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_curved_A_and_gamma`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.pool),
            obj(tx, args.dexCap),
            pure(tx, args.initAGammaTime, `u64`),
            pure(tx, args.nextAmp, `u64`),
            pure(tx, args.nextGamma, `u256`),
            pure(tx, args.futureAGammaTime, `u64`),
        ],
    });
}

export interface UpdateCurvedConfigFeeParamsArgs {
    pool: TransactionObjectInput;
    dexCap: TransactionObjectInput;
    newMidFee: bigint | TransactionArgument;
    newOutFee: bigint | TransactionArgument;
    newFeeGamma: bigint | TransactionArgument;
    newMaHalfTime: bigint | TransactionArgument;
    newAllowedExtraProfit: bigint | TransactionArgument;
    newAdjustmentStep: bigint | TransactionArgument;
}

export function updateCurvedConfigFeeParams(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: UpdateCurvedConfigFeeParamsArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_curved_config_fee_params`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.pool),
            obj(tx, args.dexCap),
            pure(tx, args.newMidFee, `u64`),
            pure(tx, args.newOutFee, `u64`),
            pure(tx, args.newFeeGamma, `u64`),
            pure(tx, args.newMaHalfTime, `u64`),
            pure(tx, args.newAllowedExtraProfit, `u64`),
            pure(tx, args.newAdjustmentStep, `u64`),
        ],
    });
}

export interface UpdateFeeForPoolArgs {
    pool: TransactionObjectInput;
    dexCap: TransactionObjectInput;
    totalFeeBps: bigint | TransactionArgument;
    hiveFeePercent: bigint | TransactionArgument;
}

export function updateFeeForPool(
    tx: TransactionBlock,
    typeArgs: [string, string, string],
    args: UpdateFeeForPoolArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_fee_for_pool`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.pool),
            obj(tx, args.dexCap),
            pure(tx, args.totalFeeBps, `u64`),
            pure(tx, args.hiveFeePercent, `u64`),
        ],
    });
}

export interface UpdateKraftFeeArgs {
    registry: TransactionObjectInput;
    hiveDaoCap: TransactionObjectInput;
    kraftFee: bigint | TransactionArgument;
}

export function updateKraftFee(tx: TransactionBlock, args: UpdateKraftFeeArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_kraft_fee`,
        arguments: [
            obj(tx, args.registry),
            obj(tx, args.hiveDaoCap),
            pure(tx, args.kraftFee, `u64`),
        ],
    });
}

export interface UpdateSuiPolDistributionArgs {
    poolRegistry: TransactionObjectInput;
    hiveDaoCap: TransactionObjectInput;
    suiForHivePoolPct: bigint | TransactionArgument;
    suiForBeePoolPct: bigint | TransactionArgument;
}

export function updateSuiPolDistribution(
    tx: TransactionBlock,
    args: UpdateSuiPolDistributionArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_sui_pol_distribution`,
        arguments: [
            obj(tx, args.poolRegistry),
            obj(tx, args.hiveDaoCap),
            pure(tx, args.suiForHivePoolPct, `u64`),
            pure(tx, args.suiForBeePoolPct, `u64`),
        ],
    });
}

export interface UpdateThirdPoolForPolArgs {
    poolRegistry: TransactionObjectInput;
    hiveDaoCap: TransactionObjectInput;
    thirdPool: TransactionObjectInput;
}

export function updateThirdPoolForPol(
    tx: TransactionBlock,
    typeArgs: [string, string],
    args: UpdateThirdPoolForPolArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::two_pool::update_third_pool_for_pol`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.poolRegistry),
            obj(tx, args.hiveDaoCap),
            obj(tx, args.thirdPool),
        ],
    });
}
