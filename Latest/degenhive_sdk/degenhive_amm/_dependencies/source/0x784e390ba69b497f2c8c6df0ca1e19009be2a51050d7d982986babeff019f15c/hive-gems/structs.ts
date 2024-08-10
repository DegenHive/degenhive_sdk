import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {UID} from "../../0x2/object/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== HiveGemKraftCap =============================== */

export function isHiveGemKraftCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive_gems::HiveGemKraftCap`; }

export interface HiveGemKraftCapFields { id: ToField<UID>; kraftedTotal: ToField<"u64"> }

export type HiveGemKraftCapReified = Reified< HiveGemKraftCap, HiveGemKraftCapFields >;

export class HiveGemKraftCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive_gems::HiveGemKraftCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveGemKraftCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive_gems::HiveGemKraftCap`; readonly $typeArgs: []; readonly $isPhantom = HiveGemKraftCap.$isPhantom;

 readonly id: ToField<UID>; readonly kraftedTotal: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveGemKraftCapFields, ) { this.$fullTypeName = composeSuiType( HiveGemKraftCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive_gems::HiveGemKraftCap`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.kraftedTotal = fields.kraftedTotal; }

 static reified( ): HiveGemKraftCapReified { return { typeName: HiveGemKraftCap.$typeName, fullTypeName: composeSuiType( HiveGemKraftCap.$typeName, ...[] ) as `${typeof PKG_V1}::hive_gems::HiveGemKraftCap`, typeArgs: [ ] as [], isPhantom: HiveGemKraftCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveGemKraftCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveGemKraftCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveGemKraftCap.fromBcs( data, ), bcs: HiveGemKraftCap.bcs, fromJSONField: (field: any) => HiveGemKraftCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveGemKraftCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveGemKraftCap.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveGemKraftCap.fetch( client, id, ), new: ( fields: HiveGemKraftCapFields, ) => { return new HiveGemKraftCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveGemKraftCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveGemKraftCap>> { return phantom(HiveGemKraftCap.reified( )); } static get p() { return HiveGemKraftCap.phantom() }

 static get bcs() { return bcs.struct("HiveGemKraftCap", {

 id: UID.bcs, krafted_total: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveGemKraftCap { return HiveGemKraftCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), kraftedTotal: decodeFromFields("u64", fields.krafted_total) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveGemKraftCap { if (!isHiveGemKraftCap(item.type)) { throw new Error("not a HiveGemKraftCap type");

 }

 return HiveGemKraftCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), kraftedTotal: decodeFromFieldsWithTypes("u64", item.fields.krafted_total) } ) }

 static fromBcs( data: Uint8Array ): HiveGemKraftCap { return HiveGemKraftCap.fromFields( HiveGemKraftCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,kraftedTotal: this.kraftedTotal.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveGemKraftCap { return HiveGemKraftCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), kraftedTotal: decodeFromJSONField("u64", field.kraftedTotal) } ) }

 static fromJSON( json: Record<string, any> ): HiveGemKraftCap { if (json.$typeName !== HiveGemKraftCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveGemKraftCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveGemKraftCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveGemKraftCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveGemKraftCap object`); } return HiveGemKraftCap.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveGemKraftCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveGemKraftCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveGemKraftCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveGemKraftCap object`); }

 return HiveGemKraftCap.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveGems =============================== */

export function isHiveGems(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive_gems::HiveGems`; }

export interface HiveGemsFields { value: ToField<"u64"> }

export type HiveGemsReified = Reified< HiveGems, HiveGemsFields >;

export class HiveGems implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive_gems::HiveGems`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveGems.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive_gems::HiveGems`; readonly $typeArgs: []; readonly $isPhantom = HiveGems.$isPhantom;

 readonly value: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveGemsFields, ) { this.$fullTypeName = composeSuiType( HiveGems.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive_gems::HiveGems`; this.$typeArgs = typeArgs;

 this.value = fields.value; }

 static reified( ): HiveGemsReified { return { typeName: HiveGems.$typeName, fullTypeName: composeSuiType( HiveGems.$typeName, ...[] ) as `${typeof PKG_V1}::hive_gems::HiveGems`, typeArgs: [ ] as [], isPhantom: HiveGems.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveGems.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveGems.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveGems.fromBcs( data, ), bcs: HiveGems.bcs, fromJSONField: (field: any) => HiveGems.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveGems.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveGems.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveGems.fetch( client, id, ), new: ( fields: HiveGemsFields, ) => { return new HiveGems( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveGems.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveGems>> { return phantom(HiveGems.reified( )); } static get p() { return HiveGems.phantom() }

 static get bcs() { return bcs.struct("HiveGems", {

 value: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveGems { return HiveGems.reified( ).new( { value: decodeFromFields("u64", fields.value) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveGems { if (!isHiveGems(item.type)) { throw new Error("not a HiveGems type");

 }

 return HiveGems.reified( ).new( { value: decodeFromFieldsWithTypes("u64", item.fields.value) } ) }

 static fromBcs( data: Uint8Array ): HiveGems { return HiveGems.fromFields( HiveGems.bcs.parse(data) ) }

 toJSONField() { return {

 value: this.value.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveGems { return HiveGems.reified( ).new( { value: decodeFromJSONField("u64", field.value) } ) }

 static fromJSON( json: Record<string, any> ): HiveGems { if (json.$typeName !== HiveGems.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveGems.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveGems { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveGems(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveGems object`); } return HiveGems.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveGems> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveGems object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveGems(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveGems object`); }

 return HiveGems.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveGemsBurnt =============================== */

export function isHiveGemsBurnt(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive_gems::HiveGemsBurnt`; }

export interface HiveGemsBurntFields { value: ToField<"u64"> }

export type HiveGemsBurntReified = Reified< HiveGemsBurnt, HiveGemsBurntFields >;

export class HiveGemsBurnt implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive_gems::HiveGemsBurnt`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveGemsBurnt.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive_gems::HiveGemsBurnt`; readonly $typeArgs: []; readonly $isPhantom = HiveGemsBurnt.$isPhantom;

 readonly value: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveGemsBurntFields, ) { this.$fullTypeName = composeSuiType( HiveGemsBurnt.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive_gems::HiveGemsBurnt`; this.$typeArgs = typeArgs;

 this.value = fields.value; }

 static reified( ): HiveGemsBurntReified { return { typeName: HiveGemsBurnt.$typeName, fullTypeName: composeSuiType( HiveGemsBurnt.$typeName, ...[] ) as `${typeof PKG_V1}::hive_gems::HiveGemsBurnt`, typeArgs: [ ] as [], isPhantom: HiveGemsBurnt.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveGemsBurnt.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveGemsBurnt.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveGemsBurnt.fromBcs( data, ), bcs: HiveGemsBurnt.bcs, fromJSONField: (field: any) => HiveGemsBurnt.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveGemsBurnt.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveGemsBurnt.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveGemsBurnt.fetch( client, id, ), new: ( fields: HiveGemsBurntFields, ) => { return new HiveGemsBurnt( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveGemsBurnt.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveGemsBurnt>> { return phantom(HiveGemsBurnt.reified( )); } static get p() { return HiveGemsBurnt.phantom() }

 static get bcs() { return bcs.struct("HiveGemsBurnt", {

 value: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveGemsBurnt { return HiveGemsBurnt.reified( ).new( { value: decodeFromFields("u64", fields.value) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveGemsBurnt { if (!isHiveGemsBurnt(item.type)) { throw new Error("not a HiveGemsBurnt type");

 }

 return HiveGemsBurnt.reified( ).new( { value: decodeFromFieldsWithTypes("u64", item.fields.value) } ) }

 static fromBcs( data: Uint8Array ): HiveGemsBurnt { return HiveGemsBurnt.fromFields( HiveGemsBurnt.bcs.parse(data) ) }

 toJSONField() { return {

 value: this.value.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveGemsBurnt { return HiveGemsBurnt.reified( ).new( { value: decodeFromJSONField("u64", field.value) } ) }

 static fromJSON( json: Record<string, any> ): HiveGemsBurnt { if (json.$typeName !== HiveGemsBurnt.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveGemsBurnt.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveGemsBurnt { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveGemsBurnt(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveGemsBurnt object`); } return HiveGemsBurnt.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveGemsBurnt> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveGemsBurnt object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveGemsBurnt(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveGemsBurnt object`); }

 return HiveGemsBurnt.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
