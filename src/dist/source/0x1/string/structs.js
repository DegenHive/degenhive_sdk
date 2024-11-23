"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.String = void 0;
exports.isString = isString;
const reified = require("../../../_framework/reified");
const reified_1 = require("../../../_framework/reified");
const util_1 = require("../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== String =============================== */
function isString(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V11}::string::String`; }
class String {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = String.$typeName;
        this.$isPhantom = String.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(String.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    static reified() { return { typeName: String.$typeName, fullTypeName: (0, util_1.composeSuiType)(String.$typeName, ...[]), typeArgs: [], isPhantom: String.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => String.fromFields(fields), fromFieldsWithTypes: (item) => String.fromFieldsWithTypes(item), fromBcs: (data) => String.fromBcs(data), bcs: String.bcs, fromJSONField: (field) => String.fromJSONField(field), fromJSON: (json) => String.fromJSON(json), fromSuiParsedData: (content) => String.fromSuiParsedData(content), fromSuiObjectData: (content) => String.fromSuiObjectData(content), fetch: async (client, id) => String.fetch(client, id), new: (fields) => { return new String([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isString(data.bcs.type)) {
                throw new Error(`object at is not a String object`);
            }
            return String.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return String.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching String object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isString(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a String object`);
        }
        return String.fromSuiObjectData(res.data);
    }
}
exports.String = String;
String.$typeName = `${index_1.PKG_V11}::string::String`;
String.$numTypeParams = 0;
String.$isPhantom = [];
