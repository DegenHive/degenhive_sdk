import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_2 from "../_dependencies/source/0x2/init";
import * as package_source_3 from "../_dependencies/source/0x3/init";
import * as package_source_d22b24490e0bae52676651b4f56660a5ff8022a2576e0089f79b3c88d44e08f0 from "../_dependencies/source/0xd22b24490e0bae52676651b4f56660a5ff8022a2576e0089f79b3c88d44e08f0/init";
import * as package_source_6dcdbc896100c83ff2fefe3f31f3c98d2dd0b36602e1aa0bf8c1ab131042f38e from "../d-sui-vault/init";
import * as package_source_d1f149fed5ebf01f7107e08fa088900fbb65943189881a53cef389e68de11d28 from "../dragon-food/init";
import * as package_source_15f53b90602b3d8e2450cc7df0a593b904fa023ba348d1c8df4c8148a51c29ce from "../dragon-trainer/init";
import * as package_source_71b336cf21d8bcfe6e81e8a3927d8788514d9b9a8c8ccdef72758f192326dd68 from "../pool-math/init";
import * as package_source_4351c8c9d8ca78f82794c6e5d9a1f85ecfe8a0db3dd1037130d9ab609fd513de from "../queen-maker/init";
import * as package_source_14f9ddf16797f5543bf5ea89fefcd8591a16205449b491a5f9e0c755871cce2b from "../three-coin-amm/init";
import * as package_source_3043d4128313dc032b1b702acb29ecfc0a06ebd0337d372e8104adfde63cb359 from "../two-coin-amm/init";
import * as package_source_145cc4aff56ac7f3aa994bc8aee09e3e5fbdb3b3a138c5fc51ef79861865e2cf from "../yield-flow/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_145cc4aff56ac7f3aa994bc8aee09e3e5fbdb3b3a138c5fc51ef79861865e2cf.registerClasses(loader);
package_source_14f9ddf16797f5543bf5ea89fefcd8591a16205449b491a5f9e0c755871cce2b.registerClasses(loader);
package_source_15f53b90602b3d8e2450cc7df0a593b904fa023ba348d1c8df4c8148a51c29ce.registerClasses(loader);
package_source_3043d4128313dc032b1b702acb29ecfc0a06ebd0337d372e8104adfde63cb359.registerClasses(loader);
package_source_4351c8c9d8ca78f82794c6e5d9a1f85ecfe8a0db3dd1037130d9ab609fd513de.registerClasses(loader);
package_source_6dcdbc896100c83ff2fefe3f31f3c98d2dd0b36602e1aa0bf8c1ab131042f38e.registerClasses(loader);
package_source_71b336cf21d8bcfe6e81e8a3927d8788514d9b9a8c8ccdef72758f192326dd68.registerClasses(loader);
package_source_d1f149fed5ebf01f7107e08fa088900fbb65943189881a53cef389e68de11d28.registerClasses(loader);
package_source_d22b24490e0bae52676651b4f56660a5ff8022a2576e0089f79b3c88d44e08f0.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
