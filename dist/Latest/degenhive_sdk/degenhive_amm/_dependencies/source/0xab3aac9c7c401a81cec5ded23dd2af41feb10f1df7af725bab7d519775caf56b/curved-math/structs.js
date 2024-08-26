"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurvedPoolConfig = void 0;
exports.isCurvedPoolConfig = isCurvedPoolConfig;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== CurvedPoolConfig =============================== */
function isCurvedPoolConfig(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::curved_math::CurvedPoolConfig`; }
class CurvedPoolConfig {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = CurvedPoolConfig.$typeName;
        this.$isPhantom = CurvedPoolConfig.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(CurvedPoolConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.scalingFactor = fields.scalingFactor;
        ;
        this.initAGammaTime = fields.initAGammaTime;
        ;
        this.futureAGammaTime = fields.futureAGammaTime;
        ;
        this.initAmp = fields.initAmp;
        ;
        this.nextAmp = fields.nextAmp;
        ;
        this.initGamma = fields.initGamma;
        ;
        this.nextGamma = fields.nextGamma;
        ;
        this.midFee = fields.midFee;
        ;
        this.outFee = fields.outFee;
        ;
        this.feeGamma = fields.feeGamma;
        ;
        this.maHalfTime = fields.maHalfTime;
        ;
        this.allowedExtraProfit = fields.allowedExtraProfit;
        ;
        this.adjustmentStep = fields.adjustmentStep;
        ;
        this.priceScale = fields.priceScale;
        ;
        this.oraclePrices = fields.oraclePrices;
        ;
        this.lastPrices = fields.lastPrices;
        ;
        this.lastPricesTimestamp = fields.lastPricesTimestamp;
        ;
        this.d = fields.d;
        ;
        this.virtualPrice = fields.virtualPrice;
        ;
        this.xcpProfit = fields.xcpProfit;
        ;
        this.notAdjusted = fields.notAdjusted;
    }
    static reified() { return { typeName: CurvedPoolConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(CurvedPoolConfig.$typeName, ...[]), typeArgs: [], isPhantom: CurvedPoolConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => CurvedPoolConfig.fromFields(fields), fromFieldsWithTypes: (item) => CurvedPoolConfig.fromFieldsWithTypes(item), fromBcs: (data) => CurvedPoolConfig.fromBcs(data), bcs: CurvedPoolConfig.bcs, fromJSONField: (field) => CurvedPoolConfig.fromJSONField(field), fromJSON: (json) => CurvedPoolConfig.fromJSON(json), fromSuiParsedData: (content) => CurvedPoolConfig.fromSuiParsedData(content), fetch: async (client, id) => CurvedPoolConfig.fetch(client, id), new: (fields) => { return new CurvedPoolConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return CurvedPoolConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(CurvedPoolConfig.reified()); }
    static get p() { return CurvedPoolConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("CurvedPoolConfig", {
            scaling_factor: bcs_1.bcs.vector(bcs_1.bcs.u256()), init_A_gamma_time: bcs_1.bcs.u64(), future_A_gamma_time: bcs_1.bcs.u64(), init_amp: bcs_1.bcs.u64(), next_amp: bcs_1.bcs.u64(), init_gamma: bcs_1.bcs.u256(), next_gamma: bcs_1.bcs.u256(), mid_fee: bcs_1.bcs.u64(), out_fee: bcs_1.bcs.u64(), fee_gamma: bcs_1.bcs.u64(), ma_half_time: bcs_1.bcs.u256(), allowed_extra_profit: bcs_1.bcs.u256(), adjustment_step: bcs_1.bcs.u256(), price_scale: bcs_1.bcs.vector(bcs_1.bcs.u256()), oracle_prices: bcs_1.bcs.vector(bcs_1.bcs.u256()), last_prices: bcs_1.bcs.vector(bcs_1.bcs.u256()), last_prices_timestamp: bcs_1.bcs.u64(), _D: bcs_1.bcs.u256(), virtual_price: bcs_1.bcs.u256(), xcp_profit: bcs_1.bcs.u256(), not_adjusted: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return CurvedPoolConfig.reified().new({ scalingFactor: (0, reified_1.decodeFromFields)(reified.vector("u256"), fields.scaling_factor), initAGammaTime: (0, reified_1.decodeFromFields)("u64", fields.init_A_gamma_time), futureAGammaTime: (0, reified_1.decodeFromFields)("u64", fields.future_A_gamma_time), initAmp: (0, reified_1.decodeFromFields)("u64", fields.init_amp), nextAmp: (0, reified_1.decodeFromFields)("u64", fields.next_amp), initGamma: (0, reified_1.decodeFromFields)("u256", fields.init_gamma), nextGamma: (0, reified_1.decodeFromFields)("u256", fields.next_gamma), midFee: (0, reified_1.decodeFromFields)("u64", fields.mid_fee), outFee: (0, reified_1.decodeFromFields)("u64", fields.out_fee), feeGamma: (0, reified_1.decodeFromFields)("u64", fields.fee_gamma), maHalfTime: (0, reified_1.decodeFromFields)("u256", fields.ma_half_time), allowedExtraProfit: (0, reified_1.decodeFromFields)("u256", fields.allowed_extra_profit), adjustmentStep: (0, reified_1.decodeFromFields)("u256", fields.adjustment_step), priceScale: (0, reified_1.decodeFromFields)(reified.vector("u256"), fields.price_scale), oraclePrices: (0, reified_1.decodeFromFields)(reified.vector("u256"), fields.oracle_prices), lastPrices: (0, reified_1.decodeFromFields)(reified.vector("u256"), fields.last_prices), lastPricesTimestamp: (0, reified_1.decodeFromFields)("u64", fields.last_prices_timestamp), d: (0, reified_1.decodeFromFields)("u256", fields._D), virtualPrice: (0, reified_1.decodeFromFields)("u256", fields.virtual_price), xcpProfit: (0, reified_1.decodeFromFields)("u256", fields.xcp_profit), notAdjusted: (0, reified_1.decodeFromFields)("bool", fields.not_adjusted) }); }
    static fromFieldsWithTypes(item) {
        if (!isCurvedPoolConfig(item.type)) {
            throw new Error("not a CurvedPoolConfig type");
        }
        return CurvedPoolConfig.reified().new({ scalingFactor: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u256"), item.fields.scaling_factor), initAGammaTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_A_gamma_time), futureAGammaTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.future_A_gamma_time), initAmp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_amp), nextAmp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_amp), initGamma: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.init_gamma), nextGamma: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.next_gamma), midFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.mid_fee), outFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.out_fee), feeGamma: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.fee_gamma), maHalfTime: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.ma_half_time), allowedExtraProfit: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.allowed_extra_profit), adjustmentStep: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.adjustment_step), priceScale: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u256"), item.fields.price_scale), oraclePrices: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u256"), item.fields.oracle_prices), lastPrices: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u256"), item.fields.last_prices), lastPricesTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.last_prices_timestamp), d: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields._D), virtualPrice: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.virtual_price), xcpProfit: (0, reified_1.decodeFromFieldsWithTypes)("u256", item.fields.xcp_profit), notAdjusted: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.not_adjusted) });
    }
    static fromBcs(data) { return CurvedPoolConfig.fromFields(CurvedPoolConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            scalingFactor: (0, reified_1.fieldToJSON)(`vector<u256>`, this.scalingFactor), initAGammaTime: this.initAGammaTime.toString(), futureAGammaTime: this.futureAGammaTime.toString(), initAmp: this.initAmp.toString(), nextAmp: this.nextAmp.toString(), initGamma: this.initGamma.toString(), nextGamma: this.nextGamma.toString(), midFee: this.midFee.toString(), outFee: this.outFee.toString(), feeGamma: this.feeGamma.toString(), maHalfTime: this.maHalfTime.toString(), allowedExtraProfit: this.allowedExtraProfit.toString(), adjustmentStep: this.adjustmentStep.toString(), priceScale: (0, reified_1.fieldToJSON)(`vector<u256>`, this.priceScale), oraclePrices: (0, reified_1.fieldToJSON)(`vector<u256>`, this.oraclePrices), lastPrices: (0, reified_1.fieldToJSON)(`vector<u256>`, this.lastPrices), lastPricesTimestamp: this.lastPricesTimestamp.toString(), d: this.d.toString(), virtualPrice: this.virtualPrice.toString(), xcpProfit: this.xcpProfit.toString(), notAdjusted: this.notAdjusted,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return CurvedPoolConfig.reified().new({ scalingFactor: (0, reified_1.decodeFromJSONField)(reified.vector("u256"), field.scalingFactor), initAGammaTime: (0, reified_1.decodeFromJSONField)("u64", field.initAGammaTime), futureAGammaTime: (0, reified_1.decodeFromJSONField)("u64", field.futureAGammaTime), initAmp: (0, reified_1.decodeFromJSONField)("u64", field.initAmp), nextAmp: (0, reified_1.decodeFromJSONField)("u64", field.nextAmp), initGamma: (0, reified_1.decodeFromJSONField)("u256", field.initGamma), nextGamma: (0, reified_1.decodeFromJSONField)("u256", field.nextGamma), midFee: (0, reified_1.decodeFromJSONField)("u64", field.midFee), outFee: (0, reified_1.decodeFromJSONField)("u64", field.outFee), feeGamma: (0, reified_1.decodeFromJSONField)("u64", field.feeGamma), maHalfTime: (0, reified_1.decodeFromJSONField)("u256", field.maHalfTime), allowedExtraProfit: (0, reified_1.decodeFromJSONField)("u256", field.allowedExtraProfit), adjustmentStep: (0, reified_1.decodeFromJSONField)("u256", field.adjustmentStep), priceScale: (0, reified_1.decodeFromJSONField)(reified.vector("u256"), field.priceScale), oraclePrices: (0, reified_1.decodeFromJSONField)(reified.vector("u256"), field.oraclePrices), lastPrices: (0, reified_1.decodeFromJSONField)(reified.vector("u256"), field.lastPrices), lastPricesTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.lastPricesTimestamp), d: (0, reified_1.decodeFromJSONField)("u256", field.d), virtualPrice: (0, reified_1.decodeFromJSONField)("u256", field.virtualPrice), xcpProfit: (0, reified_1.decodeFromJSONField)("u256", field.xcpProfit), notAdjusted: (0, reified_1.decodeFromJSONField)("bool", field.notAdjusted) }); }
    static fromJSON(json) {
        if (json.$typeName !== CurvedPoolConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CurvedPoolConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurvedPoolConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a CurvedPoolConfig object`);
    } return CurvedPoolConfig.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching CurvedPoolConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurvedPoolConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CurvedPoolConfig object`);
        }
        return CurvedPoolConfig.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.CurvedPoolConfig = CurvedPoolConfig;
CurvedPoolConfig.$typeName = `${index_1.PKG_V1}::curved_math::CurvedPoolConfig`;
CurvedPoolConfig.$numTypeParams = 0;
CurvedPoolConfig.$isPhantom = [];
