"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = void 0;
const curvedMath = require("./curved-math/structs");
const stableMath = require("./stable-math/structs");
const weightedMath = require("./weighted-math/structs");
function registerClasses(loader) {
    loader.register(curvedMath.CurvedPoolConfig);
    loader.register(stableMath.StablePoolConfig);
    loader.register(weightedMath.WeightedConfig);
}
exports.registerClasses = registerClasses;
