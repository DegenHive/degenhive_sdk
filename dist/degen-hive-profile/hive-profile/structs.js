"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GemAddedToProfile = exports.isGemAddedToProfile = exports.ExitHiveOfProfile = exports.isExitHiveOfProfile = exports.ExecutedListingDestroyed = exports.isExecutedListingDestroyed = exports.ExecutedListing = exports.isExecutedListing = exports.DepositHSuiForProfile = exports.isDepositHSuiForProfile = exports.DegenHiveYieldHarvested = exports.isDegenHiveYieldHarvested = exports.BorrowRecord = exports.isBorrowRecord = exports.BioUpdated = exports.isBioUpdated = exports.BidRecord = exports.isBidRecord = exports.BidPlaced = exports.isBidPlaced = exports.BidModified = exports.isBidModified = exports.BidMarkedInvalid = exports.isBidMarkedInvalid = exports.BidExpired = exports.isBidExpired = exports.BidDestroyed = exports.isBidDestroyed = exports.BidCanceled = exports.isBidCanceled = exports.Bid = exports.isBid = exports.AssetUpgrade = exports.isAssetUpgrade = exports.AssetPowerUpdated = exports.isAssetPowerUpdated = exports.AppInstalledByProfile = exports.isAppInstalledByProfile = exports.AppAddedToHiveStore = exports.isAppAddedToHiveStore = exports.AddedNewUpgradeForVersion = exports.isAddedNewUpgradeForVersion = exports.AccessTypeSwitchedToNewPlan = exports.isAccessTypeSwitchedToNewPlan = exports.AccessRecordDestroyed = exports.isAccessRecordDestroyed = exports.AccessRecord = exports.isAccessRecord = exports.ConfigParams = exports.isConfigParams = void 0;
exports.HiveProfile = exports.isHiveProfile = exports.HiveManager = exports.isHiveManager = exports.HiveKioskTransferredToProfile = exports.isHiveKioskTransferredToProfile = exports.HiveKioskInitialized = exports.isHiveKioskInitialized = exports.HiveKiosk = exports.isHiveKiosk = exports.HiveGemsTransfered = exports.isHiveGemsTransfered = exports.HiveGemsPortedToSkin = exports.isHiveGemsPortedToSkin = exports.HiveGemsDepositedIntoAsset = exports.isHiveGemsDepositedIntoAsset = exports.HiveDisperser = exports.isHiveDisperser = exports.HiveAssetUpgraded = exports.isHiveAssetUpgraded = exports.HiveAssetUnstaked = exports.isHiveAssetUnstaked = exports.HiveAssetTransfered = exports.isHiveAssetTransfered = exports.HiveAssetStaked = exports.isHiveAssetStaked = exports.HiveAssetBorrowed = exports.isHiveAssetBorrowed = exports.HiveAsset = exports.isHiveAsset = exports.HiveAppAccessCapability = exports.isHiveAppAccessCapability = exports.HiveAddedForHarvest = exports.isHiveAddedForHarvest = exports.HiveAccessPlanUpdated = exports.isHiveAccessPlanUpdated = exports.HiveAccessPaymentProcessed = exports.isHiveAccessPaymentProcessed = exports.HighestBidListingUnsold = exports.isHighestBidListingUnsold = exports.HarvestRewardsForAsset = exports.isHarvestRewardsForAsset = exports.HSuiDisperser = exports.isHSuiDisperser = exports.HSuiAddedForHarvest = exports.isHSuiAddedForHarvest = exports.HIVE_PROFILE = exports.isHIVE_PROFILE = exports.GemWithdrawnFromProfile = exports.isGemWithdrawnFromProfile = void 0;
exports.PricingAndAccessSetInHiveKiosk = exports.isPricingAndAccessSetInHiveKiosk = exports.NewSkinForAssetKrafted = exports.isNewSkinForAssetKrafted = exports.NewSkinForAsset = exports.isNewSkinForAsset = exports.NewListing = exports.isNewListing = exports.NewHiveAssetKrafted = exports.isNewHiveAssetKrafted = exports.MarketPlace = exports.isMarketPlace = exports.ManagerAppAccessCapability = exports.isManagerAppAccessCapability = exports.ListingUpdated = exports.isListingUpdated = exports.ListingRecord = exports.isListingRecord = exports.ListingExpired = exports.isListingExpired = exports.ListingDestroyed = exports.isListingDestroyed = exports.ListingCanceled = exports.isListingCanceled = exports.Listing = exports.isListing = exports.LendRecord = exports.isLendRecord = exports.KraftYieldHarvested = exports.isKraftYieldHarvested = exports.KraftRoyaltyUpdated = exports.isKraftRoyaltyUpdated = exports.KioskOwnershipTransferred = exports.isKioskOwnershipTransferred = exports.JoinedHiveOfProfile = exports.isJoinedHiveOfProfile = exports.InscriptionSetForProfile = exports.isInscriptionSetForProfile = exports.Inscription = exports.isInscription = exports.HiveTwapUpdated = exports.isHiveTwapUpdated = exports.HiveTwapInfo = exports.isHiveTwapInfo = exports.HiveProfileMappingStore = exports.isHiveProfileMappingStore = exports.HiveProfileKrafted = exports.isHiveProfileKrafted = exports.HiveProfileDestroyed = exports.isHiveProfileDestroyed = void 0;
exports.UserNameUpdated = exports.isUserNameUpdated = exports.UpdateEntropyForEpoch = exports.isUpdateEntropyForEpoch = exports.TwapUpdateCap = exports.isTwapUpdateCap = exports.TraitsSetInHiveKiosk = exports.isTraitsSetInHiveKiosk = exports.TotalActivePowerUpdated = exports.isTotalActivePowerUpdated = exports.SubscriptionRoyalty = exports.isSubscriptionRoyalty = exports.SkinRoyaltyCommissionUpdated = exports.isSkinRoyaltyCommissionUpdated = exports.SkinRecord = exports.isSkinRecord = exports.SkinKraftPermissionsUpdated = exports.isSkinKraftPermissionsUpdated = exports.SkinAccessPermissionsUpdated = exports.isSkinAccessPermissionsUpdated = exports.SaleExecuted = exports.isSaleExecuted = exports.RoyaltyProcessed = exports.isRoyaltyProcessed = exports.RoyaltyCollectedForCreator = exports.isRoyaltyCollectedForCreator = exports.Royalty = exports.isRoyalty = exports.ReturnBorrowedHiveAsset = exports.isReturnBorrowedHiveAsset = exports.RemovedUpgradeForVersion = exports.isRemovedUpgradeForVersion = exports.PublicKraftInitialized = exports.isPublicKraftInitialized = exports.PublicKraftConfig = exports.isPublicKraftConfig = exports.ProfileConfigParamsUpdated = exports.isProfileConfigParamsUpdated = void 0;
const reified = require("../../_framework/reified");
const structs_1 = require("../../_dependencies/source/0x1/ascii/structs");
const structs_2 = require("../../_dependencies/source/0x1/option/structs");
const structs_3 = require("../../_dependencies/source/0x1/string/structs");
const structs_4 = require("../../_dependencies/source/0x2/balance/structs");
const structs_5 = require("../../_dependencies/source/0x2/linked-table/structs");
const structs_6 = require("../../_dependencies/source/0x2/object/structs");
const structs_7 = require("../../_dependencies/source/0x2/table/structs");
const structs_8 = require("../../_dependencies/source/0x2/url/structs");
const structs_9 = require("../../degen-hive-dex-config/dsui/structs");
const structs_10 = require("../../degen-hive-dex-config/hive-gems/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== ConfigParams =============================== */
function isConfigParams(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ConfigParams"; }
exports.isConfigParams = isConfigParams;
class ConfigParams {
    constructor(typeArgs, fields) {
        this.$typeName = ConfigParams.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ConfigParams.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.maxBidsPerAsset = fields.maxBidsPerAsset;
        ;
        this.minSuiBidAllowed = fields.minSuiBidAllowed;
        ;
        this.profileKraftFeesSui = fields.profileKraftFeesSui;
        ;
        this.socialFeeGems = fields.socialFeeGems;
        ;
        this.socialMultiplierForGems = fields.socialMultiplierForGems;
        ;
        this.socialMultiplierForPower = fields.socialMultiplierForPower;
    }
    static reified() { return { typeName: ConfigParams.$typeName, fullTypeName: (0, util_1.composeSuiType)(ConfigParams.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ConfigParams.fromFields(fields), fromFieldsWithTypes: (item) => ConfigParams.fromFieldsWithTypes(item), fromBcs: (data) => ConfigParams.fromBcs(data), bcs: ConfigParams.bcs, fromJSONField: (field) => ConfigParams.fromJSONField(field), fromJSON: (json) => ConfigParams.fromJSON(json), fromSuiParsedData: (content) => ConfigParams.fromSuiParsedData(content), fetch: async (client, id) => ConfigParams.fetch(client, id), new: (fields) => { return new ConfigParams([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ConfigParams.reified(); }
    static phantom() { return (0, reified_1.phantom)(ConfigParams.reified()); }
    static get p() { return ConfigParams.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ConfigParams", {
            max_bids_per_asset: bcs_1.bcs.u64(), min_sui_bid_allowed: bcs_1.bcs.u64(), profile_kraft_fees_sui: bcs_1.bcs.u64(), social_fee_gems: bcs_1.bcs.u64(), social_multiplier_for_gems: bcs_1.bcs.u64(), social_multiplier_for_power: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ConfigParams.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromFields)("u64", fields.max_bids_per_asset), minSuiBidAllowed: (0, reified_1.decodeFromFields)("u64", fields.min_sui_bid_allowed), profileKraftFeesSui: (0, reified_1.decodeFromFields)("u64", fields.profile_kraft_fees_sui), socialFeeGems: (0, reified_1.decodeFromFields)("u64", fields.social_fee_gems), socialMultiplierForGems: (0, reified_1.decodeFromFields)("u64", fields.social_multiplier_for_gems), socialMultiplierForPower: (0, reified_1.decodeFromFields)("u64", fields.social_multiplier_for_power) }); }
    static fromFieldsWithTypes(item) {
        if (!isConfigParams(item.type)) {
            throw new Error("not a ConfigParams type");
        }
        return ConfigParams.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_bids_per_asset), minSuiBidAllowed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_sui_bid_allowed), profileKraftFeesSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.profile_kraft_fees_sui), socialFeeGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_fee_gems), socialMultiplierForGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_multiplier_for_gems), socialMultiplierForPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_multiplier_for_power) });
    }
    static fromBcs(data) { return ConfigParams.fromFields(ConfigParams.bcs.parse(data)); }
    toJSONField() {
        return {
            maxBidsPerAsset: this.maxBidsPerAsset.toString(), minSuiBidAllowed: this.minSuiBidAllowed.toString(), profileKraftFeesSui: this.profileKraftFeesSui.toString(), socialFeeGems: this.socialFeeGems.toString(), socialMultiplierForGems: this.socialMultiplierForGems.toString(), socialMultiplierForPower: this.socialMultiplierForPower.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ConfigParams.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromJSONField)("u64", field.maxBidsPerAsset), minSuiBidAllowed: (0, reified_1.decodeFromJSONField)("u64", field.minSuiBidAllowed), profileKraftFeesSui: (0, reified_1.decodeFromJSONField)("u64", field.profileKraftFeesSui), socialFeeGems: (0, reified_1.decodeFromJSONField)("u64", field.socialFeeGems), socialMultiplierForGems: (0, reified_1.decodeFromJSONField)("u64", field.socialMultiplierForGems), socialMultiplierForPower: (0, reified_1.decodeFromJSONField)("u64", field.socialMultiplierForPower) }); }
    static fromJSON(json) {
        if (json.$typeName !== ConfigParams.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ConfigParams.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConfigParams(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ConfigParams object`);
    } return ConfigParams.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ConfigParams object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConfigParams(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ConfigParams object`);
        }
        return ConfigParams.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ConfigParams = ConfigParams;
ConfigParams.$typeName = "0x0::hive_profile::ConfigParams";
ConfigParams.$numTypeParams = 0;
/* ============================== AccessRecord =============================== */
function isAccessRecord(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::AccessRecord"; }
exports.isAccessRecord = isAccessRecord;
class AccessRecord {
    constructor(typeArgs, fields) {
        this.$typeName = AccessRecord.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AccessRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.subscriber = fields.subscriber;
        ;
        this.subscribedTo = fields.subscribedTo;
        ;
        this.isActive = fields.isActive;
        ;
        this.initTimestamp = fields.initTimestamp;
        ;
        this.accessType = fields.accessType;
        ;
        this.accessCost = fields.accessCost;
        ;
        this.nextPaymentTimestamp = fields.nextPaymentTimestamp;
        ;
        this.totalPaid = fields.totalPaid;
        ;
        this.toUnsubscribe = fields.toUnsubscribe;
    }
    static reified() { return { typeName: AccessRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(AccessRecord.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AccessRecord.fromFields(fields), fromFieldsWithTypes: (item) => AccessRecord.fromFieldsWithTypes(item), fromBcs: (data) => AccessRecord.fromBcs(data), bcs: AccessRecord.bcs, fromJSONField: (field) => AccessRecord.fromJSONField(field), fromJSON: (json) => AccessRecord.fromJSON(json), fromSuiParsedData: (content) => AccessRecord.fromSuiParsedData(content), fetch: async (client, id) => AccessRecord.fetch(client, id), new: (fields) => { return new AccessRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AccessRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(AccessRecord.reified()); }
    static get p() { return AccessRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AccessRecord", {
            subscriber: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), subscribed_to: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), is_active: bcs_1.bcs.bool(), init_timestamp: bcs_1.bcs.u64(), access_type: bcs_1.bcs.u8(), access_cost: bcs_1.bcs.u64(), next_payment_timestamp: bcs_1.bcs.u64(), total_paid: bcs_1.bcs.u64(), to_unsubscribe: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return AccessRecord.reified().new({ subscriber: (0, reified_1.decodeFromFields)("address", fields.subscriber), subscribedTo: (0, reified_1.decodeFromFields)("address", fields.subscribed_to), isActive: (0, reified_1.decodeFromFields)("bool", fields.is_active), initTimestamp: (0, reified_1.decodeFromFields)("u64", fields.init_timestamp), accessType: (0, reified_1.decodeFromFields)("u8", fields.access_type), accessCost: (0, reified_1.decodeFromFields)("u64", fields.access_cost), nextPaymentTimestamp: (0, reified_1.decodeFromFields)("u64", fields.next_payment_timestamp), totalPaid: (0, reified_1.decodeFromFields)("u64", fields.total_paid), toUnsubscribe: (0, reified_1.decodeFromFields)("bool", fields.to_unsubscribe) }); }
    static fromFieldsWithTypes(item) {
        if (!isAccessRecord(item.type)) {
            throw new Error("not a AccessRecord type");
        }
        return AccessRecord.reified().new({ subscriber: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscriber), subscribedTo: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscribed_to), isActive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_active), initTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_timestamp), accessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.access_type), accessCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.access_cost), nextPaymentTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_payment_timestamp), totalPaid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_paid), toUnsubscribe: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.to_unsubscribe) });
    }
    static fromBcs(data) { return AccessRecord.fromFields(AccessRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            subscriber: this.subscriber, subscribedTo: this.subscribedTo, isActive: this.isActive, initTimestamp: this.initTimestamp.toString(), accessType: this.accessType, accessCost: this.accessCost.toString(), nextPaymentTimestamp: this.nextPaymentTimestamp.toString(), totalPaid: this.totalPaid.toString(), toUnsubscribe: this.toUnsubscribe,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AccessRecord.reified().new({ subscriber: (0, reified_1.decodeFromJSONField)("address", field.subscriber), subscribedTo: (0, reified_1.decodeFromJSONField)("address", field.subscribedTo), isActive: (0, reified_1.decodeFromJSONField)("bool", field.isActive), initTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.initTimestamp), accessType: (0, reified_1.decodeFromJSONField)("u8", field.accessType), accessCost: (0, reified_1.decodeFromJSONField)("u64", field.accessCost), nextPaymentTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.nextPaymentTimestamp), totalPaid: (0, reified_1.decodeFromJSONField)("u64", field.totalPaid), toUnsubscribe: (0, reified_1.decodeFromJSONField)("bool", field.toUnsubscribe) }); }
    static fromJSON(json) {
        if (json.$typeName !== AccessRecord.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AccessRecord.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAccessRecord(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AccessRecord object`);
    } return AccessRecord.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AccessRecord object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAccessRecord(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AccessRecord object`);
        }
        return AccessRecord.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AccessRecord = AccessRecord;
AccessRecord.$typeName = "0x0::hive_profile::AccessRecord";
AccessRecord.$numTypeParams = 0;
/* ============================== AccessRecordDestroyed =============================== */
function isAccessRecordDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::AccessRecordDestroyed"; }
exports.isAccessRecordDestroyed = isAccessRecordDestroyed;
class AccessRecordDestroyed {
    constructor(typeArgs, fields) {
        this.$typeName = AccessRecordDestroyed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AccessRecordDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.subscriberProfile = fields.subscriberProfile;
        ;
        this.subscribedToProfile = fields.subscribedToProfile;
        ;
        this.initTimestamp = fields.initTimestamp;
        ;
        this.totalPaid = fields.totalPaid;
    }
    static reified() { return { typeName: AccessRecordDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(AccessRecordDestroyed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AccessRecordDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => AccessRecordDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => AccessRecordDestroyed.fromBcs(data), bcs: AccessRecordDestroyed.bcs, fromJSONField: (field) => AccessRecordDestroyed.fromJSONField(field), fromJSON: (json) => AccessRecordDestroyed.fromJSON(json), fromSuiParsedData: (content) => AccessRecordDestroyed.fromSuiParsedData(content), fetch: async (client, id) => AccessRecordDestroyed.fetch(client, id), new: (fields) => { return new AccessRecordDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AccessRecordDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(AccessRecordDestroyed.reified()); }
    static get p() { return AccessRecordDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AccessRecordDestroyed", {
            subscriber_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), subscribed_to_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), init_timestamp: bcs_1.bcs.u64(), total_paid: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return AccessRecordDestroyed.reified().new({ subscriberProfile: (0, reified_1.decodeFromFields)("address", fields.subscriber_profile), subscribedToProfile: (0, reified_1.decodeFromFields)("address", fields.subscribed_to_profile), initTimestamp: (0, reified_1.decodeFromFields)("u64", fields.init_timestamp), totalPaid: (0, reified_1.decodeFromFields)("u64", fields.total_paid) }); }
    static fromFieldsWithTypes(item) {
        if (!isAccessRecordDestroyed(item.type)) {
            throw new Error("not a AccessRecordDestroyed type");
        }
        return AccessRecordDestroyed.reified().new({ subscriberProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscriber_profile), subscribedToProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscribed_to_profile), initTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_timestamp), totalPaid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_paid) });
    }
    static fromBcs(data) { return AccessRecordDestroyed.fromFields(AccessRecordDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            subscriberProfile: this.subscriberProfile, subscribedToProfile: this.subscribedToProfile, initTimestamp: this.initTimestamp.toString(), totalPaid: this.totalPaid.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AccessRecordDestroyed.reified().new({ subscriberProfile: (0, reified_1.decodeFromJSONField)("address", field.subscriberProfile), subscribedToProfile: (0, reified_1.decodeFromJSONField)("address", field.subscribedToProfile), initTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.initTimestamp), totalPaid: (0, reified_1.decodeFromJSONField)("u64", field.totalPaid) }); }
    static fromJSON(json) {
        if (json.$typeName !== AccessRecordDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AccessRecordDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAccessRecordDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AccessRecordDestroyed object`);
    } return AccessRecordDestroyed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AccessRecordDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAccessRecordDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AccessRecordDestroyed object`);
        }
        return AccessRecordDestroyed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AccessRecordDestroyed = AccessRecordDestroyed;
AccessRecordDestroyed.$typeName = "0x0::hive_profile::AccessRecordDestroyed";
AccessRecordDestroyed.$numTypeParams = 0;
/* ============================== AccessTypeSwitchedToNewPlan =============================== */
function isAccessTypeSwitchedToNewPlan(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::AccessTypeSwitchedToNewPlan"; }
exports.isAccessTypeSwitchedToNewPlan = isAccessTypeSwitchedToNewPlan;
class AccessTypeSwitchedToNewPlan {
    constructor(typeArgs, fields) {
        this.$typeName = AccessTypeSwitchedToNewPlan.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AccessTypeSwitchedToNewPlan.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.subscriberProfileAddr = fields.subscriberProfileAddr;
        ;
        this.hiveOwnerProfile = fields.hiveOwnerProfile;
        ;
        this.subscriberUsername = fields.subscriberUsername;
        ;
        this.hiveOwnerUsername = fields.hiveOwnerUsername;
        ;
        this.newAccessType = fields.newAccessType;
        ;
        this.newAccessCost = fields.newAccessCost;
        ;
        this.subscriptionPriceToPay = fields.subscriptionPriceToPay;
        ;
        this.hivePaidForSwitch = fields.hivePaidForSwitch;
    }
    static reified() { return { typeName: AccessTypeSwitchedToNewPlan.$typeName, fullTypeName: (0, util_1.composeSuiType)(AccessTypeSwitchedToNewPlan.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AccessTypeSwitchedToNewPlan.fromFields(fields), fromFieldsWithTypes: (item) => AccessTypeSwitchedToNewPlan.fromFieldsWithTypes(item), fromBcs: (data) => AccessTypeSwitchedToNewPlan.fromBcs(data), bcs: AccessTypeSwitchedToNewPlan.bcs, fromJSONField: (field) => AccessTypeSwitchedToNewPlan.fromJSONField(field), fromJSON: (json) => AccessTypeSwitchedToNewPlan.fromJSON(json), fromSuiParsedData: (content) => AccessTypeSwitchedToNewPlan.fromSuiParsedData(content), fetch: async (client, id) => AccessTypeSwitchedToNewPlan.fetch(client, id), new: (fields) => { return new AccessTypeSwitchedToNewPlan([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AccessTypeSwitchedToNewPlan.reified(); }
    static phantom() { return (0, reified_1.phantom)(AccessTypeSwitchedToNewPlan.reified()); }
    static get p() { return AccessTypeSwitchedToNewPlan.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AccessTypeSwitchedToNewPlan", {
            subscriber_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), hive_owner_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), subscriber_username: structs_3.String.bcs, hive_owner_username: structs_3.String.bcs, new_access_type: bcs_1.bcs.u8(), new_access_cost: bcs_1.bcs.u64(), subscription_price_to_pay: bcs_1.bcs.u64(), hive_paid_for_switch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return AccessTypeSwitchedToNewPlan.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFields)("address", fields.subscriber_profile_addr), hiveOwnerProfile: (0, reified_1.decodeFromFields)("address", fields.hive_owner_profile), subscriberUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.subscriber_username), hiveOwnerUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.hive_owner_username), newAccessType: (0, reified_1.decodeFromFields)("u8", fields.new_access_type), newAccessCost: (0, reified_1.decodeFromFields)("u64", fields.new_access_cost), subscriptionPriceToPay: (0, reified_1.decodeFromFields)("u64", fields.subscription_price_to_pay), hivePaidForSwitch: (0, reified_1.decodeFromFields)("u64", fields.hive_paid_for_switch) }); }
    static fromFieldsWithTypes(item) {
        if (!isAccessTypeSwitchedToNewPlan(item.type)) {
            throw new Error("not a AccessTypeSwitchedToNewPlan type");
        }
        return AccessTypeSwitchedToNewPlan.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscriber_profile_addr), hiveOwnerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.hive_owner_profile), subscriberUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.subscriber_username), hiveOwnerUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.hive_owner_username), newAccessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.new_access_type), newAccessCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_access_cost), subscriptionPriceToPay: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.subscription_price_to_pay), hivePaidForSwitch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_paid_for_switch) });
    }
    static fromBcs(data) { return AccessTypeSwitchedToNewPlan.fromFields(AccessTypeSwitchedToNewPlan.bcs.parse(data)); }
    toJSONField() {
        return {
            subscriberProfileAddr: this.subscriberProfileAddr, hiveOwnerProfile: this.hiveOwnerProfile, subscriberUsername: this.subscriberUsername, hiveOwnerUsername: this.hiveOwnerUsername, newAccessType: this.newAccessType, newAccessCost: this.newAccessCost.toString(), subscriptionPriceToPay: this.subscriptionPriceToPay.toString(), hivePaidForSwitch: this.hivePaidForSwitch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AccessTypeSwitchedToNewPlan.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.subscriberProfileAddr), hiveOwnerProfile: (0, reified_1.decodeFromJSONField)("address", field.hiveOwnerProfile), subscriberUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.subscriberUsername), hiveOwnerUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.hiveOwnerUsername), newAccessType: (0, reified_1.decodeFromJSONField)("u8", field.newAccessType), newAccessCost: (0, reified_1.decodeFromJSONField)("u64", field.newAccessCost), subscriptionPriceToPay: (0, reified_1.decodeFromJSONField)("u64", field.subscriptionPriceToPay), hivePaidForSwitch: (0, reified_1.decodeFromJSONField)("u64", field.hivePaidForSwitch) }); }
    static fromJSON(json) {
        if (json.$typeName !== AccessTypeSwitchedToNewPlan.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AccessTypeSwitchedToNewPlan.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAccessTypeSwitchedToNewPlan(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AccessTypeSwitchedToNewPlan object`);
    } return AccessTypeSwitchedToNewPlan.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AccessTypeSwitchedToNewPlan object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAccessTypeSwitchedToNewPlan(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AccessTypeSwitchedToNewPlan object`);
        }
        return AccessTypeSwitchedToNewPlan.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AccessTypeSwitchedToNewPlan = AccessTypeSwitchedToNewPlan;
AccessTypeSwitchedToNewPlan.$typeName = "0x0::hive_profile::AccessTypeSwitchedToNewPlan";
AccessTypeSwitchedToNewPlan.$numTypeParams = 0;
/* ============================== AddedNewUpgradeForVersion =============================== */
function isAddedNewUpgradeForVersion(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::AddedNewUpgradeForVersion"; }
exports.isAddedNewUpgradeForVersion = isAddedNewUpgradeForVersion;
class AddedNewUpgradeForVersion {
    constructor(typeArgs, fields) {
        this.$typeName = AddedNewUpgradeForVersion.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AddedNewUpgradeForVersion.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.version = fields.version;
        ;
        this.newImgUrl = fields.newImgUrl;
        ;
        this.upgradeTraitsList = fields.upgradeTraitsList;
        ;
        this.upgradePromptsList = fields.upgradePromptsList;
        ;
        this.upgradeAccess = fields.upgradeAccess;
        ;
        this.upgradePrice = fields.upgradePrice;
    }
    static reified() { return { typeName: AddedNewUpgradeForVersion.$typeName, fullTypeName: (0, util_1.composeSuiType)(AddedNewUpgradeForVersion.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AddedNewUpgradeForVersion.fromFields(fields), fromFieldsWithTypes: (item) => AddedNewUpgradeForVersion.fromFieldsWithTypes(item), fromBcs: (data) => AddedNewUpgradeForVersion.fromBcs(data), bcs: AddedNewUpgradeForVersion.bcs, fromJSONField: (field) => AddedNewUpgradeForVersion.fromJSONField(field), fromJSON: (json) => AddedNewUpgradeForVersion.fromJSON(json), fromSuiParsedData: (content) => AddedNewUpgradeForVersion.fromSuiParsedData(content), fetch: async (client, id) => AddedNewUpgradeForVersion.fetch(client, id), new: (fields) => { return new AddedNewUpgradeForVersion([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AddedNewUpgradeForVersion.reified(); }
    static phantom() { return (0, reified_1.phantom)(AddedNewUpgradeForVersion.reified()); }
    static get p() { return AddedNewUpgradeForVersion.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AddedNewUpgradeForVersion", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), collection_name: structs_3.String.bcs, version: bcs_1.bcs.u64(), new_img_url: structs_3.String.bcs, upgrade_traits_list: bcs_1.bcs.vector(structs_3.String.bcs), upgrade_prompts_list: bcs_1.bcs.vector(structs_3.String.bcs), upgrade_access: bcs_1.bcs.u8(), upgrade_price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return AddedNewUpgradeForVersion.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), version: (0, reified_1.decodeFromFields)("u64", fields.version), newImgUrl: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.new_img_url), upgradeTraitsList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.upgrade_traits_list), upgradePromptsList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.upgrade_prompts_list), upgradeAccess: (0, reified_1.decodeFromFields)("u8", fields.upgrade_access), upgradePrice: (0, reified_1.decodeFromFields)("u64", fields.upgrade_price) }); }
    static fromFieldsWithTypes(item) {
        if (!isAddedNewUpgradeForVersion(item.type)) {
            throw new Error("not a AddedNewUpgradeForVersion type");
        }
        return AddedNewUpgradeForVersion.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), newImgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.new_img_url), upgradeTraitsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.upgrade_traits_list), upgradePromptsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.upgrade_prompts_list), upgradeAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.upgrade_access), upgradePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.upgrade_price) });
    }
    static fromBcs(data) { return AddedNewUpgradeForVersion.fromFields(AddedNewUpgradeForVersion.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, collectionName: this.collectionName, version: this.version.toString(), newImgUrl: this.newImgUrl, upgradeTraitsList: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.upgradeTraitsList), upgradePromptsList: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.upgradePromptsList), upgradeAccess: this.upgradeAccess, upgradePrice: this.upgradePrice.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AddedNewUpgradeForVersion.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), version: (0, reified_1.decodeFromJSONField)("u64", field.version), newImgUrl: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.newImgUrl), upgradeTraitsList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.upgradeTraitsList), upgradePromptsList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.upgradePromptsList), upgradeAccess: (0, reified_1.decodeFromJSONField)("u8", field.upgradeAccess), upgradePrice: (0, reified_1.decodeFromJSONField)("u64", field.upgradePrice) }); }
    static fromJSON(json) {
        if (json.$typeName !== AddedNewUpgradeForVersion.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddedNewUpgradeForVersion.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddedNewUpgradeForVersion(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AddedNewUpgradeForVersion object`);
    } return AddedNewUpgradeForVersion.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AddedNewUpgradeForVersion object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddedNewUpgradeForVersion(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddedNewUpgradeForVersion object`);
        }
        return AddedNewUpgradeForVersion.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AddedNewUpgradeForVersion = AddedNewUpgradeForVersion;
AddedNewUpgradeForVersion.$typeName = "0x0::hive_profile::AddedNewUpgradeForVersion";
AddedNewUpgradeForVersion.$numTypeParams = 0;
/* ============================== AppAddedToHiveStore =============================== */
function isAppAddedToHiveStore(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::AppAddedToHiveStore"; }
exports.isAppAddedToHiveStore = isAppAddedToHiveStore;
class AppAddedToHiveStore {
    constructor(typeArgs, fields) {
        this.$typeName = AppAddedToHiveStore.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AppAddedToHiveStore.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.capabilityAddr = fields.capabilityAddr;
        ;
        this.appName = fields.appName;
        ;
        this.onlyOwnerCanAddApp = fields.onlyOwnerCanAddApp;
        ;
        this.onlyOwnerCanAccessApp = fields.onlyOwnerCanAccessApp;
        ;
        this.onlyOwnerCanRemoveApp = fields.onlyOwnerCanRemoveApp;
    }
    static reified() { return { typeName: AppAddedToHiveStore.$typeName, fullTypeName: (0, util_1.composeSuiType)(AppAddedToHiveStore.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AppAddedToHiveStore.fromFields(fields), fromFieldsWithTypes: (item) => AppAddedToHiveStore.fromFieldsWithTypes(item), fromBcs: (data) => AppAddedToHiveStore.fromBcs(data), bcs: AppAddedToHiveStore.bcs, fromJSONField: (field) => AppAddedToHiveStore.fromJSONField(field), fromJSON: (json) => AppAddedToHiveStore.fromJSON(json), fromSuiParsedData: (content) => AppAddedToHiveStore.fromSuiParsedData(content), fetch: async (client, id) => AppAddedToHiveStore.fetch(client, id), new: (fields) => { return new AppAddedToHiveStore([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AppAddedToHiveStore.reified(); }
    static phantom() { return (0, reified_1.phantom)(AppAddedToHiveStore.reified()); }
    static get p() { return AppAddedToHiveStore.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AppAddedToHiveStore", {
            capability_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), app_name: structs_1.String.bcs, only_owner_can_add_app: bcs_1.bcs.bool(), only_owner_can_access_app: bcs_1.bcs.bool(), only_owner_can_remove_app: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return AppAddedToHiveStore.reified().new({ capabilityAddr: (0, reified_1.decodeFromFields)("address", fields.capability_addr), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name), onlyOwnerCanAddApp: (0, reified_1.decodeFromFields)("bool", fields.only_owner_can_add_app), onlyOwnerCanAccessApp: (0, reified_1.decodeFromFields)("bool", fields.only_owner_can_access_app), onlyOwnerCanRemoveApp: (0, reified_1.decodeFromFields)("bool", fields.only_owner_can_remove_app) }); }
    static fromFieldsWithTypes(item) {
        if (!isAppAddedToHiveStore(item.type)) {
            throw new Error("not a AppAddedToHiveStore type");
        }
        return AppAddedToHiveStore.reified().new({ capabilityAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.capability_addr), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name), onlyOwnerCanAddApp: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.only_owner_can_add_app), onlyOwnerCanAccessApp: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.only_owner_can_access_app), onlyOwnerCanRemoveApp: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.only_owner_can_remove_app) });
    }
    static fromBcs(data) { return AppAddedToHiveStore.fromFields(AppAddedToHiveStore.bcs.parse(data)); }
    toJSONField() {
        return {
            capabilityAddr: this.capabilityAddr, appName: this.appName, onlyOwnerCanAddApp: this.onlyOwnerCanAddApp, onlyOwnerCanAccessApp: this.onlyOwnerCanAccessApp, onlyOwnerCanRemoveApp: this.onlyOwnerCanRemoveApp,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AppAddedToHiveStore.reified().new({ capabilityAddr: (0, reified_1.decodeFromJSONField)("address", field.capabilityAddr), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName), onlyOwnerCanAddApp: (0, reified_1.decodeFromJSONField)("bool", field.onlyOwnerCanAddApp), onlyOwnerCanAccessApp: (0, reified_1.decodeFromJSONField)("bool", field.onlyOwnerCanAccessApp), onlyOwnerCanRemoveApp: (0, reified_1.decodeFromJSONField)("bool", field.onlyOwnerCanRemoveApp) }); }
    static fromJSON(json) {
        if (json.$typeName !== AppAddedToHiveStore.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AppAddedToHiveStore.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAppAddedToHiveStore(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AppAddedToHiveStore object`);
    } return AppAddedToHiveStore.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AppAddedToHiveStore object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAppAddedToHiveStore(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AppAddedToHiveStore object`);
        }
        return AppAddedToHiveStore.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AppAddedToHiveStore = AppAddedToHiveStore;
AppAddedToHiveStore.$typeName = "0x0::hive_profile::AppAddedToHiveStore";
AppAddedToHiveStore.$numTypeParams = 0;
/* ============================== AppInstalledByProfile =============================== */
function isAppInstalledByProfile(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::AppInstalledByProfile"; }
exports.isAppInstalledByProfile = isAppInstalledByProfile;
class AppInstalledByProfile {
    constructor(typeArgs, fields) {
        this.$typeName = AppInstalledByProfile.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AppInstalledByProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.appName = fields.appName;
    }
    static reified() { return { typeName: AppInstalledByProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(AppInstalledByProfile.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AppInstalledByProfile.fromFields(fields), fromFieldsWithTypes: (item) => AppInstalledByProfile.fromFieldsWithTypes(item), fromBcs: (data) => AppInstalledByProfile.fromBcs(data), bcs: AppInstalledByProfile.bcs, fromJSONField: (field) => AppInstalledByProfile.fromJSONField(field), fromJSON: (json) => AppInstalledByProfile.fromJSON(json), fromSuiParsedData: (content) => AppInstalledByProfile.fromSuiParsedData(content), fetch: async (client, id) => AppInstalledByProfile.fetch(client, id), new: (fields) => { return new AppInstalledByProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AppInstalledByProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(AppInstalledByProfile.reified()); }
    static get p() { return AppInstalledByProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AppInstalledByProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, app_name: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return AppInstalledByProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isAppInstalledByProfile(item.type)) {
            throw new Error("not a AppInstalledByProfile type");
        }
        return AppInstalledByProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name) });
    }
    static fromBcs(data) { return AppInstalledByProfile.fromFields(AppInstalledByProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, username: this.username, appName: this.appName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AppInstalledByProfile.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName) }); }
    static fromJSON(json) {
        if (json.$typeName !== AppInstalledByProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AppInstalledByProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAppInstalledByProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AppInstalledByProfile object`);
    } return AppInstalledByProfile.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AppInstalledByProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAppInstalledByProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AppInstalledByProfile object`);
        }
        return AppInstalledByProfile.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AppInstalledByProfile = AppInstalledByProfile;
AppInstalledByProfile.$typeName = "0x0::hive_profile::AppInstalledByProfile";
AppInstalledByProfile.$numTypeParams = 0;
/* ============================== AssetPowerUpdated =============================== */
function isAssetPowerUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::AssetPowerUpdated"; }
exports.isAssetPowerUpdated = isAssetPowerUpdated;
class AssetPowerUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = AssetPowerUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AssetPowerUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.addPower = fields.addPower;
        ;
        this.newAssetPower = fields.newAssetPower;
    }
    static reified() { return { typeName: AssetPowerUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(AssetPowerUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AssetPowerUpdated.fromFields(fields), fromFieldsWithTypes: (item) => AssetPowerUpdated.fromFieldsWithTypes(item), fromBcs: (data) => AssetPowerUpdated.fromBcs(data), bcs: AssetPowerUpdated.bcs, fromJSONField: (field) => AssetPowerUpdated.fromJSONField(field), fromJSON: (json) => AssetPowerUpdated.fromJSON(json), fromSuiParsedData: (content) => AssetPowerUpdated.fromSuiParsedData(content), fetch: async (client, id) => AssetPowerUpdated.fetch(client, id), new: (fields) => { return new AssetPowerUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AssetPowerUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(AssetPowerUpdated.reified()); }
    static get p() { return AssetPowerUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AssetPowerUpdated", {
            version: bcs_1.bcs.u64(), add_power: bcs_1.bcs.u64(), new_asset_power: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return AssetPowerUpdated.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), addPower: (0, reified_1.decodeFromFields)("u64", fields.add_power), newAssetPower: (0, reified_1.decodeFromFields)("u64", fields.new_asset_power) }); }
    static fromFieldsWithTypes(item) {
        if (!isAssetPowerUpdated(item.type)) {
            throw new Error("not a AssetPowerUpdated type");
        }
        return AssetPowerUpdated.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), addPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.add_power), newAssetPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_asset_power) });
    }
    static fromBcs(data) { return AssetPowerUpdated.fromFields(AssetPowerUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), addPower: this.addPower.toString(), newAssetPower: this.newAssetPower.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AssetPowerUpdated.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), addPower: (0, reified_1.decodeFromJSONField)("u64", field.addPower), newAssetPower: (0, reified_1.decodeFromJSONField)("u64", field.newAssetPower) }); }
    static fromJSON(json) {
        if (json.$typeName !== AssetPowerUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AssetPowerUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAssetPowerUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AssetPowerUpdated object`);
    } return AssetPowerUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AssetPowerUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAssetPowerUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AssetPowerUpdated object`);
        }
        return AssetPowerUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AssetPowerUpdated = AssetPowerUpdated;
AssetPowerUpdated.$typeName = "0x0::hive_profile::AssetPowerUpdated";
AssetPowerUpdated.$numTypeParams = 0;
/* ============================== AssetUpgrade =============================== */
function isAssetUpgrade(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::AssetUpgrade"; }
exports.isAssetUpgrade = isAssetUpgrade;
class AssetUpgrade {
    constructor(typeArgs, fields) {
        this.$typeName = AssetUpgrade.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AssetUpgrade.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.upgradePrice = fields.upgradePrice;
        ;
        this.upgradeAccess = fields.upgradeAccess;
        ;
        this.upgradeImgUrl = fields.upgradeImgUrl;
        ;
        this.upgradeTraitsList = fields.upgradeTraitsList;
        ;
        this.upgradePrompts = fields.upgradePrompts;
    }
    static reified() { return { typeName: AssetUpgrade.$typeName, fullTypeName: (0, util_1.composeSuiType)(AssetUpgrade.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AssetUpgrade.fromFields(fields), fromFieldsWithTypes: (item) => AssetUpgrade.fromFieldsWithTypes(item), fromBcs: (data) => AssetUpgrade.fromBcs(data), bcs: AssetUpgrade.bcs, fromJSONField: (field) => AssetUpgrade.fromJSONField(field), fromJSON: (json) => AssetUpgrade.fromJSON(json), fromSuiParsedData: (content) => AssetUpgrade.fromSuiParsedData(content), fetch: async (client, id) => AssetUpgrade.fetch(client, id), new: (fields) => { return new AssetUpgrade([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AssetUpgrade.reified(); }
    static phantom() { return (0, reified_1.phantom)(AssetUpgrade.reified()); }
    static get p() { return AssetUpgrade.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AssetUpgrade", {
            upgrade_price: bcs_1.bcs.u64(), upgrade_access: bcs_1.bcs.u8(), upgrade_img_url: structs_8.Url.bcs, upgrade_traits_list: bcs_1.bcs.vector(structs_3.String.bcs), upgrade_prompts: structs_7.Table.bcs
        });
    }
    ;
    static fromFields(fields) { return AssetUpgrade.reified().new({ upgradePrice: (0, reified_1.decodeFromFields)("u64", fields.upgrade_price), upgradeAccess: (0, reified_1.decodeFromFields)("u8", fields.upgrade_access), upgradeImgUrl: (0, reified_1.decodeFromFields)(structs_8.Url.reified(), fields.upgrade_img_url), upgradeTraitsList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.upgrade_traits_list), upgradePrompts: (0, reified_1.decodeFromFields)(structs_7.Table.reified(reified.phantom(structs_3.String.reified()), reified.phantom(structs_3.String.reified())), fields.upgrade_prompts) }); }
    static fromFieldsWithTypes(item) {
        if (!isAssetUpgrade(item.type)) {
            throw new Error("not a AssetUpgrade type");
        }
        return AssetUpgrade.reified().new({ upgradePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.upgrade_price), upgradeAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.upgrade_access), upgradeImgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.Url.reified(), item.fields.upgrade_img_url), upgradeTraitsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.upgrade_traits_list), upgradePrompts: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.Table.reified(reified.phantom(structs_3.String.reified()), reified.phantom(structs_3.String.reified())), item.fields.upgrade_prompts) });
    }
    static fromBcs(data) { return AssetUpgrade.fromFields(AssetUpgrade.bcs.parse(data)); }
    toJSONField() {
        return {
            upgradePrice: this.upgradePrice.toString(), upgradeAccess: this.upgradeAccess, upgradeImgUrl: this.upgradeImgUrl, upgradeTraitsList: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.upgradeTraitsList), upgradePrompts: this.upgradePrompts.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AssetUpgrade.reified().new({ upgradePrice: (0, reified_1.decodeFromJSONField)("u64", field.upgradePrice), upgradeAccess: (0, reified_1.decodeFromJSONField)("u8", field.upgradeAccess), upgradeImgUrl: (0, reified_1.decodeFromJSONField)(structs_8.Url.reified(), field.upgradeImgUrl), upgradeTraitsList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.upgradeTraitsList), upgradePrompts: (0, reified_1.decodeFromJSONField)(structs_7.Table.reified(reified.phantom(structs_3.String.reified()), reified.phantom(structs_3.String.reified())), field.upgradePrompts) }); }
    static fromJSON(json) {
        if (json.$typeName !== AssetUpgrade.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AssetUpgrade.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAssetUpgrade(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AssetUpgrade object`);
    } return AssetUpgrade.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AssetUpgrade object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAssetUpgrade(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AssetUpgrade object`);
        }
        return AssetUpgrade.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AssetUpgrade = AssetUpgrade;
AssetUpgrade.$typeName = "0x0::hive_profile::AssetUpgrade";
AssetUpgrade.$numTypeParams = 0;
/* ============================== Bid =============================== */
function isBid(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x0::hive_profile::Bid<"); }
exports.isBid = isBid;
class Bid {
    constructor(typeArgs, fields) {
        this.$typeName = Bid.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Bid.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.balance = fields.balance;
        ;
        this.offerHsuiPrice = fields.offerHsuiPrice;
        ;
        this.expirationSec = fields.expirationSec;
        ;
        this.isListingLive = fields.isListingLive;
        ;
        this.isValid = fields.isValid;
    }
    static reified(X) { return { typeName: Bid.$typeName, fullTypeName: (0, util_1.composeSuiType)(Bid.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], reifiedTypeArgs: [X], fromFields: (fields) => Bid.fromFields(X, fields), fromFieldsWithTypes: (item) => Bid.fromFieldsWithTypes(X, item), fromBcs: (data) => Bid.fromBcs(X, data), bcs: Bid.bcs, fromJSONField: (field) => Bid.fromJSONField(X, field), fromJSON: (json) => Bid.fromJSON(X, json), fromSuiParsedData: (content) => Bid.fromSuiParsedData(X, content), fetch: async (client, id) => Bid.fetch(client, X, id), new: (fields) => { return new Bid([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Bid.reified; }
    static phantom(X) { return (0, reified_1.phantom)(Bid.reified(X)); }
    static get p() { return Bid.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("Bid", {
            bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), balance: structs_4.Balance.bcs, offer_hsui_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64(), is_listing_live: bcs_1.bcs.bool(), is_valid: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return Bid.reified(typeArg).new({ bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), balance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.balance), offerHsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_hsui_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec), isListingLive: (0, reified_1.decodeFromFields)("bool", fields.is_listing_live), isValid: (0, reified_1.decodeFromFields)("bool", fields.is_valid) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isBid(item.type)) {
            throw new Error("not a Bid type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Bid.reified(typeArg).new({ bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.balance), offerHsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_hsui_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec), isListingLive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_listing_live), isValid: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_valid) });
    }
    static fromBcs(typeArg, data) { return Bid.fromFields(typeArg, Bid.bcs.parse(data)); }
    toJSONField() {
        return {
            bidderProfile: this.bidderProfile, balance: this.balance.toJSONField(), offerHsuiPrice: this.offerHsuiPrice.toString(), expirationSec: this.expirationSec.toString(), isListingLive: this.isListingLive, isValid: this.isValid,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Bid.reified(typeArg).new({ bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), balance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.balance), offerHsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerHsuiPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec), isListingLive: (0, reified_1.decodeFromJSONField)("bool", field.isListingLive), isValid: (0, reified_1.decodeFromJSONField)("bool", field.isValid) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Bid.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Bid.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Bid.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBid(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Bid object`);
    } return Bid.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Bid object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBid(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Bid object`);
        }
        return Bid.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Bid = Bid;
Bid.$typeName = "0x0::hive_profile::Bid";
Bid.$numTypeParams = 1;
/* ============================== BidCanceled =============================== */
function isBidCanceled(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::BidCanceled"; }
exports.isBidCanceled = isBidCanceled;
class BidCanceled {
    constructor(typeArgs, fields) {
        this.$typeName = BidCanceled.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidCanceled.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderProfile = fields.bidderProfile;
    }
    static reified() { return { typeName: BidCanceled.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidCanceled.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BidCanceled.fromFields(fields), fromFieldsWithTypes: (item) => BidCanceled.fromFieldsWithTypes(item), fromBcs: (data) => BidCanceled.fromBcs(data), bcs: BidCanceled.bcs, fromJSONField: (field) => BidCanceled.fromJSONField(field), fromJSON: (json) => BidCanceled.fromJSON(json), fromSuiParsedData: (content) => BidCanceled.fromSuiParsedData(content), fetch: async (client, id) => BidCanceled.fetch(client, id), new: (fields) => { return new BidCanceled([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidCanceled.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidCanceled.reified()); }
    static get p() { return BidCanceled.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidCanceled", {
            version: bcs_1.bcs.u64(), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BidCanceled.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidCanceled(item.type)) {
            throw new Error("not a BidCanceled type");
        }
        return BidCanceled.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile) });
    }
    static fromBcs(data) { return BidCanceled.fromFields(BidCanceled.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), bidderProfile: this.bidderProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidCanceled.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidCanceled.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidCanceled.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidCanceled(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidCanceled object`);
    } return BidCanceled.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidCanceled object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidCanceled(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidCanceled object`);
        }
        return BidCanceled.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidCanceled = BidCanceled;
BidCanceled.$typeName = "0x0::hive_profile::BidCanceled";
BidCanceled.$numTypeParams = 0;
/* ============================== BidDestroyed =============================== */
function isBidDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::BidDestroyed"; }
exports.isBidDestroyed = isBidDestroyed;
class BidDestroyed {
    constructor(typeArgs, fields) {
        this.$typeName = BidDestroyed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.assetVersion = fields.assetVersion;
        ;
        this.bidderProfile = fields.bidderProfile;
    }
    static reified() { return { typeName: BidDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidDestroyed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BidDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => BidDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => BidDestroyed.fromBcs(data), bcs: BidDestroyed.bcs, fromJSONField: (field) => BidDestroyed.fromJSONField(field), fromJSON: (json) => BidDestroyed.fromJSON(json), fromSuiParsedData: (content) => BidDestroyed.fromSuiParsedData(content), fetch: async (client, id) => BidDestroyed.fetch(client, id), new: (fields) => { return new BidDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidDestroyed.reified()); }
    static get p() { return BidDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidDestroyed", {
            asset_version: bcs_1.bcs.u64(), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BidDestroyed.reified().new({ assetVersion: (0, reified_1.decodeFromFields)("u64", fields.asset_version), bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidDestroyed(item.type)) {
            throw new Error("not a BidDestroyed type");
        }
        return BidDestroyed.reified().new({ assetVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.asset_version), bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile) });
    }
    static fromBcs(data) { return BidDestroyed.fromFields(BidDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            assetVersion: this.assetVersion.toString(), bidderProfile: this.bidderProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidDestroyed.reified().new({ assetVersion: (0, reified_1.decodeFromJSONField)("u64", field.assetVersion), bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidDestroyed object`);
    } return BidDestroyed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidDestroyed object`);
        }
        return BidDestroyed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidDestroyed = BidDestroyed;
BidDestroyed.$typeName = "0x0::hive_profile::BidDestroyed";
BidDestroyed.$numTypeParams = 0;
/* ============================== BidExpired =============================== */
function isBidExpired(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::BidExpired"; }
exports.isBidExpired = isBidExpired;
class BidExpired {
    constructor(typeArgs, fields) {
        this.$typeName = BidExpired.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidExpired.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderProfile = fields.bidderProfile;
    }
    static reified() { return { typeName: BidExpired.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidExpired.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BidExpired.fromFields(fields), fromFieldsWithTypes: (item) => BidExpired.fromFieldsWithTypes(item), fromBcs: (data) => BidExpired.fromBcs(data), bcs: BidExpired.bcs, fromJSONField: (field) => BidExpired.fromJSONField(field), fromJSON: (json) => BidExpired.fromJSON(json), fromSuiParsedData: (content) => BidExpired.fromSuiParsedData(content), fetch: async (client, id) => BidExpired.fetch(client, id), new: (fields) => { return new BidExpired([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidExpired.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidExpired.reified()); }
    static get p() { return BidExpired.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidExpired", {
            version: bcs_1.bcs.u64(), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BidExpired.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidExpired(item.type)) {
            throw new Error("not a BidExpired type");
        }
        return BidExpired.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile) });
    }
    static fromBcs(data) { return BidExpired.fromFields(BidExpired.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), bidderProfile: this.bidderProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidExpired.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidExpired.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidExpired.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidExpired(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidExpired object`);
    } return BidExpired.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidExpired object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidExpired(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidExpired object`);
        }
        return BidExpired.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidExpired = BidExpired;
BidExpired.$typeName = "0x0::hive_profile::BidExpired";
BidExpired.$numTypeParams = 0;
/* ============================== BidMarkedInvalid =============================== */
function isBidMarkedInvalid(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::BidMarkedInvalid"; }
exports.isBidMarkedInvalid = isBidMarkedInvalid;
class BidMarkedInvalid {
    constructor(typeArgs, fields) {
        this.$typeName = BidMarkedInvalid.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidMarkedInvalid.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderProfile = fields.bidderProfile;
    }
    static reified() { return { typeName: BidMarkedInvalid.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidMarkedInvalid.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BidMarkedInvalid.fromFields(fields), fromFieldsWithTypes: (item) => BidMarkedInvalid.fromFieldsWithTypes(item), fromBcs: (data) => BidMarkedInvalid.fromBcs(data), bcs: BidMarkedInvalid.bcs, fromJSONField: (field) => BidMarkedInvalid.fromJSONField(field), fromJSON: (json) => BidMarkedInvalid.fromJSON(json), fromSuiParsedData: (content) => BidMarkedInvalid.fromSuiParsedData(content), fetch: async (client, id) => BidMarkedInvalid.fetch(client, id), new: (fields) => { return new BidMarkedInvalid([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidMarkedInvalid.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidMarkedInvalid.reified()); }
    static get p() { return BidMarkedInvalid.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidMarkedInvalid", {
            version: bcs_1.bcs.u64(), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BidMarkedInvalid.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidMarkedInvalid(item.type)) {
            throw new Error("not a BidMarkedInvalid type");
        }
        return BidMarkedInvalid.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile) });
    }
    static fromBcs(data) { return BidMarkedInvalid.fromFields(BidMarkedInvalid.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), bidderProfile: this.bidderProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidMarkedInvalid.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidMarkedInvalid.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidMarkedInvalid.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidMarkedInvalid(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidMarkedInvalid object`);
    } return BidMarkedInvalid.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidMarkedInvalid object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidMarkedInvalid(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidMarkedInvalid object`);
        }
        return BidMarkedInvalid.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidMarkedInvalid = BidMarkedInvalid;
BidMarkedInvalid.$typeName = "0x0::hive_profile::BidMarkedInvalid";
BidMarkedInvalid.$numTypeParams = 0;
/* ============================== BidModified =============================== */
function isBidModified(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::BidModified"; }
exports.isBidModified = isBidModified;
class BidModified {
    constructor(typeArgs, fields) {
        this.$typeName = BidModified.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidModified.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.offerHsuiPrice = fields.offerHsuiPrice;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: BidModified.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidModified.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BidModified.fromFields(fields), fromFieldsWithTypes: (item) => BidModified.fromFieldsWithTypes(item), fromBcs: (data) => BidModified.fromBcs(data), bcs: BidModified.bcs, fromJSONField: (field) => BidModified.fromJSONField(field), fromJSON: (json) => BidModified.fromJSON(json), fromSuiParsedData: (content) => BidModified.fromSuiParsedData(content), fetch: async (client, id) => BidModified.fetch(client, id), new: (fields) => { return new BidModified([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidModified.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidModified.reified()); }
    static get p() { return BidModified.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidModified", {
            version: bcs_1.bcs.u64(), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), offer_hsui_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidModified.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), offerHsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_hsui_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidModified(item.type)) {
            throw new Error("not a BidModified type");
        }
        return BidModified.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), offerHsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_hsui_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return BidModified.fromFields(BidModified.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), bidderProfile: this.bidderProfile, offerHsuiPrice: this.offerHsuiPrice.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidModified.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), offerHsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerHsuiPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidModified.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidModified.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidModified(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidModified object`);
    } return BidModified.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidModified object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidModified(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidModified object`);
        }
        return BidModified.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidModified = BidModified;
BidModified.$typeName = "0x0::hive_profile::BidModified";
BidModified.$numTypeParams = 0;
/* ============================== BidPlaced =============================== */
function isBidPlaced(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::BidPlaced"; }
exports.isBidPlaced = isBidPlaced;
class BidPlaced {
    constructor(typeArgs, fields) {
        this.$typeName = BidPlaced.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidPlaced.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.username = fields.username;
        ;
        this.version = fields.version;
        ;
        this.offerHsuiPrice = fields.offerHsuiPrice;
        ;
        this.expirationSec = fields.expirationSec;
        ;
        this.isAssetListed = fields.isAssetListed;
    }
    static reified() { return { typeName: BidPlaced.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidPlaced.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BidPlaced.fromFields(fields), fromFieldsWithTypes: (item) => BidPlaced.fromFieldsWithTypes(item), fromBcs: (data) => BidPlaced.fromBcs(data), bcs: BidPlaced.bcs, fromJSONField: (field) => BidPlaced.fromJSONField(field), fromJSON: (json) => BidPlaced.fromJSON(json), fromSuiParsedData: (content) => BidPlaced.fromSuiParsedData(content), fetch: async (client, id) => BidPlaced.fetch(client, id), new: (fields) => { return new BidPlaced([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidPlaced.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidPlaced.reified()); }
    static get p() { return BidPlaced.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidPlaced", {
            bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, version: bcs_1.bcs.u64(), offer_hsui_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64(), is_asset_listed: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return BidPlaced.reified().new({ bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), version: (0, reified_1.decodeFromFields)("u64", fields.version), offerHsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_hsui_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec), isAssetListed: (0, reified_1.decodeFromFields)("bool", fields.is_asset_listed) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidPlaced(item.type)) {
            throw new Error("not a BidPlaced type");
        }
        return BidPlaced.reified().new({ bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), offerHsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_hsui_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec), isAssetListed: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_asset_listed) });
    }
    static fromBcs(data) { return BidPlaced.fromFields(BidPlaced.bcs.parse(data)); }
    toJSONField() {
        return {
            bidderProfile: this.bidderProfile, username: this.username, version: this.version.toString(), offerHsuiPrice: this.offerHsuiPrice.toString(), expirationSec: this.expirationSec.toString(), isAssetListed: this.isAssetListed,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidPlaced.reified().new({ bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), version: (0, reified_1.decodeFromJSONField)("u64", field.version), offerHsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerHsuiPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec), isAssetListed: (0, reified_1.decodeFromJSONField)("bool", field.isAssetListed) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidPlaced.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidPlaced.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidPlaced(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidPlaced object`);
    } return BidPlaced.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidPlaced object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidPlaced(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidPlaced object`);
        }
        return BidPlaced.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidPlaced = BidPlaced;
BidPlaced.$typeName = "0x0::hive_profile::BidPlaced";
BidPlaced.$numTypeParams = 0;
/* ============================== BidRecord =============================== */
function isBidRecord(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::BidRecord"; }
exports.isBidRecord = isBidRecord;
class BidRecord {
    constructor(typeArgs, fields) {
        this.$typeName = BidRecord.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.offerHsuiPrice = fields.offerHsuiPrice;
        ;
        this.expirationSec = fields.expirationSec;
        ;
        this.isAssetListed = fields.isAssetListed;
    }
    static reified() { return { typeName: BidRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidRecord.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BidRecord.fromFields(fields), fromFieldsWithTypes: (item) => BidRecord.fromFieldsWithTypes(item), fromBcs: (data) => BidRecord.fromBcs(data), bcs: BidRecord.bcs, fromJSONField: (field) => BidRecord.fromJSONField(field), fromJSON: (json) => BidRecord.fromJSON(json), fromSuiParsedData: (content) => BidRecord.fromSuiParsedData(content), fetch: async (client, id) => BidRecord.fetch(client, id), new: (fields) => { return new BidRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidRecord.reified()); }
    static get p() { return BidRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidRecord", {
            version: bcs_1.bcs.u64(), offer_hsui_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64(), is_asset_listed: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return BidRecord.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), offerHsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_hsui_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec), isAssetListed: (0, reified_1.decodeFromFields)("bool", fields.is_asset_listed) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidRecord(item.type)) {
            throw new Error("not a BidRecord type");
        }
        return BidRecord.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), offerHsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_hsui_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec), isAssetListed: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_asset_listed) });
    }
    static fromBcs(data) { return BidRecord.fromFields(BidRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), offerHsuiPrice: this.offerHsuiPrice.toString(), expirationSec: this.expirationSec.toString(), isAssetListed: this.isAssetListed,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidRecord.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), offerHsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerHsuiPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec), isAssetListed: (0, reified_1.decodeFromJSONField)("bool", field.isAssetListed) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidRecord.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidRecord.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidRecord(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidRecord object`);
    } return BidRecord.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidRecord object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidRecord(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidRecord object`);
        }
        return BidRecord.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidRecord = BidRecord;
BidRecord.$typeName = "0x0::hive_profile::BidRecord";
BidRecord.$numTypeParams = 0;
/* ============================== BioUpdated =============================== */
function isBioUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::BioUpdated"; }
exports.isBioUpdated = isBioUpdated;
class BioUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = BioUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BioUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.newBio = fields.newBio;
    }
    static reified() { return { typeName: BioUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(BioUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BioUpdated.fromFields(fields), fromFieldsWithTypes: (item) => BioUpdated.fromFieldsWithTypes(item), fromBcs: (data) => BioUpdated.fromBcs(data), bcs: BioUpdated.bcs, fromJSONField: (field) => BioUpdated.fromJSONField(field), fromJSON: (json) => BioUpdated.fromJSON(json), fromSuiParsedData: (content) => BioUpdated.fromSuiParsedData(content), fetch: async (client, id) => BioUpdated.fetch(client, id), new: (fields) => { return new BioUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BioUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(BioUpdated.reified()); }
    static get p() { return BioUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BioUpdated", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_3.String.bcs, new_bio: structs_3.String.bcs
        });
    }
    ;
    static fromFields(fields) { return BioUpdated.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.username), newBio: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.new_bio) }); }
    static fromFieldsWithTypes(item) {
        if (!isBioUpdated(item.type)) {
            throw new Error("not a BioUpdated type");
        }
        return BioUpdated.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.username), newBio: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.new_bio) });
    }
    static fromBcs(data) { return BioUpdated.fromFields(BioUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, username: this.username, newBio: this.newBio,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BioUpdated.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.username), newBio: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.newBio) }); }
    static fromJSON(json) {
        if (json.$typeName !== BioUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BioUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBioUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BioUpdated object`);
    } return BioUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BioUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBioUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BioUpdated object`);
        }
        return BioUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BioUpdated = BioUpdated;
BioUpdated.$typeName = "0x0::hive_profile::BioUpdated";
BioUpdated.$numTypeParams = 0;
/* ============================== BorrowRecord =============================== */
function isBorrowRecord(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::BorrowRecord"; }
exports.isBorrowRecord = isBorrowRecord;
class BorrowRecord {
    constructor(typeArgs, fields) {
        this.$typeName = BorrowRecord.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BorrowRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.owner = fields.owner;
        ;
        this.borrowPriceSui = fields.borrowPriceSui;
        ;
        this.startSec = fields.startSec;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: BorrowRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(BorrowRecord.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BorrowRecord.fromFields(fields), fromFieldsWithTypes: (item) => BorrowRecord.fromFieldsWithTypes(item), fromBcs: (data) => BorrowRecord.fromBcs(data), bcs: BorrowRecord.bcs, fromJSONField: (field) => BorrowRecord.fromJSONField(field), fromJSON: (json) => BorrowRecord.fromJSON(json), fromSuiParsedData: (content) => BorrowRecord.fromSuiParsedData(content), fetch: async (client, id) => BorrowRecord.fetch(client, id), new: (fields) => { return new BorrowRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BorrowRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(BorrowRecord.reified()); }
    static get p() { return BorrowRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BorrowRecord", {
            owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), borrow_price_sui: bcs_1.bcs.u64(), start_sec: bcs_1.bcs.u64(), lockup_duration: bcs_1.bcs.u8(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BorrowRecord.reified().new({ owner: (0, reified_1.decodeFromFields)("address", fields.owner), borrowPriceSui: (0, reified_1.decodeFromFields)("u64", fields.borrow_price_sui), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isBorrowRecord(item.type)) {
            throw new Error("not a BorrowRecord type");
        }
        return BorrowRecord.reified().new({ owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), borrowPriceSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_price_sui), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return BorrowRecord.fromFields(BorrowRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            owner: this.owner, borrowPriceSui: this.borrowPriceSui.toString(), startSec: this.startSec.toString(), lockupDuration: this.lockupDuration, expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BorrowRecord.reified().new({ owner: (0, reified_1.decodeFromJSONField)("address", field.owner), borrowPriceSui: (0, reified_1.decodeFromJSONField)("u64", field.borrowPriceSui), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
    static fromJSON(json) {
        if (json.$typeName !== BorrowRecord.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BorrowRecord.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBorrowRecord(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BorrowRecord object`);
    } return BorrowRecord.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BorrowRecord object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBorrowRecord(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BorrowRecord object`);
        }
        return BorrowRecord.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BorrowRecord = BorrowRecord;
BorrowRecord.$typeName = "0x0::hive_profile::BorrowRecord";
BorrowRecord.$numTypeParams = 0;
/* ============================== DegenHiveYieldHarvested =============================== */
function isDegenHiveYieldHarvested(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::DegenHiveYieldHarvested"; }
exports.isDegenHiveYieldHarvested = isDegenHiveYieldHarvested;
class DegenHiveYieldHarvested {
    constructor(typeArgs, fields) {
        this.$typeName = DegenHiveYieldHarvested.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(DegenHiveYieldHarvested.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.harvesterProfile = fields.harvesterProfile;
        ;
        this.username = fields.username;
        ;
        this.hsuiHarvested = fields.hsuiHarvested;
        ;
        this.gemsHarvested = fields.gemsHarvested;
    }
    static reified() { return { typeName: DegenHiveYieldHarvested.$typeName, fullTypeName: (0, util_1.composeSuiType)(DegenHiveYieldHarvested.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => DegenHiveYieldHarvested.fromFields(fields), fromFieldsWithTypes: (item) => DegenHiveYieldHarvested.fromFieldsWithTypes(item), fromBcs: (data) => DegenHiveYieldHarvested.fromBcs(data), bcs: DegenHiveYieldHarvested.bcs, fromJSONField: (field) => DegenHiveYieldHarvested.fromJSONField(field), fromJSON: (json) => DegenHiveYieldHarvested.fromJSON(json), fromSuiParsedData: (content) => DegenHiveYieldHarvested.fromSuiParsedData(content), fetch: async (client, id) => DegenHiveYieldHarvested.fetch(client, id), new: (fields) => { return new DegenHiveYieldHarvested([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DegenHiveYieldHarvested.reified(); }
    static phantom() { return (0, reified_1.phantom)(DegenHiveYieldHarvested.reified()); }
    static get p() { return DegenHiveYieldHarvested.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DegenHiveYieldHarvested", {
            harvester_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, hsui_harvested: bcs_1.bcs.u64(), gems_harvested: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DegenHiveYieldHarvested.reified().new({ harvesterProfile: (0, reified_1.decodeFromFields)("address", fields.harvester_profile), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), hsuiHarvested: (0, reified_1.decodeFromFields)("u64", fields.hsui_harvested), gemsHarvested: (0, reified_1.decodeFromFields)("u64", fields.gems_harvested) }); }
    static fromFieldsWithTypes(item) {
        if (!isDegenHiveYieldHarvested(item.type)) {
            throw new Error("not a DegenHiveYieldHarvested type");
        }
        return DegenHiveYieldHarvested.reified().new({ harvesterProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.harvester_profile), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), hsuiHarvested: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hsui_harvested), gemsHarvested: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_harvested) });
    }
    static fromBcs(data) { return DegenHiveYieldHarvested.fromFields(DegenHiveYieldHarvested.bcs.parse(data)); }
    toJSONField() {
        return {
            harvesterProfile: this.harvesterProfile, username: this.username, hsuiHarvested: this.hsuiHarvested.toString(), gemsHarvested: this.gemsHarvested.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DegenHiveYieldHarvested.reified().new({ harvesterProfile: (0, reified_1.decodeFromJSONField)("address", field.harvesterProfile), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), hsuiHarvested: (0, reified_1.decodeFromJSONField)("u64", field.hsuiHarvested), gemsHarvested: (0, reified_1.decodeFromJSONField)("u64", field.gemsHarvested) }); }
    static fromJSON(json) {
        if (json.$typeName !== DegenHiveYieldHarvested.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DegenHiveYieldHarvested.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDegenHiveYieldHarvested(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DegenHiveYieldHarvested object`);
    } return DegenHiveYieldHarvested.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DegenHiveYieldHarvested object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDegenHiveYieldHarvested(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DegenHiveYieldHarvested object`);
        }
        return DegenHiveYieldHarvested.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DegenHiveYieldHarvested = DegenHiveYieldHarvested;
DegenHiveYieldHarvested.$typeName = "0x0::hive_profile::DegenHiveYieldHarvested";
DegenHiveYieldHarvested.$numTypeParams = 0;
/* ============================== DepositHSuiForProfile =============================== */
function isDepositHSuiForProfile(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::DepositHSuiForProfile"; }
exports.isDepositHSuiForProfile = isDepositHSuiForProfile;
class DepositHSuiForProfile {
    constructor(typeArgs, fields) {
        this.$typeName = DepositHSuiForProfile.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(DepositHSuiForProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.hsuiDeposited = fields.hsuiDeposited;
        ;
        this.depositorAddr = fields.depositorAddr;
    }
    static reified() { return { typeName: DepositHSuiForProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(DepositHSuiForProfile.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => DepositHSuiForProfile.fromFields(fields), fromFieldsWithTypes: (item) => DepositHSuiForProfile.fromFieldsWithTypes(item), fromBcs: (data) => DepositHSuiForProfile.fromBcs(data), bcs: DepositHSuiForProfile.bcs, fromJSONField: (field) => DepositHSuiForProfile.fromJSONField(field), fromJSON: (json) => DepositHSuiForProfile.fromJSON(json), fromSuiParsedData: (content) => DepositHSuiForProfile.fromSuiParsedData(content), fetch: async (client, id) => DepositHSuiForProfile.fetch(client, id), new: (fields) => { return new DepositHSuiForProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DepositHSuiForProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(DepositHSuiForProfile.reified()); }
    static get p() { return DepositHSuiForProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DepositHSuiForProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), hsui_deposited: bcs_1.bcs.u64(), depositor_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return DepositHSuiForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), hsuiDeposited: (0, reified_1.decodeFromFields)("u64", fields.hsui_deposited), depositorAddr: (0, reified_1.decodeFromFields)("address", fields.depositor_addr) }); }
    static fromFieldsWithTypes(item) {
        if (!isDepositHSuiForProfile(item.type)) {
            throw new Error("not a DepositHSuiForProfile type");
        }
        return DepositHSuiForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), hsuiDeposited: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hsui_deposited), depositorAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.depositor_addr) });
    }
    static fromBcs(data) { return DepositHSuiForProfile.fromFields(DepositHSuiForProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, hsuiDeposited: this.hsuiDeposited.toString(), depositorAddr: this.depositorAddr,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DepositHSuiForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), hsuiDeposited: (0, reified_1.decodeFromJSONField)("u64", field.hsuiDeposited), depositorAddr: (0, reified_1.decodeFromJSONField)("address", field.depositorAddr) }); }
    static fromJSON(json) {
        if (json.$typeName !== DepositHSuiForProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DepositHSuiForProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDepositHSuiForProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DepositHSuiForProfile object`);
    } return DepositHSuiForProfile.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DepositHSuiForProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDepositHSuiForProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DepositHSuiForProfile object`);
        }
        return DepositHSuiForProfile.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DepositHSuiForProfile = DepositHSuiForProfile;
DepositHSuiForProfile.$typeName = "0x0::hive_profile::DepositHSuiForProfile";
DepositHSuiForProfile.$numTypeParams = 0;
/* ============================== ExecutedListing =============================== */
function isExecutedListing(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x0::hive_profile::ExecutedListing<"); }
exports.isExecutedListing = isExecutedListing;
class ExecutedListing {
    constructor(typeArgs, fields) {
        this.$typeName = ExecutedListing.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ExecutedListing.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByProfile = fields.listedByProfile;
        ;
        this.hiveAsset = fields.hiveAsset;
        ;
        this.version = fields.version;
        ;
        this.wasSaleListing = fields.wasSaleListing;
        ;
        this.balance = fields.balance;
        ;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.executedPriceInHsui = fields.executedPriceInHsui;
        ;
        this.executedPriceInSui = fields.executedPriceInSui;
        ;
        this.borrowPeriodStartSec = fields.borrowPeriodStartSec;
        ;
        this.borrowPeriodEndSec = fields.borrowPeriodEndSec;
    }
    static reified(X) { return { typeName: ExecutedListing.$typeName, fullTypeName: (0, util_1.composeSuiType)(ExecutedListing.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], reifiedTypeArgs: [X], fromFields: (fields) => ExecutedListing.fromFields(X, fields), fromFieldsWithTypes: (item) => ExecutedListing.fromFieldsWithTypes(X, item), fromBcs: (data) => ExecutedListing.fromBcs(X, data), bcs: ExecutedListing.bcs, fromJSONField: (field) => ExecutedListing.fromJSONField(X, field), fromJSON: (json) => ExecutedListing.fromJSON(X, json), fromSuiParsedData: (content) => ExecutedListing.fromSuiParsedData(X, content), fetch: async (client, id) => ExecutedListing.fetch(client, X, id), new: (fields) => { return new ExecutedListing([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return ExecutedListing.reified; }
    static phantom(X) { return (0, reified_1.phantom)(ExecutedListing.reified(X)); }
    static get p() { return ExecutedListing.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("ExecutedListing", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), hive_asset: structs_2.Option.bcs(HiveAsset.bcs), version: bcs_1.bcs.u64(), was_sale_listing: bcs_1.bcs.bool(), balance: structs_2.Option.bcs(structs_4.Balance.bcs), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), executed_price_in_hsui: bcs_1.bcs.u64(), executed_price_in_sui: bcs_1.bcs.u64(), borrow_period_start_sec: bcs_1.bcs.u64(), borrow_period_end_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return ExecutedListing.reified(typeArg).new({ listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile), hiveAsset: (0, reified_1.decodeFromFields)(structs_2.Option.reified(HiveAsset.reified()), fields.hive_asset), version: (0, reified_1.decodeFromFields)("u64", fields.version), wasSaleListing: (0, reified_1.decodeFromFields)("bool", fields.was_sale_listing), balance: (0, reified_1.decodeFromFields)(structs_2.Option.reified(structs_4.Balance.reified(typeArg)), fields.balance), bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), executedPriceInHsui: (0, reified_1.decodeFromFields)("u64", fields.executed_price_in_hsui), executedPriceInSui: (0, reified_1.decodeFromFields)("u64", fields.executed_price_in_sui), borrowPeriodStartSec: (0, reified_1.decodeFromFields)("u64", fields.borrow_period_start_sec), borrowPeriodEndSec: (0, reified_1.decodeFromFields)("u64", fields.borrow_period_end_sec) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isExecutedListing(item.type)) {
            throw new Error("not a ExecutedListing type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ExecutedListing.reified(typeArg).new({ listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile), hiveAsset: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(HiveAsset.reified()), item.fields.hive_asset), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), wasSaleListing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.was_sale_listing), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(structs_4.Balance.reified(typeArg)), item.fields.balance), bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), executedPriceInHsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.executed_price_in_hsui), executedPriceInSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.executed_price_in_sui), borrowPeriodStartSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_period_start_sec), borrowPeriodEndSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_period_end_sec) });
    }
    static fromBcs(typeArg, data) { return ExecutedListing.fromFields(typeArg, ExecutedListing.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByProfile: this.listedByProfile, hiveAsset: (0, reified_1.fieldToJSON)(`0x1::option::Option<0x0::hive_profile::HiveAsset>`, this.hiveAsset), version: this.version.toString(), wasSaleListing: this.wasSaleListing, balance: (0, reified_1.fieldToJSON)(`0x1::option::Option<0x2::balance::Balance<${this.$typeArgs[0]}>>`, this.balance), bidderProfile: this.bidderProfile, executedPriceInHsui: this.executedPriceInHsui.toString(), executedPriceInSui: this.executedPriceInSui.toString(), borrowPeriodStartSec: this.borrowPeriodStartSec.toString(), borrowPeriodEndSec: this.borrowPeriodEndSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return ExecutedListing.reified(typeArg).new({ listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile), hiveAsset: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(HiveAsset.reified()), field.hiveAsset), version: (0, reified_1.decodeFromJSONField)("u64", field.version), wasSaleListing: (0, reified_1.decodeFromJSONField)("bool", field.wasSaleListing), balance: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(structs_4.Balance.reified(typeArg)), field.balance), bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), executedPriceInHsui: (0, reified_1.decodeFromJSONField)("u64", field.executedPriceInHsui), executedPriceInSui: (0, reified_1.decodeFromJSONField)("u64", field.executedPriceInSui), borrowPeriodStartSec: (0, reified_1.decodeFromJSONField)("u64", field.borrowPeriodStartSec), borrowPeriodEndSec: (0, reified_1.decodeFromJSONField)("u64", field.borrowPeriodEndSec) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== ExecutedListing.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ExecutedListing.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ExecutedListing.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExecutedListing(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ExecutedListing object`);
    } return ExecutedListing.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ExecutedListing object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExecutedListing(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExecutedListing object`);
        }
        return ExecutedListing.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ExecutedListing = ExecutedListing;
ExecutedListing.$typeName = "0x0::hive_profile::ExecutedListing";
ExecutedListing.$numTypeParams = 1;
/* ============================== ExecutedListingDestroyed =============================== */
function isExecutedListingDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ExecutedListingDestroyed"; }
exports.isExecutedListingDestroyed = isExecutedListingDestroyed;
class ExecutedListingDestroyed {
    constructor(typeArgs, fields) {
        this.$typeName = ExecutedListingDestroyed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ExecutedListingDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.executedPriceInHsui = fields.executedPriceInHsui;
        ;
        this.executedPriceInSui = fields.executedPriceInSui;
        ;
        this.listedByProfile = fields.listedByProfile;
    }
    static reified() { return { typeName: ExecutedListingDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(ExecutedListingDestroyed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ExecutedListingDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => ExecutedListingDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => ExecutedListingDestroyed.fromBcs(data), bcs: ExecutedListingDestroyed.bcs, fromJSONField: (field) => ExecutedListingDestroyed.fromJSONField(field), fromJSON: (json) => ExecutedListingDestroyed.fromJSON(json), fromSuiParsedData: (content) => ExecutedListingDestroyed.fromSuiParsedData(content), fetch: async (client, id) => ExecutedListingDestroyed.fetch(client, id), new: (fields) => { return new ExecutedListingDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ExecutedListingDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(ExecutedListingDestroyed.reified()); }
    static get p() { return ExecutedListingDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ExecutedListingDestroyed", {
            version: bcs_1.bcs.u64(), executed_price_in_hsui: bcs_1.bcs.u64(), executed_price_in_sui: bcs_1.bcs.u64(), listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return ExecutedListingDestroyed.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), executedPriceInHsui: (0, reified_1.decodeFromFields)("u64", fields.executed_price_in_hsui), executedPriceInSui: (0, reified_1.decodeFromFields)("u64", fields.executed_price_in_sui), listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isExecutedListingDestroyed(item.type)) {
            throw new Error("not a ExecutedListingDestroyed type");
        }
        return ExecutedListingDestroyed.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), executedPriceInHsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.executed_price_in_hsui), executedPriceInSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.executed_price_in_sui), listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile) });
    }
    static fromBcs(data) { return ExecutedListingDestroyed.fromFields(ExecutedListingDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), executedPriceInHsui: this.executedPriceInHsui.toString(), executedPriceInSui: this.executedPriceInSui.toString(), listedByProfile: this.listedByProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ExecutedListingDestroyed.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), executedPriceInHsui: (0, reified_1.decodeFromJSONField)("u64", field.executedPriceInHsui), executedPriceInSui: (0, reified_1.decodeFromJSONField)("u64", field.executedPriceInSui), listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== ExecutedListingDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ExecutedListingDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExecutedListingDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ExecutedListingDestroyed object`);
    } return ExecutedListingDestroyed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ExecutedListingDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExecutedListingDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExecutedListingDestroyed object`);
        }
        return ExecutedListingDestroyed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ExecutedListingDestroyed = ExecutedListingDestroyed;
ExecutedListingDestroyed.$typeName = "0x0::hive_profile::ExecutedListingDestroyed";
ExecutedListingDestroyed.$numTypeParams = 0;
/* ============================== ExitHiveOfProfile =============================== */
function isExitHiveOfProfile(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ExitHiveOfProfile"; }
exports.isExitHiveOfProfile = isExitHiveOfProfile;
class ExitHiveOfProfile {
    constructor(typeArgs, fields) {
        this.$typeName = ExitHiveOfProfile.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ExitHiveOfProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.subscriberProfileAddr = fields.subscriberProfileAddr;
        ;
        this.unsubscribedFromProfileAddr = fields.unsubscribedFromProfileAddr;
        ;
        this.subscriberUsername = fields.subscriberUsername;
        ;
        this.unhiveOwnerUsername = fields.unhiveOwnerUsername;
        ;
        this.recordsDeleted = fields.recordsDeleted;
    }
    static reified() { return { typeName: ExitHiveOfProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(ExitHiveOfProfile.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ExitHiveOfProfile.fromFields(fields), fromFieldsWithTypes: (item) => ExitHiveOfProfile.fromFieldsWithTypes(item), fromBcs: (data) => ExitHiveOfProfile.fromBcs(data), bcs: ExitHiveOfProfile.bcs, fromJSONField: (field) => ExitHiveOfProfile.fromJSONField(field), fromJSON: (json) => ExitHiveOfProfile.fromJSON(json), fromSuiParsedData: (content) => ExitHiveOfProfile.fromSuiParsedData(content), fetch: async (client, id) => ExitHiveOfProfile.fetch(client, id), new: (fields) => { return new ExitHiveOfProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ExitHiveOfProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(ExitHiveOfProfile.reified()); }
    static get p() { return ExitHiveOfProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ExitHiveOfProfile", {
            subscriber_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), unsubscribed_from_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), subscriber_username: structs_3.String.bcs, unhive_owner_username: structs_3.String.bcs, records_deleted: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return ExitHiveOfProfile.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFields)("address", fields.subscriber_profile_addr), unsubscribedFromProfileAddr: (0, reified_1.decodeFromFields)("address", fields.unsubscribed_from_profile_addr), subscriberUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.subscriber_username), unhiveOwnerUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.unhive_owner_username), recordsDeleted: (0, reified_1.decodeFromFields)("bool", fields.records_deleted) }); }
    static fromFieldsWithTypes(item) {
        if (!isExitHiveOfProfile(item.type)) {
            throw new Error("not a ExitHiveOfProfile type");
        }
        return ExitHiveOfProfile.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscriber_profile_addr), unsubscribedFromProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.unsubscribed_from_profile_addr), subscriberUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.subscriber_username), unhiveOwnerUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.unhive_owner_username), recordsDeleted: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.records_deleted) });
    }
    static fromBcs(data) { return ExitHiveOfProfile.fromFields(ExitHiveOfProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            subscriberProfileAddr: this.subscriberProfileAddr, unsubscribedFromProfileAddr: this.unsubscribedFromProfileAddr, subscriberUsername: this.subscriberUsername, unhiveOwnerUsername: this.unhiveOwnerUsername, recordsDeleted: this.recordsDeleted,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ExitHiveOfProfile.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.subscriberProfileAddr), unsubscribedFromProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.unsubscribedFromProfileAddr), subscriberUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.subscriberUsername), unhiveOwnerUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.unhiveOwnerUsername), recordsDeleted: (0, reified_1.decodeFromJSONField)("bool", field.recordsDeleted) }); }
    static fromJSON(json) {
        if (json.$typeName !== ExitHiveOfProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ExitHiveOfProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExitHiveOfProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ExitHiveOfProfile object`);
    } return ExitHiveOfProfile.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ExitHiveOfProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExitHiveOfProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExitHiveOfProfile object`);
        }
        return ExitHiveOfProfile.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ExitHiveOfProfile = ExitHiveOfProfile;
ExitHiveOfProfile.$typeName = "0x0::hive_profile::ExitHiveOfProfile";
ExitHiveOfProfile.$numTypeParams = 0;
/* ============================== GemAddedToProfile =============================== */
function isGemAddedToProfile(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::GemAddedToProfile"; }
exports.isGemAddedToProfile = isGemAddedToProfile;
class GemAddedToProfile {
    constructor(typeArgs, fields) {
        this.$typeName = GemAddedToProfile.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(GemAddedToProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.depositedGems = fields.depositedGems;
    }
    static reified() { return { typeName: GemAddedToProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(GemAddedToProfile.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => GemAddedToProfile.fromFields(fields), fromFieldsWithTypes: (item) => GemAddedToProfile.fromFieldsWithTypes(item), fromBcs: (data) => GemAddedToProfile.fromBcs(data), bcs: GemAddedToProfile.bcs, fromJSONField: (field) => GemAddedToProfile.fromJSONField(field), fromJSON: (json) => GemAddedToProfile.fromJSON(json), fromSuiParsedData: (content) => GemAddedToProfile.fromSuiParsedData(content), fetch: async (client, id) => GemAddedToProfile.fetch(client, id), new: (fields) => { return new GemAddedToProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GemAddedToProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(GemAddedToProfile.reified()); }
    static get p() { return GemAddedToProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GemAddedToProfile", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), deposited_gems: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return GemAddedToProfile.reified().new({ username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), depositedGems: (0, reified_1.decodeFromFields)("u64", fields.deposited_gems) }); }
    static fromFieldsWithTypes(item) {
        if (!isGemAddedToProfile(item.type)) {
            throw new Error("not a GemAddedToProfile type");
        }
        return GemAddedToProfile.reified().new({ username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), depositedGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposited_gems) });
    }
    static fromBcs(data) { return GemAddedToProfile.fromFields(GemAddedToProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            username: this.username, profileAddr: this.profileAddr, depositedGems: this.depositedGems.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GemAddedToProfile.reified().new({ username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), depositedGems: (0, reified_1.decodeFromJSONField)("u64", field.depositedGems) }); }
    static fromJSON(json) {
        if (json.$typeName !== GemAddedToProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GemAddedToProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGemAddedToProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GemAddedToProfile object`);
    } return GemAddedToProfile.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GemAddedToProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGemAddedToProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GemAddedToProfile object`);
        }
        return GemAddedToProfile.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GemAddedToProfile = GemAddedToProfile;
GemAddedToProfile.$typeName = "0x0::hive_profile::GemAddedToProfile";
GemAddedToProfile.$numTypeParams = 0;
/* ============================== GemWithdrawnFromProfile =============================== */
function isGemWithdrawnFromProfile(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::GemWithdrawnFromProfile"; }
exports.isGemWithdrawnFromProfile = isGemWithdrawnFromProfile;
class GemWithdrawnFromProfile {
    constructor(typeArgs, fields) {
        this.$typeName = GemWithdrawnFromProfile.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(GemWithdrawnFromProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.withdrawnGems = fields.withdrawnGems;
    }
    static reified() { return { typeName: GemWithdrawnFromProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(GemWithdrawnFromProfile.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => GemWithdrawnFromProfile.fromFields(fields), fromFieldsWithTypes: (item) => GemWithdrawnFromProfile.fromFieldsWithTypes(item), fromBcs: (data) => GemWithdrawnFromProfile.fromBcs(data), bcs: GemWithdrawnFromProfile.bcs, fromJSONField: (field) => GemWithdrawnFromProfile.fromJSONField(field), fromJSON: (json) => GemWithdrawnFromProfile.fromJSON(json), fromSuiParsedData: (content) => GemWithdrawnFromProfile.fromSuiParsedData(content), fetch: async (client, id) => GemWithdrawnFromProfile.fetch(client, id), new: (fields) => { return new GemWithdrawnFromProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GemWithdrawnFromProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(GemWithdrawnFromProfile.reified()); }
    static get p() { return GemWithdrawnFromProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GemWithdrawnFromProfile", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), withdrawn_gems: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return GemWithdrawnFromProfile.reified().new({ username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), withdrawnGems: (0, reified_1.decodeFromFields)("u64", fields.withdrawn_gems) }); }
    static fromFieldsWithTypes(item) {
        if (!isGemWithdrawnFromProfile(item.type)) {
            throw new Error("not a GemWithdrawnFromProfile type");
        }
        return GemWithdrawnFromProfile.reified().new({ username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), withdrawnGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.withdrawn_gems) });
    }
    static fromBcs(data) { return GemWithdrawnFromProfile.fromFields(GemWithdrawnFromProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            username: this.username, profileAddr: this.profileAddr, withdrawnGems: this.withdrawnGems.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GemWithdrawnFromProfile.reified().new({ username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), withdrawnGems: (0, reified_1.decodeFromJSONField)("u64", field.withdrawnGems) }); }
    static fromJSON(json) {
        if (json.$typeName !== GemWithdrawnFromProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GemWithdrawnFromProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGemWithdrawnFromProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GemWithdrawnFromProfile object`);
    } return GemWithdrawnFromProfile.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GemWithdrawnFromProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGemWithdrawnFromProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GemWithdrawnFromProfile object`);
        }
        return GemWithdrawnFromProfile.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GemWithdrawnFromProfile = GemWithdrawnFromProfile;
GemWithdrawnFromProfile.$typeName = "0x0::hive_profile::GemWithdrawnFromProfile";
GemWithdrawnFromProfile.$numTypeParams = 0;
/* ============================== HIVE_PROFILE =============================== */
function isHIVE_PROFILE(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HIVE_PROFILE"; }
exports.isHIVE_PROFILE = isHIVE_PROFILE;
class HIVE_PROFILE {
    constructor(typeArgs, fields) {
        this.$typeName = HIVE_PROFILE.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HIVE_PROFILE.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: HIVE_PROFILE.$typeName, fullTypeName: (0, util_1.composeSuiType)(HIVE_PROFILE.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HIVE_PROFILE.fromFields(fields), fromFieldsWithTypes: (item) => HIVE_PROFILE.fromFieldsWithTypes(item), fromBcs: (data) => HIVE_PROFILE.fromBcs(data), bcs: HIVE_PROFILE.bcs, fromJSONField: (field) => HIVE_PROFILE.fromJSONField(field), fromJSON: (json) => HIVE_PROFILE.fromJSON(json), fromSuiParsedData: (content) => HIVE_PROFILE.fromSuiParsedData(content), fetch: async (client, id) => HIVE_PROFILE.fetch(client, id), new: (fields) => { return new HIVE_PROFILE([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HIVE_PROFILE.reified(); }
    static phantom() { return (0, reified_1.phantom)(HIVE_PROFILE.reified()); }
    static get p() { return HIVE_PROFILE.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HIVE_PROFILE", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return HIVE_PROFILE.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isHIVE_PROFILE(item.type)) {
            throw new Error("not a HIVE_PROFILE type");
        }
        return HIVE_PROFILE.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return HIVE_PROFILE.fromFields(HIVE_PROFILE.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HIVE_PROFILE.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== HIVE_PROFILE.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HIVE_PROFILE.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHIVE_PROFILE(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HIVE_PROFILE object`);
    } return HIVE_PROFILE.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HIVE_PROFILE object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHIVE_PROFILE(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HIVE_PROFILE object`);
        }
        return HIVE_PROFILE.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HIVE_PROFILE = HIVE_PROFILE;
HIVE_PROFILE.$typeName = "0x0::hive_profile::HIVE_PROFILE";
HIVE_PROFILE.$numTypeParams = 0;
/* ============================== HSuiAddedForHarvest =============================== */
function isHSuiAddedForHarvest(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HSuiAddedForHarvest"; }
exports.isHSuiAddedForHarvest = isHSuiAddedForHarvest;
class HSuiAddedForHarvest {
    constructor(typeArgs, fields) {
        this.$typeName = HSuiAddedForHarvest.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HSuiAddedForHarvest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.yieldAdded = fields.yieldAdded;
    }
    static reified() { return { typeName: HSuiAddedForHarvest.$typeName, fullTypeName: (0, util_1.composeSuiType)(HSuiAddedForHarvest.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HSuiAddedForHarvest.fromFields(fields), fromFieldsWithTypes: (item) => HSuiAddedForHarvest.fromFieldsWithTypes(item), fromBcs: (data) => HSuiAddedForHarvest.fromBcs(data), bcs: HSuiAddedForHarvest.bcs, fromJSONField: (field) => HSuiAddedForHarvest.fromJSONField(field), fromJSON: (json) => HSuiAddedForHarvest.fromJSON(json), fromSuiParsedData: (content) => HSuiAddedForHarvest.fromSuiParsedData(content), fetch: async (client, id) => HSuiAddedForHarvest.fetch(client, id), new: (fields) => { return new HSuiAddedForHarvest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HSuiAddedForHarvest.reified(); }
    static phantom() { return (0, reified_1.phantom)(HSuiAddedForHarvest.reified()); }
    static get p() { return HSuiAddedForHarvest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HSuiAddedForHarvest", {
            yield_added: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HSuiAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromFields)("u64", fields.yield_added) }); }
    static fromFieldsWithTypes(item) {
        if (!isHSuiAddedForHarvest(item.type)) {
            throw new Error("not a HSuiAddedForHarvest type");
        }
        return HSuiAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.yield_added) });
    }
    static fromBcs(data) { return HSuiAddedForHarvest.fromFields(HSuiAddedForHarvest.bcs.parse(data)); }
    toJSONField() {
        return {
            yieldAdded: this.yieldAdded.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HSuiAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromJSONField)("u64", field.yieldAdded) }); }
    static fromJSON(json) {
        if (json.$typeName !== HSuiAddedForHarvest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HSuiAddedForHarvest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHSuiAddedForHarvest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HSuiAddedForHarvest object`);
    } return HSuiAddedForHarvest.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HSuiAddedForHarvest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHSuiAddedForHarvest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HSuiAddedForHarvest object`);
        }
        return HSuiAddedForHarvest.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HSuiAddedForHarvest = HSuiAddedForHarvest;
HSuiAddedForHarvest.$typeName = "0x0::hive_profile::HSuiAddedForHarvest";
HSuiAddedForHarvest.$numTypeParams = 0;
/* ============================== HSuiDisperser =============================== */
function isHSuiDisperser(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x0::hive_profile::HSuiDisperser<"); }
exports.isHSuiDisperser = isHSuiDisperser;
class HSuiDisperser {
    constructor(typeArgs, fields) {
        this.$typeName = HSuiDisperser.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HSuiDisperser.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.incomingHsuiForAssets = fields.incomingHsuiForAssets;
        ;
        this.hsuiForAssets = fields.hsuiForAssets;
        ;
        this.globalDispersalIndex = fields.globalDispersalIndex;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified(X) { return { typeName: HSuiDisperser.$typeName, fullTypeName: (0, util_1.composeSuiType)(HSuiDisperser.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], reifiedTypeArgs: [X], fromFields: (fields) => HSuiDisperser.fromFields(X, fields), fromFieldsWithTypes: (item) => HSuiDisperser.fromFieldsWithTypes(X, item), fromBcs: (data) => HSuiDisperser.fromBcs(X, data), bcs: HSuiDisperser.bcs, fromJSONField: (field) => HSuiDisperser.fromJSONField(X, field), fromJSON: (json) => HSuiDisperser.fromJSON(X, json), fromSuiParsedData: (content) => HSuiDisperser.fromSuiParsedData(X, content), fetch: async (client, id) => HSuiDisperser.fetch(client, X, id), new: (fields) => { return new HSuiDisperser([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return HSuiDisperser.reified; }
    static phantom(X) { return (0, reified_1.phantom)(HSuiDisperser.reified(X)); }
    static get p() { return HSuiDisperser.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("HSuiDisperser", {
            id: structs_6.UID.bcs, incoming_hsui_for_assets: structs_4.Balance.bcs, hsui_for_assets: structs_4.Balance.bcs, global_dispersal_index: bcs_1.bcs.u256(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return HSuiDisperser.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), incomingHsuiForAssets: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.incoming_hsui_for_assets), hsuiForAssets: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.hsui_for_assets), globalDispersalIndex: (0, reified_1.decodeFromFields)("u256", fields.global_dispersal_index), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isHSuiDisperser(item.type)) {
            throw new Error("not a HSuiDisperser type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return HSuiDisperser.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), incomingHsuiForAssets: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.incoming_hsui_for_assets), hsuiForAssets: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.hsui_for_assets), globalDispersalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.global_dispersal_index), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(typeArg, data) { return HSuiDisperser.fromFields(typeArg, HSuiDisperser.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, incomingHsuiForAssets: this.incomingHsuiForAssets.toJSONField(), hsuiForAssets: this.hsuiForAssets.toJSONField(), globalDispersalIndex: this.globalDispersalIndex.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return HSuiDisperser.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), incomingHsuiForAssets: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.incomingHsuiForAssets), hsuiForAssets: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.hsuiForAssets), globalDispersalIndex: (0, reified_1.decodeFromJSONField)("u256", field.globalDispersalIndex), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== HSuiDisperser.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(HSuiDisperser.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return HSuiDisperser.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHSuiDisperser(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HSuiDisperser object`);
    } return HSuiDisperser.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HSuiDisperser object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHSuiDisperser(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HSuiDisperser object`);
        }
        return HSuiDisperser.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HSuiDisperser = HSuiDisperser;
HSuiDisperser.$typeName = "0x0::hive_profile::HSuiDisperser";
HSuiDisperser.$numTypeParams = 1;
/* ============================== HarvestRewardsForAsset =============================== */
function isHarvestRewardsForAsset(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HarvestRewardsForAsset"; }
exports.isHarvestRewardsForAsset = isHarvestRewardsForAsset;
class HarvestRewardsForAsset {
    constructor(typeArgs, fields) {
        this.$typeName = HarvestRewardsForAsset.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HarvestRewardsForAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.hsuiHarvested = fields.hsuiHarvested;
        ;
        this.gemsHarvested = fields.gemsHarvested;
    }
    static reified() { return { typeName: HarvestRewardsForAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(HarvestRewardsForAsset.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HarvestRewardsForAsset.fromFields(fields), fromFieldsWithTypes: (item) => HarvestRewardsForAsset.fromFieldsWithTypes(item), fromBcs: (data) => HarvestRewardsForAsset.fromBcs(data), bcs: HarvestRewardsForAsset.bcs, fromJSONField: (field) => HarvestRewardsForAsset.fromJSONField(field), fromJSON: (json) => HarvestRewardsForAsset.fromJSON(json), fromSuiParsedData: (content) => HarvestRewardsForAsset.fromSuiParsedData(content), fetch: async (client, id) => HarvestRewardsForAsset.fetch(client, id), new: (fields) => { return new HarvestRewardsForAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HarvestRewardsForAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(HarvestRewardsForAsset.reified()); }
    static get p() { return HarvestRewardsForAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HarvestRewardsForAsset", {
            version: bcs_1.bcs.u64(), hsui_harvested: bcs_1.bcs.u64(), gems_harvested: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HarvestRewardsForAsset.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), hsuiHarvested: (0, reified_1.decodeFromFields)("u64", fields.hsui_harvested), gemsHarvested: (0, reified_1.decodeFromFields)("u64", fields.gems_harvested) }); }
    static fromFieldsWithTypes(item) {
        if (!isHarvestRewardsForAsset(item.type)) {
            throw new Error("not a HarvestRewardsForAsset type");
        }
        return HarvestRewardsForAsset.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), hsuiHarvested: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hsui_harvested), gemsHarvested: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_harvested) });
    }
    static fromBcs(data) { return HarvestRewardsForAsset.fromFields(HarvestRewardsForAsset.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), hsuiHarvested: this.hsuiHarvested.toString(), gemsHarvested: this.gemsHarvested.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HarvestRewardsForAsset.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), hsuiHarvested: (0, reified_1.decodeFromJSONField)("u64", field.hsuiHarvested), gemsHarvested: (0, reified_1.decodeFromJSONField)("u64", field.gemsHarvested) }); }
    static fromJSON(json) {
        if (json.$typeName !== HarvestRewardsForAsset.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HarvestRewardsForAsset.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHarvestRewardsForAsset(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HarvestRewardsForAsset object`);
    } return HarvestRewardsForAsset.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HarvestRewardsForAsset object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHarvestRewardsForAsset(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HarvestRewardsForAsset object`);
        }
        return HarvestRewardsForAsset.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HarvestRewardsForAsset = HarvestRewardsForAsset;
HarvestRewardsForAsset.$typeName = "0x0::hive_profile::HarvestRewardsForAsset";
HarvestRewardsForAsset.$numTypeParams = 0;
/* ============================== HighestBidListingUnsold =============================== */
function isHighestBidListingUnsold(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HighestBidListingUnsold"; }
exports.isHighestBidListingUnsold = isHighestBidListingUnsold;
class HighestBidListingUnsold {
    constructor(typeArgs, fields) {
        this.$typeName = HighestBidListingUnsold.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HighestBidListingUnsold.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.listedByProfile = fields.listedByProfile;
    }
    static reified() { return { typeName: HighestBidListingUnsold.$typeName, fullTypeName: (0, util_1.composeSuiType)(HighestBidListingUnsold.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HighestBidListingUnsold.fromFields(fields), fromFieldsWithTypes: (item) => HighestBidListingUnsold.fromFieldsWithTypes(item), fromBcs: (data) => HighestBidListingUnsold.fromBcs(data), bcs: HighestBidListingUnsold.bcs, fromJSONField: (field) => HighestBidListingUnsold.fromJSONField(field), fromJSON: (json) => HighestBidListingUnsold.fromJSON(json), fromSuiParsedData: (content) => HighestBidListingUnsold.fromSuiParsedData(content), fetch: async (client, id) => HighestBidListingUnsold.fetch(client, id), new: (fields) => { return new HighestBidListingUnsold([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HighestBidListingUnsold.reified(); }
    static phantom() { return (0, reified_1.phantom)(HighestBidListingUnsold.reified()); }
    static get p() { return HighestBidListingUnsold.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HighestBidListingUnsold", {
            version: bcs_1.bcs.u64(), listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return HighestBidListingUnsold.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isHighestBidListingUnsold(item.type)) {
            throw new Error("not a HighestBidListingUnsold type");
        }
        return HighestBidListingUnsold.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile) });
    }
    static fromBcs(data) { return HighestBidListingUnsold.fromFields(HighestBidListingUnsold.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), listedByProfile: this.listedByProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HighestBidListingUnsold.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== HighestBidListingUnsold.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HighestBidListingUnsold.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHighestBidListingUnsold(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HighestBidListingUnsold object`);
    } return HighestBidListingUnsold.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HighestBidListingUnsold object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHighestBidListingUnsold(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HighestBidListingUnsold object`);
        }
        return HighestBidListingUnsold.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HighestBidListingUnsold = HighestBidListingUnsold;
HighestBidListingUnsold.$typeName = "0x0::hive_profile::HighestBidListingUnsold";
HighestBidListingUnsold.$numTypeParams = 0;
/* ============================== HiveAccessPaymentProcessed =============================== */
function isHiveAccessPaymentProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveAccessPaymentProcessed"; }
exports.isHiveAccessPaymentProcessed = isHiveAccessPaymentProcessed;
class HiveAccessPaymentProcessed {
    constructor(typeArgs, fields) {
        this.$typeName = HiveAccessPaymentProcessed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAccessPaymentProcessed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.subscriberProfileAddr = fields.subscriberProfileAddr;
        ;
        this.hiveOwnerProfile = fields.hiveOwnerProfile;
        ;
        this.accessType = fields.accessType;
        ;
        this.accessCost = fields.accessCost;
        ;
        this.hiveTwapPrice = fields.hiveTwapPrice;
        ;
        this.gemsToTransferAmt = fields.gemsToTransferAmt;
        ;
        this.totalRoyaltyAmt = fields.totalRoyaltyAmt;
        ;
        this.treasuryAmt = fields.treasuryAmt;
        ;
        this.gemsBurnt = fields.gemsBurnt;
    }
    static reified() { return { typeName: HiveAccessPaymentProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAccessPaymentProcessed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveAccessPaymentProcessed.fromFields(fields), fromFieldsWithTypes: (item) => HiveAccessPaymentProcessed.fromFieldsWithTypes(item), fromBcs: (data) => HiveAccessPaymentProcessed.fromBcs(data), bcs: HiveAccessPaymentProcessed.bcs, fromJSONField: (field) => HiveAccessPaymentProcessed.fromJSONField(field), fromJSON: (json) => HiveAccessPaymentProcessed.fromJSON(json), fromSuiParsedData: (content) => HiveAccessPaymentProcessed.fromSuiParsedData(content), fetch: async (client, id) => HiveAccessPaymentProcessed.fetch(client, id), new: (fields) => { return new HiveAccessPaymentProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAccessPaymentProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAccessPaymentProcessed.reified()); }
    static get p() { return HiveAccessPaymentProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAccessPaymentProcessed", {
            subscriber_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), hive_owner_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), access_type: bcs_1.bcs.u8(), access_cost: bcs_1.bcs.u64(), hive_twap_price: bcs_1.bcs.u256(), gems_to_transfer_amt: bcs_1.bcs.u64(), total_royalty_amt: bcs_1.bcs.u64(), treasury_amt: bcs_1.bcs.u64(), gems_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAccessPaymentProcessed.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFields)("address", fields.subscriber_profile_addr), hiveOwnerProfile: (0, reified_1.decodeFromFields)("address", fields.hive_owner_profile), accessType: (0, reified_1.decodeFromFields)("u8", fields.access_type), accessCost: (0, reified_1.decodeFromFields)("u64", fields.access_cost), hiveTwapPrice: (0, reified_1.decodeFromFields)("u256", fields.hive_twap_price), gemsToTransferAmt: (0, reified_1.decodeFromFields)("u64", fields.gems_to_transfer_amt), totalRoyaltyAmt: (0, reified_1.decodeFromFields)("u64", fields.total_royalty_amt), treasuryAmt: (0, reified_1.decodeFromFields)("u64", fields.treasury_amt), gemsBurnt: (0, reified_1.decodeFromFields)("u64", fields.gems_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAccessPaymentProcessed(item.type)) {
            throw new Error("not a HiveAccessPaymentProcessed type");
        }
        return HiveAccessPaymentProcessed.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscriber_profile_addr), hiveOwnerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.hive_owner_profile), accessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.access_type), accessCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.access_cost), hiveTwapPrice: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_twap_price), gemsToTransferAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_to_transfer_amt), totalRoyaltyAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_royalty_amt), treasuryAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_amt), gemsBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_burnt) });
    }
    static fromBcs(data) { return HiveAccessPaymentProcessed.fromFields(HiveAccessPaymentProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            subscriberProfileAddr: this.subscriberProfileAddr, hiveOwnerProfile: this.hiveOwnerProfile, accessType: this.accessType, accessCost: this.accessCost.toString(), hiveTwapPrice: this.hiveTwapPrice.toString(), gemsToTransferAmt: this.gemsToTransferAmt.toString(), totalRoyaltyAmt: this.totalRoyaltyAmt.toString(), treasuryAmt: this.treasuryAmt.toString(), gemsBurnt: this.gemsBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAccessPaymentProcessed.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.subscriberProfileAddr), hiveOwnerProfile: (0, reified_1.decodeFromJSONField)("address", field.hiveOwnerProfile), accessType: (0, reified_1.decodeFromJSONField)("u8", field.accessType), accessCost: (0, reified_1.decodeFromJSONField)("u64", field.accessCost), hiveTwapPrice: (0, reified_1.decodeFromJSONField)("u256", field.hiveTwapPrice), gemsToTransferAmt: (0, reified_1.decodeFromJSONField)("u64", field.gemsToTransferAmt), totalRoyaltyAmt: (0, reified_1.decodeFromJSONField)("u64", field.totalRoyaltyAmt), treasuryAmt: (0, reified_1.decodeFromJSONField)("u64", field.treasuryAmt), gemsBurnt: (0, reified_1.decodeFromJSONField)("u64", field.gemsBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAccessPaymentProcessed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAccessPaymentProcessed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAccessPaymentProcessed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAccessPaymentProcessed object`);
    } return HiveAccessPaymentProcessed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAccessPaymentProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAccessPaymentProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAccessPaymentProcessed object`);
        }
        return HiveAccessPaymentProcessed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAccessPaymentProcessed = HiveAccessPaymentProcessed;
HiveAccessPaymentProcessed.$typeName = "0x0::hive_profile::HiveAccessPaymentProcessed";
HiveAccessPaymentProcessed.$numTypeParams = 0;
/* ============================== HiveAccessPlanUpdated =============================== */
function isHiveAccessPlanUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveAccessPlanUpdated"; }
exports.isHiveAccessPlanUpdated = isHiveAccessPlanUpdated;
class HiveAccessPlanUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = HiveAccessPlanUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAccessPlanUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.newWorkerAccessCost = fields.newWorkerAccessCost;
        ;
        this.newDroneAccessCost = fields.newDroneAccessCost;
        ;
        this.newQueenAccessCost = fields.newQueenAccessCost;
    }
    static reified() { return { typeName: HiveAccessPlanUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAccessPlanUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveAccessPlanUpdated.fromFields(fields), fromFieldsWithTypes: (item) => HiveAccessPlanUpdated.fromFieldsWithTypes(item), fromBcs: (data) => HiveAccessPlanUpdated.fromBcs(data), bcs: HiveAccessPlanUpdated.bcs, fromJSONField: (field) => HiveAccessPlanUpdated.fromJSONField(field), fromJSON: (json) => HiveAccessPlanUpdated.fromJSON(json), fromSuiParsedData: (content) => HiveAccessPlanUpdated.fromSuiParsedData(content), fetch: async (client, id) => HiveAccessPlanUpdated.fetch(client, id), new: (fields) => { return new HiveAccessPlanUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAccessPlanUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAccessPlanUpdated.reified()); }
    static get p() { return HiveAccessPlanUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAccessPlanUpdated", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_3.String.bcs, new_worker_access_cost: bcs_1.bcs.u64(), new_drone_access_cost: bcs_1.bcs.u64(), new_queen_access_cost: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAccessPlanUpdated.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.username), newWorkerAccessCost: (0, reified_1.decodeFromFields)("u64", fields.new_worker_access_cost), newDroneAccessCost: (0, reified_1.decodeFromFields)("u64", fields.new_drone_access_cost), newQueenAccessCost: (0, reified_1.decodeFromFields)("u64", fields.new_queen_access_cost) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAccessPlanUpdated(item.type)) {
            throw new Error("not a HiveAccessPlanUpdated type");
        }
        return HiveAccessPlanUpdated.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.username), newWorkerAccessCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_worker_access_cost), newDroneAccessCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_drone_access_cost), newQueenAccessCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_queen_access_cost) });
    }
    static fromBcs(data) { return HiveAccessPlanUpdated.fromFields(HiveAccessPlanUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, username: this.username, newWorkerAccessCost: this.newWorkerAccessCost.toString(), newDroneAccessCost: this.newDroneAccessCost.toString(), newQueenAccessCost: this.newQueenAccessCost.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAccessPlanUpdated.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.username), newWorkerAccessCost: (0, reified_1.decodeFromJSONField)("u64", field.newWorkerAccessCost), newDroneAccessCost: (0, reified_1.decodeFromJSONField)("u64", field.newDroneAccessCost), newQueenAccessCost: (0, reified_1.decodeFromJSONField)("u64", field.newQueenAccessCost) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAccessPlanUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAccessPlanUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAccessPlanUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAccessPlanUpdated object`);
    } return HiveAccessPlanUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAccessPlanUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAccessPlanUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAccessPlanUpdated object`);
        }
        return HiveAccessPlanUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAccessPlanUpdated = HiveAccessPlanUpdated;
HiveAccessPlanUpdated.$typeName = "0x0::hive_profile::HiveAccessPlanUpdated";
HiveAccessPlanUpdated.$numTypeParams = 0;
/* ============================== HiveAddedForHarvest =============================== */
function isHiveAddedForHarvest(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveAddedForHarvest"; }
exports.isHiveAddedForHarvest = isHiveAddedForHarvest;
class HiveAddedForHarvest {
    constructor(typeArgs, fields) {
        this.$typeName = HiveAddedForHarvest.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAddedForHarvest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.yieldAdded = fields.yieldAdded;
    }
    static reified() { return { typeName: HiveAddedForHarvest.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAddedForHarvest.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveAddedForHarvest.fromFields(fields), fromFieldsWithTypes: (item) => HiveAddedForHarvest.fromFieldsWithTypes(item), fromBcs: (data) => HiveAddedForHarvest.fromBcs(data), bcs: HiveAddedForHarvest.bcs, fromJSONField: (field) => HiveAddedForHarvest.fromJSONField(field), fromJSON: (json) => HiveAddedForHarvest.fromJSON(json), fromSuiParsedData: (content) => HiveAddedForHarvest.fromSuiParsedData(content), fetch: async (client, id) => HiveAddedForHarvest.fetch(client, id), new: (fields) => { return new HiveAddedForHarvest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAddedForHarvest.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAddedForHarvest.reified()); }
    static get p() { return HiveAddedForHarvest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAddedForHarvest", {
            yield_added: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromFields)("u64", fields.yield_added) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAddedForHarvest(item.type)) {
            throw new Error("not a HiveAddedForHarvest type");
        }
        return HiveAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.yield_added) });
    }
    static fromBcs(data) { return HiveAddedForHarvest.fromFields(HiveAddedForHarvest.bcs.parse(data)); }
    toJSONField() {
        return {
            yieldAdded: this.yieldAdded.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromJSONField)("u64", field.yieldAdded) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAddedForHarvest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAddedForHarvest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAddedForHarvest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAddedForHarvest object`);
    } return HiveAddedForHarvest.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAddedForHarvest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAddedForHarvest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAddedForHarvest object`);
        }
        return HiveAddedForHarvest.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAddedForHarvest = HiveAddedForHarvest;
HiveAddedForHarvest.$typeName = "0x0::hive_profile::HiveAddedForHarvest";
HiveAddedForHarvest.$numTypeParams = 0;
/* ============================== HiveAppAccessCapability =============================== */
function isHiveAppAccessCapability(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveAppAccessCapability"; }
exports.isHiveAppAccessCapability = isHiveAppAccessCapability;
class HiveAppAccessCapability {
    constructor(typeArgs, fields) {
        this.$typeName = HiveAppAccessCapability.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAppAccessCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.appName = fields.appName;
        ;
        this.onlyOwnerCanAddApp = fields.onlyOwnerCanAddApp;
        ;
        this.onlyOwnerCanAccessApp = fields.onlyOwnerCanAccessApp;
        ;
        this.onlyOwnerCanRemoveApp = fields.onlyOwnerCanRemoveApp;
    }
    static reified() { return { typeName: HiveAppAccessCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAppAccessCapability.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveAppAccessCapability.fromFields(fields), fromFieldsWithTypes: (item) => HiveAppAccessCapability.fromFieldsWithTypes(item), fromBcs: (data) => HiveAppAccessCapability.fromBcs(data), bcs: HiveAppAccessCapability.bcs, fromJSONField: (field) => HiveAppAccessCapability.fromJSONField(field), fromJSON: (json) => HiveAppAccessCapability.fromJSON(json), fromSuiParsedData: (content) => HiveAppAccessCapability.fromSuiParsedData(content), fetch: async (client, id) => HiveAppAccessCapability.fetch(client, id), new: (fields) => { return new HiveAppAccessCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAppAccessCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAppAccessCapability.reified()); }
    static get p() { return HiveAppAccessCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAppAccessCapability", {
            id: structs_6.UID.bcs, app_name: structs_1.String.bcs, only_owner_can_add_app: bcs_1.bcs.bool(), only_owner_can_access_app: bcs_1.bcs.bool(), only_owner_can_remove_app: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return HiveAppAccessCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name), onlyOwnerCanAddApp: (0, reified_1.decodeFromFields)("bool", fields.only_owner_can_add_app), onlyOwnerCanAccessApp: (0, reified_1.decodeFromFields)("bool", fields.only_owner_can_access_app), onlyOwnerCanRemoveApp: (0, reified_1.decodeFromFields)("bool", fields.only_owner_can_remove_app) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAppAccessCapability(item.type)) {
            throw new Error("not a HiveAppAccessCapability type");
        }
        return HiveAppAccessCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name), onlyOwnerCanAddApp: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.only_owner_can_add_app), onlyOwnerCanAccessApp: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.only_owner_can_access_app), onlyOwnerCanRemoveApp: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.only_owner_can_remove_app) });
    }
    static fromBcs(data) { return HiveAppAccessCapability.fromFields(HiveAppAccessCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, appName: this.appName, onlyOwnerCanAddApp: this.onlyOwnerCanAddApp, onlyOwnerCanAccessApp: this.onlyOwnerCanAccessApp, onlyOwnerCanRemoveApp: this.onlyOwnerCanRemoveApp,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAppAccessCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName), onlyOwnerCanAddApp: (0, reified_1.decodeFromJSONField)("bool", field.onlyOwnerCanAddApp), onlyOwnerCanAccessApp: (0, reified_1.decodeFromJSONField)("bool", field.onlyOwnerCanAccessApp), onlyOwnerCanRemoveApp: (0, reified_1.decodeFromJSONField)("bool", field.onlyOwnerCanRemoveApp) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAppAccessCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAppAccessCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAppAccessCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAppAccessCapability object`);
    } return HiveAppAccessCapability.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAppAccessCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAppAccessCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAppAccessCapability object`);
        }
        return HiveAppAccessCapability.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAppAccessCapability = HiveAppAccessCapability;
HiveAppAccessCapability.$typeName = "0x0::hive_profile::HiveAppAccessCapability";
HiveAppAccessCapability.$numTypeParams = 0;
/* ============================== HiveAsset =============================== */
function isHiveAsset(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveAsset"; }
exports.isHiveAsset = isHiveAsset;
class HiveAsset {
    constructor(typeArgs, fields) {
        this.$typeName = HiveAsset.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
        ;
        this.power = fields.power;
        ;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.name = fields.name;
        ;
        this.imgUrl = fields.imgUrl;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.prompts = fields.prompts;
        ;
        this.isBorrowed = fields.isBorrowed;
        ;
        this.isStaked = fields.isStaked;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.unlockTimestamp = fields.unlockTimestamp;
        ;
        this.availableGems = fields.availableGems;
        ;
        this.claimIndex = fields.claimIndex;
        ;
        this.hsuiClaimIndex = fields.hsuiClaimIndex;
        ;
        this.totalHsuiClaimed = fields.totalHsuiClaimed;
        ;
        this.totalGemsClaimed = fields.totalGemsClaimed;
        ;
        this.activeSkins = fields.activeSkins;
    }
    static reified() { return { typeName: HiveAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAsset.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveAsset.fromFields(fields), fromFieldsWithTypes: (item) => HiveAsset.fromFieldsWithTypes(item), fromBcs: (data) => HiveAsset.fromBcs(data), bcs: HiveAsset.bcs, fromJSONField: (field) => HiveAsset.fromJSONField(field), fromJSON: (json) => HiveAsset.fromJSON(json), fromSuiParsedData: (content) => HiveAsset.fromSuiParsedData(content), fetch: async (client, id) => HiveAsset.fetch(client, id), new: (fields) => { return new HiveAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAsset.reified()); }
    static get p() { return HiveAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAsset", {
            id: structs_6.UID.bcs, version: bcs_1.bcs.u64(), power: bcs_1.bcs.u64(), creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), name: structs_3.String.bcs, img_url: structs_8.Url.bcs, collection_name: structs_3.String.bcs, prompts: structs_5.LinkedTable.bcs(structs_3.String.bcs), is_borrowed: bcs_1.bcs.bool(), is_staked: bcs_1.bcs.bool(), lockup_duration: bcs_1.bcs.u8(), unlock_timestamp: bcs_1.bcs.u64(), available_gems: structs_10.HiveGems.bcs, claim_index: bcs_1.bcs.u256(), hsui_claim_index: bcs_1.bcs.u256(), total_hsui_claimed: bcs_1.bcs.u64(), total_gems_claimed: bcs_1.bcs.u64(), active_skins: structs_5.LinkedTable.bcs(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return HiveAsset.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u64", fields.version), power: (0, reified_1.decodeFromFields)("u64", fields.power), creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), name: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.name), imgUrl: (0, reified_1.decodeFromFields)(structs_8.Url.reified(), fields.img_url), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), prompts: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(structs_3.String.reified())), fields.prompts), isBorrowed: (0, reified_1.decodeFromFields)("bool", fields.is_borrowed), isStaked: (0, reified_1.decodeFromFields)("bool", fields.is_staked), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), unlockTimestamp: (0, reified_1.decodeFromFields)("u64", fields.unlock_timestamp), availableGems: (0, reified_1.decodeFromFields)(structs_10.HiveGems.reified(), fields.available_gems), claimIndex: (0, reified_1.decodeFromFields)("u256", fields.claim_index), hsuiClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.hsui_claim_index), totalHsuiClaimed: (0, reified_1.decodeFromFields)("u64", fields.total_hsui_claimed), totalGemsClaimed: (0, reified_1.decodeFromFields)("u64", fields.total_gems_claimed), activeSkins: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(SkinRecord.reified())), fields.active_skins) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAsset(item.type)) {
            throw new Error("not a HiveAsset type");
        }
        return HiveAsset.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), power: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.power), creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.name), imgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.Url.reified(), item.fields.img_url), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), prompts: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(structs_3.String.reified())), item.fields.prompts), isBorrowed: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_borrowed), isStaked: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_staked), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), unlockTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlock_timestamp), availableGems: (0, reified_1.decodeFromFieldsWithTypes)(structs_10.HiveGems.reified(), item.fields.available_gems), claimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.claim_index), hsuiClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hsui_claim_index), totalHsuiClaimed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_hsui_claimed), totalGemsClaimed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_gems_claimed), activeSkins: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(SkinRecord.reified())), item.fields.active_skins) });
    }
    static fromBcs(data) { return HiveAsset.fromFields(HiveAsset.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, version: this.version.toString(), power: this.power.toString(), creatorProfile: this.creatorProfile, name: this.name, imgUrl: this.imgUrl, collectionName: this.collectionName, prompts: this.prompts.toJSONField(), isBorrowed: this.isBorrowed, isStaked: this.isStaked, lockupDuration: this.lockupDuration, unlockTimestamp: this.unlockTimestamp.toString(), availableGems: this.availableGems.toJSONField(), claimIndex: this.claimIndex.toString(), hsuiClaimIndex: this.hsuiClaimIndex.toString(), totalHsuiClaimed: this.totalHsuiClaimed.toString(), totalGemsClaimed: this.totalGemsClaimed.toString(), activeSkins: this.activeSkins.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAsset.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u64", field.version), power: (0, reified_1.decodeFromJSONField)("u64", field.power), creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), name: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.name), imgUrl: (0, reified_1.decodeFromJSONField)(structs_8.Url.reified(), field.imgUrl), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), prompts: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(structs_3.String.reified())), field.prompts), isBorrowed: (0, reified_1.decodeFromJSONField)("bool", field.isBorrowed), isStaked: (0, reified_1.decodeFromJSONField)("bool", field.isStaked), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), unlockTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.unlockTimestamp), availableGems: (0, reified_1.decodeFromJSONField)(structs_10.HiveGems.reified(), field.availableGems), claimIndex: (0, reified_1.decodeFromJSONField)("u256", field.claimIndex), hsuiClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.hsuiClaimIndex), totalHsuiClaimed: (0, reified_1.decodeFromJSONField)("u64", field.totalHsuiClaimed), totalGemsClaimed: (0, reified_1.decodeFromJSONField)("u64", field.totalGemsClaimed), activeSkins: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(SkinRecord.reified())), field.activeSkins) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAsset.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAsset.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAsset(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAsset object`);
    } return HiveAsset.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAsset object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAsset(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAsset object`);
        }
        return HiveAsset.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAsset = HiveAsset;
HiveAsset.$typeName = "0x0::hive_profile::HiveAsset";
HiveAsset.$numTypeParams = 0;
/* ============================== HiveAssetBorrowed =============================== */
function isHiveAssetBorrowed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveAssetBorrowed"; }
exports.isHiveAssetBorrowed = isHiveAssetBorrowed;
class HiveAssetBorrowed {
    constructor(typeArgs, fields) {
        this.$typeName = HiveAssetBorrowed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetBorrowed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.borrowerProfile = fields.borrowerProfile;
        ;
        this.lenderProfile = fields.lenderProfile;
        ;
        this.borrowPriceSui = fields.borrowPriceSui;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.borrowStartSec = fields.borrowStartSec;
        ;
        this.borrowExpSec = fields.borrowExpSec;
    }
    static reified() { return { typeName: HiveAssetBorrowed.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetBorrowed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveAssetBorrowed.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetBorrowed.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetBorrowed.fromBcs(data), bcs: HiveAssetBorrowed.bcs, fromJSONField: (field) => HiveAssetBorrowed.fromJSONField(field), fromJSON: (json) => HiveAssetBorrowed.fromJSON(json), fromSuiParsedData: (content) => HiveAssetBorrowed.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetBorrowed.fetch(client, id), new: (fields) => { return new HiveAssetBorrowed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetBorrowed.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetBorrowed.reified()); }
    static get p() { return HiveAssetBorrowed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetBorrowed", {
            version: bcs_1.bcs.u64(), borrower_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), lender_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), borrow_price_sui: bcs_1.bcs.u64(), lockup_duration: bcs_1.bcs.u8(), borrow_start_sec: bcs_1.bcs.u64(), borrow_exp_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAssetBorrowed.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), borrowerProfile: (0, reified_1.decodeFromFields)("address", fields.borrower_profile), lenderProfile: (0, reified_1.decodeFromFields)("address", fields.lender_profile), borrowPriceSui: (0, reified_1.decodeFromFields)("u64", fields.borrow_price_sui), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), borrowStartSec: (0, reified_1.decodeFromFields)("u64", fields.borrow_start_sec), borrowExpSec: (0, reified_1.decodeFromFields)("u64", fields.borrow_exp_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAssetBorrowed(item.type)) {
            throw new Error("not a HiveAssetBorrowed type");
        }
        return HiveAssetBorrowed.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), borrowerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.borrower_profile), lenderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.lender_profile), borrowPriceSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_price_sui), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), borrowStartSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_start_sec), borrowExpSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_exp_sec) });
    }
    static fromBcs(data) { return HiveAssetBorrowed.fromFields(HiveAssetBorrowed.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), borrowerProfile: this.borrowerProfile, lenderProfile: this.lenderProfile, borrowPriceSui: this.borrowPriceSui.toString(), lockupDuration: this.lockupDuration, borrowStartSec: this.borrowStartSec.toString(), borrowExpSec: this.borrowExpSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAssetBorrowed.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), borrowerProfile: (0, reified_1.decodeFromJSONField)("address", field.borrowerProfile), lenderProfile: (0, reified_1.decodeFromJSONField)("address", field.lenderProfile), borrowPriceSui: (0, reified_1.decodeFromJSONField)("u64", field.borrowPriceSui), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), borrowStartSec: (0, reified_1.decodeFromJSONField)("u64", field.borrowStartSec), borrowExpSec: (0, reified_1.decodeFromJSONField)("u64", field.borrowExpSec) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAssetBorrowed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAssetBorrowed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAssetBorrowed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAssetBorrowed object`);
    } return HiveAssetBorrowed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAssetBorrowed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAssetBorrowed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAssetBorrowed object`);
        }
        return HiveAssetBorrowed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetBorrowed = HiveAssetBorrowed;
HiveAssetBorrowed.$typeName = "0x0::hive_profile::HiveAssetBorrowed";
HiveAssetBorrowed.$numTypeParams = 0;
/* ============================== HiveAssetStaked =============================== */
function isHiveAssetStaked(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveAssetStaked"; }
exports.isHiveAssetStaked = isHiveAssetStaked;
class HiveAssetStaked {
    constructor(typeArgs, fields) {
        this.$typeName = HiveAssetStaked.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetStaked.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.version = fields.version;
        ;
        this.duration = fields.duration;
        ;
        this.newAssetPower = fields.newAssetPower;
        ;
        this.unlockTimestamp = fields.unlockTimestamp;
    }
    static reified() { return { typeName: HiveAssetStaked.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetStaked.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveAssetStaked.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetStaked.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetStaked.fromBcs(data), bcs: HiveAssetStaked.bcs, fromJSONField: (field) => HiveAssetStaked.fromJSONField(field), fromJSON: (json) => HiveAssetStaked.fromJSON(json), fromSuiParsedData: (content) => HiveAssetStaked.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetStaked.fetch(client, id), new: (fields) => { return new HiveAssetStaked([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetStaked.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetStaked.reified()); }
    static get p() { return HiveAssetStaked.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetStaked", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), duration: bcs_1.bcs.u8(), new_asset_power: bcs_1.bcs.u64(), unlock_timestamp: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAssetStaked.reified().new({ username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), version: (0, reified_1.decodeFromFields)("u64", fields.version), duration: (0, reified_1.decodeFromFields)("u8", fields.duration), newAssetPower: (0, reified_1.decodeFromFields)("u64", fields.new_asset_power), unlockTimestamp: (0, reified_1.decodeFromFields)("u64", fields.unlock_timestamp) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAssetStaked(item.type)) {
            throw new Error("not a HiveAssetStaked type");
        }
        return HiveAssetStaked.reified().new({ username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), duration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.duration), newAssetPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_asset_power), unlockTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlock_timestamp) });
    }
    static fromBcs(data) { return HiveAssetStaked.fromFields(HiveAssetStaked.bcs.parse(data)); }
    toJSONField() {
        return {
            username: this.username, profileAddr: this.profileAddr, version: this.version.toString(), duration: this.duration, newAssetPower: this.newAssetPower.toString(), unlockTimestamp: this.unlockTimestamp.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAssetStaked.reified().new({ username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), version: (0, reified_1.decodeFromJSONField)("u64", field.version), duration: (0, reified_1.decodeFromJSONField)("u8", field.duration), newAssetPower: (0, reified_1.decodeFromJSONField)("u64", field.newAssetPower), unlockTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.unlockTimestamp) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAssetStaked.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAssetStaked.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAssetStaked(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAssetStaked object`);
    } return HiveAssetStaked.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAssetStaked object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAssetStaked(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAssetStaked object`);
        }
        return HiveAssetStaked.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetStaked = HiveAssetStaked;
HiveAssetStaked.$typeName = "0x0::hive_profile::HiveAssetStaked";
HiveAssetStaked.$numTypeParams = 0;
/* ============================== HiveAssetTransfered =============================== */
function isHiveAssetTransfered(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveAssetTransfered"; }
exports.isHiveAssetTransfered = isHiveAssetTransfered;
class HiveAssetTransfered {
    constructor(typeArgs, fields) {
        this.$typeName = HiveAssetTransfered.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetTransfered.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.fromProfile = fields.fromProfile;
        ;
        this.toProfile = fields.toProfile;
    }
    static reified() { return { typeName: HiveAssetTransfered.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetTransfered.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveAssetTransfered.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetTransfered.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetTransfered.fromBcs(data), bcs: HiveAssetTransfered.bcs, fromJSONField: (field) => HiveAssetTransfered.fromJSONField(field), fromJSON: (json) => HiveAssetTransfered.fromJSON(json), fromSuiParsedData: (content) => HiveAssetTransfered.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetTransfered.fetch(client, id), new: (fields) => { return new HiveAssetTransfered([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetTransfered.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetTransfered.reified()); }
    static get p() { return HiveAssetTransfered.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetTransfered", {
            version: bcs_1.bcs.u64(), from_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), to_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return HiveAssetTransfered.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), fromProfile: (0, reified_1.decodeFromFields)("address", fields.from_profile), toProfile: (0, reified_1.decodeFromFields)("address", fields.to_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAssetTransfered(item.type)) {
            throw new Error("not a HiveAssetTransfered type");
        }
        return HiveAssetTransfered.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), fromProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.from_profile), toProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.to_profile) });
    }
    static fromBcs(data) { return HiveAssetTransfered.fromFields(HiveAssetTransfered.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), fromProfile: this.fromProfile, toProfile: this.toProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAssetTransfered.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), fromProfile: (0, reified_1.decodeFromJSONField)("address", field.fromProfile), toProfile: (0, reified_1.decodeFromJSONField)("address", field.toProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAssetTransfered.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAssetTransfered.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAssetTransfered(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAssetTransfered object`);
    } return HiveAssetTransfered.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAssetTransfered object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAssetTransfered(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAssetTransfered object`);
        }
        return HiveAssetTransfered.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetTransfered = HiveAssetTransfered;
HiveAssetTransfered.$typeName = "0x0::hive_profile::HiveAssetTransfered";
HiveAssetTransfered.$numTypeParams = 0;
/* ============================== HiveAssetUnstaked =============================== */
function isHiveAssetUnstaked(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveAssetUnstaked"; }
exports.isHiveAssetUnstaked = isHiveAssetUnstaked;
class HiveAssetUnstaked {
    constructor(typeArgs, fields) {
        this.$typeName = HiveAssetUnstaked.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetUnstaked.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: HiveAssetUnstaked.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetUnstaked.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveAssetUnstaked.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetUnstaked.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetUnstaked.fromBcs(data), bcs: HiveAssetUnstaked.bcs, fromJSONField: (field) => HiveAssetUnstaked.fromJSONField(field), fromJSON: (json) => HiveAssetUnstaked.fromJSON(json), fromSuiParsedData: (content) => HiveAssetUnstaked.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetUnstaked.fetch(client, id), new: (fields) => { return new HiveAssetUnstaked([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetUnstaked.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetUnstaked.reified()); }
    static get p() { return HiveAssetUnstaked.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetUnstaked", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAssetUnstaked.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAssetUnstaked(item.type)) {
            throw new Error("not a HiveAssetUnstaked type");
        }
        return HiveAssetUnstaked.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return HiveAssetUnstaked.fromFields(HiveAssetUnstaked.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAssetUnstaked.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAssetUnstaked.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAssetUnstaked.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAssetUnstaked(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAssetUnstaked object`);
    } return HiveAssetUnstaked.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAssetUnstaked object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAssetUnstaked(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAssetUnstaked object`);
        }
        return HiveAssetUnstaked.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetUnstaked = HiveAssetUnstaked;
HiveAssetUnstaked.$typeName = "0x0::hive_profile::HiveAssetUnstaked";
HiveAssetUnstaked.$numTypeParams = 0;
/* ============================== HiveAssetUpgraded =============================== */
function isHiveAssetUpgraded(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveAssetUpgraded"; }
exports.isHiveAssetUpgraded = isHiveAssetUpgraded;
class HiveAssetUpgraded {
    constructor(typeArgs, fields) {
        this.$typeName = HiveAssetUpgraded.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetUpgraded.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.hiveKiosk = fields.hiveKiosk;
        ;
        this.newImgUrl = fields.newImgUrl;
        ;
        this.upgradePrice = fields.upgradePrice;
        ;
        this.totalRoyaltyAmt = fields.totalRoyaltyAmt;
        ;
        this.treasuryAmt = fields.treasuryAmt;
        ;
        this.gemsBurnt = fields.gemsBurnt;
    }
    static reified() { return { typeName: HiveAssetUpgraded.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetUpgraded.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveAssetUpgraded.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetUpgraded.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetUpgraded.fromBcs(data), bcs: HiveAssetUpgraded.bcs, fromJSONField: (field) => HiveAssetUpgraded.fromJSONField(field), fromJSON: (json) => HiveAssetUpgraded.fromJSON(json), fromSuiParsedData: (content) => HiveAssetUpgraded.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetUpgraded.fetch(client, id), new: (fields) => { return new HiveAssetUpgraded([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetUpgraded.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetUpgraded.reified()); }
    static get p() { return HiveAssetUpgraded.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetUpgraded", {
            version: bcs_1.bcs.u64(), hive_kiosk: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), new_img_url: structs_3.String.bcs, upgrade_price: bcs_1.bcs.u64(), total_royalty_amt: bcs_1.bcs.u64(), treasury_amt: bcs_1.bcs.u64(), gems_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAssetUpgraded.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), hiveKiosk: (0, reified_1.decodeFromFields)("address", fields.hive_kiosk), newImgUrl: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.new_img_url), upgradePrice: (0, reified_1.decodeFromFields)("u64", fields.upgrade_price), totalRoyaltyAmt: (0, reified_1.decodeFromFields)("u64", fields.total_royalty_amt), treasuryAmt: (0, reified_1.decodeFromFields)("u64", fields.treasury_amt), gemsBurnt: (0, reified_1.decodeFromFields)("u64", fields.gems_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAssetUpgraded(item.type)) {
            throw new Error("not a HiveAssetUpgraded type");
        }
        return HiveAssetUpgraded.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), hiveKiosk: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.hive_kiosk), newImgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.new_img_url), upgradePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.upgrade_price), totalRoyaltyAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_royalty_amt), treasuryAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_amt), gemsBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_burnt) });
    }
    static fromBcs(data) { return HiveAssetUpgraded.fromFields(HiveAssetUpgraded.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), hiveKiosk: this.hiveKiosk, newImgUrl: this.newImgUrl, upgradePrice: this.upgradePrice.toString(), totalRoyaltyAmt: this.totalRoyaltyAmt.toString(), treasuryAmt: this.treasuryAmt.toString(), gemsBurnt: this.gemsBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAssetUpgraded.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), hiveKiosk: (0, reified_1.decodeFromJSONField)("address", field.hiveKiosk), newImgUrl: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.newImgUrl), upgradePrice: (0, reified_1.decodeFromJSONField)("u64", field.upgradePrice), totalRoyaltyAmt: (0, reified_1.decodeFromJSONField)("u64", field.totalRoyaltyAmt), treasuryAmt: (0, reified_1.decodeFromJSONField)("u64", field.treasuryAmt), gemsBurnt: (0, reified_1.decodeFromJSONField)("u64", field.gemsBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAssetUpgraded.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAssetUpgraded.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAssetUpgraded(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAssetUpgraded object`);
    } return HiveAssetUpgraded.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAssetUpgraded object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAssetUpgraded(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAssetUpgraded object`);
        }
        return HiveAssetUpgraded.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetUpgraded = HiveAssetUpgraded;
HiveAssetUpgraded.$typeName = "0x0::hive_profile::HiveAssetUpgraded";
HiveAssetUpgraded.$numTypeParams = 0;
/* ============================== HiveDisperser =============================== */
function isHiveDisperser(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveDisperser"; }
exports.isHiveDisperser = isHiveDisperser;
class HiveDisperser {
    constructor(typeArgs, fields) {
        this.$typeName = HiveDisperser.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveDisperser.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.incomingGemsForAssets = fields.incomingGemsForAssets;
        ;
        this.gemsForAssets = fields.gemsForAssets;
        ;
        this.globalDispersalIndex = fields.globalDispersalIndex;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: HiveDisperser.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveDisperser.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveDisperser.fromFields(fields), fromFieldsWithTypes: (item) => HiveDisperser.fromFieldsWithTypes(item), fromBcs: (data) => HiveDisperser.fromBcs(data), bcs: HiveDisperser.bcs, fromJSONField: (field) => HiveDisperser.fromJSONField(field), fromJSON: (json) => HiveDisperser.fromJSON(json), fromSuiParsedData: (content) => HiveDisperser.fromSuiParsedData(content), fetch: async (client, id) => HiveDisperser.fetch(client, id), new: (fields) => { return new HiveDisperser([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveDisperser.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveDisperser.reified()); }
    static get p() { return HiveDisperser.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveDisperser", {
            id: structs_6.UID.bcs, incoming_gems_for_assets: structs_10.HiveGems.bcs, gems_for_assets: structs_10.HiveGems.bcs, global_dispersal_index: bcs_1.bcs.u256(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveDisperser.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), incomingGemsForAssets: (0, reified_1.decodeFromFields)(structs_10.HiveGems.reified(), fields.incoming_gems_for_assets), gemsForAssets: (0, reified_1.decodeFromFields)(structs_10.HiveGems.reified(), fields.gems_for_assets), globalDispersalIndex: (0, reified_1.decodeFromFields)("u256", fields.global_dispersal_index), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveDisperser(item.type)) {
            throw new Error("not a HiveDisperser type");
        }
        return HiveDisperser.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), incomingGemsForAssets: (0, reified_1.decodeFromFieldsWithTypes)(structs_10.HiveGems.reified(), item.fields.incoming_gems_for_assets), gemsForAssets: (0, reified_1.decodeFromFieldsWithTypes)(structs_10.HiveGems.reified(), item.fields.gems_for_assets), globalDispersalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.global_dispersal_index), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveDisperser.fromFields(HiveDisperser.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, incomingGemsForAssets: this.incomingGemsForAssets.toJSONField(), gemsForAssets: this.gemsForAssets.toJSONField(), globalDispersalIndex: this.globalDispersalIndex.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveDisperser.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), incomingGemsForAssets: (0, reified_1.decodeFromJSONField)(structs_10.HiveGems.reified(), field.incomingGemsForAssets), gemsForAssets: (0, reified_1.decodeFromJSONField)(structs_10.HiveGems.reified(), field.gemsForAssets), globalDispersalIndex: (0, reified_1.decodeFromJSONField)("u256", field.globalDispersalIndex), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveDisperser.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveDisperser.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveDisperser(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveDisperser object`);
    } return HiveDisperser.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveDisperser object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveDisperser(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveDisperser object`);
        }
        return HiveDisperser.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveDisperser = HiveDisperser;
HiveDisperser.$typeName = "0x0::hive_profile::HiveDisperser";
HiveDisperser.$numTypeParams = 0;
/* ============================== HiveGemsDepositedIntoAsset =============================== */
function isHiveGemsDepositedIntoAsset(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveGemsDepositedIntoAsset"; }
exports.isHiveGemsDepositedIntoAsset = isHiveGemsDepositedIntoAsset;
class HiveGemsDepositedIntoAsset {
    constructor(typeArgs, fields) {
        this.$typeName = HiveGemsDepositedIntoAsset.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveGemsDepositedIntoAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profile = fields.profile;
        ;
        this.version = fields.version;
        ;
        this.gemsDeposited = fields.gemsDeposited;
    }
    static reified() { return { typeName: HiveGemsDepositedIntoAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGemsDepositedIntoAsset.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveGemsDepositedIntoAsset.fromFields(fields), fromFieldsWithTypes: (item) => HiveGemsDepositedIntoAsset.fromFieldsWithTypes(item), fromBcs: (data) => HiveGemsDepositedIntoAsset.fromBcs(data), bcs: HiveGemsDepositedIntoAsset.bcs, fromJSONField: (field) => HiveGemsDepositedIntoAsset.fromJSONField(field), fromJSON: (json) => HiveGemsDepositedIntoAsset.fromJSON(json), fromSuiParsedData: (content) => HiveGemsDepositedIntoAsset.fromSuiParsedData(content), fetch: async (client, id) => HiveGemsDepositedIntoAsset.fetch(client, id), new: (fields) => { return new HiveGemsDepositedIntoAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGemsDepositedIntoAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGemsDepositedIntoAsset.reified()); }
    static get p() { return HiveGemsDepositedIntoAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGemsDepositedIntoAsset", {
            profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), gems_deposited: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveGemsDepositedIntoAsset.reified().new({ profile: (0, reified_1.decodeFromFields)("address", fields.profile), version: (0, reified_1.decodeFromFields)("u64", fields.version), gemsDeposited: (0, reified_1.decodeFromFields)("u64", fields.gems_deposited) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveGemsDepositedIntoAsset(item.type)) {
            throw new Error("not a HiveGemsDepositedIntoAsset type");
        }
        return HiveGemsDepositedIntoAsset.reified().new({ profile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), gemsDeposited: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_deposited) });
    }
    static fromBcs(data) { return HiveGemsDepositedIntoAsset.fromFields(HiveGemsDepositedIntoAsset.bcs.parse(data)); }
    toJSONField() {
        return {
            profile: this.profile, version: this.version.toString(), gemsDeposited: this.gemsDeposited.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveGemsDepositedIntoAsset.reified().new({ profile: (0, reified_1.decodeFromJSONField)("address", field.profile), version: (0, reified_1.decodeFromJSONField)("u64", field.version), gemsDeposited: (0, reified_1.decodeFromJSONField)("u64", field.gemsDeposited) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveGemsDepositedIntoAsset.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveGemsDepositedIntoAsset.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveGemsDepositedIntoAsset(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveGemsDepositedIntoAsset object`);
    } return HiveGemsDepositedIntoAsset.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveGemsDepositedIntoAsset object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveGemsDepositedIntoAsset(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveGemsDepositedIntoAsset object`);
        }
        return HiveGemsDepositedIntoAsset.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveGemsDepositedIntoAsset = HiveGemsDepositedIntoAsset;
HiveGemsDepositedIntoAsset.$typeName = "0x0::hive_profile::HiveGemsDepositedIntoAsset";
HiveGemsDepositedIntoAsset.$numTypeParams = 0;
/* ============================== HiveGemsPortedToSkin =============================== */
function isHiveGemsPortedToSkin(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveGemsPortedToSkin"; }
exports.isHiveGemsPortedToSkin = isHiveGemsPortedToSkin;
class HiveGemsPortedToSkin {
    constructor(typeArgs, fields) {
        this.$typeName = HiveGemsPortedToSkin.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveGemsPortedToSkin.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.portedByProfile = fields.portedByProfile;
        ;
        this.portedByUsername = fields.portedByUsername;
        ;
        this.version = fields.version;
        ;
        this.skinType = fields.skinType;
        ;
        this.gemsPorted = fields.gemsPorted;
    }
    static reified() { return { typeName: HiveGemsPortedToSkin.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGemsPortedToSkin.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveGemsPortedToSkin.fromFields(fields), fromFieldsWithTypes: (item) => HiveGemsPortedToSkin.fromFieldsWithTypes(item), fromBcs: (data) => HiveGemsPortedToSkin.fromBcs(data), bcs: HiveGemsPortedToSkin.bcs, fromJSONField: (field) => HiveGemsPortedToSkin.fromJSONField(field), fromJSON: (json) => HiveGemsPortedToSkin.fromJSON(json), fromSuiParsedData: (content) => HiveGemsPortedToSkin.fromSuiParsedData(content), fetch: async (client, id) => HiveGemsPortedToSkin.fetch(client, id), new: (fields) => { return new HiveGemsPortedToSkin([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGemsPortedToSkin.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGemsPortedToSkin.reified()); }
    static get p() { return HiveGemsPortedToSkin.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGemsPortedToSkin", {
            ported_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), ported_by_username: structs_1.String.bcs, version: bcs_1.bcs.u64(), skin_type: structs_3.String.bcs, gems_ported: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveGemsPortedToSkin.reified().new({ portedByProfile: (0, reified_1.decodeFromFields)("address", fields.ported_by_profile), portedByUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.ported_by_username), version: (0, reified_1.decodeFromFields)("u64", fields.version), skinType: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.skin_type), gemsPorted: (0, reified_1.decodeFromFields)("u64", fields.gems_ported) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveGemsPortedToSkin(item.type)) {
            throw new Error("not a HiveGemsPortedToSkin type");
        }
        return HiveGemsPortedToSkin.reified().new({ portedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.ported_by_profile), portedByUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.ported_by_username), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), skinType: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.skin_type), gemsPorted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_ported) });
    }
    static fromBcs(data) { return HiveGemsPortedToSkin.fromFields(HiveGemsPortedToSkin.bcs.parse(data)); }
    toJSONField() {
        return {
            portedByProfile: this.portedByProfile, portedByUsername: this.portedByUsername, version: this.version.toString(), skinType: this.skinType, gemsPorted: this.gemsPorted.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveGemsPortedToSkin.reified().new({ portedByProfile: (0, reified_1.decodeFromJSONField)("address", field.portedByProfile), portedByUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.portedByUsername), version: (0, reified_1.decodeFromJSONField)("u64", field.version), skinType: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.skinType), gemsPorted: (0, reified_1.decodeFromJSONField)("u64", field.gemsPorted) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveGemsPortedToSkin.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveGemsPortedToSkin.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveGemsPortedToSkin(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveGemsPortedToSkin object`);
    } return HiveGemsPortedToSkin.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveGemsPortedToSkin object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveGemsPortedToSkin(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveGemsPortedToSkin object`);
        }
        return HiveGemsPortedToSkin.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveGemsPortedToSkin = HiveGemsPortedToSkin;
HiveGemsPortedToSkin.$typeName = "0x0::hive_profile::HiveGemsPortedToSkin";
HiveGemsPortedToSkin.$numTypeParams = 0;
/* ============================== HiveGemsTransfered =============================== */
function isHiveGemsTransfered(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveGemsTransfered"; }
exports.isHiveGemsTransfered = isHiveGemsTransfered;
class HiveGemsTransfered {
    constructor(typeArgs, fields) {
        this.$typeName = HiveGemsTransfered.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveGemsTransfered.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.fromUsername = fields.fromUsername;
        ;
        this.toUsername = fields.toUsername;
        ;
        this.fromProfileAddr = fields.fromProfileAddr;
        ;
        this.toProfileAddr = fields.toProfileAddr;
        ;
        this.gemsTransferred = fields.gemsTransferred;
    }
    static reified() { return { typeName: HiveGemsTransfered.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGemsTransfered.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveGemsTransfered.fromFields(fields), fromFieldsWithTypes: (item) => HiveGemsTransfered.fromFieldsWithTypes(item), fromBcs: (data) => HiveGemsTransfered.fromBcs(data), bcs: HiveGemsTransfered.bcs, fromJSONField: (field) => HiveGemsTransfered.fromJSONField(field), fromJSON: (json) => HiveGemsTransfered.fromJSON(json), fromSuiParsedData: (content) => HiveGemsTransfered.fromSuiParsedData(content), fetch: async (client, id) => HiveGemsTransfered.fetch(client, id), new: (fields) => { return new HiveGemsTransfered([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGemsTransfered.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGemsTransfered.reified()); }
    static get p() { return HiveGemsTransfered.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGemsTransfered", {
            from_username: structs_1.String.bcs, to_username: structs_1.String.bcs, from_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), to_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), gems_transferred: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveGemsTransfered.reified().new({ fromUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.from_username), toUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.to_username), fromProfileAddr: (0, reified_1.decodeFromFields)("address", fields.from_profile_addr), toProfileAddr: (0, reified_1.decodeFromFields)("address", fields.to_profile_addr), gemsTransferred: (0, reified_1.decodeFromFields)("u64", fields.gems_transferred) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveGemsTransfered(item.type)) {
            throw new Error("not a HiveGemsTransfered type");
        }
        return HiveGemsTransfered.reified().new({ fromUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.from_username), toUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.to_username), fromProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.from_profile_addr), toProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.to_profile_addr), gemsTransferred: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_transferred) });
    }
    static fromBcs(data) { return HiveGemsTransfered.fromFields(HiveGemsTransfered.bcs.parse(data)); }
    toJSONField() {
        return {
            fromUsername: this.fromUsername, toUsername: this.toUsername, fromProfileAddr: this.fromProfileAddr, toProfileAddr: this.toProfileAddr, gemsTransferred: this.gemsTransferred.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveGemsTransfered.reified().new({ fromUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.fromUsername), toUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.toUsername), fromProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.fromProfileAddr), toProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.toProfileAddr), gemsTransferred: (0, reified_1.decodeFromJSONField)("u64", field.gemsTransferred) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveGemsTransfered.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveGemsTransfered.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveGemsTransfered(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveGemsTransfered object`);
    } return HiveGemsTransfered.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveGemsTransfered object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveGemsTransfered(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveGemsTransfered object`);
        }
        return HiveGemsTransfered.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveGemsTransfered = HiveGemsTransfered;
HiveGemsTransfered.$typeName = "0x0::hive_profile::HiveGemsTransfered";
HiveGemsTransfered.$numTypeParams = 0;
/* ============================== HiveKiosk =============================== */
function isHiveKiosk(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveKiosk"; }
exports.isHiveKiosk = isHiveKiosk;
class HiveKiosk {
    constructor(typeArgs, fields) {
        this.$typeName = HiveKiosk.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveKiosk.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.imgUrl = fields.imgUrl;
        ;
        this.traitsList = fields.traitsList;
        ;
        this.maxAssetsLimit = fields.maxAssetsLimit;
        ;
        this.kraftedAssets = fields.kraftedAssets;
        ;
        this.basePrice = fields.basePrice;
        ;
        this.curveA = fields.curveA;
        ;
        this.promptsList = fields.promptsList;
        ;
        this.urlList = fields.urlList;
        ;
        this.namesList = fields.namesList;
        ;
        this.kraftedVersionsMap = fields.kraftedVersionsMap;
        ;
        this.kraftAccess = fields.kraftAccess;
        ;
        this.discountAccess = fields.discountAccess;
        ;
        this.discount = fields.discount;
        ;
        this.availableUpgrades = fields.availableUpgrades;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: HiveKiosk.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveKiosk.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveKiosk.fromFields(fields), fromFieldsWithTypes: (item) => HiveKiosk.fromFieldsWithTypes(item), fromBcs: (data) => HiveKiosk.fromBcs(data), bcs: HiveKiosk.bcs, fromJSONField: (field) => HiveKiosk.fromJSONField(field), fromJSON: (json) => HiveKiosk.fromJSON(json), fromSuiParsedData: (content) => HiveKiosk.fromSuiParsedData(content), fetch: async (client, id) => HiveKiosk.fetch(client, id), new: (fields) => { return new HiveKiosk([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveKiosk.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveKiosk.reified()); }
    static get p() { return HiveKiosk.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveKiosk", {
            id: structs_6.UID.bcs, creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), collection_name: structs_3.String.bcs, img_url: structs_8.Url.bcs, traits_list: bcs_1.bcs.vector(structs_3.String.bcs), max_assets_limit: bcs_1.bcs.u64(), krafted_assets: bcs_1.bcs.u64(), base_price: bcs_1.bcs.u64(), curve_a: bcs_1.bcs.u64(), prompts_list: bcs_1.bcs.vector(bcs_1.bcs.vector(structs_3.String.bcs)), url_list: bcs_1.bcs.vector(structs_3.String.bcs), names_list: bcs_1.bcs.vector(structs_3.String.bcs), krafted_versions_map: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), kraft_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64(), available_upgrades: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveKiosk.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), imgUrl: (0, reified_1.decodeFromFields)(structs_8.Url.reified(), fields.img_url), traitsList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.traits_list), maxAssetsLimit: (0, reified_1.decodeFromFields)("u64", fields.max_assets_limit), kraftedAssets: (0, reified_1.decodeFromFields)("u64", fields.krafted_assets), basePrice: (0, reified_1.decodeFromFields)("u64", fields.base_price), curveA: (0, reified_1.decodeFromFields)("u64", fields.curve_a), promptsList: (0, reified_1.decodeFromFields)(reified.vector(reified.vector(structs_3.String.reified())), fields.prompts_list), urlList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.url_list), namesList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.names_list), kraftedVersionsMap: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), fields.krafted_versions_map), kraftAccess: (0, reified_1.decodeFromFields)("u8", fields.kraft_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount), availableUpgrades: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(AssetUpgrade.reified()))), fields.available_upgrades), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveKiosk(item.type)) {
            throw new Error("not a HiveKiosk type");
        }
        return HiveKiosk.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), imgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.Url.reified(), item.fields.img_url), traitsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.traits_list), maxAssetsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_assets_limit), kraftedAssets: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.krafted_assets), basePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.base_price), curveA: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.curve_a), promptsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector(structs_3.String.reified())), item.fields.prompts_list), urlList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.url_list), namesList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.names_list), kraftedVersionsMap: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), item.fields.krafted_versions_map), kraftAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.kraft_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount), availableUpgrades: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(AssetUpgrade.reified()))), item.fields.available_upgrades), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveKiosk.fromFields(HiveKiosk.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, creatorProfile: this.creatorProfile, collectionName: this.collectionName, imgUrl: this.imgUrl, traitsList: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.traitsList), maxAssetsLimit: this.maxAssetsLimit.toString(), kraftedAssets: this.kraftedAssets.toString(), basePrice: this.basePrice.toString(), curveA: this.curveA.toString(), promptsList: (0, reified_1.fieldToJSON)(`vector<vector<0x1::string::String>>`, this.promptsList), urlList: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.urlList), namesList: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.namesList), kraftedVersionsMap: this.kraftedVersionsMap.toJSONField(), kraftAccess: this.kraftAccess, discountAccess: this.discountAccess, discount: this.discount.toString(), availableUpgrades: this.availableUpgrades.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveKiosk.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), imgUrl: (0, reified_1.decodeFromJSONField)(structs_8.Url.reified(), field.imgUrl), traitsList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.traitsList), maxAssetsLimit: (0, reified_1.decodeFromJSONField)("u64", field.maxAssetsLimit), kraftedAssets: (0, reified_1.decodeFromJSONField)("u64", field.kraftedAssets), basePrice: (0, reified_1.decodeFromJSONField)("u64", field.basePrice), curveA: (0, reified_1.decodeFromJSONField)("u64", field.curveA), promptsList: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector(structs_3.String.reified())), field.promptsList), urlList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.urlList), namesList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.namesList), kraftedVersionsMap: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), field.kraftedVersionsMap), kraftAccess: (0, reified_1.decodeFromJSONField)("u8", field.kraftAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount), availableUpgrades: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(AssetUpgrade.reified()))), field.availableUpgrades), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveKiosk.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveKiosk.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveKiosk(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveKiosk object`);
    } return HiveKiosk.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveKiosk object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveKiosk(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveKiosk object`);
        }
        return HiveKiosk.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveKiosk = HiveKiosk;
HiveKiosk.$typeName = "0x0::hive_profile::HiveKiosk";
HiveKiosk.$numTypeParams = 0;
/* ============================== HiveKioskInitialized =============================== */
function isHiveKioskInitialized(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveKioskInitialized"; }
exports.isHiveKioskInitialized = isHiveKioskInitialized;
class HiveKioskInitialized {
    constructor(typeArgs, fields) {
        this.$typeName = HiveKioskInitialized.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveKioskInitialized.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.kioskAddr = fields.kioskAddr;
        ;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.timeStream = fields.timeStream;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.imgUrl = fields.imgUrl;
        ;
        this.maxAssetsLimit = fields.maxAssetsLimit;
    }
    static reified() { return { typeName: HiveKioskInitialized.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveKioskInitialized.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveKioskInitialized.fromFields(fields), fromFieldsWithTypes: (item) => HiveKioskInitialized.fromFieldsWithTypes(item), fromBcs: (data) => HiveKioskInitialized.fromBcs(data), bcs: HiveKioskInitialized.bcs, fromJSONField: (field) => HiveKioskInitialized.fromJSONField(field), fromJSON: (json) => HiveKioskInitialized.fromJSON(json), fromSuiParsedData: (content) => HiveKioskInitialized.fromSuiParsedData(content), fetch: async (client, id) => HiveKioskInitialized.fetch(client, id), new: (fields) => { return new HiveKioskInitialized([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveKioskInitialized.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveKioskInitialized.reified()); }
    static get p() { return HiveKioskInitialized.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveKioskInitialized", {
            kiosk_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), time_stream: bcs_1.bcs.u64(), collection_name: structs_3.String.bcs, img_url: structs_3.String.bcs, max_assets_limit: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveKioskInitialized.reified().new({ kioskAddr: (0, reified_1.decodeFromFields)("address", fields.kiosk_addr), creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), timeStream: (0, reified_1.decodeFromFields)("u64", fields.time_stream), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), imgUrl: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.img_url), maxAssetsLimit: (0, reified_1.decodeFromFields)("u64", fields.max_assets_limit) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveKioskInitialized(item.type)) {
            throw new Error("not a HiveKioskInitialized type");
        }
        return HiveKioskInitialized.reified().new({ kioskAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.kiosk_addr), creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), timeStream: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.time_stream), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), imgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.img_url), maxAssetsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_assets_limit) });
    }
    static fromBcs(data) { return HiveKioskInitialized.fromFields(HiveKioskInitialized.bcs.parse(data)); }
    toJSONField() {
        return {
            kioskAddr: this.kioskAddr, creatorProfile: this.creatorProfile, timeStream: this.timeStream.toString(), collectionName: this.collectionName, imgUrl: this.imgUrl, maxAssetsLimit: this.maxAssetsLimit.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveKioskInitialized.reified().new({ kioskAddr: (0, reified_1.decodeFromJSONField)("address", field.kioskAddr), creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), timeStream: (0, reified_1.decodeFromJSONField)("u64", field.timeStream), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), imgUrl: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.imgUrl), maxAssetsLimit: (0, reified_1.decodeFromJSONField)("u64", field.maxAssetsLimit) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveKioskInitialized.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveKioskInitialized.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveKioskInitialized(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveKioskInitialized object`);
    } return HiveKioskInitialized.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveKioskInitialized object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveKioskInitialized(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveKioskInitialized object`);
        }
        return HiveKioskInitialized.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveKioskInitialized = HiveKioskInitialized;
HiveKioskInitialized.$typeName = "0x0::hive_profile::HiveKioskInitialized";
HiveKioskInitialized.$numTypeParams = 0;
/* ============================== HiveKioskTransferredToProfile =============================== */
function isHiveKioskTransferredToProfile(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveKioskTransferredToProfile"; }
exports.isHiveKioskTransferredToProfile = isHiveKioskTransferredToProfile;
class HiveKioskTransferredToProfile {
    constructor(typeArgs, fields) {
        this.$typeName = HiveKioskTransferredToProfile.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveKioskTransferredToProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.fromProfileAddr = fields.fromProfileAddr;
        ;
        this.fromUsername = fields.fromUsername;
        ;
        this.toProfileAddr = fields.toProfileAddr;
        ;
        this.toUsername = fields.toUsername;
    }
    static reified() { return { typeName: HiveKioskTransferredToProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveKioskTransferredToProfile.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveKioskTransferredToProfile.fromFields(fields), fromFieldsWithTypes: (item) => HiveKioskTransferredToProfile.fromFieldsWithTypes(item), fromBcs: (data) => HiveKioskTransferredToProfile.fromBcs(data), bcs: HiveKioskTransferredToProfile.bcs, fromJSONField: (field) => HiveKioskTransferredToProfile.fromJSONField(field), fromJSON: (json) => HiveKioskTransferredToProfile.fromJSON(json), fromSuiParsedData: (content) => HiveKioskTransferredToProfile.fromSuiParsedData(content), fetch: async (client, id) => HiveKioskTransferredToProfile.fetch(client, id), new: (fields) => { return new HiveKioskTransferredToProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveKioskTransferredToProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveKioskTransferredToProfile.reified()); }
    static get p() { return HiveKioskTransferredToProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveKioskTransferredToProfile", {
            from_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), from_username: structs_1.String.bcs, to_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), to_username: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return HiveKioskTransferredToProfile.reified().new({ fromProfileAddr: (0, reified_1.decodeFromFields)("address", fields.from_profile_addr), fromUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.from_username), toProfileAddr: (0, reified_1.decodeFromFields)("address", fields.to_profile_addr), toUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.to_username) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveKioskTransferredToProfile(item.type)) {
            throw new Error("not a HiveKioskTransferredToProfile type");
        }
        return HiveKioskTransferredToProfile.reified().new({ fromProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.from_profile_addr), fromUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.from_username), toProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.to_profile_addr), toUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.to_username) });
    }
    static fromBcs(data) { return HiveKioskTransferredToProfile.fromFields(HiveKioskTransferredToProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            fromProfileAddr: this.fromProfileAddr, fromUsername: this.fromUsername, toProfileAddr: this.toProfileAddr, toUsername: this.toUsername,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveKioskTransferredToProfile.reified().new({ fromProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.fromProfileAddr), fromUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.fromUsername), toProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.toProfileAddr), toUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.toUsername) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveKioskTransferredToProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveKioskTransferredToProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveKioskTransferredToProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveKioskTransferredToProfile object`);
    } return HiveKioskTransferredToProfile.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveKioskTransferredToProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveKioskTransferredToProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveKioskTransferredToProfile object`);
        }
        return HiveKioskTransferredToProfile.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveKioskTransferredToProfile = HiveKioskTransferredToProfile;
HiveKioskTransferredToProfile.$typeName = "0x0::hive_profile::HiveKioskTransferredToProfile";
HiveKioskTransferredToProfile.$numTypeParams = 0;
/* ============================== HiveManager =============================== */
function isHiveManager(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveManager"; }
exports.isHiveManager = isHiveManager;
class HiveManager {
    constructor(typeArgs, fields) {
        this.$typeName = HiveManager.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveManager.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.hiveProfile = fields.hiveProfile;
        ;
        this.configParams = fields.configParams;
        ;
        this.activeAssets = fields.activeAssets;
        ;
        this.lockedAssets = fields.lockedAssets;
        ;
        this.maxAssetsLimit = fields.maxAssetsLimit;
        ;
        this.assetsToProfileMapping = fields.assetsToProfileMapping;
        ;
        this.activePower = fields.activePower;
        ;
        this.supportedLockupDurations = fields.supportedLockupDurations;
        ;
        this.royalty = fields.royalty;
        ;
        this.gemsRoyalty = fields.gemsRoyalty;
        ;
        this.hiveTwap = fields.hiveTwap;
        ;
        this.buidlersRoyalty = fields.buidlersRoyalty;
        ;
        this.creatorRoyalties = fields.creatorRoyalties;
        ;
        this.keeperAccounts = fields.keeperAccounts;
        ;
        this.builderHiveAssets = fields.builderHiveAssets;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: HiveManager.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveManager.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveManager.fromFields(fields), fromFieldsWithTypes: (item) => HiveManager.fromFieldsWithTypes(item), fromBcs: (data) => HiveManager.fromBcs(data), bcs: HiveManager.bcs, fromJSONField: (field) => HiveManager.fromJSONField(field), fromJSON: (json) => HiveManager.fromJSON(json), fromSuiParsedData: (content) => HiveManager.fromSuiParsedData(content), fetch: async (client, id) => HiveManager.fetch(client, id), new: (fields) => { return new HiveManager([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveManager.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveManager.reified()); }
    static get p() { return HiveManager.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveManager", {
            id: structs_6.UID.bcs, hive_profile: HiveProfile.bcs, config_params: ConfigParams.bcs, active_assets: bcs_1.bcs.u64(), locked_assets: bcs_1.bcs.u64(), max_assets_limit: bcs_1.bcs.u64(), assets_to_profile_mapping: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), active_power: bcs_1.bcs.u128(), supported_lockup_durations: structs_7.Table.bcs, royalty: Royalty.bcs, gems_royalty: SubscriptionRoyalty.bcs, hive_twap: HiveTwapInfo.bcs, buidlers_royalty: structs_4.Balance.bcs, creator_royalties: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), keeper_accounts: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), builder_hive_assets: bcs_1.bcs.u64(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveManager.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), hiveProfile: (0, reified_1.decodeFromFields)(HiveProfile.reified(), fields.hive_profile), configParams: (0, reified_1.decodeFromFields)(ConfigParams.reified(), fields.config_params), activeAssets: (0, reified_1.decodeFromFields)("u64", fields.active_assets), lockedAssets: (0, reified_1.decodeFromFields)("u64", fields.locked_assets), maxAssetsLimit: (0, reified_1.decodeFromFields)("u64", fields.max_assets_limit), assetsToProfileMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), fields.assets_to_profile_mapping), activePower: (0, reified_1.decodeFromFields)("u128", fields.active_power), supportedLockupDurations: (0, reified_1.decodeFromFields)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), fields.supported_lockup_durations), royalty: (0, reified_1.decodeFromFields)(Royalty.reified(), fields.royalty), gemsRoyalty: (0, reified_1.decodeFromFields)(SubscriptionRoyalty.reified(), fields.gems_royalty), hiveTwap: (0, reified_1.decodeFromFields)(HiveTwapInfo.reified(), fields.hive_twap), buidlersRoyalty: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), fields.buidlers_royalty), creatorRoyalties: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())))), fields.creator_royalties), keeperAccounts: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), fields.keeper_accounts), builderHiveAssets: (0, reified_1.decodeFromFields)("u64", fields.builder_hive_assets), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveManager(item.type)) {
            throw new Error("not a HiveManager type");
        }
        return HiveManager.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), hiveProfile: (0, reified_1.decodeFromFieldsWithTypes)(HiveProfile.reified(), item.fields.hive_profile), configParams: (0, reified_1.decodeFromFieldsWithTypes)(ConfigParams.reified(), item.fields.config_params), activeAssets: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_assets), lockedAssets: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.locked_assets), maxAssetsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_assets_limit), assetsToProfileMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), item.fields.assets_to_profile_mapping), activePower: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.active_power), supportedLockupDurations: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), item.fields.supported_lockup_durations), royalty: (0, reified_1.decodeFromFieldsWithTypes)(Royalty.reified(), item.fields.royalty), gemsRoyalty: (0, reified_1.decodeFromFieldsWithTypes)(SubscriptionRoyalty.reified(), item.fields.gems_royalty), hiveTwap: (0, reified_1.decodeFromFieldsWithTypes)(HiveTwapInfo.reified(), item.fields.hive_twap), buidlersRoyalty: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), item.fields.buidlers_royalty), creatorRoyalties: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())))), item.fields.creator_royalties), keeperAccounts: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), item.fields.keeper_accounts), builderHiveAssets: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.builder_hive_assets), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveManager.fromFields(HiveManager.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, hiveProfile: this.hiveProfile.toJSONField(), configParams: this.configParams.toJSONField(), activeAssets: this.activeAssets.toString(), lockedAssets: this.lockedAssets.toString(), maxAssetsLimit: this.maxAssetsLimit.toString(), assetsToProfileMapping: this.assetsToProfileMapping.toJSONField(), activePower: this.activePower.toString(), supportedLockupDurations: this.supportedLockupDurations.toJSONField(), royalty: this.royalty.toJSONField(), gemsRoyalty: this.gemsRoyalty.toJSONField(), hiveTwap: this.hiveTwap.toJSONField(), buidlersRoyalty: this.buidlersRoyalty.toJSONField(), creatorRoyalties: this.creatorRoyalties.toJSONField(), keeperAccounts: this.keeperAccounts.toJSONField(), builderHiveAssets: this.builderHiveAssets.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveManager.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), hiveProfile: (0, reified_1.decodeFromJSONField)(HiveProfile.reified(), field.hiveProfile), configParams: (0, reified_1.decodeFromJSONField)(ConfigParams.reified(), field.configParams), activeAssets: (0, reified_1.decodeFromJSONField)("u64", field.activeAssets), lockedAssets: (0, reified_1.decodeFromJSONField)("u64", field.lockedAssets), maxAssetsLimit: (0, reified_1.decodeFromJSONField)("u64", field.maxAssetsLimit), assetsToProfileMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), field.assetsToProfileMapping), activePower: (0, reified_1.decodeFromJSONField)("u128", field.activePower), supportedLockupDurations: (0, reified_1.decodeFromJSONField)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), field.supportedLockupDurations), royalty: (0, reified_1.decodeFromJSONField)(Royalty.reified(), field.royalty), gemsRoyalty: (0, reified_1.decodeFromJSONField)(SubscriptionRoyalty.reified(), field.gemsRoyalty), hiveTwap: (0, reified_1.decodeFromJSONField)(HiveTwapInfo.reified(), field.hiveTwap), buidlersRoyalty: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), field.buidlersRoyalty), creatorRoyalties: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())))), field.creatorRoyalties), keeperAccounts: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), field.keeperAccounts), builderHiveAssets: (0, reified_1.decodeFromJSONField)("u64", field.builderHiveAssets), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveManager.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveManager.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveManager(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveManager object`);
    } return HiveManager.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveManager object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveManager(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveManager object`);
        }
        return HiveManager.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveManager = HiveManager;
HiveManager.$typeName = "0x0::hive_profile::HiveManager";
HiveManager.$numTypeParams = 0;
/* ============================== HiveProfile =============================== */
function isHiveProfile(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveProfile"; }
exports.isHiveProfile = isHiveProfile;
class HiveProfile {
    constructor(typeArgs, fields) {
        this.$typeName = HiveProfile.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.username = fields.username;
        ;
        this.bio = fields.bio;
        ;
        this.inscription = fields.inscription;
        ;
        this.creationTimestamp = fields.creationTimestamp;
        ;
        this.owner = fields.owner;
        ;
        this.isComposableProfile = fields.isComposableProfile;
        ;
        this.beehivePlan = fields.beehivePlan;
        ;
        this.subscribersList = fields.subscribersList;
        ;
        this.subscriptionsList = fields.subscriptionsList;
        ;
        this.availableGems = fields.availableGems;
        ;
        this.availableHsui = fields.availableHsui;
        ;
        this.lastActiveEpoch = fields.lastActiveEpoch;
        ;
        this.entropyUsedForCurEpoch = fields.entropyUsedForCurEpoch;
        ;
        this.hiveAssets = fields.hiveAssets;
        ;
        this.incomingBids = fields.incomingBids;
        ;
        this.borrowRecords = fields.borrowRecords;
        ;
        this.listingRecords = fields.listingRecords;
        ;
        this.bidRecords = fields.bidRecords;
        ;
        this.lendRecords = fields.lendRecords;
        ;
        this.installedApps = fields.installedApps;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: HiveProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveProfile.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveProfile.fromFields(fields), fromFieldsWithTypes: (item) => HiveProfile.fromFieldsWithTypes(item), fromBcs: (data) => HiveProfile.fromBcs(data), bcs: HiveProfile.bcs, fromJSONField: (field) => HiveProfile.fromJSONField(field), fromJSON: (json) => HiveProfile.fromJSON(json), fromSuiParsedData: (content) => HiveProfile.fromSuiParsedData(content), fetch: async (client, id) => HiveProfile.fetch(client, id), new: (fields) => { return new HiveProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveProfile.reified()); }
    static get p() { return HiveProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveProfile", {
            id: structs_6.UID.bcs, username: structs_1.String.bcs, bio: structs_3.String.bcs, inscription: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), creation_timestamp: bcs_1.bcs.u64(), owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), is_composable_profile: bcs_1.bcs.bool(), beehive_plan: structs_7.Table.bcs, subscribers_list: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), subscriptions_list: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), available_gems: structs_10.HiveGems.bcs, available_hsui: structs_4.Balance.bcs, last_active_epoch: bcs_1.bcs.u64(), entropy_used_for_cur_epoch: bcs_1.bcs.u64(), hive_assets: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), incoming_bids: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), borrow_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), listing_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), bid_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), lend_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), installed_apps: bcs_1.bcs.vector(structs_1.String.bcs), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveProfile.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), bio: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.bio), inscription: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(Inscription.reified())), fields.inscription), creationTimestamp: (0, reified_1.decodeFromFields)("u64", fields.creation_timestamp), owner: (0, reified_1.decodeFromFields)("address", fields.owner), isComposableProfile: (0, reified_1.decodeFromFields)("bool", fields.is_composable_profile), beehivePlan: (0, reified_1.decodeFromFields)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), fields.beehive_plan), subscribersList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), fields.subscribers_list), subscriptionsList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), fields.subscriptions_list), availableGems: (0, reified_1.decodeFromFields)(structs_10.HiveGems.reified(), fields.available_gems), availableHsui: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), fields.available_hsui), lastActiveEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_active_epoch), entropyUsedForCurEpoch: (0, reified_1.decodeFromFields)("u64", fields.entropy_used_for_cur_epoch), hiveAssets: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(HiveAsset.reified())), fields.hive_assets), incomingBids: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(reified.phantom(structs_9.DSUI.reified()))))), fields.incoming_bids), borrowRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(BorrowRecord.reified())), fields.borrow_records), listingRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), fields.listing_records), bidRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), fields.bid_records), lendRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(LendRecord.reified())), fields.lend_records), installedApps: (0, reified_1.decodeFromFields)(reified.vector(structs_1.String.reified()), fields.installed_apps), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveProfile(item.type)) {
            throw new Error("not a HiveProfile type");
        }
        return HiveProfile.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), bio: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.bio), inscription: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(Inscription.reified())), item.fields.inscription), creationTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.creation_timestamp), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), isComposableProfile: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_composable_profile), beehivePlan: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), item.fields.beehive_plan), subscribersList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), item.fields.subscribers_list), subscriptionsList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), item.fields.subscriptions_list), availableGems: (0, reified_1.decodeFromFieldsWithTypes)(structs_10.HiveGems.reified(), item.fields.available_gems), availableHsui: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), item.fields.available_hsui), lastActiveEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_active_epoch), entropyUsedForCurEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.entropy_used_for_cur_epoch), hiveAssets: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(HiveAsset.reified())), item.fields.hive_assets), incomingBids: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(reified.phantom(structs_9.DSUI.reified()))))), item.fields.incoming_bids), borrowRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(BorrowRecord.reified())), item.fields.borrow_records), listingRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), item.fields.listing_records), bidRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), item.fields.bid_records), lendRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(LendRecord.reified())), item.fields.lend_records), installedApps: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_1.String.reified()), item.fields.installed_apps), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveProfile.fromFields(HiveProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, username: this.username, bio: this.bio, inscription: this.inscription.toJSONField(), creationTimestamp: this.creationTimestamp.toString(), owner: this.owner, isComposableProfile: this.isComposableProfile, beehivePlan: this.beehivePlan.toJSONField(), subscribersList: this.subscribersList.toJSONField(), subscriptionsList: this.subscriptionsList.toJSONField(), availableGems: this.availableGems.toJSONField(), availableHsui: this.availableHsui.toJSONField(), lastActiveEpoch: this.lastActiveEpoch.toString(), entropyUsedForCurEpoch: this.entropyUsedForCurEpoch.toString(), hiveAssets: this.hiveAssets.toJSONField(), incomingBids: this.incomingBids.toJSONField(), borrowRecords: this.borrowRecords.toJSONField(), listingRecords: this.listingRecords.toJSONField(), bidRecords: this.bidRecords.toJSONField(), lendRecords: this.lendRecords.toJSONField(), installedApps: (0, reified_1.fieldToJSON)(`vector<0x1::ascii::String>`, this.installedApps), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveProfile.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), bio: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.bio), inscription: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(Inscription.reified())), field.inscription), creationTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.creationTimestamp), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), isComposableProfile: (0, reified_1.decodeFromJSONField)("bool", field.isComposableProfile), beehivePlan: (0, reified_1.decodeFromJSONField)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), field.beehivePlan), subscribersList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), field.subscribersList), subscriptionsList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), field.subscriptionsList), availableGems: (0, reified_1.decodeFromJSONField)(structs_10.HiveGems.reified(), field.availableGems), availableHsui: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), field.availableHsui), lastActiveEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastActiveEpoch), entropyUsedForCurEpoch: (0, reified_1.decodeFromJSONField)("u64", field.entropyUsedForCurEpoch), hiveAssets: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(HiveAsset.reified())), field.hiveAssets), incomingBids: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(reified.phantom(structs_9.DSUI.reified()))))), field.incomingBids), borrowRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(BorrowRecord.reified())), field.borrowRecords), listingRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), field.listingRecords), bidRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), field.bidRecords), lendRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(LendRecord.reified())), field.lendRecords), installedApps: (0, reified_1.decodeFromJSONField)(reified.vector(structs_1.String.reified()), field.installedApps), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveProfile object`);
    } return HiveProfile.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveProfile object`);
        }
        return HiveProfile.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveProfile = HiveProfile;
HiveProfile.$typeName = "0x0::hive_profile::HiveProfile";
HiveProfile.$numTypeParams = 0;
/* ============================== HiveProfileDestroyed =============================== */
function isHiveProfileDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveProfileDestroyed"; }
exports.isHiveProfileDestroyed = isHiveProfileDestroyed;
class HiveProfileDestroyed {
    constructor(typeArgs, fields) {
        this.$typeName = HiveProfileDestroyed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveProfileDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.owner = fields.owner;
    }
    static reified() { return { typeName: HiveProfileDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveProfileDestroyed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveProfileDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => HiveProfileDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => HiveProfileDestroyed.fromBcs(data), bcs: HiveProfileDestroyed.bcs, fromJSONField: (field) => HiveProfileDestroyed.fromJSONField(field), fromJSON: (json) => HiveProfileDestroyed.fromJSON(json), fromSuiParsedData: (content) => HiveProfileDestroyed.fromSuiParsedData(content), fetch: async (client, id) => HiveProfileDestroyed.fetch(client, id), new: (fields) => { return new HiveProfileDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveProfileDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveProfileDestroyed.reified()); }
    static get p() { return HiveProfileDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveProfileDestroyed", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return HiveProfileDestroyed.reified().new({ username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), owner: (0, reified_1.decodeFromFields)("address", fields.owner) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveProfileDestroyed(item.type)) {
            throw new Error("not a HiveProfileDestroyed type");
        }
        return HiveProfileDestroyed.reified().new({ username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner) });
    }
    static fromBcs(data) { return HiveProfileDestroyed.fromFields(HiveProfileDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            username: this.username, profileAddr: this.profileAddr, owner: this.owner,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveProfileDestroyed.reified().new({ username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), owner: (0, reified_1.decodeFromJSONField)("address", field.owner) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveProfileDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveProfileDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveProfileDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveProfileDestroyed object`);
    } return HiveProfileDestroyed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveProfileDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveProfileDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveProfileDestroyed object`);
        }
        return HiveProfileDestroyed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveProfileDestroyed = HiveProfileDestroyed;
HiveProfileDestroyed.$typeName = "0x0::hive_profile::HiveProfileDestroyed";
HiveProfileDestroyed.$numTypeParams = 0;
/* ============================== HiveProfileKrafted =============================== */
function isHiveProfileKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveProfileKrafted"; }
exports.isHiveProfileKrafted = isHiveProfileKrafted;
class HiveProfileKrafted {
    constructor(typeArgs, fields) {
        this.$typeName = HiveProfileKrafted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveProfileKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.name = fields.name;
        ;
        this.bio = fields.bio;
        ;
        this.newProfileAddr = fields.newProfileAddr;
        ;
        this.krafter = fields.krafter;
        ;
        this.fee = fields.fee;
        ;
        this.isComposableProfile = fields.isComposableProfile;
    }
    static reified() { return { typeName: HiveProfileKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveProfileKrafted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveProfileKrafted.fromFields(fields), fromFieldsWithTypes: (item) => HiveProfileKrafted.fromFieldsWithTypes(item), fromBcs: (data) => HiveProfileKrafted.fromBcs(data), bcs: HiveProfileKrafted.bcs, fromJSONField: (field) => HiveProfileKrafted.fromJSONField(field), fromJSON: (json) => HiveProfileKrafted.fromJSON(json), fromSuiParsedData: (content) => HiveProfileKrafted.fromSuiParsedData(content), fetch: async (client, id) => HiveProfileKrafted.fetch(client, id), new: (fields) => { return new HiveProfileKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveProfileKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveProfileKrafted.reified()); }
    static get p() { return HiveProfileKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveProfileKrafted", {
            name: structs_3.String.bcs, bio: structs_3.String.bcs, new_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), krafter: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), fee: bcs_1.bcs.u64(), is_composable_profile: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return HiveProfileKrafted.reified().new({ name: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.name), bio: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.bio), newProfileAddr: (0, reified_1.decodeFromFields)("address", fields.new_profile_addr), krafter: (0, reified_1.decodeFromFields)("address", fields.krafter), fee: (0, reified_1.decodeFromFields)("u64", fields.fee), isComposableProfile: (0, reified_1.decodeFromFields)("bool", fields.is_composable_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveProfileKrafted(item.type)) {
            throw new Error("not a HiveProfileKrafted type");
        }
        return HiveProfileKrafted.reified().new({ name: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.name), bio: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.bio), newProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.new_profile_addr), krafter: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.krafter), fee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee), isComposableProfile: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_composable_profile) });
    }
    static fromBcs(data) { return HiveProfileKrafted.fromFields(HiveProfileKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            name: this.name, bio: this.bio, newProfileAddr: this.newProfileAddr, krafter: this.krafter, fee: this.fee.toString(), isComposableProfile: this.isComposableProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveProfileKrafted.reified().new({ name: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.name), bio: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.bio), newProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.newProfileAddr), krafter: (0, reified_1.decodeFromJSONField)("address", field.krafter), fee: (0, reified_1.decodeFromJSONField)("u64", field.fee), isComposableProfile: (0, reified_1.decodeFromJSONField)("bool", field.isComposableProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveProfileKrafted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveProfileKrafted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveProfileKrafted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveProfileKrafted object`);
    } return HiveProfileKrafted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveProfileKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveProfileKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveProfileKrafted object`);
        }
        return HiveProfileKrafted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveProfileKrafted = HiveProfileKrafted;
HiveProfileKrafted.$typeName = "0x0::hive_profile::HiveProfileKrafted";
HiveProfileKrafted.$numTypeParams = 0;
/* ============================== HiveProfileMappingStore =============================== */
function isHiveProfileMappingStore(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveProfileMappingStore"; }
exports.isHiveProfileMappingStore = isHiveProfileMappingStore;
class HiveProfileMappingStore {
    constructor(typeArgs, fields) {
        this.$typeName = HiveProfileMappingStore.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveProfileMappingStore.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.ownerToProfileMapping = fields.ownerToProfileMapping;
        ;
        this.usernameToProfileMapping = fields.usernameToProfileMapping;
        ;
        this.usernameToCompProfileMapping = fields.usernameToCompProfileMapping;
        ;
        this.profileToCreatorKioskMapping = fields.profileToCreatorKioskMapping;
        ;
        this.appNamesToCapMapping = fields.appNamesToCapMapping;
        ;
        this.kioskNamesMapping = fields.kioskNamesMapping;
        ;
        this.reservedUsernamesToAccessorMapping = fields.reservedUsernamesToAccessorMapping;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: HiveProfileMappingStore.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveProfileMappingStore.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveProfileMappingStore.fromFields(fields), fromFieldsWithTypes: (item) => HiveProfileMappingStore.fromFieldsWithTypes(item), fromBcs: (data) => HiveProfileMappingStore.fromBcs(data), bcs: HiveProfileMappingStore.bcs, fromJSONField: (field) => HiveProfileMappingStore.fromJSONField(field), fromJSON: (json) => HiveProfileMappingStore.fromJSON(json), fromSuiParsedData: (content) => HiveProfileMappingStore.fromSuiParsedData(content), fetch: async (client, id) => HiveProfileMappingStore.fetch(client, id), new: (fields) => { return new HiveProfileMappingStore([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveProfileMappingStore.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveProfileMappingStore.reified()); }
    static get p() { return HiveProfileMappingStore.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveProfileMappingStore", {
            id: structs_6.UID.bcs, owner_to_profile_mapping: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), username_to_profile_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), username_to_comp_profile_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), profile_to_creator_kiosk_mapping: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), app_names_to_cap_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), kiosk_names_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), reserved_usernames_to_accessor_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveProfileMappingStore.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), ownerToProfileMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("address")), fields.owner_to_profile_mapping), usernameToProfileMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.username_to_profile_mapping), usernameToCompProfileMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.username_to_comp_profile_mapping), profileToCreatorKioskMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("address"))), fields.profile_to_creator_kiosk_mapping), appNamesToCapMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.app_names_to_cap_mapping), kioskNamesMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.kiosk_names_mapping), reservedUsernamesToAccessorMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.reserved_usernames_to_accessor_mapping), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveProfileMappingStore(item.type)) {
            throw new Error("not a HiveProfileMappingStore type");
        }
        return HiveProfileMappingStore.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), ownerToProfileMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("address")), item.fields.owner_to_profile_mapping), usernameToProfileMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.username_to_profile_mapping), usernameToCompProfileMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.username_to_comp_profile_mapping), profileToCreatorKioskMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("address"))), item.fields.profile_to_creator_kiosk_mapping), appNamesToCapMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.app_names_to_cap_mapping), kioskNamesMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.kiosk_names_mapping), reservedUsernamesToAccessorMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.reserved_usernames_to_accessor_mapping), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveProfileMappingStore.fromFields(HiveProfileMappingStore.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, ownerToProfileMapping: this.ownerToProfileMapping.toJSONField(), usernameToProfileMapping: this.usernameToProfileMapping.toJSONField(), usernameToCompProfileMapping: this.usernameToCompProfileMapping.toJSONField(), profileToCreatorKioskMapping: this.profileToCreatorKioskMapping.toJSONField(), appNamesToCapMapping: this.appNamesToCapMapping.toJSONField(), kioskNamesMapping: this.kioskNamesMapping.toJSONField(), reservedUsernamesToAccessorMapping: this.reservedUsernamesToAccessorMapping.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveProfileMappingStore.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), ownerToProfileMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("address")), field.ownerToProfileMapping), usernameToProfileMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.usernameToProfileMapping), usernameToCompProfileMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.usernameToCompProfileMapping), profileToCreatorKioskMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("address"))), field.profileToCreatorKioskMapping), appNamesToCapMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.appNamesToCapMapping), kioskNamesMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.kioskNamesMapping), reservedUsernamesToAccessorMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.reservedUsernamesToAccessorMapping), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveProfileMappingStore.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveProfileMappingStore.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveProfileMappingStore(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveProfileMappingStore object`);
    } return HiveProfileMappingStore.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveProfileMappingStore object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveProfileMappingStore(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveProfileMappingStore object`);
        }
        return HiveProfileMappingStore.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveProfileMappingStore = HiveProfileMappingStore;
HiveProfileMappingStore.$typeName = "0x0::hive_profile::HiveProfileMappingStore";
HiveProfileMappingStore.$numTypeParams = 0;
/* ============================== HiveTwapInfo =============================== */
function isHiveTwapInfo(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveTwapInfo"; }
exports.isHiveTwapInfo = isHiveTwapInfo;
class HiveTwapInfo {
    constructor(typeArgs, fields) {
        this.$typeName = HiveTwapInfo.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveTwapInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.lastUpdateTimestamp = fields.lastUpdateTimestamp;
        ;
        this.hiveSuiTwap = fields.hiveSuiTwap;
        ;
        this.suiUsdcTwap = fields.suiUsdcTwap;
        ;
        this.hiveUsdcTwap = fields.hiveUsdcTwap;
    }
    static reified() { return { typeName: HiveTwapInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveTwapInfo.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveTwapInfo.fromFields(fields), fromFieldsWithTypes: (item) => HiveTwapInfo.fromFieldsWithTypes(item), fromBcs: (data) => HiveTwapInfo.fromBcs(data), bcs: HiveTwapInfo.bcs, fromJSONField: (field) => HiveTwapInfo.fromJSONField(field), fromJSON: (json) => HiveTwapInfo.fromJSON(json), fromSuiParsedData: (content) => HiveTwapInfo.fromSuiParsedData(content), fetch: async (client, id) => HiveTwapInfo.fetch(client, id), new: (fields) => { return new HiveTwapInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveTwapInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveTwapInfo.reified()); }
    static get p() { return HiveTwapInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveTwapInfo", {
            last_update_timestamp: bcs_1.bcs.u64(), hive_sui_twap: bcs_1.bcs.u256(), sui_usdc_twap: bcs_1.bcs.u256(), hive_usdc_twap: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(fields) { return HiveTwapInfo.reified().new({ lastUpdateTimestamp: (0, reified_1.decodeFromFields)("u64", fields.last_update_timestamp), hiveSuiTwap: (0, reified_1.decodeFromFields)("u256", fields.hive_sui_twap), suiUsdcTwap: (0, reified_1.decodeFromFields)("u256", fields.sui_usdc_twap), hiveUsdcTwap: (0, reified_1.decodeFromFields)("u256", fields.hive_usdc_twap) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveTwapInfo(item.type)) {
            throw new Error("not a HiveTwapInfo type");
        }
        return HiveTwapInfo.reified().new({ lastUpdateTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_update_timestamp), hiveSuiTwap: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_sui_twap), suiUsdcTwap: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.sui_usdc_twap), hiveUsdcTwap: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_usdc_twap) });
    }
    static fromBcs(data) { return HiveTwapInfo.fromFields(HiveTwapInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            lastUpdateTimestamp: this.lastUpdateTimestamp.toString(), hiveSuiTwap: this.hiveSuiTwap.toString(), suiUsdcTwap: this.suiUsdcTwap.toString(), hiveUsdcTwap: this.hiveUsdcTwap.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveTwapInfo.reified().new({ lastUpdateTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.lastUpdateTimestamp), hiveSuiTwap: (0, reified_1.decodeFromJSONField)("u256", field.hiveSuiTwap), suiUsdcTwap: (0, reified_1.decodeFromJSONField)("u256", field.suiUsdcTwap), hiveUsdcTwap: (0, reified_1.decodeFromJSONField)("u256", field.hiveUsdcTwap) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveTwapInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveTwapInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveTwapInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveTwapInfo object`);
    } return HiveTwapInfo.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveTwapInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveTwapInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveTwapInfo object`);
        }
        return HiveTwapInfo.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveTwapInfo = HiveTwapInfo;
HiveTwapInfo.$typeName = "0x0::hive_profile::HiveTwapInfo";
HiveTwapInfo.$numTypeParams = 0;
/* ============================== HiveTwapUpdated =============================== */
function isHiveTwapUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::HiveTwapUpdated"; }
exports.isHiveTwapUpdated = isHiveTwapUpdated;
class HiveTwapUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = HiveTwapUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveTwapUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.timestamp = fields.timestamp;
        ;
        this.hiveSuiTwap = fields.hiveSuiTwap;
        ;
        this.suiUsdcTwap = fields.suiUsdcTwap;
        ;
        this.hiveUsdcTwap = fields.hiveUsdcTwap;
    }
    static reified() { return { typeName: HiveTwapUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveTwapUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => HiveTwapUpdated.fromFields(fields), fromFieldsWithTypes: (item) => HiveTwapUpdated.fromFieldsWithTypes(item), fromBcs: (data) => HiveTwapUpdated.fromBcs(data), bcs: HiveTwapUpdated.bcs, fromJSONField: (field) => HiveTwapUpdated.fromJSONField(field), fromJSON: (json) => HiveTwapUpdated.fromJSON(json), fromSuiParsedData: (content) => HiveTwapUpdated.fromSuiParsedData(content), fetch: async (client, id) => HiveTwapUpdated.fetch(client, id), new: (fields) => { return new HiveTwapUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveTwapUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveTwapUpdated.reified()); }
    static get p() { return HiveTwapUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveTwapUpdated", {
            timestamp: bcs_1.bcs.u64(), hive_sui_twap: bcs_1.bcs.u256(), sui_usdc_twap: bcs_1.bcs.u256(), hive_usdc_twap: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(fields) { return HiveTwapUpdated.reified().new({ timestamp: (0, reified_1.decodeFromFields)("u64", fields.timestamp), hiveSuiTwap: (0, reified_1.decodeFromFields)("u256", fields.hive_sui_twap), suiUsdcTwap: (0, reified_1.decodeFromFields)("u256", fields.sui_usdc_twap), hiveUsdcTwap: (0, reified_1.decodeFromFields)("u256", fields.hive_usdc_twap) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveTwapUpdated(item.type)) {
            throw new Error("not a HiveTwapUpdated type");
        }
        return HiveTwapUpdated.reified().new({ timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp), hiveSuiTwap: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_sui_twap), suiUsdcTwap: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.sui_usdc_twap), hiveUsdcTwap: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_usdc_twap) });
    }
    static fromBcs(data) { return HiveTwapUpdated.fromFields(HiveTwapUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            timestamp: this.timestamp.toString(), hiveSuiTwap: this.hiveSuiTwap.toString(), suiUsdcTwap: this.suiUsdcTwap.toString(), hiveUsdcTwap: this.hiveUsdcTwap.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveTwapUpdated.reified().new({ timestamp: (0, reified_1.decodeFromJSONField)("u64", field.timestamp), hiveSuiTwap: (0, reified_1.decodeFromJSONField)("u256", field.hiveSuiTwap), suiUsdcTwap: (0, reified_1.decodeFromJSONField)("u256", field.suiUsdcTwap), hiveUsdcTwap: (0, reified_1.decodeFromJSONField)("u256", field.hiveUsdcTwap) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveTwapUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveTwapUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveTwapUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveTwapUpdated object`);
    } return HiveTwapUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveTwapUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveTwapUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveTwapUpdated object`);
        }
        return HiveTwapUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveTwapUpdated = HiveTwapUpdated;
HiveTwapUpdated.$typeName = "0x0::hive_profile::HiveTwapUpdated";
HiveTwapUpdated.$numTypeParams = 0;
/* ============================== Inscription =============================== */
function isInscription(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::Inscription"; }
exports.isInscription = isInscription;
class Inscription {
    constructor(typeArgs, fields) {
        this.$typeName = Inscription.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Inscription.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.type = fields.type;
        ;
        this.base64 = fields.base64;
    }
    static reified() { return { typeName: Inscription.$typeName, fullTypeName: (0, util_1.composeSuiType)(Inscription.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Inscription.fromFields(fields), fromFieldsWithTypes: (item) => Inscription.fromFieldsWithTypes(item), fromBcs: (data) => Inscription.fromBcs(data), bcs: Inscription.bcs, fromJSONField: (field) => Inscription.fromJSONField(field), fromJSON: (json) => Inscription.fromJSON(json), fromSuiParsedData: (content) => Inscription.fromSuiParsedData(content), fetch: async (client, id) => Inscription.fetch(client, id), new: (fields) => { return new Inscription([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Inscription.reified(); }
    static phantom() { return (0, reified_1.phantom)(Inscription.reified()); }
    static get p() { return Inscription.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Inscription", {
            type: structs_3.String.bcs, base64: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return Inscription.reified().new({ type: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.type), base64: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.base64) }); }
    static fromFieldsWithTypes(item) {
        if (!isInscription(item.type)) {
            throw new Error("not a Inscription type");
        }
        return Inscription.reified().new({ type: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.type), base64: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.base64) });
    }
    static fromBcs(data) { return Inscription.fromFields(Inscription.bcs.parse(data)); }
    toJSONField() {
        return {
            type: this.type, base64: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.base64),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Inscription.reified().new({ type: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.type), base64: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.base64) }); }
    static fromJSON(json) {
        if (json.$typeName !== Inscription.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Inscription.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isInscription(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Inscription object`);
    } return Inscription.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Inscription object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isInscription(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Inscription object`);
        }
        return Inscription.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Inscription = Inscription;
Inscription.$typeName = "0x0::hive_profile::Inscription";
Inscription.$numTypeParams = 0;
/* ============================== InscriptionSetForProfile =============================== */
function isInscriptionSetForProfile(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::InscriptionSetForProfile"; }
exports.isInscriptionSetForProfile = isInscriptionSetForProfile;
class InscriptionSetForProfile {
    constructor(typeArgs, fields) {
        this.$typeName = InscriptionSetForProfile.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(InscriptionSetForProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.type = fields.type;
        ;
        this.base64 = fields.base64;
    }
    static reified() { return { typeName: InscriptionSetForProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(InscriptionSetForProfile.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => InscriptionSetForProfile.fromFields(fields), fromFieldsWithTypes: (item) => InscriptionSetForProfile.fromFieldsWithTypes(item), fromBcs: (data) => InscriptionSetForProfile.fromBcs(data), bcs: InscriptionSetForProfile.bcs, fromJSONField: (field) => InscriptionSetForProfile.fromJSONField(field), fromJSON: (json) => InscriptionSetForProfile.fromJSON(json), fromSuiParsedData: (content) => InscriptionSetForProfile.fromSuiParsedData(content), fetch: async (client, id) => InscriptionSetForProfile.fetch(client, id), new: (fields) => { return new InscriptionSetForProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return InscriptionSetForProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(InscriptionSetForProfile.reified()); }
    static get p() { return InscriptionSetForProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("InscriptionSetForProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_3.String.bcs, type: structs_3.String.bcs, base64: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return InscriptionSetForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.username), type: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.type), base64: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.base64) }); }
    static fromFieldsWithTypes(item) {
        if (!isInscriptionSetForProfile(item.type)) {
            throw new Error("not a InscriptionSetForProfile type");
        }
        return InscriptionSetForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.username), type: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.type), base64: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.base64) });
    }
    static fromBcs(data) { return InscriptionSetForProfile.fromFields(InscriptionSetForProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, username: this.username, type: this.type, base64: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.base64),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return InscriptionSetForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.username), type: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.type), base64: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.base64) }); }
    static fromJSON(json) {
        if (json.$typeName !== InscriptionSetForProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return InscriptionSetForProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isInscriptionSetForProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a InscriptionSetForProfile object`);
    } return InscriptionSetForProfile.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching InscriptionSetForProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isInscriptionSetForProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a InscriptionSetForProfile object`);
        }
        return InscriptionSetForProfile.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.InscriptionSetForProfile = InscriptionSetForProfile;
InscriptionSetForProfile.$typeName = "0x0::hive_profile::InscriptionSetForProfile";
InscriptionSetForProfile.$numTypeParams = 0;
/* ============================== JoinedHiveOfProfile =============================== */
function isJoinedHiveOfProfile(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::JoinedHiveOfProfile"; }
exports.isJoinedHiveOfProfile = isJoinedHiveOfProfile;
class JoinedHiveOfProfile {
    constructor(typeArgs, fields) {
        this.$typeName = JoinedHiveOfProfile.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(JoinedHiveOfProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.subscriberProfileAddr = fields.subscriberProfileAddr;
        ;
        this.hiveOwnerProfile = fields.hiveOwnerProfile;
        ;
        this.subscriberUsername = fields.subscriberUsername;
        ;
        this.hiveOwnerUsername = fields.hiveOwnerUsername;
        ;
        this.accessType = fields.accessType;
        ;
        this.accessCost = fields.accessCost;
        ;
        this.nextPaymentTimestamp = fields.nextPaymentTimestamp;
    }
    static reified() { return { typeName: JoinedHiveOfProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(JoinedHiveOfProfile.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => JoinedHiveOfProfile.fromFields(fields), fromFieldsWithTypes: (item) => JoinedHiveOfProfile.fromFieldsWithTypes(item), fromBcs: (data) => JoinedHiveOfProfile.fromBcs(data), bcs: JoinedHiveOfProfile.bcs, fromJSONField: (field) => JoinedHiveOfProfile.fromJSONField(field), fromJSON: (json) => JoinedHiveOfProfile.fromJSON(json), fromSuiParsedData: (content) => JoinedHiveOfProfile.fromSuiParsedData(content), fetch: async (client, id) => JoinedHiveOfProfile.fetch(client, id), new: (fields) => { return new JoinedHiveOfProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return JoinedHiveOfProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(JoinedHiveOfProfile.reified()); }
    static get p() { return JoinedHiveOfProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("JoinedHiveOfProfile", {
            subscriber_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), hive_owner_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), subscriber_username: structs_3.String.bcs, hive_owner_username: structs_3.String.bcs, access_type: bcs_1.bcs.u8(), access_cost: bcs_1.bcs.u64(), next_payment_timestamp: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return JoinedHiveOfProfile.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFields)("address", fields.subscriber_profile_addr), hiveOwnerProfile: (0, reified_1.decodeFromFields)("address", fields.hive_owner_profile), subscriberUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.subscriber_username), hiveOwnerUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.hive_owner_username), accessType: (0, reified_1.decodeFromFields)("u8", fields.access_type), accessCost: (0, reified_1.decodeFromFields)("u64", fields.access_cost), nextPaymentTimestamp: (0, reified_1.decodeFromFields)("u64", fields.next_payment_timestamp) }); }
    static fromFieldsWithTypes(item) {
        if (!isJoinedHiveOfProfile(item.type)) {
            throw new Error("not a JoinedHiveOfProfile type");
        }
        return JoinedHiveOfProfile.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscriber_profile_addr), hiveOwnerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.hive_owner_profile), subscriberUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.subscriber_username), hiveOwnerUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.hive_owner_username), accessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.access_type), accessCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.access_cost), nextPaymentTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_payment_timestamp) });
    }
    static fromBcs(data) { return JoinedHiveOfProfile.fromFields(JoinedHiveOfProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            subscriberProfileAddr: this.subscriberProfileAddr, hiveOwnerProfile: this.hiveOwnerProfile, subscriberUsername: this.subscriberUsername, hiveOwnerUsername: this.hiveOwnerUsername, accessType: this.accessType, accessCost: this.accessCost.toString(), nextPaymentTimestamp: this.nextPaymentTimestamp.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return JoinedHiveOfProfile.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.subscriberProfileAddr), hiveOwnerProfile: (0, reified_1.decodeFromJSONField)("address", field.hiveOwnerProfile), subscriberUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.subscriberUsername), hiveOwnerUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.hiveOwnerUsername), accessType: (0, reified_1.decodeFromJSONField)("u8", field.accessType), accessCost: (0, reified_1.decodeFromJSONField)("u64", field.accessCost), nextPaymentTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.nextPaymentTimestamp) }); }
    static fromJSON(json) {
        if (json.$typeName !== JoinedHiveOfProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return JoinedHiveOfProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isJoinedHiveOfProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a JoinedHiveOfProfile object`);
    } return JoinedHiveOfProfile.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching JoinedHiveOfProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isJoinedHiveOfProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a JoinedHiveOfProfile object`);
        }
        return JoinedHiveOfProfile.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.JoinedHiveOfProfile = JoinedHiveOfProfile;
JoinedHiveOfProfile.$typeName = "0x0::hive_profile::JoinedHiveOfProfile";
JoinedHiveOfProfile.$numTypeParams = 0;
/* ============================== KioskOwnershipTransferred =============================== */
function isKioskOwnershipTransferred(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::KioskOwnershipTransferred"; }
exports.isKioskOwnershipTransferred = isKioskOwnershipTransferred;
class KioskOwnershipTransferred {
    constructor(typeArgs, fields) {
        this.$typeName = KioskOwnershipTransferred.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(KioskOwnershipTransferred.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.collectionName = fields.collectionName;
        ;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.creatorProfileUsername = fields.creatorProfileUsername;
        ;
        this.newCreatorProfile = fields.newCreatorProfile;
        ;
        this.newCreatorProfileUsername = fields.newCreatorProfileUsername;
        ;
        this.kiosk = fields.kiosk;
    }
    static reified() { return { typeName: KioskOwnershipTransferred.$typeName, fullTypeName: (0, util_1.composeSuiType)(KioskOwnershipTransferred.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => KioskOwnershipTransferred.fromFields(fields), fromFieldsWithTypes: (item) => KioskOwnershipTransferred.fromFieldsWithTypes(item), fromBcs: (data) => KioskOwnershipTransferred.fromBcs(data), bcs: KioskOwnershipTransferred.bcs, fromJSONField: (field) => KioskOwnershipTransferred.fromJSONField(field), fromJSON: (json) => KioskOwnershipTransferred.fromJSON(json), fromSuiParsedData: (content) => KioskOwnershipTransferred.fromSuiParsedData(content), fetch: async (client, id) => KioskOwnershipTransferred.fetch(client, id), new: (fields) => { return new KioskOwnershipTransferred([], fields); }, kind: "StructClassReified", }; }
    static get r() { return KioskOwnershipTransferred.reified(); }
    static phantom() { return (0, reified_1.phantom)(KioskOwnershipTransferred.reified()); }
    static get p() { return KioskOwnershipTransferred.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("KioskOwnershipTransferred", {
            collection_name: structs_3.String.bcs, creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), creator_profile_username: structs_1.String.bcs, new_creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), new_creator_profile_username: structs_1.String.bcs, kiosk: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return KioskOwnershipTransferred.reified().new({ collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), creatorProfileUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.creator_profile_username), newCreatorProfile: (0, reified_1.decodeFromFields)("address", fields.new_creator_profile), newCreatorProfileUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.new_creator_profile_username), kiosk: (0, reified_1.decodeFromFields)("address", fields.kiosk) }); }
    static fromFieldsWithTypes(item) {
        if (!isKioskOwnershipTransferred(item.type)) {
            throw new Error("not a KioskOwnershipTransferred type");
        }
        return KioskOwnershipTransferred.reified().new({ collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), creatorProfileUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.creator_profile_username), newCreatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.new_creator_profile), newCreatorProfileUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.new_creator_profile_username), kiosk: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.kiosk) });
    }
    static fromBcs(data) { return KioskOwnershipTransferred.fromFields(KioskOwnershipTransferred.bcs.parse(data)); }
    toJSONField() {
        return {
            collectionName: this.collectionName, creatorProfile: this.creatorProfile, creatorProfileUsername: this.creatorProfileUsername, newCreatorProfile: this.newCreatorProfile, newCreatorProfileUsername: this.newCreatorProfileUsername, kiosk: this.kiosk,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return KioskOwnershipTransferred.reified().new({ collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), creatorProfileUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.creatorProfileUsername), newCreatorProfile: (0, reified_1.decodeFromJSONField)("address", field.newCreatorProfile), newCreatorProfileUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.newCreatorProfileUsername), kiosk: (0, reified_1.decodeFromJSONField)("address", field.kiosk) }); }
    static fromJSON(json) {
        if (json.$typeName !== KioskOwnershipTransferred.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return KioskOwnershipTransferred.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isKioskOwnershipTransferred(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a KioskOwnershipTransferred object`);
    } return KioskOwnershipTransferred.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching KioskOwnershipTransferred object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isKioskOwnershipTransferred(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a KioskOwnershipTransferred object`);
        }
        return KioskOwnershipTransferred.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.KioskOwnershipTransferred = KioskOwnershipTransferred;
KioskOwnershipTransferred.$typeName = "0x0::hive_profile::KioskOwnershipTransferred";
KioskOwnershipTransferred.$numTypeParams = 0;
/* ============================== KraftRoyaltyUpdated =============================== */
function isKraftRoyaltyUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::KraftRoyaltyUpdated"; }
exports.isKraftRoyaltyUpdated = isKraftRoyaltyUpdated;
class KraftRoyaltyUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = KraftRoyaltyUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(KraftRoyaltyUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.royaltyNum = fields.royaltyNum;
        ;
        this.royaltyDenom = fields.royaltyDenom;
        ;
        this.assetsDispersalPercent = fields.assetsDispersalPercent;
        ;
        this.creatorsRoyaltyPercent = fields.creatorsRoyaltyPercent;
        ;
        this.gemsRoyaltyNum = fields.gemsRoyaltyNum;
        ;
        this.gemsRoyaltyDenom = fields.gemsRoyaltyDenom;
        ;
        this.gemsTreasuryPercent = fields.gemsTreasuryPercent;
        ;
        this.gemsBurnPercent = fields.gemsBurnPercent;
    }
    static reified() { return { typeName: KraftRoyaltyUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(KraftRoyaltyUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => KraftRoyaltyUpdated.fromFields(fields), fromFieldsWithTypes: (item) => KraftRoyaltyUpdated.fromFieldsWithTypes(item), fromBcs: (data) => KraftRoyaltyUpdated.fromBcs(data), bcs: KraftRoyaltyUpdated.bcs, fromJSONField: (field) => KraftRoyaltyUpdated.fromJSONField(field), fromJSON: (json) => KraftRoyaltyUpdated.fromJSON(json), fromSuiParsedData: (content) => KraftRoyaltyUpdated.fromSuiParsedData(content), fetch: async (client, id) => KraftRoyaltyUpdated.fetch(client, id), new: (fields) => { return new KraftRoyaltyUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return KraftRoyaltyUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(KraftRoyaltyUpdated.reified()); }
    static get p() { return KraftRoyaltyUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("KraftRoyaltyUpdated", {
            royalty_num: bcs_1.bcs.u64(), royalty_denom: bcs_1.bcs.u64(), assets_dispersal_percent: bcs_1.bcs.u64(), creators_royalty_percent: bcs_1.bcs.u64(), gems_royalty_num: bcs_1.bcs.u64(), gems_royalty_denom: bcs_1.bcs.u64(), gems_treasury_percent: bcs_1.bcs.u64(), gems_burn_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return KraftRoyaltyUpdated.reified().new({ royaltyNum: (0, reified_1.decodeFromFields)("u64", fields.royalty_num), royaltyDenom: (0, reified_1.decodeFromFields)("u64", fields.royalty_denom), assetsDispersalPercent: (0, reified_1.decodeFromFields)("u64", fields.assets_dispersal_percent), creatorsRoyaltyPercent: (0, reified_1.decodeFromFields)("u64", fields.creators_royalty_percent), gemsRoyaltyNum: (0, reified_1.decodeFromFields)("u64", fields.gems_royalty_num), gemsRoyaltyDenom: (0, reified_1.decodeFromFields)("u64", fields.gems_royalty_denom), gemsTreasuryPercent: (0, reified_1.decodeFromFields)("u64", fields.gems_treasury_percent), gemsBurnPercent: (0, reified_1.decodeFromFields)("u64", fields.gems_burn_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isKraftRoyaltyUpdated(item.type)) {
            throw new Error("not a KraftRoyaltyUpdated type");
        }
        return KraftRoyaltyUpdated.reified().new({ royaltyNum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.royalty_num), royaltyDenom: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.royalty_denom), assetsDispersalPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.assets_dispersal_percent), creatorsRoyaltyPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.creators_royalty_percent), gemsRoyaltyNum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_royalty_num), gemsRoyaltyDenom: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_royalty_denom), gemsTreasuryPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_treasury_percent), gemsBurnPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_burn_percent) });
    }
    static fromBcs(data) { return KraftRoyaltyUpdated.fromFields(KraftRoyaltyUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            royaltyNum: this.royaltyNum.toString(), royaltyDenom: this.royaltyDenom.toString(), assetsDispersalPercent: this.assetsDispersalPercent.toString(), creatorsRoyaltyPercent: this.creatorsRoyaltyPercent.toString(), gemsRoyaltyNum: this.gemsRoyaltyNum.toString(), gemsRoyaltyDenom: this.gemsRoyaltyDenom.toString(), gemsTreasuryPercent: this.gemsTreasuryPercent.toString(), gemsBurnPercent: this.gemsBurnPercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return KraftRoyaltyUpdated.reified().new({ royaltyNum: (0, reified_1.decodeFromJSONField)("u64", field.royaltyNum), royaltyDenom: (0, reified_1.decodeFromJSONField)("u64", field.royaltyDenom), assetsDispersalPercent: (0, reified_1.decodeFromJSONField)("u64", field.assetsDispersalPercent), creatorsRoyaltyPercent: (0, reified_1.decodeFromJSONField)("u64", field.creatorsRoyaltyPercent), gemsRoyaltyNum: (0, reified_1.decodeFromJSONField)("u64", field.gemsRoyaltyNum), gemsRoyaltyDenom: (0, reified_1.decodeFromJSONField)("u64", field.gemsRoyaltyDenom), gemsTreasuryPercent: (0, reified_1.decodeFromJSONField)("u64", field.gemsTreasuryPercent), gemsBurnPercent: (0, reified_1.decodeFromJSONField)("u64", field.gemsBurnPercent) }); }
    static fromJSON(json) {
        if (json.$typeName !== KraftRoyaltyUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return KraftRoyaltyUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isKraftRoyaltyUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a KraftRoyaltyUpdated object`);
    } return KraftRoyaltyUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching KraftRoyaltyUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isKraftRoyaltyUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a KraftRoyaltyUpdated object`);
        }
        return KraftRoyaltyUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.KraftRoyaltyUpdated = KraftRoyaltyUpdated;
KraftRoyaltyUpdated.$typeName = "0x0::hive_profile::KraftRoyaltyUpdated";
KraftRoyaltyUpdated.$numTypeParams = 0;
/* ============================== KraftYieldHarvested =============================== */
function isKraftYieldHarvested(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::KraftYieldHarvested"; }
exports.isKraftYieldHarvested = isKraftYieldHarvested;
class KraftYieldHarvested {
    constructor(typeArgs, fields) {
        this.$typeName = KraftYieldHarvested.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(KraftYieldHarvested.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.suiYield = fields.suiYield;
        ;
        this.receiver = fields.receiver;
    }
    static reified() { return { typeName: KraftYieldHarvested.$typeName, fullTypeName: (0, util_1.composeSuiType)(KraftYieldHarvested.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => KraftYieldHarvested.fromFields(fields), fromFieldsWithTypes: (item) => KraftYieldHarvested.fromFieldsWithTypes(item), fromBcs: (data) => KraftYieldHarvested.fromBcs(data), bcs: KraftYieldHarvested.bcs, fromJSONField: (field) => KraftYieldHarvested.fromJSONField(field), fromJSON: (json) => KraftYieldHarvested.fromJSON(json), fromSuiParsedData: (content) => KraftYieldHarvested.fromSuiParsedData(content), fetch: async (client, id) => KraftYieldHarvested.fetch(client, id), new: (fields) => { return new KraftYieldHarvested([], fields); }, kind: "StructClassReified", }; }
    static get r() { return KraftYieldHarvested.reified(); }
    static phantom() { return (0, reified_1.phantom)(KraftYieldHarvested.reified()); }
    static get p() { return KraftYieldHarvested.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("KraftYieldHarvested", {
            sui_yield: bcs_1.bcs.u64(), receiver: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return KraftYieldHarvested.reified().new({ suiYield: (0, reified_1.decodeFromFields)("u64", fields.sui_yield), receiver: (0, reified_1.decodeFromFields)("address", fields.receiver) }); }
    static fromFieldsWithTypes(item) {
        if (!isKraftYieldHarvested(item.type)) {
            throw new Error("not a KraftYieldHarvested type");
        }
        return KraftYieldHarvested.reified().new({ suiYield: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_yield), receiver: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.receiver) });
    }
    static fromBcs(data) { return KraftYieldHarvested.fromFields(KraftYieldHarvested.bcs.parse(data)); }
    toJSONField() {
        return {
            suiYield: this.suiYield.toString(), receiver: this.receiver,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return KraftYieldHarvested.reified().new({ suiYield: (0, reified_1.decodeFromJSONField)("u64", field.suiYield), receiver: (0, reified_1.decodeFromJSONField)("address", field.receiver) }); }
    static fromJSON(json) {
        if (json.$typeName !== KraftYieldHarvested.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return KraftYieldHarvested.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isKraftYieldHarvested(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a KraftYieldHarvested object`);
    } return KraftYieldHarvested.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching KraftYieldHarvested object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isKraftYieldHarvested(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a KraftYieldHarvested object`);
        }
        return KraftYieldHarvested.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.KraftYieldHarvested = KraftYieldHarvested;
KraftYieldHarvested.$typeName = "0x0::hive_profile::KraftYieldHarvested";
KraftYieldHarvested.$numTypeParams = 0;
/* ============================== LendRecord =============================== */
function isLendRecord(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::LendRecord"; }
exports.isLendRecord = isLendRecord;
class LendRecord {
    constructor(typeArgs, fields) {
        this.$typeName = LendRecord.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(LendRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.borrower = fields.borrower;
        ;
        this.version = fields.version;
        ;
        this.lendPriceSui = fields.lendPriceSui;
        ;
        this.startSec = fields.startSec;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: LendRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(LendRecord.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => LendRecord.fromFields(fields), fromFieldsWithTypes: (item) => LendRecord.fromFieldsWithTypes(item), fromBcs: (data) => LendRecord.fromBcs(data), bcs: LendRecord.bcs, fromJSONField: (field) => LendRecord.fromJSONField(field), fromJSON: (json) => LendRecord.fromJSON(json), fromSuiParsedData: (content) => LendRecord.fromSuiParsedData(content), fetch: async (client, id) => LendRecord.fetch(client, id), new: (fields) => { return new LendRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LendRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(LendRecord.reified()); }
    static get p() { return LendRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LendRecord", {
            borrower: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), lend_price_sui: bcs_1.bcs.u64(), start_sec: bcs_1.bcs.u64(), lockup_duration: bcs_1.bcs.u8(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return LendRecord.reified().new({ borrower: (0, reified_1.decodeFromFields)("address", fields.borrower), version: (0, reified_1.decodeFromFields)("u64", fields.version), lendPriceSui: (0, reified_1.decodeFromFields)("u64", fields.lend_price_sui), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isLendRecord(item.type)) {
            throw new Error("not a LendRecord type");
        }
        return LendRecord.reified().new({ borrower: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.borrower), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), lendPriceSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lend_price_sui), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return LendRecord.fromFields(LendRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            borrower: this.borrower, version: this.version.toString(), lendPriceSui: this.lendPriceSui.toString(), startSec: this.startSec.toString(), lockupDuration: this.lockupDuration, expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LendRecord.reified().new({ borrower: (0, reified_1.decodeFromJSONField)("address", field.borrower), version: (0, reified_1.decodeFromJSONField)("u64", field.version), lendPriceSui: (0, reified_1.decodeFromJSONField)("u64", field.lendPriceSui), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
    static fromJSON(json) {
        if (json.$typeName !== LendRecord.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LendRecord.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLendRecord(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LendRecord object`);
    } return LendRecord.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LendRecord object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLendRecord(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LendRecord object`);
        }
        return LendRecord.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.LendRecord = LendRecord;
LendRecord.$typeName = "0x0::hive_profile::LendRecord";
LendRecord.$numTypeParams = 0;
/* ============================== Listing =============================== */
function isListing(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::Listing"; }
exports.isListing = isListing;
class Listing {
    constructor(typeArgs, fields) {
        this.$typeName = Listing.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Listing.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByProfile = fields.listedByProfile;
        ;
        this.hiveAsset = fields.hiveAsset;
        ;
        this.listingAccess = fields.listingAccess;
        ;
        this.discountAccess = fields.discountAccess;
        ;
        this.discount = fields.discount;
        ;
        this.minSuiPrice = fields.minSuiPrice;
        ;
        this.isSaleListing = fields.isSaleListing;
        ;
        this.instantSale = fields.instantSale;
        ;
        this.highestBidSale = fields.highestBidSale;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.startSec = fields.startSec;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: Listing.$typeName, fullTypeName: (0, util_1.composeSuiType)(Listing.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Listing.fromFields(fields), fromFieldsWithTypes: (item) => Listing.fromFieldsWithTypes(item), fromBcs: (data) => Listing.fromBcs(data), bcs: Listing.bcs, fromJSONField: (field) => Listing.fromJSONField(field), fromJSON: (json) => Listing.fromJSON(json), fromSuiParsedData: (content) => Listing.fromSuiParsedData(content), fetch: async (client, id) => Listing.fetch(client, id), new: (fields) => { return new Listing([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Listing.reified(); }
    static phantom() { return (0, reified_1.phantom)(Listing.reified()); }
    static get p() { return Listing.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Listing", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), hive_asset: HiveAsset.bcs, listing_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64(), min_sui_price: bcs_1.bcs.u64(), is_sale_listing: bcs_1.bcs.bool(), instant_sale: bcs_1.bcs.bool(), highest_bid_sale: bcs_1.bcs.bool(), lockup_duration: bcs_1.bcs.u8(), start_sec: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Listing.reified().new({ listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile), hiveAsset: (0, reified_1.decodeFromFields)(HiveAsset.reified(), fields.hive_asset), listingAccess: (0, reified_1.decodeFromFields)("u8", fields.listing_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount), minSuiPrice: (0, reified_1.decodeFromFields)("u64", fields.min_sui_price), isSaleListing: (0, reified_1.decodeFromFields)("bool", fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFields)("bool", fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFields)("bool", fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isListing(item.type)) {
            throw new Error("not a Listing type");
        }
        return Listing.reified().new({ listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile), hiveAsset: (0, reified_1.decodeFromFieldsWithTypes)(HiveAsset.reified(), item.fields.hive_asset), listingAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.listing_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount), minSuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_sui_price), isSaleListing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return Listing.fromFields(Listing.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByProfile: this.listedByProfile, hiveAsset: this.hiveAsset.toJSONField(), listingAccess: this.listingAccess, discountAccess: this.discountAccess, discount: this.discount.toString(), minSuiPrice: this.minSuiPrice.toString(), isSaleListing: this.isSaleListing, instantSale: this.instantSale, highestBidSale: this.highestBidSale, lockupDuration: this.lockupDuration, startSec: this.startSec.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Listing.reified().new({ listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile), hiveAsset: (0, reified_1.decodeFromJSONField)(HiveAsset.reified(), field.hiveAsset), listingAccess: (0, reified_1.decodeFromJSONField)("u8", field.listingAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount), minSuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.minSuiPrice), isSaleListing: (0, reified_1.decodeFromJSONField)("bool", field.isSaleListing), instantSale: (0, reified_1.decodeFromJSONField)("bool", field.instantSale), highestBidSale: (0, reified_1.decodeFromJSONField)("bool", field.highestBidSale), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
    static fromJSON(json) {
        if (json.$typeName !== Listing.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Listing.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isListing(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Listing object`);
    } return Listing.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Listing object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListing(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Listing object`);
        }
        return Listing.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Listing = Listing;
Listing.$typeName = "0x0::hive_profile::Listing";
Listing.$numTypeParams = 0;
/* ============================== ListingCanceled =============================== */
function isListingCanceled(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ListingCanceled"; }
exports.isListingCanceled = isListingCanceled;
class ListingCanceled {
    constructor(typeArgs, fields) {
        this.$typeName = ListingCanceled.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingCanceled.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByProfile = fields.listedByProfile;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: ListingCanceled.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingCanceled.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ListingCanceled.fromFields(fields), fromFieldsWithTypes: (item) => ListingCanceled.fromFieldsWithTypes(item), fromBcs: (data) => ListingCanceled.fromBcs(data), bcs: ListingCanceled.bcs, fromJSONField: (field) => ListingCanceled.fromJSONField(field), fromJSON: (json) => ListingCanceled.fromJSON(json), fromSuiParsedData: (content) => ListingCanceled.fromSuiParsedData(content), fetch: async (client, id) => ListingCanceled.fetch(client, id), new: (fields) => { return new ListingCanceled([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingCanceled.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingCanceled.reified()); }
    static get p() { return ListingCanceled.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingCanceled", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ListingCanceled.reified().new({ listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingCanceled(item.type)) {
            throw new Error("not a ListingCanceled type");
        }
        return ListingCanceled.reified().new({ listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return ListingCanceled.fromFields(ListingCanceled.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByProfile: this.listedByProfile, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingCanceled.reified().new({ listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== ListingCanceled.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ListingCanceled.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isListingCanceled(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ListingCanceled object`);
    } return ListingCanceled.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ListingCanceled object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListingCanceled(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ListingCanceled object`);
        }
        return ListingCanceled.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ListingCanceled = ListingCanceled;
ListingCanceled.$typeName = "0x0::hive_profile::ListingCanceled";
ListingCanceled.$numTypeParams = 0;
/* ============================== ListingDestroyed =============================== */
function isListingDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ListingDestroyed"; }
exports.isListingDestroyed = isListingDestroyed;
class ListingDestroyed {
    constructor(typeArgs, fields) {
        this.$typeName = ListingDestroyed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.listedByProfile = fields.listedByProfile;
    }
    static reified() { return { typeName: ListingDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingDestroyed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ListingDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => ListingDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => ListingDestroyed.fromBcs(data), bcs: ListingDestroyed.bcs, fromJSONField: (field) => ListingDestroyed.fromJSONField(field), fromJSON: (json) => ListingDestroyed.fromJSON(json), fromSuiParsedData: (content) => ListingDestroyed.fromSuiParsedData(content), fetch: async (client, id) => ListingDestroyed.fetch(client, id), new: (fields) => { return new ListingDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingDestroyed.reified()); }
    static get p() { return ListingDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingDestroyed", {
            version: bcs_1.bcs.u64(), listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return ListingDestroyed.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingDestroyed(item.type)) {
            throw new Error("not a ListingDestroyed type");
        }
        return ListingDestroyed.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile) });
    }
    static fromBcs(data) { return ListingDestroyed.fromFields(ListingDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), listedByProfile: this.listedByProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingDestroyed.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== ListingDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ListingDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isListingDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ListingDestroyed object`);
    } return ListingDestroyed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ListingDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListingDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ListingDestroyed object`);
        }
        return ListingDestroyed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ListingDestroyed = ListingDestroyed;
ListingDestroyed.$typeName = "0x0::hive_profile::ListingDestroyed";
ListingDestroyed.$numTypeParams = 0;
/* ============================== ListingExpired =============================== */
function isListingExpired(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ListingExpired"; }
exports.isListingExpired = isListingExpired;
class ListingExpired {
    constructor(typeArgs, fields) {
        this.$typeName = ListingExpired.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingExpired.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByProfile = fields.listedByProfile;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: ListingExpired.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingExpired.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ListingExpired.fromFields(fields), fromFieldsWithTypes: (item) => ListingExpired.fromFieldsWithTypes(item), fromBcs: (data) => ListingExpired.fromBcs(data), bcs: ListingExpired.bcs, fromJSONField: (field) => ListingExpired.fromJSONField(field), fromJSON: (json) => ListingExpired.fromJSON(json), fromSuiParsedData: (content) => ListingExpired.fromSuiParsedData(content), fetch: async (client, id) => ListingExpired.fetch(client, id), new: (fields) => { return new ListingExpired([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingExpired.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingExpired.reified()); }
    static get p() { return ListingExpired.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingExpired", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ListingExpired.reified().new({ listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingExpired(item.type)) {
            throw new Error("not a ListingExpired type");
        }
        return ListingExpired.reified().new({ listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return ListingExpired.fromFields(ListingExpired.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByProfile: this.listedByProfile, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingExpired.reified().new({ listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== ListingExpired.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ListingExpired.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isListingExpired(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ListingExpired object`);
    } return ListingExpired.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ListingExpired object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListingExpired(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ListingExpired object`);
        }
        return ListingExpired.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ListingExpired = ListingExpired;
ListingExpired.$typeName = "0x0::hive_profile::ListingExpired";
ListingExpired.$numTypeParams = 0;
/* ============================== ListingRecord =============================== */
function isListingRecord(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ListingRecord"; }
exports.isListingRecord = isListingRecord;
class ListingRecord {
    constructor(typeArgs, fields) {
        this.$typeName = ListingRecord.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.listingAccess = fields.listingAccess;
        ;
        this.discountAccess = fields.discountAccess;
        ;
        this.discount = fields.discount;
        ;
        this.minSuiPrice = fields.minSuiPrice;
        ;
        this.isSaleListing = fields.isSaleListing;
        ;
        this.instantSale = fields.instantSale;
        ;
        this.highestBidSale = fields.highestBidSale;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.startSec = fields.startSec;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: ListingRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingRecord.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ListingRecord.fromFields(fields), fromFieldsWithTypes: (item) => ListingRecord.fromFieldsWithTypes(item), fromBcs: (data) => ListingRecord.fromBcs(data), bcs: ListingRecord.bcs, fromJSONField: (field) => ListingRecord.fromJSONField(field), fromJSON: (json) => ListingRecord.fromJSON(json), fromSuiParsedData: (content) => ListingRecord.fromSuiParsedData(content), fetch: async (client, id) => ListingRecord.fetch(client, id), new: (fields) => { return new ListingRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingRecord.reified()); }
    static get p() { return ListingRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingRecord", {
            version: bcs_1.bcs.u64(), listing_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64(), min_sui_price: bcs_1.bcs.u64(), is_sale_listing: bcs_1.bcs.bool(), instant_sale: bcs_1.bcs.bool(), highest_bid_sale: bcs_1.bcs.bool(), lockup_duration: bcs_1.bcs.u8(), start_sec: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ListingRecord.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), listingAccess: (0, reified_1.decodeFromFields)("u8", fields.listing_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount), minSuiPrice: (0, reified_1.decodeFromFields)("u64", fields.min_sui_price), isSaleListing: (0, reified_1.decodeFromFields)("bool", fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFields)("bool", fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFields)("bool", fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingRecord(item.type)) {
            throw new Error("not a ListingRecord type");
        }
        return ListingRecord.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), listingAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.listing_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount), minSuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_sui_price), isSaleListing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return ListingRecord.fromFields(ListingRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), listingAccess: this.listingAccess, discountAccess: this.discountAccess, discount: this.discount.toString(), minSuiPrice: this.minSuiPrice.toString(), isSaleListing: this.isSaleListing, instantSale: this.instantSale, highestBidSale: this.highestBidSale, lockupDuration: this.lockupDuration, startSec: this.startSec.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingRecord.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), listingAccess: (0, reified_1.decodeFromJSONField)("u8", field.listingAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount), minSuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.minSuiPrice), isSaleListing: (0, reified_1.decodeFromJSONField)("bool", field.isSaleListing), instantSale: (0, reified_1.decodeFromJSONField)("bool", field.instantSale), highestBidSale: (0, reified_1.decodeFromJSONField)("bool", field.highestBidSale), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
    static fromJSON(json) {
        if (json.$typeName !== ListingRecord.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ListingRecord.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isListingRecord(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ListingRecord object`);
    } return ListingRecord.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ListingRecord object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListingRecord(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ListingRecord object`);
        }
        return ListingRecord.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ListingRecord = ListingRecord;
ListingRecord.$typeName = "0x0::hive_profile::ListingRecord";
ListingRecord.$numTypeParams = 0;
/* ============================== ListingUpdated =============================== */
function isListingUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ListingUpdated"; }
exports.isListingUpdated = isListingUpdated;
class ListingUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = ListingUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByProfile = fields.listedByProfile;
        ;
        this.version = fields.version;
        ;
        this.minSuiPrice = fields.minSuiPrice;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.startSec = fields.startSec;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: ListingUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ListingUpdated.fromFields(fields), fromFieldsWithTypes: (item) => ListingUpdated.fromFieldsWithTypes(item), fromBcs: (data) => ListingUpdated.fromBcs(data), bcs: ListingUpdated.bcs, fromJSONField: (field) => ListingUpdated.fromJSONField(field), fromJSON: (json) => ListingUpdated.fromJSON(json), fromSuiParsedData: (content) => ListingUpdated.fromSuiParsedData(content), fetch: async (client, id) => ListingUpdated.fetch(client, id), new: (fields) => { return new ListingUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingUpdated.reified()); }
    static get p() { return ListingUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingUpdated", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), min_sui_price: bcs_1.bcs.u64(), lockup_duration: bcs_1.bcs.u8(), start_sec: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ListingUpdated.reified().new({ listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile), version: (0, reified_1.decodeFromFields)("u64", fields.version), minSuiPrice: (0, reified_1.decodeFromFields)("u64", fields.min_sui_price), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingUpdated(item.type)) {
            throw new Error("not a ListingUpdated type");
        }
        return ListingUpdated.reified().new({ listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), minSuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_sui_price), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return ListingUpdated.fromFields(ListingUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByProfile: this.listedByProfile, version: this.version.toString(), minSuiPrice: this.minSuiPrice.toString(), lockupDuration: this.lockupDuration, startSec: this.startSec.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingUpdated.reified().new({ listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile), version: (0, reified_1.decodeFromJSONField)("u64", field.version), minSuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.minSuiPrice), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
    static fromJSON(json) {
        if (json.$typeName !== ListingUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ListingUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isListingUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ListingUpdated object`);
    } return ListingUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ListingUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListingUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ListingUpdated object`);
        }
        return ListingUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ListingUpdated = ListingUpdated;
ListingUpdated.$typeName = "0x0::hive_profile::ListingUpdated";
ListingUpdated.$numTypeParams = 0;
/* ============================== ManagerAppAccessCapability =============================== */
function isManagerAppAccessCapability(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ManagerAppAccessCapability"; }
exports.isManagerAppAccessCapability = isManagerAppAccessCapability;
class ManagerAppAccessCapability {
    constructor(typeArgs, fields) {
        this.$typeName = ManagerAppAccessCapability.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ManagerAppAccessCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.appName = fields.appName;
    }
    static reified() { return { typeName: ManagerAppAccessCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(ManagerAppAccessCapability.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ManagerAppAccessCapability.fromFields(fields), fromFieldsWithTypes: (item) => ManagerAppAccessCapability.fromFieldsWithTypes(item), fromBcs: (data) => ManagerAppAccessCapability.fromBcs(data), bcs: ManagerAppAccessCapability.bcs, fromJSONField: (field) => ManagerAppAccessCapability.fromJSONField(field), fromJSON: (json) => ManagerAppAccessCapability.fromJSON(json), fromSuiParsedData: (content) => ManagerAppAccessCapability.fromSuiParsedData(content), fetch: async (client, id) => ManagerAppAccessCapability.fetch(client, id), new: (fields) => { return new ManagerAppAccessCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ManagerAppAccessCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(ManagerAppAccessCapability.reified()); }
    static get p() { return ManagerAppAccessCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ManagerAppAccessCapability", {
            id: structs_6.UID.bcs, app_name: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return ManagerAppAccessCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isManagerAppAccessCapability(item.type)) {
            throw new Error("not a ManagerAppAccessCapability type");
        }
        return ManagerAppAccessCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name) });
    }
    static fromBcs(data) { return ManagerAppAccessCapability.fromFields(ManagerAppAccessCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, appName: this.appName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ManagerAppAccessCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName) }); }
    static fromJSON(json) {
        if (json.$typeName !== ManagerAppAccessCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ManagerAppAccessCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isManagerAppAccessCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ManagerAppAccessCapability object`);
    } return ManagerAppAccessCapability.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ManagerAppAccessCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isManagerAppAccessCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ManagerAppAccessCapability object`);
        }
        return ManagerAppAccessCapability.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ManagerAppAccessCapability = ManagerAppAccessCapability;
ManagerAppAccessCapability.$typeName = "0x0::hive_profile::ManagerAppAccessCapability";
ManagerAppAccessCapability.$numTypeParams = 0;
/* ============================== MarketPlace =============================== */
function isMarketPlace(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x0::hive_profile::MarketPlace<"); }
exports.isMarketPlace = isMarketPlace;
class MarketPlace {
    constructor(typeArgs, fields) {
        this.$typeName = MarketPlace.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(MarketPlace.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.activeListings = fields.activeListings;
        ;
        this.availableBids = fields.availableBids;
        ;
        this.processedListings = fields.processedListings;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified(X) { return { typeName: MarketPlace.$typeName, fullTypeName: (0, util_1.composeSuiType)(MarketPlace.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], reifiedTypeArgs: [X], fromFields: (fields) => MarketPlace.fromFields(X, fields), fromFieldsWithTypes: (item) => MarketPlace.fromFieldsWithTypes(X, item), fromBcs: (data) => MarketPlace.fromBcs(X, data), bcs: MarketPlace.bcs, fromJSONField: (field) => MarketPlace.fromJSONField(X, field), fromJSON: (json) => MarketPlace.fromJSON(X, json), fromSuiParsedData: (content) => MarketPlace.fromSuiParsedData(X, content), fetch: async (client, id) => MarketPlace.fetch(client, X, id), new: (fields) => { return new MarketPlace([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return MarketPlace.reified; }
    static phantom(X) { return (0, reified_1.phantom)(MarketPlace.reified(X)); }
    static get p() { return MarketPlace.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("MarketPlace", {
            id: structs_6.UID.bcs, active_listings: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), available_bids: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), processed_listings: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return MarketPlace.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), activeListings: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(Listing.reified())), fields.active_listings), availableBids: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(typeArg)))), fields.available_bids), processedListings: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified(typeArg))), fields.processed_listings), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isMarketPlace(item.type)) {
            throw new Error("not a MarketPlace type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return MarketPlace.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), activeListings: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(Listing.reified())), item.fields.active_listings), availableBids: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(typeArg)))), item.fields.available_bids), processedListings: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified(typeArg))), item.fields.processed_listings), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(typeArg, data) { return MarketPlace.fromFields(typeArg, MarketPlace.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, activeListings: this.activeListings.toJSONField(), availableBids: this.availableBids.toJSONField(), processedListings: this.processedListings.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return MarketPlace.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), activeListings: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(Listing.reified())), field.activeListings), availableBids: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(typeArg)))), field.availableBids), processedListings: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified(typeArg))), field.processedListings), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== MarketPlace.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(MarketPlace.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return MarketPlace.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMarketPlace(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MarketPlace object`);
    } return MarketPlace.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MarketPlace object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMarketPlace(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MarketPlace object`);
        }
        return MarketPlace.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.MarketPlace = MarketPlace;
MarketPlace.$typeName = "0x0::hive_profile::MarketPlace";
MarketPlace.$numTypeParams = 1;
/* ============================== NewHiveAssetKrafted =============================== */
function isNewHiveAssetKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::NewHiveAssetKrafted"; }
exports.isNewHiveAssetKrafted = isNewHiveAssetKrafted;
class NewHiveAssetKrafted {
    constructor(typeArgs, fields) {
        this.$typeName = NewHiveAssetKrafted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewHiveAssetKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.krafterProfileAddr = fields.krafterProfileAddr;
        ;
        this.krafter = fields.krafter;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.name = fields.name;
        ;
        this.version = fields.version;
        ;
        this.imgUrl = fields.imgUrl;
        ;
        this.genesisHivegems = fields.genesisHivegems;
        ;
        this.power = fields.power;
        ;
        this.price = fields.price;
        ;
        this.traitsList = fields.traitsList;
        ;
        this.promptsList = fields.promptsList;
    }
    static reified() { return { typeName: NewHiveAssetKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewHiveAssetKrafted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => NewHiveAssetKrafted.fromFields(fields), fromFieldsWithTypes: (item) => NewHiveAssetKrafted.fromFieldsWithTypes(item), fromBcs: (data) => NewHiveAssetKrafted.fromBcs(data), bcs: NewHiveAssetKrafted.bcs, fromJSONField: (field) => NewHiveAssetKrafted.fromJSONField(field), fromJSON: (json) => NewHiveAssetKrafted.fromJSON(json), fromSuiParsedData: (content) => NewHiveAssetKrafted.fromSuiParsedData(content), fetch: async (client, id) => NewHiveAssetKrafted.fetch(client, id), new: (fields) => { return new NewHiveAssetKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewHiveAssetKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewHiveAssetKrafted.reified()); }
    static get p() { return NewHiveAssetKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewHiveAssetKrafted", {
            id: structs_6.ID.bcs, krafter_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), krafter: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), collection_name: structs_3.String.bcs, name: structs_3.String.bcs, version: bcs_1.bcs.u64(), img_url: structs_3.String.bcs, genesis_hivegems: bcs_1.bcs.u64(), power: bcs_1.bcs.u64(), price: bcs_1.bcs.u64(), traits_list: bcs_1.bcs.vector(structs_3.String.bcs), prompts_list: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return NewHiveAssetKrafted.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.ID.reified(), fields.id), krafterProfileAddr: (0, reified_1.decodeFromFields)("address", fields.krafter_profile_addr), krafter: (0, reified_1.decodeFromFields)("address", fields.krafter), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), name: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.name), version: (0, reified_1.decodeFromFields)("u64", fields.version), imgUrl: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.img_url), genesisHivegems: (0, reified_1.decodeFromFields)("u64", fields.genesis_hivegems), power: (0, reified_1.decodeFromFields)("u64", fields.power), price: (0, reified_1.decodeFromFields)("u64", fields.price), traitsList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.traits_list), promptsList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.prompts_list) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewHiveAssetKrafted(item.type)) {
            throw new Error("not a NewHiveAssetKrafted type");
        }
        return NewHiveAssetKrafted.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.ID.reified(), item.fields.id), krafterProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.krafter_profile_addr), krafter: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.krafter), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.name), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), imgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.img_url), genesisHivegems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.genesis_hivegems), power: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.power), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), traitsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.traits_list), promptsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.prompts_list) });
    }
    static fromBcs(data) { return NewHiveAssetKrafted.fromFields(NewHiveAssetKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, krafterProfileAddr: this.krafterProfileAddr, krafter: this.krafter, collectionName: this.collectionName, name: this.name, version: this.version.toString(), imgUrl: this.imgUrl, genesisHivegems: this.genesisHivegems.toString(), power: this.power.toString(), price: this.price.toString(), traitsList: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.traitsList), promptsList: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.promptsList),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewHiveAssetKrafted.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.ID.reified(), field.id), krafterProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.krafterProfileAddr), krafter: (0, reified_1.decodeFromJSONField)("address", field.krafter), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), name: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.name), version: (0, reified_1.decodeFromJSONField)("u64", field.version), imgUrl: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.imgUrl), genesisHivegems: (0, reified_1.decodeFromJSONField)("u64", field.genesisHivegems), power: (0, reified_1.decodeFromJSONField)("u64", field.power), price: (0, reified_1.decodeFromJSONField)("u64", field.price), traitsList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.traitsList), promptsList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.promptsList) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewHiveAssetKrafted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewHiveAssetKrafted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewHiveAssetKrafted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewHiveAssetKrafted object`);
    } return NewHiveAssetKrafted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewHiveAssetKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewHiveAssetKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewHiveAssetKrafted object`);
        }
        return NewHiveAssetKrafted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewHiveAssetKrafted = NewHiveAssetKrafted;
NewHiveAssetKrafted.$typeName = "0x0::hive_profile::NewHiveAssetKrafted";
NewHiveAssetKrafted.$numTypeParams = 0;
/* ============================== NewListing =============================== */
function isNewListing(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::NewListing"; }
exports.isNewListing = isNewListing;
class NewListing {
    constructor(typeArgs, fields) {
        this.$typeName = NewListing.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewListing.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByProfile = fields.listedByProfile;
        ;
        this.listingAccess = fields.listingAccess;
        ;
        this.discountAccess = fields.discountAccess;
        ;
        this.discount = fields.discount;
        ;
        this.version = fields.version;
        ;
        this.minSuiPrice = fields.minSuiPrice;
        ;
        this.isSaleListing = fields.isSaleListing;
        ;
        this.instantSale = fields.instantSale;
        ;
        this.highestBidSale = fields.highestBidSale;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.startSec = fields.startSec;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: NewListing.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewListing.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => NewListing.fromFields(fields), fromFieldsWithTypes: (item) => NewListing.fromFieldsWithTypes(item), fromBcs: (data) => NewListing.fromBcs(data), bcs: NewListing.bcs, fromJSONField: (field) => NewListing.fromJSONField(field), fromJSON: (json) => NewListing.fromJSON(json), fromSuiParsedData: (content) => NewListing.fromSuiParsedData(content), fetch: async (client, id) => NewListing.fetch(client, id), new: (fields) => { return new NewListing([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewListing.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewListing.reified()); }
    static get p() { return NewListing.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewListing", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), listing_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64(), version: bcs_1.bcs.u64(), min_sui_price: bcs_1.bcs.u64(), is_sale_listing: bcs_1.bcs.bool(), instant_sale: bcs_1.bcs.bool(), highest_bid_sale: bcs_1.bcs.bool(), lockup_duration: bcs_1.bcs.u8(), start_sec: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewListing.reified().new({ listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile), listingAccess: (0, reified_1.decodeFromFields)("u8", fields.listing_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount), version: (0, reified_1.decodeFromFields)("u64", fields.version), minSuiPrice: (0, reified_1.decodeFromFields)("u64", fields.min_sui_price), isSaleListing: (0, reified_1.decodeFromFields)("bool", fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFields)("bool", fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFields)("bool", fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewListing(item.type)) {
            throw new Error("not a NewListing type");
        }
        return NewListing.reified().new({ listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile), listingAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.listing_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), minSuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_sui_price), isSaleListing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return NewListing.fromFields(NewListing.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByProfile: this.listedByProfile, listingAccess: this.listingAccess, discountAccess: this.discountAccess, discount: this.discount.toString(), version: this.version.toString(), minSuiPrice: this.minSuiPrice.toString(), isSaleListing: this.isSaleListing, instantSale: this.instantSale, highestBidSale: this.highestBidSale, lockupDuration: this.lockupDuration, startSec: this.startSec.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewListing.reified().new({ listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile), listingAccess: (0, reified_1.decodeFromJSONField)("u8", field.listingAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount), version: (0, reified_1.decodeFromJSONField)("u64", field.version), minSuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.minSuiPrice), isSaleListing: (0, reified_1.decodeFromJSONField)("bool", field.isSaleListing), instantSale: (0, reified_1.decodeFromJSONField)("bool", field.instantSale), highestBidSale: (0, reified_1.decodeFromJSONField)("bool", field.highestBidSale), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewListing.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewListing.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewListing(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewListing object`);
    } return NewListing.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewListing object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewListing(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewListing object`);
        }
        return NewListing.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewListing = NewListing;
NewListing.$typeName = "0x0::hive_profile::NewListing";
NewListing.$numTypeParams = 0;
/* ============================== NewSkinForAsset =============================== */
function isNewSkinForAsset(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::NewSkinForAsset"; }
exports.isNewSkinForAsset = isNewSkinForAsset;
class NewSkinForAsset {
    constructor(typeArgs, fields) {
        this.$typeName = NewSkinForAsset.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewSkinForAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.skinType = fields.skinType;
        ;
        this.kraftAccess = fields.kraftAccess;
        ;
        this.discount = fields.discount;
        ;
        this.royaltyFeePercent = fields.royaltyFeePercent;
    }
    static reified() { return { typeName: NewSkinForAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewSkinForAsset.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => NewSkinForAsset.fromFields(fields), fromFieldsWithTypes: (item) => NewSkinForAsset.fromFieldsWithTypes(item), fromBcs: (data) => NewSkinForAsset.fromBcs(data), bcs: NewSkinForAsset.bcs, fromJSONField: (field) => NewSkinForAsset.fromJSONField(field), fromJSON: (json) => NewSkinForAsset.fromJSON(json), fromSuiParsedData: (content) => NewSkinForAsset.fromSuiParsedData(content), fetch: async (client, id) => NewSkinForAsset.fetch(client, id), new: (fields) => { return new NewSkinForAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewSkinForAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewSkinForAsset.reified()); }
    static get p() { return NewSkinForAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewSkinForAsset", {
            version: bcs_1.bcs.u64(), skin_type: structs_3.String.bcs, kraft_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64(), royalty_fee_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewSkinForAsset.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), skinType: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.skin_type), kraftAccess: (0, reified_1.decodeFromFields)("u8", fields.kraft_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount), royaltyFeePercent: (0, reified_1.decodeFromFields)("u64", fields.royalty_fee_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewSkinForAsset(item.type)) {
            throw new Error("not a NewSkinForAsset type");
        }
        return NewSkinForAsset.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), skinType: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.skin_type), kraftAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.kraft_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount), royaltyFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.royalty_fee_percent) });
    }
    static fromBcs(data) { return NewSkinForAsset.fromFields(NewSkinForAsset.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), skinType: this.skinType, kraftAccess: this.kraftAccess, discount: this.discount.toString(), royaltyFeePercent: this.royaltyFeePercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewSkinForAsset.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), skinType: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.skinType), kraftAccess: (0, reified_1.decodeFromJSONField)("u8", field.kraftAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount), royaltyFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.royaltyFeePercent) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewSkinForAsset.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewSkinForAsset.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewSkinForAsset(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewSkinForAsset object`);
    } return NewSkinForAsset.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewSkinForAsset object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewSkinForAsset(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewSkinForAsset object`);
        }
        return NewSkinForAsset.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewSkinForAsset = NewSkinForAsset;
NewSkinForAsset.$typeName = "0x0::hive_profile::NewSkinForAsset";
NewSkinForAsset.$numTypeParams = 0;
/* ============================== NewSkinForAssetKrafted =============================== */
function isNewSkinForAssetKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::NewSkinForAssetKrafted"; }
exports.isNewSkinForAssetKrafted = isNewSkinForAssetKrafted;
class NewSkinForAssetKrafted {
    constructor(typeArgs, fields) {
        this.$typeName = NewSkinForAssetKrafted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewSkinForAssetKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.kraftedByProfile = fields.kraftedByProfile;
        ;
        this.krafterUsername = fields.krafterUsername;
        ;
        this.ownerProfile = fields.ownerProfile;
        ;
        this.ownerUsername = fields.ownerUsername;
        ;
        this.version = fields.version;
        ;
        this.skinType = fields.skinType;
        ;
        this.actualSkinPrice = fields.actualSkinPrice;
        ;
        this.royaltyEarnedByOwner = fields.royaltyEarnedByOwner;
        ;
        this.skinsKraftedForTypeByAsset = fields.skinsKraftedForTypeByAsset;
        ;
        this.totalRoyaltyAmt = fields.totalRoyaltyAmt;
        ;
        this.treasuryAmt = fields.treasuryAmt;
        ;
        this.gemsBurnt = fields.gemsBurnt;
    }
    static reified() { return { typeName: NewSkinForAssetKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewSkinForAssetKrafted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => NewSkinForAssetKrafted.fromFields(fields), fromFieldsWithTypes: (item) => NewSkinForAssetKrafted.fromFieldsWithTypes(item), fromBcs: (data) => NewSkinForAssetKrafted.fromBcs(data), bcs: NewSkinForAssetKrafted.bcs, fromJSONField: (field) => NewSkinForAssetKrafted.fromJSONField(field), fromJSON: (json) => NewSkinForAssetKrafted.fromJSON(json), fromSuiParsedData: (content) => NewSkinForAssetKrafted.fromSuiParsedData(content), fetch: async (client, id) => NewSkinForAssetKrafted.fetch(client, id), new: (fields) => { return new NewSkinForAssetKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewSkinForAssetKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewSkinForAssetKrafted.reified()); }
    static get p() { return NewSkinForAssetKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewSkinForAssetKrafted", {
            krafted_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), krafter_username: structs_1.String.bcs, owner_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), owner_username: structs_1.String.bcs, version: bcs_1.bcs.u64(), skin_type: structs_3.String.bcs, actual_skin_price: bcs_1.bcs.u64(), royalty_earned_by_owner: bcs_1.bcs.u64(), skins_krafted_for_type_by_asset: bcs_1.bcs.u64(), total_royalty_amt: bcs_1.bcs.u64(), treasury_amt: bcs_1.bcs.u64(), gems_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewSkinForAssetKrafted.reified().new({ kraftedByProfile: (0, reified_1.decodeFromFields)("address", fields.krafted_by_profile), krafterUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.krafter_username), ownerProfile: (0, reified_1.decodeFromFields)("address", fields.owner_profile), ownerUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.owner_username), version: (0, reified_1.decodeFromFields)("u64", fields.version), skinType: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.skin_type), actualSkinPrice: (0, reified_1.decodeFromFields)("u64", fields.actual_skin_price), royaltyEarnedByOwner: (0, reified_1.decodeFromFields)("u64", fields.royalty_earned_by_owner), skinsKraftedForTypeByAsset: (0, reified_1.decodeFromFields)("u64", fields.skins_krafted_for_type_by_asset), totalRoyaltyAmt: (0, reified_1.decodeFromFields)("u64", fields.total_royalty_amt), treasuryAmt: (0, reified_1.decodeFromFields)("u64", fields.treasury_amt), gemsBurnt: (0, reified_1.decodeFromFields)("u64", fields.gems_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewSkinForAssetKrafted(item.type)) {
            throw new Error("not a NewSkinForAssetKrafted type");
        }
        return NewSkinForAssetKrafted.reified().new({ kraftedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.krafted_by_profile), krafterUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.krafter_username), ownerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner_profile), ownerUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.owner_username), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), skinType: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.skin_type), actualSkinPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.actual_skin_price), royaltyEarnedByOwner: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.royalty_earned_by_owner), skinsKraftedForTypeByAsset: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.skins_krafted_for_type_by_asset), totalRoyaltyAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_royalty_amt), treasuryAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_amt), gemsBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_burnt) });
    }
    static fromBcs(data) { return NewSkinForAssetKrafted.fromFields(NewSkinForAssetKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            kraftedByProfile: this.kraftedByProfile, krafterUsername: this.krafterUsername, ownerProfile: this.ownerProfile, ownerUsername: this.ownerUsername, version: this.version.toString(), skinType: this.skinType, actualSkinPrice: this.actualSkinPrice.toString(), royaltyEarnedByOwner: this.royaltyEarnedByOwner.toString(), skinsKraftedForTypeByAsset: this.skinsKraftedForTypeByAsset.toString(), totalRoyaltyAmt: this.totalRoyaltyAmt.toString(), treasuryAmt: this.treasuryAmt.toString(), gemsBurnt: this.gemsBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewSkinForAssetKrafted.reified().new({ kraftedByProfile: (0, reified_1.decodeFromJSONField)("address", field.kraftedByProfile), krafterUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.krafterUsername), ownerProfile: (0, reified_1.decodeFromJSONField)("address", field.ownerProfile), ownerUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.ownerUsername), version: (0, reified_1.decodeFromJSONField)("u64", field.version), skinType: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.skinType), actualSkinPrice: (0, reified_1.decodeFromJSONField)("u64", field.actualSkinPrice), royaltyEarnedByOwner: (0, reified_1.decodeFromJSONField)("u64", field.royaltyEarnedByOwner), skinsKraftedForTypeByAsset: (0, reified_1.decodeFromJSONField)("u64", field.skinsKraftedForTypeByAsset), totalRoyaltyAmt: (0, reified_1.decodeFromJSONField)("u64", field.totalRoyaltyAmt), treasuryAmt: (0, reified_1.decodeFromJSONField)("u64", field.treasuryAmt), gemsBurnt: (0, reified_1.decodeFromJSONField)("u64", field.gemsBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewSkinForAssetKrafted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewSkinForAssetKrafted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewSkinForAssetKrafted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewSkinForAssetKrafted object`);
    } return NewSkinForAssetKrafted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewSkinForAssetKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewSkinForAssetKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewSkinForAssetKrafted object`);
        }
        return NewSkinForAssetKrafted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewSkinForAssetKrafted = NewSkinForAssetKrafted;
NewSkinForAssetKrafted.$typeName = "0x0::hive_profile::NewSkinForAssetKrafted";
NewSkinForAssetKrafted.$numTypeParams = 0;
/* ============================== PricingAndAccessSetInHiveKiosk =============================== */
function isPricingAndAccessSetInHiveKiosk(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::PricingAndAccessSetInHiveKiosk"; }
exports.isPricingAndAccessSetInHiveKiosk = isPricingAndAccessSetInHiveKiosk;
class PricingAndAccessSetInHiveKiosk {
    constructor(typeArgs, fields) {
        this.$typeName = PricingAndAccessSetInHiveKiosk.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PricingAndAccessSetInHiveKiosk.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.basePrice = fields.basePrice;
        ;
        this.curveA = fields.curveA;
        ;
        this.kraftAccess = fields.kraftAccess;
        ;
        this.discountAccess = fields.discountAccess;
        ;
        this.discount = fields.discount;
    }
    static reified() { return { typeName: PricingAndAccessSetInHiveKiosk.$typeName, fullTypeName: (0, util_1.composeSuiType)(PricingAndAccessSetInHiveKiosk.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => PricingAndAccessSetInHiveKiosk.fromFields(fields), fromFieldsWithTypes: (item) => PricingAndAccessSetInHiveKiosk.fromFieldsWithTypes(item), fromBcs: (data) => PricingAndAccessSetInHiveKiosk.fromBcs(data), bcs: PricingAndAccessSetInHiveKiosk.bcs, fromJSONField: (field) => PricingAndAccessSetInHiveKiosk.fromJSONField(field), fromJSON: (json) => PricingAndAccessSetInHiveKiosk.fromJSON(json), fromSuiParsedData: (content) => PricingAndAccessSetInHiveKiosk.fromSuiParsedData(content), fetch: async (client, id) => PricingAndAccessSetInHiveKiosk.fetch(client, id), new: (fields) => { return new PricingAndAccessSetInHiveKiosk([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PricingAndAccessSetInHiveKiosk.reified(); }
    static phantom() { return (0, reified_1.phantom)(PricingAndAccessSetInHiveKiosk.reified()); }
    static get p() { return PricingAndAccessSetInHiveKiosk.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PricingAndAccessSetInHiveKiosk", {
            creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), collection_name: structs_3.String.bcs, base_price: bcs_1.bcs.u64(), curve_a: bcs_1.bcs.u64(), kraft_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PricingAndAccessSetInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), basePrice: (0, reified_1.decodeFromFields)("u64", fields.base_price), curveA: (0, reified_1.decodeFromFields)("u64", fields.curve_a), kraftAccess: (0, reified_1.decodeFromFields)("u8", fields.kraft_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount) }); }
    static fromFieldsWithTypes(item) {
        if (!isPricingAndAccessSetInHiveKiosk(item.type)) {
            throw new Error("not a PricingAndAccessSetInHiveKiosk type");
        }
        return PricingAndAccessSetInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), basePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.base_price), curveA: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.curve_a), kraftAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.kraft_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount) });
    }
    static fromBcs(data) { return PricingAndAccessSetInHiveKiosk.fromFields(PricingAndAccessSetInHiveKiosk.bcs.parse(data)); }
    toJSONField() {
        return {
            creatorProfile: this.creatorProfile, collectionName: this.collectionName, basePrice: this.basePrice.toString(), curveA: this.curveA.toString(), kraftAccess: this.kraftAccess, discountAccess: this.discountAccess, discount: this.discount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PricingAndAccessSetInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), basePrice: (0, reified_1.decodeFromJSONField)("u64", field.basePrice), curveA: (0, reified_1.decodeFromJSONField)("u64", field.curveA), kraftAccess: (0, reified_1.decodeFromJSONField)("u8", field.kraftAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount) }); }
    static fromJSON(json) {
        if (json.$typeName !== PricingAndAccessSetInHiveKiosk.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PricingAndAccessSetInHiveKiosk.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPricingAndAccessSetInHiveKiosk(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PricingAndAccessSetInHiveKiosk object`);
    } return PricingAndAccessSetInHiveKiosk.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PricingAndAccessSetInHiveKiosk object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPricingAndAccessSetInHiveKiosk(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PricingAndAccessSetInHiveKiosk object`);
        }
        return PricingAndAccessSetInHiveKiosk.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PricingAndAccessSetInHiveKiosk = PricingAndAccessSetInHiveKiosk;
PricingAndAccessSetInHiveKiosk.$typeName = "0x0::hive_profile::PricingAndAccessSetInHiveKiosk";
PricingAndAccessSetInHiveKiosk.$numTypeParams = 0;
/* ============================== ProfileConfigParamsUpdated =============================== */
function isProfileConfigParamsUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ProfileConfigParamsUpdated"; }
exports.isProfileConfigParamsUpdated = isProfileConfigParamsUpdated;
class ProfileConfigParamsUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = ProfileConfigParamsUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ProfileConfigParamsUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.maxBidsPerAsset = fields.maxBidsPerAsset;
        ;
        this.minSuiBidAllowed = fields.minSuiBidAllowed;
        ;
        this.profileKraftFeesSui = fields.profileKraftFeesSui;
        ;
        this.socialFeeGems = fields.socialFeeGems;
        ;
        this.socialMultiplierForGems = fields.socialMultiplierForGems;
        ;
        this.socialMultiplierForPower = fields.socialMultiplierForPower;
    }
    static reified() { return { typeName: ProfileConfigParamsUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ProfileConfigParamsUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ProfileConfigParamsUpdated.fromFields(fields), fromFieldsWithTypes: (item) => ProfileConfigParamsUpdated.fromFieldsWithTypes(item), fromBcs: (data) => ProfileConfigParamsUpdated.fromBcs(data), bcs: ProfileConfigParamsUpdated.bcs, fromJSONField: (field) => ProfileConfigParamsUpdated.fromJSONField(field), fromJSON: (json) => ProfileConfigParamsUpdated.fromJSON(json), fromSuiParsedData: (content) => ProfileConfigParamsUpdated.fromSuiParsedData(content), fetch: async (client, id) => ProfileConfigParamsUpdated.fetch(client, id), new: (fields) => { return new ProfileConfigParamsUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ProfileConfigParamsUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(ProfileConfigParamsUpdated.reified()); }
    static get p() { return ProfileConfigParamsUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ProfileConfigParamsUpdated", {
            max_bids_per_asset: bcs_1.bcs.u64(), min_sui_bid_allowed: bcs_1.bcs.u64(), profile_kraft_fees_sui: bcs_1.bcs.u64(), social_fee_gems: bcs_1.bcs.u64(), social_multiplier_for_gems: bcs_1.bcs.u64(), social_multiplier_for_power: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ProfileConfigParamsUpdated.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromFields)("u64", fields.max_bids_per_asset), minSuiBidAllowed: (0, reified_1.decodeFromFields)("u64", fields.min_sui_bid_allowed), profileKraftFeesSui: (0, reified_1.decodeFromFields)("u64", fields.profile_kraft_fees_sui), socialFeeGems: (0, reified_1.decodeFromFields)("u64", fields.social_fee_gems), socialMultiplierForGems: (0, reified_1.decodeFromFields)("u64", fields.social_multiplier_for_gems), socialMultiplierForPower: (0, reified_1.decodeFromFields)("u64", fields.social_multiplier_for_power) }); }
    static fromFieldsWithTypes(item) {
        if (!isProfileConfigParamsUpdated(item.type)) {
            throw new Error("not a ProfileConfigParamsUpdated type");
        }
        return ProfileConfigParamsUpdated.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_bids_per_asset), minSuiBidAllowed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_sui_bid_allowed), profileKraftFeesSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.profile_kraft_fees_sui), socialFeeGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_fee_gems), socialMultiplierForGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_multiplier_for_gems), socialMultiplierForPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_multiplier_for_power) });
    }
    static fromBcs(data) { return ProfileConfigParamsUpdated.fromFields(ProfileConfigParamsUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            maxBidsPerAsset: this.maxBidsPerAsset.toString(), minSuiBidAllowed: this.minSuiBidAllowed.toString(), profileKraftFeesSui: this.profileKraftFeesSui.toString(), socialFeeGems: this.socialFeeGems.toString(), socialMultiplierForGems: this.socialMultiplierForGems.toString(), socialMultiplierForPower: this.socialMultiplierForPower.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ProfileConfigParamsUpdated.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromJSONField)("u64", field.maxBidsPerAsset), minSuiBidAllowed: (0, reified_1.decodeFromJSONField)("u64", field.minSuiBidAllowed), profileKraftFeesSui: (0, reified_1.decodeFromJSONField)("u64", field.profileKraftFeesSui), socialFeeGems: (0, reified_1.decodeFromJSONField)("u64", field.socialFeeGems), socialMultiplierForGems: (0, reified_1.decodeFromJSONField)("u64", field.socialMultiplierForGems), socialMultiplierForPower: (0, reified_1.decodeFromJSONField)("u64", field.socialMultiplierForPower) }); }
    static fromJSON(json) {
        if (json.$typeName !== ProfileConfigParamsUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ProfileConfigParamsUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isProfileConfigParamsUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ProfileConfigParamsUpdated object`);
    } return ProfileConfigParamsUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ProfileConfigParamsUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProfileConfigParamsUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProfileConfigParamsUpdated object`);
        }
        return ProfileConfigParamsUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ProfileConfigParamsUpdated = ProfileConfigParamsUpdated;
ProfileConfigParamsUpdated.$typeName = "0x0::hive_profile::ProfileConfigParamsUpdated";
ProfileConfigParamsUpdated.$numTypeParams = 0;
/* ============================== PublicKraftConfig =============================== */
function isPublicKraftConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::PublicKraftConfig"; }
exports.isPublicKraftConfig = isPublicKraftConfig;
class PublicKraftConfig {
    constructor(typeArgs, fields) {
        this.$typeName = PublicKraftConfig.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PublicKraftConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.startTime = fields.startTime;
        ;
        this.perUserLimit = fields.perUserLimit;
        ;
        this.kraftsProcessed = fields.kraftsProcessed;
        ;
        this.addressList = fields.addressList;
    }
    static reified() { return { typeName: PublicKraftConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(PublicKraftConfig.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => PublicKraftConfig.fromFields(fields), fromFieldsWithTypes: (item) => PublicKraftConfig.fromFieldsWithTypes(item), fromBcs: (data) => PublicKraftConfig.fromBcs(data), bcs: PublicKraftConfig.bcs, fromJSONField: (field) => PublicKraftConfig.fromJSONField(field), fromJSON: (json) => PublicKraftConfig.fromJSON(json), fromSuiParsedData: (content) => PublicKraftConfig.fromSuiParsedData(content), fetch: async (client, id) => PublicKraftConfig.fetch(client, id), new: (fields) => { return new PublicKraftConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PublicKraftConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(PublicKraftConfig.reified()); }
    static get p() { return PublicKraftConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PublicKraftConfig", {
            id: structs_6.UID.bcs, start_time: bcs_1.bcs.u64(), per_user_limit: bcs_1.bcs.u64(), krafts_processed: bcs_1.bcs.u64(), address_list: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }))
        });
    }
    ;
    static fromFields(fields) { return PublicKraftConfig.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), startTime: (0, reified_1.decodeFromFields)("u64", fields.start_time), perUserLimit: (0, reified_1.decodeFromFields)("u64", fields.per_user_limit), kraftsProcessed: (0, reified_1.decodeFromFields)("u64", fields.krafts_processed), addressList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), fields.address_list) }); }
    static fromFieldsWithTypes(item) {
        if (!isPublicKraftConfig(item.type)) {
            throw new Error("not a PublicKraftConfig type");
        }
        return PublicKraftConfig.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), startTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_time), perUserLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.per_user_limit), kraftsProcessed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.krafts_processed), addressList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), item.fields.address_list) });
    }
    static fromBcs(data) { return PublicKraftConfig.fromFields(PublicKraftConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, startTime: this.startTime.toString(), perUserLimit: this.perUserLimit.toString(), kraftsProcessed: this.kraftsProcessed.toString(), addressList: this.addressList.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PublicKraftConfig.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), startTime: (0, reified_1.decodeFromJSONField)("u64", field.startTime), perUserLimit: (0, reified_1.decodeFromJSONField)("u64", field.perUserLimit), kraftsProcessed: (0, reified_1.decodeFromJSONField)("u64", field.kraftsProcessed), addressList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), field.addressList) }); }
    static fromJSON(json) {
        if (json.$typeName !== PublicKraftConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PublicKraftConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPublicKraftConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PublicKraftConfig object`);
    } return PublicKraftConfig.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PublicKraftConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPublicKraftConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PublicKraftConfig object`);
        }
        return PublicKraftConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PublicKraftConfig = PublicKraftConfig;
PublicKraftConfig.$typeName = "0x0::hive_profile::PublicKraftConfig";
PublicKraftConfig.$numTypeParams = 0;
/* ============================== PublicKraftInitialized =============================== */
function isPublicKraftInitialized(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::PublicKraftInitialized"; }
exports.isPublicKraftInitialized = isPublicKraftInitialized;
class PublicKraftInitialized {
    constructor(typeArgs, fields) {
        this.$typeName = PublicKraftInitialized.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PublicKraftInitialized.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.collectionName = fields.collectionName;
        ;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.creatorProfileUsername = fields.creatorProfileUsername;
        ;
        this.startTime = fields.startTime;
        ;
        this.perUserLimit = fields.perUserLimit;
    }
    static reified() { return { typeName: PublicKraftInitialized.$typeName, fullTypeName: (0, util_1.composeSuiType)(PublicKraftInitialized.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => PublicKraftInitialized.fromFields(fields), fromFieldsWithTypes: (item) => PublicKraftInitialized.fromFieldsWithTypes(item), fromBcs: (data) => PublicKraftInitialized.fromBcs(data), bcs: PublicKraftInitialized.bcs, fromJSONField: (field) => PublicKraftInitialized.fromJSONField(field), fromJSON: (json) => PublicKraftInitialized.fromJSON(json), fromSuiParsedData: (content) => PublicKraftInitialized.fromSuiParsedData(content), fetch: async (client, id) => PublicKraftInitialized.fetch(client, id), new: (fields) => { return new PublicKraftInitialized([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PublicKraftInitialized.reified(); }
    static phantom() { return (0, reified_1.phantom)(PublicKraftInitialized.reified()); }
    static get p() { return PublicKraftInitialized.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PublicKraftInitialized", {
            collection_name: structs_3.String.bcs, creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), creator_profile_username: structs_1.String.bcs, start_time: bcs_1.bcs.u64(), per_user_limit: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PublicKraftInitialized.reified().new({ collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), creatorProfileUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.creator_profile_username), startTime: (0, reified_1.decodeFromFields)("u64", fields.start_time), perUserLimit: (0, reified_1.decodeFromFields)("u64", fields.per_user_limit) }); }
    static fromFieldsWithTypes(item) {
        if (!isPublicKraftInitialized(item.type)) {
            throw new Error("not a PublicKraftInitialized type");
        }
        return PublicKraftInitialized.reified().new({ collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), creatorProfileUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.creator_profile_username), startTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_time), perUserLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.per_user_limit) });
    }
    static fromBcs(data) { return PublicKraftInitialized.fromFields(PublicKraftInitialized.bcs.parse(data)); }
    toJSONField() {
        return {
            collectionName: this.collectionName, creatorProfile: this.creatorProfile, creatorProfileUsername: this.creatorProfileUsername, startTime: this.startTime.toString(), perUserLimit: this.perUserLimit.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PublicKraftInitialized.reified().new({ collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), creatorProfileUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.creatorProfileUsername), startTime: (0, reified_1.decodeFromJSONField)("u64", field.startTime), perUserLimit: (0, reified_1.decodeFromJSONField)("u64", field.perUserLimit) }); }
    static fromJSON(json) {
        if (json.$typeName !== PublicKraftInitialized.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PublicKraftInitialized.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPublicKraftInitialized(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PublicKraftInitialized object`);
    } return PublicKraftInitialized.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PublicKraftInitialized object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPublicKraftInitialized(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PublicKraftInitialized object`);
        }
        return PublicKraftInitialized.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PublicKraftInitialized = PublicKraftInitialized;
PublicKraftInitialized.$typeName = "0x0::hive_profile::PublicKraftInitialized";
PublicKraftInitialized.$numTypeParams = 0;
/* ============================== RemovedUpgradeForVersion =============================== */
function isRemovedUpgradeForVersion(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::RemovedUpgradeForVersion"; }
exports.isRemovedUpgradeForVersion = isRemovedUpgradeForVersion;
class RemovedUpgradeForVersion {
    constructor(typeArgs, fields) {
        this.$typeName = RemovedUpgradeForVersion.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(RemovedUpgradeForVersion.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.creatorProfileAddr = fields.creatorProfileAddr;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.version = fields.version;
        ;
        this.upgradeIndex = fields.upgradeIndex;
    }
    static reified() { return { typeName: RemovedUpgradeForVersion.$typeName, fullTypeName: (0, util_1.composeSuiType)(RemovedUpgradeForVersion.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => RemovedUpgradeForVersion.fromFields(fields), fromFieldsWithTypes: (item) => RemovedUpgradeForVersion.fromFieldsWithTypes(item), fromBcs: (data) => RemovedUpgradeForVersion.fromBcs(data), bcs: RemovedUpgradeForVersion.bcs, fromJSONField: (field) => RemovedUpgradeForVersion.fromJSONField(field), fromJSON: (json) => RemovedUpgradeForVersion.fromJSON(json), fromSuiParsedData: (content) => RemovedUpgradeForVersion.fromSuiParsedData(content), fetch: async (client, id) => RemovedUpgradeForVersion.fetch(client, id), new: (fields) => { return new RemovedUpgradeForVersion([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RemovedUpgradeForVersion.reified(); }
    static phantom() { return (0, reified_1.phantom)(RemovedUpgradeForVersion.reified()); }
    static get p() { return RemovedUpgradeForVersion.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RemovedUpgradeForVersion", {
            creator_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), collection_name: structs_3.String.bcs, version: bcs_1.bcs.u64(), upgrade_index: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return RemovedUpgradeForVersion.reified().new({ creatorProfileAddr: (0, reified_1.decodeFromFields)("address", fields.creator_profile_addr), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), version: (0, reified_1.decodeFromFields)("u64", fields.version), upgradeIndex: (0, reified_1.decodeFromFields)("u64", fields.upgrade_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isRemovedUpgradeForVersion(item.type)) {
            throw new Error("not a RemovedUpgradeForVersion type");
        }
        return RemovedUpgradeForVersion.reified().new({ creatorProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile_addr), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), upgradeIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.upgrade_index) });
    }
    static fromBcs(data) { return RemovedUpgradeForVersion.fromFields(RemovedUpgradeForVersion.bcs.parse(data)); }
    toJSONField() {
        return {
            creatorProfileAddr: this.creatorProfileAddr, collectionName: this.collectionName, version: this.version.toString(), upgradeIndex: this.upgradeIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RemovedUpgradeForVersion.reified().new({ creatorProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.creatorProfileAddr), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), version: (0, reified_1.decodeFromJSONField)("u64", field.version), upgradeIndex: (0, reified_1.decodeFromJSONField)("u64", field.upgradeIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== RemovedUpgradeForVersion.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RemovedUpgradeForVersion.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRemovedUpgradeForVersion(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RemovedUpgradeForVersion object`);
    } return RemovedUpgradeForVersion.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RemovedUpgradeForVersion object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRemovedUpgradeForVersion(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemovedUpgradeForVersion object`);
        }
        return RemovedUpgradeForVersion.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RemovedUpgradeForVersion = RemovedUpgradeForVersion;
RemovedUpgradeForVersion.$typeName = "0x0::hive_profile::RemovedUpgradeForVersion";
RemovedUpgradeForVersion.$numTypeParams = 0;
/* ============================== ReturnBorrowedHiveAsset =============================== */
function isReturnBorrowedHiveAsset(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::ReturnBorrowedHiveAsset"; }
exports.isReturnBorrowedHiveAsset = isReturnBorrowedHiveAsset;
class ReturnBorrowedHiveAsset {
    constructor(typeArgs, fields) {
        this.$typeName = ReturnBorrowedHiveAsset.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ReturnBorrowedHiveAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.owner = fields.owner;
        ;
        this.borrowerProfile = fields.borrowerProfile;
    }
    static reified() { return { typeName: ReturnBorrowedHiveAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(ReturnBorrowedHiveAsset.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ReturnBorrowedHiveAsset.fromFields(fields), fromFieldsWithTypes: (item) => ReturnBorrowedHiveAsset.fromFieldsWithTypes(item), fromBcs: (data) => ReturnBorrowedHiveAsset.fromBcs(data), bcs: ReturnBorrowedHiveAsset.bcs, fromJSONField: (field) => ReturnBorrowedHiveAsset.fromJSONField(field), fromJSON: (json) => ReturnBorrowedHiveAsset.fromJSON(json), fromSuiParsedData: (content) => ReturnBorrowedHiveAsset.fromSuiParsedData(content), fetch: async (client, id) => ReturnBorrowedHiveAsset.fetch(client, id), new: (fields) => { return new ReturnBorrowedHiveAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ReturnBorrowedHiveAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(ReturnBorrowedHiveAsset.reified()); }
    static get p() { return ReturnBorrowedHiveAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ReturnBorrowedHiveAsset", {
            version: bcs_1.bcs.u64(), owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), borrower_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return ReturnBorrowedHiveAsset.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), owner: (0, reified_1.decodeFromFields)("address", fields.owner), borrowerProfile: (0, reified_1.decodeFromFields)("address", fields.borrower_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isReturnBorrowedHiveAsset(item.type)) {
            throw new Error("not a ReturnBorrowedHiveAsset type");
        }
        return ReturnBorrowedHiveAsset.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), borrowerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.borrower_profile) });
    }
    static fromBcs(data) { return ReturnBorrowedHiveAsset.fromFields(ReturnBorrowedHiveAsset.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), owner: this.owner, borrowerProfile: this.borrowerProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ReturnBorrowedHiveAsset.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), borrowerProfile: (0, reified_1.decodeFromJSONField)("address", field.borrowerProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== ReturnBorrowedHiveAsset.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ReturnBorrowedHiveAsset.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isReturnBorrowedHiveAsset(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ReturnBorrowedHiveAsset object`);
    } return ReturnBorrowedHiveAsset.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ReturnBorrowedHiveAsset object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isReturnBorrowedHiveAsset(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ReturnBorrowedHiveAsset object`);
        }
        return ReturnBorrowedHiveAsset.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ReturnBorrowedHiveAsset = ReturnBorrowedHiveAsset;
ReturnBorrowedHiveAsset.$typeName = "0x0::hive_profile::ReturnBorrowedHiveAsset";
ReturnBorrowedHiveAsset.$numTypeParams = 0;
/* ============================== Royalty =============================== */
function isRoyalty(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::Royalty"; }
exports.isRoyalty = isRoyalty;
class Royalty {
    constructor(typeArgs, fields) {
        this.$typeName = Royalty.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Royalty.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.numerator = fields.numerator;
        ;
        this.denominator = fields.denominator;
        ;
        this.assetsDispersalPercent = fields.assetsDispersalPercent;
        ;
        this.creatorsRoyaltyPercent = fields.creatorsRoyaltyPercent;
    }
    static reified() { return { typeName: Royalty.$typeName, fullTypeName: (0, util_1.composeSuiType)(Royalty.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Royalty.fromFields(fields), fromFieldsWithTypes: (item) => Royalty.fromFieldsWithTypes(item), fromBcs: (data) => Royalty.fromBcs(data), bcs: Royalty.bcs, fromJSONField: (field) => Royalty.fromJSONField(field), fromJSON: (json) => Royalty.fromJSON(json), fromSuiParsedData: (content) => Royalty.fromSuiParsedData(content), fetch: async (client, id) => Royalty.fetch(client, id), new: (fields) => { return new Royalty([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Royalty.reified(); }
    static phantom() { return (0, reified_1.phantom)(Royalty.reified()); }
    static get p() { return Royalty.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Royalty", {
            numerator: bcs_1.bcs.u64(), denominator: bcs_1.bcs.u64(), assets_dispersal_percent: bcs_1.bcs.u64(), creators_royalty_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Royalty.reified().new({ numerator: (0, reified_1.decodeFromFields)("u64", fields.numerator), denominator: (0, reified_1.decodeFromFields)("u64", fields.denominator), assetsDispersalPercent: (0, reified_1.decodeFromFields)("u64", fields.assets_dispersal_percent), creatorsRoyaltyPercent: (0, reified_1.decodeFromFields)("u64", fields.creators_royalty_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isRoyalty(item.type)) {
            throw new Error("not a Royalty type");
        }
        return Royalty.reified().new({ numerator: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.numerator), denominator: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.denominator), assetsDispersalPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.assets_dispersal_percent), creatorsRoyaltyPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.creators_royalty_percent) });
    }
    static fromBcs(data) { return Royalty.fromFields(Royalty.bcs.parse(data)); }
    toJSONField() {
        return {
            numerator: this.numerator.toString(), denominator: this.denominator.toString(), assetsDispersalPercent: this.assetsDispersalPercent.toString(), creatorsRoyaltyPercent: this.creatorsRoyaltyPercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Royalty.reified().new({ numerator: (0, reified_1.decodeFromJSONField)("u64", field.numerator), denominator: (0, reified_1.decodeFromJSONField)("u64", field.denominator), assetsDispersalPercent: (0, reified_1.decodeFromJSONField)("u64", field.assetsDispersalPercent), creatorsRoyaltyPercent: (0, reified_1.decodeFromJSONField)("u64", field.creatorsRoyaltyPercent) }); }
    static fromJSON(json) {
        if (json.$typeName !== Royalty.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Royalty.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRoyalty(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Royalty object`);
    } return Royalty.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Royalty object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRoyalty(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Royalty object`);
        }
        return Royalty.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Royalty = Royalty;
Royalty.$typeName = "0x0::hive_profile::Royalty";
Royalty.$numTypeParams = 0;
/* ============================== RoyaltyCollectedForCreator =============================== */
function isRoyaltyCollectedForCreator(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::RoyaltyCollectedForCreator"; }
exports.isRoyaltyCollectedForCreator = isRoyaltyCollectedForCreator;
class RoyaltyCollectedForCreator {
    constructor(typeArgs, fields) {
        this.$typeName = RoyaltyCollectedForCreator.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(RoyaltyCollectedForCreator.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.username = fields.username;
        ;
        this.hsuiCollected = fields.hsuiCollected;
    }
    static reified() { return { typeName: RoyaltyCollectedForCreator.$typeName, fullTypeName: (0, util_1.composeSuiType)(RoyaltyCollectedForCreator.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => RoyaltyCollectedForCreator.fromFields(fields), fromFieldsWithTypes: (item) => RoyaltyCollectedForCreator.fromFieldsWithTypes(item), fromBcs: (data) => RoyaltyCollectedForCreator.fromBcs(data), bcs: RoyaltyCollectedForCreator.bcs, fromJSONField: (field) => RoyaltyCollectedForCreator.fromJSONField(field), fromJSON: (json) => RoyaltyCollectedForCreator.fromJSON(json), fromSuiParsedData: (content) => RoyaltyCollectedForCreator.fromSuiParsedData(content), fetch: async (client, id) => RoyaltyCollectedForCreator.fetch(client, id), new: (fields) => { return new RoyaltyCollectedForCreator([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RoyaltyCollectedForCreator.reified(); }
    static phantom() { return (0, reified_1.phantom)(RoyaltyCollectedForCreator.reified()); }
    static get p() { return RoyaltyCollectedForCreator.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RoyaltyCollectedForCreator", {
            creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, hsui_collected: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return RoyaltyCollectedForCreator.reified().new({ creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), hsuiCollected: (0, reified_1.decodeFromFields)("u64", fields.hsui_collected) }); }
    static fromFieldsWithTypes(item) {
        if (!isRoyaltyCollectedForCreator(item.type)) {
            throw new Error("not a RoyaltyCollectedForCreator type");
        }
        return RoyaltyCollectedForCreator.reified().new({ creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), hsuiCollected: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hsui_collected) });
    }
    static fromBcs(data) { return RoyaltyCollectedForCreator.fromFields(RoyaltyCollectedForCreator.bcs.parse(data)); }
    toJSONField() {
        return {
            creatorProfile: this.creatorProfile, username: this.username, hsuiCollected: this.hsuiCollected.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RoyaltyCollectedForCreator.reified().new({ creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), hsuiCollected: (0, reified_1.decodeFromJSONField)("u64", field.hsuiCollected) }); }
    static fromJSON(json) {
        if (json.$typeName !== RoyaltyCollectedForCreator.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RoyaltyCollectedForCreator.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRoyaltyCollectedForCreator(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RoyaltyCollectedForCreator object`);
    } return RoyaltyCollectedForCreator.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RoyaltyCollectedForCreator object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRoyaltyCollectedForCreator(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RoyaltyCollectedForCreator object`);
        }
        return RoyaltyCollectedForCreator.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RoyaltyCollectedForCreator = RoyaltyCollectedForCreator;
RoyaltyCollectedForCreator.$typeName = "0x0::hive_profile::RoyaltyCollectedForCreator";
RoyaltyCollectedForCreator.$numTypeParams = 0;
/* ============================== RoyaltyProcessed =============================== */
function isRoyaltyProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::RoyaltyProcessed"; }
exports.isRoyaltyProcessed = isRoyaltyProcessed;
class RoyaltyProcessed {
    constructor(typeArgs, fields) {
        this.$typeName = RoyaltyProcessed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(RoyaltyProcessed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.totalRoyaltyAmt = fields.totalRoyaltyAmt;
        ;
        this.hiveDispersalAmt = fields.hiveDispersalAmt;
        ;
        this.creatorRoyaltyAmt = fields.creatorRoyaltyAmt;
        ;
        this.accruedToFeeCapHolder = fields.accruedToFeeCapHolder;
    }
    static reified() { return { typeName: RoyaltyProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(RoyaltyProcessed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => RoyaltyProcessed.fromFields(fields), fromFieldsWithTypes: (item) => RoyaltyProcessed.fromFieldsWithTypes(item), fromBcs: (data) => RoyaltyProcessed.fromBcs(data), bcs: RoyaltyProcessed.bcs, fromJSONField: (field) => RoyaltyProcessed.fromJSONField(field), fromJSON: (json) => RoyaltyProcessed.fromJSON(json), fromSuiParsedData: (content) => RoyaltyProcessed.fromSuiParsedData(content), fetch: async (client, id) => RoyaltyProcessed.fetch(client, id), new: (fields) => { return new RoyaltyProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RoyaltyProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(RoyaltyProcessed.reified()); }
    static get p() { return RoyaltyProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RoyaltyProcessed", {
            total_royalty_amt: bcs_1.bcs.u64(), hive_dispersal_amt: bcs_1.bcs.u64(), creator_royalty_amt: bcs_1.bcs.u64(), accrued_to_fee_cap_holder: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return RoyaltyProcessed.reified().new({ totalRoyaltyAmt: (0, reified_1.decodeFromFields)("u64", fields.total_royalty_amt), hiveDispersalAmt: (0, reified_1.decodeFromFields)("u64", fields.hive_dispersal_amt), creatorRoyaltyAmt: (0, reified_1.decodeFromFields)("u64", fields.creator_royalty_amt), accruedToFeeCapHolder: (0, reified_1.decodeFromFields)("u64", fields.accrued_to_fee_cap_holder) }); }
    static fromFieldsWithTypes(item) {
        if (!isRoyaltyProcessed(item.type)) {
            throw new Error("not a RoyaltyProcessed type");
        }
        return RoyaltyProcessed.reified().new({ totalRoyaltyAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_royalty_amt), hiveDispersalAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_dispersal_amt), creatorRoyaltyAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.creator_royalty_amt), accruedToFeeCapHolder: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.accrued_to_fee_cap_holder) });
    }
    static fromBcs(data) { return RoyaltyProcessed.fromFields(RoyaltyProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            totalRoyaltyAmt: this.totalRoyaltyAmt.toString(), hiveDispersalAmt: this.hiveDispersalAmt.toString(), creatorRoyaltyAmt: this.creatorRoyaltyAmt.toString(), accruedToFeeCapHolder: this.accruedToFeeCapHolder.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RoyaltyProcessed.reified().new({ totalRoyaltyAmt: (0, reified_1.decodeFromJSONField)("u64", field.totalRoyaltyAmt), hiveDispersalAmt: (0, reified_1.decodeFromJSONField)("u64", field.hiveDispersalAmt), creatorRoyaltyAmt: (0, reified_1.decodeFromJSONField)("u64", field.creatorRoyaltyAmt), accruedToFeeCapHolder: (0, reified_1.decodeFromJSONField)("u64", field.accruedToFeeCapHolder) }); }
    static fromJSON(json) {
        if (json.$typeName !== RoyaltyProcessed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RoyaltyProcessed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRoyaltyProcessed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RoyaltyProcessed object`);
    } return RoyaltyProcessed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RoyaltyProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRoyaltyProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RoyaltyProcessed object`);
        }
        return RoyaltyProcessed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RoyaltyProcessed = RoyaltyProcessed;
RoyaltyProcessed.$typeName = "0x0::hive_profile::RoyaltyProcessed";
RoyaltyProcessed.$numTypeParams = 0;
/* ============================== SaleExecuted =============================== */
function isSaleExecuted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::SaleExecuted"; }
exports.isSaleExecuted = isSaleExecuted;
class SaleExecuted {
    constructor(typeArgs, fields) {
        this.$typeName = SaleExecuted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(SaleExecuted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.buyerProfile = fields.buyerProfile;
        ;
        this.sellerProfile = fields.sellerProfile;
        ;
        this.pricePaidHsui = fields.pricePaidHsui;
        ;
        this.pricePaidSui = fields.pricePaidSui;
        ;
        this.isSaleListing = fields.isSaleListing;
        ;
        this.instantSale = fields.instantSale;
        ;
        this.highestBidSale = fields.highestBidSale;
        ;
        this.isDirectBidAccepted = fields.isDirectBidAccepted;
    }
    static reified() { return { typeName: SaleExecuted.$typeName, fullTypeName: (0, util_1.composeSuiType)(SaleExecuted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => SaleExecuted.fromFields(fields), fromFieldsWithTypes: (item) => SaleExecuted.fromFieldsWithTypes(item), fromBcs: (data) => SaleExecuted.fromBcs(data), bcs: SaleExecuted.bcs, fromJSONField: (field) => SaleExecuted.fromJSONField(field), fromJSON: (json) => SaleExecuted.fromJSON(json), fromSuiParsedData: (content) => SaleExecuted.fromSuiParsedData(content), fetch: async (client, id) => SaleExecuted.fetch(client, id), new: (fields) => { return new SaleExecuted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SaleExecuted.reified(); }
    static phantom() { return (0, reified_1.phantom)(SaleExecuted.reified()); }
    static get p() { return SaleExecuted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SaleExecuted", {
            version: bcs_1.bcs.u64(), buyer_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), seller_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), price_paid_hsui: bcs_1.bcs.u64(), price_paid_sui: bcs_1.bcs.u64(), is_sale_listing: bcs_1.bcs.bool(), instant_sale: bcs_1.bcs.bool(), highest_bid_sale: bcs_1.bcs.bool(), is_direct_bid_accepted: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return SaleExecuted.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), buyerProfile: (0, reified_1.decodeFromFields)("address", fields.buyer_profile), sellerProfile: (0, reified_1.decodeFromFields)("address", fields.seller_profile), pricePaidHsui: (0, reified_1.decodeFromFields)("u64", fields.price_paid_hsui), pricePaidSui: (0, reified_1.decodeFromFields)("u64", fields.price_paid_sui), isSaleListing: (0, reified_1.decodeFromFields)("bool", fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFields)("bool", fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFields)("bool", fields.highest_bid_sale), isDirectBidAccepted: (0, reified_1.decodeFromFields)("bool", fields.is_direct_bid_accepted) }); }
    static fromFieldsWithTypes(item) {
        if (!isSaleExecuted(item.type)) {
            throw new Error("not a SaleExecuted type");
        }
        return SaleExecuted.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), buyerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.buyer_profile), sellerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.seller_profile), pricePaidHsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_paid_hsui), pricePaidSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_paid_sui), isSaleListing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.highest_bid_sale), isDirectBidAccepted: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_direct_bid_accepted) });
    }
    static fromBcs(data) { return SaleExecuted.fromFields(SaleExecuted.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), buyerProfile: this.buyerProfile, sellerProfile: this.sellerProfile, pricePaidHsui: this.pricePaidHsui.toString(), pricePaidSui: this.pricePaidSui.toString(), isSaleListing: this.isSaleListing, instantSale: this.instantSale, highestBidSale: this.highestBidSale, isDirectBidAccepted: this.isDirectBidAccepted,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SaleExecuted.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), buyerProfile: (0, reified_1.decodeFromJSONField)("address", field.buyerProfile), sellerProfile: (0, reified_1.decodeFromJSONField)("address", field.sellerProfile), pricePaidHsui: (0, reified_1.decodeFromJSONField)("u64", field.pricePaidHsui), pricePaidSui: (0, reified_1.decodeFromJSONField)("u64", field.pricePaidSui), isSaleListing: (0, reified_1.decodeFromJSONField)("bool", field.isSaleListing), instantSale: (0, reified_1.decodeFromJSONField)("bool", field.instantSale), highestBidSale: (0, reified_1.decodeFromJSONField)("bool", field.highestBidSale), isDirectBidAccepted: (0, reified_1.decodeFromJSONField)("bool", field.isDirectBidAccepted) }); }
    static fromJSON(json) {
        if (json.$typeName !== SaleExecuted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SaleExecuted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSaleExecuted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SaleExecuted object`);
    } return SaleExecuted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SaleExecuted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSaleExecuted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SaleExecuted object`);
        }
        return SaleExecuted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SaleExecuted = SaleExecuted;
SaleExecuted.$typeName = "0x0::hive_profile::SaleExecuted";
SaleExecuted.$numTypeParams = 0;
/* ============================== SkinAccessPermissionsUpdated =============================== */
function isSkinAccessPermissionsUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::SkinAccessPermissionsUpdated"; }
exports.isSkinAccessPermissionsUpdated = isSkinAccessPermissionsUpdated;
class SkinAccessPermissionsUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = SkinAccessPermissionsUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(SkinAccessPermissionsUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.skinType = fields.skinType;
        ;
        this.discountAccess = fields.discountAccess;
        ;
        this.discount = fields.discount;
    }
    static reified() { return { typeName: SkinAccessPermissionsUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(SkinAccessPermissionsUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => SkinAccessPermissionsUpdated.fromFields(fields), fromFieldsWithTypes: (item) => SkinAccessPermissionsUpdated.fromFieldsWithTypes(item), fromBcs: (data) => SkinAccessPermissionsUpdated.fromBcs(data), bcs: SkinAccessPermissionsUpdated.bcs, fromJSONField: (field) => SkinAccessPermissionsUpdated.fromJSONField(field), fromJSON: (json) => SkinAccessPermissionsUpdated.fromJSON(json), fromSuiParsedData: (content) => SkinAccessPermissionsUpdated.fromSuiParsedData(content), fetch: async (client, id) => SkinAccessPermissionsUpdated.fetch(client, id), new: (fields) => { return new SkinAccessPermissionsUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SkinAccessPermissionsUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(SkinAccessPermissionsUpdated.reified()); }
    static get p() { return SkinAccessPermissionsUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SkinAccessPermissionsUpdated", {
            version: bcs_1.bcs.u64(), skin_type: structs_3.String.bcs, discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return SkinAccessPermissionsUpdated.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), skinType: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.skin_type), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount) }); }
    static fromFieldsWithTypes(item) {
        if (!isSkinAccessPermissionsUpdated(item.type)) {
            throw new Error("not a SkinAccessPermissionsUpdated type");
        }
        return SkinAccessPermissionsUpdated.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), skinType: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.skin_type), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount) });
    }
    static fromBcs(data) { return SkinAccessPermissionsUpdated.fromFields(SkinAccessPermissionsUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), skinType: this.skinType, discountAccess: this.discountAccess, discount: this.discount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SkinAccessPermissionsUpdated.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), skinType: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.skinType), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount) }); }
    static fromJSON(json) {
        if (json.$typeName !== SkinAccessPermissionsUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SkinAccessPermissionsUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSkinAccessPermissionsUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SkinAccessPermissionsUpdated object`);
    } return SkinAccessPermissionsUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SkinAccessPermissionsUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSkinAccessPermissionsUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SkinAccessPermissionsUpdated object`);
        }
        return SkinAccessPermissionsUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SkinAccessPermissionsUpdated = SkinAccessPermissionsUpdated;
SkinAccessPermissionsUpdated.$typeName = "0x0::hive_profile::SkinAccessPermissionsUpdated";
SkinAccessPermissionsUpdated.$numTypeParams = 0;
/* ============================== SkinKraftPermissionsUpdated =============================== */
function isSkinKraftPermissionsUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::SkinKraftPermissionsUpdated"; }
exports.isSkinKraftPermissionsUpdated = isSkinKraftPermissionsUpdated;
class SkinKraftPermissionsUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = SkinKraftPermissionsUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(SkinKraftPermissionsUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.skinType = fields.skinType;
        ;
        this.kraftAccess = fields.kraftAccess;
    }
    static reified() { return { typeName: SkinKraftPermissionsUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(SkinKraftPermissionsUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => SkinKraftPermissionsUpdated.fromFields(fields), fromFieldsWithTypes: (item) => SkinKraftPermissionsUpdated.fromFieldsWithTypes(item), fromBcs: (data) => SkinKraftPermissionsUpdated.fromBcs(data), bcs: SkinKraftPermissionsUpdated.bcs, fromJSONField: (field) => SkinKraftPermissionsUpdated.fromJSONField(field), fromJSON: (json) => SkinKraftPermissionsUpdated.fromJSON(json), fromSuiParsedData: (content) => SkinKraftPermissionsUpdated.fromSuiParsedData(content), fetch: async (client, id) => SkinKraftPermissionsUpdated.fetch(client, id), new: (fields) => { return new SkinKraftPermissionsUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SkinKraftPermissionsUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(SkinKraftPermissionsUpdated.reified()); }
    static get p() { return SkinKraftPermissionsUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SkinKraftPermissionsUpdated", {
            version: bcs_1.bcs.u64(), skin_type: structs_3.String.bcs, kraft_access: bcs_1.bcs.u8()
        });
    }
    ;
    static fromFields(fields) { return SkinKraftPermissionsUpdated.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), skinType: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.skin_type), kraftAccess: (0, reified_1.decodeFromFields)("u8", fields.kraft_access) }); }
    static fromFieldsWithTypes(item) {
        if (!isSkinKraftPermissionsUpdated(item.type)) {
            throw new Error("not a SkinKraftPermissionsUpdated type");
        }
        return SkinKraftPermissionsUpdated.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), skinType: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.skin_type), kraftAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.kraft_access) });
    }
    static fromBcs(data) { return SkinKraftPermissionsUpdated.fromFields(SkinKraftPermissionsUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), skinType: this.skinType, kraftAccess: this.kraftAccess,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SkinKraftPermissionsUpdated.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), skinType: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.skinType), kraftAccess: (0, reified_1.decodeFromJSONField)("u8", field.kraftAccess) }); }
    static fromJSON(json) {
        if (json.$typeName !== SkinKraftPermissionsUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SkinKraftPermissionsUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSkinKraftPermissionsUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SkinKraftPermissionsUpdated object`);
    } return SkinKraftPermissionsUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SkinKraftPermissionsUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSkinKraftPermissionsUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SkinKraftPermissionsUpdated object`);
        }
        return SkinKraftPermissionsUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SkinKraftPermissionsUpdated = SkinKraftPermissionsUpdated;
SkinKraftPermissionsUpdated.$typeName = "0x0::hive_profile::SkinKraftPermissionsUpdated";
SkinKraftPermissionsUpdated.$numTypeParams = 0;
/* ============================== SkinRecord =============================== */
function isSkinRecord(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::SkinRecord"; }
exports.isSkinRecord = isSkinRecord;
class SkinRecord {
    constructor(typeArgs, fields) {
        this.$typeName = SkinRecord.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(SkinRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.kraftAccess = fields.kraftAccess;
        ;
        this.discountAccess = fields.discountAccess;
        ;
        this.discount = fields.discount;
        ;
        this.royaltyFeePercent = fields.royaltyFeePercent;
        ;
        this.totalGemsPorted = fields.totalGemsPorted;
        ;
        this.totalSkinsKrafted = fields.totalSkinsKrafted;
    }
    static reified() { return { typeName: SkinRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(SkinRecord.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => SkinRecord.fromFields(fields), fromFieldsWithTypes: (item) => SkinRecord.fromFieldsWithTypes(item), fromBcs: (data) => SkinRecord.fromBcs(data), bcs: SkinRecord.bcs, fromJSONField: (field) => SkinRecord.fromJSONField(field), fromJSON: (json) => SkinRecord.fromJSON(json), fromSuiParsedData: (content) => SkinRecord.fromSuiParsedData(content), fetch: async (client, id) => SkinRecord.fetch(client, id), new: (fields) => { return new SkinRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SkinRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(SkinRecord.reified()); }
    static get p() { return SkinRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SkinRecord", {
            kraft_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64(), royalty_fee_percent: bcs_1.bcs.u64(), total_gems_ported: bcs_1.bcs.u64(), total_skins_krafted: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return SkinRecord.reified().new({ kraftAccess: (0, reified_1.decodeFromFields)("u8", fields.kraft_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount), royaltyFeePercent: (0, reified_1.decodeFromFields)("u64", fields.royalty_fee_percent), totalGemsPorted: (0, reified_1.decodeFromFields)("u64", fields.total_gems_ported), totalSkinsKrafted: (0, reified_1.decodeFromFields)("u64", fields.total_skins_krafted) }); }
    static fromFieldsWithTypes(item) {
        if (!isSkinRecord(item.type)) {
            throw new Error("not a SkinRecord type");
        }
        return SkinRecord.reified().new({ kraftAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.kraft_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount), royaltyFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.royalty_fee_percent), totalGemsPorted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_gems_ported), totalSkinsKrafted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_skins_krafted) });
    }
    static fromBcs(data) { return SkinRecord.fromFields(SkinRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            kraftAccess: this.kraftAccess, discountAccess: this.discountAccess, discount: this.discount.toString(), royaltyFeePercent: this.royaltyFeePercent.toString(), totalGemsPorted: this.totalGemsPorted.toString(), totalSkinsKrafted: this.totalSkinsKrafted.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SkinRecord.reified().new({ kraftAccess: (0, reified_1.decodeFromJSONField)("u8", field.kraftAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount), royaltyFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.royaltyFeePercent), totalGemsPorted: (0, reified_1.decodeFromJSONField)("u64", field.totalGemsPorted), totalSkinsKrafted: (0, reified_1.decodeFromJSONField)("u64", field.totalSkinsKrafted) }); }
    static fromJSON(json) {
        if (json.$typeName !== SkinRecord.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SkinRecord.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSkinRecord(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SkinRecord object`);
    } return SkinRecord.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SkinRecord object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSkinRecord(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SkinRecord object`);
        }
        return SkinRecord.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SkinRecord = SkinRecord;
SkinRecord.$typeName = "0x0::hive_profile::SkinRecord";
SkinRecord.$numTypeParams = 0;
/* ============================== SkinRoyaltyCommissionUpdated =============================== */
function isSkinRoyaltyCommissionUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::SkinRoyaltyCommissionUpdated"; }
exports.isSkinRoyaltyCommissionUpdated = isSkinRoyaltyCommissionUpdated;
class SkinRoyaltyCommissionUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = SkinRoyaltyCommissionUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(SkinRoyaltyCommissionUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.skinType = fields.skinType;
        ;
        this.royaltyFeePercent = fields.royaltyFeePercent;
    }
    static reified() { return { typeName: SkinRoyaltyCommissionUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(SkinRoyaltyCommissionUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => SkinRoyaltyCommissionUpdated.fromFields(fields), fromFieldsWithTypes: (item) => SkinRoyaltyCommissionUpdated.fromFieldsWithTypes(item), fromBcs: (data) => SkinRoyaltyCommissionUpdated.fromBcs(data), bcs: SkinRoyaltyCommissionUpdated.bcs, fromJSONField: (field) => SkinRoyaltyCommissionUpdated.fromJSONField(field), fromJSON: (json) => SkinRoyaltyCommissionUpdated.fromJSON(json), fromSuiParsedData: (content) => SkinRoyaltyCommissionUpdated.fromSuiParsedData(content), fetch: async (client, id) => SkinRoyaltyCommissionUpdated.fetch(client, id), new: (fields) => { return new SkinRoyaltyCommissionUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SkinRoyaltyCommissionUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(SkinRoyaltyCommissionUpdated.reified()); }
    static get p() { return SkinRoyaltyCommissionUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SkinRoyaltyCommissionUpdated", {
            version: bcs_1.bcs.u64(), skin_type: structs_3.String.bcs, royalty_fee_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return SkinRoyaltyCommissionUpdated.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), skinType: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.skin_type), royaltyFeePercent: (0, reified_1.decodeFromFields)("u64", fields.royalty_fee_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isSkinRoyaltyCommissionUpdated(item.type)) {
            throw new Error("not a SkinRoyaltyCommissionUpdated type");
        }
        return SkinRoyaltyCommissionUpdated.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), skinType: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.skin_type), royaltyFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.royalty_fee_percent) });
    }
    static fromBcs(data) { return SkinRoyaltyCommissionUpdated.fromFields(SkinRoyaltyCommissionUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), skinType: this.skinType, royaltyFeePercent: this.royaltyFeePercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SkinRoyaltyCommissionUpdated.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), skinType: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.skinType), royaltyFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.royaltyFeePercent) }); }
    static fromJSON(json) {
        if (json.$typeName !== SkinRoyaltyCommissionUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SkinRoyaltyCommissionUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSkinRoyaltyCommissionUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SkinRoyaltyCommissionUpdated object`);
    } return SkinRoyaltyCommissionUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SkinRoyaltyCommissionUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSkinRoyaltyCommissionUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SkinRoyaltyCommissionUpdated object`);
        }
        return SkinRoyaltyCommissionUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SkinRoyaltyCommissionUpdated = SkinRoyaltyCommissionUpdated;
SkinRoyaltyCommissionUpdated.$typeName = "0x0::hive_profile::SkinRoyaltyCommissionUpdated";
SkinRoyaltyCommissionUpdated.$numTypeParams = 0;
/* ============================== SubscriptionRoyalty =============================== */
function isSubscriptionRoyalty(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::SubscriptionRoyalty"; }
exports.isSubscriptionRoyalty = isSubscriptionRoyalty;
class SubscriptionRoyalty {
    constructor(typeArgs, fields) {
        this.$typeName = SubscriptionRoyalty.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(SubscriptionRoyalty.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.numerator = fields.numerator;
        ;
        this.denominator = fields.denominator;
        ;
        this.treasuryPercent = fields.treasuryPercent;
        ;
        this.burnPercent = fields.burnPercent;
    }
    static reified() { return { typeName: SubscriptionRoyalty.$typeName, fullTypeName: (0, util_1.composeSuiType)(SubscriptionRoyalty.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => SubscriptionRoyalty.fromFields(fields), fromFieldsWithTypes: (item) => SubscriptionRoyalty.fromFieldsWithTypes(item), fromBcs: (data) => SubscriptionRoyalty.fromBcs(data), bcs: SubscriptionRoyalty.bcs, fromJSONField: (field) => SubscriptionRoyalty.fromJSONField(field), fromJSON: (json) => SubscriptionRoyalty.fromJSON(json), fromSuiParsedData: (content) => SubscriptionRoyalty.fromSuiParsedData(content), fetch: async (client, id) => SubscriptionRoyalty.fetch(client, id), new: (fields) => { return new SubscriptionRoyalty([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SubscriptionRoyalty.reified(); }
    static phantom() { return (0, reified_1.phantom)(SubscriptionRoyalty.reified()); }
    static get p() { return SubscriptionRoyalty.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SubscriptionRoyalty", {
            numerator: bcs_1.bcs.u64(), denominator: bcs_1.bcs.u64(), treasury_percent: bcs_1.bcs.u64(), burn_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return SubscriptionRoyalty.reified().new({ numerator: (0, reified_1.decodeFromFields)("u64", fields.numerator), denominator: (0, reified_1.decodeFromFields)("u64", fields.denominator), treasuryPercent: (0, reified_1.decodeFromFields)("u64", fields.treasury_percent), burnPercent: (0, reified_1.decodeFromFields)("u64", fields.burn_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isSubscriptionRoyalty(item.type)) {
            throw new Error("not a SubscriptionRoyalty type");
        }
        return SubscriptionRoyalty.reified().new({ numerator: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.numerator), denominator: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.denominator), treasuryPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_percent), burnPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.burn_percent) });
    }
    static fromBcs(data) { return SubscriptionRoyalty.fromFields(SubscriptionRoyalty.bcs.parse(data)); }
    toJSONField() {
        return {
            numerator: this.numerator.toString(), denominator: this.denominator.toString(), treasuryPercent: this.treasuryPercent.toString(), burnPercent: this.burnPercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SubscriptionRoyalty.reified().new({ numerator: (0, reified_1.decodeFromJSONField)("u64", field.numerator), denominator: (0, reified_1.decodeFromJSONField)("u64", field.denominator), treasuryPercent: (0, reified_1.decodeFromJSONField)("u64", field.treasuryPercent), burnPercent: (0, reified_1.decodeFromJSONField)("u64", field.burnPercent) }); }
    static fromJSON(json) {
        if (json.$typeName !== SubscriptionRoyalty.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SubscriptionRoyalty.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSubscriptionRoyalty(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SubscriptionRoyalty object`);
    } return SubscriptionRoyalty.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SubscriptionRoyalty object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSubscriptionRoyalty(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SubscriptionRoyalty object`);
        }
        return SubscriptionRoyalty.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SubscriptionRoyalty = SubscriptionRoyalty;
SubscriptionRoyalty.$typeName = "0x0::hive_profile::SubscriptionRoyalty";
SubscriptionRoyalty.$numTypeParams = 0;
/* ============================== TotalActivePowerUpdated =============================== */
function isTotalActivePowerUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::TotalActivePowerUpdated"; }
exports.isTotalActivePowerUpdated = isTotalActivePowerUpdated;
class TotalActivePowerUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = TotalActivePowerUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TotalActivePowerUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.newTotalActivePower = fields.newTotalActivePower;
        ;
        this.totalStakedAssets = fields.totalStakedAssets;
    }
    static reified() { return { typeName: TotalActivePowerUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(TotalActivePowerUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => TotalActivePowerUpdated.fromFields(fields), fromFieldsWithTypes: (item) => TotalActivePowerUpdated.fromFieldsWithTypes(item), fromBcs: (data) => TotalActivePowerUpdated.fromBcs(data), bcs: TotalActivePowerUpdated.bcs, fromJSONField: (field) => TotalActivePowerUpdated.fromJSONField(field), fromJSON: (json) => TotalActivePowerUpdated.fromJSON(json), fromSuiParsedData: (content) => TotalActivePowerUpdated.fromSuiParsedData(content), fetch: async (client, id) => TotalActivePowerUpdated.fetch(client, id), new: (fields) => { return new TotalActivePowerUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TotalActivePowerUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(TotalActivePowerUpdated.reified()); }
    static get p() { return TotalActivePowerUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TotalActivePowerUpdated", {
            new_total_active_power: bcs_1.bcs.u128(), total_staked_assets: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TotalActivePowerUpdated.reified().new({ newTotalActivePower: (0, reified_1.decodeFromFields)("u128", fields.new_total_active_power), totalStakedAssets: (0, reified_1.decodeFromFields)("u64", fields.total_staked_assets) }); }
    static fromFieldsWithTypes(item) {
        if (!isTotalActivePowerUpdated(item.type)) {
            throw new Error("not a TotalActivePowerUpdated type");
        }
        return TotalActivePowerUpdated.reified().new({ newTotalActivePower: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.new_total_active_power), totalStakedAssets: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_staked_assets) });
    }
    static fromBcs(data) { return TotalActivePowerUpdated.fromFields(TotalActivePowerUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            newTotalActivePower: this.newTotalActivePower.toString(), totalStakedAssets: this.totalStakedAssets.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TotalActivePowerUpdated.reified().new({ newTotalActivePower: (0, reified_1.decodeFromJSONField)("u128", field.newTotalActivePower), totalStakedAssets: (0, reified_1.decodeFromJSONField)("u64", field.totalStakedAssets) }); }
    static fromJSON(json) {
        if (json.$typeName !== TotalActivePowerUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TotalActivePowerUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTotalActivePowerUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TotalActivePowerUpdated object`);
    } return TotalActivePowerUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TotalActivePowerUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTotalActivePowerUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TotalActivePowerUpdated object`);
        }
        return TotalActivePowerUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TotalActivePowerUpdated = TotalActivePowerUpdated;
TotalActivePowerUpdated.$typeName = "0x0::hive_profile::TotalActivePowerUpdated";
TotalActivePowerUpdated.$numTypeParams = 0;
/* ============================== TraitsSetInHiveKiosk =============================== */
function isTraitsSetInHiveKiosk(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::TraitsSetInHiveKiosk"; }
exports.isTraitsSetInHiveKiosk = isTraitsSetInHiveKiosk;
class TraitsSetInHiveKiosk {
    constructor(typeArgs, fields) {
        this.$typeName = TraitsSetInHiveKiosk.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TraitsSetInHiveKiosk.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.traitsList = fields.traitsList;
    }
    static reified() { return { typeName: TraitsSetInHiveKiosk.$typeName, fullTypeName: (0, util_1.composeSuiType)(TraitsSetInHiveKiosk.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => TraitsSetInHiveKiosk.fromFields(fields), fromFieldsWithTypes: (item) => TraitsSetInHiveKiosk.fromFieldsWithTypes(item), fromBcs: (data) => TraitsSetInHiveKiosk.fromBcs(data), bcs: TraitsSetInHiveKiosk.bcs, fromJSONField: (field) => TraitsSetInHiveKiosk.fromJSONField(field), fromJSON: (json) => TraitsSetInHiveKiosk.fromJSON(json), fromSuiParsedData: (content) => TraitsSetInHiveKiosk.fromSuiParsedData(content), fetch: async (client, id) => TraitsSetInHiveKiosk.fetch(client, id), new: (fields) => { return new TraitsSetInHiveKiosk([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TraitsSetInHiveKiosk.reified(); }
    static phantom() { return (0, reified_1.phantom)(TraitsSetInHiveKiosk.reified()); }
    static get p() { return TraitsSetInHiveKiosk.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TraitsSetInHiveKiosk", {
            creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), collection_name: structs_3.String.bcs, traits_list: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return TraitsSetInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), traitsList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.traits_list) }); }
    static fromFieldsWithTypes(item) {
        if (!isTraitsSetInHiveKiosk(item.type)) {
            throw new Error("not a TraitsSetInHiveKiosk type");
        }
        return TraitsSetInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), traitsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.traits_list) });
    }
    static fromBcs(data) { return TraitsSetInHiveKiosk.fromFields(TraitsSetInHiveKiosk.bcs.parse(data)); }
    toJSONField() {
        return {
            creatorProfile: this.creatorProfile, collectionName: this.collectionName, traitsList: (0, reified_1.fieldToJSON)(`vector<0x1::string::String>`, this.traitsList),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TraitsSetInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), traitsList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.traitsList) }); }
    static fromJSON(json) {
        if (json.$typeName !== TraitsSetInHiveKiosk.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TraitsSetInHiveKiosk.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTraitsSetInHiveKiosk(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TraitsSetInHiveKiosk object`);
    } return TraitsSetInHiveKiosk.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TraitsSetInHiveKiosk object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTraitsSetInHiveKiosk(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TraitsSetInHiveKiosk object`);
        }
        return TraitsSetInHiveKiosk.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TraitsSetInHiveKiosk = TraitsSetInHiveKiosk;
TraitsSetInHiveKiosk.$typeName = "0x0::hive_profile::TraitsSetInHiveKiosk";
TraitsSetInHiveKiosk.$numTypeParams = 0;
/* ============================== TwapUpdateCap =============================== */
function isTwapUpdateCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::TwapUpdateCap"; }
exports.isTwapUpdateCap = isTwapUpdateCap;
class TwapUpdateCap {
    constructor(typeArgs, fields) {
        this.$typeName = TwapUpdateCap.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TwapUpdateCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: TwapUpdateCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(TwapUpdateCap.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => TwapUpdateCap.fromFields(fields), fromFieldsWithTypes: (item) => TwapUpdateCap.fromFieldsWithTypes(item), fromBcs: (data) => TwapUpdateCap.fromBcs(data), bcs: TwapUpdateCap.bcs, fromJSONField: (field) => TwapUpdateCap.fromJSONField(field), fromJSON: (json) => TwapUpdateCap.fromJSON(json), fromSuiParsedData: (content) => TwapUpdateCap.fromSuiParsedData(content), fetch: async (client, id) => TwapUpdateCap.fetch(client, id), new: (fields) => { return new TwapUpdateCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TwapUpdateCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(TwapUpdateCap.reified()); }
    static get p() { return TwapUpdateCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TwapUpdateCap", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return TwapUpdateCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isTwapUpdateCap(item.type)) {
            throw new Error("not a TwapUpdateCap type");
        }
        return TwapUpdateCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return TwapUpdateCap.fromFields(TwapUpdateCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TwapUpdateCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== TwapUpdateCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TwapUpdateCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTwapUpdateCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TwapUpdateCap object`);
    } return TwapUpdateCap.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TwapUpdateCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTwapUpdateCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TwapUpdateCap object`);
        }
        return TwapUpdateCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TwapUpdateCap = TwapUpdateCap;
TwapUpdateCap.$typeName = "0x0::hive_profile::TwapUpdateCap";
TwapUpdateCap.$numTypeParams = 0;
/* ============================== UpdateEntropyForEpoch =============================== */
function isUpdateEntropyForEpoch(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::UpdateEntropyForEpoch"; }
exports.isUpdateEntropyForEpoch = isUpdateEntropyForEpoch;
class UpdateEntropyForEpoch {
    constructor(typeArgs, fields) {
        this.$typeName = UpdateEntropyForEpoch.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UpdateEntropyForEpoch.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.epoch = fields.epoch;
        ;
        this.maxEntropy = fields.maxEntropy;
        ;
        this.entropyUsedForCurEpoch = fields.entropyUsedForCurEpoch;
        ;
        this.remainingEntropy = fields.remainingEntropy;
        ;
        this.maxWithdrawableGems = fields.maxWithdrawableGems;
        ;
        this.availableGems = fields.availableGems;
    }
    static reified() { return { typeName: UpdateEntropyForEpoch.$typeName, fullTypeName: (0, util_1.composeSuiType)(UpdateEntropyForEpoch.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UpdateEntropyForEpoch.fromFields(fields), fromFieldsWithTypes: (item) => UpdateEntropyForEpoch.fromFieldsWithTypes(item), fromBcs: (data) => UpdateEntropyForEpoch.fromBcs(data), bcs: UpdateEntropyForEpoch.bcs, fromJSONField: (field) => UpdateEntropyForEpoch.fromJSONField(field), fromJSON: (json) => UpdateEntropyForEpoch.fromJSON(json), fromSuiParsedData: (content) => UpdateEntropyForEpoch.fromSuiParsedData(content), fetch: async (client, id) => UpdateEntropyForEpoch.fetch(client, id), new: (fields) => { return new UpdateEntropyForEpoch([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UpdateEntropyForEpoch.reified(); }
    static phantom() { return (0, reified_1.phantom)(UpdateEntropyForEpoch.reified()); }
    static get p() { return UpdateEntropyForEpoch.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UpdateEntropyForEpoch", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), epoch: bcs_1.bcs.u64(), max_entropy: bcs_1.bcs.u64(), entropy_used_for_cur_epoch: bcs_1.bcs.u64(), remaining_entropy: bcs_1.bcs.u64(), max_withdrawable_gems: bcs_1.bcs.u64(), available_gems: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UpdateEntropyForEpoch.reified().new({ username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), maxEntropy: (0, reified_1.decodeFromFields)("u64", fields.max_entropy), entropyUsedForCurEpoch: (0, reified_1.decodeFromFields)("u64", fields.entropy_used_for_cur_epoch), remainingEntropy: (0, reified_1.decodeFromFields)("u64", fields.remaining_entropy), maxWithdrawableGems: (0, reified_1.decodeFromFields)("u64", fields.max_withdrawable_gems), availableGems: (0, reified_1.decodeFromFields)("u64", fields.available_gems) }); }
    static fromFieldsWithTypes(item) {
        if (!isUpdateEntropyForEpoch(item.type)) {
            throw new Error("not a UpdateEntropyForEpoch type");
        }
        return UpdateEntropyForEpoch.reified().new({ username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), maxEntropy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_entropy), entropyUsedForCurEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.entropy_used_for_cur_epoch), remainingEntropy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.remaining_entropy), maxWithdrawableGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_withdrawable_gems), availableGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.available_gems) });
    }
    static fromBcs(data) { return UpdateEntropyForEpoch.fromFields(UpdateEntropyForEpoch.bcs.parse(data)); }
    toJSONField() {
        return {
            username: this.username, profileAddr: this.profileAddr, epoch: this.epoch.toString(), maxEntropy: this.maxEntropy.toString(), entropyUsedForCurEpoch: this.entropyUsedForCurEpoch.toString(), remainingEntropy: this.remainingEntropy.toString(), maxWithdrawableGems: this.maxWithdrawableGems.toString(), availableGems: this.availableGems.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UpdateEntropyForEpoch.reified().new({ username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), maxEntropy: (0, reified_1.decodeFromJSONField)("u64", field.maxEntropy), entropyUsedForCurEpoch: (0, reified_1.decodeFromJSONField)("u64", field.entropyUsedForCurEpoch), remainingEntropy: (0, reified_1.decodeFromJSONField)("u64", field.remainingEntropy), maxWithdrawableGems: (0, reified_1.decodeFromJSONField)("u64", field.maxWithdrawableGems), availableGems: (0, reified_1.decodeFromJSONField)("u64", field.availableGems) }); }
    static fromJSON(json) {
        if (json.$typeName !== UpdateEntropyForEpoch.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdateEntropyForEpoch.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdateEntropyForEpoch(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UpdateEntropyForEpoch object`);
    } return UpdateEntropyForEpoch.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UpdateEntropyForEpoch object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdateEntropyForEpoch(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateEntropyForEpoch object`);
        }
        return UpdateEntropyForEpoch.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UpdateEntropyForEpoch = UpdateEntropyForEpoch;
UpdateEntropyForEpoch.$typeName = "0x0::hive_profile::UpdateEntropyForEpoch";
UpdateEntropyForEpoch.$numTypeParams = 0;
/* ============================== UserNameUpdated =============================== */
function isUserNameUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x0::hive_profile::UserNameUpdated"; }
exports.isUserNameUpdated = isUserNameUpdated;
class UserNameUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = UserNameUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserNameUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.prevUsername = fields.prevUsername;
        ;
        this.newUsername = fields.newUsername;
    }
    static reified() { return { typeName: UserNameUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserNameUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UserNameUpdated.fromFields(fields), fromFieldsWithTypes: (item) => UserNameUpdated.fromFieldsWithTypes(item), fromBcs: (data) => UserNameUpdated.fromBcs(data), bcs: UserNameUpdated.bcs, fromJSONField: (field) => UserNameUpdated.fromJSONField(field), fromJSON: (json) => UserNameUpdated.fromJSON(json), fromSuiParsedData: (content) => UserNameUpdated.fromSuiParsedData(content), fetch: async (client, id) => UserNameUpdated.fetch(client, id), new: (fields) => { return new UserNameUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserNameUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserNameUpdated.reified()); }
    static get p() { return UserNameUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserNameUpdated", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), prev_username: structs_3.String.bcs, new_username: structs_3.String.bcs
        });
    }
    ;
    static fromFields(fields) { return UserNameUpdated.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), prevUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.prev_username), newUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.new_username) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserNameUpdated(item.type)) {
            throw new Error("not a UserNameUpdated type");
        }
        return UserNameUpdated.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), prevUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.prev_username), newUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.new_username) });
    }
    static fromBcs(data) { return UserNameUpdated.fromFields(UserNameUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, prevUsername: this.prevUsername, newUsername: this.newUsername,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserNameUpdated.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), prevUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.prevUsername), newUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.newUsername) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserNameUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserNameUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserNameUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserNameUpdated object`);
    } return UserNameUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserNameUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserNameUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserNameUpdated object`);
        }
        return UserNameUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserNameUpdated = UserNameUpdated;
UserNameUpdated.$typeName = "0x0::hive_profile::UserNameUpdated";
UserNameUpdated.$numTypeParams = 0;
