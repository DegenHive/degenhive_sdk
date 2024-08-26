"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoAmmFeeClaimCapability = exports.TreasuryResourcesDistributed = exports.TreasuryPercentUpdated = exports.Treasury = exports.ThreeAmmFeeClaimCapability = exports.StableIdentifierRemoved = exports.StableIdentifierAdded = exports.NewFeeCollectorKrafted = exports.HiveEntryCap = exports.HiveDaoCapability = exports.FeeInfo = exports.FeeExtractedForCoin = exports.FeeCollector = exports.FeeCollectedForCoin = exports.DexDaoCapability = exports.DegenHiveDeployerCap = exports.DefaultFeeSet = exports.DecimalPrecisionForCoinTypesWhitelisted = exports.BuidlersRoyaltyCollectionAbility = exports.Config = void 0;
exports.isConfig = isConfig;
exports.isBuidlersRoyaltyCollectionAbility = isBuidlersRoyaltyCollectionAbility;
exports.isDecimalPrecisionForCoinTypesWhitelisted = isDecimalPrecisionForCoinTypesWhitelisted;
exports.isDefaultFeeSet = isDefaultFeeSet;
exports.isDegenHiveDeployerCap = isDegenHiveDeployerCap;
exports.isDexDaoCapability = isDexDaoCapability;
exports.isFeeCollectedForCoin = isFeeCollectedForCoin;
exports.isFeeCollector = isFeeCollector;
exports.isFeeExtractedForCoin = isFeeExtractedForCoin;
exports.isFeeInfo = isFeeInfo;
exports.isHiveDaoCapability = isHiveDaoCapability;
exports.isHiveEntryCap = isHiveEntryCap;
exports.isNewFeeCollectorKrafted = isNewFeeCollectorKrafted;
exports.isStableIdentifierAdded = isStableIdentifierAdded;
exports.isStableIdentifierRemoved = isStableIdentifierRemoved;
exports.isThreeAmmFeeClaimCapability = isThreeAmmFeeClaimCapability;
exports.isTreasury = isTreasury;
exports.isTreasuryPercentUpdated = isTreasuryPercentUpdated;
exports.isTreasuryResourcesDistributed = isTreasuryResourcesDistributed;
exports.isTwoAmmFeeClaimCapability = isTwoAmmFeeClaimCapability;
const reified = require("../../_framework/reified");
const structs_1 = require("../../_dependencies/source/0x1/ascii/structs");
const structs_2 = require("../../_dependencies/source/0x1/string/structs");
const structs_3 = require("../../_dependencies/source/0x1/type-name/structs");
const structs_4 = require("../../_dependencies/source/0x2/balance/structs");
const structs_5 = require("../../_dependencies/source/0x2/linked-table/structs");
const structs_6 = require("../../_dependencies/source/0x2/object/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== Config =============================== */
function isConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Config"; }
class Config {
    constructor(typeArgs, fields) {
        this.$typeName = Config.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Config.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.decimalPrecisions = fields.decimalPrecisions;
        ;
        this.stableIdentifiers = fields.stableIdentifiers;
        ;
        this.ammFeeCollectors = fields.ammFeeCollectors;
        ;
        this.weightedPoolFee = fields.weightedPoolFee;
        ;
        this.stablePoolFee = fields.stablePoolFee;
        ;
        this.curvedPoolFee = fields.curvedPoolFee;
        ;
        this.treasuryPercent = fields.treasuryPercent;
    }
    static reified() { return { typeName: Config.$typeName, fullTypeName: (0, util_1.composeSuiType)(Config.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Config.fromFields(fields), fromFieldsWithTypes: (item) => Config.fromFieldsWithTypes(item), fromBcs: (data) => Config.fromBcs(data), bcs: Config.bcs, fromJSONField: (field) => Config.fromJSONField(field), fromJSON: (json) => Config.fromJSON(json), fromSuiParsedData: (content) => Config.fromSuiParsedData(content), fetch: async (client, id) => Config.fetch(client, id), new: (fields) => { return new Config([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Config.reified(); }
    static phantom() { return (0, reified_1.phantom)(Config.reified()); }
    static get p() { return Config.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Config", {
            id: structs_6.UID.bcs, decimal_precisions: structs_5.LinkedTable.bcs(structs_2.String.bcs), stable_identifiers: structs_5.LinkedTable.bcs(structs_1.String.bcs), amm_fee_collectors: structs_5.LinkedTable.bcs(structs_1.String.bcs), weighted_pool_fee: FeeInfo.bcs, stable_pool_fee: FeeInfo.bcs, curved_pool_fee: FeeInfo.bcs, treasury_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Config.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), decimalPrecisions: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_2.String.reified(), reified.phantom("u8")), fields.decimal_precisions), stableIdentifiers: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("bool")), fields.stable_identifiers), ammFeeCollectors: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.amm_fee_collectors), weightedPoolFee: (0, reified_1.decodeFromFields)(FeeInfo.reified(), fields.weighted_pool_fee), stablePoolFee: (0, reified_1.decodeFromFields)(FeeInfo.reified(), fields.stable_pool_fee), curvedPoolFee: (0, reified_1.decodeFromFields)(FeeInfo.reified(), fields.curved_pool_fee), treasuryPercent: (0, reified_1.decodeFromFields)("u64", fields.treasury_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isConfig(item.type)) {
            throw new Error("not a Config type");
        }
        return Config.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), decimalPrecisions: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_2.String.reified(), reified.phantom("u8")), item.fields.decimal_precisions), stableIdentifiers: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("bool")), item.fields.stable_identifiers), ammFeeCollectors: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.amm_fee_collectors), weightedPoolFee: (0, reified_1.decodeFromFieldsWithTypes)(FeeInfo.reified(), item.fields.weighted_pool_fee), stablePoolFee: (0, reified_1.decodeFromFieldsWithTypes)(FeeInfo.reified(), item.fields.stable_pool_fee), curvedPoolFee: (0, reified_1.decodeFromFieldsWithTypes)(FeeInfo.reified(), item.fields.curved_pool_fee), treasuryPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_percent) });
    }
    static fromBcs(data) { return Config.fromFields(Config.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, decimalPrecisions: this.decimalPrecisions.toJSONField(), stableIdentifiers: this.stableIdentifiers.toJSONField(), ammFeeCollectors: this.ammFeeCollectors.toJSONField(), weightedPoolFee: this.weightedPoolFee.toJSONField(), stablePoolFee: this.stablePoolFee.toJSONField(), curvedPoolFee: this.curvedPoolFee.toJSONField(), treasuryPercent: this.treasuryPercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Config.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), decimalPrecisions: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_2.String.reified(), reified.phantom("u8")), field.decimalPrecisions), stableIdentifiers: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("bool")), field.stableIdentifiers), ammFeeCollectors: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.ammFeeCollectors), weightedPoolFee: (0, reified_1.decodeFromJSONField)(FeeInfo.reified(), field.weightedPoolFee), stablePoolFee: (0, reified_1.decodeFromJSONField)(FeeInfo.reified(), field.stablePoolFee), curvedPoolFee: (0, reified_1.decodeFromJSONField)(FeeInfo.reified(), field.curvedPoolFee), treasuryPercent: (0, reified_1.decodeFromJSONField)("u64", field.treasuryPercent) }); }
    static fromJSON(json) {
        if (json.$typeName !== Config.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Config.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Config object`);
    } return Config.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Config object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Config object`);
        }
        return Config.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Config = Config;
Config.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Config";
Config.$numTypeParams = 0;
/* ============================== BuidlersRoyaltyCollectionAbility =============================== */
function isBuidlersRoyaltyCollectionAbility(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::BuidlersRoyaltyCollectionAbility"; }
class BuidlersRoyaltyCollectionAbility {
    constructor(typeArgs, fields) {
        this.$typeName = BuidlersRoyaltyCollectionAbility.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BuidlersRoyaltyCollectionAbility.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: BuidlersRoyaltyCollectionAbility.$typeName, fullTypeName: (0, util_1.composeSuiType)(BuidlersRoyaltyCollectionAbility.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BuidlersRoyaltyCollectionAbility.fromFields(fields), fromFieldsWithTypes: (item) => BuidlersRoyaltyCollectionAbility.fromFieldsWithTypes(item), fromBcs: (data) => BuidlersRoyaltyCollectionAbility.fromBcs(data), bcs: BuidlersRoyaltyCollectionAbility.bcs, fromJSONField: (field) => BuidlersRoyaltyCollectionAbility.fromJSONField(field), fromJSON: (json) => BuidlersRoyaltyCollectionAbility.fromJSON(json), fromSuiParsedData: (content) => BuidlersRoyaltyCollectionAbility.fromSuiParsedData(content), fetch: async (client, id) => BuidlersRoyaltyCollectionAbility.fetch(client, id), new: (fields) => { return new BuidlersRoyaltyCollectionAbility([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BuidlersRoyaltyCollectionAbility.reified(); }
    static phantom() { return (0, reified_1.phantom)(BuidlersRoyaltyCollectionAbility.reified()); }
    static get p() { return BuidlersRoyaltyCollectionAbility.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BuidlersRoyaltyCollectionAbility", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return BuidlersRoyaltyCollectionAbility.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isBuidlersRoyaltyCollectionAbility(item.type)) {
            throw new Error("not a BuidlersRoyaltyCollectionAbility type");
        }
        return BuidlersRoyaltyCollectionAbility.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return BuidlersRoyaltyCollectionAbility.fromFields(BuidlersRoyaltyCollectionAbility.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BuidlersRoyaltyCollectionAbility.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== BuidlersRoyaltyCollectionAbility.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BuidlersRoyaltyCollectionAbility.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBuidlersRoyaltyCollectionAbility(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BuidlersRoyaltyCollectionAbility object`);
    } return BuidlersRoyaltyCollectionAbility.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BuidlersRoyaltyCollectionAbility object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBuidlersRoyaltyCollectionAbility(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BuidlersRoyaltyCollectionAbility object`);
        }
        return BuidlersRoyaltyCollectionAbility.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BuidlersRoyaltyCollectionAbility = BuidlersRoyaltyCollectionAbility;
BuidlersRoyaltyCollectionAbility.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::BuidlersRoyaltyCollectionAbility";
BuidlersRoyaltyCollectionAbility.$numTypeParams = 0;
/* ============================== DecimalPrecisionForCoinTypesWhitelisted =============================== */
function isDecimalPrecisionForCoinTypesWhitelisted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DecimalPrecisionForCoinTypesWhitelisted"; }
class DecimalPrecisionForCoinTypesWhitelisted {
    constructor(typeArgs, fields) {
        this.$typeName = DecimalPrecisionForCoinTypesWhitelisted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(DecimalPrecisionForCoinTypesWhitelisted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.coinTypes = fields.coinTypes;
        ;
        this.decimalPrecisions = fields.decimalPrecisions;
    }
    static reified() { return { typeName: DecimalPrecisionForCoinTypesWhitelisted.$typeName, fullTypeName: (0, util_1.composeSuiType)(DecimalPrecisionForCoinTypesWhitelisted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => DecimalPrecisionForCoinTypesWhitelisted.fromFields(fields), fromFieldsWithTypes: (item) => DecimalPrecisionForCoinTypesWhitelisted.fromFieldsWithTypes(item), fromBcs: (data) => DecimalPrecisionForCoinTypesWhitelisted.fromBcs(data), bcs: DecimalPrecisionForCoinTypesWhitelisted.bcs, fromJSONField: (field) => DecimalPrecisionForCoinTypesWhitelisted.fromJSONField(field), fromJSON: (json) => DecimalPrecisionForCoinTypesWhitelisted.fromJSON(json), fromSuiParsedData: (content) => DecimalPrecisionForCoinTypesWhitelisted.fromSuiParsedData(content), fetch: async (client, id) => DecimalPrecisionForCoinTypesWhitelisted.fetch(client, id), new: (fields) => { return new DecimalPrecisionForCoinTypesWhitelisted([], fields); }, kind: "StructClassReified", }; }
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
            coinTypes: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.coinTypes), decimalPrecisions: (0, reified_1.fieldToJSON)(`vector<u8>`, this.decimalPrecisions),
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DecimalPrecisionForCoinTypesWhitelisted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDecimalPrecisionForCoinTypesWhitelisted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DecimalPrecisionForCoinTypesWhitelisted object`);
        }
        return DecimalPrecisionForCoinTypesWhitelisted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DecimalPrecisionForCoinTypesWhitelisted = DecimalPrecisionForCoinTypesWhitelisted;
DecimalPrecisionForCoinTypesWhitelisted.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DecimalPrecisionForCoinTypesWhitelisted";
DecimalPrecisionForCoinTypesWhitelisted.$numTypeParams = 0;
/* ============================== DefaultFeeSet =============================== */
function isDefaultFeeSet(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DefaultFeeSet"; }
class DefaultFeeSet {
    constructor(typeArgs, fields) {
        this.$typeName = DefaultFeeSet.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(DefaultFeeSet.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.curve = fields.curve;
        ;
        this.totalFeeBps = fields.totalFeeBps;
        ;
        this.hiveFeePercent = fields.hiveFeePercent;
    }
    static reified() { return { typeName: DefaultFeeSet.$typeName, fullTypeName: (0, util_1.composeSuiType)(DefaultFeeSet.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => DefaultFeeSet.fromFields(fields), fromFieldsWithTypes: (item) => DefaultFeeSet.fromFieldsWithTypes(item), fromBcs: (data) => DefaultFeeSet.fromBcs(data), bcs: DefaultFeeSet.bcs, fromJSONField: (field) => DefaultFeeSet.fromJSONField(field), fromJSON: (json) => DefaultFeeSet.fromJSON(json), fromSuiParsedData: (content) => DefaultFeeSet.fromSuiParsedData(content), fetch: async (client, id) => DefaultFeeSet.fetch(client, id), new: (fields) => { return new DefaultFeeSet([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DefaultFeeSet.reified(); }
    static phantom() { return (0, reified_1.phantom)(DefaultFeeSet.reified()); }
    static get p() { return DefaultFeeSet.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DefaultFeeSet", {
            curve: structs_3.TypeName.bcs, total_fee_bps: bcs_1.bcs.u64(), hive_fee_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DefaultFeeSet.reified().new({ curve: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.curve), totalFeeBps: (0, reified_1.decodeFromFields)("u64", fields.total_fee_bps), hiveFeePercent: (0, reified_1.decodeFromFields)("u64", fields.hive_fee_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isDefaultFeeSet(item.type)) {
            throw new Error("not a DefaultFeeSet type");
        }
        return DefaultFeeSet.reified().new({ curve: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.curve), totalFeeBps: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_fee_bps), hiveFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_fee_percent) });
    }
    static fromBcs(data) { return DefaultFeeSet.fromFields(DefaultFeeSet.bcs.parse(data)); }
    toJSONField() {
        return {
            curve: this.curve.toJSONField(), totalFeeBps: this.totalFeeBps.toString(), hiveFeePercent: this.hiveFeePercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DefaultFeeSet.reified().new({ curve: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.curve), totalFeeBps: (0, reified_1.decodeFromJSONField)("u64", field.totalFeeBps), hiveFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.hiveFeePercent) }); }
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DefaultFeeSet object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDefaultFeeSet(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DefaultFeeSet object`);
        }
        return DefaultFeeSet.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DefaultFeeSet = DefaultFeeSet;
DefaultFeeSet.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DefaultFeeSet";
DefaultFeeSet.$numTypeParams = 0;
/* ============================== DegenHiveDeployerCap =============================== */
function isDegenHiveDeployerCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DegenHiveDeployerCap"; }
class DegenHiveDeployerCap {
    constructor(typeArgs, fields) {
        this.$typeName = DegenHiveDeployerCap.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(DegenHiveDeployerCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.managerInitialized = fields.managerInitialized;
        ;
        this.vaultInitialized = fields.vaultInitialized;
    }
    static reified() { return { typeName: DegenHiveDeployerCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(DegenHiveDeployerCap.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => DegenHiveDeployerCap.fromFields(fields), fromFieldsWithTypes: (item) => DegenHiveDeployerCap.fromFieldsWithTypes(item), fromBcs: (data) => DegenHiveDeployerCap.fromBcs(data), bcs: DegenHiveDeployerCap.bcs, fromJSONField: (field) => DegenHiveDeployerCap.fromJSONField(field), fromJSON: (json) => DegenHiveDeployerCap.fromJSON(json), fromSuiParsedData: (content) => DegenHiveDeployerCap.fromSuiParsedData(content), fetch: async (client, id) => DegenHiveDeployerCap.fetch(client, id), new: (fields) => { return new DegenHiveDeployerCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DegenHiveDeployerCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(DegenHiveDeployerCap.reified()); }
    static get p() { return DegenHiveDeployerCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DegenHiveDeployerCap", {
            id: structs_6.UID.bcs, manager_initialized: bcs_1.bcs.bool(), vault_initialized: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return DegenHiveDeployerCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), managerInitialized: (0, reified_1.decodeFromFields)("bool", fields.manager_initialized), vaultInitialized: (0, reified_1.decodeFromFields)("bool", fields.vault_initialized) }); }
    static fromFieldsWithTypes(item) {
        if (!isDegenHiveDeployerCap(item.type)) {
            throw new Error("not a DegenHiveDeployerCap type");
        }
        return DegenHiveDeployerCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), managerInitialized: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.manager_initialized), vaultInitialized: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.vault_initialized) });
    }
    static fromBcs(data) { return DegenHiveDeployerCap.fromFields(DegenHiveDeployerCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, managerInitialized: this.managerInitialized, vaultInitialized: this.vaultInitialized,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DegenHiveDeployerCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), managerInitialized: (0, reified_1.decodeFromJSONField)("bool", field.managerInitialized), vaultInitialized: (0, reified_1.decodeFromJSONField)("bool", field.vaultInitialized) }); }
    static fromJSON(json) {
        if (json.$typeName !== DegenHiveDeployerCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DegenHiveDeployerCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDegenHiveDeployerCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DegenHiveDeployerCap object`);
    } return DegenHiveDeployerCap.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DegenHiveDeployerCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDegenHiveDeployerCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DegenHiveDeployerCap object`);
        }
        return DegenHiveDeployerCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DegenHiveDeployerCap = DegenHiveDeployerCap;
DegenHiveDeployerCap.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DegenHiveDeployerCap";
DegenHiveDeployerCap.$numTypeParams = 0;
/* ============================== DexDaoCapability =============================== */
function isDexDaoCapability(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DexDaoCapability"; }
class DexDaoCapability {
    constructor(typeArgs, fields) {
        this.$typeName = DexDaoCapability.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(DexDaoCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: DexDaoCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(DexDaoCapability.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => DexDaoCapability.fromFields(fields), fromFieldsWithTypes: (item) => DexDaoCapability.fromFieldsWithTypes(item), fromBcs: (data) => DexDaoCapability.fromBcs(data), bcs: DexDaoCapability.bcs, fromJSONField: (field) => DexDaoCapability.fromJSONField(field), fromJSON: (json) => DexDaoCapability.fromJSON(json), fromSuiParsedData: (content) => DexDaoCapability.fromSuiParsedData(content), fetch: async (client, id) => DexDaoCapability.fetch(client, id), new: (fields) => { return new DexDaoCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DexDaoCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(DexDaoCapability.reified()); }
    static get p() { return DexDaoCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DexDaoCapability", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return DexDaoCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isDexDaoCapability(item.type)) {
            throw new Error("not a DexDaoCapability type");
        }
        return DexDaoCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return DexDaoCapability.fromFields(DexDaoCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DexDaoCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== DexDaoCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DexDaoCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDexDaoCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DexDaoCapability object`);
    } return DexDaoCapability.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DexDaoCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDexDaoCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DexDaoCapability object`);
        }
        return DexDaoCapability.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DexDaoCapability = DexDaoCapability;
DexDaoCapability.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DexDaoCapability";
DexDaoCapability.$numTypeParams = 0;
/* ============================== FeeCollectedForCoin =============================== */
function isFeeCollectedForCoin(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollectedForCoin"; }
class FeeCollectedForCoin {
    constructor(typeArgs, fields) {
        this.$typeName = FeeCollectedForCoin.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeeCollectedForCoin.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    static reified() { return { typeName: FeeCollectedForCoin.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeeCollectedForCoin.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => FeeCollectedForCoin.fromFields(fields), fromFieldsWithTypes: (item) => FeeCollectedForCoin.fromFieldsWithTypes(item), fromBcs: (data) => FeeCollectedForCoin.fromBcs(data), bcs: FeeCollectedForCoin.bcs, fromJSONField: (field) => FeeCollectedForCoin.fromJSONField(field), fromJSON: (json) => FeeCollectedForCoin.fromJSON(json), fromSuiParsedData: (content) => FeeCollectedForCoin.fromSuiParsedData(content), fetch: async (client, id) => FeeCollectedForCoin.fetch(client, id), new: (fields) => { return new FeeCollectedForCoin([], fields); }, kind: "StructClassReified", }; }
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeeCollectedForCoin object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeeCollectedForCoin(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeCollectedForCoin object`);
        }
        return FeeCollectedForCoin.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.FeeCollectedForCoin = FeeCollectedForCoin;
FeeCollectedForCoin.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollectedForCoin";
FeeCollectedForCoin.$numTypeParams = 0;
/* ============================== FeeCollector =============================== */
function isFeeCollector(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollector<"); }
class FeeCollector {
    constructor(typeArgs, fields) {
        this.$typeName = FeeCollector.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeeCollector.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
    }
    static reified(X) { return { typeName: FeeCollector.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeeCollector.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], reifiedTypeArgs: [X], fromFields: (fields) => FeeCollector.fromFields(X, fields), fromFieldsWithTypes: (item) => FeeCollector.fromFieldsWithTypes(X, item), fromBcs: (data) => FeeCollector.fromBcs(X, data), bcs: FeeCollector.bcs, fromJSONField: (field) => FeeCollector.fromJSONField(X, field), fromJSON: (json) => FeeCollector.fromJSON(X, json), fromSuiParsedData: (content) => FeeCollector.fromSuiParsedData(X, content), fetch: async (client, id) => FeeCollector.fetch(client, X, id), new: (fields) => { return new FeeCollector([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
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
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeeCollector object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeeCollector(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeCollector object`);
        }
        return FeeCollector.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.FeeCollector = FeeCollector;
FeeCollector.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollector";
FeeCollector.$numTypeParams = 1;
/* ============================== FeeExtractedForCoin =============================== */
function isFeeExtractedForCoin(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeExtractedForCoin"; }
class FeeExtractedForCoin {
    constructor(typeArgs, fields) {
        this.$typeName = FeeExtractedForCoin.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeeExtractedForCoin.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    static reified() { return { typeName: FeeExtractedForCoin.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeeExtractedForCoin.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => FeeExtractedForCoin.fromFields(fields), fromFieldsWithTypes: (item) => FeeExtractedForCoin.fromFieldsWithTypes(item), fromBcs: (data) => FeeExtractedForCoin.fromBcs(data), bcs: FeeExtractedForCoin.bcs, fromJSONField: (field) => FeeExtractedForCoin.fromJSONField(field), fromJSON: (json) => FeeExtractedForCoin.fromJSON(json), fromSuiParsedData: (content) => FeeExtractedForCoin.fromSuiParsedData(content), fetch: async (client, id) => FeeExtractedForCoin.fetch(client, id), new: (fields) => { return new FeeExtractedForCoin([], fields); }, kind: "StructClassReified", }; }
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeeExtractedForCoin object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeeExtractedForCoin(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeExtractedForCoin object`);
        }
        return FeeExtractedForCoin.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.FeeExtractedForCoin = FeeExtractedForCoin;
FeeExtractedForCoin.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeExtractedForCoin";
FeeExtractedForCoin.$numTypeParams = 0;
/* ============================== FeeInfo =============================== */
function isFeeInfo(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeInfo"; }
class FeeInfo {
    constructor(typeArgs, fields) {
        this.$typeName = FeeInfo.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeeInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.totalFeeBps = fields.totalFeeBps;
        ;
        this.hiveFeePercent = fields.hiveFeePercent;
    }
    static reified() { return { typeName: FeeInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeeInfo.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => FeeInfo.fromFields(fields), fromFieldsWithTypes: (item) => FeeInfo.fromFieldsWithTypes(item), fromBcs: (data) => FeeInfo.fromBcs(data), bcs: FeeInfo.bcs, fromJSONField: (field) => FeeInfo.fromJSONField(field), fromJSON: (json) => FeeInfo.fromJSON(json), fromSuiParsedData: (content) => FeeInfo.fromSuiParsedData(content), fetch: async (client, id) => FeeInfo.fetch(client, id), new: (fields) => { return new FeeInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FeeInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(FeeInfo.reified()); }
    static get p() { return FeeInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FeeInfo", {
            total_fee_bps: bcs_1.bcs.u64(), hive_fee_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FeeInfo.reified().new({ totalFeeBps: (0, reified_1.decodeFromFields)("u64", fields.total_fee_bps), hiveFeePercent: (0, reified_1.decodeFromFields)("u64", fields.hive_fee_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isFeeInfo(item.type)) {
            throw new Error("not a FeeInfo type");
        }
        return FeeInfo.reified().new({ totalFeeBps: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_fee_bps), hiveFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_fee_percent) });
    }
    static fromBcs(data) { return FeeInfo.fromFields(FeeInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            totalFeeBps: this.totalFeeBps.toString(), hiveFeePercent: this.hiveFeePercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FeeInfo.reified().new({ totalFeeBps: (0, reified_1.decodeFromJSONField)("u64", field.totalFeeBps), hiveFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.hiveFeePercent) }); }
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeeInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeeInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeeInfo object`);
        }
        return FeeInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.FeeInfo = FeeInfo;
FeeInfo.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeInfo";
FeeInfo.$numTypeParams = 0;
/* ============================== HiveDaoCapability =============================== */
function isHiveDaoCapability(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveDaoCapability"; }
class HiveDaoCapability {
    constructor(typeArgs, fields) {
        this.$typeName = HiveDaoCapability.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveDaoCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: HiveDaoCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveDaoCapability.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveDaoCapability.fromFields(fields), fromFieldsWithTypes: (item) => HiveDaoCapability.fromFieldsWithTypes(item), fromBcs: (data) => HiveDaoCapability.fromBcs(data), bcs: HiveDaoCapability.bcs, fromJSONField: (field) => HiveDaoCapability.fromJSONField(field), fromJSON: (json) => HiveDaoCapability.fromJSON(json), fromSuiParsedData: (content) => HiveDaoCapability.fromSuiParsedData(content), fetch: async (client, id) => HiveDaoCapability.fetch(client, id), new: (fields) => { return new HiveDaoCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveDaoCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveDaoCapability.reified()); }
    static get p() { return HiveDaoCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveDaoCapability", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return HiveDaoCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveDaoCapability(item.type)) {
            throw new Error("not a HiveDaoCapability type");
        }
        return HiveDaoCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return HiveDaoCapability.fromFields(HiveDaoCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveDaoCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveDaoCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveDaoCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveDaoCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveDaoCapability object`);
    } return HiveDaoCapability.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveDaoCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveDaoCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveDaoCapability object`);
        }
        return HiveDaoCapability.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveDaoCapability = HiveDaoCapability;
HiveDaoCapability.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveDaoCapability";
HiveDaoCapability.$numTypeParams = 0;
/* ============================== HiveEntryCap =============================== */
function isHiveEntryCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveEntryCap"; }
class HiveEntryCap {
    constructor(typeArgs, fields) {
        this.$typeName = HiveEntryCap.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveEntryCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: HiveEntryCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveEntryCap.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveEntryCap.fromFields(fields), fromFieldsWithTypes: (item) => HiveEntryCap.fromFieldsWithTypes(item), fromBcs: (data) => HiveEntryCap.fromBcs(data), bcs: HiveEntryCap.bcs, fromJSONField: (field) => HiveEntryCap.fromJSONField(field), fromJSON: (json) => HiveEntryCap.fromJSON(json), fromSuiParsedData: (content) => HiveEntryCap.fromSuiParsedData(content), fetch: async (client, id) => HiveEntryCap.fetch(client, id), new: (fields) => { return new HiveEntryCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveEntryCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveEntryCap.reified()); }
    static get p() { return HiveEntryCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveEntryCap", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return HiveEntryCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveEntryCap(item.type)) {
            throw new Error("not a HiveEntryCap type");
        }
        return HiveEntryCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return HiveEntryCap.fromFields(HiveEntryCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveEntryCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveEntryCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveEntryCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveEntryCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveEntryCap object`);
    } return HiveEntryCap.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveEntryCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveEntryCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveEntryCap object`);
        }
        return HiveEntryCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveEntryCap = HiveEntryCap;
HiveEntryCap.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveEntryCap";
HiveEntryCap.$numTypeParams = 0;
/* ============================== NewFeeCollectorKrafted =============================== */
function isNewFeeCollectorKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::NewFeeCollectorKrafted"; }
class NewFeeCollectorKrafted {
    constructor(typeArgs, fields) {
        this.$typeName = NewFeeCollectorKrafted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewFeeCollectorKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.coinType = fields.coinType;
        ;
        this.feeCollectorAddr = fields.feeCollectorAddr;
    }
    static reified() { return { typeName: NewFeeCollectorKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewFeeCollectorKrafted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => NewFeeCollectorKrafted.fromFields(fields), fromFieldsWithTypes: (item) => NewFeeCollectorKrafted.fromFieldsWithTypes(item), fromBcs: (data) => NewFeeCollectorKrafted.fromBcs(data), bcs: NewFeeCollectorKrafted.bcs, fromJSONField: (field) => NewFeeCollectorKrafted.fromJSONField(field), fromJSON: (json) => NewFeeCollectorKrafted.fromJSON(json), fromSuiParsedData: (content) => NewFeeCollectorKrafted.fromSuiParsedData(content), fetch: async (client, id) => NewFeeCollectorKrafted.fetch(client, id), new: (fields) => { return new NewFeeCollectorKrafted([], fields); }, kind: "StructClassReified", }; }
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewFeeCollectorKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewFeeCollectorKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewFeeCollectorKrafted object`);
        }
        return NewFeeCollectorKrafted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewFeeCollectorKrafted = NewFeeCollectorKrafted;
NewFeeCollectorKrafted.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::NewFeeCollectorKrafted";
NewFeeCollectorKrafted.$numTypeParams = 0;
/* ============================== StableIdentifierAdded =============================== */
function isStableIdentifierAdded(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierAdded"; }
class StableIdentifierAdded {
    constructor(typeArgs, fields) {
        this.$typeName = StableIdentifierAdded.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(StableIdentifierAdded.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.identifier = fields.identifier;
    }
    static reified() { return { typeName: StableIdentifierAdded.$typeName, fullTypeName: (0, util_1.composeSuiType)(StableIdentifierAdded.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => StableIdentifierAdded.fromFields(fields), fromFieldsWithTypes: (item) => StableIdentifierAdded.fromFieldsWithTypes(item), fromBcs: (data) => StableIdentifierAdded.fromBcs(data), bcs: StableIdentifierAdded.bcs, fromJSONField: (field) => StableIdentifierAdded.fromJSONField(field), fromJSON: (json) => StableIdentifierAdded.fromJSON(json), fromSuiParsedData: (content) => StableIdentifierAdded.fromSuiParsedData(content), fetch: async (client, id) => StableIdentifierAdded.fetch(client, id), new: (fields) => { return new StableIdentifierAdded([], fields); }, kind: "StructClassReified", }; }
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StableIdentifierAdded object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStableIdentifierAdded(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StableIdentifierAdded object`);
        }
        return StableIdentifierAdded.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StableIdentifierAdded = StableIdentifierAdded;
StableIdentifierAdded.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierAdded";
StableIdentifierAdded.$numTypeParams = 0;
/* ============================== StableIdentifierRemoved =============================== */
function isStableIdentifierRemoved(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierRemoved"; }
class StableIdentifierRemoved {
    constructor(typeArgs, fields) {
        this.$typeName = StableIdentifierRemoved.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(StableIdentifierRemoved.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.identifier = fields.identifier;
    }
    static reified() { return { typeName: StableIdentifierRemoved.$typeName, fullTypeName: (0, util_1.composeSuiType)(StableIdentifierRemoved.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => StableIdentifierRemoved.fromFields(fields), fromFieldsWithTypes: (item) => StableIdentifierRemoved.fromFieldsWithTypes(item), fromBcs: (data) => StableIdentifierRemoved.fromBcs(data), bcs: StableIdentifierRemoved.bcs, fromJSONField: (field) => StableIdentifierRemoved.fromJSONField(field), fromJSON: (json) => StableIdentifierRemoved.fromJSON(json), fromSuiParsedData: (content) => StableIdentifierRemoved.fromSuiParsedData(content), fetch: async (client, id) => StableIdentifierRemoved.fetch(client, id), new: (fields) => { return new StableIdentifierRemoved([], fields); }, kind: "StructClassReified", }; }
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StableIdentifierRemoved object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStableIdentifierRemoved(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StableIdentifierRemoved object`);
        }
        return StableIdentifierRemoved.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StableIdentifierRemoved = StableIdentifierRemoved;
StableIdentifierRemoved.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierRemoved";
StableIdentifierRemoved.$numTypeParams = 0;
/* ============================== ThreeAmmFeeClaimCapability =============================== */
function isThreeAmmFeeClaimCapability(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::ThreeAmmFeeClaimCapability"; }
class ThreeAmmFeeClaimCapability {
    constructor(typeArgs, fields) {
        this.$typeName = ThreeAmmFeeClaimCapability.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ThreeAmmFeeClaimCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: ThreeAmmFeeClaimCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(ThreeAmmFeeClaimCapability.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ThreeAmmFeeClaimCapability.fromFields(fields), fromFieldsWithTypes: (item) => ThreeAmmFeeClaimCapability.fromFieldsWithTypes(item), fromBcs: (data) => ThreeAmmFeeClaimCapability.fromBcs(data), bcs: ThreeAmmFeeClaimCapability.bcs, fromJSONField: (field) => ThreeAmmFeeClaimCapability.fromJSONField(field), fromJSON: (json) => ThreeAmmFeeClaimCapability.fromJSON(json), fromSuiParsedData: (content) => ThreeAmmFeeClaimCapability.fromSuiParsedData(content), fetch: async (client, id) => ThreeAmmFeeClaimCapability.fetch(client, id), new: (fields) => { return new ThreeAmmFeeClaimCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ThreeAmmFeeClaimCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(ThreeAmmFeeClaimCapability.reified()); }
    static get p() { return ThreeAmmFeeClaimCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ThreeAmmFeeClaimCapability", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return ThreeAmmFeeClaimCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isThreeAmmFeeClaimCapability(item.type)) {
            throw new Error("not a ThreeAmmFeeClaimCapability type");
        }
        return ThreeAmmFeeClaimCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return ThreeAmmFeeClaimCapability.fromFields(ThreeAmmFeeClaimCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ThreeAmmFeeClaimCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== ThreeAmmFeeClaimCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ThreeAmmFeeClaimCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isThreeAmmFeeClaimCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ThreeAmmFeeClaimCapability object`);
    } return ThreeAmmFeeClaimCapability.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ThreeAmmFeeClaimCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isThreeAmmFeeClaimCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ThreeAmmFeeClaimCapability object`);
        }
        return ThreeAmmFeeClaimCapability.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ThreeAmmFeeClaimCapability = ThreeAmmFeeClaimCapability;
ThreeAmmFeeClaimCapability.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::ThreeAmmFeeClaimCapability";
ThreeAmmFeeClaimCapability.$numTypeParams = 0;
/* ============================== Treasury =============================== */
function isTreasury(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Treasury<"); }
class Treasury {
    constructor(typeArgs, fields) {
        this.$typeName = Treasury.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Treasury.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
    }
    static reified(X) { return { typeName: Treasury.$typeName, fullTypeName: (0, util_1.composeSuiType)(Treasury.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], reifiedTypeArgs: [X], fromFields: (fields) => Treasury.fromFields(X, fields), fromFieldsWithTypes: (item) => Treasury.fromFieldsWithTypes(X, item), fromBcs: (data) => Treasury.fromBcs(X, data), bcs: Treasury.bcs, fromJSONField: (field) => Treasury.fromJSONField(X, field), fromJSON: (json) => Treasury.fromJSON(X, json), fromSuiParsedData: (content) => Treasury.fromSuiParsedData(X, content), fetch: async (client, id) => Treasury.fetch(client, X, id), new: (fields) => { return new Treasury([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Treasury.reified; }
    static phantom(X) { return (0, reified_1.phantom)(Treasury.reified(X)); }
    static get p() { return Treasury.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("Treasury", {
            id: structs_6.UID.bcs, balance: structs_4.Balance.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return Treasury.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), balance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.balance) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTreasury(item.type)) {
            throw new Error("not a Treasury type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Treasury.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.balance) });
    }
    static fromBcs(typeArg, data) { return Treasury.fromFields(typeArg, Treasury.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, balance: this.balance.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Treasury.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), balance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.balance) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Treasury.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Treasury.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Treasury.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTreasury(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Treasury object`);
    } return Treasury.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Treasury object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTreasury(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Treasury object`);
        }
        return Treasury.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Treasury = Treasury;
Treasury.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Treasury";
Treasury.$numTypeParams = 1;
/* ============================== TreasuryPercentUpdated =============================== */
function isTreasuryPercentUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryPercentUpdated"; }
class TreasuryPercentUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = TreasuryPercentUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TreasuryPercentUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.treasuryFeePercent = fields.treasuryFeePercent;
    }
    static reified() { return { typeName: TreasuryPercentUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(TreasuryPercentUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => TreasuryPercentUpdated.fromFields(fields), fromFieldsWithTypes: (item) => TreasuryPercentUpdated.fromFieldsWithTypes(item), fromBcs: (data) => TreasuryPercentUpdated.fromBcs(data), bcs: TreasuryPercentUpdated.bcs, fromJSONField: (field) => TreasuryPercentUpdated.fromJSONField(field), fromJSON: (json) => TreasuryPercentUpdated.fromJSON(json), fromSuiParsedData: (content) => TreasuryPercentUpdated.fromSuiParsedData(content), fetch: async (client, id) => TreasuryPercentUpdated.fetch(client, id), new: (fields) => { return new TreasuryPercentUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TreasuryPercentUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(TreasuryPercentUpdated.reified()); }
    static get p() { return TreasuryPercentUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TreasuryPercentUpdated", {
            treasury_fee_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TreasuryPercentUpdated.reified().new({ treasuryFeePercent: (0, reified_1.decodeFromFields)("u64", fields.treasury_fee_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isTreasuryPercentUpdated(item.type)) {
            throw new Error("not a TreasuryPercentUpdated type");
        }
        return TreasuryPercentUpdated.reified().new({ treasuryFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_fee_percent) });
    }
    static fromBcs(data) { return TreasuryPercentUpdated.fromFields(TreasuryPercentUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            treasuryFeePercent: this.treasuryFeePercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TreasuryPercentUpdated.reified().new({ treasuryFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.treasuryFeePercent) }); }
    static fromJSON(json) {
        if (json.$typeName !== TreasuryPercentUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TreasuryPercentUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTreasuryPercentUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TreasuryPercentUpdated object`);
    } return TreasuryPercentUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TreasuryPercentUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTreasuryPercentUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TreasuryPercentUpdated object`);
        }
        return TreasuryPercentUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TreasuryPercentUpdated = TreasuryPercentUpdated;
TreasuryPercentUpdated.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryPercentUpdated";
TreasuryPercentUpdated.$numTypeParams = 0;
/* ============================== TreasuryResourcesDistributed =============================== */
function isTreasuryResourcesDistributed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryResourcesDistributed"; }
class TreasuryResourcesDistributed {
    constructor(typeArgs, fields) {
        this.$typeName = TreasuryResourcesDistributed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TreasuryResourcesDistributed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.token = fields.token;
        ;
        this.amount = fields.amount;
    }
    static reified() { return { typeName: TreasuryResourcesDistributed.$typeName, fullTypeName: (0, util_1.composeSuiType)(TreasuryResourcesDistributed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => TreasuryResourcesDistributed.fromFields(fields), fromFieldsWithTypes: (item) => TreasuryResourcesDistributed.fromFieldsWithTypes(item), fromBcs: (data) => TreasuryResourcesDistributed.fromBcs(data), bcs: TreasuryResourcesDistributed.bcs, fromJSONField: (field) => TreasuryResourcesDistributed.fromJSONField(field), fromJSON: (json) => TreasuryResourcesDistributed.fromJSON(json), fromSuiParsedData: (content) => TreasuryResourcesDistributed.fromSuiParsedData(content), fetch: async (client, id) => TreasuryResourcesDistributed.fetch(client, id), new: (fields) => { return new TreasuryResourcesDistributed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TreasuryResourcesDistributed.reified(); }
    static phantom() { return (0, reified_1.phantom)(TreasuryResourcesDistributed.reified()); }
    static get p() { return TreasuryResourcesDistributed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TreasuryResourcesDistributed", {
            token: structs_3.TypeName.bcs, amount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TreasuryResourcesDistributed.reified().new({ token: (0, reified_1.decodeFromFields)(structs_3.TypeName.reified(), fields.token), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); }
    static fromFieldsWithTypes(item) {
        if (!isTreasuryResourcesDistributed(item.type)) {
            throw new Error("not a TreasuryResourcesDistributed type");
        }
        return TreasuryResourcesDistributed.reified().new({ token: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TypeName.reified(), item.fields.token), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    }
    static fromBcs(data) { return TreasuryResourcesDistributed.fromFields(TreasuryResourcesDistributed.bcs.parse(data)); }
    toJSONField() {
        return {
            token: this.token.toJSONField(), amount: this.amount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TreasuryResourcesDistributed.reified().new({ token: (0, reified_1.decodeFromJSONField)(structs_3.TypeName.reified(), field.token), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); }
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TreasuryResourcesDistributed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTreasuryResourcesDistributed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TreasuryResourcesDistributed object`);
        }
        return TreasuryResourcesDistributed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TreasuryResourcesDistributed = TreasuryResourcesDistributed;
TreasuryResourcesDistributed.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryResourcesDistributed";
TreasuryResourcesDistributed.$numTypeParams = 0;
/* ============================== TwoAmmFeeClaimCapability =============================== */
function isTwoAmmFeeClaimCapability(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TwoAmmFeeClaimCapability"; }
class TwoAmmFeeClaimCapability {
    constructor(typeArgs, fields) {
        this.$typeName = TwoAmmFeeClaimCapability.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TwoAmmFeeClaimCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: TwoAmmFeeClaimCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(TwoAmmFeeClaimCapability.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => TwoAmmFeeClaimCapability.fromFields(fields), fromFieldsWithTypes: (item) => TwoAmmFeeClaimCapability.fromFieldsWithTypes(item), fromBcs: (data) => TwoAmmFeeClaimCapability.fromBcs(data), bcs: TwoAmmFeeClaimCapability.bcs, fromJSONField: (field) => TwoAmmFeeClaimCapability.fromJSONField(field), fromJSON: (json) => TwoAmmFeeClaimCapability.fromJSON(json), fromSuiParsedData: (content) => TwoAmmFeeClaimCapability.fromSuiParsedData(content), fetch: async (client, id) => TwoAmmFeeClaimCapability.fetch(client, id), new: (fields) => { return new TwoAmmFeeClaimCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TwoAmmFeeClaimCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(TwoAmmFeeClaimCapability.reified()); }
    static get p() { return TwoAmmFeeClaimCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TwoAmmFeeClaimCapability", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return TwoAmmFeeClaimCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isTwoAmmFeeClaimCapability(item.type)) {
            throw new Error("not a TwoAmmFeeClaimCapability type");
        }
        return TwoAmmFeeClaimCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return TwoAmmFeeClaimCapability.fromFields(TwoAmmFeeClaimCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TwoAmmFeeClaimCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== TwoAmmFeeClaimCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TwoAmmFeeClaimCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTwoAmmFeeClaimCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TwoAmmFeeClaimCapability object`);
    } return TwoAmmFeeClaimCapability.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TwoAmmFeeClaimCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTwoAmmFeeClaimCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TwoAmmFeeClaimCapability object`);
        }
        return TwoAmmFeeClaimCapability.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TwoAmmFeeClaimCapability = TwoAmmFeeClaimCapability;
TwoAmmFeeClaimCapability.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TwoAmmFeeClaimCapability";
TwoAmmFeeClaimCapability.$numTypeParams = 0;
