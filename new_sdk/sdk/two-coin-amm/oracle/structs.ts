import * as reified from "../../_framework/reified";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { LinkedTable } from "../../_dependencies/source/0x2/linked-table/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { TwapUpdateCap } from "../../dragon-trainer/dragon-trainer/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== HiveOracle =============================== */

export function isHiveOracle(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::oracle::HiveOracle`; }

export interface HiveOracleFields { id: ToField<UID>; updateCap: ToField<TwapUpdateCap>; suiHivePoolAddr: ToField<Option<"address">>; usdcSuiPoolAddr: ToField<Option<"address">>; snapshots: ToField<LinkedTable<"u64", ToPhantom<HiveTwapSnapshot>>>; windowSize: ToField<"u64">; tolerance: ToField<"u64">; moduleVersion: ToField<"u64"> }

export type HiveOracleReified = Reified<HiveOracle, HiveOracleFields>;

export class HiveOracle implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::oracle::HiveOracle`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = HiveOracle.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::oracle::HiveOracle`; readonly $typeArgs: []; readonly $isPhantom = HiveOracle.$isPhantom;

    readonly id: ToField<UID>; readonly updateCap: ToField<TwapUpdateCap>; readonly suiHivePoolAddr: ToField<Option<"address">>; readonly usdcSuiPoolAddr: ToField<Option<"address">>; readonly snapshots: ToField<LinkedTable<"u64", ToPhantom<HiveTwapSnapshot>>>; readonly windowSize: ToField<"u64">; readonly tolerance: ToField<"u64">; readonly moduleVersion: ToField<"u64">

    private constructor(typeArgs: [], fields: HiveOracleFields,) {
        this.$fullTypeName = composeSuiType(HiveOracle.$typeName, ...typeArgs) as `${typeof PKG_V1}::oracle::HiveOracle`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.updateCap = fields.updateCap;; this.suiHivePoolAddr = fields.suiHivePoolAddr;; this.usdcSuiPoolAddr = fields.usdcSuiPoolAddr;; this.snapshots = fields.snapshots;; this.windowSize = fields.windowSize;; this.tolerance = fields.tolerance;; this.moduleVersion = fields.moduleVersion;
    }

    static reified(): HiveOracleReified { return { typeName: HiveOracle.$typeName, fullTypeName: composeSuiType(HiveOracle.$typeName, ...[]) as `${typeof PKG_V1}::oracle::HiveOracle`, typeArgs: [] as [], isPhantom: HiveOracle.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveOracle.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveOracle.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => HiveOracle.fromBcs(data,), bcs: HiveOracle.bcs, fromJSONField: (field: any) => HiveOracle.fromJSONField(field,), fromJSON: (json: Record<string, any>) => HiveOracle.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => HiveOracle.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => HiveOracle.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => HiveOracle.fetch(client, id,), new: (fields: HiveOracleFields,) => { return new HiveOracle([], fields) }, kind: "StructClassReified", } }

    static get r() { return HiveOracle.reified() }

    static phantom(): PhantomReified<ToTypeStr<HiveOracle>> { return phantom(HiveOracle.reified()); } static get p() { return HiveOracle.phantom() }

    static get bcs() {
        return bcs.struct("HiveOracle", {

            id: UID.bcs, update_cap: TwapUpdateCap.bcs, sui_hive_pool_addr: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), usdc_sui_pool_addr: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), snapshots: LinkedTable.bcs(bcs.u64()), window_size: bcs.u64(), tolerance: bcs.u64(), module_version: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): HiveOracle { return HiveOracle.reified().new({ id: decodeFromFields(UID.reified(), fields.id), updateCap: decodeFromFields(TwapUpdateCap.reified(), fields.update_cap), suiHivePoolAddr: decodeFromFields(Option.reified("address"), fields.sui_hive_pool_addr), usdcSuiPoolAddr: decodeFromFields(Option.reified("address"), fields.usdc_sui_pool_addr), snapshots: decodeFromFields(LinkedTable.reified("u64", reified.phantom(HiveTwapSnapshot.reified())), fields.snapshots), windowSize: decodeFromFields("u64", fields.window_size), tolerance: decodeFromFields("u64", fields.tolerance), moduleVersion: decodeFromFields("u64", fields.module_version) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): HiveOracle {
        if (!isHiveOracle(item.type)) {
            throw new Error("not a HiveOracle type");

        }

        return HiveOracle.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), updateCap: decodeFromFieldsWithTypes(TwapUpdateCap.reified(), item.fields.update_cap), suiHivePoolAddr: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.sui_hive_pool_addr), usdcSuiPoolAddr: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.usdc_sui_pool_addr), snapshots: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(HiveTwapSnapshot.reified())), item.fields.snapshots), windowSize: decodeFromFieldsWithTypes("u64", item.fields.window_size), tolerance: decodeFromFieldsWithTypes("u64", item.fields.tolerance), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) })
    }

    static fromBcs(data: Uint8Array): HiveOracle { return HiveOracle.fromFields(HiveOracle.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, updateCap: this.updateCap.toJSONField(), suiHivePoolAddr: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.suiHivePoolAddr), usdcSuiPoolAddr: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.usdcSuiPoolAddr), snapshots: this.snapshots.toJSONField(), windowSize: this.windowSize.toString(), tolerance: this.tolerance.toString(), moduleVersion: this.moduleVersion.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): HiveOracle { return HiveOracle.reified().new({ id: decodeFromJSONField(UID.reified(), field.id), updateCap: decodeFromJSONField(TwapUpdateCap.reified(), field.updateCap), suiHivePoolAddr: decodeFromJSONField(Option.reified("address"), field.suiHivePoolAddr), usdcSuiPoolAddr: decodeFromJSONField(Option.reified("address"), field.usdcSuiPoolAddr), snapshots: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(HiveTwapSnapshot.reified())), field.snapshots), windowSize: decodeFromJSONField("u64", field.windowSize), tolerance: decodeFromJSONField("u64", field.tolerance), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) }) }

    static fromJSON(json: Record<string, any>): HiveOracle {
        if (json.$typeName !== HiveOracle.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return HiveOracle.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): HiveOracle { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveOracle(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveOracle object`); } return HiveOracle.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): HiveOracle {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveOracle(data.bcs.type)) { throw new Error(`object at is not a HiveOracle object`); }

            return HiveOracle.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return HiveOracle.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<HiveOracle> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveOracle object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveOracle(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveOracle object`); }

        return HiveOracle.fromSuiObjectData(res.data);
    }

}

/* ============================== HiveOracleSnapshotRecorded =============================== */

export function isHiveOracleSnapshotRecorded(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::oracle::HiveOracleSnapshotRecorded`; }

export interface HiveOracleSnapshotRecordedFields { timestamp: ToField<"u64">; hiveSuiCumPrice: ToField<"u256">; hiveSuiTimestamp: ToField<"u64">; suiUsdcCumPrice: ToField<"u256">; suiUsdcTimestamp: ToField<"u64"> }

export type HiveOracleSnapshotRecordedReified = Reified<HiveOracleSnapshotRecorded, HiveOracleSnapshotRecordedFields>;

export class HiveOracleSnapshotRecorded implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::oracle::HiveOracleSnapshotRecorded`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = HiveOracleSnapshotRecorded.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::oracle::HiveOracleSnapshotRecorded`; readonly $typeArgs: []; readonly $isPhantom = HiveOracleSnapshotRecorded.$isPhantom;

    readonly timestamp: ToField<"u64">; readonly hiveSuiCumPrice: ToField<"u256">; readonly hiveSuiTimestamp: ToField<"u64">; readonly suiUsdcCumPrice: ToField<"u256">; readonly suiUsdcTimestamp: ToField<"u64">

    private constructor(typeArgs: [], fields: HiveOracleSnapshotRecordedFields,) {
        this.$fullTypeName = composeSuiType(HiveOracleSnapshotRecorded.$typeName, ...typeArgs) as `${typeof PKG_V1}::oracle::HiveOracleSnapshotRecorded`; this.$typeArgs = typeArgs;

        this.timestamp = fields.timestamp;; this.hiveSuiCumPrice = fields.hiveSuiCumPrice;; this.hiveSuiTimestamp = fields.hiveSuiTimestamp;; this.suiUsdcCumPrice = fields.suiUsdcCumPrice;; this.suiUsdcTimestamp = fields.suiUsdcTimestamp;
    }

    static reified(): HiveOracleSnapshotRecordedReified { return { typeName: HiveOracleSnapshotRecorded.$typeName, fullTypeName: composeSuiType(HiveOracleSnapshotRecorded.$typeName, ...[]) as `${typeof PKG_V1}::oracle::HiveOracleSnapshotRecorded`, typeArgs: [] as [], isPhantom: HiveOracleSnapshotRecorded.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveOracleSnapshotRecorded.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveOracleSnapshotRecorded.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => HiveOracleSnapshotRecorded.fromBcs(data,), bcs: HiveOracleSnapshotRecorded.bcs, fromJSONField: (field: any) => HiveOracleSnapshotRecorded.fromJSONField(field,), fromJSON: (json: Record<string, any>) => HiveOracleSnapshotRecorded.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => HiveOracleSnapshotRecorded.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => HiveOracleSnapshotRecorded.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => HiveOracleSnapshotRecorded.fetch(client, id,), new: (fields: HiveOracleSnapshotRecordedFields,) => { return new HiveOracleSnapshotRecorded([], fields) }, kind: "StructClassReified", } }

    static get r() { return HiveOracleSnapshotRecorded.reified() }

    static phantom(): PhantomReified<ToTypeStr<HiveOracleSnapshotRecorded>> { return phantom(HiveOracleSnapshotRecorded.reified()); } static get p() { return HiveOracleSnapshotRecorded.phantom() }

    static get bcs() {
        return bcs.struct("HiveOracleSnapshotRecorded", {

            timestamp: bcs.u64(), hive_sui_cum_price: bcs.u256(), hive_sui_timestamp: bcs.u64(), sui_usdc_cum_price: bcs.u256(), sui_usdc_timestamp: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): HiveOracleSnapshotRecorded { return HiveOracleSnapshotRecorded.reified().new({ timestamp: decodeFromFields("u64", fields.timestamp), hiveSuiCumPrice: decodeFromFields("u256", fields.hive_sui_cum_price), hiveSuiTimestamp: decodeFromFields("u64", fields.hive_sui_timestamp), suiUsdcCumPrice: decodeFromFields("u256", fields.sui_usdc_cum_price), suiUsdcTimestamp: decodeFromFields("u64", fields.sui_usdc_timestamp) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): HiveOracleSnapshotRecorded {
        if (!isHiveOracleSnapshotRecorded(item.type)) {
            throw new Error("not a HiveOracleSnapshotRecorded type");

        }

        return HiveOracleSnapshotRecorded.reified().new({ timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp), hiveSuiCumPrice: decodeFromFieldsWithTypes("u256", item.fields.hive_sui_cum_price), hiveSuiTimestamp: decodeFromFieldsWithTypes("u64", item.fields.hive_sui_timestamp), suiUsdcCumPrice: decodeFromFieldsWithTypes("u256", item.fields.sui_usdc_cum_price), suiUsdcTimestamp: decodeFromFieldsWithTypes("u64", item.fields.sui_usdc_timestamp) })
    }

    static fromBcs(data: Uint8Array): HiveOracleSnapshotRecorded { return HiveOracleSnapshotRecorded.fromFields(HiveOracleSnapshotRecorded.bcs.parse(data)) }

    toJSONField() {
        return {

            timestamp: this.timestamp.toString(), hiveSuiCumPrice: this.hiveSuiCumPrice.toString(), hiveSuiTimestamp: this.hiveSuiTimestamp.toString(), suiUsdcCumPrice: this.suiUsdcCumPrice.toString(), suiUsdcTimestamp: this.suiUsdcTimestamp.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): HiveOracleSnapshotRecorded { return HiveOracleSnapshotRecorded.reified().new({ timestamp: decodeFromJSONField("u64", field.timestamp), hiveSuiCumPrice: decodeFromJSONField("u256", field.hiveSuiCumPrice), hiveSuiTimestamp: decodeFromJSONField("u64", field.hiveSuiTimestamp), suiUsdcCumPrice: decodeFromJSONField("u256", field.suiUsdcCumPrice), suiUsdcTimestamp: decodeFromJSONField("u64", field.suiUsdcTimestamp) }) }

    static fromJSON(json: Record<string, any>): HiveOracleSnapshotRecorded {
        if (json.$typeName !== HiveOracleSnapshotRecorded.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return HiveOracleSnapshotRecorded.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): HiveOracleSnapshotRecorded { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveOracleSnapshotRecorded(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveOracleSnapshotRecorded object`); } return HiveOracleSnapshotRecorded.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): HiveOracleSnapshotRecorded {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveOracleSnapshotRecorded(data.bcs.type)) { throw new Error(`object at is not a HiveOracleSnapshotRecorded object`); }

            return HiveOracleSnapshotRecorded.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return HiveOracleSnapshotRecorded.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<HiveOracleSnapshotRecorded> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveOracleSnapshotRecorded object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveOracleSnapshotRecorded(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveOracleSnapshotRecorded object`); }

        return HiveOracleSnapshotRecorded.fromSuiObjectData(res.data);
    }

}

/* ============================== HiveOracleUpdated =============================== */

export function isHiveOracleUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::oracle::HiveOracleUpdated`; }

export interface HiveOracleUpdatedFields { suiHivePoolAddr: ToField<Option<"address">>; usdcSuiPoolAddr: ToField<Option<"address">>; windowSize: ToField<"u64">; tolerance: ToField<"u64"> }

export type HiveOracleUpdatedReified = Reified<HiveOracleUpdated, HiveOracleUpdatedFields>;

export class HiveOracleUpdated implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::oracle::HiveOracleUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = HiveOracleUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::oracle::HiveOracleUpdated`; readonly $typeArgs: []; readonly $isPhantom = HiveOracleUpdated.$isPhantom;

    readonly suiHivePoolAddr: ToField<Option<"address">>; readonly usdcSuiPoolAddr: ToField<Option<"address">>; readonly windowSize: ToField<"u64">; readonly tolerance: ToField<"u64">

    private constructor(typeArgs: [], fields: HiveOracleUpdatedFields,) {
        this.$fullTypeName = composeSuiType(HiveOracleUpdated.$typeName, ...typeArgs) as `${typeof PKG_V1}::oracle::HiveOracleUpdated`; this.$typeArgs = typeArgs;

        this.suiHivePoolAddr = fields.suiHivePoolAddr;; this.usdcSuiPoolAddr = fields.usdcSuiPoolAddr;; this.windowSize = fields.windowSize;; this.tolerance = fields.tolerance;
    }

    static reified(): HiveOracleUpdatedReified { return { typeName: HiveOracleUpdated.$typeName, fullTypeName: composeSuiType(HiveOracleUpdated.$typeName, ...[]) as `${typeof PKG_V1}::oracle::HiveOracleUpdated`, typeArgs: [] as [], isPhantom: HiveOracleUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveOracleUpdated.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveOracleUpdated.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => HiveOracleUpdated.fromBcs(data,), bcs: HiveOracleUpdated.bcs, fromJSONField: (field: any) => HiveOracleUpdated.fromJSONField(field,), fromJSON: (json: Record<string, any>) => HiveOracleUpdated.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => HiveOracleUpdated.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => HiveOracleUpdated.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => HiveOracleUpdated.fetch(client, id,), new: (fields: HiveOracleUpdatedFields,) => { return new HiveOracleUpdated([], fields) }, kind: "StructClassReified", } }

    static get r() { return HiveOracleUpdated.reified() }

    static phantom(): PhantomReified<ToTypeStr<HiveOracleUpdated>> { return phantom(HiveOracleUpdated.reified()); } static get p() { return HiveOracleUpdated.phantom() }

    static get bcs() {
        return bcs.struct("HiveOracleUpdated", {

            sui_hive_pool_addr: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), usdc_sui_pool_addr: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), window_size: bcs.u64(), tolerance: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): HiveOracleUpdated { return HiveOracleUpdated.reified().new({ suiHivePoolAddr: decodeFromFields(Option.reified("address"), fields.sui_hive_pool_addr), usdcSuiPoolAddr: decodeFromFields(Option.reified("address"), fields.usdc_sui_pool_addr), windowSize: decodeFromFields("u64", fields.window_size), tolerance: decodeFromFields("u64", fields.tolerance) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): HiveOracleUpdated {
        if (!isHiveOracleUpdated(item.type)) {
            throw new Error("not a HiveOracleUpdated type");

        }

        return HiveOracleUpdated.reified().new({ suiHivePoolAddr: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.sui_hive_pool_addr), usdcSuiPoolAddr: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.usdc_sui_pool_addr), windowSize: decodeFromFieldsWithTypes("u64", item.fields.window_size), tolerance: decodeFromFieldsWithTypes("u64", item.fields.tolerance) })
    }

    static fromBcs(data: Uint8Array): HiveOracleUpdated { return HiveOracleUpdated.fromFields(HiveOracleUpdated.bcs.parse(data)) }

    toJSONField() {
        return {

            suiHivePoolAddr: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.suiHivePoolAddr), usdcSuiPoolAddr: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.usdcSuiPoolAddr), windowSize: this.windowSize.toString(), tolerance: this.tolerance.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): HiveOracleUpdated { return HiveOracleUpdated.reified().new({ suiHivePoolAddr: decodeFromJSONField(Option.reified("address"), field.suiHivePoolAddr), usdcSuiPoolAddr: decodeFromJSONField(Option.reified("address"), field.usdcSuiPoolAddr), windowSize: decodeFromJSONField("u64", field.windowSize), tolerance: decodeFromJSONField("u64", field.tolerance) }) }

    static fromJSON(json: Record<string, any>): HiveOracleUpdated {
        if (json.$typeName !== HiveOracleUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return HiveOracleUpdated.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): HiveOracleUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveOracleUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveOracleUpdated object`); } return HiveOracleUpdated.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): HiveOracleUpdated {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveOracleUpdated(data.bcs.type)) { throw new Error(`object at is not a HiveOracleUpdated object`); }

            return HiveOracleUpdated.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return HiveOracleUpdated.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<HiveOracleUpdated> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveOracleUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveOracleUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveOracleUpdated object`); }

        return HiveOracleUpdated.fromSuiObjectData(res.data);
    }

}

/* ============================== HiveTwapSnapshot =============================== */

export function isHiveTwapSnapshot(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::oracle::HiveTwapSnapshot`; }

export interface HiveTwapSnapshotFields { timestamp: ToField<"u64">; hiveSuiCumPrice: ToField<"u256">; hiveSuiTimestamp: ToField<"u64">; suiUsdcCumPrice: ToField<"u256">; suiUsdcTimestamp: ToField<"u64"> }

export type HiveTwapSnapshotReified = Reified<HiveTwapSnapshot, HiveTwapSnapshotFields>;

export class HiveTwapSnapshot implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::oracle::HiveTwapSnapshot`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = HiveTwapSnapshot.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::oracle::HiveTwapSnapshot`; readonly $typeArgs: []; readonly $isPhantom = HiveTwapSnapshot.$isPhantom;

    readonly timestamp: ToField<"u64">; readonly hiveSuiCumPrice: ToField<"u256">; readonly hiveSuiTimestamp: ToField<"u64">; readonly suiUsdcCumPrice: ToField<"u256">; readonly suiUsdcTimestamp: ToField<"u64">

    private constructor(typeArgs: [], fields: HiveTwapSnapshotFields,) {
        this.$fullTypeName = composeSuiType(HiveTwapSnapshot.$typeName, ...typeArgs) as `${typeof PKG_V1}::oracle::HiveTwapSnapshot`; this.$typeArgs = typeArgs;

        this.timestamp = fields.timestamp;; this.hiveSuiCumPrice = fields.hiveSuiCumPrice;; this.hiveSuiTimestamp = fields.hiveSuiTimestamp;; this.suiUsdcCumPrice = fields.suiUsdcCumPrice;; this.suiUsdcTimestamp = fields.suiUsdcTimestamp;
    }

    static reified(): HiveTwapSnapshotReified { return { typeName: HiveTwapSnapshot.$typeName, fullTypeName: composeSuiType(HiveTwapSnapshot.$typeName, ...[]) as `${typeof PKG_V1}::oracle::HiveTwapSnapshot`, typeArgs: [] as [], isPhantom: HiveTwapSnapshot.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveTwapSnapshot.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveTwapSnapshot.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => HiveTwapSnapshot.fromBcs(data,), bcs: HiveTwapSnapshot.bcs, fromJSONField: (field: any) => HiveTwapSnapshot.fromJSONField(field,), fromJSON: (json: Record<string, any>) => HiveTwapSnapshot.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => HiveTwapSnapshot.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => HiveTwapSnapshot.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => HiveTwapSnapshot.fetch(client, id,), new: (fields: HiveTwapSnapshotFields,) => { return new HiveTwapSnapshot([], fields) }, kind: "StructClassReified", } }

    static get r() { return HiveTwapSnapshot.reified() }

    static phantom(): PhantomReified<ToTypeStr<HiveTwapSnapshot>> { return phantom(HiveTwapSnapshot.reified()); } static get p() { return HiveTwapSnapshot.phantom() }

    static get bcs() {
        return bcs.struct("HiveTwapSnapshot", {

            timestamp: bcs.u64(), hive_sui_cum_price: bcs.u256(), hive_sui_timestamp: bcs.u64(), sui_usdc_cum_price: bcs.u256(), sui_usdc_timestamp: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): HiveTwapSnapshot { return HiveTwapSnapshot.reified().new({ timestamp: decodeFromFields("u64", fields.timestamp), hiveSuiCumPrice: decodeFromFields("u256", fields.hive_sui_cum_price), hiveSuiTimestamp: decodeFromFields("u64", fields.hive_sui_timestamp), suiUsdcCumPrice: decodeFromFields("u256", fields.sui_usdc_cum_price), suiUsdcTimestamp: decodeFromFields("u64", fields.sui_usdc_timestamp) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): HiveTwapSnapshot {
        if (!isHiveTwapSnapshot(item.type)) {
            throw new Error("not a HiveTwapSnapshot type");

        }

        return HiveTwapSnapshot.reified().new({ timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp), hiveSuiCumPrice: decodeFromFieldsWithTypes("u256", item.fields.hive_sui_cum_price), hiveSuiTimestamp: decodeFromFieldsWithTypes("u64", item.fields.hive_sui_timestamp), suiUsdcCumPrice: decodeFromFieldsWithTypes("u256", item.fields.sui_usdc_cum_price), suiUsdcTimestamp: decodeFromFieldsWithTypes("u64", item.fields.sui_usdc_timestamp) })
    }

    static fromBcs(data: Uint8Array): HiveTwapSnapshot { return HiveTwapSnapshot.fromFields(HiveTwapSnapshot.bcs.parse(data)) }

    toJSONField() {
        return {

            timestamp: this.timestamp.toString(), hiveSuiCumPrice: this.hiveSuiCumPrice.toString(), hiveSuiTimestamp: this.hiveSuiTimestamp.toString(), suiUsdcCumPrice: this.suiUsdcCumPrice.toString(), suiUsdcTimestamp: this.suiUsdcTimestamp.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): HiveTwapSnapshot { return HiveTwapSnapshot.reified().new({ timestamp: decodeFromJSONField("u64", field.timestamp), hiveSuiCumPrice: decodeFromJSONField("u256", field.hiveSuiCumPrice), hiveSuiTimestamp: decodeFromJSONField("u64", field.hiveSuiTimestamp), suiUsdcCumPrice: decodeFromJSONField("u256", field.suiUsdcCumPrice), suiUsdcTimestamp: decodeFromJSONField("u64", field.suiUsdcTimestamp) }) }

    static fromJSON(json: Record<string, any>): HiveTwapSnapshot {
        if (json.$typeName !== HiveTwapSnapshot.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return HiveTwapSnapshot.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): HiveTwapSnapshot { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveTwapSnapshot(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveTwapSnapshot object`); } return HiveTwapSnapshot.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): HiveTwapSnapshot {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHiveTwapSnapshot(data.bcs.type)) { throw new Error(`object at is not a HiveTwapSnapshot object`); }

            return HiveTwapSnapshot.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return HiveTwapSnapshot.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<HiveTwapSnapshot> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveTwapSnapshot object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveTwapSnapshot(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveTwapSnapshot object`); }

        return HiveTwapSnapshot.fromSuiObjectData(res.data);
    }

}
