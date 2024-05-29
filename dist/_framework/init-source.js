"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initLoaderIfNeeded = void 0;
const package_1 = require("../_dependencies/source/0x1/init");
const package_2 = require("../_dependencies/source/0x2/init");
const package_3 = require("../_dependencies/source/0x3/init");
const package_3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc = require("../degen-hive-dex-config/init");
const package_59aad7787932fa7f35a5bbac5be5d8ba44910c56d53b2a7a71a040ffa43ac1ad = require("../degen-hive-h-sui-vault/init");
const loader_1 = require("./loader");
let initialized = false;
function initLoaderIfNeeded() {
    if (initialized) {
        return;
    }
    ;
    initialized = true;
    package_1.registerClasses(loader_1.structClassLoaderSource);
    package_2.registerClasses(loader_1.structClassLoaderSource);
    package_3.registerClasses(loader_1.structClassLoaderSource);
    package_3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc.registerClasses(loader_1.structClassLoaderSource);
    package_59aad7787932fa7f35a5bbac5be5d8ba44910c56d53b2a7a71a040ffa43ac1ad.registerClasses(loader_1.structClassLoaderSource);
}
exports.initLoaderIfNeeded = initLoaderIfNeeded;
