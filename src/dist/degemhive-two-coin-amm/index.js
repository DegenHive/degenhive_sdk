"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OracleFunction = exports.TwoPoolFunctions = exports.HoneyTradeFunctions = exports.twopool = void 0;
var twopool;
(function (twopool) {
    twopool.PACKAGE_ID = "0x1609ad341cc5ef030d782ee7c2d84070d0768c6cede910e216c3ff1873a84bc1";
    twopool.PUBLISHED_AT = "0x1609ad341cc5ef030d782ee7c2d84070d0768c6cede910e216c3ff1873a84bc1";
    twopool.PKG_V1 = "0x1609ad341cc5ef030d782ee7c2d84070d0768c6cede910e216c3ff1873a84bc1";
    twopool.TWO_POOL_REGISTRY = "0xefd672db3df3885a8745803f0ede200402dba2e8cecea9bf62ce7a411e004a5d";
    twopool.BEES_MANAGER = "0x633a531eefd24c23219716efb413a726fb9a244d4196d1432e6152af1fbe50ac";
    twopool.YIELD_FARM = "0x4070fd06a34ec576ef7185ff45679233ceb39a7e03473ccbb3a4a60728cceffb";
    twopool.CLOCK = "0x6";
    twopool.YIELD_FLOW_OBJECT = "0x5a79f26a90cf6a652cf45ad3dfbe1e3565503e70d866e3149292ccbc8fcd1420";
})(twopool || (exports.twopool = twopool = {}));
exports.HoneyTradeFunctions = require("./honey-trade/functions");
exports.TwoPoolFunctions = require("./two-pool/functions");
exports.OracleFunction = require("./oracle/functions");
// export { RemoveLiquidityFromXBeePoolArgs, SwapBeeCoinsArgs, removeLiquidityFromXBeePool, swapBeeCoins } from './two-pool/functions';
