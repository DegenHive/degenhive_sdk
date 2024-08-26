import { SuiClient, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { Balance } from "../../_dependencies/source/0x2/balance/structs";
import { TreasuryCap } from "../../_dependencies/source/0x2/coin/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { TokenPolicyCap } from "../../_dependencies/source/0x2/token/structs";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName } from "../../_framework/util";
import { bcs, fromB64 } from "@mysten/bcs";
import { twopool } from ".."
const PUBLISHED_AT = twopool.PUBLISHED_AT

const PKG_V1 = twopool.PKG_V1
/* ============================== BeesBurnt =============================== */

export function isBeesBurnt(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bee_trade::BeesBurnt`; }

export interface BeesBurntFields { beesBurnt: ToField<"u64"> }

export type BeesBurntReified = Reified<BeesBurnt, BeesBurntFields>;

export class BeesBurnt implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::bee_trade::BeesBurnt`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = BeesBurnt.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bee_trade::BeesBurnt`; readonly $typeArgs: []; readonly $isPhantom = BeesBurnt.$isPhantom;

    readonly beesBurnt: ToField<"u64">

    private constructor(typeArgs: [], fields: BeesBurntFields,) {
        this.$fullTypeName = composeSuiType(BeesBurnt.$typeName, ...typeArgs) as `${typeof PKG_V1}::bee_trade::BeesBurnt`; this.$typeArgs = typeArgs;

        this.beesBurnt = fields.beesBurnt;
    }

    static reified(): BeesBurntReified { return { typeName: BeesBurnt.$typeName, fullTypeName: composeSuiType(BeesBurnt.$typeName, ...[]) as `${typeof PKG_V1}::bee_trade::BeesBurnt`, typeArgs: [] as [], isPhantom: BeesBurnt.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeesBurnt.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => BeesBurnt.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => BeesBurnt.fromBcs(data,), bcs: BeesBurnt.bcs, fromJSONField: (field: any) => BeesBurnt.fromJSONField(field,), fromJSON: (json: Record<string, any>) => BeesBurnt.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => BeesBurnt.fromSuiParsedData(content,), fetch: async (client: SuiClient, id: string) => BeesBurnt.fetch(client, id,), new: (fields: BeesBurntFields,) => { return new BeesBurnt([], fields) }, kind: "StructClassReified", } }

    static get r() { return BeesBurnt.reified() }

    static phantom(): PhantomReified<ToTypeStr<BeesBurnt>> { return phantom(BeesBurnt.reified()); } static get p() { return BeesBurnt.phantom() }

    static get bcs() {
        return bcs.struct("BeesBurnt", {

            bees_burnt: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): BeesBurnt { return BeesBurnt.reified().new({ beesBurnt: decodeFromFields("u64", fields.bees_burnt) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): BeesBurnt {
        if (!isBeesBurnt(item.type)) {
            throw new Error("not a BeesBurnt type");

        }

        return BeesBurnt.reified().new({ beesBurnt: decodeFromFieldsWithTypes("u64", item.fields.bees_burnt) })
    }

    static fromBcs(data: Uint8Array): BeesBurnt { return BeesBurnt.fromFields(BeesBurnt.bcs.parse(data)) }

    toJSONField() {
        return {

            beesBurnt: this.beesBurnt.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): BeesBurnt { return BeesBurnt.reified().new({ beesBurnt: decodeFromJSONField("u64", field.beesBurnt) }) }

    static fromJSON(json: Record<string, any>): BeesBurnt {
        if (json.$typeName !== BeesBurnt.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return BeesBurnt.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): BeesBurnt { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeesBurnt(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeesBurnt object`); } return BeesBurnt.fromFieldsWithTypes(content); }

    static async fetch(client: SuiClient, id: string): Promise<BeesBurnt> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeesBurnt object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeesBurnt(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeesBurnt object`); }

        return BeesBurnt.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }

}

/* ============================== BeesForEngagementPerEpochUpdated =============================== */

export function isBeesForEngagementPerEpochUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bee_trade::BeesForEngagementPerEpochUpdated`; }

export interface BeesForEngagementPerEpochUpdatedFields { beeForEngagementPerEpoch: ToField<"u64"> }

export type BeesForEngagementPerEpochUpdatedReified = Reified<BeesForEngagementPerEpochUpdated, BeesForEngagementPerEpochUpdatedFields>;

export class BeesForEngagementPerEpochUpdated implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::bee_trade::BeesForEngagementPerEpochUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = BeesForEngagementPerEpochUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bee_trade::BeesForEngagementPerEpochUpdated`; readonly $typeArgs: []; readonly $isPhantom = BeesForEngagementPerEpochUpdated.$isPhantom;

    readonly beeForEngagementPerEpoch: ToField<"u64">

    private constructor(typeArgs: [], fields: BeesForEngagementPerEpochUpdatedFields,) {
        this.$fullTypeName = composeSuiType(BeesForEngagementPerEpochUpdated.$typeName, ...typeArgs) as `${typeof PKG_V1}::bee_trade::BeesForEngagementPerEpochUpdated`; this.$typeArgs = typeArgs;

        this.beeForEngagementPerEpoch = fields.beeForEngagementPerEpoch;
    }

    static reified(): BeesForEngagementPerEpochUpdatedReified { return { typeName: BeesForEngagementPerEpochUpdated.$typeName, fullTypeName: composeSuiType(BeesForEngagementPerEpochUpdated.$typeName, ...[]) as `${typeof PKG_V1}::bee_trade::BeesForEngagementPerEpochUpdated`, typeArgs: [] as [], isPhantom: BeesForEngagementPerEpochUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeesForEngagementPerEpochUpdated.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => BeesForEngagementPerEpochUpdated.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => BeesForEngagementPerEpochUpdated.fromBcs(data,), bcs: BeesForEngagementPerEpochUpdated.bcs, fromJSONField: (field: any) => BeesForEngagementPerEpochUpdated.fromJSONField(field,), fromJSON: (json: Record<string, any>) => BeesForEngagementPerEpochUpdated.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => BeesForEngagementPerEpochUpdated.fromSuiParsedData(content,), fetch: async (client: SuiClient, id: string) => BeesForEngagementPerEpochUpdated.fetch(client, id,), new: (fields: BeesForEngagementPerEpochUpdatedFields,) => { return new BeesForEngagementPerEpochUpdated([], fields) }, kind: "StructClassReified", } }

    static get r() { return BeesForEngagementPerEpochUpdated.reified() }

    static phantom(): PhantomReified<ToTypeStr<BeesForEngagementPerEpochUpdated>> { return phantom(BeesForEngagementPerEpochUpdated.reified()); } static get p() { return BeesForEngagementPerEpochUpdated.phantom() }

    static get bcs() {
        return bcs.struct("BeesForEngagementPerEpochUpdated", {

            bee_for_engagement_per_epoch: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): BeesForEngagementPerEpochUpdated { return BeesForEngagementPerEpochUpdated.reified().new({ beeForEngagementPerEpoch: decodeFromFields("u64", fields.bee_for_engagement_per_epoch) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): BeesForEngagementPerEpochUpdated {
        if (!isBeesForEngagementPerEpochUpdated(item.type)) {
            throw new Error("not a BeesForEngagementPerEpochUpdated type");

        }

        return BeesForEngagementPerEpochUpdated.reified().new({ beeForEngagementPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.bee_for_engagement_per_epoch) })
    }

    static fromBcs(data: Uint8Array): BeesForEngagementPerEpochUpdated { return BeesForEngagementPerEpochUpdated.fromFields(BeesForEngagementPerEpochUpdated.bcs.parse(data)) }

    toJSONField() {
        return {

            beeForEngagementPerEpoch: this.beeForEngagementPerEpoch.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): BeesForEngagementPerEpochUpdated { return BeesForEngagementPerEpochUpdated.reified().new({ beeForEngagementPerEpoch: decodeFromJSONField("u64", field.beeForEngagementPerEpoch) }) }

    static fromJSON(json: Record<string, any>): BeesForEngagementPerEpochUpdated {
        if (json.$typeName !== BeesForEngagementPerEpochUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return BeesForEngagementPerEpochUpdated.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): BeesForEngagementPerEpochUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeesForEngagementPerEpochUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeesForEngagementPerEpochUpdated object`); } return BeesForEngagementPerEpochUpdated.fromFieldsWithTypes(content); }

    static async fetch(client: SuiClient, id: string): Promise<BeesForEngagementPerEpochUpdated> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeesForEngagementPerEpochUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeesForEngagementPerEpochUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeesForEngagementPerEpochUpdated object`); }

        return BeesForEngagementPerEpochUpdated.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }

}

/* ============================== BeesManager =============================== */

export function isBeesManager(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::bee_trade::BeesManager` + '<'); }

export interface BeesManagerFields<T extends PhantomTypeArgument> { id: ToField<UID>; beeKraftCap: ToField<TreasuryCap<T>>; policyCap: ToField<TokenPolicyCap<T>>; availableBees: ToField<Balance<T>>; beeForEngagementPerEpoch: ToField<"u64">; lastClaimEpoch: ToField<"u64">; totalBurnt: ToField<"u64">; moduleVersion: ToField<"u64"> }

export type BeesManagerReified<T extends PhantomTypeArgument> = Reified<BeesManager<T>, BeesManagerFields<T>>;

export class BeesManager<T extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::bee_trade::BeesManager`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

    readonly $typeName = BeesManager.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bee_trade::BeesManager<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = BeesManager.$isPhantom;

    readonly id: ToField<UID>; readonly beeKraftCap: ToField<TreasuryCap<T>>; readonly policyCap: ToField<TokenPolicyCap<T>>; readonly availableBees: ToField<Balance<T>>; readonly beeForEngagementPerEpoch: ToField<"u64">; readonly lastClaimEpoch: ToField<"u64">; readonly totalBurnt: ToField<"u64">; readonly moduleVersion: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<T>], fields: BeesManagerFields<T>,) {
        this.$fullTypeName = composeSuiType(BeesManager.$typeName, ...typeArgs) as `${typeof PKG_V1}::bee_trade::BeesManager<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.beeKraftCap = fields.beeKraftCap;; this.policyCap = fields.policyCap;; this.availableBees = fields.availableBees;; this.beeForEngagementPerEpoch = fields.beeForEngagementPerEpoch;; this.lastClaimEpoch = fields.lastClaimEpoch;; this.totalBurnt = fields.totalBurnt;; this.moduleVersion = fields.moduleVersion;
    }

    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): BeesManagerReified<ToPhantomTypeArgument<T>> { return { typeName: BeesManager.$typeName, fullTypeName: composeSuiType(BeesManager.$typeName, ...[extractType(T)]) as `${typeof PKG_V1}::bee_trade::BeesManager<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [extractType(T)] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: BeesManager.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => BeesManager.fromFields(T, fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => BeesManager.fromFieldsWithTypes(T, item,), fromBcs: (data: Uint8Array) => BeesManager.fromBcs(T, data,), bcs: BeesManager.bcs, fromJSONField: (field: any) => BeesManager.fromJSONField(T, field,), fromJSON: (json: Record<string, any>) => BeesManager.fromJSON(T, json,), fromSuiParsedData: (content: SuiParsedData) => BeesManager.fromSuiParsedData(T, content,), fetch: async (client: SuiClient, id: string) => BeesManager.fetch(client, T, id,), new: (fields: BeesManagerFields<ToPhantomTypeArgument<T>>,) => { return new BeesManager([extractType(T)], fields) }, kind: "StructClassReified", } }

    static get r() { return BeesManager.reified }

    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<BeesManager<ToPhantomTypeArgument<T>>>> { return phantom(BeesManager.reified(T)); } static get p() { return BeesManager.phantom }

    static get bcs() {
        return bcs.struct("BeesManager", {

            id: UID.bcs, bee_kraft_cap: TreasuryCap.bcs, policy_cap: TokenPolicyCap.bcs, available_bees: Balance.bcs, bee_for_engagement_per_epoch: bcs.u64(), last_claim_epoch: bcs.u64(), total_burnt: bcs.u64(), module_version: bcs.u64()

        })
    };

    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): BeesManager<ToPhantomTypeArgument<T>> { return BeesManager.reified(typeArg,).new({ id: decodeFromFields(UID.reified(), fields.id), beeKraftCap: decodeFromFields(TreasuryCap.reified(typeArg), fields.bee_kraft_cap), policyCap: decodeFromFields(TokenPolicyCap.reified(typeArg), fields.policy_cap), availableBees: decodeFromFields(Balance.reified(typeArg), fields.available_bees), beeForEngagementPerEpoch: decodeFromFields("u64", fields.bee_for_engagement_per_epoch), lastClaimEpoch: decodeFromFields("u64", fields.last_claim_epoch), totalBurnt: decodeFromFields("u64", fields.total_burnt), moduleVersion: decodeFromFields("u64", fields.module_version) }) }

    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): BeesManager<ToPhantomTypeArgument<T>> {
        if (!isBeesManager(item.type)) {
            throw new Error("not a BeesManager type");

        } assertFieldsWithTypesArgsMatch(item, [typeArg]);

        return BeesManager.reified(typeArg,).new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), beeKraftCap: decodeFromFieldsWithTypes(TreasuryCap.reified(typeArg), item.fields.bee_kraft_cap), policyCap: decodeFromFieldsWithTypes(TokenPolicyCap.reified(typeArg), item.fields.policy_cap), availableBees: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.available_bees), beeForEngagementPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.bee_for_engagement_per_epoch), lastClaimEpoch: decodeFromFieldsWithTypes("u64", item.fields.last_claim_epoch), totalBurnt: decodeFromFieldsWithTypes("u64", item.fields.total_burnt), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) })
    }

    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): BeesManager<ToPhantomTypeArgument<T>> { return BeesManager.fromFields(typeArg, BeesManager.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, beeKraftCap: this.beeKraftCap.toJSONField(), policyCap: this.policyCap.toJSONField(), availableBees: this.availableBees.toJSONField(), beeForEngagementPerEpoch: this.beeForEngagementPerEpoch.toString(), lastClaimEpoch: this.lastClaimEpoch.toString(), totalBurnt: this.totalBurnt.toString(), moduleVersion: this.moduleVersion.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): BeesManager<ToPhantomTypeArgument<T>> { return BeesManager.reified(typeArg,).new({ id: decodeFromJSONField(UID.reified(), field.id), beeKraftCap: decodeFromJSONField(TreasuryCap.reified(typeArg), field.beeKraftCap), policyCap: decodeFromJSONField(TokenPolicyCap.reified(typeArg), field.policyCap), availableBees: decodeFromJSONField(Balance.reified(typeArg), field.availableBees), beeForEngagementPerEpoch: decodeFromJSONField("u64", field.beeForEngagementPerEpoch), lastClaimEpoch: decodeFromJSONField("u64", field.lastClaimEpoch), totalBurnt: decodeFromJSONField("u64", field.totalBurnt), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) }) }

    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): BeesManager<ToPhantomTypeArgument<T>> {
        if (json.$typeName !== BeesManager.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(BeesManager.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg],)

        return BeesManager.fromJSONField(typeArg, json,)
    }

    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): BeesManager<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeesManager(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeesManager object`); } return BeesManager.fromFieldsWithTypes(typeArg, content); }

    static async fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<BeesManager<ToPhantomTypeArgument<T>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeesManager object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeesManager(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeesManager object`); }

        const gotTypeArgs = parseTypeName(res.data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

        return BeesManager.fromBcs(typeArg, fromB64(res.data.bcs.bcsBytes));
    }

}
