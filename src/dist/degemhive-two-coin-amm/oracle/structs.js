"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveTwapSnapshot = exports.HiveOracleUpdated = exports.HiveOracleSnapshotRecorded = exports.HiveOracle = void 0;
exports.isHiveOracle = isHiveOracle;
exports.isHiveOracleSnapshotRecorded = isHiveOracleSnapshotRecorded;
exports.isHiveOracleUpdated = isHiveOracleUpdated;
exports.isHiveTwapSnapshot = isHiveTwapSnapshot;
const reified = require("../../_framework/reified");
const structs_1 = require("../../source/0x1/option/structs");
const structs_2 = require("../../source/0x2/linked-table/structs");
const structs_3 = require("../../source/0x2/object/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const structs_4 = require("../../dragon-trainer/dragon-trainer/structs");
const PUBLISHED_AT = __1.twopool.PUBLISHED_AT;
const PKG_V1 = __1.twopool.PKG_V1;
/* ============================== HiveOracle =============================== */
function isHiveOracle(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::oracle::HiveOracle`; }
class HiveOracle {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveOracle.$typeName;
        this.$isPhantom = HiveOracle.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveOracle.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.updateCap = fields.updateCap;
        ;
        this.suiHivePoolAddr = fields.suiHivePoolAddr;
        ;
        this.usdcSuiPoolAddr = fields.usdcSuiPoolAddr;
        ;
        this.snapshots = fields.snapshots;
        ;
        this.windowSize = fields.windowSize;
        ;
        this.tolerance = fields.tolerance;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: HiveOracle.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveOracle.$typeName, ...[]), typeArgs: [], isPhantom: HiveOracle.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveOracle.fromFields(fields), fromFieldsWithTypes: (item) => HiveOracle.fromFieldsWithTypes(item), fromBcs: (data) => HiveOracle.fromBcs(data), bcs: HiveOracle.bcs, fromJSONField: (field) => HiveOracle.fromJSONField(field), fromJSON: (json) => HiveOracle.fromJSON(json), fromSuiParsedData: (content) => HiveOracle.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveOracle.fromSuiObjectData(content), fetch: async (client, id) => HiveOracle.fetch(client, id), new: (fields) => { return new HiveOracle([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveOracle.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveOracle.reified()); }
    static get p() { return HiveOracle.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveOracle", {
            id: structs_3.UID.bcs, update_cap: structs_4.TwapUpdateCap.bcs, sui_hive_pool_addr: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), usdc_sui_pool_addr: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), snapshots: structs_2.LinkedTable.bcs(bcs_1.bcs.u64()), window_size: bcs_1.bcs.u64(), tolerance: bcs_1.bcs.u64(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveOracle.reified().new({ id: (0, reified_1.decodeFromFields)(structs_3.UID.reified(), fields.id), updateCap: (0, reified_1.decodeFromFields)(structs_4.TwapUpdateCap.reified(), fields.update_cap), suiHivePoolAddr: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.sui_hive_pool_addr), usdcSuiPoolAddr: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.usdc_sui_pool_addr), snapshots: (0, reified_1.decodeFromFields)(structs_2.LinkedTable.reified("u64", reified.phantom(HiveTwapSnapshot.reified())), fields.snapshots), windowSize: (0, reified_1.decodeFromFields)("u64", fields.window_size), tolerance: (0, reified_1.decodeFromFields)("u64", fields.tolerance), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveOracle(item.type)) {
            throw new Error("not a HiveOracle type");
        }
        return HiveOracle.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.UID.reified(), item.fields.id), updateCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.TwapUpdateCap.reified(), item.fields.update_cap), suiHivePoolAddr: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.sui_hive_pool_addr), usdcSuiPoolAddr: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.usdc_sui_pool_addr), snapshots: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.LinkedTable.reified("u64", reified.phantom(HiveTwapSnapshot.reified())), item.fields.snapshots), windowSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.window_size), tolerance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tolerance), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveOracle.fromFields(HiveOracle.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, updateCap: this.updateCap.toJSONField(), suiHivePoolAddr: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.suiHivePoolAddr), usdcSuiPoolAddr: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.usdcSuiPoolAddr), snapshots: this.snapshots.toJSONField(), windowSize: this.windowSize.toString(), tolerance: this.tolerance.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveOracle.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_3.UID.reified(), field.id), updateCap: (0, reified_1.decodeFromJSONField)(structs_4.TwapUpdateCap.reified(), field.updateCap), suiHivePoolAddr: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.suiHivePoolAddr), usdcSuiPoolAddr: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.usdcSuiPoolAddr), snapshots: (0, reified_1.decodeFromJSONField)(structs_2.LinkedTable.reified("u64", reified.phantom(HiveTwapSnapshot.reified())), field.snapshots), windowSize: (0, reified_1.decodeFromJSONField)("u64", field.windowSize), tolerance: (0, reified_1.decodeFromJSONField)("u64", field.tolerance), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveOracle.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveOracle.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveOracle(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveOracle object`);
    } return HiveOracle.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveOracle(data.bcs.type)) {
                throw new Error(`object at is not a HiveOracle object`);
            }
            return HiveOracle.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveOracle.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveOracle object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveOracle(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveOracle object`);
        }
        return HiveOracle.fromSuiObjectData(res.data);
    }
}
exports.HiveOracle = HiveOracle;
HiveOracle.$typeName = `${PKG_V1}::oracle::HiveOracle`;
HiveOracle.$numTypeParams = 0;
HiveOracle.$isPhantom = [];
/* ============================== HiveOracleSnapshotRecorded =============================== */
function isHiveOracleSnapshotRecorded(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::oracle::HiveOracleSnapshotRecorded`; }
class HiveOracleSnapshotRecorded {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveOracleSnapshotRecorded.$typeName;
        this.$isPhantom = HiveOracleSnapshotRecorded.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveOracleSnapshotRecorded.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.timestamp = fields.timestamp;
        ;
        this.hiveSuiCumPrice = fields.hiveSuiCumPrice;
        ;
        this.hiveSuiTimestamp = fields.hiveSuiTimestamp;
        ;
        this.suiUsdcCumPrice = fields.suiUsdcCumPrice;
        ;
        this.suiUsdcTimestamp = fields.suiUsdcTimestamp;
    }
    static reified() { return { typeName: HiveOracleSnapshotRecorded.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveOracleSnapshotRecorded.$typeName, ...[]), typeArgs: [], isPhantom: HiveOracleSnapshotRecorded.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveOracleSnapshotRecorded.fromFields(fields), fromFieldsWithTypes: (item) => HiveOracleSnapshotRecorded.fromFieldsWithTypes(item), fromBcs: (data) => HiveOracleSnapshotRecorded.fromBcs(data), bcs: HiveOracleSnapshotRecorded.bcs, fromJSONField: (field) => HiveOracleSnapshotRecorded.fromJSONField(field), fromJSON: (json) => HiveOracleSnapshotRecorded.fromJSON(json), fromSuiParsedData: (content) => HiveOracleSnapshotRecorded.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveOracleSnapshotRecorded.fromSuiObjectData(content), fetch: async (client, id) => HiveOracleSnapshotRecorded.fetch(client, id), new: (fields) => { return new HiveOracleSnapshotRecorded([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveOracleSnapshotRecorded.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveOracleSnapshotRecorded.reified()); }
    static get p() { return HiveOracleSnapshotRecorded.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveOracleSnapshotRecorded", {
            timestamp: bcs_1.bcs.u64(), hive_sui_cum_price: bcs_1.bcs.u256(), hive_sui_timestamp: bcs_1.bcs.u64(), sui_usdc_cum_price: bcs_1.bcs.u256(), sui_usdc_timestamp: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveOracleSnapshotRecorded.reified().new({ timestamp: (0, reified_1.decodeFromFields)("u64", fields.timestamp), hiveSuiCumPrice: (0, reified_1.decodeFromFields)("u256", fields.hive_sui_cum_price), hiveSuiTimestamp: (0, reified_1.decodeFromFields)("u64", fields.hive_sui_timestamp), suiUsdcCumPrice: (0, reified_1.decodeFromFields)("u256", fields.sui_usdc_cum_price), suiUsdcTimestamp: (0, reified_1.decodeFromFields)("u64", fields.sui_usdc_timestamp) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveOracleSnapshotRecorded(item.type)) {
            throw new Error("not a HiveOracleSnapshotRecorded type");
        }
        return HiveOracleSnapshotRecorded.reified().new({ timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp), hiveSuiCumPrice: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_sui_cum_price), hiveSuiTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_sui_timestamp), suiUsdcCumPrice: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.sui_usdc_cum_price), suiUsdcTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_usdc_timestamp) });
    }
    static fromBcs(data) { return HiveOracleSnapshotRecorded.fromFields(HiveOracleSnapshotRecorded.bcs.parse(data)); }
    toJSONField() {
        return {
            timestamp: this.timestamp.toString(), hiveSuiCumPrice: this.hiveSuiCumPrice.toString(), hiveSuiTimestamp: this.hiveSuiTimestamp.toString(), suiUsdcCumPrice: this.suiUsdcCumPrice.toString(), suiUsdcTimestamp: this.suiUsdcTimestamp.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveOracleSnapshotRecorded.reified().new({ timestamp: (0, reified_1.decodeFromJSONField)("u64", field.timestamp), hiveSuiCumPrice: (0, reified_1.decodeFromJSONField)("u256", field.hiveSuiCumPrice), hiveSuiTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.hiveSuiTimestamp), suiUsdcCumPrice: (0, reified_1.decodeFromJSONField)("u256", field.suiUsdcCumPrice), suiUsdcTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.suiUsdcTimestamp) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveOracleSnapshotRecorded.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveOracleSnapshotRecorded.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveOracleSnapshotRecorded(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveOracleSnapshotRecorded object`);
    } return HiveOracleSnapshotRecorded.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveOracleSnapshotRecorded(data.bcs.type)) {
                throw new Error(`object at is not a HiveOracleSnapshotRecorded object`);
            }
            return HiveOracleSnapshotRecorded.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveOracleSnapshotRecorded.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveOracleSnapshotRecorded object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveOracleSnapshotRecorded(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveOracleSnapshotRecorded object`);
        }
        return HiveOracleSnapshotRecorded.fromSuiObjectData(res.data);
    }
}
exports.HiveOracleSnapshotRecorded = HiveOracleSnapshotRecorded;
HiveOracleSnapshotRecorded.$typeName = `${PKG_V1}::oracle::HiveOracleSnapshotRecorded`;
HiveOracleSnapshotRecorded.$numTypeParams = 0;
HiveOracleSnapshotRecorded.$isPhantom = [];
/* ============================== HiveOracleUpdated =============================== */
function isHiveOracleUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::oracle::HiveOracleUpdated`; }
class HiveOracleUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveOracleUpdated.$typeName;
        this.$isPhantom = HiveOracleUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveOracleUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.suiHivePoolAddr = fields.suiHivePoolAddr;
        ;
        this.usdcSuiPoolAddr = fields.usdcSuiPoolAddr;
        ;
        this.windowSize = fields.windowSize;
        ;
        this.tolerance = fields.tolerance;
    }
    static reified() { return { typeName: HiveOracleUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveOracleUpdated.$typeName, ...[]), typeArgs: [], isPhantom: HiveOracleUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveOracleUpdated.fromFields(fields), fromFieldsWithTypes: (item) => HiveOracleUpdated.fromFieldsWithTypes(item), fromBcs: (data) => HiveOracleUpdated.fromBcs(data), bcs: HiveOracleUpdated.bcs, fromJSONField: (field) => HiveOracleUpdated.fromJSONField(field), fromJSON: (json) => HiveOracleUpdated.fromJSON(json), fromSuiParsedData: (content) => HiveOracleUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveOracleUpdated.fromSuiObjectData(content), fetch: async (client, id) => HiveOracleUpdated.fetch(client, id), new: (fields) => { return new HiveOracleUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveOracleUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveOracleUpdated.reified()); }
    static get p() { return HiveOracleUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveOracleUpdated", {
            sui_hive_pool_addr: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), usdc_sui_pool_addr: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), window_size: bcs_1.bcs.u64(), tolerance: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveOracleUpdated.reified().new({ suiHivePoolAddr: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.sui_hive_pool_addr), usdcSuiPoolAddr: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.usdc_sui_pool_addr), windowSize: (0, reified_1.decodeFromFields)("u64", fields.window_size), tolerance: (0, reified_1.decodeFromFields)("u64", fields.tolerance) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveOracleUpdated(item.type)) {
            throw new Error("not a HiveOracleUpdated type");
        }
        return HiveOracleUpdated.reified().new({ suiHivePoolAddr: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.sui_hive_pool_addr), usdcSuiPoolAddr: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.usdc_sui_pool_addr), windowSize: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.window_size), tolerance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tolerance) });
    }
    static fromBcs(data) { return HiveOracleUpdated.fromFields(HiveOracleUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            suiHivePoolAddr: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.suiHivePoolAddr), usdcSuiPoolAddr: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.usdcSuiPoolAddr), windowSize: this.windowSize.toString(), tolerance: this.tolerance.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveOracleUpdated.reified().new({ suiHivePoolAddr: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.suiHivePoolAddr), usdcSuiPoolAddr: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.usdcSuiPoolAddr), windowSize: (0, reified_1.decodeFromJSONField)("u64", field.windowSize), tolerance: (0, reified_1.decodeFromJSONField)("u64", field.tolerance) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveOracleUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveOracleUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveOracleUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveOracleUpdated object`);
    } return HiveOracleUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveOracleUpdated(data.bcs.type)) {
                throw new Error(`object at is not a HiveOracleUpdated object`);
            }
            return HiveOracleUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveOracleUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveOracleUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveOracleUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveOracleUpdated object`);
        }
        return HiveOracleUpdated.fromSuiObjectData(res.data);
    }
}
exports.HiveOracleUpdated = HiveOracleUpdated;
HiveOracleUpdated.$typeName = `${PKG_V1}::oracle::HiveOracleUpdated`;
HiveOracleUpdated.$numTypeParams = 0;
HiveOracleUpdated.$isPhantom = [];
/* ============================== HiveTwapSnapshot =============================== */
function isHiveTwapSnapshot(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::oracle::HiveTwapSnapshot`; }
class HiveTwapSnapshot {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveTwapSnapshot.$typeName;
        this.$isPhantom = HiveTwapSnapshot.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveTwapSnapshot.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.timestamp = fields.timestamp;
        ;
        this.hiveSuiCumPrice = fields.hiveSuiCumPrice;
        ;
        this.hiveSuiTimestamp = fields.hiveSuiTimestamp;
        ;
        this.suiUsdcCumPrice = fields.suiUsdcCumPrice;
        ;
        this.suiUsdcTimestamp = fields.suiUsdcTimestamp;
    }
    static reified() { return { typeName: HiveTwapSnapshot.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveTwapSnapshot.$typeName, ...[]), typeArgs: [], isPhantom: HiveTwapSnapshot.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveTwapSnapshot.fromFields(fields), fromFieldsWithTypes: (item) => HiveTwapSnapshot.fromFieldsWithTypes(item), fromBcs: (data) => HiveTwapSnapshot.fromBcs(data), bcs: HiveTwapSnapshot.bcs, fromJSONField: (field) => HiveTwapSnapshot.fromJSONField(field), fromJSON: (json) => HiveTwapSnapshot.fromJSON(json), fromSuiParsedData: (content) => HiveTwapSnapshot.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveTwapSnapshot.fromSuiObjectData(content), fetch: async (client, id) => HiveTwapSnapshot.fetch(client, id), new: (fields) => { return new HiveTwapSnapshot([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveTwapSnapshot.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveTwapSnapshot.reified()); }
    static get p() { return HiveTwapSnapshot.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveTwapSnapshot", {
            timestamp: bcs_1.bcs.u64(), hive_sui_cum_price: bcs_1.bcs.u256(), hive_sui_timestamp: bcs_1.bcs.u64(), sui_usdc_cum_price: bcs_1.bcs.u256(), sui_usdc_timestamp: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveTwapSnapshot.reified().new({ timestamp: (0, reified_1.decodeFromFields)("u64", fields.timestamp), hiveSuiCumPrice: (0, reified_1.decodeFromFields)("u256", fields.hive_sui_cum_price), hiveSuiTimestamp: (0, reified_1.decodeFromFields)("u64", fields.hive_sui_timestamp), suiUsdcCumPrice: (0, reified_1.decodeFromFields)("u256", fields.sui_usdc_cum_price), suiUsdcTimestamp: (0, reified_1.decodeFromFields)("u64", fields.sui_usdc_timestamp) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveTwapSnapshot(item.type)) {
            throw new Error("not a HiveTwapSnapshot type");
        }
        return HiveTwapSnapshot.reified().new({ timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp), hiveSuiCumPrice: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_sui_cum_price), hiveSuiTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_sui_timestamp), suiUsdcCumPrice: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.sui_usdc_cum_price), suiUsdcTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_usdc_timestamp) });
    }
    static fromBcs(data) { return HiveTwapSnapshot.fromFields(HiveTwapSnapshot.bcs.parse(data)); }
    toJSONField() {
        return {
            timestamp: this.timestamp.toString(), hiveSuiCumPrice: this.hiveSuiCumPrice.toString(), hiveSuiTimestamp: this.hiveSuiTimestamp.toString(), suiUsdcCumPrice: this.suiUsdcCumPrice.toString(), suiUsdcTimestamp: this.suiUsdcTimestamp.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveTwapSnapshot.reified().new({ timestamp: (0, reified_1.decodeFromJSONField)("u64", field.timestamp), hiveSuiCumPrice: (0, reified_1.decodeFromJSONField)("u256", field.hiveSuiCumPrice), hiveSuiTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.hiveSuiTimestamp), suiUsdcCumPrice: (0, reified_1.decodeFromJSONField)("u256", field.suiUsdcCumPrice), suiUsdcTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.suiUsdcTimestamp) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveTwapSnapshot.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveTwapSnapshot.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveTwapSnapshot(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveTwapSnapshot object`);
    } return HiveTwapSnapshot.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveTwapSnapshot(data.bcs.type)) {
                throw new Error(`object at is not a HiveTwapSnapshot object`);
            }
            return HiveTwapSnapshot.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveTwapSnapshot.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveTwapSnapshot object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveTwapSnapshot(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveTwapSnapshot object`);
        }
        return HiveTwapSnapshot.fromSuiObjectData(res.data);
    }
}
exports.HiveTwapSnapshot = HiveTwapSnapshot;
HiveTwapSnapshot.$typeName = `${PKG_V1}::oracle::HiveTwapSnapshot`;
HiveTwapSnapshot.$numTypeParams = 0;
HiveTwapSnapshot.$isPhantom = [];
