import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Curved =============================== */

export function isCurved(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::curves::Curved`; }

export interface CurvedFields { dummyField: ToField<"bool"> }

export type CurvedReified = Reified<Curved, CurvedFields>;

export class Curved implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::curves::Curved`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = Curved.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::curves::Curved`; readonly $typeArgs: []; readonly $isPhantom = Curved.$isPhantom;

    readonly dummyField: ToField<"bool">

    private constructor(typeArgs: [], fields: CurvedFields,) {
        this.$fullTypeName = composeSuiType(Curved.$typeName, ...typeArgs) as `${typeof PKG_V1}::curves::Curved`; this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): CurvedReified { return { typeName: Curved.$typeName, fullTypeName: composeSuiType(Curved.$typeName, ...[]) as `${typeof PKG_V1}::curves::Curved`, typeArgs: [] as [], isPhantom: Curved.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Curved.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => Curved.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => Curved.fromBcs(data,), bcs: Curved.bcs, fromJSONField: (field: any) => Curved.fromJSONField(field,), fromJSON: (json: Record<string, any>) => Curved.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => Curved.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => Curved.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => Curved.fetch(client, id,), new: (fields: CurvedFields,) => { return new Curved([], fields) }, kind: "StructClassReified", } }

    static get r() { return Curved.reified() }

    static phantom(): PhantomReified<ToTypeStr<Curved>> { return phantom(Curved.reified()); } static get p() { return Curved.phantom() }

    static get bcs() {
        return bcs.struct("Curved", {

            dummy_field: bcs.bool()

        })
    };

    static fromFields(fields: Record<string, any>): Curved { return Curved.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): Curved {
        if (!isCurved(item.type)) {
            throw new Error("not a Curved type");

        }

        return Curved.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) })
    }

    static fromBcs(data: Uint8Array): Curved { return Curved.fromFields(Curved.bcs.parse(data)) }

    toJSONField() {
        return {

            dummyField: this.dummyField,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): Curved { return Curved.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) }) }

    static fromJSON(json: Record<string, any>): Curved {
        if (json.$typeName !== Curved.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return Curved.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): Curved { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurved(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Curved object`); } return Curved.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): Curved {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCurved(data.bcs.type)) { throw new Error(`object at is not a Curved object`); }

            return Curved.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return Curved.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Curved> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Curved object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurved(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Curved object`); }

        return Curved.fromSuiObjectData(res.data);
    }

}

/* ============================== Stable =============================== */

export function isStable(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::curves::Stable`; }

export interface StableFields { dummyField: ToField<"bool"> }

export type StableReified = Reified<Stable, StableFields>;

export class Stable implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::curves::Stable`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = Stable.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::curves::Stable`; readonly $typeArgs: []; readonly $isPhantom = Stable.$isPhantom;

    readonly dummyField: ToField<"bool">

    private constructor(typeArgs: [], fields: StableFields,) {
        this.$fullTypeName = composeSuiType(Stable.$typeName, ...typeArgs) as `${typeof PKG_V1}::curves::Stable`; this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): StableReified { return { typeName: Stable.$typeName, fullTypeName: composeSuiType(Stable.$typeName, ...[]) as `${typeof PKG_V1}::curves::Stable`, typeArgs: [] as [], isPhantom: Stable.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Stable.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => Stable.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => Stable.fromBcs(data,), bcs: Stable.bcs, fromJSONField: (field: any) => Stable.fromJSONField(field,), fromJSON: (json: Record<string, any>) => Stable.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => Stable.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => Stable.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => Stable.fetch(client, id,), new: (fields: StableFields,) => { return new Stable([], fields) }, kind: "StructClassReified", } }

    static get r() { return Stable.reified() }

    static phantom(): PhantomReified<ToTypeStr<Stable>> { return phantom(Stable.reified()); } static get p() { return Stable.phantom() }

    static get bcs() {
        return bcs.struct("Stable", {

            dummy_field: bcs.bool()

        })
    };

    static fromFields(fields: Record<string, any>): Stable { return Stable.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): Stable {
        if (!isStable(item.type)) {
            throw new Error("not a Stable type");

        }

        return Stable.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) })
    }

    static fromBcs(data: Uint8Array): Stable { return Stable.fromFields(Stable.bcs.parse(data)) }

    toJSONField() {
        return {

            dummyField: this.dummyField,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): Stable { return Stable.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) }) }

    static fromJSON(json: Record<string, any>): Stable {
        if (json.$typeName !== Stable.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return Stable.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): Stable { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStable(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Stable object`); } return Stable.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): Stable {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStable(data.bcs.type)) { throw new Error(`object at is not a Stable object`); }

            return Stable.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return Stable.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Stable> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Stable object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStable(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Stable object`); }

        return Stable.fromSuiObjectData(res.data);
    }

}

/* ============================== Weighted =============================== */

export function isWeighted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::curves::Weighted`; }

export interface WeightedFields { dummyField: ToField<"bool"> }

export type WeightedReified = Reified<Weighted, WeightedFields>;

export class Weighted implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::curves::Weighted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = Weighted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::curves::Weighted`; readonly $typeArgs: []; readonly $isPhantom = Weighted.$isPhantom;

    readonly dummyField: ToField<"bool">

    private constructor(typeArgs: [], fields: WeightedFields,) {
        this.$fullTypeName = composeSuiType(Weighted.$typeName, ...typeArgs) as `${typeof PKG_V1}::curves::Weighted`; this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): WeightedReified { return { typeName: Weighted.$typeName, fullTypeName: composeSuiType(Weighted.$typeName, ...[]) as `${typeof PKG_V1}::curves::Weighted`, typeArgs: [] as [], isPhantom: Weighted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Weighted.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => Weighted.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => Weighted.fromBcs(data,), bcs: Weighted.bcs, fromJSONField: (field: any) => Weighted.fromJSONField(field,), fromJSON: (json: Record<string, any>) => Weighted.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => Weighted.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => Weighted.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => Weighted.fetch(client, id,), new: (fields: WeightedFields,) => { return new Weighted([], fields) }, kind: "StructClassReified", } }

    static get r() { return Weighted.reified() }

    static phantom(): PhantomReified<ToTypeStr<Weighted>> { return phantom(Weighted.reified()); } static get p() { return Weighted.phantom() }

    static get bcs() {
        return bcs.struct("Weighted", {

            dummy_field: bcs.bool()

        })
    };

    static fromFields(fields: Record<string, any>): Weighted { return Weighted.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): Weighted {
        if (!isWeighted(item.type)) {
            throw new Error("not a Weighted type");

        }

        return Weighted.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) })
    }

    static fromBcs(data: Uint8Array): Weighted { return Weighted.fromFields(Weighted.bcs.parse(data)) }

    toJSONField() {
        return {

            dummyField: this.dummyField,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): Weighted { return Weighted.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) }) }

    static fromJSON(json: Record<string, any>): Weighted {
        if (json.$typeName !== Weighted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return Weighted.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): Weighted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWeighted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Weighted object`); } return Weighted.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): Weighted {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWeighted(data.bcs.type)) { throw new Error(`object at is not a Weighted object`); }

            return Weighted.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return Weighted.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Weighted> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Weighted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWeighted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Weighted object`); }

        return Weighted.fromSuiObjectData(res.data);
    }

}
