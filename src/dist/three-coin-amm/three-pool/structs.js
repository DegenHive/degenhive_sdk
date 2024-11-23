"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedConfigUpdated = exports.TokensSwapped = exports.StableConfigUpdated = exports.PoolRegistryItem = exports.PoolRegistry = exports.PoolFeeUpdated = exports.PoolFeeInfo = exports.NewPoolCreated = exports.LpBurntForever = exports.LiquidityRemovedFromPool = exports.LiquidityPool = exports.LiquidityAddedToPool = exports.LP = exports.InternalPricesUpdated = exports.Flashloan = exports.FlashLoanExecuted = exports.CurvedConfigUpdatedParams = exports.CurvedConfigUpdatedAmp = exports.CumPriceUpdatedEvent = void 0;
exports.isCumPriceUpdatedEvent = isCumPriceUpdatedEvent;
exports.isCurvedConfigUpdatedAmp = isCurvedConfigUpdatedAmp;
exports.isCurvedConfigUpdatedParams = isCurvedConfigUpdatedParams;
exports.isFlashLoanExecuted = isFlashLoanExecuted;
exports.isFlashloan = isFlashloan;
exports.isInternalPricesUpdated = isInternalPricesUpdated;
exports.isLP = isLP;
exports.isLiquidityAddedToPool = isLiquidityAddedToPool;
exports.isLiquidityPool = isLiquidityPool;
exports.isLiquidityRemovedFromPool = isLiquidityRemovedFromPool;
exports.isLpBurntForever = isLpBurntForever;
exports.isNewPoolCreated = isNewPoolCreated;
exports.isPoolFeeInfo = isPoolFeeInfo;
exports.isPoolFeeUpdated = isPoolFeeUpdated;
exports.isPoolRegistry = isPoolRegistry;
exports.isPoolRegistryItem = isPoolRegistryItem;
exports.isStableConfigUpdated = isStableConfigUpdated;
exports.isTokensSwapped = isTokensSwapped;
exports.isWeightedConfigUpdated = isWeightedConfigUpdated;
const reified = require("../../_framework/reified");
const structs_1 = require("../../source/0x1/option/structs");
const structs_2 = require("../../source/0x1/type-name/structs");
const structs_3 = require("../../source/0x2/balance/structs");
const structs_4 = require("../../source/0x2/linked-table/structs");
const structs_5 = require("../../source/0x2/object/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const structs_6 = require("../../pool-math/curved-math/structs");
const structs_7 = require("../../pool-math/stable-math/structs");
const structs_8 = require("../../pool-math/weighted-math/structs");
const structs_9 = require("../../yield-flow/yield-flow/structs");
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const PUBLISHED_AT = __1.threecoin.PUBLISHED_AT;
const PKG_V1 = __1.threecoin.PKG_V1;
/* ============================== CumPriceUpdatedEvent =============================== */
function isCumPriceUpdatedEvent(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::CumPriceUpdatedEvent` + '<'); }
class CumPriceUpdatedEvent {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = CumPriceUpdatedEvent.$typeName;
        this.$isPhantom = CumPriceUpdatedEvent.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(CumPriceUpdatedEvent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.cumulativeXPriceY = fields.cumulativeXPriceY;
        ;
        this.cumulativeYPriceX = fields.cumulativeYPriceX;
        ;
        this.cumulativeXPriceZ = fields.cumulativeXPriceZ;
        ;
        this.cumulativeZPriceX = fields.cumulativeZPriceX;
        ;
        this.cumulativeYPriceZ = fields.cumulativeYPriceZ;
        ;
        this.cumulativeZPriceY = fields.cumulativeZPriceY;
        ;
        this.timestamp = fields.timestamp;
    }
    static reified(X, Y, Z, Curve) { return { typeName: CumPriceUpdatedEvent.$typeName, fullTypeName: (0, util_1.composeSuiType)(CumPriceUpdatedEvent.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: CumPriceUpdatedEvent.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => CumPriceUpdatedEvent.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => CumPriceUpdatedEvent.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => CumPriceUpdatedEvent.fromBcs([X, Y, Z, Curve], data), bcs: CumPriceUpdatedEvent.bcs, fromJSONField: (field) => CumPriceUpdatedEvent.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => CumPriceUpdatedEvent.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => CumPriceUpdatedEvent.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => CumPriceUpdatedEvent.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => CumPriceUpdatedEvent.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new CumPriceUpdatedEvent([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return CumPriceUpdatedEvent.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(CumPriceUpdatedEvent.reified(X, Y, Z, Curve)); }
    static get p() { return CumPriceUpdatedEvent.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("CumPriceUpdatedEvent", {
            id: structs_5.ID.bcs, cumulative_x_price_y: bcs_1.bcs.u256(), cumulative_y_price_x: bcs_1.bcs.u256(), cumulative_x_price_z: bcs_1.bcs.u256(), cumulative_z_price_x: bcs_1.bcs.u256(), cumulative_y_price_z: bcs_1.bcs.u256(), cumulative_z_price_y: bcs_1.bcs.u256(), timestamp: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return CumPriceUpdatedEvent.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), cumulativeXPriceY: (0, reified_1.decodeFromFields)("u256", fields.cumulative_x_price_y), cumulativeYPriceX: (0, reified_1.decodeFromFields)("u256", fields.cumulative_y_price_x), cumulativeXPriceZ: (0, reified_1.decodeFromFields)("u256", fields.cumulative_x_price_z), cumulativeZPriceX: (0, reified_1.decodeFromFields)("u256", fields.cumulative_z_price_x), cumulativeYPriceZ: (0, reified_1.decodeFromFields)("u256", fields.cumulative_y_price_z), cumulativeZPriceY: (0, reified_1.decodeFromFields)("u256", fields.cumulative_z_price_y), timestamp: (0, reified_1.decodeFromFields)("u64", fields.timestamp) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isCumPriceUpdatedEvent(item.type)) {
            throw new Error("not a CumPriceUpdatedEvent type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return CumPriceUpdatedEvent.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), cumulativeXPriceY: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_x_price_y), cumulativeYPriceX: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_y_price_x), cumulativeXPriceZ: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_x_price_z), cumulativeZPriceX: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_z_price_x), cumulativeYPriceZ: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_y_price_z), cumulativeZPriceY: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_z_price_y), timestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp) });
    }
    static fromBcs(typeArgs, data) { return CumPriceUpdatedEvent.fromFields(typeArgs, CumPriceUpdatedEvent.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, cumulativeXPriceY: this.cumulativeXPriceY.toString(), cumulativeYPriceX: this.cumulativeYPriceX.toString(), cumulativeXPriceZ: this.cumulativeXPriceZ.toString(), cumulativeZPriceX: this.cumulativeZPriceX.toString(), cumulativeYPriceZ: this.cumulativeYPriceZ.toString(), cumulativeZPriceY: this.cumulativeZPriceY.toString(), timestamp: this.timestamp.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return CumPriceUpdatedEvent.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), cumulativeXPriceY: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeXPriceY), cumulativeYPriceX: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeYPriceX), cumulativeXPriceZ: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeXPriceZ), cumulativeZPriceX: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeZPriceX), cumulativeYPriceZ: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeYPriceZ), cumulativeZPriceY: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeZPriceY), timestamp: (0, reified_1.decodeFromJSONField)("u64", field.timestamp) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== CumPriceUpdatedEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(CumPriceUpdatedEvent.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return CumPriceUpdatedEvent.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCumPriceUpdatedEvent(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a CumPriceUpdatedEvent object`);
    } return CumPriceUpdatedEvent.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCumPriceUpdatedEvent(data.bcs.type)) {
                throw new Error(`object at is not a CumPriceUpdatedEvent object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return CumPriceUpdatedEvent.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CumPriceUpdatedEvent.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching CumPriceUpdatedEvent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCumPriceUpdatedEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CumPriceUpdatedEvent object`);
        }
        return CumPriceUpdatedEvent.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.CumPriceUpdatedEvent = CumPriceUpdatedEvent;
CumPriceUpdatedEvent.$typeName = `${PKG_V1}::three_pool::CumPriceUpdatedEvent`;
CumPriceUpdatedEvent.$numTypeParams = 4;
CumPriceUpdatedEvent.$isPhantom = [true, true, true, true,];
/* ============================== CurvedConfigUpdatedAmp =============================== */
function isCurvedConfigUpdatedAmp(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::CurvedConfigUpdatedAmp` + '<'); }
class CurvedConfigUpdatedAmp {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = CurvedConfigUpdatedAmp.$typeName;
        this.$isPhantom = CurvedConfigUpdatedAmp.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(CurvedConfigUpdatedAmp.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.initAGammaTime = fields.initAGammaTime;
        ;
        this.nextAmp = fields.nextAmp;
        ;
        this.nextGamma = fields.nextGamma;
        ;
        this.futureAGammaTime = fields.futureAGammaTime;
    }
    static reified(X, Y, Z, Curve) { return { typeName: CurvedConfigUpdatedAmp.$typeName, fullTypeName: (0, util_1.composeSuiType)(CurvedConfigUpdatedAmp.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: CurvedConfigUpdatedAmp.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => CurvedConfigUpdatedAmp.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => CurvedConfigUpdatedAmp.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => CurvedConfigUpdatedAmp.fromBcs([X, Y, Z, Curve], data), bcs: CurvedConfigUpdatedAmp.bcs, fromJSONField: (field) => CurvedConfigUpdatedAmp.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => CurvedConfigUpdatedAmp.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => CurvedConfigUpdatedAmp.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => CurvedConfigUpdatedAmp.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => CurvedConfigUpdatedAmp.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new CurvedConfigUpdatedAmp([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return CurvedConfigUpdatedAmp.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(CurvedConfigUpdatedAmp.reified(X, Y, Z, Curve)); }
    static get p() { return CurvedConfigUpdatedAmp.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("CurvedConfigUpdatedAmp", {
            id: structs_5.ID.bcs, init_A_gamma_time: bcs_1.bcs.u64(), next_amp: bcs_1.bcs.u64(), next_gamma: bcs_1.bcs.u256(), future_A_gamma_time: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return CurvedConfigUpdatedAmp.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), initAGammaTime: (0, reified_1.decodeFromFields)("u64", fields.init_A_gamma_time), nextAmp: (0, reified_1.decodeFromFields)("u64", fields.next_amp), nextGamma: (0, reified_1.decodeFromFields)("u256", fields.next_gamma), futureAGammaTime: (0, reified_1.decodeFromFields)("u64", fields.future_A_gamma_time) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isCurvedConfigUpdatedAmp(item.type)) {
            throw new Error("not a CurvedConfigUpdatedAmp type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return CurvedConfigUpdatedAmp.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), initAGammaTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_A_gamma_time), nextAmp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_amp), nextGamma: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.next_gamma), futureAGammaTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.future_A_gamma_time) });
    }
    static fromBcs(typeArgs, data) { return CurvedConfigUpdatedAmp.fromFields(typeArgs, CurvedConfigUpdatedAmp.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, initAGammaTime: this.initAGammaTime.toString(), nextAmp: this.nextAmp.toString(), nextGamma: this.nextGamma.toString(), futureAGammaTime: this.futureAGammaTime.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return CurvedConfigUpdatedAmp.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), initAGammaTime: (0, reified_1.decodeFromJSONField)("u64", field.initAGammaTime), nextAmp: (0, reified_1.decodeFromJSONField)("u64", field.nextAmp), nextGamma: (0, reified_1.decodeFromJSONField)("u256", field.nextGamma), futureAGammaTime: (0, reified_1.decodeFromJSONField)("u64", field.futureAGammaTime) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== CurvedConfigUpdatedAmp.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(CurvedConfigUpdatedAmp.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return CurvedConfigUpdatedAmp.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurvedConfigUpdatedAmp(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a CurvedConfigUpdatedAmp object`);
    } return CurvedConfigUpdatedAmp.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCurvedConfigUpdatedAmp(data.bcs.type)) {
                throw new Error(`object at is not a CurvedConfigUpdatedAmp object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return CurvedConfigUpdatedAmp.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CurvedConfigUpdatedAmp.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching CurvedConfigUpdatedAmp object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurvedConfigUpdatedAmp(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CurvedConfigUpdatedAmp object`);
        }
        return CurvedConfigUpdatedAmp.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.CurvedConfigUpdatedAmp = CurvedConfigUpdatedAmp;
CurvedConfigUpdatedAmp.$typeName = `${PKG_V1}::three_pool::CurvedConfigUpdatedAmp`;
CurvedConfigUpdatedAmp.$numTypeParams = 4;
CurvedConfigUpdatedAmp.$isPhantom = [true, true, true, true,];
/* ============================== CurvedConfigUpdatedParams =============================== */
function isCurvedConfigUpdatedParams(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::CurvedConfigUpdatedParams` + '<'); }
class CurvedConfigUpdatedParams {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = CurvedConfigUpdatedParams.$typeName;
        this.$isPhantom = CurvedConfigUpdatedParams.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(CurvedConfigUpdatedParams.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.newMidFee = fields.newMidFee;
        ;
        this.newOutFee = fields.newOutFee;
        ;
        this.newFeeGamma = fields.newFeeGamma;
        ;
        this.newMaHalfTime = fields.newMaHalfTime;
        ;
        this.newAllowedExtraProfit = fields.newAllowedExtraProfit;
        ;
        this.newAdjustmentStep = fields.newAdjustmentStep;
    }
    static reified(X, Y, Z, Curve) { return { typeName: CurvedConfigUpdatedParams.$typeName, fullTypeName: (0, util_1.composeSuiType)(CurvedConfigUpdatedParams.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: CurvedConfigUpdatedParams.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => CurvedConfigUpdatedParams.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => CurvedConfigUpdatedParams.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => CurvedConfigUpdatedParams.fromBcs([X, Y, Z, Curve], data), bcs: CurvedConfigUpdatedParams.bcs, fromJSONField: (field) => CurvedConfigUpdatedParams.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => CurvedConfigUpdatedParams.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => CurvedConfigUpdatedParams.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => CurvedConfigUpdatedParams.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => CurvedConfigUpdatedParams.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new CurvedConfigUpdatedParams([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return CurvedConfigUpdatedParams.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(CurvedConfigUpdatedParams.reified(X, Y, Z, Curve)); }
    static get p() { return CurvedConfigUpdatedParams.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("CurvedConfigUpdatedParams", {
            id: structs_5.ID.bcs, new_mid_fee: bcs_1.bcs.u64(), new_out_fee: bcs_1.bcs.u64(), new_fee_gamma: bcs_1.bcs.u64(), new_ma_half_time: bcs_1.bcs.u64(), new_allowed_extra_profit: bcs_1.bcs.u64(), new_adjustment_step: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return CurvedConfigUpdatedParams.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), newMidFee: (0, reified_1.decodeFromFields)("u64", fields.new_mid_fee), newOutFee: (0, reified_1.decodeFromFields)("u64", fields.new_out_fee), newFeeGamma: (0, reified_1.decodeFromFields)("u64", fields.new_fee_gamma), newMaHalfTime: (0, reified_1.decodeFromFields)("u64", fields.new_ma_half_time), newAllowedExtraProfit: (0, reified_1.decodeFromFields)("u64", fields.new_allowed_extra_profit), newAdjustmentStep: (0, reified_1.decodeFromFields)("u64", fields.new_adjustment_step) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isCurvedConfigUpdatedParams(item.type)) {
            throw new Error("not a CurvedConfigUpdatedParams type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return CurvedConfigUpdatedParams.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), newMidFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_mid_fee), newOutFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_out_fee), newFeeGamma: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_fee_gamma), newMaHalfTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_ma_half_time), newAllowedExtraProfit: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_allowed_extra_profit), newAdjustmentStep: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_adjustment_step) });
    }
    static fromBcs(typeArgs, data) { return CurvedConfigUpdatedParams.fromFields(typeArgs, CurvedConfigUpdatedParams.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, newMidFee: this.newMidFee.toString(), newOutFee: this.newOutFee.toString(), newFeeGamma: this.newFeeGamma.toString(), newMaHalfTime: this.newMaHalfTime.toString(), newAllowedExtraProfit: this.newAllowedExtraProfit.toString(), newAdjustmentStep: this.newAdjustmentStep.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return CurvedConfigUpdatedParams.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), newMidFee: (0, reified_1.decodeFromJSONField)("u64", field.newMidFee), newOutFee: (0, reified_1.decodeFromJSONField)("u64", field.newOutFee), newFeeGamma: (0, reified_1.decodeFromJSONField)("u64", field.newFeeGamma), newMaHalfTime: (0, reified_1.decodeFromJSONField)("u64", field.newMaHalfTime), newAllowedExtraProfit: (0, reified_1.decodeFromJSONField)("u64", field.newAllowedExtraProfit), newAdjustmentStep: (0, reified_1.decodeFromJSONField)("u64", field.newAdjustmentStep) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== CurvedConfigUpdatedParams.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(CurvedConfigUpdatedParams.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return CurvedConfigUpdatedParams.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurvedConfigUpdatedParams(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a CurvedConfigUpdatedParams object`);
    } return CurvedConfigUpdatedParams.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCurvedConfigUpdatedParams(data.bcs.type)) {
                throw new Error(`object at is not a CurvedConfigUpdatedParams object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return CurvedConfigUpdatedParams.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CurvedConfigUpdatedParams.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching CurvedConfigUpdatedParams object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurvedConfigUpdatedParams(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CurvedConfigUpdatedParams object`);
        }
        return CurvedConfigUpdatedParams.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.CurvedConfigUpdatedParams = CurvedConfigUpdatedParams;
CurvedConfigUpdatedParams.$typeName = `${PKG_V1}::three_pool::CurvedConfigUpdatedParams`;
CurvedConfigUpdatedParams.$numTypeParams = 4;
CurvedConfigUpdatedParams.$isPhantom = [true, true, true, true,];
/* ============================== FlashLoanExecuted =============================== */
function isFlashLoanExecuted(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::FlashLoanExecuted` + '<'); }
class FlashLoanExecuted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = FlashLoanExecuted.$typeName;
        this.$isPhantom = FlashLoanExecuted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(FlashLoanExecuted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.xLoan = fields.xLoan;
        ;
        this.yLoan = fields.yLoan;
        ;
        this.zLoan = fields.zLoan;
        ;
        this.totalXFee = fields.totalXFee;
        ;
        this.totalYFee = fields.totalYFee;
        ;
        this.totalZFee = fields.totalZFee;
        ;
        this.xHiveFee = fields.xHiveFee;
        ;
        this.yHiveFee = fields.yHiveFee;
        ;
        this.zHiveFee = fields.zHiveFee;
    }
    static reified(X, Y, Z, Curve) { return { typeName: FlashLoanExecuted.$typeName, fullTypeName: (0, util_1.composeSuiType)(FlashLoanExecuted.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: FlashLoanExecuted.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => FlashLoanExecuted.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => FlashLoanExecuted.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => FlashLoanExecuted.fromBcs([X, Y, Z, Curve], data), bcs: FlashLoanExecuted.bcs, fromJSONField: (field) => FlashLoanExecuted.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => FlashLoanExecuted.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => FlashLoanExecuted.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => FlashLoanExecuted.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => FlashLoanExecuted.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new FlashLoanExecuted([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return FlashLoanExecuted.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(FlashLoanExecuted.reified(X, Y, Z, Curve)); }
    static get p() { return FlashLoanExecuted.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("FlashLoanExecuted", {
            id: structs_5.ID.bcs, x_loan: bcs_1.bcs.u64(), y_loan: bcs_1.bcs.u64(), z_loan: bcs_1.bcs.u64(), total_x_fee: bcs_1.bcs.u64(), total_y_fee: bcs_1.bcs.u64(), total_z_fee: bcs_1.bcs.u64(), x_hive_fee: bcs_1.bcs.u64(), y_hive_fee: bcs_1.bcs.u64(), z_hive_fee: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return FlashLoanExecuted.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), xLoan: (0, reified_1.decodeFromFields)("u64", fields.x_loan), yLoan: (0, reified_1.decodeFromFields)("u64", fields.y_loan), zLoan: (0, reified_1.decodeFromFields)("u64", fields.z_loan), totalXFee: (0, reified_1.decodeFromFields)("u64", fields.total_x_fee), totalYFee: (0, reified_1.decodeFromFields)("u64", fields.total_y_fee), totalZFee: (0, reified_1.decodeFromFields)("u64", fields.total_z_fee), xHiveFee: (0, reified_1.decodeFromFields)("u64", fields.x_hive_fee), yHiveFee: (0, reified_1.decodeFromFields)("u64", fields.y_hive_fee), zHiveFee: (0, reified_1.decodeFromFields)("u64", fields.z_hive_fee) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isFlashLoanExecuted(item.type)) {
            throw new Error("not a FlashLoanExecuted type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return FlashLoanExecuted.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), xLoan: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.x_loan), yLoan: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.y_loan), zLoan: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.z_loan), totalXFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_x_fee), totalYFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_y_fee), totalZFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_z_fee), xHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.x_hive_fee), yHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.y_hive_fee), zHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.z_hive_fee) });
    }
    static fromBcs(typeArgs, data) { return FlashLoanExecuted.fromFields(typeArgs, FlashLoanExecuted.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, xLoan: this.xLoan.toString(), yLoan: this.yLoan.toString(), zLoan: this.zLoan.toString(), totalXFee: this.totalXFee.toString(), totalYFee: this.totalYFee.toString(), totalZFee: this.totalZFee.toString(), xHiveFee: this.xHiveFee.toString(), yHiveFee: this.yHiveFee.toString(), zHiveFee: this.zHiveFee.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return FlashLoanExecuted.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), xLoan: (0, reified_1.decodeFromJSONField)("u64", field.xLoan), yLoan: (0, reified_1.decodeFromJSONField)("u64", field.yLoan), zLoan: (0, reified_1.decodeFromJSONField)("u64", field.zLoan), totalXFee: (0, reified_1.decodeFromJSONField)("u64", field.totalXFee), totalYFee: (0, reified_1.decodeFromJSONField)("u64", field.totalYFee), totalZFee: (0, reified_1.decodeFromJSONField)("u64", field.totalZFee), xHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.xHiveFee), yHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.yHiveFee), zHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.zHiveFee) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== FlashLoanExecuted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(FlashLoanExecuted.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return FlashLoanExecuted.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFlashLoanExecuted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a FlashLoanExecuted object`);
    } return FlashLoanExecuted.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFlashLoanExecuted(data.bcs.type)) {
                throw new Error(`object at is not a FlashLoanExecuted object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return FlashLoanExecuted.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return FlashLoanExecuted.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching FlashLoanExecuted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFlashLoanExecuted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a FlashLoanExecuted object`);
        }
        return FlashLoanExecuted.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.FlashLoanExecuted = FlashLoanExecuted;
FlashLoanExecuted.$typeName = `${PKG_V1}::three_pool::FlashLoanExecuted`;
FlashLoanExecuted.$numTypeParams = 4;
FlashLoanExecuted.$isPhantom = [true, true, true, true,];
/* ============================== Flashloan =============================== */
function isFlashloan(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::Flashloan` + '<'); }
class Flashloan {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Flashloan.$typeName;
        this.$isPhantom = Flashloan.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Flashloan.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.xLoan = fields.xLoan;
        ;
        this.yLoan = fields.yLoan;
        ;
        this.zLoan = fields.zLoan;
    }
    static reified(X, Y, Z, Curve) { return { typeName: Flashloan.$typeName, fullTypeName: (0, util_1.composeSuiType)(Flashloan.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: Flashloan.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => Flashloan.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => Flashloan.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => Flashloan.fromBcs([X, Y, Z, Curve], data), bcs: Flashloan.bcs, fromJSONField: (field) => Flashloan.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => Flashloan.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => Flashloan.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => Flashloan.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => Flashloan.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new Flashloan([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Flashloan.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(Flashloan.reified(X, Y, Z, Curve)); }
    static get p() { return Flashloan.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("Flashloan", {
            x_loan: bcs_1.bcs.u64(), y_loan: bcs_1.bcs.u64(), z_loan: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return Flashloan.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ xLoan: (0, reified_1.decodeFromFields)("u64", fields.x_loan), yLoan: (0, reified_1.decodeFromFields)("u64", fields.y_loan), zLoan: (0, reified_1.decodeFromFields)("u64", fields.z_loan) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isFlashloan(item.type)) {
            throw new Error("not a Flashloan type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return Flashloan.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ xLoan: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.x_loan), yLoan: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.y_loan), zLoan: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.z_loan) });
    }
    static fromBcs(typeArgs, data) { return Flashloan.fromFields(typeArgs, Flashloan.bcs.parse(data)); }
    toJSONField() {
        return {
            xLoan: this.xLoan.toString(), yLoan: this.yLoan.toString(), zLoan: this.zLoan.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return Flashloan.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ xLoan: (0, reified_1.decodeFromJSONField)("u64", field.xLoan), yLoan: (0, reified_1.decodeFromJSONField)("u64", field.yLoan), zLoan: (0, reified_1.decodeFromJSONField)("u64", field.zLoan) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== Flashloan.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Flashloan.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return Flashloan.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isFlashloan(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Flashloan object`);
    } return Flashloan.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFlashloan(data.bcs.type)) {
                throw new Error(`object at is not a Flashloan object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return Flashloan.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Flashloan.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Flashloan object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isFlashloan(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Flashloan object`);
        }
        return Flashloan.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.Flashloan = Flashloan;
Flashloan.$typeName = `${PKG_V1}::three_pool::Flashloan`;
Flashloan.$numTypeParams = 4;
Flashloan.$isPhantom = [true, true, true, true,];
/* ============================== InternalPricesUpdated =============================== */
function isInternalPricesUpdated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::InternalPricesUpdated` + '<'); }
class InternalPricesUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = InternalPricesUpdated.$typeName;
        this.$isPhantom = InternalPricesUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(InternalPricesUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.priceScale = fields.priceScale;
        ;
        this.oraclePrices = fields.oraclePrices;
        ;
        this.lastPrices = fields.lastPrices;
        ;
        this.lastPricesTimestamp = fields.lastPricesTimestamp;
        ;
        this.virtualPrice = fields.virtualPrice;
        ;
        this.xcpProfit = fields.xcpProfit;
        ;
        this.notAdjusted = fields.notAdjusted;
        ;
        this.d = fields.d;
    }
    static reified(X, Y, Z, Curve) { return { typeName: InternalPricesUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(InternalPricesUpdated.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: InternalPricesUpdated.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => InternalPricesUpdated.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => InternalPricesUpdated.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => InternalPricesUpdated.fromBcs([X, Y, Z, Curve], data), bcs: InternalPricesUpdated.bcs, fromJSONField: (field) => InternalPricesUpdated.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => InternalPricesUpdated.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => InternalPricesUpdated.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => InternalPricesUpdated.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => InternalPricesUpdated.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new InternalPricesUpdated([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return InternalPricesUpdated.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(InternalPricesUpdated.reified(X, Y, Z, Curve)); }
    static get p() { return InternalPricesUpdated.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("InternalPricesUpdated", {
            id: structs_5.ID.bcs, price_scale: bcs_1.bcs.vector(bcs_1.bcs.u256()), oracle_prices: bcs_1.bcs.vector(bcs_1.bcs.u256()), last_prices: bcs_1.bcs.vector(bcs_1.bcs.u256()), last_prices_timestamp: bcs_1.bcs.u64(), virtual_price: bcs_1.bcs.u256(), xcp_profit: bcs_1.bcs.u256(), not_adjusted: bcs_1.bcs.bool(), _D: bcs_1.bcs.u256()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return InternalPricesUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), priceScale: (0, reified_1.decodeFromFields)(reified.vector("u256"), fields.price_scale), oraclePrices: (0, reified_1.decodeFromFields)(reified.vector("u256"), fields.oracle_prices), lastPrices: (0, reified_1.decodeFromFields)(reified.vector("u256"), fields.last_prices), lastPricesTimestamp: (0, reified_1.decodeFromFields)("u64", fields.last_prices_timestamp), virtualPrice: (0, reified_1.decodeFromFields)("u256", fields.virtual_price), xcpProfit: (0, reified_1.decodeFromFields)("u256", fields.xcp_profit), notAdjusted: (0, reified_1.decodeFromFields)("bool", fields.not_adjusted), d: (0, reified_1.decodeFromFields)("u256", fields._D) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isInternalPricesUpdated(item.type)) {
            throw new Error("not a InternalPricesUpdated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return InternalPricesUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), priceScale: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u256"), item.fields.price_scale), oraclePrices: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u256"), item.fields.oracle_prices), lastPrices: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u256"), item.fields.last_prices), lastPricesTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_prices_timestamp), virtualPrice: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.virtual_price), xcpProfit: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.xcp_profit), notAdjusted: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.not_adjusted), d: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields._D) });
    }
    static fromBcs(typeArgs, data) { return InternalPricesUpdated.fromFields(typeArgs, InternalPricesUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, priceScale: (0, reified_1.fieldToJSON)(`vector<u256>`, this.priceScale), oraclePrices: (0, reified_1.fieldToJSON)(`vector<u256>`, this.oraclePrices), lastPrices: (0, reified_1.fieldToJSON)(`vector<u256>`, this.lastPrices), lastPricesTimestamp: this.lastPricesTimestamp.toString(), virtualPrice: this.virtualPrice.toString(), xcpProfit: this.xcpProfit.toString(), notAdjusted: this.notAdjusted, d: this.d.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return InternalPricesUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), priceScale: (0, reified_1.decodeFromJSONField)(reified.vector("u256"), field.priceScale), oraclePrices: (0, reified_1.decodeFromJSONField)(reified.vector("u256"), field.oraclePrices), lastPrices: (0, reified_1.decodeFromJSONField)(reified.vector("u256"), field.lastPrices), lastPricesTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.lastPricesTimestamp), virtualPrice: (0, reified_1.decodeFromJSONField)("u256", field.virtualPrice), xcpProfit: (0, reified_1.decodeFromJSONField)("u256", field.xcpProfit), notAdjusted: (0, reified_1.decodeFromJSONField)("bool", field.notAdjusted), d: (0, reified_1.decodeFromJSONField)("u256", field.d) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== InternalPricesUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(InternalPricesUpdated.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return InternalPricesUpdated.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isInternalPricesUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a InternalPricesUpdated object`);
    } return InternalPricesUpdated.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isInternalPricesUpdated(data.bcs.type)) {
                throw new Error(`object at is not a InternalPricesUpdated object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return InternalPricesUpdated.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return InternalPricesUpdated.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching InternalPricesUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isInternalPricesUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a InternalPricesUpdated object`);
        }
        return InternalPricesUpdated.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.InternalPricesUpdated = InternalPricesUpdated;
InternalPricesUpdated.$typeName = `${PKG_V1}::three_pool::InternalPricesUpdated`;
InternalPricesUpdated.$numTypeParams = 4;
InternalPricesUpdated.$isPhantom = [true, true, true, true,];
/* ============================== LP =============================== */
function isLP(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::LP` + '<'); }
class LP {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LP.$typeName;
        this.$isPhantom = LP.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LP.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified(A, B, C, Curve) { return { typeName: LP.$typeName, fullTypeName: (0, util_1.composeSuiType)(LP.$typeName, ...[(0, reified_1.extractType)(A), (0, reified_1.extractType)(B), (0, reified_1.extractType)(C), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(A), (0, reified_1.extractType)(B), (0, reified_1.extractType)(C), (0, reified_1.extractType)(Curve)], isPhantom: LP.$isPhantom, reifiedTypeArgs: [A, B, C, Curve], fromFields: (fields) => LP.fromFields([A, B, C, Curve], fields), fromFieldsWithTypes: (item) => LP.fromFieldsWithTypes([A, B, C, Curve], item), fromBcs: (data) => LP.fromBcs([A, B, C, Curve], data), bcs: LP.bcs, fromJSONField: (field) => LP.fromJSONField([A, B, C, Curve], field), fromJSON: (json) => LP.fromJSON([A, B, C, Curve], json), fromSuiParsedData: (content) => LP.fromSuiParsedData([A, B, C, Curve], content), fromSuiObjectData: (content) => LP.fromSuiObjectData([A, B, C, Curve], content), fetch: async (client, id) => LP.fetch(client, [A, B, C, Curve], id), new: (fields) => { return new LP([(0, reified_1.extractType)(A), (0, reified_1.extractType)(B), (0, reified_1.extractType)(C), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return LP.reified; }
    static phantom(A, B, C, Curve) { return (0, reified_1.phantom)(LP.reified(A, B, C, Curve)); }
    static get p() { return LP.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("LP", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isLP(item.type)) {
            throw new Error("not a LP type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(typeArgs, data) { return LP.fromFields(typeArgs, LP.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== LP.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(LP.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return LP.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLP(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LP object`);
    } return LP.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLP(data.bcs.type)) {
                throw new Error(`object at is not a LP object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return LP.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LP.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LP object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLP(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LP object`);
        }
        return LP.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.LP = LP;
LP.$typeName = `${PKG_V1}::three_pool::LP`;
LP.$numTypeParams = 4;
LP.$isPhantom = [true, true, true, true,];
/* ============================== LiquidityAddedToPool =============================== */
function isLiquidityAddedToPool(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::LiquidityAddedToPool` + '<'); }
class LiquidityAddedToPool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LiquidityAddedToPool.$typeName;
        this.$isPhantom = LiquidityAddedToPool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LiquidityAddedToPool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.coinXAmount = fields.coinXAmount;
        ;
        this.coinYAmount = fields.coinYAmount;
        ;
        this.coinZAmount = fields.coinZAmount;
        ;
        this.lpMinted = fields.lpMinted;
        ;
        this.totalXFee = fields.totalXFee;
        ;
        this.totalYFee = fields.totalYFee;
        ;
        this.totalZFee = fields.totalZFee;
        ;
        this.xHiveFee = fields.xHiveFee;
        ;
        this.yHiveFee = fields.yHiveFee;
        ;
        this.zHiveFee = fields.zHiveFee;
    }
    static reified(X, Y, Z, Curve) { return { typeName: LiquidityAddedToPool.$typeName, fullTypeName: (0, util_1.composeSuiType)(LiquidityAddedToPool.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: LiquidityAddedToPool.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => LiquidityAddedToPool.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => LiquidityAddedToPool.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => LiquidityAddedToPool.fromBcs([X, Y, Z, Curve], data), bcs: LiquidityAddedToPool.bcs, fromJSONField: (field) => LiquidityAddedToPool.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => LiquidityAddedToPool.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => LiquidityAddedToPool.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => LiquidityAddedToPool.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => LiquidityAddedToPool.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new LiquidityAddedToPool([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return LiquidityAddedToPool.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(LiquidityAddedToPool.reified(X, Y, Z, Curve)); }
    static get p() { return LiquidityAddedToPool.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("LiquidityAddedToPool", {
            id: structs_5.ID.bcs, coin_x_amount: bcs_1.bcs.u64(), coin_y_amount: bcs_1.bcs.u64(), coin_z_amount: bcs_1.bcs.u64(), lp_minted: bcs_1.bcs.u64(), total_x_fee: bcs_1.bcs.u64(), total_y_fee: bcs_1.bcs.u64(), total_z_fee: bcs_1.bcs.u64(), x_hive_fee: bcs_1.bcs.u64(), y_hive_fee: bcs_1.bcs.u64(), z_hive_fee: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return LiquidityAddedToPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), coinXAmount: (0, reified_1.decodeFromFields)("u64", fields.coin_x_amount), coinYAmount: (0, reified_1.decodeFromFields)("u64", fields.coin_y_amount), coinZAmount: (0, reified_1.decodeFromFields)("u64", fields.coin_z_amount), lpMinted: (0, reified_1.decodeFromFields)("u64", fields.lp_minted), totalXFee: (0, reified_1.decodeFromFields)("u64", fields.total_x_fee), totalYFee: (0, reified_1.decodeFromFields)("u64", fields.total_y_fee), totalZFee: (0, reified_1.decodeFromFields)("u64", fields.total_z_fee), xHiveFee: (0, reified_1.decodeFromFields)("u64", fields.x_hive_fee), yHiveFee: (0, reified_1.decodeFromFields)("u64", fields.y_hive_fee), zHiveFee: (0, reified_1.decodeFromFields)("u64", fields.z_hive_fee) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isLiquidityAddedToPool(item.type)) {
            throw new Error("not a LiquidityAddedToPool type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return LiquidityAddedToPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), coinXAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.coin_x_amount), coinYAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.coin_y_amount), coinZAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.coin_z_amount), lpMinted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_minted), totalXFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_x_fee), totalYFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_y_fee), totalZFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_z_fee), xHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.x_hive_fee), yHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.y_hive_fee), zHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.z_hive_fee) });
    }
    static fromBcs(typeArgs, data) { return LiquidityAddedToPool.fromFields(typeArgs, LiquidityAddedToPool.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, coinXAmount: this.coinXAmount.toString(), coinYAmount: this.coinYAmount.toString(), coinZAmount: this.coinZAmount.toString(), lpMinted: this.lpMinted.toString(), totalXFee: this.totalXFee.toString(), totalYFee: this.totalYFee.toString(), totalZFee: this.totalZFee.toString(), xHiveFee: this.xHiveFee.toString(), yHiveFee: this.yHiveFee.toString(), zHiveFee: this.zHiveFee.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return LiquidityAddedToPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), coinXAmount: (0, reified_1.decodeFromJSONField)("u64", field.coinXAmount), coinYAmount: (0, reified_1.decodeFromJSONField)("u64", field.coinYAmount), coinZAmount: (0, reified_1.decodeFromJSONField)("u64", field.coinZAmount), lpMinted: (0, reified_1.decodeFromJSONField)("u64", field.lpMinted), totalXFee: (0, reified_1.decodeFromJSONField)("u64", field.totalXFee), totalYFee: (0, reified_1.decodeFromJSONField)("u64", field.totalYFee), totalZFee: (0, reified_1.decodeFromJSONField)("u64", field.totalZFee), xHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.xHiveFee), yHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.yHiveFee), zHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.zHiveFee) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== LiquidityAddedToPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(LiquidityAddedToPool.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return LiquidityAddedToPool.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLiquidityAddedToPool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LiquidityAddedToPool object`);
    } return LiquidityAddedToPool.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidityAddedToPool(data.bcs.type)) {
                throw new Error(`object at is not a LiquidityAddedToPool object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return LiquidityAddedToPool.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LiquidityAddedToPool.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LiquidityAddedToPool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLiquidityAddedToPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidityAddedToPool object`);
        }
        return LiquidityAddedToPool.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.LiquidityAddedToPool = LiquidityAddedToPool;
LiquidityAddedToPool.$typeName = `${PKG_V1}::three_pool::LiquidityAddedToPool`;
LiquidityAddedToPool.$numTypeParams = 4;
LiquidityAddedToPool.$isPhantom = [true, true, true, true,];
/* ============================== LiquidityPool =============================== */
function isLiquidityPool(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::LiquidityPool` + '<'); }
class LiquidityPool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LiquidityPool.$typeName;
        this.$isPhantom = LiquidityPool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LiquidityPool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.coinXReserve = fields.coinXReserve;
        ;
        this.coinXDecimals = fields.coinXDecimals;
        ;
        this.coinYReserve = fields.coinYReserve;
        ;
        this.coinYDecimals = fields.coinYDecimals;
        ;
        this.coinZReserve = fields.coinZReserve;
        ;
        this.coinZDecimals = fields.coinZDecimals;
        ;
        this.lpSupply = fields.lpSupply;
        ;
        this.totalLpKrafted = fields.totalLpKrafted;
        ;
        this.curvedConfig = fields.curvedConfig;
        ;
        this.stableConfig = fields.stableConfig;
        ;
        this.weightedConfig = fields.weightedConfig;
        ;
        this.collectedFeeX = fields.collectedFeeX;
        ;
        this.collectedFeeY = fields.collectedFeeY;
        ;
        this.collectedFeeZ = fields.collectedFeeZ;
        ;
        this.feeInfo = fields.feeInfo;
        ;
        this.isLocked = fields.isLocked;
        ;
        this.cumulativeXPriceY = fields.cumulativeXPriceY;
        ;
        this.cumulativeYPriceX = fields.cumulativeYPriceX;
        ;
        this.cumulativeXPriceZ = fields.cumulativeXPriceZ;
        ;
        this.cumulativeZPriceX = fields.cumulativeZPriceX;
        ;
        this.cumulativeYPriceZ = fields.cumulativeYPriceZ;
        ;
        this.cumulativeZPriceY = fields.cumulativeZPriceY;
        ;
        this.lastTimestamp = fields.lastTimestamp;
        ;
        this.poolHiveAddr = fields.poolHiveAddr;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified(X, Y, Z, Curve) { return { typeName: LiquidityPool.$typeName, fullTypeName: (0, util_1.composeSuiType)(LiquidityPool.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: LiquidityPool.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => LiquidityPool.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => LiquidityPool.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => LiquidityPool.fromBcs([X, Y, Z, Curve], data), bcs: LiquidityPool.bcs, fromJSONField: (field) => LiquidityPool.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => LiquidityPool.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => LiquidityPool.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => LiquidityPool.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => LiquidityPool.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new LiquidityPool([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return LiquidityPool.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(LiquidityPool.reified(X, Y, Z, Curve)); }
    static get p() { return LiquidityPool.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("LiquidityPool", {
            id: structs_5.UID.bcs, coin_x_reserve: structs_3.Balance.bcs, coin_x_decimals: bcs_1.bcs.u8(), coin_y_reserve: structs_3.Balance.bcs, coin_y_decimals: bcs_1.bcs.u8(), coin_z_reserve: structs_3.Balance.bcs, coin_z_decimals: bcs_1.bcs.u8(), lp_supply: structs_3.Supply.bcs, total_lp_krafted: bcs_1.bcs.u64(), curved_config: structs_1.Option.bcs(structs_6.CurvedPoolConfig.bcs), stable_config: structs_1.Option.bcs(structs_7.StablePoolConfig.bcs), weighted_config: structs_1.Option.bcs(structs_8.WeightedConfig.bcs), collected_fee_x: structs_3.Balance.bcs, collected_fee_y: structs_3.Balance.bcs, collected_fee_z: structs_3.Balance.bcs, fee_info: PoolFeeInfo.bcs, is_locked: bcs_1.bcs.bool(), cumulative_x_price_y: bcs_1.bcs.u256(), cumulative_y_price_x: bcs_1.bcs.u256(), cumulative_x_price_z: bcs_1.bcs.u256(), cumulative_z_price_x: bcs_1.bcs.u256(), cumulative_y_price_z: bcs_1.bcs.u256(), cumulative_z_price_y: bcs_1.bcs.u256(), last_timestamp: bcs_1.bcs.u64(), pool_hive_addr: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return LiquidityPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), coinXReserve: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArgs[0]), fields.coin_x_reserve), coinXDecimals: (0, reified_1.decodeFromFields)("u8", fields.coin_x_decimals), coinYReserve: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArgs[1]), fields.coin_y_reserve), coinYDecimals: (0, reified_1.decodeFromFields)("u8", fields.coin_y_decimals), coinZReserve: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArgs[2]), fields.coin_z_reserve), coinZDecimals: (0, reified_1.decodeFromFields)("u8", fields.coin_z_decimals), lpSupply: (0, reified_1.decodeFromFields)(structs_3.Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]))), fields.lp_supply), totalLpKrafted: (0, reified_1.decodeFromFields)("u64", fields.total_lp_krafted), curvedConfig: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_6.CurvedPoolConfig.reified()), fields.curved_config), stableConfig: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_7.StablePoolConfig.reified()), fields.stable_config), weightedConfig: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_8.WeightedConfig.reified()), fields.weighted_config), collectedFeeX: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArgs[0]), fields.collected_fee_x), collectedFeeY: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArgs[1]), fields.collected_fee_y), collectedFeeZ: (0, reified_1.decodeFromFields)(structs_3.Balance.reified(typeArgs[2]), fields.collected_fee_z), feeInfo: (0, reified_1.decodeFromFields)(PoolFeeInfo.reified(), fields.fee_info), isLocked: (0, reified_1.decodeFromFields)("bool", fields.is_locked), cumulativeXPriceY: (0, reified_1.decodeFromFields)("u256", fields.cumulative_x_price_y), cumulativeYPriceX: (0, reified_1.decodeFromFields)("u256", fields.cumulative_y_price_x), cumulativeXPriceZ: (0, reified_1.decodeFromFields)("u256", fields.cumulative_x_price_z), cumulativeZPriceX: (0, reified_1.decodeFromFields)("u256", fields.cumulative_z_price_x), cumulativeYPriceZ: (0, reified_1.decodeFromFields)("u256", fields.cumulative_y_price_z), cumulativeZPriceY: (0, reified_1.decodeFromFields)("u256", fields.cumulative_z_price_y), lastTimestamp: (0, reified_1.decodeFromFields)("u64", fields.last_timestamp), poolHiveAddr: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.pool_hive_addr), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isLiquidityPool(item.type)) {
            throw new Error("not a LiquidityPool type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return LiquidityPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), coinXReserve: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArgs[0]), item.fields.coin_x_reserve), coinXDecimals: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.coin_x_decimals), coinYReserve: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArgs[1]), item.fields.coin_y_reserve), coinYDecimals: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.coin_y_decimals), coinZReserve: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArgs[2]), item.fields.coin_z_reserve), coinZDecimals: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.coin_z_decimals), lpSupply: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]))), item.fields.lp_supply), totalLpKrafted: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_lp_krafted), curvedConfig: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_6.CurvedPoolConfig.reified()), item.fields.curved_config), stableConfig: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_7.StablePoolConfig.reified()), item.fields.stable_config), weightedConfig: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_8.WeightedConfig.reified()), item.fields.weighted_config), collectedFeeX: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArgs[0]), item.fields.collected_fee_x), collectedFeeY: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArgs[1]), item.fields.collected_fee_y), collectedFeeZ: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Balance.reified(typeArgs[2]), item.fields.collected_fee_z), feeInfo: (0, reified_1.decodeFromFieldsWithTypes)(PoolFeeInfo.reified(), item.fields.fee_info), isLocked: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_locked), cumulativeXPriceY: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_x_price_y), cumulativeYPriceX: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_y_price_x), cumulativeXPriceZ: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_x_price_z), cumulativeZPriceX: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_z_price_x), cumulativeYPriceZ: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_y_price_z), cumulativeZPriceY: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.cumulative_z_price_y), lastTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_timestamp), poolHiveAddr: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.pool_hive_addr), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(typeArgs, data) { return LiquidityPool.fromFields(typeArgs, LiquidityPool.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, coinXReserve: this.coinXReserve.toJSONField(), coinXDecimals: this.coinXDecimals, coinYReserve: this.coinYReserve.toJSONField(), coinYDecimals: this.coinYDecimals, coinZReserve: this.coinZReserve.toJSONField(), coinZDecimals: this.coinZDecimals, lpSupply: this.lpSupply.toJSONField(), totalLpKrafted: this.totalLpKrafted.toString(), curvedConfig: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_6.CurvedPoolConfig.$typeName}>`, this.curvedConfig), stableConfig: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_7.StablePoolConfig.$typeName}>`, this.stableConfig), weightedConfig: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${structs_8.WeightedConfig.$typeName}>`, this.weightedConfig), collectedFeeX: this.collectedFeeX.toJSONField(), collectedFeeY: this.collectedFeeY.toJSONField(), collectedFeeZ: this.collectedFeeZ.toJSONField(), feeInfo: this.feeInfo.toJSONField(), isLocked: this.isLocked, cumulativeXPriceY: this.cumulativeXPriceY.toString(), cumulativeYPriceX: this.cumulativeYPriceX.toString(), cumulativeXPriceZ: this.cumulativeXPriceZ.toString(), cumulativeZPriceX: this.cumulativeZPriceX.toString(), cumulativeYPriceZ: this.cumulativeYPriceZ.toString(), cumulativeZPriceY: this.cumulativeZPriceY.toString(), lastTimestamp: this.lastTimestamp.toString(), poolHiveAddr: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<address>`, this.poolHiveAddr), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return LiquidityPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), coinXReserve: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArgs[0]), field.coinXReserve), coinXDecimals: (0, reified_1.decodeFromJSONField)("u8", field.coinXDecimals), coinYReserve: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArgs[1]), field.coinYReserve), coinYDecimals: (0, reified_1.decodeFromJSONField)("u8", field.coinYDecimals), coinZReserve: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArgs[2]), field.coinZReserve), coinZDecimals: (0, reified_1.decodeFromJSONField)("u8", field.coinZDecimals), lpSupply: (0, reified_1.decodeFromJSONField)(structs_3.Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]))), field.lpSupply), totalLpKrafted: (0, reified_1.decodeFromJSONField)("u64", field.totalLpKrafted), curvedConfig: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_6.CurvedPoolConfig.reified()), field.curvedConfig), stableConfig: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_7.StablePoolConfig.reified()), field.stableConfig), weightedConfig: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_8.WeightedConfig.reified()), field.weightedConfig), collectedFeeX: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArgs[0]), field.collectedFeeX), collectedFeeY: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArgs[1]), field.collectedFeeY), collectedFeeZ: (0, reified_1.decodeFromJSONField)(structs_3.Balance.reified(typeArgs[2]), field.collectedFeeZ), feeInfo: (0, reified_1.decodeFromJSONField)(PoolFeeInfo.reified(), field.feeInfo), isLocked: (0, reified_1.decodeFromJSONField)("bool", field.isLocked), cumulativeXPriceY: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeXPriceY), cumulativeYPriceX: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeYPriceX), cumulativeXPriceZ: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeXPriceZ), cumulativeZPriceX: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeZPriceX), cumulativeYPriceZ: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeYPriceZ), cumulativeZPriceY: (0, reified_1.decodeFromJSONField)("u256", field.cumulativeZPriceY), lastTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.lastTimestamp), poolHiveAddr: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.poolHiveAddr), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== LiquidityPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(LiquidityPool.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return LiquidityPool.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLiquidityPool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LiquidityPool object`);
    } return LiquidityPool.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidityPool(data.bcs.type)) {
                throw new Error(`object at is not a LiquidityPool object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return LiquidityPool.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LiquidityPool.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LiquidityPool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLiquidityPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidityPool object`);
        }
        return LiquidityPool.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.LiquidityPool = LiquidityPool;
LiquidityPool.$typeName = `${PKG_V1}::three_pool::LiquidityPool`;
LiquidityPool.$numTypeParams = 4;
LiquidityPool.$isPhantom = [true, true, true, true,];
/* ============================== LiquidityRemovedFromPool =============================== */
function isLiquidityRemovedFromPool(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::LiquidityRemovedFromPool` + '<'); }
class LiquidityRemovedFromPool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LiquidityRemovedFromPool.$typeName;
        this.$isPhantom = LiquidityRemovedFromPool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LiquidityRemovedFromPool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.coinXAmount = fields.coinXAmount;
        ;
        this.coinYAmount = fields.coinYAmount;
        ;
        this.coinZAmount = fields.coinZAmount;
        ;
        this.lpBurned = fields.lpBurned;
        ;
        this.totalXFee = fields.totalXFee;
        ;
        this.totalYFee = fields.totalYFee;
        ;
        this.totalZFee = fields.totalZFee;
        ;
        this.xHiveFee = fields.xHiveFee;
        ;
        this.yHiveFee = fields.yHiveFee;
        ;
        this.zHiveFee = fields.zHiveFee;
    }
    static reified(X, Y, Z, Curve) { return { typeName: LiquidityRemovedFromPool.$typeName, fullTypeName: (0, util_1.composeSuiType)(LiquidityRemovedFromPool.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: LiquidityRemovedFromPool.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => LiquidityRemovedFromPool.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => LiquidityRemovedFromPool.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => LiquidityRemovedFromPool.fromBcs([X, Y, Z, Curve], data), bcs: LiquidityRemovedFromPool.bcs, fromJSONField: (field) => LiquidityRemovedFromPool.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => LiquidityRemovedFromPool.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => LiquidityRemovedFromPool.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => LiquidityRemovedFromPool.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => LiquidityRemovedFromPool.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new LiquidityRemovedFromPool([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return LiquidityRemovedFromPool.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(LiquidityRemovedFromPool.reified(X, Y, Z, Curve)); }
    static get p() { return LiquidityRemovedFromPool.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("LiquidityRemovedFromPool", {
            id: structs_5.ID.bcs, coin_x_amount: bcs_1.bcs.u64(), coin_y_amount: bcs_1.bcs.u64(), coin_z_amount: bcs_1.bcs.u64(), lp_burned: bcs_1.bcs.u64(), total_x_fee: bcs_1.bcs.u64(), total_y_fee: bcs_1.bcs.u64(), total_z_fee: bcs_1.bcs.u64(), x_hive_fee: bcs_1.bcs.u64(), y_hive_fee: bcs_1.bcs.u64(), z_hive_fee: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return LiquidityRemovedFromPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), coinXAmount: (0, reified_1.decodeFromFields)("u64", fields.coin_x_amount), coinYAmount: (0, reified_1.decodeFromFields)("u64", fields.coin_y_amount), coinZAmount: (0, reified_1.decodeFromFields)("u64", fields.coin_z_amount), lpBurned: (0, reified_1.decodeFromFields)("u64", fields.lp_burned), totalXFee: (0, reified_1.decodeFromFields)("u64", fields.total_x_fee), totalYFee: (0, reified_1.decodeFromFields)("u64", fields.total_y_fee), totalZFee: (0, reified_1.decodeFromFields)("u64", fields.total_z_fee), xHiveFee: (0, reified_1.decodeFromFields)("u64", fields.x_hive_fee), yHiveFee: (0, reified_1.decodeFromFields)("u64", fields.y_hive_fee), zHiveFee: (0, reified_1.decodeFromFields)("u64", fields.z_hive_fee) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isLiquidityRemovedFromPool(item.type)) {
            throw new Error("not a LiquidityRemovedFromPool type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return LiquidityRemovedFromPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), coinXAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.coin_x_amount), coinYAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.coin_y_amount), coinZAmount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.coin_z_amount), lpBurned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_burned), totalXFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_x_fee), totalYFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_y_fee), totalZFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_z_fee), xHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.x_hive_fee), yHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.y_hive_fee), zHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.z_hive_fee) });
    }
    static fromBcs(typeArgs, data) { return LiquidityRemovedFromPool.fromFields(typeArgs, LiquidityRemovedFromPool.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, coinXAmount: this.coinXAmount.toString(), coinYAmount: this.coinYAmount.toString(), coinZAmount: this.coinZAmount.toString(), lpBurned: this.lpBurned.toString(), totalXFee: this.totalXFee.toString(), totalYFee: this.totalYFee.toString(), totalZFee: this.totalZFee.toString(), xHiveFee: this.xHiveFee.toString(), yHiveFee: this.yHiveFee.toString(), zHiveFee: this.zHiveFee.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return LiquidityRemovedFromPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), coinXAmount: (0, reified_1.decodeFromJSONField)("u64", field.coinXAmount), coinYAmount: (0, reified_1.decodeFromJSONField)("u64", field.coinYAmount), coinZAmount: (0, reified_1.decodeFromJSONField)("u64", field.coinZAmount), lpBurned: (0, reified_1.decodeFromJSONField)("u64", field.lpBurned), totalXFee: (0, reified_1.decodeFromJSONField)("u64", field.totalXFee), totalYFee: (0, reified_1.decodeFromJSONField)("u64", field.totalYFee), totalZFee: (0, reified_1.decodeFromJSONField)("u64", field.totalZFee), xHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.xHiveFee), yHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.yHiveFee), zHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.zHiveFee) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== LiquidityRemovedFromPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(LiquidityRemovedFromPool.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return LiquidityRemovedFromPool.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLiquidityRemovedFromPool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LiquidityRemovedFromPool object`);
    } return LiquidityRemovedFromPool.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidityRemovedFromPool(data.bcs.type)) {
                throw new Error(`object at is not a LiquidityRemovedFromPool object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return LiquidityRemovedFromPool.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LiquidityRemovedFromPool.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LiquidityRemovedFromPool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLiquidityRemovedFromPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidityRemovedFromPool object`);
        }
        return LiquidityRemovedFromPool.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.LiquidityRemovedFromPool = LiquidityRemovedFromPool;
LiquidityRemovedFromPool.$typeName = `${PKG_V1}::three_pool::LiquidityRemovedFromPool`;
LiquidityRemovedFromPool.$numTypeParams = 4;
LiquidityRemovedFromPool.$isPhantom = [true, true, true, true,];
/* ============================== LpBurntForever =============================== */
function isLpBurntForever(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::three_pool::LpBurntForever`; }
class LpBurntForever {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LpBurntForever.$typeName;
        this.$isPhantom = LpBurntForever.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LpBurntForever.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolAddr = fields.poolAddr;
        ;
        this.lpBurned = fields.lpBurned;
    }
    static reified() { return { typeName: LpBurntForever.$typeName, fullTypeName: (0, util_1.composeSuiType)(LpBurntForever.$typeName, ...[]), typeArgs: [], isPhantom: LpBurntForever.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LpBurntForever.fromFields(fields), fromFieldsWithTypes: (item) => LpBurntForever.fromFieldsWithTypes(item), fromBcs: (data) => LpBurntForever.fromBcs(data), bcs: LpBurntForever.bcs, fromJSONField: (field) => LpBurntForever.fromJSONField(field), fromJSON: (json) => LpBurntForever.fromJSON(json), fromSuiParsedData: (content) => LpBurntForever.fromSuiParsedData(content), fromSuiObjectData: (content) => LpBurntForever.fromSuiObjectData(content), fetch: async (client, id) => LpBurntForever.fetch(client, id), new: (fields) => { return new LpBurntForever([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LpBurntForever.reified(); }
    static phantom() { return (0, reified_1.phantom)(LpBurntForever.reified()); }
    static get p() { return LpBurntForever.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LpBurntForever", {
            pool_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), lp_burned: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return LpBurntForever.reified().new({ poolAddr: (0, reified_1.decodeFromFields)("address", fields.pool_addr), lpBurned: (0, reified_1.decodeFromFields)("u64", fields.lp_burned) }); }
    static fromFieldsWithTypes(item) {
        if (!isLpBurntForever(item.type)) {
            throw new Error("not a LpBurntForever type");
        }
        return LpBurntForever.reified().new({ poolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pool_addr), lpBurned: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.lp_burned) });
    }
    static fromBcs(data) { return LpBurntForever.fromFields(LpBurntForever.bcs.parse(data)); }
    toJSONField() {
        return {
            poolAddr: this.poolAddr, lpBurned: this.lpBurned.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LpBurntForever.reified().new({ poolAddr: (0, reified_1.decodeFromJSONField)("address", field.poolAddr), lpBurned: (0, reified_1.decodeFromJSONField)("u64", field.lpBurned) }); }
    static fromJSON(json) {
        if (json.$typeName !== LpBurntForever.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LpBurntForever.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLpBurntForever(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LpBurntForever object`);
    } return LpBurntForever.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLpBurntForever(data.bcs.type)) {
                throw new Error(`object at is not a LpBurntForever object`);
            }
            return LpBurntForever.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LpBurntForever.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LpBurntForever object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLpBurntForever(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LpBurntForever object`);
        }
        return LpBurntForever.fromSuiObjectData(res.data);
    }
}
exports.LpBurntForever = LpBurntForever;
LpBurntForever.$typeName = `${PKG_V1}::three_pool::LpBurntForever`;
LpBurntForever.$numTypeParams = 0;
LpBurntForever.$isPhantom = [];
/* ============================== NewPoolCreated =============================== */
function isNewPoolCreated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::NewPoolCreated` + '<'); }
class NewPoolCreated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewPoolCreated.$typeName;
        this.$isPhantom = NewPoolCreated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewPoolCreated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.poolId = fields.poolId;
    }
    static reified(X, Y, Z, Curve) { return { typeName: NewPoolCreated.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewPoolCreated.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: NewPoolCreated.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => NewPoolCreated.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => NewPoolCreated.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => NewPoolCreated.fromBcs([X, Y, Z, Curve], data), bcs: NewPoolCreated.bcs, fromJSONField: (field) => NewPoolCreated.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => NewPoolCreated.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => NewPoolCreated.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => NewPoolCreated.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => NewPoolCreated.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new NewPoolCreated([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewPoolCreated.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(NewPoolCreated.reified(X, Y, Z, Curve)); }
    static get p() { return NewPoolCreated.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("NewPoolCreated", {
            pool_id: structs_5.ID.bcs
        });
    }
    ;
    static fromFields(typeArgs, fields) { return NewPoolCreated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ poolId: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.pool_id) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isNewPoolCreated(item.type)) {
            throw new Error("not a NewPoolCreated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return NewPoolCreated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ poolId: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.pool_id) });
    }
    static fromBcs(typeArgs, data) { return NewPoolCreated.fromFields(typeArgs, NewPoolCreated.bcs.parse(data)); }
    toJSONField() {
        return {
            poolId: this.poolId,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return NewPoolCreated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ poolId: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.poolId) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== NewPoolCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(NewPoolCreated.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return NewPoolCreated.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewPoolCreated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewPoolCreated object`);
    } return NewPoolCreated.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewPoolCreated(data.bcs.type)) {
                throw new Error(`object at is not a NewPoolCreated object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return NewPoolCreated.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewPoolCreated.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewPoolCreated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewPoolCreated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewPoolCreated object`);
        }
        return NewPoolCreated.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.NewPoolCreated = NewPoolCreated;
NewPoolCreated.$typeName = `${PKG_V1}::three_pool::NewPoolCreated`;
NewPoolCreated.$numTypeParams = 4;
NewPoolCreated.$isPhantom = [true, true, true, true,];
/* ============================== PoolFeeInfo =============================== */
function isPoolFeeInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::three_pool::PoolFeeInfo`; }
class PoolFeeInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PoolFeeInfo.$typeName;
        this.$isPhantom = PoolFeeInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolFeeInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.totalFeeBps = fields.totalFeeBps;
        ;
        this.beesFeePct = fields.beesFeePct;
    }
    static reified() { return { typeName: PoolFeeInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolFeeInfo.$typeName, ...[]), typeArgs: [], isPhantom: PoolFeeInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PoolFeeInfo.fromFields(fields), fromFieldsWithTypes: (item) => PoolFeeInfo.fromFieldsWithTypes(item), fromBcs: (data) => PoolFeeInfo.fromBcs(data), bcs: PoolFeeInfo.bcs, fromJSONField: (field) => PoolFeeInfo.fromJSONField(field), fromJSON: (json) => PoolFeeInfo.fromJSON(json), fromSuiParsedData: (content) => PoolFeeInfo.fromSuiParsedData(content), fromSuiObjectData: (content) => PoolFeeInfo.fromSuiObjectData(content), fetch: async (client, id) => PoolFeeInfo.fetch(client, id), new: (fields) => { return new PoolFeeInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolFeeInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolFeeInfo.reified()); }
    static get p() { return PoolFeeInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolFeeInfo", {
            total_fee_bps: bcs_1.bcs.u64(), bees_fee_pct: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PoolFeeInfo.reified().new({ totalFeeBps: (0, reified_1.decodeFromFields)("u64", fields.total_fee_bps), beesFeePct: (0, reified_1.decodeFromFields)("u64", fields.bees_fee_pct) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolFeeInfo(item.type)) {
            throw new Error("not a PoolFeeInfo type");
        }
        return PoolFeeInfo.reified().new({ totalFeeBps: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_fee_bps), beesFeePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_fee_pct) });
    }
    static fromBcs(data) { return PoolFeeInfo.fromFields(PoolFeeInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            totalFeeBps: this.totalFeeBps.toString(), beesFeePct: this.beesFeePct.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolFeeInfo.reified().new({ totalFeeBps: (0, reified_1.decodeFromJSONField)("u64", field.totalFeeBps), beesFeePct: (0, reified_1.decodeFromJSONField)("u64", field.beesFeePct) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolFeeInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolFeeInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolFeeInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolFeeInfo object`);
    } return PoolFeeInfo.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolFeeInfo(data.bcs.type)) {
                throw new Error(`object at is not a PoolFeeInfo object`);
            }
            return PoolFeeInfo.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PoolFeeInfo.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolFeeInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolFeeInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolFeeInfo object`);
        }
        return PoolFeeInfo.fromSuiObjectData(res.data);
    }
}
exports.PoolFeeInfo = PoolFeeInfo;
PoolFeeInfo.$typeName = `${PKG_V1}::three_pool::PoolFeeInfo`;
PoolFeeInfo.$numTypeParams = 0;
PoolFeeInfo.$isPhantom = [];
/* ============================== PoolFeeUpdated =============================== */
function isPoolFeeUpdated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::three_pool::PoolFeeUpdated`; }
class PoolFeeUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PoolFeeUpdated.$typeName;
        this.$isPhantom = PoolFeeUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolFeeUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.totalFeeBps = fields.totalFeeBps;
        ;
        this.beesFeePct = fields.beesFeePct;
    }
    static reified() { return { typeName: PoolFeeUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolFeeUpdated.$typeName, ...[]), typeArgs: [], isPhantom: PoolFeeUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PoolFeeUpdated.fromFields(fields), fromFieldsWithTypes: (item) => PoolFeeUpdated.fromFieldsWithTypes(item), fromBcs: (data) => PoolFeeUpdated.fromBcs(data), bcs: PoolFeeUpdated.bcs, fromJSONField: (field) => PoolFeeUpdated.fromJSONField(field), fromJSON: (json) => PoolFeeUpdated.fromJSON(json), fromSuiParsedData: (content) => PoolFeeUpdated.fromSuiParsedData(content), fromSuiObjectData: (content) => PoolFeeUpdated.fromSuiObjectData(content), fetch: async (client, id) => PoolFeeUpdated.fetch(client, id), new: (fields) => { return new PoolFeeUpdated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolFeeUpdated.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolFeeUpdated.reified()); }
    static get p() { return PoolFeeUpdated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolFeeUpdated", {
            id: structs_5.ID.bcs, total_fee_bps: bcs_1.bcs.u64(), bees_fee_pct: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PoolFeeUpdated.reified().new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), totalFeeBps: (0, reified_1.decodeFromFields)("u64", fields.total_fee_bps), beesFeePct: (0, reified_1.decodeFromFields)("u64", fields.bees_fee_pct) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolFeeUpdated(item.type)) {
            throw new Error("not a PoolFeeUpdated type");
        }
        return PoolFeeUpdated.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), totalFeeBps: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_fee_bps), beesFeePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_fee_pct) });
    }
    static fromBcs(data) { return PoolFeeUpdated.fromFields(PoolFeeUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, totalFeeBps: this.totalFeeBps.toString(), beesFeePct: this.beesFeePct.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolFeeUpdated.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), totalFeeBps: (0, reified_1.decodeFromJSONField)("u64", field.totalFeeBps), beesFeePct: (0, reified_1.decodeFromJSONField)("u64", field.beesFeePct) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolFeeUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolFeeUpdated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolFeeUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolFeeUpdated object`);
    } return PoolFeeUpdated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolFeeUpdated(data.bcs.type)) {
                throw new Error(`object at is not a PoolFeeUpdated object`);
            }
            return PoolFeeUpdated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PoolFeeUpdated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolFeeUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolFeeUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolFeeUpdated object`);
        }
        return PoolFeeUpdated.fromSuiObjectData(res.data);
    }
}
exports.PoolFeeUpdated = PoolFeeUpdated;
PoolFeeUpdated.$typeName = `${PKG_V1}::three_pool::PoolFeeUpdated`;
PoolFeeUpdated.$numTypeParams = 0;
PoolFeeUpdated.$isPhantom = [];
/* ============================== PoolRegistry =============================== */
function isPoolRegistry(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::three_pool::PoolRegistry`; }
class PoolRegistry {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PoolRegistry.$typeName;
        this.$isPhantom = PoolRegistry.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolRegistry.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.kraftFee = fields.kraftFee;
        ;
        this.kraftedPoolsList = fields.kraftedPoolsList;
        ;
        this.feeClaimCap = fields.feeClaimCap;
        ;
        this.moduleVersion = fields.moduleVersion;
    }
    static reified() { return { typeName: PoolRegistry.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolRegistry.$typeName, ...[]), typeArgs: [], isPhantom: PoolRegistry.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PoolRegistry.fromFields(fields), fromFieldsWithTypes: (item) => PoolRegistry.fromFieldsWithTypes(item), fromBcs: (data) => PoolRegistry.fromBcs(data), bcs: PoolRegistry.bcs, fromJSONField: (field) => PoolRegistry.fromJSONField(field), fromJSON: (json) => PoolRegistry.fromJSON(json), fromSuiParsedData: (content) => PoolRegistry.fromSuiParsedData(content), fromSuiObjectData: (content) => PoolRegistry.fromSuiObjectData(content), fetch: async (client, id) => PoolRegistry.fetch(client, id), new: (fields) => { return new PoolRegistry([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolRegistry.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolRegistry.reified()); }
    static get p() { return PoolRegistry.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolRegistry", {
            id: structs_5.UID.bcs, kraft_fee: bcs_1.bcs.u64(), krafted_pools_list: structs_4.LinkedTable.bcs(PoolRegistryItem.bcs), fee_claim_cap: structs_9.ThreeAmmFlowAccess.bcs, module_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return PoolRegistry.reified().new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), kraftFee: (0, reified_1.decodeFromFields)("u64", fields.kraft_fee), kraftedPoolsList: (0, reified_1.decodeFromFields)(structs_4.LinkedTable.reified(PoolRegistryItem.reified(), reified.phantom(structs_5.ID.reified())), fields.krafted_pools_list), feeClaimCap: (0, reified_1.decodeFromFields)(structs_9.ThreeAmmFlowAccess.reified(), fields.fee_claim_cap), moduleVersion: (0, reified_1.decodeFromFields)("u64", fields.module_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolRegistry(item.type)) {
            throw new Error("not a PoolRegistry type");
        }
        return PoolRegistry.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), kraftFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.kraft_fee), kraftedPoolsList: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.LinkedTable.reified(PoolRegistryItem.reified(), reified.phantom(structs_5.ID.reified())), item.fields.krafted_pools_list), feeClaimCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_9.ThreeAmmFlowAccess.reified(), item.fields.fee_claim_cap), moduleVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.module_version) });
    }
    static fromBcs(data) { return PoolRegistry.fromFields(PoolRegistry.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, kraftFee: this.kraftFee.toString(), kraftedPoolsList: this.kraftedPoolsList.toJSONField(), feeClaimCap: this.feeClaimCap.toJSONField(), moduleVersion: this.moduleVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolRegistry.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), kraftFee: (0, reified_1.decodeFromJSONField)("u64", field.kraftFee), kraftedPoolsList: (0, reified_1.decodeFromJSONField)(structs_4.LinkedTable.reified(PoolRegistryItem.reified(), reified.phantom(structs_5.ID.reified())), field.kraftedPoolsList), feeClaimCap: (0, reified_1.decodeFromJSONField)(structs_9.ThreeAmmFlowAccess.reified(), field.feeClaimCap), moduleVersion: (0, reified_1.decodeFromJSONField)("u64", field.moduleVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolRegistry.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolRegistry(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolRegistry object`);
    } return PoolRegistry.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolRegistry(data.bcs.type)) {
                throw new Error(`object at is not a PoolRegistry object`);
            }
            return PoolRegistry.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PoolRegistry.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolRegistry object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolRegistry object`);
        }
        return PoolRegistry.fromSuiObjectData(res.data);
    }
}
exports.PoolRegistry = PoolRegistry;
PoolRegistry.$typeName = `${PKG_V1}::three_pool::PoolRegistry`;
PoolRegistry.$numTypeParams = 0;
PoolRegistry.$isPhantom = [];
/* ============================== PoolRegistryItem =============================== */
function isPoolRegistryItem(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::three_pool::PoolRegistryItem`; }
class PoolRegistryItem {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PoolRegistryItem.$typeName;
        this.$isPhantom = PoolRegistryItem.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PoolRegistryItem.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.a = fields.a;
        ;
        this.b = fields.b;
        ;
        this.c = fields.c;
        ;
        this.curve = fields.curve;
    }
    static reified() { return { typeName: PoolRegistryItem.$typeName, fullTypeName: (0, util_1.composeSuiType)(PoolRegistryItem.$typeName, ...[]), typeArgs: [], isPhantom: PoolRegistryItem.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PoolRegistryItem.fromFields(fields), fromFieldsWithTypes: (item) => PoolRegistryItem.fromFieldsWithTypes(item), fromBcs: (data) => PoolRegistryItem.fromBcs(data), bcs: PoolRegistryItem.bcs, fromJSONField: (field) => PoolRegistryItem.fromJSONField(field), fromJSON: (json) => PoolRegistryItem.fromJSON(json), fromSuiParsedData: (content) => PoolRegistryItem.fromSuiParsedData(content), fromSuiObjectData: (content) => PoolRegistryItem.fromSuiObjectData(content), fetch: async (client, id) => PoolRegistryItem.fetch(client, id), new: (fields) => { return new PoolRegistryItem([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PoolRegistryItem.reified(); }
    static phantom() { return (0, reified_1.phantom)(PoolRegistryItem.reified()); }
    static get p() { return PoolRegistryItem.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PoolRegistryItem", {
            a: structs_2.TypeName.bcs, b: structs_2.TypeName.bcs, c: structs_2.TypeName.bcs, curve: structs_2.TypeName.bcs
        });
    }
    ;
    static fromFields(fields) { return PoolRegistryItem.reified().new({ a: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.a), b: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.b), c: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.c), curve: (0, reified_1.decodeFromFields)(structs_2.TypeName.reified(), fields.curve) }); }
    static fromFieldsWithTypes(item) {
        if (!isPoolRegistryItem(item.type)) {
            throw new Error("not a PoolRegistryItem type");
        }
        return PoolRegistryItem.reified().new({ a: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.a), b: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.b), c: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.c), curve: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.TypeName.reified(), item.fields.curve) });
    }
    static fromBcs(data) { return PoolRegistryItem.fromFields(PoolRegistryItem.bcs.parse(data)); }
    toJSONField() {
        return {
            a: this.a.toJSONField(), b: this.b.toJSONField(), c: this.c.toJSONField(), curve: this.curve.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PoolRegistryItem.reified().new({ a: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.a), b: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.b), c: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.c), curve: (0, reified_1.decodeFromJSONField)(structs_2.TypeName.reified(), field.curve) }); }
    static fromJSON(json) {
        if (json.$typeName !== PoolRegistryItem.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PoolRegistryItem.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPoolRegistryItem(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PoolRegistryItem object`);
    } return PoolRegistryItem.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolRegistryItem(data.bcs.type)) {
                throw new Error(`object at is not a PoolRegistryItem object`);
            }
            return PoolRegistryItem.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PoolRegistryItem.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PoolRegistryItem object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPoolRegistryItem(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PoolRegistryItem object`);
        }
        return PoolRegistryItem.fromSuiObjectData(res.data);
    }
}
exports.PoolRegistryItem = PoolRegistryItem;
PoolRegistryItem.$typeName = `${PKG_V1}::three_pool::PoolRegistryItem`;
PoolRegistryItem.$numTypeParams = 0;
PoolRegistryItem.$isPhantom = [];
/* ============================== StableConfigUpdated =============================== */
function isStableConfigUpdated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::StableConfigUpdated` + '<'); }
class StableConfigUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StableConfigUpdated.$typeName;
        this.$isPhantom = StableConfigUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StableConfigUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.initAmpTime = fields.initAmpTime;
        ;
        this.nextAmp = fields.nextAmp;
        ;
        this.nextAmpTime = fields.nextAmpTime;
    }
    static reified(X, Y, Z, Curve) { return { typeName: StableConfigUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(StableConfigUpdated.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: StableConfigUpdated.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => StableConfigUpdated.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => StableConfigUpdated.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => StableConfigUpdated.fromBcs([X, Y, Z, Curve], data), bcs: StableConfigUpdated.bcs, fromJSONField: (field) => StableConfigUpdated.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => StableConfigUpdated.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => StableConfigUpdated.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => StableConfigUpdated.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => StableConfigUpdated.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new StableConfigUpdated([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return StableConfigUpdated.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(StableConfigUpdated.reified(X, Y, Z, Curve)); }
    static get p() { return StableConfigUpdated.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("StableConfigUpdated", {
            id: structs_5.ID.bcs, init_amp_time: bcs_1.bcs.u64(), next_amp: bcs_1.bcs.u64(), next_amp_time: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return StableConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), initAmpTime: (0, reified_1.decodeFromFields)("u64", fields.init_amp_time), nextAmp: (0, reified_1.decodeFromFields)("u64", fields.next_amp), nextAmpTime: (0, reified_1.decodeFromFields)("u64", fields.next_amp_time) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isStableConfigUpdated(item.type)) {
            throw new Error("not a StableConfigUpdated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return StableConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), initAmpTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_amp_time), nextAmp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_amp), nextAmpTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_amp_time) });
    }
    static fromBcs(typeArgs, data) { return StableConfigUpdated.fromFields(typeArgs, StableConfigUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, initAmpTime: this.initAmpTime.toString(), nextAmp: this.nextAmp.toString(), nextAmpTime: this.nextAmpTime.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return StableConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), initAmpTime: (0, reified_1.decodeFromJSONField)("u64", field.initAmpTime), nextAmp: (0, reified_1.decodeFromJSONField)("u64", field.nextAmp), nextAmpTime: (0, reified_1.decodeFromJSONField)("u64", field.nextAmpTime) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== StableConfigUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(StableConfigUpdated.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return StableConfigUpdated.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStableConfigUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StableConfigUpdated object`);
    } return StableConfigUpdated.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStableConfigUpdated(data.bcs.type)) {
                throw new Error(`object at is not a StableConfigUpdated object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return StableConfigUpdated.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StableConfigUpdated.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StableConfigUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStableConfigUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StableConfigUpdated object`);
        }
        return StableConfigUpdated.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.StableConfigUpdated = StableConfigUpdated;
StableConfigUpdated.$typeName = `${PKG_V1}::three_pool::StableConfigUpdated`;
StableConfigUpdated.$numTypeParams = 4;
StableConfigUpdated.$isPhantom = [true, true, true, true,];
/* ============================== TokensSwapped =============================== */
function isTokensSwapped(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::TokensSwapped` + '<'); }
class TokensSwapped {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TokensSwapped.$typeName;
        this.$isPhantom = TokensSwapped.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TokensSwapped.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.xOfferAmt = fields.xOfferAmt;
        ;
        this.yOfferAmt = fields.yOfferAmt;
        ;
        this.zOfferAmt = fields.zOfferAmt;
        ;
        this.xReturnAmt = fields.xReturnAmt;
        ;
        this.yReturnAmt = fields.yReturnAmt;
        ;
        this.zReturnAmt = fields.zReturnAmt;
        ;
        this.xTotalFee = fields.xTotalFee;
        ;
        this.yTotalFee = fields.yTotalFee;
        ;
        this.zTotalFee = fields.zTotalFee;
        ;
        this.xHiveFee = fields.xHiveFee;
        ;
        this.yHiveFee = fields.yHiveFee;
        ;
        this.zHiveFee = fields.zHiveFee;
    }
    static reified(X, Y, Z, Curve) { return { typeName: TokensSwapped.$typeName, fullTypeName: (0, util_1.composeSuiType)(TokensSwapped.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: TokensSwapped.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => TokensSwapped.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => TokensSwapped.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => TokensSwapped.fromBcs([X, Y, Z, Curve], data), bcs: TokensSwapped.bcs, fromJSONField: (field) => TokensSwapped.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => TokensSwapped.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => TokensSwapped.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => TokensSwapped.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => TokensSwapped.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new TokensSwapped([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TokensSwapped.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(TokensSwapped.reified(X, Y, Z, Curve)); }
    static get p() { return TokensSwapped.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TokensSwapped", {
            id: structs_5.ID.bcs, x_offer_amt: bcs_1.bcs.u64(), y_offer_amt: bcs_1.bcs.u64(), z_offer_amt: bcs_1.bcs.u64(), x_return_amt: bcs_1.bcs.u64(), y_return_amt: bcs_1.bcs.u64(), z_return_amt: bcs_1.bcs.u64(), x_total_fee: bcs_1.bcs.u64(), y_total_fee: bcs_1.bcs.u64(), z_total_fee: bcs_1.bcs.u64(), x_hive_fee: bcs_1.bcs.u64(), y_hive_fee: bcs_1.bcs.u64(), z_hive_fee: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return TokensSwapped.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), xOfferAmt: (0, reified_1.decodeFromFields)("u64", fields.x_offer_amt), yOfferAmt: (0, reified_1.decodeFromFields)("u64", fields.y_offer_amt), zOfferAmt: (0, reified_1.decodeFromFields)("u64", fields.z_offer_amt), xReturnAmt: (0, reified_1.decodeFromFields)("u64", fields.x_return_amt), yReturnAmt: (0, reified_1.decodeFromFields)("u64", fields.y_return_amt), zReturnAmt: (0, reified_1.decodeFromFields)("u64", fields.z_return_amt), xTotalFee: (0, reified_1.decodeFromFields)("u64", fields.x_total_fee), yTotalFee: (0, reified_1.decodeFromFields)("u64", fields.y_total_fee), zTotalFee: (0, reified_1.decodeFromFields)("u64", fields.z_total_fee), xHiveFee: (0, reified_1.decodeFromFields)("u64", fields.x_hive_fee), yHiveFee: (0, reified_1.decodeFromFields)("u64", fields.y_hive_fee), zHiveFee: (0, reified_1.decodeFromFields)("u64", fields.z_hive_fee) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isTokensSwapped(item.type)) {
            throw new Error("not a TokensSwapped type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return TokensSwapped.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), xOfferAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.x_offer_amt), yOfferAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.y_offer_amt), zOfferAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.z_offer_amt), xReturnAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.x_return_amt), yReturnAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.y_return_amt), zReturnAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.z_return_amt), xTotalFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.x_total_fee), yTotalFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.y_total_fee), zTotalFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.z_total_fee), xHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.x_hive_fee), yHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.y_hive_fee), zHiveFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.z_hive_fee) });
    }
    static fromBcs(typeArgs, data) { return TokensSwapped.fromFields(typeArgs, TokensSwapped.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, xOfferAmt: this.xOfferAmt.toString(), yOfferAmt: this.yOfferAmt.toString(), zOfferAmt: this.zOfferAmt.toString(), xReturnAmt: this.xReturnAmt.toString(), yReturnAmt: this.yReturnAmt.toString(), zReturnAmt: this.zReturnAmt.toString(), xTotalFee: this.xTotalFee.toString(), yTotalFee: this.yTotalFee.toString(), zTotalFee: this.zTotalFee.toString(), xHiveFee: this.xHiveFee.toString(), yHiveFee: this.yHiveFee.toString(), zHiveFee: this.zHiveFee.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return TokensSwapped.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), xOfferAmt: (0, reified_1.decodeFromJSONField)("u64", field.xOfferAmt), yOfferAmt: (0, reified_1.decodeFromJSONField)("u64", field.yOfferAmt), zOfferAmt: (0, reified_1.decodeFromJSONField)("u64", field.zOfferAmt), xReturnAmt: (0, reified_1.decodeFromJSONField)("u64", field.xReturnAmt), yReturnAmt: (0, reified_1.decodeFromJSONField)("u64", field.yReturnAmt), zReturnAmt: (0, reified_1.decodeFromJSONField)("u64", field.zReturnAmt), xTotalFee: (0, reified_1.decodeFromJSONField)("u64", field.xTotalFee), yTotalFee: (0, reified_1.decodeFromJSONField)("u64", field.yTotalFee), zTotalFee: (0, reified_1.decodeFromJSONField)("u64", field.zTotalFee), xHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.xHiveFee), yHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.yHiveFee), zHiveFee: (0, reified_1.decodeFromJSONField)("u64", field.zHiveFee) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== TokensSwapped.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TokensSwapped.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return TokensSwapped.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTokensSwapped(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TokensSwapped object`);
    } return TokensSwapped.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTokensSwapped(data.bcs.type)) {
                throw new Error(`object at is not a TokensSwapped object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return TokensSwapped.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TokensSwapped.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TokensSwapped object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTokensSwapped(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TokensSwapped object`);
        }
        return TokensSwapped.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.TokensSwapped = TokensSwapped;
TokensSwapped.$typeName = `${PKG_V1}::three_pool::TokensSwapped`;
TokensSwapped.$numTypeParams = 4;
TokensSwapped.$isPhantom = [true, true, true, true,];
/* ============================== WeightedConfigUpdated =============================== */
function isWeightedConfigUpdated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::three_pool::WeightedConfigUpdated` + '<'); }
class WeightedConfigUpdated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = WeightedConfigUpdated.$typeName;
        this.$isPhantom = WeightedConfigUpdated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(WeightedConfigUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.newWeights = fields.newWeights;
        ;
        this.newExitFee = fields.newExitFee;
    }
    static reified(X, Y, Z, Curve) { return { typeName: WeightedConfigUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(WeightedConfigUpdated.$typeName, ...[(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)]), typeArgs: [(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], isPhantom: WeightedConfigUpdated.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields) => WeightedConfigUpdated.fromFields([X, Y, Z, Curve], fields), fromFieldsWithTypes: (item) => WeightedConfigUpdated.fromFieldsWithTypes([X, Y, Z, Curve], item), fromBcs: (data) => WeightedConfigUpdated.fromBcs([X, Y, Z, Curve], data), bcs: WeightedConfigUpdated.bcs, fromJSONField: (field) => WeightedConfigUpdated.fromJSONField([X, Y, Z, Curve], field), fromJSON: (json) => WeightedConfigUpdated.fromJSON([X, Y, Z, Curve], json), fromSuiParsedData: (content) => WeightedConfigUpdated.fromSuiParsedData([X, Y, Z, Curve], content), fromSuiObjectData: (content) => WeightedConfigUpdated.fromSuiObjectData([X, Y, Z, Curve], content), fetch: async (client, id) => WeightedConfigUpdated.fetch(client, [X, Y, Z, Curve], id), new: (fields) => { return new WeightedConfigUpdated([(0, reified_1.extractType)(X), (0, reified_1.extractType)(Y), (0, reified_1.extractType)(Z), (0, reified_1.extractType)(Curve)], fields); }, kind: "StructClassReified", }; }
    static get r() { return WeightedConfigUpdated.reified; }
    static phantom(X, Y, Z, Curve) { return (0, reified_1.phantom)(WeightedConfigUpdated.reified(X, Y, Z, Curve)); }
    static get p() { return WeightedConfigUpdated.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("WeightedConfigUpdated", {
            id: structs_5.ID.bcs, new_weights: bcs_1.bcs.vector(bcs_1.bcs.u64()), new_exit_fee: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return WeightedConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), newWeights: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.new_weights), newExitFee: (0, reified_1.decodeFromFields)("u64", fields.new_exit_fee) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isWeightedConfigUpdated(item.type)) {
            throw new Error("not a WeightedConfigUpdated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return WeightedConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), newWeights: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.new_weights), newExitFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.new_exit_fee) });
    }
    static fromBcs(typeArgs, data) { return WeightedConfigUpdated.fromFields(typeArgs, WeightedConfigUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, newWeights: (0, reified_1.fieldToJSON)(`vector<u64>`, this.newWeights), newExitFee: this.newExitFee.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return WeightedConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), newWeights: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.newWeights), newExitFee: (0, reified_1.decodeFromJSONField)("u64", field.newExitFee) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== WeightedConfigUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(WeightedConfigUpdated.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return WeightedConfigUpdated.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isWeightedConfigUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a WeightedConfigUpdated object`);
    } return WeightedConfigUpdated.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWeightedConfigUpdated(data.bcs.type)) {
                throw new Error(`object at is not a WeightedConfigUpdated object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 4) {
                throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 4; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return WeightedConfigUpdated.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return WeightedConfigUpdated.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching WeightedConfigUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWeightedConfigUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WeightedConfigUpdated object`);
        }
        return WeightedConfigUpdated.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.WeightedConfigUpdated = WeightedConfigUpdated;
WeightedConfigUpdated.$typeName = `${PKG_V1}::three_pool::WeightedConfigUpdated`;
WeightedConfigUpdated.$numTypeParams = 4;
WeightedConfigUpdated.$isPhantom = [true, true, true, true,];
