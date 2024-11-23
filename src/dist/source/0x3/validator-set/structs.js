"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorSet = exports.ValidatorLeaveEvent = exports.ValidatorJoinEvent = exports.ValidatorEpochInfoEventV2 = exports.ValidatorEpochInfoEvent = void 0;
exports.isValidatorEpochInfoEvent = isValidatorEpochInfoEvent;
exports.isValidatorEpochInfoEventV2 = isValidatorEpochInfoEventV2;
exports.isValidatorJoinEvent = isValidatorJoinEvent;
exports.isValidatorLeaveEvent = isValidatorLeaveEvent;
exports.isValidatorSet = isValidatorSet;
const reified = require("../../../_framework/reified");
const reified_1 = require("../../../_framework/reified");
const util_1 = require("../../../_framework/util");
const structs_1 = require("../../0x2/bag/structs");
const structs_2 = require("../../0x2/object/structs");
const structs_3 = require("../../0x2/table-vec/structs");
const structs_4 = require("../../0x2/table/structs");
const structs_5 = require("../../0x2/vec-map/structs");
const index_1 = require("../index");
const structs_6 = require("../staking-pool/structs");
const structs_7 = require("../validator-wrapper/structs");
const structs_8 = require("../validator/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== ValidatorEpochInfoEvent =============================== */
function isValidatorEpochInfoEvent(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator_set::ValidatorEpochInfoEvent`; }
class ValidatorEpochInfoEvent {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorEpochInfoEvent.$typeName;
        this.$isPhantom = ValidatorEpochInfoEvent.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorEpochInfoEvent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epoch = fields.epoch;
        ;
        this.validatorAddress = fields.validatorAddress;
        ;
        this.referenceGasSurveyQuote = fields.referenceGasSurveyQuote;
        ;
        this.stake = fields.stake;
        ;
        this.commissionRate = fields.commissionRate;
        ;
        this.poolStakingReward = fields.poolStakingReward;
        ;
        this.storageFundStakingReward = fields.storageFundStakingReward;
        ;
        this.poolTokenExchangeRate = fields.poolTokenExchangeRate;
        ;
        this.tallyingRuleReporters = fields.tallyingRuleReporters;
        ;
        this.tallyingRuleGlobalScore = fields.tallyingRuleGlobalScore;
    }
    static reified() { return { typeName: ValidatorEpochInfoEvent.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorEpochInfoEvent.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorEpochInfoEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorEpochInfoEvent.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorEpochInfoEvent.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorEpochInfoEvent.fromBcs(data), bcs: ValidatorEpochInfoEvent.bcs, fromJSONField: (field) => ValidatorEpochInfoEvent.fromJSONField(field), fromJSON: (json) => ValidatorEpochInfoEvent.fromJSON(json), fromSuiParsedData: (content) => ValidatorEpochInfoEvent.fromSuiParsedData(content), fromSuiObjectData: (content) => ValidatorEpochInfoEvent.fromSuiObjectData(content), fetch: async (client, id) => ValidatorEpochInfoEvent.fetch(client, id), new: (fields) => { return new ValidatorEpochInfoEvent([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorEpochInfoEvent.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorEpochInfoEvent.reified()); }
    static get p() { return ValidatorEpochInfoEvent.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorEpochInfoEvent", {
            epoch: bcs_1.bcs.u64(), validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), reference_gas_survey_quote: bcs_1.bcs.u64(), stake: bcs_1.bcs.u64(), commission_rate: bcs_1.bcs.u64(), pool_staking_reward: bcs_1.bcs.u64(), storage_fund_staking_reward: bcs_1.bcs.u64(), pool_token_exchange_rate: structs_6.PoolTokenExchangeRate.bcs, tallying_rule_reporters: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), tallying_rule_global_score: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ValidatorEpochInfoEvent.reified().new({ epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), validatorAddress: (0, reified_1.decodeFromFields)("address", fields.validator_address), referenceGasSurveyQuote: (0, reified_1.decodeFromFields)("u64", fields.reference_gas_survey_quote), stake: (0, reified_1.decodeFromFields)("u64", fields.stake), commissionRate: (0, reified_1.decodeFromFields)("u64", fields.commission_rate), poolStakingReward: (0, reified_1.decodeFromFields)("u64", fields.pool_staking_reward), storageFundStakingReward: (0, reified_1.decodeFromFields)("u64", fields.storage_fund_staking_reward), poolTokenExchangeRate: (0, reified_1.decodeFromFields)(structs_6.PoolTokenExchangeRate.reified(), fields.pool_token_exchange_rate), tallyingRuleReporters: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.tallying_rule_reporters), tallyingRuleGlobalScore: (0, reified_1.decodeFromFields)("u64", fields.tallying_rule_global_score) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorEpochInfoEvent(item.type)) {
            throw new Error("not a ValidatorEpochInfoEvent type");
        }
        return ValidatorEpochInfoEvent.reified().new({ epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), validatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_address), referenceGasSurveyQuote: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.reference_gas_survey_quote), stake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake), commissionRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.commission_rate), poolStakingReward: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_staking_reward), storageFundStakingReward: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.storage_fund_staking_reward), poolTokenExchangeRate: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.PoolTokenExchangeRate.reified(), item.fields.pool_token_exchange_rate), tallyingRuleReporters: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.tallying_rule_reporters), tallyingRuleGlobalScore: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tallying_rule_global_score) });
    }
    static fromBcs(data) { return ValidatorEpochInfoEvent.fromFields(ValidatorEpochInfoEvent.bcs.parse(data)); }
    toJSONField() {
        return {
            epoch: this.epoch.toString(), validatorAddress: this.validatorAddress, referenceGasSurveyQuote: this.referenceGasSurveyQuote.toString(), stake: this.stake.toString(), commissionRate: this.commissionRate.toString(), poolStakingReward: this.poolStakingReward.toString(), storageFundStakingReward: this.storageFundStakingReward.toString(), poolTokenExchangeRate: this.poolTokenExchangeRate.toJSONField(), tallyingRuleReporters: (0, reified_1.fieldToJSON)(`vector<address>`, this.tallyingRuleReporters), tallyingRuleGlobalScore: this.tallyingRuleGlobalScore.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorEpochInfoEvent.reified().new({ epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), validatorAddress: (0, reified_1.decodeFromJSONField)("address", field.validatorAddress), referenceGasSurveyQuote: (0, reified_1.decodeFromJSONField)("u64", field.referenceGasSurveyQuote), stake: (0, reified_1.decodeFromJSONField)("u64", field.stake), commissionRate: (0, reified_1.decodeFromJSONField)("u64", field.commissionRate), poolStakingReward: (0, reified_1.decodeFromJSONField)("u64", field.poolStakingReward), storageFundStakingReward: (0, reified_1.decodeFromJSONField)("u64", field.storageFundStakingReward), poolTokenExchangeRate: (0, reified_1.decodeFromJSONField)(structs_6.PoolTokenExchangeRate.reified(), field.poolTokenExchangeRate), tallyingRuleReporters: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.tallyingRuleReporters), tallyingRuleGlobalScore: (0, reified_1.decodeFromJSONField)("u64", field.tallyingRuleGlobalScore) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorEpochInfoEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorEpochInfoEvent.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorEpochInfoEvent(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorEpochInfoEvent object`);
    } return ValidatorEpochInfoEvent.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidatorEpochInfoEvent(data.bcs.type)) {
                throw new Error(`object at is not a ValidatorEpochInfoEvent object`);
            }
            return ValidatorEpochInfoEvent.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ValidatorEpochInfoEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorEpochInfoEvent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorEpochInfoEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorEpochInfoEvent object`);
        }
        return ValidatorEpochInfoEvent.fromSuiObjectData(res.data);
    }
}
exports.ValidatorEpochInfoEvent = ValidatorEpochInfoEvent;
ValidatorEpochInfoEvent.$typeName = `${index_1.PKG_V17}::validator_set::ValidatorEpochInfoEvent`;
ValidatorEpochInfoEvent.$numTypeParams = 0;
ValidatorEpochInfoEvent.$isPhantom = [];
/* ============================== ValidatorEpochInfoEventV2 =============================== */
function isValidatorEpochInfoEventV2(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator_set::ValidatorEpochInfoEventV2`; }
class ValidatorEpochInfoEventV2 {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorEpochInfoEventV2.$typeName;
        this.$isPhantom = ValidatorEpochInfoEventV2.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorEpochInfoEventV2.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epoch = fields.epoch;
        ;
        this.validatorAddress = fields.validatorAddress;
        ;
        this.referenceGasSurveyQuote = fields.referenceGasSurveyQuote;
        ;
        this.stake = fields.stake;
        ;
        this.votingPower = fields.votingPower;
        ;
        this.commissionRate = fields.commissionRate;
        ;
        this.poolStakingReward = fields.poolStakingReward;
        ;
        this.storageFundStakingReward = fields.storageFundStakingReward;
        ;
        this.poolTokenExchangeRate = fields.poolTokenExchangeRate;
        ;
        this.tallyingRuleReporters = fields.tallyingRuleReporters;
        ;
        this.tallyingRuleGlobalScore = fields.tallyingRuleGlobalScore;
    }
    static reified() { return { typeName: ValidatorEpochInfoEventV2.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorEpochInfoEventV2.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorEpochInfoEventV2.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorEpochInfoEventV2.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorEpochInfoEventV2.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorEpochInfoEventV2.fromBcs(data), bcs: ValidatorEpochInfoEventV2.bcs, fromJSONField: (field) => ValidatorEpochInfoEventV2.fromJSONField(field), fromJSON: (json) => ValidatorEpochInfoEventV2.fromJSON(json), fromSuiParsedData: (content) => ValidatorEpochInfoEventV2.fromSuiParsedData(content), fromSuiObjectData: (content) => ValidatorEpochInfoEventV2.fromSuiObjectData(content), fetch: async (client, id) => ValidatorEpochInfoEventV2.fetch(client, id), new: (fields) => { return new ValidatorEpochInfoEventV2([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorEpochInfoEventV2.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorEpochInfoEventV2.reified()); }
    static get p() { return ValidatorEpochInfoEventV2.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorEpochInfoEventV2", {
            epoch: bcs_1.bcs.u64(), validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), reference_gas_survey_quote: bcs_1.bcs.u64(), stake: bcs_1.bcs.u64(), voting_power: bcs_1.bcs.u64(), commission_rate: bcs_1.bcs.u64(), pool_staking_reward: bcs_1.bcs.u64(), storage_fund_staking_reward: bcs_1.bcs.u64(), pool_token_exchange_rate: structs_6.PoolTokenExchangeRate.bcs, tallying_rule_reporters: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), tallying_rule_global_score: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ValidatorEpochInfoEventV2.reified().new({ epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), validatorAddress: (0, reified_1.decodeFromFields)("address", fields.validator_address), referenceGasSurveyQuote: (0, reified_1.decodeFromFields)("u64", fields.reference_gas_survey_quote), stake: (0, reified_1.decodeFromFields)("u64", fields.stake), votingPower: (0, reified_1.decodeFromFields)("u64", fields.voting_power), commissionRate: (0, reified_1.decodeFromFields)("u64", fields.commission_rate), poolStakingReward: (0, reified_1.decodeFromFields)("u64", fields.pool_staking_reward), storageFundStakingReward: (0, reified_1.decodeFromFields)("u64", fields.storage_fund_staking_reward), poolTokenExchangeRate: (0, reified_1.decodeFromFields)(structs_6.PoolTokenExchangeRate.reified(), fields.pool_token_exchange_rate), tallyingRuleReporters: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.tallying_rule_reporters), tallyingRuleGlobalScore: (0, reified_1.decodeFromFields)("u64", fields.tallying_rule_global_score) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorEpochInfoEventV2(item.type)) {
            throw new Error("not a ValidatorEpochInfoEventV2 type");
        }
        return ValidatorEpochInfoEventV2.reified().new({ epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), validatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_address), referenceGasSurveyQuote: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.reference_gas_survey_quote), stake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake), votingPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_power), commissionRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.commission_rate), poolStakingReward: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_staking_reward), storageFundStakingReward: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.storage_fund_staking_reward), poolTokenExchangeRate: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.PoolTokenExchangeRate.reified(), item.fields.pool_token_exchange_rate), tallyingRuleReporters: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.tallying_rule_reporters), tallyingRuleGlobalScore: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.tallying_rule_global_score) });
    }
    static fromBcs(data) { return ValidatorEpochInfoEventV2.fromFields(ValidatorEpochInfoEventV2.bcs.parse(data)); }
    toJSONField() {
        return {
            epoch: this.epoch.toString(), validatorAddress: this.validatorAddress, referenceGasSurveyQuote: this.referenceGasSurveyQuote.toString(), stake: this.stake.toString(), votingPower: this.votingPower.toString(), commissionRate: this.commissionRate.toString(), poolStakingReward: this.poolStakingReward.toString(), storageFundStakingReward: this.storageFundStakingReward.toString(), poolTokenExchangeRate: this.poolTokenExchangeRate.toJSONField(), tallyingRuleReporters: (0, reified_1.fieldToJSON)(`vector<address>`, this.tallyingRuleReporters), tallyingRuleGlobalScore: this.tallyingRuleGlobalScore.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorEpochInfoEventV2.reified().new({ epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), validatorAddress: (0, reified_1.decodeFromJSONField)("address", field.validatorAddress), referenceGasSurveyQuote: (0, reified_1.decodeFromJSONField)("u64", field.referenceGasSurveyQuote), stake: (0, reified_1.decodeFromJSONField)("u64", field.stake), votingPower: (0, reified_1.decodeFromJSONField)("u64", field.votingPower), commissionRate: (0, reified_1.decodeFromJSONField)("u64", field.commissionRate), poolStakingReward: (0, reified_1.decodeFromJSONField)("u64", field.poolStakingReward), storageFundStakingReward: (0, reified_1.decodeFromJSONField)("u64", field.storageFundStakingReward), poolTokenExchangeRate: (0, reified_1.decodeFromJSONField)(structs_6.PoolTokenExchangeRate.reified(), field.poolTokenExchangeRate), tallyingRuleReporters: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.tallyingRuleReporters), tallyingRuleGlobalScore: (0, reified_1.decodeFromJSONField)("u64", field.tallyingRuleGlobalScore) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorEpochInfoEventV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorEpochInfoEventV2.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorEpochInfoEventV2(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorEpochInfoEventV2 object`);
    } return ValidatorEpochInfoEventV2.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidatorEpochInfoEventV2(data.bcs.type)) {
                throw new Error(`object at is not a ValidatorEpochInfoEventV2 object`);
            }
            return ValidatorEpochInfoEventV2.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ValidatorEpochInfoEventV2.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorEpochInfoEventV2 object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorEpochInfoEventV2(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorEpochInfoEventV2 object`);
        }
        return ValidatorEpochInfoEventV2.fromSuiObjectData(res.data);
    }
}
exports.ValidatorEpochInfoEventV2 = ValidatorEpochInfoEventV2;
ValidatorEpochInfoEventV2.$typeName = `${index_1.PKG_V17}::validator_set::ValidatorEpochInfoEventV2`;
ValidatorEpochInfoEventV2.$numTypeParams = 0;
ValidatorEpochInfoEventV2.$isPhantom = [];
/* ============================== ValidatorJoinEvent =============================== */
function isValidatorJoinEvent(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator_set::ValidatorJoinEvent`; }
class ValidatorJoinEvent {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorJoinEvent.$typeName;
        this.$isPhantom = ValidatorJoinEvent.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorJoinEvent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epoch = fields.epoch;
        ;
        this.validatorAddress = fields.validatorAddress;
        ;
        this.stakingPoolId = fields.stakingPoolId;
    }
    static reified() { return { typeName: ValidatorJoinEvent.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorJoinEvent.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorJoinEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorJoinEvent.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorJoinEvent.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorJoinEvent.fromBcs(data), bcs: ValidatorJoinEvent.bcs, fromJSONField: (field) => ValidatorJoinEvent.fromJSONField(field), fromJSON: (json) => ValidatorJoinEvent.fromJSON(json), fromSuiParsedData: (content) => ValidatorJoinEvent.fromSuiParsedData(content), fromSuiObjectData: (content) => ValidatorJoinEvent.fromSuiObjectData(content), fetch: async (client, id) => ValidatorJoinEvent.fetch(client, id), new: (fields) => { return new ValidatorJoinEvent([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorJoinEvent.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorJoinEvent.reified()); }
    static get p() { return ValidatorJoinEvent.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorJoinEvent", {
            epoch: bcs_1.bcs.u64(), validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), staking_pool_id: structs_2.ID.bcs
        });
    }
    ;
    static fromFields(fields) { return ValidatorJoinEvent.reified().new({ epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), validatorAddress: (0, reified_1.decodeFromFields)("address", fields.validator_address), stakingPoolId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.staking_pool_id) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorJoinEvent(item.type)) {
            throw new Error("not a ValidatorJoinEvent type");
        }
        return ValidatorJoinEvent.reified().new({ epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), validatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_address), stakingPoolId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.staking_pool_id) });
    }
    static fromBcs(data) { return ValidatorJoinEvent.fromFields(ValidatorJoinEvent.bcs.parse(data)); }
    toJSONField() {
        return {
            epoch: this.epoch.toString(), validatorAddress: this.validatorAddress, stakingPoolId: this.stakingPoolId,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorJoinEvent.reified().new({ epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), validatorAddress: (0, reified_1.decodeFromJSONField)("address", field.validatorAddress), stakingPoolId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.stakingPoolId) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorJoinEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorJoinEvent.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorJoinEvent(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorJoinEvent object`);
    } return ValidatorJoinEvent.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidatorJoinEvent(data.bcs.type)) {
                throw new Error(`object at is not a ValidatorJoinEvent object`);
            }
            return ValidatorJoinEvent.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ValidatorJoinEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorJoinEvent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorJoinEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorJoinEvent object`);
        }
        return ValidatorJoinEvent.fromSuiObjectData(res.data);
    }
}
exports.ValidatorJoinEvent = ValidatorJoinEvent;
ValidatorJoinEvent.$typeName = `${index_1.PKG_V17}::validator_set::ValidatorJoinEvent`;
ValidatorJoinEvent.$numTypeParams = 0;
ValidatorJoinEvent.$isPhantom = [];
/* ============================== ValidatorLeaveEvent =============================== */
function isValidatorLeaveEvent(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator_set::ValidatorLeaveEvent`; }
class ValidatorLeaveEvent {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorLeaveEvent.$typeName;
        this.$isPhantom = ValidatorLeaveEvent.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorLeaveEvent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epoch = fields.epoch;
        ;
        this.validatorAddress = fields.validatorAddress;
        ;
        this.stakingPoolId = fields.stakingPoolId;
        ;
        this.isVoluntary = fields.isVoluntary;
    }
    static reified() { return { typeName: ValidatorLeaveEvent.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorLeaveEvent.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorLeaveEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorLeaveEvent.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorLeaveEvent.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorLeaveEvent.fromBcs(data), bcs: ValidatorLeaveEvent.bcs, fromJSONField: (field) => ValidatorLeaveEvent.fromJSONField(field), fromJSON: (json) => ValidatorLeaveEvent.fromJSON(json), fromSuiParsedData: (content) => ValidatorLeaveEvent.fromSuiParsedData(content), fromSuiObjectData: (content) => ValidatorLeaveEvent.fromSuiObjectData(content), fetch: async (client, id) => ValidatorLeaveEvent.fetch(client, id), new: (fields) => { return new ValidatorLeaveEvent([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorLeaveEvent.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorLeaveEvent.reified()); }
    static get p() { return ValidatorLeaveEvent.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorLeaveEvent", {
            epoch: bcs_1.bcs.u64(), validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), staking_pool_id: structs_2.ID.bcs, is_voluntary: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return ValidatorLeaveEvent.reified().new({ epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), validatorAddress: (0, reified_1.decodeFromFields)("address", fields.validator_address), stakingPoolId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.staking_pool_id), isVoluntary: (0, reified_1.decodeFromFields)("bool", fields.is_voluntary) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorLeaveEvent(item.type)) {
            throw new Error("not a ValidatorLeaveEvent type");
        }
        return ValidatorLeaveEvent.reified().new({ epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), validatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_address), stakingPoolId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.staking_pool_id), isVoluntary: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_voluntary) });
    }
    static fromBcs(data) { return ValidatorLeaveEvent.fromFields(ValidatorLeaveEvent.bcs.parse(data)); }
    toJSONField() {
        return {
            epoch: this.epoch.toString(), validatorAddress: this.validatorAddress, stakingPoolId: this.stakingPoolId, isVoluntary: this.isVoluntary,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorLeaveEvent.reified().new({ epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), validatorAddress: (0, reified_1.decodeFromJSONField)("address", field.validatorAddress), stakingPoolId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.stakingPoolId), isVoluntary: (0, reified_1.decodeFromJSONField)("bool", field.isVoluntary) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorLeaveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorLeaveEvent.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorLeaveEvent(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorLeaveEvent object`);
    } return ValidatorLeaveEvent.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidatorLeaveEvent(data.bcs.type)) {
                throw new Error(`object at is not a ValidatorLeaveEvent object`);
            }
            return ValidatorLeaveEvent.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ValidatorLeaveEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorLeaveEvent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorLeaveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorLeaveEvent object`);
        }
        return ValidatorLeaveEvent.fromSuiObjectData(res.data);
    }
}
exports.ValidatorLeaveEvent = ValidatorLeaveEvent;
ValidatorLeaveEvent.$typeName = `${index_1.PKG_V17}::validator_set::ValidatorLeaveEvent`;
ValidatorLeaveEvent.$numTypeParams = 0;
ValidatorLeaveEvent.$isPhantom = [];
/* ============================== ValidatorSet =============================== */
function isValidatorSet(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator_set::ValidatorSet`; }
class ValidatorSet {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorSet.$typeName;
        this.$isPhantom = ValidatorSet.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorSet.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.totalStake = fields.totalStake;
        ;
        this.activeValidators = fields.activeValidators;
        ;
        this.pendingActiveValidators = fields.pendingActiveValidators;
        ;
        this.pendingRemovals = fields.pendingRemovals;
        ;
        this.stakingPoolMappings = fields.stakingPoolMappings;
        ;
        this.inactiveValidators = fields.inactiveValidators;
        ;
        this.validatorCandidates = fields.validatorCandidates;
        ;
        this.atRiskValidators = fields.atRiskValidators;
        ;
        this.extraFields = fields.extraFields;
    }
    static reified() { return { typeName: ValidatorSet.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorSet.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorSet.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorSet.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorSet.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorSet.fromBcs(data), bcs: ValidatorSet.bcs, fromJSONField: (field) => ValidatorSet.fromJSONField(field), fromJSON: (json) => ValidatorSet.fromJSON(json), fromSuiParsedData: (content) => ValidatorSet.fromSuiParsedData(content), fromSuiObjectData: (content) => ValidatorSet.fromSuiObjectData(content), fetch: async (client, id) => ValidatorSet.fetch(client, id), new: (fields) => { return new ValidatorSet([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorSet.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorSet.reified()); }
    static get p() { return ValidatorSet.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorSet", {
            total_stake: bcs_1.bcs.u64(), active_validators: bcs_1.bcs.vector(structs_8.Validator.bcs), pending_active_validators: structs_3.TableVec.bcs, pending_removals: bcs_1.bcs.vector(bcs_1.bcs.u64()), staking_pool_mappings: structs_4.Table.bcs, inactive_validators: structs_4.Table.bcs, validator_candidates: structs_4.Table.bcs, at_risk_validators: structs_5.VecMap.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), bcs_1.bcs.u64()), extra_fields: structs_1.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return ValidatorSet.reified().new({ totalStake: (0, reified_1.decodeFromFields)("u64", fields.total_stake), activeValidators: (0, reified_1.decodeFromFields)(reified.vector(structs_8.Validator.reified()), fields.active_validators), pendingActiveValidators: (0, reified_1.decodeFromFields)(structs_3.TableVec.reified(reified.phantom(structs_8.Validator.reified())), fields.pending_active_validators), pendingRemovals: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.pending_removals), stakingPoolMappings: (0, reified_1.decodeFromFields)(structs_4.Table.reified(reified.phantom(structs_2.ID.reified()), reified.phantom("address")), fields.staking_pool_mappings), inactiveValidators: (0, reified_1.decodeFromFields)(structs_4.Table.reified(reified.phantom(structs_2.ID.reified()), reified.phantom(structs_7.ValidatorWrapper.reified())), fields.inactive_validators), validatorCandidates: (0, reified_1.decodeFromFields)(structs_4.Table.reified(reified.phantom("address"), reified.phantom(structs_7.ValidatorWrapper.reified())), fields.validator_candidates), atRiskValidators: (0, reified_1.decodeFromFields)(structs_5.VecMap.reified("address", "u64"), fields.at_risk_validators), extraFields: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.extra_fields) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorSet(item.type)) {
            throw new Error("not a ValidatorSet type");
        }
        return ValidatorSet.reified().new({ totalStake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_stake), activeValidators: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_8.Validator.reified()), item.fields.active_validators), pendingActiveValidators: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.TableVec.reified(reified.phantom(structs_8.Validator.reified())), item.fields.pending_active_validators), pendingRemovals: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.pending_removals), stakingPoolMappings: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Table.reified(reified.phantom(structs_2.ID.reified()), reified.phantom("address")), item.fields.staking_pool_mappings), inactiveValidators: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Table.reified(reified.phantom(structs_2.ID.reified()), reified.phantom(structs_7.ValidatorWrapper.reified())), item.fields.inactive_validators), validatorCandidates: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Table.reified(reified.phantom("address"), reified.phantom(structs_7.ValidatorWrapper.reified())), item.fields.validator_candidates), atRiskValidators: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.VecMap.reified("address", "u64"), item.fields.at_risk_validators), extraFields: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.extra_fields) });
    }
    static fromBcs(data) { return ValidatorSet.fromFields(ValidatorSet.bcs.parse(data)); }
    toJSONField() {
        return {
            totalStake: this.totalStake.toString(), activeValidators: (0, reified_1.fieldToJSON)(`vector<${structs_8.Validator.$typeName}>`, this.activeValidators), pendingActiveValidators: this.pendingActiveValidators.toJSONField(), pendingRemovals: (0, reified_1.fieldToJSON)(`vector<u64>`, this.pendingRemovals), stakingPoolMappings: this.stakingPoolMappings.toJSONField(), inactiveValidators: this.inactiveValidators.toJSONField(), validatorCandidates: this.validatorCandidates.toJSONField(), atRiskValidators: this.atRiskValidators.toJSONField(), extraFields: this.extraFields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorSet.reified().new({ totalStake: (0, reified_1.decodeFromJSONField)("u64", field.totalStake), activeValidators: (0, reified_1.decodeFromJSONField)(reified.vector(structs_8.Validator.reified()), field.activeValidators), pendingActiveValidators: (0, reified_1.decodeFromJSONField)(structs_3.TableVec.reified(reified.phantom(structs_8.Validator.reified())), field.pendingActiveValidators), pendingRemovals: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.pendingRemovals), stakingPoolMappings: (0, reified_1.decodeFromJSONField)(structs_4.Table.reified(reified.phantom(structs_2.ID.reified()), reified.phantom("address")), field.stakingPoolMappings), inactiveValidators: (0, reified_1.decodeFromJSONField)(structs_4.Table.reified(reified.phantom(structs_2.ID.reified()), reified.phantom(structs_7.ValidatorWrapper.reified())), field.inactiveValidators), validatorCandidates: (0, reified_1.decodeFromJSONField)(structs_4.Table.reified(reified.phantom("address"), reified.phantom(structs_7.ValidatorWrapper.reified())), field.validatorCandidates), atRiskValidators: (0, reified_1.decodeFromJSONField)(structs_5.VecMap.reified("address", "u64"), field.atRiskValidators), extraFields: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.extraFields) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorSet.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorSet.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorSet(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorSet object`);
    } return ValidatorSet.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidatorSet(data.bcs.type)) {
                throw new Error(`object at is not a ValidatorSet object`);
            }
            return ValidatorSet.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ValidatorSet.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorSet object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorSet(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorSet object`);
        }
        return ValidatorSet.fromSuiObjectData(res.data);
    }
}
exports.ValidatorSet = ValidatorSet;
ValidatorSet.$typeName = `${index_1.PKG_V17}::validator_set::ValidatorSet`;
ValidatorSet.$numTypeParams = 0;
ValidatorSet.$isPhantom = [];
