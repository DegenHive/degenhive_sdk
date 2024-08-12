import * as package_1 from "../_dependencies/source/0x1/init";
import * as package_2 from "../_dependencies/source/0x2/init";
import * as package_3 from "../_dependencies/source/0x3/init";
import * as package_3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc from "../degen-hive-dex-config/init";
import * as package_59aad7787932fa7f35a5bbac5be5d8ba44910c56d53b2a7a71a040ffa43ac1ad from "../degen-hive-h-sui-vault/init";
import { structClassLoaderSource as structClassLoader } from "./loader";

let initialized = false; export function initLoaderIfNeeded() {
    if (initialized) { return }; initialized = true; package_1.registerClasses(structClassLoader);
    package_2.registerClasses(structClassLoader);
    package_3.registerClasses(structClassLoader);
    package_3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc.registerClasses(structClassLoader);
    package_59aad7787932fa7f35a5bbac5be5d8ba44910c56d53b2a7a71a040ffa43ac1ad.registerClasses(structClassLoader);
}
