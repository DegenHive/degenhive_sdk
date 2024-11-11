"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonTrainerFunctions = exports.BeeScienceFunctions = exports.dragontrainer = void 0;
var dragontrainer;
(function (dragontrainer) {
    dragontrainer.PACKAGE_ID = "0x84f8a4ed68568c4f30592d03dfcaf7bedcae27e3a1e84a1ba7dfd4886c511cbc";
    dragontrainer.PUBLISHED_AT = "0x84f8a4ed68568c4f30592d03dfcaf7bedcae27e3a1e84a1ba7dfd4886c511cbc";
    dragontrainer.BEES_MANAGER = "0x633a531eefd24c23219716efb413a726fb9a244d4196d1432e6152af1fbe50ac";
    dragontrainer.YIELD_FARM = "0x4070fd06a34ec576ef7185ff45679233ceb39a7e03473ccbb3a4a60728cceffb";
    dragontrainer.HIDDEN_WORLD = "0x6eaa19716aa30990e67cd8928a8ec0ccd35f790027a3ff49ee17a89b00b580a7";
    dragontrainer.TRAINER_MAPPING_STORE = "0xc37f21db36c0a5d675a6864f21f0935a83952ade00e46b84195be4434e9c402b";
    dragontrainer.MARKETPLACE = "0x8714e3aa8c2ae421420997a520b38a8bf66965acc9c130246437b14cd1bbb924";
    dragontrainer.HIVE_GRAPH = "0x25706d8493025282679e4f161d3900237e9a72ba172d4753a9bc44d89c51adf4";
    dragontrainer.CLOCK = "0x6";
    dragontrainer.PKG_V1 = "0x6a7ea1255160d2d3c77aa80440f17d4ae9092ef547141a34185e5b41c1c31c66";
})(dragontrainer || (exports.dragontrainer = dragontrainer = {}));
exports.BeeScienceFunctions = require("./beescience/functions");
exports.DragonTrainerFunctions = require("./dragon-trainer/functions");
