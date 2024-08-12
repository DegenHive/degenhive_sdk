"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpvotedHiveBuzz = exports.UserLikedStreamBuzz = exports.UserBidExpired = exports.StreamerNotFoundForStream = exports.StreamerInfo = exports.StreamerConfig = exports.StreamerBuzzes = exports.StreamPointsFinalizedForProfile = exports.StreamDeleted = exports.StreamBuzzesConfigUpdated = exports.StreamBuzz = exports.ProfileScore = exports.NewStreamerNotFound = exports.NewStreamerForStream = exports.NewStreamInitiated = exports.NewStreamBuzzKrafted = exports.LeadingBidsUpdated = exports.LeadingBidsInfo = exports.KraftHive = exports.HiveVault = exports.HiveBuzzForAStreamBuzzKrafted = exports.HiveBuzz = exports.HistoricalRecord = exports.HIVE = exports.EngagementScores = exports.CurrentStreamersInfo = exports.BuzzChoosenForStream = exports.BurnHive = exports.BidUpdatedByUser = void 0;
exports.isBidUpdatedByUser = isBidUpdatedByUser;
exports.isBurnHive = isBurnHive;
exports.isBuzzChoosenForStream = isBuzzChoosenForStream;
exports.isCurrentStreamersInfo = isCurrentStreamersInfo;
exports.isEngagementScores = isEngagementScores;
exports.isHIVE = isHIVE;
exports.isHistoricalRecord = isHistoricalRecord;
exports.isHiveBuzz = isHiveBuzz;
exports.isHiveBuzzForAStreamBuzzKrafted = isHiveBuzzForAStreamBuzzKrafted;
exports.isHiveVault = isHiveVault;
exports.isKraftHive = isKraftHive;
exports.isLeadingBidsInfo = isLeadingBidsInfo;
exports.isLeadingBidsUpdated = isLeadingBidsUpdated;
exports.isNewStreamBuzzKrafted = isNewStreamBuzzKrafted;
exports.isNewStreamInitiated = isNewStreamInitiated;
exports.isNewStreamerForStream = isNewStreamerForStream;
exports.isNewStreamerNotFound = isNewStreamerNotFound;
exports.isProfileScore = isProfileScore;
exports.isStreamBuzz = isStreamBuzz;
exports.isStreamBuzzesConfigUpdated = isStreamBuzzesConfigUpdated;
exports.isStreamDeleted = isStreamDeleted;
exports.isStreamPointsFinalizedForProfile = isStreamPointsFinalizedForProfile;
exports.isStreamerBuzzes = isStreamerBuzzes;
exports.isStreamerConfig = isStreamerConfig;
exports.isStreamerInfo = isStreamerInfo;
exports.isStreamerNotFoundForStream = isStreamerNotFoundForStream;
exports.isUserBidExpired = isUserBidExpired;
exports.isUserLikedStreamBuzz = isUserLikedStreamBuzz;
exports.isUserUpvotedHiveBuzz = isUserUpvotedHiveBuzz;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/option/structs");
const structs_2 = require("../../0x1/string/structs");
const structs_3 = require("../../0x2/balance/structs");
const structs_4 = require("../../0x2/coin/structs");
const structs_5 = require("../../0x2/linked-table/structs");
const structs_6 = require("../../0x2/object/structs");
const structs_7 = require("../../0x784e390ba69b497f2c8c6df0ca1e19009be2a51050d7d982986babeff019f15c/bee/structs");
const structs_8 = require("../../0x784e390ba69b497f2c8c6df0ca1e19009be2a51050d7d982986babeff019f15c/hive-gems/structs");
const structs_9 = require("../../0xde95a90163cfc2474c23284f8abe78dd602915dbc0b2a65452bf27c38d11392c/hive-profile/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== BidUpdatedByUser =============================== */
function isBidUpdatedByUser(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::BidUpdatedByUser`; }
class BidUpdatedByUser {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BidUpdatedByUser.$typeName;
        this.$isPhantom = BidUpdatedByUser.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BidUpdatedByUser.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.username = fields.username;
        ;
        this.bidAmt = fields.bidAmt;
        ;
        this.flag = fields.flag;
        ;
        this.bidEpochStream = fields.bidEpochStream;
        ;
        this.nextStreamFromEpoch = fields.nextStreamFromEpoch;
        ;
        this.buzzCostInHive = fields.buzzCostInHive;
        ;
        this.accessType = fields.accessType;
        ;
        this.collectionName = fields.collectionName;
    }
    static reified() { return { typeName: BidUpdatedByUser.$typeName, fullTypeName: (0, util_1.composeSuiType)(BidUpdatedByUser.$typeName, ...[]), typeArgs: [], isPhantom: BidUpdatedByUser.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BidUpdatedByUser.fromFields(fields), fromFieldsWithTypes: (item) => BidUpdatedByUser.fromFieldsWithTypes(item), fromBcs: (data) => BidUpdatedByUser.fromBcs(data), bcs: BidUpdatedByUser.bcs, fromJSONField: (field) => BidUpdatedByUser.fromJSONField(field), fromJSON: (json) => BidUpdatedByUser.fromJSON(json), fromSuiParsedData: (content) => BidUpdatedByUser.fromSuiParsedData(content), fetch: async (client, id) => BidUpdatedByUser.fetch(client, id), new: (fields) => { return new BidUpdatedByUser([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BidUpdatedByUser.reified(); }
    static phantom() { return (0, reified_1.phantom)(BidUpdatedByUser.reified()); }
    static get p() { return BidUpdatedByUser.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BidUpdatedByUser", {
            bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_2.String.bcs, bid_amt: bcs_1.bcs.u64(), flag: bcs_1.bcs.bool(), bid_epoch_stream: bcs_1.bcs.u64(), next_stream_from_epoch: bcs_1.bcs.u64(), buzz_cost_in_hive: bcs_1.bcs.u64(), access_type: bcs_1.bcs.u8(), collection_name: structs_2.String.bcs
        });
    }
    ;
    static fromFields(fields) { return BidUpdatedByUser.reified().new({ bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), username: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.username), bidAmt: (0, reified_1.decodeFromFields)("u64", fields.bid_amt), flag: (0, reified_1.decodeFromFields)("bool", fields.flag), bidEpochStream: (0, reified_1.decodeFromFields)("u64", fields.bid_epoch_stream), nextStreamFromEpoch: (0, reified_1.decodeFromFields)("u64", fields.next_stream_from_epoch), buzzCostInHive: (0, reified_1.decodeFromFields)("u64", fields.buzz_cost_in_hive), accessType: (0, reified_1.decodeFromFields)("u8", fields.access_type), collectionName: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.collection_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isBidUpdatedByUser(item.type)) {
            throw new Error("not a BidUpdatedByUser type");
        }
        return BidUpdatedByUser.reified().new({ bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.username), bidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_amt), flag: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.flag), bidEpochStream: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_epoch_stream), nextStreamFromEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_stream_from_epoch), buzzCostInHive: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.buzz_cost_in_hive), accessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.access_type), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.collection_name) });
    }
    static fromBcs(data) { return BidUpdatedByUser.fromFields(BidUpdatedByUser.bcs.parse(data)); }
    toJSONField() {
        return {
            bidderProfile: this.bidderProfile, username: this.username, bidAmt: this.bidAmt.toString(), flag: this.flag, bidEpochStream: this.bidEpochStream.toString(), nextStreamFromEpoch: this.nextStreamFromEpoch.toString(), buzzCostInHive: this.buzzCostInHive.toString(), accessType: this.accessType, collectionName: this.collectionName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BidUpdatedByUser.reified().new({ bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), username: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.username), bidAmt: (0, reified_1.decodeFromJSONField)("u64", field.bidAmt), flag: (0, reified_1.decodeFromJSONField)("bool", field.flag), bidEpochStream: (0, reified_1.decodeFromJSONField)("u64", field.bidEpochStream), nextStreamFromEpoch: (0, reified_1.decodeFromJSONField)("u64", field.nextStreamFromEpoch), buzzCostInHive: (0, reified_1.decodeFromJSONField)("u64", field.buzzCostInHive), accessType: (0, reified_1.decodeFromJSONField)("u8", field.accessType), collectionName: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.collectionName) }); }
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
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BidUpdatedByUser object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBidUpdatedByUser(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BidUpdatedByUser object`);
        }
        return BidUpdatedByUser.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BidUpdatedByUser = BidUpdatedByUser;
BidUpdatedByUser.$typeName = `${index_1.PKG_V1}::hive::BidUpdatedByUser`;
BidUpdatedByUser.$numTypeParams = 0;
BidUpdatedByUser.$isPhantom = [];
/* ============================== BurnHive =============================== */
function isBurnHive(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::BurnHive`; }
class BurnHive {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BurnHive.$typeName;
        this.$isPhantom = BurnHive.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BurnHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        ;
        this.hiveBurnt = fields.hiveBurnt;
    }
    static reified() { return { typeName: BurnHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(BurnHive.$typeName, ...[]), typeArgs: [], isPhantom: BurnHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BurnHive.fromFields(fields), fromFieldsWithTypes: (item) => BurnHive.fromFieldsWithTypes(item), fromBcs: (data) => BurnHive.fromBcs(data), bcs: BurnHive.bcs, fromJSONField: (field) => BurnHive.fromJSONField(field), fromJSON: (json) => BurnHive.fromJSON(json), fromSuiParsedData: (content) => BurnHive.fromSuiParsedData(content), fetch: async (client, id) => BurnHive.fetch(client, id), new: (fields) => { return new BurnHive([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BurnHive.reified(); }
    static phantom() { return (0, reified_1.phantom)(BurnHive.reified()); }
    static get p() { return BurnHive.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BurnHive", {
            user: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), hive_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BurnHive.reified().new({ user: (0, reified_1.decodeFromFields)("address", fields.user), hiveBurnt: (0, reified_1.decodeFromFields)("u64", fields.hive_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isBurnHive(item.type)) {
            throw new Error("not a BurnHive type");
        }
        return BurnHive.reified().new({ user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), hiveBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_burnt) });
    }
    static fromBcs(data) { return BurnHive.fromFields(BurnHive.bcs.parse(data)); }
    toJSONField() {
        return {
            user: this.user, hiveBurnt: this.hiveBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BurnHive.reified().new({ user: (0, reified_1.decodeFromJSONField)("address", field.user), hiveBurnt: (0, reified_1.decodeFromJSONField)("u64", field.hiveBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== BurnHive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BurnHive.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBurnHive(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BurnHive object`);
    } return BurnHive.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BurnHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBurnHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BurnHive object`);
        }
        return BurnHive.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BurnHive = BurnHive;
BurnHive.$typeName = `${index_1.PKG_V1}::hive::BurnHive`;
BurnHive.$numTypeParams = 0;
BurnHive.$isPhantom = [];
/* ============================== BuzzChoosenForStream =============================== */
function isBuzzChoosenForStream(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::BuzzChoosenForStream`; }
class BuzzChoosenForStream {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BuzzChoosenForStream.$typeName;
        this.$isPhantom = BuzzChoosenForStream.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BuzzChoosenForStream.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.rankIndex = fields.rankIndex;
        ;
        this.streamerProfileAddr = fields.streamerProfileAddr;
        ;
        this.streamIndex = fields.streamIndex;
        ;
        this.streamInnerIndex = fields.streamInnerIndex;
        ;
        this.choosenBuzzProfile = fields.choosenBuzzProfile;
        ;
        this.buzz = fields.buzz;
        ;
        this.genAiUrl = fields.genAiUrl;
    }
    static reified() { return { typeName: BuzzChoosenForStream.$typeName, fullTypeName: (0, util_1.composeSuiType)(BuzzChoosenForStream.$typeName, ...[]), typeArgs: [], isPhantom: BuzzChoosenForStream.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BuzzChoosenForStream.fromFields(fields), fromFieldsWithTypes: (item) => BuzzChoosenForStream.fromFieldsWithTypes(item), fromBcs: (data) => BuzzChoosenForStream.fromBcs(data), bcs: BuzzChoosenForStream.bcs, fromJSONField: (field) => BuzzChoosenForStream.fromJSONField(field), fromJSON: (json) => BuzzChoosenForStream.fromJSON(json), fromSuiParsedData: (content) => BuzzChoosenForStream.fromSuiParsedData(content), fetch: async (client, id) => BuzzChoosenForStream.fetch(client, id), new: (fields) => { return new BuzzChoosenForStream([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BuzzChoosenForStream.reified(); }
    static phantom() { return (0, reified_1.phantom)(BuzzChoosenForStream.reified()); }
    static get p() { return BuzzChoosenForStream.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BuzzChoosenForStream", {
            rank_index: bcs_1.bcs.u64(), streamer_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), stream_index: bcs_1.bcs.u64(), stream_inner_index: bcs_1.bcs.u64(), choosen_buzz_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), buzz: structs_2.String.bcs, gen_ai_url: structs_1.Option.bcs(structs_2.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return BuzzChoosenForStream.reified().new({ rankIndex: (0, reified_1.decodeFromFields)("u64", fields.rank_index), streamerProfileAddr: (0, reified_1.decodeFromFields)("address", fields.streamer_profile_addr), streamIndex: (0, reified_1.decodeFromFields)("u64", fields.stream_index), streamInnerIndex: (0, reified_1.decodeFromFields)("u64", fields.stream_inner_index), choosenBuzzProfile: (0, reified_1.decodeFromFields)("address", fields.choosen_buzz_profile), buzz: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.buzz), genAiUrl: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_2.String.reified()), fields.gen_ai_url) }); }
    static fromFieldsWithTypes(item) {
        if (!isBuzzChoosenForStream(item.type)) {
            throw new Error("not a BuzzChoosenForStream type");
        }
        return BuzzChoosenForStream.reified().new({ rankIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.rank_index), streamerProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.streamer_profile_addr), streamIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_index), streamInnerIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_inner_index), choosenBuzzProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.choosen_buzz_profile), buzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.buzz), genAiUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_2.String.reified()), item.fields.gen_ai_url) });
    }
    static fromBcs(data) { return BuzzChoosenForStream.fromFields(BuzzChoosenForStream.bcs.parse(data)); }
    toJSONField() {
        return {
            rankIndex: this.rankIndex.toString(), streamerProfileAddr: this.streamerProfileAddr, streamIndex: this.streamIndex.toString(), streamInnerIndex: this.streamInnerIndex.toString(), choosenBuzzProfile: this.choosenBuzzProfile, buzz: this.buzz, genAiUrl: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_2.String.$typeName}>`, this.genAiUrl),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BuzzChoosenForStream.reified().new({ rankIndex: (0, reified_1.decodeFromJSONField)("u64", field.rankIndex), streamerProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.streamerProfileAddr), streamIndex: (0, reified_1.decodeFromJSONField)("u64", field.streamIndex), streamInnerIndex: (0, reified_1.decodeFromJSONField)("u64", field.streamInnerIndex), choosenBuzzProfile: (0, reified_1.decodeFromJSONField)("address", field.choosenBuzzProfile), buzz: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.buzz), genAiUrl: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_2.String.reified()), field.genAiUrl) }); }
    static fromJSON(json) {
        if (json.$typeName !== BuzzChoosenForStream.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BuzzChoosenForStream.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBuzzChoosenForStream(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BuzzChoosenForStream object`);
    } return BuzzChoosenForStream.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BuzzChoosenForStream object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBuzzChoosenForStream(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BuzzChoosenForStream object`);
        }
        return BuzzChoosenForStream.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BuzzChoosenForStream = BuzzChoosenForStream;
BuzzChoosenForStream.$typeName = `${index_1.PKG_V1}::hive::BuzzChoosenForStream`;
BuzzChoosenForStream.$numTypeParams = 0;
BuzzChoosenForStream.$isPhantom = [];
/* ============================== CurrentStreamersInfo =============================== */
function isCurrentStreamersInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::CurrentStreamersInfo`; }
class CurrentStreamersInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = CurrentStreamersInfo.$typeName;
        this.$isPhantom = CurrentStreamersInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(CurrentStreamersInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.rank1Profile = fields.rank1Profile;
        ;
        this.rank1Info = fields.rank1Info;
        ;
        this.rank2Profile = fields.rank2Profile;
        ;
        this.rank2Info = fields.rank2Info;
        ;
        this.rank3Profile = fields.rank3Profile;
        ;
        this.rank3Info = fields.rank3Info;
    }
    static reified() { return { typeName: CurrentStreamersInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(CurrentStreamersInfo.$typeName, ...[]), typeArgs: [], isPhantom: CurrentStreamersInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => CurrentStreamersInfo.fromFields(fields), fromFieldsWithTypes: (item) => CurrentStreamersInfo.fromFieldsWithTypes(item), fromBcs: (data) => CurrentStreamersInfo.fromBcs(data), bcs: CurrentStreamersInfo.bcs, fromJSONField: (field) => CurrentStreamersInfo.fromJSONField(field), fromJSON: (json) => CurrentStreamersInfo.fromJSON(json), fromSuiParsedData: (content) => CurrentStreamersInfo.fromSuiParsedData(content), fetch: async (client, id) => CurrentStreamersInfo.fetch(client, id), new: (fields) => { return new CurrentStreamersInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return CurrentStreamersInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(CurrentStreamersInfo.reified()); }
    static get p() { return CurrentStreamersInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("CurrentStreamersInfo", {
            rank1_profile: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), rank1_info: StreamerInfo.bcs, rank2_profile: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), rank2_info: StreamerInfo.bcs, rank3_profile: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), rank3_info: StreamerInfo.bcs
        });
    }
    ;
    static fromFields(fields) { return CurrentStreamersInfo.reified().new({ rank1Profile: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.rank1_profile), rank1Info: (0, reified_1.decodeFromFields)(StreamerInfo.reified(), fields.rank1_info), rank2Profile: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.rank2_profile), rank2Info: (0, reified_1.decodeFromFields)(StreamerInfo.reified(), fields.rank2_info), rank3Profile: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.rank3_profile), rank3Info: (0, reified_1.decodeFromFields)(StreamerInfo.reified(), fields.rank3_info) }); }
    static fromFieldsWithTypes(item) {
        if (!isCurrentStreamersInfo(item.type)) {
            throw new Error("not a CurrentStreamersInfo type");
        }
        return CurrentStreamersInfo.reified().new({ rank1Profile: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.rank1_profile), rank1Info: (0, reified_1.decodeFromFieldsWithTypes)(StreamerInfo.reified(), item.fields.rank1_info), rank2Profile: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.rank2_profile), rank2Info: (0, reified_1.decodeFromFieldsWithTypes)(StreamerInfo.reified(), item.fields.rank2_info), rank3Profile: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.rank3_profile), rank3Info: (0, reified_1.decodeFromFieldsWithTypes)(StreamerInfo.reified(), item.fields.rank3_info) });
    }
    static fromBcs(data) { return CurrentStreamersInfo.fromFields(CurrentStreamersInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            rank1Profile: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.rank1Profile), rank1Info: this.rank1Info.toJSONField(), rank2Profile: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.rank2Profile), rank2Info: this.rank2Info.toJSONField(), rank3Profile: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.rank3Profile), rank3Info: this.rank3Info.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return CurrentStreamersInfo.reified().new({ rank1Profile: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.rank1Profile), rank1Info: (0, reified_1.decodeFromJSONField)(StreamerInfo.reified(), field.rank1Info), rank2Profile: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.rank2Profile), rank2Info: (0, reified_1.decodeFromJSONField)(StreamerInfo.reified(), field.rank2Info), rank3Profile: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.rank3Profile), rank3Info: (0, reified_1.decodeFromJSONField)(StreamerInfo.reified(), field.rank3Info) }); }
    static fromJSON(json) {
        if (json.$typeName !== CurrentStreamersInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CurrentStreamersInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurrentStreamersInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a CurrentStreamersInfo object`);
    } return CurrentStreamersInfo.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching CurrentStreamersInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurrentStreamersInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CurrentStreamersInfo object`);
        }
        return CurrentStreamersInfo.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.CurrentStreamersInfo = CurrentStreamersInfo;
CurrentStreamersInfo.$typeName = `${index_1.PKG_V1}::hive::CurrentStreamersInfo`;
CurrentStreamersInfo.$numTypeParams = 0;
CurrentStreamersInfo.$isPhantom = [];
/* ============================== EngagementScores =============================== */
function isEngagementScores(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::EngagementScores`; }
class EngagementScores {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = EngagementScores.$typeName;
        this.$isPhantom = EngagementScores.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(EngagementScores.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.hiveGemsAvailable = fields.hiveGemsAvailable;
        ;
        this.hivePerAdSlot = fields.hivePerAdSlot;
        ;
        this.beesAvailable = fields.beesAvailable;
        ;
        this.beesPerAdSlot = fields.beesPerAdSlot;
        ;
        this.ongoingPointsSum = fields.ongoingPointsSum;
        ;
        this.userPointsScore = fields.userPointsScore;
        ;
        this.totalSuiBidded = fields.totalSuiBidded;
        ;
        this.leadingBidAmt = fields.leadingBidAmt;
        ;
        this.pointsPerSuiBidded = fields.pointsPerSuiBidded;
        ;
        this.historicalRecords = fields.historicalRecords;
    }
    static reified() { return { typeName: EngagementScores.$typeName, fullTypeName: (0, util_1.composeSuiType)(EngagementScores.$typeName, ...[]), typeArgs: [], isPhantom: EngagementScores.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => EngagementScores.fromFields(fields), fromFieldsWithTypes: (item) => EngagementScores.fromFieldsWithTypes(item), fromBcs: (data) => EngagementScores.fromBcs(data), bcs: EngagementScores.bcs, fromJSONField: (field) => EngagementScores.fromJSONField(field), fromJSON: (json) => EngagementScores.fromJSON(json), fromSuiParsedData: (content) => EngagementScores.fromSuiParsedData(content), fetch: async (client, id) => EngagementScores.fetch(client, id), new: (fields) => { return new EngagementScores([], fields); }, kind: "StructClassReified", }; }
    static get r() { return EngagementScores.reified(); }
    static phantom() { return (0, reified_1.phantom)(EngagementScores.reified()); }
    static get p() { return EngagementScores.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("EngagementScores", {
            hive_gems_available: structs_8.HiveGems.bcs, hive_per_ad_slot: bcs_1.bcs.u64(), bees_available: structs_3.Balance.bcs, bees_per_ad_slot: bcs_1.bcs.u64(), ongoing_points_sum: bcs_1.bcs.u128(), user_points_score: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), total_sui_bidded: bcs_1.bcs.u64(), leading_bid_amt: bcs_1.bcs.u64(), points_per_sui_bidded: bcs_1.bcs.u128(), historical_records: structs_5.LinkedTable.bcs(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return EngagementScores.reified().new({ hiveGemsAvailable: (0, reified_1.decodeFromFields)(structs_8.HiveGems.reified(), fields.hive_gems_available), hivePerAdSlot: (0, reified_1.decodeFromFields)("u64", fields.hive_per_ad_slot), beesAvailable: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(reified.phantom(structs_7.BEE.reified())), fields.bees_available), beesPerAdSlot: (0, reified_1.decodeFromFields)("u64", fields.bees_per_ad_slot), ongoingPointsSum: (0, reified_1.decodeFromFields)("u128", fields.ongoing_points_sum), userPointsScore: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(ProfileScore.reified())), fields.user_points_score), totalSuiBidded: (0, reified_1.decodeFromFields)("u64", fields.total_sui_bidded), leadingBidAmt: (0, reified_1.decodeFromFields)("u64", fields.leading_bid_amt), pointsPerSuiBidded: (0, reified_1.decodeFromFields)("u128", fields.points_per_sui_bidded), historicalRecords: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(HistoricalRecord.reified())), fields.historical_records) }); }
    static fromFieldsWithTypes(item) {
        if (!isEngagementScores(item.type)) {
            throw new Error("not a EngagementScores type");
        }
        return EngagementScores.reified().new({ hiveGemsAvailable: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.HiveGems.reified(), item.fields.hive_gems_available), hivePerAdSlot: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_per_ad_slot), beesAvailable: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(reified.phantom(structs_7.BEE.reified())), item.fields.bees_available), beesPerAdSlot: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_per_ad_slot), ongoingPointsSum: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.ongoing_points_sum), userPointsScore: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(ProfileScore.reified())), item.fields.user_points_score), totalSuiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_sui_bidded), leadingBidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.leading_bid_amt), pointsPerSuiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.points_per_sui_bidded), historicalRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(HistoricalRecord.reified())), item.fields.historical_records) });
    }
    static fromBcs(data) { return EngagementScores.fromFields(EngagementScores.bcs.parse(data)); }
    toJSONField() {
        return {
            hiveGemsAvailable: this.hiveGemsAvailable.toJSONField(), hivePerAdSlot: this.hivePerAdSlot.toString(), beesAvailable: this.beesAvailable.toJSONField(), beesPerAdSlot: this.beesPerAdSlot.toString(), ongoingPointsSum: this.ongoingPointsSum.toString(), userPointsScore: this.userPointsScore.toJSONField(), totalSuiBidded: this.totalSuiBidded.toString(), leadingBidAmt: this.leadingBidAmt.toString(), pointsPerSuiBidded: this.pointsPerSuiBidded.toString(), historicalRecords: this.historicalRecords.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return EngagementScores.reified().new({ hiveGemsAvailable: (0, reified_1.decodeFromJSONField)(structs_8.HiveGems.reified(), field.hiveGemsAvailable), hivePerAdSlot: (0, reified_1.decodeFromJSONField)("u64", field.hivePerAdSlot), beesAvailable: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(reified.phantom(structs_7.BEE.reified())), field.beesAvailable), beesPerAdSlot: (0, reified_1.decodeFromJSONField)("u64", field.beesPerAdSlot), ongoingPointsSum: (0, reified_1.decodeFromJSONField)("u128", field.ongoingPointsSum), userPointsScore: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(ProfileScore.reified())), field.userPointsScore), totalSuiBidded: (0, reified_1.decodeFromJSONField)("u64", field.totalSuiBidded), leadingBidAmt: (0, reified_1.decodeFromJSONField)("u64", field.leadingBidAmt), pointsPerSuiBidded: (0, reified_1.decodeFromJSONField)("u128", field.pointsPerSuiBidded), historicalRecords: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(HistoricalRecord.reified())), field.historicalRecords) }); }
    static fromJSON(json) {
        if (json.$typeName !== EngagementScores.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return EngagementScores.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEngagementScores(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a EngagementScores object`);
    } return EngagementScores.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching EngagementScores object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEngagementScores(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a EngagementScores object`);
        }
        return EngagementScores.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.EngagementScores = EngagementScores;
EngagementScores.$typeName = `${index_1.PKG_V1}::hive::EngagementScores`;
EngagementScores.$numTypeParams = 0;
EngagementScores.$isPhantom = [];
/* ============================== HIVE =============================== */
function isHIVE(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::HIVE`; }
class HIVE {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HIVE.$typeName;
        this.$isPhantom = HIVE.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HIVE.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: HIVE.$typeName, fullTypeName: (0, util_1.composeSuiType)(HIVE.$typeName, ...[]), typeArgs: [], isPhantom: HIVE.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HIVE.fromFields(fields), fromFieldsWithTypes: (item) => HIVE.fromFieldsWithTypes(item), fromBcs: (data) => HIVE.fromBcs(data), bcs: HIVE.bcs, fromJSONField: (field) => HIVE.fromJSONField(field), fromJSON: (json) => HIVE.fromJSON(json), fromSuiParsedData: (content) => HIVE.fromSuiParsedData(content), fetch: async (client, id) => HIVE.fetch(client, id), new: (fields) => { return new HIVE([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HIVE.reified(); }
    static phantom() { return (0, reified_1.phantom)(HIVE.reified()); }
    static get p() { return HIVE.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HIVE", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return HIVE.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isHIVE(item.type)) {
            throw new Error("not a HIVE type");
        }
        return HIVE.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return HIVE.fromFields(HIVE.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HIVE.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== HIVE.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HIVE.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHIVE(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HIVE object`);
    } return HIVE.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HIVE object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHIVE(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HIVE object`);
        }
        return HIVE.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HIVE = HIVE;
HIVE.$typeName = `${index_1.PKG_V1}::hive::HIVE`;
HIVE.$numTypeParams = 0;
HIVE.$isPhantom = [];
/* ============================== HistoricalRecord =============================== */
function isHistoricalRecord(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::HistoricalRecord`; }
class HistoricalRecord {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HistoricalRecord.$typeName;
        this.$isPhantom = HistoricalRecord.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HistoricalRecord.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.hiveForParticipants = fields.hiveForParticipants;
        ;
        this.beesForParticipants = fields.beesForParticipants;
        ;
        this.totalPointsSum = fields.totalPointsSum;
        ;
        this.pointsPerSuiBidded = fields.pointsPerSuiBidded;
    }
    static reified() { return { typeName: HistoricalRecord.$typeName, fullTypeName: (0, util_1.composeSuiType)(HistoricalRecord.$typeName, ...[]), typeArgs: [], isPhantom: HistoricalRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HistoricalRecord.fromFields(fields), fromFieldsWithTypes: (item) => HistoricalRecord.fromFieldsWithTypes(item), fromBcs: (data) => HistoricalRecord.fromBcs(data), bcs: HistoricalRecord.bcs, fromJSONField: (field) => HistoricalRecord.fromJSONField(field), fromJSON: (json) => HistoricalRecord.fromJSON(json), fromSuiParsedData: (content) => HistoricalRecord.fromSuiParsedData(content), fetch: async (client, id) => HistoricalRecord.fetch(client, id), new: (fields) => { return new HistoricalRecord([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HistoricalRecord.reified(); }
    static phantom() { return (0, reified_1.phantom)(HistoricalRecord.reified()); }
    static get p() { return HistoricalRecord.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HistoricalRecord", {
            hive_for_participants: bcs_1.bcs.u64(), bees_for_participants: bcs_1.bcs.u64(), total_points_sum: bcs_1.bcs.u128(), points_per_sui_bidded: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(fields) { return HistoricalRecord.reified().new({ hiveForParticipants: (0, reified_1.decodeFromFields)("u64", fields.hive_for_participants), beesForParticipants: (0, reified_1.decodeFromFields)("u64", fields.bees_for_participants), totalPointsSum: (0, reified_1.decodeFromFields)("u128", fields.total_points_sum), pointsPerSuiBidded: (0, reified_1.decodeFromFields)("u256", fields.points_per_sui_bidded) }); }
    static fromFieldsWithTypes(item) {
        if (!isHistoricalRecord(item.type)) {
            throw new Error("not a HistoricalRecord type");
        }
        return HistoricalRecord.reified().new({ hiveForParticipants: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_for_participants), beesForParticipants: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_for_participants), totalPointsSum: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.total_points_sum), pointsPerSuiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.points_per_sui_bidded) });
    }
    static fromBcs(data) { return HistoricalRecord.fromFields(HistoricalRecord.bcs.parse(data)); }
    toJSONField() {
        return {
            hiveForParticipants: this.hiveForParticipants.toString(), beesForParticipants: this.beesForParticipants.toString(), totalPointsSum: this.totalPointsSum.toString(), pointsPerSuiBidded: this.pointsPerSuiBidded.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HistoricalRecord.reified().new({ hiveForParticipants: (0, reified_1.decodeFromJSONField)("u64", field.hiveForParticipants), beesForParticipants: (0, reified_1.decodeFromJSONField)("u64", field.beesForParticipants), totalPointsSum: (0, reified_1.decodeFromJSONField)("u128", field.totalPointsSum), pointsPerSuiBidded: (0, reified_1.decodeFromJSONField)("u256", field.pointsPerSuiBidded) }); }
    static fromJSON(json) {
        if (json.$typeName !== HistoricalRecord.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HistoricalRecord.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHistoricalRecord(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HistoricalRecord object`);
    } return HistoricalRecord.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HistoricalRecord object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHistoricalRecord(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HistoricalRecord object`);
        }
        return HistoricalRecord.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HistoricalRecord = HistoricalRecord;
HistoricalRecord.$typeName = `${index_1.PKG_V1}::hive::HistoricalRecord`;
HistoricalRecord.$numTypeParams = 0;
HistoricalRecord.$isPhantom = [];
/* ============================== HiveBuzz =============================== */
function isHiveBuzz(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V1}::hive::HiveBuzz` + '<'); }
class HiveBuzz {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveBuzz.$typeName;
        this.$isPhantom = HiveBuzz.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveBuzz.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.buzz = fields.buzz;
        ;
        this.genAiUrl = fields.genAiUrl;
        ;
        this.suiEarned = fields.suiEarned;
        ;
        this.isChoosen = fields.isChoosen;
        ;
        this.upvotes = fields.upvotes;
    }
    static reified(X) { return { typeName: HiveBuzz.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveBuzz.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: HiveBuzz.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => HiveBuzz.fromFields(X, fields), fromFieldsWithTypes: (item) => HiveBuzz.fromFieldsWithTypes(X, item), fromBcs: (data) => HiveBuzz.fromBcs(X, data), bcs: HiveBuzz.bcs, fromJSONField: (field) => HiveBuzz.fromJSONField(X, field), fromJSON: (json) => HiveBuzz.fromJSON(X, json), fromSuiParsedData: (content) => HiveBuzz.fromSuiParsedData(X, content), fetch: async (client, id) => HiveBuzz.fetch(client, X, id), new: (fields) => { return new HiveBuzz([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveBuzz.reified; }
    static phantom(X) { return (0, reified_1.phantom)(HiveBuzz.reified(X)); }
    static get p() { return HiveBuzz.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("HiveBuzz", {
            buzz: structs_2.String.bcs, gen_ai_url: structs_1.Option.bcs(structs_2.String.bcs), sui_earned: structs_3.Balance.bcs, is_choosen: bcs_1.bcs.bool(), upvotes: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }))
        });
    }
    ;
    static fromFields(typeArg, fields) { return HiveBuzz.reified(typeArg).new({ buzz: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.buzz), genAiUrl: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_2.String.reified()), fields.gen_ai_url), suiEarned: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArg), fields.sui_earned), isChoosen: (0, reified_1.decodeFromFields)("bool", fields.is_choosen), upvotes: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), fields.upvotes) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isHiveBuzz(item.type)) {
            throw new Error("not a HiveBuzz type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return HiveBuzz.reified(typeArg).new({ buzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.buzz), genAiUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_2.String.reified()), item.fields.gen_ai_url), suiEarned: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArg), item.fields.sui_earned), isChoosen: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_choosen), upvotes: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), item.fields.upvotes) });
    }
    static fromBcs(typeArg, data) { return HiveBuzz.fromFields(typeArg, HiveBuzz.bcs.parse(data)); }
    toJSONField() {
        return {
            buzz: this.buzz, genAiUrl: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_2.String.$typeName}>`, this.genAiUrl), suiEarned: this.suiEarned.toJSONField(), isChoosen: this.isChoosen, upvotes: this.upvotes.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return HiveBuzz.reified(typeArg).new({ buzz: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.buzz), genAiUrl: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_2.String.reified()), field.genAiUrl), suiEarned: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArg), field.suiEarned), isChoosen: (0, reified_1.decodeFromJSONField)("bool", field.isChoosen), upvotes: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), field.upvotes) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== HiveBuzz.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(HiveBuzz.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return HiveBuzz.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveBuzz(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveBuzz object`);
    } return HiveBuzz.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveBuzz object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveBuzz(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveBuzz object`);
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
        return HiveBuzz.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveBuzz = HiveBuzz;
HiveBuzz.$typeName = `${index_1.PKG_V1}::hive::HiveBuzz`;
HiveBuzz.$numTypeParams = 1;
HiveBuzz.$isPhantom = [true,];
/* ============================== HiveBuzzForAStreamBuzzKrafted =============================== */
function isHiveBuzzForAStreamBuzzKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::HiveBuzzForAStreamBuzzKrafted`; }
class HiveBuzzForAStreamBuzzKrafted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveBuzzForAStreamBuzzKrafted.$typeName;
        this.$isPhantom = HiveBuzzForAStreamBuzzKrafted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveBuzzForAStreamBuzzKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.streamerProfile = fields.streamerProfile;
        ;
        this.streamIndex = fields.streamIndex;
        ;
        this.streamInnerIndex = fields.streamInnerIndex;
        ;
        this.userProfile = fields.userProfile;
        ;
        this.username = fields.username;
        ;
        this.userBuzz = fields.userBuzz;
        ;
        this.genAiUrl = fields.genAiUrl;
        ;
        this.hiveStreamedToStreamer = fields.hiveStreamedToStreamer;
    }
    static reified() { return { typeName: HiveBuzzForAStreamBuzzKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveBuzzForAStreamBuzzKrafted.$typeName, ...[]), typeArgs: [], isPhantom: HiveBuzzForAStreamBuzzKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveBuzzForAStreamBuzzKrafted.fromFields(fields), fromFieldsWithTypes: (item) => HiveBuzzForAStreamBuzzKrafted.fromFieldsWithTypes(item), fromBcs: (data) => HiveBuzzForAStreamBuzzKrafted.fromBcs(data), bcs: HiveBuzzForAStreamBuzzKrafted.bcs, fromJSONField: (field) => HiveBuzzForAStreamBuzzKrafted.fromJSONField(field), fromJSON: (json) => HiveBuzzForAStreamBuzzKrafted.fromJSON(json), fromSuiParsedData: (content) => HiveBuzzForAStreamBuzzKrafted.fromSuiParsedData(content), fetch: async (client, id) => HiveBuzzForAStreamBuzzKrafted.fetch(client, id), new: (fields) => { return new HiveBuzzForAStreamBuzzKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveBuzzForAStreamBuzzKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveBuzzForAStreamBuzzKrafted.reified()); }
    static get p() { return HiveBuzzForAStreamBuzzKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveBuzzForAStreamBuzzKrafted", {
            streamer_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), stream_index: bcs_1.bcs.u64(), stream_inner_index: bcs_1.bcs.u64(), user_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_2.String.bcs, user_buzz: structs_2.String.bcs, gen_ai_url: structs_1.Option.bcs(structs_2.String.bcs), hive_streamed_to_streamer: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveBuzzForAStreamBuzzKrafted.reified().new({ streamerProfile: (0, reified_1.decodeFromFields)("address", fields.streamer_profile), streamIndex: (0, reified_1.decodeFromFields)("u64", fields.stream_index), streamInnerIndex: (0, reified_1.decodeFromFields)("u64", fields.stream_inner_index), userProfile: (0, reified_1.decodeFromFields)("address", fields.user_profile), username: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.username), userBuzz: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.user_buzz), genAiUrl: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_2.String.reified()), fields.gen_ai_url), hiveStreamedToStreamer: (0, reified_1.decodeFromFields)("u64", fields.hive_streamed_to_streamer) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveBuzzForAStreamBuzzKrafted(item.type)) {
            throw new Error("not a HiveBuzzForAStreamBuzzKrafted type");
        }
        return HiveBuzzForAStreamBuzzKrafted.reified().new({ streamerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.streamer_profile), streamIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_index), streamInnerIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_inner_index), userProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user_profile), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.username), userBuzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.user_buzz), genAiUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_2.String.reified()), item.fields.gen_ai_url), hiveStreamedToStreamer: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_streamed_to_streamer) });
    }
    static fromBcs(data) { return HiveBuzzForAStreamBuzzKrafted.fromFields(HiveBuzzForAStreamBuzzKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            streamerProfile: this.streamerProfile, streamIndex: this.streamIndex.toString(), streamInnerIndex: this.streamInnerIndex.toString(), userProfile: this.userProfile, username: this.username, userBuzz: this.userBuzz, genAiUrl: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_2.String.$typeName}>`, this.genAiUrl), hiveStreamedToStreamer: this.hiveStreamedToStreamer.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveBuzzForAStreamBuzzKrafted.reified().new({ streamerProfile: (0, reified_1.decodeFromJSONField)("address", field.streamerProfile), streamIndex: (0, reified_1.decodeFromJSONField)("u64", field.streamIndex), streamInnerIndex: (0, reified_1.decodeFromJSONField)("u64", field.streamInnerIndex), userProfile: (0, reified_1.decodeFromJSONField)("address", field.userProfile), username: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.username), userBuzz: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.userBuzz), genAiUrl: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_2.String.reified()), field.genAiUrl), hiveStreamedToStreamer: (0, reified_1.decodeFromJSONField)("u64", field.hiveStreamedToStreamer) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveBuzzForAStreamBuzzKrafted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveBuzzForAStreamBuzzKrafted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveBuzzForAStreamBuzzKrafted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveBuzzForAStreamBuzzKrafted object`);
    } return HiveBuzzForAStreamBuzzKrafted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveBuzzForAStreamBuzzKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveBuzzForAStreamBuzzKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveBuzzForAStreamBuzzKrafted object`);
        }
        return HiveBuzzForAStreamBuzzKrafted.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveBuzzForAStreamBuzzKrafted = HiveBuzzForAStreamBuzzKrafted;
HiveBuzzForAStreamBuzzKrafted.$typeName = `${index_1.PKG_V1}::hive::HiveBuzzForAStreamBuzzKrafted`;
HiveBuzzForAStreamBuzzKrafted.$numTypeParams = 0;
HiveBuzzForAStreamBuzzKrafted.$isPhantom = [];
/* ============================== HiveVault =============================== */
function isHiveVault(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::HiveVault`; }
class HiveVault {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HiveVault.$typeName;
        this.$isPhantom = HiveVault.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HiveVault.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.streamerProfile = fields.streamerProfile;
        ;
        this.gemsKraftCap = fields.gemsKraftCap;
        ;
        this.hiveKraftCap = fields.hiveKraftCap;
        ;
        this.streamBuzzCap = fields.streamBuzzCap;
        ;
        this.activeSupply = fields.activeSupply;
    }
    static reified() { return { typeName: HiveVault.$typeName, fullTypeName: (0, util_1.composeSuiType)(HiveVault.$typeName, ...[]), typeArgs: [], isPhantom: HiveVault.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HiveVault.fromFields(fields), fromFieldsWithTypes: (item) => HiveVault.fromFieldsWithTypes(item), fromBcs: (data) => HiveVault.fromBcs(data), bcs: HiveVault.bcs, fromJSONField: (field) => HiveVault.fromJSONField(field), fromJSON: (json) => HiveVault.fromJSON(json), fromSuiParsedData: (content) => HiveVault.fromSuiParsedData(content), fetch: async (client, id) => HiveVault.fetch(client, id), new: (fields) => { return new HiveVault([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HiveVault.reified(); }
    static phantom() { return (0, reified_1.phantom)(HiveVault.reified()); }
    static get p() { return HiveVault.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HiveVault", {
            id: structs_6.UID.bcs, streamer_profile: structs_9.HiveProfile.bcs, gems_kraft_cap: structs_8.HiveGemKraftCap.bcs, hive_kraft_cap: structs_4.TreasuryCap.bcs, stream_buzz_cap: structs_9.HiveAppAccessCapability.bcs, active_supply: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HiveVault.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), streamerProfile: (0, reified_1.decodeFromFields)(structs_9.HiveProfile.reified(), fields.streamer_profile), gemsKraftCap: (0, reified_1.decodeFromFields)(structs_8.HiveGemKraftCap.reified(), fields.gems_kraft_cap), hiveKraftCap: (0, reified_1.decodeFromFields)(structs_4.TreasuryCap.reified(reified.phantom(HIVE.reified())), fields.hive_kraft_cap), streamBuzzCap: (0, reified_1.decodeFromFields)(structs_9.HiveAppAccessCapability.reified(), fields.stream_buzz_cap), activeSupply: (0, reified_1.decodeFromFields)("u64", fields.active_supply) }); }
    static fromFieldsWithTypes(item) {
        if (!isHiveVault(item.type)) {
            throw new Error("not a HiveVault type");
        }
        return HiveVault.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), streamerProfile: (0, reified_1.decodeFromFieldsWithTypes)(structs_9.HiveProfile.reified(), item.fields.streamer_profile), gemsKraftCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.HiveGemKraftCap.reified(), item.fields.gems_kraft_cap), hiveKraftCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.TreasuryCap.reified(reified.phantom(HIVE.reified())), item.fields.hive_kraft_cap), streamBuzzCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_9.HiveAppAccessCapability.reified(), item.fields.stream_buzz_cap), activeSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_supply) });
    }
    static fromBcs(data) { return HiveVault.fromFields(HiveVault.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, streamerProfile: this.streamerProfile.toJSONField(), gemsKraftCap: this.gemsKraftCap.toJSONField(), hiveKraftCap: this.hiveKraftCap.toJSONField(), streamBuzzCap: this.streamBuzzCap.toJSONField(), activeSupply: this.activeSupply.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HiveVault.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), streamerProfile: (0, reified_1.decodeFromJSONField)(structs_9.HiveProfile.reified(), field.streamerProfile), gemsKraftCap: (0, reified_1.decodeFromJSONField)(structs_8.HiveGemKraftCap.reified(), field.gemsKraftCap), hiveKraftCap: (0, reified_1.decodeFromJSONField)(structs_4.TreasuryCap.reified(reified.phantom(HIVE.reified())), field.hiveKraftCap), streamBuzzCap: (0, reified_1.decodeFromJSONField)(structs_9.HiveAppAccessCapability.reified(), field.streamBuzzCap), activeSupply: (0, reified_1.decodeFromJSONField)("u64", field.activeSupply) }); }
    static fromJSON(json) {
        if (json.$typeName !== HiveVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HiveVault.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHiveVault(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HiveVault object`);
    } return HiveVault.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HiveVault object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHiveVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HiveVault object`);
        }
        return HiveVault.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.HiveVault = HiveVault;
HiveVault.$typeName = `${index_1.PKG_V1}::hive::HiveVault`;
HiveVault.$numTypeParams = 0;
HiveVault.$isPhantom = [];
/* ============================== KraftHive =============================== */
function isKraftHive(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::KraftHive`; }
class KraftHive {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = KraftHive.$typeName;
        this.$isPhantom = KraftHive.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(KraftHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.user = fields.user;
        ;
        this.hiveKrafted = fields.hiveKrafted;
    }
    static reified() { return { typeName: KraftHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(KraftHive.$typeName, ...[]), typeArgs: [], isPhantom: KraftHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => KraftHive.fromFields(fields), fromFieldsWithTypes: (item) => KraftHive.fromFieldsWithTypes(item), fromBcs: (data) => KraftHive.fromBcs(data), bcs: KraftHive.bcs, fromJSONField: (field) => KraftHive.fromJSONField(field), fromJSON: (json) => KraftHive.fromJSON(json), fromSuiParsedData: (content) => KraftHive.fromSuiParsedData(content), fetch: async (client, id) => KraftHive.fetch(client, id), new: (fields) => { return new KraftHive([], fields); }, kind: "StructClassReified", }; }
    static get r() { return KraftHive.reified(); }
    static phantom() { return (0, reified_1.phantom)(KraftHive.reified()); }
    static get p() { return KraftHive.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("KraftHive", {
            user: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), hive_krafted: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return KraftHive.reified().new({ user: (0, reified_1.decodeFromFields)("address", fields.user), hiveKrafted: (0, reified_1.decodeFromFields)("u64", fields.hive_krafted) }); }
    static fromFieldsWithTypes(item) {
        if (!isKraftHive(item.type)) {
            throw new Error("not a KraftHive type");
        }
        return KraftHive.reified().new({ user: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user), hiveKrafted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_krafted) });
    }
    static fromBcs(data) { return KraftHive.fromFields(KraftHive.bcs.parse(data)); }
    toJSONField() {
        return {
            user: this.user, hiveKrafted: this.hiveKrafted.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return KraftHive.reified().new({ user: (0, reified_1.decodeFromJSONField)("address", field.user), hiveKrafted: (0, reified_1.decodeFromJSONField)("u64", field.hiveKrafted) }); }
    static fromJSON(json) {
        if (json.$typeName !== KraftHive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return KraftHive.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isKraftHive(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a KraftHive object`);
    } return KraftHive.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching KraftHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isKraftHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a KraftHive object`);
        }
        return KraftHive.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.KraftHive = KraftHive;
KraftHive.$typeName = `${index_1.PKG_V1}::hive::KraftHive`;
KraftHive.$numTypeParams = 0;
KraftHive.$isPhantom = [];
/* ============================== LeadingBidsInfo =============================== */
function isLeadingBidsInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::LeadingBidsInfo`; }
class LeadingBidsInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LeadingBidsInfo.$typeName;
        this.$isPhantom = LeadingBidsInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LeadingBidsInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.oProfileAddr = fields.oProfileAddr;
        ;
        this.oBidAmt = fields.oBidAmt;
        ;
        this.sProfileAddr = fields.sProfileAddr;
        ;
        this.sBidAmt = fields.sBidAmt;
        ;
        this.tProfileAddr = fields.tProfileAddr;
        ;
        this.tBidAmt = fields.tBidAmt;
    }
    static reified() { return { typeName: LeadingBidsInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(LeadingBidsInfo.$typeName, ...[]), typeArgs: [], isPhantom: LeadingBidsInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LeadingBidsInfo.fromFields(fields), fromFieldsWithTypes: (item) => LeadingBidsInfo.fromFieldsWithTypes(item), fromBcs: (data) => LeadingBidsInfo.fromBcs(data), bcs: LeadingBidsInfo.bcs, fromJSONField: (field) => LeadingBidsInfo.fromJSONField(field), fromJSON: (json) => LeadingBidsInfo.fromJSON(json), fromSuiParsedData: (content) => LeadingBidsInfo.fromSuiParsedData(content), fetch: async (client, id) => LeadingBidsInfo.fetch(client, id), new: (fields) => { return new LeadingBidsInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LeadingBidsInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(LeadingBidsInfo.reified()); }
    static get p() { return LeadingBidsInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LeadingBidsInfo", {
            o_profile_addr: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), o_bid_amt: bcs_1.bcs.u64(), s_profile_addr: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), s_bid_amt: bcs_1.bcs.u64(), t_profile_addr: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), t_bid_amt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return LeadingBidsInfo.reified().new({ oProfileAddr: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.o_profile_addr), oBidAmt: (0, reified_1.decodeFromFields)("u64", fields.o_bid_amt), sProfileAddr: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.s_profile_addr), sBidAmt: (0, reified_1.decodeFromFields)("u64", fields.s_bid_amt), tProfileAddr: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.t_profile_addr), tBidAmt: (0, reified_1.decodeFromFields)("u64", fields.t_bid_amt) }); }
    static fromFieldsWithTypes(item) {
        if (!isLeadingBidsInfo(item.type)) {
            throw new Error("not a LeadingBidsInfo type");
        }
        return LeadingBidsInfo.reified().new({ oProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.o_profile_addr), oBidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.o_bid_amt), sProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.s_profile_addr), sBidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.s_bid_amt), tProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.t_profile_addr), tBidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.t_bid_amt) });
    }
    static fromBcs(data) { return LeadingBidsInfo.fromFields(LeadingBidsInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            oProfileAddr: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.oProfileAddr), oBidAmt: this.oBidAmt.toString(), sProfileAddr: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.sProfileAddr), sBidAmt: this.sBidAmt.toString(), tProfileAddr: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.tProfileAddr), tBidAmt: this.tBidAmt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LeadingBidsInfo.reified().new({ oProfileAddr: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.oProfileAddr), oBidAmt: (0, reified_1.decodeFromJSONField)("u64", field.oBidAmt), sProfileAddr: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.sProfileAddr), sBidAmt: (0, reified_1.decodeFromJSONField)("u64", field.sBidAmt), tProfileAddr: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.tProfileAddr), tBidAmt: (0, reified_1.decodeFromJSONField)("u64", field.tBidAmt) }); }
    static fromJSON(json) {
        if (json.$typeName !== LeadingBidsInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LeadingBidsInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLeadingBidsInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LeadingBidsInfo object`);
    } return LeadingBidsInfo.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LeadingBidsInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLeadingBidsInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LeadingBidsInfo object`);
        }
        return LeadingBidsInfo.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.LeadingBidsInfo = LeadingBidsInfo;
LeadingBidsInfo.$typeName = `${index_1.PKG_V1}::hive::LeadingBidsInfo`;
LeadingBidsInfo.$numTypeParams = 0;
LeadingBidsInfo.$isPhantom = [];
/* ============================== LeadingBidsUpdated =============================== */
function isLeadingBidsUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::LeadingBidsUpdated`; }
class LeadingBidsUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LeadingBidsUpdated.$typeName;
        this.$isPhantom = LeadingBidsUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LeadingBidsUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.rank1Profile = fields.rank1Profile;
        ;
        this.rank1BidAmt = fields.rank1BidAmt;
        ;
        this.rank2Profile = fields.rank2Profile;
        ;
        this.rank2BidAmt = fields.rank2BidAmt;
        ;
        this.rank3Profile = fields.rank3Profile;
        ;
        this.rank3BidAmt = fields.rank3BidAmt;
    }
    static reified() { return { typeName: LeadingBidsUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(LeadingBidsUpdated.$typeName, ...[]), typeArgs: [], isPhantom: LeadingBidsUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LeadingBidsUpdated.fromFields(fields), fromFieldsWithTypes: (item) => LeadingBidsUpdated.fromFieldsWithTypes(item), fromBcs: (data) => LeadingBidsUpdated.fromBcs(data), bcs: LeadingBidsUpdated.bcs, fromJSONField: (field) => LeadingBidsUpdated.fromJSONField(field), fromJSON: (json) => LeadingBidsUpdated.fromJSON(json), fromSuiParsedData: (content) => LeadingBidsUpdated.fromSuiParsedData(content), fetch: async (client, id) => LeadingBidsUpdated.fetch(client, id), new: (fields) => { return new LeadingBidsUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LeadingBidsUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(LeadingBidsUpdated.reified()); }
    static get p() { return LeadingBidsUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LeadingBidsUpdated", {
            rank1_profile: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), rank1_bid_amt: bcs_1.bcs.u64(), rank2_profile: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), rank2_bid_amt: bcs_1.bcs.u64(), rank3_profile: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), rank3_bid_amt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return LeadingBidsUpdated.reified().new({ rank1Profile: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.rank1_profile), rank1BidAmt: (0, reified_1.decodeFromFields)("u64", fields.rank1_bid_amt), rank2Profile: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.rank2_profile), rank2BidAmt: (0, reified_1.decodeFromFields)("u64", fields.rank2_bid_amt), rank3Profile: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.rank3_profile), rank3BidAmt: (0, reified_1.decodeFromFields)("u64", fields.rank3_bid_amt) }); }
    static fromFieldsWithTypes(item) {
        if (!isLeadingBidsUpdated(item.type)) {
            throw new Error("not a LeadingBidsUpdated type");
        }
        return LeadingBidsUpdated.reified().new({ rank1Profile: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.rank1_profile), rank1BidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.rank1_bid_amt), rank2Profile: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.rank2_profile), rank2BidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.rank2_bid_amt), rank3Profile: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.rank3_profile), rank3BidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.rank3_bid_amt) });
    }
    static fromBcs(data) { return LeadingBidsUpdated.fromFields(LeadingBidsUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            rank1Profile: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.rank1Profile), rank1BidAmt: this.rank1BidAmt.toString(), rank2Profile: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.rank2Profile), rank2BidAmt: this.rank2BidAmt.toString(), rank3Profile: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.rank3Profile), rank3BidAmt: this.rank3BidAmt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LeadingBidsUpdated.reified().new({ rank1Profile: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.rank1Profile), rank1BidAmt: (0, reified_1.decodeFromJSONField)("u64", field.rank1BidAmt), rank2Profile: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.rank2Profile), rank2BidAmt: (0, reified_1.decodeFromJSONField)("u64", field.rank2BidAmt), rank3Profile: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.rank3Profile), rank3BidAmt: (0, reified_1.decodeFromJSONField)("u64", field.rank3BidAmt) }); }
    static fromJSON(json) {
        if (json.$typeName !== LeadingBidsUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LeadingBidsUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLeadingBidsUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LeadingBidsUpdated object`);
    } return LeadingBidsUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LeadingBidsUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLeadingBidsUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LeadingBidsUpdated object`);
        }
        return LeadingBidsUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.LeadingBidsUpdated = LeadingBidsUpdated;
LeadingBidsUpdated.$typeName = `${index_1.PKG_V1}::hive::LeadingBidsUpdated`;
LeadingBidsUpdated.$numTypeParams = 0;
LeadingBidsUpdated.$isPhantom = [];
/* ============================== NewStreamBuzzKrafted =============================== */
function isNewStreamBuzzKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::NewStreamBuzzKrafted`; }
class NewStreamBuzzKrafted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewStreamBuzzKrafted.$typeName;
        this.$isPhantom = NewStreamBuzzKrafted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewStreamBuzzKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.curAuctionStream = fields.curAuctionStream;
        ;
        this.streamerProfileAddr = fields.streamerProfileAddr;
        ;
        this.streamerName = fields.streamerName;
        ;
        this.buzz = fields.buzz;
        ;
        this.genAiUrl = fields.genAiUrl;
        ;
        this.streamIndex = fields.streamIndex;
        ;
        this.index = fields.index;
    }
    static reified() { return { typeName: NewStreamBuzzKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewStreamBuzzKrafted.$typeName, ...[]), typeArgs: [], isPhantom: NewStreamBuzzKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewStreamBuzzKrafted.fromFields(fields), fromFieldsWithTypes: (item) => NewStreamBuzzKrafted.fromFieldsWithTypes(item), fromBcs: (data) => NewStreamBuzzKrafted.fromBcs(data), bcs: NewStreamBuzzKrafted.bcs, fromJSONField: (field) => NewStreamBuzzKrafted.fromJSONField(field), fromJSON: (json) => NewStreamBuzzKrafted.fromJSON(json), fromSuiParsedData: (content) => NewStreamBuzzKrafted.fromSuiParsedData(content), fetch: async (client, id) => NewStreamBuzzKrafted.fetch(client, id), new: (fields) => { return new NewStreamBuzzKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewStreamBuzzKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewStreamBuzzKrafted.reified()); }
    static get p() { return NewStreamBuzzKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewStreamBuzzKrafted", {
            cur_auction_stream: bcs_1.bcs.u64(), streamer_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), streamer_name: structs_2.String.bcs, buzz: structs_2.String.bcs, gen_ai_url: structs_1.Option.bcs(structs_2.String.bcs), stream_index: bcs_1.bcs.u64(), index: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewStreamBuzzKrafted.reified().new({ curAuctionStream: (0, reified_1.decodeFromFields)("u64", fields.cur_auction_stream), streamerProfileAddr: (0, reified_1.decodeFromFields)("address", fields.streamer_profile_addr), streamerName: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.streamer_name), buzz: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.buzz), genAiUrl: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_2.String.reified()), fields.gen_ai_url), streamIndex: (0, reified_1.decodeFromFields)("u64", fields.stream_index), index: (0, reified_1.decodeFromFields)("u64", fields.index) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewStreamBuzzKrafted(item.type)) {
            throw new Error("not a NewStreamBuzzKrafted type");
        }
        return NewStreamBuzzKrafted.reified().new({ curAuctionStream: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_auction_stream), streamerProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.streamer_profile_addr), streamerName: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.streamer_name), buzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.buzz), genAiUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_2.String.reified()), item.fields.gen_ai_url), streamIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_index), index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index) });
    }
    static fromBcs(data) { return NewStreamBuzzKrafted.fromFields(NewStreamBuzzKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            curAuctionStream: this.curAuctionStream.toString(), streamerProfileAddr: this.streamerProfileAddr, streamerName: this.streamerName, buzz: this.buzz, genAiUrl: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_2.String.$typeName}>`, this.genAiUrl), streamIndex: this.streamIndex.toString(), index: this.index.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewStreamBuzzKrafted.reified().new({ curAuctionStream: (0, reified_1.decodeFromJSONField)("u64", field.curAuctionStream), streamerProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.streamerProfileAddr), streamerName: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.streamerName), buzz: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.buzz), genAiUrl: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_2.String.reified()), field.genAiUrl), streamIndex: (0, reified_1.decodeFromJSONField)("u64", field.streamIndex), index: (0, reified_1.decodeFromJSONField)("u64", field.index) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewStreamBuzzKrafted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewStreamBuzzKrafted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewStreamBuzzKrafted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewStreamBuzzKrafted object`);
    } return NewStreamBuzzKrafted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewStreamBuzzKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewStreamBuzzKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewStreamBuzzKrafted object`);
        }
        return NewStreamBuzzKrafted.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewStreamBuzzKrafted = NewStreamBuzzKrafted;
NewStreamBuzzKrafted.$typeName = `${index_1.PKG_V1}::hive::NewStreamBuzzKrafted`;
NewStreamBuzzKrafted.$numTypeParams = 0;
NewStreamBuzzKrafted.$isPhantom = [];
/* ============================== NewStreamInitiated =============================== */
function isNewStreamInitiated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::NewStreamInitiated`; }
class NewStreamInitiated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewStreamInitiated.$typeName;
        this.$isPhantom = NewStreamInitiated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewStreamInitiated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.streamInitMs = fields.streamInitMs;
        ;
        this.streamingFromEpoch = fields.streamingFromEpoch;
        ;
        this.hiveForParticipants = fields.hiveForParticipants;
        ;
        this.beesForParticipants = fields.beesForParticipants;
        ;
        this.pointsPerSuiBidded = fields.pointsPerSuiBidded;
        ;
        this.totalPointsSum = fields.totalPointsSum;
        ;
        this.pointsForAllBids = fields.pointsForAllBids;
        ;
        this.suiForPolFromBid = fields.suiForPolFromBid;
    }
    static reified() { return { typeName: NewStreamInitiated.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewStreamInitiated.$typeName, ...[]), typeArgs: [], isPhantom: NewStreamInitiated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewStreamInitiated.fromFields(fields), fromFieldsWithTypes: (item) => NewStreamInitiated.fromFieldsWithTypes(item), fromBcs: (data) => NewStreamInitiated.fromBcs(data), bcs: NewStreamInitiated.bcs, fromJSONField: (field) => NewStreamInitiated.fromJSONField(field), fromJSON: (json) => NewStreamInitiated.fromJSON(json), fromSuiParsedData: (content) => NewStreamInitiated.fromSuiParsedData(content), fetch: async (client, id) => NewStreamInitiated.fetch(client, id), new: (fields) => { return new NewStreamInitiated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewStreamInitiated.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewStreamInitiated.reified()); }
    static get p() { return NewStreamInitiated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewStreamInitiated", {
            stream_init_ms: bcs_1.bcs.u64(), streaming_from_epoch: bcs_1.bcs.u64(), hive_for_participants: bcs_1.bcs.u64(), bees_for_participants: bcs_1.bcs.u64(), points_per_sui_bidded: bcs_1.bcs.u256(), total_points_sum: bcs_1.bcs.u128(), points_for_all_bids: bcs_1.bcs.u128(), sui_for_pol_from_bid: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewStreamInitiated.reified().new({ streamInitMs: (0, reified_1.decodeFromFields)("u64", fields.stream_init_ms), streamingFromEpoch: (0, reified_1.decodeFromFields)("u64", fields.streaming_from_epoch), hiveForParticipants: (0, reified_1.decodeFromFields)("u64", fields.hive_for_participants), beesForParticipants: (0, reified_1.decodeFromFields)("u64", fields.bees_for_participants), pointsPerSuiBidded: (0, reified_1.decodeFromFields)("u256", fields.points_per_sui_bidded), totalPointsSum: (0, reified_1.decodeFromFields)("u128", fields.total_points_sum), pointsForAllBids: (0, reified_1.decodeFromFields)("u128", fields.points_for_all_bids), suiForPolFromBid: (0, reified_1.decodeFromFields)("u64", fields.sui_for_pol_from_bid) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewStreamInitiated(item.type)) {
            throw new Error("not a NewStreamInitiated type");
        }
        return NewStreamInitiated.reified().new({ streamInitMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_init_ms), streamingFromEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.streaming_from_epoch), hiveForParticipants: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_for_participants), beesForParticipants: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_for_participants), pointsPerSuiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.points_per_sui_bidded), totalPointsSum: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.total_points_sum), pointsForAllBids: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.points_for_all_bids), suiForPolFromBid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_for_pol_from_bid) });
    }
    static fromBcs(data) { return NewStreamInitiated.fromFields(NewStreamInitiated.bcs.parse(data)); }
    toJSONField() {
        return {
            streamInitMs: this.streamInitMs.toString(), streamingFromEpoch: this.streamingFromEpoch.toString(), hiveForParticipants: this.hiveForParticipants.toString(), beesForParticipants: this.beesForParticipants.toString(), pointsPerSuiBidded: this.pointsPerSuiBidded.toString(), totalPointsSum: this.totalPointsSum.toString(), pointsForAllBids: this.pointsForAllBids.toString(), suiForPolFromBid: this.suiForPolFromBid.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewStreamInitiated.reified().new({ streamInitMs: (0, reified_1.decodeFromJSONField)("u64", field.streamInitMs), streamingFromEpoch: (0, reified_1.decodeFromJSONField)("u64", field.streamingFromEpoch), hiveForParticipants: (0, reified_1.decodeFromJSONField)("u64", field.hiveForParticipants), beesForParticipants: (0, reified_1.decodeFromJSONField)("u64", field.beesForParticipants), pointsPerSuiBidded: (0, reified_1.decodeFromJSONField)("u256", field.pointsPerSuiBidded), totalPointsSum: (0, reified_1.decodeFromJSONField)("u128", field.totalPointsSum), pointsForAllBids: (0, reified_1.decodeFromJSONField)("u128", field.pointsForAllBids), suiForPolFromBid: (0, reified_1.decodeFromJSONField)("u64", field.suiForPolFromBid) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewStreamInitiated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewStreamInitiated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewStreamInitiated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewStreamInitiated object`);
    } return NewStreamInitiated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewStreamInitiated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewStreamInitiated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewStreamInitiated object`);
        }
        return NewStreamInitiated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewStreamInitiated = NewStreamInitiated;
NewStreamInitiated.$typeName = `${index_1.PKG_V1}::hive::NewStreamInitiated`;
NewStreamInitiated.$numTypeParams = 0;
NewStreamInitiated.$isPhantom = [];
/* ============================== NewStreamerForStream =============================== */
function isNewStreamerForStream(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::NewStreamerForStream`; }
class NewStreamerForStream {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewStreamerForStream.$typeName;
        this.$isPhantom = NewStreamerForStream.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewStreamerForStream.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.curAuctionStream = fields.curAuctionStream;
        ;
        this.rank = fields.rank;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.userAddress = fields.userAddress;
        ;
        this.accessType = fields.accessType;
        ;
        this.buzzCostInHive = fields.buzzCostInHive;
        ;
        this.collectionName = fields.collectionName;
        ;
        this.hiveRewards = fields.hiveRewards;
        ;
        this.beeRewards = fields.beeRewards;
    }
    static reified() { return { typeName: NewStreamerForStream.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewStreamerForStream.$typeName, ...[]), typeArgs: [], isPhantom: NewStreamerForStream.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewStreamerForStream.fromFields(fields), fromFieldsWithTypes: (item) => NewStreamerForStream.fromFieldsWithTypes(item), fromBcs: (data) => NewStreamerForStream.fromBcs(data), bcs: NewStreamerForStream.bcs, fromJSONField: (field) => NewStreamerForStream.fromJSONField(field), fromJSON: (json) => NewStreamerForStream.fromJSON(json), fromSuiParsedData: (content) => NewStreamerForStream.fromSuiParsedData(content), fetch: async (client, id) => NewStreamerForStream.fetch(client, id), new: (fields) => { return new NewStreamerForStream([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewStreamerForStream.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewStreamerForStream.reified()); }
    static get p() { return NewStreamerForStream.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewStreamerForStream", {
            cur_auction_stream: bcs_1.bcs.u64(), rank: bcs_1.bcs.u8(), profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_2.String.bcs, user_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), access_type: bcs_1.bcs.u8(), buzz_cost_in_hive: bcs_1.bcs.u64(), collection_name: structs_2.String.bcs, hive_rewards: bcs_1.bcs.u64(), bee_rewards: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewStreamerForStream.reified().new({ curAuctionStream: (0, reified_1.decodeFromFields)("u64", fields.cur_auction_stream), rank: (0, reified_1.decodeFromFields)("u8", fields.rank), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.username), userAddress: (0, reified_1.decodeFromFields)("address", fields.user_address), accessType: (0, reified_1.decodeFromFields)("u8", fields.access_type), buzzCostInHive: (0, reified_1.decodeFromFields)("u64", fields.buzz_cost_in_hive), collectionName: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.collection_name), hiveRewards: (0, reified_1.decodeFromFields)("u64", fields.hive_rewards), beeRewards: (0, reified_1.decodeFromFields)("u64", fields.bee_rewards) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewStreamerForStream(item.type)) {
            throw new Error("not a NewStreamerForStream type");
        }
        return NewStreamerForStream.reified().new({ curAuctionStream: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_auction_stream), rank: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.rank), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.username), userAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user_address), accessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.access_type), buzzCostInHive: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.buzz_cost_in_hive), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.collection_name), hiveRewards: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_rewards), beeRewards: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_rewards) });
    }
    static fromBcs(data) { return NewStreamerForStream.fromFields(NewStreamerForStream.bcs.parse(data)); }
    toJSONField() {
        return {
            curAuctionStream: this.curAuctionStream.toString(), rank: this.rank, profileAddr: this.profileAddr, username: this.username, userAddress: this.userAddress, accessType: this.accessType, buzzCostInHive: this.buzzCostInHive.toString(), collectionName: this.collectionName, hiveRewards: this.hiveRewards.toString(), beeRewards: this.beeRewards.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewStreamerForStream.reified().new({ curAuctionStream: (0, reified_1.decodeFromJSONField)("u64", field.curAuctionStream), rank: (0, reified_1.decodeFromJSONField)("u8", field.rank), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.username), userAddress: (0, reified_1.decodeFromJSONField)("address", field.userAddress), accessType: (0, reified_1.decodeFromJSONField)("u8", field.accessType), buzzCostInHive: (0, reified_1.decodeFromJSONField)("u64", field.buzzCostInHive), collectionName: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.collectionName), hiveRewards: (0, reified_1.decodeFromJSONField)("u64", field.hiveRewards), beeRewards: (0, reified_1.decodeFromJSONField)("u64", field.beeRewards) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewStreamerForStream.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewStreamerForStream.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewStreamerForStream(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewStreamerForStream object`);
    } return NewStreamerForStream.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewStreamerForStream object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewStreamerForStream(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewStreamerForStream object`);
        }
        return NewStreamerForStream.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewStreamerForStream = NewStreamerForStream;
NewStreamerForStream.$typeName = `${index_1.PKG_V1}::hive::NewStreamerForStream`;
NewStreamerForStream.$numTypeParams = 0;
NewStreamerForStream.$isPhantom = [];
/* ============================== NewStreamerNotFound =============================== */
function isNewStreamerNotFound(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::NewStreamerNotFound`; }
class NewStreamerNotFound {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewStreamerNotFound.$typeName;
        this.$isPhantom = NewStreamerNotFound.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewStreamerNotFound.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.streamInitMs = fields.streamInitMs;
        ;
        this.streamingFromEpoch = fields.streamingFromEpoch;
    }
    static reified() { return { typeName: NewStreamerNotFound.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewStreamerNotFound.$typeName, ...[]), typeArgs: [], isPhantom: NewStreamerNotFound.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewStreamerNotFound.fromFields(fields), fromFieldsWithTypes: (item) => NewStreamerNotFound.fromFieldsWithTypes(item), fromBcs: (data) => NewStreamerNotFound.fromBcs(data), bcs: NewStreamerNotFound.bcs, fromJSONField: (field) => NewStreamerNotFound.fromJSONField(field), fromJSON: (json) => NewStreamerNotFound.fromJSON(json), fromSuiParsedData: (content) => NewStreamerNotFound.fromSuiParsedData(content), fetch: async (client, id) => NewStreamerNotFound.fetch(client, id), new: (fields) => { return new NewStreamerNotFound([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewStreamerNotFound.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewStreamerNotFound.reified()); }
    static get p() { return NewStreamerNotFound.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewStreamerNotFound", {
            stream_init_ms: bcs_1.bcs.u64(), streaming_from_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewStreamerNotFound.reified().new({ streamInitMs: (0, reified_1.decodeFromFields)("u64", fields.stream_init_ms), streamingFromEpoch: (0, reified_1.decodeFromFields)("u64", fields.streaming_from_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewStreamerNotFound(item.type)) {
            throw new Error("not a NewStreamerNotFound type");
        }
        return NewStreamerNotFound.reified().new({ streamInitMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_init_ms), streamingFromEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.streaming_from_epoch) });
    }
    static fromBcs(data) { return NewStreamerNotFound.fromFields(NewStreamerNotFound.bcs.parse(data)); }
    toJSONField() {
        return {
            streamInitMs: this.streamInitMs.toString(), streamingFromEpoch: this.streamingFromEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewStreamerNotFound.reified().new({ streamInitMs: (0, reified_1.decodeFromJSONField)("u64", field.streamInitMs), streamingFromEpoch: (0, reified_1.decodeFromJSONField)("u64", field.streamingFromEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewStreamerNotFound.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewStreamerNotFound.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewStreamerNotFound(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewStreamerNotFound object`);
    } return NewStreamerNotFound.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewStreamerNotFound object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewStreamerNotFound(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewStreamerNotFound object`);
        }
        return NewStreamerNotFound.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewStreamerNotFound = NewStreamerNotFound;
NewStreamerNotFound.$typeName = `${index_1.PKG_V1}::hive::NewStreamerNotFound`;
NewStreamerNotFound.$numTypeParams = 0;
NewStreamerNotFound.$isPhantom = [];
/* ============================== ProfileScore =============================== */
function isProfileScore(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::ProfileScore`; }
class ProfileScore {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ProfileScore.$typeName;
        this.$isPhantom = ProfileScore.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ProfileScore.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.streamEpoch = fields.streamEpoch;
        ;
        this.points = fields.points;
        ;
        this.suiBidded = fields.suiBidded;
        ;
        this.flag = fields.flag;
        ;
        this.buzzCostInHive = fields.buzzCostInHive;
        ;
        this.accessType = fields.accessType;
        ;
        this.collectionName = fields.collectionName;
    }
    static reified() { return { typeName: ProfileScore.$typeName, fullTypeName: (0, util_1.composeSuiType)(ProfileScore.$typeName, ...[]), typeArgs: [], isPhantom: ProfileScore.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ProfileScore.fromFields(fields), fromFieldsWithTypes: (item) => ProfileScore.fromFieldsWithTypes(item), fromBcs: (data) => ProfileScore.fromBcs(data), bcs: ProfileScore.bcs, fromJSONField: (field) => ProfileScore.fromJSONField(field), fromJSON: (json) => ProfileScore.fromJSON(json), fromSuiParsedData: (content) => ProfileScore.fromSuiParsedData(content), fetch: async (client, id) => ProfileScore.fetch(client, id), new: (fields) => { return new ProfileScore([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ProfileScore.reified(); }
    static phantom() { return (0, reified_1.phantom)(ProfileScore.reified()); }
    static get p() { return ProfileScore.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ProfileScore", {
            stream_epoch: bcs_1.bcs.u64(), points: bcs_1.bcs.u64(), sui_bidded: bcs_1.bcs.u64(), flag: bcs_1.bcs.bool(), buzz_cost_in_hive: bcs_1.bcs.u64(), access_type: bcs_1.bcs.u8(), collection_name: structs_2.String.bcs
        });
    }
    ;
    static fromFields(fields) { return ProfileScore.reified().new({ streamEpoch: (0, reified_1.decodeFromFields)("u64", fields.stream_epoch), points: (0, reified_1.decodeFromFields)("u64", fields.points), suiBidded: (0, reified_1.decodeFromFields)("u64", fields.sui_bidded), flag: (0, reified_1.decodeFromFields)("bool", fields.flag), buzzCostInHive: (0, reified_1.decodeFromFields)("u64", fields.buzz_cost_in_hive), accessType: (0, reified_1.decodeFromFields)("u8", fields.access_type), collectionName: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.collection_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isProfileScore(item.type)) {
            throw new Error("not a ProfileScore type");
        }
        return ProfileScore.reified().new({ streamEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_epoch), points: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.points), suiBidded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_bidded), flag: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.flag), buzzCostInHive: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.buzz_cost_in_hive), accessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.access_type), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.collection_name) });
    }
    static fromBcs(data) { return ProfileScore.fromFields(ProfileScore.bcs.parse(data)); }
    toJSONField() {
        return {
            streamEpoch: this.streamEpoch.toString(), points: this.points.toString(), suiBidded: this.suiBidded.toString(), flag: this.flag, buzzCostInHive: this.buzzCostInHive.toString(), accessType: this.accessType, collectionName: this.collectionName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ProfileScore.reified().new({ streamEpoch: (0, reified_1.decodeFromJSONField)("u64", field.streamEpoch), points: (0, reified_1.decodeFromJSONField)("u64", field.points), suiBidded: (0, reified_1.decodeFromJSONField)("u64", field.suiBidded), flag: (0, reified_1.decodeFromJSONField)("bool", field.flag), buzzCostInHive: (0, reified_1.decodeFromJSONField)("u64", field.buzzCostInHive), accessType: (0, reified_1.decodeFromJSONField)("u8", field.accessType), collectionName: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.collectionName) }); }
    static fromJSON(json) {
        if (json.$typeName !== ProfileScore.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ProfileScore.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isProfileScore(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ProfileScore object`);
    } return ProfileScore.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ProfileScore object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProfileScore(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProfileScore object`);
        }
        return ProfileScore.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ProfileScore = ProfileScore;
ProfileScore.$typeName = `${index_1.PKG_V1}::hive::ProfileScore`;
ProfileScore.$numTypeParams = 0;
ProfileScore.$isPhantom = [];
/* ============================== StreamBuzz =============================== */
function isStreamBuzz(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V1}::hive::StreamBuzz` + '<'); }
class StreamBuzz {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StreamBuzz.$typeName;
        this.$isPhantom = StreamBuzz.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StreamBuzz.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.streamer = fields.streamer;
        ;
        this.timestamp = fields.timestamp;
        ;
        this.buzz = fields.buzz;
        ;
        this.genAiUrl = fields.genAiUrl;
        ;
        this.likes = fields.likes;
        ;
        this.buzzes = fields.buzzes;
    }
    static reified(X) { return { typeName: StreamBuzz.$typeName, fullTypeName: (0, util_1.composeSuiType)(StreamBuzz.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: StreamBuzz.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => StreamBuzz.fromFields(X, fields), fromFieldsWithTypes: (item) => StreamBuzz.fromFieldsWithTypes(X, item), fromBcs: (data) => StreamBuzz.fromBcs(X, data), bcs: StreamBuzz.bcs, fromJSONField: (field) => StreamBuzz.fromJSONField(X, field), fromJSON: (json) => StreamBuzz.fromJSON(X, json), fromSuiParsedData: (content) => StreamBuzz.fromSuiParsedData(X, content), fetch: async (client, id) => StreamBuzz.fetch(client, X, id), new: (fields) => { return new StreamBuzz([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return StreamBuzz.reified; }
    static phantom(X) { return (0, reified_1.phantom)(StreamBuzz.reified(X)); }
    static get p() { return StreamBuzz.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("StreamBuzz", {
            streamer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), timestamp: bcs_1.bcs.u64(), buzz: structs_2.String.bcs, gen_ai_url: structs_1.Option.bcs(structs_2.String.bcs), likes: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), buzzes: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }))
        });
    }
    ;
    static fromFields(typeArg, fields) { return StreamBuzz.reified(typeArg).new({ streamer: (0, reified_1.decodeFromFields)("address", fields.streamer), timestamp: (0, reified_1.decodeFromFields)("u64", fields.timestamp), buzz: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.buzz), genAiUrl: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_2.String.reified()), fields.gen_ai_url), likes: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), fields.likes), buzzes: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(HiveBuzz.reified(typeArg))), fields.buzzes) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isStreamBuzz(item.type)) {
            throw new Error("not a StreamBuzz type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return StreamBuzz.reified(typeArg).new({ streamer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.streamer), timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp), buzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.buzz), genAiUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_2.String.reified()), item.fields.gen_ai_url), likes: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), item.fields.likes), buzzes: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(HiveBuzz.reified(typeArg))), item.fields.buzzes) });
    }
    static fromBcs(typeArg, data) { return StreamBuzz.fromFields(typeArg, StreamBuzz.bcs.parse(data)); }
    toJSONField() {
        return {
            streamer: this.streamer, timestamp: this.timestamp.toString(), buzz: this.buzz, genAiUrl: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_2.String.$typeName}>`, this.genAiUrl), likes: this.likes.toJSONField(), buzzes: this.buzzes.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return StreamBuzz.reified(typeArg).new({ streamer: (0, reified_1.decodeFromJSONField)("address", field.streamer), timestamp: (0, reified_1.decodeFromJSONField)("u64", field.timestamp), buzz: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.buzz), genAiUrl: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_2.String.reified()), field.genAiUrl), likes: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom("bool")), field.likes), buzzes: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(HiveBuzz.reified(typeArg))), field.buzzes) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== StreamBuzz.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(StreamBuzz.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return StreamBuzz.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStreamBuzz(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StreamBuzz object`);
    } return StreamBuzz.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StreamBuzz object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStreamBuzz(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StreamBuzz object`);
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
        return StreamBuzz.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StreamBuzz = StreamBuzz;
StreamBuzz.$typeName = `${index_1.PKG_V1}::hive::StreamBuzz`;
StreamBuzz.$numTypeParams = 1;
StreamBuzz.$isPhantom = [true,];
/* ============================== StreamBuzzesConfigUpdated =============================== */
function isStreamBuzzesConfigUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::StreamBuzzesConfigUpdated`; }
class StreamBuzzesConfigUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StreamBuzzesConfigUpdated.$typeName;
        this.$isPhantom = StreamBuzzesConfigUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StreamBuzzesConfigUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.areLive = fields.areLive;
        ;
        this.hivePerAdSlot = fields.hivePerAdSlot;
        ;
        this.beesPerAdSlot = fields.beesPerAdSlot;
        ;
        this.taxOnBid = fields.taxOnBid;
        ;
        this.curAuctionStream = fields.curAuctionStream;
        ;
        this.winningBidPoints = fields.winningBidPoints;
        ;
        this.newBuzzesCount = fields.newBuzzesCount;
        ;
        this.firstRankAssetsLimit = fields.firstRankAssetsLimit;
        ;
        this.secondRankAssetsLimit = fields.secondRankAssetsLimit;
        ;
        this.thirdRankAssetsLimit = fields.thirdRankAssetsLimit;
        ;
        this.maxStreamsToStore = fields.maxStreamsToStore;
    }
    static reified() { return { typeName: StreamBuzzesConfigUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(StreamBuzzesConfigUpdated.$typeName, ...[]), typeArgs: [], isPhantom: StreamBuzzesConfigUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StreamBuzzesConfigUpdated.fromFields(fields), fromFieldsWithTypes: (item) => StreamBuzzesConfigUpdated.fromFieldsWithTypes(item), fromBcs: (data) => StreamBuzzesConfigUpdated.fromBcs(data), bcs: StreamBuzzesConfigUpdated.bcs, fromJSONField: (field) => StreamBuzzesConfigUpdated.fromJSONField(field), fromJSON: (json) => StreamBuzzesConfigUpdated.fromJSON(json), fromSuiParsedData: (content) => StreamBuzzesConfigUpdated.fromSuiParsedData(content), fetch: async (client, id) => StreamBuzzesConfigUpdated.fetch(client, id), new: (fields) => { return new StreamBuzzesConfigUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StreamBuzzesConfigUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(StreamBuzzesConfigUpdated.reified()); }
    static get p() { return StreamBuzzesConfigUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StreamBuzzesConfigUpdated", {
            are_live: bcs_1.bcs.bool(), hive_per_ad_slot: bcs_1.bcs.u64(), bees_per_ad_slot: bcs_1.bcs.u64(), tax_on_bid: bcs_1.bcs.u64(), cur_auction_stream: bcs_1.bcs.u64(), winning_bid_points: bcs_1.bcs.u64(), new_buzzes_count: bcs_1.bcs.u64(), first_rank_assets_limit: bcs_1.bcs.u64(), second_rank_assets_limit: bcs_1.bcs.u64(), third_rank_assets_limit: bcs_1.bcs.u64(), max_streams_to_store: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return StreamBuzzesConfigUpdated.reified().new({ areLive: (0, reified_1.decodeFromFields)("bool", fields.are_live), hivePerAdSlot: (0, reified_1.decodeFromFields)("u64", fields.hive_per_ad_slot), beesPerAdSlot: (0, reified_1.decodeFromFields)("u64", fields.bees_per_ad_slot), taxOnBid: (0, reified_1.decodeFromFields)("u64", fields.tax_on_bid), curAuctionStream: (0, reified_1.decodeFromFields)("u64", fields.cur_auction_stream), winningBidPoints: (0, reified_1.decodeFromFields)("u64", fields.winning_bid_points), newBuzzesCount: (0, reified_1.decodeFromFields)("u64", fields.new_buzzes_count), firstRankAssetsLimit: (0, reified_1.decodeFromFields)("u64", fields.first_rank_assets_limit), secondRankAssetsLimit: (0, reified_1.decodeFromFields)("u64", fields.second_rank_assets_limit), thirdRankAssetsLimit: (0, reified_1.decodeFromFields)("u64", fields.third_rank_assets_limit), maxStreamsToStore: (0, reified_1.decodeFromFields)("u64", fields.max_streams_to_store) }); }
    static fromFieldsWithTypes(item) {
        if (!isStreamBuzzesConfigUpdated(item.type)) {
            throw new Error("not a StreamBuzzesConfigUpdated type");
        }
        return StreamBuzzesConfigUpdated.reified().new({ areLive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.are_live), hivePerAdSlot: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_per_ad_slot), beesPerAdSlot: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_per_ad_slot), taxOnBid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tax_on_bid), curAuctionStream: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_auction_stream), winningBidPoints: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.winning_bid_points), newBuzzesCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_buzzes_count), firstRankAssetsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.first_rank_assets_limit), secondRankAssetsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.second_rank_assets_limit), thirdRankAssetsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.third_rank_assets_limit), maxStreamsToStore: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_streams_to_store) });
    }
    static fromBcs(data) { return StreamBuzzesConfigUpdated.fromFields(StreamBuzzesConfigUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            areLive: this.areLive, hivePerAdSlot: this.hivePerAdSlot.toString(), beesPerAdSlot: this.beesPerAdSlot.toString(), taxOnBid: this.taxOnBid.toString(), curAuctionStream: this.curAuctionStream.toString(), winningBidPoints: this.winningBidPoints.toString(), newBuzzesCount: this.newBuzzesCount.toString(), firstRankAssetsLimit: this.firstRankAssetsLimit.toString(), secondRankAssetsLimit: this.secondRankAssetsLimit.toString(), thirdRankAssetsLimit: this.thirdRankAssetsLimit.toString(), maxStreamsToStore: this.maxStreamsToStore.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StreamBuzzesConfigUpdated.reified().new({ areLive: (0, reified_1.decodeFromJSONField)("bool", field.areLive), hivePerAdSlot: (0, reified_1.decodeFromJSONField)("u64", field.hivePerAdSlot), beesPerAdSlot: (0, reified_1.decodeFromJSONField)("u64", field.beesPerAdSlot), taxOnBid: (0, reified_1.decodeFromJSONField)("u64", field.taxOnBid), curAuctionStream: (0, reified_1.decodeFromJSONField)("u64", field.curAuctionStream), winningBidPoints: (0, reified_1.decodeFromJSONField)("u64", field.winningBidPoints), newBuzzesCount: (0, reified_1.decodeFromJSONField)("u64", field.newBuzzesCount), firstRankAssetsLimit: (0, reified_1.decodeFromJSONField)("u64", field.firstRankAssetsLimit), secondRankAssetsLimit: (0, reified_1.decodeFromJSONField)("u64", field.secondRankAssetsLimit), thirdRankAssetsLimit: (0, reified_1.decodeFromJSONField)("u64", field.thirdRankAssetsLimit), maxStreamsToStore: (0, reified_1.decodeFromJSONField)("u64", field.maxStreamsToStore) }); }
    static fromJSON(json) {
        if (json.$typeName !== StreamBuzzesConfigUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StreamBuzzesConfigUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStreamBuzzesConfigUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StreamBuzzesConfigUpdated object`);
    } return StreamBuzzesConfigUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StreamBuzzesConfigUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStreamBuzzesConfigUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StreamBuzzesConfigUpdated object`);
        }
        return StreamBuzzesConfigUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StreamBuzzesConfigUpdated = StreamBuzzesConfigUpdated;
StreamBuzzesConfigUpdated.$typeName = `${index_1.PKG_V1}::hive::StreamBuzzesConfigUpdated`;
StreamBuzzesConfigUpdated.$numTypeParams = 0;
StreamBuzzesConfigUpdated.$isPhantom = [];
/* ============================== StreamDeleted =============================== */
function isStreamDeleted(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::StreamDeleted`; }
class StreamDeleted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StreamDeleted.$typeName;
        this.$isPhantom = StreamDeleted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StreamDeleted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.streamIndex = fields.streamIndex;
        ;
        this.streamLength = fields.streamLength;
    }
    static reified() { return { typeName: StreamDeleted.$typeName, fullTypeName: (0, util_1.composeSuiType)(StreamDeleted.$typeName, ...[]), typeArgs: [], isPhantom: StreamDeleted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StreamDeleted.fromFields(fields), fromFieldsWithTypes: (item) => StreamDeleted.fromFieldsWithTypes(item), fromBcs: (data) => StreamDeleted.fromBcs(data), bcs: StreamDeleted.bcs, fromJSONField: (field) => StreamDeleted.fromJSONField(field), fromJSON: (json) => StreamDeleted.fromJSON(json), fromSuiParsedData: (content) => StreamDeleted.fromSuiParsedData(content), fetch: async (client, id) => StreamDeleted.fetch(client, id), new: (fields) => { return new StreamDeleted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StreamDeleted.reified(); }
    static phantom() { return (0, reified_1.phantom)(StreamDeleted.reified()); }
    static get p() { return StreamDeleted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StreamDeleted", {
            stream_index: bcs_1.bcs.u64(), stream_length: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return StreamDeleted.reified().new({ streamIndex: (0, reified_1.decodeFromFields)("u64", fields.stream_index), streamLength: (0, reified_1.decodeFromFields)("u64", fields.stream_length) }); }
    static fromFieldsWithTypes(item) {
        if (!isStreamDeleted(item.type)) {
            throw new Error("not a StreamDeleted type");
        }
        return StreamDeleted.reified().new({ streamIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_index), streamLength: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_length) });
    }
    static fromBcs(data) { return StreamDeleted.fromFields(StreamDeleted.bcs.parse(data)); }
    toJSONField() {
        return {
            streamIndex: this.streamIndex.toString(), streamLength: this.streamLength.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StreamDeleted.reified().new({ streamIndex: (0, reified_1.decodeFromJSONField)("u64", field.streamIndex), streamLength: (0, reified_1.decodeFromJSONField)("u64", field.streamLength) }); }
    static fromJSON(json) {
        if (json.$typeName !== StreamDeleted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StreamDeleted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStreamDeleted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StreamDeleted object`);
    } return StreamDeleted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StreamDeleted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStreamDeleted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StreamDeleted object`);
        }
        return StreamDeleted.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StreamDeleted = StreamDeleted;
StreamDeleted.$typeName = `${index_1.PKG_V1}::hive::StreamDeleted`;
StreamDeleted.$numTypeParams = 0;
StreamDeleted.$isPhantom = [];
/* ============================== StreamPointsFinalizedForProfile =============================== */
function isStreamPointsFinalizedForProfile(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::StreamPointsFinalizedForProfile`; }
class StreamPointsFinalizedForProfile {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StreamPointsFinalizedForProfile.$typeName;
        this.$isPhantom = StreamPointsFinalizedForProfile.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StreamPointsFinalizedForProfile.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.fromStream = fields.fromStream;
        ;
        this.points = fields.points;
        ;
        this.pointsFromBid = fields.pointsFromBid;
        ;
        this.totalPoints = fields.totalPoints;
        ;
        this.hiveEarned = fields.hiveEarned;
        ;
        this.beesEarned = fields.beesEarned;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: StreamPointsFinalizedForProfile.$typeName, fullTypeName: (0, util_1.composeSuiType)(StreamPointsFinalizedForProfile.$typeName, ...[]), typeArgs: [], isPhantom: StreamPointsFinalizedForProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StreamPointsFinalizedForProfile.fromFields(fields), fromFieldsWithTypes: (item) => StreamPointsFinalizedForProfile.fromFieldsWithTypes(item), fromBcs: (data) => StreamPointsFinalizedForProfile.fromBcs(data), bcs: StreamPointsFinalizedForProfile.bcs, fromJSONField: (field) => StreamPointsFinalizedForProfile.fromJSONField(field), fromJSON: (json) => StreamPointsFinalizedForProfile.fromJSON(json), fromSuiParsedData: (content) => StreamPointsFinalizedForProfile.fromSuiParsedData(content), fetch: async (client, id) => StreamPointsFinalizedForProfile.fetch(client, id), new: (fields) => { return new StreamPointsFinalizedForProfile([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StreamPointsFinalizedForProfile.reified(); }
    static phantom() { return (0, reified_1.phantom)(StreamPointsFinalizedForProfile.reified()); }
    static get p() { return StreamPointsFinalizedForProfile.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StreamPointsFinalizedForProfile", {
            profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_2.String.bcs, from_stream: bcs_1.bcs.u64(), points: bcs_1.bcs.u64(), points_from_bid: bcs_1.bcs.u64(), total_points: bcs_1.bcs.u64(), hive_earned: bcs_1.bcs.u64(), bees_earned: bcs_1.bcs.u64(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return StreamPointsFinalizedForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.username), fromStream: (0, reified_1.decodeFromFields)("u64", fields.from_stream), points: (0, reified_1.decodeFromFields)("u64", fields.points), pointsFromBid: (0, reified_1.decodeFromFields)("u64", fields.points_from_bid), totalPoints: (0, reified_1.decodeFromFields)("u64", fields.total_points), hiveEarned: (0, reified_1.decodeFromFields)("u64", fields.hive_earned), beesEarned: (0, reified_1.decodeFromFields)("u64", fields.bees_earned), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isStreamPointsFinalizedForProfile(item.type)) {
            throw new Error("not a StreamPointsFinalizedForProfile type");
        }
        return StreamPointsFinalizedForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.username), fromStream: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.from_stream), points: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.points), pointsFromBid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.points_from_bid), totalPoints: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_points), hiveEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_earned), beesEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_earned), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return StreamPointsFinalizedForProfile.fromFields(StreamPointsFinalizedForProfile.bcs.parse(data)); }
    toJSONField() {
        return {
            profileAddr: this.profileAddr, username: this.username, fromStream: this.fromStream.toString(), points: this.points.toString(), pointsFromBid: this.pointsFromBid.toString(), totalPoints: this.totalPoints.toString(), hiveEarned: this.hiveEarned.toString(), beesEarned: this.beesEarned.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StreamPointsFinalizedForProfile.reified().new({ profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.username), fromStream: (0, reified_1.decodeFromJSONField)("u64", field.fromStream), points: (0, reified_1.decodeFromJSONField)("u64", field.points), pointsFromBid: (0, reified_1.decodeFromJSONField)("u64", field.pointsFromBid), totalPoints: (0, reified_1.decodeFromJSONField)("u64", field.totalPoints), hiveEarned: (0, reified_1.decodeFromJSONField)("u64", field.hiveEarned), beesEarned: (0, reified_1.decodeFromJSONField)("u64", field.beesEarned), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== StreamPointsFinalizedForProfile.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StreamPointsFinalizedForProfile.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStreamPointsFinalizedForProfile(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StreamPointsFinalizedForProfile object`);
    } return StreamPointsFinalizedForProfile.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StreamPointsFinalizedForProfile object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStreamPointsFinalizedForProfile(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StreamPointsFinalizedForProfile object`);
        }
        return StreamPointsFinalizedForProfile.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StreamPointsFinalizedForProfile = StreamPointsFinalizedForProfile;
StreamPointsFinalizedForProfile.$typeName = `${index_1.PKG_V1}::hive::StreamPointsFinalizedForProfile`;
StreamPointsFinalizedForProfile.$numTypeParams = 0;
StreamPointsFinalizedForProfile.$isPhantom = [];
/* ============================== StreamerBuzzes =============================== */
function isStreamerBuzzes(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V1}::hive::StreamerBuzzes` + '<'); }
class StreamerBuzzes {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StreamerBuzzes.$typeName;
        this.$isPhantom = StreamerBuzzes.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StreamerBuzzes.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.areLive = fields.areLive;
        ;
        this.config = fields.config;
        ;
        this.curAuctionStream = fields.curAuctionStream;
        ;
        this.streamInitMs = fields.streamInitMs;
        ;
        this.streamerBuzzes = fields.streamerBuzzes;
        ;
        this.streamersInfo = fields.streamersInfo;
        ;
        this.suiForStream = fields.suiForStream;
        ;
        this.engagementScores = fields.engagementScores;
        ;
        this.bidPool = fields.bidPool;
        ;
        this.leadingBids = fields.leadingBids;
        ;
        this.suiAvailForPol = fields.suiAvailForPol;
        ;
        this.isIncrementing = fields.isIncrementing;
    }
    static reified(X) { return { typeName: StreamerBuzzes.$typeName, fullTypeName: (0, util_1.composeSuiType)(StreamerBuzzes.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: StreamerBuzzes.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => StreamerBuzzes.fromFields(X, fields), fromFieldsWithTypes: (item) => StreamerBuzzes.fromFieldsWithTypes(X, item), fromBcs: (data) => StreamerBuzzes.fromBcs(X, data), bcs: StreamerBuzzes.bcs, fromJSONField: (field) => StreamerBuzzes.fromJSONField(X, field), fromJSON: (json) => StreamerBuzzes.fromJSON(X, json), fromSuiParsedData: (content) => StreamerBuzzes.fromSuiParsedData(X, content), fetch: async (client, id) => StreamerBuzzes.fetch(client, X, id), new: (fields) => { return new StreamerBuzzes([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return StreamerBuzzes.reified; }
    static phantom(X) { return (0, reified_1.phantom)(StreamerBuzzes.reified(X)); }
    static get p() { return StreamerBuzzes.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("StreamerBuzzes", {
            id: structs_6.UID.bcs, are_live: bcs_1.bcs.bool(), config: StreamerConfig.bcs, cur_auction_stream: bcs_1.bcs.u64(), stream_init_ms: bcs_1.bcs.u64(), streamer_buzzes: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), streamers_info: CurrentStreamersInfo.bcs, sui_for_stream: structs_3.Balance.bcs, engagement_scores: EngagementScores.bcs, bid_pool: structs_3.Balance.bcs, leading_bids: LeadingBidsInfo.bcs, sui_avail_for_pol: structs_3.Balance.bcs, is_incrementing: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return StreamerBuzzes.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), areLive: (0, reified_1.decodeFromFields)("bool", fields.are_live), config: (0, reified_1.decodeFromFields)(StreamerConfig.reified(), fields.config), curAuctionStream: (0, reified_1.decodeFromFields)("u64", fields.cur_auction_stream), streamInitMs: (0, reified_1.decodeFromFields)("u64", fields.stream_init_ms), streamerBuzzes: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(StreamBuzz.reified(typeArg)))), fields.streamer_buzzes), streamersInfo: (0, reified_1.decodeFromFields)(CurrentStreamersInfo.reified(), fields.streamers_info), suiForStream: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArg), fields.sui_for_stream), engagementScores: (0, reified_1.decodeFromFields)(EngagementScores.reified(), fields.engagement_scores), bidPool: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArg), fields.bid_pool), leadingBids: (0, reified_1.decodeFromFields)(LeadingBidsInfo.reified(), fields.leading_bids), suiAvailForPol: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArg), fields.sui_avail_for_pol), isIncrementing: (0, reified_1.decodeFromFields)("bool", fields.is_incrementing) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isStreamerBuzzes(item.type)) {
            throw new Error("not a StreamerBuzzes type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return StreamerBuzzes.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), areLive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.are_live), config: (0, reified_1.decodeFromFieldsWithTypes)(StreamerConfig.reified(), item.fields.config), curAuctionStream: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_auction_stream), streamInitMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_init_ms), streamerBuzzes: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(StreamBuzz.reified(typeArg)))), item.fields.streamer_buzzes), streamersInfo: (0, reified_1.decodeFromFieldsWithTypes)(CurrentStreamersInfo.reified(), item.fields.streamers_info), suiForStream: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArg), item.fields.sui_for_stream), engagementScores: (0, reified_1.decodeFromFieldsWithTypes)(EngagementScores.reified(), item.fields.engagement_scores), bidPool: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArg), item.fields.bid_pool), leadingBids: (0, reified_1.decodeFromFieldsWithTypes)(LeadingBidsInfo.reified(), item.fields.leading_bids), suiAvailForPol: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArg), item.fields.sui_avail_for_pol), isIncrementing: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_incrementing) });
    }
    static fromBcs(typeArg, data) { return StreamerBuzzes.fromFields(typeArg, StreamerBuzzes.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, areLive: this.areLive, config: this.config.toJSONField(), curAuctionStream: this.curAuctionStream.toString(), streamInitMs: this.streamInitMs.toString(), streamerBuzzes: this.streamerBuzzes.toJSONField(), streamersInfo: this.streamersInfo.toJSONField(), suiForStream: this.suiForStream.toJSONField(), engagementScores: this.engagementScores.toJSONField(), bidPool: this.bidPool.toJSONField(), leadingBids: this.leadingBids.toJSONField(), suiAvailForPol: this.suiAvailForPol.toJSONField(), isIncrementing: this.isIncrementing,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return StreamerBuzzes.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), areLive: (0, reified_1.decodeFromJSONField)("bool", field.areLive), config: (0, reified_1.decodeFromJSONField)(StreamerConfig.reified(), field.config), curAuctionStream: (0, reified_1.decodeFromJSONField)("u64", field.curAuctionStream), streamInitMs: (0, reified_1.decodeFromJSONField)("u64", field.streamInitMs), streamerBuzzes: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(reified.vector(StreamBuzz.reified(typeArg)))), field.streamerBuzzes), streamersInfo: (0, reified_1.decodeFromJSONField)(CurrentStreamersInfo.reified(), field.streamersInfo), suiForStream: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArg), field.suiForStream), engagementScores: (0, reified_1.decodeFromJSONField)(EngagementScores.reified(), field.engagementScores), bidPool: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArg), field.bidPool), leadingBids: (0, reified_1.decodeFromJSONField)(LeadingBidsInfo.reified(), field.leadingBids), suiAvailForPol: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArg), field.suiAvailForPol), isIncrementing: (0, reified_1.decodeFromJSONField)("bool", field.isIncrementing) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== StreamerBuzzes.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(StreamerBuzzes.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return StreamerBuzzes.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStreamerBuzzes(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StreamerBuzzes object`);
    } return StreamerBuzzes.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StreamerBuzzes object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStreamerBuzzes(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StreamerBuzzes object`);
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
        return StreamerBuzzes.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StreamerBuzzes = StreamerBuzzes;
StreamerBuzzes.$typeName = `${index_1.PKG_V1}::hive::StreamerBuzzes`;
StreamerBuzzes.$numTypeParams = 1;
StreamerBuzzes.$isPhantom = [true,];
/* ============================== StreamerConfig =============================== */
function isStreamerConfig(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::StreamerConfig`; }
class StreamerConfig {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StreamerConfig.$typeName;
        this.$isPhantom = StreamerConfig.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StreamerConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.choosenBuzzesCount = fields.choosenBuzzesCount;
        ;
        this.winningBidPoints = fields.winningBidPoints;
        ;
        this.firstRankAssetsLimit = fields.firstRankAssetsLimit;
        ;
        this.secondRankAssetsLimit = fields.secondRankAssetsLimit;
        ;
        this.thirdRankAssetsLimit = fields.thirdRankAssetsLimit;
        ;
        this.maxStreamsToStore = fields.maxStreamsToStore;
        ;
        this.minBidLimit = fields.minBidLimit;
        ;
        this.taxOnBid = fields.taxOnBid;
    }
    static reified() { return { typeName: StreamerConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(StreamerConfig.$typeName, ...[]), typeArgs: [], isPhantom: StreamerConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StreamerConfig.fromFields(fields), fromFieldsWithTypes: (item) => StreamerConfig.fromFieldsWithTypes(item), fromBcs: (data) => StreamerConfig.fromBcs(data), bcs: StreamerConfig.bcs, fromJSONField: (field) => StreamerConfig.fromJSONField(field), fromJSON: (json) => StreamerConfig.fromJSON(json), fromSuiParsedData: (content) => StreamerConfig.fromSuiParsedData(content), fetch: async (client, id) => StreamerConfig.fetch(client, id), new: (fields) => { return new StreamerConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StreamerConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(StreamerConfig.reified()); }
    static get p() { return StreamerConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StreamerConfig", {
            choosen_buzzes_count: bcs_1.bcs.u64(), winning_bid_points: bcs_1.bcs.u64(), first_rank_assets_limit: bcs_1.bcs.u64(), second_rank_assets_limit: bcs_1.bcs.u64(), third_rank_assets_limit: bcs_1.bcs.u64(), max_streams_to_store: bcs_1.bcs.u64(), min_bid_limit: bcs_1.bcs.u64(), tax_on_bid: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return StreamerConfig.reified().new({ choosenBuzzesCount: (0, reified_1.decodeFromFields)("u64", fields.choosen_buzzes_count), winningBidPoints: (0, reified_1.decodeFromFields)("u64", fields.winning_bid_points), firstRankAssetsLimit: (0, reified_1.decodeFromFields)("u64", fields.first_rank_assets_limit), secondRankAssetsLimit: (0, reified_1.decodeFromFields)("u64", fields.second_rank_assets_limit), thirdRankAssetsLimit: (0, reified_1.decodeFromFields)("u64", fields.third_rank_assets_limit), maxStreamsToStore: (0, reified_1.decodeFromFields)("u64", fields.max_streams_to_store), minBidLimit: (0, reified_1.decodeFromFields)("u64", fields.min_bid_limit), taxOnBid: (0, reified_1.decodeFromFields)("u64", fields.tax_on_bid) }); }
    static fromFieldsWithTypes(item) {
        if (!isStreamerConfig(item.type)) {
            throw new Error("not a StreamerConfig type");
        }
        return StreamerConfig.reified().new({ choosenBuzzesCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.choosen_buzzes_count), winningBidPoints: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.winning_bid_points), firstRankAssetsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.first_rank_assets_limit), secondRankAssetsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.second_rank_assets_limit), thirdRankAssetsLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.third_rank_assets_limit), maxStreamsToStore: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_streams_to_store), minBidLimit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_bid_limit), taxOnBid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tax_on_bid) });
    }
    static fromBcs(data) { return StreamerConfig.fromFields(StreamerConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            choosenBuzzesCount: this.choosenBuzzesCount.toString(), winningBidPoints: this.winningBidPoints.toString(), firstRankAssetsLimit: this.firstRankAssetsLimit.toString(), secondRankAssetsLimit: this.secondRankAssetsLimit.toString(), thirdRankAssetsLimit: this.thirdRankAssetsLimit.toString(), maxStreamsToStore: this.maxStreamsToStore.toString(), minBidLimit: this.minBidLimit.toString(), taxOnBid: this.taxOnBid.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StreamerConfig.reified().new({ choosenBuzzesCount: (0, reified_1.decodeFromJSONField)("u64", field.choosenBuzzesCount), winningBidPoints: (0, reified_1.decodeFromJSONField)("u64", field.winningBidPoints), firstRankAssetsLimit: (0, reified_1.decodeFromJSONField)("u64", field.firstRankAssetsLimit), secondRankAssetsLimit: (0, reified_1.decodeFromJSONField)("u64", field.secondRankAssetsLimit), thirdRankAssetsLimit: (0, reified_1.decodeFromJSONField)("u64", field.thirdRankAssetsLimit), maxStreamsToStore: (0, reified_1.decodeFromJSONField)("u64", field.maxStreamsToStore), minBidLimit: (0, reified_1.decodeFromJSONField)("u64", field.minBidLimit), taxOnBid: (0, reified_1.decodeFromJSONField)("u64", field.taxOnBid) }); }
    static fromJSON(json) {
        if (json.$typeName !== StreamerConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StreamerConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStreamerConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StreamerConfig object`);
    } return StreamerConfig.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StreamerConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStreamerConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StreamerConfig object`);
        }
        return StreamerConfig.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StreamerConfig = StreamerConfig;
StreamerConfig.$typeName = `${index_1.PKG_V1}::hive::StreamerConfig`;
StreamerConfig.$numTypeParams = 0;
StreamerConfig.$isPhantom = [];
/* ============================== StreamerInfo =============================== */
function isStreamerInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::StreamerInfo`; }
class StreamerInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StreamerInfo.$typeName;
        this.$isPhantom = StreamerInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StreamerInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.streamerName = fields.streamerName;
        ;
        this.streamsCount = fields.streamsCount;
        ;
        this.accessType = fields.accessType;
        ;
        this.suiPerBuzz = fields.suiPerBuzz;
        ;
        this.buzzCostInHive = fields.buzzCostInHive;
        ;
        this.remainingBuzzesCount = fields.remainingBuzzesCount;
        ;
        this.engagementPoints = fields.engagementPoints;
        ;
        this.collectionName = fields.collectionName;
    }
    static reified() { return { typeName: StreamerInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(StreamerInfo.$typeName, ...[]), typeArgs: [], isPhantom: StreamerInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StreamerInfo.fromFields(fields), fromFieldsWithTypes: (item) => StreamerInfo.fromFieldsWithTypes(item), fromBcs: (data) => StreamerInfo.fromBcs(data), bcs: StreamerInfo.bcs, fromJSONField: (field) => StreamerInfo.fromJSONField(field), fromJSON: (json) => StreamerInfo.fromJSON(json), fromSuiParsedData: (content) => StreamerInfo.fromSuiParsedData(content), fetch: async (client, id) => StreamerInfo.fetch(client, id), new: (fields) => { return new StreamerInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StreamerInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(StreamerInfo.reified()); }
    static get p() { return StreamerInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StreamerInfo", {
            streamer_name: structs_1.Option.bcs(structs_2.String.bcs), streams_count: bcs_1.bcs.u64(), access_type: bcs_1.bcs.u8(), sui_per_buzz: bcs_1.bcs.u64(), buzz_cost_in_hive: bcs_1.bcs.u64(), remaining_buzzes_count: bcs_1.bcs.u64(), engagement_points: bcs_1.bcs.u128(), collection_name: structs_2.String.bcs
        });
    }
    ;
    static fromFields(fields) { return StreamerInfo.reified().new({ streamerName: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_2.String.reified()), fields.streamer_name), streamsCount: (0, reified_1.decodeFromFields)("u64", fields.streams_count), accessType: (0, reified_1.decodeFromFields)("u8", fields.access_type), suiPerBuzz: (0, reified_1.decodeFromFields)("u64", fields.sui_per_buzz), buzzCostInHive: (0, reified_1.decodeFromFields)("u64", fields.buzz_cost_in_hive), remainingBuzzesCount: (0, reified_1.decodeFromFields)("u64", fields.remaining_buzzes_count), engagementPoints: (0, reified_1.decodeFromFields)("u128", fields.engagement_points), collectionName: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.collection_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isStreamerInfo(item.type)) {
            throw new Error("not a StreamerInfo type");
        }
        return StreamerInfo.reified().new({ streamerName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_2.String.reified()), item.fields.streamer_name), streamsCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.streams_count), accessType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.access_type), suiPerBuzz: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_per_buzz), buzzCostInHive: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.buzz_cost_in_hive), remainingBuzzesCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.remaining_buzzes_count), engagementPoints: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.engagement_points), collectionName: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.collection_name) });
    }
    static fromBcs(data) { return StreamerInfo.fromFields(StreamerInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            streamerName: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_2.String.$typeName}>`, this.streamerName), streamsCount: this.streamsCount.toString(), accessType: this.accessType, suiPerBuzz: this.suiPerBuzz.toString(), buzzCostInHive: this.buzzCostInHive.toString(), remainingBuzzesCount: this.remainingBuzzesCount.toString(), engagementPoints: this.engagementPoints.toString(), collectionName: this.collectionName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StreamerInfo.reified().new({ streamerName: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_2.String.reified()), field.streamerName), streamsCount: (0, reified_1.decodeFromJSONField)("u64", field.streamsCount), accessType: (0, reified_1.decodeFromJSONField)("u8", field.accessType), suiPerBuzz: (0, reified_1.decodeFromJSONField)("u64", field.suiPerBuzz), buzzCostInHive: (0, reified_1.decodeFromJSONField)("u64", field.buzzCostInHive), remainingBuzzesCount: (0, reified_1.decodeFromJSONField)("u64", field.remainingBuzzesCount), engagementPoints: (0, reified_1.decodeFromJSONField)("u128", field.engagementPoints), collectionName: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.collectionName) }); }
    static fromJSON(json) {
        if (json.$typeName !== StreamerInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StreamerInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStreamerInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StreamerInfo object`);
    } return StreamerInfo.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StreamerInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStreamerInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StreamerInfo object`);
        }
        return StreamerInfo.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StreamerInfo = StreamerInfo;
StreamerInfo.$typeName = `${index_1.PKG_V1}::hive::StreamerInfo`;
StreamerInfo.$numTypeParams = 0;
StreamerInfo.$isPhantom = [];
/* ============================== StreamerNotFoundForStream =============================== */
function isStreamerNotFoundForStream(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::StreamerNotFoundForStream`; }
class StreamerNotFoundForStream {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StreamerNotFoundForStream.$typeName;
        this.$isPhantom = StreamerNotFoundForStream.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StreamerNotFoundForStream.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.curAuctionStream = fields.curAuctionStream;
        ;
        this.rank = fields.rank;
    }
    static reified() { return { typeName: StreamerNotFoundForStream.$typeName, fullTypeName: (0, util_1.composeSuiType)(StreamerNotFoundForStream.$typeName, ...[]), typeArgs: [], isPhantom: StreamerNotFoundForStream.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StreamerNotFoundForStream.fromFields(fields), fromFieldsWithTypes: (item) => StreamerNotFoundForStream.fromFieldsWithTypes(item), fromBcs: (data) => StreamerNotFoundForStream.fromBcs(data), bcs: StreamerNotFoundForStream.bcs, fromJSONField: (field) => StreamerNotFoundForStream.fromJSONField(field), fromJSON: (json) => StreamerNotFoundForStream.fromJSON(json), fromSuiParsedData: (content) => StreamerNotFoundForStream.fromSuiParsedData(content), fetch: async (client, id) => StreamerNotFoundForStream.fetch(client, id), new: (fields) => { return new StreamerNotFoundForStream([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StreamerNotFoundForStream.reified(); }
    static phantom() { return (0, reified_1.phantom)(StreamerNotFoundForStream.reified()); }
    static get p() { return StreamerNotFoundForStream.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StreamerNotFoundForStream", {
            cur_auction_stream: bcs_1.bcs.u64(), rank: bcs_1.bcs.u8()
        });
    }
    ;
    static fromFields(fields) { return StreamerNotFoundForStream.reified().new({ curAuctionStream: (0, reified_1.decodeFromFields)("u64", fields.cur_auction_stream), rank: (0, reified_1.decodeFromFields)("u8", fields.rank) }); }
    static fromFieldsWithTypes(item) {
        if (!isStreamerNotFoundForStream(item.type)) {
            throw new Error("not a StreamerNotFoundForStream type");
        }
        return StreamerNotFoundForStream.reified().new({ curAuctionStream: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_auction_stream), rank: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.rank) });
    }
    static fromBcs(data) { return StreamerNotFoundForStream.fromFields(StreamerNotFoundForStream.bcs.parse(data)); }
    toJSONField() {
        return {
            curAuctionStream: this.curAuctionStream.toString(), rank: this.rank,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StreamerNotFoundForStream.reified().new({ curAuctionStream: (0, reified_1.decodeFromJSONField)("u64", field.curAuctionStream), rank: (0, reified_1.decodeFromJSONField)("u8", field.rank) }); }
    static fromJSON(json) {
        if (json.$typeName !== StreamerNotFoundForStream.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StreamerNotFoundForStream.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStreamerNotFoundForStream(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StreamerNotFoundForStream object`);
    } return StreamerNotFoundForStream.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StreamerNotFoundForStream object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStreamerNotFoundForStream(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StreamerNotFoundForStream object`);
        }
        return StreamerNotFoundForStream.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StreamerNotFoundForStream = StreamerNotFoundForStream;
StreamerNotFoundForStream.$typeName = `${index_1.PKG_V1}::hive::StreamerNotFoundForStream`;
StreamerNotFoundForStream.$numTypeParams = 0;
StreamerNotFoundForStream.$isPhantom = [];
/* ============================== UserBidExpired =============================== */
function isUserBidExpired(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::UserBidExpired`; }
class UserBidExpired {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UserBidExpired.$typeName;
        this.$isPhantom = UserBidExpired.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserBidExpired.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bidderProfile = fields.bidderProfile;
        ;
        this.username = fields.username;
        ;
        this.bidAmt = fields.bidAmt;
        ;
        this.taxOnBid = fields.taxOnBid;
        ;
        this.bidEpochStream = fields.bidEpochStream;
    }
    static reified() { return { typeName: UserBidExpired.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserBidExpired.$typeName, ...[]), typeArgs: [], isPhantom: UserBidExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserBidExpired.fromFields(fields), fromFieldsWithTypes: (item) => UserBidExpired.fromFieldsWithTypes(item), fromBcs: (data) => UserBidExpired.fromBcs(data), bcs: UserBidExpired.bcs, fromJSONField: (field) => UserBidExpired.fromJSONField(field), fromJSON: (json) => UserBidExpired.fromJSON(json), fromSuiParsedData: (content) => UserBidExpired.fromSuiParsedData(content), fetch: async (client, id) => UserBidExpired.fetch(client, id), new: (fields) => { return new UserBidExpired([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserBidExpired.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserBidExpired.reified()); }
    static get p() { return UserBidExpired.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserBidExpired", {
            bidder_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_2.String.bcs, bid_amt: bcs_1.bcs.u64(), tax_on_bid: bcs_1.bcs.u64(), bid_epoch_stream: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UserBidExpired.reified().new({ bidderProfile: (0, reified_1.decodeFromFields)("address", fields.bidder_profile), username: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.username), bidAmt: (0, reified_1.decodeFromFields)("u64", fields.bid_amt), taxOnBid: (0, reified_1.decodeFromFields)("u64", fields.tax_on_bid), bidEpochStream: (0, reified_1.decodeFromFields)("u64", fields.bid_epoch_stream) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserBidExpired(item.type)) {
            throw new Error("not a UserBidExpired type");
        }
        return UserBidExpired.reified().new({ bidderProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bidder_profile), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.username), bidAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_amt), taxOnBid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tax_on_bid), bidEpochStream: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bid_epoch_stream) });
    }
    static fromBcs(data) { return UserBidExpired.fromFields(UserBidExpired.bcs.parse(data)); }
    toJSONField() {
        return {
            bidderProfile: this.bidderProfile, username: this.username, bidAmt: this.bidAmt.toString(), taxOnBid: this.taxOnBid.toString(), bidEpochStream: this.bidEpochStream.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserBidExpired.reified().new({ bidderProfile: (0, reified_1.decodeFromJSONField)("address", field.bidderProfile), username: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.username), bidAmt: (0, reified_1.decodeFromJSONField)("u64", field.bidAmt), taxOnBid: (0, reified_1.decodeFromJSONField)("u64", field.taxOnBid), bidEpochStream: (0, reified_1.decodeFromJSONField)("u64", field.bidEpochStream) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserBidExpired.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserBidExpired.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserBidExpired(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserBidExpired object`);
    } return UserBidExpired.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserBidExpired object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserBidExpired(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserBidExpired object`);
        }
        return UserBidExpired.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserBidExpired = UserBidExpired;
UserBidExpired.$typeName = `${index_1.PKG_V1}::hive::UserBidExpired`;
UserBidExpired.$numTypeParams = 0;
UserBidExpired.$isPhantom = [];
/* ============================== UserLikedStreamBuzz =============================== */
function isUserLikedStreamBuzz(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::UserLikedStreamBuzz`; }
class UserLikedStreamBuzz {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UserLikedStreamBuzz.$typeName;
        this.$isPhantom = UserLikedStreamBuzz.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserLikedStreamBuzz.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.userProfileAddr = fields.userProfileAddr;
        ;
        this.username = fields.username;
        ;
        this.streamIndex = fields.streamIndex;
        ;
        this.streamInnerIndex = fields.streamInnerIndex;
        ;
        this.streamerProfile = fields.streamerProfile;
        ;
        this.engagementPoints = fields.engagementPoints;
    }
    static reified() { return { typeName: UserLikedStreamBuzz.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserLikedStreamBuzz.$typeName, ...[]), typeArgs: [], isPhantom: UserLikedStreamBuzz.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserLikedStreamBuzz.fromFields(fields), fromFieldsWithTypes: (item) => UserLikedStreamBuzz.fromFieldsWithTypes(item), fromBcs: (data) => UserLikedStreamBuzz.fromBcs(data), bcs: UserLikedStreamBuzz.bcs, fromJSONField: (field) => UserLikedStreamBuzz.fromJSONField(field), fromJSON: (json) => UserLikedStreamBuzz.fromJSON(json), fromSuiParsedData: (content) => UserLikedStreamBuzz.fromSuiParsedData(content), fetch: async (client, id) => UserLikedStreamBuzz.fetch(client, id), new: (fields) => { return new UserLikedStreamBuzz([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserLikedStreamBuzz.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserLikedStreamBuzz.reified()); }
    static get p() { return UserLikedStreamBuzz.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserLikedStreamBuzz", {
            user_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), username: structs_2.String.bcs, stream_index: bcs_1.bcs.u64(), stream_inner_index: bcs_1.bcs.u64(), streamer_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), engagement_points: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return UserLikedStreamBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromFields)("address", fields.user_profile_addr), username: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.username), streamIndex: (0, reified_1.decodeFromFields)("u64", fields.stream_index), streamInnerIndex: (0, reified_1.decodeFromFields)("u64", fields.stream_inner_index), streamerProfile: (0, reified_1.decodeFromFields)("address", fields.streamer_profile), engagementPoints: (0, reified_1.decodeFromFields)("u128", fields.engagement_points) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserLikedStreamBuzz(item.type)) {
            throw new Error("not a UserLikedStreamBuzz type");
        }
        return UserLikedStreamBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user_profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.username), streamIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_index), streamInnerIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_inner_index), streamerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.streamer_profile), engagementPoints: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.engagement_points) });
    }
    static fromBcs(data) { return UserLikedStreamBuzz.fromFields(UserLikedStreamBuzz.bcs.parse(data)); }
    toJSONField() {
        return {
            userProfileAddr: this.userProfileAddr, username: this.username, streamIndex: this.streamIndex.toString(), streamInnerIndex: this.streamInnerIndex.toString(), streamerProfile: this.streamerProfile, engagementPoints: this.engagementPoints.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserLikedStreamBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.userProfileAddr), username: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.username), streamIndex: (0, reified_1.decodeFromJSONField)("u64", field.streamIndex), streamInnerIndex: (0, reified_1.decodeFromJSONField)("u64", field.streamInnerIndex), streamerProfile: (0, reified_1.decodeFromJSONField)("address", field.streamerProfile), engagementPoints: (0, reified_1.decodeFromJSONField)("u128", field.engagementPoints) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserLikedStreamBuzz.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserLikedStreamBuzz.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserLikedStreamBuzz(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserLikedStreamBuzz object`);
    } return UserLikedStreamBuzz.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserLikedStreamBuzz object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserLikedStreamBuzz(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserLikedStreamBuzz object`);
        }
        return UserLikedStreamBuzz.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserLikedStreamBuzz = UserLikedStreamBuzz;
UserLikedStreamBuzz.$typeName = `${index_1.PKG_V1}::hive::UserLikedStreamBuzz`;
UserLikedStreamBuzz.$numTypeParams = 0;
UserLikedStreamBuzz.$isPhantom = [];
/* ============================== UserUpvotedHiveBuzz =============================== */
function isUserUpvotedHiveBuzz(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::hive::UserUpvotedHiveBuzz`; }
class UserUpvotedHiveBuzz {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UserUpvotedHiveBuzz.$typeName;
        this.$isPhantom = UserUpvotedHiveBuzz.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserUpvotedHiveBuzz.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.upvotedByProfileAddr = fields.upvotedByProfileAddr;
        ;
        this.upvotedByUsername = fields.upvotedByUsername;
        ;
        this.streamIndex = fields.streamIndex;
        ;
        this.streamInnerIndex = fields.streamInnerIndex;
        ;
        this.hiveBuzzByProfile = fields.hiveBuzzByProfile;
        ;
        this.streamerProfile = fields.streamerProfile;
        ;
        this.engagementPoints = fields.engagementPoints;
    }
    static reified() { return { typeName: UserUpvotedHiveBuzz.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserUpvotedHiveBuzz.$typeName, ...[]), typeArgs: [], isPhantom: UserUpvotedHiveBuzz.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserUpvotedHiveBuzz.fromFields(fields), fromFieldsWithTypes: (item) => UserUpvotedHiveBuzz.fromFieldsWithTypes(item), fromBcs: (data) => UserUpvotedHiveBuzz.fromBcs(data), bcs: UserUpvotedHiveBuzz.bcs, fromJSONField: (field) => UserUpvotedHiveBuzz.fromJSONField(field), fromJSON: (json) => UserUpvotedHiveBuzz.fromJSON(json), fromSuiParsedData: (content) => UserUpvotedHiveBuzz.fromSuiParsedData(content), fetch: async (client, id) => UserUpvotedHiveBuzz.fetch(client, id), new: (fields) => { return new UserUpvotedHiveBuzz([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserUpvotedHiveBuzz.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserUpvotedHiveBuzz.reified()); }
    static get p() { return UserUpvotedHiveBuzz.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserUpvotedHiveBuzz", {
            upvoted_by_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), upvoted_by_username: structs_2.String.bcs, stream_index: bcs_1.bcs.u64(), stream_inner_index: bcs_1.bcs.u64(), hive_buzz_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), streamer_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), engagement_points: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return UserUpvotedHiveBuzz.reified().new({ upvotedByProfileAddr: (0, reified_1.decodeFromFields)("address", fields.upvoted_by_profile_addr), upvotedByUsername: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.upvoted_by_username), streamIndex: (0, reified_1.decodeFromFields)("u64", fields.stream_index), streamInnerIndex: (0, reified_1.decodeFromFields)("u64", fields.stream_inner_index), hiveBuzzByProfile: (0, reified_1.decodeFromFields)("address", fields.hive_buzz_by_profile), streamerProfile: (0, reified_1.decodeFromFields)("address", fields.streamer_profile), engagementPoints: (0, reified_1.decodeFromFields)("u128", fields.engagement_points) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserUpvotedHiveBuzz(item.type)) {
            throw new Error("not a UserUpvotedHiveBuzz type");
        }
        return UserUpvotedHiveBuzz.reified().new({ upvotedByProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.upvoted_by_profile_addr), upvotedByUsername: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.upvoted_by_username), streamIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_index), streamInnerIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stream_inner_index), hiveBuzzByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.hive_buzz_by_profile), streamerProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.streamer_profile), engagementPoints: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.engagement_points) });
    }
    static fromBcs(data) { return UserUpvotedHiveBuzz.fromFields(UserUpvotedHiveBuzz.bcs.parse(data)); }
    toJSONField() {
        return {
            upvotedByProfileAddr: this.upvotedByProfileAddr, upvotedByUsername: this.upvotedByUsername, streamIndex: this.streamIndex.toString(), streamInnerIndex: this.streamInnerIndex.toString(), hiveBuzzByProfile: this.hiveBuzzByProfile, streamerProfile: this.streamerProfile, engagementPoints: this.engagementPoints.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserUpvotedHiveBuzz.reified().new({ upvotedByProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.upvotedByProfileAddr), upvotedByUsername: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.upvotedByUsername), streamIndex: (0, reified_1.decodeFromJSONField)("u64", field.streamIndex), streamInnerIndex: (0, reified_1.decodeFromJSONField)("u64", field.streamInnerIndex), hiveBuzzByProfile: (0, reified_1.decodeFromJSONField)("address", field.hiveBuzzByProfile), streamerProfile: (0, reified_1.decodeFromJSONField)("address", field.streamerProfile), engagementPoints: (0, reified_1.decodeFromJSONField)("u128", field.engagementPoints) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserUpvotedHiveBuzz.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserUpvotedHiveBuzz.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserUpvotedHiveBuzz(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserUpvotedHiveBuzz object`);
    } return UserUpvotedHiveBuzz.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserUpvotedHiveBuzz object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserUpvotedHiveBuzz(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserUpvotedHiveBuzz object`);
        }
        return UserUpvotedHiveBuzz.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserUpvotedHiveBuzz = UserUpvotedHiveBuzz;
UserUpvotedHiveBuzz.$typeName = `${index_1.PKG_V1}::hive::UserUpvotedHiveBuzz`;
UserUpvotedHiveBuzz.$numTypeParams = 0;
UserUpvotedHiveBuzz.$isPhantom = [];
