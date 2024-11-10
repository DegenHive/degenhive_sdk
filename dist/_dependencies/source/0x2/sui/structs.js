"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUI = void 0;
exports.isSUI = isSUI;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== SUI =============================== */
function isSUI(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::sui::SUI`; }
class SUI {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SUI.$typeName;
        this.$isPhantom = SUI.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SUI.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: SUI.$typeName, fullTypeName: (0, util_1.composeSuiType)(SUI.$typeName, ...[]), typeArgs: [], isPhantom: SUI.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SUI.fromFields(fields), fromFieldsWithTypes: (item) => SUI.fromFieldsWithTypes(item), fromBcs: (data) => SUI.fromBcs(data), bcs: SUI.bcs, fromJSONField: (field) => SUI.fromJSONField(field), fromJSON: (json) => SUI.fromJSON(json), fromSuiParsedData: (content) => SUI.fromSuiParsedData(content), fromSuiObjectData: (content) => SUI.fromSuiObjectData(content), fetch: async (client, id) => SUI.fetch(client, id), new: (fields) => { return new SUI([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SUI.reified(); }
    static phantom() { return (0, reified_1.phantom)(SUI.reified()); }
    static get p() { return SUI.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SUI", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return SUI.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isSUI(item.type)) {
            throw new Error("not a SUI type");
        }
        return SUI.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return SUI.fromFields(SUI.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SUI.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== SUI.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SUI.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSUI(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SUI object`);
    } return SUI.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSUI(data.bcs.type)) {
                throw new Error(`object at is not a SUI object`);
            }
            return SUI.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SUI.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SUI object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSUI(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SUI object`);
        }
        return SUI.fromSuiObjectData(res.data);
    }
}
exports.SUI = SUI;
SUI.$typeName = `${index_1.PKG_V28}::sui::SUI`;
SUI.$numTypeParams = 0;
SUI.$isPhantom = [];
