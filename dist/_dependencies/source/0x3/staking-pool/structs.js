"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingPool = exports.isStakingPool = exports.StakedSui = exports.isStakedSui = exports.PoolTokenExchangeRate = exports.isPoolTokenExchangeRate = void 0;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/option/structs");
const structs_2 = require("../../0x2/bag/structs");
const structs_3 = require("../../0x2/balance/structs");
const structs_4 = require("../../0x2/object/structs");
const structs_5 = require("../../0x2/sui/structs");
const structs_6 = require("../../0x2/table/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== PoolTokenExchangeRate =============================== */
function isPoolTokenExchangeRate(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3::staking_pool::PoolTokenExchangeRate"; }
exports.isPoolTokenExchangeRate = isPoolTokenExchangeRate;
class PoolTokenExchangeRate {
    constructor(typeArgs, fields) {
        this.$typeName = PoolTokenExchangeRate.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolTokenExchangeRate.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.suiAmount = fields.suiAmount;
        ;
        this.poolTokenAmount = fields.poolTokenAmount;
    }
    static reified() { return { typeName: PoolTokenExchangeRate.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolTokenExchangeRate.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => PoolTokenExchangeRate.fromFields(fields), fromFieldsWithTypes: (item) => PoolTokenExchangeRate.fromFieldsWithTypes(item), fromBcs: (data) => PoolTokenExchangeRate.fromBcs(data), bcs: PoolTokenExchangeRate.bcs, fromJSONField: (field) => PoolTokenExchangeRate.fromJSONField(field), fromJSON: (json) => PoolTokenExchangeRate.fromJSON(json), fromSuiParsedData: (content) => PoolTokenExchangeRate.fromSuiParsedData(content), fetch: async (client, id) => PoolTokenExchangeRate.fetch(client, id), new: (fields) => { return new PoolTokenExchangeRate([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolTokenExchangeRate.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolTokenExchangeRate.reified()); }
    static get p() { return PoolTokenExchangeRate.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolTokenExchangeRate", {
            sui_amount: bcs_1.bcs.u64(), pool_token_amount: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PoolTokenExchangeRate.reified().new({ suiAmount: (0, reified_1.decodeFromFields)("u64", fields.sui_amount), poolTokenAmount: (0, reified_1.decodeFromFields)("u64", fields.pool_token_amount) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolTokenExchangeRate(item.type)) {
            throw new Error("not a PoolTokenExchangeRate type");
        }
        return PoolTokenExchangeRate.reified().new({ suiAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_amount), poolTokenAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_token_amount) });
    }
    static fromBcs(data) { return PoolTokenExchangeRate.fromFields(PoolTokenExchangeRate.bcs.parse(data)); }
    toJSONField() {
        return {
            suiAmount: this.suiAmount.toString(), poolTokenAmount: this.poolTokenAmount.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolTokenExchangeRate.reified().new({ suiAmount: (0, reified_1.decodeFromJSONField)("u64", field.suiAmount), poolTokenAmount: (0, reified_1.decodeFromJSONField)("u64", field.poolTokenAmount) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolTokenExchangeRate.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolTokenExchangeRate.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolTokenExchangeRate(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolTokenExchangeRate object`);
    } return PoolTokenExchangeRate.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolTokenExchangeRate object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolTokenExchangeRate(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolTokenExchangeRate object`);
        }
        return PoolTokenExchangeRate.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PoolTokenExchangeRate = PoolTokenExchangeRate;
PoolTokenExchangeRate.$typeName = "0x3::staking_pool::PoolTokenExchangeRate";
PoolTokenExchangeRate.$numTypeParams = 0;
/* ============================== StakedSui =============================== */
function isStakedSui(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3::staking_pool::StakedSui"; }
exports.isStakedSui = isStakedSui;
class StakedSui {
    constructor(typeArgs, fields) {
        this.$typeName = StakedSui.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(StakedSui.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.poolId = fields.poolId;
        ;
        this.stakeActivationEpoch = fields.stakeActivationEpoch;
        ;
        this.principal = fields.principal;
    }
    static reified() { return { typeName: StakedSui.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakedSui.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => StakedSui.fromFields(fields), fromFieldsWithTypes: (item) => StakedSui.fromFieldsWithTypes(item), fromBcs: (data) => StakedSui.fromBcs(data), bcs: StakedSui.bcs, fromJSONField: (field) => StakedSui.fromJSONField(field), fromJSON: (json) => StakedSui.fromJSON(json), fromSuiParsedData: (content) => StakedSui.fromSuiParsedData(content), fetch: async (client, id) => StakedSui.fetch(client, id), new: (fields) => { return new StakedSui([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakedSui.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakedSui.reified()); }
    static get p() { return StakedSui.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakedSui", {
            id: structs_4.UID.bcs, pool_id: structs_4.ID.bcs, stake_activation_epoch: bcs_1.bcs.u64(), principal: structs_3.Balance.bcs
        });
    }
    ;
    static fromFields(fields) { return StakedSui.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), poolId: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.pool_id), stakeActivationEpoch: (0, reified_1.decodeFromFields)("u64", fields.stake_activation_epoch), principal: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(reified.phantom(structs_5.SUI.reified())), fields.principal) }); }
    static fromFieldsWithTypes(item) {
        if (!isStakedSui(item.type)) {
            throw new Error("not a StakedSui type");
        }
        return StakedSui.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), poolId: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.pool_id), stakeActivationEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake_activation_epoch), principal: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(reified.phantom(structs_5.SUI.reified())), item.fields.principal) });
    }
    static fromBcs(data) { return StakedSui.fromFields(StakedSui.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, poolId: this.poolId, stakeActivationEpoch: this.stakeActivationEpoch.toString(), principal: this.principal.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StakedSui.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), poolId: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.poolId), stakeActivationEpoch: (0, reified_1.decodeFromJSONField)("u64", field.stakeActivationEpoch), principal: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(reified.phantom(structs_5.SUI.reified())), field.principal) }); }
    static fromJSON(json) {
        if (json.$typeName !== StakedSui.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StakedSui.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStakedSui(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StakedSui object`);
    } return StakedSui.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakedSui object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakedSui(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakedSui object`);
        }
        return StakedSui.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StakedSui = StakedSui;
StakedSui.$typeName = "0x3::staking_pool::StakedSui";
StakedSui.$numTypeParams = 0;
/* ============================== StakingPool =============================== */
function isStakingPool(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3::staking_pool::StakingPool"; }
exports.isStakingPool = isStakingPool;
class StakingPool {
    constructor(typeArgs, fields) {
        this.$typeName = StakingPool.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(StakingPool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.activationEpoch = fields.activationEpoch;
        ;
        this.deactivationEpoch = fields.deactivationEpoch;
        ;
        this.suiBalance = fields.suiBalance;
        ;
        this.rewardsPool = fields.rewardsPool;
        ;
        this.poolTokenBalance = fields.poolTokenBalance;
        ;
        this.exchangeRates = fields.exchangeRates;
        ;
        this.pendingStake = fields.pendingStake;
        ;
        this.pendingTotalSuiWithdraw = fields.pendingTotalSuiWithdraw;
        ;
        this.pendingPoolTokenWithdraw = fields.pendingPoolTokenWithdraw;
        ;
        this.extraFields = fields.extraFields;
    }
    static reified() { return { typeName: StakingPool.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakingPool.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => StakingPool.fromFields(fields), fromFieldsWithTypes: (item) => StakingPool.fromFieldsWithTypes(item), fromBcs: (data) => StakingPool.fromBcs(data), bcs: StakingPool.bcs, fromJSONField: (field) => StakingPool.fromJSONField(field), fromJSON: (json) => StakingPool.fromJSON(json), fromSuiParsedData: (content) => StakingPool.fromSuiParsedData(content), fetch: async (client, id) => StakingPool.fetch(client, id), new: (fields) => { return new StakingPool([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StakingPool.reified(); }
    static phantom() { return (0, reified_1.phantom)(StakingPool.reified()); }
    static get p() { return StakingPool.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StakingPool", {
            id: structs_4.UID.bcs, activation_epoch: structs_1.Option.bcs(bcs_1.bcs.u64()), deactivation_epoch: structs_1.Option.bcs(bcs_1.bcs.u64()), sui_balance: bcs_1.bcs.u64(), rewards_pool: structs_3.Balance.bcs, pool_token_balance: bcs_1.bcs.u64(), exchange_rates: structs_6.Table.bcs, pending_stake: bcs_1.bcs.u64(), pending_total_sui_withdraw: bcs_1.bcs.u64(), pending_pool_token_withdraw: bcs_1.bcs.u64(), extra_fields: structs_2.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return StakingPool.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), activationEpoch: (0, reified_1.decodeFromFields)(structs_1.Option.reified("u64"), fields.activation_epoch), deactivationEpoch: (0, reified_1.decodeFromFields)(structs_1.Option.reified("u64"), fields.deactivation_epoch), suiBalance: (0, reified_1.decodeFromFields)("u64", fields.sui_balance), rewardsPool: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(reified.phantom(structs_5.SUI.reified())), fields.rewards_pool), poolTokenBalance: (0, reified_1.decodeFromFields)("u64", fields.pool_token_balance), exchangeRates: (0, reified_1.decodeFromFields)(structs_6.Table.reified(reified.phantom("u64"), reified.phantom(PoolTokenExchangeRate.reified())), fields.exchange_rates), pendingStake: (0, reified_1.decodeFromFields)("u64", fields.pending_stake), pendingTotalSuiWithdraw: (0, reified_1.decodeFromFields)("u64", fields.pending_total_sui_withdraw), pendingPoolTokenWithdraw: (0, reified_1.decodeFromFields)("u64", fields.pending_pool_token_withdraw), extraFields: (0, reified_1.decodeFromFields)(structs_2.Bag.reified(), fields.extra_fields) }); }
    static fromFieldsWithTypes(item) {
        if (!isStakingPool(item.type)) {
            throw new Error("not a StakingPool type");
        }
        return StakingPool.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), activationEpoch: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("u64"), item.fields.activation_epoch), deactivationEpoch: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("u64"), item.fields.deactivation_epoch), suiBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_balance), rewardsPool: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(reified.phantom(structs_5.SUI.reified())), item.fields.rewards_pool), poolTokenBalance: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_token_balance), exchangeRates: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.Table.reified(reified.phantom("u64"), reified.phantom(PoolTokenExchangeRate.reified())), item.fields.exchange_rates), pendingStake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pending_stake), pendingTotalSuiWithdraw: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pending_total_sui_withdraw), pendingPoolTokenWithdraw: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pending_pool_token_withdraw), extraFields: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Bag.reified(), item.fields.extra_fields) });
    }
    static fromBcs(data) { return StakingPool.fromFields(StakingPool.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, activationEpoch: (0, reified_1.fieldToJSON)(`0x1::option::Option<u64>`, this.activationEpoch), deactivationEpoch: (0, reified_1.fieldToJSON)(`0x1::option::Option<u64>`, this.deactivationEpoch), suiBalance: this.suiBalance.toString(), rewardsPool: this.rewardsPool.toJSONField(), poolTokenBalance: this.poolTokenBalance.toString(), exchangeRates: this.exchangeRates.toJSONField(), pendingStake: this.pendingStake.toString(), pendingTotalSuiWithdraw: this.pendingTotalSuiWithdraw.toString(), pendingPoolTokenWithdraw: this.pendingPoolTokenWithdraw.toString(), extraFields: this.extraFields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StakingPool.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), activationEpoch: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("u64"), field.activationEpoch), deactivationEpoch: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("u64"), field.deactivationEpoch), suiBalance: (0, reified_1.decodeFromJSONField)("u64", field.suiBalance), rewardsPool: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(reified.phantom(structs_5.SUI.reified())), field.rewardsPool), poolTokenBalance: (0, reified_1.decodeFromJSONField)("u64", field.poolTokenBalance), exchangeRates: (0, reified_1.decodeFromJSONField)(structs_6.Table.reified(reified.phantom("u64"), reified.phantom(PoolTokenExchangeRate.reified())), field.exchangeRates), pendingStake: (0, reified_1.decodeFromJSONField)("u64", field.pendingStake), pendingTotalSuiWithdraw: (0, reified_1.decodeFromJSONField)("u64", field.pendingTotalSuiWithdraw), pendingPoolTokenWithdraw: (0, reified_1.decodeFromJSONField)("u64", field.pendingPoolTokenWithdraw), extraFields: (0, reified_1.decodeFromJSONField)(structs_2.Bag.reified(), field.extraFields) }); }
    static fromJSON(json) {
        if (json.$typeName !== StakingPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StakingPool.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStakingPool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StakingPool object`);
    } return StakingPool.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakingPool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakingPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakingPool object`);
        }
        return StakingPool.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StakingPool = StakingPool;
StakingPool.$typeName = "0x3::staking_pool::StakingPool";
StakingPool.$numTypeParams = 0;
