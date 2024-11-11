"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YieldFlow = exports.VoteByVestedTokensCapability = exports.TwoAmmFlowAccess = exports.TreasuryResourcesDistributed = exports.ThreeAmmFlowAccess = exports.StableIdentifierRemoved = exports.StableIdentifierAdded = exports.PoolsConfig = exports.PoolFlow = exports.NewFeeCollectorKrafted = exports.MasterAccessKey = exports.HiddenWorldCapability = exports.FeeInfo = exports.FeeExtractedForCoin = exports.FeeDistributionPctUpdated = exports.FeeCollector = exports.FeeCollectedForCoin = exports.DragonFoodCapability = exports.DragonDaoCapability = exports.DeployerCap = exports.DefaultFeeSet = exports.DefaultFeeInfo = exports.DecimalPrecisionForCoinTypesWhitelisted = void 0;
exports.isDecimalPrecisionForCoinTypesWhitelisted = isDecimalPrecisionForCoinTypesWhitelisted;
exports.isDefaultFeeInfo = isDefaultFeeInfo;
exports.isDefaultFeeSet = isDefaultFeeSet;
exports.isDeployerCap = isDeployerCap;
exports.isDragonDaoCapability = isDragonDaoCapability;
exports.isDragonFoodCapability = isDragonFoodCapability;
exports.isFeeCollectedForCoin = isFeeCollectedForCoin;
exports.isFeeCollector = isFeeCollector;
exports.isFeeDistributionPctUpdated = isFeeDistributionPctUpdated;
exports.isFeeExtractedForCoin = isFeeExtractedForCoin;
exports.isFeeInfo = isFeeInfo;
exports.isHiddenWorldCapability = isHiddenWorldCapability;
exports.isMasterAccessKey = isMasterAccessKey;
exports.isNewFeeCollectorKrafted = isNewFeeCollectorKrafted;
exports.isPoolFlow = isPoolFlow;
exports.isPoolsConfig = isPoolsConfig;
exports.isStableIdentifierAdded = isStableIdentifierAdded;
exports.isStableIdentifierRemoved = isStableIdentifierRemoved;
exports.isThreeAmmFlowAccess = isThreeAmmFlowAccess;
exports.isTreasuryResourcesDistributed = isTreasuryResourcesDistributed;
exports.isTwoAmmFlowAccess = isTwoAmmFlowAccess;
exports.isVoteByVestedTokensCapability = isVoteByVestedTokensCapability;
exports.isYieldFlow = isYieldFlow;
const reified = require("../../_framework/reified");
const structs_1 = require("../../_dependencies/source/0x1/ascii/structs");
const structs_2 = require("../../_dependencies/source/0x1/string/structs");
const structs_3 = require("../../_dependencies/source/0x1/type-name/structs");
const structs_4 = require("../../_dependencies/source/0x2/balance/structs");
const structs_5 = require("../../_dependencies/source/0x2/linked-table/structs");
const structs_6 = require("../../_dependencies/source/0x2/object/structs");
const structs_7 = require("../../_dependencies/source/0x2/sui/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const structs_8 = require("../hive/structs");
const structs_9 = require("../honey/structs");
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const PUBLISHED_AT = __1.yieldflow.PUBLISHED_AT;
const PKG_V1 = __1.yieldflow.PKG_V1;
/* ============================== DecimalPrecisionForCoinTypesWhitelisted =============================== */
function isDecimalPrecisionForCoinTypesWhitelisted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::DecimalPrecisionForCoinTypesWhitelisted`; }
class DecimalPrecisionForCoinTypesWhitelisted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DecimalPrecisionForCoinTypesWhitelisted.$typeName;
        this.$isPhantom = DecimalPrecisionForCoinTypesWhitelisted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DecimalPrecisionForCoinTypesWhitelisted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.coinTypes = fields.coinTypes;
        ;
        this.decimalPrecisions = fields.decimalPrecisions;
    }
    static reified() { return { typeName: DecimalPrecisionForCoinTypesWhitelisted.$typeName, fullTypeName: (0, util_1.composeSuiType)(DecimalPrecisionForCoinTypesWhitelisted.$typeName, ...[]), typeArgs: [], isPhantom: DecimalPrecisionForCoinTypesWhitelisted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DecimalPrecisionForCoinTypesWhitelisted.fromFields(fields), fromFieldsWithTypes: (item) => DecimalPrecisionForCoinTypesWhitelisted.fromFieldsWithTypes(item), fromBcs: (data) => DecimalPrecisionForCoinTypesWhitelisted.fromBcs(data), bcs: DecimalPrecisionForCoinTypesWhitelisted.bcs, fromJSONField: (field) => DecimalPrecisionForCoinTypesWhitelisted.fromJSONField(field), fromJSON: (json) => DecimalPrecisionForCoinTypesWhitelisted.fromJSON(json), fromSuiParsedData: (content) => DecimalPrecisionForCoinTypesWhitelisted.fromSuiParsedData(content), fromSuiObjectData: (content) => DecimalPrecisionForCoinTypesWhitelisted.fromSuiObjectData(content), fetch: async (client, id) => DecimalPrecisionForCoinTypesWhitelisted.fetch(client, id), new: (fields) => { return new DecimalPrecisionForCoinTypesWhitelisted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DecimalPrecisionForCoinTypesWhitelisted.reified(); }
    static phantom() { return (0, reified_1.phantom)(DecimalPrecisionForCoinTypesWhitelisted.reified()); }
    static get p() { return DecimalPrecisionForCoinTypesWhitelisted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DecimalPrecisionForCoinTypesWhitelisted", {
            coin_types: bcs_1.bcs.vector(structs_2.String.bcs), decimal_precisions: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return DecimalPrecisionForCoinTypesWhitelisted.reified().new({ coinTypes: (0, reified_1.decodeFromFields)(reified.vector(structs_2.String.reified()), fields.coin_types), decimalPrecisions: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.decimal_precisions) }); }
    static fromFieldsWithTypes(item) {
        if (!isDecimalPrecisionForCoinTypesWhitelisted(item.type)) {
            throw new Error("not a DecimalPrecisionForCoinTypesWhitelisted type");
        }
        return DecimalPrecisionForCoinTypesWhitelisted.reified().new({ coinTypes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_2.String.reified()), item.fields.coin_types), decimalPrecisions: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.decimal_precisions) });
    }
    static fromBcs(data) { return DecimalPrecisionForCoinTypesWhitelisted.fromFields(DecimalPrecisionForCoinTypesWhitelisted.bcs.parse(data)); }
    toJSONField() {
        return {
            coinTypes: (0, reified_1.fieldToJSON)(`vector<${structs_2.String.$typeName}>`, this.coinTypes), decimalPrecisions: (0, reified_1.fieldToJSON)(`vector<u8>`, this.decimalPrecisions),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DecimalPrecisionForCoinTypesWhitelisted.reified().new({ coinTypes: (0, reified_1.decodeFromJSONField)(reified.vector(structs_2.String.reified()), field.coinTypes), decimalPrecisions: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.decimalPrecisions) }); }
    static fromJSON(json) {
        if (json.$typeName !== DecimalPrecisionForCoinTypesWhitelisted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DecimalPrecisionForCoinTypesWhitelisted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDecimalPrecisionForCoinTypesWhitelisted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DecimalPrecisionForCoinTypesWhitelisted object`);
    } return DecimalPrecisionForCoinTypesWhitelisted.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDecimalPrecisionForCoinTypesWhitelisted(data.bcs.type)) {
                throw new Error(`object at is not a DecimalPrecisionForCoinTypesWhitelisted object`);
            }
            return DecimalPrecisionForCoinTypesWhitelisted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DecimalPrecisionForCoinTypesWhitelisted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DecimalPrecisionForCoinTypesWhitelisted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDecimalPrecisionForCoinTypesWhitelisted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DecimalPrecisionForCoinTypesWhitelisted object`);
        }
        return DecimalPrecisionForCoinTypesWhitelisted.fromSuiObjectData(res.data);
    }
}
exports.DecimalPrecisionForCoinTypesWhitelisted = DecimalPrecisionForCoinTypesWhitelisted;
DecimalPrecisionForCoinTypesWhitelisted.$typeName = `${PKG_V1}::yield_flow::DecimalPrecisionForCoinTypesWhitelisted`;
DecimalPrecisionForCoinTypesWhitelisted.$numTypeParams = 0;
DecimalPrecisionForCoinTypesWhitelisted.$isPhantom = [];
/* ============================== DefaultFeeInfo =============================== */
function isDefaultFeeInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::DefaultFeeInfo`; }
class DefaultFeeInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DefaultFeeInfo.$typeName;
        this.$isPhantom = DefaultFeeInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DefaultFeeInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.weightedPoolFee = fields.weightedPoolFee;
        ;
        this.stablePoolFee = fields.stablePoolFee;
        ;
        this.curvedPoolFee = fields.curvedPoolFee;
    }
    static reified() { return { typeName: DefaultFeeInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(DefaultFeeInfo.$typeName, ...[]), typeArgs: [], isPhantom: DefaultFeeInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DefaultFeeInfo.fromFields(fields), fromFieldsWithTypes: (item) => DefaultFeeInfo.fromFieldsWithTypes(item), fromBcs: (data) => DefaultFeeInfo.fromBcs(data), bcs: DefaultFeeInfo.bcs, fromJSONField: (field) => DefaultFeeInfo.fromJSONField(field), fromJSON: (json) => DefaultFeeInfo.fromJSON(json), fromSuiParsedData: (content) => DefaultFeeInfo.fromSuiParsedData(content), fromSuiObjectData: (content) => DefaultFeeInfo.fromSuiObjectData(content), fetch: async (client, id) => DefaultFeeInfo.fetch(client, id), new: (fields) => { return new DefaultFeeInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DefaultFeeInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(DefaultFeeInfo.reified()); }
    static get p() { return DefaultFeeInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DefaultFeeInfo", {
            weighted_pool_fee: FeeInfo.bcs, stable_pool_fee: FeeInfo.bcs, curved_pool_fee: FeeInfo.bcs
        });
    }
    ;
    static fromFields(fields) { return DefaultFeeInfo.reified().new({ weightedPoolFee: (0, reified_1.decodeFromFields)(FeeInfo.reified(), fields.weighted_pool_fee), stablePoolFee: (0, reified_1.decodeFromFields)(FeeInfo.reified(), fields.stable_pool_fee), curvedPoolFee: (0, reified_1.decodeFromFields)(FeeInfo.reified(), fields.curved_pool_fee) }); }
    static fromFieldsWithTypes(item) {
        if (!isDefaultFeeInfo(item.type)) {
            throw new Error("not a DefaultFeeInfo type");
        }
        return DefaultFeeInfo.reified().new({ weightedPoolFee: (0, reified_1.decodeFromFieldsWithTypes)(FeeInfo.reified(), item.fields.weighted_pool_fee), stablePoolFee: (0, reified_1.decodeFromFieldsWithTypes)(FeeInfo.reified(), item.fields.stable_pool_fee), curvedPoolFee: (0, reified_1.decodeFromFieldsWithTypes)(FeeInfo.reified(), item.fields.curved_pool_fee) });
    }
    static fromBcs(data) { return DefaultFeeInfo.fromFields(DefaultFeeInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            weightedPoolFee: this.weightedPoolFee.toJSONField(), stablePoolFee: this.stablePoolFee.toJSONField(), curvedPoolFee: this.curvedPoolFee.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DefaultFeeInfo.reified().new({ weightedPoolFee: (0, reified_1.decodeFromJSONField)(FeeInfo.reified(), field.weightedPoolFee), stablePoolFee: (0, reified_1.decodeFromJSONField)(FeeInfo.reified(), field.stablePoolFee), curvedPoolFee: (0, reified_1.decodeFromJSONField)(FeeInfo.reified(), field.curvedPoolFee) }); }
    static fromJSON(json) {
        if (json.$typeName !== DefaultFeeInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DefaultFeeInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDefaultFeeInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DefaultFeeInfo object`);
    } return DefaultFeeInfo.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDefaultFeeInfo(data.bcs.type)) {
                throw new Error(`object at is not a DefaultFeeInfo object`);
            }
            return DefaultFeeInfo.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DefaultFeeInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DefaultFeeInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDefaultFeeInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DefaultFeeInfo object`);
        }
        return DefaultFeeInfo.fromSuiObjectData(res.data);
    }
}
exports.DefaultFeeInfo = DefaultFeeInfo;
DefaultFeeInfo.$typeName = `${PKG_V1}::yield_flow::DefaultFeeInfo`;
DefaultFeeInfo.$numTypeParams = 0;
DefaultFeeInfo.$isPhantom = [];
/* ============================== DefaultFeeSet =============================== */
function isDefaultFeeSet(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::DefaultFeeSet`; }
class DefaultFeeSet {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DefaultFeeSet.$typeName;
        this.$isPhantom = DefaultFeeSet.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DefaultFeeSet.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.curve = fields.curve;
        ;
        this.totalFeeBps = fields.totalFeeBps;
        ;
        this.beesFeePct = fields.beesFeePct;
    }
    static reified() { return { typeName: DefaultFeeSet.$typeName, fullTypeName: (0, util_1.composeSuiType)(DefaultFeeSet.$typeName, ...[]), typeArgs: [], isPhantom: DefaultFeeSet.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DefaultFeeSet.fromFields(fields), fromFieldsWithTypes: (item) => DefaultFeeSet.fromFieldsWithTypes(item), fromBcs: (data) => DefaultFeeSet.fromBcs(data), bcs: DefaultFeeSet.bcs, fromJSONField: (field) => DefaultFeeSet.fromJSONField(field), fromJSON: (json) => DefaultFeeSet.fromJSON(json), fromSuiParsedData: (content) => DefaultFeeSet.fromSuiParsedData(content), fromSuiObjectData: (content) => DefaultFeeSet.fromSuiObjectData(content), fetch: async (client, id) => DefaultFeeSet.fetch(client, id), new: (fields) => { return new DefaultFeeSet([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DefaultFeeSet.reified(); }
    static phantom() { return (0, reified_1.phantom)(DefaultFeeSet.reified()); }
    static get p() { return DefaultFeeSet.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DefaultFeeSet", {
            curve: structs_3.TypeName.bcs, total_fee_bps: bcs_1.bcs.u64(), bees_fee_pct: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DefaultFeeSet.reified().new({ curve: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.curve), totalFeeBps: (0, reified_1.decodeFromFields)("u64", fields.total_fee_bps), beesFeePct: (0, reified_1.decodeFromFields)("u64", fields.bees_fee_pct) }); }
    static fromFieldsWithTypes(item) {
        if (!isDefaultFeeSet(item.type)) {
            throw new Error("not a DefaultFeeSet type");
        }
        return DefaultFeeSet.reified().new({ curve: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.curve), totalFeeBps: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_fee_bps), beesFeePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_fee_pct) });
    }
    static fromBcs(data) { return DefaultFeeSet.fromFields(DefaultFeeSet.bcs.parse(data)); }
    toJSONField() {
        return {
            curve: this.curve.toJSONField(), totalFeeBps: this.totalFeeBps.toString(), beesFeePct: this.beesFeePct.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DefaultFeeSet.reified().new({ curve: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.curve), totalFeeBps: (0, reified_1.decodeFromJSONField)("u64", field.totalFeeBps), beesFeePct: (0, reified_1.decodeFromJSONField)("u64", field.beesFeePct) }); }
    static fromJSON(json) {
        if (json.$typeName !== DefaultFeeSet.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DefaultFeeSet.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDefaultFeeSet(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DefaultFeeSet object`);
    } return DefaultFeeSet.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDefaultFeeSet(data.bcs.type)) {
                throw new Error(`object at is not a DefaultFeeSet object`);
            }
            return DefaultFeeSet.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DefaultFeeSet.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DefaultFeeSet object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDefaultFeeSet(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DefaultFeeSet object`);
        }
        return DefaultFeeSet.fromSuiObjectData(res.data);
    }
}
exports.DefaultFeeSet = DefaultFeeSet;
DefaultFeeSet.$typeName = `${PKG_V1}::yield_flow::DefaultFeeSet`;
DefaultFeeSet.$numTypeParams = 0;
DefaultFeeSet.$isPhantom = [];
/* ============================== DeployerCap =============================== */
function isDeployerCap(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::DeployerCap`; }
class DeployerCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DeployerCap.$typeName;
        this.$isPhantom = DeployerCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DeployerCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.managerInitialized = fields.managerInitialized;
        ;
        this.vaultInitialized = fields.vaultInitialized;
        ;
        this.hiddenWorldInitialized = fields.hiddenWorldInitialized;
    }
    static reified() { return { typeName: DeployerCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(DeployerCap.$typeName, ...[]), typeArgs: [], isPhantom: DeployerCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DeployerCap.fromFields(fields), fromFieldsWithTypes: (item) => DeployerCap.fromFieldsWithTypes(item), fromBcs: (data) => DeployerCap.fromBcs(data), bcs: DeployerCap.bcs, fromJSONField: (field) => DeployerCap.fromJSONField(field), fromJSON: (json) => DeployerCap.fromJSON(json), fromSuiParsedData: (content) => DeployerCap.fromSuiParsedData(content), fromSuiObjectData: (content) => DeployerCap.fromSuiObjectData(content), fetch: async (client, id) => DeployerCap.fetch(client, id), new: (fields) => { return new DeployerCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DeployerCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(DeployerCap.reified()); }
    static get p() { return DeployerCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DeployerCap", {
            id: structs_6.UID.bcs, manager_initialized: bcs_1.bcs.bool(), vault_initialized: bcs_1.bcs.bool(), hidden_world_initialized: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return DeployerCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), managerInitialized: (0, reified_1.decodeFromFields)("bool", fields.manager_initialized), vaultInitialized: (0, reified_1.decodeFromFields)("bool", fields.vault_initialized), hiddenWorldInitialized: (0, reified_1.decodeFromFields)("bool", fields.hidden_world_initialized) }); }
    static fromFieldsWithTypes(item) {
        if (!isDeployerCap(item.type)) {
            throw new Error("not a DeployerCap type");
        }
        return DeployerCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), managerInitialized: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.manager_initialized), vaultInitialized: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.vault_initialized), hiddenWorldInitialized: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.hidden_world_initialized) });
    }
    static fromBcs(data) { return DeployerCap.fromFields(DeployerCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, managerInitialized: this.managerInitialized, vaultInitialized: this.vaultInitialized, hiddenWorldInitialized: this.hiddenWorldInitialized,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DeployerCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), managerInitialized: (0, reified_1.decodeFromJSONField)("bool", field.managerInitialized), vaultInitialized: (0, reified_1.decodeFromJSONField)("bool", field.vaultInitialized), hiddenWorldInitialized: (0, reified_1.decodeFromJSONField)("bool", field.hiddenWorldInitialized) }); }
    static fromJSON(json) {
        if (json.$typeName !== DeployerCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DeployerCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDeployerCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DeployerCap object`);
    } return DeployerCap.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDeployerCap(data.bcs.type)) {
                throw new Error(`object at is not a DeployerCap object`);
            }
            return DeployerCap.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DeployerCap.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DeployerCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDeployerCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DeployerCap object`);
        }
        return DeployerCap.fromSuiObjectData(res.data);
    }
}
exports.DeployerCap = DeployerCap;
DeployerCap.$typeName = `${PKG_V1}::yield_flow::DeployerCap`;
DeployerCap.$numTypeParams = 0;
DeployerCap.$isPhantom = [];
/* ============================== DragonDaoCapability =============================== */
function isDragonDaoCapability(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::DragonDaoCapability`; }
class DragonDaoCapability {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonDaoCapability.$typeName;
        this.$isPhantom = DragonDaoCapability.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonDaoCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: DragonDaoCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonDaoCapability.$typeName, ...[]), typeArgs: [], isPhantom: DragonDaoCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonDaoCapability.fromFields(fields), fromFieldsWithTypes: (item) => DragonDaoCapability.fromFieldsWithTypes(item), fromBcs: (data) => DragonDaoCapability.fromBcs(data), bcs: DragonDaoCapability.bcs, fromJSONField: (field) => DragonDaoCapability.fromJSONField(field), fromJSON: (json) => DragonDaoCapability.fromJSON(json), fromSuiParsedData: (content) => DragonDaoCapability.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonDaoCapability.fromSuiObjectData(content), fetch: async (client, id) => DragonDaoCapability.fetch(client, id), new: (fields) => { return new DragonDaoCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonDaoCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonDaoCapability.reified()); }
    static get p() { return DragonDaoCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonDaoCapability", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return DragonDaoCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonDaoCapability(item.type)) {
            throw new Error("not a DragonDaoCapability type");
        }
        return DragonDaoCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return DragonDaoCapability.fromFields(DragonDaoCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonDaoCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonDaoCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonDaoCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonDaoCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonDaoCapability object`);
    } return DragonDaoCapability.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonDaoCapability(data.bcs.type)) {
                throw new Error(`object at is not a DragonDaoCapability object`);
            }
            return DragonDaoCapability.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonDaoCapability.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonDaoCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonDaoCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonDaoCapability object`);
        }
        return DragonDaoCapability.fromSuiObjectData(res.data);
    }
}
exports.DragonDaoCapability = DragonDaoCapability;
DragonDaoCapability.$typeName = `${PKG_V1}::yield_flow::DragonDaoCapability`;
DragonDaoCapability.$numTypeParams = 0;
DragonDaoCapability.$isPhantom = [];
/* ============================== DragonFoodCapability =============================== */
function isDragonFoodCapability(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::DragonFoodCapability`; }
class DragonFoodCapability {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonFoodCapability.$typeName;
        this.$isPhantom = DragonFoodCapability.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonFoodCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: DragonFoodCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonFoodCapability.$typeName, ...[]), typeArgs: [], isPhantom: DragonFoodCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonFoodCapability.fromFields(fields), fromFieldsWithTypes: (item) => DragonFoodCapability.fromFieldsWithTypes(item), fromBcs: (data) => DragonFoodCapability.fromBcs(data), bcs: DragonFoodCapability.bcs, fromJSONField: (field) => DragonFoodCapability.fromJSONField(field), fromJSON: (json) => DragonFoodCapability.fromJSON(json), fromSuiParsedData: (content) => DragonFoodCapability.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonFoodCapability.fromSuiObjectData(content), fetch: async (client, id) => DragonFoodCapability.fetch(client, id), new: (fields) => { return new DragonFoodCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonFoodCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonFoodCapability.reified()); }
    static get p() { return DragonFoodCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonFoodCapability", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return DragonFoodCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonFoodCapability(item.type)) {
            throw new Error("not a DragonFoodCapability type");
        }
        return DragonFoodCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return DragonFoodCapability.fromFields(DragonFoodCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonFoodCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonFoodCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonFoodCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonFoodCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonFoodCapability object`);
    } return DragonFoodCapability.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonFoodCapability(data.bcs.type)) {
                throw new Error(`object at is not a DragonFoodCapability object`);
            }
            return DragonFoodCapability.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonFoodCapability.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonFoodCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonFoodCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonFoodCapability object`);
        }
        return DragonFoodCapability.fromSuiObjectData(res.data);
    }
}
exports.DragonFoodCapability = DragonFoodCapability;
DragonFoodCapability.$typeName = `${PKG_V1}::yield_flow::DragonFoodCapability`;
DragonFoodCapability.$numTypeParams = 0;
DragonFoodCapability.$isPhantom = [];
/* ============================== FeeCollectedForCoin =============================== */
function isFeeCollectedForCoin(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::FeeCollectedForCoin`; }
class FeeCollectedForCoin {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FeeCollectedForCoin.$typeName;
        this.$isPhantom = FeeCollectedForCoin.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeeCollectedForCoin.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    static reified() { return { typeName: FeeCollectedForCoin.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeeCollectedForCoin.$typeName, ...[]), typeArgs: [], isPhantom: FeeCollectedForCoin.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FeeCollectedForCoin.fromFields(fields), fromFieldsWithTypes: (item) => FeeCollectedForCoin.fromFieldsWithTypes(item), fromBcs: (data) => FeeCollectedForCoin.fromBcs(data), bcs: FeeCollectedForCoin.bcs, fromJSONField: (field) => FeeCollectedForCoin.fromJSONField(field), fromJSON: (json) => FeeCollectedForCoin.fromJSON(json), fromSuiParsedData: (content) => FeeCollectedForCoin.fromSuiParsedData(content), fromSuiObjectData: (content) => FeeCollectedForCoin.fromSuiObjectData(content), fetch: async (client, id) => FeeCollectedForCoin.fetch(client, id), new: (fields) => { return new FeeCollectedForCoin([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FeeCollectedForCoin.reified(); }
    static phantom() { return (0, reified_1.phantom)(FeeCollectedForCoin.reified()); }
    static get p() { return FeeCollectedForCoin.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FeeCollectedForCoin", {
            token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FeeCollectedForCoin.reified().new({ token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); }
    static fromFieldsWithTypes(item) {
        if (!isFeeCollectedForCoin(item.type)) {
            throw new Error("not a FeeCollectedForCoin type");
        }
        return FeeCollectedForCoin.reified().new({ token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    }
    static fromBcs(data) { return FeeCollectedForCoin.fromFields(FeeCollectedForCoin.bcs.parse(data)); }
    toJSONField() {
        return {
            token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FeeCollectedForCoin.reified().new({ token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); }
    static fromJSON(json) {
        if (json.$typeName !== FeeCollectedForCoin.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FeeCollectedForCoin.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFeeCollectedForCoin(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FeeCollectedForCoin object`);
    } return FeeCollectedForCoin.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeCollectedForCoin(data.bcs.type)) {
                throw new Error(`object at is not a FeeCollectedForCoin object`);
            }
            return FeeCollectedForCoin.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FeeCollectedForCoin.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeeCollectedForCoin object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeeCollectedForCoin(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeCollectedForCoin object`);
        }
        return FeeCollectedForCoin.fromSuiObjectData(res.data);
    }
}
exports.FeeCollectedForCoin = FeeCollectedForCoin;
FeeCollectedForCoin.$typeName = `${PKG_V1}::yield_flow::FeeCollectedForCoin`;
FeeCollectedForCoin.$numTypeParams = 0;
FeeCollectedForCoin.$isPhantom = [];
/* ============================== FeeCollector =============================== */
function isFeeCollector(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::yield_flow::FeeCollector` + '<'); }
class FeeCollector {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FeeCollector.$typeName;
        this.$isPhantom = FeeCollector.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeeCollector.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
    }
    static reified(X) { return { typeName: FeeCollector.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeeCollector.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: FeeCollector.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => FeeCollector.fromFields(X, fields), fromFieldsWithTypes: (item) => FeeCollector.fromFieldsWithTypes(X, item), fromBcs: (data) => FeeCollector.fromBcs(X, data), bcs: FeeCollector.bcs, fromJSONField: (field) => FeeCollector.fromJSONField(X, field), fromJSON: (json) => FeeCollector.fromJSON(X, json), fromSuiParsedData: (content) => FeeCollector.fromSuiParsedData(X, content), fromSuiObjectData: (content) => FeeCollector.fromSuiObjectData(X, content), fetch: async (client, id) => FeeCollector.fetch(client, X, id), new: (fields) => { return new FeeCollector([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return FeeCollector.reified; }
    static phantom(X) { return (0, reified_1.phantom)(FeeCollector.reified(X)); }
    static get p() { return FeeCollector.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("FeeCollector", {
            id: structs_6.UID.bcs, balance: structs_4.Balance.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return FeeCollector.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), balance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.balance) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isFeeCollector(item.type)) {
            throw new Error("not a FeeCollector type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return FeeCollector.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.balance) });
    }
    static fromBcs(typeArg, data) { return FeeCollector.fromFields(typeArg, FeeCollector.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, balance: this.balance.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return FeeCollector.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), balance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.balance) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== FeeCollector.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(FeeCollector.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return FeeCollector.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFeeCollector(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FeeCollector object`);
    } return FeeCollector.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeCollector(data.bcs.type)) {
                throw new Error(`object at is not a FeeCollector object`);
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
            return FeeCollector.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FeeCollector.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeeCollector object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeeCollector(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeCollector object`);
        }
        return FeeCollector.fromSuiObjectData(typeArg, res.data);
    }
}
exports.FeeCollector = FeeCollector;
FeeCollector.$typeName = `${PKG_V1}::yield_flow::FeeCollector`;
FeeCollector.$numTypeParams = 1;
FeeCollector.$isPhantom = [true,];
/* ============================== FeeDistributionPctUpdated =============================== */
function isFeeDistributionPctUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::FeeDistributionPctUpdated`; }
class FeeDistributionPctUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FeeDistributionPctUpdated.$typeName;
        this.$isPhantom = FeeDistributionPctUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeeDistributionPctUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.treasuryFeePercent = fields.treasuryFeePercent;
        ;
        this.honeyBuybackPct = fields.honeyBuybackPct;
        ;
        this.voterIncentivesPct = fields.voterIncentivesPct;
    }
    static reified() { return { typeName: FeeDistributionPctUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeeDistributionPctUpdated.$typeName, ...[]), typeArgs: [], isPhantom: FeeDistributionPctUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FeeDistributionPctUpdated.fromFields(fields), fromFieldsWithTypes: (item) => FeeDistributionPctUpdated.fromFieldsWithTypes(item), fromBcs: (data) => FeeDistributionPctUpdated.fromBcs(data), bcs: FeeDistributionPctUpdated.bcs, fromJSONField: (field) => FeeDistributionPctUpdated.fromJSONField(field), fromJSON: (json) => FeeDistributionPctUpdated.fromJSON(json), fromSuiParsedData: (content) => FeeDistributionPctUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => FeeDistributionPctUpdated.fromSuiObjectData(content), fetch: async (client, id) => FeeDistributionPctUpdated.fetch(client, id), new: (fields) => { return new FeeDistributionPctUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FeeDistributionPctUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(FeeDistributionPctUpdated.reified()); }
    static get p() { return FeeDistributionPctUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FeeDistributionPctUpdated", {
            treasury_fee_percent: bcs_1.bcs.u64(), honey_buyback_pct: bcs_1.bcs.u64(), voter_incentives_pct: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FeeDistributionPctUpdated.reified().new({ treasuryFeePercent: (0, reified_1.decodeFromFields)("u64", fields.treasury_fee_percent), honeyBuybackPct: (0, reified_1.decodeFromFields)("u64", fields.honey_buyback_pct), voterIncentivesPct: (0, reified_1.decodeFromFields)("u64", fields.voter_incentives_pct) }); }
    static fromFieldsWithTypes(item) {
        if (!isFeeDistributionPctUpdated(item.type)) {
            throw new Error("not a FeeDistributionPctUpdated type");
        }
        return FeeDistributionPctUpdated.reified().new({ treasuryFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_fee_percent), honeyBuybackPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_buyback_pct), voterIncentivesPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voter_incentives_pct) });
    }
    static fromBcs(data) { return FeeDistributionPctUpdated.fromFields(FeeDistributionPctUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            treasuryFeePercent: this.treasuryFeePercent.toString(), honeyBuybackPct: this.honeyBuybackPct.toString(), voterIncentivesPct: this.voterIncentivesPct.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FeeDistributionPctUpdated.reified().new({ treasuryFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.treasuryFeePercent), honeyBuybackPct: (0, reified_1.decodeFromJSONField)("u64", field.honeyBuybackPct), voterIncentivesPct: (0, reified_1.decodeFromJSONField)("u64", field.voterIncentivesPct) }); }
    static fromJSON(json) {
        if (json.$typeName !== FeeDistributionPctUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FeeDistributionPctUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFeeDistributionPctUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FeeDistributionPctUpdated object`);
    } return FeeDistributionPctUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeDistributionPctUpdated(data.bcs.type)) {
                throw new Error(`object at is not a FeeDistributionPctUpdated object`);
            }
            return FeeDistributionPctUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FeeDistributionPctUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeeDistributionPctUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeeDistributionPctUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeDistributionPctUpdated object`);
        }
        return FeeDistributionPctUpdated.fromSuiObjectData(res.data);
    }
}
exports.FeeDistributionPctUpdated = FeeDistributionPctUpdated;
FeeDistributionPctUpdated.$typeName = `${PKG_V1}::yield_flow::FeeDistributionPctUpdated`;
FeeDistributionPctUpdated.$numTypeParams = 0;
FeeDistributionPctUpdated.$isPhantom = [];
/* ============================== FeeExtractedForCoin =============================== */
function isFeeExtractedForCoin(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::FeeExtractedForCoin`; }
class FeeExtractedForCoin {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FeeExtractedForCoin.$typeName;
        this.$isPhantom = FeeExtractedForCoin.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeeExtractedForCoin.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    static reified() { return { typeName: FeeExtractedForCoin.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeeExtractedForCoin.$typeName, ...[]), typeArgs: [], isPhantom: FeeExtractedForCoin.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FeeExtractedForCoin.fromFields(fields), fromFieldsWithTypes: (item) => FeeExtractedForCoin.fromFieldsWithTypes(item), fromBcs: (data) => FeeExtractedForCoin.fromBcs(data), bcs: FeeExtractedForCoin.bcs, fromJSONField: (field) => FeeExtractedForCoin.fromJSONField(field), fromJSON: (json) => FeeExtractedForCoin.fromJSON(json), fromSuiParsedData: (content) => FeeExtractedForCoin.fromSuiParsedData(content), fromSuiObjectData: (content) => FeeExtractedForCoin.fromSuiObjectData(content), fetch: async (client, id) => FeeExtractedForCoin.fetch(client, id), new: (fields) => { return new FeeExtractedForCoin([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FeeExtractedForCoin.reified(); }
    static phantom() { return (0, reified_1.phantom)(FeeExtractedForCoin.reified()); }
    static get p() { return FeeExtractedForCoin.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FeeExtractedForCoin", {
            token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FeeExtractedForCoin.reified().new({ token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); }
    static fromFieldsWithTypes(item) {
        if (!isFeeExtractedForCoin(item.type)) {
            throw new Error("not a FeeExtractedForCoin type");
        }
        return FeeExtractedForCoin.reified().new({ token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    }
    static fromBcs(data) { return FeeExtractedForCoin.fromFields(FeeExtractedForCoin.bcs.parse(data)); }
    toJSONField() {
        return {
            token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FeeExtractedForCoin.reified().new({ token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); }
    static fromJSON(json) {
        if (json.$typeName !== FeeExtractedForCoin.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FeeExtractedForCoin.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFeeExtractedForCoin(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FeeExtractedForCoin object`);
    } return FeeExtractedForCoin.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeExtractedForCoin(data.bcs.type)) {
                throw new Error(`object at is not a FeeExtractedForCoin object`);
            }
            return FeeExtractedForCoin.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FeeExtractedForCoin.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeeExtractedForCoin object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeeExtractedForCoin(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeExtractedForCoin object`);
        }
        return FeeExtractedForCoin.fromSuiObjectData(res.data);
    }
}
exports.FeeExtractedForCoin = FeeExtractedForCoin;
FeeExtractedForCoin.$typeName = `${PKG_V1}::yield_flow::FeeExtractedForCoin`;
FeeExtractedForCoin.$numTypeParams = 0;
FeeExtractedForCoin.$isPhantom = [];
/* ============================== FeeInfo =============================== */
function isFeeInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::FeeInfo`; }
class FeeInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FeeInfo.$typeName;
        this.$isPhantom = FeeInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeeInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.totalFeeBps = fields.totalFeeBps;
        ;
        this.beesFeePct = fields.beesFeePct;
    }
    static reified() { return { typeName: FeeInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeeInfo.$typeName, ...[]), typeArgs: [], isPhantom: FeeInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FeeInfo.fromFields(fields), fromFieldsWithTypes: (item) => FeeInfo.fromFieldsWithTypes(item), fromBcs: (data) => FeeInfo.fromBcs(data), bcs: FeeInfo.bcs, fromJSONField: (field) => FeeInfo.fromJSONField(field), fromJSON: (json) => FeeInfo.fromJSON(json), fromSuiParsedData: (content) => FeeInfo.fromSuiParsedData(content), fromSuiObjectData: (content) => FeeInfo.fromSuiObjectData(content), fetch: async (client, id) => FeeInfo.fetch(client, id), new: (fields) => { return new FeeInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FeeInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(FeeInfo.reified()); }
    static get p() { return FeeInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FeeInfo", {
            total_fee_bps: bcs_1.bcs.u64(), bees_fee_pct: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FeeInfo.reified().new({ totalFeeBps: (0, reified_1.decodeFromFields)("u64", fields.total_fee_bps), beesFeePct: (0, reified_1.decodeFromFields)("u64", fields.bees_fee_pct) }); }
    static fromFieldsWithTypes(item) {
        if (!isFeeInfo(item.type)) {
            throw new Error("not a FeeInfo type");
        }
        return FeeInfo.reified().new({ totalFeeBps: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_fee_bps), beesFeePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_fee_pct) });
    }
    static fromBcs(data) { return FeeInfo.fromFields(FeeInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            totalFeeBps: this.totalFeeBps.toString(), beesFeePct: this.beesFeePct.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FeeInfo.reified().new({ totalFeeBps: (0, reified_1.decodeFromJSONField)("u64", field.totalFeeBps), beesFeePct: (0, reified_1.decodeFromJSONField)("u64", field.beesFeePct) }); }
    static fromJSON(json) {
        if (json.$typeName !== FeeInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FeeInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFeeInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FeeInfo object`);
    } return FeeInfo.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeInfo(data.bcs.type)) {
                throw new Error(`object at is not a FeeInfo object`);
            }
            return FeeInfo.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FeeInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeeInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeeInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeInfo object`);
        }
        return FeeInfo.fromSuiObjectData(res.data);
    }
}
exports.FeeInfo = FeeInfo;
FeeInfo.$typeName = `${PKG_V1}::yield_flow::FeeInfo`;
FeeInfo.$numTypeParams = 0;
FeeInfo.$isPhantom = [];
/* ============================== HiddenWorldCapability =============================== */
function isHiddenWorldCapability(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::HiddenWorldCapability`; }
class HiddenWorldCapability {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiddenWorldCapability.$typeName;
        this.$isPhantom = HiddenWorldCapability.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiddenWorldCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: HiddenWorldCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiddenWorldCapability.$typeName, ...[]), typeArgs: [], isPhantom: HiddenWorldCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiddenWorldCapability.fromFields(fields), fromFieldsWithTypes: (item) => HiddenWorldCapability.fromFieldsWithTypes(item), fromBcs: (data) => HiddenWorldCapability.fromBcs(data), bcs: HiddenWorldCapability.bcs, fromJSONField: (field) => HiddenWorldCapability.fromJSONField(field), fromJSON: (json) => HiddenWorldCapability.fromJSON(json), fromSuiParsedData: (content) => HiddenWorldCapability.fromSuiParsedData(content), fromSuiObjectData: (content) => HiddenWorldCapability.fromSuiObjectData(content), fetch: async (client, id) => HiddenWorldCapability.fetch(client, id), new: (fields) => { return new HiddenWorldCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiddenWorldCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiddenWorldCapability.reified()); }
    static get p() { return HiddenWorldCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiddenWorldCapability", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return HiddenWorldCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiddenWorldCapability(item.type)) {
            throw new Error("not a HiddenWorldCapability type");
        }
        return HiddenWorldCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return HiddenWorldCapability.fromFields(HiddenWorldCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiddenWorldCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiddenWorldCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiddenWorldCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiddenWorldCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiddenWorldCapability object`);
    } return HiddenWorldCapability.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiddenWorldCapability(data.bcs.type)) {
                throw new Error(`object at is not a HiddenWorldCapability object`);
            }
            return HiddenWorldCapability.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiddenWorldCapability.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiddenWorldCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiddenWorldCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiddenWorldCapability object`);
        }
        return HiddenWorldCapability.fromSuiObjectData(res.data);
    }
}
exports.HiddenWorldCapability = HiddenWorldCapability;
HiddenWorldCapability.$typeName = `${PKG_V1}::yield_flow::HiddenWorldCapability`;
HiddenWorldCapability.$numTypeParams = 0;
HiddenWorldCapability.$isPhantom = [];
/* ============================== MasterAccessKey =============================== */
function isMasterAccessKey(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::MasterAccessKey`; }
class MasterAccessKey {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MasterAccessKey.$typeName;
        this.$isPhantom = MasterAccessKey.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MasterAccessKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: MasterAccessKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(MasterAccessKey.$typeName, ...[]), typeArgs: [], isPhantom: MasterAccessKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MasterAccessKey.fromFields(fields), fromFieldsWithTypes: (item) => MasterAccessKey.fromFieldsWithTypes(item), fromBcs: (data) => MasterAccessKey.fromBcs(data), bcs: MasterAccessKey.bcs, fromJSONField: (field) => MasterAccessKey.fromJSONField(field), fromJSON: (json) => MasterAccessKey.fromJSON(json), fromSuiParsedData: (content) => MasterAccessKey.fromSuiParsedData(content), fromSuiObjectData: (content) => MasterAccessKey.fromSuiObjectData(content), fetch: async (client, id) => MasterAccessKey.fetch(client, id), new: (fields) => { return new MasterAccessKey([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MasterAccessKey.reified(); }
    static phantom() { return (0, reified_1.phantom)(MasterAccessKey.reified()); }
    static get p() { return MasterAccessKey.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MasterAccessKey", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return MasterAccessKey.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isMasterAccessKey(item.type)) {
            throw new Error("not a MasterAccessKey type");
        }
        return MasterAccessKey.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return MasterAccessKey.fromFields(MasterAccessKey.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MasterAccessKey.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== MasterAccessKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MasterAccessKey.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMasterAccessKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MasterAccessKey object`);
    } return MasterAccessKey.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMasterAccessKey(data.bcs.type)) {
                throw new Error(`object at is not a MasterAccessKey object`);
            }
            return MasterAccessKey.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MasterAccessKey.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MasterAccessKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMasterAccessKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MasterAccessKey object`);
        }
        return MasterAccessKey.fromSuiObjectData(res.data);
    }
}
exports.MasterAccessKey = MasterAccessKey;
MasterAccessKey.$typeName = `${PKG_V1}::yield_flow::MasterAccessKey`;
MasterAccessKey.$numTypeParams = 0;
MasterAccessKey.$isPhantom = [];
/* ============================== NewFeeCollectorKrafted =============================== */
function isNewFeeCollectorKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::NewFeeCollectorKrafted`; }
class NewFeeCollectorKrafted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewFeeCollectorKrafted.$typeName;
        this.$isPhantom = NewFeeCollectorKrafted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewFeeCollectorKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.coinType = fields.coinType;
        ;
        this.feeCollectorAddr = fields.feeCollectorAddr;
    }
    static reified() { return { typeName: NewFeeCollectorKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewFeeCollectorKrafted.$typeName, ...[]), typeArgs: [], isPhantom: NewFeeCollectorKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewFeeCollectorKrafted.fromFields(fields), fromFieldsWithTypes: (item) => NewFeeCollectorKrafted.fromFieldsWithTypes(item), fromBcs: (data) => NewFeeCollectorKrafted.fromBcs(data), bcs: NewFeeCollectorKrafted.bcs, fromJSONField: (field) => NewFeeCollectorKrafted.fromJSONField(field), fromJSON: (json) => NewFeeCollectorKrafted.fromJSON(json), fromSuiParsedData: (content) => NewFeeCollectorKrafted.fromSuiParsedData(content), fromSuiObjectData: (content) => NewFeeCollectorKrafted.fromSuiObjectData(content), fetch: async (client, id) => NewFeeCollectorKrafted.fetch(client, id), new: (fields) => { return new NewFeeCollectorKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewFeeCollectorKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewFeeCollectorKrafted.reified()); }
    static get p() { return NewFeeCollectorKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewFeeCollectorKrafted", {
            coin_type: structs_1.String.bcs, fee_collector_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return NewFeeCollectorKrafted.reified().new({ coinType: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.coin_type), feeCollectorAddr: (0, reified_1.decodeFromFields)("address", fields.fee_collector_addr) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewFeeCollectorKrafted(item.type)) {
            throw new Error("not a NewFeeCollectorKrafted type");
        }
        return NewFeeCollectorKrafted.reified().new({ coinType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.coin_type), feeCollectorAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.fee_collector_addr) });
    }
    static fromBcs(data) { return NewFeeCollectorKrafted.fromFields(NewFeeCollectorKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            coinType: this.coinType, feeCollectorAddr: this.feeCollectorAddr,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewFeeCollectorKrafted.reified().new({ coinType: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.coinType), feeCollectorAddr: (0, reified_1.decodeFromJSONField)("address", field.feeCollectorAddr) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewFeeCollectorKrafted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewFeeCollectorKrafted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewFeeCollectorKrafted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewFeeCollectorKrafted object`);
    } return NewFeeCollectorKrafted.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewFeeCollectorKrafted(data.bcs.type)) {
                throw new Error(`object at is not a NewFeeCollectorKrafted object`);
            }
            return NewFeeCollectorKrafted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewFeeCollectorKrafted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewFeeCollectorKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewFeeCollectorKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewFeeCollectorKrafted object`);
        }
        return NewFeeCollectorKrafted.fromSuiObjectData(res.data);
    }
}
exports.NewFeeCollectorKrafted = NewFeeCollectorKrafted;
NewFeeCollectorKrafted.$typeName = `${PKG_V1}::yield_flow::NewFeeCollectorKrafted`;
NewFeeCollectorKrafted.$numTypeParams = 0;
NewFeeCollectorKrafted.$isPhantom = [];
/* ============================== PoolFlow =============================== */
function isPoolFlow(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::PoolFlow`; }
class PoolFlow {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PoolFlow.$typeName;
        this.$isPhantom = PoolFlow.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolFlow.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.hiveBalance = fields.hiveBalance;
        ;
        this.honeyBalance = fields.honeyBalance;
        ;
        this.lastClaimedEpoch = fields.lastClaimedEpoch;
    }
    static reified() { return { typeName: PoolFlow.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolFlow.$typeName, ...[]), typeArgs: [], isPhantom: PoolFlow.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PoolFlow.fromFields(fields), fromFieldsWithTypes: (item) => PoolFlow.fromFieldsWithTypes(item), fromBcs: (data) => PoolFlow.fromBcs(data), bcs: PoolFlow.bcs, fromJSONField: (field) => PoolFlow.fromJSONField(field), fromJSON: (json) => PoolFlow.fromJSON(json), fromSuiParsedData: (content) => PoolFlow.fromSuiParsedData(content), fromSuiObjectData: (content) => PoolFlow.fromSuiObjectData(content), fetch: async (client, id) => PoolFlow.fetch(client, id), new: (fields) => { return new PoolFlow([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolFlow.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolFlow.reified()); }
    static get p() { return PoolFlow.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolFlow", {
            hive_balance: structs_4.Balance.bcs, honey_balance: structs_4.Balance.bcs, last_claimed_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PoolFlow.reified().new({ hiveBalance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_8.HIVE.reified())), fields.hive_balance), honeyBalance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.HONEY.reified())), fields.honey_balance), lastClaimedEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_claimed_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolFlow(item.type)) {
            throw new Error("not a PoolFlow type");
        }
        return PoolFlow.reified().new({ hiveBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_8.HIVE.reified())), item.fields.hive_balance), honeyBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.HONEY.reified())), item.fields.honey_balance), lastClaimedEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_claimed_epoch) });
    }
    static fromBcs(data) { return PoolFlow.fromFields(PoolFlow.bcs.parse(data)); }
    toJSONField() {
        return {
            hiveBalance: this.hiveBalance.toJSONField(), honeyBalance: this.honeyBalance.toJSONField(), lastClaimedEpoch: this.lastClaimedEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolFlow.reified().new({ hiveBalance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_8.HIVE.reified())), field.hiveBalance), honeyBalance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.HONEY.reified())), field.honeyBalance), lastClaimedEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastClaimedEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolFlow.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolFlow.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolFlow(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolFlow object`);
    } return PoolFlow.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolFlow(data.bcs.type)) {
                throw new Error(`object at is not a PoolFlow object`);
            }
            return PoolFlow.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PoolFlow.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolFlow object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolFlow(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolFlow object`);
        }
        return PoolFlow.fromSuiObjectData(res.data);
    }
}
exports.PoolFlow = PoolFlow;
PoolFlow.$typeName = `${PKG_V1}::yield_flow::PoolFlow`;
PoolFlow.$numTypeParams = 0;
PoolFlow.$isPhantom = [];
/* ============================== PoolsConfig =============================== */
function isPoolsConfig(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::PoolsConfig`; }
class PoolsConfig {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PoolsConfig.$typeName;
        this.$isPhantom = PoolsConfig.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolsConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.decimalPrecisions = fields.decimalPrecisions;
        ;
        this.stableIdentifiers = fields.stableIdentifiers;
    }
    static reified() { return { typeName: PoolsConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolsConfig.$typeName, ...[]), typeArgs: [], isPhantom: PoolsConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PoolsConfig.fromFields(fields), fromFieldsWithTypes: (item) => PoolsConfig.fromFieldsWithTypes(item), fromBcs: (data) => PoolsConfig.fromBcs(data), bcs: PoolsConfig.bcs, fromJSONField: (field) => PoolsConfig.fromJSONField(field), fromJSON: (json) => PoolsConfig.fromJSON(json), fromSuiParsedData: (content) => PoolsConfig.fromSuiParsedData(content), fromSuiObjectData: (content) => PoolsConfig.fromSuiObjectData(content), fetch: async (client, id) => PoolsConfig.fetch(client, id), new: (fields) => { return new PoolsConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolsConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolsConfig.reified()); }
    static get p() { return PoolsConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolsConfig", {
            decimal_precisions: structs_5.LinkedTable.bcs(structs_2.String.bcs), stable_identifiers: structs_5.LinkedTable.bcs(structs_1.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return PoolsConfig.reified().new({ decimalPrecisions: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_2.String.reified(), reified.phantom("u8")), fields.decimal_precisions), stableIdentifiers: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("bool")), fields.stable_identifiers) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolsConfig(item.type)) {
            throw new Error("not a PoolsConfig type");
        }
        return PoolsConfig.reified().new({ decimalPrecisions: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_2.String.reified(), reified.phantom("u8")), item.fields.decimal_precisions), stableIdentifiers: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("bool")), item.fields.stable_identifiers) });
    }
    static fromBcs(data) { return PoolsConfig.fromFields(PoolsConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            decimalPrecisions: this.decimalPrecisions.toJSONField(), stableIdentifiers: this.stableIdentifiers.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolsConfig.reified().new({ decimalPrecisions: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_2.String.reified(), reified.phantom("u8")), field.decimalPrecisions), stableIdentifiers: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("bool")), field.stableIdentifiers) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolsConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolsConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolsConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolsConfig object`);
    } return PoolsConfig.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolsConfig(data.bcs.type)) {
                throw new Error(`object at is not a PoolsConfig object`);
            }
            return PoolsConfig.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PoolsConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolsConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolsConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolsConfig object`);
        }
        return PoolsConfig.fromSuiObjectData(res.data);
    }
}
exports.PoolsConfig = PoolsConfig;
PoolsConfig.$typeName = `${PKG_V1}::yield_flow::PoolsConfig`;
PoolsConfig.$numTypeParams = 0;
PoolsConfig.$isPhantom = [];
/* ============================== StableIdentifierAdded =============================== */
function isStableIdentifierAdded(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::StableIdentifierAdded`; }
class StableIdentifierAdded {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StableIdentifierAdded.$typeName;
        this.$isPhantom = StableIdentifierAdded.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StableIdentifierAdded.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.identifier = fields.identifier;
    }
    static reified() { return { typeName: StableIdentifierAdded.$typeName, fullTypeName: (0, util_1.composeSuiType)(StableIdentifierAdded.$typeName, ...[]), typeArgs: [], isPhantom: StableIdentifierAdded.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StableIdentifierAdded.fromFields(fields), fromFieldsWithTypes: (item) => StableIdentifierAdded.fromFieldsWithTypes(item), fromBcs: (data) => StableIdentifierAdded.fromBcs(data), bcs: StableIdentifierAdded.bcs, fromJSONField: (field) => StableIdentifierAdded.fromJSONField(field), fromJSON: (json) => StableIdentifierAdded.fromJSON(json), fromSuiParsedData: (content) => StableIdentifierAdded.fromSuiParsedData(content), fromSuiObjectData: (content) => StableIdentifierAdded.fromSuiObjectData(content), fetch: async (client, id) => StableIdentifierAdded.fetch(client, id), new: (fields) => { return new StableIdentifierAdded([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StableIdentifierAdded.reified(); }
    static phantom() { return (0, reified_1.phantom)(StableIdentifierAdded.reified()); }
    static get p() { return StableIdentifierAdded.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StableIdentifierAdded", {
            identifier: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return StableIdentifierAdded.reified().new({ identifier: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.identifier) }); }
    static fromFieldsWithTypes(item) {
        if (!isStableIdentifierAdded(item.type)) {
            throw new Error("not a StableIdentifierAdded type");
        }
        return StableIdentifierAdded.reified().new({ identifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.identifier) });
    }
    static fromBcs(data) { return StableIdentifierAdded.fromFields(StableIdentifierAdded.bcs.parse(data)); }
    toJSONField() {
        return {
            identifier: this.identifier,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StableIdentifierAdded.reified().new({ identifier: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.identifier) }); }
    static fromJSON(json) {
        if (json.$typeName !== StableIdentifierAdded.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StableIdentifierAdded.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStableIdentifierAdded(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StableIdentifierAdded object`);
    } return StableIdentifierAdded.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStableIdentifierAdded(data.bcs.type)) {
                throw new Error(`object at is not a StableIdentifierAdded object`);
            }
            return StableIdentifierAdded.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StableIdentifierAdded.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StableIdentifierAdded object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStableIdentifierAdded(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StableIdentifierAdded object`);
        }
        return StableIdentifierAdded.fromSuiObjectData(res.data);
    }
}
exports.StableIdentifierAdded = StableIdentifierAdded;
StableIdentifierAdded.$typeName = `${PKG_V1}::yield_flow::StableIdentifierAdded`;
StableIdentifierAdded.$numTypeParams = 0;
StableIdentifierAdded.$isPhantom = [];
/* ============================== StableIdentifierRemoved =============================== */
function isStableIdentifierRemoved(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::StableIdentifierRemoved`; }
class StableIdentifierRemoved {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StableIdentifierRemoved.$typeName;
        this.$isPhantom = StableIdentifierRemoved.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StableIdentifierRemoved.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.identifier = fields.identifier;
    }
    static reified() { return { typeName: StableIdentifierRemoved.$typeName, fullTypeName: (0, util_1.composeSuiType)(StableIdentifierRemoved.$typeName, ...[]), typeArgs: [], isPhantom: StableIdentifierRemoved.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StableIdentifierRemoved.fromFields(fields), fromFieldsWithTypes: (item) => StableIdentifierRemoved.fromFieldsWithTypes(item), fromBcs: (data) => StableIdentifierRemoved.fromBcs(data), bcs: StableIdentifierRemoved.bcs, fromJSONField: (field) => StableIdentifierRemoved.fromJSONField(field), fromJSON: (json) => StableIdentifierRemoved.fromJSON(json), fromSuiParsedData: (content) => StableIdentifierRemoved.fromSuiParsedData(content), fromSuiObjectData: (content) => StableIdentifierRemoved.fromSuiObjectData(content), fetch: async (client, id) => StableIdentifierRemoved.fetch(client, id), new: (fields) => { return new StableIdentifierRemoved([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StableIdentifierRemoved.reified(); }
    static phantom() { return (0, reified_1.phantom)(StableIdentifierRemoved.reified()); }
    static get p() { return StableIdentifierRemoved.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StableIdentifierRemoved", {
            identifier: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return StableIdentifierRemoved.reified().new({ identifier: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.identifier) }); }
    static fromFieldsWithTypes(item) {
        if (!isStableIdentifierRemoved(item.type)) {
            throw new Error("not a StableIdentifierRemoved type");
        }
        return StableIdentifierRemoved.reified().new({ identifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.identifier) });
    }
    static fromBcs(data) { return StableIdentifierRemoved.fromFields(StableIdentifierRemoved.bcs.parse(data)); }
    toJSONField() {
        return {
            identifier: this.identifier,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StableIdentifierRemoved.reified().new({ identifier: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.identifier) }); }
    static fromJSON(json) {
        if (json.$typeName !== StableIdentifierRemoved.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StableIdentifierRemoved.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStableIdentifierRemoved(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StableIdentifierRemoved object`);
    } return StableIdentifierRemoved.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStableIdentifierRemoved(data.bcs.type)) {
                throw new Error(`object at is not a StableIdentifierRemoved object`);
            }
            return StableIdentifierRemoved.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StableIdentifierRemoved.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StableIdentifierRemoved object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStableIdentifierRemoved(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StableIdentifierRemoved object`);
        }
        return StableIdentifierRemoved.fromSuiObjectData(res.data);
    }
}
exports.StableIdentifierRemoved = StableIdentifierRemoved;
StableIdentifierRemoved.$typeName = `${PKG_V1}::yield_flow::StableIdentifierRemoved`;
StableIdentifierRemoved.$numTypeParams = 0;
StableIdentifierRemoved.$isPhantom = [];
/* ============================== ThreeAmmFlowAccess =============================== */
function isThreeAmmFlowAccess(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::ThreeAmmFlowAccess`; }
class ThreeAmmFlowAccess {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ThreeAmmFlowAccess.$typeName;
        this.$isPhantom = ThreeAmmFlowAccess.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ThreeAmmFlowAccess.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: ThreeAmmFlowAccess.$typeName, fullTypeName: (0, util_1.composeSuiType)(ThreeAmmFlowAccess.$typeName, ...[]), typeArgs: [], isPhantom: ThreeAmmFlowAccess.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ThreeAmmFlowAccess.fromFields(fields), fromFieldsWithTypes: (item) => ThreeAmmFlowAccess.fromFieldsWithTypes(item), fromBcs: (data) => ThreeAmmFlowAccess.fromBcs(data), bcs: ThreeAmmFlowAccess.bcs, fromJSONField: (field) => ThreeAmmFlowAccess.fromJSONField(field), fromJSON: (json) => ThreeAmmFlowAccess.fromJSON(json), fromSuiParsedData: (content) => ThreeAmmFlowAccess.fromSuiParsedData(content), fromSuiObjectData: (content) => ThreeAmmFlowAccess.fromSuiObjectData(content), fetch: async (client, id) => ThreeAmmFlowAccess.fetch(client, id), new: (fields) => { return new ThreeAmmFlowAccess([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ThreeAmmFlowAccess.reified(); }
    static phantom() { return (0, reified_1.phantom)(ThreeAmmFlowAccess.reified()); }
    static get p() { return ThreeAmmFlowAccess.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ThreeAmmFlowAccess", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return ThreeAmmFlowAccess.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isThreeAmmFlowAccess(item.type)) {
            throw new Error("not a ThreeAmmFlowAccess type");
        }
        return ThreeAmmFlowAccess.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return ThreeAmmFlowAccess.fromFields(ThreeAmmFlowAccess.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ThreeAmmFlowAccess.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== ThreeAmmFlowAccess.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ThreeAmmFlowAccess.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isThreeAmmFlowAccess(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ThreeAmmFlowAccess object`);
    } return ThreeAmmFlowAccess.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isThreeAmmFlowAccess(data.bcs.type)) {
                throw new Error(`object at is not a ThreeAmmFlowAccess object`);
            }
            return ThreeAmmFlowAccess.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ThreeAmmFlowAccess.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ThreeAmmFlowAccess object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isThreeAmmFlowAccess(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ThreeAmmFlowAccess object`);
        }
        return ThreeAmmFlowAccess.fromSuiObjectData(res.data);
    }
}
exports.ThreeAmmFlowAccess = ThreeAmmFlowAccess;
ThreeAmmFlowAccess.$typeName = `${PKG_V1}::yield_flow::ThreeAmmFlowAccess`;
ThreeAmmFlowAccess.$numTypeParams = 0;
ThreeAmmFlowAccess.$isPhantom = [];
/* ============================== TreasuryResourcesDistributed =============================== */
function isTreasuryResourcesDistributed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::TreasuryResourcesDistributed`; }
class TreasuryResourcesDistributed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TreasuryResourcesDistributed.$typeName;
        this.$isPhantom = TreasuryResourcesDistributed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TreasuryResourcesDistributed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.amount = fields.amount;
    }
    static reified() { return { typeName: TreasuryResourcesDistributed.$typeName, fullTypeName: (0, util_1.composeSuiType)(TreasuryResourcesDistributed.$typeName, ...[]), typeArgs: [], isPhantom: TreasuryResourcesDistributed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TreasuryResourcesDistributed.fromFields(fields), fromFieldsWithTypes: (item) => TreasuryResourcesDistributed.fromFieldsWithTypes(item), fromBcs: (data) => TreasuryResourcesDistributed.fromBcs(data), bcs: TreasuryResourcesDistributed.bcs, fromJSONField: (field) => TreasuryResourcesDistributed.fromJSONField(field), fromJSON: (json) => TreasuryResourcesDistributed.fromJSON(json), fromSuiParsedData: (content) => TreasuryResourcesDistributed.fromSuiParsedData(content), fromSuiObjectData: (content) => TreasuryResourcesDistributed.fromSuiObjectData(content), fetch: async (client, id) => TreasuryResourcesDistributed.fetch(client, id), new: (fields) => { return new TreasuryResourcesDistributed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TreasuryResourcesDistributed.reified(); }
    static phantom() { return (0, reified_1.phantom)(TreasuryResourcesDistributed.reified()); }
    static get p() { return TreasuryResourcesDistributed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TreasuryResourcesDistributed", {
            amount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TreasuryResourcesDistributed.reified().new({ amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); }
    static fromFieldsWithTypes(item) {
        if (!isTreasuryResourcesDistributed(item.type)) {
            throw new Error("not a TreasuryResourcesDistributed type");
        }
        return TreasuryResourcesDistributed.reified().new({ amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    }
    static fromBcs(data) { return TreasuryResourcesDistributed.fromFields(TreasuryResourcesDistributed.bcs.parse(data)); }
    toJSONField() {
        return {
            amount: this.amount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TreasuryResourcesDistributed.reified().new({ amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); }
    static fromJSON(json) {
        if (json.$typeName !== TreasuryResourcesDistributed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TreasuryResourcesDistributed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTreasuryResourcesDistributed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TreasuryResourcesDistributed object`);
    } return TreasuryResourcesDistributed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTreasuryResourcesDistributed(data.bcs.type)) {
                throw new Error(`object at is not a TreasuryResourcesDistributed object`);
            }
            return TreasuryResourcesDistributed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TreasuryResourcesDistributed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TreasuryResourcesDistributed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTreasuryResourcesDistributed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TreasuryResourcesDistributed object`);
        }
        return TreasuryResourcesDistributed.fromSuiObjectData(res.data);
    }
}
exports.TreasuryResourcesDistributed = TreasuryResourcesDistributed;
TreasuryResourcesDistributed.$typeName = `${PKG_V1}::yield_flow::TreasuryResourcesDistributed`;
TreasuryResourcesDistributed.$numTypeParams = 0;
TreasuryResourcesDistributed.$isPhantom = [];
/* ============================== TwoAmmFlowAccess =============================== */
function isTwoAmmFlowAccess(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::TwoAmmFlowAccess`; }
class TwoAmmFlowAccess {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TwoAmmFlowAccess.$typeName;
        this.$isPhantom = TwoAmmFlowAccess.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TwoAmmFlowAccess.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: TwoAmmFlowAccess.$typeName, fullTypeName: (0, util_1.composeSuiType)(TwoAmmFlowAccess.$typeName, ...[]), typeArgs: [], isPhantom: TwoAmmFlowAccess.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TwoAmmFlowAccess.fromFields(fields), fromFieldsWithTypes: (item) => TwoAmmFlowAccess.fromFieldsWithTypes(item), fromBcs: (data) => TwoAmmFlowAccess.fromBcs(data), bcs: TwoAmmFlowAccess.bcs, fromJSONField: (field) => TwoAmmFlowAccess.fromJSONField(field), fromJSON: (json) => TwoAmmFlowAccess.fromJSON(json), fromSuiParsedData: (content) => TwoAmmFlowAccess.fromSuiParsedData(content), fromSuiObjectData: (content) => TwoAmmFlowAccess.fromSuiObjectData(content), fetch: async (client, id) => TwoAmmFlowAccess.fetch(client, id), new: (fields) => { return new TwoAmmFlowAccess([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TwoAmmFlowAccess.reified(); }
    static phantom() { return (0, reified_1.phantom)(TwoAmmFlowAccess.reified()); }
    static get p() { return TwoAmmFlowAccess.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TwoAmmFlowAccess", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return TwoAmmFlowAccess.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isTwoAmmFlowAccess(item.type)) {
            throw new Error("not a TwoAmmFlowAccess type");
        }
        return TwoAmmFlowAccess.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return TwoAmmFlowAccess.fromFields(TwoAmmFlowAccess.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TwoAmmFlowAccess.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== TwoAmmFlowAccess.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TwoAmmFlowAccess.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTwoAmmFlowAccess(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TwoAmmFlowAccess object`);
    } return TwoAmmFlowAccess.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTwoAmmFlowAccess(data.bcs.type)) {
                throw new Error(`object at is not a TwoAmmFlowAccess object`);
            }
            return TwoAmmFlowAccess.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TwoAmmFlowAccess.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TwoAmmFlowAccess object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTwoAmmFlowAccess(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TwoAmmFlowAccess object`);
        }
        return TwoAmmFlowAccess.fromSuiObjectData(res.data);
    }
}
exports.TwoAmmFlowAccess = TwoAmmFlowAccess;
TwoAmmFlowAccess.$typeName = `${PKG_V1}::yield_flow::TwoAmmFlowAccess`;
TwoAmmFlowAccess.$numTypeParams = 0;
TwoAmmFlowAccess.$isPhantom = [];
/* ============================== VoteByVestedTokensCapability =============================== */
function isVoteByVestedTokensCapability(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::VoteByVestedTokensCapability`; }
class VoteByVestedTokensCapability {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = VoteByVestedTokensCapability.$typeName;
        this.$isPhantom = VoteByVestedTokensCapability.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(VoteByVestedTokensCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: VoteByVestedTokensCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(VoteByVestedTokensCapability.$typeName, ...[]), typeArgs: [], isPhantom: VoteByVestedTokensCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => VoteByVestedTokensCapability.fromFields(fields), fromFieldsWithTypes: (item) => VoteByVestedTokensCapability.fromFieldsWithTypes(item), fromBcs: (data) => VoteByVestedTokensCapability.fromBcs(data), bcs: VoteByVestedTokensCapability.bcs, fromJSONField: (field) => VoteByVestedTokensCapability.fromJSONField(field), fromJSON: (json) => VoteByVestedTokensCapability.fromJSON(json), fromSuiParsedData: (content) => VoteByVestedTokensCapability.fromSuiParsedData(content), fromSuiObjectData: (content) => VoteByVestedTokensCapability.fromSuiObjectData(content), fetch: async (client, id) => VoteByVestedTokensCapability.fetch(client, id), new: (fields) => { return new VoteByVestedTokensCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return VoteByVestedTokensCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(VoteByVestedTokensCapability.reified()); }
    static get p() { return VoteByVestedTokensCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("VoteByVestedTokensCapability", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return VoteByVestedTokensCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isVoteByVestedTokensCapability(item.type)) {
            throw new Error("not a VoteByVestedTokensCapability type");
        }
        return VoteByVestedTokensCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return VoteByVestedTokensCapability.fromFields(VoteByVestedTokensCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return VoteByVestedTokensCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== VoteByVestedTokensCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VoteByVestedTokensCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVoteByVestedTokensCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VoteByVestedTokensCapability object`);
    } return VoteByVestedTokensCapability.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVoteByVestedTokensCapability(data.bcs.type)) {
                throw new Error(`object at is not a VoteByVestedTokensCapability object`);
            }
            return VoteByVestedTokensCapability.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return VoteByVestedTokensCapability.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VoteByVestedTokensCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVoteByVestedTokensCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VoteByVestedTokensCapability object`);
        }
        return VoteByVestedTokensCapability.fromSuiObjectData(res.data);
    }
}
exports.VoteByVestedTokensCapability = VoteByVestedTokensCapability;
VoteByVestedTokensCapability.$typeName = `${PKG_V1}::yield_flow::VoteByVestedTokensCapability`;
VoteByVestedTokensCapability.$numTypeParams = 0;
VoteByVestedTokensCapability.$isPhantom = [];
/* ============================== YieldFlow =============================== */
function isYieldFlow(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::yield_flow::YieldFlow`; }
class YieldFlow {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = YieldFlow.$typeName;
        this.$isPhantom = YieldFlow.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(YieldFlow.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.suiTreasury = fields.suiTreasury;
        ;
        this.feeFromPools = fields.feeFromPools;
        ;
        this.honeyToBurn = fields.honeyToBurn;
        ;
        this.poolsConfig = fields.poolsConfig;
        ;
        this.poolFeeConfig = fields.poolFeeConfig;
        ;
        this.ammFeeCollectors = fields.ammFeeCollectors;
        ;
        this.treasuryPercent = fields.treasuryPercent;
        ;
        this.honeyBuybackPct = fields.honeyBuybackPct;
        ;
        this.voterIncentivesPct = fields.voterIncentivesPct;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: YieldFlow.$typeName, fullTypeName: (0, util_1.composeSuiType)(YieldFlow.$typeName, ...[]), typeArgs: [], isPhantom: YieldFlow.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => YieldFlow.fromFields(fields), fromFieldsWithTypes: (item) => YieldFlow.fromFieldsWithTypes(item), fromBcs: (data) => YieldFlow.fromBcs(data), bcs: YieldFlow.bcs, fromJSONField: (field) => YieldFlow.fromJSONField(field), fromJSON: (json) => YieldFlow.fromJSON(json), fromSuiParsedData: (content) => YieldFlow.fromSuiParsedData(content), fromSuiObjectData: (content) => YieldFlow.fromSuiObjectData(content), fetch: async (client, id) => YieldFlow.fetch(client, id), new: (fields) => { return new YieldFlow([], fields); }, kind: "StructClassReified", }; }
    static get r() { return YieldFlow.reified(); }
    static phantom() { return (0, reified_1.phantom)(YieldFlow.reified()); }
    static get p() { return YieldFlow.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("YieldFlow", {
            id: structs_6.UID.bcs, sui_treasury: structs_4.Balance.bcs, fee_from_pools: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), honey_to_burn: structs_4.Balance.bcs, pools_config: PoolsConfig.bcs, pool_fee_config: DefaultFeeInfo.bcs, amm_fee_collectors: structs_5.LinkedTable.bcs(structs_1.String.bcs), treasury_percent: bcs_1.bcs.u64(), honey_buyback_pct: bcs_1.bcs.u64(), voter_incentives_pct: bcs_1.bcs.u64(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return YieldFlow.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), suiTreasury: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.sui_treasury), feeFromPools: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(PoolFlow.reified())), fields.fee_from_pools), honeyToBurn: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.HONEY.reified())), fields.honey_to_burn), poolsConfig: (0, reified_1.decodeFromFields)(PoolsConfig.reified(), fields.pools_config), poolFeeConfig: (0, reified_1.decodeFromFields)(DefaultFeeInfo.reified(), fields.pool_fee_config), ammFeeCollectors: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.amm_fee_collectors), treasuryPercent: (0, reified_1.decodeFromFields)("u64", fields.treasury_percent), honeyBuybackPct: (0, reified_1.decodeFromFields)("u64", fields.honey_buyback_pct), voterIncentivesPct: (0, reified_1.decodeFromFields)("u64", fields.voter_incentives_pct), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isYieldFlow(item.type)) {
            throw new Error("not a YieldFlow type");
        }
        return YieldFlow.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), suiTreasury: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.sui_treasury), feeFromPools: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(PoolFlow.reified())), item.fields.fee_from_pools), honeyToBurn: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.HONEY.reified())), item.fields.honey_to_burn), poolsConfig: (0, reified_1.decodeFromFieldsWithTypes)(PoolsConfig.reified(), item.fields.pools_config), poolFeeConfig: (0, reified_1.decodeFromFieldsWithTypes)(DefaultFeeInfo.reified(), item.fields.pool_fee_config), ammFeeCollectors: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.amm_fee_collectors), treasuryPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_percent), honeyBuybackPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_buyback_pct), voterIncentivesPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voter_incentives_pct), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return YieldFlow.fromFields(YieldFlow.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, suiTreasury: this.suiTreasury.toJSONField(), feeFromPools: this.feeFromPools.toJSONField(), honeyToBurn: this.honeyToBurn.toJSONField(), poolsConfig: this.poolsConfig.toJSONField(), poolFeeConfig: this.poolFeeConfig.toJSONField(), ammFeeCollectors: this.ammFeeCollectors.toJSONField(), treasuryPercent: this.treasuryPercent.toString(), honeyBuybackPct: this.honeyBuybackPct.toString(), voterIncentivesPct: this.voterIncentivesPct.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return YieldFlow.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), suiTreasury: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.suiTreasury), feeFromPools: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(PoolFlow.reified())), field.feeFromPools), honeyToBurn: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.HONEY.reified())), field.honeyToBurn), poolsConfig: (0, reified_1.decodeFromJSONField)(PoolsConfig.reified(), field.poolsConfig), poolFeeConfig: (0, reified_1.decodeFromJSONField)(DefaultFeeInfo.reified(), field.poolFeeConfig), ammFeeCollectors: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.ammFeeCollectors), treasuryPercent: (0, reified_1.decodeFromJSONField)("u64", field.treasuryPercent), honeyBuybackPct: (0, reified_1.decodeFromJSONField)("u64", field.honeyBuybackPct), voterIncentivesPct: (0, reified_1.decodeFromJSONField)("u64", field.voterIncentivesPct), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== YieldFlow.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return YieldFlow.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isYieldFlow(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a YieldFlow object`);
    } return YieldFlow.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isYieldFlow(data.bcs.type)) {
                throw new Error(`object at is not a YieldFlow object`);
            }
            return YieldFlow.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return YieldFlow.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching YieldFlow object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isYieldFlow(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a YieldFlow object`);
        }
        return YieldFlow.fromSuiObjectData(res.data);
    }
}
exports.YieldFlow = YieldFlow;
YieldFlow.$typeName = `${PKG_V1}::yield_flow::YieldFlow`;
YieldFlow.$numTypeParams = 0;
YieldFlow.$isPhantom = [];
