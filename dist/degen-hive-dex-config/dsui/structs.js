"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HIVE = exports.DSUI = void 0;
exports.isDSUI = isDSUI;
exports.isHIVE = isHIVE;
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== DSUI =============================== */
function isDSUI(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI"; }
function isHIVE(type) { type = (0, util_1.compressSuiType)(type); return type === "0x114d0f5a2b73e7b158263f0faea8c1ac51dffcab3a3626f9035633f52c5f9d6c::hive::HIVE"; }
class DSUI {
    constructor(typeArgs, fields) {
        this.$typeName = DSUI.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(DSUI.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: DSUI.$typeName, fullTypeName: (0, util_1.composeSuiType)(DSUI.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => DSUI.fromFields(fields), fromFieldsWithTypes: (item) => DSUI.fromFieldsWithTypes(item), fromBcs: (data) => DSUI.fromBcs(data), bcs: DSUI.bcs, fromJSONField: (field) => DSUI.fromJSONField(field), fromJSON: (json) => DSUI.fromJSON(json), fromSuiParsedData: (content) => DSUI.fromSuiParsedData(content), fetch: async (client, id) => DSUI.fetch(client, id), new: (fields) => { return new DSUI([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DSUI.reified(); }
    static phantom() { return (0, reified_1.phantom)(DSUI.reified()); }
    static get p() { return DSUI.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DSUI", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return DSUI.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isDSUI(item.type)) {
            throw new Error("not a DSUI type");
        }
        return DSUI.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return DSUI.fromFields(DSUI.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DSUI.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== DSUI.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DSUI.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDSUI(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DSUI object`);
    } return DSUI.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DSUI object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDSUI(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DSUI object`);
        }
        return DSUI.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DSUI = DSUI;
DSUI.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI";
DSUI.$numTypeParams = 0;
class HIVE {
    constructor(typeArgs, fields) {
        this.$typeName = HIVE.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HIVE.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: HIVE.$typeName, fullTypeName: (0, util_1.composeSuiType)(HIVE.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HIVE.fromFields(fields), fromFieldsWithTypes: (item) => HIVE.fromFieldsWithTypes(item), fromBcs: (data) => HIVE.fromBcs(data), bcs: HIVE.bcs, fromJSONField: (field) => HIVE.fromJSONField(field), fromJSON: (json) => HIVE.fromJSON(json), fromSuiParsedData: (content) => HIVE.fromSuiParsedData(content), fetch: async (client, id) => HIVE.fetch(client, id), new: (fields) => { return new HIVE([], fields); }, kind: "StructClassReified", }; }
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HIVE object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHIVE(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HIVE object`);
        }
        return HIVE.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HIVE = HIVE;
HIVE.$typeName = "0x114d0f5a2b73e7b158263f0faea8c1ac51dffcab3a3626f9035633f52c5f9d6c::hive::HIVE";
HIVE.$numTypeParams = 0;
