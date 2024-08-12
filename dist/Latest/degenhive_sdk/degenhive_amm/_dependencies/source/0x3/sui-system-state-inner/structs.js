"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemParametersV2 = exports.SystemParameters = exports.SystemEpochInfoEvent = exports.SuiSystemStateInnerV2 = exports.SuiSystemStateInner = void 0;
exports.isSuiSystemStateInner = isSuiSystemStateInner;
exports.isSuiSystemStateInnerV2 = isSuiSystemStateInnerV2;
exports.isSystemEpochInfoEvent = isSystemEpochInfoEvent;
exports.isSystemParameters = isSystemParameters;
exports.isSystemParametersV2 = isSystemParametersV2;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x2/bag/structs");
const structs_2 = require("../../0x2/balance/structs");
const structs_3 = require("../../0x2/sui/structs");
const structs_4 = require("../../0x2/vec-map/structs");
const structs_5 = require("../../0x2/vec-set/structs");
const index_1 = require("../index");
const structs_6 = require("../stake-subsidy/structs");
const structs_7 = require("../storage-fund/structs");
const structs_8 = require("../validator-set/structs");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== SuiSystemStateInner =============================== */
function isSuiSystemStateInner(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V10}::sui_system_state_inner::SuiSystemStateInner`; }
class SuiSystemStateInner {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SuiSystemStateInner.$typeName;
        this.$isPhantom = SuiSystemStateInner.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SuiSystemStateInner.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epoch = fields.epoch;
        ;
        this.protocolVersion = fields.protocolVersion;
        ;
        this.systemStateVersion = fields.systemStateVersion;
        ;
        this.validators = fields.validators;
        ;
        this.storageFund = fields.storageFund;
        ;
        this.parameters = fields.parameters;
        ;
        this.referenceGasPrice = fields.referenceGasPrice;
        ;
        this.validatorReportRecords = fields.validatorReportRecords;
        ;
        this.stakeSubsidy = fields.stakeSubsidy;
        ;
        this.safeMode = fields.safeMode;
        ;
        this.safeModeStorageRewards = fields.safeModeStorageRewards;
        ;
        this.safeModeComputationRewards = fields.safeModeComputationRewards;
        ;
        this.safeModeStorageRebates = fields.safeModeStorageRebates;
        ;
        this.safeModeNonRefundableStorageFee = fields.safeModeNonRefundableStorageFee;
        ;
        this.epochStartTimestampMs = fields.epochStartTimestampMs;
        ;
        this.extraFields = fields.extraFields;
    }
    static reified() { return { typeName: SuiSystemStateInner.$typeName, fullTypeName: (0, util_1.composeSuiType)(SuiSystemStateInner.$typeName, ...[]), typeArgs: [], isPhantom: SuiSystemStateInner.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SuiSystemStateInner.fromFields(fields), fromFieldsWithTypes: (item) => SuiSystemStateInner.fromFieldsWithTypes(item), fromBcs: (data) => SuiSystemStateInner.fromBcs(data), bcs: SuiSystemStateInner.bcs, fromJSONField: (field) => SuiSystemStateInner.fromJSONField(field), fromJSON: (json) => SuiSystemStateInner.fromJSON(json), fromSuiParsedData: (content) => SuiSystemStateInner.fromSuiParsedData(content), fetch: async (client, id) => SuiSystemStateInner.fetch(client, id), new: (fields) => { return new SuiSystemStateInner([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SuiSystemStateInner.reified(); }
    static phantom() { return (0, reified_1.phantom)(SuiSystemStateInner.reified()); }
    static get p() { return SuiSystemStateInner.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SuiSystemStateInner", {
            epoch: bcs_1.bcs.u64(), protocol_version: bcs_1.bcs.u64(), system_state_version: bcs_1.bcs.u64(), validators: structs_8.ValidatorSet.bcs, storage_fund: structs_7.StorageFund.bcs, parameters: SystemParameters.bcs, reference_gas_price: bcs_1.bcs.u64(), validator_report_records: structs_4.VecMap.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), structs_5.VecSet.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }))), stake_subsidy: structs_6.StakeSubsidy.bcs, safe_mode: bcs_1.bcs.bool(), safe_mode_storage_rewards: structs_2.Balance.bcs, safe_mode_computation_rewards: structs_2.Balance.bcs, safe_mode_storage_rebates: bcs_1.bcs.u64(), safe_mode_non_refundable_storage_fee: bcs_1.bcs.u64(), epoch_start_timestamp_ms: bcs_1.bcs.u64(), extra_fields: structs_1.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return SuiSystemStateInner.reified().new({ epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), protocolVersion: (0, reified_1.decodeFromFields)("u64", fields.protocol_version), systemStateVersion: (0, reified_1.decodeFromFields)("u64", fields.system_state_version), validators: (0, reified_1.decodeFromFields)(structs_8.ValidatorSet.reified(), fields.validators), storageFund: (0, reified_1.decodeFromFields)(structs_7.StorageFund.reified(), fields.storage_fund), parameters: (0, reified_1.decodeFromFields)(SystemParameters.reified(), fields.parameters), referenceGasPrice: (0, reified_1.decodeFromFields)("u64", fields.reference_gas_price), validatorReportRecords: (0, reified_1.decodeFromFields)(structs_4.VecMap.reified("address", structs_5.VecSet.reified("address")), fields.validator_report_records), stakeSubsidy: (0, reified_1.decodeFromFields)(structs_6.StakeSubsidy.reified(), fields.stake_subsidy), safeMode: (0, reified_1.decodeFromFields)("bool", fields.safe_mode), safeModeStorageRewards: (0, reified_1.decodeFromFields)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), fields.safe_mode_storage_rewards), safeModeComputationRewards: (0, reified_1.decodeFromFields)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), fields.safe_mode_computation_rewards), safeModeStorageRebates: (0, reified_1.decodeFromFields)("u64", fields.safe_mode_storage_rebates), safeModeNonRefundableStorageFee: (0, reified_1.decodeFromFields)("u64", fields.safe_mode_non_refundable_storage_fee), epochStartTimestampMs: (0, reified_1.decodeFromFields)("u64", fields.epoch_start_timestamp_ms), extraFields: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.extra_fields) }); }
    static fromFieldsWithTypes(item) {
        if (!isSuiSystemStateInner(item.type)) {
            throw new Error("not a SuiSystemStateInner type");
        }
        return SuiSystemStateInner.reified().new({ epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), protocolVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_version), systemStateVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.system_state_version), validators: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.ValidatorSet.reified(), item.fields.validators), storageFund: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.StorageFund.reified(), item.fields.storage_fund), parameters: (0, reified_1.decodeFromFieldsWithTypes)(SystemParameters.reified(), item.fields.parameters), referenceGasPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.reference_gas_price), validatorReportRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.VecMap.reified("address", structs_5.VecSet.reified("address")), item.fields.validator_report_records), stakeSubsidy: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.StakeSubsidy.reified(), item.fields.stake_subsidy), safeMode: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.safe_mode), safeModeStorageRewards: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), item.fields.safe_mode_storage_rewards), safeModeComputationRewards: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), item.fields.safe_mode_computation_rewards), safeModeStorageRebates: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.safe_mode_storage_rebates), safeModeNonRefundableStorageFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.safe_mode_non_refundable_storage_fee), epochStartTimestampMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch_start_timestamp_ms), extraFields: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.extra_fields) });
    }
    static fromBcs(data) { return SuiSystemStateInner.fromFields(SuiSystemStateInner.bcs.parse(data)); }
    toJSONField() {
        return {
            epoch: this.epoch.toString(), protocolVersion: this.protocolVersion.toString(), systemStateVersion: this.systemStateVersion.toString(), validators: this.validators.toJSONField(), storageFund: this.storageFund.toJSONField(), parameters: this.parameters.toJSONField(), referenceGasPrice: this.referenceGasPrice.toString(), validatorReportRecords: this.validatorReportRecords.toJSONField(), stakeSubsidy: this.stakeSubsidy.toJSONField(), safeMode: this.safeMode, safeModeStorageRewards: this.safeModeStorageRewards.toJSONField(), safeModeComputationRewards: this.safeModeComputationRewards.toJSONField(), safeModeStorageRebates: this.safeModeStorageRebates.toString(), safeModeNonRefundableStorageFee: this.safeModeNonRefundableStorageFee.toString(), epochStartTimestampMs: this.epochStartTimestampMs.toString(), extraFields: this.extraFields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SuiSystemStateInner.reified().new({ epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), protocolVersion: (0, reified_1.decodeFromJSONField)("u64", field.protocolVersion), systemStateVersion: (0, reified_1.decodeFromJSONField)("u64", field.systemStateVersion), validators: (0, reified_1.decodeFromJSONField)(structs_8.ValidatorSet.reified(), field.validators), storageFund: (0, reified_1.decodeFromJSONField)(structs_7.StorageFund.reified(), field.storageFund), parameters: (0, reified_1.decodeFromJSONField)(SystemParameters.reified(), field.parameters), referenceGasPrice: (0, reified_1.decodeFromJSONField)("u64", field.referenceGasPrice), validatorReportRecords: (0, reified_1.decodeFromJSONField)(structs_4.VecMap.reified("address", structs_5.VecSet.reified("address")), field.validatorReportRecords), stakeSubsidy: (0, reified_1.decodeFromJSONField)(structs_6.StakeSubsidy.reified(), field.stakeSubsidy), safeMode: (0, reified_1.decodeFromJSONField)("bool", field.safeMode), safeModeStorageRewards: (0, reified_1.decodeFromJSONField)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), field.safeModeStorageRewards), safeModeComputationRewards: (0, reified_1.decodeFromJSONField)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), field.safeModeComputationRewards), safeModeStorageRebates: (0, reified_1.decodeFromJSONField)("u64", field.safeModeStorageRebates), safeModeNonRefundableStorageFee: (0, reified_1.decodeFromJSONField)("u64", field.safeModeNonRefundableStorageFee), epochStartTimestampMs: (0, reified_1.decodeFromJSONField)("u64", field.epochStartTimestampMs), extraFields: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.extraFields) }); }
    static fromJSON(json) {
        if (json.$typeName !== SuiSystemStateInner.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SuiSystemStateInner.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSuiSystemStateInner(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SuiSystemStateInner object`);
    } return SuiSystemStateInner.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SuiSystemStateInner object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuiSystemStateInner(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuiSystemStateInner object`);
        }
        return SuiSystemStateInner.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SuiSystemStateInner = SuiSystemStateInner;
SuiSystemStateInner.$typeName = `${index_1.PKG_V10}::sui_system_state_inner::SuiSystemStateInner`;
SuiSystemStateInner.$numTypeParams = 0;
SuiSystemStateInner.$isPhantom = [];
/* ============================== SuiSystemStateInnerV2 =============================== */
function isSuiSystemStateInnerV2(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V10}::sui_system_state_inner::SuiSystemStateInnerV2`; }
class SuiSystemStateInnerV2 {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SuiSystemStateInnerV2.$typeName;
        this.$isPhantom = SuiSystemStateInnerV2.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SuiSystemStateInnerV2.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epoch = fields.epoch;
        ;
        this.protocolVersion = fields.protocolVersion;
        ;
        this.systemStateVersion = fields.systemStateVersion;
        ;
        this.validators = fields.validators;
        ;
        this.storageFund = fields.storageFund;
        ;
        this.parameters = fields.parameters;
        ;
        this.referenceGasPrice = fields.referenceGasPrice;
        ;
        this.validatorReportRecords = fields.validatorReportRecords;
        ;
        this.stakeSubsidy = fields.stakeSubsidy;
        ;
        this.safeMode = fields.safeMode;
        ;
        this.safeModeStorageRewards = fields.safeModeStorageRewards;
        ;
        this.safeModeComputationRewards = fields.safeModeComputationRewards;
        ;
        this.safeModeStorageRebates = fields.safeModeStorageRebates;
        ;
        this.safeModeNonRefundableStorageFee = fields.safeModeNonRefundableStorageFee;
        ;
        this.epochStartTimestampMs = fields.epochStartTimestampMs;
        ;
        this.extraFields = fields.extraFields;
    }
    static reified() { return { typeName: SuiSystemStateInnerV2.$typeName, fullTypeName: (0, util_1.composeSuiType)(SuiSystemStateInnerV2.$typeName, ...[]), typeArgs: [], isPhantom: SuiSystemStateInnerV2.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SuiSystemStateInnerV2.fromFields(fields), fromFieldsWithTypes: (item) => SuiSystemStateInnerV2.fromFieldsWithTypes(item), fromBcs: (data) => SuiSystemStateInnerV2.fromBcs(data), bcs: SuiSystemStateInnerV2.bcs, fromJSONField: (field) => SuiSystemStateInnerV2.fromJSONField(field), fromJSON: (json) => SuiSystemStateInnerV2.fromJSON(json), fromSuiParsedData: (content) => SuiSystemStateInnerV2.fromSuiParsedData(content), fetch: async (client, id) => SuiSystemStateInnerV2.fetch(client, id), new: (fields) => { return new SuiSystemStateInnerV2([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SuiSystemStateInnerV2.reified(); }
    static phantom() { return (0, reified_1.phantom)(SuiSystemStateInnerV2.reified()); }
    static get p() { return SuiSystemStateInnerV2.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SuiSystemStateInnerV2", {
            epoch: bcs_1.bcs.u64(), protocol_version: bcs_1.bcs.u64(), system_state_version: bcs_1.bcs.u64(), validators: structs_8.ValidatorSet.bcs, storage_fund: structs_7.StorageFund.bcs, parameters: SystemParametersV2.bcs, reference_gas_price: bcs_1.bcs.u64(), validator_report_records: structs_4.VecMap.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), structs_5.VecSet.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }))), stake_subsidy: structs_6.StakeSubsidy.bcs, safe_mode: bcs_1.bcs.bool(), safe_mode_storage_rewards: structs_2.Balance.bcs, safe_mode_computation_rewards: structs_2.Balance.bcs, safe_mode_storage_rebates: bcs_1.bcs.u64(), safe_mode_non_refundable_storage_fee: bcs_1.bcs.u64(), epoch_start_timestamp_ms: bcs_1.bcs.u64(), extra_fields: structs_1.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return SuiSystemStateInnerV2.reified().new({ epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), protocolVersion: (0, reified_1.decodeFromFields)("u64", fields.protocol_version), systemStateVersion: (0, reified_1.decodeFromFields)("u64", fields.system_state_version), validators: (0, reified_1.decodeFromFields)(structs_8.ValidatorSet.reified(), fields.validators), storageFund: (0, reified_1.decodeFromFields)(structs_7.StorageFund.reified(), fields.storage_fund), parameters: (0, reified_1.decodeFromFields)(SystemParametersV2.reified(), fields.parameters), referenceGasPrice: (0, reified_1.decodeFromFields)("u64", fields.reference_gas_price), validatorReportRecords: (0, reified_1.decodeFromFields)(structs_4.VecMap.reified("address", structs_5.VecSet.reified("address")), fields.validator_report_records), stakeSubsidy: (0, reified_1.decodeFromFields)(structs_6.StakeSubsidy.reified(), fields.stake_subsidy), safeMode: (0, reified_1.decodeFromFields)("bool", fields.safe_mode), safeModeStorageRewards: (0, reified_1.decodeFromFields)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), fields.safe_mode_storage_rewards), safeModeComputationRewards: (0, reified_1.decodeFromFields)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), fields.safe_mode_computation_rewards), safeModeStorageRebates: (0, reified_1.decodeFromFields)("u64", fields.safe_mode_storage_rebates), safeModeNonRefundableStorageFee: (0, reified_1.decodeFromFields)("u64", fields.safe_mode_non_refundable_storage_fee), epochStartTimestampMs: (0, reified_1.decodeFromFields)("u64", fields.epoch_start_timestamp_ms), extraFields: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.extra_fields) }); }
    static fromFieldsWithTypes(item) {
        if (!isSuiSystemStateInnerV2(item.type)) {
            throw new Error("not a SuiSystemStateInnerV2 type");
        }
        return SuiSystemStateInnerV2.reified().new({ epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), protocolVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_version), systemStateVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.system_state_version), validators: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.ValidatorSet.reified(), item.fields.validators), storageFund: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.StorageFund.reified(), item.fields.storage_fund), parameters: (0, reified_1.decodeFromFieldsWithTypes)(SystemParametersV2.reified(), item.fields.parameters), referenceGasPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.reference_gas_price), validatorReportRecords: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.VecMap.reified("address", structs_5.VecSet.reified("address")), item.fields.validator_report_records), stakeSubsidy: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.StakeSubsidy.reified(), item.fields.stake_subsidy), safeMode: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.safe_mode), safeModeStorageRewards: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), item.fields.safe_mode_storage_rewards), safeModeComputationRewards: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), item.fields.safe_mode_computation_rewards), safeModeStorageRebates: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.safe_mode_storage_rebates), safeModeNonRefundableStorageFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.safe_mode_non_refundable_storage_fee), epochStartTimestampMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch_start_timestamp_ms), extraFields: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.extra_fields) });
    }
    static fromBcs(data) { return SuiSystemStateInnerV2.fromFields(SuiSystemStateInnerV2.bcs.parse(data)); }
    toJSONField() {
        return {
            epoch: this.epoch.toString(), protocolVersion: this.protocolVersion.toString(), systemStateVersion: this.systemStateVersion.toString(), validators: this.validators.toJSONField(), storageFund: this.storageFund.toJSONField(), parameters: this.parameters.toJSONField(), referenceGasPrice: this.referenceGasPrice.toString(), validatorReportRecords: this.validatorReportRecords.toJSONField(), stakeSubsidy: this.stakeSubsidy.toJSONField(), safeMode: this.safeMode, safeModeStorageRewards: this.safeModeStorageRewards.toJSONField(), safeModeComputationRewards: this.safeModeComputationRewards.toJSONField(), safeModeStorageRebates: this.safeModeStorageRebates.toString(), safeModeNonRefundableStorageFee: this.safeModeNonRefundableStorageFee.toString(), epochStartTimestampMs: this.epochStartTimestampMs.toString(), extraFields: this.extraFields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SuiSystemStateInnerV2.reified().new({ epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), protocolVersion: (0, reified_1.decodeFromJSONField)("u64", field.protocolVersion), systemStateVersion: (0, reified_1.decodeFromJSONField)("u64", field.systemStateVersion), validators: (0, reified_1.decodeFromJSONField)(structs_8.ValidatorSet.reified(), field.validators), storageFund: (0, reified_1.decodeFromJSONField)(structs_7.StorageFund.reified(), field.storageFund), parameters: (0, reified_1.decodeFromJSONField)(SystemParametersV2.reified(), field.parameters), referenceGasPrice: (0, reified_1.decodeFromJSONField)("u64", field.referenceGasPrice), validatorReportRecords: (0, reified_1.decodeFromJSONField)(structs_4.VecMap.reified("address", structs_5.VecSet.reified("address")), field.validatorReportRecords), stakeSubsidy: (0, reified_1.decodeFromJSONField)(structs_6.StakeSubsidy.reified(), field.stakeSubsidy), safeMode: (0, reified_1.decodeFromJSONField)("bool", field.safeMode), safeModeStorageRewards: (0, reified_1.decodeFromJSONField)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), field.safeModeStorageRewards), safeModeComputationRewards: (0, reified_1.decodeFromJSONField)(structs_2.Balance.reified(reified.phantom(structs_3.SUI.reified())), field.safeModeComputationRewards), safeModeStorageRebates: (0, reified_1.decodeFromJSONField)("u64", field.safeModeStorageRebates), safeModeNonRefundableStorageFee: (0, reified_1.decodeFromJSONField)("u64", field.safeModeNonRefundableStorageFee), epochStartTimestampMs: (0, reified_1.decodeFromJSONField)("u64", field.epochStartTimestampMs), extraFields: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.extraFields) }); }
    static fromJSON(json) {
        if (json.$typeName !== SuiSystemStateInnerV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SuiSystemStateInnerV2.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSuiSystemStateInnerV2(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SuiSystemStateInnerV2 object`);
    } return SuiSystemStateInnerV2.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SuiSystemStateInnerV2 object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuiSystemStateInnerV2(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuiSystemStateInnerV2 object`);
        }
        return SuiSystemStateInnerV2.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SuiSystemStateInnerV2 = SuiSystemStateInnerV2;
SuiSystemStateInnerV2.$typeName = `${index_1.PKG_V10}::sui_system_state_inner::SuiSystemStateInnerV2`;
SuiSystemStateInnerV2.$numTypeParams = 0;
SuiSystemStateInnerV2.$isPhantom = [];
/* ============================== SystemEpochInfoEvent =============================== */
function isSystemEpochInfoEvent(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V10}::sui_system_state_inner::SystemEpochInfoEvent`; }
class SystemEpochInfoEvent {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SystemEpochInfoEvent.$typeName;
        this.$isPhantom = SystemEpochInfoEvent.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SystemEpochInfoEvent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epoch = fields.epoch;
        ;
        this.protocolVersion = fields.protocolVersion;
        ;
        this.referenceGasPrice = fields.referenceGasPrice;
        ;
        this.totalStake = fields.totalStake;
        ;
        this.storageFundReinvestment = fields.storageFundReinvestment;
        ;
        this.storageCharge = fields.storageCharge;
        ;
        this.storageRebate = fields.storageRebate;
        ;
        this.storageFundBalance = fields.storageFundBalance;
        ;
        this.stakeSubsidyAmount = fields.stakeSubsidyAmount;
        ;
        this.totalGasFees = fields.totalGasFees;
        ;
        this.totalStakeRewardsDistributed = fields.totalStakeRewardsDistributed;
        ;
        this.leftoverStorageFundInflow = fields.leftoverStorageFundInflow;
    }
    static reified() { return { typeName: SystemEpochInfoEvent.$typeName, fullTypeName: (0, util_1.composeSuiType)(SystemEpochInfoEvent.$typeName, ...[]), typeArgs: [], isPhantom: SystemEpochInfoEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SystemEpochInfoEvent.fromFields(fields), fromFieldsWithTypes: (item) => SystemEpochInfoEvent.fromFieldsWithTypes(item), fromBcs: (data) => SystemEpochInfoEvent.fromBcs(data), bcs: SystemEpochInfoEvent.bcs, fromJSONField: (field) => SystemEpochInfoEvent.fromJSONField(field), fromJSON: (json) => SystemEpochInfoEvent.fromJSON(json), fromSuiParsedData: (content) => SystemEpochInfoEvent.fromSuiParsedData(content), fetch: async (client, id) => SystemEpochInfoEvent.fetch(client, id), new: (fields) => { return new SystemEpochInfoEvent([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SystemEpochInfoEvent.reified(); }
    static phantom() { return (0, reified_1.phantom)(SystemEpochInfoEvent.reified()); }
    static get p() { return SystemEpochInfoEvent.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SystemEpochInfoEvent", {
            epoch: bcs_1.bcs.u64(), protocol_version: bcs_1.bcs.u64(), reference_gas_price: bcs_1.bcs.u64(), total_stake: bcs_1.bcs.u64(), storage_fund_reinvestment: bcs_1.bcs.u64(), storage_charge: bcs_1.bcs.u64(), storage_rebate: bcs_1.bcs.u64(), storage_fund_balance: bcs_1.bcs.u64(), stake_subsidy_amount: bcs_1.bcs.u64(), total_gas_fees: bcs_1.bcs.u64(), total_stake_rewards_distributed: bcs_1.bcs.u64(), leftover_storage_fund_inflow: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return SystemEpochInfoEvent.reified().new({ epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), protocolVersion: (0, reified_1.decodeFromFields)("u64", fields.protocol_version), referenceGasPrice: (0, reified_1.decodeFromFields)("u64", fields.reference_gas_price), totalStake: (0, reified_1.decodeFromFields)("u64", fields.total_stake), storageFundReinvestment: (0, reified_1.decodeFromFields)("u64", fields.storage_fund_reinvestment), storageCharge: (0, reified_1.decodeFromFields)("u64", fields.storage_charge), storageRebate: (0, reified_1.decodeFromFields)("u64", fields.storage_rebate), storageFundBalance: (0, reified_1.decodeFromFields)("u64", fields.storage_fund_balance), stakeSubsidyAmount: (0, reified_1.decodeFromFields)("u64", fields.stake_subsidy_amount), totalGasFees: (0, reified_1.decodeFromFields)("u64", fields.total_gas_fees), totalStakeRewardsDistributed: (0, reified_1.decodeFromFields)("u64", fields.total_stake_rewards_distributed), leftoverStorageFundInflow: (0, reified_1.decodeFromFields)("u64", fields.leftover_storage_fund_inflow) }); }
    static fromFieldsWithTypes(item) {
        if (!isSystemEpochInfoEvent(item.type)) {
            throw new Error("not a SystemEpochInfoEvent type");
        }
        return SystemEpochInfoEvent.reified().new({ epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), protocolVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_version), referenceGasPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.reference_gas_price), totalStake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_stake), storageFundReinvestment: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.storage_fund_reinvestment), storageCharge: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.storage_charge), storageRebate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.storage_rebate), storageFundBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.storage_fund_balance), stakeSubsidyAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_subsidy_amount), totalGasFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_gas_fees), totalStakeRewardsDistributed: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_stake_rewards_distributed), leftoverStorageFundInflow: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.leftover_storage_fund_inflow) });
    }
    static fromBcs(data) { return SystemEpochInfoEvent.fromFields(SystemEpochInfoEvent.bcs.parse(data)); }
    toJSONField() {
        return {
            epoch: this.epoch.toString(), protocolVersion: this.protocolVersion.toString(), referenceGasPrice: this.referenceGasPrice.toString(), totalStake: this.totalStake.toString(), storageFundReinvestment: this.storageFundReinvestment.toString(), storageCharge: this.storageCharge.toString(), storageRebate: this.storageRebate.toString(), storageFundBalance: this.storageFundBalance.toString(), stakeSubsidyAmount: this.stakeSubsidyAmount.toString(), totalGasFees: this.totalGasFees.toString(), totalStakeRewardsDistributed: this.totalStakeRewardsDistributed.toString(), leftoverStorageFundInflow: this.leftoverStorageFundInflow.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SystemEpochInfoEvent.reified().new({ epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), protocolVersion: (0, reified_1.decodeFromJSONField)("u64", field.protocolVersion), referenceGasPrice: (0, reified_1.decodeFromJSONField)("u64", field.referenceGasPrice), totalStake: (0, reified_1.decodeFromJSONField)("u64", field.totalStake), storageFundReinvestment: (0, reified_1.decodeFromJSONField)("u64", field.storageFundReinvestment), storageCharge: (0, reified_1.decodeFromJSONField)("u64", field.storageCharge), storageRebate: (0, reified_1.decodeFromJSONField)("u64", field.storageRebate), storageFundBalance: (0, reified_1.decodeFromJSONField)("u64", field.storageFundBalance), stakeSubsidyAmount: (0, reified_1.decodeFromJSONField)("u64", field.stakeSubsidyAmount), totalGasFees: (0, reified_1.decodeFromJSONField)("u64", field.totalGasFees), totalStakeRewardsDistributed: (0, reified_1.decodeFromJSONField)("u64", field.totalStakeRewardsDistributed), leftoverStorageFundInflow: (0, reified_1.decodeFromJSONField)("u64", field.leftoverStorageFundInflow) }); }
    static fromJSON(json) {
        if (json.$typeName !== SystemEpochInfoEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SystemEpochInfoEvent.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSystemEpochInfoEvent(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SystemEpochInfoEvent object`);
    } return SystemEpochInfoEvent.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SystemEpochInfoEvent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSystemEpochInfoEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SystemEpochInfoEvent object`);
        }
        return SystemEpochInfoEvent.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SystemEpochInfoEvent = SystemEpochInfoEvent;
SystemEpochInfoEvent.$typeName = `${index_1.PKG_V10}::sui_system_state_inner::SystemEpochInfoEvent`;
SystemEpochInfoEvent.$numTypeParams = 0;
SystemEpochInfoEvent.$isPhantom = [];
/* ============================== SystemParameters =============================== */
function isSystemParameters(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V10}::sui_system_state_inner::SystemParameters`; }
class SystemParameters {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SystemParameters.$typeName;
        this.$isPhantom = SystemParameters.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SystemParameters.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epochDurationMs = fields.epochDurationMs;
        ;
        this.stakeSubsidyStartEpoch = fields.stakeSubsidyStartEpoch;
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
        ;
        this.extraFields = fields.extraFields;
    }
    static reified() { return { typeName: SystemParameters.$typeName, fullTypeName: (0, util_1.composeSuiType)(SystemParameters.$typeName, ...[]), typeArgs: [], isPhantom: SystemParameters.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SystemParameters.fromFields(fields), fromFieldsWithTypes: (item) => SystemParameters.fromFieldsWithTypes(item), fromBcs: (data) => SystemParameters.fromBcs(data), bcs: SystemParameters.bcs, fromJSONField: (field) => SystemParameters.fromJSONField(field), fromJSON: (json) => SystemParameters.fromJSON(json), fromSuiParsedData: (content) => SystemParameters.fromSuiParsedData(content), fetch: async (client, id) => SystemParameters.fetch(client, id), new: (fields) => { return new SystemParameters([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SystemParameters.reified(); }
    static phantom() { return (0, reified_1.phantom)(SystemParameters.reified()); }
    static get p() { return SystemParameters.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SystemParameters", {
            epoch_duration_ms: bcs_1.bcs.u64(), stake_subsidy_start_epoch: bcs_1.bcs.u64(), max_validator_count: bcs_1.bcs.u64(), min_validator_joining_stake: bcs_1.bcs.u64(), validator_low_stake_threshold: bcs_1.bcs.u64(), validator_very_low_stake_threshold: bcs_1.bcs.u64(), validator_low_stake_grace_period: bcs_1.bcs.u64(), extra_fields: structs_1.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return SystemParameters.reified().new({ epochDurationMs: (0, reified_1.decodeFromFields)("u64", fields.epoch_duration_ms), stakeSubsidyStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.stake_subsidy_start_epoch), maxValidatorCount: (0, reified_1.decodeFromFields)("u64", fields.max_validator_count), minValidatorJoiningStake: (0, reified_1.decodeFromFields)("u64", fields.min_validator_joining_stake), validatorLowStakeThreshold: (0, reified_1.decodeFromFields)("u64", fields.validator_low_stake_threshold), validatorVeryLowStakeThreshold: (0, reified_1.decodeFromFields)("u64", fields.validator_very_low_stake_threshold), validatorLowStakeGracePeriod: (0, reified_1.decodeFromFields)("u64", fields.validator_low_stake_grace_period), extraFields: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.extra_fields) }); }
    static fromFieldsWithTypes(item) {
        if (!isSystemParameters(item.type)) {
            throw new Error("not a SystemParameters type");
        }
        return SystemParameters.reified().new({ epochDurationMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch_duration_ms), stakeSubsidyStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_subsidy_start_epoch), maxValidatorCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_validator_count), minValidatorJoiningStake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_validator_joining_stake), validatorLowStakeThreshold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_low_stake_threshold), validatorVeryLowStakeThreshold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_very_low_stake_threshold), validatorLowStakeGracePeriod: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_low_stake_grace_period), extraFields: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.extra_fields) });
    }
    static fromBcs(data) { return SystemParameters.fromFields(SystemParameters.bcs.parse(data)); }
    toJSONField() {
        return {
            epochDurationMs: this.epochDurationMs.toString(), stakeSubsidyStartEpoch: this.stakeSubsidyStartEpoch.toString(), maxValidatorCount: this.maxValidatorCount.toString(), minValidatorJoiningStake: this.minValidatorJoiningStake.toString(), validatorLowStakeThreshold: this.validatorLowStakeThreshold.toString(), validatorVeryLowStakeThreshold: this.validatorVeryLowStakeThreshold.toString(), validatorLowStakeGracePeriod: this.validatorLowStakeGracePeriod.toString(), extraFields: this.extraFields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SystemParameters.reified().new({ epochDurationMs: (0, reified_1.decodeFromJSONField)("u64", field.epochDurationMs), stakeSubsidyStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.stakeSubsidyStartEpoch), maxValidatorCount: (0, reified_1.decodeFromJSONField)("u64", field.maxValidatorCount), minValidatorJoiningStake: (0, reified_1.decodeFromJSONField)("u64", field.minValidatorJoiningStake), validatorLowStakeThreshold: (0, reified_1.decodeFromJSONField)("u64", field.validatorLowStakeThreshold), validatorVeryLowStakeThreshold: (0, reified_1.decodeFromJSONField)("u64", field.validatorVeryLowStakeThreshold), validatorLowStakeGracePeriod: (0, reified_1.decodeFromJSONField)("u64", field.validatorLowStakeGracePeriod), extraFields: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.extraFields) }); }
    static fromJSON(json) {
        if (json.$typeName !== SystemParameters.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SystemParameters.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSystemParameters(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SystemParameters object`);
    } return SystemParameters.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SystemParameters object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSystemParameters(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SystemParameters object`);
        }
        return SystemParameters.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SystemParameters = SystemParameters;
SystemParameters.$typeName = `${index_1.PKG_V10}::sui_system_state_inner::SystemParameters`;
SystemParameters.$numTypeParams = 0;
SystemParameters.$isPhantom = [];
/* ============================== SystemParametersV2 =============================== */
function isSystemParametersV2(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V10}::sui_system_state_inner::SystemParametersV2`; }
class SystemParametersV2 {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SystemParametersV2.$typeName;
        this.$isPhantom = SystemParametersV2.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SystemParametersV2.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.epochDurationMs = fields.epochDurationMs;
        ;
        this.stakeSubsidyStartEpoch = fields.stakeSubsidyStartEpoch;
        ;
        this.minValidatorCount = fields.minValidatorCount;
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
        ;
        this.extraFields = fields.extraFields;
    }
    static reified() { return { typeName: SystemParametersV2.$typeName, fullTypeName: (0, util_1.composeSuiType)(SystemParametersV2.$typeName, ...[]), typeArgs: [], isPhantom: SystemParametersV2.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SystemParametersV2.fromFields(fields), fromFieldsWithTypes: (item) => SystemParametersV2.fromFieldsWithTypes(item), fromBcs: (data) => SystemParametersV2.fromBcs(data), bcs: SystemParametersV2.bcs, fromJSONField: (field) => SystemParametersV2.fromJSONField(field), fromJSON: (json) => SystemParametersV2.fromJSON(json), fromSuiParsedData: (content) => SystemParametersV2.fromSuiParsedData(content), fetch: async (client, id) => SystemParametersV2.fetch(client, id), new: (fields) => { return new SystemParametersV2([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SystemParametersV2.reified(); }
    static phantom() { return (0, reified_1.phantom)(SystemParametersV2.reified()); }
    static get p() { return SystemParametersV2.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SystemParametersV2", {
            epoch_duration_ms: bcs_1.bcs.u64(), stake_subsidy_start_epoch: bcs_1.bcs.u64(), min_validator_count: bcs_1.bcs.u64(), max_validator_count: bcs_1.bcs.u64(), min_validator_joining_stake: bcs_1.bcs.u64(), validator_low_stake_threshold: bcs_1.bcs.u64(), validator_very_low_stake_threshold: bcs_1.bcs.u64(), validator_low_stake_grace_period: bcs_1.bcs.u64(), extra_fields: structs_1.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return SystemParametersV2.reified().new({ epochDurationMs: (0, reified_1.decodeFromFields)("u64", fields.epoch_duration_ms), stakeSubsidyStartEpoch: (0, reified_1.decodeFromFields)("u64", fields.stake_subsidy_start_epoch), minValidatorCount: (0, reified_1.decodeFromFields)("u64", fields.min_validator_count), maxValidatorCount: (0, reified_1.decodeFromFields)("u64", fields.max_validator_count), minValidatorJoiningStake: (0, reified_1.decodeFromFields)("u64", fields.min_validator_joining_stake), validatorLowStakeThreshold: (0, reified_1.decodeFromFields)("u64", fields.validator_low_stake_threshold), validatorVeryLowStakeThreshold: (0, reified_1.decodeFromFields)("u64", fields.validator_very_low_stake_threshold), validatorLowStakeGracePeriod: (0, reified_1.decodeFromFields)("u64", fields.validator_low_stake_grace_period), extraFields: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.extra_fields) }); }
    static fromFieldsWithTypes(item) {
        if (!isSystemParametersV2(item.type)) {
            throw new Error("not a SystemParametersV2 type");
        }
        return SystemParametersV2.reified().new({ epochDurationMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch_duration_ms), stakeSubsidyStartEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_subsidy_start_epoch), minValidatorCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_validator_count), maxValidatorCount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.max_validator_count), minValidatorJoiningStake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_validator_joining_stake), validatorLowStakeThreshold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_low_stake_threshold), validatorVeryLowStakeThreshold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_very_low_stake_threshold), validatorLowStakeGracePeriod: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_low_stake_grace_period), extraFields: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.extra_fields) });
    }
    static fromBcs(data) { return SystemParametersV2.fromFields(SystemParametersV2.bcs.parse(data)); }
    toJSONField() {
        return {
            epochDurationMs: this.epochDurationMs.toString(), stakeSubsidyStartEpoch: this.stakeSubsidyStartEpoch.toString(), minValidatorCount: this.minValidatorCount.toString(), maxValidatorCount: this.maxValidatorCount.toString(), minValidatorJoiningStake: this.minValidatorJoiningStake.toString(), validatorLowStakeThreshold: this.validatorLowStakeThreshold.toString(), validatorVeryLowStakeThreshold: this.validatorVeryLowStakeThreshold.toString(), validatorLowStakeGracePeriod: this.validatorLowStakeGracePeriod.toString(), extraFields: this.extraFields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SystemParametersV2.reified().new({ epochDurationMs: (0, reified_1.decodeFromJSONField)("u64", field.epochDurationMs), stakeSubsidyStartEpoch: (0, reified_1.decodeFromJSONField)("u64", field.stakeSubsidyStartEpoch), minValidatorCount: (0, reified_1.decodeFromJSONField)("u64", field.minValidatorCount), maxValidatorCount: (0, reified_1.decodeFromJSONField)("u64", field.maxValidatorCount), minValidatorJoiningStake: (0, reified_1.decodeFromJSONField)("u64", field.minValidatorJoiningStake), validatorLowStakeThreshold: (0, reified_1.decodeFromJSONField)("u64", field.validatorLowStakeThreshold), validatorVeryLowStakeThreshold: (0, reified_1.decodeFromJSONField)("u64", field.validatorVeryLowStakeThreshold), validatorLowStakeGracePeriod: (0, reified_1.decodeFromJSONField)("u64", field.validatorLowStakeGracePeriod), extraFields: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.extraFields) }); }
    static fromJSON(json) {
        if (json.$typeName !== SystemParametersV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SystemParametersV2.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSystemParametersV2(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SystemParametersV2 object`);
    } return SystemParametersV2.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SystemParametersV2 object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSystemParametersV2(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SystemParametersV2 object`);
        }
        return SystemParametersV2.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SystemParametersV2 = SystemParametersV2;
SystemParametersV2.$typeName = `${index_1.PKG_V10}::sui_system_state_inner::SystemParametersV2`;
SystemParametersV2.$numTypeParams = 0;
SystemParametersV2.$isPhantom = [];
