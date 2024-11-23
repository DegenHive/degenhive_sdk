"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HIVE = void 0;
exports.isHIVE = isHIVE;
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const PUBLISHED_AT = __1.yieldflow.PUBLISHED_AT;
const PKG_V1 = __1.yieldflow.PKG_V1;
/* ============================== HIVE =============================== */
function isHIVE(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::hive::HIVE`; }
class HIVE {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HIVE.$typeName;
        this.$isPhantom = HIVE.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HIVE.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: HIVE.$typeName, fullTypeName: (0, util_1.composeSuiType)(HIVE.$typeName, ...[]), typeArgs: [], isPhantom: HIVE.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HIVE.fromFields(fields), fromFieldsWithTypes: (item) => HIVE.fromFieldsWithTypes(item), fromBcs: (data) => HIVE.fromBcs(data), bcs: HIVE.bcs, fromJSONField: (field) => HIVE.fromJSONField(field), fromJSON: (json) => HIVE.fromJSON(json), fromSuiParsedData: (content) => HIVE.fromSuiParsedData(content), fromSuiObjectData: (content) => HIVE.fromSuiObjectData(content), fetch: async (client, id) => HIVE.fetch(client, id), new: (fields) => { return new HIVE([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HIVE.reified(); }
    static phantom() { return (0, reified_1.phantom)(HIVE.reified()); }
    static get p() { return HIVE.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HIVE", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return HIVE.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isHIVE(item.type)) {
            throw new Error("not a HIVE type");
        }
        return HIVE.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return HIVE.fromFields(HIVE.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HIVE.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== HIVE.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HIVE.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHIVE(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HIVE object`);
    } return HIVE.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHIVE(data.bcs.type)) {
                throw new Error(`object at is not a HIVE object`);
            }
            return HIVE.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HIVE.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HIVE object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHIVE(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HIVE object`);
        }
        return HIVE.fromSuiObjectData(res.data);
    }
}
exports.HIVE = HIVE;
HIVE.$typeName = `${PKG_V1}::hive::HIVE`;
HIVE.$numTypeParams = 0;
HIVE.$isPhantom = [];
