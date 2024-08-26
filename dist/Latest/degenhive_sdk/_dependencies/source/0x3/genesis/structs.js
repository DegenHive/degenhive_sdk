"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenDistributionSchedule = exports.TokenAllocation = exports.GenesisValidatorMetadata = exports.GenesisChainParameters = void 0;
exports.isGenesisChainParameters = isGenesisChainParameters;
exports.isGenesisValidatorMetadata = isGenesisValidatorMetadata;
exports.isTokenAllocation = isTokenAllocation;
exports.isTokenDistributionSchedule = isTokenDistributionSchedule;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/option/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== GenesisChainParameters =============================== */
function isGenesisChainParameters(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3::genesis::GenesisChainParameters"; }
class GenesisChainParameters {
    constructor(typeArgs, fields) {
        this.$typeName = GenesisChainParameters.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(GenesisChainParameters.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.protocolVersion = fields.protocolVersion;
        ;
        this.chainStartTimestampMs = fields.chainStartTimestampMs;
        ;
        this.epochDurationMs = fields.epochDurationMs;
        ;
        this.stakeSubsidyStartEpoch = fields.stakeSubsidyStartEpoch;
        ;
        this.stakeSubsidyInitialDistributionAmount = fields.stakeSubsidyInitialDistributionAmount;
        ;
        this.stakeSubsidyPeriodLength = fields.stakeSubsidyPeriodLength;
        ;
        this.stakeSubsidyDecreaseRate = fields.stakeSubsidyDecreaseRate;
        ;
        this.maxValidatorCount = fields.maxValidatorCount;
        ;
        this.minValidatorJoiningStake = fields.minValidatorJoiningStake;
        ;
        this.validatorLowStakeThreshold = fields.validatorLowStakeThreshold;
        ;
        this.validatorVeryLowStakeThreshold = fields.validatorVeryLowStakeThreshold;
        ;
        this.validatorLowStakeGracePeriod = fields.validatorLowStakeGracePeriod;
    }
    static reified() { return { typeName: GenesisChainParameters.$typeName, fullTypeName: (0, util_1.composeSuiType)(GenesisChainParameters.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => GenesisChainParameters.fromFields(fields), fromFieldsWithTypes: (item) => GenesisChainParameters.fromFieldsWithTypes(item), fromBcs: (data) => GenesisChainParameters.fromBcs(data), bcs: GenesisChainParameters.bcs, fromJSONField: (field) => GenesisChainParameters.fromJSONField(field), fromJSON: (json) => GenesisChainParameters.fromJSON(json), fromSuiParsedData: (content) => GenesisChainParameters.fromSuiParsedData(content), fetch: async (client, id) => GenesisChainParameters.fetch(client, id), new: (fields) => { return new GenesisChainParameters([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GenesisChainParameters.reified(); }
    static phantom() { return (0, reified_1.phantom)(GenesisChainParameters.reified()); }
    static get p() { return GenesisChainParameters.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GenesisChainParameters", {
            protocol_version: bcs_1.bcs.u64(), chain_start_timestamp_ms: bcs_1.bcs.u64(), epoch_duration_ms: bcs_1.bcs.u64(), stake_subsidy_start_epoch: bcs_1.bcs.u64(), stake_subsidy_initial_distribution_amount: bcs_1.bcs.u64(), stake_subsidy_period_length: bcs_1.bcs.u64(), stake_subsidy_decrease_rate: bcs_1.bcs.u16(), max_validator_count: bcs_1.bcs.u64(), min_validator_joining_stake: bcs_1.bcs.u64(), validator_low_stake_threshold: bcs_1.bcs.u64(), validator_very_low_stake_threshold: bcs_1.bcs.u64(), validator_low_stake_grace_period: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return GenesisChainParameters.reified().new({ protocolVersion: (0, reified_1.decodeFromFields)("u64", fields.protocol_version), chainStartTimestampMs: (0, reified_1.decodeFromFields)("u64", fields.chain_start_timestamp_ms), epochDurationMs: (0, reified_1.decodeFromFields)("u64", fields.epoch_duration_ms), stakeSubsidyStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.stake_subsidy_start_epoch), stakeSubsidyInitialDistributionAmount: (0, reified_1.decodeFromFields)("u64", fields.stake_subsidy_initial_distribution_amount), stakeSubsidyPeriodLength: (0, reified_1.decodeFromFields)("u64", fields.stake_subsidy_period_length), stakeSubsidyDecreaseRate: (0, reified_1.decodeFromFields)("u16", fields.stake_subsidy_decrease_rate), maxValidatorCount: (0, reified_1.decodeFromFields)("u64", fields.max_validator_count), minValidatorJoiningStake: (0, reified_1.decodeFromFields)("u64", fields.min_validator_joining_stake), validatorLowStakeThreshold: (0, reified_1.decodeFromFields)("u64", fields.validator_low_stake_threshold), validatorVeryLowStakeThreshold: (0, reified_1.decodeFromFields)("u64", fields.validator_very_low_stake_threshold), validatorLowStakeGracePeriod: (0, reified_1.decodeFromFields)("u64", fields.validator_low_stake_grace_period) }); }
    static fromFieldsWithTypes(item) {
        if (!isGenesisChainParameters(item.type)) {
            throw new Error("not a GenesisChainParameters type");
        }
        return GenesisChainParameters.reified().new({ protocolVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_version), chainStartTimestampMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.chain_start_timestamp_ms), epochDurationMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch_duration_ms), stakeSubsidyStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_subsidy_start_epoch), stakeSubsidyInitialDistributionAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_subsidy_initial_distribution_amount), stakeSubsidyPeriodLength: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_subsidy_period_length), stakeSubsidyDecreaseRate: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.stake_subsidy_decrease_rate), maxValidatorCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_validator_count), minValidatorJoiningStake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_validator_joining_stake), validatorLowStakeThreshold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_low_stake_threshold), validatorVeryLowStakeThreshold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_very_low_stake_threshold), validatorLowStakeGracePeriod: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_low_stake_grace_period) });
    }
    static fromBcs(data) { return GenesisChainParameters.fromFields(GenesisChainParameters.bcs.parse(data)); }
    toJSONField() {
        return {
            protocolVersion: this.protocolVersion.toString(), chainStartTimestampMs: this.chainStartTimestampMs.toString(), epochDurationMs: this.epochDurationMs.toString(), stakeSubsidyStartEpoch: this.stakeSubsidyStartEpoch.toString(), stakeSubsidyInitialDistributionAmount: this.stakeSubsidyInitialDistributionAmount.toString(), stakeSubsidyPeriodLength: this.stakeSubsidyPeriodLength.toString(), stakeSubsidyDecreaseRate: this.stakeSubsidyDecreaseRate, maxValidatorCount: this.maxValidatorCount.toString(), minValidatorJoiningStake: this.minValidatorJoiningStake.toString(), validatorLowStakeThreshold: this.validatorLowStakeThreshold.toString(), validatorVeryLowStakeThreshold: this.validatorVeryLowStakeThreshold.toString(), validatorLowStakeGracePeriod: this.validatorLowStakeGracePeriod.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GenesisChainParameters.reified().new({ protocolVersion: (0, reified_1.decodeFromJSONField)("u64", field.protocolVersion), chainStartTimestampMs: (0, reified_1.decodeFromJSONField)("u64", field.chainStartTimestampMs), epochDurationMs: (0, reified_1.decodeFromJSONField)("u64", field.epochDurationMs), stakeSubsidyStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.stakeSubsidyStartEpoch), stakeSubsidyInitialDistributionAmount: (0, reified_1.decodeFromJSONField)("u64", field.stakeSubsidyInitialDistributionAmount), stakeSubsidyPeriodLength: (0, reified_1.decodeFromJSONField)("u64", field.stakeSubsidyPeriodLength), stakeSubsidyDecreaseRate: (0, reified_1.decodeFromJSONField)("u16", field.stakeSubsidyDecreaseRate), maxValidatorCount: (0, reified_1.decodeFromJSONField)("u64", field.maxValidatorCount), minValidatorJoiningStake: (0, reified_1.decodeFromJSONField)("u64", field.minValidatorJoiningStake), validatorLowStakeThreshold: (0, reified_1.decodeFromJSONField)("u64", field.validatorLowStakeThreshold), validatorVeryLowStakeThreshold: (0, reified_1.decodeFromJSONField)("u64", field.validatorVeryLowStakeThreshold), validatorLowStakeGracePeriod: (0, reified_1.decodeFromJSONField)("u64", field.validatorLowStakeGracePeriod) }); }
    static fromJSON(json) {
        if (json.$typeName !== GenesisChainParameters.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GenesisChainParameters.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGenesisChainParameters(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GenesisChainParameters object`);
    } return GenesisChainParameters.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GenesisChainParameters object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGenesisChainParameters(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GenesisChainParameters object`);
        }
        return GenesisChainParameters.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GenesisChainParameters = GenesisChainParameters;
GenesisChainParameters.$typeName = "0x3::genesis::GenesisChainParameters";
GenesisChainParameters.$numTypeParams = 0;
/* ============================== GenesisValidatorMetadata =============================== */
function isGenesisValidatorMetadata(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3::genesis::GenesisValidatorMetadata"; }
class GenesisValidatorMetadata {
    constructor(typeArgs, fields) {
        this.$typeName = GenesisValidatorMetadata.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(GenesisValidatorMetadata.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.name = fields.name;
        ;
        this.description = fields.description;
        ;
        this.imageUrl = fields.imageUrl;
        ;
        this.projectUrl = fields.projectUrl;
        ;
        this.suiAddress = fields.suiAddress;
        ;
        this.gasPrice = fields.gasPrice;
        ;
        this.commissionRate = fields.commissionRate;
        ;
        this.protocolPublicKey = fields.protocolPublicKey;
        ;
        this.proofOfPossession = fields.proofOfPossession;
        ;
        this.networkPublicKey = fields.networkPublicKey;
        ;
        this.workerPublicKey = fields.workerPublicKey;
        ;
        this.networkAddress = fields.networkAddress;
        ;
        this.p2PAddress = fields.p2PAddress;
        ;
        this.primaryAddress = fields.primaryAddress;
        ;
        this.workerAddress = fields.workerAddress;
    }
    static reified() { return { typeName: GenesisValidatorMetadata.$typeName, fullTypeName: (0, util_1.composeSuiType)(GenesisValidatorMetadata.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => GenesisValidatorMetadata.fromFields(fields), fromFieldsWithTypes: (item) => GenesisValidatorMetadata.fromFieldsWithTypes(item), fromBcs: (data) => GenesisValidatorMetadata.fromBcs(data), bcs: GenesisValidatorMetadata.bcs, fromJSONField: (field) => GenesisValidatorMetadata.fromJSONField(field), fromJSON: (json) => GenesisValidatorMetadata.fromJSON(json), fromSuiParsedData: (content) => GenesisValidatorMetadata.fromSuiParsedData(content), fetch: async (client, id) => GenesisValidatorMetadata.fetch(client, id), new: (fields) => { return new GenesisValidatorMetadata([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GenesisValidatorMetadata.reified(); }
    static phantom() { return (0, reified_1.phantom)(GenesisValidatorMetadata.reified()); }
    static get p() { return GenesisValidatorMetadata.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GenesisValidatorMetadata", {
            name: bcs_1.bcs.vector(bcs_1.bcs.u8()), description: bcs_1.bcs.vector(bcs_1.bcs.u8()), image_url: bcs_1.bcs.vector(bcs_1.bcs.u8()), project_url: bcs_1.bcs.vector(bcs_1.bcs.u8()), sui_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), gas_price: bcs_1.bcs.u64(), commission_rate: bcs_1.bcs.u64(), protocol_public_key: bcs_1.bcs.vector(bcs_1.bcs.u8()), proof_of_possession: bcs_1.bcs.vector(bcs_1.bcs.u8()), network_public_key: bcs_1.bcs.vector(bcs_1.bcs.u8()), worker_public_key: bcs_1.bcs.vector(bcs_1.bcs.u8()), network_address: bcs_1.bcs.vector(bcs_1.bcs.u8()), p2p_address: bcs_1.bcs.vector(bcs_1.bcs.u8()), primary_address: bcs_1.bcs.vector(bcs_1.bcs.u8()), worker_address: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return GenesisValidatorMetadata.reified().new({ name: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.name), description: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.description), imageUrl: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.image_url), projectUrl: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.project_url), suiAddress: (0, reified_1.decodeFromFields)("address", fields.sui_address), gasPrice: (0, reified_1.decodeFromFields)("u64", fields.gas_price), commissionRate: (0, reified_1.decodeFromFields)("u64", fields.commission_rate), protocolPublicKey: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.protocol_public_key), proofOfPossession: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.proof_of_possession), networkPublicKey: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.network_public_key), workerPublicKey: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.worker_public_key), networkAddress: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.network_address), p2PAddress: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.p2p_address), primaryAddress: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.primary_address), workerAddress: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.worker_address) }); }
    static fromFieldsWithTypes(item) {
        if (!isGenesisValidatorMetadata(item.type)) {
            throw new Error("not a GenesisValidatorMetadata type");
        }
        return GenesisValidatorMetadata.reified().new({ name: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.name), description: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.description), imageUrl: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.image_url), projectUrl: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.project_url), suiAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sui_address), gasPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gas_price), commissionRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.commission_rate), protocolPublicKey: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.protocol_public_key), proofOfPossession: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.proof_of_possession), networkPublicKey: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.network_public_key), workerPublicKey: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.worker_public_key), networkAddress: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.network_address), p2PAddress: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.p2p_address), primaryAddress: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.primary_address), workerAddress: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.worker_address) });
    }
    static fromBcs(data) { return GenesisValidatorMetadata.fromFields(GenesisValidatorMetadata.bcs.parse(data)); }
    toJSONField() {
        return {
            name: (0, reified_1.fieldToJSON)(`vector<u8>`, this.name), description: (0, reified_1.fieldToJSON)(`vector<u8>`, this.description), imageUrl: (0, reified_1.fieldToJSON)(`vector<u8>`, this.imageUrl), projectUrl: (0, reified_1.fieldToJSON)(`vector<u8>`, this.projectUrl), suiAddress: this.suiAddress, gasPrice: this.gasPrice.toString(), commissionRate: this.commissionRate.toString(), protocolPublicKey: (0, reified_1.fieldToJSON)(`vector<u8>`, this.protocolPublicKey), proofOfPossession: (0, reified_1.fieldToJSON)(`vector<u8>`, this.proofOfPossession), networkPublicKey: (0, reified_1.fieldToJSON)(`vector<u8>`, this.networkPublicKey), workerPublicKey: (0, reified_1.fieldToJSON)(`vector<u8>`, this.workerPublicKey), networkAddress: (0, reified_1.fieldToJSON)(`vector<u8>`, this.networkAddress), p2PAddress: (0, reified_1.fieldToJSON)(`vector<u8>`, this.p2PAddress), primaryAddress: (0, reified_1.fieldToJSON)(`vector<u8>`, this.primaryAddress), workerAddress: (0, reified_1.fieldToJSON)(`vector<u8>`, this.workerAddress),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GenesisValidatorMetadata.reified().new({ name: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.name), description: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.description), imageUrl: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.imageUrl), projectUrl: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.projectUrl), suiAddress: (0, reified_1.decodeFromJSONField)("address", field.suiAddress), gasPrice: (0, reified_1.decodeFromJSONField)("u64", field.gasPrice), commissionRate: (0, reified_1.decodeFromJSONField)("u64", field.commissionRate), protocolPublicKey: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.protocolPublicKey), proofOfPossession: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.proofOfPossession), networkPublicKey: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.networkPublicKey), workerPublicKey: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.workerPublicKey), networkAddress: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.networkAddress), p2PAddress: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.p2PAddress), primaryAddress: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.primaryAddress), workerAddress: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.workerAddress) }); }
    static fromJSON(json) {
        if (json.$typeName !== GenesisValidatorMetadata.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GenesisValidatorMetadata.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGenesisValidatorMetadata(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GenesisValidatorMetadata object`);
    } return GenesisValidatorMetadata.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GenesisValidatorMetadata object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGenesisValidatorMetadata(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GenesisValidatorMetadata object`);
        }
        return GenesisValidatorMetadata.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.GenesisValidatorMetadata = GenesisValidatorMetadata;
GenesisValidatorMetadata.$typeName = "0x3::genesis::GenesisValidatorMetadata";
GenesisValidatorMetadata.$numTypeParams = 0;
/* ============================== TokenAllocation =============================== */
function isTokenAllocation(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3::genesis::TokenAllocation"; }
class TokenAllocation {
    constructor(typeArgs, fields) {
        this.$typeName = TokenAllocation.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TokenAllocation.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.recipientAddress = fields.recipientAddress;
        ;
        this.amountMist = fields.amountMist;
        ;
        this.stakedWithValidator = fields.stakedWithValidator;
    }
    static reified() { return { typeName: TokenAllocation.$typeName, fullTypeName: (0, util_1.composeSuiType)(TokenAllocation.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => TokenAllocation.fromFields(fields), fromFieldsWithTypes: (item) => TokenAllocation.fromFieldsWithTypes(item), fromBcs: (data) => TokenAllocation.fromBcs(data), bcs: TokenAllocation.bcs, fromJSONField: (field) => TokenAllocation.fromJSONField(field), fromJSON: (json) => TokenAllocation.fromJSON(json), fromSuiParsedData: (content) => TokenAllocation.fromSuiParsedData(content), fetch: async (client, id) => TokenAllocation.fetch(client, id), new: (fields) => { return new TokenAllocation([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TokenAllocation.reified(); }
    static phantom() { return (0, reified_1.phantom)(TokenAllocation.reified()); }
    static get p() { return TokenAllocation.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TokenAllocation", {
            recipient_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), amount_mist: bcs_1.bcs.u64(), staked_with_validator: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }))
        });
    }
    ;
    static fromFields(fields) { return TokenAllocation.reified().new({ recipientAddress: (0, reified_1.decodeFromFields)("address", fields.recipient_address), amountMist: (0, reified_1.decodeFromFields)("u64", fields.amount_mist), stakedWithValidator: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.staked_with_validator) }); }
    static fromFieldsWithTypes(item) {
        if (!isTokenAllocation(item.type)) {
            throw new Error("not a TokenAllocation type");
        }
        return TokenAllocation.reified().new({ recipientAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.recipient_address), amountMist: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount_mist), stakedWithValidator: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.staked_with_validator) });
    }
    static fromBcs(data) { return TokenAllocation.fromFields(TokenAllocation.bcs.parse(data)); }
    toJSONField() {
        return {
            recipientAddress: this.recipientAddress, amountMist: this.amountMist.toString(), stakedWithValidator: (0, reified_1.fieldToJSON)(`0x1::option::Option<address>`, this.stakedWithValidator),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TokenAllocation.reified().new({ recipientAddress: (0, reified_1.decodeFromJSONField)("address", field.recipientAddress), amountMist: (0, reified_1.decodeFromJSONField)("u64", field.amountMist), stakedWithValidator: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.stakedWithValidator) }); }
    static fromJSON(json) {
        if (json.$typeName !== TokenAllocation.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TokenAllocation.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTokenAllocation(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TokenAllocation object`);
    } return TokenAllocation.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TokenAllocation object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTokenAllocation(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TokenAllocation object`);
        }
        return TokenAllocation.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TokenAllocation = TokenAllocation;
TokenAllocation.$typeName = "0x3::genesis::TokenAllocation";
TokenAllocation.$numTypeParams = 0;
/* ============================== TokenDistributionSchedule =============================== */
function isTokenDistributionSchedule(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3::genesis::TokenDistributionSchedule"; }
class TokenDistributionSchedule {
    constructor(typeArgs, fields) {
        this.$typeName = TokenDistributionSchedule.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TokenDistributionSchedule.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.stakeSubsidyFundMist = fields.stakeSubsidyFundMist;
        ;
        this.allocations = fields.allocations;
    }
    static reified() { return { typeName: TokenDistributionSchedule.$typeName, fullTypeName: (0, util_1.composeSuiType)(TokenDistributionSchedule.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => TokenDistributionSchedule.fromFields(fields), fromFieldsWithTypes: (item) => TokenDistributionSchedule.fromFieldsWithTypes(item), fromBcs: (data) => TokenDistributionSchedule.fromBcs(data), bcs: TokenDistributionSchedule.bcs, fromJSONField: (field) => TokenDistributionSchedule.fromJSONField(field), fromJSON: (json) => TokenDistributionSchedule.fromJSON(json), fromSuiParsedData: (content) => TokenDistributionSchedule.fromSuiParsedData(content), fetch: async (client, id) => TokenDistributionSchedule.fetch(client, id), new: (fields) => { return new TokenDistributionSchedule([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TokenDistributionSchedule.reified(); }
    static phantom() { return (0, reified_1.phantom)(TokenDistributionSchedule.reified()); }
    static get p() { return TokenDistributionSchedule.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TokenDistributionSchedule", {
            stake_subsidy_fund_mist: bcs_1.bcs.u64(), allocations: bcs_1.bcs.vector(TokenAllocation.bcs)
        });
    }
    ;
    static fromFields(fields) { return TokenDistributionSchedule.reified().new({ stakeSubsidyFundMist: (0, reified_1.decodeFromFields)("u64", fields.stake_subsidy_fund_mist), allocations: (0, reified_1.decodeFromFields)(reified.vector(TokenAllocation.reified()), fields.allocations) }); }
    static fromFieldsWithTypes(item) {
        if (!isTokenDistributionSchedule(item.type)) {
            throw new Error("not a TokenDistributionSchedule type");
        }
        return TokenDistributionSchedule.reified().new({ stakeSubsidyFundMist: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_subsidy_fund_mist), allocations: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(TokenAllocation.reified()), item.fields.allocations) });
    }
    static fromBcs(data) { return TokenDistributionSchedule.fromFields(TokenDistributionSchedule.bcs.parse(data)); }
    toJSONField() {
        return {
            stakeSubsidyFundMist: this.stakeSubsidyFundMist.toString(), allocations: (0, reified_1.fieldToJSON)(`vector<0x3::genesis::TokenAllocation>`, this.allocations),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TokenDistributionSchedule.reified().new({ stakeSubsidyFundMist: (0, reified_1.decodeFromJSONField)("u64", field.stakeSubsidyFundMist), allocations: (0, reified_1.decodeFromJSONField)(reified.vector(TokenAllocation.reified()), field.allocations) }); }
    static fromJSON(json) {
        if (json.$typeName !== TokenDistributionSchedule.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TokenDistributionSchedule.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTokenDistributionSchedule(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TokenDistributionSchedule object`);
    } return TokenDistributionSchedule.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TokenDistributionSchedule object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTokenDistributionSchedule(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TokenDistributionSchedule object`);
        }
        return TokenDistributionSchedule.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TokenDistributionSchedule = TokenDistributionSchedule;
TokenDistributionSchedule.$typeName = "0x3::genesis::TokenDistributionSchedule";
TokenDistributionSchedule.$numTypeParams = 0;
