"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
const ascii = require("./ascii/structs");
const bitVector = require("./bit-vector/structs");
const fixedPoint32 = require("./fixed-point32/structs");
const option = require("./option/structs");
const string = require("./string/structs");
const typeName = require("./type-name/structs");
const uq3232 = require("./uq32-32/structs");
function registerClasses(loader) {
    loader.register(fixedPoint32.FixedPoint32);
    loader.register(uq3232.UQ32_32);
    loader.register(option.Option);
    loader.register(ascii.Char);
    loader.register(ascii.String);
    loader.register(bitVector.BitVector);
    loader.register(string.String);
    loader.register(typeName.TypeName);
}
