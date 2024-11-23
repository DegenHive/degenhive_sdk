"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotingPowerIncreasedForLockedBee = exports.VotingBribes = exports.VoteConfig = exports.VoteCasted = exports.Vote = exports.UnlockedLP = exports.UnbondingFromDragonDen = exports.TrainerVotedForEmissions = exports.TradingFeeClaimedByTrainer = exports.RipeFruitsClaimed = exports.RestedLockedDragonBeeReturnedInWild = exports.ProposalExecuted = exports.ProposalEvaluated = exports.ProposalDeleted = exports.Proposal = exports.PoolHiveKrafted = exports.PoolHive = exports.NewProposalKrafted = exports.MoreFruitsAdded = exports.LockedLP = exports.LockedDragonBee = exports.LiquidatedLP = exports.LendingPoolCapability = exports.HoneyFruitKraftedForPoolHive = exports.HoneyFruitDestroyed = exports.HoneyFruit = exports.HivePerEpochUpdated = exports.FruitLife = exports.FoodCycleUpdatedForPoolHive = exports.FeesClaimedForEmissions = exports.FeedingFoodToBee = exports.EmissionsRcvdByPoolHive = exports.EmissionSchedule = exports.DragonFoodVotingConfigUpdated = exports.DragonFoodCycleUpdated = exports.DragonFood = exports.DragonDen = exports.DragonBeeWithdrawalRequested = exports.Bribes = exports.BribeMarkedAsToken = exports.BribeClaimedByTrainerTwoPool = exports.BribeClaimedByTrainerThreePool = exports.BribeAddedForEmissions = exports.AddedToDragonDen = exports.AddHiveAndEnergyForNextCycle = void 0;
exports.isAddHiveAndEnergyForNextCycle = isAddHiveAndEnergyForNextCycle;
exports.isAddedToDragonDen = isAddedToDragonDen;
exports.isBribeAddedForEmissions = isBribeAddedForEmissions;
exports.isBribeClaimedByTrainerThreePool = isBribeClaimedByTrainerThreePool;
exports.isBribeClaimedByTrainerTwoPool = isBribeClaimedByTrainerTwoPool;
exports.isBribeMarkedAsToken = isBribeMarkedAsToken;
exports.isBribes = isBribes;
exports.isDragonBeeWithdrawalRequested = isDragonBeeWithdrawalRequested;
exports.isDragonDen = isDragonDen;
exports.isDragonFood = isDragonFood;
exports.isDragonFoodCycleUpdated = isDragonFoodCycleUpdated;
exports.isDragonFoodVotingConfigUpdated = isDragonFoodVotingConfigUpdated;
exports.isEmissionSchedule = isEmissionSchedule;
exports.isEmissionsRcvdByPoolHive = isEmissionsRcvdByPoolHive;
exports.isFeedingFoodToBee = isFeedingFoodToBee;
exports.isFeesClaimedForEmissions = isFeesClaimedForEmissions;
exports.isFoodCycleUpdatedForPoolHive = isFoodCycleUpdatedForPoolHive;
exports.isFruitLife = isFruitLife;
exports.isHivePerEpochUpdated = isHivePerEpochUpdated;
exports.isHoneyFruit = isHoneyFruit;
exports.isHoneyFruitDestroyed = isHoneyFruitDestroyed;
exports.isHoneyFruitKraftedForPoolHive = isHoneyFruitKraftedForPoolHive;
exports.isLendingPoolCapability = isLendingPoolCapability;
exports.isLiquidatedLP = isLiquidatedLP;
exports.isLockedDragonBee = isLockedDragonBee;
exports.isLockedLP = isLockedLP;
exports.isMoreFruitsAdded = isMoreFruitsAdded;
exports.isNewProposalKrafted = isNewProposalKrafted;
exports.isPoolHive = isPoolHive;
exports.isPoolHiveKrafted = isPoolHiveKrafted;
exports.isProposal = isProposal;
exports.isProposalDeleted = isProposalDeleted;
exports.isProposalEvaluated = isProposalEvaluated;
exports.isProposalExecuted = isProposalExecuted;
exports.isRestedLockedDragonBeeReturnedInWild = isRestedLockedDragonBeeReturnedInWild;
exports.isRipeFruitsClaimed = isRipeFruitsClaimed;
exports.isTradingFeeClaimedByTrainer = isTradingFeeClaimedByTrainer;
exports.isTrainerVotedForEmissions = isTrainerVotedForEmissions;
exports.isUnbondingFromDragonDen = isUnbondingFromDragonDen;
exports.isUnlockedLP = isUnlockedLP;
exports.isVote = isVote;
exports.isVoteCasted = isVoteCasted;
exports.isVoteConfig = isVoteConfig;
exports.isVotingBribes = isVotingBribes;
exports.isVotingPowerIncreasedForLockedBee = isVotingPowerIncreasedForLockedBee;
const reified = require("../../_framework/reified");
const structs_1 = require("../../source/0x1/ascii/structs");
const structs_2 = require("../../source/0x1/option/structs");
const structs_3 = require("../../source/0x1/string/structs");
const structs_4 = require("../../source/0x1/type-name/structs");
const structs_5 = require("../../source/0x2/balance/structs");
const structs_6 = require("../../source/0x2/linked-table/structs");
const structs_7 = require("../../source/0x2/object/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const structs_8 = require("../../dragon-trainer/dragon-trainer/structs");
const structs_9 = require("../../yield-flow/hive/structs");
const structs_10 = require("../../yield-flow/honey/structs");
const structs_11 = require("../../yield-flow/yield-flow/structs");
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const PUBLISHED_AT = __1.dragonfood.PUBLISHED_AT;
const PKG_V1 = __1.dragonfood.PKG_V1;
/* ============================== AddHiveAndEnergyForNextCycle =============================== */
function isAddHiveAndEnergyForNextCycle(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::AddHiveAndEnergyForNextCycle`; }
class AddHiveAndEnergyForNextCycle {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AddHiveAndEnergyForNextCycle.$typeName;
        this.$isPhantom = AddHiveAndEnergyForNextCycle.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AddHiveAndEnergyForNextCycle.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.version = fields.version;
        ;
        this.incrementCycle = fields.incrementCycle;
        ;
        this.increaseInEnergy = fields.increaseInEnergy;
        ;
        this.increaseInHealth = fields.increaseInHealth;
        ;
        this.newHiveEnergy = fields.newHiveEnergy;
        ;
        this.newHoneyHealth = fields.newHoneyHealth;
    }
    static reified() { return { typeName: AddHiveAndEnergyForNextCycle.$typeName, fullTypeName: (0, util_1.composeSuiType)(AddHiveAndEnergyForNextCycle.$typeName, ...[]), typeArgs: [], isPhantom: AddHiveAndEnergyForNextCycle.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AddHiveAndEnergyForNextCycle.fromFields(fields), fromFieldsWithTypes: (item) => AddHiveAndEnergyForNextCycle.fromFieldsWithTypes(item), fromBcs: (data) => AddHiveAndEnergyForNextCycle.fromBcs(data), bcs: AddHiveAndEnergyForNextCycle.bcs, fromJSONField: (field) => AddHiveAndEnergyForNextCycle.fromJSONField(field), fromJSON: (json) => AddHiveAndEnergyForNextCycle.fromJSON(json), fromSuiParsedData: (content) => AddHiveAndEnergyForNextCycle.fromSuiParsedData(content), fromSuiObjectData: (content) => AddHiveAndEnergyForNextCycle.fromSuiObjectData(content), fetch: async (client, id) => AddHiveAndEnergyForNextCycle.fetch(client, id), new: (fields) => { return new AddHiveAndEnergyForNextCycle([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AddHiveAndEnergyForNextCycle.reified(); }
    static phantom() { return (0, reified_1.phantom)(AddHiveAndEnergyForNextCycle.reified()); }
    static get p() { return AddHiveAndEnergyForNextCycle.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AddHiveAndEnergyForNextCycle", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), version: bcs_1.bcs.u64(), increment_cycle: bcs_1.bcs.u64(), increase_in_energy: bcs_1.bcs.u128(), increase_in_health: bcs_1.bcs.u128(), new_hive_energy: bcs_1.bcs.u128(), new_honey_health: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return AddHiveAndEnergyForNextCycle.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), version: (0, reified_1.decodeFromFields)("u64", fields.version), incrementCycle: (0, reified_1.decodeFromFields)("u64", fields.increment_cycle), increaseInEnergy: (0, reified_1.decodeFromFields)("u128", fields.increase_in_energy), increaseInHealth: (0, reified_1.decodeFromFields)("u128", fields.increase_in_health), newHiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.new_hive_energy), newHoneyHealth: (0, reified_1.decodeFromFields)("u128", fields.new_honey_health) }); }
    static fromFieldsWithTypes(item) {
        if (!isAddHiveAndEnergyForNextCycle(item.type)) {
            throw new Error("not a AddHiveAndEnergyForNextCycle type");
        }
        return AddHiveAndEnergyForNextCycle.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), incrementCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.increment_cycle), increaseInEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.increase_in_energy), increaseInHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.increase_in_health), newHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.new_hive_energy), newHoneyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.new_honey_health) });
    }
    static fromBcs(data) { return AddHiveAndEnergyForNextCycle.fromFields(AddHiveAndEnergyForNextCycle.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, version: this.version.toString(), incrementCycle: this.incrementCycle.toString(), increaseInEnergy: this.increaseInEnergy.toString(), increaseInHealth: this.increaseInHealth.toString(), newHiveEnergy: this.newHiveEnergy.toString(), newHoneyHealth: this.newHoneyHealth.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AddHiveAndEnergyForNextCycle.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), version: (0, reified_1.decodeFromJSONField)("u64", field.version), incrementCycle: (0, reified_1.decodeFromJSONField)("u64", field.incrementCycle), increaseInEnergy: (0, reified_1.decodeFromJSONField)("u128", field.increaseInEnergy), increaseInHealth: (0, reified_1.decodeFromJSONField)("u128", field.increaseInHealth), newHiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.newHiveEnergy), newHoneyHealth: (0, reified_1.decodeFromJSONField)("u128", field.newHoneyHealth) }); }
    static fromJSON(json) {
        if (json.$typeName !== AddHiveAndEnergyForNextCycle.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddHiveAndEnergyForNextCycle.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddHiveAndEnergyForNextCycle(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AddHiveAndEnergyForNextCycle object`);
    } return AddHiveAndEnergyForNextCycle.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddHiveAndEnergyForNextCycle(data.bcs.type)) {
                throw new Error(`object at is not a AddHiveAndEnergyForNextCycle object`);
            }
            return AddHiveAndEnergyForNextCycle.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddHiveAndEnergyForNextCycle.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AddHiveAndEnergyForNextCycle object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddHiveAndEnergyForNextCycle(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddHiveAndEnergyForNextCycle object`);
        }
        return AddHiveAndEnergyForNextCycle.fromSuiObjectData(res.data);
    }
}
exports.AddHiveAndEnergyForNextCycle = AddHiveAndEnergyForNextCycle;
AddHiveAndEnergyForNextCycle.$typeName = `${PKG_V1}::dragon_food::AddHiveAndEnergyForNextCycle`;
AddHiveAndEnergyForNextCycle.$numTypeParams = 0;
AddHiveAndEnergyForNextCycle.$isPhantom = [];
/* ============================== AddedToDragonDen =============================== */
function isAddedToDragonDen(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::AddedToDragonDen`; }
class AddedToDragonDen {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AddedToDragonDen.$typeName;
        this.$isPhantom = AddedToDragonDen.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AddedToDragonDen.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.username = fields.username;
        ;
        this.lpBalanceAdded = fields.lpBalanceAdded;
        ;
        this.isDragonBeeLocked = fields.isDragonBeeLocked;
        ;
        this.hiveEarned = fields.hiveEarned;
        ;
        this.honeyEarned = fields.honeyEarned;
        ;
        this.hiveClaimIndex = fields.hiveClaimIndex;
        ;
        this.honeyClaimIndex = fields.honeyClaimIndex;
    }
    static reified() { return { typeName: AddedToDragonDen.$typeName, fullTypeName: (0, util_1.composeSuiType)(AddedToDragonDen.$typeName, ...[]), typeArgs: [], isPhantom: AddedToDragonDen.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AddedToDragonDen.fromFields(fields), fromFieldsWithTypes: (item) => AddedToDragonDen.fromFieldsWithTypes(item), fromBcs: (data) => AddedToDragonDen.fromBcs(data), bcs: AddedToDragonDen.bcs, fromJSONField: (field) => AddedToDragonDen.fromJSONField(field), fromJSON: (json) => AddedToDragonDen.fromJSON(json), fromSuiParsedData: (content) => AddedToDragonDen.fromSuiParsedData(content), fromSuiObjectData: (content) => AddedToDragonDen.fromSuiObjectData(content), fetch: async (client, id) => AddedToDragonDen.fetch(client, id), new: (fields) => { return new AddedToDragonDen([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AddedToDragonDen.reified(); }
    static phantom() { return (0, reified_1.phantom)(AddedToDragonDen.reified()); }
    static get p() { return AddedToDragonDen.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AddedToDragonDen", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), username: structs_3.String.bcs, lp_balance_added: bcs_1.bcs.u64(), is_dragon_bee_locked: bcs_1.bcs.bool(), hive_earned: bcs_1.bcs.u64(), honey_earned: bcs_1.bcs.u64(), hive_claim_index: bcs_1.bcs.u256(), honey_claim_index: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(fields) { return AddedToDragonDen.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), username: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.username), lpBalanceAdded: (0, reified_1.decodeFromFields)("u64", fields.lp_balance_added), isDragonBeeLocked: (0, reified_1.decodeFromFields)("bool", fields.is_dragon_bee_locked), hiveEarned: (0, reified_1.decodeFromFields)("u64", fields.hive_earned), honeyEarned: (0, reified_1.decodeFromFields)("u64", fields.honey_earned), hiveClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.hive_claim_index), honeyClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.honey_claim_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isAddedToDragonDen(item.type)) {
            throw new Error("not a AddedToDragonDen type");
        }
        return AddedToDragonDen.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), username: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.username), lpBalanceAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_balance_added), isDragonBeeLocked: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_dragon_bee_locked), hiveEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_earned), honeyEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_earned), hiveClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_claim_index), honeyClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.honey_claim_index) });
    }
    static fromBcs(data) { return AddedToDragonDen.fromFields(AddedToDragonDen.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr, username: this.username, lpBalanceAdded: this.lpBalanceAdded.toString(), isDragonBeeLocked: this.isDragonBeeLocked, hiveEarned: this.hiveEarned.toString(), honeyEarned: this.honeyEarned.toString(), hiveClaimIndex: this.hiveClaimIndex.toString(), honeyClaimIndex: this.honeyClaimIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AddedToDragonDen.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), username: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.username), lpBalanceAdded: (0, reified_1.decodeFromJSONField)("u64", field.lpBalanceAdded), isDragonBeeLocked: (0, reified_1.decodeFromJSONField)("bool", field.isDragonBeeLocked), hiveEarned: (0, reified_1.decodeFromJSONField)("u64", field.hiveEarned), honeyEarned: (0, reified_1.decodeFromJSONField)("u64", field.honeyEarned), hiveClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.hiveClaimIndex), honeyClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.honeyClaimIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== AddedToDragonDen.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddedToDragonDen.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddedToDragonDen(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AddedToDragonDen object`);
    } return AddedToDragonDen.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddedToDragonDen(data.bcs.type)) {
                throw new Error(`object at is not a AddedToDragonDen object`);
            }
            return AddedToDragonDen.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddedToDragonDen.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AddedToDragonDen object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddedToDragonDen(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddedToDragonDen object`);
        }
        return AddedToDragonDen.fromSuiObjectData(res.data);
    }
}
exports.AddedToDragonDen = AddedToDragonDen;
AddedToDragonDen.$typeName = `${PKG_V1}::dragon_food::AddedToDragonDen`;
AddedToDragonDen.$numTypeParams = 0;
AddedToDragonDen.$isPhantom = [];
/* ============================== BribeAddedForEmissions =============================== */
function isBribeAddedForEmissions(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::BribeAddedForEmissions`; }
class BribeAddedForEmissions {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BribeAddedForEmissions.$typeName;
        this.$isPhantom = BribeAddedForEmissions.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BribeAddedForEmissions.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.coinType = fields.coinType;
        ;
        this.bribeForHiveEmisions = fields.bribeForHiveEmisions;
        ;
        this.bribeForHoneyEmisions = fields.bribeForHoneyEmisions;
        ;
        this.forCycle = fields.forCycle;
    }
    static reified() { return { typeName: BribeAddedForEmissions.$typeName, fullTypeName: (0, util_1.composeSuiType)(BribeAddedForEmissions.$typeName, ...[]), typeArgs: [], isPhantom: BribeAddedForEmissions.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BribeAddedForEmissions.fromFields(fields), fromFieldsWithTypes: (item) => BribeAddedForEmissions.fromFieldsWithTypes(item), fromBcs: (data) => BribeAddedForEmissions.fromBcs(data), bcs: BribeAddedForEmissions.bcs, fromJSONField: (field) => BribeAddedForEmissions.fromJSONField(field), fromJSON: (json) => BribeAddedForEmissions.fromJSON(json), fromSuiParsedData: (content) => BribeAddedForEmissions.fromSuiParsedData(content), fromSuiObjectData: (content) => BribeAddedForEmissions.fromSuiObjectData(content), fetch: async (client, id) => BribeAddedForEmissions.fetch(client, id), new: (fields) => { return new BribeAddedForEmissions([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BribeAddedForEmissions.reified(); }
    static phantom() { return (0, reified_1.phantom)(BribeAddedForEmissions.reified()); }
    static get p() { return BribeAddedForEmissions.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BribeAddedForEmissions", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), coin_type: structs_3.String.bcs, bribe_for_hive_emisions: bcs_1.bcs.u64(), bribe_for_honey_emisions: bcs_1.bcs.u64(), for_cycle: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BribeAddedForEmissions.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), coinType: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.coin_type), bribeForHiveEmisions: (0, reified_1.decodeFromFields)("u64", fields.bribe_for_hive_emisions), bribeForHoneyEmisions: (0, reified_1.decodeFromFields)("u64", fields.bribe_for_honey_emisions), forCycle: (0, reified_1.decodeFromFields)("u64", fields.for_cycle) }); }
    static fromFieldsWithTypes(item) {
        if (!isBribeAddedForEmissions(item.type)) {
            throw new Error("not a BribeAddedForEmissions type");
        }
        return BribeAddedForEmissions.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), coinType: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.coin_type), bribeForHiveEmisions: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bribe_for_hive_emisions), bribeForHoneyEmisions: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bribe_for_honey_emisions), forCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.for_cycle) });
    }
    static fromBcs(data) { return BribeAddedForEmissions.fromFields(BribeAddedForEmissions.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, coinType: this.coinType, bribeForHiveEmisions: this.bribeForHiveEmisions.toString(), bribeForHoneyEmisions: this.bribeForHoneyEmisions.toString(), forCycle: this.forCycle.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BribeAddedForEmissions.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), coinType: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.coinType), bribeForHiveEmisions: (0, reified_1.decodeFromJSONField)("u64", field.bribeForHiveEmisions), bribeForHoneyEmisions: (0, reified_1.decodeFromJSONField)("u64", field.bribeForHoneyEmisions), forCycle: (0, reified_1.decodeFromJSONField)("u64", field.forCycle) }); }
    static fromJSON(json) {
        if (json.$typeName !== BribeAddedForEmissions.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BribeAddedForEmissions.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBribeAddedForEmissions(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BribeAddedForEmissions object`);
    } return BribeAddedForEmissions.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBribeAddedForEmissions(data.bcs.type)) {
                throw new Error(`object at is not a BribeAddedForEmissions object`);
            }
            return BribeAddedForEmissions.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BribeAddedForEmissions.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BribeAddedForEmissions object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBribeAddedForEmissions(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BribeAddedForEmissions object`);
        }
        return BribeAddedForEmissions.fromSuiObjectData(res.data);
    }
}
exports.BribeAddedForEmissions = BribeAddedForEmissions;
BribeAddedForEmissions.$typeName = `${PKG_V1}::dragon_food::BribeAddedForEmissions`;
BribeAddedForEmissions.$numTypeParams = 0;
BribeAddedForEmissions.$isPhantom = [];
/* ============================== BribeClaimedByTrainerThreePool =============================== */
function isBribeClaimedByTrainerThreePool(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::BribeClaimedByTrainerThreePool`; }
class BribeClaimedByTrainerThreePool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BribeClaimedByTrainerThreePool.$typeName;
        this.$isPhantom = BribeClaimedByTrainerThreePool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BribeClaimedByTrainerThreePool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.claimedCycles = fields.claimedCycles;
        ;
        this.claimedHiveBribesA = fields.claimedHiveBribesA;
        ;
        this.claimedHoneyBribesA = fields.claimedHoneyBribesA;
        ;
        this.claimedHiveBribesB = fields.claimedHiveBribesB;
        ;
        this.claimedHoneyBribesB = fields.claimedHoneyBribesB;
        ;
        this.claimedHiveBribesC = fields.claimedHiveBribesC;
        ;
        this.claimedHoneyBribesC = fields.claimedHoneyBribesC;
        ;
        this.bribeABal = fields.bribeABal;
        ;
        this.bribeBBal = fields.bribeBBal;
        ;
        this.bribeCBal = fields.bribeCBal;
    }
    static reified() { return { typeName: BribeClaimedByTrainerThreePool.$typeName, fullTypeName: (0, util_1.composeSuiType)(BribeClaimedByTrainerThreePool.$typeName, ...[]), typeArgs: [], isPhantom: BribeClaimedByTrainerThreePool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BribeClaimedByTrainerThreePool.fromFields(fields), fromFieldsWithTypes: (item) => BribeClaimedByTrainerThreePool.fromFieldsWithTypes(item), fromBcs: (data) => BribeClaimedByTrainerThreePool.fromBcs(data), bcs: BribeClaimedByTrainerThreePool.bcs, fromJSONField: (field) => BribeClaimedByTrainerThreePool.fromJSONField(field), fromJSON: (json) => BribeClaimedByTrainerThreePool.fromJSON(json), fromSuiParsedData: (content) => BribeClaimedByTrainerThreePool.fromSuiParsedData(content), fromSuiObjectData: (content) => BribeClaimedByTrainerThreePool.fromSuiObjectData(content), fetch: async (client, id) => BribeClaimedByTrainerThreePool.fetch(client, id), new: (fields) => { return new BribeClaimedByTrainerThreePool([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BribeClaimedByTrainerThreePool.reified(); }
    static phantom() { return (0, reified_1.phantom)(BribeClaimedByTrainerThreePool.reified()); }
    static get p() { return BribeClaimedByTrainerThreePool.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BribeClaimedByTrainerThreePool", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), claimed_cycles: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_hive_bribes_a: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_honey_bribes_a: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_hive_bribes_b: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_honey_bribes_b: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_hive_bribes_c: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_honey_bribes_c: bcs_1.bcs.vector(bcs_1.bcs.u64()), bribe_a_bal: bcs_1.bcs.u64(), bribe_b_bal: bcs_1.bcs.u64(), bribe_c_bal: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BribeClaimedByTrainerThreePool.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), claimedCycles: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_cycles), claimedHiveBribesA: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_hive_bribes_a), claimedHoneyBribesA: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_honey_bribes_a), claimedHiveBribesB: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_hive_bribes_b), claimedHoneyBribesB: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_honey_bribes_b), claimedHiveBribesC: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_hive_bribes_c), claimedHoneyBribesC: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_honey_bribes_c), bribeABal: (0, reified_1.decodeFromFields)("u64", fields.bribe_a_bal), bribeBBal: (0, reified_1.decodeFromFields)("u64", fields.bribe_b_bal), bribeCBal: (0, reified_1.decodeFromFields)("u64", fields.bribe_c_bal) }); }
    static fromFieldsWithTypes(item) {
        if (!isBribeClaimedByTrainerThreePool(item.type)) {
            throw new Error("not a BribeClaimedByTrainerThreePool type");
        }
        return BribeClaimedByTrainerThreePool.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), claimedCycles: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_cycles), claimedHiveBribesA: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_hive_bribes_a), claimedHoneyBribesA: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_honey_bribes_a), claimedHiveBribesB: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_hive_bribes_b), claimedHoneyBribesB: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_honey_bribes_b), claimedHiveBribesC: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_hive_bribes_c), claimedHoneyBribesC: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_honey_bribes_c), bribeABal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bribe_a_bal), bribeBBal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bribe_b_bal), bribeCBal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bribe_c_bal) });
    }
    static fromBcs(data) { return BribeClaimedByTrainerThreePool.fromFields(BribeClaimedByTrainerThreePool.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr, claimedCycles: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedCycles), claimedHiveBribesA: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHiveBribesA), claimedHoneyBribesA: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHoneyBribesA), claimedHiveBribesB: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHiveBribesB), claimedHoneyBribesB: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHoneyBribesB), claimedHiveBribesC: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHiveBribesC), claimedHoneyBribesC: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHoneyBribesC), bribeABal: this.bribeABal.toString(), bribeBBal: this.bribeBBal.toString(), bribeCBal: this.bribeCBal.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BribeClaimedByTrainerThreePool.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), claimedCycles: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedCycles), claimedHiveBribesA: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHiveBribesA), claimedHoneyBribesA: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHoneyBribesA), claimedHiveBribesB: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHiveBribesB), claimedHoneyBribesB: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHoneyBribesB), claimedHiveBribesC: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHiveBribesC), claimedHoneyBribesC: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHoneyBribesC), bribeABal: (0, reified_1.decodeFromJSONField)("u64", field.bribeABal), bribeBBal: (0, reified_1.decodeFromJSONField)("u64", field.bribeBBal), bribeCBal: (0, reified_1.decodeFromJSONField)("u64", field.bribeCBal) }); }
    static fromJSON(json) {
        if (json.$typeName !== BribeClaimedByTrainerThreePool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BribeClaimedByTrainerThreePool.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBribeClaimedByTrainerThreePool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BribeClaimedByTrainerThreePool object`);
    } return BribeClaimedByTrainerThreePool.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBribeClaimedByTrainerThreePool(data.bcs.type)) {
                throw new Error(`object at is not a BribeClaimedByTrainerThreePool object`);
            }
            return BribeClaimedByTrainerThreePool.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BribeClaimedByTrainerThreePool.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BribeClaimedByTrainerThreePool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBribeClaimedByTrainerThreePool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BribeClaimedByTrainerThreePool object`);
        }
        return BribeClaimedByTrainerThreePool.fromSuiObjectData(res.data);
    }
}
exports.BribeClaimedByTrainerThreePool = BribeClaimedByTrainerThreePool;
BribeClaimedByTrainerThreePool.$typeName = `${PKG_V1}::dragon_food::BribeClaimedByTrainerThreePool`;
BribeClaimedByTrainerThreePool.$numTypeParams = 0;
BribeClaimedByTrainerThreePool.$isPhantom = [];
/* ============================== BribeClaimedByTrainerTwoPool =============================== */
function isBribeClaimedByTrainerTwoPool(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::BribeClaimedByTrainerTwoPool`; }
class BribeClaimedByTrainerTwoPool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BribeClaimedByTrainerTwoPool.$typeName;
        this.$isPhantom = BribeClaimedByTrainerTwoPool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BribeClaimedByTrainerTwoPool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.claimedCycles = fields.claimedCycles;
        ;
        this.claimedHiveBribesA = fields.claimedHiveBribesA;
        ;
        this.claimedHoneyBribesA = fields.claimedHoneyBribesA;
        ;
        this.claimedHiveBribesB = fields.claimedHiveBribesB;
        ;
        this.claimedHoneyBribesB = fields.claimedHoneyBribesB;
        ;
        this.bribeABal = fields.bribeABal;
        ;
        this.bribeBBal = fields.bribeBBal;
    }
    static reified() { return { typeName: BribeClaimedByTrainerTwoPool.$typeName, fullTypeName: (0, util_1.composeSuiType)(BribeClaimedByTrainerTwoPool.$typeName, ...[]), typeArgs: [], isPhantom: BribeClaimedByTrainerTwoPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BribeClaimedByTrainerTwoPool.fromFields(fields), fromFieldsWithTypes: (item) => BribeClaimedByTrainerTwoPool.fromFieldsWithTypes(item), fromBcs: (data) => BribeClaimedByTrainerTwoPool.fromBcs(data), bcs: BribeClaimedByTrainerTwoPool.bcs, fromJSONField: (field) => BribeClaimedByTrainerTwoPool.fromJSONField(field), fromJSON: (json) => BribeClaimedByTrainerTwoPool.fromJSON(json), fromSuiParsedData: (content) => BribeClaimedByTrainerTwoPool.fromSuiParsedData(content), fromSuiObjectData: (content) => BribeClaimedByTrainerTwoPool.fromSuiObjectData(content), fetch: async (client, id) => BribeClaimedByTrainerTwoPool.fetch(client, id), new: (fields) => { return new BribeClaimedByTrainerTwoPool([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BribeClaimedByTrainerTwoPool.reified(); }
    static phantom() { return (0, reified_1.phantom)(BribeClaimedByTrainerTwoPool.reified()); }
    static get p() { return BribeClaimedByTrainerTwoPool.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BribeClaimedByTrainerTwoPool", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), claimed_cycles: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_hive_bribes_a: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_honey_bribes_a: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_hive_bribes_b: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_honey_bribes_b: bcs_1.bcs.vector(bcs_1.bcs.u64()), bribe_a_bal: bcs_1.bcs.u64(), bribe_b_bal: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BribeClaimedByTrainerTwoPool.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), claimedCycles: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_cycles), claimedHiveBribesA: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_hive_bribes_a), claimedHoneyBribesA: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_honey_bribes_a), claimedHiveBribesB: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_hive_bribes_b), claimedHoneyBribesB: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_honey_bribes_b), bribeABal: (0, reified_1.decodeFromFields)("u64", fields.bribe_a_bal), bribeBBal: (0, reified_1.decodeFromFields)("u64", fields.bribe_b_bal) }); }
    static fromFieldsWithTypes(item) {
        if (!isBribeClaimedByTrainerTwoPool(item.type)) {
            throw new Error("not a BribeClaimedByTrainerTwoPool type");
        }
        return BribeClaimedByTrainerTwoPool.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), claimedCycles: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_cycles), claimedHiveBribesA: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_hive_bribes_a), claimedHoneyBribesA: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_honey_bribes_a), claimedHiveBribesB: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_hive_bribes_b), claimedHoneyBribesB: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_honey_bribes_b), bribeABal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bribe_a_bal), bribeBBal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bribe_b_bal) });
    }
    static fromBcs(data) { return BribeClaimedByTrainerTwoPool.fromFields(BribeClaimedByTrainerTwoPool.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr, claimedCycles: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedCycles), claimedHiveBribesA: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHiveBribesA), claimedHoneyBribesA: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHoneyBribesA), claimedHiveBribesB: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHiveBribesB), claimedHoneyBribesB: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHoneyBribesB), bribeABal: this.bribeABal.toString(), bribeBBal: this.bribeBBal.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BribeClaimedByTrainerTwoPool.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), claimedCycles: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedCycles), claimedHiveBribesA: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHiveBribesA), claimedHoneyBribesA: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHoneyBribesA), claimedHiveBribesB: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHiveBribesB), claimedHoneyBribesB: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHoneyBribesB), bribeABal: (0, reified_1.decodeFromJSONField)("u64", field.bribeABal), bribeBBal: (0, reified_1.decodeFromJSONField)("u64", field.bribeBBal) }); }
    static fromJSON(json) {
        if (json.$typeName !== BribeClaimedByTrainerTwoPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BribeClaimedByTrainerTwoPool.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBribeClaimedByTrainerTwoPool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BribeClaimedByTrainerTwoPool object`);
    } return BribeClaimedByTrainerTwoPool.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBribeClaimedByTrainerTwoPool(data.bcs.type)) {
                throw new Error(`object at is not a BribeClaimedByTrainerTwoPool object`);
            }
            return BribeClaimedByTrainerTwoPool.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BribeClaimedByTrainerTwoPool.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BribeClaimedByTrainerTwoPool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBribeClaimedByTrainerTwoPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BribeClaimedByTrainerTwoPool object`);
        }
        return BribeClaimedByTrainerTwoPool.fromSuiObjectData(res.data);
    }
}
exports.BribeClaimedByTrainerTwoPool = BribeClaimedByTrainerTwoPool;
BribeClaimedByTrainerTwoPool.$typeName = `${PKG_V1}::dragon_food::BribeClaimedByTrainerTwoPool`;
BribeClaimedByTrainerTwoPool.$numTypeParams = 0;
BribeClaimedByTrainerTwoPool.$isPhantom = [];
/* ============================== BribeMarkedAsToken =============================== */
function isBribeMarkedAsToken(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::BribeMarkedAsToken`; }
class BribeMarkedAsToken {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BribeMarkedAsToken.$typeName;
        this.$isPhantom = BribeMarkedAsToken.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BribeMarkedAsToken.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.coinType = fields.coinType;
    }
    static reified() { return { typeName: BribeMarkedAsToken.$typeName, fullTypeName: (0, util_1.composeSuiType)(BribeMarkedAsToken.$typeName, ...[]), typeArgs: [], isPhantom: BribeMarkedAsToken.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BribeMarkedAsToken.fromFields(fields), fromFieldsWithTypes: (item) => BribeMarkedAsToken.fromFieldsWithTypes(item), fromBcs: (data) => BribeMarkedAsToken.fromBcs(data), bcs: BribeMarkedAsToken.bcs, fromJSONField: (field) => BribeMarkedAsToken.fromJSONField(field), fromJSON: (json) => BribeMarkedAsToken.fromJSON(json), fromSuiParsedData: (content) => BribeMarkedAsToken.fromSuiParsedData(content), fromSuiObjectData: (content) => BribeMarkedAsToken.fromSuiObjectData(content), fetch: async (client, id) => BribeMarkedAsToken.fetch(client, id), new: (fields) => { return new BribeMarkedAsToken([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BribeMarkedAsToken.reified(); }
    static phantom() { return (0, reified_1.phantom)(BribeMarkedAsToken.reified()); }
    static get p() { return BribeMarkedAsToken.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BribeMarkedAsToken", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), coin_type: structs_3.String.bcs
        });
    }
    ;
    static fromFields(fields) { return BribeMarkedAsToken.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), coinType: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.coin_type) }); }
    static fromFieldsWithTypes(item) {
        if (!isBribeMarkedAsToken(item.type)) {
            throw new Error("not a BribeMarkedAsToken type");
        }
        return BribeMarkedAsToken.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), coinType: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.coin_type) });
    }
    static fromBcs(data) { return BribeMarkedAsToken.fromFields(BribeMarkedAsToken.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, coinType: this.coinType,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BribeMarkedAsToken.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), coinType: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.coinType) }); }
    static fromJSON(json) {
        if (json.$typeName !== BribeMarkedAsToken.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BribeMarkedAsToken.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBribeMarkedAsToken(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BribeMarkedAsToken object`);
    } return BribeMarkedAsToken.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBribeMarkedAsToken(data.bcs.type)) {
                throw new Error(`object at is not a BribeMarkedAsToken object`);
            }
            return BribeMarkedAsToken.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BribeMarkedAsToken.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BribeMarkedAsToken object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBribeMarkedAsToken(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BribeMarkedAsToken object`);
        }
        return BribeMarkedAsToken.fromSuiObjectData(res.data);
    }
}
exports.BribeMarkedAsToken = BribeMarkedAsToken;
BribeMarkedAsToken.$typeName = `${PKG_V1}::dragon_food::BribeMarkedAsToken`;
BribeMarkedAsToken.$numTypeParams = 0;
BribeMarkedAsToken.$isPhantom = [];
/* ============================== Bribes =============================== */
function isBribes(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::Bribes`; }
class Bribes {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Bribes.$typeName;
        this.$isPhantom = Bribes.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Bribes.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.votingBribes = fields.votingBribes;
        ;
        this.hiveBribe = fields.hiveBribe;
        ;
        this.honeyBribe = fields.honeyBribe;
        ;
        this.hiveFeeClaimIndexes = fields.hiveFeeClaimIndexes;
        ;
        this.honeyFeeClaimIndexes = fields.honeyFeeClaimIndexes;
    }
    static reified() { return { typeName: Bribes.$typeName, fullTypeName: (0, util_1.composeSuiType)(Bribes.$typeName, ...[]), typeArgs: [], isPhantom: Bribes.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Bribes.fromFields(fields), fromFieldsWithTypes: (item) => Bribes.fromFieldsWithTypes(item), fromBcs: (data) => Bribes.fromBcs(data), bcs: Bribes.bcs, fromJSONField: (field) => Bribes.fromJSONField(field), fromJSON: (json) => Bribes.fromJSON(json), fromSuiParsedData: (content) => Bribes.fromSuiParsedData(content), fromSuiObjectData: (content) => Bribes.fromSuiObjectData(content), fetch: async (client, id) => Bribes.fetch(client, id), new: (fields) => { return new Bribes([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Bribes.reified(); }
    static phantom() { return (0, reified_1.phantom)(Bribes.reified()); }
    static get p() { return Bribes.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Bribes", {
            voting_bribes: bcs_1.bcs.vector(structs_3.String.bcs), hive_bribe: structs_5.Balance.bcs, honey_bribe: structs_5.Balance.bcs, hive_fee_claim_indexes: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), honey_fee_claim_indexes: structs_6.LinkedTable.bcs(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return Bribes.reified().new({ votingBribes: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.voting_bribes), hiveBribe: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.hive_bribe), honeyBribe: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.honey_bribe), hiveFeeClaimIndexes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), fields.hive_fee_claim_indexes), honeyFeeClaimIndexes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), fields.honey_fee_claim_indexes) }); }
    static fromFieldsWithTypes(item) {
        if (!isBribes(item.type)) {
            throw new Error("not a Bribes type");
        }
        return Bribes.reified().new({ votingBribes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.voting_bribes), hiveBribe: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.hive_bribe), honeyBribe: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.honey_bribe), hiveFeeClaimIndexes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), item.fields.hive_fee_claim_indexes), honeyFeeClaimIndexes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), item.fields.honey_fee_claim_indexes) });
    }
    static fromBcs(data) { return Bribes.fromFields(Bribes.bcs.parse(data)); }
    toJSONField() {
        return {
            votingBribes: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.votingBribes), hiveBribe: this.hiveBribe.toJSONField(), honeyBribe: this.honeyBribe.toJSONField(), hiveFeeClaimIndexes: this.hiveFeeClaimIndexes.toJSONField(), honeyFeeClaimIndexes: this.honeyFeeClaimIndexes.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Bribes.reified().new({ votingBribes: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.votingBribes), hiveBribe: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.hiveBribe), honeyBribe: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.honeyBribe), hiveFeeClaimIndexes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), field.hiveFeeClaimIndexes), honeyFeeClaimIndexes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), field.honeyFeeClaimIndexes) }); }
    static fromJSON(json) {
        if (json.$typeName !== Bribes.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Bribes.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBribes(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Bribes object`);
    } return Bribes.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBribes(data.bcs.type)) {
                throw new Error(`object at is not a Bribes object`);
            }
            return Bribes.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Bribes.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Bribes object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBribes(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Bribes object`);
        }
        return Bribes.fromSuiObjectData(res.data);
    }
}
exports.Bribes = Bribes;
Bribes.$typeName = `${PKG_V1}::dragon_food::Bribes`;
Bribes.$numTypeParams = 0;
Bribes.$isPhantom = [];
/* ============================== DragonBeeWithdrawalRequested =============================== */
function isDragonBeeWithdrawalRequested(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::DragonBeeWithdrawalRequested`; }
class DragonBeeWithdrawalRequested {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonBeeWithdrawalRequested.$typeName;
        this.$isPhantom = DragonBeeWithdrawalRequested.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonBeeWithdrawalRequested.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.beeVersion = fields.beeVersion;
        ;
        this.withdrawableAtCycle = fields.withdrawableAtCycle;
    }
    static reified() { return { typeName: DragonBeeWithdrawalRequested.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonBeeWithdrawalRequested.$typeName, ...[]), typeArgs: [], isPhantom: DragonBeeWithdrawalRequested.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonBeeWithdrawalRequested.fromFields(fields), fromFieldsWithTypes: (item) => DragonBeeWithdrawalRequested.fromFieldsWithTypes(item), fromBcs: (data) => DragonBeeWithdrawalRequested.fromBcs(data), bcs: DragonBeeWithdrawalRequested.bcs, fromJSONField: (field) => DragonBeeWithdrawalRequested.fromJSONField(field), fromJSON: (json) => DragonBeeWithdrawalRequested.fromJSON(json), fromSuiParsedData: (content) => DragonBeeWithdrawalRequested.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonBeeWithdrawalRequested.fromSuiObjectData(content), fetch: async (client, id) => DragonBeeWithdrawalRequested.fetch(client, id), new: (fields) => { return new DragonBeeWithdrawalRequested([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonBeeWithdrawalRequested.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonBeeWithdrawalRequested.reified()); }
    static get p() { return DragonBeeWithdrawalRequested.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonBeeWithdrawalRequested", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), bee_version: bcs_1.bcs.u64(), withdrawable_at_cycle: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DragonBeeWithdrawalRequested.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), withdrawableAtCycle: (0, reified_1.decodeFromFields)("u64", fields.withdrawable_at_cycle) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonBeeWithdrawalRequested(item.type)) {
            throw new Error("not a DragonBeeWithdrawalRequested type");
        }
        return DragonBeeWithdrawalRequested.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), withdrawableAtCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.withdrawable_at_cycle) });
    }
    static fromBcs(data) { return DragonBeeWithdrawalRequested.fromFields(DragonBeeWithdrawalRequested.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr, beeVersion: this.beeVersion.toString(), withdrawableAtCycle: this.withdrawableAtCycle.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonBeeWithdrawalRequested.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), withdrawableAtCycle: (0, reified_1.decodeFromJSONField)("u64", field.withdrawableAtCycle) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonBeeWithdrawalRequested.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonBeeWithdrawalRequested.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonBeeWithdrawalRequested(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonBeeWithdrawalRequested object`);
    } return DragonBeeWithdrawalRequested.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonBeeWithdrawalRequested(data.bcs.type)) {
                throw new Error(`object at is not a DragonBeeWithdrawalRequested object`);
            }
            return DragonBeeWithdrawalRequested.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonBeeWithdrawalRequested.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonBeeWithdrawalRequested object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonBeeWithdrawalRequested(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonBeeWithdrawalRequested object`);
        }
        return DragonBeeWithdrawalRequested.fromSuiObjectData(res.data);
    }
}
exports.DragonBeeWithdrawalRequested = DragonBeeWithdrawalRequested;
DragonBeeWithdrawalRequested.$typeName = `${PKG_V1}::dragon_food::DragonBeeWithdrawalRequested`;
DragonBeeWithdrawalRequested.$numTypeParams = 0;
DragonBeeWithdrawalRequested.$isPhantom = [];
/* ============================== DragonDen =============================== */
function isDragonDen(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::dragon_food::DragonDen` + '<'); }
class DragonDen {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonDen.$typeName;
        this.$isPhantom = DragonDen.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonDen.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.stakedBalance = fields.stakedBalance;
        ;
        this.hiveClaimIndex = fields.hiveClaimIndex;
        ;
        this.honeyClaimIndex = fields.honeyClaimIndex;
        ;
        this.dragonBee = fields.dragonBee;
        ;
        this.rewardsIndexes = fields.rewardsIndexes;
        ;
        this.isLocked = fields.isLocked;
    }
    static reified(H) { return { typeName: DragonDen.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonDen.$typeName, ...[(0, reified_1.extractType)(H)]), typeArgs: [(0, reified_1.extractType)(H)], isPhantom: DragonDen.$isPhantom, reifiedTypeArgs: [H], fromFields: (fields) => DragonDen.fromFields(H, fields), fromFieldsWithTypes: (item) => DragonDen.fromFieldsWithTypes(H, item), fromBcs: (data) => DragonDen.fromBcs(H, data), bcs: DragonDen.bcs, fromJSONField: (field) => DragonDen.fromJSONField(H, field), fromJSON: (json) => DragonDen.fromJSON(H, json), fromSuiParsedData: (content) => DragonDen.fromSuiParsedData(H, content), fromSuiObjectData: (content) => DragonDen.fromSuiObjectData(H, content), fetch: async (client, id) => DragonDen.fetch(client, H, id), new: (fields) => { return new DragonDen([(0, reified_1.extractType)(H)], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonDen.reified; }
    static phantom(H) { return (0, reified_1.phantom)(DragonDen.reified(H)); }
    static get p() { return DragonDen.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("DragonDen", {
            staked_balance: structs_5.Balance.bcs, hive_claim_index: bcs_1.bcs.u256(), honey_claim_index: bcs_1.bcs.u256(), dragon_bee: structs_2.Option.bcs(LockedDragonBee.bcs), rewards_indexes: structs_6.LinkedTable.bcs(structs_1.String.bcs), is_locked: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return DragonDen.reified(typeArg).new({ stakedBalance: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(typeArg), fields.staked_balance), hiveClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.hive_claim_index), honeyClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.honey_claim_index), dragonBee: (0, reified_1.decodeFromFields)(structs_2.Option.reified(LockedDragonBee.reified()), fields.dragon_bee), rewardsIndexes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified(structs_1.String.reified(), reified.phantom("u256")), fields.rewards_indexes), isLocked: (0, reified_1.decodeFromFields)("bool", fields.is_locked) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isDragonDen(item.type)) {
            throw new Error("not a DragonDen type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return DragonDen.reified(typeArg).new({ stakedBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(typeArg), item.fields.staked_balance), hiveClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_claim_index), honeyClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.honey_claim_index), dragonBee: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(LockedDragonBee.reified()), item.fields.dragon_bee), rewardsIndexes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified(structs_1.String.reified(), reified.phantom("u256")), item.fields.rewards_indexes), isLocked: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_locked) });
    }
    static fromBcs(typeArg, data) { return DragonDen.fromFields(typeArg, DragonDen.bcs.parse(data)); }
    toJSONField() {
        return {
            stakedBalance: this.stakedBalance.toJSONField(), hiveClaimIndex: this.hiveClaimIndex.toString(), honeyClaimIndex: this.honeyClaimIndex.toString(), dragonBee: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${LockedDragonBee.$typeName}>`, this.dragonBee), rewardsIndexes: this.rewardsIndexes.toJSONField(), isLocked: this.isLocked,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return DragonDen.reified(typeArg).new({ stakedBalance: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(typeArg), field.stakedBalance), hiveClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.hiveClaimIndex), honeyClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.honeyClaimIndex), dragonBee: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(LockedDragonBee.reified()), field.dragonBee), rewardsIndexes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified(structs_1.String.reified(), reified.phantom("u256")), field.rewardsIndexes), isLocked: (0, reified_1.decodeFromJSONField)("bool", field.isLocked) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== DragonDen.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(DragonDen.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return DragonDen.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonDen(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonDen object`);
    } return DragonDen.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonDen(data.bcs.type)) {
                throw new Error(`object at is not a DragonDen object`);
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
            return DragonDen.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonDen.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonDen object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonDen(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonDen object`);
        }
        return DragonDen.fromSuiObjectData(typeArg, res.data);
    }
}
exports.DragonDen = DragonDen;
DragonDen.$typeName = `${PKG_V1}::dragon_food::DragonDen`;
DragonDen.$numTypeParams = 1;
DragonDen.$isPhantom = [true,];
/* ============================== DragonFood =============================== */
function isDragonFood(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::DragonFood`; }
class DragonFood {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonFood.$typeName;
        this.$isPhantom = DragonFood.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonFood.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.dragonFoodCap = fields.dragonFoodCap;
        ;
        this.emissions = fields.emissions;
        ;
        this.hiveAvailable = fields.hiveAvailable;
        ;
        this.honeyAvailable = fields.honeyAvailable;
        ;
        this.ongoingCycle = fields.ongoingCycle;
        ;
        this.curCycleStartEpoch = fields.curCycleStartEpoch;
        ;
        this.cycleDuration = fields.cycleDuration;
        ;
        this.addedHiveEnergy = fields.addedHiveEnergy;
        ;
        this.totalHiveEnergy = fields.totalHiveEnergy;
        ;
        this.removedHiveEnergy = fields.removedHiveEnergy;
        ;
        this.addedHoneyHealth = fields.addedHoneyHealth;
        ;
        this.totalHoneyHealth = fields.totalHoneyHealth;
        ;
        this.removedHoneyHealth = fields.removedHoneyHealth;
        ;
        this.voteConfig = fields.voteConfig;
        ;
        this.activePoolHives = fields.activePoolHives;
        ;
        this.poolHives = fields.poolHives;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: DragonFood.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonFood.$typeName, ...[]), typeArgs: [], isPhantom: DragonFood.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonFood.fromFields(fields), fromFieldsWithTypes: (item) => DragonFood.fromFieldsWithTypes(item), fromBcs: (data) => DragonFood.fromBcs(data), bcs: DragonFood.bcs, fromJSONField: (field) => DragonFood.fromJSONField(field), fromJSON: (json) => DragonFood.fromJSON(json), fromSuiParsedData: (content) => DragonFood.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonFood.fromSuiObjectData(content), fetch: async (client, id) => DragonFood.fetch(client, id), new: (fields) => { return new DragonFood([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonFood.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonFood.reified()); }
    static get p() { return DragonFood.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonFood", {
            id: structs_7.UID.bcs, dragon_food_cap: structs_11.DragonFoodCapability.bcs, emissions: EmissionSchedule.bcs, hive_available: structs_5.Balance.bcs, honey_available: structs_5.Balance.bcs, ongoing_cycle: bcs_1.bcs.u64(), cur_cycle_start_epoch: bcs_1.bcs.u64(), cycle_duration: bcs_1.bcs.u64(), added_hive_energy: bcs_1.bcs.u128(), total_hive_energy: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), removed_hive_energy: bcs_1.bcs.u128(), added_honey_health: bcs_1.bcs.u128(), total_honey_health: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), removed_honey_health: bcs_1.bcs.u128(), vote_config: VoteConfig.bcs, active_pool_hives: bcs_1.bcs.u64(), pool_hives: structs_6.LinkedTable.bcs(structs_1.String.bcs), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DragonFood.reified().new({ id: (0, reified_1.decodeFromFields)(structs_7.UID.reified(), fields.id), dragonFoodCap: (0, reified_1.decodeFromFields)(structs_11.DragonFoodCapability.reified(), fields.dragon_food_cap), emissions: (0, reified_1.decodeFromFields)(EmissionSchedule.reified(), fields.emissions), hiveAvailable: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.hive_available), honeyAvailable: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.honey_available), ongoingCycle: (0, reified_1.decodeFromFields)("u64", fields.ongoing_cycle), curCycleStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_cycle_start_epoch), cycleDuration: (0, reified_1.decodeFromFields)("u64", fields.cycle_duration), addedHiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.added_hive_energy), totalHiveEnergy: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), fields.total_hive_energy), removedHiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.removed_hive_energy), addedHoneyHealth: (0, reified_1.decodeFromFields)("u128", fields.added_honey_health), totalHoneyHealth: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), fields.total_honey_health), removedHoneyHealth: (0, reified_1.decodeFromFields)("u128", fields.removed_honey_health), voteConfig: (0, reified_1.decodeFromFields)(VoteConfig.reified(), fields.vote_config), activePoolHives: (0, reified_1.decodeFromFields)("u64", fields.active_pool_hives), poolHives: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.pool_hives), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonFood(item.type)) {
            throw new Error("not a DragonFood type");
        }
        return DragonFood.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.UID.reified(), item.fields.id), dragonFoodCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_11.DragonFoodCapability.reified(), item.fields.dragon_food_cap), emissions: (0, reified_1.decodeFromFieldsWithTypes)(EmissionSchedule.reified(), item.fields.emissions), hiveAvailable: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.hive_available), honeyAvailable: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.honey_available), ongoingCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ongoing_cycle), curCycleStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_cycle_start_epoch), cycleDuration: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cycle_duration), addedHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.added_hive_energy), totalHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), item.fields.total_hive_energy), removedHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.removed_hive_energy), addedHoneyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.added_honey_health), totalHoneyHealth: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), item.fields.total_honey_health), removedHoneyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.removed_honey_health), voteConfig: (0, reified_1.decodeFromFieldsWithTypes)(VoteConfig.reified(), item.fields.vote_config), activePoolHives: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.active_pool_hives), poolHives: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.pool_hives), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return DragonFood.fromFields(DragonFood.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, dragonFoodCap: this.dragonFoodCap.toJSONField(), emissions: this.emissions.toJSONField(), hiveAvailable: this.hiveAvailable.toJSONField(), honeyAvailable: this.honeyAvailable.toJSONField(), ongoingCycle: this.ongoingCycle.toString(), curCycleStartEpoch: this.curCycleStartEpoch.toString(), cycleDuration: this.cycleDuration.toString(), addedHiveEnergy: this.addedHiveEnergy.toString(), totalHiveEnergy: this.totalHiveEnergy.toJSONField(), removedHiveEnergy: this.removedHiveEnergy.toString(), addedHoneyHealth: this.addedHoneyHealth.toString(), totalHoneyHealth: this.totalHoneyHealth.toJSONField(), removedHoneyHealth: this.removedHoneyHealth.toString(), voteConfig: this.voteConfig.toJSONField(), activePoolHives: this.activePoolHives.toString(), poolHives: this.poolHives.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonFood.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_7.UID.reified(), field.id), dragonFoodCap: (0, reified_1.decodeFromJSONField)(structs_11.DragonFoodCapability.reified(), field.dragonFoodCap), emissions: (0, reified_1.decodeFromJSONField)(EmissionSchedule.reified(), field.emissions), hiveAvailable: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.hiveAvailable), honeyAvailable: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.honeyAvailable), ongoingCycle: (0, reified_1.decodeFromJSONField)("u64", field.ongoingCycle), curCycleStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curCycleStartEpoch), cycleDuration: (0, reified_1.decodeFromJSONField)("u64", field.cycleDuration), addedHiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.addedHiveEnergy), totalHiveEnergy: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), field.totalHiveEnergy), removedHiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.removedHiveEnergy), addedHoneyHealth: (0, reified_1.decodeFromJSONField)("u128", field.addedHoneyHealth), totalHoneyHealth: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), field.totalHoneyHealth), removedHoneyHealth: (0, reified_1.decodeFromJSONField)("u128", field.removedHoneyHealth), voteConfig: (0, reified_1.decodeFromJSONField)(VoteConfig.reified(), field.voteConfig), activePoolHives: (0, reified_1.decodeFromJSONField)("u64", field.activePoolHives), poolHives: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.poolHives), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonFood.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonFood.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonFood(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonFood object`);
    } return DragonFood.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonFood(data.bcs.type)) {
                throw new Error(`object at is not a DragonFood object`);
            }
            return DragonFood.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonFood.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonFood object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonFood(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonFood object`);
        }
        return DragonFood.fromSuiObjectData(res.data);
    }
}
exports.DragonFood = DragonFood;
DragonFood.$typeName = `${PKG_V1}::dragon_food::DragonFood`;
DragonFood.$numTypeParams = 0;
DragonFood.$isPhantom = [];
/* ============================== DragonFoodCycleUpdated =============================== */
function isDragonFoodCycleUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::DragonFoodCycleUpdated`; }
class DragonFoodCycleUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonFoodCycleUpdated.$typeName;
        this.$isPhantom = DragonFoodCycleUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonFoodCycleUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.hivePerEpoch = fields.hivePerEpoch;
        ;
        this.honeyPerEpoch = fields.honeyPerEpoch;
        ;
        this.curCycle = fields.curCycle;
        ;
        this.curCycleStartEpoch = fields.curCycleStartEpoch;
        ;
        this.cycleDuration = fields.cycleDuration;
        ;
        this.curTotalHiveEnergy = fields.curTotalHiveEnergy;
        ;
        this.curTotalHoneyHealth = fields.curTotalHoneyHealth;
    }
    static reified() { return { typeName: DragonFoodCycleUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonFoodCycleUpdated.$typeName, ...[]), typeArgs: [], isPhantom: DragonFoodCycleUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonFoodCycleUpdated.fromFields(fields), fromFieldsWithTypes: (item) => DragonFoodCycleUpdated.fromFieldsWithTypes(item), fromBcs: (data) => DragonFoodCycleUpdated.fromBcs(data), bcs: DragonFoodCycleUpdated.bcs, fromJSONField: (field) => DragonFoodCycleUpdated.fromJSONField(field), fromJSON: (json) => DragonFoodCycleUpdated.fromJSON(json), fromSuiParsedData: (content) => DragonFoodCycleUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonFoodCycleUpdated.fromSuiObjectData(content), fetch: async (client, id) => DragonFoodCycleUpdated.fetch(client, id), new: (fields) => { return new DragonFoodCycleUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonFoodCycleUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonFoodCycleUpdated.reified()); }
    static get p() { return DragonFoodCycleUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonFoodCycleUpdated", {
            hive_per_epoch: bcs_1.bcs.u64(), honey_per_epoch: bcs_1.bcs.u64(), cur_cycle: bcs_1.bcs.u64(), cur_cycle_start_epoch: bcs_1.bcs.u64(), cycle_duration: bcs_1.bcs.u64(), cur_total_hive_energy: bcs_1.bcs.u128(), cur_total_honey_health: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return DragonFoodCycleUpdated.reified().new({ hivePerEpoch: (0, reified_1.decodeFromFields)("u64", fields.hive_per_epoch), honeyPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.honey_per_epoch), curCycle: (0, reified_1.decodeFromFields)("u64", fields.cur_cycle), curCycleStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_cycle_start_epoch), cycleDuration: (0, reified_1.decodeFromFields)("u64", fields.cycle_duration), curTotalHiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.cur_total_hive_energy), curTotalHoneyHealth: (0, reified_1.decodeFromFields)("u128", fields.cur_total_honey_health) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonFoodCycleUpdated(item.type)) {
            throw new Error("not a DragonFoodCycleUpdated type");
        }
        return DragonFoodCycleUpdated.reified().new({ hivePerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_per_epoch), honeyPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_per_epoch), curCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_cycle), curCycleStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_cycle_start_epoch), cycleDuration: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cycle_duration), curTotalHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.cur_total_hive_energy), curTotalHoneyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.cur_total_honey_health) });
    }
    static fromBcs(data) { return DragonFoodCycleUpdated.fromFields(DragonFoodCycleUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            hivePerEpoch: this.hivePerEpoch.toString(), honeyPerEpoch: this.honeyPerEpoch.toString(), curCycle: this.curCycle.toString(), curCycleStartEpoch: this.curCycleStartEpoch.toString(), cycleDuration: this.cycleDuration.toString(), curTotalHiveEnergy: this.curTotalHiveEnergy.toString(), curTotalHoneyHealth: this.curTotalHoneyHealth.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonFoodCycleUpdated.reified().new({ hivePerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.hivePerEpoch), honeyPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.honeyPerEpoch), curCycle: (0, reified_1.decodeFromJSONField)("u64", field.curCycle), curCycleStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curCycleStartEpoch), cycleDuration: (0, reified_1.decodeFromJSONField)("u64", field.cycleDuration), curTotalHiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.curTotalHiveEnergy), curTotalHoneyHealth: (0, reified_1.decodeFromJSONField)("u128", field.curTotalHoneyHealth) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonFoodCycleUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonFoodCycleUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonFoodCycleUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonFoodCycleUpdated object`);
    } return DragonFoodCycleUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonFoodCycleUpdated(data.bcs.type)) {
                throw new Error(`object at is not a DragonFoodCycleUpdated object`);
            }
            return DragonFoodCycleUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonFoodCycleUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonFoodCycleUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonFoodCycleUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonFoodCycleUpdated object`);
        }
        return DragonFoodCycleUpdated.fromSuiObjectData(res.data);
    }
}
exports.DragonFoodCycleUpdated = DragonFoodCycleUpdated;
DragonFoodCycleUpdated.$typeName = `${PKG_V1}::dragon_food::DragonFoodCycleUpdated`;
DragonFoodCycleUpdated.$numTypeParams = 0;
DragonFoodCycleUpdated.$isPhantom = [];
/* ============================== DragonFoodVotingConfigUpdated =============================== */
function isDragonFoodVotingConfigUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::DragonFoodVotingConfigUpdated`; }
class DragonFoodVotingConfigUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DragonFoodVotingConfigUpdated.$typeName;
        this.$isPhantom = DragonFoodVotingConfigUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DragonFoodVotingConfigUpdated.$typeName, ...typeArgs);
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
    static reified() { return { typeName: DragonFoodVotingConfigUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(DragonFoodVotingConfigUpdated.$typeName, ...[]), typeArgs: [], isPhantom: DragonFoodVotingConfigUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DragonFoodVotingConfigUpdated.fromFields(fields), fromFieldsWithTypes: (item) => DragonFoodVotingConfigUpdated.fromFieldsWithTypes(item), fromBcs: (data) => DragonFoodVotingConfigUpdated.fromBcs(data), bcs: DragonFoodVotingConfigUpdated.bcs, fromJSONField: (field) => DragonFoodVotingConfigUpdated.fromJSONField(field), fromJSON: (json) => DragonFoodVotingConfigUpdated.fromJSON(json), fromSuiParsedData: (content) => DragonFoodVotingConfigUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => DragonFoodVotingConfigUpdated.fromSuiObjectData(content), fetch: async (client, id) => DragonFoodVotingConfigUpdated.fetch(client, id), new: (fields) => { return new DragonFoodVotingConfigUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DragonFoodVotingConfigUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(DragonFoodVotingConfigUpdated.reified()); }
    static get p() { return DragonFoodVotingConfigUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DragonFoodVotingConfigUpdated", {
            proposal_required_deposit: bcs_1.bcs.u64(), voting_start_delay: bcs_1.bcs.u64(), voting_period_length: bcs_1.bcs.u64(), execution_delay: bcs_1.bcs.u64(), execution_period_length: bcs_1.bcs.u64(), proposal_required_quorum: bcs_1.bcs.u64(), proposal_approval_threshold: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DragonFoodVotingConfigUpdated.reified().new({ proposalRequiredDeposit: (0, reified_1.decodeFromFields)("u64", fields.proposal_required_deposit), votingStartDelay: (0, reified_1.decodeFromFields)("u64", fields.voting_start_delay), votingPeriodLength: (0, reified_1.decodeFromFields)("u64", fields.voting_period_length), executionDelay: (0, reified_1.decodeFromFields)("u64", fields.execution_delay), executionPeriodLength: (0, reified_1.decodeFromFields)("u64", fields.execution_period_length), proposalRequiredQuorum: (0, reified_1.decodeFromFields)("u64", fields.proposal_required_quorum), proposalApprovalThreshold: (0, reified_1.decodeFromFields)("u64", fields.proposal_approval_threshold) }); }
    static fromFieldsWithTypes(item) {
        if (!isDragonFoodVotingConfigUpdated(item.type)) {
            throw new Error("not a DragonFoodVotingConfigUpdated type");
        }
        return DragonFoodVotingConfigUpdated.reified().new({ proposalRequiredDeposit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_required_deposit), votingStartDelay: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_start_delay), votingPeriodLength: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_period_length), executionDelay: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_delay), executionPeriodLength: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_period_length), proposalRequiredQuorum: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_required_quorum), proposalApprovalThreshold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_approval_threshold) });
    }
    static fromBcs(data) { return DragonFoodVotingConfigUpdated.fromFields(DragonFoodVotingConfigUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            proposalRequiredDeposit: this.proposalRequiredDeposit.toString(), votingStartDelay: this.votingStartDelay.toString(), votingPeriodLength: this.votingPeriodLength.toString(), executionDelay: this.executionDelay.toString(), executionPeriodLength: this.executionPeriodLength.toString(), proposalRequiredQuorum: this.proposalRequiredQuorum.toString(), proposalApprovalThreshold: this.proposalApprovalThreshold.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DragonFoodVotingConfigUpdated.reified().new({ proposalRequiredDeposit: (0, reified_1.decodeFromJSONField)("u64", field.proposalRequiredDeposit), votingStartDelay: (0, reified_1.decodeFromJSONField)("u64", field.votingStartDelay), votingPeriodLength: (0, reified_1.decodeFromJSONField)("u64", field.votingPeriodLength), executionDelay: (0, reified_1.decodeFromJSONField)("u64", field.executionDelay), executionPeriodLength: (0, reified_1.decodeFromJSONField)("u64", field.executionPeriodLength), proposalRequiredQuorum: (0, reified_1.decodeFromJSONField)("u64", field.proposalRequiredQuorum), proposalApprovalThreshold: (0, reified_1.decodeFromJSONField)("u64", field.proposalApprovalThreshold) }); }
    static fromJSON(json) {
        if (json.$typeName !== DragonFoodVotingConfigUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DragonFoodVotingConfigUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDragonFoodVotingConfigUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DragonFoodVotingConfigUpdated object`);
    } return DragonFoodVotingConfigUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonFoodVotingConfigUpdated(data.bcs.type)) {
                throw new Error(`object at is not a DragonFoodVotingConfigUpdated object`);
            }
            return DragonFoodVotingConfigUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DragonFoodVotingConfigUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DragonFoodVotingConfigUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDragonFoodVotingConfigUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DragonFoodVotingConfigUpdated object`);
        }
        return DragonFoodVotingConfigUpdated.fromSuiObjectData(res.data);
    }
}
exports.DragonFoodVotingConfigUpdated = DragonFoodVotingConfigUpdated;
DragonFoodVotingConfigUpdated.$typeName = `${PKG_V1}::dragon_food::DragonFoodVotingConfigUpdated`;
DragonFoodVotingConfigUpdated.$numTypeParams = 0;
DragonFoodVotingConfigUpdated.$isPhantom = [];
/* ============================== EmissionSchedule =============================== */
function isEmissionSchedule(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::EmissionSchedule`; }
class EmissionSchedule {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = EmissionSchedule.$typeName;
        this.$isPhantom = EmissionSchedule.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(EmissionSchedule.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.startEpoch = fields.startEpoch;
        ;
        this.hivePerEpoch = fields.hivePerEpoch;
        ;
        this.honeyPerEpoch = fields.honeyPerEpoch;
        ;
        this.changePctPerCycle = fields.changePctPerCycle;
        ;
        this.hiveIncreaseVotes = fields.hiveIncreaseVotes;
        ;
        this.hiveDecreaseVotes = fields.hiveDecreaseVotes;
        ;
        this.hiveSameVotes = fields.hiveSameVotes;
        ;
        this.honeyIncreaseVotes = fields.honeyIncreaseVotes;
        ;
        this.honeyDecreaseVotes = fields.honeyDecreaseVotes;
        ;
        this.honeySameVotes = fields.honeySameVotes;
    }
    static reified() { return { typeName: EmissionSchedule.$typeName, fullTypeName: (0, util_1.composeSuiType)(EmissionSchedule.$typeName, ...[]), typeArgs: [], isPhantom: EmissionSchedule.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => EmissionSchedule.fromFields(fields), fromFieldsWithTypes: (item) => EmissionSchedule.fromFieldsWithTypes(item), fromBcs: (data) => EmissionSchedule.fromBcs(data), bcs: EmissionSchedule.bcs, fromJSONField: (field) => EmissionSchedule.fromJSONField(field), fromJSON: (json) => EmissionSchedule.fromJSON(json), fromSuiParsedData: (content) => EmissionSchedule.fromSuiParsedData(content), fromSuiObjectData: (content) => EmissionSchedule.fromSuiObjectData(content), fetch: async (client, id) => EmissionSchedule.fetch(client, id), new: (fields) => { return new EmissionSchedule([], fields); }, kind: "StructClassReified", }; }
    static get r() { return EmissionSchedule.reified(); }
    static phantom() { return (0, reified_1.phantom)(EmissionSchedule.reified()); }
    static get p() { return EmissionSchedule.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("EmissionSchedule", {
            start_epoch: bcs_1.bcs.u64(), hive_per_epoch: bcs_1.bcs.u64(), honey_per_epoch: bcs_1.bcs.u64(), change_pct_per_cycle: bcs_1.bcs.u64(), hive_increase_votes: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), hive_decrease_votes: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), hive_same_votes: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), honey_increase_votes: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), honey_decrease_votes: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), honey_same_votes: structs_6.LinkedTable.bcs(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return EmissionSchedule.reified().new({ startEpoch: (0, reified_1.decodeFromFields)("u64", fields.start_epoch), hivePerEpoch: (0, reified_1.decodeFromFields)("u64", fields.hive_per_epoch), honeyPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.honey_per_epoch), changePctPerCycle: (0, reified_1.decodeFromFields)("u64", fields.change_pct_per_cycle), hiveIncreaseVotes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), fields.hive_increase_votes), hiveDecreaseVotes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), fields.hive_decrease_votes), hiveSameVotes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), fields.hive_same_votes), honeyIncreaseVotes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), fields.honey_increase_votes), honeyDecreaseVotes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), fields.honey_decrease_votes), honeySameVotes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), fields.honey_same_votes) }); }
    static fromFieldsWithTypes(item) {
        if (!isEmissionSchedule(item.type)) {
            throw new Error("not a EmissionSchedule type");
        }
        return EmissionSchedule.reified().new({ startEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_epoch), hivePerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_per_epoch), honeyPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_per_epoch), changePctPerCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.change_pct_per_cycle), hiveIncreaseVotes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), item.fields.hive_increase_votes), hiveDecreaseVotes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), item.fields.hive_decrease_votes), hiveSameVotes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), item.fields.hive_same_votes), honeyIncreaseVotes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), item.fields.honey_increase_votes), honeyDecreaseVotes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), item.fields.honey_decrease_votes), honeySameVotes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), item.fields.honey_same_votes) });
    }
    static fromBcs(data) { return EmissionSchedule.fromFields(EmissionSchedule.bcs.parse(data)); }
    toJSONField() {
        return {
            startEpoch: this.startEpoch.toString(), hivePerEpoch: this.hivePerEpoch.toString(), honeyPerEpoch: this.honeyPerEpoch.toString(), changePctPerCycle: this.changePctPerCycle.toString(), hiveIncreaseVotes: this.hiveIncreaseVotes.toJSONField(), hiveDecreaseVotes: this.hiveDecreaseVotes.toJSONField(), hiveSameVotes: this.hiveSameVotes.toJSONField(), honeyIncreaseVotes: this.honeyIncreaseVotes.toJSONField(), honeyDecreaseVotes: this.honeyDecreaseVotes.toJSONField(), honeySameVotes: this.honeySameVotes.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return EmissionSchedule.reified().new({ startEpoch: (0, reified_1.decodeFromJSONField)("u64", field.startEpoch), hivePerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.hivePerEpoch), honeyPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.honeyPerEpoch), changePctPerCycle: (0, reified_1.decodeFromJSONField)("u64", field.changePctPerCycle), hiveIncreaseVotes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), field.hiveIncreaseVotes), hiveDecreaseVotes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), field.hiveDecreaseVotes), hiveSameVotes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), field.hiveSameVotes), honeyIncreaseVotes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), field.honeyIncreaseVotes), honeyDecreaseVotes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), field.honeyDecreaseVotes), honeySameVotes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), field.honeySameVotes) }); }
    static fromJSON(json) {
        if (json.$typeName !== EmissionSchedule.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return EmissionSchedule.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEmissionSchedule(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a EmissionSchedule object`);
    } return EmissionSchedule.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isEmissionSchedule(data.bcs.type)) {
                throw new Error(`object at is not a EmissionSchedule object`);
            }
            return EmissionSchedule.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return EmissionSchedule.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching EmissionSchedule object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEmissionSchedule(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a EmissionSchedule object`);
        }
        return EmissionSchedule.fromSuiObjectData(res.data);
    }
}
exports.EmissionSchedule = EmissionSchedule;
EmissionSchedule.$typeName = `${PKG_V1}::dragon_food::EmissionSchedule`;
EmissionSchedule.$numTypeParams = 0;
EmissionSchedule.$isPhantom = [];
/* ============================== EmissionsRcvdByPoolHive =============================== */
function isEmissionsRcvdByPoolHive(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::EmissionsRcvdByPoolHive`; }
class EmissionsRcvdByPoolHive {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = EmissionsRcvdByPoolHive.$typeName;
        this.$isPhantom = EmissionsRcvdByPoolHive.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(EmissionsRcvdByPoolHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.hiveEarned = fields.hiveEarned;
        ;
        this.honeyEarned = fields.honeyEarned;
        ;
        this.hivePerEpoch = fields.hivePerEpoch;
        ;
        this.honeyPerEpoch = fields.honeyPerEpoch;
        ;
        this.hiveIndexIncrement = fields.hiveIndexIncrement;
        ;
        this.honeyIndexIncrement = fields.honeyIndexIncrement;
        ;
        this.globalHoneyClaimIndex = fields.globalHoneyClaimIndex;
        ;
        this.globalHiveClaimIndex = fields.globalHiveClaimIndex;
        ;
        this.lastClaimEpoch = fields.lastClaimEpoch;
    }
    static reified() { return { typeName: EmissionsRcvdByPoolHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(EmissionsRcvdByPoolHive.$typeName, ...[]), typeArgs: [], isPhantom: EmissionsRcvdByPoolHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => EmissionsRcvdByPoolHive.fromFields(fields), fromFieldsWithTypes: (item) => EmissionsRcvdByPoolHive.fromFieldsWithTypes(item), fromBcs: (data) => EmissionsRcvdByPoolHive.fromBcs(data), bcs: EmissionsRcvdByPoolHive.bcs, fromJSONField: (field) => EmissionsRcvdByPoolHive.fromJSONField(field), fromJSON: (json) => EmissionsRcvdByPoolHive.fromJSON(json), fromSuiParsedData: (content) => EmissionsRcvdByPoolHive.fromSuiParsedData(content), fromSuiObjectData: (content) => EmissionsRcvdByPoolHive.fromSuiObjectData(content), fetch: async (client, id) => EmissionsRcvdByPoolHive.fetch(client, id), new: (fields) => { return new EmissionsRcvdByPoolHive([], fields); }, kind: "StructClassReified", }; }
    static get r() { return EmissionsRcvdByPoolHive.reified(); }
    static phantom() { return (0, reified_1.phantom)(EmissionsRcvdByPoolHive.reified()); }
    static get p() { return EmissionsRcvdByPoolHive.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("EmissionsRcvdByPoolHive", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), hive_earned: bcs_1.bcs.u64(), honey_earned: bcs_1.bcs.u64(), hive_per_epoch: bcs_1.bcs.u256(), honey_per_epoch: bcs_1.bcs.u256(), hive_index_increment: bcs_1.bcs.u256(), honey_index_increment: bcs_1.bcs.u256(), global_honey_claim_index: bcs_1.bcs.u256(), global_hive_claim_index: bcs_1.bcs.u256(), last_claim_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return EmissionsRcvdByPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), hiveEarned: (0, reified_1.decodeFromFields)("u64", fields.hive_earned), honeyEarned: (0, reified_1.decodeFromFields)("u64", fields.honey_earned), hivePerEpoch: (0, reified_1.decodeFromFields)("u256", fields.hive_per_epoch), honeyPerEpoch: (0, reified_1.decodeFromFields)("u256", fields.honey_per_epoch), hiveIndexIncrement: (0, reified_1.decodeFromFields)("u256", fields.hive_index_increment), honeyIndexIncrement: (0, reified_1.decodeFromFields)("u256", fields.honey_index_increment), globalHoneyClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.global_honey_claim_index), globalHiveClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.global_hive_claim_index), lastClaimEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_claim_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isEmissionsRcvdByPoolHive(item.type)) {
            throw new Error("not a EmissionsRcvdByPoolHive type");
        }
        return EmissionsRcvdByPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), hiveEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_earned), honeyEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_earned), hivePerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_per_epoch), honeyPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.honey_per_epoch), hiveIndexIncrement: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_index_increment), honeyIndexIncrement: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.honey_index_increment), globalHoneyClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.global_honey_claim_index), globalHiveClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.global_hive_claim_index), lastClaimEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_claim_epoch) });
    }
    static fromBcs(data) { return EmissionsRcvdByPoolHive.fromFields(EmissionsRcvdByPoolHive.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, hiveEarned: this.hiveEarned.toString(), honeyEarned: this.honeyEarned.toString(), hivePerEpoch: this.hivePerEpoch.toString(), honeyPerEpoch: this.honeyPerEpoch.toString(), hiveIndexIncrement: this.hiveIndexIncrement.toString(), honeyIndexIncrement: this.honeyIndexIncrement.toString(), globalHoneyClaimIndex: this.globalHoneyClaimIndex.toString(), globalHiveClaimIndex: this.globalHiveClaimIndex.toString(), lastClaimEpoch: this.lastClaimEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return EmissionsRcvdByPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), hiveEarned: (0, reified_1.decodeFromJSONField)("u64", field.hiveEarned), honeyEarned: (0, reified_1.decodeFromJSONField)("u64", field.honeyEarned), hivePerEpoch: (0, reified_1.decodeFromJSONField)("u256", field.hivePerEpoch), honeyPerEpoch: (0, reified_1.decodeFromJSONField)("u256", field.honeyPerEpoch), hiveIndexIncrement: (0, reified_1.decodeFromJSONField)("u256", field.hiveIndexIncrement), honeyIndexIncrement: (0, reified_1.decodeFromJSONField)("u256", field.honeyIndexIncrement), globalHoneyClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.globalHoneyClaimIndex), globalHiveClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.globalHiveClaimIndex), lastClaimEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastClaimEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== EmissionsRcvdByPoolHive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return EmissionsRcvdByPoolHive.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEmissionsRcvdByPoolHive(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a EmissionsRcvdByPoolHive object`);
    } return EmissionsRcvdByPoolHive.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isEmissionsRcvdByPoolHive(data.bcs.type)) {
                throw new Error(`object at is not a EmissionsRcvdByPoolHive object`);
            }
            return EmissionsRcvdByPoolHive.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return EmissionsRcvdByPoolHive.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching EmissionsRcvdByPoolHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEmissionsRcvdByPoolHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a EmissionsRcvdByPoolHive object`);
        }
        return EmissionsRcvdByPoolHive.fromSuiObjectData(res.data);
    }
}
exports.EmissionsRcvdByPoolHive = EmissionsRcvdByPoolHive;
EmissionsRcvdByPoolHive.$typeName = `${PKG_V1}::dragon_food::EmissionsRcvdByPoolHive`;
EmissionsRcvdByPoolHive.$numTypeParams = 0;
EmissionsRcvdByPoolHive.$isPhantom = [];
/* ============================== FeedingFoodToBee =============================== */
function isFeedingFoodToBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::FeedingFoodToBee`; }
class FeedingFoodToBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FeedingFoodToBee.$typeName;
        this.$isPhantom = FeedingFoodToBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeedingFoodToBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.beeVersion = fields.beeVersion;
        ;
        this.lockedAtCycle = fields.lockedAtCycle;
        ;
        this.hiveEarned = fields.hiveEarned;
        ;
        this.honeyEarned = fields.honeyEarned;
        ;
        this.stakedForHoney = fields.stakedForHoney;
    }
    static reified() { return { typeName: FeedingFoodToBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeedingFoodToBee.$typeName, ...[]), typeArgs: [], isPhantom: FeedingFoodToBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FeedingFoodToBee.fromFields(fields), fromFieldsWithTypes: (item) => FeedingFoodToBee.fromFieldsWithTypes(item), fromBcs: (data) => FeedingFoodToBee.fromBcs(data), bcs: FeedingFoodToBee.bcs, fromJSONField: (field) => FeedingFoodToBee.fromJSONField(field), fromJSON: (json) => FeedingFoodToBee.fromJSON(json), fromSuiParsedData: (content) => FeedingFoodToBee.fromSuiParsedData(content), fromSuiObjectData: (content) => FeedingFoodToBee.fromSuiObjectData(content), fetch: async (client, id) => FeedingFoodToBee.fetch(client, id), new: (fields) => { return new FeedingFoodToBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FeedingFoodToBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(FeedingFoodToBee.reified()); }
    static get p() { return FeedingFoodToBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FeedingFoodToBee", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), bee_version: bcs_1.bcs.u64(), locked_at_cycle: bcs_1.bcs.u64(), hive_earned: bcs_1.bcs.u64(), honey_earned: bcs_1.bcs.u64(), staked_for_honey: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FeedingFoodToBee.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), lockedAtCycle: (0, reified_1.decodeFromFields)("u64", fields.locked_at_cycle), hiveEarned: (0, reified_1.decodeFromFields)("u64", fields.hive_earned), honeyEarned: (0, reified_1.decodeFromFields)("u64", fields.honey_earned), stakedForHoney: (0, reified_1.decodeFromFields)("u64", fields.staked_for_honey) }); }
    static fromFieldsWithTypes(item) {
        if (!isFeedingFoodToBee(item.type)) {
            throw new Error("not a FeedingFoodToBee type");
        }
        return FeedingFoodToBee.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), lockedAtCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.locked_at_cycle), hiveEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_earned), honeyEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_earned), stakedForHoney: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.staked_for_honey) });
    }
    static fromBcs(data) { return FeedingFoodToBee.fromFields(FeedingFoodToBee.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr, beeVersion: this.beeVersion.toString(), lockedAtCycle: this.lockedAtCycle.toString(), hiveEarned: this.hiveEarned.toString(), honeyEarned: this.honeyEarned.toString(), stakedForHoney: this.stakedForHoney.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FeedingFoodToBee.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), lockedAtCycle: (0, reified_1.decodeFromJSONField)("u64", field.lockedAtCycle), hiveEarned: (0, reified_1.decodeFromJSONField)("u64", field.hiveEarned), honeyEarned: (0, reified_1.decodeFromJSONField)("u64", field.honeyEarned), stakedForHoney: (0, reified_1.decodeFromJSONField)("u64", field.stakedForHoney) }); }
    static fromJSON(json) {
        if (json.$typeName !== FeedingFoodToBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FeedingFoodToBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFeedingFoodToBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FeedingFoodToBee object`);
    } return FeedingFoodToBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeedingFoodToBee(data.bcs.type)) {
                throw new Error(`object at is not a FeedingFoodToBee object`);
            }
            return FeedingFoodToBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FeedingFoodToBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeedingFoodToBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeedingFoodToBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeedingFoodToBee object`);
        }
        return FeedingFoodToBee.fromSuiObjectData(res.data);
    }
}
exports.FeedingFoodToBee = FeedingFoodToBee;
FeedingFoodToBee.$typeName = `${PKG_V1}::dragon_food::FeedingFoodToBee`;
FeedingFoodToBee.$numTypeParams = 0;
FeedingFoodToBee.$isPhantom = [];
/* ============================== FeesClaimedForEmissions =============================== */
function isFeesClaimedForEmissions(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::FeesClaimedForEmissions`; }
class FeesClaimedForEmissions {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FeesClaimedForEmissions.$typeName;
        this.$isPhantom = FeesClaimedForEmissions.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FeesClaimedForEmissions.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.isAdded = fields.isAdded;
        ;
        this.hiveFeeClaimed = fields.hiveFeeClaimed;
        ;
        this.honeyFeeClaimed = fields.honeyFeeClaimed;
        ;
        this.cycle = fields.cycle;
        ;
        this.hiveFeeIndexIncrement = fields.hiveFeeIndexIncrement;
        ;
        this.honeyFeeIndexIncrement = fields.honeyFeeIndexIncrement;
    }
    static reified() { return { typeName: FeesClaimedForEmissions.$typeName, fullTypeName: (0, util_1.composeSuiType)(FeesClaimedForEmissions.$typeName, ...[]), typeArgs: [], isPhantom: FeesClaimedForEmissions.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FeesClaimedForEmissions.fromFields(fields), fromFieldsWithTypes: (item) => FeesClaimedForEmissions.fromFieldsWithTypes(item), fromBcs: (data) => FeesClaimedForEmissions.fromBcs(data), bcs: FeesClaimedForEmissions.bcs, fromJSONField: (field) => FeesClaimedForEmissions.fromJSONField(field), fromJSON: (json) => FeesClaimedForEmissions.fromJSON(json), fromSuiParsedData: (content) => FeesClaimedForEmissions.fromSuiParsedData(content), fromSuiObjectData: (content) => FeesClaimedForEmissions.fromSuiObjectData(content), fetch: async (client, id) => FeesClaimedForEmissions.fetch(client, id), new: (fields) => { return new FeesClaimedForEmissions([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FeesClaimedForEmissions.reified(); }
    static phantom() { return (0, reified_1.phantom)(FeesClaimedForEmissions.reified()); }
    static get p() { return FeesClaimedForEmissions.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FeesClaimedForEmissions", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), is_added: bcs_1.bcs.bool(), hive_fee_claimed: bcs_1.bcs.u64(), honey_fee_claimed: bcs_1.bcs.u64(), cycle: bcs_1.bcs.u64(), hive_fee_index_increment: bcs_1.bcs.u256(), honey_fee_index_increment: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(fields) { return FeesClaimedForEmissions.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), isAdded: (0, reified_1.decodeFromFields)("bool", fields.is_added), hiveFeeClaimed: (0, reified_1.decodeFromFields)("u64", fields.hive_fee_claimed), honeyFeeClaimed: (0, reified_1.decodeFromFields)("u64", fields.honey_fee_claimed), cycle: (0, reified_1.decodeFromFields)("u64", fields.cycle), hiveFeeIndexIncrement: (0, reified_1.decodeFromFields)("u256", fields.hive_fee_index_increment), honeyFeeIndexIncrement: (0, reified_1.decodeFromFields)("u256", fields.honey_fee_index_increment) }); }
    static fromFieldsWithTypes(item) {
        if (!isFeesClaimedForEmissions(item.type)) {
            throw new Error("not a FeesClaimedForEmissions type");
        }
        return FeesClaimedForEmissions.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), isAdded: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_added), hiveFeeClaimed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_fee_claimed), honeyFeeClaimed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_fee_claimed), cycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cycle), hiveFeeIndexIncrement: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_fee_index_increment), honeyFeeIndexIncrement: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.honey_fee_index_increment) });
    }
    static fromBcs(data) { return FeesClaimedForEmissions.fromFields(FeesClaimedForEmissions.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, isAdded: this.isAdded, hiveFeeClaimed: this.hiveFeeClaimed.toString(), honeyFeeClaimed: this.honeyFeeClaimed.toString(), cycle: this.cycle.toString(), hiveFeeIndexIncrement: this.hiveFeeIndexIncrement.toString(), honeyFeeIndexIncrement: this.honeyFeeIndexIncrement.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FeesClaimedForEmissions.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), isAdded: (0, reified_1.decodeFromJSONField)("bool", field.isAdded), hiveFeeClaimed: (0, reified_1.decodeFromJSONField)("u64", field.hiveFeeClaimed), honeyFeeClaimed: (0, reified_1.decodeFromJSONField)("u64", field.honeyFeeClaimed), cycle: (0, reified_1.decodeFromJSONField)("u64", field.cycle), hiveFeeIndexIncrement: (0, reified_1.decodeFromJSONField)("u256", field.hiveFeeIndexIncrement), honeyFeeIndexIncrement: (0, reified_1.decodeFromJSONField)("u256", field.honeyFeeIndexIncrement) }); }
    static fromJSON(json) {
        if (json.$typeName !== FeesClaimedForEmissions.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FeesClaimedForEmissions.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFeesClaimedForEmissions(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FeesClaimedForEmissions object`);
    } return FeesClaimedForEmissions.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeesClaimedForEmissions(data.bcs.type)) {
                throw new Error(`object at is not a FeesClaimedForEmissions object`);
            }
            return FeesClaimedForEmissions.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FeesClaimedForEmissions.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FeesClaimedForEmissions object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFeesClaimedForEmissions(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FeesClaimedForEmissions object`);
        }
        return FeesClaimedForEmissions.fromSuiObjectData(res.data);
    }
}
exports.FeesClaimedForEmissions = FeesClaimedForEmissions;
FeesClaimedForEmissions.$typeName = `${PKG_V1}::dragon_food::FeesClaimedForEmissions`;
FeesClaimedForEmissions.$numTypeParams = 0;
FeesClaimedForEmissions.$isPhantom = [];
/* ============================== FoodCycleUpdatedForPoolHive =============================== */
function isFoodCycleUpdatedForPoolHive(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::FoodCycleUpdatedForPoolHive`; }
class FoodCycleUpdatedForPoolHive {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FoodCycleUpdatedForPoolHive.$typeName;
        this.$isPhantom = FoodCycleUpdatedForPoolHive.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FoodCycleUpdatedForPoolHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.curCycle = fields.curCycle;
        ;
        this.curCycleStartEpoch = fields.curCycleStartEpoch;
        ;
        this.curTotalHiveEnergy = fields.curTotalHiveEnergy;
        ;
        this.curTotalHoneyHealth = fields.curTotalHoneyHealth;
    }
    static reified() { return { typeName: FoodCycleUpdatedForPoolHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(FoodCycleUpdatedForPoolHive.$typeName, ...[]), typeArgs: [], isPhantom: FoodCycleUpdatedForPoolHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FoodCycleUpdatedForPoolHive.fromFields(fields), fromFieldsWithTypes: (item) => FoodCycleUpdatedForPoolHive.fromFieldsWithTypes(item), fromBcs: (data) => FoodCycleUpdatedForPoolHive.fromBcs(data), bcs: FoodCycleUpdatedForPoolHive.bcs, fromJSONField: (field) => FoodCycleUpdatedForPoolHive.fromJSONField(field), fromJSON: (json) => FoodCycleUpdatedForPoolHive.fromJSON(json), fromSuiParsedData: (content) => FoodCycleUpdatedForPoolHive.fromSuiParsedData(content), fromSuiObjectData: (content) => FoodCycleUpdatedForPoolHive.fromSuiObjectData(content), fetch: async (client, id) => FoodCycleUpdatedForPoolHive.fetch(client, id), new: (fields) => { return new FoodCycleUpdatedForPoolHive([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FoodCycleUpdatedForPoolHive.reified(); }
    static phantom() { return (0, reified_1.phantom)(FoodCycleUpdatedForPoolHive.reified()); }
    static get p() { return FoodCycleUpdatedForPoolHive.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FoodCycleUpdatedForPoolHive", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), cur_cycle: bcs_1.bcs.u64(), cur_cycle_start_epoch: bcs_1.bcs.u64(), cur_total_hive_energy: bcs_1.bcs.u128(), cur_total_honey_health: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return FoodCycleUpdatedForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), curCycle: (0, reified_1.decodeFromFields)("u64", fields.cur_cycle), curCycleStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_cycle_start_epoch), curTotalHiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.cur_total_hive_energy), curTotalHoneyHealth: (0, reified_1.decodeFromFields)("u128", fields.cur_total_honey_health) }); }
    static fromFieldsWithTypes(item) {
        if (!isFoodCycleUpdatedForPoolHive(item.type)) {
            throw new Error("not a FoodCycleUpdatedForPoolHive type");
        }
        return FoodCycleUpdatedForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), curCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_cycle), curCycleStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_cycle_start_epoch), curTotalHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.cur_total_hive_energy), curTotalHoneyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.cur_total_honey_health) });
    }
    static fromBcs(data) { return FoodCycleUpdatedForPoolHive.fromFields(FoodCycleUpdatedForPoolHive.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, curCycle: this.curCycle.toString(), curCycleStartEpoch: this.curCycleStartEpoch.toString(), curTotalHiveEnergy: this.curTotalHiveEnergy.toString(), curTotalHoneyHealth: this.curTotalHoneyHealth.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FoodCycleUpdatedForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), curCycle: (0, reified_1.decodeFromJSONField)("u64", field.curCycle), curCycleStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curCycleStartEpoch), curTotalHiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.curTotalHiveEnergy), curTotalHoneyHealth: (0, reified_1.decodeFromJSONField)("u128", field.curTotalHoneyHealth) }); }
    static fromJSON(json) {
        if (json.$typeName !== FoodCycleUpdatedForPoolHive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FoodCycleUpdatedForPoolHive.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFoodCycleUpdatedForPoolHive(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FoodCycleUpdatedForPoolHive object`);
    } return FoodCycleUpdatedForPoolHive.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFoodCycleUpdatedForPoolHive(data.bcs.type)) {
                throw new Error(`object at is not a FoodCycleUpdatedForPoolHive object`);
            }
            return FoodCycleUpdatedForPoolHive.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FoodCycleUpdatedForPoolHive.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FoodCycleUpdatedForPoolHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFoodCycleUpdatedForPoolHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FoodCycleUpdatedForPoolHive object`);
        }
        return FoodCycleUpdatedForPoolHive.fromSuiObjectData(res.data);
    }
}
exports.FoodCycleUpdatedForPoolHive = FoodCycleUpdatedForPoolHive;
FoodCycleUpdatedForPoolHive.$typeName = `${PKG_V1}::dragon_food::FoodCycleUpdatedForPoolHive`;
FoodCycleUpdatedForPoolHive.$numTypeParams = 0;
FoodCycleUpdatedForPoolHive.$isPhantom = [];
/* ============================== FruitLife =============================== */
function isFruitLife(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::FruitLife`; }
class FruitLife {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FruitLife.$typeName;
        this.$isPhantom = FruitLife.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FruitLife.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.fruitTypename = fields.fruitTypename;
        ;
        this.startEpoch = fields.startEpoch;
        ;
        this.endEpoch = fields.endEpoch;
    }
    static reified() { return { typeName: FruitLife.$typeName, fullTypeName: (0, util_1.composeSuiType)(FruitLife.$typeName, ...[]), typeArgs: [], isPhantom: FruitLife.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FruitLife.fromFields(fields), fromFieldsWithTypes: (item) => FruitLife.fromFieldsWithTypes(item), fromBcs: (data) => FruitLife.fromBcs(data), bcs: FruitLife.bcs, fromJSONField: (field) => FruitLife.fromJSONField(field), fromJSON: (json) => FruitLife.fromJSON(json), fromSuiParsedData: (content) => FruitLife.fromSuiParsedData(content), fromSuiObjectData: (content) => FruitLife.fromSuiObjectData(content), fetch: async (client, id) => FruitLife.fetch(client, id), new: (fields) => { return new FruitLife([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FruitLife.reified(); }
    static phantom() { return (0, reified_1.phantom)(FruitLife.reified()); }
    static get p() { return FruitLife.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FruitLife", {
            fruit_typename: structs_4.TypeName.bcs, start_epoch: bcs_1.bcs.u64(), end_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FruitLife.reified().new({ fruitTypename: (0, reified_1.decodeFromFields)(structs_4.TypeName.reified(), fields.fruit_typename), startEpoch: (0, reified_1.decodeFromFields)("u64", fields.start_epoch), endEpoch: (0, reified_1.decodeFromFields)("u64", fields.end_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isFruitLife(item.type)) {
            throw new Error("not a FruitLife type");
        }
        return FruitLife.reified().new({ fruitTypename: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.TypeName.reified(), item.fields.fruit_typename), startEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_epoch), endEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_epoch) });
    }
    static fromBcs(data) { return FruitLife.fromFields(FruitLife.bcs.parse(data)); }
    toJSONField() {
        return {
            fruitTypename: this.fruitTypename.toJSONField(), startEpoch: this.startEpoch.toString(), endEpoch: this.endEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FruitLife.reified().new({ fruitTypename: (0, reified_1.decodeFromJSONField)(structs_4.TypeName.reified(), field.fruitTypename), startEpoch: (0, reified_1.decodeFromJSONField)("u64", field.startEpoch), endEpoch: (0, reified_1.decodeFromJSONField)("u64", field.endEpoch) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFruitLife(data.bcs.type)) {
                throw new Error(`object at is not a FruitLife object`);
            }
            return FruitLife.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FruitLife.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FruitLife object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFruitLife(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FruitLife object`);
        }
        return FruitLife.fromSuiObjectData(res.data);
    }
}
exports.FruitLife = FruitLife;
FruitLife.$typeName = `${PKG_V1}::dragon_food::FruitLife`;
FruitLife.$numTypeParams = 0;
FruitLife.$isPhantom = [];
/* ============================== HivePerEpochUpdated =============================== */
function isHivePerEpochUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::HivePerEpochUpdated`; }
class HivePerEpochUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HivePerEpochUpdated.$typeName;
        this.$isPhantom = HivePerEpochUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HivePerEpochUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.hivePerEpoch = fields.hivePerEpoch;
        ;
        this.startEpoch = fields.startEpoch;
        ;
        this.honeyPerEpoch = fields.honeyPerEpoch;
    }
    static reified() { return { typeName: HivePerEpochUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(HivePerEpochUpdated.$typeName, ...[]), typeArgs: [], isPhantom: HivePerEpochUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HivePerEpochUpdated.fromFields(fields), fromFieldsWithTypes: (item) => HivePerEpochUpdated.fromFieldsWithTypes(item), fromBcs: (data) => HivePerEpochUpdated.fromBcs(data), bcs: HivePerEpochUpdated.bcs, fromJSONField: (field) => HivePerEpochUpdated.fromJSONField(field), fromJSON: (json) => HivePerEpochUpdated.fromJSON(json), fromSuiParsedData: (content) => HivePerEpochUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => HivePerEpochUpdated.fromSuiObjectData(content), fetch: async (client, id) => HivePerEpochUpdated.fetch(client, id), new: (fields) => { return new HivePerEpochUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HivePerEpochUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(HivePerEpochUpdated.reified()); }
    static get p() { return HivePerEpochUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HivePerEpochUpdated", {
            hive_per_epoch: bcs_1.bcs.u64(), start_epoch: bcs_1.bcs.u64(), honey_per_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HivePerEpochUpdated.reified().new({ hivePerEpoch: (0, reified_1.decodeFromFields)("u64", fields.hive_per_epoch), startEpoch: (0, reified_1.decodeFromFields)("u64", fields.start_epoch), honeyPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.honey_per_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isHivePerEpochUpdated(item.type)) {
            throw new Error("not a HivePerEpochUpdated type");
        }
        return HivePerEpochUpdated.reified().new({ hivePerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_per_epoch), startEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_epoch), honeyPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_per_epoch) });
    }
    static fromBcs(data) { return HivePerEpochUpdated.fromFields(HivePerEpochUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            hivePerEpoch: this.hivePerEpoch.toString(), startEpoch: this.startEpoch.toString(), honeyPerEpoch: this.honeyPerEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HivePerEpochUpdated.reified().new({ hivePerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.hivePerEpoch), startEpoch: (0, reified_1.decodeFromJSONField)("u64", field.startEpoch), honeyPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.honeyPerEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== HivePerEpochUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HivePerEpochUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHivePerEpochUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HivePerEpochUpdated object`);
    } return HivePerEpochUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHivePerEpochUpdated(data.bcs.type)) {
                throw new Error(`object at is not a HivePerEpochUpdated object`);
            }
            return HivePerEpochUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HivePerEpochUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HivePerEpochUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHivePerEpochUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HivePerEpochUpdated object`);
        }
        return HivePerEpochUpdated.fromSuiObjectData(res.data);
    }
}
exports.HivePerEpochUpdated = HivePerEpochUpdated;
HivePerEpochUpdated.$typeName = `${PKG_V1}::dragon_food::HivePerEpochUpdated`;
HivePerEpochUpdated.$numTypeParams = 0;
HivePerEpochUpdated.$isPhantom = [];
/* ============================== HoneyFruit =============================== */
function isHoneyFruit(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::dragon_food::HoneyFruit` + '<'); }
class HoneyFruit {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyFruit.$typeName;
        this.$isPhantom = HoneyFruit.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyFruit.$typeName, ...typeArgs);
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
    static reified(X) { return { typeName: HoneyFruit.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyFruit.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: HoneyFruit.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => HoneyFruit.fromFields(X, fields), fromFieldsWithTypes: (item) => HoneyFruit.fromFieldsWithTypes(X, item), fromBcs: (data) => HoneyFruit.fromBcs(X, data), bcs: HoneyFruit.bcs, fromJSONField: (field) => HoneyFruit.fromJSONField(X, field), fromJSON: (json) => HoneyFruit.fromJSON(X, json), fromSuiParsedData: (content) => HoneyFruit.fromSuiParsedData(X, content), fromSuiObjectData: (content) => HoneyFruit.fromSuiObjectData(X, content), fetch: async (client, id) => HoneyFruit.fetch(client, X, id), new: (fields) => { return new HoneyFruit([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyFruit.reified; }
    static phantom(X) { return (0, reified_1.phantom)(HoneyFruit.reified(X)); }
    static get p() { return HoneyFruit.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyFruit", {
            id: structs_7.UID.bcs, available_fruits: structs_5.Balance.bcs, fruits_per_epoch: bcs_1.bcs.u64(), start_epoch: bcs_1.bcs.u64(), end_epoch: bcs_1.bcs.u64(), claim_index: bcs_1.bcs.u256(), last_claim_epoch: bcs_1.bcs.u64(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return HoneyFruit.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_7.UID.reified(), fields.id), availableFruits: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(typeArg), fields.available_fruits), fruitsPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.fruits_per_epoch), startEpoch: (0, reified_1.decodeFromFields)("u64", fields.start_epoch), endEpoch: (0, reified_1.decodeFromFields)("u64", fields.end_epoch), claimIndex: (0, reified_1.decodeFromFields)("u256", fields.claim_index), lastClaimEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_claim_epoch), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isHoneyFruit(item.type)) {
            throw new Error("not a HoneyFruit type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return HoneyFruit.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.UID.reified(), item.fields.id), availableFruits: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(typeArg), item.fields.available_fruits), fruitsPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fruits_per_epoch), startEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.start_epoch), endEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.end_epoch), claimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.claim_index), lastClaimEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_claim_epoch), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(typeArg, data) { return HoneyFruit.fromFields(typeArg, HoneyFruit.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, availableFruits: this.availableFruits.toJSONField(), fruitsPerEpoch: this.fruitsPerEpoch.toString(), startEpoch: this.startEpoch.toString(), endEpoch: this.endEpoch.toString(), claimIndex: this.claimIndex.toString(), lastClaimEpoch: this.lastClaimEpoch.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return HoneyFruit.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_7.UID.reified(), field.id), availableFruits: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(typeArg), field.availableFruits), fruitsPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.fruitsPerEpoch), startEpoch: (0, reified_1.decodeFromJSONField)("u64", field.startEpoch), endEpoch: (0, reified_1.decodeFromJSONField)("u64", field.endEpoch), claimIndex: (0, reified_1.decodeFromJSONField)("u256", field.claimIndex), lastClaimEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastClaimEpoch), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== HoneyFruit.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(HoneyFruit.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return HoneyFruit.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyFruit(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyFruit object`);
    } return HoneyFruit.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyFruit(data.bcs.type)) {
                throw new Error(`object at is not a HoneyFruit object`);
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
            return HoneyFruit.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyFruit.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyFruit object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyFruit(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyFruit object`);
        }
        return HoneyFruit.fromSuiObjectData(typeArg, res.data);
    }
}
exports.HoneyFruit = HoneyFruit;
HoneyFruit.$typeName = `${PKG_V1}::dragon_food::HoneyFruit`;
HoneyFruit.$numTypeParams = 1;
HoneyFruit.$isPhantom = [true,];
/* ============================== HoneyFruitDestroyed =============================== */
function isHoneyFruitDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::HoneyFruitDestroyed`; }
class HoneyFruitDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyFruitDestroyed.$typeName;
        this.$isPhantom = HoneyFruitDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyFruitDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.honeyFruitType = fields.honeyFruitType;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: HoneyFruitDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyFruitDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: HoneyFruitDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HoneyFruitDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => HoneyFruitDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => HoneyFruitDestroyed.fromBcs(data), bcs: HoneyFruitDestroyed.bcs, fromJSONField: (field) => HoneyFruitDestroyed.fromJSONField(field), fromJSON: (json) => HoneyFruitDestroyed.fromJSON(json), fromSuiParsedData: (content) => HoneyFruitDestroyed.fromSuiParsedData(content), fromSuiObjectData: (content) => HoneyFruitDestroyed.fromSuiObjectData(content), fetch: async (client, id) => HoneyFruitDestroyed.fetch(client, id), new: (fields) => { return new HoneyFruitDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyFruitDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(HoneyFruitDestroyed.reified()); }
    static get p() { return HoneyFruitDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyFruitDestroyed", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), honey_fruit_type: structs_1.String.bcs, cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HoneyFruitDestroyed.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), honeyFruitType: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.honey_fruit_type), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isHoneyFruitDestroyed(item.type)) {
            throw new Error("not a HoneyFruitDestroyed type");
        }
        return HoneyFruitDestroyed.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), honeyFruitType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.honey_fruit_type), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return HoneyFruitDestroyed.fromFields(HoneyFruitDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, honeyFruitType: this.honeyFruitType, curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HoneyFruitDestroyed.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), honeyFruitType: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.honeyFruitType), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== HoneyFruitDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HoneyFruitDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyFruitDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyFruitDestroyed object`);
    } return HoneyFruitDestroyed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyFruitDestroyed(data.bcs.type)) {
                throw new Error(`object at is not a HoneyFruitDestroyed object`);
            }
            return HoneyFruitDestroyed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyFruitDestroyed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyFruitDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyFruitDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyFruitDestroyed object`);
        }
        return HoneyFruitDestroyed.fromSuiObjectData(res.data);
    }
}
exports.HoneyFruitDestroyed = HoneyFruitDestroyed;
HoneyFruitDestroyed.$typeName = `${PKG_V1}::dragon_food::HoneyFruitDestroyed`;
HoneyFruitDestroyed.$numTypeParams = 0;
HoneyFruitDestroyed.$isPhantom = [];
/* ============================== HoneyFruitKraftedForPoolHive =============================== */
function isHoneyFruitKraftedForPoolHive(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::HoneyFruitKraftedForPoolHive`; }
class HoneyFruitKraftedForPoolHive {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyFruitKraftedForPoolHive.$typeName;
        this.$isPhantom = HoneyFruitKraftedForPoolHive.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyFruitKraftedForPoolHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.proposalId = fields.proposalId;
        ;
        this.honeyFruitIdentifier = fields.honeyFruitIdentifier;
    }
    static reified() { return { typeName: HoneyFruitKraftedForPoolHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyFruitKraftedForPoolHive.$typeName, ...[]), typeArgs: [], isPhantom: HoneyFruitKraftedForPoolHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HoneyFruitKraftedForPoolHive.fromFields(fields), fromFieldsWithTypes: (item) => HoneyFruitKraftedForPoolHive.fromFieldsWithTypes(item), fromBcs: (data) => HoneyFruitKraftedForPoolHive.fromBcs(data), bcs: HoneyFruitKraftedForPoolHive.bcs, fromJSONField: (field) => HoneyFruitKraftedForPoolHive.fromJSONField(field), fromJSON: (json) => HoneyFruitKraftedForPoolHive.fromJSON(json), fromSuiParsedData: (content) => HoneyFruitKraftedForPoolHive.fromSuiParsedData(content), fromSuiObjectData: (content) => HoneyFruitKraftedForPoolHive.fromSuiObjectData(content), fetch: async (client, id) => HoneyFruitKraftedForPoolHive.fetch(client, id), new: (fields) => { return new HoneyFruitKraftedForPoolHive([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyFruitKraftedForPoolHive.reified(); }
    static phantom() { return (0, reified_1.phantom)(HoneyFruitKraftedForPoolHive.reified()); }
    static get p() { return HoneyFruitKraftedForPoolHive.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyFruitKraftedForPoolHive", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), proposal_id: bcs_1.bcs.u64(), honey_fruit_identifier: structs_4.TypeName.bcs
        });
    }
    ;
    static fromFields(fields) { return HoneyFruitKraftedForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), honeyFruitIdentifier: (0, reified_1.decodeFromFields)(structs_4.TypeName.reified(), fields.honey_fruit_identifier) }); }
    static fromFieldsWithTypes(item) {
        if (!isHoneyFruitKraftedForPoolHive(item.type)) {
            throw new Error("not a HoneyFruitKraftedForPoolHive type");
        }
        return HoneyFruitKraftedForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), honeyFruitIdentifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.TypeName.reified(), item.fields.honey_fruit_identifier) });
    }
    static fromBcs(data) { return HoneyFruitKraftedForPoolHive.fromFields(HoneyFruitKraftedForPoolHive.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, proposalId: this.proposalId.toString(), honeyFruitIdentifier: this.honeyFruitIdentifier.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HoneyFruitKraftedForPoolHive.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), honeyFruitIdentifier: (0, reified_1.decodeFromJSONField)(structs_4.TypeName.reified(), field.honeyFruitIdentifier) }); }
    static fromJSON(json) {
        if (json.$typeName !== HoneyFruitKraftedForPoolHive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HoneyFruitKraftedForPoolHive.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyFruitKraftedForPoolHive(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyFruitKraftedForPoolHive object`);
    } return HoneyFruitKraftedForPoolHive.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyFruitKraftedForPoolHive(data.bcs.type)) {
                throw new Error(`object at is not a HoneyFruitKraftedForPoolHive object`);
            }
            return HoneyFruitKraftedForPoolHive.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyFruitKraftedForPoolHive.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyFruitKraftedForPoolHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyFruitKraftedForPoolHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyFruitKraftedForPoolHive object`);
        }
        return HoneyFruitKraftedForPoolHive.fromSuiObjectData(res.data);
    }
}
exports.HoneyFruitKraftedForPoolHive = HoneyFruitKraftedForPoolHive;
HoneyFruitKraftedForPoolHive.$typeName = `${PKG_V1}::dragon_food::HoneyFruitKraftedForPoolHive`;
HoneyFruitKraftedForPoolHive.$numTypeParams = 0;
HoneyFruitKraftedForPoolHive.$isPhantom = [];
/* ============================== LendingPoolCapability =============================== */
function isLendingPoolCapability(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::LendingPoolCapability`; }
class LendingPoolCapability {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LendingPoolCapability.$typeName;
        this.$isPhantom = LendingPoolCapability.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LendingPoolCapability.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: LendingPoolCapability.$typeName, fullTypeName: (0, util_1.composeSuiType)(LendingPoolCapability.$typeName, ...[]), typeArgs: [], isPhantom: LendingPoolCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LendingPoolCapability.fromFields(fields), fromFieldsWithTypes: (item) => LendingPoolCapability.fromFieldsWithTypes(item), fromBcs: (data) => LendingPoolCapability.fromBcs(data), bcs: LendingPoolCapability.bcs, fromJSONField: (field) => LendingPoolCapability.fromJSONField(field), fromJSON: (json) => LendingPoolCapability.fromJSON(json), fromSuiParsedData: (content) => LendingPoolCapability.fromSuiParsedData(content), fromSuiObjectData: (content) => LendingPoolCapability.fromSuiObjectData(content), fetch: async (client, id) => LendingPoolCapability.fetch(client, id), new: (fields) => { return new LendingPoolCapability([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LendingPoolCapability.reified(); }
    static phantom() { return (0, reified_1.phantom)(LendingPoolCapability.reified()); }
    static get p() { return LendingPoolCapability.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LendingPoolCapability", {
            id: structs_7.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return LendingPoolCapability.reified().new({ id: (0, reified_1.decodeFromFields)(structs_7.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isLendingPoolCapability(item.type)) {
            throw new Error("not a LendingPoolCapability type");
        }
        return LendingPoolCapability.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return LendingPoolCapability.fromFields(LendingPoolCapability.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LendingPoolCapability.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_7.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== LendingPoolCapability.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LendingPoolCapability.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLendingPoolCapability(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LendingPoolCapability object`);
    } return LendingPoolCapability.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLendingPoolCapability(data.bcs.type)) {
                throw new Error(`object at is not a LendingPoolCapability object`);
            }
            return LendingPoolCapability.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LendingPoolCapability.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LendingPoolCapability object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLendingPoolCapability(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LendingPoolCapability object`);
        }
        return LendingPoolCapability.fromSuiObjectData(res.data);
    }
}
exports.LendingPoolCapability = LendingPoolCapability;
LendingPoolCapability.$typeName = `${PKG_V1}::dragon_food::LendingPoolCapability`;
LendingPoolCapability.$numTypeParams = 0;
LendingPoolCapability.$isPhantom = [];
/* ============================== LiquidatedLP =============================== */
function isLiquidatedLP(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::LiquidatedLP`; }
class LiquidatedLP {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LiquidatedLP.$typeName;
        this.$isPhantom = LiquidatedLP.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LiquidatedLP.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.amtLiquidated = fields.amtLiquidated;
    }
    static reified() { return { typeName: LiquidatedLP.$typeName, fullTypeName: (0, util_1.composeSuiType)(LiquidatedLP.$typeName, ...[]), typeArgs: [], isPhantom: LiquidatedLP.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LiquidatedLP.fromFields(fields), fromFieldsWithTypes: (item) => LiquidatedLP.fromFieldsWithTypes(item), fromBcs: (data) => LiquidatedLP.fromBcs(data), bcs: LiquidatedLP.bcs, fromJSONField: (field) => LiquidatedLP.fromJSONField(field), fromJSON: (json) => LiquidatedLP.fromJSON(json), fromSuiParsedData: (content) => LiquidatedLP.fromSuiParsedData(content), fromSuiObjectData: (content) => LiquidatedLP.fromSuiObjectData(content), fetch: async (client, id) => LiquidatedLP.fetch(client, id), new: (fields) => { return new LiquidatedLP([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LiquidatedLP.reified(); }
    static phantom() { return (0, reified_1.phantom)(LiquidatedLP.reified()); }
    static get p() { return LiquidatedLP.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LiquidatedLP", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), amt_liquidated: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return LiquidatedLP.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), amtLiquidated: (0, reified_1.decodeFromFields)("u64", fields.amt_liquidated) }); }
    static fromFieldsWithTypes(item) {
        if (!isLiquidatedLP(item.type)) {
            throw new Error("not a LiquidatedLP type");
        }
        return LiquidatedLP.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), amtLiquidated: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amt_liquidated) });
    }
    static fromBcs(data) { return LiquidatedLP.fromFields(LiquidatedLP.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr, amtLiquidated: this.amtLiquidated.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LiquidatedLP.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), amtLiquidated: (0, reified_1.decodeFromJSONField)("u64", field.amtLiquidated) }); }
    static fromJSON(json) {
        if (json.$typeName !== LiquidatedLP.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LiquidatedLP.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLiquidatedLP(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LiquidatedLP object`);
    } return LiquidatedLP.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidatedLP(data.bcs.type)) {
                throw new Error(`object at is not a LiquidatedLP object`);
            }
            return LiquidatedLP.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LiquidatedLP.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LiquidatedLP object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLiquidatedLP(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidatedLP object`);
        }
        return LiquidatedLP.fromSuiObjectData(res.data);
    }
}
exports.LiquidatedLP = LiquidatedLP;
LiquidatedLP.$typeName = `${PKG_V1}::dragon_food::LiquidatedLP`;
LiquidatedLP.$numTypeParams = 0;
LiquidatedLP.$isPhantom = [];
/* ============================== LockedDragonBee =============================== */
function isLockedDragonBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::LockedDragonBee`; }
class LockedDragonBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LockedDragonBee.$typeName;
        this.$isPhantom = LockedDragonBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LockedDragonBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.lockedAtCycle = fields.lockedAtCycle;
        ;
        this.mysticalBee = fields.mysticalBee;
        ;
        this.incrementCycle = fields.incrementCycle;
        ;
        this.increaseInEnergy = fields.increaseInEnergy;
        ;
        this.increaseInHealth = fields.increaseInHealth;
        ;
        this.hiveEnergy = fields.hiveEnergy;
        ;
        this.tempHiveEnergy = fields.tempHiveEnergy;
        ;
        this.honeyHealth = fields.honeyHealth;
        ;
        this.tempHoneyHealth = fields.tempHoneyHealth;
        ;
        this.daoVoteCycle = fields.daoVoteCycle;
        ;
        this.bribesClaimedTill = fields.bribesClaimedTill;
        ;
        this.feesClaimedTill = fields.feesClaimedTill;
        ;
        this.hiveFeeClaimIndexes = fields.hiveFeeClaimIndexes;
        ;
        this.honeyFeeClaimIndexes = fields.honeyFeeClaimIndexes;
        ;
        this.withdrawableAtCycle = fields.withdrawableAtCycle;
    }
    static reified() { return { typeName: LockedDragonBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(LockedDragonBee.$typeName, ...[]), typeArgs: [], isPhantom: LockedDragonBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LockedDragonBee.fromFields(fields), fromFieldsWithTypes: (item) => LockedDragonBee.fromFieldsWithTypes(item), fromBcs: (data) => LockedDragonBee.fromBcs(data), bcs: LockedDragonBee.bcs, fromJSONField: (field) => LockedDragonBee.fromJSONField(field), fromJSON: (json) => LockedDragonBee.fromJSON(json), fromSuiParsedData: (content) => LockedDragonBee.fromSuiParsedData(content), fromSuiObjectData: (content) => LockedDragonBee.fromSuiObjectData(content), fetch: async (client, id) => LockedDragonBee.fetch(client, id), new: (fields) => { return new LockedDragonBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LockedDragonBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(LockedDragonBee.reified()); }
    static get p() { return LockedDragonBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LockedDragonBee", {
            version: bcs_1.bcs.u64(), locked_at_cycle: bcs_1.bcs.u64(), mystical_bee: structs_8.MysticalBee.bcs, increment_cycle: bcs_1.bcs.u64(), increase_in_energy: bcs_1.bcs.u128(), increase_in_health: bcs_1.bcs.u128(), hive_energy: bcs_1.bcs.u128(), temp_hive_energy: bcs_1.bcs.u128(), honey_health: bcs_1.bcs.u128(), temp_honey_health: bcs_1.bcs.u128(), dao_vote_cycle: bcs_1.bcs.u64(), bribes_claimed_till: bcs_1.bcs.u64(), fees_claimed_till: bcs_1.bcs.u64(), hive_fee_claim_indexes: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), honey_fee_claim_indexes: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), withdrawable_at_cycle: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return LockedDragonBee.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), lockedAtCycle: (0, reified_1.decodeFromFields)("u64", fields.locked_at_cycle), mysticalBee: (0, reified_1.decodeFromFields)(structs_8.MysticalBee.reified(), fields.mystical_bee), incrementCycle: (0, reified_1.decodeFromFields)("u64", fields.increment_cycle), increaseInEnergy: (0, reified_1.decodeFromFields)("u128", fields.increase_in_energy), increaseInHealth: (0, reified_1.decodeFromFields)("u128", fields.increase_in_health), hiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.hive_energy), tempHiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.temp_hive_energy), honeyHealth: (0, reified_1.decodeFromFields)("u128", fields.honey_health), tempHoneyHealth: (0, reified_1.decodeFromFields)("u128", fields.temp_honey_health), daoVoteCycle: (0, reified_1.decodeFromFields)("u64", fields.dao_vote_cycle), bribesClaimedTill: (0, reified_1.decodeFromFields)("u64", fields.bribes_claimed_till), feesClaimedTill: (0, reified_1.decodeFromFields)("u64", fields.fees_claimed_till), hiveFeeClaimIndexes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), fields.hive_fee_claim_indexes), honeyFeeClaimIndexes: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), fields.honey_fee_claim_indexes), withdrawableAtCycle: (0, reified_1.decodeFromFields)("u64", fields.withdrawable_at_cycle) }); }
    static fromFieldsWithTypes(item) {
        if (!isLockedDragonBee(item.type)) {
            throw new Error("not a LockedDragonBee type");
        }
        return LockedDragonBee.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), lockedAtCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.locked_at_cycle), mysticalBee: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.MysticalBee.reified(), item.fields.mystical_bee), incrementCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.increment_cycle), increaseInEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.increase_in_energy), increaseInHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.increase_in_health), hiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.hive_energy), tempHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.temp_hive_energy), honeyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.honey_health), tempHoneyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.temp_honey_health), daoVoteCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dao_vote_cycle), bribesClaimedTill: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bribes_claimed_till), feesClaimedTill: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fees_claimed_till), hiveFeeClaimIndexes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), item.fields.hive_fee_claim_indexes), honeyFeeClaimIndexes: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), item.fields.honey_fee_claim_indexes), withdrawableAtCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.withdrawable_at_cycle) });
    }
    static fromBcs(data) { return LockedDragonBee.fromFields(LockedDragonBee.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), lockedAtCycle: this.lockedAtCycle.toString(), mysticalBee: this.mysticalBee.toJSONField(), incrementCycle: this.incrementCycle.toString(), increaseInEnergy: this.increaseInEnergy.toString(), increaseInHealth: this.increaseInHealth.toString(), hiveEnergy: this.hiveEnergy.toString(), tempHiveEnergy: this.tempHiveEnergy.toString(), honeyHealth: this.honeyHealth.toString(), tempHoneyHealth: this.tempHoneyHealth.toString(), daoVoteCycle: this.daoVoteCycle.toString(), bribesClaimedTill: this.bribesClaimedTill.toString(), feesClaimedTill: this.feesClaimedTill.toString(), hiveFeeClaimIndexes: this.hiveFeeClaimIndexes.toJSONField(), honeyFeeClaimIndexes: this.honeyFeeClaimIndexes.toJSONField(), withdrawableAtCycle: this.withdrawableAtCycle.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LockedDragonBee.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), lockedAtCycle: (0, reified_1.decodeFromJSONField)("u64", field.lockedAtCycle), mysticalBee: (0, reified_1.decodeFromJSONField)(structs_8.MysticalBee.reified(), field.mysticalBee), incrementCycle: (0, reified_1.decodeFromJSONField)("u64", field.incrementCycle), increaseInEnergy: (0, reified_1.decodeFromJSONField)("u128", field.increaseInEnergy), increaseInHealth: (0, reified_1.decodeFromJSONField)("u128", field.increaseInHealth), hiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.hiveEnergy), tempHiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.tempHiveEnergy), honeyHealth: (0, reified_1.decodeFromJSONField)("u128", field.honeyHealth), tempHoneyHealth: (0, reified_1.decodeFromJSONField)("u128", field.tempHoneyHealth), daoVoteCycle: (0, reified_1.decodeFromJSONField)("u64", field.daoVoteCycle), bribesClaimedTill: (0, reified_1.decodeFromJSONField)("u64", field.bribesClaimedTill), feesClaimedTill: (0, reified_1.decodeFromJSONField)("u64", field.feesClaimedTill), hiveFeeClaimIndexes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), field.hiveFeeClaimIndexes), honeyFeeClaimIndexes: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u256")), field.honeyFeeClaimIndexes), withdrawableAtCycle: (0, reified_1.decodeFromJSONField)("u64", field.withdrawableAtCycle) }); }
    static fromJSON(json) {
        if (json.$typeName !== LockedDragonBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LockedDragonBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLockedDragonBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LockedDragonBee object`);
    } return LockedDragonBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLockedDragonBee(data.bcs.type)) {
                throw new Error(`object at is not a LockedDragonBee object`);
            }
            return LockedDragonBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LockedDragonBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LockedDragonBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLockedDragonBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LockedDragonBee object`);
        }
        return LockedDragonBee.fromSuiObjectData(res.data);
    }
}
exports.LockedDragonBee = LockedDragonBee;
LockedDragonBee.$typeName = `${PKG_V1}::dragon_food::LockedDragonBee`;
LockedDragonBee.$numTypeParams = 0;
LockedDragonBee.$isPhantom = [];
/* ============================== LockedLP =============================== */
function isLockedLP(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::LockedLP`; }
class LockedLP {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LockedLP.$typeName;
        this.$isPhantom = LockedLP.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LockedLP.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
    }
    static reified() { return { typeName: LockedLP.$typeName, fullTypeName: (0, util_1.composeSuiType)(LockedLP.$typeName, ...[]), typeArgs: [], isPhantom: LockedLP.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LockedLP.fromFields(fields), fromFieldsWithTypes: (item) => LockedLP.fromFieldsWithTypes(item), fromBcs: (data) => LockedLP.fromBcs(data), bcs: LockedLP.bcs, fromJSONField: (field) => LockedLP.fromJSONField(field), fromJSON: (json) => LockedLP.fromJSON(json), fromSuiParsedData: (content) => LockedLP.fromSuiParsedData(content), fromSuiObjectData: (content) => LockedLP.fromSuiObjectData(content), fetch: async (client, id) => LockedLP.fetch(client, id), new: (fields) => { return new LockedLP([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LockedLP.reified(); }
    static phantom() { return (0, reified_1.phantom)(LockedLP.reified()); }
    static get p() { return LockedLP.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LockedLP", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return LockedLP.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr) }); }
    static fromFieldsWithTypes(item) {
        if (!isLockedLP(item.type)) {
            throw new Error("not a LockedLP type");
        }
        return LockedLP.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr) });
    }
    static fromBcs(data) { return LockedLP.fromFields(LockedLP.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LockedLP.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr) }); }
    static fromJSON(json) {
        if (json.$typeName !== LockedLP.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LockedLP.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLockedLP(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LockedLP object`);
    } return LockedLP.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLockedLP(data.bcs.type)) {
                throw new Error(`object at is not a LockedLP object`);
            }
            return LockedLP.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LockedLP.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LockedLP object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLockedLP(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LockedLP object`);
        }
        return LockedLP.fromSuiObjectData(res.data);
    }
}
exports.LockedLP = LockedLP;
LockedLP.$typeName = `${PKG_V1}::dragon_food::LockedLP`;
LockedLP.$numTypeParams = 0;
LockedLP.$isPhantom = [];
/* ============================== MoreFruitsAdded =============================== */
function isMoreFruitsAdded(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::MoreFruitsAdded`; }
class MoreFruitsAdded {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MoreFruitsAdded.$typeName;
        this.$isPhantom = MoreFruitsAdded.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MoreFruitsAdded.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.honeyFruitType = fields.honeyFruitType;
        ;
        this.fruitsAdded = fields.fruitsAdded;
        ;
        this.additionalPerEpoch = fields.additionalPerEpoch;
        ;
        this.fruitsPerEpoch = fields.fruitsPerEpoch;
        ;
        this.availableFruits = fields.availableFruits;
    }
    static reified() { return { typeName: MoreFruitsAdded.$typeName, fullTypeName: (0, util_1.composeSuiType)(MoreFruitsAdded.$typeName, ...[]), typeArgs: [], isPhantom: MoreFruitsAdded.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MoreFruitsAdded.fromFields(fields), fromFieldsWithTypes: (item) => MoreFruitsAdded.fromFieldsWithTypes(item), fromBcs: (data) => MoreFruitsAdded.fromBcs(data), bcs: MoreFruitsAdded.bcs, fromJSONField: (field) => MoreFruitsAdded.fromJSONField(field), fromJSON: (json) => MoreFruitsAdded.fromJSON(json), fromSuiParsedData: (content) => MoreFruitsAdded.fromSuiParsedData(content), fromSuiObjectData: (content) => MoreFruitsAdded.fromSuiObjectData(content), fetch: async (client, id) => MoreFruitsAdded.fetch(client, id), new: (fields) => { return new MoreFruitsAdded([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MoreFruitsAdded.reified(); }
    static phantom() { return (0, reified_1.phantom)(MoreFruitsAdded.reified()); }
    static get p() { return MoreFruitsAdded.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MoreFruitsAdded", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), honey_fruit_type: structs_1.String.bcs, fruits_added: bcs_1.bcs.u64(), additional_per_epoch: bcs_1.bcs.u64(), fruits_per_epoch: bcs_1.bcs.u64(), available_fruits: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MoreFruitsAdded.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), honeyFruitType: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.honey_fruit_type), fruitsAdded: (0, reified_1.decodeFromFields)("u64", fields.fruits_added), additionalPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.additional_per_epoch), fruitsPerEpoch: (0, reified_1.decodeFromFields)("u64", fields.fruits_per_epoch), availableFruits: (0, reified_1.decodeFromFields)("u64", fields.available_fruits) }); }
    static fromFieldsWithTypes(item) {
        if (!isMoreFruitsAdded(item.type)) {
            throw new Error("not a MoreFruitsAdded type");
        }
        return MoreFruitsAdded.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), honeyFruitType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.honey_fruit_type), fruitsAdded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fruits_added), additionalPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.additional_per_epoch), fruitsPerEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fruits_per_epoch), availableFruits: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.available_fruits) });
    }
    static fromBcs(data) { return MoreFruitsAdded.fromFields(MoreFruitsAdded.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, honeyFruitType: this.honeyFruitType, fruitsAdded: this.fruitsAdded.toString(), additionalPerEpoch: this.additionalPerEpoch.toString(), fruitsPerEpoch: this.fruitsPerEpoch.toString(), availableFruits: this.availableFruits.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MoreFruitsAdded.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), honeyFruitType: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.honeyFruitType), fruitsAdded: (0, reified_1.decodeFromJSONField)("u64", field.fruitsAdded), additionalPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.additionalPerEpoch), fruitsPerEpoch: (0, reified_1.decodeFromJSONField)("u64", field.fruitsPerEpoch), availableFruits: (0, reified_1.decodeFromJSONField)("u64", field.availableFruits) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMoreFruitsAdded(data.bcs.type)) {
                throw new Error(`object at is not a MoreFruitsAdded object`);
            }
            return MoreFruitsAdded.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MoreFruitsAdded.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MoreFruitsAdded object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMoreFruitsAdded(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MoreFruitsAdded object`);
        }
        return MoreFruitsAdded.fromSuiObjectData(res.data);
    }
}
exports.MoreFruitsAdded = MoreFruitsAdded;
MoreFruitsAdded.$typeName = `${PKG_V1}::dragon_food::MoreFruitsAdded`;
MoreFruitsAdded.$numTypeParams = 0;
MoreFruitsAdded.$isPhantom = [];
/* ============================== NewProposalKrafted =============================== */
function isNewProposalKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::NewProposalKrafted`; }
class NewProposalKrafted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewProposalKrafted.$typeName;
        this.$isPhantom = NewProposalKrafted.$isPhantom;
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
    static reified() { return { typeName: NewProposalKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewProposalKrafted.$typeName, ...[]), typeArgs: [], isPhantom: NewProposalKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewProposalKrafted.fromFields(fields), fromFieldsWithTypes: (item) => NewProposalKrafted.fromFieldsWithTypes(item), fromBcs: (data) => NewProposalKrafted.fromBcs(data), bcs: NewProposalKrafted.bcs, fromJSONField: (field) => NewProposalKrafted.fromJSONField(field), fromJSON: (json) => NewProposalKrafted.fromJSON(json), fromSuiParsedData: (content) => NewProposalKrafted.fromSuiParsedData(content), fromSuiObjectData: (content) => NewProposalKrafted.fromSuiObjectData(content), fetch: async (client, id) => NewProposalKrafted.fetch(client, id), new: (fields) => { return new NewProposalKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewProposalKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewProposalKrafted.reified()); }
    static get p() { return NewProposalKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewProposalKrafted", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), proposal_id: bcs_1.bcs.u64(), proposer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), title: structs_3.String.bcs, description: structs_3.String.bcs, link: structs_3.String.bcs, proposal_type: bcs_1.bcs.u64(), voting_start_epoch: bcs_1.bcs.u64(), voting_end_epoch: bcs_1.bcs.u64(), execution_start_epoch: bcs_1.bcs.u64(), execution_end_epoch: bcs_1.bcs.u64(), new_params: structs_2.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64())), new_weights: structs_2.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64())), new_fee_info: structs_2.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64())), fruit_life: structs_2.Option.bcs(FruitLife.bcs)
        });
    }
    ;
    static fromFields(fields) { return NewProposalKrafted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), proposer: (0, reified_1.decodeFromFields)("address", fields.proposer), title: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.title), description: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.description), link: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.link), proposalType: (0, reified_1.decodeFromFields)("u64", fields.proposal_type), votingStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.voting_start_epoch), votingEndEpoch: (0, reified_1.decodeFromFields)("u64", fields.voting_end_epoch), executionStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.execution_start_epoch), executionEndEpoch: (0, reified_1.decodeFromFields)("u64", fields.execution_end_epoch), newParams: (0, reified_1.decodeFromFields)(structs_2.Option.reified(reified.vector("u64")), fields.new_params), newWeights: (0, reified_1.decodeFromFields)(structs_2.Option.reified(reified.vector("u64")), fields.new_weights), newFeeInfo: (0, reified_1.decodeFromFields)(structs_2.Option.reified(reified.vector("u64")), fields.new_fee_info), fruitLife: (0, reified_1.decodeFromFields)(structs_2.Option.reified(FruitLife.reified()), fields.fruit_life) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewProposalKrafted(item.type)) {
            throw new Error("not a NewProposalKrafted type");
        }
        return NewProposalKrafted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), proposer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.proposer), title: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.title), description: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.description), link: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.link), proposalType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_type), votingStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_start_epoch), votingEndEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_end_epoch), executionStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_start_epoch), executionEndEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_end_epoch), newParams: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(reified.vector("u64")), item.fields.new_params), newWeights: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(reified.vector("u64")), item.fields.new_weights), newFeeInfo: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(reified.vector("u64")), item.fields.new_fee_info), fruitLife: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(FruitLife.reified()), item.fields.fruit_life) });
    }
    static fromBcs(data) { return NewProposalKrafted.fromFields(NewProposalKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, proposalId: this.proposalId.toString(), proposer: this.proposer, title: this.title, description: this.description, link: this.link, proposalType: this.proposalType.toString(), votingStartEpoch: this.votingStartEpoch.toString(), votingEndEpoch: this.votingEndEpoch.toString(), executionStartEpoch: this.executionStartEpoch.toString(), executionEndEpoch: this.executionEndEpoch.toString(), newParams: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<vector<u64>>`, this.newParams), newWeights: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<vector<u64>>`, this.newWeights), newFeeInfo: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<vector<u64>>`, this.newFeeInfo), fruitLife: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${FruitLife.$typeName}>`, this.fruitLife),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewProposalKrafted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), proposer: (0, reified_1.decodeFromJSONField)("address", field.proposer), title: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.title), description: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.description), link: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.link), proposalType: (0, reified_1.decodeFromJSONField)("u64", field.proposalType), votingStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.votingStartEpoch), votingEndEpoch: (0, reified_1.decodeFromJSONField)("u64", field.votingEndEpoch), executionStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.executionStartEpoch), executionEndEpoch: (0, reified_1.decodeFromJSONField)("u64", field.executionEndEpoch), newParams: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(reified.vector("u64")), field.newParams), newWeights: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(reified.vector("u64")), field.newWeights), newFeeInfo: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(reified.vector("u64")), field.newFeeInfo), fruitLife: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(FruitLife.reified()), field.fruitLife) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewProposalKrafted(data.bcs.type)) {
                throw new Error(`object at is not a NewProposalKrafted object`);
            }
            return NewProposalKrafted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewProposalKrafted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewProposalKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewProposalKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewProposalKrafted object`);
        }
        return NewProposalKrafted.fromSuiObjectData(res.data);
    }
}
exports.NewProposalKrafted = NewProposalKrafted;
NewProposalKrafted.$typeName = `${PKG_V1}::dragon_food::NewProposalKrafted`;
NewProposalKrafted.$numTypeParams = 0;
NewProposalKrafted.$isPhantom = [];
/* ============================== PoolHive =============================== */
function isPoolHive(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::dragon_food::PoolHive` + '<'); }
class PoolHive {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PoolHive.$typeName;
        this.$isPhantom = PoolHive.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolHive.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.poolAddr = fields.poolAddr;
        ;
        this.totalStaked = fields.totalStaked;
        ;
        this.stakedForHoney = fields.stakedForHoney;
        ;
        this.honeyAvailable = fields.honeyAvailable;
        ;
        this.hiveAvailable = fields.hiveAvailable;
        ;
        this.globalHiveClaimIndex = fields.globalHiveClaimIndex;
        ;
        this.globalHoneyClaimIndex = fields.globalHoneyClaimIndex;
        ;
        this.lastClaimEpoch = fields.lastClaimEpoch;
        ;
        this.lastClaimHoneyEpoch = fields.lastClaimHoneyEpoch;
        ;
        this.ongoingCycle = fields.ongoingCycle;
        ;
        this.curCycleStartEpoch = fields.curCycleStartEpoch;
        ;
        this.bribes = fields.bribes;
        ;
        this.addedHiveEnergy = fields.addedHiveEnergy;
        ;
        this.activeHiveEnergy = fields.activeHiveEnergy;
        ;
        this.removedHiveEnergy = fields.removedHiveEnergy;
        ;
        this.addedHoneyHealth = fields.addedHoneyHealth;
        ;
        this.activeHoneyHealth = fields.activeHoneyHealth;
        ;
        this.removedHoneyHealth = fields.removedHoneyHealth;
        ;
        this.restingDragons = fields.restingDragons;
        ;
        this.additionalRewards = fields.additionalRewards;
        ;
        this.proposalList = fields.proposalList;
        ;
        this.nextProposalId = fields.nextProposalId;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified(H) { return { typeName: PoolHive.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolHive.$typeName, ...[(0, reified_1.extractType)(H)]), typeArgs: [(0, reified_1.extractType)(H)], isPhantom: PoolHive.$isPhantom, reifiedTypeArgs: [H], fromFields: (fields) => PoolHive.fromFields(H, fields), fromFieldsWithTypes: (item) => PoolHive.fromFieldsWithTypes(H, item), fromBcs: (data) => PoolHive.fromBcs(H, data), bcs: PoolHive.bcs, fromJSONField: (field) => PoolHive.fromJSONField(H, field), fromJSON: (json) => PoolHive.fromJSON(H, json), fromSuiParsedData: (content) => PoolHive.fromSuiParsedData(H, content), fromSuiObjectData: (content) => PoolHive.fromSuiObjectData(H, content), fetch: async (client, id) => PoolHive.fetch(client, H, id), new: (fields) => { return new PoolHive([(0, reified_1.extractType)(H)], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolHive.reified; }
    static phantom(H) { return (0, reified_1.phantom)(PoolHive.reified(H)); }
    static get p() { return PoolHive.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("PoolHive", {
            id: structs_7.UID.bcs, pool_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), total_staked: bcs_1.bcs.u64(), staked_for_honey: bcs_1.bcs.u64(), honey_available: structs_5.Balance.bcs, hive_available: structs_5.Balance.bcs, global_hive_claim_index: bcs_1.bcs.u256(), global_honey_claim_index: bcs_1.bcs.u256(), last_claim_epoch: bcs_1.bcs.u64(), last_claim_honey_epoch: bcs_1.bcs.u64(), ongoing_cycle: bcs_1.bcs.u64(), cur_cycle_start_epoch: bcs_1.bcs.u64(), bribes: Bribes.bcs, added_hive_energy: bcs_1.bcs.u128(), active_hive_energy: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), removed_hive_energy: bcs_1.bcs.u128(), added_honey_health: bcs_1.bcs.u128(), active_honey_health: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), removed_honey_health: bcs_1.bcs.u128(), resting_dragons: structs_6.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), additional_rewards: bcs_1.bcs.vector(structs_1.String.bcs), proposal_list: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), next_proposal_id: bcs_1.bcs.u64(), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return PoolHive.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_7.UID.reified(), fields.id), poolAddr: (0, reified_1.decodeFromFields)("address", fields.pool_addr), totalStaked: (0, reified_1.decodeFromFields)("u64", fields.total_staked), stakedForHoney: (0, reified_1.decodeFromFields)("u64", fields.staked_for_honey), honeyAvailable: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(reified.phantom(structs_10.HONEY.reified())), fields.honey_available), hiveAvailable: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.hive_available), globalHiveClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.global_hive_claim_index), globalHoneyClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.global_honey_claim_index), lastClaimEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_claim_epoch), lastClaimHoneyEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_claim_honey_epoch), ongoingCycle: (0, reified_1.decodeFromFields)("u64", fields.ongoing_cycle), curCycleStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_cycle_start_epoch), bribes: (0, reified_1.decodeFromFields)(Bribes.reified(), fields.bribes), addedHiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.added_hive_energy), activeHiveEnergy: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), fields.active_hive_energy), removedHiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.removed_hive_energy), addedHoneyHealth: (0, reified_1.decodeFromFields)("u128", fields.added_honey_health), activeHoneyHealth: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), fields.active_honey_health), removedHoneyHealth: (0, reified_1.decodeFromFields)("u128", fields.removed_honey_health), restingDragons: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("address", reified.phantom(DragonDen.reified(typeArg))), fields.resting_dragons), additionalRewards: (0, reified_1.decodeFromFields)(reified.vector(structs_1.String.reified()), fields.additional_rewards), proposalList: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom(Proposal.reified())), fields.proposal_list), nextProposalId: (0, reified_1.decodeFromFields)("u64", fields.next_proposal_id), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isPoolHive(item.type)) {
            throw new Error("not a PoolHive type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return PoolHive.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.UID.reified(), item.fields.id), poolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_addr), totalStaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_staked), stakedForHoney: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.staked_for_honey), honeyAvailable: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(reified.phantom(structs_10.HONEY.reified())), item.fields.honey_available), hiveAvailable: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.hive_available), globalHiveClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.global_hive_claim_index), globalHoneyClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.global_honey_claim_index), lastClaimEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_claim_epoch), lastClaimHoneyEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_claim_honey_epoch), ongoingCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ongoing_cycle), curCycleStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_cycle_start_epoch), bribes: (0, reified_1.decodeFromFieldsWithTypes)(Bribes.reified(), item.fields.bribes), addedHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.added_hive_energy), activeHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), item.fields.active_hive_energy), removedHiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.removed_hive_energy), addedHoneyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.added_honey_health), activeHoneyHealth: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), item.fields.active_honey_health), removedHoneyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.removed_honey_health), restingDragons: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("address", reified.phantom(DragonDen.reified(typeArg))), item.fields.resting_dragons), additionalRewards: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_1.String.reified()), item.fields.additional_rewards), proposalList: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom(Proposal.reified())), item.fields.proposal_list), nextProposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_proposal_id), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(typeArg, data) { return PoolHive.fromFields(typeArg, PoolHive.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, poolAddr: this.poolAddr, totalStaked: this.totalStaked.toString(), stakedForHoney: this.stakedForHoney.toString(), honeyAvailable: this.honeyAvailable.toJSONField(), hiveAvailable: this.hiveAvailable.toJSONField(), globalHiveClaimIndex: this.globalHiveClaimIndex.toString(), globalHoneyClaimIndex: this.globalHoneyClaimIndex.toString(), lastClaimEpoch: this.lastClaimEpoch.toString(), lastClaimHoneyEpoch: this.lastClaimHoneyEpoch.toString(), ongoingCycle: this.ongoingCycle.toString(), curCycleStartEpoch: this.curCycleStartEpoch.toString(), bribes: this.bribes.toJSONField(), addedHiveEnergy: this.addedHiveEnergy.toString(), activeHiveEnergy: this.activeHiveEnergy.toJSONField(), removedHiveEnergy: this.removedHiveEnergy.toString(), addedHoneyHealth: this.addedHoneyHealth.toString(), activeHoneyHealth: this.activeHoneyHealth.toJSONField(), removedHoneyHealth: this.removedHoneyHealth.toString(), restingDragons: this.restingDragons.toJSONField(), additionalRewards: (0, reified_1.fieldToJSON)(`vector<${structs_1.String.$typeName}>`, this.additionalRewards), proposalList: this.proposalList.toJSONField(), nextProposalId: this.nextProposalId.toString(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return PoolHive.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_7.UID.reified(), field.id), poolAddr: (0, reified_1.decodeFromJSONField)("address", field.poolAddr), totalStaked: (0, reified_1.decodeFromJSONField)("u64", field.totalStaked), stakedForHoney: (0, reified_1.decodeFromJSONField)("u64", field.stakedForHoney), honeyAvailable: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(reified.phantom(structs_10.HONEY.reified())), field.honeyAvailable), hiveAvailable: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.hiveAvailable), globalHiveClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.globalHiveClaimIndex), globalHoneyClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.globalHoneyClaimIndex), lastClaimEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastClaimEpoch), lastClaimHoneyEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastClaimHoneyEpoch), ongoingCycle: (0, reified_1.decodeFromJSONField)("u64", field.ongoingCycle), curCycleStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curCycleStartEpoch), bribes: (0, reified_1.decodeFromJSONField)(Bribes.reified(), field.bribes), addedHiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.addedHiveEnergy), activeHiveEnergy: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), field.activeHiveEnergy), removedHiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.removedHiveEnergy), addedHoneyHealth: (0, reified_1.decodeFromJSONField)("u128", field.addedHoneyHealth), activeHoneyHealth: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u128")), field.activeHoneyHealth), removedHoneyHealth: (0, reified_1.decodeFromJSONField)("u128", field.removedHoneyHealth), restingDragons: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("address", reified.phantom(DragonDen.reified(typeArg))), field.restingDragons), additionalRewards: (0, reified_1.decodeFromJSONField)(reified.vector(structs_1.String.reified()), field.additionalRewards), proposalList: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom(Proposal.reified())), field.proposalList), nextProposalId: (0, reified_1.decodeFromJSONField)("u64", field.nextProposalId), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
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
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolHive(data.bcs.type)) {
                throw new Error(`object at is not a PoolHive object`);
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
            return PoolHive.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PoolHive.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolHive object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolHive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolHive object`);
        }
        return PoolHive.fromSuiObjectData(typeArg, res.data);
    }
}
exports.PoolHive = PoolHive;
PoolHive.$typeName = `${PKG_V1}::dragon_food::PoolHive`;
PoolHive.$numTypeParams = 1;
PoolHive.$isPhantom = [true,];
/* ============================== PoolHiveKrafted =============================== */
function isPoolHiveKrafted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::PoolHiveKrafted`; }
class PoolHiveKrafted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PoolHiveKrafted.$typeName;
        this.$isPhantom = PoolHiveKrafted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolHiveKrafted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolId = fields.poolId;
        ;
        this.lpIdentifier = fields.lpIdentifier;
        ;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.curEpoch = fields.curEpoch;
        ;
        this.ongoingCycle = fields.ongoingCycle;
        ;
        this.curCycleStartEpoch = fields.curCycleStartEpoch;
        ;
        this.acceptedBribesVec = fields.acceptedBribesVec;
    }
    static reified() { return { typeName: PoolHiveKrafted.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolHiveKrafted.$typeName, ...[]), typeArgs: [], isPhantom: PoolHiveKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PoolHiveKrafted.fromFields(fields), fromFieldsWithTypes: (item) => PoolHiveKrafted.fromFieldsWithTypes(item), fromBcs: (data) => PoolHiveKrafted.fromBcs(data), bcs: PoolHiveKrafted.bcs, fromJSONField: (field) => PoolHiveKrafted.fromJSONField(field), fromJSON: (json) => PoolHiveKrafted.fromJSON(json), fromSuiParsedData: (content) => PoolHiveKrafted.fromSuiParsedData(content), fromSuiObjectData: (content) => PoolHiveKrafted.fromSuiObjectData(content), fetch: async (client, id) => PoolHiveKrafted.fetch(client, id), new: (fields) => { return new PoolHiveKrafted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolHiveKrafted.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolHiveKrafted.reified()); }
    static get p() { return PoolHiveKrafted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolHiveKrafted", {
            pool_id: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), lp_identifier: structs_1.String.bcs, pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), cur_epoch: bcs_1.bcs.u64(), ongoing_cycle: bcs_1.bcs.u64(), cur_cycle_start_epoch: bcs_1.bcs.u64(), accepted_bribes_vec: bcs_1.bcs.vector(structs_3.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return PoolHiveKrafted.reified().new({ poolId: (0, reified_1.decodeFromFields)("address", fields.pool_id), lpIdentifier: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.lp_identifier), poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch), ongoingCycle: (0, reified_1.decodeFromFields)("u64", fields.ongoing_cycle), curCycleStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_cycle_start_epoch), acceptedBribesVec: (0, reified_1.decodeFromFields)(reified.vector(structs_3.String.reified()), fields.accepted_bribes_vec) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolHiveKrafted(item.type)) {
            throw new Error("not a PoolHiveKrafted type");
        }
        return PoolHiveKrafted.reified().new({ poolId: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_id), lpIdentifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.lp_identifier), poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch), ongoingCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ongoing_cycle), curCycleStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_cycle_start_epoch), acceptedBribesVec: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_3.String.reified()), item.fields.accepted_bribes_vec) });
    }
    static fromBcs(data) { return PoolHiveKrafted.fromFields(PoolHiveKrafted.bcs.parse(data)); }
    toJSONField() {
        return {
            poolId: this.poolId, lpIdentifier: this.lpIdentifier, poolHiveAddr: this.poolHiveAddr, curEpoch: this.curEpoch.toString(), ongoingCycle: this.ongoingCycle.toString(), curCycleStartEpoch: this.curCycleStartEpoch.toString(), acceptedBribesVec: (0, reified_1.fieldToJSON)(`vector<${structs_3.String.$typeName}>`, this.acceptedBribesVec),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolHiveKrafted.reified().new({ poolId: (0, reified_1.decodeFromJSONField)("address", field.poolId), lpIdentifier: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.lpIdentifier), poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch), ongoingCycle: (0, reified_1.decodeFromJSONField)("u64", field.ongoingCycle), curCycleStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curCycleStartEpoch), acceptedBribesVec: (0, reified_1.decodeFromJSONField)(reified.vector(structs_3.String.reified()), field.acceptedBribesVec) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolHiveKrafted(data.bcs.type)) {
                throw new Error(`object at is not a PoolHiveKrafted object`);
            }
            return PoolHiveKrafted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PoolHiveKrafted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolHiveKrafted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolHiveKrafted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolHiveKrafted object`);
        }
        return PoolHiveKrafted.fromSuiObjectData(res.data);
    }
}
exports.PoolHiveKrafted = PoolHiveKrafted;
PoolHiveKrafted.$typeName = `${PKG_V1}::dragon_food::PoolHiveKrafted`;
PoolHiveKrafted.$numTypeParams = 0;
PoolHiveKrafted.$isPhantom = [];
/* ============================== Proposal =============================== */
function isProposal(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::Proposal`; }
class Proposal {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Proposal.$typeName;
        this.$isPhantom = Proposal.$isPhantom;
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
    static reified() { return { typeName: Proposal.$typeName, fullTypeName: (0, util_1.composeSuiType)(Proposal.$typeName, ...[]), typeArgs: [], isPhantom: Proposal.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Proposal.fromFields(fields), fromFieldsWithTypes: (item) => Proposal.fromFieldsWithTypes(item), fromBcs: (data) => Proposal.fromBcs(data), bcs: Proposal.bcs, fromJSONField: (field) => Proposal.fromJSONField(field), fromJSON: (json) => Proposal.fromJSON(json), fromSuiParsedData: (content) => Proposal.fromSuiParsedData(content), fromSuiObjectData: (content) => Proposal.fromSuiObjectData(content), fetch: async (client, id) => Proposal.fetch(client, id), new: (fields) => { return new Proposal([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Proposal.reified(); }
    static phantom() { return (0, reified_1.phantom)(Proposal.reified()); }
    static get p() { return Proposal.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Proposal", {
            proposal_id: bcs_1.bcs.u64(), proposer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), deposit: structs_5.Balance.bcs, title: structs_3.String.bcs, description: structs_3.String.bcs, link: structs_3.String.bcs, proposal_type: bcs_1.bcs.u64(), voting_start_epoch: bcs_1.bcs.u64(), voting_end_epoch: bcs_1.bcs.u64(), execution_start_epoch: bcs_1.bcs.u64(), execution_end_epoch: bcs_1.bcs.u64(), proposal_status: bcs_1.bcs.u64(), yes_votes: bcs_1.bcs.u64(), no_votes: bcs_1.bcs.u64(), voters: structs_6.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), fruit_life: structs_2.Option.bcs(FruitLife.bcs), new_params: structs_2.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64())), new_weights: structs_2.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64())), new_fee_info: structs_2.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u64()))
        });
    }
    ;
    static fromFields(fields) { return Proposal.reified().new({ proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), proposer: (0, reified_1.decodeFromFields)("address", fields.proposer), deposit: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), fields.deposit), title: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.title), description: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.description), link: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.link), proposalType: (0, reified_1.decodeFromFields)("u64", fields.proposal_type), votingStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.voting_start_epoch), votingEndEpoch: (0, reified_1.decodeFromFields)("u64", fields.voting_end_epoch), executionStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.execution_start_epoch), executionEndEpoch: (0, reified_1.decodeFromFields)("u64", fields.execution_end_epoch), proposalStatus: (0, reified_1.decodeFromFields)("u64", fields.proposal_status), yesVotes: (0, reified_1.decodeFromFields)("u64", fields.yes_votes), noVotes: (0, reified_1.decodeFromFields)("u64", fields.no_votes), voters: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("address", reified.phantom(Vote.reified())), fields.voters), fruitLife: (0, reified_1.decodeFromFields)(structs_2.Option.reified(FruitLife.reified()), fields.fruit_life), newParams: (0, reified_1.decodeFromFields)(structs_2.Option.reified(reified.vector("u64")), fields.new_params), newWeights: (0, reified_1.decodeFromFields)(structs_2.Option.reified(reified.vector("u64")), fields.new_weights), newFeeInfo: (0, reified_1.decodeFromFields)(structs_2.Option.reified(reified.vector("u64")), fields.new_fee_info) }); }
    static fromFieldsWithTypes(item) {
        if (!isProposal(item.type)) {
            throw new Error("not a Proposal type");
        }
        return Proposal.reified().new({ proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), proposer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.proposer), deposit: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), item.fields.deposit), title: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.title), description: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.description), link: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.link), proposalType: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_type), votingStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_start_epoch), votingEndEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_end_epoch), executionStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_start_epoch), executionEndEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.execution_end_epoch), proposalStatus: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_status), yesVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.yes_votes), noVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.no_votes), voters: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("address", reified.phantom(Vote.reified())), item.fields.voters), fruitLife: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(FruitLife.reified()), item.fields.fruit_life), newParams: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(reified.vector("u64")), item.fields.new_params), newWeights: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(reified.vector("u64")), item.fields.new_weights), newFeeInfo: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(reified.vector("u64")), item.fields.new_fee_info) });
    }
    static fromBcs(data) { return Proposal.fromFields(Proposal.bcs.parse(data)); }
    toJSONField() {
        return {
            proposalId: this.proposalId.toString(), proposer: this.proposer, deposit: this.deposit.toJSONField(), title: this.title, description: this.description, link: this.link, proposalType: this.proposalType.toString(), votingStartEpoch: this.votingStartEpoch.toString(), votingEndEpoch: this.votingEndEpoch.toString(), executionStartEpoch: this.executionStartEpoch.toString(), executionEndEpoch: this.executionEndEpoch.toString(), proposalStatus: this.proposalStatus.toString(), yesVotes: this.yesVotes.toString(), noVotes: this.noVotes.toString(), voters: this.voters.toJSONField(), fruitLife: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${FruitLife.$typeName}>`, this.fruitLife), newParams: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<vector<u64>>`, this.newParams), newWeights: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<vector<u64>>`, this.newWeights), newFeeInfo: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<vector<u64>>`, this.newFeeInfo),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Proposal.reified().new({ proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), proposer: (0, reified_1.decodeFromJSONField)("address", field.proposer), deposit: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(reified.phantom(structs_9.HIVE.reified())), field.deposit), title: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.title), description: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.description), link: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.link), proposalType: (0, reified_1.decodeFromJSONField)("u64", field.proposalType), votingStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.votingStartEpoch), votingEndEpoch: (0, reified_1.decodeFromJSONField)("u64", field.votingEndEpoch), executionStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.executionStartEpoch), executionEndEpoch: (0, reified_1.decodeFromJSONField)("u64", field.executionEndEpoch), proposalStatus: (0, reified_1.decodeFromJSONField)("u64", field.proposalStatus), yesVotes: (0, reified_1.decodeFromJSONField)("u64", field.yesVotes), noVotes: (0, reified_1.decodeFromJSONField)("u64", field.noVotes), voters: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("address", reified.phantom(Vote.reified())), field.voters), fruitLife: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(FruitLife.reified()), field.fruitLife), newParams: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(reified.vector("u64")), field.newParams), newWeights: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(reified.vector("u64")), field.newWeights), newFeeInfo: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(reified.vector("u64")), field.newFeeInfo) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isProposal(data.bcs.type)) {
                throw new Error(`object at is not a Proposal object`);
            }
            return Proposal.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Proposal.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Proposal object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProposal(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Proposal object`);
        }
        return Proposal.fromSuiObjectData(res.data);
    }
}
exports.Proposal = Proposal;
Proposal.$typeName = `${PKG_V1}::dragon_food::Proposal`;
Proposal.$numTypeParams = 0;
Proposal.$isPhantom = [];
/* ============================== ProposalDeleted =============================== */
function isProposalDeleted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::ProposalDeleted`; }
class ProposalDeleted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ProposalDeleted.$typeName;
        this.$isPhantom = ProposalDeleted.$isPhantom;
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
    static reified() { return { typeName: ProposalDeleted.$typeName, fullTypeName: (0, util_1.composeSuiType)(ProposalDeleted.$typeName, ...[]), typeArgs: [], isPhantom: ProposalDeleted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ProposalDeleted.fromFields(fields), fromFieldsWithTypes: (item) => ProposalDeleted.fromFieldsWithTypes(item), fromBcs: (data) => ProposalDeleted.fromBcs(data), bcs: ProposalDeleted.bcs, fromJSONField: (field) => ProposalDeleted.fromJSONField(field), fromJSON: (json) => ProposalDeleted.fromJSON(json), fromSuiParsedData: (content) => ProposalDeleted.fromSuiParsedData(content), fromSuiObjectData: (content) => ProposalDeleted.fromSuiObjectData(content), fetch: async (client, id) => ProposalDeleted.fetch(client, id), new: (fields) => { return new ProposalDeleted([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isProposalDeleted(data.bcs.type)) {
                throw new Error(`object at is not a ProposalDeleted object`);
            }
            return ProposalDeleted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ProposalDeleted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ProposalDeleted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProposalDeleted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProposalDeleted object`);
        }
        return ProposalDeleted.fromSuiObjectData(res.data);
    }
}
exports.ProposalDeleted = ProposalDeleted;
ProposalDeleted.$typeName = `${PKG_V1}::dragon_food::ProposalDeleted`;
ProposalDeleted.$numTypeParams = 0;
ProposalDeleted.$isPhantom = [];
/* ============================== ProposalEvaluated =============================== */
function isProposalEvaluated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::ProposalEvaluated`; }
class ProposalEvaluated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ProposalEvaluated.$typeName;
        this.$isPhantom = ProposalEvaluated.$isPhantom;
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
    static reified() { return { typeName: ProposalEvaluated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ProposalEvaluated.$typeName, ...[]), typeArgs: [], isPhantom: ProposalEvaluated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ProposalEvaluated.fromFields(fields), fromFieldsWithTypes: (item) => ProposalEvaluated.fromFieldsWithTypes(item), fromBcs: (data) => ProposalEvaluated.fromBcs(data), bcs: ProposalEvaluated.bcs, fromJSONField: (field) => ProposalEvaluated.fromJSONField(field), fromJSON: (json) => ProposalEvaluated.fromJSON(json), fromSuiParsedData: (content) => ProposalEvaluated.fromSuiParsedData(content), fromSuiObjectData: (content) => ProposalEvaluated.fromSuiObjectData(content), fetch: async (client, id) => ProposalEvaluated.fetch(client, id), new: (fields) => { return new ProposalEvaluated([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isProposalEvaluated(data.bcs.type)) {
                throw new Error(`object at is not a ProposalEvaluated object`);
            }
            return ProposalEvaluated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ProposalEvaluated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ProposalEvaluated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProposalEvaluated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProposalEvaluated object`);
        }
        return ProposalEvaluated.fromSuiObjectData(res.data);
    }
}
exports.ProposalEvaluated = ProposalEvaluated;
ProposalEvaluated.$typeName = `${PKG_V1}::dragon_food::ProposalEvaluated`;
ProposalEvaluated.$numTypeParams = 0;
ProposalEvaluated.$isPhantom = [];
/* ============================== ProposalExecuted =============================== */
function isProposalExecuted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::ProposalExecuted`; }
class ProposalExecuted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ProposalExecuted.$typeName;
        this.$isPhantom = ProposalExecuted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ProposalExecuted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.proposalId = fields.proposalId;
        ;
        this.proposalType = fields.proposalType;
    }
    static reified() { return { typeName: ProposalExecuted.$typeName, fullTypeName: (0, util_1.composeSuiType)(ProposalExecuted.$typeName, ...[]), typeArgs: [], isPhantom: ProposalExecuted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ProposalExecuted.fromFields(fields), fromFieldsWithTypes: (item) => ProposalExecuted.fromFieldsWithTypes(item), fromBcs: (data) => ProposalExecuted.fromBcs(data), bcs: ProposalExecuted.bcs, fromJSONField: (field) => ProposalExecuted.fromJSONField(field), fromJSON: (json) => ProposalExecuted.fromJSON(json), fromSuiParsedData: (content) => ProposalExecuted.fromSuiParsedData(content), fromSuiObjectData: (content) => ProposalExecuted.fromSuiObjectData(content), fetch: async (client, id) => ProposalExecuted.fetch(client, id), new: (fields) => { return new ProposalExecuted([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isProposalExecuted(data.bcs.type)) {
                throw new Error(`object at is not a ProposalExecuted object`);
            }
            return ProposalExecuted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ProposalExecuted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ProposalExecuted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProposalExecuted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProposalExecuted object`);
        }
        return ProposalExecuted.fromSuiObjectData(res.data);
    }
}
exports.ProposalExecuted = ProposalExecuted;
ProposalExecuted.$typeName = `${PKG_V1}::dragon_food::ProposalExecuted`;
ProposalExecuted.$numTypeParams = 0;
ProposalExecuted.$isPhantom = [];
/* ============================== RestedLockedDragonBeeReturnedInWild =============================== */
function isRestedLockedDragonBeeReturnedInWild(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::RestedLockedDragonBeeReturnedInWild`; }
class RestedLockedDragonBeeReturnedInWild {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RestedLockedDragonBeeReturnedInWild.$typeName;
        this.$isPhantom = RestedLockedDragonBeeReturnedInWild.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RestedLockedDragonBeeReturnedInWild.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.beeVersion = fields.beeVersion;
        ;
        this.hiveEarned = fields.hiveEarned;
        ;
        this.honeyEarned = fields.honeyEarned;
        ;
        this.unlockedAtCycle = fields.unlockedAtCycle;
        ;
        this.stakedForHoney = fields.stakedForHoney;
    }
    static reified() { return { typeName: RestedLockedDragonBeeReturnedInWild.$typeName, fullTypeName: (0, util_1.composeSuiType)(RestedLockedDragonBeeReturnedInWild.$typeName, ...[]), typeArgs: [], isPhantom: RestedLockedDragonBeeReturnedInWild.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RestedLockedDragonBeeReturnedInWild.fromFields(fields), fromFieldsWithTypes: (item) => RestedLockedDragonBeeReturnedInWild.fromFieldsWithTypes(item), fromBcs: (data) => RestedLockedDragonBeeReturnedInWild.fromBcs(data), bcs: RestedLockedDragonBeeReturnedInWild.bcs, fromJSONField: (field) => RestedLockedDragonBeeReturnedInWild.fromJSONField(field), fromJSON: (json) => RestedLockedDragonBeeReturnedInWild.fromJSON(json), fromSuiParsedData: (content) => RestedLockedDragonBeeReturnedInWild.fromSuiParsedData(content), fromSuiObjectData: (content) => RestedLockedDragonBeeReturnedInWild.fromSuiObjectData(content), fetch: async (client, id) => RestedLockedDragonBeeReturnedInWild.fetch(client, id), new: (fields) => { return new RestedLockedDragonBeeReturnedInWild([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RestedLockedDragonBeeReturnedInWild.reified(); }
    static phantom() { return (0, reified_1.phantom)(RestedLockedDragonBeeReturnedInWild.reified()); }
    static get p() { return RestedLockedDragonBeeReturnedInWild.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RestedLockedDragonBeeReturnedInWild", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), bee_version: bcs_1.bcs.u64(), hive_earned: bcs_1.bcs.u64(), honey_earned: bcs_1.bcs.u64(), unlocked_at_cycle: bcs_1.bcs.u64(), staked_for_honey: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return RestedLockedDragonBeeReturnedInWild.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), hiveEarned: (0, reified_1.decodeFromFields)("u64", fields.hive_earned), honeyEarned: (0, reified_1.decodeFromFields)("u64", fields.honey_earned), unlockedAtCycle: (0, reified_1.decodeFromFields)("u64", fields.unlocked_at_cycle), stakedForHoney: (0, reified_1.decodeFromFields)("u64", fields.staked_for_honey) }); }
    static fromFieldsWithTypes(item) {
        if (!isRestedLockedDragonBeeReturnedInWild(item.type)) {
            throw new Error("not a RestedLockedDragonBeeReturnedInWild type");
        }
        return RestedLockedDragonBeeReturnedInWild.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), hiveEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_earned), honeyEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_earned), unlockedAtCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unlocked_at_cycle), stakedForHoney: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.staked_for_honey) });
    }
    static fromBcs(data) { return RestedLockedDragonBeeReturnedInWild.fromFields(RestedLockedDragonBeeReturnedInWild.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr, beeVersion: this.beeVersion.toString(), hiveEarned: this.hiveEarned.toString(), honeyEarned: this.honeyEarned.toString(), unlockedAtCycle: this.unlockedAtCycle.toString(), stakedForHoney: this.stakedForHoney.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RestedLockedDragonBeeReturnedInWild.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), hiveEarned: (0, reified_1.decodeFromJSONField)("u64", field.hiveEarned), honeyEarned: (0, reified_1.decodeFromJSONField)("u64", field.honeyEarned), unlockedAtCycle: (0, reified_1.decodeFromJSONField)("u64", field.unlockedAtCycle), stakedForHoney: (0, reified_1.decodeFromJSONField)("u64", field.stakedForHoney) }); }
    static fromJSON(json) {
        if (json.$typeName !== RestedLockedDragonBeeReturnedInWild.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RestedLockedDragonBeeReturnedInWild.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRestedLockedDragonBeeReturnedInWild(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RestedLockedDragonBeeReturnedInWild object`);
    } return RestedLockedDragonBeeReturnedInWild.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRestedLockedDragonBeeReturnedInWild(data.bcs.type)) {
                throw new Error(`object at is not a RestedLockedDragonBeeReturnedInWild object`);
            }
            return RestedLockedDragonBeeReturnedInWild.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RestedLockedDragonBeeReturnedInWild.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RestedLockedDragonBeeReturnedInWild object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRestedLockedDragonBeeReturnedInWild(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RestedLockedDragonBeeReturnedInWild object`);
        }
        return RestedLockedDragonBeeReturnedInWild.fromSuiObjectData(res.data);
    }
}
exports.RestedLockedDragonBeeReturnedInWild = RestedLockedDragonBeeReturnedInWild;
RestedLockedDragonBeeReturnedInWild.$typeName = `${PKG_V1}::dragon_food::RestedLockedDragonBeeReturnedInWild`;
RestedLockedDragonBeeReturnedInWild.$numTypeParams = 0;
RestedLockedDragonBeeReturnedInWild.$isPhantom = [];
/* ============================== RipeFruitsClaimed =============================== */
function isRipeFruitsClaimed(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::dragon_food::RipeFruitsClaimed` + '<'); }
class RipeFruitsClaimed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RipeFruitsClaimed.$typeName;
        this.$isPhantom = RipeFruitsClaimed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RipeFruitsClaimed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.fruitType = fields.fruitType;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.userName = fields.userName;
        ;
        this.fruitGlobalClaimIndex = fields.fruitGlobalClaimIndex;
        ;
        this.earnedFruits = fields.earnedFruits;
        ;
        this.poolHiveAddr = fields.poolHiveAddr;
    }
    static reified(A) { return { typeName: RipeFruitsClaimed.$typeName, fullTypeName: (0, util_1.composeSuiType)(RipeFruitsClaimed.$typeName, ...[(0, reified_1.extractType)(A)]), typeArgs: [(0, reified_1.extractType)(A)], isPhantom: RipeFruitsClaimed.$isPhantom, reifiedTypeArgs: [A], fromFields: (fields) => RipeFruitsClaimed.fromFields(A, fields), fromFieldsWithTypes: (item) => RipeFruitsClaimed.fromFieldsWithTypes(A, item), fromBcs: (data) => RipeFruitsClaimed.fromBcs(A, data), bcs: RipeFruitsClaimed.bcs, fromJSONField: (field) => RipeFruitsClaimed.fromJSONField(A, field), fromJSON: (json) => RipeFruitsClaimed.fromJSON(A, json), fromSuiParsedData: (content) => RipeFruitsClaimed.fromSuiParsedData(A, content), fromSuiObjectData: (content) => RipeFruitsClaimed.fromSuiObjectData(A, content), fetch: async (client, id) => RipeFruitsClaimed.fetch(client, A, id), new: (fields) => { return new RipeFruitsClaimed([(0, reified_1.extractType)(A)], fields); }, kind: "StructClassReified", }; }
    static get r() { return RipeFruitsClaimed.reified; }
    static phantom(A) { return (0, reified_1.phantom)(RipeFruitsClaimed.reified(A)); }
    static get p() { return RipeFruitsClaimed.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("RipeFruitsClaimed", {
            fruit_type: structs_1.String.bcs, trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), user_name: structs_3.String.bcs, fruit_global_claim_index: bcs_1.bcs.u256(), earned_fruits: bcs_1.bcs.u64(), pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(typeArg, fields) { return RipeFruitsClaimed.reified(typeArg).new({ fruitType: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.fruit_type), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), userName: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.user_name), fruitGlobalClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.fruit_global_claim_index), earnedFruits: (0, reified_1.decodeFromFields)("u64", fields.earned_fruits), poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isRipeFruitsClaimed(item.type)) {
            throw new Error("not a RipeFruitsClaimed type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return RipeFruitsClaimed.reified(typeArg).new({ fruitType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.fruit_type), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), userName: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.user_name), fruitGlobalClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.fruit_global_claim_index), earnedFruits: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.earned_fruits), poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr) });
    }
    static fromBcs(typeArg, data) { return RipeFruitsClaimed.fromFields(typeArg, RipeFruitsClaimed.bcs.parse(data)); }
    toJSONField() {
        return {
            fruitType: this.fruitType, trainerAddr: this.trainerAddr, userName: this.userName, fruitGlobalClaimIndex: this.fruitGlobalClaimIndex.toString(), earnedFruits: this.earnedFruits.toString(), poolHiveAddr: this.poolHiveAddr,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return RipeFruitsClaimed.reified(typeArg).new({ fruitType: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.fruitType), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), userName: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.userName), fruitGlobalClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.fruitGlobalClaimIndex), earnedFruits: (0, reified_1.decodeFromJSONField)("u64", field.earnedFruits), poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr) }); }
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
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRipeFruitsClaimed(data.bcs.type)) {
                throw new Error(`object at is not a RipeFruitsClaimed object`);
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
            return RipeFruitsClaimed.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RipeFruitsClaimed.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RipeFruitsClaimed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRipeFruitsClaimed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RipeFruitsClaimed object`);
        }
        return RipeFruitsClaimed.fromSuiObjectData(typeArg, res.data);
    }
}
exports.RipeFruitsClaimed = RipeFruitsClaimed;
RipeFruitsClaimed.$typeName = `${PKG_V1}::dragon_food::RipeFruitsClaimed`;
RipeFruitsClaimed.$numTypeParams = 1;
RipeFruitsClaimed.$isPhantom = [true,];
/* ============================== TradingFeeClaimedByTrainer =============================== */
function isTradingFeeClaimedByTrainer(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::TradingFeeClaimedByTrainer`; }
class TradingFeeClaimedByTrainer {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TradingFeeClaimedByTrainer.$typeName;
        this.$isPhantom = TradingFeeClaimedByTrainer.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TradingFeeClaimedByTrainer.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.claimedCycles = fields.claimedCycles;
        ;
        this.claimedHiveFees = fields.claimedHiveFees;
        ;
        this.claimedHoneyFees = fields.claimedHoneyFees;
        ;
        this.hiveFeeBal = fields.hiveFeeBal;
        ;
        this.honeyFeeBal = fields.honeyFeeBal;
    }
    static reified() { return { typeName: TradingFeeClaimedByTrainer.$typeName, fullTypeName: (0, util_1.composeSuiType)(TradingFeeClaimedByTrainer.$typeName, ...[]), typeArgs: [], isPhantom: TradingFeeClaimedByTrainer.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TradingFeeClaimedByTrainer.fromFields(fields), fromFieldsWithTypes: (item) => TradingFeeClaimedByTrainer.fromFieldsWithTypes(item), fromBcs: (data) => TradingFeeClaimedByTrainer.fromBcs(data), bcs: TradingFeeClaimedByTrainer.bcs, fromJSONField: (field) => TradingFeeClaimedByTrainer.fromJSONField(field), fromJSON: (json) => TradingFeeClaimedByTrainer.fromJSON(json), fromSuiParsedData: (content) => TradingFeeClaimedByTrainer.fromSuiParsedData(content), fromSuiObjectData: (content) => TradingFeeClaimedByTrainer.fromSuiObjectData(content), fetch: async (client, id) => TradingFeeClaimedByTrainer.fetch(client, id), new: (fields) => { return new TradingFeeClaimedByTrainer([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TradingFeeClaimedByTrainer.reified(); }
    static phantom() { return (0, reified_1.phantom)(TradingFeeClaimedByTrainer.reified()); }
    static get p() { return TradingFeeClaimedByTrainer.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TradingFeeClaimedByTrainer", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), claimed_cycles: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_hive_fees: bcs_1.bcs.vector(bcs_1.bcs.u64()), claimed_honey_fees: bcs_1.bcs.vector(bcs_1.bcs.u64()), hive_fee_bal: bcs_1.bcs.u64(), honey_fee_bal: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TradingFeeClaimedByTrainer.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), claimedCycles: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_cycles), claimedHiveFees: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_hive_fees), claimedHoneyFees: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.claimed_honey_fees), hiveFeeBal: (0, reified_1.decodeFromFields)("u64", fields.hive_fee_bal), honeyFeeBal: (0, reified_1.decodeFromFields)("u64", fields.honey_fee_bal) }); }
    static fromFieldsWithTypes(item) {
        if (!isTradingFeeClaimedByTrainer(item.type)) {
            throw new Error("not a TradingFeeClaimedByTrainer type");
        }
        return TradingFeeClaimedByTrainer.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), claimedCycles: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_cycles), claimedHiveFees: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_hive_fees), claimedHoneyFees: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.claimed_honey_fees), hiveFeeBal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_fee_bal), honeyFeeBal: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_fee_bal) });
    }
    static fromBcs(data) { return TradingFeeClaimedByTrainer.fromFields(TradingFeeClaimedByTrainer.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr, claimedCycles: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedCycles), claimedHiveFees: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHiveFees), claimedHoneyFees: (0, reified_1.fieldToJSON)(`vector<u64>`, this.claimedHoneyFees), hiveFeeBal: this.hiveFeeBal.toString(), honeyFeeBal: this.honeyFeeBal.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TradingFeeClaimedByTrainer.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), claimedCycles: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedCycles), claimedHiveFees: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHiveFees), claimedHoneyFees: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.claimedHoneyFees), hiveFeeBal: (0, reified_1.decodeFromJSONField)("u64", field.hiveFeeBal), honeyFeeBal: (0, reified_1.decodeFromJSONField)("u64", field.honeyFeeBal) }); }
    static fromJSON(json) {
        if (json.$typeName !== TradingFeeClaimedByTrainer.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TradingFeeClaimedByTrainer.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTradingFeeClaimedByTrainer(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TradingFeeClaimedByTrainer object`);
    } return TradingFeeClaimedByTrainer.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTradingFeeClaimedByTrainer(data.bcs.type)) {
                throw new Error(`object at is not a TradingFeeClaimedByTrainer object`);
            }
            return TradingFeeClaimedByTrainer.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TradingFeeClaimedByTrainer.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TradingFeeClaimedByTrainer object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTradingFeeClaimedByTrainer(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TradingFeeClaimedByTrainer object`);
        }
        return TradingFeeClaimedByTrainer.fromSuiObjectData(res.data);
    }
}
exports.TradingFeeClaimedByTrainer = TradingFeeClaimedByTrainer;
TradingFeeClaimedByTrainer.$typeName = `${PKG_V1}::dragon_food::TradingFeeClaimedByTrainer`;
TradingFeeClaimedByTrainer.$numTypeParams = 0;
TradingFeeClaimedByTrainer.$isPhantom = [];
/* ============================== TrainerVotedForEmissions =============================== */
function isTrainerVotedForEmissions(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::TrainerVotedForEmissions`; }
class TrainerVotedForEmissions {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TrainerVotedForEmissions.$typeName;
        this.$isPhantom = TrainerVotedForEmissions.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TrainerVotedForEmissions.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.beeVersion = fields.beeVersion;
        ;
        this.hiveEnergy = fields.hiveEnergy;
        ;
        this.honeyHealth = fields.honeyHealth;
        ;
        this.hiveVoteType = fields.hiveVoteType;
        ;
        this.honeyVoteType = fields.honeyVoteType;
        ;
        this.daoVoteCycle = fields.daoVoteCycle;
    }
    static reified() { return { typeName: TrainerVotedForEmissions.$typeName, fullTypeName: (0, util_1.composeSuiType)(TrainerVotedForEmissions.$typeName, ...[]), typeArgs: [], isPhantom: TrainerVotedForEmissions.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TrainerVotedForEmissions.fromFields(fields), fromFieldsWithTypes: (item) => TrainerVotedForEmissions.fromFieldsWithTypes(item), fromBcs: (data) => TrainerVotedForEmissions.fromBcs(data), bcs: TrainerVotedForEmissions.bcs, fromJSONField: (field) => TrainerVotedForEmissions.fromJSONField(field), fromJSON: (json) => TrainerVotedForEmissions.fromJSON(json), fromSuiParsedData: (content) => TrainerVotedForEmissions.fromSuiParsedData(content), fromSuiObjectData: (content) => TrainerVotedForEmissions.fromSuiObjectData(content), fetch: async (client, id) => TrainerVotedForEmissions.fetch(client, id), new: (fields) => { return new TrainerVotedForEmissions([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TrainerVotedForEmissions.reified(); }
    static phantom() { return (0, reified_1.phantom)(TrainerVotedForEmissions.reified()); }
    static get p() { return TrainerVotedForEmissions.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TrainerVotedForEmissions", {
            bee_version: bcs_1.bcs.u64(), hive_energy: bcs_1.bcs.u128(), honey_health: bcs_1.bcs.u128(), hive_vote_type: bcs_1.bcs.u8(), honey_vote_type: bcs_1.bcs.u8(), dao_vote_cycle: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TrainerVotedForEmissions.reified().new({ beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), hiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFields)("u128", fields.honey_health), hiveVoteType: (0, reified_1.decodeFromFields)("u8", fields.hive_vote_type), honeyVoteType: (0, reified_1.decodeFromFields)("u8", fields.honey_vote_type), daoVoteCycle: (0, reified_1.decodeFromFields)("u64", fields.dao_vote_cycle) }); }
    static fromFieldsWithTypes(item) {
        if (!isTrainerVotedForEmissions(item.type)) {
            throw new Error("not a TrainerVotedForEmissions type");
        }
        return TrainerVotedForEmissions.reified().new({ beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), hiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.honey_health), hiveVoteType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.hive_vote_type), honeyVoteType: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.honey_vote_type), daoVoteCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dao_vote_cycle) });
    }
    static fromBcs(data) { return TrainerVotedForEmissions.fromFields(TrainerVotedForEmissions.bcs.parse(data)); }
    toJSONField() {
        return {
            beeVersion: this.beeVersion.toString(), hiveEnergy: this.hiveEnergy.toString(), honeyHealth: this.honeyHealth.toString(), hiveVoteType: this.hiveVoteType, honeyVoteType: this.honeyVoteType, daoVoteCycle: this.daoVoteCycle.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TrainerVotedForEmissions.reified().new({ beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), hiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.hiveEnergy), honeyHealth: (0, reified_1.decodeFromJSONField)("u128", field.honeyHealth), hiveVoteType: (0, reified_1.decodeFromJSONField)("u8", field.hiveVoteType), honeyVoteType: (0, reified_1.decodeFromJSONField)("u8", field.honeyVoteType), daoVoteCycle: (0, reified_1.decodeFromJSONField)("u64", field.daoVoteCycle) }); }
    static fromJSON(json) {
        if (json.$typeName !== TrainerVotedForEmissions.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TrainerVotedForEmissions.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTrainerVotedForEmissions(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TrainerVotedForEmissions object`);
    } return TrainerVotedForEmissions.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTrainerVotedForEmissions(data.bcs.type)) {
                throw new Error(`object at is not a TrainerVotedForEmissions object`);
            }
            return TrainerVotedForEmissions.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TrainerVotedForEmissions.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TrainerVotedForEmissions object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTrainerVotedForEmissions(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TrainerVotedForEmissions object`);
        }
        return TrainerVotedForEmissions.fromSuiObjectData(res.data);
    }
}
exports.TrainerVotedForEmissions = TrainerVotedForEmissions;
TrainerVotedForEmissions.$typeName = `${PKG_V1}::dragon_food::TrainerVotedForEmissions`;
TrainerVotedForEmissions.$numTypeParams = 0;
TrainerVotedForEmissions.$isPhantom = [];
/* ============================== UnbondingFromDragonDen =============================== */
function isUnbondingFromDragonDen(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::UnbondingFromDragonDen`; }
class UnbondingFromDragonDen {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UnbondingFromDragonDen.$typeName;
        this.$isPhantom = UnbondingFromDragonDen.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UnbondingFromDragonDen.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.isDragonBeeLocked = fields.isDragonBeeLocked;
        ;
        this.lpBalanceUnbonded = fields.lpBalanceUnbonded;
        ;
        this.hiveEarned = fields.hiveEarned;
        ;
        this.honeyEarned = fields.honeyEarned;
        ;
        this.hiveClaimIndex = fields.hiveClaimIndex;
        ;
        this.honeyClaimIndex = fields.honeyClaimIndex;
    }
    static reified() { return { typeName: UnbondingFromDragonDen.$typeName, fullTypeName: (0, util_1.composeSuiType)(UnbondingFromDragonDen.$typeName, ...[]), typeArgs: [], isPhantom: UnbondingFromDragonDen.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UnbondingFromDragonDen.fromFields(fields), fromFieldsWithTypes: (item) => UnbondingFromDragonDen.fromFieldsWithTypes(item), fromBcs: (data) => UnbondingFromDragonDen.fromBcs(data), bcs: UnbondingFromDragonDen.bcs, fromJSONField: (field) => UnbondingFromDragonDen.fromJSONField(field), fromJSON: (json) => UnbondingFromDragonDen.fromJSON(json), fromSuiParsedData: (content) => UnbondingFromDragonDen.fromSuiParsedData(content), fromSuiObjectData: (content) => UnbondingFromDragonDen.fromSuiObjectData(content), fetch: async (client, id) => UnbondingFromDragonDen.fetch(client, id), new: (fields) => { return new UnbondingFromDragonDen([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UnbondingFromDragonDen.reified(); }
    static phantom() { return (0, reified_1.phantom)(UnbondingFromDragonDen.reified()); }
    static get p() { return UnbondingFromDragonDen.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UnbondingFromDragonDen", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), is_dragon_bee_locked: bcs_1.bcs.bool(), lp_balance_unbonded: bcs_1.bcs.u64(), hive_earned: bcs_1.bcs.u64(), honey_earned: bcs_1.bcs.u64(), hive_claim_index: bcs_1.bcs.u256(), honey_claim_index: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(fields) { return UnbondingFromDragonDen.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), isDragonBeeLocked: (0, reified_1.decodeFromFields)("bool", fields.is_dragon_bee_locked), lpBalanceUnbonded: (0, reified_1.decodeFromFields)("u64", fields.lp_balance_unbonded), hiveEarned: (0, reified_1.decodeFromFields)("u64", fields.hive_earned), honeyEarned: (0, reified_1.decodeFromFields)("u64", fields.honey_earned), hiveClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.hive_claim_index), honeyClaimIndex: (0, reified_1.decodeFromFields)("u256", fields.honey_claim_index) }); }
    static fromFieldsWithTypes(item) {
        if (!isUnbondingFromDragonDen(item.type)) {
            throw new Error("not a UnbondingFromDragonDen type");
        }
        return UnbondingFromDragonDen.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), isDragonBeeLocked: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_dragon_bee_locked), lpBalanceUnbonded: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_balance_unbonded), hiveEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.hive_earned), honeyEarned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_earned), hiveClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.hive_claim_index), honeyClaimIndex: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.honey_claim_index) });
    }
    static fromBcs(data) { return UnbondingFromDragonDen.fromFields(UnbondingFromDragonDen.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr, isDragonBeeLocked: this.isDragonBeeLocked, lpBalanceUnbonded: this.lpBalanceUnbonded.toString(), hiveEarned: this.hiveEarned.toString(), honeyEarned: this.honeyEarned.toString(), hiveClaimIndex: this.hiveClaimIndex.toString(), honeyClaimIndex: this.honeyClaimIndex.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UnbondingFromDragonDen.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), isDragonBeeLocked: (0, reified_1.decodeFromJSONField)("bool", field.isDragonBeeLocked), lpBalanceUnbonded: (0, reified_1.decodeFromJSONField)("u64", field.lpBalanceUnbonded), hiveEarned: (0, reified_1.decodeFromJSONField)("u64", field.hiveEarned), honeyEarned: (0, reified_1.decodeFromJSONField)("u64", field.honeyEarned), hiveClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.hiveClaimIndex), honeyClaimIndex: (0, reified_1.decodeFromJSONField)("u256", field.honeyClaimIndex) }); }
    static fromJSON(json) {
        if (json.$typeName !== UnbondingFromDragonDen.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UnbondingFromDragonDen.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnbondingFromDragonDen(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UnbondingFromDragonDen object`);
    } return UnbondingFromDragonDen.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUnbondingFromDragonDen(data.bcs.type)) {
                throw new Error(`object at is not a UnbondingFromDragonDen object`);
            }
            return UnbondingFromDragonDen.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UnbondingFromDragonDen.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UnbondingFromDragonDen object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnbondingFromDragonDen(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnbondingFromDragonDen object`);
        }
        return UnbondingFromDragonDen.fromSuiObjectData(res.data);
    }
}
exports.UnbondingFromDragonDen = UnbondingFromDragonDen;
UnbondingFromDragonDen.$typeName = `${PKG_V1}::dragon_food::UnbondingFromDragonDen`;
UnbondingFromDragonDen.$numTypeParams = 0;
UnbondingFromDragonDen.$isPhantom = [];
/* ============================== UnlockedLP =============================== */
function isUnlockedLP(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::UnlockedLP`; }
class UnlockedLP {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UnlockedLP.$typeName;
        this.$isPhantom = UnlockedLP.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UnlockedLP.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.trainerAddr = fields.trainerAddr;
    }
    static reified() { return { typeName: UnlockedLP.$typeName, fullTypeName: (0, util_1.composeSuiType)(UnlockedLP.$typeName, ...[]), typeArgs: [], isPhantom: UnlockedLP.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UnlockedLP.fromFields(fields), fromFieldsWithTypes: (item) => UnlockedLP.fromFieldsWithTypes(item), fromBcs: (data) => UnlockedLP.fromBcs(data), bcs: UnlockedLP.bcs, fromJSONField: (field) => UnlockedLP.fromJSONField(field), fromJSON: (json) => UnlockedLP.fromJSON(json), fromSuiParsedData: (content) => UnlockedLP.fromSuiParsedData(content), fromSuiObjectData: (content) => UnlockedLP.fromSuiObjectData(content), fetch: async (client, id) => UnlockedLP.fetch(client, id), new: (fields) => { return new UnlockedLP([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UnlockedLP.reified(); }
    static phantom() { return (0, reified_1.phantom)(UnlockedLP.reified()); }
    static get p() { return UnlockedLP.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UnlockedLP", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return UnlockedLP.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr) }); }
    static fromFieldsWithTypes(item) {
        if (!isUnlockedLP(item.type)) {
            throw new Error("not a UnlockedLP type");
        }
        return UnlockedLP.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr) });
    }
    static fromBcs(data) { return UnlockedLP.fromFields(UnlockedLP.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, trainerAddr: this.trainerAddr,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UnlockedLP.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr) }); }
    static fromJSON(json) {
        if (json.$typeName !== UnlockedLP.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UnlockedLP.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnlockedLP(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UnlockedLP object`);
    } return UnlockedLP.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUnlockedLP(data.bcs.type)) {
                throw new Error(`object at is not a UnlockedLP object`);
            }
            return UnlockedLP.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UnlockedLP.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UnlockedLP object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnlockedLP(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnlockedLP object`);
        }
        return UnlockedLP.fromSuiObjectData(res.data);
    }
}
exports.UnlockedLP = UnlockedLP;
UnlockedLP.$typeName = `${PKG_V1}::dragon_food::UnlockedLP`;
UnlockedLP.$numTypeParams = 0;
UnlockedLP.$isPhantom = [];
/* ============================== Vote =============================== */
function isVote(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::Vote`; }
class Vote {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Vote.$typeName;
        this.$isPhantom = Vote.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Vote.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.vote = fields.vote;
        ;
        this.stakedAmt = fields.stakedAmt;
    }
    static reified() { return { typeName: Vote.$typeName, fullTypeName: (0, util_1.composeSuiType)(Vote.$typeName, ...[]), typeArgs: [], isPhantom: Vote.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Vote.fromFields(fields), fromFieldsWithTypes: (item) => Vote.fromFieldsWithTypes(item), fromBcs: (data) => Vote.fromBcs(data), bcs: Vote.bcs, fromJSONField: (field) => Vote.fromJSONField(field), fromJSON: (json) => Vote.fromJSON(json), fromSuiParsedData: (content) => Vote.fromSuiParsedData(content), fromSuiObjectData: (content) => Vote.fromSuiObjectData(content), fetch: async (client, id) => Vote.fetch(client, id), new: (fields) => { return new Vote([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Vote.reified(); }
    static phantom() { return (0, reified_1.phantom)(Vote.reified()); }
    static get p() { return Vote.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Vote", {
            vote: bcs_1.bcs.bool(), staked_amt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Vote.reified().new({ vote: (0, reified_1.decodeFromFields)("bool", fields.vote), stakedAmt: (0, reified_1.decodeFromFields)("u64", fields.staked_amt) }); }
    static fromFieldsWithTypes(item) {
        if (!isVote(item.type)) {
            throw new Error("not a Vote type");
        }
        return Vote.reified().new({ vote: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.vote), stakedAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.staked_amt) });
    }
    static fromBcs(data) { return Vote.fromFields(Vote.bcs.parse(data)); }
    toJSONField() {
        return {
            vote: this.vote, stakedAmt: this.stakedAmt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Vote.reified().new({ vote: (0, reified_1.decodeFromJSONField)("bool", field.vote), stakedAmt: (0, reified_1.decodeFromJSONField)("u64", field.stakedAmt) }); }
    static fromJSON(json) {
        if (json.$typeName !== Vote.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Vote.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVote(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Vote object`);
    } return Vote.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVote(data.bcs.type)) {
                throw new Error(`object at is not a Vote object`);
            }
            return Vote.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Vote.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Vote object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVote(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Vote object`);
        }
        return Vote.fromSuiObjectData(res.data);
    }
}
exports.Vote = Vote;
Vote.$typeName = `${PKG_V1}::dragon_food::Vote`;
Vote.$numTypeParams = 0;
Vote.$isPhantom = [];
/* ============================== VoteCasted =============================== */
function isVoteCasted(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::VoteCasted`; }
class VoteCasted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = VoteCasted.$typeName;
        this.$isPhantom = VoteCasted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(VoteCasted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.proposalId = fields.proposalId;
        ;
        this.voter = fields.voter;
        ;
        this.voterTrainer = fields.voterTrainer;
        ;
        this.vote = fields.vote;
        ;
        this.stakedAmt = fields.stakedAmt;
        ;
        this.yesVotes = fields.yesVotes;
        ;
        this.noVotes = fields.noVotes;
        ;
        this.totalStaked = fields.totalStaked;
    }
    static reified() { return { typeName: VoteCasted.$typeName, fullTypeName: (0, util_1.composeSuiType)(VoteCasted.$typeName, ...[]), typeArgs: [], isPhantom: VoteCasted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => VoteCasted.fromFields(fields), fromFieldsWithTypes: (item) => VoteCasted.fromFieldsWithTypes(item), fromBcs: (data) => VoteCasted.fromBcs(data), bcs: VoteCasted.bcs, fromJSONField: (field) => VoteCasted.fromJSONField(field), fromJSON: (json) => VoteCasted.fromJSON(json), fromSuiParsedData: (content) => VoteCasted.fromSuiParsedData(content), fromSuiObjectData: (content) => VoteCasted.fromSuiObjectData(content), fetch: async (client, id) => VoteCasted.fetch(client, id), new: (fields) => { return new VoteCasted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return VoteCasted.reified(); }
    static phantom() { return (0, reified_1.phantom)(VoteCasted.reified()); }
    static get p() { return VoteCasted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("VoteCasted", {
            pool_hive_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), proposal_id: bcs_1.bcs.u64(), voter: structs_3.String.bcs, voter_trainer: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), vote: bcs_1.bcs.bool(), staked_amt: bcs_1.bcs.u64(), yes_votes: bcs_1.bcs.u64(), no_votes: bcs_1.bcs.u64(), total_staked: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return VoteCasted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFields)("address", fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFields)("u64", fields.proposal_id), voter: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.voter), voterTrainer: (0, reified_1.decodeFromFields)("address", fields.voter_trainer), vote: (0, reified_1.decodeFromFields)("bool", fields.vote), stakedAmt: (0, reified_1.decodeFromFields)("u64", fields.staked_amt), yesVotes: (0, reified_1.decodeFromFields)("u64", fields.yes_votes), noVotes: (0, reified_1.decodeFromFields)("u64", fields.no_votes), totalStaked: (0, reified_1.decodeFromFields)("u64", fields.total_staked) }); }
    static fromFieldsWithTypes(item) {
        if (!isVoteCasted(item.type)) {
            throw new Error("not a VoteCasted type");
        }
        return VoteCasted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_hive_addr), proposalId: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.proposal_id), voter: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.voter), voterTrainer: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.voter_trainer), vote: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.vote), stakedAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.staked_amt), yesVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.yes_votes), noVotes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.no_votes), totalStaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_staked) });
    }
    static fromBcs(data) { return VoteCasted.fromFields(VoteCasted.bcs.parse(data)); }
    toJSONField() {
        return {
            poolHiveAddr: this.poolHiveAddr, proposalId: this.proposalId.toString(), voter: this.voter, voterTrainer: this.voterTrainer, vote: this.vote, stakedAmt: this.stakedAmt.toString(), yesVotes: this.yesVotes.toString(), noVotes: this.noVotes.toString(), totalStaked: this.totalStaked.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return VoteCasted.reified().new({ poolHiveAddr: (0, reified_1.decodeFromJSONField)("address", field.poolHiveAddr), proposalId: (0, reified_1.decodeFromJSONField)("u64", field.proposalId), voter: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.voter), voterTrainer: (0, reified_1.decodeFromJSONField)("address", field.voterTrainer), vote: (0, reified_1.decodeFromJSONField)("bool", field.vote), stakedAmt: (0, reified_1.decodeFromJSONField)("u64", field.stakedAmt), yesVotes: (0, reified_1.decodeFromJSONField)("u64", field.yesVotes), noVotes: (0, reified_1.decodeFromJSONField)("u64", field.noVotes), totalStaked: (0, reified_1.decodeFromJSONField)("u64", field.totalStaked) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVoteCasted(data.bcs.type)) {
                throw new Error(`object at is not a VoteCasted object`);
            }
            return VoteCasted.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return VoteCasted.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VoteCasted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVoteCasted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VoteCasted object`);
        }
        return VoteCasted.fromSuiObjectData(res.data);
    }
}
exports.VoteCasted = VoteCasted;
VoteCasted.$typeName = `${PKG_V1}::dragon_food::VoteCasted`;
VoteCasted.$numTypeParams = 0;
VoteCasted.$isPhantom = [];
/* ============================== VoteConfig =============================== */
function isVoteConfig(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::VoteConfig`; }
class VoteConfig {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = VoteConfig.$typeName;
        this.$isPhantom = VoteConfig.$isPhantom;
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
    static reified() { return { typeName: VoteConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(VoteConfig.$typeName, ...[]), typeArgs: [], isPhantom: VoteConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => VoteConfig.fromFields(fields), fromFieldsWithTypes: (item) => VoteConfig.fromFieldsWithTypes(item), fromBcs: (data) => VoteConfig.fromBcs(data), bcs: VoteConfig.bcs, fromJSONField: (field) => VoteConfig.fromJSONField(field), fromJSON: (json) => VoteConfig.fromJSON(json), fromSuiParsedData: (content) => VoteConfig.fromSuiParsedData(content), fromSuiObjectData: (content) => VoteConfig.fromSuiObjectData(content), fetch: async (client, id) => VoteConfig.fetch(client, id), new: (fields) => { return new VoteConfig([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVoteConfig(data.bcs.type)) {
                throw new Error(`object at is not a VoteConfig object`);
            }
            return VoteConfig.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return VoteConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VoteConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVoteConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VoteConfig object`);
        }
        return VoteConfig.fromSuiObjectData(res.data);
    }
}
exports.VoteConfig = VoteConfig;
VoteConfig.$typeName = `${PKG_V1}::dragon_food::VoteConfig`;
VoteConfig.$numTypeParams = 0;
VoteConfig.$isPhantom = [];
/* ============================== VotingBribes =============================== */
function isVotingBribes(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::dragon_food::VotingBribes` + '<'); }
class VotingBribes {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = VotingBribes.$typeName;
        this.$isPhantom = VotingBribes.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(VotingBribes.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.bribe = fields.bribe;
        ;
        this.isMemeToken = fields.isMemeToken;
        ;
        this.cycleToHiveBribesMap = fields.cycleToHiveBribesMap;
        ;
        this.cycleToHoneyBribesMap = fields.cycleToHoneyBribesMap;
    }
    static reified(X) { return { typeName: VotingBribes.$typeName, fullTypeName: (0, util_1.composeSuiType)(VotingBribes.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: VotingBribes.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => VotingBribes.fromFields(X, fields), fromFieldsWithTypes: (item) => VotingBribes.fromFieldsWithTypes(X, item), fromBcs: (data) => VotingBribes.fromBcs(X, data), bcs: VotingBribes.bcs, fromJSONField: (field) => VotingBribes.fromJSONField(X, field), fromJSON: (json) => VotingBribes.fromJSON(X, json), fromSuiParsedData: (content) => VotingBribes.fromSuiParsedData(X, content), fromSuiObjectData: (content) => VotingBribes.fromSuiObjectData(X, content), fetch: async (client, id) => VotingBribes.fetch(client, X, id), new: (fields) => { return new VotingBribes([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return VotingBribes.reified; }
    static phantom(X) { return (0, reified_1.phantom)(VotingBribes.reified(X)); }
    static get p() { return VotingBribes.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("VotingBribes", {
            id: structs_7.UID.bcs, bribe: structs_5.Balance.bcs, is_meme_token: bcs_1.bcs.bool(), cycle_to_hive_bribes_map: structs_6.LinkedTable.bcs(bcs_1.bcs.u64()), cycle_to_honey_bribes_map: structs_6.LinkedTable.bcs(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(typeArg, fields) { return VotingBribes.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_7.UID.reified(), fields.id), bribe: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(typeArg), fields.bribe), isMemeToken: (0, reified_1.decodeFromFields)("bool", fields.is_meme_token), cycleToHiveBribesMap: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u64")), fields.cycle_to_hive_bribes_map), cycleToHoneyBribesMap: (0, reified_1.decodeFromFields)(structs_6.LinkedTable.reified("u64", reified.phantom("u64")), fields.cycle_to_honey_bribes_map) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isVotingBribes(item.type)) {
            throw new Error("not a VotingBribes type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return VotingBribes.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.UID.reified(), item.fields.id), bribe: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(typeArg), item.fields.bribe), isMemeToken: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_meme_token), cycleToHiveBribesMap: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u64")), item.fields.cycle_to_hive_bribes_map), cycleToHoneyBribesMap: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.LinkedTable.reified("u64", reified.phantom("u64")), item.fields.cycle_to_honey_bribes_map) });
    }
    static fromBcs(typeArg, data) { return VotingBribes.fromFields(typeArg, VotingBribes.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, bribe: this.bribe.toJSONField(), isMemeToken: this.isMemeToken, cycleToHiveBribesMap: this.cycleToHiveBribesMap.toJSONField(), cycleToHoneyBribesMap: this.cycleToHoneyBribesMap.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return VotingBribes.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_7.UID.reified(), field.id), bribe: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(typeArg), field.bribe), isMemeToken: (0, reified_1.decodeFromJSONField)("bool", field.isMemeToken), cycleToHiveBribesMap: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u64")), field.cycleToHiveBribesMap), cycleToHoneyBribesMap: (0, reified_1.decodeFromJSONField)(structs_6.LinkedTable.reified("u64", reified.phantom("u64")), field.cycleToHoneyBribesMap) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== VotingBribes.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(VotingBribes.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return VotingBribes.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVotingBribes(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VotingBribes object`);
    } return VotingBribes.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVotingBribes(data.bcs.type)) {
                throw new Error(`object at is not a VotingBribes object`);
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
            return VotingBribes.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return VotingBribes.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VotingBribes object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVotingBribes(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VotingBribes object`);
        }
        return VotingBribes.fromSuiObjectData(typeArg, res.data);
    }
}
exports.VotingBribes = VotingBribes;
VotingBribes.$typeName = `${PKG_V1}::dragon_food::VotingBribes`;
VotingBribes.$numTypeParams = 1;
VotingBribes.$isPhantom = [true,];
/* ============================== VotingPowerIncreasedForLockedBee =============================== */
function isVotingPowerIncreasedForLockedBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dragon_food::VotingPowerIncreasedForLockedBee`; }
class VotingPowerIncreasedForLockedBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = VotingPowerIncreasedForLockedBee.$typeName;
        this.$isPhantom = VotingPowerIncreasedForLockedBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(VotingPowerIncreasedForLockedBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.beeVersion = fields.beeVersion;
        ;
        this.hiveEnergy = fields.hiveEnergy;
        ;
        this.honeyHealth = fields.honeyHealth;
    }
    static reified() { return { typeName: VotingPowerIncreasedForLockedBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(VotingPowerIncreasedForLockedBee.$typeName, ...[]), typeArgs: [], isPhantom: VotingPowerIncreasedForLockedBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => VotingPowerIncreasedForLockedBee.fromFields(fields), fromFieldsWithTypes: (item) => VotingPowerIncreasedForLockedBee.fromFieldsWithTypes(item), fromBcs: (data) => VotingPowerIncreasedForLockedBee.fromBcs(data), bcs: VotingPowerIncreasedForLockedBee.bcs, fromJSONField: (field) => VotingPowerIncreasedForLockedBee.fromJSONField(field), fromJSON: (json) => VotingPowerIncreasedForLockedBee.fromJSON(json), fromSuiParsedData: (content) => VotingPowerIncreasedForLockedBee.fromSuiParsedData(content), fromSuiObjectData: (content) => VotingPowerIncreasedForLockedBee.fromSuiObjectData(content), fetch: async (client, id) => VotingPowerIncreasedForLockedBee.fetch(client, id), new: (fields) => { return new VotingPowerIncreasedForLockedBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return VotingPowerIncreasedForLockedBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(VotingPowerIncreasedForLockedBee.reified()); }
    static get p() { return VotingPowerIncreasedForLockedBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("VotingPowerIncreasedForLockedBee", {
            bee_version: bcs_1.bcs.u64(), hive_energy: bcs_1.bcs.u128(), honey_health: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return VotingPowerIncreasedForLockedBee.reified().new({ beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), hiveEnergy: (0, reified_1.decodeFromFields)("u128", fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFields)("u128", fields.honey_health) }); }
    static fromFieldsWithTypes(item) {
        if (!isVotingPowerIncreasedForLockedBee(item.type)) {
            throw new Error("not a VotingPowerIncreasedForLockedBee type");
        }
        return VotingPowerIncreasedForLockedBee.reified().new({ beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), hiveEnergy: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.hive_energy), honeyHealth: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.honey_health) });
    }
    static fromBcs(data) { return VotingPowerIncreasedForLockedBee.fromFields(VotingPowerIncreasedForLockedBee.bcs.parse(data)); }
    toJSONField() {
        return {
            beeVersion: this.beeVersion.toString(), hiveEnergy: this.hiveEnergy.toString(), honeyHealth: this.honeyHealth.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return VotingPowerIncreasedForLockedBee.reified().new({ beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), hiveEnergy: (0, reified_1.decodeFromJSONField)("u128", field.hiveEnergy), honeyHealth: (0, reified_1.decodeFromJSONField)("u128", field.honeyHealth) }); }
    static fromJSON(json) {
        if (json.$typeName !== VotingPowerIncreasedForLockedBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VotingPowerIncreasedForLockedBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVotingPowerIncreasedForLockedBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VotingPowerIncreasedForLockedBee object`);
    } return VotingPowerIncreasedForLockedBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVotingPowerIncreasedForLockedBee(data.bcs.type)) {
                throw new Error(`object at is not a VotingPowerIncreasedForLockedBee object`);
            }
            return VotingPowerIncreasedForLockedBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return VotingPowerIncreasedForLockedBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VotingPowerIncreasedForLockedBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVotingPowerIncreasedForLockedBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VotingPowerIncreasedForLockedBee object`);
        }
        return VotingPowerIncreasedForLockedBee.fromSuiObjectData(res.data);
    }
}
exports.VotingPowerIncreasedForLockedBee = VotingPowerIncreasedForLockedBee;
VotingPowerIncreasedForLockedBee.$typeName = `${PKG_V1}::dragon_food::VotingPowerIncreasedForLockedBee`;
VotingPowerIncreasedForLockedBee.$numTypeParams = 0;
VotingPowerIncreasedForLockedBee.$isPhantom = [];
