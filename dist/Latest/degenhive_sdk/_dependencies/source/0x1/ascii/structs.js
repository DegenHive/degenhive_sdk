"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.String = exports.Char = void 0;
exports.isChar = isChar;
exports.isString = isString;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== Char =============================== */
function isChar(type) { type = (0, util_1.compressSuiType)(type); return type === "0x1::ascii::Char"; }
class Char {
    constructor(typeArgs, fields) {
        this.$typeName = Char.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Char.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.byte = fields.byte;
    }
    static reified() { return { typeName: Char.$typeName, fullTypeName: (0, util_1.composeSuiType)(Char.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Char.fromFields(fields), fromFieldsWithTypes: (item) => Char.fromFieldsWithTypes(item), fromBcs: (data) => Char.fromBcs(data), bcs: Char.bcs, fromJSONField: (field) => Char.fromJSONField(field), fromJSON: (json) => Char.fromJSON(json), fromSuiParsedData: (content) => Char.fromSuiParsedData(content), fetch: async (client, id) => Char.fetch(client, id), new: (fields) => { return new Char([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Char.reified(); }
    static phantom() { return (0, reified_1.phantom)(Char.reified()); }
    static get p() { return Char.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Char", {
            byte: bcs_1.bcs.u8()
        });
    }
    ;
    static fromFields(fields) { return Char.reified().new({ byte: (0, reified_1.decodeFromFields)("u8", fields.byte) }); }
    static fromFieldsWithTypes(item) {
        if (!isChar(item.type)) {
            throw new Error("not a Char type");
        }
        return Char.reified().new({ byte: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.byte) });
    }
    static fromBcs(data) { return Char.fromFields(Char.bcs.parse(data)); }
    toJSONField() {
        return {
            byte: this.byte,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Char.reified().new({ byte: (0, reified_1.decodeFromJSONField)("u8", field.byte) }); }
    static fromJSON(json) {
        if (json.$typeName !== Char.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Char.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isChar(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Char object`);
    } return Char.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Char object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isChar(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Char object`);
        }
        return Char.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Char = Char;
Char.$typeName = "0x1::ascii::Char";
Char.$numTypeParams = 0;
/* ============================== String =============================== */
function isString(type) { type = (0, util_1.compressSuiType)(type); return type === "0x1::ascii::String"; }
class String {
    constructor(typeArgs, fields) {
        this.$typeName = String.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(String.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    static reified() { return { typeName: String.$typeName, fullTypeName: (0, util_1.composeSuiType)(String.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => String.fromFields(fields), fromFieldsWithTypes: (item) => String.fromFieldsWithTypes(item), fromBcs: (data) => String.fromBcs(data), bcs: String.bcs, fromJSONField: (field) => String.fromJSONField(field), fromJSON: (json) => String.fromJSON(json), fromSuiParsedData: (content) => String.fromSuiParsedData(content), fetch: async (client, id) => String.fetch(client, id), new: (fields) => { return new String([], fields); }, kind: "StructClassReified", }; }
    static get r() { return String.reified(); }
    static phantom() { return (0, reified_1.phantom)(String.reified()); }
    static get p() { return String.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("String", {
            bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return String.reified().new({ bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bytes) }); }
    static fromFieldsWithTypes(item) {
        if (!isString(item.type)) {
            throw new Error("not a String type");
        }
        return String.reified().new({ bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bytes) });
    }
    static fromBcs(data) { return String.fromFields(String.bcs.parse(data)); }
    toJSONField() {
        return {
            bytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.bytes),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return String.reified().new({ bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bytes) }); }
    static fromJSON(json) {
        if (json.$typeName !== String.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return String.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isString(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a String object`);
    } return String.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching String object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isString(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a String object`);
        }
        return String.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.String = String;
String.$typeName = "0x1::ascii::String";
String.$numTypeParams = 0;
