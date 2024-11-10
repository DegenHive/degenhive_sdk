import * as reified from "../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { PKG_V1 } from "../index";

import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { bcs, BcsType, fromB64, fromHEX } from "@mysten/bcs";
/* ============================== CurvedPoolConfig =============================== */

export function isCurvedPoolConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::curved_math::CurvedPoolConfig`; }

export interface CurvedPoolConfigFields { scalingFactor: ToField<Vector<"u256">>; initAGammaTime: ToField<"u64">; futureAGammaTime: ToField<"u64">; initAmp: ToField<"u64">; nextAmp: ToField<"u64">; initGamma: ToField<"u256">; nextGamma: ToField<"u256">; midFee: ToField<"u64">; outFee: ToField<"u64">; feeGamma: ToField<"u64">; maHalfTime: ToField<"u256">; allowedExtraProfit: ToField<"u256">; adjustmentStep: ToField<"u256">; priceScale: ToField<Vector<"u256">>; oraclePrices: ToField<Vector<"u256">>; lastPrices: ToField<Vector<"u256">>; lastPricesTimestamp: ToField<"u64">; d: ToField<"u256">; virtualPrice: ToField<"u256">; xcpProfit: ToField<"u256">; notAdjusted: ToField<"bool"> }

export type CurvedPoolConfigReified = Reified<CurvedPoolConfig, CurvedPoolConfigFields>;

export class CurvedPoolConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::curved_math::CurvedPoolConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = CurvedPoolConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::curved_math::CurvedPoolConfig`; readonly $typeArgs: []; readonly $isPhantom = CurvedPoolConfig.$isPhantom;

    readonly scalingFactor: ToField<Vector<"u256">>; readonly initAGammaTime: ToField<"u64">; readonly futureAGammaTime: ToField<"u64">; readonly initAmp: ToField<"u64">; readonly nextAmp: ToField<"u64">; readonly initGamma: ToField<"u256">; readonly nextGamma: ToField<"u256">; readonly midFee: ToField<"u64">; readonly outFee: ToField<"u64">; readonly feeGamma: ToField<"u64">; readonly maHalfTime: ToField<"u256">; readonly allowedExtraProfit: ToField<"u256">; readonly adjustmentStep: ToField<"u256">; readonly priceScale: ToField<Vector<"u256">>; readonly oraclePrices: ToField<Vector<"u256">>; readonly lastPrices: ToField<Vector<"u256">>; readonly lastPricesTimestamp: ToField<"u64">; readonly d: ToField<"u256">; readonly virtualPrice: ToField<"u256">; readonly xcpProfit: ToField<"u256">; readonly notAdjusted: ToField<"bool">

    private constructor(typeArgs: [], fields: CurvedPoolConfigFields,) {
        this.$fullTypeName = composeSuiType(CurvedPoolConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::curved_math::CurvedPoolConfig`; this.$typeArgs = typeArgs;

        this.scalingFactor = fields.scalingFactor;; this.initAGammaTime = fields.initAGammaTime;; this.futureAGammaTime = fields.futureAGammaTime;; this.initAmp = fields.initAmp;; this.nextAmp = fields.nextAmp;; this.initGamma = fields.initGamma;; this.nextGamma = fields.nextGamma;; this.midFee = fields.midFee;; this.outFee = fields.outFee;; this.feeGamma = fields.feeGamma;; this.maHalfTime = fields.maHalfTime;; this.allowedExtraProfit = fields.allowedExtraProfit;; this.adjustmentStep = fields.adjustmentStep;; this.priceScale = fields.priceScale;; this.oraclePrices = fields.oraclePrices;; this.lastPrices = fields.lastPrices;; this.lastPricesTimestamp = fields.lastPricesTimestamp;; this.d = fields.d;; this.virtualPrice = fields.virtualPrice;; this.xcpProfit = fields.xcpProfit;; this.notAdjusted = fields.notAdjusted;
    }

    static reified(): CurvedPoolConfigReified { return { typeName: CurvedPoolConfig.$typeName, fullTypeName: composeSuiType(CurvedPoolConfig.$typeName, ...[]) as `${typeof PKG_V1}::curved_math::CurvedPoolConfig`, typeArgs: [] as [], isPhantom: CurvedPoolConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CurvedPoolConfig.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => CurvedPoolConfig.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => CurvedPoolConfig.fromBcs(data,), bcs: CurvedPoolConfig.bcs, fromJSONField: (field: any) => CurvedPoolConfig.fromJSONField(field,), fromJSON: (json: Record<string, any>) => CurvedPoolConfig.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => CurvedPoolConfig.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => CurvedPoolConfig.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => CurvedPoolConfig.fetch(client, id,), new: (fields: CurvedPoolConfigFields,) => { return new CurvedPoolConfig([], fields) }, kind: "StructClassReified", } }

    static get r() { return CurvedPoolConfig.reified() }

    static phantom(): PhantomReified<ToTypeStr<CurvedPoolConfig>> { return phantom(CurvedPoolConfig.reified()); } static get p() { return CurvedPoolConfig.phantom() }

    static get bcs() {
        return bcs.struct("CurvedPoolConfig", {

            scaling_factor: bcs.vector(bcs.u256()), init_A_gamma_time: bcs.u64(), future_A_gamma_time: bcs.u64(), init_amp: bcs.u64(), next_amp: bcs.u64(), init_gamma: bcs.u256(), next_gamma: bcs.u256(), mid_fee: bcs.u64(), out_fee: bcs.u64(), fee_gamma: bcs.u64(), ma_half_time: bcs.u256(), allowed_extra_profit: bcs.u256(), adjustment_step: bcs.u256(), price_scale: bcs.vector(bcs.u256()), oracle_prices: bcs.vector(bcs.u256()), last_prices: bcs.vector(bcs.u256()), last_prices_timestamp: bcs.u64(), _D: bcs.u256(), virtual_price: bcs.u256(), xcp_profit: bcs.u256(), not_adjusted: bcs.bool()

        })
    };

    static fromFields(fields: Record<string, any>): CurvedPoolConfig { return CurvedPoolConfig.reified().new({ scalingFactor: decodeFromFields(reified.vector("u256"), fields.scaling_factor), initAGammaTime: decodeFromFields("u64", fields.init_A_gamma_time), futureAGammaTime: decodeFromFields("u64", fields.future_A_gamma_time), initAmp: decodeFromFields("u64", fields.init_amp), nextAmp: decodeFromFields("u64", fields.next_amp), initGamma: decodeFromFields("u256", fields.init_gamma), nextGamma: decodeFromFields("u256", fields.next_gamma), midFee: decodeFromFields("u64", fields.mid_fee), outFee: decodeFromFields("u64", fields.out_fee), feeGamma: decodeFromFields("u64", fields.fee_gamma), maHalfTime: decodeFromFields("u256", fields.ma_half_time), allowedExtraProfit: decodeFromFields("u256", fields.allowed_extra_profit), adjustmentStep: decodeFromFields("u256", fields.adjustment_step), priceScale: decodeFromFields(reified.vector("u256"), fields.price_scale), oraclePrices: decodeFromFields(reified.vector("u256"), fields.oracle_prices), lastPrices: decodeFromFields(reified.vector("u256"), fields.last_prices), lastPricesTimestamp: decodeFromFields("u64", fields.last_prices_timestamp), d: decodeFromFields("u256", fields._D), virtualPrice: decodeFromFields("u256", fields.virtual_price), xcpProfit: decodeFromFields("u256", fields.xcp_profit), notAdjusted: decodeFromFields("bool", fields.not_adjusted) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): CurvedPoolConfig {
        if (!isCurvedPoolConfig(item.type)) {
            throw new Error("not a CurvedPoolConfig type");

        }

        return CurvedPoolConfig.reified().new({ scalingFactor: decodeFromFieldsWithTypes(reified.vector("u256"), item.fields.scaling_factor), initAGammaTime: decodeFromFieldsWithTypes("u64", item.fields.init_A_gamma_time), futureAGammaTime: decodeFromFieldsWithTypes("u64", item.fields.future_A_gamma_time), initAmp: decodeFromFieldsWithTypes("u64", item.fields.init_amp), nextAmp: decodeFromFieldsWithTypes("u64", item.fields.next_amp), initGamma: decodeFromFieldsWithTypes("u256", item.fields.init_gamma), nextGamma: decodeFromFieldsWithTypes("u256", item.fields.next_gamma), midFee: decodeFromFieldsWithTypes("u64", item.fields.mid_fee), outFee: decodeFromFieldsWithTypes("u64", item.fields.out_fee), feeGamma: decodeFromFieldsWithTypes("u64", item.fields.fee_gamma), maHalfTime: decodeFromFieldsWithTypes("u256", item.fields.ma_half_time), allowedExtraProfit: decodeFromFieldsWithTypes("u256", item.fields.allowed_extra_profit), adjustmentStep: decodeFromFieldsWithTypes("u256", item.fields.adjustment_step), priceScale: decodeFromFieldsWithTypes(reified.vector("u256"), item.fields.price_scale), oraclePrices: decodeFromFieldsWithTypes(reified.vector("u256"), item.fields.oracle_prices), lastPrices: decodeFromFieldsWithTypes(reified.vector("u256"), item.fields.last_prices), lastPricesTimestamp: decodeFromFieldsWithTypes("u64", item.fields.last_prices_timestamp), d: decodeFromFieldsWithTypes("u256", item.fields._D), virtualPrice: decodeFromFieldsWithTypes("u256", item.fields.virtual_price), xcpProfit: decodeFromFieldsWithTypes("u256", item.fields.xcp_profit), notAdjusted: decodeFromFieldsWithTypes("bool", item.fields.not_adjusted) })
    }

    static fromBcs(data: Uint8Array): CurvedPoolConfig { return CurvedPoolConfig.fromFields(CurvedPoolConfig.bcs.parse(data)) }

    toJSONField() {
        return {

            scalingFactor: fieldToJSON<Vector<"u256">>(`vector<u256>`, this.scalingFactor), initAGammaTime: this.initAGammaTime.toString(), futureAGammaTime: this.futureAGammaTime.toString(), initAmp: this.initAmp.toString(), nextAmp: this.nextAmp.toString(), initGamma: this.initGamma.toString(), nextGamma: this.nextGamma.toString(), midFee: this.midFee.toString(), outFee: this.outFee.toString(), feeGamma: this.feeGamma.toString(), maHalfTime: this.maHalfTime.toString(), allowedExtraProfit: this.allowedExtraProfit.toString(), adjustmentStep: this.adjustmentStep.toString(), priceScale: fieldToJSON<Vector<"u256">>(`vector<u256>`, this.priceScale), oraclePrices: fieldToJSON<Vector<"u256">>(`vector<u256>`, this.oraclePrices), lastPrices: fieldToJSON<Vector<"u256">>(`vector<u256>`, this.lastPrices), lastPricesTimestamp: this.lastPricesTimestamp.toString(), d: this.d.toString(), virtualPrice: this.virtualPrice.toString(), xcpProfit: this.xcpProfit.toString(), notAdjusted: this.notAdjusted,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): CurvedPoolConfig { return CurvedPoolConfig.reified().new({ scalingFactor: decodeFromJSONField(reified.vector("u256"), field.scalingFactor), initAGammaTime: decodeFromJSONField("u64", field.initAGammaTime), futureAGammaTime: decodeFromJSONField("u64", field.futureAGammaTime), initAmp: decodeFromJSONField("u64", field.initAmp), nextAmp: decodeFromJSONField("u64", field.nextAmp), initGamma: decodeFromJSONField("u256", field.initGamma), nextGamma: decodeFromJSONField("u256", field.nextGamma), midFee: decodeFromJSONField("u64", field.midFee), outFee: decodeFromJSONField("u64", field.outFee), feeGamma: decodeFromJSONField("u64", field.feeGamma), maHalfTime: decodeFromJSONField("u256", field.maHalfTime), allowedExtraProfit: decodeFromJSONField("u256", field.allowedExtraProfit), adjustmentStep: decodeFromJSONField("u256", field.adjustmentStep), priceScale: decodeFromJSONField(reified.vector("u256"), field.priceScale), oraclePrices: decodeFromJSONField(reified.vector("u256"), field.oraclePrices), lastPrices: decodeFromJSONField(reified.vector("u256"), field.lastPrices), lastPricesTimestamp: decodeFromJSONField("u64", field.lastPricesTimestamp), d: decodeFromJSONField("u256", field.d), virtualPrice: decodeFromJSONField("u256", field.virtualPrice), xcpProfit: decodeFromJSONField("u256", field.xcpProfit), notAdjusted: decodeFromJSONField("bool", field.notAdjusted) }) }

    static fromJSON(json: Record<string, any>): CurvedPoolConfig {
        if (json.$typeName !== CurvedPoolConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return CurvedPoolConfig.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): CurvedPoolConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurvedPoolConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CurvedPoolConfig object`); } return CurvedPoolConfig.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): CurvedPoolConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCurvedPoolConfig(data.bcs.type)) { throw new Error(`object at is not a CurvedPoolConfig object`); }

            return CurvedPoolConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return CurvedPoolConfig.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<CurvedPoolConfig> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CurvedPoolConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurvedPoolConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CurvedPoolConfig object`); }

        return CurvedPoolConfig.fromSuiObjectData(res.data);
    }

}
