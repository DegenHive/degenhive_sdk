"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loader = exports.StructClassLoader = void 0;
const util_1 = require("./util");
const reified_1 = require("./reified");
const init_loader_1 = require("./init-loader");
class StructClassLoader {
    constructor() {
        this.map = new Map();
    }
    register(...classes) {
        for (const cls of classes) {
            this.map.set(cls.$typeName, cls);
        }
    }
    reified(type) {
        const { typeName, typeArgs } = (0, util_1.parseTypeName)((0, util_1.compressSuiType)(type));
        switch (typeName) {
            case 'bool':
            case 'u8':
            case 'u16':
            case 'u32':
            case 'u64':
            case 'u128':
            case 'u256':
            case 'address':
                return typeName;
            case 'vector': {
                if (typeArgs.length !== 1) {
                    throw new Error(`Vector expects 1 type argument, but got ${typeArgs.length}`);
                }
                return (0, reified_1.vector)(this.reified(typeArgs[0]));
            }
        }
        if (!this.map.has(typeName)) {
            throw new Error(`Unknown type ${typeName}`);
        }
        const cls = this.map.get(typeName);
        if (cls.$numTypeParams !== typeArgs.length) {
            throw new Error(`Type ${typeName} expects ${cls.$numTypeParams} type arguments, but got ${typeArgs.length}`);
        }
        const reifiedTypeArgs = [];
        for (let i = 0; i < typeArgs.length; i++) {
            if (cls.$isPhantom[i]) {
                reifiedTypeArgs.push((0, reified_1.phantom)(typeArgs[i]));
            }
            else {
                reifiedTypeArgs.push(this.reified(typeArgs[i]));
            }
        }
        return cls.reified(...reifiedTypeArgs);
    }
}
exports.StructClassLoader = StructClassLoader;
exports.loader = new StructClassLoader();
(0, init_loader_1.registerClasses)(exports.loader);
