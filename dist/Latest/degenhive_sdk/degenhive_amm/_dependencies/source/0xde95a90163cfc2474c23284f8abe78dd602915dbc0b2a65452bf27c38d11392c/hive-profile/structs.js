"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveDisperser = exports.HiveAssetUpgradedViaApp = exports.HiveAssetUpgraded = exports.HiveAssetUnstaked = exports.HiveAssetTransfered = exports.HiveAssetStaked = exports.HiveAssetReturnedByApp = exports.HiveAssetPortedToApp = exports.HiveAssetDestroyed = exports.HiveAssetBorrowed = exports.HiveAsset = exports.HiveAppAccessCapability = exports.HiveAddedToTreasury = exports.HiveAddedForHarvest = exports.HiveAccessPlanUpdated = exports.HiveAccessPaymentProcessed = exports.HighestBidListingUnsold = exports.HarvestRewardsForAsset = exports.HIVE_PROFILE = exports.GemWithdrawnFromProfile = exports.GemAddedToProfile = exports.ExitHiveOfProfile = exports.ExecutedListingDestroyed = exports.ExecutedListing = exports.DepositHSuiForProfile = exports.DegenSuiAddedForHarvest = exports.DegenHiveYieldHarvested = exports.DSuiDisperser = exports.BorrowRecord = exports.BioUpdated = exports.BidRecord = exports.BidPlaced = exports.BidModified = exports.BidMarkedInvalid = exports.BidExpired = exports.BidDestroyed = exports.BidCanceled = exports.Bid = exports.AssetsInsertedInHiveKiosk = exports.AssetUpgrade = exports.AssetPowerUpdated = exports.AppSupportAddedForAsset = exports.AppInstalledByProfile = exports.AppAddedToHiveStore = exports.AddedNewUpgradeForVersion = exports.AccessTypeSwitchedToNewPlan = exports.AccessRecordDestroyed = exports.AccessRecord = exports.ConfigParams = exports.Listing = void 0;
exports.UserNameUpdated = exports.UpdateEntropyForEpoch = exports.TwapUpdateCap = exports.TraitsSetInHiveKiosk = exports.TotalActivePowerUpdated = exports.SubscriptionRoyalty = exports.SaleExecuted = exports.RoyaltyProcessed = exports.RoyaltyCollectedForCreator = exports.Royalty = exports.ReturnBorrowedHiveAsset = exports.RemovedUpgradeForVersion = exports.PublicKraftInitialized = exports.PublicKraftConfig = exports.ProfileConfigParamsUpdated = exports.PricingAndAccessSetInHiveKiosk = exports.NewListing = exports.NewHiveAssetKrafted = exports.MarketPlace = exports.ManagerAppAccessCapability = exports.ListingUpdated = exports.ListingRecord = exports.ListingExpired = exports.ListingDestroyed = exports.ListingCanceled = exports.LendRecord = exports.KraftYieldHarvested = exports.KraftRoyaltyUpdated = exports.KioskOwnershipTransferred = exports.KioskEarnings = exports.JoinedHiveOfProfile = exports.InscriptionSetForProfile = exports.Inscription = exports.HiveWithdrawnFromTreasury = exports.HiveTwapUpdated = exports.HiveTwapInfo = exports.HiveProfileMappingStore = exports.HiveProfileKrafted = exports.HiveProfileDestroyed = exports.HiveProfile = exports.HiveManager = exports.HiveKioskInitialized = exports.HiveKiosk = exports.HiveGemsWithdrawnAsset = exports.HiveGemsTransfered = exports.HiveGemsPortedToApp = exports.HiveGemsDepositedIntoAsset = void 0;
exports.isListing = isListing;
exports.isConfigParams = isConfigParams;
exports.isAccessRecord = isAccessRecord;
exports.isAccessRecordDestroyed = isAccessRecordDestroyed;
exports.isAccessTypeSwitchedToNewPlan = isAccessTypeSwitchedToNewPlan;
exports.isAddedNewUpgradeForVersion = isAddedNewUpgradeForVersion;
exports.isAppAddedToHiveStore = isAppAddedToHiveStore;
exports.isAppInstalledByProfile = isAppInstalledByProfile;
exports.isAppSupportAddedForAsset = isAppSupportAddedForAsset;
exports.isAssetPowerUpdated = isAssetPowerUpdated;
exports.isAssetUpgrade = isAssetUpgrade;
exports.isAssetsInsertedInHiveKiosk = isAssetsInsertedInHiveKiosk;
exports.isBid = isBid;
exports.isBidCanceled = isBidCanceled;
exports.isBidDestroyed = isBidDestroyed;
exports.isBidExpired = isBidExpired;
exports.isBidMarkedInvalid = isBidMarkedInvalid;
exports.isBidModified = isBidModified;
exports.isBidPlaced = isBidPlaced;
exports.isBidRecord = isBidRecord;
exports.isBioUpdated = isBioUpdated;
exports.isBorrowRecord = isBorrowRecord;
exports.isDSuiDisperser = isDSuiDisperser;
exports.isDegenHiveYieldHarvested = isDegenHiveYieldHarvested;
exports.isDegenSuiAddedForHarvest = isDegenSuiAddedForHarvest;
exports.isDepositHSuiForProfile = isDepositHSuiForProfile;
exports.isExecutedListing = isExecutedListing;
exports.isExecutedListingDestroyed = isExecutedListingDestroyed;
exports.isExitHiveOfProfile = isExitHiveOfProfile;
exports.isGemAddedToProfile = isGemAddedToProfile;
exports.isGemWithdrawnFromProfile = isGemWithdrawnFromProfile;
exports.isHIVE_PROFILE = isHIVE_PROFILE;
exports.isHarvestRewardsForAsset = isHarvestRewardsForAsset;
exports.isHighestBidListingUnsold = isHighestBidListingUnsold;
exports.isHiveAccessPaymentProcessed = isHiveAccessPaymentProcessed;
exports.isHiveAccessPlanUpdated = isHiveAccessPlanUpdated;
exports.isHiveAddedForHarvest = isHiveAddedForHarvest;
exports.isHiveAddedToTreasury = isHiveAddedToTreasury;
exports.isHiveAppAccessCapability = isHiveAppAccessCapability;
exports.isHiveAsset = isHiveAsset;
exports.isHiveAssetBorrowed = isHiveAssetBorrowed;
exports.isHiveAssetDestroyed = isHiveAssetDestroyed;
exports.isHiveAssetPortedToApp = isHiveAssetPortedToApp;
exports.isHiveAssetReturnedByApp = isHiveAssetReturnedByApp;
exports.isHiveAssetStaked = isHiveAssetStaked;
exports.isHiveAssetTransfered = isHiveAssetTransfered;
exports.isHiveAssetUnstaked = isHiveAssetUnstaked;
exports.isHiveAssetUpgraded = isHiveAssetUpgraded;
exports.isHiveAssetUpgradedViaApp = isHiveAssetUpgradedViaApp;
exports.isHiveDisperser = isHiveDisperser;
exports.isHiveGemsDepositedIntoAsset = isHiveGemsDepositedIntoAsset;
exports.isHiveGemsPortedToApp = isHiveGemsPortedToApp;
exports.isHiveGemsTransfered = isHiveGemsTransfered;
exports.isHiveGemsWithdrawnAsset = isHiveGemsWithdrawnAsset;
exports.isHiveKiosk = isHiveKiosk;
exports.isHiveKioskInitialized = isHiveKioskInitialized;
exports.isHiveManager = isHiveManager;
exports.isHiveProfile = isHiveProfile;
exports.isHiveProfileDestroyed = isHiveProfileDestroyed;
exports.isHiveProfileKrafted = isHiveProfileKrafted;
exports.isHiveProfileMappingStore = isHiveProfileMappingStore;
exports.isHiveTwapInfo = isHiveTwapInfo;
exports.isHiveTwapUpdated = isHiveTwapUpdated;
exports.isHiveWithdrawnFromTreasury = isHiveWithdrawnFromTreasury;
exports.isInscription = isInscription;
exports.isInscriptionSetForProfile = isInscriptionSetForProfile;
exports.isJoinedHiveOfProfile = isJoinedHiveOfProfile;
exports.isKioskEarnings = isKioskEarnings;
exports.isKioskOwnershipTransferred = isKioskOwnershipTransferred;
exports.isKraftRoyaltyUpdated = isKraftRoyaltyUpdated;
exports.isKraftYieldHarvested = isKraftYieldHarvested;
exports.isLendRecord = isLendRecord;
exports.isListingCanceled = isListingCanceled;
exports.isListingDestroyed = isListingDestroyed;
exports.isListingExpired = isListingExpired;
exports.isListingRecord = isListingRecord;
exports.isListingUpdated = isListingUpdated;
exports.isManagerAppAccessCapability = isManagerAppAccessCapability;
exports.isMarketPlace = isMarketPlace;
exports.isNewHiveAssetKrafted = isNewHiveAssetKrafted;
exports.isNewListing = isNewListing;
exports.isPricingAndAccessSetInHiveKiosk = isPricingAndAccessSetInHiveKiosk;
exports.isProfileConfigParamsUpdated = isProfileConfigParamsUpdated;
exports.isPublicKraftConfig = isPublicKraftConfig;
exports.isPublicKraftInitialized = isPublicKraftInitialized;
exports.isRemovedUpgradeForVersion = isRemovedUpgradeForVersion;
exports.isReturnBorrowedHiveAsset = isReturnBorrowedHiveAsset;
exports.isRoyalty = isRoyalty;
exports.isRoyaltyCollectedForCreator = isRoyaltyCollectedForCreator;
exports.isRoyaltyProcessed = isRoyaltyProcessed;
exports.isSaleExecuted = isSaleExecuted;
exports.isSubscriptionRoyalty = isSubscriptionRoyalty;
exports.isTotalActivePowerUpdated = isTotalActivePowerUpdated;
exports.isTraitsSetInHiveKiosk = isTraitsSetInHiveKiosk;
exports.isTwapUpdateCap = isTwapUpdateCap;
exports.isUpdateEntropyForEpoch = isUpdateEntropyForEpoch;
exports.isUserNameUpdated = isUserNameUpdated;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/ascii/structs");
const structs_2 = require("../../0x1/option/structs");
const structs_3 = require("../../0x1/string/structs");
const structs_4 = require("../../0x2/balance/structs");
const structs_5 = require("../../0x2/linked-table/structs");
const structs_6 = require("../../0x2/object/structs");
const structs_7 = require("../../0x2/table/structs");
const structs_8 = require("../../0x2/url/structs");
const structs_9 = require("../../0x784e390ba69b497f2c8c6df0ca1e19009be2a51050d7d982986babeff019f15c/dsui/structs");
const structs_10 = require("../../0x784e390ba69b497f2c8c6df0ca1e19009be2a51050d7d982986babeff019f15c/hive-gems/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== Listing =============================== */
function isListing(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::Listing`; }
class Listing {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Listing.$typeName;
        this.$isPhantom = Listing.$isPhantom;
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
        this.minDsuiPrice = fields.minDsuiPrice;
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
    static reified() { return { typeName: Listing.$typeName, fullTypeName: (0, util_1.composeSuiType)(Listing.$typeName, ...[]), typeArgs: [], isPhantom: Listing.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Listing.fromFields(fields), fromFieldsWithTypes: (item) => Listing.fromFieldsWithTypes(item), fromBcs: (data) => Listing.fromBcs(data), bcs: Listing.bcs, fromJSONField: (field) => Listing.fromJSONField(field), fromJSON: (json) => Listing.fromJSON(json), fromSuiParsedData: (content) => Listing.fromSuiParsedData(content), fetch: async (client, id) => Listing.fetch(client, id), new: (fields) => { return new Listing([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Listing.reified(); }
    static phantom() { return (0, reified_1.phantom)(Listing.reified()); }
    static get p() { return Listing.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Listing", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), hive_asset: HiveAsset.bcs, listing_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64(), min_dsui_price: bcs_1.bcs.u64(), is_sale_listing: bcs_1.bcs.bool(), instant_sale: bcs_1.bcs.bool(), highest_bid_sale: bcs_1.bcs.bool(), lockup_duration: bcs_1.bcs.u8(), start_sec: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Listing.reified().new({ listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile), hiveAsset: (0, reified_1.decodeFromFields)(HiveAsset.reified(), fields.hive_asset), listingAccess: (0, reified_1.decodeFromFields)("u8", fields.listing_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount), minDsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.min_dsui_price), isSaleListing: (0, reified_1.decodeFromFields)("bool", fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFields)("bool", fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFields)("bool", fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isListing(item.type)) {
            throw new Error("not a Listing type");
        }
        return Listing.reified().new({ listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile), hiveAsset: (0, reified_1.decodeFromFieldsWithTypes)(HiveAsset.reified(), item.fields.hive_asset), listingAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.listing_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount), minDsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_dsui_price), isSaleListing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return Listing.fromFields(Listing.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByProfile: this.listedByProfile, hiveAsset: this.hiveAsset.toJSONField(), listingAccess: this.listingAccess, discountAccess: this.discountAccess, discount: this.discount.toString(), minDsuiPrice: this.minDsuiPrice.toString(), isSaleListing: this.isSaleListing, instantSale: this.instantSale, highestBidSale: this.highestBidSale, lockupDuration: this.lockupDuration, startSec: this.startSec.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Listing.reified().new({ listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile), hiveAsset: (0, reified_1.decodeFromJSONField)(HiveAsset.reified(), field.hiveAsset), listingAccess: (0, reified_1.decodeFromJSONField)("u8", field.listingAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount), minDsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.minDsuiPrice), isSaleListing: (0, reified_1.decodeFromJSONField)("bool", field.isSaleListing), instantSale: (0, reified_1.decodeFromJSONField)("bool", field.instantSale), highestBidSale: (0, reified_1.decodeFromJSONField)("bool", field.highestBidSale), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
        return Listing.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Listing = Listing;
Listing.$typeName = `${index_1.PKG_V1}::hive_profile::Listing`;
Listing.$numTypeParams = 0;
Listing.$isPhantom = [];
/* ============================== ConfigParams =============================== */
function isConfigParams(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ConfigParams`; }
class ConfigParams {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ConfigParams.$typeName;
        this.$isPhantom = ConfigParams.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ConfigParams.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.maxBidsPerAsset = fields.maxBidsPerAsset;
        ;
        this.minDsuiBidAllowed = fields.minDsuiBidAllowed;
        ;
        this.profileKraftFeesSui = fields.profileKraftFeesSui;
        ;
        this.socialFeeGems = fields.socialFeeGems;
        ;
        this.socialMultiplierForGems = fields.socialMultiplierForGems;
        ;
        this.socialMultiplierForPower = fields.socialMultiplierForPower;
    }
    static reified() { return { typeName: ConfigParams.$typeName, fullTypeName: (0, util_1.composeSuiType)(ConfigParams.$typeName, ...[]), typeArgs: [], isPhantom: ConfigParams.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ConfigParams.fromFields(fields), fromFieldsWithTypes: (item) => ConfigParams.fromFieldsWithTypes(item), fromBcs: (data) => ConfigParams.fromBcs(data), bcs: ConfigParams.bcs, fromJSONField: (field) => ConfigParams.fromJSONField(field), fromJSON: (json) => ConfigParams.fromJSON(json), fromSuiParsedData: (content) => ConfigParams.fromSuiParsedData(content), fetch: async (client, id) => ConfigParams.fetch(client, id), new: (fields) => { return new ConfigParams([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ConfigParams.reified(); }
    static phantom() { return (0, reified_1.phantom)(ConfigParams.reified()); }
    static get p() { return ConfigParams.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ConfigParams", {
            max_bids_per_asset: bcs_1.bcs.u64(), min_dsui_bid_allowed: bcs_1.bcs.u64(), profile_kraft_fees_sui: bcs_1.bcs.u64(), social_fee_gems: bcs_1.bcs.u64(), social_multiplier_for_gems: bcs_1.bcs.u64(), social_multiplier_for_power: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ConfigParams.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromFields)("u64", fields.max_bids_per_asset), minDsuiBidAllowed: (0, reified_1.decodeFromFields)("u64", fields.min_dsui_bid_allowed), profileKraftFeesSui: (0, reified_1.decodeFromFields)("u64", fields.profile_kraft_fees_sui), socialFeeGems: (0, reified_1.decodeFromFields)("u64", fields.social_fee_gems), socialMultiplierForGems: (0, reified_1.decodeFromFields)("u64", fields.social_multiplier_for_gems), socialMultiplierForPower: (0, reified_1.decodeFromFields)("u64", fields.social_multiplier_for_power) }); }
    static fromFieldsWithTypes(item) {
        if (!isConfigParams(item.type)) {
            throw new Error("not a ConfigParams type");
        }
        return ConfigParams.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_bids_per_asset), minDsuiBidAllowed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_dsui_bid_allowed), profileKraftFeesSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.profile_kraft_fees_sui), socialFeeGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_fee_gems), socialMultiplierForGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_multiplier_for_gems), socialMultiplierForPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_multiplier_for_power) });
    }
    static fromBcs(data) { return ConfigParams.fromFields(ConfigParams.bcs.parse(data)); }
    toJSONField() {
        return {
            maxBidsPerAsset: this.maxBidsPerAsset.toString(), minDsuiBidAllowed: this.minDsuiBidAllowed.toString(), profileKraftFeesSui: this.profileKraftFeesSui.toString(), socialFeeGems: this.socialFeeGems.toString(), socialMultiplierForGems: this.socialMultiplierForGems.toString(), socialMultiplierForPower: this.socialMultiplierForPower.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ConfigParams.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromJSONField)("u64", field.maxBidsPerAsset), minDsuiBidAllowed: (0, reified_1.decodeFromJSONField)("u64", field.minDsuiBidAllowed), profileKraftFeesSui: (0, reified_1.decodeFromJSONField)("u64", field.profileKraftFeesSui), socialFeeGems: (0, reified_1.decodeFromJSONField)("u64", field.socialFeeGems), socialMultiplierForGems: (0, reified_1.decodeFromJSONField)("u64", field.socialMultiplierForGems), socialMultiplierForPower: (0, reified_1.decodeFromJSONField)("u64", field.socialMultiplierForPower) }); }
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
        return ConfigParams.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ConfigParams = ConfigParams;
ConfigParams.$typeName = `${index_1.PKG_V1}::hive_profile::ConfigParams`;
ConfigParams.$numTypeParams = 0;
ConfigParams.$isPhantom = [];
/* ============================== AccessRecord =============================== */
function isAccessRecord(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::AccessRecord`; }
class AccessRecord {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AccessRecord.$typeName;
        this.$isPhantom = AccessRecord.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AccessRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.subscriber = fields.subscriber;
        ;
        this.subscribedTo = fields.subscribedTo;
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
    static reified() { return { typeName: AccessRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(AccessRecord.$typeName, ...[]), typeArgs: [], isPhantom: AccessRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AccessRecord.fromFields(fields), fromFieldsWithTypes: (item) => AccessRecord.fromFieldsWithTypes(item), fromBcs: (data) => AccessRecord.fromBcs(data), bcs: AccessRecord.bcs, fromJSONField: (field) => AccessRecord.fromJSONField(field), fromJSON: (json) => AccessRecord.fromJSON(json), fromSuiParsedData: (content) => AccessRecord.fromSuiParsedData(content), fetch: async (client, id) => AccessRecord.fetch(client, id), new: (fields) => { return new AccessRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AccessRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(AccessRecord.reified()); }
    static get p() { return AccessRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AccessRecord", {
            subscriber: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), subscribed_to: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), init_timestamp: bcs_1.bcs.u64(), access_type: bcs_1.bcs.u8(), access_cost: bcs_1.bcs.u64(), next_payment_timestamp: bcs_1.bcs.u64(), total_paid: bcs_1.bcs.u64(), to_unsubscribe: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return AccessRecord.reified().new({ subscriber: (0, reified_1.decodeFromFields)("address", fields.subscriber), subscribedTo: (0, reified_1.decodeFromFields)("address", fields.subscribed_to), initTimestamp: (0, reified_1.decodeFromFields)("u64", fields.init_timestamp), accessType: (0, reified_1.decodeFromFields)("u8", fields.access_type), accessCost: (0, reified_1.decodeFromFields)("u64", fields.access_cost), nextPaymentTimestamp: (0, reified_1.decodeFromFields)("u64", fields.next_payment_timestamp), totalPaid: (0, reified_1.decodeFromFields)("u64", fields.total_paid), toUnsubscribe: (0, reified_1.decodeFromFields)("bool", fields.to_unsubscribe) }); }
    static fromFieldsWithTypes(item) {
        if (!isAccessRecord(item.type)) {
            throw new Error("not a AccessRecord type");
        }
        return AccessRecord.reified().new({ subscriber: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscriber), subscribedTo: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscribed_to), initTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_timestamp), accessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.access_type), accessCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.access_cost), nextPaymentTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_payment_timestamp), totalPaid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_paid), toUnsubscribe: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.to_unsubscribe) });
    }
    static fromBcs(data) { return AccessRecord.fromFields(AccessRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            subscriber: this.subscriber, subscribedTo: this.subscribedTo, initTimestamp: this.initTimestamp.toString(), accessType: this.accessType, accessCost: this.accessCost.toString(), nextPaymentTimestamp: this.nextPaymentTimestamp.toString(), totalPaid: this.totalPaid.toString(), toUnsubscribe: this.toUnsubscribe,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AccessRecord.reified().new({ subscriber: (0, reified_1.decodeFromJSONField)("address", field.subscriber), subscribedTo: (0, reified_1.decodeFromJSONField)("address", field.subscribedTo), initTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.initTimestamp), accessType: (0, reified_1.decodeFromJSONField)("u8", field.accessType), accessCost: (0, reified_1.decodeFromJSONField)("u64", field.accessCost), nextPaymentTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.nextPaymentTimestamp), totalPaid: (0, reified_1.decodeFromJSONField)("u64", field.totalPaid), toUnsubscribe: (0, reified_1.decodeFromJSONField)("bool", field.toUnsubscribe) }); }
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
        return AccessRecord.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AccessRecord = AccessRecord;
AccessRecord.$typeName = `${index_1.PKG_V1}::hive_profile::AccessRecord`;
AccessRecord.$numTypeParams = 0;
AccessRecord.$isPhantom = [];
/* ============================== AccessRecordDestroyed =============================== */
function isAccessRecordDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::AccessRecordDestroyed`; }
class AccessRecordDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AccessRecordDestroyed.$typeName;
        this.$isPhantom = AccessRecordDestroyed.$isPhantom;
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
    static reified() { return { typeName: AccessRecordDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(AccessRecordDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: AccessRecordDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AccessRecordDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => AccessRecordDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => AccessRecordDestroyed.fromBcs(data), bcs: AccessRecordDestroyed.bcs, fromJSONField: (field) => AccessRecordDestroyed.fromJSONField(field), fromJSON: (json) => AccessRecordDestroyed.fromJSON(json), fromSuiParsedData: (content) => AccessRecordDestroyed.fromSuiParsedData(content), fetch: async (client, id) => AccessRecordDestroyed.fetch(client, id), new: (fields) => { return new AccessRecordDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AccessRecordDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(AccessRecordDestroyed.reified()); }
    static get p() { return AccessRecordDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AccessRecordDestroyed", {
            subscriber_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), subscribed_to_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), init_timestamp: bcs_1.bcs.u64(), total_paid: bcs_1.bcs.u64()
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
        return AccessRecordDestroyed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AccessRecordDestroyed = AccessRecordDestroyed;
AccessRecordDestroyed.$typeName = `${index_1.PKG_V1}::hive_profile::AccessRecordDestroyed`;
AccessRecordDestroyed.$numTypeParams = 0;
AccessRecordDestroyed.$isPhantom = [];
/* ============================== AccessTypeSwitchedToNewPlan =============================== */
function isAccessTypeSwitchedToNewPlan(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::AccessTypeSwitchedToNewPlan`; }
class AccessTypeSwitchedToNewPlan {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AccessTypeSwitchedToNewPlan.$typeName;
        this.$isPhantom = AccessTypeSwitchedToNewPlan.$isPhantom;
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
        ;
        this.nextPaymentTimestamp = fields.nextPaymentTimestamp;
    }
    static reified() { return { typeName: AccessTypeSwitchedToNewPlan.$typeName, fullTypeName: (0, util_1.composeSuiType)(AccessTypeSwitchedToNewPlan.$typeName, ...[]), typeArgs: [], isPhantom: AccessTypeSwitchedToNewPlan.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AccessTypeSwitchedToNewPlan.fromFields(fields), fromFieldsWithTypes: (item) => AccessTypeSwitchedToNewPlan.fromFieldsWithTypes(item), fromBcs: (data) => AccessTypeSwitchedToNewPlan.fromBcs(data), bcs: AccessTypeSwitchedToNewPlan.bcs, fromJSONField: (field) => AccessTypeSwitchedToNewPlan.fromJSONField(field), fromJSON: (json) => AccessTypeSwitchedToNewPlan.fromJSON(json), fromSuiParsedData: (content) => AccessTypeSwitchedToNewPlan.fromSuiParsedData(content), fetch: async (client, id) => AccessTypeSwitchedToNewPlan.fetch(client, id), new: (fields) => { return new AccessTypeSwitchedToNewPlan([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AccessTypeSwitchedToNewPlan.reified(); }
    static phantom() { return (0, reified_1.phantom)(AccessTypeSwitchedToNewPlan.reified()); }
    static get p() { return AccessTypeSwitchedToNewPlan.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AccessTypeSwitchedToNewPlan", {
            subscriber_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), hive_owner_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), subscriber_username: structs_3.String.bcs, hive_owner_username: structs_3.String.bcs, new_access_type: bcs_1.bcs.u8(), new_access_cost: bcs_1.bcs.u64(), subscription_price_to_pay: bcs_1.bcs.u64(), hive_paid_for_switch: bcs_1.bcs.u64(), next_payment_timestamp: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return AccessTypeSwitchedToNewPlan.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFields)("address", fields.subscriber_profile_addr), hiveOwnerProfile: (0, reified_1.decodeFromFields)("address", fields.hive_owner_profile), subscriberUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.subscriber_username), hiveOwnerUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.hive_owner_username), newAccessType: (0, reified_1.decodeFromFields)("u8", fields.new_access_type), newAccessCost: (0, reified_1.decodeFromFields)("u64", fields.new_access_cost), subscriptionPriceToPay: (0, reified_1.decodeFromFields)("u64", fields.subscription_price_to_pay), hivePaidForSwitch: (0, reified_1.decodeFromFields)("u64", fields.hive_paid_for_switch), nextPaymentTimestamp: (0, reified_1.decodeFromFields)("u64", fields.next_payment_timestamp) }); }
    static fromFieldsWithTypes(item) {
        if (!isAccessTypeSwitchedToNewPlan(item.type)) {
            throw new Error("not a AccessTypeSwitchedToNewPlan type");
        }
        return AccessTypeSwitchedToNewPlan.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscriber_profile_addr), hiveOwnerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.hive_owner_profile), subscriberUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.subscriber_username), hiveOwnerUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.hive_owner_username), newAccessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.new_access_type), newAccessCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_access_cost), subscriptionPriceToPay: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.subscription_price_to_pay), hivePaidForSwitch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_paid_for_switch), nextPaymentTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_payment_timestamp) });
    }
    static fromBcs(data) { return AccessTypeSwitchedToNewPlan.fromFields(AccessTypeSwitchedToNewPlan.bcs.parse(data)); }
    toJSONField() {
        return {
            subscriberProfileAddr: this.subscriberProfileAddr, hiveOwnerProfile: this.hiveOwnerProfile, subscriberUsername: this.subscriberUsername, hiveOwnerUsername: this.hiveOwnerUsername, newAccessType: this.newAccessType, newAccessCost: this.newAccessCost.toString(), subscriptionPriceToPay: this.subscriptionPriceToPay.toString(), hivePaidForSwitch: this.hivePaidForSwitch.toString(), nextPaymentTimestamp: this.nextPaymentTimestamp.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AccessTypeSwitchedToNewPlan.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.subscriberProfileAddr), hiveOwnerProfile: (0, reified_1.decodeFromJSONField)("address", field.hiveOwnerProfile), subscriberUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.subscriberUsername), hiveOwnerUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.hiveOwnerUsername), newAccessType: (0, reified_1.decodeFromJSONField)("u8", field.newAccessType), newAccessCost: (0, reified_1.decodeFromJSONField)("u64", field.newAccessCost), subscriptionPriceToPay: (0, reified_1.decodeFromJSONField)("u64", field.subscriptionPriceToPay), hivePaidForSwitch: (0, reified_1.decodeFromJSONField)("u64", field.hivePaidForSwitch), nextPaymentTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.nextPaymentTimestamp) }); }
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
        return AccessTypeSwitchedToNewPlan.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AccessTypeSwitchedToNewPlan = AccessTypeSwitchedToNewPlan;
AccessTypeSwitchedToNewPlan.$typeName = `${index_1.PKG_V1}::hive_profile::AccessTypeSwitchedToNewPlan`;
AccessTypeSwitchedToNewPlan.$numTypeParams = 0;
AccessTypeSwitchedToNewPlan.$isPhantom = [];
/* ============================== AddedNewUpgradeForVersion =============================== */
function isAddedNewUpgradeForVersion(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::AddedNewUpgradeForVersion`; }
class AddedNewUpgradeForVersion {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AddedNewUpgradeForVersion.$typeName;
        this.$isPhantom = AddedNewUpgradeForVersion.$isPhantom;
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
    static reified() { return { typeName: AddedNewUpgradeForVersion.$typeName, fullTypeName: (0, util_1.composeSuiType)(AddedNewUpgradeForVersion.$typeName, ...[]), typeArgs: [], isPhantom: AddedNewUpgradeForVersion.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AddedNewUpgradeForVersion.fromFields(fields), fromFieldsWithTypes: (item) => AddedNewUpgradeForVersion.fromFieldsWithTypes(item), fromBcs: (data) => AddedNewUpgradeForVersion.fromBcs(data), bcs: AddedNewUpgradeForVersion.bcs, fromJSONField: (field) => AddedNewUpgradeForVersion.fromJSONField(field), fromJSON: (json) => AddedNewUpgradeForVersion.fromJSON(json), fromSuiParsedData: (content) => AddedNewUpgradeForVersion.fromSuiParsedData(content), fetch: async (client, id) => AddedNewUpgradeForVersion.fetch(client, id), new: (fields) => { return new AddedNewUpgradeForVersion([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AddedNewUpgradeForVersion.reified(); }
    static phantom() { return (0, reified_1.phantom)(AddedNewUpgradeForVersion.reified()); }
    static get p() { return AddedNewUpgradeForVersion.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AddedNewUpgradeForVersion", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), collection_name: structs_3.String.bcs, version: bcs_1.bcs.u64(), new_img_url: structs_3.String.bcs, upgrade_traits_list: bcs_1.bcs.vector(structs_3.String.bcs), upgrade_prompts_list: bcs_1.bcs.vector(structs_3.String.bcs), upgrade_access: bcs_1.bcs.u8(), upgrade_price: bcs_1.bcs.u64()
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
            profileAddr: this.profileAddr, collectionName: this.collectionName, version: this.version.toString(), newImgUrl: this.newImgUrl, upgradeTraitsList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.upgradeTraitsList), upgradePromptsList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.upgradePromptsList), upgradeAccess: this.upgradeAccess, upgradePrice: this.upgradePrice.toString(),
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
        return AddedNewUpgradeForVersion.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AddedNewUpgradeForVersion = AddedNewUpgradeForVersion;
AddedNewUpgradeForVersion.$typeName = `${index_1.PKG_V1}::hive_profile::AddedNewUpgradeForVersion`;
AddedNewUpgradeForVersion.$numTypeParams = 0;
AddedNewUpgradeForVersion.$isPhantom = [];
/* ============================== AppAddedToHiveStore =============================== */
function isAppAddedToHiveStore(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::AppAddedToHiveStore`; }
class AppAddedToHiveStore {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AppAddedToHiveStore.$typeName;
        this.$isPhantom = AppAddedToHiveStore.$isPhantom;
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
    static reified() { return { typeName: AppAddedToHiveStore.$typeName, fullTypeName: (0, util_1.composeSuiType)(AppAddedToHiveStore.$typeName, ...[]), typeArgs: [], isPhantom: AppAddedToHiveStore.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AppAddedToHiveStore.fromFields(fields), fromFieldsWithTypes: (item) => AppAddedToHiveStore.fromFieldsWithTypes(item), fromBcs: (data) => AppAddedToHiveStore.fromBcs(data), bcs: AppAddedToHiveStore.bcs, fromJSONField: (field) => AppAddedToHiveStore.fromJSONField(field), fromJSON: (json) => AppAddedToHiveStore.fromJSON(json), fromSuiParsedData: (content) => AppAddedToHiveStore.fromSuiParsedData(content), fetch: async (client, id) => AppAddedToHiveStore.fetch(client, id), new: (fields) => { return new AppAddedToHiveStore([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AppAddedToHiveStore.reified(); }
    static phantom() { return (0, reified_1.phantom)(AppAddedToHiveStore.reified()); }
    static get p() { return AppAddedToHiveStore.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AppAddedToHiveStore", {
            capability_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), app_name: structs_1.String.bcs, only_owner_can_add_app: bcs_1.bcs.bool(), only_owner_can_access_app: bcs_1.bcs.bool(), only_owner_can_remove_app: bcs_1.bcs.bool()
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
        return AppAddedToHiveStore.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AppAddedToHiveStore = AppAddedToHiveStore;
AppAddedToHiveStore.$typeName = `${index_1.PKG_V1}::hive_profile::AppAddedToHiveStore`;
AppAddedToHiveStore.$numTypeParams = 0;
AppAddedToHiveStore.$isPhantom = [];
/* ============================== AppInstalledByProfile =============================== */
function isAppInstalledByProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::AppInstalledByProfile`; }
class AppInstalledByProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AppInstalledByProfile.$typeName;
        this.$isPhantom = AppInstalledByProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AppInstalledByProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.appName = fields.appName;
    }
    static reified() { return { typeName: AppInstalledByProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(AppInstalledByProfile.$typeName, ...[]), typeArgs: [], isPhantom: AppInstalledByProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AppInstalledByProfile.fromFields(fields), fromFieldsWithTypes: (item) => AppInstalledByProfile.fromFieldsWithTypes(item), fromBcs: (data) => AppInstalledByProfile.fromBcs(data), bcs: AppInstalledByProfile.bcs, fromJSONField: (field) => AppInstalledByProfile.fromJSONField(field), fromJSON: (json) => AppInstalledByProfile.fromJSON(json), fromSuiParsedData: (content) => AppInstalledByProfile.fromSuiParsedData(content), fetch: async (client, id) => AppInstalledByProfile.fetch(client, id), new: (fields) => { return new AppInstalledByProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AppInstalledByProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(AppInstalledByProfile.reified()); }
    static get p() { return AppInstalledByProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AppInstalledByProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_1.String.bcs, app_name: structs_1.String.bcs
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
        return AppInstalledByProfile.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AppInstalledByProfile = AppInstalledByProfile;
AppInstalledByProfile.$typeName = `${index_1.PKG_V1}::hive_profile::AppInstalledByProfile`;
AppInstalledByProfile.$numTypeParams = 0;
AppInstalledByProfile.$isPhantom = [];
/* ============================== AppSupportAddedForAsset =============================== */
function isAppSupportAddedForAsset(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::AppSupportAddedForAsset`; }
class AppSupportAddedForAsset {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AppSupportAddedForAsset.$typeName;
        this.$isPhantom = AppSupportAddedForAsset.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AppSupportAddedForAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.version = fields.version;
        ;
        this.appName = fields.appName;
    }
    static reified() { return { typeName: AppSupportAddedForAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(AppSupportAddedForAsset.$typeName, ...[]), typeArgs: [], isPhantom: AppSupportAddedForAsset.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AppSupportAddedForAsset.fromFields(fields), fromFieldsWithTypes: (item) => AppSupportAddedForAsset.fromFieldsWithTypes(item), fromBcs: (data) => AppSupportAddedForAsset.fromBcs(data), bcs: AppSupportAddedForAsset.bcs, fromJSONField: (field) => AppSupportAddedForAsset.fromJSONField(field), fromJSON: (json) => AppSupportAddedForAsset.fromJSON(json), fromSuiParsedData: (content) => AppSupportAddedForAsset.fromSuiParsedData(content), fetch: async (client, id) => AppSupportAddedForAsset.fetch(client, id), new: (fields) => { return new AppSupportAddedForAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AppSupportAddedForAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(AppSupportAddedForAsset.reified()); }
    static get p() { return AppSupportAddedForAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AppSupportAddedForAsset", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), version: bcs_1.bcs.u64(), app_name: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return AppSupportAddedForAsset.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), version: (0, reified_1.decodeFromFields)("u64", fields.version), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isAppSupportAddedForAsset(item.type)) {
            throw new Error("not a AppSupportAddedForAsset type");
        }
        return AppSupportAddedForAsset.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name) });
    }
    static fromBcs(data) { return AppSupportAddedForAsset.fromFields(AppSupportAddedForAsset.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, version: this.version.toString(), appName: this.appName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AppSupportAddedForAsset.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), version: (0, reified_1.decodeFromJSONField)("u64", field.version), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName) }); }
    static fromJSON(json) {
        if (json.$typeName !== AppSupportAddedForAsset.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AppSupportAddedForAsset.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAppSupportAddedForAsset(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AppSupportAddedForAsset object`);
    } return AppSupportAddedForAsset.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AppSupportAddedForAsset object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAppSupportAddedForAsset(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AppSupportAddedForAsset object`);
        }
        return AppSupportAddedForAsset.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AppSupportAddedForAsset = AppSupportAddedForAsset;
AppSupportAddedForAsset.$typeName = `${index_1.PKG_V1}::hive_profile::AppSupportAddedForAsset`;
AppSupportAddedForAsset.$numTypeParams = 0;
AppSupportAddedForAsset.$isPhantom = [];
/* ============================== AssetPowerUpdated =============================== */
function isAssetPowerUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::AssetPowerUpdated`; }
class AssetPowerUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AssetPowerUpdated.$typeName;
        this.$isPhantom = AssetPowerUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AssetPowerUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.addPower = fields.addPower;
        ;
        this.newAssetPower = fields.newAssetPower;
    }
    static reified() { return { typeName: AssetPowerUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(AssetPowerUpdated.$typeName, ...[]), typeArgs: [], isPhantom: AssetPowerUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AssetPowerUpdated.fromFields(fields), fromFieldsWithTypes: (item) => AssetPowerUpdated.fromFieldsWithTypes(item), fromBcs: (data) => AssetPowerUpdated.fromBcs(data), bcs: AssetPowerUpdated.bcs, fromJSONField: (field) => AssetPowerUpdated.fromJSONField(field), fromJSON: (json) => AssetPowerUpdated.fromJSON(json), fromSuiParsedData: (content) => AssetPowerUpdated.fromSuiParsedData(content), fetch: async (client, id) => AssetPowerUpdated.fetch(client, id), new: (fields) => { return new AssetPowerUpdated([], fields); }, kind: "StructClassReified", }; }
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
        return AssetPowerUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AssetPowerUpdated = AssetPowerUpdated;
AssetPowerUpdated.$typeName = `${index_1.PKG_V1}::hive_profile::AssetPowerUpdated`;
AssetPowerUpdated.$numTypeParams = 0;
AssetPowerUpdated.$isPhantom = [];
/* ============================== AssetUpgrade =============================== */
function isAssetUpgrade(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::AssetUpgrade`; }
class AssetUpgrade {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AssetUpgrade.$typeName;
        this.$isPhantom = AssetUpgrade.$isPhantom;
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
    static reified() { return { typeName: AssetUpgrade.$typeName, fullTypeName: (0, util_1.composeSuiType)(AssetUpgrade.$typeName, ...[]), typeArgs: [], isPhantom: AssetUpgrade.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AssetUpgrade.fromFields(fields), fromFieldsWithTypes: (item) => AssetUpgrade.fromFieldsWithTypes(item), fromBcs: (data) => AssetUpgrade.fromBcs(data), bcs: AssetUpgrade.bcs, fromJSONField: (field) => AssetUpgrade.fromJSONField(field), fromJSON: (json) => AssetUpgrade.fromJSON(json), fromSuiParsedData: (content) => AssetUpgrade.fromSuiParsedData(content), fetch: async (client, id) => AssetUpgrade.fetch(client, id), new: (fields) => { return new AssetUpgrade([], fields); }, kind: "StructClassReified", }; }
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
            upgradePrice: this.upgradePrice.toString(), upgradeAccess: this.upgradeAccess, upgradeImgUrl: this.upgradeImgUrl, upgradeTraitsList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.upgradeTraitsList), upgradePrompts: this.upgradePrompts.toJSONField(),
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
        return AssetUpgrade.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AssetUpgrade = AssetUpgrade;
AssetUpgrade.$typeName = `${index_1.PKG_V1}::hive_profile::AssetUpgrade`;
AssetUpgrade.$numTypeParams = 0;
AssetUpgrade.$isPhantom = [];
/* ============================== AssetsInsertedInHiveKiosk =============================== */
function isAssetsInsertedInHiveKiosk(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::AssetsInsertedInHiveKiosk`; }
class AssetsInsertedInHiveKiosk {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AssetsInsertedInHiveKiosk.$typeName;
        this.$isPhantom = AssetsInsertedInHiveKiosk.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AssetsInsertedInHiveKiosk.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.kioskAddr = fields.kioskAddr;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.assetsInserted = fields.assetsInserted;
        ;
        this.urlList = fields.urlList;
        ;
        this.namesList = fields.namesList;
        ;
        this.promptsList = fields.promptsList;
    }
    static reified() { return { typeName: AssetsInsertedInHiveKiosk.$typeName, fullTypeName: (0, util_1.composeSuiType)(AssetsInsertedInHiveKiosk.$typeName, ...[]), typeArgs: [], isPhantom: AssetsInsertedInHiveKiosk.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AssetsInsertedInHiveKiosk.fromFields(fields), fromFieldsWithTypes: (item) => AssetsInsertedInHiveKiosk.fromFieldsWithTypes(item), fromBcs: (data) => AssetsInsertedInHiveKiosk.fromBcs(data), bcs: AssetsInsertedInHiveKiosk.bcs, fromJSONField: (field) => AssetsInsertedInHiveKiosk.fromJSONField(field), fromJSON: (json) => AssetsInsertedInHiveKiosk.fromJSON(json), fromSuiParsedData: (content) => AssetsInsertedInHiveKiosk.fromSuiParsedData(content), fetch: async (client, id) => AssetsInsertedInHiveKiosk.fetch(client, id), new: (fields) => { return new AssetsInsertedInHiveKiosk([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AssetsInsertedInHiveKiosk.reified(); }
    static phantom() { return (0, reified_1.phantom)(AssetsInsertedInHiveKiosk.reified()); }
    static get p() { return AssetsInsertedInHiveKiosk.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AssetsInsertedInHiveKiosk", {
            creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), kiosk_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), collection_name: structs_3.String.bcs, assets_inserted: bcs_1.bcs.u64(), url_list: bcs_1.bcs.vector(structs_3.String.bcs), names_list: bcs_1.bcs.vector(structs_3.String.bcs), prompts_list: bcs_1.bcs.vector(bcs_1.bcs.vector(structs_3.String.bcs))
        });
    }
    ;
    static fromFields(fields) { return AssetsInsertedInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), kioskAddr: (0, reified_1.decodeFromFields)("address", fields.kiosk_addr), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), assetsInserted: (0, reified_1.decodeFromFields)("u64", fields.assets_inserted), urlList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.url_list), namesList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.names_list), promptsList: (0, reified_1.decodeFromFields)(reified.vector(reified.vector(structs_3.String.reified())), fields.prompts_list) }); }
    static fromFieldsWithTypes(item) {
        if (!isAssetsInsertedInHiveKiosk(item.type)) {
            throw new Error("not a AssetsInsertedInHiveKiosk type");
        }
        return AssetsInsertedInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), kioskAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.kiosk_addr), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), assetsInserted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.assets_inserted), urlList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.url_list), namesList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.names_list), promptsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector(structs_3.String.reified())), item.fields.prompts_list) });
    }
    static fromBcs(data) { return AssetsInsertedInHiveKiosk.fromFields(AssetsInsertedInHiveKiosk.bcs.parse(data)); }
    toJSONField() {
        return {
            creatorProfile: this.creatorProfile, kioskAddr: this.kioskAddr, collectionName: this.collectionName, assetsInserted: this.assetsInserted.toString(), urlList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.urlList), namesList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.namesList), promptsList: (0, reified_1.fieldToJSON)(`vector<vector<${structs_3.String.$typeName}>>`, this.promptsList),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AssetsInsertedInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), kioskAddr: (0, reified_1.decodeFromJSONField)("address", field.kioskAddr), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), assetsInserted: (0, reified_1.decodeFromJSONField)("u64", field.assetsInserted), urlList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.urlList), namesList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.namesList), promptsList: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector(structs_3.String.reified())), field.promptsList) }); }
    static fromJSON(json) {
        if (json.$typeName !== AssetsInsertedInHiveKiosk.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AssetsInsertedInHiveKiosk.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAssetsInsertedInHiveKiosk(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AssetsInsertedInHiveKiosk object`);
    } return AssetsInsertedInHiveKiosk.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AssetsInsertedInHiveKiosk object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAssetsInsertedInHiveKiosk(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AssetsInsertedInHiveKiosk object`);
        }
        return AssetsInsertedInHiveKiosk.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AssetsInsertedInHiveKiosk = AssetsInsertedInHiveKiosk;
AssetsInsertedInHiveKiosk.$typeName = `${index_1.PKG_V1}::hive_profile::AssetsInsertedInHiveKiosk`;
AssetsInsertedInHiveKiosk.$numTypeParams = 0;
AssetsInsertedInHiveKiosk.$isPhantom = [];
/* ============================== Bid =============================== */
function isBid(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V1}::hive_profile::Bid` + '<'); }
class Bid {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Bid.$typeName;
        this.$isPhantom = Bid.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Bid.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.balance = fields.balance;
        ;
        this.offerDsuiPrice = fields.offerDsuiPrice;
        ;
        this.expirationSec = fields.expirationSec;
        ;
        this.isListingLive = fields.isListingLive;
        ;
        this.isValid = fields.isValid;
    }
    static reified(X) { return { typeName: Bid.$typeName, fullTypeName: (0, util_1.composeSuiType)(Bid.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: Bid.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => Bid.fromFields(X, fields), fromFieldsWithTypes: (item) => Bid.fromFieldsWithTypes(X, item), fromBcs: (data) => Bid.fromBcs(X, data), bcs: Bid.bcs, fromJSONField: (field) => Bid.fromJSONField(X, field), fromJSON: (json) => Bid.fromJSON(X, json), fromSuiParsedData: (content) => Bid.fromSuiParsedData(X, content), fetch: async (client, id) => Bid.fetch(client, X, id), new: (fields) => { return new Bid([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Bid.reified; }
    static phantom(X) { return (0, reified_1.phantom)(Bid.reified(X)); }
    static get p() { return Bid.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("Bid", {
            bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), balance: structs_4.Balance.bcs, offer_dsui_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64(), is_listing_live: bcs_1.bcs.bool(), is_valid: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return Bid.reified(typeArg).new({ bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), balance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.balance), offerDsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_dsui_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec), isListingLive: (0, reified_1.decodeFromFields)("bool", fields.is_listing_live), isValid: (0, reified_1.decodeFromFields)("bool", fields.is_valid) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isBid(item.type)) {
            throw new Error("not a Bid type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Bid.reified(typeArg).new({ bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.balance), offerDsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_dsui_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec), isListingLive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_listing_live), isValid: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_valid) });
    }
    static fromBcs(typeArg, data) { return Bid.fromFields(typeArg, Bid.bcs.parse(data)); }
    toJSONField() {
        return {
            bidderProfile: this.bidderProfile, balance: this.balance.toJSONField(), offerDsuiPrice: this.offerDsuiPrice.toString(), expirationSec: this.expirationSec.toString(), isListingLive: this.isListingLive, isValid: this.isValid,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Bid.reified(typeArg).new({ bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), balance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.balance), offerDsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerDsuiPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec), isListingLive: (0, reified_1.decodeFromJSONField)("bool", field.isListingLive), isValid: (0, reified_1.decodeFromJSONField)("bool", field.isValid) }); }
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
        return Bid.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Bid = Bid;
Bid.$typeName = `${index_1.PKG_V1}::hive_profile::Bid`;
Bid.$numTypeParams = 1;
Bid.$isPhantom = [true,];
/* ============================== BidCanceled =============================== */
function isBidCanceled(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::BidCanceled`; }
class BidCanceled {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidCanceled.$typeName;
        this.$isPhantom = BidCanceled.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidCanceled.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.refundDsui = fields.refundDsui;
    }
    static reified() { return { typeName: BidCanceled.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidCanceled.$typeName, ...[]), typeArgs: [], isPhantom: BidCanceled.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidCanceled.fromFields(fields), fromFieldsWithTypes: (item) => BidCanceled.fromFieldsWithTypes(item), fromBcs: (data) => BidCanceled.fromBcs(data), bcs: BidCanceled.bcs, fromJSONField: (field) => BidCanceled.fromJSONField(field), fromJSON: (json) => BidCanceled.fromJSON(json), fromSuiParsedData: (content) => BidCanceled.fromSuiParsedData(content), fetch: async (client, id) => BidCanceled.fetch(client, id), new: (fields) => { return new BidCanceled([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidCanceled.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidCanceled.reified()); }
    static get p() { return BidCanceled.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidCanceled", {
            version: bcs_1.bcs.u64(), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), refund_dsui: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidCanceled.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), refundDsui: (0, reified_1.decodeFromFields)("u64", fields.refund_dsui) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidCanceled(item.type)) {
            throw new Error("not a BidCanceled type");
        }
        return BidCanceled.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), refundDsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.refund_dsui) });
    }
    static fromBcs(data) { return BidCanceled.fromFields(BidCanceled.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), bidderProfile: this.bidderProfile, refundDsui: this.refundDsui.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidCanceled.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), refundDsui: (0, reified_1.decodeFromJSONField)("u64", field.refundDsui) }); }
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
        return BidCanceled.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidCanceled = BidCanceled;
BidCanceled.$typeName = `${index_1.PKG_V1}::hive_profile::BidCanceled`;
BidCanceled.$numTypeParams = 0;
BidCanceled.$isPhantom = [];
/* ============================== BidDestroyed =============================== */
function isBidDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::BidDestroyed`; }
class BidDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidDestroyed.$typeName;
        this.$isPhantom = BidDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.assetVersion = fields.assetVersion;
        ;
        this.bidderProfile = fields.bidderProfile;
    }
    static reified() { return { typeName: BidDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: BidDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => BidDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => BidDestroyed.fromBcs(data), bcs: BidDestroyed.bcs, fromJSONField: (field) => BidDestroyed.fromJSONField(field), fromJSON: (json) => BidDestroyed.fromJSON(json), fromSuiParsedData: (content) => BidDestroyed.fromSuiParsedData(content), fetch: async (client, id) => BidDestroyed.fetch(client, id), new: (fields) => { return new BidDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidDestroyed.reified()); }
    static get p() { return BidDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidDestroyed", {
            asset_version: bcs_1.bcs.u64(), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
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
        return BidDestroyed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidDestroyed = BidDestroyed;
BidDestroyed.$typeName = `${index_1.PKG_V1}::hive_profile::BidDestroyed`;
BidDestroyed.$numTypeParams = 0;
BidDestroyed.$isPhantom = [];
/* ============================== BidExpired =============================== */
function isBidExpired(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::BidExpired`; }
class BidExpired {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidExpired.$typeName;
        this.$isPhantom = BidExpired.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidExpired.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.refundDsui = fields.refundDsui;
    }
    static reified() { return { typeName: BidExpired.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidExpired.$typeName, ...[]), typeArgs: [], isPhantom: BidExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidExpired.fromFields(fields), fromFieldsWithTypes: (item) => BidExpired.fromFieldsWithTypes(item), fromBcs: (data) => BidExpired.fromBcs(data), bcs: BidExpired.bcs, fromJSONField: (field) => BidExpired.fromJSONField(field), fromJSON: (json) => BidExpired.fromJSON(json), fromSuiParsedData: (content) => BidExpired.fromSuiParsedData(content), fetch: async (client, id) => BidExpired.fetch(client, id), new: (fields) => { return new BidExpired([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidExpired.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidExpired.reified()); }
    static get p() { return BidExpired.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidExpired", {
            version: bcs_1.bcs.u64(), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), refund_dsui: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidExpired.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), refundDsui: (0, reified_1.decodeFromFields)("u64", fields.refund_dsui) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidExpired(item.type)) {
            throw new Error("not a BidExpired type");
        }
        return BidExpired.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), refundDsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.refund_dsui) });
    }
    static fromBcs(data) { return BidExpired.fromFields(BidExpired.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), bidderProfile: this.bidderProfile, refundDsui: this.refundDsui.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidExpired.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), refundDsui: (0, reified_1.decodeFromJSONField)("u64", field.refundDsui) }); }
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
        return BidExpired.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidExpired = BidExpired;
BidExpired.$typeName = `${index_1.PKG_V1}::hive_profile::BidExpired`;
BidExpired.$numTypeParams = 0;
BidExpired.$isPhantom = [];
/* ============================== BidMarkedInvalid =============================== */
function isBidMarkedInvalid(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::BidMarkedInvalid`; }
class BidMarkedInvalid {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidMarkedInvalid.$typeName;
        this.$isPhantom = BidMarkedInvalid.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidMarkedInvalid.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderProfile = fields.bidderProfile;
    }
    static reified() { return { typeName: BidMarkedInvalid.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidMarkedInvalid.$typeName, ...[]), typeArgs: [], isPhantom: BidMarkedInvalid.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidMarkedInvalid.fromFields(fields), fromFieldsWithTypes: (item) => BidMarkedInvalid.fromFieldsWithTypes(item), fromBcs: (data) => BidMarkedInvalid.fromBcs(data), bcs: BidMarkedInvalid.bcs, fromJSONField: (field) => BidMarkedInvalid.fromJSONField(field), fromJSON: (json) => BidMarkedInvalid.fromJSON(json), fromSuiParsedData: (content) => BidMarkedInvalid.fromSuiParsedData(content), fetch: async (client, id) => BidMarkedInvalid.fetch(client, id), new: (fields) => { return new BidMarkedInvalid([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidMarkedInvalid.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidMarkedInvalid.reified()); }
    static get p() { return BidMarkedInvalid.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidMarkedInvalid", {
            version: bcs_1.bcs.u64(), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
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
        return BidMarkedInvalid.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidMarkedInvalid = BidMarkedInvalid;
BidMarkedInvalid.$typeName = `${index_1.PKG_V1}::hive_profile::BidMarkedInvalid`;
BidMarkedInvalid.$numTypeParams = 0;
BidMarkedInvalid.$isPhantom = [];
/* ============================== BidModified =============================== */
function isBidModified(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::BidModified`; }
class BidModified {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidModified.$typeName;
        this.$isPhantom = BidModified.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidModified.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.offerDsuiPrice = fields.offerDsuiPrice;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: BidModified.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidModified.$typeName, ...[]), typeArgs: [], isPhantom: BidModified.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidModified.fromFields(fields), fromFieldsWithTypes: (item) => BidModified.fromFieldsWithTypes(item), fromBcs: (data) => BidModified.fromBcs(data), bcs: BidModified.bcs, fromJSONField: (field) => BidModified.fromJSONField(field), fromJSON: (json) => BidModified.fromJSON(json), fromSuiParsedData: (content) => BidModified.fromSuiParsedData(content), fetch: async (client, id) => BidModified.fetch(client, id), new: (fields) => { return new BidModified([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidModified.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidModified.reified()); }
    static get p() { return BidModified.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidModified", {
            version: bcs_1.bcs.u64(), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), offer_dsui_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidModified.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), offerDsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_dsui_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidModified(item.type)) {
            throw new Error("not a BidModified type");
        }
        return BidModified.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), offerDsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_dsui_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return BidModified.fromFields(BidModified.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), bidderProfile: this.bidderProfile, offerDsuiPrice: this.offerDsuiPrice.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidModified.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), offerDsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerDsuiPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
        return BidModified.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidModified = BidModified;
BidModified.$typeName = `${index_1.PKG_V1}::hive_profile::BidModified`;
BidModified.$numTypeParams = 0;
BidModified.$isPhantom = [];
/* ============================== BidPlaced =============================== */
function isBidPlaced(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::BidPlaced`; }
class BidPlaced {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidPlaced.$typeName;
        this.$isPhantom = BidPlaced.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidPlaced.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.username = fields.username;
        ;
        this.version = fields.version;
        ;
        this.offerDsuiPrice = fields.offerDsuiPrice;
        ;
        this.expirationSec = fields.expirationSec;
        ;
        this.isAssetListed = fields.isAssetListed;
    }
    static reified() { return { typeName: BidPlaced.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidPlaced.$typeName, ...[]), typeArgs: [], isPhantom: BidPlaced.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidPlaced.fromFields(fields), fromFieldsWithTypes: (item) => BidPlaced.fromFieldsWithTypes(item), fromBcs: (data) => BidPlaced.fromBcs(data), bcs: BidPlaced.bcs, fromJSONField: (field) => BidPlaced.fromJSONField(field), fromJSON: (json) => BidPlaced.fromJSON(json), fromSuiParsedData: (content) => BidPlaced.fromSuiParsedData(content), fetch: async (client, id) => BidPlaced.fetch(client, id), new: (fields) => { return new BidPlaced([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidPlaced.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidPlaced.reified()); }
    static get p() { return BidPlaced.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidPlaced", {
            bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_1.String.bcs, version: bcs_1.bcs.u64(), offer_dsui_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64(), is_asset_listed: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return BidPlaced.reified().new({ bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), version: (0, reified_1.decodeFromFields)("u64", fields.version), offerDsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_dsui_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec), isAssetListed: (0, reified_1.decodeFromFields)("bool", fields.is_asset_listed) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidPlaced(item.type)) {
            throw new Error("not a BidPlaced type");
        }
        return BidPlaced.reified().new({ bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), offerDsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_dsui_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec), isAssetListed: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_asset_listed) });
    }
    static fromBcs(data) { return BidPlaced.fromFields(BidPlaced.bcs.parse(data)); }
    toJSONField() {
        return {
            bidderProfile: this.bidderProfile, username: this.username, version: this.version.toString(), offerDsuiPrice: this.offerDsuiPrice.toString(), expirationSec: this.expirationSec.toString(), isAssetListed: this.isAssetListed,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidPlaced.reified().new({ bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), version: (0, reified_1.decodeFromJSONField)("u64", field.version), offerDsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerDsuiPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec), isAssetListed: (0, reified_1.decodeFromJSONField)("bool", field.isAssetListed) }); }
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
        return BidPlaced.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidPlaced = BidPlaced;
BidPlaced.$typeName = `${index_1.PKG_V1}::hive_profile::BidPlaced`;
BidPlaced.$numTypeParams = 0;
BidPlaced.$isPhantom = [];
/* ============================== BidRecord =============================== */
function isBidRecord(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::BidRecord`; }
class BidRecord {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidRecord.$typeName;
        this.$isPhantom = BidRecord.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.offerDsuiPrice = fields.offerDsuiPrice;
        ;
        this.expirationSec = fields.expirationSec;
        ;
        this.isAssetListed = fields.isAssetListed;
    }
    static reified() { return { typeName: BidRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidRecord.$typeName, ...[]), typeArgs: [], isPhantom: BidRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidRecord.fromFields(fields), fromFieldsWithTypes: (item) => BidRecord.fromFieldsWithTypes(item), fromBcs: (data) => BidRecord.fromBcs(data), bcs: BidRecord.bcs, fromJSONField: (field) => BidRecord.fromJSONField(field), fromJSON: (json) => BidRecord.fromJSON(json), fromSuiParsedData: (content) => BidRecord.fromSuiParsedData(content), fetch: async (client, id) => BidRecord.fetch(client, id), new: (fields) => { return new BidRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidRecord.reified()); }
    static get p() { return BidRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidRecord", {
            version: bcs_1.bcs.u64(), offer_dsui_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64(), is_asset_listed: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return BidRecord.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), offerDsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_dsui_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec), isAssetListed: (0, reified_1.decodeFromFields)("bool", fields.is_asset_listed) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidRecord(item.type)) {
            throw new Error("not a BidRecord type");
        }
        return BidRecord.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), offerDsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_dsui_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec), isAssetListed: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_asset_listed) });
    }
    static fromBcs(data) { return BidRecord.fromFields(BidRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), offerDsuiPrice: this.offerDsuiPrice.toString(), expirationSec: this.expirationSec.toString(), isAssetListed: this.isAssetListed,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidRecord.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), offerDsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerDsuiPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec), isAssetListed: (0, reified_1.decodeFromJSONField)("bool", field.isAssetListed) }); }
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
        return BidRecord.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidRecord = BidRecord;
BidRecord.$typeName = `${index_1.PKG_V1}::hive_profile::BidRecord`;
BidRecord.$numTypeParams = 0;
BidRecord.$isPhantom = [];
/* ============================== BioUpdated =============================== */
function isBioUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::BioUpdated`; }
class BioUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BioUpdated.$typeName;
        this.$isPhantom = BioUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BioUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.newBio = fields.newBio;
    }
    static reified() { return { typeName: BioUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(BioUpdated.$typeName, ...[]), typeArgs: [], isPhantom: BioUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BioUpdated.fromFields(fields), fromFieldsWithTypes: (item) => BioUpdated.fromFieldsWithTypes(item), fromBcs: (data) => BioUpdated.fromBcs(data), bcs: BioUpdated.bcs, fromJSONField: (field) => BioUpdated.fromJSONField(field), fromJSON: (json) => BioUpdated.fromJSON(json), fromSuiParsedData: (content) => BioUpdated.fromSuiParsedData(content), fetch: async (client, id) => BioUpdated.fetch(client, id), new: (fields) => { return new BioUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BioUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(BioUpdated.reified()); }
    static get p() { return BioUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BioUpdated", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_3.String.bcs, new_bio: structs_3.String.bcs
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
        return BioUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BioUpdated = BioUpdated;
BioUpdated.$typeName = `${index_1.PKG_V1}::hive_profile::BioUpdated`;
BioUpdated.$numTypeParams = 0;
BioUpdated.$isPhantom = [];
/* ============================== BorrowRecord =============================== */
function isBorrowRecord(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::BorrowRecord`; }
class BorrowRecord {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BorrowRecord.$typeName;
        this.$isPhantom = BorrowRecord.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BorrowRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.owner = fields.owner;
        ;
        this.borrowPriceDsui = fields.borrowPriceDsui;
        ;
        this.startSec = fields.startSec;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: BorrowRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(BorrowRecord.$typeName, ...[]), typeArgs: [], isPhantom: BorrowRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BorrowRecord.fromFields(fields), fromFieldsWithTypes: (item) => BorrowRecord.fromFieldsWithTypes(item), fromBcs: (data) => BorrowRecord.fromBcs(data), bcs: BorrowRecord.bcs, fromJSONField: (field) => BorrowRecord.fromJSONField(field), fromJSON: (json) => BorrowRecord.fromJSON(json), fromSuiParsedData: (content) => BorrowRecord.fromSuiParsedData(content), fetch: async (client, id) => BorrowRecord.fetch(client, id), new: (fields) => { return new BorrowRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BorrowRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(BorrowRecord.reified()); }
    static get p() { return BorrowRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BorrowRecord", {
            owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), borrow_price_dsui: bcs_1.bcs.u64(), start_sec: bcs_1.bcs.u64(), lockup_duration: bcs_1.bcs.u8(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BorrowRecord.reified().new({ owner: (0, reified_1.decodeFromFields)("address", fields.owner), borrowPriceDsui: (0, reified_1.decodeFromFields)("u64", fields.borrow_price_dsui), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isBorrowRecord(item.type)) {
            throw new Error("not a BorrowRecord type");
        }
        return BorrowRecord.reified().new({ owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), borrowPriceDsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_price_dsui), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return BorrowRecord.fromFields(BorrowRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            owner: this.owner, borrowPriceDsui: this.borrowPriceDsui.toString(), startSec: this.startSec.toString(), lockupDuration: this.lockupDuration, expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BorrowRecord.reified().new({ owner: (0, reified_1.decodeFromJSONField)("address", field.owner), borrowPriceDsui: (0, reified_1.decodeFromJSONField)("u64", field.borrowPriceDsui), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
        return BorrowRecord.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BorrowRecord = BorrowRecord;
BorrowRecord.$typeName = `${index_1.PKG_V1}::hive_profile::BorrowRecord`;
BorrowRecord.$numTypeParams = 0;
BorrowRecord.$isPhantom = [];
/* ============================== DSuiDisperser =============================== */
function isDSuiDisperser(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V1}::hive_profile::DSuiDisperser` + '<'); }
class DSuiDisperser {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DSuiDisperser.$typeName;
        this.$isPhantom = DSuiDisperser.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DSuiDisperser.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.incomingDsuiForAssets = fields.incomingDsuiForAssets;
        ;
        this.dsuiForAssets = fields.dsuiForAssets;
        ;
        this.globalDispersalIndex = fields.globalDispersalIndex;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified(X) { return { typeName: DSuiDisperser.$typeName, fullTypeName: (0, util_1.composeSuiType)(DSuiDisperser.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: DSuiDisperser.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => DSuiDisperser.fromFields(X, fields), fromFieldsWithTypes: (item) => DSuiDisperser.fromFieldsWithTypes(X, item), fromBcs: (data) => DSuiDisperser.fromBcs(X, data), bcs: DSuiDisperser.bcs, fromJSONField: (field) => DSuiDisperser.fromJSONField(X, field), fromJSON: (json) => DSuiDisperser.fromJSON(X, json), fromSuiParsedData: (content) => DSuiDisperser.fromSuiParsedData(X, content), fetch: async (client, id) => DSuiDisperser.fetch(client, X, id), new: (fields) => { return new DSuiDisperser([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return DSuiDisperser.reified; }
    static phantom(X) { return (0, reified_1.phantom)(DSuiDisperser.reified(X)); }
    static get p() { return DSuiDisperser.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("DSuiDisperser", {
            id: structs_6.UID.bcs, incoming_dsui_for_assets: structs_4.Balance.bcs, dsui_for_assets: structs_4.Balance.bcs, global_dispersal_index: bcs_1.bcs.u256(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return DSuiDisperser.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), incomingDsuiForAssets: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.incoming_dsui_for_assets), dsuiForAssets: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.dsui_for_assets), globalDispersalIndex: (0, reified_1.decodeFromFields)("u256", fields.global_dispersal_index), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isDSuiDisperser(item.type)) {
            throw new Error("not a DSuiDisperser type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return DSuiDisperser.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), incomingDsuiForAssets: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.incoming_dsui_for_assets), dsuiForAssets: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.dsui_for_assets), globalDispersalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.global_dispersal_index), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(typeArg, data) { return DSuiDisperser.fromFields(typeArg, DSuiDisperser.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, incomingDsuiForAssets: this.incomingDsuiForAssets.toJSONField(), dsuiForAssets: this.dsuiForAssets.toJSONField(), globalDispersalIndex: this.globalDispersalIndex.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return DSuiDisperser.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), incomingDsuiForAssets: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.incomingDsuiForAssets), dsuiForAssets: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.dsuiForAssets), globalDispersalIndex: (0, reified_1.decodeFromJSONField)("u256", field.globalDispersalIndex), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== DSuiDisperser.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(DSuiDisperser.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return DSuiDisperser.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDSuiDisperser(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DSuiDisperser object`);
    } return DSuiDisperser.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DSuiDisperser object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDSuiDisperser(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DSuiDisperser object`);
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
        return DSuiDisperser.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DSuiDisperser = DSuiDisperser;
DSuiDisperser.$typeName = `${index_1.PKG_V1}::hive_profile::DSuiDisperser`;
DSuiDisperser.$numTypeParams = 1;
DSuiDisperser.$isPhantom = [true,];
/* ============================== DegenHiveYieldHarvested =============================== */
function isDegenHiveYieldHarvested(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::DegenHiveYieldHarvested`; }
class DegenHiveYieldHarvested {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DegenHiveYieldHarvested.$typeName;
        this.$isPhantom = DegenHiveYieldHarvested.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DegenHiveYieldHarvested.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.harvesterProfile = fields.harvesterProfile;
        ;
        this.username = fields.username;
        ;
        this.dsuiHarvested = fields.dsuiHarvested;
        ;
        this.gemsHarvested = fields.gemsHarvested;
    }
    static reified() { return { typeName: DegenHiveYieldHarvested.$typeName, fullTypeName: (0, util_1.composeSuiType)(DegenHiveYieldHarvested.$typeName, ...[]), typeArgs: [], isPhantom: DegenHiveYieldHarvested.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DegenHiveYieldHarvested.fromFields(fields), fromFieldsWithTypes: (item) => DegenHiveYieldHarvested.fromFieldsWithTypes(item), fromBcs: (data) => DegenHiveYieldHarvested.fromBcs(data), bcs: DegenHiveYieldHarvested.bcs, fromJSONField: (field) => DegenHiveYieldHarvested.fromJSONField(field), fromJSON: (json) => DegenHiveYieldHarvested.fromJSON(json), fromSuiParsedData: (content) => DegenHiveYieldHarvested.fromSuiParsedData(content), fetch: async (client, id) => DegenHiveYieldHarvested.fetch(client, id), new: (fields) => { return new DegenHiveYieldHarvested([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DegenHiveYieldHarvested.reified(); }
    static phantom() { return (0, reified_1.phantom)(DegenHiveYieldHarvested.reified()); }
    static get p() { return DegenHiveYieldHarvested.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DegenHiveYieldHarvested", {
            harvester_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_1.String.bcs, dsui_harvested: bcs_1.bcs.u64(), gems_harvested: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DegenHiveYieldHarvested.reified().new({ harvesterProfile: (0, reified_1.decodeFromFields)("address", fields.harvester_profile), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), dsuiHarvested: (0, reified_1.decodeFromFields)("u64", fields.dsui_harvested), gemsHarvested: (0, reified_1.decodeFromFields)("u64", fields.gems_harvested) }); }
    static fromFieldsWithTypes(item) {
        if (!isDegenHiveYieldHarvested(item.type)) {
            throw new Error("not a DegenHiveYieldHarvested type");
        }
        return DegenHiveYieldHarvested.reified().new({ harvesterProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.harvester_profile), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), dsuiHarvested: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_harvested), gemsHarvested: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_harvested) });
    }
    static fromBcs(data) { return DegenHiveYieldHarvested.fromFields(DegenHiveYieldHarvested.bcs.parse(data)); }
    toJSONField() {
        return {
            harvesterProfile: this.harvesterProfile, username: this.username, dsuiHarvested: this.dsuiHarvested.toString(), gemsHarvested: this.gemsHarvested.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DegenHiveYieldHarvested.reified().new({ harvesterProfile: (0, reified_1.decodeFromJSONField)("address", field.harvesterProfile), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), dsuiHarvested: (0, reified_1.decodeFromJSONField)("u64", field.dsuiHarvested), gemsHarvested: (0, reified_1.decodeFromJSONField)("u64", field.gemsHarvested) }); }
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
        return DegenHiveYieldHarvested.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DegenHiveYieldHarvested = DegenHiveYieldHarvested;
DegenHiveYieldHarvested.$typeName = `${index_1.PKG_V1}::hive_profile::DegenHiveYieldHarvested`;
DegenHiveYieldHarvested.$numTypeParams = 0;
DegenHiveYieldHarvested.$isPhantom = [];
/* ============================== DegenSuiAddedForHarvest =============================== */
function isDegenSuiAddedForHarvest(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::DegenSuiAddedForHarvest`; }
class DegenSuiAddedForHarvest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DegenSuiAddedForHarvest.$typeName;
        this.$isPhantom = DegenSuiAddedForHarvest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DegenSuiAddedForHarvest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.yieldAdded = fields.yieldAdded;
    }
    static reified() { return { typeName: DegenSuiAddedForHarvest.$typeName, fullTypeName: (0, util_1.composeSuiType)(DegenSuiAddedForHarvest.$typeName, ...[]), typeArgs: [], isPhantom: DegenSuiAddedForHarvest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DegenSuiAddedForHarvest.fromFields(fields), fromFieldsWithTypes: (item) => DegenSuiAddedForHarvest.fromFieldsWithTypes(item), fromBcs: (data) => DegenSuiAddedForHarvest.fromBcs(data), bcs: DegenSuiAddedForHarvest.bcs, fromJSONField: (field) => DegenSuiAddedForHarvest.fromJSONField(field), fromJSON: (json) => DegenSuiAddedForHarvest.fromJSON(json), fromSuiParsedData: (content) => DegenSuiAddedForHarvest.fromSuiParsedData(content), fetch: async (client, id) => DegenSuiAddedForHarvest.fetch(client, id), new: (fields) => { return new DegenSuiAddedForHarvest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DegenSuiAddedForHarvest.reified(); }
    static phantom() { return (0, reified_1.phantom)(DegenSuiAddedForHarvest.reified()); }
    static get p() { return DegenSuiAddedForHarvest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DegenSuiAddedForHarvest", {
            yield_added: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DegenSuiAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromFields)("u64", fields.yield_added) }); }
    static fromFieldsWithTypes(item) {
        if (!isDegenSuiAddedForHarvest(item.type)) {
            throw new Error("not a DegenSuiAddedForHarvest type");
        }
        return DegenSuiAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.yield_added) });
    }
    static fromBcs(data) { return DegenSuiAddedForHarvest.fromFields(DegenSuiAddedForHarvest.bcs.parse(data)); }
    toJSONField() {
        return {
            yieldAdded: this.yieldAdded.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DegenSuiAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromJSONField)("u64", field.yieldAdded) }); }
    static fromJSON(json) {
        if (json.$typeName !== DegenSuiAddedForHarvest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DegenSuiAddedForHarvest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDegenSuiAddedForHarvest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DegenSuiAddedForHarvest object`);
    } return DegenSuiAddedForHarvest.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DegenSuiAddedForHarvest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDegenSuiAddedForHarvest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DegenSuiAddedForHarvest object`);
        }
        return DegenSuiAddedForHarvest.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DegenSuiAddedForHarvest = DegenSuiAddedForHarvest;
DegenSuiAddedForHarvest.$typeName = `${index_1.PKG_V1}::hive_profile::DegenSuiAddedForHarvest`;
DegenSuiAddedForHarvest.$numTypeParams = 0;
DegenSuiAddedForHarvest.$isPhantom = [];
/* ============================== DepositHSuiForProfile =============================== */
function isDepositHSuiForProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::DepositHSuiForProfile`; }
class DepositHSuiForProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DepositHSuiForProfile.$typeName;
        this.$isPhantom = DepositHSuiForProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DepositHSuiForProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.dsuiDeposited = fields.dsuiDeposited;
        ;
        this.depositorAddr = fields.depositorAddr;
    }
    static reified() { return { typeName: DepositHSuiForProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(DepositHSuiForProfile.$typeName, ...[]), typeArgs: [], isPhantom: DepositHSuiForProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DepositHSuiForProfile.fromFields(fields), fromFieldsWithTypes: (item) => DepositHSuiForProfile.fromFieldsWithTypes(item), fromBcs: (data) => DepositHSuiForProfile.fromBcs(data), bcs: DepositHSuiForProfile.bcs, fromJSONField: (field) => DepositHSuiForProfile.fromJSONField(field), fromJSON: (json) => DepositHSuiForProfile.fromJSON(json), fromSuiParsedData: (content) => DepositHSuiForProfile.fromSuiParsedData(content), fetch: async (client, id) => DepositHSuiForProfile.fetch(client, id), new: (fields) => { return new DepositHSuiForProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DepositHSuiForProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(DepositHSuiForProfile.reified()); }
    static get p() { return DepositHSuiForProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DepositHSuiForProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), dsui_deposited: bcs_1.bcs.u64(), depositor_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return DepositHSuiForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), dsuiDeposited: (0, reified_1.decodeFromFields)("u64", fields.dsui_deposited), depositorAddr: (0, reified_1.decodeFromFields)("address", fields.depositor_addr) }); }
    static fromFieldsWithTypes(item) {
        if (!isDepositHSuiForProfile(item.type)) {
            throw new Error("not a DepositHSuiForProfile type");
        }
        return DepositHSuiForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), dsuiDeposited: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_deposited), depositorAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.depositor_addr) });
    }
    static fromBcs(data) { return DepositHSuiForProfile.fromFields(DepositHSuiForProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, dsuiDeposited: this.dsuiDeposited.toString(), depositorAddr: this.depositorAddr,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DepositHSuiForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), dsuiDeposited: (0, reified_1.decodeFromJSONField)("u64", field.dsuiDeposited), depositorAddr: (0, reified_1.decodeFromJSONField)("address", field.depositorAddr) }); }
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
        return DepositHSuiForProfile.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DepositHSuiForProfile = DepositHSuiForProfile;
DepositHSuiForProfile.$typeName = `${index_1.PKG_V1}::hive_profile::DepositHSuiForProfile`;
DepositHSuiForProfile.$numTypeParams = 0;
DepositHSuiForProfile.$isPhantom = [];
/* ============================== ExecutedListing =============================== */
function isExecutedListing(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V1}::hive_profile::ExecutedListing` + '<'); }
class ExecutedListing {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ExecutedListing.$typeName;
        this.$isPhantom = ExecutedListing.$isPhantom;
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
        this.executedPriceInDsui = fields.executedPriceInDsui;
        ;
        this.borrowPeriodStartSec = fields.borrowPeriodStartSec;
        ;
        this.borrowPeriodEndSec = fields.borrowPeriodEndSec;
    }
    static reified(X) { return { typeName: ExecutedListing.$typeName, fullTypeName: (0, util_1.composeSuiType)(ExecutedListing.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: ExecutedListing.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => ExecutedListing.fromFields(X, fields), fromFieldsWithTypes: (item) => ExecutedListing.fromFieldsWithTypes(X, item), fromBcs: (data) => ExecutedListing.fromBcs(X, data), bcs: ExecutedListing.bcs, fromJSONField: (field) => ExecutedListing.fromJSONField(X, field), fromJSON: (json) => ExecutedListing.fromJSON(X, json), fromSuiParsedData: (content) => ExecutedListing.fromSuiParsedData(X, content), fetch: async (client, id) => ExecutedListing.fetch(client, X, id), new: (fields) => { return new ExecutedListing([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return ExecutedListing.reified; }
    static phantom(X) { return (0, reified_1.phantom)(ExecutedListing.reified(X)); }
    static get p() { return ExecutedListing.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("ExecutedListing", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), hive_asset: structs_2.Option.bcs(HiveAsset.bcs), version: bcs_1.bcs.u64(), was_sale_listing: bcs_1.bcs.bool(), balance: structs_2.Option.bcs(structs_4.Balance.bcs), bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), executed_price_in_dsui: bcs_1.bcs.u64(), borrow_period_start_sec: bcs_1.bcs.u64(), borrow_period_end_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return ExecutedListing.reified(typeArg).new({ listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile), hiveAsset: (0, reified_1.decodeFromFields)(structs_2.Option.reified(HiveAsset.reified()), fields.hive_asset), version: (0, reified_1.decodeFromFields)("u64", fields.version), wasSaleListing: (0, reified_1.decodeFromFields)("bool", fields.was_sale_listing), balance: (0, reified_1.decodeFromFields)(structs_2.Option.reified(structs_4.Balance.reified(typeArg)), fields.balance), bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), executedPriceInDsui: (0, reified_1.decodeFromFields)("u64", fields.executed_price_in_dsui), borrowPeriodStartSec: (0, reified_1.decodeFromFields)("u64", fields.borrow_period_start_sec), borrowPeriodEndSec: (0, reified_1.decodeFromFields)("u64", fields.borrow_period_end_sec) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isExecutedListing(item.type)) {
            throw new Error("not a ExecutedListing type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ExecutedListing.reified(typeArg).new({ listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile), hiveAsset: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(HiveAsset.reified()), item.fields.hive_asset), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), wasSaleListing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.was_sale_listing), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(structs_4.Balance.reified(typeArg)), item.fields.balance), bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), executedPriceInDsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.executed_price_in_dsui), borrowPeriodStartSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_period_start_sec), borrowPeriodEndSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_period_end_sec) });
    }
    static fromBcs(typeArg, data) { return ExecutedListing.fromFields(typeArg, ExecutedListing.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByProfile: this.listedByProfile, hiveAsset: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${HiveAsset.$typeName}>`, this.hiveAsset), version: this.version.toString(), wasSaleListing: this.wasSaleListing, balance: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${structs_4.Balance.$typeName}<${this.$typeArgs[0]}>>`, this.balance), bidderProfile: this.bidderProfile, executedPriceInDsui: this.executedPriceInDsui.toString(), borrowPeriodStartSec: this.borrowPeriodStartSec.toString(), borrowPeriodEndSec: this.borrowPeriodEndSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return ExecutedListing.reified(typeArg).new({ listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile), hiveAsset: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(HiveAsset.reified()), field.hiveAsset), version: (0, reified_1.decodeFromJSONField)("u64", field.version), wasSaleListing: (0, reified_1.decodeFromJSONField)("bool", field.wasSaleListing), balance: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(structs_4.Balance.reified(typeArg)), field.balance), bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), executedPriceInDsui: (0, reified_1.decodeFromJSONField)("u64", field.executedPriceInDsui), borrowPeriodStartSec: (0, reified_1.decodeFromJSONField)("u64", field.borrowPeriodStartSec), borrowPeriodEndSec: (0, reified_1.decodeFromJSONField)("u64", field.borrowPeriodEndSec) }); }
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
        return ExecutedListing.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ExecutedListing = ExecutedListing;
ExecutedListing.$typeName = `${index_1.PKG_V1}::hive_profile::ExecutedListing`;
ExecutedListing.$numTypeParams = 1;
ExecutedListing.$isPhantom = [true,];
/* ============================== ExecutedListingDestroyed =============================== */
function isExecutedListingDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ExecutedListingDestroyed`; }
class ExecutedListingDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ExecutedListingDestroyed.$typeName;
        this.$isPhantom = ExecutedListingDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ExecutedListingDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.executedPriceInDsui = fields.executedPriceInDsui;
        ;
        this.listedByProfile = fields.listedByProfile;
    }
    static reified() { return { typeName: ExecutedListingDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(ExecutedListingDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: ExecutedListingDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ExecutedListingDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => ExecutedListingDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => ExecutedListingDestroyed.fromBcs(data), bcs: ExecutedListingDestroyed.bcs, fromJSONField: (field) => ExecutedListingDestroyed.fromJSONField(field), fromJSON: (json) => ExecutedListingDestroyed.fromJSON(json), fromSuiParsedData: (content) => ExecutedListingDestroyed.fromSuiParsedData(content), fetch: async (client, id) => ExecutedListingDestroyed.fetch(client, id), new: (fields) => { return new ExecutedListingDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ExecutedListingDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(ExecutedListingDestroyed.reified()); }
    static get p() { return ExecutedListingDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ExecutedListingDestroyed", {
            version: bcs_1.bcs.u64(), executed_price_in_dsui: bcs_1.bcs.u64(), listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return ExecutedListingDestroyed.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), executedPriceInDsui: (0, reified_1.decodeFromFields)("u64", fields.executed_price_in_dsui), listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isExecutedListingDestroyed(item.type)) {
            throw new Error("not a ExecutedListingDestroyed type");
        }
        return ExecutedListingDestroyed.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), executedPriceInDsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.executed_price_in_dsui), listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile) });
    }
    static fromBcs(data) { return ExecutedListingDestroyed.fromFields(ExecutedListingDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), executedPriceInDsui: this.executedPriceInDsui.toString(), listedByProfile: this.listedByProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ExecutedListingDestroyed.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), executedPriceInDsui: (0, reified_1.decodeFromJSONField)("u64", field.executedPriceInDsui), listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile) }); }
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
        return ExecutedListingDestroyed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ExecutedListingDestroyed = ExecutedListingDestroyed;
ExecutedListingDestroyed.$typeName = `${index_1.PKG_V1}::hive_profile::ExecutedListingDestroyed`;
ExecutedListingDestroyed.$numTypeParams = 0;
ExecutedListingDestroyed.$isPhantom = [];
/* ============================== ExitHiveOfProfile =============================== */
function isExitHiveOfProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ExitHiveOfProfile`; }
class ExitHiveOfProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ExitHiveOfProfile.$typeName;
        this.$isPhantom = ExitHiveOfProfile.$isPhantom;
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
    static reified() { return { typeName: ExitHiveOfProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(ExitHiveOfProfile.$typeName, ...[]), typeArgs: [], isPhantom: ExitHiveOfProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ExitHiveOfProfile.fromFields(fields), fromFieldsWithTypes: (item) => ExitHiveOfProfile.fromFieldsWithTypes(item), fromBcs: (data) => ExitHiveOfProfile.fromBcs(data), bcs: ExitHiveOfProfile.bcs, fromJSONField: (field) => ExitHiveOfProfile.fromJSONField(field), fromJSON: (json) => ExitHiveOfProfile.fromJSON(json), fromSuiParsedData: (content) => ExitHiveOfProfile.fromSuiParsedData(content), fetch: async (client, id) => ExitHiveOfProfile.fetch(client, id), new: (fields) => { return new ExitHiveOfProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ExitHiveOfProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(ExitHiveOfProfile.reified()); }
    static get p() { return ExitHiveOfProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ExitHiveOfProfile", {
            subscriber_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), unsubscribed_from_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), subscriber_username: structs_3.String.bcs, unhive_owner_username: structs_3.String.bcs, records_deleted: bcs_1.bcs.bool()
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
        return ExitHiveOfProfile.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ExitHiveOfProfile = ExitHiveOfProfile;
ExitHiveOfProfile.$typeName = `${index_1.PKG_V1}::hive_profile::ExitHiveOfProfile`;
ExitHiveOfProfile.$numTypeParams = 0;
ExitHiveOfProfile.$isPhantom = [];
/* ============================== GemAddedToProfile =============================== */
function isGemAddedToProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::GemAddedToProfile`; }
class GemAddedToProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = GemAddedToProfile.$typeName;
        this.$isPhantom = GemAddedToProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(GemAddedToProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.depositedGems = fields.depositedGems;
    }
    static reified() { return { typeName: GemAddedToProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(GemAddedToProfile.$typeName, ...[]), typeArgs: [], isPhantom: GemAddedToProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => GemAddedToProfile.fromFields(fields), fromFieldsWithTypes: (item) => GemAddedToProfile.fromFieldsWithTypes(item), fromBcs: (data) => GemAddedToProfile.fromBcs(data), bcs: GemAddedToProfile.bcs, fromJSONField: (field) => GemAddedToProfile.fromJSONField(field), fromJSON: (json) => GemAddedToProfile.fromJSON(json), fromSuiParsedData: (content) => GemAddedToProfile.fromSuiParsedData(content), fetch: async (client, id) => GemAddedToProfile.fetch(client, id), new: (fields) => { return new GemAddedToProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GemAddedToProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(GemAddedToProfile.reified()); }
    static get p() { return GemAddedToProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GemAddedToProfile", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), deposited_gems: bcs_1.bcs.u64()
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
        return GemAddedToProfile.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GemAddedToProfile = GemAddedToProfile;
GemAddedToProfile.$typeName = `${index_1.PKG_V1}::hive_profile::GemAddedToProfile`;
GemAddedToProfile.$numTypeParams = 0;
GemAddedToProfile.$isPhantom = [];
/* ============================== GemWithdrawnFromProfile =============================== */
function isGemWithdrawnFromProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::GemWithdrawnFromProfile`; }
class GemWithdrawnFromProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = GemWithdrawnFromProfile.$typeName;
        this.$isPhantom = GemWithdrawnFromProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(GemWithdrawnFromProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.withdrawnGems = fields.withdrawnGems;
    }
    static reified() { return { typeName: GemWithdrawnFromProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(GemWithdrawnFromProfile.$typeName, ...[]), typeArgs: [], isPhantom: GemWithdrawnFromProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => GemWithdrawnFromProfile.fromFields(fields), fromFieldsWithTypes: (item) => GemWithdrawnFromProfile.fromFieldsWithTypes(item), fromBcs: (data) => GemWithdrawnFromProfile.fromBcs(data), bcs: GemWithdrawnFromProfile.bcs, fromJSONField: (field) => GemWithdrawnFromProfile.fromJSONField(field), fromJSON: (json) => GemWithdrawnFromProfile.fromJSON(json), fromSuiParsedData: (content) => GemWithdrawnFromProfile.fromSuiParsedData(content), fetch: async (client, id) => GemWithdrawnFromProfile.fetch(client, id), new: (fields) => { return new GemWithdrawnFromProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GemWithdrawnFromProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(GemWithdrawnFromProfile.reified()); }
    static get p() { return GemWithdrawnFromProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GemWithdrawnFromProfile", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), withdrawn_gems: bcs_1.bcs.u64()
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
        return GemWithdrawnFromProfile.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GemWithdrawnFromProfile = GemWithdrawnFromProfile;
GemWithdrawnFromProfile.$typeName = `${index_1.PKG_V1}::hive_profile::GemWithdrawnFromProfile`;
GemWithdrawnFromProfile.$numTypeParams = 0;
GemWithdrawnFromProfile.$isPhantom = [];
/* ============================== HIVE_PROFILE =============================== */
function isHIVE_PROFILE(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HIVE_PROFILE`; }
class HIVE_PROFILE {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HIVE_PROFILE.$typeName;
        this.$isPhantom = HIVE_PROFILE.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HIVE_PROFILE.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: HIVE_PROFILE.$typeName, fullTypeName: (0, util_1.composeSuiType)(HIVE_PROFILE.$typeName, ...[]), typeArgs: [], isPhantom: HIVE_PROFILE.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HIVE_PROFILE.fromFields(fields), fromFieldsWithTypes: (item) => HIVE_PROFILE.fromFieldsWithTypes(item), fromBcs: (data) => HIVE_PROFILE.fromBcs(data), bcs: HIVE_PROFILE.bcs, fromJSONField: (field) => HIVE_PROFILE.fromJSONField(field), fromJSON: (json) => HIVE_PROFILE.fromJSON(json), fromSuiParsedData: (content) => HIVE_PROFILE.fromSuiParsedData(content), fetch: async (client, id) => HIVE_PROFILE.fetch(client, id), new: (fields) => { return new HIVE_PROFILE([], fields); }, kind: "StructClassReified", }; }
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
        return HIVE_PROFILE.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HIVE_PROFILE = HIVE_PROFILE;
HIVE_PROFILE.$typeName = `${index_1.PKG_V1}::hive_profile::HIVE_PROFILE`;
HIVE_PROFILE.$numTypeParams = 0;
HIVE_PROFILE.$isPhantom = [];
/* ============================== HarvestRewardsForAsset =============================== */
function isHarvestRewardsForAsset(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HarvestRewardsForAsset`; }
class HarvestRewardsForAsset {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HarvestRewardsForAsset.$typeName;
        this.$isPhantom = HarvestRewardsForAsset.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HarvestRewardsForAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.dsuiHarvested = fields.dsuiHarvested;
        ;
        this.gemsHarvested = fields.gemsHarvested;
    }
    static reified() { return { typeName: HarvestRewardsForAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(HarvestRewardsForAsset.$typeName, ...[]), typeArgs: [], isPhantom: HarvestRewardsForAsset.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HarvestRewardsForAsset.fromFields(fields), fromFieldsWithTypes: (item) => HarvestRewardsForAsset.fromFieldsWithTypes(item), fromBcs: (data) => HarvestRewardsForAsset.fromBcs(data), bcs: HarvestRewardsForAsset.bcs, fromJSONField: (field) => HarvestRewardsForAsset.fromJSONField(field), fromJSON: (json) => HarvestRewardsForAsset.fromJSON(json), fromSuiParsedData: (content) => HarvestRewardsForAsset.fromSuiParsedData(content), fetch: async (client, id) => HarvestRewardsForAsset.fetch(client, id), new: (fields) => { return new HarvestRewardsForAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HarvestRewardsForAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(HarvestRewardsForAsset.reified()); }
    static get p() { return HarvestRewardsForAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HarvestRewardsForAsset", {
            version: bcs_1.bcs.u64(), dsui_harvested: bcs_1.bcs.u64(), gems_harvested: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HarvestRewardsForAsset.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), dsuiHarvested: (0, reified_1.decodeFromFields)("u64", fields.dsui_harvested), gemsHarvested: (0, reified_1.decodeFromFields)("u64", fields.gems_harvested) }); }
    static fromFieldsWithTypes(item) {
        if (!isHarvestRewardsForAsset(item.type)) {
            throw new Error("not a HarvestRewardsForAsset type");
        }
        return HarvestRewardsForAsset.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), dsuiHarvested: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_harvested), gemsHarvested: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_harvested) });
    }
    static fromBcs(data) { return HarvestRewardsForAsset.fromFields(HarvestRewardsForAsset.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), dsuiHarvested: this.dsuiHarvested.toString(), gemsHarvested: this.gemsHarvested.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HarvestRewardsForAsset.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), dsuiHarvested: (0, reified_1.decodeFromJSONField)("u64", field.dsuiHarvested), gemsHarvested: (0, reified_1.decodeFromJSONField)("u64", field.gemsHarvested) }); }
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
        return HarvestRewardsForAsset.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HarvestRewardsForAsset = HarvestRewardsForAsset;
HarvestRewardsForAsset.$typeName = `${index_1.PKG_V1}::hive_profile::HarvestRewardsForAsset`;
HarvestRewardsForAsset.$numTypeParams = 0;
HarvestRewardsForAsset.$isPhantom = [];
/* ============================== HighestBidListingUnsold =============================== */
function isHighestBidListingUnsold(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HighestBidListingUnsold`; }
class HighestBidListingUnsold {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HighestBidListingUnsold.$typeName;
        this.$isPhantom = HighestBidListingUnsold.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HighestBidListingUnsold.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.listedByProfile = fields.listedByProfile;
    }
    static reified() { return { typeName: HighestBidListingUnsold.$typeName, fullTypeName: (0, util_1.composeSuiType)(HighestBidListingUnsold.$typeName, ...[]), typeArgs: [], isPhantom: HighestBidListingUnsold.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HighestBidListingUnsold.fromFields(fields), fromFieldsWithTypes: (item) => HighestBidListingUnsold.fromFieldsWithTypes(item), fromBcs: (data) => HighestBidListingUnsold.fromBcs(data), bcs: HighestBidListingUnsold.bcs, fromJSONField: (field) => HighestBidListingUnsold.fromJSONField(field), fromJSON: (json) => HighestBidListingUnsold.fromJSON(json), fromSuiParsedData: (content) => HighestBidListingUnsold.fromSuiParsedData(content), fetch: async (client, id) => HighestBidListingUnsold.fetch(client, id), new: (fields) => { return new HighestBidListingUnsold([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HighestBidListingUnsold.reified(); }
    static phantom() { return (0, reified_1.phantom)(HighestBidListingUnsold.reified()); }
    static get p() { return HighestBidListingUnsold.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HighestBidListingUnsold", {
            version: bcs_1.bcs.u64(), listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
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
        return HighestBidListingUnsold.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HighestBidListingUnsold = HighestBidListingUnsold;
HighestBidListingUnsold.$typeName = `${index_1.PKG_V1}::hive_profile::HighestBidListingUnsold`;
HighestBidListingUnsold.$numTypeParams = 0;
HighestBidListingUnsold.$isPhantom = [];
/* ============================== HiveAccessPaymentProcessed =============================== */
function isHiveAccessPaymentProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAccessPaymentProcessed`; }
class HiveAccessPaymentProcessed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAccessPaymentProcessed.$typeName;
        this.$isPhantom = HiveAccessPaymentProcessed.$isPhantom;
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
        ;
        this.nextPaymentTimestamp = fields.nextPaymentTimestamp;
    }
    static reified() { return { typeName: HiveAccessPaymentProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAccessPaymentProcessed.$typeName, ...[]), typeArgs: [], isPhantom: HiveAccessPaymentProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAccessPaymentProcessed.fromFields(fields), fromFieldsWithTypes: (item) => HiveAccessPaymentProcessed.fromFieldsWithTypes(item), fromBcs: (data) => HiveAccessPaymentProcessed.fromBcs(data), bcs: HiveAccessPaymentProcessed.bcs, fromJSONField: (field) => HiveAccessPaymentProcessed.fromJSONField(field), fromJSON: (json) => HiveAccessPaymentProcessed.fromJSON(json), fromSuiParsedData: (content) => HiveAccessPaymentProcessed.fromSuiParsedData(content), fetch: async (client, id) => HiveAccessPaymentProcessed.fetch(client, id), new: (fields) => { return new HiveAccessPaymentProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAccessPaymentProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAccessPaymentProcessed.reified()); }
    static get p() { return HiveAccessPaymentProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAccessPaymentProcessed", {
            subscriber_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), hive_owner_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), access_type: bcs_1.bcs.u8(), access_cost: bcs_1.bcs.u64(), hive_twap_price: bcs_1.bcs.u256(), gems_to_transfer_amt: bcs_1.bcs.u64(), total_royalty_amt: bcs_1.bcs.u64(), treasury_amt: bcs_1.bcs.u64(), gems_burnt: bcs_1.bcs.u64(), next_payment_timestamp: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAccessPaymentProcessed.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFields)("address", fields.subscriber_profile_addr), hiveOwnerProfile: (0, reified_1.decodeFromFields)("address", fields.hive_owner_profile), accessType: (0, reified_1.decodeFromFields)("u8", fields.access_type), accessCost: (0, reified_1.decodeFromFields)("u64", fields.access_cost), hiveTwapPrice: (0, reified_1.decodeFromFields)("u256", fields.hive_twap_price), gemsToTransferAmt: (0, reified_1.decodeFromFields)("u64", fields.gems_to_transfer_amt), totalRoyaltyAmt: (0, reified_1.decodeFromFields)("u64", fields.total_royalty_amt), treasuryAmt: (0, reified_1.decodeFromFields)("u64", fields.treasury_amt), gemsBurnt: (0, reified_1.decodeFromFields)("u64", fields.gems_burnt), nextPaymentTimestamp: (0, reified_1.decodeFromFields)("u64", fields.next_payment_timestamp) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAccessPaymentProcessed(item.type)) {
            throw new Error("not a HiveAccessPaymentProcessed type");
        }
        return HiveAccessPaymentProcessed.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.subscriber_profile_addr), hiveOwnerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.hive_owner_profile), accessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.access_type), accessCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.access_cost), hiveTwapPrice: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_twap_price), gemsToTransferAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_to_transfer_amt), totalRoyaltyAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_royalty_amt), treasuryAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_amt), gemsBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_burnt), nextPaymentTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_payment_timestamp) });
    }
    static fromBcs(data) { return HiveAccessPaymentProcessed.fromFields(HiveAccessPaymentProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            subscriberProfileAddr: this.subscriberProfileAddr, hiveOwnerProfile: this.hiveOwnerProfile, accessType: this.accessType, accessCost: this.accessCost.toString(), hiveTwapPrice: this.hiveTwapPrice.toString(), gemsToTransferAmt: this.gemsToTransferAmt.toString(), totalRoyaltyAmt: this.totalRoyaltyAmt.toString(), treasuryAmt: this.treasuryAmt.toString(), gemsBurnt: this.gemsBurnt.toString(), nextPaymentTimestamp: this.nextPaymentTimestamp.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAccessPaymentProcessed.reified().new({ subscriberProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.subscriberProfileAddr), hiveOwnerProfile: (0, reified_1.decodeFromJSONField)("address", field.hiveOwnerProfile), accessType: (0, reified_1.decodeFromJSONField)("u8", field.accessType), accessCost: (0, reified_1.decodeFromJSONField)("u64", field.accessCost), hiveTwapPrice: (0, reified_1.decodeFromJSONField)("u256", field.hiveTwapPrice), gemsToTransferAmt: (0, reified_1.decodeFromJSONField)("u64", field.gemsToTransferAmt), totalRoyaltyAmt: (0, reified_1.decodeFromJSONField)("u64", field.totalRoyaltyAmt), treasuryAmt: (0, reified_1.decodeFromJSONField)("u64", field.treasuryAmt), gemsBurnt: (0, reified_1.decodeFromJSONField)("u64", field.gemsBurnt), nextPaymentTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.nextPaymentTimestamp) }); }
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
        return HiveAccessPaymentProcessed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAccessPaymentProcessed = HiveAccessPaymentProcessed;
HiveAccessPaymentProcessed.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAccessPaymentProcessed`;
HiveAccessPaymentProcessed.$numTypeParams = 0;
HiveAccessPaymentProcessed.$isPhantom = [];
/* ============================== HiveAccessPlanUpdated =============================== */
function isHiveAccessPlanUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAccessPlanUpdated`; }
class HiveAccessPlanUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAccessPlanUpdated.$typeName;
        this.$isPhantom = HiveAccessPlanUpdated.$isPhantom;
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
    static reified() { return { typeName: HiveAccessPlanUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAccessPlanUpdated.$typeName, ...[]), typeArgs: [], isPhantom: HiveAccessPlanUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAccessPlanUpdated.fromFields(fields), fromFieldsWithTypes: (item) => HiveAccessPlanUpdated.fromFieldsWithTypes(item), fromBcs: (data) => HiveAccessPlanUpdated.fromBcs(data), bcs: HiveAccessPlanUpdated.bcs, fromJSONField: (field) => HiveAccessPlanUpdated.fromJSONField(field), fromJSON: (json) => HiveAccessPlanUpdated.fromJSON(json), fromSuiParsedData: (content) => HiveAccessPlanUpdated.fromSuiParsedData(content), fetch: async (client, id) => HiveAccessPlanUpdated.fetch(client, id), new: (fields) => { return new HiveAccessPlanUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAccessPlanUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAccessPlanUpdated.reified()); }
    static get p() { return HiveAccessPlanUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAccessPlanUpdated", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_3.String.bcs, new_worker_access_cost: bcs_1.bcs.u64(), new_drone_access_cost: bcs_1.bcs.u64(), new_queen_access_cost: bcs_1.bcs.u64()
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
        return HiveAccessPlanUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAccessPlanUpdated = HiveAccessPlanUpdated;
HiveAccessPlanUpdated.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAccessPlanUpdated`;
HiveAccessPlanUpdated.$numTypeParams = 0;
HiveAccessPlanUpdated.$isPhantom = [];
/* ============================== HiveAddedForHarvest =============================== */
function isHiveAddedForHarvest(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAddedForHarvest`; }
class HiveAddedForHarvest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAddedForHarvest.$typeName;
        this.$isPhantom = HiveAddedForHarvest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAddedForHarvest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.yieldAdded = fields.yieldAdded;
    }
    static reified() { return { typeName: HiveAddedForHarvest.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAddedForHarvest.$typeName, ...[]), typeArgs: [], isPhantom: HiveAddedForHarvest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAddedForHarvest.fromFields(fields), fromFieldsWithTypes: (item) => HiveAddedForHarvest.fromFieldsWithTypes(item), fromBcs: (data) => HiveAddedForHarvest.fromBcs(data), bcs: HiveAddedForHarvest.bcs, fromJSONField: (field) => HiveAddedForHarvest.fromJSONField(field), fromJSON: (json) => HiveAddedForHarvest.fromJSON(json), fromSuiParsedData: (content) => HiveAddedForHarvest.fromSuiParsedData(content), fetch: async (client, id) => HiveAddedForHarvest.fetch(client, id), new: (fields) => { return new HiveAddedForHarvest([], fields); }, kind: "StructClassReified", }; }
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
        return HiveAddedForHarvest.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAddedForHarvest = HiveAddedForHarvest;
HiveAddedForHarvest.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAddedForHarvest`;
HiveAddedForHarvest.$numTypeParams = 0;
HiveAddedForHarvest.$isPhantom = [];
/* ============================== HiveAddedToTreasury =============================== */
function isHiveAddedToTreasury(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAddedToTreasury`; }
class HiveAddedToTreasury {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAddedToTreasury.$typeName;
        this.$isPhantom = HiveAddedToTreasury.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAddedToTreasury.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.hiveAdded = fields.hiveAdded;
        ;
        this.totalHiveInTreasury = fields.totalHiveInTreasury;
    }
    static reified() { return { typeName: HiveAddedToTreasury.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAddedToTreasury.$typeName, ...[]), typeArgs: [], isPhantom: HiveAddedToTreasury.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAddedToTreasury.fromFields(fields), fromFieldsWithTypes: (item) => HiveAddedToTreasury.fromFieldsWithTypes(item), fromBcs: (data) => HiveAddedToTreasury.fromBcs(data), bcs: HiveAddedToTreasury.bcs, fromJSONField: (field) => HiveAddedToTreasury.fromJSONField(field), fromJSON: (json) => HiveAddedToTreasury.fromJSON(json), fromSuiParsedData: (content) => HiveAddedToTreasury.fromSuiParsedData(content), fetch: async (client, id) => HiveAddedToTreasury.fetch(client, id), new: (fields) => { return new HiveAddedToTreasury([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAddedToTreasury.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAddedToTreasury.reified()); }
    static get p() { return HiveAddedToTreasury.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAddedToTreasury", {
            hive_added: bcs_1.bcs.u64(), total_hive_in_treasury: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAddedToTreasury.reified().new({ hiveAdded: (0, reified_1.decodeFromFields)("u64", fields.hive_added), totalHiveInTreasury: (0, reified_1.decodeFromFields)("u64", fields.total_hive_in_treasury) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAddedToTreasury(item.type)) {
            throw new Error("not a HiveAddedToTreasury type");
        }
        return HiveAddedToTreasury.reified().new({ hiveAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_added), totalHiveInTreasury: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_hive_in_treasury) });
    }
    static fromBcs(data) { return HiveAddedToTreasury.fromFields(HiveAddedToTreasury.bcs.parse(data)); }
    toJSONField() {
        return {
            hiveAdded: this.hiveAdded.toString(), totalHiveInTreasury: this.totalHiveInTreasury.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAddedToTreasury.reified().new({ hiveAdded: (0, reified_1.decodeFromJSONField)("u64", field.hiveAdded), totalHiveInTreasury: (0, reified_1.decodeFromJSONField)("u64", field.totalHiveInTreasury) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAddedToTreasury.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAddedToTreasury.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAddedToTreasury(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAddedToTreasury object`);
    } return HiveAddedToTreasury.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAddedToTreasury object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAddedToTreasury(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAddedToTreasury object`);
        }
        return HiveAddedToTreasury.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAddedToTreasury = HiveAddedToTreasury;
HiveAddedToTreasury.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAddedToTreasury`;
HiveAddedToTreasury.$numTypeParams = 0;
HiveAddedToTreasury.$isPhantom = [];
/* ============================== HiveAppAccessCapability =============================== */
function isHiveAppAccessCapability(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAppAccessCapability`; }
class HiveAppAccessCapability {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAppAccessCapability.$typeName;
        this.$isPhantom = HiveAppAccessCapability.$isPhantom;
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
    static reified() { return { typeName: HiveAppAccessCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAppAccessCapability.$typeName, ...[]), typeArgs: [], isPhantom: HiveAppAccessCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAppAccessCapability.fromFields(fields), fromFieldsWithTypes: (item) => HiveAppAccessCapability.fromFieldsWithTypes(item), fromBcs: (data) => HiveAppAccessCapability.fromBcs(data), bcs: HiveAppAccessCapability.bcs, fromJSONField: (field) => HiveAppAccessCapability.fromJSONField(field), fromJSON: (json) => HiveAppAccessCapability.fromJSON(json), fromSuiParsedData: (content) => HiveAppAccessCapability.fromSuiParsedData(content), fetch: async (client, id) => HiveAppAccessCapability.fetch(client, id), new: (fields) => { return new HiveAppAccessCapability([], fields); }, kind: "StructClassReified", }; }
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
        return HiveAppAccessCapability.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAppAccessCapability = HiveAppAccessCapability;
HiveAppAccessCapability.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAppAccessCapability`;
HiveAppAccessCapability.$numTypeParams = 0;
HiveAppAccessCapability.$isPhantom = [];
/* ============================== HiveAsset =============================== */
function isHiveAsset(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAsset`; }
class HiveAsset {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAsset.$typeName;
        this.$isPhantom = HiveAsset.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
        ;
        this.power = fields.power;
        ;
        this.kioskAddr = fields.kioskAddr;
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
        this.hiveClaimIndex = fields.hiveClaimIndex;
        ;
        this.totalDsuiClaimed = fields.totalDsuiClaimed;
        ;
        this.totalGemsClaimed = fields.totalGemsClaimed;
        ;
        this.activeApps = fields.activeApps;
    }
    static reified() { return { typeName: HiveAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAsset.$typeName, ...[]), typeArgs: [], isPhantom: HiveAsset.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAsset.fromFields(fields), fromFieldsWithTypes: (item) => HiveAsset.fromFieldsWithTypes(item), fromBcs: (data) => HiveAsset.fromBcs(data), bcs: HiveAsset.bcs, fromJSONField: (field) => HiveAsset.fromJSONField(field), fromJSON: (json) => HiveAsset.fromJSON(json), fromSuiParsedData: (content) => HiveAsset.fromSuiParsedData(content), fetch: async (client, id) => HiveAsset.fetch(client, id), new: (fields) => { return new HiveAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAsset.reified()); }
    static get p() { return HiveAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAsset", {
            id: structs_6.UID.bcs, version: bcs_1.bcs.u64(), power: bcs_1.bcs.u64(), kiosk_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), name: structs_3.String.bcs, img_url: structs_8.Url.bcs, collection_name: structs_3.String.bcs, prompts: structs_5.LinkedTable.bcs(structs_3.String.bcs), is_borrowed: bcs_1.bcs.bool(), is_staked: bcs_1.bcs.bool(), lockup_duration: bcs_1.bcs.u8(), unlock_timestamp: bcs_1.bcs.u64(), available_gems: structs_10.HiveGems.bcs, claim_index: bcs_1.bcs.u256(), hive_claim_index: bcs_1.bcs.u256(), total_dsui_claimed: bcs_1.bcs.u64(), total_gems_claimed: bcs_1.bcs.u64(), active_apps: bcs_1.bcs.vector(structs_1.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return HiveAsset.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u64", fields.version), power: (0, reified_1.decodeFromFields)("u64", fields.power), kioskAddr: (0, reified_1.decodeFromFields)("address", fields.kiosk_addr), name: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.name), imgUrl: (0, reified_1.decodeFromFields)(structs_8.Url.reified(), fields.img_url), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), prompts: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(structs_3.String.reified())), fields.prompts), isBorrowed: (0, reified_1.decodeFromFields)("bool", fields.is_borrowed), isStaked: (0, reified_1.decodeFromFields)("bool", fields.is_staked), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), unlockTimestamp: (0, reified_1.decodeFromFields)("u64", fields.unlock_timestamp), availableGems: (0, reified_1.decodeFromFields)(structs_10.HiveGems.reified(), fields.available_gems), claimIndex: (0, reified_1.decodeFromFields)("u256", fields.claim_index), hiveClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.hive_claim_index), totalDsuiClaimed: (0, reified_1.decodeFromFields)("u64", fields.total_dsui_claimed), totalGemsClaimed: (0, reified_1.decodeFromFields)("u64", fields.total_gems_claimed), activeApps: (0, reified_1.decodeFromFields)(reified.vector(structs_1.String.reified()), fields.active_apps) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAsset(item.type)) {
            throw new Error("not a HiveAsset type");
        }
        return HiveAsset.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), power: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.power), kioskAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.kiosk_addr), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.name), imgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.Url.reified(), item.fields.img_url), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), prompts: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(structs_3.String.reified())), item.fields.prompts), isBorrowed: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_borrowed), isStaked: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_staked), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), unlockTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlock_timestamp), availableGems: (0, reified_1.decodeFromFieldsWithTypes)(structs_10.HiveGems.reified(), item.fields.available_gems), claimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.claim_index), hiveClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_claim_index), totalDsuiClaimed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_dsui_claimed), totalGemsClaimed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_gems_claimed), activeApps: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_1.String.reified()), item.fields.active_apps) });
    }
    static fromBcs(data) { return HiveAsset.fromFields(HiveAsset.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, version: this.version.toString(), power: this.power.toString(), kioskAddr: this.kioskAddr, name: this.name, imgUrl: this.imgUrl, collectionName: this.collectionName, prompts: this.prompts.toJSONField(), isBorrowed: this.isBorrowed, isStaked: this.isStaked, lockupDuration: this.lockupDuration, unlockTimestamp: this.unlockTimestamp.toString(), availableGems: this.availableGems.toJSONField(), claimIndex: this.claimIndex.toString(), hiveClaimIndex: this.hiveClaimIndex.toString(), totalDsuiClaimed: this.totalDsuiClaimed.toString(), totalGemsClaimed: this.totalGemsClaimed.toString(), activeApps: (0, reified_1.fieldToJSON)(`vector<${structs_1.String.$typeName}>`, this.activeApps),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAsset.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u64", field.version), power: (0, reified_1.decodeFromJSONField)("u64", field.power), kioskAddr: (0, reified_1.decodeFromJSONField)("address", field.kioskAddr), name: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.name), imgUrl: (0, reified_1.decodeFromJSONField)(structs_8.Url.reified(), field.imgUrl), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), prompts: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(structs_3.String.reified())), field.prompts), isBorrowed: (0, reified_1.decodeFromJSONField)("bool", field.isBorrowed), isStaked: (0, reified_1.decodeFromJSONField)("bool", field.isStaked), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), unlockTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.unlockTimestamp), availableGems: (0, reified_1.decodeFromJSONField)(structs_10.HiveGems.reified(), field.availableGems), claimIndex: (0, reified_1.decodeFromJSONField)("u256", field.claimIndex), hiveClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.hiveClaimIndex), totalDsuiClaimed: (0, reified_1.decodeFromJSONField)("u64", field.totalDsuiClaimed), totalGemsClaimed: (0, reified_1.decodeFromJSONField)("u64", field.totalGemsClaimed), activeApps: (0, reified_1.decodeFromJSONField)(reified.vector(structs_1.String.reified()), field.activeApps) }); }
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
        return HiveAsset.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAsset = HiveAsset;
HiveAsset.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAsset`;
HiveAsset.$numTypeParams = 0;
HiveAsset.$isPhantom = [];
/* ============================== HiveAssetBorrowed =============================== */
function isHiveAssetBorrowed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAssetBorrowed`; }
class HiveAssetBorrowed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAssetBorrowed.$typeName;
        this.$isPhantom = HiveAssetBorrowed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetBorrowed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.borrowerProfile = fields.borrowerProfile;
        ;
        this.lenderProfile = fields.lenderProfile;
        ;
        this.borrowPriceDsui = fields.borrowPriceDsui;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.borrowStartSec = fields.borrowStartSec;
        ;
        this.borrowExpSec = fields.borrowExpSec;
    }
    static reified() { return { typeName: HiveAssetBorrowed.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetBorrowed.$typeName, ...[]), typeArgs: [], isPhantom: HiveAssetBorrowed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAssetBorrowed.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetBorrowed.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetBorrowed.fromBcs(data), bcs: HiveAssetBorrowed.bcs, fromJSONField: (field) => HiveAssetBorrowed.fromJSONField(field), fromJSON: (json) => HiveAssetBorrowed.fromJSON(json), fromSuiParsedData: (content) => HiveAssetBorrowed.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetBorrowed.fetch(client, id), new: (fields) => { return new HiveAssetBorrowed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetBorrowed.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetBorrowed.reified()); }
    static get p() { return HiveAssetBorrowed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetBorrowed", {
            version: bcs_1.bcs.u64(), borrower_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), lender_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), borrow_price_dsui: bcs_1.bcs.u64(), lockup_duration: bcs_1.bcs.u8(), borrow_start_sec: bcs_1.bcs.u64(), borrow_exp_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAssetBorrowed.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), borrowerProfile: (0, reified_1.decodeFromFields)("address", fields.borrower_profile), lenderProfile: (0, reified_1.decodeFromFields)("address", fields.lender_profile), borrowPriceDsui: (0, reified_1.decodeFromFields)("u64", fields.borrow_price_dsui), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), borrowStartSec: (0, reified_1.decodeFromFields)("u64", fields.borrow_start_sec), borrowExpSec: (0, reified_1.decodeFromFields)("u64", fields.borrow_exp_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAssetBorrowed(item.type)) {
            throw new Error("not a HiveAssetBorrowed type");
        }
        return HiveAssetBorrowed.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), borrowerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.borrower_profile), lenderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.lender_profile), borrowPriceDsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_price_dsui), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), borrowStartSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_start_sec), borrowExpSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.borrow_exp_sec) });
    }
    static fromBcs(data) { return HiveAssetBorrowed.fromFields(HiveAssetBorrowed.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), borrowerProfile: this.borrowerProfile, lenderProfile: this.lenderProfile, borrowPriceDsui: this.borrowPriceDsui.toString(), lockupDuration: this.lockupDuration, borrowStartSec: this.borrowStartSec.toString(), borrowExpSec: this.borrowExpSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAssetBorrowed.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), borrowerProfile: (0, reified_1.decodeFromJSONField)("address", field.borrowerProfile), lenderProfile: (0, reified_1.decodeFromJSONField)("address", field.lenderProfile), borrowPriceDsui: (0, reified_1.decodeFromJSONField)("u64", field.borrowPriceDsui), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), borrowStartSec: (0, reified_1.decodeFromJSONField)("u64", field.borrowStartSec), borrowExpSec: (0, reified_1.decodeFromJSONField)("u64", field.borrowExpSec) }); }
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
        return HiveAssetBorrowed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetBorrowed = HiveAssetBorrowed;
HiveAssetBorrowed.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAssetBorrowed`;
HiveAssetBorrowed.$numTypeParams = 0;
HiveAssetBorrowed.$isPhantom = [];
/* ============================== HiveAssetDestroyed =============================== */
function isHiveAssetDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAssetDestroyed`; }
class HiveAssetDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAssetDestroyed.$typeName;
        this.$isPhantom = HiveAssetDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.ownerProfile = fields.ownerProfile;
        ;
        this.version = fields.version;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.name = fields.name;
    }
    static reified() { return { typeName: HiveAssetDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: HiveAssetDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAssetDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetDestroyed.fromBcs(data), bcs: HiveAssetDestroyed.bcs, fromJSONField: (field) => HiveAssetDestroyed.fromJSONField(field), fromJSON: (json) => HiveAssetDestroyed.fromJSON(json), fromSuiParsedData: (content) => HiveAssetDestroyed.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetDestroyed.fetch(client, id), new: (fields) => { return new HiveAssetDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetDestroyed.reified()); }
    static get p() { return HiveAssetDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetDestroyed", {
            owner_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), version: bcs_1.bcs.u64(), collection_name: structs_3.String.bcs, name: structs_3.String.bcs
        });
    }
    ;
    static fromFields(fields) { return HiveAssetDestroyed.reified().new({ ownerProfile: (0, reified_1.decodeFromFields)("address", fields.owner_profile), version: (0, reified_1.decodeFromFields)("u64", fields.version), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), name: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.name) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAssetDestroyed(item.type)) {
            throw new Error("not a HiveAssetDestroyed type");
        }
        return HiveAssetDestroyed.reified().new({ ownerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner_profile), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.name) });
    }
    static fromBcs(data) { return HiveAssetDestroyed.fromFields(HiveAssetDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            ownerProfile: this.ownerProfile, version: this.version.toString(), collectionName: this.collectionName, name: this.name,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAssetDestroyed.reified().new({ ownerProfile: (0, reified_1.decodeFromJSONField)("address", field.ownerProfile), version: (0, reified_1.decodeFromJSONField)("u64", field.version), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), name: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.name) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAssetDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAssetDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAssetDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAssetDestroyed object`);
    } return HiveAssetDestroyed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAssetDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAssetDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAssetDestroyed object`);
        }
        return HiveAssetDestroyed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetDestroyed = HiveAssetDestroyed;
HiveAssetDestroyed.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAssetDestroyed`;
HiveAssetDestroyed.$numTypeParams = 0;
HiveAssetDestroyed.$isPhantom = [];
/* ============================== HiveAssetPortedToApp =============================== */
function isHiveAssetPortedToApp(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAssetPortedToApp`; }
class HiveAssetPortedToApp {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAssetPortedToApp.$typeName;
        this.$isPhantom = HiveAssetPortedToApp.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetPortedToApp.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.portedByProfile = fields.portedByProfile;
        ;
        this.portedByUsername = fields.portedByUsername;
        ;
        this.version = fields.version;
        ;
        this.appName = fields.appName;
    }
    static reified() { return { typeName: HiveAssetPortedToApp.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetPortedToApp.$typeName, ...[]), typeArgs: [], isPhantom: HiveAssetPortedToApp.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAssetPortedToApp.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetPortedToApp.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetPortedToApp.fromBcs(data), bcs: HiveAssetPortedToApp.bcs, fromJSONField: (field) => HiveAssetPortedToApp.fromJSONField(field), fromJSON: (json) => HiveAssetPortedToApp.fromJSON(json), fromSuiParsedData: (content) => HiveAssetPortedToApp.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetPortedToApp.fetch(client, id), new: (fields) => { return new HiveAssetPortedToApp([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetPortedToApp.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetPortedToApp.reified()); }
    static get p() { return HiveAssetPortedToApp.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetPortedToApp", {
            ported_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), ported_by_username: structs_1.String.bcs, version: bcs_1.bcs.u64(), app_name: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return HiveAssetPortedToApp.reified().new({ portedByProfile: (0, reified_1.decodeFromFields)("address", fields.ported_by_profile), portedByUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.ported_by_username), version: (0, reified_1.decodeFromFields)("u64", fields.version), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAssetPortedToApp(item.type)) {
            throw new Error("not a HiveAssetPortedToApp type");
        }
        return HiveAssetPortedToApp.reified().new({ portedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.ported_by_profile), portedByUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.ported_by_username), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name) });
    }
    static fromBcs(data) { return HiveAssetPortedToApp.fromFields(HiveAssetPortedToApp.bcs.parse(data)); }
    toJSONField() {
        return {
            portedByProfile: this.portedByProfile, portedByUsername: this.portedByUsername, version: this.version.toString(), appName: this.appName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAssetPortedToApp.reified().new({ portedByProfile: (0, reified_1.decodeFromJSONField)("address", field.portedByProfile), portedByUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.portedByUsername), version: (0, reified_1.decodeFromJSONField)("u64", field.version), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAssetPortedToApp.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAssetPortedToApp.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAssetPortedToApp(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAssetPortedToApp object`);
    } return HiveAssetPortedToApp.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAssetPortedToApp object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAssetPortedToApp(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAssetPortedToApp object`);
        }
        return HiveAssetPortedToApp.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetPortedToApp = HiveAssetPortedToApp;
HiveAssetPortedToApp.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAssetPortedToApp`;
HiveAssetPortedToApp.$numTypeParams = 0;
HiveAssetPortedToApp.$isPhantom = [];
/* ============================== HiveAssetReturnedByApp =============================== */
function isHiveAssetReturnedByApp(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAssetReturnedByApp`; }
class HiveAssetReturnedByApp {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAssetReturnedByApp.$typeName;
        this.$isPhantom = HiveAssetReturnedByApp.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetReturnedByApp.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.appName = fields.appName;
        ;
        this.recepientProfile = fields.recepientProfile;
        ;
        this.recepientUsername = fields.recepientUsername;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: HiveAssetReturnedByApp.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetReturnedByApp.$typeName, ...[]), typeArgs: [], isPhantom: HiveAssetReturnedByApp.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAssetReturnedByApp.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetReturnedByApp.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetReturnedByApp.fromBcs(data), bcs: HiveAssetReturnedByApp.bcs, fromJSONField: (field) => HiveAssetReturnedByApp.fromJSONField(field), fromJSON: (json) => HiveAssetReturnedByApp.fromJSON(json), fromSuiParsedData: (content) => HiveAssetReturnedByApp.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetReturnedByApp.fetch(client, id), new: (fields) => { return new HiveAssetReturnedByApp([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetReturnedByApp.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetReturnedByApp.reified()); }
    static get p() { return HiveAssetReturnedByApp.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetReturnedByApp", {
            app_name: structs_1.String.bcs, recepient_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), recepient_username: structs_1.String.bcs, version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveAssetReturnedByApp.reified().new({ appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name), recepientProfile: (0, reified_1.decodeFromFields)("address", fields.recepient_profile), recepientUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.recepient_username), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAssetReturnedByApp(item.type)) {
            throw new Error("not a HiveAssetReturnedByApp type");
        }
        return HiveAssetReturnedByApp.reified().new({ appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name), recepientProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.recepient_profile), recepientUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.recepient_username), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return HiveAssetReturnedByApp.fromFields(HiveAssetReturnedByApp.bcs.parse(data)); }
    toJSONField() {
        return {
            appName: this.appName, recepientProfile: this.recepientProfile, recepientUsername: this.recepientUsername, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAssetReturnedByApp.reified().new({ appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName), recepientProfile: (0, reified_1.decodeFromJSONField)("address", field.recepientProfile), recepientUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.recepientUsername), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAssetReturnedByApp.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAssetReturnedByApp.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAssetReturnedByApp(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAssetReturnedByApp object`);
    } return HiveAssetReturnedByApp.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAssetReturnedByApp object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAssetReturnedByApp(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAssetReturnedByApp object`);
        }
        return HiveAssetReturnedByApp.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetReturnedByApp = HiveAssetReturnedByApp;
HiveAssetReturnedByApp.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAssetReturnedByApp`;
HiveAssetReturnedByApp.$numTypeParams = 0;
HiveAssetReturnedByApp.$isPhantom = [];
/* ============================== HiveAssetStaked =============================== */
function isHiveAssetStaked(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAssetStaked`; }
class HiveAssetStaked {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAssetStaked.$typeName;
        this.$isPhantom = HiveAssetStaked.$isPhantom;
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
    static reified() { return { typeName: HiveAssetStaked.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetStaked.$typeName, ...[]), typeArgs: [], isPhantom: HiveAssetStaked.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAssetStaked.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetStaked.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetStaked.fromBcs(data), bcs: HiveAssetStaked.bcs, fromJSONField: (field) => HiveAssetStaked.fromJSONField(field), fromJSON: (json) => HiveAssetStaked.fromJSON(json), fromSuiParsedData: (content) => HiveAssetStaked.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetStaked.fetch(client, id), new: (fields) => { return new HiveAssetStaked([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetStaked.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetStaked.reified()); }
    static get p() { return HiveAssetStaked.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetStaked", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), version: bcs_1.bcs.u64(), duration: bcs_1.bcs.u8(), new_asset_power: bcs_1.bcs.u64(), unlock_timestamp: bcs_1.bcs.u64()
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
        return HiveAssetStaked.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetStaked = HiveAssetStaked;
HiveAssetStaked.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAssetStaked`;
HiveAssetStaked.$numTypeParams = 0;
HiveAssetStaked.$isPhantom = [];
/* ============================== HiveAssetTransfered =============================== */
function isHiveAssetTransfered(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAssetTransfered`; }
class HiveAssetTransfered {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAssetTransfered.$typeName;
        this.$isPhantom = HiveAssetTransfered.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetTransfered.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.fromProfile = fields.fromProfile;
        ;
        this.toProfile = fields.toProfile;
    }
    static reified() { return { typeName: HiveAssetTransfered.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetTransfered.$typeName, ...[]), typeArgs: [], isPhantom: HiveAssetTransfered.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAssetTransfered.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetTransfered.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetTransfered.fromBcs(data), bcs: HiveAssetTransfered.bcs, fromJSONField: (field) => HiveAssetTransfered.fromJSONField(field), fromJSON: (json) => HiveAssetTransfered.fromJSON(json), fromSuiParsedData: (content) => HiveAssetTransfered.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetTransfered.fetch(client, id), new: (fields) => { return new HiveAssetTransfered([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetTransfered.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetTransfered.reified()); }
    static get p() { return HiveAssetTransfered.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetTransfered", {
            version: bcs_1.bcs.u64(), from_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), to_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
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
        return HiveAssetTransfered.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetTransfered = HiveAssetTransfered;
HiveAssetTransfered.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAssetTransfered`;
HiveAssetTransfered.$numTypeParams = 0;
HiveAssetTransfered.$isPhantom = [];
/* ============================== HiveAssetUnstaked =============================== */
function isHiveAssetUnstaked(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAssetUnstaked`; }
class HiveAssetUnstaked {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAssetUnstaked.$typeName;
        this.$isPhantom = HiveAssetUnstaked.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetUnstaked.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: HiveAssetUnstaked.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetUnstaked.$typeName, ...[]), typeArgs: [], isPhantom: HiveAssetUnstaked.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAssetUnstaked.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetUnstaked.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetUnstaked.fromBcs(data), bcs: HiveAssetUnstaked.bcs, fromJSONField: (field) => HiveAssetUnstaked.fromJSONField(field), fromJSON: (json) => HiveAssetUnstaked.fromJSON(json), fromSuiParsedData: (content) => HiveAssetUnstaked.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetUnstaked.fetch(client, id), new: (fields) => { return new HiveAssetUnstaked([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetUnstaked.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetUnstaked.reified()); }
    static get p() { return HiveAssetUnstaked.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetUnstaked", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), version: bcs_1.bcs.u64()
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
        return HiveAssetUnstaked.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetUnstaked = HiveAssetUnstaked;
HiveAssetUnstaked.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAssetUnstaked`;
HiveAssetUnstaked.$numTypeParams = 0;
HiveAssetUnstaked.$isPhantom = [];
/* ============================== HiveAssetUpgraded =============================== */
function isHiveAssetUpgraded(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAssetUpgraded`; }
class HiveAssetUpgraded {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAssetUpgraded.$typeName;
        this.$isPhantom = HiveAssetUpgraded.$isPhantom;
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
    static reified() { return { typeName: HiveAssetUpgraded.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetUpgraded.$typeName, ...[]), typeArgs: [], isPhantom: HiveAssetUpgraded.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAssetUpgraded.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetUpgraded.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetUpgraded.fromBcs(data), bcs: HiveAssetUpgraded.bcs, fromJSONField: (field) => HiveAssetUpgraded.fromJSONField(field), fromJSON: (json) => HiveAssetUpgraded.fromJSON(json), fromSuiParsedData: (content) => HiveAssetUpgraded.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetUpgraded.fetch(client, id), new: (fields) => { return new HiveAssetUpgraded([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetUpgraded.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetUpgraded.reified()); }
    static get p() { return HiveAssetUpgraded.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetUpgraded", {
            version: bcs_1.bcs.u64(), hive_kiosk: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), new_img_url: structs_3.String.bcs, upgrade_price: bcs_1.bcs.u64(), total_royalty_amt: bcs_1.bcs.u64(), treasury_amt: bcs_1.bcs.u64(), gems_burnt: bcs_1.bcs.u64()
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
        return HiveAssetUpgraded.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetUpgraded = HiveAssetUpgraded;
HiveAssetUpgraded.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAssetUpgraded`;
HiveAssetUpgraded.$numTypeParams = 0;
HiveAssetUpgraded.$isPhantom = [];
/* ============================== HiveAssetUpgradedViaApp =============================== */
function isHiveAssetUpgradedViaApp(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveAssetUpgradedViaApp`; }
class HiveAssetUpgradedViaApp {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAssetUpgradedViaApp.$typeName;
        this.$isPhantom = HiveAssetUpgradedViaApp.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAssetUpgradedViaApp.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.appName = fields.appName;
        ;
        this.newImgUrl = fields.newImgUrl;
        ;
        this.traitsToUpgrade = fields.traitsToUpgrade;
        ;
        this.newPrompts = fields.newPrompts;
    }
    static reified() { return { typeName: HiveAssetUpgradedViaApp.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAssetUpgradedViaApp.$typeName, ...[]), typeArgs: [], isPhantom: HiveAssetUpgradedViaApp.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAssetUpgradedViaApp.fromFields(fields), fromFieldsWithTypes: (item) => HiveAssetUpgradedViaApp.fromFieldsWithTypes(item), fromBcs: (data) => HiveAssetUpgradedViaApp.fromBcs(data), bcs: HiveAssetUpgradedViaApp.bcs, fromJSONField: (field) => HiveAssetUpgradedViaApp.fromJSONField(field), fromJSON: (json) => HiveAssetUpgradedViaApp.fromJSON(json), fromSuiParsedData: (content) => HiveAssetUpgradedViaApp.fromSuiParsedData(content), fetch: async (client, id) => HiveAssetUpgradedViaApp.fetch(client, id), new: (fields) => { return new HiveAssetUpgradedViaApp([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveAssetUpgradedViaApp.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveAssetUpgradedViaApp.reified()); }
    static get p() { return HiveAssetUpgradedViaApp.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveAssetUpgradedViaApp", {
            version: bcs_1.bcs.u64(), app_name: structs_1.String.bcs, new_img_url: structs_3.String.bcs, traits_to_upgrade: bcs_1.bcs.vector(structs_3.String.bcs), new_prompts: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return HiveAssetUpgradedViaApp.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name), newImgUrl: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.new_img_url), traitsToUpgrade: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.traits_to_upgrade), newPrompts: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.new_prompts) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveAssetUpgradedViaApp(item.type)) {
            throw new Error("not a HiveAssetUpgradedViaApp type");
        }
        return HiveAssetUpgradedViaApp.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name), newImgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.new_img_url), traitsToUpgrade: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.traits_to_upgrade), newPrompts: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.new_prompts) });
    }
    static fromBcs(data) { return HiveAssetUpgradedViaApp.fromFields(HiveAssetUpgradedViaApp.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), appName: this.appName, newImgUrl: this.newImgUrl, traitsToUpgrade: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.traitsToUpgrade), newPrompts: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.newPrompts),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveAssetUpgradedViaApp.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName), newImgUrl: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.newImgUrl), traitsToUpgrade: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.traitsToUpgrade), newPrompts: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.newPrompts) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveAssetUpgradedViaApp.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveAssetUpgradedViaApp.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveAssetUpgradedViaApp(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveAssetUpgradedViaApp object`);
    } return HiveAssetUpgradedViaApp.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAssetUpgradedViaApp object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAssetUpgradedViaApp(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAssetUpgradedViaApp object`);
        }
        return HiveAssetUpgradedViaApp.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveAssetUpgradedViaApp = HiveAssetUpgradedViaApp;
HiveAssetUpgradedViaApp.$typeName = `${index_1.PKG_V1}::hive_profile::HiveAssetUpgradedViaApp`;
HiveAssetUpgradedViaApp.$numTypeParams = 0;
HiveAssetUpgradedViaApp.$isPhantom = [];
/* ============================== HiveDisperser =============================== */
function isHiveDisperser(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveDisperser`; }
class HiveDisperser {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveDisperser.$typeName;
        this.$isPhantom = HiveDisperser.$isPhantom;
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
    static reified() { return { typeName: HiveDisperser.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveDisperser.$typeName, ...[]), typeArgs: [], isPhantom: HiveDisperser.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveDisperser.fromFields(fields), fromFieldsWithTypes: (item) => HiveDisperser.fromFieldsWithTypes(item), fromBcs: (data) => HiveDisperser.fromBcs(data), bcs: HiveDisperser.bcs, fromJSONField: (field) => HiveDisperser.fromJSONField(field), fromJSON: (json) => HiveDisperser.fromJSON(json), fromSuiParsedData: (content) => HiveDisperser.fromSuiParsedData(content), fetch: async (client, id) => HiveDisperser.fetch(client, id), new: (fields) => { return new HiveDisperser([], fields); }, kind: "StructClassReified", }; }
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
        return HiveDisperser.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveDisperser = HiveDisperser;
HiveDisperser.$typeName = `${index_1.PKG_V1}::hive_profile::HiveDisperser`;
HiveDisperser.$numTypeParams = 0;
HiveDisperser.$isPhantom = [];
/* ============================== HiveGemsDepositedIntoAsset =============================== */
function isHiveGemsDepositedIntoAsset(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveGemsDepositedIntoAsset`; }
class HiveGemsDepositedIntoAsset {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveGemsDepositedIntoAsset.$typeName;
        this.$isPhantom = HiveGemsDepositedIntoAsset.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveGemsDepositedIntoAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profile = fields.profile;
        ;
        this.version = fields.version;
        ;
        this.gemsDeposited = fields.gemsDeposited;
    }
    static reified() { return { typeName: HiveGemsDepositedIntoAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGemsDepositedIntoAsset.$typeName, ...[]), typeArgs: [], isPhantom: HiveGemsDepositedIntoAsset.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveGemsDepositedIntoAsset.fromFields(fields), fromFieldsWithTypes: (item) => HiveGemsDepositedIntoAsset.fromFieldsWithTypes(item), fromBcs: (data) => HiveGemsDepositedIntoAsset.fromBcs(data), bcs: HiveGemsDepositedIntoAsset.bcs, fromJSONField: (field) => HiveGemsDepositedIntoAsset.fromJSONField(field), fromJSON: (json) => HiveGemsDepositedIntoAsset.fromJSON(json), fromSuiParsedData: (content) => HiveGemsDepositedIntoAsset.fromSuiParsedData(content), fetch: async (client, id) => HiveGemsDepositedIntoAsset.fetch(client, id), new: (fields) => { return new HiveGemsDepositedIntoAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGemsDepositedIntoAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGemsDepositedIntoAsset.reified()); }
    static get p() { return HiveGemsDepositedIntoAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGemsDepositedIntoAsset", {
            profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), version: bcs_1.bcs.u64(), gems_deposited: bcs_1.bcs.u64()
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
        return HiveGemsDepositedIntoAsset.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveGemsDepositedIntoAsset = HiveGemsDepositedIntoAsset;
HiveGemsDepositedIntoAsset.$typeName = `${index_1.PKG_V1}::hive_profile::HiveGemsDepositedIntoAsset`;
HiveGemsDepositedIntoAsset.$numTypeParams = 0;
HiveGemsDepositedIntoAsset.$isPhantom = [];
/* ============================== HiveGemsPortedToApp =============================== */
function isHiveGemsPortedToApp(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveGemsPortedToApp`; }
class HiveGemsPortedToApp {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveGemsPortedToApp.$typeName;
        this.$isPhantom = HiveGemsPortedToApp.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveGemsPortedToApp.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.portedByProfile = fields.portedByProfile;
        ;
        this.portedByUsername = fields.portedByUsername;
        ;
        this.version = fields.version;
        ;
        this.appName = fields.appName;
        ;
        this.gemsPorted = fields.gemsPorted;
    }
    static reified() { return { typeName: HiveGemsPortedToApp.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGemsPortedToApp.$typeName, ...[]), typeArgs: [], isPhantom: HiveGemsPortedToApp.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveGemsPortedToApp.fromFields(fields), fromFieldsWithTypes: (item) => HiveGemsPortedToApp.fromFieldsWithTypes(item), fromBcs: (data) => HiveGemsPortedToApp.fromBcs(data), bcs: HiveGemsPortedToApp.bcs, fromJSONField: (field) => HiveGemsPortedToApp.fromJSONField(field), fromJSON: (json) => HiveGemsPortedToApp.fromJSON(json), fromSuiParsedData: (content) => HiveGemsPortedToApp.fromSuiParsedData(content), fetch: async (client, id) => HiveGemsPortedToApp.fetch(client, id), new: (fields) => { return new HiveGemsPortedToApp([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGemsPortedToApp.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGemsPortedToApp.reified()); }
    static get p() { return HiveGemsPortedToApp.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGemsPortedToApp", {
            ported_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), ported_by_username: structs_1.String.bcs, version: bcs_1.bcs.u64(), app_name: structs_1.String.bcs, gems_ported: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveGemsPortedToApp.reified().new({ portedByProfile: (0, reified_1.decodeFromFields)("address", fields.ported_by_profile), portedByUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.ported_by_username), version: (0, reified_1.decodeFromFields)("u64", fields.version), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name), gemsPorted: (0, reified_1.decodeFromFields)("u64", fields.gems_ported) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveGemsPortedToApp(item.type)) {
            throw new Error("not a HiveGemsPortedToApp type");
        }
        return HiveGemsPortedToApp.reified().new({ portedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.ported_by_profile), portedByUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.ported_by_username), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name), gemsPorted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_ported) });
    }
    static fromBcs(data) { return HiveGemsPortedToApp.fromFields(HiveGemsPortedToApp.bcs.parse(data)); }
    toJSONField() {
        return {
            portedByProfile: this.portedByProfile, portedByUsername: this.portedByUsername, version: this.version.toString(), appName: this.appName, gemsPorted: this.gemsPorted.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveGemsPortedToApp.reified().new({ portedByProfile: (0, reified_1.decodeFromJSONField)("address", field.portedByProfile), portedByUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.portedByUsername), version: (0, reified_1.decodeFromJSONField)("u64", field.version), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName), gemsPorted: (0, reified_1.decodeFromJSONField)("u64", field.gemsPorted) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveGemsPortedToApp.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveGemsPortedToApp.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveGemsPortedToApp(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveGemsPortedToApp object`);
    } return HiveGemsPortedToApp.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveGemsPortedToApp object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveGemsPortedToApp(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveGemsPortedToApp object`);
        }
        return HiveGemsPortedToApp.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveGemsPortedToApp = HiveGemsPortedToApp;
HiveGemsPortedToApp.$typeName = `${index_1.PKG_V1}::hive_profile::HiveGemsPortedToApp`;
HiveGemsPortedToApp.$numTypeParams = 0;
HiveGemsPortedToApp.$isPhantom = [];
/* ============================== HiveGemsTransfered =============================== */
function isHiveGemsTransfered(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveGemsTransfered`; }
class HiveGemsTransfered {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveGemsTransfered.$typeName;
        this.$isPhantom = HiveGemsTransfered.$isPhantom;
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
    static reified() { return { typeName: HiveGemsTransfered.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGemsTransfered.$typeName, ...[]), typeArgs: [], isPhantom: HiveGemsTransfered.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveGemsTransfered.fromFields(fields), fromFieldsWithTypes: (item) => HiveGemsTransfered.fromFieldsWithTypes(item), fromBcs: (data) => HiveGemsTransfered.fromBcs(data), bcs: HiveGemsTransfered.bcs, fromJSONField: (field) => HiveGemsTransfered.fromJSONField(field), fromJSON: (json) => HiveGemsTransfered.fromJSON(json), fromSuiParsedData: (content) => HiveGemsTransfered.fromSuiParsedData(content), fetch: async (client, id) => HiveGemsTransfered.fetch(client, id), new: (fields) => { return new HiveGemsTransfered([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGemsTransfered.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGemsTransfered.reified()); }
    static get p() { return HiveGemsTransfered.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGemsTransfered", {
            from_username: structs_1.String.bcs, to_username: structs_1.String.bcs, from_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), to_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), gems_transferred: bcs_1.bcs.u64()
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
        return HiveGemsTransfered.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveGemsTransfered = HiveGemsTransfered;
HiveGemsTransfered.$typeName = `${index_1.PKG_V1}::hive_profile::HiveGemsTransfered`;
HiveGemsTransfered.$numTypeParams = 0;
HiveGemsTransfered.$isPhantom = [];
/* ============================== HiveGemsWithdrawnAsset =============================== */
function isHiveGemsWithdrawnAsset(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveGemsWithdrawnAsset`; }
class HiveGemsWithdrawnAsset {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveGemsWithdrawnAsset.$typeName;
        this.$isPhantom = HiveGemsWithdrawnAsset.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveGemsWithdrawnAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.version = fields.version;
        ;
        this.gemsWithdrawn = fields.gemsWithdrawn;
        ;
        this.totalRoyaltyAmt = fields.totalRoyaltyAmt;
        ;
        this.gemsWithdrawnAfterRoyalty = fields.gemsWithdrawnAfterRoyalty;
        ;
        this.treasuryAmt = fields.treasuryAmt;
        ;
        this.gemsBurnt = fields.gemsBurnt;
    }
    static reified() { return { typeName: HiveGemsWithdrawnAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGemsWithdrawnAsset.$typeName, ...[]), typeArgs: [], isPhantom: HiveGemsWithdrawnAsset.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveGemsWithdrawnAsset.fromFields(fields), fromFieldsWithTypes: (item) => HiveGemsWithdrawnAsset.fromFieldsWithTypes(item), fromBcs: (data) => HiveGemsWithdrawnAsset.fromBcs(data), bcs: HiveGemsWithdrawnAsset.bcs, fromJSONField: (field) => HiveGemsWithdrawnAsset.fromJSONField(field), fromJSON: (json) => HiveGemsWithdrawnAsset.fromJSON(json), fromSuiParsedData: (content) => HiveGemsWithdrawnAsset.fromSuiParsedData(content), fetch: async (client, id) => HiveGemsWithdrawnAsset.fetch(client, id), new: (fields) => { return new HiveGemsWithdrawnAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGemsWithdrawnAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGemsWithdrawnAsset.reified()); }
    static get p() { return HiveGemsWithdrawnAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGemsWithdrawnAsset", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), version: bcs_1.bcs.u64(), gems_withdrawn: bcs_1.bcs.u64(), total_royalty_amt: bcs_1.bcs.u64(), gems_withdrawn_after_royalty: bcs_1.bcs.u64(), treasury_amt: bcs_1.bcs.u64(), gems_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveGemsWithdrawnAsset.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), version: (0, reified_1.decodeFromFields)("u64", fields.version), gemsWithdrawn: (0, reified_1.decodeFromFields)("u64", fields.gems_withdrawn), totalRoyaltyAmt: (0, reified_1.decodeFromFields)("u64", fields.total_royalty_amt), gemsWithdrawnAfterRoyalty: (0, reified_1.decodeFromFields)("u64", fields.gems_withdrawn_after_royalty), treasuryAmt: (0, reified_1.decodeFromFields)("u64", fields.treasury_amt), gemsBurnt: (0, reified_1.decodeFromFields)("u64", fields.gems_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveGemsWithdrawnAsset(item.type)) {
            throw new Error("not a HiveGemsWithdrawnAsset type");
        }
        return HiveGemsWithdrawnAsset.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), gemsWithdrawn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_withdrawn), totalRoyaltyAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_royalty_amt), gemsWithdrawnAfterRoyalty: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_withdrawn_after_royalty), treasuryAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_amt), gemsBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_burnt) });
    }
    static fromBcs(data) { return HiveGemsWithdrawnAsset.fromFields(HiveGemsWithdrawnAsset.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, version: this.version.toString(), gemsWithdrawn: this.gemsWithdrawn.toString(), totalRoyaltyAmt: this.totalRoyaltyAmt.toString(), gemsWithdrawnAfterRoyalty: this.gemsWithdrawnAfterRoyalty.toString(), treasuryAmt: this.treasuryAmt.toString(), gemsBurnt: this.gemsBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveGemsWithdrawnAsset.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), version: (0, reified_1.decodeFromJSONField)("u64", field.version), gemsWithdrawn: (0, reified_1.decodeFromJSONField)("u64", field.gemsWithdrawn), totalRoyaltyAmt: (0, reified_1.decodeFromJSONField)("u64", field.totalRoyaltyAmt), gemsWithdrawnAfterRoyalty: (0, reified_1.decodeFromJSONField)("u64", field.gemsWithdrawnAfterRoyalty), treasuryAmt: (0, reified_1.decodeFromJSONField)("u64", field.treasuryAmt), gemsBurnt: (0, reified_1.decodeFromJSONField)("u64", field.gemsBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveGemsWithdrawnAsset.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveGemsWithdrawnAsset.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveGemsWithdrawnAsset(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveGemsWithdrawnAsset object`);
    } return HiveGemsWithdrawnAsset.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveGemsWithdrawnAsset object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveGemsWithdrawnAsset(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveGemsWithdrawnAsset object`);
        }
        return HiveGemsWithdrawnAsset.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveGemsWithdrawnAsset = HiveGemsWithdrawnAsset;
HiveGemsWithdrawnAsset.$typeName = `${index_1.PKG_V1}::hive_profile::HiveGemsWithdrawnAsset`;
HiveGemsWithdrawnAsset.$numTypeParams = 0;
HiveGemsWithdrawnAsset.$isPhantom = [];
/* ============================== HiveKiosk =============================== */
function isHiveKiosk(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveKiosk`; }
class HiveKiosk {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveKiosk.$typeName;
        this.$isPhantom = HiveKiosk.$isPhantom;
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
        this.poolPct = fields.poolPct;
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
    static reified() { return { typeName: HiveKiosk.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveKiosk.$typeName, ...[]), typeArgs: [], isPhantom: HiveKiosk.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveKiosk.fromFields(fields), fromFieldsWithTypes: (item) => HiveKiosk.fromFieldsWithTypes(item), fromBcs: (data) => HiveKiosk.fromBcs(data), bcs: HiveKiosk.bcs, fromJSONField: (field) => HiveKiosk.fromJSONField(field), fromJSON: (json) => HiveKiosk.fromJSON(json), fromSuiParsedData: (content) => HiveKiosk.fromSuiParsedData(content), fetch: async (client, id) => HiveKiosk.fetch(client, id), new: (fields) => { return new HiveKiosk([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveKiosk.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveKiosk.reified()); }
    static get p() { return HiveKiosk.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveKiosk", {
            id: structs_6.UID.bcs, creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), collection_name: structs_3.String.bcs, img_url: structs_8.Url.bcs, traits_list: bcs_1.bcs.vector(structs_3.String.bcs), max_assets_limit: bcs_1.bcs.u64(), krafted_assets: bcs_1.bcs.u64(), base_price: bcs_1.bcs.u64(), curve_a: bcs_1.bcs.u64(), pool_pct: bcs_1.bcs.u64(), prompts_list: bcs_1.bcs.vector(bcs_1.bcs.vector(structs_3.String.bcs)), url_list: bcs_1.bcs.vector(structs_3.String.bcs), names_list: bcs_1.bcs.vector(structs_3.String.bcs), krafted_versions_map: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), kraft_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64(), available_upgrades: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveKiosk.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), imgUrl: (0, reified_1.decodeFromFields)(structs_8.Url.reified(), fields.img_url), traitsList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.traits_list), maxAssetsLimit: (0, reified_1.decodeFromFields)("u64", fields.max_assets_limit), kraftedAssets: (0, reified_1.decodeFromFields)("u64", fields.krafted_assets), basePrice: (0, reified_1.decodeFromFields)("u64", fields.base_price), curveA: (0, reified_1.decodeFromFields)("u64", fields.curve_a), poolPct: (0, reified_1.decodeFromFields)("u64", fields.pool_pct), promptsList: (0, reified_1.decodeFromFields)(reified.vector(reified.vector(structs_3.String.reified())), fields.prompts_list), urlList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.url_list), namesList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.names_list), kraftedVersionsMap: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), fields.krafted_versions_map), kraftAccess: (0, reified_1.decodeFromFields)("u8", fields.kraft_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount), availableUpgrades: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(AssetUpgrade.reified()))), fields.available_upgrades), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveKiosk(item.type)) {
            throw new Error("not a HiveKiosk type");
        }
        return HiveKiosk.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), imgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.Url.reified(), item.fields.img_url), traitsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.traits_list), maxAssetsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_assets_limit), kraftedAssets: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.krafted_assets), basePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.base_price), curveA: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.curve_a), poolPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_pct), promptsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(reified.vector(structs_3.String.reified())), item.fields.prompts_list), urlList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.url_list), namesList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.names_list), kraftedVersionsMap: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), item.fields.krafted_versions_map), kraftAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.kraft_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount), availableUpgrades: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(AssetUpgrade.reified()))), item.fields.available_upgrades), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveKiosk.fromFields(HiveKiosk.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, creatorProfile: this.creatorProfile, collectionName: this.collectionName, imgUrl: this.imgUrl, traitsList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.traitsList), maxAssetsLimit: this.maxAssetsLimit.toString(), kraftedAssets: this.kraftedAssets.toString(), basePrice: this.basePrice.toString(), curveA: this.curveA.toString(), poolPct: this.poolPct.toString(), promptsList: (0, reified_1.fieldToJSON)(`vector<vector<${structs_3.String.$typeName}>>`, this.promptsList), urlList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.urlList), namesList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.namesList), kraftedVersionsMap: this.kraftedVersionsMap.toJSONField(), kraftAccess: this.kraftAccess, discountAccess: this.discountAccess, discount: this.discount.toString(), availableUpgrades: this.availableUpgrades.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveKiosk.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), imgUrl: (0, reified_1.decodeFromJSONField)(structs_8.Url.reified(), field.imgUrl), traitsList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.traitsList), maxAssetsLimit: (0, reified_1.decodeFromJSONField)("u64", field.maxAssetsLimit), kraftedAssets: (0, reified_1.decodeFromJSONField)("u64", field.kraftedAssets), basePrice: (0, reified_1.decodeFromJSONField)("u64", field.basePrice), curveA: (0, reified_1.decodeFromJSONField)("u64", field.curveA), poolPct: (0, reified_1.decodeFromJSONField)("u64", field.poolPct), promptsList: (0, reified_1.decodeFromJSONField)(reified.vector(reified.vector(structs_3.String.reified())), field.promptsList), urlList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.urlList), namesList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.namesList), kraftedVersionsMap: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), field.kraftedVersionsMap), kraftAccess: (0, reified_1.decodeFromJSONField)("u8", field.kraftAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount), availableUpgrades: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(AssetUpgrade.reified()))), field.availableUpgrades), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
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
        return HiveKiosk.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveKiosk = HiveKiosk;
HiveKiosk.$typeName = `${index_1.PKG_V1}::hive_profile::HiveKiosk`;
HiveKiosk.$numTypeParams = 0;
HiveKiosk.$isPhantom = [];
/* ============================== HiveKioskInitialized =============================== */
function isHiveKioskInitialized(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveKioskInitialized`; }
class HiveKioskInitialized {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveKioskInitialized.$typeName;
        this.$isPhantom = HiveKioskInitialized.$isPhantom;
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
    static reified() { return { typeName: HiveKioskInitialized.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveKioskInitialized.$typeName, ...[]), typeArgs: [], isPhantom: HiveKioskInitialized.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveKioskInitialized.fromFields(fields), fromFieldsWithTypes: (item) => HiveKioskInitialized.fromFieldsWithTypes(item), fromBcs: (data) => HiveKioskInitialized.fromBcs(data), bcs: HiveKioskInitialized.bcs, fromJSONField: (field) => HiveKioskInitialized.fromJSONField(field), fromJSON: (json) => HiveKioskInitialized.fromJSON(json), fromSuiParsedData: (content) => HiveKioskInitialized.fromSuiParsedData(content), fetch: async (client, id) => HiveKioskInitialized.fetch(client, id), new: (fields) => { return new HiveKioskInitialized([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveKioskInitialized.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveKioskInitialized.reified()); }
    static get p() { return HiveKioskInitialized.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveKioskInitialized", {
            kiosk_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), time_stream: bcs_1.bcs.u64(), collection_name: structs_3.String.bcs, img_url: structs_3.String.bcs, max_assets_limit: bcs_1.bcs.u64()
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
        return HiveKioskInitialized.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveKioskInitialized = HiveKioskInitialized;
HiveKioskInitialized.$typeName = `${index_1.PKG_V1}::hive_profile::HiveKioskInitialized`;
HiveKioskInitialized.$numTypeParams = 0;
HiveKioskInitialized.$isPhantom = [];
/* ============================== HiveManager =============================== */
function isHiveManager(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveManager`; }
class HiveManager {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveManager.$typeName;
        this.$isPhantom = HiveManager.$isPhantom;
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
        this.kioskEarnings = fields.kioskEarnings;
        ;
        this.keeperAccounts = fields.keeperAccounts;
        ;
        this.builderHiveAssets = fields.builderHiveAssets;
        ;
        this.launchCapsInitialized = fields.launchCapsInitialized;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: HiveManager.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveManager.$typeName, ...[]), typeArgs: [], isPhantom: HiveManager.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveManager.fromFields(fields), fromFieldsWithTypes: (item) => HiveManager.fromFieldsWithTypes(item), fromBcs: (data) => HiveManager.fromBcs(data), bcs: HiveManager.bcs, fromJSONField: (field) => HiveManager.fromJSONField(field), fromJSON: (json) => HiveManager.fromJSON(json), fromSuiParsedData: (content) => HiveManager.fromSuiParsedData(content), fetch: async (client, id) => HiveManager.fetch(client, id), new: (fields) => { return new HiveManager([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveManager.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveManager.reified()); }
    static get p() { return HiveManager.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveManager", {
            id: structs_6.UID.bcs, hive_profile: HiveProfile.bcs, config_params: ConfigParams.bcs, active_assets: bcs_1.bcs.u64(), locked_assets: bcs_1.bcs.u64(), assets_to_profile_mapping: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), active_power: bcs_1.bcs.u128(), supported_lockup_durations: structs_7.Table.bcs, royalty: Royalty.bcs, gems_royalty: SubscriptionRoyalty.bcs, hive_twap: HiveTwapInfo.bcs, buidlers_royalty: structs_4.Balance.bcs, kiosk_earnings: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), keeper_accounts: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), builder_hive_assets: bcs_1.bcs.u64(), launch_caps_initialized: bcs_1.bcs.bool(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveManager.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), hiveProfile: (0, reified_1.decodeFromFields)(HiveProfile.reified(), fields.hive_profile), configParams: (0, reified_1.decodeFromFields)(ConfigParams.reified(), fields.config_params), activeAssets: (0, reified_1.decodeFromFields)("u64", fields.active_assets), lockedAssets: (0, reified_1.decodeFromFields)("u64", fields.locked_assets), assetsToProfileMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), fields.assets_to_profile_mapping), activePower: (0, reified_1.decodeFromFields)("u128", fields.active_power), supportedLockupDurations: (0, reified_1.decodeFromFields)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), fields.supported_lockup_durations), royalty: (0, reified_1.decodeFromFields)(Royalty.reified(), fields.royalty), gemsRoyalty: (0, reified_1.decodeFromFields)(SubscriptionRoyalty.reified(), fields.gems_royalty), hiveTwap: (0, reified_1.decodeFromFields)(HiveTwapInfo.reified(), fields.hive_twap), buidlersRoyalty: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), fields.buidlers_royalty), kioskEarnings: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(KioskEarnings.reified())), fields.kiosk_earnings), keeperAccounts: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), fields.keeper_accounts), builderHiveAssets: (0, reified_1.decodeFromFields)("u64", fields.builder_hive_assets), launchCapsInitialized: (0, reified_1.decodeFromFields)("bool", fields.launch_caps_initialized), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveManager(item.type)) {
            throw new Error("not a HiveManager type");
        }
        return HiveManager.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), hiveProfile: (0, reified_1.decodeFromFieldsWithTypes)(HiveProfile.reified(), item.fields.hive_profile), configParams: (0, reified_1.decodeFromFieldsWithTypes)(ConfigParams.reified(), item.fields.config_params), activeAssets: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_assets), lockedAssets: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.locked_assets), assetsToProfileMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), item.fields.assets_to_profile_mapping), activePower: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.active_power), supportedLockupDurations: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), item.fields.supported_lockup_durations), royalty: (0, reified_1.decodeFromFieldsWithTypes)(Royalty.reified(), item.fields.royalty), gemsRoyalty: (0, reified_1.decodeFromFieldsWithTypes)(SubscriptionRoyalty.reified(), item.fields.gems_royalty), hiveTwap: (0, reified_1.decodeFromFieldsWithTypes)(HiveTwapInfo.reified(), item.fields.hive_twap), buidlersRoyalty: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), item.fields.buidlers_royalty), kioskEarnings: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(KioskEarnings.reified())), item.fields.kiosk_earnings), keeperAccounts: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), item.fields.keeper_accounts), builderHiveAssets: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.builder_hive_assets), launchCapsInitialized: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.launch_caps_initialized), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveManager.fromFields(HiveManager.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, hiveProfile: this.hiveProfile.toJSONField(), configParams: this.configParams.toJSONField(), activeAssets: this.activeAssets.toString(), lockedAssets: this.lockedAssets.toString(), assetsToProfileMapping: this.assetsToProfileMapping.toJSONField(), activePower: this.activePower.toString(), supportedLockupDurations: this.supportedLockupDurations.toJSONField(), royalty: this.royalty.toJSONField(), gemsRoyalty: this.gemsRoyalty.toJSONField(), hiveTwap: this.hiveTwap.toJSONField(), buidlersRoyalty: this.buidlersRoyalty.toJSONField(), kioskEarnings: this.kioskEarnings.toJSONField(), keeperAccounts: this.keeperAccounts.toJSONField(), builderHiveAssets: this.builderHiveAssets.toString(), launchCapsInitialized: this.launchCapsInitialized, moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveManager.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), hiveProfile: (0, reified_1.decodeFromJSONField)(HiveProfile.reified(), field.hiveProfile), configParams: (0, reified_1.decodeFromJSONField)(ConfigParams.reified(), field.configParams), activeAssets: (0, reified_1.decodeFromJSONField)("u64", field.activeAssets), lockedAssets: (0, reified_1.decodeFromJSONField)("u64", field.lockedAssets), assetsToProfileMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), field.assetsToProfileMapping), activePower: (0, reified_1.decodeFromJSONField)("u128", field.activePower), supportedLockupDurations: (0, reified_1.decodeFromJSONField)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), field.supportedLockupDurations), royalty: (0, reified_1.decodeFromJSONField)(Royalty.reified(), field.royalty), gemsRoyalty: (0, reified_1.decodeFromJSONField)(SubscriptionRoyalty.reified(), field.gemsRoyalty), hiveTwap: (0, reified_1.decodeFromJSONField)(HiveTwapInfo.reified(), field.hiveTwap), buidlersRoyalty: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), field.buidlersRoyalty), kioskEarnings: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(KioskEarnings.reified())), field.kioskEarnings), keeperAccounts: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), field.keeperAccounts), builderHiveAssets: (0, reified_1.decodeFromJSONField)("u64", field.builderHiveAssets), launchCapsInitialized: (0, reified_1.decodeFromJSONField)("bool", field.launchCapsInitialized), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
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
        return HiveManager.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveManager = HiveManager;
HiveManager.$typeName = `${index_1.PKG_V1}::hive_profile::HiveManager`;
HiveManager.$numTypeParams = 0;
HiveManager.$isPhantom = [];
/* ============================== HiveProfile =============================== */
function isHiveProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveProfile`; }
class HiveProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveProfile.$typeName;
        this.$isPhantom = HiveProfile.$isPhantom;
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
        this.availableDsui = fields.availableDsui;
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
    static reified() { return { typeName: HiveProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveProfile.$typeName, ...[]), typeArgs: [], isPhantom: HiveProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveProfile.fromFields(fields), fromFieldsWithTypes: (item) => HiveProfile.fromFieldsWithTypes(item), fromBcs: (data) => HiveProfile.fromBcs(data), bcs: HiveProfile.bcs, fromJSONField: (field) => HiveProfile.fromJSONField(field), fromJSON: (json) => HiveProfile.fromJSON(json), fromSuiParsedData: (content) => HiveProfile.fromSuiParsedData(content), fetch: async (client, id) => HiveProfile.fetch(client, id), new: (fields) => { return new HiveProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveProfile.reified()); }
    static get p() { return HiveProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveProfile", {
            id: structs_6.UID.bcs, username: structs_1.String.bcs, bio: structs_3.String.bcs, inscription: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), creation_timestamp: bcs_1.bcs.u64(), owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), is_composable_profile: bcs_1.bcs.bool(), beehive_plan: structs_7.Table.bcs, subscribers_list: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), subscriptions_list: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), available_gems: structs_10.HiveGems.bcs, available_dsui: structs_4.Balance.bcs, last_active_epoch: bcs_1.bcs.u64(), entropy_used_for_cur_epoch: bcs_1.bcs.u64(), hive_assets: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), incoming_bids: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), borrow_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), listing_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), bid_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), lend_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), installed_apps: bcs_1.bcs.vector(structs_1.String.bcs), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveProfile.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), bio: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.bio), inscription: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(Inscription.reified())), fields.inscription), creationTimestamp: (0, reified_1.decodeFromFields)("u64", fields.creation_timestamp), owner: (0, reified_1.decodeFromFields)("address", fields.owner), isComposableProfile: (0, reified_1.decodeFromFields)("bool", fields.is_composable_profile), beehivePlan: (0, reified_1.decodeFromFields)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), fields.beehive_plan), subscribersList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), fields.subscribers_list), subscriptionsList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), fields.subscriptions_list), availableGems: (0, reified_1.decodeFromFields)(structs_10.HiveGems.reified(), fields.available_gems), availableDsui: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), fields.available_dsui), lastActiveEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_active_epoch), entropyUsedForCurEpoch: (0, reified_1.decodeFromFields)("u64", fields.entropy_used_for_cur_epoch), hiveAssets: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(HiveAsset.reified())), fields.hive_assets), incomingBids: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(reified.phantom(structs_9.DSUI.reified()))))), fields.incoming_bids), borrowRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(BorrowRecord.reified())), fields.borrow_records), listingRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), fields.listing_records), bidRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), fields.bid_records), lendRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(LendRecord.reified())), fields.lend_records), installedApps: (0, reified_1.decodeFromFields)(reified.vector(structs_1.String.reified()), fields.installed_apps), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveProfile(item.type)) {
            throw new Error("not a HiveProfile type");
        }
        return HiveProfile.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), bio: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.bio), inscription: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(Inscription.reified())), item.fields.inscription), creationTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.creation_timestamp), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), isComposableProfile: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_composable_profile), beehivePlan: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), item.fields.beehive_plan), subscribersList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), item.fields.subscribers_list), subscriptionsList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), item.fields.subscriptions_list), availableGems: (0, reified_1.decodeFromFieldsWithTypes)(structs_10.HiveGems.reified(), item.fields.available_gems), availableDsui: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), item.fields.available_dsui), lastActiveEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_active_epoch), entropyUsedForCurEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.entropy_used_for_cur_epoch), hiveAssets: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(HiveAsset.reified())), item.fields.hive_assets), incomingBids: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(reified.phantom(structs_9.DSUI.reified()))))), item.fields.incoming_bids), borrowRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(BorrowRecord.reified())), item.fields.borrow_records), listingRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), item.fields.listing_records), bidRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), item.fields.bid_records), lendRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(LendRecord.reified())), item.fields.lend_records), installedApps: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_1.String.reified()), item.fields.installed_apps), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveProfile.fromFields(HiveProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, username: this.username, bio: this.bio, inscription: this.inscription.toJSONField(), creationTimestamp: this.creationTimestamp.toString(), owner: this.owner, isComposableProfile: this.isComposableProfile, beehivePlan: this.beehivePlan.toJSONField(), subscribersList: this.subscribersList.toJSONField(), subscriptionsList: this.subscriptionsList.toJSONField(), availableGems: this.availableGems.toJSONField(), availableDsui: this.availableDsui.toJSONField(), lastActiveEpoch: this.lastActiveEpoch.toString(), entropyUsedForCurEpoch: this.entropyUsedForCurEpoch.toString(), hiveAssets: this.hiveAssets.toJSONField(), incomingBids: this.incomingBids.toJSONField(), borrowRecords: this.borrowRecords.toJSONField(), listingRecords: this.listingRecords.toJSONField(), bidRecords: this.bidRecords.toJSONField(), lendRecords: this.lendRecords.toJSONField(), installedApps: (0, reified_1.fieldToJSON)(`vector<${structs_1.String.$typeName}>`, this.installedApps), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveProfile.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), bio: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.bio), inscription: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(Inscription.reified())), field.inscription), creationTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.creationTimestamp), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), isComposableProfile: (0, reified_1.decodeFromJSONField)("bool", field.isComposableProfile), beehivePlan: (0, reified_1.decodeFromJSONField)(structs_7.Table.reified(reified.phantom("u8"), reified.phantom("u64")), field.beehivePlan), subscribersList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), field.subscribersList), subscriptionsList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), field.subscriptionsList), availableGems: (0, reified_1.decodeFromJSONField)(structs_10.HiveGems.reified(), field.availableGems), availableDsui: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), field.availableDsui), lastActiveEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastActiveEpoch), entropyUsedForCurEpoch: (0, reified_1.decodeFromJSONField)("u64", field.entropyUsedForCurEpoch), hiveAssets: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(HiveAsset.reified())), field.hiveAssets), incomingBids: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(reified.phantom(structs_9.DSUI.reified()))))), field.incomingBids), borrowRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(BorrowRecord.reified())), field.borrowRecords), listingRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), field.listingRecords), bidRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), field.bidRecords), lendRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(LendRecord.reified())), field.lendRecords), installedApps: (0, reified_1.decodeFromJSONField)(reified.vector(structs_1.String.reified()), field.installedApps), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
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
        return HiveProfile.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveProfile = HiveProfile;
HiveProfile.$typeName = `${index_1.PKG_V1}::hive_profile::HiveProfile`;
HiveProfile.$numTypeParams = 0;
HiveProfile.$isPhantom = [];
/* ============================== HiveProfileDestroyed =============================== */
function isHiveProfileDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveProfileDestroyed`; }
class HiveProfileDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveProfileDestroyed.$typeName;
        this.$isPhantom = HiveProfileDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveProfileDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.owner = fields.owner;
    }
    static reified() { return { typeName: HiveProfileDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveProfileDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: HiveProfileDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveProfileDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => HiveProfileDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => HiveProfileDestroyed.fromBcs(data), bcs: HiveProfileDestroyed.bcs, fromJSONField: (field) => HiveProfileDestroyed.fromJSONField(field), fromJSON: (json) => HiveProfileDestroyed.fromJSON(json), fromSuiParsedData: (content) => HiveProfileDestroyed.fromSuiParsedData(content), fetch: async (client, id) => HiveProfileDestroyed.fetch(client, id), new: (fields) => { return new HiveProfileDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveProfileDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveProfileDestroyed.reified()); }
    static get p() { return HiveProfileDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveProfileDestroyed", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
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
        return HiveProfileDestroyed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveProfileDestroyed = HiveProfileDestroyed;
HiveProfileDestroyed.$typeName = `${index_1.PKG_V1}::hive_profile::HiveProfileDestroyed`;
HiveProfileDestroyed.$numTypeParams = 0;
HiveProfileDestroyed.$isPhantom = [];
/* ============================== HiveProfileKrafted =============================== */
function isHiveProfileKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveProfileKrafted`; }
class HiveProfileKrafted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveProfileKrafted.$typeName;
        this.$isPhantom = HiveProfileKrafted.$isPhantom;
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
    static reified() { return { typeName: HiveProfileKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveProfileKrafted.$typeName, ...[]), typeArgs: [], isPhantom: HiveProfileKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveProfileKrafted.fromFields(fields), fromFieldsWithTypes: (item) => HiveProfileKrafted.fromFieldsWithTypes(item), fromBcs: (data) => HiveProfileKrafted.fromBcs(data), bcs: HiveProfileKrafted.bcs, fromJSONField: (field) => HiveProfileKrafted.fromJSONField(field), fromJSON: (json) => HiveProfileKrafted.fromJSON(json), fromSuiParsedData: (content) => HiveProfileKrafted.fromSuiParsedData(content), fetch: async (client, id) => HiveProfileKrafted.fetch(client, id), new: (fields) => { return new HiveProfileKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveProfileKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveProfileKrafted.reified()); }
    static get p() { return HiveProfileKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveProfileKrafted", {
            name: structs_3.String.bcs, bio: structs_3.String.bcs, new_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), krafter: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), fee: bcs_1.bcs.u64(), is_composable_profile: bcs_1.bcs.bool()
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
        return HiveProfileKrafted.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveProfileKrafted = HiveProfileKrafted;
HiveProfileKrafted.$typeName = `${index_1.PKG_V1}::hive_profile::HiveProfileKrafted`;
HiveProfileKrafted.$numTypeParams = 0;
HiveProfileKrafted.$isPhantom = [];
/* ============================== HiveProfileMappingStore =============================== */
function isHiveProfileMappingStore(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveProfileMappingStore`; }
class HiveProfileMappingStore {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveProfileMappingStore.$typeName;
        this.$isPhantom = HiveProfileMappingStore.$isPhantom;
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
        this.suinsNameToExpiryMapping = fields.suinsNameToExpiryMapping;
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
    static reified() { return { typeName: HiveProfileMappingStore.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveProfileMappingStore.$typeName, ...[]), typeArgs: [], isPhantom: HiveProfileMappingStore.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveProfileMappingStore.fromFields(fields), fromFieldsWithTypes: (item) => HiveProfileMappingStore.fromFieldsWithTypes(item), fromBcs: (data) => HiveProfileMappingStore.fromBcs(data), bcs: HiveProfileMappingStore.bcs, fromJSONField: (field) => HiveProfileMappingStore.fromJSONField(field), fromJSON: (json) => HiveProfileMappingStore.fromJSON(json), fromSuiParsedData: (content) => HiveProfileMappingStore.fromSuiParsedData(content), fetch: async (client, id) => HiveProfileMappingStore.fetch(client, id), new: (fields) => { return new HiveProfileMappingStore([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveProfileMappingStore.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveProfileMappingStore.reified()); }
    static get p() { return HiveProfileMappingStore.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveProfileMappingStore", {
            id: structs_6.UID.bcs, owner_to_profile_mapping: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), username_to_profile_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), username_to_comp_profile_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), suins_name_to_expiry_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), profile_to_creator_kiosk_mapping: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), app_names_to_cap_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), kiosk_names_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), reserved_usernames_to_accessor_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveProfileMappingStore.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), ownerToProfileMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("address")), fields.owner_to_profile_mapping), usernameToProfileMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.username_to_profile_mapping), usernameToCompProfileMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.username_to_comp_profile_mapping), suinsNameToExpiryMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("u64")), fields.suins_name_to_expiry_mapping), profileToCreatorKioskMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("address"))), fields.profile_to_creator_kiosk_mapping), appNamesToCapMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.app_names_to_cap_mapping), kioskNamesMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.kiosk_names_mapping), reservedUsernamesToAccessorMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.reserved_usernames_to_accessor_mapping), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveProfileMappingStore(item.type)) {
            throw new Error("not a HiveProfileMappingStore type");
        }
        return HiveProfileMappingStore.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), ownerToProfileMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("address")), item.fields.owner_to_profile_mapping), usernameToProfileMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.username_to_profile_mapping), usernameToCompProfileMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.username_to_comp_profile_mapping), suinsNameToExpiryMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("u64")), item.fields.suins_name_to_expiry_mapping), profileToCreatorKioskMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("address"))), item.fields.profile_to_creator_kiosk_mapping), appNamesToCapMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.app_names_to_cap_mapping), kioskNamesMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.kiosk_names_mapping), reservedUsernamesToAccessorMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.reserved_usernames_to_accessor_mapping), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveProfileMappingStore.fromFields(HiveProfileMappingStore.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, ownerToProfileMapping: this.ownerToProfileMapping.toJSONField(), usernameToProfileMapping: this.usernameToProfileMapping.toJSONField(), usernameToCompProfileMapping: this.usernameToCompProfileMapping.toJSONField(), suinsNameToExpiryMapping: this.suinsNameToExpiryMapping.toJSONField(), profileToCreatorKioskMapping: this.profileToCreatorKioskMapping.toJSONField(), appNamesToCapMapping: this.appNamesToCapMapping.toJSONField(), kioskNamesMapping: this.kioskNamesMapping.toJSONField(), reservedUsernamesToAccessorMapping: this.reservedUsernamesToAccessorMapping.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveProfileMappingStore.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), ownerToProfileMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("address")), field.ownerToProfileMapping), usernameToProfileMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.usernameToProfileMapping), usernameToCompProfileMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.usernameToCompProfileMapping), suinsNameToExpiryMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("u64")), field.suinsNameToExpiryMapping), profileToCreatorKioskMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("address"))), field.profileToCreatorKioskMapping), appNamesToCapMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.appNamesToCapMapping), kioskNamesMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.kioskNamesMapping), reservedUsernamesToAccessorMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.reservedUsernamesToAccessorMapping), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
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
        return HiveProfileMappingStore.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveProfileMappingStore = HiveProfileMappingStore;
HiveProfileMappingStore.$typeName = `${index_1.PKG_V1}::hive_profile::HiveProfileMappingStore`;
HiveProfileMappingStore.$numTypeParams = 0;
HiveProfileMappingStore.$isPhantom = [];
/* ============================== HiveTwapInfo =============================== */
function isHiveTwapInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveTwapInfo`; }
class HiveTwapInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveTwapInfo.$typeName;
        this.$isPhantom = HiveTwapInfo.$isPhantom;
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
    static reified() { return { typeName: HiveTwapInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveTwapInfo.$typeName, ...[]), typeArgs: [], isPhantom: HiveTwapInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveTwapInfo.fromFields(fields), fromFieldsWithTypes: (item) => HiveTwapInfo.fromFieldsWithTypes(item), fromBcs: (data) => HiveTwapInfo.fromBcs(data), bcs: HiveTwapInfo.bcs, fromJSONField: (field) => HiveTwapInfo.fromJSONField(field), fromJSON: (json) => HiveTwapInfo.fromJSON(json), fromSuiParsedData: (content) => HiveTwapInfo.fromSuiParsedData(content), fetch: async (client, id) => HiveTwapInfo.fetch(client, id), new: (fields) => { return new HiveTwapInfo([], fields); }, kind: "StructClassReified", }; }
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
        return HiveTwapInfo.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveTwapInfo = HiveTwapInfo;
HiveTwapInfo.$typeName = `${index_1.PKG_V1}::hive_profile::HiveTwapInfo`;
HiveTwapInfo.$numTypeParams = 0;
HiveTwapInfo.$isPhantom = [];
/* ============================== HiveTwapUpdated =============================== */
function isHiveTwapUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveTwapUpdated`; }
class HiveTwapUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveTwapUpdated.$typeName;
        this.$isPhantom = HiveTwapUpdated.$isPhantom;
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
    static reified() { return { typeName: HiveTwapUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveTwapUpdated.$typeName, ...[]), typeArgs: [], isPhantom: HiveTwapUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveTwapUpdated.fromFields(fields), fromFieldsWithTypes: (item) => HiveTwapUpdated.fromFieldsWithTypes(item), fromBcs: (data) => HiveTwapUpdated.fromBcs(data), bcs: HiveTwapUpdated.bcs, fromJSONField: (field) => HiveTwapUpdated.fromJSONField(field), fromJSON: (json) => HiveTwapUpdated.fromJSON(json), fromSuiParsedData: (content) => HiveTwapUpdated.fromSuiParsedData(content), fetch: async (client, id) => HiveTwapUpdated.fetch(client, id), new: (fields) => { return new HiveTwapUpdated([], fields); }, kind: "StructClassReified", }; }
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
        return HiveTwapUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveTwapUpdated = HiveTwapUpdated;
HiveTwapUpdated.$typeName = `${index_1.PKG_V1}::hive_profile::HiveTwapUpdated`;
HiveTwapUpdated.$numTypeParams = 0;
HiveTwapUpdated.$isPhantom = [];
/* ============================== HiveWithdrawnFromTreasury =============================== */
function isHiveWithdrawnFromTreasury(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::HiveWithdrawnFromTreasury`; }
class HiveWithdrawnFromTreasury {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveWithdrawnFromTreasury.$typeName;
        this.$isPhantom = HiveWithdrawnFromTreasury.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveWithdrawnFromTreasury.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.hiveWithdrawn = fields.hiveWithdrawn;
    }
    static reified() { return { typeName: HiveWithdrawnFromTreasury.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveWithdrawnFromTreasury.$typeName, ...[]), typeArgs: [], isPhantom: HiveWithdrawnFromTreasury.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveWithdrawnFromTreasury.fromFields(fields), fromFieldsWithTypes: (item) => HiveWithdrawnFromTreasury.fromFieldsWithTypes(item), fromBcs: (data) => HiveWithdrawnFromTreasury.fromBcs(data), bcs: HiveWithdrawnFromTreasury.bcs, fromJSONField: (field) => HiveWithdrawnFromTreasury.fromJSONField(field), fromJSON: (json) => HiveWithdrawnFromTreasury.fromJSON(json), fromSuiParsedData: (content) => HiveWithdrawnFromTreasury.fromSuiParsedData(content), fetch: async (client, id) => HiveWithdrawnFromTreasury.fetch(client, id), new: (fields) => { return new HiveWithdrawnFromTreasury([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveWithdrawnFromTreasury.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveWithdrawnFromTreasury.reified()); }
    static get p() { return HiveWithdrawnFromTreasury.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveWithdrawnFromTreasury", {
            hive_withdrawn: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveWithdrawnFromTreasury.reified().new({ hiveWithdrawn: (0, reified_1.decodeFromFields)("u64", fields.hive_withdrawn) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveWithdrawnFromTreasury(item.type)) {
            throw new Error("not a HiveWithdrawnFromTreasury type");
        }
        return HiveWithdrawnFromTreasury.reified().new({ hiveWithdrawn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_withdrawn) });
    }
    static fromBcs(data) { return HiveWithdrawnFromTreasury.fromFields(HiveWithdrawnFromTreasury.bcs.parse(data)); }
    toJSONField() {
        return {
            hiveWithdrawn: this.hiveWithdrawn.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveWithdrawnFromTreasury.reified().new({ hiveWithdrawn: (0, reified_1.decodeFromJSONField)("u64", field.hiveWithdrawn) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveWithdrawnFromTreasury.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveWithdrawnFromTreasury.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveWithdrawnFromTreasury(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveWithdrawnFromTreasury object`);
    } return HiveWithdrawnFromTreasury.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveWithdrawnFromTreasury object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveWithdrawnFromTreasury(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveWithdrawnFromTreasury object`);
        }
        return HiveWithdrawnFromTreasury.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveWithdrawnFromTreasury = HiveWithdrawnFromTreasury;
HiveWithdrawnFromTreasury.$typeName = `${index_1.PKG_V1}::hive_profile::HiveWithdrawnFromTreasury`;
HiveWithdrawnFromTreasury.$numTypeParams = 0;
HiveWithdrawnFromTreasury.$isPhantom = [];
/* ============================== Inscription =============================== */
function isInscription(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::Inscription`; }
class Inscription {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Inscription.$typeName;
        this.$isPhantom = Inscription.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Inscription.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.format = fields.format;
        ;
        this.base64 = fields.base64;
    }
    static reified() { return { typeName: Inscription.$typeName, fullTypeName: (0, util_1.composeSuiType)(Inscription.$typeName, ...[]), typeArgs: [], isPhantom: Inscription.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Inscription.fromFields(fields), fromFieldsWithTypes: (item) => Inscription.fromFieldsWithTypes(item), fromBcs: (data) => Inscription.fromBcs(data), bcs: Inscription.bcs, fromJSONField: (field) => Inscription.fromJSONField(field), fromJSON: (json) => Inscription.fromJSON(json), fromSuiParsedData: (content) => Inscription.fromSuiParsedData(content), fetch: async (client, id) => Inscription.fetch(client, id), new: (fields) => { return new Inscription([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Inscription.reified(); }
    static phantom() { return (0, reified_1.phantom)(Inscription.reified()); }
    static get p() { return Inscription.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Inscription", {
            format: structs_3.String.bcs, base64: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return Inscription.reified().new({ format: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.format), base64: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.base64) }); }
    static fromFieldsWithTypes(item) {
        if (!isInscription(item.type)) {
            throw new Error("not a Inscription type");
        }
        return Inscription.reified().new({ format: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.format), base64: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.base64) });
    }
    static fromBcs(data) { return Inscription.fromFields(Inscription.bcs.parse(data)); }
    toJSONField() {
        return {
            format: this.format, base64: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.base64),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Inscription.reified().new({ format: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.format), base64: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.base64) }); }
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
        return Inscription.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Inscription = Inscription;
Inscription.$typeName = `${index_1.PKG_V1}::hive_profile::Inscription`;
Inscription.$numTypeParams = 0;
Inscription.$isPhantom = [];
/* ============================== InscriptionSetForProfile =============================== */
function isInscriptionSetForProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::InscriptionSetForProfile`; }
class InscriptionSetForProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = InscriptionSetForProfile.$typeName;
        this.$isPhantom = InscriptionSetForProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(InscriptionSetForProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.format = fields.format;
        ;
        this.base64 = fields.base64;
    }
    static reified() { return { typeName: InscriptionSetForProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(InscriptionSetForProfile.$typeName, ...[]), typeArgs: [], isPhantom: InscriptionSetForProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => InscriptionSetForProfile.fromFields(fields), fromFieldsWithTypes: (item) => InscriptionSetForProfile.fromFieldsWithTypes(item), fromBcs: (data) => InscriptionSetForProfile.fromBcs(data), bcs: InscriptionSetForProfile.bcs, fromJSONField: (field) => InscriptionSetForProfile.fromJSONField(field), fromJSON: (json) => InscriptionSetForProfile.fromJSON(json), fromSuiParsedData: (content) => InscriptionSetForProfile.fromSuiParsedData(content), fetch: async (client, id) => InscriptionSetForProfile.fetch(client, id), new: (fields) => { return new InscriptionSetForProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return InscriptionSetForProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(InscriptionSetForProfile.reified()); }
    static get p() { return InscriptionSetForProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("InscriptionSetForProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_3.String.bcs, format: structs_3.String.bcs, base64: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return InscriptionSetForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.username), format: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.format), base64: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.base64) }); }
    static fromFieldsWithTypes(item) {
        if (!isInscriptionSetForProfile(item.type)) {
            throw new Error("not a InscriptionSetForProfile type");
        }
        return InscriptionSetForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.username), format: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.format), base64: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.base64) });
    }
    static fromBcs(data) { return InscriptionSetForProfile.fromFields(InscriptionSetForProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, username: this.username, format: this.format, base64: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.base64),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return InscriptionSetForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.username), format: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.format), base64: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.base64) }); }
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
        return InscriptionSetForProfile.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.InscriptionSetForProfile = InscriptionSetForProfile;
InscriptionSetForProfile.$typeName = `${index_1.PKG_V1}::hive_profile::InscriptionSetForProfile`;
InscriptionSetForProfile.$numTypeParams = 0;
InscriptionSetForProfile.$isPhantom = [];
/* ============================== JoinedHiveOfProfile =============================== */
function isJoinedHiveOfProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::JoinedHiveOfProfile`; }
class JoinedHiveOfProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = JoinedHiveOfProfile.$typeName;
        this.$isPhantom = JoinedHiveOfProfile.$isPhantom;
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
    static reified() { return { typeName: JoinedHiveOfProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(JoinedHiveOfProfile.$typeName, ...[]), typeArgs: [], isPhantom: JoinedHiveOfProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => JoinedHiveOfProfile.fromFields(fields), fromFieldsWithTypes: (item) => JoinedHiveOfProfile.fromFieldsWithTypes(item), fromBcs: (data) => JoinedHiveOfProfile.fromBcs(data), bcs: JoinedHiveOfProfile.bcs, fromJSONField: (field) => JoinedHiveOfProfile.fromJSONField(field), fromJSON: (json) => JoinedHiveOfProfile.fromJSON(json), fromSuiParsedData: (content) => JoinedHiveOfProfile.fromSuiParsedData(content), fetch: async (client, id) => JoinedHiveOfProfile.fetch(client, id), new: (fields) => { return new JoinedHiveOfProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return JoinedHiveOfProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(JoinedHiveOfProfile.reified()); }
    static get p() { return JoinedHiveOfProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("JoinedHiveOfProfile", {
            subscriber_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), hive_owner_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), subscriber_username: structs_3.String.bcs, hive_owner_username: structs_3.String.bcs, access_type: bcs_1.bcs.u8(), access_cost: bcs_1.bcs.u64(), next_payment_timestamp: bcs_1.bcs.u64()
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
        return JoinedHiveOfProfile.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.JoinedHiveOfProfile = JoinedHiveOfProfile;
JoinedHiveOfProfile.$typeName = `${index_1.PKG_V1}::hive_profile::JoinedHiveOfProfile`;
JoinedHiveOfProfile.$numTypeParams = 0;
JoinedHiveOfProfile.$isPhantom = [];
/* ============================== KioskEarnings =============================== */
function isKioskEarnings(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::KioskEarnings`; }
class KioskEarnings {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = KioskEarnings.$typeName;
        this.$isPhantom = KioskEarnings.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(KioskEarnings.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.liquidityPool = fields.liquidityPool;
        ;
        this.creatorEarnings = fields.creatorEarnings;
        ;
        this.nftsCount = fields.nftsCount;
    }
    static reified() { return { typeName: KioskEarnings.$typeName, fullTypeName: (0, util_1.composeSuiType)(KioskEarnings.$typeName, ...[]), typeArgs: [], isPhantom: KioskEarnings.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => KioskEarnings.fromFields(fields), fromFieldsWithTypes: (item) => KioskEarnings.fromFieldsWithTypes(item), fromBcs: (data) => KioskEarnings.fromBcs(data), bcs: KioskEarnings.bcs, fromJSONField: (field) => KioskEarnings.fromJSONField(field), fromJSON: (json) => KioskEarnings.fromJSON(json), fromSuiParsedData: (content) => KioskEarnings.fromSuiParsedData(content), fetch: async (client, id) => KioskEarnings.fetch(client, id), new: (fields) => { return new KioskEarnings([], fields); }, kind: "StructClassReified", }; }
    static get r() { return KioskEarnings.reified(); }
    static phantom() { return (0, reified_1.phantom)(KioskEarnings.reified()); }
    static get p() { return KioskEarnings.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("KioskEarnings", {
            liquidity_pool: structs_4.Balance.bcs, creator_earnings: structs_4.Balance.bcs, nfts_count: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return KioskEarnings.reified().new({ liquidityPool: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), fields.liquidity_pool), creatorEarnings: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), fields.creator_earnings), nftsCount: (0, reified_1.decodeFromFields)("u64", fields.nfts_count) }); }
    static fromFieldsWithTypes(item) {
        if (!isKioskEarnings(item.type)) {
            throw new Error("not a KioskEarnings type");
        }
        return KioskEarnings.reified().new({ liquidityPool: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), item.fields.liquidity_pool), creatorEarnings: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), item.fields.creator_earnings), nftsCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.nfts_count) });
    }
    static fromBcs(data) { return KioskEarnings.fromFields(KioskEarnings.bcs.parse(data)); }
    toJSONField() {
        return {
            liquidityPool: this.liquidityPool.toJSONField(), creatorEarnings: this.creatorEarnings.toJSONField(), nftsCount: this.nftsCount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return KioskEarnings.reified().new({ liquidityPool: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), field.liquidityPool), creatorEarnings: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.DSUI.reified())), field.creatorEarnings), nftsCount: (0, reified_1.decodeFromJSONField)("u64", field.nftsCount) }); }
    static fromJSON(json) {
        if (json.$typeName !== KioskEarnings.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return KioskEarnings.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isKioskEarnings(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a KioskEarnings object`);
    } return KioskEarnings.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching KioskEarnings object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isKioskEarnings(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a KioskEarnings object`);
        }
        return KioskEarnings.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.KioskEarnings = KioskEarnings;
KioskEarnings.$typeName = `${index_1.PKG_V1}::hive_profile::KioskEarnings`;
KioskEarnings.$numTypeParams = 0;
KioskEarnings.$isPhantom = [];
/* ============================== KioskOwnershipTransferred =============================== */
function isKioskOwnershipTransferred(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::KioskOwnershipTransferred`; }
class KioskOwnershipTransferred {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = KioskOwnershipTransferred.$typeName;
        this.$isPhantom = KioskOwnershipTransferred.$isPhantom;
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
    static reified() { return { typeName: KioskOwnershipTransferred.$typeName, fullTypeName: (0, util_1.composeSuiType)(KioskOwnershipTransferred.$typeName, ...[]), typeArgs: [], isPhantom: KioskOwnershipTransferred.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => KioskOwnershipTransferred.fromFields(fields), fromFieldsWithTypes: (item) => KioskOwnershipTransferred.fromFieldsWithTypes(item), fromBcs: (data) => KioskOwnershipTransferred.fromBcs(data), bcs: KioskOwnershipTransferred.bcs, fromJSONField: (field) => KioskOwnershipTransferred.fromJSONField(field), fromJSON: (json) => KioskOwnershipTransferred.fromJSON(json), fromSuiParsedData: (content) => KioskOwnershipTransferred.fromSuiParsedData(content), fetch: async (client, id) => KioskOwnershipTransferred.fetch(client, id), new: (fields) => { return new KioskOwnershipTransferred([], fields); }, kind: "StructClassReified", }; }
    static get r() { return KioskOwnershipTransferred.reified(); }
    static phantom() { return (0, reified_1.phantom)(KioskOwnershipTransferred.reified()); }
    static get p() { return KioskOwnershipTransferred.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("KioskOwnershipTransferred", {
            collection_name: structs_3.String.bcs, creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), creator_profile_username: structs_1.String.bcs, new_creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), new_creator_profile_username: structs_1.String.bcs, kiosk: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
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
        return KioskOwnershipTransferred.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.KioskOwnershipTransferred = KioskOwnershipTransferred;
KioskOwnershipTransferred.$typeName = `${index_1.PKG_V1}::hive_profile::KioskOwnershipTransferred`;
KioskOwnershipTransferred.$numTypeParams = 0;
KioskOwnershipTransferred.$isPhantom = [];
/* ============================== KraftRoyaltyUpdated =============================== */
function isKraftRoyaltyUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::KraftRoyaltyUpdated`; }
class KraftRoyaltyUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = KraftRoyaltyUpdated.$typeName;
        this.$isPhantom = KraftRoyaltyUpdated.$isPhantom;
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
    static reified() { return { typeName: KraftRoyaltyUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(KraftRoyaltyUpdated.$typeName, ...[]), typeArgs: [], isPhantom: KraftRoyaltyUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => KraftRoyaltyUpdated.fromFields(fields), fromFieldsWithTypes: (item) => KraftRoyaltyUpdated.fromFieldsWithTypes(item), fromBcs: (data) => KraftRoyaltyUpdated.fromBcs(data), bcs: KraftRoyaltyUpdated.bcs, fromJSONField: (field) => KraftRoyaltyUpdated.fromJSONField(field), fromJSON: (json) => KraftRoyaltyUpdated.fromJSON(json), fromSuiParsedData: (content) => KraftRoyaltyUpdated.fromSuiParsedData(content), fetch: async (client, id) => KraftRoyaltyUpdated.fetch(client, id), new: (fields) => { return new KraftRoyaltyUpdated([], fields); }, kind: "StructClassReified", }; }
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
        return KraftRoyaltyUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.KraftRoyaltyUpdated = KraftRoyaltyUpdated;
KraftRoyaltyUpdated.$typeName = `${index_1.PKG_V1}::hive_profile::KraftRoyaltyUpdated`;
KraftRoyaltyUpdated.$numTypeParams = 0;
KraftRoyaltyUpdated.$isPhantom = [];
/* ============================== KraftYieldHarvested =============================== */
function isKraftYieldHarvested(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::KraftYieldHarvested`; }
class KraftYieldHarvested {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = KraftYieldHarvested.$typeName;
        this.$isPhantom = KraftYieldHarvested.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(KraftYieldHarvested.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dsuiYield = fields.dsuiYield;
        ;
        this.receiver = fields.receiver;
    }
    static reified() { return { typeName: KraftYieldHarvested.$typeName, fullTypeName: (0, util_1.composeSuiType)(KraftYieldHarvested.$typeName, ...[]), typeArgs: [], isPhantom: KraftYieldHarvested.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => KraftYieldHarvested.fromFields(fields), fromFieldsWithTypes: (item) => KraftYieldHarvested.fromFieldsWithTypes(item), fromBcs: (data) => KraftYieldHarvested.fromBcs(data), bcs: KraftYieldHarvested.bcs, fromJSONField: (field) => KraftYieldHarvested.fromJSONField(field), fromJSON: (json) => KraftYieldHarvested.fromJSON(json), fromSuiParsedData: (content) => KraftYieldHarvested.fromSuiParsedData(content), fetch: async (client, id) => KraftYieldHarvested.fetch(client, id), new: (fields) => { return new KraftYieldHarvested([], fields); }, kind: "StructClassReified", }; }
    static get r() { return KraftYieldHarvested.reified(); }
    static phantom() { return (0, reified_1.phantom)(KraftYieldHarvested.reified()); }
    static get p() { return KraftYieldHarvested.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("KraftYieldHarvested", {
            dsui_yield: bcs_1.bcs.u64(), receiver: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return KraftYieldHarvested.reified().new({ dsuiYield: (0, reified_1.decodeFromFields)("u64", fields.dsui_yield), receiver: (0, reified_1.decodeFromFields)("address", fields.receiver) }); }
    static fromFieldsWithTypes(item) {
        if (!isKraftYieldHarvested(item.type)) {
            throw new Error("not a KraftYieldHarvested type");
        }
        return KraftYieldHarvested.reified().new({ dsuiYield: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_yield), receiver: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.receiver) });
    }
    static fromBcs(data) { return KraftYieldHarvested.fromFields(KraftYieldHarvested.bcs.parse(data)); }
    toJSONField() {
        return {
            dsuiYield: this.dsuiYield.toString(), receiver: this.receiver,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return KraftYieldHarvested.reified().new({ dsuiYield: (0, reified_1.decodeFromJSONField)("u64", field.dsuiYield), receiver: (0, reified_1.decodeFromJSONField)("address", field.receiver) }); }
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
        return KraftYieldHarvested.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.KraftYieldHarvested = KraftYieldHarvested;
KraftYieldHarvested.$typeName = `${index_1.PKG_V1}::hive_profile::KraftYieldHarvested`;
KraftYieldHarvested.$numTypeParams = 0;
KraftYieldHarvested.$isPhantom = [];
/* ============================== LendRecord =============================== */
function isLendRecord(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::LendRecord`; }
class LendRecord {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LendRecord.$typeName;
        this.$isPhantom = LendRecord.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LendRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.borrower = fields.borrower;
        ;
        this.version = fields.version;
        ;
        this.lendPriceDsui = fields.lendPriceDsui;
        ;
        this.startSec = fields.startSec;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: LendRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(LendRecord.$typeName, ...[]), typeArgs: [], isPhantom: LendRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LendRecord.fromFields(fields), fromFieldsWithTypes: (item) => LendRecord.fromFieldsWithTypes(item), fromBcs: (data) => LendRecord.fromBcs(data), bcs: LendRecord.bcs, fromJSONField: (field) => LendRecord.fromJSONField(field), fromJSON: (json) => LendRecord.fromJSON(json), fromSuiParsedData: (content) => LendRecord.fromSuiParsedData(content), fetch: async (client, id) => LendRecord.fetch(client, id), new: (fields) => { return new LendRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LendRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(LendRecord.reified()); }
    static get p() { return LendRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LendRecord", {
            borrower: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), version: bcs_1.bcs.u64(), lend_price_dsui: bcs_1.bcs.u64(), start_sec: bcs_1.bcs.u64(), lockup_duration: bcs_1.bcs.u8(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return LendRecord.reified().new({ borrower: (0, reified_1.decodeFromFields)("address", fields.borrower), version: (0, reified_1.decodeFromFields)("u64", fields.version), lendPriceDsui: (0, reified_1.decodeFromFields)("u64", fields.lend_price_dsui), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isLendRecord(item.type)) {
            throw new Error("not a LendRecord type");
        }
        return LendRecord.reified().new({ borrower: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.borrower), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), lendPriceDsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lend_price_dsui), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return LendRecord.fromFields(LendRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            borrower: this.borrower, version: this.version.toString(), lendPriceDsui: this.lendPriceDsui.toString(), startSec: this.startSec.toString(), lockupDuration: this.lockupDuration, expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LendRecord.reified().new({ borrower: (0, reified_1.decodeFromJSONField)("address", field.borrower), version: (0, reified_1.decodeFromJSONField)("u64", field.version), lendPriceDsui: (0, reified_1.decodeFromJSONField)("u64", field.lendPriceDsui), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
        return LendRecord.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.LendRecord = LendRecord;
LendRecord.$typeName = `${index_1.PKG_V1}::hive_profile::LendRecord`;
LendRecord.$numTypeParams = 0;
LendRecord.$isPhantom = [];
/* ============================== ListingCanceled =============================== */
function isListingCanceled(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ListingCanceled`; }
class ListingCanceled {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ListingCanceled.$typeName;
        this.$isPhantom = ListingCanceled.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingCanceled.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByProfile = fields.listedByProfile;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: ListingCanceled.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingCanceled.$typeName, ...[]), typeArgs: [], isPhantom: ListingCanceled.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ListingCanceled.fromFields(fields), fromFieldsWithTypes: (item) => ListingCanceled.fromFieldsWithTypes(item), fromBcs: (data) => ListingCanceled.fromBcs(data), bcs: ListingCanceled.bcs, fromJSONField: (field) => ListingCanceled.fromJSONField(field), fromJSON: (json) => ListingCanceled.fromJSON(json), fromSuiParsedData: (content) => ListingCanceled.fromSuiParsedData(content), fetch: async (client, id) => ListingCanceled.fetch(client, id), new: (fields) => { return new ListingCanceled([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingCanceled.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingCanceled.reified()); }
    static get p() { return ListingCanceled.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingCanceled", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), version: bcs_1.bcs.u64()
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
        return ListingCanceled.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ListingCanceled = ListingCanceled;
ListingCanceled.$typeName = `${index_1.PKG_V1}::hive_profile::ListingCanceled`;
ListingCanceled.$numTypeParams = 0;
ListingCanceled.$isPhantom = [];
/* ============================== ListingDestroyed =============================== */
function isListingDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ListingDestroyed`; }
class ListingDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ListingDestroyed.$typeName;
        this.$isPhantom = ListingDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.listedByProfile = fields.listedByProfile;
    }
    static reified() { return { typeName: ListingDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: ListingDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ListingDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => ListingDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => ListingDestroyed.fromBcs(data), bcs: ListingDestroyed.bcs, fromJSONField: (field) => ListingDestroyed.fromJSONField(field), fromJSON: (json) => ListingDestroyed.fromJSON(json), fromSuiParsedData: (content) => ListingDestroyed.fromSuiParsedData(content), fetch: async (client, id) => ListingDestroyed.fetch(client, id), new: (fields) => { return new ListingDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingDestroyed.reified()); }
    static get p() { return ListingDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingDestroyed", {
            version: bcs_1.bcs.u64(), listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
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
        return ListingDestroyed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ListingDestroyed = ListingDestroyed;
ListingDestroyed.$typeName = `${index_1.PKG_V1}::hive_profile::ListingDestroyed`;
ListingDestroyed.$numTypeParams = 0;
ListingDestroyed.$isPhantom = [];
/* ============================== ListingExpired =============================== */
function isListingExpired(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ListingExpired`; }
class ListingExpired {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ListingExpired.$typeName;
        this.$isPhantom = ListingExpired.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingExpired.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByProfile = fields.listedByProfile;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: ListingExpired.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingExpired.$typeName, ...[]), typeArgs: [], isPhantom: ListingExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ListingExpired.fromFields(fields), fromFieldsWithTypes: (item) => ListingExpired.fromFieldsWithTypes(item), fromBcs: (data) => ListingExpired.fromBcs(data), bcs: ListingExpired.bcs, fromJSONField: (field) => ListingExpired.fromJSONField(field), fromJSON: (json) => ListingExpired.fromJSON(json), fromSuiParsedData: (content) => ListingExpired.fromSuiParsedData(content), fetch: async (client, id) => ListingExpired.fetch(client, id), new: (fields) => { return new ListingExpired([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingExpired.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingExpired.reified()); }
    static get p() { return ListingExpired.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingExpired", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), version: bcs_1.bcs.u64()
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
        return ListingExpired.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ListingExpired = ListingExpired;
ListingExpired.$typeName = `${index_1.PKG_V1}::hive_profile::ListingExpired`;
ListingExpired.$numTypeParams = 0;
ListingExpired.$isPhantom = [];
/* ============================== ListingRecord =============================== */
function isListingRecord(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ListingRecord`; }
class ListingRecord {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ListingRecord.$typeName;
        this.$isPhantom = ListingRecord.$isPhantom;
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
        this.minDsuiPrice = fields.minDsuiPrice;
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
    static reified() { return { typeName: ListingRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingRecord.$typeName, ...[]), typeArgs: [], isPhantom: ListingRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ListingRecord.fromFields(fields), fromFieldsWithTypes: (item) => ListingRecord.fromFieldsWithTypes(item), fromBcs: (data) => ListingRecord.fromBcs(data), bcs: ListingRecord.bcs, fromJSONField: (field) => ListingRecord.fromJSONField(field), fromJSON: (json) => ListingRecord.fromJSON(json), fromSuiParsedData: (content) => ListingRecord.fromSuiParsedData(content), fetch: async (client, id) => ListingRecord.fetch(client, id), new: (fields) => { return new ListingRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingRecord.reified()); }
    static get p() { return ListingRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingRecord", {
            version: bcs_1.bcs.u64(), listing_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64(), min_dsui_price: bcs_1.bcs.u64(), is_sale_listing: bcs_1.bcs.bool(), instant_sale: bcs_1.bcs.bool(), highest_bid_sale: bcs_1.bcs.bool(), lockup_duration: bcs_1.bcs.u8(), start_sec: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ListingRecord.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), listingAccess: (0, reified_1.decodeFromFields)("u8", fields.listing_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount), minDsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.min_dsui_price), isSaleListing: (0, reified_1.decodeFromFields)("bool", fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFields)("bool", fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFields)("bool", fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingRecord(item.type)) {
            throw new Error("not a ListingRecord type");
        }
        return ListingRecord.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), listingAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.listing_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount), minDsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_dsui_price), isSaleListing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return ListingRecord.fromFields(ListingRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), listingAccess: this.listingAccess, discountAccess: this.discountAccess, discount: this.discount.toString(), minDsuiPrice: this.minDsuiPrice.toString(), isSaleListing: this.isSaleListing, instantSale: this.instantSale, highestBidSale: this.highestBidSale, lockupDuration: this.lockupDuration, startSec: this.startSec.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingRecord.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), listingAccess: (0, reified_1.decodeFromJSONField)("u8", field.listingAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount), minDsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.minDsuiPrice), isSaleListing: (0, reified_1.decodeFromJSONField)("bool", field.isSaleListing), instantSale: (0, reified_1.decodeFromJSONField)("bool", field.instantSale), highestBidSale: (0, reified_1.decodeFromJSONField)("bool", field.highestBidSale), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
        return ListingRecord.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ListingRecord = ListingRecord;
ListingRecord.$typeName = `${index_1.PKG_V1}::hive_profile::ListingRecord`;
ListingRecord.$numTypeParams = 0;
ListingRecord.$isPhantom = [];
/* ============================== ListingUpdated =============================== */
function isListingUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ListingUpdated`; }
class ListingUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ListingUpdated.$typeName;
        this.$isPhantom = ListingUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByProfile = fields.listedByProfile;
        ;
        this.version = fields.version;
        ;
        this.minDsuiPrice = fields.minDsuiPrice;
        ;
        this.lockupDuration = fields.lockupDuration;
        ;
        this.startSec = fields.startSec;
        ;
        this.expirationSec = fields.expirationSec;
        ;
        this.listingAccess = fields.listingAccess;
        ;
        this.discountAccess = fields.discountAccess;
        ;
        this.discount = fields.discount;
    }
    static reified() { return { typeName: ListingUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingUpdated.$typeName, ...[]), typeArgs: [], isPhantom: ListingUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ListingUpdated.fromFields(fields), fromFieldsWithTypes: (item) => ListingUpdated.fromFieldsWithTypes(item), fromBcs: (data) => ListingUpdated.fromBcs(data), bcs: ListingUpdated.bcs, fromJSONField: (field) => ListingUpdated.fromJSONField(field), fromJSON: (json) => ListingUpdated.fromJSON(json), fromSuiParsedData: (content) => ListingUpdated.fromSuiParsedData(content), fetch: async (client, id) => ListingUpdated.fetch(client, id), new: (fields) => { return new ListingUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingUpdated.reified()); }
    static get p() { return ListingUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingUpdated", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), version: bcs_1.bcs.u64(), min_dsui_price: bcs_1.bcs.u64(), lockup_duration: bcs_1.bcs.u8(), start_sec: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64(), listing_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ListingUpdated.reified().new({ listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile), version: (0, reified_1.decodeFromFields)("u64", fields.version), minDsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.min_dsui_price), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec), listingAccess: (0, reified_1.decodeFromFields)("u8", fields.listing_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingUpdated(item.type)) {
            throw new Error("not a ListingUpdated type");
        }
        return ListingUpdated.reified().new({ listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), minDsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_dsui_price), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec), listingAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.listing_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount) });
    }
    static fromBcs(data) { return ListingUpdated.fromFields(ListingUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByProfile: this.listedByProfile, version: this.version.toString(), minDsuiPrice: this.minDsuiPrice.toString(), lockupDuration: this.lockupDuration, startSec: this.startSec.toString(), expirationSec: this.expirationSec.toString(), listingAccess: this.listingAccess, discountAccess: this.discountAccess, discount: this.discount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingUpdated.reified().new({ listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile), version: (0, reified_1.decodeFromJSONField)("u64", field.version), minDsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.minDsuiPrice), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec), listingAccess: (0, reified_1.decodeFromJSONField)("u8", field.listingAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount) }); }
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
        return ListingUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ListingUpdated = ListingUpdated;
ListingUpdated.$typeName = `${index_1.PKG_V1}::hive_profile::ListingUpdated`;
ListingUpdated.$numTypeParams = 0;
ListingUpdated.$isPhantom = [];
/* ============================== ManagerAppAccessCapability =============================== */
function isManagerAppAccessCapability(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ManagerAppAccessCapability`; }
class ManagerAppAccessCapability {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ManagerAppAccessCapability.$typeName;
        this.$isPhantom = ManagerAppAccessCapability.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ManagerAppAccessCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.appName = fields.appName;
    }
    static reified() { return { typeName: ManagerAppAccessCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(ManagerAppAccessCapability.$typeName, ...[]), typeArgs: [], isPhantom: ManagerAppAccessCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ManagerAppAccessCapability.fromFields(fields), fromFieldsWithTypes: (item) => ManagerAppAccessCapability.fromFieldsWithTypes(item), fromBcs: (data) => ManagerAppAccessCapability.fromBcs(data), bcs: ManagerAppAccessCapability.bcs, fromJSONField: (field) => ManagerAppAccessCapability.fromJSONField(field), fromJSON: (json) => ManagerAppAccessCapability.fromJSON(json), fromSuiParsedData: (content) => ManagerAppAccessCapability.fromSuiParsedData(content), fetch: async (client, id) => ManagerAppAccessCapability.fetch(client, id), new: (fields) => { return new ManagerAppAccessCapability([], fields); }, kind: "StructClassReified", }; }
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
        return ManagerAppAccessCapability.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ManagerAppAccessCapability = ManagerAppAccessCapability;
ManagerAppAccessCapability.$typeName = `${index_1.PKG_V1}::hive_profile::ManagerAppAccessCapability`;
ManagerAppAccessCapability.$numTypeParams = 0;
ManagerAppAccessCapability.$isPhantom = [];
/* ============================== MarketPlace =============================== */
function isMarketPlace(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V1}::hive_profile::MarketPlace` + '<'); }
class MarketPlace {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MarketPlace.$typeName;
        this.$isPhantom = MarketPlace.$isPhantom;
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
    static reified(X) { return { typeName: MarketPlace.$typeName, fullTypeName: (0, util_1.composeSuiType)(MarketPlace.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: MarketPlace.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => MarketPlace.fromFields(X, fields), fromFieldsWithTypes: (item) => MarketPlace.fromFieldsWithTypes(X, item), fromBcs: (data) => MarketPlace.fromBcs(X, data), bcs: MarketPlace.bcs, fromJSONField: (field) => MarketPlace.fromJSONField(X, field), fromJSON: (json) => MarketPlace.fromJSON(X, json), fromSuiParsedData: (content) => MarketPlace.fromSuiParsedData(X, content), fetch: async (client, id) => MarketPlace.fetch(client, X, id), new: (fields) => { return new MarketPlace([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
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
        return MarketPlace.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.MarketPlace = MarketPlace;
MarketPlace.$typeName = `${index_1.PKG_V1}::hive_profile::MarketPlace`;
MarketPlace.$numTypeParams = 1;
MarketPlace.$isPhantom = [true,];
/* ============================== NewHiveAssetKrafted =============================== */
function isNewHiveAssetKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::NewHiveAssetKrafted`; }
class NewHiveAssetKrafted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewHiveAssetKrafted.$typeName;
        this.$isPhantom = NewHiveAssetKrafted.$isPhantom;
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
    static reified() { return { typeName: NewHiveAssetKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewHiveAssetKrafted.$typeName, ...[]), typeArgs: [], isPhantom: NewHiveAssetKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewHiveAssetKrafted.fromFields(fields), fromFieldsWithTypes: (item) => NewHiveAssetKrafted.fromFieldsWithTypes(item), fromBcs: (data) => NewHiveAssetKrafted.fromBcs(data), bcs: NewHiveAssetKrafted.bcs, fromJSONField: (field) => NewHiveAssetKrafted.fromJSONField(field), fromJSON: (json) => NewHiveAssetKrafted.fromJSON(json), fromSuiParsedData: (content) => NewHiveAssetKrafted.fromSuiParsedData(content), fetch: async (client, id) => NewHiveAssetKrafted.fetch(client, id), new: (fields) => { return new NewHiveAssetKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewHiveAssetKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewHiveAssetKrafted.reified()); }
    static get p() { return NewHiveAssetKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewHiveAssetKrafted", {
            id: structs_6.ID.bcs, krafter_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), krafter: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), collection_name: structs_3.String.bcs, name: structs_3.String.bcs, version: bcs_1.bcs.u64(), img_url: structs_3.String.bcs, genesis_hivegems: bcs_1.bcs.u64(), power: bcs_1.bcs.u64(), price: bcs_1.bcs.u64(), traits_list: bcs_1.bcs.vector(structs_3.String.bcs), prompts_list: bcs_1.bcs.vector(structs_3.String.bcs)
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
            id: this.id, krafterProfileAddr: this.krafterProfileAddr, krafter: this.krafter, collectionName: this.collectionName, name: this.name, version: this.version.toString(), imgUrl: this.imgUrl, genesisHivegems: this.genesisHivegems.toString(), power: this.power.toString(), price: this.price.toString(), traitsList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.traitsList), promptsList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.promptsList),
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
        return NewHiveAssetKrafted.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewHiveAssetKrafted = NewHiveAssetKrafted;
NewHiveAssetKrafted.$typeName = `${index_1.PKG_V1}::hive_profile::NewHiveAssetKrafted`;
NewHiveAssetKrafted.$numTypeParams = 0;
NewHiveAssetKrafted.$isPhantom = [];
/* ============================== NewListing =============================== */
function isNewListing(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::NewListing`; }
class NewListing {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewListing.$typeName;
        this.$isPhantom = NewListing.$isPhantom;
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
        this.minDsuiPrice = fields.minDsuiPrice;
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
    static reified() { return { typeName: NewListing.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewListing.$typeName, ...[]), typeArgs: [], isPhantom: NewListing.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewListing.fromFields(fields), fromFieldsWithTypes: (item) => NewListing.fromFieldsWithTypes(item), fromBcs: (data) => NewListing.fromBcs(data), bcs: NewListing.bcs, fromJSONField: (field) => NewListing.fromJSONField(field), fromJSON: (json) => NewListing.fromJSON(json), fromSuiParsedData: (content) => NewListing.fromSuiParsedData(content), fetch: async (client, id) => NewListing.fetch(client, id), new: (fields) => { return new NewListing([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewListing.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewListing.reified()); }
    static get p() { return NewListing.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewListing", {
            listed_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), listing_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64(), version: bcs_1.bcs.u64(), min_dsui_price: bcs_1.bcs.u64(), is_sale_listing: bcs_1.bcs.bool(), instant_sale: bcs_1.bcs.bool(), highest_bid_sale: bcs_1.bcs.bool(), lockup_duration: bcs_1.bcs.u8(), start_sec: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewListing.reified().new({ listedByProfile: (0, reified_1.decodeFromFields)("address", fields.listed_by_profile), listingAccess: (0, reified_1.decodeFromFields)("u8", fields.listing_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount), version: (0, reified_1.decodeFromFields)("u64", fields.version), minDsuiPrice: (0, reified_1.decodeFromFields)("u64", fields.min_dsui_price), isSaleListing: (0, reified_1.decodeFromFields)("bool", fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFields)("bool", fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFields)("bool", fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFields)("u8", fields.lockup_duration), startSec: (0, reified_1.decodeFromFields)("u64", fields.start_sec), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewListing(item.type)) {
            throw new Error("not a NewListing type");
        }
        return NewListing.reified().new({ listedByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_profile), listingAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.listing_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), minDsuiPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_dsui_price), isSaleListing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.highest_bid_sale), lockupDuration: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.lockup_duration), startSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_sec), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return NewListing.fromFields(NewListing.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByProfile: this.listedByProfile, listingAccess: this.listingAccess, discountAccess: this.discountAccess, discount: this.discount.toString(), version: this.version.toString(), minDsuiPrice: this.minDsuiPrice.toString(), isSaleListing: this.isSaleListing, instantSale: this.instantSale, highestBidSale: this.highestBidSale, lockupDuration: this.lockupDuration, startSec: this.startSec.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewListing.reified().new({ listedByProfile: (0, reified_1.decodeFromJSONField)("address", field.listedByProfile), listingAccess: (0, reified_1.decodeFromJSONField)("u8", field.listingAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount), version: (0, reified_1.decodeFromJSONField)("u64", field.version), minDsuiPrice: (0, reified_1.decodeFromJSONField)("u64", field.minDsuiPrice), isSaleListing: (0, reified_1.decodeFromJSONField)("bool", field.isSaleListing), instantSale: (0, reified_1.decodeFromJSONField)("bool", field.instantSale), highestBidSale: (0, reified_1.decodeFromJSONField)("bool", field.highestBidSale), lockupDuration: (0, reified_1.decodeFromJSONField)("u8", field.lockupDuration), startSec: (0, reified_1.decodeFromJSONField)("u64", field.startSec), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
        return NewListing.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewListing = NewListing;
NewListing.$typeName = `${index_1.PKG_V1}::hive_profile::NewListing`;
NewListing.$numTypeParams = 0;
NewListing.$isPhantom = [];
/* ============================== PricingAndAccessSetInHiveKiosk =============================== */
function isPricingAndAccessSetInHiveKiosk(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::PricingAndAccessSetInHiveKiosk`; }
class PricingAndAccessSetInHiveKiosk {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PricingAndAccessSetInHiveKiosk.$typeName;
        this.$isPhantom = PricingAndAccessSetInHiveKiosk.$isPhantom;
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
        this.poolPct = fields.poolPct;
        ;
        this.kraftAccess = fields.kraftAccess;
        ;
        this.discountAccess = fields.discountAccess;
        ;
        this.discount = fields.discount;
    }
    static reified() { return { typeName: PricingAndAccessSetInHiveKiosk.$typeName, fullTypeName: (0, util_1.composeSuiType)(PricingAndAccessSetInHiveKiosk.$typeName, ...[]), typeArgs: [], isPhantom: PricingAndAccessSetInHiveKiosk.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PricingAndAccessSetInHiveKiosk.fromFields(fields), fromFieldsWithTypes: (item) => PricingAndAccessSetInHiveKiosk.fromFieldsWithTypes(item), fromBcs: (data) => PricingAndAccessSetInHiveKiosk.fromBcs(data), bcs: PricingAndAccessSetInHiveKiosk.bcs, fromJSONField: (field) => PricingAndAccessSetInHiveKiosk.fromJSONField(field), fromJSON: (json) => PricingAndAccessSetInHiveKiosk.fromJSON(json), fromSuiParsedData: (content) => PricingAndAccessSetInHiveKiosk.fromSuiParsedData(content), fetch: async (client, id) => PricingAndAccessSetInHiveKiosk.fetch(client, id), new: (fields) => { return new PricingAndAccessSetInHiveKiosk([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PricingAndAccessSetInHiveKiosk.reified(); }
    static phantom() { return (0, reified_1.phantom)(PricingAndAccessSetInHiveKiosk.reified()); }
    static get p() { return PricingAndAccessSetInHiveKiosk.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PricingAndAccessSetInHiveKiosk", {
            creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), collection_name: structs_3.String.bcs, base_price: bcs_1.bcs.u64(), curve_a: bcs_1.bcs.u64(), pool_pct: bcs_1.bcs.u64(), kraft_access: bcs_1.bcs.u8(), discount_access: bcs_1.bcs.u8(), discount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PricingAndAccessSetInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), basePrice: (0, reified_1.decodeFromFields)("u64", fields.base_price), curveA: (0, reified_1.decodeFromFields)("u64", fields.curve_a), poolPct: (0, reified_1.decodeFromFields)("u64", fields.pool_pct), kraftAccess: (0, reified_1.decodeFromFields)("u8", fields.kraft_access), discountAccess: (0, reified_1.decodeFromFields)("u8", fields.discount_access), discount: (0, reified_1.decodeFromFields)("u64", fields.discount) }); }
    static fromFieldsWithTypes(item) {
        if (!isPricingAndAccessSetInHiveKiosk(item.type)) {
            throw new Error("not a PricingAndAccessSetInHiveKiosk type");
        }
        return PricingAndAccessSetInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), basePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.base_price), curveA: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.curve_a), poolPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_pct), kraftAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.kraft_access), discountAccess: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.discount_access), discount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.discount) });
    }
    static fromBcs(data) { return PricingAndAccessSetInHiveKiosk.fromFields(PricingAndAccessSetInHiveKiosk.bcs.parse(data)); }
    toJSONField() {
        return {
            creatorProfile: this.creatorProfile, collectionName: this.collectionName, basePrice: this.basePrice.toString(), curveA: this.curveA.toString(), poolPct: this.poolPct.toString(), kraftAccess: this.kraftAccess, discountAccess: this.discountAccess, discount: this.discount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PricingAndAccessSetInHiveKiosk.reified().new({ creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), basePrice: (0, reified_1.decodeFromJSONField)("u64", field.basePrice), curveA: (0, reified_1.decodeFromJSONField)("u64", field.curveA), poolPct: (0, reified_1.decodeFromJSONField)("u64", field.poolPct), kraftAccess: (0, reified_1.decodeFromJSONField)("u8", field.kraftAccess), discountAccess: (0, reified_1.decodeFromJSONField)("u8", field.discountAccess), discount: (0, reified_1.decodeFromJSONField)("u64", field.discount) }); }
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
        return PricingAndAccessSetInHiveKiosk.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PricingAndAccessSetInHiveKiosk = PricingAndAccessSetInHiveKiosk;
PricingAndAccessSetInHiveKiosk.$typeName = `${index_1.PKG_V1}::hive_profile::PricingAndAccessSetInHiveKiosk`;
PricingAndAccessSetInHiveKiosk.$numTypeParams = 0;
PricingAndAccessSetInHiveKiosk.$isPhantom = [];
/* ============================== ProfileConfigParamsUpdated =============================== */
function isProfileConfigParamsUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ProfileConfigParamsUpdated`; }
class ProfileConfigParamsUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ProfileConfigParamsUpdated.$typeName;
        this.$isPhantom = ProfileConfigParamsUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ProfileConfigParamsUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.maxBidsPerAsset = fields.maxBidsPerAsset;
        ;
        this.minDsuiBidAllowed = fields.minDsuiBidAllowed;
        ;
        this.profileKraftFeesSui = fields.profileKraftFeesSui;
        ;
        this.socialFeeGems = fields.socialFeeGems;
        ;
        this.socialMultiplierForGems = fields.socialMultiplierForGems;
        ;
        this.socialMultiplierForPower = fields.socialMultiplierForPower;
    }
    static reified() { return { typeName: ProfileConfigParamsUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ProfileConfigParamsUpdated.$typeName, ...[]), typeArgs: [], isPhantom: ProfileConfigParamsUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ProfileConfigParamsUpdated.fromFields(fields), fromFieldsWithTypes: (item) => ProfileConfigParamsUpdated.fromFieldsWithTypes(item), fromBcs: (data) => ProfileConfigParamsUpdated.fromBcs(data), bcs: ProfileConfigParamsUpdated.bcs, fromJSONField: (field) => ProfileConfigParamsUpdated.fromJSONField(field), fromJSON: (json) => ProfileConfigParamsUpdated.fromJSON(json), fromSuiParsedData: (content) => ProfileConfigParamsUpdated.fromSuiParsedData(content), fetch: async (client, id) => ProfileConfigParamsUpdated.fetch(client, id), new: (fields) => { return new ProfileConfigParamsUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ProfileConfigParamsUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(ProfileConfigParamsUpdated.reified()); }
    static get p() { return ProfileConfigParamsUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ProfileConfigParamsUpdated", {
            max_bids_per_asset: bcs_1.bcs.u64(), min_dsui_bid_allowed: bcs_1.bcs.u64(), profile_kraft_fees_sui: bcs_1.bcs.u64(), social_fee_gems: bcs_1.bcs.u64(), social_multiplier_for_gems: bcs_1.bcs.u64(), social_multiplier_for_power: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ProfileConfigParamsUpdated.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromFields)("u64", fields.max_bids_per_asset), minDsuiBidAllowed: (0, reified_1.decodeFromFields)("u64", fields.min_dsui_bid_allowed), profileKraftFeesSui: (0, reified_1.decodeFromFields)("u64", fields.profile_kraft_fees_sui), socialFeeGems: (0, reified_1.decodeFromFields)("u64", fields.social_fee_gems), socialMultiplierForGems: (0, reified_1.decodeFromFields)("u64", fields.social_multiplier_for_gems), socialMultiplierForPower: (0, reified_1.decodeFromFields)("u64", fields.social_multiplier_for_power) }); }
    static fromFieldsWithTypes(item) {
        if (!isProfileConfigParamsUpdated(item.type)) {
            throw new Error("not a ProfileConfigParamsUpdated type");
        }
        return ProfileConfigParamsUpdated.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_bids_per_asset), minDsuiBidAllowed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_dsui_bid_allowed), profileKraftFeesSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.profile_kraft_fees_sui), socialFeeGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_fee_gems), socialMultiplierForGems: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_multiplier_for_gems), socialMultiplierForPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.social_multiplier_for_power) });
    }
    static fromBcs(data) { return ProfileConfigParamsUpdated.fromFields(ProfileConfigParamsUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            maxBidsPerAsset: this.maxBidsPerAsset.toString(), minDsuiBidAllowed: this.minDsuiBidAllowed.toString(), profileKraftFeesSui: this.profileKraftFeesSui.toString(), socialFeeGems: this.socialFeeGems.toString(), socialMultiplierForGems: this.socialMultiplierForGems.toString(), socialMultiplierForPower: this.socialMultiplierForPower.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ProfileConfigParamsUpdated.reified().new({ maxBidsPerAsset: (0, reified_1.decodeFromJSONField)("u64", field.maxBidsPerAsset), minDsuiBidAllowed: (0, reified_1.decodeFromJSONField)("u64", field.minDsuiBidAllowed), profileKraftFeesSui: (0, reified_1.decodeFromJSONField)("u64", field.profileKraftFeesSui), socialFeeGems: (0, reified_1.decodeFromJSONField)("u64", field.socialFeeGems), socialMultiplierForGems: (0, reified_1.decodeFromJSONField)("u64", field.socialMultiplierForGems), socialMultiplierForPower: (0, reified_1.decodeFromJSONField)("u64", field.socialMultiplierForPower) }); }
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
        return ProfileConfigParamsUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ProfileConfigParamsUpdated = ProfileConfigParamsUpdated;
ProfileConfigParamsUpdated.$typeName = `${index_1.PKG_V1}::hive_profile::ProfileConfigParamsUpdated`;
ProfileConfigParamsUpdated.$numTypeParams = 0;
ProfileConfigParamsUpdated.$isPhantom = [];
/* ============================== PublicKraftConfig =============================== */
function isPublicKraftConfig(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::PublicKraftConfig`; }
class PublicKraftConfig {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PublicKraftConfig.$typeName;
        this.$isPhantom = PublicKraftConfig.$isPhantom;
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
    static reified() { return { typeName: PublicKraftConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(PublicKraftConfig.$typeName, ...[]), typeArgs: [], isPhantom: PublicKraftConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PublicKraftConfig.fromFields(fields), fromFieldsWithTypes: (item) => PublicKraftConfig.fromFieldsWithTypes(item), fromBcs: (data) => PublicKraftConfig.fromBcs(data), bcs: PublicKraftConfig.bcs, fromJSONField: (field) => PublicKraftConfig.fromJSONField(field), fromJSON: (json) => PublicKraftConfig.fromJSON(json), fromSuiParsedData: (content) => PublicKraftConfig.fromSuiParsedData(content), fetch: async (client, id) => PublicKraftConfig.fetch(client, id), new: (fields) => { return new PublicKraftConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PublicKraftConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(PublicKraftConfig.reified()); }
    static get p() { return PublicKraftConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PublicKraftConfig", {
            id: structs_6.UID.bcs, start_time: bcs_1.bcs.u64(), per_user_limit: bcs_1.bcs.u64(), krafts_processed: bcs_1.bcs.u64(), address_list: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }))
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
        return PublicKraftConfig.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PublicKraftConfig = PublicKraftConfig;
PublicKraftConfig.$typeName = `${index_1.PKG_V1}::hive_profile::PublicKraftConfig`;
PublicKraftConfig.$numTypeParams = 0;
PublicKraftConfig.$isPhantom = [];
/* ============================== PublicKraftInitialized =============================== */
function isPublicKraftInitialized(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::PublicKraftInitialized`; }
class PublicKraftInitialized {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PublicKraftInitialized.$typeName;
        this.$isPhantom = PublicKraftInitialized.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PublicKraftInitialized.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.collectionName = fields.collectionName;
        ;
        this.kioskAddr = fields.kioskAddr;
        ;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.creatorProfileUsername = fields.creatorProfileUsername;
        ;
        this.startTime = fields.startTime;
        ;
        this.perUserLimit = fields.perUserLimit;
    }
    static reified() { return { typeName: PublicKraftInitialized.$typeName, fullTypeName: (0, util_1.composeSuiType)(PublicKraftInitialized.$typeName, ...[]), typeArgs: [], isPhantom: PublicKraftInitialized.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PublicKraftInitialized.fromFields(fields), fromFieldsWithTypes: (item) => PublicKraftInitialized.fromFieldsWithTypes(item), fromBcs: (data) => PublicKraftInitialized.fromBcs(data), bcs: PublicKraftInitialized.bcs, fromJSONField: (field) => PublicKraftInitialized.fromJSONField(field), fromJSON: (json) => PublicKraftInitialized.fromJSON(json), fromSuiParsedData: (content) => PublicKraftInitialized.fromSuiParsedData(content), fetch: async (client, id) => PublicKraftInitialized.fetch(client, id), new: (fields) => { return new PublicKraftInitialized([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PublicKraftInitialized.reified(); }
    static phantom() { return (0, reified_1.phantom)(PublicKraftInitialized.reified()); }
    static get p() { return PublicKraftInitialized.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PublicKraftInitialized", {
            collection_name: structs_3.String.bcs, kiosk_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), creator_profile_username: structs_1.String.bcs, start_time: bcs_1.bcs.u64(), per_user_limit: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PublicKraftInitialized.reified().new({ collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), kioskAddr: (0, reified_1.decodeFromFields)("address", fields.kiosk_addr), creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), creatorProfileUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.creator_profile_username), startTime: (0, reified_1.decodeFromFields)("u64", fields.start_time), perUserLimit: (0, reified_1.decodeFromFields)("u64", fields.per_user_limit) }); }
    static fromFieldsWithTypes(item) {
        if (!isPublicKraftInitialized(item.type)) {
            throw new Error("not a PublicKraftInitialized type");
        }
        return PublicKraftInitialized.reified().new({ collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), kioskAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.kiosk_addr), creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), creatorProfileUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.creator_profile_username), startTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_time), perUserLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.per_user_limit) });
    }
    static fromBcs(data) { return PublicKraftInitialized.fromFields(PublicKraftInitialized.bcs.parse(data)); }
    toJSONField() {
        return {
            collectionName: this.collectionName, kioskAddr: this.kioskAddr, creatorProfile: this.creatorProfile, creatorProfileUsername: this.creatorProfileUsername, startTime: this.startTime.toString(), perUserLimit: this.perUserLimit.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PublicKraftInitialized.reified().new({ collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), kioskAddr: (0, reified_1.decodeFromJSONField)("address", field.kioskAddr), creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), creatorProfileUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.creatorProfileUsername), startTime: (0, reified_1.decodeFromJSONField)("u64", field.startTime), perUserLimit: (0, reified_1.decodeFromJSONField)("u64", field.perUserLimit) }); }
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
        return PublicKraftInitialized.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PublicKraftInitialized = PublicKraftInitialized;
PublicKraftInitialized.$typeName = `${index_1.PKG_V1}::hive_profile::PublicKraftInitialized`;
PublicKraftInitialized.$numTypeParams = 0;
PublicKraftInitialized.$isPhantom = [];
/* ============================== RemovedUpgradeForVersion =============================== */
function isRemovedUpgradeForVersion(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::RemovedUpgradeForVersion`; }
class RemovedUpgradeForVersion {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RemovedUpgradeForVersion.$typeName;
        this.$isPhantom = RemovedUpgradeForVersion.$isPhantom;
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
    static reified() { return { typeName: RemovedUpgradeForVersion.$typeName, fullTypeName: (0, util_1.composeSuiType)(RemovedUpgradeForVersion.$typeName, ...[]), typeArgs: [], isPhantom: RemovedUpgradeForVersion.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RemovedUpgradeForVersion.fromFields(fields), fromFieldsWithTypes: (item) => RemovedUpgradeForVersion.fromFieldsWithTypes(item), fromBcs: (data) => RemovedUpgradeForVersion.fromBcs(data), bcs: RemovedUpgradeForVersion.bcs, fromJSONField: (field) => RemovedUpgradeForVersion.fromJSONField(field), fromJSON: (json) => RemovedUpgradeForVersion.fromJSON(json), fromSuiParsedData: (content) => RemovedUpgradeForVersion.fromSuiParsedData(content), fetch: async (client, id) => RemovedUpgradeForVersion.fetch(client, id), new: (fields) => { return new RemovedUpgradeForVersion([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RemovedUpgradeForVersion.reified(); }
    static phantom() { return (0, reified_1.phantom)(RemovedUpgradeForVersion.reified()); }
    static get p() { return RemovedUpgradeForVersion.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RemovedUpgradeForVersion", {
            creator_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), collection_name: structs_3.String.bcs, version: bcs_1.bcs.u64(), upgrade_index: bcs_1.bcs.u64()
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
        return RemovedUpgradeForVersion.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RemovedUpgradeForVersion = RemovedUpgradeForVersion;
RemovedUpgradeForVersion.$typeName = `${index_1.PKG_V1}::hive_profile::RemovedUpgradeForVersion`;
RemovedUpgradeForVersion.$numTypeParams = 0;
RemovedUpgradeForVersion.$isPhantom = [];
/* ============================== ReturnBorrowedHiveAsset =============================== */
function isReturnBorrowedHiveAsset(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::ReturnBorrowedHiveAsset`; }
class ReturnBorrowedHiveAsset {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ReturnBorrowedHiveAsset.$typeName;
        this.$isPhantom = ReturnBorrowedHiveAsset.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ReturnBorrowedHiveAsset.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.owner = fields.owner;
        ;
        this.borrowerProfile = fields.borrowerProfile;
    }
    static reified() { return { typeName: ReturnBorrowedHiveAsset.$typeName, fullTypeName: (0, util_1.composeSuiType)(ReturnBorrowedHiveAsset.$typeName, ...[]), typeArgs: [], isPhantom: ReturnBorrowedHiveAsset.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ReturnBorrowedHiveAsset.fromFields(fields), fromFieldsWithTypes: (item) => ReturnBorrowedHiveAsset.fromFieldsWithTypes(item), fromBcs: (data) => ReturnBorrowedHiveAsset.fromBcs(data), bcs: ReturnBorrowedHiveAsset.bcs, fromJSONField: (field) => ReturnBorrowedHiveAsset.fromJSONField(field), fromJSON: (json) => ReturnBorrowedHiveAsset.fromJSON(json), fromSuiParsedData: (content) => ReturnBorrowedHiveAsset.fromSuiParsedData(content), fetch: async (client, id) => ReturnBorrowedHiveAsset.fetch(client, id), new: (fields) => { return new ReturnBorrowedHiveAsset([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ReturnBorrowedHiveAsset.reified(); }
    static phantom() { return (0, reified_1.phantom)(ReturnBorrowedHiveAsset.reified()); }
    static get p() { return ReturnBorrowedHiveAsset.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ReturnBorrowedHiveAsset", {
            version: bcs_1.bcs.u64(), owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), borrower_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
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
        return ReturnBorrowedHiveAsset.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ReturnBorrowedHiveAsset = ReturnBorrowedHiveAsset;
ReturnBorrowedHiveAsset.$typeName = `${index_1.PKG_V1}::hive_profile::ReturnBorrowedHiveAsset`;
ReturnBorrowedHiveAsset.$numTypeParams = 0;
ReturnBorrowedHiveAsset.$isPhantom = [];
/* ============================== Royalty =============================== */
function isRoyalty(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::Royalty`; }
class Royalty {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Royalty.$typeName;
        this.$isPhantom = Royalty.$isPhantom;
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
    static reified() { return { typeName: Royalty.$typeName, fullTypeName: (0, util_1.composeSuiType)(Royalty.$typeName, ...[]), typeArgs: [], isPhantom: Royalty.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Royalty.fromFields(fields), fromFieldsWithTypes: (item) => Royalty.fromFieldsWithTypes(item), fromBcs: (data) => Royalty.fromBcs(data), bcs: Royalty.bcs, fromJSONField: (field) => Royalty.fromJSONField(field), fromJSON: (json) => Royalty.fromJSON(json), fromSuiParsedData: (content) => Royalty.fromSuiParsedData(content), fetch: async (client, id) => Royalty.fetch(client, id), new: (fields) => { return new Royalty([], fields); }, kind: "StructClassReified", }; }
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
        return Royalty.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Royalty = Royalty;
Royalty.$typeName = `${index_1.PKG_V1}::hive_profile::Royalty`;
Royalty.$numTypeParams = 0;
Royalty.$isPhantom = [];
/* ============================== RoyaltyCollectedForCreator =============================== */
function isRoyaltyCollectedForCreator(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::RoyaltyCollectedForCreator`; }
class RoyaltyCollectedForCreator {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RoyaltyCollectedForCreator.$typeName;
        this.$isPhantom = RoyaltyCollectedForCreator.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RoyaltyCollectedForCreator.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.kioskAddr = fields.kioskAddr;
        ;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.username = fields.username;
        ;
        this.dsuiCollected = fields.dsuiCollected;
        ;
        this.collectionName = fields.collectionName;
    }
    static reified() { return { typeName: RoyaltyCollectedForCreator.$typeName, fullTypeName: (0, util_1.composeSuiType)(RoyaltyCollectedForCreator.$typeName, ...[]), typeArgs: [], isPhantom: RoyaltyCollectedForCreator.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RoyaltyCollectedForCreator.fromFields(fields), fromFieldsWithTypes: (item) => RoyaltyCollectedForCreator.fromFieldsWithTypes(item), fromBcs: (data) => RoyaltyCollectedForCreator.fromBcs(data), bcs: RoyaltyCollectedForCreator.bcs, fromJSONField: (field) => RoyaltyCollectedForCreator.fromJSONField(field), fromJSON: (json) => RoyaltyCollectedForCreator.fromJSON(json), fromSuiParsedData: (content) => RoyaltyCollectedForCreator.fromSuiParsedData(content), fetch: async (client, id) => RoyaltyCollectedForCreator.fetch(client, id), new: (fields) => { return new RoyaltyCollectedForCreator([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RoyaltyCollectedForCreator.reified(); }
    static phantom() { return (0, reified_1.phantom)(RoyaltyCollectedForCreator.reified()); }
    static get p() { return RoyaltyCollectedForCreator.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RoyaltyCollectedForCreator", {
            kiosk_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_1.String.bcs, dsui_collected: bcs_1.bcs.u64(), collection_name: structs_3.String.bcs
        });
    }
    ;
    static fromFields(fields) { return RoyaltyCollectedForCreator.reified().new({ kioskAddr: (0, reified_1.decodeFromFields)("address", fields.kiosk_addr), creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), dsuiCollected: (0, reified_1.decodeFromFields)("u64", fields.dsui_collected), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isRoyaltyCollectedForCreator(item.type)) {
            throw new Error("not a RoyaltyCollectedForCreator type");
        }
        return RoyaltyCollectedForCreator.reified().new({ kioskAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.kiosk_addr), creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), dsuiCollected: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_collected), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name) });
    }
    static fromBcs(data) { return RoyaltyCollectedForCreator.fromFields(RoyaltyCollectedForCreator.bcs.parse(data)); }
    toJSONField() {
        return {
            kioskAddr: this.kioskAddr, creatorProfile: this.creatorProfile, username: this.username, dsuiCollected: this.dsuiCollected.toString(), collectionName: this.collectionName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RoyaltyCollectedForCreator.reified().new({ kioskAddr: (0, reified_1.decodeFromJSONField)("address", field.kioskAddr), creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), dsuiCollected: (0, reified_1.decodeFromJSONField)("u64", field.dsuiCollected), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName) }); }
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
        return RoyaltyCollectedForCreator.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RoyaltyCollectedForCreator = RoyaltyCollectedForCreator;
RoyaltyCollectedForCreator.$typeName = `${index_1.PKG_V1}::hive_profile::RoyaltyCollectedForCreator`;
RoyaltyCollectedForCreator.$numTypeParams = 0;
RoyaltyCollectedForCreator.$isPhantom = [];
/* ============================== RoyaltyProcessed =============================== */
function isRoyaltyProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::RoyaltyProcessed`; }
class RoyaltyProcessed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RoyaltyProcessed.$typeName;
        this.$isPhantom = RoyaltyProcessed.$isPhantom;
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
    static reified() { return { typeName: RoyaltyProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(RoyaltyProcessed.$typeName, ...[]), typeArgs: [], isPhantom: RoyaltyProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RoyaltyProcessed.fromFields(fields), fromFieldsWithTypes: (item) => RoyaltyProcessed.fromFieldsWithTypes(item), fromBcs: (data) => RoyaltyProcessed.fromBcs(data), bcs: RoyaltyProcessed.bcs, fromJSONField: (field) => RoyaltyProcessed.fromJSONField(field), fromJSON: (json) => RoyaltyProcessed.fromJSON(json), fromSuiParsedData: (content) => RoyaltyProcessed.fromSuiParsedData(content), fetch: async (client, id) => RoyaltyProcessed.fetch(client, id), new: (fields) => { return new RoyaltyProcessed([], fields); }, kind: "StructClassReified", }; }
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
        return RoyaltyProcessed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RoyaltyProcessed = RoyaltyProcessed;
RoyaltyProcessed.$typeName = `${index_1.PKG_V1}::hive_profile::RoyaltyProcessed`;
RoyaltyProcessed.$numTypeParams = 0;
RoyaltyProcessed.$isPhantom = [];
/* ============================== SaleExecuted =============================== */
function isSaleExecuted(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::SaleExecuted`; }
class SaleExecuted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SaleExecuted.$typeName;
        this.$isPhantom = SaleExecuted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SaleExecuted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.buyerProfile = fields.buyerProfile;
        ;
        this.sellerProfile = fields.sellerProfile;
        ;
        this.pricePaidDsui = fields.pricePaidDsui;
        ;
        this.isSaleListing = fields.isSaleListing;
        ;
        this.instantSale = fields.instantSale;
        ;
        this.highestBidSale = fields.highestBidSale;
        ;
        this.isDirectBidAccepted = fields.isDirectBidAccepted;
    }
    static reified() { return { typeName: SaleExecuted.$typeName, fullTypeName: (0, util_1.composeSuiType)(SaleExecuted.$typeName, ...[]), typeArgs: [], isPhantom: SaleExecuted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SaleExecuted.fromFields(fields), fromFieldsWithTypes: (item) => SaleExecuted.fromFieldsWithTypes(item), fromBcs: (data) => SaleExecuted.fromBcs(data), bcs: SaleExecuted.bcs, fromJSONField: (field) => SaleExecuted.fromJSONField(field), fromJSON: (json) => SaleExecuted.fromJSON(json), fromSuiParsedData: (content) => SaleExecuted.fromSuiParsedData(content), fetch: async (client, id) => SaleExecuted.fetch(client, id), new: (fields) => { return new SaleExecuted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SaleExecuted.reified(); }
    static phantom() { return (0, reified_1.phantom)(SaleExecuted.reified()); }
    static get p() { return SaleExecuted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SaleExecuted", {
            version: bcs_1.bcs.u64(), buyer_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), seller_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), price_paid_dsui: bcs_1.bcs.u64(), is_sale_listing: bcs_1.bcs.bool(), instant_sale: bcs_1.bcs.bool(), highest_bid_sale: bcs_1.bcs.bool(), is_direct_bid_accepted: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return SaleExecuted.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), buyerProfile: (0, reified_1.decodeFromFields)("address", fields.buyer_profile), sellerProfile: (0, reified_1.decodeFromFields)("address", fields.seller_profile), pricePaidDsui: (0, reified_1.decodeFromFields)("u64", fields.price_paid_dsui), isSaleListing: (0, reified_1.decodeFromFields)("bool", fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFields)("bool", fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFields)("bool", fields.highest_bid_sale), isDirectBidAccepted: (0, reified_1.decodeFromFields)("bool", fields.is_direct_bid_accepted) }); }
    static fromFieldsWithTypes(item) {
        if (!isSaleExecuted(item.type)) {
            throw new Error("not a SaleExecuted type");
        }
        return SaleExecuted.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), buyerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.buyer_profile), sellerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.seller_profile), pricePaidDsui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_paid_dsui), isSaleListing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_sale_listing), instantSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.instant_sale), highestBidSale: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.highest_bid_sale), isDirectBidAccepted: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_direct_bid_accepted) });
    }
    static fromBcs(data) { return SaleExecuted.fromFields(SaleExecuted.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), buyerProfile: this.buyerProfile, sellerProfile: this.sellerProfile, pricePaidDsui: this.pricePaidDsui.toString(), isSaleListing: this.isSaleListing, instantSale: this.instantSale, highestBidSale: this.highestBidSale, isDirectBidAccepted: this.isDirectBidAccepted,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SaleExecuted.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), buyerProfile: (0, reified_1.decodeFromJSONField)("address", field.buyerProfile), sellerProfile: (0, reified_1.decodeFromJSONField)("address", field.sellerProfile), pricePaidDsui: (0, reified_1.decodeFromJSONField)("u64", field.pricePaidDsui), isSaleListing: (0, reified_1.decodeFromJSONField)("bool", field.isSaleListing), instantSale: (0, reified_1.decodeFromJSONField)("bool", field.instantSale), highestBidSale: (0, reified_1.decodeFromJSONField)("bool", field.highestBidSale), isDirectBidAccepted: (0, reified_1.decodeFromJSONField)("bool", field.isDirectBidAccepted) }); }
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
        return SaleExecuted.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SaleExecuted = SaleExecuted;
SaleExecuted.$typeName = `${index_1.PKG_V1}::hive_profile::SaleExecuted`;
SaleExecuted.$numTypeParams = 0;
SaleExecuted.$isPhantom = [];
/* ============================== SubscriptionRoyalty =============================== */
function isSubscriptionRoyalty(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::SubscriptionRoyalty`; }
class SubscriptionRoyalty {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SubscriptionRoyalty.$typeName;
        this.$isPhantom = SubscriptionRoyalty.$isPhantom;
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
    static reified() { return { typeName: SubscriptionRoyalty.$typeName, fullTypeName: (0, util_1.composeSuiType)(SubscriptionRoyalty.$typeName, ...[]), typeArgs: [], isPhantom: SubscriptionRoyalty.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SubscriptionRoyalty.fromFields(fields), fromFieldsWithTypes: (item) => SubscriptionRoyalty.fromFieldsWithTypes(item), fromBcs: (data) => SubscriptionRoyalty.fromBcs(data), bcs: SubscriptionRoyalty.bcs, fromJSONField: (field) => SubscriptionRoyalty.fromJSONField(field), fromJSON: (json) => SubscriptionRoyalty.fromJSON(json), fromSuiParsedData: (content) => SubscriptionRoyalty.fromSuiParsedData(content), fetch: async (client, id) => SubscriptionRoyalty.fetch(client, id), new: (fields) => { return new SubscriptionRoyalty([], fields); }, kind: "StructClassReified", }; }
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
        return SubscriptionRoyalty.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SubscriptionRoyalty = SubscriptionRoyalty;
SubscriptionRoyalty.$typeName = `${index_1.PKG_V1}::hive_profile::SubscriptionRoyalty`;
SubscriptionRoyalty.$numTypeParams = 0;
SubscriptionRoyalty.$isPhantom = [];
/* ============================== TotalActivePowerUpdated =============================== */
function isTotalActivePowerUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::TotalActivePowerUpdated`; }
class TotalActivePowerUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TotalActivePowerUpdated.$typeName;
        this.$isPhantom = TotalActivePowerUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TotalActivePowerUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.hiveTotalActivePower = fields.hiveTotalActivePower;
        ;
        this.totalStakedAssets = fields.totalStakedAssets;
    }
    static reified() { return { typeName: TotalActivePowerUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(TotalActivePowerUpdated.$typeName, ...[]), typeArgs: [], isPhantom: TotalActivePowerUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TotalActivePowerUpdated.fromFields(fields), fromFieldsWithTypes: (item) => TotalActivePowerUpdated.fromFieldsWithTypes(item), fromBcs: (data) => TotalActivePowerUpdated.fromBcs(data), bcs: TotalActivePowerUpdated.bcs, fromJSONField: (field) => TotalActivePowerUpdated.fromJSONField(field), fromJSON: (json) => TotalActivePowerUpdated.fromJSON(json), fromSuiParsedData: (content) => TotalActivePowerUpdated.fromSuiParsedData(content), fetch: async (client, id) => TotalActivePowerUpdated.fetch(client, id), new: (fields) => { return new TotalActivePowerUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TotalActivePowerUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(TotalActivePowerUpdated.reified()); }
    static get p() { return TotalActivePowerUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TotalActivePowerUpdated", {
            hive_total_active_power: bcs_1.bcs.u128(), total_staked_assets: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TotalActivePowerUpdated.reified().new({ hiveTotalActivePower: (0, reified_1.decodeFromFields)("u128", fields.hive_total_active_power), totalStakedAssets: (0, reified_1.decodeFromFields)("u64", fields.total_staked_assets) }); }
    static fromFieldsWithTypes(item) {
        if (!isTotalActivePowerUpdated(item.type)) {
            throw new Error("not a TotalActivePowerUpdated type");
        }
        return TotalActivePowerUpdated.reified().new({ hiveTotalActivePower: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.hive_total_active_power), totalStakedAssets: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_staked_assets) });
    }
    static fromBcs(data) { return TotalActivePowerUpdated.fromFields(TotalActivePowerUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            hiveTotalActivePower: this.hiveTotalActivePower.toString(), totalStakedAssets: this.totalStakedAssets.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TotalActivePowerUpdated.reified().new({ hiveTotalActivePower: (0, reified_1.decodeFromJSONField)("u128", field.hiveTotalActivePower), totalStakedAssets: (0, reified_1.decodeFromJSONField)("u64", field.totalStakedAssets) }); }
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
        return TotalActivePowerUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TotalActivePowerUpdated = TotalActivePowerUpdated;
TotalActivePowerUpdated.$typeName = `${index_1.PKG_V1}::hive_profile::TotalActivePowerUpdated`;
TotalActivePowerUpdated.$numTypeParams = 0;
TotalActivePowerUpdated.$isPhantom = [];
/* ============================== TraitsSetInHiveKiosk =============================== */
function isTraitsSetInHiveKiosk(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::TraitsSetInHiveKiosk`; }
class TraitsSetInHiveKiosk {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TraitsSetInHiveKiosk.$typeName;
        this.$isPhantom = TraitsSetInHiveKiosk.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TraitsSetInHiveKiosk.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.kioskAddr = fields.kioskAddr;
        ;
        this.creatorProfile = fields.creatorProfile;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.traitsList = fields.traitsList;
        ;
        this.imgUrl = fields.imgUrl;
    }
    static reified() { return { typeName: TraitsSetInHiveKiosk.$typeName, fullTypeName: (0, util_1.composeSuiType)(TraitsSetInHiveKiosk.$typeName, ...[]), typeArgs: [], isPhantom: TraitsSetInHiveKiosk.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TraitsSetInHiveKiosk.fromFields(fields), fromFieldsWithTypes: (item) => TraitsSetInHiveKiosk.fromFieldsWithTypes(item), fromBcs: (data) => TraitsSetInHiveKiosk.fromBcs(data), bcs: TraitsSetInHiveKiosk.bcs, fromJSONField: (field) => TraitsSetInHiveKiosk.fromJSONField(field), fromJSON: (json) => TraitsSetInHiveKiosk.fromJSON(json), fromSuiParsedData: (content) => TraitsSetInHiveKiosk.fromSuiParsedData(content), fetch: async (client, id) => TraitsSetInHiveKiosk.fetch(client, id), new: (fields) => { return new TraitsSetInHiveKiosk([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TraitsSetInHiveKiosk.reified(); }
    static phantom() { return (0, reified_1.phantom)(TraitsSetInHiveKiosk.reified()); }
    static get p() { return TraitsSetInHiveKiosk.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TraitsSetInHiveKiosk", {
            kiosk_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), creator_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), collection_name: structs_3.String.bcs, traits_list: bcs_1.bcs.vector(structs_3.String.bcs), img_url: structs_3.String.bcs
        });
    }
    ;
    static fromFields(fields) { return TraitsSetInHiveKiosk.reified().new({ kioskAddr: (0, reified_1.decodeFromFields)("address", fields.kiosk_addr), creatorProfile: (0, reified_1.decodeFromFields)("address", fields.creator_profile), collectionName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.collection_name), traitsList: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.traits_list), imgUrl: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.img_url) }); }
    static fromFieldsWithTypes(item) {
        if (!isTraitsSetInHiveKiosk(item.type)) {
            throw new Error("not a TraitsSetInHiveKiosk type");
        }
        return TraitsSetInHiveKiosk.reified().new({ kioskAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.kiosk_addr), creatorProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.creator_profile), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.collection_name), traitsList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.traits_list), imgUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.img_url) });
    }
    static fromBcs(data) { return TraitsSetInHiveKiosk.fromFields(TraitsSetInHiveKiosk.bcs.parse(data)); }
    toJSONField() {
        return {
            kioskAddr: this.kioskAddr, creatorProfile: this.creatorProfile, collectionName: this.collectionName, traitsList: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.traitsList), imgUrl: this.imgUrl,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TraitsSetInHiveKiosk.reified().new({ kioskAddr: (0, reified_1.decodeFromJSONField)("address", field.kioskAddr), creatorProfile: (0, reified_1.decodeFromJSONField)("address", field.creatorProfile), collectionName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.collectionName), traitsList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.traitsList), imgUrl: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.imgUrl) }); }
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
        return TraitsSetInHiveKiosk.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TraitsSetInHiveKiosk = TraitsSetInHiveKiosk;
TraitsSetInHiveKiosk.$typeName = `${index_1.PKG_V1}::hive_profile::TraitsSetInHiveKiosk`;
TraitsSetInHiveKiosk.$numTypeParams = 0;
TraitsSetInHiveKiosk.$isPhantom = [];
/* ============================== TwapUpdateCap =============================== */
function isTwapUpdateCap(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::TwapUpdateCap`; }
class TwapUpdateCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TwapUpdateCap.$typeName;
        this.$isPhantom = TwapUpdateCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TwapUpdateCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: TwapUpdateCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(TwapUpdateCap.$typeName, ...[]), typeArgs: [], isPhantom: TwapUpdateCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TwapUpdateCap.fromFields(fields), fromFieldsWithTypes: (item) => TwapUpdateCap.fromFieldsWithTypes(item), fromBcs: (data) => TwapUpdateCap.fromBcs(data), bcs: TwapUpdateCap.bcs, fromJSONField: (field) => TwapUpdateCap.fromJSONField(field), fromJSON: (json) => TwapUpdateCap.fromJSON(json), fromSuiParsedData: (content) => TwapUpdateCap.fromSuiParsedData(content), fetch: async (client, id) => TwapUpdateCap.fetch(client, id), new: (fields) => { return new TwapUpdateCap([], fields); }, kind: "StructClassReified", }; }
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
        return TwapUpdateCap.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TwapUpdateCap = TwapUpdateCap;
TwapUpdateCap.$typeName = `${index_1.PKG_V1}::hive_profile::TwapUpdateCap`;
TwapUpdateCap.$numTypeParams = 0;
TwapUpdateCap.$isPhantom = [];
/* ============================== UpdateEntropyForEpoch =============================== */
function isUpdateEntropyForEpoch(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::UpdateEntropyForEpoch`; }
class UpdateEntropyForEpoch {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UpdateEntropyForEpoch.$typeName;
        this.$isPhantom = UpdateEntropyForEpoch.$isPhantom;
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
    static reified() { return { typeName: UpdateEntropyForEpoch.$typeName, fullTypeName: (0, util_1.composeSuiType)(UpdateEntropyForEpoch.$typeName, ...[]), typeArgs: [], isPhantom: UpdateEntropyForEpoch.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UpdateEntropyForEpoch.fromFields(fields), fromFieldsWithTypes: (item) => UpdateEntropyForEpoch.fromFieldsWithTypes(item), fromBcs: (data) => UpdateEntropyForEpoch.fromBcs(data), bcs: UpdateEntropyForEpoch.bcs, fromJSONField: (field) => UpdateEntropyForEpoch.fromJSONField(field), fromJSON: (json) => UpdateEntropyForEpoch.fromJSON(json), fromSuiParsedData: (content) => UpdateEntropyForEpoch.fromSuiParsedData(content), fetch: async (client, id) => UpdateEntropyForEpoch.fetch(client, id), new: (fields) => { return new UpdateEntropyForEpoch([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UpdateEntropyForEpoch.reified(); }
    static phantom() { return (0, reified_1.phantom)(UpdateEntropyForEpoch.reified()); }
    static get p() { return UpdateEntropyForEpoch.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UpdateEntropyForEpoch", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), epoch: bcs_1.bcs.u64(), max_entropy: bcs_1.bcs.u64(), entropy_used_for_cur_epoch: bcs_1.bcs.u64(), remaining_entropy: bcs_1.bcs.u64(), max_withdrawable_gems: bcs_1.bcs.u64(), available_gems: bcs_1.bcs.u64()
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
        return UpdateEntropyForEpoch.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UpdateEntropyForEpoch = UpdateEntropyForEpoch;
UpdateEntropyForEpoch.$typeName = `${index_1.PKG_V1}::hive_profile::UpdateEntropyForEpoch`;
UpdateEntropyForEpoch.$numTypeParams = 0;
UpdateEntropyForEpoch.$isPhantom = [];
/* ============================== UserNameUpdated =============================== */
function isUserNameUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive_profile::UserNameUpdated`; }
class UserNameUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UserNameUpdated.$typeName;
        this.$isPhantom = UserNameUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserNameUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.prevUsername = fields.prevUsername;
        ;
        this.newUsername = fields.newUsername;
    }
    static reified() { return { typeName: UserNameUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserNameUpdated.$typeName, ...[]), typeArgs: [], isPhantom: UserNameUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserNameUpdated.fromFields(fields), fromFieldsWithTypes: (item) => UserNameUpdated.fromFieldsWithTypes(item), fromBcs: (data) => UserNameUpdated.fromBcs(data), bcs: UserNameUpdated.bcs, fromJSONField: (field) => UserNameUpdated.fromJSONField(field), fromJSON: (json) => UserNameUpdated.fromJSON(json), fromSuiParsedData: (content) => UserNameUpdated.fromSuiParsedData(content), fetch: async (client, id) => UserNameUpdated.fetch(client, id), new: (fields) => { return new UserNameUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserNameUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserNameUpdated.reified()); }
    static get p() { return UserNameUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserNameUpdated", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), prev_username: structs_3.String.bcs, new_username: structs_3.String.bcs
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
        return UserNameUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserNameUpdated = UserNameUpdated;
UserNameUpdated.$typeName = `${index_1.PKG_V1}::hive_profile::UserNameUpdated`;
UserNameUpdated.$numTypeParams = 0;
UserNameUpdated.$isPhantom = [];
