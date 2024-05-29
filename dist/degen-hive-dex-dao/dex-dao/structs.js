"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalDeleted = exports.isProposalDeleted = exports.Proposal = exports.isProposal = exports.PoolsGovernorUpdated = exports.isPoolsGovernorUpdated = exports.PoolsGovernor = exports.isPoolsGovernor = exports.PoolHiveNecatarPointsUpdated = exports.isPoolHiveNecatarPointsUpdated = exports.PoolHiveKrafted = exports.isPoolHiveKrafted = exports.PoolHive = exports.isPoolHive = exports.PoolGovernorBuzzes = exports.isPoolGovernorBuzzes = exports.NewProposalKrafted = exports.isNewProposalKrafted = exports.NewGovernorBuzz = exports.isNewGovernorBuzz = exports.MoreFruitsAdded = exports.isMoreFruitsAdded = exports.LpBeeBox = exports.isLpBeeBox = exports.KraftedGemsForPoolHive = exports.isKraftedGemsForPoolHive = exports.GovernorBuzzDestroyed = exports.isGovernorBuzzDestroyed = exports.GovernorBuzz = exports.isGovernorBuzz = exports.GemsSetForNewHiveCycle = exports.isGemsSetForNewHiveCycle = exports.GemsSchedule = exports.isGemsSchedule = exports.GemsPerEpochUpdated = exports.isGemsPerEpochUpdated = exports.FruitLife = exports.isFruitLife = exports.Dialogues = exports.isDialogues = exports.Dialogue = exports.isDialogue = exports.BeeFruitKraftedForPoolHive = exports.isBeeFruitKraftedForPoolHive = exports.BeeFruitDestroyed = exports.isBeeFruitDestroyed = exports.BeeFruit = exports.isBeeFruit = exports.AddedToBeeBox = exports.isAddedToBeeBox = void 0;
exports.VoteConfig = exports.isVoteConfig = exports.VoteCasted = exports.isVoteCasted = exports.UserUpvotedGovernanceBuzz = exports.isUserUpvotedGovernanceBuzz = exports.UserUnLikedGovernorBuzz = exports.isUserUnLikedGovernorBuzz = exports.UserLikedGovernorBuzz = exports.isUserLikedGovernorBuzz = exports.UserBuzzOnGovernanceBuzzDetected = exports.isUserBuzzOnGovernanceBuzzDetected = exports.UnlockFromBeeBox = exports.isUnlockFromBeeBox = exports.UnbondingFromBeeBox = exports.isUnbondingFromBeeBox = exports.SystemBuzz = exports.isSystemBuzz = exports.RipeFruitsClaimed = exports.isRipeFruitsClaimed = exports.ProposalExecuted = exports.isProposalExecuted = exports.ProposalEvaluated = exports.isProposalEvaluated = void 0;
const reified = require("../../_framework/reified");
const structs_1 = require("../../_dependencies/source/0x0/hive-profile/structs");
const structs_2 = require("../../_dependencies/source/0x1/ascii/structs");
const structs_3 = require("../../_dependencies/source/0x1/option/structs");
const structs_4 = require("../../_dependencies/source/0x1/string/structs");
const structs_5 = require("../../_dependencies/source/0x1/type-name/structs");
const structs_6 = require("../../_dependencies/source/0x114d0f5a2b73e7b158263f0faea8c1ac51dffcab3a3626f9035633f52c5f9d6c/hive/structs");
const structs_7 = require("../../_dependencies/source/0x2/balance/structs");
const structs_8 = require("../../_dependencies/source/0x2/linked-table/structs");
const structs_9 = require("../../_dependencies/source/0x2/object/structs");
const structs_10 = require("../../_dependencies/source/0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc/config/structs");
const structs_11 = require("../../_dependencies/source/0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc/hive-gems/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== AddedToBeeBox =============================== */
function isAddedToBeeBox(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::AddedToBeeBox"; }
exports.isAddedToBeeBox = isAddedToBeeBox;
class AddedToBeeBox {
    constructor(typeArgs, fields) {
        this.$typeName = AddedToBeeBox.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AddedToBeeBox.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.username = fields.username;
        ;
        this.lpBalanceAdded = fields.lpBalanceAdded;
        ;
        this.hiveGemsEarned = fields.hiveGemsEarned;
        ;
        this.claimIndex = fields.claimIndex;
    }
    static reified() { return { typeName: AddedToBeeBox.$typeName, fullTypeName: (0, util_1.composeSuiType)(AddedToBeeBox.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AddedToBeeBox.fromFields(fields), fromFieldsWithTypes: (item) => AddedToBeeBox.fromFieldsWithTypes(item), fromBcs: (data) => AddedToBeeBox.fromBcs(data), bcs: AddedToBeeBox.bcs, fromJSONField: (field) => AddedToBeeBox.fromJSONField(field), fromJSON: (json) => AddedToBeeBox.fromJSON(json), fromSuiParsedData: (content) => AddedToBeeBox.fromSuiParsedData(content), fetch: async (client, id) => AddedToBeeBox.fetch(client, id), new: (fields) => { return new AddedToBeeBox([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AddedToBeeBox.reified(); }
    static phantom() { return (0, reified_1.phantom)(AddedToBeeBox.reified()); }
    static get p() { return AddedToBeeBox.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AddedToBeeBox", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_4.String.bcs, lp_balance_added: bcs_1.bcs.u64(), hive_gems_earned: bcs_1.bcs.u64(), claim_index: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(fields) { return AddedToBeeBox.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), username: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.username), lpBalanceAdded: (0, reified_1.decodeFromFields)("u64", fields.lp_balance_added), hiveGemsEarned: (0, reified_1.decodeFromFields)("u64", fields.hive_gems_earned), claimIndex: (0, reified_1.decodeFromFields)("u256", fields.claim_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isAddedToBeeBox(item.type)) {
            throw new Error("not a AddedToBeeBox type");
        }
        return AddedToBeeBox.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.username), lpBalanceAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_balance_added), hiveGemsEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_gems_earned), claimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.claim_index) });
    }
    static fromBcs(data) { return AddedToBeeBox.fromFields(AddedToBeeBox.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, profileAddr: this.profileAddr, username: this.username, lpBalanceAdded: this.lpBalanceAdded.toString(), hiveGemsEarned: this.hiveGemsEarned.toString(), claimIndex: this.claimIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AddedToBeeBox.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), username: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.username), lpBalanceAdded: (0, reified_1.decodeFromJSONField)("u64", field.lpBalanceAdded), hiveGemsEarned: (0, reified_1.decodeFromJSONField)("u64", field.hiveGemsEarned), claimIndex: (0, reified_1.decodeFromJSONField)("u256", field.claimIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== AddedToBeeBox.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddedToBeeBox.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddedToBeeBox(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AddedToBeeBox object`);
    } return AddedToBeeBox.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AddedToBeeBox object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddedToBeeBox(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddedToBeeBox object`);
        }
        return AddedToBeeBox.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AddedToBeeBox = AddedToBeeBox;
AddedToBeeBox.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::AddedToBeeBox";
AddedToBeeBox.$numTypeParams = 0;
/* ============================== BeeFruit =============================== */
function isBeeFruit(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruit<"); }
exports.isBeeFruit = isBeeFruit;
class BeeFruit {
    constructor(typeArgs, fields) {
        this.$typeName = BeeFruit.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeFruit.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.availableFruits = fields.availableFruits;
        ;
        this.fruitsPerEpoch = fields.fruitsPerEpoch;
        ;
        this.startEpoch = fields.startEpoch;
        ;
        this.endEpoch = fields.endEpoch;
        ;
        this.claimIndex = fields.claimIndex;
        ;
        this.lastClaimEpoch = fields.lastClaimEpoch;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified(X) { return { typeName: BeeFruit.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeFruit.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], reifiedTypeArgs: [X], fromFields: (fields) => BeeFruit.fromFields(X, fields), fromFieldsWithTypes: (item) => BeeFruit.fromFieldsWithTypes(X, item), fromBcs: (data) => BeeFruit.fromBcs(X, data), bcs: BeeFruit.bcs, fromJSONField: (field) => BeeFruit.fromJSONField(X, field), fromJSON: (json) => BeeFruit.fromJSON(X, json), fromSuiParsedData: (content) => BeeFruit.fromSuiParsedData(X, content), fetch: async (client, id) => BeeFruit.fetch(client, X, id), new: (fields) => { return new BeeFruit([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeFruit.reified; }
    static phantom(X) { return (0, reified_1.phantom)(BeeFruit.reified(X)); }
    static get p() { return BeeFruit.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("BeeFruit", {
            id: structs_9.UID.bcs, available_fruits: structs_7.Balance.bcs, fruits_per_epoch: bcs_1.bcs.u64(), start_epoch: bcs_1.bcs.u64(), end_epoch: bcs_1.bcs.u64(), claim_index: bcs_1.bcs.u256(), last_claim_epoch: bcs_1.bcs.u64(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return BeeFruit.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_9.UID.reified(), fields.id), availableFruits: (0, reified_1.decodeFromFields)(structs_7.Balance.reified(typeArg), fields.available_fruits), fruitsPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.fruits_per_epoch), startEpoch: (0, reified_1.decodeFromFields)("u64", fields.start_epoch), endEpoch: (0, reified_1.decodeFromFields)("u64", fields.end_epoch), claimIndex: (0, reified_1.decodeFromFields)("u256", fields.claim_index), lastClaimEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_claim_epoch), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isBeeFruit(item.type)) {
            throw new Error("not a BeeFruit type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return BeeFruit.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_9.UID.reified(), item.fields.id), availableFruits: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.Balance.reified(typeArg), item.fields.available_fruits), fruitsPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fruits_per_epoch), startEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_epoch), endEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_epoch), claimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.claim_index), lastClaimEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_claim_epoch), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(typeArg, data) { return BeeFruit.fromFields(typeArg, BeeFruit.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, availableFruits: this.availableFruits.toJSONField(), fruitsPerEpoch: this.fruitsPerEpoch.toString(), startEpoch: this.startEpoch.toString(), endEpoch: this.endEpoch.toString(), claimIndex: this.claimIndex.toString(), lastClaimEpoch: this.lastClaimEpoch.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return BeeFruit.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_9.UID.reified(), field.id), availableFruits: (0, reified_1.decodeFromJSONField)(structs_7.Balance.reified(typeArg), field.availableFruits), fruitsPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.fruitsPerEpoch), startEpoch: (0, reified_1.decodeFromJSONField)("u64", field.startEpoch), endEpoch: (0, reified_1.decodeFromJSONField)("u64", field.endEpoch), claimIndex: (0, reified_1.decodeFromJSONField)("u256", field.claimIndex), lastClaimEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastClaimEpoch), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== BeeFruit.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(BeeFruit.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return BeeFruit.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeFruit(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeFruit object`);
    } return BeeFruit.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeFruit object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeFruit(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeFruit object`);
        }
        return BeeFruit.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BeeFruit = BeeFruit;
BeeFruit.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruit";
BeeFruit.$numTypeParams = 1;
/* ============================== BeeFruitDestroyed =============================== */
function isBeeFruitDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitDestroyed"; }
exports.isBeeFruitDestroyed = isBeeFruitDestroyed;
class BeeFruitDestroyed {
    constructor(typeArgs, fields) {
        this.$typeName = BeeFruitDestroyed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeFruitDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.beeFruitType = fields.beeFruitType;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: BeeFruitDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeFruitDestroyed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BeeFruitDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => BeeFruitDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => BeeFruitDestroyed.fromBcs(data), bcs: BeeFruitDestroyed.bcs, fromJSONField: (field) => BeeFruitDestroyed.fromJSONField(field), fromJSON: (json) => BeeFruitDestroyed.fromJSON(json), fromSuiParsedData: (content) => BeeFruitDestroyed.fromSuiParsedData(content), fetch: async (client, id) => BeeFruitDestroyed.fetch(client, id), new: (fields) => { return new BeeFruitDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeFruitDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeFruitDestroyed.reified()); }
    static get p() { return BeeFruitDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeFruitDestroyed", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), bee_fruit_type: structs_2.String.bcs, cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeeFruitDestroyed.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), beeFruitType: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.bee_fruit_type), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeFruitDestroyed(item.type)) {
            throw new Error("not a BeeFruitDestroyed type");
        }
        return BeeFruitDestroyed.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), beeFruitType: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.bee_fruit_type), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return BeeFruitDestroyed.fromFields(BeeFruitDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, beeFruitType: this.beeFruitType, curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeFruitDestroyed.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), beeFruitType: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.beeFruitType), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeFruitDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeFruitDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeFruitDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeFruitDestroyed object`);
    } return BeeFruitDestroyed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeFruitDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeFruitDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeFruitDestroyed object`);
        }
        return BeeFruitDestroyed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BeeFruitDestroyed = BeeFruitDestroyed;
BeeFruitDestroyed.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitDestroyed";
BeeFruitDestroyed.$numTypeParams = 0;
/* ============================== BeeFruitKraftedForPoolHive =============================== */
function isBeeFruitKraftedForPoolHive(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitKraftedForPoolHive"; }
exports.isBeeFruitKraftedForPoolHive = isBeeFruitKraftedForPoolHive;
class BeeFruitKraftedForPoolHive {
    constructor(typeArgs, fields) {
        this.$typeName = BeeFruitKraftedForPoolHive.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeFruitKraftedForPoolHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.proposalId = fields.proposalId;
        ;
        this.beeFruitIdentifier = fields.beeFruitIdentifier;
    }
    static reified() { return { typeName: BeeFruitKraftedForPoolHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeFruitKraftedForPoolHive.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BeeFruitKraftedForPoolHive.fromFields(fields), fromFieldsWithTypes: (item) => BeeFruitKraftedForPoolHive.fromFieldsWithTypes(item), fromBcs: (data) => BeeFruitKraftedForPoolHive.fromBcs(data), bcs: BeeFruitKraftedForPoolHive.bcs, fromJSONField: (field) => BeeFruitKraftedForPoolHive.fromJSONField(field), fromJSON: (json) => BeeFruitKraftedForPoolHive.fromJSON(json), fromSuiParsedData: (content) => BeeFruitKraftedForPoolHive.fromSuiParsedData(content), fetch: async (client, id) => BeeFruitKraftedForPoolHive.fetch(client, id), new: (fields) => { return new BeeFruitKraftedForPoolHive([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeFruitKraftedForPoolHive.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeeFruitKraftedForPoolHive.reified()); }
    static get p() { return BeeFruitKraftedForPoolHive.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeeFruitKraftedForPoolHive", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), proposal_id: bcs_1.bcs.u64(), bee_fruit_identifier: structs_5.TypeName.bcs
        });
    }
    ;
    static fromFields(fields) { return BeeFruitKraftedForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), beeFruitIdentifier: (0, reified_1.decodeFromFields)(structs_5.TypeName.reified(), fields.bee_fruit_identifier) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeeFruitKraftedForPoolHive(item.type)) {
            throw new Error("not a BeeFruitKraftedForPoolHive type");
        }
        return BeeFruitKraftedForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), beeFruitIdentifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.TypeName.reified(), item.fields.bee_fruit_identifier) });
    }
    static fromBcs(data) { return BeeFruitKraftedForPoolHive.fromFields(BeeFruitKraftedForPoolHive.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, proposalId: this.proposalId.toString(), beeFruitIdentifier: this.beeFruitIdentifier.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeeFruitKraftedForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), beeFruitIdentifier: (0, reified_1.decodeFromJSONField)(structs_5.TypeName.reified(), field.beeFruitIdentifier) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeeFruitKraftedForPoolHive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeeFruitKraftedForPoolHive.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeFruitKraftedForPoolHive(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeFruitKraftedForPoolHive object`);
    } return BeeFruitKraftedForPoolHive.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeFruitKraftedForPoolHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeFruitKraftedForPoolHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeFruitKraftedForPoolHive object`);
        }
        return BeeFruitKraftedForPoolHive.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BeeFruitKraftedForPoolHive = BeeFruitKraftedForPoolHive;
BeeFruitKraftedForPoolHive.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitKraftedForPoolHive";
BeeFruitKraftedForPoolHive.$numTypeParams = 0;
/* ============================== Dialogue =============================== */
function isDialogue(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogue"; }
exports.isDialogue = isDialogue;
class Dialogue {
    constructor(typeArgs, fields) {
        this.$typeName = Dialogue.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Dialogue.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.buzz = fields.buzz;
        ;
        this.upvotes = fields.upvotes;
    }
    static reified() { return { typeName: Dialogue.$typeName, fullTypeName: (0, util_1.composeSuiType)(Dialogue.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Dialogue.fromFields(fields), fromFieldsWithTypes: (item) => Dialogue.fromFieldsWithTypes(item), fromBcs: (data) => Dialogue.fromBcs(data), bcs: Dialogue.bcs, fromJSONField: (field) => Dialogue.fromJSONField(field), fromJSON: (json) => Dialogue.fromJSON(json), fromSuiParsedData: (content) => Dialogue.fromSuiParsedData(content), fetch: async (client, id) => Dialogue.fetch(client, id), new: (fields) => { return new Dialogue([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Dialogue.reified(); }
    static phantom() { return (0, reified_1.phantom)(Dialogue.reified()); }
    static get p() { return Dialogue.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Dialogue", {
            buzz: structs_4.String.bcs, upvotes: structs_8.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }))
        });
    }
    ;
    static fromFields(fields) { return Dialogue.reified().new({ buzz: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.buzz), upvotes: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified("address", reified.phantom("bool")), fields.upvotes) }); }
    static fromFieldsWithTypes(item) {
        if (!isDialogue(item.type)) {
            throw new Error("not a Dialogue type");
        }
        return Dialogue.reified().new({ buzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.buzz), upvotes: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified("address", reified.phantom("bool")), item.fields.upvotes) });
    }
    static fromBcs(data) { return Dialogue.fromFields(Dialogue.bcs.parse(data)); }
    toJSONField() {
        return {
            buzz: this.buzz, upvotes: this.upvotes.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Dialogue.reified().new({ buzz: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.buzz), upvotes: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified("address", reified.phantom("bool")), field.upvotes) }); }
    static fromJSON(json) {
        if (json.$typeName !== Dialogue.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Dialogue.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDialogue(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Dialogue object`);
    } return Dialogue.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Dialogue object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDialogue(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Dialogue object`);
        }
        return Dialogue.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Dialogue = Dialogue;
Dialogue.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogue";
Dialogue.$numTypeParams = 0;
/* ============================== Dialogues =============================== */
function isDialogues(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogues"; }
exports.isDialogues = isDialogues;
class Dialogues {
    constructor(typeArgs, fields) {
        this.$typeName = Dialogues.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Dialogues.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dialogues = fields.dialogues;
    }
    static reified() { return { typeName: Dialogues.$typeName, fullTypeName: (0, util_1.composeSuiType)(Dialogues.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Dialogues.fromFields(fields), fromFieldsWithTypes: (item) => Dialogues.fromFieldsWithTypes(item), fromBcs: (data) => Dialogues.fromBcs(data), bcs: Dialogues.bcs, fromJSONField: (field) => Dialogues.fromJSONField(field), fromJSON: (json) => Dialogues.fromJSON(json), fromSuiParsedData: (content) => Dialogues.fromSuiParsedData(content), fetch: async (client, id) => Dialogues.fetch(client, id), new: (fields) => { return new Dialogues([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Dialogues.reified(); }
    static phantom() { return (0, reified_1.phantom)(Dialogues.reified()); }
    static get p() { return Dialogues.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Dialogues", {
            dialogues: structs_8.LinkedTable.bcs(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return Dialogues.reified().new({ dialogues: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified("u64", reified.phantom(Dialogue.reified())), fields.dialogues) }); }
    static fromFieldsWithTypes(item) {
        if (!isDialogues(item.type)) {
            throw new Error("not a Dialogues type");
        }
        return Dialogues.reified().new({ dialogues: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified("u64", reified.phantom(Dialogue.reified())), item.fields.dialogues) });
    }
    static fromBcs(data) { return Dialogues.fromFields(Dialogues.bcs.parse(data)); }
    toJSONField() {
        return {
            dialogues: this.dialogues.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Dialogues.reified().new({ dialogues: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified("u64", reified.phantom(Dialogue.reified())), field.dialogues) }); }
    static fromJSON(json) {
        if (json.$typeName !== Dialogues.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Dialogues.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDialogues(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Dialogues object`);
    } return Dialogues.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Dialogues object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDialogues(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Dialogues object`);
        }
        return Dialogues.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Dialogues = Dialogues;
Dialogues.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogues";
Dialogues.$numTypeParams = 0;
/* ============================== FruitLife =============================== */
function isFruitLife(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife"; }
exports.isFruitLife = isFruitLife;
class FruitLife {
    constructor(typeArgs, fields) {
        this.$typeName = FruitLife.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(FruitLife.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.fruitTypename = fields.fruitTypename;
        ;
        this.startEpoch = fields.startEpoch;
        ;
        this.endEpoch = fields.endEpoch;
    }
    static reified() { return { typeName: FruitLife.$typeName, fullTypeName: (0, util_1.composeSuiType)(FruitLife.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => FruitLife.fromFields(fields), fromFieldsWithTypes: (item) => FruitLife.fromFieldsWithTypes(item), fromBcs: (data) => FruitLife.fromBcs(data), bcs: FruitLife.bcs, fromJSONField: (field) => FruitLife.fromJSONField(field), fromJSON: (json) => FruitLife.fromJSON(json), fromSuiParsedData: (content) => FruitLife.fromSuiParsedData(content), fetch: async (client, id) => FruitLife.fetch(client, id), new: (fields) => { return new FruitLife([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FruitLife.reified(); }
    static phantom() { return (0, reified_1.phantom)(FruitLife.reified()); }
    static get p() { return FruitLife.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FruitLife", {
            fruit_typename: structs_5.TypeName.bcs, start_epoch: bcs_1.bcs.u64(), end_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FruitLife.reified().new({ fruitTypename: (0, reified_1.decodeFromFields)(structs_5.TypeName.reified(), fields.fruit_typename), startEpoch: (0, reified_1.decodeFromFields)("u64", fields.start_epoch), endEpoch: (0, reified_1.decodeFromFields)("u64", fields.end_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isFruitLife(item.type)) {
            throw new Error("not a FruitLife type");
        }
        return FruitLife.reified().new({ fruitTypename: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.TypeName.reified(), item.fields.fruit_typename), startEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_epoch), endEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_epoch) });
    }
    static fromBcs(data) { return FruitLife.fromFields(FruitLife.bcs.parse(data)); }
    toJSONField() {
        return {
            fruitTypename: this.fruitTypename.toJSONField(), startEpoch: this.startEpoch.toString(), endEpoch: this.endEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FruitLife.reified().new({ fruitTypename: (0, reified_1.decodeFromJSONField)(structs_5.TypeName.reified(), field.fruitTypename), startEpoch: (0, reified_1.decodeFromJSONField)("u64", field.startEpoch), endEpoch: (0, reified_1.decodeFromJSONField)("u64", field.endEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== FruitLife.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FruitLife.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFruitLife(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FruitLife object`);
    } return FruitLife.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FruitLife object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFruitLife(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FruitLife object`);
        }
        return FruitLife.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.FruitLife = FruitLife;
FruitLife.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife";
FruitLife.$numTypeParams = 0;
/* ============================== GemsPerEpochUpdated =============================== */
function isGemsPerEpochUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsPerEpochUpdated"; }
exports.isGemsPerEpochUpdated = isGemsPerEpochUpdated;
class GemsPerEpochUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = GemsPerEpochUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(GemsPerEpochUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.newGemsPerEpoch = fields.newGemsPerEpoch;
    }
    static reified() { return { typeName: GemsPerEpochUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(GemsPerEpochUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => GemsPerEpochUpdated.fromFields(fields), fromFieldsWithTypes: (item) => GemsPerEpochUpdated.fromFieldsWithTypes(item), fromBcs: (data) => GemsPerEpochUpdated.fromBcs(data), bcs: GemsPerEpochUpdated.bcs, fromJSONField: (field) => GemsPerEpochUpdated.fromJSONField(field), fromJSON: (json) => GemsPerEpochUpdated.fromJSON(json), fromSuiParsedData: (content) => GemsPerEpochUpdated.fromSuiParsedData(content), fetch: async (client, id) => GemsPerEpochUpdated.fetch(client, id), new: (fields) => { return new GemsPerEpochUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GemsPerEpochUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(GemsPerEpochUpdated.reified()); }
    static get p() { return GemsPerEpochUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GemsPerEpochUpdated", {
            new_gems_per_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return GemsPerEpochUpdated.reified().new({ newGemsPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.new_gems_per_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isGemsPerEpochUpdated(item.type)) {
            throw new Error("not a GemsPerEpochUpdated type");
        }
        return GemsPerEpochUpdated.reified().new({ newGemsPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_gems_per_epoch) });
    }
    static fromBcs(data) { return GemsPerEpochUpdated.fromFields(GemsPerEpochUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            newGemsPerEpoch: this.newGemsPerEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GemsPerEpochUpdated.reified().new({ newGemsPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.newGemsPerEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== GemsPerEpochUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GemsPerEpochUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGemsPerEpochUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GemsPerEpochUpdated object`);
    } return GemsPerEpochUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GemsPerEpochUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGemsPerEpochUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GemsPerEpochUpdated object`);
        }
        return GemsPerEpochUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GemsPerEpochUpdated = GemsPerEpochUpdated;
GemsPerEpochUpdated.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsPerEpochUpdated";
GemsPerEpochUpdated.$numTypeParams = 0;
/* ============================== GemsSchedule =============================== */
function isGemsSchedule(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSchedule"; }
exports.isGemsSchedule = isGemsSchedule;
class GemsSchedule {
    constructor(typeArgs, fields) {
        this.$typeName = GemsSchedule.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(GemsSchedule.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.startEpoch = fields.startEpoch;
        ;
        this.endEpoch = fields.endEpoch;
        ;
        this.gemsPerEpoch = fields.gemsPerEpoch;
    }
    static reified() { return { typeName: GemsSchedule.$typeName, fullTypeName: (0, util_1.composeSuiType)(GemsSchedule.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => GemsSchedule.fromFields(fields), fromFieldsWithTypes: (item) => GemsSchedule.fromFieldsWithTypes(item), fromBcs: (data) => GemsSchedule.fromBcs(data), bcs: GemsSchedule.bcs, fromJSONField: (field) => GemsSchedule.fromJSONField(field), fromJSON: (json) => GemsSchedule.fromJSON(json), fromSuiParsedData: (content) => GemsSchedule.fromSuiParsedData(content), fetch: async (client, id) => GemsSchedule.fetch(client, id), new: (fields) => { return new GemsSchedule([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GemsSchedule.reified(); }
    static phantom() { return (0, reified_1.phantom)(GemsSchedule.reified()); }
    static get p() { return GemsSchedule.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GemsSchedule", {
            start_epoch: bcs_1.bcs.u64(), end_epoch: bcs_1.bcs.u64(), gems_per_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return GemsSchedule.reified().new({ startEpoch: (0, reified_1.decodeFromFields)("u64", fields.start_epoch), endEpoch: (0, reified_1.decodeFromFields)("u64", fields.end_epoch), gemsPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.gems_per_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isGemsSchedule(item.type)) {
            throw new Error("not a GemsSchedule type");
        }
        return GemsSchedule.reified().new({ startEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_epoch), endEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_epoch), gemsPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_per_epoch) });
    }
    static fromBcs(data) { return GemsSchedule.fromFields(GemsSchedule.bcs.parse(data)); }
    toJSONField() {
        return {
            startEpoch: this.startEpoch.toString(), endEpoch: this.endEpoch.toString(), gemsPerEpoch: this.gemsPerEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GemsSchedule.reified().new({ startEpoch: (0, reified_1.decodeFromJSONField)("u64", field.startEpoch), endEpoch: (0, reified_1.decodeFromJSONField)("u64", field.endEpoch), gemsPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.gemsPerEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== GemsSchedule.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GemsSchedule.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGemsSchedule(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GemsSchedule object`);
    } return GemsSchedule.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GemsSchedule object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGemsSchedule(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GemsSchedule object`);
        }
        return GemsSchedule.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GemsSchedule = GemsSchedule;
GemsSchedule.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSchedule";
GemsSchedule.$numTypeParams = 0;
/* ============================== GemsSetForNewHiveCycle =============================== */
function isGemsSetForNewHiveCycle(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSetForNewHiveCycle"; }
exports.isGemsSetForNewHiveCycle = isGemsSetForNewHiveCycle;
class GemsSetForNewHiveCycle {
    constructor(typeArgs, fields) {
        this.$typeName = GemsSetForNewHiveCycle.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(GemsSetForNewHiveCycle.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.gemsCycle = fields.gemsCycle;
        ;
        this.startEpoch = fields.startEpoch;
        ;
        this.endEpoch = fields.endEpoch;
        ;
        this.gemsPerEpoch = fields.gemsPerEpoch;
    }
    static reified() { return { typeName: GemsSetForNewHiveCycle.$typeName, fullTypeName: (0, util_1.composeSuiType)(GemsSetForNewHiveCycle.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => GemsSetForNewHiveCycle.fromFields(fields), fromFieldsWithTypes: (item) => GemsSetForNewHiveCycle.fromFieldsWithTypes(item), fromBcs: (data) => GemsSetForNewHiveCycle.fromBcs(data), bcs: GemsSetForNewHiveCycle.bcs, fromJSONField: (field) => GemsSetForNewHiveCycle.fromJSONField(field), fromJSON: (json) => GemsSetForNewHiveCycle.fromJSON(json), fromSuiParsedData: (content) => GemsSetForNewHiveCycle.fromSuiParsedData(content), fetch: async (client, id) => GemsSetForNewHiveCycle.fetch(client, id), new: (fields) => { return new GemsSetForNewHiveCycle([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GemsSetForNewHiveCycle.reified(); }
    static phantom() { return (0, reified_1.phantom)(GemsSetForNewHiveCycle.reified()); }
    static get p() { return GemsSetForNewHiveCycle.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GemsSetForNewHiveCycle", {
            gems_cycle: bcs_1.bcs.u64(), start_epoch: bcs_1.bcs.u64(), end_epoch: bcs_1.bcs.u64(), gems_per_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return GemsSetForNewHiveCycle.reified().new({ gemsCycle: (0, reified_1.decodeFromFields)("u64", fields.gems_cycle), startEpoch: (0, reified_1.decodeFromFields)("u64", fields.start_epoch), endEpoch: (0, reified_1.decodeFromFields)("u64", fields.end_epoch), gemsPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.gems_per_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isGemsSetForNewHiveCycle(item.type)) {
            throw new Error("not a GemsSetForNewHiveCycle type");
        }
        return GemsSetForNewHiveCycle.reified().new({ gemsCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_cycle), startEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_epoch), endEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_epoch), gemsPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_per_epoch) });
    }
    static fromBcs(data) { return GemsSetForNewHiveCycle.fromFields(GemsSetForNewHiveCycle.bcs.parse(data)); }
    toJSONField() {
        return {
            gemsCycle: this.gemsCycle.toString(), startEpoch: this.startEpoch.toString(), endEpoch: this.endEpoch.toString(), gemsPerEpoch: this.gemsPerEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GemsSetForNewHiveCycle.reified().new({ gemsCycle: (0, reified_1.decodeFromJSONField)("u64", field.gemsCycle), startEpoch: (0, reified_1.decodeFromJSONField)("u64", field.startEpoch), endEpoch: (0, reified_1.decodeFromJSONField)("u64", field.endEpoch), gemsPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.gemsPerEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== GemsSetForNewHiveCycle.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GemsSetForNewHiveCycle.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGemsSetForNewHiveCycle(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GemsSetForNewHiveCycle object`);
    } return GemsSetForNewHiveCycle.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GemsSetForNewHiveCycle object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGemsSetForNewHiveCycle(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GemsSetForNewHiveCycle object`);
        }
        return GemsSetForNewHiveCycle.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GemsSetForNewHiveCycle = GemsSetForNewHiveCycle;
GemsSetForNewHiveCycle.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSetForNewHiveCycle";
GemsSetForNewHiveCycle.$numTypeParams = 0;
/* ============================== GovernorBuzz =============================== */
function isGovernorBuzz(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzz"; }
exports.isGovernorBuzz = isGovernorBuzz;
class GovernorBuzz {
    constructor(typeArgs, fields) {
        this.$typeName = GovernorBuzz.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(GovernorBuzz.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHive = fields.poolHive;
        ;
        this.buzz = fields.buzz;
        ;
        this.genAi = fields.genAi;
        ;
        this.likes = fields.likes;
        ;
        this.userBuzzes = fields.userBuzzes;
    }
    static reified() { return { typeName: GovernorBuzz.$typeName, fullTypeName: (0, util_1.composeSuiType)(GovernorBuzz.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => GovernorBuzz.fromFields(fields), fromFieldsWithTypes: (item) => GovernorBuzz.fromFieldsWithTypes(item), fromBcs: (data) => GovernorBuzz.fromBcs(data), bcs: GovernorBuzz.bcs, fromJSONField: (field) => GovernorBuzz.fromJSONField(field), fromJSON: (json) => GovernorBuzz.fromJSON(json), fromSuiParsedData: (content) => GovernorBuzz.fromSuiParsedData(content), fetch: async (client, id) => GovernorBuzz.fetch(client, id), new: (fields) => { return new GovernorBuzz([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GovernorBuzz.reified(); }
    static phantom() { return (0, reified_1.phantom)(GovernorBuzz.reified()); }
    static get p() { return GovernorBuzz.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GovernorBuzz", {
            pool_hive: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), buzz: structs_4.String.bcs, gen_ai: structs_3.Option.bcs(structs_4.String.bcs), likes: structs_8.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), user_buzzes: structs_8.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }))
        });
    }
    ;
    static fromFields(fields) { return GovernorBuzz.reified().new({ poolHive: (0, reified_1.decodeFromFields)("address", fields.pool_hive), buzz: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.buzz), genAi: (0, reified_1.decodeFromFields)(structs_3.Option.reified(structs_4.String.reified()), fields.gen_ai), likes: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified("address", reified.phantom("bool")), fields.likes), userBuzzes: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified("address", reified.phantom(Dialogues.reified())), fields.user_buzzes) }); }
    static fromFieldsWithTypes(item) {
        if (!isGovernorBuzz(item.type)) {
            throw new Error("not a GovernorBuzz type");
        }
        return GovernorBuzz.reified().new({ poolHive: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive), buzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.buzz), genAi: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(structs_4.String.reified()), item.fields.gen_ai), likes: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified("address", reified.phantom("bool")), item.fields.likes), userBuzzes: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified("address", reified.phantom(Dialogues.reified())), item.fields.user_buzzes) });
    }
    static fromBcs(data) { return GovernorBuzz.fromFields(GovernorBuzz.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHive: this.poolHive, buzz: this.buzz, genAi: (0, reified_1.fieldToJSON)(`0x1::option::Option<0x1::string::String>`, this.genAi), likes: this.likes.toJSONField(), userBuzzes: this.userBuzzes.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GovernorBuzz.reified().new({ poolHive: (0, reified_1.decodeFromJSONField)("address", field.poolHive), buzz: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.buzz), genAi: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(structs_4.String.reified()), field.genAi), likes: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified("address", reified.phantom("bool")), field.likes), userBuzzes: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified("address", reified.phantom(Dialogues.reified())), field.userBuzzes) }); }
    static fromJSON(json) {
        if (json.$typeName !== GovernorBuzz.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GovernorBuzz.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGovernorBuzz(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GovernorBuzz object`);
    } return GovernorBuzz.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GovernorBuzz object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGovernorBuzz(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GovernorBuzz object`);
        }
        return GovernorBuzz.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GovernorBuzz = GovernorBuzz;
GovernorBuzz.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzz";
GovernorBuzz.$numTypeParams = 0;
/* ============================== GovernorBuzzDestroyed =============================== */
function isGovernorBuzzDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzzDestroyed"; }
exports.isGovernorBuzzDestroyed = isGovernorBuzzDestroyed;
class GovernorBuzzDestroyed {
    constructor(typeArgs, fields) {
        this.$typeName = GovernorBuzzDestroyed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(GovernorBuzzDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.index = fields.index;
        ;
        this.poolHive = fields.poolHive;
        ;
        this.buzz = fields.buzz;
        ;
        this.genAi = fields.genAi;
    }
    static reified() { return { typeName: GovernorBuzzDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(GovernorBuzzDestroyed.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => GovernorBuzzDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => GovernorBuzzDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => GovernorBuzzDestroyed.fromBcs(data), bcs: GovernorBuzzDestroyed.bcs, fromJSONField: (field) => GovernorBuzzDestroyed.fromJSONField(field), fromJSON: (json) => GovernorBuzzDestroyed.fromJSON(json), fromSuiParsedData: (content) => GovernorBuzzDestroyed.fromSuiParsedData(content), fetch: async (client, id) => GovernorBuzzDestroyed.fetch(client, id), new: (fields) => { return new GovernorBuzzDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GovernorBuzzDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(GovernorBuzzDestroyed.reified()); }
    static get p() { return GovernorBuzzDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GovernorBuzzDestroyed", {
            index: bcs_1.bcs.u64(), pool_hive: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), buzz: structs_4.String.bcs, gen_ai: structs_3.Option.bcs(structs_4.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return GovernorBuzzDestroyed.reified().new({ index: (0, reified_1.decodeFromFields)("u64", fields.index), poolHive: (0, reified_1.decodeFromFields)("address", fields.pool_hive), buzz: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.buzz), genAi: (0, reified_1.decodeFromFields)(structs_3.Option.reified(structs_4.String.reified()), fields.gen_ai) }); }
    static fromFieldsWithTypes(item) {
        if (!isGovernorBuzzDestroyed(item.type)) {
            throw new Error("not a GovernorBuzzDestroyed type");
        }
        return GovernorBuzzDestroyed.reified().new({ index: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.index), poolHive: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive), buzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.buzz), genAi: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(structs_4.String.reified()), item.fields.gen_ai) });
    }
    static fromBcs(data) { return GovernorBuzzDestroyed.fromFields(GovernorBuzzDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            index: this.index.toString(), poolHive: this.poolHive, buzz: this.buzz, genAi: (0, reified_1.fieldToJSON)(`0x1::option::Option<0x1::string::String>`, this.genAi),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GovernorBuzzDestroyed.reified().new({ index: (0, reified_1.decodeFromJSONField)("u64", field.index), poolHive: (0, reified_1.decodeFromJSONField)("address", field.poolHive), buzz: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.buzz), genAi: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(structs_4.String.reified()), field.genAi) }); }
    static fromJSON(json) {
        if (json.$typeName !== GovernorBuzzDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GovernorBuzzDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGovernorBuzzDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GovernorBuzzDestroyed object`);
    } return GovernorBuzzDestroyed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GovernorBuzzDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGovernorBuzzDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GovernorBuzzDestroyed object`);
        }
        return GovernorBuzzDestroyed.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GovernorBuzzDestroyed = GovernorBuzzDestroyed;
GovernorBuzzDestroyed.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzzDestroyed";
GovernorBuzzDestroyed.$numTypeParams = 0;
/* ============================== KraftedGemsForPoolHive =============================== */
function isKraftedGemsForPoolHive(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::KraftedGemsForPoolHive"; }
exports.isKraftedGemsForPoolHive = isKraftedGemsForPoolHive;
class KraftedGemsForPoolHive {
    constructor(typeArgs, fields) {
        this.$typeName = KraftedGemsForPoolHive.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(KraftedGemsForPoolHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.gemsEarnedByHive = fields.gemsEarnedByHive;
        ;
        this.gemsPerEpochForHive = fields.gemsPerEpochForHive;
        ;
        this.indexIncrement = fields.indexIncrement;
        ;
        this.globalClaimIndex = fields.globalClaimIndex;
        ;
        this.lastClaimEpoch = fields.lastClaimEpoch;
    }
    static reified() { return { typeName: KraftedGemsForPoolHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(KraftedGemsForPoolHive.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => KraftedGemsForPoolHive.fromFields(fields), fromFieldsWithTypes: (item) => KraftedGemsForPoolHive.fromFieldsWithTypes(item), fromBcs: (data) => KraftedGemsForPoolHive.fromBcs(data), bcs: KraftedGemsForPoolHive.bcs, fromJSONField: (field) => KraftedGemsForPoolHive.fromJSONField(field), fromJSON: (json) => KraftedGemsForPoolHive.fromJSON(json), fromSuiParsedData: (content) => KraftedGemsForPoolHive.fromSuiParsedData(content), fetch: async (client, id) => KraftedGemsForPoolHive.fetch(client, id), new: (fields) => { return new KraftedGemsForPoolHive([], fields); }, kind: "StructClassReified", }; }
    static get r() { return KraftedGemsForPoolHive.reified(); }
    static phantom() { return (0, reified_1.phantom)(KraftedGemsForPoolHive.reified()); }
    static get p() { return KraftedGemsForPoolHive.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("KraftedGemsForPoolHive", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), gems_earned_by_hive: bcs_1.bcs.u64(), gems_per_epoch_for_hive: bcs_1.bcs.u256(), index_increment: bcs_1.bcs.u256(), global_claim_index: bcs_1.bcs.u256(), last_claim_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return KraftedGemsForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), gemsEarnedByHive: (0, reified_1.decodeFromFields)("u64", fields.gems_earned_by_hive), gemsPerEpochForHive: (0, reified_1.decodeFromFields)("u256", fields.gems_per_epoch_for_hive), indexIncrement: (0, reified_1.decodeFromFields)("u256", fields.index_increment), globalClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.global_claim_index), lastClaimEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_claim_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isKraftedGemsForPoolHive(item.type)) {
            throw new Error("not a KraftedGemsForPoolHive type");
        }
        return KraftedGemsForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), gemsEarnedByHive: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_earned_by_hive), gemsPerEpochForHive: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.gems_per_epoch_for_hive), indexIncrement: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.index_increment), globalClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.global_claim_index), lastClaimEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_claim_epoch) });
    }
    static fromBcs(data) { return KraftedGemsForPoolHive.fromFields(KraftedGemsForPoolHive.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, gemsEarnedByHive: this.gemsEarnedByHive.toString(), gemsPerEpochForHive: this.gemsPerEpochForHive.toString(), indexIncrement: this.indexIncrement.toString(), globalClaimIndex: this.globalClaimIndex.toString(), lastClaimEpoch: this.lastClaimEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return KraftedGemsForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), gemsEarnedByHive: (0, reified_1.decodeFromJSONField)("u64", field.gemsEarnedByHive), gemsPerEpochForHive: (0, reified_1.decodeFromJSONField)("u256", field.gemsPerEpochForHive), indexIncrement: (0, reified_1.decodeFromJSONField)("u256", field.indexIncrement), globalClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.globalClaimIndex), lastClaimEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastClaimEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== KraftedGemsForPoolHive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return KraftedGemsForPoolHive.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isKraftedGemsForPoolHive(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a KraftedGemsForPoolHive object`);
    } return KraftedGemsForPoolHive.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching KraftedGemsForPoolHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isKraftedGemsForPoolHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a KraftedGemsForPoolHive object`);
        }
        return KraftedGemsForPoolHive.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.KraftedGemsForPoolHive = KraftedGemsForPoolHive;
KraftedGemsForPoolHive.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::KraftedGemsForPoolHive";
KraftedGemsForPoolHive.$numTypeParams = 0;
/* ============================== LpBeeBox =============================== */
function isLpBeeBox(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::LpBeeBox<"); }
exports.isLpBeeBox = isLpBeeBox;
class LpBeeBox {
    constructor(typeArgs, fields) {
        this.$typeName = LpBeeBox.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(LpBeeBox.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.stakedBalance = fields.stakedBalance;
        ;
        this.totalGemsEarned = fields.totalGemsEarned;
        ;
        this.claimIndex = fields.claimIndex;
        ;
        this.unbondingPsns = fields.unbondingPsns;
        ;
        this.unbondingBalance = fields.unbondingBalance;
        ;
        this.beeFruits = fields.beeFruits;
    }
    static reified(H) { return { typeName: LpBeeBox.$typeName, fullTypeName: (0, util_1.composeSuiType)(LpBeeBox.$typeName, ...[(0, reified_1.extractType)(H)]), typeArgs: [(0, reified_1.extractType)(H)], reifiedTypeArgs: [H], fromFields: (fields) => LpBeeBox.fromFields(H, fields), fromFieldsWithTypes: (item) => LpBeeBox.fromFieldsWithTypes(H, item), fromBcs: (data) => LpBeeBox.fromBcs(H, data), bcs: LpBeeBox.bcs, fromJSONField: (field) => LpBeeBox.fromJSONField(H, field), fromJSON: (json) => LpBeeBox.fromJSON(H, json), fromSuiParsedData: (content) => LpBeeBox.fromSuiParsedData(H, content), fetch: async (client, id) => LpBeeBox.fetch(client, H, id), new: (fields) => { return new LpBeeBox([(0, reified_1.extractType)(H)], fields); }, kind: "StructClassReified", }; }
    static get r() { return LpBeeBox.reified; }
    static phantom(H) { return (0, reified_1.phantom)(LpBeeBox.reified(H)); }
    static get p() { return LpBeeBox.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("LpBeeBox", {
            staked_balance: structs_7.Balance.bcs, total_gems_earned: bcs_1.bcs.u64(), claim_index: bcs_1.bcs.u256(), unbonding_psns: structs_8.LinkedTable.bcs(bcs_1.bcs.u64()), unbonding_balance: structs_7.Balance.bcs, bee_fruits: structs_8.LinkedTable.bcs(structs_2.String.bcs)
        });
    }
    ;
    static fromFields(typeArg, fields) { return LpBeeBox.reified(typeArg).new({ stakedBalance: (0, reified_1.decodeFromFields)(structs_7.Balance.reified(typeArg), fields.staked_balance), totalGemsEarned: (0, reified_1.decodeFromFields)("u64", fields.total_gems_earned), claimIndex: (0, reified_1.decodeFromFields)("u256", fields.claim_index), unbondingPsns: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified("u64", reified.phantom("u64")), fields.unbonding_psns), unbondingBalance: (0, reified_1.decodeFromFields)(structs_7.Balance.reified(typeArg), fields.unbonding_balance), beeFruits: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified(structs_2.String.reified(), reified.phantom("u256")), fields.bee_fruits) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isLpBeeBox(item.type)) {
            throw new Error("not a LpBeeBox type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return LpBeeBox.reified(typeArg).new({ stakedBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.Balance.reified(typeArg), item.fields.staked_balance), totalGemsEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_gems_earned), claimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.claim_index), unbondingPsns: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified("u64", reified.phantom("u64")), item.fields.unbonding_psns), unbondingBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.Balance.reified(typeArg), item.fields.unbonding_balance), beeFruits: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified(structs_2.String.reified(), reified.phantom("u256")), item.fields.bee_fruits) });
    }
    static fromBcs(typeArg, data) { return LpBeeBox.fromFields(typeArg, LpBeeBox.bcs.parse(data)); }
    toJSONField() {
        return {
            stakedBalance: this.stakedBalance.toJSONField(), totalGemsEarned: this.totalGemsEarned.toString(), claimIndex: this.claimIndex.toString(), unbondingPsns: this.unbondingPsns.toJSONField(), unbondingBalance: this.unbondingBalance.toJSONField(), beeFruits: this.beeFruits.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return LpBeeBox.reified(typeArg).new({ stakedBalance: (0, reified_1.decodeFromJSONField)(structs_7.Balance.reified(typeArg), field.stakedBalance), totalGemsEarned: (0, reified_1.decodeFromJSONField)("u64", field.totalGemsEarned), claimIndex: (0, reified_1.decodeFromJSONField)("u256", field.claimIndex), unbondingPsns: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified("u64", reified.phantom("u64")), field.unbondingPsns), unbondingBalance: (0, reified_1.decodeFromJSONField)(structs_7.Balance.reified(typeArg), field.unbondingBalance), beeFruits: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified(structs_2.String.reified(), reified.phantom("u256")), field.beeFruits) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== LpBeeBox.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(LpBeeBox.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return LpBeeBox.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLpBeeBox(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LpBeeBox object`);
    } return LpBeeBox.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LpBeeBox object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLpBeeBox(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LpBeeBox object`);
        }
        return LpBeeBox.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.LpBeeBox = LpBeeBox;
LpBeeBox.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::LpBeeBox";
LpBeeBox.$numTypeParams = 1;
/* ============================== MoreFruitsAdded =============================== */
function isMoreFruitsAdded(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::MoreFruitsAdded"; }
exports.isMoreFruitsAdded = isMoreFruitsAdded;
class MoreFruitsAdded {
    constructor(typeArgs, fields) {
        this.$typeName = MoreFruitsAdded.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(MoreFruitsAdded.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.beeFruitType = fields.beeFruitType;
        ;
        this.fruitsAdded = fields.fruitsAdded;
        ;
        this.additionalPerEpoch = fields.additionalPerEpoch;
        ;
        this.fruitsPerEpoch = fields.fruitsPerEpoch;
        ;
        this.availableFruits = fields.availableFruits;
    }
    static reified() { return { typeName: MoreFruitsAdded.$typeName, fullTypeName: (0, util_1.composeSuiType)(MoreFruitsAdded.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => MoreFruitsAdded.fromFields(fields), fromFieldsWithTypes: (item) => MoreFruitsAdded.fromFieldsWithTypes(item), fromBcs: (data) => MoreFruitsAdded.fromBcs(data), bcs: MoreFruitsAdded.bcs, fromJSONField: (field) => MoreFruitsAdded.fromJSONField(field), fromJSON: (json) => MoreFruitsAdded.fromJSON(json), fromSuiParsedData: (content) => MoreFruitsAdded.fromSuiParsedData(content), fetch: async (client, id) => MoreFruitsAdded.fetch(client, id), new: (fields) => { return new MoreFruitsAdded([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MoreFruitsAdded.reified(); }
    static phantom() { return (0, reified_1.phantom)(MoreFruitsAdded.reified()); }
    static get p() { return MoreFruitsAdded.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MoreFruitsAdded", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), bee_fruit_type: structs_2.String.bcs, fruits_added: bcs_1.bcs.u64(), additional_per_epoch: bcs_1.bcs.u64(), fruits_per_epoch: bcs_1.bcs.u64(), available_fruits: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MoreFruitsAdded.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), beeFruitType: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.bee_fruit_type), fruitsAdded: (0, reified_1.decodeFromFields)("u64", fields.fruits_added), additionalPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.additional_per_epoch), fruitsPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.fruits_per_epoch), availableFruits: (0, reified_1.decodeFromFields)("u64", fields.available_fruits) }); }
    static fromFieldsWithTypes(item) {
        if (!isMoreFruitsAdded(item.type)) {
            throw new Error("not a MoreFruitsAdded type");
        }
        return MoreFruitsAdded.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), beeFruitType: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.bee_fruit_type), fruitsAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fruits_added), additionalPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.additional_per_epoch), fruitsPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fruits_per_epoch), availableFruits: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.available_fruits) });
    }
    static fromBcs(data) { return MoreFruitsAdded.fromFields(MoreFruitsAdded.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, beeFruitType: this.beeFruitType, fruitsAdded: this.fruitsAdded.toString(), additionalPerEpoch: this.additionalPerEpoch.toString(), fruitsPerEpoch: this.fruitsPerEpoch.toString(), availableFruits: this.availableFruits.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MoreFruitsAdded.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), beeFruitType: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.beeFruitType), fruitsAdded: (0, reified_1.decodeFromJSONField)("u64", field.fruitsAdded), additionalPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.additionalPerEpoch), fruitsPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.fruitsPerEpoch), availableFruits: (0, reified_1.decodeFromJSONField)("u64", field.availableFruits) }); }
    static fromJSON(json) {
        if (json.$typeName !== MoreFruitsAdded.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MoreFruitsAdded.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMoreFruitsAdded(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MoreFruitsAdded object`);
    } return MoreFruitsAdded.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MoreFruitsAdded object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMoreFruitsAdded(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MoreFruitsAdded object`);
        }
        return MoreFruitsAdded.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.MoreFruitsAdded = MoreFruitsAdded;
MoreFruitsAdded.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::MoreFruitsAdded";
MoreFruitsAdded.$numTypeParams = 0;
/* ============================== NewGovernorBuzz =============================== */
function isNewGovernorBuzz(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewGovernorBuzz"; }
exports.isNewGovernorBuzz = isNewGovernorBuzz;
class NewGovernorBuzz {
    constructor(typeArgs, fields) {
        this.$typeName = NewGovernorBuzz.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewGovernorBuzz.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.count = fields.count;
        ;
        this.poolHive = fields.poolHive;
        ;
        this.buzz = fields.buzz;
        ;
        this.genAi = fields.genAi;
    }
    static reified() { return { typeName: NewGovernorBuzz.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewGovernorBuzz.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => NewGovernorBuzz.fromFields(fields), fromFieldsWithTypes: (item) => NewGovernorBuzz.fromFieldsWithTypes(item), fromBcs: (data) => NewGovernorBuzz.fromBcs(data), bcs: NewGovernorBuzz.bcs, fromJSONField: (field) => NewGovernorBuzz.fromJSONField(field), fromJSON: (json) => NewGovernorBuzz.fromJSON(json), fromSuiParsedData: (content) => NewGovernorBuzz.fromSuiParsedData(content), fetch: async (client, id) => NewGovernorBuzz.fetch(client, id), new: (fields) => { return new NewGovernorBuzz([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewGovernorBuzz.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewGovernorBuzz.reified()); }
    static get p() { return NewGovernorBuzz.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewGovernorBuzz", {
            count: bcs_1.bcs.u64(), pool_hive: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), buzz: structs_4.String.bcs, gen_ai: structs_3.Option.bcs(structs_4.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return NewGovernorBuzz.reified().new({ count: (0, reified_1.decodeFromFields)("u64", fields.count), poolHive: (0, reified_1.decodeFromFields)("address", fields.pool_hive), buzz: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.buzz), genAi: (0, reified_1.decodeFromFields)(structs_3.Option.reified(structs_4.String.reified()), fields.gen_ai) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewGovernorBuzz(item.type)) {
            throw new Error("not a NewGovernorBuzz type");
        }
        return NewGovernorBuzz.reified().new({ count: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.count), poolHive: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive), buzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.buzz), genAi: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(structs_4.String.reified()), item.fields.gen_ai) });
    }
    static fromBcs(data) { return NewGovernorBuzz.fromFields(NewGovernorBuzz.bcs.parse(data)); }
    toJSONField() {
        return {
            count: this.count.toString(), poolHive: this.poolHive, buzz: this.buzz, genAi: (0, reified_1.fieldToJSON)(`0x1::option::Option<0x1::string::String>`, this.genAi),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewGovernorBuzz.reified().new({ count: (0, reified_1.decodeFromJSONField)("u64", field.count), poolHive: (0, reified_1.decodeFromJSONField)("address", field.poolHive), buzz: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.buzz), genAi: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(structs_4.String.reified()), field.genAi) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewGovernorBuzz.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewGovernorBuzz.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewGovernorBuzz(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewGovernorBuzz object`);
    } return NewGovernorBuzz.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewGovernorBuzz object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewGovernorBuzz(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewGovernorBuzz object`);
        }
        return NewGovernorBuzz.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewGovernorBuzz = NewGovernorBuzz;
NewGovernorBuzz.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewGovernorBuzz";
NewGovernorBuzz.$numTypeParams = 0;
/* ============================== NewProposalKrafted =============================== */
function isNewProposalKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewProposalKrafted"; }
exports.isNewProposalKrafted = isNewProposalKrafted;
class NewProposalKrafted {
    constructor(typeArgs, fields) {
        this.$typeName = NewProposalKrafted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewProposalKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.proposalId = fields.proposalId;
        ;
        this.proposer = fields.proposer;
        ;
        this.title = fields.title;
        ;
        this.description = fields.description;
        ;
        this.link = fields.link;
        ;
        this.proposalType = fields.proposalType;
        ;
        this.votingStartEpoch = fields.votingStartEpoch;
        ;
        this.votingEndEpoch = fields.votingEndEpoch;
        ;
        this.executionStartEpoch = fields.executionStartEpoch;
        ;
        this.executionEndEpoch = fields.executionEndEpoch;
        ;
        this.newParams = fields.newParams;
        ;
        this.newWeights = fields.newWeights;
        ;
        this.newFeeInfo = fields.newFeeInfo;
        ;
        this.fruitLife = fields.fruitLife;
    }
    static reified() { return { typeName: NewProposalKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewProposalKrafted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => NewProposalKrafted.fromFields(fields), fromFieldsWithTypes: (item) => NewProposalKrafted.fromFieldsWithTypes(item), fromBcs: (data) => NewProposalKrafted.fromBcs(data), bcs: NewProposalKrafted.bcs, fromJSONField: (field) => NewProposalKrafted.fromJSONField(field), fromJSON: (json) => NewProposalKrafted.fromJSON(json), fromSuiParsedData: (content) => NewProposalKrafted.fromSuiParsedData(content), fetch: async (client, id) => NewProposalKrafted.fetch(client, id), new: (fields) => { return new NewProposalKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewProposalKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewProposalKrafted.reified()); }
    static get p() { return NewProposalKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewProposalKrafted", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), proposal_id: bcs_1.bcs.u64(), proposer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), title: structs_4.String.bcs, description: structs_4.String.bcs, link: structs_4.String.bcs, proposal_type: bcs_1.bcs.u64(), voting_start_epoch: bcs_1.bcs.u64(), voting_end_epoch: bcs_1.bcs.u64(), execution_start_epoch: bcs_1.bcs.u64(), execution_end_epoch: bcs_1.bcs.u64(), new_params: structs_3.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64())), new_weights: structs_3.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64())), new_fee_info: structs_3.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64())), fruit_life: structs_3.Option.bcs(FruitLife.bcs)
        });
    }
    ;
    static fromFields(fields) { return NewProposalKrafted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), proposer: (0, reified_1.decodeFromFields)("address", fields.proposer), title: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.title), description: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.description), link: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.link), proposalType: (0, reified_1.decodeFromFields)("u64", fields.proposal_type), votingStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.voting_start_epoch), votingEndEpoch: (0, reified_1.decodeFromFields)("u64", fields.voting_end_epoch), executionStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.execution_start_epoch), executionEndEpoch: (0, reified_1.decodeFromFields)("u64", fields.execution_end_epoch), newParams: (0, reified_1.decodeFromFields)(structs_3.Option.reified(reified.vector("u64")), fields.new_params), newWeights: (0, reified_1.decodeFromFields)(structs_3.Option.reified(reified.vector("u64")), fields.new_weights), newFeeInfo: (0, reified_1.decodeFromFields)(structs_3.Option.reified(reified.vector("u64")), fields.new_fee_info), fruitLife: (0, reified_1.decodeFromFields)(structs_3.Option.reified(FruitLife.reified()), fields.fruit_life) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewProposalKrafted(item.type)) {
            throw new Error("not a NewProposalKrafted type");
        }
        return NewProposalKrafted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), proposer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.proposer), title: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.title), description: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.description), link: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.link), proposalType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_type), votingStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_start_epoch), votingEndEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_end_epoch), executionStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_start_epoch), executionEndEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_end_epoch), newParams: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(reified.vector("u64")), item.fields.new_params), newWeights: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(reified.vector("u64")), item.fields.new_weights), newFeeInfo: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(reified.vector("u64")), item.fields.new_fee_info), fruitLife: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(FruitLife.reified()), item.fields.fruit_life) });
    }
    static fromBcs(data) { return NewProposalKrafted.fromFields(NewProposalKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, proposalId: this.proposalId.toString(), proposer: this.proposer, title: this.title, description: this.description, link: this.link, proposalType: this.proposalType.toString(), votingStartEpoch: this.votingStartEpoch.toString(), votingEndEpoch: this.votingEndEpoch.toString(), executionStartEpoch: this.executionStartEpoch.toString(), executionEndEpoch: this.executionEndEpoch.toString(), newParams: (0, reified_1.fieldToJSON)(`0x1::option::Option<vector<u64>>`, this.newParams), newWeights: (0, reified_1.fieldToJSON)(`0x1::option::Option<vector<u64>>`, this.newWeights), newFeeInfo: (0, reified_1.fieldToJSON)(`0x1::option::Option<vector<u64>>`, this.newFeeInfo), fruitLife: (0, reified_1.fieldToJSON)(`0x1::option::Option<0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife>`, this.fruitLife),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewProposalKrafted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), proposer: (0, reified_1.decodeFromJSONField)("address", field.proposer), title: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.title), description: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.description), link: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.link), proposalType: (0, reified_1.decodeFromJSONField)("u64", field.proposalType), votingStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.votingStartEpoch), votingEndEpoch: (0, reified_1.decodeFromJSONField)("u64", field.votingEndEpoch), executionStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.executionStartEpoch), executionEndEpoch: (0, reified_1.decodeFromJSONField)("u64", field.executionEndEpoch), newParams: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(reified.vector("u64")), field.newParams), newWeights: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(reified.vector("u64")), field.newWeights), newFeeInfo: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(reified.vector("u64")), field.newFeeInfo), fruitLife: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(FruitLife.reified()), field.fruitLife) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewProposalKrafted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewProposalKrafted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewProposalKrafted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewProposalKrafted object`);
    } return NewProposalKrafted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewProposalKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewProposalKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewProposalKrafted object`);
        }
        return NewProposalKrafted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.NewProposalKrafted = NewProposalKrafted;
NewProposalKrafted.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewProposalKrafted";
NewProposalKrafted.$numTypeParams = 0;
/* ============================== PoolGovernorBuzzes =============================== */
function isPoolGovernorBuzzes(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolGovernorBuzzes"; }
exports.isPoolGovernorBuzzes = isPoolGovernorBuzzes;
class PoolGovernorBuzzes {
    constructor(typeArgs, fields) {
        this.$typeName = PoolGovernorBuzzes.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolGovernorBuzzes.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.governorBuzzes = fields.governorBuzzes;
        ;
        this.count = fields.count;
    }
    static reified() { return { typeName: PoolGovernorBuzzes.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolGovernorBuzzes.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => PoolGovernorBuzzes.fromFields(fields), fromFieldsWithTypes: (item) => PoolGovernorBuzzes.fromFieldsWithTypes(item), fromBcs: (data) => PoolGovernorBuzzes.fromBcs(data), bcs: PoolGovernorBuzzes.bcs, fromJSONField: (field) => PoolGovernorBuzzes.fromJSONField(field), fromJSON: (json) => PoolGovernorBuzzes.fromJSON(json), fromSuiParsedData: (content) => PoolGovernorBuzzes.fromSuiParsedData(content), fetch: async (client, id) => PoolGovernorBuzzes.fetch(client, id), new: (fields) => { return new PoolGovernorBuzzes([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolGovernorBuzzes.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolGovernorBuzzes.reified()); }
    static get p() { return PoolGovernorBuzzes.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolGovernorBuzzes", {
            id: structs_9.UID.bcs, governor_buzzes: structs_8.LinkedTable.bcs(bcs_1.bcs.u64()), count: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PoolGovernorBuzzes.reified().new({ id: (0, reified_1.decodeFromFields)(structs_9.UID.reified(), fields.id), governorBuzzes: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified("u64", reified.phantom(GovernorBuzz.reified())), fields.governor_buzzes), count: (0, reified_1.decodeFromFields)("u64", fields.count) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolGovernorBuzzes(item.type)) {
            throw new Error("not a PoolGovernorBuzzes type");
        }
        return PoolGovernorBuzzes.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_9.UID.reified(), item.fields.id), governorBuzzes: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified("u64", reified.phantom(GovernorBuzz.reified())), item.fields.governor_buzzes), count: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.count) });
    }
    static fromBcs(data) { return PoolGovernorBuzzes.fromFields(PoolGovernorBuzzes.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, governorBuzzes: this.governorBuzzes.toJSONField(), count: this.count.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolGovernorBuzzes.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_9.UID.reified(), field.id), governorBuzzes: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified("u64", reified.phantom(GovernorBuzz.reified())), field.governorBuzzes), count: (0, reified_1.decodeFromJSONField)("u64", field.count) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolGovernorBuzzes.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolGovernorBuzzes.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolGovernorBuzzes(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolGovernorBuzzes object`);
    } return PoolGovernorBuzzes.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolGovernorBuzzes object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolGovernorBuzzes(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolGovernorBuzzes object`);
        }
        return PoolGovernorBuzzes.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PoolGovernorBuzzes = PoolGovernorBuzzes;
PoolGovernorBuzzes.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolGovernorBuzzes";
PoolGovernorBuzzes.$numTypeParams = 0;
/* ============================== PoolHive =============================== */
function isPoolHive(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHive<"); }
exports.isPoolHive = isPoolHive;
class PoolHive {
    constructor(typeArgs, fields) {
        this.$typeName = PoolHive.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.totalStaked = fields.totalStaked;
        ;
        this.totalUnbonding = fields.totalUnbonding;
        ;
        this.lpBeeBoxes = fields.lpBeeBoxes;
        ;
        this.gemsAvailable = fields.gemsAvailable;
        ;
        this.globalClaimIndex = fields.globalClaimIndex;
        ;
        this.lastClaimEpoch = fields.lastClaimEpoch;
        ;
        this.beeFruitList = fields.beeFruitList;
        ;
        this.proposalList = fields.proposalList;
        ;
        this.nextProposalId = fields.nextProposalId;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified(H) { return { typeName: PoolHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolHive.$typeName, ...[(0, reified_1.extractType)(H)]), typeArgs: [(0, reified_1.extractType)(H)], reifiedTypeArgs: [H], fromFields: (fields) => PoolHive.fromFields(H, fields), fromFieldsWithTypes: (item) => PoolHive.fromFieldsWithTypes(H, item), fromBcs: (data) => PoolHive.fromBcs(H, data), bcs: PoolHive.bcs, fromJSONField: (field) => PoolHive.fromJSONField(H, field), fromJSON: (json) => PoolHive.fromJSON(H, json), fromSuiParsedData: (content) => PoolHive.fromSuiParsedData(H, content), fetch: async (client, id) => PoolHive.fetch(client, H, id), new: (fields) => { return new PoolHive([(0, reified_1.extractType)(H)], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolHive.reified; }
    static phantom(H) { return (0, reified_1.phantom)(PoolHive.reified(H)); }
    static get p() { return PoolHive.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("PoolHive", {
            id: structs_9.UID.bcs, total_staked: bcs_1.bcs.u64(), total_unbonding: bcs_1.bcs.u64(), lp_bee_boxes: structs_8.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), gems_available: structs_11.HiveGems.bcs, global_claim_index: bcs_1.bcs.u256(), last_claim_epoch: bcs_1.bcs.u64(), bee_fruit_list: bcs_1.bcs.vector(structs_2.String.bcs), proposal_list: structs_8.LinkedTable.bcs(bcs_1.bcs.u64()), next_proposal_id: bcs_1.bcs.u64(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return PoolHive.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_9.UID.reified(), fields.id), totalStaked: (0, reified_1.decodeFromFields)("u64", fields.total_staked), totalUnbonding: (0, reified_1.decodeFromFields)("u64", fields.total_unbonding), lpBeeBoxes: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified("address", reified.phantom(LpBeeBox.reified(typeArg))), fields.lp_bee_boxes), gemsAvailable: (0, reified_1.decodeFromFields)(structs_11.HiveGems.reified(), fields.gems_available), globalClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.global_claim_index), lastClaimEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_claim_epoch), beeFruitList: (0, reified_1.decodeFromFields)(reified.vector(structs_2.String.reified()), fields.bee_fruit_list), proposalList: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified("u64", reified.phantom(Proposal.reified())), fields.proposal_list), nextProposalId: (0, reified_1.decodeFromFields)("u64", fields.next_proposal_id), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isPoolHive(item.type)) {
            throw new Error("not a PoolHive type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return PoolHive.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_9.UID.reified(), item.fields.id), totalStaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_staked), totalUnbonding: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_unbonding), lpBeeBoxes: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified("address", reified.phantom(LpBeeBox.reified(typeArg))), item.fields.lp_bee_boxes), gemsAvailable: (0, reified_1.decodeFromFieldsWithTypes)(structs_11.HiveGems.reified(), item.fields.gems_available), globalClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.global_claim_index), lastClaimEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_claim_epoch), beeFruitList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_2.String.reified()), item.fields.bee_fruit_list), proposalList: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified("u64", reified.phantom(Proposal.reified())), item.fields.proposal_list), nextProposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_proposal_id), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(typeArg, data) { return PoolHive.fromFields(typeArg, PoolHive.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, totalStaked: this.totalStaked.toString(), totalUnbonding: this.totalUnbonding.toString(), lpBeeBoxes: this.lpBeeBoxes.toJSONField(), gemsAvailable: this.gemsAvailable.toJSONField(), globalClaimIndex: this.globalClaimIndex.toString(), lastClaimEpoch: this.lastClaimEpoch.toString(), beeFruitList: (0, reified_1.fieldToJSON)(`vector<0x1::ascii::String>`, this.beeFruitList), proposalList: this.proposalList.toJSONField(), nextProposalId: this.nextProposalId.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return PoolHive.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_9.UID.reified(), field.id), totalStaked: (0, reified_1.decodeFromJSONField)("u64", field.totalStaked), totalUnbonding: (0, reified_1.decodeFromJSONField)("u64", field.totalUnbonding), lpBeeBoxes: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified("address", reified.phantom(LpBeeBox.reified(typeArg))), field.lpBeeBoxes), gemsAvailable: (0, reified_1.decodeFromJSONField)(structs_11.HiveGems.reified(), field.gemsAvailable), globalClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.globalClaimIndex), lastClaimEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastClaimEpoch), beeFruitList: (0, reified_1.decodeFromJSONField)(reified.vector(structs_2.String.reified()), field.beeFruitList), proposalList: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified("u64", reified.phantom(Proposal.reified())), field.proposalList), nextProposalId: (0, reified_1.decodeFromJSONField)("u64", field.nextProposalId), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== PoolHive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(PoolHive.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return PoolHive.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolHive(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolHive object`);
    } return PoolHive.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolHive object`);
        }
        return PoolHive.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PoolHive = PoolHive;
PoolHive.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHive";
PoolHive.$numTypeParams = 1;
/* ============================== PoolHiveKrafted =============================== */
function isPoolHiveKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveKrafted"; }
exports.isPoolHiveKrafted = isPoolHiveKrafted;
class PoolHiveKrafted {
    constructor(typeArgs, fields) {
        this.$typeName = PoolHiveKrafted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolHiveKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolId = fields.poolId;
        ;
        this.lpIdentifier = fields.lpIdentifier;
        ;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: PoolHiveKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolHiveKrafted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => PoolHiveKrafted.fromFields(fields), fromFieldsWithTypes: (item) => PoolHiveKrafted.fromFieldsWithTypes(item), fromBcs: (data) => PoolHiveKrafted.fromBcs(data), bcs: PoolHiveKrafted.bcs, fromJSONField: (field) => PoolHiveKrafted.fromJSONField(field), fromJSON: (json) => PoolHiveKrafted.fromJSON(json), fromSuiParsedData: (content) => PoolHiveKrafted.fromSuiParsedData(content), fetch: async (client, id) => PoolHiveKrafted.fetch(client, id), new: (fields) => { return new PoolHiveKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolHiveKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolHiveKrafted.reified()); }
    static get p() { return PoolHiveKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolHiveKrafted", {
            pool_id: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), lp_identifier: structs_2.String.bcs, pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PoolHiveKrafted.reified().new({ poolId: (0, reified_1.decodeFromFields)("address", fields.pool_id), lpIdentifier: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.lp_identifier), poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolHiveKrafted(item.type)) {
            throw new Error("not a PoolHiveKrafted type");
        }
        return PoolHiveKrafted.reified().new({ poolId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_id), lpIdentifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.lp_identifier), poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return PoolHiveKrafted.fromFields(PoolHiveKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            poolId: this.poolId, lpIdentifier: this.lpIdentifier, poolHiveAddr: this.poolHiveAddr, curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolHiveKrafted.reified().new({ poolId: (0, reified_1.decodeFromJSONField)("address", field.poolId), lpIdentifier: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.lpIdentifier), poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolHiveKrafted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolHiveKrafted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolHiveKrafted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolHiveKrafted object`);
    } return PoolHiveKrafted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolHiveKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolHiveKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolHiveKrafted object`);
        }
        return PoolHiveKrafted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PoolHiveKrafted = PoolHiveKrafted;
PoolHiveKrafted.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveKrafted";
PoolHiveKrafted.$numTypeParams = 0;
/* ============================== PoolHiveNecatarPointsUpdated =============================== */
function isPoolHiveNecatarPointsUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveNecatarPointsUpdated"; }
exports.isPoolHiveNecatarPointsUpdated = isPoolHiveNecatarPointsUpdated;
class PoolHiveNecatarPointsUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = PoolHiveNecatarPointsUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolHiveNecatarPointsUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveIdentifier = fields.poolHiveIdentifier;
        ;
        this.newGemsPoints = fields.newGemsPoints;
        ;
        this.totalGemsPoints = fields.totalGemsPoints;
    }
    static reified() { return { typeName: PoolHiveNecatarPointsUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolHiveNecatarPointsUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => PoolHiveNecatarPointsUpdated.fromFields(fields), fromFieldsWithTypes: (item) => PoolHiveNecatarPointsUpdated.fromFieldsWithTypes(item), fromBcs: (data) => PoolHiveNecatarPointsUpdated.fromBcs(data), bcs: PoolHiveNecatarPointsUpdated.bcs, fromJSONField: (field) => PoolHiveNecatarPointsUpdated.fromJSONField(field), fromJSON: (json) => PoolHiveNecatarPointsUpdated.fromJSON(json), fromSuiParsedData: (content) => PoolHiveNecatarPointsUpdated.fromSuiParsedData(content), fetch: async (client, id) => PoolHiveNecatarPointsUpdated.fetch(client, id), new: (fields) => { return new PoolHiveNecatarPointsUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolHiveNecatarPointsUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolHiveNecatarPointsUpdated.reified()); }
    static get p() { return PoolHiveNecatarPointsUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolHiveNecatarPointsUpdated", {
            pool_hive_identifier: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), new_gems_points: bcs_1.bcs.u64(), total_gems_points: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PoolHiveNecatarPointsUpdated.reified().new({ poolHiveIdentifier: (0, reified_1.decodeFromFields)("address", fields.pool_hive_identifier), newGemsPoints: (0, reified_1.decodeFromFields)("u64", fields.new_gems_points), totalGemsPoints: (0, reified_1.decodeFromFields)("u64", fields.total_gems_points) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolHiveNecatarPointsUpdated(item.type)) {
            throw new Error("not a PoolHiveNecatarPointsUpdated type");
        }
        return PoolHiveNecatarPointsUpdated.reified().new({ poolHiveIdentifier: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_identifier), newGemsPoints: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_gems_points), totalGemsPoints: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_gems_points) });
    }
    static fromBcs(data) { return PoolHiveNecatarPointsUpdated.fromFields(PoolHiveNecatarPointsUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveIdentifier: this.poolHiveIdentifier, newGemsPoints: this.newGemsPoints.toString(), totalGemsPoints: this.totalGemsPoints.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolHiveNecatarPointsUpdated.reified().new({ poolHiveIdentifier: (0, reified_1.decodeFromJSONField)("address", field.poolHiveIdentifier), newGemsPoints: (0, reified_1.decodeFromJSONField)("u64", field.newGemsPoints), totalGemsPoints: (0, reified_1.decodeFromJSONField)("u64", field.totalGemsPoints) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolHiveNecatarPointsUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolHiveNecatarPointsUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolHiveNecatarPointsUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolHiveNecatarPointsUpdated object`);
    } return PoolHiveNecatarPointsUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolHiveNecatarPointsUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolHiveNecatarPointsUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolHiveNecatarPointsUpdated object`);
        }
        return PoolHiveNecatarPointsUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PoolHiveNecatarPointsUpdated = PoolHiveNecatarPointsUpdated;
PoolHiveNecatarPointsUpdated.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveNecatarPointsUpdated";
PoolHiveNecatarPointsUpdated.$numTypeParams = 0;
/* ============================== PoolsGovernor =============================== */
function isPoolsGovernor(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernor"; }
exports.isPoolsGovernor = isPoolsGovernor;
class PoolsGovernor {
    constructor(typeArgs, fields) {
        this.$typeName = PoolsGovernor.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolsGovernor.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.governorProfile = fields.governorProfile;
        ;
        this.managedBuzzes = fields.managedBuzzes;
        ;
        this.buzzesToStore = fields.buzzesToStore;
        ;
        this.gemsCycle = fields.gemsCycle;
        ;
        this.gemsSchedule = fields.gemsSchedule;
        ;
        this.totalGemsPoints = fields.totalGemsPoints;
        ;
        this.gemsPointsMap = fields.gemsPointsMap;
        ;
        this.dexDaoCap = fields.dexDaoCap;
        ;
        this.unbondingDuration = fields.unbondingDuration;
        ;
        this.voteConfig = fields.voteConfig;
        ;
        this.activePoolHives = fields.activePoolHives;
        ;
        this.poolHives = fields.poolHives;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: PoolsGovernor.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolsGovernor.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => PoolsGovernor.fromFields(fields), fromFieldsWithTypes: (item) => PoolsGovernor.fromFieldsWithTypes(item), fromBcs: (data) => PoolsGovernor.fromBcs(data), bcs: PoolsGovernor.bcs, fromJSONField: (field) => PoolsGovernor.fromJSONField(field), fromJSON: (json) => PoolsGovernor.fromJSON(json), fromSuiParsedData: (content) => PoolsGovernor.fromSuiParsedData(content), fetch: async (client, id) => PoolsGovernor.fetch(client, id), new: (fields) => { return new PoolsGovernor([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolsGovernor.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolsGovernor.reified()); }
    static get p() { return PoolsGovernor.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolsGovernor", {
            id: structs_9.UID.bcs, governor_profile: structs_1.HiveProfile.bcs, managed_buzzes: structs_8.LinkedTable.bcs(structs_2.String.bcs), buzzes_to_store: bcs_1.bcs.u64(), gems_cycle: bcs_1.bcs.u64(), gems_schedule: GemsSchedule.bcs, total_gems_points: bcs_1.bcs.u64(), gems_points_map: structs_8.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), dex_dao_cap: structs_10.DexDaoCapability.bcs, unbonding_duration: bcs_1.bcs.u64(), vote_config: VoteConfig.bcs, active_pool_hives: bcs_1.bcs.u64(), pool_hives: structs_8.LinkedTable.bcs(structs_2.String.bcs), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PoolsGovernor.reified().new({ id: (0, reified_1.decodeFromFields)(structs_9.UID.reified(), fields.id), governorProfile: (0, reified_1.decodeFromFields)(structs_1.HiveProfile.reified(), fields.governor_profile), managedBuzzes: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified(structs_2.String.reified(), reified.phantom(SystemBuzz.reified())), fields.managed_buzzes), buzzesToStore: (0, reified_1.decodeFromFields)("u64", fields.buzzes_to_store), gemsCycle: (0, reified_1.decodeFromFields)("u64", fields.gems_cycle), gemsSchedule: (0, reified_1.decodeFromFields)(GemsSchedule.reified(), fields.gems_schedule), totalGemsPoints: (0, reified_1.decodeFromFields)("u64", fields.total_gems_points), gemsPointsMap: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified("address", reified.phantom("u64")), fields.gems_points_map), dexDaoCap: (0, reified_1.decodeFromFields)(structs_10.DexDaoCapability.reified(), fields.dex_dao_cap), unbondingDuration: (0, reified_1.decodeFromFields)("u64", fields.unbonding_duration), voteConfig: (0, reified_1.decodeFromFields)(VoteConfig.reified(), fields.vote_config), activePoolHives: (0, reified_1.decodeFromFields)("u64", fields.active_pool_hives), poolHives: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified(structs_2.String.reified(), reified.phantom("address")), fields.pool_hives), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolsGovernor(item.type)) {
            throw new Error("not a PoolsGovernor type");
        }
        return PoolsGovernor.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_9.UID.reified(), item.fields.id), governorProfile: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.HiveProfile.reified(), item.fields.governor_profile), managedBuzzes: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified(structs_2.String.reified(), reified.phantom(SystemBuzz.reified())), item.fields.managed_buzzes), buzzesToStore: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.buzzes_to_store), gemsCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gems_cycle), gemsSchedule: (0, reified_1.decodeFromFieldsWithTypes)(GemsSchedule.reified(), item.fields.gems_schedule), totalGemsPoints: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_gems_points), gemsPointsMap: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified("address", reified.phantom("u64")), item.fields.gems_points_map), dexDaoCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_10.DexDaoCapability.reified(), item.fields.dex_dao_cap), unbondingDuration: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unbonding_duration), voteConfig: (0, reified_1.decodeFromFieldsWithTypes)(VoteConfig.reified(), item.fields.vote_config), activePoolHives: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_pool_hives), poolHives: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified(structs_2.String.reified(), reified.phantom("address")), item.fields.pool_hives), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return PoolsGovernor.fromFields(PoolsGovernor.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, governorProfile: this.governorProfile.toJSONField(), managedBuzzes: this.managedBuzzes.toJSONField(), buzzesToStore: this.buzzesToStore.toString(), gemsCycle: this.gemsCycle.toString(), gemsSchedule: this.gemsSchedule.toJSONField(), totalGemsPoints: this.totalGemsPoints.toString(), gemsPointsMap: this.gemsPointsMap.toJSONField(), dexDaoCap: this.dexDaoCap.toJSONField(), unbondingDuration: this.unbondingDuration.toString(), voteConfig: this.voteConfig.toJSONField(), activePoolHives: this.activePoolHives.toString(), poolHives: this.poolHives.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolsGovernor.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_9.UID.reified(), field.id), governorProfile: (0, reified_1.decodeFromJSONField)(structs_1.HiveProfile.reified(), field.governorProfile), managedBuzzes: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified(structs_2.String.reified(), reified.phantom(SystemBuzz.reified())), field.managedBuzzes), buzzesToStore: (0, reified_1.decodeFromJSONField)("u64", field.buzzesToStore), gemsCycle: (0, reified_1.decodeFromJSONField)("u64", field.gemsCycle), gemsSchedule: (0, reified_1.decodeFromJSONField)(GemsSchedule.reified(), field.gemsSchedule), totalGemsPoints: (0, reified_1.decodeFromJSONField)("u64", field.totalGemsPoints), gemsPointsMap: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified("address", reified.phantom("u64")), field.gemsPointsMap), dexDaoCap: (0, reified_1.decodeFromJSONField)(structs_10.DexDaoCapability.reified(), field.dexDaoCap), unbondingDuration: (0, reified_1.decodeFromJSONField)("u64", field.unbondingDuration), voteConfig: (0, reified_1.decodeFromJSONField)(VoteConfig.reified(), field.voteConfig), activePoolHives: (0, reified_1.decodeFromJSONField)("u64", field.activePoolHives), poolHives: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified(structs_2.String.reified(), reified.phantom("address")), field.poolHives), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolsGovernor.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolsGovernor.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolsGovernor(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolsGovernor object`);
    } return PoolsGovernor.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolsGovernor object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolsGovernor(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolsGovernor object`);
        }
        return PoolsGovernor.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PoolsGovernor = PoolsGovernor;
PoolsGovernor.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernor";
PoolsGovernor.$numTypeParams = 0;
/* ============================== PoolsGovernorUpdated =============================== */
function isPoolsGovernorUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernorUpdated"; }
exports.isPoolsGovernorUpdated = isPoolsGovernorUpdated;
class PoolsGovernorUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = PoolsGovernorUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolsGovernorUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.proposalRequiredDeposit = fields.proposalRequiredDeposit;
        ;
        this.votingStartDelay = fields.votingStartDelay;
        ;
        this.votingPeriodLength = fields.votingPeriodLength;
        ;
        this.executionDelay = fields.executionDelay;
        ;
        this.executionPeriodLength = fields.executionPeriodLength;
        ;
        this.proposalRequiredQuorum = fields.proposalRequiredQuorum;
        ;
        this.proposalApprovalThreshold = fields.proposalApprovalThreshold;
        ;
        this.buzzesToStore = fields.buzzesToStore;
    }
    static reified() { return { typeName: PoolsGovernorUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolsGovernorUpdated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => PoolsGovernorUpdated.fromFields(fields), fromFieldsWithTypes: (item) => PoolsGovernorUpdated.fromFieldsWithTypes(item), fromBcs: (data) => PoolsGovernorUpdated.fromBcs(data), bcs: PoolsGovernorUpdated.bcs, fromJSONField: (field) => PoolsGovernorUpdated.fromJSONField(field), fromJSON: (json) => PoolsGovernorUpdated.fromJSON(json), fromSuiParsedData: (content) => PoolsGovernorUpdated.fromSuiParsedData(content), fetch: async (client, id) => PoolsGovernorUpdated.fetch(client, id), new: (fields) => { return new PoolsGovernorUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolsGovernorUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolsGovernorUpdated.reified()); }
    static get p() { return PoolsGovernorUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolsGovernorUpdated", {
            proposal_required_deposit: bcs_1.bcs.u64(), voting_start_delay: bcs_1.bcs.u64(), voting_period_length: bcs_1.bcs.u64(), execution_delay: bcs_1.bcs.u64(), execution_period_length: bcs_1.bcs.u64(), proposal_required_quorum: bcs_1.bcs.u64(), proposal_approval_threshold: bcs_1.bcs.u64(), buzzes_to_store: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PoolsGovernorUpdated.reified().new({ proposalRequiredDeposit: (0, reified_1.decodeFromFields)("u64", fields.proposal_required_deposit), votingStartDelay: (0, reified_1.decodeFromFields)("u64", fields.voting_start_delay), votingPeriodLength: (0, reified_1.decodeFromFields)("u64", fields.voting_period_length), executionDelay: (0, reified_1.decodeFromFields)("u64", fields.execution_delay), executionPeriodLength: (0, reified_1.decodeFromFields)("u64", fields.execution_period_length), proposalRequiredQuorum: (0, reified_1.decodeFromFields)("u64", fields.proposal_required_quorum), proposalApprovalThreshold: (0, reified_1.decodeFromFields)("u64", fields.proposal_approval_threshold), buzzesToStore: (0, reified_1.decodeFromFields)("u64", fields.buzzes_to_store) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolsGovernorUpdated(item.type)) {
            throw new Error("not a PoolsGovernorUpdated type");
        }
        return PoolsGovernorUpdated.reified().new({ proposalRequiredDeposit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_required_deposit), votingStartDelay: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_start_delay), votingPeriodLength: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_period_length), executionDelay: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_delay), executionPeriodLength: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_period_length), proposalRequiredQuorum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_required_quorum), proposalApprovalThreshold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_approval_threshold), buzzesToStore: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.buzzes_to_store) });
    }
    static fromBcs(data) { return PoolsGovernorUpdated.fromFields(PoolsGovernorUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            proposalRequiredDeposit: this.proposalRequiredDeposit.toString(), votingStartDelay: this.votingStartDelay.toString(), votingPeriodLength: this.votingPeriodLength.toString(), executionDelay: this.executionDelay.toString(), executionPeriodLength: this.executionPeriodLength.toString(), proposalRequiredQuorum: this.proposalRequiredQuorum.toString(), proposalApprovalThreshold: this.proposalApprovalThreshold.toString(), buzzesToStore: this.buzzesToStore.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolsGovernorUpdated.reified().new({ proposalRequiredDeposit: (0, reified_1.decodeFromJSONField)("u64", field.proposalRequiredDeposit), votingStartDelay: (0, reified_1.decodeFromJSONField)("u64", field.votingStartDelay), votingPeriodLength: (0, reified_1.decodeFromJSONField)("u64", field.votingPeriodLength), executionDelay: (0, reified_1.decodeFromJSONField)("u64", field.executionDelay), executionPeriodLength: (0, reified_1.decodeFromJSONField)("u64", field.executionPeriodLength), proposalRequiredQuorum: (0, reified_1.decodeFromJSONField)("u64", field.proposalRequiredQuorum), proposalApprovalThreshold: (0, reified_1.decodeFromJSONField)("u64", field.proposalApprovalThreshold), buzzesToStore: (0, reified_1.decodeFromJSONField)("u64", field.buzzesToStore) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolsGovernorUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolsGovernorUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolsGovernorUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolsGovernorUpdated object`);
    } return PoolsGovernorUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolsGovernorUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolsGovernorUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolsGovernorUpdated object`);
        }
        return PoolsGovernorUpdated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PoolsGovernorUpdated = PoolsGovernorUpdated;
PoolsGovernorUpdated.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernorUpdated";
PoolsGovernorUpdated.$numTypeParams = 0;
/* ============================== Proposal =============================== */
function isProposal(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Proposal"; }
exports.isProposal = isProposal;
class Proposal {
    constructor(typeArgs, fields) {
        this.$typeName = Proposal.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Proposal.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.proposalId = fields.proposalId;
        ;
        this.proposer = fields.proposer;
        ;
        this.deposit = fields.deposit;
        ;
        this.title = fields.title;
        ;
        this.description = fields.description;
        ;
        this.link = fields.link;
        ;
        this.proposalType = fields.proposalType;
        ;
        this.votingStartEpoch = fields.votingStartEpoch;
        ;
        this.votingEndEpoch = fields.votingEndEpoch;
        ;
        this.executionStartEpoch = fields.executionStartEpoch;
        ;
        this.executionEndEpoch = fields.executionEndEpoch;
        ;
        this.proposalStatus = fields.proposalStatus;
        ;
        this.yesVotes = fields.yesVotes;
        ;
        this.noVotes = fields.noVotes;
        ;
        this.voters = fields.voters;
        ;
        this.fruitLife = fields.fruitLife;
        ;
        this.newParams = fields.newParams;
        ;
        this.newWeights = fields.newWeights;
        ;
        this.newFeeInfo = fields.newFeeInfo;
    }
    static reified() { return { typeName: Proposal.$typeName, fullTypeName: (0, util_1.composeSuiType)(Proposal.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Proposal.fromFields(fields), fromFieldsWithTypes: (item) => Proposal.fromFieldsWithTypes(item), fromBcs: (data) => Proposal.fromBcs(data), bcs: Proposal.bcs, fromJSONField: (field) => Proposal.fromJSONField(field), fromJSON: (json) => Proposal.fromJSON(json), fromSuiParsedData: (content) => Proposal.fromSuiParsedData(content), fetch: async (client, id) => Proposal.fetch(client, id), new: (fields) => { return new Proposal([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Proposal.reified(); }
    static phantom() { return (0, reified_1.phantom)(Proposal.reified()); }
    static get p() { return Proposal.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Proposal", {
            proposal_id: bcs_1.bcs.u64(), proposer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), deposit: structs_7.Balance.bcs, title: structs_4.String.bcs, description: structs_4.String.bcs, link: structs_4.String.bcs, proposal_type: bcs_1.bcs.u64(), voting_start_epoch: bcs_1.bcs.u64(), voting_end_epoch: bcs_1.bcs.u64(), execution_start_epoch: bcs_1.bcs.u64(), execution_end_epoch: bcs_1.bcs.u64(), proposal_status: bcs_1.bcs.u64(), yes_votes: bcs_1.bcs.u64(), no_votes: bcs_1.bcs.u64(), voters: structs_8.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), fruit_life: structs_3.Option.bcs(FruitLife.bcs), new_params: structs_3.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64())), new_weights: structs_3.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64())), new_fee_info: structs_3.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64()))
        });
    }
    ;
    static fromFields(fields) { return Proposal.reified().new({ proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), proposer: (0, reified_1.decodeFromFields)("address", fields.proposer), deposit: (0, reified_1.decodeFromFields)(structs_7.Balance.reified(reified.phantom(structs_6.HIVE.reified())), fields.deposit), title: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.title), description: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.description), link: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.link), proposalType: (0, reified_1.decodeFromFields)("u64", fields.proposal_type), votingStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.voting_start_epoch), votingEndEpoch: (0, reified_1.decodeFromFields)("u64", fields.voting_end_epoch), executionStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.execution_start_epoch), executionEndEpoch: (0, reified_1.decodeFromFields)("u64", fields.execution_end_epoch), proposalStatus: (0, reified_1.decodeFromFields)("u64", fields.proposal_status), yesVotes: (0, reified_1.decodeFromFields)("u64", fields.yes_votes), noVotes: (0, reified_1.decodeFromFields)("u64", fields.no_votes), voters: (0, reified_1.decodeFromFields)(structs_8.LinkedTable.reified("address", reified.phantom("bool")), fields.voters), fruitLife: (0, reified_1.decodeFromFields)(structs_3.Option.reified(FruitLife.reified()), fields.fruit_life), newParams: (0, reified_1.decodeFromFields)(structs_3.Option.reified(reified.vector("u64")), fields.new_params), newWeights: (0, reified_1.decodeFromFields)(structs_3.Option.reified(reified.vector("u64")), fields.new_weights), newFeeInfo: (0, reified_1.decodeFromFields)(structs_3.Option.reified(reified.vector("u64")), fields.new_fee_info) }); }
    static fromFieldsWithTypes(item) {
        if (!isProposal(item.type)) {
            throw new Error("not a Proposal type");
        }
        return Proposal.reified().new({ proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), proposer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.proposer), deposit: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.Balance.reified(reified.phantom(structs_6.HIVE.reified())), item.fields.deposit), title: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.title), description: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.description), link: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.link), proposalType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_type), votingStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_start_epoch), votingEndEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_end_epoch), executionStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_start_epoch), executionEndEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_end_epoch), proposalStatus: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_status), yesVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.yes_votes), noVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.no_votes), voters: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.LinkedTable.reified("address", reified.phantom("bool")), item.fields.voters), fruitLife: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(FruitLife.reified()), item.fields.fruit_life), newParams: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(reified.vector("u64")), item.fields.new_params), newWeights: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(reified.vector("u64")), item.fields.new_weights), newFeeInfo: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(reified.vector("u64")), item.fields.new_fee_info) });
    }
    static fromBcs(data) { return Proposal.fromFields(Proposal.bcs.parse(data)); }
    toJSONField() {
        return {
            proposalId: this.proposalId.toString(), proposer: this.proposer, deposit: this.deposit.toJSONField(), title: this.title, description: this.description, link: this.link, proposalType: this.proposalType.toString(), votingStartEpoch: this.votingStartEpoch.toString(), votingEndEpoch: this.votingEndEpoch.toString(), executionStartEpoch: this.executionStartEpoch.toString(), executionEndEpoch: this.executionEndEpoch.toString(), proposalStatus: this.proposalStatus.toString(), yesVotes: this.yesVotes.toString(), noVotes: this.noVotes.toString(), voters: this.voters.toJSONField(), fruitLife: (0, reified_1.fieldToJSON)(`0x1::option::Option<0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife>`, this.fruitLife), newParams: (0, reified_1.fieldToJSON)(`0x1::option::Option<vector<u64>>`, this.newParams), newWeights: (0, reified_1.fieldToJSON)(`0x1::option::Option<vector<u64>>`, this.newWeights), newFeeInfo: (0, reified_1.fieldToJSON)(`0x1::option::Option<vector<u64>>`, this.newFeeInfo),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Proposal.reified().new({ proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), proposer: (0, reified_1.decodeFromJSONField)("address", field.proposer), deposit: (0, reified_1.decodeFromJSONField)(structs_7.Balance.reified(reified.phantom(structs_6.HIVE.reified())), field.deposit), title: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.title), description: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.description), link: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.link), proposalType: (0, reified_1.decodeFromJSONField)("u64", field.proposalType), votingStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.votingStartEpoch), votingEndEpoch: (0, reified_1.decodeFromJSONField)("u64", field.votingEndEpoch), executionStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.executionStartEpoch), executionEndEpoch: (0, reified_1.decodeFromJSONField)("u64", field.executionEndEpoch), proposalStatus: (0, reified_1.decodeFromJSONField)("u64", field.proposalStatus), yesVotes: (0, reified_1.decodeFromJSONField)("u64", field.yesVotes), noVotes: (0, reified_1.decodeFromJSONField)("u64", field.noVotes), voters: (0, reified_1.decodeFromJSONField)(structs_8.LinkedTable.reified("address", reified.phantom("bool")), field.voters), fruitLife: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(FruitLife.reified()), field.fruitLife), newParams: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(reified.vector("u64")), field.newParams), newWeights: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(reified.vector("u64")), field.newWeights), newFeeInfo: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(reified.vector("u64")), field.newFeeInfo) }); }
    static fromJSON(json) {
        if (json.$typeName !== Proposal.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Proposal.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isProposal(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Proposal object`);
    } return Proposal.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Proposal object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProposal(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Proposal object`);
        }
        return Proposal.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Proposal = Proposal;
Proposal.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Proposal";
Proposal.$numTypeParams = 0;
/* ============================== ProposalDeleted =============================== */
function isProposalDeleted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalDeleted"; }
exports.isProposalDeleted = isProposalDeleted;
class ProposalDeleted {
    constructor(typeArgs, fields) {
        this.$typeName = ProposalDeleted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ProposalDeleted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.proposalId = fields.proposalId;
        ;
        this.proposalType = fields.proposalType;
        ;
        this.proposalStatus = fields.proposalStatus;
    }
    static reified() { return { typeName: ProposalDeleted.$typeName, fullTypeName: (0, util_1.composeSuiType)(ProposalDeleted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ProposalDeleted.fromFields(fields), fromFieldsWithTypes: (item) => ProposalDeleted.fromFieldsWithTypes(item), fromBcs: (data) => ProposalDeleted.fromBcs(data), bcs: ProposalDeleted.bcs, fromJSONField: (field) => ProposalDeleted.fromJSONField(field), fromJSON: (json) => ProposalDeleted.fromJSON(json), fromSuiParsedData: (content) => ProposalDeleted.fromSuiParsedData(content), fetch: async (client, id) => ProposalDeleted.fetch(client, id), new: (fields) => { return new ProposalDeleted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ProposalDeleted.reified(); }
    static phantom() { return (0, reified_1.phantom)(ProposalDeleted.reified()); }
    static get p() { return ProposalDeleted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ProposalDeleted", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), proposal_id: bcs_1.bcs.u64(), proposal_type: bcs_1.bcs.u64(), proposal_status: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ProposalDeleted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), proposalType: (0, reified_1.decodeFromFields)("u64", fields.proposal_type), proposalStatus: (0, reified_1.decodeFromFields)("u64", fields.proposal_status) }); }
    static fromFieldsWithTypes(item) {
        if (!isProposalDeleted(item.type)) {
            throw new Error("not a ProposalDeleted type");
        }
        return ProposalDeleted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), proposalType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_type), proposalStatus: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_status) });
    }
    static fromBcs(data) { return ProposalDeleted.fromFields(ProposalDeleted.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, proposalId: this.proposalId.toString(), proposalType: this.proposalType.toString(), proposalStatus: this.proposalStatus.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ProposalDeleted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), proposalType: (0, reified_1.decodeFromJSONField)("u64", field.proposalType), proposalStatus: (0, reified_1.decodeFromJSONField)("u64", field.proposalStatus) }); }
    static fromJSON(json) {
        if (json.$typeName !== ProposalDeleted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ProposalDeleted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isProposalDeleted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ProposalDeleted object`);
    } return ProposalDeleted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ProposalDeleted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProposalDeleted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProposalDeleted object`);
        }
        return ProposalDeleted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ProposalDeleted = ProposalDeleted;
ProposalDeleted.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalDeleted";
ProposalDeleted.$numTypeParams = 0;
/* ============================== ProposalEvaluated =============================== */
function isProposalEvaluated(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalEvaluated"; }
exports.isProposalEvaluated = isProposalEvaluated;
class ProposalEvaluated {
    constructor(typeArgs, fields) {
        this.$typeName = ProposalEvaluated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ProposalEvaluated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.proposalId = fields.proposalId;
        ;
        this.proposalStatus = fields.proposalStatus;
        ;
        this.yesVotes = fields.yesVotes;
        ;
        this.noVotes = fields.noVotes;
        ;
        this.totalPossibleVotes = fields.totalPossibleVotes;
        ;
        this.votesQuorum = fields.votesQuorum;
        ;
        this.yesVotesThreshold = fields.yesVotesThreshold;
    }
    static reified() { return { typeName: ProposalEvaluated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ProposalEvaluated.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ProposalEvaluated.fromFields(fields), fromFieldsWithTypes: (item) => ProposalEvaluated.fromFieldsWithTypes(item), fromBcs: (data) => ProposalEvaluated.fromBcs(data), bcs: ProposalEvaluated.bcs, fromJSONField: (field) => ProposalEvaluated.fromJSONField(field), fromJSON: (json) => ProposalEvaluated.fromJSON(json), fromSuiParsedData: (content) => ProposalEvaluated.fromSuiParsedData(content), fetch: async (client, id) => ProposalEvaluated.fetch(client, id), new: (fields) => { return new ProposalEvaluated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ProposalEvaluated.reified(); }
    static phantom() { return (0, reified_1.phantom)(ProposalEvaluated.reified()); }
    static get p() { return ProposalEvaluated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ProposalEvaluated", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), proposal_id: bcs_1.bcs.u64(), proposal_status: bcs_1.bcs.u64(), yes_votes: bcs_1.bcs.u64(), no_votes: bcs_1.bcs.u64(), total_possible_votes: bcs_1.bcs.u64(), votes_quorum: bcs_1.bcs.u64(), yes_votes_threshold: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ProposalEvaluated.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), proposalStatus: (0, reified_1.decodeFromFields)("u64", fields.proposal_status), yesVotes: (0, reified_1.decodeFromFields)("u64", fields.yes_votes), noVotes: (0, reified_1.decodeFromFields)("u64", fields.no_votes), totalPossibleVotes: (0, reified_1.decodeFromFields)("u64", fields.total_possible_votes), votesQuorum: (0, reified_1.decodeFromFields)("u64", fields.votes_quorum), yesVotesThreshold: (0, reified_1.decodeFromFields)("u64", fields.yes_votes_threshold) }); }
    static fromFieldsWithTypes(item) {
        if (!isProposalEvaluated(item.type)) {
            throw new Error("not a ProposalEvaluated type");
        }
        return ProposalEvaluated.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), proposalStatus: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_status), yesVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.yes_votes), noVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.no_votes), totalPossibleVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_possible_votes), votesQuorum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.votes_quorum), yesVotesThreshold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.yes_votes_threshold) });
    }
    static fromBcs(data) { return ProposalEvaluated.fromFields(ProposalEvaluated.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, proposalId: this.proposalId.toString(), proposalStatus: this.proposalStatus.toString(), yesVotes: this.yesVotes.toString(), noVotes: this.noVotes.toString(), totalPossibleVotes: this.totalPossibleVotes.toString(), votesQuorum: this.votesQuorum.toString(), yesVotesThreshold: this.yesVotesThreshold.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ProposalEvaluated.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), proposalStatus: (0, reified_1.decodeFromJSONField)("u64", field.proposalStatus), yesVotes: (0, reified_1.decodeFromJSONField)("u64", field.yesVotes), noVotes: (0, reified_1.decodeFromJSONField)("u64", field.noVotes), totalPossibleVotes: (0, reified_1.decodeFromJSONField)("u64", field.totalPossibleVotes), votesQuorum: (0, reified_1.decodeFromJSONField)("u64", field.votesQuorum), yesVotesThreshold: (0, reified_1.decodeFromJSONField)("u64", field.yesVotesThreshold) }); }
    static fromJSON(json) {
        if (json.$typeName !== ProposalEvaluated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ProposalEvaluated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isProposalEvaluated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ProposalEvaluated object`);
    } return ProposalEvaluated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ProposalEvaluated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProposalEvaluated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProposalEvaluated object`);
        }
        return ProposalEvaluated.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ProposalEvaluated = ProposalEvaluated;
ProposalEvaluated.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalEvaluated";
ProposalEvaluated.$numTypeParams = 0;
/* ============================== ProposalExecuted =============================== */
function isProposalExecuted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalExecuted"; }
exports.isProposalExecuted = isProposalExecuted;
class ProposalExecuted {
    constructor(typeArgs, fields) {
        this.$typeName = ProposalExecuted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ProposalExecuted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.proposalId = fields.proposalId;
        ;
        this.proposalType = fields.proposalType;
    }
    static reified() { return { typeName: ProposalExecuted.$typeName, fullTypeName: (0, util_1.composeSuiType)(ProposalExecuted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ProposalExecuted.fromFields(fields), fromFieldsWithTypes: (item) => ProposalExecuted.fromFieldsWithTypes(item), fromBcs: (data) => ProposalExecuted.fromBcs(data), bcs: ProposalExecuted.bcs, fromJSONField: (field) => ProposalExecuted.fromJSONField(field), fromJSON: (json) => ProposalExecuted.fromJSON(json), fromSuiParsedData: (content) => ProposalExecuted.fromSuiParsedData(content), fetch: async (client, id) => ProposalExecuted.fetch(client, id), new: (fields) => { return new ProposalExecuted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ProposalExecuted.reified(); }
    static phantom() { return (0, reified_1.phantom)(ProposalExecuted.reified()); }
    static get p() { return ProposalExecuted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ProposalExecuted", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), proposal_id: bcs_1.bcs.u64(), proposal_type: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ProposalExecuted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), proposalType: (0, reified_1.decodeFromFields)("u64", fields.proposal_type) }); }
    static fromFieldsWithTypes(item) {
        if (!isProposalExecuted(item.type)) {
            throw new Error("not a ProposalExecuted type");
        }
        return ProposalExecuted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), proposalType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_type) });
    }
    static fromBcs(data) { return ProposalExecuted.fromFields(ProposalExecuted.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, proposalId: this.proposalId.toString(), proposalType: this.proposalType.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ProposalExecuted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), proposalType: (0, reified_1.decodeFromJSONField)("u64", field.proposalType) }); }
    static fromJSON(json) {
        if (json.$typeName !== ProposalExecuted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ProposalExecuted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isProposalExecuted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ProposalExecuted object`);
    } return ProposalExecuted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ProposalExecuted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProposalExecuted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProposalExecuted object`);
        }
        return ProposalExecuted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ProposalExecuted = ProposalExecuted;
ProposalExecuted.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalExecuted";
ProposalExecuted.$numTypeParams = 0;
/* ============================== RipeFruitsClaimed =============================== */
function isRipeFruitsClaimed(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::RipeFruitsClaimed<"); }
exports.isRipeFruitsClaimed = isRipeFruitsClaimed;
class RipeFruitsClaimed {
    constructor(typeArgs, fields) {
        this.$typeName = RipeFruitsClaimed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(RipeFruitsClaimed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.fruitType = fields.fruitType;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.userName = fields.userName;
        ;
        this.fruitGlobalClaimIndex = fields.fruitGlobalClaimIndex;
        ;
        this.earnedFruits = fields.earnedFruits;
        ;
        this.poolHiveAddr = fields.poolHiveAddr;
    }
    static reified(A) { return { typeName: RipeFruitsClaimed.$typeName, fullTypeName: (0, util_1.composeSuiType)(RipeFruitsClaimed.$typeName, ...[(0, reified_1.extractType)(A)]), typeArgs: [(0, reified_1.extractType)(A)], reifiedTypeArgs: [A], fromFields: (fields) => RipeFruitsClaimed.fromFields(A, fields), fromFieldsWithTypes: (item) => RipeFruitsClaimed.fromFieldsWithTypes(A, item), fromBcs: (data) => RipeFruitsClaimed.fromBcs(A, data), bcs: RipeFruitsClaimed.bcs, fromJSONField: (field) => RipeFruitsClaimed.fromJSONField(A, field), fromJSON: (json) => RipeFruitsClaimed.fromJSON(A, json), fromSuiParsedData: (content) => RipeFruitsClaimed.fromSuiParsedData(A, content), fetch: async (client, id) => RipeFruitsClaimed.fetch(client, A, id), new: (fields) => { return new RipeFruitsClaimed([(0, reified_1.extractType)(A)], fields); }, kind: "StructClassReified", }; }
    static get r() { return RipeFruitsClaimed.reified; }
    static phantom(A) { return (0, reified_1.phantom)(RipeFruitsClaimed.reified(A)); }
    static get p() { return RipeFruitsClaimed.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("RipeFruitsClaimed", {
            fruit_type: structs_2.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), user_name: structs_4.String.bcs, fruit_global_claim_index: bcs_1.bcs.u256(), earned_fruits: bcs_1.bcs.u64(), pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(typeArg, fields) { return RipeFruitsClaimed.reified(typeArg).new({ fruitType: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.fruit_type), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), userName: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.user_name), fruitGlobalClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.fruit_global_claim_index), earnedFruits: (0, reified_1.decodeFromFields)("u64", fields.earned_fruits), poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isRipeFruitsClaimed(item.type)) {
            throw new Error("not a RipeFruitsClaimed type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return RipeFruitsClaimed.reified(typeArg).new({ fruitType: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.fruit_type), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), userName: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.user_name), fruitGlobalClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.fruit_global_claim_index), earnedFruits: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.earned_fruits), poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr) });
    }
    static fromBcs(typeArg, data) { return RipeFruitsClaimed.fromFields(typeArg, RipeFruitsClaimed.bcs.parse(data)); }
    toJSONField() {
        return {
            fruitType: this.fruitType, profileAddr: this.profileAddr, userName: this.userName, fruitGlobalClaimIndex: this.fruitGlobalClaimIndex.toString(), earnedFruits: this.earnedFruits.toString(), poolHiveAddr: this.poolHiveAddr,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return RipeFruitsClaimed.reified(typeArg).new({ fruitType: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.fruitType), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), userName: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.userName), fruitGlobalClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.fruitGlobalClaimIndex), earnedFruits: (0, reified_1.decodeFromJSONField)("u64", field.earnedFruits), poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== RipeFruitsClaimed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(RipeFruitsClaimed.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return RipeFruitsClaimed.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRipeFruitsClaimed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RipeFruitsClaimed object`);
    } return RipeFruitsClaimed.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RipeFruitsClaimed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRipeFruitsClaimed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RipeFruitsClaimed object`);
        }
        return RipeFruitsClaimed.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RipeFruitsClaimed = RipeFruitsClaimed;
RipeFruitsClaimed.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::RipeFruitsClaimed";
RipeFruitsClaimed.$numTypeParams = 1;
/* ============================== SystemBuzz =============================== */
function isSystemBuzz(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::SystemBuzz"; }
exports.isSystemBuzz = isSystemBuzz;
class SystemBuzz {
    constructor(typeArgs, fields) {
        this.$typeName = SystemBuzz.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(SystemBuzz.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.buzz = fields.buzz;
        ;
        this.genAi = fields.genAi;
    }
    static reified() { return { typeName: SystemBuzz.$typeName, fullTypeName: (0, util_1.composeSuiType)(SystemBuzz.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => SystemBuzz.fromFields(fields), fromFieldsWithTypes: (item) => SystemBuzz.fromFieldsWithTypes(item), fromBcs: (data) => SystemBuzz.fromBcs(data), bcs: SystemBuzz.bcs, fromJSONField: (field) => SystemBuzz.fromJSONField(field), fromJSON: (json) => SystemBuzz.fromJSON(json), fromSuiParsedData: (content) => SystemBuzz.fromSuiParsedData(content), fetch: async (client, id) => SystemBuzz.fetch(client, id), new: (fields) => { return new SystemBuzz([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SystemBuzz.reified(); }
    static phantom() { return (0, reified_1.phantom)(SystemBuzz.reified()); }
    static get p() { return SystemBuzz.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SystemBuzz", {
            buzz: structs_4.String.bcs, gen_ai: structs_3.Option.bcs(structs_4.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return SystemBuzz.reified().new({ buzz: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.buzz), genAi: (0, reified_1.decodeFromFields)(structs_3.Option.reified(structs_4.String.reified()), fields.gen_ai) }); }
    static fromFieldsWithTypes(item) {
        if (!isSystemBuzz(item.type)) {
            throw new Error("not a SystemBuzz type");
        }
        return SystemBuzz.reified().new({ buzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.buzz), genAi: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Option.reified(structs_4.String.reified()), item.fields.gen_ai) });
    }
    static fromBcs(data) { return SystemBuzz.fromFields(SystemBuzz.bcs.parse(data)); }
    toJSONField() {
        return {
            buzz: this.buzz, genAi: (0, reified_1.fieldToJSON)(`0x1::option::Option<0x1::string::String>`, this.genAi),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SystemBuzz.reified().new({ buzz: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.buzz), genAi: (0, reified_1.decodeFromJSONField)(structs_3.Option.reified(structs_4.String.reified()), field.genAi) }); }
    static fromJSON(json) {
        if (json.$typeName !== SystemBuzz.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SystemBuzz.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSystemBuzz(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SystemBuzz object`);
    } return SystemBuzz.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SystemBuzz object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSystemBuzz(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SystemBuzz object`);
        }
        return SystemBuzz.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SystemBuzz = SystemBuzz;
SystemBuzz.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::SystemBuzz";
SystemBuzz.$numTypeParams = 0;
/* ============================== UnbondingFromBeeBox =============================== */
function isUnbondingFromBeeBox(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnbondingFromBeeBox"; }
exports.isUnbondingFromBeeBox = isUnbondingFromBeeBox;
class UnbondingFromBeeBox {
    constructor(typeArgs, fields) {
        this.$typeName = UnbondingFromBeeBox.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UnbondingFromBeeBox.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.lpBalanceUnbonded = fields.lpBalanceUnbonded;
        ;
        this.unlockEpoch = fields.unlockEpoch;
        ;
        this.hiveGemsEarned = fields.hiveGemsEarned;
        ;
        this.claimIndex = fields.claimIndex;
    }
    static reified() { return { typeName: UnbondingFromBeeBox.$typeName, fullTypeName: (0, util_1.composeSuiType)(UnbondingFromBeeBox.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UnbondingFromBeeBox.fromFields(fields), fromFieldsWithTypes: (item) => UnbondingFromBeeBox.fromFieldsWithTypes(item), fromBcs: (data) => UnbondingFromBeeBox.fromBcs(data), bcs: UnbondingFromBeeBox.bcs, fromJSONField: (field) => UnbondingFromBeeBox.fromJSONField(field), fromJSON: (json) => UnbondingFromBeeBox.fromJSON(json), fromSuiParsedData: (content) => UnbondingFromBeeBox.fromSuiParsedData(content), fetch: async (client, id) => UnbondingFromBeeBox.fetch(client, id), new: (fields) => { return new UnbondingFromBeeBox([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UnbondingFromBeeBox.reified(); }
    static phantom() { return (0, reified_1.phantom)(UnbondingFromBeeBox.reified()); }
    static get p() { return UnbondingFromBeeBox.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UnbondingFromBeeBox", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), lp_balance_unbonded: bcs_1.bcs.u64(), unlock_epoch: bcs_1.bcs.u64(), hive_gems_earned: bcs_1.bcs.u64(), claim_index: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(fields) { return UnbondingFromBeeBox.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), lpBalanceUnbonded: (0, reified_1.decodeFromFields)("u64", fields.lp_balance_unbonded), unlockEpoch: (0, reified_1.decodeFromFields)("u64", fields.unlock_epoch), hiveGemsEarned: (0, reified_1.decodeFromFields)("u64", fields.hive_gems_earned), claimIndex: (0, reified_1.decodeFromFields)("u256", fields.claim_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isUnbondingFromBeeBox(item.type)) {
            throw new Error("not a UnbondingFromBeeBox type");
        }
        return UnbondingFromBeeBox.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), lpBalanceUnbonded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_balance_unbonded), unlockEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlock_epoch), hiveGemsEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_gems_earned), claimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.claim_index) });
    }
    static fromBcs(data) { return UnbondingFromBeeBox.fromFields(UnbondingFromBeeBox.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, profileAddr: this.profileAddr, lpBalanceUnbonded: this.lpBalanceUnbonded.toString(), unlockEpoch: this.unlockEpoch.toString(), hiveGemsEarned: this.hiveGemsEarned.toString(), claimIndex: this.claimIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UnbondingFromBeeBox.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), lpBalanceUnbonded: (0, reified_1.decodeFromJSONField)("u64", field.lpBalanceUnbonded), unlockEpoch: (0, reified_1.decodeFromJSONField)("u64", field.unlockEpoch), hiveGemsEarned: (0, reified_1.decodeFromJSONField)("u64", field.hiveGemsEarned), claimIndex: (0, reified_1.decodeFromJSONField)("u256", field.claimIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== UnbondingFromBeeBox.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UnbondingFromBeeBox.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnbondingFromBeeBox(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UnbondingFromBeeBox object`);
    } return UnbondingFromBeeBox.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UnbondingFromBeeBox object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnbondingFromBeeBox(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnbondingFromBeeBox object`);
        }
        return UnbondingFromBeeBox.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UnbondingFromBeeBox = UnbondingFromBeeBox;
UnbondingFromBeeBox.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnbondingFromBeeBox";
UnbondingFromBeeBox.$numTypeParams = 0;
/* ============================== UnlockFromBeeBox =============================== */
function isUnlockFromBeeBox(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnlockFromBeeBox"; }
exports.isUnlockFromBeeBox = isUnlockFromBeeBox;
class UnlockFromBeeBox {
    constructor(typeArgs, fields) {
        this.$typeName = UnlockFromBeeBox.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UnlockFromBeeBox.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.username = fields.username;
        ;
        this.profileAddr = fields.profileAddr;
        ;
        this.stakerAddr = fields.stakerAddr;
        ;
        this.lpBalanceUnlocked = fields.lpBalanceUnlocked;
        ;
        this.unlockedEpoches = fields.unlockedEpoches;
    }
    static reified() { return { typeName: UnlockFromBeeBox.$typeName, fullTypeName: (0, util_1.composeSuiType)(UnlockFromBeeBox.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UnlockFromBeeBox.fromFields(fields), fromFieldsWithTypes: (item) => UnlockFromBeeBox.fromFieldsWithTypes(item), fromBcs: (data) => UnlockFromBeeBox.fromBcs(data), bcs: UnlockFromBeeBox.bcs, fromJSONField: (field) => UnlockFromBeeBox.fromJSONField(field), fromJSON: (json) => UnlockFromBeeBox.fromJSON(json), fromSuiParsedData: (content) => UnlockFromBeeBox.fromSuiParsedData(content), fetch: async (client, id) => UnlockFromBeeBox.fetch(client, id), new: (fields) => { return new UnlockFromBeeBox([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UnlockFromBeeBox.reified(); }
    static phantom() { return (0, reified_1.phantom)(UnlockFromBeeBox.reified()); }
    static get p() { return UnlockFromBeeBox.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UnlockFromBeeBox", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_4.String.bcs, profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), staker_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), lp_balance_unlocked: bcs_1.bcs.u64(), unlocked_epoches: bcs_1.bcs.vector(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return UnlockFromBeeBox.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), username: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.username), profileAddr: (0, reified_1.decodeFromFields)("address", fields.profile_addr), stakerAddr: (0, reified_1.decodeFromFields)("address", fields.staker_addr), lpBalanceUnlocked: (0, reified_1.decodeFromFields)("u64", fields.lp_balance_unlocked), unlockedEpoches: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.unlocked_epoches) }); }
    static fromFieldsWithTypes(item) {
        if (!isUnlockFromBeeBox(item.type)) {
            throw new Error("not a UnlockFromBeeBox type");
        }
        return UnlockFromBeeBox.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.username), profileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.profile_addr), stakerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.staker_addr), lpBalanceUnlocked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_balance_unlocked), unlockedEpoches: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.unlocked_epoches) });
    }
    static fromBcs(data) { return UnlockFromBeeBox.fromFields(UnlockFromBeeBox.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, username: this.username, profileAddr: this.profileAddr, stakerAddr: this.stakerAddr, lpBalanceUnlocked: this.lpBalanceUnlocked.toString(), unlockedEpoches: (0, reified_1.fieldToJSON)(`vector<u64>`, this.unlockedEpoches),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UnlockFromBeeBox.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), username: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.username), profileAddr: (0, reified_1.decodeFromJSONField)("address", field.profileAddr), stakerAddr: (0, reified_1.decodeFromJSONField)("address", field.stakerAddr), lpBalanceUnlocked: (0, reified_1.decodeFromJSONField)("u64", field.lpBalanceUnlocked), unlockedEpoches: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.unlockedEpoches) }); }
    static fromJSON(json) {
        if (json.$typeName !== UnlockFromBeeBox.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UnlockFromBeeBox.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnlockFromBeeBox(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UnlockFromBeeBox object`);
    } return UnlockFromBeeBox.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UnlockFromBeeBox object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnlockFromBeeBox(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnlockFromBeeBox object`);
        }
        return UnlockFromBeeBox.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UnlockFromBeeBox = UnlockFromBeeBox;
UnlockFromBeeBox.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnlockFromBeeBox";
UnlockFromBeeBox.$numTypeParams = 0;
/* ============================== UserBuzzOnGovernanceBuzzDetected =============================== */
function isUserBuzzOnGovernanceBuzzDetected(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserBuzzOnGovernanceBuzzDetected"; }
exports.isUserBuzzOnGovernanceBuzzDetected = isUserBuzzOnGovernanceBuzzDetected;
class UserBuzzOnGovernanceBuzzDetected {
    constructor(typeArgs, fields) {
        this.$typeName = UserBuzzOnGovernanceBuzzDetected.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserBuzzOnGovernanceBuzzDetected.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.userProfileAddr = fields.userProfileAddr;
        ;
        this.governanceBuzzIndex = fields.governanceBuzzIndex;
        ;
        this.username = fields.username;
        ;
        this.dialogueIndex = fields.dialogueIndex;
        ;
        this.userBuzz = fields.userBuzz;
    }
    static reified() { return { typeName: UserBuzzOnGovernanceBuzzDetected.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserBuzzOnGovernanceBuzzDetected.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UserBuzzOnGovernanceBuzzDetected.fromFields(fields), fromFieldsWithTypes: (item) => UserBuzzOnGovernanceBuzzDetected.fromFieldsWithTypes(item), fromBcs: (data) => UserBuzzOnGovernanceBuzzDetected.fromBcs(data), bcs: UserBuzzOnGovernanceBuzzDetected.bcs, fromJSONField: (field) => UserBuzzOnGovernanceBuzzDetected.fromJSONField(field), fromJSON: (json) => UserBuzzOnGovernanceBuzzDetected.fromJSON(json), fromSuiParsedData: (content) => UserBuzzOnGovernanceBuzzDetected.fromSuiParsedData(content), fetch: async (client, id) => UserBuzzOnGovernanceBuzzDetected.fetch(client, id), new: (fields) => { return new UserBuzzOnGovernanceBuzzDetected([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserBuzzOnGovernanceBuzzDetected.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserBuzzOnGovernanceBuzzDetected.reified()); }
    static get p() { return UserBuzzOnGovernanceBuzzDetected.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserBuzzOnGovernanceBuzzDetected", {
            user_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), governance_buzz_index: bcs_1.bcs.u64(), username: structs_4.String.bcs, dialogue_index: bcs_1.bcs.u64(), user_buzz: structs_4.String.bcs
        });
    }
    ;
    static fromFields(fields) { return UserBuzzOnGovernanceBuzzDetected.reified().new({ userProfileAddr: (0, reified_1.decodeFromFields)("address", fields.user_profile_addr), governanceBuzzIndex: (0, reified_1.decodeFromFields)("u64", fields.governance_buzz_index), username: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.username), dialogueIndex: (0, reified_1.decodeFromFields)("u64", fields.dialogue_index), userBuzz: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.user_buzz) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserBuzzOnGovernanceBuzzDetected(item.type)) {
            throw new Error("not a UserBuzzOnGovernanceBuzzDetected type");
        }
        return UserBuzzOnGovernanceBuzzDetected.reified().new({ userProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user_profile_addr), governanceBuzzIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.governance_buzz_index), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.username), dialogueIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dialogue_index), userBuzz: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.user_buzz) });
    }
    static fromBcs(data) { return UserBuzzOnGovernanceBuzzDetected.fromFields(UserBuzzOnGovernanceBuzzDetected.bcs.parse(data)); }
    toJSONField() {
        return {
            userProfileAddr: this.userProfileAddr, governanceBuzzIndex: this.governanceBuzzIndex.toString(), username: this.username, dialogueIndex: this.dialogueIndex.toString(), userBuzz: this.userBuzz,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserBuzzOnGovernanceBuzzDetected.reified().new({ userProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.userProfileAddr), governanceBuzzIndex: (0, reified_1.decodeFromJSONField)("u64", field.governanceBuzzIndex), username: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.username), dialogueIndex: (0, reified_1.decodeFromJSONField)("u64", field.dialogueIndex), userBuzz: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.userBuzz) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserBuzzOnGovernanceBuzzDetected.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserBuzzOnGovernanceBuzzDetected.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserBuzzOnGovernanceBuzzDetected(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserBuzzOnGovernanceBuzzDetected object`);
    } return UserBuzzOnGovernanceBuzzDetected.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserBuzzOnGovernanceBuzzDetected object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserBuzzOnGovernanceBuzzDetected(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserBuzzOnGovernanceBuzzDetected object`);
        }
        return UserBuzzOnGovernanceBuzzDetected.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserBuzzOnGovernanceBuzzDetected = UserBuzzOnGovernanceBuzzDetected;
UserBuzzOnGovernanceBuzzDetected.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserBuzzOnGovernanceBuzzDetected";
UserBuzzOnGovernanceBuzzDetected.$numTypeParams = 0;
/* ============================== UserLikedGovernorBuzz =============================== */
function isUserLikedGovernorBuzz(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserLikedGovernorBuzz"; }
exports.isUserLikedGovernorBuzz = isUserLikedGovernorBuzz;
class UserLikedGovernorBuzz {
    constructor(typeArgs, fields) {
        this.$typeName = UserLikedGovernorBuzz.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserLikedGovernorBuzz.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.userProfileAddr = fields.userProfileAddr;
        ;
        this.username = fields.username;
        ;
        this.governanceBuzzIndex = fields.governanceBuzzIndex;
    }
    static reified() { return { typeName: UserLikedGovernorBuzz.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserLikedGovernorBuzz.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UserLikedGovernorBuzz.fromFields(fields), fromFieldsWithTypes: (item) => UserLikedGovernorBuzz.fromFieldsWithTypes(item), fromBcs: (data) => UserLikedGovernorBuzz.fromBcs(data), bcs: UserLikedGovernorBuzz.bcs, fromJSONField: (field) => UserLikedGovernorBuzz.fromJSONField(field), fromJSON: (json) => UserLikedGovernorBuzz.fromJSON(json), fromSuiParsedData: (content) => UserLikedGovernorBuzz.fromSuiParsedData(content), fetch: async (client, id) => UserLikedGovernorBuzz.fetch(client, id), new: (fields) => { return new UserLikedGovernorBuzz([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserLikedGovernorBuzz.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserLikedGovernorBuzz.reified()); }
    static get p() { return UserLikedGovernorBuzz.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserLikedGovernorBuzz", {
            user_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_4.String.bcs, governance_buzz_index: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UserLikedGovernorBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromFields)("address", fields.user_profile_addr), username: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.username), governanceBuzzIndex: (0, reified_1.decodeFromFields)("u64", fields.governance_buzz_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserLikedGovernorBuzz(item.type)) {
            throw new Error("not a UserLikedGovernorBuzz type");
        }
        return UserLikedGovernorBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user_profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.username), governanceBuzzIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.governance_buzz_index) });
    }
    static fromBcs(data) { return UserLikedGovernorBuzz.fromFields(UserLikedGovernorBuzz.bcs.parse(data)); }
    toJSONField() {
        return {
            userProfileAddr: this.userProfileAddr, username: this.username, governanceBuzzIndex: this.governanceBuzzIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserLikedGovernorBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.userProfileAddr), username: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.username), governanceBuzzIndex: (0, reified_1.decodeFromJSONField)("u64", field.governanceBuzzIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserLikedGovernorBuzz.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserLikedGovernorBuzz.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserLikedGovernorBuzz(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserLikedGovernorBuzz object`);
    } return UserLikedGovernorBuzz.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserLikedGovernorBuzz object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserLikedGovernorBuzz(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserLikedGovernorBuzz object`);
        }
        return UserLikedGovernorBuzz.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserLikedGovernorBuzz = UserLikedGovernorBuzz;
UserLikedGovernorBuzz.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserLikedGovernorBuzz";
UserLikedGovernorBuzz.$numTypeParams = 0;
/* ============================== UserUnLikedGovernorBuzz =============================== */
function isUserUnLikedGovernorBuzz(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUnLikedGovernorBuzz"; }
exports.isUserUnLikedGovernorBuzz = isUserUnLikedGovernorBuzz;
class UserUnLikedGovernorBuzz {
    constructor(typeArgs, fields) {
        this.$typeName = UserUnLikedGovernorBuzz.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserUnLikedGovernorBuzz.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.userProfileAddr = fields.userProfileAddr;
        ;
        this.username = fields.username;
        ;
        this.governanceBuzzIndex = fields.governanceBuzzIndex;
    }
    static reified() { return { typeName: UserUnLikedGovernorBuzz.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserUnLikedGovernorBuzz.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UserUnLikedGovernorBuzz.fromFields(fields), fromFieldsWithTypes: (item) => UserUnLikedGovernorBuzz.fromFieldsWithTypes(item), fromBcs: (data) => UserUnLikedGovernorBuzz.fromBcs(data), bcs: UserUnLikedGovernorBuzz.bcs, fromJSONField: (field) => UserUnLikedGovernorBuzz.fromJSONField(field), fromJSON: (json) => UserUnLikedGovernorBuzz.fromJSON(json), fromSuiParsedData: (content) => UserUnLikedGovernorBuzz.fromSuiParsedData(content), fetch: async (client, id) => UserUnLikedGovernorBuzz.fetch(client, id), new: (fields) => { return new UserUnLikedGovernorBuzz([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserUnLikedGovernorBuzz.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserUnLikedGovernorBuzz.reified()); }
    static get p() { return UserUnLikedGovernorBuzz.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserUnLikedGovernorBuzz", {
            user_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_4.String.bcs, governance_buzz_index: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UserUnLikedGovernorBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromFields)("address", fields.user_profile_addr), username: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.username), governanceBuzzIndex: (0, reified_1.decodeFromFields)("u64", fields.governance_buzz_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserUnLikedGovernorBuzz(item.type)) {
            throw new Error("not a UserUnLikedGovernorBuzz type");
        }
        return UserUnLikedGovernorBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user_profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.username), governanceBuzzIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.governance_buzz_index) });
    }
    static fromBcs(data) { return UserUnLikedGovernorBuzz.fromFields(UserUnLikedGovernorBuzz.bcs.parse(data)); }
    toJSONField() {
        return {
            userProfileAddr: this.userProfileAddr, username: this.username, governanceBuzzIndex: this.governanceBuzzIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserUnLikedGovernorBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.userProfileAddr), username: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.username), governanceBuzzIndex: (0, reified_1.decodeFromJSONField)("u64", field.governanceBuzzIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserUnLikedGovernorBuzz.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserUnLikedGovernorBuzz.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserUnLikedGovernorBuzz(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserUnLikedGovernorBuzz object`);
    } return UserUnLikedGovernorBuzz.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserUnLikedGovernorBuzz object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserUnLikedGovernorBuzz(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserUnLikedGovernorBuzz object`);
        }
        return UserUnLikedGovernorBuzz.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserUnLikedGovernorBuzz = UserUnLikedGovernorBuzz;
UserUnLikedGovernorBuzz.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUnLikedGovernorBuzz";
UserUnLikedGovernorBuzz.$numTypeParams = 0;
/* ============================== UserUpvotedGovernanceBuzz =============================== */
function isUserUpvotedGovernanceBuzz(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUpvotedGovernanceBuzz"; }
exports.isUserUpvotedGovernanceBuzz = isUserUpvotedGovernanceBuzz;
class UserUpvotedGovernanceBuzz {
    constructor(typeArgs, fields) {
        this.$typeName = UserUpvotedGovernanceBuzz.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserUpvotedGovernanceBuzz.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.userProfileAddr = fields.userProfileAddr;
        ;
        this.username = fields.username;
        ;
        this.governanceBuzzIndex = fields.governanceBuzzIndex;
        ;
        this.userBuzzByProfile = fields.userBuzzByProfile;
    }
    static reified() { return { typeName: UserUpvotedGovernanceBuzz.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserUpvotedGovernanceBuzz.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UserUpvotedGovernanceBuzz.fromFields(fields), fromFieldsWithTypes: (item) => UserUpvotedGovernanceBuzz.fromFieldsWithTypes(item), fromBcs: (data) => UserUpvotedGovernanceBuzz.fromBcs(data), bcs: UserUpvotedGovernanceBuzz.bcs, fromJSONField: (field) => UserUpvotedGovernanceBuzz.fromJSONField(field), fromJSON: (json) => UserUpvotedGovernanceBuzz.fromJSON(json), fromSuiParsedData: (content) => UserUpvotedGovernanceBuzz.fromSuiParsedData(content), fetch: async (client, id) => UserUpvotedGovernanceBuzz.fetch(client, id), new: (fields) => { return new UserUpvotedGovernanceBuzz([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserUpvotedGovernanceBuzz.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserUpvotedGovernanceBuzz.reified()); }
    static get p() { return UserUpvotedGovernanceBuzz.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserUpvotedGovernanceBuzz", {
            user_profile_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_4.String.bcs, governance_buzz_index: bcs_1.bcs.u64(), user_buzz_by_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return UserUpvotedGovernanceBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromFields)("address", fields.user_profile_addr), username: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.username), governanceBuzzIndex: (0, reified_1.decodeFromFields)("u64", fields.governance_buzz_index), userBuzzByProfile: (0, reified_1.decodeFromFields)("address", fields.user_buzz_by_profile) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserUpvotedGovernanceBuzz(item.type)) {
            throw new Error("not a UserUpvotedGovernanceBuzz type");
        }
        return UserUpvotedGovernanceBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user_profile_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.username), governanceBuzzIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.governance_buzz_index), userBuzzByProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.user_buzz_by_profile) });
    }
    static fromBcs(data) { return UserUpvotedGovernanceBuzz.fromFields(UserUpvotedGovernanceBuzz.bcs.parse(data)); }
    toJSONField() {
        return {
            userProfileAddr: this.userProfileAddr, username: this.username, governanceBuzzIndex: this.governanceBuzzIndex.toString(), userBuzzByProfile: this.userBuzzByProfile,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserUpvotedGovernanceBuzz.reified().new({ userProfileAddr: (0, reified_1.decodeFromJSONField)("address", field.userProfileAddr), username: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.username), governanceBuzzIndex: (0, reified_1.decodeFromJSONField)("u64", field.governanceBuzzIndex), userBuzzByProfile: (0, reified_1.decodeFromJSONField)("address", field.userBuzzByProfile) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserUpvotedGovernanceBuzz.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserUpvotedGovernanceBuzz.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserUpvotedGovernanceBuzz(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserUpvotedGovernanceBuzz object`);
    } return UserUpvotedGovernanceBuzz.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserUpvotedGovernanceBuzz object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserUpvotedGovernanceBuzz(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserUpvotedGovernanceBuzz object`);
        }
        return UserUpvotedGovernanceBuzz.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserUpvotedGovernanceBuzz = UserUpvotedGovernanceBuzz;
UserUpvotedGovernanceBuzz.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUpvotedGovernanceBuzz";
UserUpvotedGovernanceBuzz.$numTypeParams = 0;
/* ============================== VoteCasted =============================== */
function isVoteCasted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteCasted"; }
exports.isVoteCasted = isVoteCasted;
class VoteCasted {
    constructor(typeArgs, fields) {
        this.$typeName = VoteCasted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(VoteCasted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.proposalId = fields.proposalId;
        ;
        this.voter = fields.voter;
        ;
        this.voterProfile = fields.voterProfile;
        ;
        this.vote = fields.vote;
        ;
        this.yesVotes = fields.yesVotes;
        ;
        this.noVotes = fields.noVotes;
        ;
        this.totalStaked = fields.totalStaked;
    }
    static reified() { return { typeName: VoteCasted.$typeName, fullTypeName: (0, util_1.composeSuiType)(VoteCasted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => VoteCasted.fromFields(fields), fromFieldsWithTypes: (item) => VoteCasted.fromFieldsWithTypes(item), fromBcs: (data) => VoteCasted.fromBcs(data), bcs: VoteCasted.bcs, fromJSONField: (field) => VoteCasted.fromJSONField(field), fromJSON: (json) => VoteCasted.fromJSON(json), fromSuiParsedData: (content) => VoteCasted.fromSuiParsedData(content), fetch: async (client, id) => VoteCasted.fetch(client, id), new: (fields) => { return new VoteCasted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return VoteCasted.reified(); }
    static phantom() { return (0, reified_1.phantom)(VoteCasted.reified()); }
    static get p() { return VoteCasted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("VoteCasted", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), proposal_id: bcs_1.bcs.u64(), voter: structs_4.String.bcs, voter_profile: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), vote: bcs_1.bcs.bool(), yes_votes: bcs_1.bcs.u64(), no_votes: bcs_1.bcs.u64(), total_staked: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return VoteCasted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), voter: (0, reified_1.decodeFromFields)(structs_4.String.reified(), fields.voter), voterProfile: (0, reified_1.decodeFromFields)("address", fields.voter_profile), vote: (0, reified_1.decodeFromFields)("bool", fields.vote), yesVotes: (0, reified_1.decodeFromFields)("u64", fields.yes_votes), noVotes: (0, reified_1.decodeFromFields)("u64", fields.no_votes), totalStaked: (0, reified_1.decodeFromFields)("u64", fields.total_staked) }); }
    static fromFieldsWithTypes(item) {
        if (!isVoteCasted(item.type)) {
            throw new Error("not a VoteCasted type");
        }
        return VoteCasted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), voter: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.String.reified(), item.fields.voter), voterProfile: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.voter_profile), vote: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.vote), yesVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.yes_votes), noVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.no_votes), totalStaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_staked) });
    }
    static fromBcs(data) { return VoteCasted.fromFields(VoteCasted.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, proposalId: this.proposalId.toString(), voter: this.voter, voterProfile: this.voterProfile, vote: this.vote, yesVotes: this.yesVotes.toString(), noVotes: this.noVotes.toString(), totalStaked: this.totalStaked.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return VoteCasted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), voter: (0, reified_1.decodeFromJSONField)(structs_4.String.reified(), field.voter), voterProfile: (0, reified_1.decodeFromJSONField)("address", field.voterProfile), vote: (0, reified_1.decodeFromJSONField)("bool", field.vote), yesVotes: (0, reified_1.decodeFromJSONField)("u64", field.yesVotes), noVotes: (0, reified_1.decodeFromJSONField)("u64", field.noVotes), totalStaked: (0, reified_1.decodeFromJSONField)("u64", field.totalStaked) }); }
    static fromJSON(json) {
        if (json.$typeName !== VoteCasted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VoteCasted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVoteCasted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VoteCasted object`);
    } return VoteCasted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VoteCasted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVoteCasted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VoteCasted object`);
        }
        return VoteCasted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.VoteCasted = VoteCasted;
VoteCasted.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteCasted";
VoteCasted.$numTypeParams = 0;
/* ============================== VoteConfig =============================== */
function isVoteConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteConfig"; }
exports.isVoteConfig = isVoteConfig;
class VoteConfig {
    constructor(typeArgs, fields) {
        this.$typeName = VoteConfig.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(VoteConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.proposalRequiredDeposit = fields.proposalRequiredDeposit;
        ;
        this.votingStartDelay = fields.votingStartDelay;
        ;
        this.votingPeriodLength = fields.votingPeriodLength;
        ;
        this.executionDelay = fields.executionDelay;
        ;
        this.executionPeriodLength = fields.executionPeriodLength;
        ;
        this.proposalRequiredQuorum = fields.proposalRequiredQuorum;
        ;
        this.proposalApprovalThreshold = fields.proposalApprovalThreshold;
    }
    static reified() { return { typeName: VoteConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(VoteConfig.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => VoteConfig.fromFields(fields), fromFieldsWithTypes: (item) => VoteConfig.fromFieldsWithTypes(item), fromBcs: (data) => VoteConfig.fromBcs(data), bcs: VoteConfig.bcs, fromJSONField: (field) => VoteConfig.fromJSONField(field), fromJSON: (json) => VoteConfig.fromJSON(json), fromSuiParsedData: (content) => VoteConfig.fromSuiParsedData(content), fetch: async (client, id) => VoteConfig.fetch(client, id), new: (fields) => { return new VoteConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return VoteConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(VoteConfig.reified()); }
    static get p() { return VoteConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("VoteConfig", {
            proposal_required_deposit: bcs_1.bcs.u64(), voting_start_delay: bcs_1.bcs.u64(), voting_period_length: bcs_1.bcs.u64(), execution_delay: bcs_1.bcs.u64(), execution_period_length: bcs_1.bcs.u64(), proposal_required_quorum: bcs_1.bcs.u64(), proposal_approval_threshold: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return VoteConfig.reified().new({ proposalRequiredDeposit: (0, reified_1.decodeFromFields)("u64", fields.proposal_required_deposit), votingStartDelay: (0, reified_1.decodeFromFields)("u64", fields.voting_start_delay), votingPeriodLength: (0, reified_1.decodeFromFields)("u64", fields.voting_period_length), executionDelay: (0, reified_1.decodeFromFields)("u64", fields.execution_delay), executionPeriodLength: (0, reified_1.decodeFromFields)("u64", fields.execution_period_length), proposalRequiredQuorum: (0, reified_1.decodeFromFields)("u64", fields.proposal_required_quorum), proposalApprovalThreshold: (0, reified_1.decodeFromFields)("u64", fields.proposal_approval_threshold) }); }
    static fromFieldsWithTypes(item) {
        if (!isVoteConfig(item.type)) {
            throw new Error("not a VoteConfig type");
        }
        return VoteConfig.reified().new({ proposalRequiredDeposit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_required_deposit), votingStartDelay: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_start_delay), votingPeriodLength: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_period_length), executionDelay: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_delay), executionPeriodLength: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_period_length), proposalRequiredQuorum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_required_quorum), proposalApprovalThreshold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_approval_threshold) });
    }
    static fromBcs(data) { return VoteConfig.fromFields(VoteConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            proposalRequiredDeposit: this.proposalRequiredDeposit.toString(), votingStartDelay: this.votingStartDelay.toString(), votingPeriodLength: this.votingPeriodLength.toString(), executionDelay: this.executionDelay.toString(), executionPeriodLength: this.executionPeriodLength.toString(), proposalRequiredQuorum: this.proposalRequiredQuorum.toString(), proposalApprovalThreshold: this.proposalApprovalThreshold.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return VoteConfig.reified().new({ proposalRequiredDeposit: (0, reified_1.decodeFromJSONField)("u64", field.proposalRequiredDeposit), votingStartDelay: (0, reified_1.decodeFromJSONField)("u64", field.votingStartDelay), votingPeriodLength: (0, reified_1.decodeFromJSONField)("u64", field.votingPeriodLength), executionDelay: (0, reified_1.decodeFromJSONField)("u64", field.executionDelay), executionPeriodLength: (0, reified_1.decodeFromJSONField)("u64", field.executionPeriodLength), proposalRequiredQuorum: (0, reified_1.decodeFromJSONField)("u64", field.proposalRequiredQuorum), proposalApprovalThreshold: (0, reified_1.decodeFromJSONField)("u64", field.proposalApprovalThreshold) }); }
    static fromJSON(json) {
        if (json.$typeName !== VoteConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VoteConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVoteConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VoteConfig object`);
    } return VoteConfig.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VoteConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVoteConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VoteConfig object`);
        }
        return VoteConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.VoteConfig = VoteConfig;
VoteConfig.$typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteConfig";
VoteConfig.$numTypeParams = 0;
