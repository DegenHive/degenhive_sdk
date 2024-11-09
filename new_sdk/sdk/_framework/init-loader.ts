import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_2 from "../_dependencies/source/0x2/init";
import * as package_source_3 from "../_dependencies/source/0x3/init";
import * as package_source_d22b24490e0bae52676651b4f56660a5ff8022a2576e0089f79b3c88d44e08f0 from "../_dependencies/source/0xd22b24490e0bae52676651b4f56660a5ff8022a2576e0089f79b3c88d44e08f0/init";
import * as package_source_53578180d93e5fa7b10334045c4565e3c743f0eb64c89932b14adb1b0baab145 from "../d-sui-vault/init";
import * as package_source_6a7ea1255160d2d3c77aa80440f17d4ae9092ef547141a34185e5b41c1c31c66 from "../dragon-food/init";
import * as package_source_84f8a4ed68568c4f30592d03dfcaf7bedcae27e3a1e84a1ba7dfd4886c511cbc from "../dragon-trainer/init";
import * as package_source_6bbb1e48e434578d373dd1a88cb0ea449cca4421aed301203ceca8e9a084eb26 from "../meme-pad/init";
import * as package_source_6c442d664dffc25e3fda48f15370ffaecac1f94ecb6debb46cd41ac4b38bddfa from "../pool-math/init";
import * as package_source_83ba940faec75a014752518940e225d0f150b439068af0ef9e36fba1a20a372d from "../queen-maker/init";
import * as package_source_b0e95627dfee7e43bb8d119f6a63abd4cbbc8f8abc17d403844e47244bd91e67 from "../three-coin-amm/init";
import * as package_source_1609ad341cc5ef030d782ee7c2d84070d0768c6cede910e216c3ff1873a84bc1 from "../two-coin-amm/init";
import * as package_source_50c2216a078d3bdf5081fe436df9f42dfdbe538ebd9c935913ce2436362cff90 from "../yield-flow/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_1609ad341cc5ef030d782ee7c2d84070d0768c6cede910e216c3ff1873a84bc1.registerClasses(loader);
package_source_50c2216a078d3bdf5081fe436df9f42dfdbe538ebd9c935913ce2436362cff90.registerClasses(loader);
package_source_53578180d93e5fa7b10334045c4565e3c743f0eb64c89932b14adb1b0baab145.registerClasses(loader);
package_source_6a7ea1255160d2d3c77aa80440f17d4ae9092ef547141a34185e5b41c1c31c66.registerClasses(loader);
package_source_6bbb1e48e434578d373dd1a88cb0ea449cca4421aed301203ceca8e9a084eb26.registerClasses(loader);
package_source_6c442d664dffc25e3fda48f15370ffaecac1f94ecb6debb46cd41ac4b38bddfa.registerClasses(loader);
package_source_83ba940faec75a014752518940e225d0f150b439068af0ef9e36fba1a20a372d.registerClasses(loader);
package_source_84f8a4ed68568c4f30592d03dfcaf7bedcae27e3a1e84a1ba7dfd4886c511cbc.registerClasses(loader);
package_source_b0e95627dfee7e43bb8d119f6a63abd4cbbc8f8abc17d403844e47244bd91e67.registerClasses(loader);
package_source_d22b24490e0bae52676651b4f56660a5ff8022a2576e0089f79b3c88d44e08f0.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
