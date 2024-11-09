import * as reified from "../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { bcs, fromB64, fromHEX } from "@mysten/bcs";
import { poolmaths } from ".."

const PUBLISHED_AT = poolmaths.PUBLISHED_AT

const PKG_V1 = poolmaths.PKG_V1
/* ============================== WeightedConfig =============================== */

export function isWeightedConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::weighted_math::WeightedConfig`; }

export interface WeightedConfigFields { weights: ToField<Vector<"u64">>; scalingFactor: ToField<Vector<"u256">>; totalWeight: ToField<"u64">; exitFeePercent: ToField<"u64"> }

export type WeightedConfigReified = Reified<WeightedConfig, WeightedConfigFields>;

export class WeightedConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::weighted_math::WeightedConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = WeightedConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::weighted_math::WeightedConfig`; readonly $typeArgs: []; readonly $isPhantom = WeightedConfig.$isPhantom;

    readonly weights: ToField<Vector<"u64">>; readonly scalingFactor: ToField<Vector<"u256">>; readonly totalWeight: ToField<"u64">; readonly exitFeePercent: ToField<"u64">

    private constructor(typeArgs: [], fields: WeightedConfigFields,) {
        this.$fullTypeName = composeSuiType(WeightedConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::weighted_math::WeightedConfig`; this.$typeArgs = typeArgs;

        this.weights = fields.weights;; this.scalingFactor = fields.scalingFactor;; this.totalWeight = fields.totalWeight;; this.exitFeePercent = fields.exitFeePercent;
    }

    static reified(): WeightedConfigReified { return { typeName: WeightedConfig.$typeName, fullTypeName: composeSuiType(WeightedConfig.$typeName, ...[]) as `${typeof PKG_V1}::weighted_math::WeightedConfig`, typeArgs: [] as [], isPhantom: WeightedConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => WeightedConfig.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => WeightedConfig.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => WeightedConfig.fromBcs(data,), bcs: WeightedConfig.bcs, fromJSONField: (field: any) => WeightedConfig.fromJSONField(field,), fromJSON: (json: Record<string, any>) => WeightedConfig.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => WeightedConfig.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => WeightedConfig.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => WeightedConfig.fetch(client, id,), new: (fields: WeightedConfigFields,) => { return new WeightedConfig([], fields) }, kind: "StructClassReified", } }

    static get r() { return WeightedConfig.reified() }

    static phantom(): PhantomReified<ToTypeStr<WeightedConfig>> { return phantom(WeightedConfig.reified()); } static get p() { return WeightedConfig.phantom() }

    static get bcs() {
        return bcs.struct("WeightedConfig", {

            weights: bcs.vector(bcs.u64()), scaling_factor: bcs.vector(bcs.u256()), total_weight: bcs.u64(), exit_fee_percent: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): WeightedConfig { return WeightedConfig.reified().new({ weights: decodeFromFields(reified.vector("u64"), fields.weights), scalingFactor: decodeFromFields(reified.vector("u256"), fields.scaling_factor), totalWeight: decodeFromFields("u64", fields.total_weight), exitFeePercent: decodeFromFields("u64", fields.exit_fee_percent) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): WeightedConfig {
        if (!isWeightedConfig(item.type)) {
            throw new Error("not a WeightedConfig type");

        }

        return WeightedConfig.reified().new({ weights: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.weights), scalingFactor: decodeFromFieldsWithTypes(reified.vector("u256"), item.fields.scaling_factor), totalWeight: decodeFromFieldsWithTypes("u64", item.fields.total_weight), exitFeePercent: decodeFromFieldsWithTypes("u64", item.fields.exit_fee_percent) })
    }

    static fromBcs(data: Uint8Array): WeightedConfig { return WeightedConfig.fromFields(WeightedConfig.bcs.parse(data)) }

    toJSONField() {
        return {

            weights: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.weights), scalingFactor: fieldToJSON<Vector<"u256">>(`vector<u256>`, this.scalingFactor), totalWeight: this.totalWeight.toString(), exitFeePercent: this.exitFeePercent.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): WeightedConfig { return WeightedConfig.reified().new({ weights: decodeFromJSONField(reified.vector("u64"), field.weights), scalingFactor: decodeFromJSONField(reified.vector("u256"), field.scalingFactor), totalWeight: decodeFromJSONField("u64", field.totalWeight), exitFeePercent: decodeFromJSONField("u64", field.exitFeePercent) }) }

    static fromJSON(json: Record<string, any>): WeightedConfig {
        if (json.$typeName !== WeightedConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return WeightedConfig.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): WeightedConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWeightedConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WeightedConfig object`); } return WeightedConfig.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): WeightedConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWeightedConfig(data.bcs.type)) { throw new Error(`object at is not a WeightedConfig object`); }

            return WeightedConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return WeightedConfig.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<WeightedConfig> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WeightedConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWeightedConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WeightedConfig object`); }

        return WeightedConfig.fromSuiObjectData(res.data);
    }

}
