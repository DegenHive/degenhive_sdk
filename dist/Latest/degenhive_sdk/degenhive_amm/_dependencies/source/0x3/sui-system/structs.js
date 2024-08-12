"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuiSystemState = void 0;
exports.isSuiSystemState = isSuiSystemState;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x2/object/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== SuiSystemState =============================== */
function isSuiSystemState(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V10}::sui_system::SuiSystemState`; }
class SuiSystemState {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SuiSystemState.$typeName;
        this.$isPhantom = SuiSystemState.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SuiSystemState.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: SuiSystemState.$typeName, fullTypeName: (0, util_1.composeSuiType)(SuiSystemState.$typeName, ...[]), typeArgs: [], isPhantom: SuiSystemState.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SuiSystemState.fromFields(fields), fromFieldsWithTypes: (item) => SuiSystemState.fromFieldsWithTypes(item), fromBcs: (data) => SuiSystemState.fromBcs(data), bcs: SuiSystemState.bcs, fromJSONField: (field) => SuiSystemState.fromJSONField(field), fromJSON: (json) => SuiSystemState.fromJSON(json), fromSuiParsedData: (content) => SuiSystemState.fromSuiParsedData(content), fetch: async (client, id) => SuiSystemState.fetch(client, id), new: (fields) => { return new SuiSystemState([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SuiSystemState.reified(); }
    static phantom() { return (0, reified_1.phantom)(SuiSystemState.reified()); }
    static get p() { return SuiSystemState.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SuiSystemState", {
            id: structs_1.UID.bcs, version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return SuiSystemState.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isSuiSystemState(item.type)) {
            throw new Error("not a SuiSystemState type");
        }
        return SuiSystemState.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return SuiSystemState.fromFields(SuiSystemState.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SuiSystemState.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== SuiSystemState.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SuiSystemState.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSuiSystemState(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SuiSystemState object`);
    } return SuiSystemState.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SuiSystemState object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuiSystemState(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuiSystemState object`);
        }
        return SuiSystemState.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SuiSystemState = SuiSystemState;
SuiSystemState.$typeName = `${index_1.PKG_V10}::sui_system::SuiSystemState`;
SuiSystemState.$numTypeParams = 0;
SuiSystemState.$isPhantom = [];
