"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitVector = void 0;
exports.isBitVector = isBitVector;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== BitVector =============================== */
function isBitVector(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V8}::bit_vector::BitVector`; }
class BitVector {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BitVector.$typeName;
        this.$isPhantom = BitVector.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BitVector.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.length = fields.length;
        ;
        this.bitField = fields.bitField;
    }
    static reified() { return { typeName: BitVector.$typeName, fullTypeName: (0, util_1.composeSuiType)(BitVector.$typeName, ...[]), typeArgs: [], isPhantom: BitVector.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BitVector.fromFields(fields), fromFieldsWithTypes: (item) => BitVector.fromFieldsWithTypes(item), fromBcs: (data) => BitVector.fromBcs(data), bcs: BitVector.bcs, fromJSONField: (field) => BitVector.fromJSONField(field), fromJSON: (json) => BitVector.fromJSON(json), fromSuiParsedData: (content) => BitVector.fromSuiParsedData(content), fetch: async (client, id) => BitVector.fetch(client, id), new: (fields) => { return new BitVector([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BitVector.reified(); }
    static phantom() { return (0, reified_1.phantom)(BitVector.reified()); }
    static get p() { return BitVector.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BitVector", {
            length: bcs_1.bcs.u64(), bit_field: bcs_1.bcs.vector(bcs_1.bcs.bool())
        });
    }
    ;
    static fromFields(fields) { return BitVector.reified().new({ length: (0, reified_1.decodeFromFields)("u64", fields.length), bitField: (0, reified_1.decodeFromFields)(reified.vector("bool"), fields.bit_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isBitVector(item.type)) {
            throw new Error("not a BitVector type");
        }
        return BitVector.reified().new({ length: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.length), bitField: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("bool"), item.fields.bit_field) });
    }
    static fromBcs(data) { return BitVector.fromFields(BitVector.bcs.parse(data)); }
    toJSONField() {
        return {
            length: this.length.toString(), bitField: (0, reified_1.fieldToJSON)(`vector<bool>`, this.bitField),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BitVector.reified().new({ length: (0, reified_1.decodeFromJSONField)("u64", field.length), bitField: (0, reified_1.decodeFromJSONField)(reified.vector("bool"), field.bitField) }); }
    static fromJSON(json) {
        if (json.$typeName !== BitVector.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BitVector.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBitVector(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BitVector object`);
    } return BitVector.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BitVector object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBitVector(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BitVector object`);
        }
        return BitVector.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BitVector = BitVector;
BitVector.$typeName = `${index_1.PKG_V8}::bit_vector::BitVector`;
BitVector.$numTypeParams = 0;
BitVector.$isPhantom = [];
