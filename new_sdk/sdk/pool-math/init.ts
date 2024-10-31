import * as curvedMath from "./curved-math/structs";
import * as stableMath from "./stable-math/structs";
import * as weightedMath from "./weighted-math/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(weightedMath.WeightedConfig);
loader.register(stableMath.StablePoolConfig);
loader.register(curvedMath.CurvedPoolConfig);
 }
