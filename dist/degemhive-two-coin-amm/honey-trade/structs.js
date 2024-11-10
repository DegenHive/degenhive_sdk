"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoneyManager = exports.HoneyBurnt = void 0;
exports.isHoneyBurnt = isHoneyBurnt;
exports.isHoneyManager = isHoneyManager;
const structs_1 = require("../../_dependencies/source/0x2/coin/structs");
const structs_2 = require("../../_dependencies/source/0x2/object/structs");
const structs_3 = require("../../_dependencies/source/0x2/token/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const PUBLISHED_AT = __1.twopool.PUBLISHED_AT;
const PKG_V1 = __1.twopool.PKG_V1;
/* ============================== HoneyBurnt =============================== */
function isHoneyBurnt(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::honey_trade::HoneyBurnt`; }
class HoneyBurnt {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyBurnt.$typeName;
        this.$isPhantom = HoneyBurnt.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyBurnt.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.honeyBurntTax = fields.honeyBurntTax;
        ;
        this.honeyBurntSuiFee = fields.honeyBurntSuiFee;
        ;
        this.totalHoneyBurnt = fields.totalHoneyBurnt;
    }
    static reified() { return { typeName: HoneyBurnt.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyBurnt.$typeName, ...[]), typeArgs: [], isPhantom: HoneyBurnt.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HoneyBurnt.fromFields(fields), fromFieldsWithTypes: (item) => HoneyBurnt.fromFieldsWithTypes(item), fromBcs: (data) => HoneyBurnt.fromBcs(data), bcs: HoneyBurnt.bcs, fromJSONField: (field) => HoneyBurnt.fromJSONField(field), fromJSON: (json) => HoneyBurnt.fromJSON(json), fromSuiParsedData: (content) => HoneyBurnt.fromSuiParsedData(content), fromSuiObjectData: (content) => HoneyBurnt.fromSuiObjectData(content), fetch: async (client, id) => HoneyBurnt.fetch(client, id), new: (fields) => { return new HoneyBurnt([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyBurnt.reified(); }
    static phantom() { return (0, reified_1.phantom)(HoneyBurnt.reified()); }
    static get p() { return HoneyBurnt.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyBurnt", {
            honey_burnt_tax: bcs_1.bcs.u64(), honey_burnt_sui_fee: bcs_1.bcs.u64(), total_honey_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HoneyBurnt.reified().new({ honeyBurntTax: (0, reified_1.decodeFromFields)("u64", fields.honey_burnt_tax), honeyBurntSuiFee: (0, reified_1.decodeFromFields)("u64", fields.honey_burnt_sui_fee), totalHoneyBurnt: (0, reified_1.decodeFromFields)("u64", fields.total_honey_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isHoneyBurnt(item.type)) {
            throw new Error("not a HoneyBurnt type");
        }
        return HoneyBurnt.reified().new({ honeyBurntTax: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_burnt_tax), honeyBurntSuiFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_burnt_sui_fee), totalHoneyBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_honey_burnt) });
    }
    static fromBcs(data) { return HoneyBurnt.fromFields(HoneyBurnt.bcs.parse(data)); }
    toJSONField() {
        return {
            honeyBurntTax: this.honeyBurntTax.toString(), honeyBurntSuiFee: this.honeyBurntSuiFee.toString(), totalHoneyBurnt: this.totalHoneyBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HoneyBurnt.reified().new({ honeyBurntTax: (0, reified_1.decodeFromJSONField)("u64", field.honeyBurntTax), honeyBurntSuiFee: (0, reified_1.decodeFromJSONField)("u64", field.honeyBurntSuiFee), totalHoneyBurnt: (0, reified_1.decodeFromJSONField)("u64", field.totalHoneyBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== HoneyBurnt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HoneyBurnt.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyBurnt(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyBurnt object`);
    } return HoneyBurnt.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyBurnt(data.bcs.type)) {
                throw new Error(`object at is not a HoneyBurnt object`);
            }
            return HoneyBurnt.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyBurnt.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyBurnt object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyBurnt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyBurnt object`);
        }
        return HoneyBurnt.fromSuiObjectData(res.data);
    }
}
exports.HoneyBurnt = HoneyBurnt;
HoneyBurnt.$typeName = `${PKG_V1}::honey_trade::HoneyBurnt`;
HoneyBurnt.$numTypeParams = 0;
HoneyBurnt.$isPhantom = [];
/* ============================== HoneyManager =============================== */
function isHoneyManager(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::honey_trade::HoneyManager` + '<'); }
class HoneyManager {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyManager.$typeName;
        this.$isPhantom = HoneyManager.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyManager.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.honeyKraftCap = fields.honeyKraftCap;
        ;
        this.policyCap = fields.policyCap;
        ;
        this.totalBurnt = fields.totalBurnt;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified(T) { return { typeName: HoneyManager.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyManager.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: HoneyManager.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => HoneyManager.fromFields(T, fields), fromFieldsWithTypes: (item) => HoneyManager.fromFieldsWithTypes(T, item), fromBcs: (data) => HoneyManager.fromBcs(T, data), bcs: HoneyManager.bcs, fromJSONField: (field) => HoneyManager.fromJSONField(T, field), fromJSON: (json) => HoneyManager.fromJSON(T, json), fromSuiParsedData: (content) => HoneyManager.fromSuiParsedData(T, content), fromSuiObjectData: (content) => HoneyManager.fromSuiObjectData(T, content), fetch: async (client, id) => HoneyManager.fetch(client, T, id), new: (fields) => { return new HoneyManager([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyManager.reified; }
    static phantom(T) { return (0, reified_1.phantom)(HoneyManager.reified(T)); }
    static get p() { return HoneyManager.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyManager", {
            id: structs_2.UID.bcs, honey_kraft_cap: structs_1.TreasuryCap.bcs, policy_cap: structs_3.TokenPolicyCap.bcs, total_burnt: bcs_1.bcs.u64(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return HoneyManager.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), honeyKraftCap: (0, reified_1.decodeFromFields)(structs_1.TreasuryCap.reified(typeArg), fields.honey_kraft_cap), policyCap: (0, reified_1.decodeFromFields)(structs_3.TokenPolicyCap.reified(typeArg), fields.policy_cap), totalBurnt: (0, reified_1.decodeFromFields)("u64", fields.total_burnt), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isHoneyManager(item.type)) {
            throw new Error("not a HoneyManager type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return HoneyManager.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), honeyKraftCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.TreasuryCap.reified(typeArg), item.fields.honey_kraft_cap), policyCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TokenPolicyCap.reified(typeArg), item.fields.policy_cap), totalBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_burnt), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(typeArg, data) { return HoneyManager.fromFields(typeArg, HoneyManager.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, honeyKraftCap: this.honeyKraftCap.toJSONField(), policyCap: this.policyCap.toJSONField(), totalBurnt: this.totalBurnt.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return HoneyManager.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), honeyKraftCap: (0, reified_1.decodeFromJSONField)(structs_1.TreasuryCap.reified(typeArg), field.honeyKraftCap), policyCap: (0, reified_1.decodeFromJSONField)(structs_3.TokenPolicyCap.reified(typeArg), field.policyCap), totalBurnt: (0, reified_1.decodeFromJSONField)("u64", field.totalBurnt), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== HoneyManager.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(HoneyManager.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return HoneyManager.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyManager(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyManager object`);
    } return HoneyManager.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyManager(data.bcs.type)) {
                throw new Error(`object at is not a HoneyManager object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            ;
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            ;
            return HoneyManager.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyManager.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyManager object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyManager(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyManager object`);
        }
        return HoneyManager.fromSuiObjectData(typeArg, res.data);
    }
}
exports.HoneyManager = HoneyManager;
HoneyManager.$typeName = `${PKG_V1}::honey_trade::HoneyManager`;
HoneyManager.$numTypeParams = 1;
HoneyManager.$isPhantom = [true,];
