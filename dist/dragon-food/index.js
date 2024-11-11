"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterDragonFoodFunctions = exports.DragonFoodFunctions = exports.dragonfood = void 0;
var dragonfood;
(function (dragonfood) {
    dragonfood.PACKAGE_ID = "0x6a7ea1255160d2d3c77aa80440f17d4ae9092ef547141a34185e5b41c1c31c66";
    dragonfood.PUBLISHED_AT = "0x6a7ea1255160d2d3c77aa80440f17d4ae9092ef547141a34185e5b41c1c31c66";
    dragonfood.PKG_V1 = "0x6a7ea1255160d2d3c77aa80440f17d4ae9092ef547141a34185e5b41c1c31c66";
    dragonfood.CLOCK = "0x6";
    dragonfood.YIELD_FARM = "0x4070fd06a34ec576ef7185ff45679233ceb39a7e03473ccbb3a4a60728cceffb";
    dragonfood.YIELD_FLOW = "0x5a79f26a90cf6a652cf45ad3dfbe1e3565503e70d866e3149292ccbc8fcd1420";
    dragonfood.BEES_MANAGER = "0x633a531eefd24c23219716efb413a726fb9a244d4196d1432e6152af1fbe50ac";
    dragonfood.DRAGON_FOOD = "0x8c4452801b68f4d22f5cec0f96562bc1ba7f93e28377f19ac9d0ec8814089dc3";
})(dragonfood || (exports.dragonfood = dragonfood = {}));
exports.DragonFoodFunctions = require("./dragon-food/functions");
exports.RouterDragonFoodFunctions = require("./router/functions");
