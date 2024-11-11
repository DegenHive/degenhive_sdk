import * as reified from "../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { bcs, fromB64, fromHEX } from "@mysten/bcs";
import { poolmaths } from ".."

const PUBLISHED_AT = poolmaths.PUBLISHED_AT

const PKG_V1 = poolmaths.PKG_V1
/* ============================== StablePoolConfig =============================== */

export function isStablePoolConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::stable_math::StablePoolConfig`; }

export interface StablePoolConfigFields { initAmpTime: ToField<"u64">; initAmp: ToField<"u64">; nextAmpTime: ToField<"u64">; nextAmp: ToField<"u64">; scalingFactor: ToField<Vector<"u256">> }

export type StablePoolConfigReified = Reified<StablePoolConfig, StablePoolConfigFields>;

export class StablePoolConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::stable_math::StablePoolConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = StablePoolConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::stable_math::StablePoolConfig`; readonly $typeArgs: []; readonly $isPhantom = StablePoolConfig.$isPhantom;

    readonly initAmpTime: ToField<"u64">; readonly initAmp: ToField<"u64">; readonly nextAmpTime: ToField<"u64">; readonly nextAmp: ToField<"u64">; readonly scalingFactor: ToField<Vector<"u256">>

    private constructor(typeArgs: [], fields: StablePoolConfigFields,) {
        this.$fullTypeName = composeSuiType(StablePoolConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::stable_math::StablePoolConfig`; this.$typeArgs = typeArgs;

        this.initAmpTime = fields.initAmpTime;; this.initAmp = fields.initAmp;; this.nextAmpTime = fields.nextAmpTime;; this.nextAmp = fields.nextAmp;; this.scalingFactor = fields.scalingFactor;
    }

    static reified(): StablePoolConfigReified { return { typeName: StablePoolConfig.$typeName, fullTypeName: composeSuiType(StablePoolConfig.$typeName, ...[]) as `${typeof PKG_V1}::stable_math::StablePoolConfig`, typeArgs: [] as [], isPhantom: StablePoolConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StablePoolConfig.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => StablePoolConfig.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => StablePoolConfig.fromBcs(data,), bcs: StablePoolConfig.bcs, fromJSONField: (field: any) => StablePoolConfig.fromJSONField(field,), fromJSON: (json: Record<string, any>) => StablePoolConfig.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => StablePoolConfig.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => StablePoolConfig.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => StablePoolConfig.fetch(client, id,), new: (fields: StablePoolConfigFields,) => { return new StablePoolConfig([], fields) }, kind: "StructClassReified", } }

    static get r() { return StablePoolConfig.reified() }

    static phantom(): PhantomReified<ToTypeStr<StablePoolConfig>> { return phantom(StablePoolConfig.reified()); } static get p() { return StablePoolConfig.phantom() }

    static get bcs() {
        return bcs.struct("StablePoolConfig", {

            init_amp_time: bcs.u64(), init_amp: bcs.u64(), next_amp_time: bcs.u64(), next_amp: bcs.u64(), scaling_factor: bcs.vector(bcs.u256())

        })
    };

    static fromFields(fields: Record<string, any>): StablePoolConfig { return StablePoolConfig.reified().new({ initAmpTime: decodeFromFields("u64", fields.init_amp_time), initAmp: decodeFromFields("u64", fields.init_amp), nextAmpTime: decodeFromFields("u64", fields.next_amp_time), nextAmp: decodeFromFields("u64", fields.next_amp), scalingFactor: decodeFromFields(reified.vector("u256"), fields.scaling_factor) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): StablePoolConfig {
        if (!isStablePoolConfig(item.type)) {
            throw new Error("not a StablePoolConfig type");

        }

        return StablePoolConfig.reified().new({ initAmpTime: decodeFromFieldsWithTypes("u64", item.fields.init_amp_time), initAmp: decodeFromFieldsWithTypes("u64", item.fields.init_amp), nextAmpTime: decodeFromFieldsWithTypes("u64", item.fields.next_amp_time), nextAmp: decodeFromFieldsWithTypes("u64", item.fields.next_amp), scalingFactor: decodeFromFieldsWithTypes(reified.vector("u256"), item.fields.scaling_factor) })
    }

    static fromBcs(data: Uint8Array): StablePoolConfig { return StablePoolConfig.fromFields(StablePoolConfig.bcs.parse(data)) }

    toJSONField() {
        return {

            initAmpTime: this.initAmpTime.toString(), initAmp: this.initAmp.toString(), nextAmpTime: this.nextAmpTime.toString(), nextAmp: this.nextAmp.toString(), scalingFactor: fieldToJSON<Vector<"u256">>(`vector<u256>`, this.scalingFactor),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): StablePoolConfig { return StablePoolConfig.reified().new({ initAmpTime: decodeFromJSONField("u64", field.initAmpTime), initAmp: decodeFromJSONField("u64", field.initAmp), nextAmpTime: decodeFromJSONField("u64", field.nextAmpTime), nextAmp: decodeFromJSONField("u64", field.nextAmp), scalingFactor: decodeFromJSONField(reified.vector("u256"), field.scalingFactor) }) }

    static fromJSON(json: Record<string, any>): StablePoolConfig {
        if (json.$typeName !== StablePoolConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return StablePoolConfig.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): StablePoolConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStablePoolConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StablePoolConfig object`); } return StablePoolConfig.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): StablePoolConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStablePoolConfig(data.bcs.type)) { throw new Error(`object at is not a StablePoolConfig object`); }

            return StablePoolConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return StablePoolConfig.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<StablePoolConfig> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StablePoolConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStablePoolConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StablePoolConfig object`); }

        return StablePoolConfig.fromSuiObjectData(res.data);
    }

}
