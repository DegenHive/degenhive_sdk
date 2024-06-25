"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveGemsBurnt = exports.HiveGems = exports.HiveGemKraftCap = void 0;
exports.isHiveGemKraftCap = isHiveGemKraftCap;
exports.isHiveGems = isHiveGems;
exports.isHiveGemsBurnt = isHiveGemsBurnt;
const structs_1 = require("../../_dependencies/source/0x2/object/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== HiveGemKraftCap =============================== */
function isHiveGemKraftCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::hive_gems::HiveGemKraftCap"; }
class HiveGemKraftCap {
    constructor(typeArgs, fields) {
        this.$typeName = HiveGemKraftCap.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveGemKraftCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.kraftedTotal = fields.kraftedTotal;
    }
    static reified() { return { typeName: HiveGemKraftCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGemKraftCap.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveGemKraftCap.fromFields(fields), fromFieldsWithTypes: (item) => HiveGemKraftCap.fromFieldsWithTypes(item), fromBcs: (data) => HiveGemKraftCap.fromBcs(data), bcs: HiveGemKraftCap.bcs, fromJSONField: (field) => HiveGemKraftCap.fromJSONField(field), fromJSON: (json) => HiveGemKraftCap.fromJSON(json), fromSuiParsedData: (content) => HiveGemKraftCap.fromSuiParsedData(content), fetch: async (client, id) => HiveGemKraftCap.fetch(client, id), new: (fields) => { return new HiveGemKraftCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGemKraftCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGemKraftCap.reified()); }
    static get p() { return HiveGemKraftCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGemKraftCap", {
            id: structs_1.UID.bcs, krafted_total: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveGemKraftCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), kraftedTotal: (0, reified_1.decodeFromFields)("u64", fields.krafted_total) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveGemKraftCap(item.type)) {
            throw new Error("not a HiveGemKraftCap type");
        }
        return HiveGemKraftCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), kraftedTotal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.krafted_total) });
    }
    static fromBcs(data) { return HiveGemKraftCap.fromFields(HiveGemKraftCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, kraftedTotal: this.kraftedTotal.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveGemKraftCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), kraftedTotal: (0, reified_1.decodeFromJSONField)("u64", field.kraftedTotal) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveGemKraftCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveGemKraftCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveGemKraftCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveGemKraftCap object`);
    } return HiveGemKraftCap.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveGemKraftCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveGemKraftCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveGemKraftCap object`);
        }
        return HiveGemKraftCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveGemKraftCap = HiveGemKraftCap;
HiveGemKraftCap.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::hive_gems::HiveGemKraftCap";
HiveGemKraftCap.$numTypeParams = 0;
/* ============================== HiveGems =============================== */
function isHiveGems(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::hive_gems::HiveGems"; }
class HiveGems {
    constructor(typeArgs, fields) {
        this.$typeName = HiveGems.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveGems.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.value = fields.value;
    }
    static reified() { return { typeName: HiveGems.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGems.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveGems.fromFields(fields), fromFieldsWithTypes: (item) => HiveGems.fromFieldsWithTypes(item), fromBcs: (data) => HiveGems.fromBcs(data), bcs: HiveGems.bcs, fromJSONField: (field) => HiveGems.fromJSONField(field), fromJSON: (json) => HiveGems.fromJSON(json), fromSuiParsedData: (content) => HiveGems.fromSuiParsedData(content), fetch: async (client, id) => HiveGems.fetch(client, id), new: (fields) => { return new HiveGems([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGems.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGems.reified()); }
    static get p() { return HiveGems.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGems", {
            value: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveGems.reified().new({ value: (0, reified_1.decodeFromFields)("u64", fields.value) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveGems(item.type)) {
            throw new Error("not a HiveGems type");
        }
        return HiveGems.reified().new({ value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value) });
    }
    static fromBcs(data) { return HiveGems.fromFields(HiveGems.bcs.parse(data)); }
    toJSONField() {
        return {
            value: this.value.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveGems.reified().new({ value: (0, reified_1.decodeFromJSONField)("u64", field.value) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveGems.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveGems.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveGems(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveGems object`);
    } return HiveGems.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveGems object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveGems(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveGems object`);
        }
        return HiveGems.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveGems = HiveGems;
HiveGems.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::hive_gems::HiveGems";
HiveGems.$numTypeParams = 0;
/* ============================== HiveGemsBurnt =============================== */
function isHiveGemsBurnt(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::hive_gems::HiveGemsBurnt"; }
class HiveGemsBurnt {
    constructor(typeArgs, fields) {
        this.$typeName = HiveGemsBurnt.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveGemsBurnt.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.value = fields.value;
    }
    static reified() { return { typeName: HiveGemsBurnt.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGemsBurnt.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveGemsBurnt.fromFields(fields), fromFieldsWithTypes: (item) => HiveGemsBurnt.fromFieldsWithTypes(item), fromBcs: (data) => HiveGemsBurnt.fromBcs(data), bcs: HiveGemsBurnt.bcs, fromJSONField: (field) => HiveGemsBurnt.fromJSONField(field), fromJSON: (json) => HiveGemsBurnt.fromJSON(json), fromSuiParsedData: (content) => HiveGemsBurnt.fromSuiParsedData(content), fetch: async (client, id) => HiveGemsBurnt.fetch(client, id), new: (fields) => { return new HiveGemsBurnt([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGemsBurnt.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGemsBurnt.reified()); }
    static get p() { return HiveGemsBurnt.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGemsBurnt", {
            value: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveGemsBurnt.reified().new({ value: (0, reified_1.decodeFromFields)("u64", fields.value) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveGemsBurnt(item.type)) {
            throw new Error("not a HiveGemsBurnt type");
        }
        return HiveGemsBurnt.reified().new({ value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value) });
    }
    static fromBcs(data) { return HiveGemsBurnt.fromFields(HiveGemsBurnt.bcs.parse(data)); }
    toJSONField() {
        return {
            value: this.value.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveGemsBurnt.reified().new({ value: (0, reified_1.decodeFromJSONField)("u64", field.value) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveGemsBurnt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveGemsBurnt.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveGemsBurnt(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveGemsBurnt object`);
    } return HiveGemsBurnt.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveGemsBurnt object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveGemsBurnt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveGemsBurnt object`);
        }
        return HiveGemsBurnt.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveGemsBurnt = HiveGemsBurnt;
HiveGemsBurnt.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::hive_gems::HiveGemsBurnt";
HiveGemsBurnt.$numTypeParams = 0;
