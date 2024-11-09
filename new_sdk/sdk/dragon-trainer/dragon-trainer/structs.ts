import * as reified from "../../_framework/reified";
import {String} from "../../_dependencies/source/0x1/ascii/structs";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {String as String1} from "../../_dependencies/source/0x1/string/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {LinkedTable} from "../../_dependencies/source/0x2/linked-table/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import {SUI} from "../../_dependencies/source/0x2/sui/structs";
import {Table} from "../../_dependencies/source/0x2/table/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {HIVE} from "../../yield-flow/hive/structs";
import {HONEY} from "../../yield-flow/honey/structs";
import {HiddenWorldCapability} from "../../yield-flow/yield-flow/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== Listing =============================== */

export function isListing(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::Listing`; }

export interface ListingFields { listedByTrainer: ToField<"address">; mysticalBee: ToField<MysticalBee>; minPrice: ToField<"u64">; expirationSec: ToField<"u64"> }

export type ListingReified = Reified< Listing, ListingFields >;

export class Listing implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::Listing`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Listing.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::Listing`; readonly $typeArgs: []; readonly $isPhantom = Listing.$isPhantom;

 readonly listedByTrainer: ToField<"address">; readonly mysticalBee: ToField<MysticalBee>; readonly minPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: ListingFields, ) { this.$fullTypeName = composeSuiType( Listing.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::Listing`; this.$typeArgs = typeArgs;

 this.listedByTrainer = fields.listedByTrainer;; this.mysticalBee = fields.mysticalBee;; this.minPrice = fields.minPrice;; this.expirationSec = fields.expirationSec; }

 static reified( ): ListingReified { return { typeName: Listing.$typeName, fullTypeName: composeSuiType( Listing.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::Listing`, typeArgs: [ ] as [], isPhantom: Listing.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Listing.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Listing.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Listing.fromBcs( data, ), bcs: Listing.bcs, fromJSONField: (field: any) => Listing.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Listing.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Listing.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Listing.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Listing.fetch( client, id, ), new: ( fields: ListingFields, ) => { return new Listing( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Listing.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Listing>> { return phantom(Listing.reified( )); } static get p() { return Listing.phantom() }

 static get bcs() { return bcs.struct("Listing", {

 listed_by_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), mystical_bee: MysticalBee.bcs, min_price: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Listing { return Listing.reified( ).new( { listedByTrainer: decodeFromFields("address", fields.listed_by_trainer), mysticalBee: decodeFromFields(MysticalBee.reified(), fields.mystical_bee), minPrice: decodeFromFields("u64", fields.min_price), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Listing { if (!isListing(item.type)) { throw new Error("not a Listing type");

 }

 return Listing.reified( ).new( { listedByTrainer: decodeFromFieldsWithTypes("address", item.fields.listed_by_trainer), mysticalBee: decodeFromFieldsWithTypes(MysticalBee.reified(), item.fields.mystical_bee), minPrice: decodeFromFieldsWithTypes("u64", item.fields.min_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): Listing { return Listing.fromFields( Listing.bcs.parse(data) ) }

 toJSONField() { return {

 listedByTrainer: this.listedByTrainer,mysticalBee: this.mysticalBee.toJSONField(),minPrice: this.minPrice.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Listing { return Listing.reified( ).new( { listedByTrainer: decodeFromJSONField("address", field.listedByTrainer), mysticalBee: decodeFromJSONField(MysticalBee.reified(), field.mysticalBee), minPrice: decodeFromJSONField("u64", field.minPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): Listing { if (json.$typeName !== Listing.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Listing.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Listing { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListing(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Listing object`); } return Listing.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Listing { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isListing(data.bcs.type)) { throw new Error(`object at is not a Listing object`); }

 return Listing.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Listing.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Listing> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Listing object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListing(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Listing object`); }

 return Listing.fromSuiObjectData( res.data ); }

 }

/* ============================== AppAddedToHiveStore =============================== */

export function isAppAddedToHiveStore(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::AppAddedToHiveStore`; }

export interface AppAddedToHiveStoreFields { capabilityAddr: ToField<"address">; appName: ToField<String>; hiveIncentives: ToField<"u64">; honeyIncentives: ToField<"u64">; receipient: ToField<"address"> }

export type AppAddedToHiveStoreReified = Reified< AppAddedToHiveStore, AppAddedToHiveStoreFields >;

export class AppAddedToHiveStore implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::AppAddedToHiveStore`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AppAddedToHiveStore.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::AppAddedToHiveStore`; readonly $typeArgs: []; readonly $isPhantom = AppAddedToHiveStore.$isPhantom;

 readonly capabilityAddr: ToField<"address">; readonly appName: ToField<String>; readonly hiveIncentives: ToField<"u64">; readonly honeyIncentives: ToField<"u64">; readonly receipient: ToField<"address">

 private constructor(typeArgs: [], fields: AppAddedToHiveStoreFields, ) { this.$fullTypeName = composeSuiType( AppAddedToHiveStore.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::AppAddedToHiveStore`; this.$typeArgs = typeArgs;

 this.capabilityAddr = fields.capabilityAddr;; this.appName = fields.appName;; this.hiveIncentives = fields.hiveIncentives;; this.honeyIncentives = fields.honeyIncentives;; this.receipient = fields.receipient; }

 static reified( ): AppAddedToHiveStoreReified { return { typeName: AppAddedToHiveStore.$typeName, fullTypeName: composeSuiType( AppAddedToHiveStore.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::AppAddedToHiveStore`, typeArgs: [ ] as [], isPhantom: AppAddedToHiveStore.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AppAddedToHiveStore.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AppAddedToHiveStore.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AppAddedToHiveStore.fromBcs( data, ), bcs: AppAddedToHiveStore.bcs, fromJSONField: (field: any) => AppAddedToHiveStore.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AppAddedToHiveStore.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AppAddedToHiveStore.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AppAddedToHiveStore.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AppAddedToHiveStore.fetch( client, id, ), new: ( fields: AppAddedToHiveStoreFields, ) => { return new AppAddedToHiveStore( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AppAddedToHiveStore.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AppAddedToHiveStore>> { return phantom(AppAddedToHiveStore.reified( )); } static get p() { return AppAddedToHiveStore.phantom() }

 static get bcs() { return bcs.struct("AppAddedToHiveStore", {

 capability_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), app_name: String.bcs, hive_incentives: bcs.u64(), honey_incentives: bcs.u64(), receipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): AppAddedToHiveStore { return AppAddedToHiveStore.reified( ).new( { capabilityAddr: decodeFromFields("address", fields.capability_addr), appName: decodeFromFields(String.reified(), fields.app_name), hiveIncentives: decodeFromFields("u64", fields.hive_incentives), honeyIncentives: decodeFromFields("u64", fields.honey_incentives), receipient: decodeFromFields("address", fields.receipient) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AppAddedToHiveStore { if (!isAppAddedToHiveStore(item.type)) { throw new Error("not a AppAddedToHiveStore type");

 }

 return AppAddedToHiveStore.reified( ).new( { capabilityAddr: decodeFromFieldsWithTypes("address", item.fields.capability_addr), appName: decodeFromFieldsWithTypes(String.reified(), item.fields.app_name), hiveIncentives: decodeFromFieldsWithTypes("u64", item.fields.hive_incentives), honeyIncentives: decodeFromFieldsWithTypes("u64", item.fields.honey_incentives), receipient: decodeFromFieldsWithTypes("address", item.fields.receipient) } ) }

 static fromBcs( data: Uint8Array ): AppAddedToHiveStore { return AppAddedToHiveStore.fromFields( AppAddedToHiveStore.bcs.parse(data) ) }

 toJSONField() { return {

 capabilityAddr: this.capabilityAddr,appName: this.appName,hiveIncentives: this.hiveIncentives.toString(),honeyIncentives: this.honeyIncentives.toString(),receipient: this.receipient,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AppAddedToHiveStore { return AppAddedToHiveStore.reified( ).new( { capabilityAddr: decodeFromJSONField("address", field.capabilityAddr), appName: decodeFromJSONField(String.reified(), field.appName), hiveIncentives: decodeFromJSONField("u64", field.hiveIncentives), honeyIncentives: decodeFromJSONField("u64", field.honeyIncentives), receipient: decodeFromJSONField("address", field.receipient) } ) }

 static fromJSON( json: Record<string, any> ): AppAddedToHiveStore { if (json.$typeName !== AppAddedToHiveStore.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AppAddedToHiveStore.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AppAddedToHiveStore { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAppAddedToHiveStore(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AppAddedToHiveStore object`); } return AppAddedToHiveStore.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AppAddedToHiveStore { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAppAddedToHiveStore(data.bcs.type)) { throw new Error(`object at is not a AppAddedToHiveStore object`); }

 return AppAddedToHiveStore.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AppAddedToHiveStore.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AppAddedToHiveStore> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AppAddedToHiveStore object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAppAddedToHiveStore(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AppAddedToHiveStore object`); }

 return AppAddedToHiveStore.fromSuiObjectData( res.data ); }

 }

/* ============================== AppInstalledByProfile =============================== */

export function isAppInstalledByProfile(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::AppInstalledByProfile`; }

export interface AppInstalledByProfileFields { profileAddr: ToField<"address">; username: ToField<String>; appName: ToField<String>; appId: ToField<"address"> }

export type AppInstalledByProfileReified = Reified< AppInstalledByProfile, AppInstalledByProfileFields >;

export class AppInstalledByProfile implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::AppInstalledByProfile`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AppInstalledByProfile.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::AppInstalledByProfile`; readonly $typeArgs: []; readonly $isPhantom = AppInstalledByProfile.$isPhantom;

 readonly profileAddr: ToField<"address">; readonly username: ToField<String>; readonly appName: ToField<String>; readonly appId: ToField<"address">

 private constructor(typeArgs: [], fields: AppInstalledByProfileFields, ) { this.$fullTypeName = composeSuiType( AppInstalledByProfile.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::AppInstalledByProfile`; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.appName = fields.appName;; this.appId = fields.appId; }

 static reified( ): AppInstalledByProfileReified { return { typeName: AppInstalledByProfile.$typeName, fullTypeName: composeSuiType( AppInstalledByProfile.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::AppInstalledByProfile`, typeArgs: [ ] as [], isPhantom: AppInstalledByProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AppInstalledByProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AppInstalledByProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AppInstalledByProfile.fromBcs( data, ), bcs: AppInstalledByProfile.bcs, fromJSONField: (field: any) => AppInstalledByProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AppInstalledByProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AppInstalledByProfile.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AppInstalledByProfile.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AppInstalledByProfile.fetch( client, id, ), new: ( fields: AppInstalledByProfileFields, ) => { return new AppInstalledByProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AppInstalledByProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AppInstalledByProfile>> { return phantom(AppInstalledByProfile.reified( )); } static get p() { return AppInstalledByProfile.phantom() }

 static get bcs() { return bcs.struct("AppInstalledByProfile", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, app_name: String.bcs, app_id: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): AppInstalledByProfile { return AppInstalledByProfile.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String.reified(), fields.username), appName: decodeFromFields(String.reified(), fields.app_name), appId: decodeFromFields("address", fields.app_id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AppInstalledByProfile { if (!isAppInstalledByProfile(item.type)) { throw new Error("not a AppInstalledByProfile type");

 }

 return AppInstalledByProfile.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), appName: decodeFromFieldsWithTypes(String.reified(), item.fields.app_name), appId: decodeFromFieldsWithTypes("address", item.fields.app_id) } ) }

 static fromBcs( data: Uint8Array ): AppInstalledByProfile { return AppInstalledByProfile.fromFields( AppInstalledByProfile.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,username: this.username,appName: this.appName,appId: this.appId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AppInstalledByProfile { return AppInstalledByProfile.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String.reified(), field.username), appName: decodeFromJSONField(String.reified(), field.appName), appId: decodeFromJSONField("address", field.appId) } ) }

 static fromJSON( json: Record<string, any> ): AppInstalledByProfile { if (json.$typeName !== AppInstalledByProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AppInstalledByProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AppInstalledByProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAppInstalledByProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AppInstalledByProfile object`); } return AppInstalledByProfile.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AppInstalledByProfile { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAppInstalledByProfile(data.bcs.type)) { throw new Error(`object at is not a AppInstalledByProfile object`); }

 return AppInstalledByProfile.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AppInstalledByProfile.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AppInstalledByProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AppInstalledByProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAppInstalledByProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AppInstalledByProfile object`); }

 return AppInstalledByProfile.fromSuiObjectData( res.data ); }

 }

/* ============================== AppRemovedByProfile =============================== */

export function isAppRemovedByProfile(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::AppRemovedByProfile`; }

export interface AppRemovedByProfileFields { profileAddr: ToField<"address">; username: ToField<String>; appName: ToField<String> }

export type AppRemovedByProfileReified = Reified< AppRemovedByProfile, AppRemovedByProfileFields >;

export class AppRemovedByProfile implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::AppRemovedByProfile`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AppRemovedByProfile.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::AppRemovedByProfile`; readonly $typeArgs: []; readonly $isPhantom = AppRemovedByProfile.$isPhantom;

 readonly profileAddr: ToField<"address">; readonly username: ToField<String>; readonly appName: ToField<String>

 private constructor(typeArgs: [], fields: AppRemovedByProfileFields, ) { this.$fullTypeName = composeSuiType( AppRemovedByProfile.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::AppRemovedByProfile`; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.appName = fields.appName; }

 static reified( ): AppRemovedByProfileReified { return { typeName: AppRemovedByProfile.$typeName, fullTypeName: composeSuiType( AppRemovedByProfile.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::AppRemovedByProfile`, typeArgs: [ ] as [], isPhantom: AppRemovedByProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AppRemovedByProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AppRemovedByProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AppRemovedByProfile.fromBcs( data, ), bcs: AppRemovedByProfile.bcs, fromJSONField: (field: any) => AppRemovedByProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AppRemovedByProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AppRemovedByProfile.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AppRemovedByProfile.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AppRemovedByProfile.fetch( client, id, ), new: ( fields: AppRemovedByProfileFields, ) => { return new AppRemovedByProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AppRemovedByProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AppRemovedByProfile>> { return phantom(AppRemovedByProfile.reified( )); } static get p() { return AppRemovedByProfile.phantom() }

 static get bcs() { return bcs.struct("AppRemovedByProfile", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, app_name: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): AppRemovedByProfile { return AppRemovedByProfile.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String.reified(), fields.username), appName: decodeFromFields(String.reified(), fields.app_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AppRemovedByProfile { if (!isAppRemovedByProfile(item.type)) { throw new Error("not a AppRemovedByProfile type");

 }

 return AppRemovedByProfile.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), appName: decodeFromFieldsWithTypes(String.reified(), item.fields.app_name) } ) }

 static fromBcs( data: Uint8Array ): AppRemovedByProfile { return AppRemovedByProfile.fromFields( AppRemovedByProfile.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,username: this.username,appName: this.appName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AppRemovedByProfile { return AppRemovedByProfile.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String.reified(), field.username), appName: decodeFromJSONField(String.reified(), field.appName) } ) }

 static fromJSON( json: Record<string, any> ): AppRemovedByProfile { if (json.$typeName !== AppRemovedByProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AppRemovedByProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AppRemovedByProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAppRemovedByProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AppRemovedByProfile object`); } return AppRemovedByProfile.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AppRemovedByProfile { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAppRemovedByProfile(data.bcs.type)) { throw new Error(`object at is not a AppRemovedByProfile object`); }

 return AppRemovedByProfile.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AppRemovedByProfile.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AppRemovedByProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AppRemovedByProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAppRemovedByProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AppRemovedByProfile object`); }

 return AppRemovedByProfile.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeAddedToFriendsList =============================== */

export function isBeeAddedToFriendsList(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeAddedToFriendsList`; }

export interface BeeAddedToFriendsListFields { queenVersion: ToField<"u64">; friendlyBee: ToField<"u64">; newPrice: ToField<"u64"> }

export type BeeAddedToFriendsListReified = Reified< BeeAddedToFriendsList, BeeAddedToFriendsListFields >;

export class BeeAddedToFriendsList implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeAddedToFriendsList`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeAddedToFriendsList.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeAddedToFriendsList`; readonly $typeArgs: []; readonly $isPhantom = BeeAddedToFriendsList.$isPhantom;

 readonly queenVersion: ToField<"u64">; readonly friendlyBee: ToField<"u64">; readonly newPrice: ToField<"u64">

 private constructor(typeArgs: [], fields: BeeAddedToFriendsListFields, ) { this.$fullTypeName = composeSuiType( BeeAddedToFriendsList.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeAddedToFriendsList`; this.$typeArgs = typeArgs;

 this.queenVersion = fields.queenVersion;; this.friendlyBee = fields.friendlyBee;; this.newPrice = fields.newPrice; }

 static reified( ): BeeAddedToFriendsListReified { return { typeName: BeeAddedToFriendsList.$typeName, fullTypeName: composeSuiType( BeeAddedToFriendsList.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeAddedToFriendsList`, typeArgs: [ ] as [], isPhantom: BeeAddedToFriendsList.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeAddedToFriendsList.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeAddedToFriendsList.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeAddedToFriendsList.fromBcs( data, ), bcs: BeeAddedToFriendsList.bcs, fromJSONField: (field: any) => BeeAddedToFriendsList.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeAddedToFriendsList.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeAddedToFriendsList.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeAddedToFriendsList.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeAddedToFriendsList.fetch( client, id, ), new: ( fields: BeeAddedToFriendsListFields, ) => { return new BeeAddedToFriendsList( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeAddedToFriendsList.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeAddedToFriendsList>> { return phantom(BeeAddedToFriendsList.reified( )); } static get p() { return BeeAddedToFriendsList.phantom() }

 static get bcs() { return bcs.struct("BeeAddedToFriendsList", {

 queen_version: bcs.u64(), friendly_bee: bcs.u64(), new_price: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BeeAddedToFriendsList { return BeeAddedToFriendsList.reified( ).new( { queenVersion: decodeFromFields("u64", fields.queen_version), friendlyBee: decodeFromFields("u64", fields.friendly_bee), newPrice: decodeFromFields("u64", fields.new_price) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeAddedToFriendsList { if (!isBeeAddedToFriendsList(item.type)) { throw new Error("not a BeeAddedToFriendsList type");

 }

 return BeeAddedToFriendsList.reified( ).new( { queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), friendlyBee: decodeFromFieldsWithTypes("u64", item.fields.friendly_bee), newPrice: decodeFromFieldsWithTypes("u64", item.fields.new_price) } ) }

 static fromBcs( data: Uint8Array ): BeeAddedToFriendsList { return BeeAddedToFriendsList.fromFields( BeeAddedToFriendsList.bcs.parse(data) ) }

 toJSONField() { return {

 queenVersion: this.queenVersion.toString(),friendlyBee: this.friendlyBee.toString(),newPrice: this.newPrice.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeAddedToFriendsList { return BeeAddedToFriendsList.reified( ).new( { queenVersion: decodeFromJSONField("u64", field.queenVersion), friendlyBee: decodeFromJSONField("u64", field.friendlyBee), newPrice: decodeFromJSONField("u64", field.newPrice) } ) }

 static fromJSON( json: Record<string, any> ): BeeAddedToFriendsList { if (json.$typeName !== BeeAddedToFriendsList.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeAddedToFriendsList.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeAddedToFriendsList { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeAddedToFriendsList(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeAddedToFriendsList object`); } return BeeAddedToFriendsList.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeAddedToFriendsList { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeAddedToFriendsList(data.bcs.type)) { throw new Error(`object at is not a BeeAddedToFriendsList object`); }

 return BeeAddedToFriendsList.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeAddedToFriendsList.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeAddedToFriendsList> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeAddedToFriendsList object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeAddedToFriendsList(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeAddedToFriendsList object`); }

 return BeeAddedToFriendsList.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeAttack =============================== */

export function isBeeAttack(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeAttack`; }

export interface BeeAttackFields { attackerVersion: ToField<"u64">; capabilitySlot: ToField<"u8">; defenderVersion: ToField<"u64">; attackerEnergy: ToField<"u64">; defenderHealth: ToField<"u64">; healthImpact: ToField<"u64">; energyCost: ToField<"u64"> }

export type BeeAttackReified = Reified< BeeAttack, BeeAttackFields >;

export class BeeAttack implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeAttack`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeAttack.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeAttack`; readonly $typeArgs: []; readonly $isPhantom = BeeAttack.$isPhantom;

 readonly attackerVersion: ToField<"u64">; readonly capabilitySlot: ToField<"u8">; readonly defenderVersion: ToField<"u64">; readonly attackerEnergy: ToField<"u64">; readonly defenderHealth: ToField<"u64">; readonly healthImpact: ToField<"u64">; readonly energyCost: ToField<"u64">

 private constructor(typeArgs: [], fields: BeeAttackFields, ) { this.$fullTypeName = composeSuiType( BeeAttack.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeAttack`; this.$typeArgs = typeArgs;

 this.attackerVersion = fields.attackerVersion;; this.capabilitySlot = fields.capabilitySlot;; this.defenderVersion = fields.defenderVersion;; this.attackerEnergy = fields.attackerEnergy;; this.defenderHealth = fields.defenderHealth;; this.healthImpact = fields.healthImpact;; this.energyCost = fields.energyCost; }

 static reified( ): BeeAttackReified { return { typeName: BeeAttack.$typeName, fullTypeName: composeSuiType( BeeAttack.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeAttack`, typeArgs: [ ] as [], isPhantom: BeeAttack.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeAttack.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeAttack.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeAttack.fromBcs( data, ), bcs: BeeAttack.bcs, fromJSONField: (field: any) => BeeAttack.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeAttack.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeAttack.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeAttack.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeAttack.fetch( client, id, ), new: ( fields: BeeAttackFields, ) => { return new BeeAttack( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeAttack.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeAttack>> { return phantom(BeeAttack.reified( )); } static get p() { return BeeAttack.phantom() }

 static get bcs() { return bcs.struct("BeeAttack", {

 attacker_version: bcs.u64(), capability_slot: bcs.u8(), defender_version: bcs.u64(), attacker_energy: bcs.u64(), defender_health: bcs.u64(), health_impact: bcs.u64(), energy_cost: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BeeAttack { return BeeAttack.reified( ).new( { attackerVersion: decodeFromFields("u64", fields.attacker_version), capabilitySlot: decodeFromFields("u8", fields.capability_slot), defenderVersion: decodeFromFields("u64", fields.defender_version), attackerEnergy: decodeFromFields("u64", fields.attacker_energy), defenderHealth: decodeFromFields("u64", fields.defender_health), healthImpact: decodeFromFields("u64", fields.health_impact), energyCost: decodeFromFields("u64", fields.energy_cost) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeAttack { if (!isBeeAttack(item.type)) { throw new Error("not a BeeAttack type");

 }

 return BeeAttack.reified( ).new( { attackerVersion: decodeFromFieldsWithTypes("u64", item.fields.attacker_version), capabilitySlot: decodeFromFieldsWithTypes("u8", item.fields.capability_slot), defenderVersion: decodeFromFieldsWithTypes("u64", item.fields.defender_version), attackerEnergy: decodeFromFieldsWithTypes("u64", item.fields.attacker_energy), defenderHealth: decodeFromFieldsWithTypes("u64", item.fields.defender_health), healthImpact: decodeFromFieldsWithTypes("u64", item.fields.health_impact), energyCost: decodeFromFieldsWithTypes("u64", item.fields.energy_cost) } ) }

 static fromBcs( data: Uint8Array ): BeeAttack { return BeeAttack.fromFields( BeeAttack.bcs.parse(data) ) }

 toJSONField() { return {

 attackerVersion: this.attackerVersion.toString(),capabilitySlot: this.capabilitySlot,defenderVersion: this.defenderVersion.toString(),attackerEnergy: this.attackerEnergy.toString(),defenderHealth: this.defenderHealth.toString(),healthImpact: this.healthImpact.toString(),energyCost: this.energyCost.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeAttack { return BeeAttack.reified( ).new( { attackerVersion: decodeFromJSONField("u64", field.attackerVersion), capabilitySlot: decodeFromJSONField("u8", field.capabilitySlot), defenderVersion: decodeFromJSONField("u64", field.defenderVersion), attackerEnergy: decodeFromJSONField("u64", field.attackerEnergy), defenderHealth: decodeFromJSONField("u64", field.defenderHealth), healthImpact: decodeFromJSONField("u64", field.healthImpact), energyCost: decodeFromJSONField("u64", field.energyCost) } ) }

 static fromJSON( json: Record<string, any> ): BeeAttack { if (json.$typeName !== BeeAttack.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeAttack.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeAttack { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeAttack(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeAttack object`); } return BeeAttack.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeAttack { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeAttack(data.bcs.type)) { throw new Error(`object at is not a BeeAttack object`); }

 return BeeAttack.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeAttack.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeAttack> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeAttack object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeAttack(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeAttack object`); }

 return BeeAttack.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeCapabilityUpdated =============================== */

export function isBeeCapabilityUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeCapabilityUpdated`; }

export interface BeeCapabilityUpdatedFields { spot: ToField<"u64">; capType: ToField<"u8">; healthImpactPct: ToField<"u64">; energyCostPct: ToField<"u64">; attempts: ToField<"u64">; cooldown: ToField<"u64">; baseAttempts: ToField<"u64"> }

export type BeeCapabilityUpdatedReified = Reified< BeeCapabilityUpdated, BeeCapabilityUpdatedFields >;

export class BeeCapabilityUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeCapabilityUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeCapabilityUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeCapabilityUpdated`; readonly $typeArgs: []; readonly $isPhantom = BeeCapabilityUpdated.$isPhantom;

 readonly spot: ToField<"u64">; readonly capType: ToField<"u8">; readonly healthImpactPct: ToField<"u64">; readonly energyCostPct: ToField<"u64">; readonly attempts: ToField<"u64">; readonly cooldown: ToField<"u64">; readonly baseAttempts: ToField<"u64">

 private constructor(typeArgs: [], fields: BeeCapabilityUpdatedFields, ) { this.$fullTypeName = composeSuiType( BeeCapabilityUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeCapabilityUpdated`; this.$typeArgs = typeArgs;

 this.spot = fields.spot;; this.capType = fields.capType;; this.healthImpactPct = fields.healthImpactPct;; this.energyCostPct = fields.energyCostPct;; this.attempts = fields.attempts;; this.cooldown = fields.cooldown;; this.baseAttempts = fields.baseAttempts; }

 static reified( ): BeeCapabilityUpdatedReified { return { typeName: BeeCapabilityUpdated.$typeName, fullTypeName: composeSuiType( BeeCapabilityUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeCapabilityUpdated`, typeArgs: [ ] as [], isPhantom: BeeCapabilityUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeCapabilityUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeCapabilityUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeCapabilityUpdated.fromBcs( data, ), bcs: BeeCapabilityUpdated.bcs, fromJSONField: (field: any) => BeeCapabilityUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeCapabilityUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeCapabilityUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeCapabilityUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeCapabilityUpdated.fetch( client, id, ), new: ( fields: BeeCapabilityUpdatedFields, ) => { return new BeeCapabilityUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeCapabilityUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeCapabilityUpdated>> { return phantom(BeeCapabilityUpdated.reified( )); } static get p() { return BeeCapabilityUpdated.phantom() }

 static get bcs() { return bcs.struct("BeeCapabilityUpdated", {

 spot: bcs.u64(), cap_type: bcs.u8(), health_impact_pct: bcs.u64(), energy_cost_pct: bcs.u64(), attempts: bcs.u64(), cooldown: bcs.u64(), base_attempts: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BeeCapabilityUpdated { return BeeCapabilityUpdated.reified( ).new( { spot: decodeFromFields("u64", fields.spot), capType: decodeFromFields("u8", fields.cap_type), healthImpactPct: decodeFromFields("u64", fields.health_impact_pct), energyCostPct: decodeFromFields("u64", fields.energy_cost_pct), attempts: decodeFromFields("u64", fields.attempts), cooldown: decodeFromFields("u64", fields.cooldown), baseAttempts: decodeFromFields("u64", fields.base_attempts) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeCapabilityUpdated { if (!isBeeCapabilityUpdated(item.type)) { throw new Error("not a BeeCapabilityUpdated type");

 }

 return BeeCapabilityUpdated.reified( ).new( { spot: decodeFromFieldsWithTypes("u64", item.fields.spot), capType: decodeFromFieldsWithTypes("u8", item.fields.cap_type), healthImpactPct: decodeFromFieldsWithTypes("u64", item.fields.health_impact_pct), energyCostPct: decodeFromFieldsWithTypes("u64", item.fields.energy_cost_pct), attempts: decodeFromFieldsWithTypes("u64", item.fields.attempts), cooldown: decodeFromFieldsWithTypes("u64", item.fields.cooldown), baseAttempts: decodeFromFieldsWithTypes("u64", item.fields.base_attempts) } ) }

 static fromBcs( data: Uint8Array ): BeeCapabilityUpdated { return BeeCapabilityUpdated.fromFields( BeeCapabilityUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 spot: this.spot.toString(),capType: this.capType,healthImpactPct: this.healthImpactPct.toString(),energyCostPct: this.energyCostPct.toString(),attempts: this.attempts.toString(),cooldown: this.cooldown.toString(),baseAttempts: this.baseAttempts.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeCapabilityUpdated { return BeeCapabilityUpdated.reified( ).new( { spot: decodeFromJSONField("u64", field.spot), capType: decodeFromJSONField("u8", field.capType), healthImpactPct: decodeFromJSONField("u64", field.healthImpactPct), energyCostPct: decodeFromJSONField("u64", field.energyCostPct), attempts: decodeFromJSONField("u64", field.attempts), cooldown: decodeFromJSONField("u64", field.cooldown), baseAttempts: decodeFromJSONField("u64", field.baseAttempts) } ) }

 static fromJSON( json: Record<string, any> ): BeeCapabilityUpdated { if (json.$typeName !== BeeCapabilityUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeCapabilityUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeCapabilityUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeCapabilityUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeCapabilityUpdated object`); } return BeeCapabilityUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeCapabilityUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeCapabilityUpdated(data.bcs.type)) { throw new Error(`object at is not a BeeCapabilityUpdated object`); }

 return BeeCapabilityUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeCapabilityUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeCapabilityUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeCapabilityUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeCapabilityUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeCapabilityUpdated object`); }

 return BeeCapabilityUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeDeletedFromHiddenWorld =============================== */

export function isBeeDeletedFromHiddenWorld(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeDeletedFromHiddenWorld`; }

export interface BeeDeletedFromHiddenWorldFields { deletedAt: ToField<"u64">; version: ToField<"u64">; genes: ToField<"u256"> }

export type BeeDeletedFromHiddenWorldReified = Reified< BeeDeletedFromHiddenWorld, BeeDeletedFromHiddenWorldFields >;

export class BeeDeletedFromHiddenWorld implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeDeletedFromHiddenWorld`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeDeletedFromHiddenWorld.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeDeletedFromHiddenWorld`; readonly $typeArgs: []; readonly $isPhantom = BeeDeletedFromHiddenWorld.$isPhantom;

 readonly deletedAt: ToField<"u64">; readonly version: ToField<"u64">; readonly genes: ToField<"u256">

 private constructor(typeArgs: [], fields: BeeDeletedFromHiddenWorldFields, ) { this.$fullTypeName = composeSuiType( BeeDeletedFromHiddenWorld.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeDeletedFromHiddenWorld`; this.$typeArgs = typeArgs;

 this.deletedAt = fields.deletedAt;; this.version = fields.version;; this.genes = fields.genes; }

 static reified( ): BeeDeletedFromHiddenWorldReified { return { typeName: BeeDeletedFromHiddenWorld.$typeName, fullTypeName: composeSuiType( BeeDeletedFromHiddenWorld.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeDeletedFromHiddenWorld`, typeArgs: [ ] as [], isPhantom: BeeDeletedFromHiddenWorld.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeDeletedFromHiddenWorld.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeDeletedFromHiddenWorld.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeDeletedFromHiddenWorld.fromBcs( data, ), bcs: BeeDeletedFromHiddenWorld.bcs, fromJSONField: (field: any) => BeeDeletedFromHiddenWorld.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeDeletedFromHiddenWorld.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeDeletedFromHiddenWorld.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeDeletedFromHiddenWorld.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeDeletedFromHiddenWorld.fetch( client, id, ), new: ( fields: BeeDeletedFromHiddenWorldFields, ) => { return new BeeDeletedFromHiddenWorld( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeDeletedFromHiddenWorld.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeDeletedFromHiddenWorld>> { return phantom(BeeDeletedFromHiddenWorld.reified( )); } static get p() { return BeeDeletedFromHiddenWorld.phantom() }

 static get bcs() { return bcs.struct("BeeDeletedFromHiddenWorld", {

 deleted_at: bcs.u64(), version: bcs.u64(), genes: bcs.u256()

}) };

 static fromFields( fields: Record<string, any> ): BeeDeletedFromHiddenWorld { return BeeDeletedFromHiddenWorld.reified( ).new( { deletedAt: decodeFromFields("u64", fields.deleted_at), version: decodeFromFields("u64", fields.version), genes: decodeFromFields("u256", fields.genes) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeDeletedFromHiddenWorld { if (!isBeeDeletedFromHiddenWorld(item.type)) { throw new Error("not a BeeDeletedFromHiddenWorld type");

 }

 return BeeDeletedFromHiddenWorld.reified( ).new( { deletedAt: decodeFromFieldsWithTypes("u64", item.fields.deleted_at), version: decodeFromFieldsWithTypes("u64", item.fields.version), genes: decodeFromFieldsWithTypes("u256", item.fields.genes) } ) }

 static fromBcs( data: Uint8Array ): BeeDeletedFromHiddenWorld { return BeeDeletedFromHiddenWorld.fromFields( BeeDeletedFromHiddenWorld.bcs.parse(data) ) }

 toJSONField() { return {

 deletedAt: this.deletedAt.toString(),version: this.version.toString(),genes: this.genes.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeDeletedFromHiddenWorld { return BeeDeletedFromHiddenWorld.reified( ).new( { deletedAt: decodeFromJSONField("u64", field.deletedAt), version: decodeFromJSONField("u64", field.version), genes: decodeFromJSONField("u256", field.genes) } ) }

 static fromJSON( json: Record<string, any> ): BeeDeletedFromHiddenWorld { if (json.$typeName !== BeeDeletedFromHiddenWorld.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeDeletedFromHiddenWorld.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeDeletedFromHiddenWorld { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeDeletedFromHiddenWorld(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeDeletedFromHiddenWorld object`); } return BeeDeletedFromHiddenWorld.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeDeletedFromHiddenWorld { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeDeletedFromHiddenWorld(data.bcs.type)) { throw new Error(`object at is not a BeeDeletedFromHiddenWorld object`); }

 return BeeDeletedFromHiddenWorld.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeDeletedFromHiddenWorld.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeDeletedFromHiddenWorld> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeDeletedFromHiddenWorld object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeDeletedFromHiddenWorld(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeDeletedFromHiddenWorld object`); }

 return BeeDeletedFromHiddenWorld.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeEgg =============================== */

export function isBeeEgg(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeEgg`; }

export interface BeeEggFields { timestamp: ToField<"u64">; eggIndex: ToField<"u64">; stingerBeeId: ToField<"address">; stingerBeeVersion: ToField<"u64">; stingerGene: ToField<"u256">; dragonBeeEgg: ToField<MysticalBee>; isProcessed: ToField<"bool"> }

export type BeeEggReified = Reified< BeeEgg, BeeEggFields >;

export class BeeEgg implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeEgg`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeEgg.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeEgg`; readonly $typeArgs: []; readonly $isPhantom = BeeEgg.$isPhantom;

 readonly timestamp: ToField<"u64">; readonly eggIndex: ToField<"u64">; readonly stingerBeeId: ToField<"address">; readonly stingerBeeVersion: ToField<"u64">; readonly stingerGene: ToField<"u256">; readonly dragonBeeEgg: ToField<MysticalBee>; readonly isProcessed: ToField<"bool">

 private constructor(typeArgs: [], fields: BeeEggFields, ) { this.$fullTypeName = composeSuiType( BeeEgg.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeEgg`; this.$typeArgs = typeArgs;

 this.timestamp = fields.timestamp;; this.eggIndex = fields.eggIndex;; this.stingerBeeId = fields.stingerBeeId;; this.stingerBeeVersion = fields.stingerBeeVersion;; this.stingerGene = fields.stingerGene;; this.dragonBeeEgg = fields.dragonBeeEgg;; this.isProcessed = fields.isProcessed; }

 static reified( ): BeeEggReified { return { typeName: BeeEgg.$typeName, fullTypeName: composeSuiType( BeeEgg.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeEgg`, typeArgs: [ ] as [], isPhantom: BeeEgg.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeEgg.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeEgg.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeEgg.fromBcs( data, ), bcs: BeeEgg.bcs, fromJSONField: (field: any) => BeeEgg.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeEgg.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeEgg.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeEgg.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeEgg.fetch( client, id, ), new: ( fields: BeeEggFields, ) => { return new BeeEgg( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeEgg.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeEgg>> { return phantom(BeeEgg.reified( )); } static get p() { return BeeEgg.phantom() }

 static get bcs() { return bcs.struct("BeeEgg", {

 timestamp: bcs.u64(), egg_index: bcs.u64(), stingerBeeId: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), stingerBeeVersion: bcs.u64(), stinger_gene: bcs.u256(), dragon_bee_egg: MysticalBee.bcs, is_processed: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): BeeEgg { return BeeEgg.reified( ).new( { timestamp: decodeFromFields("u64", fields.timestamp), eggIndex: decodeFromFields("u64", fields.egg_index), stingerBeeId: decodeFromFields("address", fields.stingerBeeId), stingerBeeVersion: decodeFromFields("u64", fields.stingerBeeVersion), stingerGene: decodeFromFields("u256", fields.stinger_gene), dragonBeeEgg: decodeFromFields(MysticalBee.reified(), fields.dragon_bee_egg), isProcessed: decodeFromFields("bool", fields.is_processed) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeEgg { if (!isBeeEgg(item.type)) { throw new Error("not a BeeEgg type");

 }

 return BeeEgg.reified( ).new( { timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp), eggIndex: decodeFromFieldsWithTypes("u64", item.fields.egg_index), stingerBeeId: decodeFromFieldsWithTypes("address", item.fields.stingerBeeId), stingerBeeVersion: decodeFromFieldsWithTypes("u64", item.fields.stingerBeeVersion), stingerGene: decodeFromFieldsWithTypes("u256", item.fields.stinger_gene), dragonBeeEgg: decodeFromFieldsWithTypes(MysticalBee.reified(), item.fields.dragon_bee_egg), isProcessed: decodeFromFieldsWithTypes("bool", item.fields.is_processed) } ) }

 static fromBcs( data: Uint8Array ): BeeEgg { return BeeEgg.fromFields( BeeEgg.bcs.parse(data) ) }

 toJSONField() { return {

 timestamp: this.timestamp.toString(),eggIndex: this.eggIndex.toString(),stingerBeeId: this.stingerBeeId,stingerBeeVersion: this.stingerBeeVersion.toString(),stingerGene: this.stingerGene.toString(),dragonBeeEgg: this.dragonBeeEgg.toJSONField(),isProcessed: this.isProcessed,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeEgg { return BeeEgg.reified( ).new( { timestamp: decodeFromJSONField("u64", field.timestamp), eggIndex: decodeFromJSONField("u64", field.eggIndex), stingerBeeId: decodeFromJSONField("address", field.stingerBeeId), stingerBeeVersion: decodeFromJSONField("u64", field.stingerBeeVersion), stingerGene: decodeFromJSONField("u256", field.stingerGene), dragonBeeEgg: decodeFromJSONField(MysticalBee.reified(), field.dragonBeeEgg), isProcessed: decodeFromJSONField("bool", field.isProcessed) } ) }

 static fromJSON( json: Record<string, any> ): BeeEgg { if (json.$typeName !== BeeEgg.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeEgg.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeEgg { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeEgg(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeEgg object`); } return BeeEgg.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeEgg { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeEgg(data.bcs.type)) { throw new Error(`object at is not a BeeEgg object`); }

 return BeeEgg.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeEgg.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeEgg> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeEgg object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeEgg(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeEgg object`); }

 return BeeEgg.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeEggRecord =============================== */

export function isBeeEggRecord(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeEggRecord`; }

export interface BeeEggRecordFields { queenBeeId: ToField<"address">; queenVersion: ToField<"u64">; childGene: ToField<"u256">; childGeneration: ToField<"u64">; childVersion: ToField<"u64"> }

export type BeeEggRecordReified = Reified< BeeEggRecord, BeeEggRecordFields >;

export class BeeEggRecord implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeEggRecord`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeEggRecord.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeEggRecord`; readonly $typeArgs: []; readonly $isPhantom = BeeEggRecord.$isPhantom;

 readonly queenBeeId: ToField<"address">; readonly queenVersion: ToField<"u64">; readonly childGene: ToField<"u256">; readonly childGeneration: ToField<"u64">; readonly childVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: BeeEggRecordFields, ) { this.$fullTypeName = composeSuiType( BeeEggRecord.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeEggRecord`; this.$typeArgs = typeArgs;

 this.queenBeeId = fields.queenBeeId;; this.queenVersion = fields.queenVersion;; this.childGene = fields.childGene;; this.childGeneration = fields.childGeneration;; this.childVersion = fields.childVersion; }

 static reified( ): BeeEggRecordReified { return { typeName: BeeEggRecord.$typeName, fullTypeName: composeSuiType( BeeEggRecord.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeEggRecord`, typeArgs: [ ] as [], isPhantom: BeeEggRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeEggRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeEggRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeEggRecord.fromBcs( data, ), bcs: BeeEggRecord.bcs, fromJSONField: (field: any) => BeeEggRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeEggRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeEggRecord.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeEggRecord.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeEggRecord.fetch( client, id, ), new: ( fields: BeeEggRecordFields, ) => { return new BeeEggRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeEggRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeEggRecord>> { return phantom(BeeEggRecord.reified( )); } static get p() { return BeeEggRecord.phantom() }

 static get bcs() { return bcs.struct("BeeEggRecord", {

 queenBeeId: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), queen_version: bcs.u64(), child_gene: bcs.u256(), child_generation: bcs.u64(), child_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BeeEggRecord { return BeeEggRecord.reified( ).new( { queenBeeId: decodeFromFields("address", fields.queenBeeId), queenVersion: decodeFromFields("u64", fields.queen_version), childGene: decodeFromFields("u256", fields.child_gene), childGeneration: decodeFromFields("u64", fields.child_generation), childVersion: decodeFromFields("u64", fields.child_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeEggRecord { if (!isBeeEggRecord(item.type)) { throw new Error("not a BeeEggRecord type");

 }

 return BeeEggRecord.reified( ).new( { queenBeeId: decodeFromFieldsWithTypes("address", item.fields.queenBeeId), queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), childGene: decodeFromFieldsWithTypes("u256", item.fields.child_gene), childGeneration: decodeFromFieldsWithTypes("u64", item.fields.child_generation), childVersion: decodeFromFieldsWithTypes("u64", item.fields.child_version) } ) }

 static fromBcs( data: Uint8Array ): BeeEggRecord { return BeeEggRecord.fromFields( BeeEggRecord.bcs.parse(data) ) }

 toJSONField() { return {

 queenBeeId: this.queenBeeId,queenVersion: this.queenVersion.toString(),childGene: this.childGene.toString(),childGeneration: this.childGeneration.toString(),childVersion: this.childVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeEggRecord { return BeeEggRecord.reified( ).new( { queenBeeId: decodeFromJSONField("address", field.queenBeeId), queenVersion: decodeFromJSONField("u64", field.queenVersion), childGene: decodeFromJSONField("u256", field.childGene), childGeneration: decodeFromJSONField("u64", field.childGeneration), childVersion: decodeFromJSONField("u64", field.childVersion) } ) }

 static fromJSON( json: Record<string, any> ): BeeEggRecord { if (json.$typeName !== BeeEggRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeEggRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeEggRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeEggRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeEggRecord object`); } return BeeEggRecord.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeEggRecord { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeEggRecord(data.bcs.type)) { throw new Error(`object at is not a BeeEggRecord object`); }

 return BeeEggRecord.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeEggRecord.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeEggRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeEggRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeEggRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeEggRecord object`); }

 return BeeEggRecord.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeFarmedYield =============================== */

export function isBeeFarmedYield(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeFarmedYield`; }

export interface BeeFarmedYieldFields { beeId: ToField<"address">; version: ToField<"u64">; claimedHiveAmt: ToField<"u64">; claimedHoneyAmt: ToField<"u64">; honeylocked: ToField<"u64">; totalHoneyLocked: ToField<"u64">; hiveEnergy: ToField<"u64">; honeyHealth: ToField<"u64">; totalWeightedHoney: ToField<"u128"> }

export type BeeFarmedYieldReified = Reified< BeeFarmedYield, BeeFarmedYieldFields >;

export class BeeFarmedYield implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeFarmedYield`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeFarmedYield.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeFarmedYield`; readonly $typeArgs: []; readonly $isPhantom = BeeFarmedYield.$isPhantom;

 readonly beeId: ToField<"address">; readonly version: ToField<"u64">; readonly claimedHiveAmt: ToField<"u64">; readonly claimedHoneyAmt: ToField<"u64">; readonly honeylocked: ToField<"u64">; readonly totalHoneyLocked: ToField<"u64">; readonly hiveEnergy: ToField<"u64">; readonly honeyHealth: ToField<"u64">; readonly totalWeightedHoney: ToField<"u128">

 private constructor(typeArgs: [], fields: BeeFarmedYieldFields, ) { this.$fullTypeName = composeSuiType( BeeFarmedYield.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeFarmedYield`; this.$typeArgs = typeArgs;

 this.beeId = fields.beeId;; this.version = fields.version;; this.claimedHiveAmt = fields.claimedHiveAmt;; this.claimedHoneyAmt = fields.claimedHoneyAmt;; this.honeylocked = fields.honeylocked;; this.totalHoneyLocked = fields.totalHoneyLocked;; this.hiveEnergy = fields.hiveEnergy;; this.honeyHealth = fields.honeyHealth;; this.totalWeightedHoney = fields.totalWeightedHoney; }

 static reified( ): BeeFarmedYieldReified { return { typeName: BeeFarmedYield.$typeName, fullTypeName: composeSuiType( BeeFarmedYield.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeFarmedYield`, typeArgs: [ ] as [], isPhantom: BeeFarmedYield.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeFarmedYield.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeFarmedYield.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeFarmedYield.fromBcs( data, ), bcs: BeeFarmedYield.bcs, fromJSONField: (field: any) => BeeFarmedYield.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeFarmedYield.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeFarmedYield.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeFarmedYield.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeFarmedYield.fetch( client, id, ), new: ( fields: BeeFarmedYieldFields, ) => { return new BeeFarmedYield( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeFarmedYield.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeFarmedYield>> { return phantom(BeeFarmedYield.reified( )); } static get p() { return BeeFarmedYield.phantom() }

 static get bcs() { return bcs.struct("BeeFarmedYield", {

 beeId: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), claimed_hive_amt: bcs.u64(), claimed_honey_amt: bcs.u64(), honeylocked: bcs.u64(), total_honey_locked: bcs.u64(), hive_energy: bcs.u64(), honey_health: bcs.u64(), total_weighted_honey: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): BeeFarmedYield { return BeeFarmedYield.reified( ).new( { beeId: decodeFromFields("address", fields.beeId), version: decodeFromFields("u64", fields.version), claimedHiveAmt: decodeFromFields("u64", fields.claimed_hive_amt), claimedHoneyAmt: decodeFromFields("u64", fields.claimed_honey_amt), honeylocked: decodeFromFields("u64", fields.honeylocked), totalHoneyLocked: decodeFromFields("u64", fields.total_honey_locked), hiveEnergy: decodeFromFields("u64", fields.hive_energy), honeyHealth: decodeFromFields("u64", fields.honey_health), totalWeightedHoney: decodeFromFields("u128", fields.total_weighted_honey) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeFarmedYield { if (!isBeeFarmedYield(item.type)) { throw new Error("not a BeeFarmedYield type");

 }

 return BeeFarmedYield.reified( ).new( { beeId: decodeFromFieldsWithTypes("address", item.fields.beeId), version: decodeFromFieldsWithTypes("u64", item.fields.version), claimedHiveAmt: decodeFromFieldsWithTypes("u64", item.fields.claimed_hive_amt), claimedHoneyAmt: decodeFromFieldsWithTypes("u64", item.fields.claimed_honey_amt), honeylocked: decodeFromFieldsWithTypes("u64", item.fields.honeylocked), totalHoneyLocked: decodeFromFieldsWithTypes("u64", item.fields.total_honey_locked), hiveEnergy: decodeFromFieldsWithTypes("u64", item.fields.hive_energy), honeyHealth: decodeFromFieldsWithTypes("u64", item.fields.honey_health), totalWeightedHoney: decodeFromFieldsWithTypes("u128", item.fields.total_weighted_honey) } ) }

 static fromBcs( data: Uint8Array ): BeeFarmedYield { return BeeFarmedYield.fromFields( BeeFarmedYield.bcs.parse(data) ) }

 toJSONField() { return {

 beeId: this.beeId,version: this.version.toString(),claimedHiveAmt: this.claimedHiveAmt.toString(),claimedHoneyAmt: this.claimedHoneyAmt.toString(),honeylocked: this.honeylocked.toString(),totalHoneyLocked: this.totalHoneyLocked.toString(),hiveEnergy: this.hiveEnergy.toString(),honeyHealth: this.honeyHealth.toString(),totalWeightedHoney: this.totalWeightedHoney.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeFarmedYield { return BeeFarmedYield.reified( ).new( { beeId: decodeFromJSONField("address", field.beeId), version: decodeFromJSONField("u64", field.version), claimedHiveAmt: decodeFromJSONField("u64", field.claimedHiveAmt), claimedHoneyAmt: decodeFromJSONField("u64", field.claimedHoneyAmt), honeylocked: decodeFromJSONField("u64", field.honeylocked), totalHoneyLocked: decodeFromJSONField("u64", field.totalHoneyLocked), hiveEnergy: decodeFromJSONField("u64", field.hiveEnergy), honeyHealth: decodeFromJSONField("u64", field.honeyHealth), totalWeightedHoney: decodeFromJSONField("u128", field.totalWeightedHoney) } ) }

 static fromJSON( json: Record<string, any> ): BeeFarmedYield { if (json.$typeName !== BeeFarmedYield.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeFarmedYield.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeFarmedYield { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeFarmedYield(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeFarmedYield object`); } return BeeFarmedYield.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeFarmedYield { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeFarmedYield(data.bcs.type)) { throw new Error(`object at is not a BeeFarmedYield object`); }

 return BeeFarmedYield.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeFarmedYield.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeFarmedYield> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeFarmedYield object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeFarmedYield(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeFarmedYield object`); }

 return BeeFarmedYield.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeHive =============================== */

export function isBeeHive(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeHive`; }

export interface BeeHiveFields { queenBeeId: ToField<"address">; queenType: ToField<"u64">; queenVersion: ToField<"u64">; queenBirthInfo: ToField<QueenFamilyInfo>; maxEggsLimit: ToField<"u64">; eggsIncubated: ToField<"u64">; auctionEpoch: ToField<"u64">; queenGene: ToField<"u256">; isActive: ToField<"bool">; basePrice: ToField<"u64">; curveA: ToField<"u64">; friendsList: ToField<LinkedTable<"u64", "u64">>; incubatingEggs: ToField<LinkedTable<"u64", ToPhantom<BeeEgg>>>; eggsHatchedList: ToField<LinkedTable<"u64", "address">>; suiCustody: ToField<Balance<ToPhantom<SUI>>> }

export type BeeHiveReified = Reified< BeeHive, BeeHiveFields >;

export class BeeHive implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeHive`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeHive.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeHive`; readonly $typeArgs: []; readonly $isPhantom = BeeHive.$isPhantom;

 readonly queenBeeId: ToField<"address">; readonly queenType: ToField<"u64">; readonly queenVersion: ToField<"u64">; readonly queenBirthInfo: ToField<QueenFamilyInfo>; readonly maxEggsLimit: ToField<"u64">; readonly eggsIncubated: ToField<"u64">; readonly auctionEpoch: ToField<"u64">; readonly queenGene: ToField<"u256">; readonly isActive: ToField<"bool">; readonly basePrice: ToField<"u64">; readonly curveA: ToField<"u64">; readonly friendsList: ToField<LinkedTable<"u64", "u64">>; readonly incubatingEggs: ToField<LinkedTable<"u64", ToPhantom<BeeEgg>>>; readonly eggsHatchedList: ToField<LinkedTable<"u64", "address">>; readonly suiCustody: ToField<Balance<ToPhantom<SUI>>>

 private constructor(typeArgs: [], fields: BeeHiveFields, ) { this.$fullTypeName = composeSuiType( BeeHive.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeHive`; this.$typeArgs = typeArgs;

 this.queenBeeId = fields.queenBeeId;; this.queenType = fields.queenType;; this.queenVersion = fields.queenVersion;; this.queenBirthInfo = fields.queenBirthInfo;; this.maxEggsLimit = fields.maxEggsLimit;; this.eggsIncubated = fields.eggsIncubated;; this.auctionEpoch = fields.auctionEpoch;; this.queenGene = fields.queenGene;; this.isActive = fields.isActive;; this.basePrice = fields.basePrice;; this.curveA = fields.curveA;; this.friendsList = fields.friendsList;; this.incubatingEggs = fields.incubatingEggs;; this.eggsHatchedList = fields.eggsHatchedList;; this.suiCustody = fields.suiCustody; }

 static reified( ): BeeHiveReified { return { typeName: BeeHive.$typeName, fullTypeName: composeSuiType( BeeHive.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeHive`, typeArgs: [ ] as [], isPhantom: BeeHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeHive.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeHive.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeHive.fromBcs( data, ), bcs: BeeHive.bcs, fromJSONField: (field: any) => BeeHive.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeHive.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeHive.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeHive.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeHive.fetch( client, id, ), new: ( fields: BeeHiveFields, ) => { return new BeeHive( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeHive.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeHive>> { return phantom(BeeHive.reified( )); } static get p() { return BeeHive.phantom() }

 static get bcs() { return bcs.struct("BeeHive", {

 queenBeeId: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), queen_type: bcs.u64(), queen_version: bcs.u64(), queenBirthInfo: QueenFamilyInfo.bcs, max_eggs_limit: bcs.u64(), eggs_incubated: bcs.u64(), auction_epoch: bcs.u64(), queen_gene: bcs.u256(), is_active: bcs.bool(), base_price: bcs.u64(), curve_a: bcs.u64(), friends_list: LinkedTable.bcs(bcs.u64()), incubating_eggs: LinkedTable.bcs(bcs.u64()), eggs_hatched_list: LinkedTable.bcs(bcs.u64()), sui_custody: Balance.bcs

}) };

 static fromFields( fields: Record<string, any> ): BeeHive { return BeeHive.reified( ).new( { queenBeeId: decodeFromFields("address", fields.queenBeeId), queenType: decodeFromFields("u64", fields.queen_type), queenVersion: decodeFromFields("u64", fields.queen_version), queenBirthInfo: decodeFromFields(QueenFamilyInfo.reified(), fields.queenBirthInfo), maxEggsLimit: decodeFromFields("u64", fields.max_eggs_limit), eggsIncubated: decodeFromFields("u64", fields.eggs_incubated), auctionEpoch: decodeFromFields("u64", fields.auction_epoch), queenGene: decodeFromFields("u256", fields.queen_gene), isActive: decodeFromFields("bool", fields.is_active), basePrice: decodeFromFields("u64", fields.base_price), curveA: decodeFromFields("u64", fields.curve_a), friendsList: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u64")), fields.friends_list), incubatingEggs: decodeFromFields(LinkedTable.reified("u64", reified.phantom(BeeEgg.reified())), fields.incubating_eggs), eggsHatchedList: decodeFromFields(LinkedTable.reified("u64", reified.phantom("address")), fields.eggs_hatched_list), suiCustody: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.sui_custody) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeHive { if (!isBeeHive(item.type)) { throw new Error("not a BeeHive type");

 }

 return BeeHive.reified( ).new( { queenBeeId: decodeFromFieldsWithTypes("address", item.fields.queenBeeId), queenType: decodeFromFieldsWithTypes("u64", item.fields.queen_type), queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), queenBirthInfo: decodeFromFieldsWithTypes(QueenFamilyInfo.reified(), item.fields.queenBirthInfo), maxEggsLimit: decodeFromFieldsWithTypes("u64", item.fields.max_eggs_limit), eggsIncubated: decodeFromFieldsWithTypes("u64", item.fields.eggs_incubated), auctionEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_epoch), queenGene: decodeFromFieldsWithTypes("u256", item.fields.queen_gene), isActive: decodeFromFieldsWithTypes("bool", item.fields.is_active), basePrice: decodeFromFieldsWithTypes("u64", item.fields.base_price), curveA: decodeFromFieldsWithTypes("u64", item.fields.curve_a), friendsList: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u64")), item.fields.friends_list), incubatingEggs: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(BeeEgg.reified())), item.fields.incubating_eggs), eggsHatchedList: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("address")), item.fields.eggs_hatched_list), suiCustody: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.sui_custody) } ) }

 static fromBcs( data: Uint8Array ): BeeHive { return BeeHive.fromFields( BeeHive.bcs.parse(data) ) }

 toJSONField() { return {

 queenBeeId: this.queenBeeId,queenType: this.queenType.toString(),queenVersion: this.queenVersion.toString(),queenBirthInfo: this.queenBirthInfo.toJSONField(),maxEggsLimit: this.maxEggsLimit.toString(),eggsIncubated: this.eggsIncubated.toString(),auctionEpoch: this.auctionEpoch.toString(),queenGene: this.queenGene.toString(),isActive: this.isActive,basePrice: this.basePrice.toString(),curveA: this.curveA.toString(),friendsList: this.friendsList.toJSONField(),incubatingEggs: this.incubatingEggs.toJSONField(),eggsHatchedList: this.eggsHatchedList.toJSONField(),suiCustody: this.suiCustody.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeHive { return BeeHive.reified( ).new( { queenBeeId: decodeFromJSONField("address", field.queenBeeId), queenType: decodeFromJSONField("u64", field.queenType), queenVersion: decodeFromJSONField("u64", field.queenVersion), queenBirthInfo: decodeFromJSONField(QueenFamilyInfo.reified(), field.queenBirthInfo), maxEggsLimit: decodeFromJSONField("u64", field.maxEggsLimit), eggsIncubated: decodeFromJSONField("u64", field.eggsIncubated), auctionEpoch: decodeFromJSONField("u64", field.auctionEpoch), queenGene: decodeFromJSONField("u256", field.queenGene), isActive: decodeFromJSONField("bool", field.isActive), basePrice: decodeFromJSONField("u64", field.basePrice), curveA: decodeFromJSONField("u64", field.curveA), friendsList: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u64")), field.friendsList), incubatingEggs: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(BeeEgg.reified())), field.incubatingEggs), eggsHatchedList: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("address")), field.eggsHatchedList), suiCustody: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.suiCustody) } ) }

 static fromJSON( json: Record<string, any> ): BeeHive { if (json.$typeName !== BeeHive.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeHive.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeHive { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeHive object`); } return BeeHive.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeHive { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeHive(data.bcs.type)) { throw new Error(`object at is not a BeeHive object`); }

 return BeeHive.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeHive.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeHive> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeHive object`); }

 return BeeHive.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeInFlight =============================== */

export function isBeeInFlight(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeInFlight`; }

export interface BeeInFlightFields { mysticalBee: ToField<MysticalBee>; transferredBy: ToField<"address">; recepient: ToField<"address"> }

export type BeeInFlightReified = Reified< BeeInFlight, BeeInFlightFields >;

export class BeeInFlight implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeInFlight`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeInFlight.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeInFlight`; readonly $typeArgs: []; readonly $isPhantom = BeeInFlight.$isPhantom;

 readonly mysticalBee: ToField<MysticalBee>; readonly transferredBy: ToField<"address">; readonly recepient: ToField<"address">

 private constructor(typeArgs: [], fields: BeeInFlightFields, ) { this.$fullTypeName = composeSuiType( BeeInFlight.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeInFlight`; this.$typeArgs = typeArgs;

 this.mysticalBee = fields.mysticalBee;; this.transferredBy = fields.transferredBy;; this.recepient = fields.recepient; }

 static reified( ): BeeInFlightReified { return { typeName: BeeInFlight.$typeName, fullTypeName: composeSuiType( BeeInFlight.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeInFlight`, typeArgs: [ ] as [], isPhantom: BeeInFlight.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeInFlight.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeInFlight.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeInFlight.fromBcs( data, ), bcs: BeeInFlight.bcs, fromJSONField: (field: any) => BeeInFlight.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeInFlight.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeInFlight.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeInFlight.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeInFlight.fetch( client, id, ), new: ( fields: BeeInFlightFields, ) => { return new BeeInFlight( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeInFlight.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeInFlight>> { return phantom(BeeInFlight.reified( )); } static get p() { return BeeInFlight.phantom() }

 static get bcs() { return bcs.struct("BeeInFlight", {

 mystical_bee: MysticalBee.bcs, transferred_by: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), recepient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BeeInFlight { return BeeInFlight.reified( ).new( { mysticalBee: decodeFromFields(MysticalBee.reified(), fields.mystical_bee), transferredBy: decodeFromFields("address", fields.transferred_by), recepient: decodeFromFields("address", fields.recepient) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeInFlight { if (!isBeeInFlight(item.type)) { throw new Error("not a BeeInFlight type");

 }

 return BeeInFlight.reified( ).new( { mysticalBee: decodeFromFieldsWithTypes(MysticalBee.reified(), item.fields.mystical_bee), transferredBy: decodeFromFieldsWithTypes("address", item.fields.transferred_by), recepient: decodeFromFieldsWithTypes("address", item.fields.recepient) } ) }

 static fromBcs( data: Uint8Array ): BeeInFlight { return BeeInFlight.fromFields( BeeInFlight.bcs.parse(data) ) }

 toJSONField() { return {

 mysticalBee: this.mysticalBee.toJSONField(),transferredBy: this.transferredBy,recepient: this.recepient,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeInFlight { return BeeInFlight.reified( ).new( { mysticalBee: decodeFromJSONField(MysticalBee.reified(), field.mysticalBee), transferredBy: decodeFromJSONField("address", field.transferredBy), recepient: decodeFromJSONField("address", field.recepient) } ) }

 static fromJSON( json: Record<string, any> ): BeeInFlight { if (json.$typeName !== BeeInFlight.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeInFlight.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeInFlight { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeInFlight(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeInFlight object`); } return BeeInFlight.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeInFlight { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeInFlight(data.bcs.type)) { throw new Error(`object at is not a BeeInFlight object`); }

 return BeeInFlight.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeInFlight.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeInFlight> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeInFlight object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeInFlight(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeInFlight object`); }

 return BeeInFlight.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeIsNowAQueen =============================== */

export function isBeeIsNowAQueen(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeIsNowAQueen`; }

export interface BeeIsNowAQueenFields { queenBeeId: ToField<"address">; familyType: ToField<"u64">; version: ToField<"u64">; queenGene: ToField<"u256">; maxEggsLimit: ToField<"u64">; auctionEpoch: ToField<"u64"> }

export type BeeIsNowAQueenReified = Reified< BeeIsNowAQueen, BeeIsNowAQueenFields >;

export class BeeIsNowAQueen implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeIsNowAQueen`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeIsNowAQueen.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeIsNowAQueen`; readonly $typeArgs: []; readonly $isPhantom = BeeIsNowAQueen.$isPhantom;

 readonly queenBeeId: ToField<"address">; readonly familyType: ToField<"u64">; readonly version: ToField<"u64">; readonly queenGene: ToField<"u256">; readonly maxEggsLimit: ToField<"u64">; readonly auctionEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: BeeIsNowAQueenFields, ) { this.$fullTypeName = composeSuiType( BeeIsNowAQueen.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeIsNowAQueen`; this.$typeArgs = typeArgs;

 this.queenBeeId = fields.queenBeeId;; this.familyType = fields.familyType;; this.version = fields.version;; this.queenGene = fields.queenGene;; this.maxEggsLimit = fields.maxEggsLimit;; this.auctionEpoch = fields.auctionEpoch; }

 static reified( ): BeeIsNowAQueenReified { return { typeName: BeeIsNowAQueen.$typeName, fullTypeName: composeSuiType( BeeIsNowAQueen.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeIsNowAQueen`, typeArgs: [ ] as [], isPhantom: BeeIsNowAQueen.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeIsNowAQueen.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeIsNowAQueen.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeIsNowAQueen.fromBcs( data, ), bcs: BeeIsNowAQueen.bcs, fromJSONField: (field: any) => BeeIsNowAQueen.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeIsNowAQueen.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeIsNowAQueen.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeIsNowAQueen.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeIsNowAQueen.fetch( client, id, ), new: ( fields: BeeIsNowAQueenFields, ) => { return new BeeIsNowAQueen( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeIsNowAQueen.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeIsNowAQueen>> { return phantom(BeeIsNowAQueen.reified( )); } static get p() { return BeeIsNowAQueen.phantom() }

 static get bcs() { return bcs.struct("BeeIsNowAQueen", {

 queenBeeId: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), family_type: bcs.u64(), version: bcs.u64(), queen_gene: bcs.u256(), max_eggs_limit: bcs.u64(), auction_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BeeIsNowAQueen { return BeeIsNowAQueen.reified( ).new( { queenBeeId: decodeFromFields("address", fields.queenBeeId), familyType: decodeFromFields("u64", fields.family_type), version: decodeFromFields("u64", fields.version), queenGene: decodeFromFields("u256", fields.queen_gene), maxEggsLimit: decodeFromFields("u64", fields.max_eggs_limit), auctionEpoch: decodeFromFields("u64", fields.auction_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeIsNowAQueen { if (!isBeeIsNowAQueen(item.type)) { throw new Error("not a BeeIsNowAQueen type");

 }

 return BeeIsNowAQueen.reified( ).new( { queenBeeId: decodeFromFieldsWithTypes("address", item.fields.queenBeeId), familyType: decodeFromFieldsWithTypes("u64", item.fields.family_type), version: decodeFromFieldsWithTypes("u64", item.fields.version), queenGene: decodeFromFieldsWithTypes("u256", item.fields.queen_gene), maxEggsLimit: decodeFromFieldsWithTypes("u64", item.fields.max_eggs_limit), auctionEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_epoch) } ) }

 static fromBcs( data: Uint8Array ): BeeIsNowAQueen { return BeeIsNowAQueen.fromFields( BeeIsNowAQueen.bcs.parse(data) ) }

 toJSONField() { return {

 queenBeeId: this.queenBeeId,familyType: this.familyType.toString(),version: this.version.toString(),queenGene: this.queenGene.toString(),maxEggsLimit: this.maxEggsLimit.toString(),auctionEpoch: this.auctionEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeIsNowAQueen { return BeeIsNowAQueen.reified( ).new( { queenBeeId: decodeFromJSONField("address", field.queenBeeId), familyType: decodeFromJSONField("u64", field.familyType), version: decodeFromJSONField("u64", field.version), queenGene: decodeFromJSONField("u256", field.queenGene), maxEggsLimit: decodeFromJSONField("u64", field.maxEggsLimit), auctionEpoch: decodeFromJSONField("u64", field.auctionEpoch) } ) }

 static fromJSON( json: Record<string, any> ): BeeIsNowAQueen { if (json.$typeName !== BeeIsNowAQueen.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeIsNowAQueen.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeIsNowAQueen { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeIsNowAQueen(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeIsNowAQueen object`); } return BeeIsNowAQueen.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeIsNowAQueen { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeIsNowAQueen(data.bcs.type)) { throw new Error(`object at is not a BeeIsNowAQueen object`); }

 return BeeIsNowAQueen.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeIsNowAQueen.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeIsNowAQueen> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeIsNowAQueen object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeIsNowAQueen(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeIsNowAQueen object`); }

 return BeeIsNowAQueen.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeOwnershipUpdated =============================== */

export function isBeeOwnershipUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeOwnershipUpdated`; }

export interface BeeOwnershipUpdatedFields { version: ToField<"u64">; newOwner: ToField<"address"> }

export type BeeOwnershipUpdatedReified = Reified< BeeOwnershipUpdated, BeeOwnershipUpdatedFields >;

export class BeeOwnershipUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeOwnershipUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeOwnershipUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeOwnershipUpdated`; readonly $typeArgs: []; readonly $isPhantom = BeeOwnershipUpdated.$isPhantom;

 readonly version: ToField<"u64">; readonly newOwner: ToField<"address">

 private constructor(typeArgs: [], fields: BeeOwnershipUpdatedFields, ) { this.$fullTypeName = composeSuiType( BeeOwnershipUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeOwnershipUpdated`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.newOwner = fields.newOwner; }

 static reified( ): BeeOwnershipUpdatedReified { return { typeName: BeeOwnershipUpdated.$typeName, fullTypeName: composeSuiType( BeeOwnershipUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeOwnershipUpdated`, typeArgs: [ ] as [], isPhantom: BeeOwnershipUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeOwnershipUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeOwnershipUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeOwnershipUpdated.fromBcs( data, ), bcs: BeeOwnershipUpdated.bcs, fromJSONField: (field: any) => BeeOwnershipUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeOwnershipUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeOwnershipUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeOwnershipUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeOwnershipUpdated.fetch( client, id, ), new: ( fields: BeeOwnershipUpdatedFields, ) => { return new BeeOwnershipUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeOwnershipUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeOwnershipUpdated>> { return phantom(BeeOwnershipUpdated.reified( )); } static get p() { return BeeOwnershipUpdated.phantom() }

 static get bcs() { return bcs.struct("BeeOwnershipUpdated", {

 version: bcs.u64(), new_owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BeeOwnershipUpdated { return BeeOwnershipUpdated.reified( ).new( { version: decodeFromFields("u64", fields.version), newOwner: decodeFromFields("address", fields.new_owner) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeOwnershipUpdated { if (!isBeeOwnershipUpdated(item.type)) { throw new Error("not a BeeOwnershipUpdated type");

 }

 return BeeOwnershipUpdated.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), newOwner: decodeFromFieldsWithTypes("address", item.fields.new_owner) } ) }

 static fromBcs( data: Uint8Array ): BeeOwnershipUpdated { return BeeOwnershipUpdated.fromFields( BeeOwnershipUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),newOwner: this.newOwner,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeOwnershipUpdated { return BeeOwnershipUpdated.reified( ).new( { version: decodeFromJSONField("u64", field.version), newOwner: decodeFromJSONField("address", field.newOwner) } ) }

 static fromJSON( json: Record<string, any> ): BeeOwnershipUpdated { if (json.$typeName !== BeeOwnershipUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeOwnershipUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeOwnershipUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeOwnershipUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeOwnershipUpdated object`); } return BeeOwnershipUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeOwnershipUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeOwnershipUpdated(data.bcs.type)) { throw new Error(`object at is not a BeeOwnershipUpdated object`); }

 return BeeOwnershipUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeOwnershipUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeOwnershipUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeOwnershipUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeOwnershipUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeOwnershipUpdated object`); }

 return BeeOwnershipUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeRemovedFromFriendsList =============================== */

export function isBeeRemovedFromFriendsList(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeRemovedFromFriendsList`; }

export interface BeeRemovedFromFriendsListFields { queenVersion: ToField<"u64">; friendlyBee: ToField<"u64"> }

export type BeeRemovedFromFriendsListReified = Reified< BeeRemovedFromFriendsList, BeeRemovedFromFriendsListFields >;

export class BeeRemovedFromFriendsList implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeRemovedFromFriendsList`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeRemovedFromFriendsList.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeRemovedFromFriendsList`; readonly $typeArgs: []; readonly $isPhantom = BeeRemovedFromFriendsList.$isPhantom;

 readonly queenVersion: ToField<"u64">; readonly friendlyBee: ToField<"u64">

 private constructor(typeArgs: [], fields: BeeRemovedFromFriendsListFields, ) { this.$fullTypeName = composeSuiType( BeeRemovedFromFriendsList.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeRemovedFromFriendsList`; this.$typeArgs = typeArgs;

 this.queenVersion = fields.queenVersion;; this.friendlyBee = fields.friendlyBee; }

 static reified( ): BeeRemovedFromFriendsListReified { return { typeName: BeeRemovedFromFriendsList.$typeName, fullTypeName: composeSuiType( BeeRemovedFromFriendsList.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeRemovedFromFriendsList`, typeArgs: [ ] as [], isPhantom: BeeRemovedFromFriendsList.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeRemovedFromFriendsList.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeRemovedFromFriendsList.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeRemovedFromFriendsList.fromBcs( data, ), bcs: BeeRemovedFromFriendsList.bcs, fromJSONField: (field: any) => BeeRemovedFromFriendsList.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeRemovedFromFriendsList.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeRemovedFromFriendsList.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeRemovedFromFriendsList.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeRemovedFromFriendsList.fetch( client, id, ), new: ( fields: BeeRemovedFromFriendsListFields, ) => { return new BeeRemovedFromFriendsList( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeRemovedFromFriendsList.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeRemovedFromFriendsList>> { return phantom(BeeRemovedFromFriendsList.reified( )); } static get p() { return BeeRemovedFromFriendsList.phantom() }

 static get bcs() { return bcs.struct("BeeRemovedFromFriendsList", {

 queen_version: bcs.u64(), friendly_bee: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BeeRemovedFromFriendsList { return BeeRemovedFromFriendsList.reified( ).new( { queenVersion: decodeFromFields("u64", fields.queen_version), friendlyBee: decodeFromFields("u64", fields.friendly_bee) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeRemovedFromFriendsList { if (!isBeeRemovedFromFriendsList(item.type)) { throw new Error("not a BeeRemovedFromFriendsList type");

 }

 return BeeRemovedFromFriendsList.reified( ).new( { queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), friendlyBee: decodeFromFieldsWithTypes("u64", item.fields.friendly_bee) } ) }

 static fromBcs( data: Uint8Array ): BeeRemovedFromFriendsList { return BeeRemovedFromFriendsList.fromFields( BeeRemovedFromFriendsList.bcs.parse(data) ) }

 toJSONField() { return {

 queenVersion: this.queenVersion.toString(),friendlyBee: this.friendlyBee.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeRemovedFromFriendsList { return BeeRemovedFromFriendsList.reified( ).new( { queenVersion: decodeFromJSONField("u64", field.queenVersion), friendlyBee: decodeFromJSONField("u64", field.friendlyBee) } ) }

 static fromJSON( json: Record<string, any> ): BeeRemovedFromFriendsList { if (json.$typeName !== BeeRemovedFromFriendsList.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeRemovedFromFriendsList.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeRemovedFromFriendsList { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeRemovedFromFriendsList(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeRemovedFromFriendsList object`); } return BeeRemovedFromFriendsList.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeRemovedFromFriendsList { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeRemovedFromFriendsList(data.bcs.type)) { throw new Error(`object at is not a BeeRemovedFromFriendsList object`); }

 return BeeRemovedFromFriendsList.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeRemovedFromFriendsList.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeRemovedFromFriendsList> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeRemovedFromFriendsList object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeRemovedFromFriendsList(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeRemovedFromFriendsList object`); }

 return BeeRemovedFromFriendsList.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeSentToHiddenWorld =============================== */

export function isBeeSentToHiddenWorld(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeSentToHiddenWorld`; }

export interface BeeSentToHiddenWorldFields { sentAt: ToField<"u64">; sender: ToField<"address">; beeId: ToField<"address">; version: ToField<"u64">; genes: ToField<"u256">; energy: ToField<"u64">; health: ToField<"u64">; totalHoneyClaimed: ToField<"u64">; hiveUnlocked: ToField<"u64">; totalWeightedHive: ToField<"u128">; totalWeightedHoney: ToField<"u128"> }

export type BeeSentToHiddenWorldReified = Reified< BeeSentToHiddenWorld, BeeSentToHiddenWorldFields >;

export class BeeSentToHiddenWorld implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeSentToHiddenWorld`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeSentToHiddenWorld.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeSentToHiddenWorld`; readonly $typeArgs: []; readonly $isPhantom = BeeSentToHiddenWorld.$isPhantom;

 readonly sentAt: ToField<"u64">; readonly sender: ToField<"address">; readonly beeId: ToField<"address">; readonly version: ToField<"u64">; readonly genes: ToField<"u256">; readonly energy: ToField<"u64">; readonly health: ToField<"u64">; readonly totalHoneyClaimed: ToField<"u64">; readonly hiveUnlocked: ToField<"u64">; readonly totalWeightedHive: ToField<"u128">; readonly totalWeightedHoney: ToField<"u128">

 private constructor(typeArgs: [], fields: BeeSentToHiddenWorldFields, ) { this.$fullTypeName = composeSuiType( BeeSentToHiddenWorld.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeSentToHiddenWorld`; this.$typeArgs = typeArgs;

 this.sentAt = fields.sentAt;; this.sender = fields.sender;; this.beeId = fields.beeId;; this.version = fields.version;; this.genes = fields.genes;; this.energy = fields.energy;; this.health = fields.health;; this.totalHoneyClaimed = fields.totalHoneyClaimed;; this.hiveUnlocked = fields.hiveUnlocked;; this.totalWeightedHive = fields.totalWeightedHive;; this.totalWeightedHoney = fields.totalWeightedHoney; }

 static reified( ): BeeSentToHiddenWorldReified { return { typeName: BeeSentToHiddenWorld.$typeName, fullTypeName: composeSuiType( BeeSentToHiddenWorld.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeSentToHiddenWorld`, typeArgs: [ ] as [], isPhantom: BeeSentToHiddenWorld.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeSentToHiddenWorld.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeSentToHiddenWorld.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeSentToHiddenWorld.fromBcs( data, ), bcs: BeeSentToHiddenWorld.bcs, fromJSONField: (field: any) => BeeSentToHiddenWorld.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeSentToHiddenWorld.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeSentToHiddenWorld.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeSentToHiddenWorld.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeSentToHiddenWorld.fetch( client, id, ), new: ( fields: BeeSentToHiddenWorldFields, ) => { return new BeeSentToHiddenWorld( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeSentToHiddenWorld.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeSentToHiddenWorld>> { return phantom(BeeSentToHiddenWorld.reified( )); } static get p() { return BeeSentToHiddenWorld.phantom() }

 static get bcs() { return bcs.struct("BeeSentToHiddenWorld", {

 sent_at: bcs.u64(), sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), beeId: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), genes: bcs.u256(), energy: bcs.u64(), health: bcs.u64(), total_honey_claimed: bcs.u64(), hive_unlocked: bcs.u64(), total_weighted_hive: bcs.u128(), total_weighted_honey: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): BeeSentToHiddenWorld { return BeeSentToHiddenWorld.reified( ).new( { sentAt: decodeFromFields("u64", fields.sent_at), sender: decodeFromFields("address", fields.sender), beeId: decodeFromFields("address", fields.beeId), version: decodeFromFields("u64", fields.version), genes: decodeFromFields("u256", fields.genes), energy: decodeFromFields("u64", fields.energy), health: decodeFromFields("u64", fields.health), totalHoneyClaimed: decodeFromFields("u64", fields.total_honey_claimed), hiveUnlocked: decodeFromFields("u64", fields.hive_unlocked), totalWeightedHive: decodeFromFields("u128", fields.total_weighted_hive), totalWeightedHoney: decodeFromFields("u128", fields.total_weighted_honey) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeSentToHiddenWorld { if (!isBeeSentToHiddenWorld(item.type)) { throw new Error("not a BeeSentToHiddenWorld type");

 }

 return BeeSentToHiddenWorld.reified( ).new( { sentAt: decodeFromFieldsWithTypes("u64", item.fields.sent_at), sender: decodeFromFieldsWithTypes("address", item.fields.sender), beeId: decodeFromFieldsWithTypes("address", item.fields.beeId), version: decodeFromFieldsWithTypes("u64", item.fields.version), genes: decodeFromFieldsWithTypes("u256", item.fields.genes), energy: decodeFromFieldsWithTypes("u64", item.fields.energy), health: decodeFromFieldsWithTypes("u64", item.fields.health), totalHoneyClaimed: decodeFromFieldsWithTypes("u64", item.fields.total_honey_claimed), hiveUnlocked: decodeFromFieldsWithTypes("u64", item.fields.hive_unlocked), totalWeightedHive: decodeFromFieldsWithTypes("u128", item.fields.total_weighted_hive), totalWeightedHoney: decodeFromFieldsWithTypes("u128", item.fields.total_weighted_honey) } ) }

 static fromBcs( data: Uint8Array ): BeeSentToHiddenWorld { return BeeSentToHiddenWorld.fromFields( BeeSentToHiddenWorld.bcs.parse(data) ) }

 toJSONField() { return {

 sentAt: this.sentAt.toString(),sender: this.sender,beeId: this.beeId,version: this.version.toString(),genes: this.genes.toString(),energy: this.energy.toString(),health: this.health.toString(),totalHoneyClaimed: this.totalHoneyClaimed.toString(),hiveUnlocked: this.hiveUnlocked.toString(),totalWeightedHive: this.totalWeightedHive.toString(),totalWeightedHoney: this.totalWeightedHoney.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeSentToHiddenWorld { return BeeSentToHiddenWorld.reified( ).new( { sentAt: decodeFromJSONField("u64", field.sentAt), sender: decodeFromJSONField("address", field.sender), beeId: decodeFromJSONField("address", field.beeId), version: decodeFromJSONField("u64", field.version), genes: decodeFromJSONField("u256", field.genes), energy: decodeFromJSONField("u64", field.energy), health: decodeFromJSONField("u64", field.health), totalHoneyClaimed: decodeFromJSONField("u64", field.totalHoneyClaimed), hiveUnlocked: decodeFromJSONField("u64", field.hiveUnlocked), totalWeightedHive: decodeFromJSONField("u128", field.totalWeightedHive), totalWeightedHoney: decodeFromJSONField("u128", field.totalWeightedHoney) } ) }

 static fromJSON( json: Record<string, any> ): BeeSentToHiddenWorld { if (json.$typeName !== BeeSentToHiddenWorld.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeSentToHiddenWorld.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeSentToHiddenWorld { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeSentToHiddenWorld(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeSentToHiddenWorld object`); } return BeeSentToHiddenWorld.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeSentToHiddenWorld { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeSentToHiddenWorld(data.bcs.type)) { throw new Error(`object at is not a BeeSentToHiddenWorld object`); }

 return BeeSentToHiddenWorld.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeSentToHiddenWorld.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeSentToHiddenWorld> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeSentToHiddenWorld object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeSentToHiddenWorld(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeSentToHiddenWorld object`); }

 return BeeSentToHiddenWorld.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeTransferCancelled =============================== */

export function isBeeTransferCancelled(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeTransferCancelled`; }

export interface BeeTransferCancelledFields { version: ToField<"u64">; transferredBy: ToField<"address">; recepient: ToField<"address"> }

export type BeeTransferCancelledReified = Reified< BeeTransferCancelled, BeeTransferCancelledFields >;

export class BeeTransferCancelled implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeTransferCancelled`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeTransferCancelled.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeTransferCancelled`; readonly $typeArgs: []; readonly $isPhantom = BeeTransferCancelled.$isPhantom;

 readonly version: ToField<"u64">; readonly transferredBy: ToField<"address">; readonly recepient: ToField<"address">

 private constructor(typeArgs: [], fields: BeeTransferCancelledFields, ) { this.$fullTypeName = composeSuiType( BeeTransferCancelled.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeTransferCancelled`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.transferredBy = fields.transferredBy;; this.recepient = fields.recepient; }

 static reified( ): BeeTransferCancelledReified { return { typeName: BeeTransferCancelled.$typeName, fullTypeName: composeSuiType( BeeTransferCancelled.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeTransferCancelled`, typeArgs: [ ] as [], isPhantom: BeeTransferCancelled.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeTransferCancelled.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeTransferCancelled.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeTransferCancelled.fromBcs( data, ), bcs: BeeTransferCancelled.bcs, fromJSONField: (field: any) => BeeTransferCancelled.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeTransferCancelled.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeTransferCancelled.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeTransferCancelled.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeTransferCancelled.fetch( client, id, ), new: ( fields: BeeTransferCancelledFields, ) => { return new BeeTransferCancelled( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeTransferCancelled.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeTransferCancelled>> { return phantom(BeeTransferCancelled.reified( )); } static get p() { return BeeTransferCancelled.phantom() }

 static get bcs() { return bcs.struct("BeeTransferCancelled", {

 version: bcs.u64(), transferred_by: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), recepient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BeeTransferCancelled { return BeeTransferCancelled.reified( ).new( { version: decodeFromFields("u64", fields.version), transferredBy: decodeFromFields("address", fields.transferred_by), recepient: decodeFromFields("address", fields.recepient) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeTransferCancelled { if (!isBeeTransferCancelled(item.type)) { throw new Error("not a BeeTransferCancelled type");

 }

 return BeeTransferCancelled.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), transferredBy: decodeFromFieldsWithTypes("address", item.fields.transferred_by), recepient: decodeFromFieldsWithTypes("address", item.fields.recepient) } ) }

 static fromBcs( data: Uint8Array ): BeeTransferCancelled { return BeeTransferCancelled.fromFields( BeeTransferCancelled.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),transferredBy: this.transferredBy,recepient: this.recepient,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeTransferCancelled { return BeeTransferCancelled.reified( ).new( { version: decodeFromJSONField("u64", field.version), transferredBy: decodeFromJSONField("address", field.transferredBy), recepient: decodeFromJSONField("address", field.recepient) } ) }

 static fromJSON( json: Record<string, any> ): BeeTransferCancelled { if (json.$typeName !== BeeTransferCancelled.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeTransferCancelled.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeTransferCancelled { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeTransferCancelled(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeTransferCancelled object`); } return BeeTransferCancelled.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeTransferCancelled { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeTransferCancelled(data.bcs.type)) { throw new Error(`object at is not a BeeTransferCancelled object`); }

 return BeeTransferCancelled.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeTransferCancelled.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeTransferCancelled> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeTransferCancelled object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeTransferCancelled(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeTransferCancelled object`); }

 return BeeTransferCancelled.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeTransferInitiated =============================== */

export function isBeeTransferInitiated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeTransferInitiated`; }

export interface BeeTransferInitiatedFields { version: ToField<"u64">; transferredBy: ToField<"address">; recepient: ToField<"address"> }

export type BeeTransferInitiatedReified = Reified< BeeTransferInitiated, BeeTransferInitiatedFields >;

export class BeeTransferInitiated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeTransferInitiated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeTransferInitiated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeTransferInitiated`; readonly $typeArgs: []; readonly $isPhantom = BeeTransferInitiated.$isPhantom;

 readonly version: ToField<"u64">; readonly transferredBy: ToField<"address">; readonly recepient: ToField<"address">

 private constructor(typeArgs: [], fields: BeeTransferInitiatedFields, ) { this.$fullTypeName = composeSuiType( BeeTransferInitiated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeTransferInitiated`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.transferredBy = fields.transferredBy;; this.recepient = fields.recepient; }

 static reified( ): BeeTransferInitiatedReified { return { typeName: BeeTransferInitiated.$typeName, fullTypeName: composeSuiType( BeeTransferInitiated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeTransferInitiated`, typeArgs: [ ] as [], isPhantom: BeeTransferInitiated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeTransferInitiated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeTransferInitiated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeTransferInitiated.fromBcs( data, ), bcs: BeeTransferInitiated.bcs, fromJSONField: (field: any) => BeeTransferInitiated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeTransferInitiated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeTransferInitiated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeTransferInitiated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeTransferInitiated.fetch( client, id, ), new: ( fields: BeeTransferInitiatedFields, ) => { return new BeeTransferInitiated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeTransferInitiated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeTransferInitiated>> { return phantom(BeeTransferInitiated.reified( )); } static get p() { return BeeTransferInitiated.phantom() }

 static get bcs() { return bcs.struct("BeeTransferInitiated", {

 version: bcs.u64(), transferred_by: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), recepient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BeeTransferInitiated { return BeeTransferInitiated.reified( ).new( { version: decodeFromFields("u64", fields.version), transferredBy: decodeFromFields("address", fields.transferred_by), recepient: decodeFromFields("address", fields.recepient) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeTransferInitiated { if (!isBeeTransferInitiated(item.type)) { throw new Error("not a BeeTransferInitiated type");

 }

 return BeeTransferInitiated.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), transferredBy: decodeFromFieldsWithTypes("address", item.fields.transferred_by), recepient: decodeFromFieldsWithTypes("address", item.fields.recepient) } ) }

 static fromBcs( data: Uint8Array ): BeeTransferInitiated { return BeeTransferInitiated.fromFields( BeeTransferInitiated.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),transferredBy: this.transferredBy,recepient: this.recepient,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeTransferInitiated { return BeeTransferInitiated.reified( ).new( { version: decodeFromJSONField("u64", field.version), transferredBy: decodeFromJSONField("address", field.transferredBy), recepient: decodeFromJSONField("address", field.recepient) } ) }

 static fromJSON( json: Record<string, any> ): BeeTransferInitiated { if (json.$typeName !== BeeTransferInitiated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeTransferInitiated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeTransferInitiated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeTransferInitiated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeTransferInitiated object`); } return BeeTransferInitiated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeTransferInitiated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeTransferInitiated(data.bcs.type)) { throw new Error(`object at is not a BeeTransferInitiated object`); }

 return BeeTransferInitiated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeTransferInitiated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeTransferInitiated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeTransferInitiated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeTransferInitiated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeTransferInitiated object`); }

 return BeeTransferInitiated.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeTransfers =============================== */

export function isBeeTransfers(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeTransfers`; }

export interface BeeTransfersFields { custodiedBees: ToField<LinkedTable<"u64", ToPhantom<BeeInFlight>>>; incomingBoxes: ToField<LinkedTable<"address", ToPhantom<Vector<"u64">>>>; outgoingBoxes: ToField<LinkedTable<"address", ToPhantom<Vector<"u64">>>> }

export type BeeTransfersReified = Reified< BeeTransfers, BeeTransfersFields >;

export class BeeTransfers implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeTransfers`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeTransfers.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeTransfers`; readonly $typeArgs: []; readonly $isPhantom = BeeTransfers.$isPhantom;

 readonly custodiedBees: ToField<LinkedTable<"u64", ToPhantom<BeeInFlight>>>; readonly incomingBoxes: ToField<LinkedTable<"address", ToPhantom<Vector<"u64">>>>; readonly outgoingBoxes: ToField<LinkedTable<"address", ToPhantom<Vector<"u64">>>>

 private constructor(typeArgs: [], fields: BeeTransfersFields, ) { this.$fullTypeName = composeSuiType( BeeTransfers.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeTransfers`; this.$typeArgs = typeArgs;

 this.custodiedBees = fields.custodiedBees;; this.incomingBoxes = fields.incomingBoxes;; this.outgoingBoxes = fields.outgoingBoxes; }

 static reified( ): BeeTransfersReified { return { typeName: BeeTransfers.$typeName, fullTypeName: composeSuiType( BeeTransfers.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeTransfers`, typeArgs: [ ] as [], isPhantom: BeeTransfers.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeTransfers.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeTransfers.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeTransfers.fromBcs( data, ), bcs: BeeTransfers.bcs, fromJSONField: (field: any) => BeeTransfers.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeTransfers.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeTransfers.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeTransfers.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeTransfers.fetch( client, id, ), new: ( fields: BeeTransfersFields, ) => { return new BeeTransfers( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeTransfers.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeTransfers>> { return phantom(BeeTransfers.reified( )); } static get p() { return BeeTransfers.phantom() }

 static get bcs() { return bcs.struct("BeeTransfers", {

 custodied_bees: LinkedTable.bcs(bcs.u64()), incoming_boxes: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), outgoing_boxes: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

}) };

 static fromFields( fields: Record<string, any> ): BeeTransfers { return BeeTransfers.reified( ).new( { custodiedBees: decodeFromFields(LinkedTable.reified("u64", reified.phantom(BeeInFlight.reified())), fields.custodied_bees), incomingBoxes: decodeFromFields(LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), fields.incoming_boxes), outgoingBoxes: decodeFromFields(LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), fields.outgoing_boxes) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeTransfers { if (!isBeeTransfers(item.type)) { throw new Error("not a BeeTransfers type");

 }

 return BeeTransfers.reified( ).new( { custodiedBees: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(BeeInFlight.reified())), item.fields.custodied_bees), incomingBoxes: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), item.fields.incoming_boxes), outgoingBoxes: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), item.fields.outgoing_boxes) } ) }

 static fromBcs( data: Uint8Array ): BeeTransfers { return BeeTransfers.fromFields( BeeTransfers.bcs.parse(data) ) }

 toJSONField() { return {

 custodiedBees: this.custodiedBees.toJSONField(),incomingBoxes: this.incomingBoxes.toJSONField(),outgoingBoxes: this.outgoingBoxes.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeTransfers { return BeeTransfers.reified( ).new( { custodiedBees: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(BeeInFlight.reified())), field.custodiedBees), incomingBoxes: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), field.incomingBoxes), outgoingBoxes: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(reified.vector("u64"))), field.outgoingBoxes) } ) }

 static fromJSON( json: Record<string, any> ): BeeTransfers { if (json.$typeName !== BeeTransfers.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeTransfers.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeTransfers { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeTransfers(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeTransfers object`); } return BeeTransfers.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeTransfers { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeTransfers(data.bcs.type)) { throw new Error(`object at is not a BeeTransfers object`); }

 return BeeTransfers.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeTransfers.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeTransfers> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeTransfers object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeTransfers(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeTransfers object`); }

 return BeeTransfers.fromSuiObjectData( res.data ); }

 }

/* ============================== BeeUpdatedInGenesisBasket =============================== */

export function isBeeUpdatedInGenesisBasket(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeeUpdatedInGenesisBasket`; }

export interface BeeUpdatedInGenesisBasketFields { index: ToField<"u64">; gene: ToField<"u256">; img: ToField<Vector<String1>> }

export type BeeUpdatedInGenesisBasketReified = Reified< BeeUpdatedInGenesisBasket, BeeUpdatedInGenesisBasketFields >;

export class BeeUpdatedInGenesisBasket implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeeUpdatedInGenesisBasket`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeeUpdatedInGenesisBasket.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeeUpdatedInGenesisBasket`; readonly $typeArgs: []; readonly $isPhantom = BeeUpdatedInGenesisBasket.$isPhantom;

 readonly index: ToField<"u64">; readonly gene: ToField<"u256">; readonly img: ToField<Vector<String1>>

 private constructor(typeArgs: [], fields: BeeUpdatedInGenesisBasketFields, ) { this.$fullTypeName = composeSuiType( BeeUpdatedInGenesisBasket.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeeUpdatedInGenesisBasket`; this.$typeArgs = typeArgs;

 this.index = fields.index;; this.gene = fields.gene;; this.img = fields.img; }

 static reified( ): BeeUpdatedInGenesisBasketReified { return { typeName: BeeUpdatedInGenesisBasket.$typeName, fullTypeName: composeSuiType( BeeUpdatedInGenesisBasket.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeeUpdatedInGenesisBasket`, typeArgs: [ ] as [], isPhantom: BeeUpdatedInGenesisBasket.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeUpdatedInGenesisBasket.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeUpdatedInGenesisBasket.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeUpdatedInGenesisBasket.fromBcs( data, ), bcs: BeeUpdatedInGenesisBasket.bcs, fromJSONField: (field: any) => BeeUpdatedInGenesisBasket.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeUpdatedInGenesisBasket.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeUpdatedInGenesisBasket.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeeUpdatedInGenesisBasket.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeeUpdatedInGenesisBasket.fetch( client, id, ), new: ( fields: BeeUpdatedInGenesisBasketFields, ) => { return new BeeUpdatedInGenesisBasket( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeUpdatedInGenesisBasket.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeUpdatedInGenesisBasket>> { return phantom(BeeUpdatedInGenesisBasket.reified( )); } static get p() { return BeeUpdatedInGenesisBasket.phantom() }

 static get bcs() { return bcs.struct("BeeUpdatedInGenesisBasket", {

 index: bcs.u64(), gene: bcs.u256(), img: bcs.vector(String1.bcs)

}) };

 static fromFields( fields: Record<string, any> ): BeeUpdatedInGenesisBasket { return BeeUpdatedInGenesisBasket.reified( ).new( { index: decodeFromFields("u64", fields.index), gene: decodeFromFields("u256", fields.gene), img: decodeFromFields(reified.vector(String1.reified()), fields.img) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeUpdatedInGenesisBasket { if (!isBeeUpdatedInGenesisBasket(item.type)) { throw new Error("not a BeeUpdatedInGenesisBasket type");

 }

 return BeeUpdatedInGenesisBasket.reified( ).new( { index: decodeFromFieldsWithTypes("u64", item.fields.index), gene: decodeFromFieldsWithTypes("u256", item.fields.gene), img: decodeFromFieldsWithTypes(reified.vector(String1.reified()), item.fields.img) } ) }

 static fromBcs( data: Uint8Array ): BeeUpdatedInGenesisBasket { return BeeUpdatedInGenesisBasket.fromFields( BeeUpdatedInGenesisBasket.bcs.parse(data) ) }

 toJSONField() { return {

 index: this.index.toString(),gene: this.gene.toString(),img: fieldToJSON<Vector<String1>>(`vector<${String1.$typeName}>`, this.img),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeUpdatedInGenesisBasket { return BeeUpdatedInGenesisBasket.reified( ).new( { index: decodeFromJSONField("u64", field.index), gene: decodeFromJSONField("u256", field.gene), img: decodeFromJSONField(reified.vector(String1.reified()), field.img) } ) }

 static fromJSON( json: Record<string, any> ): BeeUpdatedInGenesisBasket { if (json.$typeName !== BeeUpdatedInGenesisBasket.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeUpdatedInGenesisBasket.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeUpdatedInGenesisBasket { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeUpdatedInGenesisBasket(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeUpdatedInGenesisBasket object`); } return BeeUpdatedInGenesisBasket.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeeUpdatedInGenesisBasket { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeeUpdatedInGenesisBasket(data.bcs.type)) { throw new Error(`object at is not a BeeUpdatedInGenesisBasket object`); }

 return BeeUpdatedInGenesisBasket.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeeUpdatedInGenesisBasket.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeUpdatedInGenesisBasket> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeUpdatedInGenesisBasket object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeUpdatedInGenesisBasket(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeUpdatedInGenesisBasket object`); }

 return BeeUpdatedInGenesisBasket.fromSuiObjectData( res.data ); }

 }

/* ============================== BeesAddedToGenesisBasket =============================== */

export function isBeesAddedToGenesisBasket(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeesAddedToGenesisBasket`; }

export interface BeesAddedToGenesisBasketFields { index: ToField<"u64">; gene: ToField<"u256">; img: ToField<Vector<String1>> }

export type BeesAddedToGenesisBasketReified = Reified< BeesAddedToGenesisBasket, BeesAddedToGenesisBasketFields >;

export class BeesAddedToGenesisBasket implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeesAddedToGenesisBasket`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeesAddedToGenesisBasket.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeesAddedToGenesisBasket`; readonly $typeArgs: []; readonly $isPhantom = BeesAddedToGenesisBasket.$isPhantom;

 readonly index: ToField<"u64">; readonly gene: ToField<"u256">; readonly img: ToField<Vector<String1>>

 private constructor(typeArgs: [], fields: BeesAddedToGenesisBasketFields, ) { this.$fullTypeName = composeSuiType( BeesAddedToGenesisBasket.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeesAddedToGenesisBasket`; this.$typeArgs = typeArgs;

 this.index = fields.index;; this.gene = fields.gene;; this.img = fields.img; }

 static reified( ): BeesAddedToGenesisBasketReified { return { typeName: BeesAddedToGenesisBasket.$typeName, fullTypeName: composeSuiType( BeesAddedToGenesisBasket.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeesAddedToGenesisBasket`, typeArgs: [ ] as [], isPhantom: BeesAddedToGenesisBasket.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeesAddedToGenesisBasket.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeesAddedToGenesisBasket.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeesAddedToGenesisBasket.fromBcs( data, ), bcs: BeesAddedToGenesisBasket.bcs, fromJSONField: (field: any) => BeesAddedToGenesisBasket.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeesAddedToGenesisBasket.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeesAddedToGenesisBasket.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeesAddedToGenesisBasket.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeesAddedToGenesisBasket.fetch( client, id, ), new: ( fields: BeesAddedToGenesisBasketFields, ) => { return new BeesAddedToGenesisBasket( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeesAddedToGenesisBasket.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeesAddedToGenesisBasket>> { return phantom(BeesAddedToGenesisBasket.reified( )); } static get p() { return BeesAddedToGenesisBasket.phantom() }

 static get bcs() { return bcs.struct("BeesAddedToGenesisBasket", {

 index: bcs.u64(), gene: bcs.u256(), img: bcs.vector(String1.bcs)

}) };

 static fromFields( fields: Record<string, any> ): BeesAddedToGenesisBasket { return BeesAddedToGenesisBasket.reified( ).new( { index: decodeFromFields("u64", fields.index), gene: decodeFromFields("u256", fields.gene), img: decodeFromFields(reified.vector(String1.reified()), fields.img) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeesAddedToGenesisBasket { if (!isBeesAddedToGenesisBasket(item.type)) { throw new Error("not a BeesAddedToGenesisBasket type");

 }

 return BeesAddedToGenesisBasket.reified( ).new( { index: decodeFromFieldsWithTypes("u64", item.fields.index), gene: decodeFromFieldsWithTypes("u256", item.fields.gene), img: decodeFromFieldsWithTypes(reified.vector(String1.reified()), item.fields.img) } ) }

 static fromBcs( data: Uint8Array ): BeesAddedToGenesisBasket { return BeesAddedToGenesisBasket.fromFields( BeesAddedToGenesisBasket.bcs.parse(data) ) }

 toJSONField() { return {

 index: this.index.toString(),gene: this.gene.toString(),img: fieldToJSON<Vector<String1>>(`vector<${String1.$typeName}>`, this.img),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeesAddedToGenesisBasket { return BeesAddedToGenesisBasket.reified( ).new( { index: decodeFromJSONField("u64", field.index), gene: decodeFromJSONField("u256", field.gene), img: decodeFromJSONField(reified.vector(String1.reified()), field.img) } ) }

 static fromJSON( json: Record<string, any> ): BeesAddedToGenesisBasket { if (json.$typeName !== BeesAddedToGenesisBasket.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeesAddedToGenesisBasket.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeesAddedToGenesisBasket { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeesAddedToGenesisBasket(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeesAddedToGenesisBasket object`); } return BeesAddedToGenesisBasket.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeesAddedToGenesisBasket { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeesAddedToGenesisBasket(data.bcs.type)) { throw new Error(`object at is not a BeesAddedToGenesisBasket object`); }

 return BeesAddedToGenesisBasket.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeesAddedToGenesisBasket.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeesAddedToGenesisBasket> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeesAddedToGenesisBasket object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeesAddedToGenesisBasket(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeesAddedToGenesisBasket object`); }

 return BeesAddedToGenesisBasket.fromSuiObjectData( res.data ); }

 }

/* ============================== BeesManager =============================== */

export function isBeesManager(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeesManager`; }

export interface BeesManagerFields { id: ToField<UID>; configuration: ToField<Configuration>; hiveTreasury: ToField<Balance<ToPhantom<HIVE>>>; honeyTreasury: ToField<Balance<ToPhantom<HONEY>>>; beesTracker: ToField<BeesTracker>; beeTransfers: ToField<BeeTransfers>; dragonEggsBasket: ToField<Table<"u64", ToPhantom<DragonEggsBasket>>>; beeHives: ToField<LinkedTable<"u64", ToPhantom<BeeHive>>>; buidlersRoyalty: ToField<Balance<ToPhantom<SUI>>>; moduleVersion: ToField<"u64"> }

export type BeesManagerReified = Reified< BeesManager, BeesManagerFields >;

export class BeesManager implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeesManager`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeesManager.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeesManager`; readonly $typeArgs: []; readonly $isPhantom = BeesManager.$isPhantom;

 readonly id: ToField<UID>; readonly configuration: ToField<Configuration>; readonly hiveTreasury: ToField<Balance<ToPhantom<HIVE>>>; readonly honeyTreasury: ToField<Balance<ToPhantom<HONEY>>>; readonly beesTracker: ToField<BeesTracker>; readonly beeTransfers: ToField<BeeTransfers>; readonly dragonEggsBasket: ToField<Table<"u64", ToPhantom<DragonEggsBasket>>>; readonly beeHives: ToField<LinkedTable<"u64", ToPhantom<BeeHive>>>; readonly buidlersRoyalty: ToField<Balance<ToPhantom<SUI>>>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: BeesManagerFields, ) { this.$fullTypeName = composeSuiType( BeesManager.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeesManager`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.configuration = fields.configuration;; this.hiveTreasury = fields.hiveTreasury;; this.honeyTreasury = fields.honeyTreasury;; this.beesTracker = fields.beesTracker;; this.beeTransfers = fields.beeTransfers;; this.dragonEggsBasket = fields.dragonEggsBasket;; this.beeHives = fields.beeHives;; this.buidlersRoyalty = fields.buidlersRoyalty;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): BeesManagerReified { return { typeName: BeesManager.$typeName, fullTypeName: composeSuiType( BeesManager.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeesManager`, typeArgs: [ ] as [], isPhantom: BeesManager.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeesManager.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeesManager.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeesManager.fromBcs( data, ), bcs: BeesManager.bcs, fromJSONField: (field: any) => BeesManager.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeesManager.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeesManager.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeesManager.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeesManager.fetch( client, id, ), new: ( fields: BeesManagerFields, ) => { return new BeesManager( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeesManager.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeesManager>> { return phantom(BeesManager.reified( )); } static get p() { return BeesManager.phantom() }

 static get bcs() { return bcs.struct("BeesManager", {

 id: UID.bcs, configuration: Configuration.bcs, hive_treasury: Balance.bcs, honey_treasury: Balance.bcs, bees_tracker: BeesTracker.bcs, bee_transfers: BeeTransfers.bcs, dragon_eggs_basket: Table.bcs, bee_hives: LinkedTable.bcs(bcs.u64()), buidlers_royalty: Balance.bcs, module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BeesManager { return BeesManager.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), configuration: decodeFromFields(Configuration.reified(), fields.configuration), hiveTreasury: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_treasury), honeyTreasury: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_treasury), beesTracker: decodeFromFields(BeesTracker.reified(), fields.bees_tracker), beeTransfers: decodeFromFields(BeeTransfers.reified(), fields.bee_transfers), dragonEggsBasket: decodeFromFields(Table.reified(reified.phantom("u64"), reified.phantom(DragonEggsBasket.reified())), fields.dragon_eggs_basket), beeHives: decodeFromFields(LinkedTable.reified("u64", reified.phantom(BeeHive.reified())), fields.bee_hives), buidlersRoyalty: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.buidlers_royalty), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeesManager { if (!isBeesManager(item.type)) { throw new Error("not a BeesManager type");

 }

 return BeesManager.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), configuration: decodeFromFieldsWithTypes(Configuration.reified(), item.fields.configuration), hiveTreasury: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_treasury), honeyTreasury: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_treasury), beesTracker: decodeFromFieldsWithTypes(BeesTracker.reified(), item.fields.bees_tracker), beeTransfers: decodeFromFieldsWithTypes(BeeTransfers.reified(), item.fields.bee_transfers), dragonEggsBasket: decodeFromFieldsWithTypes(Table.reified(reified.phantom("u64"), reified.phantom(DragonEggsBasket.reified())), item.fields.dragon_eggs_basket), beeHives: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(BeeHive.reified())), item.fields.bee_hives), buidlersRoyalty: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.buidlers_royalty), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): BeesManager { return BeesManager.fromFields( BeesManager.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,configuration: this.configuration.toJSONField(),hiveTreasury: this.hiveTreasury.toJSONField(),honeyTreasury: this.honeyTreasury.toJSONField(),beesTracker: this.beesTracker.toJSONField(),beeTransfers: this.beeTransfers.toJSONField(),dragonEggsBasket: this.dragonEggsBasket.toJSONField(),beeHives: this.beeHives.toJSONField(),buidlersRoyalty: this.buidlersRoyalty.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeesManager { return BeesManager.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), configuration: decodeFromJSONField(Configuration.reified(), field.configuration), hiveTreasury: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveTreasury), honeyTreasury: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyTreasury), beesTracker: decodeFromJSONField(BeesTracker.reified(), field.beesTracker), beeTransfers: decodeFromJSONField(BeeTransfers.reified(), field.beeTransfers), dragonEggsBasket: decodeFromJSONField(Table.reified(reified.phantom("u64"), reified.phantom(DragonEggsBasket.reified())), field.dragonEggsBasket), beeHives: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(BeeHive.reified())), field.beeHives), buidlersRoyalty: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.buidlersRoyalty), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): BeesManager { if (json.$typeName !== BeesManager.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeesManager.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeesManager { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeesManager(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeesManager object`); } return BeesManager.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeesManager { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeesManager(data.bcs.type)) { throw new Error(`object at is not a BeesManager object`); }

 return BeesManager.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeesManager.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeesManager> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeesManager object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeesManager(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeesManager object`); }

 return BeesManager.fromSuiObjectData( res.data ); }

 }

/* ============================== BeesTracker =============================== */

export function isBeesTracker(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BeesTracker`; }

export interface BeesTrackerFields { totalEggsLaid: ToField<"u64">; beesToOwnerMap: ToField<LinkedTable<"u64", "address">>; queenBeesMap: ToField<LinkedTable<"u64", "bool">> }

export type BeesTrackerReified = Reified< BeesTracker, BeesTrackerFields >;

export class BeesTracker implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BeesTracker`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BeesTracker.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BeesTracker`; readonly $typeArgs: []; readonly $isPhantom = BeesTracker.$isPhantom;

 readonly totalEggsLaid: ToField<"u64">; readonly beesToOwnerMap: ToField<LinkedTable<"u64", "address">>; readonly queenBeesMap: ToField<LinkedTable<"u64", "bool">>

 private constructor(typeArgs: [], fields: BeesTrackerFields, ) { this.$fullTypeName = composeSuiType( BeesTracker.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BeesTracker`; this.$typeArgs = typeArgs;

 this.totalEggsLaid = fields.totalEggsLaid;; this.beesToOwnerMap = fields.beesToOwnerMap;; this.queenBeesMap = fields.queenBeesMap; }

 static reified( ): BeesTrackerReified { return { typeName: BeesTracker.$typeName, fullTypeName: composeSuiType( BeesTracker.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BeesTracker`, typeArgs: [ ] as [], isPhantom: BeesTracker.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeesTracker.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeesTracker.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeesTracker.fromBcs( data, ), bcs: BeesTracker.bcs, fromJSONField: (field: any) => BeesTracker.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeesTracker.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeesTracker.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BeesTracker.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BeesTracker.fetch( client, id, ), new: ( fields: BeesTrackerFields, ) => { return new BeesTracker( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeesTracker.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeesTracker>> { return phantom(BeesTracker.reified( )); } static get p() { return BeesTracker.phantom() }

 static get bcs() { return bcs.struct("BeesTracker", {

 total_eggs_laid: bcs.u64(), bees_to_owner_map: LinkedTable.bcs(bcs.u64()), queen_bees_map: LinkedTable.bcs(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): BeesTracker { return BeesTracker.reified( ).new( { totalEggsLaid: decodeFromFields("u64", fields.total_eggs_laid), beesToOwnerMap: decodeFromFields(LinkedTable.reified("u64", reified.phantom("address")), fields.bees_to_owner_map), queenBeesMap: decodeFromFields(LinkedTable.reified("u64", reified.phantom("bool")), fields.queen_bees_map) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeesTracker { if (!isBeesTracker(item.type)) { throw new Error("not a BeesTracker type");

 }

 return BeesTracker.reified( ).new( { totalEggsLaid: decodeFromFieldsWithTypes("u64", item.fields.total_eggs_laid), beesToOwnerMap: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("address")), item.fields.bees_to_owner_map), queenBeesMap: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("bool")), item.fields.queen_bees_map) } ) }

 static fromBcs( data: Uint8Array ): BeesTracker { return BeesTracker.fromFields( BeesTracker.bcs.parse(data) ) }

 toJSONField() { return {

 totalEggsLaid: this.totalEggsLaid.toString(),beesToOwnerMap: this.beesToOwnerMap.toJSONField(),queenBeesMap: this.queenBeesMap.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeesTracker { return BeesTracker.reified( ).new( { totalEggsLaid: decodeFromJSONField("u64", field.totalEggsLaid), beesToOwnerMap: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("address")), field.beesToOwnerMap), queenBeesMap: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("bool")), field.queenBeesMap) } ) }

 static fromJSON( json: Record<string, any> ): BeesTracker { if (json.$typeName !== BeesTracker.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeesTracker.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeesTracker { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeesTracker(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeesTracker object`); } return BeesTracker.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BeesTracker { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBeesTracker(data.bcs.type)) { throw new Error(`object at is not a BeesTracker object`); }

 return BeesTracker.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BeesTracker.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeesTracker> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeesTracker object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeesTracker(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeesTracker object`); }

 return BeesTracker.fromSuiObjectData( res.data ); }

 }

/* ============================== Bid =============================== */

export function isBid(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::Bid`; }

export interface BidFields { bidderTrainer: ToField<"address">; balance: ToField<Balance<ToPhantom<SUI>>>; offerPrice: ToField<"u64">; expirationSec: ToField<"u64">; isValid: ToField<"bool"> }

export type BidReified = Reified< Bid, BidFields >;

export class Bid implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::Bid`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Bid.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::Bid`; readonly $typeArgs: []; readonly $isPhantom = Bid.$isPhantom;

 readonly bidderTrainer: ToField<"address">; readonly balance: ToField<Balance<ToPhantom<SUI>>>; readonly offerPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">; readonly isValid: ToField<"bool">

 private constructor(typeArgs: [], fields: BidFields, ) { this.$fullTypeName = composeSuiType( Bid.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::Bid`; this.$typeArgs = typeArgs;

 this.bidderTrainer = fields.bidderTrainer;; this.balance = fields.balance;; this.offerPrice = fields.offerPrice;; this.expirationSec = fields.expirationSec;; this.isValid = fields.isValid; }

 static reified( ): BidReified { return { typeName: Bid.$typeName, fullTypeName: composeSuiType( Bid.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::Bid`, typeArgs: [ ] as [], isPhantom: Bid.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Bid.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Bid.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Bid.fromBcs( data, ), bcs: Bid.bcs, fromJSONField: (field: any) => Bid.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Bid.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Bid.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Bid.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Bid.fetch( client, id, ), new: ( fields: BidFields, ) => { return new Bid( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Bid.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Bid>> { return phantom(Bid.reified( )); } static get p() { return Bid.phantom() }

 static get bcs() { return bcs.struct("Bid", {

 bidder_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), balance: Balance.bcs, offer_price: bcs.u64(), expiration_sec: bcs.u64(), is_valid: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): Bid { return Bid.reified( ).new( { bidderTrainer: decodeFromFields("address", fields.bidder_trainer), balance: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.balance), offerPrice: decodeFromFields("u64", fields.offer_price), expirationSec: decodeFromFields("u64", fields.expiration_sec), isValid: decodeFromFields("bool", fields.is_valid) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Bid { if (!isBid(item.type)) { throw new Error("not a Bid type");

 }

 return Bid.reified( ).new( { bidderTrainer: decodeFromFieldsWithTypes("address", item.fields.bidder_trainer), balance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.balance), offerPrice: decodeFromFieldsWithTypes("u64", item.fields.offer_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec), isValid: decodeFromFieldsWithTypes("bool", item.fields.is_valid) } ) }

 static fromBcs( data: Uint8Array ): Bid { return Bid.fromFields( Bid.bcs.parse(data) ) }

 toJSONField() { return {

 bidderTrainer: this.bidderTrainer,balance: this.balance.toJSONField(),offerPrice: this.offerPrice.toString(),expirationSec: this.expirationSec.toString(),isValid: this.isValid,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Bid { return Bid.reified( ).new( { bidderTrainer: decodeFromJSONField("address", field.bidderTrainer), balance: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.balance), offerPrice: decodeFromJSONField("u64", field.offerPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec), isValid: decodeFromJSONField("bool", field.isValid) } ) }

 static fromJSON( json: Record<string, any> ): Bid { if (json.$typeName !== Bid.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Bid.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Bid { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBid(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Bid object`); } return Bid.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Bid { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBid(data.bcs.type)) { throw new Error(`object at is not a Bid object`); }

 return Bid.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Bid.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Bid> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Bid object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBid(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Bid object`); }

 return Bid.fromSuiObjectData( res.data ); }

 }

/* ============================== BidCanceled =============================== */

export function isBidCanceled(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BidCanceled`; }

export interface BidCanceledFields { version: ToField<"u64">; bidderTrainer: ToField<"address">; refundSui: ToField<"u64"> }

export type BidCanceledReified = Reified< BidCanceled, BidCanceledFields >;

export class BidCanceled implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BidCanceled`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BidCanceled.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BidCanceled`; readonly $typeArgs: []; readonly $isPhantom = BidCanceled.$isPhantom;

 readonly version: ToField<"u64">; readonly bidderTrainer: ToField<"address">; readonly refundSui: ToField<"u64">

 private constructor(typeArgs: [], fields: BidCanceledFields, ) { this.$fullTypeName = composeSuiType( BidCanceled.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BidCanceled`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.bidderTrainer = fields.bidderTrainer;; this.refundSui = fields.refundSui; }

 static reified( ): BidCanceledReified { return { typeName: BidCanceled.$typeName, fullTypeName: composeSuiType( BidCanceled.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BidCanceled`, typeArgs: [ ] as [], isPhantom: BidCanceled.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidCanceled.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidCanceled.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidCanceled.fromBcs( data, ), bcs: BidCanceled.bcs, fromJSONField: (field: any) => BidCanceled.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidCanceled.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidCanceled.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BidCanceled.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BidCanceled.fetch( client, id, ), new: ( fields: BidCanceledFields, ) => { return new BidCanceled( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidCanceled.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidCanceled>> { return phantom(BidCanceled.reified( )); } static get p() { return BidCanceled.phantom() }

 static get bcs() { return bcs.struct("BidCanceled", {

 version: bcs.u64(), bidder_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), refund_sui: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BidCanceled { return BidCanceled.reified( ).new( { version: decodeFromFields("u64", fields.version), bidderTrainer: decodeFromFields("address", fields.bidder_trainer), refundSui: decodeFromFields("u64", fields.refund_sui) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidCanceled { if (!isBidCanceled(item.type)) { throw new Error("not a BidCanceled type");

 }

 return BidCanceled.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), bidderTrainer: decodeFromFieldsWithTypes("address", item.fields.bidder_trainer), refundSui: decodeFromFieldsWithTypes("u64", item.fields.refund_sui) } ) }

 static fromBcs( data: Uint8Array ): BidCanceled { return BidCanceled.fromFields( BidCanceled.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),bidderTrainer: this.bidderTrainer,refundSui: this.refundSui.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidCanceled { return BidCanceled.reified( ).new( { version: decodeFromJSONField("u64", field.version), bidderTrainer: decodeFromJSONField("address", field.bidderTrainer), refundSui: decodeFromJSONField("u64", field.refundSui) } ) }

 static fromJSON( json: Record<string, any> ): BidCanceled { if (json.$typeName !== BidCanceled.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidCanceled.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidCanceled { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidCanceled(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidCanceled object`); } return BidCanceled.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BidCanceled { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBidCanceled(data.bcs.type)) { throw new Error(`object at is not a BidCanceled object`); }

 return BidCanceled.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BidCanceled.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidCanceled> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidCanceled object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidCanceled(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidCanceled object`); }

 return BidCanceled.fromSuiObjectData( res.data ); }

 }

/* ============================== BidDestroyed =============================== */

export function isBidDestroyed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BidDestroyed`; }

export interface BidDestroyedFields { beeVersion: ToField<"u64">; bidderTrainer: ToField<"address"> }

export type BidDestroyedReified = Reified< BidDestroyed, BidDestroyedFields >;

export class BidDestroyed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BidDestroyed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BidDestroyed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BidDestroyed`; readonly $typeArgs: []; readonly $isPhantom = BidDestroyed.$isPhantom;

 readonly beeVersion: ToField<"u64">; readonly bidderTrainer: ToField<"address">

 private constructor(typeArgs: [], fields: BidDestroyedFields, ) { this.$fullTypeName = composeSuiType( BidDestroyed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BidDestroyed`; this.$typeArgs = typeArgs;

 this.beeVersion = fields.beeVersion;; this.bidderTrainer = fields.bidderTrainer; }

 static reified( ): BidDestroyedReified { return { typeName: BidDestroyed.$typeName, fullTypeName: composeSuiType( BidDestroyed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BidDestroyed`, typeArgs: [ ] as [], isPhantom: BidDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidDestroyed.fromBcs( data, ), bcs: BidDestroyed.bcs, fromJSONField: (field: any) => BidDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidDestroyed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BidDestroyed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BidDestroyed.fetch( client, id, ), new: ( fields: BidDestroyedFields, ) => { return new BidDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidDestroyed>> { return phantom(BidDestroyed.reified( )); } static get p() { return BidDestroyed.phantom() }

 static get bcs() { return bcs.struct("BidDestroyed", {

 bee_version: bcs.u64(), bidder_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BidDestroyed { return BidDestroyed.reified( ).new( { beeVersion: decodeFromFields("u64", fields.bee_version), bidderTrainer: decodeFromFields("address", fields.bidder_trainer) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidDestroyed { if (!isBidDestroyed(item.type)) { throw new Error("not a BidDestroyed type");

 }

 return BidDestroyed.reified( ).new( { beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), bidderTrainer: decodeFromFieldsWithTypes("address", item.fields.bidder_trainer) } ) }

 static fromBcs( data: Uint8Array ): BidDestroyed { return BidDestroyed.fromFields( BidDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 beeVersion: this.beeVersion.toString(),bidderTrainer: this.bidderTrainer,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidDestroyed { return BidDestroyed.reified( ).new( { beeVersion: decodeFromJSONField("u64", field.beeVersion), bidderTrainer: decodeFromJSONField("address", field.bidderTrainer) } ) }

 static fromJSON( json: Record<string, any> ): BidDestroyed { if (json.$typeName !== BidDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidDestroyed object`); } return BidDestroyed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BidDestroyed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBidDestroyed(data.bcs.type)) { throw new Error(`object at is not a BidDestroyed object`); }

 return BidDestroyed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BidDestroyed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidDestroyed object`); }

 return BidDestroyed.fromSuiObjectData( res.data ); }

 }

/* ============================== BidExpired =============================== */

export function isBidExpired(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BidExpired`; }

export interface BidExpiredFields { version: ToField<"u64">; bidderTrainer: ToField<"address">; refundSui: ToField<"u64"> }

export type BidExpiredReified = Reified< BidExpired, BidExpiredFields >;

export class BidExpired implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BidExpired`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BidExpired.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BidExpired`; readonly $typeArgs: []; readonly $isPhantom = BidExpired.$isPhantom;

 readonly version: ToField<"u64">; readonly bidderTrainer: ToField<"address">; readonly refundSui: ToField<"u64">

 private constructor(typeArgs: [], fields: BidExpiredFields, ) { this.$fullTypeName = composeSuiType( BidExpired.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BidExpired`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.bidderTrainer = fields.bidderTrainer;; this.refundSui = fields.refundSui; }

 static reified( ): BidExpiredReified { return { typeName: BidExpired.$typeName, fullTypeName: composeSuiType( BidExpired.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BidExpired`, typeArgs: [ ] as [], isPhantom: BidExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidExpired.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidExpired.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidExpired.fromBcs( data, ), bcs: BidExpired.bcs, fromJSONField: (field: any) => BidExpired.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidExpired.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidExpired.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BidExpired.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BidExpired.fetch( client, id, ), new: ( fields: BidExpiredFields, ) => { return new BidExpired( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidExpired.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidExpired>> { return phantom(BidExpired.reified( )); } static get p() { return BidExpired.phantom() }

 static get bcs() { return bcs.struct("BidExpired", {

 version: bcs.u64(), bidder_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), refund_sui: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BidExpired { return BidExpired.reified( ).new( { version: decodeFromFields("u64", fields.version), bidderTrainer: decodeFromFields("address", fields.bidder_trainer), refundSui: decodeFromFields("u64", fields.refund_sui) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidExpired { if (!isBidExpired(item.type)) { throw new Error("not a BidExpired type");

 }

 return BidExpired.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), bidderTrainer: decodeFromFieldsWithTypes("address", item.fields.bidder_trainer), refundSui: decodeFromFieldsWithTypes("u64", item.fields.refund_sui) } ) }

 static fromBcs( data: Uint8Array ): BidExpired { return BidExpired.fromFields( BidExpired.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),bidderTrainer: this.bidderTrainer,refundSui: this.refundSui.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidExpired { return BidExpired.reified( ).new( { version: decodeFromJSONField("u64", field.version), bidderTrainer: decodeFromJSONField("address", field.bidderTrainer), refundSui: decodeFromJSONField("u64", field.refundSui) } ) }

 static fromJSON( json: Record<string, any> ): BidExpired { if (json.$typeName !== BidExpired.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidExpired.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidExpired { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidExpired(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidExpired object`); } return BidExpired.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BidExpired { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBidExpired(data.bcs.type)) { throw new Error(`object at is not a BidExpired object`); }

 return BidExpired.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BidExpired.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidExpired> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidExpired object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidExpired(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidExpired object`); }

 return BidExpired.fromSuiObjectData( res.data ); }

 }

/* ============================== BidMarkedInvalid =============================== */

export function isBidMarkedInvalid(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BidMarkedInvalid`; }

export interface BidMarkedInvalidFields { version: ToField<"u64">; bidderTrainer: ToField<"address"> }

export type BidMarkedInvalidReified = Reified< BidMarkedInvalid, BidMarkedInvalidFields >;

export class BidMarkedInvalid implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BidMarkedInvalid`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BidMarkedInvalid.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BidMarkedInvalid`; readonly $typeArgs: []; readonly $isPhantom = BidMarkedInvalid.$isPhantom;

 readonly version: ToField<"u64">; readonly bidderTrainer: ToField<"address">

 private constructor(typeArgs: [], fields: BidMarkedInvalidFields, ) { this.$fullTypeName = composeSuiType( BidMarkedInvalid.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BidMarkedInvalid`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.bidderTrainer = fields.bidderTrainer; }

 static reified( ): BidMarkedInvalidReified { return { typeName: BidMarkedInvalid.$typeName, fullTypeName: composeSuiType( BidMarkedInvalid.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BidMarkedInvalid`, typeArgs: [ ] as [], isPhantom: BidMarkedInvalid.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidMarkedInvalid.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidMarkedInvalid.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidMarkedInvalid.fromBcs( data, ), bcs: BidMarkedInvalid.bcs, fromJSONField: (field: any) => BidMarkedInvalid.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidMarkedInvalid.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidMarkedInvalid.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BidMarkedInvalid.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BidMarkedInvalid.fetch( client, id, ), new: ( fields: BidMarkedInvalidFields, ) => { return new BidMarkedInvalid( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidMarkedInvalid.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidMarkedInvalid>> { return phantom(BidMarkedInvalid.reified( )); } static get p() { return BidMarkedInvalid.phantom() }

 static get bcs() { return bcs.struct("BidMarkedInvalid", {

 version: bcs.u64(), bidder_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BidMarkedInvalid { return BidMarkedInvalid.reified( ).new( { version: decodeFromFields("u64", fields.version), bidderTrainer: decodeFromFields("address", fields.bidder_trainer) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidMarkedInvalid { if (!isBidMarkedInvalid(item.type)) { throw new Error("not a BidMarkedInvalid type");

 }

 return BidMarkedInvalid.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), bidderTrainer: decodeFromFieldsWithTypes("address", item.fields.bidder_trainer) } ) }

 static fromBcs( data: Uint8Array ): BidMarkedInvalid { return BidMarkedInvalid.fromFields( BidMarkedInvalid.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),bidderTrainer: this.bidderTrainer,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidMarkedInvalid { return BidMarkedInvalid.reified( ).new( { version: decodeFromJSONField("u64", field.version), bidderTrainer: decodeFromJSONField("address", field.bidderTrainer) } ) }

 static fromJSON( json: Record<string, any> ): BidMarkedInvalid { if (json.$typeName !== BidMarkedInvalid.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidMarkedInvalid.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidMarkedInvalid { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidMarkedInvalid(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidMarkedInvalid object`); } return BidMarkedInvalid.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BidMarkedInvalid { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBidMarkedInvalid(data.bcs.type)) { throw new Error(`object at is not a BidMarkedInvalid object`); }

 return BidMarkedInvalid.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BidMarkedInvalid.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidMarkedInvalid> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidMarkedInvalid object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidMarkedInvalid(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidMarkedInvalid object`); }

 return BidMarkedInvalid.fromSuiObjectData( res.data ); }

 }

/* ============================== BidPlaced =============================== */

export function isBidPlaced(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BidPlaced`; }

export interface BidPlacedFields { bidderTrainer: ToField<"address">; username: ToField<String>; version: ToField<"u64">; offerPrice: ToField<"u64">; expirationSec: ToField<"u64"> }

export type BidPlacedReified = Reified< BidPlaced, BidPlacedFields >;

export class BidPlaced implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BidPlaced`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BidPlaced.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BidPlaced`; readonly $typeArgs: []; readonly $isPhantom = BidPlaced.$isPhantom;

 readonly bidderTrainer: ToField<"address">; readonly username: ToField<String>; readonly version: ToField<"u64">; readonly offerPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: BidPlacedFields, ) { this.$fullTypeName = composeSuiType( BidPlaced.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BidPlaced`; this.$typeArgs = typeArgs;

 this.bidderTrainer = fields.bidderTrainer;; this.username = fields.username;; this.version = fields.version;; this.offerPrice = fields.offerPrice;; this.expirationSec = fields.expirationSec; }

 static reified( ): BidPlacedReified { return { typeName: BidPlaced.$typeName, fullTypeName: composeSuiType( BidPlaced.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BidPlaced`, typeArgs: [ ] as [], isPhantom: BidPlaced.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidPlaced.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidPlaced.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidPlaced.fromBcs( data, ), bcs: BidPlaced.bcs, fromJSONField: (field: any) => BidPlaced.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidPlaced.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidPlaced.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BidPlaced.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BidPlaced.fetch( client, id, ), new: ( fields: BidPlacedFields, ) => { return new BidPlaced( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidPlaced.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidPlaced>> { return phantom(BidPlaced.reified( )); } static get p() { return BidPlaced.phantom() }

 static get bcs() { return bcs.struct("BidPlaced", {

 bidder_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, version: bcs.u64(), offer_price: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BidPlaced { return BidPlaced.reified( ).new( { bidderTrainer: decodeFromFields("address", fields.bidder_trainer), username: decodeFromFields(String.reified(), fields.username), version: decodeFromFields("u64", fields.version), offerPrice: decodeFromFields("u64", fields.offer_price), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidPlaced { if (!isBidPlaced(item.type)) { throw new Error("not a BidPlaced type");

 }

 return BidPlaced.reified( ).new( { bidderTrainer: decodeFromFieldsWithTypes("address", item.fields.bidder_trainer), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), version: decodeFromFieldsWithTypes("u64", item.fields.version), offerPrice: decodeFromFieldsWithTypes("u64", item.fields.offer_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): BidPlaced { return BidPlaced.fromFields( BidPlaced.bcs.parse(data) ) }

 toJSONField() { return {

 bidderTrainer: this.bidderTrainer,username: this.username,version: this.version.toString(),offerPrice: this.offerPrice.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidPlaced { return BidPlaced.reified( ).new( { bidderTrainer: decodeFromJSONField("address", field.bidderTrainer), username: decodeFromJSONField(String.reified(), field.username), version: decodeFromJSONField("u64", field.version), offerPrice: decodeFromJSONField("u64", field.offerPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): BidPlaced { if (json.$typeName !== BidPlaced.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidPlaced.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidPlaced { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidPlaced(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidPlaced object`); } return BidPlaced.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BidPlaced { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBidPlaced(data.bcs.type)) { throw new Error(`object at is not a BidPlaced object`); }

 return BidPlaced.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BidPlaced.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidPlaced> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidPlaced object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidPlaced(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidPlaced object`); }

 return BidPlaced.fromSuiObjectData( res.data ); }

 }

/* ============================== BidRecord =============================== */

export function isBidRecord(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BidRecord`; }

export interface BidRecordFields { version: ToField<"u64">; offerPrice: ToField<"u64">; expirationSec: ToField<"u64"> }

export type BidRecordReified = Reified< BidRecord, BidRecordFields >;

export class BidRecord implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BidRecord`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BidRecord.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BidRecord`; readonly $typeArgs: []; readonly $isPhantom = BidRecord.$isPhantom;

 readonly version: ToField<"u64">; readonly offerPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: BidRecordFields, ) { this.$fullTypeName = composeSuiType( BidRecord.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BidRecord`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.offerPrice = fields.offerPrice;; this.expirationSec = fields.expirationSec; }

 static reified( ): BidRecordReified { return { typeName: BidRecord.$typeName, fullTypeName: composeSuiType( BidRecord.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BidRecord`, typeArgs: [ ] as [], isPhantom: BidRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidRecord.fromBcs( data, ), bcs: BidRecord.bcs, fromJSONField: (field: any) => BidRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidRecord.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BidRecord.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BidRecord.fetch( client, id, ), new: ( fields: BidRecordFields, ) => { return new BidRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidRecord>> { return phantom(BidRecord.reified( )); } static get p() { return BidRecord.phantom() }

 static get bcs() { return bcs.struct("BidRecord", {

 version: bcs.u64(), offer_price: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BidRecord { return BidRecord.reified( ).new( { version: decodeFromFields("u64", fields.version), offerPrice: decodeFromFields("u64", fields.offer_price), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidRecord { if (!isBidRecord(item.type)) { throw new Error("not a BidRecord type");

 }

 return BidRecord.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), offerPrice: decodeFromFieldsWithTypes("u64", item.fields.offer_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): BidRecord { return BidRecord.fromFields( BidRecord.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),offerPrice: this.offerPrice.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidRecord { return BidRecord.reified( ).new( { version: decodeFromJSONField("u64", field.version), offerPrice: decodeFromJSONField("u64", field.offerPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): BidRecord { if (json.$typeName !== BidRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidRecord object`); } return BidRecord.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BidRecord { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBidRecord(data.bcs.type)) { throw new Error(`object at is not a BidRecord object`); }

 return BidRecord.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BidRecord.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidRecord object`); }

 return BidRecord.fromSuiObjectData( res.data ); }

 }

/* ============================== BirthCertificate =============================== */

export function isBirthCertificate(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BirthCertificate`; }

export interface BirthCertificateFields { generation: ToField<"u64">; birthTime: ToField<"u64">; birtherTrainer: ToField<"address">; queenId: ToField<Option<"address">>; stingerId: ToField<Option<"address">> }

export type BirthCertificateReified = Reified< BirthCertificate, BirthCertificateFields >;

export class BirthCertificate implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BirthCertificate`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BirthCertificate.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BirthCertificate`; readonly $typeArgs: []; readonly $isPhantom = BirthCertificate.$isPhantom;

 readonly generation: ToField<"u64">; readonly birthTime: ToField<"u64">; readonly birtherTrainer: ToField<"address">; readonly queenId: ToField<Option<"address">>; readonly stingerId: ToField<Option<"address">>

 private constructor(typeArgs: [], fields: BirthCertificateFields, ) { this.$fullTypeName = composeSuiType( BirthCertificate.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BirthCertificate`; this.$typeArgs = typeArgs;

 this.generation = fields.generation;; this.birthTime = fields.birthTime;; this.birtherTrainer = fields.birtherTrainer;; this.queenId = fields.queenId;; this.stingerId = fields.stingerId; }

 static reified( ): BirthCertificateReified { return { typeName: BirthCertificate.$typeName, fullTypeName: composeSuiType( BirthCertificate.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BirthCertificate`, typeArgs: [ ] as [], isPhantom: BirthCertificate.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BirthCertificate.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BirthCertificate.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BirthCertificate.fromBcs( data, ), bcs: BirthCertificate.bcs, fromJSONField: (field: any) => BirthCertificate.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BirthCertificate.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BirthCertificate.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BirthCertificate.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BirthCertificate.fetch( client, id, ), new: ( fields: BirthCertificateFields, ) => { return new BirthCertificate( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BirthCertificate.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BirthCertificate>> { return phantom(BirthCertificate.reified( )); } static get p() { return BirthCertificate.phantom() }

 static get bcs() { return bcs.struct("BirthCertificate", {

 generation: bcs.u64(), birth_time: bcs.u64(), birther_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), queenId: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), stingerId: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

}) };

 static fromFields( fields: Record<string, any> ): BirthCertificate { return BirthCertificate.reified( ).new( { generation: decodeFromFields("u64", fields.generation), birthTime: decodeFromFields("u64", fields.birth_time), birtherTrainer: decodeFromFields("address", fields.birther_trainer), queenId: decodeFromFields(Option.reified("address"), fields.queenId), stingerId: decodeFromFields(Option.reified("address"), fields.stingerId) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BirthCertificate { if (!isBirthCertificate(item.type)) { throw new Error("not a BirthCertificate type");

 }

 return BirthCertificate.reified( ).new( { generation: decodeFromFieldsWithTypes("u64", item.fields.generation), birthTime: decodeFromFieldsWithTypes("u64", item.fields.birth_time), birtherTrainer: decodeFromFieldsWithTypes("address", item.fields.birther_trainer), queenId: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.queenId), stingerId: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.stingerId) } ) }

 static fromBcs( data: Uint8Array ): BirthCertificate { return BirthCertificate.fromFields( BirthCertificate.bcs.parse(data) ) }

 toJSONField() { return {

 generation: this.generation.toString(),birthTime: this.birthTime.toString(),birtherTrainer: this.birtherTrainer,queenId: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.queenId),stingerId: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.stingerId),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BirthCertificate { return BirthCertificate.reified( ).new( { generation: decodeFromJSONField("u64", field.generation), birthTime: decodeFromJSONField("u64", field.birthTime), birtherTrainer: decodeFromJSONField("address", field.birtherTrainer), queenId: decodeFromJSONField(Option.reified("address"), field.queenId), stingerId: decodeFromJSONField(Option.reified("address"), field.stingerId) } ) }

 static fromJSON( json: Record<string, any> ): BirthCertificate { if (json.$typeName !== BirthCertificate.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BirthCertificate.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BirthCertificate { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBirthCertificate(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BirthCertificate object`); } return BirthCertificate.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BirthCertificate { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBirthCertificate(data.bcs.type)) { throw new Error(`object at is not a BirthCertificate object`); }

 return BirthCertificate.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BirthCertificate.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BirthCertificate> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BirthCertificate object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBirthCertificate(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BirthCertificate object`); }

 return BirthCertificate.fromSuiObjectData( res.data ); }

 }

/* ============================== BreedingRequestProcessed =============================== */

export function isBreedingRequestProcessed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BreedingRequestProcessed`; }

export interface BreedingRequestProcessedFields { queenVersion: ToField<"u64">; stingerIndex: ToField<"u64">; img: ToField<Vector<String1>> }

export type BreedingRequestProcessedReified = Reified< BreedingRequestProcessed, BreedingRequestProcessedFields >;

export class BreedingRequestProcessed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BreedingRequestProcessed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BreedingRequestProcessed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BreedingRequestProcessed`; readonly $typeArgs: []; readonly $isPhantom = BreedingRequestProcessed.$isPhantom;

 readonly queenVersion: ToField<"u64">; readonly stingerIndex: ToField<"u64">; readonly img: ToField<Vector<String1>>

 private constructor(typeArgs: [], fields: BreedingRequestProcessedFields, ) { this.$fullTypeName = composeSuiType( BreedingRequestProcessed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BreedingRequestProcessed`; this.$typeArgs = typeArgs;

 this.queenVersion = fields.queenVersion;; this.stingerIndex = fields.stingerIndex;; this.img = fields.img; }

 static reified( ): BreedingRequestProcessedReified { return { typeName: BreedingRequestProcessed.$typeName, fullTypeName: composeSuiType( BreedingRequestProcessed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BreedingRequestProcessed`, typeArgs: [ ] as [], isPhantom: BreedingRequestProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BreedingRequestProcessed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BreedingRequestProcessed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BreedingRequestProcessed.fromBcs( data, ), bcs: BreedingRequestProcessed.bcs, fromJSONField: (field: any) => BreedingRequestProcessed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BreedingRequestProcessed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BreedingRequestProcessed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BreedingRequestProcessed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BreedingRequestProcessed.fetch( client, id, ), new: ( fields: BreedingRequestProcessedFields, ) => { return new BreedingRequestProcessed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BreedingRequestProcessed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BreedingRequestProcessed>> { return phantom(BreedingRequestProcessed.reified( )); } static get p() { return BreedingRequestProcessed.phantom() }

 static get bcs() { return bcs.struct("BreedingRequestProcessed", {

 queen_version: bcs.u64(), stinger_index: bcs.u64(), img: bcs.vector(String1.bcs)

}) };

 static fromFields( fields: Record<string, any> ): BreedingRequestProcessed { return BreedingRequestProcessed.reified( ).new( { queenVersion: decodeFromFields("u64", fields.queen_version), stingerIndex: decodeFromFields("u64", fields.stinger_index), img: decodeFromFields(reified.vector(String1.reified()), fields.img) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BreedingRequestProcessed { if (!isBreedingRequestProcessed(item.type)) { throw new Error("not a BreedingRequestProcessed type");

 }

 return BreedingRequestProcessed.reified( ).new( { queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), stingerIndex: decodeFromFieldsWithTypes("u64", item.fields.stinger_index), img: decodeFromFieldsWithTypes(reified.vector(String1.reified()), item.fields.img) } ) }

 static fromBcs( data: Uint8Array ): BreedingRequestProcessed { return BreedingRequestProcessed.fromFields( BreedingRequestProcessed.bcs.parse(data) ) }

 toJSONField() { return {

 queenVersion: this.queenVersion.toString(),stingerIndex: this.stingerIndex.toString(),img: fieldToJSON<Vector<String1>>(`vector<${String1.$typeName}>`, this.img),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BreedingRequestProcessed { return BreedingRequestProcessed.reified( ).new( { queenVersion: decodeFromJSONField("u64", field.queenVersion), stingerIndex: decodeFromJSONField("u64", field.stingerIndex), img: decodeFromJSONField(reified.vector(String1.reified()), field.img) } ) }

 static fromJSON( json: Record<string, any> ): BreedingRequestProcessed { if (json.$typeName !== BreedingRequestProcessed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BreedingRequestProcessed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BreedingRequestProcessed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBreedingRequestProcessed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BreedingRequestProcessed object`); } return BreedingRequestProcessed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BreedingRequestProcessed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBreedingRequestProcessed(data.bcs.type)) { throw new Error(`object at is not a BreedingRequestProcessed object`); }

 return BreedingRequestProcessed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BreedingRequestProcessed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BreedingRequestProcessed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BreedingRequestProcessed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBreedingRequestProcessed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BreedingRequestProcessed object`); }

 return BreedingRequestProcessed.fromSuiObjectData( res.data ); }

 }

/* ============================== BreedingRequestUnprocessed =============================== */

export function isBreedingRequestUnprocessed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BreedingRequestUnprocessed`; }

export interface BreedingRequestUnprocessedFields { queenVersion: ToField<"u64">; stingerIndex: ToField<"u64"> }

export type BreedingRequestUnprocessedReified = Reified< BreedingRequestUnprocessed, BreedingRequestUnprocessedFields >;

export class BreedingRequestUnprocessed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BreedingRequestUnprocessed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BreedingRequestUnprocessed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BreedingRequestUnprocessed`; readonly $typeArgs: []; readonly $isPhantom = BreedingRequestUnprocessed.$isPhantom;

 readonly queenVersion: ToField<"u64">; readonly stingerIndex: ToField<"u64">

 private constructor(typeArgs: [], fields: BreedingRequestUnprocessedFields, ) { this.$fullTypeName = composeSuiType( BreedingRequestUnprocessed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BreedingRequestUnprocessed`; this.$typeArgs = typeArgs;

 this.queenVersion = fields.queenVersion;; this.stingerIndex = fields.stingerIndex; }

 static reified( ): BreedingRequestUnprocessedReified { return { typeName: BreedingRequestUnprocessed.$typeName, fullTypeName: composeSuiType( BreedingRequestUnprocessed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BreedingRequestUnprocessed`, typeArgs: [ ] as [], isPhantom: BreedingRequestUnprocessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BreedingRequestUnprocessed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BreedingRequestUnprocessed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BreedingRequestUnprocessed.fromBcs( data, ), bcs: BreedingRequestUnprocessed.bcs, fromJSONField: (field: any) => BreedingRequestUnprocessed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BreedingRequestUnprocessed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BreedingRequestUnprocessed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BreedingRequestUnprocessed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BreedingRequestUnprocessed.fetch( client, id, ), new: ( fields: BreedingRequestUnprocessedFields, ) => { return new BreedingRequestUnprocessed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BreedingRequestUnprocessed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BreedingRequestUnprocessed>> { return phantom(BreedingRequestUnprocessed.reified( )); } static get p() { return BreedingRequestUnprocessed.phantom() }

 static get bcs() { return bcs.struct("BreedingRequestUnprocessed", {

 queen_version: bcs.u64(), stinger_index: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BreedingRequestUnprocessed { return BreedingRequestUnprocessed.reified( ).new( { queenVersion: decodeFromFields("u64", fields.queen_version), stingerIndex: decodeFromFields("u64", fields.stinger_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BreedingRequestUnprocessed { if (!isBreedingRequestUnprocessed(item.type)) { throw new Error("not a BreedingRequestUnprocessed type");

 }

 return BreedingRequestUnprocessed.reified( ).new( { queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), stingerIndex: decodeFromFieldsWithTypes("u64", item.fields.stinger_index) } ) }

 static fromBcs( data: Uint8Array ): BreedingRequestUnprocessed { return BreedingRequestUnprocessed.fromFields( BreedingRequestUnprocessed.bcs.parse(data) ) }

 toJSONField() { return {

 queenVersion: this.queenVersion.toString(),stingerIndex: this.stingerIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BreedingRequestUnprocessed { return BreedingRequestUnprocessed.reified( ).new( { queenVersion: decodeFromJSONField("u64", field.queenVersion), stingerIndex: decodeFromJSONField("u64", field.stingerIndex) } ) }

 static fromJSON( json: Record<string, any> ): BreedingRequestUnprocessed { if (json.$typeName !== BreedingRequestUnprocessed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BreedingRequestUnprocessed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BreedingRequestUnprocessed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBreedingRequestUnprocessed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BreedingRequestUnprocessed object`); } return BreedingRequestUnprocessed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BreedingRequestUnprocessed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBreedingRequestUnprocessed(data.bcs.type)) { throw new Error(`object at is not a BreedingRequestUnprocessed object`); }

 return BreedingRequestUnprocessed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BreedingRequestUnprocessed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BreedingRequestUnprocessed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BreedingRequestUnprocessed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBreedingRequestUnprocessed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BreedingRequestUnprocessed object`); }

 return BreedingRequestUnprocessed.fromSuiObjectData( res.data ); }

 }

/* ============================== BreedingRoyalty =============================== */

export function isBreedingRoyalty(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BreedingRoyalty`; }

export interface BreedingRoyaltyFields { platformFeesPct: ToField<"u64">; govYieldPct: ToField<"u64">; treasuryPct: ToField<"u64"> }

export type BreedingRoyaltyReified = Reified< BreedingRoyalty, BreedingRoyaltyFields >;

export class BreedingRoyalty implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BreedingRoyalty`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BreedingRoyalty.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BreedingRoyalty`; readonly $typeArgs: []; readonly $isPhantom = BreedingRoyalty.$isPhantom;

 readonly platformFeesPct: ToField<"u64">; readonly govYieldPct: ToField<"u64">; readonly treasuryPct: ToField<"u64">

 private constructor(typeArgs: [], fields: BreedingRoyaltyFields, ) { this.$fullTypeName = composeSuiType( BreedingRoyalty.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BreedingRoyalty`; this.$typeArgs = typeArgs;

 this.platformFeesPct = fields.platformFeesPct;; this.govYieldPct = fields.govYieldPct;; this.treasuryPct = fields.treasuryPct; }

 static reified( ): BreedingRoyaltyReified { return { typeName: BreedingRoyalty.$typeName, fullTypeName: composeSuiType( BreedingRoyalty.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BreedingRoyalty`, typeArgs: [ ] as [], isPhantom: BreedingRoyalty.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BreedingRoyalty.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BreedingRoyalty.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BreedingRoyalty.fromBcs( data, ), bcs: BreedingRoyalty.bcs, fromJSONField: (field: any) => BreedingRoyalty.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BreedingRoyalty.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BreedingRoyalty.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BreedingRoyalty.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BreedingRoyalty.fetch( client, id, ), new: ( fields: BreedingRoyaltyFields, ) => { return new BreedingRoyalty( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BreedingRoyalty.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BreedingRoyalty>> { return phantom(BreedingRoyalty.reified( )); } static get p() { return BreedingRoyalty.phantom() }

 static get bcs() { return bcs.struct("BreedingRoyalty", {

 platform_fees_pct: bcs.u64(), gov_yield_pct: bcs.u64(), treasury_pct: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BreedingRoyalty { return BreedingRoyalty.reified( ).new( { platformFeesPct: decodeFromFields("u64", fields.platform_fees_pct), govYieldPct: decodeFromFields("u64", fields.gov_yield_pct), treasuryPct: decodeFromFields("u64", fields.treasury_pct) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BreedingRoyalty { if (!isBreedingRoyalty(item.type)) { throw new Error("not a BreedingRoyalty type");

 }

 return BreedingRoyalty.reified( ).new( { platformFeesPct: decodeFromFieldsWithTypes("u64", item.fields.platform_fees_pct), govYieldPct: decodeFromFieldsWithTypes("u64", item.fields.gov_yield_pct), treasuryPct: decodeFromFieldsWithTypes("u64", item.fields.treasury_pct) } ) }

 static fromBcs( data: Uint8Array ): BreedingRoyalty { return BreedingRoyalty.fromFields( BreedingRoyalty.bcs.parse(data) ) }

 toJSONField() { return {

 platformFeesPct: this.platformFeesPct.toString(),govYieldPct: this.govYieldPct.toString(),treasuryPct: this.treasuryPct.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BreedingRoyalty { return BreedingRoyalty.reified( ).new( { platformFeesPct: decodeFromJSONField("u64", field.platformFeesPct), govYieldPct: decodeFromJSONField("u64", field.govYieldPct), treasuryPct: decodeFromJSONField("u64", field.treasuryPct) } ) }

 static fromJSON( json: Record<string, any> ): BreedingRoyalty { if (json.$typeName !== BreedingRoyalty.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BreedingRoyalty.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BreedingRoyalty { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBreedingRoyalty(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BreedingRoyalty object`); } return BreedingRoyalty.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BreedingRoyalty { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBreedingRoyalty(data.bcs.type)) { throw new Error(`object at is not a BreedingRoyalty object`); }

 return BreedingRoyalty.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BreedingRoyalty.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BreedingRoyalty> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BreedingRoyalty object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBreedingRoyalty(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BreedingRoyalty object`); }

 return BreedingRoyalty.fromSuiObjectData( res.data ); }

 }

/* ============================== BuidlersYieldHarvested =============================== */

export function isBuidlersYieldHarvested(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::BuidlersYieldHarvested`; }

export interface BuidlersYieldHarvestedFields { suiYield: ToField<"u64">; receiver: ToField<"address"> }

export type BuidlersYieldHarvestedReified = Reified< BuidlersYieldHarvested, BuidlersYieldHarvestedFields >;

export class BuidlersYieldHarvested implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::BuidlersYieldHarvested`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BuidlersYieldHarvested.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::BuidlersYieldHarvested`; readonly $typeArgs: []; readonly $isPhantom = BuidlersYieldHarvested.$isPhantom;

 readonly suiYield: ToField<"u64">; readonly receiver: ToField<"address">

 private constructor(typeArgs: [], fields: BuidlersYieldHarvestedFields, ) { this.$fullTypeName = composeSuiType( BuidlersYieldHarvested.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::BuidlersYieldHarvested`; this.$typeArgs = typeArgs;

 this.suiYield = fields.suiYield;; this.receiver = fields.receiver; }

 static reified( ): BuidlersYieldHarvestedReified { return { typeName: BuidlersYieldHarvested.$typeName, fullTypeName: composeSuiType( BuidlersYieldHarvested.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::BuidlersYieldHarvested`, typeArgs: [ ] as [], isPhantom: BuidlersYieldHarvested.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BuidlersYieldHarvested.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BuidlersYieldHarvested.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BuidlersYieldHarvested.fromBcs( data, ), bcs: BuidlersYieldHarvested.bcs, fromJSONField: (field: any) => BuidlersYieldHarvested.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BuidlersYieldHarvested.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BuidlersYieldHarvested.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BuidlersYieldHarvested.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BuidlersYieldHarvested.fetch( client, id, ), new: ( fields: BuidlersYieldHarvestedFields, ) => { return new BuidlersYieldHarvested( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BuidlersYieldHarvested.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BuidlersYieldHarvested>> { return phantom(BuidlersYieldHarvested.reified( )); } static get p() { return BuidlersYieldHarvested.phantom() }

 static get bcs() { return bcs.struct("BuidlersYieldHarvested", {

 sui_yield: bcs.u64(), receiver: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BuidlersYieldHarvested { return BuidlersYieldHarvested.reified( ).new( { suiYield: decodeFromFields("u64", fields.sui_yield), receiver: decodeFromFields("address", fields.receiver) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BuidlersYieldHarvested { if (!isBuidlersYieldHarvested(item.type)) { throw new Error("not a BuidlersYieldHarvested type");

 }

 return BuidlersYieldHarvested.reified( ).new( { suiYield: decodeFromFieldsWithTypes("u64", item.fields.sui_yield), receiver: decodeFromFieldsWithTypes("address", item.fields.receiver) } ) }

 static fromBcs( data: Uint8Array ): BuidlersYieldHarvested { return BuidlersYieldHarvested.fromFields( BuidlersYieldHarvested.bcs.parse(data) ) }

 toJSONField() { return {

 suiYield: this.suiYield.toString(),receiver: this.receiver,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BuidlersYieldHarvested { return BuidlersYieldHarvested.reified( ).new( { suiYield: decodeFromJSONField("u64", field.suiYield), receiver: decodeFromJSONField("address", field.receiver) } ) }

 static fromJSON( json: Record<string, any> ): BuidlersYieldHarvested { if (json.$typeName !== BuidlersYieldHarvested.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BuidlersYieldHarvested.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BuidlersYieldHarvested { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBuidlersYieldHarvested(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BuidlersYieldHarvested object`); } return BuidlersYieldHarvested.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BuidlersYieldHarvested { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBuidlersYieldHarvested(data.bcs.type)) { throw new Error(`object at is not a BuidlersYieldHarvested object`); }

 return BuidlersYieldHarvested.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BuidlersYieldHarvested.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BuidlersYieldHarvested> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BuidlersYieldHarvested object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBuidlersYieldHarvested(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BuidlersYieldHarvested object`); }

 return BuidlersYieldHarvested.fromSuiObjectData( res.data ); }

 }

/* ============================== CapabilityAdded =============================== */

export function isCapabilityAdded(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::CapabilityAdded`; }

export interface CapabilityAddedFields { version: ToField<"u64">; slot: ToField<"u64">; capabilityType: ToField<"u8">; healthImpactPct: ToField<"u64">; energyCostPct: ToField<"u64">; attempts: ToField<"u64">; cooldown: ToField<"u64">; nextUseTs: ToField<"u64">; baseAttempts: ToField<"u64"> }

export type CapabilityAddedReified = Reified< CapabilityAdded, CapabilityAddedFields >;

export class CapabilityAdded implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::CapabilityAdded`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = CapabilityAdded.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::CapabilityAdded`; readonly $typeArgs: []; readonly $isPhantom = CapabilityAdded.$isPhantom;

 readonly version: ToField<"u64">; readonly slot: ToField<"u64">; readonly capabilityType: ToField<"u8">; readonly healthImpactPct: ToField<"u64">; readonly energyCostPct: ToField<"u64">; readonly attempts: ToField<"u64">; readonly cooldown: ToField<"u64">; readonly nextUseTs: ToField<"u64">; readonly baseAttempts: ToField<"u64">

 private constructor(typeArgs: [], fields: CapabilityAddedFields, ) { this.$fullTypeName = composeSuiType( CapabilityAdded.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::CapabilityAdded`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.slot = fields.slot;; this.capabilityType = fields.capabilityType;; this.healthImpactPct = fields.healthImpactPct;; this.energyCostPct = fields.energyCostPct;; this.attempts = fields.attempts;; this.cooldown = fields.cooldown;; this.nextUseTs = fields.nextUseTs;; this.baseAttempts = fields.baseAttempts; }

 static reified( ): CapabilityAddedReified { return { typeName: CapabilityAdded.$typeName, fullTypeName: composeSuiType( CapabilityAdded.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::CapabilityAdded`, typeArgs: [ ] as [], isPhantom: CapabilityAdded.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CapabilityAdded.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CapabilityAdded.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => CapabilityAdded.fromBcs( data, ), bcs: CapabilityAdded.bcs, fromJSONField: (field: any) => CapabilityAdded.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => CapabilityAdded.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => CapabilityAdded.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => CapabilityAdded.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => CapabilityAdded.fetch( client, id, ), new: ( fields: CapabilityAddedFields, ) => { return new CapabilityAdded( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return CapabilityAdded.reified() }

 static phantom( ): PhantomReified<ToTypeStr<CapabilityAdded>> { return phantom(CapabilityAdded.reified( )); } static get p() { return CapabilityAdded.phantom() }

 static get bcs() { return bcs.struct("CapabilityAdded", {

 version: bcs.u64(), slot: bcs.u64(), capability_type: bcs.u8(), health_impact_pct: bcs.u64(), energy_cost_pct: bcs.u64(), attempts: bcs.u64(), cooldown: bcs.u64(), next_use_ts: bcs.u64(), base_attempts: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): CapabilityAdded { return CapabilityAdded.reified( ).new( { version: decodeFromFields("u64", fields.version), slot: decodeFromFields("u64", fields.slot), capabilityType: decodeFromFields("u8", fields.capability_type), healthImpactPct: decodeFromFields("u64", fields.health_impact_pct), energyCostPct: decodeFromFields("u64", fields.energy_cost_pct), attempts: decodeFromFields("u64", fields.attempts), cooldown: decodeFromFields("u64", fields.cooldown), nextUseTs: decodeFromFields("u64", fields.next_use_ts), baseAttempts: decodeFromFields("u64", fields.base_attempts) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): CapabilityAdded { if (!isCapabilityAdded(item.type)) { throw new Error("not a CapabilityAdded type");

 }

 return CapabilityAdded.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), slot: decodeFromFieldsWithTypes("u64", item.fields.slot), capabilityType: decodeFromFieldsWithTypes("u8", item.fields.capability_type), healthImpactPct: decodeFromFieldsWithTypes("u64", item.fields.health_impact_pct), energyCostPct: decodeFromFieldsWithTypes("u64", item.fields.energy_cost_pct), attempts: decodeFromFieldsWithTypes("u64", item.fields.attempts), cooldown: decodeFromFieldsWithTypes("u64", item.fields.cooldown), nextUseTs: decodeFromFieldsWithTypes("u64", item.fields.next_use_ts), baseAttempts: decodeFromFieldsWithTypes("u64", item.fields.base_attempts) } ) }

 static fromBcs( data: Uint8Array ): CapabilityAdded { return CapabilityAdded.fromFields( CapabilityAdded.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),slot: this.slot.toString(),capabilityType: this.capabilityType,healthImpactPct: this.healthImpactPct.toString(),energyCostPct: this.energyCostPct.toString(),attempts: this.attempts.toString(),cooldown: this.cooldown.toString(),nextUseTs: this.nextUseTs.toString(),baseAttempts: this.baseAttempts.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): CapabilityAdded { return CapabilityAdded.reified( ).new( { version: decodeFromJSONField("u64", field.version), slot: decodeFromJSONField("u64", field.slot), capabilityType: decodeFromJSONField("u8", field.capabilityType), healthImpactPct: decodeFromJSONField("u64", field.healthImpactPct), energyCostPct: decodeFromJSONField("u64", field.energyCostPct), attempts: decodeFromJSONField("u64", field.attempts), cooldown: decodeFromJSONField("u64", field.cooldown), nextUseTs: decodeFromJSONField("u64", field.nextUseTs), baseAttempts: decodeFromJSONField("u64", field.baseAttempts) } ) }

 static fromJSON( json: Record<string, any> ): CapabilityAdded { if (json.$typeName !== CapabilityAdded.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return CapabilityAdded.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): CapabilityAdded { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCapabilityAdded(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CapabilityAdded object`); } return CapabilityAdded.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): CapabilityAdded { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCapabilityAdded(data.bcs.type)) { throw new Error(`object at is not a CapabilityAdded object`); }

 return CapabilityAdded.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CapabilityAdded.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<CapabilityAdded> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CapabilityAdded object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCapabilityAdded(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CapabilityAdded object`); }

 return CapabilityAdded.fromSuiObjectData( res.data ); }

 }

/* ============================== CapabilityState =============================== */

export function isCapabilityState(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::CapabilityState`; }

export interface CapabilityStateFields { capType: ToField<"u8">; healthImpactPct: ToField<"u64">; energyCostPct: ToField<"u64">; attempts: ToField<"u64">; cooldown: ToField<"u64">; nextUseTs: ToField<"u64">; baseAttempts: ToField<"u64"> }

export type CapabilityStateReified = Reified< CapabilityState, CapabilityStateFields >;

export class CapabilityState implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::CapabilityState`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = CapabilityState.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::CapabilityState`; readonly $typeArgs: []; readonly $isPhantom = CapabilityState.$isPhantom;

 readonly capType: ToField<"u8">; readonly healthImpactPct: ToField<"u64">; readonly energyCostPct: ToField<"u64">; readonly attempts: ToField<"u64">; readonly cooldown: ToField<"u64">; readonly nextUseTs: ToField<"u64">; readonly baseAttempts: ToField<"u64">

 private constructor(typeArgs: [], fields: CapabilityStateFields, ) { this.$fullTypeName = composeSuiType( CapabilityState.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::CapabilityState`; this.$typeArgs = typeArgs;

 this.capType = fields.capType;; this.healthImpactPct = fields.healthImpactPct;; this.energyCostPct = fields.energyCostPct;; this.attempts = fields.attempts;; this.cooldown = fields.cooldown;; this.nextUseTs = fields.nextUseTs;; this.baseAttempts = fields.baseAttempts; }

 static reified( ): CapabilityStateReified { return { typeName: CapabilityState.$typeName, fullTypeName: composeSuiType( CapabilityState.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::CapabilityState`, typeArgs: [ ] as [], isPhantom: CapabilityState.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CapabilityState.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CapabilityState.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => CapabilityState.fromBcs( data, ), bcs: CapabilityState.bcs, fromJSONField: (field: any) => CapabilityState.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => CapabilityState.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => CapabilityState.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => CapabilityState.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => CapabilityState.fetch( client, id, ), new: ( fields: CapabilityStateFields, ) => { return new CapabilityState( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return CapabilityState.reified() }

 static phantom( ): PhantomReified<ToTypeStr<CapabilityState>> { return phantom(CapabilityState.reified( )); } static get p() { return CapabilityState.phantom() }

 static get bcs() { return bcs.struct("CapabilityState", {

 cap_type: bcs.u8(), health_impact_pct: bcs.u64(), energy_cost_pct: bcs.u64(), attempts: bcs.u64(), cooldown: bcs.u64(), next_use_ts: bcs.u64(), base_attempts: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): CapabilityState { return CapabilityState.reified( ).new( { capType: decodeFromFields("u8", fields.cap_type), healthImpactPct: decodeFromFields("u64", fields.health_impact_pct), energyCostPct: decodeFromFields("u64", fields.energy_cost_pct), attempts: decodeFromFields("u64", fields.attempts), cooldown: decodeFromFields("u64", fields.cooldown), nextUseTs: decodeFromFields("u64", fields.next_use_ts), baseAttempts: decodeFromFields("u64", fields.base_attempts) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): CapabilityState { if (!isCapabilityState(item.type)) { throw new Error("not a CapabilityState type");

 }

 return CapabilityState.reified( ).new( { capType: decodeFromFieldsWithTypes("u8", item.fields.cap_type), healthImpactPct: decodeFromFieldsWithTypes("u64", item.fields.health_impact_pct), energyCostPct: decodeFromFieldsWithTypes("u64", item.fields.energy_cost_pct), attempts: decodeFromFieldsWithTypes("u64", item.fields.attempts), cooldown: decodeFromFieldsWithTypes("u64", item.fields.cooldown), nextUseTs: decodeFromFieldsWithTypes("u64", item.fields.next_use_ts), baseAttempts: decodeFromFieldsWithTypes("u64", item.fields.base_attempts) } ) }

 static fromBcs( data: Uint8Array ): CapabilityState { return CapabilityState.fromFields( CapabilityState.bcs.parse(data) ) }

 toJSONField() { return {

 capType: this.capType,healthImpactPct: this.healthImpactPct.toString(),energyCostPct: this.energyCostPct.toString(),attempts: this.attempts.toString(),cooldown: this.cooldown.toString(),nextUseTs: this.nextUseTs.toString(),baseAttempts: this.baseAttempts.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): CapabilityState { return CapabilityState.reified( ).new( { capType: decodeFromJSONField("u8", field.capType), healthImpactPct: decodeFromJSONField("u64", field.healthImpactPct), energyCostPct: decodeFromJSONField("u64", field.energyCostPct), attempts: decodeFromJSONField("u64", field.attempts), cooldown: decodeFromJSONField("u64", field.cooldown), nextUseTs: decodeFromJSONField("u64", field.nextUseTs), baseAttempts: decodeFromJSONField("u64", field.baseAttempts) } ) }

 static fromJSON( json: Record<string, any> ): CapabilityState { if (json.$typeName !== CapabilityState.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return CapabilityState.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): CapabilityState { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCapabilityState(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CapabilityState object`); } return CapabilityState.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): CapabilityState { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCapabilityState(data.bcs.type)) { throw new Error(`object at is not a CapabilityState object`); }

 return CapabilityState.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CapabilityState.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<CapabilityState> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CapabilityState object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCapabilityState(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CapabilityState object`); }

 return CapabilityState.fromSuiObjectData( res.data ); }

 }

/* ============================== Configuration =============================== */

export function isConfiguration(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::Configuration`; }

export interface ConfigurationFields { maxBidsPerBee: ToField<"u64">; minBidAmt: ToField<"u64">; trainerOnboardingFee: ToField<"u64">; mutationFee: ToField<"u64">; royalty: ToField<Royalty>; breedingRoyalty: ToField<BreedingRoyalty>; cooldownPeriods: ToField<LinkedTable<"u64", "u64">>; minEnergyToHatch: ToField<"u64">; minHealthToHatch: ToField<"u64"> }

export type ConfigurationReified = Reified< Configuration, ConfigurationFields >;

export class Configuration implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::Configuration`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Configuration.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::Configuration`; readonly $typeArgs: []; readonly $isPhantom = Configuration.$isPhantom;

 readonly maxBidsPerBee: ToField<"u64">; readonly minBidAmt: ToField<"u64">; readonly trainerOnboardingFee: ToField<"u64">; readonly mutationFee: ToField<"u64">; readonly royalty: ToField<Royalty>; readonly breedingRoyalty: ToField<BreedingRoyalty>; readonly cooldownPeriods: ToField<LinkedTable<"u64", "u64">>; readonly minEnergyToHatch: ToField<"u64">; readonly minHealthToHatch: ToField<"u64">

 private constructor(typeArgs: [], fields: ConfigurationFields, ) { this.$fullTypeName = composeSuiType( Configuration.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::Configuration`; this.$typeArgs = typeArgs;

 this.maxBidsPerBee = fields.maxBidsPerBee;; this.minBidAmt = fields.minBidAmt;; this.trainerOnboardingFee = fields.trainerOnboardingFee;; this.mutationFee = fields.mutationFee;; this.royalty = fields.royalty;; this.breedingRoyalty = fields.breedingRoyalty;; this.cooldownPeriods = fields.cooldownPeriods;; this.minEnergyToHatch = fields.minEnergyToHatch;; this.minHealthToHatch = fields.minHealthToHatch; }

 static reified( ): ConfigurationReified { return { typeName: Configuration.$typeName, fullTypeName: composeSuiType( Configuration.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::Configuration`, typeArgs: [ ] as [], isPhantom: Configuration.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Configuration.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Configuration.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Configuration.fromBcs( data, ), bcs: Configuration.bcs, fromJSONField: (field: any) => Configuration.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Configuration.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Configuration.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Configuration.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Configuration.fetch( client, id, ), new: ( fields: ConfigurationFields, ) => { return new Configuration( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Configuration.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Configuration>> { return phantom(Configuration.reified( )); } static get p() { return Configuration.phantom() }

 static get bcs() { return bcs.struct("Configuration", {

 max_bids_per_bee: bcs.u64(), min_bid_amt: bcs.u64(), trainer_onboarding_fee: bcs.u64(), mutation_fee: bcs.u64(), royalty: Royalty.bcs, breeding_royalty: BreedingRoyalty.bcs, cooldown_periods: LinkedTable.bcs(bcs.u64()), min_energy_to_hatch: bcs.u64(), min_health_to_hatch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Configuration { return Configuration.reified( ).new( { maxBidsPerBee: decodeFromFields("u64", fields.max_bids_per_bee), minBidAmt: decodeFromFields("u64", fields.min_bid_amt), trainerOnboardingFee: decodeFromFields("u64", fields.trainer_onboarding_fee), mutationFee: decodeFromFields("u64", fields.mutation_fee), royalty: decodeFromFields(Royalty.reified(), fields.royalty), breedingRoyalty: decodeFromFields(BreedingRoyalty.reified(), fields.breeding_royalty), cooldownPeriods: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u64")), fields.cooldown_periods), minEnergyToHatch: decodeFromFields("u64", fields.min_energy_to_hatch), minHealthToHatch: decodeFromFields("u64", fields.min_health_to_hatch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Configuration { if (!isConfiguration(item.type)) { throw new Error("not a Configuration type");

 }

 return Configuration.reified( ).new( { maxBidsPerBee: decodeFromFieldsWithTypes("u64", item.fields.max_bids_per_bee), minBidAmt: decodeFromFieldsWithTypes("u64", item.fields.min_bid_amt), trainerOnboardingFee: decodeFromFieldsWithTypes("u64", item.fields.trainer_onboarding_fee), mutationFee: decodeFromFieldsWithTypes("u64", item.fields.mutation_fee), royalty: decodeFromFieldsWithTypes(Royalty.reified(), item.fields.royalty), breedingRoyalty: decodeFromFieldsWithTypes(BreedingRoyalty.reified(), item.fields.breeding_royalty), cooldownPeriods: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u64")), item.fields.cooldown_periods), minEnergyToHatch: decodeFromFieldsWithTypes("u64", item.fields.min_energy_to_hatch), minHealthToHatch: decodeFromFieldsWithTypes("u64", item.fields.min_health_to_hatch) } ) }

 static fromBcs( data: Uint8Array ): Configuration { return Configuration.fromFields( Configuration.bcs.parse(data) ) }

 toJSONField() { return {

 maxBidsPerBee: this.maxBidsPerBee.toString(),minBidAmt: this.minBidAmt.toString(),trainerOnboardingFee: this.trainerOnboardingFee.toString(),mutationFee: this.mutationFee.toString(),royalty: this.royalty.toJSONField(),breedingRoyalty: this.breedingRoyalty.toJSONField(),cooldownPeriods: this.cooldownPeriods.toJSONField(),minEnergyToHatch: this.minEnergyToHatch.toString(),minHealthToHatch: this.minHealthToHatch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Configuration { return Configuration.reified( ).new( { maxBidsPerBee: decodeFromJSONField("u64", field.maxBidsPerBee), minBidAmt: decodeFromJSONField("u64", field.minBidAmt), trainerOnboardingFee: decodeFromJSONField("u64", field.trainerOnboardingFee), mutationFee: decodeFromJSONField("u64", field.mutationFee), royalty: decodeFromJSONField(Royalty.reified(), field.royalty), breedingRoyalty: decodeFromJSONField(BreedingRoyalty.reified(), field.breedingRoyalty), cooldownPeriods: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u64")), field.cooldownPeriods), minEnergyToHatch: decodeFromJSONField("u64", field.minEnergyToHatch), minHealthToHatch: decodeFromJSONField("u64", field.minHealthToHatch) } ) }

 static fromJSON( json: Record<string, any> ): Configuration { if (json.$typeName !== Configuration.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Configuration.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Configuration { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConfiguration(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Configuration object`); } return Configuration.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Configuration { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isConfiguration(data.bcs.type)) { throw new Error(`object at is not a Configuration object`); }

 return Configuration.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Configuration.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Configuration> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Configuration object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConfiguration(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Configuration object`); }

 return Configuration.fromSuiObjectData( res.data ); }

 }

/* ============================== DRAGON_TRAINER =============================== */

export function isDRAGON_TRAINER(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DRAGON_TRAINER`; }

export interface DRAGON_TRAINERFields { dummyField: ToField<"bool"> }

export type DRAGON_TRAINERReified = Reified< DRAGON_TRAINER, DRAGON_TRAINERFields >;

export class DRAGON_TRAINER implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DRAGON_TRAINER`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DRAGON_TRAINER.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DRAGON_TRAINER`; readonly $typeArgs: []; readonly $isPhantom = DRAGON_TRAINER.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: DRAGON_TRAINERFields, ) { this.$fullTypeName = composeSuiType( DRAGON_TRAINER.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DRAGON_TRAINER`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): DRAGON_TRAINERReified { return { typeName: DRAGON_TRAINER.$typeName, fullTypeName: composeSuiType( DRAGON_TRAINER.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DRAGON_TRAINER`, typeArgs: [ ] as [], isPhantom: DRAGON_TRAINER.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DRAGON_TRAINER.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DRAGON_TRAINER.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DRAGON_TRAINER.fromBcs( data, ), bcs: DRAGON_TRAINER.bcs, fromJSONField: (field: any) => DRAGON_TRAINER.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DRAGON_TRAINER.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DRAGON_TRAINER.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DRAGON_TRAINER.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DRAGON_TRAINER.fetch( client, id, ), new: ( fields: DRAGON_TRAINERFields, ) => { return new DRAGON_TRAINER( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DRAGON_TRAINER.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DRAGON_TRAINER>> { return phantom(DRAGON_TRAINER.reified( )); } static get p() { return DRAGON_TRAINER.phantom() }

 static get bcs() { return bcs.struct("DRAGON_TRAINER", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): DRAGON_TRAINER { return DRAGON_TRAINER.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DRAGON_TRAINER { if (!isDRAGON_TRAINER(item.type)) { throw new Error("not a DRAGON_TRAINER type");

 }

 return DRAGON_TRAINER.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): DRAGON_TRAINER { return DRAGON_TRAINER.fromFields( DRAGON_TRAINER.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DRAGON_TRAINER { return DRAGON_TRAINER.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): DRAGON_TRAINER { if (json.$typeName !== DRAGON_TRAINER.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DRAGON_TRAINER.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DRAGON_TRAINER { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDRAGON_TRAINER(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DRAGON_TRAINER object`); } return DRAGON_TRAINER.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DRAGON_TRAINER { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDRAGON_TRAINER(data.bcs.type)) { throw new Error(`object at is not a DRAGON_TRAINER object`); }

 return DRAGON_TRAINER.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DRAGON_TRAINER.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DRAGON_TRAINER> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DRAGON_TRAINER object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDRAGON_TRAINER(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DRAGON_TRAINER object`); }

 return DRAGON_TRAINER.fromSuiObjectData( res.data ); }

 }

/* ============================== DegenHiveMapStore =============================== */

export function isDegenHiveMapStore(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DegenHiveMapStore`; }

export interface DegenHiveMapStoreFields { id: ToField<UID>; ownerToTrainerMapping: ToField<LinkedTable<"address", "address">>; usernameToTrainerMapping: ToField<LinkedTable<String, "address">>; usernameToSchoolMapping: ToField<LinkedTable<String, "address">>; beeNameToVersionMapping: ToField<LinkedTable<String1, "u64">>; suinsNameToExpiryMapping: ToField<LinkedTable<String, "u64">>; appNamesToCapMapping: ToField<LinkedTable<String, "address">>; moduleVersion: ToField<"u64"> }

export type DegenHiveMapStoreReified = Reified< DegenHiveMapStore, DegenHiveMapStoreFields >;

export class DegenHiveMapStore implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DegenHiveMapStore`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DegenHiveMapStore.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DegenHiveMapStore`; readonly $typeArgs: []; readonly $isPhantom = DegenHiveMapStore.$isPhantom;

 readonly id: ToField<UID>; readonly ownerToTrainerMapping: ToField<LinkedTable<"address", "address">>; readonly usernameToTrainerMapping: ToField<LinkedTable<String, "address">>; readonly usernameToSchoolMapping: ToField<LinkedTable<String, "address">>; readonly beeNameToVersionMapping: ToField<LinkedTable<String1, "u64">>; readonly suinsNameToExpiryMapping: ToField<LinkedTable<String, "u64">>; readonly appNamesToCapMapping: ToField<LinkedTable<String, "address">>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: DegenHiveMapStoreFields, ) { this.$fullTypeName = composeSuiType( DegenHiveMapStore.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DegenHiveMapStore`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.ownerToTrainerMapping = fields.ownerToTrainerMapping;; this.usernameToTrainerMapping = fields.usernameToTrainerMapping;; this.usernameToSchoolMapping = fields.usernameToSchoolMapping;; this.beeNameToVersionMapping = fields.beeNameToVersionMapping;; this.suinsNameToExpiryMapping = fields.suinsNameToExpiryMapping;; this.appNamesToCapMapping = fields.appNamesToCapMapping;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): DegenHiveMapStoreReified { return { typeName: DegenHiveMapStore.$typeName, fullTypeName: composeSuiType( DegenHiveMapStore.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DegenHiveMapStore`, typeArgs: [ ] as [], isPhantom: DegenHiveMapStore.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DegenHiveMapStore.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DegenHiveMapStore.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DegenHiveMapStore.fromBcs( data, ), bcs: DegenHiveMapStore.bcs, fromJSONField: (field: any) => DegenHiveMapStore.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DegenHiveMapStore.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DegenHiveMapStore.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DegenHiveMapStore.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DegenHiveMapStore.fetch( client, id, ), new: ( fields: DegenHiveMapStoreFields, ) => { return new DegenHiveMapStore( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DegenHiveMapStore.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DegenHiveMapStore>> { return phantom(DegenHiveMapStore.reified( )); } static get p() { return DegenHiveMapStore.phantom() }

 static get bcs() { return bcs.struct("DegenHiveMapStore", {

 id: UID.bcs, owner_to_trainer_mapping: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), username_to_trainer_mapping: LinkedTable.bcs(String.bcs), username_to_school_mapping: LinkedTable.bcs(String.bcs), bee_name_to_version_mapping: LinkedTable.bcs(String1.bcs), suins_name_to_expiry_mapping: LinkedTable.bcs(String.bcs), app_names_to_cap_mapping: LinkedTable.bcs(String.bcs), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DegenHiveMapStore { return DegenHiveMapStore.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), ownerToTrainerMapping: decodeFromFields(LinkedTable.reified("address", reified.phantom("address")), fields.owner_to_trainer_mapping), usernameToTrainerMapping: decodeFromFields(LinkedTable.reified(String.reified(), reified.phantom("address")), fields.username_to_trainer_mapping), usernameToSchoolMapping: decodeFromFields(LinkedTable.reified(String.reified(), reified.phantom("address")), fields.username_to_school_mapping), beeNameToVersionMapping: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("u64")), fields.bee_name_to_version_mapping), suinsNameToExpiryMapping: decodeFromFields(LinkedTable.reified(String.reified(), reified.phantom("u64")), fields.suins_name_to_expiry_mapping), appNamesToCapMapping: decodeFromFields(LinkedTable.reified(String.reified(), reified.phantom("address")), fields.app_names_to_cap_mapping), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DegenHiveMapStore { if (!isDegenHiveMapStore(item.type)) { throw new Error("not a DegenHiveMapStore type");

 }

 return DegenHiveMapStore.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), ownerToTrainerMapping: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("address")), item.fields.owner_to_trainer_mapping), usernameToTrainerMapping: decodeFromFieldsWithTypes(LinkedTable.reified(String.reified(), reified.phantom("address")), item.fields.username_to_trainer_mapping), usernameToSchoolMapping: decodeFromFieldsWithTypes(LinkedTable.reified(String.reified(), reified.phantom("address")), item.fields.username_to_school_mapping), beeNameToVersionMapping: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("u64")), item.fields.bee_name_to_version_mapping), suinsNameToExpiryMapping: decodeFromFieldsWithTypes(LinkedTable.reified(String.reified(), reified.phantom("u64")), item.fields.suins_name_to_expiry_mapping), appNamesToCapMapping: decodeFromFieldsWithTypes(LinkedTable.reified(String.reified(), reified.phantom("address")), item.fields.app_names_to_cap_mapping), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): DegenHiveMapStore { return DegenHiveMapStore.fromFields( DegenHiveMapStore.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,ownerToTrainerMapping: this.ownerToTrainerMapping.toJSONField(),usernameToTrainerMapping: this.usernameToTrainerMapping.toJSONField(),usernameToSchoolMapping: this.usernameToSchoolMapping.toJSONField(),beeNameToVersionMapping: this.beeNameToVersionMapping.toJSONField(),suinsNameToExpiryMapping: this.suinsNameToExpiryMapping.toJSONField(),appNamesToCapMapping: this.appNamesToCapMapping.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DegenHiveMapStore { return DegenHiveMapStore.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), ownerToTrainerMapping: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("address")), field.ownerToTrainerMapping), usernameToTrainerMapping: decodeFromJSONField(LinkedTable.reified(String.reified(), reified.phantom("address")), field.usernameToTrainerMapping), usernameToSchoolMapping: decodeFromJSONField(LinkedTable.reified(String.reified(), reified.phantom("address")), field.usernameToSchoolMapping), beeNameToVersionMapping: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("u64")), field.beeNameToVersionMapping), suinsNameToExpiryMapping: decodeFromJSONField(LinkedTable.reified(String.reified(), reified.phantom("u64")), field.suinsNameToExpiryMapping), appNamesToCapMapping: decodeFromJSONField(LinkedTable.reified(String.reified(), reified.phantom("address")), field.appNamesToCapMapping), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): DegenHiveMapStore { if (json.$typeName !== DegenHiveMapStore.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DegenHiveMapStore.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DegenHiveMapStore { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDegenHiveMapStore(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DegenHiveMapStore object`); } return DegenHiveMapStore.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DegenHiveMapStore { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDegenHiveMapStore(data.bcs.type)) { throw new Error(`object at is not a DegenHiveMapStore object`); }

 return DegenHiveMapStore.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DegenHiveMapStore.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DegenHiveMapStore> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DegenHiveMapStore object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDegenHiveMapStore(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DegenHiveMapStore object`); }

 return DegenHiveMapStore.fromSuiObjectData( res.data ); }

 }

/* ============================== DegenHiveYieldHarvested =============================== */

export function isDegenHiveYieldHarvested(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DegenHiveYieldHarvested`; }

export interface DegenHiveYieldHarvestedFields { harvesterTrainer: ToField<"address">; username: ToField<String>; hiveHarvested: ToField<"u64">; honeyHarvested: ToField<"u64"> }

export type DegenHiveYieldHarvestedReified = Reified< DegenHiveYieldHarvested, DegenHiveYieldHarvestedFields >;

export class DegenHiveYieldHarvested implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DegenHiveYieldHarvested`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DegenHiveYieldHarvested.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DegenHiveYieldHarvested`; readonly $typeArgs: []; readonly $isPhantom = DegenHiveYieldHarvested.$isPhantom;

 readonly harvesterTrainer: ToField<"address">; readonly username: ToField<String>; readonly hiveHarvested: ToField<"u64">; readonly honeyHarvested: ToField<"u64">

 private constructor(typeArgs: [], fields: DegenHiveYieldHarvestedFields, ) { this.$fullTypeName = composeSuiType( DegenHiveYieldHarvested.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DegenHiveYieldHarvested`; this.$typeArgs = typeArgs;

 this.harvesterTrainer = fields.harvesterTrainer;; this.username = fields.username;; this.hiveHarvested = fields.hiveHarvested;; this.honeyHarvested = fields.honeyHarvested; }

 static reified( ): DegenHiveYieldHarvestedReified { return { typeName: DegenHiveYieldHarvested.$typeName, fullTypeName: composeSuiType( DegenHiveYieldHarvested.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DegenHiveYieldHarvested`, typeArgs: [ ] as [], isPhantom: DegenHiveYieldHarvested.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DegenHiveYieldHarvested.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DegenHiveYieldHarvested.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DegenHiveYieldHarvested.fromBcs( data, ), bcs: DegenHiveYieldHarvested.bcs, fromJSONField: (field: any) => DegenHiveYieldHarvested.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DegenHiveYieldHarvested.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DegenHiveYieldHarvested.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DegenHiveYieldHarvested.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DegenHiveYieldHarvested.fetch( client, id, ), new: ( fields: DegenHiveYieldHarvestedFields, ) => { return new DegenHiveYieldHarvested( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DegenHiveYieldHarvested.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DegenHiveYieldHarvested>> { return phantom(DegenHiveYieldHarvested.reified( )); } static get p() { return DegenHiveYieldHarvested.phantom() }

 static get bcs() { return bcs.struct("DegenHiveYieldHarvested", {

 harvester_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, hive_harvested: bcs.u64(), honey_harvested: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DegenHiveYieldHarvested { return DegenHiveYieldHarvested.reified( ).new( { harvesterTrainer: decodeFromFields("address", fields.harvester_trainer), username: decodeFromFields(String.reified(), fields.username), hiveHarvested: decodeFromFields("u64", fields.hive_harvested), honeyHarvested: decodeFromFields("u64", fields.honey_harvested) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DegenHiveYieldHarvested { if (!isDegenHiveYieldHarvested(item.type)) { throw new Error("not a DegenHiveYieldHarvested type");

 }

 return DegenHiveYieldHarvested.reified( ).new( { harvesterTrainer: decodeFromFieldsWithTypes("address", item.fields.harvester_trainer), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), hiveHarvested: decodeFromFieldsWithTypes("u64", item.fields.hive_harvested), honeyHarvested: decodeFromFieldsWithTypes("u64", item.fields.honey_harvested) } ) }

 static fromBcs( data: Uint8Array ): DegenHiveYieldHarvested { return DegenHiveYieldHarvested.fromFields( DegenHiveYieldHarvested.bcs.parse(data) ) }

 toJSONField() { return {

 harvesterTrainer: this.harvesterTrainer,username: this.username,hiveHarvested: this.hiveHarvested.toString(),honeyHarvested: this.honeyHarvested.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DegenHiveYieldHarvested { return DegenHiveYieldHarvested.reified( ).new( { harvesterTrainer: decodeFromJSONField("address", field.harvesterTrainer), username: decodeFromJSONField(String.reified(), field.username), hiveHarvested: decodeFromJSONField("u64", field.hiveHarvested), honeyHarvested: decodeFromJSONField("u64", field.honeyHarvested) } ) }

 static fromJSON( json: Record<string, any> ): DegenHiveYieldHarvested { if (json.$typeName !== DegenHiveYieldHarvested.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DegenHiveYieldHarvested.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DegenHiveYieldHarvested { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDegenHiveYieldHarvested(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DegenHiveYieldHarvested object`); } return DegenHiveYieldHarvested.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DegenHiveYieldHarvested { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDegenHiveYieldHarvested(data.bcs.type)) { throw new Error(`object at is not a DegenHiveYieldHarvested object`); }

 return DegenHiveYieldHarvested.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DegenHiveYieldHarvested.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DegenHiveYieldHarvested> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DegenHiveYieldHarvested object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDegenHiveYieldHarvested(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DegenHiveYieldHarvested object`); }

 return DegenHiveYieldHarvested.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonBeeHatched =============================== */

export function isDragonBeeHatched(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DragonBeeHatched`; }

export interface DragonBeeHatchedFields { version: ToField<"u64"> }

export type DragonBeeHatchedReified = Reified< DragonBeeHatched, DragonBeeHatchedFields >;

export class DragonBeeHatched implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DragonBeeHatched`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonBeeHatched.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DragonBeeHatched`; readonly $typeArgs: []; readonly $isPhantom = DragonBeeHatched.$isPhantom;

 readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: DragonBeeHatchedFields, ) { this.$fullTypeName = composeSuiType( DragonBeeHatched.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DragonBeeHatched`; this.$typeArgs = typeArgs;

 this.version = fields.version; }

 static reified( ): DragonBeeHatchedReified { return { typeName: DragonBeeHatched.$typeName, fullTypeName: composeSuiType( DragonBeeHatched.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DragonBeeHatched`, typeArgs: [ ] as [], isPhantom: DragonBeeHatched.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonBeeHatched.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonBeeHatched.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonBeeHatched.fromBcs( data, ), bcs: DragonBeeHatched.bcs, fromJSONField: (field: any) => DragonBeeHatched.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonBeeHatched.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonBeeHatched.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonBeeHatched.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonBeeHatched.fetch( client, id, ), new: ( fields: DragonBeeHatchedFields, ) => { return new DragonBeeHatched( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonBeeHatched.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonBeeHatched>> { return phantom(DragonBeeHatched.reified( )); } static get p() { return DragonBeeHatched.phantom() }

 static get bcs() { return bcs.struct("DragonBeeHatched", {

 version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DragonBeeHatched { return DragonBeeHatched.reified( ).new( { version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonBeeHatched { if (!isDragonBeeHatched(item.type)) { throw new Error("not a DragonBeeHatched type");

 }

 return DragonBeeHatched.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): DragonBeeHatched { return DragonBeeHatched.fromFields( DragonBeeHatched.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonBeeHatched { return DragonBeeHatched.reified( ).new( { version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): DragonBeeHatched { if (json.$typeName !== DragonBeeHatched.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonBeeHatched.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonBeeHatched { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonBeeHatched(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonBeeHatched object`); } return DragonBeeHatched.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonBeeHatched { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonBeeHatched(data.bcs.type)) { throw new Error(`object at is not a DragonBeeHatched object`); }

 return DragonBeeHatched.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonBeeHatched.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonBeeHatched> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonBeeHatched object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonBeeHatched(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonBeeHatched object`); }

 return DragonBeeHatched.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonDust =============================== */

export function isDragonDust(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DragonDust`; }

export interface DragonDustFields { questsPlayed: ToField<"u64">; evolutionStage: ToField<"u8">; evolvedGenes: ToField<Vector<"u256">>; genesImgMap: ToField<LinkedTable<"u64", ToPhantom<Vector<String1>>>>; evolutionMap: ToField<Vector<"u64">> }

export type DragonDustReified = Reified< DragonDust, DragonDustFields >;

export class DragonDust implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DragonDust`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonDust.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DragonDust`; readonly $typeArgs: []; readonly $isPhantom = DragonDust.$isPhantom;

 readonly questsPlayed: ToField<"u64">; readonly evolutionStage: ToField<"u8">; readonly evolvedGenes: ToField<Vector<"u256">>; readonly genesImgMap: ToField<LinkedTable<"u64", ToPhantom<Vector<String1>>>>; readonly evolutionMap: ToField<Vector<"u64">>

 private constructor(typeArgs: [], fields: DragonDustFields, ) { this.$fullTypeName = composeSuiType( DragonDust.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DragonDust`; this.$typeArgs = typeArgs;

 this.questsPlayed = fields.questsPlayed;; this.evolutionStage = fields.evolutionStage;; this.evolvedGenes = fields.evolvedGenes;; this.genesImgMap = fields.genesImgMap;; this.evolutionMap = fields.evolutionMap; }

 static reified( ): DragonDustReified { return { typeName: DragonDust.$typeName, fullTypeName: composeSuiType( DragonDust.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DragonDust`, typeArgs: [ ] as [], isPhantom: DragonDust.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonDust.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonDust.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonDust.fromBcs( data, ), bcs: DragonDust.bcs, fromJSONField: (field: any) => DragonDust.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonDust.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonDust.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonDust.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonDust.fetch( client, id, ), new: ( fields: DragonDustFields, ) => { return new DragonDust( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonDust.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonDust>> { return phantom(DragonDust.reified( )); } static get p() { return DragonDust.phantom() }

 static get bcs() { return bcs.struct("DragonDust", {

 quests_played: bcs.u64(), evolution_stage: bcs.u8(), evolved_genes: bcs.vector(bcs.u256()), genes_img_map: LinkedTable.bcs(bcs.u64()), evolution_map: bcs.vector(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): DragonDust { return DragonDust.reified( ).new( { questsPlayed: decodeFromFields("u64", fields.quests_played), evolutionStage: decodeFromFields("u8", fields.evolution_stage), evolvedGenes: decodeFromFields(reified.vector("u256"), fields.evolved_genes), genesImgMap: decodeFromFields(LinkedTable.reified("u64", reified.phantom(reified.vector(String1.reified()))), fields.genes_img_map), evolutionMap: decodeFromFields(reified.vector("u64"), fields.evolution_map) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonDust { if (!isDragonDust(item.type)) { throw new Error("not a DragonDust type");

 }

 return DragonDust.reified( ).new( { questsPlayed: decodeFromFieldsWithTypes("u64", item.fields.quests_played), evolutionStage: decodeFromFieldsWithTypes("u8", item.fields.evolution_stage), evolvedGenes: decodeFromFieldsWithTypes(reified.vector("u256"), item.fields.evolved_genes), genesImgMap: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(reified.vector(String1.reified()))), item.fields.genes_img_map), evolutionMap: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.evolution_map) } ) }

 static fromBcs( data: Uint8Array ): DragonDust { return DragonDust.fromFields( DragonDust.bcs.parse(data) ) }

 toJSONField() { return {

 questsPlayed: this.questsPlayed.toString(),evolutionStage: this.evolutionStage,evolvedGenes: fieldToJSON<Vector<"u256">>(`vector<u256>`, this.evolvedGenes),genesImgMap: this.genesImgMap.toJSONField(),evolutionMap: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.evolutionMap),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonDust { return DragonDust.reified( ).new( { questsPlayed: decodeFromJSONField("u64", field.questsPlayed), evolutionStage: decodeFromJSONField("u8", field.evolutionStage), evolvedGenes: decodeFromJSONField(reified.vector("u256"), field.evolvedGenes), genesImgMap: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(reified.vector(String1.reified()))), field.genesImgMap), evolutionMap: decodeFromJSONField(reified.vector("u64"), field.evolutionMap) } ) }

 static fromJSON( json: Record<string, any> ): DragonDust { if (json.$typeName !== DragonDust.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonDust.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonDust { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonDust(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonDust object`); } return DragonDust.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonDust { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonDust(data.bcs.type)) { throw new Error(`object at is not a DragonDust object`); }

 return DragonDust.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonDust.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonDust> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonDust object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonDust(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonDust object`); }

 return DragonDust.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonEggsBasket =============================== */

export function isDragonEggsBasket(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DragonEggsBasket`; }

export interface DragonEggsBasketFields { startTime: ToField<"u64">; eggsCount: ToField<"u64">; queenBeeEggsCount: ToField<"u64">; eggsLaid: ToField<"u64">; queenEggsLaid: ToField<"u64">; queenChance: ToField<"u64">; maxEggsLimit: ToField<"u64">; basePrice: ToField<"u64">; curveA: ToField<"u64">; addressList: ToField<LinkedTable<"address", "u64">>; perUserLimit: ToField<"u64">; whitelistTrainersPricing: ToField<LinkedTable<"address", "u64">>; whitelistTrainersAvailability: ToField<LinkedTable<"address", "u64">>; beesIndexes: ToField<Vector<"u64">>; genesisGenesList: ToField<LinkedTable<"u64", "u256">>; imagesList: ToField<LinkedTable<"u64", ToPhantom<LinkedTable<"u64", ToPhantom<String1>>>>>; capabilities: ToField<LinkedTable<"u64", ToPhantom<CapabilityState>>>; dragonbeeImgsList: ToField<LinkedTable<"u64", ToPhantom<LinkedTable<"u64", ToPhantom<String1>>>>>; honeyAvail: ToField<Balance<ToPhantom<HONEY>>>; hiveAvail: ToField<Balance<ToPhantom<HIVE>>> }

export type DragonEggsBasketReified = Reified< DragonEggsBasket, DragonEggsBasketFields >;

export class DragonEggsBasket implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DragonEggsBasket`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonEggsBasket.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DragonEggsBasket`; readonly $typeArgs: []; readonly $isPhantom = DragonEggsBasket.$isPhantom;

 readonly startTime: ToField<"u64">; readonly eggsCount: ToField<"u64">; readonly queenBeeEggsCount: ToField<"u64">; readonly eggsLaid: ToField<"u64">; readonly queenEggsLaid: ToField<"u64">; readonly queenChance: ToField<"u64">; readonly maxEggsLimit: ToField<"u64">; readonly basePrice: ToField<"u64">; readonly curveA: ToField<"u64">; readonly addressList: ToField<LinkedTable<"address", "u64">>; readonly perUserLimit: ToField<"u64">; readonly whitelistTrainersPricing: ToField<LinkedTable<"address", "u64">>; readonly whitelistTrainersAvailability: ToField<LinkedTable<"address", "u64">>; readonly beesIndexes: ToField<Vector<"u64">>; readonly genesisGenesList: ToField<LinkedTable<"u64", "u256">>; readonly imagesList: ToField<LinkedTable<"u64", ToPhantom<LinkedTable<"u64", ToPhantom<String1>>>>>; readonly capabilities: ToField<LinkedTable<"u64", ToPhantom<CapabilityState>>>; readonly dragonbeeImgsList: ToField<LinkedTable<"u64", ToPhantom<LinkedTable<"u64", ToPhantom<String1>>>>>; readonly honeyAvail: ToField<Balance<ToPhantom<HONEY>>>; readonly hiveAvail: ToField<Balance<ToPhantom<HIVE>>>

 private constructor(typeArgs: [], fields: DragonEggsBasketFields, ) { this.$fullTypeName = composeSuiType( DragonEggsBasket.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DragonEggsBasket`; this.$typeArgs = typeArgs;

 this.startTime = fields.startTime;; this.eggsCount = fields.eggsCount;; this.queenBeeEggsCount = fields.queenBeeEggsCount;; this.eggsLaid = fields.eggsLaid;; this.queenEggsLaid = fields.queenEggsLaid;; this.queenChance = fields.queenChance;; this.maxEggsLimit = fields.maxEggsLimit;; this.basePrice = fields.basePrice;; this.curveA = fields.curveA;; this.addressList = fields.addressList;; this.perUserLimit = fields.perUserLimit;; this.whitelistTrainersPricing = fields.whitelistTrainersPricing;; this.whitelistTrainersAvailability = fields.whitelistTrainersAvailability;; this.beesIndexes = fields.beesIndexes;; this.genesisGenesList = fields.genesisGenesList;; this.imagesList = fields.imagesList;; this.capabilities = fields.capabilities;; this.dragonbeeImgsList = fields.dragonbeeImgsList;; this.honeyAvail = fields.honeyAvail;; this.hiveAvail = fields.hiveAvail; }

 static reified( ): DragonEggsBasketReified { return { typeName: DragonEggsBasket.$typeName, fullTypeName: composeSuiType( DragonEggsBasket.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DragonEggsBasket`, typeArgs: [ ] as [], isPhantom: DragonEggsBasket.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonEggsBasket.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonEggsBasket.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonEggsBasket.fromBcs( data, ), bcs: DragonEggsBasket.bcs, fromJSONField: (field: any) => DragonEggsBasket.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonEggsBasket.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonEggsBasket.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonEggsBasket.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonEggsBasket.fetch( client, id, ), new: ( fields: DragonEggsBasketFields, ) => { return new DragonEggsBasket( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonEggsBasket.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonEggsBasket>> { return phantom(DragonEggsBasket.reified( )); } static get p() { return DragonEggsBasket.phantom() }

 static get bcs() { return bcs.struct("DragonEggsBasket", {

 start_time: bcs.u64(), eggs_count: bcs.u64(), queen_bee_eggs_count: bcs.u64(), eggs_laid: bcs.u64(), queen_eggs_laid: bcs.u64(), queen_chance: bcs.u64(), max_eggs_limit: bcs.u64(), base_price: bcs.u64(), curve_a: bcs.u64(), address_list: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), per_user_limit: bcs.u64(), whitelist_trainers_pricing: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), whitelist_trainers_availability: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), bees_indexes: bcs.vector(bcs.u64()), genesis_genes_list: LinkedTable.bcs(bcs.u64()), images_list: LinkedTable.bcs(bcs.u64()), capabilities: LinkedTable.bcs(bcs.u64()), dragonbee_imgs_list: LinkedTable.bcs(bcs.u64()), honey_avail: Balance.bcs, hive_avail: Balance.bcs

}) };

 static fromFields( fields: Record<string, any> ): DragonEggsBasket { return DragonEggsBasket.reified( ).new( { startTime: decodeFromFields("u64", fields.start_time), eggsCount: decodeFromFields("u64", fields.eggs_count), queenBeeEggsCount: decodeFromFields("u64", fields.queen_bee_eggs_count), eggsLaid: decodeFromFields("u64", fields.eggs_laid), queenEggsLaid: decodeFromFields("u64", fields.queen_eggs_laid), queenChance: decodeFromFields("u64", fields.queen_chance), maxEggsLimit: decodeFromFields("u64", fields.max_eggs_limit), basePrice: decodeFromFields("u64", fields.base_price), curveA: decodeFromFields("u64", fields.curve_a), addressList: decodeFromFields(LinkedTable.reified("address", reified.phantom("u64")), fields.address_list), perUserLimit: decodeFromFields("u64", fields.per_user_limit), whitelistTrainersPricing: decodeFromFields(LinkedTable.reified("address", reified.phantom("u64")), fields.whitelist_trainers_pricing), whitelistTrainersAvailability: decodeFromFields(LinkedTable.reified("address", reified.phantom("u64")), fields.whitelist_trainers_availability), beesIndexes: decodeFromFields(reified.vector("u64"), fields.bees_indexes), genesisGenesList: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u256")), fields.genesis_genes_list), imagesList: decodeFromFields(LinkedTable.reified("u64", reified.phantom(LinkedTable.reified("u64", reified.phantom(String1.reified())))), fields.images_list), capabilities: decodeFromFields(LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), fields.capabilities), dragonbeeImgsList: decodeFromFields(LinkedTable.reified("u64", reified.phantom(LinkedTable.reified("u64", reified.phantom(String1.reified())))), fields.dragonbee_imgs_list), honeyAvail: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_avail), hiveAvail: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_avail) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonEggsBasket { if (!isDragonEggsBasket(item.type)) { throw new Error("not a DragonEggsBasket type");

 }

 return DragonEggsBasket.reified( ).new( { startTime: decodeFromFieldsWithTypes("u64", item.fields.start_time), eggsCount: decodeFromFieldsWithTypes("u64", item.fields.eggs_count), queenBeeEggsCount: decodeFromFieldsWithTypes("u64", item.fields.queen_bee_eggs_count), eggsLaid: decodeFromFieldsWithTypes("u64", item.fields.eggs_laid), queenEggsLaid: decodeFromFieldsWithTypes("u64", item.fields.queen_eggs_laid), queenChance: decodeFromFieldsWithTypes("u64", item.fields.queen_chance), maxEggsLimit: decodeFromFieldsWithTypes("u64", item.fields.max_eggs_limit), basePrice: decodeFromFieldsWithTypes("u64", item.fields.base_price), curveA: decodeFromFieldsWithTypes("u64", item.fields.curve_a), addressList: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("u64")), item.fields.address_list), perUserLimit: decodeFromFieldsWithTypes("u64", item.fields.per_user_limit), whitelistTrainersPricing: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("u64")), item.fields.whitelist_trainers_pricing), whitelistTrainersAvailability: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("u64")), item.fields.whitelist_trainers_availability), beesIndexes: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.bees_indexes), genesisGenesList: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u256")), item.fields.genesis_genes_list), imagesList: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(LinkedTable.reified("u64", reified.phantom(String1.reified())))), item.fields.images_list), capabilities: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), item.fields.capabilities), dragonbeeImgsList: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(LinkedTable.reified("u64", reified.phantom(String1.reified())))), item.fields.dragonbee_imgs_list), honeyAvail: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_avail), hiveAvail: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_avail) } ) }

 static fromBcs( data: Uint8Array ): DragonEggsBasket { return DragonEggsBasket.fromFields( DragonEggsBasket.bcs.parse(data) ) }

 toJSONField() { return {

 startTime: this.startTime.toString(),eggsCount: this.eggsCount.toString(),queenBeeEggsCount: this.queenBeeEggsCount.toString(),eggsLaid: this.eggsLaid.toString(),queenEggsLaid: this.queenEggsLaid.toString(),queenChance: this.queenChance.toString(),maxEggsLimit: this.maxEggsLimit.toString(),basePrice: this.basePrice.toString(),curveA: this.curveA.toString(),addressList: this.addressList.toJSONField(),perUserLimit: this.perUserLimit.toString(),whitelistTrainersPricing: this.whitelistTrainersPricing.toJSONField(),whitelistTrainersAvailability: this.whitelistTrainersAvailability.toJSONField(),beesIndexes: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.beesIndexes),genesisGenesList: this.genesisGenesList.toJSONField(),imagesList: this.imagesList.toJSONField(),capabilities: this.capabilities.toJSONField(),dragonbeeImgsList: this.dragonbeeImgsList.toJSONField(),honeyAvail: this.honeyAvail.toJSONField(),hiveAvail: this.hiveAvail.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonEggsBasket { return DragonEggsBasket.reified( ).new( { startTime: decodeFromJSONField("u64", field.startTime), eggsCount: decodeFromJSONField("u64", field.eggsCount), queenBeeEggsCount: decodeFromJSONField("u64", field.queenBeeEggsCount), eggsLaid: decodeFromJSONField("u64", field.eggsLaid), queenEggsLaid: decodeFromJSONField("u64", field.queenEggsLaid), queenChance: decodeFromJSONField("u64", field.queenChance), maxEggsLimit: decodeFromJSONField("u64", field.maxEggsLimit), basePrice: decodeFromJSONField("u64", field.basePrice), curveA: decodeFromJSONField("u64", field.curveA), addressList: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("u64")), field.addressList), perUserLimit: decodeFromJSONField("u64", field.perUserLimit), whitelistTrainersPricing: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("u64")), field.whitelistTrainersPricing), whitelistTrainersAvailability: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("u64")), field.whitelistTrainersAvailability), beesIndexes: decodeFromJSONField(reified.vector("u64"), field.beesIndexes), genesisGenesList: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u256")), field.genesisGenesList), imagesList: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(LinkedTable.reified("u64", reified.phantom(String1.reified())))), field.imagesList), capabilities: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), field.capabilities), dragonbeeImgsList: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(LinkedTable.reified("u64", reified.phantom(String1.reified())))), field.dragonbeeImgsList), honeyAvail: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyAvail), hiveAvail: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveAvail) } ) }

 static fromJSON( json: Record<string, any> ): DragonEggsBasket { if (json.$typeName !== DragonEggsBasket.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonEggsBasket.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonEggsBasket { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonEggsBasket(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonEggsBasket object`); } return DragonEggsBasket.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonEggsBasket { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonEggsBasket(data.bcs.type)) { throw new Error(`object at is not a DragonEggsBasket object`); }

 return DragonEggsBasket.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonEggsBasket.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonEggsBasket> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonEggsBasket object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonEggsBasket(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonEggsBasket object`); }

 return DragonEggsBasket.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonSchool =============================== */

export function isDragonSchool(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DragonSchool`; }

export interface DragonSchoolFields { id: ToField<UID>; owner: ToField<"address">; username: ToField<String>; availableHive: ToField<Balance<ToPhantom<HIVE>>>; availableHoney: ToField<Balance<ToPhantom<HONEY>>>; moduleVersion: ToField<"u64"> }

export type DragonSchoolReified = Reified< DragonSchool, DragonSchoolFields >;

export class DragonSchool implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DragonSchool`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonSchool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DragonSchool`; readonly $typeArgs: []; readonly $isPhantom = DragonSchool.$isPhantom;

 readonly id: ToField<UID>; readonly owner: ToField<"address">; readonly username: ToField<String>; readonly availableHive: ToField<Balance<ToPhantom<HIVE>>>; readonly availableHoney: ToField<Balance<ToPhantom<HONEY>>>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: DragonSchoolFields, ) { this.$fullTypeName = composeSuiType( DragonSchool.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DragonSchool`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.owner = fields.owner;; this.username = fields.username;; this.availableHive = fields.availableHive;; this.availableHoney = fields.availableHoney;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): DragonSchoolReified { return { typeName: DragonSchool.$typeName, fullTypeName: composeSuiType( DragonSchool.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DragonSchool`, typeArgs: [ ] as [], isPhantom: DragonSchool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonSchool.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonSchool.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonSchool.fromBcs( data, ), bcs: DragonSchool.bcs, fromJSONField: (field: any) => DragonSchool.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonSchool.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonSchool.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonSchool.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonSchool.fetch( client, id, ), new: ( fields: DragonSchoolFields, ) => { return new DragonSchool( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonSchool.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonSchool>> { return phantom(DragonSchool.reified( )); } static get p() { return DragonSchool.phantom() }

 static get bcs() { return bcs.struct("DragonSchool", {

 id: UID.bcs, owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, available_hive: Balance.bcs, available_honey: Balance.bcs, module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DragonSchool { return DragonSchool.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), owner: decodeFromFields("address", fields.owner), username: decodeFromFields(String.reified(), fields.username), availableHive: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.available_hive), availableHoney: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.available_honey), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonSchool { if (!isDragonSchool(item.type)) { throw new Error("not a DragonSchool type");

 }

 return DragonSchool.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), owner: decodeFromFieldsWithTypes("address", item.fields.owner), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), availableHive: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.available_hive), availableHoney: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.available_honey), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): DragonSchool { return DragonSchool.fromFields( DragonSchool.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,owner: this.owner,username: this.username,availableHive: this.availableHive.toJSONField(),availableHoney: this.availableHoney.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonSchool { return DragonSchool.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), owner: decodeFromJSONField("address", field.owner), username: decodeFromJSONField(String.reified(), field.username), availableHive: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.availableHive), availableHoney: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.availableHoney), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): DragonSchool { if (json.$typeName !== DragonSchool.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonSchool.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonSchool { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonSchool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonSchool object`); } return DragonSchool.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonSchool { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonSchool(data.bcs.type)) { throw new Error(`object at is not a DragonSchool object`); }

 return DragonSchool.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonSchool.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonSchool> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonSchool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonSchool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonSchool object`); }

 return DragonSchool.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonSchoolCreated =============================== */

export function isDragonSchoolCreated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DragonSchoolCreated`; }

export interface DragonSchoolCreatedFields { name: ToField<String>; newSchoolAddr: ToField<"address"> }

export type DragonSchoolCreatedReified = Reified< DragonSchoolCreated, DragonSchoolCreatedFields >;

export class DragonSchoolCreated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DragonSchoolCreated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonSchoolCreated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DragonSchoolCreated`; readonly $typeArgs: []; readonly $isPhantom = DragonSchoolCreated.$isPhantom;

 readonly name: ToField<String>; readonly newSchoolAddr: ToField<"address">

 private constructor(typeArgs: [], fields: DragonSchoolCreatedFields, ) { this.$fullTypeName = composeSuiType( DragonSchoolCreated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DragonSchoolCreated`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.newSchoolAddr = fields.newSchoolAddr; }

 static reified( ): DragonSchoolCreatedReified { return { typeName: DragonSchoolCreated.$typeName, fullTypeName: composeSuiType( DragonSchoolCreated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DragonSchoolCreated`, typeArgs: [ ] as [], isPhantom: DragonSchoolCreated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonSchoolCreated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonSchoolCreated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonSchoolCreated.fromBcs( data, ), bcs: DragonSchoolCreated.bcs, fromJSONField: (field: any) => DragonSchoolCreated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonSchoolCreated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonSchoolCreated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonSchoolCreated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonSchoolCreated.fetch( client, id, ), new: ( fields: DragonSchoolCreatedFields, ) => { return new DragonSchoolCreated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonSchoolCreated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonSchoolCreated>> { return phantom(DragonSchoolCreated.reified( )); } static get p() { return DragonSchoolCreated.phantom() }

 static get bcs() { return bcs.struct("DragonSchoolCreated", {

 name: String.bcs, new_school_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): DragonSchoolCreated { return DragonSchoolCreated.reified( ).new( { name: decodeFromFields(String.reified(), fields.name), newSchoolAddr: decodeFromFields("address", fields.new_school_addr) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonSchoolCreated { if (!isDragonSchoolCreated(item.type)) { throw new Error("not a DragonSchoolCreated type");

 }

 return DragonSchoolCreated.reified( ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), newSchoolAddr: decodeFromFieldsWithTypes("address", item.fields.new_school_addr) } ) }

 static fromBcs( data: Uint8Array ): DragonSchoolCreated { return DragonSchoolCreated.fromFields( DragonSchoolCreated.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,newSchoolAddr: this.newSchoolAddr,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonSchoolCreated { return DragonSchoolCreated.reified( ).new( { name: decodeFromJSONField(String.reified(), field.name), newSchoolAddr: decodeFromJSONField("address", field.newSchoolAddr) } ) }

 static fromJSON( json: Record<string, any> ): DragonSchoolCreated { if (json.$typeName !== DragonSchoolCreated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonSchoolCreated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonSchoolCreated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonSchoolCreated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonSchoolCreated object`); } return DragonSchoolCreated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonSchoolCreated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonSchoolCreated(data.bcs.type)) { throw new Error(`object at is not a DragonSchoolCreated object`); }

 return DragonSchoolCreated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonSchoolCreated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonSchoolCreated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonSchoolCreated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonSchoolCreated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonSchoolCreated object`); }

 return DragonSchoolCreated.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonTrainer =============================== */

export function isDragonTrainer(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DragonTrainer`; }

export interface DragonTrainerFields { id: ToField<UID>; owner: ToField<"address">; joinedAt: ToField<"u64">; username: ToField<String>; inscription: ToField<Inscription>; availableHoney: ToField<Balance<ToPhantom<HONEY>>>; availableSui: ToField<Balance<ToPhantom<SUI>>>; ownedBees: ToField<LinkedTable<"u64", ToPhantom<MysticalBee>>>; lockedBees: ToField<LinkedTable<"u64", "address">>; listingRecords: ToField<LinkedTable<"u64", ToPhantom<ListingRecord>>>; bidRecords: ToField<LinkedTable<"u64", ToPhantom<BidRecord>>>; trainerSessions: ToField<LinkedTable<String, "address">>; moduleVersion: ToField<"u64"> }

export type DragonTrainerReified = Reified< DragonTrainer, DragonTrainerFields >;

export class DragonTrainer implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DragonTrainer`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonTrainer.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DragonTrainer`; readonly $typeArgs: []; readonly $isPhantom = DragonTrainer.$isPhantom;

 readonly id: ToField<UID>; readonly owner: ToField<"address">; readonly joinedAt: ToField<"u64">; readonly username: ToField<String>; readonly inscription: ToField<Inscription>; readonly availableHoney: ToField<Balance<ToPhantom<HONEY>>>; readonly availableSui: ToField<Balance<ToPhantom<SUI>>>; readonly ownedBees: ToField<LinkedTable<"u64", ToPhantom<MysticalBee>>>; readonly lockedBees: ToField<LinkedTable<"u64", "address">>; readonly listingRecords: ToField<LinkedTable<"u64", ToPhantom<ListingRecord>>>; readonly bidRecords: ToField<LinkedTable<"u64", ToPhantom<BidRecord>>>; readonly trainerSessions: ToField<LinkedTable<String, "address">>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: DragonTrainerFields, ) { this.$fullTypeName = composeSuiType( DragonTrainer.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DragonTrainer`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.owner = fields.owner;; this.joinedAt = fields.joinedAt;; this.username = fields.username;; this.inscription = fields.inscription;; this.availableHoney = fields.availableHoney;; this.availableSui = fields.availableSui;; this.ownedBees = fields.ownedBees;; this.lockedBees = fields.lockedBees;; this.listingRecords = fields.listingRecords;; this.bidRecords = fields.bidRecords;; this.trainerSessions = fields.trainerSessions;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): DragonTrainerReified { return { typeName: DragonTrainer.$typeName, fullTypeName: composeSuiType( DragonTrainer.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DragonTrainer`, typeArgs: [ ] as [], isPhantom: DragonTrainer.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonTrainer.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonTrainer.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonTrainer.fromBcs( data, ), bcs: DragonTrainer.bcs, fromJSONField: (field: any) => DragonTrainer.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonTrainer.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonTrainer.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonTrainer.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonTrainer.fetch( client, id, ), new: ( fields: DragonTrainerFields, ) => { return new DragonTrainer( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonTrainer.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonTrainer>> { return phantom(DragonTrainer.reified( )); } static get p() { return DragonTrainer.phantom() }

 static get bcs() { return bcs.struct("DragonTrainer", {

 id: UID.bcs, owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), joined_at: bcs.u64(), username: String.bcs, inscription: Inscription.bcs, available_honey: Balance.bcs, available_sui: Balance.bcs, owned_bees: LinkedTable.bcs(bcs.u64()), locked_bees: LinkedTable.bcs(bcs.u64()), listing_records: LinkedTable.bcs(bcs.u64()), bid_records: LinkedTable.bcs(bcs.u64()), trainer_sessions: LinkedTable.bcs(String.bcs), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DragonTrainer { return DragonTrainer.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), owner: decodeFromFields("address", fields.owner), joinedAt: decodeFromFields("u64", fields.joined_at), username: decodeFromFields(String.reified(), fields.username), inscription: decodeFromFields(Inscription.reified(), fields.inscription), availableHoney: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.available_honey), availableSui: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.available_sui), ownedBees: decodeFromFields(LinkedTable.reified("u64", reified.phantom(MysticalBee.reified())), fields.owned_bees), lockedBees: decodeFromFields(LinkedTable.reified("u64", reified.phantom("address")), fields.locked_bees), listingRecords: decodeFromFields(LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), fields.listing_records), bidRecords: decodeFromFields(LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), fields.bid_records), trainerSessions: decodeFromFields(LinkedTable.reified(String.reified(), reified.phantom("address")), fields.trainer_sessions), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonTrainer { if (!isDragonTrainer(item.type)) { throw new Error("not a DragonTrainer type");

 }

 return DragonTrainer.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), owner: decodeFromFieldsWithTypes("address", item.fields.owner), joinedAt: decodeFromFieldsWithTypes("u64", item.fields.joined_at), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), inscription: decodeFromFieldsWithTypes(Inscription.reified(), item.fields.inscription), availableHoney: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.available_honey), availableSui: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.available_sui), ownedBees: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(MysticalBee.reified())), item.fields.owned_bees), lockedBees: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("address")), item.fields.locked_bees), listingRecords: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), item.fields.listing_records), bidRecords: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), item.fields.bid_records), trainerSessions: decodeFromFieldsWithTypes(LinkedTable.reified(String.reified(), reified.phantom("address")), item.fields.trainer_sessions), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): DragonTrainer { return DragonTrainer.fromFields( DragonTrainer.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,owner: this.owner,joinedAt: this.joinedAt.toString(),username: this.username,inscription: this.inscription.toJSONField(),availableHoney: this.availableHoney.toJSONField(),availableSui: this.availableSui.toJSONField(),ownedBees: this.ownedBees.toJSONField(),lockedBees: this.lockedBees.toJSONField(),listingRecords: this.listingRecords.toJSONField(),bidRecords: this.bidRecords.toJSONField(),trainerSessions: this.trainerSessions.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonTrainer { return DragonTrainer.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), owner: decodeFromJSONField("address", field.owner), joinedAt: decodeFromJSONField("u64", field.joinedAt), username: decodeFromJSONField(String.reified(), field.username), inscription: decodeFromJSONField(Inscription.reified(), field.inscription), availableHoney: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.availableHoney), availableSui: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.availableSui), ownedBees: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(MysticalBee.reified())), field.ownedBees), lockedBees: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("address")), field.lockedBees), listingRecords: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), field.listingRecords), bidRecords: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), field.bidRecords), trainerSessions: decodeFromJSONField(LinkedTable.reified(String.reified(), reified.phantom("address")), field.trainerSessions), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): DragonTrainer { if (json.$typeName !== DragonTrainer.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonTrainer.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonTrainer { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonTrainer(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonTrainer object`); } return DragonTrainer.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonTrainer { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonTrainer(data.bcs.type)) { throw new Error(`object at is not a DragonTrainer object`); }

 return DragonTrainer.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonTrainer.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonTrainer> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonTrainer object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonTrainer(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonTrainer object`); }

 return DragonTrainer.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonTrainerDeleted =============================== */

export function isDragonTrainerDeleted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DragonTrainerDeleted`; }

export interface DragonTrainerDeletedFields { owner: ToField<"address">; username: ToField<String>; profileAddr: ToField<"address">; recepient: ToField<"address">; availableHoney: ToField<"u64">; availableSui: ToField<"u64"> }

export type DragonTrainerDeletedReified = Reified< DragonTrainerDeleted, DragonTrainerDeletedFields >;

export class DragonTrainerDeleted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DragonTrainerDeleted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonTrainerDeleted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DragonTrainerDeleted`; readonly $typeArgs: []; readonly $isPhantom = DragonTrainerDeleted.$isPhantom;

 readonly owner: ToField<"address">; readonly username: ToField<String>; readonly profileAddr: ToField<"address">; readonly recepient: ToField<"address">; readonly availableHoney: ToField<"u64">; readonly availableSui: ToField<"u64">

 private constructor(typeArgs: [], fields: DragonTrainerDeletedFields, ) { this.$fullTypeName = composeSuiType( DragonTrainerDeleted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DragonTrainerDeleted`; this.$typeArgs = typeArgs;

 this.owner = fields.owner;; this.username = fields.username;; this.profileAddr = fields.profileAddr;; this.recepient = fields.recepient;; this.availableHoney = fields.availableHoney;; this.availableSui = fields.availableSui; }

 static reified( ): DragonTrainerDeletedReified { return { typeName: DragonTrainerDeleted.$typeName, fullTypeName: composeSuiType( DragonTrainerDeleted.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DragonTrainerDeleted`, typeArgs: [ ] as [], isPhantom: DragonTrainerDeleted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonTrainerDeleted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonTrainerDeleted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonTrainerDeleted.fromBcs( data, ), bcs: DragonTrainerDeleted.bcs, fromJSONField: (field: any) => DragonTrainerDeleted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonTrainerDeleted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonTrainerDeleted.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonTrainerDeleted.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonTrainerDeleted.fetch( client, id, ), new: ( fields: DragonTrainerDeletedFields, ) => { return new DragonTrainerDeleted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonTrainerDeleted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonTrainerDeleted>> { return phantom(DragonTrainerDeleted.reified( )); } static get p() { return DragonTrainerDeleted.phantom() }

 static get bcs() { return bcs.struct("DragonTrainerDeleted", {

 owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), recepient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), available_honey: bcs.u64(), available_sui: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DragonTrainerDeleted { return DragonTrainerDeleted.reified( ).new( { owner: decodeFromFields("address", fields.owner), username: decodeFromFields(String.reified(), fields.username), profileAddr: decodeFromFields("address", fields.profile_addr), recepient: decodeFromFields("address", fields.recepient), availableHoney: decodeFromFields("u64", fields.available_honey), availableSui: decodeFromFields("u64", fields.available_sui) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonTrainerDeleted { if (!isDragonTrainerDeleted(item.type)) { throw new Error("not a DragonTrainerDeleted type");

 }

 return DragonTrainerDeleted.reified( ).new( { owner: decodeFromFieldsWithTypes("address", item.fields.owner), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), recepient: decodeFromFieldsWithTypes("address", item.fields.recepient), availableHoney: decodeFromFieldsWithTypes("u64", item.fields.available_honey), availableSui: decodeFromFieldsWithTypes("u64", item.fields.available_sui) } ) }

 static fromBcs( data: Uint8Array ): DragonTrainerDeleted { return DragonTrainerDeleted.fromFields( DragonTrainerDeleted.bcs.parse(data) ) }

 toJSONField() { return {

 owner: this.owner,username: this.username,profileAddr: this.profileAddr,recepient: this.recepient,availableHoney: this.availableHoney.toString(),availableSui: this.availableSui.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonTrainerDeleted { return DragonTrainerDeleted.reified( ).new( { owner: decodeFromJSONField("address", field.owner), username: decodeFromJSONField(String.reified(), field.username), profileAddr: decodeFromJSONField("address", field.profileAddr), recepient: decodeFromJSONField("address", field.recepient), availableHoney: decodeFromJSONField("u64", field.availableHoney), availableSui: decodeFromJSONField("u64", field.availableSui) } ) }

 static fromJSON( json: Record<string, any> ): DragonTrainerDeleted { if (json.$typeName !== DragonTrainerDeleted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonTrainerDeleted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonTrainerDeleted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonTrainerDeleted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonTrainerDeleted object`); } return DragonTrainerDeleted.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonTrainerDeleted { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonTrainerDeleted(data.bcs.type)) { throw new Error(`object at is not a DragonTrainerDeleted object`); }

 return DragonTrainerDeleted.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonTrainerDeleted.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonTrainerDeleted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonTrainerDeleted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonTrainerDeleted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonTrainerDeleted object`); }

 return DragonTrainerDeleted.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonTrainerKrafted =============================== */

export function isDragonTrainerKrafted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::DragonTrainerKrafted`; }

export interface DragonTrainerKraftedFields { name: ToField<String1>; newTrainerAddr: ToField<"address">; krafter: ToField<"address">; fee: ToField<"u64"> }

export type DragonTrainerKraftedReified = Reified< DragonTrainerKrafted, DragonTrainerKraftedFields >;

export class DragonTrainerKrafted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::DragonTrainerKrafted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonTrainerKrafted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::DragonTrainerKrafted`; readonly $typeArgs: []; readonly $isPhantom = DragonTrainerKrafted.$isPhantom;

 readonly name: ToField<String1>; readonly newTrainerAddr: ToField<"address">; readonly krafter: ToField<"address">; readonly fee: ToField<"u64">

 private constructor(typeArgs: [], fields: DragonTrainerKraftedFields, ) { this.$fullTypeName = composeSuiType( DragonTrainerKrafted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::DragonTrainerKrafted`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.newTrainerAddr = fields.newTrainerAddr;; this.krafter = fields.krafter;; this.fee = fields.fee; }

 static reified( ): DragonTrainerKraftedReified { return { typeName: DragonTrainerKrafted.$typeName, fullTypeName: composeSuiType( DragonTrainerKrafted.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::DragonTrainerKrafted`, typeArgs: [ ] as [], isPhantom: DragonTrainerKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonTrainerKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonTrainerKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonTrainerKrafted.fromBcs( data, ), bcs: DragonTrainerKrafted.bcs, fromJSONField: (field: any) => DragonTrainerKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonTrainerKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonTrainerKrafted.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonTrainerKrafted.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonTrainerKrafted.fetch( client, id, ), new: ( fields: DragonTrainerKraftedFields, ) => { return new DragonTrainerKrafted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonTrainerKrafted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonTrainerKrafted>> { return phantom(DragonTrainerKrafted.reified( )); } static get p() { return DragonTrainerKrafted.phantom() }

 static get bcs() { return bcs.struct("DragonTrainerKrafted", {

 name: String1.bcs, new_trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), krafter: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), fee: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DragonTrainerKrafted { return DragonTrainerKrafted.reified( ).new( { name: decodeFromFields(String1.reified(), fields.name), newTrainerAddr: decodeFromFields("address", fields.new_trainer_addr), krafter: decodeFromFields("address", fields.krafter), fee: decodeFromFields("u64", fields.fee) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonTrainerKrafted { if (!isDragonTrainerKrafted(item.type)) { throw new Error("not a DragonTrainerKrafted type");

 }

 return DragonTrainerKrafted.reified( ).new( { name: decodeFromFieldsWithTypes(String1.reified(), item.fields.name), newTrainerAddr: decodeFromFieldsWithTypes("address", item.fields.new_trainer_addr), krafter: decodeFromFieldsWithTypes("address", item.fields.krafter), fee: decodeFromFieldsWithTypes("u64", item.fields.fee) } ) }

 static fromBcs( data: Uint8Array ): DragonTrainerKrafted { return DragonTrainerKrafted.fromFields( DragonTrainerKrafted.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,newTrainerAddr: this.newTrainerAddr,krafter: this.krafter,fee: this.fee.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonTrainerKrafted { return DragonTrainerKrafted.reified( ).new( { name: decodeFromJSONField(String1.reified(), field.name), newTrainerAddr: decodeFromJSONField("address", field.newTrainerAddr), krafter: decodeFromJSONField("address", field.krafter), fee: decodeFromJSONField("u64", field.fee) } ) }

 static fromJSON( json: Record<string, any> ): DragonTrainerKrafted { if (json.$typeName !== DragonTrainerKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonTrainerKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonTrainerKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonTrainerKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonTrainerKrafted object`); } return DragonTrainerKrafted.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonTrainerKrafted { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonTrainerKrafted(data.bcs.type)) { throw new Error(`object at is not a DragonTrainerKrafted object`); }

 return DragonTrainerKrafted.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonTrainerKrafted.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonTrainerKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonTrainerKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonTrainerKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonTrainerKrafted object`); }

 return DragonTrainerKrafted.fromSuiObjectData( res.data ); }

 }

/* ============================== EggBasketInfo =============================== */

export function isEggBasketInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::EggBasketInfo`; }

export interface EggBasketInfoFields { isQueen: ToField<"bool">; totalEggs: ToField<"u64">; hatchEggRecord: ToField<Option<BeeEggRecord>>; lastEggTs: ToField<"u64">; cooldownStage: ToField<"u8">; cooldownTillTs: ToField<"u64"> }

export type EggBasketInfoReified = Reified< EggBasketInfo, EggBasketInfoFields >;

export class EggBasketInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::EggBasketInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = EggBasketInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::EggBasketInfo`; readonly $typeArgs: []; readonly $isPhantom = EggBasketInfo.$isPhantom;

 readonly isQueen: ToField<"bool">; readonly totalEggs: ToField<"u64">; readonly hatchEggRecord: ToField<Option<BeeEggRecord>>; readonly lastEggTs: ToField<"u64">; readonly cooldownStage: ToField<"u8">; readonly cooldownTillTs: ToField<"u64">

 private constructor(typeArgs: [], fields: EggBasketInfoFields, ) { this.$fullTypeName = composeSuiType( EggBasketInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::EggBasketInfo`; this.$typeArgs = typeArgs;

 this.isQueen = fields.isQueen;; this.totalEggs = fields.totalEggs;; this.hatchEggRecord = fields.hatchEggRecord;; this.lastEggTs = fields.lastEggTs;; this.cooldownStage = fields.cooldownStage;; this.cooldownTillTs = fields.cooldownTillTs; }

 static reified( ): EggBasketInfoReified { return { typeName: EggBasketInfo.$typeName, fullTypeName: composeSuiType( EggBasketInfo.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::EggBasketInfo`, typeArgs: [ ] as [], isPhantom: EggBasketInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => EggBasketInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => EggBasketInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => EggBasketInfo.fromBcs( data, ), bcs: EggBasketInfo.bcs, fromJSONField: (field: any) => EggBasketInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => EggBasketInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => EggBasketInfo.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => EggBasketInfo.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => EggBasketInfo.fetch( client, id, ), new: ( fields: EggBasketInfoFields, ) => { return new EggBasketInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return EggBasketInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<EggBasketInfo>> { return phantom(EggBasketInfo.reified( )); } static get p() { return EggBasketInfo.phantom() }

 static get bcs() { return bcs.struct("EggBasketInfo", {

 is_queen: bcs.bool(), total_eggs: bcs.u64(), hatch_egg_record: Option.bcs(BeeEggRecord.bcs), last_egg_ts: bcs.u64(), cooldown_stage: bcs.u8(), cooldown_till_ts: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): EggBasketInfo { return EggBasketInfo.reified( ).new( { isQueen: decodeFromFields("bool", fields.is_queen), totalEggs: decodeFromFields("u64", fields.total_eggs), hatchEggRecord: decodeFromFields(Option.reified(BeeEggRecord.reified()), fields.hatch_egg_record), lastEggTs: decodeFromFields("u64", fields.last_egg_ts), cooldownStage: decodeFromFields("u8", fields.cooldown_stage), cooldownTillTs: decodeFromFields("u64", fields.cooldown_till_ts) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): EggBasketInfo { if (!isEggBasketInfo(item.type)) { throw new Error("not a EggBasketInfo type");

 }

 return EggBasketInfo.reified( ).new( { isQueen: decodeFromFieldsWithTypes("bool", item.fields.is_queen), totalEggs: decodeFromFieldsWithTypes("u64", item.fields.total_eggs), hatchEggRecord: decodeFromFieldsWithTypes(Option.reified(BeeEggRecord.reified()), item.fields.hatch_egg_record), lastEggTs: decodeFromFieldsWithTypes("u64", item.fields.last_egg_ts), cooldownStage: decodeFromFieldsWithTypes("u8", item.fields.cooldown_stage), cooldownTillTs: decodeFromFieldsWithTypes("u64", item.fields.cooldown_till_ts) } ) }

 static fromBcs( data: Uint8Array ): EggBasketInfo { return EggBasketInfo.fromFields( EggBasketInfo.bcs.parse(data) ) }

 toJSONField() { return {

 isQueen: this.isQueen,totalEggs: this.totalEggs.toString(),hatchEggRecord: fieldToJSON<Option<BeeEggRecord>>(`${Option.$typeName}<${BeeEggRecord.$typeName}>`, this.hatchEggRecord),lastEggTs: this.lastEggTs.toString(),cooldownStage: this.cooldownStage,cooldownTillTs: this.cooldownTillTs.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): EggBasketInfo { return EggBasketInfo.reified( ).new( { isQueen: decodeFromJSONField("bool", field.isQueen), totalEggs: decodeFromJSONField("u64", field.totalEggs), hatchEggRecord: decodeFromJSONField(Option.reified(BeeEggRecord.reified()), field.hatchEggRecord), lastEggTs: decodeFromJSONField("u64", field.lastEggTs), cooldownStage: decodeFromJSONField("u8", field.cooldownStage), cooldownTillTs: decodeFromJSONField("u64", field.cooldownTillTs) } ) }

 static fromJSON( json: Record<string, any> ): EggBasketInfo { if (json.$typeName !== EggBasketInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return EggBasketInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): EggBasketInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEggBasketInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a EggBasketInfo object`); } return EggBasketInfo.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): EggBasketInfo { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isEggBasketInfo(data.bcs.type)) { throw new Error(`object at is not a EggBasketInfo object`); }

 return EggBasketInfo.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return EggBasketInfo.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<EggBasketInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching EggBasketInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEggBasketInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a EggBasketInfo object`); }

 return EggBasketInfo.fromSuiObjectData( res.data ); }

 }

/* ============================== EggLaidForDragonBee =============================== */

export function isEggLaidForDragonBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::EggLaidForDragonBee`; }

export interface EggLaidForDragonBeeFields { id: ToField<"address">; generation: ToField<"u64">; version: ToField<"u64">; gene: ToField<"u256">; birthTime: ToField<"u64">; birtherTrainer: ToField<"address">; queenVersion: ToField<"u64">; queenId: ToField<Option<"address">>; stingerId: ToField<Option<"address">>; price: ToField<"u64">; honeyDeposit: ToField<"u64"> }

export type EggLaidForDragonBeeReified = Reified< EggLaidForDragonBee, EggLaidForDragonBeeFields >;

export class EggLaidForDragonBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::EggLaidForDragonBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = EggLaidForDragonBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::EggLaidForDragonBee`; readonly $typeArgs: []; readonly $isPhantom = EggLaidForDragonBee.$isPhantom;

 readonly id: ToField<"address">; readonly generation: ToField<"u64">; readonly version: ToField<"u64">; readonly gene: ToField<"u256">; readonly birthTime: ToField<"u64">; readonly birtherTrainer: ToField<"address">; readonly queenVersion: ToField<"u64">; readonly queenId: ToField<Option<"address">>; readonly stingerId: ToField<Option<"address">>; readonly price: ToField<"u64">; readonly honeyDeposit: ToField<"u64">

 private constructor(typeArgs: [], fields: EggLaidForDragonBeeFields, ) { this.$fullTypeName = composeSuiType( EggLaidForDragonBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::EggLaidForDragonBee`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.generation = fields.generation;; this.version = fields.version;; this.gene = fields.gene;; this.birthTime = fields.birthTime;; this.birtherTrainer = fields.birtherTrainer;; this.queenVersion = fields.queenVersion;; this.queenId = fields.queenId;; this.stingerId = fields.stingerId;; this.price = fields.price;; this.honeyDeposit = fields.honeyDeposit; }

 static reified( ): EggLaidForDragonBeeReified { return { typeName: EggLaidForDragonBee.$typeName, fullTypeName: composeSuiType( EggLaidForDragonBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::EggLaidForDragonBee`, typeArgs: [ ] as [], isPhantom: EggLaidForDragonBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => EggLaidForDragonBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => EggLaidForDragonBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => EggLaidForDragonBee.fromBcs( data, ), bcs: EggLaidForDragonBee.bcs, fromJSONField: (field: any) => EggLaidForDragonBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => EggLaidForDragonBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => EggLaidForDragonBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => EggLaidForDragonBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => EggLaidForDragonBee.fetch( client, id, ), new: ( fields: EggLaidForDragonBeeFields, ) => { return new EggLaidForDragonBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return EggLaidForDragonBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<EggLaidForDragonBee>> { return phantom(EggLaidForDragonBee.reified( )); } static get p() { return EggLaidForDragonBee.phantom() }

 static get bcs() { return bcs.struct("EggLaidForDragonBee", {

 id: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), generation: bcs.u64(), version: bcs.u64(), gene: bcs.u256(), birth_time: bcs.u64(), birther_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), queen_version: bcs.u64(), queenId: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), stingerId: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), price: bcs.u64(), honey_deposit: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): EggLaidForDragonBee { return EggLaidForDragonBee.reified( ).new( { id: decodeFromFields("address", fields.id), generation: decodeFromFields("u64", fields.generation), version: decodeFromFields("u64", fields.version), gene: decodeFromFields("u256", fields.gene), birthTime: decodeFromFields("u64", fields.birth_time), birtherTrainer: decodeFromFields("address", fields.birther_trainer), queenVersion: decodeFromFields("u64", fields.queen_version), queenId: decodeFromFields(Option.reified("address"), fields.queenId), stingerId: decodeFromFields(Option.reified("address"), fields.stingerId), price: decodeFromFields("u64", fields.price), honeyDeposit: decodeFromFields("u64", fields.honey_deposit) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): EggLaidForDragonBee { if (!isEggLaidForDragonBee(item.type)) { throw new Error("not a EggLaidForDragonBee type");

 }

 return EggLaidForDragonBee.reified( ).new( { id: decodeFromFieldsWithTypes("address", item.fields.id), generation: decodeFromFieldsWithTypes("u64", item.fields.generation), version: decodeFromFieldsWithTypes("u64", item.fields.version), gene: decodeFromFieldsWithTypes("u256", item.fields.gene), birthTime: decodeFromFieldsWithTypes("u64", item.fields.birth_time), birtherTrainer: decodeFromFieldsWithTypes("address", item.fields.birther_trainer), queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), queenId: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.queenId), stingerId: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.stingerId), price: decodeFromFieldsWithTypes("u64", item.fields.price), honeyDeposit: decodeFromFieldsWithTypes("u64", item.fields.honey_deposit) } ) }

 static fromBcs( data: Uint8Array ): EggLaidForDragonBee { return EggLaidForDragonBee.fromFields( EggLaidForDragonBee.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,generation: this.generation.toString(),version: this.version.toString(),gene: this.gene.toString(),birthTime: this.birthTime.toString(),birtherTrainer: this.birtherTrainer,queenVersion: this.queenVersion.toString(),queenId: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.queenId),stingerId: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.stingerId),price: this.price.toString(),honeyDeposit: this.honeyDeposit.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): EggLaidForDragonBee { return EggLaidForDragonBee.reified( ).new( { id: decodeFromJSONField("address", field.id), generation: decodeFromJSONField("u64", field.generation), version: decodeFromJSONField("u64", field.version), gene: decodeFromJSONField("u256", field.gene), birthTime: decodeFromJSONField("u64", field.birthTime), birtherTrainer: decodeFromJSONField("address", field.birtherTrainer), queenVersion: decodeFromJSONField("u64", field.queenVersion), queenId: decodeFromJSONField(Option.reified("address"), field.queenId), stingerId: decodeFromJSONField(Option.reified("address"), field.stingerId), price: decodeFromJSONField("u64", field.price), honeyDeposit: decodeFromJSONField("u64", field.honeyDeposit) } ) }

 static fromJSON( json: Record<string, any> ): EggLaidForDragonBee { if (json.$typeName !== EggLaidForDragonBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return EggLaidForDragonBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): EggLaidForDragonBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEggLaidForDragonBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a EggLaidForDragonBee object`); } return EggLaidForDragonBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): EggLaidForDragonBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isEggLaidForDragonBee(data.bcs.type)) { throw new Error(`object at is not a EggLaidForDragonBee object`); }

 return EggLaidForDragonBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return EggLaidForDragonBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<EggLaidForDragonBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching EggLaidForDragonBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEggLaidForDragonBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a EggLaidForDragonBee object`); }

 return EggLaidForDragonBee.fromSuiObjectData( res.data ); }

 }

/* ============================== ExecutedListing =============================== */

export function isExecutedListing(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::ExecutedListing`; }

export interface ExecutedListingFields { listedByTrainer: ToField<"address">; mysticalBee: ToField<Option<MysticalBee>>; version: ToField<"u64">; balance: ToField<Option<Balance<ToPhantom<SUI>>>>; bidderTrainer: ToField<"address">; executedPrice: ToField<"u64"> }

export type ExecutedListingReified = Reified< ExecutedListing, ExecutedListingFields >;

export class ExecutedListing implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::ExecutedListing`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ExecutedListing.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::ExecutedListing`; readonly $typeArgs: []; readonly $isPhantom = ExecutedListing.$isPhantom;

 readonly listedByTrainer: ToField<"address">; readonly mysticalBee: ToField<Option<MysticalBee>>; readonly version: ToField<"u64">; readonly balance: ToField<Option<Balance<ToPhantom<SUI>>>>; readonly bidderTrainer: ToField<"address">; readonly executedPrice: ToField<"u64">

 private constructor(typeArgs: [], fields: ExecutedListingFields, ) { this.$fullTypeName = composeSuiType( ExecutedListing.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::ExecutedListing`; this.$typeArgs = typeArgs;

 this.listedByTrainer = fields.listedByTrainer;; this.mysticalBee = fields.mysticalBee;; this.version = fields.version;; this.balance = fields.balance;; this.bidderTrainer = fields.bidderTrainer;; this.executedPrice = fields.executedPrice; }

 static reified( ): ExecutedListingReified { return { typeName: ExecutedListing.$typeName, fullTypeName: composeSuiType( ExecutedListing.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::ExecutedListing`, typeArgs: [ ] as [], isPhantom: ExecutedListing.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ExecutedListing.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ExecutedListing.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ExecutedListing.fromBcs( data, ), bcs: ExecutedListing.bcs, fromJSONField: (field: any) => ExecutedListing.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ExecutedListing.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ExecutedListing.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ExecutedListing.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ExecutedListing.fetch( client, id, ), new: ( fields: ExecutedListingFields, ) => { return new ExecutedListing( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ExecutedListing.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ExecutedListing>> { return phantom(ExecutedListing.reified( )); } static get p() { return ExecutedListing.phantom() }

 static get bcs() { return bcs.struct("ExecutedListing", {

 listed_by_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), mystical_bee: Option.bcs(MysticalBee.bcs), version: bcs.u64(), balance: Option.bcs(Balance.bcs), bidder_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), executed_price: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ExecutedListing { return ExecutedListing.reified( ).new( { listedByTrainer: decodeFromFields("address", fields.listed_by_trainer), mysticalBee: decodeFromFields(Option.reified(MysticalBee.reified()), fields.mystical_bee), version: decodeFromFields("u64", fields.version), balance: decodeFromFields(Option.reified(Balance.reified(reified.phantom(SUI.reified()))), fields.balance), bidderTrainer: decodeFromFields("address", fields.bidder_trainer), executedPrice: decodeFromFields("u64", fields.executed_price) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ExecutedListing { if (!isExecutedListing(item.type)) { throw new Error("not a ExecutedListing type");

 }

 return ExecutedListing.reified( ).new( { listedByTrainer: decodeFromFieldsWithTypes("address", item.fields.listed_by_trainer), mysticalBee: decodeFromFieldsWithTypes(Option.reified(MysticalBee.reified()), item.fields.mystical_bee), version: decodeFromFieldsWithTypes("u64", item.fields.version), balance: decodeFromFieldsWithTypes(Option.reified(Balance.reified(reified.phantom(SUI.reified()))), item.fields.balance), bidderTrainer: decodeFromFieldsWithTypes("address", item.fields.bidder_trainer), executedPrice: decodeFromFieldsWithTypes("u64", item.fields.executed_price) } ) }

 static fromBcs( data: Uint8Array ): ExecutedListing { return ExecutedListing.fromFields( ExecutedListing.bcs.parse(data) ) }

 toJSONField() { return {

 listedByTrainer: this.listedByTrainer,mysticalBee: fieldToJSON<Option<MysticalBee>>(`${Option.$typeName}<${MysticalBee.$typeName}>`, this.mysticalBee),version: this.version.toString(),balance: fieldToJSON<Option<Balance<ToPhantom<SUI>>>>(`${Option.$typeName}<${Balance.$typeName}<${SUI.$typeName}>>`, this.balance),bidderTrainer: this.bidderTrainer,executedPrice: this.executedPrice.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ExecutedListing { return ExecutedListing.reified( ).new( { listedByTrainer: decodeFromJSONField("address", field.listedByTrainer), mysticalBee: decodeFromJSONField(Option.reified(MysticalBee.reified()), field.mysticalBee), version: decodeFromJSONField("u64", field.version), balance: decodeFromJSONField(Option.reified(Balance.reified(reified.phantom(SUI.reified()))), field.balance), bidderTrainer: decodeFromJSONField("address", field.bidderTrainer), executedPrice: decodeFromJSONField("u64", field.executedPrice) } ) }

 static fromJSON( json: Record<string, any> ): ExecutedListing { if (json.$typeName !== ExecutedListing.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ExecutedListing.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ExecutedListing { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExecutedListing(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ExecutedListing object`); } return ExecutedListing.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ExecutedListing { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isExecutedListing(data.bcs.type)) { throw new Error(`object at is not a ExecutedListing object`); }

 return ExecutedListing.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ExecutedListing.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ExecutedListing> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ExecutedListing object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExecutedListing(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ExecutedListing object`); }

 return ExecutedListing.fromSuiObjectData( res.data ); }

 }

/* ============================== ExecutedListingDestroyed =============================== */

export function isExecutedListingDestroyed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::ExecutedListingDestroyed`; }

export interface ExecutedListingDestroyedFields { version: ToField<"u64">; executedPrice: ToField<"u64">; listedByTrainer: ToField<"address"> }

export type ExecutedListingDestroyedReified = Reified< ExecutedListingDestroyed, ExecutedListingDestroyedFields >;

export class ExecutedListingDestroyed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::ExecutedListingDestroyed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ExecutedListingDestroyed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::ExecutedListingDestroyed`; readonly $typeArgs: []; readonly $isPhantom = ExecutedListingDestroyed.$isPhantom;

 readonly version: ToField<"u64">; readonly executedPrice: ToField<"u64">; readonly listedByTrainer: ToField<"address">

 private constructor(typeArgs: [], fields: ExecutedListingDestroyedFields, ) { this.$fullTypeName = composeSuiType( ExecutedListingDestroyed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::ExecutedListingDestroyed`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.executedPrice = fields.executedPrice;; this.listedByTrainer = fields.listedByTrainer; }

 static reified( ): ExecutedListingDestroyedReified { return { typeName: ExecutedListingDestroyed.$typeName, fullTypeName: composeSuiType( ExecutedListingDestroyed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::ExecutedListingDestroyed`, typeArgs: [ ] as [], isPhantom: ExecutedListingDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ExecutedListingDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ExecutedListingDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ExecutedListingDestroyed.fromBcs( data, ), bcs: ExecutedListingDestroyed.bcs, fromJSONField: (field: any) => ExecutedListingDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ExecutedListingDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ExecutedListingDestroyed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ExecutedListingDestroyed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ExecutedListingDestroyed.fetch( client, id, ), new: ( fields: ExecutedListingDestroyedFields, ) => { return new ExecutedListingDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ExecutedListingDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ExecutedListingDestroyed>> { return phantom(ExecutedListingDestroyed.reified( )); } static get p() { return ExecutedListingDestroyed.phantom() }

 static get bcs() { return bcs.struct("ExecutedListingDestroyed", {

 version: bcs.u64(), executed_price: bcs.u64(), listed_by_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): ExecutedListingDestroyed { return ExecutedListingDestroyed.reified( ).new( { version: decodeFromFields("u64", fields.version), executedPrice: decodeFromFields("u64", fields.executed_price), listedByTrainer: decodeFromFields("address", fields.listed_by_trainer) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ExecutedListingDestroyed { if (!isExecutedListingDestroyed(item.type)) { throw new Error("not a ExecutedListingDestroyed type");

 }

 return ExecutedListingDestroyed.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), executedPrice: decodeFromFieldsWithTypes("u64", item.fields.executed_price), listedByTrainer: decodeFromFieldsWithTypes("address", item.fields.listed_by_trainer) } ) }

 static fromBcs( data: Uint8Array ): ExecutedListingDestroyed { return ExecutedListingDestroyed.fromFields( ExecutedListingDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),executedPrice: this.executedPrice.toString(),listedByTrainer: this.listedByTrainer,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ExecutedListingDestroyed { return ExecutedListingDestroyed.reified( ).new( { version: decodeFromJSONField("u64", field.version), executedPrice: decodeFromJSONField("u64", field.executedPrice), listedByTrainer: decodeFromJSONField("address", field.listedByTrainer) } ) }

 static fromJSON( json: Record<string, any> ): ExecutedListingDestroyed { if (json.$typeName !== ExecutedListingDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ExecutedListingDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ExecutedListingDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExecutedListingDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ExecutedListingDestroyed object`); } return ExecutedListingDestroyed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ExecutedListingDestroyed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isExecutedListingDestroyed(data.bcs.type)) { throw new Error(`object at is not a ExecutedListingDestroyed object`); }

 return ExecutedListingDestroyed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ExecutedListingDestroyed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ExecutedListingDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ExecutedListingDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExecutedListingDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ExecutedListingDestroyed object`); }

 return ExecutedListingDestroyed.fromSuiObjectData( res.data ); }

 }

/* ============================== ExitHiveOfProfile =============================== */

export function isExitHiveOfProfile(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::ExitHiveOfProfile`; }

export interface ExitHiveOfProfileFields { followerTrainerAddr: ToField<"address">; unfollowedTrainerAddr: ToField<"address">; followerUsername: ToField<String1> }

export type ExitHiveOfProfileReified = Reified< ExitHiveOfProfile, ExitHiveOfProfileFields >;

export class ExitHiveOfProfile implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::ExitHiveOfProfile`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ExitHiveOfProfile.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::ExitHiveOfProfile`; readonly $typeArgs: []; readonly $isPhantom = ExitHiveOfProfile.$isPhantom;

 readonly followerTrainerAddr: ToField<"address">; readonly unfollowedTrainerAddr: ToField<"address">; readonly followerUsername: ToField<String1>

 private constructor(typeArgs: [], fields: ExitHiveOfProfileFields, ) { this.$fullTypeName = composeSuiType( ExitHiveOfProfile.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::ExitHiveOfProfile`; this.$typeArgs = typeArgs;

 this.followerTrainerAddr = fields.followerTrainerAddr;; this.unfollowedTrainerAddr = fields.unfollowedTrainerAddr;; this.followerUsername = fields.followerUsername; }

 static reified( ): ExitHiveOfProfileReified { return { typeName: ExitHiveOfProfile.$typeName, fullTypeName: composeSuiType( ExitHiveOfProfile.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::ExitHiveOfProfile`, typeArgs: [ ] as [], isPhantom: ExitHiveOfProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ExitHiveOfProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ExitHiveOfProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ExitHiveOfProfile.fromBcs( data, ), bcs: ExitHiveOfProfile.bcs, fromJSONField: (field: any) => ExitHiveOfProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ExitHiveOfProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ExitHiveOfProfile.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ExitHiveOfProfile.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ExitHiveOfProfile.fetch( client, id, ), new: ( fields: ExitHiveOfProfileFields, ) => { return new ExitHiveOfProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ExitHiveOfProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ExitHiveOfProfile>> { return phantom(ExitHiveOfProfile.reified( )); } static get p() { return ExitHiveOfProfile.phantom() }

 static get bcs() { return bcs.struct("ExitHiveOfProfile", {

 follower_trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), unfollowed_trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), follower_username: String1.bcs

}) };

 static fromFields( fields: Record<string, any> ): ExitHiveOfProfile { return ExitHiveOfProfile.reified( ).new( { followerTrainerAddr: decodeFromFields("address", fields.follower_trainer_addr), unfollowedTrainerAddr: decodeFromFields("address", fields.unfollowed_trainer_addr), followerUsername: decodeFromFields(String1.reified(), fields.follower_username) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ExitHiveOfProfile { if (!isExitHiveOfProfile(item.type)) { throw new Error("not a ExitHiveOfProfile type");

 }

 return ExitHiveOfProfile.reified( ).new( { followerTrainerAddr: decodeFromFieldsWithTypes("address", item.fields.follower_trainer_addr), unfollowedTrainerAddr: decodeFromFieldsWithTypes("address", item.fields.unfollowed_trainer_addr), followerUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.follower_username) } ) }

 static fromBcs( data: Uint8Array ): ExitHiveOfProfile { return ExitHiveOfProfile.fromFields( ExitHiveOfProfile.bcs.parse(data) ) }

 toJSONField() { return {

 followerTrainerAddr: this.followerTrainerAddr,unfollowedTrainerAddr: this.unfollowedTrainerAddr,followerUsername: this.followerUsername,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ExitHiveOfProfile { return ExitHiveOfProfile.reified( ).new( { followerTrainerAddr: decodeFromJSONField("address", field.followerTrainerAddr), unfollowedTrainerAddr: decodeFromJSONField("address", field.unfollowedTrainerAddr), followerUsername: decodeFromJSONField(String1.reified(), field.followerUsername) } ) }

 static fromJSON( json: Record<string, any> ): ExitHiveOfProfile { if (json.$typeName !== ExitHiveOfProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ExitHiveOfProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ExitHiveOfProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExitHiveOfProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ExitHiveOfProfile object`); } return ExitHiveOfProfile.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ExitHiveOfProfile { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isExitHiveOfProfile(data.bcs.type)) { throw new Error(`object at is not a ExitHiveOfProfile object`); }

 return ExitHiveOfProfile.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ExitHiveOfProfile.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ExitHiveOfProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ExitHiveOfProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExitHiveOfProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ExitHiveOfProfile object`); }

 return ExitHiveOfProfile.fromSuiObjectData( res.data ); }

 }

/* ============================== FundsWithdrawnFromProfile =============================== */

export function isFundsWithdrawnFromProfile(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::FundsWithdrawnFromProfile`; }

export interface FundsWithdrawnFromProfileFields { profileAddr: ToField<"address">; username: ToField<String>; withdrawnSui: ToField<"u64">; withdrawnHoney: ToField<"u64"> }

export type FundsWithdrawnFromProfileReified = Reified< FundsWithdrawnFromProfile, FundsWithdrawnFromProfileFields >;

export class FundsWithdrawnFromProfile implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::FundsWithdrawnFromProfile`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FundsWithdrawnFromProfile.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::FundsWithdrawnFromProfile`; readonly $typeArgs: []; readonly $isPhantom = FundsWithdrawnFromProfile.$isPhantom;

 readonly profileAddr: ToField<"address">; readonly username: ToField<String>; readonly withdrawnSui: ToField<"u64">; readonly withdrawnHoney: ToField<"u64">

 private constructor(typeArgs: [], fields: FundsWithdrawnFromProfileFields, ) { this.$fullTypeName = composeSuiType( FundsWithdrawnFromProfile.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::FundsWithdrawnFromProfile`; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.withdrawnSui = fields.withdrawnSui;; this.withdrawnHoney = fields.withdrawnHoney; }

 static reified( ): FundsWithdrawnFromProfileReified { return { typeName: FundsWithdrawnFromProfile.$typeName, fullTypeName: composeSuiType( FundsWithdrawnFromProfile.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::FundsWithdrawnFromProfile`, typeArgs: [ ] as [], isPhantom: FundsWithdrawnFromProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FundsWithdrawnFromProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FundsWithdrawnFromProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FundsWithdrawnFromProfile.fromBcs( data, ), bcs: FundsWithdrawnFromProfile.bcs, fromJSONField: (field: any) => FundsWithdrawnFromProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FundsWithdrawnFromProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FundsWithdrawnFromProfile.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FundsWithdrawnFromProfile.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FundsWithdrawnFromProfile.fetch( client, id, ), new: ( fields: FundsWithdrawnFromProfileFields, ) => { return new FundsWithdrawnFromProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FundsWithdrawnFromProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FundsWithdrawnFromProfile>> { return phantom(FundsWithdrawnFromProfile.reified( )); } static get p() { return FundsWithdrawnFromProfile.phantom() }

 static get bcs() { return bcs.struct("FundsWithdrawnFromProfile", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, withdrawn_sui: bcs.u64(), withdrawn_honey: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): FundsWithdrawnFromProfile { return FundsWithdrawnFromProfile.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String.reified(), fields.username), withdrawnSui: decodeFromFields("u64", fields.withdrawn_sui), withdrawnHoney: decodeFromFields("u64", fields.withdrawn_honey) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FundsWithdrawnFromProfile { if (!isFundsWithdrawnFromProfile(item.type)) { throw new Error("not a FundsWithdrawnFromProfile type");

 }

 return FundsWithdrawnFromProfile.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), withdrawnSui: decodeFromFieldsWithTypes("u64", item.fields.withdrawn_sui), withdrawnHoney: decodeFromFieldsWithTypes("u64", item.fields.withdrawn_honey) } ) }

 static fromBcs( data: Uint8Array ): FundsWithdrawnFromProfile { return FundsWithdrawnFromProfile.fromFields( FundsWithdrawnFromProfile.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,username: this.username,withdrawnSui: this.withdrawnSui.toString(),withdrawnHoney: this.withdrawnHoney.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FundsWithdrawnFromProfile { return FundsWithdrawnFromProfile.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String.reified(), field.username), withdrawnSui: decodeFromJSONField("u64", field.withdrawnSui), withdrawnHoney: decodeFromJSONField("u64", field.withdrawnHoney) } ) }

 static fromJSON( json: Record<string, any> ): FundsWithdrawnFromProfile { if (json.$typeName !== FundsWithdrawnFromProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FundsWithdrawnFromProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FundsWithdrawnFromProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFundsWithdrawnFromProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FundsWithdrawnFromProfile object`); } return FundsWithdrawnFromProfile.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FundsWithdrawnFromProfile { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFundsWithdrawnFromProfile(data.bcs.type)) { throw new Error(`object at is not a FundsWithdrawnFromProfile object`); }

 return FundsWithdrawnFromProfile.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FundsWithdrawnFromProfile.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FundsWithdrawnFromProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FundsWithdrawnFromProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFundsWithdrawnFromProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FundsWithdrawnFromProfile object`); }

 return FundsWithdrawnFromProfile.fromSuiObjectData( res.data ); }

 }

/* ============================== GameMasterKey =============================== */

export function isGameMasterKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::GameMasterKey`; }

export interface GameMasterKeyFields { id: ToField<UID>; appName: ToField<String>; totalEnergy: ToField<"u64">; totalHealth: ToField<"u64">; hiveIncentives: ToField<Balance<ToPhantom<HIVE>>>; honeyIncentives: ToField<Balance<ToPhantom<HONEY>>> }

export type GameMasterKeyReified = Reified< GameMasterKey, GameMasterKeyFields >;

export class GameMasterKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::GameMasterKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = GameMasterKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::GameMasterKey`; readonly $typeArgs: []; readonly $isPhantom = GameMasterKey.$isPhantom;

 readonly id: ToField<UID>; readonly appName: ToField<String>; readonly totalEnergy: ToField<"u64">; readonly totalHealth: ToField<"u64">; readonly hiveIncentives: ToField<Balance<ToPhantom<HIVE>>>; readonly honeyIncentives: ToField<Balance<ToPhantom<HONEY>>>

 private constructor(typeArgs: [], fields: GameMasterKeyFields, ) { this.$fullTypeName = composeSuiType( GameMasterKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::GameMasterKey`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.appName = fields.appName;; this.totalEnergy = fields.totalEnergy;; this.totalHealth = fields.totalHealth;; this.hiveIncentives = fields.hiveIncentives;; this.honeyIncentives = fields.honeyIncentives; }

 static reified( ): GameMasterKeyReified { return { typeName: GameMasterKey.$typeName, fullTypeName: composeSuiType( GameMasterKey.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::GameMasterKey`, typeArgs: [ ] as [], isPhantom: GameMasterKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GameMasterKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GameMasterKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GameMasterKey.fromBcs( data, ), bcs: GameMasterKey.bcs, fromJSONField: (field: any) => GameMasterKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GameMasterKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GameMasterKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => GameMasterKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => GameMasterKey.fetch( client, id, ), new: ( fields: GameMasterKeyFields, ) => { return new GameMasterKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GameMasterKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GameMasterKey>> { return phantom(GameMasterKey.reified( )); } static get p() { return GameMasterKey.phantom() }

 static get bcs() { return bcs.struct("GameMasterKey", {

 id: UID.bcs, app_name: String.bcs, total_energy: bcs.u64(), total_health: bcs.u64(), hive_incentives: Balance.bcs, honey_incentives: Balance.bcs

}) };

 static fromFields( fields: Record<string, any> ): GameMasterKey { return GameMasterKey.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), appName: decodeFromFields(String.reified(), fields.app_name), totalEnergy: decodeFromFields("u64", fields.total_energy), totalHealth: decodeFromFields("u64", fields.total_health), hiveIncentives: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_incentives), honeyIncentives: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_incentives) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GameMasterKey { if (!isGameMasterKey(item.type)) { throw new Error("not a GameMasterKey type");

 }

 return GameMasterKey.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), appName: decodeFromFieldsWithTypes(String.reified(), item.fields.app_name), totalEnergy: decodeFromFieldsWithTypes("u64", item.fields.total_energy), totalHealth: decodeFromFieldsWithTypes("u64", item.fields.total_health), hiveIncentives: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_incentives), honeyIncentives: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_incentives) } ) }

 static fromBcs( data: Uint8Array ): GameMasterKey { return GameMasterKey.fromFields( GameMasterKey.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,appName: this.appName,totalEnergy: this.totalEnergy.toString(),totalHealth: this.totalHealth.toString(),hiveIncentives: this.hiveIncentives.toJSONField(),honeyIncentives: this.honeyIncentives.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GameMasterKey { return GameMasterKey.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), appName: decodeFromJSONField(String.reified(), field.appName), totalEnergy: decodeFromJSONField("u64", field.totalEnergy), totalHealth: decodeFromJSONField("u64", field.totalHealth), hiveIncentives: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveIncentives), honeyIncentives: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyIncentives) } ) }

 static fromJSON( json: Record<string, any> ): GameMasterKey { if (json.$typeName !== GameMasterKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GameMasterKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GameMasterKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGameMasterKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GameMasterKey object`); } return GameMasterKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): GameMasterKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isGameMasterKey(data.bcs.type)) { throw new Error(`object at is not a GameMasterKey object`); }

 return GameMasterKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return GameMasterKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<GameMasterKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GameMasterKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGameMasterKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GameMasterKey object`); }

 return GameMasterKey.fromSuiObjectData( res.data ); }

 }

/* ============================== GenesisBeesUploaderCapability =============================== */

export function isGenesisBeesUploaderCapability(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::GenesisBeesUploaderCapability`; }

export interface GenesisBeesUploaderCapabilityFields { id: ToField<UID> }

export type GenesisBeesUploaderCapabilityReified = Reified< GenesisBeesUploaderCapability, GenesisBeesUploaderCapabilityFields >;

export class GenesisBeesUploaderCapability implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::GenesisBeesUploaderCapability`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = GenesisBeesUploaderCapability.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::GenesisBeesUploaderCapability`; readonly $typeArgs: []; readonly $isPhantom = GenesisBeesUploaderCapability.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: GenesisBeesUploaderCapabilityFields, ) { this.$fullTypeName = composeSuiType( GenesisBeesUploaderCapability.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::GenesisBeesUploaderCapability`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): GenesisBeesUploaderCapabilityReified { return { typeName: GenesisBeesUploaderCapability.$typeName, fullTypeName: composeSuiType( GenesisBeesUploaderCapability.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::GenesisBeesUploaderCapability`, typeArgs: [ ] as [], isPhantom: GenesisBeesUploaderCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GenesisBeesUploaderCapability.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GenesisBeesUploaderCapability.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GenesisBeesUploaderCapability.fromBcs( data, ), bcs: GenesisBeesUploaderCapability.bcs, fromJSONField: (field: any) => GenesisBeesUploaderCapability.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GenesisBeesUploaderCapability.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GenesisBeesUploaderCapability.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => GenesisBeesUploaderCapability.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => GenesisBeesUploaderCapability.fetch( client, id, ), new: ( fields: GenesisBeesUploaderCapabilityFields, ) => { return new GenesisBeesUploaderCapability( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GenesisBeesUploaderCapability.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GenesisBeesUploaderCapability>> { return phantom(GenesisBeesUploaderCapability.reified( )); } static get p() { return GenesisBeesUploaderCapability.phantom() }

 static get bcs() { return bcs.struct("GenesisBeesUploaderCapability", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): GenesisBeesUploaderCapability { return GenesisBeesUploaderCapability.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GenesisBeesUploaderCapability { if (!isGenesisBeesUploaderCapability(item.type)) { throw new Error("not a GenesisBeesUploaderCapability type");

 }

 return GenesisBeesUploaderCapability.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): GenesisBeesUploaderCapability { return GenesisBeesUploaderCapability.fromFields( GenesisBeesUploaderCapability.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GenesisBeesUploaderCapability { return GenesisBeesUploaderCapability.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): GenesisBeesUploaderCapability { if (json.$typeName !== GenesisBeesUploaderCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GenesisBeesUploaderCapability.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GenesisBeesUploaderCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGenesisBeesUploaderCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GenesisBeesUploaderCapability object`); } return GenesisBeesUploaderCapability.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): GenesisBeesUploaderCapability { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isGenesisBeesUploaderCapability(data.bcs.type)) { throw new Error(`object at is not a GenesisBeesUploaderCapability object`); }

 return GenesisBeesUploaderCapability.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return GenesisBeesUploaderCapability.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<GenesisBeesUploaderCapability> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GenesisBeesUploaderCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGenesisBeesUploaderCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GenesisBeesUploaderCapability object`); }

 return GenesisBeesUploaderCapability.fromSuiObjectData( res.data ); }

 }

/* ============================== GovernanceInfo =============================== */

export function isGovernanceInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::GovernanceInfo`; }

export interface GovernanceInfoFields { totalWeightedHive: ToField<"u128">; totalWeightedHoney: ToField<"u128"> }

export type GovernanceInfoReified = Reified< GovernanceInfo, GovernanceInfoFields >;

export class GovernanceInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::GovernanceInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = GovernanceInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::GovernanceInfo`; readonly $typeArgs: []; readonly $isPhantom = GovernanceInfo.$isPhantom;

 readonly totalWeightedHive: ToField<"u128">; readonly totalWeightedHoney: ToField<"u128">

 private constructor(typeArgs: [], fields: GovernanceInfoFields, ) { this.$fullTypeName = composeSuiType( GovernanceInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::GovernanceInfo`; this.$typeArgs = typeArgs;

 this.totalWeightedHive = fields.totalWeightedHive;; this.totalWeightedHoney = fields.totalWeightedHoney; }

 static reified( ): GovernanceInfoReified { return { typeName: GovernanceInfo.$typeName, fullTypeName: composeSuiType( GovernanceInfo.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::GovernanceInfo`, typeArgs: [ ] as [], isPhantom: GovernanceInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GovernanceInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GovernanceInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GovernanceInfo.fromBcs( data, ), bcs: GovernanceInfo.bcs, fromJSONField: (field: any) => GovernanceInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GovernanceInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GovernanceInfo.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => GovernanceInfo.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => GovernanceInfo.fetch( client, id, ), new: ( fields: GovernanceInfoFields, ) => { return new GovernanceInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GovernanceInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GovernanceInfo>> { return phantom(GovernanceInfo.reified( )); } static get p() { return GovernanceInfo.phantom() }

 static get bcs() { return bcs.struct("GovernanceInfo", {

 total_weighted_hive: bcs.u128(), total_weighted_honey: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): GovernanceInfo { return GovernanceInfo.reified( ).new( { totalWeightedHive: decodeFromFields("u128", fields.total_weighted_hive), totalWeightedHoney: decodeFromFields("u128", fields.total_weighted_honey) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GovernanceInfo { if (!isGovernanceInfo(item.type)) { throw new Error("not a GovernanceInfo type");

 }

 return GovernanceInfo.reified( ).new( { totalWeightedHive: decodeFromFieldsWithTypes("u128", item.fields.total_weighted_hive), totalWeightedHoney: decodeFromFieldsWithTypes("u128", item.fields.total_weighted_honey) } ) }

 static fromBcs( data: Uint8Array ): GovernanceInfo { return GovernanceInfo.fromFields( GovernanceInfo.bcs.parse(data) ) }

 toJSONField() { return {

 totalWeightedHive: this.totalWeightedHive.toString(),totalWeightedHoney: this.totalWeightedHoney.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GovernanceInfo { return GovernanceInfo.reified( ).new( { totalWeightedHive: decodeFromJSONField("u128", field.totalWeightedHive), totalWeightedHoney: decodeFromJSONField("u128", field.totalWeightedHoney) } ) }

 static fromJSON( json: Record<string, any> ): GovernanceInfo { if (json.$typeName !== GovernanceInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GovernanceInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GovernanceInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGovernanceInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GovernanceInfo object`); } return GovernanceInfo.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): GovernanceInfo { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isGovernanceInfo(data.bcs.type)) { throw new Error(`object at is not a GovernanceInfo object`); }

 return GovernanceInfo.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return GovernanceInfo.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<GovernanceInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GovernanceInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGovernanceInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GovernanceInfo object`); }

 return GovernanceInfo.fromSuiObjectData( res.data ); }

 }

/* ============================== HealthInfusedInBee =============================== */

export function isHealthInfusedInBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HealthInfusedInBee`; }

export interface HealthInfusedInBeeFields { version: ToField<"u64">; honeyAdded: ToField<"u64">; totalHoneyLocked: ToField<"u64">; weightedHoneyLocked: ToField<"u128">; healthIncrease: ToField<"u64">; honeyHealth: ToField<"u64"> }

export type HealthInfusedInBeeReified = Reified< HealthInfusedInBee, HealthInfusedInBeeFields >;

export class HealthInfusedInBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HealthInfusedInBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HealthInfusedInBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HealthInfusedInBee`; readonly $typeArgs: []; readonly $isPhantom = HealthInfusedInBee.$isPhantom;

 readonly version: ToField<"u64">; readonly honeyAdded: ToField<"u64">; readonly totalHoneyLocked: ToField<"u64">; readonly weightedHoneyLocked: ToField<"u128">; readonly healthIncrease: ToField<"u64">; readonly honeyHealth: ToField<"u64">

 private constructor(typeArgs: [], fields: HealthInfusedInBeeFields, ) { this.$fullTypeName = composeSuiType( HealthInfusedInBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HealthInfusedInBee`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.honeyAdded = fields.honeyAdded;; this.totalHoneyLocked = fields.totalHoneyLocked;; this.weightedHoneyLocked = fields.weightedHoneyLocked;; this.healthIncrease = fields.healthIncrease;; this.honeyHealth = fields.honeyHealth; }

 static reified( ): HealthInfusedInBeeReified { return { typeName: HealthInfusedInBee.$typeName, fullTypeName: composeSuiType( HealthInfusedInBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HealthInfusedInBee`, typeArgs: [ ] as [], isPhantom: HealthInfusedInBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HealthInfusedInBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HealthInfusedInBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HealthInfusedInBee.fromBcs( data, ), bcs: HealthInfusedInBee.bcs, fromJSONField: (field: any) => HealthInfusedInBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HealthInfusedInBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HealthInfusedInBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HealthInfusedInBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HealthInfusedInBee.fetch( client, id, ), new: ( fields: HealthInfusedInBeeFields, ) => { return new HealthInfusedInBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HealthInfusedInBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HealthInfusedInBee>> { return phantom(HealthInfusedInBee.reified( )); } static get p() { return HealthInfusedInBee.phantom() }

 static get bcs() { return bcs.struct("HealthInfusedInBee", {

 version: bcs.u64(), honey_added: bcs.u64(), total_honey_locked: bcs.u64(), weighted_honey_locked: bcs.u128(), health_increase: bcs.u64(), honey_health: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HealthInfusedInBee { return HealthInfusedInBee.reified( ).new( { version: decodeFromFields("u64", fields.version), honeyAdded: decodeFromFields("u64", fields.honey_added), totalHoneyLocked: decodeFromFields("u64", fields.total_honey_locked), weightedHoneyLocked: decodeFromFields("u128", fields.weighted_honey_locked), healthIncrease: decodeFromFields("u64", fields.health_increase), honeyHealth: decodeFromFields("u64", fields.honey_health) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HealthInfusedInBee { if (!isHealthInfusedInBee(item.type)) { throw new Error("not a HealthInfusedInBee type");

 }

 return HealthInfusedInBee.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), honeyAdded: decodeFromFieldsWithTypes("u64", item.fields.honey_added), totalHoneyLocked: decodeFromFieldsWithTypes("u64", item.fields.total_honey_locked), weightedHoneyLocked: decodeFromFieldsWithTypes("u128", item.fields.weighted_honey_locked), healthIncrease: decodeFromFieldsWithTypes("u64", item.fields.health_increase), honeyHealth: decodeFromFieldsWithTypes("u64", item.fields.honey_health) } ) }

 static fromBcs( data: Uint8Array ): HealthInfusedInBee { return HealthInfusedInBee.fromFields( HealthInfusedInBee.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),honeyAdded: this.honeyAdded.toString(),totalHoneyLocked: this.totalHoneyLocked.toString(),weightedHoneyLocked: this.weightedHoneyLocked.toString(),healthIncrease: this.healthIncrease.toString(),honeyHealth: this.honeyHealth.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HealthInfusedInBee { return HealthInfusedInBee.reified( ).new( { version: decodeFromJSONField("u64", field.version), honeyAdded: decodeFromJSONField("u64", field.honeyAdded), totalHoneyLocked: decodeFromJSONField("u64", field.totalHoneyLocked), weightedHoneyLocked: decodeFromJSONField("u128", field.weightedHoneyLocked), healthIncrease: decodeFromJSONField("u64", field.healthIncrease), honeyHealth: decodeFromJSONField("u64", field.honeyHealth) } ) }

 static fromJSON( json: Record<string, any> ): HealthInfusedInBee { if (json.$typeName !== HealthInfusedInBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HealthInfusedInBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HealthInfusedInBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHealthInfusedInBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HealthInfusedInBee object`); } return HealthInfusedInBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HealthInfusedInBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHealthInfusedInBee(data.bcs.type)) { throw new Error(`object at is not a HealthInfusedInBee object`); }

 return HealthInfusedInBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HealthInfusedInBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HealthInfusedInBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HealthInfusedInBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHealthInfusedInBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HealthInfusedInBee object`); }

 return HealthInfusedInBee.fromSuiObjectData( res.data ); }

 }

/* ============================== HiddenBeeDeleted =============================== */

export function isHiddenBeeDeleted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiddenBeeDeleted`; }

export interface HiddenBeeDeletedFields { deletedAt: ToField<"u64">; version: ToField<"u64">; winningsSum: ToField<"u64">; loosingSum: ToField<"u64">; dragonDustEmitted: ToField<"u64"> }

export type HiddenBeeDeletedReified = Reified< HiddenBeeDeleted, HiddenBeeDeletedFields >;

export class HiddenBeeDeleted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiddenBeeDeleted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiddenBeeDeleted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiddenBeeDeleted`; readonly $typeArgs: []; readonly $isPhantom = HiddenBeeDeleted.$isPhantom;

 readonly deletedAt: ToField<"u64">; readonly version: ToField<"u64">; readonly winningsSum: ToField<"u64">; readonly loosingSum: ToField<"u64">; readonly dragonDustEmitted: ToField<"u64">

 private constructor(typeArgs: [], fields: HiddenBeeDeletedFields, ) { this.$fullTypeName = composeSuiType( HiddenBeeDeleted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiddenBeeDeleted`; this.$typeArgs = typeArgs;

 this.deletedAt = fields.deletedAt;; this.version = fields.version;; this.winningsSum = fields.winningsSum;; this.loosingSum = fields.loosingSum;; this.dragonDustEmitted = fields.dragonDustEmitted; }

 static reified( ): HiddenBeeDeletedReified { return { typeName: HiddenBeeDeleted.$typeName, fullTypeName: composeSuiType( HiddenBeeDeleted.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiddenBeeDeleted`, typeArgs: [ ] as [], isPhantom: HiddenBeeDeleted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiddenBeeDeleted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiddenBeeDeleted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiddenBeeDeleted.fromBcs( data, ), bcs: HiddenBeeDeleted.bcs, fromJSONField: (field: any) => HiddenBeeDeleted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiddenBeeDeleted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiddenBeeDeleted.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiddenBeeDeleted.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiddenBeeDeleted.fetch( client, id, ), new: ( fields: HiddenBeeDeletedFields, ) => { return new HiddenBeeDeleted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiddenBeeDeleted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiddenBeeDeleted>> { return phantom(HiddenBeeDeleted.reified( )); } static get p() { return HiddenBeeDeleted.phantom() }

 static get bcs() { return bcs.struct("HiddenBeeDeleted", {

 deleted_at: bcs.u64(), version: bcs.u64(), winnings_sum: bcs.u64(), loosing_sum: bcs.u64(), dragon_dust_emitted: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiddenBeeDeleted { return HiddenBeeDeleted.reified( ).new( { deletedAt: decodeFromFields("u64", fields.deleted_at), version: decodeFromFields("u64", fields.version), winningsSum: decodeFromFields("u64", fields.winnings_sum), loosingSum: decodeFromFields("u64", fields.loosing_sum), dragonDustEmitted: decodeFromFields("u64", fields.dragon_dust_emitted) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiddenBeeDeleted { if (!isHiddenBeeDeleted(item.type)) { throw new Error("not a HiddenBeeDeleted type");

 }

 return HiddenBeeDeleted.reified( ).new( { deletedAt: decodeFromFieldsWithTypes("u64", item.fields.deleted_at), version: decodeFromFieldsWithTypes("u64", item.fields.version), winningsSum: decodeFromFieldsWithTypes("u64", item.fields.winnings_sum), loosingSum: decodeFromFieldsWithTypes("u64", item.fields.loosing_sum), dragonDustEmitted: decodeFromFieldsWithTypes("u64", item.fields.dragon_dust_emitted) } ) }

 static fromBcs( data: Uint8Array ): HiddenBeeDeleted { return HiddenBeeDeleted.fromFields( HiddenBeeDeleted.bcs.parse(data) ) }

 toJSONField() { return {

 deletedAt: this.deletedAt.toString(),version: this.version.toString(),winningsSum: this.winningsSum.toString(),loosingSum: this.loosingSum.toString(),dragonDustEmitted: this.dragonDustEmitted.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiddenBeeDeleted { return HiddenBeeDeleted.reified( ).new( { deletedAt: decodeFromJSONField("u64", field.deletedAt), version: decodeFromJSONField("u64", field.version), winningsSum: decodeFromJSONField("u64", field.winningsSum), loosingSum: decodeFromJSONField("u64", field.loosingSum), dragonDustEmitted: decodeFromJSONField("u64", field.dragonDustEmitted) } ) }

 static fromJSON( json: Record<string, any> ): HiddenBeeDeleted { if (json.$typeName !== HiddenBeeDeleted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiddenBeeDeleted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiddenBeeDeleted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiddenBeeDeleted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiddenBeeDeleted object`); } return HiddenBeeDeleted.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiddenBeeDeleted { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiddenBeeDeleted(data.bcs.type)) { throw new Error(`object at is not a HiddenBeeDeleted object`); }

 return HiddenBeeDeleted.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiddenBeeDeleted.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiddenBeeDeleted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiddenBeeDeleted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiddenBeeDeleted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiddenBeeDeleted object`); }

 return HiddenBeeDeleted.fromSuiObjectData( res.data ); }

 }

/* ============================== HiddenMysticalBee =============================== */

export function isHiddenMysticalBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiddenMysticalBee`; }

export interface HiddenMysticalBeeFields { mysticalBee: ToField<Option<MysticalBee>>; winnings: ToField<Balance<ToPhantom<SUI>>>; winningsSum: ToField<"u64">; loosingSum: ToField<"u64">; dragonDustEmitted: ToField<"u64"> }

export type HiddenMysticalBeeReified = Reified< HiddenMysticalBee, HiddenMysticalBeeFields >;

export class HiddenMysticalBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiddenMysticalBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiddenMysticalBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiddenMysticalBee`; readonly $typeArgs: []; readonly $isPhantom = HiddenMysticalBee.$isPhantom;

 readonly mysticalBee: ToField<Option<MysticalBee>>; readonly winnings: ToField<Balance<ToPhantom<SUI>>>; readonly winningsSum: ToField<"u64">; readonly loosingSum: ToField<"u64">; readonly dragonDustEmitted: ToField<"u64">

 private constructor(typeArgs: [], fields: HiddenMysticalBeeFields, ) { this.$fullTypeName = composeSuiType( HiddenMysticalBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiddenMysticalBee`; this.$typeArgs = typeArgs;

 this.mysticalBee = fields.mysticalBee;; this.winnings = fields.winnings;; this.winningsSum = fields.winningsSum;; this.loosingSum = fields.loosingSum;; this.dragonDustEmitted = fields.dragonDustEmitted; }

 static reified( ): HiddenMysticalBeeReified { return { typeName: HiddenMysticalBee.$typeName, fullTypeName: composeSuiType( HiddenMysticalBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiddenMysticalBee`, typeArgs: [ ] as [], isPhantom: HiddenMysticalBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiddenMysticalBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiddenMysticalBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiddenMysticalBee.fromBcs( data, ), bcs: HiddenMysticalBee.bcs, fromJSONField: (field: any) => HiddenMysticalBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiddenMysticalBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiddenMysticalBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiddenMysticalBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiddenMysticalBee.fetch( client, id, ), new: ( fields: HiddenMysticalBeeFields, ) => { return new HiddenMysticalBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiddenMysticalBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiddenMysticalBee>> { return phantom(HiddenMysticalBee.reified( )); } static get p() { return HiddenMysticalBee.phantom() }

 static get bcs() { return bcs.struct("HiddenMysticalBee", {

 mystical_bee: Option.bcs(MysticalBee.bcs), winnings: Balance.bcs, winnings_sum: bcs.u64(), loosing_sum: bcs.u64(), dragon_dust_emitted: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiddenMysticalBee { return HiddenMysticalBee.reified( ).new( { mysticalBee: decodeFromFields(Option.reified(MysticalBee.reified()), fields.mystical_bee), winnings: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.winnings), winningsSum: decodeFromFields("u64", fields.winnings_sum), loosingSum: decodeFromFields("u64", fields.loosing_sum), dragonDustEmitted: decodeFromFields("u64", fields.dragon_dust_emitted) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiddenMysticalBee { if (!isHiddenMysticalBee(item.type)) { throw new Error("not a HiddenMysticalBee type");

 }

 return HiddenMysticalBee.reified( ).new( { mysticalBee: decodeFromFieldsWithTypes(Option.reified(MysticalBee.reified()), item.fields.mystical_bee), winnings: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.winnings), winningsSum: decodeFromFieldsWithTypes("u64", item.fields.winnings_sum), loosingSum: decodeFromFieldsWithTypes("u64", item.fields.loosing_sum), dragonDustEmitted: decodeFromFieldsWithTypes("u64", item.fields.dragon_dust_emitted) } ) }

 static fromBcs( data: Uint8Array ): HiddenMysticalBee { return HiddenMysticalBee.fromFields( HiddenMysticalBee.bcs.parse(data) ) }

 toJSONField() { return {

 mysticalBee: fieldToJSON<Option<MysticalBee>>(`${Option.$typeName}<${MysticalBee.$typeName}>`, this.mysticalBee),winnings: this.winnings.toJSONField(),winningsSum: this.winningsSum.toString(),loosingSum: this.loosingSum.toString(),dragonDustEmitted: this.dragonDustEmitted.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiddenMysticalBee { return HiddenMysticalBee.reified( ).new( { mysticalBee: decodeFromJSONField(Option.reified(MysticalBee.reified()), field.mysticalBee), winnings: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.winnings), winningsSum: decodeFromJSONField("u64", field.winningsSum), loosingSum: decodeFromJSONField("u64", field.loosingSum), dragonDustEmitted: decodeFromJSONField("u64", field.dragonDustEmitted) } ) }

 static fromJSON( json: Record<string, any> ): HiddenMysticalBee { if (json.$typeName !== HiddenMysticalBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiddenMysticalBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiddenMysticalBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiddenMysticalBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiddenMysticalBee object`); } return HiddenMysticalBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiddenMysticalBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiddenMysticalBee(data.bcs.type)) { throw new Error(`object at is not a HiddenMysticalBee object`); }

 return HiddenMysticalBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiddenMysticalBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiddenMysticalBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiddenMysticalBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiddenMysticalBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiddenMysticalBee object`); }

 return HiddenMysticalBee.fromSuiObjectData( res.data ); }

 }

/* ============================== HiddenWorld =============================== */

export function isHiddenWorld(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiddenWorld`; }

export interface HiddenWorldFields { id: ToField<UID>; cap: ToField<HiddenWorldCapability>; suiPool: ToField<Balance<ToPhantom<SUI>>>; config: ToField<HiddenWorldConfig>; avgQuestsPlayed: ToField<"u64">; avgDragonDustEmitted: ToField<"u64">; totalQuestsCount: ToField<"u256">; hiddenBees: ToField<LinkedTable<"u64", ToPhantom<HiddenMysticalBee>>>; hiddenBeesList: ToField<LinkedTable<"u64", ToPhantom<Vector<"u64">>>>; listCount: ToField<"u64">; trainerSessions: ToField<LinkedTable<"address", ToPhantom<TrainerSession>>>; activeTrainers: ToField<LinkedTable<"address", ToPhantom<QuestRequest>>>; activeTrainersList: ToField<LinkedTable<"u64", "address">>; activeTrainersIndexes: ToField<Vector<"u64">>; p2PQuests: ToField<LinkedTable<String1, ToPhantom<P2pGameSession>>>; beesToCollect: ToField<LinkedTable<"address", ToPhantom<Vector<MysticalBee>>>>; dragonDust: ToField<LinkedTable<"u64", ToPhantom<DragonDust>>>; moduleVersion: ToField<"u64"> }

export type HiddenWorldReified = Reified< HiddenWorld, HiddenWorldFields >;

export class HiddenWorld implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiddenWorld`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiddenWorld.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiddenWorld`; readonly $typeArgs: []; readonly $isPhantom = HiddenWorld.$isPhantom;

 readonly id: ToField<UID>; readonly cap: ToField<HiddenWorldCapability>; readonly suiPool: ToField<Balance<ToPhantom<SUI>>>; readonly config: ToField<HiddenWorldConfig>; readonly avgQuestsPlayed: ToField<"u64">; readonly avgDragonDustEmitted: ToField<"u64">; readonly totalQuestsCount: ToField<"u256">; readonly hiddenBees: ToField<LinkedTable<"u64", ToPhantom<HiddenMysticalBee>>>; readonly hiddenBeesList: ToField<LinkedTable<"u64", ToPhantom<Vector<"u64">>>>; readonly listCount: ToField<"u64">; readonly trainerSessions: ToField<LinkedTable<"address", ToPhantom<TrainerSession>>>; readonly activeTrainers: ToField<LinkedTable<"address", ToPhantom<QuestRequest>>>; readonly activeTrainersList: ToField<LinkedTable<"u64", "address">>; readonly activeTrainersIndexes: ToField<Vector<"u64">>; readonly p2PQuests: ToField<LinkedTable<String1, ToPhantom<P2pGameSession>>>; readonly beesToCollect: ToField<LinkedTable<"address", ToPhantom<Vector<MysticalBee>>>>; readonly dragonDust: ToField<LinkedTable<"u64", ToPhantom<DragonDust>>>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: HiddenWorldFields, ) { this.$fullTypeName = composeSuiType( HiddenWorld.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiddenWorld`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.cap = fields.cap;; this.suiPool = fields.suiPool;; this.config = fields.config;; this.avgQuestsPlayed = fields.avgQuestsPlayed;; this.avgDragonDustEmitted = fields.avgDragonDustEmitted;; this.totalQuestsCount = fields.totalQuestsCount;; this.hiddenBees = fields.hiddenBees;; this.hiddenBeesList = fields.hiddenBeesList;; this.listCount = fields.listCount;; this.trainerSessions = fields.trainerSessions;; this.activeTrainers = fields.activeTrainers;; this.activeTrainersList = fields.activeTrainersList;; this.activeTrainersIndexes = fields.activeTrainersIndexes;; this.p2PQuests = fields.p2PQuests;; this.beesToCollect = fields.beesToCollect;; this.dragonDust = fields.dragonDust;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): HiddenWorldReified { return { typeName: HiddenWorld.$typeName, fullTypeName: composeSuiType( HiddenWorld.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiddenWorld`, typeArgs: [ ] as [], isPhantom: HiddenWorld.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiddenWorld.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiddenWorld.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiddenWorld.fromBcs( data, ), bcs: HiddenWorld.bcs, fromJSONField: (field: any) => HiddenWorld.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiddenWorld.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiddenWorld.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiddenWorld.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiddenWorld.fetch( client, id, ), new: ( fields: HiddenWorldFields, ) => { return new HiddenWorld( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiddenWorld.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiddenWorld>> { return phantom(HiddenWorld.reified( )); } static get p() { return HiddenWorld.phantom() }

 static get bcs() { return bcs.struct("HiddenWorld", {

 id: UID.bcs, cap: HiddenWorldCapability.bcs, sui_pool: Balance.bcs, config: HiddenWorldConfig.bcs, avg_quests_played: bcs.u64(), avg_dragon_dust_emitted: bcs.u64(), total_quests_count: bcs.u256(), hidden_bees: LinkedTable.bcs(bcs.u64()), hidden_bees_list: LinkedTable.bcs(bcs.u64()), list_count: bcs.u64(), trainer_sessions: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), active_trainers: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), active_trainers_list: LinkedTable.bcs(bcs.u64()), active_trainers_indexes: bcs.vector(bcs.u64()), p2p_quests: LinkedTable.bcs(String1.bcs), bees_to_collect: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), dragon_dust: LinkedTable.bcs(bcs.u64()), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiddenWorld { return HiddenWorld.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), cap: decodeFromFields(HiddenWorldCapability.reified(), fields.cap), suiPool: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.sui_pool), config: decodeFromFields(HiddenWorldConfig.reified(), fields.config), avgQuestsPlayed: decodeFromFields("u64", fields.avg_quests_played), avgDragonDustEmitted: decodeFromFields("u64", fields.avg_dragon_dust_emitted), totalQuestsCount: decodeFromFields("u256", fields.total_quests_count), hiddenBees: decodeFromFields(LinkedTable.reified("u64", reified.phantom(HiddenMysticalBee.reified())), fields.hidden_bees), hiddenBeesList: decodeFromFields(LinkedTable.reified("u64", reified.phantom(reified.vector("u64"))), fields.hidden_bees_list), listCount: decodeFromFields("u64", fields.list_count), trainerSessions: decodeFromFields(LinkedTable.reified("address", reified.phantom(TrainerSession.reified())), fields.trainer_sessions), activeTrainers: decodeFromFields(LinkedTable.reified("address", reified.phantom(QuestRequest.reified())), fields.active_trainers), activeTrainersList: decodeFromFields(LinkedTable.reified("u64", reified.phantom("address")), fields.active_trainers_list), activeTrainersIndexes: decodeFromFields(reified.vector("u64"), fields.active_trainers_indexes), p2PQuests: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom(P2pGameSession.reified())), fields.p2p_quests), beesToCollect: decodeFromFields(LinkedTable.reified("address", reified.phantom(reified.vector(MysticalBee.reified()))), fields.bees_to_collect), dragonDust: decodeFromFields(LinkedTable.reified("u64", reified.phantom(DragonDust.reified())), fields.dragon_dust), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiddenWorld { if (!isHiddenWorld(item.type)) { throw new Error("not a HiddenWorld type");

 }

 return HiddenWorld.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), cap: decodeFromFieldsWithTypes(HiddenWorldCapability.reified(), item.fields.cap), suiPool: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.sui_pool), config: decodeFromFieldsWithTypes(HiddenWorldConfig.reified(), item.fields.config), avgQuestsPlayed: decodeFromFieldsWithTypes("u64", item.fields.avg_quests_played), avgDragonDustEmitted: decodeFromFieldsWithTypes("u64", item.fields.avg_dragon_dust_emitted), totalQuestsCount: decodeFromFieldsWithTypes("u256", item.fields.total_quests_count), hiddenBees: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(HiddenMysticalBee.reified())), item.fields.hidden_bees), hiddenBeesList: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(reified.vector("u64"))), item.fields.hidden_bees_list), listCount: decodeFromFieldsWithTypes("u64", item.fields.list_count), trainerSessions: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(TrainerSession.reified())), item.fields.trainer_sessions), activeTrainers: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(QuestRequest.reified())), item.fields.active_trainers), activeTrainersList: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("address")), item.fields.active_trainers_list), activeTrainersIndexes: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.active_trainers_indexes), p2PQuests: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom(P2pGameSession.reified())), item.fields.p2p_quests), beesToCollect: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(reified.vector(MysticalBee.reified()))), item.fields.bees_to_collect), dragonDust: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(DragonDust.reified())), item.fields.dragon_dust), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): HiddenWorld { return HiddenWorld.fromFields( HiddenWorld.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,cap: this.cap.toJSONField(),suiPool: this.suiPool.toJSONField(),config: this.config.toJSONField(),avgQuestsPlayed: this.avgQuestsPlayed.toString(),avgDragonDustEmitted: this.avgDragonDustEmitted.toString(),totalQuestsCount: this.totalQuestsCount.toString(),hiddenBees: this.hiddenBees.toJSONField(),hiddenBeesList: this.hiddenBeesList.toJSONField(),listCount: this.listCount.toString(),trainerSessions: this.trainerSessions.toJSONField(),activeTrainers: this.activeTrainers.toJSONField(),activeTrainersList: this.activeTrainersList.toJSONField(),activeTrainersIndexes: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.activeTrainersIndexes),p2PQuests: this.p2PQuests.toJSONField(),beesToCollect: this.beesToCollect.toJSONField(),dragonDust: this.dragonDust.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiddenWorld { return HiddenWorld.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), cap: decodeFromJSONField(HiddenWorldCapability.reified(), field.cap), suiPool: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.suiPool), config: decodeFromJSONField(HiddenWorldConfig.reified(), field.config), avgQuestsPlayed: decodeFromJSONField("u64", field.avgQuestsPlayed), avgDragonDustEmitted: decodeFromJSONField("u64", field.avgDragonDustEmitted), totalQuestsCount: decodeFromJSONField("u256", field.totalQuestsCount), hiddenBees: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(HiddenMysticalBee.reified())), field.hiddenBees), hiddenBeesList: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(reified.vector("u64"))), field.hiddenBeesList), listCount: decodeFromJSONField("u64", field.listCount), trainerSessions: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(TrainerSession.reified())), field.trainerSessions), activeTrainers: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(QuestRequest.reified())), field.activeTrainers), activeTrainersList: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("address")), field.activeTrainersList), activeTrainersIndexes: decodeFromJSONField(reified.vector("u64"), field.activeTrainersIndexes), p2PQuests: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom(P2pGameSession.reified())), field.p2PQuests), beesToCollect: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(reified.vector(MysticalBee.reified()))), field.beesToCollect), dragonDust: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(DragonDust.reified())), field.dragonDust), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): HiddenWorld { if (json.$typeName !== HiddenWorld.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiddenWorld.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiddenWorld { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiddenWorld(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiddenWorld object`); } return HiddenWorld.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiddenWorld { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiddenWorld(data.bcs.type)) { throw new Error(`object at is not a HiddenWorld object`); }

 return HiddenWorld.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiddenWorld.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiddenWorld> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiddenWorld object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiddenWorld(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiddenWorld object`); }

 return HiddenWorld.fromSuiObjectData( res.data ); }

 }

/* ============================== HiddenWorldConfig =============================== */

export function isHiddenWorldConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiddenWorldConfig`; }

export interface HiddenWorldConfigFields { isActive: ToField<"bool">; maxActiveDuration: ToField<"u64">; turnDuration: ToField<"u64">; expiryPenaltyPct: ToField<"u64">; minSuiBetAmt: ToField<"u64">; maxSuiBetAmt: ToField<"u64">; sessionHealth: ToField<"u64">; sessionEnergy: ToField<"u64">; minDragonDustChance: ToField<"u64">; maxDragonDustChance: ToField<"u64">; halfLife: ToField<"u64">; healthPctToEmitDust: ToField<"u64">; maxCapabilityIncrease: ToField<"u64">; maxPowerPct: ToField<"u64"> }

export type HiddenWorldConfigReified = Reified< HiddenWorldConfig, HiddenWorldConfigFields >;

export class HiddenWorldConfig implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiddenWorldConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiddenWorldConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiddenWorldConfig`; readonly $typeArgs: []; readonly $isPhantom = HiddenWorldConfig.$isPhantom;

 readonly isActive: ToField<"bool">; readonly maxActiveDuration: ToField<"u64">; readonly turnDuration: ToField<"u64">; readonly expiryPenaltyPct: ToField<"u64">; readonly minSuiBetAmt: ToField<"u64">; readonly maxSuiBetAmt: ToField<"u64">; readonly sessionHealth: ToField<"u64">; readonly sessionEnergy: ToField<"u64">; readonly minDragonDustChance: ToField<"u64">; readonly maxDragonDustChance: ToField<"u64">; readonly halfLife: ToField<"u64">; readonly healthPctToEmitDust: ToField<"u64">; readonly maxCapabilityIncrease: ToField<"u64">; readonly maxPowerPct: ToField<"u64">

 private constructor(typeArgs: [], fields: HiddenWorldConfigFields, ) { this.$fullTypeName = composeSuiType( HiddenWorldConfig.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiddenWorldConfig`; this.$typeArgs = typeArgs;

 this.isActive = fields.isActive;; this.maxActiveDuration = fields.maxActiveDuration;; this.turnDuration = fields.turnDuration;; this.expiryPenaltyPct = fields.expiryPenaltyPct;; this.minSuiBetAmt = fields.minSuiBetAmt;; this.maxSuiBetAmt = fields.maxSuiBetAmt;; this.sessionHealth = fields.sessionHealth;; this.sessionEnergy = fields.sessionEnergy;; this.minDragonDustChance = fields.minDragonDustChance;; this.maxDragonDustChance = fields.maxDragonDustChance;; this.halfLife = fields.halfLife;; this.healthPctToEmitDust = fields.healthPctToEmitDust;; this.maxCapabilityIncrease = fields.maxCapabilityIncrease;; this.maxPowerPct = fields.maxPowerPct; }

 static reified( ): HiddenWorldConfigReified { return { typeName: HiddenWorldConfig.$typeName, fullTypeName: composeSuiType( HiddenWorldConfig.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiddenWorldConfig`, typeArgs: [ ] as [], isPhantom: HiddenWorldConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiddenWorldConfig.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiddenWorldConfig.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiddenWorldConfig.fromBcs( data, ), bcs: HiddenWorldConfig.bcs, fromJSONField: (field: any) => HiddenWorldConfig.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiddenWorldConfig.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiddenWorldConfig.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiddenWorldConfig.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiddenWorldConfig.fetch( client, id, ), new: ( fields: HiddenWorldConfigFields, ) => { return new HiddenWorldConfig( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiddenWorldConfig.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiddenWorldConfig>> { return phantom(HiddenWorldConfig.reified( )); } static get p() { return HiddenWorldConfig.phantom() }

 static get bcs() { return bcs.struct("HiddenWorldConfig", {

 is_active: bcs.bool(), max_active_duration: bcs.u64(), turn_duration: bcs.u64(), expiry_penalty_pct: bcs.u64(), min_sui_bet_amt: bcs.u64(), max_sui_bet_amt: bcs.u64(), session_health: bcs.u64(), session_energy: bcs.u64(), min_dragon_dust_chance: bcs.u64(), max_dragon_dust_chance: bcs.u64(), half_life: bcs.u64(), health_pct_to_emit_dust: bcs.u64(), max_capability_increase: bcs.u64(), max_power_pct: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiddenWorldConfig { return HiddenWorldConfig.reified( ).new( { isActive: decodeFromFields("bool", fields.is_active), maxActiveDuration: decodeFromFields("u64", fields.max_active_duration), turnDuration: decodeFromFields("u64", fields.turn_duration), expiryPenaltyPct: decodeFromFields("u64", fields.expiry_penalty_pct), minSuiBetAmt: decodeFromFields("u64", fields.min_sui_bet_amt), maxSuiBetAmt: decodeFromFields("u64", fields.max_sui_bet_amt), sessionHealth: decodeFromFields("u64", fields.session_health), sessionEnergy: decodeFromFields("u64", fields.session_energy), minDragonDustChance: decodeFromFields("u64", fields.min_dragon_dust_chance), maxDragonDustChance: decodeFromFields("u64", fields.max_dragon_dust_chance), halfLife: decodeFromFields("u64", fields.half_life), healthPctToEmitDust: decodeFromFields("u64", fields.health_pct_to_emit_dust), maxCapabilityIncrease: decodeFromFields("u64", fields.max_capability_increase), maxPowerPct: decodeFromFields("u64", fields.max_power_pct) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiddenWorldConfig { if (!isHiddenWorldConfig(item.type)) { throw new Error("not a HiddenWorldConfig type");

 }

 return HiddenWorldConfig.reified( ).new( { isActive: decodeFromFieldsWithTypes("bool", item.fields.is_active), maxActiveDuration: decodeFromFieldsWithTypes("u64", item.fields.max_active_duration), turnDuration: decodeFromFieldsWithTypes("u64", item.fields.turn_duration), expiryPenaltyPct: decodeFromFieldsWithTypes("u64", item.fields.expiry_penalty_pct), minSuiBetAmt: decodeFromFieldsWithTypes("u64", item.fields.min_sui_bet_amt), maxSuiBetAmt: decodeFromFieldsWithTypes("u64", item.fields.max_sui_bet_amt), sessionHealth: decodeFromFieldsWithTypes("u64", item.fields.session_health), sessionEnergy: decodeFromFieldsWithTypes("u64", item.fields.session_energy), minDragonDustChance: decodeFromFieldsWithTypes("u64", item.fields.min_dragon_dust_chance), maxDragonDustChance: decodeFromFieldsWithTypes("u64", item.fields.max_dragon_dust_chance), halfLife: decodeFromFieldsWithTypes("u64", item.fields.half_life), healthPctToEmitDust: decodeFromFieldsWithTypes("u64", item.fields.health_pct_to_emit_dust), maxCapabilityIncrease: decodeFromFieldsWithTypes("u64", item.fields.max_capability_increase), maxPowerPct: decodeFromFieldsWithTypes("u64", item.fields.max_power_pct) } ) }

 static fromBcs( data: Uint8Array ): HiddenWorldConfig { return HiddenWorldConfig.fromFields( HiddenWorldConfig.bcs.parse(data) ) }

 toJSONField() { return {

 isActive: this.isActive,maxActiveDuration: this.maxActiveDuration.toString(),turnDuration: this.turnDuration.toString(),expiryPenaltyPct: this.expiryPenaltyPct.toString(),minSuiBetAmt: this.minSuiBetAmt.toString(),maxSuiBetAmt: this.maxSuiBetAmt.toString(),sessionHealth: this.sessionHealth.toString(),sessionEnergy: this.sessionEnergy.toString(),minDragonDustChance: this.minDragonDustChance.toString(),maxDragonDustChance: this.maxDragonDustChance.toString(),halfLife: this.halfLife.toString(),healthPctToEmitDust: this.healthPctToEmitDust.toString(),maxCapabilityIncrease: this.maxCapabilityIncrease.toString(),maxPowerPct: this.maxPowerPct.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiddenWorldConfig { return HiddenWorldConfig.reified( ).new( { isActive: decodeFromJSONField("bool", field.isActive), maxActiveDuration: decodeFromJSONField("u64", field.maxActiveDuration), turnDuration: decodeFromJSONField("u64", field.turnDuration), expiryPenaltyPct: decodeFromJSONField("u64", field.expiryPenaltyPct), minSuiBetAmt: decodeFromJSONField("u64", field.minSuiBetAmt), maxSuiBetAmt: decodeFromJSONField("u64", field.maxSuiBetAmt), sessionHealth: decodeFromJSONField("u64", field.sessionHealth), sessionEnergy: decodeFromJSONField("u64", field.sessionEnergy), minDragonDustChance: decodeFromJSONField("u64", field.minDragonDustChance), maxDragonDustChance: decodeFromJSONField("u64", field.maxDragonDustChance), halfLife: decodeFromJSONField("u64", field.halfLife), healthPctToEmitDust: decodeFromJSONField("u64", field.healthPctToEmitDust), maxCapabilityIncrease: decodeFromJSONField("u64", field.maxCapabilityIncrease), maxPowerPct: decodeFromJSONField("u64", field.maxPowerPct) } ) }

 static fromJSON( json: Record<string, any> ): HiddenWorldConfig { if (json.$typeName !== HiddenWorldConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiddenWorldConfig.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiddenWorldConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiddenWorldConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiddenWorldConfig object`); } return HiddenWorldConfig.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiddenWorldConfig { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiddenWorldConfig(data.bcs.type)) { throw new Error(`object at is not a HiddenWorldConfig object`); }

 return HiddenWorldConfig.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiddenWorldConfig.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiddenWorldConfig> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiddenWorldConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiddenWorldConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiddenWorldConfig object`); }

 return HiddenWorldConfig.fromSuiObjectData( res.data ); }

 }

/* ============================== HiddenWorldQuest =============================== */

export function isHiddenWorldQuest(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiddenWorldQuest`; }

export interface HiddenWorldQuestFields { trainerAddr1: ToField<"address">; trainerAddr2: ToField<"address">; nextTurn: ToField<"u8">; lastActionTs: ToField<"u64">; suiBetBal: ToField<Balance<ToPhantom<SUI>>>; startGameHealth: ToField<"u64">; startGameEnergy: ToField<"u64">; userBeeHealth: ToField<"u64">; userBeeEnergy: ToField<"u64">; userDragonBee: ToField<MysticalBee>; user2BeeHealth: ToField<"u64">; user2BeeEnergy: ToField<"u64">; user2DragonBee: ToField<MysticalBee> }

export type HiddenWorldQuestReified = Reified< HiddenWorldQuest, HiddenWorldQuestFields >;

export class HiddenWorldQuest implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiddenWorldQuest`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiddenWorldQuest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiddenWorldQuest`; readonly $typeArgs: []; readonly $isPhantom = HiddenWorldQuest.$isPhantom;

 readonly trainerAddr1: ToField<"address">; readonly trainerAddr2: ToField<"address">; readonly nextTurn: ToField<"u8">; readonly lastActionTs: ToField<"u64">; readonly suiBetBal: ToField<Balance<ToPhantom<SUI>>>; readonly startGameHealth: ToField<"u64">; readonly startGameEnergy: ToField<"u64">; readonly userBeeHealth: ToField<"u64">; readonly userBeeEnergy: ToField<"u64">; readonly userDragonBee: ToField<MysticalBee>; readonly user2BeeHealth: ToField<"u64">; readonly user2BeeEnergy: ToField<"u64">; readonly user2DragonBee: ToField<MysticalBee>

 private constructor(typeArgs: [], fields: HiddenWorldQuestFields, ) { this.$fullTypeName = composeSuiType( HiddenWorldQuest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiddenWorldQuest`; this.$typeArgs = typeArgs;

 this.trainerAddr1 = fields.trainerAddr1;; this.trainerAddr2 = fields.trainerAddr2;; this.nextTurn = fields.nextTurn;; this.lastActionTs = fields.lastActionTs;; this.suiBetBal = fields.suiBetBal;; this.startGameHealth = fields.startGameHealth;; this.startGameEnergy = fields.startGameEnergy;; this.userBeeHealth = fields.userBeeHealth;; this.userBeeEnergy = fields.userBeeEnergy;; this.userDragonBee = fields.userDragonBee;; this.user2BeeHealth = fields.user2BeeHealth;; this.user2BeeEnergy = fields.user2BeeEnergy;; this.user2DragonBee = fields.user2DragonBee; }

 static reified( ): HiddenWorldQuestReified { return { typeName: HiddenWorldQuest.$typeName, fullTypeName: composeSuiType( HiddenWorldQuest.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiddenWorldQuest`, typeArgs: [ ] as [], isPhantom: HiddenWorldQuest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiddenWorldQuest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiddenWorldQuest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiddenWorldQuest.fromBcs( data, ), bcs: HiddenWorldQuest.bcs, fromJSONField: (field: any) => HiddenWorldQuest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiddenWorldQuest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiddenWorldQuest.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiddenWorldQuest.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiddenWorldQuest.fetch( client, id, ), new: ( fields: HiddenWorldQuestFields, ) => { return new HiddenWorldQuest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiddenWorldQuest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiddenWorldQuest>> { return phantom(HiddenWorldQuest.reified( )); } static get p() { return HiddenWorldQuest.phantom() }

 static get bcs() { return bcs.struct("HiddenWorldQuest", {

 trainer_addr1: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr2: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), next_turn: bcs.u8(), last_action_ts: bcs.u64(), sui_bet_bal: Balance.bcs, start_game_health: bcs.u64(), start_game_energy: bcs.u64(), user_bee_health: bcs.u64(), user_bee_energy: bcs.u64(), user_dragon_bee: MysticalBee.bcs, user2_bee_health: bcs.u64(), user2_bee_energy: bcs.u64(), user2_dragon_bee: MysticalBee.bcs

}) };

 static fromFields( fields: Record<string, any> ): HiddenWorldQuest { return HiddenWorldQuest.reified( ).new( { trainerAddr1: decodeFromFields("address", fields.trainer_addr1), trainerAddr2: decodeFromFields("address", fields.trainer_addr2), nextTurn: decodeFromFields("u8", fields.next_turn), lastActionTs: decodeFromFields("u64", fields.last_action_ts), suiBetBal: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.sui_bet_bal), startGameHealth: decodeFromFields("u64", fields.start_game_health), startGameEnergy: decodeFromFields("u64", fields.start_game_energy), userBeeHealth: decodeFromFields("u64", fields.user_bee_health), userBeeEnergy: decodeFromFields("u64", fields.user_bee_energy), userDragonBee: decodeFromFields(MysticalBee.reified(), fields.user_dragon_bee), user2BeeHealth: decodeFromFields("u64", fields.user2_bee_health), user2BeeEnergy: decodeFromFields("u64", fields.user2_bee_energy), user2DragonBee: decodeFromFields(MysticalBee.reified(), fields.user2_dragon_bee) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiddenWorldQuest { if (!isHiddenWorldQuest(item.type)) { throw new Error("not a HiddenWorldQuest type");

 }

 return HiddenWorldQuest.reified( ).new( { trainerAddr1: decodeFromFieldsWithTypes("address", item.fields.trainer_addr1), trainerAddr2: decodeFromFieldsWithTypes("address", item.fields.trainer_addr2), nextTurn: decodeFromFieldsWithTypes("u8", item.fields.next_turn), lastActionTs: decodeFromFieldsWithTypes("u64", item.fields.last_action_ts), suiBetBal: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.sui_bet_bal), startGameHealth: decodeFromFieldsWithTypes("u64", item.fields.start_game_health), startGameEnergy: decodeFromFieldsWithTypes("u64", item.fields.start_game_energy), userBeeHealth: decodeFromFieldsWithTypes("u64", item.fields.user_bee_health), userBeeEnergy: decodeFromFieldsWithTypes("u64", item.fields.user_bee_energy), userDragonBee: decodeFromFieldsWithTypes(MysticalBee.reified(), item.fields.user_dragon_bee), user2BeeHealth: decodeFromFieldsWithTypes("u64", item.fields.user2_bee_health), user2BeeEnergy: decodeFromFieldsWithTypes("u64", item.fields.user2_bee_energy), user2DragonBee: decodeFromFieldsWithTypes(MysticalBee.reified(), item.fields.user2_dragon_bee) } ) }

 static fromBcs( data: Uint8Array ): HiddenWorldQuest { return HiddenWorldQuest.fromFields( HiddenWorldQuest.bcs.parse(data) ) }

 toJSONField() { return {

 trainerAddr1: this.trainerAddr1,trainerAddr2: this.trainerAddr2,nextTurn: this.nextTurn,lastActionTs: this.lastActionTs.toString(),suiBetBal: this.suiBetBal.toJSONField(),startGameHealth: this.startGameHealth.toString(),startGameEnergy: this.startGameEnergy.toString(),userBeeHealth: this.userBeeHealth.toString(),userBeeEnergy: this.userBeeEnergy.toString(),userDragonBee: this.userDragonBee.toJSONField(),user2BeeHealth: this.user2BeeHealth.toString(),user2BeeEnergy: this.user2BeeEnergy.toString(),user2DragonBee: this.user2DragonBee.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiddenWorldQuest { return HiddenWorldQuest.reified( ).new( { trainerAddr1: decodeFromJSONField("address", field.trainerAddr1), trainerAddr2: decodeFromJSONField("address", field.trainerAddr2), nextTurn: decodeFromJSONField("u8", field.nextTurn), lastActionTs: decodeFromJSONField("u64", field.lastActionTs), suiBetBal: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.suiBetBal), startGameHealth: decodeFromJSONField("u64", field.startGameHealth), startGameEnergy: decodeFromJSONField("u64", field.startGameEnergy), userBeeHealth: decodeFromJSONField("u64", field.userBeeHealth), userBeeEnergy: decodeFromJSONField("u64", field.userBeeEnergy), userDragonBee: decodeFromJSONField(MysticalBee.reified(), field.userDragonBee), user2BeeHealth: decodeFromJSONField("u64", field.user2BeeHealth), user2BeeEnergy: decodeFromJSONField("u64", field.user2BeeEnergy), user2DragonBee: decodeFromJSONField(MysticalBee.reified(), field.user2DragonBee) } ) }

 static fromJSON( json: Record<string, any> ): HiddenWorldQuest { if (json.$typeName !== HiddenWorldQuest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiddenWorldQuest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiddenWorldQuest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiddenWorldQuest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiddenWorldQuest object`); } return HiddenWorldQuest.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiddenWorldQuest { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiddenWorldQuest(data.bcs.type)) { throw new Error(`object at is not a HiddenWorldQuest object`); }

 return HiddenWorldQuest.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiddenWorldQuest.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiddenWorldQuest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiddenWorldQuest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiddenWorldQuest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiddenWorldQuest object`); }

 return HiddenWorldQuest.fromSuiObjectData( res.data ); }

 }

/* ============================== HiddenWorldRewardsClaimed =============================== */

export function isHiddenWorldRewardsClaimed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiddenWorldRewardsClaimed`; }

export interface HiddenWorldRewardsClaimedFields { trainerAddress: ToField<"address">; suiWinnings: ToField<"u64">; claimedBees: ToField<Vector<"u64">>; claimedPerBeeAmt: ToField<Vector<"u64">> }

export type HiddenWorldRewardsClaimedReified = Reified< HiddenWorldRewardsClaimed, HiddenWorldRewardsClaimedFields >;

export class HiddenWorldRewardsClaimed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiddenWorldRewardsClaimed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiddenWorldRewardsClaimed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiddenWorldRewardsClaimed`; readonly $typeArgs: []; readonly $isPhantom = HiddenWorldRewardsClaimed.$isPhantom;

 readonly trainerAddress: ToField<"address">; readonly suiWinnings: ToField<"u64">; readonly claimedBees: ToField<Vector<"u64">>; readonly claimedPerBeeAmt: ToField<Vector<"u64">>

 private constructor(typeArgs: [], fields: HiddenWorldRewardsClaimedFields, ) { this.$fullTypeName = composeSuiType( HiddenWorldRewardsClaimed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiddenWorldRewardsClaimed`; this.$typeArgs = typeArgs;

 this.trainerAddress = fields.trainerAddress;; this.suiWinnings = fields.suiWinnings;; this.claimedBees = fields.claimedBees;; this.claimedPerBeeAmt = fields.claimedPerBeeAmt; }

 static reified( ): HiddenWorldRewardsClaimedReified { return { typeName: HiddenWorldRewardsClaimed.$typeName, fullTypeName: composeSuiType( HiddenWorldRewardsClaimed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiddenWorldRewardsClaimed`, typeArgs: [ ] as [], isPhantom: HiddenWorldRewardsClaimed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiddenWorldRewardsClaimed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiddenWorldRewardsClaimed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiddenWorldRewardsClaimed.fromBcs( data, ), bcs: HiddenWorldRewardsClaimed.bcs, fromJSONField: (field: any) => HiddenWorldRewardsClaimed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiddenWorldRewardsClaimed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiddenWorldRewardsClaimed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiddenWorldRewardsClaimed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiddenWorldRewardsClaimed.fetch( client, id, ), new: ( fields: HiddenWorldRewardsClaimedFields, ) => { return new HiddenWorldRewardsClaimed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiddenWorldRewardsClaimed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiddenWorldRewardsClaimed>> { return phantom(HiddenWorldRewardsClaimed.reified( )); } static get p() { return HiddenWorldRewardsClaimed.phantom() }

 static get bcs() { return bcs.struct("HiddenWorldRewardsClaimed", {

 trainer_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_winnings: bcs.u64(), claimed_bees: bcs.vector(bcs.u64()), claimed_per_bee_amt: bcs.vector(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): HiddenWorldRewardsClaimed { return HiddenWorldRewardsClaimed.reified( ).new( { trainerAddress: decodeFromFields("address", fields.trainer_address), suiWinnings: decodeFromFields("u64", fields.sui_winnings), claimedBees: decodeFromFields(reified.vector("u64"), fields.claimed_bees), claimedPerBeeAmt: decodeFromFields(reified.vector("u64"), fields.claimed_per_bee_amt) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiddenWorldRewardsClaimed { if (!isHiddenWorldRewardsClaimed(item.type)) { throw new Error("not a HiddenWorldRewardsClaimed type");

 }

 return HiddenWorldRewardsClaimed.reified( ).new( { trainerAddress: decodeFromFieldsWithTypes("address", item.fields.trainer_address), suiWinnings: decodeFromFieldsWithTypes("u64", item.fields.sui_winnings), claimedBees: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_bees), claimedPerBeeAmt: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_per_bee_amt) } ) }

 static fromBcs( data: Uint8Array ): HiddenWorldRewardsClaimed { return HiddenWorldRewardsClaimed.fromFields( HiddenWorldRewardsClaimed.bcs.parse(data) ) }

 toJSONField() { return {

 trainerAddress: this.trainerAddress,suiWinnings: this.suiWinnings.toString(),claimedBees: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedBees),claimedPerBeeAmt: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedPerBeeAmt),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiddenWorldRewardsClaimed { return HiddenWorldRewardsClaimed.reified( ).new( { trainerAddress: decodeFromJSONField("address", field.trainerAddress), suiWinnings: decodeFromJSONField("u64", field.suiWinnings), claimedBees: decodeFromJSONField(reified.vector("u64"), field.claimedBees), claimedPerBeeAmt: decodeFromJSONField(reified.vector("u64"), field.claimedPerBeeAmt) } ) }

 static fromJSON( json: Record<string, any> ): HiddenWorldRewardsClaimed { if (json.$typeName !== HiddenWorldRewardsClaimed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiddenWorldRewardsClaimed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiddenWorldRewardsClaimed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiddenWorldRewardsClaimed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiddenWorldRewardsClaimed object`); } return HiddenWorldRewardsClaimed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiddenWorldRewardsClaimed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiddenWorldRewardsClaimed(data.bcs.type)) { throw new Error(`object at is not a HiddenWorldRewardsClaimed object`); }

 return HiddenWorldRewardsClaimed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiddenWorldRewardsClaimed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiddenWorldRewardsClaimed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiddenWorldRewardsClaimed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiddenWorldRewardsClaimed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiddenWorldRewardsClaimed object`); }

 return HiddenWorldRewardsClaimed.fromSuiObjectData( res.data ); }

 }

/* ============================== HiveAddedForHarvest =============================== */

export function isHiveAddedForHarvest(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiveAddedForHarvest`; }

export interface HiveAddedForHarvestFields { yieldAdded: ToField<"u64"> }

export type HiveAddedForHarvestReified = Reified< HiveAddedForHarvest, HiveAddedForHarvestFields >;

export class HiveAddedForHarvest implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiveAddedForHarvest`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveAddedForHarvest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiveAddedForHarvest`; readonly $typeArgs: []; readonly $isPhantom = HiveAddedForHarvest.$isPhantom;

 readonly yieldAdded: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveAddedForHarvestFields, ) { this.$fullTypeName = composeSuiType( HiveAddedForHarvest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiveAddedForHarvest`; this.$typeArgs = typeArgs;

 this.yieldAdded = fields.yieldAdded; }

 static reified( ): HiveAddedForHarvestReified { return { typeName: HiveAddedForHarvest.$typeName, fullTypeName: composeSuiType( HiveAddedForHarvest.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiveAddedForHarvest`, typeArgs: [ ] as [], isPhantom: HiveAddedForHarvest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAddedForHarvest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAddedForHarvest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAddedForHarvest.fromBcs( data, ), bcs: HiveAddedForHarvest.bcs, fromJSONField: (field: any) => HiveAddedForHarvest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAddedForHarvest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAddedForHarvest.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiveAddedForHarvest.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiveAddedForHarvest.fetch( client, id, ), new: ( fields: HiveAddedForHarvestFields, ) => { return new HiveAddedForHarvest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAddedForHarvest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAddedForHarvest>> { return phantom(HiveAddedForHarvest.reified( )); } static get p() { return HiveAddedForHarvest.phantom() }

 static get bcs() { return bcs.struct("HiveAddedForHarvest", {

 yield_added: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveAddedForHarvest { return HiveAddedForHarvest.reified( ).new( { yieldAdded: decodeFromFields("u64", fields.yield_added) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAddedForHarvest { if (!isHiveAddedForHarvest(item.type)) { throw new Error("not a HiveAddedForHarvest type");

 }

 return HiveAddedForHarvest.reified( ).new( { yieldAdded: decodeFromFieldsWithTypes("u64", item.fields.yield_added) } ) }

 static fromBcs( data: Uint8Array ): HiveAddedForHarvest { return HiveAddedForHarvest.fromFields( HiveAddedForHarvest.bcs.parse(data) ) }

 toJSONField() { return {

 yieldAdded: this.yieldAdded.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAddedForHarvest { return HiveAddedForHarvest.reified( ).new( { yieldAdded: decodeFromJSONField("u64", field.yieldAdded) } ) }

 static fromJSON( json: Record<string, any> ): HiveAddedForHarvest { if (json.$typeName !== HiveAddedForHarvest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAddedForHarvest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAddedForHarvest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAddedForHarvest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAddedForHarvest object`); } return HiveAddedForHarvest.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiveAddedForHarvest { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiveAddedForHarvest(data.bcs.type)) { throw new Error(`object at is not a HiveAddedForHarvest object`); }

 return HiveAddedForHarvest.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiveAddedForHarvest.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAddedForHarvest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAddedForHarvest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAddedForHarvest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAddedForHarvest object`); }

 return HiveAddedForHarvest.fromSuiObjectData( res.data ); }

 }

/* ============================== HiveAddedToTreasury =============================== */

export function isHiveAddedToTreasury(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiveAddedToTreasury`; }

export interface HiveAddedToTreasuryFields { hiveAdded: ToField<"u64">; totalHiveInTreasury: ToField<"u64"> }

export type HiveAddedToTreasuryReified = Reified< HiveAddedToTreasury, HiveAddedToTreasuryFields >;

export class HiveAddedToTreasury implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiveAddedToTreasury`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveAddedToTreasury.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiveAddedToTreasury`; readonly $typeArgs: []; readonly $isPhantom = HiveAddedToTreasury.$isPhantom;

 readonly hiveAdded: ToField<"u64">; readonly totalHiveInTreasury: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveAddedToTreasuryFields, ) { this.$fullTypeName = composeSuiType( HiveAddedToTreasury.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiveAddedToTreasury`; this.$typeArgs = typeArgs;

 this.hiveAdded = fields.hiveAdded;; this.totalHiveInTreasury = fields.totalHiveInTreasury; }

 static reified( ): HiveAddedToTreasuryReified { return { typeName: HiveAddedToTreasury.$typeName, fullTypeName: composeSuiType( HiveAddedToTreasury.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiveAddedToTreasury`, typeArgs: [ ] as [], isPhantom: HiveAddedToTreasury.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAddedToTreasury.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAddedToTreasury.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAddedToTreasury.fromBcs( data, ), bcs: HiveAddedToTreasury.bcs, fromJSONField: (field: any) => HiveAddedToTreasury.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAddedToTreasury.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAddedToTreasury.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiveAddedToTreasury.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiveAddedToTreasury.fetch( client, id, ), new: ( fields: HiveAddedToTreasuryFields, ) => { return new HiveAddedToTreasury( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAddedToTreasury.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAddedToTreasury>> { return phantom(HiveAddedToTreasury.reified( )); } static get p() { return HiveAddedToTreasury.phantom() }

 static get bcs() { return bcs.struct("HiveAddedToTreasury", {

 hive_added: bcs.u64(), total_hive_in_treasury: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveAddedToTreasury { return HiveAddedToTreasury.reified( ).new( { hiveAdded: decodeFromFields("u64", fields.hive_added), totalHiveInTreasury: decodeFromFields("u64", fields.total_hive_in_treasury) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAddedToTreasury { if (!isHiveAddedToTreasury(item.type)) { throw new Error("not a HiveAddedToTreasury type");

 }

 return HiveAddedToTreasury.reified( ).new( { hiveAdded: decodeFromFieldsWithTypes("u64", item.fields.hive_added), totalHiveInTreasury: decodeFromFieldsWithTypes("u64", item.fields.total_hive_in_treasury) } ) }

 static fromBcs( data: Uint8Array ): HiveAddedToTreasury { return HiveAddedToTreasury.fromFields( HiveAddedToTreasury.bcs.parse(data) ) }

 toJSONField() { return {

 hiveAdded: this.hiveAdded.toString(),totalHiveInTreasury: this.totalHiveInTreasury.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAddedToTreasury { return HiveAddedToTreasury.reified( ).new( { hiveAdded: decodeFromJSONField("u64", field.hiveAdded), totalHiveInTreasury: decodeFromJSONField("u64", field.totalHiveInTreasury) } ) }

 static fromJSON( json: Record<string, any> ): HiveAddedToTreasury { if (json.$typeName !== HiveAddedToTreasury.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAddedToTreasury.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAddedToTreasury { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAddedToTreasury(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAddedToTreasury object`); } return HiveAddedToTreasury.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiveAddedToTreasury { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiveAddedToTreasury(data.bcs.type)) { throw new Error(`object at is not a HiveAddedToTreasury object`); }

 return HiveAddedToTreasury.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiveAddedToTreasury.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAddedToTreasury> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAddedToTreasury object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAddedToTreasury(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAddedToTreasury object`); }

 return HiveAddedToTreasury.fromSuiObjectData( res.data ); }

 }

/* ============================== HiveEnergyInfusedInBee =============================== */

export function isHiveEnergyInfusedInBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiveEnergyInfusedInBee`; }

export interface HiveEnergyInfusedInBeeFields { version: ToField<"u64">; addHiveLocked: ToField<"u64">; hiveLockedWithBee: ToField<"u64">; weightedHiveLocked: ToField<"u128">; unlockTimestamp: ToField<"u64">; lockupWeeks: ToField<"u64">; hiveEnergy: ToField<"u64">; totalWeightedHive: ToField<"u128"> }

export type HiveEnergyInfusedInBeeReified = Reified< HiveEnergyInfusedInBee, HiveEnergyInfusedInBeeFields >;

export class HiveEnergyInfusedInBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiveEnergyInfusedInBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveEnergyInfusedInBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiveEnergyInfusedInBee`; readonly $typeArgs: []; readonly $isPhantom = HiveEnergyInfusedInBee.$isPhantom;

 readonly version: ToField<"u64">; readonly addHiveLocked: ToField<"u64">; readonly hiveLockedWithBee: ToField<"u64">; readonly weightedHiveLocked: ToField<"u128">; readonly unlockTimestamp: ToField<"u64">; readonly lockupWeeks: ToField<"u64">; readonly hiveEnergy: ToField<"u64">; readonly totalWeightedHive: ToField<"u128">

 private constructor(typeArgs: [], fields: HiveEnergyInfusedInBeeFields, ) { this.$fullTypeName = composeSuiType( HiveEnergyInfusedInBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiveEnergyInfusedInBee`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.addHiveLocked = fields.addHiveLocked;; this.hiveLockedWithBee = fields.hiveLockedWithBee;; this.weightedHiveLocked = fields.weightedHiveLocked;; this.unlockTimestamp = fields.unlockTimestamp;; this.lockupWeeks = fields.lockupWeeks;; this.hiveEnergy = fields.hiveEnergy;; this.totalWeightedHive = fields.totalWeightedHive; }

 static reified( ): HiveEnergyInfusedInBeeReified { return { typeName: HiveEnergyInfusedInBee.$typeName, fullTypeName: composeSuiType( HiveEnergyInfusedInBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiveEnergyInfusedInBee`, typeArgs: [ ] as [], isPhantom: HiveEnergyInfusedInBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveEnergyInfusedInBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveEnergyInfusedInBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveEnergyInfusedInBee.fromBcs( data, ), bcs: HiveEnergyInfusedInBee.bcs, fromJSONField: (field: any) => HiveEnergyInfusedInBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveEnergyInfusedInBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveEnergyInfusedInBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiveEnergyInfusedInBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiveEnergyInfusedInBee.fetch( client, id, ), new: ( fields: HiveEnergyInfusedInBeeFields, ) => { return new HiveEnergyInfusedInBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveEnergyInfusedInBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveEnergyInfusedInBee>> { return phantom(HiveEnergyInfusedInBee.reified( )); } static get p() { return HiveEnergyInfusedInBee.phantom() }

 static get bcs() { return bcs.struct("HiveEnergyInfusedInBee", {

 version: bcs.u64(), add_hive_locked: bcs.u64(), hive_locked_with_bee: bcs.u64(), weighted_hive_locked: bcs.u128(), unlock_timestamp: bcs.u64(), lockup_weeks: bcs.u64(), hive_energy: bcs.u64(), total_weighted_hive: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): HiveEnergyInfusedInBee { return HiveEnergyInfusedInBee.reified( ).new( { version: decodeFromFields("u64", fields.version), addHiveLocked: decodeFromFields("u64", fields.add_hive_locked), hiveLockedWithBee: decodeFromFields("u64", fields.hive_locked_with_bee), weightedHiveLocked: decodeFromFields("u128", fields.weighted_hive_locked), unlockTimestamp: decodeFromFields("u64", fields.unlock_timestamp), lockupWeeks: decodeFromFields("u64", fields.lockup_weeks), hiveEnergy: decodeFromFields("u64", fields.hive_energy), totalWeightedHive: decodeFromFields("u128", fields.total_weighted_hive) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveEnergyInfusedInBee { if (!isHiveEnergyInfusedInBee(item.type)) { throw new Error("not a HiveEnergyInfusedInBee type");

 }

 return HiveEnergyInfusedInBee.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), addHiveLocked: decodeFromFieldsWithTypes("u64", item.fields.add_hive_locked), hiveLockedWithBee: decodeFromFieldsWithTypes("u64", item.fields.hive_locked_with_bee), weightedHiveLocked: decodeFromFieldsWithTypes("u128", item.fields.weighted_hive_locked), unlockTimestamp: decodeFromFieldsWithTypes("u64", item.fields.unlock_timestamp), lockupWeeks: decodeFromFieldsWithTypes("u64", item.fields.lockup_weeks), hiveEnergy: decodeFromFieldsWithTypes("u64", item.fields.hive_energy), totalWeightedHive: decodeFromFieldsWithTypes("u128", item.fields.total_weighted_hive) } ) }

 static fromBcs( data: Uint8Array ): HiveEnergyInfusedInBee { return HiveEnergyInfusedInBee.fromFields( HiveEnergyInfusedInBee.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),addHiveLocked: this.addHiveLocked.toString(),hiveLockedWithBee: this.hiveLockedWithBee.toString(),weightedHiveLocked: this.weightedHiveLocked.toString(),unlockTimestamp: this.unlockTimestamp.toString(),lockupWeeks: this.lockupWeeks.toString(),hiveEnergy: this.hiveEnergy.toString(),totalWeightedHive: this.totalWeightedHive.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveEnergyInfusedInBee { return HiveEnergyInfusedInBee.reified( ).new( { version: decodeFromJSONField("u64", field.version), addHiveLocked: decodeFromJSONField("u64", field.addHiveLocked), hiveLockedWithBee: decodeFromJSONField("u64", field.hiveLockedWithBee), weightedHiveLocked: decodeFromJSONField("u128", field.weightedHiveLocked), unlockTimestamp: decodeFromJSONField("u64", field.unlockTimestamp), lockupWeeks: decodeFromJSONField("u64", field.lockupWeeks), hiveEnergy: decodeFromJSONField("u64", field.hiveEnergy), totalWeightedHive: decodeFromJSONField("u128", field.totalWeightedHive) } ) }

 static fromJSON( json: Record<string, any> ): HiveEnergyInfusedInBee { if (json.$typeName !== HiveEnergyInfusedInBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveEnergyInfusedInBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveEnergyInfusedInBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveEnergyInfusedInBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveEnergyInfusedInBee object`); } return HiveEnergyInfusedInBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiveEnergyInfusedInBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiveEnergyInfusedInBee(data.bcs.type)) { throw new Error(`object at is not a HiveEnergyInfusedInBee object`); }

 return HiveEnergyInfusedInBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiveEnergyInfusedInBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveEnergyInfusedInBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveEnergyInfusedInBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveEnergyInfusedInBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveEnergyInfusedInBee object`); }

 return HiveEnergyInfusedInBee.fromSuiObjectData( res.data ); }

 }

/* ============================== HiveGraph =============================== */

export function isHiveGraph(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiveGraph`; }

export interface HiveGraphFields { id: ToField<UID>; hiveTwap: ToField<HiveTwapInfo>; followersList: ToField<LinkedTable<"address", ToPhantom<LinkedTable<"address", "bool">>>>; followingList: ToField<LinkedTable<"address", ToPhantom<LinkedTable<"address", "bool">>>>; moduleVersion: ToField<"u64"> }

export type HiveGraphReified = Reified< HiveGraph, HiveGraphFields >;

export class HiveGraph implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiveGraph`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveGraph.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiveGraph`; readonly $typeArgs: []; readonly $isPhantom = HiveGraph.$isPhantom;

 readonly id: ToField<UID>; readonly hiveTwap: ToField<HiveTwapInfo>; readonly followersList: ToField<LinkedTable<"address", ToPhantom<LinkedTable<"address", "bool">>>>; readonly followingList: ToField<LinkedTable<"address", ToPhantom<LinkedTable<"address", "bool">>>>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveGraphFields, ) { this.$fullTypeName = composeSuiType( HiveGraph.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiveGraph`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.hiveTwap = fields.hiveTwap;; this.followersList = fields.followersList;; this.followingList = fields.followingList;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): HiveGraphReified { return { typeName: HiveGraph.$typeName, fullTypeName: composeSuiType( HiveGraph.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiveGraph`, typeArgs: [ ] as [], isPhantom: HiveGraph.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveGraph.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveGraph.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveGraph.fromBcs( data, ), bcs: HiveGraph.bcs, fromJSONField: (field: any) => HiveGraph.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveGraph.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveGraph.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiveGraph.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiveGraph.fetch( client, id, ), new: ( fields: HiveGraphFields, ) => { return new HiveGraph( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveGraph.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveGraph>> { return phantom(HiveGraph.reified( )); } static get p() { return HiveGraph.phantom() }

 static get bcs() { return bcs.struct("HiveGraph", {

 id: UID.bcs, hive_twap: HiveTwapInfo.bcs, followers_list: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), following_list: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveGraph { return HiveGraph.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), hiveTwap: decodeFromFields(HiveTwapInfo.reified(), fields.hive_twap), followersList: decodeFromFields(LinkedTable.reified("address", reified.phantom(LinkedTable.reified("address", reified.phantom("bool")))), fields.followers_list), followingList: decodeFromFields(LinkedTable.reified("address", reified.phantom(LinkedTable.reified("address", reified.phantom("bool")))), fields.following_list), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveGraph { if (!isHiveGraph(item.type)) { throw new Error("not a HiveGraph type");

 }

 return HiveGraph.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), hiveTwap: decodeFromFieldsWithTypes(HiveTwapInfo.reified(), item.fields.hive_twap), followersList: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(LinkedTable.reified("address", reified.phantom("bool")))), item.fields.followers_list), followingList: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(LinkedTable.reified("address", reified.phantom("bool")))), item.fields.following_list), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): HiveGraph { return HiveGraph.fromFields( HiveGraph.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,hiveTwap: this.hiveTwap.toJSONField(),followersList: this.followersList.toJSONField(),followingList: this.followingList.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveGraph { return HiveGraph.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), hiveTwap: decodeFromJSONField(HiveTwapInfo.reified(), field.hiveTwap), followersList: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(LinkedTable.reified("address", reified.phantom("bool")))), field.followersList), followingList: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(LinkedTable.reified("address", reified.phantom("bool")))), field.followingList), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): HiveGraph { if (json.$typeName !== HiveGraph.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveGraph.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveGraph { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveGraph(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveGraph object`); } return HiveGraph.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiveGraph { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiveGraph(data.bcs.type)) { throw new Error(`object at is not a HiveGraph object`); }

 return HiveGraph.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiveGraph.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveGraph> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveGraph object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveGraph(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveGraph object`); }

 return HiveGraph.fromSuiObjectData( res.data ); }

 }

/* ============================== HiveTwapInfo =============================== */

export function isHiveTwapInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiveTwapInfo`; }

export interface HiveTwapInfoFields { lastUpdateTimestamp: ToField<"u64">; hiveSuiTwap: ToField<"u256">; suiUsdcTwap: ToField<"u256">; hiveUsdcTwap: ToField<"u256"> }

export type HiveTwapInfoReified = Reified< HiveTwapInfo, HiveTwapInfoFields >;

export class HiveTwapInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiveTwapInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveTwapInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiveTwapInfo`; readonly $typeArgs: []; readonly $isPhantom = HiveTwapInfo.$isPhantom;

 readonly lastUpdateTimestamp: ToField<"u64">; readonly hiveSuiTwap: ToField<"u256">; readonly suiUsdcTwap: ToField<"u256">; readonly hiveUsdcTwap: ToField<"u256">

 private constructor(typeArgs: [], fields: HiveTwapInfoFields, ) { this.$fullTypeName = composeSuiType( HiveTwapInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiveTwapInfo`; this.$typeArgs = typeArgs;

 this.lastUpdateTimestamp = fields.lastUpdateTimestamp;; this.hiveSuiTwap = fields.hiveSuiTwap;; this.suiUsdcTwap = fields.suiUsdcTwap;; this.hiveUsdcTwap = fields.hiveUsdcTwap; }

 static reified( ): HiveTwapInfoReified { return { typeName: HiveTwapInfo.$typeName, fullTypeName: composeSuiType( HiveTwapInfo.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiveTwapInfo`, typeArgs: [ ] as [], isPhantom: HiveTwapInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveTwapInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveTwapInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveTwapInfo.fromBcs( data, ), bcs: HiveTwapInfo.bcs, fromJSONField: (field: any) => HiveTwapInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveTwapInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveTwapInfo.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiveTwapInfo.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiveTwapInfo.fetch( client, id, ), new: ( fields: HiveTwapInfoFields, ) => { return new HiveTwapInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveTwapInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveTwapInfo>> { return phantom(HiveTwapInfo.reified( )); } static get p() { return HiveTwapInfo.phantom() }

 static get bcs() { return bcs.struct("HiveTwapInfo", {

 last_update_timestamp: bcs.u64(), hive_sui_twap: bcs.u256(), sui_usdc_twap: bcs.u256(), hive_usdc_twap: bcs.u256()

}) };

 static fromFields( fields: Record<string, any> ): HiveTwapInfo { return HiveTwapInfo.reified( ).new( { lastUpdateTimestamp: decodeFromFields("u64", fields.last_update_timestamp), hiveSuiTwap: decodeFromFields("u256", fields.hive_sui_twap), suiUsdcTwap: decodeFromFields("u256", fields.sui_usdc_twap), hiveUsdcTwap: decodeFromFields("u256", fields.hive_usdc_twap) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveTwapInfo { if (!isHiveTwapInfo(item.type)) { throw new Error("not a HiveTwapInfo type");

 }

 return HiveTwapInfo.reified( ).new( { lastUpdateTimestamp: decodeFromFieldsWithTypes("u64", item.fields.last_update_timestamp), hiveSuiTwap: decodeFromFieldsWithTypes("u256", item.fields.hive_sui_twap), suiUsdcTwap: decodeFromFieldsWithTypes("u256", item.fields.sui_usdc_twap), hiveUsdcTwap: decodeFromFieldsWithTypes("u256", item.fields.hive_usdc_twap) } ) }

 static fromBcs( data: Uint8Array ): HiveTwapInfo { return HiveTwapInfo.fromFields( HiveTwapInfo.bcs.parse(data) ) }

 toJSONField() { return {

 lastUpdateTimestamp: this.lastUpdateTimestamp.toString(),hiveSuiTwap: this.hiveSuiTwap.toString(),suiUsdcTwap: this.suiUsdcTwap.toString(),hiveUsdcTwap: this.hiveUsdcTwap.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveTwapInfo { return HiveTwapInfo.reified( ).new( { lastUpdateTimestamp: decodeFromJSONField("u64", field.lastUpdateTimestamp), hiveSuiTwap: decodeFromJSONField("u256", field.hiveSuiTwap), suiUsdcTwap: decodeFromJSONField("u256", field.suiUsdcTwap), hiveUsdcTwap: decodeFromJSONField("u256", field.hiveUsdcTwap) } ) }

 static fromJSON( json: Record<string, any> ): HiveTwapInfo { if (json.$typeName !== HiveTwapInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveTwapInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveTwapInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveTwapInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveTwapInfo object`); } return HiveTwapInfo.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiveTwapInfo { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiveTwapInfo(data.bcs.type)) { throw new Error(`object at is not a HiveTwapInfo object`); }

 return HiveTwapInfo.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiveTwapInfo.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveTwapInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveTwapInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveTwapInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveTwapInfo object`); }

 return HiveTwapInfo.fromSuiObjectData( res.data ); }

 }

/* ============================== HiveTwapUpdated =============================== */

export function isHiveTwapUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiveTwapUpdated`; }

export interface HiveTwapUpdatedFields { timestamp: ToField<"u64">; hiveSuiTwap: ToField<"u256">; suiUsdcTwap: ToField<"u256">; hiveUsdcTwap: ToField<"u256"> }

export type HiveTwapUpdatedReified = Reified< HiveTwapUpdated, HiveTwapUpdatedFields >;

export class HiveTwapUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiveTwapUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveTwapUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiveTwapUpdated`; readonly $typeArgs: []; readonly $isPhantom = HiveTwapUpdated.$isPhantom;

 readonly timestamp: ToField<"u64">; readonly hiveSuiTwap: ToField<"u256">; readonly suiUsdcTwap: ToField<"u256">; readonly hiveUsdcTwap: ToField<"u256">

 private constructor(typeArgs: [], fields: HiveTwapUpdatedFields, ) { this.$fullTypeName = composeSuiType( HiveTwapUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiveTwapUpdated`; this.$typeArgs = typeArgs;

 this.timestamp = fields.timestamp;; this.hiveSuiTwap = fields.hiveSuiTwap;; this.suiUsdcTwap = fields.suiUsdcTwap;; this.hiveUsdcTwap = fields.hiveUsdcTwap; }

 static reified( ): HiveTwapUpdatedReified { return { typeName: HiveTwapUpdated.$typeName, fullTypeName: composeSuiType( HiveTwapUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiveTwapUpdated`, typeArgs: [ ] as [], isPhantom: HiveTwapUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveTwapUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveTwapUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveTwapUpdated.fromBcs( data, ), bcs: HiveTwapUpdated.bcs, fromJSONField: (field: any) => HiveTwapUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveTwapUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveTwapUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiveTwapUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiveTwapUpdated.fetch( client, id, ), new: ( fields: HiveTwapUpdatedFields, ) => { return new HiveTwapUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveTwapUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveTwapUpdated>> { return phantom(HiveTwapUpdated.reified( )); } static get p() { return HiveTwapUpdated.phantom() }

 static get bcs() { return bcs.struct("HiveTwapUpdated", {

 timestamp: bcs.u64(), hive_sui_twap: bcs.u256(), sui_usdc_twap: bcs.u256(), hive_usdc_twap: bcs.u256()

}) };

 static fromFields( fields: Record<string, any> ): HiveTwapUpdated { return HiveTwapUpdated.reified( ).new( { timestamp: decodeFromFields("u64", fields.timestamp), hiveSuiTwap: decodeFromFields("u256", fields.hive_sui_twap), suiUsdcTwap: decodeFromFields("u256", fields.sui_usdc_twap), hiveUsdcTwap: decodeFromFields("u256", fields.hive_usdc_twap) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveTwapUpdated { if (!isHiveTwapUpdated(item.type)) { throw new Error("not a HiveTwapUpdated type");

 }

 return HiveTwapUpdated.reified( ).new( { timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp), hiveSuiTwap: decodeFromFieldsWithTypes("u256", item.fields.hive_sui_twap), suiUsdcTwap: decodeFromFieldsWithTypes("u256", item.fields.sui_usdc_twap), hiveUsdcTwap: decodeFromFieldsWithTypes("u256", item.fields.hive_usdc_twap) } ) }

 static fromBcs( data: Uint8Array ): HiveTwapUpdated { return HiveTwapUpdated.fromFields( HiveTwapUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 timestamp: this.timestamp.toString(),hiveSuiTwap: this.hiveSuiTwap.toString(),suiUsdcTwap: this.suiUsdcTwap.toString(),hiveUsdcTwap: this.hiveUsdcTwap.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveTwapUpdated { return HiveTwapUpdated.reified( ).new( { timestamp: decodeFromJSONField("u64", field.timestamp), hiveSuiTwap: decodeFromJSONField("u256", field.hiveSuiTwap), suiUsdcTwap: decodeFromJSONField("u256", field.suiUsdcTwap), hiveUsdcTwap: decodeFromJSONField("u256", field.hiveUsdcTwap) } ) }

 static fromJSON( json: Record<string, any> ): HiveTwapUpdated { if (json.$typeName !== HiveTwapUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveTwapUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveTwapUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveTwapUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveTwapUpdated object`); } return HiveTwapUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiveTwapUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiveTwapUpdated(data.bcs.type)) { throw new Error(`object at is not a HiveTwapUpdated object`); }

 return HiveTwapUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiveTwapUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveTwapUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveTwapUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveTwapUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveTwapUpdated object`); }

 return HiveTwapUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== HiveUnlockedFromBee =============================== */

export function isHiveUnlockedFromBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiveUnlockedFromBee`; }

export interface HiveUnlockedFromBeeFields { beeId: ToField<"address">; version: ToField<"u64">; hiveUnlocked: ToField<"u64">; wHiveDecrease: ToField<"u128">; totalWeightedHive: ToField<"u128"> }

export type HiveUnlockedFromBeeReified = Reified< HiveUnlockedFromBee, HiveUnlockedFromBeeFields >;

export class HiveUnlockedFromBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiveUnlockedFromBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveUnlockedFromBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiveUnlockedFromBee`; readonly $typeArgs: []; readonly $isPhantom = HiveUnlockedFromBee.$isPhantom;

 readonly beeId: ToField<"address">; readonly version: ToField<"u64">; readonly hiveUnlocked: ToField<"u64">; readonly wHiveDecrease: ToField<"u128">; readonly totalWeightedHive: ToField<"u128">

 private constructor(typeArgs: [], fields: HiveUnlockedFromBeeFields, ) { this.$fullTypeName = composeSuiType( HiveUnlockedFromBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiveUnlockedFromBee`; this.$typeArgs = typeArgs;

 this.beeId = fields.beeId;; this.version = fields.version;; this.hiveUnlocked = fields.hiveUnlocked;; this.wHiveDecrease = fields.wHiveDecrease;; this.totalWeightedHive = fields.totalWeightedHive; }

 static reified( ): HiveUnlockedFromBeeReified { return { typeName: HiveUnlockedFromBee.$typeName, fullTypeName: composeSuiType( HiveUnlockedFromBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiveUnlockedFromBee`, typeArgs: [ ] as [], isPhantom: HiveUnlockedFromBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveUnlockedFromBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveUnlockedFromBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveUnlockedFromBee.fromBcs( data, ), bcs: HiveUnlockedFromBee.bcs, fromJSONField: (field: any) => HiveUnlockedFromBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveUnlockedFromBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveUnlockedFromBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiveUnlockedFromBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiveUnlockedFromBee.fetch( client, id, ), new: ( fields: HiveUnlockedFromBeeFields, ) => { return new HiveUnlockedFromBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveUnlockedFromBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveUnlockedFromBee>> { return phantom(HiveUnlockedFromBee.reified( )); } static get p() { return HiveUnlockedFromBee.phantom() }

 static get bcs() { return bcs.struct("HiveUnlockedFromBee", {

 beeId: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), hive_unlocked: bcs.u64(), wHive_decrease: bcs.u128(), total_weighted_hive: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): HiveUnlockedFromBee { return HiveUnlockedFromBee.reified( ).new( { beeId: decodeFromFields("address", fields.beeId), version: decodeFromFields("u64", fields.version), hiveUnlocked: decodeFromFields("u64", fields.hive_unlocked), wHiveDecrease: decodeFromFields("u128", fields.wHive_decrease), totalWeightedHive: decodeFromFields("u128", fields.total_weighted_hive) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveUnlockedFromBee { if (!isHiveUnlockedFromBee(item.type)) { throw new Error("not a HiveUnlockedFromBee type");

 }

 return HiveUnlockedFromBee.reified( ).new( { beeId: decodeFromFieldsWithTypes("address", item.fields.beeId), version: decodeFromFieldsWithTypes("u64", item.fields.version), hiveUnlocked: decodeFromFieldsWithTypes("u64", item.fields.hive_unlocked), wHiveDecrease: decodeFromFieldsWithTypes("u128", item.fields.wHive_decrease), totalWeightedHive: decodeFromFieldsWithTypes("u128", item.fields.total_weighted_hive) } ) }

 static fromBcs( data: Uint8Array ): HiveUnlockedFromBee { return HiveUnlockedFromBee.fromFields( HiveUnlockedFromBee.bcs.parse(data) ) }

 toJSONField() { return {

 beeId: this.beeId,version: this.version.toString(),hiveUnlocked: this.hiveUnlocked.toString(),wHiveDecrease: this.wHiveDecrease.toString(),totalWeightedHive: this.totalWeightedHive.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveUnlockedFromBee { return HiveUnlockedFromBee.reified( ).new( { beeId: decodeFromJSONField("address", field.beeId), version: decodeFromJSONField("u64", field.version), hiveUnlocked: decodeFromJSONField("u64", field.hiveUnlocked), wHiveDecrease: decodeFromJSONField("u128", field.wHiveDecrease), totalWeightedHive: decodeFromJSONField("u128", field.totalWeightedHive) } ) }

 static fromJSON( json: Record<string, any> ): HiveUnlockedFromBee { if (json.$typeName !== HiveUnlockedFromBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveUnlockedFromBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveUnlockedFromBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveUnlockedFromBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveUnlockedFromBee object`); } return HiveUnlockedFromBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiveUnlockedFromBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiveUnlockedFromBee(data.bcs.type)) { throw new Error(`object at is not a HiveUnlockedFromBee object`); }

 return HiveUnlockedFromBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiveUnlockedFromBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveUnlockedFromBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveUnlockedFromBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveUnlockedFromBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveUnlockedFromBee object`); }

 return HiveUnlockedFromBee.fromSuiObjectData( res.data ); }

 }

/* ============================== HiveWithdrawnFromTreasury =============================== */

export function isHiveWithdrawnFromTreasury(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HiveWithdrawnFromTreasury`; }

export interface HiveWithdrawnFromTreasuryFields { hiveWithdrawn: ToField<"u64"> }

export type HiveWithdrawnFromTreasuryReified = Reified< HiveWithdrawnFromTreasury, HiveWithdrawnFromTreasuryFields >;

export class HiveWithdrawnFromTreasury implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HiveWithdrawnFromTreasury`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveWithdrawnFromTreasury.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HiveWithdrawnFromTreasury`; readonly $typeArgs: []; readonly $isPhantom = HiveWithdrawnFromTreasury.$isPhantom;

 readonly hiveWithdrawn: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveWithdrawnFromTreasuryFields, ) { this.$fullTypeName = composeSuiType( HiveWithdrawnFromTreasury.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HiveWithdrawnFromTreasury`; this.$typeArgs = typeArgs;

 this.hiveWithdrawn = fields.hiveWithdrawn; }

 static reified( ): HiveWithdrawnFromTreasuryReified { return { typeName: HiveWithdrawnFromTreasury.$typeName, fullTypeName: composeSuiType( HiveWithdrawnFromTreasury.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HiveWithdrawnFromTreasury`, typeArgs: [ ] as [], isPhantom: HiveWithdrawnFromTreasury.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveWithdrawnFromTreasury.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveWithdrawnFromTreasury.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveWithdrawnFromTreasury.fromBcs( data, ), bcs: HiveWithdrawnFromTreasury.bcs, fromJSONField: (field: any) => HiveWithdrawnFromTreasury.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveWithdrawnFromTreasury.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveWithdrawnFromTreasury.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HiveWithdrawnFromTreasury.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HiveWithdrawnFromTreasury.fetch( client, id, ), new: ( fields: HiveWithdrawnFromTreasuryFields, ) => { return new HiveWithdrawnFromTreasury( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveWithdrawnFromTreasury.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveWithdrawnFromTreasury>> { return phantom(HiveWithdrawnFromTreasury.reified( )); } static get p() { return HiveWithdrawnFromTreasury.phantom() }

 static get bcs() { return bcs.struct("HiveWithdrawnFromTreasury", {

 hive_withdrawn: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveWithdrawnFromTreasury { return HiveWithdrawnFromTreasury.reified( ).new( { hiveWithdrawn: decodeFromFields("u64", fields.hive_withdrawn) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveWithdrawnFromTreasury { if (!isHiveWithdrawnFromTreasury(item.type)) { throw new Error("not a HiveWithdrawnFromTreasury type");

 }

 return HiveWithdrawnFromTreasury.reified( ).new( { hiveWithdrawn: decodeFromFieldsWithTypes("u64", item.fields.hive_withdrawn) } ) }

 static fromBcs( data: Uint8Array ): HiveWithdrawnFromTreasury { return HiveWithdrawnFromTreasury.fromFields( HiveWithdrawnFromTreasury.bcs.parse(data) ) }

 toJSONField() { return {

 hiveWithdrawn: this.hiveWithdrawn.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveWithdrawnFromTreasury { return HiveWithdrawnFromTreasury.reified( ).new( { hiveWithdrawn: decodeFromJSONField("u64", field.hiveWithdrawn) } ) }

 static fromJSON( json: Record<string, any> ): HiveWithdrawnFromTreasury { if (json.$typeName !== HiveWithdrawnFromTreasury.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveWithdrawnFromTreasury.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveWithdrawnFromTreasury { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveWithdrawnFromTreasury(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveWithdrawnFromTreasury object`); } return HiveWithdrawnFromTreasury.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HiveWithdrawnFromTreasury { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHiveWithdrawnFromTreasury(data.bcs.type)) { throw new Error(`object at is not a HiveWithdrawnFromTreasury object`); }

 return HiveWithdrawnFromTreasury.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HiveWithdrawnFromTreasury.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveWithdrawnFromTreasury> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveWithdrawnFromTreasury object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveWithdrawnFromTreasury(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveWithdrawnFromTreasury object`); }

 return HiveWithdrawnFromTreasury.fromSuiObjectData( res.data ); }

 }

/* ============================== HoneyAddedForHarvest =============================== */

export function isHoneyAddedForHarvest(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HoneyAddedForHarvest`; }

export interface HoneyAddedForHarvestFields { yieldAdded: ToField<"u64"> }

export type HoneyAddedForHarvestReified = Reified< HoneyAddedForHarvest, HoneyAddedForHarvestFields >;

export class HoneyAddedForHarvest implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HoneyAddedForHarvest`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HoneyAddedForHarvest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HoneyAddedForHarvest`; readonly $typeArgs: []; readonly $isPhantom = HoneyAddedForHarvest.$isPhantom;

 readonly yieldAdded: ToField<"u64">

 private constructor(typeArgs: [], fields: HoneyAddedForHarvestFields, ) { this.$fullTypeName = composeSuiType( HoneyAddedForHarvest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HoneyAddedForHarvest`; this.$typeArgs = typeArgs;

 this.yieldAdded = fields.yieldAdded; }

 static reified( ): HoneyAddedForHarvestReified { return { typeName: HoneyAddedForHarvest.$typeName, fullTypeName: composeSuiType( HoneyAddedForHarvest.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HoneyAddedForHarvest`, typeArgs: [ ] as [], isPhantom: HoneyAddedForHarvest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HoneyAddedForHarvest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyAddedForHarvest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HoneyAddedForHarvest.fromBcs( data, ), bcs: HoneyAddedForHarvest.bcs, fromJSONField: (field: any) => HoneyAddedForHarvest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HoneyAddedForHarvest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HoneyAddedForHarvest.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HoneyAddedForHarvest.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HoneyAddedForHarvest.fetch( client, id, ), new: ( fields: HoneyAddedForHarvestFields, ) => { return new HoneyAddedForHarvest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HoneyAddedForHarvest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HoneyAddedForHarvest>> { return phantom(HoneyAddedForHarvest.reified( )); } static get p() { return HoneyAddedForHarvest.phantom() }

 static get bcs() { return bcs.struct("HoneyAddedForHarvest", {

 yield_added: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HoneyAddedForHarvest { return HoneyAddedForHarvest.reified( ).new( { yieldAdded: decodeFromFields("u64", fields.yield_added) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HoneyAddedForHarvest { if (!isHoneyAddedForHarvest(item.type)) { throw new Error("not a HoneyAddedForHarvest type");

 }

 return HoneyAddedForHarvest.reified( ).new( { yieldAdded: decodeFromFieldsWithTypes("u64", item.fields.yield_added) } ) }

 static fromBcs( data: Uint8Array ): HoneyAddedForHarvest { return HoneyAddedForHarvest.fromFields( HoneyAddedForHarvest.bcs.parse(data) ) }

 toJSONField() { return {

 yieldAdded: this.yieldAdded.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HoneyAddedForHarvest { return HoneyAddedForHarvest.reified( ).new( { yieldAdded: decodeFromJSONField("u64", field.yieldAdded) } ) }

 static fromJSON( json: Record<string, any> ): HoneyAddedForHarvest { if (json.$typeName !== HoneyAddedForHarvest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HoneyAddedForHarvest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HoneyAddedForHarvest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyAddedForHarvest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyAddedForHarvest object`); } return HoneyAddedForHarvest.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HoneyAddedForHarvest { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHoneyAddedForHarvest(data.bcs.type)) { throw new Error(`object at is not a HoneyAddedForHarvest object`); }

 return HoneyAddedForHarvest.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HoneyAddedForHarvest.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HoneyAddedForHarvest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyAddedForHarvest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyAddedForHarvest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyAddedForHarvest object`); }

 return HoneyAddedForHarvest.fromSuiObjectData( res.data ); }

 }

/* ============================== HoneyAddedToProfile =============================== */

export function isHoneyAddedToProfile(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HoneyAddedToProfile`; }

export interface HoneyAddedToProfileFields { username: ToField<String>; profileAddr: ToField<"address">; depositedHoney: ToField<"u64"> }

export type HoneyAddedToProfileReified = Reified< HoneyAddedToProfile, HoneyAddedToProfileFields >;

export class HoneyAddedToProfile implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HoneyAddedToProfile`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HoneyAddedToProfile.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HoneyAddedToProfile`; readonly $typeArgs: []; readonly $isPhantom = HoneyAddedToProfile.$isPhantom;

 readonly username: ToField<String>; readonly profileAddr: ToField<"address">; readonly depositedHoney: ToField<"u64">

 private constructor(typeArgs: [], fields: HoneyAddedToProfileFields, ) { this.$fullTypeName = composeSuiType( HoneyAddedToProfile.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HoneyAddedToProfile`; this.$typeArgs = typeArgs;

 this.username = fields.username;; this.profileAddr = fields.profileAddr;; this.depositedHoney = fields.depositedHoney; }

 static reified( ): HoneyAddedToProfileReified { return { typeName: HoneyAddedToProfile.$typeName, fullTypeName: composeSuiType( HoneyAddedToProfile.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HoneyAddedToProfile`, typeArgs: [ ] as [], isPhantom: HoneyAddedToProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HoneyAddedToProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyAddedToProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HoneyAddedToProfile.fromBcs( data, ), bcs: HoneyAddedToProfile.bcs, fromJSONField: (field: any) => HoneyAddedToProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HoneyAddedToProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HoneyAddedToProfile.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HoneyAddedToProfile.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HoneyAddedToProfile.fetch( client, id, ), new: ( fields: HoneyAddedToProfileFields, ) => { return new HoneyAddedToProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HoneyAddedToProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HoneyAddedToProfile>> { return phantom(HoneyAddedToProfile.reified( )); } static get p() { return HoneyAddedToProfile.phantom() }

 static get bcs() { return bcs.struct("HoneyAddedToProfile", {

 username: String.bcs, profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), deposited_honey: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HoneyAddedToProfile { return HoneyAddedToProfile.reified( ).new( { username: decodeFromFields(String.reified(), fields.username), profileAddr: decodeFromFields("address", fields.profile_addr), depositedHoney: decodeFromFields("u64", fields.deposited_honey) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HoneyAddedToProfile { if (!isHoneyAddedToProfile(item.type)) { throw new Error("not a HoneyAddedToProfile type");

 }

 return HoneyAddedToProfile.reified( ).new( { username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), depositedHoney: decodeFromFieldsWithTypes("u64", item.fields.deposited_honey) } ) }

 static fromBcs( data: Uint8Array ): HoneyAddedToProfile { return HoneyAddedToProfile.fromFields( HoneyAddedToProfile.bcs.parse(data) ) }

 toJSONField() { return {

 username: this.username,profileAddr: this.profileAddr,depositedHoney: this.depositedHoney.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HoneyAddedToProfile { return HoneyAddedToProfile.reified( ).new( { username: decodeFromJSONField(String.reified(), field.username), profileAddr: decodeFromJSONField("address", field.profileAddr), depositedHoney: decodeFromJSONField("u64", field.depositedHoney) } ) }

 static fromJSON( json: Record<string, any> ): HoneyAddedToProfile { if (json.$typeName !== HoneyAddedToProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HoneyAddedToProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HoneyAddedToProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyAddedToProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyAddedToProfile object`); } return HoneyAddedToProfile.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HoneyAddedToProfile { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHoneyAddedToProfile(data.bcs.type)) { throw new Error(`object at is not a HoneyAddedToProfile object`); }

 return HoneyAddedToProfile.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HoneyAddedToProfile.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HoneyAddedToProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyAddedToProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyAddedToProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyAddedToProfile object`); }

 return HoneyAddedToProfile.fromSuiObjectData( res.data ); }

 }

/* ============================== HoneyAddedToTreasury =============================== */

export function isHoneyAddedToTreasury(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HoneyAddedToTreasury`; }

export interface HoneyAddedToTreasuryFields { honeyAdded: ToField<"u64">; totalHoneyInTreasury: ToField<"u64"> }

export type HoneyAddedToTreasuryReified = Reified< HoneyAddedToTreasury, HoneyAddedToTreasuryFields >;

export class HoneyAddedToTreasury implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HoneyAddedToTreasury`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HoneyAddedToTreasury.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HoneyAddedToTreasury`; readonly $typeArgs: []; readonly $isPhantom = HoneyAddedToTreasury.$isPhantom;

 readonly honeyAdded: ToField<"u64">; readonly totalHoneyInTreasury: ToField<"u64">

 private constructor(typeArgs: [], fields: HoneyAddedToTreasuryFields, ) { this.$fullTypeName = composeSuiType( HoneyAddedToTreasury.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HoneyAddedToTreasury`; this.$typeArgs = typeArgs;

 this.honeyAdded = fields.honeyAdded;; this.totalHoneyInTreasury = fields.totalHoneyInTreasury; }

 static reified( ): HoneyAddedToTreasuryReified { return { typeName: HoneyAddedToTreasury.$typeName, fullTypeName: composeSuiType( HoneyAddedToTreasury.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HoneyAddedToTreasury`, typeArgs: [ ] as [], isPhantom: HoneyAddedToTreasury.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HoneyAddedToTreasury.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyAddedToTreasury.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HoneyAddedToTreasury.fromBcs( data, ), bcs: HoneyAddedToTreasury.bcs, fromJSONField: (field: any) => HoneyAddedToTreasury.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HoneyAddedToTreasury.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HoneyAddedToTreasury.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HoneyAddedToTreasury.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HoneyAddedToTreasury.fetch( client, id, ), new: ( fields: HoneyAddedToTreasuryFields, ) => { return new HoneyAddedToTreasury( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HoneyAddedToTreasury.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HoneyAddedToTreasury>> { return phantom(HoneyAddedToTreasury.reified( )); } static get p() { return HoneyAddedToTreasury.phantom() }

 static get bcs() { return bcs.struct("HoneyAddedToTreasury", {

 honey_added: bcs.u64(), total_honey_in_treasury: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HoneyAddedToTreasury { return HoneyAddedToTreasury.reified( ).new( { honeyAdded: decodeFromFields("u64", fields.honey_added), totalHoneyInTreasury: decodeFromFields("u64", fields.total_honey_in_treasury) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HoneyAddedToTreasury { if (!isHoneyAddedToTreasury(item.type)) { throw new Error("not a HoneyAddedToTreasury type");

 }

 return HoneyAddedToTreasury.reified( ).new( { honeyAdded: decodeFromFieldsWithTypes("u64", item.fields.honey_added), totalHoneyInTreasury: decodeFromFieldsWithTypes("u64", item.fields.total_honey_in_treasury) } ) }

 static fromBcs( data: Uint8Array ): HoneyAddedToTreasury { return HoneyAddedToTreasury.fromFields( HoneyAddedToTreasury.bcs.parse(data) ) }

 toJSONField() { return {

 honeyAdded: this.honeyAdded.toString(),totalHoneyInTreasury: this.totalHoneyInTreasury.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HoneyAddedToTreasury { return HoneyAddedToTreasury.reified( ).new( { honeyAdded: decodeFromJSONField("u64", field.honeyAdded), totalHoneyInTreasury: decodeFromJSONField("u64", field.totalHoneyInTreasury) } ) }

 static fromJSON( json: Record<string, any> ): HoneyAddedToTreasury { if (json.$typeName !== HoneyAddedToTreasury.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HoneyAddedToTreasury.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HoneyAddedToTreasury { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyAddedToTreasury(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyAddedToTreasury object`); } return HoneyAddedToTreasury.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HoneyAddedToTreasury { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHoneyAddedToTreasury(data.bcs.type)) { throw new Error(`object at is not a HoneyAddedToTreasury object`); }

 return HoneyAddedToTreasury.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HoneyAddedToTreasury.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HoneyAddedToTreasury> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyAddedToTreasury object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyAddedToTreasury(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyAddedToTreasury object`); }

 return HoneyAddedToTreasury.fromSuiObjectData( res.data ); }

 }

/* ============================== HoneyTransferredToProfile =============================== */

export function isHoneyTransferredToProfile(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::HoneyTransferredToProfile`; }

export interface HoneyTransferredToProfileFields { fromUsername: ToField<String>; fromDragonSchoolAddr: ToField<"address">; toUsername: ToField<String>; toTrainerAddr: ToField<"address">; honeyToTransfer: ToField<"u64"> }

export type HoneyTransferredToProfileReified = Reified< HoneyTransferredToProfile, HoneyTransferredToProfileFields >;

export class HoneyTransferredToProfile implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::HoneyTransferredToProfile`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HoneyTransferredToProfile.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::HoneyTransferredToProfile`; readonly $typeArgs: []; readonly $isPhantom = HoneyTransferredToProfile.$isPhantom;

 readonly fromUsername: ToField<String>; readonly fromDragonSchoolAddr: ToField<"address">; readonly toUsername: ToField<String>; readonly toTrainerAddr: ToField<"address">; readonly honeyToTransfer: ToField<"u64">

 private constructor(typeArgs: [], fields: HoneyTransferredToProfileFields, ) { this.$fullTypeName = composeSuiType( HoneyTransferredToProfile.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::HoneyTransferredToProfile`; this.$typeArgs = typeArgs;

 this.fromUsername = fields.fromUsername;; this.fromDragonSchoolAddr = fields.fromDragonSchoolAddr;; this.toUsername = fields.toUsername;; this.toTrainerAddr = fields.toTrainerAddr;; this.honeyToTransfer = fields.honeyToTransfer; }

 static reified( ): HoneyTransferredToProfileReified { return { typeName: HoneyTransferredToProfile.$typeName, fullTypeName: composeSuiType( HoneyTransferredToProfile.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::HoneyTransferredToProfile`, typeArgs: [ ] as [], isPhantom: HoneyTransferredToProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HoneyTransferredToProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyTransferredToProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HoneyTransferredToProfile.fromBcs( data, ), bcs: HoneyTransferredToProfile.bcs, fromJSONField: (field: any) => HoneyTransferredToProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HoneyTransferredToProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HoneyTransferredToProfile.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HoneyTransferredToProfile.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HoneyTransferredToProfile.fetch( client, id, ), new: ( fields: HoneyTransferredToProfileFields, ) => { return new HoneyTransferredToProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HoneyTransferredToProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HoneyTransferredToProfile>> { return phantom(HoneyTransferredToProfile.reified( )); } static get p() { return HoneyTransferredToProfile.phantom() }

 static get bcs() { return bcs.struct("HoneyTransferredToProfile", {

 from_username: String.bcs, from_dragon_school_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), to_username: String.bcs, to_trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), honey_to_transfer: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HoneyTransferredToProfile { return HoneyTransferredToProfile.reified( ).new( { fromUsername: decodeFromFields(String.reified(), fields.from_username), fromDragonSchoolAddr: decodeFromFields("address", fields.from_dragon_school_addr), toUsername: decodeFromFields(String.reified(), fields.to_username), toTrainerAddr: decodeFromFields("address", fields.to_trainer_addr), honeyToTransfer: decodeFromFields("u64", fields.honey_to_transfer) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HoneyTransferredToProfile { if (!isHoneyTransferredToProfile(item.type)) { throw new Error("not a HoneyTransferredToProfile type");

 }

 return HoneyTransferredToProfile.reified( ).new( { fromUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.from_username), fromDragonSchoolAddr: decodeFromFieldsWithTypes("address", item.fields.from_dragon_school_addr), toUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.to_username), toTrainerAddr: decodeFromFieldsWithTypes("address", item.fields.to_trainer_addr), honeyToTransfer: decodeFromFieldsWithTypes("u64", item.fields.honey_to_transfer) } ) }

 static fromBcs( data: Uint8Array ): HoneyTransferredToProfile { return HoneyTransferredToProfile.fromFields( HoneyTransferredToProfile.bcs.parse(data) ) }

 toJSONField() { return {

 fromUsername: this.fromUsername,fromDragonSchoolAddr: this.fromDragonSchoolAddr,toUsername: this.toUsername,toTrainerAddr: this.toTrainerAddr,honeyToTransfer: this.honeyToTransfer.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HoneyTransferredToProfile { return HoneyTransferredToProfile.reified( ).new( { fromUsername: decodeFromJSONField(String.reified(), field.fromUsername), fromDragonSchoolAddr: decodeFromJSONField("address", field.fromDragonSchoolAddr), toUsername: decodeFromJSONField(String.reified(), field.toUsername), toTrainerAddr: decodeFromJSONField("address", field.toTrainerAddr), honeyToTransfer: decodeFromJSONField("u64", field.honeyToTransfer) } ) }

 static fromJSON( json: Record<string, any> ): HoneyTransferredToProfile { if (json.$typeName !== HoneyTransferredToProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HoneyTransferredToProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HoneyTransferredToProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyTransferredToProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyTransferredToProfile object`); } return HoneyTransferredToProfile.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HoneyTransferredToProfile { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHoneyTransferredToProfile(data.bcs.type)) { throw new Error(`object at is not a HoneyTransferredToProfile object`); }

 return HoneyTransferredToProfile.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HoneyTransferredToProfile.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HoneyTransferredToProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyTransferredToProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyTransferredToProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyTransferredToProfile object`); }

 return HoneyTransferredToProfile.fromSuiObjectData( res.data ); }

 }

/* ============================== IncomingBeeClaimed =============================== */

export function isIncomingBeeClaimed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::IncomingBeeClaimed`; }

export interface IncomingBeeClaimedFields { version: ToField<"u64">; claimedBy: ToField<"address"> }

export type IncomingBeeClaimedReified = Reified< IncomingBeeClaimed, IncomingBeeClaimedFields >;

export class IncomingBeeClaimed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::IncomingBeeClaimed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = IncomingBeeClaimed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::IncomingBeeClaimed`; readonly $typeArgs: []; readonly $isPhantom = IncomingBeeClaimed.$isPhantom;

 readonly version: ToField<"u64">; readonly claimedBy: ToField<"address">

 private constructor(typeArgs: [], fields: IncomingBeeClaimedFields, ) { this.$fullTypeName = composeSuiType( IncomingBeeClaimed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::IncomingBeeClaimed`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.claimedBy = fields.claimedBy; }

 static reified( ): IncomingBeeClaimedReified { return { typeName: IncomingBeeClaimed.$typeName, fullTypeName: composeSuiType( IncomingBeeClaimed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::IncomingBeeClaimed`, typeArgs: [ ] as [], isPhantom: IncomingBeeClaimed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => IncomingBeeClaimed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => IncomingBeeClaimed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => IncomingBeeClaimed.fromBcs( data, ), bcs: IncomingBeeClaimed.bcs, fromJSONField: (field: any) => IncomingBeeClaimed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => IncomingBeeClaimed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => IncomingBeeClaimed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => IncomingBeeClaimed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => IncomingBeeClaimed.fetch( client, id, ), new: ( fields: IncomingBeeClaimedFields, ) => { return new IncomingBeeClaimed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return IncomingBeeClaimed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<IncomingBeeClaimed>> { return phantom(IncomingBeeClaimed.reified( )); } static get p() { return IncomingBeeClaimed.phantom() }

 static get bcs() { return bcs.struct("IncomingBeeClaimed", {

 version: bcs.u64(), claimed_by: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): IncomingBeeClaimed { return IncomingBeeClaimed.reified( ).new( { version: decodeFromFields("u64", fields.version), claimedBy: decodeFromFields("address", fields.claimed_by) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): IncomingBeeClaimed { if (!isIncomingBeeClaimed(item.type)) { throw new Error("not a IncomingBeeClaimed type");

 }

 return IncomingBeeClaimed.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), claimedBy: decodeFromFieldsWithTypes("address", item.fields.claimed_by) } ) }

 static fromBcs( data: Uint8Array ): IncomingBeeClaimed { return IncomingBeeClaimed.fromFields( IncomingBeeClaimed.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),claimedBy: this.claimedBy,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): IncomingBeeClaimed { return IncomingBeeClaimed.reified( ).new( { version: decodeFromJSONField("u64", field.version), claimedBy: decodeFromJSONField("address", field.claimedBy) } ) }

 static fromJSON( json: Record<string, any> ): IncomingBeeClaimed { if (json.$typeName !== IncomingBeeClaimed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return IncomingBeeClaimed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): IncomingBeeClaimed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isIncomingBeeClaimed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a IncomingBeeClaimed object`); } return IncomingBeeClaimed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): IncomingBeeClaimed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isIncomingBeeClaimed(data.bcs.type)) { throw new Error(`object at is not a IncomingBeeClaimed object`); }

 return IncomingBeeClaimed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return IncomingBeeClaimed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<IncomingBeeClaimed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching IncomingBeeClaimed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isIncomingBeeClaimed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a IncomingBeeClaimed object`); }

 return IncomingBeeClaimed.fromSuiObjectData( res.data ); }

 }

/* ============================== Inscription =============================== */

export function isInscription(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::Inscription`; }

export interface InscriptionFields { format: ToField<String1>; base64: ToField<LinkedTable<"u64", ToPhantom<String1>>> }

export type InscriptionReified = Reified< Inscription, InscriptionFields >;

export class Inscription implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::Inscription`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Inscription.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::Inscription`; readonly $typeArgs: []; readonly $isPhantom = Inscription.$isPhantom;

 readonly format: ToField<String1>; readonly base64: ToField<LinkedTable<"u64", ToPhantom<String1>>>

 private constructor(typeArgs: [], fields: InscriptionFields, ) { this.$fullTypeName = composeSuiType( Inscription.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::Inscription`; this.$typeArgs = typeArgs;

 this.format = fields.format;; this.base64 = fields.base64; }

 static reified( ): InscriptionReified { return { typeName: Inscription.$typeName, fullTypeName: composeSuiType( Inscription.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::Inscription`, typeArgs: [ ] as [], isPhantom: Inscription.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Inscription.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Inscription.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Inscription.fromBcs( data, ), bcs: Inscription.bcs, fromJSONField: (field: any) => Inscription.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Inscription.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Inscription.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Inscription.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Inscription.fetch( client, id, ), new: ( fields: InscriptionFields, ) => { return new Inscription( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Inscription.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Inscription>> { return phantom(Inscription.reified( )); } static get p() { return Inscription.phantom() }

 static get bcs() { return bcs.struct("Inscription", {

 format: String1.bcs, base64: LinkedTable.bcs(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): Inscription { return Inscription.reified( ).new( { format: decodeFromFields(String1.reified(), fields.format), base64: decodeFromFields(LinkedTable.reified("u64", reified.phantom(String1.reified())), fields.base64) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Inscription { if (!isInscription(item.type)) { throw new Error("not a Inscription type");

 }

 return Inscription.reified( ).new( { format: decodeFromFieldsWithTypes(String1.reified(), item.fields.format), base64: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(String1.reified())), item.fields.base64) } ) }

 static fromBcs( data: Uint8Array ): Inscription { return Inscription.fromFields( Inscription.bcs.parse(data) ) }

 toJSONField() { return {

 format: this.format,base64: this.base64.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Inscription { return Inscription.reified( ).new( { format: decodeFromJSONField(String1.reified(), field.format), base64: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(String1.reified())), field.base64) } ) }

 static fromJSON( json: Record<string, any> ): Inscription { if (json.$typeName !== Inscription.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Inscription.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Inscription { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isInscription(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Inscription object`); } return Inscription.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Inscription { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isInscription(data.bcs.type)) { throw new Error(`object at is not a Inscription object`); }

 return Inscription.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Inscription.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Inscription> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Inscription object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isInscription(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Inscription object`); }

 return Inscription.fromSuiObjectData( res.data ); }

 }

/* ============================== InscriptionSetForProfile =============================== */

export function isInscriptionSetForProfile(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::InscriptionSetForProfile`; }

export interface InscriptionSetForProfileFields { profileAddr: ToField<"address">; username: ToField<String1>; format: ToField<String1>; base64: ToField<Vector<String1>> }

export type InscriptionSetForProfileReified = Reified< InscriptionSetForProfile, InscriptionSetForProfileFields >;

export class InscriptionSetForProfile implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::InscriptionSetForProfile`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = InscriptionSetForProfile.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::InscriptionSetForProfile`; readonly $typeArgs: []; readonly $isPhantom = InscriptionSetForProfile.$isPhantom;

 readonly profileAddr: ToField<"address">; readonly username: ToField<String1>; readonly format: ToField<String1>; readonly base64: ToField<Vector<String1>>

 private constructor(typeArgs: [], fields: InscriptionSetForProfileFields, ) { this.$fullTypeName = composeSuiType( InscriptionSetForProfile.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::InscriptionSetForProfile`; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.format = fields.format;; this.base64 = fields.base64; }

 static reified( ): InscriptionSetForProfileReified { return { typeName: InscriptionSetForProfile.$typeName, fullTypeName: composeSuiType( InscriptionSetForProfile.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::InscriptionSetForProfile`, typeArgs: [ ] as [], isPhantom: InscriptionSetForProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => InscriptionSetForProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => InscriptionSetForProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => InscriptionSetForProfile.fromBcs( data, ), bcs: InscriptionSetForProfile.bcs, fromJSONField: (field: any) => InscriptionSetForProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => InscriptionSetForProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => InscriptionSetForProfile.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => InscriptionSetForProfile.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => InscriptionSetForProfile.fetch( client, id, ), new: ( fields: InscriptionSetForProfileFields, ) => { return new InscriptionSetForProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return InscriptionSetForProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<InscriptionSetForProfile>> { return phantom(InscriptionSetForProfile.reified( )); } static get p() { return InscriptionSetForProfile.phantom() }

 static get bcs() { return bcs.struct("InscriptionSetForProfile", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String1.bcs, format: String1.bcs, base64: bcs.vector(String1.bcs)

}) };

 static fromFields( fields: Record<string, any> ): InscriptionSetForProfile { return InscriptionSetForProfile.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String1.reified(), fields.username), format: decodeFromFields(String1.reified(), fields.format), base64: decodeFromFields(reified.vector(String1.reified()), fields.base64) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): InscriptionSetForProfile { if (!isInscriptionSetForProfile(item.type)) { throw new Error("not a InscriptionSetForProfile type");

 }

 return InscriptionSetForProfile.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), format: decodeFromFieldsWithTypes(String1.reified(), item.fields.format), base64: decodeFromFieldsWithTypes(reified.vector(String1.reified()), item.fields.base64) } ) }

 static fromBcs( data: Uint8Array ): InscriptionSetForProfile { return InscriptionSetForProfile.fromFields( InscriptionSetForProfile.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,username: this.username,format: this.format,base64: fieldToJSON<Vector<String1>>(`vector<${String1.$typeName}>`, this.base64),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): InscriptionSetForProfile { return InscriptionSetForProfile.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String1.reified(), field.username), format: decodeFromJSONField(String1.reified(), field.format), base64: decodeFromJSONField(reified.vector(String1.reified()), field.base64) } ) }

 static fromJSON( json: Record<string, any> ): InscriptionSetForProfile { if (json.$typeName !== InscriptionSetForProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return InscriptionSetForProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): InscriptionSetForProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isInscriptionSetForProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a InscriptionSetForProfile object`); } return InscriptionSetForProfile.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): InscriptionSetForProfile { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isInscriptionSetForProfile(data.bcs.type)) { throw new Error(`object at is not a InscriptionSetForProfile object`); }

 return InscriptionSetForProfile.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return InscriptionSetForProfile.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<InscriptionSetForProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching InscriptionSetForProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isInscriptionSetForProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a InscriptionSetForProfile object`); }

 return InscriptionSetForProfile.fromSuiObjectData( res.data ); }

 }

/* ============================== JoinedHiveOfProfile =============================== */

export function isJoinedHiveOfProfile(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::JoinedHiveOfProfile`; }

export interface JoinedHiveOfProfileFields { followerTrainerAddr: ToField<"address">; followedTrainer: ToField<"address">; followerUsername: ToField<String1> }

export type JoinedHiveOfProfileReified = Reified< JoinedHiveOfProfile, JoinedHiveOfProfileFields >;

export class JoinedHiveOfProfile implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::JoinedHiveOfProfile`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = JoinedHiveOfProfile.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::JoinedHiveOfProfile`; readonly $typeArgs: []; readonly $isPhantom = JoinedHiveOfProfile.$isPhantom;

 readonly followerTrainerAddr: ToField<"address">; readonly followedTrainer: ToField<"address">; readonly followerUsername: ToField<String1>

 private constructor(typeArgs: [], fields: JoinedHiveOfProfileFields, ) { this.$fullTypeName = composeSuiType( JoinedHiveOfProfile.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::JoinedHiveOfProfile`; this.$typeArgs = typeArgs;

 this.followerTrainerAddr = fields.followerTrainerAddr;; this.followedTrainer = fields.followedTrainer;; this.followerUsername = fields.followerUsername; }

 static reified( ): JoinedHiveOfProfileReified { return { typeName: JoinedHiveOfProfile.$typeName, fullTypeName: composeSuiType( JoinedHiveOfProfile.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::JoinedHiveOfProfile`, typeArgs: [ ] as [], isPhantom: JoinedHiveOfProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => JoinedHiveOfProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => JoinedHiveOfProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => JoinedHiveOfProfile.fromBcs( data, ), bcs: JoinedHiveOfProfile.bcs, fromJSONField: (field: any) => JoinedHiveOfProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => JoinedHiveOfProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => JoinedHiveOfProfile.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => JoinedHiveOfProfile.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => JoinedHiveOfProfile.fetch( client, id, ), new: ( fields: JoinedHiveOfProfileFields, ) => { return new JoinedHiveOfProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return JoinedHiveOfProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<JoinedHiveOfProfile>> { return phantom(JoinedHiveOfProfile.reified( )); } static get p() { return JoinedHiveOfProfile.phantom() }

 static get bcs() { return bcs.struct("JoinedHiveOfProfile", {

 follower_trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), followed_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), follower_username: String1.bcs

}) };

 static fromFields( fields: Record<string, any> ): JoinedHiveOfProfile { return JoinedHiveOfProfile.reified( ).new( { followerTrainerAddr: decodeFromFields("address", fields.follower_trainer_addr), followedTrainer: decodeFromFields("address", fields.followed_trainer), followerUsername: decodeFromFields(String1.reified(), fields.follower_username) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): JoinedHiveOfProfile { if (!isJoinedHiveOfProfile(item.type)) { throw new Error("not a JoinedHiveOfProfile type");

 }

 return JoinedHiveOfProfile.reified( ).new( { followerTrainerAddr: decodeFromFieldsWithTypes("address", item.fields.follower_trainer_addr), followedTrainer: decodeFromFieldsWithTypes("address", item.fields.followed_trainer), followerUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.follower_username) } ) }

 static fromBcs( data: Uint8Array ): JoinedHiveOfProfile { return JoinedHiveOfProfile.fromFields( JoinedHiveOfProfile.bcs.parse(data) ) }

 toJSONField() { return {

 followerTrainerAddr: this.followerTrainerAddr,followedTrainer: this.followedTrainer,followerUsername: this.followerUsername,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): JoinedHiveOfProfile { return JoinedHiveOfProfile.reified( ).new( { followerTrainerAddr: decodeFromJSONField("address", field.followerTrainerAddr), followedTrainer: decodeFromJSONField("address", field.followedTrainer), followerUsername: decodeFromJSONField(String1.reified(), field.followerUsername) } ) }

 static fromJSON( json: Record<string, any> ): JoinedHiveOfProfile { if (json.$typeName !== JoinedHiveOfProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return JoinedHiveOfProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): JoinedHiveOfProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isJoinedHiveOfProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a JoinedHiveOfProfile object`); } return JoinedHiveOfProfile.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): JoinedHiveOfProfile { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isJoinedHiveOfProfile(data.bcs.type)) { throw new Error(`object at is not a JoinedHiveOfProfile object`); }

 return JoinedHiveOfProfile.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return JoinedHiveOfProfile.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<JoinedHiveOfProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching JoinedHiveOfProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isJoinedHiveOfProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a JoinedHiveOfProfile object`); }

 return JoinedHiveOfProfile.fromSuiObjectData( res.data ); }

 }

/* ============================== ListingCanceled =============================== */

export function isListingCanceled(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::ListingCanceled`; }

export interface ListingCanceledFields { listedByTrainer: ToField<"address">; version: ToField<"u64"> }

export type ListingCanceledReified = Reified< ListingCanceled, ListingCanceledFields >;

export class ListingCanceled implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::ListingCanceled`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ListingCanceled.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::ListingCanceled`; readonly $typeArgs: []; readonly $isPhantom = ListingCanceled.$isPhantom;

 readonly listedByTrainer: ToField<"address">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: ListingCanceledFields, ) { this.$fullTypeName = composeSuiType( ListingCanceled.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::ListingCanceled`; this.$typeArgs = typeArgs;

 this.listedByTrainer = fields.listedByTrainer;; this.version = fields.version; }

 static reified( ): ListingCanceledReified { return { typeName: ListingCanceled.$typeName, fullTypeName: composeSuiType( ListingCanceled.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::ListingCanceled`, typeArgs: [ ] as [], isPhantom: ListingCanceled.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListingCanceled.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListingCanceled.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListingCanceled.fromBcs( data, ), bcs: ListingCanceled.bcs, fromJSONField: (field: any) => ListingCanceled.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListingCanceled.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListingCanceled.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ListingCanceled.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ListingCanceled.fetch( client, id, ), new: ( fields: ListingCanceledFields, ) => { return new ListingCanceled( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListingCanceled.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListingCanceled>> { return phantom(ListingCanceled.reified( )); } static get p() { return ListingCanceled.phantom() }

 static get bcs() { return bcs.struct("ListingCanceled", {

 listed_by_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ListingCanceled { return ListingCanceled.reified( ).new( { listedByTrainer: decodeFromFields("address", fields.listed_by_trainer), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListingCanceled { if (!isListingCanceled(item.type)) { throw new Error("not a ListingCanceled type");

 }

 return ListingCanceled.reified( ).new( { listedByTrainer: decodeFromFieldsWithTypes("address", item.fields.listed_by_trainer), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): ListingCanceled { return ListingCanceled.fromFields( ListingCanceled.bcs.parse(data) ) }

 toJSONField() { return {

 listedByTrainer: this.listedByTrainer,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListingCanceled { return ListingCanceled.reified( ).new( { listedByTrainer: decodeFromJSONField("address", field.listedByTrainer), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): ListingCanceled { if (json.$typeName !== ListingCanceled.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListingCanceled.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListingCanceled { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListingCanceled(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListingCanceled object`); } return ListingCanceled.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ListingCanceled { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isListingCanceled(data.bcs.type)) { throw new Error(`object at is not a ListingCanceled object`); }

 return ListingCanceled.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ListingCanceled.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListingCanceled> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListingCanceled object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListingCanceled(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListingCanceled object`); }

 return ListingCanceled.fromSuiObjectData( res.data ); }

 }

/* ============================== ListingDestroyed =============================== */

export function isListingDestroyed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::ListingDestroyed`; }

export interface ListingDestroyedFields { version: ToField<"u64">; listedByTrainer: ToField<"address"> }

export type ListingDestroyedReified = Reified< ListingDestroyed, ListingDestroyedFields >;

export class ListingDestroyed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::ListingDestroyed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ListingDestroyed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::ListingDestroyed`; readonly $typeArgs: []; readonly $isPhantom = ListingDestroyed.$isPhantom;

 readonly version: ToField<"u64">; readonly listedByTrainer: ToField<"address">

 private constructor(typeArgs: [], fields: ListingDestroyedFields, ) { this.$fullTypeName = composeSuiType( ListingDestroyed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::ListingDestroyed`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.listedByTrainer = fields.listedByTrainer; }

 static reified( ): ListingDestroyedReified { return { typeName: ListingDestroyed.$typeName, fullTypeName: composeSuiType( ListingDestroyed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::ListingDestroyed`, typeArgs: [ ] as [], isPhantom: ListingDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListingDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListingDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListingDestroyed.fromBcs( data, ), bcs: ListingDestroyed.bcs, fromJSONField: (field: any) => ListingDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListingDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListingDestroyed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ListingDestroyed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ListingDestroyed.fetch( client, id, ), new: ( fields: ListingDestroyedFields, ) => { return new ListingDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListingDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListingDestroyed>> { return phantom(ListingDestroyed.reified( )); } static get p() { return ListingDestroyed.phantom() }

 static get bcs() { return bcs.struct("ListingDestroyed", {

 version: bcs.u64(), listed_by_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): ListingDestroyed { return ListingDestroyed.reified( ).new( { version: decodeFromFields("u64", fields.version), listedByTrainer: decodeFromFields("address", fields.listed_by_trainer) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListingDestroyed { if (!isListingDestroyed(item.type)) { throw new Error("not a ListingDestroyed type");

 }

 return ListingDestroyed.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), listedByTrainer: decodeFromFieldsWithTypes("address", item.fields.listed_by_trainer) } ) }

 static fromBcs( data: Uint8Array ): ListingDestroyed { return ListingDestroyed.fromFields( ListingDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),listedByTrainer: this.listedByTrainer,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListingDestroyed { return ListingDestroyed.reified( ).new( { version: decodeFromJSONField("u64", field.version), listedByTrainer: decodeFromJSONField("address", field.listedByTrainer) } ) }

 static fromJSON( json: Record<string, any> ): ListingDestroyed { if (json.$typeName !== ListingDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListingDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListingDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListingDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListingDestroyed object`); } return ListingDestroyed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ListingDestroyed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isListingDestroyed(data.bcs.type)) { throw new Error(`object at is not a ListingDestroyed object`); }

 return ListingDestroyed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ListingDestroyed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListingDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListingDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListingDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListingDestroyed object`); }

 return ListingDestroyed.fromSuiObjectData( res.data ); }

 }

/* ============================== ListingExpired =============================== */

export function isListingExpired(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::ListingExpired`; }

export interface ListingExpiredFields { listedByTrainer: ToField<"address">; version: ToField<"u64"> }

export type ListingExpiredReified = Reified< ListingExpired, ListingExpiredFields >;

export class ListingExpired implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::ListingExpired`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ListingExpired.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::ListingExpired`; readonly $typeArgs: []; readonly $isPhantom = ListingExpired.$isPhantom;

 readonly listedByTrainer: ToField<"address">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: ListingExpiredFields, ) { this.$fullTypeName = composeSuiType( ListingExpired.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::ListingExpired`; this.$typeArgs = typeArgs;

 this.listedByTrainer = fields.listedByTrainer;; this.version = fields.version; }

 static reified( ): ListingExpiredReified { return { typeName: ListingExpired.$typeName, fullTypeName: composeSuiType( ListingExpired.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::ListingExpired`, typeArgs: [ ] as [], isPhantom: ListingExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListingExpired.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListingExpired.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListingExpired.fromBcs( data, ), bcs: ListingExpired.bcs, fromJSONField: (field: any) => ListingExpired.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListingExpired.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListingExpired.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ListingExpired.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ListingExpired.fetch( client, id, ), new: ( fields: ListingExpiredFields, ) => { return new ListingExpired( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListingExpired.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListingExpired>> { return phantom(ListingExpired.reified( )); } static get p() { return ListingExpired.phantom() }

 static get bcs() { return bcs.struct("ListingExpired", {

 listed_by_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ListingExpired { return ListingExpired.reified( ).new( { listedByTrainer: decodeFromFields("address", fields.listed_by_trainer), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListingExpired { if (!isListingExpired(item.type)) { throw new Error("not a ListingExpired type");

 }

 return ListingExpired.reified( ).new( { listedByTrainer: decodeFromFieldsWithTypes("address", item.fields.listed_by_trainer), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): ListingExpired { return ListingExpired.fromFields( ListingExpired.bcs.parse(data) ) }

 toJSONField() { return {

 listedByTrainer: this.listedByTrainer,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListingExpired { return ListingExpired.reified( ).new( { listedByTrainer: decodeFromJSONField("address", field.listedByTrainer), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): ListingExpired { if (json.$typeName !== ListingExpired.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListingExpired.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListingExpired { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListingExpired(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListingExpired object`); } return ListingExpired.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ListingExpired { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isListingExpired(data.bcs.type)) { throw new Error(`object at is not a ListingExpired object`); }

 return ListingExpired.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ListingExpired.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListingExpired> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListingExpired object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListingExpired(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListingExpired object`); }

 return ListingExpired.fromSuiObjectData( res.data ); }

 }

/* ============================== ListingRecord =============================== */

export function isListingRecord(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::ListingRecord`; }

export interface ListingRecordFields { version: ToField<"u64">; minPrice: ToField<"u64">; expirationSec: ToField<"u64"> }

export type ListingRecordReified = Reified< ListingRecord, ListingRecordFields >;

export class ListingRecord implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::ListingRecord`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ListingRecord.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::ListingRecord`; readonly $typeArgs: []; readonly $isPhantom = ListingRecord.$isPhantom;

 readonly version: ToField<"u64">; readonly minPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: ListingRecordFields, ) { this.$fullTypeName = composeSuiType( ListingRecord.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::ListingRecord`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.minPrice = fields.minPrice;; this.expirationSec = fields.expirationSec; }

 static reified( ): ListingRecordReified { return { typeName: ListingRecord.$typeName, fullTypeName: composeSuiType( ListingRecord.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::ListingRecord`, typeArgs: [ ] as [], isPhantom: ListingRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListingRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListingRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListingRecord.fromBcs( data, ), bcs: ListingRecord.bcs, fromJSONField: (field: any) => ListingRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListingRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListingRecord.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ListingRecord.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ListingRecord.fetch( client, id, ), new: ( fields: ListingRecordFields, ) => { return new ListingRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListingRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListingRecord>> { return phantom(ListingRecord.reified( )); } static get p() { return ListingRecord.phantom() }

 static get bcs() { return bcs.struct("ListingRecord", {

 version: bcs.u64(), min_price: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ListingRecord { return ListingRecord.reified( ).new( { version: decodeFromFields("u64", fields.version), minPrice: decodeFromFields("u64", fields.min_price), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListingRecord { if (!isListingRecord(item.type)) { throw new Error("not a ListingRecord type");

 }

 return ListingRecord.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), minPrice: decodeFromFieldsWithTypes("u64", item.fields.min_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): ListingRecord { return ListingRecord.fromFields( ListingRecord.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),minPrice: this.minPrice.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListingRecord { return ListingRecord.reified( ).new( { version: decodeFromJSONField("u64", field.version), minPrice: decodeFromJSONField("u64", field.minPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): ListingRecord { if (json.$typeName !== ListingRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListingRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListingRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListingRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListingRecord object`); } return ListingRecord.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ListingRecord { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isListingRecord(data.bcs.type)) { throw new Error(`object at is not a ListingRecord object`); }

 return ListingRecord.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ListingRecord.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListingRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListingRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListingRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListingRecord object`); }

 return ListingRecord.fromSuiObjectData( res.data ); }

 }

/* ============================== ListingUpdated =============================== */

export function isListingUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::ListingUpdated`; }

export interface ListingUpdatedFields { listedByTrainer: ToField<"address">; version: ToField<"u64">; minPrice: ToField<"u64">; expirationSec: ToField<"u64"> }

export type ListingUpdatedReified = Reified< ListingUpdated, ListingUpdatedFields >;

export class ListingUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::ListingUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ListingUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::ListingUpdated`; readonly $typeArgs: []; readonly $isPhantom = ListingUpdated.$isPhantom;

 readonly listedByTrainer: ToField<"address">; readonly version: ToField<"u64">; readonly minPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: ListingUpdatedFields, ) { this.$fullTypeName = composeSuiType( ListingUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::ListingUpdated`; this.$typeArgs = typeArgs;

 this.listedByTrainer = fields.listedByTrainer;; this.version = fields.version;; this.minPrice = fields.minPrice;; this.expirationSec = fields.expirationSec; }

 static reified( ): ListingUpdatedReified { return { typeName: ListingUpdated.$typeName, fullTypeName: composeSuiType( ListingUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::ListingUpdated`, typeArgs: [ ] as [], isPhantom: ListingUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListingUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListingUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListingUpdated.fromBcs( data, ), bcs: ListingUpdated.bcs, fromJSONField: (field: any) => ListingUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListingUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListingUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ListingUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ListingUpdated.fetch( client, id, ), new: ( fields: ListingUpdatedFields, ) => { return new ListingUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListingUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListingUpdated>> { return phantom(ListingUpdated.reified( )); } static get p() { return ListingUpdated.phantom() }

 static get bcs() { return bcs.struct("ListingUpdated", {

 listed_by_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), min_price: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ListingUpdated { return ListingUpdated.reified( ).new( { listedByTrainer: decodeFromFields("address", fields.listed_by_trainer), version: decodeFromFields("u64", fields.version), minPrice: decodeFromFields("u64", fields.min_price), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListingUpdated { if (!isListingUpdated(item.type)) { throw new Error("not a ListingUpdated type");

 }

 return ListingUpdated.reified( ).new( { listedByTrainer: decodeFromFieldsWithTypes("address", item.fields.listed_by_trainer), version: decodeFromFieldsWithTypes("u64", item.fields.version), minPrice: decodeFromFieldsWithTypes("u64", item.fields.min_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): ListingUpdated { return ListingUpdated.fromFields( ListingUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 listedByTrainer: this.listedByTrainer,version: this.version.toString(),minPrice: this.minPrice.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListingUpdated { return ListingUpdated.reified( ).new( { listedByTrainer: decodeFromJSONField("address", field.listedByTrainer), version: decodeFromJSONField("u64", field.version), minPrice: decodeFromJSONField("u64", field.minPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): ListingUpdated { if (json.$typeName !== ListingUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListingUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListingUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListingUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListingUpdated object`); } return ListingUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ListingUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isListingUpdated(data.bcs.type)) { throw new Error(`object at is not a ListingUpdated object`); }

 return ListingUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ListingUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListingUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListingUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListingUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListingUpdated object`); }

 return ListingUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== LockedDegenHiveAssets =============================== */

export function isLockedDegenHiveAssets(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::LockedDegenHiveAssets`; }

export interface LockedDegenHiveAssetsFields { id: ToField<UID>; hiveLocked: ToField<Balance<ToPhantom<HIVE>>>; honeyLocked: ToField<Balance<ToPhantom<HONEY>>> }

export type LockedDegenHiveAssetsReified = Reified< LockedDegenHiveAssets, LockedDegenHiveAssetsFields >;

export class LockedDegenHiveAssets implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::LockedDegenHiveAssets`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = LockedDegenHiveAssets.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::LockedDegenHiveAssets`; readonly $typeArgs: []; readonly $isPhantom = LockedDegenHiveAssets.$isPhantom;

 readonly id: ToField<UID>; readonly hiveLocked: ToField<Balance<ToPhantom<HIVE>>>; readonly honeyLocked: ToField<Balance<ToPhantom<HONEY>>>

 private constructor(typeArgs: [], fields: LockedDegenHiveAssetsFields, ) { this.$fullTypeName = composeSuiType( LockedDegenHiveAssets.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::LockedDegenHiveAssets`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.hiveLocked = fields.hiveLocked;; this.honeyLocked = fields.honeyLocked; }

 static reified( ): LockedDegenHiveAssetsReified { return { typeName: LockedDegenHiveAssets.$typeName, fullTypeName: composeSuiType( LockedDegenHiveAssets.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::LockedDegenHiveAssets`, typeArgs: [ ] as [], isPhantom: LockedDegenHiveAssets.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LockedDegenHiveAssets.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LockedDegenHiveAssets.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LockedDegenHiveAssets.fromBcs( data, ), bcs: LockedDegenHiveAssets.bcs, fromJSONField: (field: any) => LockedDegenHiveAssets.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LockedDegenHiveAssets.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LockedDegenHiveAssets.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => LockedDegenHiveAssets.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => LockedDegenHiveAssets.fetch( client, id, ), new: ( fields: LockedDegenHiveAssetsFields, ) => { return new LockedDegenHiveAssets( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LockedDegenHiveAssets.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LockedDegenHiveAssets>> { return phantom(LockedDegenHiveAssets.reified( )); } static get p() { return LockedDegenHiveAssets.phantom() }

 static get bcs() { return bcs.struct("LockedDegenHiveAssets", {

 id: UID.bcs, hive_locked: Balance.bcs, honey_locked: Balance.bcs

}) };

 static fromFields( fields: Record<string, any> ): LockedDegenHiveAssets { return LockedDegenHiveAssets.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), hiveLocked: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_locked), honeyLocked: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_locked) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LockedDegenHiveAssets { if (!isLockedDegenHiveAssets(item.type)) { throw new Error("not a LockedDegenHiveAssets type");

 }

 return LockedDegenHiveAssets.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), hiveLocked: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_locked), honeyLocked: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_locked) } ) }

 static fromBcs( data: Uint8Array ): LockedDegenHiveAssets { return LockedDegenHiveAssets.fromFields( LockedDegenHiveAssets.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,hiveLocked: this.hiveLocked.toJSONField(),honeyLocked: this.honeyLocked.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LockedDegenHiveAssets { return LockedDegenHiveAssets.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), hiveLocked: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveLocked), honeyLocked: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyLocked) } ) }

 static fromJSON( json: Record<string, any> ): LockedDegenHiveAssets { if (json.$typeName !== LockedDegenHiveAssets.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LockedDegenHiveAssets.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LockedDegenHiveAssets { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLockedDegenHiveAssets(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LockedDegenHiveAssets object`); } return LockedDegenHiveAssets.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): LockedDegenHiveAssets { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isLockedDegenHiveAssets(data.bcs.type)) { throw new Error(`object at is not a LockedDegenHiveAssets object`); }

 return LockedDegenHiveAssets.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return LockedDegenHiveAssets.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<LockedDegenHiveAssets> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LockedDegenHiveAssets object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLockedDegenHiveAssets(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LockedDegenHiveAssets object`); }

 return LockedDegenHiveAssets.fromSuiObjectData( res.data ); }

 }

/* ============================== ManagerConfigUpdated =============================== */

export function isManagerConfigUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::ManagerConfigUpdated`; }

export interface ManagerConfigUpdatedFields { maxBidsPerBee: ToField<"u64">; minBidAmt: ToField<"u64">; trainerOnboardingFee: ToField<"u64">; mutationFee: ToField<"u64"> }

export type ManagerConfigUpdatedReified = Reified< ManagerConfigUpdated, ManagerConfigUpdatedFields >;

export class ManagerConfigUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::ManagerConfigUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ManagerConfigUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::ManagerConfigUpdated`; readonly $typeArgs: []; readonly $isPhantom = ManagerConfigUpdated.$isPhantom;

 readonly maxBidsPerBee: ToField<"u64">; readonly minBidAmt: ToField<"u64">; readonly trainerOnboardingFee: ToField<"u64">; readonly mutationFee: ToField<"u64">

 private constructor(typeArgs: [], fields: ManagerConfigUpdatedFields, ) { this.$fullTypeName = composeSuiType( ManagerConfigUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::ManagerConfigUpdated`; this.$typeArgs = typeArgs;

 this.maxBidsPerBee = fields.maxBidsPerBee;; this.minBidAmt = fields.minBidAmt;; this.trainerOnboardingFee = fields.trainerOnboardingFee;; this.mutationFee = fields.mutationFee; }

 static reified( ): ManagerConfigUpdatedReified { return { typeName: ManagerConfigUpdated.$typeName, fullTypeName: composeSuiType( ManagerConfigUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::ManagerConfigUpdated`, typeArgs: [ ] as [], isPhantom: ManagerConfigUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ManagerConfigUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ManagerConfigUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ManagerConfigUpdated.fromBcs( data, ), bcs: ManagerConfigUpdated.bcs, fromJSONField: (field: any) => ManagerConfigUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ManagerConfigUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ManagerConfigUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ManagerConfigUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ManagerConfigUpdated.fetch( client, id, ), new: ( fields: ManagerConfigUpdatedFields, ) => { return new ManagerConfigUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ManagerConfigUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ManagerConfigUpdated>> { return phantom(ManagerConfigUpdated.reified( )); } static get p() { return ManagerConfigUpdated.phantom() }

 static get bcs() { return bcs.struct("ManagerConfigUpdated", {

 max_bids_per_bee: bcs.u64(), min_bid_amt: bcs.u64(), trainer_onboarding_fee: bcs.u64(), mutation_fee: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ManagerConfigUpdated { return ManagerConfigUpdated.reified( ).new( { maxBidsPerBee: decodeFromFields("u64", fields.max_bids_per_bee), minBidAmt: decodeFromFields("u64", fields.min_bid_amt), trainerOnboardingFee: decodeFromFields("u64", fields.trainer_onboarding_fee), mutationFee: decodeFromFields("u64", fields.mutation_fee) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ManagerConfigUpdated { if (!isManagerConfigUpdated(item.type)) { throw new Error("not a ManagerConfigUpdated type");

 }

 return ManagerConfigUpdated.reified( ).new( { maxBidsPerBee: decodeFromFieldsWithTypes("u64", item.fields.max_bids_per_bee), minBidAmt: decodeFromFieldsWithTypes("u64", item.fields.min_bid_amt), trainerOnboardingFee: decodeFromFieldsWithTypes("u64", item.fields.trainer_onboarding_fee), mutationFee: decodeFromFieldsWithTypes("u64", item.fields.mutation_fee) } ) }

 static fromBcs( data: Uint8Array ): ManagerConfigUpdated { return ManagerConfigUpdated.fromFields( ManagerConfigUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 maxBidsPerBee: this.maxBidsPerBee.toString(),minBidAmt: this.minBidAmt.toString(),trainerOnboardingFee: this.trainerOnboardingFee.toString(),mutationFee: this.mutationFee.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ManagerConfigUpdated { return ManagerConfigUpdated.reified( ).new( { maxBidsPerBee: decodeFromJSONField("u64", field.maxBidsPerBee), minBidAmt: decodeFromJSONField("u64", field.minBidAmt), trainerOnboardingFee: decodeFromJSONField("u64", field.trainerOnboardingFee), mutationFee: decodeFromJSONField("u64", field.mutationFee) } ) }

 static fromJSON( json: Record<string, any> ): ManagerConfigUpdated { if (json.$typeName !== ManagerConfigUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ManagerConfigUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ManagerConfigUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isManagerConfigUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ManagerConfigUpdated object`); } return ManagerConfigUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ManagerConfigUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isManagerConfigUpdated(data.bcs.type)) { throw new Error(`object at is not a ManagerConfigUpdated object`); }

 return ManagerConfigUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ManagerConfigUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ManagerConfigUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ManagerConfigUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isManagerConfigUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ManagerConfigUpdated object`); }

 return ManagerConfigUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== MarketPlace =============================== */

export function isMarketPlace(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::MarketPlace`; }

export interface MarketPlaceFields { id: ToField<UID>; activeListings: ToField<LinkedTable<"u64", ToPhantom<Listing>>>; availableBids: ToField<LinkedTable<"u64", ToPhantom<Vector<Bid>>>>; processedListings: ToField<LinkedTable<"u64", ToPhantom<ExecutedListing>>>; moduleVersion: ToField<"u64"> }

export type MarketPlaceReified = Reified< MarketPlace, MarketPlaceFields >;

export class MarketPlace implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::MarketPlace`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MarketPlace.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::MarketPlace`; readonly $typeArgs: []; readonly $isPhantom = MarketPlace.$isPhantom;

 readonly id: ToField<UID>; readonly activeListings: ToField<LinkedTable<"u64", ToPhantom<Listing>>>; readonly availableBids: ToField<LinkedTable<"u64", ToPhantom<Vector<Bid>>>>; readonly processedListings: ToField<LinkedTable<"u64", ToPhantom<ExecutedListing>>>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: MarketPlaceFields, ) { this.$fullTypeName = composeSuiType( MarketPlace.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::MarketPlace`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.activeListings = fields.activeListings;; this.availableBids = fields.availableBids;; this.processedListings = fields.processedListings;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): MarketPlaceReified { return { typeName: MarketPlace.$typeName, fullTypeName: composeSuiType( MarketPlace.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::MarketPlace`, typeArgs: [ ] as [], isPhantom: MarketPlace.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MarketPlace.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MarketPlace.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MarketPlace.fromBcs( data, ), bcs: MarketPlace.bcs, fromJSONField: (field: any) => MarketPlace.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MarketPlace.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MarketPlace.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MarketPlace.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MarketPlace.fetch( client, id, ), new: ( fields: MarketPlaceFields, ) => { return new MarketPlace( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MarketPlace.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MarketPlace>> { return phantom(MarketPlace.reified( )); } static get p() { return MarketPlace.phantom() }

 static get bcs() { return bcs.struct("MarketPlace", {

 id: UID.bcs, active_listings: LinkedTable.bcs(bcs.u64()), available_bids: LinkedTable.bcs(bcs.u64()), processed_listings: LinkedTable.bcs(bcs.u64()), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): MarketPlace { return MarketPlace.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), activeListings: decodeFromFields(LinkedTable.reified("u64", reified.phantom(Listing.reified())), fields.active_listings), availableBids: decodeFromFields(LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified()))), fields.available_bids), processedListings: decodeFromFields(LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified())), fields.processed_listings), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MarketPlace { if (!isMarketPlace(item.type)) { throw new Error("not a MarketPlace type");

 }

 return MarketPlace.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), activeListings: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(Listing.reified())), item.fields.active_listings), availableBids: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified()))), item.fields.available_bids), processedListings: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified())), item.fields.processed_listings), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): MarketPlace { return MarketPlace.fromFields( MarketPlace.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,activeListings: this.activeListings.toJSONField(),availableBids: this.availableBids.toJSONField(),processedListings: this.processedListings.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MarketPlace { return MarketPlace.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), activeListings: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(Listing.reified())), field.activeListings), availableBids: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified()))), field.availableBids), processedListings: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified())), field.processedListings), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): MarketPlace { if (json.$typeName !== MarketPlace.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MarketPlace.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MarketPlace { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMarketPlace(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MarketPlace object`); } return MarketPlace.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MarketPlace { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMarketPlace(data.bcs.type)) { throw new Error(`object at is not a MarketPlace object`); }

 return MarketPlace.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MarketPlace.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MarketPlace> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MarketPlace object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMarketPlace(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MarketPlace object`); }

 return MarketPlace.fromSuiObjectData( res.data ); }

 }

/* ============================== MasterKeyReplenished =============================== */

export function isMasterKeyReplenished(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::MasterKeyReplenished`; }

export interface MasterKeyReplenishedFields { addr: ToField<"address">; appName: ToField<String>; honeyEarned: ToField<"u64">; energyAdded: ToField<"u64">; healthAdded: ToField<"u64">; availableEnergy: ToField<"u64">; availableHealth: ToField<"u64"> }

export type MasterKeyReplenishedReified = Reified< MasterKeyReplenished, MasterKeyReplenishedFields >;

export class MasterKeyReplenished implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::MasterKeyReplenished`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MasterKeyReplenished.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::MasterKeyReplenished`; readonly $typeArgs: []; readonly $isPhantom = MasterKeyReplenished.$isPhantom;

 readonly addr: ToField<"address">; readonly appName: ToField<String>; readonly honeyEarned: ToField<"u64">; readonly energyAdded: ToField<"u64">; readonly healthAdded: ToField<"u64">; readonly availableEnergy: ToField<"u64">; readonly availableHealth: ToField<"u64">

 private constructor(typeArgs: [], fields: MasterKeyReplenishedFields, ) { this.$fullTypeName = composeSuiType( MasterKeyReplenished.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::MasterKeyReplenished`; this.$typeArgs = typeArgs;

 this.addr = fields.addr;; this.appName = fields.appName;; this.honeyEarned = fields.honeyEarned;; this.energyAdded = fields.energyAdded;; this.healthAdded = fields.healthAdded;; this.availableEnergy = fields.availableEnergy;; this.availableHealth = fields.availableHealth; }

 static reified( ): MasterKeyReplenishedReified { return { typeName: MasterKeyReplenished.$typeName, fullTypeName: composeSuiType( MasterKeyReplenished.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::MasterKeyReplenished`, typeArgs: [ ] as [], isPhantom: MasterKeyReplenished.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MasterKeyReplenished.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MasterKeyReplenished.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MasterKeyReplenished.fromBcs( data, ), bcs: MasterKeyReplenished.bcs, fromJSONField: (field: any) => MasterKeyReplenished.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MasterKeyReplenished.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MasterKeyReplenished.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MasterKeyReplenished.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MasterKeyReplenished.fetch( client, id, ), new: ( fields: MasterKeyReplenishedFields, ) => { return new MasterKeyReplenished( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MasterKeyReplenished.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MasterKeyReplenished>> { return phantom(MasterKeyReplenished.reified( )); } static get p() { return MasterKeyReplenished.phantom() }

 static get bcs() { return bcs.struct("MasterKeyReplenished", {

 addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), app_name: String.bcs, honey_earned: bcs.u64(), energy_added: bcs.u64(), health_added: bcs.u64(), available_energy: bcs.u64(), available_health: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): MasterKeyReplenished { return MasterKeyReplenished.reified( ).new( { addr: decodeFromFields("address", fields.addr), appName: decodeFromFields(String.reified(), fields.app_name), honeyEarned: decodeFromFields("u64", fields.honey_earned), energyAdded: decodeFromFields("u64", fields.energy_added), healthAdded: decodeFromFields("u64", fields.health_added), availableEnergy: decodeFromFields("u64", fields.available_energy), availableHealth: decodeFromFields("u64", fields.available_health) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MasterKeyReplenished { if (!isMasterKeyReplenished(item.type)) { throw new Error("not a MasterKeyReplenished type");

 }

 return MasterKeyReplenished.reified( ).new( { addr: decodeFromFieldsWithTypes("address", item.fields.addr), appName: decodeFromFieldsWithTypes(String.reified(), item.fields.app_name), honeyEarned: decodeFromFieldsWithTypes("u64", item.fields.honey_earned), energyAdded: decodeFromFieldsWithTypes("u64", item.fields.energy_added), healthAdded: decodeFromFieldsWithTypes("u64", item.fields.health_added), availableEnergy: decodeFromFieldsWithTypes("u64", item.fields.available_energy), availableHealth: decodeFromFieldsWithTypes("u64", item.fields.available_health) } ) }

 static fromBcs( data: Uint8Array ): MasterKeyReplenished { return MasterKeyReplenished.fromFields( MasterKeyReplenished.bcs.parse(data) ) }

 toJSONField() { return {

 addr: this.addr,appName: this.appName,honeyEarned: this.honeyEarned.toString(),energyAdded: this.energyAdded.toString(),healthAdded: this.healthAdded.toString(),availableEnergy: this.availableEnergy.toString(),availableHealth: this.availableHealth.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MasterKeyReplenished { return MasterKeyReplenished.reified( ).new( { addr: decodeFromJSONField("address", field.addr), appName: decodeFromJSONField(String.reified(), field.appName), honeyEarned: decodeFromJSONField("u64", field.honeyEarned), energyAdded: decodeFromJSONField("u64", field.energyAdded), healthAdded: decodeFromJSONField("u64", field.healthAdded), availableEnergy: decodeFromJSONField("u64", field.availableEnergy), availableHealth: decodeFromJSONField("u64", field.availableHealth) } ) }

 static fromJSON( json: Record<string, any> ): MasterKeyReplenished { if (json.$typeName !== MasterKeyReplenished.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MasterKeyReplenished.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MasterKeyReplenished { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMasterKeyReplenished(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MasterKeyReplenished object`); } return MasterKeyReplenished.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MasterKeyReplenished { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMasterKeyReplenished(data.bcs.type)) { throw new Error(`object at is not a MasterKeyReplenished object`); }

 return MasterKeyReplenished.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MasterKeyReplenished.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MasterKeyReplenished> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MasterKeyReplenished object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMasterKeyReplenished(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MasterKeyReplenished object`); }

 return MasterKeyReplenished.fromSuiObjectData( res.data ); }

 }

/* ============================== MemeCoinLaunchedViaBee =============================== */

export function isMemeCoinLaunchedViaBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::MemeCoinLaunchedViaBee`; }

export interface MemeCoinLaunchedViaBeeFields { memeIdentifier: ToField<String>; beeVersion: ToField<"u64">; cooldownStage: ToField<"u64">; cooldownTillTs: ToField<"u64"> }

export type MemeCoinLaunchedViaBeeReified = Reified< MemeCoinLaunchedViaBee, MemeCoinLaunchedViaBeeFields >;

export class MemeCoinLaunchedViaBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::MemeCoinLaunchedViaBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MemeCoinLaunchedViaBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::MemeCoinLaunchedViaBee`; readonly $typeArgs: []; readonly $isPhantom = MemeCoinLaunchedViaBee.$isPhantom;

 readonly memeIdentifier: ToField<String>; readonly beeVersion: ToField<"u64">; readonly cooldownStage: ToField<"u64">; readonly cooldownTillTs: ToField<"u64">

 private constructor(typeArgs: [], fields: MemeCoinLaunchedViaBeeFields, ) { this.$fullTypeName = composeSuiType( MemeCoinLaunchedViaBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::MemeCoinLaunchedViaBee`; this.$typeArgs = typeArgs;

 this.memeIdentifier = fields.memeIdentifier;; this.beeVersion = fields.beeVersion;; this.cooldownStage = fields.cooldownStage;; this.cooldownTillTs = fields.cooldownTillTs; }

 static reified( ): MemeCoinLaunchedViaBeeReified { return { typeName: MemeCoinLaunchedViaBee.$typeName, fullTypeName: composeSuiType( MemeCoinLaunchedViaBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::MemeCoinLaunchedViaBee`, typeArgs: [ ] as [], isPhantom: MemeCoinLaunchedViaBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MemeCoinLaunchedViaBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MemeCoinLaunchedViaBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MemeCoinLaunchedViaBee.fromBcs( data, ), bcs: MemeCoinLaunchedViaBee.bcs, fromJSONField: (field: any) => MemeCoinLaunchedViaBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MemeCoinLaunchedViaBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MemeCoinLaunchedViaBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MemeCoinLaunchedViaBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MemeCoinLaunchedViaBee.fetch( client, id, ), new: ( fields: MemeCoinLaunchedViaBeeFields, ) => { return new MemeCoinLaunchedViaBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MemeCoinLaunchedViaBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MemeCoinLaunchedViaBee>> { return phantom(MemeCoinLaunchedViaBee.reified( )); } static get p() { return MemeCoinLaunchedViaBee.phantom() }

 static get bcs() { return bcs.struct("MemeCoinLaunchedViaBee", {

 meme_identifier: String.bcs, bee_version: bcs.u64(), cooldown_stage: bcs.u64(), cooldown_till_ts: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): MemeCoinLaunchedViaBee { return MemeCoinLaunchedViaBee.reified( ).new( { memeIdentifier: decodeFromFields(String.reified(), fields.meme_identifier), beeVersion: decodeFromFields("u64", fields.bee_version), cooldownStage: decodeFromFields("u64", fields.cooldown_stage), cooldownTillTs: decodeFromFields("u64", fields.cooldown_till_ts) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MemeCoinLaunchedViaBee { if (!isMemeCoinLaunchedViaBee(item.type)) { throw new Error("not a MemeCoinLaunchedViaBee type");

 }

 return MemeCoinLaunchedViaBee.reified( ).new( { memeIdentifier: decodeFromFieldsWithTypes(String.reified(), item.fields.meme_identifier), beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), cooldownStage: decodeFromFieldsWithTypes("u64", item.fields.cooldown_stage), cooldownTillTs: decodeFromFieldsWithTypes("u64", item.fields.cooldown_till_ts) } ) }

 static fromBcs( data: Uint8Array ): MemeCoinLaunchedViaBee { return MemeCoinLaunchedViaBee.fromFields( MemeCoinLaunchedViaBee.bcs.parse(data) ) }

 toJSONField() { return {

 memeIdentifier: this.memeIdentifier,beeVersion: this.beeVersion.toString(),cooldownStage: this.cooldownStage.toString(),cooldownTillTs: this.cooldownTillTs.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MemeCoinLaunchedViaBee { return MemeCoinLaunchedViaBee.reified( ).new( { memeIdentifier: decodeFromJSONField(String.reified(), field.memeIdentifier), beeVersion: decodeFromJSONField("u64", field.beeVersion), cooldownStage: decodeFromJSONField("u64", field.cooldownStage), cooldownTillTs: decodeFromJSONField("u64", field.cooldownTillTs) } ) }

 static fromJSON( json: Record<string, any> ): MemeCoinLaunchedViaBee { if (json.$typeName !== MemeCoinLaunchedViaBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MemeCoinLaunchedViaBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MemeCoinLaunchedViaBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemeCoinLaunchedViaBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemeCoinLaunchedViaBee object`); } return MemeCoinLaunchedViaBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MemeCoinLaunchedViaBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMemeCoinLaunchedViaBee(data.bcs.type)) { throw new Error(`object at is not a MemeCoinLaunchedViaBee object`); }

 return MemeCoinLaunchedViaBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MemeCoinLaunchedViaBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MemeCoinLaunchedViaBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemeCoinLaunchedViaBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemeCoinLaunchedViaBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemeCoinLaunchedViaBee object`); }

 return MemeCoinLaunchedViaBee.fromSuiObjectData( res.data ); }

 }

/* ============================== MemepadCapability =============================== */

export function isMemepadCapability(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::MemepadCapability`; }

export interface MemepadCapabilityFields { id: ToField<UID> }

export type MemepadCapabilityReified = Reified< MemepadCapability, MemepadCapabilityFields >;

export class MemepadCapability implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::MemepadCapability`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MemepadCapability.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::MemepadCapability`; readonly $typeArgs: []; readonly $isPhantom = MemepadCapability.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: MemepadCapabilityFields, ) { this.$fullTypeName = composeSuiType( MemepadCapability.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::MemepadCapability`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): MemepadCapabilityReified { return { typeName: MemepadCapability.$typeName, fullTypeName: composeSuiType( MemepadCapability.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::MemepadCapability`, typeArgs: [ ] as [], isPhantom: MemepadCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MemepadCapability.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MemepadCapability.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MemepadCapability.fromBcs( data, ), bcs: MemepadCapability.bcs, fromJSONField: (field: any) => MemepadCapability.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MemepadCapability.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MemepadCapability.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MemepadCapability.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MemepadCapability.fetch( client, id, ), new: ( fields: MemepadCapabilityFields, ) => { return new MemepadCapability( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MemepadCapability.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MemepadCapability>> { return phantom(MemepadCapability.reified( )); } static get p() { return MemepadCapability.phantom() }

 static get bcs() { return bcs.struct("MemepadCapability", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): MemepadCapability { return MemepadCapability.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MemepadCapability { if (!isMemepadCapability(item.type)) { throw new Error("not a MemepadCapability type");

 }

 return MemepadCapability.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): MemepadCapability { return MemepadCapability.fromFields( MemepadCapability.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MemepadCapability { return MemepadCapability.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): MemepadCapability { if (json.$typeName !== MemepadCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MemepadCapability.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MemepadCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMemepadCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MemepadCapability object`); } return MemepadCapability.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MemepadCapability { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMemepadCapability(data.bcs.type)) { throw new Error(`object at is not a MemepadCapability object`); }

 return MemepadCapability.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MemepadCapability.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MemepadCapability> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MemepadCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMemepadCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MemepadCapability object`); }

 return MemepadCapability.fromSuiObjectData( res.data ); }

 }

/* ============================== MysticalBee =============================== */

export function isMysticalBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::MysticalBee`; }

export interface MysticalBeeFields { id: ToField<UID>; version: ToField<"u64">; name: ToField<String1>; ownedBy: ToField<"address">; queenVersion: ToField<"u64">; genes: ToField<"u256">; appearance: ToField<LinkedTable<"u64", ToPhantom<String1>>>; birthCertificate: ToField<BirthCertificate>; eggsBasket: ToField<EggBasketInfo>; nectar: ToField<NectarStore>; capabilities: ToField<LinkedTable<"u64", ToPhantom<CapabilityState>>>; gameState: ToField<LinkedTable<String, "address">>; hiveEnergy: ToField<"u64">; honeyHealth: ToField<"u64">; dragonDust: ToField<"u64">; isHatched: ToField<"bool"> }

export type MysticalBeeReified = Reified< MysticalBee, MysticalBeeFields >;

export class MysticalBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::MysticalBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MysticalBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::MysticalBee`; readonly $typeArgs: []; readonly $isPhantom = MysticalBee.$isPhantom;

 readonly id: ToField<UID>; readonly version: ToField<"u64">; readonly name: ToField<String1>; readonly ownedBy: ToField<"address">; readonly queenVersion: ToField<"u64">; readonly genes: ToField<"u256">; readonly appearance: ToField<LinkedTable<"u64", ToPhantom<String1>>>; readonly birthCertificate: ToField<BirthCertificate>; readonly eggsBasket: ToField<EggBasketInfo>; readonly nectar: ToField<NectarStore>; readonly capabilities: ToField<LinkedTable<"u64", ToPhantom<CapabilityState>>>; readonly gameState: ToField<LinkedTable<String, "address">>; readonly hiveEnergy: ToField<"u64">; readonly honeyHealth: ToField<"u64">; readonly dragonDust: ToField<"u64">; readonly isHatched: ToField<"bool">

 private constructor(typeArgs: [], fields: MysticalBeeFields, ) { this.$fullTypeName = composeSuiType( MysticalBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::MysticalBee`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.version = fields.version;; this.name = fields.name;; this.ownedBy = fields.ownedBy;; this.queenVersion = fields.queenVersion;; this.genes = fields.genes;; this.appearance = fields.appearance;; this.birthCertificate = fields.birthCertificate;; this.eggsBasket = fields.eggsBasket;; this.nectar = fields.nectar;; this.capabilities = fields.capabilities;; this.gameState = fields.gameState;; this.hiveEnergy = fields.hiveEnergy;; this.honeyHealth = fields.honeyHealth;; this.dragonDust = fields.dragonDust;; this.isHatched = fields.isHatched; }

 static reified( ): MysticalBeeReified { return { typeName: MysticalBee.$typeName, fullTypeName: composeSuiType( MysticalBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::MysticalBee`, typeArgs: [ ] as [], isPhantom: MysticalBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MysticalBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MysticalBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MysticalBee.fromBcs( data, ), bcs: MysticalBee.bcs, fromJSONField: (field: any) => MysticalBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MysticalBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MysticalBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MysticalBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MysticalBee.fetch( client, id, ), new: ( fields: MysticalBeeFields, ) => { return new MysticalBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MysticalBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MysticalBee>> { return phantom(MysticalBee.reified( )); } static get p() { return MysticalBee.phantom() }

 static get bcs() { return bcs.struct("MysticalBee", {

 id: UID.bcs, version: bcs.u64(), name: String1.bcs, owned_by: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), queen_version: bcs.u64(), genes: bcs.u256(), appearance: LinkedTable.bcs(bcs.u64()), birth_certificate: BirthCertificate.bcs, eggs_basket: EggBasketInfo.bcs, nectar: NectarStore.bcs, capabilities: LinkedTable.bcs(bcs.u64()), game_state: LinkedTable.bcs(String.bcs), hive_energy: bcs.u64(), honey_health: bcs.u64(), dragon_dust: bcs.u64(), is_hatched: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): MysticalBee { return MysticalBee.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), version: decodeFromFields("u64", fields.version), name: decodeFromFields(String1.reified(), fields.name), ownedBy: decodeFromFields("address", fields.owned_by), queenVersion: decodeFromFields("u64", fields.queen_version), genes: decodeFromFields("u256", fields.genes), appearance: decodeFromFields(LinkedTable.reified("u64", reified.phantom(String1.reified())), fields.appearance), birthCertificate: decodeFromFields(BirthCertificate.reified(), fields.birth_certificate), eggsBasket: decodeFromFields(EggBasketInfo.reified(), fields.eggs_basket), nectar: decodeFromFields(NectarStore.reified(), fields.nectar), capabilities: decodeFromFields(LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), fields.capabilities), gameState: decodeFromFields(LinkedTable.reified(String.reified(), reified.phantom("address")), fields.game_state), hiveEnergy: decodeFromFields("u64", fields.hive_energy), honeyHealth: decodeFromFields("u64", fields.honey_health), dragonDust: decodeFromFields("u64", fields.dragon_dust), isHatched: decodeFromFields("bool", fields.is_hatched) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MysticalBee { if (!isMysticalBee(item.type)) { throw new Error("not a MysticalBee type");

 }

 return MysticalBee.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), version: decodeFromFieldsWithTypes("u64", item.fields.version), name: decodeFromFieldsWithTypes(String1.reified(), item.fields.name), ownedBy: decodeFromFieldsWithTypes("address", item.fields.owned_by), queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), genes: decodeFromFieldsWithTypes("u256", item.fields.genes), appearance: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(String1.reified())), item.fields.appearance), birthCertificate: decodeFromFieldsWithTypes(BirthCertificate.reified(), item.fields.birth_certificate), eggsBasket: decodeFromFieldsWithTypes(EggBasketInfo.reified(), item.fields.eggs_basket), nectar: decodeFromFieldsWithTypes(NectarStore.reified(), item.fields.nectar), capabilities: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), item.fields.capabilities), gameState: decodeFromFieldsWithTypes(LinkedTable.reified(String.reified(), reified.phantom("address")), item.fields.game_state), hiveEnergy: decodeFromFieldsWithTypes("u64", item.fields.hive_energy), honeyHealth: decodeFromFieldsWithTypes("u64", item.fields.honey_health), dragonDust: decodeFromFieldsWithTypes("u64", item.fields.dragon_dust), isHatched: decodeFromFieldsWithTypes("bool", item.fields.is_hatched) } ) }

 static fromBcs( data: Uint8Array ): MysticalBee { return MysticalBee.fromFields( MysticalBee.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,version: this.version.toString(),name: this.name,ownedBy: this.ownedBy,queenVersion: this.queenVersion.toString(),genes: this.genes.toString(),appearance: this.appearance.toJSONField(),birthCertificate: this.birthCertificate.toJSONField(),eggsBasket: this.eggsBasket.toJSONField(),nectar: this.nectar.toJSONField(),capabilities: this.capabilities.toJSONField(),gameState: this.gameState.toJSONField(),hiveEnergy: this.hiveEnergy.toString(),honeyHealth: this.honeyHealth.toString(),dragonDust: this.dragonDust.toString(),isHatched: this.isHatched,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MysticalBee { return MysticalBee.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), version: decodeFromJSONField("u64", field.version), name: decodeFromJSONField(String1.reified(), field.name), ownedBy: decodeFromJSONField("address", field.ownedBy), queenVersion: decodeFromJSONField("u64", field.queenVersion), genes: decodeFromJSONField("u256", field.genes), appearance: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(String1.reified())), field.appearance), birthCertificate: decodeFromJSONField(BirthCertificate.reified(), field.birthCertificate), eggsBasket: decodeFromJSONField(EggBasketInfo.reified(), field.eggsBasket), nectar: decodeFromJSONField(NectarStore.reified(), field.nectar), capabilities: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(CapabilityState.reified())), field.capabilities), gameState: decodeFromJSONField(LinkedTable.reified(String.reified(), reified.phantom("address")), field.gameState), hiveEnergy: decodeFromJSONField("u64", field.hiveEnergy), honeyHealth: decodeFromJSONField("u64", field.honeyHealth), dragonDust: decodeFromJSONField("u64", field.dragonDust), isHatched: decodeFromJSONField("bool", field.isHatched) } ) }

 static fromJSON( json: Record<string, any> ): MysticalBee { if (json.$typeName !== MysticalBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MysticalBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MysticalBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMysticalBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MysticalBee object`); } return MysticalBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MysticalBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMysticalBee(data.bcs.type)) { throw new Error(`object at is not a MysticalBee object`); }

 return MysticalBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MysticalBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MysticalBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MysticalBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMysticalBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MysticalBee object`); }

 return MysticalBee.fromSuiObjectData( res.data ); }

 }

/* ============================== MysticalBeeRenamed =============================== */

export function isMysticalBeeRenamed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::MysticalBeeRenamed`; }

export interface MysticalBeeRenamedFields { trainerAddr: ToField<"address">; version: ToField<"u64">; newBeeName: ToField<String1> }

export type MysticalBeeRenamedReified = Reified< MysticalBeeRenamed, MysticalBeeRenamedFields >;

export class MysticalBeeRenamed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::MysticalBeeRenamed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MysticalBeeRenamed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::MysticalBeeRenamed`; readonly $typeArgs: []; readonly $isPhantom = MysticalBeeRenamed.$isPhantom;

 readonly trainerAddr: ToField<"address">; readonly version: ToField<"u64">; readonly newBeeName: ToField<String1>

 private constructor(typeArgs: [], fields: MysticalBeeRenamedFields, ) { this.$fullTypeName = composeSuiType( MysticalBeeRenamed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::MysticalBeeRenamed`; this.$typeArgs = typeArgs;

 this.trainerAddr = fields.trainerAddr;; this.version = fields.version;; this.newBeeName = fields.newBeeName; }

 static reified( ): MysticalBeeRenamedReified { return { typeName: MysticalBeeRenamed.$typeName, fullTypeName: composeSuiType( MysticalBeeRenamed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::MysticalBeeRenamed`, typeArgs: [ ] as [], isPhantom: MysticalBeeRenamed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MysticalBeeRenamed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MysticalBeeRenamed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MysticalBeeRenamed.fromBcs( data, ), bcs: MysticalBeeRenamed.bcs, fromJSONField: (field: any) => MysticalBeeRenamed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MysticalBeeRenamed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MysticalBeeRenamed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MysticalBeeRenamed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MysticalBeeRenamed.fetch( client, id, ), new: ( fields: MysticalBeeRenamedFields, ) => { return new MysticalBeeRenamed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MysticalBeeRenamed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MysticalBeeRenamed>> { return phantom(MysticalBeeRenamed.reified( )); } static get p() { return MysticalBeeRenamed.phantom() }

 static get bcs() { return bcs.struct("MysticalBeeRenamed", {

 trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), new_bee_name: String1.bcs

}) };

 static fromFields( fields: Record<string, any> ): MysticalBeeRenamed { return MysticalBeeRenamed.reified( ).new( { trainerAddr: decodeFromFields("address", fields.trainer_addr), version: decodeFromFields("u64", fields.version), newBeeName: decodeFromFields(String1.reified(), fields.new_bee_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MysticalBeeRenamed { if (!isMysticalBeeRenamed(item.type)) { throw new Error("not a MysticalBeeRenamed type");

 }

 return MysticalBeeRenamed.reified( ).new( { trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), version: decodeFromFieldsWithTypes("u64", item.fields.version), newBeeName: decodeFromFieldsWithTypes(String1.reified(), item.fields.new_bee_name) } ) }

 static fromBcs( data: Uint8Array ): MysticalBeeRenamed { return MysticalBeeRenamed.fromFields( MysticalBeeRenamed.bcs.parse(data) ) }

 toJSONField() { return {

 trainerAddr: this.trainerAddr,version: this.version.toString(),newBeeName: this.newBeeName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MysticalBeeRenamed { return MysticalBeeRenamed.reified( ).new( { trainerAddr: decodeFromJSONField("address", field.trainerAddr), version: decodeFromJSONField("u64", field.version), newBeeName: decodeFromJSONField(String1.reified(), field.newBeeName) } ) }

 static fromJSON( json: Record<string, any> ): MysticalBeeRenamed { if (json.$typeName !== MysticalBeeRenamed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MysticalBeeRenamed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MysticalBeeRenamed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMysticalBeeRenamed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MysticalBeeRenamed object`); } return MysticalBeeRenamed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MysticalBeeRenamed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMysticalBeeRenamed(data.bcs.type)) { throw new Error(`object at is not a MysticalBeeRenamed object`); }

 return MysticalBeeRenamed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MysticalBeeRenamed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MysticalBeeRenamed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MysticalBeeRenamed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMysticalBeeRenamed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MysticalBeeRenamed object`); }

 return MysticalBeeRenamed.fromSuiObjectData( res.data ); }

 }

/* ============================== MysticalBeeReturnedFromCompetition =============================== */

export function isMysticalBeeReturnedFromCompetition(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::MysticalBeeReturnedFromCompetition`; }

export interface MysticalBeeReturnedFromCompetitionFields { recepientTrainer: ToField<"address">; recepientUsername: ToField<String>; version: ToField<"u64">; energyIncrease: ToField<"u64">; healthIncrease: ToField<"u64">; hiveEnergy: ToField<"u64">; honeyHealth: ToField<"u64"> }

export type MysticalBeeReturnedFromCompetitionReified = Reified< MysticalBeeReturnedFromCompetition, MysticalBeeReturnedFromCompetitionFields >;

export class MysticalBeeReturnedFromCompetition implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::MysticalBeeReturnedFromCompetition`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MysticalBeeReturnedFromCompetition.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::MysticalBeeReturnedFromCompetition`; readonly $typeArgs: []; readonly $isPhantom = MysticalBeeReturnedFromCompetition.$isPhantom;

 readonly recepientTrainer: ToField<"address">; readonly recepientUsername: ToField<String>; readonly version: ToField<"u64">; readonly energyIncrease: ToField<"u64">; readonly healthIncrease: ToField<"u64">; readonly hiveEnergy: ToField<"u64">; readonly honeyHealth: ToField<"u64">

 private constructor(typeArgs: [], fields: MysticalBeeReturnedFromCompetitionFields, ) { this.$fullTypeName = composeSuiType( MysticalBeeReturnedFromCompetition.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::MysticalBeeReturnedFromCompetition`; this.$typeArgs = typeArgs;

 this.recepientTrainer = fields.recepientTrainer;; this.recepientUsername = fields.recepientUsername;; this.version = fields.version;; this.energyIncrease = fields.energyIncrease;; this.healthIncrease = fields.healthIncrease;; this.hiveEnergy = fields.hiveEnergy;; this.honeyHealth = fields.honeyHealth; }

 static reified( ): MysticalBeeReturnedFromCompetitionReified { return { typeName: MysticalBeeReturnedFromCompetition.$typeName, fullTypeName: composeSuiType( MysticalBeeReturnedFromCompetition.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::MysticalBeeReturnedFromCompetition`, typeArgs: [ ] as [], isPhantom: MysticalBeeReturnedFromCompetition.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MysticalBeeReturnedFromCompetition.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MysticalBeeReturnedFromCompetition.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MysticalBeeReturnedFromCompetition.fromBcs( data, ), bcs: MysticalBeeReturnedFromCompetition.bcs, fromJSONField: (field: any) => MysticalBeeReturnedFromCompetition.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MysticalBeeReturnedFromCompetition.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MysticalBeeReturnedFromCompetition.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MysticalBeeReturnedFromCompetition.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MysticalBeeReturnedFromCompetition.fetch( client, id, ), new: ( fields: MysticalBeeReturnedFromCompetitionFields, ) => { return new MysticalBeeReturnedFromCompetition( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MysticalBeeReturnedFromCompetition.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MysticalBeeReturnedFromCompetition>> { return phantom(MysticalBeeReturnedFromCompetition.reified( )); } static get p() { return MysticalBeeReturnedFromCompetition.phantom() }

 static get bcs() { return bcs.struct("MysticalBeeReturnedFromCompetition", {

 recepient_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), recepient_username: String.bcs, version: bcs.u64(), energy_increase: bcs.u64(), health_increase: bcs.u64(), hive_energy: bcs.u64(), honey_health: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): MysticalBeeReturnedFromCompetition { return MysticalBeeReturnedFromCompetition.reified( ).new( { recepientTrainer: decodeFromFields("address", fields.recepient_trainer), recepientUsername: decodeFromFields(String.reified(), fields.recepient_username), version: decodeFromFields("u64", fields.version), energyIncrease: decodeFromFields("u64", fields.energy_increase), healthIncrease: decodeFromFields("u64", fields.health_increase), hiveEnergy: decodeFromFields("u64", fields.hive_energy), honeyHealth: decodeFromFields("u64", fields.honey_health) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MysticalBeeReturnedFromCompetition { if (!isMysticalBeeReturnedFromCompetition(item.type)) { throw new Error("not a MysticalBeeReturnedFromCompetition type");

 }

 return MysticalBeeReturnedFromCompetition.reified( ).new( { recepientTrainer: decodeFromFieldsWithTypes("address", item.fields.recepient_trainer), recepientUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.recepient_username), version: decodeFromFieldsWithTypes("u64", item.fields.version), energyIncrease: decodeFromFieldsWithTypes("u64", item.fields.energy_increase), healthIncrease: decodeFromFieldsWithTypes("u64", item.fields.health_increase), hiveEnergy: decodeFromFieldsWithTypes("u64", item.fields.hive_energy), honeyHealth: decodeFromFieldsWithTypes("u64", item.fields.honey_health) } ) }

 static fromBcs( data: Uint8Array ): MysticalBeeReturnedFromCompetition { return MysticalBeeReturnedFromCompetition.fromFields( MysticalBeeReturnedFromCompetition.bcs.parse(data) ) }

 toJSONField() { return {

 recepientTrainer: this.recepientTrainer,recepientUsername: this.recepientUsername,version: this.version.toString(),energyIncrease: this.energyIncrease.toString(),healthIncrease: this.healthIncrease.toString(),hiveEnergy: this.hiveEnergy.toString(),honeyHealth: this.honeyHealth.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MysticalBeeReturnedFromCompetition { return MysticalBeeReturnedFromCompetition.reified( ).new( { recepientTrainer: decodeFromJSONField("address", field.recepientTrainer), recepientUsername: decodeFromJSONField(String.reified(), field.recepientUsername), version: decodeFromJSONField("u64", field.version), energyIncrease: decodeFromJSONField("u64", field.energyIncrease), healthIncrease: decodeFromJSONField("u64", field.healthIncrease), hiveEnergy: decodeFromJSONField("u64", field.hiveEnergy), honeyHealth: decodeFromJSONField("u64", field.honeyHealth) } ) }

 static fromJSON( json: Record<string, any> ): MysticalBeeReturnedFromCompetition { if (json.$typeName !== MysticalBeeReturnedFromCompetition.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MysticalBeeReturnedFromCompetition.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MysticalBeeReturnedFromCompetition { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMysticalBeeReturnedFromCompetition(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MysticalBeeReturnedFromCompetition object`); } return MysticalBeeReturnedFromCompetition.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MysticalBeeReturnedFromCompetition { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMysticalBeeReturnedFromCompetition(data.bcs.type)) { throw new Error(`object at is not a MysticalBeeReturnedFromCompetition object`); }

 return MysticalBeeReturnedFromCompetition.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MysticalBeeReturnedFromCompetition.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MysticalBeeReturnedFromCompetition> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MysticalBeeReturnedFromCompetition object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMysticalBeeReturnedFromCompetition(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MysticalBeeReturnedFromCompetition object`); }

 return MysticalBeeReturnedFromCompetition.fromSuiObjectData( res.data ); }

 }

/* ============================== NectarStore =============================== */

export function isNectarStore(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::NectarStore`; }

export interface NectarStoreFields { evolutionStage: ToField<"u8">; lockupWeeks: ToField<"u64">; hiveLocked: ToField<Balance<ToPhantom<HIVE>>>; weightedHiveLocked: ToField<"u128">; unlockTimestamp: ToField<"u64">; honeyLocked: ToField<Balance<ToPhantom<HONEY>>>; weightedHoneyLocked: ToField<"u128">; hiveClaimIndex: ToField<"u256">; honeyClaimIndex: ToField<"u256"> }

export type NectarStoreReified = Reified< NectarStore, NectarStoreFields >;

export class NectarStore implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::NectarStore`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = NectarStore.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::NectarStore`; readonly $typeArgs: []; readonly $isPhantom = NectarStore.$isPhantom;

 readonly evolutionStage: ToField<"u8">; readonly lockupWeeks: ToField<"u64">; readonly hiveLocked: ToField<Balance<ToPhantom<HIVE>>>; readonly weightedHiveLocked: ToField<"u128">; readonly unlockTimestamp: ToField<"u64">; readonly honeyLocked: ToField<Balance<ToPhantom<HONEY>>>; readonly weightedHoneyLocked: ToField<"u128">; readonly hiveClaimIndex: ToField<"u256">; readonly honeyClaimIndex: ToField<"u256">

 private constructor(typeArgs: [], fields: NectarStoreFields, ) { this.$fullTypeName = composeSuiType( NectarStore.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::NectarStore`; this.$typeArgs = typeArgs;

 this.evolutionStage = fields.evolutionStage;; this.lockupWeeks = fields.lockupWeeks;; this.hiveLocked = fields.hiveLocked;; this.weightedHiveLocked = fields.weightedHiveLocked;; this.unlockTimestamp = fields.unlockTimestamp;; this.honeyLocked = fields.honeyLocked;; this.weightedHoneyLocked = fields.weightedHoneyLocked;; this.hiveClaimIndex = fields.hiveClaimIndex;; this.honeyClaimIndex = fields.honeyClaimIndex; }

 static reified( ): NectarStoreReified { return { typeName: NectarStore.$typeName, fullTypeName: composeSuiType( NectarStore.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::NectarStore`, typeArgs: [ ] as [], isPhantom: NectarStore.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NectarStore.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NectarStore.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NectarStore.fromBcs( data, ), bcs: NectarStore.bcs, fromJSONField: (field: any) => NectarStore.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NectarStore.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NectarStore.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => NectarStore.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => NectarStore.fetch( client, id, ), new: ( fields: NectarStoreFields, ) => { return new NectarStore( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NectarStore.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NectarStore>> { return phantom(NectarStore.reified( )); } static get p() { return NectarStore.phantom() }

 static get bcs() { return bcs.struct("NectarStore", {

 evolution_stage: bcs.u8(), lockup_weeks: bcs.u64(), hive_locked: Balance.bcs, weighted_hive_locked: bcs.u128(), unlock_timestamp: bcs.u64(), honey_locked: Balance.bcs, weighted_honey_locked: bcs.u128(), hive_claim_index: bcs.u256(), honey_claim_index: bcs.u256()

}) };

 static fromFields( fields: Record<string, any> ): NectarStore { return NectarStore.reified( ).new( { evolutionStage: decodeFromFields("u8", fields.evolution_stage), lockupWeeks: decodeFromFields("u64", fields.lockup_weeks), hiveLocked: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_locked), weightedHiveLocked: decodeFromFields("u128", fields.weighted_hive_locked), unlockTimestamp: decodeFromFields("u64", fields.unlock_timestamp), honeyLocked: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_locked), weightedHoneyLocked: decodeFromFields("u128", fields.weighted_honey_locked), hiveClaimIndex: decodeFromFields("u256", fields.hive_claim_index), honeyClaimIndex: decodeFromFields("u256", fields.honey_claim_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NectarStore { if (!isNectarStore(item.type)) { throw new Error("not a NectarStore type");

 }

 return NectarStore.reified( ).new( { evolutionStage: decodeFromFieldsWithTypes("u8", item.fields.evolution_stage), lockupWeeks: decodeFromFieldsWithTypes("u64", item.fields.lockup_weeks), hiveLocked: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_locked), weightedHiveLocked: decodeFromFieldsWithTypes("u128", item.fields.weighted_hive_locked), unlockTimestamp: decodeFromFieldsWithTypes("u64", item.fields.unlock_timestamp), honeyLocked: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_locked), weightedHoneyLocked: decodeFromFieldsWithTypes("u128", item.fields.weighted_honey_locked), hiveClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.hive_claim_index), honeyClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.honey_claim_index) } ) }

 static fromBcs( data: Uint8Array ): NectarStore { return NectarStore.fromFields( NectarStore.bcs.parse(data) ) }

 toJSONField() { return {

 evolutionStage: this.evolutionStage,lockupWeeks: this.lockupWeeks.toString(),hiveLocked: this.hiveLocked.toJSONField(),weightedHiveLocked: this.weightedHiveLocked.toString(),unlockTimestamp: this.unlockTimestamp.toString(),honeyLocked: this.honeyLocked.toJSONField(),weightedHoneyLocked: this.weightedHoneyLocked.toString(),hiveClaimIndex: this.hiveClaimIndex.toString(),honeyClaimIndex: this.honeyClaimIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NectarStore { return NectarStore.reified( ).new( { evolutionStage: decodeFromJSONField("u8", field.evolutionStage), lockupWeeks: decodeFromJSONField("u64", field.lockupWeeks), hiveLocked: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveLocked), weightedHiveLocked: decodeFromJSONField("u128", field.weightedHiveLocked), unlockTimestamp: decodeFromJSONField("u64", field.unlockTimestamp), honeyLocked: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyLocked), weightedHoneyLocked: decodeFromJSONField("u128", field.weightedHoneyLocked), hiveClaimIndex: decodeFromJSONField("u256", field.hiveClaimIndex), honeyClaimIndex: decodeFromJSONField("u256", field.honeyClaimIndex) } ) }

 static fromJSON( json: Record<string, any> ): NectarStore { if (json.$typeName !== NectarStore.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NectarStore.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NectarStore { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNectarStore(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NectarStore object`); } return NectarStore.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): NectarStore { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isNectarStore(data.bcs.type)) { throw new Error(`object at is not a NectarStore object`); }

 return NectarStore.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return NectarStore.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<NectarStore> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NectarStore object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNectarStore(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NectarStore object`); }

 return NectarStore.fromSuiObjectData( res.data ); }

 }

/* ============================== NewEggIncubated =============================== */

export function isNewEggIncubated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::NewEggIncubated`; }

export interface NewEggIncubatedFields { childVersion: ToField<"u64">; incubatedAt: ToField<"u64">; childGeneration: ToField<"u64">; queenId: ToField<"address">; queenVersion: ToField<"u64">; stingerBeeId: ToField<"address">; stingerVersion: ToField<"u64">; queenGene: ToField<"u256">; stingerGene: ToField<"u256">; childGene: ToField<"u256">; hiveEnergyForEgg: ToField<"u64">; honeyHealthForEgg: ToField<"u64">; totalBreedingCost: ToField<"u64">; platformFees: ToField<"u64">; govYieldAmt: ToField<"u64">; treasuryFees: ToField<"u64">; stingerCooldownStage: ToField<"u8">; stingerCooldownTill: ToField<"u64"> }

export type NewEggIncubatedReified = Reified< NewEggIncubated, NewEggIncubatedFields >;

export class NewEggIncubated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::NewEggIncubated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = NewEggIncubated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::NewEggIncubated`; readonly $typeArgs: []; readonly $isPhantom = NewEggIncubated.$isPhantom;

 readonly childVersion: ToField<"u64">; readonly incubatedAt: ToField<"u64">; readonly childGeneration: ToField<"u64">; readonly queenId: ToField<"address">; readonly queenVersion: ToField<"u64">; readonly stingerBeeId: ToField<"address">; readonly stingerVersion: ToField<"u64">; readonly queenGene: ToField<"u256">; readonly stingerGene: ToField<"u256">; readonly childGene: ToField<"u256">; readonly hiveEnergyForEgg: ToField<"u64">; readonly honeyHealthForEgg: ToField<"u64">; readonly totalBreedingCost: ToField<"u64">; readonly platformFees: ToField<"u64">; readonly govYieldAmt: ToField<"u64">; readonly treasuryFees: ToField<"u64">; readonly stingerCooldownStage: ToField<"u8">; readonly stingerCooldownTill: ToField<"u64">

 private constructor(typeArgs: [], fields: NewEggIncubatedFields, ) { this.$fullTypeName = composeSuiType( NewEggIncubated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::NewEggIncubated`; this.$typeArgs = typeArgs;

 this.childVersion = fields.childVersion;; this.incubatedAt = fields.incubatedAt;; this.childGeneration = fields.childGeneration;; this.queenId = fields.queenId;; this.queenVersion = fields.queenVersion;; this.stingerBeeId = fields.stingerBeeId;; this.stingerVersion = fields.stingerVersion;; this.queenGene = fields.queenGene;; this.stingerGene = fields.stingerGene;; this.childGene = fields.childGene;; this.hiveEnergyForEgg = fields.hiveEnergyForEgg;; this.honeyHealthForEgg = fields.honeyHealthForEgg;; this.totalBreedingCost = fields.totalBreedingCost;; this.platformFees = fields.platformFees;; this.govYieldAmt = fields.govYieldAmt;; this.treasuryFees = fields.treasuryFees;; this.stingerCooldownStage = fields.stingerCooldownStage;; this.stingerCooldownTill = fields.stingerCooldownTill; }

 static reified( ): NewEggIncubatedReified { return { typeName: NewEggIncubated.$typeName, fullTypeName: composeSuiType( NewEggIncubated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::NewEggIncubated`, typeArgs: [ ] as [], isPhantom: NewEggIncubated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewEggIncubated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewEggIncubated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewEggIncubated.fromBcs( data, ), bcs: NewEggIncubated.bcs, fromJSONField: (field: any) => NewEggIncubated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewEggIncubated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewEggIncubated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => NewEggIncubated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => NewEggIncubated.fetch( client, id, ), new: ( fields: NewEggIncubatedFields, ) => { return new NewEggIncubated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewEggIncubated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewEggIncubated>> { return phantom(NewEggIncubated.reified( )); } static get p() { return NewEggIncubated.phantom() }

 static get bcs() { return bcs.struct("NewEggIncubated", {

 child_version: bcs.u64(), incubated_at: bcs.u64(), child_generation: bcs.u64(), queenId: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), queen_version: bcs.u64(), stingerBeeId: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), stinger_version: bcs.u64(), queen_gene: bcs.u256(), stinger_gene: bcs.u256(), child_gene: bcs.u256(), hive_energy_for_egg: bcs.u64(), honey_health_for_egg: bcs.u64(), total_breeding_cost: bcs.u64(), platform_fees: bcs.u64(), gov_yield_amt: bcs.u64(), treasury_fees: bcs.u64(), stinger_cooldown_stage: bcs.u8(), stinger_cooldown_till: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): NewEggIncubated { return NewEggIncubated.reified( ).new( { childVersion: decodeFromFields("u64", fields.child_version), incubatedAt: decodeFromFields("u64", fields.incubated_at), childGeneration: decodeFromFields("u64", fields.child_generation), queenId: decodeFromFields("address", fields.queenId), queenVersion: decodeFromFields("u64", fields.queen_version), stingerBeeId: decodeFromFields("address", fields.stingerBeeId), stingerVersion: decodeFromFields("u64", fields.stinger_version), queenGene: decodeFromFields("u256", fields.queen_gene), stingerGene: decodeFromFields("u256", fields.stinger_gene), childGene: decodeFromFields("u256", fields.child_gene), hiveEnergyForEgg: decodeFromFields("u64", fields.hive_energy_for_egg), honeyHealthForEgg: decodeFromFields("u64", fields.honey_health_for_egg), totalBreedingCost: decodeFromFields("u64", fields.total_breeding_cost), platformFees: decodeFromFields("u64", fields.platform_fees), govYieldAmt: decodeFromFields("u64", fields.gov_yield_amt), treasuryFees: decodeFromFields("u64", fields.treasury_fees), stingerCooldownStage: decodeFromFields("u8", fields.stinger_cooldown_stage), stingerCooldownTill: decodeFromFields("u64", fields.stinger_cooldown_till) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewEggIncubated { if (!isNewEggIncubated(item.type)) { throw new Error("not a NewEggIncubated type");

 }

 return NewEggIncubated.reified( ).new( { childVersion: decodeFromFieldsWithTypes("u64", item.fields.child_version), incubatedAt: decodeFromFieldsWithTypes("u64", item.fields.incubated_at), childGeneration: decodeFromFieldsWithTypes("u64", item.fields.child_generation), queenId: decodeFromFieldsWithTypes("address", item.fields.queenId), queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), stingerBeeId: decodeFromFieldsWithTypes("address", item.fields.stingerBeeId), stingerVersion: decodeFromFieldsWithTypes("u64", item.fields.stinger_version), queenGene: decodeFromFieldsWithTypes("u256", item.fields.queen_gene), stingerGene: decodeFromFieldsWithTypes("u256", item.fields.stinger_gene), childGene: decodeFromFieldsWithTypes("u256", item.fields.child_gene), hiveEnergyForEgg: decodeFromFieldsWithTypes("u64", item.fields.hive_energy_for_egg), honeyHealthForEgg: decodeFromFieldsWithTypes("u64", item.fields.honey_health_for_egg), totalBreedingCost: decodeFromFieldsWithTypes("u64", item.fields.total_breeding_cost), platformFees: decodeFromFieldsWithTypes("u64", item.fields.platform_fees), govYieldAmt: decodeFromFieldsWithTypes("u64", item.fields.gov_yield_amt), treasuryFees: decodeFromFieldsWithTypes("u64", item.fields.treasury_fees), stingerCooldownStage: decodeFromFieldsWithTypes("u8", item.fields.stinger_cooldown_stage), stingerCooldownTill: decodeFromFieldsWithTypes("u64", item.fields.stinger_cooldown_till) } ) }

 static fromBcs( data: Uint8Array ): NewEggIncubated { return NewEggIncubated.fromFields( NewEggIncubated.bcs.parse(data) ) }

 toJSONField() { return {

 childVersion: this.childVersion.toString(),incubatedAt: this.incubatedAt.toString(),childGeneration: this.childGeneration.toString(),queenId: this.queenId,queenVersion: this.queenVersion.toString(),stingerBeeId: this.stingerBeeId,stingerVersion: this.stingerVersion.toString(),queenGene: this.queenGene.toString(),stingerGene: this.stingerGene.toString(),childGene: this.childGene.toString(),hiveEnergyForEgg: this.hiveEnergyForEgg.toString(),honeyHealthForEgg: this.honeyHealthForEgg.toString(),totalBreedingCost: this.totalBreedingCost.toString(),platformFees: this.platformFees.toString(),govYieldAmt: this.govYieldAmt.toString(),treasuryFees: this.treasuryFees.toString(),stingerCooldownStage: this.stingerCooldownStage,stingerCooldownTill: this.stingerCooldownTill.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewEggIncubated { return NewEggIncubated.reified( ).new( { childVersion: decodeFromJSONField("u64", field.childVersion), incubatedAt: decodeFromJSONField("u64", field.incubatedAt), childGeneration: decodeFromJSONField("u64", field.childGeneration), queenId: decodeFromJSONField("address", field.queenId), queenVersion: decodeFromJSONField("u64", field.queenVersion), stingerBeeId: decodeFromJSONField("address", field.stingerBeeId), stingerVersion: decodeFromJSONField("u64", field.stingerVersion), queenGene: decodeFromJSONField("u256", field.queenGene), stingerGene: decodeFromJSONField("u256", field.stingerGene), childGene: decodeFromJSONField("u256", field.childGene), hiveEnergyForEgg: decodeFromJSONField("u64", field.hiveEnergyForEgg), honeyHealthForEgg: decodeFromJSONField("u64", field.honeyHealthForEgg), totalBreedingCost: decodeFromJSONField("u64", field.totalBreedingCost), platformFees: decodeFromJSONField("u64", field.platformFees), govYieldAmt: decodeFromJSONField("u64", field.govYieldAmt), treasuryFees: decodeFromJSONField("u64", field.treasuryFees), stingerCooldownStage: decodeFromJSONField("u8", field.stingerCooldownStage), stingerCooldownTill: decodeFromJSONField("u64", field.stingerCooldownTill) } ) }

 static fromJSON( json: Record<string, any> ): NewEggIncubated { if (json.$typeName !== NewEggIncubated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewEggIncubated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewEggIncubated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewEggIncubated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewEggIncubated object`); } return NewEggIncubated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): NewEggIncubated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isNewEggIncubated(data.bcs.type)) { throw new Error(`object at is not a NewEggIncubated object`); }

 return NewEggIncubated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return NewEggIncubated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewEggIncubated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewEggIncubated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewEggIncubated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewEggIncubated object`); }

 return NewEggIncubated.fromSuiObjectData( res.data ); }

 }

/* ============================== NewGameSession =============================== */

export function isNewGameSession(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::NewGameSession`; }

export interface NewGameSessionFields { p2PSessionId: ToField<String1>; trainerAddr1: ToField<"address">; trainerAddr2: ToField<"address">; version1: ToField<"u64">; version2: ToField<"u64">; suiBet: ToField<"u64"> }

export type NewGameSessionReified = Reified< NewGameSession, NewGameSessionFields >;

export class NewGameSession implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::NewGameSession`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = NewGameSession.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::NewGameSession`; readonly $typeArgs: []; readonly $isPhantom = NewGameSession.$isPhantom;

 readonly p2PSessionId: ToField<String1>; readonly trainerAddr1: ToField<"address">; readonly trainerAddr2: ToField<"address">; readonly version1: ToField<"u64">; readonly version2: ToField<"u64">; readonly suiBet: ToField<"u64">

 private constructor(typeArgs: [], fields: NewGameSessionFields, ) { this.$fullTypeName = composeSuiType( NewGameSession.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::NewGameSession`; this.$typeArgs = typeArgs;

 this.p2PSessionId = fields.p2PSessionId;; this.trainerAddr1 = fields.trainerAddr1;; this.trainerAddr2 = fields.trainerAddr2;; this.version1 = fields.version1;; this.version2 = fields.version2;; this.suiBet = fields.suiBet; }

 static reified( ): NewGameSessionReified { return { typeName: NewGameSession.$typeName, fullTypeName: composeSuiType( NewGameSession.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::NewGameSession`, typeArgs: [ ] as [], isPhantom: NewGameSession.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewGameSession.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewGameSession.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewGameSession.fromBcs( data, ), bcs: NewGameSession.bcs, fromJSONField: (field: any) => NewGameSession.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewGameSession.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewGameSession.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => NewGameSession.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => NewGameSession.fetch( client, id, ), new: ( fields: NewGameSessionFields, ) => { return new NewGameSession( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewGameSession.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewGameSession>> { return phantom(NewGameSession.reified( )); } static get p() { return NewGameSession.phantom() }

 static get bcs() { return bcs.struct("NewGameSession", {

 p2p_session_id: String1.bcs, trainer_addr1: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr2: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version1: bcs.u64(), version2: bcs.u64(), sui_bet: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): NewGameSession { return NewGameSession.reified( ).new( { p2PSessionId: decodeFromFields(String1.reified(), fields.p2p_session_id), trainerAddr1: decodeFromFields("address", fields.trainer_addr1), trainerAddr2: decodeFromFields("address", fields.trainer_addr2), version1: decodeFromFields("u64", fields.version1), version2: decodeFromFields("u64", fields.version2), suiBet: decodeFromFields("u64", fields.sui_bet) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewGameSession { if (!isNewGameSession(item.type)) { throw new Error("not a NewGameSession type");

 }

 return NewGameSession.reified( ).new( { p2PSessionId: decodeFromFieldsWithTypes(String1.reified(), item.fields.p2p_session_id), trainerAddr1: decodeFromFieldsWithTypes("address", item.fields.trainer_addr1), trainerAddr2: decodeFromFieldsWithTypes("address", item.fields.trainer_addr2), version1: decodeFromFieldsWithTypes("u64", item.fields.version1), version2: decodeFromFieldsWithTypes("u64", item.fields.version2), suiBet: decodeFromFieldsWithTypes("u64", item.fields.sui_bet) } ) }

 static fromBcs( data: Uint8Array ): NewGameSession { return NewGameSession.fromFields( NewGameSession.bcs.parse(data) ) }

 toJSONField() { return {

 p2PSessionId: this.p2PSessionId,trainerAddr1: this.trainerAddr1,trainerAddr2: this.trainerAddr2,version1: this.version1.toString(),version2: this.version2.toString(),suiBet: this.suiBet.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewGameSession { return NewGameSession.reified( ).new( { p2PSessionId: decodeFromJSONField(String1.reified(), field.p2PSessionId), trainerAddr1: decodeFromJSONField("address", field.trainerAddr1), trainerAddr2: decodeFromJSONField("address", field.trainerAddr2), version1: decodeFromJSONField("u64", field.version1), version2: decodeFromJSONField("u64", field.version2), suiBet: decodeFromJSONField("u64", field.suiBet) } ) }

 static fromJSON( json: Record<string, any> ): NewGameSession { if (json.$typeName !== NewGameSession.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewGameSession.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewGameSession { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewGameSession(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewGameSession object`); } return NewGameSession.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): NewGameSession { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isNewGameSession(data.bcs.type)) { throw new Error(`object at is not a NewGameSession object`); }

 return NewGameSession.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return NewGameSession.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewGameSession> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewGameSession object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewGameSession(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewGameSession object`); }

 return NewGameSession.fromSuiObjectData( res.data ); }

 }

/* ============================== NewListing =============================== */

export function isNewListing(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::NewListing`; }

export interface NewListingFields { listedByTrainer: ToField<"address">; version: ToField<"u64">; minPrice: ToField<"u64">; expirationSec: ToField<"u64"> }

export type NewListingReified = Reified< NewListing, NewListingFields >;

export class NewListing implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::NewListing`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = NewListing.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::NewListing`; readonly $typeArgs: []; readonly $isPhantom = NewListing.$isPhantom;

 readonly listedByTrainer: ToField<"address">; readonly version: ToField<"u64">; readonly minPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: NewListingFields, ) { this.$fullTypeName = composeSuiType( NewListing.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::NewListing`; this.$typeArgs = typeArgs;

 this.listedByTrainer = fields.listedByTrainer;; this.version = fields.version;; this.minPrice = fields.minPrice;; this.expirationSec = fields.expirationSec; }

 static reified( ): NewListingReified { return { typeName: NewListing.$typeName, fullTypeName: composeSuiType( NewListing.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::NewListing`, typeArgs: [ ] as [], isPhantom: NewListing.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewListing.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewListing.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewListing.fromBcs( data, ), bcs: NewListing.bcs, fromJSONField: (field: any) => NewListing.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewListing.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewListing.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => NewListing.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => NewListing.fetch( client, id, ), new: ( fields: NewListingFields, ) => { return new NewListing( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewListing.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewListing>> { return phantom(NewListing.reified( )); } static get p() { return NewListing.phantom() }

 static get bcs() { return bcs.struct("NewListing", {

 listed_by_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), min_price: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): NewListing { return NewListing.reified( ).new( { listedByTrainer: decodeFromFields("address", fields.listed_by_trainer), version: decodeFromFields("u64", fields.version), minPrice: decodeFromFields("u64", fields.min_price), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewListing { if (!isNewListing(item.type)) { throw new Error("not a NewListing type");

 }

 return NewListing.reified( ).new( { listedByTrainer: decodeFromFieldsWithTypes("address", item.fields.listed_by_trainer), version: decodeFromFieldsWithTypes("u64", item.fields.version), minPrice: decodeFromFieldsWithTypes("u64", item.fields.min_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): NewListing { return NewListing.fromFields( NewListing.bcs.parse(data) ) }

 toJSONField() { return {

 listedByTrainer: this.listedByTrainer,version: this.version.toString(),minPrice: this.minPrice.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewListing { return NewListing.reified( ).new( { listedByTrainer: decodeFromJSONField("address", field.listedByTrainer), version: decodeFromJSONField("u64", field.version), minPrice: decodeFromJSONField("u64", field.minPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): NewListing { if (json.$typeName !== NewListing.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewListing.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewListing { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewListing(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewListing object`); } return NewListing.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): NewListing { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isNewListing(data.bcs.type)) { throw new Error(`object at is not a NewListing object`); }

 return NewListing.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return NewListing.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewListing> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewListing object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewListing(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewListing object`); }

 return NewListing.fromSuiObjectData( res.data ); }

 }

/* ============================== P2pGameSession =============================== */

export function isP2pGameSession(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::P2pGameSession`; }

export interface P2pGameSessionFields { trainerAddr1: ToField<"address">; trainerAddr2: ToField<"address">; version1: ToField<"u64">; v1DustPctSum: ToField<"u64">; v1Evolved: ToField<"u64">; version2: ToField<"u64">; v2DustPctSum: ToField<"u64">; v2Evolved: ToField<"u64">; currentQuest: ToField<HiddenWorldQuest> }

export type P2pGameSessionReified = Reified< P2pGameSession, P2pGameSessionFields >;

export class P2pGameSession implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::P2pGameSession`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = P2pGameSession.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::P2pGameSession`; readonly $typeArgs: []; readonly $isPhantom = P2pGameSession.$isPhantom;

 readonly trainerAddr1: ToField<"address">; readonly trainerAddr2: ToField<"address">; readonly version1: ToField<"u64">; readonly v1DustPctSum: ToField<"u64">; readonly v1Evolved: ToField<"u64">; readonly version2: ToField<"u64">; readonly v2DustPctSum: ToField<"u64">; readonly v2Evolved: ToField<"u64">; readonly currentQuest: ToField<HiddenWorldQuest>

 private constructor(typeArgs: [], fields: P2pGameSessionFields, ) { this.$fullTypeName = composeSuiType( P2pGameSession.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::P2pGameSession`; this.$typeArgs = typeArgs;

 this.trainerAddr1 = fields.trainerAddr1;; this.trainerAddr2 = fields.trainerAddr2;; this.version1 = fields.version1;; this.v1DustPctSum = fields.v1DustPctSum;; this.v1Evolved = fields.v1Evolved;; this.version2 = fields.version2;; this.v2DustPctSum = fields.v2DustPctSum;; this.v2Evolved = fields.v2Evolved;; this.currentQuest = fields.currentQuest; }

 static reified( ): P2pGameSessionReified { return { typeName: P2pGameSession.$typeName, fullTypeName: composeSuiType( P2pGameSession.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::P2pGameSession`, typeArgs: [ ] as [], isPhantom: P2pGameSession.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => P2pGameSession.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => P2pGameSession.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => P2pGameSession.fromBcs( data, ), bcs: P2pGameSession.bcs, fromJSONField: (field: any) => P2pGameSession.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => P2pGameSession.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => P2pGameSession.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => P2pGameSession.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => P2pGameSession.fetch( client, id, ), new: ( fields: P2pGameSessionFields, ) => { return new P2pGameSession( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return P2pGameSession.reified() }

 static phantom( ): PhantomReified<ToTypeStr<P2pGameSession>> { return phantom(P2pGameSession.reified( )); } static get p() { return P2pGameSession.phantom() }

 static get bcs() { return bcs.struct("P2pGameSession", {

 trainer_addr1: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr2: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version1: bcs.u64(), v1_dust_pct_sum: bcs.u64(), v1_evolved: bcs.u64(), version2: bcs.u64(), v2_dust_pct_sum: bcs.u64(), v2_evolved: bcs.u64(), current_quest: HiddenWorldQuest.bcs

}) };

 static fromFields( fields: Record<string, any> ): P2pGameSession { return P2pGameSession.reified( ).new( { trainerAddr1: decodeFromFields("address", fields.trainer_addr1), trainerAddr2: decodeFromFields("address", fields.trainer_addr2), version1: decodeFromFields("u64", fields.version1), v1DustPctSum: decodeFromFields("u64", fields.v1_dust_pct_sum), v1Evolved: decodeFromFields("u64", fields.v1_evolved), version2: decodeFromFields("u64", fields.version2), v2DustPctSum: decodeFromFields("u64", fields.v2_dust_pct_sum), v2Evolved: decodeFromFields("u64", fields.v2_evolved), currentQuest: decodeFromFields(HiddenWorldQuest.reified(), fields.current_quest) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): P2pGameSession { if (!isP2pGameSession(item.type)) { throw new Error("not a P2pGameSession type");

 }

 return P2pGameSession.reified( ).new( { trainerAddr1: decodeFromFieldsWithTypes("address", item.fields.trainer_addr1), trainerAddr2: decodeFromFieldsWithTypes("address", item.fields.trainer_addr2), version1: decodeFromFieldsWithTypes("u64", item.fields.version1), v1DustPctSum: decodeFromFieldsWithTypes("u64", item.fields.v1_dust_pct_sum), v1Evolved: decodeFromFieldsWithTypes("u64", item.fields.v1_evolved), version2: decodeFromFieldsWithTypes("u64", item.fields.version2), v2DustPctSum: decodeFromFieldsWithTypes("u64", item.fields.v2_dust_pct_sum), v2Evolved: decodeFromFieldsWithTypes("u64", item.fields.v2_evolved), currentQuest: decodeFromFieldsWithTypes(HiddenWorldQuest.reified(), item.fields.current_quest) } ) }

 static fromBcs( data: Uint8Array ): P2pGameSession { return P2pGameSession.fromFields( P2pGameSession.bcs.parse(data) ) }

 toJSONField() { return {

 trainerAddr1: this.trainerAddr1,trainerAddr2: this.trainerAddr2,version1: this.version1.toString(),v1DustPctSum: this.v1DustPctSum.toString(),v1Evolved: this.v1Evolved.toString(),version2: this.version2.toString(),v2DustPctSum: this.v2DustPctSum.toString(),v2Evolved: this.v2Evolved.toString(),currentQuest: this.currentQuest.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): P2pGameSession { return P2pGameSession.reified( ).new( { trainerAddr1: decodeFromJSONField("address", field.trainerAddr1), trainerAddr2: decodeFromJSONField("address", field.trainerAddr2), version1: decodeFromJSONField("u64", field.version1), v1DustPctSum: decodeFromJSONField("u64", field.v1DustPctSum), v1Evolved: decodeFromJSONField("u64", field.v1Evolved), version2: decodeFromJSONField("u64", field.version2), v2DustPctSum: decodeFromJSONField("u64", field.v2DustPctSum), v2Evolved: decodeFromJSONField("u64", field.v2Evolved), currentQuest: decodeFromJSONField(HiddenWorldQuest.reified(), field.currentQuest) } ) }

 static fromJSON( json: Record<string, any> ): P2pGameSession { if (json.$typeName !== P2pGameSession.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return P2pGameSession.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): P2pGameSession { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isP2pGameSession(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a P2pGameSession object`); } return P2pGameSession.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): P2pGameSession { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isP2pGameSession(data.bcs.type)) { throw new Error(`object at is not a P2pGameSession object`); }

 return P2pGameSession.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return P2pGameSession.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<P2pGameSession> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching P2pGameSession object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isP2pGameSession(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a P2pGameSession object`); }

 return P2pGameSession.fromSuiObjectData( res.data ); }

 }

/* ============================== PowersAddedToDragonBee =============================== */

export function isPowersAddedToDragonBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::PowersAddedToDragonBee`; }

export interface PowersAddedToDragonBeeFields { version: ToField<"u64">; slot: ToField<"u64">; capabilityTypeVec: ToField<Vector<"u8">>; healthImpactPctVec: ToField<Vector<"u64">>; energyCostPctVec: ToField<Vector<"u64">>; attemptsVec: ToField<Vector<"u64">>; cooldownVec: ToField<Vector<"u64">>; baseAttemptsVec: ToField<Vector<"u64">> }

export type PowersAddedToDragonBeeReified = Reified< PowersAddedToDragonBee, PowersAddedToDragonBeeFields >;

export class PowersAddedToDragonBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::PowersAddedToDragonBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PowersAddedToDragonBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::PowersAddedToDragonBee`; readonly $typeArgs: []; readonly $isPhantom = PowersAddedToDragonBee.$isPhantom;

 readonly version: ToField<"u64">; readonly slot: ToField<"u64">; readonly capabilityTypeVec: ToField<Vector<"u8">>; readonly healthImpactPctVec: ToField<Vector<"u64">>; readonly energyCostPctVec: ToField<Vector<"u64">>; readonly attemptsVec: ToField<Vector<"u64">>; readonly cooldownVec: ToField<Vector<"u64">>; readonly baseAttemptsVec: ToField<Vector<"u64">>

 private constructor(typeArgs: [], fields: PowersAddedToDragonBeeFields, ) { this.$fullTypeName = composeSuiType( PowersAddedToDragonBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::PowersAddedToDragonBee`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.slot = fields.slot;; this.capabilityTypeVec = fields.capabilityTypeVec;; this.healthImpactPctVec = fields.healthImpactPctVec;; this.energyCostPctVec = fields.energyCostPctVec;; this.attemptsVec = fields.attemptsVec;; this.cooldownVec = fields.cooldownVec;; this.baseAttemptsVec = fields.baseAttemptsVec; }

 static reified( ): PowersAddedToDragonBeeReified { return { typeName: PowersAddedToDragonBee.$typeName, fullTypeName: composeSuiType( PowersAddedToDragonBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::PowersAddedToDragonBee`, typeArgs: [ ] as [], isPhantom: PowersAddedToDragonBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PowersAddedToDragonBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PowersAddedToDragonBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PowersAddedToDragonBee.fromBcs( data, ), bcs: PowersAddedToDragonBee.bcs, fromJSONField: (field: any) => PowersAddedToDragonBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PowersAddedToDragonBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PowersAddedToDragonBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PowersAddedToDragonBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PowersAddedToDragonBee.fetch( client, id, ), new: ( fields: PowersAddedToDragonBeeFields, ) => { return new PowersAddedToDragonBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PowersAddedToDragonBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PowersAddedToDragonBee>> { return phantom(PowersAddedToDragonBee.reified( )); } static get p() { return PowersAddedToDragonBee.phantom() }

 static get bcs() { return bcs.struct("PowersAddedToDragonBee", {

 version: bcs.u64(), slot: bcs.u64(), capability_type_vec: bcs.vector(bcs.u8()), health_impact_pct_vec: bcs.vector(bcs.u64()), energy_cost_pct_vec: bcs.vector(bcs.u64()), attempts_vec: bcs.vector(bcs.u64()), cooldown_vec: bcs.vector(bcs.u64()), base_attempts_vec: bcs.vector(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): PowersAddedToDragonBee { return PowersAddedToDragonBee.reified( ).new( { version: decodeFromFields("u64", fields.version), slot: decodeFromFields("u64", fields.slot), capabilityTypeVec: decodeFromFields(reified.vector("u8"), fields.capability_type_vec), healthImpactPctVec: decodeFromFields(reified.vector("u64"), fields.health_impact_pct_vec), energyCostPctVec: decodeFromFields(reified.vector("u64"), fields.energy_cost_pct_vec), attemptsVec: decodeFromFields(reified.vector("u64"), fields.attempts_vec), cooldownVec: decodeFromFields(reified.vector("u64"), fields.cooldown_vec), baseAttemptsVec: decodeFromFields(reified.vector("u64"), fields.base_attempts_vec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PowersAddedToDragonBee { if (!isPowersAddedToDragonBee(item.type)) { throw new Error("not a PowersAddedToDragonBee type");

 }

 return PowersAddedToDragonBee.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), slot: decodeFromFieldsWithTypes("u64", item.fields.slot), capabilityTypeVec: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.capability_type_vec), healthImpactPctVec: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.health_impact_pct_vec), energyCostPctVec: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.energy_cost_pct_vec), attemptsVec: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.attempts_vec), cooldownVec: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.cooldown_vec), baseAttemptsVec: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.base_attempts_vec) } ) }

 static fromBcs( data: Uint8Array ): PowersAddedToDragonBee { return PowersAddedToDragonBee.fromFields( PowersAddedToDragonBee.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),slot: this.slot.toString(),capabilityTypeVec: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.capabilityTypeVec),healthImpactPctVec: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.healthImpactPctVec),energyCostPctVec: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.energyCostPctVec),attemptsVec: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.attemptsVec),cooldownVec: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.cooldownVec),baseAttemptsVec: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.baseAttemptsVec),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PowersAddedToDragonBee { return PowersAddedToDragonBee.reified( ).new( { version: decodeFromJSONField("u64", field.version), slot: decodeFromJSONField("u64", field.slot), capabilityTypeVec: decodeFromJSONField(reified.vector("u8"), field.capabilityTypeVec), healthImpactPctVec: decodeFromJSONField(reified.vector("u64"), field.healthImpactPctVec), energyCostPctVec: decodeFromJSONField(reified.vector("u64"), field.energyCostPctVec), attemptsVec: decodeFromJSONField(reified.vector("u64"), field.attemptsVec), cooldownVec: decodeFromJSONField(reified.vector("u64"), field.cooldownVec), baseAttemptsVec: decodeFromJSONField(reified.vector("u64"), field.baseAttemptsVec) } ) }

 static fromJSON( json: Record<string, any> ): PowersAddedToDragonBee { if (json.$typeName !== PowersAddedToDragonBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PowersAddedToDragonBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PowersAddedToDragonBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPowersAddedToDragonBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PowersAddedToDragonBee object`); } return PowersAddedToDragonBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PowersAddedToDragonBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPowersAddedToDragonBee(data.bcs.type)) { throw new Error(`object at is not a PowersAddedToDragonBee object`); }

 return PowersAddedToDragonBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PowersAddedToDragonBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PowersAddedToDragonBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PowersAddedToDragonBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPowersAddedToDragonBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PowersAddedToDragonBee object`); }

 return PowersAddedToDragonBee.fromSuiObjectData( res.data ); }

 }

/* ============================== PricingUpdatedForBreeding =============================== */

export function isPricingUpdatedForBreeding(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::PricingUpdatedForBreeding`; }

export interface PricingUpdatedForBreedingFields { queenVersion: ToField<"u64">; isActive: ToField<"bool">; basePrice: ToField<"u64">; curveA: ToField<"u64"> }

export type PricingUpdatedForBreedingReified = Reified< PricingUpdatedForBreeding, PricingUpdatedForBreedingFields >;

export class PricingUpdatedForBreeding implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::PricingUpdatedForBreeding`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PricingUpdatedForBreeding.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::PricingUpdatedForBreeding`; readonly $typeArgs: []; readonly $isPhantom = PricingUpdatedForBreeding.$isPhantom;

 readonly queenVersion: ToField<"u64">; readonly isActive: ToField<"bool">; readonly basePrice: ToField<"u64">; readonly curveA: ToField<"u64">

 private constructor(typeArgs: [], fields: PricingUpdatedForBreedingFields, ) { this.$fullTypeName = composeSuiType( PricingUpdatedForBreeding.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::PricingUpdatedForBreeding`; this.$typeArgs = typeArgs;

 this.queenVersion = fields.queenVersion;; this.isActive = fields.isActive;; this.basePrice = fields.basePrice;; this.curveA = fields.curveA; }

 static reified( ): PricingUpdatedForBreedingReified { return { typeName: PricingUpdatedForBreeding.$typeName, fullTypeName: composeSuiType( PricingUpdatedForBreeding.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::PricingUpdatedForBreeding`, typeArgs: [ ] as [], isPhantom: PricingUpdatedForBreeding.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PricingUpdatedForBreeding.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PricingUpdatedForBreeding.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PricingUpdatedForBreeding.fromBcs( data, ), bcs: PricingUpdatedForBreeding.bcs, fromJSONField: (field: any) => PricingUpdatedForBreeding.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PricingUpdatedForBreeding.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PricingUpdatedForBreeding.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PricingUpdatedForBreeding.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PricingUpdatedForBreeding.fetch( client, id, ), new: ( fields: PricingUpdatedForBreedingFields, ) => { return new PricingUpdatedForBreeding( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PricingUpdatedForBreeding.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PricingUpdatedForBreeding>> { return phantom(PricingUpdatedForBreeding.reified( )); } static get p() { return PricingUpdatedForBreeding.phantom() }

 static get bcs() { return bcs.struct("PricingUpdatedForBreeding", {

 queen_version: bcs.u64(), is_active: bcs.bool(), base_price: bcs.u64(), curve_a: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PricingUpdatedForBreeding { return PricingUpdatedForBreeding.reified( ).new( { queenVersion: decodeFromFields("u64", fields.queen_version), isActive: decodeFromFields("bool", fields.is_active), basePrice: decodeFromFields("u64", fields.base_price), curveA: decodeFromFields("u64", fields.curve_a) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PricingUpdatedForBreeding { if (!isPricingUpdatedForBreeding(item.type)) { throw new Error("not a PricingUpdatedForBreeding type");

 }

 return PricingUpdatedForBreeding.reified( ).new( { queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), isActive: decodeFromFieldsWithTypes("bool", item.fields.is_active), basePrice: decodeFromFieldsWithTypes("u64", item.fields.base_price), curveA: decodeFromFieldsWithTypes("u64", item.fields.curve_a) } ) }

 static fromBcs( data: Uint8Array ): PricingUpdatedForBreeding { return PricingUpdatedForBreeding.fromFields( PricingUpdatedForBreeding.bcs.parse(data) ) }

 toJSONField() { return {

 queenVersion: this.queenVersion.toString(),isActive: this.isActive,basePrice: this.basePrice.toString(),curveA: this.curveA.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PricingUpdatedForBreeding { return PricingUpdatedForBreeding.reified( ).new( { queenVersion: decodeFromJSONField("u64", field.queenVersion), isActive: decodeFromJSONField("bool", field.isActive), basePrice: decodeFromJSONField("u64", field.basePrice), curveA: decodeFromJSONField("u64", field.curveA) } ) }

 static fromJSON( json: Record<string, any> ): PricingUpdatedForBreeding { if (json.$typeName !== PricingUpdatedForBreeding.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PricingUpdatedForBreeding.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PricingUpdatedForBreeding { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPricingUpdatedForBreeding(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PricingUpdatedForBreeding object`); } return PricingUpdatedForBreeding.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PricingUpdatedForBreeding { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPricingUpdatedForBreeding(data.bcs.type)) { throw new Error(`object at is not a PricingUpdatedForBreeding object`); }

 return PricingUpdatedForBreeding.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PricingUpdatedForBreeding.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PricingUpdatedForBreeding> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PricingUpdatedForBreeding object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPricingUpdatedForBreeding(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PricingUpdatedForBreeding object`); }

 return PricingUpdatedForBreeding.fromSuiObjectData( res.data ); }

 }

/* ============================== QueenFamilyInfo =============================== */

export function isQueenFamilyInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::QueenFamilyInfo`; }

export interface QueenFamilyInfoFields { queenId: ToField<Option<"address">>; stingerId: ToField<Option<"address">>; generation: ToField<"u64"> }

export type QueenFamilyInfoReified = Reified< QueenFamilyInfo, QueenFamilyInfoFields >;

export class QueenFamilyInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::QueenFamilyInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = QueenFamilyInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::QueenFamilyInfo`; readonly $typeArgs: []; readonly $isPhantom = QueenFamilyInfo.$isPhantom;

 readonly queenId: ToField<Option<"address">>; readonly stingerId: ToField<Option<"address">>; readonly generation: ToField<"u64">

 private constructor(typeArgs: [], fields: QueenFamilyInfoFields, ) { this.$fullTypeName = composeSuiType( QueenFamilyInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::QueenFamilyInfo`; this.$typeArgs = typeArgs;

 this.queenId = fields.queenId;; this.stingerId = fields.stingerId;; this.generation = fields.generation; }

 static reified( ): QueenFamilyInfoReified { return { typeName: QueenFamilyInfo.$typeName, fullTypeName: composeSuiType( QueenFamilyInfo.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::QueenFamilyInfo`, typeArgs: [ ] as [], isPhantom: QueenFamilyInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => QueenFamilyInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => QueenFamilyInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => QueenFamilyInfo.fromBcs( data, ), bcs: QueenFamilyInfo.bcs, fromJSONField: (field: any) => QueenFamilyInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => QueenFamilyInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => QueenFamilyInfo.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => QueenFamilyInfo.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => QueenFamilyInfo.fetch( client, id, ), new: ( fields: QueenFamilyInfoFields, ) => { return new QueenFamilyInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return QueenFamilyInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<QueenFamilyInfo>> { return phantom(QueenFamilyInfo.reified( )); } static get p() { return QueenFamilyInfo.phantom() }

 static get bcs() { return bcs.struct("QueenFamilyInfo", {

 queenId: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), stingerId: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), generation: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): QueenFamilyInfo { return QueenFamilyInfo.reified( ).new( { queenId: decodeFromFields(Option.reified("address"), fields.queenId), stingerId: decodeFromFields(Option.reified("address"), fields.stingerId), generation: decodeFromFields("u64", fields.generation) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): QueenFamilyInfo { if (!isQueenFamilyInfo(item.type)) { throw new Error("not a QueenFamilyInfo type");

 }

 return QueenFamilyInfo.reified( ).new( { queenId: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.queenId), stingerId: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.stingerId), generation: decodeFromFieldsWithTypes("u64", item.fields.generation) } ) }

 static fromBcs( data: Uint8Array ): QueenFamilyInfo { return QueenFamilyInfo.fromFields( QueenFamilyInfo.bcs.parse(data) ) }

 toJSONField() { return {

 queenId: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.queenId),stingerId: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.stingerId),generation: this.generation.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): QueenFamilyInfo { return QueenFamilyInfo.reified( ).new( { queenId: decodeFromJSONField(Option.reified("address"), field.queenId), stingerId: decodeFromJSONField(Option.reified("address"), field.stingerId), generation: decodeFromJSONField("u64", field.generation) } ) }

 static fromJSON( json: Record<string, any> ): QueenFamilyInfo { if (json.$typeName !== QueenFamilyInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return QueenFamilyInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): QueenFamilyInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isQueenFamilyInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a QueenFamilyInfo object`); } return QueenFamilyInfo.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): QueenFamilyInfo { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isQueenFamilyInfo(data.bcs.type)) { throw new Error(`object at is not a QueenFamilyInfo object`); }

 return QueenFamilyInfo.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return QueenFamilyInfo.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<QueenFamilyInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching QueenFamilyInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isQueenFamilyInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a QueenFamilyInfo object`); }

 return QueenFamilyInfo.fromSuiObjectData( res.data ); }

 }

/* ============================== QuestRequest =============================== */

export function isQuestRequest(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::QuestRequest`; }

export interface QuestRequestFields { timestamp: ToField<"u64">; version: ToField<"u64">; mysticalBee: ToField<MysticalBee>; suiBet: ToField<Balance<ToPhantom<SUI>>>; playerOnly: ToField<"bool">; withTrainer: ToField<Option<"address">>; activeIndex: ToField<"u64"> }

export type QuestRequestReified = Reified< QuestRequest, QuestRequestFields >;

export class QuestRequest implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::QuestRequest`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = QuestRequest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::QuestRequest`; readonly $typeArgs: []; readonly $isPhantom = QuestRequest.$isPhantom;

 readonly timestamp: ToField<"u64">; readonly version: ToField<"u64">; readonly mysticalBee: ToField<MysticalBee>; readonly suiBet: ToField<Balance<ToPhantom<SUI>>>; readonly playerOnly: ToField<"bool">; readonly withTrainer: ToField<Option<"address">>; readonly activeIndex: ToField<"u64">

 private constructor(typeArgs: [], fields: QuestRequestFields, ) { this.$fullTypeName = composeSuiType( QuestRequest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::QuestRequest`; this.$typeArgs = typeArgs;

 this.timestamp = fields.timestamp;; this.version = fields.version;; this.mysticalBee = fields.mysticalBee;; this.suiBet = fields.suiBet;; this.playerOnly = fields.playerOnly;; this.withTrainer = fields.withTrainer;; this.activeIndex = fields.activeIndex; }

 static reified( ): QuestRequestReified { return { typeName: QuestRequest.$typeName, fullTypeName: composeSuiType( QuestRequest.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::QuestRequest`, typeArgs: [ ] as [], isPhantom: QuestRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => QuestRequest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => QuestRequest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => QuestRequest.fromBcs( data, ), bcs: QuestRequest.bcs, fromJSONField: (field: any) => QuestRequest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => QuestRequest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => QuestRequest.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => QuestRequest.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => QuestRequest.fetch( client, id, ), new: ( fields: QuestRequestFields, ) => { return new QuestRequest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return QuestRequest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<QuestRequest>> { return phantom(QuestRequest.reified( )); } static get p() { return QuestRequest.phantom() }

 static get bcs() { return bcs.struct("QuestRequest", {

 timestamp: bcs.u64(), version: bcs.u64(), mystical_bee: MysticalBee.bcs, sui_bet: Balance.bcs, player_only: bcs.bool(), with_trainer: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), active_index: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): QuestRequest { return QuestRequest.reified( ).new( { timestamp: decodeFromFields("u64", fields.timestamp), version: decodeFromFields("u64", fields.version), mysticalBee: decodeFromFields(MysticalBee.reified(), fields.mystical_bee), suiBet: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.sui_bet), playerOnly: decodeFromFields("bool", fields.player_only), withTrainer: decodeFromFields(Option.reified("address"), fields.with_trainer), activeIndex: decodeFromFields("u64", fields.active_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): QuestRequest { if (!isQuestRequest(item.type)) { throw new Error("not a QuestRequest type");

 }

 return QuestRequest.reified( ).new( { timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp), version: decodeFromFieldsWithTypes("u64", item.fields.version), mysticalBee: decodeFromFieldsWithTypes(MysticalBee.reified(), item.fields.mystical_bee), suiBet: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.sui_bet), playerOnly: decodeFromFieldsWithTypes("bool", item.fields.player_only), withTrainer: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.with_trainer), activeIndex: decodeFromFieldsWithTypes("u64", item.fields.active_index) } ) }

 static fromBcs( data: Uint8Array ): QuestRequest { return QuestRequest.fromFields( QuestRequest.bcs.parse(data) ) }

 toJSONField() { return {

 timestamp: this.timestamp.toString(),version: this.version.toString(),mysticalBee: this.mysticalBee.toJSONField(),suiBet: this.suiBet.toJSONField(),playerOnly: this.playerOnly,withTrainer: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.withTrainer),activeIndex: this.activeIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): QuestRequest { return QuestRequest.reified( ).new( { timestamp: decodeFromJSONField("u64", field.timestamp), version: decodeFromJSONField("u64", field.version), mysticalBee: decodeFromJSONField(MysticalBee.reified(), field.mysticalBee), suiBet: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.suiBet), playerOnly: decodeFromJSONField("bool", field.playerOnly), withTrainer: decodeFromJSONField(Option.reified("address"), field.withTrainer), activeIndex: decodeFromJSONField("u64", field.activeIndex) } ) }

 static fromJSON( json: Record<string, any> ): QuestRequest { if (json.$typeName !== QuestRequest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return QuestRequest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): QuestRequest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isQuestRequest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a QuestRequest object`); } return QuestRequest.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): QuestRequest { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isQuestRequest(data.bcs.type)) { throw new Error(`object at is not a QuestRequest object`); }

 return QuestRequest.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return QuestRequest.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<QuestRequest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching QuestRequest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isQuestRequest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a QuestRequest object`); }

 return QuestRequest.fromSuiObjectData( res.data ); }

 }

/* ============================== QuestRequestDestroyed =============================== */

export function isQuestRequestDestroyed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::QuestRequestDestroyed`; }

export interface QuestRequestDestroyedFields { trainerAddress: ToField<"address">; version: ToField<"u64"> }

export type QuestRequestDestroyedReified = Reified< QuestRequestDestroyed, QuestRequestDestroyedFields >;

export class QuestRequestDestroyed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::QuestRequestDestroyed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = QuestRequestDestroyed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::QuestRequestDestroyed`; readonly $typeArgs: []; readonly $isPhantom = QuestRequestDestroyed.$isPhantom;

 readonly trainerAddress: ToField<"address">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: QuestRequestDestroyedFields, ) { this.$fullTypeName = composeSuiType( QuestRequestDestroyed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::QuestRequestDestroyed`; this.$typeArgs = typeArgs;

 this.trainerAddress = fields.trainerAddress;; this.version = fields.version; }

 static reified( ): QuestRequestDestroyedReified { return { typeName: QuestRequestDestroyed.$typeName, fullTypeName: composeSuiType( QuestRequestDestroyed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::QuestRequestDestroyed`, typeArgs: [ ] as [], isPhantom: QuestRequestDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => QuestRequestDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => QuestRequestDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => QuestRequestDestroyed.fromBcs( data, ), bcs: QuestRequestDestroyed.bcs, fromJSONField: (field: any) => QuestRequestDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => QuestRequestDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => QuestRequestDestroyed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => QuestRequestDestroyed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => QuestRequestDestroyed.fetch( client, id, ), new: ( fields: QuestRequestDestroyedFields, ) => { return new QuestRequestDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return QuestRequestDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<QuestRequestDestroyed>> { return phantom(QuestRequestDestroyed.reified( )); } static get p() { return QuestRequestDestroyed.phantom() }

 static get bcs() { return bcs.struct("QuestRequestDestroyed", {

 trainer_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): QuestRequestDestroyed { return QuestRequestDestroyed.reified( ).new( { trainerAddress: decodeFromFields("address", fields.trainer_address), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): QuestRequestDestroyed { if (!isQuestRequestDestroyed(item.type)) { throw new Error("not a QuestRequestDestroyed type");

 }

 return QuestRequestDestroyed.reified( ).new( { trainerAddress: decodeFromFieldsWithTypes("address", item.fields.trainer_address), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): QuestRequestDestroyed { return QuestRequestDestroyed.fromFields( QuestRequestDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 trainerAddress: this.trainerAddress,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): QuestRequestDestroyed { return QuestRequestDestroyed.reified( ).new( { trainerAddress: decodeFromJSONField("address", field.trainerAddress), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): QuestRequestDestroyed { if (json.$typeName !== QuestRequestDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return QuestRequestDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): QuestRequestDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isQuestRequestDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a QuestRequestDestroyed object`); } return QuestRequestDestroyed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): QuestRequestDestroyed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isQuestRequestDestroyed(data.bcs.type)) { throw new Error(`object at is not a QuestRequestDestroyed object`); }

 return QuestRequestDestroyed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return QuestRequestDestroyed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<QuestRequestDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching QuestRequestDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isQuestRequestDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a QuestRequestDestroyed object`); }

 return QuestRequestDestroyed.fromSuiObjectData( res.data ); }

 }

/* ============================== QuestRequestExpired =============================== */

export function isQuestRequestExpired(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::QuestRequestExpired`; }

export interface QuestRequestExpiredFields { trainerAddress: ToField<"address">; version: ToField<"u64"> }

export type QuestRequestExpiredReified = Reified< QuestRequestExpired, QuestRequestExpiredFields >;

export class QuestRequestExpired implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::QuestRequestExpired`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = QuestRequestExpired.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::QuestRequestExpired`; readonly $typeArgs: []; readonly $isPhantom = QuestRequestExpired.$isPhantom;

 readonly trainerAddress: ToField<"address">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: QuestRequestExpiredFields, ) { this.$fullTypeName = composeSuiType( QuestRequestExpired.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::QuestRequestExpired`; this.$typeArgs = typeArgs;

 this.trainerAddress = fields.trainerAddress;; this.version = fields.version; }

 static reified( ): QuestRequestExpiredReified { return { typeName: QuestRequestExpired.$typeName, fullTypeName: composeSuiType( QuestRequestExpired.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::QuestRequestExpired`, typeArgs: [ ] as [], isPhantom: QuestRequestExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => QuestRequestExpired.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => QuestRequestExpired.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => QuestRequestExpired.fromBcs( data, ), bcs: QuestRequestExpired.bcs, fromJSONField: (field: any) => QuestRequestExpired.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => QuestRequestExpired.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => QuestRequestExpired.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => QuestRequestExpired.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => QuestRequestExpired.fetch( client, id, ), new: ( fields: QuestRequestExpiredFields, ) => { return new QuestRequestExpired( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return QuestRequestExpired.reified() }

 static phantom( ): PhantomReified<ToTypeStr<QuestRequestExpired>> { return phantom(QuestRequestExpired.reified( )); } static get p() { return QuestRequestExpired.phantom() }

 static get bcs() { return bcs.struct("QuestRequestExpired", {

 trainer_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): QuestRequestExpired { return QuestRequestExpired.reified( ).new( { trainerAddress: decodeFromFields("address", fields.trainer_address), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): QuestRequestExpired { if (!isQuestRequestExpired(item.type)) { throw new Error("not a QuestRequestExpired type");

 }

 return QuestRequestExpired.reified( ).new( { trainerAddress: decodeFromFieldsWithTypes("address", item.fields.trainer_address), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): QuestRequestExpired { return QuestRequestExpired.fromFields( QuestRequestExpired.bcs.parse(data) ) }

 toJSONField() { return {

 trainerAddress: this.trainerAddress,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): QuestRequestExpired { return QuestRequestExpired.reified( ).new( { trainerAddress: decodeFromJSONField("address", field.trainerAddress), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): QuestRequestExpired { if (json.$typeName !== QuestRequestExpired.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return QuestRequestExpired.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): QuestRequestExpired { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isQuestRequestExpired(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a QuestRequestExpired object`); } return QuestRequestExpired.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): QuestRequestExpired { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isQuestRequestExpired(data.bcs.type)) { throw new Error(`object at is not a QuestRequestExpired object`); }

 return QuestRequestExpired.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return QuestRequestExpired.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<QuestRequestExpired> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching QuestRequestExpired object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isQuestRequestExpired(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a QuestRequestExpired object`); }

 return QuestRequestExpired.fromSuiObjectData( res.data ); }

 }

/* ============================== Royalty =============================== */

export function isRoyalty(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::Royalty`; }

export interface RoyaltyFields { numerator: ToField<"u64">; govYieldPct: ToField<"u64">; queenPct: ToField<"u64"> }

export type RoyaltyReified = Reified< Royalty, RoyaltyFields >;

export class Royalty implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::Royalty`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Royalty.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::Royalty`; readonly $typeArgs: []; readonly $isPhantom = Royalty.$isPhantom;

 readonly numerator: ToField<"u64">; readonly govYieldPct: ToField<"u64">; readonly queenPct: ToField<"u64">

 private constructor(typeArgs: [], fields: RoyaltyFields, ) { this.$fullTypeName = composeSuiType( Royalty.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::Royalty`; this.$typeArgs = typeArgs;

 this.numerator = fields.numerator;; this.govYieldPct = fields.govYieldPct;; this.queenPct = fields.queenPct; }

 static reified( ): RoyaltyReified { return { typeName: Royalty.$typeName, fullTypeName: composeSuiType( Royalty.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::Royalty`, typeArgs: [ ] as [], isPhantom: Royalty.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Royalty.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Royalty.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Royalty.fromBcs( data, ), bcs: Royalty.bcs, fromJSONField: (field: any) => Royalty.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Royalty.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Royalty.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Royalty.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Royalty.fetch( client, id, ), new: ( fields: RoyaltyFields, ) => { return new Royalty( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Royalty.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Royalty>> { return phantom(Royalty.reified( )); } static get p() { return Royalty.phantom() }

 static get bcs() { return bcs.struct("Royalty", {

 numerator: bcs.u64(), gov_yield_pct: bcs.u64(), queen_pct: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Royalty { return Royalty.reified( ).new( { numerator: decodeFromFields("u64", fields.numerator), govYieldPct: decodeFromFields("u64", fields.gov_yield_pct), queenPct: decodeFromFields("u64", fields.queen_pct) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Royalty { if (!isRoyalty(item.type)) { throw new Error("not a Royalty type");

 }

 return Royalty.reified( ).new( { numerator: decodeFromFieldsWithTypes("u64", item.fields.numerator), govYieldPct: decodeFromFieldsWithTypes("u64", item.fields.gov_yield_pct), queenPct: decodeFromFieldsWithTypes("u64", item.fields.queen_pct) } ) }

 static fromBcs( data: Uint8Array ): Royalty { return Royalty.fromFields( Royalty.bcs.parse(data) ) }

 toJSONField() { return {

 numerator: this.numerator.toString(),govYieldPct: this.govYieldPct.toString(),queenPct: this.queenPct.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Royalty { return Royalty.reified( ).new( { numerator: decodeFromJSONField("u64", field.numerator), govYieldPct: decodeFromJSONField("u64", field.govYieldPct), queenPct: decodeFromJSONField("u64", field.queenPct) } ) }

 static fromJSON( json: Record<string, any> ): Royalty { if (json.$typeName !== Royalty.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Royalty.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Royalty { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRoyalty(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Royalty object`); } return Royalty.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Royalty { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRoyalty(data.bcs.type)) { throw new Error(`object at is not a Royalty object`); }

 return Royalty.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Royalty.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Royalty> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Royalty object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRoyalty(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Royalty object`); }

 return Royalty.fromSuiObjectData( res.data ); }

 }

/* ============================== RoyaltyProcessed =============================== */

export function isRoyaltyProcessed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::RoyaltyProcessed`; }

export interface RoyaltyProcessedFields { totalRoyaltyAmt: ToField<"u64">; govYieldAmt: ToField<"u64">; queenRoyaltyAmt: ToField<"u64">; platformFees: ToField<"u64"> }

export type RoyaltyProcessedReified = Reified< RoyaltyProcessed, RoyaltyProcessedFields >;

export class RoyaltyProcessed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::RoyaltyProcessed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RoyaltyProcessed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::RoyaltyProcessed`; readonly $typeArgs: []; readonly $isPhantom = RoyaltyProcessed.$isPhantom;

 readonly totalRoyaltyAmt: ToField<"u64">; readonly govYieldAmt: ToField<"u64">; readonly queenRoyaltyAmt: ToField<"u64">; readonly platformFees: ToField<"u64">

 private constructor(typeArgs: [], fields: RoyaltyProcessedFields, ) { this.$fullTypeName = composeSuiType( RoyaltyProcessed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::RoyaltyProcessed`; this.$typeArgs = typeArgs;

 this.totalRoyaltyAmt = fields.totalRoyaltyAmt;; this.govYieldAmt = fields.govYieldAmt;; this.queenRoyaltyAmt = fields.queenRoyaltyAmt;; this.platformFees = fields.platformFees; }

 static reified( ): RoyaltyProcessedReified { return { typeName: RoyaltyProcessed.$typeName, fullTypeName: composeSuiType( RoyaltyProcessed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::RoyaltyProcessed`, typeArgs: [ ] as [], isPhantom: RoyaltyProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RoyaltyProcessed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RoyaltyProcessed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RoyaltyProcessed.fromBcs( data, ), bcs: RoyaltyProcessed.bcs, fromJSONField: (field: any) => RoyaltyProcessed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RoyaltyProcessed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RoyaltyProcessed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RoyaltyProcessed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RoyaltyProcessed.fetch( client, id, ), new: ( fields: RoyaltyProcessedFields, ) => { return new RoyaltyProcessed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RoyaltyProcessed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RoyaltyProcessed>> { return phantom(RoyaltyProcessed.reified( )); } static get p() { return RoyaltyProcessed.phantom() }

 static get bcs() { return bcs.struct("RoyaltyProcessed", {

 total_royalty_amt: bcs.u64(), gov_yield_amt: bcs.u64(), queen_royalty_amt: bcs.u64(), platform_fees: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RoyaltyProcessed { return RoyaltyProcessed.reified( ).new( { totalRoyaltyAmt: decodeFromFields("u64", fields.total_royalty_amt), govYieldAmt: decodeFromFields("u64", fields.gov_yield_amt), queenRoyaltyAmt: decodeFromFields("u64", fields.queen_royalty_amt), platformFees: decodeFromFields("u64", fields.platform_fees) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RoyaltyProcessed { if (!isRoyaltyProcessed(item.type)) { throw new Error("not a RoyaltyProcessed type");

 }

 return RoyaltyProcessed.reified( ).new( { totalRoyaltyAmt: decodeFromFieldsWithTypes("u64", item.fields.total_royalty_amt), govYieldAmt: decodeFromFieldsWithTypes("u64", item.fields.gov_yield_amt), queenRoyaltyAmt: decodeFromFieldsWithTypes("u64", item.fields.queen_royalty_amt), platformFees: decodeFromFieldsWithTypes("u64", item.fields.platform_fees) } ) }

 static fromBcs( data: Uint8Array ): RoyaltyProcessed { return RoyaltyProcessed.fromFields( RoyaltyProcessed.bcs.parse(data) ) }

 toJSONField() { return {

 totalRoyaltyAmt: this.totalRoyaltyAmt.toString(),govYieldAmt: this.govYieldAmt.toString(),queenRoyaltyAmt: this.queenRoyaltyAmt.toString(),platformFees: this.platformFees.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RoyaltyProcessed { return RoyaltyProcessed.reified( ).new( { totalRoyaltyAmt: decodeFromJSONField("u64", field.totalRoyaltyAmt), govYieldAmt: decodeFromJSONField("u64", field.govYieldAmt), queenRoyaltyAmt: decodeFromJSONField("u64", field.queenRoyaltyAmt), platformFees: decodeFromJSONField("u64", field.platformFees) } ) }

 static fromJSON( json: Record<string, any> ): RoyaltyProcessed { if (json.$typeName !== RoyaltyProcessed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RoyaltyProcessed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RoyaltyProcessed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRoyaltyProcessed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RoyaltyProcessed object`); } return RoyaltyProcessed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RoyaltyProcessed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRoyaltyProcessed(data.bcs.type)) { throw new Error(`object at is not a RoyaltyProcessed object`); }

 return RoyaltyProcessed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RoyaltyProcessed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RoyaltyProcessed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RoyaltyProcessed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRoyaltyProcessed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RoyaltyProcessed object`); }

 return RoyaltyProcessed.fromSuiObjectData( res.data ); }

 }

/* ============================== RoyaltyUpdated =============================== */

export function isRoyaltyUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::RoyaltyUpdated`; }

export interface RoyaltyUpdatedFields { royaltyNum: ToField<"u64">; govYieldPct: ToField<"u64">; queenPct: ToField<"u64">; breedingPlatformFeesPct: ToField<"u64">; breedingGovYieldPct: ToField<"u64">; breedingTreasuryPct: ToField<"u64"> }

export type RoyaltyUpdatedReified = Reified< RoyaltyUpdated, RoyaltyUpdatedFields >;

export class RoyaltyUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::RoyaltyUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RoyaltyUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::RoyaltyUpdated`; readonly $typeArgs: []; readonly $isPhantom = RoyaltyUpdated.$isPhantom;

 readonly royaltyNum: ToField<"u64">; readonly govYieldPct: ToField<"u64">; readonly queenPct: ToField<"u64">; readonly breedingPlatformFeesPct: ToField<"u64">; readonly breedingGovYieldPct: ToField<"u64">; readonly breedingTreasuryPct: ToField<"u64">

 private constructor(typeArgs: [], fields: RoyaltyUpdatedFields, ) { this.$fullTypeName = composeSuiType( RoyaltyUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::RoyaltyUpdated`; this.$typeArgs = typeArgs;

 this.royaltyNum = fields.royaltyNum;; this.govYieldPct = fields.govYieldPct;; this.queenPct = fields.queenPct;; this.breedingPlatformFeesPct = fields.breedingPlatformFeesPct;; this.breedingGovYieldPct = fields.breedingGovYieldPct;; this.breedingTreasuryPct = fields.breedingTreasuryPct; }

 static reified( ): RoyaltyUpdatedReified { return { typeName: RoyaltyUpdated.$typeName, fullTypeName: composeSuiType( RoyaltyUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::RoyaltyUpdated`, typeArgs: [ ] as [], isPhantom: RoyaltyUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RoyaltyUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RoyaltyUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RoyaltyUpdated.fromBcs( data, ), bcs: RoyaltyUpdated.bcs, fromJSONField: (field: any) => RoyaltyUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RoyaltyUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RoyaltyUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RoyaltyUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RoyaltyUpdated.fetch( client, id, ), new: ( fields: RoyaltyUpdatedFields, ) => { return new RoyaltyUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RoyaltyUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RoyaltyUpdated>> { return phantom(RoyaltyUpdated.reified( )); } static get p() { return RoyaltyUpdated.phantom() }

 static get bcs() { return bcs.struct("RoyaltyUpdated", {

 royalty_num: bcs.u64(), gov_yield_pct: bcs.u64(), queen_pct: bcs.u64(), breeding_platform_fees_pct: bcs.u64(), breeding_gov_yield_pct: bcs.u64(), breeding_treasury_pct: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RoyaltyUpdated { return RoyaltyUpdated.reified( ).new( { royaltyNum: decodeFromFields("u64", fields.royalty_num), govYieldPct: decodeFromFields("u64", fields.gov_yield_pct), queenPct: decodeFromFields("u64", fields.queen_pct), breedingPlatformFeesPct: decodeFromFields("u64", fields.breeding_platform_fees_pct), breedingGovYieldPct: decodeFromFields("u64", fields.breeding_gov_yield_pct), breedingTreasuryPct: decodeFromFields("u64", fields.breeding_treasury_pct) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RoyaltyUpdated { if (!isRoyaltyUpdated(item.type)) { throw new Error("not a RoyaltyUpdated type");

 }

 return RoyaltyUpdated.reified( ).new( { royaltyNum: decodeFromFieldsWithTypes("u64", item.fields.royalty_num), govYieldPct: decodeFromFieldsWithTypes("u64", item.fields.gov_yield_pct), queenPct: decodeFromFieldsWithTypes("u64", item.fields.queen_pct), breedingPlatformFeesPct: decodeFromFieldsWithTypes("u64", item.fields.breeding_platform_fees_pct), breedingGovYieldPct: decodeFromFieldsWithTypes("u64", item.fields.breeding_gov_yield_pct), breedingTreasuryPct: decodeFromFieldsWithTypes("u64", item.fields.breeding_treasury_pct) } ) }

 static fromBcs( data: Uint8Array ): RoyaltyUpdated { return RoyaltyUpdated.fromFields( RoyaltyUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 royaltyNum: this.royaltyNum.toString(),govYieldPct: this.govYieldPct.toString(),queenPct: this.queenPct.toString(),breedingPlatformFeesPct: this.breedingPlatformFeesPct.toString(),breedingGovYieldPct: this.breedingGovYieldPct.toString(),breedingTreasuryPct: this.breedingTreasuryPct.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RoyaltyUpdated { return RoyaltyUpdated.reified( ).new( { royaltyNum: decodeFromJSONField("u64", field.royaltyNum), govYieldPct: decodeFromJSONField("u64", field.govYieldPct), queenPct: decodeFromJSONField("u64", field.queenPct), breedingPlatformFeesPct: decodeFromJSONField("u64", field.breedingPlatformFeesPct), breedingGovYieldPct: decodeFromJSONField("u64", field.breedingGovYieldPct), breedingTreasuryPct: decodeFromJSONField("u64", field.breedingTreasuryPct) } ) }

 static fromJSON( json: Record<string, any> ): RoyaltyUpdated { if (json.$typeName !== RoyaltyUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RoyaltyUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RoyaltyUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRoyaltyUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RoyaltyUpdated object`); } return RoyaltyUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RoyaltyUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRoyaltyUpdated(data.bcs.type)) { throw new Error(`object at is not a RoyaltyUpdated object`); }

 return RoyaltyUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RoyaltyUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RoyaltyUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RoyaltyUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRoyaltyUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RoyaltyUpdated object`); }

 return RoyaltyUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== SaleExecuted =============================== */

export function isSaleExecuted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::SaleExecuted`; }

export interface SaleExecutedFields { version: ToField<"u64">; buyerTrainer: ToField<"address">; sellerTrainer: ToField<"address">; purchasePrice: ToField<"u64"> }

export type SaleExecutedReified = Reified< SaleExecuted, SaleExecutedFields >;

export class SaleExecuted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::SaleExecuted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SaleExecuted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::SaleExecuted`; readonly $typeArgs: []; readonly $isPhantom = SaleExecuted.$isPhantom;

 readonly version: ToField<"u64">; readonly buyerTrainer: ToField<"address">; readonly sellerTrainer: ToField<"address">; readonly purchasePrice: ToField<"u64">

 private constructor(typeArgs: [], fields: SaleExecutedFields, ) { this.$fullTypeName = composeSuiType( SaleExecuted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::SaleExecuted`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.buyerTrainer = fields.buyerTrainer;; this.sellerTrainer = fields.sellerTrainer;; this.purchasePrice = fields.purchasePrice; }

 static reified( ): SaleExecutedReified { return { typeName: SaleExecuted.$typeName, fullTypeName: composeSuiType( SaleExecuted.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::SaleExecuted`, typeArgs: [ ] as [], isPhantom: SaleExecuted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SaleExecuted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SaleExecuted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SaleExecuted.fromBcs( data, ), bcs: SaleExecuted.bcs, fromJSONField: (field: any) => SaleExecuted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SaleExecuted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SaleExecuted.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SaleExecuted.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SaleExecuted.fetch( client, id, ), new: ( fields: SaleExecutedFields, ) => { return new SaleExecuted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SaleExecuted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SaleExecuted>> { return phantom(SaleExecuted.reified( )); } static get p() { return SaleExecuted.phantom() }

 static get bcs() { return bcs.struct("SaleExecuted", {

 version: bcs.u64(), buyer_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), seller_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), purchase_price: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SaleExecuted { return SaleExecuted.reified( ).new( { version: decodeFromFields("u64", fields.version), buyerTrainer: decodeFromFields("address", fields.buyer_trainer), sellerTrainer: decodeFromFields("address", fields.seller_trainer), purchasePrice: decodeFromFields("u64", fields.purchase_price) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SaleExecuted { if (!isSaleExecuted(item.type)) { throw new Error("not a SaleExecuted type");

 }

 return SaleExecuted.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), buyerTrainer: decodeFromFieldsWithTypes("address", item.fields.buyer_trainer), sellerTrainer: decodeFromFieldsWithTypes("address", item.fields.seller_trainer), purchasePrice: decodeFromFieldsWithTypes("u64", item.fields.purchase_price) } ) }

 static fromBcs( data: Uint8Array ): SaleExecuted { return SaleExecuted.fromFields( SaleExecuted.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),buyerTrainer: this.buyerTrainer,sellerTrainer: this.sellerTrainer,purchasePrice: this.purchasePrice.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SaleExecuted { return SaleExecuted.reified( ).new( { version: decodeFromJSONField("u64", field.version), buyerTrainer: decodeFromJSONField("address", field.buyerTrainer), sellerTrainer: decodeFromJSONField("address", field.sellerTrainer), purchasePrice: decodeFromJSONField("u64", field.purchasePrice) } ) }

 static fromJSON( json: Record<string, any> ): SaleExecuted { if (json.$typeName !== SaleExecuted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SaleExecuted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SaleExecuted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSaleExecuted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SaleExecuted object`); } return SaleExecuted.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SaleExecuted { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSaleExecuted(data.bcs.type)) { throw new Error(`object at is not a SaleExecuted object`); }

 return SaleExecuted.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SaleExecuted.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SaleExecuted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SaleExecuted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSaleExecuted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SaleExecuted object`); }

 return SaleExecuted.fromSuiObjectData( res.data ); }

 }

/* ============================== StoreAddedToBee =============================== */

export function isStoreAddedToBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::StoreAddedToBee`; }

export interface StoreAddedToBeeFields { version: ToField<"u64">; appName: ToField<String>; appAddr: ToField<"address"> }

export type StoreAddedToBeeReified = Reified< StoreAddedToBee, StoreAddedToBeeFields >;

export class StoreAddedToBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::StoreAddedToBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StoreAddedToBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::StoreAddedToBee`; readonly $typeArgs: []; readonly $isPhantom = StoreAddedToBee.$isPhantom;

 readonly version: ToField<"u64">; readonly appName: ToField<String>; readonly appAddr: ToField<"address">

 private constructor(typeArgs: [], fields: StoreAddedToBeeFields, ) { this.$fullTypeName = composeSuiType( StoreAddedToBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::StoreAddedToBee`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.appName = fields.appName;; this.appAddr = fields.appAddr; }

 static reified( ): StoreAddedToBeeReified { return { typeName: StoreAddedToBee.$typeName, fullTypeName: composeSuiType( StoreAddedToBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::StoreAddedToBee`, typeArgs: [ ] as [], isPhantom: StoreAddedToBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StoreAddedToBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StoreAddedToBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StoreAddedToBee.fromBcs( data, ), bcs: StoreAddedToBee.bcs, fromJSONField: (field: any) => StoreAddedToBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StoreAddedToBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StoreAddedToBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StoreAddedToBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StoreAddedToBee.fetch( client, id, ), new: ( fields: StoreAddedToBeeFields, ) => { return new StoreAddedToBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StoreAddedToBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StoreAddedToBee>> { return phantom(StoreAddedToBee.reified( )); } static get p() { return StoreAddedToBee.phantom() }

 static get bcs() { return bcs.struct("StoreAddedToBee", {

 version: bcs.u64(), app_name: String.bcs, app_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): StoreAddedToBee { return StoreAddedToBee.reified( ).new( { version: decodeFromFields("u64", fields.version), appName: decodeFromFields(String.reified(), fields.app_name), appAddr: decodeFromFields("address", fields.app_addr) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StoreAddedToBee { if (!isStoreAddedToBee(item.type)) { throw new Error("not a StoreAddedToBee type");

 }

 return StoreAddedToBee.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), appName: decodeFromFieldsWithTypes(String.reified(), item.fields.app_name), appAddr: decodeFromFieldsWithTypes("address", item.fields.app_addr) } ) }

 static fromBcs( data: Uint8Array ): StoreAddedToBee { return StoreAddedToBee.fromFields( StoreAddedToBee.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),appName: this.appName,appAddr: this.appAddr,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StoreAddedToBee { return StoreAddedToBee.reified( ).new( { version: decodeFromJSONField("u64", field.version), appName: decodeFromJSONField(String.reified(), field.appName), appAddr: decodeFromJSONField("address", field.appAddr) } ) }

 static fromJSON( json: Record<string, any> ): StoreAddedToBee { if (json.$typeName !== StoreAddedToBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StoreAddedToBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StoreAddedToBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStoreAddedToBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StoreAddedToBee object`); } return StoreAddedToBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StoreAddedToBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStoreAddedToBee(data.bcs.type)) { throw new Error(`object at is not a StoreAddedToBee object`); }

 return StoreAddedToBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StoreAddedToBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StoreAddedToBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StoreAddedToBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStoreAddedToBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StoreAddedToBee object`); }

 return StoreAddedToBee.fromSuiObjectData( res.data ); }

 }

/* ============================== StoreRemovedFromBee =============================== */

export function isStoreRemovedFromBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::StoreRemovedFromBee`; }

export interface StoreRemovedFromBeeFields { version: ToField<"u64">; appName: ToField<String> }

export type StoreRemovedFromBeeReified = Reified< StoreRemovedFromBee, StoreRemovedFromBeeFields >;

export class StoreRemovedFromBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::StoreRemovedFromBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StoreRemovedFromBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::StoreRemovedFromBee`; readonly $typeArgs: []; readonly $isPhantom = StoreRemovedFromBee.$isPhantom;

 readonly version: ToField<"u64">; readonly appName: ToField<String>

 private constructor(typeArgs: [], fields: StoreRemovedFromBeeFields, ) { this.$fullTypeName = composeSuiType( StoreRemovedFromBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::StoreRemovedFromBee`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.appName = fields.appName; }

 static reified( ): StoreRemovedFromBeeReified { return { typeName: StoreRemovedFromBee.$typeName, fullTypeName: composeSuiType( StoreRemovedFromBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::StoreRemovedFromBee`, typeArgs: [ ] as [], isPhantom: StoreRemovedFromBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StoreRemovedFromBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StoreRemovedFromBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StoreRemovedFromBee.fromBcs( data, ), bcs: StoreRemovedFromBee.bcs, fromJSONField: (field: any) => StoreRemovedFromBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StoreRemovedFromBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StoreRemovedFromBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StoreRemovedFromBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StoreRemovedFromBee.fetch( client, id, ), new: ( fields: StoreRemovedFromBeeFields, ) => { return new StoreRemovedFromBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StoreRemovedFromBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StoreRemovedFromBee>> { return phantom(StoreRemovedFromBee.reified( )); } static get p() { return StoreRemovedFromBee.phantom() }

 static get bcs() { return bcs.struct("StoreRemovedFromBee", {

 version: bcs.u64(), app_name: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): StoreRemovedFromBee { return StoreRemovedFromBee.reified( ).new( { version: decodeFromFields("u64", fields.version), appName: decodeFromFields(String.reified(), fields.app_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StoreRemovedFromBee { if (!isStoreRemovedFromBee(item.type)) { throw new Error("not a StoreRemovedFromBee type");

 }

 return StoreRemovedFromBee.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), appName: decodeFromFieldsWithTypes(String.reified(), item.fields.app_name) } ) }

 static fromBcs( data: Uint8Array ): StoreRemovedFromBee { return StoreRemovedFromBee.fromFields( StoreRemovedFromBee.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),appName: this.appName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StoreRemovedFromBee { return StoreRemovedFromBee.reified( ).new( { version: decodeFromJSONField("u64", field.version), appName: decodeFromJSONField(String.reified(), field.appName) } ) }

 static fromJSON( json: Record<string, any> ): StoreRemovedFromBee { if (json.$typeName !== StoreRemovedFromBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StoreRemovedFromBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StoreRemovedFromBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStoreRemovedFromBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StoreRemovedFromBee object`); } return StoreRemovedFromBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StoreRemovedFromBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStoreRemovedFromBee(data.bcs.type)) { throw new Error(`object at is not a StoreRemovedFromBee object`); }

 return StoreRemovedFromBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StoreRemovedFromBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StoreRemovedFromBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StoreRemovedFromBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStoreRemovedFromBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StoreRemovedFromBee object`); }

 return StoreRemovedFromBee.fromSuiObjectData( res.data ); }

 }

/* ============================== SuiClaimedFromBeeHive =============================== */

export function isSuiClaimedFromBeeHive(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::SuiClaimedFromBeeHive`; }

export interface SuiClaimedFromBeeHiveFields { queenVersion: ToField<"u64">; suiClaimed: ToField<"u64"> }

export type SuiClaimedFromBeeHiveReified = Reified< SuiClaimedFromBeeHive, SuiClaimedFromBeeHiveFields >;

export class SuiClaimedFromBeeHive implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::SuiClaimedFromBeeHive`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SuiClaimedFromBeeHive.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::SuiClaimedFromBeeHive`; readonly $typeArgs: []; readonly $isPhantom = SuiClaimedFromBeeHive.$isPhantom;

 readonly queenVersion: ToField<"u64">; readonly suiClaimed: ToField<"u64">

 private constructor(typeArgs: [], fields: SuiClaimedFromBeeHiveFields, ) { this.$fullTypeName = composeSuiType( SuiClaimedFromBeeHive.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::SuiClaimedFromBeeHive`; this.$typeArgs = typeArgs;

 this.queenVersion = fields.queenVersion;; this.suiClaimed = fields.suiClaimed; }

 static reified( ): SuiClaimedFromBeeHiveReified { return { typeName: SuiClaimedFromBeeHive.$typeName, fullTypeName: composeSuiType( SuiClaimedFromBeeHive.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::SuiClaimedFromBeeHive`, typeArgs: [ ] as [], isPhantom: SuiClaimedFromBeeHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SuiClaimedFromBeeHive.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SuiClaimedFromBeeHive.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SuiClaimedFromBeeHive.fromBcs( data, ), bcs: SuiClaimedFromBeeHive.bcs, fromJSONField: (field: any) => SuiClaimedFromBeeHive.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SuiClaimedFromBeeHive.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SuiClaimedFromBeeHive.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SuiClaimedFromBeeHive.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SuiClaimedFromBeeHive.fetch( client, id, ), new: ( fields: SuiClaimedFromBeeHiveFields, ) => { return new SuiClaimedFromBeeHive( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SuiClaimedFromBeeHive.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SuiClaimedFromBeeHive>> { return phantom(SuiClaimedFromBeeHive.reified( )); } static get p() { return SuiClaimedFromBeeHive.phantom() }

 static get bcs() { return bcs.struct("SuiClaimedFromBeeHive", {

 queen_version: bcs.u64(), sui_claimed: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SuiClaimedFromBeeHive { return SuiClaimedFromBeeHive.reified( ).new( { queenVersion: decodeFromFields("u64", fields.queen_version), suiClaimed: decodeFromFields("u64", fields.sui_claimed) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SuiClaimedFromBeeHive { if (!isSuiClaimedFromBeeHive(item.type)) { throw new Error("not a SuiClaimedFromBeeHive type");

 }

 return SuiClaimedFromBeeHive.reified( ).new( { queenVersion: decodeFromFieldsWithTypes("u64", item.fields.queen_version), suiClaimed: decodeFromFieldsWithTypes("u64", item.fields.sui_claimed) } ) }

 static fromBcs( data: Uint8Array ): SuiClaimedFromBeeHive { return SuiClaimedFromBeeHive.fromFields( SuiClaimedFromBeeHive.bcs.parse(data) ) }

 toJSONField() { return {

 queenVersion: this.queenVersion.toString(),suiClaimed: this.suiClaimed.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SuiClaimedFromBeeHive { return SuiClaimedFromBeeHive.reified( ).new( { queenVersion: decodeFromJSONField("u64", field.queenVersion), suiClaimed: decodeFromJSONField("u64", field.suiClaimed) } ) }

 static fromJSON( json: Record<string, any> ): SuiClaimedFromBeeHive { if (json.$typeName !== SuiClaimedFromBeeHive.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SuiClaimedFromBeeHive.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SuiClaimedFromBeeHive { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSuiClaimedFromBeeHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SuiClaimedFromBeeHive object`); } return SuiClaimedFromBeeHive.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SuiClaimedFromBeeHive { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSuiClaimedFromBeeHive(data.bcs.type)) { throw new Error(`object at is not a SuiClaimedFromBeeHive object`); }

 return SuiClaimedFromBeeHive.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SuiClaimedFromBeeHive.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SuiClaimedFromBeeHive> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SuiClaimedFromBeeHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSuiClaimedFromBeeHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SuiClaimedFromBeeHive object`); }

 return SuiClaimedFromBeeHive.fromSuiObjectData( res.data ); }

 }

/* ============================== SuiNsNameExpired =============================== */

export function isSuiNsNameExpired(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::SuiNsNameExpired`; }

export interface SuiNsNameExpiredFields { profileAddr: ToField<"address">; suinsDomainName: ToField<String1> }

export type SuiNsNameExpiredReified = Reified< SuiNsNameExpired, SuiNsNameExpiredFields >;

export class SuiNsNameExpired implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::SuiNsNameExpired`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SuiNsNameExpired.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::SuiNsNameExpired`; readonly $typeArgs: []; readonly $isPhantom = SuiNsNameExpired.$isPhantom;

 readonly profileAddr: ToField<"address">; readonly suinsDomainName: ToField<String1>

 private constructor(typeArgs: [], fields: SuiNsNameExpiredFields, ) { this.$fullTypeName = composeSuiType( SuiNsNameExpired.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::SuiNsNameExpired`; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.suinsDomainName = fields.suinsDomainName; }

 static reified( ): SuiNsNameExpiredReified { return { typeName: SuiNsNameExpired.$typeName, fullTypeName: composeSuiType( SuiNsNameExpired.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::SuiNsNameExpired`, typeArgs: [ ] as [], isPhantom: SuiNsNameExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SuiNsNameExpired.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SuiNsNameExpired.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SuiNsNameExpired.fromBcs( data, ), bcs: SuiNsNameExpired.bcs, fromJSONField: (field: any) => SuiNsNameExpired.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SuiNsNameExpired.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SuiNsNameExpired.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SuiNsNameExpired.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SuiNsNameExpired.fetch( client, id, ), new: ( fields: SuiNsNameExpiredFields, ) => { return new SuiNsNameExpired( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SuiNsNameExpired.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SuiNsNameExpired>> { return phantom(SuiNsNameExpired.reified( )); } static get p() { return SuiNsNameExpired.phantom() }

 static get bcs() { return bcs.struct("SuiNsNameExpired", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), suins_domain_name: String1.bcs

}) };

 static fromFields( fields: Record<string, any> ): SuiNsNameExpired { return SuiNsNameExpired.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), suinsDomainName: decodeFromFields(String1.reified(), fields.suins_domain_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SuiNsNameExpired { if (!isSuiNsNameExpired(item.type)) { throw new Error("not a SuiNsNameExpired type");

 }

 return SuiNsNameExpired.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), suinsDomainName: decodeFromFieldsWithTypes(String1.reified(), item.fields.suins_domain_name) } ) }

 static fromBcs( data: Uint8Array ): SuiNsNameExpired { return SuiNsNameExpired.fromFields( SuiNsNameExpired.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,suinsDomainName: this.suinsDomainName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SuiNsNameExpired { return SuiNsNameExpired.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), suinsDomainName: decodeFromJSONField(String1.reified(), field.suinsDomainName) } ) }

 static fromJSON( json: Record<string, any> ): SuiNsNameExpired { if (json.$typeName !== SuiNsNameExpired.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SuiNsNameExpired.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SuiNsNameExpired { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSuiNsNameExpired(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SuiNsNameExpired object`); } return SuiNsNameExpired.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SuiNsNameExpired { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSuiNsNameExpired(data.bcs.type)) { throw new Error(`object at is not a SuiNsNameExpired object`); }

 return SuiNsNameExpired.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SuiNsNameExpired.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SuiNsNameExpired> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SuiNsNameExpired object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSuiNsNameExpired(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SuiNsNameExpired object`); }

 return SuiNsNameExpired.fromSuiObjectData( res.data ); }

 }

/* ============================== TrainerActiveForQuest =============================== */

export function isTrainerActiveForQuest(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::TrainerActiveForQuest`; }

export interface TrainerActiveForQuestFields { trainerAddress: ToField<"address">; version: ToField<"u64">; suiBet: ToField<"u64">; playerOnly: ToField<"bool">; withTrainer: ToField<Option<"address">>; activeIndex: ToField<"u64"> }

export type TrainerActiveForQuestReified = Reified< TrainerActiveForQuest, TrainerActiveForQuestFields >;

export class TrainerActiveForQuest implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::TrainerActiveForQuest`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TrainerActiveForQuest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::TrainerActiveForQuest`; readonly $typeArgs: []; readonly $isPhantom = TrainerActiveForQuest.$isPhantom;

 readonly trainerAddress: ToField<"address">; readonly version: ToField<"u64">; readonly suiBet: ToField<"u64">; readonly playerOnly: ToField<"bool">; readonly withTrainer: ToField<Option<"address">>; readonly activeIndex: ToField<"u64">

 private constructor(typeArgs: [], fields: TrainerActiveForQuestFields, ) { this.$fullTypeName = composeSuiType( TrainerActiveForQuest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::TrainerActiveForQuest`; this.$typeArgs = typeArgs;

 this.trainerAddress = fields.trainerAddress;; this.version = fields.version;; this.suiBet = fields.suiBet;; this.playerOnly = fields.playerOnly;; this.withTrainer = fields.withTrainer;; this.activeIndex = fields.activeIndex; }

 static reified( ): TrainerActiveForQuestReified { return { typeName: TrainerActiveForQuest.$typeName, fullTypeName: composeSuiType( TrainerActiveForQuest.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::TrainerActiveForQuest`, typeArgs: [ ] as [], isPhantom: TrainerActiveForQuest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TrainerActiveForQuest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TrainerActiveForQuest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TrainerActiveForQuest.fromBcs( data, ), bcs: TrainerActiveForQuest.bcs, fromJSONField: (field: any) => TrainerActiveForQuest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TrainerActiveForQuest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TrainerActiveForQuest.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TrainerActiveForQuest.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TrainerActiveForQuest.fetch( client, id, ), new: ( fields: TrainerActiveForQuestFields, ) => { return new TrainerActiveForQuest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TrainerActiveForQuest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TrainerActiveForQuest>> { return phantom(TrainerActiveForQuest.reified( )); } static get p() { return TrainerActiveForQuest.phantom() }

 static get bcs() { return bcs.struct("TrainerActiveForQuest", {

 trainer_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), sui_bet: bcs.u64(), player_only: bcs.bool(), with_trainer: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), active_index: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TrainerActiveForQuest { return TrainerActiveForQuest.reified( ).new( { trainerAddress: decodeFromFields("address", fields.trainer_address), version: decodeFromFields("u64", fields.version), suiBet: decodeFromFields("u64", fields.sui_bet), playerOnly: decodeFromFields("bool", fields.player_only), withTrainer: decodeFromFields(Option.reified("address"), fields.with_trainer), activeIndex: decodeFromFields("u64", fields.active_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TrainerActiveForQuest { if (!isTrainerActiveForQuest(item.type)) { throw new Error("not a TrainerActiveForQuest type");

 }

 return TrainerActiveForQuest.reified( ).new( { trainerAddress: decodeFromFieldsWithTypes("address", item.fields.trainer_address), version: decodeFromFieldsWithTypes("u64", item.fields.version), suiBet: decodeFromFieldsWithTypes("u64", item.fields.sui_bet), playerOnly: decodeFromFieldsWithTypes("bool", item.fields.player_only), withTrainer: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.with_trainer), activeIndex: decodeFromFieldsWithTypes("u64", item.fields.active_index) } ) }

 static fromBcs( data: Uint8Array ): TrainerActiveForQuest { return TrainerActiveForQuest.fromFields( TrainerActiveForQuest.bcs.parse(data) ) }

 toJSONField() { return {

 trainerAddress: this.trainerAddress,version: this.version.toString(),suiBet: this.suiBet.toString(),playerOnly: this.playerOnly,withTrainer: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.withTrainer),activeIndex: this.activeIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TrainerActiveForQuest { return TrainerActiveForQuest.reified( ).new( { trainerAddress: decodeFromJSONField("address", field.trainerAddress), version: decodeFromJSONField("u64", field.version), suiBet: decodeFromJSONField("u64", field.suiBet), playerOnly: decodeFromJSONField("bool", field.playerOnly), withTrainer: decodeFromJSONField(Option.reified("address"), field.withTrainer), activeIndex: decodeFromJSONField("u64", field.activeIndex) } ) }

 static fromJSON( json: Record<string, any> ): TrainerActiveForQuest { if (json.$typeName !== TrainerActiveForQuest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TrainerActiveForQuest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TrainerActiveForQuest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTrainerActiveForQuest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TrainerActiveForQuest object`); } return TrainerActiveForQuest.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TrainerActiveForQuest { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTrainerActiveForQuest(data.bcs.type)) { throw new Error(`object at is not a TrainerActiveForQuest object`); }

 return TrainerActiveForQuest.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TrainerActiveForQuest.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TrainerActiveForQuest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TrainerActiveForQuest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTrainerActiveForQuest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TrainerActiveForQuest object`); }

 return TrainerActiveForQuest.fromSuiObjectData( res.data ); }

 }

/* ============================== TrainerCanceledActiveQuest =============================== */

export function isTrainerCanceledActiveQuest(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::TrainerCanceledActiveQuest`; }

export interface TrainerCanceledActiveQuestFields { trainerAddress: ToField<"address">; version: ToField<"u64"> }

export type TrainerCanceledActiveQuestReified = Reified< TrainerCanceledActiveQuest, TrainerCanceledActiveQuestFields >;

export class TrainerCanceledActiveQuest implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::TrainerCanceledActiveQuest`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TrainerCanceledActiveQuest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::TrainerCanceledActiveQuest`; readonly $typeArgs: []; readonly $isPhantom = TrainerCanceledActiveQuest.$isPhantom;

 readonly trainerAddress: ToField<"address">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: TrainerCanceledActiveQuestFields, ) { this.$fullTypeName = composeSuiType( TrainerCanceledActiveQuest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::TrainerCanceledActiveQuest`; this.$typeArgs = typeArgs;

 this.trainerAddress = fields.trainerAddress;; this.version = fields.version; }

 static reified( ): TrainerCanceledActiveQuestReified { return { typeName: TrainerCanceledActiveQuest.$typeName, fullTypeName: composeSuiType( TrainerCanceledActiveQuest.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::TrainerCanceledActiveQuest`, typeArgs: [ ] as [], isPhantom: TrainerCanceledActiveQuest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TrainerCanceledActiveQuest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TrainerCanceledActiveQuest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TrainerCanceledActiveQuest.fromBcs( data, ), bcs: TrainerCanceledActiveQuest.bcs, fromJSONField: (field: any) => TrainerCanceledActiveQuest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TrainerCanceledActiveQuest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TrainerCanceledActiveQuest.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TrainerCanceledActiveQuest.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TrainerCanceledActiveQuest.fetch( client, id, ), new: ( fields: TrainerCanceledActiveQuestFields, ) => { return new TrainerCanceledActiveQuest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TrainerCanceledActiveQuest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TrainerCanceledActiveQuest>> { return phantom(TrainerCanceledActiveQuest.reified( )); } static get p() { return TrainerCanceledActiveQuest.phantom() }

 static get bcs() { return bcs.struct("TrainerCanceledActiveQuest", {

 trainer_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TrainerCanceledActiveQuest { return TrainerCanceledActiveQuest.reified( ).new( { trainerAddress: decodeFromFields("address", fields.trainer_address), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TrainerCanceledActiveQuest { if (!isTrainerCanceledActiveQuest(item.type)) { throw new Error("not a TrainerCanceledActiveQuest type");

 }

 return TrainerCanceledActiveQuest.reified( ).new( { trainerAddress: decodeFromFieldsWithTypes("address", item.fields.trainer_address), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): TrainerCanceledActiveQuest { return TrainerCanceledActiveQuest.fromFields( TrainerCanceledActiveQuest.bcs.parse(data) ) }

 toJSONField() { return {

 trainerAddress: this.trainerAddress,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TrainerCanceledActiveQuest { return TrainerCanceledActiveQuest.reified( ).new( { trainerAddress: decodeFromJSONField("address", field.trainerAddress), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): TrainerCanceledActiveQuest { if (json.$typeName !== TrainerCanceledActiveQuest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TrainerCanceledActiveQuest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TrainerCanceledActiveQuest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTrainerCanceledActiveQuest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TrainerCanceledActiveQuest object`); } return TrainerCanceledActiveQuest.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TrainerCanceledActiveQuest { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTrainerCanceledActiveQuest(data.bcs.type)) { throw new Error(`object at is not a TrainerCanceledActiveQuest object`); }

 return TrainerCanceledActiveQuest.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TrainerCanceledActiveQuest.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TrainerCanceledActiveQuest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TrainerCanceledActiveQuest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTrainerCanceledActiveQuest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TrainerCanceledActiveQuest object`); }

 return TrainerCanceledActiveQuest.fromSuiObjectData( res.data ); }

 }

/* ============================== TrainerSession =============================== */

export function isTrainerSession(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::TrainerSession`; }

export interface TrainerSessionFields { trainerAddress: ToField<"address">; userBees: ToField<Vector<"u64">>; questsCount: ToField<"u64">; suiBalance: ToField<Balance<ToPhantom<SUI>>>; currentQuest: ToField<String1>; state: ToField<"u8"> }

export type TrainerSessionReified = Reified< TrainerSession, TrainerSessionFields >;

export class TrainerSession implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::TrainerSession`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TrainerSession.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::TrainerSession`; readonly $typeArgs: []; readonly $isPhantom = TrainerSession.$isPhantom;

 readonly trainerAddress: ToField<"address">; readonly userBees: ToField<Vector<"u64">>; readonly questsCount: ToField<"u64">; readonly suiBalance: ToField<Balance<ToPhantom<SUI>>>; readonly currentQuest: ToField<String1>; readonly state: ToField<"u8">

 private constructor(typeArgs: [], fields: TrainerSessionFields, ) { this.$fullTypeName = composeSuiType( TrainerSession.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::TrainerSession`; this.$typeArgs = typeArgs;

 this.trainerAddress = fields.trainerAddress;; this.userBees = fields.userBees;; this.questsCount = fields.questsCount;; this.suiBalance = fields.suiBalance;; this.currentQuest = fields.currentQuest;; this.state = fields.state; }

 static reified( ): TrainerSessionReified { return { typeName: TrainerSession.$typeName, fullTypeName: composeSuiType( TrainerSession.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::TrainerSession`, typeArgs: [ ] as [], isPhantom: TrainerSession.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TrainerSession.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TrainerSession.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TrainerSession.fromBcs( data, ), bcs: TrainerSession.bcs, fromJSONField: (field: any) => TrainerSession.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TrainerSession.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TrainerSession.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TrainerSession.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TrainerSession.fetch( client, id, ), new: ( fields: TrainerSessionFields, ) => { return new TrainerSession( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TrainerSession.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TrainerSession>> { return phantom(TrainerSession.reified( )); } static get p() { return TrainerSession.phantom() }

 static get bcs() { return bcs.struct("TrainerSession", {

 trainer_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), user_bees: bcs.vector(bcs.u64()), quests_count: bcs.u64(), sui_balance: Balance.bcs, current_quest: String1.bcs, state: bcs.u8()

}) };

 static fromFields( fields: Record<string, any> ): TrainerSession { return TrainerSession.reified( ).new( { trainerAddress: decodeFromFields("address", fields.trainer_address), userBees: decodeFromFields(reified.vector("u64"), fields.user_bees), questsCount: decodeFromFields("u64", fields.quests_count), suiBalance: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.sui_balance), currentQuest: decodeFromFields(String1.reified(), fields.current_quest), state: decodeFromFields("u8", fields.state) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TrainerSession { if (!isTrainerSession(item.type)) { throw new Error("not a TrainerSession type");

 }

 return TrainerSession.reified( ).new( { trainerAddress: decodeFromFieldsWithTypes("address", item.fields.trainer_address), userBees: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.user_bees), questsCount: decodeFromFieldsWithTypes("u64", item.fields.quests_count), suiBalance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.sui_balance), currentQuest: decodeFromFieldsWithTypes(String1.reified(), item.fields.current_quest), state: decodeFromFieldsWithTypes("u8", item.fields.state) } ) }

 static fromBcs( data: Uint8Array ): TrainerSession { return TrainerSession.fromFields( TrainerSession.bcs.parse(data) ) }

 toJSONField() { return {

 trainerAddress: this.trainerAddress,userBees: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.userBees),questsCount: this.questsCount.toString(),suiBalance: this.suiBalance.toJSONField(),currentQuest: this.currentQuest,state: this.state,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TrainerSession { return TrainerSession.reified( ).new( { trainerAddress: decodeFromJSONField("address", field.trainerAddress), userBees: decodeFromJSONField(reified.vector("u64"), field.userBees), questsCount: decodeFromJSONField("u64", field.questsCount), suiBalance: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.suiBalance), currentQuest: decodeFromJSONField(String1.reified(), field.currentQuest), state: decodeFromJSONField("u8", field.state) } ) }

 static fromJSON( json: Record<string, any> ): TrainerSession { if (json.$typeName !== TrainerSession.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TrainerSession.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TrainerSession { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTrainerSession(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TrainerSession object`); } return TrainerSession.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TrainerSession { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTrainerSession(data.bcs.type)) { throw new Error(`object at is not a TrainerSession object`); }

 return TrainerSession.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TrainerSession.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TrainerSession> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TrainerSession object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTrainerSession(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TrainerSession object`); }

 return TrainerSession.fromSuiObjectData( res.data ); }

 }

/* ============================== TransformationRequestProcessed =============================== */

export function isTransformationRequestProcessed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::TransformationRequestProcessed`; }

export interface TransformationRequestProcessedFields { version: ToField<"u64">; imgIndex: ToField<"u64">; img: ToField<Vector<String1>> }

export type TransformationRequestProcessedReified = Reified< TransformationRequestProcessed, TransformationRequestProcessedFields >;

export class TransformationRequestProcessed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::TransformationRequestProcessed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TransformationRequestProcessed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::TransformationRequestProcessed`; readonly $typeArgs: []; readonly $isPhantom = TransformationRequestProcessed.$isPhantom;

 readonly version: ToField<"u64">; readonly imgIndex: ToField<"u64">; readonly img: ToField<Vector<String1>>

 private constructor(typeArgs: [], fields: TransformationRequestProcessedFields, ) { this.$fullTypeName = composeSuiType( TransformationRequestProcessed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::TransformationRequestProcessed`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.imgIndex = fields.imgIndex;; this.img = fields.img; }

 static reified( ): TransformationRequestProcessedReified { return { typeName: TransformationRequestProcessed.$typeName, fullTypeName: composeSuiType( TransformationRequestProcessed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::TransformationRequestProcessed`, typeArgs: [ ] as [], isPhantom: TransformationRequestProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TransformationRequestProcessed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TransformationRequestProcessed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TransformationRequestProcessed.fromBcs( data, ), bcs: TransformationRequestProcessed.bcs, fromJSONField: (field: any) => TransformationRequestProcessed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TransformationRequestProcessed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TransformationRequestProcessed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TransformationRequestProcessed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TransformationRequestProcessed.fetch( client, id, ), new: ( fields: TransformationRequestProcessedFields, ) => { return new TransformationRequestProcessed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TransformationRequestProcessed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TransformationRequestProcessed>> { return phantom(TransformationRequestProcessed.reified( )); } static get p() { return TransformationRequestProcessed.phantom() }

 static get bcs() { return bcs.struct("TransformationRequestProcessed", {

 version: bcs.u64(), img_index: bcs.u64(), img: bcs.vector(String1.bcs)

}) };

 static fromFields( fields: Record<string, any> ): TransformationRequestProcessed { return TransformationRequestProcessed.reified( ).new( { version: decodeFromFields("u64", fields.version), imgIndex: decodeFromFields("u64", fields.img_index), img: decodeFromFields(reified.vector(String1.reified()), fields.img) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TransformationRequestProcessed { if (!isTransformationRequestProcessed(item.type)) { throw new Error("not a TransformationRequestProcessed type");

 }

 return TransformationRequestProcessed.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), imgIndex: decodeFromFieldsWithTypes("u64", item.fields.img_index), img: decodeFromFieldsWithTypes(reified.vector(String1.reified()), item.fields.img) } ) }

 static fromBcs( data: Uint8Array ): TransformationRequestProcessed { return TransformationRequestProcessed.fromFields( TransformationRequestProcessed.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),imgIndex: this.imgIndex.toString(),img: fieldToJSON<Vector<String1>>(`vector<${String1.$typeName}>`, this.img),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TransformationRequestProcessed { return TransformationRequestProcessed.reified( ).new( { version: decodeFromJSONField("u64", field.version), imgIndex: decodeFromJSONField("u64", field.imgIndex), img: decodeFromJSONField(reified.vector(String1.reified()), field.img) } ) }

 static fromJSON( json: Record<string, any> ): TransformationRequestProcessed { if (json.$typeName !== TransformationRequestProcessed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TransformationRequestProcessed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TransformationRequestProcessed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTransformationRequestProcessed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TransformationRequestProcessed object`); } return TransformationRequestProcessed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TransformationRequestProcessed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTransformationRequestProcessed(data.bcs.type)) { throw new Error(`object at is not a TransformationRequestProcessed object`); }

 return TransformationRequestProcessed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TransformationRequestProcessed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TransformationRequestProcessed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TransformationRequestProcessed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTransformationRequestProcessed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TransformationRequestProcessed object`); }

 return TransformationRequestProcessed.fromSuiObjectData( res.data ); }

 }

/* ============================== TwapUpdateCap =============================== */

export function isTwapUpdateCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::TwapUpdateCap`; }

export interface TwapUpdateCapFields { id: ToField<UID> }

export type TwapUpdateCapReified = Reified< TwapUpdateCap, TwapUpdateCapFields >;

export class TwapUpdateCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::TwapUpdateCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TwapUpdateCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::TwapUpdateCap`; readonly $typeArgs: []; readonly $isPhantom = TwapUpdateCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: TwapUpdateCapFields, ) { this.$fullTypeName = composeSuiType( TwapUpdateCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::TwapUpdateCap`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): TwapUpdateCapReified { return { typeName: TwapUpdateCap.$typeName, fullTypeName: composeSuiType( TwapUpdateCap.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::TwapUpdateCap`, typeArgs: [ ] as [], isPhantom: TwapUpdateCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TwapUpdateCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TwapUpdateCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TwapUpdateCap.fromBcs( data, ), bcs: TwapUpdateCap.bcs, fromJSONField: (field: any) => TwapUpdateCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TwapUpdateCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TwapUpdateCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TwapUpdateCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TwapUpdateCap.fetch( client, id, ), new: ( fields: TwapUpdateCapFields, ) => { return new TwapUpdateCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TwapUpdateCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TwapUpdateCap>> { return phantom(TwapUpdateCap.reified( )); } static get p() { return TwapUpdateCap.phantom() }

 static get bcs() { return bcs.struct("TwapUpdateCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): TwapUpdateCap { return TwapUpdateCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TwapUpdateCap { if (!isTwapUpdateCap(item.type)) { throw new Error("not a TwapUpdateCap type");

 }

 return TwapUpdateCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): TwapUpdateCap { return TwapUpdateCap.fromFields( TwapUpdateCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TwapUpdateCap { return TwapUpdateCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): TwapUpdateCap { if (json.$typeName !== TwapUpdateCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TwapUpdateCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TwapUpdateCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTwapUpdateCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TwapUpdateCap object`); } return TwapUpdateCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TwapUpdateCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTwapUpdateCap(data.bcs.type)) { throw new Error(`object at is not a TwapUpdateCap object`); }

 return TwapUpdateCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TwapUpdateCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TwapUpdateCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TwapUpdateCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTwapUpdateCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TwapUpdateCap object`); }

 return TwapUpdateCap.fromSuiObjectData( res.data ); }

 }

/* ============================== UpdatedStingerBeesEnergyHealth =============================== */

export function isUpdatedStingerBeesEnergyHealth(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::UpdatedStingerBeesEnergyHealth`; }

export interface UpdatedStingerBeesEnergyHealthFields { stingerVersion: ToField<"u64">; hiveEnergy: ToField<"u64">; honeyHealth: ToField<"u64"> }

export type UpdatedStingerBeesEnergyHealthReified = Reified< UpdatedStingerBeesEnergyHealth, UpdatedStingerBeesEnergyHealthFields >;

export class UpdatedStingerBeesEnergyHealth implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::UpdatedStingerBeesEnergyHealth`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UpdatedStingerBeesEnergyHealth.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::UpdatedStingerBeesEnergyHealth`; readonly $typeArgs: []; readonly $isPhantom = UpdatedStingerBeesEnergyHealth.$isPhantom;

 readonly stingerVersion: ToField<"u64">; readonly hiveEnergy: ToField<"u64">; readonly honeyHealth: ToField<"u64">

 private constructor(typeArgs: [], fields: UpdatedStingerBeesEnergyHealthFields, ) { this.$fullTypeName = composeSuiType( UpdatedStingerBeesEnergyHealth.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::UpdatedStingerBeesEnergyHealth`; this.$typeArgs = typeArgs;

 this.stingerVersion = fields.stingerVersion;; this.hiveEnergy = fields.hiveEnergy;; this.honeyHealth = fields.honeyHealth; }

 static reified( ): UpdatedStingerBeesEnergyHealthReified { return { typeName: UpdatedStingerBeesEnergyHealth.$typeName, fullTypeName: composeSuiType( UpdatedStingerBeesEnergyHealth.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::UpdatedStingerBeesEnergyHealth`, typeArgs: [ ] as [], isPhantom: UpdatedStingerBeesEnergyHealth.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpdatedStingerBeesEnergyHealth.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpdatedStingerBeesEnergyHealth.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpdatedStingerBeesEnergyHealth.fromBcs( data, ), bcs: UpdatedStingerBeesEnergyHealth.bcs, fromJSONField: (field: any) => UpdatedStingerBeesEnergyHealth.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpdatedStingerBeesEnergyHealth.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpdatedStingerBeesEnergyHealth.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UpdatedStingerBeesEnergyHealth.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UpdatedStingerBeesEnergyHealth.fetch( client, id, ), new: ( fields: UpdatedStingerBeesEnergyHealthFields, ) => { return new UpdatedStingerBeesEnergyHealth( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpdatedStingerBeesEnergyHealth.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpdatedStingerBeesEnergyHealth>> { return phantom(UpdatedStingerBeesEnergyHealth.reified( )); } static get p() { return UpdatedStingerBeesEnergyHealth.phantom() }

 static get bcs() { return bcs.struct("UpdatedStingerBeesEnergyHealth", {

 stinger_version: bcs.u64(), hive_energy: bcs.u64(), honey_health: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UpdatedStingerBeesEnergyHealth { return UpdatedStingerBeesEnergyHealth.reified( ).new( { stingerVersion: decodeFromFields("u64", fields.stinger_version), hiveEnergy: decodeFromFields("u64", fields.hive_energy), honeyHealth: decodeFromFields("u64", fields.honey_health) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpdatedStingerBeesEnergyHealth { if (!isUpdatedStingerBeesEnergyHealth(item.type)) { throw new Error("not a UpdatedStingerBeesEnergyHealth type");

 }

 return UpdatedStingerBeesEnergyHealth.reified( ).new( { stingerVersion: decodeFromFieldsWithTypes("u64", item.fields.stinger_version), hiveEnergy: decodeFromFieldsWithTypes("u64", item.fields.hive_energy), honeyHealth: decodeFromFieldsWithTypes("u64", item.fields.honey_health) } ) }

 static fromBcs( data: Uint8Array ): UpdatedStingerBeesEnergyHealth { return UpdatedStingerBeesEnergyHealth.fromFields( UpdatedStingerBeesEnergyHealth.bcs.parse(data) ) }

 toJSONField() { return {

 stingerVersion: this.stingerVersion.toString(),hiveEnergy: this.hiveEnergy.toString(),honeyHealth: this.honeyHealth.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpdatedStingerBeesEnergyHealth { return UpdatedStingerBeesEnergyHealth.reified( ).new( { stingerVersion: decodeFromJSONField("u64", field.stingerVersion), hiveEnergy: decodeFromJSONField("u64", field.hiveEnergy), honeyHealth: decodeFromJSONField("u64", field.honeyHealth) } ) }

 static fromJSON( json: Record<string, any> ): UpdatedStingerBeesEnergyHealth { if (json.$typeName !== UpdatedStingerBeesEnergyHealth.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpdatedStingerBeesEnergyHealth.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpdatedStingerBeesEnergyHealth { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpdatedStingerBeesEnergyHealth(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpdatedStingerBeesEnergyHealth object`); } return UpdatedStingerBeesEnergyHealth.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UpdatedStingerBeesEnergyHealth { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpdatedStingerBeesEnergyHealth(data.bcs.type)) { throw new Error(`object at is not a UpdatedStingerBeesEnergyHealth object`); }

 return UpdatedStingerBeesEnergyHealth.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpdatedStingerBeesEnergyHealth.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpdatedStingerBeesEnergyHealth> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpdatedStingerBeesEnergyHealth object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpdatedStingerBeesEnergyHealth(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpdatedStingerBeesEnergyHealth object`); }

 return UpdatedStingerBeesEnergyHealth.fromSuiObjectData( res.data ); }

 }

/* ============================== UserNameUpdated =============================== */

export function isUserNameUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::UserNameUpdated`; }

export interface UserNameUpdatedFields { profileAddr: ToField<"address">; prevUsername: ToField<String1>; newUsername: ToField<String1> }

export type UserNameUpdatedReified = Reified< UserNameUpdated, UserNameUpdatedFields >;

export class UserNameUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::UserNameUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserNameUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::UserNameUpdated`; readonly $typeArgs: []; readonly $isPhantom = UserNameUpdated.$isPhantom;

 readonly profileAddr: ToField<"address">; readonly prevUsername: ToField<String1>; readonly newUsername: ToField<String1>

 private constructor(typeArgs: [], fields: UserNameUpdatedFields, ) { this.$fullTypeName = composeSuiType( UserNameUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::UserNameUpdated`; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.prevUsername = fields.prevUsername;; this.newUsername = fields.newUsername; }

 static reified( ): UserNameUpdatedReified { return { typeName: UserNameUpdated.$typeName, fullTypeName: composeSuiType( UserNameUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::UserNameUpdated`, typeArgs: [ ] as [], isPhantom: UserNameUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserNameUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserNameUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserNameUpdated.fromBcs( data, ), bcs: UserNameUpdated.bcs, fromJSONField: (field: any) => UserNameUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserNameUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserNameUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UserNameUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UserNameUpdated.fetch( client, id, ), new: ( fields: UserNameUpdatedFields, ) => { return new UserNameUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserNameUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserNameUpdated>> { return phantom(UserNameUpdated.reified( )); } static get p() { return UserNameUpdated.phantom() }

 static get bcs() { return bcs.struct("UserNameUpdated", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), prev_username: String1.bcs, new_username: String1.bcs

}) };

 static fromFields( fields: Record<string, any> ): UserNameUpdated { return UserNameUpdated.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), prevUsername: decodeFromFields(String1.reified(), fields.prev_username), newUsername: decodeFromFields(String1.reified(), fields.new_username) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserNameUpdated { if (!isUserNameUpdated(item.type)) { throw new Error("not a UserNameUpdated type");

 }

 return UserNameUpdated.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), prevUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.prev_username), newUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.new_username) } ) }

 static fromBcs( data: Uint8Array ): UserNameUpdated { return UserNameUpdated.fromFields( UserNameUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,prevUsername: this.prevUsername,newUsername: this.newUsername,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserNameUpdated { return UserNameUpdated.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), prevUsername: decodeFromJSONField(String1.reified(), field.prevUsername), newUsername: decodeFromJSONField(String1.reified(), field.newUsername) } ) }

 static fromJSON( json: Record<string, any> ): UserNameUpdated { if (json.$typeName !== UserNameUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserNameUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserNameUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserNameUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserNameUpdated object`); } return UserNameUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UserNameUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUserNameUpdated(data.bcs.type)) { throw new Error(`object at is not a UserNameUpdated object`); }

 return UserNameUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UserNameUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserNameUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserNameUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserNameUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserNameUpdated object`); }

 return UserNameUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== UserWhitelistedForGenesisMint =============================== */

export function isUserWhitelistedForGenesisMint(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::UserWhitelistedForGenesisMint`; }

export interface UserWhitelistedForGenesisMintFields { userAddr: ToField<"address">; mintPrice: ToField<"u64"> }

export type UserWhitelistedForGenesisMintReified = Reified< UserWhitelistedForGenesisMint, UserWhitelistedForGenesisMintFields >;

export class UserWhitelistedForGenesisMint implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::UserWhitelistedForGenesisMint`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserWhitelistedForGenesisMint.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::UserWhitelistedForGenesisMint`; readonly $typeArgs: []; readonly $isPhantom = UserWhitelistedForGenesisMint.$isPhantom;

 readonly userAddr: ToField<"address">; readonly mintPrice: ToField<"u64">

 private constructor(typeArgs: [], fields: UserWhitelistedForGenesisMintFields, ) { this.$fullTypeName = composeSuiType( UserWhitelistedForGenesisMint.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::UserWhitelistedForGenesisMint`; this.$typeArgs = typeArgs;

 this.userAddr = fields.userAddr;; this.mintPrice = fields.mintPrice; }

 static reified( ): UserWhitelistedForGenesisMintReified { return { typeName: UserWhitelistedForGenesisMint.$typeName, fullTypeName: composeSuiType( UserWhitelistedForGenesisMint.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::UserWhitelistedForGenesisMint`, typeArgs: [ ] as [], isPhantom: UserWhitelistedForGenesisMint.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserWhitelistedForGenesisMint.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserWhitelistedForGenesisMint.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserWhitelistedForGenesisMint.fromBcs( data, ), bcs: UserWhitelistedForGenesisMint.bcs, fromJSONField: (field: any) => UserWhitelistedForGenesisMint.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserWhitelistedForGenesisMint.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserWhitelistedForGenesisMint.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UserWhitelistedForGenesisMint.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UserWhitelistedForGenesisMint.fetch( client, id, ), new: ( fields: UserWhitelistedForGenesisMintFields, ) => { return new UserWhitelistedForGenesisMint( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserWhitelistedForGenesisMint.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserWhitelistedForGenesisMint>> { return phantom(UserWhitelistedForGenesisMint.reified( )); } static get p() { return UserWhitelistedForGenesisMint.phantom() }

 static get bcs() { return bcs.struct("UserWhitelistedForGenesisMint", {

 user_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), mint_price: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserWhitelistedForGenesisMint { return UserWhitelistedForGenesisMint.reified( ).new( { userAddr: decodeFromFields("address", fields.user_addr), mintPrice: decodeFromFields("u64", fields.mint_price) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserWhitelistedForGenesisMint { if (!isUserWhitelistedForGenesisMint(item.type)) { throw new Error("not a UserWhitelistedForGenesisMint type");

 }

 return UserWhitelistedForGenesisMint.reified( ).new( { userAddr: decodeFromFieldsWithTypes("address", item.fields.user_addr), mintPrice: decodeFromFieldsWithTypes("u64", item.fields.mint_price) } ) }

 static fromBcs( data: Uint8Array ): UserWhitelistedForGenesisMint { return UserWhitelistedForGenesisMint.fromFields( UserWhitelistedForGenesisMint.bcs.parse(data) ) }

 toJSONField() { return {

 userAddr: this.userAddr,mintPrice: this.mintPrice.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserWhitelistedForGenesisMint { return UserWhitelistedForGenesisMint.reified( ).new( { userAddr: decodeFromJSONField("address", field.userAddr), mintPrice: decodeFromJSONField("u64", field.mintPrice) } ) }

 static fromJSON( json: Record<string, any> ): UserWhitelistedForGenesisMint { if (json.$typeName !== UserWhitelistedForGenesisMint.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserWhitelistedForGenesisMint.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserWhitelistedForGenesisMint { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserWhitelistedForGenesisMint(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserWhitelistedForGenesisMint object`); } return UserWhitelistedForGenesisMint.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UserWhitelistedForGenesisMint { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUserWhitelistedForGenesisMint(data.bcs.type)) { throw new Error(`object at is not a UserWhitelistedForGenesisMint object`); }

 return UserWhitelistedForGenesisMint.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UserWhitelistedForGenesisMint.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserWhitelistedForGenesisMint> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserWhitelistedForGenesisMint object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserWhitelistedForGenesisMint(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserWhitelistedForGenesisMint object`); }

 return UserWhitelistedForGenesisMint.fromSuiObjectData( res.data ); }

 }

/* ============================== YieldFarm =============================== */

export function isYieldFarm(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_trainer::YieldFarm`; }

export interface YieldFarmFields { id: ToField<UID>; tradingEnabled: ToField<"bool">; governanceInfo: ToField<GovernanceInfo>; incomingHoneyForBees: ToField<Balance<ToPhantom<HONEY>>>; incomingHiveForBees: ToField<Balance<ToPhantom<HIVE>>>; honeyForBees: ToField<Balance<ToPhantom<HONEY>>>; hiveForBees: ToField<Balance<ToPhantom<HIVE>>>; honeyGlobalIndex: ToField<"u256">; hiveGlobalIndex: ToField<"u256">; moduleVersion: ToField<"u64"> }

export type YieldFarmReified = Reified< YieldFarm, YieldFarmFields >;

export class YieldFarm implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_trainer::YieldFarm`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = YieldFarm.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_trainer::YieldFarm`; readonly $typeArgs: []; readonly $isPhantom = YieldFarm.$isPhantom;

 readonly id: ToField<UID>; readonly tradingEnabled: ToField<"bool">; readonly governanceInfo: ToField<GovernanceInfo>; readonly incomingHoneyForBees: ToField<Balance<ToPhantom<HONEY>>>; readonly incomingHiveForBees: ToField<Balance<ToPhantom<HIVE>>>; readonly honeyForBees: ToField<Balance<ToPhantom<HONEY>>>; readonly hiveForBees: ToField<Balance<ToPhantom<HIVE>>>; readonly honeyGlobalIndex: ToField<"u256">; readonly hiveGlobalIndex: ToField<"u256">; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: YieldFarmFields, ) { this.$fullTypeName = composeSuiType( YieldFarm.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_trainer::YieldFarm`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.tradingEnabled = fields.tradingEnabled;; this.governanceInfo = fields.governanceInfo;; this.incomingHoneyForBees = fields.incomingHoneyForBees;; this.incomingHiveForBees = fields.incomingHiveForBees;; this.honeyForBees = fields.honeyForBees;; this.hiveForBees = fields.hiveForBees;; this.honeyGlobalIndex = fields.honeyGlobalIndex;; this.hiveGlobalIndex = fields.hiveGlobalIndex;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): YieldFarmReified { return { typeName: YieldFarm.$typeName, fullTypeName: composeSuiType( YieldFarm.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_trainer::YieldFarm`, typeArgs: [ ] as [], isPhantom: YieldFarm.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => YieldFarm.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => YieldFarm.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => YieldFarm.fromBcs( data, ), bcs: YieldFarm.bcs, fromJSONField: (field: any) => YieldFarm.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => YieldFarm.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => YieldFarm.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => YieldFarm.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => YieldFarm.fetch( client, id, ), new: ( fields: YieldFarmFields, ) => { return new YieldFarm( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return YieldFarm.reified() }

 static phantom( ): PhantomReified<ToTypeStr<YieldFarm>> { return phantom(YieldFarm.reified( )); } static get p() { return YieldFarm.phantom() }

 static get bcs() { return bcs.struct("YieldFarm", {

 id: UID.bcs, trading_enabled: bcs.bool(), governance_info: GovernanceInfo.bcs, incoming_honey_for_bees: Balance.bcs, incoming_hive_for_bees: Balance.bcs, honey_for_bees: Balance.bcs, hive_for_bees: Balance.bcs, honey_global_index: bcs.u256(), hive_global_index: bcs.u256(), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): YieldFarm { return YieldFarm.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), tradingEnabled: decodeFromFields("bool", fields.trading_enabled), governanceInfo: decodeFromFields(GovernanceInfo.reified(), fields.governance_info), incomingHoneyForBees: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.incoming_honey_for_bees), incomingHiveForBees: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.incoming_hive_for_bees), honeyForBees: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_for_bees), hiveForBees: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_for_bees), honeyGlobalIndex: decodeFromFields("u256", fields.honey_global_index), hiveGlobalIndex: decodeFromFields("u256", fields.hive_global_index), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): YieldFarm { if (!isYieldFarm(item.type)) { throw new Error("not a YieldFarm type");

 }

 return YieldFarm.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), tradingEnabled: decodeFromFieldsWithTypes("bool", item.fields.trading_enabled), governanceInfo: decodeFromFieldsWithTypes(GovernanceInfo.reified(), item.fields.governance_info), incomingHoneyForBees: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.incoming_honey_for_bees), incomingHiveForBees: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.incoming_hive_for_bees), honeyForBees: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_for_bees), hiveForBees: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_for_bees), honeyGlobalIndex: decodeFromFieldsWithTypes("u256", item.fields.honey_global_index), hiveGlobalIndex: decodeFromFieldsWithTypes("u256", item.fields.hive_global_index), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): YieldFarm { return YieldFarm.fromFields( YieldFarm.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,tradingEnabled: this.tradingEnabled,governanceInfo: this.governanceInfo.toJSONField(),incomingHoneyForBees: this.incomingHoneyForBees.toJSONField(),incomingHiveForBees: this.incomingHiveForBees.toJSONField(),honeyForBees: this.honeyForBees.toJSONField(),hiveForBees: this.hiveForBees.toJSONField(),honeyGlobalIndex: this.honeyGlobalIndex.toString(),hiveGlobalIndex: this.hiveGlobalIndex.toString(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): YieldFarm { return YieldFarm.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), tradingEnabled: decodeFromJSONField("bool", field.tradingEnabled), governanceInfo: decodeFromJSONField(GovernanceInfo.reified(), field.governanceInfo), incomingHoneyForBees: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.incomingHoneyForBees), incomingHiveForBees: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.incomingHiveForBees), honeyForBees: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyForBees), hiveForBees: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveForBees), honeyGlobalIndex: decodeFromJSONField("u256", field.honeyGlobalIndex), hiveGlobalIndex: decodeFromJSONField("u256", field.hiveGlobalIndex), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): YieldFarm { if (json.$typeName !== YieldFarm.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return YieldFarm.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): YieldFarm { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isYieldFarm(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a YieldFarm object`); } return YieldFarm.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): YieldFarm { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isYieldFarm(data.bcs.type)) { throw new Error(`object at is not a YieldFarm object`); }

 return YieldFarm.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return YieldFarm.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<YieldFarm> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching YieldFarm object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isYieldFarm(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a YieldFarm object`); }

 return YieldFarm.fromSuiObjectData( res.data ); }

 }
