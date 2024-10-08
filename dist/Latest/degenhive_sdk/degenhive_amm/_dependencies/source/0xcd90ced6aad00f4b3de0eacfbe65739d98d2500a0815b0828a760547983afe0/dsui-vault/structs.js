"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorPoolRewardsUpdated = exports.ValidatorPoolDestroyed = exports.ValidatorPool = exports.ValidatorListUpdated = exports.UserUnstakedInstantly = exports.UserUnstakeRequest = exports.UserClaimedSui = exports.UnstakingRequestsProcessed = exports.UnstakeRequest = exports.TotalRewardsUpdated = exports.StakeWithSelectedValidatorRequestProcessed = exports.StakeSuiRequestsProcessed = exports.StakeSuiRequest = exports.StakeOperationProcessed = exports.RequestsForEpochDestroyed = exports.RequestsForEpoch = exports.EmergencyPauseUpdate = exports.DegenSUIFeeStructureUpdated = exports.DSuiVault = exports.ConfigParams = void 0;
exports.isConfigParams = isConfigParams;
exports.isDSuiVault = isDSuiVault;
exports.isDegenSUIFeeStructureUpdated = isDegenSUIFeeStructureUpdated;
exports.isEmergencyPauseUpdate = isEmergencyPauseUpdate;
exports.isRequestsForEpoch = isRequestsForEpoch;
exports.isRequestsForEpochDestroyed = isRequestsForEpochDestroyed;
exports.isStakeOperationProcessed = isStakeOperationProcessed;
exports.isStakeSuiRequest = isStakeSuiRequest;
exports.isStakeSuiRequestsProcessed = isStakeSuiRequestsProcessed;
exports.isStakeWithSelectedValidatorRequestProcessed = isStakeWithSelectedValidatorRequestProcessed;
exports.isTotalRewardsUpdated = isTotalRewardsUpdated;
exports.isUnstakeRequest = isUnstakeRequest;
exports.isUnstakingRequestsProcessed = isUnstakingRequestsProcessed;
exports.isUserClaimedSui = isUserClaimedSui;
exports.isUserUnstakeRequest = isUserUnstakeRequest;
exports.isUserUnstakedInstantly = isUserUnstakedInstantly;
exports.isValidatorListUpdated = isValidatorListUpdated;
exports.isValidatorPool = isValidatorPool;
exports.isValidatorPoolDestroyed = isValidatorPoolDestroyed;
exports.isValidatorPoolRewardsUpdated = isValidatorPoolRewardsUpdated;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x2/balance/structs");
const structs_2 = require("../../0x2/coin/structs");
const structs_3 = require("../../0x2/linked-table/structs");
const structs_4 = require("../../0x2/object/structs");
const structs_5 = require("../../0x2/sui/structs");
const structs_6 = require("../../0x3/staking-pool/structs");
const structs_7 = require("../../0x784e390ba69b497f2c8c6df0ca1e19009be2a51050d7d982986babeff019f15c/dsui/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== ConfigParams =============================== */
function isConfigParams(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::ConfigParams`; }
class ConfigParams {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ConfigParams.$typeName;
        this.$isPhantom = ConfigParams.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ConfigParams.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.pauseStake = fields.pauseStake;
        ;
        this.protocolFeePercent = fields.protocolFeePercent;
        ;
        this.serviceFeePercent = fields.serviceFeePercent;
        ;
        this.unstakeDelayEpoches = fields.unstakeDelayEpoches;
        ;
        this.treasuryPercent = fields.treasuryPercent;
    }
    static reified() { return { typeName: ConfigParams.$typeName, fullTypeName: (0, util_1.composeSuiType)(ConfigParams.$typeName, ...[]), typeArgs: [], isPhantom: ConfigParams.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ConfigParams.fromFields(fields), fromFieldsWithTypes: (item) => ConfigParams.fromFieldsWithTypes(item), fromBcs: (data) => ConfigParams.fromBcs(data), bcs: ConfigParams.bcs, fromJSONField: (field) => ConfigParams.fromJSONField(field), fromJSON: (json) => ConfigParams.fromJSON(json), fromSuiParsedData: (content) => ConfigParams.fromSuiParsedData(content), fetch: async (client, id) => ConfigParams.fetch(client, id), new: (fields) => { return new ConfigParams([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ConfigParams.reified(); }
    static phantom() { return (0, reified_1.phantom)(ConfigParams.reified()); }
    static get p() { return ConfigParams.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ConfigParams", {
            pause_stake: bcs_1.bcs.bool(), protocol_fee_percent: bcs_1.bcs.u64(), service_fee_percent: bcs_1.bcs.u64(), unstake_delay_epoches: bcs_1.bcs.u64(), treasury_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ConfigParams.reified().new({ pauseStake: (0, reified_1.decodeFromFields)("bool", fields.pause_stake), protocolFeePercent: (0, reified_1.decodeFromFields)("u64", fields.protocol_fee_percent), serviceFeePercent: (0, reified_1.decodeFromFields)("u64", fields.service_fee_percent), unstakeDelayEpoches: (0, reified_1.decodeFromFields)("u64", fields.unstake_delay_epoches), treasuryPercent: (0, reified_1.decodeFromFields)("u64", fields.treasury_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isConfigParams(item.type)) {
            throw new Error("not a ConfigParams type");
        }
        return ConfigParams.reified().new({ pauseStake: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.pause_stake), protocolFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fee_percent), serviceFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.service_fee_percent), unstakeDelayEpoches: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unstake_delay_epoches), treasuryPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_percent) });
    }
    static fromBcs(data) { return ConfigParams.fromFields(ConfigParams.bcs.parse(data)); }
    toJSONField() {
        return {
            pauseStake: this.pauseStake, protocolFeePercent: this.protocolFeePercent.toString(), serviceFeePercent: this.serviceFeePercent.toString(), unstakeDelayEpoches: this.unstakeDelayEpoches.toString(), treasuryPercent: this.treasuryPercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ConfigParams.reified().new({ pauseStake: (0, reified_1.decodeFromJSONField)("bool", field.pauseStake), protocolFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.protocolFeePercent), serviceFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.serviceFeePercent), unstakeDelayEpoches: (0, reified_1.decodeFromJSONField)("u64", field.unstakeDelayEpoches), treasuryPercent: (0, reified_1.decodeFromJSONField)("u64", field.treasuryPercent) }); }
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
ConfigParams.$typeName = `${index_1.PKG_V1}::dsui_vault::ConfigParams`;
ConfigParams.$numTypeParams = 0;
ConfigParams.$isPhantom = [];
/* ============================== DSuiVault =============================== */
function isDSuiVault(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::DSuiVault`; }
class DSuiVault {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DSuiVault.$typeName;
        this.$isPhantom = DSuiVault.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DSuiVault.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.configParams = fields.configParams;
        ;
        this.dsuiKraftCap = fields.dsuiKraftCap;
        ;
        this.whitelistedValidators = fields.whitelistedValidators;
        ;
        this.validatorPools = fields.validatorPools;
        ;
        this.selectedValidatorMapping = fields.selectedValidatorMapping;
        ;
        this.suiToStake = fields.suiToStake;
        ;
        this.hiveFeeVault = fields.hiveFeeVault;
        ;
        this.unstakedSuiReserve = fields.unstakedSuiReserve;
        ;
        this.unstakeEpochs = fields.unstakeEpochs;
        ;
        this.totalPrincipalStaked = fields.totalPrincipalStaked;
        ;
        this.totalAccruedRewards = fields.totalAccruedRewards;
        ;
        this.suiToUnstake = fields.suiToUnstake;
        ;
        this.uncollectedProtocolFees = fields.uncollectedProtocolFees;
        ;
        this.dsuiSupply = fields.dsuiSupply;
        ;
        this.rewardsLastUpdatedEpoch = fields.rewardsLastUpdatedEpoch;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: DSuiVault.$typeName, fullTypeName: (0, util_1.composeSuiType)(DSuiVault.$typeName, ...[]), typeArgs: [], isPhantom: DSuiVault.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DSuiVault.fromFields(fields), fromFieldsWithTypes: (item) => DSuiVault.fromFieldsWithTypes(item), fromBcs: (data) => DSuiVault.fromBcs(data), bcs: DSuiVault.bcs, fromJSONField: (field) => DSuiVault.fromJSONField(field), fromJSON: (json) => DSuiVault.fromJSON(json), fromSuiParsedData: (content) => DSuiVault.fromSuiParsedData(content), fetch: async (client, id) => DSuiVault.fetch(client, id), new: (fields) => { return new DSuiVault([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DSuiVault.reified(); }
    static phantom() { return (0, reified_1.phantom)(DSuiVault.reified()); }
    static get p() { return DSuiVault.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DSuiVault", {
            id: structs_4.UID.bcs, config_params: ConfigParams.bcs, dsui_kraft_cap: structs_2.TreasuryCap.bcs, whitelisted_validators: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), validator_pools: structs_3.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), selected_validator_mapping: structs_3.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), sui_to_stake: structs_1.Balance.bcs, hive_fee_vault: structs_1.Balance.bcs, unstaked_sui_reserve: structs_1.Balance.bcs, unstake_epochs: structs_3.LinkedTable.bcs(bcs_1.bcs.u64()), total_principal_staked: bcs_1.bcs.u64(), total_accrued_rewards: bcs_1.bcs.u64(), sui_to_unstake: bcs_1.bcs.u64(), uncollected_protocol_fees: bcs_1.bcs.u64(), dsui_supply: bcs_1.bcs.u64(), rewards_last_updated_epoch: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128(), version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DSuiVault.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), configParams: (0, reified_1.decodeFromFields)(ConfigParams.reified(), fields.config_params), dsuiKraftCap: (0, reified_1.decodeFromFields)(structs_2.TreasuryCap.reified(reified.phantom(structs_7.DSUI.reified())), fields.dsui_kraft_cap), whitelistedValidators: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.whitelisted_validators), validatorPools: (0, reified_1.decodeFromFields)(structs_3.LinkedTable.reified("address", reified.phantom(ValidatorPool.reified())), fields.validator_pools), selectedValidatorMapping: (0, reified_1.decodeFromFields)(structs_3.LinkedTable.reified("address", reified.phantom(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())))), fields.selected_validator_mapping), suiToStake: (0, reified_1.decodeFromFields)(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())), fields.sui_to_stake), hiveFeeVault: (0, reified_1.decodeFromFields)(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())), fields.hive_fee_vault), unstakedSuiReserve: (0, reified_1.decodeFromFields)(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())), fields.unstaked_sui_reserve), unstakeEpochs: (0, reified_1.decodeFromFields)(structs_3.LinkedTable.reified("u64", reified.phantom(RequestsForEpoch.reified())), fields.unstake_epochs), totalPrincipalStaked: (0, reified_1.decodeFromFields)("u64", fields.total_principal_staked), totalAccruedRewards: (0, reified_1.decodeFromFields)("u64", fields.total_accrued_rewards), suiToUnstake: (0, reified_1.decodeFromFields)("u64", fields.sui_to_unstake), uncollectedProtocolFees: (0, reified_1.decodeFromFields)("u64", fields.uncollected_protocol_fees), dsuiSupply: (0, reified_1.decodeFromFields)("u64", fields.dsui_supply), rewardsLastUpdatedEpoch: (0, reified_1.decodeFromFields)("u64", fields.rewards_last_updated_epoch), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isDSuiVault(item.type)) {
            throw new Error("not a DSuiVault type");
        }
        return DSuiVault.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), configParams: (0, reified_1.decodeFromFieldsWithTypes)(ConfigParams.reified(), item.fields.config_params), dsuiKraftCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TreasuryCap.reified(reified.phantom(structs_7.DSUI.reified())), item.fields.dsui_kraft_cap), whitelistedValidators: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.whitelisted_validators), validatorPools: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.LinkedTable.reified("address", reified.phantom(ValidatorPool.reified())), item.fields.validator_pools), selectedValidatorMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.LinkedTable.reified("address", reified.phantom(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())))), item.fields.selected_validator_mapping), suiToStake: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())), item.fields.sui_to_stake), hiveFeeVault: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())), item.fields.hive_fee_vault), unstakedSuiReserve: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())), item.fields.unstaked_sui_reserve), unstakeEpochs: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.LinkedTable.reified("u64", reified.phantom(RequestsForEpoch.reified())), item.fields.unstake_epochs), totalPrincipalStaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_principal_staked), totalAccruedRewards: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_accrued_rewards), suiToUnstake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_to_unstake), uncollectedProtocolFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.uncollected_protocol_fees), dsuiSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_supply), rewardsLastUpdatedEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.rewards_last_updated_epoch), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return DSuiVault.fromFields(DSuiVault.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, configParams: this.configParams.toJSONField(), dsuiKraftCap: this.dsuiKraftCap.toJSONField(), whitelistedValidators: (0, reified_1.fieldToJSON)(`vector<address>`, this.whitelistedValidators), validatorPools: this.validatorPools.toJSONField(), selectedValidatorMapping: this.selectedValidatorMapping.toJSONField(), suiToStake: this.suiToStake.toJSONField(), hiveFeeVault: this.hiveFeeVault.toJSONField(), unstakedSuiReserve: this.unstakedSuiReserve.toJSONField(), unstakeEpochs: this.unstakeEpochs.toJSONField(), totalPrincipalStaked: this.totalPrincipalStaked.toString(), totalAccruedRewards: this.totalAccruedRewards.toString(), suiToUnstake: this.suiToUnstake.toString(), uncollectedProtocolFees: this.uncollectedProtocolFees.toString(), dsuiSupply: this.dsuiSupply.toString(), rewardsLastUpdatedEpoch: this.rewardsLastUpdatedEpoch.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(), version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DSuiVault.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), configParams: (0, reified_1.decodeFromJSONField)(ConfigParams.reified(), field.configParams), dsuiKraftCap: (0, reified_1.decodeFromJSONField)(structs_2.TreasuryCap.reified(reified.phantom(structs_7.DSUI.reified())), field.dsuiKraftCap), whitelistedValidators: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.whitelistedValidators), validatorPools: (0, reified_1.decodeFromJSONField)(structs_3.LinkedTable.reified("address", reified.phantom(ValidatorPool.reified())), field.validatorPools), selectedValidatorMapping: (0, reified_1.decodeFromJSONField)(structs_3.LinkedTable.reified("address", reified.phantom(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())))), field.selectedValidatorMapping), suiToStake: (0, reified_1.decodeFromJSONField)(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())), field.suiToStake), hiveFeeVault: (0, reified_1.decodeFromJSONField)(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())), field.hiveFeeVault), unstakedSuiReserve: (0, reified_1.decodeFromJSONField)(structs_1.Balance.reified(reified.phantom(structs_5.SUI.reified())), field.unstakedSuiReserve), unstakeEpochs: (0, reified_1.decodeFromJSONField)(structs_3.LinkedTable.reified("u64", reified.phantom(RequestsForEpoch.reified())), field.unstakeEpochs), totalPrincipalStaked: (0, reified_1.decodeFromJSONField)("u64", field.totalPrincipalStaked), totalAccruedRewards: (0, reified_1.decodeFromJSONField)("u64", field.totalAccruedRewards), suiToUnstake: (0, reified_1.decodeFromJSONField)("u64", field.suiToUnstake), uncollectedProtocolFees: (0, reified_1.decodeFromJSONField)("u64", field.uncollectedProtocolFees), dsuiSupply: (0, reified_1.decodeFromJSONField)("u64", field.dsuiSupply), rewardsLastUpdatedEpoch: (0, reified_1.decodeFromJSONField)("u64", field.rewardsLastUpdatedEpoch), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== DSuiVault.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DSuiVault.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDSuiVault(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DSuiVault object`);
    } return DSuiVault.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DSuiVault object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDSuiVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DSuiVault object`);
        }
        return DSuiVault.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DSuiVault = DSuiVault;
DSuiVault.$typeName = `${index_1.PKG_V1}::dsui_vault::DSuiVault`;
DSuiVault.$numTypeParams = 0;
DSuiVault.$isPhantom = [];
/* ============================== DegenSUIFeeStructureUpdated =============================== */
function isDegenSUIFeeStructureUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::DegenSUIFeeStructureUpdated`; }
class DegenSUIFeeStructureUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DegenSUIFeeStructureUpdated.$typeName;
        this.$isPhantom = DegenSUIFeeStructureUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DegenSUIFeeStructureUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.protocolFeePercent = fields.protocolFeePercent;
        ;
        this.serviceFeePercent = fields.serviceFeePercent;
        ;
        this.treasuryPercent = fields.treasuryPercent;
    }
    static reified() { return { typeName: DegenSUIFeeStructureUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(DegenSUIFeeStructureUpdated.$typeName, ...[]), typeArgs: [], isPhantom: DegenSUIFeeStructureUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DegenSUIFeeStructureUpdated.fromFields(fields), fromFieldsWithTypes: (item) => DegenSUIFeeStructureUpdated.fromFieldsWithTypes(item), fromBcs: (data) => DegenSUIFeeStructureUpdated.fromBcs(data), bcs: DegenSUIFeeStructureUpdated.bcs, fromJSONField: (field) => DegenSUIFeeStructureUpdated.fromJSONField(field), fromJSON: (json) => DegenSUIFeeStructureUpdated.fromJSON(json), fromSuiParsedData: (content) => DegenSUIFeeStructureUpdated.fromSuiParsedData(content), fetch: async (client, id) => DegenSUIFeeStructureUpdated.fetch(client, id), new: (fields) => { return new DegenSUIFeeStructureUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DegenSUIFeeStructureUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(DegenSUIFeeStructureUpdated.reified()); }
    static get p() { return DegenSUIFeeStructureUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DegenSUIFeeStructureUpdated", {
            protocol_fee_percent: bcs_1.bcs.u64(), service_fee_percent: bcs_1.bcs.u64(), treasury_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DegenSUIFeeStructureUpdated.reified().new({ protocolFeePercent: (0, reified_1.decodeFromFields)("u64", fields.protocol_fee_percent), serviceFeePercent: (0, reified_1.decodeFromFields)("u64", fields.service_fee_percent), treasuryPercent: (0, reified_1.decodeFromFields)("u64", fields.treasury_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isDegenSUIFeeStructureUpdated(item.type)) {
            throw new Error("not a DegenSUIFeeStructureUpdated type");
        }
        return DegenSUIFeeStructureUpdated.reified().new({ protocolFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fee_percent), serviceFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.service_fee_percent), treasuryPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_percent) });
    }
    static fromBcs(data) { return DegenSUIFeeStructureUpdated.fromFields(DegenSUIFeeStructureUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            protocolFeePercent: this.protocolFeePercent.toString(), serviceFeePercent: this.serviceFeePercent.toString(), treasuryPercent: this.treasuryPercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DegenSUIFeeStructureUpdated.reified().new({ protocolFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.protocolFeePercent), serviceFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.serviceFeePercent), treasuryPercent: (0, reified_1.decodeFromJSONField)("u64", field.treasuryPercent) }); }
    static fromJSON(json) {
        if (json.$typeName !== DegenSUIFeeStructureUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DegenSUIFeeStructureUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDegenSUIFeeStructureUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DegenSUIFeeStructureUpdated object`);
    } return DegenSUIFeeStructureUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DegenSUIFeeStructureUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDegenSUIFeeStructureUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DegenSUIFeeStructureUpdated object`);
        }
        return DegenSUIFeeStructureUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DegenSUIFeeStructureUpdated = DegenSUIFeeStructureUpdated;
DegenSUIFeeStructureUpdated.$typeName = `${index_1.PKG_V1}::dsui_vault::DegenSUIFeeStructureUpdated`;
DegenSUIFeeStructureUpdated.$numTypeParams = 0;
DegenSUIFeeStructureUpdated.$isPhantom = [];
/* ============================== EmergencyPauseUpdate =============================== */
function isEmergencyPauseUpdate(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::EmergencyPauseUpdate`; }
class EmergencyPauseUpdate {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = EmergencyPauseUpdate.$typeName;
        this.$isPhantom = EmergencyPauseUpdate.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(EmergencyPauseUpdate.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.pauseStake = fields.pauseStake;
    }
    static reified() { return { typeName: EmergencyPauseUpdate.$typeName, fullTypeName: (0, util_1.composeSuiType)(EmergencyPauseUpdate.$typeName, ...[]), typeArgs: [], isPhantom: EmergencyPauseUpdate.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => EmergencyPauseUpdate.fromFields(fields), fromFieldsWithTypes: (item) => EmergencyPauseUpdate.fromFieldsWithTypes(item), fromBcs: (data) => EmergencyPauseUpdate.fromBcs(data), bcs: EmergencyPauseUpdate.bcs, fromJSONField: (field) => EmergencyPauseUpdate.fromJSONField(field), fromJSON: (json) => EmergencyPauseUpdate.fromJSON(json), fromSuiParsedData: (content) => EmergencyPauseUpdate.fromSuiParsedData(content), fetch: async (client, id) => EmergencyPauseUpdate.fetch(client, id), new: (fields) => { return new EmergencyPauseUpdate([], fields); }, kind: "StructClassReified", }; }
    static get r() { return EmergencyPauseUpdate.reified(); }
    static phantom() { return (0, reified_1.phantom)(EmergencyPauseUpdate.reified()); }
    static get p() { return EmergencyPauseUpdate.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("EmergencyPauseUpdate", {
            pause_stake: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return EmergencyPauseUpdate.reified().new({ pauseStake: (0, reified_1.decodeFromFields)("bool", fields.pause_stake) }); }
    static fromFieldsWithTypes(item) {
        if (!isEmergencyPauseUpdate(item.type)) {
            throw new Error("not a EmergencyPauseUpdate type");
        }
        return EmergencyPauseUpdate.reified().new({ pauseStake: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.pause_stake) });
    }
    static fromBcs(data) { return EmergencyPauseUpdate.fromFields(EmergencyPauseUpdate.bcs.parse(data)); }
    toJSONField() {
        return {
            pauseStake: this.pauseStake,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return EmergencyPauseUpdate.reified().new({ pauseStake: (0, reified_1.decodeFromJSONField)("bool", field.pauseStake) }); }
    static fromJSON(json) {
        if (json.$typeName !== EmergencyPauseUpdate.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return EmergencyPauseUpdate.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEmergencyPauseUpdate(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a EmergencyPauseUpdate object`);
    } return EmergencyPauseUpdate.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching EmergencyPauseUpdate object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEmergencyPauseUpdate(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a EmergencyPauseUpdate object`);
        }
        return EmergencyPauseUpdate.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.EmergencyPauseUpdate = EmergencyPauseUpdate;
EmergencyPauseUpdate.$typeName = `${index_1.PKG_V1}::dsui_vault::EmergencyPauseUpdate`;
EmergencyPauseUpdate.$numTypeParams = 0;
EmergencyPauseUpdate.$isPhantom = [];
/* ============================== RequestsForEpoch =============================== */
function isRequestsForEpoch(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::RequestsForEpoch`; }
class RequestsForEpoch {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RequestsForEpoch.$typeName;
        this.$isPhantom = RequestsForEpoch.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RequestsForEpoch.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.amount = fields.amount;
        ;
        this.approved = fields.approved;
    }
    static reified() { return { typeName: RequestsForEpoch.$typeName, fullTypeName: (0, util_1.composeSuiType)(RequestsForEpoch.$typeName, ...[]), typeArgs: [], isPhantom: RequestsForEpoch.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RequestsForEpoch.fromFields(fields), fromFieldsWithTypes: (item) => RequestsForEpoch.fromFieldsWithTypes(item), fromBcs: (data) => RequestsForEpoch.fromBcs(data), bcs: RequestsForEpoch.bcs, fromJSONField: (field) => RequestsForEpoch.fromJSONField(field), fromJSON: (json) => RequestsForEpoch.fromJSON(json), fromSuiParsedData: (content) => RequestsForEpoch.fromSuiParsedData(content), fetch: async (client, id) => RequestsForEpoch.fetch(client, id), new: (fields) => { return new RequestsForEpoch([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RequestsForEpoch.reified(); }
    static phantom() { return (0, reified_1.phantom)(RequestsForEpoch.reified()); }
    static get p() { return RequestsForEpoch.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RequestsForEpoch", {
            amount: bcs_1.bcs.u64(), approved: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return RequestsForEpoch.reified().new({ amount: (0, reified_1.decodeFromFields)("u64", fields.amount), approved: (0, reified_1.decodeFromFields)("bool", fields.approved) }); }
    static fromFieldsWithTypes(item) {
        if (!isRequestsForEpoch(item.type)) {
            throw new Error("not a RequestsForEpoch type");
        }
        return RequestsForEpoch.reified().new({ amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), approved: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.approved) });
    }
    static fromBcs(data) { return RequestsForEpoch.fromFields(RequestsForEpoch.bcs.parse(data)); }
    toJSONField() {
        return {
            amount: this.amount.toString(), approved: this.approved,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RequestsForEpoch.reified().new({ amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), approved: (0, reified_1.decodeFromJSONField)("bool", field.approved) }); }
    static fromJSON(json) {
        if (json.$typeName !== RequestsForEpoch.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RequestsForEpoch.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRequestsForEpoch(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RequestsForEpoch object`);
    } return RequestsForEpoch.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RequestsForEpoch object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRequestsForEpoch(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RequestsForEpoch object`);
        }
        return RequestsForEpoch.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RequestsForEpoch = RequestsForEpoch;
RequestsForEpoch.$typeName = `${index_1.PKG_V1}::dsui_vault::RequestsForEpoch`;
RequestsForEpoch.$numTypeParams = 0;
RequestsForEpoch.$isPhantom = [];
/* ============================== RequestsForEpochDestroyed =============================== */
function isRequestsForEpochDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::RequestsForEpochDestroyed`; }
class RequestsForEpochDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RequestsForEpochDestroyed.$typeName;
        this.$isPhantom = RequestsForEpochDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RequestsForEpochDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epoch = fields.epoch;
    }
    static reified() { return { typeName: RequestsForEpochDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(RequestsForEpochDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: RequestsForEpochDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RequestsForEpochDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => RequestsForEpochDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => RequestsForEpochDestroyed.fromBcs(data), bcs: RequestsForEpochDestroyed.bcs, fromJSONField: (field) => RequestsForEpochDestroyed.fromJSONField(field), fromJSON: (json) => RequestsForEpochDestroyed.fromJSON(json), fromSuiParsedData: (content) => RequestsForEpochDestroyed.fromSuiParsedData(content), fetch: async (client, id) => RequestsForEpochDestroyed.fetch(client, id), new: (fields) => { return new RequestsForEpochDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RequestsForEpochDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(RequestsForEpochDestroyed.reified()); }
    static get p() { return RequestsForEpochDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RequestsForEpochDestroyed", {
            epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return RequestsForEpochDestroyed.reified().new({ epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isRequestsForEpochDestroyed(item.type)) {
            throw new Error("not a RequestsForEpochDestroyed type");
        }
        return RequestsForEpochDestroyed.reified().new({ epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch) });
    }
    static fromBcs(data) { return RequestsForEpochDestroyed.fromFields(RequestsForEpochDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            epoch: this.epoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RequestsForEpochDestroyed.reified().new({ epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== RequestsForEpochDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RequestsForEpochDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRequestsForEpochDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RequestsForEpochDestroyed object`);
    } return RequestsForEpochDestroyed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RequestsForEpochDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRequestsForEpochDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RequestsForEpochDestroyed object`);
        }
        return RequestsForEpochDestroyed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RequestsForEpochDestroyed = RequestsForEpochDestroyed;
RequestsForEpochDestroyed.$typeName = `${index_1.PKG_V1}::dsui_vault::RequestsForEpochDestroyed`;
RequestsForEpochDestroyed.$numTypeParams = 0;
RequestsForEpochDestroyed.$isPhantom = [];
/* ============================== StakeOperationProcessed =============================== */
function isStakeOperationProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::StakeOperationProcessed`; }
class StakeOperationProcessed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StakeOperationProcessed.$typeName;
        this.$isPhantom = StakeOperationProcessed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StakeOperationProcessed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.validatorAddr = fields.validatorAddr;
        ;
        this.suiToStakeAmt = fields.suiToStakeAmt;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: StakeOperationProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakeOperationProcessed.$typeName, ...[]), typeArgs: [], isPhantom: StakeOperationProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakeOperationProcessed.fromFields(fields), fromFieldsWithTypes: (item) => StakeOperationProcessed.fromFieldsWithTypes(item), fromBcs: (data) => StakeOperationProcessed.fromBcs(data), bcs: StakeOperationProcessed.bcs, fromJSONField: (field) => StakeOperationProcessed.fromJSONField(field), fromJSON: (json) => StakeOperationProcessed.fromJSON(json), fromSuiParsedData: (content) => StakeOperationProcessed.fromSuiParsedData(content), fetch: async (client, id) => StakeOperationProcessed.fetch(client, id), new: (fields) => { return new StakeOperationProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakeOperationProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakeOperationProcessed.reified()); }
    static get p() { return StakeOperationProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakeOperationProcessed", {
            validator_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), sui_to_stake_amt: bcs_1.bcs.u64(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return StakeOperationProcessed.reified().new({ validatorAddr: (0, reified_1.decodeFromFields)("address", fields.validator_addr), suiToStakeAmt: (0, reified_1.decodeFromFields)("u64", fields.sui_to_stake_amt), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isStakeOperationProcessed(item.type)) {
            throw new Error("not a StakeOperationProcessed type");
        }
        return StakeOperationProcessed.reified().new({ validatorAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_addr), suiToStakeAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_to_stake_amt), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return StakeOperationProcessed.fromFields(StakeOperationProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            validatorAddr: this.validatorAddr, suiToStakeAmt: this.suiToStakeAmt.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StakeOperationProcessed.reified().new({ validatorAddr: (0, reified_1.decodeFromJSONField)("address", field.validatorAddr), suiToStakeAmt: (0, reified_1.decodeFromJSONField)("u64", field.suiToStakeAmt), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== StakeOperationProcessed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StakeOperationProcessed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStakeOperationProcessed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StakeOperationProcessed object`);
    } return StakeOperationProcessed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakeOperationProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeOperationProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeOperationProcessed object`);
        }
        return StakeOperationProcessed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StakeOperationProcessed = StakeOperationProcessed;
StakeOperationProcessed.$typeName = `${index_1.PKG_V1}::dsui_vault::StakeOperationProcessed`;
StakeOperationProcessed.$numTypeParams = 0;
StakeOperationProcessed.$isPhantom = [];
/* ============================== StakeSuiRequest =============================== */
function isStakeSuiRequest(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::StakeSuiRequest`; }
class StakeSuiRequest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StakeSuiRequest.$typeName;
        this.$isPhantom = StakeSuiRequest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StakeSuiRequest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.staker = fields.staker;
        ;
        this.suiToStake = fields.suiToStake;
        ;
        this.dsuiKrafted = fields.dsuiKrafted;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: StakeSuiRequest.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakeSuiRequest.$typeName, ...[]), typeArgs: [], isPhantom: StakeSuiRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakeSuiRequest.fromFields(fields), fromFieldsWithTypes: (item) => StakeSuiRequest.fromFieldsWithTypes(item), fromBcs: (data) => StakeSuiRequest.fromBcs(data), bcs: StakeSuiRequest.bcs, fromJSONField: (field) => StakeSuiRequest.fromJSONField(field), fromJSON: (json) => StakeSuiRequest.fromJSON(json), fromSuiParsedData: (content) => StakeSuiRequest.fromSuiParsedData(content), fetch: async (client, id) => StakeSuiRequest.fetch(client, id), new: (fields) => { return new StakeSuiRequest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakeSuiRequest.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakeSuiRequest.reified()); }
    static get p() { return StakeSuiRequest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakeSuiRequest", {
            staker: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), sui_to_stake: bcs_1.bcs.u64(), dsui_krafted: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return StakeSuiRequest.reified().new({ staker: (0, reified_1.decodeFromFields)("address", fields.staker), suiToStake: (0, reified_1.decodeFromFields)("u64", fields.sui_to_stake), dsuiKrafted: (0, reified_1.decodeFromFields)("u64", fields.dsui_krafted), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isStakeSuiRequest(item.type)) {
            throw new Error("not a StakeSuiRequest type");
        }
        return StakeSuiRequest.reified().new({ staker: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.staker), suiToStake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_to_stake), dsuiKrafted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_krafted), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return StakeSuiRequest.fromFields(StakeSuiRequest.bcs.parse(data)); }
    toJSONField() {
        return {
            staker: this.staker, suiToStake: this.suiToStake.toString(), dsuiKrafted: this.dsuiKrafted.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StakeSuiRequest.reified().new({ staker: (0, reified_1.decodeFromJSONField)("address", field.staker), suiToStake: (0, reified_1.decodeFromJSONField)("u64", field.suiToStake), dsuiKrafted: (0, reified_1.decodeFromJSONField)("u64", field.dsuiKrafted), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== StakeSuiRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StakeSuiRequest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStakeSuiRequest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StakeSuiRequest object`);
    } return StakeSuiRequest.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakeSuiRequest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeSuiRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeSuiRequest object`);
        }
        return StakeSuiRequest.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StakeSuiRequest = StakeSuiRequest;
StakeSuiRequest.$typeName = `${index_1.PKG_V1}::dsui_vault::StakeSuiRequest`;
StakeSuiRequest.$numTypeParams = 0;
StakeSuiRequest.$isPhantom = [];
/* ============================== StakeSuiRequestsProcessed =============================== */
function isStakeSuiRequestsProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::StakeSuiRequestsProcessed`; }
class StakeSuiRequestsProcessed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StakeSuiRequestsProcessed.$typeName;
        this.$isPhantom = StakeSuiRequestsProcessed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StakeSuiRequestsProcessed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.curEpoch = fields.curEpoch;
        ;
        this.totalSuiStaked = fields.totalSuiStaked;
        ;
        this.unstakedSuiAddedToReserveAfterFee = fields.unstakedSuiAddedToReserveAfterFee;
        ;
        this.protocolFeeCollected = fields.protocolFeeCollected;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
    }
    static reified() { return { typeName: StakeSuiRequestsProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakeSuiRequestsProcessed.$typeName, ...[]), typeArgs: [], isPhantom: StakeSuiRequestsProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakeSuiRequestsProcessed.fromFields(fields), fromFieldsWithTypes: (item) => StakeSuiRequestsProcessed.fromFieldsWithTypes(item), fromBcs: (data) => StakeSuiRequestsProcessed.fromBcs(data), bcs: StakeSuiRequestsProcessed.bcs, fromJSONField: (field) => StakeSuiRequestsProcessed.fromJSONField(field), fromJSON: (json) => StakeSuiRequestsProcessed.fromJSON(json), fromSuiParsedData: (content) => StakeSuiRequestsProcessed.fromSuiParsedData(content), fetch: async (client, id) => StakeSuiRequestsProcessed.fetch(client, id), new: (fields) => { return new StakeSuiRequestsProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakeSuiRequestsProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakeSuiRequestsProcessed.reified()); }
    static get p() { return StakeSuiRequestsProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakeSuiRequestsProcessed", {
            cur_epoch: bcs_1.bcs.u64(), total_sui_staked: bcs_1.bcs.u64(), unstaked_sui_added_to_reserve_after_fee: bcs_1.bcs.u64(), protocol_fee_collected: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return StakeSuiRequestsProcessed.reified().new({ curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch), totalSuiStaked: (0, reified_1.decodeFromFields)("u64", fields.total_sui_staked), unstakedSuiAddedToReserveAfterFee: (0, reified_1.decodeFromFields)("u64", fields.unstaked_sui_added_to_reserve_after_fee), protocolFeeCollected: (0, reified_1.decodeFromFields)("u64", fields.protocol_fee_collected), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui) }); }
    static fromFieldsWithTypes(item) {
        if (!isStakeSuiRequestsProcessed(item.type)) {
            throw new Error("not a StakeSuiRequestsProcessed type");
        }
        return StakeSuiRequestsProcessed.reified().new({ curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch), totalSuiStaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_sui_staked), unstakedSuiAddedToReserveAfterFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unstaked_sui_added_to_reserve_after_fee), protocolFeeCollected: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fee_collected), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui) });
    }
    static fromBcs(data) { return StakeSuiRequestsProcessed.fromFields(StakeSuiRequestsProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            curEpoch: this.curEpoch.toString(), totalSuiStaked: this.totalSuiStaked.toString(), unstakedSuiAddedToReserveAfterFee: this.unstakedSuiAddedToReserveAfterFee.toString(), protocolFeeCollected: this.protocolFeeCollected.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StakeSuiRequestsProcessed.reified().new({ curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch), totalSuiStaked: (0, reified_1.decodeFromJSONField)("u64", field.totalSuiStaked), unstakedSuiAddedToReserveAfterFee: (0, reified_1.decodeFromJSONField)("u64", field.unstakedSuiAddedToReserveAfterFee), protocolFeeCollected: (0, reified_1.decodeFromJSONField)("u64", field.protocolFeeCollected), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui) }); }
    static fromJSON(json) {
        if (json.$typeName !== StakeSuiRequestsProcessed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StakeSuiRequestsProcessed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStakeSuiRequestsProcessed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StakeSuiRequestsProcessed object`);
    } return StakeSuiRequestsProcessed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakeSuiRequestsProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeSuiRequestsProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeSuiRequestsProcessed object`);
        }
        return StakeSuiRequestsProcessed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StakeSuiRequestsProcessed = StakeSuiRequestsProcessed;
StakeSuiRequestsProcessed.$typeName = `${index_1.PKG_V1}::dsui_vault::StakeSuiRequestsProcessed`;
StakeSuiRequestsProcessed.$numTypeParams = 0;
StakeSuiRequestsProcessed.$isPhantom = [];
/* ============================== StakeWithSelectedValidatorRequestProcessed =============================== */
function isStakeWithSelectedValidatorRequestProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::StakeWithSelectedValidatorRequestProcessed`; }
class StakeWithSelectedValidatorRequestProcessed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StakeWithSelectedValidatorRequestProcessed.$typeName;
        this.$isPhantom = StakeWithSelectedValidatorRequestProcessed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StakeWithSelectedValidatorRequestProcessed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.validatorAddr = fields.validatorAddr;
        ;
        this.suiToStakeAmt = fields.suiToStakeAmt;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: StakeWithSelectedValidatorRequestProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakeWithSelectedValidatorRequestProcessed.$typeName, ...[]), typeArgs: [], isPhantom: StakeWithSelectedValidatorRequestProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakeWithSelectedValidatorRequestProcessed.fromFields(fields), fromFieldsWithTypes: (item) => StakeWithSelectedValidatorRequestProcessed.fromFieldsWithTypes(item), fromBcs: (data) => StakeWithSelectedValidatorRequestProcessed.fromBcs(data), bcs: StakeWithSelectedValidatorRequestProcessed.bcs, fromJSONField: (field) => StakeWithSelectedValidatorRequestProcessed.fromJSONField(field), fromJSON: (json) => StakeWithSelectedValidatorRequestProcessed.fromJSON(json), fromSuiParsedData: (content) => StakeWithSelectedValidatorRequestProcessed.fromSuiParsedData(content), fetch: async (client, id) => StakeWithSelectedValidatorRequestProcessed.fetch(client, id), new: (fields) => { return new StakeWithSelectedValidatorRequestProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakeWithSelectedValidatorRequestProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakeWithSelectedValidatorRequestProcessed.reified()); }
    static get p() { return StakeWithSelectedValidatorRequestProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakeWithSelectedValidatorRequestProcessed", {
            validator_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), sui_to_stake_amt: bcs_1.bcs.u64(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return StakeWithSelectedValidatorRequestProcessed.reified().new({ validatorAddr: (0, reified_1.decodeFromFields)("address", fields.validator_addr), suiToStakeAmt: (0, reified_1.decodeFromFields)("u64", fields.sui_to_stake_amt), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isStakeWithSelectedValidatorRequestProcessed(item.type)) {
            throw new Error("not a StakeWithSelectedValidatorRequestProcessed type");
        }
        return StakeWithSelectedValidatorRequestProcessed.reified().new({ validatorAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_addr), suiToStakeAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_to_stake_amt), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return StakeWithSelectedValidatorRequestProcessed.fromFields(StakeWithSelectedValidatorRequestProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            validatorAddr: this.validatorAddr, suiToStakeAmt: this.suiToStakeAmt.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StakeWithSelectedValidatorRequestProcessed.reified().new({ validatorAddr: (0, reified_1.decodeFromJSONField)("address", field.validatorAddr), suiToStakeAmt: (0, reified_1.decodeFromJSONField)("u64", field.suiToStakeAmt), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== StakeWithSelectedValidatorRequestProcessed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StakeWithSelectedValidatorRequestProcessed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStakeWithSelectedValidatorRequestProcessed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StakeWithSelectedValidatorRequestProcessed object`);
    } return StakeWithSelectedValidatorRequestProcessed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakeWithSelectedValidatorRequestProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeWithSelectedValidatorRequestProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeWithSelectedValidatorRequestProcessed object`);
        }
        return StakeWithSelectedValidatorRequestProcessed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StakeWithSelectedValidatorRequestProcessed = StakeWithSelectedValidatorRequestProcessed;
StakeWithSelectedValidatorRequestProcessed.$typeName = `${index_1.PKG_V1}::dsui_vault::StakeWithSelectedValidatorRequestProcessed`;
StakeWithSelectedValidatorRequestProcessed.$numTypeParams = 0;
StakeWithSelectedValidatorRequestProcessed.$isPhantom = [];
/* ============================== TotalRewardsUpdated =============================== */
function isTotalRewardsUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::TotalRewardsUpdated`; }
class TotalRewardsUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TotalRewardsUpdated.$typeName;
        this.$isPhantom = TotalRewardsUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TotalRewardsUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.curEpoch = fields.curEpoch;
        ;
        this.totalPrincipalStaked = fields.totalPrincipalStaked;
        ;
        this.suiToUnstake = fields.suiToUnstake;
        ;
        this.totalAccruedRewards = fields.totalAccruedRewards;
        ;
        this.newRewards = fields.newRewards;
        ;
        this.uncollectedProtocolFees = fields.uncollectedProtocolFees;
        ;
        this.protocolFeeOnNewRewards = fields.protocolFeeOnNewRewards;
        ;
        this.prevSuiClaimablePerDsui = fields.prevSuiClaimablePerDsui;
        ;
        this.newSuiClaimablePerDsui = fields.newSuiClaimablePerDsui;
        ;
        this.exchangeRateIncrease = fields.exchangeRateIncrease;
    }
    static reified() { return { typeName: TotalRewardsUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(TotalRewardsUpdated.$typeName, ...[]), typeArgs: [], isPhantom: TotalRewardsUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TotalRewardsUpdated.fromFields(fields), fromFieldsWithTypes: (item) => TotalRewardsUpdated.fromFieldsWithTypes(item), fromBcs: (data) => TotalRewardsUpdated.fromBcs(data), bcs: TotalRewardsUpdated.bcs, fromJSONField: (field) => TotalRewardsUpdated.fromJSONField(field), fromJSON: (json) => TotalRewardsUpdated.fromJSON(json), fromSuiParsedData: (content) => TotalRewardsUpdated.fromSuiParsedData(content), fetch: async (client, id) => TotalRewardsUpdated.fetch(client, id), new: (fields) => { return new TotalRewardsUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TotalRewardsUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(TotalRewardsUpdated.reified()); }
    static get p() { return TotalRewardsUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TotalRewardsUpdated", {
            cur_epoch: bcs_1.bcs.u64(), total_principal_staked: bcs_1.bcs.u64(), sui_to_unstake: bcs_1.bcs.u64(), total_accrued_rewards: bcs_1.bcs.u64(), new_rewards: bcs_1.bcs.u64(), uncollected_protocol_fees: bcs_1.bcs.u64(), protocol_fee_on_new_rewards: bcs_1.bcs.u64(), prev_sui_claimable_per_dsui: bcs_1.bcs.u128(), new_sui_claimable_per_dsui: bcs_1.bcs.u128(), exchange_rate_increase: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return TotalRewardsUpdated.reified().new({ curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch), totalPrincipalStaked: (0, reified_1.decodeFromFields)("u64", fields.total_principal_staked), suiToUnstake: (0, reified_1.decodeFromFields)("u64", fields.sui_to_unstake), totalAccruedRewards: (0, reified_1.decodeFromFields)("u64", fields.total_accrued_rewards), newRewards: (0, reified_1.decodeFromFields)("u64", fields.new_rewards), uncollectedProtocolFees: (0, reified_1.decodeFromFields)("u64", fields.uncollected_protocol_fees), protocolFeeOnNewRewards: (0, reified_1.decodeFromFields)("u64", fields.protocol_fee_on_new_rewards), prevSuiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.prev_sui_claimable_per_dsui), newSuiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.new_sui_claimable_per_dsui), exchangeRateIncrease: (0, reified_1.decodeFromFields)("u128", fields.exchange_rate_increase) }); }
    static fromFieldsWithTypes(item) {
        if (!isTotalRewardsUpdated(item.type)) {
            throw new Error("not a TotalRewardsUpdated type");
        }
        return TotalRewardsUpdated.reified().new({ curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch), totalPrincipalStaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_principal_staked), suiToUnstake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_to_unstake), totalAccruedRewards: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_accrued_rewards), newRewards: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_rewards), uncollectedProtocolFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.uncollected_protocol_fees), protocolFeeOnNewRewards: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fee_on_new_rewards), prevSuiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.prev_sui_claimable_per_dsui), newSuiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.new_sui_claimable_per_dsui), exchangeRateIncrease: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.exchange_rate_increase) });
    }
    static fromBcs(data) { return TotalRewardsUpdated.fromFields(TotalRewardsUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            curEpoch: this.curEpoch.toString(), totalPrincipalStaked: this.totalPrincipalStaked.toString(), suiToUnstake: this.suiToUnstake.toString(), totalAccruedRewards: this.totalAccruedRewards.toString(), newRewards: this.newRewards.toString(), uncollectedProtocolFees: this.uncollectedProtocolFees.toString(), protocolFeeOnNewRewards: this.protocolFeeOnNewRewards.toString(), prevSuiClaimablePerDsui: this.prevSuiClaimablePerDsui.toString(), newSuiClaimablePerDsui: this.newSuiClaimablePerDsui.toString(), exchangeRateIncrease: this.exchangeRateIncrease.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TotalRewardsUpdated.reified().new({ curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch), totalPrincipalStaked: (0, reified_1.decodeFromJSONField)("u64", field.totalPrincipalStaked), suiToUnstake: (0, reified_1.decodeFromJSONField)("u64", field.suiToUnstake), totalAccruedRewards: (0, reified_1.decodeFromJSONField)("u64", field.totalAccruedRewards), newRewards: (0, reified_1.decodeFromJSONField)("u64", field.newRewards), uncollectedProtocolFees: (0, reified_1.decodeFromJSONField)("u64", field.uncollectedProtocolFees), protocolFeeOnNewRewards: (0, reified_1.decodeFromJSONField)("u64", field.protocolFeeOnNewRewards), prevSuiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.prevSuiClaimablePerDsui), newSuiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.newSuiClaimablePerDsui), exchangeRateIncrease: (0, reified_1.decodeFromJSONField)("u128", field.exchangeRateIncrease) }); }
    static fromJSON(json) {
        if (json.$typeName !== TotalRewardsUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TotalRewardsUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTotalRewardsUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TotalRewardsUpdated object`);
    } return TotalRewardsUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TotalRewardsUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTotalRewardsUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TotalRewardsUpdated object`);
        }
        return TotalRewardsUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TotalRewardsUpdated = TotalRewardsUpdated;
TotalRewardsUpdated.$typeName = `${index_1.PKG_V1}::dsui_vault::TotalRewardsUpdated`;
TotalRewardsUpdated.$numTypeParams = 0;
TotalRewardsUpdated.$isPhantom = [];
/* ============================== UnstakeRequest =============================== */
function isUnstakeRequest(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::UnstakeRequest`; }
class UnstakeRequest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UnstakeRequest.$typeName;
        this.$isPhantom = UnstakeRequest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UnstakeRequest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.dsuiAmount = fields.dsuiAmount;
        ;
        this.suiAmount = fields.suiAmount;
        ;
        this.requestedAtEpoch = fields.requestedAtEpoch;
    }
    static reified() { return { typeName: UnstakeRequest.$typeName, fullTypeName: (0, util_1.composeSuiType)(UnstakeRequest.$typeName, ...[]), typeArgs: [], isPhantom: UnstakeRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UnstakeRequest.fromFields(fields), fromFieldsWithTypes: (item) => UnstakeRequest.fromFieldsWithTypes(item), fromBcs: (data) => UnstakeRequest.fromBcs(data), bcs: UnstakeRequest.bcs, fromJSONField: (field) => UnstakeRequest.fromJSONField(field), fromJSON: (json) => UnstakeRequest.fromJSON(json), fromSuiParsedData: (content) => UnstakeRequest.fromSuiParsedData(content), fetch: async (client, id) => UnstakeRequest.fetch(client, id), new: (fields) => { return new UnstakeRequest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UnstakeRequest.reified(); }
    static phantom() { return (0, reified_1.phantom)(UnstakeRequest.reified()); }
    static get p() { return UnstakeRequest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UnstakeRequest", {
            id: structs_4.UID.bcs, dsui_amount: bcs_1.bcs.u64(), sui_amount: bcs_1.bcs.u64(), requested_at_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UnstakeRequest.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), dsuiAmount: (0, reified_1.decodeFromFields)("u64", fields.dsui_amount), suiAmount: (0, reified_1.decodeFromFields)("u64", fields.sui_amount), requestedAtEpoch: (0, reified_1.decodeFromFields)("u64", fields.requested_at_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isUnstakeRequest(item.type)) {
            throw new Error("not a UnstakeRequest type");
        }
        return UnstakeRequest.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), dsuiAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_amount), suiAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_amount), requestedAtEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.requested_at_epoch) });
    }
    static fromBcs(data) { return UnstakeRequest.fromFields(UnstakeRequest.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, dsuiAmount: this.dsuiAmount.toString(), suiAmount: this.suiAmount.toString(), requestedAtEpoch: this.requestedAtEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UnstakeRequest.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), dsuiAmount: (0, reified_1.decodeFromJSONField)("u64", field.dsuiAmount), suiAmount: (0, reified_1.decodeFromJSONField)("u64", field.suiAmount), requestedAtEpoch: (0, reified_1.decodeFromJSONField)("u64", field.requestedAtEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== UnstakeRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UnstakeRequest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnstakeRequest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UnstakeRequest object`);
    } return UnstakeRequest.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UnstakeRequest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnstakeRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnstakeRequest object`);
        }
        return UnstakeRequest.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UnstakeRequest = UnstakeRequest;
UnstakeRequest.$typeName = `${index_1.PKG_V1}::dsui_vault::UnstakeRequest`;
UnstakeRequest.$numTypeParams = 0;
UnstakeRequest.$isPhantom = [];
/* ============================== UnstakingRequestsProcessed =============================== */
function isUnstakingRequestsProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::UnstakingRequestsProcessed`; }
class UnstakingRequestsProcessed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UnstakingRequestsProcessed.$typeName;
        this.$isPhantom = UnstakingRequestsProcessed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UnstakingRequestsProcessed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.curEpoch = fields.curEpoch;
        ;
        this.totalSuiUnstaked = fields.totalSuiUnstaked;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
    }
    static reified() { return { typeName: UnstakingRequestsProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(UnstakingRequestsProcessed.$typeName, ...[]), typeArgs: [], isPhantom: UnstakingRequestsProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UnstakingRequestsProcessed.fromFields(fields), fromFieldsWithTypes: (item) => UnstakingRequestsProcessed.fromFieldsWithTypes(item), fromBcs: (data) => UnstakingRequestsProcessed.fromBcs(data), bcs: UnstakingRequestsProcessed.bcs, fromJSONField: (field) => UnstakingRequestsProcessed.fromJSONField(field), fromJSON: (json) => UnstakingRequestsProcessed.fromJSON(json), fromSuiParsedData: (content) => UnstakingRequestsProcessed.fromSuiParsedData(content), fetch: async (client, id) => UnstakingRequestsProcessed.fetch(client, id), new: (fields) => { return new UnstakingRequestsProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UnstakingRequestsProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(UnstakingRequestsProcessed.reified()); }
    static get p() { return UnstakingRequestsProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UnstakingRequestsProcessed", {
            cur_epoch: bcs_1.bcs.u64(), total_sui_unstaked: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return UnstakingRequestsProcessed.reified().new({ curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch), totalSuiUnstaked: (0, reified_1.decodeFromFields)("u64", fields.total_sui_unstaked), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui) }); }
    static fromFieldsWithTypes(item) {
        if (!isUnstakingRequestsProcessed(item.type)) {
            throw new Error("not a UnstakingRequestsProcessed type");
        }
        return UnstakingRequestsProcessed.reified().new({ curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch), totalSuiUnstaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_sui_unstaked), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui) });
    }
    static fromBcs(data) { return UnstakingRequestsProcessed.fromFields(UnstakingRequestsProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            curEpoch: this.curEpoch.toString(), totalSuiUnstaked: this.totalSuiUnstaked.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UnstakingRequestsProcessed.reified().new({ curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch), totalSuiUnstaked: (0, reified_1.decodeFromJSONField)("u64", field.totalSuiUnstaked), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui) }); }
    static fromJSON(json) {
        if (json.$typeName !== UnstakingRequestsProcessed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UnstakingRequestsProcessed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnstakingRequestsProcessed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UnstakingRequestsProcessed object`);
    } return UnstakingRequestsProcessed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UnstakingRequestsProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnstakingRequestsProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnstakingRequestsProcessed object`);
        }
        return UnstakingRequestsProcessed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UnstakingRequestsProcessed = UnstakingRequestsProcessed;
UnstakingRequestsProcessed.$typeName = `${index_1.PKG_V1}::dsui_vault::UnstakingRequestsProcessed`;
UnstakingRequestsProcessed.$numTypeParams = 0;
UnstakingRequestsProcessed.$isPhantom = [];
/* ============================== UserClaimedSui =============================== */
function isUserClaimedSui(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::UserClaimedSui`; }
class UserClaimedSui {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UserClaimedSui.$typeName;
        this.$isPhantom = UserClaimedSui.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserClaimedSui.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.owner = fields.owner;
        ;
        this.suiWithdrawn = fields.suiWithdrawn;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: UserClaimedSui.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserClaimedSui.$typeName, ...[]), typeArgs: [], isPhantom: UserClaimedSui.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserClaimedSui.fromFields(fields), fromFieldsWithTypes: (item) => UserClaimedSui.fromFieldsWithTypes(item), fromBcs: (data) => UserClaimedSui.fromBcs(data), bcs: UserClaimedSui.bcs, fromJSONField: (field) => UserClaimedSui.fromJSONField(field), fromJSON: (json) => UserClaimedSui.fromJSON(json), fromSuiParsedData: (content) => UserClaimedSui.fromSuiParsedData(content), fetch: async (client, id) => UserClaimedSui.fetch(client, id), new: (fields) => { return new UserClaimedSui([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserClaimedSui.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserClaimedSui.reified()); }
    static get p() { return UserClaimedSui.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserClaimedSui", {
            id: structs_4.ID.bcs, owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), sui_withdrawn: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UserClaimedSui.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.id), owner: (0, reified_1.decodeFromFields)("address", fields.owner), suiWithdrawn: (0, reified_1.decodeFromFields)("u64", fields.sui_withdrawn), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserClaimedSui(item.type)) {
            throw new Error("not a UserClaimedSui type");
        }
        return UserClaimedSui.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.id), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), suiWithdrawn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_withdrawn), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return UserClaimedSui.fromFields(UserClaimedSui.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, owner: this.owner, suiWithdrawn: this.suiWithdrawn.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserClaimedSui.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.id), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), suiWithdrawn: (0, reified_1.decodeFromJSONField)("u64", field.suiWithdrawn), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserClaimedSui.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserClaimedSui.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserClaimedSui(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserClaimedSui object`);
    } return UserClaimedSui.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserClaimedSui object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserClaimedSui(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserClaimedSui object`);
        }
        return UserClaimedSui.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserClaimedSui = UserClaimedSui;
UserClaimedSui.$typeName = `${index_1.PKG_V1}::dsui_vault::UserClaimedSui`;
UserClaimedSui.$numTypeParams = 0;
UserClaimedSui.$isPhantom = [];
/* ============================== UserUnstakeRequest =============================== */
function isUserUnstakeRequest(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::UserUnstakeRequest`; }
class UserUnstakeRequest {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UserUnstakeRequest.$typeName;
        this.$isPhantom = UserUnstakeRequest.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserUnstakeRequest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.owner = fields.owner;
        ;
        this.unstakeEpoch = fields.unstakeEpoch;
        ;
        this.suiToClaim = fields.suiToClaim;
        ;
        this.dsuiBurnt = fields.dsuiBurnt;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: UserUnstakeRequest.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserUnstakeRequest.$typeName, ...[]), typeArgs: [], isPhantom: UserUnstakeRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserUnstakeRequest.fromFields(fields), fromFieldsWithTypes: (item) => UserUnstakeRequest.fromFieldsWithTypes(item), fromBcs: (data) => UserUnstakeRequest.fromBcs(data), bcs: UserUnstakeRequest.bcs, fromJSONField: (field) => UserUnstakeRequest.fromJSONField(field), fromJSON: (json) => UserUnstakeRequest.fromJSON(json), fromSuiParsedData: (content) => UserUnstakeRequest.fromSuiParsedData(content), fetch: async (client, id) => UserUnstakeRequest.fetch(client, id), new: (fields) => { return new UserUnstakeRequest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserUnstakeRequest.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserUnstakeRequest.reified()); }
    static get p() { return UserUnstakeRequest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserUnstakeRequest", {
            owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), unstake_epoch: bcs_1.bcs.u64(), sui_to_claim: bcs_1.bcs.u64(), dsui_burnt: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UserUnstakeRequest.reified().new({ owner: (0, reified_1.decodeFromFields)("address", fields.owner), unstakeEpoch: (0, reified_1.decodeFromFields)("u64", fields.unstake_epoch), suiToClaim: (0, reified_1.decodeFromFields)("u64", fields.sui_to_claim), dsuiBurnt: (0, reified_1.decodeFromFields)("u64", fields.dsui_burnt), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserUnstakeRequest(item.type)) {
            throw new Error("not a UserUnstakeRequest type");
        }
        return UserUnstakeRequest.reified().new({ owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), unstakeEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unstake_epoch), suiToClaim: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_to_claim), dsuiBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_burnt), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return UserUnstakeRequest.fromFields(UserUnstakeRequest.bcs.parse(data)); }
    toJSONField() {
        return {
            owner: this.owner, unstakeEpoch: this.unstakeEpoch.toString(), suiToClaim: this.suiToClaim.toString(), dsuiBurnt: this.dsuiBurnt.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserUnstakeRequest.reified().new({ owner: (0, reified_1.decodeFromJSONField)("address", field.owner), unstakeEpoch: (0, reified_1.decodeFromJSONField)("u64", field.unstakeEpoch), suiToClaim: (0, reified_1.decodeFromJSONField)("u64", field.suiToClaim), dsuiBurnt: (0, reified_1.decodeFromJSONField)("u64", field.dsuiBurnt), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserUnstakeRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserUnstakeRequest.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserUnstakeRequest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserUnstakeRequest object`);
    } return UserUnstakeRequest.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserUnstakeRequest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserUnstakeRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserUnstakeRequest object`);
        }
        return UserUnstakeRequest.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserUnstakeRequest = UserUnstakeRequest;
UserUnstakeRequest.$typeName = `${index_1.PKG_V1}::dsui_vault::UserUnstakeRequest`;
UserUnstakeRequest.$numTypeParams = 0;
UserUnstakeRequest.$isPhantom = [];
/* ============================== UserUnstakedInstantly =============================== */
function isUserUnstakedInstantly(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::UserUnstakedInstantly`; }
class UserUnstakedInstantly {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UserUnstakedInstantly.$typeName;
        this.$isPhantom = UserUnstakedInstantly.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UserUnstakedInstantly.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.owner = fields.owner;
        ;
        this.suiWithdrawn = fields.suiWithdrawn;
        ;
        this.serviceFeeCharged = fields.serviceFeeCharged;
        ;
        this.protocolFeeCharged = fields.protocolFeeCharged;
        ;
        this.dsuiBurnt = fields.dsuiBurnt;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: UserUnstakedInstantly.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserUnstakedInstantly.$typeName, ...[]), typeArgs: [], isPhantom: UserUnstakedInstantly.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserUnstakedInstantly.fromFields(fields), fromFieldsWithTypes: (item) => UserUnstakedInstantly.fromFieldsWithTypes(item), fromBcs: (data) => UserUnstakedInstantly.fromBcs(data), bcs: UserUnstakedInstantly.bcs, fromJSONField: (field) => UserUnstakedInstantly.fromJSONField(field), fromJSON: (json) => UserUnstakedInstantly.fromJSON(json), fromSuiParsedData: (content) => UserUnstakedInstantly.fromSuiParsedData(content), fetch: async (client, id) => UserUnstakedInstantly.fetch(client, id), new: (fields) => { return new UserUnstakedInstantly([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserUnstakedInstantly.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserUnstakedInstantly.reified()); }
    static get p() { return UserUnstakedInstantly.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserUnstakedInstantly", {
            owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), sui_withdrawn: bcs_1.bcs.u64(), service_fee_charged: bcs_1.bcs.u64(), protocol_fee_charged: bcs_1.bcs.u64(), dsui_burnt: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UserUnstakedInstantly.reified().new({ owner: (0, reified_1.decodeFromFields)("address", fields.owner), suiWithdrawn: (0, reified_1.decodeFromFields)("u64", fields.sui_withdrawn), serviceFeeCharged: (0, reified_1.decodeFromFields)("u64", fields.service_fee_charged), protocolFeeCharged: (0, reified_1.decodeFromFields)("u64", fields.protocol_fee_charged), dsuiBurnt: (0, reified_1.decodeFromFields)("u64", fields.dsui_burnt), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserUnstakedInstantly(item.type)) {
            throw new Error("not a UserUnstakedInstantly type");
        }
        return UserUnstakedInstantly.reified().new({ owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), suiWithdrawn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_withdrawn), serviceFeeCharged: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.service_fee_charged), protocolFeeCharged: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fee_charged), dsuiBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_burnt), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return UserUnstakedInstantly.fromFields(UserUnstakedInstantly.bcs.parse(data)); }
    toJSONField() {
        return {
            owner: this.owner, suiWithdrawn: this.suiWithdrawn.toString(), serviceFeeCharged: this.serviceFeeCharged.toString(), protocolFeeCharged: this.protocolFeeCharged.toString(), dsuiBurnt: this.dsuiBurnt.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserUnstakedInstantly.reified().new({ owner: (0, reified_1.decodeFromJSONField)("address", field.owner), suiWithdrawn: (0, reified_1.decodeFromJSONField)("u64", field.suiWithdrawn), serviceFeeCharged: (0, reified_1.decodeFromJSONField)("u64", field.serviceFeeCharged), protocolFeeCharged: (0, reified_1.decodeFromJSONField)("u64", field.protocolFeeCharged), dsuiBurnt: (0, reified_1.decodeFromJSONField)("u64", field.dsuiBurnt), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== UserUnstakedInstantly.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UserUnstakedInstantly.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUserUnstakedInstantly(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UserUnstakedInstantly object`);
    } return UserUnstakedInstantly.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserUnstakedInstantly object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserUnstakedInstantly(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserUnstakedInstantly object`);
        }
        return UserUnstakedInstantly.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UserUnstakedInstantly = UserUnstakedInstantly;
UserUnstakedInstantly.$typeName = `${index_1.PKG_V1}::dsui_vault::UserUnstakedInstantly`;
UserUnstakedInstantly.$numTypeParams = 0;
UserUnstakedInstantly.$isPhantom = [];
/* ============================== ValidatorListUpdated =============================== */
function isValidatorListUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::ValidatorListUpdated`; }
class ValidatorListUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorListUpdated.$typeName;
        this.$isPhantom = ValidatorListUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorListUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.validatorList = fields.validatorList;
        ;
        this.toAdd = fields.toAdd;
    }
    static reified() { return { typeName: ValidatorListUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorListUpdated.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorListUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorListUpdated.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorListUpdated.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorListUpdated.fromBcs(data), bcs: ValidatorListUpdated.bcs, fromJSONField: (field) => ValidatorListUpdated.fromJSONField(field), fromJSON: (json) => ValidatorListUpdated.fromJSON(json), fromSuiParsedData: (content) => ValidatorListUpdated.fromSuiParsedData(content), fetch: async (client, id) => ValidatorListUpdated.fetch(client, id), new: (fields) => { return new ValidatorListUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorListUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorListUpdated.reified()); }
    static get p() { return ValidatorListUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorListUpdated", {
            validator_list: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })), to_add: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return ValidatorListUpdated.reified().new({ validatorList: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.validator_list), toAdd: (0, reified_1.decodeFromFields)("bool", fields.to_add) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorListUpdated(item.type)) {
            throw new Error("not a ValidatorListUpdated type");
        }
        return ValidatorListUpdated.reified().new({ validatorList: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.validator_list), toAdd: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.to_add) });
    }
    static fromBcs(data) { return ValidatorListUpdated.fromFields(ValidatorListUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            validatorList: (0, reified_1.fieldToJSON)(`vector<address>`, this.validatorList), toAdd: this.toAdd,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorListUpdated.reified().new({ validatorList: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.validatorList), toAdd: (0, reified_1.decodeFromJSONField)("bool", field.toAdd) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorListUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorListUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorListUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorListUpdated object`);
    } return ValidatorListUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorListUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorListUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorListUpdated object`);
        }
        return ValidatorListUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ValidatorListUpdated = ValidatorListUpdated;
ValidatorListUpdated.$typeName = `${index_1.PKG_V1}::dsui_vault::ValidatorListUpdated`;
ValidatorListUpdated.$numTypeParams = 0;
ValidatorListUpdated.$isPhantom = [];
/* ============================== ValidatorPool =============================== */
function isValidatorPool(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::ValidatorPool`; }
class ValidatorPool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorPool.$typeName;
        this.$isPhantom = ValidatorPool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorPool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.stakedSuiObjects = fields.stakedSuiObjects;
        ;
        this.totalPrincipalStaked = fields.totalPrincipalStaked;
        ;
        this.accruedRewards = fields.accruedRewards;
    }
    static reified() { return { typeName: ValidatorPool.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorPool.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorPool.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorPool.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorPool.fromBcs(data), bcs: ValidatorPool.bcs, fromJSONField: (field) => ValidatorPool.fromJSONField(field), fromJSON: (json) => ValidatorPool.fromJSON(json), fromSuiParsedData: (content) => ValidatorPool.fromSuiParsedData(content), fetch: async (client, id) => ValidatorPool.fetch(client, id), new: (fields) => { return new ValidatorPool([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorPool.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorPool.reified()); }
    static get p() { return ValidatorPool.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorPool", {
            staked_sui_objects: structs_3.LinkedTable.bcs(bcs_1.bcs.u64()), total_principal_staked: bcs_1.bcs.u64(), accrued_rewards: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ValidatorPool.reified().new({ stakedSuiObjects: (0, reified_1.decodeFromFields)(structs_3.LinkedTable.reified("u64", reified.phantom(structs_6.StakedSui.reified())), fields.staked_sui_objects), totalPrincipalStaked: (0, reified_1.decodeFromFields)("u64", fields.total_principal_staked), accruedRewards: (0, reified_1.decodeFromFields)("u64", fields.accrued_rewards) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorPool(item.type)) {
            throw new Error("not a ValidatorPool type");
        }
        return ValidatorPool.reified().new({ stakedSuiObjects: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.LinkedTable.reified("u64", reified.phantom(structs_6.StakedSui.reified())), item.fields.staked_sui_objects), totalPrincipalStaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_principal_staked), accruedRewards: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.accrued_rewards) });
    }
    static fromBcs(data) { return ValidatorPool.fromFields(ValidatorPool.bcs.parse(data)); }
    toJSONField() {
        return {
            stakedSuiObjects: this.stakedSuiObjects.toJSONField(), totalPrincipalStaked: this.totalPrincipalStaked.toString(), accruedRewards: this.accruedRewards.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorPool.reified().new({ stakedSuiObjects: (0, reified_1.decodeFromJSONField)(structs_3.LinkedTable.reified("u64", reified.phantom(structs_6.StakedSui.reified())), field.stakedSuiObjects), totalPrincipalStaked: (0, reified_1.decodeFromJSONField)("u64", field.totalPrincipalStaked), accruedRewards: (0, reified_1.decodeFromJSONField)("u64", field.accruedRewards) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorPool.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorPool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorPool object`);
    } return ValidatorPool.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorPool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorPool object`);
        }
        return ValidatorPool.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ValidatorPool = ValidatorPool;
ValidatorPool.$typeName = `${index_1.PKG_V1}::dsui_vault::ValidatorPool`;
ValidatorPool.$numTypeParams = 0;
ValidatorPool.$isPhantom = [];
/* ============================== ValidatorPoolDestroyed =============================== */
function isValidatorPoolDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::ValidatorPoolDestroyed`; }
class ValidatorPoolDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorPoolDestroyed.$typeName;
        this.$isPhantom = ValidatorPoolDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorPoolDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.validatorAddress = fields.validatorAddress;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: ValidatorPoolDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorPoolDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorPoolDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorPoolDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorPoolDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorPoolDestroyed.fromBcs(data), bcs: ValidatorPoolDestroyed.bcs, fromJSONField: (field) => ValidatorPoolDestroyed.fromJSONField(field), fromJSON: (json) => ValidatorPoolDestroyed.fromJSON(json), fromSuiParsedData: (content) => ValidatorPoolDestroyed.fromSuiParsedData(content), fetch: async (client, id) => ValidatorPoolDestroyed.fetch(client, id), new: (fields) => { return new ValidatorPoolDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorPoolDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorPoolDestroyed.reified()); }
    static get p() { return ValidatorPoolDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorPoolDestroyed", {
            validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ValidatorPoolDestroyed.reified().new({ validatorAddress: (0, reified_1.decodeFromFields)("address", fields.validator_address), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorPoolDestroyed(item.type)) {
            throw new Error("not a ValidatorPoolDestroyed type");
        }
        return ValidatorPoolDestroyed.reified().new({ validatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_address), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return ValidatorPoolDestroyed.fromFields(ValidatorPoolDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            validatorAddress: this.validatorAddress, curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorPoolDestroyed.reified().new({ validatorAddress: (0, reified_1.decodeFromJSONField)("address", field.validatorAddress), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorPoolDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorPoolDestroyed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorPoolDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorPoolDestroyed object`);
    } return ValidatorPoolDestroyed.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorPoolDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorPoolDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorPoolDestroyed object`);
        }
        return ValidatorPoolDestroyed.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ValidatorPoolDestroyed = ValidatorPoolDestroyed;
ValidatorPoolDestroyed.$typeName = `${index_1.PKG_V1}::dsui_vault::ValidatorPoolDestroyed`;
ValidatorPoolDestroyed.$numTypeParams = 0;
ValidatorPoolDestroyed.$isPhantom = [];
/* ============================== ValidatorPoolRewardsUpdated =============================== */
function isValidatorPoolRewardsUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::dsui_vault::ValidatorPoolRewardsUpdated`; }
class ValidatorPoolRewardsUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorPoolRewardsUpdated.$typeName;
        this.$isPhantom = ValidatorPoolRewardsUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorPoolRewardsUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.validatorAddr = fields.validatorAddr;
        ;
        this.totalStakedSuiObjs = fields.totalStakedSuiObjs;
        ;
        this.prevRewards = fields.prevRewards;
        ;
        this.newRewards = fields.newRewards;
        ;
        this.totalPrincipalStaked = fields.totalPrincipalStaked;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: ValidatorPoolRewardsUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorPoolRewardsUpdated.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorPoolRewardsUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorPoolRewardsUpdated.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorPoolRewardsUpdated.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorPoolRewardsUpdated.fromBcs(data), bcs: ValidatorPoolRewardsUpdated.bcs, fromJSONField: (field) => ValidatorPoolRewardsUpdated.fromJSONField(field), fromJSON: (json) => ValidatorPoolRewardsUpdated.fromJSON(json), fromSuiParsedData: (content) => ValidatorPoolRewardsUpdated.fromSuiParsedData(content), fetch: async (client, id) => ValidatorPoolRewardsUpdated.fetch(client, id), new: (fields) => { return new ValidatorPoolRewardsUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorPoolRewardsUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorPoolRewardsUpdated.reified()); }
    static get p() { return ValidatorPoolRewardsUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorPoolRewardsUpdated", {
            validator_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), total_staked_sui_objs: bcs_1.bcs.u64(), prev_rewards: bcs_1.bcs.u64(), new_rewards: bcs_1.bcs.u64(), total_principal_staked: bcs_1.bcs.u64(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ValidatorPoolRewardsUpdated.reified().new({ validatorAddr: (0, reified_1.decodeFromFields)("address", fields.validator_addr), totalStakedSuiObjs: (0, reified_1.decodeFromFields)("u64", fields.total_staked_sui_objs), prevRewards: (0, reified_1.decodeFromFields)("u64", fields.prev_rewards), newRewards: (0, reified_1.decodeFromFields)("u64", fields.new_rewards), totalPrincipalStaked: (0, reified_1.decodeFromFields)("u64", fields.total_principal_staked), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorPoolRewardsUpdated(item.type)) {
            throw new Error("not a ValidatorPoolRewardsUpdated type");
        }
        return ValidatorPoolRewardsUpdated.reified().new({ validatorAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_addr), totalStakedSuiObjs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_staked_sui_objs), prevRewards: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.prev_rewards), newRewards: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_rewards), totalPrincipalStaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_principal_staked), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return ValidatorPoolRewardsUpdated.fromFields(ValidatorPoolRewardsUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            validatorAddr: this.validatorAddr, totalStakedSuiObjs: this.totalStakedSuiObjs.toString(), prevRewards: this.prevRewards.toString(), newRewards: this.newRewards.toString(), totalPrincipalStaked: this.totalPrincipalStaked.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorPoolRewardsUpdated.reified().new({ validatorAddr: (0, reified_1.decodeFromJSONField)("address", field.validatorAddr), totalStakedSuiObjs: (0, reified_1.decodeFromJSONField)("u64", field.totalStakedSuiObjs), prevRewards: (0, reified_1.decodeFromJSONField)("u64", field.prevRewards), newRewards: (0, reified_1.decodeFromJSONField)("u64", field.newRewards), totalPrincipalStaked: (0, reified_1.decodeFromJSONField)("u64", field.totalPrincipalStaked), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorPoolRewardsUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorPoolRewardsUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorPoolRewardsUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorPoolRewardsUpdated object`);
    } return ValidatorPoolRewardsUpdated.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorPoolRewardsUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorPoolRewardsUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorPoolRewardsUpdated object`);
        }
        return ValidatorPoolRewardsUpdated.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ValidatorPoolRewardsUpdated = ValidatorPoolRewardsUpdated;
ValidatorPoolRewardsUpdated.$typeName = `${index_1.PKG_V1}::dsui_vault::ValidatorPoolRewardsUpdated`;
ValidatorPoolRewardsUpdated.$numTypeParams = 0;
ValidatorPoolRewardsUpdated.$isPhantom = [];
