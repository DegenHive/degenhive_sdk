"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UQ32_32 = void 0;
exports.isUQ32_32 = isUQ32_32;
const reified_1 = require("../../../_framework/reified");
const util_1 = require("../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== UQ32_32 =============================== */
function isUQ32_32(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V11}::uq32_32::UQ32_32`; }
class UQ32_32 {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UQ32_32.$typeName;
        this.$isPhantom = UQ32_32.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UQ32_32.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.pos0 = fields.pos0;
    }
    static reified() { return { typeName: UQ32_32.$typeName, fullTypeName: (0, util_1.composeSuiType)(UQ32_32.$typeName, ...[]), typeArgs: [], isPhantom: UQ32_32.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UQ32_32.fromFields(fields), fromFieldsWithTypes: (item) => UQ32_32.fromFieldsWithTypes(item), fromBcs: (data) => UQ32_32.fromBcs(data), bcs: UQ32_32.bcs, fromJSONField: (field) => UQ32_32.fromJSONField(field), fromJSON: (json) => UQ32_32.fromJSON(json), fromSuiParsedData: (content) => UQ32_32.fromSuiParsedData(content), fromSuiObjectData: (content) => UQ32_32.fromSuiObjectData(content), fetch: async (client, id) => UQ32_32.fetch(client, id), new: (fields) => { return new UQ32_32([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UQ32_32.reified(); }
    static phantom() { return (0, reified_1.phantom)(UQ32_32.reified()); }
    static get p() { return UQ32_32.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UQ32_32", {
            pos0: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UQ32_32.reified().new({ pos0: (0, reified_1.decodeFromFields)("u64", fields.pos0) }); }
    static fromFieldsWithTypes(item) {
        if (!isUQ32_32(item.type)) {
            throw new Error("not a UQ32_32 type");
        }
        return UQ32_32.reified().new({ pos0: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pos0) });
    }
    static fromBcs(data) { return UQ32_32.fromFields(UQ32_32.bcs.parse(data)); }
    toJSONField() {
        return {
            pos0: this.pos0.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UQ32_32.reified().new({ pos0: (0, reified_1.decodeFromJSONField)("u64", field.pos0) }); }
    static fromJSON(json) {
        if (json.$typeName !== UQ32_32.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UQ32_32.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUQ32_32(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UQ32_32 object`);
    } return UQ32_32.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUQ32_32(data.bcs.type)) {
                throw new Error(`object at is not a UQ32_32 object`);
            }
            return UQ32_32.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UQ32_32.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UQ32_32 object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUQ32_32(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UQ32_32 object`);
        }
        return UQ32_32.fromSuiObjectData(res.data);
    }
}
exports.UQ32_32 = UQ32_32;
UQ32_32.$typeName = `${index_1.PKG_V11}::uq32_32::UQ32_32`;
UQ32_32.$numTypeParams = 0;
UQ32_32.$isPhantom = [];
