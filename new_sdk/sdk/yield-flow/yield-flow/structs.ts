import * as reified from "../../_framework/reified";
import { String as String1 } from "../../_dependencies/source/0x1/ascii/structs";
import { String } from "../../_dependencies/source/0x1/string/structs";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { Balance } from "../../_dependencies/source/0x2/balance/structs";
import { LinkedTable } from "../../_dependencies/source/0x2/linked-table/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { SUI } from "../../_dependencies/source/0x2/sui/structs";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { HIVE } from "../hive/structs";
import { HONEY } from "../honey/structs";
import { PKG_V1 } from "../index";

import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== DecimalPrecisionForCoinTypesWhitelisted =============================== */

export function isDecimalPrecisionForCoinTypesWhitelisted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::DecimalPrecisionForCoinTypesWhitelisted`; }

export interface DecimalPrecisionForCoinTypesWhitelistedFields { coinTypes: ToField<Vector<String>>; decimalPrecisions: ToField<Vector<"u8">> }

export type DecimalPrecisionForCoinTypesWhitelistedReified = Reified<DecimalPrecisionForCoinTypesWhitelisted, DecimalPrecisionForCoinTypesWhitelistedFields>;

export class DecimalPrecisionForCoinTypesWhitelisted implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::DecimalPrecisionForCoinTypesWhitelisted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = DecimalPrecisionForCoinTypesWhitelisted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::DecimalPrecisionForCoinTypesWhitelisted`; readonly $typeArgs: []; readonly $isPhantom = DecimalPrecisionForCoinTypesWhitelisted.$isPhantom;

    readonly coinTypes: ToField<Vector<String>>; readonly decimalPrecisions: ToField<Vector<"u8">>

    private constructor(typeArgs: [], fields: DecimalPrecisionForCoinTypesWhitelistedFields,) {
        this.$fullTypeName = composeSuiType(DecimalPrecisionForCoinTypesWhitelisted.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::DecimalPrecisionForCoinTypesWhitelisted`; this.$typeArgs = typeArgs;

        this.coinTypes = fields.coinTypes;; this.decimalPrecisions = fields.decimalPrecisions;
    }

    static reified(): DecimalPrecisionForCoinTypesWhitelistedReified { return { typeName: DecimalPrecisionForCoinTypesWhitelisted.$typeName, fullTypeName: composeSuiType(DecimalPrecisionForCoinTypesWhitelisted.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::DecimalPrecisionForCoinTypesWhitelisted`, typeArgs: [] as [], isPhantom: DecimalPrecisionForCoinTypesWhitelisted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DecimalPrecisionForCoinTypesWhitelisted.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => DecimalPrecisionForCoinTypesWhitelisted.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => DecimalPrecisionForCoinTypesWhitelisted.fromBcs(data,), bcs: DecimalPrecisionForCoinTypesWhitelisted.bcs, fromJSONField: (field: any) => DecimalPrecisionForCoinTypesWhitelisted.fromJSONField(field,), fromJSON: (json: Record<string, any>) => DecimalPrecisionForCoinTypesWhitelisted.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => DecimalPrecisionForCoinTypesWhitelisted.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => DecimalPrecisionForCoinTypesWhitelisted.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => DecimalPrecisionForCoinTypesWhitelisted.fetch(client, id,), new: (fields: DecimalPrecisionForCoinTypesWhitelistedFields,) => { return new DecimalPrecisionForCoinTypesWhitelisted([], fields) }, kind: "StructClassReified", } }

    static get r() { return DecimalPrecisionForCoinTypesWhitelisted.reified() }

    static phantom(): PhantomReified<ToTypeStr<DecimalPrecisionForCoinTypesWhitelisted>> { return phantom(DecimalPrecisionForCoinTypesWhitelisted.reified()); } static get p() { return DecimalPrecisionForCoinTypesWhitelisted.phantom() }

    static get bcs() {
        return bcs.struct("DecimalPrecisionForCoinTypesWhitelisted", {

            coin_types: bcs.vector(String.bcs), decimal_precisions: bcs.vector(bcs.u8())

        })
    };

    static fromFields(fields: Record<string, any>): DecimalPrecisionForCoinTypesWhitelisted { return DecimalPrecisionForCoinTypesWhitelisted.reified().new({ coinTypes: decodeFromFields(reified.vector(String.reified()), fields.coin_types), decimalPrecisions: decodeFromFields(reified.vector("u8"), fields.decimal_precisions) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): DecimalPrecisionForCoinTypesWhitelisted {
        if (!isDecimalPrecisionForCoinTypesWhitelisted(item.type)) {
            throw new Error("not a DecimalPrecisionForCoinTypesWhitelisted type");

        }

        return DecimalPrecisionForCoinTypesWhitelisted.reified().new({ coinTypes: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.coin_types), decimalPrecisions: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.decimal_precisions) })
    }

    static fromBcs(data: Uint8Array): DecimalPrecisionForCoinTypesWhitelisted { return DecimalPrecisionForCoinTypesWhitelisted.fromFields(DecimalPrecisionForCoinTypesWhitelisted.bcs.parse(data)) }

    toJSONField() {
        return {

            coinTypes: fieldToJSON<Vector<String>>(`vector<${String.$typeName}>`, this.coinTypes), decimalPrecisions: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.decimalPrecisions),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): DecimalPrecisionForCoinTypesWhitelisted { return DecimalPrecisionForCoinTypesWhitelisted.reified().new({ coinTypes: decodeFromJSONField(reified.vector(String.reified()), field.coinTypes), decimalPrecisions: decodeFromJSONField(reified.vector("u8"), field.decimalPrecisions) }) }

    static fromJSON(json: Record<string, any>): DecimalPrecisionForCoinTypesWhitelisted {
        if (json.$typeName !== DecimalPrecisionForCoinTypesWhitelisted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return DecimalPrecisionForCoinTypesWhitelisted.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): DecimalPrecisionForCoinTypesWhitelisted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDecimalPrecisionForCoinTypesWhitelisted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DecimalPrecisionForCoinTypesWhitelisted object`); } return DecimalPrecisionForCoinTypesWhitelisted.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): DecimalPrecisionForCoinTypesWhitelisted {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDecimalPrecisionForCoinTypesWhitelisted(data.bcs.type)) { throw new Error(`object at is not a DecimalPrecisionForCoinTypesWhitelisted object`); }

            return DecimalPrecisionForCoinTypesWhitelisted.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return DecimalPrecisionForCoinTypesWhitelisted.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DecimalPrecisionForCoinTypesWhitelisted> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DecimalPrecisionForCoinTypesWhitelisted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDecimalPrecisionForCoinTypesWhitelisted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DecimalPrecisionForCoinTypesWhitelisted object`); }

        return DecimalPrecisionForCoinTypesWhitelisted.fromSuiObjectData(res.data);
    }

}

/* ============================== DefaultFeeInfo =============================== */

export function isDefaultFeeInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::DefaultFeeInfo`; }

export interface DefaultFeeInfoFields { weightedPoolFee: ToField<FeeInfo>; stablePoolFee: ToField<FeeInfo>; curvedPoolFee: ToField<FeeInfo> }

export type DefaultFeeInfoReified = Reified<DefaultFeeInfo, DefaultFeeInfoFields>;

export class DefaultFeeInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::DefaultFeeInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = DefaultFeeInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::DefaultFeeInfo`; readonly $typeArgs: []; readonly $isPhantom = DefaultFeeInfo.$isPhantom;

    readonly weightedPoolFee: ToField<FeeInfo>; readonly stablePoolFee: ToField<FeeInfo>; readonly curvedPoolFee: ToField<FeeInfo>

    private constructor(typeArgs: [], fields: DefaultFeeInfoFields,) {
        this.$fullTypeName = composeSuiType(DefaultFeeInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::DefaultFeeInfo`; this.$typeArgs = typeArgs;

        this.weightedPoolFee = fields.weightedPoolFee;; this.stablePoolFee = fields.stablePoolFee;; this.curvedPoolFee = fields.curvedPoolFee;
    }

    static reified(): DefaultFeeInfoReified { return { typeName: DefaultFeeInfo.$typeName, fullTypeName: composeSuiType(DefaultFeeInfo.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::DefaultFeeInfo`, typeArgs: [] as [], isPhantom: DefaultFeeInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DefaultFeeInfo.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => DefaultFeeInfo.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => DefaultFeeInfo.fromBcs(data,), bcs: DefaultFeeInfo.bcs, fromJSONField: (field: any) => DefaultFeeInfo.fromJSONField(field,), fromJSON: (json: Record<string, any>) => DefaultFeeInfo.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => DefaultFeeInfo.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => DefaultFeeInfo.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => DefaultFeeInfo.fetch(client, id,), new: (fields: DefaultFeeInfoFields,) => { return new DefaultFeeInfo([], fields) }, kind: "StructClassReified", } }

    static get r() { return DefaultFeeInfo.reified() }

    static phantom(): PhantomReified<ToTypeStr<DefaultFeeInfo>> { return phantom(DefaultFeeInfo.reified()); } static get p() { return DefaultFeeInfo.phantom() }

    static get bcs() {
        return bcs.struct("DefaultFeeInfo", {

            weighted_pool_fee: FeeInfo.bcs, stable_pool_fee: FeeInfo.bcs, curved_pool_fee: FeeInfo.bcs

        })
    };

    static fromFields(fields: Record<string, any>): DefaultFeeInfo { return DefaultFeeInfo.reified().new({ weightedPoolFee: decodeFromFields(FeeInfo.reified(), fields.weighted_pool_fee), stablePoolFee: decodeFromFields(FeeInfo.reified(), fields.stable_pool_fee), curvedPoolFee: decodeFromFields(FeeInfo.reified(), fields.curved_pool_fee) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): DefaultFeeInfo {
        if (!isDefaultFeeInfo(item.type)) {
            throw new Error("not a DefaultFeeInfo type");

        }

        return DefaultFeeInfo.reified().new({ weightedPoolFee: decodeFromFieldsWithTypes(FeeInfo.reified(), item.fields.weighted_pool_fee), stablePoolFee: decodeFromFieldsWithTypes(FeeInfo.reified(), item.fields.stable_pool_fee), curvedPoolFee: decodeFromFieldsWithTypes(FeeInfo.reified(), item.fields.curved_pool_fee) })
    }

    static fromBcs(data: Uint8Array): DefaultFeeInfo { return DefaultFeeInfo.fromFields(DefaultFeeInfo.bcs.parse(data)) }

    toJSONField() {
        return {

            weightedPoolFee: this.weightedPoolFee.toJSONField(), stablePoolFee: this.stablePoolFee.toJSONField(), curvedPoolFee: this.curvedPoolFee.toJSONField(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): DefaultFeeInfo { return DefaultFeeInfo.reified().new({ weightedPoolFee: decodeFromJSONField(FeeInfo.reified(), field.weightedPoolFee), stablePoolFee: decodeFromJSONField(FeeInfo.reified(), field.stablePoolFee), curvedPoolFee: decodeFromJSONField(FeeInfo.reified(), field.curvedPoolFee) }) }

    static fromJSON(json: Record<string, any>): DefaultFeeInfo {
        if (json.$typeName !== DefaultFeeInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return DefaultFeeInfo.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): DefaultFeeInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDefaultFeeInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DefaultFeeInfo object`); } return DefaultFeeInfo.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): DefaultFeeInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDefaultFeeInfo(data.bcs.type)) { throw new Error(`object at is not a DefaultFeeInfo object`); }

            return DefaultFeeInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return DefaultFeeInfo.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DefaultFeeInfo> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DefaultFeeInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDefaultFeeInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DefaultFeeInfo object`); }

        return DefaultFeeInfo.fromSuiObjectData(res.data);
    }

}

/* ============================== DefaultFeeSet =============================== */

export function isDefaultFeeSet(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::DefaultFeeSet`; }

export interface DefaultFeeSetFields { curve: ToField<TypeName>; totalFeeBps: ToField<"u64">; beesFeePct: ToField<"u64"> }

export type DefaultFeeSetReified = Reified<DefaultFeeSet, DefaultFeeSetFields>;

export class DefaultFeeSet implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::DefaultFeeSet`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = DefaultFeeSet.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::DefaultFeeSet`; readonly $typeArgs: []; readonly $isPhantom = DefaultFeeSet.$isPhantom;

    readonly curve: ToField<TypeName>; readonly totalFeeBps: ToField<"u64">; readonly beesFeePct: ToField<"u64">

    private constructor(typeArgs: [], fields: DefaultFeeSetFields,) {
        this.$fullTypeName = composeSuiType(DefaultFeeSet.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::DefaultFeeSet`; this.$typeArgs = typeArgs;

        this.curve = fields.curve;; this.totalFeeBps = fields.totalFeeBps;; this.beesFeePct = fields.beesFeePct;
    }

    static reified(): DefaultFeeSetReified { return { typeName: DefaultFeeSet.$typeName, fullTypeName: composeSuiType(DefaultFeeSet.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::DefaultFeeSet`, typeArgs: [] as [], isPhantom: DefaultFeeSet.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DefaultFeeSet.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => DefaultFeeSet.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => DefaultFeeSet.fromBcs(data,), bcs: DefaultFeeSet.bcs, fromJSONField: (field: any) => DefaultFeeSet.fromJSONField(field,), fromJSON: (json: Record<string, any>) => DefaultFeeSet.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => DefaultFeeSet.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => DefaultFeeSet.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => DefaultFeeSet.fetch(client, id,), new: (fields: DefaultFeeSetFields,) => { return new DefaultFeeSet([], fields) }, kind: "StructClassReified", } }

    static get r() { return DefaultFeeSet.reified() }

    static phantom(): PhantomReified<ToTypeStr<DefaultFeeSet>> { return phantom(DefaultFeeSet.reified()); } static get p() { return DefaultFeeSet.phantom() }

    static get bcs() {
        return bcs.struct("DefaultFeeSet", {

            curve: TypeName.bcs, total_fee_bps: bcs.u64(), bees_fee_pct: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): DefaultFeeSet { return DefaultFeeSet.reified().new({ curve: decodeFromFields(TypeName.reified(), fields.curve), totalFeeBps: decodeFromFields("u64", fields.total_fee_bps), beesFeePct: decodeFromFields("u64", fields.bees_fee_pct) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): DefaultFeeSet {
        if (!isDefaultFeeSet(item.type)) {
            throw new Error("not a DefaultFeeSet type");

        }

        return DefaultFeeSet.reified().new({ curve: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.curve), totalFeeBps: decodeFromFieldsWithTypes("u64", item.fields.total_fee_bps), beesFeePct: decodeFromFieldsWithTypes("u64", item.fields.bees_fee_pct) })
    }

    static fromBcs(data: Uint8Array): DefaultFeeSet { return DefaultFeeSet.fromFields(DefaultFeeSet.bcs.parse(data)) }

    toJSONField() {
        return {

            curve: this.curve.toJSONField(), totalFeeBps: this.totalFeeBps.toString(), beesFeePct: this.beesFeePct.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): DefaultFeeSet { return DefaultFeeSet.reified().new({ curve: decodeFromJSONField(TypeName.reified(), field.curve), totalFeeBps: decodeFromJSONField("u64", field.totalFeeBps), beesFeePct: decodeFromJSONField("u64", field.beesFeePct) }) }

    static fromJSON(json: Record<string, any>): DefaultFeeSet {
        if (json.$typeName !== DefaultFeeSet.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return DefaultFeeSet.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): DefaultFeeSet { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDefaultFeeSet(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DefaultFeeSet object`); } return DefaultFeeSet.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): DefaultFeeSet {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDefaultFeeSet(data.bcs.type)) { throw new Error(`object at is not a DefaultFeeSet object`); }

            return DefaultFeeSet.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return DefaultFeeSet.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DefaultFeeSet> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DefaultFeeSet object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDefaultFeeSet(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DefaultFeeSet object`); }

        return DefaultFeeSet.fromSuiObjectData(res.data);
    }

}

/* ============================== DeployerCap =============================== */

export function isDeployerCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::DeployerCap`; }

export interface DeployerCapFields { id: ToField<UID>; managerInitialized: ToField<"bool">; vaultInitialized: ToField<"bool">; hiddenWorldInitialized: ToField<"bool"> }

export type DeployerCapReified = Reified<DeployerCap, DeployerCapFields>;

export class DeployerCap implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::DeployerCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = DeployerCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::DeployerCap`; readonly $typeArgs: []; readonly $isPhantom = DeployerCap.$isPhantom;

    readonly id: ToField<UID>; readonly managerInitialized: ToField<"bool">; readonly vaultInitialized: ToField<"bool">; readonly hiddenWorldInitialized: ToField<"bool">

    private constructor(typeArgs: [], fields: DeployerCapFields,) {
        this.$fullTypeName = composeSuiType(DeployerCap.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::DeployerCap`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.managerInitialized = fields.managerInitialized;; this.vaultInitialized = fields.vaultInitialized;; this.hiddenWorldInitialized = fields.hiddenWorldInitialized;
    }

    static reified(): DeployerCapReified { return { typeName: DeployerCap.$typeName, fullTypeName: composeSuiType(DeployerCap.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::DeployerCap`, typeArgs: [] as [], isPhantom: DeployerCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DeployerCap.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => DeployerCap.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => DeployerCap.fromBcs(data,), bcs: DeployerCap.bcs, fromJSONField: (field: any) => DeployerCap.fromJSONField(field,), fromJSON: (json: Record<string, any>) => DeployerCap.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => DeployerCap.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => DeployerCap.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => DeployerCap.fetch(client, id,), new: (fields: DeployerCapFields,) => { return new DeployerCap([], fields) }, kind: "StructClassReified", } }

    static get r() { return DeployerCap.reified() }

    static phantom(): PhantomReified<ToTypeStr<DeployerCap>> { return phantom(DeployerCap.reified()); } static get p() { return DeployerCap.phantom() }

    static get bcs() {
        return bcs.struct("DeployerCap", {

            id: UID.bcs, manager_initialized: bcs.bool(), vault_initialized: bcs.bool(), hidden_world_initialized: bcs.bool()

        })
    };

    static fromFields(fields: Record<string, any>): DeployerCap { return DeployerCap.reified().new({ id: decodeFromFields(UID.reified(), fields.id), managerInitialized: decodeFromFields("bool", fields.manager_initialized), vaultInitialized: decodeFromFields("bool", fields.vault_initialized), hiddenWorldInitialized: decodeFromFields("bool", fields.hidden_world_initialized) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): DeployerCap {
        if (!isDeployerCap(item.type)) {
            throw new Error("not a DeployerCap type");

        }

        return DeployerCap.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), managerInitialized: decodeFromFieldsWithTypes("bool", item.fields.manager_initialized), vaultInitialized: decodeFromFieldsWithTypes("bool", item.fields.vault_initialized), hiddenWorldInitialized: decodeFromFieldsWithTypes("bool", item.fields.hidden_world_initialized) })
    }

    static fromBcs(data: Uint8Array): DeployerCap { return DeployerCap.fromFields(DeployerCap.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, managerInitialized: this.managerInitialized, vaultInitialized: this.vaultInitialized, hiddenWorldInitialized: this.hiddenWorldInitialized,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): DeployerCap { return DeployerCap.reified().new({ id: decodeFromJSONField(UID.reified(), field.id), managerInitialized: decodeFromJSONField("bool", field.managerInitialized), vaultInitialized: decodeFromJSONField("bool", field.vaultInitialized), hiddenWorldInitialized: decodeFromJSONField("bool", field.hiddenWorldInitialized) }) }

    static fromJSON(json: Record<string, any>): DeployerCap {
        if (json.$typeName !== DeployerCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return DeployerCap.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): DeployerCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDeployerCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DeployerCap object`); } return DeployerCap.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): DeployerCap {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDeployerCap(data.bcs.type)) { throw new Error(`object at is not a DeployerCap object`); }

            return DeployerCap.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return DeployerCap.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DeployerCap> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DeployerCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDeployerCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DeployerCap object`); }

        return DeployerCap.fromSuiObjectData(res.data);
    }

}

/* ============================== DragonDaoCapability =============================== */

export function isDragonDaoCapability(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::DragonDaoCapability`; }

export interface DragonDaoCapabilityFields { id: ToField<UID> }

export type DragonDaoCapabilityReified = Reified<DragonDaoCapability, DragonDaoCapabilityFields>;

export class DragonDaoCapability implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::DragonDaoCapability`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = DragonDaoCapability.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::DragonDaoCapability`; readonly $typeArgs: []; readonly $isPhantom = DragonDaoCapability.$isPhantom;

    readonly id: ToField<UID>

    private constructor(typeArgs: [], fields: DragonDaoCapabilityFields,) {
        this.$fullTypeName = composeSuiType(DragonDaoCapability.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::DragonDaoCapability`; this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): DragonDaoCapabilityReified { return { typeName: DragonDaoCapability.$typeName, fullTypeName: composeSuiType(DragonDaoCapability.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::DragonDaoCapability`, typeArgs: [] as [], isPhantom: DragonDaoCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonDaoCapability.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonDaoCapability.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => DragonDaoCapability.fromBcs(data,), bcs: DragonDaoCapability.bcs, fromJSONField: (field: any) => DragonDaoCapability.fromJSONField(field,), fromJSON: (json: Record<string, any>) => DragonDaoCapability.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => DragonDaoCapability.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => DragonDaoCapability.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => DragonDaoCapability.fetch(client, id,), new: (fields: DragonDaoCapabilityFields,) => { return new DragonDaoCapability([], fields) }, kind: "StructClassReified", } }

    static get r() { return DragonDaoCapability.reified() }

    static phantom(): PhantomReified<ToTypeStr<DragonDaoCapability>> { return phantom(DragonDaoCapability.reified()); } static get p() { return DragonDaoCapability.phantom() }

    static get bcs() {
        return bcs.struct("DragonDaoCapability", {

            id: UID.bcs

        })
    };

    static fromFields(fields: Record<string, any>): DragonDaoCapability { return DragonDaoCapability.reified().new({ id: decodeFromFields(UID.reified(), fields.id) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): DragonDaoCapability {
        if (!isDragonDaoCapability(item.type)) {
            throw new Error("not a DragonDaoCapability type");

        }

        return DragonDaoCapability.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) })
    }

    static fromBcs(data: Uint8Array): DragonDaoCapability { return DragonDaoCapability.fromFields(DragonDaoCapability.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): DragonDaoCapability { return DragonDaoCapability.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) }) }

    static fromJSON(json: Record<string, any>): DragonDaoCapability {
        if (json.$typeName !== DragonDaoCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return DragonDaoCapability.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): DragonDaoCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonDaoCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonDaoCapability object`); } return DragonDaoCapability.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): DragonDaoCapability {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonDaoCapability(data.bcs.type)) { throw new Error(`object at is not a DragonDaoCapability object`); }

            return DragonDaoCapability.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return DragonDaoCapability.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DragonDaoCapability> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonDaoCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonDaoCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonDaoCapability object`); }

        return DragonDaoCapability.fromSuiObjectData(res.data);
    }

}

/* ============================== DragonFoodCapability =============================== */

export function isDragonFoodCapability(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::DragonFoodCapability`; }

export interface DragonFoodCapabilityFields { id: ToField<UID> }

export type DragonFoodCapabilityReified = Reified<DragonFoodCapability, DragonFoodCapabilityFields>;

export class DragonFoodCapability implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::DragonFoodCapability`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = DragonFoodCapability.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::DragonFoodCapability`; readonly $typeArgs: []; readonly $isPhantom = DragonFoodCapability.$isPhantom;

    readonly id: ToField<UID>

    private constructor(typeArgs: [], fields: DragonFoodCapabilityFields,) {
        this.$fullTypeName = composeSuiType(DragonFoodCapability.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::DragonFoodCapability`; this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): DragonFoodCapabilityReified { return { typeName: DragonFoodCapability.$typeName, fullTypeName: composeSuiType(DragonFoodCapability.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::DragonFoodCapability`, typeArgs: [] as [], isPhantom: DragonFoodCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonFoodCapability.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonFoodCapability.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => DragonFoodCapability.fromBcs(data,), bcs: DragonFoodCapability.bcs, fromJSONField: (field: any) => DragonFoodCapability.fromJSONField(field,), fromJSON: (json: Record<string, any>) => DragonFoodCapability.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => DragonFoodCapability.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => DragonFoodCapability.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => DragonFoodCapability.fetch(client, id,), new: (fields: DragonFoodCapabilityFields,) => { return new DragonFoodCapability([], fields) }, kind: "StructClassReified", } }

    static get r() { return DragonFoodCapability.reified() }

    static phantom(): PhantomReified<ToTypeStr<DragonFoodCapability>> { return phantom(DragonFoodCapability.reified()); } static get p() { return DragonFoodCapability.phantom() }

    static get bcs() {
        return bcs.struct("DragonFoodCapability", {

            id: UID.bcs

        })
    };

    static fromFields(fields: Record<string, any>): DragonFoodCapability { return DragonFoodCapability.reified().new({ id: decodeFromFields(UID.reified(), fields.id) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): DragonFoodCapability {
        if (!isDragonFoodCapability(item.type)) {
            throw new Error("not a DragonFoodCapability type");

        }

        return DragonFoodCapability.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) })
    }

    static fromBcs(data: Uint8Array): DragonFoodCapability { return DragonFoodCapability.fromFields(DragonFoodCapability.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): DragonFoodCapability { return DragonFoodCapability.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) }) }

    static fromJSON(json: Record<string, any>): DragonFoodCapability {
        if (json.$typeName !== DragonFoodCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return DragonFoodCapability.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): DragonFoodCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonFoodCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonFoodCapability object`); } return DragonFoodCapability.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): DragonFoodCapability {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDragonFoodCapability(data.bcs.type)) { throw new Error(`object at is not a DragonFoodCapability object`); }

            return DragonFoodCapability.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return DragonFoodCapability.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<DragonFoodCapability> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonFoodCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonFoodCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonFoodCapability object`); }

        return DragonFoodCapability.fromSuiObjectData(res.data);
    }

}

/* ============================== FeeCollectedForCoin =============================== */

export function isFeeCollectedForCoin(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::FeeCollectedForCoin`; }

export interface FeeCollectedForCoinFields { token: ToField<TypeName>; amount: ToField<"u64"> }

export type FeeCollectedForCoinReified = Reified<FeeCollectedForCoin, FeeCollectedForCoinFields>;

export class FeeCollectedForCoin implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::FeeCollectedForCoin`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = FeeCollectedForCoin.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::FeeCollectedForCoin`; readonly $typeArgs: []; readonly $isPhantom = FeeCollectedForCoin.$isPhantom;

    readonly token: ToField<TypeName>; readonly amount: ToField<"u64">

    private constructor(typeArgs: [], fields: FeeCollectedForCoinFields,) {
        this.$fullTypeName = composeSuiType(FeeCollectedForCoin.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::FeeCollectedForCoin`; this.$typeArgs = typeArgs;

        this.token = fields.token;; this.amount = fields.amount;
    }

    static reified(): FeeCollectedForCoinReified { return { typeName: FeeCollectedForCoin.$typeName, fullTypeName: composeSuiType(FeeCollectedForCoin.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::FeeCollectedForCoin`, typeArgs: [] as [], isPhantom: FeeCollectedForCoin.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeeCollectedForCoin.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeCollectedForCoin.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => FeeCollectedForCoin.fromBcs(data,), bcs: FeeCollectedForCoin.bcs, fromJSONField: (field: any) => FeeCollectedForCoin.fromJSONField(field,), fromJSON: (json: Record<string, any>) => FeeCollectedForCoin.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => FeeCollectedForCoin.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => FeeCollectedForCoin.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => FeeCollectedForCoin.fetch(client, id,), new: (fields: FeeCollectedForCoinFields,) => { return new FeeCollectedForCoin([], fields) }, kind: "StructClassReified", } }

    static get r() { return FeeCollectedForCoin.reified() }

    static phantom(): PhantomReified<ToTypeStr<FeeCollectedForCoin>> { return phantom(FeeCollectedForCoin.reified()); } static get p() { return FeeCollectedForCoin.phantom() }

    static get bcs() {
        return bcs.struct("FeeCollectedForCoin", {

            token: TypeName.bcs, amount: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): FeeCollectedForCoin { return FeeCollectedForCoin.reified().new({ token: decodeFromFields(TypeName.reified(), fields.token), amount: decodeFromFields("u64", fields.amount) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): FeeCollectedForCoin {
        if (!isFeeCollectedForCoin(item.type)) {
            throw new Error("not a FeeCollectedForCoin type");

        }

        return FeeCollectedForCoin.reified().new({ token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) })
    }

    static fromBcs(data: Uint8Array): FeeCollectedForCoin { return FeeCollectedForCoin.fromFields(FeeCollectedForCoin.bcs.parse(data)) }

    toJSONField() {
        return {

            token: this.token.toJSONField(), amount: this.amount.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): FeeCollectedForCoin { return FeeCollectedForCoin.reified().new({ token: decodeFromJSONField(TypeName.reified(), field.token), amount: decodeFromJSONField("u64", field.amount) }) }

    static fromJSON(json: Record<string, any>): FeeCollectedForCoin {
        if (json.$typeName !== FeeCollectedForCoin.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return FeeCollectedForCoin.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): FeeCollectedForCoin { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeCollectedForCoin(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeCollectedForCoin object`); } return FeeCollectedForCoin.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): FeeCollectedForCoin {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeCollectedForCoin(data.bcs.type)) { throw new Error(`object at is not a FeeCollectedForCoin object`); }

            return FeeCollectedForCoin.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return FeeCollectedForCoin.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<FeeCollectedForCoin> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeCollectedForCoin object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeCollectedForCoin(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeCollectedForCoin object`); }

        return FeeCollectedForCoin.fromSuiObjectData(res.data);
    }

}

/* ============================== FeeCollector =============================== */

export function isFeeCollector(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::yield_flow::FeeCollector` + '<'); }

export interface FeeCollectorFields<X extends PhantomTypeArgument> { id: ToField<UID>; balance: ToField<Balance<X>> }

export type FeeCollectorReified<X extends PhantomTypeArgument> = Reified<FeeCollector<X>, FeeCollectorFields<X>>;

export class FeeCollector<X extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::FeeCollector`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

    readonly $typeName = FeeCollector.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::FeeCollector<${PhantomToTypeStr<X>}>`; readonly $typeArgs: [PhantomToTypeStr<X>]; readonly $isPhantom = FeeCollector.$isPhantom;

    readonly id: ToField<UID>; readonly balance: ToField<Balance<X>>

    private constructor(typeArgs: [PhantomToTypeStr<X>], fields: FeeCollectorFields<X>,) {
        this.$fullTypeName = composeSuiType(FeeCollector.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::FeeCollector<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.balance = fields.balance;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>>(X: X): FeeCollectorReified<ToPhantomTypeArgument<X>> { return { typeName: FeeCollector.$typeName, fullTypeName: composeSuiType(FeeCollector.$typeName, ...[extractType(X)]) as `${typeof PKG_V1}::yield_flow::FeeCollector<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [extractType(X)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], isPhantom: FeeCollector.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => FeeCollector.fromFields(X, fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeCollector.fromFieldsWithTypes(X, item,), fromBcs: (data: Uint8Array) => FeeCollector.fromBcs(X, data,), bcs: FeeCollector.bcs, fromJSONField: (field: any) => FeeCollector.fromJSONField(X, field,), fromJSON: (json: Record<string, any>) => FeeCollector.fromJSON(X, json,), fromSuiParsedData: (content: SuiParsedData) => FeeCollector.fromSuiParsedData(X, content,), fromSuiObjectData: (content: SuiObjectData) => FeeCollector.fromSuiObjectData(X, content,), fetch: async (client: SuiClient, id: string) => FeeCollector.fetch(client, X, id,), new: (fields: FeeCollectorFields<ToPhantomTypeArgument<X>>,) => { return new FeeCollector([extractType(X)], fields) }, kind: "StructClassReified", } }

    static get r() { return FeeCollector.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>>(X: X): PhantomReified<ToTypeStr<FeeCollector<ToPhantomTypeArgument<X>>>> { return phantom(FeeCollector.reified(X)); } static get p() { return FeeCollector.phantom }

    static get bcs() {
        return bcs.struct("FeeCollector", {

            id: UID.bcs, balance: Balance.bcs

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, fields: Record<string, any>): FeeCollector<ToPhantomTypeArgument<X>> { return FeeCollector.reified(typeArg,).new({ id: decodeFromFields(UID.reified(), fields.id), balance: decodeFromFields(Balance.reified(typeArg), fields.balance) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, item: FieldsWithTypes): FeeCollector<ToPhantomTypeArgument<X>> {
        if (!isFeeCollector(item.type)) {
            throw new Error("not a FeeCollector type");

        } assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return FeeCollector.reified(typeArg,).new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), balance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.balance) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, data: Uint8Array): FeeCollector<ToPhantomTypeArgument<X>> { return FeeCollector.fromFields(typeArg, FeeCollector.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, balance: this.balance.toJSONField(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, field: any): FeeCollector<ToPhantomTypeArgument<X>> { return FeeCollector.reified(typeArg,).new({ id: decodeFromJSONField(UID.reified(), field.id), balance: decodeFromJSONField(Balance.reified(typeArg), field.balance) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, json: Record<string, any>): FeeCollector<ToPhantomTypeArgument<X>> {
        if (json.$typeName !== FeeCollector.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(FeeCollector.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg],)

        return FeeCollector.fromJSONField(typeArg, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, content: SuiParsedData): FeeCollector<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeCollector(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeCollector object`); } return FeeCollector.fromFieldsWithTypes(typeArg, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, data: SuiObjectData): FeeCollector<ToPhantomTypeArgument<X>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeCollector(data.bcs.type)) { throw new Error(`object at is not a FeeCollector object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

            return FeeCollector.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return FeeCollector.fromSuiParsedData(typeArg, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: X, id: string): Promise<FeeCollector<ToPhantomTypeArgument<X>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeCollector object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeCollector(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeCollector object`); }

        return FeeCollector.fromSuiObjectData(typeArg, res.data);
    }

}

/* ============================== FeeDistributionPctUpdated =============================== */

export function isFeeDistributionPctUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::FeeDistributionPctUpdated`; }

export interface FeeDistributionPctUpdatedFields { treasuryFeePercent: ToField<"u64">; honeyBuybackPct: ToField<"u64">; voterIncentivesPct: ToField<"u64"> }

export type FeeDistributionPctUpdatedReified = Reified<FeeDistributionPctUpdated, FeeDistributionPctUpdatedFields>;

export class FeeDistributionPctUpdated implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::FeeDistributionPctUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = FeeDistributionPctUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::FeeDistributionPctUpdated`; readonly $typeArgs: []; readonly $isPhantom = FeeDistributionPctUpdated.$isPhantom;

    readonly treasuryFeePercent: ToField<"u64">; readonly honeyBuybackPct: ToField<"u64">; readonly voterIncentivesPct: ToField<"u64">

    private constructor(typeArgs: [], fields: FeeDistributionPctUpdatedFields,) {
        this.$fullTypeName = composeSuiType(FeeDistributionPctUpdated.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::FeeDistributionPctUpdated`; this.$typeArgs = typeArgs;

        this.treasuryFeePercent = fields.treasuryFeePercent;; this.honeyBuybackPct = fields.honeyBuybackPct;; this.voterIncentivesPct = fields.voterIncentivesPct;
    }

    static reified(): FeeDistributionPctUpdatedReified { return { typeName: FeeDistributionPctUpdated.$typeName, fullTypeName: composeSuiType(FeeDistributionPctUpdated.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::FeeDistributionPctUpdated`, typeArgs: [] as [], isPhantom: FeeDistributionPctUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeeDistributionPctUpdated.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeDistributionPctUpdated.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => FeeDistributionPctUpdated.fromBcs(data,), bcs: FeeDistributionPctUpdated.bcs, fromJSONField: (field: any) => FeeDistributionPctUpdated.fromJSONField(field,), fromJSON: (json: Record<string, any>) => FeeDistributionPctUpdated.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => FeeDistributionPctUpdated.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => FeeDistributionPctUpdated.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => FeeDistributionPctUpdated.fetch(client, id,), new: (fields: FeeDistributionPctUpdatedFields,) => { return new FeeDistributionPctUpdated([], fields) }, kind: "StructClassReified", } }

    static get r() { return FeeDistributionPctUpdated.reified() }

    static phantom(): PhantomReified<ToTypeStr<FeeDistributionPctUpdated>> { return phantom(FeeDistributionPctUpdated.reified()); } static get p() { return FeeDistributionPctUpdated.phantom() }

    static get bcs() {
        return bcs.struct("FeeDistributionPctUpdated", {

            treasury_fee_percent: bcs.u64(), honey_buyback_pct: bcs.u64(), voter_incentives_pct: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): FeeDistributionPctUpdated { return FeeDistributionPctUpdated.reified().new({ treasuryFeePercent: decodeFromFields("u64", fields.treasury_fee_percent), honeyBuybackPct: decodeFromFields("u64", fields.honey_buyback_pct), voterIncentivesPct: decodeFromFields("u64", fields.voter_incentives_pct) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): FeeDistributionPctUpdated {
        if (!isFeeDistributionPctUpdated(item.type)) {
            throw new Error("not a FeeDistributionPctUpdated type");

        }

        return FeeDistributionPctUpdated.reified().new({ treasuryFeePercent: decodeFromFieldsWithTypes("u64", item.fields.treasury_fee_percent), honeyBuybackPct: decodeFromFieldsWithTypes("u64", item.fields.honey_buyback_pct), voterIncentivesPct: decodeFromFieldsWithTypes("u64", item.fields.voter_incentives_pct) })
    }

    static fromBcs(data: Uint8Array): FeeDistributionPctUpdated { return FeeDistributionPctUpdated.fromFields(FeeDistributionPctUpdated.bcs.parse(data)) }

    toJSONField() {
        return {

            treasuryFeePercent: this.treasuryFeePercent.toString(), honeyBuybackPct: this.honeyBuybackPct.toString(), voterIncentivesPct: this.voterIncentivesPct.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): FeeDistributionPctUpdated { return FeeDistributionPctUpdated.reified().new({ treasuryFeePercent: decodeFromJSONField("u64", field.treasuryFeePercent), honeyBuybackPct: decodeFromJSONField("u64", field.honeyBuybackPct), voterIncentivesPct: decodeFromJSONField("u64", field.voterIncentivesPct) }) }

    static fromJSON(json: Record<string, any>): FeeDistributionPctUpdated {
        if (json.$typeName !== FeeDistributionPctUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return FeeDistributionPctUpdated.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): FeeDistributionPctUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeDistributionPctUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeDistributionPctUpdated object`); } return FeeDistributionPctUpdated.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): FeeDistributionPctUpdated {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeDistributionPctUpdated(data.bcs.type)) { throw new Error(`object at is not a FeeDistributionPctUpdated object`); }

            return FeeDistributionPctUpdated.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return FeeDistributionPctUpdated.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<FeeDistributionPctUpdated> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeDistributionPctUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeDistributionPctUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeDistributionPctUpdated object`); }

        return FeeDistributionPctUpdated.fromSuiObjectData(res.data);
    }

}

/* ============================== FeeExtractedForCoin =============================== */

export function isFeeExtractedForCoin(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::FeeExtractedForCoin`; }

export interface FeeExtractedForCoinFields { token: ToField<TypeName>; amount: ToField<"u64"> }

export type FeeExtractedForCoinReified = Reified<FeeExtractedForCoin, FeeExtractedForCoinFields>;

export class FeeExtractedForCoin implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::FeeExtractedForCoin`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = FeeExtractedForCoin.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::FeeExtractedForCoin`; readonly $typeArgs: []; readonly $isPhantom = FeeExtractedForCoin.$isPhantom;

    readonly token: ToField<TypeName>; readonly amount: ToField<"u64">

    private constructor(typeArgs: [], fields: FeeExtractedForCoinFields,) {
        this.$fullTypeName = composeSuiType(FeeExtractedForCoin.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::FeeExtractedForCoin`; this.$typeArgs = typeArgs;

        this.token = fields.token;; this.amount = fields.amount;
    }

    static reified(): FeeExtractedForCoinReified { return { typeName: FeeExtractedForCoin.$typeName, fullTypeName: composeSuiType(FeeExtractedForCoin.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::FeeExtractedForCoin`, typeArgs: [] as [], isPhantom: FeeExtractedForCoin.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeeExtractedForCoin.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeExtractedForCoin.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => FeeExtractedForCoin.fromBcs(data,), bcs: FeeExtractedForCoin.bcs, fromJSONField: (field: any) => FeeExtractedForCoin.fromJSONField(field,), fromJSON: (json: Record<string, any>) => FeeExtractedForCoin.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => FeeExtractedForCoin.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => FeeExtractedForCoin.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => FeeExtractedForCoin.fetch(client, id,), new: (fields: FeeExtractedForCoinFields,) => { return new FeeExtractedForCoin([], fields) }, kind: "StructClassReified", } }

    static get r() { return FeeExtractedForCoin.reified() }

    static phantom(): PhantomReified<ToTypeStr<FeeExtractedForCoin>> { return phantom(FeeExtractedForCoin.reified()); } static get p() { return FeeExtractedForCoin.phantom() }

    static get bcs() {
        return bcs.struct("FeeExtractedForCoin", {

            token: TypeName.bcs, amount: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): FeeExtractedForCoin { return FeeExtractedForCoin.reified().new({ token: decodeFromFields(TypeName.reified(), fields.token), amount: decodeFromFields("u64", fields.amount) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): FeeExtractedForCoin {
        if (!isFeeExtractedForCoin(item.type)) {
            throw new Error("not a FeeExtractedForCoin type");

        }

        return FeeExtractedForCoin.reified().new({ token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) })
    }

    static fromBcs(data: Uint8Array): FeeExtractedForCoin { return FeeExtractedForCoin.fromFields(FeeExtractedForCoin.bcs.parse(data)) }

    toJSONField() {
        return {

            token: this.token.toJSONField(), amount: this.amount.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): FeeExtractedForCoin { return FeeExtractedForCoin.reified().new({ token: decodeFromJSONField(TypeName.reified(), field.token), amount: decodeFromJSONField("u64", field.amount) }) }

    static fromJSON(json: Record<string, any>): FeeExtractedForCoin {
        if (json.$typeName !== FeeExtractedForCoin.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return FeeExtractedForCoin.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): FeeExtractedForCoin { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeExtractedForCoin(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeExtractedForCoin object`); } return FeeExtractedForCoin.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): FeeExtractedForCoin {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeExtractedForCoin(data.bcs.type)) { throw new Error(`object at is not a FeeExtractedForCoin object`); }

            return FeeExtractedForCoin.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return FeeExtractedForCoin.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<FeeExtractedForCoin> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeExtractedForCoin object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeExtractedForCoin(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeExtractedForCoin object`); }

        return FeeExtractedForCoin.fromSuiObjectData(res.data);
    }

}

/* ============================== FeeInfo =============================== */

export function isFeeInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::FeeInfo`; }

export interface FeeInfoFields { totalFeeBps: ToField<"u64">; beesFeePct: ToField<"u64"> }

export type FeeInfoReified = Reified<FeeInfo, FeeInfoFields>;

export class FeeInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::FeeInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = FeeInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::FeeInfo`; readonly $typeArgs: []; readonly $isPhantom = FeeInfo.$isPhantom;

    readonly totalFeeBps: ToField<"u64">; readonly beesFeePct: ToField<"u64">

    private constructor(typeArgs: [], fields: FeeInfoFields,) {
        this.$fullTypeName = composeSuiType(FeeInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::FeeInfo`; this.$typeArgs = typeArgs;

        this.totalFeeBps = fields.totalFeeBps;; this.beesFeePct = fields.beesFeePct;
    }

    static reified(): FeeInfoReified { return { typeName: FeeInfo.$typeName, fullTypeName: composeSuiType(FeeInfo.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::FeeInfo`, typeArgs: [] as [], isPhantom: FeeInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeeInfo.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeInfo.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => FeeInfo.fromBcs(data,), bcs: FeeInfo.bcs, fromJSONField: (field: any) => FeeInfo.fromJSONField(field,), fromJSON: (json: Record<string, any>) => FeeInfo.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => FeeInfo.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => FeeInfo.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => FeeInfo.fetch(client, id,), new: (fields: FeeInfoFields,) => { return new FeeInfo([], fields) }, kind: "StructClassReified", } }

    static get r() { return FeeInfo.reified() }

    static phantom(): PhantomReified<ToTypeStr<FeeInfo>> { return phantom(FeeInfo.reified()); } static get p() { return FeeInfo.phantom() }

    static get bcs() {
        return bcs.struct("FeeInfo", {

            total_fee_bps: bcs.u64(), bees_fee_pct: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): FeeInfo { return FeeInfo.reified().new({ totalFeeBps: decodeFromFields("u64", fields.total_fee_bps), beesFeePct: decodeFromFields("u64", fields.bees_fee_pct) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): FeeInfo {
        if (!isFeeInfo(item.type)) {
            throw new Error("not a FeeInfo type");

        }

        return FeeInfo.reified().new({ totalFeeBps: decodeFromFieldsWithTypes("u64", item.fields.total_fee_bps), beesFeePct: decodeFromFieldsWithTypes("u64", item.fields.bees_fee_pct) })
    }

    static fromBcs(data: Uint8Array): FeeInfo { return FeeInfo.fromFields(FeeInfo.bcs.parse(data)) }

    toJSONField() {
        return {

            totalFeeBps: this.totalFeeBps.toString(), beesFeePct: this.beesFeePct.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): FeeInfo { return FeeInfo.reified().new({ totalFeeBps: decodeFromJSONField("u64", field.totalFeeBps), beesFeePct: decodeFromJSONField("u64", field.beesFeePct) }) }

    static fromJSON(json: Record<string, any>): FeeInfo {
        if (json.$typeName !== FeeInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return FeeInfo.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): FeeInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeInfo object`); } return FeeInfo.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): FeeInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFeeInfo(data.bcs.type)) { throw new Error(`object at is not a FeeInfo object`); }

            return FeeInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return FeeInfo.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<FeeInfo> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeInfo object`); }

        return FeeInfo.fromSuiObjectData(res.data);
    }

}

/* ============================== HiddenWorldCapability =============================== */

export function isHiddenWorldCapability(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::HiddenWorldCapability`; }

export interface HiddenWorldCapabilityFields { id: ToField<UID> }

export type HiddenWorldCapabilityReified = Reified<HiddenWorldCapability, HiddenWorldCapabilityFields>;

export class HiddenWorldCapability implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::HiddenWorldCapability`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = HiddenWorldCapability.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::HiddenWorldCapability`; readonly $typeArgs: []; readonly $isPhantom = HiddenWorldCapability.$isPhantom;

    readonly id: ToField<UID>

    private constructor(typeArgs: [], fields: HiddenWorldCapabilityFields,) {
        this.$fullTypeName = composeSuiType(HiddenWorldCapability.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::HiddenWorldCapability`; this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): HiddenWorldCapabilityReified { return { typeName: HiddenWorldCapability.$typeName, fullTypeName: composeSuiType(HiddenWorldCapability.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::HiddenWorldCapability`, typeArgs: [] as [], isPhantom: HiddenWorldCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiddenWorldCapability.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => HiddenWorldCapability.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => HiddenWorldCapability.fromBcs(data,), bcs: HiddenWorldCapability.bcs, fromJSONField: (field: any) => HiddenWorldCapability.fromJSONField(field,), fromJSON: (json: Record<string, any>) => HiddenWorldCapability.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => HiddenWorldCapability.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => HiddenWorldCapability.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => HiddenWorldCapability.fetch(client, id,), new: (fields: HiddenWorldCapabilityFields,) => { return new HiddenWorldCapability([], fields) }, kind: "StructClassReified", } }

    static get r() { return HiddenWorldCapability.reified() }

    static phantom(): PhantomReified<ToTypeStr<HiddenWorldCapability>> { return phantom(HiddenWorldCapability.reified()); } static get p() { return HiddenWorldCapability.phantom() }

    static get bcs() {
        return bcs.struct("HiddenWorldCapability", {

            id: UID.bcs

        })
    };

    static fromFields(fields: Record<string, any>): HiddenWorldCapability { return HiddenWorldCapability.reified().new({ id: decodeFromFields(UID.reified(), fields.id) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): HiddenWorldCapability {
        if (!isHiddenWorldCapability(item.type)) {
            throw new Error("not a HiddenWorldCapability type");

        }

        return HiddenWorldCapability.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) })
    }

    static fromBcs(data: Uint8Array): HiddenWorldCapability { return HiddenWorldCapability.fromFields(HiddenWorldCapability.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): HiddenWorldCapability { return HiddenWorldCapability.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) }) }

    static fromJSON(json: Record<string, any>): HiddenWorldCapability {
        if (json.$typeName !== HiddenWorldCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return HiddenWorldCapability.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): HiddenWorldCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiddenWorldCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiddenWorldCapability object`); } return HiddenWorldCapability.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): HiddenWorldCapability {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiddenWorldCapability(data.bcs.type)) { throw new Error(`object at is not a HiddenWorldCapability object`); }

            return HiddenWorldCapability.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return HiddenWorldCapability.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<HiddenWorldCapability> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiddenWorldCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiddenWorldCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiddenWorldCapability object`); }

        return HiddenWorldCapability.fromSuiObjectData(res.data);
    }

}

/* ============================== MasterAccessKey =============================== */

export function isMasterAccessKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::MasterAccessKey`; }

export interface MasterAccessKeyFields { id: ToField<UID> }

export type MasterAccessKeyReified = Reified<MasterAccessKey, MasterAccessKeyFields>;

export class MasterAccessKey implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::MasterAccessKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = MasterAccessKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::MasterAccessKey`; readonly $typeArgs: []; readonly $isPhantom = MasterAccessKey.$isPhantom;

    readonly id: ToField<UID>

    private constructor(typeArgs: [], fields: MasterAccessKeyFields,) {
        this.$fullTypeName = composeSuiType(MasterAccessKey.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::MasterAccessKey`; this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): MasterAccessKeyReified { return { typeName: MasterAccessKey.$typeName, fullTypeName: composeSuiType(MasterAccessKey.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::MasterAccessKey`, typeArgs: [] as [], isPhantom: MasterAccessKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MasterAccessKey.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MasterAccessKey.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => MasterAccessKey.fromBcs(data,), bcs: MasterAccessKey.bcs, fromJSONField: (field: any) => MasterAccessKey.fromJSONField(field,), fromJSON: (json: Record<string, any>) => MasterAccessKey.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => MasterAccessKey.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => MasterAccessKey.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => MasterAccessKey.fetch(client, id,), new: (fields: MasterAccessKeyFields,) => { return new MasterAccessKey([], fields) }, kind: "StructClassReified", } }

    static get r() { return MasterAccessKey.reified() }

    static phantom(): PhantomReified<ToTypeStr<MasterAccessKey>> { return phantom(MasterAccessKey.reified()); } static get p() { return MasterAccessKey.phantom() }

    static get bcs() {
        return bcs.struct("MasterAccessKey", {

            id: UID.bcs

        })
    };

    static fromFields(fields: Record<string, any>): MasterAccessKey { return MasterAccessKey.reified().new({ id: decodeFromFields(UID.reified(), fields.id) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): MasterAccessKey {
        if (!isMasterAccessKey(item.type)) {
            throw new Error("not a MasterAccessKey type");

        }

        return MasterAccessKey.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) })
    }

    static fromBcs(data: Uint8Array): MasterAccessKey { return MasterAccessKey.fromFields(MasterAccessKey.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): MasterAccessKey { return MasterAccessKey.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) }) }

    static fromJSON(json: Record<string, any>): MasterAccessKey {
        if (json.$typeName !== MasterAccessKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return MasterAccessKey.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): MasterAccessKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMasterAccessKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MasterAccessKey object`); } return MasterAccessKey.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): MasterAccessKey {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMasterAccessKey(data.bcs.type)) { throw new Error(`object at is not a MasterAccessKey object`); }

            return MasterAccessKey.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MasterAccessKey.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MasterAccessKey> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MasterAccessKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMasterAccessKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MasterAccessKey object`); }

        return MasterAccessKey.fromSuiObjectData(res.data);
    }

}

/* ============================== NewFeeCollectorKrafted =============================== */

export function isNewFeeCollectorKrafted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::NewFeeCollectorKrafted`; }

export interface NewFeeCollectorKraftedFields { coinType: ToField<String1>; feeCollectorAddr: ToField<"address"> }

export type NewFeeCollectorKraftedReified = Reified<NewFeeCollectorKrafted, NewFeeCollectorKraftedFields>;

export class NewFeeCollectorKrafted implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::NewFeeCollectorKrafted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = NewFeeCollectorKrafted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::NewFeeCollectorKrafted`; readonly $typeArgs: []; readonly $isPhantom = NewFeeCollectorKrafted.$isPhantom;

    readonly coinType: ToField<String1>; readonly feeCollectorAddr: ToField<"address">

    private constructor(typeArgs: [], fields: NewFeeCollectorKraftedFields,) {
        this.$fullTypeName = composeSuiType(NewFeeCollectorKrafted.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::NewFeeCollectorKrafted`; this.$typeArgs = typeArgs;

        this.coinType = fields.coinType;; this.feeCollectorAddr = fields.feeCollectorAddr;
    }

    static reified(): NewFeeCollectorKraftedReified { return { typeName: NewFeeCollectorKrafted.$typeName, fullTypeName: composeSuiType(NewFeeCollectorKrafted.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::NewFeeCollectorKrafted`, typeArgs: [] as [], isPhantom: NewFeeCollectorKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewFeeCollectorKrafted.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => NewFeeCollectorKrafted.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => NewFeeCollectorKrafted.fromBcs(data,), bcs: NewFeeCollectorKrafted.bcs, fromJSONField: (field: any) => NewFeeCollectorKrafted.fromJSONField(field,), fromJSON: (json: Record<string, any>) => NewFeeCollectorKrafted.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => NewFeeCollectorKrafted.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => NewFeeCollectorKrafted.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => NewFeeCollectorKrafted.fetch(client, id,), new: (fields: NewFeeCollectorKraftedFields,) => { return new NewFeeCollectorKrafted([], fields) }, kind: "StructClassReified", } }

    static get r() { return NewFeeCollectorKrafted.reified() }

    static phantom(): PhantomReified<ToTypeStr<NewFeeCollectorKrafted>> { return phantom(NewFeeCollectorKrafted.reified()); } static get p() { return NewFeeCollectorKrafted.phantom() }

    static get bcs() {
        return bcs.struct("NewFeeCollectorKrafted", {

            coin_type: String1.bcs, fee_collector_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

        })
    };

    static fromFields(fields: Record<string, any>): NewFeeCollectorKrafted { return NewFeeCollectorKrafted.reified().new({ coinType: decodeFromFields(String1.reified(), fields.coin_type), feeCollectorAddr: decodeFromFields("address", fields.fee_collector_addr) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewFeeCollectorKrafted {
        if (!isNewFeeCollectorKrafted(item.type)) {
            throw new Error("not a NewFeeCollectorKrafted type");

        }

        return NewFeeCollectorKrafted.reified().new({ coinType: decodeFromFieldsWithTypes(String1.reified(), item.fields.coin_type), feeCollectorAddr: decodeFromFieldsWithTypes("address", item.fields.fee_collector_addr) })
    }

    static fromBcs(data: Uint8Array): NewFeeCollectorKrafted { return NewFeeCollectorKrafted.fromFields(NewFeeCollectorKrafted.bcs.parse(data)) }

    toJSONField() {
        return {

            coinType: this.coinType, feeCollectorAddr: this.feeCollectorAddr,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): NewFeeCollectorKrafted { return NewFeeCollectorKrafted.reified().new({ coinType: decodeFromJSONField(String1.reified(), field.coinType), feeCollectorAddr: decodeFromJSONField("address", field.feeCollectorAddr) }) }

    static fromJSON(json: Record<string, any>): NewFeeCollectorKrafted {
        if (json.$typeName !== NewFeeCollectorKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return NewFeeCollectorKrafted.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): NewFeeCollectorKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewFeeCollectorKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewFeeCollectorKrafted object`); } return NewFeeCollectorKrafted.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): NewFeeCollectorKrafted {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewFeeCollectorKrafted(data.bcs.type)) { throw new Error(`object at is not a NewFeeCollectorKrafted object`); }

            return NewFeeCollectorKrafted.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return NewFeeCollectorKrafted.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewFeeCollectorKrafted> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewFeeCollectorKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewFeeCollectorKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewFeeCollectorKrafted object`); }

        return NewFeeCollectorKrafted.fromSuiObjectData(res.data);
    }

}

/* ============================== PoolFlow =============================== */

export function isPoolFlow(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::PoolFlow`; }

export interface PoolFlowFields { hiveBalance: ToField<Balance<ToPhantom<HIVE>>>; honeyBalance: ToField<Balance<ToPhantom<HONEY>>>; lastClaimedEpoch: ToField<"u64"> }

export type PoolFlowReified = Reified<PoolFlow, PoolFlowFields>;

export class PoolFlow implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::PoolFlow`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = PoolFlow.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::PoolFlow`; readonly $typeArgs: []; readonly $isPhantom = PoolFlow.$isPhantom;

    readonly hiveBalance: ToField<Balance<ToPhantom<HIVE>>>; readonly honeyBalance: ToField<Balance<ToPhantom<HONEY>>>; readonly lastClaimedEpoch: ToField<"u64">

    private constructor(typeArgs: [], fields: PoolFlowFields,) {
        this.$fullTypeName = composeSuiType(PoolFlow.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::PoolFlow`; this.$typeArgs = typeArgs;

        this.hiveBalance = fields.hiveBalance;; this.honeyBalance = fields.honeyBalance;; this.lastClaimedEpoch = fields.lastClaimedEpoch;
    }

    static reified(): PoolFlowReified { return { typeName: PoolFlow.$typeName, fullTypeName: composeSuiType(PoolFlow.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::PoolFlow`, typeArgs: [] as [], isPhantom: PoolFlow.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolFlow.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolFlow.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => PoolFlow.fromBcs(data,), bcs: PoolFlow.bcs, fromJSONField: (field: any) => PoolFlow.fromJSONField(field,), fromJSON: (json: Record<string, any>) => PoolFlow.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => PoolFlow.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => PoolFlow.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => PoolFlow.fetch(client, id,), new: (fields: PoolFlowFields,) => { return new PoolFlow([], fields) }, kind: "StructClassReified", } }

    static get r() { return PoolFlow.reified() }

    static phantom(): PhantomReified<ToTypeStr<PoolFlow>> { return phantom(PoolFlow.reified()); } static get p() { return PoolFlow.phantom() }

    static get bcs() {
        return bcs.struct("PoolFlow", {

            hive_balance: Balance.bcs, honey_balance: Balance.bcs, last_claimed_epoch: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): PoolFlow { return PoolFlow.reified().new({ hiveBalance: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_balance), honeyBalance: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_balance), lastClaimedEpoch: decodeFromFields("u64", fields.last_claimed_epoch) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): PoolFlow {
        if (!isPoolFlow(item.type)) {
            throw new Error("not a PoolFlow type");

        }

        return PoolFlow.reified().new({ hiveBalance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_balance), honeyBalance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_balance), lastClaimedEpoch: decodeFromFieldsWithTypes("u64", item.fields.last_claimed_epoch) })
    }

    static fromBcs(data: Uint8Array): PoolFlow { return PoolFlow.fromFields(PoolFlow.bcs.parse(data)) }

    toJSONField() {
        return {

            hiveBalance: this.hiveBalance.toJSONField(), honeyBalance: this.honeyBalance.toJSONField(), lastClaimedEpoch: this.lastClaimedEpoch.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): PoolFlow { return PoolFlow.reified().new({ hiveBalance: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveBalance), honeyBalance: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyBalance), lastClaimedEpoch: decodeFromJSONField("u64", field.lastClaimedEpoch) }) }

    static fromJSON(json: Record<string, any>): PoolFlow {
        if (json.$typeName !== PoolFlow.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return PoolFlow.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): PoolFlow { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolFlow(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolFlow object`); } return PoolFlow.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): PoolFlow {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolFlow(data.bcs.type)) { throw new Error(`object at is not a PoolFlow object`); }

            return PoolFlow.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return PoolFlow.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PoolFlow> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolFlow object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolFlow(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolFlow object`); }

        return PoolFlow.fromSuiObjectData(res.data);
    }

}

/* ============================== PoolsConfig =============================== */

export function isPoolsConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::PoolsConfig`; }

export interface PoolsConfigFields { decimalPrecisions: ToField<LinkedTable<String, "u8">>; stableIdentifiers: ToField<LinkedTable<String1, "bool">> }

export type PoolsConfigReified = Reified<PoolsConfig, PoolsConfigFields>;

export class PoolsConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::PoolsConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = PoolsConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::PoolsConfig`; readonly $typeArgs: []; readonly $isPhantom = PoolsConfig.$isPhantom;

    readonly decimalPrecisions: ToField<LinkedTable<String, "u8">>; readonly stableIdentifiers: ToField<LinkedTable<String1, "bool">>

    private constructor(typeArgs: [], fields: PoolsConfigFields,) {
        this.$fullTypeName = composeSuiType(PoolsConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::PoolsConfig`; this.$typeArgs = typeArgs;

        this.decimalPrecisions = fields.decimalPrecisions;; this.stableIdentifiers = fields.stableIdentifiers;
    }

    static reified(): PoolsConfigReified { return { typeName: PoolsConfig.$typeName, fullTypeName: composeSuiType(PoolsConfig.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::PoolsConfig`, typeArgs: [] as [], isPhantom: PoolsConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolsConfig.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolsConfig.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => PoolsConfig.fromBcs(data,), bcs: PoolsConfig.bcs, fromJSONField: (field: any) => PoolsConfig.fromJSONField(field,), fromJSON: (json: Record<string, any>) => PoolsConfig.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => PoolsConfig.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => PoolsConfig.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => PoolsConfig.fetch(client, id,), new: (fields: PoolsConfigFields,) => { return new PoolsConfig([], fields) }, kind: "StructClassReified", } }

    static get r() { return PoolsConfig.reified() }

    static phantom(): PhantomReified<ToTypeStr<PoolsConfig>> { return phantom(PoolsConfig.reified()); } static get p() { return PoolsConfig.phantom() }

    static get bcs() {
        return bcs.struct("PoolsConfig", {

            decimal_precisions: LinkedTable.bcs(String.bcs), stable_identifiers: LinkedTable.bcs(String1.bcs)

        })
    };

    static fromFields(fields: Record<string, any>): PoolsConfig { return PoolsConfig.reified().new({ decimalPrecisions: decodeFromFields(LinkedTable.reified(String.reified(), reified.phantom("u8")), fields.decimal_precisions), stableIdentifiers: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("bool")), fields.stable_identifiers) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): PoolsConfig {
        if (!isPoolsConfig(item.type)) {
            throw new Error("not a PoolsConfig type");

        }

        return PoolsConfig.reified().new({ decimalPrecisions: decodeFromFieldsWithTypes(LinkedTable.reified(String.reified(), reified.phantom("u8")), item.fields.decimal_precisions), stableIdentifiers: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("bool")), item.fields.stable_identifiers) })
    }

    static fromBcs(data: Uint8Array): PoolsConfig { return PoolsConfig.fromFields(PoolsConfig.bcs.parse(data)) }

    toJSONField() {
        return {

            decimalPrecisions: this.decimalPrecisions.toJSONField(), stableIdentifiers: this.stableIdentifiers.toJSONField(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): PoolsConfig { return PoolsConfig.reified().new({ decimalPrecisions: decodeFromJSONField(LinkedTable.reified(String.reified(), reified.phantom("u8")), field.decimalPrecisions), stableIdentifiers: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("bool")), field.stableIdentifiers) }) }

    static fromJSON(json: Record<string, any>): PoolsConfig {
        if (json.$typeName !== PoolsConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return PoolsConfig.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): PoolsConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolsConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolsConfig object`); } return PoolsConfig.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): PoolsConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolsConfig(data.bcs.type)) { throw new Error(`object at is not a PoolsConfig object`); }

            return PoolsConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return PoolsConfig.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PoolsConfig> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolsConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolsConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolsConfig object`); }

        return PoolsConfig.fromSuiObjectData(res.data);
    }

}

/* ============================== StableIdentifierAdded =============================== */

export function isStableIdentifierAdded(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::StableIdentifierAdded`; }

export interface StableIdentifierAddedFields { identifier: ToField<String1> }

export type StableIdentifierAddedReified = Reified<StableIdentifierAdded, StableIdentifierAddedFields>;

export class StableIdentifierAdded implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::StableIdentifierAdded`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = StableIdentifierAdded.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::StableIdentifierAdded`; readonly $typeArgs: []; readonly $isPhantom = StableIdentifierAdded.$isPhantom;

    readonly identifier: ToField<String1>

    private constructor(typeArgs: [], fields: StableIdentifierAddedFields,) {
        this.$fullTypeName = composeSuiType(StableIdentifierAdded.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::StableIdentifierAdded`; this.$typeArgs = typeArgs;

        this.identifier = fields.identifier;
    }

    static reified(): StableIdentifierAddedReified { return { typeName: StableIdentifierAdded.$typeName, fullTypeName: composeSuiType(StableIdentifierAdded.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::StableIdentifierAdded`, typeArgs: [] as [], isPhantom: StableIdentifierAdded.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StableIdentifierAdded.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => StableIdentifierAdded.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => StableIdentifierAdded.fromBcs(data,), bcs: StableIdentifierAdded.bcs, fromJSONField: (field: any) => StableIdentifierAdded.fromJSONField(field,), fromJSON: (json: Record<string, any>) => StableIdentifierAdded.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => StableIdentifierAdded.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => StableIdentifierAdded.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => StableIdentifierAdded.fetch(client, id,), new: (fields: StableIdentifierAddedFields,) => { return new StableIdentifierAdded([], fields) }, kind: "StructClassReified", } }

    static get r() { return StableIdentifierAdded.reified() }

    static phantom(): PhantomReified<ToTypeStr<StableIdentifierAdded>> { return phantom(StableIdentifierAdded.reified()); } static get p() { return StableIdentifierAdded.phantom() }

    static get bcs() {
        return bcs.struct("StableIdentifierAdded", {

            identifier: String1.bcs

        })
    };

    static fromFields(fields: Record<string, any>): StableIdentifierAdded { return StableIdentifierAdded.reified().new({ identifier: decodeFromFields(String1.reified(), fields.identifier) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): StableIdentifierAdded {
        if (!isStableIdentifierAdded(item.type)) {
            throw new Error("not a StableIdentifierAdded type");

        }

        return StableIdentifierAdded.reified().new({ identifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.identifier) })
    }

    static fromBcs(data: Uint8Array): StableIdentifierAdded { return StableIdentifierAdded.fromFields(StableIdentifierAdded.bcs.parse(data)) }

    toJSONField() {
        return {

            identifier: this.identifier,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): StableIdentifierAdded { return StableIdentifierAdded.reified().new({ identifier: decodeFromJSONField(String1.reified(), field.identifier) }) }

    static fromJSON(json: Record<string, any>): StableIdentifierAdded {
        if (json.$typeName !== StableIdentifierAdded.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return StableIdentifierAdded.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): StableIdentifierAdded { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStableIdentifierAdded(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StableIdentifierAdded object`); } return StableIdentifierAdded.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): StableIdentifierAdded {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStableIdentifierAdded(data.bcs.type)) { throw new Error(`object at is not a StableIdentifierAdded object`); }

            return StableIdentifierAdded.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return StableIdentifierAdded.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<StableIdentifierAdded> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StableIdentifierAdded object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStableIdentifierAdded(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StableIdentifierAdded object`); }

        return StableIdentifierAdded.fromSuiObjectData(res.data);
    }

}

/* ============================== StableIdentifierRemoved =============================== */

export function isStableIdentifierRemoved(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::StableIdentifierRemoved`; }

export interface StableIdentifierRemovedFields { identifier: ToField<String1> }

export type StableIdentifierRemovedReified = Reified<StableIdentifierRemoved, StableIdentifierRemovedFields>;

export class StableIdentifierRemoved implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::StableIdentifierRemoved`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = StableIdentifierRemoved.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::StableIdentifierRemoved`; readonly $typeArgs: []; readonly $isPhantom = StableIdentifierRemoved.$isPhantom;

    readonly identifier: ToField<String1>

    private constructor(typeArgs: [], fields: StableIdentifierRemovedFields,) {
        this.$fullTypeName = composeSuiType(StableIdentifierRemoved.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::StableIdentifierRemoved`; this.$typeArgs = typeArgs;

        this.identifier = fields.identifier;
    }

    static reified(): StableIdentifierRemovedReified { return { typeName: StableIdentifierRemoved.$typeName, fullTypeName: composeSuiType(StableIdentifierRemoved.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::StableIdentifierRemoved`, typeArgs: [] as [], isPhantom: StableIdentifierRemoved.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StableIdentifierRemoved.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => StableIdentifierRemoved.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => StableIdentifierRemoved.fromBcs(data,), bcs: StableIdentifierRemoved.bcs, fromJSONField: (field: any) => StableIdentifierRemoved.fromJSONField(field,), fromJSON: (json: Record<string, any>) => StableIdentifierRemoved.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => StableIdentifierRemoved.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => StableIdentifierRemoved.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => StableIdentifierRemoved.fetch(client, id,), new: (fields: StableIdentifierRemovedFields,) => { return new StableIdentifierRemoved([], fields) }, kind: "StructClassReified", } }

    static get r() { return StableIdentifierRemoved.reified() }

    static phantom(): PhantomReified<ToTypeStr<StableIdentifierRemoved>> { return phantom(StableIdentifierRemoved.reified()); } static get p() { return StableIdentifierRemoved.phantom() }

    static get bcs() {
        return bcs.struct("StableIdentifierRemoved", {

            identifier: String1.bcs

        })
    };

    static fromFields(fields: Record<string, any>): StableIdentifierRemoved { return StableIdentifierRemoved.reified().new({ identifier: decodeFromFields(String1.reified(), fields.identifier) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): StableIdentifierRemoved {
        if (!isStableIdentifierRemoved(item.type)) {
            throw new Error("not a StableIdentifierRemoved type");

        }

        return StableIdentifierRemoved.reified().new({ identifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.identifier) })
    }

    static fromBcs(data: Uint8Array): StableIdentifierRemoved { return StableIdentifierRemoved.fromFields(StableIdentifierRemoved.bcs.parse(data)) }

    toJSONField() {
        return {

            identifier: this.identifier,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): StableIdentifierRemoved { return StableIdentifierRemoved.reified().new({ identifier: decodeFromJSONField(String1.reified(), field.identifier) }) }

    static fromJSON(json: Record<string, any>): StableIdentifierRemoved {
        if (json.$typeName !== StableIdentifierRemoved.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return StableIdentifierRemoved.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): StableIdentifierRemoved { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStableIdentifierRemoved(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StableIdentifierRemoved object`); } return StableIdentifierRemoved.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): StableIdentifierRemoved {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStableIdentifierRemoved(data.bcs.type)) { throw new Error(`object at is not a StableIdentifierRemoved object`); }

            return StableIdentifierRemoved.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return StableIdentifierRemoved.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<StableIdentifierRemoved> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StableIdentifierRemoved object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStableIdentifierRemoved(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StableIdentifierRemoved object`); }

        return StableIdentifierRemoved.fromSuiObjectData(res.data);
    }

}

/* ============================== ThreeAmmFlowAccess =============================== */

export function isThreeAmmFlowAccess(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::ThreeAmmFlowAccess`; }

export interface ThreeAmmFlowAccessFields { id: ToField<UID> }

export type ThreeAmmFlowAccessReified = Reified<ThreeAmmFlowAccess, ThreeAmmFlowAccessFields>;

export class ThreeAmmFlowAccess implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::ThreeAmmFlowAccess`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = ThreeAmmFlowAccess.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::ThreeAmmFlowAccess`; readonly $typeArgs: []; readonly $isPhantom = ThreeAmmFlowAccess.$isPhantom;

    readonly id: ToField<UID>

    private constructor(typeArgs: [], fields: ThreeAmmFlowAccessFields,) {
        this.$fullTypeName = composeSuiType(ThreeAmmFlowAccess.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::ThreeAmmFlowAccess`; this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): ThreeAmmFlowAccessReified { return { typeName: ThreeAmmFlowAccess.$typeName, fullTypeName: composeSuiType(ThreeAmmFlowAccess.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::ThreeAmmFlowAccess`, typeArgs: [] as [], isPhantom: ThreeAmmFlowAccess.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ThreeAmmFlowAccess.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => ThreeAmmFlowAccess.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => ThreeAmmFlowAccess.fromBcs(data,), bcs: ThreeAmmFlowAccess.bcs, fromJSONField: (field: any) => ThreeAmmFlowAccess.fromJSONField(field,), fromJSON: (json: Record<string, any>) => ThreeAmmFlowAccess.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => ThreeAmmFlowAccess.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => ThreeAmmFlowAccess.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => ThreeAmmFlowAccess.fetch(client, id,), new: (fields: ThreeAmmFlowAccessFields,) => { return new ThreeAmmFlowAccess([], fields) }, kind: "StructClassReified", } }

    static get r() { return ThreeAmmFlowAccess.reified() }

    static phantom(): PhantomReified<ToTypeStr<ThreeAmmFlowAccess>> { return phantom(ThreeAmmFlowAccess.reified()); } static get p() { return ThreeAmmFlowAccess.phantom() }

    static get bcs() {
        return bcs.struct("ThreeAmmFlowAccess", {

            id: UID.bcs

        })
    };

    static fromFields(fields: Record<string, any>): ThreeAmmFlowAccess { return ThreeAmmFlowAccess.reified().new({ id: decodeFromFields(UID.reified(), fields.id) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): ThreeAmmFlowAccess {
        if (!isThreeAmmFlowAccess(item.type)) {
            throw new Error("not a ThreeAmmFlowAccess type");

        }

        return ThreeAmmFlowAccess.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) })
    }

    static fromBcs(data: Uint8Array): ThreeAmmFlowAccess { return ThreeAmmFlowAccess.fromFields(ThreeAmmFlowAccess.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): ThreeAmmFlowAccess { return ThreeAmmFlowAccess.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) }) }

    static fromJSON(json: Record<string, any>): ThreeAmmFlowAccess {
        if (json.$typeName !== ThreeAmmFlowAccess.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return ThreeAmmFlowAccess.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): ThreeAmmFlowAccess { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isThreeAmmFlowAccess(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ThreeAmmFlowAccess object`); } return ThreeAmmFlowAccess.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): ThreeAmmFlowAccess {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isThreeAmmFlowAccess(data.bcs.type)) { throw new Error(`object at is not a ThreeAmmFlowAccess object`); }

            return ThreeAmmFlowAccess.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return ThreeAmmFlowAccess.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ThreeAmmFlowAccess> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ThreeAmmFlowAccess object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isThreeAmmFlowAccess(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ThreeAmmFlowAccess object`); }

        return ThreeAmmFlowAccess.fromSuiObjectData(res.data);
    }

}

/* ============================== TreasuryResourcesDistributed =============================== */

export function isTreasuryResourcesDistributed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::TreasuryResourcesDistributed`; }

export interface TreasuryResourcesDistributedFields { amount: ToField<"u64"> }

export type TreasuryResourcesDistributedReified = Reified<TreasuryResourcesDistributed, TreasuryResourcesDistributedFields>;

export class TreasuryResourcesDistributed implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::TreasuryResourcesDistributed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = TreasuryResourcesDistributed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::TreasuryResourcesDistributed`; readonly $typeArgs: []; readonly $isPhantom = TreasuryResourcesDistributed.$isPhantom;

    readonly amount: ToField<"u64">

    private constructor(typeArgs: [], fields: TreasuryResourcesDistributedFields,) {
        this.$fullTypeName = composeSuiType(TreasuryResourcesDistributed.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::TreasuryResourcesDistributed`; this.$typeArgs = typeArgs;

        this.amount = fields.amount;
    }

    static reified(): TreasuryResourcesDistributedReified { return { typeName: TreasuryResourcesDistributed.$typeName, fullTypeName: composeSuiType(TreasuryResourcesDistributed.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::TreasuryResourcesDistributed`, typeArgs: [] as [], isPhantom: TreasuryResourcesDistributed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TreasuryResourcesDistributed.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => TreasuryResourcesDistributed.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => TreasuryResourcesDistributed.fromBcs(data,), bcs: TreasuryResourcesDistributed.bcs, fromJSONField: (field: any) => TreasuryResourcesDistributed.fromJSONField(field,), fromJSON: (json: Record<string, any>) => TreasuryResourcesDistributed.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => TreasuryResourcesDistributed.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => TreasuryResourcesDistributed.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => TreasuryResourcesDistributed.fetch(client, id,), new: (fields: TreasuryResourcesDistributedFields,) => { return new TreasuryResourcesDistributed([], fields) }, kind: "StructClassReified", } }

    static get r() { return TreasuryResourcesDistributed.reified() }

    static phantom(): PhantomReified<ToTypeStr<TreasuryResourcesDistributed>> { return phantom(TreasuryResourcesDistributed.reified()); } static get p() { return TreasuryResourcesDistributed.phantom() }

    static get bcs() {
        return bcs.struct("TreasuryResourcesDistributed", {

            amount: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): TreasuryResourcesDistributed { return TreasuryResourcesDistributed.reified().new({ amount: decodeFromFields("u64", fields.amount) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): TreasuryResourcesDistributed {
        if (!isTreasuryResourcesDistributed(item.type)) {
            throw new Error("not a TreasuryResourcesDistributed type");

        }

        return TreasuryResourcesDistributed.reified().new({ amount: decodeFromFieldsWithTypes("u64", item.fields.amount) })
    }

    static fromBcs(data: Uint8Array): TreasuryResourcesDistributed { return TreasuryResourcesDistributed.fromFields(TreasuryResourcesDistributed.bcs.parse(data)) }

    toJSONField() {
        return {

            amount: this.amount.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): TreasuryResourcesDistributed { return TreasuryResourcesDistributed.reified().new({ amount: decodeFromJSONField("u64", field.amount) }) }

    static fromJSON(json: Record<string, any>): TreasuryResourcesDistributed {
        if (json.$typeName !== TreasuryResourcesDistributed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return TreasuryResourcesDistributed.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): TreasuryResourcesDistributed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTreasuryResourcesDistributed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TreasuryResourcesDistributed object`); } return TreasuryResourcesDistributed.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): TreasuryResourcesDistributed {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTreasuryResourcesDistributed(data.bcs.type)) { throw new Error(`object at is not a TreasuryResourcesDistributed object`); }

            return TreasuryResourcesDistributed.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return TreasuryResourcesDistributed.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TreasuryResourcesDistributed> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TreasuryResourcesDistributed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTreasuryResourcesDistributed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TreasuryResourcesDistributed object`); }

        return TreasuryResourcesDistributed.fromSuiObjectData(res.data);
    }

}

/* ============================== TwoAmmFlowAccess =============================== */

export function isTwoAmmFlowAccess(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::TwoAmmFlowAccess`; }

export interface TwoAmmFlowAccessFields { id: ToField<UID> }

export type TwoAmmFlowAccessReified = Reified<TwoAmmFlowAccess, TwoAmmFlowAccessFields>;

export class TwoAmmFlowAccess implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::TwoAmmFlowAccess`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = TwoAmmFlowAccess.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::TwoAmmFlowAccess`; readonly $typeArgs: []; readonly $isPhantom = TwoAmmFlowAccess.$isPhantom;

    readonly id: ToField<UID>

    private constructor(typeArgs: [], fields: TwoAmmFlowAccessFields,) {
        this.$fullTypeName = composeSuiType(TwoAmmFlowAccess.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::TwoAmmFlowAccess`; this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): TwoAmmFlowAccessReified { return { typeName: TwoAmmFlowAccess.$typeName, fullTypeName: composeSuiType(TwoAmmFlowAccess.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::TwoAmmFlowAccess`, typeArgs: [] as [], isPhantom: TwoAmmFlowAccess.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TwoAmmFlowAccess.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => TwoAmmFlowAccess.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => TwoAmmFlowAccess.fromBcs(data,), bcs: TwoAmmFlowAccess.bcs, fromJSONField: (field: any) => TwoAmmFlowAccess.fromJSONField(field,), fromJSON: (json: Record<string, any>) => TwoAmmFlowAccess.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => TwoAmmFlowAccess.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => TwoAmmFlowAccess.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => TwoAmmFlowAccess.fetch(client, id,), new: (fields: TwoAmmFlowAccessFields,) => { return new TwoAmmFlowAccess([], fields) }, kind: "StructClassReified", } }

    static get r() { return TwoAmmFlowAccess.reified() }

    static phantom(): PhantomReified<ToTypeStr<TwoAmmFlowAccess>> { return phantom(TwoAmmFlowAccess.reified()); } static get p() { return TwoAmmFlowAccess.phantom() }

    static get bcs() {
        return bcs.struct("TwoAmmFlowAccess", {

            id: UID.bcs

        })
    };

    static fromFields(fields: Record<string, any>): TwoAmmFlowAccess { return TwoAmmFlowAccess.reified().new({ id: decodeFromFields(UID.reified(), fields.id) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): TwoAmmFlowAccess {
        if (!isTwoAmmFlowAccess(item.type)) {
            throw new Error("not a TwoAmmFlowAccess type");

        }

        return TwoAmmFlowAccess.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) })
    }

    static fromBcs(data: Uint8Array): TwoAmmFlowAccess { return TwoAmmFlowAccess.fromFields(TwoAmmFlowAccess.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): TwoAmmFlowAccess { return TwoAmmFlowAccess.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) }) }

    static fromJSON(json: Record<string, any>): TwoAmmFlowAccess {
        if (json.$typeName !== TwoAmmFlowAccess.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return TwoAmmFlowAccess.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): TwoAmmFlowAccess { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTwoAmmFlowAccess(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TwoAmmFlowAccess object`); } return TwoAmmFlowAccess.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): TwoAmmFlowAccess {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTwoAmmFlowAccess(data.bcs.type)) { throw new Error(`object at is not a TwoAmmFlowAccess object`); }

            return TwoAmmFlowAccess.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return TwoAmmFlowAccess.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<TwoAmmFlowAccess> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TwoAmmFlowAccess object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTwoAmmFlowAccess(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TwoAmmFlowAccess object`); }

        return TwoAmmFlowAccess.fromSuiObjectData(res.data);
    }

}

/* ============================== VoteByVestedTokensCapability =============================== */

export function isVoteByVestedTokensCapability(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::VoteByVestedTokensCapability`; }

export interface VoteByVestedTokensCapabilityFields { id: ToField<UID> }

export type VoteByVestedTokensCapabilityReified = Reified<VoteByVestedTokensCapability, VoteByVestedTokensCapabilityFields>;

export class VoteByVestedTokensCapability implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::VoteByVestedTokensCapability`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = VoteByVestedTokensCapability.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::VoteByVestedTokensCapability`; readonly $typeArgs: []; readonly $isPhantom = VoteByVestedTokensCapability.$isPhantom;

    readonly id: ToField<UID>

    private constructor(typeArgs: [], fields: VoteByVestedTokensCapabilityFields,) {
        this.$fullTypeName = composeSuiType(VoteByVestedTokensCapability.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::VoteByVestedTokensCapability`; this.$typeArgs = typeArgs;

        this.id = fields.id;
    }

    static reified(): VoteByVestedTokensCapabilityReified { return { typeName: VoteByVestedTokensCapability.$typeName, fullTypeName: composeSuiType(VoteByVestedTokensCapability.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::VoteByVestedTokensCapability`, typeArgs: [] as [], isPhantom: VoteByVestedTokensCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VoteByVestedTokensCapability.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => VoteByVestedTokensCapability.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => VoteByVestedTokensCapability.fromBcs(data,), bcs: VoteByVestedTokensCapability.bcs, fromJSONField: (field: any) => VoteByVestedTokensCapability.fromJSONField(field,), fromJSON: (json: Record<string, any>) => VoteByVestedTokensCapability.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => VoteByVestedTokensCapability.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => VoteByVestedTokensCapability.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => VoteByVestedTokensCapability.fetch(client, id,), new: (fields: VoteByVestedTokensCapabilityFields,) => { return new VoteByVestedTokensCapability([], fields) }, kind: "StructClassReified", } }

    static get r() { return VoteByVestedTokensCapability.reified() }

    static phantom(): PhantomReified<ToTypeStr<VoteByVestedTokensCapability>> { return phantom(VoteByVestedTokensCapability.reified()); } static get p() { return VoteByVestedTokensCapability.phantom() }

    static get bcs() {
        return bcs.struct("VoteByVestedTokensCapability", {

            id: UID.bcs

        })
    };

    static fromFields(fields: Record<string, any>): VoteByVestedTokensCapability { return VoteByVestedTokensCapability.reified().new({ id: decodeFromFields(UID.reified(), fields.id) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): VoteByVestedTokensCapability {
        if (!isVoteByVestedTokensCapability(item.type)) {
            throw new Error("not a VoteByVestedTokensCapability type");

        }

        return VoteByVestedTokensCapability.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) })
    }

    static fromBcs(data: Uint8Array): VoteByVestedTokensCapability { return VoteByVestedTokensCapability.fromFields(VoteByVestedTokensCapability.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): VoteByVestedTokensCapability { return VoteByVestedTokensCapability.reified().new({ id: decodeFromJSONField(UID.reified(), field.id) }) }

    static fromJSON(json: Record<string, any>): VoteByVestedTokensCapability {
        if (json.$typeName !== VoteByVestedTokensCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return VoteByVestedTokensCapability.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): VoteByVestedTokensCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVoteByVestedTokensCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VoteByVestedTokensCapability object`); } return VoteByVestedTokensCapability.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): VoteByVestedTokensCapability {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVoteByVestedTokensCapability(data.bcs.type)) { throw new Error(`object at is not a VoteByVestedTokensCapability object`); }

            return VoteByVestedTokensCapability.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return VoteByVestedTokensCapability.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<VoteByVestedTokensCapability> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VoteByVestedTokensCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVoteByVestedTokensCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VoteByVestedTokensCapability object`); }

        return VoteByVestedTokensCapability.fromSuiObjectData(res.data);
    }

}

/* ============================== YieldFlow =============================== */

export function isYieldFlow(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::yield_flow::YieldFlow`; }

export interface YieldFlowFields { id: ToField<UID>; suiTreasury: ToField<Balance<ToPhantom<SUI>>>; feeFromPools: ToField<LinkedTable<"address", ToPhantom<PoolFlow>>>; honeyToBurn: ToField<Balance<ToPhantom<HONEY>>>; poolsConfig: ToField<PoolsConfig>; poolFeeConfig: ToField<DefaultFeeInfo>; ammFeeCollectors: ToField<LinkedTable<String1, "address">>; treasuryPercent: ToField<"u64">; honeyBuybackPct: ToField<"u64">; voterIncentivesPct: ToField<"u64">; moduleVersion: ToField<"u64"> }

export type YieldFlowReified = Reified<YieldFlow, YieldFlowFields>;

export class YieldFlow implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::yield_flow::YieldFlow`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = YieldFlow.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::yield_flow::YieldFlow`; readonly $typeArgs: []; readonly $isPhantom = YieldFlow.$isPhantom;

    readonly id: ToField<UID>; readonly suiTreasury: ToField<Balance<ToPhantom<SUI>>>; readonly feeFromPools: ToField<LinkedTable<"address", ToPhantom<PoolFlow>>>; readonly honeyToBurn: ToField<Balance<ToPhantom<HONEY>>>; readonly poolsConfig: ToField<PoolsConfig>; readonly poolFeeConfig: ToField<DefaultFeeInfo>; readonly ammFeeCollectors: ToField<LinkedTable<String1, "address">>; readonly treasuryPercent: ToField<"u64">; readonly honeyBuybackPct: ToField<"u64">; readonly voterIncentivesPct: ToField<"u64">; readonly moduleVersion: ToField<"u64">

    private constructor(typeArgs: [], fields: YieldFlowFields,) {
        this.$fullTypeName = composeSuiType(YieldFlow.$typeName, ...typeArgs) as `${typeof PKG_V1}::yield_flow::YieldFlow`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.suiTreasury = fields.suiTreasury;; this.feeFromPools = fields.feeFromPools;; this.honeyToBurn = fields.honeyToBurn;; this.poolsConfig = fields.poolsConfig;; this.poolFeeConfig = fields.poolFeeConfig;; this.ammFeeCollectors = fields.ammFeeCollectors;; this.treasuryPercent = fields.treasuryPercent;; this.honeyBuybackPct = fields.honeyBuybackPct;; this.voterIncentivesPct = fields.voterIncentivesPct;; this.moduleVersion = fields.moduleVersion;
    }

    static reified(): YieldFlowReified { return { typeName: YieldFlow.$typeName, fullTypeName: composeSuiType(YieldFlow.$typeName, ...[]) as `${typeof PKG_V1}::yield_flow::YieldFlow`, typeArgs: [] as [], isPhantom: YieldFlow.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => YieldFlow.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => YieldFlow.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => YieldFlow.fromBcs(data,), bcs: YieldFlow.bcs, fromJSONField: (field: any) => YieldFlow.fromJSONField(field,), fromJSON: (json: Record<string, any>) => YieldFlow.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => YieldFlow.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => YieldFlow.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => YieldFlow.fetch(client, id,), new: (fields: YieldFlowFields,) => { return new YieldFlow([], fields) }, kind: "StructClassReified", } }

    static get r() { return YieldFlow.reified() }

    static phantom(): PhantomReified<ToTypeStr<YieldFlow>> { return phantom(YieldFlow.reified()); } static get p() { return YieldFlow.phantom() }

    static get bcs() {
        return bcs.struct("YieldFlow", {

            id: UID.bcs, sui_treasury: Balance.bcs, fee_from_pools: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), honey_to_burn: Balance.bcs, pools_config: PoolsConfig.bcs, pool_fee_config: DefaultFeeInfo.bcs, amm_fee_collectors: LinkedTable.bcs(String1.bcs), treasury_percent: bcs.u64(), honey_buyback_pct: bcs.u64(), voter_incentives_pct: bcs.u64(), module_version: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): YieldFlow { return YieldFlow.reified().new({ id: decodeFromFields(UID.reified(), fields.id), suiTreasury: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.sui_treasury), feeFromPools: decodeFromFields(LinkedTable.reified("address", reified.phantom(PoolFlow.reified())), fields.fee_from_pools), honeyToBurn: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_to_burn), poolsConfig: decodeFromFields(PoolsConfig.reified(), fields.pools_config), poolFeeConfig: decodeFromFields(DefaultFeeInfo.reified(), fields.pool_fee_config), ammFeeCollectors: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.amm_fee_collectors), treasuryPercent: decodeFromFields("u64", fields.treasury_percent), honeyBuybackPct: decodeFromFields("u64", fields.honey_buyback_pct), voterIncentivesPct: decodeFromFields("u64", fields.voter_incentives_pct), moduleVersion: decodeFromFields("u64", fields.module_version) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): YieldFlow {
        if (!isYieldFlow(item.type)) {
            throw new Error("not a YieldFlow type");

        }

        return YieldFlow.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), suiTreasury: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.sui_treasury), feeFromPools: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(PoolFlow.reified())), item.fields.fee_from_pools), honeyToBurn: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_to_burn), poolsConfig: decodeFromFieldsWithTypes(PoolsConfig.reified(), item.fields.pools_config), poolFeeConfig: decodeFromFieldsWithTypes(DefaultFeeInfo.reified(), item.fields.pool_fee_config), ammFeeCollectors: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.amm_fee_collectors), treasuryPercent: decodeFromFieldsWithTypes("u64", item.fields.treasury_percent), honeyBuybackPct: decodeFromFieldsWithTypes("u64", item.fields.honey_buyback_pct), voterIncentivesPct: decodeFromFieldsWithTypes("u64", item.fields.voter_incentives_pct), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) })
    }

    static fromBcs(data: Uint8Array): YieldFlow { return YieldFlow.fromFields(YieldFlow.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, suiTreasury: this.suiTreasury.toJSONField(), feeFromPools: this.feeFromPools.toJSONField(), honeyToBurn: this.honeyToBurn.toJSONField(), poolsConfig: this.poolsConfig.toJSONField(), poolFeeConfig: this.poolFeeConfig.toJSONField(), ammFeeCollectors: this.ammFeeCollectors.toJSONField(), treasuryPercent: this.treasuryPercent.toString(), honeyBuybackPct: this.honeyBuybackPct.toString(), voterIncentivesPct: this.voterIncentivesPct.toString(), moduleVersion: this.moduleVersion.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): YieldFlow { return YieldFlow.reified().new({ id: decodeFromJSONField(UID.reified(), field.id), suiTreasury: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.suiTreasury), feeFromPools: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(PoolFlow.reified())), field.feeFromPools), honeyToBurn: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyToBurn), poolsConfig: decodeFromJSONField(PoolsConfig.reified(), field.poolsConfig), poolFeeConfig: decodeFromJSONField(DefaultFeeInfo.reified(), field.poolFeeConfig), ammFeeCollectors: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.ammFeeCollectors), treasuryPercent: decodeFromJSONField("u64", field.treasuryPercent), honeyBuybackPct: decodeFromJSONField("u64", field.honeyBuybackPct), voterIncentivesPct: decodeFromJSONField("u64", field.voterIncentivesPct), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) }) }

    static fromJSON(json: Record<string, any>): YieldFlow {
        if (json.$typeName !== YieldFlow.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return YieldFlow.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): YieldFlow { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isYieldFlow(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a YieldFlow object`); } return YieldFlow.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): YieldFlow {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isYieldFlow(data.bcs.type)) { throw new Error(`object at is not a YieldFlow object`); }

            return YieldFlow.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return YieldFlow.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<YieldFlow> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching YieldFlow object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isYieldFlow(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a YieldFlow object`); }

        return YieldFlow.fromSuiObjectData(res.data);
    }

}
