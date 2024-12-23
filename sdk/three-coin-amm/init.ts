import * as threePool from "./three-pool/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(threePool.CumPriceUpdatedEvent);
loader.register(threePool.CurvedConfigUpdatedAmp);
loader.register(threePool.CurvedConfigUpdatedParams);
loader.register(threePool.FlashLoanExecuted);
loader.register(threePool.Flashloan);
loader.register(threePool.InternalPricesUpdated);
loader.register(threePool.LP);
loader.register(threePool.LiquidityAddedToPool);
loader.register(threePool.LiquidityPool);
loader.register(threePool.LiquidityRemovedFromPool);
loader.register(threePool.LpBurntForever);
loader.register(threePool.NewPoolCreated);
loader.register(threePool.PoolFeeInfo);
loader.register(threePool.PoolFeeUpdated);
loader.register(threePool.PoolRegistry);
loader.register(threePool.PoolRegistryItem);
loader.register(threePool.StableConfigUpdated);
loader.register(threePool.TokensSwapped);
loader.register(threePool.WeightedConfigUpdated);
 }
