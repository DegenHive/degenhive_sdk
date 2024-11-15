"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorMetadata = exports.Validator = exports.UnstakingRequestEvent = exports.StakingRequestEvent = exports.RedeemingFungibleStakedSuiEvent = exports.ConvertingToFungibleStakedSuiEvent = void 0;
exports.isConvertingToFungibleStakedSuiEvent = isConvertingToFungibleStakedSuiEvent;
exports.isRedeemingFungibleStakedSuiEvent = isRedeemingFungibleStakedSuiEvent;
exports.isStakingRequestEvent = isStakingRequestEvent;
exports.isUnstakingRequestEvent = isUnstakingRequestEvent;
exports.isValidator = isValidator;
exports.isValidatorMetadata = isValidatorMetadata;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/option/structs");
const structs_2 = require("../../0x1/string/structs");
const structs_3 = require("../../0x2/bag/structs");
const structs_4 = require("../../0x2/object/structs");
const structs_5 = require("../../0x2/url/structs");
const index_1 = require("../index");
const structs_6 = require("../staking-pool/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== ConvertingToFungibleStakedSuiEvent =============================== */
function isConvertingToFungibleStakedSuiEvent(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator::ConvertingToFungibleStakedSuiEvent`; }
class ConvertingToFungibleStakedSuiEvent {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ConvertingToFungibleStakedSuiEvent.$typeName;
        this.$isPhantom = ConvertingToFungibleStakedSuiEvent.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ConvertingToFungibleStakedSuiEvent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolId = fields.poolId;
        ;
        this.stakeActivationEpoch = fields.stakeActivationEpoch;
        ;
        this.stakedSuiPrincipalAmount = fields.stakedSuiPrincipalAmount;
        ;
        this.fungibleStakedSuiAmount = fields.fungibleStakedSuiAmount;
    }
    static reified() { return { typeName: ConvertingToFungibleStakedSuiEvent.$typeName, fullTypeName: (0, util_1.composeSuiType)(ConvertingToFungibleStakedSuiEvent.$typeName, ...[]), typeArgs: [], isPhantom: ConvertingToFungibleStakedSuiEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ConvertingToFungibleStakedSuiEvent.fromFields(fields), fromFieldsWithTypes: (item) => ConvertingToFungibleStakedSuiEvent.fromFieldsWithTypes(item), fromBcs: (data) => ConvertingToFungibleStakedSuiEvent.fromBcs(data), bcs: ConvertingToFungibleStakedSuiEvent.bcs, fromJSONField: (field) => ConvertingToFungibleStakedSuiEvent.fromJSONField(field), fromJSON: (json) => ConvertingToFungibleStakedSuiEvent.fromJSON(json), fromSuiParsedData: (content) => ConvertingToFungibleStakedSuiEvent.fromSuiParsedData(content), fromSuiObjectData: (content) => ConvertingToFungibleStakedSuiEvent.fromSuiObjectData(content), fetch: async (client, id) => ConvertingToFungibleStakedSuiEvent.fetch(client, id), new: (fields) => { return new ConvertingToFungibleStakedSuiEvent([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ConvertingToFungibleStakedSuiEvent.reified(); }
    static phantom() { return (0, reified_1.phantom)(ConvertingToFungibleStakedSuiEvent.reified()); }
    static get p() { return ConvertingToFungibleStakedSuiEvent.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ConvertingToFungibleStakedSuiEvent", {
            pool_id: structs_4.ID.bcs, stake_activation_epoch: bcs_1.bcs.u64(), staked_sui_principal_amount: bcs_1.bcs.u64(), fungible_staked_sui_amount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ConvertingToFungibleStakedSuiEvent.reified().new({ poolId: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.pool_id), stakeActivationEpoch: (0, reified_1.decodeFromFields)("u64", fields.stake_activation_epoch), stakedSuiPrincipalAmount: (0, reified_1.decodeFromFields)("u64", fields.staked_sui_principal_amount), fungibleStakedSuiAmount: (0, reified_1.decodeFromFields)("u64", fields.fungible_staked_sui_amount) }); }
    static fromFieldsWithTypes(item) {
        if (!isConvertingToFungibleStakedSuiEvent(item.type)) {
            throw new Error("not a ConvertingToFungibleStakedSuiEvent type");
        }
        return ConvertingToFungibleStakedSuiEvent.reified().new({ poolId: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.pool_id), stakeActivationEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_activation_epoch), stakedSuiPrincipalAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.staked_sui_principal_amount), fungibleStakedSuiAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fungible_staked_sui_amount) });
    }
    static fromBcs(data) { return ConvertingToFungibleStakedSuiEvent.fromFields(ConvertingToFungibleStakedSuiEvent.bcs.parse(data)); }
    toJSONField() {
        return {
            poolId: this.poolId, stakeActivationEpoch: this.stakeActivationEpoch.toString(), stakedSuiPrincipalAmount: this.stakedSuiPrincipalAmount.toString(), fungibleStakedSuiAmount: this.fungibleStakedSuiAmount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ConvertingToFungibleStakedSuiEvent.reified().new({ poolId: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.poolId), stakeActivationEpoch: (0, reified_1.decodeFromJSONField)("u64", field.stakeActivationEpoch), stakedSuiPrincipalAmount: (0, reified_1.decodeFromJSONField)("u64", field.stakedSuiPrincipalAmount), fungibleStakedSuiAmount: (0, reified_1.decodeFromJSONField)("u64", field.fungibleStakedSuiAmount) }); }
    static fromJSON(json) {
        if (json.$typeName !== ConvertingToFungibleStakedSuiEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ConvertingToFungibleStakedSuiEvent.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConvertingToFungibleStakedSuiEvent(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ConvertingToFungibleStakedSuiEvent object`);
    } return ConvertingToFungibleStakedSuiEvent.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConvertingToFungibleStakedSuiEvent(data.bcs.type)) {
                throw new Error(`object at is not a ConvertingToFungibleStakedSuiEvent object`);
            }
            return ConvertingToFungibleStakedSuiEvent.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ConvertingToFungibleStakedSuiEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ConvertingToFungibleStakedSuiEvent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConvertingToFungibleStakedSuiEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ConvertingToFungibleStakedSuiEvent object`);
        }
        return ConvertingToFungibleStakedSuiEvent.fromSuiObjectData(res.data);
    }
}
exports.ConvertingToFungibleStakedSuiEvent = ConvertingToFungibleStakedSuiEvent;
ConvertingToFungibleStakedSuiEvent.$typeName = `${index_1.PKG_V17}::validator::ConvertingToFungibleStakedSuiEvent`;
ConvertingToFungibleStakedSuiEvent.$numTypeParams = 0;
ConvertingToFungibleStakedSuiEvent.$isPhantom = [];
/* ============================== RedeemingFungibleStakedSuiEvent =============================== */
function isRedeemingFungibleStakedSuiEvent(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator::RedeemingFungibleStakedSuiEvent`; }
class RedeemingFungibleStakedSuiEvent {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RedeemingFungibleStakedSuiEvent.$typeName;
        this.$isPhantom = RedeemingFungibleStakedSuiEvent.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RedeemingFungibleStakedSuiEvent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolId = fields.poolId;
        ;
        this.fungibleStakedSuiAmount = fields.fungibleStakedSuiAmount;
        ;
        this.suiAmount = fields.suiAmount;
    }
    static reified() { return { typeName: RedeemingFungibleStakedSuiEvent.$typeName, fullTypeName: (0, util_1.composeSuiType)(RedeemingFungibleStakedSuiEvent.$typeName, ...[]), typeArgs: [], isPhantom: RedeemingFungibleStakedSuiEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RedeemingFungibleStakedSuiEvent.fromFields(fields), fromFieldsWithTypes: (item) => RedeemingFungibleStakedSuiEvent.fromFieldsWithTypes(item), fromBcs: (data) => RedeemingFungibleStakedSuiEvent.fromBcs(data), bcs: RedeemingFungibleStakedSuiEvent.bcs, fromJSONField: (field) => RedeemingFungibleStakedSuiEvent.fromJSONField(field), fromJSON: (json) => RedeemingFungibleStakedSuiEvent.fromJSON(json), fromSuiParsedData: (content) => RedeemingFungibleStakedSuiEvent.fromSuiParsedData(content), fromSuiObjectData: (content) => RedeemingFungibleStakedSuiEvent.fromSuiObjectData(content), fetch: async (client, id) => RedeemingFungibleStakedSuiEvent.fetch(client, id), new: (fields) => { return new RedeemingFungibleStakedSuiEvent([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RedeemingFungibleStakedSuiEvent.reified(); }
    static phantom() { return (0, reified_1.phantom)(RedeemingFungibleStakedSuiEvent.reified()); }
    static get p() { return RedeemingFungibleStakedSuiEvent.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RedeemingFungibleStakedSuiEvent", {
            pool_id: structs_4.ID.bcs, fungible_staked_sui_amount: bcs_1.bcs.u64(), sui_amount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return RedeemingFungibleStakedSuiEvent.reified().new({ poolId: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.pool_id), fungibleStakedSuiAmount: (0, reified_1.decodeFromFields)("u64", fields.fungible_staked_sui_amount), suiAmount: (0, reified_1.decodeFromFields)("u64", fields.sui_amount) }); }
    static fromFieldsWithTypes(item) {
        if (!isRedeemingFungibleStakedSuiEvent(item.type)) {
            throw new Error("not a RedeemingFungibleStakedSuiEvent type");
        }
        return RedeemingFungibleStakedSuiEvent.reified().new({ poolId: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.pool_id), fungibleStakedSuiAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fungible_staked_sui_amount), suiAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_amount) });
    }
    static fromBcs(data) { return RedeemingFungibleStakedSuiEvent.fromFields(RedeemingFungibleStakedSuiEvent.bcs.parse(data)); }
    toJSONField() {
        return {
            poolId: this.poolId, fungibleStakedSuiAmount: this.fungibleStakedSuiAmount.toString(), suiAmount: this.suiAmount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RedeemingFungibleStakedSuiEvent.reified().new({ poolId: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.poolId), fungibleStakedSuiAmount: (0, reified_1.decodeFromJSONField)("u64", field.fungibleStakedSuiAmount), suiAmount: (0, reified_1.decodeFromJSONField)("u64", field.suiAmount) }); }
    static fromJSON(json) {
        if (json.$typeName !== RedeemingFungibleStakedSuiEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RedeemingFungibleStakedSuiEvent.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRedeemingFungibleStakedSuiEvent(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RedeemingFungibleStakedSuiEvent object`);
    } return RedeemingFungibleStakedSuiEvent.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRedeemingFungibleStakedSuiEvent(data.bcs.type)) {
                throw new Error(`object at is not a RedeemingFungibleStakedSuiEvent object`);
            }
            return RedeemingFungibleStakedSuiEvent.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RedeemingFungibleStakedSuiEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RedeemingFungibleStakedSuiEvent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRedeemingFungibleStakedSuiEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RedeemingFungibleStakedSuiEvent object`);
        }
        return RedeemingFungibleStakedSuiEvent.fromSuiObjectData(res.data);
    }
}
exports.RedeemingFungibleStakedSuiEvent = RedeemingFungibleStakedSuiEvent;
RedeemingFungibleStakedSuiEvent.$typeName = `${index_1.PKG_V17}::validator::RedeemingFungibleStakedSuiEvent`;
RedeemingFungibleStakedSuiEvent.$numTypeParams = 0;
RedeemingFungibleStakedSuiEvent.$isPhantom = [];
/* ============================== StakingRequestEvent =============================== */
function isStakingRequestEvent(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator::StakingRequestEvent`; }
class StakingRequestEvent {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StakingRequestEvent.$typeName;
        this.$isPhantom = StakingRequestEvent.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StakingRequestEvent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolId = fields.poolId;
        ;
        this.validatorAddress = fields.validatorAddress;
        ;
        this.stakerAddress = fields.stakerAddress;
        ;
        this.epoch = fields.epoch;
        ;
        this.amount = fields.amount;
    }
    static reified() { return { typeName: StakingRequestEvent.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakingRequestEvent.$typeName, ...[]), typeArgs: [], isPhantom: StakingRequestEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakingRequestEvent.fromFields(fields), fromFieldsWithTypes: (item) => StakingRequestEvent.fromFieldsWithTypes(item), fromBcs: (data) => StakingRequestEvent.fromBcs(data), bcs: StakingRequestEvent.bcs, fromJSONField: (field) => StakingRequestEvent.fromJSONField(field), fromJSON: (json) => StakingRequestEvent.fromJSON(json), fromSuiParsedData: (content) => StakingRequestEvent.fromSuiParsedData(content), fromSuiObjectData: (content) => StakingRequestEvent.fromSuiObjectData(content), fetch: async (client, id) => StakingRequestEvent.fetch(client, id), new: (fields) => { return new StakingRequestEvent([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakingRequestEvent.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakingRequestEvent.reified()); }
    static get p() { return StakingRequestEvent.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakingRequestEvent", {
            pool_id: structs_4.ID.bcs, validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), staker_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), epoch: bcs_1.bcs.u64(), amount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return StakingRequestEvent.reified().new({ poolId: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.pool_id), validatorAddress: (0, reified_1.decodeFromFields)("address", fields.validator_address), stakerAddress: (0, reified_1.decodeFromFields)("address", fields.staker_address), epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), amount: (0, reified_1.decodeFromFields)("u64", fields.amount) }); }
    static fromFieldsWithTypes(item) {
        if (!isStakingRequestEvent(item.type)) {
            throw new Error("not a StakingRequestEvent type");
        }
        return StakingRequestEvent.reified().new({ poolId: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.pool_id), validatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_address), stakerAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.staker_address), epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount) });
    }
    static fromBcs(data) { return StakingRequestEvent.fromFields(StakingRequestEvent.bcs.parse(data)); }
    toJSONField() {
        return {
            poolId: this.poolId, validatorAddress: this.validatorAddress, stakerAddress: this.stakerAddress, epoch: this.epoch.toString(), amount: this.amount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StakingRequestEvent.reified().new({ poolId: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.poolId), validatorAddress: (0, reified_1.decodeFromJSONField)("address", field.validatorAddress), stakerAddress: (0, reified_1.decodeFromJSONField)("address", field.stakerAddress), epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount) }); }
    static fromJSON(json) {
        if (json.$typeName !== StakingRequestEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StakingRequestEvent.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStakingRequestEvent(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StakingRequestEvent object`);
    } return StakingRequestEvent.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakingRequestEvent(data.bcs.type)) {
                throw new Error(`object at is not a StakingRequestEvent object`);
            }
            return StakingRequestEvent.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakingRequestEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakingRequestEvent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakingRequestEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakingRequestEvent object`);
        }
        return StakingRequestEvent.fromSuiObjectData(res.data);
    }
}
exports.StakingRequestEvent = StakingRequestEvent;
StakingRequestEvent.$typeName = `${index_1.PKG_V17}::validator::StakingRequestEvent`;
StakingRequestEvent.$numTypeParams = 0;
StakingRequestEvent.$isPhantom = [];
/* ============================== UnstakingRequestEvent =============================== */
function isUnstakingRequestEvent(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator::UnstakingRequestEvent`; }
class UnstakingRequestEvent {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UnstakingRequestEvent.$typeName;
        this.$isPhantom = UnstakingRequestEvent.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UnstakingRequestEvent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolId = fields.poolId;
        ;
        this.validatorAddress = fields.validatorAddress;
        ;
        this.stakerAddress = fields.stakerAddress;
        ;
        this.stakeActivationEpoch = fields.stakeActivationEpoch;
        ;
        this.unstakingEpoch = fields.unstakingEpoch;
        ;
        this.principalAmount = fields.principalAmount;
        ;
        this.rewardAmount = fields.rewardAmount;
    }
    static reified() { return { typeName: UnstakingRequestEvent.$typeName, fullTypeName: (0, util_1.composeSuiType)(UnstakingRequestEvent.$typeName, ...[]), typeArgs: [], isPhantom: UnstakingRequestEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UnstakingRequestEvent.fromFields(fields), fromFieldsWithTypes: (item) => UnstakingRequestEvent.fromFieldsWithTypes(item), fromBcs: (data) => UnstakingRequestEvent.fromBcs(data), bcs: UnstakingRequestEvent.bcs, fromJSONField: (field) => UnstakingRequestEvent.fromJSONField(field), fromJSON: (json) => UnstakingRequestEvent.fromJSON(json), fromSuiParsedData: (content) => UnstakingRequestEvent.fromSuiParsedData(content), fromSuiObjectData: (content) => UnstakingRequestEvent.fromSuiObjectData(content), fetch: async (client, id) => UnstakingRequestEvent.fetch(client, id), new: (fields) => { return new UnstakingRequestEvent([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UnstakingRequestEvent.reified(); }
    static phantom() { return (0, reified_1.phantom)(UnstakingRequestEvent.reified()); }
    static get p() { return UnstakingRequestEvent.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UnstakingRequestEvent", {
            pool_id: structs_4.ID.bcs, validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), staker_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), stake_activation_epoch: bcs_1.bcs.u64(), unstaking_epoch: bcs_1.bcs.u64(), principal_amount: bcs_1.bcs.u64(), reward_amount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return UnstakingRequestEvent.reified().new({ poolId: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.pool_id), validatorAddress: (0, reified_1.decodeFromFields)("address", fields.validator_address), stakerAddress: (0, reified_1.decodeFromFields)("address", fields.staker_address), stakeActivationEpoch: (0, reified_1.decodeFromFields)("u64", fields.stake_activation_epoch), unstakingEpoch: (0, reified_1.decodeFromFields)("u64", fields.unstaking_epoch), principalAmount: (0, reified_1.decodeFromFields)("u64", fields.principal_amount), rewardAmount: (0, reified_1.decodeFromFields)("u64", fields.reward_amount) }); }
    static fromFieldsWithTypes(item) {
        if (!isUnstakingRequestEvent(item.type)) {
            throw new Error("not a UnstakingRequestEvent type");
        }
        return UnstakingRequestEvent.reified().new({ poolId: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.pool_id), validatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.validator_address), stakerAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.staker_address), stakeActivationEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_activation_epoch), unstakingEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.unstaking_epoch), principalAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.principal_amount), rewardAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.reward_amount) });
    }
    static fromBcs(data) { return UnstakingRequestEvent.fromFields(UnstakingRequestEvent.bcs.parse(data)); }
    toJSONField() {
        return {
            poolId: this.poolId, validatorAddress: this.validatorAddress, stakerAddress: this.stakerAddress, stakeActivationEpoch: this.stakeActivationEpoch.toString(), unstakingEpoch: this.unstakingEpoch.toString(), principalAmount: this.principalAmount.toString(), rewardAmount: this.rewardAmount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UnstakingRequestEvent.reified().new({ poolId: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.poolId), validatorAddress: (0, reified_1.decodeFromJSONField)("address", field.validatorAddress), stakerAddress: (0, reified_1.decodeFromJSONField)("address", field.stakerAddress), stakeActivationEpoch: (0, reified_1.decodeFromJSONField)("u64", field.stakeActivationEpoch), unstakingEpoch: (0, reified_1.decodeFromJSONField)("u64", field.unstakingEpoch), principalAmount: (0, reified_1.decodeFromJSONField)("u64", field.principalAmount), rewardAmount: (0, reified_1.decodeFromJSONField)("u64", field.rewardAmount) }); }
    static fromJSON(json) {
        if (json.$typeName !== UnstakingRequestEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UnstakingRequestEvent.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnstakingRequestEvent(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UnstakingRequestEvent object`);
    } return UnstakingRequestEvent.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUnstakingRequestEvent(data.bcs.type)) {
                throw new Error(`object at is not a UnstakingRequestEvent object`);
            }
            return UnstakingRequestEvent.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UnstakingRequestEvent.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UnstakingRequestEvent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnstakingRequestEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnstakingRequestEvent object`);
        }
        return UnstakingRequestEvent.fromSuiObjectData(res.data);
    }
}
exports.UnstakingRequestEvent = UnstakingRequestEvent;
UnstakingRequestEvent.$typeName = `${index_1.PKG_V17}::validator::UnstakingRequestEvent`;
UnstakingRequestEvent.$numTypeParams = 0;
UnstakingRequestEvent.$isPhantom = [];
/* ============================== Validator =============================== */
function isValidator(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator::Validator`; }
class Validator {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Validator.$typeName;
        this.$isPhantom = Validator.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Validator.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.metadata = fields.metadata;
        ;
        this.votingPower = fields.votingPower;
        ;
        this.operationCapId = fields.operationCapId;
        ;
        this.gasPrice = fields.gasPrice;
        ;
        this.stakingPool = fields.stakingPool;
        ;
        this.commissionRate = fields.commissionRate;
        ;
        this.nextEpochStake = fields.nextEpochStake;
        ;
        this.nextEpochGasPrice = fields.nextEpochGasPrice;
        ;
        this.nextEpochCommissionRate = fields.nextEpochCommissionRate;
        ;
        this.extraFields = fields.extraFields;
    }
    static reified() { return { typeName: Validator.$typeName, fullTypeName: (0, util_1.composeSuiType)(Validator.$typeName, ...[]), typeArgs: [], isPhantom: Validator.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Validator.fromFields(fields), fromFieldsWithTypes: (item) => Validator.fromFieldsWithTypes(item), fromBcs: (data) => Validator.fromBcs(data), bcs: Validator.bcs, fromJSONField: (field) => Validator.fromJSONField(field), fromJSON: (json) => Validator.fromJSON(json), fromSuiParsedData: (content) => Validator.fromSuiParsedData(content), fromSuiObjectData: (content) => Validator.fromSuiObjectData(content), fetch: async (client, id) => Validator.fetch(client, id), new: (fields) => { return new Validator([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Validator.reified(); }
    static phantom() { return (0, reified_1.phantom)(Validator.reified()); }
    static get p() { return Validator.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Validator", {
            metadata: ValidatorMetadata.bcs, voting_power: bcs_1.bcs.u64(), operation_cap_id: structs_4.ID.bcs, gas_price: bcs_1.bcs.u64(), staking_pool: structs_6.StakingPool.bcs, commission_rate: bcs_1.bcs.u64(), next_epoch_stake: bcs_1.bcs.u64(), next_epoch_gas_price: bcs_1.bcs.u64(), next_epoch_commission_rate: bcs_1.bcs.u64(), extra_fields: structs_3.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return Validator.reified().new({ metadata: (0, reified_1.decodeFromFields)(ValidatorMetadata.reified(), fields.metadata), votingPower: (0, reified_1.decodeFromFields)("u64", fields.voting_power), operationCapId: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.operation_cap_id), gasPrice: (0, reified_1.decodeFromFields)("u64", fields.gas_price), stakingPool: (0, reified_1.decodeFromFields)(structs_6.StakingPool.reified(), fields.staking_pool), commissionRate: (0, reified_1.decodeFromFields)("u64", fields.commission_rate), nextEpochStake: (0, reified_1.decodeFromFields)("u64", fields.next_epoch_stake), nextEpochGasPrice: (0, reified_1.decodeFromFields)("u64", fields.next_epoch_gas_price), nextEpochCommissionRate: (0, reified_1.decodeFromFields)("u64", fields.next_epoch_commission_rate), extraFields: (0, reified_1.decodeFromFields)(structs_3.Bag.reified(), fields.extra_fields) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidator(item.type)) {
            throw new Error("not a Validator type");
        }
        return Validator.reified().new({ metadata: (0, reified_1.decodeFromFieldsWithTypes)(ValidatorMetadata.reified(), item.fields.metadata), votingPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_power), operationCapId: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.operation_cap_id), gasPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.gas_price), stakingPool: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.StakingPool.reified(), item.fields.staking_pool), commissionRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.commission_rate), nextEpochStake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_epoch_stake), nextEpochGasPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_epoch_gas_price), nextEpochCommissionRate: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_epoch_commission_rate), extraFields: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Bag.reified(), item.fields.extra_fields) });
    }
    static fromBcs(data) { return Validator.fromFields(Validator.bcs.parse(data)); }
    toJSONField() {
        return {
            metadata: this.metadata.toJSONField(), votingPower: this.votingPower.toString(), operationCapId: this.operationCapId, gasPrice: this.gasPrice.toString(), stakingPool: this.stakingPool.toJSONField(), commissionRate: this.commissionRate.toString(), nextEpochStake: this.nextEpochStake.toString(), nextEpochGasPrice: this.nextEpochGasPrice.toString(), nextEpochCommissionRate: this.nextEpochCommissionRate.toString(), extraFields: this.extraFields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Validator.reified().new({ metadata: (0, reified_1.decodeFromJSONField)(ValidatorMetadata.reified(), field.metadata), votingPower: (0, reified_1.decodeFromJSONField)("u64", field.votingPower), operationCapId: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.operationCapId), gasPrice: (0, reified_1.decodeFromJSONField)("u64", field.gasPrice), stakingPool: (0, reified_1.decodeFromJSONField)(structs_6.StakingPool.reified(), field.stakingPool), commissionRate: (0, reified_1.decodeFromJSONField)("u64", field.commissionRate), nextEpochStake: (0, reified_1.decodeFromJSONField)("u64", field.nextEpochStake), nextEpochGasPrice: (0, reified_1.decodeFromJSONField)("u64", field.nextEpochGasPrice), nextEpochCommissionRate: (0, reified_1.decodeFromJSONField)("u64", field.nextEpochCommissionRate), extraFields: (0, reified_1.decodeFromJSONField)(structs_3.Bag.reified(), field.extraFields) }); }
    static fromJSON(json) {
        if (json.$typeName !== Validator.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Validator.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidator(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Validator object`);
    } return Validator.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidator(data.bcs.type)) {
                throw new Error(`object at is not a Validator object`);
            }
            return Validator.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Validator.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Validator object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidator(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Validator object`);
        }
        return Validator.fromSuiObjectData(res.data);
    }
}
exports.Validator = Validator;
Validator.$typeName = `${index_1.PKG_V17}::validator::Validator`;
Validator.$numTypeParams = 0;
Validator.$isPhantom = [];
/* ============================== ValidatorMetadata =============================== */
function isValidatorMetadata(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator::ValidatorMetadata`; }
class ValidatorMetadata {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorMetadata.$typeName;
        this.$isPhantom = ValidatorMetadata.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorMetadata.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.suiAddress = fields.suiAddress;
        ;
        this.protocolPubkeyBytes = fields.protocolPubkeyBytes;
        ;
        this.networkPubkeyBytes = fields.networkPubkeyBytes;
        ;
        this.workerPubkeyBytes = fields.workerPubkeyBytes;
        ;
        this.proofOfPossession = fields.proofOfPossession;
        ;
        this.name = fields.name;
        ;
        this.description = fields.description;
        ;
        this.imageUrl = fields.imageUrl;
        ;
        this.projectUrl = fields.projectUrl;
        ;
        this.netAddress = fields.netAddress;
        ;
        this.p2PAddress = fields.p2PAddress;
        ;
        this.primaryAddress = fields.primaryAddress;
        ;
        this.workerAddress = fields.workerAddress;
        ;
        this.nextEpochProtocolPubkeyBytes = fields.nextEpochProtocolPubkeyBytes;
        ;
        this.nextEpochProofOfPossession = fields.nextEpochProofOfPossession;
        ;
        this.nextEpochNetworkPubkeyBytes = fields.nextEpochNetworkPubkeyBytes;
        ;
        this.nextEpochWorkerPubkeyBytes = fields.nextEpochWorkerPubkeyBytes;
        ;
        this.nextEpochNetAddress = fields.nextEpochNetAddress;
        ;
        this.nextEpochP2PAddress = fields.nextEpochP2PAddress;
        ;
        this.nextEpochPrimaryAddress = fields.nextEpochPrimaryAddress;
        ;
        this.nextEpochWorkerAddress = fields.nextEpochWorkerAddress;
        ;
        this.extraFields = fields.extraFields;
    }
    static reified() { return { typeName: ValidatorMetadata.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorMetadata.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorMetadata.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorMetadata.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorMetadata.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorMetadata.fromBcs(data), bcs: ValidatorMetadata.bcs, fromJSONField: (field) => ValidatorMetadata.fromJSONField(field), fromJSON: (json) => ValidatorMetadata.fromJSON(json), fromSuiParsedData: (content) => ValidatorMetadata.fromSuiParsedData(content), fromSuiObjectData: (content) => ValidatorMetadata.fromSuiObjectData(content), fetch: async (client, id) => ValidatorMetadata.fetch(client, id), new: (fields) => { return new ValidatorMetadata([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorMetadata.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorMetadata.reified()); }
    static get p() { return ValidatorMetadata.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorMetadata", {
            sui_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), protocol_pubkey_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8()), network_pubkey_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8()), worker_pubkey_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8()), proof_of_possession: bcs_1.bcs.vector(bcs_1.bcs.u8()), name: structs_2.String.bcs, description: structs_2.String.bcs, image_url: structs_5.Url.bcs, project_url: structs_5.Url.bcs, net_address: structs_2.String.bcs, p2p_address: structs_2.String.bcs, primary_address: structs_2.String.bcs, worker_address: structs_2.String.bcs, next_epoch_protocol_pubkey_bytes: structs_1.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u8())), next_epoch_proof_of_possession: structs_1.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u8())), next_epoch_network_pubkey_bytes: structs_1.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u8())), next_epoch_worker_pubkey_bytes: structs_1.Option.bcs(bcs_1.bcs.vector(bcs_1.bcs.u8())), next_epoch_net_address: structs_1.Option.bcs(structs_2.String.bcs), next_epoch_p2p_address: structs_1.Option.bcs(structs_2.String.bcs), next_epoch_primary_address: structs_1.Option.bcs(structs_2.String.bcs), next_epoch_worker_address: structs_1.Option.bcs(structs_2.String.bcs), extra_fields: structs_3.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return ValidatorMetadata.reified().new({ suiAddress: (0, reified_1.decodeFromFields)("address", fields.sui_address), protocolPubkeyBytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.protocol_pubkey_bytes), networkPubkeyBytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.network_pubkey_bytes), workerPubkeyBytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.worker_pubkey_bytes), proofOfPossession: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.proof_of_possession), name: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.name), description: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.description), imageUrl: (0, reified_1.decodeFromFields)(structs_5.Url.reified(), fields.image_url), projectUrl: (0, reified_1.decodeFromFields)(structs_5.Url.reified(), fields.project_url), netAddress: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.net_address), p2PAddress: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.p2p_address), primaryAddress: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.primary_address), workerAddress: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.worker_address), nextEpochProtocolPubkeyBytes: (0, reified_1.decodeFromFields)(structs_1.Option.reified(reified.vector("u8")), fields.next_epoch_protocol_pubkey_bytes), nextEpochProofOfPossession: (0, reified_1.decodeFromFields)(structs_1.Option.reified(reified.vector("u8")), fields.next_epoch_proof_of_possession), nextEpochNetworkPubkeyBytes: (0, reified_1.decodeFromFields)(structs_1.Option.reified(reified.vector("u8")), fields.next_epoch_network_pubkey_bytes), nextEpochWorkerPubkeyBytes: (0, reified_1.decodeFromFields)(structs_1.Option.reified(reified.vector("u8")), fields.next_epoch_worker_pubkey_bytes), nextEpochNetAddress: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_2.String.reified()), fields.next_epoch_net_address), nextEpochP2PAddress: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_2.String.reified()), fields.next_epoch_p2p_address), nextEpochPrimaryAddress: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_2.String.reified()), fields.next_epoch_primary_address), nextEpochWorkerAddress: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_2.String.reified()), fields.next_epoch_worker_address), extraFields: (0, reified_1.decodeFromFields)(structs_3.Bag.reified(), fields.extra_fields) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorMetadata(item.type)) {
            throw new Error("not a ValidatorMetadata type");
        }
        return ValidatorMetadata.reified().new({ suiAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sui_address), protocolPubkeyBytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.protocol_pubkey_bytes), networkPubkeyBytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.network_pubkey_bytes), workerPubkeyBytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.worker_pubkey_bytes), proofOfPossession: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.proof_of_possession), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.name), description: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.description), imageUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Url.reified(), item.fields.image_url), projectUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Url.reified(), item.fields.project_url), netAddress: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.net_address), p2PAddress: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.p2p_address), primaryAddress: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.primary_address), workerAddress: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.worker_address), nextEpochProtocolPubkeyBytes: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(reified.vector("u8")), item.fields.next_epoch_protocol_pubkey_bytes), nextEpochProofOfPossession: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(reified.vector("u8")), item.fields.next_epoch_proof_of_possession), nextEpochNetworkPubkeyBytes: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(reified.vector("u8")), item.fields.next_epoch_network_pubkey_bytes), nextEpochWorkerPubkeyBytes: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(reified.vector("u8")), item.fields.next_epoch_worker_pubkey_bytes), nextEpochNetAddress: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_2.String.reified()), item.fields.next_epoch_net_address), nextEpochP2PAddress: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_2.String.reified()), item.fields.next_epoch_p2p_address), nextEpochPrimaryAddress: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_2.String.reified()), item.fields.next_epoch_primary_address), nextEpochWorkerAddress: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_2.String.reified()), item.fields.next_epoch_worker_address), extraFields: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Bag.reified(), item.fields.extra_fields) });
    }
    static fromBcs(data) { return ValidatorMetadata.fromFields(ValidatorMetadata.bcs.parse(data)); }
    toJSONField() {
        return {
            suiAddress: this.suiAddress, protocolPubkeyBytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.protocolPubkeyBytes), networkPubkeyBytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.networkPubkeyBytes), workerPubkeyBytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.workerPubkeyBytes), proofOfPossession: (0, reified_1.fieldToJSON)(`vector<u8>`, this.proofOfPossession), name: this.name, description: this.description, imageUrl: this.imageUrl, projectUrl: this.projectUrl, netAddress: this.netAddress, p2PAddress: this.p2PAddress, primaryAddress: this.primaryAddress, workerAddress: this.workerAddress, nextEpochProtocolPubkeyBytes: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<vector<u8>>`, this.nextEpochProtocolPubkeyBytes), nextEpochProofOfPossession: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<vector<u8>>`, this.nextEpochProofOfPossession), nextEpochNetworkPubkeyBytes: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<vector<u8>>`, this.nextEpochNetworkPubkeyBytes), nextEpochWorkerPubkeyBytes: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<vector<u8>>`, this.nextEpochWorkerPubkeyBytes), nextEpochNetAddress: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_2.String.$typeName}>`, this.nextEpochNetAddress), nextEpochP2PAddress: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_2.String.$typeName}>`, this.nextEpochP2PAddress), nextEpochPrimaryAddress: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_2.String.$typeName}>`, this.nextEpochPrimaryAddress), nextEpochWorkerAddress: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_2.String.$typeName}>`, this.nextEpochWorkerAddress), extraFields: this.extraFields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorMetadata.reified().new({ suiAddress: (0, reified_1.decodeFromJSONField)("address", field.suiAddress), protocolPubkeyBytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.protocolPubkeyBytes), networkPubkeyBytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.networkPubkeyBytes), workerPubkeyBytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.workerPubkeyBytes), proofOfPossession: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.proofOfPossession), name: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.name), description: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.description), imageUrl: (0, reified_1.decodeFromJSONField)(structs_5.Url.reified(), field.imageUrl), projectUrl: (0, reified_1.decodeFromJSONField)(structs_5.Url.reified(), field.projectUrl), netAddress: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.netAddress), p2PAddress: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.p2PAddress), primaryAddress: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.primaryAddress), workerAddress: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.workerAddress), nextEpochProtocolPubkeyBytes: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(reified.vector("u8")), field.nextEpochProtocolPubkeyBytes), nextEpochProofOfPossession: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(reified.vector("u8")), field.nextEpochProofOfPossession), nextEpochNetworkPubkeyBytes: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(reified.vector("u8")), field.nextEpochNetworkPubkeyBytes), nextEpochWorkerPubkeyBytes: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(reified.vector("u8")), field.nextEpochWorkerPubkeyBytes), nextEpochNetAddress: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_2.String.reified()), field.nextEpochNetAddress), nextEpochP2PAddress: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_2.String.reified()), field.nextEpochP2PAddress), nextEpochPrimaryAddress: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_2.String.reified()), field.nextEpochPrimaryAddress), nextEpochWorkerAddress: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_2.String.reified()), field.nextEpochWorkerAddress), extraFields: (0, reified_1.decodeFromJSONField)(structs_3.Bag.reified(), field.extraFields) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorMetadata.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorMetadata.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorMetadata(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorMetadata object`);
    } return ValidatorMetadata.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidatorMetadata(data.bcs.type)) {
                throw new Error(`object at is not a ValidatorMetadata object`);
            }
            return ValidatorMetadata.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ValidatorMetadata.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorMetadata object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorMetadata(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorMetadata object`);
        }
        return ValidatorMetadata.fromSuiObjectData(res.data);
    }
}
exports.ValidatorMetadata = ValidatorMetadata;
ValidatorMetadata.$typeName = `${index_1.PKG_V17}::validator::ValidatorMetadata`;
ValidatorMetadata.$numTypeParams = 0;
ValidatorMetadata.$isPhantom = [];
