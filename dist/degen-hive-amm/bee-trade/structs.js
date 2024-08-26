"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeesManager = exports.BeesForEngagementPerEpochUpdated = exports.BeesBurnt = void 0;
exports.isBeesBurnt = isBeesBurnt;
exports.isBeesForEngagementPerEpochUpdated = isBeesForEngagementPerEpochUpdated;
exports.isBeesManager = isBeesManager;
const structs_1 = require("../../_dependencies/source/0x2/balance/structs");
const structs_2 = require("../../_dependencies/source/0x2/coin/structs");
const structs_3 = require("../../_dependencies/source/0x2/object/structs");
const structs_4 = require("../../_dependencies/source/0x2/token/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const PUBLISHED_AT = __1.twopool.PUBLISHED_AT;
const PKG_V1 = __1.twopool.PKG_V1;
/* ============================== BeesBurnt =============================== */
function isBeesBurnt(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::bee_trade::BeesBurnt`; }
class BeesBurnt {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeesBurnt.$typeName;
        this.$isPhantom = BeesBurnt.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeesBurnt.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.beesBurnt = fields.beesBurnt;
    }
    static reified() { return { typeName: BeesBurnt.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeesBurnt.$typeName, ...[]), typeArgs: [], isPhantom: BeesBurnt.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeesBurnt.fromFields(fields), fromFieldsWithTypes: (item) => BeesBurnt.fromFieldsWithTypes(item), fromBcs: (data) => BeesBurnt.fromBcs(data), bcs: BeesBurnt.bcs, fromJSONField: (field) => BeesBurnt.fromJSONField(field), fromJSON: (json) => BeesBurnt.fromJSON(json), fromSuiParsedData: (content) => BeesBurnt.fromSuiParsedData(content), fetch: async (client, id) => BeesBurnt.fetch(client, id), new: (fields) => { return new BeesBurnt([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeesBurnt.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeesBurnt.reified()); }
    static get p() { return BeesBurnt.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeesBurnt", {
            bees_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeesBurnt.reified().new({ beesBurnt: (0, reified_1.decodeFromFields)("u64", fields.bees_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeesBurnt(item.type)) {
            throw new Error("not a BeesBurnt type");
        }
        return BeesBurnt.reified().new({ beesBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_burnt) });
    }
    static fromBcs(data) { return BeesBurnt.fromFields(BeesBurnt.bcs.parse(data)); }
    toJSONField() {
        return {
            beesBurnt: this.beesBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeesBurnt.reified().new({ beesBurnt: (0, reified_1.decodeFromJSONField)("u64", field.beesBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeesBurnt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeesBurnt.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeesBurnt(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeesBurnt object`);
    } return BeesBurnt.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeesBurnt object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeesBurnt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeesBurnt object`);
        }
        return BeesBurnt.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BeesBurnt = BeesBurnt;
BeesBurnt.$typeName = `${PKG_V1}::bee_trade::BeesBurnt`;
BeesBurnt.$numTypeParams = 0;
BeesBurnt.$isPhantom = [];
/* ============================== BeesForEngagementPerEpochUpdated =============================== */
function isBeesForEngagementPerEpochUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::bee_trade::BeesForEngagementPerEpochUpdated`; }
class BeesForEngagementPerEpochUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeesForEngagementPerEpochUpdated.$typeName;
        this.$isPhantom = BeesForEngagementPerEpochUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeesForEngagementPerEpochUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.beeForEngagementPerEpoch = fields.beeForEngagementPerEpoch;
    }
    static reified() { return { typeName: BeesForEngagementPerEpochUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeesForEngagementPerEpochUpdated.$typeName, ...[]), typeArgs: [], isPhantom: BeesForEngagementPerEpochUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeesForEngagementPerEpochUpdated.fromFields(fields), fromFieldsWithTypes: (item) => BeesForEngagementPerEpochUpdated.fromFieldsWithTypes(item), fromBcs: (data) => BeesForEngagementPerEpochUpdated.fromBcs(data), bcs: BeesForEngagementPerEpochUpdated.bcs, fromJSONField: (field) => BeesForEngagementPerEpochUpdated.fromJSONField(field), fromJSON: (json) => BeesForEngagementPerEpochUpdated.fromJSON(json), fromSuiParsedData: (content) => BeesForEngagementPerEpochUpdated.fromSuiParsedData(content), fetch: async (client, id) => BeesForEngagementPerEpochUpdated.fetch(client, id), new: (fields) => { return new BeesForEngagementPerEpochUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeesForEngagementPerEpochUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeesForEngagementPerEpochUpdated.reified()); }
    static get p() { return BeesForEngagementPerEpochUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeesForEngagementPerEpochUpdated", {
            bee_for_engagement_per_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeesForEngagementPerEpochUpdated.reified().new({ beeForEngagementPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.bee_for_engagement_per_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeesForEngagementPerEpochUpdated(item.type)) {
            throw new Error("not a BeesForEngagementPerEpochUpdated type");
        }
        return BeesForEngagementPerEpochUpdated.reified().new({ beeForEngagementPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_for_engagement_per_epoch) });
    }
    static fromBcs(data) { return BeesForEngagementPerEpochUpdated.fromFields(BeesForEngagementPerEpochUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            beeForEngagementPerEpoch: this.beeForEngagementPerEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeesForEngagementPerEpochUpdated.reified().new({ beeForEngagementPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.beeForEngagementPerEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeesForEngagementPerEpochUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeesForEngagementPerEpochUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeesForEngagementPerEpochUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeesForEngagementPerEpochUpdated object`);
    } return BeesForEngagementPerEpochUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeesForEngagementPerEpochUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeesForEngagementPerEpochUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeesForEngagementPerEpochUpdated object`);
        }
        return BeesForEngagementPerEpochUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BeesForEngagementPerEpochUpdated = BeesForEngagementPerEpochUpdated;
BeesForEngagementPerEpochUpdated.$typeName = `${PKG_V1}::bee_trade::BeesForEngagementPerEpochUpdated`;
BeesForEngagementPerEpochUpdated.$numTypeParams = 0;
BeesForEngagementPerEpochUpdated.$isPhantom = [];
/* ============================== BeesManager =============================== */
function isBeesManager(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::bee_trade::BeesManager` + '<'); }
class BeesManager {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeesManager.$typeName;
        this.$isPhantom = BeesManager.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeesManager.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.beeKraftCap = fields.beeKraftCap;
        ;
        this.policyCap = fields.policyCap;
        ;
        this.availableBees = fields.availableBees;
        ;
        this.beeForEngagementPerEpoch = fields.beeForEngagementPerEpoch;
        ;
        this.lastClaimEpoch = fields.lastClaimEpoch;
        ;
        this.totalBurnt = fields.totalBurnt;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified(T) { return { typeName: BeesManager.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeesManager.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: BeesManager.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => BeesManager.fromFields(T, fields), fromFieldsWithTypes: (item) => BeesManager.fromFieldsWithTypes(T, item), fromBcs: (data) => BeesManager.fromBcs(T, data), bcs: BeesManager.bcs, fromJSONField: (field) => BeesManager.fromJSONField(T, field), fromJSON: (json) => BeesManager.fromJSON(T, json), fromSuiParsedData: (content) => BeesManager.fromSuiParsedData(T, content), fetch: async (client, id) => BeesManager.fetch(client, T, id), new: (fields) => { return new BeesManager([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeesManager.reified; }
    static phantom(T) { return (0, reified_1.phantom)(BeesManager.reified(T)); }
    static get p() { return BeesManager.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("BeesManager", {
            id: structs_3.UID.bcs, bee_kraft_cap: structs_2.TreasuryCap.bcs, policy_cap: structs_4.TokenPolicyCap.bcs, available_bees: structs_1.Balance.bcs, bee_for_engagement_per_epoch: bcs_1.bcs.u64(), last_claim_epoch: bcs_1.bcs.u64(), total_burnt: bcs_1.bcs.u64(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return BeesManager.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_3.UID.reified(), fields.id), beeKraftCap: (0, reified_1.decodeFromFields)(structs_2.TreasuryCap.reified(typeArg), fields.bee_kraft_cap), policyCap: (0, reified_1.decodeFromFields)(structs_4.TokenPolicyCap.reified(typeArg), fields.policy_cap), availableBees: (0, reified_1.decodeFromFields)(structs_1.Balance.reified(typeArg), fields.available_bees), beeForEngagementPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.bee_for_engagement_per_epoch), lastClaimEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_claim_epoch), totalBurnt: (0, reified_1.decodeFromFields)("u64", fields.total_burnt), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isBeesManager(item.type)) {
            throw new Error("not a BeesManager type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return BeesManager.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.UID.reified(), item.fields.id), beeKraftCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TreasuryCap.reified(typeArg), item.fields.bee_kraft_cap), policyCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.TokenPolicyCap.reified(typeArg), item.fields.policy_cap), availableBees: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Balance.reified(typeArg), item.fields.available_bees), beeForEngagementPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_for_engagement_per_epoch), lastClaimEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_claim_epoch), totalBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_burnt), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(typeArg, data) { return BeesManager.fromFields(typeArg, BeesManager.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, beeKraftCap: this.beeKraftCap.toJSONField(), policyCap: this.policyCap.toJSONField(), availableBees: this.availableBees.toJSONField(), beeForEngagementPerEpoch: this.beeForEngagementPerEpoch.toString(), lastClaimEpoch: this.lastClaimEpoch.toString(), totalBurnt: this.totalBurnt.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return BeesManager.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_3.UID.reified(), field.id), beeKraftCap: (0, reified_1.decodeFromJSONField)(structs_2.TreasuryCap.reified(typeArg), field.beeKraftCap), policyCap: (0, reified_1.decodeFromJSONField)(structs_4.TokenPolicyCap.reified(typeArg), field.policyCap), availableBees: (0, reified_1.decodeFromJSONField)(structs_1.Balance.reified(typeArg), field.availableBees), beeForEngagementPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.beeForEngagementPerEpoch), lastClaimEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastClaimEpoch), totalBurnt: (0, reified_1.decodeFromJSONField)("u64", field.totalBurnt), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== BeesManager.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(BeesManager.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return BeesManager.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeesManager(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeesManager object`);
    } return BeesManager.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeesManager object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeesManager(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeesManager object`);
        }
        const gotTypeArgs = (0, util_1.parseTypeName)(res.data.bcs.type).typeArgs;
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
        return BeesManager.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BeesManager = BeesManager;
BeesManager.$typeName = `${PKG_V1}::bee_trade::BeesManager`;
BeesManager.$numTypeParams = 1;
BeesManager.$isPhantom = [true,];
