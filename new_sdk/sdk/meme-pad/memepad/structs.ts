import * as reified from "../../_framework/reified";
import { String as String1 } from "../../_dependencies/source/0x1/ascii/structs";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { String } from "../../_dependencies/source/0x1/string/structs";
import { Bag } from "../../_dependencies/source/0x2/bag/structs";
import { Balance } from "../../_dependencies/source/0x2/balance/structs";
import { TreasuryCap } from "../../_dependencies/source/0x2/coin/structs";
import { LinkedTable } from "../../_dependencies/source/0x2/linked-table/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { SUI } from "../../_dependencies/source/0x2/sui/structs";
import { TokenPolicyCap } from "../../_dependencies/source/0x2/token/structs";
import { VecMap } from "../../_dependencies/source/0x2/vec-map/structs";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { GameMasterKey, MemepadCapability } from "../../dragon-trainer/dragon-trainer/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== Consumption =============================== */

export function isConsumption(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::Consumption`; }

export interface ConsumptionFields { dummyField: ToField<"bool"> }

export type ConsumptionReified = Reified<Consumption, ConsumptionFields>;

export class Consumption implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::Consumption`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = Consumption.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::Consumption`; readonly $typeArgs: []; readonly $isPhantom = Consumption.$isPhantom;

    readonly dummyField: ToField<"bool">

    private constructor(typeArgs: [], fields: ConsumptionFields,) {
        this.$fullTypeName = composeSuiType(Consumption.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::Consumption`; this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): ConsumptionReified { return { typeName: Consumption.$typeName, fullTypeName: composeSuiType(Consumption.$typeName, ...[]) as `${typeof PKG_V1}::memepad::Consumption`, typeArgs: [] as [], isPhantom: Consumption.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Consumption.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => Consumption.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => Consumption.fromBcs(data,), bcs: Consumption.bcs, fromJSONField: (field: any) => Consumption.fromJSONField(field,), fromJSON: (json: Record<string, any>) => Consumption.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => Consumption.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => Consumption.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => Consumption.fetch(client, id,), new: (fields: ConsumptionFields,) => { return new Consumption([], fields) }, kind: "StructClassReified", } }

    static get r() { return Consumption.reified() }

    static phantom(): PhantomReified<ToTypeStr<Consumption>> { return phantom(Consumption.reified()); } static get p() { return Consumption.phantom() }

    static get bcs() {
        return bcs.struct("Consumption", {

            dummy_field: bcs.bool()

        })
    };

    static fromFields(fields: Record<string, any>): Consumption { return Consumption.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): Consumption {
        if (!isConsumption(item.type)) {
            throw new Error("not a Consumption type");

        }

        return Consumption.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) })
    }

    static fromBcs(data: Uint8Array): Consumption { return Consumption.fromFields(Consumption.bcs.parse(data)) }

    toJSONField() {
        return {

            dummyField: this.dummyField,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): Consumption { return Consumption.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) }) }

    static fromJSON(json: Record<string, any>): Consumption {
        if (json.$typeName !== Consumption.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return Consumption.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): Consumption { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConsumption(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Consumption object`); } return Consumption.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): Consumption {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConsumption(data.bcs.type)) { throw new Error(`object at is not a Consumption object`); }

            return Consumption.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return Consumption.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Consumption> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Consumption object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConsumption(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Consumption object`); }

        return Consumption.fromSuiObjectData(res.data);
    }

}

/* ============================== ConsumptionCondition =============================== */

export function isConsumptionCondition(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::ConsumptionCondition`; }

export interface ConsumptionConditionFields { percent: ToField<VecMap<String, "u64">> }

export type ConsumptionConditionReified = Reified<ConsumptionCondition, ConsumptionConditionFields>;

export class ConsumptionCondition implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::ConsumptionCondition`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = ConsumptionCondition.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::ConsumptionCondition`; readonly $typeArgs: []; readonly $isPhantom = ConsumptionCondition.$isPhantom;

    readonly percent: ToField<VecMap<String, "u64">>

    private constructor(typeArgs: [], fields: ConsumptionConditionFields,) {
        this.$fullTypeName = composeSuiType(ConsumptionCondition.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::ConsumptionCondition`; this.$typeArgs = typeArgs;

        this.percent = fields.percent;
    }

    static reified(): ConsumptionConditionReified { return { typeName: ConsumptionCondition.$typeName, fullTypeName: composeSuiType(ConsumptionCondition.$typeName, ...[]) as `${typeof PKG_V1}::memepad::ConsumptionCondition`, typeArgs: [] as [], isPhantom: ConsumptionCondition.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ConsumptionCondition.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => ConsumptionCondition.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => ConsumptionCondition.fromBcs(data,), bcs: ConsumptionCondition.bcs, fromJSONField: (field: any) => ConsumptionCondition.fromJSONField(field,), fromJSON: (json: Record<string, any>) => ConsumptionCondition.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => ConsumptionCondition.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => ConsumptionCondition.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => ConsumptionCondition.fetch(client, id,), new: (fields: ConsumptionConditionFields,) => { return new ConsumptionCondition([], fields) }, kind: "StructClassReified", } }

    static get r() { return ConsumptionCondition.reified() }

    static phantom(): PhantomReified<ToTypeStr<ConsumptionCondition>> { return phantom(ConsumptionCondition.reified()); } static get p() { return ConsumptionCondition.phantom() }

    static get bcs() {
        return bcs.struct("ConsumptionCondition", {

            percent: VecMap.bcs(String.bcs, bcs.u64())

        })
    };

    static fromFields(fields: Record<string, any>): ConsumptionCondition { return ConsumptionCondition.reified().new({ percent: decodeFromFields(VecMap.reified(String.reified(), "u64"), fields.percent) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): ConsumptionCondition {
        if (!isConsumptionCondition(item.type)) {
            throw new Error("not a ConsumptionCondition type");

        }

        return ConsumptionCondition.reified().new({ percent: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), "u64"), item.fields.percent) })
    }

    static fromBcs(data: Uint8Array): ConsumptionCondition { return ConsumptionCondition.fromFields(ConsumptionCondition.bcs.parse(data)) }

    toJSONField() {
        return {

            percent: this.percent.toJSONField(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): ConsumptionCondition { return ConsumptionCondition.reified().new({ percent: decodeFromJSONField(VecMap.reified(String.reified(), "u64"), field.percent) }) }

    static fromJSON(json: Record<string, any>): ConsumptionCondition {
        if (json.$typeName !== ConsumptionCondition.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return ConsumptionCondition.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): ConsumptionCondition { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConsumptionCondition(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ConsumptionCondition object`); } return ConsumptionCondition.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): ConsumptionCondition {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConsumptionCondition(data.bcs.type)) { throw new Error(`object at is not a ConsumptionCondition object`); }

            return ConsumptionCondition.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return ConsumptionCondition.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ConsumptionCondition> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ConsumptionCondition object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConsumptionCondition(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ConsumptionCondition object`); }

        return ConsumptionCondition.fromSuiObjectData(res.data);
    }

}

/* ============================== BeeBribes =============================== */

export function isBeeBribes(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::memepad::BeeBribes` + '<'); }

export interface BeeBribesFields<X extends PhantomTypeArgument> { memesBribe: ToField<Balance<X>>; perCycleBribe: ToField<"u64">; latestCycle: ToField<"u64">; forBeePerCycle: ToField<"u64">; beeShareClaimable: ToField<"u64"> }

export type BeeBribesReified<X extends PhantomTypeArgument> = Reified<BeeBribes<X>, BeeBribesFields<X>>;

export class BeeBribes<X extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::BeeBribes`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

    readonly $typeName = BeeBribes.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::BeeBribes<${PhantomToTypeStr<X>}>`; readonly $typeArgs: [PhantomToTypeStr<X>]; readonly $isPhantom = BeeBribes.$isPhantom;

    readonly memesBribe: ToField<Balance<X>>; readonly perCycleBribe: ToField<"u64">; readonly latestCycle: ToField<"u64">; readonly forBeePerCycle: ToField<"u64">; readonly beeShareClaimable: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>], fields: BeeBribesFields<X>,) {
        this.$fullTypeName = composeSuiType(BeeBribes.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::BeeBribes<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

        this.memesBribe = fields.memesBribe;; this.perCycleBribe = fields.perCycleBribe;; this.latestCycle = fields.latestCycle;; this.forBeePerCycle = fields.forBeePerCycle;; this.beeShareClaimable = fields.beeShareClaimable;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>>(X: X): BeeBribesReified<ToPhantomTypeArgument<X>> { return { typeName: BeeBribes.$typeName, fullTypeName: composeSuiType(BeeBribes.$typeName, ...[extractType(X)]) as `${typeof PKG_V1}::memepad::BeeBribes<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [extractType(X)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], isPhantom: BeeBribes.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => BeeBribes.fromFields(X, fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeBribes.fromFieldsWithTypes(X, item,), fromBcs: (data: Uint8Array) => BeeBribes.fromBcs(X, data,), bcs: BeeBribes.bcs, fromJSONField: (field: any) => BeeBribes.fromJSONField(X, field,), fromJSON: (json: Record<string, any>) => BeeBribes.fromJSON(X, json,), fromSuiParsedData: (content: SuiParsedData) => BeeBribes.fromSuiParsedData(X, content,), fromSuiObjectData: (content: SuiObjectData) => BeeBribes.fromSuiObjectData(X, content,), fetch: async (client: SuiClient, id: string) => BeeBribes.fetch(client, X, id,), new: (fields: BeeBribesFields<ToPhantomTypeArgument<X>>,) => { return new BeeBribes([extractType(X)], fields) }, kind: "StructClassReified", } }

    static get r() { return BeeBribes.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>>(X: X): PhantomReified<ToTypeStr<BeeBribes<ToPhantomTypeArgument<X>>>> { return phantom(BeeBribes.reified(X)); } static get p() { return BeeBribes.phantom }

    static get bcs() {
        return bcs.struct("BeeBribes", {

            memes_bribe: Balance.bcs, per_cycle_bribe: bcs.u64(), latest_cycle: bcs.u64(), for_bee_per_cycle: bcs.u64(), bee_share_claimable: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, fields: Record<string, any>): BeeBribes<ToPhantomTypeArgument<X>> { return BeeBribes.reified(typeArg,).new({ memesBribe: decodeFromFields(Balance.reified(typeArg), fields.memes_bribe), perCycleBribe: decodeFromFields("u64", fields.per_cycle_bribe), latestCycle: decodeFromFields("u64", fields.latest_cycle), forBeePerCycle: decodeFromFields("u64", fields.for_bee_per_cycle), beeShareClaimable: decodeFromFields("u64", fields.bee_share_claimable) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, item: FieldsWithTypes): BeeBribes<ToPhantomTypeArgument<X>> {
        if (!isBeeBribes(item.type)) {
            throw new Error("not a BeeBribes type");

        } assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return BeeBribes.reified(typeArg,).new({ memesBribe: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.memes_bribe), perCycleBribe: decodeFromFieldsWithTypes("u64", item.fields.per_cycle_bribe), latestCycle: decodeFromFieldsWithTypes("u64", item.fields.latest_cycle), forBeePerCycle: decodeFromFieldsWithTypes("u64", item.fields.for_bee_per_cycle), beeShareClaimable: decodeFromFieldsWithTypes("u64", item.fields.bee_share_claimable) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, data: Uint8Array): BeeBribes<ToPhantomTypeArgument<X>> { return BeeBribes.fromFields(typeArg, BeeBribes.bcs.parse(data)) }

    toJSONField() {
        return {

            memesBribe: this.memesBribe.toJSONField(), perCycleBribe: this.perCycleBribe.toString(), latestCycle: this.latestCycle.toString(), forBeePerCycle: this.forBeePerCycle.toString(), beeShareClaimable: this.beeShareClaimable.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, field: any): BeeBribes<ToPhantomTypeArgument<X>> { return BeeBribes.reified(typeArg,).new({ memesBribe: decodeFromJSONField(Balance.reified(typeArg), field.memesBribe), perCycleBribe: decodeFromJSONField("u64", field.perCycleBribe), latestCycle: decodeFromJSONField("u64", field.latestCycle), forBeePerCycle: decodeFromJSONField("u64", field.forBeePerCycle), beeShareClaimable: decodeFromJSONField("u64", field.beeShareClaimable) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, json: Record<string, any>): BeeBribes<ToPhantomTypeArgument<X>> {
        if (json.$typeName !== BeeBribes.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(BeeBribes.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg],)

        return BeeBribes.fromJSONField(typeArg, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, content: SuiParsedData): BeeBribes<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeBribes(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeBribes object`); } return BeeBribes.fromFieldsWithTypes(typeArg, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, data: SuiObjectData): BeeBribes<ToPhantomTypeArgument<X>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeBribes(data.bcs.type)) { throw new Error(`object at is not a BeeBribes object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

            return BeeBribes.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return BeeBribes.fromSuiParsedData(typeArg, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: X, id: string): Promise<BeeBribes<ToPhantomTypeArgument<X>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeBribes object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeBribes(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeBribes object`); }

        return BeeBribes.fromSuiObjectData(typeArg, res.data);
    }

}

/* ============================== BribesAddedForEmissions =============================== */

export function isBribesAddedForEmissions(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::BribesAddedForEmissions`; }

export interface BribesAddedForEmissionsFields { memePoolAddr: ToField<"address">; memeIdentifier: ToField<String1>; latestCycle: ToField<"u64">; remainingMemeForBribes: ToField<"u64">; beeShareClaimable: ToField<"u64"> }

export type BribesAddedForEmissionsReified = Reified<BribesAddedForEmissions, BribesAddedForEmissionsFields>;

export class BribesAddedForEmissions implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::BribesAddedForEmissions`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = BribesAddedForEmissions.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::BribesAddedForEmissions`; readonly $typeArgs: []; readonly $isPhantom = BribesAddedForEmissions.$isPhantom;

    readonly memePoolAddr: ToField<"address">; readonly memeIdentifier: ToField<String1>; readonly latestCycle: ToField<"u64">; readonly remainingMemeForBribes: ToField<"u64">; readonly beeShareClaimable: ToField<"u64">

    private constructor(typeArgs: [], fields: BribesAddedForEmissionsFields,) {
        this.$fullTypeName = composeSuiType(BribesAddedForEmissions.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::BribesAddedForEmissions`; this.$typeArgs = typeArgs;

        this.memePoolAddr = fields.memePoolAddr;; this.memeIdentifier = fields.memeIdentifier;; this.latestCycle = fields.latestCycle;; this.remainingMemeForBribes = fields.remainingMemeForBribes;; this.beeShareClaimable = fields.beeShareClaimable;
    }

    static reified(): BribesAddedForEmissionsReified { return { typeName: BribesAddedForEmissions.$typeName, fullTypeName: composeSuiType(BribesAddedForEmissions.$typeName, ...[]) as `${typeof PKG_V1}::memepad::BribesAddedForEmissions`, typeArgs: [] as [], isPhantom: BribesAddedForEmissions.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BribesAddedForEmissions.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => BribesAddedForEmissions.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => BribesAddedForEmissions.fromBcs(data,), bcs: BribesAddedForEmissions.bcs, fromJSONField: (field: any) => BribesAddedForEmissions.fromJSONField(field,), fromJSON: (json: Record<string, any>) => BribesAddedForEmissions.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => BribesAddedForEmissions.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => BribesAddedForEmissions.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => BribesAddedForEmissions.fetch(client, id,), new: (fields: BribesAddedForEmissionsFields,) => { return new BribesAddedForEmissions([], fields) }, kind: "StructClassReified", } }

    static get r() { return BribesAddedForEmissions.reified() }

    static phantom(): PhantomReified<ToTypeStr<BribesAddedForEmissions>> { return phantom(BribesAddedForEmissions.reified()); } static get p() { return BribesAddedForEmissions.phantom() }

    static get bcs() {
        return bcs.struct("BribesAddedForEmissions", {

            meme_pool_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), meme_identifier: String1.bcs, latest_cycle: bcs.u64(), remaining_meme_for_bribes: bcs.u64(), bee_share_claimable: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): BribesAddedForEmissions { return BribesAddedForEmissions.reified().new({ memePoolAddr: decodeFromFields("address", fields.meme_pool_addr), memeIdentifier: decodeFromFields(String1.reified(), fields.meme_identifier), latestCycle: decodeFromFields("u64", fields.latest_cycle), remainingMemeForBribes: decodeFromFields("u64", fields.remaining_meme_for_bribes), beeShareClaimable: decodeFromFields("u64", fields.bee_share_claimable) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): BribesAddedForEmissions {
        if (!isBribesAddedForEmissions(item.type)) {
            throw new Error("not a BribesAddedForEmissions type");

        }

        return BribesAddedForEmissions.reified().new({ memePoolAddr: decodeFromFieldsWithTypes("address", item.fields.meme_pool_addr), memeIdentifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.meme_identifier), latestCycle: decodeFromFieldsWithTypes("u64", item.fields.latest_cycle), remainingMemeForBribes: decodeFromFieldsWithTypes("u64", item.fields.remaining_meme_for_bribes), beeShareClaimable: decodeFromFieldsWithTypes("u64", item.fields.bee_share_claimable) })
    }

    static fromBcs(data: Uint8Array): BribesAddedForEmissions { return BribesAddedForEmissions.fromFields(BribesAddedForEmissions.bcs.parse(data)) }

    toJSONField() {
        return {

            memePoolAddr: this.memePoolAddr, memeIdentifier: this.memeIdentifier, latestCycle: this.latestCycle.toString(), remainingMemeForBribes: this.remainingMemeForBribes.toString(), beeShareClaimable: this.beeShareClaimable.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): BribesAddedForEmissions { return BribesAddedForEmissions.reified().new({ memePoolAddr: decodeFromJSONField("address", field.memePoolAddr), memeIdentifier: decodeFromJSONField(String1.reified(), field.memeIdentifier), latestCycle: decodeFromJSONField("u64", field.latestCycle), remainingMemeForBribes: decodeFromJSONField("u64", field.remainingMemeForBribes), beeShareClaimable: decodeFromJSONField("u64", field.beeShareClaimable) }) }

    static fromJSON(json: Record<string, any>): BribesAddedForEmissions {
        if (json.$typeName !== BribesAddedForEmissions.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return BribesAddedForEmissions.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): BribesAddedForEmissions { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBribesAddedForEmissions(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BribesAddedForEmissions object`); } return BribesAddedForEmissions.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): BribesAddedForEmissions {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBribesAddedForEmissions(data.bcs.type)) { throw new Error(`object at is not a BribesAddedForEmissions object`); }

            return BribesAddedForEmissions.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return BribesAddedForEmissions.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<BribesAddedForEmissions> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BribesAddedForEmissions object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBribesAddedForEmissions(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BribesAddedForEmissions object`); }

        return BribesAddedForEmissions.fromSuiObjectData(res.data);
    }

}

/* ============================== CurveParams =============================== */

export function isCurveParams(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::CurveParams`; }

export interface CurveParamsFields { a: ToField<"u64">; b: ToField<"u64">; swapFeeBps: ToField<"u64"> }

export type CurveParamsReified = Reified<CurveParams, CurveParamsFields>;

export class CurveParams implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::CurveParams`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = CurveParams.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::CurveParams`; readonly $typeArgs: []; readonly $isPhantom = CurveParams.$isPhantom;

    readonly a: ToField<"u64">; readonly b: ToField<"u64">; readonly swapFeeBps: ToField<"u64">

    private constructor(typeArgs: [], fields: CurveParamsFields,) {
        this.$fullTypeName = composeSuiType(CurveParams.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::CurveParams`; this.$typeArgs = typeArgs;

        this.a = fields.a;; this.b = fields.b;; this.swapFeeBps = fields.swapFeeBps;
    }

    static reified(): CurveParamsReified { return { typeName: CurveParams.$typeName, fullTypeName: composeSuiType(CurveParams.$typeName, ...[]) as `${typeof PKG_V1}::memepad::CurveParams`, typeArgs: [] as [], isPhantom: CurveParams.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CurveParams.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => CurveParams.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => CurveParams.fromBcs(data,), bcs: CurveParams.bcs, fromJSONField: (field: any) => CurveParams.fromJSONField(field,), fromJSON: (json: Record<string, any>) => CurveParams.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => CurveParams.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => CurveParams.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => CurveParams.fetch(client, id,), new: (fields: CurveParamsFields,) => { return new CurveParams([], fields) }, kind: "StructClassReified", } }

    static get r() { return CurveParams.reified() }

    static phantom(): PhantomReified<ToTypeStr<CurveParams>> { return phantom(CurveParams.reified()); } static get p() { return CurveParams.phantom() }

    static get bcs() {
        return bcs.struct("CurveParams", {

            a: bcs.u64(), b: bcs.u64(), swap_fee_bps: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): CurveParams { return CurveParams.reified().new({ a: decodeFromFields("u64", fields.a), b: decodeFromFields("u64", fields.b), swapFeeBps: decodeFromFields("u64", fields.swap_fee_bps) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): CurveParams {
        if (!isCurveParams(item.type)) {
            throw new Error("not a CurveParams type");

        }

        return CurveParams.reified().new({ a: decodeFromFieldsWithTypes("u64", item.fields.a), b: decodeFromFieldsWithTypes("u64", item.fields.b), swapFeeBps: decodeFromFieldsWithTypes("u64", item.fields.swap_fee_bps) })
    }

    static fromBcs(data: Uint8Array): CurveParams { return CurveParams.fromFields(CurveParams.bcs.parse(data)) }

    toJSONField() {
        return {

            a: this.a.toString(), b: this.b.toString(), swapFeeBps: this.swapFeeBps.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): CurveParams { return CurveParams.reified().new({ a: decodeFromJSONField("u64", field.a), b: decodeFromJSONField("u64", field.b), swapFeeBps: decodeFromJSONField("u64", field.swapFeeBps) }) }

    static fromJSON(json: Record<string, any>): CurveParams {
        if (json.$typeName !== CurveParams.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return CurveParams.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): CurveParams { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurveParams(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CurveParams object`); } return CurveParams.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): CurveParams {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCurveParams(data.bcs.type)) { throw new Error(`object at is not a CurveParams object`); }

            return CurveParams.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return CurveParams.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<CurveParams> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CurveParams object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurveParams(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CurveParams object`); }

        return CurveParams.fromSuiObjectData(res.data);
    }

}

/* ============================== LaunchConfig =============================== */

export function isLaunchConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::LaunchConfig`; }

export interface LaunchConfigFields { initParams: ToField<Vector<"u64">>; weights: ToField<Vector<"u64">> }

export type LaunchConfigReified = Reified<LaunchConfig, LaunchConfigFields>;

export class LaunchConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::LaunchConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = LaunchConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::LaunchConfig`; readonly $typeArgs: []; readonly $isPhantom = LaunchConfig.$isPhantom;

    readonly initParams: ToField<Vector<"u64">>; readonly weights: ToField<Vector<"u64">>

    private constructor(typeArgs: [], fields: LaunchConfigFields,) {
        this.$fullTypeName = composeSuiType(LaunchConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::LaunchConfig`; this.$typeArgs = typeArgs;

        this.initParams = fields.initParams;; this.weights = fields.weights;
    }

    static reified(): LaunchConfigReified { return { typeName: LaunchConfig.$typeName, fullTypeName: composeSuiType(LaunchConfig.$typeName, ...[]) as `${typeof PKG_V1}::memepad::LaunchConfig`, typeArgs: [] as [], isPhantom: LaunchConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LaunchConfig.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => LaunchConfig.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => LaunchConfig.fromBcs(data,), bcs: LaunchConfig.bcs, fromJSONField: (field: any) => LaunchConfig.fromJSONField(field,), fromJSON: (json: Record<string, any>) => LaunchConfig.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => LaunchConfig.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => LaunchConfig.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => LaunchConfig.fetch(client, id,), new: (fields: LaunchConfigFields,) => { return new LaunchConfig([], fields) }, kind: "StructClassReified", } }

    static get r() { return LaunchConfig.reified() }

    static phantom(): PhantomReified<ToTypeStr<LaunchConfig>> { return phantom(LaunchConfig.reified()); } static get p() { return LaunchConfig.phantom() }

    static get bcs() {
        return bcs.struct("LaunchConfig", {

            init_params: bcs.vector(bcs.u64()), weights: bcs.vector(bcs.u64())

        })
    };

    static fromFields(fields: Record<string, any>): LaunchConfig { return LaunchConfig.reified().new({ initParams: decodeFromFields(reified.vector("u64"), fields.init_params), weights: decodeFromFields(reified.vector("u64"), fields.weights) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): LaunchConfig {
        if (!isLaunchConfig(item.type)) {
            throw new Error("not a LaunchConfig type");

        }

        return LaunchConfig.reified().new({ initParams: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.init_params), weights: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.weights) })
    }

    static fromBcs(data: Uint8Array): LaunchConfig { return LaunchConfig.fromFields(LaunchConfig.bcs.parse(data)) }

    toJSONField() {
        return {

            initParams: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.initParams), weights: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.weights),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): LaunchConfig { return LaunchConfig.reified().new({ initParams: decodeFromJSONField(reified.vector("u64"), field.initParams), weights: decodeFromJSONField(reified.vector("u64"), field.weights) }) }

    static fromJSON(json: Record<string, any>): LaunchConfig {
        if (json.$typeName !== LaunchConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return LaunchConfig.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): LaunchConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLaunchConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LaunchConfig object`); } return LaunchConfig.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): LaunchConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLaunchConfig(data.bcs.type)) { throw new Error(`object at is not a LaunchConfig object`); }

            return LaunchConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return LaunchConfig.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<LaunchConfig> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LaunchConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLaunchConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LaunchConfig object`); }

        return LaunchConfig.fromSuiObjectData(res.data);
    }

}

/* ============================== LiquidityMigratedToAmmPool =============================== */

export function isLiquidityMigratedToAmmPool(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::LiquidityMigratedToAmmPool`; }

export interface LiquidityMigratedToAmmPoolFields { memePoolAddr: ToField<"address">; memeIdentifier: ToField<String1>; memeAvailableAmt: ToField<"u64">; suiAvailableAmt: ToField<"u64"> }

export type LiquidityMigratedToAmmPoolReified = Reified<LiquidityMigratedToAmmPool, LiquidityMigratedToAmmPoolFields>;

export class LiquidityMigratedToAmmPool implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::LiquidityMigratedToAmmPool`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = LiquidityMigratedToAmmPool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::LiquidityMigratedToAmmPool`; readonly $typeArgs: []; readonly $isPhantom = LiquidityMigratedToAmmPool.$isPhantom;

    readonly memePoolAddr: ToField<"address">; readonly memeIdentifier: ToField<String1>; readonly memeAvailableAmt: ToField<"u64">; readonly suiAvailableAmt: ToField<"u64">

    private constructor(typeArgs: [], fields: LiquidityMigratedToAmmPoolFields,) {
        this.$fullTypeName = composeSuiType(LiquidityMigratedToAmmPool.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::LiquidityMigratedToAmmPool`; this.$typeArgs = typeArgs;

        this.memePoolAddr = fields.memePoolAddr;; this.memeIdentifier = fields.memeIdentifier;; this.memeAvailableAmt = fields.memeAvailableAmt;; this.suiAvailableAmt = fields.suiAvailableAmt;
    }

    static reified(): LiquidityMigratedToAmmPoolReified { return { typeName: LiquidityMigratedToAmmPool.$typeName, fullTypeName: composeSuiType(LiquidityMigratedToAmmPool.$typeName, ...[]) as `${typeof PKG_V1}::memepad::LiquidityMigratedToAmmPool`, typeArgs: [] as [], isPhantom: LiquidityMigratedToAmmPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LiquidityMigratedToAmmPool.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidityMigratedToAmmPool.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => LiquidityMigratedToAmmPool.fromBcs(data,), bcs: LiquidityMigratedToAmmPool.bcs, fromJSONField: (field: any) => LiquidityMigratedToAmmPool.fromJSONField(field,), fromJSON: (json: Record<string, any>) => LiquidityMigratedToAmmPool.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => LiquidityMigratedToAmmPool.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => LiquidityMigratedToAmmPool.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => LiquidityMigratedToAmmPool.fetch(client, id,), new: (fields: LiquidityMigratedToAmmPoolFields,) => { return new LiquidityMigratedToAmmPool([], fields) }, kind: "StructClassReified", } }

    static get r() { return LiquidityMigratedToAmmPool.reified() }

    static phantom(): PhantomReified<ToTypeStr<LiquidityMigratedToAmmPool>> { return phantom(LiquidityMigratedToAmmPool.reified()); } static get p() { return LiquidityMigratedToAmmPool.phantom() }

    static get bcs() {
        return bcs.struct("LiquidityMigratedToAmmPool", {

            meme_pool_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), meme_identifier: String1.bcs, meme_available_amt: bcs.u64(), sui_available_amt: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): LiquidityMigratedToAmmPool { return LiquidityMigratedToAmmPool.reified().new({ memePoolAddr: decodeFromFields("address", fields.meme_pool_addr), memeIdentifier: decodeFromFields(String1.reified(), fields.meme_identifier), memeAvailableAmt: decodeFromFields("u64", fields.meme_available_amt), suiAvailableAmt: decodeFromFields("u64", fields.sui_available_amt) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidityMigratedToAmmPool {
        if (!isLiquidityMigratedToAmmPool(item.type)) {
            throw new Error("not a LiquidityMigratedToAmmPool type");

        }

        return LiquidityMigratedToAmmPool.reified().new({ memePoolAddr: decodeFromFieldsWithTypes("address", item.fields.meme_pool_addr), memeIdentifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.meme_identifier), memeAvailableAmt: decodeFromFieldsWithTypes("u64", item.fields.meme_available_amt), suiAvailableAmt: decodeFromFieldsWithTypes("u64", item.fields.sui_available_amt) })
    }

    static fromBcs(data: Uint8Array): LiquidityMigratedToAmmPool { return LiquidityMigratedToAmmPool.fromFields(LiquidityMigratedToAmmPool.bcs.parse(data)) }

    toJSONField() {
        return {

            memePoolAddr: this.memePoolAddr, memeIdentifier: this.memeIdentifier, memeAvailableAmt: this.memeAvailableAmt.toString(), suiAvailableAmt: this.suiAvailableAmt.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): LiquidityMigratedToAmmPool { return LiquidityMigratedToAmmPool.reified().new({ memePoolAddr: decodeFromJSONField("address", field.memePoolAddr), memeIdentifier: decodeFromJSONField(String1.reified(), field.memeIdentifier), memeAvailableAmt: decodeFromJSONField("u64", field.memeAvailableAmt), suiAvailableAmt: decodeFromJSONField("u64", field.suiAvailableAmt) }) }

    static fromJSON(json: Record<string, any>): LiquidityMigratedToAmmPool {
        if (json.$typeName !== LiquidityMigratedToAmmPool.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return LiquidityMigratedToAmmPool.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): LiquidityMigratedToAmmPool { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLiquidityMigratedToAmmPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LiquidityMigratedToAmmPool object`); } return LiquidityMigratedToAmmPool.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): LiquidityMigratedToAmmPool {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidityMigratedToAmmPool(data.bcs.type)) { throw new Error(`object at is not a LiquidityMigratedToAmmPool object`); }

            return LiquidityMigratedToAmmPool.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return LiquidityMigratedToAmmPool.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<LiquidityMigratedToAmmPool> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LiquidityMigratedToAmmPool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidityMigratedToAmmPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LiquidityMigratedToAmmPool object`); }

        return LiquidityMigratedToAmmPool.fromSuiObjectData(res.data);
    }

}

/* ============================== MemeBurnt =============================== */

export function isMemeBurnt(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::MemeBurnt`; }

export interface MemeBurntFields { identifier: ToField<String1>; memeToBurnAmt: ToField<"u64"> }

export type MemeBurntReified = Reified<MemeBurnt, MemeBurntFields>;

export class MemeBurnt implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::MemeBurnt`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = MemeBurnt.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::MemeBurnt`; readonly $typeArgs: []; readonly $isPhantom = MemeBurnt.$isPhantom;

    readonly identifier: ToField<String1>; readonly memeToBurnAmt: ToField<"u64">

    private constructor(typeArgs: [], fields: MemeBurntFields,) {
        this.$fullTypeName = composeSuiType(MemeBurnt.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::MemeBurnt`; this.$typeArgs = typeArgs;

        this.identifier = fields.identifier;; this.memeToBurnAmt = fields.memeToBurnAmt;
    }

    static reified(): MemeBurntReified { return { typeName: MemeBurnt.$typeName, fullTypeName: composeSuiType(MemeBurnt.$typeName, ...[]) as `${typeof PKG_V1}::memepad::MemeBurnt`, typeArgs: [] as [], isPhantom: MemeBurnt.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MemeBurnt.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MemeBurnt.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => MemeBurnt.fromBcs(data,), bcs: MemeBurnt.bcs, fromJSONField: (field: any) => MemeBurnt.fromJSONField(field,), fromJSON: (json: Record<string, any>) => MemeBurnt.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => MemeBurnt.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => MemeBurnt.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => MemeBurnt.fetch(client, id,), new: (fields: MemeBurntFields,) => { return new MemeBurnt([], fields) }, kind: "StructClassReified", } }

    static get r() { return MemeBurnt.reified() }

    static phantom(): PhantomReified<ToTypeStr<MemeBurnt>> { return phantom(MemeBurnt.reified()); } static get p() { return MemeBurnt.phantom() }

    static get bcs() {
        return bcs.struct("MemeBurnt", {

            identifier: String1.bcs, meme_to_burn_amt: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): MemeBurnt { return MemeBurnt.reified().new({ identifier: decodeFromFields(String1.reified(), fields.identifier), memeToBurnAmt: decodeFromFields("u64", fields.meme_to_burn_amt) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): MemeBurnt {
        if (!isMemeBurnt(item.type)) {
            throw new Error("not a MemeBurnt type");

        }

        return MemeBurnt.reified().new({ identifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.identifier), memeToBurnAmt: decodeFromFieldsWithTypes("u64", item.fields.meme_to_burn_amt) })
    }

    static fromBcs(data: Uint8Array): MemeBurnt { return MemeBurnt.fromFields(MemeBurnt.bcs.parse(data)) }

    toJSONField() {
        return {

            identifier: this.identifier, memeToBurnAmt: this.memeToBurnAmt.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): MemeBurnt { return MemeBurnt.reified().new({ identifier: decodeFromJSONField(String1.reified(), field.identifier), memeToBurnAmt: decodeFromJSONField("u64", field.memeToBurnAmt) }) }

    static fromJSON(json: Record<string, any>): MemeBurnt {
        if (json.$typeName !== MemeBurnt.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return MemeBurnt.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): MemeBurnt { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemeBurnt(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemeBurnt object`); } return MemeBurnt.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): MemeBurnt {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemeBurnt(data.bcs.type)) { throw new Error(`object at is not a MemeBurnt object`); }

            return MemeBurnt.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MemeBurnt.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MemeBurnt> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemeBurnt object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemeBurnt(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemeBurnt object`); }

        return MemeBurnt.fromSuiObjectData(res.data);
    }

}

/* ============================== MemeCustody =============================== */

export function isMemeCustody(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::memepad::MemeCustody` + '<'); }

export interface MemeCustodyFields<X extends PhantomTypeArgument> { id: ToField<UID>; memeBalance: ToField<Balance<X>> }

export type MemeCustodyReified<X extends PhantomTypeArgument> = Reified<MemeCustody<X>, MemeCustodyFields<X>>;

export class MemeCustody<X extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::MemeCustody`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

    readonly $typeName = MemeCustody.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::MemeCustody<${PhantomToTypeStr<X>}>`; readonly $typeArgs: [PhantomToTypeStr<X>]; readonly $isPhantom = MemeCustody.$isPhantom;

    readonly id: ToField<UID>; readonly memeBalance: ToField<Balance<X>>

    private constructor(typeArgs: [PhantomToTypeStr<X>], fields: MemeCustodyFields<X>,) {
        this.$fullTypeName = composeSuiType(MemeCustody.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::MemeCustody<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.memeBalance = fields.memeBalance;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>>(X: X): MemeCustodyReified<ToPhantomTypeArgument<X>> { return { typeName: MemeCustody.$typeName, fullTypeName: composeSuiType(MemeCustody.$typeName, ...[extractType(X)]) as `${typeof PKG_V1}::memepad::MemeCustody<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [extractType(X)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], isPhantom: MemeCustody.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => MemeCustody.fromFields(X, fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MemeCustody.fromFieldsWithTypes(X, item,), fromBcs: (data: Uint8Array) => MemeCustody.fromBcs(X, data,), bcs: MemeCustody.bcs, fromJSONField: (field: any) => MemeCustody.fromJSONField(X, field,), fromJSON: (json: Record<string, any>) => MemeCustody.fromJSON(X, json,), fromSuiParsedData: (content: SuiParsedData) => MemeCustody.fromSuiParsedData(X, content,), fromSuiObjectData: (content: SuiObjectData) => MemeCustody.fromSuiObjectData(X, content,), fetch: async (client: SuiClient, id: string) => MemeCustody.fetch(client, X, id,), new: (fields: MemeCustodyFields<ToPhantomTypeArgument<X>>,) => { return new MemeCustody([extractType(X)], fields) }, kind: "StructClassReified", } }

    static get r() { return MemeCustody.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>>(X: X): PhantomReified<ToTypeStr<MemeCustody<ToPhantomTypeArgument<X>>>> { return phantom(MemeCustody.reified(X)); } static get p() { return MemeCustody.phantom }

    static get bcs() {
        return bcs.struct("MemeCustody", {

            id: UID.bcs, meme_balance: Balance.bcs

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, fields: Record<string, any>): MemeCustody<ToPhantomTypeArgument<X>> { return MemeCustody.reified(typeArg,).new({ id: decodeFromFields(UID.reified(), fields.id), memeBalance: decodeFromFields(Balance.reified(typeArg), fields.meme_balance) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, item: FieldsWithTypes): MemeCustody<ToPhantomTypeArgument<X>> {
        if (!isMemeCustody(item.type)) {
            throw new Error("not a MemeCustody type");

        } assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return MemeCustody.reified(typeArg,).new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), memeBalance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.meme_balance) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, data: Uint8Array): MemeCustody<ToPhantomTypeArgument<X>> { return MemeCustody.fromFields(typeArg, MemeCustody.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, memeBalance: this.memeBalance.toJSONField(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, field: any): MemeCustody<ToPhantomTypeArgument<X>> { return MemeCustody.reified(typeArg,).new({ id: decodeFromJSONField(UID.reified(), field.id), memeBalance: decodeFromJSONField(Balance.reified(typeArg), field.memeBalance) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, json: Record<string, any>): MemeCustody<ToPhantomTypeArgument<X>> {
        if (json.$typeName !== MemeCustody.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(MemeCustody.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg],)

        return MemeCustody.fromJSONField(typeArg, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, content: SuiParsedData): MemeCustody<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemeCustody(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemeCustody object`); } return MemeCustody.fromFieldsWithTypes(typeArg, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, data: SuiObjectData): MemeCustody<ToPhantomTypeArgument<X>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemeCustody(data.bcs.type)) { throw new Error(`object at is not a MemeCustody object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

            return MemeCustody.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MemeCustody.fromSuiParsedData(typeArg, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: X, id: string): Promise<MemeCustody<ToPhantomTypeArgument<X>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemeCustody object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemeCustody(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemeCustody object`); }

        return MemeCustody.fromSuiObjectData(typeArg, res.data);
    }

}

/* ============================== MemeLaunchPad =============================== */

export function isMemeLaunchPad(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::MemeLaunchPad`; }

export interface MemeLaunchPadFields { id: ToField<UID>; memeCap: ToField<MemepadCapability>; masterKey: ToField<GameMasterKey>; curve: ToField<CurveParams>; adminFeePct: ToField<"u64">; isLive: ToField<"bool">; noBeeLaunchEnabled: ToField<"bool">; poolInitFee: ToField<"u64">; meanFdvIncreasePerStep: ToField<"u64">; marketCapForMigration: ToField<"u64">; memeSupplyDist: ToField<MemeSupplyConfig>; ammPoolConfig: ToField<LaunchConfig>; supportedMemes: ToField<LinkedTable<String1, "address">>; bag: ToField<Bag>; version: ToField<"u64"> }

export type MemeLaunchPadReified = Reified<MemeLaunchPad, MemeLaunchPadFields>;

export class MemeLaunchPad implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::MemeLaunchPad`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = MemeLaunchPad.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::MemeLaunchPad`; readonly $typeArgs: []; readonly $isPhantom = MemeLaunchPad.$isPhantom;

    readonly id: ToField<UID>; readonly memeCap: ToField<MemepadCapability>; readonly masterKey: ToField<GameMasterKey>; readonly curve: ToField<CurveParams>; readonly adminFeePct: ToField<"u64">; readonly isLive: ToField<"bool">; readonly noBeeLaunchEnabled: ToField<"bool">; readonly poolInitFee: ToField<"u64">; readonly meanFdvIncreasePerStep: ToField<"u64">; readonly marketCapForMigration: ToField<"u64">; readonly memeSupplyDist: ToField<MemeSupplyConfig>; readonly ammPoolConfig: ToField<LaunchConfig>; readonly supportedMemes: ToField<LinkedTable<String1, "address">>; readonly bag: ToField<Bag>; readonly version: ToField<"u64">

    private constructor(typeArgs: [], fields: MemeLaunchPadFields,) {
        this.$fullTypeName = composeSuiType(MemeLaunchPad.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::MemeLaunchPad`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.memeCap = fields.memeCap;; this.masterKey = fields.masterKey;; this.curve = fields.curve;; this.adminFeePct = fields.adminFeePct;; this.isLive = fields.isLive;; this.noBeeLaunchEnabled = fields.noBeeLaunchEnabled;; this.poolInitFee = fields.poolInitFee;; this.meanFdvIncreasePerStep = fields.meanFdvIncreasePerStep;; this.marketCapForMigration = fields.marketCapForMigration;; this.memeSupplyDist = fields.memeSupplyDist;; this.ammPoolConfig = fields.ammPoolConfig;; this.supportedMemes = fields.supportedMemes;; this.bag = fields.bag;; this.version = fields.version;
    }

    static reified(): MemeLaunchPadReified { return { typeName: MemeLaunchPad.$typeName, fullTypeName: composeSuiType(MemeLaunchPad.$typeName, ...[]) as `${typeof PKG_V1}::memepad::MemeLaunchPad`, typeArgs: [] as [], isPhantom: MemeLaunchPad.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MemeLaunchPad.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MemeLaunchPad.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => MemeLaunchPad.fromBcs(data,), bcs: MemeLaunchPad.bcs, fromJSONField: (field: any) => MemeLaunchPad.fromJSONField(field,), fromJSON: (json: Record<string, any>) => MemeLaunchPad.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => MemeLaunchPad.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => MemeLaunchPad.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => MemeLaunchPad.fetch(client, id,), new: (fields: MemeLaunchPadFields,) => { return new MemeLaunchPad([], fields) }, kind: "StructClassReified", } }

    static get r() { return MemeLaunchPad.reified() }

    static phantom(): PhantomReified<ToTypeStr<MemeLaunchPad>> { return phantom(MemeLaunchPad.reified()); } static get p() { return MemeLaunchPad.phantom() }

    static get bcs() {
        return bcs.struct("MemeLaunchPad", {

            id: UID.bcs, meme_cap: MemepadCapability.bcs, master_key: GameMasterKey.bcs, curve: CurveParams.bcs, admin_fee_pct: bcs.u64(), is_live: bcs.bool(), no_bee_launch_enabled: bcs.bool(), pool_init_fee: bcs.u64(), mean_fdv_increase_per_step: bcs.u64(), market_cap_for_migration: bcs.u64(), meme_supply_dist: MemeSupplyConfig.bcs, amm_pool_config: LaunchConfig.bcs, supported_memes: LinkedTable.bcs(String1.bcs), bag: Bag.bcs, version: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): MemeLaunchPad { return MemeLaunchPad.reified().new({ id: decodeFromFields(UID.reified(), fields.id), memeCap: decodeFromFields(MemepadCapability.reified(), fields.meme_cap), masterKey: decodeFromFields(GameMasterKey.reified(), fields.master_key), curve: decodeFromFields(CurveParams.reified(), fields.curve), adminFeePct: decodeFromFields("u64", fields.admin_fee_pct), isLive: decodeFromFields("bool", fields.is_live), noBeeLaunchEnabled: decodeFromFields("bool", fields.no_bee_launch_enabled), poolInitFee: decodeFromFields("u64", fields.pool_init_fee), meanFdvIncreasePerStep: decodeFromFields("u64", fields.mean_fdv_increase_per_step), marketCapForMigration: decodeFromFields("u64", fields.market_cap_for_migration), memeSupplyDist: decodeFromFields(MemeSupplyConfig.reified(), fields.meme_supply_dist), ammPoolConfig: decodeFromFields(LaunchConfig.reified(), fields.amm_pool_config), supportedMemes: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.supported_memes), bag: decodeFromFields(Bag.reified(), fields.bag), version: decodeFromFields("u64", fields.version) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): MemeLaunchPad {
        if (!isMemeLaunchPad(item.type)) {
            throw new Error("not a MemeLaunchPad type");

        }

        return MemeLaunchPad.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), memeCap: decodeFromFieldsWithTypes(MemepadCapability.reified(), item.fields.meme_cap), masterKey: decodeFromFieldsWithTypes(GameMasterKey.reified(), item.fields.master_key), curve: decodeFromFieldsWithTypes(CurveParams.reified(), item.fields.curve), adminFeePct: decodeFromFieldsWithTypes("u64", item.fields.admin_fee_pct), isLive: decodeFromFieldsWithTypes("bool", item.fields.is_live), noBeeLaunchEnabled: decodeFromFieldsWithTypes("bool", item.fields.no_bee_launch_enabled), poolInitFee: decodeFromFieldsWithTypes("u64", item.fields.pool_init_fee), meanFdvIncreasePerStep: decodeFromFieldsWithTypes("u64", item.fields.mean_fdv_increase_per_step), marketCapForMigration: decodeFromFieldsWithTypes("u64", item.fields.market_cap_for_migration), memeSupplyDist: decodeFromFieldsWithTypes(MemeSupplyConfig.reified(), item.fields.meme_supply_dist), ammPoolConfig: decodeFromFieldsWithTypes(LaunchConfig.reified(), item.fields.amm_pool_config), supportedMemes: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.supported_memes), bag: decodeFromFieldsWithTypes(Bag.reified(), item.fields.bag), version: decodeFromFieldsWithTypes("u64", item.fields.version) })
    }

    static fromBcs(data: Uint8Array): MemeLaunchPad { return MemeLaunchPad.fromFields(MemeLaunchPad.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, memeCap: this.memeCap.toJSONField(), masterKey: this.masterKey.toJSONField(), curve: this.curve.toJSONField(), adminFeePct: this.adminFeePct.toString(), isLive: this.isLive, noBeeLaunchEnabled: this.noBeeLaunchEnabled, poolInitFee: this.poolInitFee.toString(), meanFdvIncreasePerStep: this.meanFdvIncreasePerStep.toString(), marketCapForMigration: this.marketCapForMigration.toString(), memeSupplyDist: this.memeSupplyDist.toJSONField(), ammPoolConfig: this.ammPoolConfig.toJSONField(), supportedMemes: this.supportedMemes.toJSONField(), bag: this.bag.toJSONField(), version: this.version.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): MemeLaunchPad { return MemeLaunchPad.reified().new({ id: decodeFromJSONField(UID.reified(), field.id), memeCap: decodeFromJSONField(MemepadCapability.reified(), field.memeCap), masterKey: decodeFromJSONField(GameMasterKey.reified(), field.masterKey), curve: decodeFromJSONField(CurveParams.reified(), field.curve), adminFeePct: decodeFromJSONField("u64", field.adminFeePct), isLive: decodeFromJSONField("bool", field.isLive), noBeeLaunchEnabled: decodeFromJSONField("bool", field.noBeeLaunchEnabled), poolInitFee: decodeFromJSONField("u64", field.poolInitFee), meanFdvIncreasePerStep: decodeFromJSONField("u64", field.meanFdvIncreasePerStep), marketCapForMigration: decodeFromJSONField("u64", field.marketCapForMigration), memeSupplyDist: decodeFromJSONField(MemeSupplyConfig.reified(), field.memeSupplyDist), ammPoolConfig: decodeFromJSONField(LaunchConfig.reified(), field.ammPoolConfig), supportedMemes: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.supportedMemes), bag: decodeFromJSONField(Bag.reified(), field.bag), version: decodeFromJSONField("u64", field.version) }) }

    static fromJSON(json: Record<string, any>): MemeLaunchPad {
        if (json.$typeName !== MemeLaunchPad.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return MemeLaunchPad.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): MemeLaunchPad { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemeLaunchPad(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemeLaunchPad object`); } return MemeLaunchPad.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): MemeLaunchPad {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemeLaunchPad(data.bcs.type)) { throw new Error(`object at is not a MemeLaunchPad object`); }

            return MemeLaunchPad.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MemeLaunchPad.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MemeLaunchPad> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemeLaunchPad object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemeLaunchPad(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemeLaunchPad object`); }

        return MemeLaunchPad.fromSuiObjectData(res.data);
    }

}

/* ============================== MemePool =============================== */

export function isMemePool(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::memepad::MemePool` + '<'); }

export interface MemePoolFields<X extends PhantomTypeArgument> { id: ToField<UID>; beeVersion: ToField<"u64">; totalMemeSupply: ToField<"u64">; initTimestamp: ToField<"u64">; twitter: ToField<String>; telegram: ToField<String>; treasuryCap: ToField<TreasuryCap<X>>; feesCollected: ToField<Balance<ToPhantom<SUI>>>; curve: ToField<CurveParams>; ammPoolType: ToField<String1>; curStep: ToField<"u64">; memeAvailable: ToField<Balance<X>>; suiAvailable: ToField<Balance<ToPhantom<SUI>>>; curMarketCap: ToField<"u64">; memeForPool: ToField<Balance<X>>; burnTax: ToField<"u64">; policyCap: ToField<Option<TokenPolicyCap<X>>>; beeBribes: ToField<BeeBribes<X>>; meanFdvIncreasePerStep: ToField<"u64">; marketCapForMigration: ToField<"u64">; hasMigrated: ToField<"bool">; version: ToField<"u64"> }

export type MemePoolReified<X extends PhantomTypeArgument> = Reified<MemePool<X>, MemePoolFields<X>>;

export class MemePool<X extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::MemePool`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

    readonly $typeName = MemePool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::MemePool<${PhantomToTypeStr<X>}>`; readonly $typeArgs: [PhantomToTypeStr<X>]; readonly $isPhantom = MemePool.$isPhantom;

    readonly id: ToField<UID>; readonly beeVersion: ToField<"u64">; readonly totalMemeSupply: ToField<"u64">; readonly initTimestamp: ToField<"u64">; readonly twitter: ToField<String>; readonly telegram: ToField<String>; readonly treasuryCap: ToField<TreasuryCap<X>>; readonly feesCollected: ToField<Balance<ToPhantom<SUI>>>; readonly curve: ToField<CurveParams>; readonly ammPoolType: ToField<String1>; readonly curStep: ToField<"u64">; readonly memeAvailable: ToField<Balance<X>>; readonly suiAvailable: ToField<Balance<ToPhantom<SUI>>>; readonly curMarketCap: ToField<"u64">; readonly memeForPool: ToField<Balance<X>>; readonly burnTax: ToField<"u64">; readonly policyCap: ToField<Option<TokenPolicyCap<X>>>; readonly beeBribes: ToField<BeeBribes<X>>; readonly meanFdvIncreasePerStep: ToField<"u64">; readonly marketCapForMigration: ToField<"u64">; readonly hasMigrated: ToField<"bool">; readonly version: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>], fields: MemePoolFields<X>,) {
        this.$fullTypeName = composeSuiType(MemePool.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::MemePool<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.beeVersion = fields.beeVersion;; this.totalMemeSupply = fields.totalMemeSupply;; this.initTimestamp = fields.initTimestamp;; this.twitter = fields.twitter;; this.telegram = fields.telegram;; this.treasuryCap = fields.treasuryCap;; this.feesCollected = fields.feesCollected;; this.curve = fields.curve;; this.ammPoolType = fields.ammPoolType;; this.curStep = fields.curStep;; this.memeAvailable = fields.memeAvailable;; this.suiAvailable = fields.suiAvailable;; this.curMarketCap = fields.curMarketCap;; this.memeForPool = fields.memeForPool;; this.burnTax = fields.burnTax;; this.policyCap = fields.policyCap;; this.beeBribes = fields.beeBribes;; this.meanFdvIncreasePerStep = fields.meanFdvIncreasePerStep;; this.marketCapForMigration = fields.marketCapForMigration;; this.hasMigrated = fields.hasMigrated;; this.version = fields.version;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>>(X: X): MemePoolReified<ToPhantomTypeArgument<X>> { return { typeName: MemePool.$typeName, fullTypeName: composeSuiType(MemePool.$typeName, ...[extractType(X)]) as `${typeof PKG_V1}::memepad::MemePool<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [extractType(X)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], isPhantom: MemePool.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => MemePool.fromFields(X, fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MemePool.fromFieldsWithTypes(X, item,), fromBcs: (data: Uint8Array) => MemePool.fromBcs(X, data,), bcs: MemePool.bcs, fromJSONField: (field: any) => MemePool.fromJSONField(X, field,), fromJSON: (json: Record<string, any>) => MemePool.fromJSON(X, json,), fromSuiParsedData: (content: SuiParsedData) => MemePool.fromSuiParsedData(X, content,), fromSuiObjectData: (content: SuiObjectData) => MemePool.fromSuiObjectData(X, content,), fetch: async (client: SuiClient, id: string) => MemePool.fetch(client, X, id,), new: (fields: MemePoolFields<ToPhantomTypeArgument<X>>,) => { return new MemePool([extractType(X)], fields) }, kind: "StructClassReified", } }

    static get r() { return MemePool.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>>(X: X): PhantomReified<ToTypeStr<MemePool<ToPhantomTypeArgument<X>>>> { return phantom(MemePool.reified(X)); } static get p() { return MemePool.phantom }

    static get bcs() {
        return bcs.struct("MemePool", {

            id: UID.bcs, bee_version: bcs.u64(), total_meme_supply: bcs.u64(), init_timestamp: bcs.u64(), twitter: String.bcs, telegram: String.bcs, treasury_cap: TreasuryCap.bcs, fees_collected: Balance.bcs, curve: CurveParams.bcs, amm_pool_type: String1.bcs, cur_step: bcs.u64(), meme_available: Balance.bcs, sui_available: Balance.bcs, cur_market_cap: bcs.u64(), meme_for_pool: Balance.bcs, burn_tax: bcs.u64(), policy_cap: Option.bcs(TokenPolicyCap.bcs), bee_bribes: BeeBribes.bcs, mean_fdv_increase_per_step: bcs.u64(), market_cap_for_migration: bcs.u64(), has_migrated: bcs.bool(), version: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, fields: Record<string, any>): MemePool<ToPhantomTypeArgument<X>> { return MemePool.reified(typeArg,).new({ id: decodeFromFields(UID.reified(), fields.id), beeVersion: decodeFromFields("u64", fields.bee_version), totalMemeSupply: decodeFromFields("u64", fields.total_meme_supply), initTimestamp: decodeFromFields("u64", fields.init_timestamp), twitter: decodeFromFields(String.reified(), fields.twitter), telegram: decodeFromFields(String.reified(), fields.telegram), treasuryCap: decodeFromFields(TreasuryCap.reified(typeArg), fields.treasury_cap), feesCollected: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.fees_collected), curve: decodeFromFields(CurveParams.reified(), fields.curve), ammPoolType: decodeFromFields(String1.reified(), fields.amm_pool_type), curStep: decodeFromFields("u64", fields.cur_step), memeAvailable: decodeFromFields(Balance.reified(typeArg), fields.meme_available), suiAvailable: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.sui_available), curMarketCap: decodeFromFields("u64", fields.cur_market_cap), memeForPool: decodeFromFields(Balance.reified(typeArg), fields.meme_for_pool), burnTax: decodeFromFields("u64", fields.burn_tax), policyCap: decodeFromFields(Option.reified(TokenPolicyCap.reified(typeArg)), fields.policy_cap), beeBribes: decodeFromFields(BeeBribes.reified(typeArg), fields.bee_bribes), meanFdvIncreasePerStep: decodeFromFields("u64", fields.mean_fdv_increase_per_step), marketCapForMigration: decodeFromFields("u64", fields.market_cap_for_migration), hasMigrated: decodeFromFields("bool", fields.has_migrated), version: decodeFromFields("u64", fields.version) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, item: FieldsWithTypes): MemePool<ToPhantomTypeArgument<X>> {
        if (!isMemePool(item.type)) {
            throw new Error("not a MemePool type");

        } assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return MemePool.reified(typeArg,).new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), totalMemeSupply: decodeFromFieldsWithTypes("u64", item.fields.total_meme_supply), initTimestamp: decodeFromFieldsWithTypes("u64", item.fields.init_timestamp), twitter: decodeFromFieldsWithTypes(String.reified(), item.fields.twitter), telegram: decodeFromFieldsWithTypes(String.reified(), item.fields.telegram), treasuryCap: decodeFromFieldsWithTypes(TreasuryCap.reified(typeArg), item.fields.treasury_cap), feesCollected: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.fees_collected), curve: decodeFromFieldsWithTypes(CurveParams.reified(), item.fields.curve), ammPoolType: decodeFromFieldsWithTypes(String1.reified(), item.fields.amm_pool_type), curStep: decodeFromFieldsWithTypes("u64", item.fields.cur_step), memeAvailable: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.meme_available), suiAvailable: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.sui_available), curMarketCap: decodeFromFieldsWithTypes("u64", item.fields.cur_market_cap), memeForPool: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.meme_for_pool), burnTax: decodeFromFieldsWithTypes("u64", item.fields.burn_tax), policyCap: decodeFromFieldsWithTypes(Option.reified(TokenPolicyCap.reified(typeArg)), item.fields.policy_cap), beeBribes: decodeFromFieldsWithTypes(BeeBribes.reified(typeArg), item.fields.bee_bribes), meanFdvIncreasePerStep: decodeFromFieldsWithTypes("u64", item.fields.mean_fdv_increase_per_step), marketCapForMigration: decodeFromFieldsWithTypes("u64", item.fields.market_cap_for_migration), hasMigrated: decodeFromFieldsWithTypes("bool", item.fields.has_migrated), version: decodeFromFieldsWithTypes("u64", item.fields.version) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, data: Uint8Array): MemePool<ToPhantomTypeArgument<X>> { return MemePool.fromFields(typeArg, MemePool.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, beeVersion: this.beeVersion.toString(), totalMemeSupply: this.totalMemeSupply.toString(), initTimestamp: this.initTimestamp.toString(), twitter: this.twitter, telegram: this.telegram, treasuryCap: this.treasuryCap.toJSONField(), feesCollected: this.feesCollected.toJSONField(), curve: this.curve.toJSONField(), ammPoolType: this.ammPoolType, curStep: this.curStep.toString(), memeAvailable: this.memeAvailable.toJSONField(), suiAvailable: this.suiAvailable.toJSONField(), curMarketCap: this.curMarketCap.toString(), memeForPool: this.memeForPool.toJSONField(), burnTax: this.burnTax.toString(), policyCap: fieldToJSON<Option<TokenPolicyCap<X>>>(`${Option.$typeName}<${TokenPolicyCap.$typeName}<${this.$typeArgs[0]}>>`, this.policyCap), beeBribes: this.beeBribes.toJSONField(), meanFdvIncreasePerStep: this.meanFdvIncreasePerStep.toString(), marketCapForMigration: this.marketCapForMigration.toString(), hasMigrated: this.hasMigrated, version: this.version.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, field: any): MemePool<ToPhantomTypeArgument<X>> { return MemePool.reified(typeArg,).new({ id: decodeFromJSONField(UID.reified(), field.id), beeVersion: decodeFromJSONField("u64", field.beeVersion), totalMemeSupply: decodeFromJSONField("u64", field.totalMemeSupply), initTimestamp: decodeFromJSONField("u64", field.initTimestamp), twitter: decodeFromJSONField(String.reified(), field.twitter), telegram: decodeFromJSONField(String.reified(), field.telegram), treasuryCap: decodeFromJSONField(TreasuryCap.reified(typeArg), field.treasuryCap), feesCollected: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.feesCollected), curve: decodeFromJSONField(CurveParams.reified(), field.curve), ammPoolType: decodeFromJSONField(String1.reified(), field.ammPoolType), curStep: decodeFromJSONField("u64", field.curStep), memeAvailable: decodeFromJSONField(Balance.reified(typeArg), field.memeAvailable), suiAvailable: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.suiAvailable), curMarketCap: decodeFromJSONField("u64", field.curMarketCap), memeForPool: decodeFromJSONField(Balance.reified(typeArg), field.memeForPool), burnTax: decodeFromJSONField("u64", field.burnTax), policyCap: decodeFromJSONField(Option.reified(TokenPolicyCap.reified(typeArg)), field.policyCap), beeBribes: decodeFromJSONField(BeeBribes.reified(typeArg), field.beeBribes), meanFdvIncreasePerStep: decodeFromJSONField("u64", field.meanFdvIncreasePerStep), marketCapForMigration: decodeFromJSONField("u64", field.marketCapForMigration), hasMigrated: decodeFromJSONField("bool", field.hasMigrated), version: decodeFromJSONField("u64", field.version) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, json: Record<string, any>): MemePool<ToPhantomTypeArgument<X>> {
        if (json.$typeName !== MemePool.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(MemePool.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg],)

        return MemePool.fromJSONField(typeArg, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, content: SuiParsedData): MemePool<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemePool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemePool object`); } return MemePool.fromFieldsWithTypes(typeArg, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>>(typeArg: X, data: SuiObjectData): MemePool<ToPhantomTypeArgument<X>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemePool(data.bcs.type)) { throw new Error(`object at is not a MemePool object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

            return MemePool.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MemePool.fromSuiParsedData(typeArg, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: X, id: string): Promise<MemePool<ToPhantomTypeArgument<X>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemePool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemePool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemePool object`); }

        return MemePool.fromSuiObjectData(typeArg, res.data);
    }

}

/* ============================== MemePoolFeeClaimed =============================== */

export function isMemePoolFeeClaimed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::MemePoolFeeClaimed`; }

export interface MemePoolFeeClaimedFields { memePoolAddr: ToField<"address">; adminFeeAmt: ToField<"u64">; memePoolFeeAmt: ToField<"u64"> }

export type MemePoolFeeClaimedReified = Reified<MemePoolFeeClaimed, MemePoolFeeClaimedFields>;

export class MemePoolFeeClaimed implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::MemePoolFeeClaimed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = MemePoolFeeClaimed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::MemePoolFeeClaimed`; readonly $typeArgs: []; readonly $isPhantom = MemePoolFeeClaimed.$isPhantom;

    readonly memePoolAddr: ToField<"address">; readonly adminFeeAmt: ToField<"u64">; readonly memePoolFeeAmt: ToField<"u64">

    private constructor(typeArgs: [], fields: MemePoolFeeClaimedFields,) {
        this.$fullTypeName = composeSuiType(MemePoolFeeClaimed.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::MemePoolFeeClaimed`; this.$typeArgs = typeArgs;

        this.memePoolAddr = fields.memePoolAddr;; this.adminFeeAmt = fields.adminFeeAmt;; this.memePoolFeeAmt = fields.memePoolFeeAmt;
    }

    static reified(): MemePoolFeeClaimedReified { return { typeName: MemePoolFeeClaimed.$typeName, fullTypeName: composeSuiType(MemePoolFeeClaimed.$typeName, ...[]) as `${typeof PKG_V1}::memepad::MemePoolFeeClaimed`, typeArgs: [] as [], isPhantom: MemePoolFeeClaimed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MemePoolFeeClaimed.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MemePoolFeeClaimed.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => MemePoolFeeClaimed.fromBcs(data,), bcs: MemePoolFeeClaimed.bcs, fromJSONField: (field: any) => MemePoolFeeClaimed.fromJSONField(field,), fromJSON: (json: Record<string, any>) => MemePoolFeeClaimed.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => MemePoolFeeClaimed.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => MemePoolFeeClaimed.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => MemePoolFeeClaimed.fetch(client, id,), new: (fields: MemePoolFeeClaimedFields,) => { return new MemePoolFeeClaimed([], fields) }, kind: "StructClassReified", } }

    static get r() { return MemePoolFeeClaimed.reified() }

    static phantom(): PhantomReified<ToTypeStr<MemePoolFeeClaimed>> { return phantom(MemePoolFeeClaimed.reified()); } static get p() { return MemePoolFeeClaimed.phantom() }

    static get bcs() {
        return bcs.struct("MemePoolFeeClaimed", {

            meme_pool_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), admin_fee_amt: bcs.u64(), meme_pool_fee_amt: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): MemePoolFeeClaimed { return MemePoolFeeClaimed.reified().new({ memePoolAddr: decodeFromFields("address", fields.meme_pool_addr), adminFeeAmt: decodeFromFields("u64", fields.admin_fee_amt), memePoolFeeAmt: decodeFromFields("u64", fields.meme_pool_fee_amt) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): MemePoolFeeClaimed {
        if (!isMemePoolFeeClaimed(item.type)) {
            throw new Error("not a MemePoolFeeClaimed type");

        }

        return MemePoolFeeClaimed.reified().new({ memePoolAddr: decodeFromFieldsWithTypes("address", item.fields.meme_pool_addr), adminFeeAmt: decodeFromFieldsWithTypes("u64", item.fields.admin_fee_amt), memePoolFeeAmt: decodeFromFieldsWithTypes("u64", item.fields.meme_pool_fee_amt) })
    }

    static fromBcs(data: Uint8Array): MemePoolFeeClaimed { return MemePoolFeeClaimed.fromFields(MemePoolFeeClaimed.bcs.parse(data)) }

    toJSONField() {
        return {

            memePoolAddr: this.memePoolAddr, adminFeeAmt: this.adminFeeAmt.toString(), memePoolFeeAmt: this.memePoolFeeAmt.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): MemePoolFeeClaimed { return MemePoolFeeClaimed.reified().new({ memePoolAddr: decodeFromJSONField("address", field.memePoolAddr), adminFeeAmt: decodeFromJSONField("u64", field.adminFeeAmt), memePoolFeeAmt: decodeFromJSONField("u64", field.memePoolFeeAmt) }) }

    static fromJSON(json: Record<string, any>): MemePoolFeeClaimed {
        if (json.$typeName !== MemePoolFeeClaimed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return MemePoolFeeClaimed.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): MemePoolFeeClaimed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemePoolFeeClaimed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemePoolFeeClaimed object`); } return MemePoolFeeClaimed.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): MemePoolFeeClaimed {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemePoolFeeClaimed(data.bcs.type)) { throw new Error(`object at is not a MemePoolFeeClaimed object`); }

            return MemePoolFeeClaimed.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MemePoolFeeClaimed.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MemePoolFeeClaimed> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemePoolFeeClaimed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemePoolFeeClaimed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemePoolFeeClaimed object`); }

        return MemePoolFeeClaimed.fromSuiObjectData(res.data);
    }

}

/* ============================== MemePoolMigrationPossible =============================== */

export function isMemePoolMigrationPossible(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::MemePoolMigrationPossible`; }

export interface MemePoolMigrationPossibleFields { memePoolAddr: ToField<"address">; memeIdentifier: ToField<String1>; curMarketCap: ToField<"u64">; curStep: ToField<"u64">; cur1MPrice: ToField<"u64"> }

export type MemePoolMigrationPossibleReified = Reified<MemePoolMigrationPossible, MemePoolMigrationPossibleFields>;

export class MemePoolMigrationPossible implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::MemePoolMigrationPossible`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = MemePoolMigrationPossible.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::MemePoolMigrationPossible`; readonly $typeArgs: []; readonly $isPhantom = MemePoolMigrationPossible.$isPhantom;

    readonly memePoolAddr: ToField<"address">; readonly memeIdentifier: ToField<String1>; readonly curMarketCap: ToField<"u64">; readonly curStep: ToField<"u64">; readonly cur1MPrice: ToField<"u64">

    private constructor(typeArgs: [], fields: MemePoolMigrationPossibleFields,) {
        this.$fullTypeName = composeSuiType(MemePoolMigrationPossible.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::MemePoolMigrationPossible`; this.$typeArgs = typeArgs;

        this.memePoolAddr = fields.memePoolAddr;; this.memeIdentifier = fields.memeIdentifier;; this.curMarketCap = fields.curMarketCap;; this.curStep = fields.curStep;; this.cur1MPrice = fields.cur1MPrice;
    }

    static reified(): MemePoolMigrationPossibleReified { return { typeName: MemePoolMigrationPossible.$typeName, fullTypeName: composeSuiType(MemePoolMigrationPossible.$typeName, ...[]) as `${typeof PKG_V1}::memepad::MemePoolMigrationPossible`, typeArgs: [] as [], isPhantom: MemePoolMigrationPossible.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MemePoolMigrationPossible.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MemePoolMigrationPossible.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => MemePoolMigrationPossible.fromBcs(data,), bcs: MemePoolMigrationPossible.bcs, fromJSONField: (field: any) => MemePoolMigrationPossible.fromJSONField(field,), fromJSON: (json: Record<string, any>) => MemePoolMigrationPossible.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => MemePoolMigrationPossible.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => MemePoolMigrationPossible.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => MemePoolMigrationPossible.fetch(client, id,), new: (fields: MemePoolMigrationPossibleFields,) => { return new MemePoolMigrationPossible([], fields) }, kind: "StructClassReified", } }

    static get r() { return MemePoolMigrationPossible.reified() }

    static phantom(): PhantomReified<ToTypeStr<MemePoolMigrationPossible>> { return phantom(MemePoolMigrationPossible.reified()); } static get p() { return MemePoolMigrationPossible.phantom() }

    static get bcs() {
        return bcs.struct("MemePoolMigrationPossible", {

            meme_pool_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), meme_identifier: String1.bcs, cur_market_cap: bcs.u64(), cur_step: bcs.u64(), cur_1m_price: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): MemePoolMigrationPossible { return MemePoolMigrationPossible.reified().new({ memePoolAddr: decodeFromFields("address", fields.meme_pool_addr), memeIdentifier: decodeFromFields(String1.reified(), fields.meme_identifier), curMarketCap: decodeFromFields("u64", fields.cur_market_cap), curStep: decodeFromFields("u64", fields.cur_step), cur1MPrice: decodeFromFields("u64", fields.cur_1m_price) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): MemePoolMigrationPossible {
        if (!isMemePoolMigrationPossible(item.type)) {
            throw new Error("not a MemePoolMigrationPossible type");

        }

        return MemePoolMigrationPossible.reified().new({ memePoolAddr: decodeFromFieldsWithTypes("address", item.fields.meme_pool_addr), memeIdentifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.meme_identifier), curMarketCap: decodeFromFieldsWithTypes("u64", item.fields.cur_market_cap), curStep: decodeFromFieldsWithTypes("u64", item.fields.cur_step), cur1MPrice: decodeFromFieldsWithTypes("u64", item.fields.cur_1m_price) })
    }

    static fromBcs(data: Uint8Array): MemePoolMigrationPossible { return MemePoolMigrationPossible.fromFields(MemePoolMigrationPossible.bcs.parse(data)) }

    toJSONField() {
        return {

            memePoolAddr: this.memePoolAddr, memeIdentifier: this.memeIdentifier, curMarketCap: this.curMarketCap.toString(), curStep: this.curStep.toString(), cur1MPrice: this.cur1MPrice.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): MemePoolMigrationPossible { return MemePoolMigrationPossible.reified().new({ memePoolAddr: decodeFromJSONField("address", field.memePoolAddr), memeIdentifier: decodeFromJSONField(String1.reified(), field.memeIdentifier), curMarketCap: decodeFromJSONField("u64", field.curMarketCap), curStep: decodeFromJSONField("u64", field.curStep), cur1MPrice: decodeFromJSONField("u64", field.cur1MPrice) }) }

    static fromJSON(json: Record<string, any>): MemePoolMigrationPossible {
        if (json.$typeName !== MemePoolMigrationPossible.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return MemePoolMigrationPossible.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): MemePoolMigrationPossible { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemePoolMigrationPossible(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemePoolMigrationPossible object`); } return MemePoolMigrationPossible.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): MemePoolMigrationPossible {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemePoolMigrationPossible(data.bcs.type)) { throw new Error(`object at is not a MemePoolMigrationPossible object`); }

            return MemePoolMigrationPossible.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MemePoolMigrationPossible.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MemePoolMigrationPossible> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemePoolMigrationPossible object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemePoolMigrationPossible(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemePoolMigrationPossible object`); }

        return MemePoolMigrationPossible.fromSuiObjectData(res.data);
    }

}

/* ============================== MemeSupplyConfig =============================== */

export function isMemeSupplyConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::MemeSupplyConfig`; }

export interface MemeSupplyConfigFields { bondingCurvePct: ToField<"u64">; poolAmtPct: ToField<"u64">; bribesAmtPct: ToField<"u64">; beeAmtPct: ToField<"u64"> }

export type MemeSupplyConfigReified = Reified<MemeSupplyConfig, MemeSupplyConfigFields>;

export class MemeSupplyConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::MemeSupplyConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = MemeSupplyConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::MemeSupplyConfig`; readonly $typeArgs: []; readonly $isPhantom = MemeSupplyConfig.$isPhantom;

    readonly bondingCurvePct: ToField<"u64">; readonly poolAmtPct: ToField<"u64">; readonly bribesAmtPct: ToField<"u64">; readonly beeAmtPct: ToField<"u64">

    private constructor(typeArgs: [], fields: MemeSupplyConfigFields,) {
        this.$fullTypeName = composeSuiType(MemeSupplyConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::MemeSupplyConfig`; this.$typeArgs = typeArgs;

        this.bondingCurvePct = fields.bondingCurvePct;; this.poolAmtPct = fields.poolAmtPct;; this.bribesAmtPct = fields.bribesAmtPct;; this.beeAmtPct = fields.beeAmtPct;
    }

    static reified(): MemeSupplyConfigReified { return { typeName: MemeSupplyConfig.$typeName, fullTypeName: composeSuiType(MemeSupplyConfig.$typeName, ...[]) as `${typeof PKG_V1}::memepad::MemeSupplyConfig`, typeArgs: [] as [], isPhantom: MemeSupplyConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MemeSupplyConfig.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MemeSupplyConfig.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => MemeSupplyConfig.fromBcs(data,), bcs: MemeSupplyConfig.bcs, fromJSONField: (field: any) => MemeSupplyConfig.fromJSONField(field,), fromJSON: (json: Record<string, any>) => MemeSupplyConfig.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => MemeSupplyConfig.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => MemeSupplyConfig.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => MemeSupplyConfig.fetch(client, id,), new: (fields: MemeSupplyConfigFields,) => { return new MemeSupplyConfig([], fields) }, kind: "StructClassReified", } }

    static get r() { return MemeSupplyConfig.reified() }

    static phantom(): PhantomReified<ToTypeStr<MemeSupplyConfig>> { return phantom(MemeSupplyConfig.reified()); } static get p() { return MemeSupplyConfig.phantom() }

    static get bcs() {
        return bcs.struct("MemeSupplyConfig", {

            bonding_curve_pct: bcs.u64(), pool_amt_pct: bcs.u64(), bribes_amt_pct: bcs.u64(), bee_amt_pct: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): MemeSupplyConfig { return MemeSupplyConfig.reified().new({ bondingCurvePct: decodeFromFields("u64", fields.bonding_curve_pct), poolAmtPct: decodeFromFields("u64", fields.pool_amt_pct), bribesAmtPct: decodeFromFields("u64", fields.bribes_amt_pct), beeAmtPct: decodeFromFields("u64", fields.bee_amt_pct) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): MemeSupplyConfig {
        if (!isMemeSupplyConfig(item.type)) {
            throw new Error("not a MemeSupplyConfig type");

        }

        return MemeSupplyConfig.reified().new({ bondingCurvePct: decodeFromFieldsWithTypes("u64", item.fields.bonding_curve_pct), poolAmtPct: decodeFromFieldsWithTypes("u64", item.fields.pool_amt_pct), bribesAmtPct: decodeFromFieldsWithTypes("u64", item.fields.bribes_amt_pct), beeAmtPct: decodeFromFieldsWithTypes("u64", item.fields.bee_amt_pct) })
    }

    static fromBcs(data: Uint8Array): MemeSupplyConfig { return MemeSupplyConfig.fromFields(MemeSupplyConfig.bcs.parse(data)) }

    toJSONField() {
        return {

            bondingCurvePct: this.bondingCurvePct.toString(), poolAmtPct: this.poolAmtPct.toString(), bribesAmtPct: this.bribesAmtPct.toString(), beeAmtPct: this.beeAmtPct.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): MemeSupplyConfig { return MemeSupplyConfig.reified().new({ bondingCurvePct: decodeFromJSONField("u64", field.bondingCurvePct), poolAmtPct: decodeFromJSONField("u64", field.poolAmtPct), bribesAmtPct: decodeFromJSONField("u64", field.bribesAmtPct), beeAmtPct: decodeFromJSONField("u64", field.beeAmtPct) }) }

    static fromJSON(json: Record<string, any>): MemeSupplyConfig {
        if (json.$typeName !== MemeSupplyConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return MemeSupplyConfig.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): MemeSupplyConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemeSupplyConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemeSupplyConfig object`); } return MemeSupplyConfig.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): MemeSupplyConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemeSupplyConfig(data.bcs.type)) { throw new Error(`object at is not a MemeSupplyConfig object`); }

            return MemeSupplyConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MemeSupplyConfig.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MemeSupplyConfig> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemeSupplyConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemeSupplyConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemeSupplyConfig object`); }

        return MemeSupplyConfig.fromSuiObjectData(res.data);
    }

}

/* ============================== MemesBought =============================== */

export function isMemesBought(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::MemesBought`; }

export interface MemesBoughtFields { memePoolAddr: ToField<"address">; suiSpent: ToField<"u64">; memesBought: ToField<"u64">; protocolFees: ToField<"u64">; clock: ToField<"u64">; curStep: ToField<"u64">; curMarketCap: ToField<"u64">; cur1MPrice: ToField<"u64"> }

export type MemesBoughtReified = Reified<MemesBought, MemesBoughtFields>;

export class MemesBought implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::MemesBought`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = MemesBought.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::MemesBought`; readonly $typeArgs: []; readonly $isPhantom = MemesBought.$isPhantom;

    readonly memePoolAddr: ToField<"address">; readonly suiSpent: ToField<"u64">; readonly memesBought: ToField<"u64">; readonly protocolFees: ToField<"u64">; readonly clock: ToField<"u64">; readonly curStep: ToField<"u64">; readonly curMarketCap: ToField<"u64">; readonly cur1MPrice: ToField<"u64">

    private constructor(typeArgs: [], fields: MemesBoughtFields,) {
        this.$fullTypeName = composeSuiType(MemesBought.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::MemesBought`; this.$typeArgs = typeArgs;

        this.memePoolAddr = fields.memePoolAddr;; this.suiSpent = fields.suiSpent;; this.memesBought = fields.memesBought;; this.protocolFees = fields.protocolFees;; this.clock = fields.clock;; this.curStep = fields.curStep;; this.curMarketCap = fields.curMarketCap;; this.cur1MPrice = fields.cur1MPrice;
    }

    static reified(): MemesBoughtReified { return { typeName: MemesBought.$typeName, fullTypeName: composeSuiType(MemesBought.$typeName, ...[]) as `${typeof PKG_V1}::memepad::MemesBought`, typeArgs: [] as [], isPhantom: MemesBought.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MemesBought.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MemesBought.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => MemesBought.fromBcs(data,), bcs: MemesBought.bcs, fromJSONField: (field: any) => MemesBought.fromJSONField(field,), fromJSON: (json: Record<string, any>) => MemesBought.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => MemesBought.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => MemesBought.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => MemesBought.fetch(client, id,), new: (fields: MemesBoughtFields,) => { return new MemesBought([], fields) }, kind: "StructClassReified", } }

    static get r() { return MemesBought.reified() }

    static phantom(): PhantomReified<ToTypeStr<MemesBought>> { return phantom(MemesBought.reified()); } static get p() { return MemesBought.phantom() }

    static get bcs() {
        return bcs.struct("MemesBought", {

            meme_pool_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_spent: bcs.u64(), memes_bought: bcs.u64(), protocol_fees: bcs.u64(), clock: bcs.u64(), cur_step: bcs.u64(), cur_market_cap: bcs.u64(), cur_1m_price: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): MemesBought { return MemesBought.reified().new({ memePoolAddr: decodeFromFields("address", fields.meme_pool_addr), suiSpent: decodeFromFields("u64", fields.sui_spent), memesBought: decodeFromFields("u64", fields.memes_bought), protocolFees: decodeFromFields("u64", fields.protocol_fees), clock: decodeFromFields("u64", fields.clock), curStep: decodeFromFields("u64", fields.cur_step), curMarketCap: decodeFromFields("u64", fields.cur_market_cap), cur1MPrice: decodeFromFields("u64", fields.cur_1m_price) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): MemesBought {
        if (!isMemesBought(item.type)) {
            throw new Error("not a MemesBought type");

        }

        return MemesBought.reified().new({ memePoolAddr: decodeFromFieldsWithTypes("address", item.fields.meme_pool_addr), suiSpent: decodeFromFieldsWithTypes("u64", item.fields.sui_spent), memesBought: decodeFromFieldsWithTypes("u64", item.fields.memes_bought), protocolFees: decodeFromFieldsWithTypes("u64", item.fields.protocol_fees), clock: decodeFromFieldsWithTypes("u64", item.fields.clock), curStep: decodeFromFieldsWithTypes("u64", item.fields.cur_step), curMarketCap: decodeFromFieldsWithTypes("u64", item.fields.cur_market_cap), cur1MPrice: decodeFromFieldsWithTypes("u64", item.fields.cur_1m_price) })
    }

    static fromBcs(data: Uint8Array): MemesBought { return MemesBought.fromFields(MemesBought.bcs.parse(data)) }

    toJSONField() {
        return {

            memePoolAddr: this.memePoolAddr, suiSpent: this.suiSpent.toString(), memesBought: this.memesBought.toString(), protocolFees: this.protocolFees.toString(), clock: this.clock.toString(), curStep: this.curStep.toString(), curMarketCap: this.curMarketCap.toString(), cur1MPrice: this.cur1MPrice.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): MemesBought { return MemesBought.reified().new({ memePoolAddr: decodeFromJSONField("address", field.memePoolAddr), suiSpent: decodeFromJSONField("u64", field.suiSpent), memesBought: decodeFromJSONField("u64", field.memesBought), protocolFees: decodeFromJSONField("u64", field.protocolFees), clock: decodeFromJSONField("u64", field.clock), curStep: decodeFromJSONField("u64", field.curStep), curMarketCap: decodeFromJSONField("u64", field.curMarketCap), cur1MPrice: decodeFromJSONField("u64", field.cur1MPrice) }) }

    static fromJSON(json: Record<string, any>): MemesBought {
        if (json.$typeName !== MemesBought.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return MemesBought.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): MemesBought { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemesBought(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemesBought object`); } return MemesBought.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): MemesBought {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemesBought(data.bcs.type)) { throw new Error(`object at is not a MemesBought object`); }

            return MemesBought.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MemesBought.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MemesBought> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemesBought object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemesBought(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemesBought object`); }

        return MemesBought.fromSuiObjectData(res.data);
    }

}

/* ============================== MemesByBee =============================== */

export function isMemesByBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::MemesByBee`; }

export interface MemesByBeeFields { id: ToField<UID>; memes: ToField<LinkedTable<String1, "address">> }

export type MemesByBeeReified = Reified<MemesByBee, MemesByBeeFields>;

export class MemesByBee implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::MemesByBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = MemesByBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::MemesByBee`; readonly $typeArgs: []; readonly $isPhantom = MemesByBee.$isPhantom;

    readonly id: ToField<UID>; readonly memes: ToField<LinkedTable<String1, "address">>

    private constructor(typeArgs: [], fields: MemesByBeeFields,) {
        this.$fullTypeName = composeSuiType(MemesByBee.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::MemesByBee`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.memes = fields.memes;
    }

    static reified(): MemesByBeeReified { return { typeName: MemesByBee.$typeName, fullTypeName: composeSuiType(MemesByBee.$typeName, ...[]) as `${typeof PKG_V1}::memepad::MemesByBee`, typeArgs: [] as [], isPhantom: MemesByBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MemesByBee.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MemesByBee.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => MemesByBee.fromBcs(data,), bcs: MemesByBee.bcs, fromJSONField: (field: any) => MemesByBee.fromJSONField(field,), fromJSON: (json: Record<string, any>) => MemesByBee.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => MemesByBee.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => MemesByBee.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => MemesByBee.fetch(client, id,), new: (fields: MemesByBeeFields,) => { return new MemesByBee([], fields) }, kind: "StructClassReified", } }

    static get r() { return MemesByBee.reified() }

    static phantom(): PhantomReified<ToTypeStr<MemesByBee>> { return phantom(MemesByBee.reified()); } static get p() { return MemesByBee.phantom() }

    static get bcs() {
        return bcs.struct("MemesByBee", {

            id: UID.bcs, memes: LinkedTable.bcs(String1.bcs)

        })
    };

    static fromFields(fields: Record<string, any>): MemesByBee { return MemesByBee.reified().new({ id: decodeFromFields(UID.reified(), fields.id), memes: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.memes) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): MemesByBee {
        if (!isMemesByBee(item.type)) {
            throw new Error("not a MemesByBee type");

        }

        return MemesByBee.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), memes: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.memes) })
    }

    static fromBcs(data: Uint8Array): MemesByBee { return MemesByBee.fromFields(MemesByBee.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, memes: this.memes.toJSONField(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): MemesByBee { return MemesByBee.reified().new({ id: decodeFromJSONField(UID.reified(), field.id), memes: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.memes) }) }

    static fromJSON(json: Record<string, any>): MemesByBee {
        if (json.$typeName !== MemesByBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return MemesByBee.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): MemesByBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemesByBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemesByBee object`); } return MemesByBee.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): MemesByBee {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemesByBee(data.bcs.type)) { throw new Error(`object at is not a MemesByBee object`); }

            return MemesByBee.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MemesByBee.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MemesByBee> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemesByBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemesByBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemesByBee object`); }

        return MemesByBee.fromSuiObjectData(res.data);
    }

}

/* ============================== MemesSold =============================== */

export function isMemesSold(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::MemesSold`; }

export interface MemesSoldFields { memePoolAddr: ToField<"address">; memesSold: ToField<"u64">; soldForSui: ToField<"u64">; protocolFees: ToField<"u64">; clock: ToField<"u64">; curStep: ToField<"u64">; curMarketCap: ToField<"u64">; cur1MPrice: ToField<"u64"> }

export type MemesSoldReified = Reified<MemesSold, MemesSoldFields>;

export class MemesSold implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::MemesSold`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = MemesSold.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::MemesSold`; readonly $typeArgs: []; readonly $isPhantom = MemesSold.$isPhantom;

    readonly memePoolAddr: ToField<"address">; readonly memesSold: ToField<"u64">; readonly soldForSui: ToField<"u64">; readonly protocolFees: ToField<"u64">; readonly clock: ToField<"u64">; readonly curStep: ToField<"u64">; readonly curMarketCap: ToField<"u64">; readonly cur1MPrice: ToField<"u64">

    private constructor(typeArgs: [], fields: MemesSoldFields,) {
        this.$fullTypeName = composeSuiType(MemesSold.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::MemesSold`; this.$typeArgs = typeArgs;

        this.memePoolAddr = fields.memePoolAddr;; this.memesSold = fields.memesSold;; this.soldForSui = fields.soldForSui;; this.protocolFees = fields.protocolFees;; this.clock = fields.clock;; this.curStep = fields.curStep;; this.curMarketCap = fields.curMarketCap;; this.cur1MPrice = fields.cur1MPrice;
    }

    static reified(): MemesSoldReified { return { typeName: MemesSold.$typeName, fullTypeName: composeSuiType(MemesSold.$typeName, ...[]) as `${typeof PKG_V1}::memepad::MemesSold`, typeArgs: [] as [], isPhantom: MemesSold.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MemesSold.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MemesSold.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => MemesSold.fromBcs(data,), bcs: MemesSold.bcs, fromJSONField: (field: any) => MemesSold.fromJSONField(field,), fromJSON: (json: Record<string, any>) => MemesSold.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => MemesSold.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => MemesSold.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => MemesSold.fetch(client, id,), new: (fields: MemesSoldFields,) => { return new MemesSold([], fields) }, kind: "StructClassReified", } }

    static get r() { return MemesSold.reified() }

    static phantom(): PhantomReified<ToTypeStr<MemesSold>> { return phantom(MemesSold.reified()); } static get p() { return MemesSold.phantom() }

    static get bcs() {
        return bcs.struct("MemesSold", {

            meme_pool_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), memes_sold: bcs.u64(), sold_for_sui: bcs.u64(), protocol_fees: bcs.u64(), clock: bcs.u64(), cur_step: bcs.u64(), cur_market_cap: bcs.u64(), cur_1m_price: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): MemesSold { return MemesSold.reified().new({ memePoolAddr: decodeFromFields("address", fields.meme_pool_addr), memesSold: decodeFromFields("u64", fields.memes_sold), soldForSui: decodeFromFields("u64", fields.sold_for_sui), protocolFees: decodeFromFields("u64", fields.protocol_fees), clock: decodeFromFields("u64", fields.clock), curStep: decodeFromFields("u64", fields.cur_step), curMarketCap: decodeFromFields("u64", fields.cur_market_cap), cur1MPrice: decodeFromFields("u64", fields.cur_1m_price) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): MemesSold {
        if (!isMemesSold(item.type)) {
            throw new Error("not a MemesSold type");

        }

        return MemesSold.reified().new({ memePoolAddr: decodeFromFieldsWithTypes("address", item.fields.meme_pool_addr), memesSold: decodeFromFieldsWithTypes("u64", item.fields.memes_sold), soldForSui: decodeFromFieldsWithTypes("u64", item.fields.sold_for_sui), protocolFees: decodeFromFieldsWithTypes("u64", item.fields.protocol_fees), clock: decodeFromFieldsWithTypes("u64", item.fields.clock), curStep: decodeFromFieldsWithTypes("u64", item.fields.cur_step), curMarketCap: decodeFromFieldsWithTypes("u64", item.fields.cur_market_cap), cur1MPrice: decodeFromFieldsWithTypes("u64", item.fields.cur_1m_price) })
    }

    static fromBcs(data: Uint8Array): MemesSold { return MemesSold.fromFields(MemesSold.bcs.parse(data)) }

    toJSONField() {
        return {

            memePoolAddr: this.memePoolAddr, memesSold: this.memesSold.toString(), soldForSui: this.soldForSui.toString(), protocolFees: this.protocolFees.toString(), clock: this.clock.toString(), curStep: this.curStep.toString(), curMarketCap: this.curMarketCap.toString(), cur1MPrice: this.cur1MPrice.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): MemesSold { return MemesSold.reified().new({ memePoolAddr: decodeFromJSONField("address", field.memePoolAddr), memesSold: decodeFromJSONField("u64", field.memesSold), soldForSui: decodeFromJSONField("u64", field.soldForSui), protocolFees: decodeFromJSONField("u64", field.protocolFees), clock: decodeFromJSONField("u64", field.clock), curStep: decodeFromJSONField("u64", field.curStep), curMarketCap: decodeFromJSONField("u64", field.curMarketCap), cur1MPrice: decodeFromJSONField("u64", field.cur1MPrice) }) }

    static fromJSON(json: Record<string, any>): MemesSold {
        if (json.$typeName !== MemesSold.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return MemesSold.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): MemesSold { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemesSold(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemesSold object`); } return MemesSold.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): MemesSold {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemesSold(data.bcs.type)) { throw new Error(`object at is not a MemesSold object`); }

            return MemesSold.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MemesSold.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MemesSold> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemesSold object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemesSold(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemesSold object`); }

        return MemesSold.fromSuiObjectData(res.data);
    }

}

/* ============================== NewMemePoolCreated =============================== */

export function isNewMemePoolCreated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::memepad::NewMemePoolCreated`; }

export interface NewMemePoolCreatedFields { memePoolAddr: ToField<"address">; ammPoolType: ToField<String1>; memeIdentifier: ToField<String1>; initTimestamp: ToField<"u64">; burnTax: ToField<"u64">; totalMemeSupply: ToField<"u64">; memeTradableAmt: ToField<"u64">; memeForPoolAmt: ToField<"u64">; memesForBeeAmt: ToField<"u64">; memeForBribesAmt: ToField<"u64">; bribeCycles: ToField<"u64">; beeVersion: ToField<"u64">; trainerAddr: ToField<"address">; twitter: ToField<String>; telegram: ToField<String>; meanFdvIncreasePerStep: ToField<"u64">; marketCapForMigration: ToField<"u64"> }

export type NewMemePoolCreatedReified = Reified<NewMemePoolCreated, NewMemePoolCreatedFields>;

export class NewMemePoolCreated implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::memepad::NewMemePoolCreated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = NewMemePoolCreated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::memepad::NewMemePoolCreated`; readonly $typeArgs: []; readonly $isPhantom = NewMemePoolCreated.$isPhantom;

    readonly memePoolAddr: ToField<"address">; readonly ammPoolType: ToField<String1>; readonly memeIdentifier: ToField<String1>; readonly initTimestamp: ToField<"u64">; readonly burnTax: ToField<"u64">; readonly totalMemeSupply: ToField<"u64">; readonly memeTradableAmt: ToField<"u64">; readonly memeForPoolAmt: ToField<"u64">; readonly memesForBeeAmt: ToField<"u64">; readonly memeForBribesAmt: ToField<"u64">; readonly bribeCycles: ToField<"u64">; readonly beeVersion: ToField<"u64">; readonly trainerAddr: ToField<"address">; readonly twitter: ToField<String>; readonly telegram: ToField<String>; readonly meanFdvIncreasePerStep: ToField<"u64">; readonly marketCapForMigration: ToField<"u64">

    private constructor(typeArgs: [], fields: NewMemePoolCreatedFields,) {
        this.$fullTypeName = composeSuiType(NewMemePoolCreated.$typeName, ...typeArgs) as `${typeof PKG_V1}::memepad::NewMemePoolCreated`; this.$typeArgs = typeArgs;

        this.memePoolAddr = fields.memePoolAddr;; this.ammPoolType = fields.ammPoolType;; this.memeIdentifier = fields.memeIdentifier;; this.initTimestamp = fields.initTimestamp;; this.burnTax = fields.burnTax;; this.totalMemeSupply = fields.totalMemeSupply;; this.memeTradableAmt = fields.memeTradableAmt;; this.memeForPoolAmt = fields.memeForPoolAmt;; this.memesForBeeAmt = fields.memesForBeeAmt;; this.memeForBribesAmt = fields.memeForBribesAmt;; this.bribeCycles = fields.bribeCycles;; this.beeVersion = fields.beeVersion;; this.trainerAddr = fields.trainerAddr;; this.twitter = fields.twitter;; this.telegram = fields.telegram;; this.meanFdvIncreasePerStep = fields.meanFdvIncreasePerStep;; this.marketCapForMigration = fields.marketCapForMigration;
    }

    static reified(): NewMemePoolCreatedReified { return { typeName: NewMemePoolCreated.$typeName, fullTypeName: composeSuiType(NewMemePoolCreated.$typeName, ...[]) as `${typeof PKG_V1}::memepad::NewMemePoolCreated`, typeArgs: [] as [], isPhantom: NewMemePoolCreated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewMemePoolCreated.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => NewMemePoolCreated.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => NewMemePoolCreated.fromBcs(data,), bcs: NewMemePoolCreated.bcs, fromJSONField: (field: any) => NewMemePoolCreated.fromJSONField(field,), fromJSON: (json: Record<string, any>) => NewMemePoolCreated.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => NewMemePoolCreated.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => NewMemePoolCreated.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => NewMemePoolCreated.fetch(client, id,), new: (fields: NewMemePoolCreatedFields,) => { return new NewMemePoolCreated([], fields) }, kind: "StructClassReified", } }

    static get r() { return NewMemePoolCreated.reified() }

    static phantom(): PhantomReified<ToTypeStr<NewMemePoolCreated>> { return phantom(NewMemePoolCreated.reified()); } static get p() { return NewMemePoolCreated.phantom() }

    static get bcs() {
        return bcs.struct("NewMemePoolCreated", {

            meme_pool_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), amm_pool_type: String1.bcs, meme_identifier: String1.bcs, init_timestamp: bcs.u64(), burn_tax: bcs.u64(), total_meme_supply: bcs.u64(), meme_tradable_amt: bcs.u64(), meme_for_pool_amt: bcs.u64(), memes_for_bee_amt: bcs.u64(), meme_for_bribes_amt: bcs.u64(), bribe_cycles: bcs.u64(), bee_version: bcs.u64(), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), twitter: String.bcs, telegram: String.bcs, mean_fdv_increase_per_step: bcs.u64(), market_cap_for_migration: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): NewMemePoolCreated { return NewMemePoolCreated.reified().new({ memePoolAddr: decodeFromFields("address", fields.meme_pool_addr), ammPoolType: decodeFromFields(String1.reified(), fields.amm_pool_type), memeIdentifier: decodeFromFields(String1.reified(), fields.meme_identifier), initTimestamp: decodeFromFields("u64", fields.init_timestamp), burnTax: decodeFromFields("u64", fields.burn_tax), totalMemeSupply: decodeFromFields("u64", fields.total_meme_supply), memeTradableAmt: decodeFromFields("u64", fields.meme_tradable_amt), memeForPoolAmt: decodeFromFields("u64", fields.meme_for_pool_amt), memesForBeeAmt: decodeFromFields("u64", fields.memes_for_bee_amt), memeForBribesAmt: decodeFromFields("u64", fields.meme_for_bribes_amt), bribeCycles: decodeFromFields("u64", fields.bribe_cycles), beeVersion: decodeFromFields("u64", fields.bee_version), trainerAddr: decodeFromFields("address", fields.trainer_addr), twitter: decodeFromFields(String.reified(), fields.twitter), telegram: decodeFromFields(String.reified(), fields.telegram), meanFdvIncreasePerStep: decodeFromFields("u64", fields.mean_fdv_increase_per_step), marketCapForMigration: decodeFromFields("u64", fields.market_cap_for_migration) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewMemePoolCreated {
        if (!isNewMemePoolCreated(item.type)) {
            throw new Error("not a NewMemePoolCreated type");

        }

        return NewMemePoolCreated.reified().new({ memePoolAddr: decodeFromFieldsWithTypes("address", item.fields.meme_pool_addr), ammPoolType: decodeFromFieldsWithTypes(String1.reified(), item.fields.amm_pool_type), memeIdentifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.meme_identifier), initTimestamp: decodeFromFieldsWithTypes("u64", item.fields.init_timestamp), burnTax: decodeFromFieldsWithTypes("u64", item.fields.burn_tax), totalMemeSupply: decodeFromFieldsWithTypes("u64", item.fields.total_meme_supply), memeTradableAmt: decodeFromFieldsWithTypes("u64", item.fields.meme_tradable_amt), memeForPoolAmt: decodeFromFieldsWithTypes("u64", item.fields.meme_for_pool_amt), memesForBeeAmt: decodeFromFieldsWithTypes("u64", item.fields.memes_for_bee_amt), memeForBribesAmt: decodeFromFieldsWithTypes("u64", item.fields.meme_for_bribes_amt), bribeCycles: decodeFromFieldsWithTypes("u64", item.fields.bribe_cycles), beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), twitter: decodeFromFieldsWithTypes(String.reified(), item.fields.twitter), telegram: decodeFromFieldsWithTypes(String.reified(), item.fields.telegram), meanFdvIncreasePerStep: decodeFromFieldsWithTypes("u64", item.fields.mean_fdv_increase_per_step), marketCapForMigration: decodeFromFieldsWithTypes("u64", item.fields.market_cap_for_migration) })
    }

    static fromBcs(data: Uint8Array): NewMemePoolCreated { return NewMemePoolCreated.fromFields(NewMemePoolCreated.bcs.parse(data)) }

    toJSONField() {
        return {

            memePoolAddr: this.memePoolAddr, ammPoolType: this.ammPoolType, memeIdentifier: this.memeIdentifier, initTimestamp: this.initTimestamp.toString(), burnTax: this.burnTax.toString(), totalMemeSupply: this.totalMemeSupply.toString(), memeTradableAmt: this.memeTradableAmt.toString(), memeForPoolAmt: this.memeForPoolAmt.toString(), memesForBeeAmt: this.memesForBeeAmt.toString(), memeForBribesAmt: this.memeForBribesAmt.toString(), bribeCycles: this.bribeCycles.toString(), beeVersion: this.beeVersion.toString(), trainerAddr: this.trainerAddr, twitter: this.twitter, telegram: this.telegram, meanFdvIncreasePerStep: this.meanFdvIncreasePerStep.toString(), marketCapForMigration: this.marketCapForMigration.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): NewMemePoolCreated { return NewMemePoolCreated.reified().new({ memePoolAddr: decodeFromJSONField("address", field.memePoolAddr), ammPoolType: decodeFromJSONField(String1.reified(), field.ammPoolType), memeIdentifier: decodeFromJSONField(String1.reified(), field.memeIdentifier), initTimestamp: decodeFromJSONField("u64", field.initTimestamp), burnTax: decodeFromJSONField("u64", field.burnTax), totalMemeSupply: decodeFromJSONField("u64", field.totalMemeSupply), memeTradableAmt: decodeFromJSONField("u64", field.memeTradableAmt), memeForPoolAmt: decodeFromJSONField("u64", field.memeForPoolAmt), memesForBeeAmt: decodeFromJSONField("u64", field.memesForBeeAmt), memeForBribesAmt: decodeFromJSONField("u64", field.memeForBribesAmt), bribeCycles: decodeFromJSONField("u64", field.bribeCycles), beeVersion: decodeFromJSONField("u64", field.beeVersion), trainerAddr: decodeFromJSONField("address", field.trainerAddr), twitter: decodeFromJSONField(String.reified(), field.twitter), telegram: decodeFromJSONField(String.reified(), field.telegram), meanFdvIncreasePerStep: decodeFromJSONField("u64", field.meanFdvIncreasePerStep), marketCapForMigration: decodeFromJSONField("u64", field.marketCapForMigration) }) }

    static fromJSON(json: Record<string, any>): NewMemePoolCreated {
        if (json.$typeName !== NewMemePoolCreated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return NewMemePoolCreated.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): NewMemePoolCreated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewMemePoolCreated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewMemePoolCreated object`); } return NewMemePoolCreated.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): NewMemePoolCreated {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewMemePoolCreated(data.bcs.type)) { throw new Error(`object at is not a NewMemePoolCreated object`); }

            return NewMemePoolCreated.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return NewMemePoolCreated.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewMemePoolCreated> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewMemePoolCreated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewMemePoolCreated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewMemePoolCreated object`); }

        return NewMemePoolCreated.fromSuiObjectData(res.data);
    }

}
