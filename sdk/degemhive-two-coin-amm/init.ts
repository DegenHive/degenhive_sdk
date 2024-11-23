import * as honeyTrade from "./honey-trade/structs";
import * as oracle from "./oracle/structs";
import * as twoPool from "./two-pool/structs";
import { StructClassLoader } from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(twoPool.CumPriceUpdatedEvent);
    loader.register(twoPool.CurvedConfigUpdatedAmp);
    loader.register(twoPool.CurvedConfigUpdatedParams);
    loader.register(twoPool.FlashLoanExecuted);
    loader.register(twoPool.Flashloan);
    loader.register(twoPool.InternalPricesUpdated);
    loader.register(twoPool.LP);
    loader.register(twoPool.LiquidityAddedToPool);
    loader.register(twoPool.LiquidityPool);
    loader.register(twoPool.LiquidityRemovedFromPool);
    loader.register(twoPool.LpBurntForever);
    loader.register(twoPool.NewPoolCreated);
    loader.register(twoPool.PoolFeeInfo);
    loader.register(twoPool.PoolFeeUpdated);
    loader.register(twoPool.PoolRegistry);
    loader.register(twoPool.PoolRegistryItem);
    loader.register(twoPool.SUI_HIVE_INITIALIZED);
    loader.register(twoPool.SUI_HONEY_INITIALIZED);
    loader.register(twoPool.StableConfigUpdated);
    loader.register(twoPool.SuiFeeUsedForBuybacks);
    loader.register(twoPool.SuiForYieldFarm);
    loader.register(twoPool.SuiPolDistributionUpdated);
    loader.register(twoPool.SuiPolThirdPoolUpdated);
    loader.register(twoPool.TokensSwapped);
    loader.register(twoPool.WeightedConfigUpdated);
    loader.register(twoPool.YieldFromQueenMakerClaimed);
    loader.register(honeyTrade.HoneyBurnt);
    loader.register(honeyTrade.HoneyManager);
    loader.register(oracle.HiveOracle);
    loader.register(oracle.HiveOracleSnapshotRecorded);
    loader.register(oracle.HiveOracleUpdated);
    loader.register(oracle.HiveTwapSnapshot);
}
