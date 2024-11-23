"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonTrainerKrafted = exports.DragonTrainerDeleted = exports.DragonTrainer = exports.DragonSchoolCreated = exports.DragonSchool = exports.DragonEggsBasket = exports.DragonDust = exports.DragonBeeHatched = exports.DegenHiveYieldHarvested = exports.DegenHiveMapStore = exports.DRAGON_TRAINER = exports.Configuration = exports.CapabilityState = exports.CapabilityAdded = exports.BuidlersYieldHarvested = exports.BreedingRoyalty = exports.BreedingRequestUnprocessed = exports.BreedingRequestProcessed = exports.BirthCertificate = exports.BidRecord = exports.BidPlaced = exports.BidMarkedInvalid = exports.BidExpired = exports.BidDestroyed = exports.BidCanceled = exports.Bid = exports.BeesTracker = exports.BeesManager = exports.BeesAddedToGenesisBasket = exports.BeeUpdatedInGenesisBasket = exports.BeeTransfers = exports.BeeTransferInitiated = exports.BeeTransferCancelled = exports.BeeSentToHiddenWorld = exports.BeeRemovedFromFriendsList = exports.BeeOwnershipUpdated = exports.BeeIsNowAQueen = exports.BeeInFlight = exports.BeeHive = exports.BeeFarmedYield = exports.BeeEggRecord = exports.BeeEgg = exports.BeeDeletedFromHiddenWorld = exports.BeeCapabilityUpdated = exports.BeeAttack = exports.BeeAddedToFriendsList = exports.AppRemovedByProfile = exports.AppInstalledByProfile = exports.AppAddedToHiveStore = exports.Listing = void 0;
exports.NewListing = exports.NewGameSession = exports.NewEggIncubated = exports.NectarStore = exports.MysticalBeeReturnedFromCompetition = exports.MysticalBeeRenamed = exports.MysticalBee = exports.MemepadCapability = exports.MemeCoinLaunchedViaBee = exports.MasterKeyReplenished = exports.MarketPlace = exports.ManagerConfigUpdated = exports.LockedDegenHiveAssets = exports.ListingUpdated = exports.ListingRecord = exports.ListingExpired = exports.ListingDestroyed = exports.ListingCanceled = exports.JoinedHiveOfProfile = exports.InscriptionSetForProfile = exports.Inscription = exports.IncomingBeeClaimed = exports.HoneyTransferredToProfile = exports.HoneyAddedToTreasury = exports.HoneyAddedToProfile = exports.HoneyAddedForHarvest = exports.HiveWithdrawnFromTreasury = exports.HiveUnlockedFromBee = exports.HiveTwapUpdated = exports.HiveTwapInfo = exports.HiveGraph = exports.HiveEnergyInfusedInBee = exports.HiveAddedToTreasury = exports.HiveAddedForHarvest = exports.HiddenWorldRewardsClaimed = exports.HiddenWorldQuest = exports.HiddenWorldConfig = exports.HiddenWorld = exports.HiddenMysticalBee = exports.HiddenBeeDeleted = exports.HealthInfusedInBee = exports.GovernanceInfo = exports.GenesisBeesUploaderCapability = exports.GameMasterKey = exports.FundsWithdrawnFromProfile = exports.ExitHiveOfProfile = exports.ExecutedListingDestroyed = exports.ExecutedListing = exports.EggLaidForDragonBee = exports.EggBasketInfo = void 0;
exports.YieldFarm = exports.UserWhitelistedForGenesisMint = exports.UserNameUpdated = exports.UpdatedStingerBeesEnergyHealth = exports.TwapUpdateCap = exports.TransformationRequestProcessed = exports.TrainerSession = exports.TrainerCanceledActiveQuest = exports.TrainerActiveForQuest = exports.SuiNsNameExpired = exports.SuiClaimedFromBeeHive = exports.StoreRemovedFromBee = exports.StoreAddedToBee = exports.SaleExecuted = exports.RoyaltyUpdated = exports.RoyaltyProcessed = exports.Royalty = exports.QuestRequestExpired = exports.QuestRequestDestroyed = exports.QuestRequest = exports.QueenFamilyInfo = exports.PricingUpdatedForBreeding = exports.PowersAddedToDragonBee = exports.P2pGameSession = void 0;
exports.isListing = isListing;
exports.isAppAddedToHiveStore = isAppAddedToHiveStore;
exports.isAppInstalledByProfile = isAppInstalledByProfile;
exports.isAppRemovedByProfile = isAppRemovedByProfile;
exports.isBeeAddedToFriendsList = isBeeAddedToFriendsList;
exports.isBeeAttack = isBeeAttack;
exports.isBeeCapabilityUpdated = isBeeCapabilityUpdated;
exports.isBeeDeletedFromHiddenWorld = isBeeDeletedFromHiddenWorld;
exports.isBeeEgg = isBeeEgg;
exports.isBeeEggRecord = isBeeEggRecord;
exports.isBeeFarmedYield = isBeeFarmedYield;
exports.isBeeHive = isBeeHive;
exports.isBeeInFlight = isBeeInFlight;
exports.isBeeIsNowAQueen = isBeeIsNowAQueen;
exports.isBeeOwnershipUpdated = isBeeOwnershipUpdated;
exports.isBeeRemovedFromFriendsList = isBeeRemovedFromFriendsList;
exports.isBeeSentToHiddenWorld = isBeeSentToHiddenWorld;
exports.isBeeTransferCancelled = isBeeTransferCancelled;
exports.isBeeTransferInitiated = isBeeTransferInitiated;
exports.isBeeTransfers = isBeeTransfers;
exports.isBeeUpdatedInGenesisBasket = isBeeUpdatedInGenesisBasket;
exports.isBeesAddedToGenesisBasket = isBeesAddedToGenesisBasket;
exports.isBeesManager = isBeesManager;
exports.isBeesTracker = isBeesTracker;
exports.isBid = isBid;
exports.isBidCanceled = isBidCanceled;
exports.isBidDestroyed = isBidDestroyed;
exports.isBidExpired = isBidExpired;
exports.isBidMarkedInvalid = isBidMarkedInvalid;
exports.isBidPlaced = isBidPlaced;
exports.isBidRecord = isBidRecord;
exports.isBirthCertificate = isBirthCertificate;
exports.isBreedingRequestProcessed = isBreedingRequestProcessed;
exports.isBreedingRequestUnprocessed = isBreedingRequestUnprocessed;
exports.isBreedingRoyalty = isBreedingRoyalty;
exports.isBuidlersYieldHarvested = isBuidlersYieldHarvested;
exports.isCapabilityAdded = isCapabilityAdded;
exports.isCapabilityState = isCapabilityState;
exports.isConfiguration = isConfiguration;
exports.isDRAGON_TRAINER = isDRAGON_TRAINER;
exports.isDegenHiveMapStore = isDegenHiveMapStore;
exports.isDegenHiveYieldHarvested = isDegenHiveYieldHarvested;
exports.isDragonBeeHatched = isDragonBeeHatched;
exports.isDragonDust = isDragonDust;
exports.isDragonEggsBasket = isDragonEggsBasket;
exports.isDragonSchool = isDragonSchool;
exports.isDragonSchoolCreated = isDragonSchoolCreated;
exports.isDragonTrainer = isDragonTrainer;
exports.isDragonTrainerDeleted = isDragonTrainerDeleted;
exports.isDragonTrainerKrafted = isDragonTrainerKrafted;
exports.isEggBasketInfo = isEggBasketInfo;
exports.isEggLaidForDragonBee = isEggLaidForDragonBee;
exports.isExecutedListing = isExecutedListing;
exports.isExecutedListingDestroyed = isExecutedListingDestroyed;
exports.isExitHiveOfProfile = isExitHiveOfProfile;
exports.isFundsWithdrawnFromProfile = isFundsWithdrawnFromProfile;
exports.isGameMasterKey = isGameMasterKey;
exports.isGenesisBeesUploaderCapability = isGenesisBeesUploaderCapability;
exports.isGovernanceInfo = isGovernanceInfo;
exports.isHealthInfusedInBee = isHealthInfusedInBee;
exports.isHiddenBeeDeleted = isHiddenBeeDeleted;
exports.isHiddenMysticalBee = isHiddenMysticalBee;
exports.isHiddenWorld = isHiddenWorld;
exports.isHiddenWorldConfig = isHiddenWorldConfig;
exports.isHiddenWorldQuest = isHiddenWorldQuest;
exports.isHiddenWorldRewardsClaimed = isHiddenWorldRewardsClaimed;
exports.isHiveAddedForHarvest = isHiveAddedForHarvest;
exports.isHiveAddedToTreasury = isHiveAddedToTreasury;
exports.isHiveEnergyInfusedInBee = isHiveEnergyInfusedInBee;
exports.isHiveGraph = isHiveGraph;
exports.isHiveTwapInfo = isHiveTwapInfo;
exports.isHiveTwapUpdated = isHiveTwapUpdated;
exports.isHiveUnlockedFromBee = isHiveUnlockedFromBee;
exports.isHiveWithdrawnFromTreasury = isHiveWithdrawnFromTreasury;
exports.isHoneyAddedForHarvest = isHoneyAddedForHarvest;
exports.isHoneyAddedToProfile = isHoneyAddedToProfile;
exports.isHoneyAddedToTreasury = isHoneyAddedToTreasury;
exports.isHoneyTransferredToProfile = isHoneyTransferredToProfile;
exports.isIncomingBeeClaimed = isIncomingBeeClaimed;
exports.isInscription = isInscription;
exports.isInscriptionSetForProfile = isInscriptionSetForProfile;
exports.isJoinedHiveOfProfile = isJoinedHiveOfProfile;
exports.isListingCanceled = isListingCanceled;
exports.isListingDestroyed = isListingDestroyed;
exports.isListingExpired = isListingExpired;
exports.isListingRecord = isListingRecord;
exports.isListingUpdated = isListingUpdated;
exports.isLockedDegenHiveAssets = isLockedDegenHiveAssets;
exports.isManagerConfigUpdated = isManagerConfigUpdated;
exports.isMarketPlace = isMarketPlace;
exports.isMasterKeyReplenished = isMasterKeyReplenished;
exports.isMemeCoinLaunchedViaBee = isMemeCoinLaunchedViaBee;
exports.isMemepadCapability = isMemepadCapability;
exports.isMysticalBee = isMysticalBee;
exports.isMysticalBeeRenamed = isMysticalBeeRenamed;
exports.isMysticalBeeReturnedFromCompetition = isMysticalBeeReturnedFromCompetition;
exports.isNectarStore = isNectarStore;
exports.isNewEggIncubated = isNewEggIncubated;
exports.isNewGameSession = isNewGameSession;
exports.isNewListing = isNewListing;
exports.isP2pGameSession = isP2pGameSession;
exports.isPowersAddedToDragonBee = isPowersAddedToDragonBee;
exports.isPricingUpdatedForBreeding = isPricingUpdatedForBreeding;
exports.isQueenFamilyInfo = isQueenFamilyInfo;
exports.isQuestRequest = isQuestRequest;
exports.isQuestRequestDestroyed = isQuestRequestDestroyed;
exports.isQuestRequestExpired = isQuestRequestExpired;
exports.isRoyalty = isRoyalty;
exports.isRoyaltyProcessed = isRoyaltyProcessed;
exports.isRoyaltyUpdated = isRoyaltyUpdated;
exports.isSaleExecuted = isSaleExecuted;
exports.isStoreAddedToBee = isStoreAddedToBee;
exports.isStoreRemovedFromBee = isStoreRemovedFromBee;
exports.isSuiClaimedFromBeeHive = isSuiClaimedFromBeeHive;
exports.isSuiNsNameExpired = isSuiNsNameExpired;
exports.isTrainerActiveForQuest = isTrainerActiveForQuest;
exports.isTrainerCanceledActiveQuest = isTrainerCanceledActiveQuest;
exports.isTrainerSession = isTrainerSession;
exports.isTransformationRequestProcessed = isTransformationRequestProcessed;
exports.isTwapUpdateCap = isTwapUpdateCap;
exports.isUpdatedStingerBeesEnergyHealth = isUpdatedStingerBeesEnergyHealth;
exports.isUserNameUpdated = isUserNameUpdated;
exports.isUserWhitelistedForGenesisMint = isUserWhitelistedForGenesisMint;
exports.isYieldFarm = isYieldFarm;
const reified = require("../../_framework/reified");
const structs_1 = require("../../source/0x1/ascii/structs");
const structs_2 = require("../../source/0x1/option/structs");
const structs_3 = require("../../source/0x1/string/structs");
const structs_4 = require("../../source/0x2/balance/structs");
const structs_5 = require("../../source/0x2/linked-table/structs");
const structs_6 = require("../../source/0x2/object/structs");
const structs_7 = require("../../source/0x2/sui/structs");
const structs_8 = require("../../source/0x2/table/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const structs_9 = require("../../yield-flow/hive/structs");
const structs_10 = require("../../yield-flow/honey/structs");
const structs_11 = require("../../yield-flow/yield-flow/structs");
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const PUBLISHED_AT = __1.dragontrainer.PUBLISHED_AT;
const PKG_V1 = __1.dragontrainer.PKG_V1;
/* ============================== Listing =============================== */
function isListing(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::Listing`; }
class Listing {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Listing.$typeName;
        this.$isPhantom = Listing.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Listing.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByTrainer = fields.listedByTrainer;
        ;
        this.mysticalBee = fields.mysticalBee;
        ;
        this.minPrice = fields.minPrice;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: Listing.$typeName, fullTypeName: (0, util_1.composeSuiType)(Listing.$typeName, ...[]), typeArgs: [], isPhantom: Listing.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Listing.fromFields(fields), fromFieldsWithTypes: (item) => Listing.fromFieldsWithTypes(item), fromBcs: (data) => Listing.fromBcs(data), bcs: Listing.bcs, fromJSONField: (field) => Listing.fromJSONField(field), fromJSON: (json) => Listing.fromJSON(json), fromSuiParsedData: (content) => Listing.fromSuiParsedData(content), fromSuiObjectData: (content) => Listing.fromSuiObjectData(content), fetch: async (client, id) => Listing.fetch(client, id), new: (fields) => { return new Listing([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Listing.reified(); }
    static phantom() { return (0, reified_1.phantom)(Listing.reified()); }
    static get p() { return Listing.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Listing", {
            listed_by_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), mystical_bee: MysticalBee.bcs, min_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Listing.reified().new({ listedByTrainer: (0, reified_1.decodeFromFields)("address", fields.listed_by_trainer), mysticalBee: (0, reified_1.decodeFromFields)(MysticalBee.reified(), fields.mystical_bee), minPrice: (0, reified_1.decodeFromFields)("u64", fields.min_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isListing(item.type)) {
            throw new Error("not a Listing type");
        }
        return Listing.reified().new({ listedByTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_trainer), mysticalBee: (0, reified_1.decodeFromFieldsWithTypes)(MysticalBee.reified(), item.fields.mystical_bee), minPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return Listing.fromFields(Listing.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByTrainer: this.listedByTrainer, mysticalBee: this.mysticalBee.toJSONField(), minPrice: this.minPrice.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Listing.reified().new({ listedByTrainer: (0, reified_1.decodeFromJSONField)("address", field.listedByTrainer), mysticalBee: (0, reified_1.decodeFromJSONField)(MysticalBee.reified(), field.mysticalBee), minPrice: (0, reified_1.decodeFromJSONField)("u64", field.minPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isListing(data.bcs.type)) {
                throw new Error(`object at is not a Listing object`);
            }
            return Listing.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Listing.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Listing object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListing(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Listing object`);
        }
        return Listing.fromSuiObjectData(res.data);
    }
}
exports.Listing = Listing;
Listing.$typeName = `${PKG_V1}::dragon_trainer::Listing`;
Listing.$numTypeParams = 0;
Listing.$isPhantom = [];
/* ============================== AppAddedToHiveStore =============================== */
function isAppAddedToHiveStore(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::AppAddedToHiveStore`; }
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
        this.hiveIncentives = fields.hiveIncentives;
        ;
        this.honeyIncentives = fields.honeyIncentives;
        ;
        this.receipient = fields.receipient;
    }
    static reified() { return { typeName: AppAddedToHiveStore.$typeName, fullTypeName: (0, util_1.composeSuiType)(AppAddedToHiveStore.$typeName, ...[]), typeArgs: [], isPhantom: AppAddedToHiveStore.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AppAddedToHiveStore.fromFields(fields), fromFieldsWithTypes: (item) => AppAddedToHiveStore.fromFieldsWithTypes(item), fromBcs: (data) => AppAddedToHiveStore.fromBcs(data), bcs: AppAddedToHiveStore.bcs, fromJSONField: (field) => AppAddedToHiveStore.fromJSONField(field), fromJSON: (json) => AppAddedToHiveStore.fromJSON(json), fromSuiParsedData: (content) => AppAddedToHiveStore.fromSuiParsedData(content), fromSuiObjectData: (content) => AppAddedToHiveStore.fromSuiObjectData(content), fetch: async (client, id) => AppAddedToHiveStore.fetch(client, id), new: (fields) => { return new AppAddedToHiveStore([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AppAddedToHiveStore.reified(); }
    static phantom() { return (0, reified_1.phantom)(AppAddedToHiveStore.reified()); }
    static get p() { return AppAddedToHiveStore.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AppAddedToHiveStore", {
            capability_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), app_name: structs_1.String.bcs, hive_incentives: bcs_1.bcs.u64(), honey_incentives: bcs_1.bcs.u64(), receipient: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return AppAddedToHiveStore.reified().new({ capabilityAddr: (0, reified_1.decodeFromFields)("address", fields.capability_addr), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name), hiveIncentives: (0, reified_1.decodeFromFields)("u64", fields.hive_incentives), honeyIncentives: (0, reified_1.decodeFromFields)("u64", fields.honey_incentives), receipient: (0, reified_1.decodeFromFields)("address", fields.receipient) }); }
    static fromFieldsWithTypes(item) {
        if (!isAppAddedToHiveStore(item.type)) {
            throw new Error("not a AppAddedToHiveStore type");
        }
        return AppAddedToHiveStore.reified().new({ capabilityAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.capability_addr), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name), hiveIncentives: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_incentives), honeyIncentives: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_incentives), receipient: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.receipient) });
    }
    static fromBcs(data) { return AppAddedToHiveStore.fromFields(AppAddedToHiveStore.bcs.parse(data)); }
    toJSONField() {
        return {
            capabilityAddr: this.capabilityAddr, appName: this.appName, hiveIncentives: this.hiveIncentives.toString(), honeyIncentives: this.honeyIncentives.toString(), receipient: this.receipient,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AppAddedToHiveStore.reified().new({ capabilityAddr: (0, reified_1.decodeFromJSONField)("address", field.capabilityAddr), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName), hiveIncentives: (0, reified_1.decodeFromJSONField)("u64", field.hiveIncentives), honeyIncentives: (0, reified_1.decodeFromJSONField)("u64", field.honeyIncentives), receipient: (0, reified_1.decodeFromJSONField)("address", field.receipient) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAppAddedToHiveStore(data.bcs.type)) {
                throw new Error(`object at is not a AppAddedToHiveStore object`);
            }
            return AppAddedToHiveStore.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AppAddedToHiveStore.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AppAddedToHiveStore object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAppAddedToHiveStore(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AppAddedToHiveStore object`);
        }
        return AppAddedToHiveStore.fromSuiObjectData(res.data);
    }
}
exports.AppAddedToHiveStore = AppAddedToHiveStore;
AppAddedToHiveStore.$typeName = `${PKG_V1}::dragon_trainer::AppAddedToHiveStore`;
AppAddedToHiveStore.$numTypeParams = 0;
AppAddedToHiveStore.$isPhantom = [];
/* ============================== AppInstalledByProfile =============================== */
function isAppInstalledByProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::AppInstalledByProfile`; }
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
        ;
        this.appId = fields.appId;
    }
    static reified() { return { typeName: AppInstalledByProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(AppInstalledByProfile.$typeName, ...[]), typeArgs: [], isPhantom: AppInstalledByProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AppInstalledByProfile.fromFields(fields), fromFieldsWithTypes: (item) => AppInstalledByProfile.fromFieldsWithTypes(item), fromBcs: (data) => AppInstalledByProfile.fromBcs(data), bcs: AppInstalledByProfile.bcs, fromJSONField: (field) => AppInstalledByProfile.fromJSONField(field), fromJSON: (json) => AppInstalledByProfile.fromJSON(json), fromSuiParsedData: (content) => AppInstalledByProfile.fromSuiParsedData(content), fromSuiObjectData: (content) => AppInstalledByProfile.fromSuiObjectData(content), fetch: async (client, id) => AppInstalledByProfile.fetch(client, id), new: (fields) => { return new AppInstalledByProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AppInstalledByProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(AppInstalledByProfile.reified()); }
    static get p() { return AppInstalledByProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AppInstalledByProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, app_name: structs_1.String.bcs, app_id: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return AppInstalledByProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name), appId: (0, reified_1.decodeFromFields)("address", fields.app_id) }); }
    static fromFieldsWithTypes(item) {
        if (!isAppInstalledByProfile(item.type)) {
            throw new Error("not a AppInstalledByProfile type");
        }
        return AppInstalledByProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name), appId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.app_id) });
    }
    static fromBcs(data) { return AppInstalledByProfile.fromFields(AppInstalledByProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, username: this.username, appName: this.appName, appId: this.appId,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AppInstalledByProfile.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName), appId: (0, reified_1.decodeFromJSONField)("address", field.appId) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAppInstalledByProfile(data.bcs.type)) {
                throw new Error(`object at is not a AppInstalledByProfile object`);
            }
            return AppInstalledByProfile.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AppInstalledByProfile.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AppInstalledByProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAppInstalledByProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AppInstalledByProfile object`);
        }
        return AppInstalledByProfile.fromSuiObjectData(res.data);
    }
}
exports.AppInstalledByProfile = AppInstalledByProfile;
AppInstalledByProfile.$typeName = `${PKG_V1}::dragon_trainer::AppInstalledByProfile`;
AppInstalledByProfile.$numTypeParams = 0;
AppInstalledByProfile.$isPhantom = [];
/* ============================== AppRemovedByProfile =============================== */
function isAppRemovedByProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::AppRemovedByProfile`; }
class AppRemovedByProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AppRemovedByProfile.$typeName;
        this.$isPhantom = AppRemovedByProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AppRemovedByProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.appName = fields.appName;
    }
    static reified() { return { typeName: AppRemovedByProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(AppRemovedByProfile.$typeName, ...[]), typeArgs: [], isPhantom: AppRemovedByProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AppRemovedByProfile.fromFields(fields), fromFieldsWithTypes: (item) => AppRemovedByProfile.fromFieldsWithTypes(item), fromBcs: (data) => AppRemovedByProfile.fromBcs(data), bcs: AppRemovedByProfile.bcs, fromJSONField: (field) => AppRemovedByProfile.fromJSONField(field), fromJSON: (json) => AppRemovedByProfile.fromJSON(json), fromSuiParsedData: (content) => AppRemovedByProfile.fromSuiParsedData(content), fromSuiObjectData: (content) => AppRemovedByProfile.fromSuiObjectData(content), fetch: async (client, id) => AppRemovedByProfile.fetch(client, id), new: (fields) => { return new AppRemovedByProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AppRemovedByProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(AppRemovedByProfile.reified()); }
    static get p() { return AppRemovedByProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AppRemovedByProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, app_name: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return AppRemovedByProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isAppRemovedByProfile(item.type)) {
            throw new Error("not a AppRemovedByProfile type");
        }
        return AppRemovedByProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name) });
    }
    static fromBcs(data) { return AppRemovedByProfile.fromFields(AppRemovedByProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, username: this.username, appName: this.appName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AppRemovedByProfile.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName) }); }
    static fromJSON(json) {
        if (json.$typeName !== AppRemovedByProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AppRemovedByProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAppRemovedByProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AppRemovedByProfile object`);
    } return AppRemovedByProfile.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAppRemovedByProfile(data.bcs.type)) {
                throw new Error(`object at is not a AppRemovedByProfile object`);
            }
            return AppRemovedByProfile.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AppRemovedByProfile.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AppRemovedByProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAppRemovedByProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AppRemovedByProfile object`);
        }
        return AppRemovedByProfile.fromSuiObjectData(res.data);
    }
}
exports.AppRemovedByProfile = AppRemovedByProfile;
AppRemovedByProfile.$typeName = `${PKG_V1}::dragon_trainer::AppRemovedByProfile`;
AppRemovedByProfile.$numTypeParams = 0;
AppRemovedByProfile.$isPhantom = [];
/* ============================== BeeAddedToFriendsList =============================== */
function isBeeAddedToFriendsList(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeAddedToFriendsList`; }
class BeeAddedToFriendsList {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeAddedToFriendsList.$typeName;
        this.$isPhantom = BeeAddedToFriendsList.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeAddedToFriendsList.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.queenVersion = fields.queenVersion;
        ;
        this.friendlyBee = fields.friendlyBee;
        ;
        this.newPrice = fields.newPrice;
    }
    static reified() { return { typeName: BeeAddedToFriendsList.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeAddedToFriendsList.$typeName, ...[]), typeArgs: [], isPhantom: BeeAddedToFriendsList.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeAddedToFriendsList.fromFields(fields), fromFieldsWithTypes: (item) => BeeAddedToFriendsList.fromFieldsWithTypes(item), fromBcs: (data) => BeeAddedToFriendsList.fromBcs(data), bcs: BeeAddedToFriendsList.bcs, fromJSONField: (field) => BeeAddedToFriendsList.fromJSONField(field), fromJSON: (json) => BeeAddedToFriendsList.fromJSON(json), fromSuiParsedData: (content) => BeeAddedToFriendsList.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeAddedToFriendsList.fromSuiObjectData(content), fetch: async (client, id) => BeeAddedToFriendsList.fetch(client, id), new: (fields) => { return new BeeAddedToFriendsList([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeAddedToFriendsList.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeAddedToFriendsList.reified()); }
    static get p() { return BeeAddedToFriendsList.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeAddedToFriendsList", {
            queen_version: bcs_1.bcs.u64(), friendly_bee: bcs_1.bcs.u64(), new_price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeeAddedToFriendsList.reified().new({ queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), friendlyBee: (0, reified_1.decodeFromFields)("u64", fields.friendly_bee), newPrice: (0, reified_1.decodeFromFields)("u64", fields.new_price) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeAddedToFriendsList(item.type)) {
            throw new Error("not a BeeAddedToFriendsList type");
        }
        return BeeAddedToFriendsList.reified().new({ queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), friendlyBee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.friendly_bee), newPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_price) });
    }
    static fromBcs(data) { return BeeAddedToFriendsList.fromFields(BeeAddedToFriendsList.bcs.parse(data)); }
    toJSONField() {
        return {
            queenVersion: this.queenVersion.toString(), friendlyBee: this.friendlyBee.toString(), newPrice: this.newPrice.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeAddedToFriendsList.reified().new({ queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), friendlyBee: (0, reified_1.decodeFromJSONField)("u64", field.friendlyBee), newPrice: (0, reified_1.decodeFromJSONField)("u64", field.newPrice) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeAddedToFriendsList.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeAddedToFriendsList.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeAddedToFriendsList(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeAddedToFriendsList object`);
    } return BeeAddedToFriendsList.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeAddedToFriendsList(data.bcs.type)) {
                throw new Error(`object at is not a BeeAddedToFriendsList object`);
            }
            return BeeAddedToFriendsList.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeAddedToFriendsList.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeAddedToFriendsList object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeAddedToFriendsList(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeAddedToFriendsList object`);
        }
        return BeeAddedToFriendsList.fromSuiObjectData(res.data);
    }
}
exports.BeeAddedToFriendsList = BeeAddedToFriendsList;
BeeAddedToFriendsList.$typeName = `${PKG_V1}::dragon_trainer::BeeAddedToFriendsList`;
BeeAddedToFriendsList.$numTypeParams = 0;
BeeAddedToFriendsList.$isPhantom = [];
/* ============================== BeeAttack =============================== */
function isBeeAttack(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeAttack`; }
class BeeAttack {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeAttack.$typeName;
        this.$isPhantom = BeeAttack.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeAttack.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.attackerVersion = fields.attackerVersion;
        ;
        this.capabilitySlot = fields.capabilitySlot;
        ;
        this.defenderVersion = fields.defenderVersion;
        ;
        this.attackerEnergy = fields.attackerEnergy;
        ;
        this.defenderHealth = fields.defenderHealth;
        ;
        this.healthImpact = fields.healthImpact;
        ;
        this.energyCost = fields.energyCost;
    }
    static reified() { return { typeName: BeeAttack.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeAttack.$typeName, ...[]), typeArgs: [], isPhantom: BeeAttack.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeAttack.fromFields(fields), fromFieldsWithTypes: (item) => BeeAttack.fromFieldsWithTypes(item), fromBcs: (data) => BeeAttack.fromBcs(data), bcs: BeeAttack.bcs, fromJSONField: (field) => BeeAttack.fromJSONField(field), fromJSON: (json) => BeeAttack.fromJSON(json), fromSuiParsedData: (content) => BeeAttack.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeAttack.fromSuiObjectData(content), fetch: async (client, id) => BeeAttack.fetch(client, id), new: (fields) => { return new BeeAttack([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeAttack.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeAttack.reified()); }
    static get p() { return BeeAttack.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeAttack", {
            attacker_version: bcs_1.bcs.u64(), capability_slot: bcs_1.bcs.u8(), defender_version: bcs_1.bcs.u64(), attacker_energy: bcs_1.bcs.u64(), defender_health: bcs_1.bcs.u64(), health_impact: bcs_1.bcs.u64(), energy_cost: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeeAttack.reified().new({ attackerVersion: (0, reified_1.decodeFromFields)("u64", fields.attacker_version), capabilitySlot: (0, reified_1.decodeFromFields)("u8", fields.capability_slot), defenderVersion: (0, reified_1.decodeFromFields)("u64", fields.defender_version), attackerEnergy: (0, reified_1.decodeFromFields)("u64", fields.attacker_energy), defenderHealth: (0, reified_1.decodeFromFields)("u64", fields.defender_health), healthImpact: (0, reified_1.decodeFromFields)("u64", fields.health_impact), energyCost: (0, reified_1.decodeFromFields)("u64", fields.energy_cost) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeAttack(item.type)) {
            throw new Error("not a BeeAttack type");
        }
        return BeeAttack.reified().new({ attackerVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.attacker_version), capabilitySlot: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.capability_slot), defenderVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.defender_version), attackerEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.attacker_energy), defenderHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.defender_health), healthImpact: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.health_impact), energyCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy_cost) });
    }
    static fromBcs(data) { return BeeAttack.fromFields(BeeAttack.bcs.parse(data)); }
    toJSONField() {
        return {
            attackerVersion: this.attackerVersion.toString(), capabilitySlot: this.capabilitySlot, defenderVersion: this.defenderVersion.toString(), attackerEnergy: this.attackerEnergy.toString(), defenderHealth: this.defenderHealth.toString(), healthImpact: this.healthImpact.toString(), energyCost: this.energyCost.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeAttack.reified().new({ attackerVersion: (0, reified_1.decodeFromJSONField)("u64", field.attackerVersion), capabilitySlot: (0, reified_1.decodeFromJSONField)("u8", field.capabilitySlot), defenderVersion: (0, reified_1.decodeFromJSONField)("u64", field.defenderVersion), attackerEnergy: (0, reified_1.decodeFromJSONField)("u64", field.attackerEnergy), defenderHealth: (0, reified_1.decodeFromJSONField)("u64", field.defenderHealth), healthImpact: (0, reified_1.decodeFromJSONField)("u64", field.healthImpact), energyCost: (0, reified_1.decodeFromJSONField)("u64", field.energyCost) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeAttack.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeAttack.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeAttack(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeAttack object`);
    } return BeeAttack.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeAttack(data.bcs.type)) {
                throw new Error(`object at is not a BeeAttack object`);
            }
            return BeeAttack.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeAttack.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeAttack object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeAttack(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeAttack object`);
        }
        return BeeAttack.fromSuiObjectData(res.data);
    }
}
exports.BeeAttack = BeeAttack;
BeeAttack.$typeName = `${PKG_V1}::dragon_trainer::BeeAttack`;
BeeAttack.$numTypeParams = 0;
BeeAttack.$isPhantom = [];
/* ============================== BeeCapabilityUpdated =============================== */
function isBeeCapabilityUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeCapabilityUpdated`; }
class BeeCapabilityUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeCapabilityUpdated.$typeName;
        this.$isPhantom = BeeCapabilityUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeCapabilityUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.spot = fields.spot;
        ;
        this.capType = fields.capType;
        ;
        this.healthImpactPct = fields.healthImpactPct;
        ;
        this.energyCostPct = fields.energyCostPct;
        ;
        this.attempts = fields.attempts;
        ;
        this.cooldown = fields.cooldown;
        ;
        this.baseAttempts = fields.baseAttempts;
    }
    static reified() { return { typeName: BeeCapabilityUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeCapabilityUpdated.$typeName, ...[]), typeArgs: [], isPhantom: BeeCapabilityUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeCapabilityUpdated.fromFields(fields), fromFieldsWithTypes: (item) => BeeCapabilityUpdated.fromFieldsWithTypes(item), fromBcs: (data) => BeeCapabilityUpdated.fromBcs(data), bcs: BeeCapabilityUpdated.bcs, fromJSONField: (field) => BeeCapabilityUpdated.fromJSONField(field), fromJSON: (json) => BeeCapabilityUpdated.fromJSON(json), fromSuiParsedData: (content) => BeeCapabilityUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeCapabilityUpdated.fromSuiObjectData(content), fetch: async (client, id) => BeeCapabilityUpdated.fetch(client, id), new: (fields) => { return new BeeCapabilityUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeCapabilityUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeCapabilityUpdated.reified()); }
    static get p() { return BeeCapabilityUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeCapabilityUpdated", {
            spot: bcs_1.bcs.u64(), cap_type: bcs_1.bcs.u8(), health_impact_pct: bcs_1.bcs.u64(), energy_cost_pct: bcs_1.bcs.u64(), attempts: bcs_1.bcs.u64(), cooldown: bcs_1.bcs.u64(), base_attempts: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeeCapabilityUpdated.reified().new({ spot: (0, reified_1.decodeFromFields)("u64", fields.spot), capType: (0, reified_1.decodeFromFields)("u8", fields.cap_type), healthImpactPct: (0, reified_1.decodeFromFields)("u64", fields.health_impact_pct), energyCostPct: (0, reified_1.decodeFromFields)("u64", fields.energy_cost_pct), attempts: (0, reified_1.decodeFromFields)("u64", fields.attempts), cooldown: (0, reified_1.decodeFromFields)("u64", fields.cooldown), baseAttempts: (0, reified_1.decodeFromFields)("u64", fields.base_attempts) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeCapabilityUpdated(item.type)) {
            throw new Error("not a BeeCapabilityUpdated type");
        }
        return BeeCapabilityUpdated.reified().new({ spot: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.spot), capType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.cap_type), healthImpactPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.health_impact_pct), energyCostPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy_cost_pct), attempts: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.attempts), cooldown: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cooldown), baseAttempts: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.base_attempts) });
    }
    static fromBcs(data) { return BeeCapabilityUpdated.fromFields(BeeCapabilityUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            spot: this.spot.toString(), capType: this.capType, healthImpactPct: this.healthImpactPct.toString(), energyCostPct: this.energyCostPct.toString(), attempts: this.attempts.toString(), cooldown: this.cooldown.toString(), baseAttempts: this.baseAttempts.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeCapabilityUpdated.reified().new({ spot: (0, reified_1.decodeFromJSONField)("u64", field.spot), capType: (0, reified_1.decodeFromJSONField)("u8", field.capType), healthImpactPct: (0, reified_1.decodeFromJSONField)("u64", field.healthImpactPct), energyCostPct: (0, reified_1.decodeFromJSONField)("u64", field.energyCostPct), attempts: (0, reified_1.decodeFromJSONField)("u64", field.attempts), cooldown: (0, reified_1.decodeFromJSONField)("u64", field.cooldown), baseAttempts: (0, reified_1.decodeFromJSONField)("u64", field.baseAttempts) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeCapabilityUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeCapabilityUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeCapabilityUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeCapabilityUpdated object`);
    } return BeeCapabilityUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeCapabilityUpdated(data.bcs.type)) {
                throw new Error(`object at is not a BeeCapabilityUpdated object`);
            }
            return BeeCapabilityUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeCapabilityUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeCapabilityUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeCapabilityUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeCapabilityUpdated object`);
        }
        return BeeCapabilityUpdated.fromSuiObjectData(res.data);
    }
}
exports.BeeCapabilityUpdated = BeeCapabilityUpdated;
BeeCapabilityUpdated.$typeName = `${PKG_V1}::dragon_trainer::BeeCapabilityUpdated`;
BeeCapabilityUpdated.$numTypeParams = 0;
BeeCapabilityUpdated.$isPhantom = [];
/* ============================== BeeDeletedFromHiddenWorld =============================== */
function isBeeDeletedFromHiddenWorld(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeDeletedFromHiddenWorld`; }
class BeeDeletedFromHiddenWorld {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeDeletedFromHiddenWorld.$typeName;
        this.$isPhantom = BeeDeletedFromHiddenWorld.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeDeletedFromHiddenWorld.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.deletedAt = fields.deletedAt;
        ;
        this.version = fields.version;
        ;
        this.genes = fields.genes;
    }
    static reified() { return { typeName: BeeDeletedFromHiddenWorld.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeDeletedFromHiddenWorld.$typeName, ...[]), typeArgs: [], isPhantom: BeeDeletedFromHiddenWorld.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeDeletedFromHiddenWorld.fromFields(fields), fromFieldsWithTypes: (item) => BeeDeletedFromHiddenWorld.fromFieldsWithTypes(item), fromBcs: (data) => BeeDeletedFromHiddenWorld.fromBcs(data), bcs: BeeDeletedFromHiddenWorld.bcs, fromJSONField: (field) => BeeDeletedFromHiddenWorld.fromJSONField(field), fromJSON: (json) => BeeDeletedFromHiddenWorld.fromJSON(json), fromSuiParsedData: (content) => BeeDeletedFromHiddenWorld.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeDeletedFromHiddenWorld.fromSuiObjectData(content), fetch: async (client, id) => BeeDeletedFromHiddenWorld.fetch(client, id), new: (fields) => { return new BeeDeletedFromHiddenWorld([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeDeletedFromHiddenWorld.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeDeletedFromHiddenWorld.reified()); }
    static get p() { return BeeDeletedFromHiddenWorld.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeDeletedFromHiddenWorld", {
            deleted_at: bcs_1.bcs.u64(), version: bcs_1.bcs.u64(), genes: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(fields) { return BeeDeletedFromHiddenWorld.reified().new({ deletedAt: (0, reified_1.decodeFromFields)("u64", fields.deleted_at), version: (0, reified_1.decodeFromFields)("u64", fields.version), genes: (0, reified_1.decodeFromFields)("u256", fields.genes) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeDeletedFromHiddenWorld(item.type)) {
            throw new Error("not a BeeDeletedFromHiddenWorld type");
        }
        return BeeDeletedFromHiddenWorld.reified().new({ deletedAt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deleted_at), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), genes: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.genes) });
    }
    static fromBcs(data) { return BeeDeletedFromHiddenWorld.fromFields(BeeDeletedFromHiddenWorld.bcs.parse(data)); }
    toJSONField() {
        return {
            deletedAt: this.deletedAt.toString(), version: this.version.toString(), genes: this.genes.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeDeletedFromHiddenWorld.reified().new({ deletedAt: (0, reified_1.decodeFromJSONField)("u64", field.deletedAt), version: (0, reified_1.decodeFromJSONField)("u64", field.version), genes: (0, reified_1.decodeFromJSONField)("u256", field.genes) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeDeletedFromHiddenWorld.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeDeletedFromHiddenWorld.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeDeletedFromHiddenWorld(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeDeletedFromHiddenWorld object`);
    } return BeeDeletedFromHiddenWorld.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeDeletedFromHiddenWorld(data.bcs.type)) {
                throw new Error(`object at is not a BeeDeletedFromHiddenWorld object`);
            }
            return BeeDeletedFromHiddenWorld.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeDeletedFromHiddenWorld.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeDeletedFromHiddenWorld object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeDeletedFromHiddenWorld(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeDeletedFromHiddenWorld object`);
        }
        return BeeDeletedFromHiddenWorld.fromSuiObjectData(res.data);
    }
}
exports.BeeDeletedFromHiddenWorld = BeeDeletedFromHiddenWorld;
BeeDeletedFromHiddenWorld.$typeName = `${PKG_V1}::dragon_trainer::BeeDeletedFromHiddenWorld`;
BeeDeletedFromHiddenWorld.$numTypeParams = 0;
BeeDeletedFromHiddenWorld.$isPhantom = [];
/* ============================== BeeEgg =============================== */
function isBeeEgg(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeEgg`; }
class BeeEgg {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeEgg.$typeName;
        this.$isPhantom = BeeEgg.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeEgg.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.timestamp = fields.timestamp;
        ;
        this.eggIndex = fields.eggIndex;
        ;
        this.stingerBeeId = fields.stingerBeeId;
        ;
        this.stingerBeeVersion = fields.stingerBeeVersion;
        ;
        this.stingerGene = fields.stingerGene;
        ;
        this.dragonBeeEgg = fields.dragonBeeEgg;
        ;
        this.isProcessed = fields.isProcessed;
    }
    static reified() { return { typeName: BeeEgg.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeEgg.$typeName, ...[]), typeArgs: [], isPhantom: BeeEgg.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeEgg.fromFields(fields), fromFieldsWithTypes: (item) => BeeEgg.fromFieldsWithTypes(item), fromBcs: (data) => BeeEgg.fromBcs(data), bcs: BeeEgg.bcs, fromJSONField: (field) => BeeEgg.fromJSONField(field), fromJSON: (json) => BeeEgg.fromJSON(json), fromSuiParsedData: (content) => BeeEgg.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeEgg.fromSuiObjectData(content), fetch: async (client, id) => BeeEgg.fetch(client, id), new: (fields) => { return new BeeEgg([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeEgg.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeEgg.reified()); }
    static get p() { return BeeEgg.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeEgg", {
            timestamp: bcs_1.bcs.u64(), egg_index: bcs_1.bcs.u64(), stingerBeeId: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), stingerBeeVersion: bcs_1.bcs.u64(), stinger_gene: bcs_1.bcs.u256(), dragon_bee_egg: MysticalBee.bcs, is_processed: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return BeeEgg.reified().new({ timestamp: (0, reified_1.decodeFromFields)("u64", fields.timestamp), eggIndex: (0, reified_1.decodeFromFields)("u64", fields.egg_index), stingerBeeId: (0, reified_1.decodeFromFields)("address", fields.stingerBeeId), stingerBeeVersion: (0, reified_1.decodeFromFields)("u64", fields.stingerBeeVersion), stingerGene: (0, reified_1.decodeFromFields)("u256", fields.stinger_gene), dragonBeeEgg: (0, reified_1.decodeFromFields)(MysticalBee.reified(), fields.dragon_bee_egg), isProcessed: (0, reified_1.decodeFromFields)("bool", fields.is_processed) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeEgg(item.type)) {
            throw new Error("not a BeeEgg type");
        }
        return BeeEgg.reified().new({ timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp), eggIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.egg_index), stingerBeeId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.stingerBeeId), stingerBeeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stingerBeeVersion), stingerGene: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.stinger_gene), dragonBeeEgg: (0, reified_1.decodeFromFieldsWithTypes)(MysticalBee.reified(), item.fields.dragon_bee_egg), isProcessed: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_processed) });
    }
    static fromBcs(data) { return BeeEgg.fromFields(BeeEgg.bcs.parse(data)); }
    toJSONField() {
        return {
            timestamp: this.timestamp.toString(), eggIndex: this.eggIndex.toString(), stingerBeeId: this.stingerBeeId, stingerBeeVersion: this.stingerBeeVersion.toString(), stingerGene: this.stingerGene.toString(), dragonBeeEgg: this.dragonBeeEgg.toJSONField(), isProcessed: this.isProcessed,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeEgg.reified().new({ timestamp: (0, reified_1.decodeFromJSONField)("u64", field.timestamp), eggIndex: (0, reified_1.decodeFromJSONField)("u64", field.eggIndex), stingerBeeId: (0, reified_1.decodeFromJSONField)("address", field.stingerBeeId), stingerBeeVersion: (0, reified_1.decodeFromJSONField)("u64", field.stingerBeeVersion), stingerGene: (0, reified_1.decodeFromJSONField)("u256", field.stingerGene), dragonBeeEgg: (0, reified_1.decodeFromJSONField)(MysticalBee.reified(), field.dragonBeeEgg), isProcessed: (0, reified_1.decodeFromJSONField)("bool", field.isProcessed) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeEgg.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeEgg.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeEgg(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeEgg object`);
    } return BeeEgg.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeEgg(data.bcs.type)) {
                throw new Error(`object at is not a BeeEgg object`);
            }
            return BeeEgg.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeEgg.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeEgg object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeEgg(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeEgg object`);
        }
        return BeeEgg.fromSuiObjectData(res.data);
    }
}
exports.BeeEgg = BeeEgg;
BeeEgg.$typeName = `${PKG_V1}::dragon_trainer::BeeEgg`;
BeeEgg.$numTypeParams = 0;
BeeEgg.$isPhantom = [];
/* ============================== BeeEggRecord =============================== */
function isBeeEggRecord(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeEggRecord`; }
class BeeEggRecord {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeEggRecord.$typeName;
        this.$isPhantom = BeeEggRecord.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeEggRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.queenBeeId = fields.queenBeeId;
        ;
        this.queenVersion = fields.queenVersion;
        ;
        this.childGene = fields.childGene;
        ;
        this.childGeneration = fields.childGeneration;
        ;
        this.childVersion = fields.childVersion;
    }
    static reified() { return { typeName: BeeEggRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeEggRecord.$typeName, ...[]), typeArgs: [], isPhantom: BeeEggRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeEggRecord.fromFields(fields), fromFieldsWithTypes: (item) => BeeEggRecord.fromFieldsWithTypes(item), fromBcs: (data) => BeeEggRecord.fromBcs(data), bcs: BeeEggRecord.bcs, fromJSONField: (field) => BeeEggRecord.fromJSONField(field), fromJSON: (json) => BeeEggRecord.fromJSON(json), fromSuiParsedData: (content) => BeeEggRecord.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeEggRecord.fromSuiObjectData(content), fetch: async (client, id) => BeeEggRecord.fetch(client, id), new: (fields) => { return new BeeEggRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeEggRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeEggRecord.reified()); }
    static get p() { return BeeEggRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeEggRecord", {
            queenBeeId: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), queen_version: bcs_1.bcs.u64(), child_gene: bcs_1.bcs.u256(), child_generation: bcs_1.bcs.u64(), child_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeeEggRecord.reified().new({ queenBeeId: (0, reified_1.decodeFromFields)("address", fields.queenBeeId), queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), childGene: (0, reified_1.decodeFromFields)("u256", fields.child_gene), childGeneration: (0, reified_1.decodeFromFields)("u64", fields.child_generation), childVersion: (0, reified_1.decodeFromFields)("u64", fields.child_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeEggRecord(item.type)) {
            throw new Error("not a BeeEggRecord type");
        }
        return BeeEggRecord.reified().new({ queenBeeId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.queenBeeId), queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), childGene: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.child_gene), childGeneration: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.child_generation), childVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.child_version) });
    }
    static fromBcs(data) { return BeeEggRecord.fromFields(BeeEggRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            queenBeeId: this.queenBeeId, queenVersion: this.queenVersion.toString(), childGene: this.childGene.toString(), childGeneration: this.childGeneration.toString(), childVersion: this.childVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeEggRecord.reified().new({ queenBeeId: (0, reified_1.decodeFromJSONField)("address", field.queenBeeId), queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), childGene: (0, reified_1.decodeFromJSONField)("u256", field.childGene), childGeneration: (0, reified_1.decodeFromJSONField)("u64", field.childGeneration), childVersion: (0, reified_1.decodeFromJSONField)("u64", field.childVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeEggRecord.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeEggRecord.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeEggRecord(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeEggRecord object`);
    } return BeeEggRecord.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeEggRecord(data.bcs.type)) {
                throw new Error(`object at is not a BeeEggRecord object`);
            }
            return BeeEggRecord.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeEggRecord.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeEggRecord object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeEggRecord(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeEggRecord object`);
        }
        return BeeEggRecord.fromSuiObjectData(res.data);
    }
}
exports.BeeEggRecord = BeeEggRecord;
BeeEggRecord.$typeName = `${PKG_V1}::dragon_trainer::BeeEggRecord`;
BeeEggRecord.$numTypeParams = 0;
BeeEggRecord.$isPhantom = [];
/* ============================== BeeFarmedYield =============================== */
function isBeeFarmedYield(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeFarmedYield`; }
class BeeFarmedYield {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeFarmedYield.$typeName;
        this.$isPhantom = BeeFarmedYield.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeFarmedYield.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.beeId = fields.beeId;
        ;
        this.version = fields.version;
        ;
        this.claimedHiveAmt = fields.claimedHiveAmt;
        ;
        this.claimedHoneyAmt = fields.claimedHoneyAmt;
        ;
        this.honeylocked = fields.honeylocked;
        ;
        this.totalHoneyLocked = fields.totalHoneyLocked;
        ;
        this.hiveEnergy = fields.hiveEnergy;
        ;
        this.honeyHealth = fields.honeyHealth;
        ;
        this.totalWeightedHoney = fields.totalWeightedHoney;
    }
    static reified() { return { typeName: BeeFarmedYield.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeFarmedYield.$typeName, ...[]), typeArgs: [], isPhantom: BeeFarmedYield.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeFarmedYield.fromFields(fields), fromFieldsWithTypes: (item) => BeeFarmedYield.fromFieldsWithTypes(item), fromBcs: (data) => BeeFarmedYield.fromBcs(data), bcs: BeeFarmedYield.bcs, fromJSONField: (field) => BeeFarmedYield.fromJSONField(field), fromJSON: (json) => BeeFarmedYield.fromJSON(json), fromSuiParsedData: (content) => BeeFarmedYield.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeFarmedYield.fromSuiObjectData(content), fetch: async (client, id) => BeeFarmedYield.fetch(client, id), new: (fields) => { return new BeeFarmedYield([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeFarmedYield.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeFarmedYield.reified()); }
    static get p() { return BeeFarmedYield.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeFarmedYield", {
            beeId: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), claimed_hive_amt: bcs_1.bcs.u64(), claimed_honey_amt: bcs_1.bcs.u64(), honeylocked: bcs_1.bcs.u64(), total_honey_locked: bcs_1.bcs.u64(), hive_energy: bcs_1.bcs.u64(), honey_health: bcs_1.bcs.u64(), total_weighted_honey: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return BeeFarmedYield.reified().new({ beeId: (0, reified_1.decodeFromFields)("address", fields.beeId), version: (0, reified_1.decodeFromFields)("u64", fields.version), claimedHiveAmt: (0, reified_1.decodeFromFields)("u64", fields.claimed_hive_amt), claimedHoneyAmt: (0, reified_1.decodeFromFields)("u64", fields.claimed_honey_amt), honeylocked: (0, reified_1.decodeFromFields)("u64", fields.honeylocked), totalHoneyLocked: (0, reified_1.decodeFromFields)("u64", fields.total_honey_locked), hiveEnergy: (0, reified_1.decodeFromFields)("u64", fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFields)("u64", fields.honey_health), totalWeightedHoney: (0, reified_1.decodeFromFields)("u128", fields.total_weighted_honey) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeFarmedYield(item.type)) {
            throw new Error("not a BeeFarmedYield type");
        }
        return BeeFarmedYield.reified().new({ beeId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.beeId), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), claimedHiveAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.claimed_hive_amt), claimedHoneyAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.claimed_honey_amt), honeylocked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honeylocked), totalHoneyLocked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_honey_locked), hiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_health), totalWeightedHoney: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.total_weighted_honey) });
    }
    static fromBcs(data) { return BeeFarmedYield.fromFields(BeeFarmedYield.bcs.parse(data)); }
    toJSONField() {
        return {
            beeId: this.beeId, version: this.version.toString(), claimedHiveAmt: this.claimedHiveAmt.toString(), claimedHoneyAmt: this.claimedHoneyAmt.toString(), honeylocked: this.honeylocked.toString(), totalHoneyLocked: this.totalHoneyLocked.toString(), hiveEnergy: this.hiveEnergy.toString(), honeyHealth: this.honeyHealth.toString(), totalWeightedHoney: this.totalWeightedHoney.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeFarmedYield.reified().new({ beeId: (0, reified_1.decodeFromJSONField)("address", field.beeId), version: (0, reified_1.decodeFromJSONField)("u64", field.version), claimedHiveAmt: (0, reified_1.decodeFromJSONField)("u64", field.claimedHiveAmt), claimedHoneyAmt: (0, reified_1.decodeFromJSONField)("u64", field.claimedHoneyAmt), honeylocked: (0, reified_1.decodeFromJSONField)("u64", field.honeylocked), totalHoneyLocked: (0, reified_1.decodeFromJSONField)("u64", field.totalHoneyLocked), hiveEnergy: (0, reified_1.decodeFromJSONField)("u64", field.hiveEnergy), honeyHealth: (0, reified_1.decodeFromJSONField)("u64", field.honeyHealth), totalWeightedHoney: (0, reified_1.decodeFromJSONField)("u128", field.totalWeightedHoney) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeFarmedYield.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeFarmedYield.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeFarmedYield(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeFarmedYield object`);
    } return BeeFarmedYield.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeFarmedYield(data.bcs.type)) {
                throw new Error(`object at is not a BeeFarmedYield object`);
            }
            return BeeFarmedYield.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeFarmedYield.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeFarmedYield object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeFarmedYield(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeFarmedYield object`);
        }
        return BeeFarmedYield.fromSuiObjectData(res.data);
    }
}
exports.BeeFarmedYield = BeeFarmedYield;
BeeFarmedYield.$typeName = `${PKG_V1}::dragon_trainer::BeeFarmedYield`;
BeeFarmedYield.$numTypeParams = 0;
BeeFarmedYield.$isPhantom = [];
/* ============================== BeeHive =============================== */
function isBeeHive(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeHive`; }
class BeeHive {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeHive.$typeName;
        this.$isPhantom = BeeHive.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.queenBeeId = fields.queenBeeId;
        ;
        this.queenType = fields.queenType;
        ;
        this.queenVersion = fields.queenVersion;
        ;
        this.queenBirthInfo = fields.queenBirthInfo;
        ;
        this.maxEggsLimit = fields.maxEggsLimit;
        ;
        this.eggsIncubated = fields.eggsIncubated;
        ;
        this.auctionEpoch = fields.auctionEpoch;
        ;
        this.queenGene = fields.queenGene;
        ;
        this.isActive = fields.isActive;
        ;
        this.basePrice = fields.basePrice;
        ;
        this.curveA = fields.curveA;
        ;
        this.friendsList = fields.friendsList;
        ;
        this.incubatingEggs = fields.incubatingEggs;
        ;
        this.eggsHatchedList = fields.eggsHatchedList;
        ;
        this.suiCustody = fields.suiCustody;
    }
    static reified() { return { typeName: BeeHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeHive.$typeName, ...[]), typeArgs: [], isPhantom: BeeHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeHive.fromFields(fields), fromFieldsWithTypes: (item) => BeeHive.fromFieldsWithTypes(item), fromBcs: (data) => BeeHive.fromBcs(data), bcs: BeeHive.bcs, fromJSONField: (field) => BeeHive.fromJSONField(field), fromJSON: (json) => BeeHive.fromJSON(json), fromSuiParsedData: (content) => BeeHive.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeHive.fromSuiObjectData(content), fetch: async (client, id) => BeeHive.fetch(client, id), new: (fields) => { return new BeeHive([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeHive.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeHive.reified()); }
    static get p() { return BeeHive.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeHive", {
            queenBeeId: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), queen_type: bcs_1.bcs.u64(), queen_version: bcs_1.bcs.u64(), queenBirthInfo: QueenFamilyInfo.bcs, max_eggs_limit: bcs_1.bcs.u64(), eggs_incubated: bcs_1.bcs.u64(), auction_epoch: bcs_1.bcs.u64(), queen_gene: bcs_1.bcs.u256(), is_active: bcs_1.bcs.bool(), base_price: bcs_1.bcs.u64(), curve_a: bcs_1.bcs.u64(), friends_list: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), incubating_eggs: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), eggs_hatched_list: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), sui_custody: structs_4.Balance.bcs
        });
    }
    ;
    static fromFields(fields) { return BeeHive.reified().new({ queenBeeId: (0, reified_1.decodeFromFields)("address", fields.queenBeeId), queenType: (0, reified_1.decodeFromFields)("u64", fields.queen_type), queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), queenBirthInfo: (0, reified_1.decodeFromFields)(QueenFamilyInfo.reified(), fields.queenBirthInfo), maxEggsLimit: (0, reified_1.decodeFromFields)("u64", fields.max_eggs_limit), eggsIncubated: (0, reified_1.decodeFromFields)("u64", fields.eggs_incubated), auctionEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_epoch), queenGene: (0, reified_1.decodeFromFields)("u256", fields.queen_gene), isActive: (0, reified_1.decodeFromFields)("bool", fields.is_active), basePrice: (0, reified_1.decodeFromFields)("u64", fields.base_price), curveA: (0, reified_1.decodeFromFields)("u64", fields.curve_a), friendsList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("u64")), fields.friends_list), incubatingEggs: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(BeeEgg.reified())), fields.incubating_eggs), eggsHatchedList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), fields.eggs_hatched_list), suiCustody: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.sui_custody) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeHive(item.type)) {
            throw new Error("not a BeeHive type");
        }
        return BeeHive.reified().new({ queenBeeId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.queenBeeId), queenType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_type), queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), queenBirthInfo: (0, reified_1.decodeFromFieldsWithTypes)(QueenFamilyInfo.reified(), item.fields.queenBirthInfo), maxEggsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_eggs_limit), eggsIncubated: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.eggs_incubated), auctionEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_epoch), queenGene: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.queen_gene), isActive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_active), basePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.base_price), curveA: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.curve_a), friendsList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("u64")), item.fields.friends_list), incubatingEggs: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(BeeEgg.reified())), item.fields.incubating_eggs), eggsHatchedList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), item.fields.eggs_hatched_list), suiCustody: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.sui_custody) });
    }
    static fromBcs(data) { return BeeHive.fromFields(BeeHive.bcs.parse(data)); }
    toJSONField() {
        return {
            queenBeeId: this.queenBeeId, queenType: this.queenType.toString(), queenVersion: this.queenVersion.toString(), queenBirthInfo: this.queenBirthInfo.toJSONField(), maxEggsLimit: this.maxEggsLimit.toString(), eggsIncubated: this.eggsIncubated.toString(), auctionEpoch: this.auctionEpoch.toString(), queenGene: this.queenGene.toString(), isActive: this.isActive, basePrice: this.basePrice.toString(), curveA: this.curveA.toString(), friendsList: this.friendsList.toJSONField(), incubatingEggs: this.incubatingEggs.toJSONField(), eggsHatchedList: this.eggsHatchedList.toJSONField(), suiCustody: this.suiCustody.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeHive.reified().new({ queenBeeId: (0, reified_1.decodeFromJSONField)("address", field.queenBeeId), queenType: (0, reified_1.decodeFromJSONField)("u64", field.queenType), queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), queenBirthInfo: (0, reified_1.decodeFromJSONField)(QueenFamilyInfo.reified(), field.queenBirthInfo), maxEggsLimit: (0, reified_1.decodeFromJSONField)("u64", field.maxEggsLimit), eggsIncubated: (0, reified_1.decodeFromJSONField)("u64", field.eggsIncubated), auctionEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionEpoch), queenGene: (0, reified_1.decodeFromJSONField)("u256", field.queenGene), isActive: (0, reified_1.decodeFromJSONField)("bool", field.isActive), basePrice: (0, reified_1.decodeFromJSONField)("u64", field.basePrice), curveA: (0, reified_1.decodeFromJSONField)("u64", field.curveA), friendsList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("u64")), field.friendsList), incubatingEggs: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(BeeEgg.reified())), field.incubatingEggs), eggsHatchedList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), field.eggsHatchedList), suiCustody: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.suiCustody) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeHive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeHive.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeHive(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeHive object`);
    } return BeeHive.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeHive(data.bcs.type)) {
                throw new Error(`object at is not a BeeHive object`);
            }
            return BeeHive.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeHive.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeHive object`);
        }
        return BeeHive.fromSuiObjectData(res.data);
    }
}
exports.BeeHive = BeeHive;
BeeHive.$typeName = `${PKG_V1}::dragon_trainer::BeeHive`;
BeeHive.$numTypeParams = 0;
BeeHive.$isPhantom = [];
/* ============================== BeeInFlight =============================== */
function isBeeInFlight(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeInFlight`; }
class BeeInFlight {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeInFlight.$typeName;
        this.$isPhantom = BeeInFlight.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeInFlight.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.mysticalBee = fields.mysticalBee;
        ;
        this.transferredBy = fields.transferredBy;
        ;
        this.recepient = fields.recepient;
    }
    static reified() { return { typeName: BeeInFlight.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeInFlight.$typeName, ...[]), typeArgs: [], isPhantom: BeeInFlight.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeInFlight.fromFields(fields), fromFieldsWithTypes: (item) => BeeInFlight.fromFieldsWithTypes(item), fromBcs: (data) => BeeInFlight.fromBcs(data), bcs: BeeInFlight.bcs, fromJSONField: (field) => BeeInFlight.fromJSONField(field), fromJSON: (json) => BeeInFlight.fromJSON(json), fromSuiParsedData: (content) => BeeInFlight.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeInFlight.fromSuiObjectData(content), fetch: async (client, id) => BeeInFlight.fetch(client, id), new: (fields) => { return new BeeInFlight([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeInFlight.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeInFlight.reified()); }
    static get p() { return BeeInFlight.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeInFlight", {
            mystical_bee: MysticalBee.bcs, transferred_by: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), recepient: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BeeInFlight.reified().new({ mysticalBee: (0, reified_1.decodeFromFields)(MysticalBee.reified(), fields.mystical_bee), transferredBy: (0, reified_1.decodeFromFields)("address", fields.transferred_by), recepient: (0, reified_1.decodeFromFields)("address", fields.recepient) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeInFlight(item.type)) {
            throw new Error("not a BeeInFlight type");
        }
        return BeeInFlight.reified().new({ mysticalBee: (0, reified_1.decodeFromFieldsWithTypes)(MysticalBee.reified(), item.fields.mystical_bee), transferredBy: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.transferred_by), recepient: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.recepient) });
    }
    static fromBcs(data) { return BeeInFlight.fromFields(BeeInFlight.bcs.parse(data)); }
    toJSONField() {
        return {
            mysticalBee: this.mysticalBee.toJSONField(), transferredBy: this.transferredBy, recepient: this.recepient,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeInFlight.reified().new({ mysticalBee: (0, reified_1.decodeFromJSONField)(MysticalBee.reified(), field.mysticalBee), transferredBy: (0, reified_1.decodeFromJSONField)("address", field.transferredBy), recepient: (0, reified_1.decodeFromJSONField)("address", field.recepient) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeInFlight.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeInFlight.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeInFlight(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeInFlight object`);
    } return BeeInFlight.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeInFlight(data.bcs.type)) {
                throw new Error(`object at is not a BeeInFlight object`);
            }
            return BeeInFlight.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeInFlight.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeInFlight object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeInFlight(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeInFlight object`);
        }
        return BeeInFlight.fromSuiObjectData(res.data);
    }
}
exports.BeeInFlight = BeeInFlight;
BeeInFlight.$typeName = `${PKG_V1}::dragon_trainer::BeeInFlight`;
BeeInFlight.$numTypeParams = 0;
BeeInFlight.$isPhantom = [];
/* ============================== BeeIsNowAQueen =============================== */
function isBeeIsNowAQueen(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeIsNowAQueen`; }
class BeeIsNowAQueen {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeIsNowAQueen.$typeName;
        this.$isPhantom = BeeIsNowAQueen.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeIsNowAQueen.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.queenBeeId = fields.queenBeeId;
        ;
        this.familyType = fields.familyType;
        ;
        this.version = fields.version;
        ;
        this.queenGene = fields.queenGene;
        ;
        this.maxEggsLimit = fields.maxEggsLimit;
        ;
        this.auctionEpoch = fields.auctionEpoch;
    }
    static reified() { return { typeName: BeeIsNowAQueen.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeIsNowAQueen.$typeName, ...[]), typeArgs: [], isPhantom: BeeIsNowAQueen.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeIsNowAQueen.fromFields(fields), fromFieldsWithTypes: (item) => BeeIsNowAQueen.fromFieldsWithTypes(item), fromBcs: (data) => BeeIsNowAQueen.fromBcs(data), bcs: BeeIsNowAQueen.bcs, fromJSONField: (field) => BeeIsNowAQueen.fromJSONField(field), fromJSON: (json) => BeeIsNowAQueen.fromJSON(json), fromSuiParsedData: (content) => BeeIsNowAQueen.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeIsNowAQueen.fromSuiObjectData(content), fetch: async (client, id) => BeeIsNowAQueen.fetch(client, id), new: (fields) => { return new BeeIsNowAQueen([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeIsNowAQueen.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeIsNowAQueen.reified()); }
    static get p() { return BeeIsNowAQueen.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeIsNowAQueen", {
            queenBeeId: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), family_type: bcs_1.bcs.u64(), version: bcs_1.bcs.u64(), queen_gene: bcs_1.bcs.u256(), max_eggs_limit: bcs_1.bcs.u64(), auction_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeeIsNowAQueen.reified().new({ queenBeeId: (0, reified_1.decodeFromFields)("address", fields.queenBeeId), familyType: (0, reified_1.decodeFromFields)("u64", fields.family_type), version: (0, reified_1.decodeFromFields)("u64", fields.version), queenGene: (0, reified_1.decodeFromFields)("u256", fields.queen_gene), maxEggsLimit: (0, reified_1.decodeFromFields)("u64", fields.max_eggs_limit), auctionEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeIsNowAQueen(item.type)) {
            throw new Error("not a BeeIsNowAQueen type");
        }
        return BeeIsNowAQueen.reified().new({ queenBeeId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.queenBeeId), familyType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.family_type), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), queenGene: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.queen_gene), maxEggsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_eggs_limit), auctionEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_epoch) });
    }
    static fromBcs(data) { return BeeIsNowAQueen.fromFields(BeeIsNowAQueen.bcs.parse(data)); }
    toJSONField() {
        return {
            queenBeeId: this.queenBeeId, familyType: this.familyType.toString(), version: this.version.toString(), queenGene: this.queenGene.toString(), maxEggsLimit: this.maxEggsLimit.toString(), auctionEpoch: this.auctionEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeIsNowAQueen.reified().new({ queenBeeId: (0, reified_1.decodeFromJSONField)("address", field.queenBeeId), familyType: (0, reified_1.decodeFromJSONField)("u64", field.familyType), version: (0, reified_1.decodeFromJSONField)("u64", field.version), queenGene: (0, reified_1.decodeFromJSONField)("u256", field.queenGene), maxEggsLimit: (0, reified_1.decodeFromJSONField)("u64", field.maxEggsLimit), auctionEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeIsNowAQueen.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeIsNowAQueen.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeIsNowAQueen(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeIsNowAQueen object`);
    } return BeeIsNowAQueen.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeIsNowAQueen(data.bcs.type)) {
                throw new Error(`object at is not a BeeIsNowAQueen object`);
            }
            return BeeIsNowAQueen.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeIsNowAQueen.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeIsNowAQueen object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeIsNowAQueen(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeIsNowAQueen object`);
        }
        return BeeIsNowAQueen.fromSuiObjectData(res.data);
    }
}
exports.BeeIsNowAQueen = BeeIsNowAQueen;
BeeIsNowAQueen.$typeName = `${PKG_V1}::dragon_trainer::BeeIsNowAQueen`;
BeeIsNowAQueen.$numTypeParams = 0;
BeeIsNowAQueen.$isPhantom = [];
/* ============================== BeeOwnershipUpdated =============================== */
function isBeeOwnershipUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeOwnershipUpdated`; }
class BeeOwnershipUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeOwnershipUpdated.$typeName;
        this.$isPhantom = BeeOwnershipUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeOwnershipUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.newOwner = fields.newOwner;
    }
    static reified() { return { typeName: BeeOwnershipUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeOwnershipUpdated.$typeName, ...[]), typeArgs: [], isPhantom: BeeOwnershipUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeOwnershipUpdated.fromFields(fields), fromFieldsWithTypes: (item) => BeeOwnershipUpdated.fromFieldsWithTypes(item), fromBcs: (data) => BeeOwnershipUpdated.fromBcs(data), bcs: BeeOwnershipUpdated.bcs, fromJSONField: (field) => BeeOwnershipUpdated.fromJSONField(field), fromJSON: (json) => BeeOwnershipUpdated.fromJSON(json), fromSuiParsedData: (content) => BeeOwnershipUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeOwnershipUpdated.fromSuiObjectData(content), fetch: async (client, id) => BeeOwnershipUpdated.fetch(client, id), new: (fields) => { return new BeeOwnershipUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeOwnershipUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeOwnershipUpdated.reified()); }
    static get p() { return BeeOwnershipUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeOwnershipUpdated", {
            version: bcs_1.bcs.u64(), new_owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BeeOwnershipUpdated.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), newOwner: (0, reified_1.decodeFromFields)("address", fields.new_owner) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeOwnershipUpdated(item.type)) {
            throw new Error("not a BeeOwnershipUpdated type");
        }
        return BeeOwnershipUpdated.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), newOwner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.new_owner) });
    }
    static fromBcs(data) { return BeeOwnershipUpdated.fromFields(BeeOwnershipUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), newOwner: this.newOwner,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeOwnershipUpdated.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), newOwner: (0, reified_1.decodeFromJSONField)("address", field.newOwner) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeOwnershipUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeOwnershipUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeOwnershipUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeOwnershipUpdated object`);
    } return BeeOwnershipUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeOwnershipUpdated(data.bcs.type)) {
                throw new Error(`object at is not a BeeOwnershipUpdated object`);
            }
            return BeeOwnershipUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeOwnershipUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeOwnershipUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeOwnershipUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeOwnershipUpdated object`);
        }
        return BeeOwnershipUpdated.fromSuiObjectData(res.data);
    }
}
exports.BeeOwnershipUpdated = BeeOwnershipUpdated;
BeeOwnershipUpdated.$typeName = `${PKG_V1}::dragon_trainer::BeeOwnershipUpdated`;
BeeOwnershipUpdated.$numTypeParams = 0;
BeeOwnershipUpdated.$isPhantom = [];
/* ============================== BeeRemovedFromFriendsList =============================== */
function isBeeRemovedFromFriendsList(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeRemovedFromFriendsList`; }
class BeeRemovedFromFriendsList {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeRemovedFromFriendsList.$typeName;
        this.$isPhantom = BeeRemovedFromFriendsList.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeRemovedFromFriendsList.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.queenVersion = fields.queenVersion;
        ;
        this.friendlyBee = fields.friendlyBee;
    }
    static reified() { return { typeName: BeeRemovedFromFriendsList.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeRemovedFromFriendsList.$typeName, ...[]), typeArgs: [], isPhantom: BeeRemovedFromFriendsList.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeRemovedFromFriendsList.fromFields(fields), fromFieldsWithTypes: (item) => BeeRemovedFromFriendsList.fromFieldsWithTypes(item), fromBcs: (data) => BeeRemovedFromFriendsList.fromBcs(data), bcs: BeeRemovedFromFriendsList.bcs, fromJSONField: (field) => BeeRemovedFromFriendsList.fromJSONField(field), fromJSON: (json) => BeeRemovedFromFriendsList.fromJSON(json), fromSuiParsedData: (content) => BeeRemovedFromFriendsList.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeRemovedFromFriendsList.fromSuiObjectData(content), fetch: async (client, id) => BeeRemovedFromFriendsList.fetch(client, id), new: (fields) => { return new BeeRemovedFromFriendsList([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeRemovedFromFriendsList.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeRemovedFromFriendsList.reified()); }
    static get p() { return BeeRemovedFromFriendsList.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeRemovedFromFriendsList", {
            queen_version: bcs_1.bcs.u64(), friendly_bee: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeeRemovedFromFriendsList.reified().new({ queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), friendlyBee: (0, reified_1.decodeFromFields)("u64", fields.friendly_bee) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeRemovedFromFriendsList(item.type)) {
            throw new Error("not a BeeRemovedFromFriendsList type");
        }
        return BeeRemovedFromFriendsList.reified().new({ queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), friendlyBee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.friendly_bee) });
    }
    static fromBcs(data) { return BeeRemovedFromFriendsList.fromFields(BeeRemovedFromFriendsList.bcs.parse(data)); }
    toJSONField() {
        return {
            queenVersion: this.queenVersion.toString(), friendlyBee: this.friendlyBee.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeRemovedFromFriendsList.reified().new({ queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), friendlyBee: (0, reified_1.decodeFromJSONField)("u64", field.friendlyBee) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeRemovedFromFriendsList.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeRemovedFromFriendsList.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeRemovedFromFriendsList(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeRemovedFromFriendsList object`);
    } return BeeRemovedFromFriendsList.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeRemovedFromFriendsList(data.bcs.type)) {
                throw new Error(`object at is not a BeeRemovedFromFriendsList object`);
            }
            return BeeRemovedFromFriendsList.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeRemovedFromFriendsList.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeRemovedFromFriendsList object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeRemovedFromFriendsList(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeRemovedFromFriendsList object`);
        }
        return BeeRemovedFromFriendsList.fromSuiObjectData(res.data);
    }
}
exports.BeeRemovedFromFriendsList = BeeRemovedFromFriendsList;
BeeRemovedFromFriendsList.$typeName = `${PKG_V1}::dragon_trainer::BeeRemovedFromFriendsList`;
BeeRemovedFromFriendsList.$numTypeParams = 0;
BeeRemovedFromFriendsList.$isPhantom = [];
/* ============================== BeeSentToHiddenWorld =============================== */
function isBeeSentToHiddenWorld(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeSentToHiddenWorld`; }
class BeeSentToHiddenWorld {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeSentToHiddenWorld.$typeName;
        this.$isPhantom = BeeSentToHiddenWorld.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeSentToHiddenWorld.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.sentAt = fields.sentAt;
        ;
        this.sender = fields.sender;
        ;
        this.beeId = fields.beeId;
        ;
        this.version = fields.version;
        ;
        this.genes = fields.genes;
        ;
        this.energy = fields.energy;
        ;
        this.health = fields.health;
        ;
        this.totalHoneyClaimed = fields.totalHoneyClaimed;
        ;
        this.hiveUnlocked = fields.hiveUnlocked;
        ;
        this.totalWeightedHive = fields.totalWeightedHive;
        ;
        this.totalWeightedHoney = fields.totalWeightedHoney;
    }
    static reified() { return { typeName: BeeSentToHiddenWorld.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeSentToHiddenWorld.$typeName, ...[]), typeArgs: [], isPhantom: BeeSentToHiddenWorld.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeSentToHiddenWorld.fromFields(fields), fromFieldsWithTypes: (item) => BeeSentToHiddenWorld.fromFieldsWithTypes(item), fromBcs: (data) => BeeSentToHiddenWorld.fromBcs(data), bcs: BeeSentToHiddenWorld.bcs, fromJSONField: (field) => BeeSentToHiddenWorld.fromJSONField(field), fromJSON: (json) => BeeSentToHiddenWorld.fromJSON(json), fromSuiParsedData: (content) => BeeSentToHiddenWorld.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeSentToHiddenWorld.fromSuiObjectData(content), fetch: async (client, id) => BeeSentToHiddenWorld.fetch(client, id), new: (fields) => { return new BeeSentToHiddenWorld([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeSentToHiddenWorld.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeSentToHiddenWorld.reified()); }
    static get p() { return BeeSentToHiddenWorld.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeSentToHiddenWorld", {
            sent_at: bcs_1.bcs.u64(), sender: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), beeId: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), genes: bcs_1.bcs.u256(), energy: bcs_1.bcs.u64(), health: bcs_1.bcs.u64(), total_honey_claimed: bcs_1.bcs.u64(), hive_unlocked: bcs_1.bcs.u64(), total_weighted_hive: bcs_1.bcs.u128(), total_weighted_honey: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return BeeSentToHiddenWorld.reified().new({ sentAt: (0, reified_1.decodeFromFields)("u64", fields.sent_at), sender: (0, reified_1.decodeFromFields)("address", fields.sender), beeId: (0, reified_1.decodeFromFields)("address", fields.beeId), version: (0, reified_1.decodeFromFields)("u64", fields.version), genes: (0, reified_1.decodeFromFields)("u256", fields.genes), energy: (0, reified_1.decodeFromFields)("u64", fields.energy), health: (0, reified_1.decodeFromFields)("u64", fields.health), totalHoneyClaimed: (0, reified_1.decodeFromFields)("u64", fields.total_honey_claimed), hiveUnlocked: (0, reified_1.decodeFromFields)("u64", fields.hive_unlocked), totalWeightedHive: (0, reified_1.decodeFromFields)("u128", fields.total_weighted_hive), totalWeightedHoney: (0, reified_1.decodeFromFields)("u128", fields.total_weighted_honey) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeSentToHiddenWorld(item.type)) {
            throw new Error("not a BeeSentToHiddenWorld type");
        }
        return BeeSentToHiddenWorld.reified().new({ sentAt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sent_at), sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), beeId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.beeId), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), genes: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.genes), energy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy), health: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.health), totalHoneyClaimed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_honey_claimed), hiveUnlocked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_unlocked), totalWeightedHive: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.total_weighted_hive), totalWeightedHoney: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.total_weighted_honey) });
    }
    static fromBcs(data) { return BeeSentToHiddenWorld.fromFields(BeeSentToHiddenWorld.bcs.parse(data)); }
    toJSONField() {
        return {
            sentAt: this.sentAt.toString(), sender: this.sender, beeId: this.beeId, version: this.version.toString(), genes: this.genes.toString(), energy: this.energy.toString(), health: this.health.toString(), totalHoneyClaimed: this.totalHoneyClaimed.toString(), hiveUnlocked: this.hiveUnlocked.toString(), totalWeightedHive: this.totalWeightedHive.toString(), totalWeightedHoney: this.totalWeightedHoney.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeSentToHiddenWorld.reified().new({ sentAt: (0, reified_1.decodeFromJSONField)("u64", field.sentAt), sender: (0, reified_1.decodeFromJSONField)("address", field.sender), beeId: (0, reified_1.decodeFromJSONField)("address", field.beeId), version: (0, reified_1.decodeFromJSONField)("u64", field.version), genes: (0, reified_1.decodeFromJSONField)("u256", field.genes), energy: (0, reified_1.decodeFromJSONField)("u64", field.energy), health: (0, reified_1.decodeFromJSONField)("u64", field.health), totalHoneyClaimed: (0, reified_1.decodeFromJSONField)("u64", field.totalHoneyClaimed), hiveUnlocked: (0, reified_1.decodeFromJSONField)("u64", field.hiveUnlocked), totalWeightedHive: (0, reified_1.decodeFromJSONField)("u128", field.totalWeightedHive), totalWeightedHoney: (0, reified_1.decodeFromJSONField)("u128", field.totalWeightedHoney) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeSentToHiddenWorld.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeSentToHiddenWorld.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeSentToHiddenWorld(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeSentToHiddenWorld object`);
    } return BeeSentToHiddenWorld.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeSentToHiddenWorld(data.bcs.type)) {
                throw new Error(`object at is not a BeeSentToHiddenWorld object`);
            }
            return BeeSentToHiddenWorld.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeSentToHiddenWorld.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeSentToHiddenWorld object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeSentToHiddenWorld(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeSentToHiddenWorld object`);
        }
        return BeeSentToHiddenWorld.fromSuiObjectData(res.data);
    }
}
exports.BeeSentToHiddenWorld = BeeSentToHiddenWorld;
BeeSentToHiddenWorld.$typeName = `${PKG_V1}::dragon_trainer::BeeSentToHiddenWorld`;
BeeSentToHiddenWorld.$numTypeParams = 0;
BeeSentToHiddenWorld.$isPhantom = [];
/* ============================== BeeTransferCancelled =============================== */
function isBeeTransferCancelled(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeTransferCancelled`; }
class BeeTransferCancelled {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeTransferCancelled.$typeName;
        this.$isPhantom = BeeTransferCancelled.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeTransferCancelled.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.transferredBy = fields.transferredBy;
        ;
        this.recepient = fields.recepient;
    }
    static reified() { return { typeName: BeeTransferCancelled.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeTransferCancelled.$typeName, ...[]), typeArgs: [], isPhantom: BeeTransferCancelled.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeTransferCancelled.fromFields(fields), fromFieldsWithTypes: (item) => BeeTransferCancelled.fromFieldsWithTypes(item), fromBcs: (data) => BeeTransferCancelled.fromBcs(data), bcs: BeeTransferCancelled.bcs, fromJSONField: (field) => BeeTransferCancelled.fromJSONField(field), fromJSON: (json) => BeeTransferCancelled.fromJSON(json), fromSuiParsedData: (content) => BeeTransferCancelled.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeTransferCancelled.fromSuiObjectData(content), fetch: async (client, id) => BeeTransferCancelled.fetch(client, id), new: (fields) => { return new BeeTransferCancelled([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeTransferCancelled.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeTransferCancelled.reified()); }
    static get p() { return BeeTransferCancelled.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeTransferCancelled", {
            version: bcs_1.bcs.u64(), transferred_by: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), recepient: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BeeTransferCancelled.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), transferredBy: (0, reified_1.decodeFromFields)("address", fields.transferred_by), recepient: (0, reified_1.decodeFromFields)("address", fields.recepient) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeTransferCancelled(item.type)) {
            throw new Error("not a BeeTransferCancelled type");
        }
        return BeeTransferCancelled.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), transferredBy: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.transferred_by), recepient: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.recepient) });
    }
    static fromBcs(data) { return BeeTransferCancelled.fromFields(BeeTransferCancelled.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), transferredBy: this.transferredBy, recepient: this.recepient,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeTransferCancelled.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), transferredBy: (0, reified_1.decodeFromJSONField)("address", field.transferredBy), recepient: (0, reified_1.decodeFromJSONField)("address", field.recepient) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeTransferCancelled.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeTransferCancelled.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeTransferCancelled(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeTransferCancelled object`);
    } return BeeTransferCancelled.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeTransferCancelled(data.bcs.type)) {
                throw new Error(`object at is not a BeeTransferCancelled object`);
            }
            return BeeTransferCancelled.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeTransferCancelled.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeTransferCancelled object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeTransferCancelled(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeTransferCancelled object`);
        }
        return BeeTransferCancelled.fromSuiObjectData(res.data);
    }
}
exports.BeeTransferCancelled = BeeTransferCancelled;
BeeTransferCancelled.$typeName = `${PKG_V1}::dragon_trainer::BeeTransferCancelled`;
BeeTransferCancelled.$numTypeParams = 0;
BeeTransferCancelled.$isPhantom = [];
/* ============================== BeeTransferInitiated =============================== */
function isBeeTransferInitiated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeTransferInitiated`; }
class BeeTransferInitiated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeTransferInitiated.$typeName;
        this.$isPhantom = BeeTransferInitiated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeTransferInitiated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.transferredBy = fields.transferredBy;
        ;
        this.recepient = fields.recepient;
    }
    static reified() { return { typeName: BeeTransferInitiated.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeTransferInitiated.$typeName, ...[]), typeArgs: [], isPhantom: BeeTransferInitiated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeTransferInitiated.fromFields(fields), fromFieldsWithTypes: (item) => BeeTransferInitiated.fromFieldsWithTypes(item), fromBcs: (data) => BeeTransferInitiated.fromBcs(data), bcs: BeeTransferInitiated.bcs, fromJSONField: (field) => BeeTransferInitiated.fromJSONField(field), fromJSON: (json) => BeeTransferInitiated.fromJSON(json), fromSuiParsedData: (content) => BeeTransferInitiated.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeTransferInitiated.fromSuiObjectData(content), fetch: async (client, id) => BeeTransferInitiated.fetch(client, id), new: (fields) => { return new BeeTransferInitiated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeTransferInitiated.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeTransferInitiated.reified()); }
    static get p() { return BeeTransferInitiated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeTransferInitiated", {
            version: bcs_1.bcs.u64(), transferred_by: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), recepient: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BeeTransferInitiated.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), transferredBy: (0, reified_1.decodeFromFields)("address", fields.transferred_by), recepient: (0, reified_1.decodeFromFields)("address", fields.recepient) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeTransferInitiated(item.type)) {
            throw new Error("not a BeeTransferInitiated type");
        }
        return BeeTransferInitiated.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), transferredBy: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.transferred_by), recepient: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.recepient) });
    }
    static fromBcs(data) { return BeeTransferInitiated.fromFields(BeeTransferInitiated.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), transferredBy: this.transferredBy, recepient: this.recepient,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeTransferInitiated.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), transferredBy: (0, reified_1.decodeFromJSONField)("address", field.transferredBy), recepient: (0, reified_1.decodeFromJSONField)("address", field.recepient) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeTransferInitiated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeTransferInitiated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeTransferInitiated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeTransferInitiated object`);
    } return BeeTransferInitiated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeTransferInitiated(data.bcs.type)) {
                throw new Error(`object at is not a BeeTransferInitiated object`);
            }
            return BeeTransferInitiated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeTransferInitiated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeTransferInitiated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeTransferInitiated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeTransferInitiated object`);
        }
        return BeeTransferInitiated.fromSuiObjectData(res.data);
    }
}
exports.BeeTransferInitiated = BeeTransferInitiated;
BeeTransferInitiated.$typeName = `${PKG_V1}::dragon_trainer::BeeTransferInitiated`;
BeeTransferInitiated.$numTypeParams = 0;
BeeTransferInitiated.$isPhantom = [];
/* ============================== BeeTransfers =============================== */
function isBeeTransfers(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeTransfers`; }
class BeeTransfers {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeTransfers.$typeName;
        this.$isPhantom = BeeTransfers.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeTransfers.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.custodiedBees = fields.custodiedBees;
        ;
        this.incomingBoxes = fields.incomingBoxes;
        ;
        this.outgoingBoxes = fields.outgoingBoxes;
    }
    static reified() { return { typeName: BeeTransfers.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeTransfers.$typeName, ...[]), typeArgs: [], isPhantom: BeeTransfers.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeTransfers.fromFields(fields), fromFieldsWithTypes: (item) => BeeTransfers.fromFieldsWithTypes(item), fromBcs: (data) => BeeTransfers.fromBcs(data), bcs: BeeTransfers.bcs, fromJSONField: (field) => BeeTransfers.fromJSONField(field), fromJSON: (json) => BeeTransfers.fromJSON(json), fromSuiParsedData: (content) => BeeTransfers.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeTransfers.fromSuiObjectData(content), fetch: async (client, id) => BeeTransfers.fetch(client, id), new: (fields) => { return new BeeTransfers([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeTransfers.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeTransfers.reified()); }
    static get p() { return BeeTransfers.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeTransfers", {
            custodied_bees: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), incoming_boxes: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), outgoing_boxes: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }))
        });
    }
    ;
    static fromFields(fields) { return BeeTransfers.reified().new({ custodiedBees: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(BeeInFlight.reified())), fields.custodied_bees), incomingBoxes: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), fields.incoming_boxes), outgoingBoxes: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), fields.outgoing_boxes) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeTransfers(item.type)) {
            throw new Error("not a BeeTransfers type");
        }
        return BeeTransfers.reified().new({ custodiedBees: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(BeeInFlight.reified())), item.fields.custodied_bees), incomingBoxes: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), item.fields.incoming_boxes), outgoingBoxes: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), item.fields.outgoing_boxes) });
    }
    static fromBcs(data) { return BeeTransfers.fromFields(BeeTransfers.bcs.parse(data)); }
    toJSONField() {
        return {
            custodiedBees: this.custodiedBees.toJSONField(), incomingBoxes: this.incomingBoxes.toJSONField(), outgoingBoxes: this.outgoingBoxes.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeTransfers.reified().new({ custodiedBees: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(BeeInFlight.reified())), field.custodiedBees), incomingBoxes: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), field.incomingBoxes), outgoingBoxes: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), field.outgoingBoxes) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeTransfers.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeTransfers.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeTransfers(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeTransfers object`);
    } return BeeTransfers.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeTransfers(data.bcs.type)) {
                throw new Error(`object at is not a BeeTransfers object`);
            }
            return BeeTransfers.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeTransfers.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeTransfers object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeTransfers(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeTransfers object`);
        }
        return BeeTransfers.fromSuiObjectData(res.data);
    }
}
exports.BeeTransfers = BeeTransfers;
BeeTransfers.$typeName = `${PKG_V1}::dragon_trainer::BeeTransfers`;
BeeTransfers.$numTypeParams = 0;
BeeTransfers.$isPhantom = [];
/* ============================== BeeUpdatedInGenesisBasket =============================== */
function isBeeUpdatedInGenesisBasket(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeeUpdatedInGenesisBasket`; }
class BeeUpdatedInGenesisBasket {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeUpdatedInGenesisBasket.$typeName;
        this.$isPhantom = BeeUpdatedInGenesisBasket.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeUpdatedInGenesisBasket.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        ;
        this.gene = fields.gene;
        ;
        this.img = fields.img;
    }
    static reified() { return { typeName: BeeUpdatedInGenesisBasket.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeUpdatedInGenesisBasket.$typeName, ...[]), typeArgs: [], isPhantom: BeeUpdatedInGenesisBasket.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeeUpdatedInGenesisBasket.fromFields(fields), fromFieldsWithTypes: (item) => BeeUpdatedInGenesisBasket.fromFieldsWithTypes(item), fromBcs: (data) => BeeUpdatedInGenesisBasket.fromBcs(data), bcs: BeeUpdatedInGenesisBasket.bcs, fromJSONField: (field) => BeeUpdatedInGenesisBasket.fromJSONField(field), fromJSON: (json) => BeeUpdatedInGenesisBasket.fromJSON(json), fromSuiParsedData: (content) => BeeUpdatedInGenesisBasket.fromSuiParsedData(content), fromSuiObjectData: (content) => BeeUpdatedInGenesisBasket.fromSuiObjectData(content), fetch: async (client, id) => BeeUpdatedInGenesisBasket.fetch(client, id), new: (fields) => { return new BeeUpdatedInGenesisBasket([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeUpdatedInGenesisBasket.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeUpdatedInGenesisBasket.reified()); }
    static get p() { return BeeUpdatedInGenesisBasket.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeUpdatedInGenesisBasket", {
            index: bcs_1.bcs.u64(), gene: bcs_1.bcs.u256(), img: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return BeeUpdatedInGenesisBasket.reified().new({ index: (0, reified_1.decodeFromFields)("u64", fields.index), gene: (0, reified_1.decodeFromFields)("u256", fields.gene), img: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.img) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeUpdatedInGenesisBasket(item.type)) {
            throw new Error("not a BeeUpdatedInGenesisBasket type");
        }
        return BeeUpdatedInGenesisBasket.reified().new({ index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), gene: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.gene), img: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.img) });
    }
    static fromBcs(data) { return BeeUpdatedInGenesisBasket.fromFields(BeeUpdatedInGenesisBasket.bcs.parse(data)); }
    toJSONField() {
        return {
            index: this.index.toString(), gene: this.gene.toString(), img: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.img),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeUpdatedInGenesisBasket.reified().new({ index: (0, reified_1.decodeFromJSONField)("u64", field.index), gene: (0, reified_1.decodeFromJSONField)("u256", field.gene), img: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.img) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeUpdatedInGenesisBasket.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeUpdatedInGenesisBasket.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeUpdatedInGenesisBasket(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeUpdatedInGenesisBasket object`);
    } return BeeUpdatedInGenesisBasket.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeUpdatedInGenesisBasket(data.bcs.type)) {
                throw new Error(`object at is not a BeeUpdatedInGenesisBasket object`);
            }
            return BeeUpdatedInGenesisBasket.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeUpdatedInGenesisBasket.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeUpdatedInGenesisBasket object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeUpdatedInGenesisBasket(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeUpdatedInGenesisBasket object`);
        }
        return BeeUpdatedInGenesisBasket.fromSuiObjectData(res.data);
    }
}
exports.BeeUpdatedInGenesisBasket = BeeUpdatedInGenesisBasket;
BeeUpdatedInGenesisBasket.$typeName = `${PKG_V1}::dragon_trainer::BeeUpdatedInGenesisBasket`;
BeeUpdatedInGenesisBasket.$numTypeParams = 0;
BeeUpdatedInGenesisBasket.$isPhantom = [];
/* ============================== BeesAddedToGenesisBasket =============================== */
function isBeesAddedToGenesisBasket(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeesAddedToGenesisBasket`; }
class BeesAddedToGenesisBasket {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeesAddedToGenesisBasket.$typeName;
        this.$isPhantom = BeesAddedToGenesisBasket.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeesAddedToGenesisBasket.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        ;
        this.gene = fields.gene;
        ;
        this.img = fields.img;
    }
    static reified() { return { typeName: BeesAddedToGenesisBasket.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeesAddedToGenesisBasket.$typeName, ...[]), typeArgs: [], isPhantom: BeesAddedToGenesisBasket.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeesAddedToGenesisBasket.fromFields(fields), fromFieldsWithTypes: (item) => BeesAddedToGenesisBasket.fromFieldsWithTypes(item), fromBcs: (data) => BeesAddedToGenesisBasket.fromBcs(data), bcs: BeesAddedToGenesisBasket.bcs, fromJSONField: (field) => BeesAddedToGenesisBasket.fromJSONField(field), fromJSON: (json) => BeesAddedToGenesisBasket.fromJSON(json), fromSuiParsedData: (content) => BeesAddedToGenesisBasket.fromSuiParsedData(content), fromSuiObjectData: (content) => BeesAddedToGenesisBasket.fromSuiObjectData(content), fetch: async (client, id) => BeesAddedToGenesisBasket.fetch(client, id), new: (fields) => { return new BeesAddedToGenesisBasket([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeesAddedToGenesisBasket.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeesAddedToGenesisBasket.reified()); }
    static get p() { return BeesAddedToGenesisBasket.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeesAddedToGenesisBasket", {
            index: bcs_1.bcs.u64(), gene: bcs_1.bcs.u256(), img: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return BeesAddedToGenesisBasket.reified().new({ index: (0, reified_1.decodeFromFields)("u64", fields.index), gene: (0, reified_1.decodeFromFields)("u256", fields.gene), img: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.img) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeesAddedToGenesisBasket(item.type)) {
            throw new Error("not a BeesAddedToGenesisBasket type");
        }
        return BeesAddedToGenesisBasket.reified().new({ index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), gene: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.gene), img: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.img) });
    }
    static fromBcs(data) { return BeesAddedToGenesisBasket.fromFields(BeesAddedToGenesisBasket.bcs.parse(data)); }
    toJSONField() {
        return {
            index: this.index.toString(), gene: this.gene.toString(), img: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.img),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeesAddedToGenesisBasket.reified().new({ index: (0, reified_1.decodeFromJSONField)("u64", field.index), gene: (0, reified_1.decodeFromJSONField)("u256", field.gene), img: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.img) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeesAddedToGenesisBasket.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeesAddedToGenesisBasket.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeesAddedToGenesisBasket(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeesAddedToGenesisBasket object`);
    } return BeesAddedToGenesisBasket.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeesAddedToGenesisBasket(data.bcs.type)) {
                throw new Error(`object at is not a BeesAddedToGenesisBasket object`);
            }
            return BeesAddedToGenesisBasket.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeesAddedToGenesisBasket.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeesAddedToGenesisBasket object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeesAddedToGenesisBasket(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeesAddedToGenesisBasket object`);
        }
        return BeesAddedToGenesisBasket.fromSuiObjectData(res.data);
    }
}
exports.BeesAddedToGenesisBasket = BeesAddedToGenesisBasket;
BeesAddedToGenesisBasket.$typeName = `${PKG_V1}::dragon_trainer::BeesAddedToGenesisBasket`;
BeesAddedToGenesisBasket.$numTypeParams = 0;
BeesAddedToGenesisBasket.$isPhantom = [];
/* ============================== BeesManager =============================== */
function isBeesManager(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeesManager`; }
class BeesManager {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeesManager.$typeName;
        this.$isPhantom = BeesManager.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeesManager.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.configuration = fields.configuration;
        ;
        this.hiveTreasury = fields.hiveTreasury;
        ;
        this.honeyTreasury = fields.honeyTreasury;
        ;
        this.beesTracker = fields.beesTracker;
        ;
        this.beeTransfers = fields.beeTransfers;
        ;
        this.dragonEggsBasket = fields.dragonEggsBasket;
        ;
        this.beeHives = fields.beeHives;
        ;
        this.buidlersRoyalty = fields.buidlersRoyalty;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: BeesManager.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeesManager.$typeName, ...[]), typeArgs: [], isPhantom: BeesManager.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeesManager.fromFields(fields), fromFieldsWithTypes: (item) => BeesManager.fromFieldsWithTypes(item), fromBcs: (data) => BeesManager.fromBcs(data), bcs: BeesManager.bcs, fromJSONField: (field) => BeesManager.fromJSONField(field), fromJSON: (json) => BeesManager.fromJSON(json), fromSuiParsedData: (content) => BeesManager.fromSuiParsedData(content), fromSuiObjectData: (content) => BeesManager.fromSuiObjectData(content), fetch: async (client, id) => BeesManager.fetch(client, id), new: (fields) => { return new BeesManager([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeesManager.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeesManager.reified()); }
    static get p() { return BeesManager.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeesManager", {
            id: structs_6.UID.bcs, configuration: Configuration.bcs, hive_treasury: structs_4.Balance.bcs, honey_treasury: structs_4.Balance.bcs, bees_tracker: BeesTracker.bcs, bee_transfers: BeeTransfers.bcs, dragon_eggs_basket: structs_8.Table.bcs, bee_hives: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), buidlers_royalty: structs_4.Balance.bcs, module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeesManager.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), configuration: (0, reified_1.decodeFromFields)(Configuration.reified(), fields.configuration), hiveTreasury: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.hive_treasury), honeyTreasury: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.honey_treasury), beesTracker: (0, reified_1.decodeFromFields)(BeesTracker.reified(), fields.bees_tracker), beeTransfers: (0, reified_1.decodeFromFields)(BeeTransfers.reified(), fields.bee_transfers), dragonEggsBasket: (0, reified_1.decodeFromFields)(structs_8.Table.reified(reified.phantom("u64"), reified.phantom(DragonEggsBasket.reified())), fields.dragon_eggs_basket), beeHives: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(BeeHive.reified())), fields.bee_hives), buidlersRoyalty: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.buidlers_royalty), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeesManager(item.type)) {
            throw new Error("not a BeesManager type");
        }
        return BeesManager.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), configuration: (0, reified_1.decodeFromFieldsWithTypes)(Configuration.reified(), item.fields.configuration), hiveTreasury: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.hive_treasury), honeyTreasury: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.honey_treasury), beesTracker: (0, reified_1.decodeFromFieldsWithTypes)(BeesTracker.reified(), item.fields.bees_tracker), beeTransfers: (0, reified_1.decodeFromFieldsWithTypes)(BeeTransfers.reified(), item.fields.bee_transfers), dragonEggsBasket: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.Table.reified(reified.phantom("u64"), reified.phantom(DragonEggsBasket.reified())), item.fields.dragon_eggs_basket), beeHives: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(BeeHive.reified())), item.fields.bee_hives), buidlersRoyalty: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.buidlers_royalty), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return BeesManager.fromFields(BeesManager.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, configuration: this.configuration.toJSONField(), hiveTreasury: this.hiveTreasury.toJSONField(), honeyTreasury: this.honeyTreasury.toJSONField(), beesTracker: this.beesTracker.toJSONField(), beeTransfers: this.beeTransfers.toJSONField(), dragonEggsBasket: this.dragonEggsBasket.toJSONField(), beeHives: this.beeHives.toJSONField(), buidlersRoyalty: this.buidlersRoyalty.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeesManager.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), configuration: (0, reified_1.decodeFromJSONField)(Configuration.reified(), field.configuration), hiveTreasury: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.hiveTreasury), honeyTreasury: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.honeyTreasury), beesTracker: (0, reified_1.decodeFromJSONField)(BeesTracker.reified(), field.beesTracker), beeTransfers: (0, reified_1.decodeFromJSONField)(BeeTransfers.reified(), field.beeTransfers), dragonEggsBasket: (0, reified_1.decodeFromJSONField)(structs_8.Table.reified(reified.phantom("u64"), reified.phantom(DragonEggsBasket.reified())), field.dragonEggsBasket), beeHives: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(BeeHive.reified())), field.beeHives), buidlersRoyalty: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.buidlersRoyalty), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeesManager.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeesManager.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeesManager(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeesManager object`);
    } return BeesManager.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeesManager(data.bcs.type)) {
                throw new Error(`object at is not a BeesManager object`);
            }
            return BeesManager.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeesManager.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeesManager object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeesManager(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeesManager object`);
        }
        return BeesManager.fromSuiObjectData(res.data);
    }
}
exports.BeesManager = BeesManager;
BeesManager.$typeName = `${PKG_V1}::dragon_trainer::BeesManager`;
BeesManager.$numTypeParams = 0;
BeesManager.$isPhantom = [];
/* ============================== BeesTracker =============================== */
function isBeesTracker(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BeesTracker`; }
class BeesTracker {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeesTracker.$typeName;
        this.$isPhantom = BeesTracker.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeesTracker.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.totalEggsLaid = fields.totalEggsLaid;
        ;
        this.beesToOwnerMap = fields.beesToOwnerMap;
        ;
        this.queenBeesMap = fields.queenBeesMap;
    }
    static reified() { return { typeName: BeesTracker.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeesTracker.$typeName, ...[]), typeArgs: [], isPhantom: BeesTracker.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BeesTracker.fromFields(fields), fromFieldsWithTypes: (item) => BeesTracker.fromFieldsWithTypes(item), fromBcs: (data) => BeesTracker.fromBcs(data), bcs: BeesTracker.bcs, fromJSONField: (field) => BeesTracker.fromJSONField(field), fromJSON: (json) => BeesTracker.fromJSON(json), fromSuiParsedData: (content) => BeesTracker.fromSuiParsedData(content), fromSuiObjectData: (content) => BeesTracker.fromSuiObjectData(content), fetch: async (client, id) => BeesTracker.fetch(client, id), new: (fields) => { return new BeesTracker([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeesTracker.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeesTracker.reified()); }
    static get p() { return BeesTracker.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeesTracker", {
            total_eggs_laid: bcs_1.bcs.u64(), bees_to_owner_map: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), queen_bees_map: structs_5.LinkedTable.bcs(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return BeesTracker.reified().new({ totalEggsLaid: (0, reified_1.decodeFromFields)("u64", fields.total_eggs_laid), beesToOwnerMap: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), fields.bees_to_owner_map), queenBeesMap: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("bool")), fields.queen_bees_map) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeesTracker(item.type)) {
            throw new Error("not a BeesTracker type");
        }
        return BeesTracker.reified().new({ totalEggsLaid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_eggs_laid), beesToOwnerMap: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), item.fields.bees_to_owner_map), queenBeesMap: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("bool")), item.fields.queen_bees_map) });
    }
    static fromBcs(data) { return BeesTracker.fromFields(BeesTracker.bcs.parse(data)); }
    toJSONField() {
        return {
            totalEggsLaid: this.totalEggsLaid.toString(), beesToOwnerMap: this.beesToOwnerMap.toJSONField(), queenBeesMap: this.queenBeesMap.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeesTracker.reified().new({ totalEggsLaid: (0, reified_1.decodeFromJSONField)("u64", field.totalEggsLaid), beesToOwnerMap: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), field.beesToOwnerMap), queenBeesMap: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("bool")), field.queenBeesMap) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeesTracker.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeesTracker.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeesTracker(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeesTracker object`);
    } return BeesTracker.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeesTracker(data.bcs.type)) {
                throw new Error(`object at is not a BeesTracker object`);
            }
            return BeesTracker.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeesTracker.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeesTracker object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeesTracker(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeesTracker object`);
        }
        return BeesTracker.fromSuiObjectData(res.data);
    }
}
exports.BeesTracker = BeesTracker;
BeesTracker.$typeName = `${PKG_V1}::dragon_trainer::BeesTracker`;
BeesTracker.$numTypeParams = 0;
BeesTracker.$isPhantom = [];
/* ============================== Bid =============================== */
function isBid(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::Bid`; }
class Bid {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Bid.$typeName;
        this.$isPhantom = Bid.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Bid.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bidderTrainer = fields.bidderTrainer;
        ;
        this.balance = fields.balance;
        ;
        this.offerPrice = fields.offerPrice;
        ;
        this.expirationSec = fields.expirationSec;
        ;
        this.isValid = fields.isValid;
    }
    static reified() { return { typeName: Bid.$typeName, fullTypeName: (0, util_1.composeSuiType)(Bid.$typeName, ...[]), typeArgs: [], isPhantom: Bid.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Bid.fromFields(fields), fromFieldsWithTypes: (item) => Bid.fromFieldsWithTypes(item), fromBcs: (data) => Bid.fromBcs(data), bcs: Bid.bcs, fromJSONField: (field) => Bid.fromJSONField(field), fromJSON: (json) => Bid.fromJSON(json), fromSuiParsedData: (content) => Bid.fromSuiParsedData(content), fromSuiObjectData: (content) => Bid.fromSuiObjectData(content), fetch: async (client, id) => Bid.fetch(client, id), new: (fields) => { return new Bid([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Bid.reified(); }
    static phantom() { return (0, reified_1.phantom)(Bid.reified()); }
    static get p() { return Bid.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Bid", {
            bidder_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), balance: structs_4.Balance.bcs, offer_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64(), is_valid: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return Bid.reified().new({ bidderTrainer: (0, reified_1.decodeFromFields)("address", fields.bidder_trainer), balance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.balance), offerPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec), isValid: (0, reified_1.decodeFromFields)("bool", fields.is_valid) }); }
    static fromFieldsWithTypes(item) {
        if (!isBid(item.type)) {
            throw new Error("not a Bid type");
        }
        return Bid.reified().new({ bidderTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_trainer), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.balance), offerPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec), isValid: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_valid) });
    }
    static fromBcs(data) { return Bid.fromFields(Bid.bcs.parse(data)); }
    toJSONField() {
        return {
            bidderTrainer: this.bidderTrainer, balance: this.balance.toJSONField(), offerPrice: this.offerPrice.toString(), expirationSec: this.expirationSec.toString(), isValid: this.isValid,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Bid.reified().new({ bidderTrainer: (0, reified_1.decodeFromJSONField)("address", field.bidderTrainer), balance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.balance), offerPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec), isValid: (0, reified_1.decodeFromJSONField)("bool", field.isValid) }); }
    static fromJSON(json) {
        if (json.$typeName !== Bid.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Bid.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBid(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Bid object`);
    } return Bid.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBid(data.bcs.type)) {
                throw new Error(`object at is not a Bid object`);
            }
            return Bid.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Bid.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Bid object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBid(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Bid object`);
        }
        return Bid.fromSuiObjectData(res.data);
    }
}
exports.Bid = Bid;
Bid.$typeName = `${PKG_V1}::dragon_trainer::Bid`;
Bid.$numTypeParams = 0;
Bid.$isPhantom = [];
/* ============================== BidCanceled =============================== */
function isBidCanceled(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BidCanceled`; }
class BidCanceled {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidCanceled.$typeName;
        this.$isPhantom = BidCanceled.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidCanceled.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderTrainer = fields.bidderTrainer;
        ;
        this.refundSui = fields.refundSui;
    }
    static reified() { return { typeName: BidCanceled.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidCanceled.$typeName, ...[]), typeArgs: [], isPhantom: BidCanceled.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidCanceled.fromFields(fields), fromFieldsWithTypes: (item) => BidCanceled.fromFieldsWithTypes(item), fromBcs: (data) => BidCanceled.fromBcs(data), bcs: BidCanceled.bcs, fromJSONField: (field) => BidCanceled.fromJSONField(field), fromJSON: (json) => BidCanceled.fromJSON(json), fromSuiParsedData: (content) => BidCanceled.fromSuiParsedData(content), fromSuiObjectData: (content) => BidCanceled.fromSuiObjectData(content), fetch: async (client, id) => BidCanceled.fetch(client, id), new: (fields) => { return new BidCanceled([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidCanceled.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidCanceled.reified()); }
    static get p() { return BidCanceled.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidCanceled", {
            version: bcs_1.bcs.u64(), bidder_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), refund_sui: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidCanceled.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), bidderTrainer: (0, reified_1.decodeFromFields)("address", fields.bidder_trainer), refundSui: (0, reified_1.decodeFromFields)("u64", fields.refund_sui) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidCanceled(item.type)) {
            throw new Error("not a BidCanceled type");
        }
        return BidCanceled.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidderTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_trainer), refundSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.refund_sui) });
    }
    static fromBcs(data) { return BidCanceled.fromFields(BidCanceled.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), bidderTrainer: this.bidderTrainer, refundSui: this.refundSui.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidCanceled.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidderTrainer: (0, reified_1.decodeFromJSONField)("address", field.bidderTrainer), refundSui: (0, reified_1.decodeFromJSONField)("u64", field.refundSui) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidCanceled(data.bcs.type)) {
                throw new Error(`object at is not a BidCanceled object`);
            }
            return BidCanceled.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidCanceled.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidCanceled object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidCanceled(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidCanceled object`);
        }
        return BidCanceled.fromSuiObjectData(res.data);
    }
}
exports.BidCanceled = BidCanceled;
BidCanceled.$typeName = `${PKG_V1}::dragon_trainer::BidCanceled`;
BidCanceled.$numTypeParams = 0;
BidCanceled.$isPhantom = [];
/* ============================== BidDestroyed =============================== */
function isBidDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BidDestroyed`; }
class BidDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidDestroyed.$typeName;
        this.$isPhantom = BidDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.beeVersion = fields.beeVersion;
        ;
        this.bidderTrainer = fields.bidderTrainer;
    }
    static reified() { return { typeName: BidDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: BidDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => BidDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => BidDestroyed.fromBcs(data), bcs: BidDestroyed.bcs, fromJSONField: (field) => BidDestroyed.fromJSONField(field), fromJSON: (json) => BidDestroyed.fromJSON(json), fromSuiParsedData: (content) => BidDestroyed.fromSuiParsedData(content), fromSuiObjectData: (content) => BidDestroyed.fromSuiObjectData(content), fetch: async (client, id) => BidDestroyed.fetch(client, id), new: (fields) => { return new BidDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidDestroyed.reified()); }
    static get p() { return BidDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidDestroyed", {
            bee_version: bcs_1.bcs.u64(), bidder_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BidDestroyed.reified().new({ beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), bidderTrainer: (0, reified_1.decodeFromFields)("address", fields.bidder_trainer) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidDestroyed(item.type)) {
            throw new Error("not a BidDestroyed type");
        }
        return BidDestroyed.reified().new({ beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), bidderTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_trainer) });
    }
    static fromBcs(data) { return BidDestroyed.fromFields(BidDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            beeVersion: this.beeVersion.toString(), bidderTrainer: this.bidderTrainer,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidDestroyed.reified().new({ beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), bidderTrainer: (0, reified_1.decodeFromJSONField)("address", field.bidderTrainer) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidDestroyed(data.bcs.type)) {
                throw new Error(`object at is not a BidDestroyed object`);
            }
            return BidDestroyed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidDestroyed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidDestroyed object`);
        }
        return BidDestroyed.fromSuiObjectData(res.data);
    }
}
exports.BidDestroyed = BidDestroyed;
BidDestroyed.$typeName = `${PKG_V1}::dragon_trainer::BidDestroyed`;
BidDestroyed.$numTypeParams = 0;
BidDestroyed.$isPhantom = [];
/* ============================== BidExpired =============================== */
function isBidExpired(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BidExpired`; }
class BidExpired {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidExpired.$typeName;
        this.$isPhantom = BidExpired.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidExpired.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderTrainer = fields.bidderTrainer;
        ;
        this.refundSui = fields.refundSui;
    }
    static reified() { return { typeName: BidExpired.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidExpired.$typeName, ...[]), typeArgs: [], isPhantom: BidExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidExpired.fromFields(fields), fromFieldsWithTypes: (item) => BidExpired.fromFieldsWithTypes(item), fromBcs: (data) => BidExpired.fromBcs(data), bcs: BidExpired.bcs, fromJSONField: (field) => BidExpired.fromJSONField(field), fromJSON: (json) => BidExpired.fromJSON(json), fromSuiParsedData: (content) => BidExpired.fromSuiParsedData(content), fromSuiObjectData: (content) => BidExpired.fromSuiObjectData(content), fetch: async (client, id) => BidExpired.fetch(client, id), new: (fields) => { return new BidExpired([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidExpired.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidExpired.reified()); }
    static get p() { return BidExpired.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidExpired", {
            version: bcs_1.bcs.u64(), bidder_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), refund_sui: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidExpired.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), bidderTrainer: (0, reified_1.decodeFromFields)("address", fields.bidder_trainer), refundSui: (0, reified_1.decodeFromFields)("u64", fields.refund_sui) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidExpired(item.type)) {
            throw new Error("not a BidExpired type");
        }
        return BidExpired.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidderTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_trainer), refundSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.refund_sui) });
    }
    static fromBcs(data) { return BidExpired.fromFields(BidExpired.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), bidderTrainer: this.bidderTrainer, refundSui: this.refundSui.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidExpired.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidderTrainer: (0, reified_1.decodeFromJSONField)("address", field.bidderTrainer), refundSui: (0, reified_1.decodeFromJSONField)("u64", field.refundSui) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidExpired(data.bcs.type)) {
                throw new Error(`object at is not a BidExpired object`);
            }
            return BidExpired.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidExpired.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidExpired object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidExpired(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidExpired object`);
        }
        return BidExpired.fromSuiObjectData(res.data);
    }
}
exports.BidExpired = BidExpired;
BidExpired.$typeName = `${PKG_V1}::dragon_trainer::BidExpired`;
BidExpired.$numTypeParams = 0;
BidExpired.$isPhantom = [];
/* ============================== BidMarkedInvalid =============================== */
function isBidMarkedInvalid(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BidMarkedInvalid`; }
class BidMarkedInvalid {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidMarkedInvalid.$typeName;
        this.$isPhantom = BidMarkedInvalid.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidMarkedInvalid.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.bidderTrainer = fields.bidderTrainer;
    }
    static reified() { return { typeName: BidMarkedInvalid.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidMarkedInvalid.$typeName, ...[]), typeArgs: [], isPhantom: BidMarkedInvalid.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidMarkedInvalid.fromFields(fields), fromFieldsWithTypes: (item) => BidMarkedInvalid.fromFieldsWithTypes(item), fromBcs: (data) => BidMarkedInvalid.fromBcs(data), bcs: BidMarkedInvalid.bcs, fromJSONField: (field) => BidMarkedInvalid.fromJSONField(field), fromJSON: (json) => BidMarkedInvalid.fromJSON(json), fromSuiParsedData: (content) => BidMarkedInvalid.fromSuiParsedData(content), fromSuiObjectData: (content) => BidMarkedInvalid.fromSuiObjectData(content), fetch: async (client, id) => BidMarkedInvalid.fetch(client, id), new: (fields) => { return new BidMarkedInvalid([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidMarkedInvalid.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidMarkedInvalid.reified()); }
    static get p() { return BidMarkedInvalid.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidMarkedInvalid", {
            version: bcs_1.bcs.u64(), bidder_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BidMarkedInvalid.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), bidderTrainer: (0, reified_1.decodeFromFields)("address", fields.bidder_trainer) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidMarkedInvalid(item.type)) {
            throw new Error("not a BidMarkedInvalid type");
        }
        return BidMarkedInvalid.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidderTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_trainer) });
    }
    static fromBcs(data) { return BidMarkedInvalid.fromFields(BidMarkedInvalid.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), bidderTrainer: this.bidderTrainer,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidMarkedInvalid.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidderTrainer: (0, reified_1.decodeFromJSONField)("address", field.bidderTrainer) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidMarkedInvalid(data.bcs.type)) {
                throw new Error(`object at is not a BidMarkedInvalid object`);
            }
            return BidMarkedInvalid.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidMarkedInvalid.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidMarkedInvalid object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidMarkedInvalid(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidMarkedInvalid object`);
        }
        return BidMarkedInvalid.fromSuiObjectData(res.data);
    }
}
exports.BidMarkedInvalid = BidMarkedInvalid;
BidMarkedInvalid.$typeName = `${PKG_V1}::dragon_trainer::BidMarkedInvalid`;
BidMarkedInvalid.$numTypeParams = 0;
BidMarkedInvalid.$isPhantom = [];
/* ============================== BidPlaced =============================== */
function isBidPlaced(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BidPlaced`; }
class BidPlaced {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidPlaced.$typeName;
        this.$isPhantom = BidPlaced.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidPlaced.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bidderTrainer = fields.bidderTrainer;
        ;
        this.username = fields.username;
        ;
        this.version = fields.version;
        ;
        this.offerPrice = fields.offerPrice;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: BidPlaced.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidPlaced.$typeName, ...[]), typeArgs: [], isPhantom: BidPlaced.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidPlaced.fromFields(fields), fromFieldsWithTypes: (item) => BidPlaced.fromFieldsWithTypes(item), fromBcs: (data) => BidPlaced.fromBcs(data), bcs: BidPlaced.bcs, fromJSONField: (field) => BidPlaced.fromJSONField(field), fromJSON: (json) => BidPlaced.fromJSON(json), fromSuiParsedData: (content) => BidPlaced.fromSuiParsedData(content), fromSuiObjectData: (content) => BidPlaced.fromSuiObjectData(content), fetch: async (client, id) => BidPlaced.fetch(client, id), new: (fields) => { return new BidPlaced([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidPlaced.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidPlaced.reified()); }
    static get p() { return BidPlaced.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidPlaced", {
            bidder_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, version: bcs_1.bcs.u64(), offer_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidPlaced.reified().new({ bidderTrainer: (0, reified_1.decodeFromFields)("address", fields.bidder_trainer), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), version: (0, reified_1.decodeFromFields)("u64", fields.version), offerPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidPlaced(item.type)) {
            throw new Error("not a BidPlaced type");
        }
        return BidPlaced.reified().new({ bidderTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_trainer), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), offerPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return BidPlaced.fromFields(BidPlaced.bcs.parse(data)); }
    toJSONField() {
        return {
            bidderTrainer: this.bidderTrainer, username: this.username, version: this.version.toString(), offerPrice: this.offerPrice.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidPlaced.reified().new({ bidderTrainer: (0, reified_1.decodeFromJSONField)("address", field.bidderTrainer), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), version: (0, reified_1.decodeFromJSONField)("u64", field.version), offerPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidPlaced(data.bcs.type)) {
                throw new Error(`object at is not a BidPlaced object`);
            }
            return BidPlaced.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidPlaced.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidPlaced object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidPlaced(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidPlaced object`);
        }
        return BidPlaced.fromSuiObjectData(res.data);
    }
}
exports.BidPlaced = BidPlaced;
BidPlaced.$typeName = `${PKG_V1}::dragon_trainer::BidPlaced`;
BidPlaced.$numTypeParams = 0;
BidPlaced.$isPhantom = [];
/* ============================== BidRecord =============================== */
function isBidRecord(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BidRecord`; }
class BidRecord {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidRecord.$typeName;
        this.$isPhantom = BidRecord.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.offerPrice = fields.offerPrice;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: BidRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidRecord.$typeName, ...[]), typeArgs: [], isPhantom: BidRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidRecord.fromFields(fields), fromFieldsWithTypes: (item) => BidRecord.fromFieldsWithTypes(item), fromBcs: (data) => BidRecord.fromBcs(data), bcs: BidRecord.bcs, fromJSONField: (field) => BidRecord.fromJSONField(field), fromJSON: (json) => BidRecord.fromJSON(json), fromSuiParsedData: (content) => BidRecord.fromSuiParsedData(content), fromSuiObjectData: (content) => BidRecord.fromSuiObjectData(content), fetch: async (client, id) => BidRecord.fetch(client, id), new: (fields) => { return new BidRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidRecord.reified()); }
    static get p() { return BidRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidRecord", {
            version: bcs_1.bcs.u64(), offer_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidRecord.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), offerPrice: (0, reified_1.decodeFromFields)("u64", fields.offer_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidRecord(item.type)) {
            throw new Error("not a BidRecord type");
        }
        return BidRecord.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), offerPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.offer_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return BidRecord.fromFields(BidRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), offerPrice: this.offerPrice.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidRecord.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), offerPrice: (0, reified_1.decodeFromJSONField)("u64", field.offerPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidRecord(data.bcs.type)) {
                throw new Error(`object at is not a BidRecord object`);
            }
            return BidRecord.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidRecord.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidRecord object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidRecord(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidRecord object`);
        }
        return BidRecord.fromSuiObjectData(res.data);
    }
}
exports.BidRecord = BidRecord;
BidRecord.$typeName = `${PKG_V1}::dragon_trainer::BidRecord`;
BidRecord.$numTypeParams = 0;
BidRecord.$isPhantom = [];
/* ============================== BirthCertificate =============================== */
function isBirthCertificate(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BirthCertificate`; }
class BirthCertificate {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BirthCertificate.$typeName;
        this.$isPhantom = BirthCertificate.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BirthCertificate.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.generation = fields.generation;
        ;
        this.birthTime = fields.birthTime;
        ;
        this.birtherTrainer = fields.birtherTrainer;
        ;
        this.queenId = fields.queenId;
        ;
        this.stingerId = fields.stingerId;
    }
    static reified() { return { typeName: BirthCertificate.$typeName, fullTypeName: (0, util_1.composeSuiType)(BirthCertificate.$typeName, ...[]), typeArgs: [], isPhantom: BirthCertificate.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BirthCertificate.fromFields(fields), fromFieldsWithTypes: (item) => BirthCertificate.fromFieldsWithTypes(item), fromBcs: (data) => BirthCertificate.fromBcs(data), bcs: BirthCertificate.bcs, fromJSONField: (field) => BirthCertificate.fromJSONField(field), fromJSON: (json) => BirthCertificate.fromJSON(json), fromSuiParsedData: (content) => BirthCertificate.fromSuiParsedData(content), fromSuiObjectData: (content) => BirthCertificate.fromSuiObjectData(content), fetch: async (client, id) => BirthCertificate.fetch(client, id), new: (fields) => { return new BirthCertificate([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BirthCertificate.reified(); }
    static phantom() { return (0, reified_1.phantom)(BirthCertificate.reified()); }
    static get p() { return BirthCertificate.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BirthCertificate", {
            generation: bcs_1.bcs.u64(), birth_time: bcs_1.bcs.u64(), birther_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), queenId: structs_2.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), stingerId: structs_2.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }))
        });
    }
    ;
    static fromFields(fields) { return BirthCertificate.reified().new({ generation: (0, reified_1.decodeFromFields)("u64", fields.generation), birthTime: (0, reified_1.decodeFromFields)("u64", fields.birth_time), birtherTrainer: (0, reified_1.decodeFromFields)("address", fields.birther_trainer), queenId: (0, reified_1.decodeFromFields)(structs_2.Option.reified("address"), fields.queenId), stingerId: (0, reified_1.decodeFromFields)(structs_2.Option.reified("address"), fields.stingerId) }); }
    static fromFieldsWithTypes(item) {
        if (!isBirthCertificate(item.type)) {
            throw new Error("not a BirthCertificate type");
        }
        return BirthCertificate.reified().new({ generation: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.generation), birthTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.birth_time), birtherTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.birther_trainer), queenId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified("address"), item.fields.queenId), stingerId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified("address"), item.fields.stingerId) });
    }
    static fromBcs(data) { return BirthCertificate.fromFields(BirthCertificate.bcs.parse(data)); }
    toJSONField() {
        return {
            generation: this.generation.toString(), birthTime: this.birthTime.toString(), birtherTrainer: this.birtherTrainer, queenId: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<address>`, this.queenId), stingerId: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<address>`, this.stingerId),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BirthCertificate.reified().new({ generation: (0, reified_1.decodeFromJSONField)("u64", field.generation), birthTime: (0, reified_1.decodeFromJSONField)("u64", field.birthTime), birtherTrainer: (0, reified_1.decodeFromJSONField)("address", field.birtherTrainer), queenId: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified("address"), field.queenId), stingerId: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified("address"), field.stingerId) }); }
    static fromJSON(json) {
        if (json.$typeName !== BirthCertificate.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BirthCertificate.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBirthCertificate(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BirthCertificate object`);
    } return BirthCertificate.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBirthCertificate(data.bcs.type)) {
                throw new Error(`object at is not a BirthCertificate object`);
            }
            return BirthCertificate.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BirthCertificate.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BirthCertificate object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBirthCertificate(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BirthCertificate object`);
        }
        return BirthCertificate.fromSuiObjectData(res.data);
    }
}
exports.BirthCertificate = BirthCertificate;
BirthCertificate.$typeName = `${PKG_V1}::dragon_trainer::BirthCertificate`;
BirthCertificate.$numTypeParams = 0;
BirthCertificate.$isPhantom = [];
/* ============================== BreedingRequestProcessed =============================== */
function isBreedingRequestProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BreedingRequestProcessed`; }
class BreedingRequestProcessed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BreedingRequestProcessed.$typeName;
        this.$isPhantom = BreedingRequestProcessed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BreedingRequestProcessed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.queenVersion = fields.queenVersion;
        ;
        this.stingerIndex = fields.stingerIndex;
        ;
        this.img = fields.img;
    }
    static reified() { return { typeName: BreedingRequestProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(BreedingRequestProcessed.$typeName, ...[]), typeArgs: [], isPhantom: BreedingRequestProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BreedingRequestProcessed.fromFields(fields), fromFieldsWithTypes: (item) => BreedingRequestProcessed.fromFieldsWithTypes(item), fromBcs: (data) => BreedingRequestProcessed.fromBcs(data), bcs: BreedingRequestProcessed.bcs, fromJSONField: (field) => BreedingRequestProcessed.fromJSONField(field), fromJSON: (json) => BreedingRequestProcessed.fromJSON(json), fromSuiParsedData: (content) => BreedingRequestProcessed.fromSuiParsedData(content), fromSuiObjectData: (content) => BreedingRequestProcessed.fromSuiObjectData(content), fetch: async (client, id) => BreedingRequestProcessed.fetch(client, id), new: (fields) => { return new BreedingRequestProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BreedingRequestProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(BreedingRequestProcessed.reified()); }
    static get p() { return BreedingRequestProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BreedingRequestProcessed", {
            queen_version: bcs_1.bcs.u64(), stinger_index: bcs_1.bcs.u64(), img: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return BreedingRequestProcessed.reified().new({ queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), stingerIndex: (0, reified_1.decodeFromFields)("u64", fields.stinger_index), img: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.img) }); }
    static fromFieldsWithTypes(item) {
        if (!isBreedingRequestProcessed(item.type)) {
            throw new Error("not a BreedingRequestProcessed type");
        }
        return BreedingRequestProcessed.reified().new({ queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), stingerIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stinger_index), img: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.img) });
    }
    static fromBcs(data) { return BreedingRequestProcessed.fromFields(BreedingRequestProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            queenVersion: this.queenVersion.toString(), stingerIndex: this.stingerIndex.toString(), img: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.img),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BreedingRequestProcessed.reified().new({ queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), stingerIndex: (0, reified_1.decodeFromJSONField)("u64", field.stingerIndex), img: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.img) }); }
    static fromJSON(json) {
        if (json.$typeName !== BreedingRequestProcessed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BreedingRequestProcessed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBreedingRequestProcessed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BreedingRequestProcessed object`);
    } return BreedingRequestProcessed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBreedingRequestProcessed(data.bcs.type)) {
                throw new Error(`object at is not a BreedingRequestProcessed object`);
            }
            return BreedingRequestProcessed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BreedingRequestProcessed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BreedingRequestProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBreedingRequestProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BreedingRequestProcessed object`);
        }
        return BreedingRequestProcessed.fromSuiObjectData(res.data);
    }
}
exports.BreedingRequestProcessed = BreedingRequestProcessed;
BreedingRequestProcessed.$typeName = `${PKG_V1}::dragon_trainer::BreedingRequestProcessed`;
BreedingRequestProcessed.$numTypeParams = 0;
BreedingRequestProcessed.$isPhantom = [];
/* ============================== BreedingRequestUnprocessed =============================== */
function isBreedingRequestUnprocessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BreedingRequestUnprocessed`; }
class BreedingRequestUnprocessed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BreedingRequestUnprocessed.$typeName;
        this.$isPhantom = BreedingRequestUnprocessed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BreedingRequestUnprocessed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.queenVersion = fields.queenVersion;
        ;
        this.stingerIndex = fields.stingerIndex;
    }
    static reified() { return { typeName: BreedingRequestUnprocessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(BreedingRequestUnprocessed.$typeName, ...[]), typeArgs: [], isPhantom: BreedingRequestUnprocessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BreedingRequestUnprocessed.fromFields(fields), fromFieldsWithTypes: (item) => BreedingRequestUnprocessed.fromFieldsWithTypes(item), fromBcs: (data) => BreedingRequestUnprocessed.fromBcs(data), bcs: BreedingRequestUnprocessed.bcs, fromJSONField: (field) => BreedingRequestUnprocessed.fromJSONField(field), fromJSON: (json) => BreedingRequestUnprocessed.fromJSON(json), fromSuiParsedData: (content) => BreedingRequestUnprocessed.fromSuiParsedData(content), fromSuiObjectData: (content) => BreedingRequestUnprocessed.fromSuiObjectData(content), fetch: async (client, id) => BreedingRequestUnprocessed.fetch(client, id), new: (fields) => { return new BreedingRequestUnprocessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BreedingRequestUnprocessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(BreedingRequestUnprocessed.reified()); }
    static get p() { return BreedingRequestUnprocessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BreedingRequestUnprocessed", {
            queen_version: bcs_1.bcs.u64(), stinger_index: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BreedingRequestUnprocessed.reified().new({ queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), stingerIndex: (0, reified_1.decodeFromFields)("u64", fields.stinger_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isBreedingRequestUnprocessed(item.type)) {
            throw new Error("not a BreedingRequestUnprocessed type");
        }
        return BreedingRequestUnprocessed.reified().new({ queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), stingerIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stinger_index) });
    }
    static fromBcs(data) { return BreedingRequestUnprocessed.fromFields(BreedingRequestUnprocessed.bcs.parse(data)); }
    toJSONField() {
        return {
            queenVersion: this.queenVersion.toString(), stingerIndex: this.stingerIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BreedingRequestUnprocessed.reified().new({ queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), stingerIndex: (0, reified_1.decodeFromJSONField)("u64", field.stingerIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== BreedingRequestUnprocessed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BreedingRequestUnprocessed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBreedingRequestUnprocessed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BreedingRequestUnprocessed object`);
    } return BreedingRequestUnprocessed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBreedingRequestUnprocessed(data.bcs.type)) {
                throw new Error(`object at is not a BreedingRequestUnprocessed object`);
            }
            return BreedingRequestUnprocessed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BreedingRequestUnprocessed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BreedingRequestUnprocessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBreedingRequestUnprocessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BreedingRequestUnprocessed object`);
        }
        return BreedingRequestUnprocessed.fromSuiObjectData(res.data);
    }
}
exports.BreedingRequestUnprocessed = BreedingRequestUnprocessed;
BreedingRequestUnprocessed.$typeName = `${PKG_V1}::dragon_trainer::BreedingRequestUnprocessed`;
BreedingRequestUnprocessed.$numTypeParams = 0;
BreedingRequestUnprocessed.$isPhantom = [];
/* ============================== BreedingRoyalty =============================== */
function isBreedingRoyalty(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BreedingRoyalty`; }
class BreedingRoyalty {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BreedingRoyalty.$typeName;
        this.$isPhantom = BreedingRoyalty.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BreedingRoyalty.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.platformFeesPct = fields.platformFeesPct;
        ;
        this.govYieldPct = fields.govYieldPct;
        ;
        this.treasuryPct = fields.treasuryPct;
    }
    static reified() { return { typeName: BreedingRoyalty.$typeName, fullTypeName: (0, util_1.composeSuiType)(BreedingRoyalty.$typeName, ...[]), typeArgs: [], isPhantom: BreedingRoyalty.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BreedingRoyalty.fromFields(fields), fromFieldsWithTypes: (item) => BreedingRoyalty.fromFieldsWithTypes(item), fromBcs: (data) => BreedingRoyalty.fromBcs(data), bcs: BreedingRoyalty.bcs, fromJSONField: (field) => BreedingRoyalty.fromJSONField(field), fromJSON: (json) => BreedingRoyalty.fromJSON(json), fromSuiParsedData: (content) => BreedingRoyalty.fromSuiParsedData(content), fromSuiObjectData: (content) => BreedingRoyalty.fromSuiObjectData(content), fetch: async (client, id) => BreedingRoyalty.fetch(client, id), new: (fields) => { return new BreedingRoyalty([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BreedingRoyalty.reified(); }
    static phantom() { return (0, reified_1.phantom)(BreedingRoyalty.reified()); }
    static get p() { return BreedingRoyalty.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BreedingRoyalty", {
            platform_fees_pct: bcs_1.bcs.u64(), gov_yield_pct: bcs_1.bcs.u64(), treasury_pct: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BreedingRoyalty.reified().new({ platformFeesPct: (0, reified_1.decodeFromFields)("u64", fields.platform_fees_pct), govYieldPct: (0, reified_1.decodeFromFields)("u64", fields.gov_yield_pct), treasuryPct: (0, reified_1.decodeFromFields)("u64", fields.treasury_pct) }); }
    static fromFieldsWithTypes(item) {
        if (!isBreedingRoyalty(item.type)) {
            throw new Error("not a BreedingRoyalty type");
        }
        return BreedingRoyalty.reified().new({ platformFeesPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.platform_fees_pct), govYieldPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gov_yield_pct), treasuryPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_pct) });
    }
    static fromBcs(data) { return BreedingRoyalty.fromFields(BreedingRoyalty.bcs.parse(data)); }
    toJSONField() {
        return {
            platformFeesPct: this.platformFeesPct.toString(), govYieldPct: this.govYieldPct.toString(), treasuryPct: this.treasuryPct.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BreedingRoyalty.reified().new({ platformFeesPct: (0, reified_1.decodeFromJSONField)("u64", field.platformFeesPct), govYieldPct: (0, reified_1.decodeFromJSONField)("u64", field.govYieldPct), treasuryPct: (0, reified_1.decodeFromJSONField)("u64", field.treasuryPct) }); }
    static fromJSON(json) {
        if (json.$typeName !== BreedingRoyalty.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BreedingRoyalty.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBreedingRoyalty(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BreedingRoyalty object`);
    } return BreedingRoyalty.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBreedingRoyalty(data.bcs.type)) {
                throw new Error(`object at is not a BreedingRoyalty object`);
            }
            return BreedingRoyalty.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BreedingRoyalty.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BreedingRoyalty object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBreedingRoyalty(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BreedingRoyalty object`);
        }
        return BreedingRoyalty.fromSuiObjectData(res.data);
    }
}
exports.BreedingRoyalty = BreedingRoyalty;
BreedingRoyalty.$typeName = `${PKG_V1}::dragon_trainer::BreedingRoyalty`;
BreedingRoyalty.$numTypeParams = 0;
BreedingRoyalty.$isPhantom = [];
/* ============================== BuidlersYieldHarvested =============================== */
function isBuidlersYieldHarvested(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::BuidlersYieldHarvested`; }
class BuidlersYieldHarvested {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BuidlersYieldHarvested.$typeName;
        this.$isPhantom = BuidlersYieldHarvested.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BuidlersYieldHarvested.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.suiYield = fields.suiYield;
        ;
        this.receiver = fields.receiver;
    }
    static reified() { return { typeName: BuidlersYieldHarvested.$typeName, fullTypeName: (0, util_1.composeSuiType)(BuidlersYieldHarvested.$typeName, ...[]), typeArgs: [], isPhantom: BuidlersYieldHarvested.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BuidlersYieldHarvested.fromFields(fields), fromFieldsWithTypes: (item) => BuidlersYieldHarvested.fromFieldsWithTypes(item), fromBcs: (data) => BuidlersYieldHarvested.fromBcs(data), bcs: BuidlersYieldHarvested.bcs, fromJSONField: (field) => BuidlersYieldHarvested.fromJSONField(field), fromJSON: (json) => BuidlersYieldHarvested.fromJSON(json), fromSuiParsedData: (content) => BuidlersYieldHarvested.fromSuiParsedData(content), fromSuiObjectData: (content) => BuidlersYieldHarvested.fromSuiObjectData(content), fetch: async (client, id) => BuidlersYieldHarvested.fetch(client, id), new: (fields) => { return new BuidlersYieldHarvested([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BuidlersYieldHarvested.reified(); }
    static phantom() { return (0, reified_1.phantom)(BuidlersYieldHarvested.reified()); }
    static get p() { return BuidlersYieldHarvested.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BuidlersYieldHarvested", {
            sui_yield: bcs_1.bcs.u64(), receiver: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return BuidlersYieldHarvested.reified().new({ suiYield: (0, reified_1.decodeFromFields)("u64", fields.sui_yield), receiver: (0, reified_1.decodeFromFields)("address", fields.receiver) }); }
    static fromFieldsWithTypes(item) {
        if (!isBuidlersYieldHarvested(item.type)) {
            throw new Error("not a BuidlersYieldHarvested type");
        }
        return BuidlersYieldHarvested.reified().new({ suiYield: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_yield), receiver: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.receiver) });
    }
    static fromBcs(data) { return BuidlersYieldHarvested.fromFields(BuidlersYieldHarvested.bcs.parse(data)); }
    toJSONField() {
        return {
            suiYield: this.suiYield.toString(), receiver: this.receiver,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BuidlersYieldHarvested.reified().new({ suiYield: (0, reified_1.decodeFromJSONField)("u64", field.suiYield), receiver: (0, reified_1.decodeFromJSONField)("address", field.receiver) }); }
    static fromJSON(json) {
        if (json.$typeName !== BuidlersYieldHarvested.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BuidlersYieldHarvested.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBuidlersYieldHarvested(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BuidlersYieldHarvested object`);
    } return BuidlersYieldHarvested.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBuidlersYieldHarvested(data.bcs.type)) {
                throw new Error(`object at is not a BuidlersYieldHarvested object`);
            }
            return BuidlersYieldHarvested.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BuidlersYieldHarvested.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BuidlersYieldHarvested object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBuidlersYieldHarvested(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BuidlersYieldHarvested object`);
        }
        return BuidlersYieldHarvested.fromSuiObjectData(res.data);
    }
}
exports.BuidlersYieldHarvested = BuidlersYieldHarvested;
BuidlersYieldHarvested.$typeName = `${PKG_V1}::dragon_trainer::BuidlersYieldHarvested`;
BuidlersYieldHarvested.$numTypeParams = 0;
BuidlersYieldHarvested.$isPhantom = [];
/* ============================== CapabilityAdded =============================== */
function isCapabilityAdded(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::CapabilityAdded`; }
class CapabilityAdded {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = CapabilityAdded.$typeName;
        this.$isPhantom = CapabilityAdded.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(CapabilityAdded.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.slot = fields.slot;
        ;
        this.capabilityType = fields.capabilityType;
        ;
        this.healthImpactPct = fields.healthImpactPct;
        ;
        this.energyCostPct = fields.energyCostPct;
        ;
        this.attempts = fields.attempts;
        ;
        this.cooldown = fields.cooldown;
        ;
        this.nextUseTs = fields.nextUseTs;
        ;
        this.baseAttempts = fields.baseAttempts;
    }
    static reified() { return { typeName: CapabilityAdded.$typeName, fullTypeName: (0, util_1.composeSuiType)(CapabilityAdded.$typeName, ...[]), typeArgs: [], isPhantom: CapabilityAdded.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => CapabilityAdded.fromFields(fields), fromFieldsWithTypes: (item) => CapabilityAdded.fromFieldsWithTypes(item), fromBcs: (data) => CapabilityAdded.fromBcs(data), bcs: CapabilityAdded.bcs, fromJSONField: (field) => CapabilityAdded.fromJSONField(field), fromJSON: (json) => CapabilityAdded.fromJSON(json), fromSuiParsedData: (content) => CapabilityAdded.fromSuiParsedData(content), fromSuiObjectData: (content) => CapabilityAdded.fromSuiObjectData(content), fetch: async (client, id) => CapabilityAdded.fetch(client, id), new: (fields) => { return new CapabilityAdded([], fields); }, kind: "StructClassReified", }; }
    static get r() { return CapabilityAdded.reified(); }
    static phantom() { return (0, reified_1.phantom)(CapabilityAdded.reified()); }
    static get p() { return CapabilityAdded.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("CapabilityAdded", {
            version: bcs_1.bcs.u64(), slot: bcs_1.bcs.u64(), capability_type: bcs_1.bcs.u8(), health_impact_pct: bcs_1.bcs.u64(), energy_cost_pct: bcs_1.bcs.u64(), attempts: bcs_1.bcs.u64(), cooldown: bcs_1.bcs.u64(), next_use_ts: bcs_1.bcs.u64(), base_attempts: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return CapabilityAdded.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), slot: (0, reified_1.decodeFromFields)("u64", fields.slot), capabilityType: (0, reified_1.decodeFromFields)("u8", fields.capability_type), healthImpactPct: (0, reified_1.decodeFromFields)("u64", fields.health_impact_pct), energyCostPct: (0, reified_1.decodeFromFields)("u64", fields.energy_cost_pct), attempts: (0, reified_1.decodeFromFields)("u64", fields.attempts), cooldown: (0, reified_1.decodeFromFields)("u64", fields.cooldown), nextUseTs: (0, reified_1.decodeFromFields)("u64", fields.next_use_ts), baseAttempts: (0, reified_1.decodeFromFields)("u64", fields.base_attempts) }); }
    static fromFieldsWithTypes(item) {
        if (!isCapabilityAdded(item.type)) {
            throw new Error("not a CapabilityAdded type");
        }
        return CapabilityAdded.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), slot: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.slot), capabilityType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.capability_type), healthImpactPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.health_impact_pct), energyCostPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy_cost_pct), attempts: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.attempts), cooldown: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cooldown), nextUseTs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_use_ts), baseAttempts: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.base_attempts) });
    }
    static fromBcs(data) { return CapabilityAdded.fromFields(CapabilityAdded.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), slot: this.slot.toString(), capabilityType: this.capabilityType, healthImpactPct: this.healthImpactPct.toString(), energyCostPct: this.energyCostPct.toString(), attempts: this.attempts.toString(), cooldown: this.cooldown.toString(), nextUseTs: this.nextUseTs.toString(), baseAttempts: this.baseAttempts.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return CapabilityAdded.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), slot: (0, reified_1.decodeFromJSONField)("u64", field.slot), capabilityType: (0, reified_1.decodeFromJSONField)("u8", field.capabilityType), healthImpactPct: (0, reified_1.decodeFromJSONField)("u64", field.healthImpactPct), energyCostPct: (0, reified_1.decodeFromJSONField)("u64", field.energyCostPct), attempts: (0, reified_1.decodeFromJSONField)("u64", field.attempts), cooldown: (0, reified_1.decodeFromJSONField)("u64", field.cooldown), nextUseTs: (0, reified_1.decodeFromJSONField)("u64", field.nextUseTs), baseAttempts: (0, reified_1.decodeFromJSONField)("u64", field.baseAttempts) }); }
    static fromJSON(json) {
        if (json.$typeName !== CapabilityAdded.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CapabilityAdded.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCapabilityAdded(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a CapabilityAdded object`);
    } return CapabilityAdded.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCapabilityAdded(data.bcs.type)) {
                throw new Error(`object at is not a CapabilityAdded object`);
            }
            return CapabilityAdded.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CapabilityAdded.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching CapabilityAdded object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCapabilityAdded(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CapabilityAdded object`);
        }
        return CapabilityAdded.fromSuiObjectData(res.data);
    }
}
exports.CapabilityAdded = CapabilityAdded;
CapabilityAdded.$typeName = `${PKG_V1}::dragon_trainer::CapabilityAdded`;
CapabilityAdded.$numTypeParams = 0;
CapabilityAdded.$isPhantom = [];
/* ============================== CapabilityState =============================== */
function isCapabilityState(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::CapabilityState`; }
class CapabilityState {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = CapabilityState.$typeName;
        this.$isPhantom = CapabilityState.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(CapabilityState.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.capType = fields.capType;
        ;
        this.healthImpactPct = fields.healthImpactPct;
        ;
        this.energyCostPct = fields.energyCostPct;
        ;
        this.attempts = fields.attempts;
        ;
        this.cooldown = fields.cooldown;
        ;
        this.nextUseTs = fields.nextUseTs;
        ;
        this.baseAttempts = fields.baseAttempts;
    }
    static reified() { return { typeName: CapabilityState.$typeName, fullTypeName: (0, util_1.composeSuiType)(CapabilityState.$typeName, ...[]), typeArgs: [], isPhantom: CapabilityState.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => CapabilityState.fromFields(fields), fromFieldsWithTypes: (item) => CapabilityState.fromFieldsWithTypes(item), fromBcs: (data) => CapabilityState.fromBcs(data), bcs: CapabilityState.bcs, fromJSONField: (field) => CapabilityState.fromJSONField(field), fromJSON: (json) => CapabilityState.fromJSON(json), fromSuiParsedData: (content) => CapabilityState.fromSuiParsedData(content), fromSuiObjectData: (content) => CapabilityState.fromSuiObjectData(content), fetch: async (client, id) => CapabilityState.fetch(client, id), new: (fields) => { return new CapabilityState([], fields); }, kind: "StructClassReified", }; }
    static get r() { return CapabilityState.reified(); }
    static phantom() { return (0, reified_1.phantom)(CapabilityState.reified()); }
    static get p() { return CapabilityState.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("CapabilityState", {
            cap_type: bcs_1.bcs.u8(), health_impact_pct: bcs_1.bcs.u64(), energy_cost_pct: bcs_1.bcs.u64(), attempts: bcs_1.bcs.u64(), cooldown: bcs_1.bcs.u64(), next_use_ts: bcs_1.bcs.u64(), base_attempts: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return CapabilityState.reified().new({ capType: (0, reified_1.decodeFromFields)("u8", fields.cap_type), healthImpactPct: (0, reified_1.decodeFromFields)("u64", fields.health_impact_pct), energyCostPct: (0, reified_1.decodeFromFields)("u64", fields.energy_cost_pct), attempts: (0, reified_1.decodeFromFields)("u64", fields.attempts), cooldown: (0, reified_1.decodeFromFields)("u64", fields.cooldown), nextUseTs: (0, reified_1.decodeFromFields)("u64", fields.next_use_ts), baseAttempts: (0, reified_1.decodeFromFields)("u64", fields.base_attempts) }); }
    static fromFieldsWithTypes(item) {
        if (!isCapabilityState(item.type)) {
            throw new Error("not a CapabilityState type");
        }
        return CapabilityState.reified().new({ capType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.cap_type), healthImpactPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.health_impact_pct), energyCostPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy_cost_pct), attempts: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.attempts), cooldown: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cooldown), nextUseTs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_use_ts), baseAttempts: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.base_attempts) });
    }
    static fromBcs(data) { return CapabilityState.fromFields(CapabilityState.bcs.parse(data)); }
    toJSONField() {
        return {
            capType: this.capType, healthImpactPct: this.healthImpactPct.toString(), energyCostPct: this.energyCostPct.toString(), attempts: this.attempts.toString(), cooldown: this.cooldown.toString(), nextUseTs: this.nextUseTs.toString(), baseAttempts: this.baseAttempts.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return CapabilityState.reified().new({ capType: (0, reified_1.decodeFromJSONField)("u8", field.capType), healthImpactPct: (0, reified_1.decodeFromJSONField)("u64", field.healthImpactPct), energyCostPct: (0, reified_1.decodeFromJSONField)("u64", field.energyCostPct), attempts: (0, reified_1.decodeFromJSONField)("u64", field.attempts), cooldown: (0, reified_1.decodeFromJSONField)("u64", field.cooldown), nextUseTs: (0, reified_1.decodeFromJSONField)("u64", field.nextUseTs), baseAttempts: (0, reified_1.decodeFromJSONField)("u64", field.baseAttempts) }); }
    static fromJSON(json) {
        if (json.$typeName !== CapabilityState.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CapabilityState.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCapabilityState(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a CapabilityState object`);
    } return CapabilityState.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCapabilityState(data.bcs.type)) {
                throw new Error(`object at is not a CapabilityState object`);
            }
            return CapabilityState.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CapabilityState.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching CapabilityState object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCapabilityState(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CapabilityState object`);
        }
        return CapabilityState.fromSuiObjectData(res.data);
    }
}
exports.CapabilityState = CapabilityState;
CapabilityState.$typeName = `${PKG_V1}::dragon_trainer::CapabilityState`;
CapabilityState.$numTypeParams = 0;
CapabilityState.$isPhantom = [];
/* ============================== Configuration =============================== */
function isConfiguration(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::Configuration`; }
class Configuration {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Configuration.$typeName;
        this.$isPhantom = Configuration.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Configuration.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.maxBidsPerBee = fields.maxBidsPerBee;
        ;
        this.minBidAmt = fields.minBidAmt;
        ;
        this.trainerOnboardingFee = fields.trainerOnboardingFee;
        ;
        this.mutationFee = fields.mutationFee;
        ;
        this.royalty = fields.royalty;
        ;
        this.breedingRoyalty = fields.breedingRoyalty;
        ;
        this.cooldownPeriods = fields.cooldownPeriods;
        ;
        this.minEnergyToHatch = fields.minEnergyToHatch;
        ;
        this.minHealthToHatch = fields.minHealthToHatch;
    }
    static reified() { return { typeName: Configuration.$typeName, fullTypeName: (0, util_1.composeSuiType)(Configuration.$typeName, ...[]), typeArgs: [], isPhantom: Configuration.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Configuration.fromFields(fields), fromFieldsWithTypes: (item) => Configuration.fromFieldsWithTypes(item), fromBcs: (data) => Configuration.fromBcs(data), bcs: Configuration.bcs, fromJSONField: (field) => Configuration.fromJSONField(field), fromJSON: (json) => Configuration.fromJSON(json), fromSuiParsedData: (content) => Configuration.fromSuiParsedData(content), fromSuiObjectData: (content) => Configuration.fromSuiObjectData(content), fetch: async (client, id) => Configuration.fetch(client, id), new: (fields) => { return new Configuration([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Configuration.reified(); }
    static phantom() { return (0, reified_1.phantom)(Configuration.reified()); }
    static get p() { return Configuration.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Configuration", {
            max_bids_per_bee: bcs_1.bcs.u64(), min_bid_amt: bcs_1.bcs.u64(), trainer_onboarding_fee: bcs_1.bcs.u64(), mutation_fee: bcs_1.bcs.u64(), royalty: Royalty.bcs, breeding_royalty: BreedingRoyalty.bcs, cooldown_periods: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), min_energy_to_hatch: bcs_1.bcs.u64(), min_health_to_hatch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Configuration.reified().new({ maxBidsPerBee: (0, reified_1.decodeFromFields)("u64", fields.max_bids_per_bee), minBidAmt: (0, reified_1.decodeFromFields)("u64", fields.min_bid_amt), trainerOnboardingFee: (0, reified_1.decodeFromFields)("u64", fields.trainer_onboarding_fee), mutationFee: (0, reified_1.decodeFromFields)("u64", fields.mutation_fee), royalty: (0, reified_1.decodeFromFields)(Royalty.reified(), fields.royalty), breedingRoyalty: (0, reified_1.decodeFromFields)(BreedingRoyalty.reified(), fields.breeding_royalty), cooldownPeriods: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("u64")), fields.cooldown_periods), minEnergyToHatch: (0, reified_1.decodeFromFields)("u64", fields.min_energy_to_hatch), minHealthToHatch: (0, reified_1.decodeFromFields)("u64", fields.min_health_to_hatch) }); }
    static fromFieldsWithTypes(item) {
        if (!isConfiguration(item.type)) {
            throw new Error("not a Configuration type");
        }
        return Configuration.reified().new({ maxBidsPerBee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_bids_per_bee), minBidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_bid_amt), trainerOnboardingFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.trainer_onboarding_fee), mutationFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.mutation_fee), royalty: (0, reified_1.decodeFromFieldsWithTypes)(Royalty.reified(), item.fields.royalty), breedingRoyalty: (0, reified_1.decodeFromFieldsWithTypes)(BreedingRoyalty.reified(), item.fields.breeding_royalty), cooldownPeriods: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("u64")), item.fields.cooldown_periods), minEnergyToHatch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_energy_to_hatch), minHealthToHatch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_health_to_hatch) });
    }
    static fromBcs(data) { return Configuration.fromFields(Configuration.bcs.parse(data)); }
    toJSONField() {
        return {
            maxBidsPerBee: this.maxBidsPerBee.toString(), minBidAmt: this.minBidAmt.toString(), trainerOnboardingFee: this.trainerOnboardingFee.toString(), mutationFee: this.mutationFee.toString(), royalty: this.royalty.toJSONField(), breedingRoyalty: this.breedingRoyalty.toJSONField(), cooldownPeriods: this.cooldownPeriods.toJSONField(), minEnergyToHatch: this.minEnergyToHatch.toString(), minHealthToHatch: this.minHealthToHatch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Configuration.reified().new({ maxBidsPerBee: (0, reified_1.decodeFromJSONField)("u64", field.maxBidsPerBee), minBidAmt: (0, reified_1.decodeFromJSONField)("u64", field.minBidAmt), trainerOnboardingFee: (0, reified_1.decodeFromJSONField)("u64", field.trainerOnboardingFee), mutationFee: (0, reified_1.decodeFromJSONField)("u64", field.mutationFee), royalty: (0, reified_1.decodeFromJSONField)(Royalty.reified(), field.royalty), breedingRoyalty: (0, reified_1.decodeFromJSONField)(BreedingRoyalty.reified(), field.breedingRoyalty), cooldownPeriods: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("u64")), field.cooldownPeriods), minEnergyToHatch: (0, reified_1.decodeFromJSONField)("u64", field.minEnergyToHatch), minHealthToHatch: (0, reified_1.decodeFromJSONField)("u64", field.minHealthToHatch) }); }
    static fromJSON(json) {
        if (json.$typeName !== Configuration.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Configuration.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConfiguration(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Configuration object`);
    } return Configuration.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConfiguration(data.bcs.type)) {
                throw new Error(`object at is not a Configuration object`);
            }
            return Configuration.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Configuration.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Configuration object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConfiguration(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Configuration object`);
        }
        return Configuration.fromSuiObjectData(res.data);
    }
}
exports.Configuration = Configuration;
Configuration.$typeName = `${PKG_V1}::dragon_trainer::Configuration`;
Configuration.$numTypeParams = 0;
Configuration.$isPhantom = [];
/* ============================== DRAGON_TRAINER =============================== */
function isDRAGON_TRAINER(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DRAGON_TRAINER`; }
class DRAGON_TRAINER {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DRAGON_TRAINER.$typeName;
        this.$isPhantom = DRAGON_TRAINER.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DRAGON_TRAINER.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: DRAGON_TRAINER.$typeName, fullTypeName: (0, util_1.composeSuiType)(DRAGON_TRAINER.$typeName, ...[]), typeArgs: [], isPhantom: DRAGON_TRAINER.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DRAGON_TRAINER.fromFields(fields), fromFieldsWithTypes: (item) => DRAGON_TRAINER.fromFieldsWithTypes(item), fromBcs: (data) => DRAGON_TRAINER.fromBcs(data), bcs: DRAGON_TRAINER.bcs, fromJSONField: (field) => DRAGON_TRAINER.fromJSONField(field), fromJSON: (json) => DRAGON_TRAINER.fromJSON(json), fromSuiParsedData: (content) => DRAGON_TRAINER.fromSuiParsedData(content), fromSuiObjectData: (content) => DRAGON_TRAINER.fromSuiObjectData(content), fetch: async (client, id) => DRAGON_TRAINER.fetch(client, id), new: (fields) => { return new DRAGON_TRAINER([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DRAGON_TRAINER.reified(); }
    static phantom() { return (0, reified_1.phantom)(DRAGON_TRAINER.reified()); }
    static get p() { return DRAGON_TRAINER.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DRAGON_TRAINER", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return DRAGON_TRAINER.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isDRAGON_TRAINER(item.type)) {
            throw new Error("not a DRAGON_TRAINER type");
        }
        return DRAGON_TRAINER.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return DRAGON_TRAINER.fromFields(DRAGON_TRAINER.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DRAGON_TRAINER.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== DRAGON_TRAINER.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DRAGON_TRAINER.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDRAGON_TRAINER(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DRAGON_TRAINER object`);
    } return DRAGON_TRAINER.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDRAGON_TRAINER(data.bcs.type)) {
                throw new Error(`object at is not a DRAGON_TRAINER object`);
            }
            return DRAGON_TRAINER.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DRAGON_TRAINER.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DRAGON_TRAINER object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDRAGON_TRAINER(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DRAGON_TRAINER object`);
        }
        return DRAGON_TRAINER.fromSuiObjectData(res.data);
    }
}
exports.DRAGON_TRAINER = DRAGON_TRAINER;
DRAGON_TRAINER.$typeName = `${PKG_V1}::dragon_trainer::DRAGON_TRAINER`;
DRAGON_TRAINER.$numTypeParams = 0;
DRAGON_TRAINER.$isPhantom = [];
/* ============================== DegenHiveMapStore =============================== */
function isDegenHiveMapStore(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DegenHiveMapStore`; }
class DegenHiveMapStore {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DegenHiveMapStore.$typeName;
        this.$isPhantom = DegenHiveMapStore.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DegenHiveMapStore.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.ownerToTrainerMapping = fields.ownerToTrainerMapping;
        ;
        this.usernameToTrainerMapping = fields.usernameToTrainerMapping;
        ;
        this.usernameToSchoolMapping = fields.usernameToSchoolMapping;
        ;
        this.beeNameToVersionMapping = fields.beeNameToVersionMapping;
        ;
        this.suinsNameToExpiryMapping = fields.suinsNameToExpiryMapping;
        ;
        this.appNamesToCapMapping = fields.appNamesToCapMapping;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: DegenHiveMapStore.$typeName, fullTypeName: (0, util_1.composeSuiType)(DegenHiveMapStore.$typeName, ...[]), typeArgs: [], isPhantom: DegenHiveMapStore.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DegenHiveMapStore.fromFields(fields), fromFieldsWithTypes: (item) => DegenHiveMapStore.fromFieldsWithTypes(item), fromBcs: (data) => DegenHiveMapStore.fromBcs(data), bcs: DegenHiveMapStore.bcs, fromJSONField: (field) => DegenHiveMapStore.fromJSONField(field), fromJSON: (json) => DegenHiveMapStore.fromJSON(json), fromSuiParsedData: (content) => DegenHiveMapStore.fromSuiParsedData(content), fromSuiObjectData: (content) => DegenHiveMapStore.fromSuiObjectData(content), fetch: async (client, id) => DegenHiveMapStore.fetch(client, id), new: (fields) => { return new DegenHiveMapStore([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DegenHiveMapStore.reified(); }
    static phantom() { return (0, reified_1.phantom)(DegenHiveMapStore.reified()); }
    static get p() { return DegenHiveMapStore.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DegenHiveMapStore", {
            id: structs_6.UID.bcs, owner_to_trainer_mapping: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), username_to_trainer_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), username_to_school_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), bee_name_to_version_mapping: structs_5.LinkedTable.bcs(structs_3.String.bcs), suins_name_to_expiry_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), app_names_to_cap_mapping: structs_5.LinkedTable.bcs(structs_1.String.bcs), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DegenHiveMapStore.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), ownerToTrainerMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("address")), fields.owner_to_trainer_mapping), usernameToTrainerMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.username_to_trainer_mapping), usernameToSchoolMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.username_to_school_mapping), beeNameToVersionMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom("u64")), fields.bee_name_to_version_mapping), suinsNameToExpiryMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("u64")), fields.suins_name_to_expiry_mapping), appNamesToCapMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.app_names_to_cap_mapping), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isDegenHiveMapStore(item.type)) {
            throw new Error("not a DegenHiveMapStore type");
        }
        return DegenHiveMapStore.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), ownerToTrainerMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("address")), item.fields.owner_to_trainer_mapping), usernameToTrainerMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.username_to_trainer_mapping), usernameToSchoolMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.username_to_school_mapping), beeNameToVersionMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom("u64")), item.fields.bee_name_to_version_mapping), suinsNameToExpiryMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("u64")), item.fields.suins_name_to_expiry_mapping), appNamesToCapMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.app_names_to_cap_mapping), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return DegenHiveMapStore.fromFields(DegenHiveMapStore.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, ownerToTrainerMapping: this.ownerToTrainerMapping.toJSONField(), usernameToTrainerMapping: this.usernameToTrainerMapping.toJSONField(), usernameToSchoolMapping: this.usernameToSchoolMapping.toJSONField(), beeNameToVersionMapping: this.beeNameToVersionMapping.toJSONField(), suinsNameToExpiryMapping: this.suinsNameToExpiryMapping.toJSONField(), appNamesToCapMapping: this.appNamesToCapMapping.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DegenHiveMapStore.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), ownerToTrainerMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("address")), field.ownerToTrainerMapping), usernameToTrainerMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.usernameToTrainerMapping), usernameToSchoolMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.usernameToSchoolMapping), beeNameToVersionMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom("u64")), field.beeNameToVersionMapping), suinsNameToExpiryMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("u64")), field.suinsNameToExpiryMapping), appNamesToCapMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.appNamesToCapMapping), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== DegenHiveMapStore.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DegenHiveMapStore.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDegenHiveMapStore(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DegenHiveMapStore object`);
    } return DegenHiveMapStore.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDegenHiveMapStore(data.bcs.type)) {
                throw new Error(`object at is not a DegenHiveMapStore object`);
            }
            return DegenHiveMapStore.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DegenHiveMapStore.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DegenHiveMapStore object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDegenHiveMapStore(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DegenHiveMapStore object`);
        }
        return DegenHiveMapStore.fromSuiObjectData(res.data);
    }
}
exports.DegenHiveMapStore = DegenHiveMapStore;
DegenHiveMapStore.$typeName = `${PKG_V1}::dragon_trainer::DegenHiveMapStore`;
DegenHiveMapStore.$numTypeParams = 0;
DegenHiveMapStore.$isPhantom = [];
/* ============================== DegenHiveYieldHarvested =============================== */
function isDegenHiveYieldHarvested(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DegenHiveYieldHarvested`; }
class DegenHiveYieldHarvested {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DegenHiveYieldHarvested.$typeName;
        this.$isPhantom = DegenHiveYieldHarvested.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DegenHiveYieldHarvested.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.harvesterTrainer = fields.harvesterTrainer;
        ;
        this.username = fields.username;
        ;
        this.hiveHarvested = fields.hiveHarvested;
        ;
        this.honeyHarvested = fields.honeyHarvested;
    }
    static reified() { return { typeName: DegenHiveYieldHarvested.$typeName, fullTypeName: (0, util_1.composeSuiType)(DegenHiveYieldHarvested.$typeName, ...[]), typeArgs: [], isPhantom: DegenHiveYieldHarvested.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DegenHiveYieldHarvested.fromFields(fields), fromFieldsWithTypes: (item) => DegenHiveYieldHarvested.fromFieldsWithTypes(item), fromBcs: (data) => DegenHiveYieldHarvested.fromBcs(data), bcs: DegenHiveYieldHarvested.bcs, fromJSONField: (field) => DegenHiveYieldHarvested.fromJSONField(field), fromJSON: (json) => DegenHiveYieldHarvested.fromJSON(json), fromSuiParsedData: (content) => DegenHiveYieldHarvested.fromSuiParsedData(content), fromSuiObjectData: (content) => DegenHiveYieldHarvested.fromSuiObjectData(content), fetch: async (client, id) => DegenHiveYieldHarvested.fetch(client, id), new: (fields) => { return new DegenHiveYieldHarvested([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DegenHiveYieldHarvested.reified(); }
    static phantom() { return (0, reified_1.phantom)(DegenHiveYieldHarvested.reified()); }
    static get p() { return DegenHiveYieldHarvested.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DegenHiveYieldHarvested", {
            harvester_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, hive_harvested: bcs_1.bcs.u64(), honey_harvested: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DegenHiveYieldHarvested.reified().new({ harvesterTrainer: (0, reified_1.decodeFromFields)("address", fields.harvester_trainer), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), hiveHarvested: (0, reified_1.decodeFromFields)("u64", fields.hive_harvested), honeyHarvested: (0, reified_1.decodeFromFields)("u64", fields.honey_harvested) }); }
    static fromFieldsWithTypes(item) {
        if (!isDegenHiveYieldHarvested(item.type)) {
            throw new Error("not a DegenHiveYieldHarvested type");
        }
        return DegenHiveYieldHarvested.reified().new({ harvesterTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.harvester_trainer), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), hiveHarvested: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_harvested), honeyHarvested: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_harvested) });
    }
    static fromBcs(data) { return DegenHiveYieldHarvested.fromFields(DegenHiveYieldHarvested.bcs.parse(data)); }
    toJSONField() {
        return {
            harvesterTrainer: this.harvesterTrainer, username: this.username, hiveHarvested: this.hiveHarvested.toString(), honeyHarvested: this.honeyHarvested.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DegenHiveYieldHarvested.reified().new({ harvesterTrainer: (0, reified_1.decodeFromJSONField)("address", field.harvesterTrainer), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), hiveHarvested: (0, reified_1.decodeFromJSONField)("u64", field.hiveHarvested), honeyHarvested: (0, reified_1.decodeFromJSONField)("u64", field.honeyHarvested) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDegenHiveYieldHarvested(data.bcs.type)) {
                throw new Error(`object at is not a DegenHiveYieldHarvested object`);
            }
            return DegenHiveYieldHarvested.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DegenHiveYieldHarvested.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DegenHiveYieldHarvested object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDegenHiveYieldHarvested(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DegenHiveYieldHarvested object`);
        }
        return DegenHiveYieldHarvested.fromSuiObjectData(res.data);
    }
}
exports.DegenHiveYieldHarvested = DegenHiveYieldHarvested;
DegenHiveYieldHarvested.$typeName = `${PKG_V1}::dragon_trainer::DegenHiveYieldHarvested`;
DegenHiveYieldHarvested.$numTypeParams = 0;
DegenHiveYieldHarvested.$isPhantom = [];
/* ============================== DragonBeeHatched =============================== */
function isDragonBeeHatched(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DragonBeeHatched`; }
class DragonBeeHatched {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonBeeHatched.$typeName;
        this.$isPhantom = DragonBeeHatched.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonBeeHatched.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
    }
    static reified() { return { typeName: DragonBeeHatched.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonBeeHatched.$typeName, ...[]), typeArgs: [], isPhantom: DragonBeeHatched.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonBeeHatched.fromFields(fields), fromFieldsWithTypes: (item) => DragonBeeHatched.fromFieldsWithTypes(item), fromBcs: (data) => DragonBeeHatched.fromBcs(data), bcs: DragonBeeHatched.bcs, fromJSONField: (field) => DragonBeeHatched.fromJSONField(field), fromJSON: (json) => DragonBeeHatched.fromJSON(json), fromSuiParsedData: (content) => DragonBeeHatched.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonBeeHatched.fromSuiObjectData(content), fetch: async (client, id) => DragonBeeHatched.fetch(client, id), new: (fields) => { return new DragonBeeHatched([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonBeeHatched.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonBeeHatched.reified()); }
    static get p() { return DragonBeeHatched.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonBeeHatched", {
            version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DragonBeeHatched.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonBeeHatched(item.type)) {
            throw new Error("not a DragonBeeHatched type");
        }
        return DragonBeeHatched.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return DragonBeeHatched.fromFields(DragonBeeHatched.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonBeeHatched.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonBeeHatched.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonBeeHatched.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonBeeHatched(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonBeeHatched object`);
    } return DragonBeeHatched.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonBeeHatched(data.bcs.type)) {
                throw new Error(`object at is not a DragonBeeHatched object`);
            }
            return DragonBeeHatched.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonBeeHatched.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonBeeHatched object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonBeeHatched(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonBeeHatched object`);
        }
        return DragonBeeHatched.fromSuiObjectData(res.data);
    }
}
exports.DragonBeeHatched = DragonBeeHatched;
DragonBeeHatched.$typeName = `${PKG_V1}::dragon_trainer::DragonBeeHatched`;
DragonBeeHatched.$numTypeParams = 0;
DragonBeeHatched.$isPhantom = [];
/* ============================== DragonDust =============================== */
function isDragonDust(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DragonDust`; }
class DragonDust {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonDust.$typeName;
        this.$isPhantom = DragonDust.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonDust.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.questsPlayed = fields.questsPlayed;
        ;
        this.evolutionStage = fields.evolutionStage;
        ;
        this.evolvedGenes = fields.evolvedGenes;
        ;
        this.genesImgMap = fields.genesImgMap;
        ;
        this.evolutionMap = fields.evolutionMap;
    }
    static reified() { return { typeName: DragonDust.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonDust.$typeName, ...[]), typeArgs: [], isPhantom: DragonDust.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonDust.fromFields(fields), fromFieldsWithTypes: (item) => DragonDust.fromFieldsWithTypes(item), fromBcs: (data) => DragonDust.fromBcs(data), bcs: DragonDust.bcs, fromJSONField: (field) => DragonDust.fromJSONField(field), fromJSON: (json) => DragonDust.fromJSON(json), fromSuiParsedData: (content) => DragonDust.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonDust.fromSuiObjectData(content), fetch: async (client, id) => DragonDust.fetch(client, id), new: (fields) => { return new DragonDust([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonDust.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonDust.reified()); }
    static get p() { return DragonDust.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonDust", {
            quests_played: bcs_1.bcs.u64(), evolution_stage: bcs_1.bcs.u8(), evolved_genes: bcs_1.bcs.vector(bcs_1.bcs.u256()), genes_img_map: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), evolution_map: bcs_1.bcs.vector(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return DragonDust.reified().new({ questsPlayed: (0, reified_1.decodeFromFields)("u64", fields.quests_played), evolutionStage: (0, reified_1.decodeFromFields)("u8", fields.evolution_stage), evolvedGenes: (0, reified_1.decodeFromFields)(reified.vector("u256"), fields.evolved_genes), genesImgMap: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(structs_3.String.reified()))), fields.genes_img_map), evolutionMap: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.evolution_map) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonDust(item.type)) {
            throw new Error("not a DragonDust type");
        }
        return DragonDust.reified().new({ questsPlayed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.quests_played), evolutionStage: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.evolution_stage), evolvedGenes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u256"), item.fields.evolved_genes), genesImgMap: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(structs_3.String.reified()))), item.fields.genes_img_map), evolutionMap: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.evolution_map) });
    }
    static fromBcs(data) { return DragonDust.fromFields(DragonDust.bcs.parse(data)); }
    toJSONField() {
        return {
            questsPlayed: this.questsPlayed.toString(), evolutionStage: this.evolutionStage, evolvedGenes: (0, reified_1.fieldToJSON)(`vector<u256>`, this.evolvedGenes), genesImgMap: this.genesImgMap.toJSONField(), evolutionMap: (0, reified_1.fieldToJSON)(`vector<u64>`, this.evolutionMap),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonDust.reified().new({ questsPlayed: (0, reified_1.decodeFromJSONField)("u64", field.questsPlayed), evolutionStage: (0, reified_1.decodeFromJSONField)("u8", field.evolutionStage), evolvedGenes: (0, reified_1.decodeFromJSONField)(reified.vector("u256"), field.evolvedGenes), genesImgMap: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(structs_3.String.reified()))), field.genesImgMap), evolutionMap: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.evolutionMap) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonDust.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonDust.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonDust(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonDust object`);
    } return DragonDust.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonDust(data.bcs.type)) {
                throw new Error(`object at is not a DragonDust object`);
            }
            return DragonDust.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonDust.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonDust object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonDust(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonDust object`);
        }
        return DragonDust.fromSuiObjectData(res.data);
    }
}
exports.DragonDust = DragonDust;
DragonDust.$typeName = `${PKG_V1}::dragon_trainer::DragonDust`;
DragonDust.$numTypeParams = 0;
DragonDust.$isPhantom = [];
/* ============================== DragonEggsBasket =============================== */
function isDragonEggsBasket(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DragonEggsBasket`; }
class DragonEggsBasket {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonEggsBasket.$typeName;
        this.$isPhantom = DragonEggsBasket.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonEggsBasket.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.startTime = fields.startTime;
        ;
        this.eggsCount = fields.eggsCount;
        ;
        this.queenBeeEggsCount = fields.queenBeeEggsCount;
        ;
        this.eggsLaid = fields.eggsLaid;
        ;
        this.queenEggsLaid = fields.queenEggsLaid;
        ;
        this.queenChance = fields.queenChance;
        ;
        this.maxEggsLimit = fields.maxEggsLimit;
        ;
        this.basePrice = fields.basePrice;
        ;
        this.curveA = fields.curveA;
        ;
        this.addressList = fields.addressList;
        ;
        this.perUserLimit = fields.perUserLimit;
        ;
        this.whitelistTrainersPricing = fields.whitelistTrainersPricing;
        ;
        this.whitelistTrainersAvailability = fields.whitelistTrainersAvailability;
        ;
        this.beesIndexes = fields.beesIndexes;
        ;
        this.genesisGenesList = fields.genesisGenesList;
        ;
        this.imagesList = fields.imagesList;
        ;
        this.capabilities = fields.capabilities;
        ;
        this.dragonbeeImgsList = fields.dragonbeeImgsList;
        ;
        this.honeyAvail = fields.honeyAvail;
        ;
        this.hiveAvail = fields.hiveAvail;
    }
    static reified() { return { typeName: DragonEggsBasket.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonEggsBasket.$typeName, ...[]), typeArgs: [], isPhantom: DragonEggsBasket.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonEggsBasket.fromFields(fields), fromFieldsWithTypes: (item) => DragonEggsBasket.fromFieldsWithTypes(item), fromBcs: (data) => DragonEggsBasket.fromBcs(data), bcs: DragonEggsBasket.bcs, fromJSONField: (field) => DragonEggsBasket.fromJSONField(field), fromJSON: (json) => DragonEggsBasket.fromJSON(json), fromSuiParsedData: (content) => DragonEggsBasket.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonEggsBasket.fromSuiObjectData(content), fetch: async (client, id) => DragonEggsBasket.fetch(client, id), new: (fields) => { return new DragonEggsBasket([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonEggsBasket.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonEggsBasket.reified()); }
    static get p() { return DragonEggsBasket.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonEggsBasket", {
            start_time: bcs_1.bcs.u64(), eggs_count: bcs_1.bcs.u64(), queen_bee_eggs_count: bcs_1.bcs.u64(), eggs_laid: bcs_1.bcs.u64(), queen_eggs_laid: bcs_1.bcs.u64(), queen_chance: bcs_1.bcs.u64(), max_eggs_limit: bcs_1.bcs.u64(), base_price: bcs_1.bcs.u64(), curve_a: bcs_1.bcs.u64(), address_list: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), per_user_limit: bcs_1.bcs.u64(), whitelist_trainers_pricing: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), whitelist_trainers_availability: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), bees_indexes: bcs_1.bcs.vector(bcs_1.bcs.u64()), genesis_genes_list: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), images_list: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), capabilities: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), dragonbee_imgs_list: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), honey_avail: structs_4.Balance.bcs, hive_avail: structs_4.Balance.bcs
        });
    }
    ;
    static fromFields(fields) { return DragonEggsBasket.reified().new({ startTime: (0, reified_1.decodeFromFields)("u64", fields.start_time), eggsCount: (0, reified_1.decodeFromFields)("u64", fields.eggs_count), queenBeeEggsCount: (0, reified_1.decodeFromFields)("u64", fields.queen_bee_eggs_count), eggsLaid: (0, reified_1.decodeFromFields)("u64", fields.eggs_laid), queenEggsLaid: (0, reified_1.decodeFromFields)("u64", fields.queen_eggs_laid), queenChance: (0, reified_1.decodeFromFields)("u64", fields.queen_chance), maxEggsLimit: (0, reified_1.decodeFromFields)("u64", fields.max_eggs_limit), basePrice: (0, reified_1.decodeFromFields)("u64", fields.base_price), curveA: (0, reified_1.decodeFromFields)("u64", fields.curve_a), addressList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), fields.address_list), perUserLimit: (0, reified_1.decodeFromFields)("u64", fields.per_user_limit), whitelistTrainersPricing: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), fields.whitelist_trainers_pricing), whitelistTrainersAvailability: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), fields.whitelist_trainers_availability), beesIndexes: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.bees_indexes), genesisGenesList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("u256")), fields.genesis_genes_list), imagesList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())))), fields.images_list), capabilities: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), fields.capabilities), dragonbeeImgsList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())))), fields.dragonbee_imgs_list), honeyAvail: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.honey_avail), hiveAvail: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.hive_avail) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonEggsBasket(item.type)) {
            throw new Error("not a DragonEggsBasket type");
        }
        return DragonEggsBasket.reified().new({ startTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_time), eggsCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.eggs_count), queenBeeEggsCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_bee_eggs_count), eggsLaid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.eggs_laid), queenEggsLaid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_eggs_laid), queenChance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_chance), maxEggsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_eggs_limit), basePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.base_price), curveA: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.curve_a), addressList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), item.fields.address_list), perUserLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.per_user_limit), whitelistTrainersPricing: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), item.fields.whitelist_trainers_pricing), whitelistTrainersAvailability: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), item.fields.whitelist_trainers_availability), beesIndexes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.bees_indexes), genesisGenesList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("u256")), item.fields.genesis_genes_list), imagesList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())))), item.fields.images_list), capabilities: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), item.fields.capabilities), dragonbeeImgsList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())))), item.fields.dragonbee_imgs_list), honeyAvail: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.honey_avail), hiveAvail: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.hive_avail) });
    }
    static fromBcs(data) { return DragonEggsBasket.fromFields(DragonEggsBasket.bcs.parse(data)); }
    toJSONField() {
        return {
            startTime: this.startTime.toString(), eggsCount: this.eggsCount.toString(), queenBeeEggsCount: this.queenBeeEggsCount.toString(), eggsLaid: this.eggsLaid.toString(), queenEggsLaid: this.queenEggsLaid.toString(), queenChance: this.queenChance.toString(), maxEggsLimit: this.maxEggsLimit.toString(), basePrice: this.basePrice.toString(), curveA: this.curveA.toString(), addressList: this.addressList.toJSONField(), perUserLimit: this.perUserLimit.toString(), whitelistTrainersPricing: this.whitelistTrainersPricing.toJSONField(), whitelistTrainersAvailability: this.whitelistTrainersAvailability.toJSONField(), beesIndexes: (0, reified_1.fieldToJSON)(`vector<u64>`, this.beesIndexes), genesisGenesList: this.genesisGenesList.toJSONField(), imagesList: this.imagesList.toJSONField(), capabilities: this.capabilities.toJSONField(), dragonbeeImgsList: this.dragonbeeImgsList.toJSONField(), honeyAvail: this.honeyAvail.toJSONField(), hiveAvail: this.hiveAvail.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonEggsBasket.reified().new({ startTime: (0, reified_1.decodeFromJSONField)("u64", field.startTime), eggsCount: (0, reified_1.decodeFromJSONField)("u64", field.eggsCount), queenBeeEggsCount: (0, reified_1.decodeFromJSONField)("u64", field.queenBeeEggsCount), eggsLaid: (0, reified_1.decodeFromJSONField)("u64", field.eggsLaid), queenEggsLaid: (0, reified_1.decodeFromJSONField)("u64", field.queenEggsLaid), queenChance: (0, reified_1.decodeFromJSONField)("u64", field.queenChance), maxEggsLimit: (0, reified_1.decodeFromJSONField)("u64", field.maxEggsLimit), basePrice: (0, reified_1.decodeFromJSONField)("u64", field.basePrice), curveA: (0, reified_1.decodeFromJSONField)("u64", field.curveA), addressList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), field.addressList), perUserLimit: (0, reified_1.decodeFromJSONField)("u64", field.perUserLimit), whitelistTrainersPricing: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), field.whitelistTrainersPricing), whitelistTrainersAvailability: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("u64")), field.whitelistTrainersAvailability), beesIndexes: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.beesIndexes), genesisGenesList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("u256")), field.genesisGenesList), imagesList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())))), field.imagesList), capabilities: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), field.capabilities), dragonbeeImgsList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())))), field.dragonbeeImgsList), honeyAvail: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.honeyAvail), hiveAvail: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.hiveAvail) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonEggsBasket.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonEggsBasket.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonEggsBasket(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonEggsBasket object`);
    } return DragonEggsBasket.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonEggsBasket(data.bcs.type)) {
                throw new Error(`object at is not a DragonEggsBasket object`);
            }
            return DragonEggsBasket.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonEggsBasket.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonEggsBasket object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonEggsBasket(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonEggsBasket object`);
        }
        return DragonEggsBasket.fromSuiObjectData(res.data);
    }
}
exports.DragonEggsBasket = DragonEggsBasket;
DragonEggsBasket.$typeName = `${PKG_V1}::dragon_trainer::DragonEggsBasket`;
DragonEggsBasket.$numTypeParams = 0;
DragonEggsBasket.$isPhantom = [];
/* ============================== DragonSchool =============================== */
function isDragonSchool(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DragonSchool`; }
class DragonSchool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonSchool.$typeName;
        this.$isPhantom = DragonSchool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonSchool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.owner = fields.owner;
        ;
        this.username = fields.username;
        ;
        this.availableHive = fields.availableHive;
        ;
        this.availableHoney = fields.availableHoney;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: DragonSchool.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonSchool.$typeName, ...[]), typeArgs: [], isPhantom: DragonSchool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonSchool.fromFields(fields), fromFieldsWithTypes: (item) => DragonSchool.fromFieldsWithTypes(item), fromBcs: (data) => DragonSchool.fromBcs(data), bcs: DragonSchool.bcs, fromJSONField: (field) => DragonSchool.fromJSONField(field), fromJSON: (json) => DragonSchool.fromJSON(json), fromSuiParsedData: (content) => DragonSchool.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonSchool.fromSuiObjectData(content), fetch: async (client, id) => DragonSchool.fetch(client, id), new: (fields) => { return new DragonSchool([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonSchool.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonSchool.reified()); }
    static get p() { return DragonSchool.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonSchool", {
            id: structs_6.UID.bcs, owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, available_hive: structs_4.Balance.bcs, available_honey: structs_4.Balance.bcs, module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DragonSchool.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), owner: (0, reified_1.decodeFromFields)("address", fields.owner), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), availableHive: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.available_hive), availableHoney: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.available_honey), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonSchool(item.type)) {
            throw new Error("not a DragonSchool type");
        }
        return DragonSchool.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), availableHive: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.available_hive), availableHoney: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.available_honey), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return DragonSchool.fromFields(DragonSchool.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, owner: this.owner, username: this.username, availableHive: this.availableHive.toJSONField(), availableHoney: this.availableHoney.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonSchool.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), availableHive: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.availableHive), availableHoney: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.availableHoney), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonSchool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonSchool.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonSchool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonSchool object`);
    } return DragonSchool.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonSchool(data.bcs.type)) {
                throw new Error(`object at is not a DragonSchool object`);
            }
            return DragonSchool.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonSchool.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonSchool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonSchool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonSchool object`);
        }
        return DragonSchool.fromSuiObjectData(res.data);
    }
}
exports.DragonSchool = DragonSchool;
DragonSchool.$typeName = `${PKG_V1}::dragon_trainer::DragonSchool`;
DragonSchool.$numTypeParams = 0;
DragonSchool.$isPhantom = [];
/* ============================== DragonSchoolCreated =============================== */
function isDragonSchoolCreated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DragonSchoolCreated`; }
class DragonSchoolCreated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonSchoolCreated.$typeName;
        this.$isPhantom = DragonSchoolCreated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonSchoolCreated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.name = fields.name;
        ;
        this.newSchoolAddr = fields.newSchoolAddr;
    }
    static reified() { return { typeName: DragonSchoolCreated.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonSchoolCreated.$typeName, ...[]), typeArgs: [], isPhantom: DragonSchoolCreated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonSchoolCreated.fromFields(fields), fromFieldsWithTypes: (item) => DragonSchoolCreated.fromFieldsWithTypes(item), fromBcs: (data) => DragonSchoolCreated.fromBcs(data), bcs: DragonSchoolCreated.bcs, fromJSONField: (field) => DragonSchoolCreated.fromJSONField(field), fromJSON: (json) => DragonSchoolCreated.fromJSON(json), fromSuiParsedData: (content) => DragonSchoolCreated.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonSchoolCreated.fromSuiObjectData(content), fetch: async (client, id) => DragonSchoolCreated.fetch(client, id), new: (fields) => { return new DragonSchoolCreated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonSchoolCreated.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonSchoolCreated.reified()); }
    static get p() { return DragonSchoolCreated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonSchoolCreated", {
            name: structs_1.String.bcs, new_school_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return DragonSchoolCreated.reified().new({ name: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.name), newSchoolAddr: (0, reified_1.decodeFromFields)("address", fields.new_school_addr) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonSchoolCreated(item.type)) {
            throw new Error("not a DragonSchoolCreated type");
        }
        return DragonSchoolCreated.reified().new({ name: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.name), newSchoolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.new_school_addr) });
    }
    static fromBcs(data) { return DragonSchoolCreated.fromFields(DragonSchoolCreated.bcs.parse(data)); }
    toJSONField() {
        return {
            name: this.name, newSchoolAddr: this.newSchoolAddr,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonSchoolCreated.reified().new({ name: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.name), newSchoolAddr: (0, reified_1.decodeFromJSONField)("address", field.newSchoolAddr) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonSchoolCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonSchoolCreated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonSchoolCreated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonSchoolCreated object`);
    } return DragonSchoolCreated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonSchoolCreated(data.bcs.type)) {
                throw new Error(`object at is not a DragonSchoolCreated object`);
            }
            return DragonSchoolCreated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonSchoolCreated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonSchoolCreated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonSchoolCreated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonSchoolCreated object`);
        }
        return DragonSchoolCreated.fromSuiObjectData(res.data);
    }
}
exports.DragonSchoolCreated = DragonSchoolCreated;
DragonSchoolCreated.$typeName = `${PKG_V1}::dragon_trainer::DragonSchoolCreated`;
DragonSchoolCreated.$numTypeParams = 0;
DragonSchoolCreated.$isPhantom = [];
/* ============================== DragonTrainer =============================== */
function isDragonTrainer(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DragonTrainer`; }
class DragonTrainer {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonTrainer.$typeName;
        this.$isPhantom = DragonTrainer.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonTrainer.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.owner = fields.owner;
        ;
        this.joinedAt = fields.joinedAt;
        ;
        this.username = fields.username;
        ;
        this.inscription = fields.inscription;
        ;
        this.availableHoney = fields.availableHoney;
        ;
        this.availableSui = fields.availableSui;
        ;
        this.ownedBees = fields.ownedBees;
        ;
        this.lockedBees = fields.lockedBees;
        ;
        this.listingRecords = fields.listingRecords;
        ;
        this.bidRecords = fields.bidRecords;
        ;
        this.trainerSessions = fields.trainerSessions;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: DragonTrainer.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonTrainer.$typeName, ...[]), typeArgs: [], isPhantom: DragonTrainer.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonTrainer.fromFields(fields), fromFieldsWithTypes: (item) => DragonTrainer.fromFieldsWithTypes(item), fromBcs: (data) => DragonTrainer.fromBcs(data), bcs: DragonTrainer.bcs, fromJSONField: (field) => DragonTrainer.fromJSONField(field), fromJSON: (json) => DragonTrainer.fromJSON(json), fromSuiParsedData: (content) => DragonTrainer.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonTrainer.fromSuiObjectData(content), fetch: async (client, id) => DragonTrainer.fetch(client, id), new: (fields) => { return new DragonTrainer([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonTrainer.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonTrainer.reified()); }
    static get p() { return DragonTrainer.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonTrainer", {
            id: structs_6.UID.bcs, owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), joined_at: bcs_1.bcs.u64(), username: structs_1.String.bcs, inscription: Inscription.bcs, available_honey: structs_4.Balance.bcs, available_sui: structs_4.Balance.bcs, owned_bees: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), locked_bees: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), listing_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), bid_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), trainer_sessions: structs_5.LinkedTable.bcs(structs_1.String.bcs), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DragonTrainer.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), owner: (0, reified_1.decodeFromFields)("address", fields.owner), joinedAt: (0, reified_1.decodeFromFields)("u64", fields.joined_at), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), inscription: (0, reified_1.decodeFromFields)(Inscription.reified(), fields.inscription), availableHoney: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.available_honey), availableSui: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.available_sui), ownedBees: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(MysticalBee.reified())), fields.owned_bees), lockedBees: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), fields.locked_bees), listingRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), fields.listing_records), bidRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), fields.bid_records), trainerSessions: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.trainer_sessions), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonTrainer(item.type)) {
            throw new Error("not a DragonTrainer type");
        }
        return DragonTrainer.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), joinedAt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.joined_at), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), inscription: (0, reified_1.decodeFromFieldsWithTypes)(Inscription.reified(), item.fields.inscription), availableHoney: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.available_honey), availableSui: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.available_sui), ownedBees: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(MysticalBee.reified())), item.fields.owned_bees), lockedBees: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), item.fields.locked_bees), listingRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), item.fields.listing_records), bidRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), item.fields.bid_records), trainerSessions: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.trainer_sessions), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return DragonTrainer.fromFields(DragonTrainer.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, owner: this.owner, joinedAt: this.joinedAt.toString(), username: this.username, inscription: this.inscription.toJSONField(), availableHoney: this.availableHoney.toJSONField(), availableSui: this.availableSui.toJSONField(), ownedBees: this.ownedBees.toJSONField(), lockedBees: this.lockedBees.toJSONField(), listingRecords: this.listingRecords.toJSONField(), bidRecords: this.bidRecords.toJSONField(), trainerSessions: this.trainerSessions.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonTrainer.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), joinedAt: (0, reified_1.decodeFromJSONField)("u64", field.joinedAt), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), inscription: (0, reified_1.decodeFromJSONField)(Inscription.reified(), field.inscription), availableHoney: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.availableHoney), availableSui: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.availableSui), ownedBees: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(MysticalBee.reified())), field.ownedBees), lockedBees: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), field.lockedBees), listingRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), field.listingRecords), bidRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), field.bidRecords), trainerSessions: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.trainerSessions), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonTrainer.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonTrainer.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonTrainer(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonTrainer object`);
    } return DragonTrainer.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonTrainer(data.bcs.type)) {
                throw new Error(`object at is not a DragonTrainer object`);
            }
            return DragonTrainer.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonTrainer.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonTrainer object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonTrainer(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonTrainer object`);
        }
        return DragonTrainer.fromSuiObjectData(res.data);
    }
}
exports.DragonTrainer = DragonTrainer;
DragonTrainer.$typeName = `${PKG_V1}::dragon_trainer::DragonTrainer`;
DragonTrainer.$numTypeParams = 0;
DragonTrainer.$isPhantom = [];
/* ============================== DragonTrainerDeleted =============================== */
function isDragonTrainerDeleted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DragonTrainerDeleted`; }
class DragonTrainerDeleted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonTrainerDeleted.$typeName;
        this.$isPhantom = DragonTrainerDeleted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonTrainerDeleted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.owner = fields.owner;
        ;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.recepient = fields.recepient;
        ;
        this.availableHoney = fields.availableHoney;
        ;
        this.availableSui = fields.availableSui;
    }
    static reified() { return { typeName: DragonTrainerDeleted.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonTrainerDeleted.$typeName, ...[]), typeArgs: [], isPhantom: DragonTrainerDeleted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonTrainerDeleted.fromFields(fields), fromFieldsWithTypes: (item) => DragonTrainerDeleted.fromFieldsWithTypes(item), fromBcs: (data) => DragonTrainerDeleted.fromBcs(data), bcs: DragonTrainerDeleted.bcs, fromJSONField: (field) => DragonTrainerDeleted.fromJSONField(field), fromJSON: (json) => DragonTrainerDeleted.fromJSON(json), fromSuiParsedData: (content) => DragonTrainerDeleted.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonTrainerDeleted.fromSuiObjectData(content), fetch: async (client, id) => DragonTrainerDeleted.fetch(client, id), new: (fields) => { return new DragonTrainerDeleted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonTrainerDeleted.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonTrainerDeleted.reified()); }
    static get p() { return DragonTrainerDeleted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonTrainerDeleted", {
            owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), recepient: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), available_honey: bcs_1.bcs.u64(), available_sui: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DragonTrainerDeleted.reified().new({ owner: (0, reified_1.decodeFromFields)("address", fields.owner), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), recepient: (0, reified_1.decodeFromFields)("address", fields.recepient), availableHoney: (0, reified_1.decodeFromFields)("u64", fields.available_honey), availableSui: (0, reified_1.decodeFromFields)("u64", fields.available_sui) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonTrainerDeleted(item.type)) {
            throw new Error("not a DragonTrainerDeleted type");
        }
        return DragonTrainerDeleted.reified().new({ owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), recepient: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.recepient), availableHoney: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.available_honey), availableSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.available_sui) });
    }
    static fromBcs(data) { return DragonTrainerDeleted.fromFields(DragonTrainerDeleted.bcs.parse(data)); }
    toJSONField() {
        return {
            owner: this.owner, username: this.username, profileAddr: this.profileAddr, recepient: this.recepient, availableHoney: this.availableHoney.toString(), availableSui: this.availableSui.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonTrainerDeleted.reified().new({ owner: (0, reified_1.decodeFromJSONField)("address", field.owner), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), recepient: (0, reified_1.decodeFromJSONField)("address", field.recepient), availableHoney: (0, reified_1.decodeFromJSONField)("u64", field.availableHoney), availableSui: (0, reified_1.decodeFromJSONField)("u64", field.availableSui) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonTrainerDeleted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonTrainerDeleted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonTrainerDeleted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonTrainerDeleted object`);
    } return DragonTrainerDeleted.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonTrainerDeleted(data.bcs.type)) {
                throw new Error(`object at is not a DragonTrainerDeleted object`);
            }
            return DragonTrainerDeleted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonTrainerDeleted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonTrainerDeleted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonTrainerDeleted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonTrainerDeleted object`);
        }
        return DragonTrainerDeleted.fromSuiObjectData(res.data);
    }
}
exports.DragonTrainerDeleted = DragonTrainerDeleted;
DragonTrainerDeleted.$typeName = `${PKG_V1}::dragon_trainer::DragonTrainerDeleted`;
DragonTrainerDeleted.$numTypeParams = 0;
DragonTrainerDeleted.$isPhantom = [];
/* ============================== DragonTrainerKrafted =============================== */
function isDragonTrainerKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::DragonTrainerKrafted`; }
class DragonTrainerKrafted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonTrainerKrafted.$typeName;
        this.$isPhantom = DragonTrainerKrafted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonTrainerKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.name = fields.name;
        ;
        this.newTrainerAddr = fields.newTrainerAddr;
        ;
        this.krafter = fields.krafter;
        ;
        this.fee = fields.fee;
    }
    static reified() { return { typeName: DragonTrainerKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonTrainerKrafted.$typeName, ...[]), typeArgs: [], isPhantom: DragonTrainerKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonTrainerKrafted.fromFields(fields), fromFieldsWithTypes: (item) => DragonTrainerKrafted.fromFieldsWithTypes(item), fromBcs: (data) => DragonTrainerKrafted.fromBcs(data), bcs: DragonTrainerKrafted.bcs, fromJSONField: (field) => DragonTrainerKrafted.fromJSONField(field), fromJSON: (json) => DragonTrainerKrafted.fromJSON(json), fromSuiParsedData: (content) => DragonTrainerKrafted.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonTrainerKrafted.fromSuiObjectData(content), fetch: async (client, id) => DragonTrainerKrafted.fetch(client, id), new: (fields) => { return new DragonTrainerKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonTrainerKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonTrainerKrafted.reified()); }
    static get p() { return DragonTrainerKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonTrainerKrafted", {
            name: structs_3.String.bcs, new_trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), krafter: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), fee: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DragonTrainerKrafted.reified().new({ name: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.name), newTrainerAddr: (0, reified_1.decodeFromFields)("address", fields.new_trainer_addr), krafter: (0, reified_1.decodeFromFields)("address", fields.krafter), fee: (0, reified_1.decodeFromFields)("u64", fields.fee) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonTrainerKrafted(item.type)) {
            throw new Error("not a DragonTrainerKrafted type");
        }
        return DragonTrainerKrafted.reified().new({ name: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.name), newTrainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.new_trainer_addr), krafter: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.krafter), fee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee) });
    }
    static fromBcs(data) { return DragonTrainerKrafted.fromFields(DragonTrainerKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            name: this.name, newTrainerAddr: this.newTrainerAddr, krafter: this.krafter, fee: this.fee.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonTrainerKrafted.reified().new({ name: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.name), newTrainerAddr: (0, reified_1.decodeFromJSONField)("address", field.newTrainerAddr), krafter: (0, reified_1.decodeFromJSONField)("address", field.krafter), fee: (0, reified_1.decodeFromJSONField)("u64", field.fee) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonTrainerKrafted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonTrainerKrafted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonTrainerKrafted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonTrainerKrafted object`);
    } return DragonTrainerKrafted.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonTrainerKrafted(data.bcs.type)) {
                throw new Error(`object at is not a DragonTrainerKrafted object`);
            }
            return DragonTrainerKrafted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonTrainerKrafted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonTrainerKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonTrainerKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonTrainerKrafted object`);
        }
        return DragonTrainerKrafted.fromSuiObjectData(res.data);
    }
}
exports.DragonTrainerKrafted = DragonTrainerKrafted;
DragonTrainerKrafted.$typeName = `${PKG_V1}::dragon_trainer::DragonTrainerKrafted`;
DragonTrainerKrafted.$numTypeParams = 0;
DragonTrainerKrafted.$isPhantom = [];
/* ============================== EggBasketInfo =============================== */
function isEggBasketInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::EggBasketInfo`; }
class EggBasketInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = EggBasketInfo.$typeName;
        this.$isPhantom = EggBasketInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(EggBasketInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.isQueen = fields.isQueen;
        ;
        this.totalEggs = fields.totalEggs;
        ;
        this.hatchEggRecord = fields.hatchEggRecord;
        ;
        this.lastEggTs = fields.lastEggTs;
        ;
        this.cooldownStage = fields.cooldownStage;
        ;
        this.cooldownTillTs = fields.cooldownTillTs;
    }
    static reified() { return { typeName: EggBasketInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(EggBasketInfo.$typeName, ...[]), typeArgs: [], isPhantom: EggBasketInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => EggBasketInfo.fromFields(fields), fromFieldsWithTypes: (item) => EggBasketInfo.fromFieldsWithTypes(item), fromBcs: (data) => EggBasketInfo.fromBcs(data), bcs: EggBasketInfo.bcs, fromJSONField: (field) => EggBasketInfo.fromJSONField(field), fromJSON: (json) => EggBasketInfo.fromJSON(json), fromSuiParsedData: (content) => EggBasketInfo.fromSuiParsedData(content), fromSuiObjectData: (content) => EggBasketInfo.fromSuiObjectData(content), fetch: async (client, id) => EggBasketInfo.fetch(client, id), new: (fields) => { return new EggBasketInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return EggBasketInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(EggBasketInfo.reified()); }
    static get p() { return EggBasketInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("EggBasketInfo", {
            is_queen: bcs_1.bcs.bool(), total_eggs: bcs_1.bcs.u64(), hatch_egg_record: structs_2.Option.bcs(BeeEggRecord.bcs), last_egg_ts: bcs_1.bcs.u64(), cooldown_stage: bcs_1.bcs.u8(), cooldown_till_ts: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return EggBasketInfo.reified().new({ isQueen: (0, reified_1.decodeFromFields)("bool", fields.is_queen), totalEggs: (0, reified_1.decodeFromFields)("u64", fields.total_eggs), hatchEggRecord: (0, reified_1.decodeFromFields)(structs_2.Option.reified(BeeEggRecord.reified()), fields.hatch_egg_record), lastEggTs: (0, reified_1.decodeFromFields)("u64", fields.last_egg_ts), cooldownStage: (0, reified_1.decodeFromFields)("u8", fields.cooldown_stage), cooldownTillTs: (0, reified_1.decodeFromFields)("u64", fields.cooldown_till_ts) }); }
    static fromFieldsWithTypes(item) {
        if (!isEggBasketInfo(item.type)) {
            throw new Error("not a EggBasketInfo type");
        }
        return EggBasketInfo.reified().new({ isQueen: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_queen), totalEggs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_eggs), hatchEggRecord: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(BeeEggRecord.reified()), item.fields.hatch_egg_record), lastEggTs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_egg_ts), cooldownStage: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.cooldown_stage), cooldownTillTs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cooldown_till_ts) });
    }
    static fromBcs(data) { return EggBasketInfo.fromFields(EggBasketInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            isQueen: this.isQueen, totalEggs: this.totalEggs.toString(), hatchEggRecord: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${BeeEggRecord.$typeName}>`, this.hatchEggRecord), lastEggTs: this.lastEggTs.toString(), cooldownStage: this.cooldownStage, cooldownTillTs: this.cooldownTillTs.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return EggBasketInfo.reified().new({ isQueen: (0, reified_1.decodeFromJSONField)("bool", field.isQueen), totalEggs: (0, reified_1.decodeFromJSONField)("u64", field.totalEggs), hatchEggRecord: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(BeeEggRecord.reified()), field.hatchEggRecord), lastEggTs: (0, reified_1.decodeFromJSONField)("u64", field.lastEggTs), cooldownStage: (0, reified_1.decodeFromJSONField)("u8", field.cooldownStage), cooldownTillTs: (0, reified_1.decodeFromJSONField)("u64", field.cooldownTillTs) }); }
    static fromJSON(json) {
        if (json.$typeName !== EggBasketInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return EggBasketInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEggBasketInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a EggBasketInfo object`);
    } return EggBasketInfo.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isEggBasketInfo(data.bcs.type)) {
                throw new Error(`object at is not a EggBasketInfo object`);
            }
            return EggBasketInfo.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return EggBasketInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching EggBasketInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEggBasketInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a EggBasketInfo object`);
        }
        return EggBasketInfo.fromSuiObjectData(res.data);
    }
}
exports.EggBasketInfo = EggBasketInfo;
EggBasketInfo.$typeName = `${PKG_V1}::dragon_trainer::EggBasketInfo`;
EggBasketInfo.$numTypeParams = 0;
EggBasketInfo.$isPhantom = [];
/* ============================== EggLaidForDragonBee =============================== */
function isEggLaidForDragonBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::EggLaidForDragonBee`; }
class EggLaidForDragonBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = EggLaidForDragonBee.$typeName;
        this.$isPhantom = EggLaidForDragonBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(EggLaidForDragonBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.generation = fields.generation;
        ;
        this.version = fields.version;
        ;
        this.gene = fields.gene;
        ;
        this.birthTime = fields.birthTime;
        ;
        this.birtherTrainer = fields.birtherTrainer;
        ;
        this.queenVersion = fields.queenVersion;
        ;
        this.queenId = fields.queenId;
        ;
        this.stingerId = fields.stingerId;
        ;
        this.price = fields.price;
        ;
        this.honeyDeposit = fields.honeyDeposit;
    }
    static reified() { return { typeName: EggLaidForDragonBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(EggLaidForDragonBee.$typeName, ...[]), typeArgs: [], isPhantom: EggLaidForDragonBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => EggLaidForDragonBee.fromFields(fields), fromFieldsWithTypes: (item) => EggLaidForDragonBee.fromFieldsWithTypes(item), fromBcs: (data) => EggLaidForDragonBee.fromBcs(data), bcs: EggLaidForDragonBee.bcs, fromJSONField: (field) => EggLaidForDragonBee.fromJSONField(field), fromJSON: (json) => EggLaidForDragonBee.fromJSON(json), fromSuiParsedData: (content) => EggLaidForDragonBee.fromSuiParsedData(content), fromSuiObjectData: (content) => EggLaidForDragonBee.fromSuiObjectData(content), fetch: async (client, id) => EggLaidForDragonBee.fetch(client, id), new: (fields) => { return new EggLaidForDragonBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return EggLaidForDragonBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(EggLaidForDragonBee.reified()); }
    static get p() { return EggLaidForDragonBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("EggLaidForDragonBee", {
            id: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), generation: bcs_1.bcs.u64(), version: bcs_1.bcs.u64(), gene: bcs_1.bcs.u256(), birth_time: bcs_1.bcs.u64(), birther_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), queen_version: bcs_1.bcs.u64(), queenId: structs_2.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), stingerId: structs_2.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), price: bcs_1.bcs.u64(), honey_deposit: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return EggLaidForDragonBee.reified().new({ id: (0, reified_1.decodeFromFields)("address", fields.id), generation: (0, reified_1.decodeFromFields)("u64", fields.generation), version: (0, reified_1.decodeFromFields)("u64", fields.version), gene: (0, reified_1.decodeFromFields)("u256", fields.gene), birthTime: (0, reified_1.decodeFromFields)("u64", fields.birth_time), birtherTrainer: (0, reified_1.decodeFromFields)("address", fields.birther_trainer), queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), queenId: (0, reified_1.decodeFromFields)(structs_2.Option.reified("address"), fields.queenId), stingerId: (0, reified_1.decodeFromFields)(structs_2.Option.reified("address"), fields.stingerId), price: (0, reified_1.decodeFromFields)("u64", fields.price), honeyDeposit: (0, reified_1.decodeFromFields)("u64", fields.honey_deposit) }); }
    static fromFieldsWithTypes(item) {
        if (!isEggLaidForDragonBee(item.type)) {
            throw new Error("not a EggLaidForDragonBee type");
        }
        return EggLaidForDragonBee.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.id), generation: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.generation), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), gene: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.gene), birthTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.birth_time), birtherTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.birther_trainer), queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), queenId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified("address"), item.fields.queenId), stingerId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified("address"), item.fields.stingerId), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price), honeyDeposit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_deposit) });
    }
    static fromBcs(data) { return EggLaidForDragonBee.fromFields(EggLaidForDragonBee.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, generation: this.generation.toString(), version: this.version.toString(), gene: this.gene.toString(), birthTime: this.birthTime.toString(), birtherTrainer: this.birtherTrainer, queenVersion: this.queenVersion.toString(), queenId: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<address>`, this.queenId), stingerId: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<address>`, this.stingerId), price: this.price.toString(), honeyDeposit: this.honeyDeposit.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return EggLaidForDragonBee.reified().new({ id: (0, reified_1.decodeFromJSONField)("address", field.id), generation: (0, reified_1.decodeFromJSONField)("u64", field.generation), version: (0, reified_1.decodeFromJSONField)("u64", field.version), gene: (0, reified_1.decodeFromJSONField)("u256", field.gene), birthTime: (0, reified_1.decodeFromJSONField)("u64", field.birthTime), birtherTrainer: (0, reified_1.decodeFromJSONField)("address", field.birtherTrainer), queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), queenId: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified("address"), field.queenId), stingerId: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified("address"), field.stingerId), price: (0, reified_1.decodeFromJSONField)("u64", field.price), honeyDeposit: (0, reified_1.decodeFromJSONField)("u64", field.honeyDeposit) }); }
    static fromJSON(json) {
        if (json.$typeName !== EggLaidForDragonBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return EggLaidForDragonBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEggLaidForDragonBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a EggLaidForDragonBee object`);
    } return EggLaidForDragonBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isEggLaidForDragonBee(data.bcs.type)) {
                throw new Error(`object at is not a EggLaidForDragonBee object`);
            }
            return EggLaidForDragonBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return EggLaidForDragonBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching EggLaidForDragonBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEggLaidForDragonBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a EggLaidForDragonBee object`);
        }
        return EggLaidForDragonBee.fromSuiObjectData(res.data);
    }
}
exports.EggLaidForDragonBee = EggLaidForDragonBee;
EggLaidForDragonBee.$typeName = `${PKG_V1}::dragon_trainer::EggLaidForDragonBee`;
EggLaidForDragonBee.$numTypeParams = 0;
EggLaidForDragonBee.$isPhantom = [];
/* ============================== ExecutedListing =============================== */
function isExecutedListing(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::ExecutedListing`; }
class ExecutedListing {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ExecutedListing.$typeName;
        this.$isPhantom = ExecutedListing.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ExecutedListing.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByTrainer = fields.listedByTrainer;
        ;
        this.mysticalBee = fields.mysticalBee;
        ;
        this.version = fields.version;
        ;
        this.balance = fields.balance;
        ;
        this.bidderTrainer = fields.bidderTrainer;
        ;
        this.executedPrice = fields.executedPrice;
    }
    static reified() { return { typeName: ExecutedListing.$typeName, fullTypeName: (0, util_1.composeSuiType)(ExecutedListing.$typeName, ...[]), typeArgs: [], isPhantom: ExecutedListing.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ExecutedListing.fromFields(fields), fromFieldsWithTypes: (item) => ExecutedListing.fromFieldsWithTypes(item), fromBcs: (data) => ExecutedListing.fromBcs(data), bcs: ExecutedListing.bcs, fromJSONField: (field) => ExecutedListing.fromJSONField(field), fromJSON: (json) => ExecutedListing.fromJSON(json), fromSuiParsedData: (content) => ExecutedListing.fromSuiParsedData(content), fromSuiObjectData: (content) => ExecutedListing.fromSuiObjectData(content), fetch: async (client, id) => ExecutedListing.fetch(client, id), new: (fields) => { return new ExecutedListing([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ExecutedListing.reified(); }
    static phantom() { return (0, reified_1.phantom)(ExecutedListing.reified()); }
    static get p() { return ExecutedListing.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ExecutedListing", {
            listed_by_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), mystical_bee: structs_2.Option.bcs(MysticalBee.bcs), version: bcs_1.bcs.u64(), balance: structs_2.Option.bcs(structs_4.Balance.bcs), bidder_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), executed_price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ExecutedListing.reified().new({ listedByTrainer: (0, reified_1.decodeFromFields)("address", fields.listed_by_trainer), mysticalBee: (0, reified_1.decodeFromFields)(structs_2.Option.reified(MysticalBee.reified()), fields.mystical_bee), version: (0, reified_1.decodeFromFields)("u64", fields.version), balance: (0, reified_1.decodeFromFields)(structs_2.Option.reified(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified()))), fields.balance), bidderTrainer: (0, reified_1.decodeFromFields)("address", fields.bidder_trainer), executedPrice: (0, reified_1.decodeFromFields)("u64", fields.executed_price) }); }
    static fromFieldsWithTypes(item) {
        if (!isExecutedListing(item.type)) {
            throw new Error("not a ExecutedListing type");
        }
        return ExecutedListing.reified().new({ listedByTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_trainer), mysticalBee: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(MysticalBee.reified()), item.fields.mystical_bee), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified()))), item.fields.balance), bidderTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_trainer), executedPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.executed_price) });
    }
    static fromBcs(data) { return ExecutedListing.fromFields(ExecutedListing.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByTrainer: this.listedByTrainer, mysticalBee: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${MysticalBee.$typeName}>`, this.mysticalBee), version: this.version.toString(), balance: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${structs_4.Balance.$typeName}<${structs_7.SUI.$typeName}>>`, this.balance), bidderTrainer: this.bidderTrainer, executedPrice: this.executedPrice.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ExecutedListing.reified().new({ listedByTrainer: (0, reified_1.decodeFromJSONField)("address", field.listedByTrainer), mysticalBee: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(MysticalBee.reified()), field.mysticalBee), version: (0, reified_1.decodeFromJSONField)("u64", field.version), balance: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified()))), field.balance), bidderTrainer: (0, reified_1.decodeFromJSONField)("address", field.bidderTrainer), executedPrice: (0, reified_1.decodeFromJSONField)("u64", field.executedPrice) }); }
    static fromJSON(json) {
        if (json.$typeName !== ExecutedListing.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ExecutedListing.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExecutedListing(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ExecutedListing object`);
    } return ExecutedListing.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isExecutedListing(data.bcs.type)) {
                throw new Error(`object at is not a ExecutedListing object`);
            }
            return ExecutedListing.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ExecutedListing.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ExecutedListing object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExecutedListing(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExecutedListing object`);
        }
        return ExecutedListing.fromSuiObjectData(res.data);
    }
}
exports.ExecutedListing = ExecutedListing;
ExecutedListing.$typeName = `${PKG_V1}::dragon_trainer::ExecutedListing`;
ExecutedListing.$numTypeParams = 0;
ExecutedListing.$isPhantom = [];
/* ============================== ExecutedListingDestroyed =============================== */
function isExecutedListingDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::ExecutedListingDestroyed`; }
class ExecutedListingDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ExecutedListingDestroyed.$typeName;
        this.$isPhantom = ExecutedListingDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ExecutedListingDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.executedPrice = fields.executedPrice;
        ;
        this.listedByTrainer = fields.listedByTrainer;
    }
    static reified() { return { typeName: ExecutedListingDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(ExecutedListingDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: ExecutedListingDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ExecutedListingDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => ExecutedListingDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => ExecutedListingDestroyed.fromBcs(data), bcs: ExecutedListingDestroyed.bcs, fromJSONField: (field) => ExecutedListingDestroyed.fromJSONField(field), fromJSON: (json) => ExecutedListingDestroyed.fromJSON(json), fromSuiParsedData: (content) => ExecutedListingDestroyed.fromSuiParsedData(content), fromSuiObjectData: (content) => ExecutedListingDestroyed.fromSuiObjectData(content), fetch: async (client, id) => ExecutedListingDestroyed.fetch(client, id), new: (fields) => { return new ExecutedListingDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ExecutedListingDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(ExecutedListingDestroyed.reified()); }
    static get p() { return ExecutedListingDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ExecutedListingDestroyed", {
            version: bcs_1.bcs.u64(), executed_price: bcs_1.bcs.u64(), listed_by_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return ExecutedListingDestroyed.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), executedPrice: (0, reified_1.decodeFromFields)("u64", fields.executed_price), listedByTrainer: (0, reified_1.decodeFromFields)("address", fields.listed_by_trainer) }); }
    static fromFieldsWithTypes(item) {
        if (!isExecutedListingDestroyed(item.type)) {
            throw new Error("not a ExecutedListingDestroyed type");
        }
        return ExecutedListingDestroyed.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), executedPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.executed_price), listedByTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_trainer) });
    }
    static fromBcs(data) { return ExecutedListingDestroyed.fromFields(ExecutedListingDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), executedPrice: this.executedPrice.toString(), listedByTrainer: this.listedByTrainer,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ExecutedListingDestroyed.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), executedPrice: (0, reified_1.decodeFromJSONField)("u64", field.executedPrice), listedByTrainer: (0, reified_1.decodeFromJSONField)("address", field.listedByTrainer) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isExecutedListingDestroyed(data.bcs.type)) {
                throw new Error(`object at is not a ExecutedListingDestroyed object`);
            }
            return ExecutedListingDestroyed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ExecutedListingDestroyed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ExecutedListingDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExecutedListingDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExecutedListingDestroyed object`);
        }
        return ExecutedListingDestroyed.fromSuiObjectData(res.data);
    }
}
exports.ExecutedListingDestroyed = ExecutedListingDestroyed;
ExecutedListingDestroyed.$typeName = `${PKG_V1}::dragon_trainer::ExecutedListingDestroyed`;
ExecutedListingDestroyed.$numTypeParams = 0;
ExecutedListingDestroyed.$isPhantom = [];
/* ============================== ExitHiveOfProfile =============================== */
function isExitHiveOfProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::ExitHiveOfProfile`; }
class ExitHiveOfProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ExitHiveOfProfile.$typeName;
        this.$isPhantom = ExitHiveOfProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ExitHiveOfProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.followerTrainerAddr = fields.followerTrainerAddr;
        ;
        this.unfollowedTrainerAddr = fields.unfollowedTrainerAddr;
        ;
        this.followerUsername = fields.followerUsername;
    }
    static reified() { return { typeName: ExitHiveOfProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(ExitHiveOfProfile.$typeName, ...[]), typeArgs: [], isPhantom: ExitHiveOfProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ExitHiveOfProfile.fromFields(fields), fromFieldsWithTypes: (item) => ExitHiveOfProfile.fromFieldsWithTypes(item), fromBcs: (data) => ExitHiveOfProfile.fromBcs(data), bcs: ExitHiveOfProfile.bcs, fromJSONField: (field) => ExitHiveOfProfile.fromJSONField(field), fromJSON: (json) => ExitHiveOfProfile.fromJSON(json), fromSuiParsedData: (content) => ExitHiveOfProfile.fromSuiParsedData(content), fromSuiObjectData: (content) => ExitHiveOfProfile.fromSuiObjectData(content), fetch: async (client, id) => ExitHiveOfProfile.fetch(client, id), new: (fields) => { return new ExitHiveOfProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ExitHiveOfProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(ExitHiveOfProfile.reified()); }
    static get p() { return ExitHiveOfProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ExitHiveOfProfile", {
            follower_trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), unfollowed_trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), follower_username: structs_3.String.bcs
        });
    }
    ;
    static fromFields(fields) { return ExitHiveOfProfile.reified().new({ followerTrainerAddr: (0, reified_1.decodeFromFields)("address", fields.follower_trainer_addr), unfollowedTrainerAddr: (0, reified_1.decodeFromFields)("address", fields.unfollowed_trainer_addr), followerUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.follower_username) }); }
    static fromFieldsWithTypes(item) {
        if (!isExitHiveOfProfile(item.type)) {
            throw new Error("not a ExitHiveOfProfile type");
        }
        return ExitHiveOfProfile.reified().new({ followerTrainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.follower_trainer_addr), unfollowedTrainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.unfollowed_trainer_addr), followerUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.follower_username) });
    }
    static fromBcs(data) { return ExitHiveOfProfile.fromFields(ExitHiveOfProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            followerTrainerAddr: this.followerTrainerAddr, unfollowedTrainerAddr: this.unfollowedTrainerAddr, followerUsername: this.followerUsername,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ExitHiveOfProfile.reified().new({ followerTrainerAddr: (0, reified_1.decodeFromJSONField)("address", field.followerTrainerAddr), unfollowedTrainerAddr: (0, reified_1.decodeFromJSONField)("address", field.unfollowedTrainerAddr), followerUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.followerUsername) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isExitHiveOfProfile(data.bcs.type)) {
                throw new Error(`object at is not a ExitHiveOfProfile object`);
            }
            return ExitHiveOfProfile.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ExitHiveOfProfile.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ExitHiveOfProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExitHiveOfProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExitHiveOfProfile object`);
        }
        return ExitHiveOfProfile.fromSuiObjectData(res.data);
    }
}
exports.ExitHiveOfProfile = ExitHiveOfProfile;
ExitHiveOfProfile.$typeName = `${PKG_V1}::dragon_trainer::ExitHiveOfProfile`;
ExitHiveOfProfile.$numTypeParams = 0;
ExitHiveOfProfile.$isPhantom = [];
/* ============================== FundsWithdrawnFromProfile =============================== */
function isFundsWithdrawnFromProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::FundsWithdrawnFromProfile`; }
class FundsWithdrawnFromProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FundsWithdrawnFromProfile.$typeName;
        this.$isPhantom = FundsWithdrawnFromProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FundsWithdrawnFromProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.withdrawnSui = fields.withdrawnSui;
        ;
        this.withdrawnHoney = fields.withdrawnHoney;
    }
    static reified() { return { typeName: FundsWithdrawnFromProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(FundsWithdrawnFromProfile.$typeName, ...[]), typeArgs: [], isPhantom: FundsWithdrawnFromProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FundsWithdrawnFromProfile.fromFields(fields), fromFieldsWithTypes: (item) => FundsWithdrawnFromProfile.fromFieldsWithTypes(item), fromBcs: (data) => FundsWithdrawnFromProfile.fromBcs(data), bcs: FundsWithdrawnFromProfile.bcs, fromJSONField: (field) => FundsWithdrawnFromProfile.fromJSONField(field), fromJSON: (json) => FundsWithdrawnFromProfile.fromJSON(json), fromSuiParsedData: (content) => FundsWithdrawnFromProfile.fromSuiParsedData(content), fromSuiObjectData: (content) => FundsWithdrawnFromProfile.fromSuiObjectData(content), fetch: async (client, id) => FundsWithdrawnFromProfile.fetch(client, id), new: (fields) => { return new FundsWithdrawnFromProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FundsWithdrawnFromProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(FundsWithdrawnFromProfile.reified()); }
    static get p() { return FundsWithdrawnFromProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FundsWithdrawnFromProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, withdrawn_sui: bcs_1.bcs.u64(), withdrawn_honey: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FundsWithdrawnFromProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), withdrawnSui: (0, reified_1.decodeFromFields)("u64", fields.withdrawn_sui), withdrawnHoney: (0, reified_1.decodeFromFields)("u64", fields.withdrawn_honey) }); }
    static fromFieldsWithTypes(item) {
        if (!isFundsWithdrawnFromProfile(item.type)) {
            throw new Error("not a FundsWithdrawnFromProfile type");
        }
        return FundsWithdrawnFromProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), withdrawnSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.withdrawn_sui), withdrawnHoney: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.withdrawn_honey) });
    }
    static fromBcs(data) { return FundsWithdrawnFromProfile.fromFields(FundsWithdrawnFromProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, username: this.username, withdrawnSui: this.withdrawnSui.toString(), withdrawnHoney: this.withdrawnHoney.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FundsWithdrawnFromProfile.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), withdrawnSui: (0, reified_1.decodeFromJSONField)("u64", field.withdrawnSui), withdrawnHoney: (0, reified_1.decodeFromJSONField)("u64", field.withdrawnHoney) }); }
    static fromJSON(json) {
        if (json.$typeName !== FundsWithdrawnFromProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FundsWithdrawnFromProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFundsWithdrawnFromProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FundsWithdrawnFromProfile object`);
    } return FundsWithdrawnFromProfile.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFundsWithdrawnFromProfile(data.bcs.type)) {
                throw new Error(`object at is not a FundsWithdrawnFromProfile object`);
            }
            return FundsWithdrawnFromProfile.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FundsWithdrawnFromProfile.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FundsWithdrawnFromProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFundsWithdrawnFromProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FundsWithdrawnFromProfile object`);
        }
        return FundsWithdrawnFromProfile.fromSuiObjectData(res.data);
    }
}
exports.FundsWithdrawnFromProfile = FundsWithdrawnFromProfile;
FundsWithdrawnFromProfile.$typeName = `${PKG_V1}::dragon_trainer::FundsWithdrawnFromProfile`;
FundsWithdrawnFromProfile.$numTypeParams = 0;
FundsWithdrawnFromProfile.$isPhantom = [];
/* ============================== GameMasterKey =============================== */
function isGameMasterKey(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::GameMasterKey`; }
class GameMasterKey {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = GameMasterKey.$typeName;
        this.$isPhantom = GameMasterKey.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(GameMasterKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.appName = fields.appName;
        ;
        this.totalEnergy = fields.totalEnergy;
        ;
        this.totalHealth = fields.totalHealth;
        ;
        this.hiveIncentives = fields.hiveIncentives;
        ;
        this.honeyIncentives = fields.honeyIncentives;
    }
    static reified() { return { typeName: GameMasterKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(GameMasterKey.$typeName, ...[]), typeArgs: [], isPhantom: GameMasterKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => GameMasterKey.fromFields(fields), fromFieldsWithTypes: (item) => GameMasterKey.fromFieldsWithTypes(item), fromBcs: (data) => GameMasterKey.fromBcs(data), bcs: GameMasterKey.bcs, fromJSONField: (field) => GameMasterKey.fromJSONField(field), fromJSON: (json) => GameMasterKey.fromJSON(json), fromSuiParsedData: (content) => GameMasterKey.fromSuiParsedData(content), fromSuiObjectData: (content) => GameMasterKey.fromSuiObjectData(content), fetch: async (client, id) => GameMasterKey.fetch(client, id), new: (fields) => { return new GameMasterKey([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GameMasterKey.reified(); }
    static phantom() { return (0, reified_1.phantom)(GameMasterKey.reified()); }
    static get p() { return GameMasterKey.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GameMasterKey", {
            id: structs_6.UID.bcs, app_name: structs_1.String.bcs, total_energy: bcs_1.bcs.u64(), total_health: bcs_1.bcs.u64(), hive_incentives: structs_4.Balance.bcs, honey_incentives: structs_4.Balance.bcs
        });
    }
    ;
    static fromFields(fields) { return GameMasterKey.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name), totalEnergy: (0, reified_1.decodeFromFields)("u64", fields.total_energy), totalHealth: (0, reified_1.decodeFromFields)("u64", fields.total_health), hiveIncentives: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.hive_incentives), honeyIncentives: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.honey_incentives) }); }
    static fromFieldsWithTypes(item) {
        if (!isGameMasterKey(item.type)) {
            throw new Error("not a GameMasterKey type");
        }
        return GameMasterKey.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name), totalEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_energy), totalHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_health), hiveIncentives: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.hive_incentives), honeyIncentives: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.honey_incentives) });
    }
    static fromBcs(data) { return GameMasterKey.fromFields(GameMasterKey.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, appName: this.appName, totalEnergy: this.totalEnergy.toString(), totalHealth: this.totalHealth.toString(), hiveIncentives: this.hiveIncentives.toJSONField(), honeyIncentives: this.honeyIncentives.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GameMasterKey.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName), totalEnergy: (0, reified_1.decodeFromJSONField)("u64", field.totalEnergy), totalHealth: (0, reified_1.decodeFromJSONField)("u64", field.totalHealth), hiveIncentives: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.hiveIncentives), honeyIncentives: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.honeyIncentives) }); }
    static fromJSON(json) {
        if (json.$typeName !== GameMasterKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GameMasterKey.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGameMasterKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GameMasterKey object`);
    } return GameMasterKey.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isGameMasterKey(data.bcs.type)) {
                throw new Error(`object at is not a GameMasterKey object`);
            }
            return GameMasterKey.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return GameMasterKey.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GameMasterKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGameMasterKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GameMasterKey object`);
        }
        return GameMasterKey.fromSuiObjectData(res.data);
    }
}
exports.GameMasterKey = GameMasterKey;
GameMasterKey.$typeName = `${PKG_V1}::dragon_trainer::GameMasterKey`;
GameMasterKey.$numTypeParams = 0;
GameMasterKey.$isPhantom = [];
/* ============================== GenesisBeesUploaderCapability =============================== */
function isGenesisBeesUploaderCapability(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::GenesisBeesUploaderCapability`; }
class GenesisBeesUploaderCapability {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = GenesisBeesUploaderCapability.$typeName;
        this.$isPhantom = GenesisBeesUploaderCapability.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(GenesisBeesUploaderCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: GenesisBeesUploaderCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(GenesisBeesUploaderCapability.$typeName, ...[]), typeArgs: [], isPhantom: GenesisBeesUploaderCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => GenesisBeesUploaderCapability.fromFields(fields), fromFieldsWithTypes: (item) => GenesisBeesUploaderCapability.fromFieldsWithTypes(item), fromBcs: (data) => GenesisBeesUploaderCapability.fromBcs(data), bcs: GenesisBeesUploaderCapability.bcs, fromJSONField: (field) => GenesisBeesUploaderCapability.fromJSONField(field), fromJSON: (json) => GenesisBeesUploaderCapability.fromJSON(json), fromSuiParsedData: (content) => GenesisBeesUploaderCapability.fromSuiParsedData(content), fromSuiObjectData: (content) => GenesisBeesUploaderCapability.fromSuiObjectData(content), fetch: async (client, id) => GenesisBeesUploaderCapability.fetch(client, id), new: (fields) => { return new GenesisBeesUploaderCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GenesisBeesUploaderCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(GenesisBeesUploaderCapability.reified()); }
    static get p() { return GenesisBeesUploaderCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GenesisBeesUploaderCapability", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return GenesisBeesUploaderCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isGenesisBeesUploaderCapability(item.type)) {
            throw new Error("not a GenesisBeesUploaderCapability type");
        }
        return GenesisBeesUploaderCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return GenesisBeesUploaderCapability.fromFields(GenesisBeesUploaderCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GenesisBeesUploaderCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== GenesisBeesUploaderCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GenesisBeesUploaderCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGenesisBeesUploaderCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GenesisBeesUploaderCapability object`);
    } return GenesisBeesUploaderCapability.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isGenesisBeesUploaderCapability(data.bcs.type)) {
                throw new Error(`object at is not a GenesisBeesUploaderCapability object`);
            }
            return GenesisBeesUploaderCapability.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return GenesisBeesUploaderCapability.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GenesisBeesUploaderCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGenesisBeesUploaderCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GenesisBeesUploaderCapability object`);
        }
        return GenesisBeesUploaderCapability.fromSuiObjectData(res.data);
    }
}
exports.GenesisBeesUploaderCapability = GenesisBeesUploaderCapability;
GenesisBeesUploaderCapability.$typeName = `${PKG_V1}::dragon_trainer::GenesisBeesUploaderCapability`;
GenesisBeesUploaderCapability.$numTypeParams = 0;
GenesisBeesUploaderCapability.$isPhantom = [];
/* ============================== GovernanceInfo =============================== */
function isGovernanceInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::GovernanceInfo`; }
class GovernanceInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = GovernanceInfo.$typeName;
        this.$isPhantom = GovernanceInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(GovernanceInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.totalWeightedHive = fields.totalWeightedHive;
        ;
        this.totalWeightedHoney = fields.totalWeightedHoney;
    }
    static reified() { return { typeName: GovernanceInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(GovernanceInfo.$typeName, ...[]), typeArgs: [], isPhantom: GovernanceInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => GovernanceInfo.fromFields(fields), fromFieldsWithTypes: (item) => GovernanceInfo.fromFieldsWithTypes(item), fromBcs: (data) => GovernanceInfo.fromBcs(data), bcs: GovernanceInfo.bcs, fromJSONField: (field) => GovernanceInfo.fromJSONField(field), fromJSON: (json) => GovernanceInfo.fromJSON(json), fromSuiParsedData: (content) => GovernanceInfo.fromSuiParsedData(content), fromSuiObjectData: (content) => GovernanceInfo.fromSuiObjectData(content), fetch: async (client, id) => GovernanceInfo.fetch(client, id), new: (fields) => { return new GovernanceInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GovernanceInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(GovernanceInfo.reified()); }
    static get p() { return GovernanceInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GovernanceInfo", {
            total_weighted_hive: bcs_1.bcs.u128(), total_weighted_honey: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return GovernanceInfo.reified().new({ totalWeightedHive: (0, reified_1.decodeFromFields)("u128", fields.total_weighted_hive), totalWeightedHoney: (0, reified_1.decodeFromFields)("u128", fields.total_weighted_honey) }); }
    static fromFieldsWithTypes(item) {
        if (!isGovernanceInfo(item.type)) {
            throw new Error("not a GovernanceInfo type");
        }
        return GovernanceInfo.reified().new({ totalWeightedHive: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.total_weighted_hive), totalWeightedHoney: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.total_weighted_honey) });
    }
    static fromBcs(data) { return GovernanceInfo.fromFields(GovernanceInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            totalWeightedHive: this.totalWeightedHive.toString(), totalWeightedHoney: this.totalWeightedHoney.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GovernanceInfo.reified().new({ totalWeightedHive: (0, reified_1.decodeFromJSONField)("u128", field.totalWeightedHive), totalWeightedHoney: (0, reified_1.decodeFromJSONField)("u128", field.totalWeightedHoney) }); }
    static fromJSON(json) {
        if (json.$typeName !== GovernanceInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GovernanceInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGovernanceInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GovernanceInfo object`);
    } return GovernanceInfo.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isGovernanceInfo(data.bcs.type)) {
                throw new Error(`object at is not a GovernanceInfo object`);
            }
            return GovernanceInfo.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return GovernanceInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GovernanceInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGovernanceInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GovernanceInfo object`);
        }
        return GovernanceInfo.fromSuiObjectData(res.data);
    }
}
exports.GovernanceInfo = GovernanceInfo;
GovernanceInfo.$typeName = `${PKG_V1}::dragon_trainer::GovernanceInfo`;
GovernanceInfo.$numTypeParams = 0;
GovernanceInfo.$isPhantom = [];
/* ============================== HealthInfusedInBee =============================== */
function isHealthInfusedInBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HealthInfusedInBee`; }
class HealthInfusedInBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HealthInfusedInBee.$typeName;
        this.$isPhantom = HealthInfusedInBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HealthInfusedInBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.honeyAdded = fields.honeyAdded;
        ;
        this.totalHoneyLocked = fields.totalHoneyLocked;
        ;
        this.weightedHoneyLocked = fields.weightedHoneyLocked;
        ;
        this.healthIncrease = fields.healthIncrease;
        ;
        this.honeyHealth = fields.honeyHealth;
    }
    static reified() { return { typeName: HealthInfusedInBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(HealthInfusedInBee.$typeName, ...[]), typeArgs: [], isPhantom: HealthInfusedInBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HealthInfusedInBee.fromFields(fields), fromFieldsWithTypes: (item) => HealthInfusedInBee.fromFieldsWithTypes(item), fromBcs: (data) => HealthInfusedInBee.fromBcs(data), bcs: HealthInfusedInBee.bcs, fromJSONField: (field) => HealthInfusedInBee.fromJSONField(field), fromJSON: (json) => HealthInfusedInBee.fromJSON(json), fromSuiParsedData: (content) => HealthInfusedInBee.fromSuiParsedData(content), fromSuiObjectData: (content) => HealthInfusedInBee.fromSuiObjectData(content), fetch: async (client, id) => HealthInfusedInBee.fetch(client, id), new: (fields) => { return new HealthInfusedInBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HealthInfusedInBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(HealthInfusedInBee.reified()); }
    static get p() { return HealthInfusedInBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HealthInfusedInBee", {
            version: bcs_1.bcs.u64(), honey_added: bcs_1.bcs.u64(), total_honey_locked: bcs_1.bcs.u64(), weighted_honey_locked: bcs_1.bcs.u128(), health_increase: bcs_1.bcs.u64(), honey_health: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HealthInfusedInBee.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), honeyAdded: (0, reified_1.decodeFromFields)("u64", fields.honey_added), totalHoneyLocked: (0, reified_1.decodeFromFields)("u64", fields.total_honey_locked), weightedHoneyLocked: (0, reified_1.decodeFromFields)("u128", fields.weighted_honey_locked), healthIncrease: (0, reified_1.decodeFromFields)("u64", fields.health_increase), honeyHealth: (0, reified_1.decodeFromFields)("u64", fields.honey_health) }); }
    static fromFieldsWithTypes(item) {
        if (!isHealthInfusedInBee(item.type)) {
            throw new Error("not a HealthInfusedInBee type");
        }
        return HealthInfusedInBee.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), honeyAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_added), totalHoneyLocked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_honey_locked), weightedHoneyLocked: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.weighted_honey_locked), healthIncrease: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.health_increase), honeyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_health) });
    }
    static fromBcs(data) { return HealthInfusedInBee.fromFields(HealthInfusedInBee.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), honeyAdded: this.honeyAdded.toString(), totalHoneyLocked: this.totalHoneyLocked.toString(), weightedHoneyLocked: this.weightedHoneyLocked.toString(), healthIncrease: this.healthIncrease.toString(), honeyHealth: this.honeyHealth.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HealthInfusedInBee.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), honeyAdded: (0, reified_1.decodeFromJSONField)("u64", field.honeyAdded), totalHoneyLocked: (0, reified_1.decodeFromJSONField)("u64", field.totalHoneyLocked), weightedHoneyLocked: (0, reified_1.decodeFromJSONField)("u128", field.weightedHoneyLocked), healthIncrease: (0, reified_1.decodeFromJSONField)("u64", field.healthIncrease), honeyHealth: (0, reified_1.decodeFromJSONField)("u64", field.honeyHealth) }); }
    static fromJSON(json) {
        if (json.$typeName !== HealthInfusedInBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HealthInfusedInBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHealthInfusedInBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HealthInfusedInBee object`);
    } return HealthInfusedInBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHealthInfusedInBee(data.bcs.type)) {
                throw new Error(`object at is not a HealthInfusedInBee object`);
            }
            return HealthInfusedInBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HealthInfusedInBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HealthInfusedInBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHealthInfusedInBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HealthInfusedInBee object`);
        }
        return HealthInfusedInBee.fromSuiObjectData(res.data);
    }
}
exports.HealthInfusedInBee = HealthInfusedInBee;
HealthInfusedInBee.$typeName = `${PKG_V1}::dragon_trainer::HealthInfusedInBee`;
HealthInfusedInBee.$numTypeParams = 0;
HealthInfusedInBee.$isPhantom = [];
/* ============================== HiddenBeeDeleted =============================== */
function isHiddenBeeDeleted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiddenBeeDeleted`; }
class HiddenBeeDeleted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiddenBeeDeleted.$typeName;
        this.$isPhantom = HiddenBeeDeleted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiddenBeeDeleted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.deletedAt = fields.deletedAt;
        ;
        this.version = fields.version;
        ;
        this.winningsSum = fields.winningsSum;
        ;
        this.loosingSum = fields.loosingSum;
        ;
        this.dragonDustEmitted = fields.dragonDustEmitted;
    }
    static reified() { return { typeName: HiddenBeeDeleted.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiddenBeeDeleted.$typeName, ...[]), typeArgs: [], isPhantom: HiddenBeeDeleted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiddenBeeDeleted.fromFields(fields), fromFieldsWithTypes: (item) => HiddenBeeDeleted.fromFieldsWithTypes(item), fromBcs: (data) => HiddenBeeDeleted.fromBcs(data), bcs: HiddenBeeDeleted.bcs, fromJSONField: (field) => HiddenBeeDeleted.fromJSONField(field), fromJSON: (json) => HiddenBeeDeleted.fromJSON(json), fromSuiParsedData: (content) => HiddenBeeDeleted.fromSuiParsedData(content), fromSuiObjectData: (content) => HiddenBeeDeleted.fromSuiObjectData(content), fetch: async (client, id) => HiddenBeeDeleted.fetch(client, id), new: (fields) => { return new HiddenBeeDeleted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiddenBeeDeleted.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiddenBeeDeleted.reified()); }
    static get p() { return HiddenBeeDeleted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiddenBeeDeleted", {
            deleted_at: bcs_1.bcs.u64(), version: bcs_1.bcs.u64(), winnings_sum: bcs_1.bcs.u64(), loosing_sum: bcs_1.bcs.u64(), dragon_dust_emitted: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiddenBeeDeleted.reified().new({ deletedAt: (0, reified_1.decodeFromFields)("u64", fields.deleted_at), version: (0, reified_1.decodeFromFields)("u64", fields.version), winningsSum: (0, reified_1.decodeFromFields)("u64", fields.winnings_sum), loosingSum: (0, reified_1.decodeFromFields)("u64", fields.loosing_sum), dragonDustEmitted: (0, reified_1.decodeFromFields)("u64", fields.dragon_dust_emitted) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiddenBeeDeleted(item.type)) {
            throw new Error("not a HiddenBeeDeleted type");
        }
        return HiddenBeeDeleted.reified().new({ deletedAt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deleted_at), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), winningsSum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.winnings_sum), loosingSum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.loosing_sum), dragonDustEmitted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dragon_dust_emitted) });
    }
    static fromBcs(data) { return HiddenBeeDeleted.fromFields(HiddenBeeDeleted.bcs.parse(data)); }
    toJSONField() {
        return {
            deletedAt: this.deletedAt.toString(), version: this.version.toString(), winningsSum: this.winningsSum.toString(), loosingSum: this.loosingSum.toString(), dragonDustEmitted: this.dragonDustEmitted.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiddenBeeDeleted.reified().new({ deletedAt: (0, reified_1.decodeFromJSONField)("u64", field.deletedAt), version: (0, reified_1.decodeFromJSONField)("u64", field.version), winningsSum: (0, reified_1.decodeFromJSONField)("u64", field.winningsSum), loosingSum: (0, reified_1.decodeFromJSONField)("u64", field.loosingSum), dragonDustEmitted: (0, reified_1.decodeFromJSONField)("u64", field.dragonDustEmitted) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiddenBeeDeleted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiddenBeeDeleted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiddenBeeDeleted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiddenBeeDeleted object`);
    } return HiddenBeeDeleted.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiddenBeeDeleted(data.bcs.type)) {
                throw new Error(`object at is not a HiddenBeeDeleted object`);
            }
            return HiddenBeeDeleted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiddenBeeDeleted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiddenBeeDeleted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiddenBeeDeleted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiddenBeeDeleted object`);
        }
        return HiddenBeeDeleted.fromSuiObjectData(res.data);
    }
}
exports.HiddenBeeDeleted = HiddenBeeDeleted;
HiddenBeeDeleted.$typeName = `${PKG_V1}::dragon_trainer::HiddenBeeDeleted`;
HiddenBeeDeleted.$numTypeParams = 0;
HiddenBeeDeleted.$isPhantom = [];
/* ============================== HiddenMysticalBee =============================== */
function isHiddenMysticalBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiddenMysticalBee`; }
class HiddenMysticalBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiddenMysticalBee.$typeName;
        this.$isPhantom = HiddenMysticalBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiddenMysticalBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.mysticalBee = fields.mysticalBee;
        ;
        this.winnings = fields.winnings;
        ;
        this.winningsSum = fields.winningsSum;
        ;
        this.loosingSum = fields.loosingSum;
        ;
        this.dragonDustEmitted = fields.dragonDustEmitted;
    }
    static reified() { return { typeName: HiddenMysticalBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiddenMysticalBee.$typeName, ...[]), typeArgs: [], isPhantom: HiddenMysticalBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiddenMysticalBee.fromFields(fields), fromFieldsWithTypes: (item) => HiddenMysticalBee.fromFieldsWithTypes(item), fromBcs: (data) => HiddenMysticalBee.fromBcs(data), bcs: HiddenMysticalBee.bcs, fromJSONField: (field) => HiddenMysticalBee.fromJSONField(field), fromJSON: (json) => HiddenMysticalBee.fromJSON(json), fromSuiParsedData: (content) => HiddenMysticalBee.fromSuiParsedData(content), fromSuiObjectData: (content) => HiddenMysticalBee.fromSuiObjectData(content), fetch: async (client, id) => HiddenMysticalBee.fetch(client, id), new: (fields) => { return new HiddenMysticalBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiddenMysticalBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiddenMysticalBee.reified()); }
    static get p() { return HiddenMysticalBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiddenMysticalBee", {
            mystical_bee: structs_2.Option.bcs(MysticalBee.bcs), winnings: structs_4.Balance.bcs, winnings_sum: bcs_1.bcs.u64(), loosing_sum: bcs_1.bcs.u64(), dragon_dust_emitted: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiddenMysticalBee.reified().new({ mysticalBee: (0, reified_1.decodeFromFields)(structs_2.Option.reified(MysticalBee.reified()), fields.mystical_bee), winnings: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.winnings), winningsSum: (0, reified_1.decodeFromFields)("u64", fields.winnings_sum), loosingSum: (0, reified_1.decodeFromFields)("u64", fields.loosing_sum), dragonDustEmitted: (0, reified_1.decodeFromFields)("u64", fields.dragon_dust_emitted) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiddenMysticalBee(item.type)) {
            throw new Error("not a HiddenMysticalBee type");
        }
        return HiddenMysticalBee.reified().new({ mysticalBee: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(MysticalBee.reified()), item.fields.mystical_bee), winnings: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.winnings), winningsSum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.winnings_sum), loosingSum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.loosing_sum), dragonDustEmitted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dragon_dust_emitted) });
    }
    static fromBcs(data) { return HiddenMysticalBee.fromFields(HiddenMysticalBee.bcs.parse(data)); }
    toJSONField() {
        return {
            mysticalBee: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${MysticalBee.$typeName}>`, this.mysticalBee), winnings: this.winnings.toJSONField(), winningsSum: this.winningsSum.toString(), loosingSum: this.loosingSum.toString(), dragonDustEmitted: this.dragonDustEmitted.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiddenMysticalBee.reified().new({ mysticalBee: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(MysticalBee.reified()), field.mysticalBee), winnings: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.winnings), winningsSum: (0, reified_1.decodeFromJSONField)("u64", field.winningsSum), loosingSum: (0, reified_1.decodeFromJSONField)("u64", field.loosingSum), dragonDustEmitted: (0, reified_1.decodeFromJSONField)("u64", field.dragonDustEmitted) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiddenMysticalBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiddenMysticalBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiddenMysticalBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiddenMysticalBee object`);
    } return HiddenMysticalBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiddenMysticalBee(data.bcs.type)) {
                throw new Error(`object at is not a HiddenMysticalBee object`);
            }
            return HiddenMysticalBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiddenMysticalBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiddenMysticalBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiddenMysticalBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiddenMysticalBee object`);
        }
        return HiddenMysticalBee.fromSuiObjectData(res.data);
    }
}
exports.HiddenMysticalBee = HiddenMysticalBee;
HiddenMysticalBee.$typeName = `${PKG_V1}::dragon_trainer::HiddenMysticalBee`;
HiddenMysticalBee.$numTypeParams = 0;
HiddenMysticalBee.$isPhantom = [];
/* ============================== HiddenWorld =============================== */
function isHiddenWorld(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiddenWorld`; }
class HiddenWorld {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiddenWorld.$typeName;
        this.$isPhantom = HiddenWorld.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiddenWorld.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.cap = fields.cap;
        ;
        this.suiPool = fields.suiPool;
        ;
        this.config = fields.config;
        ;
        this.avgQuestsPlayed = fields.avgQuestsPlayed;
        ;
        this.avgDragonDustEmitted = fields.avgDragonDustEmitted;
        ;
        this.totalQuestsCount = fields.totalQuestsCount;
        ;
        this.hiddenBees = fields.hiddenBees;
        ;
        this.hiddenBeesList = fields.hiddenBeesList;
        ;
        this.listCount = fields.listCount;
        ;
        this.trainerSessions = fields.trainerSessions;
        ;
        this.activeTrainers = fields.activeTrainers;
        ;
        this.activeTrainersList = fields.activeTrainersList;
        ;
        this.activeTrainersIndexes = fields.activeTrainersIndexes;
        ;
        this.p2PQuests = fields.p2PQuests;
        ;
        this.beesToCollect = fields.beesToCollect;
        ;
        this.dragonDust = fields.dragonDust;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: HiddenWorld.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiddenWorld.$typeName, ...[]), typeArgs: [], isPhantom: HiddenWorld.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiddenWorld.fromFields(fields), fromFieldsWithTypes: (item) => HiddenWorld.fromFieldsWithTypes(item), fromBcs: (data) => HiddenWorld.fromBcs(data), bcs: HiddenWorld.bcs, fromJSONField: (field) => HiddenWorld.fromJSONField(field), fromJSON: (json) => HiddenWorld.fromJSON(json), fromSuiParsedData: (content) => HiddenWorld.fromSuiParsedData(content), fromSuiObjectData: (content) => HiddenWorld.fromSuiObjectData(content), fetch: async (client, id) => HiddenWorld.fetch(client, id), new: (fields) => { return new HiddenWorld([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiddenWorld.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiddenWorld.reified()); }
    static get p() { return HiddenWorld.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiddenWorld", {
            id: structs_6.UID.bcs, cap: structs_11.HiddenWorldCapability.bcs, sui_pool: structs_4.Balance.bcs, config: HiddenWorldConfig.bcs, avg_quests_played: bcs_1.bcs.u64(), avg_dragon_dust_emitted: bcs_1.bcs.u64(), total_quests_count: bcs_1.bcs.u256(), hidden_bees: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), hidden_bees_list: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), list_count: bcs_1.bcs.u64(), trainer_sessions: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), active_trainers: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), active_trainers_list: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), active_trainers_indexes: bcs_1.bcs.vector(bcs_1.bcs.u64()), p2p_quests: structs_5.LinkedTable.bcs(structs_3.String.bcs), bees_to_collect: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), dragon_dust: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiddenWorld.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), cap: (0, reified_1.decodeFromFields)(structs_11.HiddenWorldCapability.reified(), fields.cap), suiPool: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.sui_pool), config: (0, reified_1.decodeFromFields)(HiddenWorldConfig.reified(), fields.config), avgQuestsPlayed: (0, reified_1.decodeFromFields)("u64", fields.avg_quests_played), avgDragonDustEmitted: (0, reified_1.decodeFromFields)("u64", fields.avg_dragon_dust_emitted), totalQuestsCount: (0, reified_1.decodeFromFields)("u256", fields.total_quests_count), hiddenBees: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(HiddenMysticalBee.reified())), fields.hidden_bees), hiddenBeesList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector("u64"))), fields.hidden_bees_list), listCount: (0, reified_1.decodeFromFields)("u64", fields.list_count), trainerSessions: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(TrainerSession.reified())), fields.trainer_sessions), activeTrainers: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(QuestRequest.reified())), fields.active_trainers), activeTrainersList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), fields.active_trainers_list), activeTrainersIndexes: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.active_trainers_indexes), p2PQuests: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(P2pGameSession.reified())), fields.p2p_quests), beesToCollect: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector(MysticalBee.reified()))), fields.bees_to_collect), dragonDust: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(DragonDust.reified())), fields.dragon_dust), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiddenWorld(item.type)) {
            throw new Error("not a HiddenWorld type");
        }
        return HiddenWorld.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), cap: (0, reified_1.decodeFromFieldsWithTypes)(structs_11.HiddenWorldCapability.reified(), item.fields.cap), suiPool: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.sui_pool), config: (0, reified_1.decodeFromFieldsWithTypes)(HiddenWorldConfig.reified(), item.fields.config), avgQuestsPlayed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.avg_quests_played), avgDragonDustEmitted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.avg_dragon_dust_emitted), totalQuestsCount: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.total_quests_count), hiddenBees: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(HiddenMysticalBee.reified())), item.fields.hidden_bees), hiddenBeesList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector("u64"))), item.fields.hidden_bees_list), listCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.list_count), trainerSessions: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(TrainerSession.reified())), item.fields.trainer_sessions), activeTrainers: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(QuestRequest.reified())), item.fields.active_trainers), activeTrainersList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), item.fields.active_trainers_list), activeTrainersIndexes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.active_trainers_indexes), p2PQuests: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(P2pGameSession.reified())), item.fields.p2p_quests), beesToCollect: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector(MysticalBee.reified()))), item.fields.bees_to_collect), dragonDust: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(DragonDust.reified())), item.fields.dragon_dust), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiddenWorld.fromFields(HiddenWorld.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, cap: this.cap.toJSONField(), suiPool: this.suiPool.toJSONField(), config: this.config.toJSONField(), avgQuestsPlayed: this.avgQuestsPlayed.toString(), avgDragonDustEmitted: this.avgDragonDustEmitted.toString(), totalQuestsCount: this.totalQuestsCount.toString(), hiddenBees: this.hiddenBees.toJSONField(), hiddenBeesList: this.hiddenBeesList.toJSONField(), listCount: this.listCount.toString(), trainerSessions: this.trainerSessions.toJSONField(), activeTrainers: this.activeTrainers.toJSONField(), activeTrainersList: this.activeTrainersList.toJSONField(), activeTrainersIndexes: (0, reified_1.fieldToJSON)(`vector<u64>`, this.activeTrainersIndexes), p2PQuests: this.p2PQuests.toJSONField(), beesToCollect: this.beesToCollect.toJSONField(), dragonDust: this.dragonDust.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiddenWorld.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), cap: (0, reified_1.decodeFromJSONField)(structs_11.HiddenWorldCapability.reified(), field.cap), suiPool: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.suiPool), config: (0, reified_1.decodeFromJSONField)(HiddenWorldConfig.reified(), field.config), avgQuestsPlayed: (0, reified_1.decodeFromJSONField)("u64", field.avgQuestsPlayed), avgDragonDustEmitted: (0, reified_1.decodeFromJSONField)("u64", field.avgDragonDustEmitted), totalQuestsCount: (0, reified_1.decodeFromJSONField)("u256", field.totalQuestsCount), hiddenBees: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(HiddenMysticalBee.reified())), field.hiddenBees), hiddenBeesList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector("u64"))), field.hiddenBeesList), listCount: (0, reified_1.decodeFromJSONField)("u64", field.listCount), trainerSessions: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(TrainerSession.reified())), field.trainerSessions), activeTrainers: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(QuestRequest.reified())), field.activeTrainers), activeTrainersList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom("address")), field.activeTrainersList), activeTrainersIndexes: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.activeTrainersIndexes), p2PQuests: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_3.String.reified(), reified.phantom(P2pGameSession.reified())), field.p2PQuests), beesToCollect: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(reified.vector(MysticalBee.reified()))), field.beesToCollect), dragonDust: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(DragonDust.reified())), field.dragonDust), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiddenWorld.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiddenWorld.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiddenWorld(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiddenWorld object`);
    } return HiddenWorld.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiddenWorld(data.bcs.type)) {
                throw new Error(`object at is not a HiddenWorld object`);
            }
            return HiddenWorld.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiddenWorld.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiddenWorld object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiddenWorld(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiddenWorld object`);
        }
        return HiddenWorld.fromSuiObjectData(res.data);
    }
}
exports.HiddenWorld = HiddenWorld;
HiddenWorld.$typeName = `${PKG_V1}::dragon_trainer::HiddenWorld`;
HiddenWorld.$numTypeParams = 0;
HiddenWorld.$isPhantom = [];
/* ============================== HiddenWorldConfig =============================== */
function isHiddenWorldConfig(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiddenWorldConfig`; }
class HiddenWorldConfig {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiddenWorldConfig.$typeName;
        this.$isPhantom = HiddenWorldConfig.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiddenWorldConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.isActive = fields.isActive;
        ;
        this.maxActiveDuration = fields.maxActiveDuration;
        ;
        this.turnDuration = fields.turnDuration;
        ;
        this.expiryPenaltyPct = fields.expiryPenaltyPct;
        ;
        this.minSuiBetAmt = fields.minSuiBetAmt;
        ;
        this.maxSuiBetAmt = fields.maxSuiBetAmt;
        ;
        this.sessionHealth = fields.sessionHealth;
        ;
        this.sessionEnergy = fields.sessionEnergy;
        ;
        this.minDragonDustChance = fields.minDragonDustChance;
        ;
        this.maxDragonDustChance = fields.maxDragonDustChance;
        ;
        this.halfLife = fields.halfLife;
        ;
        this.healthPctToEmitDust = fields.healthPctToEmitDust;
        ;
        this.maxCapabilityIncrease = fields.maxCapabilityIncrease;
        ;
        this.maxPowerPct = fields.maxPowerPct;
    }
    static reified() { return { typeName: HiddenWorldConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiddenWorldConfig.$typeName, ...[]), typeArgs: [], isPhantom: HiddenWorldConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiddenWorldConfig.fromFields(fields), fromFieldsWithTypes: (item) => HiddenWorldConfig.fromFieldsWithTypes(item), fromBcs: (data) => HiddenWorldConfig.fromBcs(data), bcs: HiddenWorldConfig.bcs, fromJSONField: (field) => HiddenWorldConfig.fromJSONField(field), fromJSON: (json) => HiddenWorldConfig.fromJSON(json), fromSuiParsedData: (content) => HiddenWorldConfig.fromSuiParsedData(content), fromSuiObjectData: (content) => HiddenWorldConfig.fromSuiObjectData(content), fetch: async (client, id) => HiddenWorldConfig.fetch(client, id), new: (fields) => { return new HiddenWorldConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiddenWorldConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiddenWorldConfig.reified()); }
    static get p() { return HiddenWorldConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiddenWorldConfig", {
            is_active: bcs_1.bcs.bool(), max_active_duration: bcs_1.bcs.u64(), turn_duration: bcs_1.bcs.u64(), expiry_penalty_pct: bcs_1.bcs.u64(), min_sui_bet_amt: bcs_1.bcs.u64(), max_sui_bet_amt: bcs_1.bcs.u64(), session_health: bcs_1.bcs.u64(), session_energy: bcs_1.bcs.u64(), min_dragon_dust_chance: bcs_1.bcs.u64(), max_dragon_dust_chance: bcs_1.bcs.u64(), half_life: bcs_1.bcs.u64(), health_pct_to_emit_dust: bcs_1.bcs.u64(), max_capability_increase: bcs_1.bcs.u64(), max_power_pct: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiddenWorldConfig.reified().new({ isActive: (0, reified_1.decodeFromFields)("bool", fields.is_active), maxActiveDuration: (0, reified_1.decodeFromFields)("u64", fields.max_active_duration), turnDuration: (0, reified_1.decodeFromFields)("u64", fields.turn_duration), expiryPenaltyPct: (0, reified_1.decodeFromFields)("u64", fields.expiry_penalty_pct), minSuiBetAmt: (0, reified_1.decodeFromFields)("u64", fields.min_sui_bet_amt), maxSuiBetAmt: (0, reified_1.decodeFromFields)("u64", fields.max_sui_bet_amt), sessionHealth: (0, reified_1.decodeFromFields)("u64", fields.session_health), sessionEnergy: (0, reified_1.decodeFromFields)("u64", fields.session_energy), minDragonDustChance: (0, reified_1.decodeFromFields)("u64", fields.min_dragon_dust_chance), maxDragonDustChance: (0, reified_1.decodeFromFields)("u64", fields.max_dragon_dust_chance), halfLife: (0, reified_1.decodeFromFields)("u64", fields.half_life), healthPctToEmitDust: (0, reified_1.decodeFromFields)("u64", fields.health_pct_to_emit_dust), maxCapabilityIncrease: (0, reified_1.decodeFromFields)("u64", fields.max_capability_increase), maxPowerPct: (0, reified_1.decodeFromFields)("u64", fields.max_power_pct) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiddenWorldConfig(item.type)) {
            throw new Error("not a HiddenWorldConfig type");
        }
        return HiddenWorldConfig.reified().new({ isActive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_active), maxActiveDuration: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_active_duration), turnDuration: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.turn_duration), expiryPenaltyPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiry_penalty_pct), minSuiBetAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_sui_bet_amt), maxSuiBetAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_sui_bet_amt), sessionHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.session_health), sessionEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.session_energy), minDragonDustChance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_dragon_dust_chance), maxDragonDustChance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_dragon_dust_chance), halfLife: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.half_life), healthPctToEmitDust: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.health_pct_to_emit_dust), maxCapabilityIncrease: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_capability_increase), maxPowerPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_power_pct) });
    }
    static fromBcs(data) { return HiddenWorldConfig.fromFields(HiddenWorldConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            isActive: this.isActive, maxActiveDuration: this.maxActiveDuration.toString(), turnDuration: this.turnDuration.toString(), expiryPenaltyPct: this.expiryPenaltyPct.toString(), minSuiBetAmt: this.minSuiBetAmt.toString(), maxSuiBetAmt: this.maxSuiBetAmt.toString(), sessionHealth: this.sessionHealth.toString(), sessionEnergy: this.sessionEnergy.toString(), minDragonDustChance: this.minDragonDustChance.toString(), maxDragonDustChance: this.maxDragonDustChance.toString(), halfLife: this.halfLife.toString(), healthPctToEmitDust: this.healthPctToEmitDust.toString(), maxCapabilityIncrease: this.maxCapabilityIncrease.toString(), maxPowerPct: this.maxPowerPct.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiddenWorldConfig.reified().new({ isActive: (0, reified_1.decodeFromJSONField)("bool", field.isActive), maxActiveDuration: (0, reified_1.decodeFromJSONField)("u64", field.maxActiveDuration), turnDuration: (0, reified_1.decodeFromJSONField)("u64", field.turnDuration), expiryPenaltyPct: (0, reified_1.decodeFromJSONField)("u64", field.expiryPenaltyPct), minSuiBetAmt: (0, reified_1.decodeFromJSONField)("u64", field.minSuiBetAmt), maxSuiBetAmt: (0, reified_1.decodeFromJSONField)("u64", field.maxSuiBetAmt), sessionHealth: (0, reified_1.decodeFromJSONField)("u64", field.sessionHealth), sessionEnergy: (0, reified_1.decodeFromJSONField)("u64", field.sessionEnergy), minDragonDustChance: (0, reified_1.decodeFromJSONField)("u64", field.minDragonDustChance), maxDragonDustChance: (0, reified_1.decodeFromJSONField)("u64", field.maxDragonDustChance), halfLife: (0, reified_1.decodeFromJSONField)("u64", field.halfLife), healthPctToEmitDust: (0, reified_1.decodeFromJSONField)("u64", field.healthPctToEmitDust), maxCapabilityIncrease: (0, reified_1.decodeFromJSONField)("u64", field.maxCapabilityIncrease), maxPowerPct: (0, reified_1.decodeFromJSONField)("u64", field.maxPowerPct) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiddenWorldConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiddenWorldConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiddenWorldConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiddenWorldConfig object`);
    } return HiddenWorldConfig.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiddenWorldConfig(data.bcs.type)) {
                throw new Error(`object at is not a HiddenWorldConfig object`);
            }
            return HiddenWorldConfig.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiddenWorldConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiddenWorldConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiddenWorldConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiddenWorldConfig object`);
        }
        return HiddenWorldConfig.fromSuiObjectData(res.data);
    }
}
exports.HiddenWorldConfig = HiddenWorldConfig;
HiddenWorldConfig.$typeName = `${PKG_V1}::dragon_trainer::HiddenWorldConfig`;
HiddenWorldConfig.$numTypeParams = 0;
HiddenWorldConfig.$isPhantom = [];
/* ============================== HiddenWorldQuest =============================== */
function isHiddenWorldQuest(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiddenWorldQuest`; }
class HiddenWorldQuest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiddenWorldQuest.$typeName;
        this.$isPhantom = HiddenWorldQuest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiddenWorldQuest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddr1 = fields.trainerAddr1;
        ;
        this.trainerAddr2 = fields.trainerAddr2;
        ;
        this.nextTurn = fields.nextTurn;
        ;
        this.lastActionTs = fields.lastActionTs;
        ;
        this.suiBetBal = fields.suiBetBal;
        ;
        this.startGameHealth = fields.startGameHealth;
        ;
        this.startGameEnergy = fields.startGameEnergy;
        ;
        this.userBeeHealth = fields.userBeeHealth;
        ;
        this.userBeeEnergy = fields.userBeeEnergy;
        ;
        this.userDragonBee = fields.userDragonBee;
        ;
        this.user2BeeHealth = fields.user2BeeHealth;
        ;
        this.user2BeeEnergy = fields.user2BeeEnergy;
        ;
        this.user2DragonBee = fields.user2DragonBee;
    }
    static reified() { return { typeName: HiddenWorldQuest.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiddenWorldQuest.$typeName, ...[]), typeArgs: [], isPhantom: HiddenWorldQuest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiddenWorldQuest.fromFields(fields), fromFieldsWithTypes: (item) => HiddenWorldQuest.fromFieldsWithTypes(item), fromBcs: (data) => HiddenWorldQuest.fromBcs(data), bcs: HiddenWorldQuest.bcs, fromJSONField: (field) => HiddenWorldQuest.fromJSONField(field), fromJSON: (json) => HiddenWorldQuest.fromJSON(json), fromSuiParsedData: (content) => HiddenWorldQuest.fromSuiParsedData(content), fromSuiObjectData: (content) => HiddenWorldQuest.fromSuiObjectData(content), fetch: async (client, id) => HiddenWorldQuest.fetch(client, id), new: (fields) => { return new HiddenWorldQuest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiddenWorldQuest.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiddenWorldQuest.reified()); }
    static get p() { return HiddenWorldQuest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiddenWorldQuest", {
            trainer_addr1: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr2: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), next_turn: bcs_1.bcs.u8(), last_action_ts: bcs_1.bcs.u64(), sui_bet_bal: structs_4.Balance.bcs, start_game_health: bcs_1.bcs.u64(), start_game_energy: bcs_1.bcs.u64(), user_bee_health: bcs_1.bcs.u64(), user_bee_energy: bcs_1.bcs.u64(), user_dragon_bee: MysticalBee.bcs, user2_bee_health: bcs_1.bcs.u64(), user2_bee_energy: bcs_1.bcs.u64(), user2_dragon_bee: MysticalBee.bcs
        });
    }
    ;
    static fromFields(fields) { return HiddenWorldQuest.reified().new({ trainerAddr1: (0, reified_1.decodeFromFields)("address", fields.trainer_addr1), trainerAddr2: (0, reified_1.decodeFromFields)("address", fields.trainer_addr2), nextTurn: (0, reified_1.decodeFromFields)("u8", fields.next_turn), lastActionTs: (0, reified_1.decodeFromFields)("u64", fields.last_action_ts), suiBetBal: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.sui_bet_bal), startGameHealth: (0, reified_1.decodeFromFields)("u64", fields.start_game_health), startGameEnergy: (0, reified_1.decodeFromFields)("u64", fields.start_game_energy), userBeeHealth: (0, reified_1.decodeFromFields)("u64", fields.user_bee_health), userBeeEnergy: (0, reified_1.decodeFromFields)("u64", fields.user_bee_energy), userDragonBee: (0, reified_1.decodeFromFields)(MysticalBee.reified(), fields.user_dragon_bee), user2BeeHealth: (0, reified_1.decodeFromFields)("u64", fields.user2_bee_health), user2BeeEnergy: (0, reified_1.decodeFromFields)("u64", fields.user2_bee_energy), user2DragonBee: (0, reified_1.decodeFromFields)(MysticalBee.reified(), fields.user2_dragon_bee) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiddenWorldQuest(item.type)) {
            throw new Error("not a HiddenWorldQuest type");
        }
        return HiddenWorldQuest.reified().new({ trainerAddr1: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr1), trainerAddr2: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr2), nextTurn: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.next_turn), lastActionTs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_action_ts), suiBetBal: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.sui_bet_bal), startGameHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_game_health), startGameEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_game_energy), userBeeHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_bee_health), userBeeEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user_bee_energy), userDragonBee: (0, reified_1.decodeFromFieldsWithTypes)(MysticalBee.reified(), item.fields.user_dragon_bee), user2BeeHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user2_bee_health), user2BeeEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.user2_bee_energy), user2DragonBee: (0, reified_1.decodeFromFieldsWithTypes)(MysticalBee.reified(), item.fields.user2_dragon_bee) });
    }
    static fromBcs(data) { return HiddenWorldQuest.fromFields(HiddenWorldQuest.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddr1: this.trainerAddr1, trainerAddr2: this.trainerAddr2, nextTurn: this.nextTurn, lastActionTs: this.lastActionTs.toString(), suiBetBal: this.suiBetBal.toJSONField(), startGameHealth: this.startGameHealth.toString(), startGameEnergy: this.startGameEnergy.toString(), userBeeHealth: this.userBeeHealth.toString(), userBeeEnergy: this.userBeeEnergy.toString(), userDragonBee: this.userDragonBee.toJSONField(), user2BeeHealth: this.user2BeeHealth.toString(), user2BeeEnergy: this.user2BeeEnergy.toString(), user2DragonBee: this.user2DragonBee.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiddenWorldQuest.reified().new({ trainerAddr1: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr1), trainerAddr2: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr2), nextTurn: (0, reified_1.decodeFromJSONField)("u8", field.nextTurn), lastActionTs: (0, reified_1.decodeFromJSONField)("u64", field.lastActionTs), suiBetBal: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.suiBetBal), startGameHealth: (0, reified_1.decodeFromJSONField)("u64", field.startGameHealth), startGameEnergy: (0, reified_1.decodeFromJSONField)("u64", field.startGameEnergy), userBeeHealth: (0, reified_1.decodeFromJSONField)("u64", field.userBeeHealth), userBeeEnergy: (0, reified_1.decodeFromJSONField)("u64", field.userBeeEnergy), userDragonBee: (0, reified_1.decodeFromJSONField)(MysticalBee.reified(), field.userDragonBee), user2BeeHealth: (0, reified_1.decodeFromJSONField)("u64", field.user2BeeHealth), user2BeeEnergy: (0, reified_1.decodeFromJSONField)("u64", field.user2BeeEnergy), user2DragonBee: (0, reified_1.decodeFromJSONField)(MysticalBee.reified(), field.user2DragonBee) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiddenWorldQuest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiddenWorldQuest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiddenWorldQuest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiddenWorldQuest object`);
    } return HiddenWorldQuest.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiddenWorldQuest(data.bcs.type)) {
                throw new Error(`object at is not a HiddenWorldQuest object`);
            }
            return HiddenWorldQuest.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiddenWorldQuest.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiddenWorldQuest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiddenWorldQuest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiddenWorldQuest object`);
        }
        return HiddenWorldQuest.fromSuiObjectData(res.data);
    }
}
exports.HiddenWorldQuest = HiddenWorldQuest;
HiddenWorldQuest.$typeName = `${PKG_V1}::dragon_trainer::HiddenWorldQuest`;
HiddenWorldQuest.$numTypeParams = 0;
HiddenWorldQuest.$isPhantom = [];
/* ============================== HiddenWorldRewardsClaimed =============================== */
function isHiddenWorldRewardsClaimed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiddenWorldRewardsClaimed`; }
class HiddenWorldRewardsClaimed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiddenWorldRewardsClaimed.$typeName;
        this.$isPhantom = HiddenWorldRewardsClaimed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiddenWorldRewardsClaimed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddress = fields.trainerAddress;
        ;
        this.suiWinnings = fields.suiWinnings;
        ;
        this.claimedBees = fields.claimedBees;
        ;
        this.claimedPerBeeAmt = fields.claimedPerBeeAmt;
    }
    static reified() { return { typeName: HiddenWorldRewardsClaimed.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiddenWorldRewardsClaimed.$typeName, ...[]), typeArgs: [], isPhantom: HiddenWorldRewardsClaimed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiddenWorldRewardsClaimed.fromFields(fields), fromFieldsWithTypes: (item) => HiddenWorldRewardsClaimed.fromFieldsWithTypes(item), fromBcs: (data) => HiddenWorldRewardsClaimed.fromBcs(data), bcs: HiddenWorldRewardsClaimed.bcs, fromJSONField: (field) => HiddenWorldRewardsClaimed.fromJSONField(field), fromJSON: (json) => HiddenWorldRewardsClaimed.fromJSON(json), fromSuiParsedData: (content) => HiddenWorldRewardsClaimed.fromSuiParsedData(content), fromSuiObjectData: (content) => HiddenWorldRewardsClaimed.fromSuiObjectData(content), fetch: async (client, id) => HiddenWorldRewardsClaimed.fetch(client, id), new: (fields) => { return new HiddenWorldRewardsClaimed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiddenWorldRewardsClaimed.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiddenWorldRewardsClaimed.reified()); }
    static get p() { return HiddenWorldRewardsClaimed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiddenWorldRewardsClaimed", {
            trainer_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), sui_winnings: bcs_1.bcs.u64(), claimed_bees: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_per_bee_amt: bcs_1.bcs.vector(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return HiddenWorldRewardsClaimed.reified().new({ trainerAddress: (0, reified_1.decodeFromFields)("address", fields.trainer_address), suiWinnings: (0, reified_1.decodeFromFields)("u64", fields.sui_winnings), claimedBees: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_bees), claimedPerBeeAmt: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_per_bee_amt) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiddenWorldRewardsClaimed(item.type)) {
            throw new Error("not a HiddenWorldRewardsClaimed type");
        }
        return HiddenWorldRewardsClaimed.reified().new({ trainerAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_address), suiWinnings: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_winnings), claimedBees: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_bees), claimedPerBeeAmt: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_per_bee_amt) });
    }
    static fromBcs(data) { return HiddenWorldRewardsClaimed.fromFields(HiddenWorldRewardsClaimed.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddress: this.trainerAddress, suiWinnings: this.suiWinnings.toString(), claimedBees: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedBees), claimedPerBeeAmt: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedPerBeeAmt),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiddenWorldRewardsClaimed.reified().new({ trainerAddress: (0, reified_1.decodeFromJSONField)("address", field.trainerAddress), suiWinnings: (0, reified_1.decodeFromJSONField)("u64", field.suiWinnings), claimedBees: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedBees), claimedPerBeeAmt: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedPerBeeAmt) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiddenWorldRewardsClaimed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiddenWorldRewardsClaimed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiddenWorldRewardsClaimed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiddenWorldRewardsClaimed object`);
    } return HiddenWorldRewardsClaimed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiddenWorldRewardsClaimed(data.bcs.type)) {
                throw new Error(`object at is not a HiddenWorldRewardsClaimed object`);
            }
            return HiddenWorldRewardsClaimed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiddenWorldRewardsClaimed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiddenWorldRewardsClaimed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiddenWorldRewardsClaimed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiddenWorldRewardsClaimed object`);
        }
        return HiddenWorldRewardsClaimed.fromSuiObjectData(res.data);
    }
}
exports.HiddenWorldRewardsClaimed = HiddenWorldRewardsClaimed;
HiddenWorldRewardsClaimed.$typeName = `${PKG_V1}::dragon_trainer::HiddenWorldRewardsClaimed`;
HiddenWorldRewardsClaimed.$numTypeParams = 0;
HiddenWorldRewardsClaimed.$isPhantom = [];
/* ============================== HiveAddedForHarvest =============================== */
function isHiveAddedForHarvest(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiveAddedForHarvest`; }
class HiveAddedForHarvest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveAddedForHarvest.$typeName;
        this.$isPhantom = HiveAddedForHarvest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveAddedForHarvest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.yieldAdded = fields.yieldAdded;
    }
    static reified() { return { typeName: HiveAddedForHarvest.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAddedForHarvest.$typeName, ...[]), typeArgs: [], isPhantom: HiveAddedForHarvest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAddedForHarvest.fromFields(fields), fromFieldsWithTypes: (item) => HiveAddedForHarvest.fromFieldsWithTypes(item), fromBcs: (data) => HiveAddedForHarvest.fromBcs(data), bcs: HiveAddedForHarvest.bcs, fromJSONField: (field) => HiveAddedForHarvest.fromJSONField(field), fromJSON: (json) => HiveAddedForHarvest.fromJSON(json), fromSuiParsedData: (content) => HiveAddedForHarvest.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveAddedForHarvest.fromSuiObjectData(content), fetch: async (client, id) => HiveAddedForHarvest.fetch(client, id), new: (fields) => { return new HiveAddedForHarvest([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveAddedForHarvest(data.bcs.type)) {
                throw new Error(`object at is not a HiveAddedForHarvest object`);
            }
            return HiveAddedForHarvest.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveAddedForHarvest.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAddedForHarvest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAddedForHarvest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAddedForHarvest object`);
        }
        return HiveAddedForHarvest.fromSuiObjectData(res.data);
    }
}
exports.HiveAddedForHarvest = HiveAddedForHarvest;
HiveAddedForHarvest.$typeName = `${PKG_V1}::dragon_trainer::HiveAddedForHarvest`;
HiveAddedForHarvest.$numTypeParams = 0;
HiveAddedForHarvest.$isPhantom = [];
/* ============================== HiveAddedToTreasury =============================== */
function isHiveAddedToTreasury(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiveAddedToTreasury`; }
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
    static reified() { return { typeName: HiveAddedToTreasury.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveAddedToTreasury.$typeName, ...[]), typeArgs: [], isPhantom: HiveAddedToTreasury.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveAddedToTreasury.fromFields(fields), fromFieldsWithTypes: (item) => HiveAddedToTreasury.fromFieldsWithTypes(item), fromBcs: (data) => HiveAddedToTreasury.fromBcs(data), bcs: HiveAddedToTreasury.bcs, fromJSONField: (field) => HiveAddedToTreasury.fromJSONField(field), fromJSON: (json) => HiveAddedToTreasury.fromJSON(json), fromSuiParsedData: (content) => HiveAddedToTreasury.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveAddedToTreasury.fromSuiObjectData(content), fetch: async (client, id) => HiveAddedToTreasury.fetch(client, id), new: (fields) => { return new HiveAddedToTreasury([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveAddedToTreasury(data.bcs.type)) {
                throw new Error(`object at is not a HiveAddedToTreasury object`);
            }
            return HiveAddedToTreasury.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveAddedToTreasury.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveAddedToTreasury object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveAddedToTreasury(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveAddedToTreasury object`);
        }
        return HiveAddedToTreasury.fromSuiObjectData(res.data);
    }
}
exports.HiveAddedToTreasury = HiveAddedToTreasury;
HiveAddedToTreasury.$typeName = `${PKG_V1}::dragon_trainer::HiveAddedToTreasury`;
HiveAddedToTreasury.$numTypeParams = 0;
HiveAddedToTreasury.$isPhantom = [];
/* ============================== HiveEnergyInfusedInBee =============================== */
function isHiveEnergyInfusedInBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiveEnergyInfusedInBee`; }
class HiveEnergyInfusedInBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveEnergyInfusedInBee.$typeName;
        this.$isPhantom = HiveEnergyInfusedInBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveEnergyInfusedInBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.addHiveLocked = fields.addHiveLocked;
        ;
        this.hiveLockedWithBee = fields.hiveLockedWithBee;
        ;
        this.weightedHiveLocked = fields.weightedHiveLocked;
        ;
        this.unlockTimestamp = fields.unlockTimestamp;
        ;
        this.lockupWeeks = fields.lockupWeeks;
        ;
        this.hiveEnergy = fields.hiveEnergy;
        ;
        this.totalWeightedHive = fields.totalWeightedHive;
    }
    static reified() { return { typeName: HiveEnergyInfusedInBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveEnergyInfusedInBee.$typeName, ...[]), typeArgs: [], isPhantom: HiveEnergyInfusedInBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveEnergyInfusedInBee.fromFields(fields), fromFieldsWithTypes: (item) => HiveEnergyInfusedInBee.fromFieldsWithTypes(item), fromBcs: (data) => HiveEnergyInfusedInBee.fromBcs(data), bcs: HiveEnergyInfusedInBee.bcs, fromJSONField: (field) => HiveEnergyInfusedInBee.fromJSONField(field), fromJSON: (json) => HiveEnergyInfusedInBee.fromJSON(json), fromSuiParsedData: (content) => HiveEnergyInfusedInBee.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveEnergyInfusedInBee.fromSuiObjectData(content), fetch: async (client, id) => HiveEnergyInfusedInBee.fetch(client, id), new: (fields) => { return new HiveEnergyInfusedInBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveEnergyInfusedInBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveEnergyInfusedInBee.reified()); }
    static get p() { return HiveEnergyInfusedInBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveEnergyInfusedInBee", {
            version: bcs_1.bcs.u64(), add_hive_locked: bcs_1.bcs.u64(), hive_locked_with_bee: bcs_1.bcs.u64(), weighted_hive_locked: bcs_1.bcs.u128(), unlock_timestamp: bcs_1.bcs.u64(), lockup_weeks: bcs_1.bcs.u64(), hive_energy: bcs_1.bcs.u64(), total_weighted_hive: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return HiveEnergyInfusedInBee.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), addHiveLocked: (0, reified_1.decodeFromFields)("u64", fields.add_hive_locked), hiveLockedWithBee: (0, reified_1.decodeFromFields)("u64", fields.hive_locked_with_bee), weightedHiveLocked: (0, reified_1.decodeFromFields)("u128", fields.weighted_hive_locked), unlockTimestamp: (0, reified_1.decodeFromFields)("u64", fields.unlock_timestamp), lockupWeeks: (0, reified_1.decodeFromFields)("u64", fields.lockup_weeks), hiveEnergy: (0, reified_1.decodeFromFields)("u64", fields.hive_energy), totalWeightedHive: (0, reified_1.decodeFromFields)("u128", fields.total_weighted_hive) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveEnergyInfusedInBee(item.type)) {
            throw new Error("not a HiveEnergyInfusedInBee type");
        }
        return HiveEnergyInfusedInBee.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), addHiveLocked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.add_hive_locked), hiveLockedWithBee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_locked_with_bee), weightedHiveLocked: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.weighted_hive_locked), unlockTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlock_timestamp), lockupWeeks: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lockup_weeks), hiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_energy), totalWeightedHive: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.total_weighted_hive) });
    }
    static fromBcs(data) { return HiveEnergyInfusedInBee.fromFields(HiveEnergyInfusedInBee.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), addHiveLocked: this.addHiveLocked.toString(), hiveLockedWithBee: this.hiveLockedWithBee.toString(), weightedHiveLocked: this.weightedHiveLocked.toString(), unlockTimestamp: this.unlockTimestamp.toString(), lockupWeeks: this.lockupWeeks.toString(), hiveEnergy: this.hiveEnergy.toString(), totalWeightedHive: this.totalWeightedHive.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveEnergyInfusedInBee.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), addHiveLocked: (0, reified_1.decodeFromJSONField)("u64", field.addHiveLocked), hiveLockedWithBee: (0, reified_1.decodeFromJSONField)("u64", field.hiveLockedWithBee), weightedHiveLocked: (0, reified_1.decodeFromJSONField)("u128", field.weightedHiveLocked), unlockTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.unlockTimestamp), lockupWeeks: (0, reified_1.decodeFromJSONField)("u64", field.lockupWeeks), hiveEnergy: (0, reified_1.decodeFromJSONField)("u64", field.hiveEnergy), totalWeightedHive: (0, reified_1.decodeFromJSONField)("u128", field.totalWeightedHive) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveEnergyInfusedInBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveEnergyInfusedInBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveEnergyInfusedInBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveEnergyInfusedInBee object`);
    } return HiveEnergyInfusedInBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveEnergyInfusedInBee(data.bcs.type)) {
                throw new Error(`object at is not a HiveEnergyInfusedInBee object`);
            }
            return HiveEnergyInfusedInBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveEnergyInfusedInBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveEnergyInfusedInBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveEnergyInfusedInBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveEnergyInfusedInBee object`);
        }
        return HiveEnergyInfusedInBee.fromSuiObjectData(res.data);
    }
}
exports.HiveEnergyInfusedInBee = HiveEnergyInfusedInBee;
HiveEnergyInfusedInBee.$typeName = `${PKG_V1}::dragon_trainer::HiveEnergyInfusedInBee`;
HiveEnergyInfusedInBee.$numTypeParams = 0;
HiveEnergyInfusedInBee.$isPhantom = [];
/* ============================== HiveGraph =============================== */
function isHiveGraph(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiveGraph`; }
class HiveGraph {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveGraph.$typeName;
        this.$isPhantom = HiveGraph.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveGraph.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.hiveTwap = fields.hiveTwap;
        ;
        this.followersList = fields.followersList;
        ;
        this.followingList = fields.followingList;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: HiveGraph.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveGraph.$typeName, ...[]), typeArgs: [], isPhantom: HiveGraph.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveGraph.fromFields(fields), fromFieldsWithTypes: (item) => HiveGraph.fromFieldsWithTypes(item), fromBcs: (data) => HiveGraph.fromBcs(data), bcs: HiveGraph.bcs, fromJSONField: (field) => HiveGraph.fromJSONField(field), fromJSON: (json) => HiveGraph.fromJSON(json), fromSuiParsedData: (content) => HiveGraph.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveGraph.fromSuiObjectData(content), fetch: async (client, id) => HiveGraph.fetch(client, id), new: (fields) => { return new HiveGraph([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveGraph.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveGraph.reified()); }
    static get p() { return HiveGraph.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveGraph", {
            id: structs_6.UID.bcs, hive_twap: HiveTwapInfo.bcs, followers_list: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), following_list: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveGraph.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), hiveTwap: (0, reified_1.decodeFromFields)(HiveTwapInfo.reified(), fields.hive_twap), followersList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(structs_5.LinkedTable.reified("address", reified.phantom("bool")))), fields.followers_list), followingList: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(structs_5.LinkedTable.reified("address", reified.phantom("bool")))), fields.following_list), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveGraph(item.type)) {
            throw new Error("not a HiveGraph type");
        }
        return HiveGraph.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), hiveTwap: (0, reified_1.decodeFromFieldsWithTypes)(HiveTwapInfo.reified(), item.fields.hive_twap), followersList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(structs_5.LinkedTable.reified("address", reified.phantom("bool")))), item.fields.followers_list), followingList: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(structs_5.LinkedTable.reified("address", reified.phantom("bool")))), item.fields.following_list), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return HiveGraph.fromFields(HiveGraph.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, hiveTwap: this.hiveTwap.toJSONField(), followersList: this.followersList.toJSONField(), followingList: this.followingList.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveGraph.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), hiveTwap: (0, reified_1.decodeFromJSONField)(HiveTwapInfo.reified(), field.hiveTwap), followersList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(structs_5.LinkedTable.reified("address", reified.phantom("bool")))), field.followersList), followingList: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(structs_5.LinkedTable.reified("address", reified.phantom("bool")))), field.followingList), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveGraph.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveGraph.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveGraph(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveGraph object`);
    } return HiveGraph.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveGraph(data.bcs.type)) {
                throw new Error(`object at is not a HiveGraph object`);
            }
            return HiveGraph.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveGraph.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveGraph object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveGraph(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveGraph object`);
        }
        return HiveGraph.fromSuiObjectData(res.data);
    }
}
exports.HiveGraph = HiveGraph;
HiveGraph.$typeName = `${PKG_V1}::dragon_trainer::HiveGraph`;
HiveGraph.$numTypeParams = 0;
HiveGraph.$isPhantom = [];
/* ============================== HiveTwapInfo =============================== */
function isHiveTwapInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiveTwapInfo`; }
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
    static reified() { return { typeName: HiveTwapInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveTwapInfo.$typeName, ...[]), typeArgs: [], isPhantom: HiveTwapInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveTwapInfo.fromFields(fields), fromFieldsWithTypes: (item) => HiveTwapInfo.fromFieldsWithTypes(item), fromBcs: (data) => HiveTwapInfo.fromBcs(data), bcs: HiveTwapInfo.bcs, fromJSONField: (field) => HiveTwapInfo.fromJSONField(field), fromJSON: (json) => HiveTwapInfo.fromJSON(json), fromSuiParsedData: (content) => HiveTwapInfo.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveTwapInfo.fromSuiObjectData(content), fetch: async (client, id) => HiveTwapInfo.fetch(client, id), new: (fields) => { return new HiveTwapInfo([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveTwapInfo(data.bcs.type)) {
                throw new Error(`object at is not a HiveTwapInfo object`);
            }
            return HiveTwapInfo.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveTwapInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveTwapInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveTwapInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveTwapInfo object`);
        }
        return HiveTwapInfo.fromSuiObjectData(res.data);
    }
}
exports.HiveTwapInfo = HiveTwapInfo;
HiveTwapInfo.$typeName = `${PKG_V1}::dragon_trainer::HiveTwapInfo`;
HiveTwapInfo.$numTypeParams = 0;
HiveTwapInfo.$isPhantom = [];
/* ============================== HiveTwapUpdated =============================== */
function isHiveTwapUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiveTwapUpdated`; }
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
    static reified() { return { typeName: HiveTwapUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveTwapUpdated.$typeName, ...[]), typeArgs: [], isPhantom: HiveTwapUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveTwapUpdated.fromFields(fields), fromFieldsWithTypes: (item) => HiveTwapUpdated.fromFieldsWithTypes(item), fromBcs: (data) => HiveTwapUpdated.fromBcs(data), bcs: HiveTwapUpdated.bcs, fromJSONField: (field) => HiveTwapUpdated.fromJSONField(field), fromJSON: (json) => HiveTwapUpdated.fromJSON(json), fromSuiParsedData: (content) => HiveTwapUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveTwapUpdated.fromSuiObjectData(content), fetch: async (client, id) => HiveTwapUpdated.fetch(client, id), new: (fields) => { return new HiveTwapUpdated([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveTwapUpdated(data.bcs.type)) {
                throw new Error(`object at is not a HiveTwapUpdated object`);
            }
            return HiveTwapUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveTwapUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveTwapUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveTwapUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveTwapUpdated object`);
        }
        return HiveTwapUpdated.fromSuiObjectData(res.data);
    }
}
exports.HiveTwapUpdated = HiveTwapUpdated;
HiveTwapUpdated.$typeName = `${PKG_V1}::dragon_trainer::HiveTwapUpdated`;
HiveTwapUpdated.$numTypeParams = 0;
HiveTwapUpdated.$isPhantom = [];
/* ============================== HiveUnlockedFromBee =============================== */
function isHiveUnlockedFromBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiveUnlockedFromBee`; }
class HiveUnlockedFromBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveUnlockedFromBee.$typeName;
        this.$isPhantom = HiveUnlockedFromBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveUnlockedFromBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.beeId = fields.beeId;
        ;
        this.version = fields.version;
        ;
        this.hiveUnlocked = fields.hiveUnlocked;
        ;
        this.wHiveDecrease = fields.wHiveDecrease;
        ;
        this.totalWeightedHive = fields.totalWeightedHive;
    }
    static reified() { return { typeName: HiveUnlockedFromBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveUnlockedFromBee.$typeName, ...[]), typeArgs: [], isPhantom: HiveUnlockedFromBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveUnlockedFromBee.fromFields(fields), fromFieldsWithTypes: (item) => HiveUnlockedFromBee.fromFieldsWithTypes(item), fromBcs: (data) => HiveUnlockedFromBee.fromBcs(data), bcs: HiveUnlockedFromBee.bcs, fromJSONField: (field) => HiveUnlockedFromBee.fromJSONField(field), fromJSON: (json) => HiveUnlockedFromBee.fromJSON(json), fromSuiParsedData: (content) => HiveUnlockedFromBee.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveUnlockedFromBee.fromSuiObjectData(content), fetch: async (client, id) => HiveUnlockedFromBee.fetch(client, id), new: (fields) => { return new HiveUnlockedFromBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveUnlockedFromBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveUnlockedFromBee.reified()); }
    static get p() { return HiveUnlockedFromBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveUnlockedFromBee", {
            beeId: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), hive_unlocked: bcs_1.bcs.u64(), wHive_decrease: bcs_1.bcs.u128(), total_weighted_hive: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return HiveUnlockedFromBee.reified().new({ beeId: (0, reified_1.decodeFromFields)("address", fields.beeId), version: (0, reified_1.decodeFromFields)("u64", fields.version), hiveUnlocked: (0, reified_1.decodeFromFields)("u64", fields.hive_unlocked), wHiveDecrease: (0, reified_1.decodeFromFields)("u128", fields.wHive_decrease), totalWeightedHive: (0, reified_1.decodeFromFields)("u128", fields.total_weighted_hive) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveUnlockedFromBee(item.type)) {
            throw new Error("not a HiveUnlockedFromBee type");
        }
        return HiveUnlockedFromBee.reified().new({ beeId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.beeId), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), hiveUnlocked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_unlocked), wHiveDecrease: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.wHive_decrease), totalWeightedHive: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.total_weighted_hive) });
    }
    static fromBcs(data) { return HiveUnlockedFromBee.fromFields(HiveUnlockedFromBee.bcs.parse(data)); }
    toJSONField() {
        return {
            beeId: this.beeId, version: this.version.toString(), hiveUnlocked: this.hiveUnlocked.toString(), wHiveDecrease: this.wHiveDecrease.toString(), totalWeightedHive: this.totalWeightedHive.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveUnlockedFromBee.reified().new({ beeId: (0, reified_1.decodeFromJSONField)("address", field.beeId), version: (0, reified_1.decodeFromJSONField)("u64", field.version), hiveUnlocked: (0, reified_1.decodeFromJSONField)("u64", field.hiveUnlocked), wHiveDecrease: (0, reified_1.decodeFromJSONField)("u128", field.wHiveDecrease), totalWeightedHive: (0, reified_1.decodeFromJSONField)("u128", field.totalWeightedHive) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveUnlockedFromBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveUnlockedFromBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveUnlockedFromBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveUnlockedFromBee object`);
    } return HiveUnlockedFromBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveUnlockedFromBee(data.bcs.type)) {
                throw new Error(`object at is not a HiveUnlockedFromBee object`);
            }
            return HiveUnlockedFromBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveUnlockedFromBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveUnlockedFromBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveUnlockedFromBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveUnlockedFromBee object`);
        }
        return HiveUnlockedFromBee.fromSuiObjectData(res.data);
    }
}
exports.HiveUnlockedFromBee = HiveUnlockedFromBee;
HiveUnlockedFromBee.$typeName = `${PKG_V1}::dragon_trainer::HiveUnlockedFromBee`;
HiveUnlockedFromBee.$numTypeParams = 0;
HiveUnlockedFromBee.$isPhantom = [];
/* ============================== HiveWithdrawnFromTreasury =============================== */
function isHiveWithdrawnFromTreasury(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HiveWithdrawnFromTreasury`; }
class HiveWithdrawnFromTreasury {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveWithdrawnFromTreasury.$typeName;
        this.$isPhantom = HiveWithdrawnFromTreasury.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveWithdrawnFromTreasury.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.hiveWithdrawn = fields.hiveWithdrawn;
    }
    static reified() { return { typeName: HiveWithdrawnFromTreasury.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveWithdrawnFromTreasury.$typeName, ...[]), typeArgs: [], isPhantom: HiveWithdrawnFromTreasury.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveWithdrawnFromTreasury.fromFields(fields), fromFieldsWithTypes: (item) => HiveWithdrawnFromTreasury.fromFieldsWithTypes(item), fromBcs: (data) => HiveWithdrawnFromTreasury.fromBcs(data), bcs: HiveWithdrawnFromTreasury.bcs, fromJSONField: (field) => HiveWithdrawnFromTreasury.fromJSONField(field), fromJSON: (json) => HiveWithdrawnFromTreasury.fromJSON(json), fromSuiParsedData: (content) => HiveWithdrawnFromTreasury.fromSuiParsedData(content), fromSuiObjectData: (content) => HiveWithdrawnFromTreasury.fromSuiObjectData(content), fetch: async (client, id) => HiveWithdrawnFromTreasury.fetch(client, id), new: (fields) => { return new HiveWithdrawnFromTreasury([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveWithdrawnFromTreasury(data.bcs.type)) {
                throw new Error(`object at is not a HiveWithdrawnFromTreasury object`);
            }
            return HiveWithdrawnFromTreasury.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HiveWithdrawnFromTreasury.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveWithdrawnFromTreasury object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveWithdrawnFromTreasury(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveWithdrawnFromTreasury object`);
        }
        return HiveWithdrawnFromTreasury.fromSuiObjectData(res.data);
    }
}
exports.HiveWithdrawnFromTreasury = HiveWithdrawnFromTreasury;
HiveWithdrawnFromTreasury.$typeName = `${PKG_V1}::dragon_trainer::HiveWithdrawnFromTreasury`;
HiveWithdrawnFromTreasury.$numTypeParams = 0;
HiveWithdrawnFromTreasury.$isPhantom = [];
/* ============================== HoneyAddedForHarvest =============================== */
function isHoneyAddedForHarvest(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HoneyAddedForHarvest`; }
class HoneyAddedForHarvest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyAddedForHarvest.$typeName;
        this.$isPhantom = HoneyAddedForHarvest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyAddedForHarvest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.yieldAdded = fields.yieldAdded;
    }
    static reified() { return { typeName: HoneyAddedForHarvest.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyAddedForHarvest.$typeName, ...[]), typeArgs: [], isPhantom: HoneyAddedForHarvest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HoneyAddedForHarvest.fromFields(fields), fromFieldsWithTypes: (item) => HoneyAddedForHarvest.fromFieldsWithTypes(item), fromBcs: (data) => HoneyAddedForHarvest.fromBcs(data), bcs: HoneyAddedForHarvest.bcs, fromJSONField: (field) => HoneyAddedForHarvest.fromJSONField(field), fromJSON: (json) => HoneyAddedForHarvest.fromJSON(json), fromSuiParsedData: (content) => HoneyAddedForHarvest.fromSuiParsedData(content), fromSuiObjectData: (content) => HoneyAddedForHarvest.fromSuiObjectData(content), fetch: async (client, id) => HoneyAddedForHarvest.fetch(client, id), new: (fields) => { return new HoneyAddedForHarvest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyAddedForHarvest.reified(); }
    static phantom() { return (0, reified_1.phantom)(HoneyAddedForHarvest.reified()); }
    static get p() { return HoneyAddedForHarvest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyAddedForHarvest", {
            yield_added: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HoneyAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromFields)("u64", fields.yield_added) }); }
    static fromFieldsWithTypes(item) {
        if (!isHoneyAddedForHarvest(item.type)) {
            throw new Error("not a HoneyAddedForHarvest type");
        }
        return HoneyAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.yield_added) });
    }
    static fromBcs(data) { return HoneyAddedForHarvest.fromFields(HoneyAddedForHarvest.bcs.parse(data)); }
    toJSONField() {
        return {
            yieldAdded: this.yieldAdded.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HoneyAddedForHarvest.reified().new({ yieldAdded: (0, reified_1.decodeFromJSONField)("u64", field.yieldAdded) }); }
    static fromJSON(json) {
        if (json.$typeName !== HoneyAddedForHarvest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HoneyAddedForHarvest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyAddedForHarvest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyAddedForHarvest object`);
    } return HoneyAddedForHarvest.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyAddedForHarvest(data.bcs.type)) {
                throw new Error(`object at is not a HoneyAddedForHarvest object`);
            }
            return HoneyAddedForHarvest.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyAddedForHarvest.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyAddedForHarvest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyAddedForHarvest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyAddedForHarvest object`);
        }
        return HoneyAddedForHarvest.fromSuiObjectData(res.data);
    }
}
exports.HoneyAddedForHarvest = HoneyAddedForHarvest;
HoneyAddedForHarvest.$typeName = `${PKG_V1}::dragon_trainer::HoneyAddedForHarvest`;
HoneyAddedForHarvest.$numTypeParams = 0;
HoneyAddedForHarvest.$isPhantom = [];
/* ============================== HoneyAddedToProfile =============================== */
function isHoneyAddedToProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HoneyAddedToProfile`; }
class HoneyAddedToProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyAddedToProfile.$typeName;
        this.$isPhantom = HoneyAddedToProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyAddedToProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.depositedHoney = fields.depositedHoney;
    }
    static reified() { return { typeName: HoneyAddedToProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyAddedToProfile.$typeName, ...[]), typeArgs: [], isPhantom: HoneyAddedToProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HoneyAddedToProfile.fromFields(fields), fromFieldsWithTypes: (item) => HoneyAddedToProfile.fromFieldsWithTypes(item), fromBcs: (data) => HoneyAddedToProfile.fromBcs(data), bcs: HoneyAddedToProfile.bcs, fromJSONField: (field) => HoneyAddedToProfile.fromJSONField(field), fromJSON: (json) => HoneyAddedToProfile.fromJSON(json), fromSuiParsedData: (content) => HoneyAddedToProfile.fromSuiParsedData(content), fromSuiObjectData: (content) => HoneyAddedToProfile.fromSuiObjectData(content), fetch: async (client, id) => HoneyAddedToProfile.fetch(client, id), new: (fields) => { return new HoneyAddedToProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyAddedToProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(HoneyAddedToProfile.reified()); }
    static get p() { return HoneyAddedToProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyAddedToProfile", {
            username: structs_1.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), deposited_honey: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HoneyAddedToProfile.reified().new({ username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), depositedHoney: (0, reified_1.decodeFromFields)("u64", fields.deposited_honey) }); }
    static fromFieldsWithTypes(item) {
        if (!isHoneyAddedToProfile(item.type)) {
            throw new Error("not a HoneyAddedToProfile type");
        }
        return HoneyAddedToProfile.reified().new({ username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), depositedHoney: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposited_honey) });
    }
    static fromBcs(data) { return HoneyAddedToProfile.fromFields(HoneyAddedToProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            username: this.username, profileAddr: this.profileAddr, depositedHoney: this.depositedHoney.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HoneyAddedToProfile.reified().new({ username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), depositedHoney: (0, reified_1.decodeFromJSONField)("u64", field.depositedHoney) }); }
    static fromJSON(json) {
        if (json.$typeName !== HoneyAddedToProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HoneyAddedToProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyAddedToProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyAddedToProfile object`);
    } return HoneyAddedToProfile.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyAddedToProfile(data.bcs.type)) {
                throw new Error(`object at is not a HoneyAddedToProfile object`);
            }
            return HoneyAddedToProfile.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyAddedToProfile.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyAddedToProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyAddedToProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyAddedToProfile object`);
        }
        return HoneyAddedToProfile.fromSuiObjectData(res.data);
    }
}
exports.HoneyAddedToProfile = HoneyAddedToProfile;
HoneyAddedToProfile.$typeName = `${PKG_V1}::dragon_trainer::HoneyAddedToProfile`;
HoneyAddedToProfile.$numTypeParams = 0;
HoneyAddedToProfile.$isPhantom = [];
/* ============================== HoneyAddedToTreasury =============================== */
function isHoneyAddedToTreasury(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HoneyAddedToTreasury`; }
class HoneyAddedToTreasury {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyAddedToTreasury.$typeName;
        this.$isPhantom = HoneyAddedToTreasury.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyAddedToTreasury.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.honeyAdded = fields.honeyAdded;
        ;
        this.totalHoneyInTreasury = fields.totalHoneyInTreasury;
    }
    static reified() { return { typeName: HoneyAddedToTreasury.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyAddedToTreasury.$typeName, ...[]), typeArgs: [], isPhantom: HoneyAddedToTreasury.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HoneyAddedToTreasury.fromFields(fields), fromFieldsWithTypes: (item) => HoneyAddedToTreasury.fromFieldsWithTypes(item), fromBcs: (data) => HoneyAddedToTreasury.fromBcs(data), bcs: HoneyAddedToTreasury.bcs, fromJSONField: (field) => HoneyAddedToTreasury.fromJSONField(field), fromJSON: (json) => HoneyAddedToTreasury.fromJSON(json), fromSuiParsedData: (content) => HoneyAddedToTreasury.fromSuiParsedData(content), fromSuiObjectData: (content) => HoneyAddedToTreasury.fromSuiObjectData(content), fetch: async (client, id) => HoneyAddedToTreasury.fetch(client, id), new: (fields) => { return new HoneyAddedToTreasury([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyAddedToTreasury.reified(); }
    static phantom() { return (0, reified_1.phantom)(HoneyAddedToTreasury.reified()); }
    static get p() { return HoneyAddedToTreasury.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyAddedToTreasury", {
            honey_added: bcs_1.bcs.u64(), total_honey_in_treasury: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HoneyAddedToTreasury.reified().new({ honeyAdded: (0, reified_1.decodeFromFields)("u64", fields.honey_added), totalHoneyInTreasury: (0, reified_1.decodeFromFields)("u64", fields.total_honey_in_treasury) }); }
    static fromFieldsWithTypes(item) {
        if (!isHoneyAddedToTreasury(item.type)) {
            throw new Error("not a HoneyAddedToTreasury type");
        }
        return HoneyAddedToTreasury.reified().new({ honeyAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_added), totalHoneyInTreasury: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_honey_in_treasury) });
    }
    static fromBcs(data) { return HoneyAddedToTreasury.fromFields(HoneyAddedToTreasury.bcs.parse(data)); }
    toJSONField() {
        return {
            honeyAdded: this.honeyAdded.toString(), totalHoneyInTreasury: this.totalHoneyInTreasury.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HoneyAddedToTreasury.reified().new({ honeyAdded: (0, reified_1.decodeFromJSONField)("u64", field.honeyAdded), totalHoneyInTreasury: (0, reified_1.decodeFromJSONField)("u64", field.totalHoneyInTreasury) }); }
    static fromJSON(json) {
        if (json.$typeName !== HoneyAddedToTreasury.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HoneyAddedToTreasury.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyAddedToTreasury(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyAddedToTreasury object`);
    } return HoneyAddedToTreasury.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyAddedToTreasury(data.bcs.type)) {
                throw new Error(`object at is not a HoneyAddedToTreasury object`);
            }
            return HoneyAddedToTreasury.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyAddedToTreasury.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyAddedToTreasury object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyAddedToTreasury(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyAddedToTreasury object`);
        }
        return HoneyAddedToTreasury.fromSuiObjectData(res.data);
    }
}
exports.HoneyAddedToTreasury = HoneyAddedToTreasury;
HoneyAddedToTreasury.$typeName = `${PKG_V1}::dragon_trainer::HoneyAddedToTreasury`;
HoneyAddedToTreasury.$numTypeParams = 0;
HoneyAddedToTreasury.$isPhantom = [];
/* ============================== HoneyTransferredToProfile =============================== */
function isHoneyTransferredToProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::HoneyTransferredToProfile`; }
class HoneyTransferredToProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyTransferredToProfile.$typeName;
        this.$isPhantom = HoneyTransferredToProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyTransferredToProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.fromUsername = fields.fromUsername;
        ;
        this.fromDragonSchoolAddr = fields.fromDragonSchoolAddr;
        ;
        this.toUsername = fields.toUsername;
        ;
        this.toTrainerAddr = fields.toTrainerAddr;
        ;
        this.honeyToTransfer = fields.honeyToTransfer;
    }
    static reified() { return { typeName: HoneyTransferredToProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyTransferredToProfile.$typeName, ...[]), typeArgs: [], isPhantom: HoneyTransferredToProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HoneyTransferredToProfile.fromFields(fields), fromFieldsWithTypes: (item) => HoneyTransferredToProfile.fromFieldsWithTypes(item), fromBcs: (data) => HoneyTransferredToProfile.fromBcs(data), bcs: HoneyTransferredToProfile.bcs, fromJSONField: (field) => HoneyTransferredToProfile.fromJSONField(field), fromJSON: (json) => HoneyTransferredToProfile.fromJSON(json), fromSuiParsedData: (content) => HoneyTransferredToProfile.fromSuiParsedData(content), fromSuiObjectData: (content) => HoneyTransferredToProfile.fromSuiObjectData(content), fetch: async (client, id) => HoneyTransferredToProfile.fetch(client, id), new: (fields) => { return new HoneyTransferredToProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyTransferredToProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(HoneyTransferredToProfile.reified()); }
    static get p() { return HoneyTransferredToProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyTransferredToProfile", {
            from_username: structs_1.String.bcs, from_dragon_school_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), to_username: structs_1.String.bcs, to_trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), honey_to_transfer: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HoneyTransferredToProfile.reified().new({ fromUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.from_username), fromDragonSchoolAddr: (0, reified_1.decodeFromFields)("address", fields.from_dragon_school_addr), toUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.to_username), toTrainerAddr: (0, reified_1.decodeFromFields)("address", fields.to_trainer_addr), honeyToTransfer: (0, reified_1.decodeFromFields)("u64", fields.honey_to_transfer) }); }
    static fromFieldsWithTypes(item) {
        if (!isHoneyTransferredToProfile(item.type)) {
            throw new Error("not a HoneyTransferredToProfile type");
        }
        return HoneyTransferredToProfile.reified().new({ fromUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.from_username), fromDragonSchoolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.from_dragon_school_addr), toUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.to_username), toTrainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.to_trainer_addr), honeyToTransfer: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_to_transfer) });
    }
    static fromBcs(data) { return HoneyTransferredToProfile.fromFields(HoneyTransferredToProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            fromUsername: this.fromUsername, fromDragonSchoolAddr: this.fromDragonSchoolAddr, toUsername: this.toUsername, toTrainerAddr: this.toTrainerAddr, honeyToTransfer: this.honeyToTransfer.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HoneyTransferredToProfile.reified().new({ fromUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.fromUsername), fromDragonSchoolAddr: (0, reified_1.decodeFromJSONField)("address", field.fromDragonSchoolAddr), toUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.toUsername), toTrainerAddr: (0, reified_1.decodeFromJSONField)("address", field.toTrainerAddr), honeyToTransfer: (0, reified_1.decodeFromJSONField)("u64", field.honeyToTransfer) }); }
    static fromJSON(json) {
        if (json.$typeName !== HoneyTransferredToProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HoneyTransferredToProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyTransferredToProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyTransferredToProfile object`);
    } return HoneyTransferredToProfile.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyTransferredToProfile(data.bcs.type)) {
                throw new Error(`object at is not a HoneyTransferredToProfile object`);
            }
            return HoneyTransferredToProfile.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyTransferredToProfile.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyTransferredToProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyTransferredToProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyTransferredToProfile object`);
        }
        return HoneyTransferredToProfile.fromSuiObjectData(res.data);
    }
}
exports.HoneyTransferredToProfile = HoneyTransferredToProfile;
HoneyTransferredToProfile.$typeName = `${PKG_V1}::dragon_trainer::HoneyTransferredToProfile`;
HoneyTransferredToProfile.$numTypeParams = 0;
HoneyTransferredToProfile.$isPhantom = [];
/* ============================== IncomingBeeClaimed =============================== */
function isIncomingBeeClaimed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::IncomingBeeClaimed`; }
class IncomingBeeClaimed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = IncomingBeeClaimed.$typeName;
        this.$isPhantom = IncomingBeeClaimed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(IncomingBeeClaimed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.claimedBy = fields.claimedBy;
    }
    static reified() { return { typeName: IncomingBeeClaimed.$typeName, fullTypeName: (0, util_1.composeSuiType)(IncomingBeeClaimed.$typeName, ...[]), typeArgs: [], isPhantom: IncomingBeeClaimed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => IncomingBeeClaimed.fromFields(fields), fromFieldsWithTypes: (item) => IncomingBeeClaimed.fromFieldsWithTypes(item), fromBcs: (data) => IncomingBeeClaimed.fromBcs(data), bcs: IncomingBeeClaimed.bcs, fromJSONField: (field) => IncomingBeeClaimed.fromJSONField(field), fromJSON: (json) => IncomingBeeClaimed.fromJSON(json), fromSuiParsedData: (content) => IncomingBeeClaimed.fromSuiParsedData(content), fromSuiObjectData: (content) => IncomingBeeClaimed.fromSuiObjectData(content), fetch: async (client, id) => IncomingBeeClaimed.fetch(client, id), new: (fields) => { return new IncomingBeeClaimed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return IncomingBeeClaimed.reified(); }
    static phantom() { return (0, reified_1.phantom)(IncomingBeeClaimed.reified()); }
    static get p() { return IncomingBeeClaimed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("IncomingBeeClaimed", {
            version: bcs_1.bcs.u64(), claimed_by: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return IncomingBeeClaimed.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), claimedBy: (0, reified_1.decodeFromFields)("address", fields.claimed_by) }); }
    static fromFieldsWithTypes(item) {
        if (!isIncomingBeeClaimed(item.type)) {
            throw new Error("not a IncomingBeeClaimed type");
        }
        return IncomingBeeClaimed.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), claimedBy: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.claimed_by) });
    }
    static fromBcs(data) { return IncomingBeeClaimed.fromFields(IncomingBeeClaimed.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), claimedBy: this.claimedBy,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return IncomingBeeClaimed.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), claimedBy: (0, reified_1.decodeFromJSONField)("address", field.claimedBy) }); }
    static fromJSON(json) {
        if (json.$typeName !== IncomingBeeClaimed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return IncomingBeeClaimed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isIncomingBeeClaimed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a IncomingBeeClaimed object`);
    } return IncomingBeeClaimed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isIncomingBeeClaimed(data.bcs.type)) {
                throw new Error(`object at is not a IncomingBeeClaimed object`);
            }
            return IncomingBeeClaimed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return IncomingBeeClaimed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching IncomingBeeClaimed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isIncomingBeeClaimed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a IncomingBeeClaimed object`);
        }
        return IncomingBeeClaimed.fromSuiObjectData(res.data);
    }
}
exports.IncomingBeeClaimed = IncomingBeeClaimed;
IncomingBeeClaimed.$typeName = `${PKG_V1}::dragon_trainer::IncomingBeeClaimed`;
IncomingBeeClaimed.$numTypeParams = 0;
IncomingBeeClaimed.$isPhantom = [];
/* ============================== Inscription =============================== */
function isInscription(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::Inscription`; }
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
    static reified() { return { typeName: Inscription.$typeName, fullTypeName: (0, util_1.composeSuiType)(Inscription.$typeName, ...[]), typeArgs: [], isPhantom: Inscription.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Inscription.fromFields(fields), fromFieldsWithTypes: (item) => Inscription.fromFieldsWithTypes(item), fromBcs: (data) => Inscription.fromBcs(data), bcs: Inscription.bcs, fromJSONField: (field) => Inscription.fromJSONField(field), fromJSON: (json) => Inscription.fromJSON(json), fromSuiParsedData: (content) => Inscription.fromSuiParsedData(content), fromSuiObjectData: (content) => Inscription.fromSuiObjectData(content), fetch: async (client, id) => Inscription.fetch(client, id), new: (fields) => { return new Inscription([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Inscription.reified(); }
    static phantom() { return (0, reified_1.phantom)(Inscription.reified()); }
    static get p() { return Inscription.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Inscription", {
            format: structs_3.String.bcs, base64: structs_5.LinkedTable.bcs(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return Inscription.reified().new({ format: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.format), base64: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())), fields.base64) }); }
    static fromFieldsWithTypes(item) {
        if (!isInscription(item.type)) {
            throw new Error("not a Inscription type");
        }
        return Inscription.reified().new({ format: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.format), base64: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())), item.fields.base64) });
    }
    static fromBcs(data) { return Inscription.fromFields(Inscription.bcs.parse(data)); }
    toJSONField() {
        return {
            format: this.format, base64: this.base64.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Inscription.reified().new({ format: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.format), base64: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())), field.base64) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isInscription(data.bcs.type)) {
                throw new Error(`object at is not a Inscription object`);
            }
            return Inscription.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Inscription.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Inscription object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isInscription(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Inscription object`);
        }
        return Inscription.fromSuiObjectData(res.data);
    }
}
exports.Inscription = Inscription;
Inscription.$typeName = `${PKG_V1}::dragon_trainer::Inscription`;
Inscription.$numTypeParams = 0;
Inscription.$isPhantom = [];
/* ============================== InscriptionSetForProfile =============================== */
function isInscriptionSetForProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::InscriptionSetForProfile`; }
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
    static reified() { return { typeName: InscriptionSetForProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(InscriptionSetForProfile.$typeName, ...[]), typeArgs: [], isPhantom: InscriptionSetForProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => InscriptionSetForProfile.fromFields(fields), fromFieldsWithTypes: (item) => InscriptionSetForProfile.fromFieldsWithTypes(item), fromBcs: (data) => InscriptionSetForProfile.fromBcs(data), bcs: InscriptionSetForProfile.bcs, fromJSONField: (field) => InscriptionSetForProfile.fromJSONField(field), fromJSON: (json) => InscriptionSetForProfile.fromJSON(json), fromSuiParsedData: (content) => InscriptionSetForProfile.fromSuiParsedData(content), fromSuiObjectData: (content) => InscriptionSetForProfile.fromSuiObjectData(content), fetch: async (client, id) => InscriptionSetForProfile.fetch(client, id), new: (fields) => { return new InscriptionSetForProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return InscriptionSetForProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(InscriptionSetForProfile.reified()); }
    static get p() { return InscriptionSetForProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("InscriptionSetForProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_3.String.bcs, format: structs_3.String.bcs, base64: bcs_1.bcs.vector(structs_3.String.bcs)
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isInscriptionSetForProfile(data.bcs.type)) {
                throw new Error(`object at is not a InscriptionSetForProfile object`);
            }
            return InscriptionSetForProfile.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return InscriptionSetForProfile.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching InscriptionSetForProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isInscriptionSetForProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a InscriptionSetForProfile object`);
        }
        return InscriptionSetForProfile.fromSuiObjectData(res.data);
    }
}
exports.InscriptionSetForProfile = InscriptionSetForProfile;
InscriptionSetForProfile.$typeName = `${PKG_V1}::dragon_trainer::InscriptionSetForProfile`;
InscriptionSetForProfile.$numTypeParams = 0;
InscriptionSetForProfile.$isPhantom = [];
/* ============================== JoinedHiveOfProfile =============================== */
function isJoinedHiveOfProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::JoinedHiveOfProfile`; }
class JoinedHiveOfProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = JoinedHiveOfProfile.$typeName;
        this.$isPhantom = JoinedHiveOfProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(JoinedHiveOfProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.followerTrainerAddr = fields.followerTrainerAddr;
        ;
        this.followedTrainer = fields.followedTrainer;
        ;
        this.followerUsername = fields.followerUsername;
    }
    static reified() { return { typeName: JoinedHiveOfProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(JoinedHiveOfProfile.$typeName, ...[]), typeArgs: [], isPhantom: JoinedHiveOfProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => JoinedHiveOfProfile.fromFields(fields), fromFieldsWithTypes: (item) => JoinedHiveOfProfile.fromFieldsWithTypes(item), fromBcs: (data) => JoinedHiveOfProfile.fromBcs(data), bcs: JoinedHiveOfProfile.bcs, fromJSONField: (field) => JoinedHiveOfProfile.fromJSONField(field), fromJSON: (json) => JoinedHiveOfProfile.fromJSON(json), fromSuiParsedData: (content) => JoinedHiveOfProfile.fromSuiParsedData(content), fromSuiObjectData: (content) => JoinedHiveOfProfile.fromSuiObjectData(content), fetch: async (client, id) => JoinedHiveOfProfile.fetch(client, id), new: (fields) => { return new JoinedHiveOfProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return JoinedHiveOfProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(JoinedHiveOfProfile.reified()); }
    static get p() { return JoinedHiveOfProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("JoinedHiveOfProfile", {
            follower_trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), followed_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), follower_username: structs_3.String.bcs
        });
    }
    ;
    static fromFields(fields) { return JoinedHiveOfProfile.reified().new({ followerTrainerAddr: (0, reified_1.decodeFromFields)("address", fields.follower_trainer_addr), followedTrainer: (0, reified_1.decodeFromFields)("address", fields.followed_trainer), followerUsername: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.follower_username) }); }
    static fromFieldsWithTypes(item) {
        if (!isJoinedHiveOfProfile(item.type)) {
            throw new Error("not a JoinedHiveOfProfile type");
        }
        return JoinedHiveOfProfile.reified().new({ followerTrainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.follower_trainer_addr), followedTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.followed_trainer), followerUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.follower_username) });
    }
    static fromBcs(data) { return JoinedHiveOfProfile.fromFields(JoinedHiveOfProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            followerTrainerAddr: this.followerTrainerAddr, followedTrainer: this.followedTrainer, followerUsername: this.followerUsername,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return JoinedHiveOfProfile.reified().new({ followerTrainerAddr: (0, reified_1.decodeFromJSONField)("address", field.followerTrainerAddr), followedTrainer: (0, reified_1.decodeFromJSONField)("address", field.followedTrainer), followerUsername: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.followerUsername) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isJoinedHiveOfProfile(data.bcs.type)) {
                throw new Error(`object at is not a JoinedHiveOfProfile object`);
            }
            return JoinedHiveOfProfile.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return JoinedHiveOfProfile.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching JoinedHiveOfProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isJoinedHiveOfProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a JoinedHiveOfProfile object`);
        }
        return JoinedHiveOfProfile.fromSuiObjectData(res.data);
    }
}
exports.JoinedHiveOfProfile = JoinedHiveOfProfile;
JoinedHiveOfProfile.$typeName = `${PKG_V1}::dragon_trainer::JoinedHiveOfProfile`;
JoinedHiveOfProfile.$numTypeParams = 0;
JoinedHiveOfProfile.$isPhantom = [];
/* ============================== ListingCanceled =============================== */
function isListingCanceled(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::ListingCanceled`; }
class ListingCanceled {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ListingCanceled.$typeName;
        this.$isPhantom = ListingCanceled.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingCanceled.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByTrainer = fields.listedByTrainer;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: ListingCanceled.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingCanceled.$typeName, ...[]), typeArgs: [], isPhantom: ListingCanceled.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ListingCanceled.fromFields(fields), fromFieldsWithTypes: (item) => ListingCanceled.fromFieldsWithTypes(item), fromBcs: (data) => ListingCanceled.fromBcs(data), bcs: ListingCanceled.bcs, fromJSONField: (field) => ListingCanceled.fromJSONField(field), fromJSON: (json) => ListingCanceled.fromJSON(json), fromSuiParsedData: (content) => ListingCanceled.fromSuiParsedData(content), fromSuiObjectData: (content) => ListingCanceled.fromSuiObjectData(content), fetch: async (client, id) => ListingCanceled.fetch(client, id), new: (fields) => { return new ListingCanceled([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingCanceled.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingCanceled.reified()); }
    static get p() { return ListingCanceled.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingCanceled", {
            listed_by_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ListingCanceled.reified().new({ listedByTrainer: (0, reified_1.decodeFromFields)("address", fields.listed_by_trainer), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingCanceled(item.type)) {
            throw new Error("not a ListingCanceled type");
        }
        return ListingCanceled.reified().new({ listedByTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_trainer), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return ListingCanceled.fromFields(ListingCanceled.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByTrainer: this.listedByTrainer, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingCanceled.reified().new({ listedByTrainer: (0, reified_1.decodeFromJSONField)("address", field.listedByTrainer), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isListingCanceled(data.bcs.type)) {
                throw new Error(`object at is not a ListingCanceled object`);
            }
            return ListingCanceled.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ListingCanceled.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ListingCanceled object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListingCanceled(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ListingCanceled object`);
        }
        return ListingCanceled.fromSuiObjectData(res.data);
    }
}
exports.ListingCanceled = ListingCanceled;
ListingCanceled.$typeName = `${PKG_V1}::dragon_trainer::ListingCanceled`;
ListingCanceled.$numTypeParams = 0;
ListingCanceled.$isPhantom = [];
/* ============================== ListingDestroyed =============================== */
function isListingDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::ListingDestroyed`; }
class ListingDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ListingDestroyed.$typeName;
        this.$isPhantom = ListingDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.listedByTrainer = fields.listedByTrainer;
    }
    static reified() { return { typeName: ListingDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: ListingDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ListingDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => ListingDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => ListingDestroyed.fromBcs(data), bcs: ListingDestroyed.bcs, fromJSONField: (field) => ListingDestroyed.fromJSONField(field), fromJSON: (json) => ListingDestroyed.fromJSON(json), fromSuiParsedData: (content) => ListingDestroyed.fromSuiParsedData(content), fromSuiObjectData: (content) => ListingDestroyed.fromSuiObjectData(content), fetch: async (client, id) => ListingDestroyed.fetch(client, id), new: (fields) => { return new ListingDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingDestroyed.reified()); }
    static get p() { return ListingDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingDestroyed", {
            version: bcs_1.bcs.u64(), listed_by_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return ListingDestroyed.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), listedByTrainer: (0, reified_1.decodeFromFields)("address", fields.listed_by_trainer) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingDestroyed(item.type)) {
            throw new Error("not a ListingDestroyed type");
        }
        return ListingDestroyed.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), listedByTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_trainer) });
    }
    static fromBcs(data) { return ListingDestroyed.fromFields(ListingDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), listedByTrainer: this.listedByTrainer,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingDestroyed.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), listedByTrainer: (0, reified_1.decodeFromJSONField)("address", field.listedByTrainer) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isListingDestroyed(data.bcs.type)) {
                throw new Error(`object at is not a ListingDestroyed object`);
            }
            return ListingDestroyed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ListingDestroyed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ListingDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListingDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ListingDestroyed object`);
        }
        return ListingDestroyed.fromSuiObjectData(res.data);
    }
}
exports.ListingDestroyed = ListingDestroyed;
ListingDestroyed.$typeName = `${PKG_V1}::dragon_trainer::ListingDestroyed`;
ListingDestroyed.$numTypeParams = 0;
ListingDestroyed.$isPhantom = [];
/* ============================== ListingExpired =============================== */
function isListingExpired(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::ListingExpired`; }
class ListingExpired {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ListingExpired.$typeName;
        this.$isPhantom = ListingExpired.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingExpired.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByTrainer = fields.listedByTrainer;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: ListingExpired.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingExpired.$typeName, ...[]), typeArgs: [], isPhantom: ListingExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ListingExpired.fromFields(fields), fromFieldsWithTypes: (item) => ListingExpired.fromFieldsWithTypes(item), fromBcs: (data) => ListingExpired.fromBcs(data), bcs: ListingExpired.bcs, fromJSONField: (field) => ListingExpired.fromJSONField(field), fromJSON: (json) => ListingExpired.fromJSON(json), fromSuiParsedData: (content) => ListingExpired.fromSuiParsedData(content), fromSuiObjectData: (content) => ListingExpired.fromSuiObjectData(content), fetch: async (client, id) => ListingExpired.fetch(client, id), new: (fields) => { return new ListingExpired([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingExpired.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingExpired.reified()); }
    static get p() { return ListingExpired.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingExpired", {
            listed_by_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ListingExpired.reified().new({ listedByTrainer: (0, reified_1.decodeFromFields)("address", fields.listed_by_trainer), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingExpired(item.type)) {
            throw new Error("not a ListingExpired type");
        }
        return ListingExpired.reified().new({ listedByTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_trainer), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return ListingExpired.fromFields(ListingExpired.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByTrainer: this.listedByTrainer, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingExpired.reified().new({ listedByTrainer: (0, reified_1.decodeFromJSONField)("address", field.listedByTrainer), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isListingExpired(data.bcs.type)) {
                throw new Error(`object at is not a ListingExpired object`);
            }
            return ListingExpired.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ListingExpired.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ListingExpired object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListingExpired(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ListingExpired object`);
        }
        return ListingExpired.fromSuiObjectData(res.data);
    }
}
exports.ListingExpired = ListingExpired;
ListingExpired.$typeName = `${PKG_V1}::dragon_trainer::ListingExpired`;
ListingExpired.$numTypeParams = 0;
ListingExpired.$isPhantom = [];
/* ============================== ListingRecord =============================== */
function isListingRecord(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::ListingRecord`; }
class ListingRecord {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ListingRecord.$typeName;
        this.$isPhantom = ListingRecord.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.minPrice = fields.minPrice;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: ListingRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingRecord.$typeName, ...[]), typeArgs: [], isPhantom: ListingRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ListingRecord.fromFields(fields), fromFieldsWithTypes: (item) => ListingRecord.fromFieldsWithTypes(item), fromBcs: (data) => ListingRecord.fromBcs(data), bcs: ListingRecord.bcs, fromJSONField: (field) => ListingRecord.fromJSONField(field), fromJSON: (json) => ListingRecord.fromJSON(json), fromSuiParsedData: (content) => ListingRecord.fromSuiParsedData(content), fromSuiObjectData: (content) => ListingRecord.fromSuiObjectData(content), fetch: async (client, id) => ListingRecord.fetch(client, id), new: (fields) => { return new ListingRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingRecord.reified()); }
    static get p() { return ListingRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingRecord", {
            version: bcs_1.bcs.u64(), min_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ListingRecord.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), minPrice: (0, reified_1.decodeFromFields)("u64", fields.min_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingRecord(item.type)) {
            throw new Error("not a ListingRecord type");
        }
        return ListingRecord.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), minPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return ListingRecord.fromFields(ListingRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), minPrice: this.minPrice.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingRecord.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), minPrice: (0, reified_1.decodeFromJSONField)("u64", field.minPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isListingRecord(data.bcs.type)) {
                throw new Error(`object at is not a ListingRecord object`);
            }
            return ListingRecord.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ListingRecord.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ListingRecord object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListingRecord(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ListingRecord object`);
        }
        return ListingRecord.fromSuiObjectData(res.data);
    }
}
exports.ListingRecord = ListingRecord;
ListingRecord.$typeName = `${PKG_V1}::dragon_trainer::ListingRecord`;
ListingRecord.$numTypeParams = 0;
ListingRecord.$isPhantom = [];
/* ============================== ListingUpdated =============================== */
function isListingUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::ListingUpdated`; }
class ListingUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ListingUpdated.$typeName;
        this.$isPhantom = ListingUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ListingUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByTrainer = fields.listedByTrainer;
        ;
        this.version = fields.version;
        ;
        this.minPrice = fields.minPrice;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: ListingUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ListingUpdated.$typeName, ...[]), typeArgs: [], isPhantom: ListingUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ListingUpdated.fromFields(fields), fromFieldsWithTypes: (item) => ListingUpdated.fromFieldsWithTypes(item), fromBcs: (data) => ListingUpdated.fromBcs(data), bcs: ListingUpdated.bcs, fromJSONField: (field) => ListingUpdated.fromJSONField(field), fromJSON: (json) => ListingUpdated.fromJSON(json), fromSuiParsedData: (content) => ListingUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => ListingUpdated.fromSuiObjectData(content), fetch: async (client, id) => ListingUpdated.fetch(client, id), new: (fields) => { return new ListingUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ListingUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(ListingUpdated.reified()); }
    static get p() { return ListingUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ListingUpdated", {
            listed_by_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), min_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ListingUpdated.reified().new({ listedByTrainer: (0, reified_1.decodeFromFields)("address", fields.listed_by_trainer), version: (0, reified_1.decodeFromFields)("u64", fields.version), minPrice: (0, reified_1.decodeFromFields)("u64", fields.min_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isListingUpdated(item.type)) {
            throw new Error("not a ListingUpdated type");
        }
        return ListingUpdated.reified().new({ listedByTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_trainer), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), minPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return ListingUpdated.fromFields(ListingUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByTrainer: this.listedByTrainer, version: this.version.toString(), minPrice: this.minPrice.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ListingUpdated.reified().new({ listedByTrainer: (0, reified_1.decodeFromJSONField)("address", field.listedByTrainer), version: (0, reified_1.decodeFromJSONField)("u64", field.version), minPrice: (0, reified_1.decodeFromJSONField)("u64", field.minPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isListingUpdated(data.bcs.type)) {
                throw new Error(`object at is not a ListingUpdated object`);
            }
            return ListingUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ListingUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ListingUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListingUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ListingUpdated object`);
        }
        return ListingUpdated.fromSuiObjectData(res.data);
    }
}
exports.ListingUpdated = ListingUpdated;
ListingUpdated.$typeName = `${PKG_V1}::dragon_trainer::ListingUpdated`;
ListingUpdated.$numTypeParams = 0;
ListingUpdated.$isPhantom = [];
/* ============================== LockedDegenHiveAssets =============================== */
function isLockedDegenHiveAssets(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::LockedDegenHiveAssets`; }
class LockedDegenHiveAssets {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LockedDegenHiveAssets.$typeName;
        this.$isPhantom = LockedDegenHiveAssets.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LockedDegenHiveAssets.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.hiveLocked = fields.hiveLocked;
        ;
        this.honeyLocked = fields.honeyLocked;
    }
    static reified() { return { typeName: LockedDegenHiveAssets.$typeName, fullTypeName: (0, util_1.composeSuiType)(LockedDegenHiveAssets.$typeName, ...[]), typeArgs: [], isPhantom: LockedDegenHiveAssets.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LockedDegenHiveAssets.fromFields(fields), fromFieldsWithTypes: (item) => LockedDegenHiveAssets.fromFieldsWithTypes(item), fromBcs: (data) => LockedDegenHiveAssets.fromBcs(data), bcs: LockedDegenHiveAssets.bcs, fromJSONField: (field) => LockedDegenHiveAssets.fromJSONField(field), fromJSON: (json) => LockedDegenHiveAssets.fromJSON(json), fromSuiParsedData: (content) => LockedDegenHiveAssets.fromSuiParsedData(content), fromSuiObjectData: (content) => LockedDegenHiveAssets.fromSuiObjectData(content), fetch: async (client, id) => LockedDegenHiveAssets.fetch(client, id), new: (fields) => { return new LockedDegenHiveAssets([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LockedDegenHiveAssets.reified(); }
    static phantom() { return (0, reified_1.phantom)(LockedDegenHiveAssets.reified()); }
    static get p() { return LockedDegenHiveAssets.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LockedDegenHiveAssets", {
            id: structs_6.UID.bcs, hive_locked: structs_4.Balance.bcs, honey_locked: structs_4.Balance.bcs
        });
    }
    ;
    static fromFields(fields) { return LockedDegenHiveAssets.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), hiveLocked: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.hive_locked), honeyLocked: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.honey_locked) }); }
    static fromFieldsWithTypes(item) {
        if (!isLockedDegenHiveAssets(item.type)) {
            throw new Error("not a LockedDegenHiveAssets type");
        }
        return LockedDegenHiveAssets.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), hiveLocked: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.hive_locked), honeyLocked: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.honey_locked) });
    }
    static fromBcs(data) { return LockedDegenHiveAssets.fromFields(LockedDegenHiveAssets.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, hiveLocked: this.hiveLocked.toJSONField(), honeyLocked: this.honeyLocked.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LockedDegenHiveAssets.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), hiveLocked: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.hiveLocked), honeyLocked: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.honeyLocked) }); }
    static fromJSON(json) {
        if (json.$typeName !== LockedDegenHiveAssets.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LockedDegenHiveAssets.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLockedDegenHiveAssets(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LockedDegenHiveAssets object`);
    } return LockedDegenHiveAssets.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLockedDegenHiveAssets(data.bcs.type)) {
                throw new Error(`object at is not a LockedDegenHiveAssets object`);
            }
            return LockedDegenHiveAssets.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LockedDegenHiveAssets.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LockedDegenHiveAssets object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLockedDegenHiveAssets(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LockedDegenHiveAssets object`);
        }
        return LockedDegenHiveAssets.fromSuiObjectData(res.data);
    }
}
exports.LockedDegenHiveAssets = LockedDegenHiveAssets;
LockedDegenHiveAssets.$typeName = `${PKG_V1}::dragon_trainer::LockedDegenHiveAssets`;
LockedDegenHiveAssets.$numTypeParams = 0;
LockedDegenHiveAssets.$isPhantom = [];
/* ============================== ManagerConfigUpdated =============================== */
function isManagerConfigUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::ManagerConfigUpdated`; }
class ManagerConfigUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ManagerConfigUpdated.$typeName;
        this.$isPhantom = ManagerConfigUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ManagerConfigUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.maxBidsPerBee = fields.maxBidsPerBee;
        ;
        this.minBidAmt = fields.minBidAmt;
        ;
        this.trainerOnboardingFee = fields.trainerOnboardingFee;
        ;
        this.mutationFee = fields.mutationFee;
    }
    static reified() { return { typeName: ManagerConfigUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ManagerConfigUpdated.$typeName, ...[]), typeArgs: [], isPhantom: ManagerConfigUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ManagerConfigUpdated.fromFields(fields), fromFieldsWithTypes: (item) => ManagerConfigUpdated.fromFieldsWithTypes(item), fromBcs: (data) => ManagerConfigUpdated.fromBcs(data), bcs: ManagerConfigUpdated.bcs, fromJSONField: (field) => ManagerConfigUpdated.fromJSONField(field), fromJSON: (json) => ManagerConfigUpdated.fromJSON(json), fromSuiParsedData: (content) => ManagerConfigUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => ManagerConfigUpdated.fromSuiObjectData(content), fetch: async (client, id) => ManagerConfigUpdated.fetch(client, id), new: (fields) => { return new ManagerConfigUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ManagerConfigUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(ManagerConfigUpdated.reified()); }
    static get p() { return ManagerConfigUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ManagerConfigUpdated", {
            max_bids_per_bee: bcs_1.bcs.u64(), min_bid_amt: bcs_1.bcs.u64(), trainer_onboarding_fee: bcs_1.bcs.u64(), mutation_fee: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ManagerConfigUpdated.reified().new({ maxBidsPerBee: (0, reified_1.decodeFromFields)("u64", fields.max_bids_per_bee), minBidAmt: (0, reified_1.decodeFromFields)("u64", fields.min_bid_amt), trainerOnboardingFee: (0, reified_1.decodeFromFields)("u64", fields.trainer_onboarding_fee), mutationFee: (0, reified_1.decodeFromFields)("u64", fields.mutation_fee) }); }
    static fromFieldsWithTypes(item) {
        if (!isManagerConfigUpdated(item.type)) {
            throw new Error("not a ManagerConfigUpdated type");
        }
        return ManagerConfigUpdated.reified().new({ maxBidsPerBee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_bids_per_bee), minBidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_bid_amt), trainerOnboardingFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.trainer_onboarding_fee), mutationFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.mutation_fee) });
    }
    static fromBcs(data) { return ManagerConfigUpdated.fromFields(ManagerConfigUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            maxBidsPerBee: this.maxBidsPerBee.toString(), minBidAmt: this.minBidAmt.toString(), trainerOnboardingFee: this.trainerOnboardingFee.toString(), mutationFee: this.mutationFee.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ManagerConfigUpdated.reified().new({ maxBidsPerBee: (0, reified_1.decodeFromJSONField)("u64", field.maxBidsPerBee), minBidAmt: (0, reified_1.decodeFromJSONField)("u64", field.minBidAmt), trainerOnboardingFee: (0, reified_1.decodeFromJSONField)("u64", field.trainerOnboardingFee), mutationFee: (0, reified_1.decodeFromJSONField)("u64", field.mutationFee) }); }
    static fromJSON(json) {
        if (json.$typeName !== ManagerConfigUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ManagerConfigUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isManagerConfigUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ManagerConfigUpdated object`);
    } return ManagerConfigUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isManagerConfigUpdated(data.bcs.type)) {
                throw new Error(`object at is not a ManagerConfigUpdated object`);
            }
            return ManagerConfigUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ManagerConfigUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ManagerConfigUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isManagerConfigUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ManagerConfigUpdated object`);
        }
        return ManagerConfigUpdated.fromSuiObjectData(res.data);
    }
}
exports.ManagerConfigUpdated = ManagerConfigUpdated;
ManagerConfigUpdated.$typeName = `${PKG_V1}::dragon_trainer::ManagerConfigUpdated`;
ManagerConfigUpdated.$numTypeParams = 0;
ManagerConfigUpdated.$isPhantom = [];
/* ============================== MarketPlace =============================== */
function isMarketPlace(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::MarketPlace`; }
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
    static reified() { return { typeName: MarketPlace.$typeName, fullTypeName: (0, util_1.composeSuiType)(MarketPlace.$typeName, ...[]), typeArgs: [], isPhantom: MarketPlace.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MarketPlace.fromFields(fields), fromFieldsWithTypes: (item) => MarketPlace.fromFieldsWithTypes(item), fromBcs: (data) => MarketPlace.fromBcs(data), bcs: MarketPlace.bcs, fromJSONField: (field) => MarketPlace.fromJSONField(field), fromJSON: (json) => MarketPlace.fromJSON(json), fromSuiParsedData: (content) => MarketPlace.fromSuiParsedData(content), fromSuiObjectData: (content) => MarketPlace.fromSuiObjectData(content), fetch: async (client, id) => MarketPlace.fetch(client, id), new: (fields) => { return new MarketPlace([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MarketPlace.reified(); }
    static phantom() { return (0, reified_1.phantom)(MarketPlace.reified()); }
    static get p() { return MarketPlace.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MarketPlace", {
            id: structs_6.UID.bcs, active_listings: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), available_bids: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), processed_listings: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MarketPlace.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), activeListings: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(Listing.reified())), fields.active_listings), availableBids: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified()))), fields.available_bids), processedListings: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified())), fields.processed_listings), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isMarketPlace(item.type)) {
            throw new Error("not a MarketPlace type");
        }
        return MarketPlace.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), activeListings: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(Listing.reified())), item.fields.active_listings), availableBids: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified()))), item.fields.available_bids), processedListings: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified())), item.fields.processed_listings), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return MarketPlace.fromFields(MarketPlace.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, activeListings: this.activeListings.toJSONField(), availableBids: this.availableBids.toJSONField(), processedListings: this.processedListings.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MarketPlace.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), activeListings: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(Listing.reified())), field.activeListings), availableBids: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified()))), field.availableBids), processedListings: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified())), field.processedListings), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== MarketPlace.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MarketPlace.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMarketPlace(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MarketPlace object`);
    } return MarketPlace.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMarketPlace(data.bcs.type)) {
                throw new Error(`object at is not a MarketPlace object`);
            }
            return MarketPlace.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MarketPlace.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MarketPlace object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMarketPlace(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MarketPlace object`);
        }
        return MarketPlace.fromSuiObjectData(res.data);
    }
}
exports.MarketPlace = MarketPlace;
MarketPlace.$typeName = `${PKG_V1}::dragon_trainer::MarketPlace`;
MarketPlace.$numTypeParams = 0;
MarketPlace.$isPhantom = [];
/* ============================== MasterKeyReplenished =============================== */
function isMasterKeyReplenished(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::MasterKeyReplenished`; }
class MasterKeyReplenished {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MasterKeyReplenished.$typeName;
        this.$isPhantom = MasterKeyReplenished.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MasterKeyReplenished.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.addr = fields.addr;
        ;
        this.appName = fields.appName;
        ;
        this.honeyEarned = fields.honeyEarned;
        ;
        this.energyAdded = fields.energyAdded;
        ;
        this.healthAdded = fields.healthAdded;
        ;
        this.availableEnergy = fields.availableEnergy;
        ;
        this.availableHealth = fields.availableHealth;
    }
    static reified() { return { typeName: MasterKeyReplenished.$typeName, fullTypeName: (0, util_1.composeSuiType)(MasterKeyReplenished.$typeName, ...[]), typeArgs: [], isPhantom: MasterKeyReplenished.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MasterKeyReplenished.fromFields(fields), fromFieldsWithTypes: (item) => MasterKeyReplenished.fromFieldsWithTypes(item), fromBcs: (data) => MasterKeyReplenished.fromBcs(data), bcs: MasterKeyReplenished.bcs, fromJSONField: (field) => MasterKeyReplenished.fromJSONField(field), fromJSON: (json) => MasterKeyReplenished.fromJSON(json), fromSuiParsedData: (content) => MasterKeyReplenished.fromSuiParsedData(content), fromSuiObjectData: (content) => MasterKeyReplenished.fromSuiObjectData(content), fetch: async (client, id) => MasterKeyReplenished.fetch(client, id), new: (fields) => { return new MasterKeyReplenished([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MasterKeyReplenished.reified(); }
    static phantom() { return (0, reified_1.phantom)(MasterKeyReplenished.reified()); }
    static get p() { return MasterKeyReplenished.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MasterKeyReplenished", {
            addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), app_name: structs_1.String.bcs, honey_earned: bcs_1.bcs.u64(), energy_added: bcs_1.bcs.u64(), health_added: bcs_1.bcs.u64(), available_energy: bcs_1.bcs.u64(), available_health: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MasterKeyReplenished.reified().new({ addr: (0, reified_1.decodeFromFields)("address", fields.addr), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name), honeyEarned: (0, reified_1.decodeFromFields)("u64", fields.honey_earned), energyAdded: (0, reified_1.decodeFromFields)("u64", fields.energy_added), healthAdded: (0, reified_1.decodeFromFields)("u64", fields.health_added), availableEnergy: (0, reified_1.decodeFromFields)("u64", fields.available_energy), availableHealth: (0, reified_1.decodeFromFields)("u64", fields.available_health) }); }
    static fromFieldsWithTypes(item) {
        if (!isMasterKeyReplenished(item.type)) {
            throw new Error("not a MasterKeyReplenished type");
        }
        return MasterKeyReplenished.reified().new({ addr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.addr), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name), honeyEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_earned), energyAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy_added), healthAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.health_added), availableEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.available_energy), availableHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.available_health) });
    }
    static fromBcs(data) { return MasterKeyReplenished.fromFields(MasterKeyReplenished.bcs.parse(data)); }
    toJSONField() {
        return {
            addr: this.addr, appName: this.appName, honeyEarned: this.honeyEarned.toString(), energyAdded: this.energyAdded.toString(), healthAdded: this.healthAdded.toString(), availableEnergy: this.availableEnergy.toString(), availableHealth: this.availableHealth.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MasterKeyReplenished.reified().new({ addr: (0, reified_1.decodeFromJSONField)("address", field.addr), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName), honeyEarned: (0, reified_1.decodeFromJSONField)("u64", field.honeyEarned), energyAdded: (0, reified_1.decodeFromJSONField)("u64", field.energyAdded), healthAdded: (0, reified_1.decodeFromJSONField)("u64", field.healthAdded), availableEnergy: (0, reified_1.decodeFromJSONField)("u64", field.availableEnergy), availableHealth: (0, reified_1.decodeFromJSONField)("u64", field.availableHealth) }); }
    static fromJSON(json) {
        if (json.$typeName !== MasterKeyReplenished.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MasterKeyReplenished.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMasterKeyReplenished(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MasterKeyReplenished object`);
    } return MasterKeyReplenished.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMasterKeyReplenished(data.bcs.type)) {
                throw new Error(`object at is not a MasterKeyReplenished object`);
            }
            return MasterKeyReplenished.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MasterKeyReplenished.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MasterKeyReplenished object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMasterKeyReplenished(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MasterKeyReplenished object`);
        }
        return MasterKeyReplenished.fromSuiObjectData(res.data);
    }
}
exports.MasterKeyReplenished = MasterKeyReplenished;
MasterKeyReplenished.$typeName = `${PKG_V1}::dragon_trainer::MasterKeyReplenished`;
MasterKeyReplenished.$numTypeParams = 0;
MasterKeyReplenished.$isPhantom = [];
/* ============================== MemeCoinLaunchedViaBee =============================== */
function isMemeCoinLaunchedViaBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::MemeCoinLaunchedViaBee`; }
class MemeCoinLaunchedViaBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemeCoinLaunchedViaBee.$typeName;
        this.$isPhantom = MemeCoinLaunchedViaBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemeCoinLaunchedViaBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.memeIdentifier = fields.memeIdentifier;
        ;
        this.beeVersion = fields.beeVersion;
        ;
        this.cooldownStage = fields.cooldownStage;
        ;
        this.cooldownTillTs = fields.cooldownTillTs;
    }
    static reified() { return { typeName: MemeCoinLaunchedViaBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemeCoinLaunchedViaBee.$typeName, ...[]), typeArgs: [], isPhantom: MemeCoinLaunchedViaBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MemeCoinLaunchedViaBee.fromFields(fields), fromFieldsWithTypes: (item) => MemeCoinLaunchedViaBee.fromFieldsWithTypes(item), fromBcs: (data) => MemeCoinLaunchedViaBee.fromBcs(data), bcs: MemeCoinLaunchedViaBee.bcs, fromJSONField: (field) => MemeCoinLaunchedViaBee.fromJSONField(field), fromJSON: (json) => MemeCoinLaunchedViaBee.fromJSON(json), fromSuiParsedData: (content) => MemeCoinLaunchedViaBee.fromSuiParsedData(content), fromSuiObjectData: (content) => MemeCoinLaunchedViaBee.fromSuiObjectData(content), fetch: async (client, id) => MemeCoinLaunchedViaBee.fetch(client, id), new: (fields) => { return new MemeCoinLaunchedViaBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemeCoinLaunchedViaBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(MemeCoinLaunchedViaBee.reified()); }
    static get p() { return MemeCoinLaunchedViaBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MemeCoinLaunchedViaBee", {
            meme_identifier: structs_1.String.bcs, bee_version: bcs_1.bcs.u64(), cooldown_stage: bcs_1.bcs.u64(), cooldown_till_ts: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MemeCoinLaunchedViaBee.reified().new({ memeIdentifier: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.meme_identifier), beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), cooldownStage: (0, reified_1.decodeFromFields)("u64", fields.cooldown_stage), cooldownTillTs: (0, reified_1.decodeFromFields)("u64", fields.cooldown_till_ts) }); }
    static fromFieldsWithTypes(item) {
        if (!isMemeCoinLaunchedViaBee(item.type)) {
            throw new Error("not a MemeCoinLaunchedViaBee type");
        }
        return MemeCoinLaunchedViaBee.reified().new({ memeIdentifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.meme_identifier), beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), cooldownStage: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cooldown_stage), cooldownTillTs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cooldown_till_ts) });
    }
    static fromBcs(data) { return MemeCoinLaunchedViaBee.fromFields(MemeCoinLaunchedViaBee.bcs.parse(data)); }
    toJSONField() {
        return {
            memeIdentifier: this.memeIdentifier, beeVersion: this.beeVersion.toString(), cooldownStage: this.cooldownStage.toString(), cooldownTillTs: this.cooldownTillTs.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MemeCoinLaunchedViaBee.reified().new({ memeIdentifier: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.memeIdentifier), beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), cooldownStage: (0, reified_1.decodeFromJSONField)("u64", field.cooldownStage), cooldownTillTs: (0, reified_1.decodeFromJSONField)("u64", field.cooldownTillTs) }); }
    static fromJSON(json) {
        if (json.$typeName !== MemeCoinLaunchedViaBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MemeCoinLaunchedViaBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemeCoinLaunchedViaBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemeCoinLaunchedViaBee object`);
    } return MemeCoinLaunchedViaBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemeCoinLaunchedViaBee(data.bcs.type)) {
                throw new Error(`object at is not a MemeCoinLaunchedViaBee object`);
            }
            return MemeCoinLaunchedViaBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemeCoinLaunchedViaBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemeCoinLaunchedViaBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemeCoinLaunchedViaBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemeCoinLaunchedViaBee object`);
        }
        return MemeCoinLaunchedViaBee.fromSuiObjectData(res.data);
    }
}
exports.MemeCoinLaunchedViaBee = MemeCoinLaunchedViaBee;
MemeCoinLaunchedViaBee.$typeName = `${PKG_V1}::dragon_trainer::MemeCoinLaunchedViaBee`;
MemeCoinLaunchedViaBee.$numTypeParams = 0;
MemeCoinLaunchedViaBee.$isPhantom = [];
/* ============================== MemepadCapability =============================== */
function isMemepadCapability(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::MemepadCapability`; }
class MemepadCapability {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemepadCapability.$typeName;
        this.$isPhantom = MemepadCapability.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemepadCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: MemepadCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemepadCapability.$typeName, ...[]), typeArgs: [], isPhantom: MemepadCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MemepadCapability.fromFields(fields), fromFieldsWithTypes: (item) => MemepadCapability.fromFieldsWithTypes(item), fromBcs: (data) => MemepadCapability.fromBcs(data), bcs: MemepadCapability.bcs, fromJSONField: (field) => MemepadCapability.fromJSONField(field), fromJSON: (json) => MemepadCapability.fromJSON(json), fromSuiParsedData: (content) => MemepadCapability.fromSuiParsedData(content), fromSuiObjectData: (content) => MemepadCapability.fromSuiObjectData(content), fetch: async (client, id) => MemepadCapability.fetch(client, id), new: (fields) => { return new MemepadCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemepadCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(MemepadCapability.reified()); }
    static get p() { return MemepadCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MemepadCapability", {
            id: structs_6.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return MemepadCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isMemepadCapability(item.type)) {
            throw new Error("not a MemepadCapability type");
        }
        return MemepadCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return MemepadCapability.fromFields(MemepadCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MemepadCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== MemepadCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MemepadCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemepadCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemepadCapability object`);
    } return MemepadCapability.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemepadCapability(data.bcs.type)) {
                throw new Error(`object at is not a MemepadCapability object`);
            }
            return MemepadCapability.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemepadCapability.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemepadCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemepadCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemepadCapability object`);
        }
        return MemepadCapability.fromSuiObjectData(res.data);
    }
}
exports.MemepadCapability = MemepadCapability;
MemepadCapability.$typeName = `${PKG_V1}::dragon_trainer::MemepadCapability`;
MemepadCapability.$numTypeParams = 0;
MemepadCapability.$isPhantom = [];
/* ============================== MysticalBee =============================== */
function isMysticalBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::MysticalBee`; }
class MysticalBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MysticalBee.$typeName;
        this.$isPhantom = MysticalBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MysticalBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
        ;
        this.name = fields.name;
        ;
        this.ownedBy = fields.ownedBy;
        ;
        this.queenVersion = fields.queenVersion;
        ;
        this.genes = fields.genes;
        ;
        this.appearance = fields.appearance;
        ;
        this.birthCertificate = fields.birthCertificate;
        ;
        this.eggsBasket = fields.eggsBasket;
        ;
        this.nectar = fields.nectar;
        ;
        this.capabilities = fields.capabilities;
        ;
        this.gameState = fields.gameState;
        ;
        this.hiveEnergy = fields.hiveEnergy;
        ;
        this.honeyHealth = fields.honeyHealth;
        ;
        this.dragonDust = fields.dragonDust;
        ;
        this.isHatched = fields.isHatched;
    }
    static reified() { return { typeName: MysticalBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(MysticalBee.$typeName, ...[]), typeArgs: [], isPhantom: MysticalBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MysticalBee.fromFields(fields), fromFieldsWithTypes: (item) => MysticalBee.fromFieldsWithTypes(item), fromBcs: (data) => MysticalBee.fromBcs(data), bcs: MysticalBee.bcs, fromJSONField: (field) => MysticalBee.fromJSONField(field), fromJSON: (json) => MysticalBee.fromJSON(json), fromSuiParsedData: (content) => MysticalBee.fromSuiParsedData(content), fromSuiObjectData: (content) => MysticalBee.fromSuiObjectData(content), fetch: async (client, id) => MysticalBee.fetch(client, id), new: (fields) => { return new MysticalBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MysticalBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(MysticalBee.reified()); }
    static get p() { return MysticalBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MysticalBee", {
            id: structs_6.UID.bcs, version: bcs_1.bcs.u64(), name: structs_3.String.bcs, owned_by: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), queen_version: bcs_1.bcs.u64(), genes: bcs_1.bcs.u256(), appearance: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), birth_certificate: BirthCertificate.bcs, eggs_basket: EggBasketInfo.bcs, nectar: NectarStore.bcs, capabilities: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), game_state: structs_5.LinkedTable.bcs(structs_1.String.bcs), hive_energy: bcs_1.bcs.u64(), honey_health: bcs_1.bcs.u64(), dragon_dust: bcs_1.bcs.u64(), is_hatched: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return MysticalBee.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u64", fields.version), name: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.name), ownedBy: (0, reified_1.decodeFromFields)("address", fields.owned_by), queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), genes: (0, reified_1.decodeFromFields)("u256", fields.genes), appearance: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())), fields.appearance), birthCertificate: (0, reified_1.decodeFromFields)(BirthCertificate.reified(), fields.birth_certificate), eggsBasket: (0, reified_1.decodeFromFields)(EggBasketInfo.reified(), fields.eggs_basket), nectar: (0, reified_1.decodeFromFields)(NectarStore.reified(), fields.nectar), capabilities: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), fields.capabilities), gameState: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.game_state), hiveEnergy: (0, reified_1.decodeFromFields)("u64", fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFields)("u64", fields.honey_health), dragonDust: (0, reified_1.decodeFromFields)("u64", fields.dragon_dust), isHatched: (0, reified_1.decodeFromFields)("bool", fields.is_hatched) }); }
    static fromFieldsWithTypes(item) {
        if (!isMysticalBee(item.type)) {
            throw new Error("not a MysticalBee type");
        }
        return MysticalBee.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.name), ownedBy: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owned_by), queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), genes: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.genes), appearance: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())), item.fields.appearance), birthCertificate: (0, reified_1.decodeFromFieldsWithTypes)(BirthCertificate.reified(), item.fields.birth_certificate), eggsBasket: (0, reified_1.decodeFromFieldsWithTypes)(EggBasketInfo.reified(), item.fields.eggs_basket), nectar: (0, reified_1.decodeFromFieldsWithTypes)(NectarStore.reified(), item.fields.nectar), capabilities: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), item.fields.capabilities), gameState: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.game_state), hiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_health), dragonDust: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dragon_dust), isHatched: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_hatched) });
    }
    static fromBcs(data) { return MysticalBee.fromFields(MysticalBee.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, version: this.version.toString(), name: this.name, ownedBy: this.ownedBy, queenVersion: this.queenVersion.toString(), genes: this.genes.toString(), appearance: this.appearance.toJSONField(), birthCertificate: this.birthCertificate.toJSONField(), eggsBasket: this.eggsBasket.toJSONField(), nectar: this.nectar.toJSONField(), capabilities: this.capabilities.toJSONField(), gameState: this.gameState.toJSONField(), hiveEnergy: this.hiveEnergy.toString(), honeyHealth: this.honeyHealth.toString(), dragonDust: this.dragonDust.toString(), isHatched: this.isHatched,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MysticalBee.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u64", field.version), name: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.name), ownedBy: (0, reified_1.decodeFromJSONField)("address", field.ownedBy), queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), genes: (0, reified_1.decodeFromJSONField)("u256", field.genes), appearance: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(structs_3.String.reified())), field.appearance), birthCertificate: (0, reified_1.decodeFromJSONField)(BirthCertificate.reified(), field.birthCertificate), eggsBasket: (0, reified_1.decodeFromJSONField)(EggBasketInfo.reified(), field.eggsBasket), nectar: (0, reified_1.decodeFromJSONField)(NectarStore.reified(), field.nectar), capabilities: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), field.capabilities), gameState: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.gameState), hiveEnergy: (0, reified_1.decodeFromJSONField)("u64", field.hiveEnergy), honeyHealth: (0, reified_1.decodeFromJSONField)("u64", field.honeyHealth), dragonDust: (0, reified_1.decodeFromJSONField)("u64", field.dragonDust), isHatched: (0, reified_1.decodeFromJSONField)("bool", field.isHatched) }); }
    static fromJSON(json) {
        if (json.$typeName !== MysticalBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MysticalBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMysticalBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MysticalBee object`);
    } return MysticalBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMysticalBee(data.bcs.type)) {
                throw new Error(`object at is not a MysticalBee object`);
            }
            return MysticalBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MysticalBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MysticalBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMysticalBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MysticalBee object`);
        }
        return MysticalBee.fromSuiObjectData(res.data);
    }
}
exports.MysticalBee = MysticalBee;
MysticalBee.$typeName = `${PKG_V1}::dragon_trainer::MysticalBee`;
MysticalBee.$numTypeParams = 0;
MysticalBee.$isPhantom = [];
/* ============================== MysticalBeeRenamed =============================== */
function isMysticalBeeRenamed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::MysticalBeeRenamed`; }
class MysticalBeeRenamed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MysticalBeeRenamed.$typeName;
        this.$isPhantom = MysticalBeeRenamed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MysticalBeeRenamed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.version = fields.version;
        ;
        this.newBeeName = fields.newBeeName;
    }
    static reified() { return { typeName: MysticalBeeRenamed.$typeName, fullTypeName: (0, util_1.composeSuiType)(MysticalBeeRenamed.$typeName, ...[]), typeArgs: [], isPhantom: MysticalBeeRenamed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MysticalBeeRenamed.fromFields(fields), fromFieldsWithTypes: (item) => MysticalBeeRenamed.fromFieldsWithTypes(item), fromBcs: (data) => MysticalBeeRenamed.fromBcs(data), bcs: MysticalBeeRenamed.bcs, fromJSONField: (field) => MysticalBeeRenamed.fromJSONField(field), fromJSON: (json) => MysticalBeeRenamed.fromJSON(json), fromSuiParsedData: (content) => MysticalBeeRenamed.fromSuiParsedData(content), fromSuiObjectData: (content) => MysticalBeeRenamed.fromSuiObjectData(content), fetch: async (client, id) => MysticalBeeRenamed.fetch(client, id), new: (fields) => { return new MysticalBeeRenamed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MysticalBeeRenamed.reified(); }
    static phantom() { return (0, reified_1.phantom)(MysticalBeeRenamed.reified()); }
    static get p() { return MysticalBeeRenamed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MysticalBeeRenamed", {
            trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), new_bee_name: structs_3.String.bcs
        });
    }
    ;
    static fromFields(fields) { return MysticalBeeRenamed.reified().new({ trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), version: (0, reified_1.decodeFromFields)("u64", fields.version), newBeeName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.new_bee_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isMysticalBeeRenamed(item.type)) {
            throw new Error("not a MysticalBeeRenamed type");
        }
        return MysticalBeeRenamed.reified().new({ trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), newBeeName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.new_bee_name) });
    }
    static fromBcs(data) { return MysticalBeeRenamed.fromFields(MysticalBeeRenamed.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddr: this.trainerAddr, version: this.version.toString(), newBeeName: this.newBeeName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MysticalBeeRenamed.reified().new({ trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), version: (0, reified_1.decodeFromJSONField)("u64", field.version), newBeeName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.newBeeName) }); }
    static fromJSON(json) {
        if (json.$typeName !== MysticalBeeRenamed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MysticalBeeRenamed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMysticalBeeRenamed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MysticalBeeRenamed object`);
    } return MysticalBeeRenamed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMysticalBeeRenamed(data.bcs.type)) {
                throw new Error(`object at is not a MysticalBeeRenamed object`);
            }
            return MysticalBeeRenamed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MysticalBeeRenamed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MysticalBeeRenamed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMysticalBeeRenamed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MysticalBeeRenamed object`);
        }
        return MysticalBeeRenamed.fromSuiObjectData(res.data);
    }
}
exports.MysticalBeeRenamed = MysticalBeeRenamed;
MysticalBeeRenamed.$typeName = `${PKG_V1}::dragon_trainer::MysticalBeeRenamed`;
MysticalBeeRenamed.$numTypeParams = 0;
MysticalBeeRenamed.$isPhantom = [];
/* ============================== MysticalBeeReturnedFromCompetition =============================== */
function isMysticalBeeReturnedFromCompetition(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::MysticalBeeReturnedFromCompetition`; }
class MysticalBeeReturnedFromCompetition {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MysticalBeeReturnedFromCompetition.$typeName;
        this.$isPhantom = MysticalBeeReturnedFromCompetition.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MysticalBeeReturnedFromCompetition.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.recepientTrainer = fields.recepientTrainer;
        ;
        this.recepientUsername = fields.recepientUsername;
        ;
        this.version = fields.version;
        ;
        this.energyIncrease = fields.energyIncrease;
        ;
        this.healthIncrease = fields.healthIncrease;
        ;
        this.hiveEnergy = fields.hiveEnergy;
        ;
        this.honeyHealth = fields.honeyHealth;
    }
    static reified() { return { typeName: MysticalBeeReturnedFromCompetition.$typeName, fullTypeName: (0, util_1.composeSuiType)(MysticalBeeReturnedFromCompetition.$typeName, ...[]), typeArgs: [], isPhantom: MysticalBeeReturnedFromCompetition.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MysticalBeeReturnedFromCompetition.fromFields(fields), fromFieldsWithTypes: (item) => MysticalBeeReturnedFromCompetition.fromFieldsWithTypes(item), fromBcs: (data) => MysticalBeeReturnedFromCompetition.fromBcs(data), bcs: MysticalBeeReturnedFromCompetition.bcs, fromJSONField: (field) => MysticalBeeReturnedFromCompetition.fromJSONField(field), fromJSON: (json) => MysticalBeeReturnedFromCompetition.fromJSON(json), fromSuiParsedData: (content) => MysticalBeeReturnedFromCompetition.fromSuiParsedData(content), fromSuiObjectData: (content) => MysticalBeeReturnedFromCompetition.fromSuiObjectData(content), fetch: async (client, id) => MysticalBeeReturnedFromCompetition.fetch(client, id), new: (fields) => { return new MysticalBeeReturnedFromCompetition([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MysticalBeeReturnedFromCompetition.reified(); }
    static phantom() { return (0, reified_1.phantom)(MysticalBeeReturnedFromCompetition.reified()); }
    static get p() { return MysticalBeeReturnedFromCompetition.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MysticalBeeReturnedFromCompetition", {
            recepient_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), recepient_username: structs_1.String.bcs, version: bcs_1.bcs.u64(), energy_increase: bcs_1.bcs.u64(), health_increase: bcs_1.bcs.u64(), hive_energy: bcs_1.bcs.u64(), honey_health: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MysticalBeeReturnedFromCompetition.reified().new({ recepientTrainer: (0, reified_1.decodeFromFields)("address", fields.recepient_trainer), recepientUsername: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.recepient_username), version: (0, reified_1.decodeFromFields)("u64", fields.version), energyIncrease: (0, reified_1.decodeFromFields)("u64", fields.energy_increase), healthIncrease: (0, reified_1.decodeFromFields)("u64", fields.health_increase), hiveEnergy: (0, reified_1.decodeFromFields)("u64", fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFields)("u64", fields.honey_health) }); }
    static fromFieldsWithTypes(item) {
        if (!isMysticalBeeReturnedFromCompetition(item.type)) {
            throw new Error("not a MysticalBeeReturnedFromCompetition type");
        }
        return MysticalBeeReturnedFromCompetition.reified().new({ recepientTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.recepient_trainer), recepientUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.recepient_username), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), energyIncrease: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy_increase), healthIncrease: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.health_increase), hiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_health) });
    }
    static fromBcs(data) { return MysticalBeeReturnedFromCompetition.fromFields(MysticalBeeReturnedFromCompetition.bcs.parse(data)); }
    toJSONField() {
        return {
            recepientTrainer: this.recepientTrainer, recepientUsername: this.recepientUsername, version: this.version.toString(), energyIncrease: this.energyIncrease.toString(), healthIncrease: this.healthIncrease.toString(), hiveEnergy: this.hiveEnergy.toString(), honeyHealth: this.honeyHealth.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MysticalBeeReturnedFromCompetition.reified().new({ recepientTrainer: (0, reified_1.decodeFromJSONField)("address", field.recepientTrainer), recepientUsername: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.recepientUsername), version: (0, reified_1.decodeFromJSONField)("u64", field.version), energyIncrease: (0, reified_1.decodeFromJSONField)("u64", field.energyIncrease), healthIncrease: (0, reified_1.decodeFromJSONField)("u64", field.healthIncrease), hiveEnergy: (0, reified_1.decodeFromJSONField)("u64", field.hiveEnergy), honeyHealth: (0, reified_1.decodeFromJSONField)("u64", field.honeyHealth) }); }
    static fromJSON(json) {
        if (json.$typeName !== MysticalBeeReturnedFromCompetition.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MysticalBeeReturnedFromCompetition.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMysticalBeeReturnedFromCompetition(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MysticalBeeReturnedFromCompetition object`);
    } return MysticalBeeReturnedFromCompetition.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMysticalBeeReturnedFromCompetition(data.bcs.type)) {
                throw new Error(`object at is not a MysticalBeeReturnedFromCompetition object`);
            }
            return MysticalBeeReturnedFromCompetition.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MysticalBeeReturnedFromCompetition.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MysticalBeeReturnedFromCompetition object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMysticalBeeReturnedFromCompetition(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MysticalBeeReturnedFromCompetition object`);
        }
        return MysticalBeeReturnedFromCompetition.fromSuiObjectData(res.data);
    }
}
exports.MysticalBeeReturnedFromCompetition = MysticalBeeReturnedFromCompetition;
MysticalBeeReturnedFromCompetition.$typeName = `${PKG_V1}::dragon_trainer::MysticalBeeReturnedFromCompetition`;
MysticalBeeReturnedFromCompetition.$numTypeParams = 0;
MysticalBeeReturnedFromCompetition.$isPhantom = [];
/* ============================== NectarStore =============================== */
function isNectarStore(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::NectarStore`; }
class NectarStore {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NectarStore.$typeName;
        this.$isPhantom = NectarStore.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NectarStore.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.evolutionStage = fields.evolutionStage;
        ;
        this.lockupWeeks = fields.lockupWeeks;
        ;
        this.hiveLocked = fields.hiveLocked;
        ;
        this.weightedHiveLocked = fields.weightedHiveLocked;
        ;
        this.unlockTimestamp = fields.unlockTimestamp;
        ;
        this.honeyLocked = fields.honeyLocked;
        ;
        this.weightedHoneyLocked = fields.weightedHoneyLocked;
        ;
        this.hiveClaimIndex = fields.hiveClaimIndex;
        ;
        this.honeyClaimIndex = fields.honeyClaimIndex;
    }
    static reified() { return { typeName: NectarStore.$typeName, fullTypeName: (0, util_1.composeSuiType)(NectarStore.$typeName, ...[]), typeArgs: [], isPhantom: NectarStore.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NectarStore.fromFields(fields), fromFieldsWithTypes: (item) => NectarStore.fromFieldsWithTypes(item), fromBcs: (data) => NectarStore.fromBcs(data), bcs: NectarStore.bcs, fromJSONField: (field) => NectarStore.fromJSONField(field), fromJSON: (json) => NectarStore.fromJSON(json), fromSuiParsedData: (content) => NectarStore.fromSuiParsedData(content), fromSuiObjectData: (content) => NectarStore.fromSuiObjectData(content), fetch: async (client, id) => NectarStore.fetch(client, id), new: (fields) => { return new NectarStore([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NectarStore.reified(); }
    static phantom() { return (0, reified_1.phantom)(NectarStore.reified()); }
    static get p() { return NectarStore.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NectarStore", {
            evolution_stage: bcs_1.bcs.u8(), lockup_weeks: bcs_1.bcs.u64(), hive_locked: structs_4.Balance.bcs, weighted_hive_locked: bcs_1.bcs.u128(), unlock_timestamp: bcs_1.bcs.u64(), honey_locked: structs_4.Balance.bcs, weighted_honey_locked: bcs_1.bcs.u128(), hive_claim_index: bcs_1.bcs.u256(), honey_claim_index: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(fields) { return NectarStore.reified().new({ evolutionStage: (0, reified_1.decodeFromFields)("u8", fields.evolution_stage), lockupWeeks: (0, reified_1.decodeFromFields)("u64", fields.lockup_weeks), hiveLocked: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.hive_locked), weightedHiveLocked: (0, reified_1.decodeFromFields)("u128", fields.weighted_hive_locked), unlockTimestamp: (0, reified_1.decodeFromFields)("u64", fields.unlock_timestamp), honeyLocked: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.honey_locked), weightedHoneyLocked: (0, reified_1.decodeFromFields)("u128", fields.weighted_honey_locked), hiveClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.hive_claim_index), honeyClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.honey_claim_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isNectarStore(item.type)) {
            throw new Error("not a NectarStore type");
        }
        return NectarStore.reified().new({ evolutionStage: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.evolution_stage), lockupWeeks: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lockup_weeks), hiveLocked: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.hive_locked), weightedHiveLocked: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.weighted_hive_locked), unlockTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlock_timestamp), honeyLocked: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.honey_locked), weightedHoneyLocked: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.weighted_honey_locked), hiveClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_claim_index), honeyClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.honey_claim_index) });
    }
    static fromBcs(data) { return NectarStore.fromFields(NectarStore.bcs.parse(data)); }
    toJSONField() {
        return {
            evolutionStage: this.evolutionStage, lockupWeeks: this.lockupWeeks.toString(), hiveLocked: this.hiveLocked.toJSONField(), weightedHiveLocked: this.weightedHiveLocked.toString(), unlockTimestamp: this.unlockTimestamp.toString(), honeyLocked: this.honeyLocked.toJSONField(), weightedHoneyLocked: this.weightedHoneyLocked.toString(), hiveClaimIndex: this.hiveClaimIndex.toString(), honeyClaimIndex: this.honeyClaimIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NectarStore.reified().new({ evolutionStage: (0, reified_1.decodeFromJSONField)("u8", field.evolutionStage), lockupWeeks: (0, reified_1.decodeFromJSONField)("u64", field.lockupWeeks), hiveLocked: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.hiveLocked), weightedHiveLocked: (0, reified_1.decodeFromJSONField)("u128", field.weightedHiveLocked), unlockTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.unlockTimestamp), honeyLocked: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.honeyLocked), weightedHoneyLocked: (0, reified_1.decodeFromJSONField)("u128", field.weightedHoneyLocked), hiveClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.hiveClaimIndex), honeyClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.honeyClaimIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== NectarStore.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NectarStore.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNectarStore(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NectarStore object`);
    } return NectarStore.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNectarStore(data.bcs.type)) {
                throw new Error(`object at is not a NectarStore object`);
            }
            return NectarStore.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NectarStore.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NectarStore object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNectarStore(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NectarStore object`);
        }
        return NectarStore.fromSuiObjectData(res.data);
    }
}
exports.NectarStore = NectarStore;
NectarStore.$typeName = `${PKG_V1}::dragon_trainer::NectarStore`;
NectarStore.$numTypeParams = 0;
NectarStore.$isPhantom = [];
/* ============================== NewEggIncubated =============================== */
function isNewEggIncubated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::NewEggIncubated`; }
class NewEggIncubated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewEggIncubated.$typeName;
        this.$isPhantom = NewEggIncubated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewEggIncubated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.childVersion = fields.childVersion;
        ;
        this.incubatedAt = fields.incubatedAt;
        ;
        this.childGeneration = fields.childGeneration;
        ;
        this.queenId = fields.queenId;
        ;
        this.queenVersion = fields.queenVersion;
        ;
        this.stingerBeeId = fields.stingerBeeId;
        ;
        this.stingerVersion = fields.stingerVersion;
        ;
        this.queenGene = fields.queenGene;
        ;
        this.stingerGene = fields.stingerGene;
        ;
        this.childGene = fields.childGene;
        ;
        this.hiveEnergyForEgg = fields.hiveEnergyForEgg;
        ;
        this.honeyHealthForEgg = fields.honeyHealthForEgg;
        ;
        this.totalBreedingCost = fields.totalBreedingCost;
        ;
        this.platformFees = fields.platformFees;
        ;
        this.govYieldAmt = fields.govYieldAmt;
        ;
        this.treasuryFees = fields.treasuryFees;
        ;
        this.stingerCooldownStage = fields.stingerCooldownStage;
        ;
        this.stingerCooldownTill = fields.stingerCooldownTill;
    }
    static reified() { return { typeName: NewEggIncubated.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewEggIncubated.$typeName, ...[]), typeArgs: [], isPhantom: NewEggIncubated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewEggIncubated.fromFields(fields), fromFieldsWithTypes: (item) => NewEggIncubated.fromFieldsWithTypes(item), fromBcs: (data) => NewEggIncubated.fromBcs(data), bcs: NewEggIncubated.bcs, fromJSONField: (field) => NewEggIncubated.fromJSONField(field), fromJSON: (json) => NewEggIncubated.fromJSON(json), fromSuiParsedData: (content) => NewEggIncubated.fromSuiParsedData(content), fromSuiObjectData: (content) => NewEggIncubated.fromSuiObjectData(content), fetch: async (client, id) => NewEggIncubated.fetch(client, id), new: (fields) => { return new NewEggIncubated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewEggIncubated.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewEggIncubated.reified()); }
    static get p() { return NewEggIncubated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewEggIncubated", {
            child_version: bcs_1.bcs.u64(), incubated_at: bcs_1.bcs.u64(), child_generation: bcs_1.bcs.u64(), queenId: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), queen_version: bcs_1.bcs.u64(), stingerBeeId: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), stinger_version: bcs_1.bcs.u64(), queen_gene: bcs_1.bcs.u256(), stinger_gene: bcs_1.bcs.u256(), child_gene: bcs_1.bcs.u256(), hive_energy_for_egg: bcs_1.bcs.u64(), honey_health_for_egg: bcs_1.bcs.u64(), total_breeding_cost: bcs_1.bcs.u64(), platform_fees: bcs_1.bcs.u64(), gov_yield_amt: bcs_1.bcs.u64(), treasury_fees: bcs_1.bcs.u64(), stinger_cooldown_stage: bcs_1.bcs.u8(), stinger_cooldown_till: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewEggIncubated.reified().new({ childVersion: (0, reified_1.decodeFromFields)("u64", fields.child_version), incubatedAt: (0, reified_1.decodeFromFields)("u64", fields.incubated_at), childGeneration: (0, reified_1.decodeFromFields)("u64", fields.child_generation), queenId: (0, reified_1.decodeFromFields)("address", fields.queenId), queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), stingerBeeId: (0, reified_1.decodeFromFields)("address", fields.stingerBeeId), stingerVersion: (0, reified_1.decodeFromFields)("u64", fields.stinger_version), queenGene: (0, reified_1.decodeFromFields)("u256", fields.queen_gene), stingerGene: (0, reified_1.decodeFromFields)("u256", fields.stinger_gene), childGene: (0, reified_1.decodeFromFields)("u256", fields.child_gene), hiveEnergyForEgg: (0, reified_1.decodeFromFields)("u64", fields.hive_energy_for_egg), honeyHealthForEgg: (0, reified_1.decodeFromFields)("u64", fields.honey_health_for_egg), totalBreedingCost: (0, reified_1.decodeFromFields)("u64", fields.total_breeding_cost), platformFees: (0, reified_1.decodeFromFields)("u64", fields.platform_fees), govYieldAmt: (0, reified_1.decodeFromFields)("u64", fields.gov_yield_amt), treasuryFees: (0, reified_1.decodeFromFields)("u64", fields.treasury_fees), stingerCooldownStage: (0, reified_1.decodeFromFields)("u8", fields.stinger_cooldown_stage), stingerCooldownTill: (0, reified_1.decodeFromFields)("u64", fields.stinger_cooldown_till) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewEggIncubated(item.type)) {
            throw new Error("not a NewEggIncubated type");
        }
        return NewEggIncubated.reified().new({ childVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.child_version), incubatedAt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.incubated_at), childGeneration: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.child_generation), queenId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.queenId), queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), stingerBeeId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.stingerBeeId), stingerVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stinger_version), queenGene: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.queen_gene), stingerGene: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.stinger_gene), childGene: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.child_gene), hiveEnergyForEgg: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_energy_for_egg), honeyHealthForEgg: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_health_for_egg), totalBreedingCost: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_breeding_cost), platformFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.platform_fees), govYieldAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gov_yield_amt), treasuryFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_fees), stingerCooldownStage: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.stinger_cooldown_stage), stingerCooldownTill: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stinger_cooldown_till) });
    }
    static fromBcs(data) { return NewEggIncubated.fromFields(NewEggIncubated.bcs.parse(data)); }
    toJSONField() {
        return {
            childVersion: this.childVersion.toString(), incubatedAt: this.incubatedAt.toString(), childGeneration: this.childGeneration.toString(), queenId: this.queenId, queenVersion: this.queenVersion.toString(), stingerBeeId: this.stingerBeeId, stingerVersion: this.stingerVersion.toString(), queenGene: this.queenGene.toString(), stingerGene: this.stingerGene.toString(), childGene: this.childGene.toString(), hiveEnergyForEgg: this.hiveEnergyForEgg.toString(), honeyHealthForEgg: this.honeyHealthForEgg.toString(), totalBreedingCost: this.totalBreedingCost.toString(), platformFees: this.platformFees.toString(), govYieldAmt: this.govYieldAmt.toString(), treasuryFees: this.treasuryFees.toString(), stingerCooldownStage: this.stingerCooldownStage, stingerCooldownTill: this.stingerCooldownTill.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewEggIncubated.reified().new({ childVersion: (0, reified_1.decodeFromJSONField)("u64", field.childVersion), incubatedAt: (0, reified_1.decodeFromJSONField)("u64", field.incubatedAt), childGeneration: (0, reified_1.decodeFromJSONField)("u64", field.childGeneration), queenId: (0, reified_1.decodeFromJSONField)("address", field.queenId), queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), stingerBeeId: (0, reified_1.decodeFromJSONField)("address", field.stingerBeeId), stingerVersion: (0, reified_1.decodeFromJSONField)("u64", field.stingerVersion), queenGene: (0, reified_1.decodeFromJSONField)("u256", field.queenGene), stingerGene: (0, reified_1.decodeFromJSONField)("u256", field.stingerGene), childGene: (0, reified_1.decodeFromJSONField)("u256", field.childGene), hiveEnergyForEgg: (0, reified_1.decodeFromJSONField)("u64", field.hiveEnergyForEgg), honeyHealthForEgg: (0, reified_1.decodeFromJSONField)("u64", field.honeyHealthForEgg), totalBreedingCost: (0, reified_1.decodeFromJSONField)("u64", field.totalBreedingCost), platformFees: (0, reified_1.decodeFromJSONField)("u64", field.platformFees), govYieldAmt: (0, reified_1.decodeFromJSONField)("u64", field.govYieldAmt), treasuryFees: (0, reified_1.decodeFromJSONField)("u64", field.treasuryFees), stingerCooldownStage: (0, reified_1.decodeFromJSONField)("u8", field.stingerCooldownStage), stingerCooldownTill: (0, reified_1.decodeFromJSONField)("u64", field.stingerCooldownTill) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewEggIncubated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewEggIncubated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewEggIncubated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewEggIncubated object`);
    } return NewEggIncubated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewEggIncubated(data.bcs.type)) {
                throw new Error(`object at is not a NewEggIncubated object`);
            }
            return NewEggIncubated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewEggIncubated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewEggIncubated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewEggIncubated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewEggIncubated object`);
        }
        return NewEggIncubated.fromSuiObjectData(res.data);
    }
}
exports.NewEggIncubated = NewEggIncubated;
NewEggIncubated.$typeName = `${PKG_V1}::dragon_trainer::NewEggIncubated`;
NewEggIncubated.$numTypeParams = 0;
NewEggIncubated.$isPhantom = [];
/* ============================== NewGameSession =============================== */
function isNewGameSession(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::NewGameSession`; }
class NewGameSession {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewGameSession.$typeName;
        this.$isPhantom = NewGameSession.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewGameSession.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.p2PSessionId = fields.p2PSessionId;
        ;
        this.trainerAddr1 = fields.trainerAddr1;
        ;
        this.trainerAddr2 = fields.trainerAddr2;
        ;
        this.version1 = fields.version1;
        ;
        this.version2 = fields.version2;
        ;
        this.suiBet = fields.suiBet;
    }
    static reified() { return { typeName: NewGameSession.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewGameSession.$typeName, ...[]), typeArgs: [], isPhantom: NewGameSession.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewGameSession.fromFields(fields), fromFieldsWithTypes: (item) => NewGameSession.fromFieldsWithTypes(item), fromBcs: (data) => NewGameSession.fromBcs(data), bcs: NewGameSession.bcs, fromJSONField: (field) => NewGameSession.fromJSONField(field), fromJSON: (json) => NewGameSession.fromJSON(json), fromSuiParsedData: (content) => NewGameSession.fromSuiParsedData(content), fromSuiObjectData: (content) => NewGameSession.fromSuiObjectData(content), fetch: async (client, id) => NewGameSession.fetch(client, id), new: (fields) => { return new NewGameSession([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewGameSession.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewGameSession.reified()); }
    static get p() { return NewGameSession.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewGameSession", {
            p2p_session_id: structs_3.String.bcs, trainer_addr1: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr2: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version1: bcs_1.bcs.u64(), version2: bcs_1.bcs.u64(), sui_bet: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewGameSession.reified().new({ p2PSessionId: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.p2p_session_id), trainerAddr1: (0, reified_1.decodeFromFields)("address", fields.trainer_addr1), trainerAddr2: (0, reified_1.decodeFromFields)("address", fields.trainer_addr2), version1: (0, reified_1.decodeFromFields)("u64", fields.version1), version2: (0, reified_1.decodeFromFields)("u64", fields.version2), suiBet: (0, reified_1.decodeFromFields)("u64", fields.sui_bet) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewGameSession(item.type)) {
            throw new Error("not a NewGameSession type");
        }
        return NewGameSession.reified().new({ p2PSessionId: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.p2p_session_id), trainerAddr1: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr1), trainerAddr2: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr2), version1: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version1), version2: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version2), suiBet: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_bet) });
    }
    static fromBcs(data) { return NewGameSession.fromFields(NewGameSession.bcs.parse(data)); }
    toJSONField() {
        return {
            p2PSessionId: this.p2PSessionId, trainerAddr1: this.trainerAddr1, trainerAddr2: this.trainerAddr2, version1: this.version1.toString(), version2: this.version2.toString(), suiBet: this.suiBet.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewGameSession.reified().new({ p2PSessionId: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.p2PSessionId), trainerAddr1: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr1), trainerAddr2: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr2), version1: (0, reified_1.decodeFromJSONField)("u64", field.version1), version2: (0, reified_1.decodeFromJSONField)("u64", field.version2), suiBet: (0, reified_1.decodeFromJSONField)("u64", field.suiBet) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewGameSession.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewGameSession.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewGameSession(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewGameSession object`);
    } return NewGameSession.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewGameSession(data.bcs.type)) {
                throw new Error(`object at is not a NewGameSession object`);
            }
            return NewGameSession.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewGameSession.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewGameSession object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewGameSession(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewGameSession object`);
        }
        return NewGameSession.fromSuiObjectData(res.data);
    }
}
exports.NewGameSession = NewGameSession;
NewGameSession.$typeName = `${PKG_V1}::dragon_trainer::NewGameSession`;
NewGameSession.$numTypeParams = 0;
NewGameSession.$isPhantom = [];
/* ============================== NewListing =============================== */
function isNewListing(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::NewListing`; }
class NewListing {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewListing.$typeName;
        this.$isPhantom = NewListing.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewListing.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.listedByTrainer = fields.listedByTrainer;
        ;
        this.version = fields.version;
        ;
        this.minPrice = fields.minPrice;
        ;
        this.expirationSec = fields.expirationSec;
    }
    static reified() { return { typeName: NewListing.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewListing.$typeName, ...[]), typeArgs: [], isPhantom: NewListing.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewListing.fromFields(fields), fromFieldsWithTypes: (item) => NewListing.fromFieldsWithTypes(item), fromBcs: (data) => NewListing.fromBcs(data), bcs: NewListing.bcs, fromJSONField: (field) => NewListing.fromJSONField(field), fromJSON: (json) => NewListing.fromJSON(json), fromSuiParsedData: (content) => NewListing.fromSuiParsedData(content), fromSuiObjectData: (content) => NewListing.fromSuiObjectData(content), fetch: async (client, id) => NewListing.fetch(client, id), new: (fields) => { return new NewListing([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewListing.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewListing.reified()); }
    static get p() { return NewListing.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewListing", {
            listed_by_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), min_price: bcs_1.bcs.u64(), expiration_sec: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewListing.reified().new({ listedByTrainer: (0, reified_1.decodeFromFields)("address", fields.listed_by_trainer), version: (0, reified_1.decodeFromFields)("u64", fields.version), minPrice: (0, reified_1.decodeFromFields)("u64", fields.min_price), expirationSec: (0, reified_1.decodeFromFields)("u64", fields.expiration_sec) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewListing(item.type)) {
            throw new Error("not a NewListing type");
        }
        return NewListing.reified().new({ listedByTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.listed_by_trainer), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), minPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_price), expirationSec: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_sec) });
    }
    static fromBcs(data) { return NewListing.fromFields(NewListing.bcs.parse(data)); }
    toJSONField() {
        return {
            listedByTrainer: this.listedByTrainer, version: this.version.toString(), minPrice: this.minPrice.toString(), expirationSec: this.expirationSec.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewListing.reified().new({ listedByTrainer: (0, reified_1.decodeFromJSONField)("address", field.listedByTrainer), version: (0, reified_1.decodeFromJSONField)("u64", field.version), minPrice: (0, reified_1.decodeFromJSONField)("u64", field.minPrice), expirationSec: (0, reified_1.decodeFromJSONField)("u64", field.expirationSec) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewListing(data.bcs.type)) {
                throw new Error(`object at is not a NewListing object`);
            }
            return NewListing.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewListing.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewListing object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewListing(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewListing object`);
        }
        return NewListing.fromSuiObjectData(res.data);
    }
}
exports.NewListing = NewListing;
NewListing.$typeName = `${PKG_V1}::dragon_trainer::NewListing`;
NewListing.$numTypeParams = 0;
NewListing.$isPhantom = [];
/* ============================== P2pGameSession =============================== */
function isP2pGameSession(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::P2pGameSession`; }
class P2pGameSession {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = P2pGameSession.$typeName;
        this.$isPhantom = P2pGameSession.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(P2pGameSession.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddr1 = fields.trainerAddr1;
        ;
        this.trainerAddr2 = fields.trainerAddr2;
        ;
        this.version1 = fields.version1;
        ;
        this.v1DustPctSum = fields.v1DustPctSum;
        ;
        this.v1Evolved = fields.v1Evolved;
        ;
        this.version2 = fields.version2;
        ;
        this.v2DustPctSum = fields.v2DustPctSum;
        ;
        this.v2Evolved = fields.v2Evolved;
        ;
        this.currentQuest = fields.currentQuest;
    }
    static reified() { return { typeName: P2pGameSession.$typeName, fullTypeName: (0, util_1.composeSuiType)(P2pGameSession.$typeName, ...[]), typeArgs: [], isPhantom: P2pGameSession.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => P2pGameSession.fromFields(fields), fromFieldsWithTypes: (item) => P2pGameSession.fromFieldsWithTypes(item), fromBcs: (data) => P2pGameSession.fromBcs(data), bcs: P2pGameSession.bcs, fromJSONField: (field) => P2pGameSession.fromJSONField(field), fromJSON: (json) => P2pGameSession.fromJSON(json), fromSuiParsedData: (content) => P2pGameSession.fromSuiParsedData(content), fromSuiObjectData: (content) => P2pGameSession.fromSuiObjectData(content), fetch: async (client, id) => P2pGameSession.fetch(client, id), new: (fields) => { return new P2pGameSession([], fields); }, kind: "StructClassReified", }; }
    static get r() { return P2pGameSession.reified(); }
    static phantom() { return (0, reified_1.phantom)(P2pGameSession.reified()); }
    static get p() { return P2pGameSession.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("P2pGameSession", {
            trainer_addr1: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr2: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version1: bcs_1.bcs.u64(), v1_dust_pct_sum: bcs_1.bcs.u64(), v1_evolved: bcs_1.bcs.u64(), version2: bcs_1.bcs.u64(), v2_dust_pct_sum: bcs_1.bcs.u64(), v2_evolved: bcs_1.bcs.u64(), current_quest: HiddenWorldQuest.bcs
        });
    }
    ;
    static fromFields(fields) { return P2pGameSession.reified().new({ trainerAddr1: (0, reified_1.decodeFromFields)("address", fields.trainer_addr1), trainerAddr2: (0, reified_1.decodeFromFields)("address", fields.trainer_addr2), version1: (0, reified_1.decodeFromFields)("u64", fields.version1), v1DustPctSum: (0, reified_1.decodeFromFields)("u64", fields.v1_dust_pct_sum), v1Evolved: (0, reified_1.decodeFromFields)("u64", fields.v1_evolved), version2: (0, reified_1.decodeFromFields)("u64", fields.version2), v2DustPctSum: (0, reified_1.decodeFromFields)("u64", fields.v2_dust_pct_sum), v2Evolved: (0, reified_1.decodeFromFields)("u64", fields.v2_evolved), currentQuest: (0, reified_1.decodeFromFields)(HiddenWorldQuest.reified(), fields.current_quest) }); }
    static fromFieldsWithTypes(item) {
        if (!isP2pGameSession(item.type)) {
            throw new Error("not a P2pGameSession type");
        }
        return P2pGameSession.reified().new({ trainerAddr1: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr1), trainerAddr2: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr2), version1: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version1), v1DustPctSum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.v1_dust_pct_sum), v1Evolved: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.v1_evolved), version2: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version2), v2DustPctSum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.v2_dust_pct_sum), v2Evolved: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.v2_evolved), currentQuest: (0, reified_1.decodeFromFieldsWithTypes)(HiddenWorldQuest.reified(), item.fields.current_quest) });
    }
    static fromBcs(data) { return P2pGameSession.fromFields(P2pGameSession.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddr1: this.trainerAddr1, trainerAddr2: this.trainerAddr2, version1: this.version1.toString(), v1DustPctSum: this.v1DustPctSum.toString(), v1Evolved: this.v1Evolved.toString(), version2: this.version2.toString(), v2DustPctSum: this.v2DustPctSum.toString(), v2Evolved: this.v2Evolved.toString(), currentQuest: this.currentQuest.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return P2pGameSession.reified().new({ trainerAddr1: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr1), trainerAddr2: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr2), version1: (0, reified_1.decodeFromJSONField)("u64", field.version1), v1DustPctSum: (0, reified_1.decodeFromJSONField)("u64", field.v1DustPctSum), v1Evolved: (0, reified_1.decodeFromJSONField)("u64", field.v1Evolved), version2: (0, reified_1.decodeFromJSONField)("u64", field.version2), v2DustPctSum: (0, reified_1.decodeFromJSONField)("u64", field.v2DustPctSum), v2Evolved: (0, reified_1.decodeFromJSONField)("u64", field.v2Evolved), currentQuest: (0, reified_1.decodeFromJSONField)(HiddenWorldQuest.reified(), field.currentQuest) }); }
    static fromJSON(json) {
        if (json.$typeName !== P2pGameSession.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return P2pGameSession.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isP2pGameSession(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a P2pGameSession object`);
    } return P2pGameSession.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isP2pGameSession(data.bcs.type)) {
                throw new Error(`object at is not a P2pGameSession object`);
            }
            return P2pGameSession.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return P2pGameSession.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching P2pGameSession object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isP2pGameSession(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a P2pGameSession object`);
        }
        return P2pGameSession.fromSuiObjectData(res.data);
    }
}
exports.P2pGameSession = P2pGameSession;
P2pGameSession.$typeName = `${PKG_V1}::dragon_trainer::P2pGameSession`;
P2pGameSession.$numTypeParams = 0;
P2pGameSession.$isPhantom = [];
/* ============================== PowersAddedToDragonBee =============================== */
function isPowersAddedToDragonBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::PowersAddedToDragonBee`; }
class PowersAddedToDragonBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PowersAddedToDragonBee.$typeName;
        this.$isPhantom = PowersAddedToDragonBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PowersAddedToDragonBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.slot = fields.slot;
        ;
        this.capabilityTypeVec = fields.capabilityTypeVec;
        ;
        this.healthImpactPctVec = fields.healthImpactPctVec;
        ;
        this.energyCostPctVec = fields.energyCostPctVec;
        ;
        this.attemptsVec = fields.attemptsVec;
        ;
        this.cooldownVec = fields.cooldownVec;
        ;
        this.baseAttemptsVec = fields.baseAttemptsVec;
    }
    static reified() { return { typeName: PowersAddedToDragonBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(PowersAddedToDragonBee.$typeName, ...[]), typeArgs: [], isPhantom: PowersAddedToDragonBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PowersAddedToDragonBee.fromFields(fields), fromFieldsWithTypes: (item) => PowersAddedToDragonBee.fromFieldsWithTypes(item), fromBcs: (data) => PowersAddedToDragonBee.fromBcs(data), bcs: PowersAddedToDragonBee.bcs, fromJSONField: (field) => PowersAddedToDragonBee.fromJSONField(field), fromJSON: (json) => PowersAddedToDragonBee.fromJSON(json), fromSuiParsedData: (content) => PowersAddedToDragonBee.fromSuiParsedData(content), fromSuiObjectData: (content) => PowersAddedToDragonBee.fromSuiObjectData(content), fetch: async (client, id) => PowersAddedToDragonBee.fetch(client, id), new: (fields) => { return new PowersAddedToDragonBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PowersAddedToDragonBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(PowersAddedToDragonBee.reified()); }
    static get p() { return PowersAddedToDragonBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PowersAddedToDragonBee", {
            version: bcs_1.bcs.u64(), slot: bcs_1.bcs.u64(), capability_type_vec: bcs_1.bcs.vector(bcs_1.bcs.u8()), health_impact_pct_vec: bcs_1.bcs.vector(bcs_1.bcs.u64()), energy_cost_pct_vec: bcs_1.bcs.vector(bcs_1.bcs.u64()), attempts_vec: bcs_1.bcs.vector(bcs_1.bcs.u64()), cooldown_vec: bcs_1.bcs.vector(bcs_1.bcs.u64()), base_attempts_vec: bcs_1.bcs.vector(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return PowersAddedToDragonBee.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), slot: (0, reified_1.decodeFromFields)("u64", fields.slot), capabilityTypeVec: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.capability_type_vec), healthImpactPctVec: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.health_impact_pct_vec), energyCostPctVec: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.energy_cost_pct_vec), attemptsVec: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.attempts_vec), cooldownVec: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.cooldown_vec), baseAttemptsVec: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.base_attempts_vec) }); }
    static fromFieldsWithTypes(item) {
        if (!isPowersAddedToDragonBee(item.type)) {
            throw new Error("not a PowersAddedToDragonBee type");
        }
        return PowersAddedToDragonBee.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), slot: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.slot), capabilityTypeVec: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.capability_type_vec), healthImpactPctVec: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.health_impact_pct_vec), energyCostPctVec: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.energy_cost_pct_vec), attemptsVec: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.attempts_vec), cooldownVec: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.cooldown_vec), baseAttemptsVec: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.base_attempts_vec) });
    }
    static fromBcs(data) { return PowersAddedToDragonBee.fromFields(PowersAddedToDragonBee.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), slot: this.slot.toString(), capabilityTypeVec: (0, reified_1.fieldToJSON)(`vector<u8>`, this.capabilityTypeVec), healthImpactPctVec: (0, reified_1.fieldToJSON)(`vector<u64>`, this.healthImpactPctVec), energyCostPctVec: (0, reified_1.fieldToJSON)(`vector<u64>`, this.energyCostPctVec), attemptsVec: (0, reified_1.fieldToJSON)(`vector<u64>`, this.attemptsVec), cooldownVec: (0, reified_1.fieldToJSON)(`vector<u64>`, this.cooldownVec), baseAttemptsVec: (0, reified_1.fieldToJSON)(`vector<u64>`, this.baseAttemptsVec),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PowersAddedToDragonBee.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), slot: (0, reified_1.decodeFromJSONField)("u64", field.slot), capabilityTypeVec: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.capabilityTypeVec), healthImpactPctVec: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.healthImpactPctVec), energyCostPctVec: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.energyCostPctVec), attemptsVec: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.attemptsVec), cooldownVec: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.cooldownVec), baseAttemptsVec: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.baseAttemptsVec) }); }
    static fromJSON(json) {
        if (json.$typeName !== PowersAddedToDragonBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PowersAddedToDragonBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPowersAddedToDragonBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PowersAddedToDragonBee object`);
    } return PowersAddedToDragonBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPowersAddedToDragonBee(data.bcs.type)) {
                throw new Error(`object at is not a PowersAddedToDragonBee object`);
            }
            return PowersAddedToDragonBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PowersAddedToDragonBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PowersAddedToDragonBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPowersAddedToDragonBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PowersAddedToDragonBee object`);
        }
        return PowersAddedToDragonBee.fromSuiObjectData(res.data);
    }
}
exports.PowersAddedToDragonBee = PowersAddedToDragonBee;
PowersAddedToDragonBee.$typeName = `${PKG_V1}::dragon_trainer::PowersAddedToDragonBee`;
PowersAddedToDragonBee.$numTypeParams = 0;
PowersAddedToDragonBee.$isPhantom = [];
/* ============================== PricingUpdatedForBreeding =============================== */
function isPricingUpdatedForBreeding(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::PricingUpdatedForBreeding`; }
class PricingUpdatedForBreeding {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PricingUpdatedForBreeding.$typeName;
        this.$isPhantom = PricingUpdatedForBreeding.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PricingUpdatedForBreeding.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.queenVersion = fields.queenVersion;
        ;
        this.isActive = fields.isActive;
        ;
        this.basePrice = fields.basePrice;
        ;
        this.curveA = fields.curveA;
    }
    static reified() { return { typeName: PricingUpdatedForBreeding.$typeName, fullTypeName: (0, util_1.composeSuiType)(PricingUpdatedForBreeding.$typeName, ...[]), typeArgs: [], isPhantom: PricingUpdatedForBreeding.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PricingUpdatedForBreeding.fromFields(fields), fromFieldsWithTypes: (item) => PricingUpdatedForBreeding.fromFieldsWithTypes(item), fromBcs: (data) => PricingUpdatedForBreeding.fromBcs(data), bcs: PricingUpdatedForBreeding.bcs, fromJSONField: (field) => PricingUpdatedForBreeding.fromJSONField(field), fromJSON: (json) => PricingUpdatedForBreeding.fromJSON(json), fromSuiParsedData: (content) => PricingUpdatedForBreeding.fromSuiParsedData(content), fromSuiObjectData: (content) => PricingUpdatedForBreeding.fromSuiObjectData(content), fetch: async (client, id) => PricingUpdatedForBreeding.fetch(client, id), new: (fields) => { return new PricingUpdatedForBreeding([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PricingUpdatedForBreeding.reified(); }
    static phantom() { return (0, reified_1.phantom)(PricingUpdatedForBreeding.reified()); }
    static get p() { return PricingUpdatedForBreeding.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PricingUpdatedForBreeding", {
            queen_version: bcs_1.bcs.u64(), is_active: bcs_1.bcs.bool(), base_price: bcs_1.bcs.u64(), curve_a: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PricingUpdatedForBreeding.reified().new({ queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), isActive: (0, reified_1.decodeFromFields)("bool", fields.is_active), basePrice: (0, reified_1.decodeFromFields)("u64", fields.base_price), curveA: (0, reified_1.decodeFromFields)("u64", fields.curve_a) }); }
    static fromFieldsWithTypes(item) {
        if (!isPricingUpdatedForBreeding(item.type)) {
            throw new Error("not a PricingUpdatedForBreeding type");
        }
        return PricingUpdatedForBreeding.reified().new({ queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), isActive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_active), basePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.base_price), curveA: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.curve_a) });
    }
    static fromBcs(data) { return PricingUpdatedForBreeding.fromFields(PricingUpdatedForBreeding.bcs.parse(data)); }
    toJSONField() {
        return {
            queenVersion: this.queenVersion.toString(), isActive: this.isActive, basePrice: this.basePrice.toString(), curveA: this.curveA.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PricingUpdatedForBreeding.reified().new({ queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), isActive: (0, reified_1.decodeFromJSONField)("bool", field.isActive), basePrice: (0, reified_1.decodeFromJSONField)("u64", field.basePrice), curveA: (0, reified_1.decodeFromJSONField)("u64", field.curveA) }); }
    static fromJSON(json) {
        if (json.$typeName !== PricingUpdatedForBreeding.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PricingUpdatedForBreeding.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPricingUpdatedForBreeding(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PricingUpdatedForBreeding object`);
    } return PricingUpdatedForBreeding.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPricingUpdatedForBreeding(data.bcs.type)) {
                throw new Error(`object at is not a PricingUpdatedForBreeding object`);
            }
            return PricingUpdatedForBreeding.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PricingUpdatedForBreeding.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PricingUpdatedForBreeding object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPricingUpdatedForBreeding(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PricingUpdatedForBreeding object`);
        }
        return PricingUpdatedForBreeding.fromSuiObjectData(res.data);
    }
}
exports.PricingUpdatedForBreeding = PricingUpdatedForBreeding;
PricingUpdatedForBreeding.$typeName = `${PKG_V1}::dragon_trainer::PricingUpdatedForBreeding`;
PricingUpdatedForBreeding.$numTypeParams = 0;
PricingUpdatedForBreeding.$isPhantom = [];
/* ============================== QueenFamilyInfo =============================== */
function isQueenFamilyInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::QueenFamilyInfo`; }
class QueenFamilyInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = QueenFamilyInfo.$typeName;
        this.$isPhantom = QueenFamilyInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(QueenFamilyInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.queenId = fields.queenId;
        ;
        this.stingerId = fields.stingerId;
        ;
        this.generation = fields.generation;
    }
    static reified() { return { typeName: QueenFamilyInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(QueenFamilyInfo.$typeName, ...[]), typeArgs: [], isPhantom: QueenFamilyInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => QueenFamilyInfo.fromFields(fields), fromFieldsWithTypes: (item) => QueenFamilyInfo.fromFieldsWithTypes(item), fromBcs: (data) => QueenFamilyInfo.fromBcs(data), bcs: QueenFamilyInfo.bcs, fromJSONField: (field) => QueenFamilyInfo.fromJSONField(field), fromJSON: (json) => QueenFamilyInfo.fromJSON(json), fromSuiParsedData: (content) => QueenFamilyInfo.fromSuiParsedData(content), fromSuiObjectData: (content) => QueenFamilyInfo.fromSuiObjectData(content), fetch: async (client, id) => QueenFamilyInfo.fetch(client, id), new: (fields) => { return new QueenFamilyInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return QueenFamilyInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(QueenFamilyInfo.reified()); }
    static get p() { return QueenFamilyInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("QueenFamilyInfo", {
            queenId: structs_2.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), stingerId: structs_2.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), generation: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return QueenFamilyInfo.reified().new({ queenId: (0, reified_1.decodeFromFields)(structs_2.Option.reified("address"), fields.queenId), stingerId: (0, reified_1.decodeFromFields)(structs_2.Option.reified("address"), fields.stingerId), generation: (0, reified_1.decodeFromFields)("u64", fields.generation) }); }
    static fromFieldsWithTypes(item) {
        if (!isQueenFamilyInfo(item.type)) {
            throw new Error("not a QueenFamilyInfo type");
        }
        return QueenFamilyInfo.reified().new({ queenId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified("address"), item.fields.queenId), stingerId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified("address"), item.fields.stingerId), generation: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.generation) });
    }
    static fromBcs(data) { return QueenFamilyInfo.fromFields(QueenFamilyInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            queenId: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<address>`, this.queenId), stingerId: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<address>`, this.stingerId), generation: this.generation.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return QueenFamilyInfo.reified().new({ queenId: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified("address"), field.queenId), stingerId: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified("address"), field.stingerId), generation: (0, reified_1.decodeFromJSONField)("u64", field.generation) }); }
    static fromJSON(json) {
        if (json.$typeName !== QueenFamilyInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return QueenFamilyInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isQueenFamilyInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a QueenFamilyInfo object`);
    } return QueenFamilyInfo.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQueenFamilyInfo(data.bcs.type)) {
                throw new Error(`object at is not a QueenFamilyInfo object`);
            }
            return QueenFamilyInfo.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return QueenFamilyInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching QueenFamilyInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isQueenFamilyInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a QueenFamilyInfo object`);
        }
        return QueenFamilyInfo.fromSuiObjectData(res.data);
    }
}
exports.QueenFamilyInfo = QueenFamilyInfo;
QueenFamilyInfo.$typeName = `${PKG_V1}::dragon_trainer::QueenFamilyInfo`;
QueenFamilyInfo.$numTypeParams = 0;
QueenFamilyInfo.$isPhantom = [];
/* ============================== QuestRequest =============================== */
function isQuestRequest(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::QuestRequest`; }
class QuestRequest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = QuestRequest.$typeName;
        this.$isPhantom = QuestRequest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(QuestRequest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.timestamp = fields.timestamp;
        ;
        this.version = fields.version;
        ;
        this.mysticalBee = fields.mysticalBee;
        ;
        this.suiBet = fields.suiBet;
        ;
        this.playerOnly = fields.playerOnly;
        ;
        this.withTrainer = fields.withTrainer;
        ;
        this.activeIndex = fields.activeIndex;
    }
    static reified() { return { typeName: QuestRequest.$typeName, fullTypeName: (0, util_1.composeSuiType)(QuestRequest.$typeName, ...[]), typeArgs: [], isPhantom: QuestRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => QuestRequest.fromFields(fields), fromFieldsWithTypes: (item) => QuestRequest.fromFieldsWithTypes(item), fromBcs: (data) => QuestRequest.fromBcs(data), bcs: QuestRequest.bcs, fromJSONField: (field) => QuestRequest.fromJSONField(field), fromJSON: (json) => QuestRequest.fromJSON(json), fromSuiParsedData: (content) => QuestRequest.fromSuiParsedData(content), fromSuiObjectData: (content) => QuestRequest.fromSuiObjectData(content), fetch: async (client, id) => QuestRequest.fetch(client, id), new: (fields) => { return new QuestRequest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return QuestRequest.reified(); }
    static phantom() { return (0, reified_1.phantom)(QuestRequest.reified()); }
    static get p() { return QuestRequest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("QuestRequest", {
            timestamp: bcs_1.bcs.u64(), version: bcs_1.bcs.u64(), mystical_bee: MysticalBee.bcs, sui_bet: structs_4.Balance.bcs, player_only: bcs_1.bcs.bool(), with_trainer: structs_2.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), active_index: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return QuestRequest.reified().new({ timestamp: (0, reified_1.decodeFromFields)("u64", fields.timestamp), version: (0, reified_1.decodeFromFields)("u64", fields.version), mysticalBee: (0, reified_1.decodeFromFields)(MysticalBee.reified(), fields.mystical_bee), suiBet: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.sui_bet), playerOnly: (0, reified_1.decodeFromFields)("bool", fields.player_only), withTrainer: (0, reified_1.decodeFromFields)(structs_2.Option.reified("address"), fields.with_trainer), activeIndex: (0, reified_1.decodeFromFields)("u64", fields.active_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isQuestRequest(item.type)) {
            throw new Error("not a QuestRequest type");
        }
        return QuestRequest.reified().new({ timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), mysticalBee: (0, reified_1.decodeFromFieldsWithTypes)(MysticalBee.reified(), item.fields.mystical_bee), suiBet: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.sui_bet), playerOnly: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.player_only), withTrainer: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified("address"), item.fields.with_trainer), activeIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_index) });
    }
    static fromBcs(data) { return QuestRequest.fromFields(QuestRequest.bcs.parse(data)); }
    toJSONField() {
        return {
            timestamp: this.timestamp.toString(), version: this.version.toString(), mysticalBee: this.mysticalBee.toJSONField(), suiBet: this.suiBet.toJSONField(), playerOnly: this.playerOnly, withTrainer: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<address>`, this.withTrainer), activeIndex: this.activeIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return QuestRequest.reified().new({ timestamp: (0, reified_1.decodeFromJSONField)("u64", field.timestamp), version: (0, reified_1.decodeFromJSONField)("u64", field.version), mysticalBee: (0, reified_1.decodeFromJSONField)(MysticalBee.reified(), field.mysticalBee), suiBet: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.suiBet), playerOnly: (0, reified_1.decodeFromJSONField)("bool", field.playerOnly), withTrainer: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified("address"), field.withTrainer), activeIndex: (0, reified_1.decodeFromJSONField)("u64", field.activeIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== QuestRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return QuestRequest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isQuestRequest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a QuestRequest object`);
    } return QuestRequest.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQuestRequest(data.bcs.type)) {
                throw new Error(`object at is not a QuestRequest object`);
            }
            return QuestRequest.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return QuestRequest.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching QuestRequest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isQuestRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a QuestRequest object`);
        }
        return QuestRequest.fromSuiObjectData(res.data);
    }
}
exports.QuestRequest = QuestRequest;
QuestRequest.$typeName = `${PKG_V1}::dragon_trainer::QuestRequest`;
QuestRequest.$numTypeParams = 0;
QuestRequest.$isPhantom = [];
/* ============================== QuestRequestDestroyed =============================== */
function isQuestRequestDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::QuestRequestDestroyed`; }
class QuestRequestDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = QuestRequestDestroyed.$typeName;
        this.$isPhantom = QuestRequestDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(QuestRequestDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddress = fields.trainerAddress;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: QuestRequestDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(QuestRequestDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: QuestRequestDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => QuestRequestDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => QuestRequestDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => QuestRequestDestroyed.fromBcs(data), bcs: QuestRequestDestroyed.bcs, fromJSONField: (field) => QuestRequestDestroyed.fromJSONField(field), fromJSON: (json) => QuestRequestDestroyed.fromJSON(json), fromSuiParsedData: (content) => QuestRequestDestroyed.fromSuiParsedData(content), fromSuiObjectData: (content) => QuestRequestDestroyed.fromSuiObjectData(content), fetch: async (client, id) => QuestRequestDestroyed.fetch(client, id), new: (fields) => { return new QuestRequestDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return QuestRequestDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(QuestRequestDestroyed.reified()); }
    static get p() { return QuestRequestDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("QuestRequestDestroyed", {
            trainer_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return QuestRequestDestroyed.reified().new({ trainerAddress: (0, reified_1.decodeFromFields)("address", fields.trainer_address), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isQuestRequestDestroyed(item.type)) {
            throw new Error("not a QuestRequestDestroyed type");
        }
        return QuestRequestDestroyed.reified().new({ trainerAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_address), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return QuestRequestDestroyed.fromFields(QuestRequestDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddress: this.trainerAddress, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return QuestRequestDestroyed.reified().new({ trainerAddress: (0, reified_1.decodeFromJSONField)("address", field.trainerAddress), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== QuestRequestDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return QuestRequestDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isQuestRequestDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a QuestRequestDestroyed object`);
    } return QuestRequestDestroyed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQuestRequestDestroyed(data.bcs.type)) {
                throw new Error(`object at is not a QuestRequestDestroyed object`);
            }
            return QuestRequestDestroyed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return QuestRequestDestroyed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching QuestRequestDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isQuestRequestDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a QuestRequestDestroyed object`);
        }
        return QuestRequestDestroyed.fromSuiObjectData(res.data);
    }
}
exports.QuestRequestDestroyed = QuestRequestDestroyed;
QuestRequestDestroyed.$typeName = `${PKG_V1}::dragon_trainer::QuestRequestDestroyed`;
QuestRequestDestroyed.$numTypeParams = 0;
QuestRequestDestroyed.$isPhantom = [];
/* ============================== QuestRequestExpired =============================== */
function isQuestRequestExpired(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::QuestRequestExpired`; }
class QuestRequestExpired {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = QuestRequestExpired.$typeName;
        this.$isPhantom = QuestRequestExpired.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(QuestRequestExpired.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddress = fields.trainerAddress;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: QuestRequestExpired.$typeName, fullTypeName: (0, util_1.composeSuiType)(QuestRequestExpired.$typeName, ...[]), typeArgs: [], isPhantom: QuestRequestExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => QuestRequestExpired.fromFields(fields), fromFieldsWithTypes: (item) => QuestRequestExpired.fromFieldsWithTypes(item), fromBcs: (data) => QuestRequestExpired.fromBcs(data), bcs: QuestRequestExpired.bcs, fromJSONField: (field) => QuestRequestExpired.fromJSONField(field), fromJSON: (json) => QuestRequestExpired.fromJSON(json), fromSuiParsedData: (content) => QuestRequestExpired.fromSuiParsedData(content), fromSuiObjectData: (content) => QuestRequestExpired.fromSuiObjectData(content), fetch: async (client, id) => QuestRequestExpired.fetch(client, id), new: (fields) => { return new QuestRequestExpired([], fields); }, kind: "StructClassReified", }; }
    static get r() { return QuestRequestExpired.reified(); }
    static phantom() { return (0, reified_1.phantom)(QuestRequestExpired.reified()); }
    static get p() { return QuestRequestExpired.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("QuestRequestExpired", {
            trainer_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return QuestRequestExpired.reified().new({ trainerAddress: (0, reified_1.decodeFromFields)("address", fields.trainer_address), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isQuestRequestExpired(item.type)) {
            throw new Error("not a QuestRequestExpired type");
        }
        return QuestRequestExpired.reified().new({ trainerAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_address), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return QuestRequestExpired.fromFields(QuestRequestExpired.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddress: this.trainerAddress, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return QuestRequestExpired.reified().new({ trainerAddress: (0, reified_1.decodeFromJSONField)("address", field.trainerAddress), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== QuestRequestExpired.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return QuestRequestExpired.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isQuestRequestExpired(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a QuestRequestExpired object`);
    } return QuestRequestExpired.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQuestRequestExpired(data.bcs.type)) {
                throw new Error(`object at is not a QuestRequestExpired object`);
            }
            return QuestRequestExpired.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return QuestRequestExpired.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching QuestRequestExpired object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isQuestRequestExpired(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a QuestRequestExpired object`);
        }
        return QuestRequestExpired.fromSuiObjectData(res.data);
    }
}
exports.QuestRequestExpired = QuestRequestExpired;
QuestRequestExpired.$typeName = `${PKG_V1}::dragon_trainer::QuestRequestExpired`;
QuestRequestExpired.$numTypeParams = 0;
QuestRequestExpired.$isPhantom = [];
/* ============================== Royalty =============================== */
function isRoyalty(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::Royalty`; }
class Royalty {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Royalty.$typeName;
        this.$isPhantom = Royalty.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Royalty.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.numerator = fields.numerator;
        ;
        this.govYieldPct = fields.govYieldPct;
        ;
        this.queenPct = fields.queenPct;
    }
    static reified() { return { typeName: Royalty.$typeName, fullTypeName: (0, util_1.composeSuiType)(Royalty.$typeName, ...[]), typeArgs: [], isPhantom: Royalty.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Royalty.fromFields(fields), fromFieldsWithTypes: (item) => Royalty.fromFieldsWithTypes(item), fromBcs: (data) => Royalty.fromBcs(data), bcs: Royalty.bcs, fromJSONField: (field) => Royalty.fromJSONField(field), fromJSON: (json) => Royalty.fromJSON(json), fromSuiParsedData: (content) => Royalty.fromSuiParsedData(content), fromSuiObjectData: (content) => Royalty.fromSuiObjectData(content), fetch: async (client, id) => Royalty.fetch(client, id), new: (fields) => { return new Royalty([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Royalty.reified(); }
    static phantom() { return (0, reified_1.phantom)(Royalty.reified()); }
    static get p() { return Royalty.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Royalty", {
            numerator: bcs_1.bcs.u64(), gov_yield_pct: bcs_1.bcs.u64(), queen_pct: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Royalty.reified().new({ numerator: (0, reified_1.decodeFromFields)("u64", fields.numerator), govYieldPct: (0, reified_1.decodeFromFields)("u64", fields.gov_yield_pct), queenPct: (0, reified_1.decodeFromFields)("u64", fields.queen_pct) }); }
    static fromFieldsWithTypes(item) {
        if (!isRoyalty(item.type)) {
            throw new Error("not a Royalty type");
        }
        return Royalty.reified().new({ numerator: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.numerator), govYieldPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gov_yield_pct), queenPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_pct) });
    }
    static fromBcs(data) { return Royalty.fromFields(Royalty.bcs.parse(data)); }
    toJSONField() {
        return {
            numerator: this.numerator.toString(), govYieldPct: this.govYieldPct.toString(), queenPct: this.queenPct.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Royalty.reified().new({ numerator: (0, reified_1.decodeFromJSONField)("u64", field.numerator), govYieldPct: (0, reified_1.decodeFromJSONField)("u64", field.govYieldPct), queenPct: (0, reified_1.decodeFromJSONField)("u64", field.queenPct) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRoyalty(data.bcs.type)) {
                throw new Error(`object at is not a Royalty object`);
            }
            return Royalty.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Royalty.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Royalty object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRoyalty(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Royalty object`);
        }
        return Royalty.fromSuiObjectData(res.data);
    }
}
exports.Royalty = Royalty;
Royalty.$typeName = `${PKG_V1}::dragon_trainer::Royalty`;
Royalty.$numTypeParams = 0;
Royalty.$isPhantom = [];
/* ============================== RoyaltyProcessed =============================== */
function isRoyaltyProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::RoyaltyProcessed`; }
class RoyaltyProcessed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RoyaltyProcessed.$typeName;
        this.$isPhantom = RoyaltyProcessed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RoyaltyProcessed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.totalRoyaltyAmt = fields.totalRoyaltyAmt;
        ;
        this.govYieldAmt = fields.govYieldAmt;
        ;
        this.queenRoyaltyAmt = fields.queenRoyaltyAmt;
        ;
        this.platformFees = fields.platformFees;
    }
    static reified() { return { typeName: RoyaltyProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(RoyaltyProcessed.$typeName, ...[]), typeArgs: [], isPhantom: RoyaltyProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RoyaltyProcessed.fromFields(fields), fromFieldsWithTypes: (item) => RoyaltyProcessed.fromFieldsWithTypes(item), fromBcs: (data) => RoyaltyProcessed.fromBcs(data), bcs: RoyaltyProcessed.bcs, fromJSONField: (field) => RoyaltyProcessed.fromJSONField(field), fromJSON: (json) => RoyaltyProcessed.fromJSON(json), fromSuiParsedData: (content) => RoyaltyProcessed.fromSuiParsedData(content), fromSuiObjectData: (content) => RoyaltyProcessed.fromSuiObjectData(content), fetch: async (client, id) => RoyaltyProcessed.fetch(client, id), new: (fields) => { return new RoyaltyProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RoyaltyProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(RoyaltyProcessed.reified()); }
    static get p() { return RoyaltyProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RoyaltyProcessed", {
            total_royalty_amt: bcs_1.bcs.u64(), gov_yield_amt: bcs_1.bcs.u64(), queen_royalty_amt: bcs_1.bcs.u64(), platform_fees: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return RoyaltyProcessed.reified().new({ totalRoyaltyAmt: (0, reified_1.decodeFromFields)("u64", fields.total_royalty_amt), govYieldAmt: (0, reified_1.decodeFromFields)("u64", fields.gov_yield_amt), queenRoyaltyAmt: (0, reified_1.decodeFromFields)("u64", fields.queen_royalty_amt), platformFees: (0, reified_1.decodeFromFields)("u64", fields.platform_fees) }); }
    static fromFieldsWithTypes(item) {
        if (!isRoyaltyProcessed(item.type)) {
            throw new Error("not a RoyaltyProcessed type");
        }
        return RoyaltyProcessed.reified().new({ totalRoyaltyAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_royalty_amt), govYieldAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gov_yield_amt), queenRoyaltyAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_royalty_amt), platformFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.platform_fees) });
    }
    static fromBcs(data) { return RoyaltyProcessed.fromFields(RoyaltyProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            totalRoyaltyAmt: this.totalRoyaltyAmt.toString(), govYieldAmt: this.govYieldAmt.toString(), queenRoyaltyAmt: this.queenRoyaltyAmt.toString(), platformFees: this.platformFees.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RoyaltyProcessed.reified().new({ totalRoyaltyAmt: (0, reified_1.decodeFromJSONField)("u64", field.totalRoyaltyAmt), govYieldAmt: (0, reified_1.decodeFromJSONField)("u64", field.govYieldAmt), queenRoyaltyAmt: (0, reified_1.decodeFromJSONField)("u64", field.queenRoyaltyAmt), platformFees: (0, reified_1.decodeFromJSONField)("u64", field.platformFees) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRoyaltyProcessed(data.bcs.type)) {
                throw new Error(`object at is not a RoyaltyProcessed object`);
            }
            return RoyaltyProcessed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RoyaltyProcessed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RoyaltyProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRoyaltyProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RoyaltyProcessed object`);
        }
        return RoyaltyProcessed.fromSuiObjectData(res.data);
    }
}
exports.RoyaltyProcessed = RoyaltyProcessed;
RoyaltyProcessed.$typeName = `${PKG_V1}::dragon_trainer::RoyaltyProcessed`;
RoyaltyProcessed.$numTypeParams = 0;
RoyaltyProcessed.$isPhantom = [];
/* ============================== RoyaltyUpdated =============================== */
function isRoyaltyUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::RoyaltyUpdated`; }
class RoyaltyUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RoyaltyUpdated.$typeName;
        this.$isPhantom = RoyaltyUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RoyaltyUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.royaltyNum = fields.royaltyNum;
        ;
        this.govYieldPct = fields.govYieldPct;
        ;
        this.queenPct = fields.queenPct;
        ;
        this.breedingPlatformFeesPct = fields.breedingPlatformFeesPct;
        ;
        this.breedingGovYieldPct = fields.breedingGovYieldPct;
        ;
        this.breedingTreasuryPct = fields.breedingTreasuryPct;
    }
    static reified() { return { typeName: RoyaltyUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(RoyaltyUpdated.$typeName, ...[]), typeArgs: [], isPhantom: RoyaltyUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RoyaltyUpdated.fromFields(fields), fromFieldsWithTypes: (item) => RoyaltyUpdated.fromFieldsWithTypes(item), fromBcs: (data) => RoyaltyUpdated.fromBcs(data), bcs: RoyaltyUpdated.bcs, fromJSONField: (field) => RoyaltyUpdated.fromJSONField(field), fromJSON: (json) => RoyaltyUpdated.fromJSON(json), fromSuiParsedData: (content) => RoyaltyUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => RoyaltyUpdated.fromSuiObjectData(content), fetch: async (client, id) => RoyaltyUpdated.fetch(client, id), new: (fields) => { return new RoyaltyUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RoyaltyUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(RoyaltyUpdated.reified()); }
    static get p() { return RoyaltyUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RoyaltyUpdated", {
            royalty_num: bcs_1.bcs.u64(), gov_yield_pct: bcs_1.bcs.u64(), queen_pct: bcs_1.bcs.u64(), breeding_platform_fees_pct: bcs_1.bcs.u64(), breeding_gov_yield_pct: bcs_1.bcs.u64(), breeding_treasury_pct: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return RoyaltyUpdated.reified().new({ royaltyNum: (0, reified_1.decodeFromFields)("u64", fields.royalty_num), govYieldPct: (0, reified_1.decodeFromFields)("u64", fields.gov_yield_pct), queenPct: (0, reified_1.decodeFromFields)("u64", fields.queen_pct), breedingPlatformFeesPct: (0, reified_1.decodeFromFields)("u64", fields.breeding_platform_fees_pct), breedingGovYieldPct: (0, reified_1.decodeFromFields)("u64", fields.breeding_gov_yield_pct), breedingTreasuryPct: (0, reified_1.decodeFromFields)("u64", fields.breeding_treasury_pct) }); }
    static fromFieldsWithTypes(item) {
        if (!isRoyaltyUpdated(item.type)) {
            throw new Error("not a RoyaltyUpdated type");
        }
        return RoyaltyUpdated.reified().new({ royaltyNum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.royalty_num), govYieldPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gov_yield_pct), queenPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_pct), breedingPlatformFeesPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.breeding_platform_fees_pct), breedingGovYieldPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.breeding_gov_yield_pct), breedingTreasuryPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.breeding_treasury_pct) });
    }
    static fromBcs(data) { return RoyaltyUpdated.fromFields(RoyaltyUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            royaltyNum: this.royaltyNum.toString(), govYieldPct: this.govYieldPct.toString(), queenPct: this.queenPct.toString(), breedingPlatformFeesPct: this.breedingPlatformFeesPct.toString(), breedingGovYieldPct: this.breedingGovYieldPct.toString(), breedingTreasuryPct: this.breedingTreasuryPct.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RoyaltyUpdated.reified().new({ royaltyNum: (0, reified_1.decodeFromJSONField)("u64", field.royaltyNum), govYieldPct: (0, reified_1.decodeFromJSONField)("u64", field.govYieldPct), queenPct: (0, reified_1.decodeFromJSONField)("u64", field.queenPct), breedingPlatformFeesPct: (0, reified_1.decodeFromJSONField)("u64", field.breedingPlatformFeesPct), breedingGovYieldPct: (0, reified_1.decodeFromJSONField)("u64", field.breedingGovYieldPct), breedingTreasuryPct: (0, reified_1.decodeFromJSONField)("u64", field.breedingTreasuryPct) }); }
    static fromJSON(json) {
        if (json.$typeName !== RoyaltyUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RoyaltyUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRoyaltyUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RoyaltyUpdated object`);
    } return RoyaltyUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRoyaltyUpdated(data.bcs.type)) {
                throw new Error(`object at is not a RoyaltyUpdated object`);
            }
            return RoyaltyUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RoyaltyUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RoyaltyUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRoyaltyUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RoyaltyUpdated object`);
        }
        return RoyaltyUpdated.fromSuiObjectData(res.data);
    }
}
exports.RoyaltyUpdated = RoyaltyUpdated;
RoyaltyUpdated.$typeName = `${PKG_V1}::dragon_trainer::RoyaltyUpdated`;
RoyaltyUpdated.$numTypeParams = 0;
RoyaltyUpdated.$isPhantom = [];
/* ============================== SaleExecuted =============================== */
function isSaleExecuted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::SaleExecuted`; }
class SaleExecuted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SaleExecuted.$typeName;
        this.$isPhantom = SaleExecuted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SaleExecuted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.buyerTrainer = fields.buyerTrainer;
        ;
        this.sellerTrainer = fields.sellerTrainer;
        ;
        this.purchasePrice = fields.purchasePrice;
    }
    static reified() { return { typeName: SaleExecuted.$typeName, fullTypeName: (0, util_1.composeSuiType)(SaleExecuted.$typeName, ...[]), typeArgs: [], isPhantom: SaleExecuted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SaleExecuted.fromFields(fields), fromFieldsWithTypes: (item) => SaleExecuted.fromFieldsWithTypes(item), fromBcs: (data) => SaleExecuted.fromBcs(data), bcs: SaleExecuted.bcs, fromJSONField: (field) => SaleExecuted.fromJSONField(field), fromJSON: (json) => SaleExecuted.fromJSON(json), fromSuiParsedData: (content) => SaleExecuted.fromSuiParsedData(content), fromSuiObjectData: (content) => SaleExecuted.fromSuiObjectData(content), fetch: async (client, id) => SaleExecuted.fetch(client, id), new: (fields) => { return new SaleExecuted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SaleExecuted.reified(); }
    static phantom() { return (0, reified_1.phantom)(SaleExecuted.reified()); }
    static get p() { return SaleExecuted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SaleExecuted", {
            version: bcs_1.bcs.u64(), buyer_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), seller_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), purchase_price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return SaleExecuted.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), buyerTrainer: (0, reified_1.decodeFromFields)("address", fields.buyer_trainer), sellerTrainer: (0, reified_1.decodeFromFields)("address", fields.seller_trainer), purchasePrice: (0, reified_1.decodeFromFields)("u64", fields.purchase_price) }); }
    static fromFieldsWithTypes(item) {
        if (!isSaleExecuted(item.type)) {
            throw new Error("not a SaleExecuted type");
        }
        return SaleExecuted.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), buyerTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.buyer_trainer), sellerTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.seller_trainer), purchasePrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.purchase_price) });
    }
    static fromBcs(data) { return SaleExecuted.fromFields(SaleExecuted.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), buyerTrainer: this.buyerTrainer, sellerTrainer: this.sellerTrainer, purchasePrice: this.purchasePrice.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SaleExecuted.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), buyerTrainer: (0, reified_1.decodeFromJSONField)("address", field.buyerTrainer), sellerTrainer: (0, reified_1.decodeFromJSONField)("address", field.sellerTrainer), purchasePrice: (0, reified_1.decodeFromJSONField)("u64", field.purchasePrice) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSaleExecuted(data.bcs.type)) {
                throw new Error(`object at is not a SaleExecuted object`);
            }
            return SaleExecuted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SaleExecuted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SaleExecuted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSaleExecuted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SaleExecuted object`);
        }
        return SaleExecuted.fromSuiObjectData(res.data);
    }
}
exports.SaleExecuted = SaleExecuted;
SaleExecuted.$typeName = `${PKG_V1}::dragon_trainer::SaleExecuted`;
SaleExecuted.$numTypeParams = 0;
SaleExecuted.$isPhantom = [];
/* ============================== StoreAddedToBee =============================== */
function isStoreAddedToBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::StoreAddedToBee`; }
class StoreAddedToBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StoreAddedToBee.$typeName;
        this.$isPhantom = StoreAddedToBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StoreAddedToBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.appName = fields.appName;
        ;
        this.appAddr = fields.appAddr;
    }
    static reified() { return { typeName: StoreAddedToBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(StoreAddedToBee.$typeName, ...[]), typeArgs: [], isPhantom: StoreAddedToBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StoreAddedToBee.fromFields(fields), fromFieldsWithTypes: (item) => StoreAddedToBee.fromFieldsWithTypes(item), fromBcs: (data) => StoreAddedToBee.fromBcs(data), bcs: StoreAddedToBee.bcs, fromJSONField: (field) => StoreAddedToBee.fromJSONField(field), fromJSON: (json) => StoreAddedToBee.fromJSON(json), fromSuiParsedData: (content) => StoreAddedToBee.fromSuiParsedData(content), fromSuiObjectData: (content) => StoreAddedToBee.fromSuiObjectData(content), fetch: async (client, id) => StoreAddedToBee.fetch(client, id), new: (fields) => { return new StoreAddedToBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StoreAddedToBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(StoreAddedToBee.reified()); }
    static get p() { return StoreAddedToBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StoreAddedToBee", {
            version: bcs_1.bcs.u64(), app_name: structs_1.String.bcs, app_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return StoreAddedToBee.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name), appAddr: (0, reified_1.decodeFromFields)("address", fields.app_addr) }); }
    static fromFieldsWithTypes(item) {
        if (!isStoreAddedToBee(item.type)) {
            throw new Error("not a StoreAddedToBee type");
        }
        return StoreAddedToBee.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name), appAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.app_addr) });
    }
    static fromBcs(data) { return StoreAddedToBee.fromFields(StoreAddedToBee.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), appName: this.appName, appAddr: this.appAddr,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StoreAddedToBee.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName), appAddr: (0, reified_1.decodeFromJSONField)("address", field.appAddr) }); }
    static fromJSON(json) {
        if (json.$typeName !== StoreAddedToBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StoreAddedToBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStoreAddedToBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StoreAddedToBee object`);
    } return StoreAddedToBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStoreAddedToBee(data.bcs.type)) {
                throw new Error(`object at is not a StoreAddedToBee object`);
            }
            return StoreAddedToBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StoreAddedToBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StoreAddedToBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStoreAddedToBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StoreAddedToBee object`);
        }
        return StoreAddedToBee.fromSuiObjectData(res.data);
    }
}
exports.StoreAddedToBee = StoreAddedToBee;
StoreAddedToBee.$typeName = `${PKG_V1}::dragon_trainer::StoreAddedToBee`;
StoreAddedToBee.$numTypeParams = 0;
StoreAddedToBee.$isPhantom = [];
/* ============================== StoreRemovedFromBee =============================== */
function isStoreRemovedFromBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::StoreRemovedFromBee`; }
class StoreRemovedFromBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StoreRemovedFromBee.$typeName;
        this.$isPhantom = StoreRemovedFromBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StoreRemovedFromBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.appName = fields.appName;
    }
    static reified() { return { typeName: StoreRemovedFromBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(StoreRemovedFromBee.$typeName, ...[]), typeArgs: [], isPhantom: StoreRemovedFromBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StoreRemovedFromBee.fromFields(fields), fromFieldsWithTypes: (item) => StoreRemovedFromBee.fromFieldsWithTypes(item), fromBcs: (data) => StoreRemovedFromBee.fromBcs(data), bcs: StoreRemovedFromBee.bcs, fromJSONField: (field) => StoreRemovedFromBee.fromJSONField(field), fromJSON: (json) => StoreRemovedFromBee.fromJSON(json), fromSuiParsedData: (content) => StoreRemovedFromBee.fromSuiParsedData(content), fromSuiObjectData: (content) => StoreRemovedFromBee.fromSuiObjectData(content), fetch: async (client, id) => StoreRemovedFromBee.fetch(client, id), new: (fields) => { return new StoreRemovedFromBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StoreRemovedFromBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(StoreRemovedFromBee.reified()); }
    static get p() { return StoreRemovedFromBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StoreRemovedFromBee", {
            version: bcs_1.bcs.u64(), app_name: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return StoreRemovedFromBee.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), appName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.app_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isStoreRemovedFromBee(item.type)) {
            throw new Error("not a StoreRemovedFromBee type");
        }
        return StoreRemovedFromBee.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), appName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.app_name) });
    }
    static fromBcs(data) { return StoreRemovedFromBee.fromFields(StoreRemovedFromBee.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), appName: this.appName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StoreRemovedFromBee.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), appName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.appName) }); }
    static fromJSON(json) {
        if (json.$typeName !== StoreRemovedFromBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StoreRemovedFromBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStoreRemovedFromBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StoreRemovedFromBee object`);
    } return StoreRemovedFromBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStoreRemovedFromBee(data.bcs.type)) {
                throw new Error(`object at is not a StoreRemovedFromBee object`);
            }
            return StoreRemovedFromBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StoreRemovedFromBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StoreRemovedFromBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStoreRemovedFromBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StoreRemovedFromBee object`);
        }
        return StoreRemovedFromBee.fromSuiObjectData(res.data);
    }
}
exports.StoreRemovedFromBee = StoreRemovedFromBee;
StoreRemovedFromBee.$typeName = `${PKG_V1}::dragon_trainer::StoreRemovedFromBee`;
StoreRemovedFromBee.$numTypeParams = 0;
StoreRemovedFromBee.$isPhantom = [];
/* ============================== SuiClaimedFromBeeHive =============================== */
function isSuiClaimedFromBeeHive(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::SuiClaimedFromBeeHive`; }
class SuiClaimedFromBeeHive {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SuiClaimedFromBeeHive.$typeName;
        this.$isPhantom = SuiClaimedFromBeeHive.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SuiClaimedFromBeeHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.queenVersion = fields.queenVersion;
        ;
        this.suiClaimed = fields.suiClaimed;
    }
    static reified() { return { typeName: SuiClaimedFromBeeHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(SuiClaimedFromBeeHive.$typeName, ...[]), typeArgs: [], isPhantom: SuiClaimedFromBeeHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SuiClaimedFromBeeHive.fromFields(fields), fromFieldsWithTypes: (item) => SuiClaimedFromBeeHive.fromFieldsWithTypes(item), fromBcs: (data) => SuiClaimedFromBeeHive.fromBcs(data), bcs: SuiClaimedFromBeeHive.bcs, fromJSONField: (field) => SuiClaimedFromBeeHive.fromJSONField(field), fromJSON: (json) => SuiClaimedFromBeeHive.fromJSON(json), fromSuiParsedData: (content) => SuiClaimedFromBeeHive.fromSuiParsedData(content), fromSuiObjectData: (content) => SuiClaimedFromBeeHive.fromSuiObjectData(content), fetch: async (client, id) => SuiClaimedFromBeeHive.fetch(client, id), new: (fields) => { return new SuiClaimedFromBeeHive([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SuiClaimedFromBeeHive.reified(); }
    static phantom() { return (0, reified_1.phantom)(SuiClaimedFromBeeHive.reified()); }
    static get p() { return SuiClaimedFromBeeHive.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SuiClaimedFromBeeHive", {
            queen_version: bcs_1.bcs.u64(), sui_claimed: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return SuiClaimedFromBeeHive.reified().new({ queenVersion: (0, reified_1.decodeFromFields)("u64", fields.queen_version), suiClaimed: (0, reified_1.decodeFromFields)("u64", fields.sui_claimed) }); }
    static fromFieldsWithTypes(item) {
        if (!isSuiClaimedFromBeeHive(item.type)) {
            throw new Error("not a SuiClaimedFromBeeHive type");
        }
        return SuiClaimedFromBeeHive.reified().new({ queenVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.queen_version), suiClaimed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_claimed) });
    }
    static fromBcs(data) { return SuiClaimedFromBeeHive.fromFields(SuiClaimedFromBeeHive.bcs.parse(data)); }
    toJSONField() {
        return {
            queenVersion: this.queenVersion.toString(), suiClaimed: this.suiClaimed.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SuiClaimedFromBeeHive.reified().new({ queenVersion: (0, reified_1.decodeFromJSONField)("u64", field.queenVersion), suiClaimed: (0, reified_1.decodeFromJSONField)("u64", field.suiClaimed) }); }
    static fromJSON(json) {
        if (json.$typeName !== SuiClaimedFromBeeHive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SuiClaimedFromBeeHive.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSuiClaimedFromBeeHive(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SuiClaimedFromBeeHive object`);
    } return SuiClaimedFromBeeHive.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSuiClaimedFromBeeHive(data.bcs.type)) {
                throw new Error(`object at is not a SuiClaimedFromBeeHive object`);
            }
            return SuiClaimedFromBeeHive.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SuiClaimedFromBeeHive.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SuiClaimedFromBeeHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuiClaimedFromBeeHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuiClaimedFromBeeHive object`);
        }
        return SuiClaimedFromBeeHive.fromSuiObjectData(res.data);
    }
}
exports.SuiClaimedFromBeeHive = SuiClaimedFromBeeHive;
SuiClaimedFromBeeHive.$typeName = `${PKG_V1}::dragon_trainer::SuiClaimedFromBeeHive`;
SuiClaimedFromBeeHive.$numTypeParams = 0;
SuiClaimedFromBeeHive.$isPhantom = [];
/* ============================== SuiNsNameExpired =============================== */
function isSuiNsNameExpired(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::SuiNsNameExpired`; }
class SuiNsNameExpired {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SuiNsNameExpired.$typeName;
        this.$isPhantom = SuiNsNameExpired.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SuiNsNameExpired.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.suinsDomainName = fields.suinsDomainName;
    }
    static reified() { return { typeName: SuiNsNameExpired.$typeName, fullTypeName: (0, util_1.composeSuiType)(SuiNsNameExpired.$typeName, ...[]), typeArgs: [], isPhantom: SuiNsNameExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SuiNsNameExpired.fromFields(fields), fromFieldsWithTypes: (item) => SuiNsNameExpired.fromFieldsWithTypes(item), fromBcs: (data) => SuiNsNameExpired.fromBcs(data), bcs: SuiNsNameExpired.bcs, fromJSONField: (field) => SuiNsNameExpired.fromJSONField(field), fromJSON: (json) => SuiNsNameExpired.fromJSON(json), fromSuiParsedData: (content) => SuiNsNameExpired.fromSuiParsedData(content), fromSuiObjectData: (content) => SuiNsNameExpired.fromSuiObjectData(content), fetch: async (client, id) => SuiNsNameExpired.fetch(client, id), new: (fields) => { return new SuiNsNameExpired([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SuiNsNameExpired.reified(); }
    static phantom() { return (0, reified_1.phantom)(SuiNsNameExpired.reified()); }
    static get p() { return SuiNsNameExpired.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SuiNsNameExpired", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), suins_domain_name: structs_3.String.bcs
        });
    }
    ;
    static fromFields(fields) { return SuiNsNameExpired.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), suinsDomainName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.suins_domain_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isSuiNsNameExpired(item.type)) {
            throw new Error("not a SuiNsNameExpired type");
        }
        return SuiNsNameExpired.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), suinsDomainName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.suins_domain_name) });
    }
    static fromBcs(data) { return SuiNsNameExpired.fromFields(SuiNsNameExpired.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, suinsDomainName: this.suinsDomainName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SuiNsNameExpired.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), suinsDomainName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.suinsDomainName) }); }
    static fromJSON(json) {
        if (json.$typeName !== SuiNsNameExpired.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SuiNsNameExpired.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSuiNsNameExpired(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SuiNsNameExpired object`);
    } return SuiNsNameExpired.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSuiNsNameExpired(data.bcs.type)) {
                throw new Error(`object at is not a SuiNsNameExpired object`);
            }
            return SuiNsNameExpired.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SuiNsNameExpired.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SuiNsNameExpired object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuiNsNameExpired(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuiNsNameExpired object`);
        }
        return SuiNsNameExpired.fromSuiObjectData(res.data);
    }
}
exports.SuiNsNameExpired = SuiNsNameExpired;
SuiNsNameExpired.$typeName = `${PKG_V1}::dragon_trainer::SuiNsNameExpired`;
SuiNsNameExpired.$numTypeParams = 0;
SuiNsNameExpired.$isPhantom = [];
/* ============================== TrainerActiveForQuest =============================== */
function isTrainerActiveForQuest(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::TrainerActiveForQuest`; }
class TrainerActiveForQuest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TrainerActiveForQuest.$typeName;
        this.$isPhantom = TrainerActiveForQuest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TrainerActiveForQuest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddress = fields.trainerAddress;
        ;
        this.version = fields.version;
        ;
        this.suiBet = fields.suiBet;
        ;
        this.playerOnly = fields.playerOnly;
        ;
        this.withTrainer = fields.withTrainer;
        ;
        this.activeIndex = fields.activeIndex;
    }
    static reified() { return { typeName: TrainerActiveForQuest.$typeName, fullTypeName: (0, util_1.composeSuiType)(TrainerActiveForQuest.$typeName, ...[]), typeArgs: [], isPhantom: TrainerActiveForQuest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TrainerActiveForQuest.fromFields(fields), fromFieldsWithTypes: (item) => TrainerActiveForQuest.fromFieldsWithTypes(item), fromBcs: (data) => TrainerActiveForQuest.fromBcs(data), bcs: TrainerActiveForQuest.bcs, fromJSONField: (field) => TrainerActiveForQuest.fromJSONField(field), fromJSON: (json) => TrainerActiveForQuest.fromJSON(json), fromSuiParsedData: (content) => TrainerActiveForQuest.fromSuiParsedData(content), fromSuiObjectData: (content) => TrainerActiveForQuest.fromSuiObjectData(content), fetch: async (client, id) => TrainerActiveForQuest.fetch(client, id), new: (fields) => { return new TrainerActiveForQuest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TrainerActiveForQuest.reified(); }
    static phantom() { return (0, reified_1.phantom)(TrainerActiveForQuest.reified()); }
    static get p() { return TrainerActiveForQuest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TrainerActiveForQuest", {
            trainer_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), sui_bet: bcs_1.bcs.u64(), player_only: bcs_1.bcs.bool(), with_trainer: structs_2.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), active_index: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TrainerActiveForQuest.reified().new({ trainerAddress: (0, reified_1.decodeFromFields)("address", fields.trainer_address), version: (0, reified_1.decodeFromFields)("u64", fields.version), suiBet: (0, reified_1.decodeFromFields)("u64", fields.sui_bet), playerOnly: (0, reified_1.decodeFromFields)("bool", fields.player_only), withTrainer: (0, reified_1.decodeFromFields)(structs_2.Option.reified("address"), fields.with_trainer), activeIndex: (0, reified_1.decodeFromFields)("u64", fields.active_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isTrainerActiveForQuest(item.type)) {
            throw new Error("not a TrainerActiveForQuest type");
        }
        return TrainerActiveForQuest.reified().new({ trainerAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_address), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), suiBet: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_bet), playerOnly: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.player_only), withTrainer: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified("address"), item.fields.with_trainer), activeIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_index) });
    }
    static fromBcs(data) { return TrainerActiveForQuest.fromFields(TrainerActiveForQuest.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddress: this.trainerAddress, version: this.version.toString(), suiBet: this.suiBet.toString(), playerOnly: this.playerOnly, withTrainer: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<address>`, this.withTrainer), activeIndex: this.activeIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TrainerActiveForQuest.reified().new({ trainerAddress: (0, reified_1.decodeFromJSONField)("address", field.trainerAddress), version: (0, reified_1.decodeFromJSONField)("u64", field.version), suiBet: (0, reified_1.decodeFromJSONField)("u64", field.suiBet), playerOnly: (0, reified_1.decodeFromJSONField)("bool", field.playerOnly), withTrainer: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified("address"), field.withTrainer), activeIndex: (0, reified_1.decodeFromJSONField)("u64", field.activeIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== TrainerActiveForQuest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TrainerActiveForQuest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTrainerActiveForQuest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TrainerActiveForQuest object`);
    } return TrainerActiveForQuest.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTrainerActiveForQuest(data.bcs.type)) {
                throw new Error(`object at is not a TrainerActiveForQuest object`);
            }
            return TrainerActiveForQuest.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TrainerActiveForQuest.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TrainerActiveForQuest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTrainerActiveForQuest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TrainerActiveForQuest object`);
        }
        return TrainerActiveForQuest.fromSuiObjectData(res.data);
    }
}
exports.TrainerActiveForQuest = TrainerActiveForQuest;
TrainerActiveForQuest.$typeName = `${PKG_V1}::dragon_trainer::TrainerActiveForQuest`;
TrainerActiveForQuest.$numTypeParams = 0;
TrainerActiveForQuest.$isPhantom = [];
/* ============================== TrainerCanceledActiveQuest =============================== */
function isTrainerCanceledActiveQuest(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::TrainerCanceledActiveQuest`; }
class TrainerCanceledActiveQuest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TrainerCanceledActiveQuest.$typeName;
        this.$isPhantom = TrainerCanceledActiveQuest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TrainerCanceledActiveQuest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddress = fields.trainerAddress;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: TrainerCanceledActiveQuest.$typeName, fullTypeName: (0, util_1.composeSuiType)(TrainerCanceledActiveQuest.$typeName, ...[]), typeArgs: [], isPhantom: TrainerCanceledActiveQuest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TrainerCanceledActiveQuest.fromFields(fields), fromFieldsWithTypes: (item) => TrainerCanceledActiveQuest.fromFieldsWithTypes(item), fromBcs: (data) => TrainerCanceledActiveQuest.fromBcs(data), bcs: TrainerCanceledActiveQuest.bcs, fromJSONField: (field) => TrainerCanceledActiveQuest.fromJSONField(field), fromJSON: (json) => TrainerCanceledActiveQuest.fromJSON(json), fromSuiParsedData: (content) => TrainerCanceledActiveQuest.fromSuiParsedData(content), fromSuiObjectData: (content) => TrainerCanceledActiveQuest.fromSuiObjectData(content), fetch: async (client, id) => TrainerCanceledActiveQuest.fetch(client, id), new: (fields) => { return new TrainerCanceledActiveQuest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TrainerCanceledActiveQuest.reified(); }
    static phantom() { return (0, reified_1.phantom)(TrainerCanceledActiveQuest.reified()); }
    static get p() { return TrainerCanceledActiveQuest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TrainerCanceledActiveQuest", {
            trainer_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TrainerCanceledActiveQuest.reified().new({ trainerAddress: (0, reified_1.decodeFromFields)("address", fields.trainer_address), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isTrainerCanceledActiveQuest(item.type)) {
            throw new Error("not a TrainerCanceledActiveQuest type");
        }
        return TrainerCanceledActiveQuest.reified().new({ trainerAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_address), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return TrainerCanceledActiveQuest.fromFields(TrainerCanceledActiveQuest.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddress: this.trainerAddress, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TrainerCanceledActiveQuest.reified().new({ trainerAddress: (0, reified_1.decodeFromJSONField)("address", field.trainerAddress), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== TrainerCanceledActiveQuest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TrainerCanceledActiveQuest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTrainerCanceledActiveQuest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TrainerCanceledActiveQuest object`);
    } return TrainerCanceledActiveQuest.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTrainerCanceledActiveQuest(data.bcs.type)) {
                throw new Error(`object at is not a TrainerCanceledActiveQuest object`);
            }
            return TrainerCanceledActiveQuest.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TrainerCanceledActiveQuest.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TrainerCanceledActiveQuest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTrainerCanceledActiveQuest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TrainerCanceledActiveQuest object`);
        }
        return TrainerCanceledActiveQuest.fromSuiObjectData(res.data);
    }
}
exports.TrainerCanceledActiveQuest = TrainerCanceledActiveQuest;
TrainerCanceledActiveQuest.$typeName = `${PKG_V1}::dragon_trainer::TrainerCanceledActiveQuest`;
TrainerCanceledActiveQuest.$numTypeParams = 0;
TrainerCanceledActiveQuest.$isPhantom = [];
/* ============================== TrainerSession =============================== */
function isTrainerSession(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::TrainerSession`; }
class TrainerSession {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TrainerSession.$typeName;
        this.$isPhantom = TrainerSession.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TrainerSession.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddress = fields.trainerAddress;
        ;
        this.userBees = fields.userBees;
        ;
        this.questsCount = fields.questsCount;
        ;
        this.suiBalance = fields.suiBalance;
        ;
        this.currentQuest = fields.currentQuest;
        ;
        this.state = fields.state;
    }
    static reified() { return { typeName: TrainerSession.$typeName, fullTypeName: (0, util_1.composeSuiType)(TrainerSession.$typeName, ...[]), typeArgs: [], isPhantom: TrainerSession.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TrainerSession.fromFields(fields), fromFieldsWithTypes: (item) => TrainerSession.fromFieldsWithTypes(item), fromBcs: (data) => TrainerSession.fromBcs(data), bcs: TrainerSession.bcs, fromJSONField: (field) => TrainerSession.fromJSONField(field), fromJSON: (json) => TrainerSession.fromJSON(json), fromSuiParsedData: (content) => TrainerSession.fromSuiParsedData(content), fromSuiObjectData: (content) => TrainerSession.fromSuiObjectData(content), fetch: async (client, id) => TrainerSession.fetch(client, id), new: (fields) => { return new TrainerSession([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TrainerSession.reified(); }
    static phantom() { return (0, reified_1.phantom)(TrainerSession.reified()); }
    static get p() { return TrainerSession.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TrainerSession", {
            trainer_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), user_bees: bcs_1.bcs.vector(bcs_1.bcs.u64()), quests_count: bcs_1.bcs.u64(), sui_balance: structs_4.Balance.bcs, current_quest: structs_3.String.bcs, state: bcs_1.bcs.u8()
        });
    }
    ;
    static fromFields(fields) { return TrainerSession.reified().new({ trainerAddress: (0, reified_1.decodeFromFields)("address", fields.trainer_address), userBees: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.user_bees), questsCount: (0, reified_1.decodeFromFields)("u64", fields.quests_count), suiBalance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.sui_balance), currentQuest: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.current_quest), state: (0, reified_1.decodeFromFields)("u8", fields.state) }); }
    static fromFieldsWithTypes(item) {
        if (!isTrainerSession(item.type)) {
            throw new Error("not a TrainerSession type");
        }
        return TrainerSession.reified().new({ trainerAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_address), userBees: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.user_bees), questsCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.quests_count), suiBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.sui_balance), currentQuest: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.current_quest), state: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.state) });
    }
    static fromBcs(data) { return TrainerSession.fromFields(TrainerSession.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddress: this.trainerAddress, userBees: (0, reified_1.fieldToJSON)(`vector<u64>`, this.userBees), questsCount: this.questsCount.toString(), suiBalance: this.suiBalance.toJSONField(), currentQuest: this.currentQuest, state: this.state,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TrainerSession.reified().new({ trainerAddress: (0, reified_1.decodeFromJSONField)("address", field.trainerAddress), userBees: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.userBees), questsCount: (0, reified_1.decodeFromJSONField)("u64", field.questsCount), suiBalance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.suiBalance), currentQuest: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.currentQuest), state: (0, reified_1.decodeFromJSONField)("u8", field.state) }); }
    static fromJSON(json) {
        if (json.$typeName !== TrainerSession.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TrainerSession.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTrainerSession(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TrainerSession object`);
    } return TrainerSession.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTrainerSession(data.bcs.type)) {
                throw new Error(`object at is not a TrainerSession object`);
            }
            return TrainerSession.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TrainerSession.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TrainerSession object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTrainerSession(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TrainerSession object`);
        }
        return TrainerSession.fromSuiObjectData(res.data);
    }
}
exports.TrainerSession = TrainerSession;
TrainerSession.$typeName = `${PKG_V1}::dragon_trainer::TrainerSession`;
TrainerSession.$numTypeParams = 0;
TrainerSession.$isPhantom = [];
/* ============================== TransformationRequestProcessed =============================== */
function isTransformationRequestProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::TransformationRequestProcessed`; }
class TransformationRequestProcessed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TransformationRequestProcessed.$typeName;
        this.$isPhantom = TransformationRequestProcessed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TransformationRequestProcessed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.imgIndex = fields.imgIndex;
        ;
        this.img = fields.img;
    }
    static reified() { return { typeName: TransformationRequestProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(TransformationRequestProcessed.$typeName, ...[]), typeArgs: [], isPhantom: TransformationRequestProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TransformationRequestProcessed.fromFields(fields), fromFieldsWithTypes: (item) => TransformationRequestProcessed.fromFieldsWithTypes(item), fromBcs: (data) => TransformationRequestProcessed.fromBcs(data), bcs: TransformationRequestProcessed.bcs, fromJSONField: (field) => TransformationRequestProcessed.fromJSONField(field), fromJSON: (json) => TransformationRequestProcessed.fromJSON(json), fromSuiParsedData: (content) => TransformationRequestProcessed.fromSuiParsedData(content), fromSuiObjectData: (content) => TransformationRequestProcessed.fromSuiObjectData(content), fetch: async (client, id) => TransformationRequestProcessed.fetch(client, id), new: (fields) => { return new TransformationRequestProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TransformationRequestProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(TransformationRequestProcessed.reified()); }
    static get p() { return TransformationRequestProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TransformationRequestProcessed", {
            version: bcs_1.bcs.u64(), img_index: bcs_1.bcs.u64(), img: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return TransformationRequestProcessed.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), imgIndex: (0, reified_1.decodeFromFields)("u64", fields.img_index), img: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.img) }); }
    static fromFieldsWithTypes(item) {
        if (!isTransformationRequestProcessed(item.type)) {
            throw new Error("not a TransformationRequestProcessed type");
        }
        return TransformationRequestProcessed.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), imgIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.img_index), img: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.img) });
    }
    static fromBcs(data) { return TransformationRequestProcessed.fromFields(TransformationRequestProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), imgIndex: this.imgIndex.toString(), img: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.img),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TransformationRequestProcessed.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), imgIndex: (0, reified_1.decodeFromJSONField)("u64", field.imgIndex), img: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.img) }); }
    static fromJSON(json) {
        if (json.$typeName !== TransformationRequestProcessed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TransformationRequestProcessed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransformationRequestProcessed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TransformationRequestProcessed object`);
    } return TransformationRequestProcessed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTransformationRequestProcessed(data.bcs.type)) {
                throw new Error(`object at is not a TransformationRequestProcessed object`);
            }
            return TransformationRequestProcessed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TransformationRequestProcessed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TransformationRequestProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransformationRequestProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TransformationRequestProcessed object`);
        }
        return TransformationRequestProcessed.fromSuiObjectData(res.data);
    }
}
exports.TransformationRequestProcessed = TransformationRequestProcessed;
TransformationRequestProcessed.$typeName = `${PKG_V1}::dragon_trainer::TransformationRequestProcessed`;
TransformationRequestProcessed.$numTypeParams = 0;
TransformationRequestProcessed.$isPhantom = [];
/* ============================== TwapUpdateCap =============================== */
function isTwapUpdateCap(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::TwapUpdateCap`; }
class TwapUpdateCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TwapUpdateCap.$typeName;
        this.$isPhantom = TwapUpdateCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TwapUpdateCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: TwapUpdateCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(TwapUpdateCap.$typeName, ...[]), typeArgs: [], isPhantom: TwapUpdateCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TwapUpdateCap.fromFields(fields), fromFieldsWithTypes: (item) => TwapUpdateCap.fromFieldsWithTypes(item), fromBcs: (data) => TwapUpdateCap.fromBcs(data), bcs: TwapUpdateCap.bcs, fromJSONField: (field) => TwapUpdateCap.fromJSONField(field), fromJSON: (json) => TwapUpdateCap.fromJSON(json), fromSuiParsedData: (content) => TwapUpdateCap.fromSuiParsedData(content), fromSuiObjectData: (content) => TwapUpdateCap.fromSuiObjectData(content), fetch: async (client, id) => TwapUpdateCap.fetch(client, id), new: (fields) => { return new TwapUpdateCap([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTwapUpdateCap(data.bcs.type)) {
                throw new Error(`object at is not a TwapUpdateCap object`);
            }
            return TwapUpdateCap.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TwapUpdateCap.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TwapUpdateCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTwapUpdateCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TwapUpdateCap object`);
        }
        return TwapUpdateCap.fromSuiObjectData(res.data);
    }
}
exports.TwapUpdateCap = TwapUpdateCap;
TwapUpdateCap.$typeName = `${PKG_V1}::dragon_trainer::TwapUpdateCap`;
TwapUpdateCap.$numTypeParams = 0;
TwapUpdateCap.$isPhantom = [];
/* ============================== UpdatedStingerBeesEnergyHealth =============================== */
function isUpdatedStingerBeesEnergyHealth(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::UpdatedStingerBeesEnergyHealth`; }
class UpdatedStingerBeesEnergyHealth {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UpdatedStingerBeesEnergyHealth.$typeName;
        this.$isPhantom = UpdatedStingerBeesEnergyHealth.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UpdatedStingerBeesEnergyHealth.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.stingerVersion = fields.stingerVersion;
        ;
        this.hiveEnergy = fields.hiveEnergy;
        ;
        this.honeyHealth = fields.honeyHealth;
    }
    static reified() { return { typeName: UpdatedStingerBeesEnergyHealth.$typeName, fullTypeName: (0, util_1.composeSuiType)(UpdatedStingerBeesEnergyHealth.$typeName, ...[]), typeArgs: [], isPhantom: UpdatedStingerBeesEnergyHealth.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UpdatedStingerBeesEnergyHealth.fromFields(fields), fromFieldsWithTypes: (item) => UpdatedStingerBeesEnergyHealth.fromFieldsWithTypes(item), fromBcs: (data) => UpdatedStingerBeesEnergyHealth.fromBcs(data), bcs: UpdatedStingerBeesEnergyHealth.bcs, fromJSONField: (field) => UpdatedStingerBeesEnergyHealth.fromJSONField(field), fromJSON: (json) => UpdatedStingerBeesEnergyHealth.fromJSON(json), fromSuiParsedData: (content) => UpdatedStingerBeesEnergyHealth.fromSuiParsedData(content), fromSuiObjectData: (content) => UpdatedStingerBeesEnergyHealth.fromSuiObjectData(content), fetch: async (client, id) => UpdatedStingerBeesEnergyHealth.fetch(client, id), new: (fields) => { return new UpdatedStingerBeesEnergyHealth([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UpdatedStingerBeesEnergyHealth.reified(); }
    static phantom() { return (0, reified_1.phantom)(UpdatedStingerBeesEnergyHealth.reified()); }
    static get p() { return UpdatedStingerBeesEnergyHealth.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UpdatedStingerBeesEnergyHealth", {
            stinger_version: bcs_1.bcs.u64(), hive_energy: bcs_1.bcs.u64(), honey_health: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UpdatedStingerBeesEnergyHealth.reified().new({ stingerVersion: (0, reified_1.decodeFromFields)("u64", fields.stinger_version), hiveEnergy: (0, reified_1.decodeFromFields)("u64", fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFields)("u64", fields.honey_health) }); }
    static fromFieldsWithTypes(item) {
        if (!isUpdatedStingerBeesEnergyHealth(item.type)) {
            throw new Error("not a UpdatedStingerBeesEnergyHealth type");
        }
        return UpdatedStingerBeesEnergyHealth.reified().new({ stingerVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stinger_version), hiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_health) });
    }
    static fromBcs(data) { return UpdatedStingerBeesEnergyHealth.fromFields(UpdatedStingerBeesEnergyHealth.bcs.parse(data)); }
    toJSONField() {
        return {
            stingerVersion: this.stingerVersion.toString(), hiveEnergy: this.hiveEnergy.toString(), honeyHealth: this.honeyHealth.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UpdatedStingerBeesEnergyHealth.reified().new({ stingerVersion: (0, reified_1.decodeFromJSONField)("u64", field.stingerVersion), hiveEnergy: (0, reified_1.decodeFromJSONField)("u64", field.hiveEnergy), honeyHealth: (0, reified_1.decodeFromJSONField)("u64", field.honeyHealth) }); }
    static fromJSON(json) {
        if (json.$typeName !== UpdatedStingerBeesEnergyHealth.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpdatedStingerBeesEnergyHealth.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpdatedStingerBeesEnergyHealth(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UpdatedStingerBeesEnergyHealth object`);
    } return UpdatedStingerBeesEnergyHealth.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUpdatedStingerBeesEnergyHealth(data.bcs.type)) {
                throw new Error(`object at is not a UpdatedStingerBeesEnergyHealth object`);
            }
            return UpdatedStingerBeesEnergyHealth.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UpdatedStingerBeesEnergyHealth.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UpdatedStingerBeesEnergyHealth object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpdatedStingerBeesEnergyHealth(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdatedStingerBeesEnergyHealth object`);
        }
        return UpdatedStingerBeesEnergyHealth.fromSuiObjectData(res.data);
    }
}
exports.UpdatedStingerBeesEnergyHealth = UpdatedStingerBeesEnergyHealth;
UpdatedStingerBeesEnergyHealth.$typeName = `${PKG_V1}::dragon_trainer::UpdatedStingerBeesEnergyHealth`;
UpdatedStingerBeesEnergyHealth.$numTypeParams = 0;
UpdatedStingerBeesEnergyHealth.$isPhantom = [];
/* ============================== UserNameUpdated =============================== */
function isUserNameUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::UserNameUpdated`; }
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
    static reified() { return { typeName: UserNameUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserNameUpdated.$typeName, ...[]), typeArgs: [], isPhantom: UserNameUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserNameUpdated.fromFields(fields), fromFieldsWithTypes: (item) => UserNameUpdated.fromFieldsWithTypes(item), fromBcs: (data) => UserNameUpdated.fromBcs(data), bcs: UserNameUpdated.bcs, fromJSONField: (field) => UserNameUpdated.fromJSONField(field), fromJSON: (json) => UserNameUpdated.fromJSON(json), fromSuiParsedData: (content) => UserNameUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => UserNameUpdated.fromSuiObjectData(content), fetch: async (client, id) => UserNameUpdated.fetch(client, id), new: (fields) => { return new UserNameUpdated([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUserNameUpdated(data.bcs.type)) {
                throw new Error(`object at is not a UserNameUpdated object`);
            }
            return UserNameUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UserNameUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserNameUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserNameUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserNameUpdated object`);
        }
        return UserNameUpdated.fromSuiObjectData(res.data);
    }
}
exports.UserNameUpdated = UserNameUpdated;
UserNameUpdated.$typeName = `${PKG_V1}::dragon_trainer::UserNameUpdated`;
UserNameUpdated.$numTypeParams = 0;
UserNameUpdated.$isPhantom = [];
/* ============================== UserWhitelistedForGenesisMint =============================== */
function isUserWhitelistedForGenesisMint(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::UserWhitelistedForGenesisMint`; }
class UserWhitelistedForGenesisMint {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UserWhitelistedForGenesisMint.$typeName;
        this.$isPhantom = UserWhitelistedForGenesisMint.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserWhitelistedForGenesisMint.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.userAddr = fields.userAddr;
        ;
        this.mintPrice = fields.mintPrice;
    }
    static reified() { return { typeName: UserWhitelistedForGenesisMint.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserWhitelistedForGenesisMint.$typeName, ...[]), typeArgs: [], isPhantom: UserWhitelistedForGenesisMint.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserWhitelistedForGenesisMint.fromFields(fields), fromFieldsWithTypes: (item) => UserWhitelistedForGenesisMint.fromFieldsWithTypes(item), fromBcs: (data) => UserWhitelistedForGenesisMint.fromBcs(data), bcs: UserWhitelistedForGenesisMint.bcs, fromJSONField: (field) => UserWhitelistedForGenesisMint.fromJSONField(field), fromJSON: (json) => UserWhitelistedForGenesisMint.fromJSON(json), fromSuiParsedData: (content) => UserWhitelistedForGenesisMint.fromSuiParsedData(content), fromSuiObjectData: (content) => UserWhitelistedForGenesisMint.fromSuiObjectData(content), fetch: async (client, id) => UserWhitelistedForGenesisMint.fetch(client, id), new: (fields) => { return new UserWhitelistedForGenesisMint([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserWhitelistedForGenesisMint.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserWhitelistedForGenesisMint.reified()); }
    static get p() { return UserWhitelistedForGenesisMint.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserWhitelistedForGenesisMint", {
            user_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), mint_price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UserWhitelistedForGenesisMint.reified().new({ userAddr: (0, reified_1.decodeFromFields)("address", fields.user_addr), mintPrice: (0, reified_1.decodeFromFields)("u64", fields.mint_price) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserWhitelistedForGenesisMint(item.type)) {
            throw new Error("not a UserWhitelistedForGenesisMint type");
        }
        return UserWhitelistedForGenesisMint.reified().new({ userAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user_addr), mintPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.mint_price) });
    }
    static fromBcs(data) { return UserWhitelistedForGenesisMint.fromFields(UserWhitelistedForGenesisMint.bcs.parse(data)); }
    toJSONField() {
        return {
            userAddr: this.userAddr, mintPrice: this.mintPrice.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserWhitelistedForGenesisMint.reified().new({ userAddr: (0, reified_1.decodeFromJSONField)("address", field.userAddr), mintPrice: (0, reified_1.decodeFromJSONField)("u64", field.mintPrice) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserWhitelistedForGenesisMint.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserWhitelistedForGenesisMint.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserWhitelistedForGenesisMint(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserWhitelistedForGenesisMint object`);
    } return UserWhitelistedForGenesisMint.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUserWhitelistedForGenesisMint(data.bcs.type)) {
                throw new Error(`object at is not a UserWhitelistedForGenesisMint object`);
            }
            return UserWhitelistedForGenesisMint.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UserWhitelistedForGenesisMint.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserWhitelistedForGenesisMint object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserWhitelistedForGenesisMint(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserWhitelistedForGenesisMint object`);
        }
        return UserWhitelistedForGenesisMint.fromSuiObjectData(res.data);
    }
}
exports.UserWhitelistedForGenesisMint = UserWhitelistedForGenesisMint;
UserWhitelistedForGenesisMint.$typeName = `${PKG_V1}::dragon_trainer::UserWhitelistedForGenesisMint`;
UserWhitelistedForGenesisMint.$numTypeParams = 0;
UserWhitelistedForGenesisMint.$isPhantom = [];
/* ============================== YieldFarm =============================== */
function isYieldFarm(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_trainer::YieldFarm`; }
class YieldFarm {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = YieldFarm.$typeName;
        this.$isPhantom = YieldFarm.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(YieldFarm.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.tradingEnabled = fields.tradingEnabled;
        ;
        this.governanceInfo = fields.governanceInfo;
        ;
        this.incomingHoneyForBees = fields.incomingHoneyForBees;
        ;
        this.incomingHiveForBees = fields.incomingHiveForBees;
        ;
        this.honeyForBees = fields.honeyForBees;
        ;
        this.hiveForBees = fields.hiveForBees;
        ;
        this.honeyGlobalIndex = fields.honeyGlobalIndex;
        ;
        this.hiveGlobalIndex = fields.hiveGlobalIndex;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: YieldFarm.$typeName, fullTypeName: (0, util_1.composeSuiType)(YieldFarm.$typeName, ...[]), typeArgs: [], isPhantom: YieldFarm.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => YieldFarm.fromFields(fields), fromFieldsWithTypes: (item) => YieldFarm.fromFieldsWithTypes(item), fromBcs: (data) => YieldFarm.fromBcs(data), bcs: YieldFarm.bcs, fromJSONField: (field) => YieldFarm.fromJSONField(field), fromJSON: (json) => YieldFarm.fromJSON(json), fromSuiParsedData: (content) => YieldFarm.fromSuiParsedData(content), fromSuiObjectData: (content) => YieldFarm.fromSuiObjectData(content), fetch: async (client, id) => YieldFarm.fetch(client, id), new: (fields) => { return new YieldFarm([], fields); }, kind: "StructClassReified", }; }
    static get r() { return YieldFarm.reified(); }
    static phantom() { return (0, reified_1.phantom)(YieldFarm.reified()); }
    static get p() { return YieldFarm.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("YieldFarm", {
            id: structs_6.UID.bcs, trading_enabled: bcs_1.bcs.bool(), governance_info: GovernanceInfo.bcs, incoming_honey_for_bees: structs_4.Balance.bcs, incoming_hive_for_bees: structs_4.Balance.bcs, honey_for_bees: structs_4.Balance.bcs, hive_for_bees: structs_4.Balance.bcs, honey_global_index: bcs_1.bcs.u256(), hive_global_index: bcs_1.bcs.u256(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return YieldFarm.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), tradingEnabled: (0, reified_1.decodeFromFields)("bool", fields.trading_enabled), governanceInfo: (0, reified_1.decodeFromFields)(GovernanceInfo.reified(), fields.governance_info), incomingHoneyForBees: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.incoming_honey_for_bees), incomingHiveForBees: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.incoming_hive_for_bees), honeyForBees: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.honey_for_bees), hiveForBees: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.hive_for_bees), honeyGlobalIndex: (0, reified_1.decodeFromFields)("u256", fields.honey_global_index), hiveGlobalIndex: (0, reified_1.decodeFromFields)("u256", fields.hive_global_index), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isYieldFarm(item.type)) {
            throw new Error("not a YieldFarm type");
        }
        return YieldFarm.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), tradingEnabled: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.trading_enabled), governanceInfo: (0, reified_1.decodeFromFieldsWithTypes)(GovernanceInfo.reified(), item.fields.governance_info), incomingHoneyForBees: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.incoming_honey_for_bees), incomingHiveForBees: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.incoming_hive_for_bees), honeyForBees: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.honey_for_bees), hiveForBees: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.hive_for_bees), honeyGlobalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.honey_global_index), hiveGlobalIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_global_index), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return YieldFarm.fromFields(YieldFarm.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, tradingEnabled: this.tradingEnabled, governanceInfo: this.governanceInfo.toJSONField(), incomingHoneyForBees: this.incomingHoneyForBees.toJSONField(), incomingHiveForBees: this.incomingHiveForBees.toJSONField(), honeyForBees: this.honeyForBees.toJSONField(), hiveForBees: this.hiveForBees.toJSONField(), honeyGlobalIndex: this.honeyGlobalIndex.toString(), hiveGlobalIndex: this.hiveGlobalIndex.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return YieldFarm.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), tradingEnabled: (0, reified_1.decodeFromJSONField)("bool", field.tradingEnabled), governanceInfo: (0, reified_1.decodeFromJSONField)(GovernanceInfo.reified(), field.governanceInfo), incomingHoneyForBees: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.incomingHoneyForBees), incomingHiveForBees: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.incomingHiveForBees), honeyForBees: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.honeyForBees), hiveForBees: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.hiveForBees), honeyGlobalIndex: (0, reified_1.decodeFromJSONField)("u256", field.honeyGlobalIndex), hiveGlobalIndex: (0, reified_1.decodeFromJSONField)("u256", field.hiveGlobalIndex), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== YieldFarm.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return YieldFarm.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isYieldFarm(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a YieldFarm object`);
    } return YieldFarm.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isYieldFarm(data.bcs.type)) {
                throw new Error(`object at is not a YieldFarm object`);
            }
            return YieldFarm.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return YieldFarm.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching YieldFarm object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isYieldFarm(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a YieldFarm object`);
        }
        return YieldFarm.fromSuiObjectData(res.data);
    }
}
exports.YieldFarm = YieldFarm;
YieldFarm.$typeName = `${PKG_V1}::dragon_trainer::YieldFarm`;
YieldFarm.$numTypeParams = 0;
YieldFarm.$isPhantom = [];
