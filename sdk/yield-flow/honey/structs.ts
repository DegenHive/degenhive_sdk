import { String } from "../../source/0x1/string/structs";
import { VecMap } from "../../source/0x2/vec-map/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { yieldflow } from ".."

const PUBLISHED_AT = yieldflow.PUBLISHED_AT

const PKG_V1 = yieldflow.PKG_V1

/* ============================== Consumption =============================== */

export function isConsumption(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::honey::Consumption`; }

export interface ConsumptionFields { dummyField: ToField<"bool"> }

export type ConsumptionReified = Reified<Consumption, ConsumptionFields>;

export class Consumption implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::honey::Consumption`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = Consumption.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::honey::Consumption`; readonly $typeArgs: []; readonly $isPhantom = Consumption.$isPhantom;

    readonly dummyField: ToField<"bool">

    private constructor(typeArgs: [], fields: ConsumptionFields,) {
        this.$fullTypeName = composeSuiType(Consumption.$typeName, ...typeArgs) as `${typeof PKG_V1}::honey::Consumption`; this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): ConsumptionReified { return { typeName: Consumption.$typeName, fullTypeName: composeSuiType(Consumption.$typeName, ...[]) as `${typeof PKG_V1}::honey::Consumption`, typeArgs: [] as [], isPhantom: Consumption.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Consumption.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => Consumption.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => Consumption.fromBcs(data,), bcs: Consumption.bcs, fromJSONField: (field: any) => Consumption.fromJSONField(field,), fromJSON: (json: Record<string, any>) => Consumption.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => Consumption.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => Consumption.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => Consumption.fetch(client, id,), new: (fields: ConsumptionFields,) => { return new Consumption([], fields) }, kind: "StructClassReified", } }

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

export function isConsumptionCondition(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::honey::ConsumptionCondition`; }

export interface ConsumptionConditionFields { percent: ToField<VecMap<String, "u64">> }

export type ConsumptionConditionReified = Reified<ConsumptionCondition, ConsumptionConditionFields>;

export class ConsumptionCondition implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::honey::ConsumptionCondition`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = ConsumptionCondition.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::honey::ConsumptionCondition`; readonly $typeArgs: []; readonly $isPhantom = ConsumptionCondition.$isPhantom;

    readonly percent: ToField<VecMap<String, "u64">>

    private constructor(typeArgs: [], fields: ConsumptionConditionFields,) {
        this.$fullTypeName = composeSuiType(ConsumptionCondition.$typeName, ...typeArgs) as `${typeof PKG_V1}::honey::ConsumptionCondition`; this.$typeArgs = typeArgs;

        this.percent = fields.percent;
    }

    static reified(): ConsumptionConditionReified { return { typeName: ConsumptionCondition.$typeName, fullTypeName: composeSuiType(ConsumptionCondition.$typeName, ...[]) as `${typeof PKG_V1}::honey::ConsumptionCondition`, typeArgs: [] as [], isPhantom: ConsumptionCondition.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ConsumptionCondition.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => ConsumptionCondition.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => ConsumptionCondition.fromBcs(data,), bcs: ConsumptionCondition.bcs, fromJSONField: (field: any) => ConsumptionCondition.fromJSONField(field,), fromJSON: (json: Record<string, any>) => ConsumptionCondition.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => ConsumptionCondition.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => ConsumptionCondition.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => ConsumptionCondition.fetch(client, id,), new: (fields: ConsumptionConditionFields,) => { return new ConsumptionCondition([], fields) }, kind: "StructClassReified", } }

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

/* ============================== HONEY =============================== */

export function isHONEY(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::honey::HONEY`; }

export interface HONEYFields { dummyField: ToField<"bool"> }

export type HONEYReified = Reified<HONEY, HONEYFields>;

export class HONEY implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::honey::HONEY`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = HONEY.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::honey::HONEY`; readonly $typeArgs: []; readonly $isPhantom = HONEY.$isPhantom;

    readonly dummyField: ToField<"bool">

    private constructor(typeArgs: [], fields: HONEYFields,) {
        this.$fullTypeName = composeSuiType(HONEY.$typeName, ...typeArgs) as `${typeof PKG_V1}::honey::HONEY`; this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): HONEYReified { return { typeName: HONEY.$typeName, fullTypeName: composeSuiType(HONEY.$typeName, ...[]) as `${typeof PKG_V1}::honey::HONEY`, typeArgs: [] as [], isPhantom: HONEY.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HONEY.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => HONEY.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => HONEY.fromBcs(data,), bcs: HONEY.bcs, fromJSONField: (field: any) => HONEY.fromJSONField(field,), fromJSON: (json: Record<string, any>) => HONEY.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => HONEY.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => HONEY.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => HONEY.fetch(client, id,), new: (fields: HONEYFields,) => { return new HONEY([], fields) }, kind: "StructClassReified", } }

    static get r() { return HONEY.reified() }

    static phantom(): PhantomReified<ToTypeStr<HONEY>> { return phantom(HONEY.reified()); } static get p() { return HONEY.phantom() }

    static get bcs() {
        return bcs.struct("HONEY", {

            dummy_field: bcs.bool()

        })
    };

    static fromFields(fields: Record<string, any>): HONEY { return HONEY.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): HONEY {
        if (!isHONEY(item.type)) {
            throw new Error("not a HONEY type");

        }

        return HONEY.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) })
    }

    static fromBcs(data: Uint8Array): HONEY { return HONEY.fromFields(HONEY.bcs.parse(data)) }

    toJSONField() {
        return {

            dummyField: this.dummyField,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): HONEY { return HONEY.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) }) }

    static fromJSON(json: Record<string, any>): HONEY {
        if (json.$typeName !== HONEY.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return HONEY.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): HONEY { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHONEY(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HONEY object`); } return HONEY.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): HONEY {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHONEY(data.bcs.type)) { throw new Error(`object at is not a HONEY object`); }

            return HONEY.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return HONEY.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<HONEY> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HONEY object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHONEY(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HONEY object`); }

        return HONEY.fromSuiObjectData(res.data);
    }

}

/* ============================== HoneyTransferred =============================== */

export function isHoneyTransferred(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::honey::HoneyTransferred`; }

export interface HoneyTransferredFields { honeyToTransfer: ToField<"u64">; receipient: ToField<"address">; honeyBurnt: ToField<"u64"> }

export type HoneyTransferredReified = Reified<HoneyTransferred, HoneyTransferredFields>;

export class HoneyTransferred implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::honey::HoneyTransferred`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = HoneyTransferred.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::honey::HoneyTransferred`; readonly $typeArgs: []; readonly $isPhantom = HoneyTransferred.$isPhantom;

    readonly honeyToTransfer: ToField<"u64">; readonly receipient: ToField<"address">; readonly honeyBurnt: ToField<"u64">

    private constructor(typeArgs: [], fields: HoneyTransferredFields,) {
        this.$fullTypeName = composeSuiType(HoneyTransferred.$typeName, ...typeArgs) as `${typeof PKG_V1}::honey::HoneyTransferred`; this.$typeArgs = typeArgs;

        this.honeyToTransfer = fields.honeyToTransfer;; this.receipient = fields.receipient;; this.honeyBurnt = fields.honeyBurnt;
    }

    static reified(): HoneyTransferredReified { return { typeName: HoneyTransferred.$typeName, fullTypeName: composeSuiType(HoneyTransferred.$typeName, ...[]) as `${typeof PKG_V1}::honey::HoneyTransferred`, typeArgs: [] as [], isPhantom: HoneyTransferred.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HoneyTransferred.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyTransferred.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => HoneyTransferred.fromBcs(data,), bcs: HoneyTransferred.bcs, fromJSONField: (field: any) => HoneyTransferred.fromJSONField(field,), fromJSON: (json: Record<string, any>) => HoneyTransferred.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => HoneyTransferred.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => HoneyTransferred.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => HoneyTransferred.fetch(client, id,), new: (fields: HoneyTransferredFields,) => { return new HoneyTransferred([], fields) }, kind: "StructClassReified", } }

    static get r() { return HoneyTransferred.reified() }

    static phantom(): PhantomReified<ToTypeStr<HoneyTransferred>> { return phantom(HoneyTransferred.reified()); } static get p() { return HoneyTransferred.phantom() }

    static get bcs() {
        return bcs.struct("HoneyTransferred", {

            honey_to_transfer: bcs.u64(), receipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), honey_burnt: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): HoneyTransferred { return HoneyTransferred.reified().new({ honeyToTransfer: decodeFromFields("u64", fields.honey_to_transfer), receipient: decodeFromFields("address", fields.receipient), honeyBurnt: decodeFromFields("u64", fields.honey_burnt) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): HoneyTransferred {
        if (!isHoneyTransferred(item.type)) {
            throw new Error("not a HoneyTransferred type");

        }

        return HoneyTransferred.reified().new({ honeyToTransfer: decodeFromFieldsWithTypes("u64", item.fields.honey_to_transfer), receipient: decodeFromFieldsWithTypes("address", item.fields.receipient), honeyBurnt: decodeFromFieldsWithTypes("u64", item.fields.honey_burnt) })
    }

    static fromBcs(data: Uint8Array): HoneyTransferred { return HoneyTransferred.fromFields(HoneyTransferred.bcs.parse(data)) }

    toJSONField() {
        return {

            honeyToTransfer: this.honeyToTransfer.toString(), receipient: this.receipient, honeyBurnt: this.honeyBurnt.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): HoneyTransferred { return HoneyTransferred.reified().new({ honeyToTransfer: decodeFromJSONField("u64", field.honeyToTransfer), receipient: decodeFromJSONField("address", field.receipient), honeyBurnt: decodeFromJSONField("u64", field.honeyBurnt) }) }

    static fromJSON(json: Record<string, any>): HoneyTransferred {
        if (json.$typeName !== HoneyTransferred.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return HoneyTransferred.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): HoneyTransferred { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyTransferred(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyTransferred object`); } return HoneyTransferred.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): HoneyTransferred {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyTransferred(data.bcs.type)) { throw new Error(`object at is not a HoneyTransferred object`); }

            return HoneyTransferred.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return HoneyTransferred.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<HoneyTransferred> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyTransferred object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyTransferred(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyTransferred object`); }

        return HoneyTransferred.fromSuiObjectData(res.data);
    }

}

/* ============================== HoneyUnwrappedToCoin =============================== */

export function isHoneyUnwrappedToCoin(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::honey::HoneyUnwrappedToCoin`; }

export interface HoneyUnwrappedToCoinFields { honeyToUnwrap: ToField<"u64">; honeyBurnt: ToField<"u64"> }

export type HoneyUnwrappedToCoinReified = Reified<HoneyUnwrappedToCoin, HoneyUnwrappedToCoinFields>;

export class HoneyUnwrappedToCoin implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::honey::HoneyUnwrappedToCoin`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = HoneyUnwrappedToCoin.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::honey::HoneyUnwrappedToCoin`; readonly $typeArgs: []; readonly $isPhantom = HoneyUnwrappedToCoin.$isPhantom;

    readonly honeyToUnwrap: ToField<"u64">; readonly honeyBurnt: ToField<"u64">

    private constructor(typeArgs: [], fields: HoneyUnwrappedToCoinFields,) {
        this.$fullTypeName = composeSuiType(HoneyUnwrappedToCoin.$typeName, ...typeArgs) as `${typeof PKG_V1}::honey::HoneyUnwrappedToCoin`; this.$typeArgs = typeArgs;

        this.honeyToUnwrap = fields.honeyToUnwrap;; this.honeyBurnt = fields.honeyBurnt;
    }

    static reified(): HoneyUnwrappedToCoinReified { return { typeName: HoneyUnwrappedToCoin.$typeName, fullTypeName: composeSuiType(HoneyUnwrappedToCoin.$typeName, ...[]) as `${typeof PKG_V1}::honey::HoneyUnwrappedToCoin`, typeArgs: [] as [], isPhantom: HoneyUnwrappedToCoin.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HoneyUnwrappedToCoin.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyUnwrappedToCoin.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => HoneyUnwrappedToCoin.fromBcs(data,), bcs: HoneyUnwrappedToCoin.bcs, fromJSONField: (field: any) => HoneyUnwrappedToCoin.fromJSONField(field,), fromJSON: (json: Record<string, any>) => HoneyUnwrappedToCoin.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => HoneyUnwrappedToCoin.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => HoneyUnwrappedToCoin.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => HoneyUnwrappedToCoin.fetch(client, id,), new: (fields: HoneyUnwrappedToCoinFields,) => { return new HoneyUnwrappedToCoin([], fields) }, kind: "StructClassReified", } }

    static get r() { return HoneyUnwrappedToCoin.reified() }

    static phantom(): PhantomReified<ToTypeStr<HoneyUnwrappedToCoin>> { return phantom(HoneyUnwrappedToCoin.reified()); } static get p() { return HoneyUnwrappedToCoin.phantom() }

    static get bcs() {
        return bcs.struct("HoneyUnwrappedToCoin", {

            honey_to_unwrap: bcs.u64(), honey_burnt: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): HoneyUnwrappedToCoin { return HoneyUnwrappedToCoin.reified().new({ honeyToUnwrap: decodeFromFields("u64", fields.honey_to_unwrap), honeyBurnt: decodeFromFields("u64", fields.honey_burnt) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): HoneyUnwrappedToCoin {
        if (!isHoneyUnwrappedToCoin(item.type)) {
            throw new Error("not a HoneyUnwrappedToCoin type");

        }

        return HoneyUnwrappedToCoin.reified().new({ honeyToUnwrap: decodeFromFieldsWithTypes("u64", item.fields.honey_to_unwrap), honeyBurnt: decodeFromFieldsWithTypes("u64", item.fields.honey_burnt) })
    }

    static fromBcs(data: Uint8Array): HoneyUnwrappedToCoin { return HoneyUnwrappedToCoin.fromFields(HoneyUnwrappedToCoin.bcs.parse(data)) }

    toJSONField() {
        return {

            honeyToUnwrap: this.honeyToUnwrap.toString(), honeyBurnt: this.honeyBurnt.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): HoneyUnwrappedToCoin { return HoneyUnwrappedToCoin.reified().new({ honeyToUnwrap: decodeFromJSONField("u64", field.honeyToUnwrap), honeyBurnt: decodeFromJSONField("u64", field.honeyBurnt) }) }

    static fromJSON(json: Record<string, any>): HoneyUnwrappedToCoin {
        if (json.$typeName !== HoneyUnwrappedToCoin.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return HoneyUnwrappedToCoin.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): HoneyUnwrappedToCoin { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyUnwrappedToCoin(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyUnwrappedToCoin object`); } return HoneyUnwrappedToCoin.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): HoneyUnwrappedToCoin {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyUnwrappedToCoin(data.bcs.type)) { throw new Error(`object at is not a HoneyUnwrappedToCoin object`); }

            return HoneyUnwrappedToCoin.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return HoneyUnwrappedToCoin.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<HoneyUnwrappedToCoin> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyUnwrappedToCoin object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyUnwrappedToCoin(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyUnwrappedToCoin object`); }

        return HoneyUnwrappedToCoin.fromSuiObjectData(res.data);
    }

}
