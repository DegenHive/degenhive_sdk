"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
const curvedMath = require("./curved-math/structs");
const stableMath = require("./stable-math/structs");
const weightedMath = require("./weighted-math/structs");
function registerClasses(loader) {
    loader.register(curvedMath.CurvedPoolConfig);
    loader.register(weightedMath.WeightedConfig);
    loader.register(stableMath.StablePoolConfig);
}
