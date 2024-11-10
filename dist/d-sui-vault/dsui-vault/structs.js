"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorPoolDestroyed = exports.ValidatorPool = exports.ValidatorListUpdated = exports.UserUnstakedInstantly = exports.UserUnstakeRequest = exports.UserClaimedSui = exports.UnstakeRequest = exports.TotalRewardsUpdated = exports.StakeWithSelectedValidatorRequestProcessed = exports.StakeSuiRequestsProcessed = exports.StakeSuiRequest = exports.StakeOperationProcessed = exports.RequestsForEpochDestroyed = exports.RequestsForEpoch = exports.LsdFeeCollected = exports.EmergencyPauseUpdate = exports.DegenSUIFeeStructureUpdated = exports.DSuiVault = exports.ConfigParams = void 0;
exports.isConfigParams = isConfigParams;
exports.isDSuiVault = isDSuiVault;
exports.isDegenSUIFeeStructureUpdated = isDegenSUIFeeStructureUpdated;
exports.isEmergencyPauseUpdate = isEmergencyPauseUpdate;
exports.isLsdFeeCollected = isLsdFeeCollected;
exports.isRequestsForEpoch = isRequestsForEpoch;
exports.isRequestsForEpochDestroyed = isRequestsForEpochDestroyed;
exports.isStakeOperationProcessed = isStakeOperationProcessed;
exports.isStakeSuiRequest = isStakeSuiRequest;
exports.isStakeSuiRequestsProcessed = isStakeSuiRequestsProcessed;
exports.isStakeWithSelectedValidatorRequestProcessed = isStakeWithSelectedValidatorRequestProcessed;
exports.isTotalRewardsUpdated = isTotalRewardsUpdated;
exports.isUnstakeRequest = isUnstakeRequest;
exports.isUserClaimedSui = isUserClaimedSui;
exports.isUserUnstakeRequest = isUserUnstakeRequest;
exports.isUserUnstakedInstantly = isUserUnstakedInstantly;
exports.isValidatorListUpdated = isValidatorListUpdated;
exports.isValidatorPool = isValidatorPool;
exports.isValidatorPoolDestroyed = isValidatorPoolDestroyed;
const reified = require("../../_framework/reified");
const structs_1 = require("../../_dependencies/source/0x1/option/structs");
const structs_2 = require("../../_dependencies/source/0x2/bag/structs");
const structs_3 = require("../../_dependencies/source/0x2/balance/structs");
const structs_4 = require("../../_dependencies/source/0x2/coin/structs");
const structs_5 = require("../../_dependencies/source/0x2/linked-table/structs");
const structs_6 = require("../../_dependencies/source/0x2/object/structs");
const structs_7 = require("../../_dependencies/source/0x2/sui/structs");
const structs_8 = require("../../_dependencies/source/0x3/staking-pool/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const structs_9 = require("../../yield-flow/dsui/structs");
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const PUBLISHED_AT = __1.dsuivault.PUBLISHED_AT;
const PKG_V1 = __1.dsuivault.PKG_V1;
/* ============================== ConfigParams =============================== */
function isConfigParams(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::ConfigParams`; }
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
        this.redeemFeeBps = fields.redeemFeeBps;
        ;
        this.unstakeDelayEpoches = fields.unstakeDelayEpoches;
        ;
        this.treasuryPercent = fields.treasuryPercent;
    }
    static reified() { return { typeName: ConfigParams.$typeName, fullTypeName: (0, util_1.composeSuiType)(ConfigParams.$typeName, ...[]), typeArgs: [], isPhantom: ConfigParams.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ConfigParams.fromFields(fields), fromFieldsWithTypes: (item) => ConfigParams.fromFieldsWithTypes(item), fromBcs: (data) => ConfigParams.fromBcs(data), bcs: ConfigParams.bcs, fromJSONField: (field) => ConfigParams.fromJSONField(field), fromJSON: (json) => ConfigParams.fromJSON(json), fromSuiParsedData: (content) => ConfigParams.fromSuiParsedData(content), fromSuiObjectData: (content) => ConfigParams.fromSuiObjectData(content), fetch: async (client, id) => ConfigParams.fetch(client, id), new: (fields) => { return new ConfigParams([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ConfigParams.reified(); }
    static phantom() { return (0, reified_1.phantom)(ConfigParams.reified()); }
    static get p() { return ConfigParams.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ConfigParams", {
            pause_stake: bcs_1.bcs.bool(), protocol_fee_percent: bcs_1.bcs.u64(), redeem_fee_bps: bcs_1.bcs.u64(), unstake_delay_epoches: bcs_1.bcs.u64(), treasury_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ConfigParams.reified().new({ pauseStake: (0, reified_1.decodeFromFields)("bool", fields.pause_stake), protocolFeePercent: (0, reified_1.decodeFromFields)("u64", fields.protocol_fee_percent), redeemFeeBps: (0, reified_1.decodeFromFields)("u64", fields.redeem_fee_bps), unstakeDelayEpoches: (0, reified_1.decodeFromFields)("u64", fields.unstake_delay_epoches), treasuryPercent: (0, reified_1.decodeFromFields)("u64", fields.treasury_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isConfigParams(item.type)) {
            throw new Error("not a ConfigParams type");
        }
        return ConfigParams.reified().new({ pauseStake: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.pause_stake), protocolFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fee_percent), redeemFeeBps: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.redeem_fee_bps), unstakeDelayEpoches: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unstake_delay_epoches), treasuryPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_percent) });
    }
    static fromBcs(data) { return ConfigParams.fromFields(ConfigParams.bcs.parse(data)); }
    toJSONField() {
        return {
            pauseStake: this.pauseStake, protocolFeePercent: this.protocolFeePercent.toString(), redeemFeeBps: this.redeemFeeBps.toString(), unstakeDelayEpoches: this.unstakeDelayEpoches.toString(), treasuryPercent: this.treasuryPercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ConfigParams.reified().new({ pauseStake: (0, reified_1.decodeFromJSONField)("bool", field.pauseStake), protocolFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.protocolFeePercent), redeemFeeBps: (0, reified_1.decodeFromJSONField)("u64", field.redeemFeeBps), unstakeDelayEpoches: (0, reified_1.decodeFromJSONField)("u64", field.unstakeDelayEpoches), treasuryPercent: (0, reified_1.decodeFromJSONField)("u64", field.treasuryPercent) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConfigParams(data.bcs.type)) {
                throw new Error(`object at is not a ConfigParams object`);
            }
            return ConfigParams.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ConfigParams.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ConfigParams object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConfigParams(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ConfigParams object`);
        }
        return ConfigParams.fromSuiObjectData(res.data);
    }
}
exports.ConfigParams = ConfigParams;
ConfigParams.$typeName = `${PKG_V1}::dsui_vault::ConfigParams`;
ConfigParams.$numTypeParams = 0;
ConfigParams.$isPhantom = [];
/* ============================== DSuiVault =============================== */
function isDSuiVault(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::DSuiVault`; }
class DSuiVault {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DSuiVault.$typeName;
        this.$isPhantom = DSuiVault.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DSuiVault.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.dsuiKraftCap = fields.dsuiKraftCap;
        ;
        this.configParams = fields.configParams;
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
        this.totalSuiSupply = fields.totalSuiSupply;
        ;
        this.dsuiSupply = fields.dsuiSupply;
        ;
        this.suiToUnstake = fields.suiToUnstake;
        ;
        this.uncollectedProtocolFees = fields.uncollectedProtocolFees;
        ;
        this.lastRefreshEpoch = fields.lastRefreshEpoch;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
        ;
        this.bag = fields.bag;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: DSuiVault.$typeName, fullTypeName: (0, util_1.composeSuiType)(DSuiVault.$typeName, ...[]), typeArgs: [], isPhantom: DSuiVault.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DSuiVault.fromFields(fields), fromFieldsWithTypes: (item) => DSuiVault.fromFieldsWithTypes(item), fromBcs: (data) => DSuiVault.fromBcs(data), bcs: DSuiVault.bcs, fromJSONField: (field) => DSuiVault.fromJSONField(field), fromJSON: (json) => DSuiVault.fromJSON(json), fromSuiParsedData: (content) => DSuiVault.fromSuiParsedData(content), fromSuiObjectData: (content) => DSuiVault.fromSuiObjectData(content), fetch: async (client, id) => DSuiVault.fetch(client, id), new: (fields) => { return new DSuiVault([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DSuiVault.reified(); }
    static phantom() { return (0, reified_1.phantom)(DSuiVault.reified()); }
    static get p() { return DSuiVault.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DSuiVault", {
            id: structs_6.UID.bcs, dsui_kraft_cap: structs_4.TreasuryCap.bcs, config_params: ConfigParams.bcs, whitelisted_validators: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), validator_pools: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), selected_validator_mapping: structs_5.LinkedTable.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), sui_to_stake: structs_3.Balance.bcs, hive_fee_vault: structs_3.Balance.bcs, unstaked_sui_reserve: structs_3.Balance.bcs, unstake_epochs: structs_5.LinkedTable.bcs(bcs_1.bcs.u64()), total_sui_supply: bcs_1.bcs.u64(), dsui_supply: bcs_1.bcs.u64(), sui_to_unstake: bcs_1.bcs.u64(), uncollected_protocol_fees: bcs_1.bcs.u64(), last_refresh_epoch: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128(), bag: structs_2.Bag.bcs, version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DSuiVault.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), dsuiKraftCap: (0, reified_1.decodeFromFields)(structs_4.TreasuryCap.reified(reified.phantom(structs_9.DSUI.reified())), fields.dsui_kraft_cap), configParams: (0, reified_1.decodeFromFields)(ConfigParams.reified(), fields.config_params), whitelistedValidators: (0, reified_1.decodeFromFields)(reified.vector("address"), fields.whitelisted_validators), validatorPools: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(ValidatorPool.reified())), fields.validator_pools), selectedValidatorMapping: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("address", reified.phantom(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())))), fields.selected_validator_mapping), suiToStake: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.sui_to_stake), hiveFeeVault: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.hive_fee_vault), unstakedSuiReserve: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())), fields.unstaked_sui_reserve), unstakeEpochs: (0, reified_1.decodeFromFields)(structs_5.LinkedTable.reified("u64", reified.phantom(RequestsForEpoch.reified())), fields.unstake_epochs), totalSuiSupply: (0, reified_1.decodeFromFields)("u64", fields.total_sui_supply), dsuiSupply: (0, reified_1.decodeFromFields)("u64", fields.dsui_supply), suiToUnstake: (0, reified_1.decodeFromFields)("u64", fields.sui_to_unstake), uncollectedProtocolFees: (0, reified_1.decodeFromFields)("u64", fields.uncollected_protocol_fees), lastRefreshEpoch: (0, reified_1.decodeFromFields)("u64", fields.last_refresh_epoch), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui), bag: (0, reified_1.decodeFromFields)(structs_2.Bag.reified(), fields.bag), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isDSuiVault(item.type)) {
            throw new Error("not a DSuiVault type");
        }
        return DSuiVault.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), dsuiKraftCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.TreasuryCap.reified(reified.phantom(structs_9.DSUI.reified())), item.fields.dsui_kraft_cap), configParams: (0, reified_1.decodeFromFieldsWithTypes)(ConfigParams.reified(), item.fields.config_params), whitelistedValidators: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("address"), item.fields.whitelisted_validators), validatorPools: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(ValidatorPool.reified())), item.fields.validator_pools), selectedValidatorMapping: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("address", reified.phantom(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())))), item.fields.selected_validator_mapping), suiToStake: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.sui_to_stake), hiveFeeVault: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.hive_fee_vault), unstakedSuiReserve: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())), item.fields.unstaked_sui_reserve), unstakeEpochs: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.LinkedTable.reified("u64", reified.phantom(RequestsForEpoch.reified())), item.fields.unstake_epochs), totalSuiSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_sui_supply), dsuiSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_supply), suiToUnstake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_to_unstake), uncollectedProtocolFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.uncollected_protocol_fees), lastRefreshEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_refresh_epoch), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui), bag: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Bag.reified(), item.fields.bag), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return DSuiVault.fromFields(DSuiVault.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, dsuiKraftCap: this.dsuiKraftCap.toJSONField(), configParams: this.configParams.toJSONField(), whitelistedValidators: (0, reified_1.fieldToJSON)(`vector<address>`, this.whitelistedValidators), validatorPools: this.validatorPools.toJSONField(), selectedValidatorMapping: this.selectedValidatorMapping.toJSONField(), suiToStake: this.suiToStake.toJSONField(), hiveFeeVault: this.hiveFeeVault.toJSONField(), unstakedSuiReserve: this.unstakedSuiReserve.toJSONField(), unstakeEpochs: this.unstakeEpochs.toJSONField(), totalSuiSupply: this.totalSuiSupply.toString(), dsuiSupply: this.dsuiSupply.toString(), suiToUnstake: this.suiToUnstake.toString(), uncollectedProtocolFees: this.uncollectedProtocolFees.toString(), lastRefreshEpoch: this.lastRefreshEpoch.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(), bag: this.bag.toJSONField(), version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DSuiVault.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), dsuiKraftCap: (0, reified_1.decodeFromJSONField)(structs_4.TreasuryCap.reified(reified.phantom(structs_9.DSUI.reified())), field.dsuiKraftCap), configParams: (0, reified_1.decodeFromJSONField)(ConfigParams.reified(), field.configParams), whitelistedValidators: (0, reified_1.decodeFromJSONField)(reified.vector("address"), field.whitelistedValidators), validatorPools: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(ValidatorPool.reified())), field.validatorPools), selectedValidatorMapping: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("address", reified.phantom(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())))), field.selectedValidatorMapping), suiToStake: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.suiToStake), hiveFeeVault: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.hiveFeeVault), unstakedSuiReserve: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(reified.phantom(structs_7.SUI.reified())), field.unstakedSuiReserve), unstakeEpochs: (0, reified_1.decodeFromJSONField)(structs_5.LinkedTable.reified("u64", reified.phantom(RequestsForEpoch.reified())), field.unstakeEpochs), totalSuiSupply: (0, reified_1.decodeFromJSONField)("u64", field.totalSuiSupply), dsuiSupply: (0, reified_1.decodeFromJSONField)("u64", field.dsuiSupply), suiToUnstake: (0, reified_1.decodeFromJSONField)("u64", field.suiToUnstake), uncollectedProtocolFees: (0, reified_1.decodeFromJSONField)("u64", field.uncollectedProtocolFees), lastRefreshEpoch: (0, reified_1.decodeFromJSONField)("u64", field.lastRefreshEpoch), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui), bag: (0, reified_1.decodeFromJSONField)(structs_2.Bag.reified(), field.bag), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDSuiVault(data.bcs.type)) {
                throw new Error(`object at is not a DSuiVault object`);
            }
            return DSuiVault.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DSuiVault.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DSuiVault object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDSuiVault(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DSuiVault object`);
        }
        return DSuiVault.fromSuiObjectData(res.data);
    }
}
exports.DSuiVault = DSuiVault;
DSuiVault.$typeName = `${PKG_V1}::dsui_vault::DSuiVault`;
DSuiVault.$numTypeParams = 0;
DSuiVault.$isPhantom = [];
/* ============================== DegenSUIFeeStructureUpdated =============================== */
function isDegenSUIFeeStructureUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::DegenSUIFeeStructureUpdated`; }
class DegenSUIFeeStructureUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DegenSUIFeeStructureUpdated.$typeName;
        this.$isPhantom = DegenSUIFeeStructureUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DegenSUIFeeStructureUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.protocolFeePercent = fields.protocolFeePercent;
        ;
        this.treasuryPercent = fields.treasuryPercent;
        ;
        this.redeemFeeBps = fields.redeemFeeBps;
        ;
        this.unstakeDelayEpoches = fields.unstakeDelayEpoches;
    }
    static reified() { return { typeName: DegenSUIFeeStructureUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(DegenSUIFeeStructureUpdated.$typeName, ...[]), typeArgs: [], isPhantom: DegenSUIFeeStructureUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DegenSUIFeeStructureUpdated.fromFields(fields), fromFieldsWithTypes: (item) => DegenSUIFeeStructureUpdated.fromFieldsWithTypes(item), fromBcs: (data) => DegenSUIFeeStructureUpdated.fromBcs(data), bcs: DegenSUIFeeStructureUpdated.bcs, fromJSONField: (field) => DegenSUIFeeStructureUpdated.fromJSONField(field), fromJSON: (json) => DegenSUIFeeStructureUpdated.fromJSON(json), fromSuiParsedData: (content) => DegenSUIFeeStructureUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => DegenSUIFeeStructureUpdated.fromSuiObjectData(content), fetch: async (client, id) => DegenSUIFeeStructureUpdated.fetch(client, id), new: (fields) => { return new DegenSUIFeeStructureUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DegenSUIFeeStructureUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(DegenSUIFeeStructureUpdated.reified()); }
    static get p() { return DegenSUIFeeStructureUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DegenSUIFeeStructureUpdated", {
            protocol_fee_percent: bcs_1.bcs.u64(), treasury_percent: bcs_1.bcs.u64(), redeem_fee_bps: bcs_1.bcs.u64(), unstake_delay_epoches: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return DegenSUIFeeStructureUpdated.reified().new({ protocolFeePercent: (0, reified_1.decodeFromFields)("u64", fields.protocol_fee_percent), treasuryPercent: (0, reified_1.decodeFromFields)("u64", fields.treasury_percent), redeemFeeBps: (0, reified_1.decodeFromFields)("u64", fields.redeem_fee_bps), unstakeDelayEpoches: (0, reified_1.decodeFromFields)("u64", fields.unstake_delay_epoches) }); }
    static fromFieldsWithTypes(item) {
        if (!isDegenSUIFeeStructureUpdated(item.type)) {
            throw new Error("not a DegenSUIFeeStructureUpdated type");
        }
        return DegenSUIFeeStructureUpdated.reified().new({ protocolFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fee_percent), treasuryPercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_percent), redeemFeeBps: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.redeem_fee_bps), unstakeDelayEpoches: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unstake_delay_epoches) });
    }
    static fromBcs(data) { return DegenSUIFeeStructureUpdated.fromFields(DegenSUIFeeStructureUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            protocolFeePercent: this.protocolFeePercent.toString(), treasuryPercent: this.treasuryPercent.toString(), redeemFeeBps: this.redeemFeeBps.toString(), unstakeDelayEpoches: this.unstakeDelayEpoches.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DegenSUIFeeStructureUpdated.reified().new({ protocolFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.protocolFeePercent), treasuryPercent: (0, reified_1.decodeFromJSONField)("u64", field.treasuryPercent), redeemFeeBps: (0, reified_1.decodeFromJSONField)("u64", field.redeemFeeBps), unstakeDelayEpoches: (0, reified_1.decodeFromJSONField)("u64", field.unstakeDelayEpoches) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDegenSUIFeeStructureUpdated(data.bcs.type)) {
                throw new Error(`object at is not a DegenSUIFeeStructureUpdated object`);
            }
            return DegenSUIFeeStructureUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DegenSUIFeeStructureUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DegenSUIFeeStructureUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDegenSUIFeeStructureUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DegenSUIFeeStructureUpdated object`);
        }
        return DegenSUIFeeStructureUpdated.fromSuiObjectData(res.data);
    }
}
exports.DegenSUIFeeStructureUpdated = DegenSUIFeeStructureUpdated;
DegenSUIFeeStructureUpdated.$typeName = `${PKG_V1}::dsui_vault::DegenSUIFeeStructureUpdated`;
DegenSUIFeeStructureUpdated.$numTypeParams = 0;
DegenSUIFeeStructureUpdated.$isPhantom = [];
/* ============================== EmergencyPauseUpdate =============================== */
function isEmergencyPauseUpdate(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::EmergencyPauseUpdate`; }
class EmergencyPauseUpdate {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = EmergencyPauseUpdate.$typeName;
        this.$isPhantom = EmergencyPauseUpdate.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(EmergencyPauseUpdate.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.pauseStake = fields.pauseStake;
    }
    static reified() { return { typeName: EmergencyPauseUpdate.$typeName, fullTypeName: (0, util_1.composeSuiType)(EmergencyPauseUpdate.$typeName, ...[]), typeArgs: [], isPhantom: EmergencyPauseUpdate.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => EmergencyPauseUpdate.fromFields(fields), fromFieldsWithTypes: (item) => EmergencyPauseUpdate.fromFieldsWithTypes(item), fromBcs: (data) => EmergencyPauseUpdate.fromBcs(data), bcs: EmergencyPauseUpdate.bcs, fromJSONField: (field) => EmergencyPauseUpdate.fromJSONField(field), fromJSON: (json) => EmergencyPauseUpdate.fromJSON(json), fromSuiParsedData: (content) => EmergencyPauseUpdate.fromSuiParsedData(content), fromSuiObjectData: (content) => EmergencyPauseUpdate.fromSuiObjectData(content), fetch: async (client, id) => EmergencyPauseUpdate.fetch(client, id), new: (fields) => { return new EmergencyPauseUpdate([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isEmergencyPauseUpdate(data.bcs.type)) {
                throw new Error(`object at is not a EmergencyPauseUpdate object`);
            }
            return EmergencyPauseUpdate.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return EmergencyPauseUpdate.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching EmergencyPauseUpdate object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEmergencyPauseUpdate(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a EmergencyPauseUpdate object`);
        }
        return EmergencyPauseUpdate.fromSuiObjectData(res.data);
    }
}
exports.EmergencyPauseUpdate = EmergencyPauseUpdate;
EmergencyPauseUpdate.$typeName = `${PKG_V1}::dsui_vault::EmergencyPauseUpdate`;
EmergencyPauseUpdate.$numTypeParams = 0;
EmergencyPauseUpdate.$isPhantom = [];
/* ============================== LsdFeeCollected =============================== */
function isLsdFeeCollected(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::LsdFeeCollected`; }
class LsdFeeCollected {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LsdFeeCollected.$typeName;
        this.$isPhantom = LsdFeeCollected.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LsdFeeCollected.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.collectedFeesAmt = fields.collectedFeesAmt;
        ;
        this.treasuryFees = fields.treasuryFees;
        ;
        this.suiForBuyback = fields.suiForBuyback;
    }
    static reified() { return { typeName: LsdFeeCollected.$typeName, fullTypeName: (0, util_1.composeSuiType)(LsdFeeCollected.$typeName, ...[]), typeArgs: [], isPhantom: LsdFeeCollected.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LsdFeeCollected.fromFields(fields), fromFieldsWithTypes: (item) => LsdFeeCollected.fromFieldsWithTypes(item), fromBcs: (data) => LsdFeeCollected.fromBcs(data), bcs: LsdFeeCollected.bcs, fromJSONField: (field) => LsdFeeCollected.fromJSONField(field), fromJSON: (json) => LsdFeeCollected.fromJSON(json), fromSuiParsedData: (content) => LsdFeeCollected.fromSuiParsedData(content), fromSuiObjectData: (content) => LsdFeeCollected.fromSuiObjectData(content), fetch: async (client, id) => LsdFeeCollected.fetch(client, id), new: (fields) => { return new LsdFeeCollected([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LsdFeeCollected.reified(); }
    static phantom() { return (0, reified_1.phantom)(LsdFeeCollected.reified()); }
    static get p() { return LsdFeeCollected.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LsdFeeCollected", {
            collected_fees_amt: bcs_1.bcs.u64(), treasury_fees: bcs_1.bcs.u64(), sui_for_buyback: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return LsdFeeCollected.reified().new({ collectedFeesAmt: (0, reified_1.decodeFromFields)("u64", fields.collected_fees_amt), treasuryFees: (0, reified_1.decodeFromFields)("u64", fields.treasury_fees), suiForBuyback: (0, reified_1.decodeFromFields)("u64", fields.sui_for_buyback) }); }
    static fromFieldsWithTypes(item) {
        if (!isLsdFeeCollected(item.type)) {
            throw new Error("not a LsdFeeCollected type");
        }
        return LsdFeeCollected.reified().new({ collectedFeesAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.collected_fees_amt), treasuryFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.treasury_fees), suiForBuyback: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_for_buyback) });
    }
    static fromBcs(data) { return LsdFeeCollected.fromFields(LsdFeeCollected.bcs.parse(data)); }
    toJSONField() {
        return {
            collectedFeesAmt: this.collectedFeesAmt.toString(), treasuryFees: this.treasuryFees.toString(), suiForBuyback: this.suiForBuyback.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LsdFeeCollected.reified().new({ collectedFeesAmt: (0, reified_1.decodeFromJSONField)("u64", field.collectedFeesAmt), treasuryFees: (0, reified_1.decodeFromJSONField)("u64", field.treasuryFees), suiForBuyback: (0, reified_1.decodeFromJSONField)("u64", field.suiForBuyback) }); }
    static fromJSON(json) {
        if (json.$typeName !== LsdFeeCollected.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LsdFeeCollected.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLsdFeeCollected(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LsdFeeCollected object`);
    } return LsdFeeCollected.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLsdFeeCollected(data.bcs.type)) {
                throw new Error(`object at is not a LsdFeeCollected object`);
            }
            return LsdFeeCollected.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LsdFeeCollected.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LsdFeeCollected object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLsdFeeCollected(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LsdFeeCollected object`);
        }
        return LsdFeeCollected.fromSuiObjectData(res.data);
    }
}
exports.LsdFeeCollected = LsdFeeCollected;
LsdFeeCollected.$typeName = `${PKG_V1}::dsui_vault::LsdFeeCollected`;
LsdFeeCollected.$numTypeParams = 0;
LsdFeeCollected.$isPhantom = [];
/* ============================== RequestsForEpoch =============================== */
function isRequestsForEpoch(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::RequestsForEpoch`; }
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
    static reified() { return { typeName: RequestsForEpoch.$typeName, fullTypeName: (0, util_1.composeSuiType)(RequestsForEpoch.$typeName, ...[]), typeArgs: [], isPhantom: RequestsForEpoch.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RequestsForEpoch.fromFields(fields), fromFieldsWithTypes: (item) => RequestsForEpoch.fromFieldsWithTypes(item), fromBcs: (data) => RequestsForEpoch.fromBcs(data), bcs: RequestsForEpoch.bcs, fromJSONField: (field) => RequestsForEpoch.fromJSONField(field), fromJSON: (json) => RequestsForEpoch.fromJSON(json), fromSuiParsedData: (content) => RequestsForEpoch.fromSuiParsedData(content), fromSuiObjectData: (content) => RequestsForEpoch.fromSuiObjectData(content), fetch: async (client, id) => RequestsForEpoch.fetch(client, id), new: (fields) => { return new RequestsForEpoch([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRequestsForEpoch(data.bcs.type)) {
                throw new Error(`object at is not a RequestsForEpoch object`);
            }
            return RequestsForEpoch.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RequestsForEpoch.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RequestsForEpoch object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRequestsForEpoch(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RequestsForEpoch object`);
        }
        return RequestsForEpoch.fromSuiObjectData(res.data);
    }
}
exports.RequestsForEpoch = RequestsForEpoch;
RequestsForEpoch.$typeName = `${PKG_V1}::dsui_vault::RequestsForEpoch`;
RequestsForEpoch.$numTypeParams = 0;
RequestsForEpoch.$isPhantom = [];
/* ============================== RequestsForEpochDestroyed =============================== */
function isRequestsForEpochDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::RequestsForEpochDestroyed`; }
class RequestsForEpochDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RequestsForEpochDestroyed.$typeName;
        this.$isPhantom = RequestsForEpochDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RequestsForEpochDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epoch = fields.epoch;
    }
    static reified() { return { typeName: RequestsForEpochDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(RequestsForEpochDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: RequestsForEpochDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RequestsForEpochDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => RequestsForEpochDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => RequestsForEpochDestroyed.fromBcs(data), bcs: RequestsForEpochDestroyed.bcs, fromJSONField: (field) => RequestsForEpochDestroyed.fromJSONField(field), fromJSON: (json) => RequestsForEpochDestroyed.fromJSON(json), fromSuiParsedData: (content) => RequestsForEpochDestroyed.fromSuiParsedData(content), fromSuiObjectData: (content) => RequestsForEpochDestroyed.fromSuiObjectData(content), fetch: async (client, id) => RequestsForEpochDestroyed.fetch(client, id), new: (fields) => { return new RequestsForEpochDestroyed([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRequestsForEpochDestroyed(data.bcs.type)) {
                throw new Error(`object at is not a RequestsForEpochDestroyed object`);
            }
            return RequestsForEpochDestroyed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RequestsForEpochDestroyed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RequestsForEpochDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRequestsForEpochDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RequestsForEpochDestroyed object`);
        }
        return RequestsForEpochDestroyed.fromSuiObjectData(res.data);
    }
}
exports.RequestsForEpochDestroyed = RequestsForEpochDestroyed;
RequestsForEpochDestroyed.$typeName = `${PKG_V1}::dsui_vault::RequestsForEpochDestroyed`;
RequestsForEpochDestroyed.$numTypeParams = 0;
RequestsForEpochDestroyed.$isPhantom = [];
/* ============================== StakeOperationProcessed =============================== */
function isStakeOperationProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::StakeOperationProcessed`; }
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
    static reified() { return { typeName: StakeOperationProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakeOperationProcessed.$typeName, ...[]), typeArgs: [], isPhantom: StakeOperationProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakeOperationProcessed.fromFields(fields), fromFieldsWithTypes: (item) => StakeOperationProcessed.fromFieldsWithTypes(item), fromBcs: (data) => StakeOperationProcessed.fromBcs(data), bcs: StakeOperationProcessed.bcs, fromJSONField: (field) => StakeOperationProcessed.fromJSONField(field), fromJSON: (json) => StakeOperationProcessed.fromJSON(json), fromSuiParsedData: (content) => StakeOperationProcessed.fromSuiParsedData(content), fromSuiObjectData: (content) => StakeOperationProcessed.fromSuiObjectData(content), fetch: async (client, id) => StakeOperationProcessed.fetch(client, id), new: (fields) => { return new StakeOperationProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakeOperationProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakeOperationProcessed.reified()); }
    static get p() { return StakeOperationProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakeOperationProcessed", {
            validator_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), sui_to_stake_amt: bcs_1.bcs.u64(), cur_epoch: bcs_1.bcs.u64()
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakeOperationProcessed(data.bcs.type)) {
                throw new Error(`object at is not a StakeOperationProcessed object`);
            }
            return StakeOperationProcessed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakeOperationProcessed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakeOperationProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeOperationProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeOperationProcessed object`);
        }
        return StakeOperationProcessed.fromSuiObjectData(res.data);
    }
}
exports.StakeOperationProcessed = StakeOperationProcessed;
StakeOperationProcessed.$typeName = `${PKG_V1}::dsui_vault::StakeOperationProcessed`;
StakeOperationProcessed.$numTypeParams = 0;
StakeOperationProcessed.$isPhantom = [];
/* ============================== StakeSuiRequest =============================== */
function isStakeSuiRequest(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::StakeSuiRequest`; }
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
    static reified() { return { typeName: StakeSuiRequest.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakeSuiRequest.$typeName, ...[]), typeArgs: [], isPhantom: StakeSuiRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakeSuiRequest.fromFields(fields), fromFieldsWithTypes: (item) => StakeSuiRequest.fromFieldsWithTypes(item), fromBcs: (data) => StakeSuiRequest.fromBcs(data), bcs: StakeSuiRequest.bcs, fromJSONField: (field) => StakeSuiRequest.fromJSONField(field), fromJSON: (json) => StakeSuiRequest.fromJSON(json), fromSuiParsedData: (content) => StakeSuiRequest.fromSuiParsedData(content), fromSuiObjectData: (content) => StakeSuiRequest.fromSuiObjectData(content), fetch: async (client, id) => StakeSuiRequest.fetch(client, id), new: (fields) => { return new StakeSuiRequest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakeSuiRequest.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakeSuiRequest.reified()); }
    static get p() { return StakeSuiRequest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakeSuiRequest", {
            staker: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), sui_to_stake: bcs_1.bcs.u64(), dsui_krafted: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128(), cur_epoch: bcs_1.bcs.u64()
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakeSuiRequest(data.bcs.type)) {
                throw new Error(`object at is not a StakeSuiRequest object`);
            }
            return StakeSuiRequest.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakeSuiRequest.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakeSuiRequest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeSuiRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeSuiRequest object`);
        }
        return StakeSuiRequest.fromSuiObjectData(res.data);
    }
}
exports.StakeSuiRequest = StakeSuiRequest;
StakeSuiRequest.$typeName = `${PKG_V1}::dsui_vault::StakeSuiRequest`;
StakeSuiRequest.$numTypeParams = 0;
StakeSuiRequest.$isPhantom = [];
/* ============================== StakeSuiRequestsProcessed =============================== */
function isStakeSuiRequestsProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::StakeSuiRequestsProcessed`; }
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
        this.suiToUnstakedForRequests = fields.suiToUnstakedForRequests;
        ;
        this.protocolFeeCollected = fields.protocolFeeCollected;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
    }
    static reified() { return { typeName: StakeSuiRequestsProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakeSuiRequestsProcessed.$typeName, ...[]), typeArgs: [], isPhantom: StakeSuiRequestsProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakeSuiRequestsProcessed.fromFields(fields), fromFieldsWithTypes: (item) => StakeSuiRequestsProcessed.fromFieldsWithTypes(item), fromBcs: (data) => StakeSuiRequestsProcessed.fromBcs(data), bcs: StakeSuiRequestsProcessed.bcs, fromJSONField: (field) => StakeSuiRequestsProcessed.fromJSONField(field), fromJSON: (json) => StakeSuiRequestsProcessed.fromJSON(json), fromSuiParsedData: (content) => StakeSuiRequestsProcessed.fromSuiParsedData(content), fromSuiObjectData: (content) => StakeSuiRequestsProcessed.fromSuiObjectData(content), fetch: async (client, id) => StakeSuiRequestsProcessed.fetch(client, id), new: (fields) => { return new StakeSuiRequestsProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakeSuiRequestsProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakeSuiRequestsProcessed.reified()); }
    static get p() { return StakeSuiRequestsProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakeSuiRequestsProcessed", {
            cur_epoch: bcs_1.bcs.u64(), total_sui_staked: bcs_1.bcs.u64(), sui_to_unstaked_for_requests: bcs_1.bcs.u64(), protocol_fee_collected: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128()
        });
    }
    ;
    static fromFields(fields) { return StakeSuiRequestsProcessed.reified().new({ curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch), totalSuiStaked: (0, reified_1.decodeFromFields)("u64", fields.total_sui_staked), suiToUnstakedForRequests: (0, reified_1.decodeFromFields)("u64", fields.sui_to_unstaked_for_requests), protocolFeeCollected: (0, reified_1.decodeFromFields)("u64", fields.protocol_fee_collected), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui) }); }
    static fromFieldsWithTypes(item) {
        if (!isStakeSuiRequestsProcessed(item.type)) {
            throw new Error("not a StakeSuiRequestsProcessed type");
        }
        return StakeSuiRequestsProcessed.reified().new({ curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch), totalSuiStaked: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_sui_staked), suiToUnstakedForRequests: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_to_unstaked_for_requests), protocolFeeCollected: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fee_collected), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui) });
    }
    static fromBcs(data) { return StakeSuiRequestsProcessed.fromFields(StakeSuiRequestsProcessed.bcs.parse(data)); }
    toJSONField() {
        return {
            curEpoch: this.curEpoch.toString(), totalSuiStaked: this.totalSuiStaked.toString(), suiToUnstakedForRequests: this.suiToUnstakedForRequests.toString(), protocolFeeCollected: this.protocolFeeCollected.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StakeSuiRequestsProcessed.reified().new({ curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch), totalSuiStaked: (0, reified_1.decodeFromJSONField)("u64", field.totalSuiStaked), suiToUnstakedForRequests: (0, reified_1.decodeFromJSONField)("u64", field.suiToUnstakedForRequests), protocolFeeCollected: (0, reified_1.decodeFromJSONField)("u64", field.protocolFeeCollected), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakeSuiRequestsProcessed(data.bcs.type)) {
                throw new Error(`object at is not a StakeSuiRequestsProcessed object`);
            }
            return StakeSuiRequestsProcessed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakeSuiRequestsProcessed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakeSuiRequestsProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeSuiRequestsProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeSuiRequestsProcessed object`);
        }
        return StakeSuiRequestsProcessed.fromSuiObjectData(res.data);
    }
}
exports.StakeSuiRequestsProcessed = StakeSuiRequestsProcessed;
StakeSuiRequestsProcessed.$typeName = `${PKG_V1}::dsui_vault::StakeSuiRequestsProcessed`;
StakeSuiRequestsProcessed.$numTypeParams = 0;
StakeSuiRequestsProcessed.$isPhantom = [];
/* ============================== StakeWithSelectedValidatorRequestProcessed =============================== */
function isStakeWithSelectedValidatorRequestProcessed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::StakeWithSelectedValidatorRequestProcessed`; }
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
    static reified() { return { typeName: StakeWithSelectedValidatorRequestProcessed.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakeWithSelectedValidatorRequestProcessed.$typeName, ...[]), typeArgs: [], isPhantom: StakeWithSelectedValidatorRequestProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakeWithSelectedValidatorRequestProcessed.fromFields(fields), fromFieldsWithTypes: (item) => StakeWithSelectedValidatorRequestProcessed.fromFieldsWithTypes(item), fromBcs: (data) => StakeWithSelectedValidatorRequestProcessed.fromBcs(data), bcs: StakeWithSelectedValidatorRequestProcessed.bcs, fromJSONField: (field) => StakeWithSelectedValidatorRequestProcessed.fromJSONField(field), fromJSON: (json) => StakeWithSelectedValidatorRequestProcessed.fromJSON(json), fromSuiParsedData: (content) => StakeWithSelectedValidatorRequestProcessed.fromSuiParsedData(content), fromSuiObjectData: (content) => StakeWithSelectedValidatorRequestProcessed.fromSuiObjectData(content), fetch: async (client, id) => StakeWithSelectedValidatorRequestProcessed.fetch(client, id), new: (fields) => { return new StakeWithSelectedValidatorRequestProcessed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakeWithSelectedValidatorRequestProcessed.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakeWithSelectedValidatorRequestProcessed.reified()); }
    static get p() { return StakeWithSelectedValidatorRequestProcessed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakeWithSelectedValidatorRequestProcessed", {
            validator_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), sui_to_stake_amt: bcs_1.bcs.u64(), cur_epoch: bcs_1.bcs.u64()
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakeWithSelectedValidatorRequestProcessed(data.bcs.type)) {
                throw new Error(`object at is not a StakeWithSelectedValidatorRequestProcessed object`);
            }
            return StakeWithSelectedValidatorRequestProcessed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakeWithSelectedValidatorRequestProcessed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakeWithSelectedValidatorRequestProcessed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakeWithSelectedValidatorRequestProcessed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeWithSelectedValidatorRequestProcessed object`);
        }
        return StakeWithSelectedValidatorRequestProcessed.fromSuiObjectData(res.data);
    }
}
exports.StakeWithSelectedValidatorRequestProcessed = StakeWithSelectedValidatorRequestProcessed;
StakeWithSelectedValidatorRequestProcessed.$typeName = `${PKG_V1}::dsui_vault::StakeWithSelectedValidatorRequestProcessed`;
StakeWithSelectedValidatorRequestProcessed.$numTypeParams = 0;
StakeWithSelectedValidatorRequestProcessed.$isPhantom = [];
/* ============================== TotalRewardsUpdated =============================== */
function isTotalRewardsUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::TotalRewardsUpdated`; }
class TotalRewardsUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TotalRewardsUpdated.$typeName;
        this.$isPhantom = TotalRewardsUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TotalRewardsUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.curEpoch = fields.curEpoch;
        ;
        this.oldSuiSupply = fields.oldSuiSupply;
        ;
        this.newSuiSupply = fields.newSuiSupply;
        ;
        this.dsuiSupply = fields.dsuiSupply;
        ;
        this.feesCharged = fields.feesCharged;
    }
    static reified() { return { typeName: TotalRewardsUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(TotalRewardsUpdated.$typeName, ...[]), typeArgs: [], isPhantom: TotalRewardsUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TotalRewardsUpdated.fromFields(fields), fromFieldsWithTypes: (item) => TotalRewardsUpdated.fromFieldsWithTypes(item), fromBcs: (data) => TotalRewardsUpdated.fromBcs(data), bcs: TotalRewardsUpdated.bcs, fromJSONField: (field) => TotalRewardsUpdated.fromJSONField(field), fromJSON: (json) => TotalRewardsUpdated.fromJSON(json), fromSuiParsedData: (content) => TotalRewardsUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => TotalRewardsUpdated.fromSuiObjectData(content), fetch: async (client, id) => TotalRewardsUpdated.fetch(client, id), new: (fields) => { return new TotalRewardsUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TotalRewardsUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(TotalRewardsUpdated.reified()); }
    static get p() { return TotalRewardsUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TotalRewardsUpdated", {
            cur_epoch: bcs_1.bcs.u64(), old_sui_supply: bcs_1.bcs.u64(), new_sui_supply: bcs_1.bcs.u64(), dsui_supply: bcs_1.bcs.u64(), fees_charged: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TotalRewardsUpdated.reified().new({ curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch), oldSuiSupply: (0, reified_1.decodeFromFields)("u64", fields.old_sui_supply), newSuiSupply: (0, reified_1.decodeFromFields)("u64", fields.new_sui_supply), dsuiSupply: (0, reified_1.decodeFromFields)("u64", fields.dsui_supply), feesCharged: (0, reified_1.decodeFromFields)("u64", fields.fees_charged) }); }
    static fromFieldsWithTypes(item) {
        if (!isTotalRewardsUpdated(item.type)) {
            throw new Error("not a TotalRewardsUpdated type");
        }
        return TotalRewardsUpdated.reified().new({ curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch), oldSuiSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.old_sui_supply), newSuiSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_sui_supply), dsuiSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_supply), feesCharged: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fees_charged) });
    }
    static fromBcs(data) { return TotalRewardsUpdated.fromFields(TotalRewardsUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            curEpoch: this.curEpoch.toString(), oldSuiSupply: this.oldSuiSupply.toString(), newSuiSupply: this.newSuiSupply.toString(), dsuiSupply: this.dsuiSupply.toString(), feesCharged: this.feesCharged.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TotalRewardsUpdated.reified().new({ curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch), oldSuiSupply: (0, reified_1.decodeFromJSONField)("u64", field.oldSuiSupply), newSuiSupply: (0, reified_1.decodeFromJSONField)("u64", field.newSuiSupply), dsuiSupply: (0, reified_1.decodeFromJSONField)("u64", field.dsuiSupply), feesCharged: (0, reified_1.decodeFromJSONField)("u64", field.feesCharged) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTotalRewardsUpdated(data.bcs.type)) {
                throw new Error(`object at is not a TotalRewardsUpdated object`);
            }
            return TotalRewardsUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TotalRewardsUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TotalRewardsUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTotalRewardsUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TotalRewardsUpdated object`);
        }
        return TotalRewardsUpdated.fromSuiObjectData(res.data);
    }
}
exports.TotalRewardsUpdated = TotalRewardsUpdated;
TotalRewardsUpdated.$typeName = `${PKG_V1}::dsui_vault::TotalRewardsUpdated`;
TotalRewardsUpdated.$numTypeParams = 0;
TotalRewardsUpdated.$isPhantom = [];
/* ============================== UnstakeRequest =============================== */
function isUnstakeRequest(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::UnstakeRequest`; }
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
    static reified() { return { typeName: UnstakeRequest.$typeName, fullTypeName: (0, util_1.composeSuiType)(UnstakeRequest.$typeName, ...[]), typeArgs: [], isPhantom: UnstakeRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UnstakeRequest.fromFields(fields), fromFieldsWithTypes: (item) => UnstakeRequest.fromFieldsWithTypes(item), fromBcs: (data) => UnstakeRequest.fromBcs(data), bcs: UnstakeRequest.bcs, fromJSONField: (field) => UnstakeRequest.fromJSONField(field), fromJSON: (json) => UnstakeRequest.fromJSON(json), fromSuiParsedData: (content) => UnstakeRequest.fromSuiParsedData(content), fromSuiObjectData: (content) => UnstakeRequest.fromSuiObjectData(content), fetch: async (client, id) => UnstakeRequest.fetch(client, id), new: (fields) => { return new UnstakeRequest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UnstakeRequest.reified(); }
    static phantom() { return (0, reified_1.phantom)(UnstakeRequest.reified()); }
    static get p() { return UnstakeRequest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UnstakeRequest", {
            id: structs_6.UID.bcs, dsui_amount: bcs_1.bcs.u64(), sui_amount: bcs_1.bcs.u64(), requested_at_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UnstakeRequest.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.UID.reified(), fields.id), dsuiAmount: (0, reified_1.decodeFromFields)("u64", fields.dsui_amount), suiAmount: (0, reified_1.decodeFromFields)("u64", fields.sui_amount), requestedAtEpoch: (0, reified_1.decodeFromFields)("u64", fields.requested_at_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isUnstakeRequest(item.type)) {
            throw new Error("not a UnstakeRequest type");
        }
        return UnstakeRequest.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.UID.reified(), item.fields.id), dsuiAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_amount), suiAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_amount), requestedAtEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.requested_at_epoch) });
    }
    static fromBcs(data) { return UnstakeRequest.fromFields(UnstakeRequest.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, dsuiAmount: this.dsuiAmount.toString(), suiAmount: this.suiAmount.toString(), requestedAtEpoch: this.requestedAtEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UnstakeRequest.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.UID.reified(), field.id), dsuiAmount: (0, reified_1.decodeFromJSONField)("u64", field.dsuiAmount), suiAmount: (0, reified_1.decodeFromJSONField)("u64", field.suiAmount), requestedAtEpoch: (0, reified_1.decodeFromJSONField)("u64", field.requestedAtEpoch) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUnstakeRequest(data.bcs.type)) {
                throw new Error(`object at is not a UnstakeRequest object`);
            }
            return UnstakeRequest.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UnstakeRequest.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UnstakeRequest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnstakeRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnstakeRequest object`);
        }
        return UnstakeRequest.fromSuiObjectData(res.data);
    }
}
exports.UnstakeRequest = UnstakeRequest;
UnstakeRequest.$typeName = `${PKG_V1}::dsui_vault::UnstakeRequest`;
UnstakeRequest.$numTypeParams = 0;
UnstakeRequest.$isPhantom = [];
/* ============================== UserClaimedSui =============================== */
function isUserClaimedSui(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::UserClaimedSui`; }
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
        this.netSuiWithdrawn = fields.netSuiWithdrawn;
        ;
        this.redemptionFees = fields.redemptionFees;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: UserClaimedSui.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserClaimedSui.$typeName, ...[]), typeArgs: [], isPhantom: UserClaimedSui.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserClaimedSui.fromFields(fields), fromFieldsWithTypes: (item) => UserClaimedSui.fromFieldsWithTypes(item), fromBcs: (data) => UserClaimedSui.fromBcs(data), bcs: UserClaimedSui.bcs, fromJSONField: (field) => UserClaimedSui.fromJSONField(field), fromJSON: (json) => UserClaimedSui.fromJSON(json), fromSuiParsedData: (content) => UserClaimedSui.fromSuiParsedData(content), fromSuiObjectData: (content) => UserClaimedSui.fromSuiObjectData(content), fetch: async (client, id) => UserClaimedSui.fetch(client, id), new: (fields) => { return new UserClaimedSui([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserClaimedSui.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserClaimedSui.reified()); }
    static get p() { return UserClaimedSui.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserClaimedSui", {
            id: structs_6.ID.bcs, owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), sui_withdrawn: bcs_1.bcs.u64(), net_sui_withdrawn: bcs_1.bcs.u64(), redemption_fees: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UserClaimedSui.reified().new({ id: (0, reified_1.decodeFromFields)(structs_6.ID.reified(), fields.id), owner: (0, reified_1.decodeFromFields)("address", fields.owner), suiWithdrawn: (0, reified_1.decodeFromFields)("u64", fields.sui_withdrawn), netSuiWithdrawn: (0, reified_1.decodeFromFields)("u64", fields.net_sui_withdrawn), redemptionFees: (0, reified_1.decodeFromFields)("u64", fields.redemption_fees), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserClaimedSui(item.type)) {
            throw new Error("not a UserClaimedSui type");
        }
        return UserClaimedSui.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.ID.reified(), item.fields.id), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), suiWithdrawn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_withdrawn), netSuiWithdrawn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.net_sui_withdrawn), redemptionFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.redemption_fees), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return UserClaimedSui.fromFields(UserClaimedSui.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, owner: this.owner, suiWithdrawn: this.suiWithdrawn.toString(), netSuiWithdrawn: this.netSuiWithdrawn.toString(), redemptionFees: this.redemptionFees.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserClaimedSui.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_6.ID.reified(), field.id), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), suiWithdrawn: (0, reified_1.decodeFromJSONField)("u64", field.suiWithdrawn), netSuiWithdrawn: (0, reified_1.decodeFromJSONField)("u64", field.netSuiWithdrawn), redemptionFees: (0, reified_1.decodeFromJSONField)("u64", field.redemptionFees), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUserClaimedSui(data.bcs.type)) {
                throw new Error(`object at is not a UserClaimedSui object`);
            }
            return UserClaimedSui.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UserClaimedSui.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserClaimedSui object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserClaimedSui(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserClaimedSui object`);
        }
        return UserClaimedSui.fromSuiObjectData(res.data);
    }
}
exports.UserClaimedSui = UserClaimedSui;
UserClaimedSui.$typeName = `${PKG_V1}::dsui_vault::UserClaimedSui`;
UserClaimedSui.$numTypeParams = 0;
UserClaimedSui.$isPhantom = [];
/* ============================== UserUnstakeRequest =============================== */
function isUserUnstakeRequest(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::UserUnstakeRequest`; }
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
    static reified() { return { typeName: UserUnstakeRequest.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserUnstakeRequest.$typeName, ...[]), typeArgs: [], isPhantom: UserUnstakeRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserUnstakeRequest.fromFields(fields), fromFieldsWithTypes: (item) => UserUnstakeRequest.fromFieldsWithTypes(item), fromBcs: (data) => UserUnstakeRequest.fromBcs(data), bcs: UserUnstakeRequest.bcs, fromJSONField: (field) => UserUnstakeRequest.fromJSONField(field), fromJSON: (json) => UserUnstakeRequest.fromJSON(json), fromSuiParsedData: (content) => UserUnstakeRequest.fromSuiParsedData(content), fromSuiObjectData: (content) => UserUnstakeRequest.fromSuiObjectData(content), fetch: async (client, id) => UserUnstakeRequest.fetch(client, id), new: (fields) => { return new UserUnstakeRequest([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserUnstakeRequest.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserUnstakeRequest.reified()); }
    static get p() { return UserUnstakeRequest.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserUnstakeRequest", {
            owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), unstake_epoch: bcs_1.bcs.u64(), sui_to_claim: bcs_1.bcs.u64(), dsui_burnt: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128(), cur_epoch: bcs_1.bcs.u64()
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUserUnstakeRequest(data.bcs.type)) {
                throw new Error(`object at is not a UserUnstakeRequest object`);
            }
            return UserUnstakeRequest.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UserUnstakeRequest.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserUnstakeRequest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserUnstakeRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserUnstakeRequest object`);
        }
        return UserUnstakeRequest.fromSuiObjectData(res.data);
    }
}
exports.UserUnstakeRequest = UserUnstakeRequest;
UserUnstakeRequest.$typeName = `${PKG_V1}::dsui_vault::UserUnstakeRequest`;
UserUnstakeRequest.$numTypeParams = 0;
UserUnstakeRequest.$isPhantom = [];
/* ============================== UserUnstakedInstantly =============================== */
function isUserUnstakedInstantly(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::UserUnstakedInstantly`; }
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
        this.dsuiBurnt = fields.dsuiBurnt;
        ;
        this.redemptionFees = fields.redemptionFees;
        ;
        this.suiClaimablePerDsui = fields.suiClaimablePerDsui;
        ;
        this.curEpoch = fields.curEpoch;
    }
    static reified() { return { typeName: UserUnstakedInstantly.$typeName, fullTypeName: (0, util_1.composeSuiType)(UserUnstakedInstantly.$typeName, ...[]), typeArgs: [], isPhantom: UserUnstakedInstantly.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UserUnstakedInstantly.fromFields(fields), fromFieldsWithTypes: (item) => UserUnstakedInstantly.fromFieldsWithTypes(item), fromBcs: (data) => UserUnstakedInstantly.fromBcs(data), bcs: UserUnstakedInstantly.bcs, fromJSONField: (field) => UserUnstakedInstantly.fromJSONField(field), fromJSON: (json) => UserUnstakedInstantly.fromJSON(json), fromSuiParsedData: (content) => UserUnstakedInstantly.fromSuiParsedData(content), fromSuiObjectData: (content) => UserUnstakedInstantly.fromSuiObjectData(content), fetch: async (client, id) => UserUnstakedInstantly.fetch(client, id), new: (fields) => { return new UserUnstakedInstantly([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UserUnstakedInstantly.reified(); }
    static phantom() { return (0, reified_1.phantom)(UserUnstakedInstantly.reified()); }
    static get p() { return UserUnstakedInstantly.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UserUnstakedInstantly", {
            owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), sui_withdrawn: bcs_1.bcs.u64(), dsui_burnt: bcs_1.bcs.u64(), redemption_fees: bcs_1.bcs.u64(), sui_claimable_per_dsui: bcs_1.bcs.u128(), cur_epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UserUnstakedInstantly.reified().new({ owner: (0, reified_1.decodeFromFields)("address", fields.owner), suiWithdrawn: (0, reified_1.decodeFromFields)("u64", fields.sui_withdrawn), dsuiBurnt: (0, reified_1.decodeFromFields)("u64", fields.dsui_burnt), redemptionFees: (0, reified_1.decodeFromFields)("u64", fields.redemption_fees), suiClaimablePerDsui: (0, reified_1.decodeFromFields)("u128", fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFields)("u64", fields.cur_epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isUserUnstakedInstantly(item.type)) {
            throw new Error("not a UserUnstakedInstantly type");
        }
        return UserUnstakedInstantly.reified().new({ owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), suiWithdrawn: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_withdrawn), dsuiBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.dsui_burnt), redemptionFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.redemption_fees), suiClaimablePerDsui: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.sui_claimable_per_dsui), curEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_epoch) });
    }
    static fromBcs(data) { return UserUnstakedInstantly.fromFields(UserUnstakedInstantly.bcs.parse(data)); }
    toJSONField() {
        return {
            owner: this.owner, suiWithdrawn: this.suiWithdrawn.toString(), dsuiBurnt: this.dsuiBurnt.toString(), redemptionFees: this.redemptionFees.toString(), suiClaimablePerDsui: this.suiClaimablePerDsui.toString(), curEpoch: this.curEpoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UserUnstakedInstantly.reified().new({ owner: (0, reified_1.decodeFromJSONField)("address", field.owner), suiWithdrawn: (0, reified_1.decodeFromJSONField)("u64", field.suiWithdrawn), dsuiBurnt: (0, reified_1.decodeFromJSONField)("u64", field.dsuiBurnt), redemptionFees: (0, reified_1.decodeFromJSONField)("u64", field.redemptionFees), suiClaimablePerDsui: (0, reified_1.decodeFromJSONField)("u128", field.suiClaimablePerDsui), curEpoch: (0, reified_1.decodeFromJSONField)("u64", field.curEpoch) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUserUnstakedInstantly(data.bcs.type)) {
                throw new Error(`object at is not a UserUnstakedInstantly object`);
            }
            return UserUnstakedInstantly.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UserUnstakedInstantly.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UserUnstakedInstantly object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUserUnstakedInstantly(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UserUnstakedInstantly object`);
        }
        return UserUnstakedInstantly.fromSuiObjectData(res.data);
    }
}
exports.UserUnstakedInstantly = UserUnstakedInstantly;
UserUnstakedInstantly.$typeName = `${PKG_V1}::dsui_vault::UserUnstakedInstantly`;
UserUnstakedInstantly.$numTypeParams = 0;
UserUnstakedInstantly.$isPhantom = [];
/* ============================== ValidatorListUpdated =============================== */
function isValidatorListUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::ValidatorListUpdated`; }
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
    static reified() { return { typeName: ValidatorListUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorListUpdated.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorListUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorListUpdated.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorListUpdated.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorListUpdated.fromBcs(data), bcs: ValidatorListUpdated.bcs, fromJSONField: (field) => ValidatorListUpdated.fromJSONField(field), fromJSON: (json) => ValidatorListUpdated.fromJSON(json), fromSuiParsedData: (content) => ValidatorListUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => ValidatorListUpdated.fromSuiObjectData(content), fetch: async (client, id) => ValidatorListUpdated.fetch(client, id), new: (fields) => { return new ValidatorListUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorListUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorListUpdated.reified()); }
    static get p() { return ValidatorListUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorListUpdated", {
            validator_list: bcs_1.bcs.vector(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), to_add: bcs_1.bcs.bool()
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidatorListUpdated(data.bcs.type)) {
                throw new Error(`object at is not a ValidatorListUpdated object`);
            }
            return ValidatorListUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ValidatorListUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorListUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorListUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorListUpdated object`);
        }
        return ValidatorListUpdated.fromSuiObjectData(res.data);
    }
}
exports.ValidatorListUpdated = ValidatorListUpdated;
ValidatorListUpdated.$typeName = `${PKG_V1}::dsui_vault::ValidatorListUpdated`;
ValidatorListUpdated.$numTypeParams = 0;
ValidatorListUpdated.$isPhantom = [];
/* ============================== ValidatorPool =============================== */
function isValidatorPool(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::ValidatorPool`; }
class ValidatorPool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorPool.$typeName;
        this.$isPhantom = ValidatorPool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorPool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.stakingPoolId = fields.stakingPoolId;
        ;
        this.validatorAddress = fields.validatorAddress;
        ;
        this.activeStake = fields.activeStake;
        ;
        this.inactiveStake = fields.inactiveStake;
        ;
        this.exchangeRate = fields.exchangeRate;
        ;
        this.totalSuiAmount = fields.totalSuiAmount;
        ;
        this.extraFields = fields.extraFields;
    }
    static reified() { return { typeName: ValidatorPool.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorPool.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorPool.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorPool.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorPool.fromBcs(data), bcs: ValidatorPool.bcs, fromJSONField: (field) => ValidatorPool.fromJSONField(field), fromJSON: (json) => ValidatorPool.fromJSON(json), fromSuiParsedData: (content) => ValidatorPool.fromSuiParsedData(content), fromSuiObjectData: (content) => ValidatorPool.fromSuiObjectData(content), fetch: async (client, id) => ValidatorPool.fetch(client, id), new: (fields) => { return new ValidatorPool([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorPool.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorPool.reified()); }
    static get p() { return ValidatorPool.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorPool", {
            staking_pool_id: structs_6.ID.bcs, validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), active_stake: structs_1.Option.bcs(structs_8.FungibleStakedSui.bcs), inactive_stake: structs_1.Option.bcs(structs_8.StakedSui.bcs), exchange_rate: structs_8.PoolTokenExchangeRate.bcs, total_sui_amount: bcs_1.bcs.u64(), extra_fields: structs_2.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return ValidatorPool.reified().new({ stakingPoolId: (0, reified_1.decodeFromFields)(structs_6.ID.reified(), fields.staking_pool_id), validatorAddress: (0, reified_1.decodeFromFields)("address", fields.validator_address), activeStake: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_8.FungibleStakedSui.reified()), fields.active_stake), inactiveStake: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_8.StakedSui.reified()), fields.inactive_stake), exchangeRate: (0, reified_1.decodeFromFields)(structs_8.PoolTokenExchangeRate.reified(), fields.exchange_rate), totalSuiAmount: (0, reified_1.decodeFromFields)("u64", fields.total_sui_amount), extraFields: (0, reified_1.decodeFromFields)(structs_2.Bag.reified(), fields.extra_fields) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorPool(item.type)) {
            throw new Error("not a ValidatorPool type");
        }
        return ValidatorPool.reified().new({ stakingPoolId: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.ID.reified(), item.fields.staking_pool_id), validatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_address), activeStake: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_8.FungibleStakedSui.reified()), item.fields.active_stake), inactiveStake: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_8.StakedSui.reified()), item.fields.inactive_stake), exchangeRate: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.PoolTokenExchangeRate.reified(), item.fields.exchange_rate), totalSuiAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_sui_amount), extraFields: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Bag.reified(), item.fields.extra_fields) });
    }
    static fromBcs(data) { return ValidatorPool.fromFields(ValidatorPool.bcs.parse(data)); }
    toJSONField() {
        return {
            stakingPoolId: this.stakingPoolId, validatorAddress: this.validatorAddress, activeStake: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_8.FungibleStakedSui.$typeName}>`, this.activeStake), inactiveStake: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_8.StakedSui.$typeName}>`, this.inactiveStake), exchangeRate: this.exchangeRate.toJSONField(), totalSuiAmount: this.totalSuiAmount.toString(), extraFields: this.extraFields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorPool.reified().new({ stakingPoolId: (0, reified_1.decodeFromJSONField)(structs_6.ID.reified(), field.stakingPoolId), validatorAddress: (0, reified_1.decodeFromJSONField)("address", field.validatorAddress), activeStake: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_8.FungibleStakedSui.reified()), field.activeStake), inactiveStake: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_8.StakedSui.reified()), field.inactiveStake), exchangeRate: (0, reified_1.decodeFromJSONField)(structs_8.PoolTokenExchangeRate.reified(), field.exchangeRate), totalSuiAmount: (0, reified_1.decodeFromJSONField)("u64", field.totalSuiAmount), extraFields: (0, reified_1.decodeFromJSONField)(structs_2.Bag.reified(), field.extraFields) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidatorPool(data.bcs.type)) {
                throw new Error(`object at is not a ValidatorPool object`);
            }
            return ValidatorPool.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ValidatorPool.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorPool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorPool object`);
        }
        return ValidatorPool.fromSuiObjectData(res.data);
    }
}
exports.ValidatorPool = ValidatorPool;
ValidatorPool.$typeName = `${PKG_V1}::dsui_vault::ValidatorPool`;
ValidatorPool.$numTypeParams = 0;
ValidatorPool.$isPhantom = [];
/* ============================== ValidatorPoolDestroyed =============================== */
function isValidatorPoolDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::dsui_vault::ValidatorPoolDestroyed`; }
class ValidatorPoolDestroyed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorPoolDestroyed.$typeName;
        this.$isPhantom = ValidatorPoolDestroyed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorPoolDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.validatorAddress = fields.validatorAddress;
    }
    static reified() { return { typeName: ValidatorPoolDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorPoolDestroyed.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorPoolDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorPoolDestroyed.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorPoolDestroyed.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorPoolDestroyed.fromBcs(data), bcs: ValidatorPoolDestroyed.bcs, fromJSONField: (field) => ValidatorPoolDestroyed.fromJSONField(field), fromJSON: (json) => ValidatorPoolDestroyed.fromJSON(json), fromSuiParsedData: (content) => ValidatorPoolDestroyed.fromSuiParsedData(content), fromSuiObjectData: (content) => ValidatorPoolDestroyed.fromSuiObjectData(content), fetch: async (client, id) => ValidatorPoolDestroyed.fetch(client, id), new: (fields) => { return new ValidatorPoolDestroyed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorPoolDestroyed.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorPoolDestroyed.reified()); }
    static get p() { return ValidatorPoolDestroyed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorPoolDestroyed", {
            validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return ValidatorPoolDestroyed.reified().new({ validatorAddress: (0, reified_1.decodeFromFields)("address", fields.validator_address) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorPoolDestroyed(item.type)) {
            throw new Error("not a ValidatorPoolDestroyed type");
        }
        return ValidatorPoolDestroyed.reified().new({ validatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_address) });
    }
    static fromBcs(data) { return ValidatorPoolDestroyed.fromFields(ValidatorPoolDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            validatorAddress: this.validatorAddress,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorPoolDestroyed.reified().new({ validatorAddress: (0, reified_1.decodeFromJSONField)("address", field.validatorAddress) }); }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidatorPoolDestroyed(data.bcs.type)) {
                throw new Error(`object at is not a ValidatorPoolDestroyed object`);
            }
            return ValidatorPoolDestroyed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ValidatorPoolDestroyed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorPoolDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorPoolDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorPoolDestroyed object`);
        }
        return ValidatorPoolDestroyed.fromSuiObjectData(res.data);
    }
}
exports.ValidatorPoolDestroyed = ValidatorPoolDestroyed;
ValidatorPoolDestroyed.$typeName = `${PKG_V1}::dsui_vault::ValidatorPoolDestroyed`;
ValidatorPoolDestroyed.$numTypeParams = 0;
ValidatorPoolDestroyed.$isPhantom = [];
