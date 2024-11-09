import * as memepad from "./memepad/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(memepad.Consumption);
loader.register(memepad.ConsumptionCondition);
loader.register(memepad.BeeBribes);
loader.register(memepad.BribesAddedForEmissions);
loader.register(memepad.CurveParams);
loader.register(memepad.LaunchConfig);
loader.register(memepad.LiquidityMigratedToAmmPool);
loader.register(memepad.MemeBurnt);
loader.register(memepad.MemeCustody);
loader.register(memepad.MemeLaunchPad);
loader.register(memepad.MemePool);
loader.register(memepad.MemePoolFeeClaimed);
loader.register(memepad.MemePoolMigrationPossible);
loader.register(memepad.MemeSupplyConfig);
loader.register(memepad.MemesBought);
loader.register(memepad.MemesByBee);
loader.register(memepad.MemesSold);
loader.register(memepad.NewMemePoolCreated);
 }
