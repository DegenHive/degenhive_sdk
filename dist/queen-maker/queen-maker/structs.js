"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBeeReturned = exports.QueenMaker = exports.QueenCustody = exports.QueenCompetitionOver = exports.QueenClaimedByItsOwner = exports.ParticipationPosition = exports.ParticipatingBees = exports.NewBeeAddedToCompetition = exports.MinBidLimitUpdated = exports.LeadingDragonBeeUpdated = exports.LeadingDragonBee = exports.EnergyAndHealthIncremented = exports.BidsOpenForExisting = exports.BidsClosed = exports.BidUpdatedByUser = exports.BidPool = exports.AuctionInfo = exports.AuctionConfig = void 0;
exports.isAuctionConfig = isAuctionConfig;
exports.isAuctionInfo = isAuctionInfo;
exports.isBidPool = isBidPool;
exports.isBidUpdatedByUser = isBidUpdatedByUser;
exports.isBidsClosed = isBidsClosed;
exports.isBidsOpenForExisting = isBidsOpenForExisting;
exports.isEnergyAndHealthIncremented = isEnergyAndHealthIncremented;
exports.isLeadingDragonBee = isLeadingDragonBee;
exports.isLeadingDragonBeeUpdated = isLeadingDragonBeeUpdated;
exports.isMinBidLimitUpdated = isMinBidLimitUpdated;
exports.isNewBeeAddedToCompetition = isNewBeeAddedToCompetition;
exports.isParticipatingBees = isParticipatingBees;
exports.isParticipationPosition = isParticipationPosition;
exports.isQueenClaimedByItsOwner = isQueenClaimedByItsOwner;
exports.isQueenCompetitionOver = isQueenCompetitionOver;
exports.isQueenCustody = isQueenCustody;
exports.isQueenMaker = isQueenMaker;
exports.isUserBeeReturned = isUserBeeReturned;
const reified = require("../../_framework/reified");
const structs_1 = require("../../_dependencies/source/0x1/string/structs");
const structs_2 = require("../../_dependencies/source/0x2/balance/structs");
const structs_3 = require("../../_dependencies/source/0x2/coin/structs");
const structs_4 = require("../../_dependencies/source/0x2/linked-table/structs");
const structs_5 = require("../../_dependencies/source/0x2/object/structs");
const structs_6 = require("../../_dependencies/source/0x2/sui/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const structs_7 = require("../../dragon-trainer/dragon-trainer/structs");
const structs_8 = require("../../yield-flow/hive/structs");
;
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const PUBLISHED_AT = __1.queenmaker.PUBLISHED_AT;
const PKG_V1 = __1.queenmaker.PKG_V1;
/* ============================== AuctionConfig =============================== */
function isAuctionConfig(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::AuctionConfig`; }
class AuctionConfig {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AuctionConfig.$typeName;
        this.$isPhantom = AuctionConfig.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AuctionConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bidIncreasePct = fields.bidIncreasePct;
        ;
        this.bidDecreasePct = fields.bidDecreasePct;
        ;
        this.unlimitedDepositWindow = fields.unlimitedDepositWindow;
        ;
        this.limitedDepositWindow = fields.limitedDepositWindow;
        ;
        this.cooldownPeriod = fields.cooldownPeriod;
        ;
        this.maxEggsPerQueen = fields.maxEggsPerQueen;
        ;
        this.energyTax = fields.energyTax;
    }
    static reified() { return { typeName: AuctionConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(AuctionConfig.$typeName, ...[]), typeArgs: [], isPhantom: AuctionConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AuctionConfig.fromFields(fields), fromFieldsWithTypes: (item) => AuctionConfig.fromFieldsWithTypes(item), fromBcs: (data) => AuctionConfig.fromBcs(data), bcs: AuctionConfig.bcs, fromJSONField: (field) => AuctionConfig.fromJSONField(field), fromJSON: (json) => AuctionConfig.fromJSON(json), fromSuiParsedData: (content) => AuctionConfig.fromSuiParsedData(content), fromSuiObjectData: (content) => AuctionConfig.fromSuiObjectData(content), fetch: async (client, id) => AuctionConfig.fetch(client, id), new: (fields) => { return new AuctionConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AuctionConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(AuctionConfig.reified()); }
    static get p() { return AuctionConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AuctionConfig", {
            bid_increase_pct: bcs_1.bcs.u64(), bid_decrease_pct: bcs_1.bcs.u64(), unlimited_deposit_window: bcs_1.bcs.u64(), limited_deposit_window: bcs_1.bcs.u64(), cooldown_period: bcs_1.bcs.u64(), max_eggs_per_queen: bcs_1.bcs.u64(), energy_tax: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return AuctionConfig.reified().new({ bidIncreasePct: (0, reified_1.decodeFromFields)("u64", fields.bid_increase_pct), bidDecreasePct: (0, reified_1.decodeFromFields)("u64", fields.bid_decrease_pct), unlimitedDepositWindow: (0, reified_1.decodeFromFields)("u64", fields.unlimited_deposit_window), limitedDepositWindow: (0, reified_1.decodeFromFields)("u64", fields.limited_deposit_window), cooldownPeriod: (0, reified_1.decodeFromFields)("u64", fields.cooldown_period), maxEggsPerQueen: (0, reified_1.decodeFromFields)("u64", fields.max_eggs_per_queen), energyTax: (0, reified_1.decodeFromFields)("u64", fields.energy_tax) }); }
    static fromFieldsWithTypes(item) {
        if (!isAuctionConfig(item.type)) {
            throw new Error("not a AuctionConfig type");
        }
        return AuctionConfig.reified().new({ bidIncreasePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_increase_pct), bidDecreasePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_decrease_pct), unlimitedDepositWindow: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlimited_deposit_window), limitedDepositWindow: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.limited_deposit_window), cooldownPeriod: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cooldown_period), maxEggsPerQueen: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_eggs_per_queen), energyTax: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy_tax) });
    }
    static fromBcs(data) { return AuctionConfig.fromFields(AuctionConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            bidIncreasePct: this.bidIncreasePct.toString(), bidDecreasePct: this.bidDecreasePct.toString(), unlimitedDepositWindow: this.unlimitedDepositWindow.toString(), limitedDepositWindow: this.limitedDepositWindow.toString(), cooldownPeriod: this.cooldownPeriod.toString(), maxEggsPerQueen: this.maxEggsPerQueen.toString(), energyTax: this.energyTax.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AuctionConfig.reified().new({ bidIncreasePct: (0, reified_1.decodeFromJSONField)("u64", field.bidIncreasePct), bidDecreasePct: (0, reified_1.decodeFromJSONField)("u64", field.bidDecreasePct), unlimitedDepositWindow: (0, reified_1.decodeFromJSONField)("u64", field.unlimitedDepositWindow), limitedDepositWindow: (0, reified_1.decodeFromJSONField)("u64", field.limitedDepositWindow), cooldownPeriod: (0, reified_1.decodeFromJSONField)("u64", field.cooldownPeriod), maxEggsPerQueen: (0, reified_1.decodeFromJSONField)("u64", field.maxEggsPerQueen), energyTax: (0, reified_1.decodeFromJSONField)("u64", field.energyTax) }); }
    static fromJSON(json) {
        if (json.$typeName !== AuctionConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AuctionConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAuctionConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AuctionConfig object`);
    } return AuctionConfig.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAuctionConfig(data.bcs.type)) {
                throw new Error(`object at is not a AuctionConfig object`);
            }
            return AuctionConfig.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AuctionConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AuctionConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAuctionConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AuctionConfig object`);
        }
        return AuctionConfig.fromSuiObjectData(res.data);
    }
}
exports.AuctionConfig = AuctionConfig;
AuctionConfig.$typeName = `${PKG_V1}::queen_maker::AuctionConfig`;
AuctionConfig.$numTypeParams = 0;
AuctionConfig.$isPhantom = [];
/* ============================== AuctionInfo =============================== */
function isAuctionInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::AuctionInfo`; }
class AuctionInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AuctionInfo.$typeName;
        this.$isPhantom = AuctionInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AuctionInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.auctionStartEpoch = fields.auctionStartEpoch;
        ;
        this.auctionStatus = fields.auctionStatus;
        ;
        this.priceToBeAQueen = fields.priceToBeAQueen;
        ;
        this.priceToBeAQueenUpdateEpoch = fields.priceToBeAQueenUpdateEpoch;
        ;
        this.auctionPhase2StartEpoch = fields.auctionPhase2StartEpoch;
        ;
        this.unlimitedDepositsCloseMs = fields.unlimitedDepositsCloseMs;
    }
    static reified() { return { typeName: AuctionInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(AuctionInfo.$typeName, ...[]), typeArgs: [], isPhantom: AuctionInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AuctionInfo.fromFields(fields), fromFieldsWithTypes: (item) => AuctionInfo.fromFieldsWithTypes(item), fromBcs: (data) => AuctionInfo.fromBcs(data), bcs: AuctionInfo.bcs, fromJSONField: (field) => AuctionInfo.fromJSONField(field), fromJSON: (json) => AuctionInfo.fromJSON(json), fromSuiParsedData: (content) => AuctionInfo.fromSuiParsedData(content), fromSuiObjectData: (content) => AuctionInfo.fromSuiObjectData(content), fetch: async (client, id) => AuctionInfo.fetch(client, id), new: (fields) => { return new AuctionInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AuctionInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(AuctionInfo.reified()); }
    static get p() { return AuctionInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AuctionInfo", {
            auction_start_epoch: bcs_1.bcs.u64(), auction_status: bcs_1.bcs.u8(), price_to_be_a_queen: bcs_1.bcs.u64(), price_to_be_a_queen_update_epoch: bcs_1.bcs.u64(), auction_phase_2_start_epoch: bcs_1.bcs.u64(), unlimited_deposits_close_ms: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return AuctionInfo.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_start_epoch), auctionStatus: (0, reified_1.decodeFromFields)("u8", fields.auction_status), priceToBeAQueen: (0, reified_1.decodeFromFields)("u64", fields.price_to_be_a_queen), priceToBeAQueenUpdateEpoch: (0, reified_1.decodeFromFields)("u64", fields.price_to_be_a_queen_update_epoch), auctionPhase2StartEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_phase_2_start_epoch), unlimitedDepositsCloseMs: (0, reified_1.decodeFromFields)("u64", fields.unlimited_deposits_close_ms) }); }
    static fromFieldsWithTypes(item) {
        if (!isAuctionInfo(item.type)) {
            throw new Error("not a AuctionInfo type");
        }
        return AuctionInfo.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_start_epoch), auctionStatus: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.auction_status), priceToBeAQueen: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_to_be_a_queen), priceToBeAQueenUpdateEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_to_be_a_queen_update_epoch), auctionPhase2StartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_phase_2_start_epoch), unlimitedDepositsCloseMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlimited_deposits_close_ms) });
    }
    static fromBcs(data) { return AuctionInfo.fromFields(AuctionInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            auctionStartEpoch: this.auctionStartEpoch.toString(), auctionStatus: this.auctionStatus, priceToBeAQueen: this.priceToBeAQueen.toString(), priceToBeAQueenUpdateEpoch: this.priceToBeAQueenUpdateEpoch.toString(), auctionPhase2StartEpoch: this.auctionPhase2StartEpoch.toString(), unlimitedDepositsCloseMs: this.unlimitedDepositsCloseMs.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AuctionInfo.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionStartEpoch), auctionStatus: (0, reified_1.decodeFromJSONField)("u8", field.auctionStatus), priceToBeAQueen: (0, reified_1.decodeFromJSONField)("u64", field.priceToBeAQueen), priceToBeAQueenUpdateEpoch: (0, reified_1.decodeFromJSONField)("u64", field.priceToBeAQueenUpdateEpoch), auctionPhase2StartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionPhase2StartEpoch), unlimitedDepositsCloseMs: (0, reified_1.decodeFromJSONField)("u64", field.unlimitedDepositsCloseMs) }); }
    static fromJSON(json) {
        if (json.$typeName !== AuctionInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AuctionInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAuctionInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AuctionInfo object`);
    } return AuctionInfo.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAuctionInfo(data.bcs.type)) {
                throw new Error(`object at is not a AuctionInfo object`);
            }
            return AuctionInfo.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AuctionInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AuctionInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAuctionInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AuctionInfo object`);
        }
        return AuctionInfo.fromSuiObjectData(res.data);
    }
}
exports.AuctionInfo = AuctionInfo;
AuctionInfo.$typeName = `${PKG_V1}::queen_maker::AuctionInfo`;
AuctionInfo.$numTypeParams = 0;
AuctionInfo.$isPhantom = [];
/* ============================== BidPool =============================== */
function isBidPool(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::BidPool`; }
class BidPool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidPool.$typeName;
        this.$isPhantom = BidPool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidPool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.suiAvailable = fields.suiAvailable;
        ;
        this.totalSuiBidded = fields.totalSuiBidded;
        ;
        this.energyYield = fields.energyYield;
        ;
        this.totalHiveEnergy = fields.totalHiveEnergy;
        ;
        this.totalHealth = fields.totalHealth;
        ;
        this.beesParticipated = fields.beesParticipated;
    }
    static reified() { return { typeName: BidPool.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidPool.$typeName, ...[]), typeArgs: [], isPhantom: BidPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidPool.fromFields(fields), fromFieldsWithTypes: (item) => BidPool.fromFieldsWithTypes(item), fromBcs: (data) => BidPool.fromBcs(data), bcs: BidPool.bcs, fromJSONField: (field) => BidPool.fromJSONField(field), fromJSON: (json) => BidPool.fromJSON(json), fromSuiParsedData: (content) => BidPool.fromSuiParsedData(content), fromSuiObjectData: (content) => BidPool.fromSuiObjectData(content), fetch: async (client, id) => BidPool.fetch(client, id), new: (fields) => { return new BidPool([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidPool.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidPool.reified()); }
    static get p() { return BidPool.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidPool", {
            sui_available: structs_2.Balance.bcs, total_sui_bidded: bcs_1.bcs.u64(), energy_yield: bcs_1.bcs.u64(), total_hive_energy: bcs_1.bcs.u64(), total_health: bcs_1.bcs.u64(), bees_participated: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidPool.reified().new({ suiAvailable: (0, reified_1.decodeFromFields)(structs_2.Balance.reified(reified.phantom(structs_6.SUI.reified())), fields.sui_available), totalSuiBidded: (0, reified_1.decodeFromFields)("u64", fields.total_sui_bidded), energyYield: (0, reified_1.decodeFromFields)("u64", fields.energy_yield), totalHiveEnergy: (0, reified_1.decodeFromFields)("u64", fields.total_hive_energy), totalHealth: (0, reified_1.decodeFromFields)("u64", fields.total_health), beesParticipated: (0, reified_1.decodeFromFields)("u64", fields.bees_participated) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidPool(item.type)) {
            throw new Error("not a BidPool type");
        }
        return BidPool.reified().new({ suiAvailable: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Balance.reified(reified.phantom(structs_6.SUI.reified())), item.fields.sui_available), totalSuiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_sui_bidded), energyYield: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy_yield), totalHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_hive_energy), totalHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_health), beesParticipated: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_participated) });
    }
    static fromBcs(data) { return BidPool.fromFields(BidPool.bcs.parse(data)); }
    toJSONField() {
        return {
            suiAvailable: this.suiAvailable.toJSONField(), totalSuiBidded: this.totalSuiBidded.toString(), energyYield: this.energyYield.toString(), totalHiveEnergy: this.totalHiveEnergy.toString(), totalHealth: this.totalHealth.toString(), beesParticipated: this.beesParticipated.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidPool.reified().new({ suiAvailable: (0, reified_1.decodeFromJSONField)(structs_2.Balance.reified(reified.phantom(structs_6.SUI.reified())), field.suiAvailable), totalSuiBidded: (0, reified_1.decodeFromJSONField)("u64", field.totalSuiBidded), energyYield: (0, reified_1.decodeFromJSONField)("u64", field.energyYield), totalHiveEnergy: (0, reified_1.decodeFromJSONField)("u64", field.totalHiveEnergy), totalHealth: (0, reified_1.decodeFromJSONField)("u64", field.totalHealth), beesParticipated: (0, reified_1.decodeFromJSONField)("u64", field.beesParticipated) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidPool.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidPool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidPool object`);
    } return BidPool.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidPool(data.bcs.type)) {
                throw new Error(`object at is not a BidPool object`);
            }
            return BidPool.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidPool.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidPool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidPool object`);
        }
        return BidPool.fromSuiObjectData(res.data);
    }
}
exports.BidPool = BidPool;
BidPool.$typeName = `${PKG_V1}::queen_maker::BidPool`;
BidPool.$numTypeParams = 0;
BidPool.$isPhantom = [];
/* ============================== BidUpdatedByUser =============================== */
function isBidUpdatedByUser(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::BidUpdatedByUser`; }
class BidUpdatedByUser {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidUpdatedByUser.$typeName;
        this.$isPhantom = BidUpdatedByUser.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidUpdatedByUser.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.username = fields.username;
        ;
        this.bidAmt = fields.bidAmt;
        ;
        this.taxAmt = fields.taxAmt;
        ;
        this.flag = fields.flag;
        ;
        this.auctionStartAt = fields.auctionStartAt;
    }
    static reified() { return { typeName: BidUpdatedByUser.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidUpdatedByUser.$typeName, ...[]), typeArgs: [], isPhantom: BidUpdatedByUser.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidUpdatedByUser.fromFields(fields), fromFieldsWithTypes: (item) => BidUpdatedByUser.fromFieldsWithTypes(item), fromBcs: (data) => BidUpdatedByUser.fromBcs(data), bcs: BidUpdatedByUser.bcs, fromJSONField: (field) => BidUpdatedByUser.fromJSONField(field), fromJSON: (json) => BidUpdatedByUser.fromJSON(json), fromSuiParsedData: (content) => BidUpdatedByUser.fromSuiParsedData(content), fromSuiObjectData: (content) => BidUpdatedByUser.fromSuiObjectData(content), fetch: async (client, id) => BidUpdatedByUser.fetch(client, id), new: (fields) => { return new BidUpdatedByUser([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidUpdatedByUser.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidUpdatedByUser.reified()); }
    static get p() { return BidUpdatedByUser.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidUpdatedByUser", {
            trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, bid_amt: bcs_1.bcs.u64(), tax_amt: bcs_1.bcs.u64(), flag: bcs_1.bcs.bool(), auction_start_at: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidUpdatedByUser.reified().new({ trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), bidAmt: (0, reified_1.decodeFromFields)("u64", fields.bid_amt), taxAmt: (0, reified_1.decodeFromFields)("u64", fields.tax_amt), flag: (0, reified_1.decodeFromFields)("bool", fields.flag), auctionStartAt: (0, reified_1.decodeFromFields)("u64", fields.auction_start_at) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidUpdatedByUser(item.type)) {
            throw new Error("not a BidUpdatedByUser type");
        }
        return BidUpdatedByUser.reified().new({ trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), bidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_amt), taxAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tax_amt), flag: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.flag), auctionStartAt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_start_at) });
    }
    static fromBcs(data) { return BidUpdatedByUser.fromFields(BidUpdatedByUser.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddr: this.trainerAddr, username: this.username, bidAmt: this.bidAmt.toString(), taxAmt: this.taxAmt.toString(), flag: this.flag, auctionStartAt: this.auctionStartAt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidUpdatedByUser.reified().new({ trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), bidAmt: (0, reified_1.decodeFromJSONField)("u64", field.bidAmt), taxAmt: (0, reified_1.decodeFromJSONField)("u64", field.taxAmt), flag: (0, reified_1.decodeFromJSONField)("bool", field.flag), auctionStartAt: (0, reified_1.decodeFromJSONField)("u64", field.auctionStartAt) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidUpdatedByUser.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidUpdatedByUser.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidUpdatedByUser(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidUpdatedByUser object`);
    } return BidUpdatedByUser.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidUpdatedByUser(data.bcs.type)) {
                throw new Error(`object at is not a BidUpdatedByUser object`);
            }
            return BidUpdatedByUser.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidUpdatedByUser.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidUpdatedByUser object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidUpdatedByUser(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidUpdatedByUser object`);
        }
        return BidUpdatedByUser.fromSuiObjectData(res.data);
    }
}
exports.BidUpdatedByUser = BidUpdatedByUser;
BidUpdatedByUser.$typeName = `${PKG_V1}::queen_maker::BidUpdatedByUser`;
BidUpdatedByUser.$numTypeParams = 0;
BidUpdatedByUser.$isPhantom = [];
/* ============================== BidsClosed =============================== */
function isBidsClosed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::BidsClosed`; }
class BidsClosed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidsClosed.$typeName;
        this.$isPhantom = BidsClosed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidsClosed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.auctionStartEpoch = fields.auctionStartEpoch;
    }
    static reified() { return { typeName: BidsClosed.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidsClosed.$typeName, ...[]), typeArgs: [], isPhantom: BidsClosed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidsClosed.fromFields(fields), fromFieldsWithTypes: (item) => BidsClosed.fromFieldsWithTypes(item), fromBcs: (data) => BidsClosed.fromBcs(data), bcs: BidsClosed.bcs, fromJSONField: (field) => BidsClosed.fromJSONField(field), fromJSON: (json) => BidsClosed.fromJSON(json), fromSuiParsedData: (content) => BidsClosed.fromSuiParsedData(content), fromSuiObjectData: (content) => BidsClosed.fromSuiObjectData(content), fetch: async (client, id) => BidsClosed.fetch(client, id), new: (fields) => { return new BidsClosed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidsClosed.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidsClosed.reified()); }
    static get p() { return BidsClosed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidsClosed", {
            auction_start_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidsClosed.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_start_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidsClosed(item.type)) {
            throw new Error("not a BidsClosed type");
        }
        return BidsClosed.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_start_epoch) });
    }
    static fromBcs(data) { return BidsClosed.fromFields(BidsClosed.bcs.parse(data)); }
    toJSONField() {
        return {
            auctionStartEpoch: this.auctionStartEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidsClosed.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionStartEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidsClosed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidsClosed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidsClosed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidsClosed object`);
    } return BidsClosed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidsClosed(data.bcs.type)) {
                throw new Error(`object at is not a BidsClosed object`);
            }
            return BidsClosed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidsClosed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidsClosed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidsClosed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidsClosed object`);
        }
        return BidsClosed.fromSuiObjectData(res.data);
    }
}
exports.BidsClosed = BidsClosed;
BidsClosed.$typeName = `${PKG_V1}::queen_maker::BidsClosed`;
BidsClosed.$numTypeParams = 0;
BidsClosed.$isPhantom = [];
/* ============================== BidsOpenForExisting =============================== */
function isBidsOpenForExisting(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::BidsOpenForExisting`; }
class BidsOpenForExisting {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidsOpenForExisting.$typeName;
        this.$isPhantom = BidsOpenForExisting.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidsOpenForExisting.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.auctionStartEpoch = fields.auctionStartEpoch;
        ;
        this.priceToBeAQueen = fields.priceToBeAQueen;
        ;
        this.curEpoch = fields.curEpoch;
        ;
        this.depositsOpenTill = fields.depositsOpenTill;
    }
    static reified() { return { typeName: BidsOpenForExisting.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidsOpenForExisting.$typeName, ...[]), typeArgs: [], isPhantom: BidsOpenForExisting.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidsOpenForExisting.fromFields(fields), fromFieldsWithTypes: (item) => BidsOpenForExisting.fromFieldsWithTypes(item), fromBcs: (data) => BidsOpenForExisting.fromBcs(data), bcs: BidsOpenForExisting.bcs, fromJSONField: (field) => BidsOpenForExisting.fromJSONField(field), fromJSON: (json) => BidsOpenForExisting.fromJSON(json), fromSuiParsedData: (content) => BidsOpenForExisting.fromSuiParsedData(content), fromSuiObjectData: (content) => BidsOpenForExisting.fromSuiObjectData(content), fetch: async (client, id) => BidsOpenForExisting.fetch(client, id), new: (fields) => { return new BidsOpenForExisting([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidsOpenForExisting.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidsOpenForExisting.reified()); }
    static get p() { return BidsOpenForExisting.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidsOpenForExisting", {
            auction_start_epoch: bcs_1.bcs.u64(), price_to_be_a_queen: bcs_1.bcs.u64(), cur_epoch: bcs_1.bcs.u64(), deposits_open_till: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BidsOpenForExisting.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_start_epoch), priceToBeAQueen: (0, reified_1.decodeFromFields)("u64", fields.price_to_be_a_queen), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch), depositsOpenTill: (0, reified_1.decodeFromFields)("u64", fields.deposits_open_till) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidsOpenForExisting(item.type)) {
            throw new Error("not a BidsOpenForExisting type");
        }
        return BidsOpenForExisting.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_start_epoch), priceToBeAQueen: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_to_be_a_queen), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch), depositsOpenTill: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.deposits_open_till) });
    }
    static fromBcs(data) { return BidsOpenForExisting.fromFields(BidsOpenForExisting.bcs.parse(data)); }
    toJSONField() {
        return {
            auctionStartEpoch: this.auctionStartEpoch.toString(), priceToBeAQueen: this.priceToBeAQueen.toString(), curEpoch: this.curEpoch.toString(), depositsOpenTill: this.depositsOpenTill.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidsOpenForExisting.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionStartEpoch), priceToBeAQueen: (0, reified_1.decodeFromJSONField)("u64", field.priceToBeAQueen), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch), depositsOpenTill: (0, reified_1.decodeFromJSONField)("u64", field.depositsOpenTill) }); }
    static fromJSON(json) {
        if (json.$typeName !== BidsOpenForExisting.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BidsOpenForExisting.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBidsOpenForExisting(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BidsOpenForExisting object`);
    } return BidsOpenForExisting.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidsOpenForExisting(data.bcs.type)) {
                throw new Error(`object at is not a BidsOpenForExisting object`);
            }
            return BidsOpenForExisting.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BidsOpenForExisting.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidsOpenForExisting object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidsOpenForExisting(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidsOpenForExisting object`);
        }
        return BidsOpenForExisting.fromSuiObjectData(res.data);
    }
}
exports.BidsOpenForExisting = BidsOpenForExisting;
BidsOpenForExisting.$typeName = `${PKG_V1}::queen_maker::BidsOpenForExisting`;
BidsOpenForExisting.$numTypeParams = 0;
BidsOpenForExisting.$isPhantom = [];
/* ============================== EnergyAndHealthIncremented =============================== */
function isEnergyAndHealthIncremented(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::EnergyAndHealthIncremented`; }
class EnergyAndHealthIncremented {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = EnergyAndHealthIncremented.$typeName;
        this.$isPhantom = EnergyAndHealthIncremented.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(EnergyAndHealthIncremented.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.auctionEpoch = fields.auctionEpoch;
        ;
        this.totalSuiBidded = fields.totalSuiBidded;
        ;
        this.energyYield = fields.energyYield;
        ;
        this.totalHiveEnergy = fields.totalHiveEnergy;
        ;
        this.totalHealth = fields.totalHealth;
    }
    static reified() { return { typeName: EnergyAndHealthIncremented.$typeName, fullTypeName: (0, util_1.composeSuiType)(EnergyAndHealthIncremented.$typeName, ...[]), typeArgs: [], isPhantom: EnergyAndHealthIncremented.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => EnergyAndHealthIncremented.fromFields(fields), fromFieldsWithTypes: (item) => EnergyAndHealthIncremented.fromFieldsWithTypes(item), fromBcs: (data) => EnergyAndHealthIncremented.fromBcs(data), bcs: EnergyAndHealthIncremented.bcs, fromJSONField: (field) => EnergyAndHealthIncremented.fromJSONField(field), fromJSON: (json) => EnergyAndHealthIncremented.fromJSON(json), fromSuiParsedData: (content) => EnergyAndHealthIncremented.fromSuiParsedData(content), fromSuiObjectData: (content) => EnergyAndHealthIncremented.fromSuiObjectData(content), fetch: async (client, id) => EnergyAndHealthIncremented.fetch(client, id), new: (fields) => { return new EnergyAndHealthIncremented([], fields); }, kind: "StructClassReified", }; }
    static get r() { return EnergyAndHealthIncremented.reified(); }
    static phantom() { return (0, reified_1.phantom)(EnergyAndHealthIncremented.reified()); }
    static get p() { return EnergyAndHealthIncremented.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("EnergyAndHealthIncremented", {
            auction_epoch: bcs_1.bcs.u64(), total_sui_bidded: bcs_1.bcs.u64(), energy_yield: bcs_1.bcs.u64(), total_hive_energy: bcs_1.bcs.u64(), total_health: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return EnergyAndHealthIncremented.reified().new({ auctionEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_epoch), totalSuiBidded: (0, reified_1.decodeFromFields)("u64", fields.total_sui_bidded), energyYield: (0, reified_1.decodeFromFields)("u64", fields.energy_yield), totalHiveEnergy: (0, reified_1.decodeFromFields)("u64", fields.total_hive_energy), totalHealth: (0, reified_1.decodeFromFields)("u64", fields.total_health) }); }
    static fromFieldsWithTypes(item) {
        if (!isEnergyAndHealthIncremented(item.type)) {
            throw new Error("not a EnergyAndHealthIncremented type");
        }
        return EnergyAndHealthIncremented.reified().new({ auctionEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_epoch), totalSuiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_sui_bidded), energyYield: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy_yield), totalHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_hive_energy), totalHealth: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_health) });
    }
    static fromBcs(data) { return EnergyAndHealthIncremented.fromFields(EnergyAndHealthIncremented.bcs.parse(data)); }
    toJSONField() {
        return {
            auctionEpoch: this.auctionEpoch.toString(), totalSuiBidded: this.totalSuiBidded.toString(), energyYield: this.energyYield.toString(), totalHiveEnergy: this.totalHiveEnergy.toString(), totalHealth: this.totalHealth.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return EnergyAndHealthIncremented.reified().new({ auctionEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionEpoch), totalSuiBidded: (0, reified_1.decodeFromJSONField)("u64", field.totalSuiBidded), energyYield: (0, reified_1.decodeFromJSONField)("u64", field.energyYield), totalHiveEnergy: (0, reified_1.decodeFromJSONField)("u64", field.totalHiveEnergy), totalHealth: (0, reified_1.decodeFromJSONField)("u64", field.totalHealth) }); }
    static fromJSON(json) {
        if (json.$typeName !== EnergyAndHealthIncremented.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return EnergyAndHealthIncremented.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEnergyAndHealthIncremented(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a EnergyAndHealthIncremented object`);
    } return EnergyAndHealthIncremented.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isEnergyAndHealthIncremented(data.bcs.type)) {
                throw new Error(`object at is not a EnergyAndHealthIncremented object`);
            }
            return EnergyAndHealthIncremented.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return EnergyAndHealthIncremented.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching EnergyAndHealthIncremented object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEnergyAndHealthIncremented(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a EnergyAndHealthIncremented object`);
        }
        return EnergyAndHealthIncremented.fromSuiObjectData(res.data);
    }
}
exports.EnergyAndHealthIncremented = EnergyAndHealthIncremented;
EnergyAndHealthIncremented.$typeName = `${PKG_V1}::queen_maker::EnergyAndHealthIncremented`;
EnergyAndHealthIncremented.$numTypeParams = 0;
EnergyAndHealthIncremented.$isPhantom = [];
/* ============================== LeadingDragonBee =============================== */
function isLeadingDragonBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::LeadingDragonBee`; }
class LeadingDragonBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LeadingDragonBee.$typeName;
        this.$isPhantom = LeadingDragonBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LeadingDragonBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.familyType = fields.familyType;
        ;
        this.version = fields.version;
        ;
        this.bidAmount = fields.bidAmount;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.username = fields.username;
    }
    static reified() { return { typeName: LeadingDragonBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(LeadingDragonBee.$typeName, ...[]), typeArgs: [], isPhantom: LeadingDragonBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LeadingDragonBee.fromFields(fields), fromFieldsWithTypes: (item) => LeadingDragonBee.fromFieldsWithTypes(item), fromBcs: (data) => LeadingDragonBee.fromBcs(data), bcs: LeadingDragonBee.bcs, fromJSONField: (field) => LeadingDragonBee.fromJSONField(field), fromJSON: (json) => LeadingDragonBee.fromJSON(json), fromSuiParsedData: (content) => LeadingDragonBee.fromSuiParsedData(content), fromSuiObjectData: (content) => LeadingDragonBee.fromSuiObjectData(content), fetch: async (client, id) => LeadingDragonBee.fetch(client, id), new: (fields) => { return new LeadingDragonBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LeadingDragonBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(LeadingDragonBee.reified()); }
    static get p() { return LeadingDragonBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LeadingDragonBee", {
            family_type: bcs_1.bcs.u64(), version: bcs_1.bcs.u64(), bid_amount: bcs_1.bcs.u64(), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return LeadingDragonBee.reified().new({ familyType: (0, reified_1.decodeFromFields)("u64", fields.family_type), version: (0, reified_1.decodeFromFields)("u64", fields.version), bidAmount: (0, reified_1.decodeFromFields)("u64", fields.bid_amount), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username) }); }
    static fromFieldsWithTypes(item) {
        if (!isLeadingDragonBee(item.type)) {
            throw new Error("not a LeadingDragonBee type");
        }
        return LeadingDragonBee.reified().new({ familyType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.family_type), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_amount), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username) });
    }
    static fromBcs(data) { return LeadingDragonBee.fromFields(LeadingDragonBee.bcs.parse(data)); }
    toJSONField() {
        return {
            familyType: this.familyType.toString(), version: this.version.toString(), bidAmount: this.bidAmount.toString(), trainerAddr: this.trainerAddr, username: this.username,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LeadingDragonBee.reified().new({ familyType: (0, reified_1.decodeFromJSONField)("u64", field.familyType), version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidAmount: (0, reified_1.decodeFromJSONField)("u64", field.bidAmount), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username) }); }
    static fromJSON(json) {
        if (json.$typeName !== LeadingDragonBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LeadingDragonBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLeadingDragonBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LeadingDragonBee object`);
    } return LeadingDragonBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLeadingDragonBee(data.bcs.type)) {
                throw new Error(`object at is not a LeadingDragonBee object`);
            }
            return LeadingDragonBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LeadingDragonBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LeadingDragonBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLeadingDragonBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LeadingDragonBee object`);
        }
        return LeadingDragonBee.fromSuiObjectData(res.data);
    }
}
exports.LeadingDragonBee = LeadingDragonBee;
LeadingDragonBee.$typeName = `${PKG_V1}::queen_maker::LeadingDragonBee`;
LeadingDragonBee.$numTypeParams = 0;
LeadingDragonBee.$isPhantom = [];
/* ============================== LeadingDragonBeeUpdated =============================== */
function isLeadingDragonBeeUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::LeadingDragonBeeUpdated`; }
class LeadingDragonBeeUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LeadingDragonBeeUpdated.$typeName;
        this.$isPhantom = LeadingDragonBeeUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LeadingDragonBeeUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.auctionStartEpoch = fields.auctionStartEpoch;
        ;
        this.familyType = fields.familyType;
        ;
        this.version = fields.version;
        ;
        this.bidAmount = fields.bidAmount;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.username = fields.username;
    }
    static reified() { return { typeName: LeadingDragonBeeUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(LeadingDragonBeeUpdated.$typeName, ...[]), typeArgs: [], isPhantom: LeadingDragonBeeUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LeadingDragonBeeUpdated.fromFields(fields), fromFieldsWithTypes: (item) => LeadingDragonBeeUpdated.fromFieldsWithTypes(item), fromBcs: (data) => LeadingDragonBeeUpdated.fromBcs(data), bcs: LeadingDragonBeeUpdated.bcs, fromJSONField: (field) => LeadingDragonBeeUpdated.fromJSONField(field), fromJSON: (json) => LeadingDragonBeeUpdated.fromJSON(json), fromSuiParsedData: (content) => LeadingDragonBeeUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => LeadingDragonBeeUpdated.fromSuiObjectData(content), fetch: async (client, id) => LeadingDragonBeeUpdated.fetch(client, id), new: (fields) => { return new LeadingDragonBeeUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LeadingDragonBeeUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(LeadingDragonBeeUpdated.reified()); }
    static get p() { return LeadingDragonBeeUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LeadingDragonBeeUpdated", {
            auction_start_epoch: bcs_1.bcs.u64(), family_type: bcs_1.bcs.u64(), version: bcs_1.bcs.u64(), bid_amount: bcs_1.bcs.u64(), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return LeadingDragonBeeUpdated.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_start_epoch), familyType: (0, reified_1.decodeFromFields)("u64", fields.family_type), version: (0, reified_1.decodeFromFields)("u64", fields.version), bidAmount: (0, reified_1.decodeFromFields)("u64", fields.bid_amount), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username) }); }
    static fromFieldsWithTypes(item) {
        if (!isLeadingDragonBeeUpdated(item.type)) {
            throw new Error("not a LeadingDragonBeeUpdated type");
        }
        return LeadingDragonBeeUpdated.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_start_epoch), familyType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.family_type), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), bidAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_amount), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username) });
    }
    static fromBcs(data) { return LeadingDragonBeeUpdated.fromFields(LeadingDragonBeeUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            auctionStartEpoch: this.auctionStartEpoch.toString(), familyType: this.familyType.toString(), version: this.version.toString(), bidAmount: this.bidAmount.toString(), trainerAddr: this.trainerAddr, username: this.username,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LeadingDragonBeeUpdated.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionStartEpoch), familyType: (0, reified_1.decodeFromJSONField)("u64", field.familyType), version: (0, reified_1.decodeFromJSONField)("u64", field.version), bidAmount: (0, reified_1.decodeFromJSONField)("u64", field.bidAmount), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username) }); }
    static fromJSON(json) {
        if (json.$typeName !== LeadingDragonBeeUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LeadingDragonBeeUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLeadingDragonBeeUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LeadingDragonBeeUpdated object`);
    } return LeadingDragonBeeUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLeadingDragonBeeUpdated(data.bcs.type)) {
                throw new Error(`object at is not a LeadingDragonBeeUpdated object`);
            }
            return LeadingDragonBeeUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LeadingDragonBeeUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LeadingDragonBeeUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLeadingDragonBeeUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LeadingDragonBeeUpdated object`);
        }
        return LeadingDragonBeeUpdated.fromSuiObjectData(res.data);
    }
}
exports.LeadingDragonBeeUpdated = LeadingDragonBeeUpdated;
LeadingDragonBeeUpdated.$typeName = `${PKG_V1}::queen_maker::LeadingDragonBeeUpdated`;
LeadingDragonBeeUpdated.$numTypeParams = 0;
LeadingDragonBeeUpdated.$isPhantom = [];
/* ============================== MinBidLimitUpdated =============================== */
function isMinBidLimitUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::MinBidLimitUpdated`; }
class MinBidLimitUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MinBidLimitUpdated.$typeName;
        this.$isPhantom = MinBidLimitUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MinBidLimitUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.auctionStartEpoch = fields.auctionStartEpoch;
        ;
        this.priceToBeAQueen = fields.priceToBeAQueen;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: MinBidLimitUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(MinBidLimitUpdated.$typeName, ...[]), typeArgs: [], isPhantom: MinBidLimitUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MinBidLimitUpdated.fromFields(fields), fromFieldsWithTypes: (item) => MinBidLimitUpdated.fromFieldsWithTypes(item), fromBcs: (data) => MinBidLimitUpdated.fromBcs(data), bcs: MinBidLimitUpdated.bcs, fromJSONField: (field) => MinBidLimitUpdated.fromJSONField(field), fromJSON: (json) => MinBidLimitUpdated.fromJSON(json), fromSuiParsedData: (content) => MinBidLimitUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => MinBidLimitUpdated.fromSuiObjectData(content), fetch: async (client, id) => MinBidLimitUpdated.fetch(client, id), new: (fields) => { return new MinBidLimitUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MinBidLimitUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(MinBidLimitUpdated.reified()); }
    static get p() { return MinBidLimitUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MinBidLimitUpdated", {
            auction_start_epoch: bcs_1.bcs.u64(), price_to_be_a_queen: bcs_1.bcs.u64(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MinBidLimitUpdated.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_start_epoch), priceToBeAQueen: (0, reified_1.decodeFromFields)("u64", fields.price_to_be_a_queen), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isMinBidLimitUpdated(item.type)) {
            throw new Error("not a MinBidLimitUpdated type");
        }
        return MinBidLimitUpdated.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_start_epoch), priceToBeAQueen: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_to_be_a_queen), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return MinBidLimitUpdated.fromFields(MinBidLimitUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            auctionStartEpoch: this.auctionStartEpoch.toString(), priceToBeAQueen: this.priceToBeAQueen.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MinBidLimitUpdated.reified().new({ auctionStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionStartEpoch), priceToBeAQueen: (0, reified_1.decodeFromJSONField)("u64", field.priceToBeAQueen), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== MinBidLimitUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MinBidLimitUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMinBidLimitUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MinBidLimitUpdated object`);
    } return MinBidLimitUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMinBidLimitUpdated(data.bcs.type)) {
                throw new Error(`object at is not a MinBidLimitUpdated object`);
            }
            return MinBidLimitUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MinBidLimitUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MinBidLimitUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMinBidLimitUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MinBidLimitUpdated object`);
        }
        return MinBidLimitUpdated.fromSuiObjectData(res.data);
    }
}
exports.MinBidLimitUpdated = MinBidLimitUpdated;
MinBidLimitUpdated.$typeName = `${PKG_V1}::queen_maker::MinBidLimitUpdated`;
MinBidLimitUpdated.$numTypeParams = 0;
MinBidLimitUpdated.$isPhantom = [];
/* ============================== NewBeeAddedToCompetition =============================== */
function isNewBeeAddedToCompetition(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::NewBeeAddedToCompetition`; }
class NewBeeAddedToCompetition {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewBeeAddedToCompetition.$typeName;
        this.$isPhantom = NewBeeAddedToCompetition.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewBeeAddedToCompetition.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.username = fields.username;
        ;
        this.version = fields.version;
        ;
        this.familyType = fields.familyType;
        ;
        this.bidAmt = fields.bidAmt;
        ;
        this.taxAmt = fields.taxAmt;
        ;
        this.auctionStartAt = fields.auctionStartAt;
    }
    static reified() { return { typeName: NewBeeAddedToCompetition.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewBeeAddedToCompetition.$typeName, ...[]), typeArgs: [], isPhantom: NewBeeAddedToCompetition.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewBeeAddedToCompetition.fromFields(fields), fromFieldsWithTypes: (item) => NewBeeAddedToCompetition.fromFieldsWithTypes(item), fromBcs: (data) => NewBeeAddedToCompetition.fromBcs(data), bcs: NewBeeAddedToCompetition.bcs, fromJSONField: (field) => NewBeeAddedToCompetition.fromJSONField(field), fromJSON: (json) => NewBeeAddedToCompetition.fromJSON(json), fromSuiParsedData: (content) => NewBeeAddedToCompetition.fromSuiParsedData(content), fromSuiObjectData: (content) => NewBeeAddedToCompetition.fromSuiObjectData(content), fetch: async (client, id) => NewBeeAddedToCompetition.fetch(client, id), new: (fields) => { return new NewBeeAddedToCompetition([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewBeeAddedToCompetition.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewBeeAddedToCompetition.reified()); }
    static get p() { return NewBeeAddedToCompetition.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewBeeAddedToCompetition", {
            trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, version: bcs_1.bcs.u64(), family_type: bcs_1.bcs.u64(), bid_amt: bcs_1.bcs.u64(), tax_amt: bcs_1.bcs.u64(), auction_start_at: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewBeeAddedToCompetition.reified().new({ trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), version: (0, reified_1.decodeFromFields)("u64", fields.version), familyType: (0, reified_1.decodeFromFields)("u64", fields.family_type), bidAmt: (0, reified_1.decodeFromFields)("u64", fields.bid_amt), taxAmt: (0, reified_1.decodeFromFields)("u64", fields.tax_amt), auctionStartAt: (0, reified_1.decodeFromFields)("u64", fields.auction_start_at) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewBeeAddedToCompetition(item.type)) {
            throw new Error("not a NewBeeAddedToCompetition type");
        }
        return NewBeeAddedToCompetition.reified().new({ trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), familyType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.family_type), bidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_amt), taxAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tax_amt), auctionStartAt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_start_at) });
    }
    static fromBcs(data) { return NewBeeAddedToCompetition.fromFields(NewBeeAddedToCompetition.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddr: this.trainerAddr, username: this.username, version: this.version.toString(), familyType: this.familyType.toString(), bidAmt: this.bidAmt.toString(), taxAmt: this.taxAmt.toString(), auctionStartAt: this.auctionStartAt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewBeeAddedToCompetition.reified().new({ trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), version: (0, reified_1.decodeFromJSONField)("u64", field.version), familyType: (0, reified_1.decodeFromJSONField)("u64", field.familyType), bidAmt: (0, reified_1.decodeFromJSONField)("u64", field.bidAmt), taxAmt: (0, reified_1.decodeFromJSONField)("u64", field.taxAmt), auctionStartAt: (0, reified_1.decodeFromJSONField)("u64", field.auctionStartAt) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewBeeAddedToCompetition.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewBeeAddedToCompetition.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewBeeAddedToCompetition(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewBeeAddedToCompetition object`);
    } return NewBeeAddedToCompetition.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewBeeAddedToCompetition(data.bcs.type)) {
                throw new Error(`object at is not a NewBeeAddedToCompetition object`);
            }
            return NewBeeAddedToCompetition.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewBeeAddedToCompetition.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewBeeAddedToCompetition object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewBeeAddedToCompetition(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewBeeAddedToCompetition object`);
        }
        return NewBeeAddedToCompetition.fromSuiObjectData(res.data);
    }
}
exports.NewBeeAddedToCompetition = NewBeeAddedToCompetition;
NewBeeAddedToCompetition.$typeName = `${PKG_V1}::queen_maker::NewBeeAddedToCompetition`;
NewBeeAddedToCompetition.$numTypeParams = 0;
NewBeeAddedToCompetition.$isPhantom = [];
/* ============================== ParticipatingBees =============================== */
function isParticipatingBees(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::ParticipatingBees`; }
class ParticipatingBees {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ParticipatingBees.$typeName;
        this.$isPhantom = ParticipatingBees.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ParticipatingBees.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.userParticipation = fields.userParticipation;
    }
    static reified() { return { typeName: ParticipatingBees.$typeName, fullTypeName: (0, util_1.composeSuiType)(ParticipatingBees.$typeName, ...[]), typeArgs: [], isPhantom: ParticipatingBees.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ParticipatingBees.fromFields(fields), fromFieldsWithTypes: (item) => ParticipatingBees.fromFieldsWithTypes(item), fromBcs: (data) => ParticipatingBees.fromBcs(data), bcs: ParticipatingBees.bcs, fromJSONField: (field) => ParticipatingBees.fromJSONField(field), fromJSON: (json) => ParticipatingBees.fromJSON(json), fromSuiParsedData: (content) => ParticipatingBees.fromSuiParsedData(content), fromSuiObjectData: (content) => ParticipatingBees.fromSuiObjectData(content), fetch: async (client, id) => ParticipatingBees.fetch(client, id), new: (fields) => { return new ParticipatingBees([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ParticipatingBees.reified(); }
    static phantom() { return (0, reified_1.phantom)(ParticipatingBees.reified()); }
    static get p() { return ParticipatingBees.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ParticipatingBees", {
            user_participation: structs_4.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }))
        });
    }
    ;
    static fromFields(fields) { return ParticipatingBees.reified().new({ userParticipation: (0, reified_1.decodeFromFields)(structs_4.LinkedTable.reified("address", reified.phantom(ParticipationPosition.reified())), fields.user_participation) }); }
    static fromFieldsWithTypes(item) {
        if (!isParticipatingBees(item.type)) {
            throw new Error("not a ParticipatingBees type");
        }
        return ParticipatingBees.reified().new({ userParticipation: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.LinkedTable.reified("address", reified.phantom(ParticipationPosition.reified())), item.fields.user_participation) });
    }
    static fromBcs(data) { return ParticipatingBees.fromFields(ParticipatingBees.bcs.parse(data)); }
    toJSONField() {
        return {
            userParticipation: this.userParticipation.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ParticipatingBees.reified().new({ userParticipation: (0, reified_1.decodeFromJSONField)(structs_4.LinkedTable.reified("address", reified.phantom(ParticipationPosition.reified())), field.userParticipation) }); }
    static fromJSON(json) {
        if (json.$typeName !== ParticipatingBees.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ParticipatingBees.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isParticipatingBees(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ParticipatingBees object`);
    } return ParticipatingBees.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isParticipatingBees(data.bcs.type)) {
                throw new Error(`object at is not a ParticipatingBees object`);
            }
            return ParticipatingBees.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ParticipatingBees.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ParticipatingBees object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isParticipatingBees(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ParticipatingBees object`);
        }
        return ParticipatingBees.fromSuiObjectData(res.data);
    }
}
exports.ParticipatingBees = ParticipatingBees;
ParticipatingBees.$typeName = `${PKG_V1}::queen_maker::ParticipatingBees`;
ParticipatingBees.$numTypeParams = 0;
ParticipatingBees.$isPhantom = [];
/* ============================== ParticipationPosition =============================== */
function isParticipationPosition(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::ParticipationPosition`; }
class ParticipationPosition {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ParticipationPosition.$typeName;
        this.$isPhantom = ParticipationPosition.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ParticipationPosition.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.familyType = fields.familyType;
        ;
        this.mysticalBee = fields.mysticalBee;
        ;
        this.beeVersion = fields.beeVersion;
        ;
        this.auctionStartAt = fields.auctionStartAt;
        ;
        this.username = fields.username;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.suiBidded = fields.suiBidded;
        ;
        this.tax = fields.tax;
        ;
        this.flag = fields.flag;
    }
    static reified() { return { typeName: ParticipationPosition.$typeName, fullTypeName: (0, util_1.composeSuiType)(ParticipationPosition.$typeName, ...[]), typeArgs: [], isPhantom: ParticipationPosition.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ParticipationPosition.fromFields(fields), fromFieldsWithTypes: (item) => ParticipationPosition.fromFieldsWithTypes(item), fromBcs: (data) => ParticipationPosition.fromBcs(data), bcs: ParticipationPosition.bcs, fromJSONField: (field) => ParticipationPosition.fromJSONField(field), fromJSON: (json) => ParticipationPosition.fromJSON(json), fromSuiParsedData: (content) => ParticipationPosition.fromSuiParsedData(content), fromSuiObjectData: (content) => ParticipationPosition.fromSuiObjectData(content), fetch: async (client, id) => ParticipationPosition.fetch(client, id), new: (fields) => { return new ParticipationPosition([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ParticipationPosition.reified(); }
    static phantom() { return (0, reified_1.phantom)(ParticipationPosition.reified()); }
    static get p() { return ParticipationPosition.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ParticipationPosition", {
            family_type: bcs_1.bcs.u64(), mystical_bee: structs_7.MysticalBee.bcs, bee_version: bcs_1.bcs.u64(), auction_start_at: bcs_1.bcs.u64(), username: structs_1.String.bcs, trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), sui_bidded: bcs_1.bcs.u64(), tax: bcs_1.bcs.u64(), flag: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return ParticipationPosition.reified().new({ familyType: (0, reified_1.decodeFromFields)("u64", fields.family_type), mysticalBee: (0, reified_1.decodeFromFields)(structs_7.MysticalBee.reified(), fields.mystical_bee), beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), auctionStartAt: (0, reified_1.decodeFromFields)("u64", fields.auction_start_at), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), suiBidded: (0, reified_1.decodeFromFields)("u64", fields.sui_bidded), tax: (0, reified_1.decodeFromFields)("u64", fields.tax), flag: (0, reified_1.decodeFromFields)("bool", fields.flag) }); }
    static fromFieldsWithTypes(item) {
        if (!isParticipationPosition(item.type)) {
            throw new Error("not a ParticipationPosition type");
        }
        return ParticipationPosition.reified().new({ familyType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.family_type), mysticalBee: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.MysticalBee.reified(), item.fields.mystical_bee), beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), auctionStartAt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_start_at), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), suiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_bidded), tax: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tax), flag: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.flag) });
    }
    static fromBcs(data) { return ParticipationPosition.fromFields(ParticipationPosition.bcs.parse(data)); }
    toJSONField() {
        return {
            familyType: this.familyType.toString(), mysticalBee: this.mysticalBee.toJSONField(), beeVersion: this.beeVersion.toString(), auctionStartAt: this.auctionStartAt.toString(), username: this.username, trainerAddr: this.trainerAddr, suiBidded: this.suiBidded.toString(), tax: this.tax.toString(), flag: this.flag,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ParticipationPosition.reified().new({ familyType: (0, reified_1.decodeFromJSONField)("u64", field.familyType), mysticalBee: (0, reified_1.decodeFromJSONField)(structs_7.MysticalBee.reified(), field.mysticalBee), beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), auctionStartAt: (0, reified_1.decodeFromJSONField)("u64", field.auctionStartAt), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), suiBidded: (0, reified_1.decodeFromJSONField)("u64", field.suiBidded), tax: (0, reified_1.decodeFromJSONField)("u64", field.tax), flag: (0, reified_1.decodeFromJSONField)("bool", field.flag) }); }
    static fromJSON(json) {
        if (json.$typeName !== ParticipationPosition.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ParticipationPosition.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isParticipationPosition(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ParticipationPosition object`);
    } return ParticipationPosition.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isParticipationPosition(data.bcs.type)) {
                throw new Error(`object at is not a ParticipationPosition object`);
            }
            return ParticipationPosition.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ParticipationPosition.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ParticipationPosition object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isParticipationPosition(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ParticipationPosition object`);
        }
        return ParticipationPosition.fromSuiObjectData(res.data);
    }
}
exports.ParticipationPosition = ParticipationPosition;
ParticipationPosition.$typeName = `${PKG_V1}::queen_maker::ParticipationPosition`;
ParticipationPosition.$numTypeParams = 0;
ParticipationPosition.$isPhantom = [];
/* ============================== QueenClaimedByItsOwner =============================== */
function isQueenClaimedByItsOwner(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::QueenClaimedByItsOwner`; }
class QueenClaimedByItsOwner {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = QueenClaimedByItsOwner.$typeName;
        this.$isPhantom = QueenClaimedByItsOwner.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(QueenClaimedByItsOwner.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.version = fields.version;
        ;
        this.suiBidded = fields.suiBidded;
        ;
        this.auctionEpoch = fields.auctionEpoch;
    }
    static reified() { return { typeName: QueenClaimedByItsOwner.$typeName, fullTypeName: (0, util_1.composeSuiType)(QueenClaimedByItsOwner.$typeName, ...[]), typeArgs: [], isPhantom: QueenClaimedByItsOwner.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => QueenClaimedByItsOwner.fromFields(fields), fromFieldsWithTypes: (item) => QueenClaimedByItsOwner.fromFieldsWithTypes(item), fromBcs: (data) => QueenClaimedByItsOwner.fromBcs(data), bcs: QueenClaimedByItsOwner.bcs, fromJSONField: (field) => QueenClaimedByItsOwner.fromJSONField(field), fromJSON: (json) => QueenClaimedByItsOwner.fromJSON(json), fromSuiParsedData: (content) => QueenClaimedByItsOwner.fromSuiParsedData(content), fromSuiObjectData: (content) => QueenClaimedByItsOwner.fromSuiObjectData(content), fetch: async (client, id) => QueenClaimedByItsOwner.fetch(client, id), new: (fields) => { return new QueenClaimedByItsOwner([], fields); }, kind: "StructClassReified", }; }
    static get r() { return QueenClaimedByItsOwner.reified(); }
    static phantom() { return (0, reified_1.phantom)(QueenClaimedByItsOwner.reified()); }
    static get p() { return QueenClaimedByItsOwner.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("QueenClaimedByItsOwner", {
            trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), sui_bidded: bcs_1.bcs.u64(), auction_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return QueenClaimedByItsOwner.reified().new({ trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), version: (0, reified_1.decodeFromFields)("u64", fields.version), suiBidded: (0, reified_1.decodeFromFields)("u64", fields.sui_bidded), auctionEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isQueenClaimedByItsOwner(item.type)) {
            throw new Error("not a QueenClaimedByItsOwner type");
        }
        return QueenClaimedByItsOwner.reified().new({ trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), suiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_bidded), auctionEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_epoch) });
    }
    static fromBcs(data) { return QueenClaimedByItsOwner.fromFields(QueenClaimedByItsOwner.bcs.parse(data)); }
    toJSONField() {
        return {
            trainerAddr: this.trainerAddr, version: this.version.toString(), suiBidded: this.suiBidded.toString(), auctionEpoch: this.auctionEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return QueenClaimedByItsOwner.reified().new({ trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), version: (0, reified_1.decodeFromJSONField)("u64", field.version), suiBidded: (0, reified_1.decodeFromJSONField)("u64", field.suiBidded), auctionEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== QueenClaimedByItsOwner.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return QueenClaimedByItsOwner.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isQueenClaimedByItsOwner(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a QueenClaimedByItsOwner object`);
    } return QueenClaimedByItsOwner.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQueenClaimedByItsOwner(data.bcs.type)) {
                throw new Error(`object at is not a QueenClaimedByItsOwner object`);
            }
            return QueenClaimedByItsOwner.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return QueenClaimedByItsOwner.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching QueenClaimedByItsOwner object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isQueenClaimedByItsOwner(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a QueenClaimedByItsOwner object`);
        }
        return QueenClaimedByItsOwner.fromSuiObjectData(res.data);
    }
}
exports.QueenClaimedByItsOwner = QueenClaimedByItsOwner;
QueenClaimedByItsOwner.$typeName = `${PKG_V1}::queen_maker::QueenClaimedByItsOwner`;
QueenClaimedByItsOwner.$numTypeParams = 0;
QueenClaimedByItsOwner.$isPhantom = [];
/* ============================== QueenCompetitionOver =============================== */
function isQueenCompetitionOver(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::QueenCompetitionOver`; }
class QueenCompetitionOver {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = QueenCompetitionOver.$typeName;
        this.$isPhantom = QueenCompetitionOver.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(QueenCompetitionOver.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.startedAtEpoch = fields.startedAtEpoch;
        ;
        this.nextEventFrom = fields.nextEventFrom;
        ;
        this.hiveBurntAmt = fields.hiveBurntAmt;
        ;
        this.totalSuiBidded = fields.totalSuiBidded;
        ;
        this.energyFromQueens = fields.energyFromQueens;
        ;
        this.communityEnergy = fields.communityEnergy;
        ;
        this.becomingQueenExpensiveBy = fields.becomingQueenExpensiveBy;
        ;
        this.priceToBeAQueen = fields.priceToBeAQueen;
    }
    static reified() { return { typeName: QueenCompetitionOver.$typeName, fullTypeName: (0, util_1.composeSuiType)(QueenCompetitionOver.$typeName, ...[]), typeArgs: [], isPhantom: QueenCompetitionOver.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => QueenCompetitionOver.fromFields(fields), fromFieldsWithTypes: (item) => QueenCompetitionOver.fromFieldsWithTypes(item), fromBcs: (data) => QueenCompetitionOver.fromBcs(data), bcs: QueenCompetitionOver.bcs, fromJSONField: (field) => QueenCompetitionOver.fromJSONField(field), fromJSON: (json) => QueenCompetitionOver.fromJSON(json), fromSuiParsedData: (content) => QueenCompetitionOver.fromSuiParsedData(content), fromSuiObjectData: (content) => QueenCompetitionOver.fromSuiObjectData(content), fetch: async (client, id) => QueenCompetitionOver.fetch(client, id), new: (fields) => { return new QueenCompetitionOver([], fields); }, kind: "StructClassReified", }; }
    static get r() { return QueenCompetitionOver.reified(); }
    static phantom() { return (0, reified_1.phantom)(QueenCompetitionOver.reified()); }
    static get p() { return QueenCompetitionOver.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("QueenCompetitionOver", {
            started_at_epoch: bcs_1.bcs.u64(), next_event_from: bcs_1.bcs.u64(), hive_burnt_amt: bcs_1.bcs.u64(), total_sui_bidded: bcs_1.bcs.u64(), energy_from_queens: bcs_1.bcs.u64(), community_energy: bcs_1.bcs.u64(), becoming_queen_expensive_by: bcs_1.bcs.u64(), price_to_be_a_queen: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return QueenCompetitionOver.reified().new({ startedAtEpoch: (0, reified_1.decodeFromFields)("u64", fields.started_at_epoch), nextEventFrom: (0, reified_1.decodeFromFields)("u64", fields.next_event_from), hiveBurntAmt: (0, reified_1.decodeFromFields)("u64", fields.hive_burnt_amt), totalSuiBidded: (0, reified_1.decodeFromFields)("u64", fields.total_sui_bidded), energyFromQueens: (0, reified_1.decodeFromFields)("u64", fields.energy_from_queens), communityEnergy: (0, reified_1.decodeFromFields)("u64", fields.community_energy), becomingQueenExpensiveBy: (0, reified_1.decodeFromFields)("u64", fields.becoming_queen_expensive_by), priceToBeAQueen: (0, reified_1.decodeFromFields)("u64", fields.price_to_be_a_queen) }); }
    static fromFieldsWithTypes(item) {
        if (!isQueenCompetitionOver(item.type)) {
            throw new Error("not a QueenCompetitionOver type");
        }
        return QueenCompetitionOver.reified().new({ startedAtEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.started_at_epoch), nextEventFrom: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_event_from), hiveBurntAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_burnt_amt), totalSuiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_sui_bidded), energyFromQueens: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.energy_from_queens), communityEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.community_energy), becomingQueenExpensiveBy: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.becoming_queen_expensive_by), priceToBeAQueen: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price_to_be_a_queen) });
    }
    static fromBcs(data) { return QueenCompetitionOver.fromFields(QueenCompetitionOver.bcs.parse(data)); }
    toJSONField() {
        return {
            startedAtEpoch: this.startedAtEpoch.toString(), nextEventFrom: this.nextEventFrom.toString(), hiveBurntAmt: this.hiveBurntAmt.toString(), totalSuiBidded: this.totalSuiBidded.toString(), energyFromQueens: this.energyFromQueens.toString(), communityEnergy: this.communityEnergy.toString(), becomingQueenExpensiveBy: this.becomingQueenExpensiveBy.toString(), priceToBeAQueen: this.priceToBeAQueen.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return QueenCompetitionOver.reified().new({ startedAtEpoch: (0, reified_1.decodeFromJSONField)("u64", field.startedAtEpoch), nextEventFrom: (0, reified_1.decodeFromJSONField)("u64", field.nextEventFrom), hiveBurntAmt: (0, reified_1.decodeFromJSONField)("u64", field.hiveBurntAmt), totalSuiBidded: (0, reified_1.decodeFromJSONField)("u64", field.totalSuiBidded), energyFromQueens: (0, reified_1.decodeFromJSONField)("u64", field.energyFromQueens), communityEnergy: (0, reified_1.decodeFromJSONField)("u64", field.communityEnergy), becomingQueenExpensiveBy: (0, reified_1.decodeFromJSONField)("u64", field.becomingQueenExpensiveBy), priceToBeAQueen: (0, reified_1.decodeFromJSONField)("u64", field.priceToBeAQueen) }); }
    static fromJSON(json) {
        if (json.$typeName !== QueenCompetitionOver.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return QueenCompetitionOver.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isQueenCompetitionOver(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a QueenCompetitionOver object`);
    } return QueenCompetitionOver.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQueenCompetitionOver(data.bcs.type)) {
                throw new Error(`object at is not a QueenCompetitionOver object`);
            }
            return QueenCompetitionOver.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return QueenCompetitionOver.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching QueenCompetitionOver object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isQueenCompetitionOver(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a QueenCompetitionOver object`);
        }
        return QueenCompetitionOver.fromSuiObjectData(res.data);
    }
}
exports.QueenCompetitionOver = QueenCompetitionOver;
QueenCompetitionOver.$typeName = `${PKG_V1}::queen_maker::QueenCompetitionOver`;
QueenCompetitionOver.$numTypeParams = 0;
QueenCompetitionOver.$isPhantom = [];
/* ============================== QueenCustody =============================== */
function isQueenCustody(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::QueenCustody`; }
class QueenCustody {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = QueenCustody.$typeName;
        this.$isPhantom = QueenCustody.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(QueenCustody.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.familyType = fields.familyType;
        ;
        this.mysticalBee = fields.mysticalBee;
        ;
        this.suiBidded = fields.suiBidded;
        ;
        this.auctionEpoch = fields.auctionEpoch;
    }
    static reified() { return { typeName: QueenCustody.$typeName, fullTypeName: (0, util_1.composeSuiType)(QueenCustody.$typeName, ...[]), typeArgs: [], isPhantom: QueenCustody.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => QueenCustody.fromFields(fields), fromFieldsWithTypes: (item) => QueenCustody.fromFieldsWithTypes(item), fromBcs: (data) => QueenCustody.fromBcs(data), bcs: QueenCustody.bcs, fromJSONField: (field) => QueenCustody.fromJSONField(field), fromJSON: (json) => QueenCustody.fromJSON(json), fromSuiParsedData: (content) => QueenCustody.fromSuiParsedData(content), fromSuiObjectData: (content) => QueenCustody.fromSuiObjectData(content), fetch: async (client, id) => QueenCustody.fetch(client, id), new: (fields) => { return new QueenCustody([], fields); }, kind: "StructClassReified", }; }
    static get r() { return QueenCustody.reified(); }
    static phantom() { return (0, reified_1.phantom)(QueenCustody.reified()); }
    static get p() { return QueenCustody.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("QueenCustody", {
            family_type: bcs_1.bcs.u64(), mystical_bee: structs_7.MysticalBee.bcs, sui_bidded: bcs_1.bcs.u64(), auction_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return QueenCustody.reified().new({ familyType: (0, reified_1.decodeFromFields)("u64", fields.family_type), mysticalBee: (0, reified_1.decodeFromFields)(structs_7.MysticalBee.reified(), fields.mystical_bee), suiBidded: (0, reified_1.decodeFromFields)("u64", fields.sui_bidded), auctionEpoch: (0, reified_1.decodeFromFields)("u64", fields.auction_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isQueenCustody(item.type)) {
            throw new Error("not a QueenCustody type");
        }
        return QueenCustody.reified().new({ familyType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.family_type), mysticalBee: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.MysticalBee.reified(), item.fields.mystical_bee), suiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_bidded), auctionEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_epoch) });
    }
    static fromBcs(data) { return QueenCustody.fromFields(QueenCustody.bcs.parse(data)); }
    toJSONField() {
        return {
            familyType: this.familyType.toString(), mysticalBee: this.mysticalBee.toJSONField(), suiBidded: this.suiBidded.toString(), auctionEpoch: this.auctionEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return QueenCustody.reified().new({ familyType: (0, reified_1.decodeFromJSONField)("u64", field.familyType), mysticalBee: (0, reified_1.decodeFromJSONField)(structs_7.MysticalBee.reified(), field.mysticalBee), suiBidded: (0, reified_1.decodeFromJSONField)("u64", field.suiBidded), auctionEpoch: (0, reified_1.decodeFromJSONField)("u64", field.auctionEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== QueenCustody.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return QueenCustody.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isQueenCustody(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a QueenCustody object`);
    } return QueenCustody.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQueenCustody(data.bcs.type)) {
                throw new Error(`object at is not a QueenCustody object`);
            }
            return QueenCustody.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return QueenCustody.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching QueenCustody object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isQueenCustody(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a QueenCustody object`);
        }
        return QueenCustody.fromSuiObjectData(res.data);
    }
}
exports.QueenCustody = QueenCustody;
QueenCustody.$typeName = `${PKG_V1}::queen_maker::QueenCustody`;
QueenCustody.$numTypeParams = 0;
QueenCustody.$isPhantom = [];
/* ============================== QueenMaker =============================== */
function isQueenMaker(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::QueenMaker`; }
class QueenMaker {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = QueenMaker.$typeName;
        this.$isPhantom = QueenMaker.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(QueenMaker.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.hiveKraftCap = fields.hiveKraftCap;
        ;
        this.hiveToBurn = fields.hiveToBurn;
        ;
        this.config = fields.config;
        ;
        this.areLive = fields.areLive;
        ;
        this.queenCustody = fields.queenCustody;
        ;
        this.currentAuction = fields.currentAuction;
        ;
        this.leadingBees = fields.leadingBees;
        ;
        this.minimumLeadingBidAmt = fields.minimumLeadingBidAmt;
        ;
        this.participatingBees = fields.participatingBees;
        ;
        this.bidPools = fields.bidPools;
        ;
        this.energyYield = fields.energyYield;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: QueenMaker.$typeName, fullTypeName: (0, util_1.composeSuiType)(QueenMaker.$typeName, ...[]), typeArgs: [], isPhantom: QueenMaker.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => QueenMaker.fromFields(fields), fromFieldsWithTypes: (item) => QueenMaker.fromFieldsWithTypes(item), fromBcs: (data) => QueenMaker.fromBcs(data), bcs: QueenMaker.bcs, fromJSONField: (field) => QueenMaker.fromJSONField(field), fromJSON: (json) => QueenMaker.fromJSON(json), fromSuiParsedData: (content) => QueenMaker.fromSuiParsedData(content), fromSuiObjectData: (content) => QueenMaker.fromSuiObjectData(content), fetch: async (client, id) => QueenMaker.fetch(client, id), new: (fields) => { return new QueenMaker([], fields); }, kind: "StructClassReified", }; }
    static get r() { return QueenMaker.reified(); }
    static phantom() { return (0, reified_1.phantom)(QueenMaker.reified()); }
    static get p() { return QueenMaker.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("QueenMaker", {
            id: structs_5.UID.bcs, hive_kraft_cap: structs_3.TreasuryCap.bcs, hive_to_burn: structs_2.Balance.bcs, config: AuctionConfig.bcs, are_live: bcs_1.bcs.bool(), queen_custody: structs_4.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), current_auction: AuctionInfo.bcs, leading_bees: structs_4.LinkedTable.bcs(bcs_1.bcs.u64()), minimum_leading_bid_amt: bcs_1.bcs.u64(), participating_bees: ParticipatingBees.bcs, bid_pools: structs_4.LinkedTable.bcs(bcs_1.bcs.u64()), energy_yield: structs_2.Balance.bcs, module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return QueenMaker.reified().new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), hiveKraftCap: (0, reified_1.decodeFromFields)(structs_3.TreasuryCap.reified(reified.phantom(structs_8.HIVE.reified())), fields.hive_kraft_cap), hiveToBurn: (0, reified_1.decodeFromFields)(structs_2.Balance.reified(reified.phantom(structs_8.HIVE.reified())), fields.hive_to_burn), config: (0, reified_1.decodeFromFields)(AuctionConfig.reified(), fields.config), areLive: (0, reified_1.decodeFromFields)("bool", fields.are_live), queenCustody: (0, reified_1.decodeFromFields)(structs_4.LinkedTable.reified("address", reified.phantom(QueenCustody.reified())), fields.queen_custody), currentAuction: (0, reified_1.decodeFromFields)(AuctionInfo.reified(), fields.current_auction), leadingBees: (0, reified_1.decodeFromFields)(structs_4.LinkedTable.reified("u64", reified.phantom(LeadingDragonBee.reified())), fields.leading_bees), minimumLeadingBidAmt: (0, reified_1.decodeFromFields)("u64", fields.minimum_leading_bid_amt), participatingBees: (0, reified_1.decodeFromFields)(ParticipatingBees.reified(), fields.participating_bees), bidPools: (0, reified_1.decodeFromFields)(structs_4.LinkedTable.reified("u64", reified.phantom(BidPool.reified())), fields.bid_pools), energyYield: (0, reified_1.decodeFromFields)(structs_2.Balance.reified(reified.phantom(structs_6.SUI.reified())), fields.energy_yield), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isQueenMaker(item.type)) {
            throw new Error("not a QueenMaker type");
        }
        return QueenMaker.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), hiveKraftCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TreasuryCap.reified(reified.phantom(structs_8.HIVE.reified())), item.fields.hive_kraft_cap), hiveToBurn: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Balance.reified(reified.phantom(structs_8.HIVE.reified())), item.fields.hive_to_burn), config: (0, reified_1.decodeFromFieldsWithTypes)(AuctionConfig.reified(), item.fields.config), areLive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.are_live), queenCustody: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.LinkedTable.reified("address", reified.phantom(QueenCustody.reified())), item.fields.queen_custody), currentAuction: (0, reified_1.decodeFromFieldsWithTypes)(AuctionInfo.reified(), item.fields.current_auction), leadingBees: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.LinkedTable.reified("u64", reified.phantom(LeadingDragonBee.reified())), item.fields.leading_bees), minimumLeadingBidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.minimum_leading_bid_amt), participatingBees: (0, reified_1.decodeFromFieldsWithTypes)(ParticipatingBees.reified(), item.fields.participating_bees), bidPools: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.LinkedTable.reified("u64", reified.phantom(BidPool.reified())), item.fields.bid_pools), energyYield: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Balance.reified(reified.phantom(structs_6.SUI.reified())), item.fields.energy_yield), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return QueenMaker.fromFields(QueenMaker.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, hiveKraftCap: this.hiveKraftCap.toJSONField(), hiveToBurn: this.hiveToBurn.toJSONField(), config: this.config.toJSONField(), areLive: this.areLive, queenCustody: this.queenCustody.toJSONField(), currentAuction: this.currentAuction.toJSONField(), leadingBees: this.leadingBees.toJSONField(), minimumLeadingBidAmt: this.minimumLeadingBidAmt.toString(), participatingBees: this.participatingBees.toJSONField(), bidPools: this.bidPools.toJSONField(), energyYield: this.energyYield.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return QueenMaker.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), hiveKraftCap: (0, reified_1.decodeFromJSONField)(structs_3.TreasuryCap.reified(reified.phantom(structs_8.HIVE.reified())), field.hiveKraftCap), hiveToBurn: (0, reified_1.decodeFromJSONField)(structs_2.Balance.reified(reified.phantom(structs_8.HIVE.reified())), field.hiveToBurn), config: (0, reified_1.decodeFromJSONField)(AuctionConfig.reified(), field.config), areLive: (0, reified_1.decodeFromJSONField)("bool", field.areLive), queenCustody: (0, reified_1.decodeFromJSONField)(structs_4.LinkedTable.reified("address", reified.phantom(QueenCustody.reified())), field.queenCustody), currentAuction: (0, reified_1.decodeFromJSONField)(AuctionInfo.reified(), field.currentAuction), leadingBees: (0, reified_1.decodeFromJSONField)(structs_4.LinkedTable.reified("u64", reified.phantom(LeadingDragonBee.reified())), field.leadingBees), minimumLeadingBidAmt: (0, reified_1.decodeFromJSONField)("u64", field.minimumLeadingBidAmt), participatingBees: (0, reified_1.decodeFromJSONField)(ParticipatingBees.reified(), field.participatingBees), bidPools: (0, reified_1.decodeFromJSONField)(structs_4.LinkedTable.reified("u64", reified.phantom(BidPool.reified())), field.bidPools), energyYield: (0, reified_1.decodeFromJSONField)(structs_2.Balance.reified(reified.phantom(structs_6.SUI.reified())), field.energyYield), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== QueenMaker.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return QueenMaker.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isQueenMaker(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a QueenMaker object`);
    } return QueenMaker.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQueenMaker(data.bcs.type)) {
                throw new Error(`object at is not a QueenMaker object`);
            }
            return QueenMaker.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return QueenMaker.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching QueenMaker object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isQueenMaker(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a QueenMaker object`);
        }
        return QueenMaker.fromSuiObjectData(res.data);
    }
}
exports.QueenMaker = QueenMaker;
QueenMaker.$typeName = `${PKG_V1}::queen_maker::QueenMaker`;
QueenMaker.$numTypeParams = 0;
QueenMaker.$isPhantom = [];
/* ============================== UserBeeReturned =============================== */
function isUserBeeReturned(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::queen_maker::UserBeeReturned`; }
class UserBeeReturned {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UserBeeReturned.$typeName;
        this.$isPhantom = UserBeeReturned.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserBeeReturned.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bidderTrainer = fields.bidderTrainer;
        ;
        this.username = fields.username;
        ;
        this.beeVersion = fields.beeVersion;
        ;
        this.bidAmt = fields.bidAmt;
        ;
        this.tax = fields.tax;
        ;
        this.auctionStartAt = fields.auctionStartAt;
    }
    static reified() { return { typeName: UserBeeReturned.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserBeeReturned.$typeName, ...[]), typeArgs: [], isPhantom: UserBeeReturned.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserBeeReturned.fromFields(fields), fromFieldsWithTypes: (item) => UserBeeReturned.fromFieldsWithTypes(item), fromBcs: (data) => UserBeeReturned.fromBcs(data), bcs: UserBeeReturned.bcs, fromJSONField: (field) => UserBeeReturned.fromJSONField(field), fromJSON: (json) => UserBeeReturned.fromJSON(json), fromSuiParsedData: (content) => UserBeeReturned.fromSuiParsedData(content), fromSuiObjectData: (content) => UserBeeReturned.fromSuiObjectData(content), fetch: async (client, id) => UserBeeReturned.fetch(client, id), new: (fields) => { return new UserBeeReturned([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserBeeReturned.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserBeeReturned.reified()); }
    static get p() { return UserBeeReturned.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserBeeReturned", {
            bidder_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_1.String.bcs, bee_version: bcs_1.bcs.u64(), bid_amt: bcs_1.bcs.u64(), tax: bcs_1.bcs.u64(), auction_start_at: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UserBeeReturned.reified().new({ bidderTrainer: (0, reified_1.decodeFromFields)("address", fields.bidder_trainer), username: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.username), beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), bidAmt: (0, reified_1.decodeFromFields)("u64", fields.bid_amt), tax: (0, reified_1.decodeFromFields)("u64", fields.tax), auctionStartAt: (0, reified_1.decodeFromFields)("u64", fields.auction_start_at) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserBeeReturned(item.type)) {
            throw new Error("not a UserBeeReturned type");
        }
        return UserBeeReturned.reified().new({ bidderTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_trainer), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.username), beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), bidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_amt), tax: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tax), auctionStartAt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.auction_start_at) });
    }
    static fromBcs(data) { return UserBeeReturned.fromFields(UserBeeReturned.bcs.parse(data)); }
    toJSONField() {
        return {
            bidderTrainer: this.bidderTrainer, username: this.username, beeVersion: this.beeVersion.toString(), bidAmt: this.bidAmt.toString(), tax: this.tax.toString(), auctionStartAt: this.auctionStartAt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserBeeReturned.reified().new({ bidderTrainer: (0, reified_1.decodeFromJSONField)("address", field.bidderTrainer), username: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.username), beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), bidAmt: (0, reified_1.decodeFromJSONField)("u64", field.bidAmt), tax: (0, reified_1.decodeFromJSONField)("u64", field.tax), auctionStartAt: (0, reified_1.decodeFromJSONField)("u64", field.auctionStartAt) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserBeeReturned.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserBeeReturned.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserBeeReturned(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserBeeReturned object`);
    } return UserBeeReturned.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUserBeeReturned(data.bcs.type)) {
                throw new Error(`object at is not a UserBeeReturned object`);
            }
            return UserBeeReturned.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UserBeeReturned.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserBeeReturned object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserBeeReturned(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserBeeReturned object`);
        }
        return UserBeeReturned.fromSuiObjectData(res.data);
    }
}
exports.UserBeeReturned = UserBeeReturned;
UserBeeReturned.$typeName = `${PKG_V1}::queen_maker::UserBeeReturned`;
UserBeeReturned.$numTypeParams = 0;
UserBeeReturned.$isPhantom = [];
