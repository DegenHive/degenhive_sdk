"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedPoint32 = exports.isFixedPoint32 = void 0;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== FixedPoint32 =============================== */
function isFixedPoint32(type) { type = (0, util_1.compressSuiType)(type); return type === "0x1::fixed_point32::FixedPoint32"; }
exports.isFixedPoint32 = isFixedPoint32;
class FixedPoint32 {
    constructor(typeArgs, fields) {
        this.$typeName = FixedPoint32.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(FixedPoint32.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.value = fields.value;
    }
    static reified() { return { typeName: FixedPoint32.$typeName, fullTypeName: (0, util_1.composeSuiType)(FixedPoint32.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => FixedPoint32.fromFields(fields), fromFieldsWithTypes: (item) => FixedPoint32.fromFieldsWithTypes(item), fromBcs: (data) => FixedPoint32.fromBcs(data), bcs: FixedPoint32.bcs, fromJSONField: (field) => FixedPoint32.fromJSONField(field), fromJSON: (json) => FixedPoint32.fromJSON(json), fromSuiParsedData: (content) => FixedPoint32.fromSuiParsedData(content), fetch: async (client, id) => FixedPoint32.fetch(client, id), new: (fields) => { return new FixedPoint32([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FixedPoint32.reified(); }
    static phantom() { return (0, reified_1.phantom)(FixedPoint32.reified()); }
    static get p() { return FixedPoint32.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FixedPoint32", {
            value: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FixedPoint32.reified().new({ value: (0, reified_1.decodeFromFields)("u64", fields.value) }); }
    static fromFieldsWithTypes(item) {
        if (!isFixedPoint32(item.type)) {
            throw new Error("not a FixedPoint32 type");
        }
        return FixedPoint32.reified().new({ value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value) });
    }
    static fromBcs(data) { return FixedPoint32.fromFields(FixedPoint32.bcs.parse(data)); }
    toJSONField() {
        return {
            value: this.value.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FixedPoint32.reified().new({ value: (0, reified_1.decodeFromJSONField)("u64", field.value) }); }
    static fromJSON(json) {
        if (json.$typeName !== FixedPoint32.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FixedPoint32.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFixedPoint32(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FixedPoint32 object`);
    } return FixedPoint32.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FixedPoint32 object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFixedPoint32(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FixedPoint32 object`);
        }
        return FixedPoint32.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.FixedPoint32 = FixedPoint32;
FixedPoint32.$typeName = "0x1::fixed_point32::FixedPoint32";
FixedPoint32.$numTypeParams = 0;
