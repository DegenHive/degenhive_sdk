"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingPool = exports.StakedSui = exports.PoolTokenExchangeRate = exports.FungibleStakedSuiDataKey = exports.FungibleStakedSuiData = exports.FungibleStakedSui = void 0;
exports.isFungibleStakedSui = isFungibleStakedSui;
exports.isFungibleStakedSuiData = isFungibleStakedSuiData;
exports.isFungibleStakedSuiDataKey = isFungibleStakedSuiDataKey;
exports.isPoolTokenExchangeRate = isPoolTokenExchangeRate;
exports.isStakedSui = isStakedSui;
exports.isStakingPool = isStakingPool;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/option/structs");
const structs_2 = require("../../0x2/bag/structs");
const structs_3 = require("../../0x2/balance/structs");
const structs_4 = require("../../0x2/object/structs");
const structs_5 = require("../../0x2/sui/structs");
const structs_6 = require("../../0x2/table/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== FungibleStakedSui =============================== */
function isFungibleStakedSui(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::staking_pool::FungibleStakedSui`; }
class FungibleStakedSui {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FungibleStakedSui.$typeName;
        this.$isPhantom = FungibleStakedSui.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FungibleStakedSui.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.poolId = fields.poolId;
        ;
        this.value = fields.value;
    }
    static reified() { return { typeName: FungibleStakedSui.$typeName, fullTypeName: (0, util_1.composeSuiType)(FungibleStakedSui.$typeName, ...[]), typeArgs: [], isPhantom: FungibleStakedSui.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FungibleStakedSui.fromFields(fields), fromFieldsWithTypes: (item) => FungibleStakedSui.fromFieldsWithTypes(item), fromBcs: (data) => FungibleStakedSui.fromBcs(data), bcs: FungibleStakedSui.bcs, fromJSONField: (field) => FungibleStakedSui.fromJSONField(field), fromJSON: (json) => FungibleStakedSui.fromJSON(json), fromSuiParsedData: (content) => FungibleStakedSui.fromSuiParsedData(content), fromSuiObjectData: (content) => FungibleStakedSui.fromSuiObjectData(content), fetch: async (client, id) => FungibleStakedSui.fetch(client, id), new: (fields) => { return new FungibleStakedSui([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FungibleStakedSui.reified(); }
    static phantom() { return (0, reified_1.phantom)(FungibleStakedSui.reified()); }
    static get p() { return FungibleStakedSui.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FungibleStakedSui", {
            id: structs_4.UID.bcs, pool_id: structs_4.ID.bcs, value: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return FungibleStakedSui.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), poolId: (0, reified_1.decodeFromFields)(structs_4.ID.reified(), fields.pool_id), value: (0, reified_1.decodeFromFields)("u64", fields.value) }); }
    static fromFieldsWithTypes(item) {
        if (!isFungibleStakedSui(item.type)) {
            throw new Error("not a FungibleStakedSui type");
        }
        return FungibleStakedSui.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), poolId: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.ID.reified(), item.fields.pool_id), value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value) });
    }
    static fromBcs(data) { return FungibleStakedSui.fromFields(FungibleStakedSui.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, poolId: this.poolId, value: this.value.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FungibleStakedSui.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), poolId: (0, reified_1.decodeFromJSONField)(structs_4.ID.reified(), field.poolId), value: (0, reified_1.decodeFromJSONField)("u64", field.value) }); }
    static fromJSON(json) {
        if (json.$typeName !== FungibleStakedSui.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FungibleStakedSui.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFungibleStakedSui(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FungibleStakedSui object`);
    } return FungibleStakedSui.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFungibleStakedSui(data.bcs.type)) {
                throw new Error(`object at is not a FungibleStakedSui object`);
            }
            return FungibleStakedSui.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FungibleStakedSui.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FungibleStakedSui object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFungibleStakedSui(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FungibleStakedSui object`);
        }
        return FungibleStakedSui.fromSuiObjectData(res.data);
    }
}
exports.FungibleStakedSui = FungibleStakedSui;
FungibleStakedSui.$typeName = `${index_1.PKG_V17}::staking_pool::FungibleStakedSui`;
FungibleStakedSui.$numTypeParams = 0;
FungibleStakedSui.$isPhantom = [];
/* ============================== FungibleStakedSuiData =============================== */
function isFungibleStakedSuiData(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::staking_pool::FungibleStakedSuiData`; }
class FungibleStakedSuiData {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FungibleStakedSuiData.$typeName;
        this.$isPhantom = FungibleStakedSuiData.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FungibleStakedSuiData.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.totalSupply = fields.totalSupply;
        ;
        this.principal = fields.principal;
    }
    static reified() { return { typeName: FungibleStakedSuiData.$typeName, fullTypeName: (0, util_1.composeSuiType)(FungibleStakedSuiData.$typeName, ...[]), typeArgs: [], isPhantom: FungibleStakedSuiData.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FungibleStakedSuiData.fromFields(fields), fromFieldsWithTypes: (item) => FungibleStakedSuiData.fromFieldsWithTypes(item), fromBcs: (data) => FungibleStakedSuiData.fromBcs(data), bcs: FungibleStakedSuiData.bcs, fromJSONField: (field) => FungibleStakedSuiData.fromJSONField(field), fromJSON: (json) => FungibleStakedSuiData.fromJSON(json), fromSuiParsedData: (content) => FungibleStakedSuiData.fromSuiParsedData(content), fromSuiObjectData: (content) => FungibleStakedSuiData.fromSuiObjectData(content), fetch: async (client, id) => FungibleStakedSuiData.fetch(client, id), new: (fields) => { return new FungibleStakedSuiData([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FungibleStakedSuiData.reified(); }
    static phantom() { return (0, reified_1.phantom)(FungibleStakedSuiData.reified()); }
    static get p() { return FungibleStakedSuiData.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FungibleStakedSuiData", {
            id: structs_4.UID.bcs, total_supply: bcs_1.bcs.u64(), principal: structs_3.Balance.bcs
        });
    }
    ;
    static fromFields(fields) { return FungibleStakedSuiData.reified().new({ id: (0, reified_1.decodeFromFields)(structs_4.UID.reified(), fields.id), totalSupply: (0, reified_1.decodeFromFields)("u64", fields.total_supply), principal: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(reified.phantom(structs_5.SUI.reified())), fields.principal) }); }
    static fromFieldsWithTypes(item) {
        if (!isFungibleStakedSuiData(item.type)) {
            throw new Error("not a FungibleStakedSuiData type");
        }
        return FungibleStakedSuiData.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.UID.reified(), item.fields.id), totalSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_supply), principal: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(reified.phantom(structs_5.SUI.reified())), item.fields.principal) });
    }
    static fromBcs(data) { return FungibleStakedSuiData.fromFields(FungibleStakedSuiData.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, totalSupply: this.totalSupply.toString(), principal: this.principal.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FungibleStakedSuiData.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_4.UID.reified(), field.id), totalSupply: (0, reified_1.decodeFromJSONField)("u64", field.totalSupply), principal: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(reified.phantom(structs_5.SUI.reified())), field.principal) }); }
    static fromJSON(json) {
        if (json.$typeName !== FungibleStakedSuiData.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FungibleStakedSuiData.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFungibleStakedSuiData(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FungibleStakedSuiData object`);
    } return FungibleStakedSuiData.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFungibleStakedSuiData(data.bcs.type)) {
                throw new Error(`object at is not a FungibleStakedSuiData object`);
            }
            return FungibleStakedSuiData.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FungibleStakedSuiData.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FungibleStakedSuiData object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFungibleStakedSuiData(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FungibleStakedSuiData object`);
        }
        return FungibleStakedSuiData.fromSuiObjectData(res.data);
    }
}
exports.FungibleStakedSuiData = FungibleStakedSuiData;
FungibleStakedSuiData.$typeName = `${index_1.PKG_V17}::staking_pool::FungibleStakedSuiData`;
FungibleStakedSuiData.$numTypeParams = 0;
FungibleStakedSuiData.$isPhantom = [];
/* ============================== FungibleStakedSuiDataKey =============================== */
function isFungibleStakedSuiDataKey(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::staking_pool::FungibleStakedSuiDataKey`; }
class FungibleStakedSuiDataKey {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FungibleStakedSuiDataKey.$typeName;
        this.$isPhantom = FungibleStakedSuiDataKey.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FungibleStakedSuiDataKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: FungibleStakedSuiDataKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(FungibleStakedSuiDataKey.$typeName, ...[]), typeArgs: [], isPhantom: FungibleStakedSuiDataKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => FungibleStakedSuiDataKey.fromFields(fields), fromFieldsWithTypes: (item) => FungibleStakedSuiDataKey.fromFieldsWithTypes(item), fromBcs: (data) => FungibleStakedSuiDataKey.fromBcs(data), bcs: FungibleStakedSuiDataKey.bcs, fromJSONField: (field) => FungibleStakedSuiDataKey.fromJSONField(field), fromJSON: (json) => FungibleStakedSuiDataKey.fromJSON(json), fromSuiParsedData: (content) => FungibleStakedSuiDataKey.fromSuiParsedData(content), fromSuiObjectData: (content) => FungibleStakedSuiDataKey.fromSuiObjectData(content), fetch: async (client, id) => FungibleStakedSuiDataKey.fetch(client, id), new: (fields) => { return new FungibleStakedSuiDataKey([], fields); }, kind: "StructClassReified", }; }
    static get r() { return FungibleStakedSuiDataKey.reified(); }
    static phantom() { return (0, reified_1.phantom)(FungibleStakedSuiDataKey.reified()); }
    static get p() { return FungibleStakedSuiDataKey.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("FungibleStakedSuiDataKey", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return FungibleStakedSuiDataKey.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isFungibleStakedSuiDataKey(item.type)) {
            throw new Error("not a FungibleStakedSuiDataKey type");
        }
        return FungibleStakedSuiDataKey.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return FungibleStakedSuiDataKey.fromFields(FungibleStakedSuiDataKey.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return FungibleStakedSuiDataKey.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== FungibleStakedSuiDataKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return FungibleStakedSuiDataKey.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFungibleStakedSuiDataKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FungibleStakedSuiDataKey object`);
    } return FungibleStakedSuiDataKey.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFungibleStakedSuiDataKey(data.bcs.type)) {
                throw new Error(`object at is not a FungibleStakedSuiDataKey object`);
            }
            return FungibleStakedSuiDataKey.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FungibleStakedSuiDataKey.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FungibleStakedSuiDataKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFungibleStakedSuiDataKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FungibleStakedSuiDataKey object`);
        }
        return FungibleStakedSuiDataKey.fromSuiObjectData(res.data);
    }
}
exports.FungibleStakedSuiDataKey = FungibleStakedSuiDataKey;
FungibleStakedSuiDataKey.$typeName = `${index_1.PKG_V17}::staking_pool::FungibleStakedSuiDataKey`;
FungibleStakedSuiDataKey.$numTypeParams = 0;
FungibleStakedSuiDataKey.$isPhantom = [];
/* ============================== PoolTokenExchangeRate =============================== */
function isPoolTokenExchangeRate(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::staking_pool::PoolTokenExchangeRate`; }
class PoolTokenExchangeRate {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PoolTokenExchangeRate.$typeName;
        this.$isPhantom = PoolTokenExchangeRate.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolTokenExchangeRate.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.suiAmount = fields.suiAmount;
        ;
        this.poolTokenAmount = fields.poolTokenAmount;
    }
    static reified() { return { typeName: PoolTokenExchangeRate.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolTokenExchangeRate.$typeName, ...[]), typeArgs: [], isPhantom: PoolTokenExchangeRate.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PoolTokenExchangeRate.fromFields(fields), fromFieldsWithTypes: (item) => PoolTokenExchangeRate.fromFieldsWithTypes(item), fromBcs: (data) => PoolTokenExchangeRate.fromBcs(data), bcs: PoolTokenExchangeRate.bcs, fromJSONField: (field) => PoolTokenExchangeRate.fromJSONField(field), fromJSON: (json) => PoolTokenExchangeRate.fromJSON(json), fromSuiParsedData: (content) => PoolTokenExchangeRate.fromSuiParsedData(content), fromSuiObjectData: (content) => PoolTokenExchangeRate.fromSuiObjectData(content), fetch: async (client, id) => PoolTokenExchangeRate.fetch(client, id), new: (fields) => { return new PoolTokenExchangeRate([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolTokenExchangeRate(data.bcs.type)) {
                throw new Error(`object at is not a PoolTokenExchangeRate object`);
            }
            return PoolTokenExchangeRate.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PoolTokenExchangeRate.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolTokenExchangeRate object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolTokenExchangeRate(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolTokenExchangeRate object`);
        }
        return PoolTokenExchangeRate.fromSuiObjectData(res.data);
    }
}
exports.PoolTokenExchangeRate = PoolTokenExchangeRate;
PoolTokenExchangeRate.$typeName = `${index_1.PKG_V17}::staking_pool::PoolTokenExchangeRate`;
PoolTokenExchangeRate.$numTypeParams = 0;
PoolTokenExchangeRate.$isPhantom = [];
/* ============================== StakedSui =============================== */
function isStakedSui(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::staking_pool::StakedSui`; }
class StakedSui {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StakedSui.$typeName;
        this.$isPhantom = StakedSui.$isPhantom;
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
    static reified() { return { typeName: StakedSui.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakedSui.$typeName, ...[]), typeArgs: [], isPhantom: StakedSui.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakedSui.fromFields(fields), fromFieldsWithTypes: (item) => StakedSui.fromFieldsWithTypes(item), fromBcs: (data) => StakedSui.fromBcs(data), bcs: StakedSui.bcs, fromJSONField: (field) => StakedSui.fromJSONField(field), fromJSON: (json) => StakedSui.fromJSON(json), fromSuiParsedData: (content) => StakedSui.fromSuiParsedData(content), fromSuiObjectData: (content) => StakedSui.fromSuiObjectData(content), fetch: async (client, id) => StakedSui.fetch(client, id), new: (fields) => { return new StakedSui([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakedSui(data.bcs.type)) {
                throw new Error(`object at is not a StakedSui object`);
            }
            return StakedSui.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakedSui.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakedSui object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakedSui(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakedSui object`);
        }
        return StakedSui.fromSuiObjectData(res.data);
    }
}
exports.StakedSui = StakedSui;
StakedSui.$typeName = `${index_1.PKG_V17}::staking_pool::StakedSui`;
StakedSui.$numTypeParams = 0;
StakedSui.$isPhantom = [];
/* ============================== StakingPool =============================== */
function isStakingPool(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::staking_pool::StakingPool`; }
class StakingPool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StakingPool.$typeName;
        this.$isPhantom = StakingPool.$isPhantom;
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
    static reified() { return { typeName: StakingPool.$typeName, fullTypeName: (0, util_1.composeSuiType)(StakingPool.$typeName, ...[]), typeArgs: [], isPhantom: StakingPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StakingPool.fromFields(fields), fromFieldsWithTypes: (item) => StakingPool.fromFieldsWithTypes(item), fromBcs: (data) => StakingPool.fromBcs(data), bcs: StakingPool.bcs, fromJSONField: (field) => StakingPool.fromJSONField(field), fromJSON: (json) => StakingPool.fromJSON(json), fromSuiParsedData: (content) => StakingPool.fromSuiParsedData(content), fromSuiObjectData: (content) => StakingPool.fromSuiObjectData(content), fetch: async (client, id) => StakingPool.fetch(client, id), new: (fields) => { return new StakingPool([], fields); }, kind: "StructClassReified", }; }
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
            id: this.id, activationEpoch: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<u64>`, this.activationEpoch), deactivationEpoch: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<u64>`, this.deactivationEpoch), suiBalance: this.suiBalance.toString(), rewardsPool: this.rewardsPool.toJSONField(), poolTokenBalance: this.poolTokenBalance.toString(), exchangeRates: this.exchangeRates.toJSONField(), pendingStake: this.pendingStake.toString(), pendingTotalSuiWithdraw: this.pendingTotalSuiWithdraw.toString(), pendingPoolTokenWithdraw: this.pendingPoolTokenWithdraw.toString(), extraFields: this.extraFields.toJSONField(),
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStakingPool(data.bcs.type)) {
                throw new Error(`object at is not a StakingPool object`);
            }
            return StakingPool.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StakingPool.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StakingPool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStakingPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakingPool object`);
        }
        return StakingPool.fromSuiObjectData(res.data);
    }
}
exports.StakingPool = StakingPool;
StakingPool.$typeName = `${index_1.PKG_V17}::staking_pool::StakingPool`;
StakingPool.$numTypeParams = 0;
StakingPool.$isPhantom = [];
