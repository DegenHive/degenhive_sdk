"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeSuiType = exports.compressSuiType = exports.compressSuiAddress = exports.typeArgIsPure = exports.vector = exports.generic = exports.option = exports.pure = exports.obj = exports.isTransactionObjectArgument = exports.isTransactionArgument = exports.parseTypeName = void 0;
const bcs_1 = require("@mysten/sui.js/bcs");
function parseTypeName(name) {
    const parsed = bcs_1.bcs.parseTypeName(name);
    return { typeName: parsed.name, typeArgs: parsed.params };
}
exports.parseTypeName = parseTypeName;
function isTransactionArgument(arg) {
    if (!arg || typeof arg !== 'object' || Array.isArray(arg)) {
        return false;
    }
    return 'kind' in arg;
}
exports.isTransactionArgument = isTransactionArgument;
function isTransactionObjectArgument(arg) {
    if (!isTransactionArgument(arg)) {
        return false;
    }
    if (arg.kind === 'Input' && arg.type === 'pure') {
        return false;
    }
    return true;
}
exports.isTransactionObjectArgument = isTransactionObjectArgument;
function obj(txb, arg) {
    return isTransactionArgument(arg) ? arg : txb.object(arg);
}
exports.obj = obj;
function pure(txb, arg, type) {
    if (isTransactionArgument(arg)) {
        return obj(txb, arg);
    }
    function getBcsForType(type) {
        const { typeName, typeArgs } = parseTypeName(type);
        switch (typeName) {
            case 'bool':
                return bcs_1.bcs.Bool;
            case 'u8':
                return bcs_1.bcs.U8;
            case 'u16':
                return bcs_1.bcs.U16;
            case 'u32':
                return bcs_1.bcs.U32;
            case 'u64':
                return bcs_1.bcs.U64;
            case 'u128':
                return bcs_1.bcs.U128;
            case 'u256':
                return bcs_1.bcs.U256;
            case 'address':
                return bcs_1.bcs.Address;
            case '0x1::string::String':
            case '0x1::ascii::String':
                return bcs_1.bcs.String;
            case '0x2::object::ID':
                return bcs_1.bcs.Address;
            case '0x1::option::Option':
                return bcs_1.bcs.option(getBcsForType(typeArgs[0]));
            case 'vector':
                return bcs_1.bcs.vector(getBcsForType(typeArgs[0]));
            default:
                throw new Error(`invalid primitive type ${type}`);
        }
    }
    function isOrHasNestedTransactionArgument(arg) {
        if (Array.isArray(arg)) {
            return arg.some(item => isOrHasNestedTransactionArgument(item));
        }
        return isTransactionArgument(arg);
    }
    // handle some cases when TransactionArgument is nested within a vector or option
    const { typeName, typeArgs } = parseTypeName(type);
    switch (typeName) {
        case '0x1::option::Option':
            if (arg === null) {
                return txb.pure(bcs_1.bcs.option(bcs_1.bcs.Bool).serialize(null)); // bcs.Bool is arbitrary
            }
            if (isOrHasNestedTransactionArgument(arg)) {
                throw new Error('nesting TransactionArgument is not supported');
            }
            break;
        case 'vector':
            if (!Array.isArray(arg)) {
                throw new Error('expected an array for vector type');
            }
            if (arg.length === 0) {
                return txb.pure(bcs_1.bcs.vector(bcs_1.bcs.Bool).serialize([])); // bcs.Bool is arbitrary
            }
            if (arg.some(arg => Array.isArray(arg) && isOrHasNestedTransactionArgument(arg))) {
                throw new Error('nesting TransactionArgument is not supported');
            }
            if (isTransactionArgument(arg[0]) &&
                arg.filter(arg => !isTransactionArgument(arg)).length > 0) {
                throw new Error('mixing TransactionArgument with other types is not supported');
            }
            if (isTransactionObjectArgument(arg[0])) {
                return txb.makeMoveVec({
                    objects: arg,
                    type: typeArgs[0],
                });
            }
    }
    return txb.pure(getBcsForType(type).serialize(arg));
}
exports.pure = pure;
function option(txb, type, arg) {
    if (isTransactionArgument(arg)) {
        return arg;
    }
    if (typeArgIsPure(type)) {
        return pure(txb, arg, `0x1::option::Option<${type}>`);
    }
    if (arg === null) {
        return txb.moveCall({
            target: `0x1::option::none`,
            typeArguments: [type],
            arguments: [],
        });
    }
    // wrap it with some
    const val = generic(txb, type, arg);
    return txb.moveCall({
        target: `0x1::option::some`,
        typeArguments: [type],
        arguments: [val],
    });
}
exports.option = option;
function generic(txb, type, arg) {
    if (typeArgIsPure(type)) {
        return pure(txb, arg, type);
    }
    else {
        const { typeName, typeArgs } = parseTypeName(type);
        if (typeName === 'vector' && Array.isArray(arg)) {
            const itemType = typeArgs[0];
            return txb.makeMoveVec({
                objects: arg.map(item => obj(txb, item)),
                type: itemType,
            });
        }
        else {
            return obj(txb, arg);
        }
    }
}
exports.generic = generic;
function vector(txb, itemType, items) {
    if (typeArgIsPure(itemType)) {
        return pure(txb, items, `vector<${itemType}>`);
    }
    else if (isTransactionArgument(items)) {
        return items;
    }
    else {
        const { typeName: itemTypeName, typeArgs: itemTypeArgs } = parseTypeName(itemType);
        if (itemTypeName === '0x1::option::Option') {
            const objects = items.map(item => option(txb, itemTypeArgs[0], item));
            return txb.makeMoveVec({
                objects,
                type: itemType,
            });
        }
        return txb.makeMoveVec({
            objects: items,
            type: itemType,
        });
    }
}
exports.vector = vector;
function typeArgIsPure(type) {
    const { typeName, typeArgs } = parseTypeName(type);
    switch (typeName) {
        case 'bool':
        case 'u8':
        case 'u16':
        case 'u32':
        case 'u64':
        case 'u128':
        case 'u256':
        case 'address':
        case 'signer':
            return true;
        case 'vector':
            return typeArgIsPure(typeArgs[0]);
        case '0x1::string::String':
        case '0x1::ascii::String':
        case '0x2::object::ID':
            return true;
        case '0x1::option::Option':
            return typeArgIsPure(typeArgs[0]);
        default:
            return false;
    }
}
exports.typeArgIsPure = typeArgIsPure;
function compressSuiAddress(addr) {
    // remove leading zeros
    const stripped = addr.split('0x').join('');
    for (let i = 0; i < stripped.length; i++) {
        if (stripped[i] !== '0') {
            return `0x${stripped.substring(i)}`;
        }
    }
    return '0x0';
}
exports.compressSuiAddress = compressSuiAddress;
// Recursively removes leading zeros from a type.
// e.g. `0x00000002::module::Name<0x00001::a::C>` -> `0x2::module::Name<0x1::a::C>`
function compressSuiType(type) {
    const { typeName, typeArgs } = parseTypeName(type);
    switch (typeName) {
        case 'bool':
        case 'u8':
        case 'u16':
        case 'u32':
        case 'u64':
        case 'u128':
        case 'u256':
        case 'address':
        case 'signer':
            return typeName;
        case 'vector':
            return `vector<${compressSuiType(typeArgs[0])}>`;
        default: {
            const tok = typeName.split('::');
            tok[0] = compressSuiAddress(tok[0]);
            const compressedName = tok.join('::');
            if (typeArgs.length > 0) {
                return `${compressedName}<${typeArgs.map(typeArg => compressSuiType(typeArg)).join(',')}>`;
            }
            else {
                return compressedName;
            }
        }
    }
}
exports.compressSuiType = compressSuiType;
function composeSuiType(typeName, ...typeArgs) {
    if (typeArgs.length > 0) {
        return `${typeName}<${typeArgs.join(', ')}>`;
    }
    else {
        return typeName;
    }
}
exports.composeSuiType = composeSuiType;
