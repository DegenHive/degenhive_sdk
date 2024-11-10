import { TreasuryCap } from "../../_dependencies/source/0x2/coin/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { TokenPolicyCap } from "../../_dependencies/source/0x2/token/structs";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName } from "../../_framework/util";
import { PKG_V1 } from "../index";

import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { bcs, BcsType, fromB64, fromHEX } from "@mysten/bcs";
/* ============================== HoneyBurnt =============================== */

export function isHoneyBurnt(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::honey_trade::HoneyBurnt`; }

export interface HoneyBurntFields { honeyBurntTax: ToField<"u64">; honeyBurntSuiFee: ToField<"u64">; totalHoneyBurnt: ToField<"u64"> }

export type HoneyBurntReified = Reified<HoneyBurnt, HoneyBurntFields>;

export class HoneyBurnt implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::honey_trade::HoneyBurnt`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = HoneyBurnt.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::honey_trade::HoneyBurnt`; readonly $typeArgs: []; readonly $isPhantom = HoneyBurnt.$isPhantom;

    readonly honeyBurntTax: ToField<"u64">; readonly honeyBurntSuiFee: ToField<"u64">; readonly totalHoneyBurnt: ToField<"u64">

    private constructor(typeArgs: [], fields: HoneyBurntFields,) {
        this.$fullTypeName = composeSuiType(HoneyBurnt.$typeName, ...typeArgs) as `${typeof PKG_V1}::honey_trade::HoneyBurnt`; this.$typeArgs = typeArgs;

        this.honeyBurntTax = fields.honeyBurntTax;; this.honeyBurntSuiFee = fields.honeyBurntSuiFee;; this.totalHoneyBurnt = fields.totalHoneyBurnt;
    }

    static reified(): HoneyBurntReified { return { typeName: HoneyBurnt.$typeName, fullTypeName: composeSuiType(HoneyBurnt.$typeName, ...[]) as `${typeof PKG_V1}::honey_trade::HoneyBurnt`, typeArgs: [] as [], isPhantom: HoneyBurnt.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HoneyBurnt.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyBurnt.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => HoneyBurnt.fromBcs(data,), bcs: HoneyBurnt.bcs, fromJSONField: (field: any) => HoneyBurnt.fromJSONField(field,), fromJSON: (json: Record<string, any>) => HoneyBurnt.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => HoneyBurnt.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => HoneyBurnt.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => HoneyBurnt.fetch(client, id,), new: (fields: HoneyBurntFields,) => { return new HoneyBurnt([], fields) }, kind: "StructClassReified", } }

    static get r() { return HoneyBurnt.reified() }

    static phantom(): PhantomReified<ToTypeStr<HoneyBurnt>> { return phantom(HoneyBurnt.reified()); } static get p() { return HoneyBurnt.phantom() }

    static get bcs() {
        return bcs.struct("HoneyBurnt", {

            honey_burnt_tax: bcs.u64(), honey_burnt_sui_fee: bcs.u64(), total_honey_burnt: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): HoneyBurnt { return HoneyBurnt.reified().new({ honeyBurntTax: decodeFromFields("u64", fields.honey_burnt_tax), honeyBurntSuiFee: decodeFromFields("u64", fields.honey_burnt_sui_fee), totalHoneyBurnt: decodeFromFields("u64", fields.total_honey_burnt) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): HoneyBurnt {
        if (!isHoneyBurnt(item.type)) {
            throw new Error("not a HoneyBurnt type");

        }

        return HoneyBurnt.reified().new({ honeyBurntTax: decodeFromFieldsWithTypes("u64", item.fields.honey_burnt_tax), honeyBurntSuiFee: decodeFromFieldsWithTypes("u64", item.fields.honey_burnt_sui_fee), totalHoneyBurnt: decodeFromFieldsWithTypes("u64", item.fields.total_honey_burnt) })
    }

    static fromBcs(data: Uint8Array): HoneyBurnt { return HoneyBurnt.fromFields(HoneyBurnt.bcs.parse(data)) }

    toJSONField() {
        return {

            honeyBurntTax: this.honeyBurntTax.toString(), honeyBurntSuiFee: this.honeyBurntSuiFee.toString(), totalHoneyBurnt: this.totalHoneyBurnt.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): HoneyBurnt { return HoneyBurnt.reified().new({ honeyBurntTax: decodeFromJSONField("u64", field.honeyBurntTax), honeyBurntSuiFee: decodeFromJSONField("u64", field.honeyBurntSuiFee), totalHoneyBurnt: decodeFromJSONField("u64", field.totalHoneyBurnt) }) }

    static fromJSON(json: Record<string, any>): HoneyBurnt {
        if (json.$typeName !== HoneyBurnt.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return HoneyBurnt.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): HoneyBurnt { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyBurnt(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyBurnt object`); } return HoneyBurnt.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): HoneyBurnt {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyBurnt(data.bcs.type)) { throw new Error(`object at is not a HoneyBurnt object`); }

            return HoneyBurnt.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return HoneyBurnt.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<HoneyBurnt> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyBurnt object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyBurnt(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyBurnt object`); }

        return HoneyBurnt.fromSuiObjectData(res.data);
    }

}

/* ============================== HoneyManager =============================== */

export function isHoneyManager(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::honey_trade::HoneyManager` + '<'); }

export interface HoneyManagerFields<T extends PhantomTypeArgument> { id: ToField<UID>; honeyKraftCap: ToField<TreasuryCap<T>>; policyCap: ToField<TokenPolicyCap<T>>; totalBurnt: ToField<"u64">; moduleVersion: ToField<"u64"> }

export type HoneyManagerReified<T extends PhantomTypeArgument> = Reified<HoneyManager<T>, HoneyManagerFields<T>>;

export class HoneyManager<T extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::honey_trade::HoneyManager`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

    readonly $typeName = HoneyManager.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::honey_trade::HoneyManager<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = HoneyManager.$isPhantom;

    readonly id: ToField<UID>; readonly honeyKraftCap: ToField<TreasuryCap<T>>; readonly policyCap: ToField<TokenPolicyCap<T>>; readonly totalBurnt: ToField<"u64">; readonly moduleVersion: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<T>], fields: HoneyManagerFields<T>,) {
        this.$fullTypeName = composeSuiType(HoneyManager.$typeName, ...typeArgs) as `${typeof PKG_V1}::honey_trade::HoneyManager<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.honeyKraftCap = fields.honeyKraftCap;; this.policyCap = fields.policyCap;; this.totalBurnt = fields.totalBurnt;; this.moduleVersion = fields.moduleVersion;
    }

    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): HoneyManagerReified<ToPhantomTypeArgument<T>> { return { typeName: HoneyManager.$typeName, fullTypeName: composeSuiType(HoneyManager.$typeName, ...[extractType(T)]) as `${typeof PKG_V1}::honey_trade::HoneyManager<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: HoneyManager.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => HoneyManager.fromFields(T, fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyManager.fromFieldsWithTypes(T, item,), fromBcs: (data: Uint8Array) => HoneyManager.fromBcs(T, data,), bcs: HoneyManager.bcs, fromJSONField: (field: any) => HoneyManager.fromJSONField(T, field,), fromJSON: (json: Record<string, any>) => HoneyManager.fromJSON(T, json,), fromSuiParsedData: (content: SuiParsedData) => HoneyManager.fromSuiParsedData(T, content,), fromSuiObjectData: (content: SuiObjectData) => HoneyManager.fromSuiObjectData(T, content,), fetch: async (client: SuiClient, id: string) => HoneyManager.fetch(client, T, id,), new: (fields: HoneyManagerFields<ToPhantomTypeArgument<T>>,) => { return new HoneyManager([extractType(T)], fields) }, kind: "StructClassReified", } }

    static get r() { return HoneyManager.reified }

    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<HoneyManager<ToPhantomTypeArgument<T>>>> { return phantom(HoneyManager.reified(T)); } static get p() { return HoneyManager.phantom }

    static get bcs() {
        return bcs.struct("HoneyManager", {

            id: UID.bcs, honey_kraft_cap: TreasuryCap.bcs, policy_cap: TokenPolicyCap.bcs, total_burnt: bcs.u64(), module_version: bcs.u64()

        })
    };

    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): HoneyManager<ToPhantomTypeArgument<T>> { return HoneyManager.reified(typeArg,).new({ id: decodeFromFields(UID.reified(), fields.id), honeyKraftCap: decodeFromFields(TreasuryCap.reified(typeArg), fields.honey_kraft_cap), policyCap: decodeFromFields(TokenPolicyCap.reified(typeArg), fields.policy_cap), totalBurnt: decodeFromFields("u64", fields.total_burnt), moduleVersion: decodeFromFields("u64", fields.module_version) }) }

    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): HoneyManager<ToPhantomTypeArgument<T>> {
        if (!isHoneyManager(item.type)) {
            throw new Error("not a HoneyManager type");

        } assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return HoneyManager.reified(typeArg,).new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), honeyKraftCap: decodeFromFieldsWithTypes(TreasuryCap.reified(typeArg), item.fields.honey_kraft_cap), policyCap: decodeFromFieldsWithTypes(TokenPolicyCap.reified(typeArg), item.fields.policy_cap), totalBurnt: decodeFromFieldsWithTypes("u64", item.fields.total_burnt), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) })
    }

    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): HoneyManager<ToPhantomTypeArgument<T>> { return HoneyManager.fromFields(typeArg, HoneyManager.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, honeyKraftCap: this.honeyKraftCap.toJSONField(), policyCap: this.policyCap.toJSONField(), totalBurnt: this.totalBurnt.toString(), moduleVersion: this.moduleVersion.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): HoneyManager<ToPhantomTypeArgument<T>> { return HoneyManager.reified(typeArg,).new({ id: decodeFromJSONField(UID.reified(), field.id), honeyKraftCap: decodeFromJSONField(TreasuryCap.reified(typeArg), field.honeyKraftCap), policyCap: decodeFromJSONField(TokenPolicyCap.reified(typeArg), field.policyCap), totalBurnt: decodeFromJSONField("u64", field.totalBurnt), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) }) }

    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): HoneyManager<ToPhantomTypeArgument<T>> {
        if (json.$typeName !== HoneyManager.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(HoneyManager.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg],)

        return HoneyManager.fromJSONField(typeArg, json,)
    }

    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): HoneyManager<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyManager(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyManager object`); } return HoneyManager.fromFieldsWithTypes(typeArg, content); }

    static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: SuiObjectData): HoneyManager<ToPhantomTypeArgument<T>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyManager(data.bcs.type)) { throw new Error(`object at is not a HoneyManager object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

            return HoneyManager.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return HoneyManager.fromSuiParsedData(typeArg, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<HoneyManager<ToPhantomTypeArgument<T>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyManager object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyManager(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyManager object`); }

        return HoneyManager.fromSuiObjectData(typeArg, res.data);
    }

}
