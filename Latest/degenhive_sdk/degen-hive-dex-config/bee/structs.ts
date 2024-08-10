import {String} from "../../_dependencies/source/0x1/string/structs";
import {VecMap} from "../../_dependencies/source/0x2/vec-map/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== BEE =============================== */

export function isBEE(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BEE"; }

export interface BEEFields { dummyField: ToField<"bool"> }

export type BEEReified = Reified< BEE, BEEFields >;

export class BEE implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BEE"; static readonly $numTypeParams = 0;

 readonly $typeName = BEE.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BEE";

 readonly $typeArgs: [];

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: BEEFields, ) { this.$fullTypeName = composeSuiType( BEE.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BEE"; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): BEEReified { return { typeName: BEE.$typeName, fullTypeName: composeSuiType( BEE.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BEE", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BEE.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BEE.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BEE.fromBcs( data, ), bcs: BEE.bcs, fromJSONField: (field: any) => BEE.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BEE.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BEE.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BEE.fetch( client, id, ), new: ( fields: BEEFields, ) => { return new BEE( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BEE.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BEE>> { return phantom(BEE.reified( )); } static get p() { return BEE.phantom() }

 static get bcs() { return bcs.struct("BEE", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): BEE { return BEE.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BEE { if (!isBEE(item.type)) { throw new Error("not a BEE type");

 }

 return BEE.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): BEE { return BEE.fromFields( BEE.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BEE { return BEE.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): BEE { if (json.$typeName !== BEE.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BEE.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BEE { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBEE(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BEE object`); } return BEE.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BEE> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BEE object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBEE(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BEE object`); }
 return BEE.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BeesTransferred =============================== */

export function isBeesTransferred(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesTransferred"; }

export interface BeesTransferredFields { beesToTransfer: ToField<"u64">; receipient: ToField<"address">; beesBurnt: ToField<"u64"> }

export type BeesTransferredReified = Reified< BeesTransferred, BeesTransferredFields >;

export class BeesTransferred implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesTransferred"; static readonly $numTypeParams = 0;

 readonly $typeName = BeesTransferred.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesTransferred";

 readonly $typeArgs: [];

 readonly beesToTransfer: ToField<"u64">; readonly receipient: ToField<"address">; readonly beesBurnt: ToField<"u64">

 private constructor(typeArgs: [], fields: BeesTransferredFields, ) { this.$fullTypeName = composeSuiType( BeesTransferred.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesTransferred"; this.$typeArgs = typeArgs;

 this.beesToTransfer = fields.beesToTransfer;; this.receipient = fields.receipient;; this.beesBurnt = fields.beesBurnt; }

 static reified( ): BeesTransferredReified { return { typeName: BeesTransferred.$typeName, fullTypeName: composeSuiType( BeesTransferred.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesTransferred", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeesTransferred.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeesTransferred.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeesTransferred.fromBcs( data, ), bcs: BeesTransferred.bcs, fromJSONField: (field: any) => BeesTransferred.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeesTransferred.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeesTransferred.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BeesTransferred.fetch( client, id, ), new: ( fields: BeesTransferredFields, ) => { return new BeesTransferred( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeesTransferred.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeesTransferred>> { return phantom(BeesTransferred.reified( )); } static get p() { return BeesTransferred.phantom() }

 static get bcs() { return bcs.struct("BeesTransferred", {

 bees_to_transfer: bcs.u64(), receipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bees_burnt: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BeesTransferred { return BeesTransferred.reified( ).new( { beesToTransfer: decodeFromFields("u64", fields.bees_to_transfer), receipient: decodeFromFields("address", fields.receipient), beesBurnt: decodeFromFields("u64", fields.bees_burnt) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeesTransferred { if (!isBeesTransferred(item.type)) { throw new Error("not a BeesTransferred type");

 }

 return BeesTransferred.reified( ).new( { beesToTransfer: decodeFromFieldsWithTypes("u64", item.fields.bees_to_transfer), receipient: decodeFromFieldsWithTypes("address", item.fields.receipient), beesBurnt: decodeFromFieldsWithTypes("u64", item.fields.bees_burnt) } ) }

 static fromBcs( data: Uint8Array ): BeesTransferred { return BeesTransferred.fromFields( BeesTransferred.bcs.parse(data) ) }

 toJSONField() { return {

 beesToTransfer: this.beesToTransfer.toString(),receipient: this.receipient,beesBurnt: this.beesBurnt.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeesTransferred { return BeesTransferred.reified( ).new( { beesToTransfer: decodeFromJSONField("u64", field.beesToTransfer), receipient: decodeFromJSONField("address", field.receipient), beesBurnt: decodeFromJSONField("u64", field.beesBurnt) } ) }

 static fromJSON( json: Record<string, any> ): BeesTransferred { if (json.$typeName !== BeesTransferred.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeesTransferred.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeesTransferred { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeesTransferred(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeesTransferred object`); } return BeesTransferred.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeesTransferred> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeesTransferred object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeesTransferred(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeesTransferred object`); }
 return BeesTransferred.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BeesUnwrappedToCoin =============================== */

export function isBeesUnwrappedToCoin(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesUnwrappedToCoin"; }

export interface BeesUnwrappedToCoinFields { beesToUnwrap: ToField<"u64">; beesBurnt: ToField<"u64"> }

export type BeesUnwrappedToCoinReified = Reified< BeesUnwrappedToCoin, BeesUnwrappedToCoinFields >;

export class BeesUnwrappedToCoin implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesUnwrappedToCoin"; static readonly $numTypeParams = 0;

 readonly $typeName = BeesUnwrappedToCoin.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesUnwrappedToCoin";

 readonly $typeArgs: [];

 readonly beesToUnwrap: ToField<"u64">; readonly beesBurnt: ToField<"u64">

 private constructor(typeArgs: [], fields: BeesUnwrappedToCoinFields, ) { this.$fullTypeName = composeSuiType( BeesUnwrappedToCoin.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesUnwrappedToCoin"; this.$typeArgs = typeArgs;

 this.beesToUnwrap = fields.beesToUnwrap;; this.beesBurnt = fields.beesBurnt; }

 static reified( ): BeesUnwrappedToCoinReified { return { typeName: BeesUnwrappedToCoin.$typeName, fullTypeName: composeSuiType( BeesUnwrappedToCoin.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesUnwrappedToCoin", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeesUnwrappedToCoin.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeesUnwrappedToCoin.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeesUnwrappedToCoin.fromBcs( data, ), bcs: BeesUnwrappedToCoin.bcs, fromJSONField: (field: any) => BeesUnwrappedToCoin.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeesUnwrappedToCoin.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeesUnwrappedToCoin.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BeesUnwrappedToCoin.fetch( client, id, ), new: ( fields: BeesUnwrappedToCoinFields, ) => { return new BeesUnwrappedToCoin( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeesUnwrappedToCoin.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeesUnwrappedToCoin>> { return phantom(BeesUnwrappedToCoin.reified( )); } static get p() { return BeesUnwrappedToCoin.phantom() }

 static get bcs() { return bcs.struct("BeesUnwrappedToCoin", {

 bees_to_unwrap: bcs.u64(), bees_burnt: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BeesUnwrappedToCoin { return BeesUnwrappedToCoin.reified( ).new( { beesToUnwrap: decodeFromFields("u64", fields.bees_to_unwrap), beesBurnt: decodeFromFields("u64", fields.bees_burnt) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeesUnwrappedToCoin { if (!isBeesUnwrappedToCoin(item.type)) { throw new Error("not a BeesUnwrappedToCoin type");

 }

 return BeesUnwrappedToCoin.reified( ).new( { beesToUnwrap: decodeFromFieldsWithTypes("u64", item.fields.bees_to_unwrap), beesBurnt: decodeFromFieldsWithTypes("u64", item.fields.bees_burnt) } ) }

 static fromBcs( data: Uint8Array ): BeesUnwrappedToCoin { return BeesUnwrappedToCoin.fromFields( BeesUnwrappedToCoin.bcs.parse(data) ) }

 toJSONField() { return {

 beesToUnwrap: this.beesToUnwrap.toString(),beesBurnt: this.beesBurnt.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeesUnwrappedToCoin { return BeesUnwrappedToCoin.reified( ).new( { beesToUnwrap: decodeFromJSONField("u64", field.beesToUnwrap), beesBurnt: decodeFromJSONField("u64", field.beesBurnt) } ) }

 static fromJSON( json: Record<string, any> ): BeesUnwrappedToCoin { if (json.$typeName !== BeesUnwrappedToCoin.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeesUnwrappedToCoin.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeesUnwrappedToCoin { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeesUnwrappedToCoin(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeesUnwrappedToCoin object`); } return BeesUnwrappedToCoin.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeesUnwrappedToCoin> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeesUnwrappedToCoin object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeesUnwrappedToCoin(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeesUnwrappedToCoin object`); }
 return BeesUnwrappedToCoin.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Burn =============================== */

export function isBurn(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::Burn"; }

export interface BurnFields { dummyField: ToField<"bool"> }

export type BurnReified = Reified< Burn, BurnFields >;

export class Burn implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::Burn"; static readonly $numTypeParams = 0;

 readonly $typeName = Burn.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::Burn";

 readonly $typeArgs: [];

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: BurnFields, ) { this.$fullTypeName = composeSuiType( Burn.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::Burn"; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): BurnReified { return { typeName: Burn.$typeName, fullTypeName: composeSuiType( Burn.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::Burn", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Burn.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Burn.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Burn.fromBcs( data, ), bcs: Burn.bcs, fromJSONField: (field: any) => Burn.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Burn.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Burn.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Burn.fetch( client, id, ), new: ( fields: BurnFields, ) => { return new Burn( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Burn.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Burn>> { return phantom(Burn.reified( )); } static get p() { return Burn.phantom() }

 static get bcs() { return bcs.struct("Burn", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): Burn { return Burn.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Burn { if (!isBurn(item.type)) { throw new Error("not a Burn type");

 }

 return Burn.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): Burn { return Burn.fromFields( Burn.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Burn { return Burn.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): Burn { if (json.$typeName !== Burn.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Burn.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Burn { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBurn(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Burn object`); } return Burn.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Burn> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Burn object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBurn(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Burn object`); }
 return Burn.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BurnCondition =============================== */

export function isBurnCondition(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BurnCondition"; }

export interface BurnConditionFields { percent: ToField<VecMap<String, "u64">> }

export type BurnConditionReified = Reified< BurnCondition, BurnConditionFields >;

export class BurnCondition implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BurnCondition"; static readonly $numTypeParams = 0;

 readonly $typeName = BurnCondition.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BurnCondition";

 readonly $typeArgs: [];

 readonly percent: ToField<VecMap<String, "u64">>

 private constructor(typeArgs: [], fields: BurnConditionFields, ) { this.$fullTypeName = composeSuiType( BurnCondition.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BurnCondition"; this.$typeArgs = typeArgs;

 this.percent = fields.percent; }

 static reified( ): BurnConditionReified { return { typeName: BurnCondition.$typeName, fullTypeName: composeSuiType( BurnCondition.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BurnCondition", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BurnCondition.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BurnCondition.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BurnCondition.fromBcs( data, ), bcs: BurnCondition.bcs, fromJSONField: (field: any) => BurnCondition.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BurnCondition.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BurnCondition.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BurnCondition.fetch( client, id, ), new: ( fields: BurnConditionFields, ) => { return new BurnCondition( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BurnCondition.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BurnCondition>> { return phantom(BurnCondition.reified( )); } static get p() { return BurnCondition.phantom() }

 static get bcs() { return bcs.struct("BurnCondition", {

 percent: VecMap.bcs(String.bcs, bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): BurnCondition { return BurnCondition.reified( ).new( { percent: decodeFromFields(VecMap.reified(String.reified(), "u64"), fields.percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BurnCondition { if (!isBurnCondition(item.type)) { throw new Error("not a BurnCondition type");

 }

 return BurnCondition.reified( ).new( { percent: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), "u64"), item.fields.percent) } ) }

 static fromBcs( data: Uint8Array ): BurnCondition { return BurnCondition.fromFields( BurnCondition.bcs.parse(data) ) }

 toJSONField() { return {

 percent: this.percent.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BurnCondition { return BurnCondition.reified( ).new( { percent: decodeFromJSONField(VecMap.reified(String.reified(), "u64"), field.percent) } ) }

 static fromJSON( json: Record<string, any> ): BurnCondition { if (json.$typeName !== BurnCondition.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BurnCondition.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BurnCondition { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBurnCondition(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BurnCondition object`); } return BurnCondition.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BurnCondition> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BurnCondition object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBurnCondition(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BurnCondition object`); }
 return BurnCondition.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
