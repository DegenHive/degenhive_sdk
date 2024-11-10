"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeSubsidy = void 0;
exports.isStakeSubsidy = isStakeSubsidy;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x2/bag/structs");
const structs_2 = require("../../0x2/balance/structs");
const structs_3 = require("../../0x2/sui/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== StakeSubsidy =============================== */
function isStakeSubsidy(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::stake_subsidy::StakeSubsidy`; }
class StakeSubsidy {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StakeSubsidy.$typeName;
        this.$isPhantom = StakeSubsidy.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StakeSubsidy.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.balance = fields.balance;
        ;
        this.distributionCounter = fields.distributionCounter;
        ;
        this.currentDistributionAmount = fields.currentDistributionAmount;
        ;
        this.stakeSubsidyPeriodLength = fields.stakeSubsidyPeriodLength;
        ;
        this.stakeSubsidyDecreaseRate = fields.stakeSubsidyDecreaseRate;
        ;
        this.extraFields = fields.extraFields;
    }
    static reified() { return { typeName: StakeSubsidy.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakeSubsidy.$typeName, ...[]), typeArgs: [], isPhantom: StakeSubsidy.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakeSubsidy.fromFields(fields), fromFieldsWithTypes: (item) => StakeSubsidy.fromFieldsWithTypes(item), fromBcs: (data) => StakeSubsidy.fromBcs(data), bcs: StakeSubsidy.bcs, fromJSONField: (field) => StakeSubsidy.fromJSONField(field), fromJSON: (json) => StakeSubsidy.fromJSON(json), fromSuiParsedData: (content) => StakeSubsidy.fromSuiParsedData(content), fromSuiObjectData: (content) => StakeSubsidy.fromSuiObjectData(content), fetch: async (client, id) => StakeSubsidy.fetch(client, id), new: (fields) => { return new StakeSubsidy([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakeSubsidy.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakeSubsidy.reified()); }
    static get p() { return StakeSubsidy.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakeSubsidy", {
            balance: structs_2.Balance.bcs, distribution_counter: bcs_1.bcs.u64(), current_distribution_amount: bcs_1.bcs.u64(), stake_subsidy_period_length: bcs_1.bcs.u64(), stake_subsidy_decrease_rate: bcs_1.bcs.u16(), extra_fields: structs_1.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return StakeSubsidy.reified().new({ balance: (0, reified_1.decodeFromFields)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), fields.balance), distributionCounter: (0, reified_1.decodeFromFields)("u64", fields.distribution_counter), currentDistributionAmount: (0, reified_1.decodeFromFields)("u64", fields.current_distribution_amount), stakeSubsidyPeriodLength: (0, reified_1.decodeFromFields)("u64", fields.stake_subsidy_period_length), stakeSubsidyDecreaseRate: (0, reified_1.decodeFromFields)("u16", fields.stake_subsidy_decrease_rate), extraFields: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.extra_fields) }); }
    static fromFieldsWithTypes(item) {
        if (!isStakeSubsidy(item.type)) {
            throw new Error("not a StakeSubsidy type");
        }
        return StakeSubsidy.reified().new({ balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), item.fields.balance), distributionCounter: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.distribution_counter), currentDistributionAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.current_distribution_amount), stakeSubsidyPeriodLength: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_subsidy_period_length), stakeSubsidyDecreaseRate: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.stake_subsidy_decrease_rate), extraFields: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.extra_fields) });
    }
    static fromBcs(data) { return StakeSubsidy.fromFields(StakeSubsidy.bcs.parse(data)); }
    toJSONField() {
        return {
            balance: this.balance.toJSONField(), distributionCounter: this.distributionCounter.toString(), currentDistributionAmount: this.currentDistributionAmount.toString(), stakeSubsidyPeriodLength: this.stakeSubsidyPeriodLength.toString(), stakeSubsidyDecreaseRate: this.stakeSubsidyDecreaseRate, extraFields: this.extraFields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StakeSubsidy.reified().new({ balance: (0, reified_1.decodeFromJSONField)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), field.balance), distributionCounter: (0, reified_1.decodeFromJSONField)("u64", field.distributionCounter), currentDistributionAmount: (0, reified_1.decodeFromJSONField)("u64", field.currentDistributionAmount), stakeSubsidyPeriodLength: (0, reified_1.decodeFromJSONField)("u64", field.stakeSubsidyPeriodLength), stakeSubsidyDecreaseRate: (0, reified_1.decodeFromJSONField)("u16", field.stakeSubsidyDecreaseRate), extraFields: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.extraFields) }); }
    static fromJSON(json) {
        if (json.$typeName !== StakeSubsidy.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StakeSubsidy.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStakeSubsidy(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StakeSubsidy object`);
    } return StakeSubsidy.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakeSubsidy(data.bcs.type)) {
                throw new Error(`object at is not a StakeSubsidy object`);
            }
            return StakeSubsidy.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakeSubsidy.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakeSubsidy object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeSubsidy(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeSubsidy object`);
        }
        return StakeSubsidy.fromSuiObjectData(res.data);
    }
}
exports.StakeSubsidy = StakeSubsidy;
StakeSubsidy.$typeName = `${index_1.PKG_V17}::stake_subsidy::StakeSubsidy`;
StakeSubsidy.$numTypeParams = 0;
StakeSubsidy.$isPhantom = [];
