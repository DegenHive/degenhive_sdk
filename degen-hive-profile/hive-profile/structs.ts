import * as reified from "../../_framework/reified";
import {String as String1} from "../../_dependencies/source/0x1/ascii/structs";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {LinkedTable} from "../../_dependencies/source/0x2/linked-table/structs";
import {ID, UID} from "../../_dependencies/source/0x2/object/structs";
import {Table} from "../../_dependencies/source/0x2/table/structs";
import {Url} from "../../_dependencies/source/0x2/url/structs";
import {DSUI} from "../../degen-hive-dex-config/dsui/structs";
import { HiveGems } from "../../degen-hive-dex-config/hive-gems/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== ConfigParams =============================== */

export function isConfigParams(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ConfigParams"; }

export interface ConfigParamsFields { maxBidsPerAsset: ToField<"u64">; minSuiBidAllowed: ToField<"u64">; profileKraftFeesSui: ToField<"u64">; socialFeeGems: ToField<"u64">; socialMultiplierForGems: ToField<"u64">; socialMultiplierForPower: ToField<"u64"> }

export type ConfigParamsReified = Reified< ConfigParams, ConfigParamsFields >;

export class ConfigParams implements StructClass { static readonly $typeName = "0x0::hive_profile::ConfigParams"; static readonly $numTypeParams = 0;

 readonly $typeName = ConfigParams.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ConfigParams";

 readonly $typeArgs: [];

 readonly maxBidsPerAsset: ToField<"u64">; readonly minSuiBidAllowed: ToField<"u64">; readonly profileKraftFeesSui: ToField<"u64">; readonly socialFeeGems: ToField<"u64">; readonly socialMultiplierForGems: ToField<"u64">; readonly socialMultiplierForPower: ToField<"u64">

 private constructor(typeArgs: [], fields: ConfigParamsFields, ) { this.$fullTypeName = composeSuiType( ConfigParams.$typeName, ...typeArgs ) as "0x0::hive_profile::ConfigParams"; this.$typeArgs = typeArgs;

 this.maxBidsPerAsset = fields.maxBidsPerAsset;; this.minSuiBidAllowed = fields.minSuiBidAllowed;; this.profileKraftFeesSui = fields.profileKraftFeesSui;; this.socialFeeGems = fields.socialFeeGems;; this.socialMultiplierForGems = fields.socialMultiplierForGems;; this.socialMultiplierForPower = fields.socialMultiplierForPower; }

 static reified( ): ConfigParamsReified { return { typeName: ConfigParams.$typeName, fullTypeName: composeSuiType( ConfigParams.$typeName, ...[] ) as "0x0::hive_profile::ConfigParams", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ConfigParams.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ConfigParams.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ConfigParams.fromBcs( data, ), bcs: ConfigParams.bcs, fromJSONField: (field: any) => ConfigParams.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ConfigParams.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ConfigParams.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ConfigParams.fetch( client, id, ), new: ( fields: ConfigParamsFields, ) => { return new ConfigParams( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ConfigParams.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ConfigParams>> { return phantom(ConfigParams.reified( )); } static get p() { return ConfigParams.phantom() }

 static get bcs() { return bcs.struct("ConfigParams", {

 max_bids_per_asset: bcs.u64(), min_sui_bid_allowed: bcs.u64(), profile_kraft_fees_sui: bcs.u64(), social_fee_gems: bcs.u64(), social_multiplier_for_gems: bcs.u64(), social_multiplier_for_power: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ConfigParams { return ConfigParams.reified( ).new( { maxBidsPerAsset: decodeFromFields("u64", fields.max_bids_per_asset), minSuiBidAllowed: decodeFromFields("u64", fields.min_sui_bid_allowed), profileKraftFeesSui: decodeFromFields("u64", fields.profile_kraft_fees_sui), socialFeeGems: decodeFromFields("u64", fields.social_fee_gems), socialMultiplierForGems: decodeFromFields("u64", fields.social_multiplier_for_gems), socialMultiplierForPower: decodeFromFields("u64", fields.social_multiplier_for_power) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ConfigParams { if (!isConfigParams(item.type)) { throw new Error("not a ConfigParams type");

 }

 return ConfigParams.reified( ).new( { maxBidsPerAsset: decodeFromFieldsWithTypes("u64", item.fields.max_bids_per_asset), minSuiBidAllowed: decodeFromFieldsWithTypes("u64", item.fields.min_sui_bid_allowed), profileKraftFeesSui: decodeFromFieldsWithTypes("u64", item.fields.profile_kraft_fees_sui), socialFeeGems: decodeFromFieldsWithTypes("u64", item.fields.social_fee_gems), socialMultiplierForGems: decodeFromFieldsWithTypes("u64", item.fields.social_multiplier_for_gems), socialMultiplierForPower: decodeFromFieldsWithTypes("u64", item.fields.social_multiplier_for_power) } ) }

 static fromBcs( data: Uint8Array ): ConfigParams { return ConfigParams.fromFields( ConfigParams.bcs.parse(data) ) }

 toJSONField() { return {

 maxBidsPerAsset: this.maxBidsPerAsset.toString(),minSuiBidAllowed: this.minSuiBidAllowed.toString(),profileKraftFeesSui: this.profileKraftFeesSui.toString(),socialFeeGems: this.socialFeeGems.toString(),socialMultiplierForGems: this.socialMultiplierForGems.toString(),socialMultiplierForPower: this.socialMultiplierForPower.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ConfigParams { return ConfigParams.reified( ).new( { maxBidsPerAsset: decodeFromJSONField("u64", field.maxBidsPerAsset), minSuiBidAllowed: decodeFromJSONField("u64", field.minSuiBidAllowed), profileKraftFeesSui: decodeFromJSONField("u64", field.profileKraftFeesSui), socialFeeGems: decodeFromJSONField("u64", field.socialFeeGems), socialMultiplierForGems: decodeFromJSONField("u64", field.socialMultiplierForGems), socialMultiplierForPower: decodeFromJSONField("u64", field.socialMultiplierForPower) } ) }

 static fromJSON( json: Record<string, any> ): ConfigParams { if (json.$typeName !== ConfigParams.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ConfigParams.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ConfigParams { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConfigParams(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ConfigParams object`); } return ConfigParams.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ConfigParams> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ConfigParams object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConfigParams(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ConfigParams object`); }
 return ConfigParams.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AccessRecord =============================== */

export function isAccessRecord(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::AccessRecord"; }

export interface AccessRecordFields { subscriber: ToField<"address">; subscribedTo: ToField<"address">; isActive: ToField<"bool">; initTimestamp: ToField<"u64">; accessType: ToField<"u8">; accessCost: ToField<"u64">; nextPaymentTimestamp: ToField<"u64">; totalPaid: ToField<"u64">; toUnsubscribe: ToField<"bool"> }

export type AccessRecordReified = Reified< AccessRecord, AccessRecordFields >;

export class AccessRecord implements StructClass { static readonly $typeName = "0x0::hive_profile::AccessRecord"; static readonly $numTypeParams = 0;

 readonly $typeName = AccessRecord.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::AccessRecord";

 readonly $typeArgs: [];

 readonly subscriber: ToField<"address">; readonly subscribedTo: ToField<"address">; readonly isActive: ToField<"bool">; readonly initTimestamp: ToField<"u64">; readonly accessType: ToField<"u8">; readonly accessCost: ToField<"u64">; readonly nextPaymentTimestamp: ToField<"u64">; readonly totalPaid: ToField<"u64">; readonly toUnsubscribe: ToField<"bool">

 private constructor(typeArgs: [], fields: AccessRecordFields, ) { this.$fullTypeName = composeSuiType( AccessRecord.$typeName, ...typeArgs ) as "0x0::hive_profile::AccessRecord"; this.$typeArgs = typeArgs;

 this.subscriber = fields.subscriber;; this.subscribedTo = fields.subscribedTo;; this.isActive = fields.isActive;; this.initTimestamp = fields.initTimestamp;; this.accessType = fields.accessType;; this.accessCost = fields.accessCost;; this.nextPaymentTimestamp = fields.nextPaymentTimestamp;; this.totalPaid = fields.totalPaid;; this.toUnsubscribe = fields.toUnsubscribe; }

 static reified( ): AccessRecordReified { return { typeName: AccessRecord.$typeName, fullTypeName: composeSuiType( AccessRecord.$typeName, ...[] ) as "0x0::hive_profile::AccessRecord", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AccessRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AccessRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AccessRecord.fromBcs( data, ), bcs: AccessRecord.bcs, fromJSONField: (field: any) => AccessRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AccessRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AccessRecord.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AccessRecord.fetch( client, id, ), new: ( fields: AccessRecordFields, ) => { return new AccessRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AccessRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AccessRecord>> { return phantom(AccessRecord.reified( )); } static get p() { return AccessRecord.phantom() }

 static get bcs() { return bcs.struct("AccessRecord", {

 subscriber: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), subscribed_to: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), is_active: bcs.bool(), init_timestamp: bcs.u64(), access_type: bcs.u8(), access_cost: bcs.u64(), next_payment_timestamp: bcs.u64(), total_paid: bcs.u64(), to_unsubscribe: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): AccessRecord { return AccessRecord.reified( ).new( { subscriber: decodeFromFields("address", fields.subscriber), subscribedTo: decodeFromFields("address", fields.subscribed_to), isActive: decodeFromFields("bool", fields.is_active), initTimestamp: decodeFromFields("u64", fields.init_timestamp), accessType: decodeFromFields("u8", fields.access_type), accessCost: decodeFromFields("u64", fields.access_cost), nextPaymentTimestamp: decodeFromFields("u64", fields.next_payment_timestamp), totalPaid: decodeFromFields("u64", fields.total_paid), toUnsubscribe: decodeFromFields("bool", fields.to_unsubscribe) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AccessRecord { if (!isAccessRecord(item.type)) { throw new Error("not a AccessRecord type");

 }

 return AccessRecord.reified( ).new( { subscriber: decodeFromFieldsWithTypes("address", item.fields.subscriber), subscribedTo: decodeFromFieldsWithTypes("address", item.fields.subscribed_to), isActive: decodeFromFieldsWithTypes("bool", item.fields.is_active), initTimestamp: decodeFromFieldsWithTypes("u64", item.fields.init_timestamp), accessType: decodeFromFieldsWithTypes("u8", item.fields.access_type), accessCost: decodeFromFieldsWithTypes("u64", item.fields.access_cost), nextPaymentTimestamp: decodeFromFieldsWithTypes("u64", item.fields.next_payment_timestamp), totalPaid: decodeFromFieldsWithTypes("u64", item.fields.total_paid), toUnsubscribe: decodeFromFieldsWithTypes("bool", item.fields.to_unsubscribe) } ) }

 static fromBcs( data: Uint8Array ): AccessRecord { return AccessRecord.fromFields( AccessRecord.bcs.parse(data) ) }

 toJSONField() { return {

 subscriber: this.subscriber,subscribedTo: this.subscribedTo,isActive: this.isActive,initTimestamp: this.initTimestamp.toString(),accessType: this.accessType,accessCost: this.accessCost.toString(),nextPaymentTimestamp: this.nextPaymentTimestamp.toString(),totalPaid: this.totalPaid.toString(),toUnsubscribe: this.toUnsubscribe,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AccessRecord { return AccessRecord.reified( ).new( { subscriber: decodeFromJSONField("address", field.subscriber), subscribedTo: decodeFromJSONField("address", field.subscribedTo), isActive: decodeFromJSONField("bool", field.isActive), initTimestamp: decodeFromJSONField("u64", field.initTimestamp), accessType: decodeFromJSONField("u8", field.accessType), accessCost: decodeFromJSONField("u64", field.accessCost), nextPaymentTimestamp: decodeFromJSONField("u64", field.nextPaymentTimestamp), totalPaid: decodeFromJSONField("u64", field.totalPaid), toUnsubscribe: decodeFromJSONField("bool", field.toUnsubscribe) } ) }

 static fromJSON( json: Record<string, any> ): AccessRecord { if (json.$typeName !== AccessRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AccessRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AccessRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAccessRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AccessRecord object`); } return AccessRecord.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AccessRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AccessRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAccessRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AccessRecord object`); }
 return AccessRecord.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AccessRecordDestroyed =============================== */

export function isAccessRecordDestroyed(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::AccessRecordDestroyed"; }

export interface AccessRecordDestroyedFields { subscriberProfile: ToField<"address">; subscribedToProfile: ToField<"address">; initTimestamp: ToField<"u64">; totalPaid: ToField<"u64"> }

export type AccessRecordDestroyedReified = Reified< AccessRecordDestroyed, AccessRecordDestroyedFields >;

export class AccessRecordDestroyed implements StructClass { static readonly $typeName = "0x0::hive_profile::AccessRecordDestroyed"; static readonly $numTypeParams = 0;

 readonly $typeName = AccessRecordDestroyed.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::AccessRecordDestroyed";

 readonly $typeArgs: [];

 readonly subscriberProfile: ToField<"address">; readonly subscribedToProfile: ToField<"address">; readonly initTimestamp: ToField<"u64">; readonly totalPaid: ToField<"u64">

 private constructor(typeArgs: [], fields: AccessRecordDestroyedFields, ) { this.$fullTypeName = composeSuiType( AccessRecordDestroyed.$typeName, ...typeArgs ) as "0x0::hive_profile::AccessRecordDestroyed"; this.$typeArgs = typeArgs;

 this.subscriberProfile = fields.subscriberProfile;; this.subscribedToProfile = fields.subscribedToProfile;; this.initTimestamp = fields.initTimestamp;; this.totalPaid = fields.totalPaid; }

 static reified( ): AccessRecordDestroyedReified { return { typeName: AccessRecordDestroyed.$typeName, fullTypeName: composeSuiType( AccessRecordDestroyed.$typeName, ...[] ) as "0x0::hive_profile::AccessRecordDestroyed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AccessRecordDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AccessRecordDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AccessRecordDestroyed.fromBcs( data, ), bcs: AccessRecordDestroyed.bcs, fromJSONField: (field: any) => AccessRecordDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AccessRecordDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AccessRecordDestroyed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AccessRecordDestroyed.fetch( client, id, ), new: ( fields: AccessRecordDestroyedFields, ) => { return new AccessRecordDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AccessRecordDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AccessRecordDestroyed>> { return phantom(AccessRecordDestroyed.reified( )); } static get p() { return AccessRecordDestroyed.phantom() }

 static get bcs() { return bcs.struct("AccessRecordDestroyed", {

 subscriber_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), subscribed_to_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), init_timestamp: bcs.u64(), total_paid: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): AccessRecordDestroyed { return AccessRecordDestroyed.reified( ).new( { subscriberProfile: decodeFromFields("address", fields.subscriber_profile), subscribedToProfile: decodeFromFields("address", fields.subscribed_to_profile), initTimestamp: decodeFromFields("u64", fields.init_timestamp), totalPaid: decodeFromFields("u64", fields.total_paid) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AccessRecordDestroyed { if (!isAccessRecordDestroyed(item.type)) { throw new Error("not a AccessRecordDestroyed type");

 }

 return AccessRecordDestroyed.reified( ).new( { subscriberProfile: decodeFromFieldsWithTypes("address", item.fields.subscriber_profile), subscribedToProfile: decodeFromFieldsWithTypes("address", item.fields.subscribed_to_profile), initTimestamp: decodeFromFieldsWithTypes("u64", item.fields.init_timestamp), totalPaid: decodeFromFieldsWithTypes("u64", item.fields.total_paid) } ) }

 static fromBcs( data: Uint8Array ): AccessRecordDestroyed { return AccessRecordDestroyed.fromFields( AccessRecordDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 subscriberProfile: this.subscriberProfile,subscribedToProfile: this.subscribedToProfile,initTimestamp: this.initTimestamp.toString(),totalPaid: this.totalPaid.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AccessRecordDestroyed { return AccessRecordDestroyed.reified( ).new( { subscriberProfile: decodeFromJSONField("address", field.subscriberProfile), subscribedToProfile: decodeFromJSONField("address", field.subscribedToProfile), initTimestamp: decodeFromJSONField("u64", field.initTimestamp), totalPaid: decodeFromJSONField("u64", field.totalPaid) } ) }

 static fromJSON( json: Record<string, any> ): AccessRecordDestroyed { if (json.$typeName !== AccessRecordDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AccessRecordDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AccessRecordDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAccessRecordDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AccessRecordDestroyed object`); } return AccessRecordDestroyed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AccessRecordDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AccessRecordDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAccessRecordDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AccessRecordDestroyed object`); }
 return AccessRecordDestroyed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AccessTypeSwitchedToNewPlan =============================== */

export function isAccessTypeSwitchedToNewPlan(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::AccessTypeSwitchedToNewPlan"; }

export interface AccessTypeSwitchedToNewPlanFields { subscriberProfileAddr: ToField<"address">; hiveOwnerProfile: ToField<"address">; subscriberUsername: ToField<String>; hiveOwnerUsername: ToField<String>; newAccessType: ToField<"u8">; newAccessCost: ToField<"u64">; subscriptionPriceToPay: ToField<"u64">; hivePaidForSwitch: ToField<"u64"> }

export type AccessTypeSwitchedToNewPlanReified = Reified< AccessTypeSwitchedToNewPlan, AccessTypeSwitchedToNewPlanFields >;

export class AccessTypeSwitchedToNewPlan implements StructClass { static readonly $typeName = "0x0::hive_profile::AccessTypeSwitchedToNewPlan"; static readonly $numTypeParams = 0;

 readonly $typeName = AccessTypeSwitchedToNewPlan.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::AccessTypeSwitchedToNewPlan";

 readonly $typeArgs: [];

 readonly subscriberProfileAddr: ToField<"address">; readonly hiveOwnerProfile: ToField<"address">; readonly subscriberUsername: ToField<String>; readonly hiveOwnerUsername: ToField<String>; readonly newAccessType: ToField<"u8">; readonly newAccessCost: ToField<"u64">; readonly subscriptionPriceToPay: ToField<"u64">; readonly hivePaidForSwitch: ToField<"u64">

 private constructor(typeArgs: [], fields: AccessTypeSwitchedToNewPlanFields, ) { this.$fullTypeName = composeSuiType( AccessTypeSwitchedToNewPlan.$typeName, ...typeArgs ) as "0x0::hive_profile::AccessTypeSwitchedToNewPlan"; this.$typeArgs = typeArgs;

 this.subscriberProfileAddr = fields.subscriberProfileAddr;; this.hiveOwnerProfile = fields.hiveOwnerProfile;; this.subscriberUsername = fields.subscriberUsername;; this.hiveOwnerUsername = fields.hiveOwnerUsername;; this.newAccessType = fields.newAccessType;; this.newAccessCost = fields.newAccessCost;; this.subscriptionPriceToPay = fields.subscriptionPriceToPay;; this.hivePaidForSwitch = fields.hivePaidForSwitch; }

 static reified( ): AccessTypeSwitchedToNewPlanReified { return { typeName: AccessTypeSwitchedToNewPlan.$typeName, fullTypeName: composeSuiType( AccessTypeSwitchedToNewPlan.$typeName, ...[] ) as "0x0::hive_profile::AccessTypeSwitchedToNewPlan", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AccessTypeSwitchedToNewPlan.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AccessTypeSwitchedToNewPlan.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AccessTypeSwitchedToNewPlan.fromBcs( data, ), bcs: AccessTypeSwitchedToNewPlan.bcs, fromJSONField: (field: any) => AccessTypeSwitchedToNewPlan.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AccessTypeSwitchedToNewPlan.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AccessTypeSwitchedToNewPlan.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AccessTypeSwitchedToNewPlan.fetch( client, id, ), new: ( fields: AccessTypeSwitchedToNewPlanFields, ) => { return new AccessTypeSwitchedToNewPlan( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AccessTypeSwitchedToNewPlan.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AccessTypeSwitchedToNewPlan>> { return phantom(AccessTypeSwitchedToNewPlan.reified( )); } static get p() { return AccessTypeSwitchedToNewPlan.phantom() }

 static get bcs() { return bcs.struct("AccessTypeSwitchedToNewPlan", {

 subscriber_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), hive_owner_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), subscriber_username: String.bcs, hive_owner_username: String.bcs, new_access_type: bcs.u8(), new_access_cost: bcs.u64(), subscription_price_to_pay: bcs.u64(), hive_paid_for_switch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): AccessTypeSwitchedToNewPlan { return AccessTypeSwitchedToNewPlan.reified( ).new( { subscriberProfileAddr: decodeFromFields("address", fields.subscriber_profile_addr), hiveOwnerProfile: decodeFromFields("address", fields.hive_owner_profile), subscriberUsername: decodeFromFields(String.reified(), fields.subscriber_username), hiveOwnerUsername: decodeFromFields(String.reified(), fields.hive_owner_username), newAccessType: decodeFromFields("u8", fields.new_access_type), newAccessCost: decodeFromFields("u64", fields.new_access_cost), subscriptionPriceToPay: decodeFromFields("u64", fields.subscription_price_to_pay), hivePaidForSwitch: decodeFromFields("u64", fields.hive_paid_for_switch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AccessTypeSwitchedToNewPlan { if (!isAccessTypeSwitchedToNewPlan(item.type)) { throw new Error("not a AccessTypeSwitchedToNewPlan type");

 }

 return AccessTypeSwitchedToNewPlan.reified( ).new( { subscriberProfileAddr: decodeFromFieldsWithTypes("address", item.fields.subscriber_profile_addr), hiveOwnerProfile: decodeFromFieldsWithTypes("address", item.fields.hive_owner_profile), subscriberUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.subscriber_username), hiveOwnerUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.hive_owner_username), newAccessType: decodeFromFieldsWithTypes("u8", item.fields.new_access_type), newAccessCost: decodeFromFieldsWithTypes("u64", item.fields.new_access_cost), subscriptionPriceToPay: decodeFromFieldsWithTypes("u64", item.fields.subscription_price_to_pay), hivePaidForSwitch: decodeFromFieldsWithTypes("u64", item.fields.hive_paid_for_switch) } ) }

 static fromBcs( data: Uint8Array ): AccessTypeSwitchedToNewPlan { return AccessTypeSwitchedToNewPlan.fromFields( AccessTypeSwitchedToNewPlan.bcs.parse(data) ) }

 toJSONField() { return {

 subscriberProfileAddr: this.subscriberProfileAddr,hiveOwnerProfile: this.hiveOwnerProfile,subscriberUsername: this.subscriberUsername,hiveOwnerUsername: this.hiveOwnerUsername,newAccessType: this.newAccessType,newAccessCost: this.newAccessCost.toString(),subscriptionPriceToPay: this.subscriptionPriceToPay.toString(),hivePaidForSwitch: this.hivePaidForSwitch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AccessTypeSwitchedToNewPlan { return AccessTypeSwitchedToNewPlan.reified( ).new( { subscriberProfileAddr: decodeFromJSONField("address", field.subscriberProfileAddr), hiveOwnerProfile: decodeFromJSONField("address", field.hiveOwnerProfile), subscriberUsername: decodeFromJSONField(String.reified(), field.subscriberUsername), hiveOwnerUsername: decodeFromJSONField(String.reified(), field.hiveOwnerUsername), newAccessType: decodeFromJSONField("u8", field.newAccessType), newAccessCost: decodeFromJSONField("u64", field.newAccessCost), subscriptionPriceToPay: decodeFromJSONField("u64", field.subscriptionPriceToPay), hivePaidForSwitch: decodeFromJSONField("u64", field.hivePaidForSwitch) } ) }

 static fromJSON( json: Record<string, any> ): AccessTypeSwitchedToNewPlan { if (json.$typeName !== AccessTypeSwitchedToNewPlan.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AccessTypeSwitchedToNewPlan.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AccessTypeSwitchedToNewPlan { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAccessTypeSwitchedToNewPlan(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AccessTypeSwitchedToNewPlan object`); } return AccessTypeSwitchedToNewPlan.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AccessTypeSwitchedToNewPlan> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AccessTypeSwitchedToNewPlan object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAccessTypeSwitchedToNewPlan(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AccessTypeSwitchedToNewPlan object`); }
 return AccessTypeSwitchedToNewPlan.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AddedNewUpgradeForVersion =============================== */

export function isAddedNewUpgradeForVersion(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::AddedNewUpgradeForVersion"; }

export interface AddedNewUpgradeForVersionFields { profileAddr: ToField<"address">; collectionName: ToField<String>; version: ToField<"u64">; newImgUrl: ToField<String>; upgradeTraitsList: ToField<Vector<String>>; upgradePromptsList: ToField<Vector<String>>; upgradeAccess: ToField<"u8">; upgradePrice: ToField<"u64"> }

export type AddedNewUpgradeForVersionReified = Reified< AddedNewUpgradeForVersion, AddedNewUpgradeForVersionFields >;

export class AddedNewUpgradeForVersion implements StructClass { static readonly $typeName = "0x0::hive_profile::AddedNewUpgradeForVersion"; static readonly $numTypeParams = 0;

 readonly $typeName = AddedNewUpgradeForVersion.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::AddedNewUpgradeForVersion";

 readonly $typeArgs: [];

 readonly profileAddr: ToField<"address">; readonly collectionName: ToField<String>; readonly version: ToField<"u64">; readonly newImgUrl: ToField<String>; readonly upgradeTraitsList: ToField<Vector<String>>; readonly upgradePromptsList: ToField<Vector<String>>; readonly upgradeAccess: ToField<"u8">; readonly upgradePrice: ToField<"u64">

 private constructor(typeArgs: [], fields: AddedNewUpgradeForVersionFields, ) { this.$fullTypeName = composeSuiType( AddedNewUpgradeForVersion.$typeName, ...typeArgs ) as "0x0::hive_profile::AddedNewUpgradeForVersion"; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.collectionName = fields.collectionName;; this.version = fields.version;; this.newImgUrl = fields.newImgUrl;; this.upgradeTraitsList = fields.upgradeTraitsList;; this.upgradePromptsList = fields.upgradePromptsList;; this.upgradeAccess = fields.upgradeAccess;; this.upgradePrice = fields.upgradePrice; }

 static reified( ): AddedNewUpgradeForVersionReified { return { typeName: AddedNewUpgradeForVersion.$typeName, fullTypeName: composeSuiType( AddedNewUpgradeForVersion.$typeName, ...[] ) as "0x0::hive_profile::AddedNewUpgradeForVersion", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AddedNewUpgradeForVersion.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AddedNewUpgradeForVersion.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AddedNewUpgradeForVersion.fromBcs( data, ), bcs: AddedNewUpgradeForVersion.bcs, fromJSONField: (field: any) => AddedNewUpgradeForVersion.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AddedNewUpgradeForVersion.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AddedNewUpgradeForVersion.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AddedNewUpgradeForVersion.fetch( client, id, ), new: ( fields: AddedNewUpgradeForVersionFields, ) => { return new AddedNewUpgradeForVersion( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AddedNewUpgradeForVersion.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AddedNewUpgradeForVersion>> { return phantom(AddedNewUpgradeForVersion.reified( )); } static get p() { return AddedNewUpgradeForVersion.phantom() }

 static get bcs() { return bcs.struct("AddedNewUpgradeForVersion", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), collection_name: String.bcs, version: bcs.u64(), new_img_url: String.bcs, upgrade_traits_list: bcs.vector(String.bcs), upgrade_prompts_list: bcs.vector(String.bcs), upgrade_access: bcs.u8(), upgrade_price: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): AddedNewUpgradeForVersion { return AddedNewUpgradeForVersion.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), collectionName: decodeFromFields(String.reified(), fields.collection_name), version: decodeFromFields("u64", fields.version), newImgUrl: decodeFromFields(String.reified(), fields.new_img_url), upgradeTraitsList: decodeFromFields(reified.vector(String.reified()), fields.upgrade_traits_list), upgradePromptsList: decodeFromFields(reified.vector(String.reified()), fields.upgrade_prompts_list), upgradeAccess: decodeFromFields("u8", fields.upgrade_access), upgradePrice: decodeFromFields("u64", fields.upgrade_price) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AddedNewUpgradeForVersion { if (!isAddedNewUpgradeForVersion(item.type)) { throw new Error("not a AddedNewUpgradeForVersion type");

 }

 return AddedNewUpgradeForVersion.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), version: decodeFromFieldsWithTypes("u64", item.fields.version), newImgUrl: decodeFromFieldsWithTypes(String.reified(), item.fields.new_img_url), upgradeTraitsList: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.upgrade_traits_list), upgradePromptsList: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.upgrade_prompts_list), upgradeAccess: decodeFromFieldsWithTypes("u8", item.fields.upgrade_access), upgradePrice: decodeFromFieldsWithTypes("u64", item.fields.upgrade_price) } ) }

 static fromBcs( data: Uint8Array ): AddedNewUpgradeForVersion { return AddedNewUpgradeForVersion.fromFields( AddedNewUpgradeForVersion.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,collectionName: this.collectionName,version: this.version.toString(),newImgUrl: this.newImgUrl,upgradeTraitsList: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.upgradeTraitsList),upgradePromptsList: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.upgradePromptsList),upgradeAccess: this.upgradeAccess,upgradePrice: this.upgradePrice.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AddedNewUpgradeForVersion { return AddedNewUpgradeForVersion.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), collectionName: decodeFromJSONField(String.reified(), field.collectionName), version: decodeFromJSONField("u64", field.version), newImgUrl: decodeFromJSONField(String.reified(), field.newImgUrl), upgradeTraitsList: decodeFromJSONField(reified.vector(String.reified()), field.upgradeTraitsList), upgradePromptsList: decodeFromJSONField(reified.vector(String.reified()), field.upgradePromptsList), upgradeAccess: decodeFromJSONField("u8", field.upgradeAccess), upgradePrice: decodeFromJSONField("u64", field.upgradePrice) } ) }

 static fromJSON( json: Record<string, any> ): AddedNewUpgradeForVersion { if (json.$typeName !== AddedNewUpgradeForVersion.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AddedNewUpgradeForVersion.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AddedNewUpgradeForVersion { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAddedNewUpgradeForVersion(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AddedNewUpgradeForVersion object`); } return AddedNewUpgradeForVersion.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AddedNewUpgradeForVersion> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AddedNewUpgradeForVersion object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAddedNewUpgradeForVersion(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AddedNewUpgradeForVersion object`); }
 return AddedNewUpgradeForVersion.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AppAddedToHiveStore =============================== */

export function isAppAddedToHiveStore(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::AppAddedToHiveStore"; }

export interface AppAddedToHiveStoreFields { capabilityAddr: ToField<"address">; appName: ToField<String1>; onlyOwnerCanAddApp: ToField<"bool">; onlyOwnerCanAccessApp: ToField<"bool">; onlyOwnerCanRemoveApp: ToField<"bool"> }

export type AppAddedToHiveStoreReified = Reified< AppAddedToHiveStore, AppAddedToHiveStoreFields >;

export class AppAddedToHiveStore implements StructClass { static readonly $typeName = "0x0::hive_profile::AppAddedToHiveStore"; static readonly $numTypeParams = 0;

 readonly $typeName = AppAddedToHiveStore.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::AppAddedToHiveStore";

 readonly $typeArgs: [];

 readonly capabilityAddr: ToField<"address">; readonly appName: ToField<String1>; readonly onlyOwnerCanAddApp: ToField<"bool">; readonly onlyOwnerCanAccessApp: ToField<"bool">; readonly onlyOwnerCanRemoveApp: ToField<"bool">

 private constructor(typeArgs: [], fields: AppAddedToHiveStoreFields, ) { this.$fullTypeName = composeSuiType( AppAddedToHiveStore.$typeName, ...typeArgs ) as "0x0::hive_profile::AppAddedToHiveStore"; this.$typeArgs = typeArgs;

 this.capabilityAddr = fields.capabilityAddr;; this.appName = fields.appName;; this.onlyOwnerCanAddApp = fields.onlyOwnerCanAddApp;; this.onlyOwnerCanAccessApp = fields.onlyOwnerCanAccessApp;; this.onlyOwnerCanRemoveApp = fields.onlyOwnerCanRemoveApp; }

 static reified( ): AppAddedToHiveStoreReified { return { typeName: AppAddedToHiveStore.$typeName, fullTypeName: composeSuiType( AppAddedToHiveStore.$typeName, ...[] ) as "0x0::hive_profile::AppAddedToHiveStore", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AppAddedToHiveStore.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AppAddedToHiveStore.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AppAddedToHiveStore.fromBcs( data, ), bcs: AppAddedToHiveStore.bcs, fromJSONField: (field: any) => AppAddedToHiveStore.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AppAddedToHiveStore.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AppAddedToHiveStore.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AppAddedToHiveStore.fetch( client, id, ), new: ( fields: AppAddedToHiveStoreFields, ) => { return new AppAddedToHiveStore( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AppAddedToHiveStore.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AppAddedToHiveStore>> { return phantom(AppAddedToHiveStore.reified( )); } static get p() { return AppAddedToHiveStore.phantom() }

 static get bcs() { return bcs.struct("AppAddedToHiveStore", {

 capability_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), app_name: String1.bcs, only_owner_can_add_app: bcs.bool(), only_owner_can_access_app: bcs.bool(), only_owner_can_remove_app: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): AppAddedToHiveStore { return AppAddedToHiveStore.reified( ).new( { capabilityAddr: decodeFromFields("address", fields.capability_addr), appName: decodeFromFields(String1.reified(), fields.app_name), onlyOwnerCanAddApp: decodeFromFields("bool", fields.only_owner_can_add_app), onlyOwnerCanAccessApp: decodeFromFields("bool", fields.only_owner_can_access_app), onlyOwnerCanRemoveApp: decodeFromFields("bool", fields.only_owner_can_remove_app) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AppAddedToHiveStore { if (!isAppAddedToHiveStore(item.type)) { throw new Error("not a AppAddedToHiveStore type");

 }

 return AppAddedToHiveStore.reified( ).new( { capabilityAddr: decodeFromFieldsWithTypes("address", item.fields.capability_addr), appName: decodeFromFieldsWithTypes(String1.reified(), item.fields.app_name), onlyOwnerCanAddApp: decodeFromFieldsWithTypes("bool", item.fields.only_owner_can_add_app), onlyOwnerCanAccessApp: decodeFromFieldsWithTypes("bool", item.fields.only_owner_can_access_app), onlyOwnerCanRemoveApp: decodeFromFieldsWithTypes("bool", item.fields.only_owner_can_remove_app) } ) }

 static fromBcs( data: Uint8Array ): AppAddedToHiveStore { return AppAddedToHiveStore.fromFields( AppAddedToHiveStore.bcs.parse(data) ) }

 toJSONField() { return {

 capabilityAddr: this.capabilityAddr,appName: this.appName,onlyOwnerCanAddApp: this.onlyOwnerCanAddApp,onlyOwnerCanAccessApp: this.onlyOwnerCanAccessApp,onlyOwnerCanRemoveApp: this.onlyOwnerCanRemoveApp,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AppAddedToHiveStore { return AppAddedToHiveStore.reified( ).new( { capabilityAddr: decodeFromJSONField("address", field.capabilityAddr), appName: decodeFromJSONField(String1.reified(), field.appName), onlyOwnerCanAddApp: decodeFromJSONField("bool", field.onlyOwnerCanAddApp), onlyOwnerCanAccessApp: decodeFromJSONField("bool", field.onlyOwnerCanAccessApp), onlyOwnerCanRemoveApp: decodeFromJSONField("bool", field.onlyOwnerCanRemoveApp) } ) }

 static fromJSON( json: Record<string, any> ): AppAddedToHiveStore { if (json.$typeName !== AppAddedToHiveStore.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AppAddedToHiveStore.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AppAddedToHiveStore { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAppAddedToHiveStore(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AppAddedToHiveStore object`); } return AppAddedToHiveStore.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AppAddedToHiveStore> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AppAddedToHiveStore object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAppAddedToHiveStore(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AppAddedToHiveStore object`); }
 return AppAddedToHiveStore.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AppInstalledByProfile =============================== */

export function isAppInstalledByProfile(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::AppInstalledByProfile"; }

export interface AppInstalledByProfileFields { profileAddr: ToField<"address">; username: ToField<String1>; appName: ToField<String1> }

export type AppInstalledByProfileReified = Reified< AppInstalledByProfile, AppInstalledByProfileFields >;

export class AppInstalledByProfile implements StructClass { static readonly $typeName = "0x0::hive_profile::AppInstalledByProfile"; static readonly $numTypeParams = 0;

 readonly $typeName = AppInstalledByProfile.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::AppInstalledByProfile";

 readonly $typeArgs: [];

 readonly profileAddr: ToField<"address">; readonly username: ToField<String1>; readonly appName: ToField<String1>

 private constructor(typeArgs: [], fields: AppInstalledByProfileFields, ) { this.$fullTypeName = composeSuiType( AppInstalledByProfile.$typeName, ...typeArgs ) as "0x0::hive_profile::AppInstalledByProfile"; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.appName = fields.appName; }

 static reified( ): AppInstalledByProfileReified { return { typeName: AppInstalledByProfile.$typeName, fullTypeName: composeSuiType( AppInstalledByProfile.$typeName, ...[] ) as "0x0::hive_profile::AppInstalledByProfile", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AppInstalledByProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AppInstalledByProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AppInstalledByProfile.fromBcs( data, ), bcs: AppInstalledByProfile.bcs, fromJSONField: (field: any) => AppInstalledByProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AppInstalledByProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AppInstalledByProfile.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AppInstalledByProfile.fetch( client, id, ), new: ( fields: AppInstalledByProfileFields, ) => { return new AppInstalledByProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AppInstalledByProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AppInstalledByProfile>> { return phantom(AppInstalledByProfile.reified( )); } static get p() { return AppInstalledByProfile.phantom() }

 static get bcs() { return bcs.struct("AppInstalledByProfile", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String1.bcs, app_name: String1.bcs

}) };

 static fromFields( fields: Record<string, any> ): AppInstalledByProfile { return AppInstalledByProfile.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String1.reified(), fields.username), appName: decodeFromFields(String1.reified(), fields.app_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AppInstalledByProfile { if (!isAppInstalledByProfile(item.type)) { throw new Error("not a AppInstalledByProfile type");

 }

 return AppInstalledByProfile.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), appName: decodeFromFieldsWithTypes(String1.reified(), item.fields.app_name) } ) }

 static fromBcs( data: Uint8Array ): AppInstalledByProfile { return AppInstalledByProfile.fromFields( AppInstalledByProfile.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,username: this.username,appName: this.appName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AppInstalledByProfile { return AppInstalledByProfile.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String1.reified(), field.username), appName: decodeFromJSONField(String1.reified(), field.appName) } ) }

 static fromJSON( json: Record<string, any> ): AppInstalledByProfile { if (json.$typeName !== AppInstalledByProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AppInstalledByProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AppInstalledByProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAppInstalledByProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AppInstalledByProfile object`); } return AppInstalledByProfile.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AppInstalledByProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AppInstalledByProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAppInstalledByProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AppInstalledByProfile object`); }
 return AppInstalledByProfile.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AssetPowerUpdated =============================== */

export function isAssetPowerUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::AssetPowerUpdated"; }

export interface AssetPowerUpdatedFields { version: ToField<"u64">; addPower: ToField<"u64">; newAssetPower: ToField<"u64"> }

export type AssetPowerUpdatedReified = Reified< AssetPowerUpdated, AssetPowerUpdatedFields >;

export class AssetPowerUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::AssetPowerUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = AssetPowerUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::AssetPowerUpdated";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly addPower: ToField<"u64">; readonly newAssetPower: ToField<"u64">

 private constructor(typeArgs: [], fields: AssetPowerUpdatedFields, ) { this.$fullTypeName = composeSuiType( AssetPowerUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::AssetPowerUpdated"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.addPower = fields.addPower;; this.newAssetPower = fields.newAssetPower; }

 static reified( ): AssetPowerUpdatedReified { return { typeName: AssetPowerUpdated.$typeName, fullTypeName: composeSuiType( AssetPowerUpdated.$typeName, ...[] ) as "0x0::hive_profile::AssetPowerUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AssetPowerUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AssetPowerUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AssetPowerUpdated.fromBcs( data, ), bcs: AssetPowerUpdated.bcs, fromJSONField: (field: any) => AssetPowerUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AssetPowerUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AssetPowerUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AssetPowerUpdated.fetch( client, id, ), new: ( fields: AssetPowerUpdatedFields, ) => { return new AssetPowerUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AssetPowerUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AssetPowerUpdated>> { return phantom(AssetPowerUpdated.reified( )); } static get p() { return AssetPowerUpdated.phantom() }

 static get bcs() { return bcs.struct("AssetPowerUpdated", {

 version: bcs.u64(), add_power: bcs.u64(), new_asset_power: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): AssetPowerUpdated { return AssetPowerUpdated.reified( ).new( { version: decodeFromFields("u64", fields.version), addPower: decodeFromFields("u64", fields.add_power), newAssetPower: decodeFromFields("u64", fields.new_asset_power) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AssetPowerUpdated { if (!isAssetPowerUpdated(item.type)) { throw new Error("not a AssetPowerUpdated type");

 }

 return AssetPowerUpdated.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), addPower: decodeFromFieldsWithTypes("u64", item.fields.add_power), newAssetPower: decodeFromFieldsWithTypes("u64", item.fields.new_asset_power) } ) }

 static fromBcs( data: Uint8Array ): AssetPowerUpdated { return AssetPowerUpdated.fromFields( AssetPowerUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),addPower: this.addPower.toString(),newAssetPower: this.newAssetPower.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AssetPowerUpdated { return AssetPowerUpdated.reified( ).new( { version: decodeFromJSONField("u64", field.version), addPower: decodeFromJSONField("u64", field.addPower), newAssetPower: decodeFromJSONField("u64", field.newAssetPower) } ) }

 static fromJSON( json: Record<string, any> ): AssetPowerUpdated { if (json.$typeName !== AssetPowerUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AssetPowerUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AssetPowerUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAssetPowerUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AssetPowerUpdated object`); } return AssetPowerUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AssetPowerUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AssetPowerUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAssetPowerUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AssetPowerUpdated object`); }
 return AssetPowerUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AssetUpgrade =============================== */

export function isAssetUpgrade(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::AssetUpgrade"; }

export interface AssetUpgradeFields { upgradePrice: ToField<"u64">; upgradeAccess: ToField<"u8">; upgradeImgUrl: ToField<Url>; upgradeTraitsList: ToField<Vector<String>>; upgradePrompts: ToField<Table<ToPhantom<String>, ToPhantom<String>>> }

export type AssetUpgradeReified = Reified< AssetUpgrade, AssetUpgradeFields >;

export class AssetUpgrade implements StructClass { static readonly $typeName = "0x0::hive_profile::AssetUpgrade"; static readonly $numTypeParams = 0;

 readonly $typeName = AssetUpgrade.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::AssetUpgrade";

 readonly $typeArgs: [];

 readonly upgradePrice: ToField<"u64">; readonly upgradeAccess: ToField<"u8">; readonly upgradeImgUrl: ToField<Url>; readonly upgradeTraitsList: ToField<Vector<String>>; readonly upgradePrompts: ToField<Table<ToPhantom<String>, ToPhantom<String>>>

 private constructor(typeArgs: [], fields: AssetUpgradeFields, ) { this.$fullTypeName = composeSuiType( AssetUpgrade.$typeName, ...typeArgs ) as "0x0::hive_profile::AssetUpgrade"; this.$typeArgs = typeArgs;

 this.upgradePrice = fields.upgradePrice;; this.upgradeAccess = fields.upgradeAccess;; this.upgradeImgUrl = fields.upgradeImgUrl;; this.upgradeTraitsList = fields.upgradeTraitsList;; this.upgradePrompts = fields.upgradePrompts; }

 static reified( ): AssetUpgradeReified { return { typeName: AssetUpgrade.$typeName, fullTypeName: composeSuiType( AssetUpgrade.$typeName, ...[] ) as "0x0::hive_profile::AssetUpgrade", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AssetUpgrade.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AssetUpgrade.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AssetUpgrade.fromBcs( data, ), bcs: AssetUpgrade.bcs, fromJSONField: (field: any) => AssetUpgrade.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AssetUpgrade.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AssetUpgrade.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AssetUpgrade.fetch( client, id, ), new: ( fields: AssetUpgradeFields, ) => { return new AssetUpgrade( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AssetUpgrade.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AssetUpgrade>> { return phantom(AssetUpgrade.reified( )); } static get p() { return AssetUpgrade.phantom() }

 static get bcs() { return bcs.struct("AssetUpgrade", {

 upgrade_price: bcs.u64(), upgrade_access: bcs.u8(), upgrade_img_url: Url.bcs, upgrade_traits_list: bcs.vector(String.bcs), upgrade_prompts: Table.bcs

}) };

 static fromFields( fields: Record<string, any> ): AssetUpgrade { return AssetUpgrade.reified( ).new( { upgradePrice: decodeFromFields("u64", fields.upgrade_price), upgradeAccess: decodeFromFields("u8", fields.upgrade_access), upgradeImgUrl: decodeFromFields(Url.reified(), fields.upgrade_img_url), upgradeTraitsList: decodeFromFields(reified.vector(String.reified()), fields.upgrade_traits_list), upgradePrompts: decodeFromFields(Table.reified(reified.phantom(String.reified()), reified.phantom(String.reified())), fields.upgrade_prompts) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AssetUpgrade { if (!isAssetUpgrade(item.type)) { throw new Error("not a AssetUpgrade type");

 }

 return AssetUpgrade.reified( ).new( { upgradePrice: decodeFromFieldsWithTypes("u64", item.fields.upgrade_price), upgradeAccess: decodeFromFieldsWithTypes("u8", item.fields.upgrade_access), upgradeImgUrl: decodeFromFieldsWithTypes(Url.reified(), item.fields.upgrade_img_url), upgradeTraitsList: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.upgrade_traits_list), upgradePrompts: decodeFromFieldsWithTypes(Table.reified(reified.phantom(String.reified()), reified.phantom(String.reified())), item.fields.upgrade_prompts) } ) }

 static fromBcs( data: Uint8Array ): AssetUpgrade { return AssetUpgrade.fromFields( AssetUpgrade.bcs.parse(data) ) }

 toJSONField() { return {

 upgradePrice: this.upgradePrice.toString(),upgradeAccess: this.upgradeAccess,upgradeImgUrl: this.upgradeImgUrl,upgradeTraitsList: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.upgradeTraitsList),upgradePrompts: this.upgradePrompts.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AssetUpgrade { return AssetUpgrade.reified( ).new( { upgradePrice: decodeFromJSONField("u64", field.upgradePrice), upgradeAccess: decodeFromJSONField("u8", field.upgradeAccess), upgradeImgUrl: decodeFromJSONField(Url.reified(), field.upgradeImgUrl), upgradeTraitsList: decodeFromJSONField(reified.vector(String.reified()), field.upgradeTraitsList), upgradePrompts: decodeFromJSONField(Table.reified(reified.phantom(String.reified()), reified.phantom(String.reified())), field.upgradePrompts) } ) }

 static fromJSON( json: Record<string, any> ): AssetUpgrade { if (json.$typeName !== AssetUpgrade.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AssetUpgrade.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AssetUpgrade { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAssetUpgrade(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AssetUpgrade object`); } return AssetUpgrade.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AssetUpgrade> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AssetUpgrade object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAssetUpgrade(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AssetUpgrade object`); }
 return AssetUpgrade.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Bid =============================== */

export function isBid(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x0::hive_profile::Bid<"); }

export interface BidFields<X extends PhantomTypeArgument> { bidderProfile: ToField<"address">; balance: ToField<Balance<X>>; offerHsuiPrice: ToField<"u64">; expirationSec: ToField<"u64">; isListingLive: ToField<"bool">; isValid: ToField<"bool"> }

export type BidReified<X extends PhantomTypeArgument> = Reified< Bid<X>, BidFields<X> >;

export class Bid<X extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x0::hive_profile::Bid"; static readonly $numTypeParams = 1;

 readonly $typeName = Bid.$typeName;

 readonly $fullTypeName: `0x0::hive_profile::Bid<${PhantomToTypeStr<X>}>`;

 readonly $typeArgs: [PhantomToTypeStr<X>];

 readonly bidderProfile: ToField<"address">; readonly balance: ToField<Balance<X>>; readonly offerHsuiPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">; readonly isListingLive: ToField<"bool">; readonly isValid: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: BidFields<X>, ) { this.$fullTypeName = composeSuiType( Bid.$typeName, ...typeArgs ) as `0x0::hive_profile::Bid<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.bidderProfile = fields.bidderProfile;; this.balance = fields.balance;; this.offerHsuiPrice = fields.offerHsuiPrice;; this.expirationSec = fields.expirationSec;; this.isListingLive = fields.isListingLive;; this.isValid = fields.isValid; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): BidReified<ToPhantomTypeArgument<X>> { return { typeName: Bid.$typeName, fullTypeName: composeSuiType( Bid.$typeName, ...[extractType(X)] ) as `0x0::hive_profile::Bid<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => Bid.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Bid.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => Bid.fromBcs( X, data, ), bcs: Bid.bcs, fromJSONField: (field: any) => Bid.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => Bid.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => Bid.fromSuiParsedData( X, content, ), fetch: async (client: SuiClient, id: string) => Bid.fetch( client, X, id, ), new: ( fields: BidFields<ToPhantomTypeArgument<X>>, ) => { return new Bid( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Bid.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<Bid<ToPhantomTypeArgument<X>>>> { return phantom(Bid.reified( X )); } static get p() { return Bid.phantom }

 static get bcs() { return bcs.struct("Bid", {

 bidder_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), balance: Balance.bcs, offer_hsui_price: bcs.u64(), expiration_sec: bcs.u64(), is_listing_live: bcs.bool(), is_valid: bcs.bool()

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): Bid<ToPhantomTypeArgument<X>> { return Bid.reified( typeArg, ).new( { bidderProfile: decodeFromFields("address", fields.bidder_profile), balance: decodeFromFields(Balance.reified(typeArg), fields.balance), offerHsuiPrice: decodeFromFields("u64", fields.offer_hsui_price), expirationSec: decodeFromFields("u64", fields.expiration_sec), isListingLive: decodeFromFields("bool", fields.is_listing_live), isValid: decodeFromFields("bool", fields.is_valid) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): Bid<ToPhantomTypeArgument<X>> { if (!isBid(item.type)) { throw new Error("not a Bid type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Bid.reified( typeArg, ).new( { bidderProfile: decodeFromFieldsWithTypes("address", item.fields.bidder_profile), balance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.balance), offerHsuiPrice: decodeFromFieldsWithTypes("u64", item.fields.offer_hsui_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec), isListingLive: decodeFromFieldsWithTypes("bool", item.fields.is_listing_live), isValid: decodeFromFieldsWithTypes("bool", item.fields.is_valid) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): Bid<ToPhantomTypeArgument<X>> { return Bid.fromFields( typeArg, Bid.bcs.parse(data) ) }

 toJSONField() { return {

 bidderProfile: this.bidderProfile,balance: this.balance.toJSONField(),offerHsuiPrice: this.offerHsuiPrice.toString(),expirationSec: this.expirationSec.toString(),isListingLive: this.isListingLive,isValid: this.isValid,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): Bid<ToPhantomTypeArgument<X>> { return Bid.reified( typeArg, ).new( { bidderProfile: decodeFromJSONField("address", field.bidderProfile), balance: decodeFromJSONField(Balance.reified(typeArg), field.balance), offerHsuiPrice: decodeFromJSONField("u64", field.offerHsuiPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec), isListingLive: decodeFromJSONField("bool", field.isListingLive), isValid: decodeFromJSONField("bool", field.isValid) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): Bid<ToPhantomTypeArgument<X>> { if (json.$typeName !== Bid.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Bid.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Bid.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): Bid<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBid(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Bid object`); } return Bid.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<Bid<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Bid object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBid(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Bid object`); }
 return Bid.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BidCanceled =============================== */

export function isBidCanceled(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::BidCanceled"; }

export interface BidCanceledFields { version: ToField<"u64">; bidderProfile: ToField<"address"> }

export type BidCanceledReified = Reified< BidCanceled, BidCanceledFields >;

export class BidCanceled implements StructClass { static readonly $typeName = "0x0::hive_profile::BidCanceled"; static readonly $numTypeParams = 0;

 readonly $typeName = BidCanceled.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::BidCanceled";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly bidderProfile: ToField<"address">

 private constructor(typeArgs: [], fields: BidCanceledFields, ) { this.$fullTypeName = composeSuiType( BidCanceled.$typeName, ...typeArgs ) as "0x0::hive_profile::BidCanceled"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.bidderProfile = fields.bidderProfile; }

 static reified( ): BidCanceledReified { return { typeName: BidCanceled.$typeName, fullTypeName: composeSuiType( BidCanceled.$typeName, ...[] ) as "0x0::hive_profile::BidCanceled", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidCanceled.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidCanceled.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidCanceled.fromBcs( data, ), bcs: BidCanceled.bcs, fromJSONField: (field: any) => BidCanceled.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidCanceled.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidCanceled.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BidCanceled.fetch( client, id, ), new: ( fields: BidCanceledFields, ) => { return new BidCanceled( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidCanceled.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidCanceled>> { return phantom(BidCanceled.reified( )); } static get p() { return BidCanceled.phantom() }

 static get bcs() { return bcs.struct("BidCanceled", {

 version: bcs.u64(), bidder_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BidCanceled { return BidCanceled.reified( ).new( { version: decodeFromFields("u64", fields.version), bidderProfile: decodeFromFields("address", fields.bidder_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidCanceled { if (!isBidCanceled(item.type)) { throw new Error("not a BidCanceled type");

 }

 return BidCanceled.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), bidderProfile: decodeFromFieldsWithTypes("address", item.fields.bidder_profile) } ) }

 static fromBcs( data: Uint8Array ): BidCanceled { return BidCanceled.fromFields( BidCanceled.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),bidderProfile: this.bidderProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidCanceled { return BidCanceled.reified( ).new( { version: decodeFromJSONField("u64", field.version), bidderProfile: decodeFromJSONField("address", field.bidderProfile) } ) }

 static fromJSON( json: Record<string, any> ): BidCanceled { if (json.$typeName !== BidCanceled.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidCanceled.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidCanceled { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidCanceled(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidCanceled object`); } return BidCanceled.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidCanceled> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidCanceled object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidCanceled(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidCanceled object`); }
 return BidCanceled.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BidDestroyed =============================== */

export function isBidDestroyed(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::BidDestroyed"; }

export interface BidDestroyedFields { assetVersion: ToField<"u64">; bidderProfile: ToField<"address"> }

export type BidDestroyedReified = Reified< BidDestroyed, BidDestroyedFields >;

export class BidDestroyed implements StructClass { static readonly $typeName = "0x0::hive_profile::BidDestroyed"; static readonly $numTypeParams = 0;

 readonly $typeName = BidDestroyed.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::BidDestroyed";

 readonly $typeArgs: [];

 readonly assetVersion: ToField<"u64">; readonly bidderProfile: ToField<"address">

 private constructor(typeArgs: [], fields: BidDestroyedFields, ) { this.$fullTypeName = composeSuiType( BidDestroyed.$typeName, ...typeArgs ) as "0x0::hive_profile::BidDestroyed"; this.$typeArgs = typeArgs;

 this.assetVersion = fields.assetVersion;; this.bidderProfile = fields.bidderProfile; }

 static reified( ): BidDestroyedReified { return { typeName: BidDestroyed.$typeName, fullTypeName: composeSuiType( BidDestroyed.$typeName, ...[] ) as "0x0::hive_profile::BidDestroyed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidDestroyed.fromBcs( data, ), bcs: BidDestroyed.bcs, fromJSONField: (field: any) => BidDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidDestroyed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BidDestroyed.fetch( client, id, ), new: ( fields: BidDestroyedFields, ) => { return new BidDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidDestroyed>> { return phantom(BidDestroyed.reified( )); } static get p() { return BidDestroyed.phantom() }

 static get bcs() { return bcs.struct("BidDestroyed", {

 asset_version: bcs.u64(), bidder_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BidDestroyed { return BidDestroyed.reified( ).new( { assetVersion: decodeFromFields("u64", fields.asset_version), bidderProfile: decodeFromFields("address", fields.bidder_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidDestroyed { if (!isBidDestroyed(item.type)) { throw new Error("not a BidDestroyed type");

 }

 return BidDestroyed.reified( ).new( { assetVersion: decodeFromFieldsWithTypes("u64", item.fields.asset_version), bidderProfile: decodeFromFieldsWithTypes("address", item.fields.bidder_profile) } ) }

 static fromBcs( data: Uint8Array ): BidDestroyed { return BidDestroyed.fromFields( BidDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 assetVersion: this.assetVersion.toString(),bidderProfile: this.bidderProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidDestroyed { return BidDestroyed.reified( ).new( { assetVersion: decodeFromJSONField("u64", field.assetVersion), bidderProfile: decodeFromJSONField("address", field.bidderProfile) } ) }

 static fromJSON( json: Record<string, any> ): BidDestroyed { if (json.$typeName !== BidDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidDestroyed object`); } return BidDestroyed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidDestroyed object`); }
 return BidDestroyed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BidExpired =============================== */

export function isBidExpired(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::BidExpired"; }

export interface BidExpiredFields { version: ToField<"u64">; bidderProfile: ToField<"address"> }

export type BidExpiredReified = Reified< BidExpired, BidExpiredFields >;

export class BidExpired implements StructClass { static readonly $typeName = "0x0::hive_profile::BidExpired"; static readonly $numTypeParams = 0;

 readonly $typeName = BidExpired.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::BidExpired";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly bidderProfile: ToField<"address">

 private constructor(typeArgs: [], fields: BidExpiredFields, ) { this.$fullTypeName = composeSuiType( BidExpired.$typeName, ...typeArgs ) as "0x0::hive_profile::BidExpired"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.bidderProfile = fields.bidderProfile; }

 static reified( ): BidExpiredReified { return { typeName: BidExpired.$typeName, fullTypeName: composeSuiType( BidExpired.$typeName, ...[] ) as "0x0::hive_profile::BidExpired", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidExpired.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidExpired.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidExpired.fromBcs( data, ), bcs: BidExpired.bcs, fromJSONField: (field: any) => BidExpired.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidExpired.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidExpired.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BidExpired.fetch( client, id, ), new: ( fields: BidExpiredFields, ) => { return new BidExpired( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidExpired.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidExpired>> { return phantom(BidExpired.reified( )); } static get p() { return BidExpired.phantom() }

 static get bcs() { return bcs.struct("BidExpired", {

 version: bcs.u64(), bidder_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BidExpired { return BidExpired.reified( ).new( { version: decodeFromFields("u64", fields.version), bidderProfile: decodeFromFields("address", fields.bidder_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidExpired { if (!isBidExpired(item.type)) { throw new Error("not a BidExpired type");

 }

 return BidExpired.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), bidderProfile: decodeFromFieldsWithTypes("address", item.fields.bidder_profile) } ) }

 static fromBcs( data: Uint8Array ): BidExpired { return BidExpired.fromFields( BidExpired.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),bidderProfile: this.bidderProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidExpired { return BidExpired.reified( ).new( { version: decodeFromJSONField("u64", field.version), bidderProfile: decodeFromJSONField("address", field.bidderProfile) } ) }

 static fromJSON( json: Record<string, any> ): BidExpired { if (json.$typeName !== BidExpired.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidExpired.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidExpired { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidExpired(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidExpired object`); } return BidExpired.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidExpired> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidExpired object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidExpired(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidExpired object`); }
 return BidExpired.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BidMarkedInvalid =============================== */

export function isBidMarkedInvalid(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::BidMarkedInvalid"; }

export interface BidMarkedInvalidFields { version: ToField<"u64">; bidderProfile: ToField<"address"> }

export type BidMarkedInvalidReified = Reified< BidMarkedInvalid, BidMarkedInvalidFields >;

export class BidMarkedInvalid implements StructClass { static readonly $typeName = "0x0::hive_profile::BidMarkedInvalid"; static readonly $numTypeParams = 0;

 readonly $typeName = BidMarkedInvalid.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::BidMarkedInvalid";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly bidderProfile: ToField<"address">

 private constructor(typeArgs: [], fields: BidMarkedInvalidFields, ) { this.$fullTypeName = composeSuiType( BidMarkedInvalid.$typeName, ...typeArgs ) as "0x0::hive_profile::BidMarkedInvalid"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.bidderProfile = fields.bidderProfile; }

 static reified( ): BidMarkedInvalidReified { return { typeName: BidMarkedInvalid.$typeName, fullTypeName: composeSuiType( BidMarkedInvalid.$typeName, ...[] ) as "0x0::hive_profile::BidMarkedInvalid", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidMarkedInvalid.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidMarkedInvalid.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidMarkedInvalid.fromBcs( data, ), bcs: BidMarkedInvalid.bcs, fromJSONField: (field: any) => BidMarkedInvalid.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidMarkedInvalid.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidMarkedInvalid.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BidMarkedInvalid.fetch( client, id, ), new: ( fields: BidMarkedInvalidFields, ) => { return new BidMarkedInvalid( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidMarkedInvalid.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidMarkedInvalid>> { return phantom(BidMarkedInvalid.reified( )); } static get p() { return BidMarkedInvalid.phantom() }

 static get bcs() { return bcs.struct("BidMarkedInvalid", {

 version: bcs.u64(), bidder_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): BidMarkedInvalid { return BidMarkedInvalid.reified( ).new( { version: decodeFromFields("u64", fields.version), bidderProfile: decodeFromFields("address", fields.bidder_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidMarkedInvalid { if (!isBidMarkedInvalid(item.type)) { throw new Error("not a BidMarkedInvalid type");

 }

 return BidMarkedInvalid.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), bidderProfile: decodeFromFieldsWithTypes("address", item.fields.bidder_profile) } ) }

 static fromBcs( data: Uint8Array ): BidMarkedInvalid { return BidMarkedInvalid.fromFields( BidMarkedInvalid.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),bidderProfile: this.bidderProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidMarkedInvalid { return BidMarkedInvalid.reified( ).new( { version: decodeFromJSONField("u64", field.version), bidderProfile: decodeFromJSONField("address", field.bidderProfile) } ) }

 static fromJSON( json: Record<string, any> ): BidMarkedInvalid { if (json.$typeName !== BidMarkedInvalid.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidMarkedInvalid.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidMarkedInvalid { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidMarkedInvalid(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidMarkedInvalid object`); } return BidMarkedInvalid.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidMarkedInvalid> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidMarkedInvalid object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidMarkedInvalid(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidMarkedInvalid object`); }
 return BidMarkedInvalid.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BidModified =============================== */

export function isBidModified(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::BidModified"; }

export interface BidModifiedFields { version: ToField<"u64">; bidderProfile: ToField<"address">; offerHsuiPrice: ToField<"u64">; expirationSec: ToField<"u64"> }

export type BidModifiedReified = Reified< BidModified, BidModifiedFields >;

export class BidModified implements StructClass { static readonly $typeName = "0x0::hive_profile::BidModified"; static readonly $numTypeParams = 0;

 readonly $typeName = BidModified.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::BidModified";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly bidderProfile: ToField<"address">; readonly offerHsuiPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: BidModifiedFields, ) { this.$fullTypeName = composeSuiType( BidModified.$typeName, ...typeArgs ) as "0x0::hive_profile::BidModified"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.bidderProfile = fields.bidderProfile;; this.offerHsuiPrice = fields.offerHsuiPrice;; this.expirationSec = fields.expirationSec; }

 static reified( ): BidModifiedReified { return { typeName: BidModified.$typeName, fullTypeName: composeSuiType( BidModified.$typeName, ...[] ) as "0x0::hive_profile::BidModified", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidModified.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidModified.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidModified.fromBcs( data, ), bcs: BidModified.bcs, fromJSONField: (field: any) => BidModified.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidModified.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidModified.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BidModified.fetch( client, id, ), new: ( fields: BidModifiedFields, ) => { return new BidModified( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidModified.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidModified>> { return phantom(BidModified.reified( )); } static get p() { return BidModified.phantom() }

 static get bcs() { return bcs.struct("BidModified", {

 version: bcs.u64(), bidder_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), offer_hsui_price: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BidModified { return BidModified.reified( ).new( { version: decodeFromFields("u64", fields.version), bidderProfile: decodeFromFields("address", fields.bidder_profile), offerHsuiPrice: decodeFromFields("u64", fields.offer_hsui_price), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidModified { if (!isBidModified(item.type)) { throw new Error("not a BidModified type");

 }

 return BidModified.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), bidderProfile: decodeFromFieldsWithTypes("address", item.fields.bidder_profile), offerHsuiPrice: decodeFromFieldsWithTypes("u64", item.fields.offer_hsui_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): BidModified { return BidModified.fromFields( BidModified.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),bidderProfile: this.bidderProfile,offerHsuiPrice: this.offerHsuiPrice.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidModified { return BidModified.reified( ).new( { version: decodeFromJSONField("u64", field.version), bidderProfile: decodeFromJSONField("address", field.bidderProfile), offerHsuiPrice: decodeFromJSONField("u64", field.offerHsuiPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): BidModified { if (json.$typeName !== BidModified.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidModified.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidModified { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidModified(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidModified object`); } return BidModified.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidModified> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidModified object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidModified(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidModified object`); }
 return BidModified.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BidPlaced =============================== */

export function isBidPlaced(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::BidPlaced"; }

export interface BidPlacedFields { bidderProfile: ToField<"address">; username: ToField<String1>; version: ToField<"u64">; offerHsuiPrice: ToField<"u64">; expirationSec: ToField<"u64">; isAssetListed: ToField<"bool"> }

export type BidPlacedReified = Reified< BidPlaced, BidPlacedFields >;

export class BidPlaced implements StructClass { static readonly $typeName = "0x0::hive_profile::BidPlaced"; static readonly $numTypeParams = 0;

 readonly $typeName = BidPlaced.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::BidPlaced";

 readonly $typeArgs: [];

 readonly bidderProfile: ToField<"address">; readonly username: ToField<String1>; readonly version: ToField<"u64">; readonly offerHsuiPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">; readonly isAssetListed: ToField<"bool">

 private constructor(typeArgs: [], fields: BidPlacedFields, ) { this.$fullTypeName = composeSuiType( BidPlaced.$typeName, ...typeArgs ) as "0x0::hive_profile::BidPlaced"; this.$typeArgs = typeArgs;

 this.bidderProfile = fields.bidderProfile;; this.username = fields.username;; this.version = fields.version;; this.offerHsuiPrice = fields.offerHsuiPrice;; this.expirationSec = fields.expirationSec;; this.isAssetListed = fields.isAssetListed; }

 static reified( ): BidPlacedReified { return { typeName: BidPlaced.$typeName, fullTypeName: composeSuiType( BidPlaced.$typeName, ...[] ) as "0x0::hive_profile::BidPlaced", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidPlaced.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidPlaced.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidPlaced.fromBcs( data, ), bcs: BidPlaced.bcs, fromJSONField: (field: any) => BidPlaced.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidPlaced.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidPlaced.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BidPlaced.fetch( client, id, ), new: ( fields: BidPlacedFields, ) => { return new BidPlaced( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidPlaced.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidPlaced>> { return phantom(BidPlaced.reified( )); } static get p() { return BidPlaced.phantom() }

 static get bcs() { return bcs.struct("BidPlaced", {

 bidder_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String1.bcs, version: bcs.u64(), offer_hsui_price: bcs.u64(), expiration_sec: bcs.u64(), is_asset_listed: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): BidPlaced { return BidPlaced.reified( ).new( { bidderProfile: decodeFromFields("address", fields.bidder_profile), username: decodeFromFields(String1.reified(), fields.username), version: decodeFromFields("u64", fields.version), offerHsuiPrice: decodeFromFields("u64", fields.offer_hsui_price), expirationSec: decodeFromFields("u64", fields.expiration_sec), isAssetListed: decodeFromFields("bool", fields.is_asset_listed) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidPlaced { if (!isBidPlaced(item.type)) { throw new Error("not a BidPlaced type");

 }

 return BidPlaced.reified( ).new( { bidderProfile: decodeFromFieldsWithTypes("address", item.fields.bidder_profile), username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), version: decodeFromFieldsWithTypes("u64", item.fields.version), offerHsuiPrice: decodeFromFieldsWithTypes("u64", item.fields.offer_hsui_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec), isAssetListed: decodeFromFieldsWithTypes("bool", item.fields.is_asset_listed) } ) }

 static fromBcs( data: Uint8Array ): BidPlaced { return BidPlaced.fromFields( BidPlaced.bcs.parse(data) ) }

 toJSONField() { return {

 bidderProfile: this.bidderProfile,username: this.username,version: this.version.toString(),offerHsuiPrice: this.offerHsuiPrice.toString(),expirationSec: this.expirationSec.toString(),isAssetListed: this.isAssetListed,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidPlaced { return BidPlaced.reified( ).new( { bidderProfile: decodeFromJSONField("address", field.bidderProfile), username: decodeFromJSONField(String1.reified(), field.username), version: decodeFromJSONField("u64", field.version), offerHsuiPrice: decodeFromJSONField("u64", field.offerHsuiPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec), isAssetListed: decodeFromJSONField("bool", field.isAssetListed) } ) }

 static fromJSON( json: Record<string, any> ): BidPlaced { if (json.$typeName !== BidPlaced.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidPlaced.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidPlaced { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidPlaced(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidPlaced object`); } return BidPlaced.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidPlaced> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidPlaced object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidPlaced(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidPlaced object`); }
 return BidPlaced.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BidRecord =============================== */

export function isBidRecord(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::BidRecord"; }

export interface BidRecordFields { version: ToField<"u64">; offerHsuiPrice: ToField<"u64">; expirationSec: ToField<"u64">; isAssetListed: ToField<"bool"> }

export type BidRecordReified = Reified< BidRecord, BidRecordFields >;

export class BidRecord implements StructClass { static readonly $typeName = "0x0::hive_profile::BidRecord"; static readonly $numTypeParams = 0;

 readonly $typeName = BidRecord.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::BidRecord";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly offerHsuiPrice: ToField<"u64">; readonly expirationSec: ToField<"u64">; readonly isAssetListed: ToField<"bool">

 private constructor(typeArgs: [], fields: BidRecordFields, ) { this.$fullTypeName = composeSuiType( BidRecord.$typeName, ...typeArgs ) as "0x0::hive_profile::BidRecord"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.offerHsuiPrice = fields.offerHsuiPrice;; this.expirationSec = fields.expirationSec;; this.isAssetListed = fields.isAssetListed; }

 static reified( ): BidRecordReified { return { typeName: BidRecord.$typeName, fullTypeName: composeSuiType( BidRecord.$typeName, ...[] ) as "0x0::hive_profile::BidRecord", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidRecord.fromBcs( data, ), bcs: BidRecord.bcs, fromJSONField: (field: any) => BidRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidRecord.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BidRecord.fetch( client, id, ), new: ( fields: BidRecordFields, ) => { return new BidRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidRecord>> { return phantom(BidRecord.reified( )); } static get p() { return BidRecord.phantom() }

 static get bcs() { return bcs.struct("BidRecord", {

 version: bcs.u64(), offer_hsui_price: bcs.u64(), expiration_sec: bcs.u64(), is_asset_listed: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): BidRecord { return BidRecord.reified( ).new( { version: decodeFromFields("u64", fields.version), offerHsuiPrice: decodeFromFields("u64", fields.offer_hsui_price), expirationSec: decodeFromFields("u64", fields.expiration_sec), isAssetListed: decodeFromFields("bool", fields.is_asset_listed) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidRecord { if (!isBidRecord(item.type)) { throw new Error("not a BidRecord type");

 }

 return BidRecord.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), offerHsuiPrice: decodeFromFieldsWithTypes("u64", item.fields.offer_hsui_price), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec), isAssetListed: decodeFromFieldsWithTypes("bool", item.fields.is_asset_listed) } ) }

 static fromBcs( data: Uint8Array ): BidRecord { return BidRecord.fromFields( BidRecord.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),offerHsuiPrice: this.offerHsuiPrice.toString(),expirationSec: this.expirationSec.toString(),isAssetListed: this.isAssetListed,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidRecord { return BidRecord.reified( ).new( { version: decodeFromJSONField("u64", field.version), offerHsuiPrice: decodeFromJSONField("u64", field.offerHsuiPrice), expirationSec: decodeFromJSONField("u64", field.expirationSec), isAssetListed: decodeFromJSONField("bool", field.isAssetListed) } ) }

 static fromJSON( json: Record<string, any> ): BidRecord { if (json.$typeName !== BidRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidRecord object`); } return BidRecord.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidRecord object`); }
 return BidRecord.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BioUpdated =============================== */

export function isBioUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::BioUpdated"; }

export interface BioUpdatedFields { profileAddr: ToField<"address">; username: ToField<String>; newBio: ToField<String> }

export type BioUpdatedReified = Reified< BioUpdated, BioUpdatedFields >;

export class BioUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::BioUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = BioUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::BioUpdated";

 readonly $typeArgs: [];

 readonly profileAddr: ToField<"address">; readonly username: ToField<String>; readonly newBio: ToField<String>

 private constructor(typeArgs: [], fields: BioUpdatedFields, ) { this.$fullTypeName = composeSuiType( BioUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::BioUpdated"; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.newBio = fields.newBio; }

 static reified( ): BioUpdatedReified { return { typeName: BioUpdated.$typeName, fullTypeName: composeSuiType( BioUpdated.$typeName, ...[] ) as "0x0::hive_profile::BioUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BioUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BioUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BioUpdated.fromBcs( data, ), bcs: BioUpdated.bcs, fromJSONField: (field: any) => BioUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BioUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BioUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BioUpdated.fetch( client, id, ), new: ( fields: BioUpdatedFields, ) => { return new BioUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BioUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BioUpdated>> { return phantom(BioUpdated.reified( )); } static get p() { return BioUpdated.phantom() }

 static get bcs() { return bcs.struct("BioUpdated", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, new_bio: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): BioUpdated { return BioUpdated.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String.reified(), fields.username), newBio: decodeFromFields(String.reified(), fields.new_bio) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BioUpdated { if (!isBioUpdated(item.type)) { throw new Error("not a BioUpdated type");

 }

 return BioUpdated.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), newBio: decodeFromFieldsWithTypes(String.reified(), item.fields.new_bio) } ) }

 static fromBcs( data: Uint8Array ): BioUpdated { return BioUpdated.fromFields( BioUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,username: this.username,newBio: this.newBio,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BioUpdated { return BioUpdated.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String.reified(), field.username), newBio: decodeFromJSONField(String.reified(), field.newBio) } ) }

 static fromJSON( json: Record<string, any> ): BioUpdated { if (json.$typeName !== BioUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BioUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BioUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBioUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BioUpdated object`); } return BioUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BioUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BioUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBioUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BioUpdated object`); }
 return BioUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BorrowRecord =============================== */

export function isBorrowRecord(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::BorrowRecord"; }

export interface BorrowRecordFields { owner: ToField<"address">; borrowPriceSui: ToField<"u64">; startSec: ToField<"u64">; lockupDuration: ToField<"u8">; expirationSec: ToField<"u64"> }

export type BorrowRecordReified = Reified< BorrowRecord, BorrowRecordFields >;

export class BorrowRecord implements StructClass { static readonly $typeName = "0x0::hive_profile::BorrowRecord"; static readonly $numTypeParams = 0;

 readonly $typeName = BorrowRecord.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::BorrowRecord";

 readonly $typeArgs: [];

 readonly owner: ToField<"address">; readonly borrowPriceSui: ToField<"u64">; readonly startSec: ToField<"u64">; readonly lockupDuration: ToField<"u8">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: BorrowRecordFields, ) { this.$fullTypeName = composeSuiType( BorrowRecord.$typeName, ...typeArgs ) as "0x0::hive_profile::BorrowRecord"; this.$typeArgs = typeArgs;

 this.owner = fields.owner;; this.borrowPriceSui = fields.borrowPriceSui;; this.startSec = fields.startSec;; this.lockupDuration = fields.lockupDuration;; this.expirationSec = fields.expirationSec; }

 static reified( ): BorrowRecordReified { return { typeName: BorrowRecord.$typeName, fullTypeName: composeSuiType( BorrowRecord.$typeName, ...[] ) as "0x0::hive_profile::BorrowRecord", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BorrowRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BorrowRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BorrowRecord.fromBcs( data, ), bcs: BorrowRecord.bcs, fromJSONField: (field: any) => BorrowRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BorrowRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BorrowRecord.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BorrowRecord.fetch( client, id, ), new: ( fields: BorrowRecordFields, ) => { return new BorrowRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BorrowRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BorrowRecord>> { return phantom(BorrowRecord.reified( )); } static get p() { return BorrowRecord.phantom() }

 static get bcs() { return bcs.struct("BorrowRecord", {

 owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), borrow_price_sui: bcs.u64(), start_sec: bcs.u64(), lockup_duration: bcs.u8(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BorrowRecord { return BorrowRecord.reified( ).new( { owner: decodeFromFields("address", fields.owner), borrowPriceSui: decodeFromFields("u64", fields.borrow_price_sui), startSec: decodeFromFields("u64", fields.start_sec), lockupDuration: decodeFromFields("u8", fields.lockup_duration), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BorrowRecord { if (!isBorrowRecord(item.type)) { throw new Error("not a BorrowRecord type");

 }

 return BorrowRecord.reified( ).new( { owner: decodeFromFieldsWithTypes("address", item.fields.owner), borrowPriceSui: decodeFromFieldsWithTypes("u64", item.fields.borrow_price_sui), startSec: decodeFromFieldsWithTypes("u64", item.fields.start_sec), lockupDuration: decodeFromFieldsWithTypes("u8", item.fields.lockup_duration), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): BorrowRecord { return BorrowRecord.fromFields( BorrowRecord.bcs.parse(data) ) }

 toJSONField() { return {

 owner: this.owner,borrowPriceSui: this.borrowPriceSui.toString(),startSec: this.startSec.toString(),lockupDuration: this.lockupDuration,expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BorrowRecord { return BorrowRecord.reified( ).new( { owner: decodeFromJSONField("address", field.owner), borrowPriceSui: decodeFromJSONField("u64", field.borrowPriceSui), startSec: decodeFromJSONField("u64", field.startSec), lockupDuration: decodeFromJSONField("u8", field.lockupDuration), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): BorrowRecord { if (json.$typeName !== BorrowRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BorrowRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BorrowRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBorrowRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BorrowRecord object`); } return BorrowRecord.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BorrowRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BorrowRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBorrowRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BorrowRecord object`); }
 return BorrowRecord.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== DegenHiveYieldHarvested =============================== */

export function isDegenHiveYieldHarvested(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::DegenHiveYieldHarvested"; }

export interface DegenHiveYieldHarvestedFields { harvesterProfile: ToField<"address">; username: ToField<String1>; hsuiHarvested: ToField<"u64">; gemsHarvested: ToField<"u64"> }

export type DegenHiveYieldHarvestedReified = Reified< DegenHiveYieldHarvested, DegenHiveYieldHarvestedFields >;

export class DegenHiveYieldHarvested implements StructClass { static readonly $typeName = "0x0::hive_profile::DegenHiveYieldHarvested"; static readonly $numTypeParams = 0;

 readonly $typeName = DegenHiveYieldHarvested.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::DegenHiveYieldHarvested";

 readonly $typeArgs: [];

 readonly harvesterProfile: ToField<"address">; readonly username: ToField<String1>; readonly hsuiHarvested: ToField<"u64">; readonly gemsHarvested: ToField<"u64">

 private constructor(typeArgs: [], fields: DegenHiveYieldHarvestedFields, ) { this.$fullTypeName = composeSuiType( DegenHiveYieldHarvested.$typeName, ...typeArgs ) as "0x0::hive_profile::DegenHiveYieldHarvested"; this.$typeArgs = typeArgs;

 this.harvesterProfile = fields.harvesterProfile;; this.username = fields.username;; this.hsuiHarvested = fields.hsuiHarvested;; this.gemsHarvested = fields.gemsHarvested; }

 static reified( ): DegenHiveYieldHarvestedReified { return { typeName: DegenHiveYieldHarvested.$typeName, fullTypeName: composeSuiType( DegenHiveYieldHarvested.$typeName, ...[] ) as "0x0::hive_profile::DegenHiveYieldHarvested", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DegenHiveYieldHarvested.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DegenHiveYieldHarvested.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DegenHiveYieldHarvested.fromBcs( data, ), bcs: DegenHiveYieldHarvested.bcs, fromJSONField: (field: any) => DegenHiveYieldHarvested.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DegenHiveYieldHarvested.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DegenHiveYieldHarvested.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DegenHiveYieldHarvested.fetch( client, id, ), new: ( fields: DegenHiveYieldHarvestedFields, ) => { return new DegenHiveYieldHarvested( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DegenHiveYieldHarvested.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DegenHiveYieldHarvested>> { return phantom(DegenHiveYieldHarvested.reified( )); } static get p() { return DegenHiveYieldHarvested.phantom() }

 static get bcs() { return bcs.struct("DegenHiveYieldHarvested", {

 harvester_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String1.bcs, hsui_harvested: bcs.u64(), gems_harvested: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DegenHiveYieldHarvested { return DegenHiveYieldHarvested.reified( ).new( { harvesterProfile: decodeFromFields("address", fields.harvester_profile), username: decodeFromFields(String1.reified(), fields.username), hsuiHarvested: decodeFromFields("u64", fields.hsui_harvested), gemsHarvested: decodeFromFields("u64", fields.gems_harvested) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DegenHiveYieldHarvested { if (!isDegenHiveYieldHarvested(item.type)) { throw new Error("not a DegenHiveYieldHarvested type");

 }

 return DegenHiveYieldHarvested.reified( ).new( { harvesterProfile: decodeFromFieldsWithTypes("address", item.fields.harvester_profile), username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), hsuiHarvested: decodeFromFieldsWithTypes("u64", item.fields.hsui_harvested), gemsHarvested: decodeFromFieldsWithTypes("u64", item.fields.gems_harvested) } ) }

 static fromBcs( data: Uint8Array ): DegenHiveYieldHarvested { return DegenHiveYieldHarvested.fromFields( DegenHiveYieldHarvested.bcs.parse(data) ) }

 toJSONField() { return {

 harvesterProfile: this.harvesterProfile,username: this.username,hsuiHarvested: this.hsuiHarvested.toString(),gemsHarvested: this.gemsHarvested.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DegenHiveYieldHarvested { return DegenHiveYieldHarvested.reified( ).new( { harvesterProfile: decodeFromJSONField("address", field.harvesterProfile), username: decodeFromJSONField(String1.reified(), field.username), hsuiHarvested: decodeFromJSONField("u64", field.hsuiHarvested), gemsHarvested: decodeFromJSONField("u64", field.gemsHarvested) } ) }

 static fromJSON( json: Record<string, any> ): DegenHiveYieldHarvested { if (json.$typeName !== DegenHiveYieldHarvested.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DegenHiveYieldHarvested.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DegenHiveYieldHarvested { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDegenHiveYieldHarvested(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DegenHiveYieldHarvested object`); } return DegenHiveYieldHarvested.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DegenHiveYieldHarvested> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DegenHiveYieldHarvested object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDegenHiveYieldHarvested(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DegenHiveYieldHarvested object`); }
 return DegenHiveYieldHarvested.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== DepositHSuiForProfile =============================== */

export function isDepositHSuiForProfile(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::DepositHSuiForProfile"; }

export interface DepositHSuiForProfileFields { profileAddr: ToField<"address">; hsuiDeposited: ToField<"u64">; depositorAddr: ToField<"address"> }

export type DepositHSuiForProfileReified = Reified< DepositHSuiForProfile, DepositHSuiForProfileFields >;

export class DepositHSuiForProfile implements StructClass { static readonly $typeName = "0x0::hive_profile::DepositHSuiForProfile"; static readonly $numTypeParams = 0;

 readonly $typeName = DepositHSuiForProfile.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::DepositHSuiForProfile";

 readonly $typeArgs: [];

 readonly profileAddr: ToField<"address">; readonly hsuiDeposited: ToField<"u64">; readonly depositorAddr: ToField<"address">

 private constructor(typeArgs: [], fields: DepositHSuiForProfileFields, ) { this.$fullTypeName = composeSuiType( DepositHSuiForProfile.$typeName, ...typeArgs ) as "0x0::hive_profile::DepositHSuiForProfile"; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.hsuiDeposited = fields.hsuiDeposited;; this.depositorAddr = fields.depositorAddr; }

 static reified( ): DepositHSuiForProfileReified { return { typeName: DepositHSuiForProfile.$typeName, fullTypeName: composeSuiType( DepositHSuiForProfile.$typeName, ...[] ) as "0x0::hive_profile::DepositHSuiForProfile", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DepositHSuiForProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DepositHSuiForProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DepositHSuiForProfile.fromBcs( data, ), bcs: DepositHSuiForProfile.bcs, fromJSONField: (field: any) => DepositHSuiForProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DepositHSuiForProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DepositHSuiForProfile.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DepositHSuiForProfile.fetch( client, id, ), new: ( fields: DepositHSuiForProfileFields, ) => { return new DepositHSuiForProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DepositHSuiForProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DepositHSuiForProfile>> { return phantom(DepositHSuiForProfile.reified( )); } static get p() { return DepositHSuiForProfile.phantom() }

 static get bcs() { return bcs.struct("DepositHSuiForProfile", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), hsui_deposited: bcs.u64(), depositor_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): DepositHSuiForProfile { return DepositHSuiForProfile.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), hsuiDeposited: decodeFromFields("u64", fields.hsui_deposited), depositorAddr: decodeFromFields("address", fields.depositor_addr) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DepositHSuiForProfile { if (!isDepositHSuiForProfile(item.type)) { throw new Error("not a DepositHSuiForProfile type");

 }

 return DepositHSuiForProfile.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), hsuiDeposited: decodeFromFieldsWithTypes("u64", item.fields.hsui_deposited), depositorAddr: decodeFromFieldsWithTypes("address", item.fields.depositor_addr) } ) }

 static fromBcs( data: Uint8Array ): DepositHSuiForProfile { return DepositHSuiForProfile.fromFields( DepositHSuiForProfile.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,hsuiDeposited: this.hsuiDeposited.toString(),depositorAddr: this.depositorAddr,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DepositHSuiForProfile { return DepositHSuiForProfile.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), hsuiDeposited: decodeFromJSONField("u64", field.hsuiDeposited), depositorAddr: decodeFromJSONField("address", field.depositorAddr) } ) }

 static fromJSON( json: Record<string, any> ): DepositHSuiForProfile { if (json.$typeName !== DepositHSuiForProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DepositHSuiForProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DepositHSuiForProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDepositHSuiForProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DepositHSuiForProfile object`); } return DepositHSuiForProfile.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DepositHSuiForProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DepositHSuiForProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDepositHSuiForProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DepositHSuiForProfile object`); }
 return DepositHSuiForProfile.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ExecutedListing =============================== */

export function isExecutedListing(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x0::hive_profile::ExecutedListing<"); }

export interface ExecutedListingFields<X extends PhantomTypeArgument> { listedByProfile: ToField<"address">; hiveAsset: ToField<Option<HiveAsset>>; version: ToField<"u64">; wasSaleListing: ToField<"bool">; balance: ToField<Option<Balance<X>>>; bidderProfile: ToField<"address">; executedPriceInHsui: ToField<"u64">; executedPriceInSui: ToField<"u64">; borrowPeriodStartSec: ToField<"u64">; borrowPeriodEndSec: ToField<"u64"> }

export type ExecutedListingReified<X extends PhantomTypeArgument> = Reified< ExecutedListing<X>, ExecutedListingFields<X> >;

export class ExecutedListing<X extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x0::hive_profile::ExecutedListing"; static readonly $numTypeParams = 1;

 readonly $typeName = ExecutedListing.$typeName;

 readonly $fullTypeName: `0x0::hive_profile::ExecutedListing<${PhantomToTypeStr<X>}>`;

 readonly $typeArgs: [PhantomToTypeStr<X>];

 readonly listedByProfile: ToField<"address">; readonly hiveAsset: ToField<Option<HiveAsset>>; readonly version: ToField<"u64">; readonly wasSaleListing: ToField<"bool">; readonly balance: ToField<Option<Balance<X>>>; readonly bidderProfile: ToField<"address">; readonly executedPriceInHsui: ToField<"u64">; readonly executedPriceInSui: ToField<"u64">; readonly borrowPeriodStartSec: ToField<"u64">; readonly borrowPeriodEndSec: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: ExecutedListingFields<X>, ) { this.$fullTypeName = composeSuiType( ExecutedListing.$typeName, ...typeArgs ) as `0x0::hive_profile::ExecutedListing<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.listedByProfile = fields.listedByProfile;; this.hiveAsset = fields.hiveAsset;; this.version = fields.version;; this.wasSaleListing = fields.wasSaleListing;; this.balance = fields.balance;; this.bidderProfile = fields.bidderProfile;; this.executedPriceInHsui = fields.executedPriceInHsui;; this.executedPriceInSui = fields.executedPriceInSui;; this.borrowPeriodStartSec = fields.borrowPeriodStartSec;; this.borrowPeriodEndSec = fields.borrowPeriodEndSec; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): ExecutedListingReified<ToPhantomTypeArgument<X>> { return { typeName: ExecutedListing.$typeName, fullTypeName: composeSuiType( ExecutedListing.$typeName, ...[extractType(X)] ) as `0x0::hive_profile::ExecutedListing<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => ExecutedListing.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ExecutedListing.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => ExecutedListing.fromBcs( X, data, ), bcs: ExecutedListing.bcs, fromJSONField: (field: any) => ExecutedListing.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => ExecutedListing.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => ExecutedListing.fromSuiParsedData( X, content, ), fetch: async (client: SuiClient, id: string) => ExecutedListing.fetch( client, X, id, ), new: ( fields: ExecutedListingFields<ToPhantomTypeArgument<X>>, ) => { return new ExecutedListing( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return ExecutedListing.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<ExecutedListing<ToPhantomTypeArgument<X>>>> { return phantom(ExecutedListing.reified( X )); } static get p() { return ExecutedListing.phantom }

 static get bcs() { return bcs.struct("ExecutedListing", {

 listed_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), hive_asset: Option.bcs(HiveAsset.bcs), version: bcs.u64(), was_sale_listing: bcs.bool(), balance: Option.bcs(Balance.bcs), bidder_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), executed_price_in_hsui: bcs.u64(), executed_price_in_sui: bcs.u64(), borrow_period_start_sec: bcs.u64(), borrow_period_end_sec: bcs.u64()

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): ExecutedListing<ToPhantomTypeArgument<X>> { return ExecutedListing.reified( typeArg, ).new( { listedByProfile: decodeFromFields("address", fields.listed_by_profile), hiveAsset: decodeFromFields(Option.reified(HiveAsset.reified()), fields.hive_asset), version: decodeFromFields("u64", fields.version), wasSaleListing: decodeFromFields("bool", fields.was_sale_listing), balance: decodeFromFields(Option.reified(Balance.reified(typeArg)), fields.balance), bidderProfile: decodeFromFields("address", fields.bidder_profile), executedPriceInHsui: decodeFromFields("u64", fields.executed_price_in_hsui), executedPriceInSui: decodeFromFields("u64", fields.executed_price_in_sui), borrowPeriodStartSec: decodeFromFields("u64", fields.borrow_period_start_sec), borrowPeriodEndSec: decodeFromFields("u64", fields.borrow_period_end_sec) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): ExecutedListing<ToPhantomTypeArgument<X>> { if (!isExecutedListing(item.type)) { throw new Error("not a ExecutedListing type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return ExecutedListing.reified( typeArg, ).new( { listedByProfile: decodeFromFieldsWithTypes("address", item.fields.listed_by_profile), hiveAsset: decodeFromFieldsWithTypes(Option.reified(HiveAsset.reified()), item.fields.hive_asset), version: decodeFromFieldsWithTypes("u64", item.fields.version), wasSaleListing: decodeFromFieldsWithTypes("bool", item.fields.was_sale_listing), balance: decodeFromFieldsWithTypes(Option.reified(Balance.reified(typeArg)), item.fields.balance), bidderProfile: decodeFromFieldsWithTypes("address", item.fields.bidder_profile), executedPriceInHsui: decodeFromFieldsWithTypes("u64", item.fields.executed_price_in_hsui), executedPriceInSui: decodeFromFieldsWithTypes("u64", item.fields.executed_price_in_sui), borrowPeriodStartSec: decodeFromFieldsWithTypes("u64", item.fields.borrow_period_start_sec), borrowPeriodEndSec: decodeFromFieldsWithTypes("u64", item.fields.borrow_period_end_sec) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): ExecutedListing<ToPhantomTypeArgument<X>> { return ExecutedListing.fromFields( typeArg, ExecutedListing.bcs.parse(data) ) }

 toJSONField() { return {

 listedByProfile: this.listedByProfile,hiveAsset: fieldToJSON<Option<HiveAsset>>(`0x1::option::Option<0x0::hive_profile::HiveAsset>`, this.hiveAsset),version: this.version.toString(),wasSaleListing: this.wasSaleListing,balance: fieldToJSON<Option<Balance<X>>>(`0x1::option::Option<0x2::balance::Balance<${this.$typeArgs[0]}>>`, this.balance),bidderProfile: this.bidderProfile,executedPriceInHsui: this.executedPriceInHsui.toString(),executedPriceInSui: this.executedPriceInSui.toString(),borrowPeriodStartSec: this.borrowPeriodStartSec.toString(),borrowPeriodEndSec: this.borrowPeriodEndSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): ExecutedListing<ToPhantomTypeArgument<X>> { return ExecutedListing.reified( typeArg, ).new( { listedByProfile: decodeFromJSONField("address", field.listedByProfile), hiveAsset: decodeFromJSONField(Option.reified(HiveAsset.reified()), field.hiveAsset), version: decodeFromJSONField("u64", field.version), wasSaleListing: decodeFromJSONField("bool", field.wasSaleListing), balance: decodeFromJSONField(Option.reified(Balance.reified(typeArg)), field.balance), bidderProfile: decodeFromJSONField("address", field.bidderProfile), executedPriceInHsui: decodeFromJSONField("u64", field.executedPriceInHsui), executedPriceInSui: decodeFromJSONField("u64", field.executedPriceInSui), borrowPeriodStartSec: decodeFromJSONField("u64", field.borrowPeriodStartSec), borrowPeriodEndSec: decodeFromJSONField("u64", field.borrowPeriodEndSec) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): ExecutedListing<ToPhantomTypeArgument<X>> { if (json.$typeName !== ExecutedListing.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(ExecutedListing.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return ExecutedListing.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): ExecutedListing<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExecutedListing(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ExecutedListing object`); } return ExecutedListing.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<ExecutedListing<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ExecutedListing object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExecutedListing(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ExecutedListing object`); }
 return ExecutedListing.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ExecutedListingDestroyed =============================== */

export function isExecutedListingDestroyed(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ExecutedListingDestroyed"; }

export interface ExecutedListingDestroyedFields { version: ToField<"u64">; executedPriceInHsui: ToField<"u64">; executedPriceInSui: ToField<"u64">; listedByProfile: ToField<"address"> }

export type ExecutedListingDestroyedReified = Reified< ExecutedListingDestroyed, ExecutedListingDestroyedFields >;

export class ExecutedListingDestroyed implements StructClass { static readonly $typeName = "0x0::hive_profile::ExecutedListingDestroyed"; static readonly $numTypeParams = 0;

 readonly $typeName = ExecutedListingDestroyed.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ExecutedListingDestroyed";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly executedPriceInHsui: ToField<"u64">; readonly executedPriceInSui: ToField<"u64">; readonly listedByProfile: ToField<"address">

 private constructor(typeArgs: [], fields: ExecutedListingDestroyedFields, ) { this.$fullTypeName = composeSuiType( ExecutedListingDestroyed.$typeName, ...typeArgs ) as "0x0::hive_profile::ExecutedListingDestroyed"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.executedPriceInHsui = fields.executedPriceInHsui;; this.executedPriceInSui = fields.executedPriceInSui;; this.listedByProfile = fields.listedByProfile; }

 static reified( ): ExecutedListingDestroyedReified { return { typeName: ExecutedListingDestroyed.$typeName, fullTypeName: composeSuiType( ExecutedListingDestroyed.$typeName, ...[] ) as "0x0::hive_profile::ExecutedListingDestroyed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ExecutedListingDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ExecutedListingDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ExecutedListingDestroyed.fromBcs( data, ), bcs: ExecutedListingDestroyed.bcs, fromJSONField: (field: any) => ExecutedListingDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ExecutedListingDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ExecutedListingDestroyed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ExecutedListingDestroyed.fetch( client, id, ), new: ( fields: ExecutedListingDestroyedFields, ) => { return new ExecutedListingDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ExecutedListingDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ExecutedListingDestroyed>> { return phantom(ExecutedListingDestroyed.reified( )); } static get p() { return ExecutedListingDestroyed.phantom() }

 static get bcs() { return bcs.struct("ExecutedListingDestroyed", {

 version: bcs.u64(), executed_price_in_hsui: bcs.u64(), executed_price_in_sui: bcs.u64(), listed_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): ExecutedListingDestroyed { return ExecutedListingDestroyed.reified( ).new( { version: decodeFromFields("u64", fields.version), executedPriceInHsui: decodeFromFields("u64", fields.executed_price_in_hsui), executedPriceInSui: decodeFromFields("u64", fields.executed_price_in_sui), listedByProfile: decodeFromFields("address", fields.listed_by_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ExecutedListingDestroyed { if (!isExecutedListingDestroyed(item.type)) { throw new Error("not a ExecutedListingDestroyed type");

 }

 return ExecutedListingDestroyed.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), executedPriceInHsui: decodeFromFieldsWithTypes("u64", item.fields.executed_price_in_hsui), executedPriceInSui: decodeFromFieldsWithTypes("u64", item.fields.executed_price_in_sui), listedByProfile: decodeFromFieldsWithTypes("address", item.fields.listed_by_profile) } ) }

 static fromBcs( data: Uint8Array ): ExecutedListingDestroyed { return ExecutedListingDestroyed.fromFields( ExecutedListingDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),executedPriceInHsui: this.executedPriceInHsui.toString(),executedPriceInSui: this.executedPriceInSui.toString(),listedByProfile: this.listedByProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ExecutedListingDestroyed { return ExecutedListingDestroyed.reified( ).new( { version: decodeFromJSONField("u64", field.version), executedPriceInHsui: decodeFromJSONField("u64", field.executedPriceInHsui), executedPriceInSui: decodeFromJSONField("u64", field.executedPriceInSui), listedByProfile: decodeFromJSONField("address", field.listedByProfile) } ) }

 static fromJSON( json: Record<string, any> ): ExecutedListingDestroyed { if (json.$typeName !== ExecutedListingDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ExecutedListingDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ExecutedListingDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExecutedListingDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ExecutedListingDestroyed object`); } return ExecutedListingDestroyed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ExecutedListingDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ExecutedListingDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExecutedListingDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ExecutedListingDestroyed object`); }
 return ExecutedListingDestroyed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ExitHiveOfProfile =============================== */

export function isExitHiveOfProfile(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ExitHiveOfProfile"; }

export interface ExitHiveOfProfileFields { subscriberProfileAddr: ToField<"address">; unsubscribedFromProfileAddr: ToField<"address">; subscriberUsername: ToField<String>; unhiveOwnerUsername: ToField<String>; recordsDeleted: ToField<"bool"> }

export type ExitHiveOfProfileReified = Reified< ExitHiveOfProfile, ExitHiveOfProfileFields >;

export class ExitHiveOfProfile implements StructClass { static readonly $typeName = "0x0::hive_profile::ExitHiveOfProfile"; static readonly $numTypeParams = 0;

 readonly $typeName = ExitHiveOfProfile.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ExitHiveOfProfile";

 readonly $typeArgs: [];

 readonly subscriberProfileAddr: ToField<"address">; readonly unsubscribedFromProfileAddr: ToField<"address">; readonly subscriberUsername: ToField<String>; readonly unhiveOwnerUsername: ToField<String>; readonly recordsDeleted: ToField<"bool">

 private constructor(typeArgs: [], fields: ExitHiveOfProfileFields, ) { this.$fullTypeName = composeSuiType( ExitHiveOfProfile.$typeName, ...typeArgs ) as "0x0::hive_profile::ExitHiveOfProfile"; this.$typeArgs = typeArgs;

 this.subscriberProfileAddr = fields.subscriberProfileAddr;; this.unsubscribedFromProfileAddr = fields.unsubscribedFromProfileAddr;; this.subscriberUsername = fields.subscriberUsername;; this.unhiveOwnerUsername = fields.unhiveOwnerUsername;; this.recordsDeleted = fields.recordsDeleted; }

 static reified( ): ExitHiveOfProfileReified { return { typeName: ExitHiveOfProfile.$typeName, fullTypeName: composeSuiType( ExitHiveOfProfile.$typeName, ...[] ) as "0x0::hive_profile::ExitHiveOfProfile", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ExitHiveOfProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ExitHiveOfProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ExitHiveOfProfile.fromBcs( data, ), bcs: ExitHiveOfProfile.bcs, fromJSONField: (field: any) => ExitHiveOfProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ExitHiveOfProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ExitHiveOfProfile.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ExitHiveOfProfile.fetch( client, id, ), new: ( fields: ExitHiveOfProfileFields, ) => { return new ExitHiveOfProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ExitHiveOfProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ExitHiveOfProfile>> { return phantom(ExitHiveOfProfile.reified( )); } static get p() { return ExitHiveOfProfile.phantom() }

 static get bcs() { return bcs.struct("ExitHiveOfProfile", {

 subscriber_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), unsubscribed_from_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), subscriber_username: String.bcs, unhive_owner_username: String.bcs, records_deleted: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): ExitHiveOfProfile { return ExitHiveOfProfile.reified( ).new( { subscriberProfileAddr: decodeFromFields("address", fields.subscriber_profile_addr), unsubscribedFromProfileAddr: decodeFromFields("address", fields.unsubscribed_from_profile_addr), subscriberUsername: decodeFromFields(String.reified(), fields.subscriber_username), unhiveOwnerUsername: decodeFromFields(String.reified(), fields.unhive_owner_username), recordsDeleted: decodeFromFields("bool", fields.records_deleted) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ExitHiveOfProfile { if (!isExitHiveOfProfile(item.type)) { throw new Error("not a ExitHiveOfProfile type");

 }

 return ExitHiveOfProfile.reified( ).new( { subscriberProfileAddr: decodeFromFieldsWithTypes("address", item.fields.subscriber_profile_addr), unsubscribedFromProfileAddr: decodeFromFieldsWithTypes("address", item.fields.unsubscribed_from_profile_addr), subscriberUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.subscriber_username), unhiveOwnerUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.unhive_owner_username), recordsDeleted: decodeFromFieldsWithTypes("bool", item.fields.records_deleted) } ) }

 static fromBcs( data: Uint8Array ): ExitHiveOfProfile { return ExitHiveOfProfile.fromFields( ExitHiveOfProfile.bcs.parse(data) ) }

 toJSONField() { return {

 subscriberProfileAddr: this.subscriberProfileAddr,unsubscribedFromProfileAddr: this.unsubscribedFromProfileAddr,subscriberUsername: this.subscriberUsername,unhiveOwnerUsername: this.unhiveOwnerUsername,recordsDeleted: this.recordsDeleted,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ExitHiveOfProfile { return ExitHiveOfProfile.reified( ).new( { subscriberProfileAddr: decodeFromJSONField("address", field.subscriberProfileAddr), unsubscribedFromProfileAddr: decodeFromJSONField("address", field.unsubscribedFromProfileAddr), subscriberUsername: decodeFromJSONField(String.reified(), field.subscriberUsername), unhiveOwnerUsername: decodeFromJSONField(String.reified(), field.unhiveOwnerUsername), recordsDeleted: decodeFromJSONField("bool", field.recordsDeleted) } ) }

 static fromJSON( json: Record<string, any> ): ExitHiveOfProfile { if (json.$typeName !== ExitHiveOfProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ExitHiveOfProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ExitHiveOfProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExitHiveOfProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ExitHiveOfProfile object`); } return ExitHiveOfProfile.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ExitHiveOfProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ExitHiveOfProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExitHiveOfProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ExitHiveOfProfile object`); }
 return ExitHiveOfProfile.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== GemAddedToProfile =============================== */

export function isGemAddedToProfile(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::GemAddedToProfile"; }

export interface GemAddedToProfileFields { username: ToField<String1>; profileAddr: ToField<"address">; depositedGems: ToField<"u64"> }

export type GemAddedToProfileReified = Reified< GemAddedToProfile, GemAddedToProfileFields >;

export class GemAddedToProfile implements StructClass { static readonly $typeName = "0x0::hive_profile::GemAddedToProfile"; static readonly $numTypeParams = 0;

 readonly $typeName = GemAddedToProfile.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::GemAddedToProfile";

 readonly $typeArgs: [];

 readonly username: ToField<String1>; readonly profileAddr: ToField<"address">; readonly depositedGems: ToField<"u64">

 private constructor(typeArgs: [], fields: GemAddedToProfileFields, ) { this.$fullTypeName = composeSuiType( GemAddedToProfile.$typeName, ...typeArgs ) as "0x0::hive_profile::GemAddedToProfile"; this.$typeArgs = typeArgs;

 this.username = fields.username;; this.profileAddr = fields.profileAddr;; this.depositedGems = fields.depositedGems; }

 static reified( ): GemAddedToProfileReified { return { typeName: GemAddedToProfile.$typeName, fullTypeName: composeSuiType( GemAddedToProfile.$typeName, ...[] ) as "0x0::hive_profile::GemAddedToProfile", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GemAddedToProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GemAddedToProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GemAddedToProfile.fromBcs( data, ), bcs: GemAddedToProfile.bcs, fromJSONField: (field: any) => GemAddedToProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GemAddedToProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GemAddedToProfile.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => GemAddedToProfile.fetch( client, id, ), new: ( fields: GemAddedToProfileFields, ) => { return new GemAddedToProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GemAddedToProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GemAddedToProfile>> { return phantom(GemAddedToProfile.reified( )); } static get p() { return GemAddedToProfile.phantom() }

 static get bcs() { return bcs.struct("GemAddedToProfile", {

 username: String1.bcs, profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), deposited_gems: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): GemAddedToProfile { return GemAddedToProfile.reified( ).new( { username: decodeFromFields(String1.reified(), fields.username), profileAddr: decodeFromFields("address", fields.profile_addr), depositedGems: decodeFromFields("u64", fields.deposited_gems) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GemAddedToProfile { if (!isGemAddedToProfile(item.type)) { throw new Error("not a GemAddedToProfile type");

 }

 return GemAddedToProfile.reified( ).new( { username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), depositedGems: decodeFromFieldsWithTypes("u64", item.fields.deposited_gems) } ) }

 static fromBcs( data: Uint8Array ): GemAddedToProfile { return GemAddedToProfile.fromFields( GemAddedToProfile.bcs.parse(data) ) }

 toJSONField() { return {

 username: this.username,profileAddr: this.profileAddr,depositedGems: this.depositedGems.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GemAddedToProfile { return GemAddedToProfile.reified( ).new( { username: decodeFromJSONField(String1.reified(), field.username), profileAddr: decodeFromJSONField("address", field.profileAddr), depositedGems: decodeFromJSONField("u64", field.depositedGems) } ) }

 static fromJSON( json: Record<string, any> ): GemAddedToProfile { if (json.$typeName !== GemAddedToProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GemAddedToProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GemAddedToProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGemAddedToProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GemAddedToProfile object`); } return GemAddedToProfile.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<GemAddedToProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GemAddedToProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGemAddedToProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GemAddedToProfile object`); }
 return GemAddedToProfile.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== GemWithdrawnFromProfile =============================== */

export function isGemWithdrawnFromProfile(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::GemWithdrawnFromProfile"; }

export interface GemWithdrawnFromProfileFields { username: ToField<String1>; profileAddr: ToField<"address">; withdrawnGems: ToField<"u64"> }

export type GemWithdrawnFromProfileReified = Reified< GemWithdrawnFromProfile, GemWithdrawnFromProfileFields >;

export class GemWithdrawnFromProfile implements StructClass { static readonly $typeName = "0x0::hive_profile::GemWithdrawnFromProfile"; static readonly $numTypeParams = 0;

 readonly $typeName = GemWithdrawnFromProfile.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::GemWithdrawnFromProfile";

 readonly $typeArgs: [];

 readonly username: ToField<String1>; readonly profileAddr: ToField<"address">; readonly withdrawnGems: ToField<"u64">

 private constructor(typeArgs: [], fields: GemWithdrawnFromProfileFields, ) { this.$fullTypeName = composeSuiType( GemWithdrawnFromProfile.$typeName, ...typeArgs ) as "0x0::hive_profile::GemWithdrawnFromProfile"; this.$typeArgs = typeArgs;

 this.username = fields.username;; this.profileAddr = fields.profileAddr;; this.withdrawnGems = fields.withdrawnGems; }

 static reified( ): GemWithdrawnFromProfileReified { return { typeName: GemWithdrawnFromProfile.$typeName, fullTypeName: composeSuiType( GemWithdrawnFromProfile.$typeName, ...[] ) as "0x0::hive_profile::GemWithdrawnFromProfile", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GemWithdrawnFromProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GemWithdrawnFromProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GemWithdrawnFromProfile.fromBcs( data, ), bcs: GemWithdrawnFromProfile.bcs, fromJSONField: (field: any) => GemWithdrawnFromProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GemWithdrawnFromProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GemWithdrawnFromProfile.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => GemWithdrawnFromProfile.fetch( client, id, ), new: ( fields: GemWithdrawnFromProfileFields, ) => { return new GemWithdrawnFromProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GemWithdrawnFromProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GemWithdrawnFromProfile>> { return phantom(GemWithdrawnFromProfile.reified( )); } static get p() { return GemWithdrawnFromProfile.phantom() }

 static get bcs() { return bcs.struct("GemWithdrawnFromProfile", {

 username: String1.bcs, profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), withdrawn_gems: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): GemWithdrawnFromProfile { return GemWithdrawnFromProfile.reified( ).new( { username: decodeFromFields(String1.reified(), fields.username), profileAddr: decodeFromFields("address", fields.profile_addr), withdrawnGems: decodeFromFields("u64", fields.withdrawn_gems) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GemWithdrawnFromProfile { if (!isGemWithdrawnFromProfile(item.type)) { throw new Error("not a GemWithdrawnFromProfile type");

 }

 return GemWithdrawnFromProfile.reified( ).new( { username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), withdrawnGems: decodeFromFieldsWithTypes("u64", item.fields.withdrawn_gems) } ) }

 static fromBcs( data: Uint8Array ): GemWithdrawnFromProfile { return GemWithdrawnFromProfile.fromFields( GemWithdrawnFromProfile.bcs.parse(data) ) }

 toJSONField() { return {

 username: this.username,profileAddr: this.profileAddr,withdrawnGems: this.withdrawnGems.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GemWithdrawnFromProfile { return GemWithdrawnFromProfile.reified( ).new( { username: decodeFromJSONField(String1.reified(), field.username), profileAddr: decodeFromJSONField("address", field.profileAddr), withdrawnGems: decodeFromJSONField("u64", field.withdrawnGems) } ) }

 static fromJSON( json: Record<string, any> ): GemWithdrawnFromProfile { if (json.$typeName !== GemWithdrawnFromProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GemWithdrawnFromProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GemWithdrawnFromProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGemWithdrawnFromProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GemWithdrawnFromProfile object`); } return GemWithdrawnFromProfile.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<GemWithdrawnFromProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GemWithdrawnFromProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGemWithdrawnFromProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GemWithdrawnFromProfile object`); }
 return GemWithdrawnFromProfile.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HIVE_PROFILE =============================== */

export function isHIVE_PROFILE(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HIVE_PROFILE"; }

export interface HIVE_PROFILEFields { dummyField: ToField<"bool"> }

export type HIVE_PROFILEReified = Reified< HIVE_PROFILE, HIVE_PROFILEFields >;

export class HIVE_PROFILE implements StructClass { static readonly $typeName = "0x0::hive_profile::HIVE_PROFILE"; static readonly $numTypeParams = 0;

 readonly $typeName = HIVE_PROFILE.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HIVE_PROFILE";

 readonly $typeArgs: [];

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: HIVE_PROFILEFields, ) { this.$fullTypeName = composeSuiType( HIVE_PROFILE.$typeName, ...typeArgs ) as "0x0::hive_profile::HIVE_PROFILE"; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): HIVE_PROFILEReified { return { typeName: HIVE_PROFILE.$typeName, fullTypeName: composeSuiType( HIVE_PROFILE.$typeName, ...[] ) as "0x0::hive_profile::HIVE_PROFILE", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HIVE_PROFILE.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HIVE_PROFILE.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HIVE_PROFILE.fromBcs( data, ), bcs: HIVE_PROFILE.bcs, fromJSONField: (field: any) => HIVE_PROFILE.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HIVE_PROFILE.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HIVE_PROFILE.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HIVE_PROFILE.fetch( client, id, ), new: ( fields: HIVE_PROFILEFields, ) => { return new HIVE_PROFILE( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HIVE_PROFILE.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HIVE_PROFILE>> { return phantom(HIVE_PROFILE.reified( )); } static get p() { return HIVE_PROFILE.phantom() }

 static get bcs() { return bcs.struct("HIVE_PROFILE", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): HIVE_PROFILE { return HIVE_PROFILE.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HIVE_PROFILE { if (!isHIVE_PROFILE(item.type)) { throw new Error("not a HIVE_PROFILE type");

 }

 return HIVE_PROFILE.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): HIVE_PROFILE { return HIVE_PROFILE.fromFields( HIVE_PROFILE.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HIVE_PROFILE { return HIVE_PROFILE.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): HIVE_PROFILE { if (json.$typeName !== HIVE_PROFILE.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HIVE_PROFILE.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HIVE_PROFILE { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHIVE_PROFILE(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HIVE_PROFILE object`); } return HIVE_PROFILE.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HIVE_PROFILE> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HIVE_PROFILE object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHIVE_PROFILE(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HIVE_PROFILE object`); }
 return HIVE_PROFILE.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HSuiAddedForHarvest =============================== */

export function isHSuiAddedForHarvest(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HSuiAddedForHarvest"; }

export interface HSuiAddedForHarvestFields { yieldAdded: ToField<"u64"> }

export type HSuiAddedForHarvestReified = Reified< HSuiAddedForHarvest, HSuiAddedForHarvestFields >;

export class HSuiAddedForHarvest implements StructClass { static readonly $typeName = "0x0::hive_profile::HSuiAddedForHarvest"; static readonly $numTypeParams = 0;

 readonly $typeName = HSuiAddedForHarvest.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HSuiAddedForHarvest";

 readonly $typeArgs: [];

 readonly yieldAdded: ToField<"u64">

 private constructor(typeArgs: [], fields: HSuiAddedForHarvestFields, ) { this.$fullTypeName = composeSuiType( HSuiAddedForHarvest.$typeName, ...typeArgs ) as "0x0::hive_profile::HSuiAddedForHarvest"; this.$typeArgs = typeArgs;

 this.yieldAdded = fields.yieldAdded; }

 static reified( ): HSuiAddedForHarvestReified { return { typeName: HSuiAddedForHarvest.$typeName, fullTypeName: composeSuiType( HSuiAddedForHarvest.$typeName, ...[] ) as "0x0::hive_profile::HSuiAddedForHarvest", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HSuiAddedForHarvest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HSuiAddedForHarvest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HSuiAddedForHarvest.fromBcs( data, ), bcs: HSuiAddedForHarvest.bcs, fromJSONField: (field: any) => HSuiAddedForHarvest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HSuiAddedForHarvest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HSuiAddedForHarvest.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HSuiAddedForHarvest.fetch( client, id, ), new: ( fields: HSuiAddedForHarvestFields, ) => { return new HSuiAddedForHarvest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HSuiAddedForHarvest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HSuiAddedForHarvest>> { return phantom(HSuiAddedForHarvest.reified( )); } static get p() { return HSuiAddedForHarvest.phantom() }

 static get bcs() { return bcs.struct("HSuiAddedForHarvest", {

 yield_added: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HSuiAddedForHarvest { return HSuiAddedForHarvest.reified( ).new( { yieldAdded: decodeFromFields("u64", fields.yield_added) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HSuiAddedForHarvest { if (!isHSuiAddedForHarvest(item.type)) { throw new Error("not a HSuiAddedForHarvest type");

 }

 return HSuiAddedForHarvest.reified( ).new( { yieldAdded: decodeFromFieldsWithTypes("u64", item.fields.yield_added) } ) }

 static fromBcs( data: Uint8Array ): HSuiAddedForHarvest { return HSuiAddedForHarvest.fromFields( HSuiAddedForHarvest.bcs.parse(data) ) }

 toJSONField() { return {

 yieldAdded: this.yieldAdded.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HSuiAddedForHarvest { return HSuiAddedForHarvest.reified( ).new( { yieldAdded: decodeFromJSONField("u64", field.yieldAdded) } ) }

 static fromJSON( json: Record<string, any> ): HSuiAddedForHarvest { if (json.$typeName !== HSuiAddedForHarvest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HSuiAddedForHarvest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HSuiAddedForHarvest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHSuiAddedForHarvest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HSuiAddedForHarvest object`); } return HSuiAddedForHarvest.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HSuiAddedForHarvest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HSuiAddedForHarvest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHSuiAddedForHarvest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HSuiAddedForHarvest object`); }
 return HSuiAddedForHarvest.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HSuiDisperser =============================== */

export function isHSuiDisperser(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x0::hive_profile::HSuiDisperser<"); }

export interface HSuiDisperserFields<X extends PhantomTypeArgument> { id: ToField<UID>; incomingHsuiForAssets: ToField<Balance<X>>; hsuiForAssets: ToField<Balance<X>>; globalDispersalIndex: ToField<"u256">; moduleVersion: ToField<"u64"> }

export type HSuiDisperserReified<X extends PhantomTypeArgument> = Reified< HSuiDisperser<X>, HSuiDisperserFields<X> >;

export class HSuiDisperser<X extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x0::hive_profile::HSuiDisperser"; static readonly $numTypeParams = 1;

 readonly $typeName = HSuiDisperser.$typeName;

 readonly $fullTypeName: `0x0::hive_profile::HSuiDisperser<${PhantomToTypeStr<X>}>`;

 readonly $typeArgs: [PhantomToTypeStr<X>];

 readonly id: ToField<UID>; readonly incomingHsuiForAssets: ToField<Balance<X>>; readonly hsuiForAssets: ToField<Balance<X>>; readonly globalDispersalIndex: ToField<"u256">; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: HSuiDisperserFields<X>, ) { this.$fullTypeName = composeSuiType( HSuiDisperser.$typeName, ...typeArgs ) as `0x0::hive_profile::HSuiDisperser<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.incomingHsuiForAssets = fields.incomingHsuiForAssets;; this.hsuiForAssets = fields.hsuiForAssets;; this.globalDispersalIndex = fields.globalDispersalIndex;; this.moduleVersion = fields.moduleVersion; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): HSuiDisperserReified<ToPhantomTypeArgument<X>> { return { typeName: HSuiDisperser.$typeName, fullTypeName: composeSuiType( HSuiDisperser.$typeName, ...[extractType(X)] ) as `0x0::hive_profile::HSuiDisperser<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => HSuiDisperser.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HSuiDisperser.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => HSuiDisperser.fromBcs( X, data, ), bcs: HSuiDisperser.bcs, fromJSONField: (field: any) => HSuiDisperser.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => HSuiDisperser.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => HSuiDisperser.fromSuiParsedData( X, content, ), fetch: async (client: SuiClient, id: string) => HSuiDisperser.fetch( client, X, id, ), new: ( fields: HSuiDisperserFields<ToPhantomTypeArgument<X>>, ) => { return new HSuiDisperser( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return HSuiDisperser.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<HSuiDisperser<ToPhantomTypeArgument<X>>>> { return phantom(HSuiDisperser.reified( X )); } static get p() { return HSuiDisperser.phantom }

 static get bcs() { return bcs.struct("HSuiDisperser", {

 id: UID.bcs, incoming_hsui_for_assets: Balance.bcs, hsui_for_assets: Balance.bcs, global_dispersal_index: bcs.u256(), module_version: bcs.u64()

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): HSuiDisperser<ToPhantomTypeArgument<X>> { return HSuiDisperser.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), incomingHsuiForAssets: decodeFromFields(Balance.reified(typeArg), fields.incoming_hsui_for_assets), hsuiForAssets: decodeFromFields(Balance.reified(typeArg), fields.hsui_for_assets), globalDispersalIndex: decodeFromFields("u256", fields.global_dispersal_index), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): HSuiDisperser<ToPhantomTypeArgument<X>> { if (!isHSuiDisperser(item.type)) { throw new Error("not a HSuiDisperser type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return HSuiDisperser.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), incomingHsuiForAssets: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.incoming_hsui_for_assets), hsuiForAssets: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.hsui_for_assets), globalDispersalIndex: decodeFromFieldsWithTypes("u256", item.fields.global_dispersal_index), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): HSuiDisperser<ToPhantomTypeArgument<X>> { return HSuiDisperser.fromFields( typeArg, HSuiDisperser.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,incomingHsuiForAssets: this.incomingHsuiForAssets.toJSONField(),hsuiForAssets: this.hsuiForAssets.toJSONField(),globalDispersalIndex: this.globalDispersalIndex.toString(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): HSuiDisperser<ToPhantomTypeArgument<X>> { return HSuiDisperser.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), incomingHsuiForAssets: decodeFromJSONField(Balance.reified(typeArg), field.incomingHsuiForAssets), hsuiForAssets: decodeFromJSONField(Balance.reified(typeArg), field.hsuiForAssets), globalDispersalIndex: decodeFromJSONField("u256", field.globalDispersalIndex), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): HSuiDisperser<ToPhantomTypeArgument<X>> { if (json.$typeName !== HSuiDisperser.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(HSuiDisperser.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return HSuiDisperser.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): HSuiDisperser<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHSuiDisperser(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HSuiDisperser object`); } return HSuiDisperser.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<HSuiDisperser<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HSuiDisperser object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHSuiDisperser(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HSuiDisperser object`); }
 return HSuiDisperser.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HarvestRewardsForAsset =============================== */

export function isHarvestRewardsForAsset(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HarvestRewardsForAsset"; }

export interface HarvestRewardsForAssetFields { version: ToField<"u64">; hsuiHarvested: ToField<"u64">; gemsHarvested: ToField<"u64"> }

export type HarvestRewardsForAssetReified = Reified< HarvestRewardsForAsset, HarvestRewardsForAssetFields >;

export class HarvestRewardsForAsset implements StructClass { static readonly $typeName = "0x0::hive_profile::HarvestRewardsForAsset"; static readonly $numTypeParams = 0;

 readonly $typeName = HarvestRewardsForAsset.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HarvestRewardsForAsset";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly hsuiHarvested: ToField<"u64">; readonly gemsHarvested: ToField<"u64">

 private constructor(typeArgs: [], fields: HarvestRewardsForAssetFields, ) { this.$fullTypeName = composeSuiType( HarvestRewardsForAsset.$typeName, ...typeArgs ) as "0x0::hive_profile::HarvestRewardsForAsset"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.hsuiHarvested = fields.hsuiHarvested;; this.gemsHarvested = fields.gemsHarvested; }

 static reified( ): HarvestRewardsForAssetReified { return { typeName: HarvestRewardsForAsset.$typeName, fullTypeName: composeSuiType( HarvestRewardsForAsset.$typeName, ...[] ) as "0x0::hive_profile::HarvestRewardsForAsset", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HarvestRewardsForAsset.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HarvestRewardsForAsset.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HarvestRewardsForAsset.fromBcs( data, ), bcs: HarvestRewardsForAsset.bcs, fromJSONField: (field: any) => HarvestRewardsForAsset.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HarvestRewardsForAsset.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HarvestRewardsForAsset.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HarvestRewardsForAsset.fetch( client, id, ), new: ( fields: HarvestRewardsForAssetFields, ) => { return new HarvestRewardsForAsset( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HarvestRewardsForAsset.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HarvestRewardsForAsset>> { return phantom(HarvestRewardsForAsset.reified( )); } static get p() { return HarvestRewardsForAsset.phantom() }

 static get bcs() { return bcs.struct("HarvestRewardsForAsset", {

 version: bcs.u64(), hsui_harvested: bcs.u64(), gems_harvested: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HarvestRewardsForAsset { return HarvestRewardsForAsset.reified( ).new( { version: decodeFromFields("u64", fields.version), hsuiHarvested: decodeFromFields("u64", fields.hsui_harvested), gemsHarvested: decodeFromFields("u64", fields.gems_harvested) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HarvestRewardsForAsset { if (!isHarvestRewardsForAsset(item.type)) { throw new Error("not a HarvestRewardsForAsset type");

 }

 return HarvestRewardsForAsset.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), hsuiHarvested: decodeFromFieldsWithTypes("u64", item.fields.hsui_harvested), gemsHarvested: decodeFromFieldsWithTypes("u64", item.fields.gems_harvested) } ) }

 static fromBcs( data: Uint8Array ): HarvestRewardsForAsset { return HarvestRewardsForAsset.fromFields( HarvestRewardsForAsset.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),hsuiHarvested: this.hsuiHarvested.toString(),gemsHarvested: this.gemsHarvested.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HarvestRewardsForAsset { return HarvestRewardsForAsset.reified( ).new( { version: decodeFromJSONField("u64", field.version), hsuiHarvested: decodeFromJSONField("u64", field.hsuiHarvested), gemsHarvested: decodeFromJSONField("u64", field.gemsHarvested) } ) }

 static fromJSON( json: Record<string, any> ): HarvestRewardsForAsset { if (json.$typeName !== HarvestRewardsForAsset.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HarvestRewardsForAsset.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HarvestRewardsForAsset { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHarvestRewardsForAsset(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HarvestRewardsForAsset object`); } return HarvestRewardsForAsset.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HarvestRewardsForAsset> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HarvestRewardsForAsset object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHarvestRewardsForAsset(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HarvestRewardsForAsset object`); }
 return HarvestRewardsForAsset.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HighestBidListingUnsold =============================== */

export function isHighestBidListingUnsold(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HighestBidListingUnsold"; }

export interface HighestBidListingUnsoldFields { version: ToField<"u64">; listedByProfile: ToField<"address"> }

export type HighestBidListingUnsoldReified = Reified< HighestBidListingUnsold, HighestBidListingUnsoldFields >;

export class HighestBidListingUnsold implements StructClass { static readonly $typeName = "0x0::hive_profile::HighestBidListingUnsold"; static readonly $numTypeParams = 0;

 readonly $typeName = HighestBidListingUnsold.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HighestBidListingUnsold";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly listedByProfile: ToField<"address">

 private constructor(typeArgs: [], fields: HighestBidListingUnsoldFields, ) { this.$fullTypeName = composeSuiType( HighestBidListingUnsold.$typeName, ...typeArgs ) as "0x0::hive_profile::HighestBidListingUnsold"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.listedByProfile = fields.listedByProfile; }

 static reified( ): HighestBidListingUnsoldReified { return { typeName: HighestBidListingUnsold.$typeName, fullTypeName: composeSuiType( HighestBidListingUnsold.$typeName, ...[] ) as "0x0::hive_profile::HighestBidListingUnsold", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HighestBidListingUnsold.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HighestBidListingUnsold.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HighestBidListingUnsold.fromBcs( data, ), bcs: HighestBidListingUnsold.bcs, fromJSONField: (field: any) => HighestBidListingUnsold.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HighestBidListingUnsold.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HighestBidListingUnsold.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HighestBidListingUnsold.fetch( client, id, ), new: ( fields: HighestBidListingUnsoldFields, ) => { return new HighestBidListingUnsold( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HighestBidListingUnsold.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HighestBidListingUnsold>> { return phantom(HighestBidListingUnsold.reified( )); } static get p() { return HighestBidListingUnsold.phantom() }

 static get bcs() { return bcs.struct("HighestBidListingUnsold", {

 version: bcs.u64(), listed_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): HighestBidListingUnsold { return HighestBidListingUnsold.reified( ).new( { version: decodeFromFields("u64", fields.version), listedByProfile: decodeFromFields("address", fields.listed_by_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HighestBidListingUnsold { if (!isHighestBidListingUnsold(item.type)) { throw new Error("not a HighestBidListingUnsold type");

 }

 return HighestBidListingUnsold.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), listedByProfile: decodeFromFieldsWithTypes("address", item.fields.listed_by_profile) } ) }

 static fromBcs( data: Uint8Array ): HighestBidListingUnsold { return HighestBidListingUnsold.fromFields( HighestBidListingUnsold.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),listedByProfile: this.listedByProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HighestBidListingUnsold { return HighestBidListingUnsold.reified( ).new( { version: decodeFromJSONField("u64", field.version), listedByProfile: decodeFromJSONField("address", field.listedByProfile) } ) }

 static fromJSON( json: Record<string, any> ): HighestBidListingUnsold { if (json.$typeName !== HighestBidListingUnsold.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HighestBidListingUnsold.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HighestBidListingUnsold { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHighestBidListingUnsold(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HighestBidListingUnsold object`); } return HighestBidListingUnsold.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HighestBidListingUnsold> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HighestBidListingUnsold object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHighestBidListingUnsold(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HighestBidListingUnsold object`); }
 return HighestBidListingUnsold.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveAccessPaymentProcessed =============================== */

export function isHiveAccessPaymentProcessed(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveAccessPaymentProcessed"; }

export interface HiveAccessPaymentProcessedFields { subscriberProfileAddr: ToField<"address">; hiveOwnerProfile: ToField<"address">; accessType: ToField<"u8">; accessCost: ToField<"u64">; hiveTwapPrice: ToField<"u256">; gemsToTransferAmt: ToField<"u64">; totalRoyaltyAmt: ToField<"u64">; treasuryAmt: ToField<"u64">; gemsBurnt: ToField<"u64"> }

export type HiveAccessPaymentProcessedReified = Reified< HiveAccessPaymentProcessed, HiveAccessPaymentProcessedFields >;

export class HiveAccessPaymentProcessed implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveAccessPaymentProcessed"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveAccessPaymentProcessed.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveAccessPaymentProcessed";

 readonly $typeArgs: [];

 readonly subscriberProfileAddr: ToField<"address">; readonly hiveOwnerProfile: ToField<"address">; readonly accessType: ToField<"u8">; readonly accessCost: ToField<"u64">; readonly hiveTwapPrice: ToField<"u256">; readonly gemsToTransferAmt: ToField<"u64">; readonly totalRoyaltyAmt: ToField<"u64">; readonly treasuryAmt: ToField<"u64">; readonly gemsBurnt: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveAccessPaymentProcessedFields, ) { this.$fullTypeName = composeSuiType( HiveAccessPaymentProcessed.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveAccessPaymentProcessed"; this.$typeArgs = typeArgs;

 this.subscriberProfileAddr = fields.subscriberProfileAddr;; this.hiveOwnerProfile = fields.hiveOwnerProfile;; this.accessType = fields.accessType;; this.accessCost = fields.accessCost;; this.hiveTwapPrice = fields.hiveTwapPrice;; this.gemsToTransferAmt = fields.gemsToTransferAmt;; this.totalRoyaltyAmt = fields.totalRoyaltyAmt;; this.treasuryAmt = fields.treasuryAmt;; this.gemsBurnt = fields.gemsBurnt; }

 static reified( ): HiveAccessPaymentProcessedReified { return { typeName: HiveAccessPaymentProcessed.$typeName, fullTypeName: composeSuiType( HiveAccessPaymentProcessed.$typeName, ...[] ) as "0x0::hive_profile::HiveAccessPaymentProcessed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAccessPaymentProcessed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAccessPaymentProcessed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAccessPaymentProcessed.fromBcs( data, ), bcs: HiveAccessPaymentProcessed.bcs, fromJSONField: (field: any) => HiveAccessPaymentProcessed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAccessPaymentProcessed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAccessPaymentProcessed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveAccessPaymentProcessed.fetch( client, id, ), new: ( fields: HiveAccessPaymentProcessedFields, ) => { return new HiveAccessPaymentProcessed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAccessPaymentProcessed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAccessPaymentProcessed>> { return phantom(HiveAccessPaymentProcessed.reified( )); } static get p() { return HiveAccessPaymentProcessed.phantom() }

 static get bcs() { return bcs.struct("HiveAccessPaymentProcessed", {

 subscriber_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), hive_owner_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), access_type: bcs.u8(), access_cost: bcs.u64(), hive_twap_price: bcs.u256(), gems_to_transfer_amt: bcs.u64(), total_royalty_amt: bcs.u64(), treasury_amt: bcs.u64(), gems_burnt: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveAccessPaymentProcessed { return HiveAccessPaymentProcessed.reified( ).new( { subscriberProfileAddr: decodeFromFields("address", fields.subscriber_profile_addr), hiveOwnerProfile: decodeFromFields("address", fields.hive_owner_profile), accessType: decodeFromFields("u8", fields.access_type), accessCost: decodeFromFields("u64", fields.access_cost), hiveTwapPrice: decodeFromFields("u256", fields.hive_twap_price), gemsToTransferAmt: decodeFromFields("u64", fields.gems_to_transfer_amt), totalRoyaltyAmt: decodeFromFields("u64", fields.total_royalty_amt), treasuryAmt: decodeFromFields("u64", fields.treasury_amt), gemsBurnt: decodeFromFields("u64", fields.gems_burnt) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAccessPaymentProcessed { if (!isHiveAccessPaymentProcessed(item.type)) { throw new Error("not a HiveAccessPaymentProcessed type");

 }

 return HiveAccessPaymentProcessed.reified( ).new( { subscriberProfileAddr: decodeFromFieldsWithTypes("address", item.fields.subscriber_profile_addr), hiveOwnerProfile: decodeFromFieldsWithTypes("address", item.fields.hive_owner_profile), accessType: decodeFromFieldsWithTypes("u8", item.fields.access_type), accessCost: decodeFromFieldsWithTypes("u64", item.fields.access_cost), hiveTwapPrice: decodeFromFieldsWithTypes("u256", item.fields.hive_twap_price), gemsToTransferAmt: decodeFromFieldsWithTypes("u64", item.fields.gems_to_transfer_amt), totalRoyaltyAmt: decodeFromFieldsWithTypes("u64", item.fields.total_royalty_amt), treasuryAmt: decodeFromFieldsWithTypes("u64", item.fields.treasury_amt), gemsBurnt: decodeFromFieldsWithTypes("u64", item.fields.gems_burnt) } ) }

 static fromBcs( data: Uint8Array ): HiveAccessPaymentProcessed { return HiveAccessPaymentProcessed.fromFields( HiveAccessPaymentProcessed.bcs.parse(data) ) }

 toJSONField() { return {

 subscriberProfileAddr: this.subscriberProfileAddr,hiveOwnerProfile: this.hiveOwnerProfile,accessType: this.accessType,accessCost: this.accessCost.toString(),hiveTwapPrice: this.hiveTwapPrice.toString(),gemsToTransferAmt: this.gemsToTransferAmt.toString(),totalRoyaltyAmt: this.totalRoyaltyAmt.toString(),treasuryAmt: this.treasuryAmt.toString(),gemsBurnt: this.gemsBurnt.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAccessPaymentProcessed { return HiveAccessPaymentProcessed.reified( ).new( { subscriberProfileAddr: decodeFromJSONField("address", field.subscriberProfileAddr), hiveOwnerProfile: decodeFromJSONField("address", field.hiveOwnerProfile), accessType: decodeFromJSONField("u8", field.accessType), accessCost: decodeFromJSONField("u64", field.accessCost), hiveTwapPrice: decodeFromJSONField("u256", field.hiveTwapPrice), gemsToTransferAmt: decodeFromJSONField("u64", field.gemsToTransferAmt), totalRoyaltyAmt: decodeFromJSONField("u64", field.totalRoyaltyAmt), treasuryAmt: decodeFromJSONField("u64", field.treasuryAmt), gemsBurnt: decodeFromJSONField("u64", field.gemsBurnt) } ) }

 static fromJSON( json: Record<string, any> ): HiveAccessPaymentProcessed { if (json.$typeName !== HiveAccessPaymentProcessed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAccessPaymentProcessed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAccessPaymentProcessed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAccessPaymentProcessed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAccessPaymentProcessed object`); } return HiveAccessPaymentProcessed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAccessPaymentProcessed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAccessPaymentProcessed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAccessPaymentProcessed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAccessPaymentProcessed object`); }
 return HiveAccessPaymentProcessed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveAccessPlanUpdated =============================== */

export function isHiveAccessPlanUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveAccessPlanUpdated"; }

export interface HiveAccessPlanUpdatedFields { profileAddr: ToField<"address">; username: ToField<String>; newWorkerAccessCost: ToField<"u64">; newDroneAccessCost: ToField<"u64">; newQueenAccessCost: ToField<"u64"> }

export type HiveAccessPlanUpdatedReified = Reified< HiveAccessPlanUpdated, HiveAccessPlanUpdatedFields >;

export class HiveAccessPlanUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveAccessPlanUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveAccessPlanUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveAccessPlanUpdated";

 readonly $typeArgs: [];

 readonly profileAddr: ToField<"address">; readonly username: ToField<String>; readonly newWorkerAccessCost: ToField<"u64">; readonly newDroneAccessCost: ToField<"u64">; readonly newQueenAccessCost: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveAccessPlanUpdatedFields, ) { this.$fullTypeName = composeSuiType( HiveAccessPlanUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveAccessPlanUpdated"; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.newWorkerAccessCost = fields.newWorkerAccessCost;; this.newDroneAccessCost = fields.newDroneAccessCost;; this.newQueenAccessCost = fields.newQueenAccessCost; }

 static reified( ): HiveAccessPlanUpdatedReified { return { typeName: HiveAccessPlanUpdated.$typeName, fullTypeName: composeSuiType( HiveAccessPlanUpdated.$typeName, ...[] ) as "0x0::hive_profile::HiveAccessPlanUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAccessPlanUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAccessPlanUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAccessPlanUpdated.fromBcs( data, ), bcs: HiveAccessPlanUpdated.bcs, fromJSONField: (field: any) => HiveAccessPlanUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAccessPlanUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAccessPlanUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveAccessPlanUpdated.fetch( client, id, ), new: ( fields: HiveAccessPlanUpdatedFields, ) => { return new HiveAccessPlanUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAccessPlanUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAccessPlanUpdated>> { return phantom(HiveAccessPlanUpdated.reified( )); } static get p() { return HiveAccessPlanUpdated.phantom() }

 static get bcs() { return bcs.struct("HiveAccessPlanUpdated", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, new_worker_access_cost: bcs.u64(), new_drone_access_cost: bcs.u64(), new_queen_access_cost: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveAccessPlanUpdated { return HiveAccessPlanUpdated.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String.reified(), fields.username), newWorkerAccessCost: decodeFromFields("u64", fields.new_worker_access_cost), newDroneAccessCost: decodeFromFields("u64", fields.new_drone_access_cost), newQueenAccessCost: decodeFromFields("u64", fields.new_queen_access_cost) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAccessPlanUpdated { if (!isHiveAccessPlanUpdated(item.type)) { throw new Error("not a HiveAccessPlanUpdated type");

 }

 return HiveAccessPlanUpdated.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), newWorkerAccessCost: decodeFromFieldsWithTypes("u64", item.fields.new_worker_access_cost), newDroneAccessCost: decodeFromFieldsWithTypes("u64", item.fields.new_drone_access_cost), newQueenAccessCost: decodeFromFieldsWithTypes("u64", item.fields.new_queen_access_cost) } ) }

 static fromBcs( data: Uint8Array ): HiveAccessPlanUpdated { return HiveAccessPlanUpdated.fromFields( HiveAccessPlanUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,username: this.username,newWorkerAccessCost: this.newWorkerAccessCost.toString(),newDroneAccessCost: this.newDroneAccessCost.toString(),newQueenAccessCost: this.newQueenAccessCost.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAccessPlanUpdated { return HiveAccessPlanUpdated.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String.reified(), field.username), newWorkerAccessCost: decodeFromJSONField("u64", field.newWorkerAccessCost), newDroneAccessCost: decodeFromJSONField("u64", field.newDroneAccessCost), newQueenAccessCost: decodeFromJSONField("u64", field.newQueenAccessCost) } ) }

 static fromJSON( json: Record<string, any> ): HiveAccessPlanUpdated { if (json.$typeName !== HiveAccessPlanUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAccessPlanUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAccessPlanUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAccessPlanUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAccessPlanUpdated object`); } return HiveAccessPlanUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAccessPlanUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAccessPlanUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAccessPlanUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAccessPlanUpdated object`); }
 return HiveAccessPlanUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveAddedForHarvest =============================== */

export function isHiveAddedForHarvest(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveAddedForHarvest"; }

export interface HiveAddedForHarvestFields { yieldAdded: ToField<"u64"> }

export type HiveAddedForHarvestReified = Reified< HiveAddedForHarvest, HiveAddedForHarvestFields >;

export class HiveAddedForHarvest implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveAddedForHarvest"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveAddedForHarvest.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveAddedForHarvest";

 readonly $typeArgs: [];

 readonly yieldAdded: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveAddedForHarvestFields, ) { this.$fullTypeName = composeSuiType( HiveAddedForHarvest.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveAddedForHarvest"; this.$typeArgs = typeArgs;

 this.yieldAdded = fields.yieldAdded; }

 static reified( ): HiveAddedForHarvestReified { return { typeName: HiveAddedForHarvest.$typeName, fullTypeName: composeSuiType( HiveAddedForHarvest.$typeName, ...[] ) as "0x0::hive_profile::HiveAddedForHarvest", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAddedForHarvest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAddedForHarvest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAddedForHarvest.fromBcs( data, ), bcs: HiveAddedForHarvest.bcs, fromJSONField: (field: any) => HiveAddedForHarvest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAddedForHarvest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAddedForHarvest.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveAddedForHarvest.fetch( client, id, ), new: ( fields: HiveAddedForHarvestFields, ) => { return new HiveAddedForHarvest( [], fields ) }, kind: "StructClassReified", } }

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

 static async fetch( client: SuiClient, id: string ): Promise<HiveAddedForHarvest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAddedForHarvest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAddedForHarvest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAddedForHarvest object`); }
 return HiveAddedForHarvest.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveAppAccessCapability =============================== */

export function isHiveAppAccessCapability(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveAppAccessCapability"; }

export interface HiveAppAccessCapabilityFields { id: ToField<UID>; appName: ToField<String1>; onlyOwnerCanAddApp: ToField<"bool">; onlyOwnerCanAccessApp: ToField<"bool">; onlyOwnerCanRemoveApp: ToField<"bool"> }

export type HiveAppAccessCapabilityReified = Reified< HiveAppAccessCapability, HiveAppAccessCapabilityFields >;

export class HiveAppAccessCapability implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveAppAccessCapability"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveAppAccessCapability.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveAppAccessCapability";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly appName: ToField<String1>; readonly onlyOwnerCanAddApp: ToField<"bool">; readonly onlyOwnerCanAccessApp: ToField<"bool">; readonly onlyOwnerCanRemoveApp: ToField<"bool">

 private constructor(typeArgs: [], fields: HiveAppAccessCapabilityFields, ) { this.$fullTypeName = composeSuiType( HiveAppAccessCapability.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveAppAccessCapability"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.appName = fields.appName;; this.onlyOwnerCanAddApp = fields.onlyOwnerCanAddApp;; this.onlyOwnerCanAccessApp = fields.onlyOwnerCanAccessApp;; this.onlyOwnerCanRemoveApp = fields.onlyOwnerCanRemoveApp; }

 static reified( ): HiveAppAccessCapabilityReified { return { typeName: HiveAppAccessCapability.$typeName, fullTypeName: composeSuiType( HiveAppAccessCapability.$typeName, ...[] ) as "0x0::hive_profile::HiveAppAccessCapability", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAppAccessCapability.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAppAccessCapability.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAppAccessCapability.fromBcs( data, ), bcs: HiveAppAccessCapability.bcs, fromJSONField: (field: any) => HiveAppAccessCapability.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAppAccessCapability.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAppAccessCapability.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveAppAccessCapability.fetch( client, id, ), new: ( fields: HiveAppAccessCapabilityFields, ) => { return new HiveAppAccessCapability( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAppAccessCapability.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAppAccessCapability>> { return phantom(HiveAppAccessCapability.reified( )); } static get p() { return HiveAppAccessCapability.phantom() }

 static get bcs() { return bcs.struct("HiveAppAccessCapability", {

 id: UID.bcs, app_name: String1.bcs, only_owner_can_add_app: bcs.bool(), only_owner_can_access_app: bcs.bool(), only_owner_can_remove_app: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): HiveAppAccessCapability { return HiveAppAccessCapability.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), appName: decodeFromFields(String1.reified(), fields.app_name), onlyOwnerCanAddApp: decodeFromFields("bool", fields.only_owner_can_add_app), onlyOwnerCanAccessApp: decodeFromFields("bool", fields.only_owner_can_access_app), onlyOwnerCanRemoveApp: decodeFromFields("bool", fields.only_owner_can_remove_app) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAppAccessCapability { if (!isHiveAppAccessCapability(item.type)) { throw new Error("not a HiveAppAccessCapability type");

 }

 return HiveAppAccessCapability.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), appName: decodeFromFieldsWithTypes(String1.reified(), item.fields.app_name), onlyOwnerCanAddApp: decodeFromFieldsWithTypes("bool", item.fields.only_owner_can_add_app), onlyOwnerCanAccessApp: decodeFromFieldsWithTypes("bool", item.fields.only_owner_can_access_app), onlyOwnerCanRemoveApp: decodeFromFieldsWithTypes("bool", item.fields.only_owner_can_remove_app) } ) }

 static fromBcs( data: Uint8Array ): HiveAppAccessCapability { return HiveAppAccessCapability.fromFields( HiveAppAccessCapability.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,appName: this.appName,onlyOwnerCanAddApp: this.onlyOwnerCanAddApp,onlyOwnerCanAccessApp: this.onlyOwnerCanAccessApp,onlyOwnerCanRemoveApp: this.onlyOwnerCanRemoveApp,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAppAccessCapability { return HiveAppAccessCapability.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), appName: decodeFromJSONField(String1.reified(), field.appName), onlyOwnerCanAddApp: decodeFromJSONField("bool", field.onlyOwnerCanAddApp), onlyOwnerCanAccessApp: decodeFromJSONField("bool", field.onlyOwnerCanAccessApp), onlyOwnerCanRemoveApp: decodeFromJSONField("bool", field.onlyOwnerCanRemoveApp) } ) }

 static fromJSON( json: Record<string, any> ): HiveAppAccessCapability { if (json.$typeName !== HiveAppAccessCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAppAccessCapability.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAppAccessCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAppAccessCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAppAccessCapability object`); } return HiveAppAccessCapability.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAppAccessCapability> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAppAccessCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAppAccessCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAppAccessCapability object`); }
 return HiveAppAccessCapability.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveAsset =============================== */

export function isHiveAsset(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveAsset"; }

export interface HiveAssetFields { id: ToField<UID>; version: ToField<"u64">; power: ToField<"u64">; creatorProfile: ToField<"address">; name: ToField<String>; imgUrl: ToField<Url>; collectionName: ToField<String>; prompts: ToField<LinkedTable<String, ToPhantom<String>>>; isBorrowed: ToField<"bool">; isStaked: ToField<"bool">; lockupDuration: ToField<"u8">; unlockTimestamp: ToField<"u64">; availableGems: ToField<HiveGems>; claimIndex: ToField<"u256">; hsuiClaimIndex: ToField<"u256">; totalHsuiClaimed: ToField<"u64">; totalGemsClaimed: ToField<"u64">; activeSkins: ToField<LinkedTable<String, ToPhantom<SkinRecord>>> }

export type HiveAssetReified = Reified< HiveAsset, HiveAssetFields >;

export class HiveAsset implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveAsset"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveAsset.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveAsset";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly version: ToField<"u64">; readonly power: ToField<"u64">; readonly creatorProfile: ToField<"address">; readonly name: ToField<String>; readonly imgUrl: ToField<Url>; readonly collectionName: ToField<String>; readonly prompts: ToField<LinkedTable<String, ToPhantom<String>>>; readonly isBorrowed: ToField<"bool">; readonly isStaked: ToField<"bool">; readonly lockupDuration: ToField<"u8">; readonly unlockTimestamp: ToField<"u64">; readonly availableGems: ToField<HiveGems>; readonly claimIndex: ToField<"u256">; readonly hsuiClaimIndex: ToField<"u256">; readonly totalHsuiClaimed: ToField<"u64">; readonly totalGemsClaimed: ToField<"u64">; readonly activeSkins: ToField<LinkedTable<String, ToPhantom<SkinRecord>>>

 private constructor(typeArgs: [], fields: HiveAssetFields, ) { this.$fullTypeName = composeSuiType( HiveAsset.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveAsset"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.version = fields.version;; this.power = fields.power;; this.creatorProfile = fields.creatorProfile;; this.name = fields.name;; this.imgUrl = fields.imgUrl;; this.collectionName = fields.collectionName;; this.prompts = fields.prompts;; this.isBorrowed = fields.isBorrowed;; this.isStaked = fields.isStaked;; this.lockupDuration = fields.lockupDuration;; this.unlockTimestamp = fields.unlockTimestamp;; this.availableGems = fields.availableGems;; this.claimIndex = fields.claimIndex;; this.hsuiClaimIndex = fields.hsuiClaimIndex;; this.totalHsuiClaimed = fields.totalHsuiClaimed;; this.totalGemsClaimed = fields.totalGemsClaimed;; this.activeSkins = fields.activeSkins; }

 static reified( ): HiveAssetReified { return { typeName: HiveAsset.$typeName, fullTypeName: composeSuiType( HiveAsset.$typeName, ...[] ) as "0x0::hive_profile::HiveAsset", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAsset.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAsset.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAsset.fromBcs( data, ), bcs: HiveAsset.bcs, fromJSONField: (field: any) => HiveAsset.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAsset.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAsset.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveAsset.fetch( client, id, ), new: ( fields: HiveAssetFields, ) => { return new HiveAsset( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAsset.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAsset>> { return phantom(HiveAsset.reified( )); } static get p() { return HiveAsset.phantom() }

 static get bcs() { return bcs.struct("HiveAsset", {

 id: UID.bcs, version: bcs.u64(), power: bcs.u64(), creator_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), name: String.bcs, img_url: Url.bcs, collection_name: String.bcs, prompts: LinkedTable.bcs(String.bcs), is_borrowed: bcs.bool(), is_staked: bcs.bool(), lockup_duration: bcs.u8(), unlock_timestamp: bcs.u64(), available_gems: HiveGems.bcs, claim_index: bcs.u256(), hsui_claim_index: bcs.u256(), total_hsui_claimed: bcs.u64(), total_gems_claimed: bcs.u64(), active_skins: LinkedTable.bcs(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): HiveAsset { return HiveAsset.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), version: decodeFromFields("u64", fields.version), power: decodeFromFields("u64", fields.power), creatorProfile: decodeFromFields("address", fields.creator_profile), name: decodeFromFields(String.reified(), fields.name), imgUrl: decodeFromFields(Url.reified(), fields.img_url), collectionName: decodeFromFields(String.reified(), fields.collection_name), prompts: decodeFromFields(LinkedTable.reified(String.reified(), reified.phantom(String.reified())), fields.prompts), isBorrowed: decodeFromFields("bool", fields.is_borrowed), isStaked: decodeFromFields("bool", fields.is_staked), lockupDuration: decodeFromFields("u8", fields.lockup_duration), unlockTimestamp: decodeFromFields("u64", fields.unlock_timestamp), availableGems: decodeFromFields(HiveGems.reified(), fields.available_gems), claimIndex: decodeFromFields("u256", fields.claim_index), hsuiClaimIndex: decodeFromFields("u256", fields.hsui_claim_index), totalHsuiClaimed: decodeFromFields("u64", fields.total_hsui_claimed), totalGemsClaimed: decodeFromFields("u64", fields.total_gems_claimed), activeSkins: decodeFromFields(LinkedTable.reified(String.reified(), reified.phantom(SkinRecord.reified())), fields.active_skins) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAsset { if (!isHiveAsset(item.type)) { throw new Error("not a HiveAsset type");

 }

 return HiveAsset.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), version: decodeFromFieldsWithTypes("u64", item.fields.version), power: decodeFromFieldsWithTypes("u64", item.fields.power), creatorProfile: decodeFromFieldsWithTypes("address", item.fields.creator_profile), name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), imgUrl: decodeFromFieldsWithTypes(Url.reified(), item.fields.img_url), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), prompts: decodeFromFieldsWithTypes(LinkedTable.reified(String.reified(), reified.phantom(String.reified())), item.fields.prompts), isBorrowed: decodeFromFieldsWithTypes("bool", item.fields.is_borrowed), isStaked: decodeFromFieldsWithTypes("bool", item.fields.is_staked), lockupDuration: decodeFromFieldsWithTypes("u8", item.fields.lockup_duration), unlockTimestamp: decodeFromFieldsWithTypes("u64", item.fields.unlock_timestamp), availableGems: decodeFromFieldsWithTypes(HiveGems.reified(), item.fields.available_gems), claimIndex: decodeFromFieldsWithTypes("u256", item.fields.claim_index), hsuiClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.hsui_claim_index), totalHsuiClaimed: decodeFromFieldsWithTypes("u64", item.fields.total_hsui_claimed), totalGemsClaimed: decodeFromFieldsWithTypes("u64", item.fields.total_gems_claimed), activeSkins: decodeFromFieldsWithTypes(LinkedTable.reified(String.reified(), reified.phantom(SkinRecord.reified())), item.fields.active_skins) } ) }

 static fromBcs( data: Uint8Array ): HiveAsset { return HiveAsset.fromFields( HiveAsset.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,version: this.version.toString(),power: this.power.toString(),creatorProfile: this.creatorProfile,name: this.name,imgUrl: this.imgUrl,collectionName: this.collectionName,prompts: this.prompts.toJSONField(),isBorrowed: this.isBorrowed,isStaked: this.isStaked,lockupDuration: this.lockupDuration,unlockTimestamp: this.unlockTimestamp.toString(),availableGems: this.availableGems.toJSONField(),claimIndex: this.claimIndex.toString(),hsuiClaimIndex: this.hsuiClaimIndex.toString(),totalHsuiClaimed: this.totalHsuiClaimed.toString(),totalGemsClaimed: this.totalGemsClaimed.toString(),activeSkins: this.activeSkins.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAsset { return HiveAsset.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), version: decodeFromJSONField("u64", field.version), power: decodeFromJSONField("u64", field.power), creatorProfile: decodeFromJSONField("address", field.creatorProfile), name: decodeFromJSONField(String.reified(), field.name), imgUrl: decodeFromJSONField(Url.reified(), field.imgUrl), collectionName: decodeFromJSONField(String.reified(), field.collectionName), prompts: decodeFromJSONField(LinkedTable.reified(String.reified(), reified.phantom(String.reified())), field.prompts), isBorrowed: decodeFromJSONField("bool", field.isBorrowed), isStaked: decodeFromJSONField("bool", field.isStaked), lockupDuration: decodeFromJSONField("u8", field.lockupDuration), unlockTimestamp: decodeFromJSONField("u64", field.unlockTimestamp), availableGems: decodeFromJSONField(HiveGems.reified(), field.availableGems), claimIndex: decodeFromJSONField("u256", field.claimIndex), hsuiClaimIndex: decodeFromJSONField("u256", field.hsuiClaimIndex), totalHsuiClaimed: decodeFromJSONField("u64", field.totalHsuiClaimed), totalGemsClaimed: decodeFromJSONField("u64", field.totalGemsClaimed), activeSkins: decodeFromJSONField(LinkedTable.reified(String.reified(), reified.phantom(SkinRecord.reified())), field.activeSkins) } ) }

 static fromJSON( json: Record<string, any> ): HiveAsset { if (json.$typeName !== HiveAsset.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAsset.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAsset { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAsset(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAsset object`); } return HiveAsset.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAsset> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAsset object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAsset(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAsset object`); }
 return HiveAsset.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveAssetBorrowed =============================== */

export function isHiveAssetBorrowed(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveAssetBorrowed"; }

export interface HiveAssetBorrowedFields { version: ToField<"u64">; borrowerProfile: ToField<"address">; lenderProfile: ToField<"address">; borrowPriceSui: ToField<"u64">; lockupDuration: ToField<"u8">; borrowStartSec: ToField<"u64">; borrowExpSec: ToField<"u64"> }

export type HiveAssetBorrowedReified = Reified< HiveAssetBorrowed, HiveAssetBorrowedFields >;

export class HiveAssetBorrowed implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveAssetBorrowed"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveAssetBorrowed.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveAssetBorrowed";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly borrowerProfile: ToField<"address">; readonly lenderProfile: ToField<"address">; readonly borrowPriceSui: ToField<"u64">; readonly lockupDuration: ToField<"u8">; readonly borrowStartSec: ToField<"u64">; readonly borrowExpSec: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveAssetBorrowedFields, ) { this.$fullTypeName = composeSuiType( HiveAssetBorrowed.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveAssetBorrowed"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.borrowerProfile = fields.borrowerProfile;; this.lenderProfile = fields.lenderProfile;; this.borrowPriceSui = fields.borrowPriceSui;; this.lockupDuration = fields.lockupDuration;; this.borrowStartSec = fields.borrowStartSec;; this.borrowExpSec = fields.borrowExpSec; }

 static reified( ): HiveAssetBorrowedReified { return { typeName: HiveAssetBorrowed.$typeName, fullTypeName: composeSuiType( HiveAssetBorrowed.$typeName, ...[] ) as "0x0::hive_profile::HiveAssetBorrowed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAssetBorrowed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAssetBorrowed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAssetBorrowed.fromBcs( data, ), bcs: HiveAssetBorrowed.bcs, fromJSONField: (field: any) => HiveAssetBorrowed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAssetBorrowed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAssetBorrowed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveAssetBorrowed.fetch( client, id, ), new: ( fields: HiveAssetBorrowedFields, ) => { return new HiveAssetBorrowed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAssetBorrowed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAssetBorrowed>> { return phantom(HiveAssetBorrowed.reified( )); } static get p() { return HiveAssetBorrowed.phantom() }

 static get bcs() { return bcs.struct("HiveAssetBorrowed", {

 version: bcs.u64(), borrower_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), lender_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), borrow_price_sui: bcs.u64(), lockup_duration: bcs.u8(), borrow_start_sec: bcs.u64(), borrow_exp_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveAssetBorrowed { return HiveAssetBorrowed.reified( ).new( { version: decodeFromFields("u64", fields.version), borrowerProfile: decodeFromFields("address", fields.borrower_profile), lenderProfile: decodeFromFields("address", fields.lender_profile), borrowPriceSui: decodeFromFields("u64", fields.borrow_price_sui), lockupDuration: decodeFromFields("u8", fields.lockup_duration), borrowStartSec: decodeFromFields("u64", fields.borrow_start_sec), borrowExpSec: decodeFromFields("u64", fields.borrow_exp_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAssetBorrowed { if (!isHiveAssetBorrowed(item.type)) { throw new Error("not a HiveAssetBorrowed type");

 }

 return HiveAssetBorrowed.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), borrowerProfile: decodeFromFieldsWithTypes("address", item.fields.borrower_profile), lenderProfile: decodeFromFieldsWithTypes("address", item.fields.lender_profile), borrowPriceSui: decodeFromFieldsWithTypes("u64", item.fields.borrow_price_sui), lockupDuration: decodeFromFieldsWithTypes("u8", item.fields.lockup_duration), borrowStartSec: decodeFromFieldsWithTypes("u64", item.fields.borrow_start_sec), borrowExpSec: decodeFromFieldsWithTypes("u64", item.fields.borrow_exp_sec) } ) }

 static fromBcs( data: Uint8Array ): HiveAssetBorrowed { return HiveAssetBorrowed.fromFields( HiveAssetBorrowed.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),borrowerProfile: this.borrowerProfile,lenderProfile: this.lenderProfile,borrowPriceSui: this.borrowPriceSui.toString(),lockupDuration: this.lockupDuration,borrowStartSec: this.borrowStartSec.toString(),borrowExpSec: this.borrowExpSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAssetBorrowed { return HiveAssetBorrowed.reified( ).new( { version: decodeFromJSONField("u64", field.version), borrowerProfile: decodeFromJSONField("address", field.borrowerProfile), lenderProfile: decodeFromJSONField("address", field.lenderProfile), borrowPriceSui: decodeFromJSONField("u64", field.borrowPriceSui), lockupDuration: decodeFromJSONField("u8", field.lockupDuration), borrowStartSec: decodeFromJSONField("u64", field.borrowStartSec), borrowExpSec: decodeFromJSONField("u64", field.borrowExpSec) } ) }

 static fromJSON( json: Record<string, any> ): HiveAssetBorrowed { if (json.$typeName !== HiveAssetBorrowed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAssetBorrowed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAssetBorrowed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAssetBorrowed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAssetBorrowed object`); } return HiveAssetBorrowed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAssetBorrowed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAssetBorrowed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAssetBorrowed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAssetBorrowed object`); }
 return HiveAssetBorrowed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveAssetStaked =============================== */

export function isHiveAssetStaked(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveAssetStaked"; }

export interface HiveAssetStakedFields { username: ToField<String1>; profileAddr: ToField<"address">; version: ToField<"u64">; duration: ToField<"u8">; newAssetPower: ToField<"u64">; unlockTimestamp: ToField<"u64"> }

export type HiveAssetStakedReified = Reified< HiveAssetStaked, HiveAssetStakedFields >;

export class HiveAssetStaked implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveAssetStaked"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveAssetStaked.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveAssetStaked";

 readonly $typeArgs: [];

 readonly username: ToField<String1>; readonly profileAddr: ToField<"address">; readonly version: ToField<"u64">; readonly duration: ToField<"u8">; readonly newAssetPower: ToField<"u64">; readonly unlockTimestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveAssetStakedFields, ) { this.$fullTypeName = composeSuiType( HiveAssetStaked.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveAssetStaked"; this.$typeArgs = typeArgs;

 this.username = fields.username;; this.profileAddr = fields.profileAddr;; this.version = fields.version;; this.duration = fields.duration;; this.newAssetPower = fields.newAssetPower;; this.unlockTimestamp = fields.unlockTimestamp; }

 static reified( ): HiveAssetStakedReified { return { typeName: HiveAssetStaked.$typeName, fullTypeName: composeSuiType( HiveAssetStaked.$typeName, ...[] ) as "0x0::hive_profile::HiveAssetStaked", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAssetStaked.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAssetStaked.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAssetStaked.fromBcs( data, ), bcs: HiveAssetStaked.bcs, fromJSONField: (field: any) => HiveAssetStaked.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAssetStaked.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAssetStaked.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveAssetStaked.fetch( client, id, ), new: ( fields: HiveAssetStakedFields, ) => { return new HiveAssetStaked( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAssetStaked.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAssetStaked>> { return phantom(HiveAssetStaked.reified( )); } static get p() { return HiveAssetStaked.phantom() }

 static get bcs() { return bcs.struct("HiveAssetStaked", {

 username: String1.bcs, profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), duration: bcs.u8(), new_asset_power: bcs.u64(), unlock_timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveAssetStaked { return HiveAssetStaked.reified( ).new( { username: decodeFromFields(String1.reified(), fields.username), profileAddr: decodeFromFields("address", fields.profile_addr), version: decodeFromFields("u64", fields.version), duration: decodeFromFields("u8", fields.duration), newAssetPower: decodeFromFields("u64", fields.new_asset_power), unlockTimestamp: decodeFromFields("u64", fields.unlock_timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAssetStaked { if (!isHiveAssetStaked(item.type)) { throw new Error("not a HiveAssetStaked type");

 }

 return HiveAssetStaked.reified( ).new( { username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), version: decodeFromFieldsWithTypes("u64", item.fields.version), duration: decodeFromFieldsWithTypes("u8", item.fields.duration), newAssetPower: decodeFromFieldsWithTypes("u64", item.fields.new_asset_power), unlockTimestamp: decodeFromFieldsWithTypes("u64", item.fields.unlock_timestamp) } ) }

 static fromBcs( data: Uint8Array ): HiveAssetStaked { return HiveAssetStaked.fromFields( HiveAssetStaked.bcs.parse(data) ) }

 toJSONField() { return {

 username: this.username,profileAddr: this.profileAddr,version: this.version.toString(),duration: this.duration,newAssetPower: this.newAssetPower.toString(),unlockTimestamp: this.unlockTimestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAssetStaked { return HiveAssetStaked.reified( ).new( { username: decodeFromJSONField(String1.reified(), field.username), profileAddr: decodeFromJSONField("address", field.profileAddr), version: decodeFromJSONField("u64", field.version), duration: decodeFromJSONField("u8", field.duration), newAssetPower: decodeFromJSONField("u64", field.newAssetPower), unlockTimestamp: decodeFromJSONField("u64", field.unlockTimestamp) } ) }

 static fromJSON( json: Record<string, any> ): HiveAssetStaked { if (json.$typeName !== HiveAssetStaked.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAssetStaked.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAssetStaked { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAssetStaked(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAssetStaked object`); } return HiveAssetStaked.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAssetStaked> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAssetStaked object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAssetStaked(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAssetStaked object`); }
 return HiveAssetStaked.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveAssetTransfered =============================== */

export function isHiveAssetTransfered(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveAssetTransfered"; }

export interface HiveAssetTransferedFields { version: ToField<"u64">; fromProfile: ToField<"address">; toProfile: ToField<"address"> }

export type HiveAssetTransferedReified = Reified< HiveAssetTransfered, HiveAssetTransferedFields >;

export class HiveAssetTransfered implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveAssetTransfered"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveAssetTransfered.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveAssetTransfered";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly fromProfile: ToField<"address">; readonly toProfile: ToField<"address">

 private constructor(typeArgs: [], fields: HiveAssetTransferedFields, ) { this.$fullTypeName = composeSuiType( HiveAssetTransfered.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveAssetTransfered"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.fromProfile = fields.fromProfile;; this.toProfile = fields.toProfile; }

 static reified( ): HiveAssetTransferedReified { return { typeName: HiveAssetTransfered.$typeName, fullTypeName: composeSuiType( HiveAssetTransfered.$typeName, ...[] ) as "0x0::hive_profile::HiveAssetTransfered", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAssetTransfered.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAssetTransfered.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAssetTransfered.fromBcs( data, ), bcs: HiveAssetTransfered.bcs, fromJSONField: (field: any) => HiveAssetTransfered.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAssetTransfered.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAssetTransfered.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveAssetTransfered.fetch( client, id, ), new: ( fields: HiveAssetTransferedFields, ) => { return new HiveAssetTransfered( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAssetTransfered.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAssetTransfered>> { return phantom(HiveAssetTransfered.reified( )); } static get p() { return HiveAssetTransfered.phantom() }

 static get bcs() { return bcs.struct("HiveAssetTransfered", {

 version: bcs.u64(), from_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), to_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): HiveAssetTransfered { return HiveAssetTransfered.reified( ).new( { version: decodeFromFields("u64", fields.version), fromProfile: decodeFromFields("address", fields.from_profile), toProfile: decodeFromFields("address", fields.to_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAssetTransfered { if (!isHiveAssetTransfered(item.type)) { throw new Error("not a HiveAssetTransfered type");

 }

 return HiveAssetTransfered.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), fromProfile: decodeFromFieldsWithTypes("address", item.fields.from_profile), toProfile: decodeFromFieldsWithTypes("address", item.fields.to_profile) } ) }

 static fromBcs( data: Uint8Array ): HiveAssetTransfered { return HiveAssetTransfered.fromFields( HiveAssetTransfered.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),fromProfile: this.fromProfile,toProfile: this.toProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAssetTransfered { return HiveAssetTransfered.reified( ).new( { version: decodeFromJSONField("u64", field.version), fromProfile: decodeFromJSONField("address", field.fromProfile), toProfile: decodeFromJSONField("address", field.toProfile) } ) }

 static fromJSON( json: Record<string, any> ): HiveAssetTransfered { if (json.$typeName !== HiveAssetTransfered.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAssetTransfered.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAssetTransfered { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAssetTransfered(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAssetTransfered object`); } return HiveAssetTransfered.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAssetTransfered> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAssetTransfered object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAssetTransfered(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAssetTransfered object`); }
 return HiveAssetTransfered.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveAssetUnstaked =============================== */

export function isHiveAssetUnstaked(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveAssetUnstaked"; }

export interface HiveAssetUnstakedFields { profileAddr: ToField<"address">; version: ToField<"u64"> }

export type HiveAssetUnstakedReified = Reified< HiveAssetUnstaked, HiveAssetUnstakedFields >;

export class HiveAssetUnstaked implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveAssetUnstaked"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveAssetUnstaked.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveAssetUnstaked";

 readonly $typeArgs: [];

 readonly profileAddr: ToField<"address">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveAssetUnstakedFields, ) { this.$fullTypeName = composeSuiType( HiveAssetUnstaked.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveAssetUnstaked"; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.version = fields.version; }

 static reified( ): HiveAssetUnstakedReified { return { typeName: HiveAssetUnstaked.$typeName, fullTypeName: composeSuiType( HiveAssetUnstaked.$typeName, ...[] ) as "0x0::hive_profile::HiveAssetUnstaked", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAssetUnstaked.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAssetUnstaked.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAssetUnstaked.fromBcs( data, ), bcs: HiveAssetUnstaked.bcs, fromJSONField: (field: any) => HiveAssetUnstaked.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAssetUnstaked.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAssetUnstaked.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveAssetUnstaked.fetch( client, id, ), new: ( fields: HiveAssetUnstakedFields, ) => { return new HiveAssetUnstaked( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAssetUnstaked.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAssetUnstaked>> { return phantom(HiveAssetUnstaked.reified( )); } static get p() { return HiveAssetUnstaked.phantom() }

 static get bcs() { return bcs.struct("HiveAssetUnstaked", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveAssetUnstaked { return HiveAssetUnstaked.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAssetUnstaked { if (!isHiveAssetUnstaked(item.type)) { throw new Error("not a HiveAssetUnstaked type");

 }

 return HiveAssetUnstaked.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): HiveAssetUnstaked { return HiveAssetUnstaked.fromFields( HiveAssetUnstaked.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAssetUnstaked { return HiveAssetUnstaked.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): HiveAssetUnstaked { if (json.$typeName !== HiveAssetUnstaked.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAssetUnstaked.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAssetUnstaked { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAssetUnstaked(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAssetUnstaked object`); } return HiveAssetUnstaked.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAssetUnstaked> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAssetUnstaked object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAssetUnstaked(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAssetUnstaked object`); }
 return HiveAssetUnstaked.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveAssetUpgraded =============================== */

export function isHiveAssetUpgraded(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveAssetUpgraded"; }

export interface HiveAssetUpgradedFields { version: ToField<"u64">; hiveKiosk: ToField<"address">; newImgUrl: ToField<String>; upgradePrice: ToField<"u64">; totalRoyaltyAmt: ToField<"u64">; treasuryAmt: ToField<"u64">; gemsBurnt: ToField<"u64"> }

export type HiveAssetUpgradedReified = Reified< HiveAssetUpgraded, HiveAssetUpgradedFields >;

export class HiveAssetUpgraded implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveAssetUpgraded"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveAssetUpgraded.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveAssetUpgraded";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly hiveKiosk: ToField<"address">; readonly newImgUrl: ToField<String>; readonly upgradePrice: ToField<"u64">; readonly totalRoyaltyAmt: ToField<"u64">; readonly treasuryAmt: ToField<"u64">; readonly gemsBurnt: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveAssetUpgradedFields, ) { this.$fullTypeName = composeSuiType( HiveAssetUpgraded.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveAssetUpgraded"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.hiveKiosk = fields.hiveKiosk;; this.newImgUrl = fields.newImgUrl;; this.upgradePrice = fields.upgradePrice;; this.totalRoyaltyAmt = fields.totalRoyaltyAmt;; this.treasuryAmt = fields.treasuryAmt;; this.gemsBurnt = fields.gemsBurnt; }

 static reified( ): HiveAssetUpgradedReified { return { typeName: HiveAssetUpgraded.$typeName, fullTypeName: composeSuiType( HiveAssetUpgraded.$typeName, ...[] ) as "0x0::hive_profile::HiveAssetUpgraded", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveAssetUpgraded.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveAssetUpgraded.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveAssetUpgraded.fromBcs( data, ), bcs: HiveAssetUpgraded.bcs, fromJSONField: (field: any) => HiveAssetUpgraded.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveAssetUpgraded.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveAssetUpgraded.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveAssetUpgraded.fetch( client, id, ), new: ( fields: HiveAssetUpgradedFields, ) => { return new HiveAssetUpgraded( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveAssetUpgraded.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveAssetUpgraded>> { return phantom(HiveAssetUpgraded.reified( )); } static get p() { return HiveAssetUpgraded.phantom() }

 static get bcs() { return bcs.struct("HiveAssetUpgraded", {

 version: bcs.u64(), hive_kiosk: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), new_img_url: String.bcs, upgrade_price: bcs.u64(), total_royalty_amt: bcs.u64(), treasury_amt: bcs.u64(), gems_burnt: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveAssetUpgraded { return HiveAssetUpgraded.reified( ).new( { version: decodeFromFields("u64", fields.version), hiveKiosk: decodeFromFields("address", fields.hive_kiosk), newImgUrl: decodeFromFields(String.reified(), fields.new_img_url), upgradePrice: decodeFromFields("u64", fields.upgrade_price), totalRoyaltyAmt: decodeFromFields("u64", fields.total_royalty_amt), treasuryAmt: decodeFromFields("u64", fields.treasury_amt), gemsBurnt: decodeFromFields("u64", fields.gems_burnt) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveAssetUpgraded { if (!isHiveAssetUpgraded(item.type)) { throw new Error("not a HiveAssetUpgraded type");

 }

 return HiveAssetUpgraded.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), hiveKiosk: decodeFromFieldsWithTypes("address", item.fields.hive_kiosk), newImgUrl: decodeFromFieldsWithTypes(String.reified(), item.fields.new_img_url), upgradePrice: decodeFromFieldsWithTypes("u64", item.fields.upgrade_price), totalRoyaltyAmt: decodeFromFieldsWithTypes("u64", item.fields.total_royalty_amt), treasuryAmt: decodeFromFieldsWithTypes("u64", item.fields.treasury_amt), gemsBurnt: decodeFromFieldsWithTypes("u64", item.fields.gems_burnt) } ) }

 static fromBcs( data: Uint8Array ): HiveAssetUpgraded { return HiveAssetUpgraded.fromFields( HiveAssetUpgraded.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),hiveKiosk: this.hiveKiosk,newImgUrl: this.newImgUrl,upgradePrice: this.upgradePrice.toString(),totalRoyaltyAmt: this.totalRoyaltyAmt.toString(),treasuryAmt: this.treasuryAmt.toString(),gemsBurnt: this.gemsBurnt.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveAssetUpgraded { return HiveAssetUpgraded.reified( ).new( { version: decodeFromJSONField("u64", field.version), hiveKiosk: decodeFromJSONField("address", field.hiveKiosk), newImgUrl: decodeFromJSONField(String.reified(), field.newImgUrl), upgradePrice: decodeFromJSONField("u64", field.upgradePrice), totalRoyaltyAmt: decodeFromJSONField("u64", field.totalRoyaltyAmt), treasuryAmt: decodeFromJSONField("u64", field.treasuryAmt), gemsBurnt: decodeFromJSONField("u64", field.gemsBurnt) } ) }

 static fromJSON( json: Record<string, any> ): HiveAssetUpgraded { if (json.$typeName !== HiveAssetUpgraded.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveAssetUpgraded.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveAssetUpgraded { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveAssetUpgraded(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveAssetUpgraded object`); } return HiveAssetUpgraded.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveAssetUpgraded> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveAssetUpgraded object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveAssetUpgraded(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveAssetUpgraded object`); }
 return HiveAssetUpgraded.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveDisperser =============================== */

export function isHiveDisperser(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveDisperser"; }

export interface HiveDisperserFields { id: ToField<UID>; incomingGemsForAssets: ToField<HiveGems>; gemsForAssets: ToField<HiveGems>; globalDispersalIndex: ToField<"u256">; moduleVersion: ToField<"u64"> }

export type HiveDisperserReified = Reified< HiveDisperser, HiveDisperserFields >;

export class HiveDisperser implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveDisperser"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveDisperser.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveDisperser";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly incomingGemsForAssets: ToField<HiveGems>; readonly gemsForAssets: ToField<HiveGems>; readonly globalDispersalIndex: ToField<"u256">; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveDisperserFields, ) { this.$fullTypeName = composeSuiType( HiveDisperser.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveDisperser"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.incomingGemsForAssets = fields.incomingGemsForAssets;; this.gemsForAssets = fields.gemsForAssets;; this.globalDispersalIndex = fields.globalDispersalIndex;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): HiveDisperserReified { return { typeName: HiveDisperser.$typeName, fullTypeName: composeSuiType( HiveDisperser.$typeName, ...[] ) as "0x0::hive_profile::HiveDisperser", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveDisperser.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveDisperser.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveDisperser.fromBcs( data, ), bcs: HiveDisperser.bcs, fromJSONField: (field: any) => HiveDisperser.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveDisperser.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveDisperser.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveDisperser.fetch( client, id, ), new: ( fields: HiveDisperserFields, ) => { return new HiveDisperser( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveDisperser.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveDisperser>> { return phantom(HiveDisperser.reified( )); } static get p() { return HiveDisperser.phantom() }

 static get bcs() { return bcs.struct("HiveDisperser", {

 id: UID.bcs, incoming_gems_for_assets: HiveGems.bcs, gems_for_assets: HiveGems.bcs, global_dispersal_index: bcs.u256(), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveDisperser { return HiveDisperser.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), incomingGemsForAssets: decodeFromFields(HiveGems.reified(), fields.incoming_gems_for_assets), gemsForAssets: decodeFromFields(HiveGems.reified(), fields.gems_for_assets), globalDispersalIndex: decodeFromFields("u256", fields.global_dispersal_index), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveDisperser { if (!isHiveDisperser(item.type)) { throw new Error("not a HiveDisperser type");

 }

 return HiveDisperser.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), incomingGemsForAssets: decodeFromFieldsWithTypes(HiveGems.reified(), item.fields.incoming_gems_for_assets), gemsForAssets: decodeFromFieldsWithTypes(HiveGems.reified(), item.fields.gems_for_assets), globalDispersalIndex: decodeFromFieldsWithTypes("u256", item.fields.global_dispersal_index), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): HiveDisperser { return HiveDisperser.fromFields( HiveDisperser.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,incomingGemsForAssets: this.incomingGemsForAssets.toJSONField(),gemsForAssets: this.gemsForAssets.toJSONField(),globalDispersalIndex: this.globalDispersalIndex.toString(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveDisperser { return HiveDisperser.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), incomingGemsForAssets: decodeFromJSONField(HiveGems.reified(), field.incomingGemsForAssets), gemsForAssets: decodeFromJSONField(HiveGems.reified(), field.gemsForAssets), globalDispersalIndex: decodeFromJSONField("u256", field.globalDispersalIndex), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): HiveDisperser { if (json.$typeName !== HiveDisperser.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveDisperser.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveDisperser { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveDisperser(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveDisperser object`); } return HiveDisperser.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveDisperser> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveDisperser object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveDisperser(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveDisperser object`); }
 return HiveDisperser.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveGemsDepositedIntoAsset =============================== */

export function isHiveGemsDepositedIntoAsset(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveGemsDepositedIntoAsset"; }

export interface HiveGemsDepositedIntoAssetFields { profile: ToField<"address">; version: ToField<"u64">; gemsDeposited: ToField<"u64"> }

export type HiveGemsDepositedIntoAssetReified = Reified< HiveGemsDepositedIntoAsset, HiveGemsDepositedIntoAssetFields >;

export class HiveGemsDepositedIntoAsset implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveGemsDepositedIntoAsset"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveGemsDepositedIntoAsset.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveGemsDepositedIntoAsset";

 readonly $typeArgs: [];

 readonly profile: ToField<"address">; readonly version: ToField<"u64">; readonly gemsDeposited: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveGemsDepositedIntoAssetFields, ) { this.$fullTypeName = composeSuiType( HiveGemsDepositedIntoAsset.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveGemsDepositedIntoAsset"; this.$typeArgs = typeArgs;

 this.profile = fields.profile;; this.version = fields.version;; this.gemsDeposited = fields.gemsDeposited; }

 static reified( ): HiveGemsDepositedIntoAssetReified { return { typeName: HiveGemsDepositedIntoAsset.$typeName, fullTypeName: composeSuiType( HiveGemsDepositedIntoAsset.$typeName, ...[] ) as "0x0::hive_profile::HiveGemsDepositedIntoAsset", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveGemsDepositedIntoAsset.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveGemsDepositedIntoAsset.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveGemsDepositedIntoAsset.fromBcs( data, ), bcs: HiveGemsDepositedIntoAsset.bcs, fromJSONField: (field: any) => HiveGemsDepositedIntoAsset.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveGemsDepositedIntoAsset.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveGemsDepositedIntoAsset.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveGemsDepositedIntoAsset.fetch( client, id, ), new: ( fields: HiveGemsDepositedIntoAssetFields, ) => { return new HiveGemsDepositedIntoAsset( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveGemsDepositedIntoAsset.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveGemsDepositedIntoAsset>> { return phantom(HiveGemsDepositedIntoAsset.reified( )); } static get p() { return HiveGemsDepositedIntoAsset.phantom() }

 static get bcs() { return bcs.struct("HiveGemsDepositedIntoAsset", {

 profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), gems_deposited: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveGemsDepositedIntoAsset { return HiveGemsDepositedIntoAsset.reified( ).new( { profile: decodeFromFields("address", fields.profile), version: decodeFromFields("u64", fields.version), gemsDeposited: decodeFromFields("u64", fields.gems_deposited) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveGemsDepositedIntoAsset { if (!isHiveGemsDepositedIntoAsset(item.type)) { throw new Error("not a HiveGemsDepositedIntoAsset type");

 }

 return HiveGemsDepositedIntoAsset.reified( ).new( { profile: decodeFromFieldsWithTypes("address", item.fields.profile), version: decodeFromFieldsWithTypes("u64", item.fields.version), gemsDeposited: decodeFromFieldsWithTypes("u64", item.fields.gems_deposited) } ) }

 static fromBcs( data: Uint8Array ): HiveGemsDepositedIntoAsset { return HiveGemsDepositedIntoAsset.fromFields( HiveGemsDepositedIntoAsset.bcs.parse(data) ) }

 toJSONField() { return {

 profile: this.profile,version: this.version.toString(),gemsDeposited: this.gemsDeposited.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveGemsDepositedIntoAsset { return HiveGemsDepositedIntoAsset.reified( ).new( { profile: decodeFromJSONField("address", field.profile), version: decodeFromJSONField("u64", field.version), gemsDeposited: decodeFromJSONField("u64", field.gemsDeposited) } ) }

 static fromJSON( json: Record<string, any> ): HiveGemsDepositedIntoAsset { if (json.$typeName !== HiveGemsDepositedIntoAsset.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveGemsDepositedIntoAsset.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveGemsDepositedIntoAsset { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveGemsDepositedIntoAsset(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveGemsDepositedIntoAsset object`); } return HiveGemsDepositedIntoAsset.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveGemsDepositedIntoAsset> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveGemsDepositedIntoAsset object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveGemsDepositedIntoAsset(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveGemsDepositedIntoAsset object`); }
 return HiveGemsDepositedIntoAsset.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveGemsPortedToSkin =============================== */

export function isHiveGemsPortedToSkin(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveGemsPortedToSkin"; }

export interface HiveGemsPortedToSkinFields { portedByProfile: ToField<"address">; portedByUsername: ToField<String1>; version: ToField<"u64">; skinType: ToField<String>; gemsPorted: ToField<"u64"> }

export type HiveGemsPortedToSkinReified = Reified< HiveGemsPortedToSkin, HiveGemsPortedToSkinFields >;

export class HiveGemsPortedToSkin implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveGemsPortedToSkin"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveGemsPortedToSkin.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveGemsPortedToSkin";

 readonly $typeArgs: [];

 readonly portedByProfile: ToField<"address">; readonly portedByUsername: ToField<String1>; readonly version: ToField<"u64">; readonly skinType: ToField<String>; readonly gemsPorted: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveGemsPortedToSkinFields, ) { this.$fullTypeName = composeSuiType( HiveGemsPortedToSkin.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveGemsPortedToSkin"; this.$typeArgs = typeArgs;

 this.portedByProfile = fields.portedByProfile;; this.portedByUsername = fields.portedByUsername;; this.version = fields.version;; this.skinType = fields.skinType;; this.gemsPorted = fields.gemsPorted; }

 static reified( ): HiveGemsPortedToSkinReified { return { typeName: HiveGemsPortedToSkin.$typeName, fullTypeName: composeSuiType( HiveGemsPortedToSkin.$typeName, ...[] ) as "0x0::hive_profile::HiveGemsPortedToSkin", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveGemsPortedToSkin.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveGemsPortedToSkin.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveGemsPortedToSkin.fromBcs( data, ), bcs: HiveGemsPortedToSkin.bcs, fromJSONField: (field: any) => HiveGemsPortedToSkin.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveGemsPortedToSkin.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveGemsPortedToSkin.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveGemsPortedToSkin.fetch( client, id, ), new: ( fields: HiveGemsPortedToSkinFields, ) => { return new HiveGemsPortedToSkin( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveGemsPortedToSkin.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveGemsPortedToSkin>> { return phantom(HiveGemsPortedToSkin.reified( )); } static get p() { return HiveGemsPortedToSkin.phantom() }

 static get bcs() { return bcs.struct("HiveGemsPortedToSkin", {

 ported_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), ported_by_username: String1.bcs, version: bcs.u64(), skin_type: String.bcs, gems_ported: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveGemsPortedToSkin { return HiveGemsPortedToSkin.reified( ).new( { portedByProfile: decodeFromFields("address", fields.ported_by_profile), portedByUsername: decodeFromFields(String1.reified(), fields.ported_by_username), version: decodeFromFields("u64", fields.version), skinType: decodeFromFields(String.reified(), fields.skin_type), gemsPorted: decodeFromFields("u64", fields.gems_ported) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveGemsPortedToSkin { if (!isHiveGemsPortedToSkin(item.type)) { throw new Error("not a HiveGemsPortedToSkin type");

 }

 return HiveGemsPortedToSkin.reified( ).new( { portedByProfile: decodeFromFieldsWithTypes("address", item.fields.ported_by_profile), portedByUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.ported_by_username), version: decodeFromFieldsWithTypes("u64", item.fields.version), skinType: decodeFromFieldsWithTypes(String.reified(), item.fields.skin_type), gemsPorted: decodeFromFieldsWithTypes("u64", item.fields.gems_ported) } ) }

 static fromBcs( data: Uint8Array ): HiveGemsPortedToSkin { return HiveGemsPortedToSkin.fromFields( HiveGemsPortedToSkin.bcs.parse(data) ) }

 toJSONField() { return {

 portedByProfile: this.portedByProfile,portedByUsername: this.portedByUsername,version: this.version.toString(),skinType: this.skinType,gemsPorted: this.gemsPorted.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveGemsPortedToSkin { return HiveGemsPortedToSkin.reified( ).new( { portedByProfile: decodeFromJSONField("address", field.portedByProfile), portedByUsername: decodeFromJSONField(String1.reified(), field.portedByUsername), version: decodeFromJSONField("u64", field.version), skinType: decodeFromJSONField(String.reified(), field.skinType), gemsPorted: decodeFromJSONField("u64", field.gemsPorted) } ) }

 static fromJSON( json: Record<string, any> ): HiveGemsPortedToSkin { if (json.$typeName !== HiveGemsPortedToSkin.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveGemsPortedToSkin.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveGemsPortedToSkin { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveGemsPortedToSkin(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveGemsPortedToSkin object`); } return HiveGemsPortedToSkin.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveGemsPortedToSkin> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveGemsPortedToSkin object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveGemsPortedToSkin(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveGemsPortedToSkin object`); }
 return HiveGemsPortedToSkin.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveGemsTransfered =============================== */

export function isHiveGemsTransfered(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveGemsTransfered"; }

export interface HiveGemsTransferedFields { fromUsername: ToField<String1>; toUsername: ToField<String1>; fromProfileAddr: ToField<"address">; toProfileAddr: ToField<"address">; gemsTransferred: ToField<"u64"> }

export type HiveGemsTransferedReified = Reified< HiveGemsTransfered, HiveGemsTransferedFields >;

export class HiveGemsTransfered implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveGemsTransfered"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveGemsTransfered.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveGemsTransfered";

 readonly $typeArgs: [];

 readonly fromUsername: ToField<String1>; readonly toUsername: ToField<String1>; readonly fromProfileAddr: ToField<"address">; readonly toProfileAddr: ToField<"address">; readonly gemsTransferred: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveGemsTransferedFields, ) { this.$fullTypeName = composeSuiType( HiveGemsTransfered.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveGemsTransfered"; this.$typeArgs = typeArgs;

 this.fromUsername = fields.fromUsername;; this.toUsername = fields.toUsername;; this.fromProfileAddr = fields.fromProfileAddr;; this.toProfileAddr = fields.toProfileAddr;; this.gemsTransferred = fields.gemsTransferred; }

 static reified( ): HiveGemsTransferedReified { return { typeName: HiveGemsTransfered.$typeName, fullTypeName: composeSuiType( HiveGemsTransfered.$typeName, ...[] ) as "0x0::hive_profile::HiveGemsTransfered", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveGemsTransfered.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveGemsTransfered.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveGemsTransfered.fromBcs( data, ), bcs: HiveGemsTransfered.bcs, fromJSONField: (field: any) => HiveGemsTransfered.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveGemsTransfered.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveGemsTransfered.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveGemsTransfered.fetch( client, id, ), new: ( fields: HiveGemsTransferedFields, ) => { return new HiveGemsTransfered( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveGemsTransfered.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveGemsTransfered>> { return phantom(HiveGemsTransfered.reified( )); } static get p() { return HiveGemsTransfered.phantom() }

 static get bcs() { return bcs.struct("HiveGemsTransfered", {

 from_username: String1.bcs, to_username: String1.bcs, from_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), to_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), gems_transferred: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveGemsTransfered { return HiveGemsTransfered.reified( ).new( { fromUsername: decodeFromFields(String1.reified(), fields.from_username), toUsername: decodeFromFields(String1.reified(), fields.to_username), fromProfileAddr: decodeFromFields("address", fields.from_profile_addr), toProfileAddr: decodeFromFields("address", fields.to_profile_addr), gemsTransferred: decodeFromFields("u64", fields.gems_transferred) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveGemsTransfered { if (!isHiveGemsTransfered(item.type)) { throw new Error("not a HiveGemsTransfered type");

 }

 return HiveGemsTransfered.reified( ).new( { fromUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.from_username), toUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.to_username), fromProfileAddr: decodeFromFieldsWithTypes("address", item.fields.from_profile_addr), toProfileAddr: decodeFromFieldsWithTypes("address", item.fields.to_profile_addr), gemsTransferred: decodeFromFieldsWithTypes("u64", item.fields.gems_transferred) } ) }

 static fromBcs( data: Uint8Array ): HiveGemsTransfered { return HiveGemsTransfered.fromFields( HiveGemsTransfered.bcs.parse(data) ) }

 toJSONField() { return {

 fromUsername: this.fromUsername,toUsername: this.toUsername,fromProfileAddr: this.fromProfileAddr,toProfileAddr: this.toProfileAddr,gemsTransferred: this.gemsTransferred.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveGemsTransfered { return HiveGemsTransfered.reified( ).new( { fromUsername: decodeFromJSONField(String1.reified(), field.fromUsername), toUsername: decodeFromJSONField(String1.reified(), field.toUsername), fromProfileAddr: decodeFromJSONField("address", field.fromProfileAddr), toProfileAddr: decodeFromJSONField("address", field.toProfileAddr), gemsTransferred: decodeFromJSONField("u64", field.gemsTransferred) } ) }

 static fromJSON( json: Record<string, any> ): HiveGemsTransfered { if (json.$typeName !== HiveGemsTransfered.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveGemsTransfered.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveGemsTransfered { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveGemsTransfered(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveGemsTransfered object`); } return HiveGemsTransfered.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveGemsTransfered> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveGemsTransfered object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveGemsTransfered(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveGemsTransfered object`); }
 return HiveGemsTransfered.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveKiosk =============================== */

export function isHiveKiosk(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveKiosk"; }

export interface HiveKioskFields { id: ToField<UID>; creatorProfile: ToField<"address">; collectionName: ToField<String>; imgUrl: ToField<Url>; traitsList: ToField<Vector<String>>; maxAssetsLimit: ToField<"u64">; kraftedAssets: ToField<"u64">; basePrice: ToField<"u64">; curveA: ToField<"u64">; promptsList: ToField<Vector<Vector<String>>>; urlList: ToField<Vector<String>>; namesList: ToField<Vector<String>>; kraftedVersionsMap: ToField<LinkedTable<"u64", "address">>; kraftAccess: ToField<"u8">; discountAccess: ToField<"u8">; discount: ToField<"u64">; availableUpgrades: ToField<LinkedTable<"u64", ToPhantom<Vector<AssetUpgrade>>>>; moduleVersion: ToField<"u64"> }

export type HiveKioskReified = Reified< HiveKiosk, HiveKioskFields >;

export class HiveKiosk implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveKiosk"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveKiosk.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveKiosk";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly creatorProfile: ToField<"address">; readonly collectionName: ToField<String>; readonly imgUrl: ToField<Url>; readonly traitsList: ToField<Vector<String>>; readonly maxAssetsLimit: ToField<"u64">; readonly kraftedAssets: ToField<"u64">; readonly basePrice: ToField<"u64">; readonly curveA: ToField<"u64">; readonly promptsList: ToField<Vector<Vector<String>>>; readonly urlList: ToField<Vector<String>>; readonly namesList: ToField<Vector<String>>; readonly kraftedVersionsMap: ToField<LinkedTable<"u64", "address">>; readonly kraftAccess: ToField<"u8">; readonly discountAccess: ToField<"u8">; readonly discount: ToField<"u64">; readonly availableUpgrades: ToField<LinkedTable<"u64", ToPhantom<Vector<AssetUpgrade>>>>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveKioskFields, ) { this.$fullTypeName = composeSuiType( HiveKiosk.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveKiosk"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.creatorProfile = fields.creatorProfile;; this.collectionName = fields.collectionName;; this.imgUrl = fields.imgUrl;; this.traitsList = fields.traitsList;; this.maxAssetsLimit = fields.maxAssetsLimit;; this.kraftedAssets = fields.kraftedAssets;; this.basePrice = fields.basePrice;; this.curveA = fields.curveA;; this.promptsList = fields.promptsList;; this.urlList = fields.urlList;; this.namesList = fields.namesList;; this.kraftedVersionsMap = fields.kraftedVersionsMap;; this.kraftAccess = fields.kraftAccess;; this.discountAccess = fields.discountAccess;; this.discount = fields.discount;; this.availableUpgrades = fields.availableUpgrades;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): HiveKioskReified { return { typeName: HiveKiosk.$typeName, fullTypeName: composeSuiType( HiveKiosk.$typeName, ...[] ) as "0x0::hive_profile::HiveKiosk", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveKiosk.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveKiosk.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveKiosk.fromBcs( data, ), bcs: HiveKiosk.bcs, fromJSONField: (field: any) => HiveKiosk.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveKiosk.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveKiosk.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveKiosk.fetch( client, id, ), new: ( fields: HiveKioskFields, ) => { return new HiveKiosk( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveKiosk.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveKiosk>> { return phantom(HiveKiosk.reified( )); } static get p() { return HiveKiosk.phantom() }

 static get bcs() { return bcs.struct("HiveKiosk", {

 id: UID.bcs, creator_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), collection_name: String.bcs, img_url: Url.bcs, traits_list: bcs.vector(String.bcs), max_assets_limit: bcs.u64(), krafted_assets: bcs.u64(), base_price: bcs.u64(), curve_a: bcs.u64(), prompts_list: bcs.vector(bcs.vector(String.bcs)), url_list: bcs.vector(String.bcs), names_list: bcs.vector(String.bcs), krafted_versions_map: LinkedTable.bcs(bcs.u64()), kraft_access: bcs.u8(), discount_access: bcs.u8(), discount: bcs.u64(), available_upgrades: LinkedTable.bcs(bcs.u64()), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveKiosk { return HiveKiosk.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), creatorProfile: decodeFromFields("address", fields.creator_profile), collectionName: decodeFromFields(String.reified(), fields.collection_name), imgUrl: decodeFromFields(Url.reified(), fields.img_url), traitsList: decodeFromFields(reified.vector(String.reified()), fields.traits_list), maxAssetsLimit: decodeFromFields("u64", fields.max_assets_limit), kraftedAssets: decodeFromFields("u64", fields.krafted_assets), basePrice: decodeFromFields("u64", fields.base_price), curveA: decodeFromFields("u64", fields.curve_a), promptsList: decodeFromFields(reified.vector(reified.vector(String.reified())), fields.prompts_list), urlList: decodeFromFields(reified.vector(String.reified()), fields.url_list), namesList: decodeFromFields(reified.vector(String.reified()), fields.names_list), kraftedVersionsMap: decodeFromFields(LinkedTable.reified("u64", reified.phantom("address")), fields.krafted_versions_map), kraftAccess: decodeFromFields("u8", fields.kraft_access), discountAccess: decodeFromFields("u8", fields.discount_access), discount: decodeFromFields("u64", fields.discount), availableUpgrades: decodeFromFields(LinkedTable.reified("u64", reified.phantom(reified.vector(AssetUpgrade.reified()))), fields.available_upgrades), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveKiosk { if (!isHiveKiosk(item.type)) { throw new Error("not a HiveKiosk type");

 }

 return HiveKiosk.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), creatorProfile: decodeFromFieldsWithTypes("address", item.fields.creator_profile), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), imgUrl: decodeFromFieldsWithTypes(Url.reified(), item.fields.img_url), traitsList: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.traits_list), maxAssetsLimit: decodeFromFieldsWithTypes("u64", item.fields.max_assets_limit), kraftedAssets: decodeFromFieldsWithTypes("u64", item.fields.krafted_assets), basePrice: decodeFromFieldsWithTypes("u64", item.fields.base_price), curveA: decodeFromFieldsWithTypes("u64", item.fields.curve_a), promptsList: decodeFromFieldsWithTypes(reified.vector(reified.vector(String.reified())), item.fields.prompts_list), urlList: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.url_list), namesList: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.names_list), kraftedVersionsMap: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("address")), item.fields.krafted_versions_map), kraftAccess: decodeFromFieldsWithTypes("u8", item.fields.kraft_access), discountAccess: decodeFromFieldsWithTypes("u8", item.fields.discount_access), discount: decodeFromFieldsWithTypes("u64", item.fields.discount), availableUpgrades: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(reified.vector(AssetUpgrade.reified()))), item.fields.available_upgrades), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): HiveKiosk { return HiveKiosk.fromFields( HiveKiosk.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,creatorProfile: this.creatorProfile,collectionName: this.collectionName,imgUrl: this.imgUrl,traitsList: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.traitsList),maxAssetsLimit: this.maxAssetsLimit.toString(),kraftedAssets: this.kraftedAssets.toString(),basePrice: this.basePrice.toString(),curveA: this.curveA.toString(),promptsList: fieldToJSON<Vector<Vector<String>>>(`vector<vector<0x1::string::String>>`, this.promptsList),urlList: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.urlList),namesList: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.namesList),kraftedVersionsMap: this.kraftedVersionsMap.toJSONField(),kraftAccess: this.kraftAccess,discountAccess: this.discountAccess,discount: this.discount.toString(),availableUpgrades: this.availableUpgrades.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveKiosk { return HiveKiosk.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), creatorProfile: decodeFromJSONField("address", field.creatorProfile), collectionName: decodeFromJSONField(String.reified(), field.collectionName), imgUrl: decodeFromJSONField(Url.reified(), field.imgUrl), traitsList: decodeFromJSONField(reified.vector(String.reified()), field.traitsList), maxAssetsLimit: decodeFromJSONField("u64", field.maxAssetsLimit), kraftedAssets: decodeFromJSONField("u64", field.kraftedAssets), basePrice: decodeFromJSONField("u64", field.basePrice), curveA: decodeFromJSONField("u64", field.curveA), promptsList: decodeFromJSONField(reified.vector(reified.vector(String.reified())), field.promptsList), urlList: decodeFromJSONField(reified.vector(String.reified()), field.urlList), namesList: decodeFromJSONField(reified.vector(String.reified()), field.namesList), kraftedVersionsMap: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("address")), field.kraftedVersionsMap), kraftAccess: decodeFromJSONField("u8", field.kraftAccess), discountAccess: decodeFromJSONField("u8", field.discountAccess), discount: decodeFromJSONField("u64", field.discount), availableUpgrades: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(reified.vector(AssetUpgrade.reified()))), field.availableUpgrades), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): HiveKiosk { if (json.$typeName !== HiveKiosk.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveKiosk.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveKiosk { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveKiosk(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveKiosk object`); } return HiveKiosk.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveKiosk> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveKiosk object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveKiosk(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveKiosk object`); }
 return HiveKiosk.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveKioskInitialized =============================== */

export function isHiveKioskInitialized(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveKioskInitialized"; }

export interface HiveKioskInitializedFields { kioskAddr: ToField<"address">; creatorProfile: ToField<"address">; timeStream: ToField<"u64">; collectionName: ToField<String>; imgUrl: ToField<String>; maxAssetsLimit: ToField<"u64"> }

export type HiveKioskInitializedReified = Reified< HiveKioskInitialized, HiveKioskInitializedFields >;

export class HiveKioskInitialized implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveKioskInitialized"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveKioskInitialized.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveKioskInitialized";

 readonly $typeArgs: [];

 readonly kioskAddr: ToField<"address">; readonly creatorProfile: ToField<"address">; readonly timeStream: ToField<"u64">; readonly collectionName: ToField<String>; readonly imgUrl: ToField<String>; readonly maxAssetsLimit: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveKioskInitializedFields, ) { this.$fullTypeName = composeSuiType( HiveKioskInitialized.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveKioskInitialized"; this.$typeArgs = typeArgs;

 this.kioskAddr = fields.kioskAddr;; this.creatorProfile = fields.creatorProfile;; this.timeStream = fields.timeStream;; this.collectionName = fields.collectionName;; this.imgUrl = fields.imgUrl;; this.maxAssetsLimit = fields.maxAssetsLimit; }

 static reified( ): HiveKioskInitializedReified { return { typeName: HiveKioskInitialized.$typeName, fullTypeName: composeSuiType( HiveKioskInitialized.$typeName, ...[] ) as "0x0::hive_profile::HiveKioskInitialized", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveKioskInitialized.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveKioskInitialized.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveKioskInitialized.fromBcs( data, ), bcs: HiveKioskInitialized.bcs, fromJSONField: (field: any) => HiveKioskInitialized.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveKioskInitialized.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveKioskInitialized.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveKioskInitialized.fetch( client, id, ), new: ( fields: HiveKioskInitializedFields, ) => { return new HiveKioskInitialized( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveKioskInitialized.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveKioskInitialized>> { return phantom(HiveKioskInitialized.reified( )); } static get p() { return HiveKioskInitialized.phantom() }

 static get bcs() { return bcs.struct("HiveKioskInitialized", {

 kiosk_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), creator_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), time_stream: bcs.u64(), collection_name: String.bcs, img_url: String.bcs, max_assets_limit: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveKioskInitialized { return HiveKioskInitialized.reified( ).new( { kioskAddr: decodeFromFields("address", fields.kiosk_addr), creatorProfile: decodeFromFields("address", fields.creator_profile), timeStream: decodeFromFields("u64", fields.time_stream), collectionName: decodeFromFields(String.reified(), fields.collection_name), imgUrl: decodeFromFields(String.reified(), fields.img_url), maxAssetsLimit: decodeFromFields("u64", fields.max_assets_limit) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveKioskInitialized { if (!isHiveKioskInitialized(item.type)) { throw new Error("not a HiveKioskInitialized type");

 }

 return HiveKioskInitialized.reified( ).new( { kioskAddr: decodeFromFieldsWithTypes("address", item.fields.kiosk_addr), creatorProfile: decodeFromFieldsWithTypes("address", item.fields.creator_profile), timeStream: decodeFromFieldsWithTypes("u64", item.fields.time_stream), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), imgUrl: decodeFromFieldsWithTypes(String.reified(), item.fields.img_url), maxAssetsLimit: decodeFromFieldsWithTypes("u64", item.fields.max_assets_limit) } ) }

 static fromBcs( data: Uint8Array ): HiveKioskInitialized { return HiveKioskInitialized.fromFields( HiveKioskInitialized.bcs.parse(data) ) }

 toJSONField() { return {

 kioskAddr: this.kioskAddr,creatorProfile: this.creatorProfile,timeStream: this.timeStream.toString(),collectionName: this.collectionName,imgUrl: this.imgUrl,maxAssetsLimit: this.maxAssetsLimit.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveKioskInitialized { return HiveKioskInitialized.reified( ).new( { kioskAddr: decodeFromJSONField("address", field.kioskAddr), creatorProfile: decodeFromJSONField("address", field.creatorProfile), timeStream: decodeFromJSONField("u64", field.timeStream), collectionName: decodeFromJSONField(String.reified(), field.collectionName), imgUrl: decodeFromJSONField(String.reified(), field.imgUrl), maxAssetsLimit: decodeFromJSONField("u64", field.maxAssetsLimit) } ) }

 static fromJSON( json: Record<string, any> ): HiveKioskInitialized { if (json.$typeName !== HiveKioskInitialized.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveKioskInitialized.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveKioskInitialized { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveKioskInitialized(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveKioskInitialized object`); } return HiveKioskInitialized.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveKioskInitialized> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveKioskInitialized object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveKioskInitialized(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveKioskInitialized object`); }
 return HiveKioskInitialized.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveKioskTransferredToProfile =============================== */

export function isHiveKioskTransferredToProfile(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveKioskTransferredToProfile"; }

export interface HiveKioskTransferredToProfileFields { fromProfileAddr: ToField<"address">; fromUsername: ToField<String1>; toProfileAddr: ToField<"address">; toUsername: ToField<String1> }

export type HiveKioskTransferredToProfileReified = Reified< HiveKioskTransferredToProfile, HiveKioskTransferredToProfileFields >;

export class HiveKioskTransferredToProfile implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveKioskTransferredToProfile"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveKioskTransferredToProfile.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveKioskTransferredToProfile";

 readonly $typeArgs: [];

 readonly fromProfileAddr: ToField<"address">; readonly fromUsername: ToField<String1>; readonly toProfileAddr: ToField<"address">; readonly toUsername: ToField<String1>

 private constructor(typeArgs: [], fields: HiveKioskTransferredToProfileFields, ) { this.$fullTypeName = composeSuiType( HiveKioskTransferredToProfile.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveKioskTransferredToProfile"; this.$typeArgs = typeArgs;

 this.fromProfileAddr = fields.fromProfileAddr;; this.fromUsername = fields.fromUsername;; this.toProfileAddr = fields.toProfileAddr;; this.toUsername = fields.toUsername; }

 static reified( ): HiveKioskTransferredToProfileReified { return { typeName: HiveKioskTransferredToProfile.$typeName, fullTypeName: composeSuiType( HiveKioskTransferredToProfile.$typeName, ...[] ) as "0x0::hive_profile::HiveKioskTransferredToProfile", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveKioskTransferredToProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveKioskTransferredToProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveKioskTransferredToProfile.fromBcs( data, ), bcs: HiveKioskTransferredToProfile.bcs, fromJSONField: (field: any) => HiveKioskTransferredToProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveKioskTransferredToProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveKioskTransferredToProfile.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveKioskTransferredToProfile.fetch( client, id, ), new: ( fields: HiveKioskTransferredToProfileFields, ) => { return new HiveKioskTransferredToProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveKioskTransferredToProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveKioskTransferredToProfile>> { return phantom(HiveKioskTransferredToProfile.reified( )); } static get p() { return HiveKioskTransferredToProfile.phantom() }

 static get bcs() { return bcs.struct("HiveKioskTransferredToProfile", {

 from_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), from_username: String1.bcs, to_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), to_username: String1.bcs

}) };

 static fromFields( fields: Record<string, any> ): HiveKioskTransferredToProfile { return HiveKioskTransferredToProfile.reified( ).new( { fromProfileAddr: decodeFromFields("address", fields.from_profile_addr), fromUsername: decodeFromFields(String1.reified(), fields.from_username), toProfileAddr: decodeFromFields("address", fields.to_profile_addr), toUsername: decodeFromFields(String1.reified(), fields.to_username) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveKioskTransferredToProfile { if (!isHiveKioskTransferredToProfile(item.type)) { throw new Error("not a HiveKioskTransferredToProfile type");

 }

 return HiveKioskTransferredToProfile.reified( ).new( { fromProfileAddr: decodeFromFieldsWithTypes("address", item.fields.from_profile_addr), fromUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.from_username), toProfileAddr: decodeFromFieldsWithTypes("address", item.fields.to_profile_addr), toUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.to_username) } ) }

 static fromBcs( data: Uint8Array ): HiveKioskTransferredToProfile { return HiveKioskTransferredToProfile.fromFields( HiveKioskTransferredToProfile.bcs.parse(data) ) }

 toJSONField() { return {

 fromProfileAddr: this.fromProfileAddr,fromUsername: this.fromUsername,toProfileAddr: this.toProfileAddr,toUsername: this.toUsername,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveKioskTransferredToProfile { return HiveKioskTransferredToProfile.reified( ).new( { fromProfileAddr: decodeFromJSONField("address", field.fromProfileAddr), fromUsername: decodeFromJSONField(String1.reified(), field.fromUsername), toProfileAddr: decodeFromJSONField("address", field.toProfileAddr), toUsername: decodeFromJSONField(String1.reified(), field.toUsername) } ) }

 static fromJSON( json: Record<string, any> ): HiveKioskTransferredToProfile { if (json.$typeName !== HiveKioskTransferredToProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveKioskTransferredToProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveKioskTransferredToProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveKioskTransferredToProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveKioskTransferredToProfile object`); } return HiveKioskTransferredToProfile.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveKioskTransferredToProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveKioskTransferredToProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveKioskTransferredToProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveKioskTransferredToProfile object`); }
 return HiveKioskTransferredToProfile.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveManager =============================== */

export function isHiveManager(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveManager"; }

export interface HiveManagerFields { id: ToField<UID>; hiveProfile: ToField<HiveProfile>; configParams: ToField<ConfigParams>; activeAssets: ToField<"u64">; lockedAssets: ToField<"u64">; maxAssetsLimit: ToField<"u64">; assetsToProfileMapping: ToField<LinkedTable<"u64", "address">>; activePower: ToField<"u128">; supportedLockupDurations: ToField<Table<"u8", "u64">>; royalty: ToField<Royalty>; gemsRoyalty: ToField<SubscriptionRoyalty>; hiveTwap: ToField<HiveTwapInfo>; buidlersRoyalty: ToField<Balance<ToPhantom<DSUI>>>; creatorRoyalties: ToField<LinkedTable<"address", ToPhantom<Balance<ToPhantom<DSUI>>>>>; keeperAccounts: ToField<LinkedTable<"address", "bool">>; builderHiveAssets: ToField<"u64">; moduleVersion: ToField<"u64"> }

export type HiveManagerReified = Reified< HiveManager, HiveManagerFields >;

export class HiveManager implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveManager"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveManager.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveManager";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly hiveProfile: ToField<HiveProfile>; readonly configParams: ToField<ConfigParams>; readonly activeAssets: ToField<"u64">; readonly lockedAssets: ToField<"u64">; readonly maxAssetsLimit: ToField<"u64">; readonly assetsToProfileMapping: ToField<LinkedTable<"u64", "address">>; readonly activePower: ToField<"u128">; readonly supportedLockupDurations: ToField<Table<"u8", "u64">>; readonly royalty: ToField<Royalty>; readonly gemsRoyalty: ToField<SubscriptionRoyalty>; readonly hiveTwap: ToField<HiveTwapInfo>; readonly buidlersRoyalty: ToField<Balance<ToPhantom<DSUI>>>; readonly creatorRoyalties: ToField<LinkedTable<"address", ToPhantom<Balance<ToPhantom<DSUI>>>>>; readonly keeperAccounts: ToField<LinkedTable<"address", "bool">>; readonly builderHiveAssets: ToField<"u64">; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveManagerFields, ) { this.$fullTypeName = composeSuiType( HiveManager.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveManager"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.hiveProfile = fields.hiveProfile;; this.configParams = fields.configParams;; this.activeAssets = fields.activeAssets;; this.lockedAssets = fields.lockedAssets;; this.maxAssetsLimit = fields.maxAssetsLimit;; this.assetsToProfileMapping = fields.assetsToProfileMapping;; this.activePower = fields.activePower;; this.supportedLockupDurations = fields.supportedLockupDurations;; this.royalty = fields.royalty;; this.gemsRoyalty = fields.gemsRoyalty;; this.hiveTwap = fields.hiveTwap;; this.buidlersRoyalty = fields.buidlersRoyalty;; this.creatorRoyalties = fields.creatorRoyalties;; this.keeperAccounts = fields.keeperAccounts;; this.builderHiveAssets = fields.builderHiveAssets;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): HiveManagerReified { return { typeName: HiveManager.$typeName, fullTypeName: composeSuiType( HiveManager.$typeName, ...[] ) as "0x0::hive_profile::HiveManager", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveManager.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveManager.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveManager.fromBcs( data, ), bcs: HiveManager.bcs, fromJSONField: (field: any) => HiveManager.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveManager.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveManager.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveManager.fetch( client, id, ), new: ( fields: HiveManagerFields, ) => { return new HiveManager( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveManager.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveManager>> { return phantom(HiveManager.reified( )); } static get p() { return HiveManager.phantom() }

 static get bcs() { return bcs.struct("HiveManager", {

 id: UID.bcs, hive_profile: HiveProfile.bcs, config_params: ConfigParams.bcs, active_assets: bcs.u64(), locked_assets: bcs.u64(), max_assets_limit: bcs.u64(), assets_to_profile_mapping: LinkedTable.bcs(bcs.u64()), active_power: bcs.u128(), supported_lockup_durations: Table.bcs, royalty: Royalty.bcs, gems_royalty: SubscriptionRoyalty.bcs, hive_twap: HiveTwapInfo.bcs, buidlers_royalty: Balance.bcs, creator_royalties: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), keeper_accounts: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), builder_hive_assets: bcs.u64(), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveManager { return HiveManager.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), hiveProfile: decodeFromFields(HiveProfile.reified(), fields.hive_profile), configParams: decodeFromFields(ConfigParams.reified(), fields.config_params), activeAssets: decodeFromFields("u64", fields.active_assets), lockedAssets: decodeFromFields("u64", fields.locked_assets), maxAssetsLimit: decodeFromFields("u64", fields.max_assets_limit), assetsToProfileMapping: decodeFromFields(LinkedTable.reified("u64", reified.phantom("address")), fields.assets_to_profile_mapping), activePower: decodeFromFields("u128", fields.active_power), supportedLockupDurations: decodeFromFields(Table.reified(reified.phantom("u8"), reified.phantom("u64")), fields.supported_lockup_durations), royalty: decodeFromFields(Royalty.reified(), fields.royalty), gemsRoyalty: decodeFromFields(SubscriptionRoyalty.reified(), fields.gems_royalty), hiveTwap: decodeFromFields(HiveTwapInfo.reified(), fields.hive_twap), buidlersRoyalty: decodeFromFields(Balance.reified(reified.phantom(DSUI.reified())), fields.buidlers_royalty), creatorRoyalties: decodeFromFields(LinkedTable.reified("address", reified.phantom(Balance.reified(reified.phantom(DSUI.reified())))), fields.creator_royalties), keeperAccounts: decodeFromFields(LinkedTable.reified("address", reified.phantom("bool")), fields.keeper_accounts), builderHiveAssets: decodeFromFields("u64", fields.builder_hive_assets), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveManager { if (!isHiveManager(item.type)) { throw new Error("not a HiveManager type");

 }

 return HiveManager.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), hiveProfile: decodeFromFieldsWithTypes(HiveProfile.reified(), item.fields.hive_profile), configParams: decodeFromFieldsWithTypes(ConfigParams.reified(), item.fields.config_params), activeAssets: decodeFromFieldsWithTypes("u64", item.fields.active_assets), lockedAssets: decodeFromFieldsWithTypes("u64", item.fields.locked_assets), maxAssetsLimit: decodeFromFieldsWithTypes("u64", item.fields.max_assets_limit), assetsToProfileMapping: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("address")), item.fields.assets_to_profile_mapping), activePower: decodeFromFieldsWithTypes("u128", item.fields.active_power), supportedLockupDurations: decodeFromFieldsWithTypes(Table.reified(reified.phantom("u8"), reified.phantom("u64")), item.fields.supported_lockup_durations), royalty: decodeFromFieldsWithTypes(Royalty.reified(), item.fields.royalty), gemsRoyalty: decodeFromFieldsWithTypes(SubscriptionRoyalty.reified(), item.fields.gems_royalty), hiveTwap: decodeFromFieldsWithTypes(HiveTwapInfo.reified(), item.fields.hive_twap), buidlersRoyalty: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(DSUI.reified())), item.fields.buidlers_royalty), creatorRoyalties: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(Balance.reified(reified.phantom(DSUI.reified())))), item.fields.creator_royalties), keeperAccounts: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("bool")), item.fields.keeper_accounts), builderHiveAssets: decodeFromFieldsWithTypes("u64", item.fields.builder_hive_assets), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): HiveManager { return HiveManager.fromFields( HiveManager.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,hiveProfile: this.hiveProfile.toJSONField(),configParams: this.configParams.toJSONField(),activeAssets: this.activeAssets.toString(),lockedAssets: this.lockedAssets.toString(),maxAssetsLimit: this.maxAssetsLimit.toString(),assetsToProfileMapping: this.assetsToProfileMapping.toJSONField(),activePower: this.activePower.toString(),supportedLockupDurations: this.supportedLockupDurations.toJSONField(),royalty: this.royalty.toJSONField(),gemsRoyalty: this.gemsRoyalty.toJSONField(),hiveTwap: this.hiveTwap.toJSONField(),buidlersRoyalty: this.buidlersRoyalty.toJSONField(),creatorRoyalties: this.creatorRoyalties.toJSONField(),keeperAccounts: this.keeperAccounts.toJSONField(),builderHiveAssets: this.builderHiveAssets.toString(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveManager { return HiveManager.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), hiveProfile: decodeFromJSONField(HiveProfile.reified(), field.hiveProfile), configParams: decodeFromJSONField(ConfigParams.reified(), field.configParams), activeAssets: decodeFromJSONField("u64", field.activeAssets), lockedAssets: decodeFromJSONField("u64", field.lockedAssets), maxAssetsLimit: decodeFromJSONField("u64", field.maxAssetsLimit), assetsToProfileMapping: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("address")), field.assetsToProfileMapping), activePower: decodeFromJSONField("u128", field.activePower), supportedLockupDurations: decodeFromJSONField(Table.reified(reified.phantom("u8"), reified.phantom("u64")), field.supportedLockupDurations), royalty: decodeFromJSONField(Royalty.reified(), field.royalty), gemsRoyalty: decodeFromJSONField(SubscriptionRoyalty.reified(), field.gemsRoyalty), hiveTwap: decodeFromJSONField(HiveTwapInfo.reified(), field.hiveTwap), buidlersRoyalty: decodeFromJSONField(Balance.reified(reified.phantom(DSUI.reified())), field.buidlersRoyalty), creatorRoyalties: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(Balance.reified(reified.phantom(DSUI.reified())))), field.creatorRoyalties), keeperAccounts: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("bool")), field.keeperAccounts), builderHiveAssets: decodeFromJSONField("u64", field.builderHiveAssets), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): HiveManager { if (json.$typeName !== HiveManager.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveManager.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveManager { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveManager(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveManager object`); } return HiveManager.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveManager> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveManager object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveManager(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveManager object`); }
 return HiveManager.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveProfile =============================== */

export function isHiveProfile(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveProfile"; }

export interface HiveProfileFields { id: ToField<UID>; username: ToField<String1>; bio: ToField<String>; inscription: ToField<LinkedTable<"u64", ToPhantom<Inscription>>>; creationTimestamp: ToField<"u64">; owner: ToField<"address">; isComposableProfile: ToField<"bool">; beehivePlan: ToField<Table<"u8", "u64">>; subscribersList: ToField<LinkedTable<"address", ToPhantom<AccessRecord>>>; subscriptionsList: ToField<LinkedTable<"address", ToPhantom<AccessRecord>>>; availableGems: ToField<HiveGems>; availableHsui: ToField<Balance<ToPhantom<DSUI>>>; lastActiveEpoch: ToField<"u64">; entropyUsedForCurEpoch: ToField<"u64">; hiveAssets: ToField<LinkedTable<"u64", ToPhantom<HiveAsset>>>; incomingBids: ToField<LinkedTable<"u64", ToPhantom<Vector<Bid<ToPhantom<DSUI>>>>>>; borrowRecords: ToField<LinkedTable<"u64", ToPhantom<BorrowRecord>>>; listingRecords: ToField<LinkedTable<"u64", ToPhantom<ListingRecord>>>; bidRecords: ToField<LinkedTable<"u64", ToPhantom<BidRecord>>>; lendRecords: ToField<LinkedTable<"u64", ToPhantom<LendRecord>>>; installedApps: ToField<Vector<String1>>; moduleVersion: ToField<"u64"> }

export type HiveProfileReified = Reified< HiveProfile, HiveProfileFields >;

export class HiveProfile implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveProfile"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveProfile.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveProfile";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly username: ToField<String1>; readonly bio: ToField<String>; readonly inscription: ToField<LinkedTable<"u64", ToPhantom<Inscription>>>; readonly creationTimestamp: ToField<"u64">; readonly owner: ToField<"address">; readonly isComposableProfile: ToField<"bool">; readonly beehivePlan: ToField<Table<"u8", "u64">>; readonly subscribersList: ToField<LinkedTable<"address", ToPhantom<AccessRecord>>>; readonly subscriptionsList: ToField<LinkedTable<"address", ToPhantom<AccessRecord>>>; readonly availableGems: ToField<HiveGems>; readonly availableHsui: ToField<Balance<ToPhantom<DSUI>>>; readonly lastActiveEpoch: ToField<"u64">; readonly entropyUsedForCurEpoch: ToField<"u64">; readonly hiveAssets: ToField<LinkedTable<"u64", ToPhantom<HiveAsset>>>; readonly incomingBids: ToField<LinkedTable<"u64", ToPhantom<Vector<Bid<ToPhantom<DSUI>>>>>>; readonly borrowRecords: ToField<LinkedTable<"u64", ToPhantom<BorrowRecord>>>; readonly listingRecords: ToField<LinkedTable<"u64", ToPhantom<ListingRecord>>>; readonly bidRecords: ToField<LinkedTable<"u64", ToPhantom<BidRecord>>>; readonly lendRecords: ToField<LinkedTable<"u64", ToPhantom<LendRecord>>>; readonly installedApps: ToField<Vector<String1>>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveProfileFields, ) { this.$fullTypeName = composeSuiType( HiveProfile.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveProfile"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.username = fields.username;; this.bio = fields.bio;; this.inscription = fields.inscription;; this.creationTimestamp = fields.creationTimestamp;; this.owner = fields.owner;; this.isComposableProfile = fields.isComposableProfile;; this.beehivePlan = fields.beehivePlan;; this.subscribersList = fields.subscribersList;; this.subscriptionsList = fields.subscriptionsList;; this.availableGems = fields.availableGems;; this.availableHsui = fields.availableHsui;; this.lastActiveEpoch = fields.lastActiveEpoch;; this.entropyUsedForCurEpoch = fields.entropyUsedForCurEpoch;; this.hiveAssets = fields.hiveAssets;; this.incomingBids = fields.incomingBids;; this.borrowRecords = fields.borrowRecords;; this.listingRecords = fields.listingRecords;; this.bidRecords = fields.bidRecords;; this.lendRecords = fields.lendRecords;; this.installedApps = fields.installedApps;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): HiveProfileReified { return { typeName: HiveProfile.$typeName, fullTypeName: composeSuiType( HiveProfile.$typeName, ...[] ) as "0x0::hive_profile::HiveProfile", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveProfile.fromBcs( data, ), bcs: HiveProfile.bcs, fromJSONField: (field: any) => HiveProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveProfile.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveProfile.fetch( client, id, ), new: ( fields: HiveProfileFields, ) => { return new HiveProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveProfile>> { return phantom(HiveProfile.reified( )); } static get p() { return HiveProfile.phantom() }

 static get bcs() { return bcs.struct("HiveProfile", {

 id: UID.bcs, username: String1.bcs, bio: String.bcs, inscription: LinkedTable.bcs(bcs.u64()), creation_timestamp: bcs.u64(), owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), is_composable_profile: bcs.bool(), beehive_plan: Table.bcs, subscribers_list: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), subscriptions_list: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), available_gems: HiveGems.bcs, available_hsui: Balance.bcs, last_active_epoch: bcs.u64(), entropy_used_for_cur_epoch: bcs.u64(), hive_assets: LinkedTable.bcs(bcs.u64()), incoming_bids: LinkedTable.bcs(bcs.u64()), borrow_records: LinkedTable.bcs(bcs.u64()), listing_records: LinkedTable.bcs(bcs.u64()), bid_records: LinkedTable.bcs(bcs.u64()), lend_records: LinkedTable.bcs(bcs.u64()), installed_apps: bcs.vector(String1.bcs), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveProfile { return HiveProfile.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), username: decodeFromFields(String1.reified(), fields.username), bio: decodeFromFields(String.reified(), fields.bio), inscription: decodeFromFields(LinkedTable.reified("u64", reified.phantom(Inscription.reified())), fields.inscription), creationTimestamp: decodeFromFields("u64", fields.creation_timestamp), owner: decodeFromFields("address", fields.owner), isComposableProfile: decodeFromFields("bool", fields.is_composable_profile), beehivePlan: decodeFromFields(Table.reified(reified.phantom("u8"), reified.phantom("u64")), fields.beehive_plan), subscribersList: decodeFromFields(LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), fields.subscribers_list), subscriptionsList: decodeFromFields(LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), fields.subscriptions_list), availableGems: decodeFromFields(HiveGems.reified(), fields.available_gems), availableHsui: decodeFromFields(Balance.reified(reified.phantom(DSUI.reified())), fields.available_hsui), lastActiveEpoch: decodeFromFields("u64", fields.last_active_epoch), entropyUsedForCurEpoch: decodeFromFields("u64", fields.entropy_used_for_cur_epoch), hiveAssets: decodeFromFields(LinkedTable.reified("u64", reified.phantom(HiveAsset.reified())), fields.hive_assets), incomingBids: decodeFromFields(LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(reified.phantom(DSUI.reified()))))), fields.incoming_bids), borrowRecords: decodeFromFields(LinkedTable.reified("u64", reified.phantom(BorrowRecord.reified())), fields.borrow_records), listingRecords: decodeFromFields(LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), fields.listing_records), bidRecords: decodeFromFields(LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), fields.bid_records), lendRecords: decodeFromFields(LinkedTable.reified("u64", reified.phantom(LendRecord.reified())), fields.lend_records), installedApps: decodeFromFields(reified.vector(String1.reified()), fields.installed_apps), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveProfile { if (!isHiveProfile(item.type)) { throw new Error("not a HiveProfile type");

 }

 return HiveProfile.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), bio: decodeFromFieldsWithTypes(String.reified(), item.fields.bio), inscription: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(Inscription.reified())), item.fields.inscription), creationTimestamp: decodeFromFieldsWithTypes("u64", item.fields.creation_timestamp), owner: decodeFromFieldsWithTypes("address", item.fields.owner), isComposableProfile: decodeFromFieldsWithTypes("bool", item.fields.is_composable_profile), beehivePlan: decodeFromFieldsWithTypes(Table.reified(reified.phantom("u8"), reified.phantom("u64")), item.fields.beehive_plan), subscribersList: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), item.fields.subscribers_list), subscriptionsList: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), item.fields.subscriptions_list), availableGems: decodeFromFieldsWithTypes(HiveGems.reified(), item.fields.available_gems), availableHsui: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(DSUI.reified())), item.fields.available_hsui), lastActiveEpoch: decodeFromFieldsWithTypes("u64", item.fields.last_active_epoch), entropyUsedForCurEpoch: decodeFromFieldsWithTypes("u64", item.fields.entropy_used_for_cur_epoch), hiveAssets: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(HiveAsset.reified())), item.fields.hive_assets), incomingBids: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(reified.phantom(DSUI.reified()))))), item.fields.incoming_bids), borrowRecords: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(BorrowRecord.reified())), item.fields.borrow_records), listingRecords: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), item.fields.listing_records), bidRecords: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), item.fields.bid_records), lendRecords: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(LendRecord.reified())), item.fields.lend_records), installedApps: decodeFromFieldsWithTypes(reified.vector(String1.reified()), item.fields.installed_apps), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): HiveProfile { return HiveProfile.fromFields( HiveProfile.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,username: this.username,bio: this.bio,inscription: this.inscription.toJSONField(),creationTimestamp: this.creationTimestamp.toString(),owner: this.owner,isComposableProfile: this.isComposableProfile,beehivePlan: this.beehivePlan.toJSONField(),subscribersList: this.subscribersList.toJSONField(),subscriptionsList: this.subscriptionsList.toJSONField(),availableGems: this.availableGems.toJSONField(),availableHsui: this.availableHsui.toJSONField(),lastActiveEpoch: this.lastActiveEpoch.toString(),entropyUsedForCurEpoch: this.entropyUsedForCurEpoch.toString(),hiveAssets: this.hiveAssets.toJSONField(),incomingBids: this.incomingBids.toJSONField(),borrowRecords: this.borrowRecords.toJSONField(),listingRecords: this.listingRecords.toJSONField(),bidRecords: this.bidRecords.toJSONField(),lendRecords: this.lendRecords.toJSONField(),installedApps: fieldToJSON<Vector<String1>>(`vector<0x1::ascii::String>`, this.installedApps),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveProfile { return HiveProfile.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), username: decodeFromJSONField(String1.reified(), field.username), bio: decodeFromJSONField(String.reified(), field.bio), inscription: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(Inscription.reified())), field.inscription), creationTimestamp: decodeFromJSONField("u64", field.creationTimestamp), owner: decodeFromJSONField("address", field.owner), isComposableProfile: decodeFromJSONField("bool", field.isComposableProfile), beehivePlan: decodeFromJSONField(Table.reified(reified.phantom("u8"), reified.phantom("u64")), field.beehivePlan), subscribersList: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), field.subscribersList), subscriptionsList: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(AccessRecord.reified())), field.subscriptionsList), availableGems: decodeFromJSONField(HiveGems.reified(), field.availableGems), availableHsui: decodeFromJSONField(Balance.reified(reified.phantom(DSUI.reified())), field.availableHsui), lastActiveEpoch: decodeFromJSONField("u64", field.lastActiveEpoch), entropyUsedForCurEpoch: decodeFromJSONField("u64", field.entropyUsedForCurEpoch), hiveAssets: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(HiveAsset.reified())), field.hiveAssets), incomingBids: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(reified.phantom(DSUI.reified()))))), field.incomingBids), borrowRecords: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(BorrowRecord.reified())), field.borrowRecords), listingRecords: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(ListingRecord.reified())), field.listingRecords), bidRecords: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(BidRecord.reified())), field.bidRecords), lendRecords: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(LendRecord.reified())), field.lendRecords), installedApps: decodeFromJSONField(reified.vector(String1.reified()), field.installedApps), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): HiveProfile { if (json.$typeName !== HiveProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveProfile object`); } return HiveProfile.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveProfile object`); }
 return HiveProfile.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveProfileDestroyed =============================== */

export function isHiveProfileDestroyed(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveProfileDestroyed"; }

export interface HiveProfileDestroyedFields { username: ToField<String1>; profileAddr: ToField<"address">; owner: ToField<"address"> }

export type HiveProfileDestroyedReified = Reified< HiveProfileDestroyed, HiveProfileDestroyedFields >;

export class HiveProfileDestroyed implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveProfileDestroyed"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveProfileDestroyed.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveProfileDestroyed";

 readonly $typeArgs: [];

 readonly username: ToField<String1>; readonly profileAddr: ToField<"address">; readonly owner: ToField<"address">

 private constructor(typeArgs: [], fields: HiveProfileDestroyedFields, ) { this.$fullTypeName = composeSuiType( HiveProfileDestroyed.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveProfileDestroyed"; this.$typeArgs = typeArgs;

 this.username = fields.username;; this.profileAddr = fields.profileAddr;; this.owner = fields.owner; }

 static reified( ): HiveProfileDestroyedReified { return { typeName: HiveProfileDestroyed.$typeName, fullTypeName: composeSuiType( HiveProfileDestroyed.$typeName, ...[] ) as "0x0::hive_profile::HiveProfileDestroyed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveProfileDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveProfileDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveProfileDestroyed.fromBcs( data, ), bcs: HiveProfileDestroyed.bcs, fromJSONField: (field: any) => HiveProfileDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveProfileDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveProfileDestroyed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveProfileDestroyed.fetch( client, id, ), new: ( fields: HiveProfileDestroyedFields, ) => { return new HiveProfileDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveProfileDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveProfileDestroyed>> { return phantom(HiveProfileDestroyed.reified( )); } static get p() { return HiveProfileDestroyed.phantom() }

 static get bcs() { return bcs.struct("HiveProfileDestroyed", {

 username: String1.bcs, profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): HiveProfileDestroyed { return HiveProfileDestroyed.reified( ).new( { username: decodeFromFields(String1.reified(), fields.username), profileAddr: decodeFromFields("address", fields.profile_addr), owner: decodeFromFields("address", fields.owner) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveProfileDestroyed { if (!isHiveProfileDestroyed(item.type)) { throw new Error("not a HiveProfileDestroyed type");

 }

 return HiveProfileDestroyed.reified( ).new( { username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), owner: decodeFromFieldsWithTypes("address", item.fields.owner) } ) }

 static fromBcs( data: Uint8Array ): HiveProfileDestroyed { return HiveProfileDestroyed.fromFields( HiveProfileDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 username: this.username,profileAddr: this.profileAddr,owner: this.owner,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveProfileDestroyed { return HiveProfileDestroyed.reified( ).new( { username: decodeFromJSONField(String1.reified(), field.username), profileAddr: decodeFromJSONField("address", field.profileAddr), owner: decodeFromJSONField("address", field.owner) } ) }

 static fromJSON( json: Record<string, any> ): HiveProfileDestroyed { if (json.$typeName !== HiveProfileDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveProfileDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveProfileDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveProfileDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveProfileDestroyed object`); } return HiveProfileDestroyed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveProfileDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveProfileDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveProfileDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveProfileDestroyed object`); }
 return HiveProfileDestroyed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveProfileKrafted =============================== */

export function isHiveProfileKrafted(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveProfileKrafted"; }

export interface HiveProfileKraftedFields { name: ToField<String>; bio: ToField<String>; newProfileAddr: ToField<"address">; krafter: ToField<"address">; fee: ToField<"u64">; isComposableProfile: ToField<"bool"> }

export type HiveProfileKraftedReified = Reified< HiveProfileKrafted, HiveProfileKraftedFields >;

export class HiveProfileKrafted implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveProfileKrafted"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveProfileKrafted.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveProfileKrafted";

 readonly $typeArgs: [];

 readonly name: ToField<String>; readonly bio: ToField<String>; readonly newProfileAddr: ToField<"address">; readonly krafter: ToField<"address">; readonly fee: ToField<"u64">; readonly isComposableProfile: ToField<"bool">

 private constructor(typeArgs: [], fields: HiveProfileKraftedFields, ) { this.$fullTypeName = composeSuiType( HiveProfileKrafted.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveProfileKrafted"; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.bio = fields.bio;; this.newProfileAddr = fields.newProfileAddr;; this.krafter = fields.krafter;; this.fee = fields.fee;; this.isComposableProfile = fields.isComposableProfile; }

 static reified( ): HiveProfileKraftedReified { return { typeName: HiveProfileKrafted.$typeName, fullTypeName: composeSuiType( HiveProfileKrafted.$typeName, ...[] ) as "0x0::hive_profile::HiveProfileKrafted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveProfileKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveProfileKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveProfileKrafted.fromBcs( data, ), bcs: HiveProfileKrafted.bcs, fromJSONField: (field: any) => HiveProfileKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveProfileKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveProfileKrafted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveProfileKrafted.fetch( client, id, ), new: ( fields: HiveProfileKraftedFields, ) => { return new HiveProfileKrafted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveProfileKrafted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveProfileKrafted>> { return phantom(HiveProfileKrafted.reified( )); } static get p() { return HiveProfileKrafted.phantom() }

 static get bcs() { return bcs.struct("HiveProfileKrafted", {

 name: String.bcs, bio: String.bcs, new_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), krafter: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), fee: bcs.u64(), is_composable_profile: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): HiveProfileKrafted { return HiveProfileKrafted.reified( ).new( { name: decodeFromFields(String.reified(), fields.name), bio: decodeFromFields(String.reified(), fields.bio), newProfileAddr: decodeFromFields("address", fields.new_profile_addr), krafter: decodeFromFields("address", fields.krafter), fee: decodeFromFields("u64", fields.fee), isComposableProfile: decodeFromFields("bool", fields.is_composable_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveProfileKrafted { if (!isHiveProfileKrafted(item.type)) { throw new Error("not a HiveProfileKrafted type");

 }

 return HiveProfileKrafted.reified( ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), bio: decodeFromFieldsWithTypes(String.reified(), item.fields.bio), newProfileAddr: decodeFromFieldsWithTypes("address", item.fields.new_profile_addr), krafter: decodeFromFieldsWithTypes("address", item.fields.krafter), fee: decodeFromFieldsWithTypes("u64", item.fields.fee), isComposableProfile: decodeFromFieldsWithTypes("bool", item.fields.is_composable_profile) } ) }

 static fromBcs( data: Uint8Array ): HiveProfileKrafted { return HiveProfileKrafted.fromFields( HiveProfileKrafted.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,bio: this.bio,newProfileAddr: this.newProfileAddr,krafter: this.krafter,fee: this.fee.toString(),isComposableProfile: this.isComposableProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveProfileKrafted { return HiveProfileKrafted.reified( ).new( { name: decodeFromJSONField(String.reified(), field.name), bio: decodeFromJSONField(String.reified(), field.bio), newProfileAddr: decodeFromJSONField("address", field.newProfileAddr), krafter: decodeFromJSONField("address", field.krafter), fee: decodeFromJSONField("u64", field.fee), isComposableProfile: decodeFromJSONField("bool", field.isComposableProfile) } ) }

 static fromJSON( json: Record<string, any> ): HiveProfileKrafted { if (json.$typeName !== HiveProfileKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveProfileKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveProfileKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveProfileKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveProfileKrafted object`); } return HiveProfileKrafted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveProfileKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveProfileKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveProfileKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveProfileKrafted object`); }
 return HiveProfileKrafted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveProfileMappingStore =============================== */

export function isHiveProfileMappingStore(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveProfileMappingStore"; }

export interface HiveProfileMappingStoreFields { id: ToField<UID>; ownerToProfileMapping: ToField<LinkedTable<"address", "address">>; usernameToProfileMapping: ToField<LinkedTable<String1, "address">>; usernameToCompProfileMapping: ToField<LinkedTable<String1, "address">>; profileToCreatorKioskMapping: ToField<LinkedTable<"address", ToPhantom<Vector<"address">>>>; appNamesToCapMapping: ToField<LinkedTable<String1, "address">>; kioskNamesMapping: ToField<LinkedTable<String1, "address">>; reservedUsernamesToAccessorMapping: ToField<LinkedTable<String1, "address">>; moduleVersion: ToField<"u64"> }

export type HiveProfileMappingStoreReified = Reified< HiveProfileMappingStore, HiveProfileMappingStoreFields >;

export class HiveProfileMappingStore implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveProfileMappingStore"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveProfileMappingStore.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveProfileMappingStore";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly ownerToProfileMapping: ToField<LinkedTable<"address", "address">>; readonly usernameToProfileMapping: ToField<LinkedTable<String1, "address">>; readonly usernameToCompProfileMapping: ToField<LinkedTable<String1, "address">>; readonly profileToCreatorKioskMapping: ToField<LinkedTable<"address", ToPhantom<Vector<"address">>>>; readonly appNamesToCapMapping: ToField<LinkedTable<String1, "address">>; readonly kioskNamesMapping: ToField<LinkedTable<String1, "address">>; readonly reservedUsernamesToAccessorMapping: ToField<LinkedTable<String1, "address">>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveProfileMappingStoreFields, ) { this.$fullTypeName = composeSuiType( HiveProfileMappingStore.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveProfileMappingStore"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.ownerToProfileMapping = fields.ownerToProfileMapping;; this.usernameToProfileMapping = fields.usernameToProfileMapping;; this.usernameToCompProfileMapping = fields.usernameToCompProfileMapping;; this.profileToCreatorKioskMapping = fields.profileToCreatorKioskMapping;; this.appNamesToCapMapping = fields.appNamesToCapMapping;; this.kioskNamesMapping = fields.kioskNamesMapping;; this.reservedUsernamesToAccessorMapping = fields.reservedUsernamesToAccessorMapping;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): HiveProfileMappingStoreReified { return { typeName: HiveProfileMappingStore.$typeName, fullTypeName: composeSuiType( HiveProfileMappingStore.$typeName, ...[] ) as "0x0::hive_profile::HiveProfileMappingStore", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveProfileMappingStore.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveProfileMappingStore.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveProfileMappingStore.fromBcs( data, ), bcs: HiveProfileMappingStore.bcs, fromJSONField: (field: any) => HiveProfileMappingStore.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveProfileMappingStore.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveProfileMappingStore.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveProfileMappingStore.fetch( client, id, ), new: ( fields: HiveProfileMappingStoreFields, ) => { return new HiveProfileMappingStore( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveProfileMappingStore.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveProfileMappingStore>> { return phantom(HiveProfileMappingStore.reified( )); } static get p() { return HiveProfileMappingStore.phantom() }

 static get bcs() { return bcs.struct("HiveProfileMappingStore", {

 id: UID.bcs, owner_to_profile_mapping: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), username_to_profile_mapping: LinkedTable.bcs(String1.bcs), username_to_comp_profile_mapping: LinkedTable.bcs(String1.bcs), profile_to_creator_kiosk_mapping: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), app_names_to_cap_mapping: LinkedTable.bcs(String1.bcs), kiosk_names_mapping: LinkedTable.bcs(String1.bcs), reserved_usernames_to_accessor_mapping: LinkedTable.bcs(String1.bcs), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveProfileMappingStore { return HiveProfileMappingStore.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), ownerToProfileMapping: decodeFromFields(LinkedTable.reified("address", reified.phantom("address")), fields.owner_to_profile_mapping), usernameToProfileMapping: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.username_to_profile_mapping), usernameToCompProfileMapping: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.username_to_comp_profile_mapping), profileToCreatorKioskMapping: decodeFromFields(LinkedTable.reified("address", reified.phantom(reified.vector("address"))), fields.profile_to_creator_kiosk_mapping), appNamesToCapMapping: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.app_names_to_cap_mapping), kioskNamesMapping: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.kiosk_names_mapping), reservedUsernamesToAccessorMapping: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.reserved_usernames_to_accessor_mapping), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveProfileMappingStore { if (!isHiveProfileMappingStore(item.type)) { throw new Error("not a HiveProfileMappingStore type");

 }

 return HiveProfileMappingStore.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), ownerToProfileMapping: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("address")), item.fields.owner_to_profile_mapping), usernameToProfileMapping: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.username_to_profile_mapping), usernameToCompProfileMapping: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.username_to_comp_profile_mapping), profileToCreatorKioskMapping: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(reified.vector("address"))), item.fields.profile_to_creator_kiosk_mapping), appNamesToCapMapping: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.app_names_to_cap_mapping), kioskNamesMapping: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.kiosk_names_mapping), reservedUsernamesToAccessorMapping: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.reserved_usernames_to_accessor_mapping), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): HiveProfileMappingStore { return HiveProfileMappingStore.fromFields( HiveProfileMappingStore.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,ownerToProfileMapping: this.ownerToProfileMapping.toJSONField(),usernameToProfileMapping: this.usernameToProfileMapping.toJSONField(),usernameToCompProfileMapping: this.usernameToCompProfileMapping.toJSONField(),profileToCreatorKioskMapping: this.profileToCreatorKioskMapping.toJSONField(),appNamesToCapMapping: this.appNamesToCapMapping.toJSONField(),kioskNamesMapping: this.kioskNamesMapping.toJSONField(),reservedUsernamesToAccessorMapping: this.reservedUsernamesToAccessorMapping.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveProfileMappingStore { return HiveProfileMappingStore.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), ownerToProfileMapping: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("address")), field.ownerToProfileMapping), usernameToProfileMapping: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.usernameToProfileMapping), usernameToCompProfileMapping: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.usernameToCompProfileMapping), profileToCreatorKioskMapping: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(reified.vector("address"))), field.profileToCreatorKioskMapping), appNamesToCapMapping: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.appNamesToCapMapping), kioskNamesMapping: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.kioskNamesMapping), reservedUsernamesToAccessorMapping: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.reservedUsernamesToAccessorMapping), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): HiveProfileMappingStore { if (json.$typeName !== HiveProfileMappingStore.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveProfileMappingStore.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveProfileMappingStore { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveProfileMappingStore(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveProfileMappingStore object`); } return HiveProfileMappingStore.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveProfileMappingStore> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveProfileMappingStore object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveProfileMappingStore(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveProfileMappingStore object`); }
 return HiveProfileMappingStore.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveTwapInfo =============================== */

export function isHiveTwapInfo(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveTwapInfo"; }

export interface HiveTwapInfoFields { lastUpdateTimestamp: ToField<"u64">; hiveSuiTwap: ToField<"u256">; suiUsdcTwap: ToField<"u256">; hiveUsdcTwap: ToField<"u256"> }

export type HiveTwapInfoReified = Reified< HiveTwapInfo, HiveTwapInfoFields >;

export class HiveTwapInfo implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveTwapInfo"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveTwapInfo.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveTwapInfo";

 readonly $typeArgs: [];

 readonly lastUpdateTimestamp: ToField<"u64">; readonly hiveSuiTwap: ToField<"u256">; readonly suiUsdcTwap: ToField<"u256">; readonly hiveUsdcTwap: ToField<"u256">

 private constructor(typeArgs: [], fields: HiveTwapInfoFields, ) { this.$fullTypeName = composeSuiType( HiveTwapInfo.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveTwapInfo"; this.$typeArgs = typeArgs;

 this.lastUpdateTimestamp = fields.lastUpdateTimestamp;; this.hiveSuiTwap = fields.hiveSuiTwap;; this.suiUsdcTwap = fields.suiUsdcTwap;; this.hiveUsdcTwap = fields.hiveUsdcTwap; }

 static reified( ): HiveTwapInfoReified { return { typeName: HiveTwapInfo.$typeName, fullTypeName: composeSuiType( HiveTwapInfo.$typeName, ...[] ) as "0x0::hive_profile::HiveTwapInfo", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveTwapInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveTwapInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveTwapInfo.fromBcs( data, ), bcs: HiveTwapInfo.bcs, fromJSONField: (field: any) => HiveTwapInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveTwapInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveTwapInfo.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveTwapInfo.fetch( client, id, ), new: ( fields: HiveTwapInfoFields, ) => { return new HiveTwapInfo( [], fields ) }, kind: "StructClassReified", } }

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

 static async fetch( client: SuiClient, id: string ): Promise<HiveTwapInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveTwapInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveTwapInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveTwapInfo object`); }
 return HiveTwapInfo.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveTwapUpdated =============================== */

export function isHiveTwapUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::HiveTwapUpdated"; }

export interface HiveTwapUpdatedFields { timestamp: ToField<"u64">; hiveSuiTwap: ToField<"u256">; suiUsdcTwap: ToField<"u256">; hiveUsdcTwap: ToField<"u256"> }

export type HiveTwapUpdatedReified = Reified< HiveTwapUpdated, HiveTwapUpdatedFields >;

export class HiveTwapUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::HiveTwapUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveTwapUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::HiveTwapUpdated";

 readonly $typeArgs: [];

 readonly timestamp: ToField<"u64">; readonly hiveSuiTwap: ToField<"u256">; readonly suiUsdcTwap: ToField<"u256">; readonly hiveUsdcTwap: ToField<"u256">

 private constructor(typeArgs: [], fields: HiveTwapUpdatedFields, ) { this.$fullTypeName = composeSuiType( HiveTwapUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::HiveTwapUpdated"; this.$typeArgs = typeArgs;

 this.timestamp = fields.timestamp;; this.hiveSuiTwap = fields.hiveSuiTwap;; this.suiUsdcTwap = fields.suiUsdcTwap;; this.hiveUsdcTwap = fields.hiveUsdcTwap; }

 static reified( ): HiveTwapUpdatedReified { return { typeName: HiveTwapUpdated.$typeName, fullTypeName: composeSuiType( HiveTwapUpdated.$typeName, ...[] ) as "0x0::hive_profile::HiveTwapUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveTwapUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveTwapUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveTwapUpdated.fromBcs( data, ), bcs: HiveTwapUpdated.bcs, fromJSONField: (field: any) => HiveTwapUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveTwapUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveTwapUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveTwapUpdated.fetch( client, id, ), new: ( fields: HiveTwapUpdatedFields, ) => { return new HiveTwapUpdated( [], fields ) }, kind: "StructClassReified", } }

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

 static async fetch( client: SuiClient, id: string ): Promise<HiveTwapUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveTwapUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveTwapUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveTwapUpdated object`); }
 return HiveTwapUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Inscription =============================== */

export function isInscription(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::Inscription"; }

export interface InscriptionFields { type: ToField<String>; base64: ToField<Vector<String>> }

export type InscriptionReified = Reified< Inscription, InscriptionFields >;

export class Inscription implements StructClass { static readonly $typeName = "0x0::hive_profile::Inscription"; static readonly $numTypeParams = 0;

 readonly $typeName = Inscription.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::Inscription";

 readonly $typeArgs: [];

 readonly type: ToField<String>; readonly base64: ToField<Vector<String>>

 private constructor(typeArgs: [], fields: InscriptionFields, ) { this.$fullTypeName = composeSuiType( Inscription.$typeName, ...typeArgs ) as "0x0::hive_profile::Inscription"; this.$typeArgs = typeArgs;

 this.type = fields.type;; this.base64 = fields.base64; }

 static reified( ): InscriptionReified { return { typeName: Inscription.$typeName, fullTypeName: composeSuiType( Inscription.$typeName, ...[] ) as "0x0::hive_profile::Inscription", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Inscription.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Inscription.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Inscription.fromBcs( data, ), bcs: Inscription.bcs, fromJSONField: (field: any) => Inscription.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Inscription.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Inscription.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Inscription.fetch( client, id, ), new: ( fields: InscriptionFields, ) => { return new Inscription( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Inscription.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Inscription>> { return phantom(Inscription.reified( )); } static get p() { return Inscription.phantom() }

 static get bcs() { return bcs.struct("Inscription", {

 type: String.bcs, base64: bcs.vector(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): Inscription { return Inscription.reified( ).new( { type: decodeFromFields(String.reified(), fields.type), base64: decodeFromFields(reified.vector(String.reified()), fields.base64) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Inscription { if (!isInscription(item.type)) { throw new Error("not a Inscription type");

 }

 return Inscription.reified( ).new( { type: decodeFromFieldsWithTypes(String.reified(), item.fields.type), base64: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.base64) } ) }

 static fromBcs( data: Uint8Array ): Inscription { return Inscription.fromFields( Inscription.bcs.parse(data) ) }

 toJSONField() { return {

 type: this.type,base64: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.base64),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Inscription { return Inscription.reified( ).new( { type: decodeFromJSONField(String.reified(), field.type), base64: decodeFromJSONField(reified.vector(String.reified()), field.base64) } ) }

 static fromJSON( json: Record<string, any> ): Inscription { if (json.$typeName !== Inscription.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Inscription.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Inscription { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isInscription(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Inscription object`); } return Inscription.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Inscription> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Inscription object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isInscription(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Inscription object`); }
 return Inscription.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== InscriptionSetForProfile =============================== */

export function isInscriptionSetForProfile(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::InscriptionSetForProfile"; }

export interface InscriptionSetForProfileFields { profileAddr: ToField<"address">; username: ToField<String>; type: ToField<String>; base64: ToField<Vector<String>> }

export type InscriptionSetForProfileReified = Reified< InscriptionSetForProfile, InscriptionSetForProfileFields >;

export class InscriptionSetForProfile implements StructClass { static readonly $typeName = "0x0::hive_profile::InscriptionSetForProfile"; static readonly $numTypeParams = 0;

 readonly $typeName = InscriptionSetForProfile.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::InscriptionSetForProfile";

 readonly $typeArgs: [];

 readonly profileAddr: ToField<"address">; readonly username: ToField<String>; readonly type: ToField<String>; readonly base64: ToField<Vector<String>>

 private constructor(typeArgs: [], fields: InscriptionSetForProfileFields, ) { this.$fullTypeName = composeSuiType( InscriptionSetForProfile.$typeName, ...typeArgs ) as "0x0::hive_profile::InscriptionSetForProfile"; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.type = fields.type;; this.base64 = fields.base64; }

 static reified( ): InscriptionSetForProfileReified { return { typeName: InscriptionSetForProfile.$typeName, fullTypeName: composeSuiType( InscriptionSetForProfile.$typeName, ...[] ) as "0x0::hive_profile::InscriptionSetForProfile", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => InscriptionSetForProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => InscriptionSetForProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => InscriptionSetForProfile.fromBcs( data, ), bcs: InscriptionSetForProfile.bcs, fromJSONField: (field: any) => InscriptionSetForProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => InscriptionSetForProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => InscriptionSetForProfile.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => InscriptionSetForProfile.fetch( client, id, ), new: ( fields: InscriptionSetForProfileFields, ) => { return new InscriptionSetForProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return InscriptionSetForProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<InscriptionSetForProfile>> { return phantom(InscriptionSetForProfile.reified( )); } static get p() { return InscriptionSetForProfile.phantom() }

 static get bcs() { return bcs.struct("InscriptionSetForProfile", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, type: String.bcs, base64: bcs.vector(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): InscriptionSetForProfile { return InscriptionSetForProfile.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String.reified(), fields.username), type: decodeFromFields(String.reified(), fields.type), base64: decodeFromFields(reified.vector(String.reified()), fields.base64) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): InscriptionSetForProfile { if (!isInscriptionSetForProfile(item.type)) { throw new Error("not a InscriptionSetForProfile type");

 }

 return InscriptionSetForProfile.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), type: decodeFromFieldsWithTypes(String.reified(), item.fields.type), base64: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.base64) } ) }

 static fromBcs( data: Uint8Array ): InscriptionSetForProfile { return InscriptionSetForProfile.fromFields( InscriptionSetForProfile.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,username: this.username,type: this.type,base64: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.base64),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): InscriptionSetForProfile { return InscriptionSetForProfile.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String.reified(), field.username), type: decodeFromJSONField(String.reified(), field.type), base64: decodeFromJSONField(reified.vector(String.reified()), field.base64) } ) }

 static fromJSON( json: Record<string, any> ): InscriptionSetForProfile { if (json.$typeName !== InscriptionSetForProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return InscriptionSetForProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): InscriptionSetForProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isInscriptionSetForProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a InscriptionSetForProfile object`); } return InscriptionSetForProfile.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<InscriptionSetForProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching InscriptionSetForProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isInscriptionSetForProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a InscriptionSetForProfile object`); }
 return InscriptionSetForProfile.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== JoinedHiveOfProfile =============================== */

export function isJoinedHiveOfProfile(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::JoinedHiveOfProfile"; }

export interface JoinedHiveOfProfileFields { subscriberProfileAddr: ToField<"address">; hiveOwnerProfile: ToField<"address">; subscriberUsername: ToField<String>; hiveOwnerUsername: ToField<String>; accessType: ToField<"u8">; accessCost: ToField<"u64">; nextPaymentTimestamp: ToField<"u64"> }

export type JoinedHiveOfProfileReified = Reified< JoinedHiveOfProfile, JoinedHiveOfProfileFields >;

export class JoinedHiveOfProfile implements StructClass { static readonly $typeName = "0x0::hive_profile::JoinedHiveOfProfile"; static readonly $numTypeParams = 0;

 readonly $typeName = JoinedHiveOfProfile.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::JoinedHiveOfProfile";

 readonly $typeArgs: [];

 readonly subscriberProfileAddr: ToField<"address">; readonly hiveOwnerProfile: ToField<"address">; readonly subscriberUsername: ToField<String>; readonly hiveOwnerUsername: ToField<String>; readonly accessType: ToField<"u8">; readonly accessCost: ToField<"u64">; readonly nextPaymentTimestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: JoinedHiveOfProfileFields, ) { this.$fullTypeName = composeSuiType( JoinedHiveOfProfile.$typeName, ...typeArgs ) as "0x0::hive_profile::JoinedHiveOfProfile"; this.$typeArgs = typeArgs;

 this.subscriberProfileAddr = fields.subscriberProfileAddr;; this.hiveOwnerProfile = fields.hiveOwnerProfile;; this.subscriberUsername = fields.subscriberUsername;; this.hiveOwnerUsername = fields.hiveOwnerUsername;; this.accessType = fields.accessType;; this.accessCost = fields.accessCost;; this.nextPaymentTimestamp = fields.nextPaymentTimestamp; }

 static reified( ): JoinedHiveOfProfileReified { return { typeName: JoinedHiveOfProfile.$typeName, fullTypeName: composeSuiType( JoinedHiveOfProfile.$typeName, ...[] ) as "0x0::hive_profile::JoinedHiveOfProfile", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => JoinedHiveOfProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => JoinedHiveOfProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => JoinedHiveOfProfile.fromBcs( data, ), bcs: JoinedHiveOfProfile.bcs, fromJSONField: (field: any) => JoinedHiveOfProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => JoinedHiveOfProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => JoinedHiveOfProfile.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => JoinedHiveOfProfile.fetch( client, id, ), new: ( fields: JoinedHiveOfProfileFields, ) => { return new JoinedHiveOfProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return JoinedHiveOfProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<JoinedHiveOfProfile>> { return phantom(JoinedHiveOfProfile.reified( )); } static get p() { return JoinedHiveOfProfile.phantom() }

 static get bcs() { return bcs.struct("JoinedHiveOfProfile", {

 subscriber_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), hive_owner_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), subscriber_username: String.bcs, hive_owner_username: String.bcs, access_type: bcs.u8(), access_cost: bcs.u64(), next_payment_timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): JoinedHiveOfProfile { return JoinedHiveOfProfile.reified( ).new( { subscriberProfileAddr: decodeFromFields("address", fields.subscriber_profile_addr), hiveOwnerProfile: decodeFromFields("address", fields.hive_owner_profile), subscriberUsername: decodeFromFields(String.reified(), fields.subscriber_username), hiveOwnerUsername: decodeFromFields(String.reified(), fields.hive_owner_username), accessType: decodeFromFields("u8", fields.access_type), accessCost: decodeFromFields("u64", fields.access_cost), nextPaymentTimestamp: decodeFromFields("u64", fields.next_payment_timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): JoinedHiveOfProfile { if (!isJoinedHiveOfProfile(item.type)) { throw new Error("not a JoinedHiveOfProfile type");

 }

 return JoinedHiveOfProfile.reified( ).new( { subscriberProfileAddr: decodeFromFieldsWithTypes("address", item.fields.subscriber_profile_addr), hiveOwnerProfile: decodeFromFieldsWithTypes("address", item.fields.hive_owner_profile), subscriberUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.subscriber_username), hiveOwnerUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.hive_owner_username), accessType: decodeFromFieldsWithTypes("u8", item.fields.access_type), accessCost: decodeFromFieldsWithTypes("u64", item.fields.access_cost), nextPaymentTimestamp: decodeFromFieldsWithTypes("u64", item.fields.next_payment_timestamp) } ) }

 static fromBcs( data: Uint8Array ): JoinedHiveOfProfile { return JoinedHiveOfProfile.fromFields( JoinedHiveOfProfile.bcs.parse(data) ) }

 toJSONField() { return {

 subscriberProfileAddr: this.subscriberProfileAddr,hiveOwnerProfile: this.hiveOwnerProfile,subscriberUsername: this.subscriberUsername,hiveOwnerUsername: this.hiveOwnerUsername,accessType: this.accessType,accessCost: this.accessCost.toString(),nextPaymentTimestamp: this.nextPaymentTimestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): JoinedHiveOfProfile { return JoinedHiveOfProfile.reified( ).new( { subscriberProfileAddr: decodeFromJSONField("address", field.subscriberProfileAddr), hiveOwnerProfile: decodeFromJSONField("address", field.hiveOwnerProfile), subscriberUsername: decodeFromJSONField(String.reified(), field.subscriberUsername), hiveOwnerUsername: decodeFromJSONField(String.reified(), field.hiveOwnerUsername), accessType: decodeFromJSONField("u8", field.accessType), accessCost: decodeFromJSONField("u64", field.accessCost), nextPaymentTimestamp: decodeFromJSONField("u64", field.nextPaymentTimestamp) } ) }

 static fromJSON( json: Record<string, any> ): JoinedHiveOfProfile { if (json.$typeName !== JoinedHiveOfProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return JoinedHiveOfProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): JoinedHiveOfProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isJoinedHiveOfProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a JoinedHiveOfProfile object`); } return JoinedHiveOfProfile.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<JoinedHiveOfProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching JoinedHiveOfProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isJoinedHiveOfProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a JoinedHiveOfProfile object`); }
 return JoinedHiveOfProfile.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== KioskOwnershipTransferred =============================== */

export function isKioskOwnershipTransferred(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::KioskOwnershipTransferred"; }

export interface KioskOwnershipTransferredFields { collectionName: ToField<String>; creatorProfile: ToField<"address">; creatorProfileUsername: ToField<String1>; newCreatorProfile: ToField<"address">; newCreatorProfileUsername: ToField<String1>; kiosk: ToField<"address"> }

export type KioskOwnershipTransferredReified = Reified< KioskOwnershipTransferred, KioskOwnershipTransferredFields >;

export class KioskOwnershipTransferred implements StructClass { static readonly $typeName = "0x0::hive_profile::KioskOwnershipTransferred"; static readonly $numTypeParams = 0;

 readonly $typeName = KioskOwnershipTransferred.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::KioskOwnershipTransferred";

 readonly $typeArgs: [];

 readonly collectionName: ToField<String>; readonly creatorProfile: ToField<"address">; readonly creatorProfileUsername: ToField<String1>; readonly newCreatorProfile: ToField<"address">; readonly newCreatorProfileUsername: ToField<String1>; readonly kiosk: ToField<"address">

 private constructor(typeArgs: [], fields: KioskOwnershipTransferredFields, ) { this.$fullTypeName = composeSuiType( KioskOwnershipTransferred.$typeName, ...typeArgs ) as "0x0::hive_profile::KioskOwnershipTransferred"; this.$typeArgs = typeArgs;

 this.collectionName = fields.collectionName;; this.creatorProfile = fields.creatorProfile;; this.creatorProfileUsername = fields.creatorProfileUsername;; this.newCreatorProfile = fields.newCreatorProfile;; this.newCreatorProfileUsername = fields.newCreatorProfileUsername;; this.kiosk = fields.kiosk; }

 static reified( ): KioskOwnershipTransferredReified { return { typeName: KioskOwnershipTransferred.$typeName, fullTypeName: composeSuiType( KioskOwnershipTransferred.$typeName, ...[] ) as "0x0::hive_profile::KioskOwnershipTransferred", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => KioskOwnershipTransferred.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => KioskOwnershipTransferred.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => KioskOwnershipTransferred.fromBcs( data, ), bcs: KioskOwnershipTransferred.bcs, fromJSONField: (field: any) => KioskOwnershipTransferred.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => KioskOwnershipTransferred.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => KioskOwnershipTransferred.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => KioskOwnershipTransferred.fetch( client, id, ), new: ( fields: KioskOwnershipTransferredFields, ) => { return new KioskOwnershipTransferred( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return KioskOwnershipTransferred.reified() }

 static phantom( ): PhantomReified<ToTypeStr<KioskOwnershipTransferred>> { return phantom(KioskOwnershipTransferred.reified( )); } static get p() { return KioskOwnershipTransferred.phantom() }

 static get bcs() { return bcs.struct("KioskOwnershipTransferred", {

 collection_name: String.bcs, creator_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), creator_profile_username: String1.bcs, new_creator_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), new_creator_profile_username: String1.bcs, kiosk: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): KioskOwnershipTransferred { return KioskOwnershipTransferred.reified( ).new( { collectionName: decodeFromFields(String.reified(), fields.collection_name), creatorProfile: decodeFromFields("address", fields.creator_profile), creatorProfileUsername: decodeFromFields(String1.reified(), fields.creator_profile_username), newCreatorProfile: decodeFromFields("address", fields.new_creator_profile), newCreatorProfileUsername: decodeFromFields(String1.reified(), fields.new_creator_profile_username), kiosk: decodeFromFields("address", fields.kiosk) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): KioskOwnershipTransferred { if (!isKioskOwnershipTransferred(item.type)) { throw new Error("not a KioskOwnershipTransferred type");

 }

 return KioskOwnershipTransferred.reified( ).new( { collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), creatorProfile: decodeFromFieldsWithTypes("address", item.fields.creator_profile), creatorProfileUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.creator_profile_username), newCreatorProfile: decodeFromFieldsWithTypes("address", item.fields.new_creator_profile), newCreatorProfileUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.new_creator_profile_username), kiosk: decodeFromFieldsWithTypes("address", item.fields.kiosk) } ) }

 static fromBcs( data: Uint8Array ): KioskOwnershipTransferred { return KioskOwnershipTransferred.fromFields( KioskOwnershipTransferred.bcs.parse(data) ) }

 toJSONField() { return {

 collectionName: this.collectionName,creatorProfile: this.creatorProfile,creatorProfileUsername: this.creatorProfileUsername,newCreatorProfile: this.newCreatorProfile,newCreatorProfileUsername: this.newCreatorProfileUsername,kiosk: this.kiosk,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): KioskOwnershipTransferred { return KioskOwnershipTransferred.reified( ).new( { collectionName: decodeFromJSONField(String.reified(), field.collectionName), creatorProfile: decodeFromJSONField("address", field.creatorProfile), creatorProfileUsername: decodeFromJSONField(String1.reified(), field.creatorProfileUsername), newCreatorProfile: decodeFromJSONField("address", field.newCreatorProfile), newCreatorProfileUsername: decodeFromJSONField(String1.reified(), field.newCreatorProfileUsername), kiosk: decodeFromJSONField("address", field.kiosk) } ) }

 static fromJSON( json: Record<string, any> ): KioskOwnershipTransferred { if (json.$typeName !== KioskOwnershipTransferred.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return KioskOwnershipTransferred.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): KioskOwnershipTransferred { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isKioskOwnershipTransferred(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a KioskOwnershipTransferred object`); } return KioskOwnershipTransferred.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<KioskOwnershipTransferred> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching KioskOwnershipTransferred object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isKioskOwnershipTransferred(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a KioskOwnershipTransferred object`); }
 return KioskOwnershipTransferred.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== KraftRoyaltyUpdated =============================== */

export function isKraftRoyaltyUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::KraftRoyaltyUpdated"; }

export interface KraftRoyaltyUpdatedFields { royaltyNum: ToField<"u64">; royaltyDenom: ToField<"u64">; assetsDispersalPercent: ToField<"u64">; creatorsRoyaltyPercent: ToField<"u64">; gemsRoyaltyNum: ToField<"u64">; gemsRoyaltyDenom: ToField<"u64">; gemsTreasuryPercent: ToField<"u64">; gemsBurnPercent: ToField<"u64"> }

export type KraftRoyaltyUpdatedReified = Reified< KraftRoyaltyUpdated, KraftRoyaltyUpdatedFields >;

export class KraftRoyaltyUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::KraftRoyaltyUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = KraftRoyaltyUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::KraftRoyaltyUpdated";

 readonly $typeArgs: [];

 readonly royaltyNum: ToField<"u64">; readonly royaltyDenom: ToField<"u64">; readonly assetsDispersalPercent: ToField<"u64">; readonly creatorsRoyaltyPercent: ToField<"u64">; readonly gemsRoyaltyNum: ToField<"u64">; readonly gemsRoyaltyDenom: ToField<"u64">; readonly gemsTreasuryPercent: ToField<"u64">; readonly gemsBurnPercent: ToField<"u64">

 private constructor(typeArgs: [], fields: KraftRoyaltyUpdatedFields, ) { this.$fullTypeName = composeSuiType( KraftRoyaltyUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::KraftRoyaltyUpdated"; this.$typeArgs = typeArgs;

 this.royaltyNum = fields.royaltyNum;; this.royaltyDenom = fields.royaltyDenom;; this.assetsDispersalPercent = fields.assetsDispersalPercent;; this.creatorsRoyaltyPercent = fields.creatorsRoyaltyPercent;; this.gemsRoyaltyNum = fields.gemsRoyaltyNum;; this.gemsRoyaltyDenom = fields.gemsRoyaltyDenom;; this.gemsTreasuryPercent = fields.gemsTreasuryPercent;; this.gemsBurnPercent = fields.gemsBurnPercent; }

 static reified( ): KraftRoyaltyUpdatedReified { return { typeName: KraftRoyaltyUpdated.$typeName, fullTypeName: composeSuiType( KraftRoyaltyUpdated.$typeName, ...[] ) as "0x0::hive_profile::KraftRoyaltyUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => KraftRoyaltyUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => KraftRoyaltyUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => KraftRoyaltyUpdated.fromBcs( data, ), bcs: KraftRoyaltyUpdated.bcs, fromJSONField: (field: any) => KraftRoyaltyUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => KraftRoyaltyUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => KraftRoyaltyUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => KraftRoyaltyUpdated.fetch( client, id, ), new: ( fields: KraftRoyaltyUpdatedFields, ) => { return new KraftRoyaltyUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return KraftRoyaltyUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<KraftRoyaltyUpdated>> { return phantom(KraftRoyaltyUpdated.reified( )); } static get p() { return KraftRoyaltyUpdated.phantom() }

 static get bcs() { return bcs.struct("KraftRoyaltyUpdated", {

 royalty_num: bcs.u64(), royalty_denom: bcs.u64(), assets_dispersal_percent: bcs.u64(), creators_royalty_percent: bcs.u64(), gems_royalty_num: bcs.u64(), gems_royalty_denom: bcs.u64(), gems_treasury_percent: bcs.u64(), gems_burn_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): KraftRoyaltyUpdated { return KraftRoyaltyUpdated.reified( ).new( { royaltyNum: decodeFromFields("u64", fields.royalty_num), royaltyDenom: decodeFromFields("u64", fields.royalty_denom), assetsDispersalPercent: decodeFromFields("u64", fields.assets_dispersal_percent), creatorsRoyaltyPercent: decodeFromFields("u64", fields.creators_royalty_percent), gemsRoyaltyNum: decodeFromFields("u64", fields.gems_royalty_num), gemsRoyaltyDenom: decodeFromFields("u64", fields.gems_royalty_denom), gemsTreasuryPercent: decodeFromFields("u64", fields.gems_treasury_percent), gemsBurnPercent: decodeFromFields("u64", fields.gems_burn_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): KraftRoyaltyUpdated { if (!isKraftRoyaltyUpdated(item.type)) { throw new Error("not a KraftRoyaltyUpdated type");

 }

 return KraftRoyaltyUpdated.reified( ).new( { royaltyNum: decodeFromFieldsWithTypes("u64", item.fields.royalty_num), royaltyDenom: decodeFromFieldsWithTypes("u64", item.fields.royalty_denom), assetsDispersalPercent: decodeFromFieldsWithTypes("u64", item.fields.assets_dispersal_percent), creatorsRoyaltyPercent: decodeFromFieldsWithTypes("u64", item.fields.creators_royalty_percent), gemsRoyaltyNum: decodeFromFieldsWithTypes("u64", item.fields.gems_royalty_num), gemsRoyaltyDenom: decodeFromFieldsWithTypes("u64", item.fields.gems_royalty_denom), gemsTreasuryPercent: decodeFromFieldsWithTypes("u64", item.fields.gems_treasury_percent), gemsBurnPercent: decodeFromFieldsWithTypes("u64", item.fields.gems_burn_percent) } ) }

 static fromBcs( data: Uint8Array ): KraftRoyaltyUpdated { return KraftRoyaltyUpdated.fromFields( KraftRoyaltyUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 royaltyNum: this.royaltyNum.toString(),royaltyDenom: this.royaltyDenom.toString(),assetsDispersalPercent: this.assetsDispersalPercent.toString(),creatorsRoyaltyPercent: this.creatorsRoyaltyPercent.toString(),gemsRoyaltyNum: this.gemsRoyaltyNum.toString(),gemsRoyaltyDenom: this.gemsRoyaltyDenom.toString(),gemsTreasuryPercent: this.gemsTreasuryPercent.toString(),gemsBurnPercent: this.gemsBurnPercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): KraftRoyaltyUpdated { return KraftRoyaltyUpdated.reified( ).new( { royaltyNum: decodeFromJSONField("u64", field.royaltyNum), royaltyDenom: decodeFromJSONField("u64", field.royaltyDenom), assetsDispersalPercent: decodeFromJSONField("u64", field.assetsDispersalPercent), creatorsRoyaltyPercent: decodeFromJSONField("u64", field.creatorsRoyaltyPercent), gemsRoyaltyNum: decodeFromJSONField("u64", field.gemsRoyaltyNum), gemsRoyaltyDenom: decodeFromJSONField("u64", field.gemsRoyaltyDenom), gemsTreasuryPercent: decodeFromJSONField("u64", field.gemsTreasuryPercent), gemsBurnPercent: decodeFromJSONField("u64", field.gemsBurnPercent) } ) }

 static fromJSON( json: Record<string, any> ): KraftRoyaltyUpdated { if (json.$typeName !== KraftRoyaltyUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return KraftRoyaltyUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): KraftRoyaltyUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isKraftRoyaltyUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a KraftRoyaltyUpdated object`); } return KraftRoyaltyUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<KraftRoyaltyUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching KraftRoyaltyUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isKraftRoyaltyUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a KraftRoyaltyUpdated object`); }
 return KraftRoyaltyUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== KraftYieldHarvested =============================== */

export function isKraftYieldHarvested(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::KraftYieldHarvested"; }

export interface KraftYieldHarvestedFields { suiYield: ToField<"u64">; receiver: ToField<"address"> }

export type KraftYieldHarvestedReified = Reified< KraftYieldHarvested, KraftYieldHarvestedFields >;

export class KraftYieldHarvested implements StructClass { static readonly $typeName = "0x0::hive_profile::KraftYieldHarvested"; static readonly $numTypeParams = 0;

 readonly $typeName = KraftYieldHarvested.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::KraftYieldHarvested";

 readonly $typeArgs: [];

 readonly suiYield: ToField<"u64">; readonly receiver: ToField<"address">

 private constructor(typeArgs: [], fields: KraftYieldHarvestedFields, ) { this.$fullTypeName = composeSuiType( KraftYieldHarvested.$typeName, ...typeArgs ) as "0x0::hive_profile::KraftYieldHarvested"; this.$typeArgs = typeArgs;

 this.suiYield = fields.suiYield;; this.receiver = fields.receiver; }

 static reified( ): KraftYieldHarvestedReified { return { typeName: KraftYieldHarvested.$typeName, fullTypeName: composeSuiType( KraftYieldHarvested.$typeName, ...[] ) as "0x0::hive_profile::KraftYieldHarvested", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => KraftYieldHarvested.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => KraftYieldHarvested.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => KraftYieldHarvested.fromBcs( data, ), bcs: KraftYieldHarvested.bcs, fromJSONField: (field: any) => KraftYieldHarvested.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => KraftYieldHarvested.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => KraftYieldHarvested.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => KraftYieldHarvested.fetch( client, id, ), new: ( fields: KraftYieldHarvestedFields, ) => { return new KraftYieldHarvested( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return KraftYieldHarvested.reified() }

 static phantom( ): PhantomReified<ToTypeStr<KraftYieldHarvested>> { return phantom(KraftYieldHarvested.reified( )); } static get p() { return KraftYieldHarvested.phantom() }

 static get bcs() { return bcs.struct("KraftYieldHarvested", {

 sui_yield: bcs.u64(), receiver: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): KraftYieldHarvested { return KraftYieldHarvested.reified( ).new( { suiYield: decodeFromFields("u64", fields.sui_yield), receiver: decodeFromFields("address", fields.receiver) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): KraftYieldHarvested { if (!isKraftYieldHarvested(item.type)) { throw new Error("not a KraftYieldHarvested type");

 }

 return KraftYieldHarvested.reified( ).new( { suiYield: decodeFromFieldsWithTypes("u64", item.fields.sui_yield), receiver: decodeFromFieldsWithTypes("address", item.fields.receiver) } ) }

 static fromBcs( data: Uint8Array ): KraftYieldHarvested { return KraftYieldHarvested.fromFields( KraftYieldHarvested.bcs.parse(data) ) }

 toJSONField() { return {

 suiYield: this.suiYield.toString(),receiver: this.receiver,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): KraftYieldHarvested { return KraftYieldHarvested.reified( ).new( { suiYield: decodeFromJSONField("u64", field.suiYield), receiver: decodeFromJSONField("address", field.receiver) } ) }

 static fromJSON( json: Record<string, any> ): KraftYieldHarvested { if (json.$typeName !== KraftYieldHarvested.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return KraftYieldHarvested.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): KraftYieldHarvested { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isKraftYieldHarvested(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a KraftYieldHarvested object`); } return KraftYieldHarvested.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<KraftYieldHarvested> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching KraftYieldHarvested object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isKraftYieldHarvested(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a KraftYieldHarvested object`); }
 return KraftYieldHarvested.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== LendRecord =============================== */

export function isLendRecord(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::LendRecord"; }

export interface LendRecordFields { borrower: ToField<"address">; version: ToField<"u64">; lendPriceSui: ToField<"u64">; startSec: ToField<"u64">; lockupDuration: ToField<"u8">; expirationSec: ToField<"u64"> }

export type LendRecordReified = Reified< LendRecord, LendRecordFields >;

export class LendRecord implements StructClass { static readonly $typeName = "0x0::hive_profile::LendRecord"; static readonly $numTypeParams = 0;

 readonly $typeName = LendRecord.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::LendRecord";

 readonly $typeArgs: [];

 readonly borrower: ToField<"address">; readonly version: ToField<"u64">; readonly lendPriceSui: ToField<"u64">; readonly startSec: ToField<"u64">; readonly lockupDuration: ToField<"u8">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: LendRecordFields, ) { this.$fullTypeName = composeSuiType( LendRecord.$typeName, ...typeArgs ) as "0x0::hive_profile::LendRecord"; this.$typeArgs = typeArgs;

 this.borrower = fields.borrower;; this.version = fields.version;; this.lendPriceSui = fields.lendPriceSui;; this.startSec = fields.startSec;; this.lockupDuration = fields.lockupDuration;; this.expirationSec = fields.expirationSec; }

 static reified( ): LendRecordReified { return { typeName: LendRecord.$typeName, fullTypeName: composeSuiType( LendRecord.$typeName, ...[] ) as "0x0::hive_profile::LendRecord", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LendRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LendRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LendRecord.fromBcs( data, ), bcs: LendRecord.bcs, fromJSONField: (field: any) => LendRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LendRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LendRecord.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => LendRecord.fetch( client, id, ), new: ( fields: LendRecordFields, ) => { return new LendRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LendRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LendRecord>> { return phantom(LendRecord.reified( )); } static get p() { return LendRecord.phantom() }

 static get bcs() { return bcs.struct("LendRecord", {

 borrower: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), lend_price_sui: bcs.u64(), start_sec: bcs.u64(), lockup_duration: bcs.u8(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): LendRecord { return LendRecord.reified( ).new( { borrower: decodeFromFields("address", fields.borrower), version: decodeFromFields("u64", fields.version), lendPriceSui: decodeFromFields("u64", fields.lend_price_sui), startSec: decodeFromFields("u64", fields.start_sec), lockupDuration: decodeFromFields("u8", fields.lockup_duration), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LendRecord { if (!isLendRecord(item.type)) { throw new Error("not a LendRecord type");

 }

 return LendRecord.reified( ).new( { borrower: decodeFromFieldsWithTypes("address", item.fields.borrower), version: decodeFromFieldsWithTypes("u64", item.fields.version), lendPriceSui: decodeFromFieldsWithTypes("u64", item.fields.lend_price_sui), startSec: decodeFromFieldsWithTypes("u64", item.fields.start_sec), lockupDuration: decodeFromFieldsWithTypes("u8", item.fields.lockup_duration), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): LendRecord { return LendRecord.fromFields( LendRecord.bcs.parse(data) ) }

 toJSONField() { return {

 borrower: this.borrower,version: this.version.toString(),lendPriceSui: this.lendPriceSui.toString(),startSec: this.startSec.toString(),lockupDuration: this.lockupDuration,expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LendRecord { return LendRecord.reified( ).new( { borrower: decodeFromJSONField("address", field.borrower), version: decodeFromJSONField("u64", field.version), lendPriceSui: decodeFromJSONField("u64", field.lendPriceSui), startSec: decodeFromJSONField("u64", field.startSec), lockupDuration: decodeFromJSONField("u8", field.lockupDuration), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): LendRecord { if (json.$typeName !== LendRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LendRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LendRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLendRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LendRecord object`); } return LendRecord.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<LendRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LendRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLendRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LendRecord object`); }
 return LendRecord.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Listing =============================== */

export function isListing(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::Listing"; }

export interface ListingFields { listedByProfile: ToField<"address">; hiveAsset: ToField<HiveAsset>; listingAccess: ToField<"u8">; discountAccess: ToField<"u8">; discount: ToField<"u64">; minSuiPrice: ToField<"u64">; isSaleListing: ToField<"bool">; instantSale: ToField<"bool">; highestBidSale: ToField<"bool">; lockupDuration: ToField<"u8">; startSec: ToField<"u64">; expirationSec: ToField<"u64"> }

export type ListingReified = Reified< Listing, ListingFields >;

export class Listing implements StructClass { static readonly $typeName = "0x0::hive_profile::Listing"; static readonly $numTypeParams = 0;

 readonly $typeName = Listing.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::Listing";

 readonly $typeArgs: [];

 readonly listedByProfile: ToField<"address">; readonly hiveAsset: ToField<HiveAsset>; readonly listingAccess: ToField<"u8">; readonly discountAccess: ToField<"u8">; readonly discount: ToField<"u64">; readonly minSuiPrice: ToField<"u64">; readonly isSaleListing: ToField<"bool">; readonly instantSale: ToField<"bool">; readonly highestBidSale: ToField<"bool">; readonly lockupDuration: ToField<"u8">; readonly startSec: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: ListingFields, ) { this.$fullTypeName = composeSuiType( Listing.$typeName, ...typeArgs ) as "0x0::hive_profile::Listing"; this.$typeArgs = typeArgs;

 this.listedByProfile = fields.listedByProfile;; this.hiveAsset = fields.hiveAsset;; this.listingAccess = fields.listingAccess;; this.discountAccess = fields.discountAccess;; this.discount = fields.discount;; this.minSuiPrice = fields.minSuiPrice;; this.isSaleListing = fields.isSaleListing;; this.instantSale = fields.instantSale;; this.highestBidSale = fields.highestBidSale;; this.lockupDuration = fields.lockupDuration;; this.startSec = fields.startSec;; this.expirationSec = fields.expirationSec; }

 static reified( ): ListingReified { return { typeName: Listing.$typeName, fullTypeName: composeSuiType( Listing.$typeName, ...[] ) as "0x0::hive_profile::Listing", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Listing.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Listing.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Listing.fromBcs( data, ), bcs: Listing.bcs, fromJSONField: (field: any) => Listing.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Listing.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Listing.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Listing.fetch( client, id, ), new: ( fields: ListingFields, ) => { return new Listing( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Listing.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Listing>> { return phantom(Listing.reified( )); } static get p() { return Listing.phantom() }

 static get bcs() { return bcs.struct("Listing", {

 listed_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), hive_asset: HiveAsset.bcs, listing_access: bcs.u8(), discount_access: bcs.u8(), discount: bcs.u64(), min_sui_price: bcs.u64(), is_sale_listing: bcs.bool(), instant_sale: bcs.bool(), highest_bid_sale: bcs.bool(), lockup_duration: bcs.u8(), start_sec: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Listing { return Listing.reified( ).new( { listedByProfile: decodeFromFields("address", fields.listed_by_profile), hiveAsset: decodeFromFields(HiveAsset.reified(), fields.hive_asset), listingAccess: decodeFromFields("u8", fields.listing_access), discountAccess: decodeFromFields("u8", fields.discount_access), discount: decodeFromFields("u64", fields.discount), minSuiPrice: decodeFromFields("u64", fields.min_sui_price), isSaleListing: decodeFromFields("bool", fields.is_sale_listing), instantSale: decodeFromFields("bool", fields.instant_sale), highestBidSale: decodeFromFields("bool", fields.highest_bid_sale), lockupDuration: decodeFromFields("u8", fields.lockup_duration), startSec: decodeFromFields("u64", fields.start_sec), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Listing { if (!isListing(item.type)) { throw new Error("not a Listing type");

 }

 return Listing.reified( ).new( { listedByProfile: decodeFromFieldsWithTypes("address", item.fields.listed_by_profile), hiveAsset: decodeFromFieldsWithTypes(HiveAsset.reified(), item.fields.hive_asset), listingAccess: decodeFromFieldsWithTypes("u8", item.fields.listing_access), discountAccess: decodeFromFieldsWithTypes("u8", item.fields.discount_access), discount: decodeFromFieldsWithTypes("u64", item.fields.discount), minSuiPrice: decodeFromFieldsWithTypes("u64", item.fields.min_sui_price), isSaleListing: decodeFromFieldsWithTypes("bool", item.fields.is_sale_listing), instantSale: decodeFromFieldsWithTypes("bool", item.fields.instant_sale), highestBidSale: decodeFromFieldsWithTypes("bool", item.fields.highest_bid_sale), lockupDuration: decodeFromFieldsWithTypes("u8", item.fields.lockup_duration), startSec: decodeFromFieldsWithTypes("u64", item.fields.start_sec), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): Listing { return Listing.fromFields( Listing.bcs.parse(data) ) }

 toJSONField() { return {

 listedByProfile: this.listedByProfile,hiveAsset: this.hiveAsset.toJSONField(),listingAccess: this.listingAccess,discountAccess: this.discountAccess,discount: this.discount.toString(),minSuiPrice: this.minSuiPrice.toString(),isSaleListing: this.isSaleListing,instantSale: this.instantSale,highestBidSale: this.highestBidSale,lockupDuration: this.lockupDuration,startSec: this.startSec.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Listing { return Listing.reified( ).new( { listedByProfile: decodeFromJSONField("address", field.listedByProfile), hiveAsset: decodeFromJSONField(HiveAsset.reified(), field.hiveAsset), listingAccess: decodeFromJSONField("u8", field.listingAccess), discountAccess: decodeFromJSONField("u8", field.discountAccess), discount: decodeFromJSONField("u64", field.discount), minSuiPrice: decodeFromJSONField("u64", field.minSuiPrice), isSaleListing: decodeFromJSONField("bool", field.isSaleListing), instantSale: decodeFromJSONField("bool", field.instantSale), highestBidSale: decodeFromJSONField("bool", field.highestBidSale), lockupDuration: decodeFromJSONField("u8", field.lockupDuration), startSec: decodeFromJSONField("u64", field.startSec), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): Listing { if (json.$typeName !== Listing.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Listing.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Listing { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListing(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Listing object`); } return Listing.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Listing> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Listing object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListing(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Listing object`); }
 return Listing.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ListingCanceled =============================== */

export function isListingCanceled(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ListingCanceled"; }

export interface ListingCanceledFields { listedByProfile: ToField<"address">; version: ToField<"u64"> }

export type ListingCanceledReified = Reified< ListingCanceled, ListingCanceledFields >;

export class ListingCanceled implements StructClass { static readonly $typeName = "0x0::hive_profile::ListingCanceled"; static readonly $numTypeParams = 0;

 readonly $typeName = ListingCanceled.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ListingCanceled";

 readonly $typeArgs: [];

 readonly listedByProfile: ToField<"address">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: ListingCanceledFields, ) { this.$fullTypeName = composeSuiType( ListingCanceled.$typeName, ...typeArgs ) as "0x0::hive_profile::ListingCanceled"; this.$typeArgs = typeArgs;

 this.listedByProfile = fields.listedByProfile;; this.version = fields.version; }

 static reified( ): ListingCanceledReified { return { typeName: ListingCanceled.$typeName, fullTypeName: composeSuiType( ListingCanceled.$typeName, ...[] ) as "0x0::hive_profile::ListingCanceled", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListingCanceled.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListingCanceled.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListingCanceled.fromBcs( data, ), bcs: ListingCanceled.bcs, fromJSONField: (field: any) => ListingCanceled.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListingCanceled.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListingCanceled.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ListingCanceled.fetch( client, id, ), new: ( fields: ListingCanceledFields, ) => { return new ListingCanceled( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListingCanceled.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListingCanceled>> { return phantom(ListingCanceled.reified( )); } static get p() { return ListingCanceled.phantom() }

 static get bcs() { return bcs.struct("ListingCanceled", {

 listed_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ListingCanceled { return ListingCanceled.reified( ).new( { listedByProfile: decodeFromFields("address", fields.listed_by_profile), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListingCanceled { if (!isListingCanceled(item.type)) { throw new Error("not a ListingCanceled type");

 }

 return ListingCanceled.reified( ).new( { listedByProfile: decodeFromFieldsWithTypes("address", item.fields.listed_by_profile), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): ListingCanceled { return ListingCanceled.fromFields( ListingCanceled.bcs.parse(data) ) }

 toJSONField() { return {

 listedByProfile: this.listedByProfile,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListingCanceled { return ListingCanceled.reified( ).new( { listedByProfile: decodeFromJSONField("address", field.listedByProfile), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): ListingCanceled { if (json.$typeName !== ListingCanceled.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListingCanceled.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListingCanceled { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListingCanceled(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListingCanceled object`); } return ListingCanceled.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListingCanceled> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListingCanceled object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListingCanceled(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListingCanceled object`); }
 return ListingCanceled.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ListingDestroyed =============================== */

export function isListingDestroyed(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ListingDestroyed"; }

export interface ListingDestroyedFields { version: ToField<"u64">; listedByProfile: ToField<"address"> }

export type ListingDestroyedReified = Reified< ListingDestroyed, ListingDestroyedFields >;

export class ListingDestroyed implements StructClass { static readonly $typeName = "0x0::hive_profile::ListingDestroyed"; static readonly $numTypeParams = 0;

 readonly $typeName = ListingDestroyed.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ListingDestroyed";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly listedByProfile: ToField<"address">

 private constructor(typeArgs: [], fields: ListingDestroyedFields, ) { this.$fullTypeName = composeSuiType( ListingDestroyed.$typeName, ...typeArgs ) as "0x0::hive_profile::ListingDestroyed"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.listedByProfile = fields.listedByProfile; }

 static reified( ): ListingDestroyedReified { return { typeName: ListingDestroyed.$typeName, fullTypeName: composeSuiType( ListingDestroyed.$typeName, ...[] ) as "0x0::hive_profile::ListingDestroyed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListingDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListingDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListingDestroyed.fromBcs( data, ), bcs: ListingDestroyed.bcs, fromJSONField: (field: any) => ListingDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListingDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListingDestroyed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ListingDestroyed.fetch( client, id, ), new: ( fields: ListingDestroyedFields, ) => { return new ListingDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListingDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListingDestroyed>> { return phantom(ListingDestroyed.reified( )); } static get p() { return ListingDestroyed.phantom() }

 static get bcs() { return bcs.struct("ListingDestroyed", {

 version: bcs.u64(), listed_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): ListingDestroyed { return ListingDestroyed.reified( ).new( { version: decodeFromFields("u64", fields.version), listedByProfile: decodeFromFields("address", fields.listed_by_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListingDestroyed { if (!isListingDestroyed(item.type)) { throw new Error("not a ListingDestroyed type");

 }

 return ListingDestroyed.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), listedByProfile: decodeFromFieldsWithTypes("address", item.fields.listed_by_profile) } ) }

 static fromBcs( data: Uint8Array ): ListingDestroyed { return ListingDestroyed.fromFields( ListingDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),listedByProfile: this.listedByProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListingDestroyed { return ListingDestroyed.reified( ).new( { version: decodeFromJSONField("u64", field.version), listedByProfile: decodeFromJSONField("address", field.listedByProfile) } ) }

 static fromJSON( json: Record<string, any> ): ListingDestroyed { if (json.$typeName !== ListingDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListingDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListingDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListingDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListingDestroyed object`); } return ListingDestroyed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListingDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListingDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListingDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListingDestroyed object`); }
 return ListingDestroyed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ListingExpired =============================== */

export function isListingExpired(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ListingExpired"; }

export interface ListingExpiredFields { listedByProfile: ToField<"address">; version: ToField<"u64"> }

export type ListingExpiredReified = Reified< ListingExpired, ListingExpiredFields >;

export class ListingExpired implements StructClass { static readonly $typeName = "0x0::hive_profile::ListingExpired"; static readonly $numTypeParams = 0;

 readonly $typeName = ListingExpired.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ListingExpired";

 readonly $typeArgs: [];

 readonly listedByProfile: ToField<"address">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: ListingExpiredFields, ) { this.$fullTypeName = composeSuiType( ListingExpired.$typeName, ...typeArgs ) as "0x0::hive_profile::ListingExpired"; this.$typeArgs = typeArgs;

 this.listedByProfile = fields.listedByProfile;; this.version = fields.version; }

 static reified( ): ListingExpiredReified { return { typeName: ListingExpired.$typeName, fullTypeName: composeSuiType( ListingExpired.$typeName, ...[] ) as "0x0::hive_profile::ListingExpired", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListingExpired.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListingExpired.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListingExpired.fromBcs( data, ), bcs: ListingExpired.bcs, fromJSONField: (field: any) => ListingExpired.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListingExpired.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListingExpired.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ListingExpired.fetch( client, id, ), new: ( fields: ListingExpiredFields, ) => { return new ListingExpired( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListingExpired.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListingExpired>> { return phantom(ListingExpired.reified( )); } static get p() { return ListingExpired.phantom() }

 static get bcs() { return bcs.struct("ListingExpired", {

 listed_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ListingExpired { return ListingExpired.reified( ).new( { listedByProfile: decodeFromFields("address", fields.listed_by_profile), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListingExpired { if (!isListingExpired(item.type)) { throw new Error("not a ListingExpired type");

 }

 return ListingExpired.reified( ).new( { listedByProfile: decodeFromFieldsWithTypes("address", item.fields.listed_by_profile), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): ListingExpired { return ListingExpired.fromFields( ListingExpired.bcs.parse(data) ) }

 toJSONField() { return {

 listedByProfile: this.listedByProfile,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListingExpired { return ListingExpired.reified( ).new( { listedByProfile: decodeFromJSONField("address", field.listedByProfile), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): ListingExpired { if (json.$typeName !== ListingExpired.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListingExpired.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListingExpired { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListingExpired(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListingExpired object`); } return ListingExpired.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListingExpired> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListingExpired object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListingExpired(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListingExpired object`); }
 return ListingExpired.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ListingRecord =============================== */

export function isListingRecord(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ListingRecord"; }

export interface ListingRecordFields { version: ToField<"u64">; listingAccess: ToField<"u8">; discountAccess: ToField<"u8">; discount: ToField<"u64">; minSuiPrice: ToField<"u64">; isSaleListing: ToField<"bool">; instantSale: ToField<"bool">; highestBidSale: ToField<"bool">; lockupDuration: ToField<"u8">; startSec: ToField<"u64">; expirationSec: ToField<"u64"> }

export type ListingRecordReified = Reified< ListingRecord, ListingRecordFields >;

export class ListingRecord implements StructClass { static readonly $typeName = "0x0::hive_profile::ListingRecord"; static readonly $numTypeParams = 0;

 readonly $typeName = ListingRecord.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ListingRecord";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly listingAccess: ToField<"u8">; readonly discountAccess: ToField<"u8">; readonly discount: ToField<"u64">; readonly minSuiPrice: ToField<"u64">; readonly isSaleListing: ToField<"bool">; readonly instantSale: ToField<"bool">; readonly highestBidSale: ToField<"bool">; readonly lockupDuration: ToField<"u8">; readonly startSec: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: ListingRecordFields, ) { this.$fullTypeName = composeSuiType( ListingRecord.$typeName, ...typeArgs ) as "0x0::hive_profile::ListingRecord"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.listingAccess = fields.listingAccess;; this.discountAccess = fields.discountAccess;; this.discount = fields.discount;; this.minSuiPrice = fields.minSuiPrice;; this.isSaleListing = fields.isSaleListing;; this.instantSale = fields.instantSale;; this.highestBidSale = fields.highestBidSale;; this.lockupDuration = fields.lockupDuration;; this.startSec = fields.startSec;; this.expirationSec = fields.expirationSec; }

 static reified( ): ListingRecordReified { return { typeName: ListingRecord.$typeName, fullTypeName: composeSuiType( ListingRecord.$typeName, ...[] ) as "0x0::hive_profile::ListingRecord", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListingRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListingRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListingRecord.fromBcs( data, ), bcs: ListingRecord.bcs, fromJSONField: (field: any) => ListingRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListingRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListingRecord.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ListingRecord.fetch( client, id, ), new: ( fields: ListingRecordFields, ) => { return new ListingRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListingRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListingRecord>> { return phantom(ListingRecord.reified( )); } static get p() { return ListingRecord.phantom() }

 static get bcs() { return bcs.struct("ListingRecord", {

 version: bcs.u64(), listing_access: bcs.u8(), discount_access: bcs.u8(), discount: bcs.u64(), min_sui_price: bcs.u64(), is_sale_listing: bcs.bool(), instant_sale: bcs.bool(), highest_bid_sale: bcs.bool(), lockup_duration: bcs.u8(), start_sec: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ListingRecord { return ListingRecord.reified( ).new( { version: decodeFromFields("u64", fields.version), listingAccess: decodeFromFields("u8", fields.listing_access), discountAccess: decodeFromFields("u8", fields.discount_access), discount: decodeFromFields("u64", fields.discount), minSuiPrice: decodeFromFields("u64", fields.min_sui_price), isSaleListing: decodeFromFields("bool", fields.is_sale_listing), instantSale: decodeFromFields("bool", fields.instant_sale), highestBidSale: decodeFromFields("bool", fields.highest_bid_sale), lockupDuration: decodeFromFields("u8", fields.lockup_duration), startSec: decodeFromFields("u64", fields.start_sec), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListingRecord { if (!isListingRecord(item.type)) { throw new Error("not a ListingRecord type");

 }

 return ListingRecord.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), listingAccess: decodeFromFieldsWithTypes("u8", item.fields.listing_access), discountAccess: decodeFromFieldsWithTypes("u8", item.fields.discount_access), discount: decodeFromFieldsWithTypes("u64", item.fields.discount), minSuiPrice: decodeFromFieldsWithTypes("u64", item.fields.min_sui_price), isSaleListing: decodeFromFieldsWithTypes("bool", item.fields.is_sale_listing), instantSale: decodeFromFieldsWithTypes("bool", item.fields.instant_sale), highestBidSale: decodeFromFieldsWithTypes("bool", item.fields.highest_bid_sale), lockupDuration: decodeFromFieldsWithTypes("u8", item.fields.lockup_duration), startSec: decodeFromFieldsWithTypes("u64", item.fields.start_sec), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): ListingRecord { return ListingRecord.fromFields( ListingRecord.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),listingAccess: this.listingAccess,discountAccess: this.discountAccess,discount: this.discount.toString(),minSuiPrice: this.minSuiPrice.toString(),isSaleListing: this.isSaleListing,instantSale: this.instantSale,highestBidSale: this.highestBidSale,lockupDuration: this.lockupDuration,startSec: this.startSec.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListingRecord { return ListingRecord.reified( ).new( { version: decodeFromJSONField("u64", field.version), listingAccess: decodeFromJSONField("u8", field.listingAccess), discountAccess: decodeFromJSONField("u8", field.discountAccess), discount: decodeFromJSONField("u64", field.discount), minSuiPrice: decodeFromJSONField("u64", field.minSuiPrice), isSaleListing: decodeFromJSONField("bool", field.isSaleListing), instantSale: decodeFromJSONField("bool", field.instantSale), highestBidSale: decodeFromJSONField("bool", field.highestBidSale), lockupDuration: decodeFromJSONField("u8", field.lockupDuration), startSec: decodeFromJSONField("u64", field.startSec), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): ListingRecord { if (json.$typeName !== ListingRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListingRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListingRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListingRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListingRecord object`); } return ListingRecord.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListingRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListingRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListingRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListingRecord object`); }
 return ListingRecord.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ListingUpdated =============================== */

export function isListingUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ListingUpdated"; }

export interface ListingUpdatedFields { listedByProfile: ToField<"address">; version: ToField<"u64">; minSuiPrice: ToField<"u64">; lockupDuration: ToField<"u8">; startSec: ToField<"u64">; expirationSec: ToField<"u64"> }

export type ListingUpdatedReified = Reified< ListingUpdated, ListingUpdatedFields >;

export class ListingUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::ListingUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = ListingUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ListingUpdated";

 readonly $typeArgs: [];

 readonly listedByProfile: ToField<"address">; readonly version: ToField<"u64">; readonly minSuiPrice: ToField<"u64">; readonly lockupDuration: ToField<"u8">; readonly startSec: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: ListingUpdatedFields, ) { this.$fullTypeName = composeSuiType( ListingUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::ListingUpdated"; this.$typeArgs = typeArgs;

 this.listedByProfile = fields.listedByProfile;; this.version = fields.version;; this.minSuiPrice = fields.minSuiPrice;; this.lockupDuration = fields.lockupDuration;; this.startSec = fields.startSec;; this.expirationSec = fields.expirationSec; }

 static reified( ): ListingUpdatedReified { return { typeName: ListingUpdated.$typeName, fullTypeName: composeSuiType( ListingUpdated.$typeName, ...[] ) as "0x0::hive_profile::ListingUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListingUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListingUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListingUpdated.fromBcs( data, ), bcs: ListingUpdated.bcs, fromJSONField: (field: any) => ListingUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListingUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListingUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ListingUpdated.fetch( client, id, ), new: ( fields: ListingUpdatedFields, ) => { return new ListingUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListingUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListingUpdated>> { return phantom(ListingUpdated.reified( )); } static get p() { return ListingUpdated.phantom() }

 static get bcs() { return bcs.struct("ListingUpdated", {

 listed_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), min_sui_price: bcs.u64(), lockup_duration: bcs.u8(), start_sec: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ListingUpdated { return ListingUpdated.reified( ).new( { listedByProfile: decodeFromFields("address", fields.listed_by_profile), version: decodeFromFields("u64", fields.version), minSuiPrice: decodeFromFields("u64", fields.min_sui_price), lockupDuration: decodeFromFields("u8", fields.lockup_duration), startSec: decodeFromFields("u64", fields.start_sec), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListingUpdated { if (!isListingUpdated(item.type)) { throw new Error("not a ListingUpdated type");

 }

 return ListingUpdated.reified( ).new( { listedByProfile: decodeFromFieldsWithTypes("address", item.fields.listed_by_profile), version: decodeFromFieldsWithTypes("u64", item.fields.version), minSuiPrice: decodeFromFieldsWithTypes("u64", item.fields.min_sui_price), lockupDuration: decodeFromFieldsWithTypes("u8", item.fields.lockup_duration), startSec: decodeFromFieldsWithTypes("u64", item.fields.start_sec), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): ListingUpdated { return ListingUpdated.fromFields( ListingUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 listedByProfile: this.listedByProfile,version: this.version.toString(),minSuiPrice: this.minSuiPrice.toString(),lockupDuration: this.lockupDuration,startSec: this.startSec.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListingUpdated { return ListingUpdated.reified( ).new( { listedByProfile: decodeFromJSONField("address", field.listedByProfile), version: decodeFromJSONField("u64", field.version), minSuiPrice: decodeFromJSONField("u64", field.minSuiPrice), lockupDuration: decodeFromJSONField("u8", field.lockupDuration), startSec: decodeFromJSONField("u64", field.startSec), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): ListingUpdated { if (json.$typeName !== ListingUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListingUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListingUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListingUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListingUpdated object`); } return ListingUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListingUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListingUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListingUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListingUpdated object`); }
 return ListingUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ManagerAppAccessCapability =============================== */

export function isManagerAppAccessCapability(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ManagerAppAccessCapability"; }

export interface ManagerAppAccessCapabilityFields { id: ToField<UID>; appName: ToField<String1> }

export type ManagerAppAccessCapabilityReified = Reified< ManagerAppAccessCapability, ManagerAppAccessCapabilityFields >;

export class ManagerAppAccessCapability implements StructClass { static readonly $typeName = "0x0::hive_profile::ManagerAppAccessCapability"; static readonly $numTypeParams = 0;

 readonly $typeName = ManagerAppAccessCapability.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ManagerAppAccessCapability";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly appName: ToField<String1>

 private constructor(typeArgs: [], fields: ManagerAppAccessCapabilityFields, ) { this.$fullTypeName = composeSuiType( ManagerAppAccessCapability.$typeName, ...typeArgs ) as "0x0::hive_profile::ManagerAppAccessCapability"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.appName = fields.appName; }

 static reified( ): ManagerAppAccessCapabilityReified { return { typeName: ManagerAppAccessCapability.$typeName, fullTypeName: composeSuiType( ManagerAppAccessCapability.$typeName, ...[] ) as "0x0::hive_profile::ManagerAppAccessCapability", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ManagerAppAccessCapability.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ManagerAppAccessCapability.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ManagerAppAccessCapability.fromBcs( data, ), bcs: ManagerAppAccessCapability.bcs, fromJSONField: (field: any) => ManagerAppAccessCapability.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ManagerAppAccessCapability.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ManagerAppAccessCapability.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ManagerAppAccessCapability.fetch( client, id, ), new: ( fields: ManagerAppAccessCapabilityFields, ) => { return new ManagerAppAccessCapability( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ManagerAppAccessCapability.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ManagerAppAccessCapability>> { return phantom(ManagerAppAccessCapability.reified( )); } static get p() { return ManagerAppAccessCapability.phantom() }

 static get bcs() { return bcs.struct("ManagerAppAccessCapability", {

 id: UID.bcs, app_name: String1.bcs

}) };

 static fromFields( fields: Record<string, any> ): ManagerAppAccessCapability { return ManagerAppAccessCapability.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), appName: decodeFromFields(String1.reified(), fields.app_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ManagerAppAccessCapability { if (!isManagerAppAccessCapability(item.type)) { throw new Error("not a ManagerAppAccessCapability type");

 }

 return ManagerAppAccessCapability.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), appName: decodeFromFieldsWithTypes(String1.reified(), item.fields.app_name) } ) }

 static fromBcs( data: Uint8Array ): ManagerAppAccessCapability { return ManagerAppAccessCapability.fromFields( ManagerAppAccessCapability.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,appName: this.appName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ManagerAppAccessCapability { return ManagerAppAccessCapability.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), appName: decodeFromJSONField(String1.reified(), field.appName) } ) }

 static fromJSON( json: Record<string, any> ): ManagerAppAccessCapability { if (json.$typeName !== ManagerAppAccessCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ManagerAppAccessCapability.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ManagerAppAccessCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isManagerAppAccessCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ManagerAppAccessCapability object`); } return ManagerAppAccessCapability.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ManagerAppAccessCapability> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ManagerAppAccessCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isManagerAppAccessCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ManagerAppAccessCapability object`); }
 return ManagerAppAccessCapability.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== MarketPlace =============================== */

export function isMarketPlace(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x0::hive_profile::MarketPlace<"); }

export interface MarketPlaceFields<X extends PhantomTypeArgument> { id: ToField<UID>; activeListings: ToField<LinkedTable<"u64", ToPhantom<Listing>>>; availableBids: ToField<LinkedTable<"u64", ToPhantom<Vector<Bid<X>>>>>; processedListings: ToField<LinkedTable<"u64", ToPhantom<ExecutedListing<X>>>>; moduleVersion: ToField<"u64"> }

export type MarketPlaceReified<X extends PhantomTypeArgument> = Reified< MarketPlace<X>, MarketPlaceFields<X> >;

export class MarketPlace<X extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x0::hive_profile::MarketPlace"; static readonly $numTypeParams = 1;

 readonly $typeName = MarketPlace.$typeName;

 readonly $fullTypeName: `0x0::hive_profile::MarketPlace<${PhantomToTypeStr<X>}>`;

 readonly $typeArgs: [PhantomToTypeStr<X>];

 readonly id: ToField<UID>; readonly activeListings: ToField<LinkedTable<"u64", ToPhantom<Listing>>>; readonly availableBids: ToField<LinkedTable<"u64", ToPhantom<Vector<Bid<X>>>>>; readonly processedListings: ToField<LinkedTable<"u64", ToPhantom<ExecutedListing<X>>>>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: MarketPlaceFields<X>, ) { this.$fullTypeName = composeSuiType( MarketPlace.$typeName, ...typeArgs ) as `0x0::hive_profile::MarketPlace<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.activeListings = fields.activeListings;; this.availableBids = fields.availableBids;; this.processedListings = fields.processedListings;; this.moduleVersion = fields.moduleVersion; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): MarketPlaceReified<ToPhantomTypeArgument<X>> { return { typeName: MarketPlace.$typeName, fullTypeName: composeSuiType( MarketPlace.$typeName, ...[extractType(X)] ) as `0x0::hive_profile::MarketPlace<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => MarketPlace.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MarketPlace.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => MarketPlace.fromBcs( X, data, ), bcs: MarketPlace.bcs, fromJSONField: (field: any) => MarketPlace.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => MarketPlace.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => MarketPlace.fromSuiParsedData( X, content, ), fetch: async (client: SuiClient, id: string) => MarketPlace.fetch( client, X, id, ), new: ( fields: MarketPlaceFields<ToPhantomTypeArgument<X>>, ) => { return new MarketPlace( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return MarketPlace.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<MarketPlace<ToPhantomTypeArgument<X>>>> { return phantom(MarketPlace.reified( X )); } static get p() { return MarketPlace.phantom }

 static get bcs() { return bcs.struct("MarketPlace", {

 id: UID.bcs, active_listings: LinkedTable.bcs(bcs.u64()), available_bids: LinkedTable.bcs(bcs.u64()), processed_listings: LinkedTable.bcs(bcs.u64()), module_version: bcs.u64()

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): MarketPlace<ToPhantomTypeArgument<X>> { return MarketPlace.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), activeListings: decodeFromFields(LinkedTable.reified("u64", reified.phantom(Listing.reified())), fields.active_listings), availableBids: decodeFromFields(LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(typeArg)))), fields.available_bids), processedListings: decodeFromFields(LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified(typeArg))), fields.processed_listings), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): MarketPlace<ToPhantomTypeArgument<X>> { if (!isMarketPlace(item.type)) { throw new Error("not a MarketPlace type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return MarketPlace.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), activeListings: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(Listing.reified())), item.fields.active_listings), availableBids: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(typeArg)))), item.fields.available_bids), processedListings: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified(typeArg))), item.fields.processed_listings), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): MarketPlace<ToPhantomTypeArgument<X>> { return MarketPlace.fromFields( typeArg, MarketPlace.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,activeListings: this.activeListings.toJSONField(),availableBids: this.availableBids.toJSONField(),processedListings: this.processedListings.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): MarketPlace<ToPhantomTypeArgument<X>> { return MarketPlace.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), activeListings: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(Listing.reified())), field.activeListings), availableBids: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(reified.vector(Bid.reified(typeArg)))), field.availableBids), processedListings: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(ExecutedListing.reified(typeArg))), field.processedListings), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): MarketPlace<ToPhantomTypeArgument<X>> { if (json.$typeName !== MarketPlace.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(MarketPlace.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return MarketPlace.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): MarketPlace<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMarketPlace(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MarketPlace object`); } return MarketPlace.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<MarketPlace<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MarketPlace object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMarketPlace(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MarketPlace object`); }
 return MarketPlace.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewHiveAssetKrafted =============================== */

export function isNewHiveAssetKrafted(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::NewHiveAssetKrafted"; }

export interface NewHiveAssetKraftedFields { id: ToField<ID>; krafterProfileAddr: ToField<"address">; krafter: ToField<"address">; collectionName: ToField<String>; name: ToField<String>; version: ToField<"u64">; imgUrl: ToField<String>; genesisHivegems: ToField<"u64">; power: ToField<"u64">; price: ToField<"u64">; traitsList: ToField<Vector<String>>; promptsList: ToField<Vector<String>> }

export type NewHiveAssetKraftedReified = Reified< NewHiveAssetKrafted, NewHiveAssetKraftedFields >;

export class NewHiveAssetKrafted implements StructClass { static readonly $typeName = "0x0::hive_profile::NewHiveAssetKrafted"; static readonly $numTypeParams = 0;

 readonly $typeName = NewHiveAssetKrafted.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::NewHiveAssetKrafted";

 readonly $typeArgs: [];

 readonly id: ToField<ID>; readonly krafterProfileAddr: ToField<"address">; readonly krafter: ToField<"address">; readonly collectionName: ToField<String>; readonly name: ToField<String>; readonly version: ToField<"u64">; readonly imgUrl: ToField<String>; readonly genesisHivegems: ToField<"u64">; readonly power: ToField<"u64">; readonly price: ToField<"u64">; readonly traitsList: ToField<Vector<String>>; readonly promptsList: ToField<Vector<String>>

 private constructor(typeArgs: [], fields: NewHiveAssetKraftedFields, ) { this.$fullTypeName = composeSuiType( NewHiveAssetKrafted.$typeName, ...typeArgs ) as "0x0::hive_profile::NewHiveAssetKrafted"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.krafterProfileAddr = fields.krafterProfileAddr;; this.krafter = fields.krafter;; this.collectionName = fields.collectionName;; this.name = fields.name;; this.version = fields.version;; this.imgUrl = fields.imgUrl;; this.genesisHivegems = fields.genesisHivegems;; this.power = fields.power;; this.price = fields.price;; this.traitsList = fields.traitsList;; this.promptsList = fields.promptsList; }

 static reified( ): NewHiveAssetKraftedReified { return { typeName: NewHiveAssetKrafted.$typeName, fullTypeName: composeSuiType( NewHiveAssetKrafted.$typeName, ...[] ) as "0x0::hive_profile::NewHiveAssetKrafted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewHiveAssetKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewHiveAssetKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewHiveAssetKrafted.fromBcs( data, ), bcs: NewHiveAssetKrafted.bcs, fromJSONField: (field: any) => NewHiveAssetKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewHiveAssetKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewHiveAssetKrafted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewHiveAssetKrafted.fetch( client, id, ), new: ( fields: NewHiveAssetKraftedFields, ) => { return new NewHiveAssetKrafted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewHiveAssetKrafted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewHiveAssetKrafted>> { return phantom(NewHiveAssetKrafted.reified( )); } static get p() { return NewHiveAssetKrafted.phantom() }

 static get bcs() { return bcs.struct("NewHiveAssetKrafted", {

 id: ID.bcs, krafter_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), krafter: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), collection_name: String.bcs, name: String.bcs, version: bcs.u64(), img_url: String.bcs, genesis_hivegems: bcs.u64(), power: bcs.u64(), price: bcs.u64(), traits_list: bcs.vector(String.bcs), prompts_list: bcs.vector(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): NewHiveAssetKrafted { return NewHiveAssetKrafted.reified( ).new( { id: decodeFromFields(ID.reified(), fields.id), krafterProfileAddr: decodeFromFields("address", fields.krafter_profile_addr), krafter: decodeFromFields("address", fields.krafter), collectionName: decodeFromFields(String.reified(), fields.collection_name), name: decodeFromFields(String.reified(), fields.name), version: decodeFromFields("u64", fields.version), imgUrl: decodeFromFields(String.reified(), fields.img_url), genesisHivegems: decodeFromFields("u64", fields.genesis_hivegems), power: decodeFromFields("u64", fields.power), price: decodeFromFields("u64", fields.price), traitsList: decodeFromFields(reified.vector(String.reified()), fields.traits_list), promptsList: decodeFromFields(reified.vector(String.reified()), fields.prompts_list) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewHiveAssetKrafted { if (!isNewHiveAssetKrafted(item.type)) { throw new Error("not a NewHiveAssetKrafted type");

 }

 return NewHiveAssetKrafted.reified( ).new( { id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), krafterProfileAddr: decodeFromFieldsWithTypes("address", item.fields.krafter_profile_addr), krafter: decodeFromFieldsWithTypes("address", item.fields.krafter), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), version: decodeFromFieldsWithTypes("u64", item.fields.version), imgUrl: decodeFromFieldsWithTypes(String.reified(), item.fields.img_url), genesisHivegems: decodeFromFieldsWithTypes("u64", item.fields.genesis_hivegems), power: decodeFromFieldsWithTypes("u64", item.fields.power), price: decodeFromFieldsWithTypes("u64", item.fields.price), traitsList: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.traits_list), promptsList: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.prompts_list) } ) }

 static fromBcs( data: Uint8Array ): NewHiveAssetKrafted { return NewHiveAssetKrafted.fromFields( NewHiveAssetKrafted.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,krafterProfileAddr: this.krafterProfileAddr,krafter: this.krafter,collectionName: this.collectionName,name: this.name,version: this.version.toString(),imgUrl: this.imgUrl,genesisHivegems: this.genesisHivegems.toString(),power: this.power.toString(),price: this.price.toString(),traitsList: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.traitsList),promptsList: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.promptsList),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewHiveAssetKrafted { return NewHiveAssetKrafted.reified( ).new( { id: decodeFromJSONField(ID.reified(), field.id), krafterProfileAddr: decodeFromJSONField("address", field.krafterProfileAddr), krafter: decodeFromJSONField("address", field.krafter), collectionName: decodeFromJSONField(String.reified(), field.collectionName), name: decodeFromJSONField(String.reified(), field.name), version: decodeFromJSONField("u64", field.version), imgUrl: decodeFromJSONField(String.reified(), field.imgUrl), genesisHivegems: decodeFromJSONField("u64", field.genesisHivegems), power: decodeFromJSONField("u64", field.power), price: decodeFromJSONField("u64", field.price), traitsList: decodeFromJSONField(reified.vector(String.reified()), field.traitsList), promptsList: decodeFromJSONField(reified.vector(String.reified()), field.promptsList) } ) }

 static fromJSON( json: Record<string, any> ): NewHiveAssetKrafted { if (json.$typeName !== NewHiveAssetKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewHiveAssetKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewHiveAssetKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewHiveAssetKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewHiveAssetKrafted object`); } return NewHiveAssetKrafted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewHiveAssetKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewHiveAssetKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewHiveAssetKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewHiveAssetKrafted object`); }
 return NewHiveAssetKrafted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewListing =============================== */

export function isNewListing(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::NewListing"; }

export interface NewListingFields { listedByProfile: ToField<"address">; listingAccess: ToField<"u8">; discountAccess: ToField<"u8">; discount: ToField<"u64">; version: ToField<"u64">; minSuiPrice: ToField<"u64">; isSaleListing: ToField<"bool">; instantSale: ToField<"bool">; highestBidSale: ToField<"bool">; lockupDuration: ToField<"u8">; startSec: ToField<"u64">; expirationSec: ToField<"u64"> }

export type NewListingReified = Reified< NewListing, NewListingFields >;

export class NewListing implements StructClass { static readonly $typeName = "0x0::hive_profile::NewListing"; static readonly $numTypeParams = 0;

 readonly $typeName = NewListing.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::NewListing";

 readonly $typeArgs: [];

 readonly listedByProfile: ToField<"address">; readonly listingAccess: ToField<"u8">; readonly discountAccess: ToField<"u8">; readonly discount: ToField<"u64">; readonly version: ToField<"u64">; readonly minSuiPrice: ToField<"u64">; readonly isSaleListing: ToField<"bool">; readonly instantSale: ToField<"bool">; readonly highestBidSale: ToField<"bool">; readonly lockupDuration: ToField<"u8">; readonly startSec: ToField<"u64">; readonly expirationSec: ToField<"u64">

 private constructor(typeArgs: [], fields: NewListingFields, ) { this.$fullTypeName = composeSuiType( NewListing.$typeName, ...typeArgs ) as "0x0::hive_profile::NewListing"; this.$typeArgs = typeArgs;

 this.listedByProfile = fields.listedByProfile;; this.listingAccess = fields.listingAccess;; this.discountAccess = fields.discountAccess;; this.discount = fields.discount;; this.version = fields.version;; this.minSuiPrice = fields.minSuiPrice;; this.isSaleListing = fields.isSaleListing;; this.instantSale = fields.instantSale;; this.highestBidSale = fields.highestBidSale;; this.lockupDuration = fields.lockupDuration;; this.startSec = fields.startSec;; this.expirationSec = fields.expirationSec; }

 static reified( ): NewListingReified { return { typeName: NewListing.$typeName, fullTypeName: composeSuiType( NewListing.$typeName, ...[] ) as "0x0::hive_profile::NewListing", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewListing.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewListing.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewListing.fromBcs( data, ), bcs: NewListing.bcs, fromJSONField: (field: any) => NewListing.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewListing.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewListing.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewListing.fetch( client, id, ), new: ( fields: NewListingFields, ) => { return new NewListing( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewListing.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewListing>> { return phantom(NewListing.reified( )); } static get p() { return NewListing.phantom() }

 static get bcs() { return bcs.struct("NewListing", {

 listed_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), listing_access: bcs.u8(), discount_access: bcs.u8(), discount: bcs.u64(), version: bcs.u64(), min_sui_price: bcs.u64(), is_sale_listing: bcs.bool(), instant_sale: bcs.bool(), highest_bid_sale: bcs.bool(), lockup_duration: bcs.u8(), start_sec: bcs.u64(), expiration_sec: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): NewListing { return NewListing.reified( ).new( { listedByProfile: decodeFromFields("address", fields.listed_by_profile), listingAccess: decodeFromFields("u8", fields.listing_access), discountAccess: decodeFromFields("u8", fields.discount_access), discount: decodeFromFields("u64", fields.discount), version: decodeFromFields("u64", fields.version), minSuiPrice: decodeFromFields("u64", fields.min_sui_price), isSaleListing: decodeFromFields("bool", fields.is_sale_listing), instantSale: decodeFromFields("bool", fields.instant_sale), highestBidSale: decodeFromFields("bool", fields.highest_bid_sale), lockupDuration: decodeFromFields("u8", fields.lockup_duration), startSec: decodeFromFields("u64", fields.start_sec), expirationSec: decodeFromFields("u64", fields.expiration_sec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewListing { if (!isNewListing(item.type)) { throw new Error("not a NewListing type");

 }

 return NewListing.reified( ).new( { listedByProfile: decodeFromFieldsWithTypes("address", item.fields.listed_by_profile), listingAccess: decodeFromFieldsWithTypes("u8", item.fields.listing_access), discountAccess: decodeFromFieldsWithTypes("u8", item.fields.discount_access), discount: decodeFromFieldsWithTypes("u64", item.fields.discount), version: decodeFromFieldsWithTypes("u64", item.fields.version), minSuiPrice: decodeFromFieldsWithTypes("u64", item.fields.min_sui_price), isSaleListing: decodeFromFieldsWithTypes("bool", item.fields.is_sale_listing), instantSale: decodeFromFieldsWithTypes("bool", item.fields.instant_sale), highestBidSale: decodeFromFieldsWithTypes("bool", item.fields.highest_bid_sale), lockupDuration: decodeFromFieldsWithTypes("u8", item.fields.lockup_duration), startSec: decodeFromFieldsWithTypes("u64", item.fields.start_sec), expirationSec: decodeFromFieldsWithTypes("u64", item.fields.expiration_sec) } ) }

 static fromBcs( data: Uint8Array ): NewListing { return NewListing.fromFields( NewListing.bcs.parse(data) ) }

 toJSONField() { return {

 listedByProfile: this.listedByProfile,listingAccess: this.listingAccess,discountAccess: this.discountAccess,discount: this.discount.toString(),version: this.version.toString(),minSuiPrice: this.minSuiPrice.toString(),isSaleListing: this.isSaleListing,instantSale: this.instantSale,highestBidSale: this.highestBidSale,lockupDuration: this.lockupDuration,startSec: this.startSec.toString(),expirationSec: this.expirationSec.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewListing { return NewListing.reified( ).new( { listedByProfile: decodeFromJSONField("address", field.listedByProfile), listingAccess: decodeFromJSONField("u8", field.listingAccess), discountAccess: decodeFromJSONField("u8", field.discountAccess), discount: decodeFromJSONField("u64", field.discount), version: decodeFromJSONField("u64", field.version), minSuiPrice: decodeFromJSONField("u64", field.minSuiPrice), isSaleListing: decodeFromJSONField("bool", field.isSaleListing), instantSale: decodeFromJSONField("bool", field.instantSale), highestBidSale: decodeFromJSONField("bool", field.highestBidSale), lockupDuration: decodeFromJSONField("u8", field.lockupDuration), startSec: decodeFromJSONField("u64", field.startSec), expirationSec: decodeFromJSONField("u64", field.expirationSec) } ) }

 static fromJSON( json: Record<string, any> ): NewListing { if (json.$typeName !== NewListing.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewListing.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewListing { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewListing(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewListing object`); } return NewListing.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewListing> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewListing object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewListing(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewListing object`); }
 return NewListing.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewSkinForAsset =============================== */

export function isNewSkinForAsset(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::NewSkinForAsset"; }

export interface NewSkinForAssetFields { version: ToField<"u64">; skinType: ToField<String>; kraftAccess: ToField<"u8">; discount: ToField<"u64">; royaltyFeePercent: ToField<"u64"> }

export type NewSkinForAssetReified = Reified< NewSkinForAsset, NewSkinForAssetFields >;

export class NewSkinForAsset implements StructClass { static readonly $typeName = "0x0::hive_profile::NewSkinForAsset"; static readonly $numTypeParams = 0;

 readonly $typeName = NewSkinForAsset.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::NewSkinForAsset";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly skinType: ToField<String>; readonly kraftAccess: ToField<"u8">; readonly discount: ToField<"u64">; readonly royaltyFeePercent: ToField<"u64">

 private constructor(typeArgs: [], fields: NewSkinForAssetFields, ) { this.$fullTypeName = composeSuiType( NewSkinForAsset.$typeName, ...typeArgs ) as "0x0::hive_profile::NewSkinForAsset"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.skinType = fields.skinType;; this.kraftAccess = fields.kraftAccess;; this.discount = fields.discount;; this.royaltyFeePercent = fields.royaltyFeePercent; }

 static reified( ): NewSkinForAssetReified { return { typeName: NewSkinForAsset.$typeName, fullTypeName: composeSuiType( NewSkinForAsset.$typeName, ...[] ) as "0x0::hive_profile::NewSkinForAsset", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewSkinForAsset.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewSkinForAsset.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewSkinForAsset.fromBcs( data, ), bcs: NewSkinForAsset.bcs, fromJSONField: (field: any) => NewSkinForAsset.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewSkinForAsset.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewSkinForAsset.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewSkinForAsset.fetch( client, id, ), new: ( fields: NewSkinForAssetFields, ) => { return new NewSkinForAsset( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewSkinForAsset.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewSkinForAsset>> { return phantom(NewSkinForAsset.reified( )); } static get p() { return NewSkinForAsset.phantom() }

 static get bcs() { return bcs.struct("NewSkinForAsset", {

 version: bcs.u64(), skin_type: String.bcs, kraft_access: bcs.u8(), discount: bcs.u64(), royalty_fee_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): NewSkinForAsset { return NewSkinForAsset.reified( ).new( { version: decodeFromFields("u64", fields.version), skinType: decodeFromFields(String.reified(), fields.skin_type), kraftAccess: decodeFromFields("u8", fields.kraft_access), discount: decodeFromFields("u64", fields.discount), royaltyFeePercent: decodeFromFields("u64", fields.royalty_fee_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewSkinForAsset { if (!isNewSkinForAsset(item.type)) { throw new Error("not a NewSkinForAsset type");

 }

 return NewSkinForAsset.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), skinType: decodeFromFieldsWithTypes(String.reified(), item.fields.skin_type), kraftAccess: decodeFromFieldsWithTypes("u8", item.fields.kraft_access), discount: decodeFromFieldsWithTypes("u64", item.fields.discount), royaltyFeePercent: decodeFromFieldsWithTypes("u64", item.fields.royalty_fee_percent) } ) }

 static fromBcs( data: Uint8Array ): NewSkinForAsset { return NewSkinForAsset.fromFields( NewSkinForAsset.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),skinType: this.skinType,kraftAccess: this.kraftAccess,discount: this.discount.toString(),royaltyFeePercent: this.royaltyFeePercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewSkinForAsset { return NewSkinForAsset.reified( ).new( { version: decodeFromJSONField("u64", field.version), skinType: decodeFromJSONField(String.reified(), field.skinType), kraftAccess: decodeFromJSONField("u8", field.kraftAccess), discount: decodeFromJSONField("u64", field.discount), royaltyFeePercent: decodeFromJSONField("u64", field.royaltyFeePercent) } ) }

 static fromJSON( json: Record<string, any> ): NewSkinForAsset { if (json.$typeName !== NewSkinForAsset.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewSkinForAsset.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewSkinForAsset { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewSkinForAsset(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewSkinForAsset object`); } return NewSkinForAsset.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewSkinForAsset> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewSkinForAsset object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewSkinForAsset(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewSkinForAsset object`); }
 return NewSkinForAsset.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewSkinForAssetKrafted =============================== */

export function isNewSkinForAssetKrafted(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::NewSkinForAssetKrafted"; }

export interface NewSkinForAssetKraftedFields { kraftedByProfile: ToField<"address">; krafterUsername: ToField<String1>; ownerProfile: ToField<"address">; ownerUsername: ToField<String1>; version: ToField<"u64">; skinType: ToField<String>; actualSkinPrice: ToField<"u64">; royaltyEarnedByOwner: ToField<"u64">; skinsKraftedForTypeByAsset: ToField<"u64">; totalRoyaltyAmt: ToField<"u64">; treasuryAmt: ToField<"u64">; gemsBurnt: ToField<"u64"> }

export type NewSkinForAssetKraftedReified = Reified< NewSkinForAssetKrafted, NewSkinForAssetKraftedFields >;

export class NewSkinForAssetKrafted implements StructClass { static readonly $typeName = "0x0::hive_profile::NewSkinForAssetKrafted"; static readonly $numTypeParams = 0;

 readonly $typeName = NewSkinForAssetKrafted.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::NewSkinForAssetKrafted";

 readonly $typeArgs: [];

 readonly kraftedByProfile: ToField<"address">; readonly krafterUsername: ToField<String1>; readonly ownerProfile: ToField<"address">; readonly ownerUsername: ToField<String1>; readonly version: ToField<"u64">; readonly skinType: ToField<String>; readonly actualSkinPrice: ToField<"u64">; readonly royaltyEarnedByOwner: ToField<"u64">; readonly skinsKraftedForTypeByAsset: ToField<"u64">; readonly totalRoyaltyAmt: ToField<"u64">; readonly treasuryAmt: ToField<"u64">; readonly gemsBurnt: ToField<"u64">

 private constructor(typeArgs: [], fields: NewSkinForAssetKraftedFields, ) { this.$fullTypeName = composeSuiType( NewSkinForAssetKrafted.$typeName, ...typeArgs ) as "0x0::hive_profile::NewSkinForAssetKrafted"; this.$typeArgs = typeArgs;

 this.kraftedByProfile = fields.kraftedByProfile;; this.krafterUsername = fields.krafterUsername;; this.ownerProfile = fields.ownerProfile;; this.ownerUsername = fields.ownerUsername;; this.version = fields.version;; this.skinType = fields.skinType;; this.actualSkinPrice = fields.actualSkinPrice;; this.royaltyEarnedByOwner = fields.royaltyEarnedByOwner;; this.skinsKraftedForTypeByAsset = fields.skinsKraftedForTypeByAsset;; this.totalRoyaltyAmt = fields.totalRoyaltyAmt;; this.treasuryAmt = fields.treasuryAmt;; this.gemsBurnt = fields.gemsBurnt; }

 static reified( ): NewSkinForAssetKraftedReified { return { typeName: NewSkinForAssetKrafted.$typeName, fullTypeName: composeSuiType( NewSkinForAssetKrafted.$typeName, ...[] ) as "0x0::hive_profile::NewSkinForAssetKrafted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewSkinForAssetKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewSkinForAssetKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewSkinForAssetKrafted.fromBcs( data, ), bcs: NewSkinForAssetKrafted.bcs, fromJSONField: (field: any) => NewSkinForAssetKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewSkinForAssetKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewSkinForAssetKrafted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewSkinForAssetKrafted.fetch( client, id, ), new: ( fields: NewSkinForAssetKraftedFields, ) => { return new NewSkinForAssetKrafted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewSkinForAssetKrafted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewSkinForAssetKrafted>> { return phantom(NewSkinForAssetKrafted.reified( )); } static get p() { return NewSkinForAssetKrafted.phantom() }

 static get bcs() { return bcs.struct("NewSkinForAssetKrafted", {

 krafted_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), krafter_username: String1.bcs, owner_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), owner_username: String1.bcs, version: bcs.u64(), skin_type: String.bcs, actual_skin_price: bcs.u64(), royalty_earned_by_owner: bcs.u64(), skins_krafted_for_type_by_asset: bcs.u64(), total_royalty_amt: bcs.u64(), treasury_amt: bcs.u64(), gems_burnt: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): NewSkinForAssetKrafted { return NewSkinForAssetKrafted.reified( ).new( { kraftedByProfile: decodeFromFields("address", fields.krafted_by_profile), krafterUsername: decodeFromFields(String1.reified(), fields.krafter_username), ownerProfile: decodeFromFields("address", fields.owner_profile), ownerUsername: decodeFromFields(String1.reified(), fields.owner_username), version: decodeFromFields("u64", fields.version), skinType: decodeFromFields(String.reified(), fields.skin_type), actualSkinPrice: decodeFromFields("u64", fields.actual_skin_price), royaltyEarnedByOwner: decodeFromFields("u64", fields.royalty_earned_by_owner), skinsKraftedForTypeByAsset: decodeFromFields("u64", fields.skins_krafted_for_type_by_asset), totalRoyaltyAmt: decodeFromFields("u64", fields.total_royalty_amt), treasuryAmt: decodeFromFields("u64", fields.treasury_amt), gemsBurnt: decodeFromFields("u64", fields.gems_burnt) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewSkinForAssetKrafted { if (!isNewSkinForAssetKrafted(item.type)) { throw new Error("not a NewSkinForAssetKrafted type");

 }

 return NewSkinForAssetKrafted.reified( ).new( { kraftedByProfile: decodeFromFieldsWithTypes("address", item.fields.krafted_by_profile), krafterUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.krafter_username), ownerProfile: decodeFromFieldsWithTypes("address", item.fields.owner_profile), ownerUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.owner_username), version: decodeFromFieldsWithTypes("u64", item.fields.version), skinType: decodeFromFieldsWithTypes(String.reified(), item.fields.skin_type), actualSkinPrice: decodeFromFieldsWithTypes("u64", item.fields.actual_skin_price), royaltyEarnedByOwner: decodeFromFieldsWithTypes("u64", item.fields.royalty_earned_by_owner), skinsKraftedForTypeByAsset: decodeFromFieldsWithTypes("u64", item.fields.skins_krafted_for_type_by_asset), totalRoyaltyAmt: decodeFromFieldsWithTypes("u64", item.fields.total_royalty_amt), treasuryAmt: decodeFromFieldsWithTypes("u64", item.fields.treasury_amt), gemsBurnt: decodeFromFieldsWithTypes("u64", item.fields.gems_burnt) } ) }

 static fromBcs( data: Uint8Array ): NewSkinForAssetKrafted { return NewSkinForAssetKrafted.fromFields( NewSkinForAssetKrafted.bcs.parse(data) ) }

 toJSONField() { return {

 kraftedByProfile: this.kraftedByProfile,krafterUsername: this.krafterUsername,ownerProfile: this.ownerProfile,ownerUsername: this.ownerUsername,version: this.version.toString(),skinType: this.skinType,actualSkinPrice: this.actualSkinPrice.toString(),royaltyEarnedByOwner: this.royaltyEarnedByOwner.toString(),skinsKraftedForTypeByAsset: this.skinsKraftedForTypeByAsset.toString(),totalRoyaltyAmt: this.totalRoyaltyAmt.toString(),treasuryAmt: this.treasuryAmt.toString(),gemsBurnt: this.gemsBurnt.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewSkinForAssetKrafted { return NewSkinForAssetKrafted.reified( ).new( { kraftedByProfile: decodeFromJSONField("address", field.kraftedByProfile), krafterUsername: decodeFromJSONField(String1.reified(), field.krafterUsername), ownerProfile: decodeFromJSONField("address", field.ownerProfile), ownerUsername: decodeFromJSONField(String1.reified(), field.ownerUsername), version: decodeFromJSONField("u64", field.version), skinType: decodeFromJSONField(String.reified(), field.skinType), actualSkinPrice: decodeFromJSONField("u64", field.actualSkinPrice), royaltyEarnedByOwner: decodeFromJSONField("u64", field.royaltyEarnedByOwner), skinsKraftedForTypeByAsset: decodeFromJSONField("u64", field.skinsKraftedForTypeByAsset), totalRoyaltyAmt: decodeFromJSONField("u64", field.totalRoyaltyAmt), treasuryAmt: decodeFromJSONField("u64", field.treasuryAmt), gemsBurnt: decodeFromJSONField("u64", field.gemsBurnt) } ) }

 static fromJSON( json: Record<string, any> ): NewSkinForAssetKrafted { if (json.$typeName !== NewSkinForAssetKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewSkinForAssetKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewSkinForAssetKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewSkinForAssetKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewSkinForAssetKrafted object`); } return NewSkinForAssetKrafted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewSkinForAssetKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewSkinForAssetKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewSkinForAssetKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewSkinForAssetKrafted object`); }
 return NewSkinForAssetKrafted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PricingAndAccessSetInHiveKiosk =============================== */

export function isPricingAndAccessSetInHiveKiosk(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::PricingAndAccessSetInHiveKiosk"; }

export interface PricingAndAccessSetInHiveKioskFields { creatorProfile: ToField<"address">; collectionName: ToField<String>; basePrice: ToField<"u64">; curveA: ToField<"u64">; kraftAccess: ToField<"u8">; discountAccess: ToField<"u8">; discount: ToField<"u64"> }

export type PricingAndAccessSetInHiveKioskReified = Reified< PricingAndAccessSetInHiveKiosk, PricingAndAccessSetInHiveKioskFields >;

export class PricingAndAccessSetInHiveKiosk implements StructClass { static readonly $typeName = "0x0::hive_profile::PricingAndAccessSetInHiveKiosk"; static readonly $numTypeParams = 0;

 readonly $typeName = PricingAndAccessSetInHiveKiosk.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::PricingAndAccessSetInHiveKiosk";

 readonly $typeArgs: [];

 readonly creatorProfile: ToField<"address">; readonly collectionName: ToField<String>; readonly basePrice: ToField<"u64">; readonly curveA: ToField<"u64">; readonly kraftAccess: ToField<"u8">; readonly discountAccess: ToField<"u8">; readonly discount: ToField<"u64">

 private constructor(typeArgs: [], fields: PricingAndAccessSetInHiveKioskFields, ) { this.$fullTypeName = composeSuiType( PricingAndAccessSetInHiveKiosk.$typeName, ...typeArgs ) as "0x0::hive_profile::PricingAndAccessSetInHiveKiosk"; this.$typeArgs = typeArgs;

 this.creatorProfile = fields.creatorProfile;; this.collectionName = fields.collectionName;; this.basePrice = fields.basePrice;; this.curveA = fields.curveA;; this.kraftAccess = fields.kraftAccess;; this.discountAccess = fields.discountAccess;; this.discount = fields.discount; }

 static reified( ): PricingAndAccessSetInHiveKioskReified { return { typeName: PricingAndAccessSetInHiveKiosk.$typeName, fullTypeName: composeSuiType( PricingAndAccessSetInHiveKiosk.$typeName, ...[] ) as "0x0::hive_profile::PricingAndAccessSetInHiveKiosk", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PricingAndAccessSetInHiveKiosk.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PricingAndAccessSetInHiveKiosk.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PricingAndAccessSetInHiveKiosk.fromBcs( data, ), bcs: PricingAndAccessSetInHiveKiosk.bcs, fromJSONField: (field: any) => PricingAndAccessSetInHiveKiosk.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PricingAndAccessSetInHiveKiosk.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PricingAndAccessSetInHiveKiosk.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PricingAndAccessSetInHiveKiosk.fetch( client, id, ), new: ( fields: PricingAndAccessSetInHiveKioskFields, ) => { return new PricingAndAccessSetInHiveKiosk( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PricingAndAccessSetInHiveKiosk.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PricingAndAccessSetInHiveKiosk>> { return phantom(PricingAndAccessSetInHiveKiosk.reified( )); } static get p() { return PricingAndAccessSetInHiveKiosk.phantom() }

 static get bcs() { return bcs.struct("PricingAndAccessSetInHiveKiosk", {

 creator_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), collection_name: String.bcs, base_price: bcs.u64(), curve_a: bcs.u64(), kraft_access: bcs.u8(), discount_access: bcs.u8(), discount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PricingAndAccessSetInHiveKiosk { return PricingAndAccessSetInHiveKiosk.reified( ).new( { creatorProfile: decodeFromFields("address", fields.creator_profile), collectionName: decodeFromFields(String.reified(), fields.collection_name), basePrice: decodeFromFields("u64", fields.base_price), curveA: decodeFromFields("u64", fields.curve_a), kraftAccess: decodeFromFields("u8", fields.kraft_access), discountAccess: decodeFromFields("u8", fields.discount_access), discount: decodeFromFields("u64", fields.discount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PricingAndAccessSetInHiveKiosk { if (!isPricingAndAccessSetInHiveKiosk(item.type)) { throw new Error("not a PricingAndAccessSetInHiveKiosk type");

 }

 return PricingAndAccessSetInHiveKiosk.reified( ).new( { creatorProfile: decodeFromFieldsWithTypes("address", item.fields.creator_profile), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), basePrice: decodeFromFieldsWithTypes("u64", item.fields.base_price), curveA: decodeFromFieldsWithTypes("u64", item.fields.curve_a), kraftAccess: decodeFromFieldsWithTypes("u8", item.fields.kraft_access), discountAccess: decodeFromFieldsWithTypes("u8", item.fields.discount_access), discount: decodeFromFieldsWithTypes("u64", item.fields.discount) } ) }

 static fromBcs( data: Uint8Array ): PricingAndAccessSetInHiveKiosk { return PricingAndAccessSetInHiveKiosk.fromFields( PricingAndAccessSetInHiveKiosk.bcs.parse(data) ) }

 toJSONField() { return {

 creatorProfile: this.creatorProfile,collectionName: this.collectionName,basePrice: this.basePrice.toString(),curveA: this.curveA.toString(),kraftAccess: this.kraftAccess,discountAccess: this.discountAccess,discount: this.discount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PricingAndAccessSetInHiveKiosk { return PricingAndAccessSetInHiveKiosk.reified( ).new( { creatorProfile: decodeFromJSONField("address", field.creatorProfile), collectionName: decodeFromJSONField(String.reified(), field.collectionName), basePrice: decodeFromJSONField("u64", field.basePrice), curveA: decodeFromJSONField("u64", field.curveA), kraftAccess: decodeFromJSONField("u8", field.kraftAccess), discountAccess: decodeFromJSONField("u8", field.discountAccess), discount: decodeFromJSONField("u64", field.discount) } ) }

 static fromJSON( json: Record<string, any> ): PricingAndAccessSetInHiveKiosk { if (json.$typeName !== PricingAndAccessSetInHiveKiosk.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PricingAndAccessSetInHiveKiosk.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PricingAndAccessSetInHiveKiosk { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPricingAndAccessSetInHiveKiosk(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PricingAndAccessSetInHiveKiosk object`); } return PricingAndAccessSetInHiveKiosk.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PricingAndAccessSetInHiveKiosk> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PricingAndAccessSetInHiveKiosk object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPricingAndAccessSetInHiveKiosk(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PricingAndAccessSetInHiveKiosk object`); }
 return PricingAndAccessSetInHiveKiosk.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ProfileConfigParamsUpdated =============================== */

export function isProfileConfigParamsUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ProfileConfigParamsUpdated"; }

export interface ProfileConfigParamsUpdatedFields { maxBidsPerAsset: ToField<"u64">; minSuiBidAllowed: ToField<"u64">; profileKraftFeesSui: ToField<"u64">; socialFeeGems: ToField<"u64">; socialMultiplierForGems: ToField<"u64">; socialMultiplierForPower: ToField<"u64"> }

export type ProfileConfigParamsUpdatedReified = Reified< ProfileConfigParamsUpdated, ProfileConfigParamsUpdatedFields >;

export class ProfileConfigParamsUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::ProfileConfigParamsUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = ProfileConfigParamsUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ProfileConfigParamsUpdated";

 readonly $typeArgs: [];

 readonly maxBidsPerAsset: ToField<"u64">; readonly minSuiBidAllowed: ToField<"u64">; readonly profileKraftFeesSui: ToField<"u64">; readonly socialFeeGems: ToField<"u64">; readonly socialMultiplierForGems: ToField<"u64">; readonly socialMultiplierForPower: ToField<"u64">

 private constructor(typeArgs: [], fields: ProfileConfigParamsUpdatedFields, ) { this.$fullTypeName = composeSuiType( ProfileConfigParamsUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::ProfileConfigParamsUpdated"; this.$typeArgs = typeArgs;

 this.maxBidsPerAsset = fields.maxBidsPerAsset;; this.minSuiBidAllowed = fields.minSuiBidAllowed;; this.profileKraftFeesSui = fields.profileKraftFeesSui;; this.socialFeeGems = fields.socialFeeGems;; this.socialMultiplierForGems = fields.socialMultiplierForGems;; this.socialMultiplierForPower = fields.socialMultiplierForPower; }

 static reified( ): ProfileConfigParamsUpdatedReified { return { typeName: ProfileConfigParamsUpdated.$typeName, fullTypeName: composeSuiType( ProfileConfigParamsUpdated.$typeName, ...[] ) as "0x0::hive_profile::ProfileConfigParamsUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ProfileConfigParamsUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProfileConfigParamsUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ProfileConfigParamsUpdated.fromBcs( data, ), bcs: ProfileConfigParamsUpdated.bcs, fromJSONField: (field: any) => ProfileConfigParamsUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ProfileConfigParamsUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ProfileConfigParamsUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ProfileConfigParamsUpdated.fetch( client, id, ), new: ( fields: ProfileConfigParamsUpdatedFields, ) => { return new ProfileConfigParamsUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ProfileConfigParamsUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ProfileConfigParamsUpdated>> { return phantom(ProfileConfigParamsUpdated.reified( )); } static get p() { return ProfileConfigParamsUpdated.phantom() }

 static get bcs() { return bcs.struct("ProfileConfigParamsUpdated", {

 max_bids_per_asset: bcs.u64(), min_sui_bid_allowed: bcs.u64(), profile_kraft_fees_sui: bcs.u64(), social_fee_gems: bcs.u64(), social_multiplier_for_gems: bcs.u64(), social_multiplier_for_power: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ProfileConfigParamsUpdated { return ProfileConfigParamsUpdated.reified( ).new( { maxBidsPerAsset: decodeFromFields("u64", fields.max_bids_per_asset), minSuiBidAllowed: decodeFromFields("u64", fields.min_sui_bid_allowed), profileKraftFeesSui: decodeFromFields("u64", fields.profile_kraft_fees_sui), socialFeeGems: decodeFromFields("u64", fields.social_fee_gems), socialMultiplierForGems: decodeFromFields("u64", fields.social_multiplier_for_gems), socialMultiplierForPower: decodeFromFields("u64", fields.social_multiplier_for_power) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ProfileConfigParamsUpdated { if (!isProfileConfigParamsUpdated(item.type)) { throw new Error("not a ProfileConfigParamsUpdated type");

 }

 return ProfileConfigParamsUpdated.reified( ).new( { maxBidsPerAsset: decodeFromFieldsWithTypes("u64", item.fields.max_bids_per_asset), minSuiBidAllowed: decodeFromFieldsWithTypes("u64", item.fields.min_sui_bid_allowed), profileKraftFeesSui: decodeFromFieldsWithTypes("u64", item.fields.profile_kraft_fees_sui), socialFeeGems: decodeFromFieldsWithTypes("u64", item.fields.social_fee_gems), socialMultiplierForGems: decodeFromFieldsWithTypes("u64", item.fields.social_multiplier_for_gems), socialMultiplierForPower: decodeFromFieldsWithTypes("u64", item.fields.social_multiplier_for_power) } ) }

 static fromBcs( data: Uint8Array ): ProfileConfigParamsUpdated { return ProfileConfigParamsUpdated.fromFields( ProfileConfigParamsUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 maxBidsPerAsset: this.maxBidsPerAsset.toString(),minSuiBidAllowed: this.minSuiBidAllowed.toString(),profileKraftFeesSui: this.profileKraftFeesSui.toString(),socialFeeGems: this.socialFeeGems.toString(),socialMultiplierForGems: this.socialMultiplierForGems.toString(),socialMultiplierForPower: this.socialMultiplierForPower.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ProfileConfigParamsUpdated { return ProfileConfigParamsUpdated.reified( ).new( { maxBidsPerAsset: decodeFromJSONField("u64", field.maxBidsPerAsset), minSuiBidAllowed: decodeFromJSONField("u64", field.minSuiBidAllowed), profileKraftFeesSui: decodeFromJSONField("u64", field.profileKraftFeesSui), socialFeeGems: decodeFromJSONField("u64", field.socialFeeGems), socialMultiplierForGems: decodeFromJSONField("u64", field.socialMultiplierForGems), socialMultiplierForPower: decodeFromJSONField("u64", field.socialMultiplierForPower) } ) }

 static fromJSON( json: Record<string, any> ): ProfileConfigParamsUpdated { if (json.$typeName !== ProfileConfigParamsUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ProfileConfigParamsUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ProfileConfigParamsUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProfileConfigParamsUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ProfileConfigParamsUpdated object`); } return ProfileConfigParamsUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ProfileConfigParamsUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProfileConfigParamsUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProfileConfigParamsUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProfileConfigParamsUpdated object`); }
 return ProfileConfigParamsUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PublicKraftConfig =============================== */

export function isPublicKraftConfig(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::PublicKraftConfig"; }

export interface PublicKraftConfigFields { id: ToField<UID>; startTime: ToField<"u64">; perUserLimit: ToField<"u64">; kraftsProcessed: ToField<"u64">; addressList: ToField<LinkedTable<"address", "u64">> }

export type PublicKraftConfigReified = Reified< PublicKraftConfig, PublicKraftConfigFields >;

export class PublicKraftConfig implements StructClass { static readonly $typeName = "0x0::hive_profile::PublicKraftConfig"; static readonly $numTypeParams = 0;

 readonly $typeName = PublicKraftConfig.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::PublicKraftConfig";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly startTime: ToField<"u64">; readonly perUserLimit: ToField<"u64">; readonly kraftsProcessed: ToField<"u64">; readonly addressList: ToField<LinkedTable<"address", "u64">>

 private constructor(typeArgs: [], fields: PublicKraftConfigFields, ) { this.$fullTypeName = composeSuiType( PublicKraftConfig.$typeName, ...typeArgs ) as "0x0::hive_profile::PublicKraftConfig"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.startTime = fields.startTime;; this.perUserLimit = fields.perUserLimit;; this.kraftsProcessed = fields.kraftsProcessed;; this.addressList = fields.addressList; }

 static reified( ): PublicKraftConfigReified { return { typeName: PublicKraftConfig.$typeName, fullTypeName: composeSuiType( PublicKraftConfig.$typeName, ...[] ) as "0x0::hive_profile::PublicKraftConfig", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PublicKraftConfig.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PublicKraftConfig.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PublicKraftConfig.fromBcs( data, ), bcs: PublicKraftConfig.bcs, fromJSONField: (field: any) => PublicKraftConfig.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PublicKraftConfig.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PublicKraftConfig.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PublicKraftConfig.fetch( client, id, ), new: ( fields: PublicKraftConfigFields, ) => { return new PublicKraftConfig( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PublicKraftConfig.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PublicKraftConfig>> { return phantom(PublicKraftConfig.reified( )); } static get p() { return PublicKraftConfig.phantom() }

 static get bcs() { return bcs.struct("PublicKraftConfig", {

 id: UID.bcs, start_time: bcs.u64(), per_user_limit: bcs.u64(), krafts_processed: bcs.u64(), address_list: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

}) };

 static fromFields( fields: Record<string, any> ): PublicKraftConfig { return PublicKraftConfig.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), startTime: decodeFromFields("u64", fields.start_time), perUserLimit: decodeFromFields("u64", fields.per_user_limit), kraftsProcessed: decodeFromFields("u64", fields.krafts_processed), addressList: decodeFromFields(LinkedTable.reified("address", reified.phantom("u64")), fields.address_list) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PublicKraftConfig { if (!isPublicKraftConfig(item.type)) { throw new Error("not a PublicKraftConfig type");

 }

 return PublicKraftConfig.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), startTime: decodeFromFieldsWithTypes("u64", item.fields.start_time), perUserLimit: decodeFromFieldsWithTypes("u64", item.fields.per_user_limit), kraftsProcessed: decodeFromFieldsWithTypes("u64", item.fields.krafts_processed), addressList: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("u64")), item.fields.address_list) } ) }

 static fromBcs( data: Uint8Array ): PublicKraftConfig { return PublicKraftConfig.fromFields( PublicKraftConfig.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,startTime: this.startTime.toString(),perUserLimit: this.perUserLimit.toString(),kraftsProcessed: this.kraftsProcessed.toString(),addressList: this.addressList.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PublicKraftConfig { return PublicKraftConfig.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), startTime: decodeFromJSONField("u64", field.startTime), perUserLimit: decodeFromJSONField("u64", field.perUserLimit), kraftsProcessed: decodeFromJSONField("u64", field.kraftsProcessed), addressList: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("u64")), field.addressList) } ) }

 static fromJSON( json: Record<string, any> ): PublicKraftConfig { if (json.$typeName !== PublicKraftConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PublicKraftConfig.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PublicKraftConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPublicKraftConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PublicKraftConfig object`); } return PublicKraftConfig.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PublicKraftConfig> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PublicKraftConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPublicKraftConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PublicKraftConfig object`); }
 return PublicKraftConfig.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PublicKraftInitialized =============================== */

export function isPublicKraftInitialized(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::PublicKraftInitialized"; }

export interface PublicKraftInitializedFields { collectionName: ToField<String>; creatorProfile: ToField<"address">; creatorProfileUsername: ToField<String1>; startTime: ToField<"u64">; perUserLimit: ToField<"u64"> }

export type PublicKraftInitializedReified = Reified< PublicKraftInitialized, PublicKraftInitializedFields >;

export class PublicKraftInitialized implements StructClass { static readonly $typeName = "0x0::hive_profile::PublicKraftInitialized"; static readonly $numTypeParams = 0;

 readonly $typeName = PublicKraftInitialized.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::PublicKraftInitialized";

 readonly $typeArgs: [];

 readonly collectionName: ToField<String>; readonly creatorProfile: ToField<"address">; readonly creatorProfileUsername: ToField<String1>; readonly startTime: ToField<"u64">; readonly perUserLimit: ToField<"u64">

 private constructor(typeArgs: [], fields: PublicKraftInitializedFields, ) { this.$fullTypeName = composeSuiType( PublicKraftInitialized.$typeName, ...typeArgs ) as "0x0::hive_profile::PublicKraftInitialized"; this.$typeArgs = typeArgs;

 this.collectionName = fields.collectionName;; this.creatorProfile = fields.creatorProfile;; this.creatorProfileUsername = fields.creatorProfileUsername;; this.startTime = fields.startTime;; this.perUserLimit = fields.perUserLimit; }

 static reified( ): PublicKraftInitializedReified { return { typeName: PublicKraftInitialized.$typeName, fullTypeName: composeSuiType( PublicKraftInitialized.$typeName, ...[] ) as "0x0::hive_profile::PublicKraftInitialized", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PublicKraftInitialized.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PublicKraftInitialized.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PublicKraftInitialized.fromBcs( data, ), bcs: PublicKraftInitialized.bcs, fromJSONField: (field: any) => PublicKraftInitialized.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PublicKraftInitialized.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PublicKraftInitialized.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PublicKraftInitialized.fetch( client, id, ), new: ( fields: PublicKraftInitializedFields, ) => { return new PublicKraftInitialized( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PublicKraftInitialized.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PublicKraftInitialized>> { return phantom(PublicKraftInitialized.reified( )); } static get p() { return PublicKraftInitialized.phantom() }

 static get bcs() { return bcs.struct("PublicKraftInitialized", {

 collection_name: String.bcs, creator_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), creator_profile_username: String1.bcs, start_time: bcs.u64(), per_user_limit: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PublicKraftInitialized { return PublicKraftInitialized.reified( ).new( { collectionName: decodeFromFields(String.reified(), fields.collection_name), creatorProfile: decodeFromFields("address", fields.creator_profile), creatorProfileUsername: decodeFromFields(String1.reified(), fields.creator_profile_username), startTime: decodeFromFields("u64", fields.start_time), perUserLimit: decodeFromFields("u64", fields.per_user_limit) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PublicKraftInitialized { if (!isPublicKraftInitialized(item.type)) { throw new Error("not a PublicKraftInitialized type");

 }

 return PublicKraftInitialized.reified( ).new( { collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), creatorProfile: decodeFromFieldsWithTypes("address", item.fields.creator_profile), creatorProfileUsername: decodeFromFieldsWithTypes(String1.reified(), item.fields.creator_profile_username), startTime: decodeFromFieldsWithTypes("u64", item.fields.start_time), perUserLimit: decodeFromFieldsWithTypes("u64", item.fields.per_user_limit) } ) }

 static fromBcs( data: Uint8Array ): PublicKraftInitialized { return PublicKraftInitialized.fromFields( PublicKraftInitialized.bcs.parse(data) ) }

 toJSONField() { return {

 collectionName: this.collectionName,creatorProfile: this.creatorProfile,creatorProfileUsername: this.creatorProfileUsername,startTime: this.startTime.toString(),perUserLimit: this.perUserLimit.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PublicKraftInitialized { return PublicKraftInitialized.reified( ).new( { collectionName: decodeFromJSONField(String.reified(), field.collectionName), creatorProfile: decodeFromJSONField("address", field.creatorProfile), creatorProfileUsername: decodeFromJSONField(String1.reified(), field.creatorProfileUsername), startTime: decodeFromJSONField("u64", field.startTime), perUserLimit: decodeFromJSONField("u64", field.perUserLimit) } ) }

 static fromJSON( json: Record<string, any> ): PublicKraftInitialized { if (json.$typeName !== PublicKraftInitialized.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PublicKraftInitialized.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PublicKraftInitialized { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPublicKraftInitialized(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PublicKraftInitialized object`); } return PublicKraftInitialized.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PublicKraftInitialized> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PublicKraftInitialized object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPublicKraftInitialized(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PublicKraftInitialized object`); }
 return PublicKraftInitialized.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== RemovedUpgradeForVersion =============================== */

export function isRemovedUpgradeForVersion(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::RemovedUpgradeForVersion"; }

export interface RemovedUpgradeForVersionFields { creatorProfileAddr: ToField<"address">; collectionName: ToField<String>; version: ToField<"u64">; upgradeIndex: ToField<"u64"> }

export type RemovedUpgradeForVersionReified = Reified< RemovedUpgradeForVersion, RemovedUpgradeForVersionFields >;

export class RemovedUpgradeForVersion implements StructClass { static readonly $typeName = "0x0::hive_profile::RemovedUpgradeForVersion"; static readonly $numTypeParams = 0;

 readonly $typeName = RemovedUpgradeForVersion.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::RemovedUpgradeForVersion";

 readonly $typeArgs: [];

 readonly creatorProfileAddr: ToField<"address">; readonly collectionName: ToField<String>; readonly version: ToField<"u64">; readonly upgradeIndex: ToField<"u64">

 private constructor(typeArgs: [], fields: RemovedUpgradeForVersionFields, ) { this.$fullTypeName = composeSuiType( RemovedUpgradeForVersion.$typeName, ...typeArgs ) as "0x0::hive_profile::RemovedUpgradeForVersion"; this.$typeArgs = typeArgs;

 this.creatorProfileAddr = fields.creatorProfileAddr;; this.collectionName = fields.collectionName;; this.version = fields.version;; this.upgradeIndex = fields.upgradeIndex; }

 static reified( ): RemovedUpgradeForVersionReified { return { typeName: RemovedUpgradeForVersion.$typeName, fullTypeName: composeSuiType( RemovedUpgradeForVersion.$typeName, ...[] ) as "0x0::hive_profile::RemovedUpgradeForVersion", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RemovedUpgradeForVersion.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RemovedUpgradeForVersion.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RemovedUpgradeForVersion.fromBcs( data, ), bcs: RemovedUpgradeForVersion.bcs, fromJSONField: (field: any) => RemovedUpgradeForVersion.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RemovedUpgradeForVersion.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RemovedUpgradeForVersion.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => RemovedUpgradeForVersion.fetch( client, id, ), new: ( fields: RemovedUpgradeForVersionFields, ) => { return new RemovedUpgradeForVersion( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RemovedUpgradeForVersion.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RemovedUpgradeForVersion>> { return phantom(RemovedUpgradeForVersion.reified( )); } static get p() { return RemovedUpgradeForVersion.phantom() }

 static get bcs() { return bcs.struct("RemovedUpgradeForVersion", {

 creator_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), collection_name: String.bcs, version: bcs.u64(), upgrade_index: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RemovedUpgradeForVersion { return RemovedUpgradeForVersion.reified( ).new( { creatorProfileAddr: decodeFromFields("address", fields.creator_profile_addr), collectionName: decodeFromFields(String.reified(), fields.collection_name), version: decodeFromFields("u64", fields.version), upgradeIndex: decodeFromFields("u64", fields.upgrade_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RemovedUpgradeForVersion { if (!isRemovedUpgradeForVersion(item.type)) { throw new Error("not a RemovedUpgradeForVersion type");

 }

 return RemovedUpgradeForVersion.reified( ).new( { creatorProfileAddr: decodeFromFieldsWithTypes("address", item.fields.creator_profile_addr), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), version: decodeFromFieldsWithTypes("u64", item.fields.version), upgradeIndex: decodeFromFieldsWithTypes("u64", item.fields.upgrade_index) } ) }

 static fromBcs( data: Uint8Array ): RemovedUpgradeForVersion { return RemovedUpgradeForVersion.fromFields( RemovedUpgradeForVersion.bcs.parse(data) ) }

 toJSONField() { return {

 creatorProfileAddr: this.creatorProfileAddr,collectionName: this.collectionName,version: this.version.toString(),upgradeIndex: this.upgradeIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RemovedUpgradeForVersion { return RemovedUpgradeForVersion.reified( ).new( { creatorProfileAddr: decodeFromJSONField("address", field.creatorProfileAddr), collectionName: decodeFromJSONField(String.reified(), field.collectionName), version: decodeFromJSONField("u64", field.version), upgradeIndex: decodeFromJSONField("u64", field.upgradeIndex) } ) }

 static fromJSON( json: Record<string, any> ): RemovedUpgradeForVersion { if (json.$typeName !== RemovedUpgradeForVersion.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RemovedUpgradeForVersion.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RemovedUpgradeForVersion { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRemovedUpgradeForVersion(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RemovedUpgradeForVersion object`); } return RemovedUpgradeForVersion.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<RemovedUpgradeForVersion> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RemovedUpgradeForVersion object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRemovedUpgradeForVersion(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RemovedUpgradeForVersion object`); }
 return RemovedUpgradeForVersion.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ReturnBorrowedHiveAsset =============================== */

export function isReturnBorrowedHiveAsset(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::ReturnBorrowedHiveAsset"; }

export interface ReturnBorrowedHiveAssetFields { version: ToField<"u64">; owner: ToField<"address">; borrowerProfile: ToField<"address"> }

export type ReturnBorrowedHiveAssetReified = Reified< ReturnBorrowedHiveAsset, ReturnBorrowedHiveAssetFields >;

export class ReturnBorrowedHiveAsset implements StructClass { static readonly $typeName = "0x0::hive_profile::ReturnBorrowedHiveAsset"; static readonly $numTypeParams = 0;

 readonly $typeName = ReturnBorrowedHiveAsset.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::ReturnBorrowedHiveAsset";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly owner: ToField<"address">; readonly borrowerProfile: ToField<"address">

 private constructor(typeArgs: [], fields: ReturnBorrowedHiveAssetFields, ) { this.$fullTypeName = composeSuiType( ReturnBorrowedHiveAsset.$typeName, ...typeArgs ) as "0x0::hive_profile::ReturnBorrowedHiveAsset"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.owner = fields.owner;; this.borrowerProfile = fields.borrowerProfile; }

 static reified( ): ReturnBorrowedHiveAssetReified { return { typeName: ReturnBorrowedHiveAsset.$typeName, fullTypeName: composeSuiType( ReturnBorrowedHiveAsset.$typeName, ...[] ) as "0x0::hive_profile::ReturnBorrowedHiveAsset", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ReturnBorrowedHiveAsset.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ReturnBorrowedHiveAsset.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ReturnBorrowedHiveAsset.fromBcs( data, ), bcs: ReturnBorrowedHiveAsset.bcs, fromJSONField: (field: any) => ReturnBorrowedHiveAsset.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ReturnBorrowedHiveAsset.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ReturnBorrowedHiveAsset.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ReturnBorrowedHiveAsset.fetch( client, id, ), new: ( fields: ReturnBorrowedHiveAssetFields, ) => { return new ReturnBorrowedHiveAsset( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ReturnBorrowedHiveAsset.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ReturnBorrowedHiveAsset>> { return phantom(ReturnBorrowedHiveAsset.reified( )); } static get p() { return ReturnBorrowedHiveAsset.phantom() }

 static get bcs() { return bcs.struct("ReturnBorrowedHiveAsset", {

 version: bcs.u64(), owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), borrower_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): ReturnBorrowedHiveAsset { return ReturnBorrowedHiveAsset.reified( ).new( { version: decodeFromFields("u64", fields.version), owner: decodeFromFields("address", fields.owner), borrowerProfile: decodeFromFields("address", fields.borrower_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ReturnBorrowedHiveAsset { if (!isReturnBorrowedHiveAsset(item.type)) { throw new Error("not a ReturnBorrowedHiveAsset type");

 }

 return ReturnBorrowedHiveAsset.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), owner: decodeFromFieldsWithTypes("address", item.fields.owner), borrowerProfile: decodeFromFieldsWithTypes("address", item.fields.borrower_profile) } ) }

 static fromBcs( data: Uint8Array ): ReturnBorrowedHiveAsset { return ReturnBorrowedHiveAsset.fromFields( ReturnBorrowedHiveAsset.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),owner: this.owner,borrowerProfile: this.borrowerProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ReturnBorrowedHiveAsset { return ReturnBorrowedHiveAsset.reified( ).new( { version: decodeFromJSONField("u64", field.version), owner: decodeFromJSONField("address", field.owner), borrowerProfile: decodeFromJSONField("address", field.borrowerProfile) } ) }

 static fromJSON( json: Record<string, any> ): ReturnBorrowedHiveAsset { if (json.$typeName !== ReturnBorrowedHiveAsset.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ReturnBorrowedHiveAsset.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ReturnBorrowedHiveAsset { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isReturnBorrowedHiveAsset(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ReturnBorrowedHiveAsset object`); } return ReturnBorrowedHiveAsset.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ReturnBorrowedHiveAsset> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ReturnBorrowedHiveAsset object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isReturnBorrowedHiveAsset(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ReturnBorrowedHiveAsset object`); }
 return ReturnBorrowedHiveAsset.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Royalty =============================== */

export function isRoyalty(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::Royalty"; }

export interface RoyaltyFields { numerator: ToField<"u64">; denominator: ToField<"u64">; assetsDispersalPercent: ToField<"u64">; creatorsRoyaltyPercent: ToField<"u64"> }

export type RoyaltyReified = Reified< Royalty, RoyaltyFields >;

export class Royalty implements StructClass { static readonly $typeName = "0x0::hive_profile::Royalty"; static readonly $numTypeParams = 0;

 readonly $typeName = Royalty.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::Royalty";

 readonly $typeArgs: [];

 readonly numerator: ToField<"u64">; readonly denominator: ToField<"u64">; readonly assetsDispersalPercent: ToField<"u64">; readonly creatorsRoyaltyPercent: ToField<"u64">

 private constructor(typeArgs: [], fields: RoyaltyFields, ) { this.$fullTypeName = composeSuiType( Royalty.$typeName, ...typeArgs ) as "0x0::hive_profile::Royalty"; this.$typeArgs = typeArgs;

 this.numerator = fields.numerator;; this.denominator = fields.denominator;; this.assetsDispersalPercent = fields.assetsDispersalPercent;; this.creatorsRoyaltyPercent = fields.creatorsRoyaltyPercent; }

 static reified( ): RoyaltyReified { return { typeName: Royalty.$typeName, fullTypeName: composeSuiType( Royalty.$typeName, ...[] ) as "0x0::hive_profile::Royalty", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Royalty.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Royalty.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Royalty.fromBcs( data, ), bcs: Royalty.bcs, fromJSONField: (field: any) => Royalty.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Royalty.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Royalty.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Royalty.fetch( client, id, ), new: ( fields: RoyaltyFields, ) => { return new Royalty( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Royalty.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Royalty>> { return phantom(Royalty.reified( )); } static get p() { return Royalty.phantom() }

 static get bcs() { return bcs.struct("Royalty", {

 numerator: bcs.u64(), denominator: bcs.u64(), assets_dispersal_percent: bcs.u64(), creators_royalty_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Royalty { return Royalty.reified( ).new( { numerator: decodeFromFields("u64", fields.numerator), denominator: decodeFromFields("u64", fields.denominator), assetsDispersalPercent: decodeFromFields("u64", fields.assets_dispersal_percent), creatorsRoyaltyPercent: decodeFromFields("u64", fields.creators_royalty_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Royalty { if (!isRoyalty(item.type)) { throw new Error("not a Royalty type");

 }

 return Royalty.reified( ).new( { numerator: decodeFromFieldsWithTypes("u64", item.fields.numerator), denominator: decodeFromFieldsWithTypes("u64", item.fields.denominator), assetsDispersalPercent: decodeFromFieldsWithTypes("u64", item.fields.assets_dispersal_percent), creatorsRoyaltyPercent: decodeFromFieldsWithTypes("u64", item.fields.creators_royalty_percent) } ) }

 static fromBcs( data: Uint8Array ): Royalty { return Royalty.fromFields( Royalty.bcs.parse(data) ) }

 toJSONField() { return {

 numerator: this.numerator.toString(),denominator: this.denominator.toString(),assetsDispersalPercent: this.assetsDispersalPercent.toString(),creatorsRoyaltyPercent: this.creatorsRoyaltyPercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Royalty { return Royalty.reified( ).new( { numerator: decodeFromJSONField("u64", field.numerator), denominator: decodeFromJSONField("u64", field.denominator), assetsDispersalPercent: decodeFromJSONField("u64", field.assetsDispersalPercent), creatorsRoyaltyPercent: decodeFromJSONField("u64", field.creatorsRoyaltyPercent) } ) }

 static fromJSON( json: Record<string, any> ): Royalty { if (json.$typeName !== Royalty.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Royalty.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Royalty { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRoyalty(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Royalty object`); } return Royalty.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Royalty> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Royalty object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRoyalty(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Royalty object`); }
 return Royalty.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== RoyaltyCollectedForCreator =============================== */

export function isRoyaltyCollectedForCreator(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::RoyaltyCollectedForCreator"; }

export interface RoyaltyCollectedForCreatorFields { creatorProfile: ToField<"address">; username: ToField<String1>; hsuiCollected: ToField<"u64"> }

export type RoyaltyCollectedForCreatorReified = Reified< RoyaltyCollectedForCreator, RoyaltyCollectedForCreatorFields >;

export class RoyaltyCollectedForCreator implements StructClass { static readonly $typeName = "0x0::hive_profile::RoyaltyCollectedForCreator"; static readonly $numTypeParams = 0;

 readonly $typeName = RoyaltyCollectedForCreator.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::RoyaltyCollectedForCreator";

 readonly $typeArgs: [];

 readonly creatorProfile: ToField<"address">; readonly username: ToField<String1>; readonly hsuiCollected: ToField<"u64">

 private constructor(typeArgs: [], fields: RoyaltyCollectedForCreatorFields, ) { this.$fullTypeName = composeSuiType( RoyaltyCollectedForCreator.$typeName, ...typeArgs ) as "0x0::hive_profile::RoyaltyCollectedForCreator"; this.$typeArgs = typeArgs;

 this.creatorProfile = fields.creatorProfile;; this.username = fields.username;; this.hsuiCollected = fields.hsuiCollected; }

 static reified( ): RoyaltyCollectedForCreatorReified { return { typeName: RoyaltyCollectedForCreator.$typeName, fullTypeName: composeSuiType( RoyaltyCollectedForCreator.$typeName, ...[] ) as "0x0::hive_profile::RoyaltyCollectedForCreator", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RoyaltyCollectedForCreator.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RoyaltyCollectedForCreator.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RoyaltyCollectedForCreator.fromBcs( data, ), bcs: RoyaltyCollectedForCreator.bcs, fromJSONField: (field: any) => RoyaltyCollectedForCreator.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RoyaltyCollectedForCreator.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RoyaltyCollectedForCreator.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => RoyaltyCollectedForCreator.fetch( client, id, ), new: ( fields: RoyaltyCollectedForCreatorFields, ) => { return new RoyaltyCollectedForCreator( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RoyaltyCollectedForCreator.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RoyaltyCollectedForCreator>> { return phantom(RoyaltyCollectedForCreator.reified( )); } static get p() { return RoyaltyCollectedForCreator.phantom() }

 static get bcs() { return bcs.struct("RoyaltyCollectedForCreator", {

 creator_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String1.bcs, hsui_collected: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RoyaltyCollectedForCreator { return RoyaltyCollectedForCreator.reified( ).new( { creatorProfile: decodeFromFields("address", fields.creator_profile), username: decodeFromFields(String1.reified(), fields.username), hsuiCollected: decodeFromFields("u64", fields.hsui_collected) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RoyaltyCollectedForCreator { if (!isRoyaltyCollectedForCreator(item.type)) { throw new Error("not a RoyaltyCollectedForCreator type");

 }

 return RoyaltyCollectedForCreator.reified( ).new( { creatorProfile: decodeFromFieldsWithTypes("address", item.fields.creator_profile), username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), hsuiCollected: decodeFromFieldsWithTypes("u64", item.fields.hsui_collected) } ) }

 static fromBcs( data: Uint8Array ): RoyaltyCollectedForCreator { return RoyaltyCollectedForCreator.fromFields( RoyaltyCollectedForCreator.bcs.parse(data) ) }

 toJSONField() { return {

 creatorProfile: this.creatorProfile,username: this.username,hsuiCollected: this.hsuiCollected.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RoyaltyCollectedForCreator { return RoyaltyCollectedForCreator.reified( ).new( { creatorProfile: decodeFromJSONField("address", field.creatorProfile), username: decodeFromJSONField(String1.reified(), field.username), hsuiCollected: decodeFromJSONField("u64", field.hsuiCollected) } ) }

 static fromJSON( json: Record<string, any> ): RoyaltyCollectedForCreator { if (json.$typeName !== RoyaltyCollectedForCreator.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RoyaltyCollectedForCreator.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RoyaltyCollectedForCreator { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRoyaltyCollectedForCreator(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RoyaltyCollectedForCreator object`); } return RoyaltyCollectedForCreator.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<RoyaltyCollectedForCreator> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RoyaltyCollectedForCreator object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRoyaltyCollectedForCreator(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RoyaltyCollectedForCreator object`); }
 return RoyaltyCollectedForCreator.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== RoyaltyProcessed =============================== */

export function isRoyaltyProcessed(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::RoyaltyProcessed"; }

export interface RoyaltyProcessedFields { totalRoyaltyAmt: ToField<"u64">; hiveDispersalAmt: ToField<"u64">; creatorRoyaltyAmt: ToField<"u64">; accruedToFeeCapHolder: ToField<"u64"> }

export type RoyaltyProcessedReified = Reified< RoyaltyProcessed, RoyaltyProcessedFields >;

export class RoyaltyProcessed implements StructClass { static readonly $typeName = "0x0::hive_profile::RoyaltyProcessed"; static readonly $numTypeParams = 0;

 readonly $typeName = RoyaltyProcessed.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::RoyaltyProcessed";

 readonly $typeArgs: [];

 readonly totalRoyaltyAmt: ToField<"u64">; readonly hiveDispersalAmt: ToField<"u64">; readonly creatorRoyaltyAmt: ToField<"u64">; readonly accruedToFeeCapHolder: ToField<"u64">

 private constructor(typeArgs: [], fields: RoyaltyProcessedFields, ) { this.$fullTypeName = composeSuiType( RoyaltyProcessed.$typeName, ...typeArgs ) as "0x0::hive_profile::RoyaltyProcessed"; this.$typeArgs = typeArgs;

 this.totalRoyaltyAmt = fields.totalRoyaltyAmt;; this.hiveDispersalAmt = fields.hiveDispersalAmt;; this.creatorRoyaltyAmt = fields.creatorRoyaltyAmt;; this.accruedToFeeCapHolder = fields.accruedToFeeCapHolder; }

 static reified( ): RoyaltyProcessedReified { return { typeName: RoyaltyProcessed.$typeName, fullTypeName: composeSuiType( RoyaltyProcessed.$typeName, ...[] ) as "0x0::hive_profile::RoyaltyProcessed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RoyaltyProcessed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RoyaltyProcessed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RoyaltyProcessed.fromBcs( data, ), bcs: RoyaltyProcessed.bcs, fromJSONField: (field: any) => RoyaltyProcessed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RoyaltyProcessed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RoyaltyProcessed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => RoyaltyProcessed.fetch( client, id, ), new: ( fields: RoyaltyProcessedFields, ) => { return new RoyaltyProcessed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RoyaltyProcessed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RoyaltyProcessed>> { return phantom(RoyaltyProcessed.reified( )); } static get p() { return RoyaltyProcessed.phantom() }

 static get bcs() { return bcs.struct("RoyaltyProcessed", {

 total_royalty_amt: bcs.u64(), hive_dispersal_amt: bcs.u64(), creator_royalty_amt: bcs.u64(), accrued_to_fee_cap_holder: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RoyaltyProcessed { return RoyaltyProcessed.reified( ).new( { totalRoyaltyAmt: decodeFromFields("u64", fields.total_royalty_amt), hiveDispersalAmt: decodeFromFields("u64", fields.hive_dispersal_amt), creatorRoyaltyAmt: decodeFromFields("u64", fields.creator_royalty_amt), accruedToFeeCapHolder: decodeFromFields("u64", fields.accrued_to_fee_cap_holder) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RoyaltyProcessed { if (!isRoyaltyProcessed(item.type)) { throw new Error("not a RoyaltyProcessed type");

 }

 return RoyaltyProcessed.reified( ).new( { totalRoyaltyAmt: decodeFromFieldsWithTypes("u64", item.fields.total_royalty_amt), hiveDispersalAmt: decodeFromFieldsWithTypes("u64", item.fields.hive_dispersal_amt), creatorRoyaltyAmt: decodeFromFieldsWithTypes("u64", item.fields.creator_royalty_amt), accruedToFeeCapHolder: decodeFromFieldsWithTypes("u64", item.fields.accrued_to_fee_cap_holder) } ) }

 static fromBcs( data: Uint8Array ): RoyaltyProcessed { return RoyaltyProcessed.fromFields( RoyaltyProcessed.bcs.parse(data) ) }

 toJSONField() { return {

 totalRoyaltyAmt: this.totalRoyaltyAmt.toString(),hiveDispersalAmt: this.hiveDispersalAmt.toString(),creatorRoyaltyAmt: this.creatorRoyaltyAmt.toString(),accruedToFeeCapHolder: this.accruedToFeeCapHolder.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RoyaltyProcessed { return RoyaltyProcessed.reified( ).new( { totalRoyaltyAmt: decodeFromJSONField("u64", field.totalRoyaltyAmt), hiveDispersalAmt: decodeFromJSONField("u64", field.hiveDispersalAmt), creatorRoyaltyAmt: decodeFromJSONField("u64", field.creatorRoyaltyAmt), accruedToFeeCapHolder: decodeFromJSONField("u64", field.accruedToFeeCapHolder) } ) }

 static fromJSON( json: Record<string, any> ): RoyaltyProcessed { if (json.$typeName !== RoyaltyProcessed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RoyaltyProcessed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RoyaltyProcessed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRoyaltyProcessed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RoyaltyProcessed object`); } return RoyaltyProcessed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<RoyaltyProcessed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RoyaltyProcessed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRoyaltyProcessed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RoyaltyProcessed object`); }
 return RoyaltyProcessed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SaleExecuted =============================== */

export function isSaleExecuted(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::SaleExecuted"; }

export interface SaleExecutedFields { version: ToField<"u64">; buyerProfile: ToField<"address">; sellerProfile: ToField<"address">; pricePaidHsui: ToField<"u64">; pricePaidSui: ToField<"u64">; isSaleListing: ToField<"bool">; instantSale: ToField<"bool">; highestBidSale: ToField<"bool">; isDirectBidAccepted: ToField<"bool"> }

export type SaleExecutedReified = Reified< SaleExecuted, SaleExecutedFields >;

export class SaleExecuted implements StructClass { static readonly $typeName = "0x0::hive_profile::SaleExecuted"; static readonly $numTypeParams = 0;

 readonly $typeName = SaleExecuted.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::SaleExecuted";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly buyerProfile: ToField<"address">; readonly sellerProfile: ToField<"address">; readonly pricePaidHsui: ToField<"u64">; readonly pricePaidSui: ToField<"u64">; readonly isSaleListing: ToField<"bool">; readonly instantSale: ToField<"bool">; readonly highestBidSale: ToField<"bool">; readonly isDirectBidAccepted: ToField<"bool">

 private constructor(typeArgs: [], fields: SaleExecutedFields, ) { this.$fullTypeName = composeSuiType( SaleExecuted.$typeName, ...typeArgs ) as "0x0::hive_profile::SaleExecuted"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.buyerProfile = fields.buyerProfile;; this.sellerProfile = fields.sellerProfile;; this.pricePaidHsui = fields.pricePaidHsui;; this.pricePaidSui = fields.pricePaidSui;; this.isSaleListing = fields.isSaleListing;; this.instantSale = fields.instantSale;; this.highestBidSale = fields.highestBidSale;; this.isDirectBidAccepted = fields.isDirectBidAccepted; }

 static reified( ): SaleExecutedReified { return { typeName: SaleExecuted.$typeName, fullTypeName: composeSuiType( SaleExecuted.$typeName, ...[] ) as "0x0::hive_profile::SaleExecuted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SaleExecuted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SaleExecuted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SaleExecuted.fromBcs( data, ), bcs: SaleExecuted.bcs, fromJSONField: (field: any) => SaleExecuted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SaleExecuted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SaleExecuted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SaleExecuted.fetch( client, id, ), new: ( fields: SaleExecutedFields, ) => { return new SaleExecuted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SaleExecuted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SaleExecuted>> { return phantom(SaleExecuted.reified( )); } static get p() { return SaleExecuted.phantom() }

 static get bcs() { return bcs.struct("SaleExecuted", {

 version: bcs.u64(), buyer_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), seller_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), price_paid_hsui: bcs.u64(), price_paid_sui: bcs.u64(), is_sale_listing: bcs.bool(), instant_sale: bcs.bool(), highest_bid_sale: bcs.bool(), is_direct_bid_accepted: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): SaleExecuted { return SaleExecuted.reified( ).new( { version: decodeFromFields("u64", fields.version), buyerProfile: decodeFromFields("address", fields.buyer_profile), sellerProfile: decodeFromFields("address", fields.seller_profile), pricePaidHsui: decodeFromFields("u64", fields.price_paid_hsui), pricePaidSui: decodeFromFields("u64", fields.price_paid_sui), isSaleListing: decodeFromFields("bool", fields.is_sale_listing), instantSale: decodeFromFields("bool", fields.instant_sale), highestBidSale: decodeFromFields("bool", fields.highest_bid_sale), isDirectBidAccepted: decodeFromFields("bool", fields.is_direct_bid_accepted) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SaleExecuted { if (!isSaleExecuted(item.type)) { throw new Error("not a SaleExecuted type");

 }

 return SaleExecuted.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), buyerProfile: decodeFromFieldsWithTypes("address", item.fields.buyer_profile), sellerProfile: decodeFromFieldsWithTypes("address", item.fields.seller_profile), pricePaidHsui: decodeFromFieldsWithTypes("u64", item.fields.price_paid_hsui), pricePaidSui: decodeFromFieldsWithTypes("u64", item.fields.price_paid_sui), isSaleListing: decodeFromFieldsWithTypes("bool", item.fields.is_sale_listing), instantSale: decodeFromFieldsWithTypes("bool", item.fields.instant_sale), highestBidSale: decodeFromFieldsWithTypes("bool", item.fields.highest_bid_sale), isDirectBidAccepted: decodeFromFieldsWithTypes("bool", item.fields.is_direct_bid_accepted) } ) }

 static fromBcs( data: Uint8Array ): SaleExecuted { return SaleExecuted.fromFields( SaleExecuted.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),buyerProfile: this.buyerProfile,sellerProfile: this.sellerProfile,pricePaidHsui: this.pricePaidHsui.toString(),pricePaidSui: this.pricePaidSui.toString(),isSaleListing: this.isSaleListing,instantSale: this.instantSale,highestBidSale: this.highestBidSale,isDirectBidAccepted: this.isDirectBidAccepted,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SaleExecuted { return SaleExecuted.reified( ).new( { version: decodeFromJSONField("u64", field.version), buyerProfile: decodeFromJSONField("address", field.buyerProfile), sellerProfile: decodeFromJSONField("address", field.sellerProfile), pricePaidHsui: decodeFromJSONField("u64", field.pricePaidHsui), pricePaidSui: decodeFromJSONField("u64", field.pricePaidSui), isSaleListing: decodeFromJSONField("bool", field.isSaleListing), instantSale: decodeFromJSONField("bool", field.instantSale), highestBidSale: decodeFromJSONField("bool", field.highestBidSale), isDirectBidAccepted: decodeFromJSONField("bool", field.isDirectBidAccepted) } ) }

 static fromJSON( json: Record<string, any> ): SaleExecuted { if (json.$typeName !== SaleExecuted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SaleExecuted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SaleExecuted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSaleExecuted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SaleExecuted object`); } return SaleExecuted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SaleExecuted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SaleExecuted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSaleExecuted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SaleExecuted object`); }
 return SaleExecuted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SkinAccessPermissionsUpdated =============================== */

export function isSkinAccessPermissionsUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::SkinAccessPermissionsUpdated"; }

export interface SkinAccessPermissionsUpdatedFields { version: ToField<"u64">; skinType: ToField<String>; discountAccess: ToField<"u8">; discount: ToField<"u64"> }

export type SkinAccessPermissionsUpdatedReified = Reified< SkinAccessPermissionsUpdated, SkinAccessPermissionsUpdatedFields >;

export class SkinAccessPermissionsUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::SkinAccessPermissionsUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = SkinAccessPermissionsUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::SkinAccessPermissionsUpdated";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly skinType: ToField<String>; readonly discountAccess: ToField<"u8">; readonly discount: ToField<"u64">

 private constructor(typeArgs: [], fields: SkinAccessPermissionsUpdatedFields, ) { this.$fullTypeName = composeSuiType( SkinAccessPermissionsUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::SkinAccessPermissionsUpdated"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.skinType = fields.skinType;; this.discountAccess = fields.discountAccess;; this.discount = fields.discount; }

 static reified( ): SkinAccessPermissionsUpdatedReified { return { typeName: SkinAccessPermissionsUpdated.$typeName, fullTypeName: composeSuiType( SkinAccessPermissionsUpdated.$typeName, ...[] ) as "0x0::hive_profile::SkinAccessPermissionsUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SkinAccessPermissionsUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SkinAccessPermissionsUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SkinAccessPermissionsUpdated.fromBcs( data, ), bcs: SkinAccessPermissionsUpdated.bcs, fromJSONField: (field: any) => SkinAccessPermissionsUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SkinAccessPermissionsUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SkinAccessPermissionsUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SkinAccessPermissionsUpdated.fetch( client, id, ), new: ( fields: SkinAccessPermissionsUpdatedFields, ) => { return new SkinAccessPermissionsUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SkinAccessPermissionsUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SkinAccessPermissionsUpdated>> { return phantom(SkinAccessPermissionsUpdated.reified( )); } static get p() { return SkinAccessPermissionsUpdated.phantom() }

 static get bcs() { return bcs.struct("SkinAccessPermissionsUpdated", {

 version: bcs.u64(), skin_type: String.bcs, discount_access: bcs.u8(), discount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SkinAccessPermissionsUpdated { return SkinAccessPermissionsUpdated.reified( ).new( { version: decodeFromFields("u64", fields.version), skinType: decodeFromFields(String.reified(), fields.skin_type), discountAccess: decodeFromFields("u8", fields.discount_access), discount: decodeFromFields("u64", fields.discount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SkinAccessPermissionsUpdated { if (!isSkinAccessPermissionsUpdated(item.type)) { throw new Error("not a SkinAccessPermissionsUpdated type");

 }

 return SkinAccessPermissionsUpdated.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), skinType: decodeFromFieldsWithTypes(String.reified(), item.fields.skin_type), discountAccess: decodeFromFieldsWithTypes("u8", item.fields.discount_access), discount: decodeFromFieldsWithTypes("u64", item.fields.discount) } ) }

 static fromBcs( data: Uint8Array ): SkinAccessPermissionsUpdated { return SkinAccessPermissionsUpdated.fromFields( SkinAccessPermissionsUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),skinType: this.skinType,discountAccess: this.discountAccess,discount: this.discount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SkinAccessPermissionsUpdated { return SkinAccessPermissionsUpdated.reified( ).new( { version: decodeFromJSONField("u64", field.version), skinType: decodeFromJSONField(String.reified(), field.skinType), discountAccess: decodeFromJSONField("u8", field.discountAccess), discount: decodeFromJSONField("u64", field.discount) } ) }

 static fromJSON( json: Record<string, any> ): SkinAccessPermissionsUpdated { if (json.$typeName !== SkinAccessPermissionsUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SkinAccessPermissionsUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SkinAccessPermissionsUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSkinAccessPermissionsUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SkinAccessPermissionsUpdated object`); } return SkinAccessPermissionsUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SkinAccessPermissionsUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SkinAccessPermissionsUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSkinAccessPermissionsUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SkinAccessPermissionsUpdated object`); }
 return SkinAccessPermissionsUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SkinKraftPermissionsUpdated =============================== */

export function isSkinKraftPermissionsUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::SkinKraftPermissionsUpdated"; }

export interface SkinKraftPermissionsUpdatedFields { version: ToField<"u64">; skinType: ToField<String>; kraftAccess: ToField<"u8"> }

export type SkinKraftPermissionsUpdatedReified = Reified< SkinKraftPermissionsUpdated, SkinKraftPermissionsUpdatedFields >;

export class SkinKraftPermissionsUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::SkinKraftPermissionsUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = SkinKraftPermissionsUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::SkinKraftPermissionsUpdated";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly skinType: ToField<String>; readonly kraftAccess: ToField<"u8">

 private constructor(typeArgs: [], fields: SkinKraftPermissionsUpdatedFields, ) { this.$fullTypeName = composeSuiType( SkinKraftPermissionsUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::SkinKraftPermissionsUpdated"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.skinType = fields.skinType;; this.kraftAccess = fields.kraftAccess; }

 static reified( ): SkinKraftPermissionsUpdatedReified { return { typeName: SkinKraftPermissionsUpdated.$typeName, fullTypeName: composeSuiType( SkinKraftPermissionsUpdated.$typeName, ...[] ) as "0x0::hive_profile::SkinKraftPermissionsUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SkinKraftPermissionsUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SkinKraftPermissionsUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SkinKraftPermissionsUpdated.fromBcs( data, ), bcs: SkinKraftPermissionsUpdated.bcs, fromJSONField: (field: any) => SkinKraftPermissionsUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SkinKraftPermissionsUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SkinKraftPermissionsUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SkinKraftPermissionsUpdated.fetch( client, id, ), new: ( fields: SkinKraftPermissionsUpdatedFields, ) => { return new SkinKraftPermissionsUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SkinKraftPermissionsUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SkinKraftPermissionsUpdated>> { return phantom(SkinKraftPermissionsUpdated.reified( )); } static get p() { return SkinKraftPermissionsUpdated.phantom() }

 static get bcs() { return bcs.struct("SkinKraftPermissionsUpdated", {

 version: bcs.u64(), skin_type: String.bcs, kraft_access: bcs.u8()

}) };

 static fromFields( fields: Record<string, any> ): SkinKraftPermissionsUpdated { return SkinKraftPermissionsUpdated.reified( ).new( { version: decodeFromFields("u64", fields.version), skinType: decodeFromFields(String.reified(), fields.skin_type), kraftAccess: decodeFromFields("u8", fields.kraft_access) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SkinKraftPermissionsUpdated { if (!isSkinKraftPermissionsUpdated(item.type)) { throw new Error("not a SkinKraftPermissionsUpdated type");

 }

 return SkinKraftPermissionsUpdated.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), skinType: decodeFromFieldsWithTypes(String.reified(), item.fields.skin_type), kraftAccess: decodeFromFieldsWithTypes("u8", item.fields.kraft_access) } ) }

 static fromBcs( data: Uint8Array ): SkinKraftPermissionsUpdated { return SkinKraftPermissionsUpdated.fromFields( SkinKraftPermissionsUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),skinType: this.skinType,kraftAccess: this.kraftAccess,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SkinKraftPermissionsUpdated { return SkinKraftPermissionsUpdated.reified( ).new( { version: decodeFromJSONField("u64", field.version), skinType: decodeFromJSONField(String.reified(), field.skinType), kraftAccess: decodeFromJSONField("u8", field.kraftAccess) } ) }

 static fromJSON( json: Record<string, any> ): SkinKraftPermissionsUpdated { if (json.$typeName !== SkinKraftPermissionsUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SkinKraftPermissionsUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SkinKraftPermissionsUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSkinKraftPermissionsUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SkinKraftPermissionsUpdated object`); } return SkinKraftPermissionsUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SkinKraftPermissionsUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SkinKraftPermissionsUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSkinKraftPermissionsUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SkinKraftPermissionsUpdated object`); }
 return SkinKraftPermissionsUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SkinRecord =============================== */

export function isSkinRecord(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::SkinRecord"; }

export interface SkinRecordFields { kraftAccess: ToField<"u8">; discountAccess: ToField<"u8">; discount: ToField<"u64">; royaltyFeePercent: ToField<"u64">; totalGemsPorted: ToField<"u64">; totalSkinsKrafted: ToField<"u64"> }

export type SkinRecordReified = Reified< SkinRecord, SkinRecordFields >;

export class SkinRecord implements StructClass { static readonly $typeName = "0x0::hive_profile::SkinRecord"; static readonly $numTypeParams = 0;

 readonly $typeName = SkinRecord.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::SkinRecord";

 readonly $typeArgs: [];

 readonly kraftAccess: ToField<"u8">; readonly discountAccess: ToField<"u8">; readonly discount: ToField<"u64">; readonly royaltyFeePercent: ToField<"u64">; readonly totalGemsPorted: ToField<"u64">; readonly totalSkinsKrafted: ToField<"u64">

 private constructor(typeArgs: [], fields: SkinRecordFields, ) { this.$fullTypeName = composeSuiType( SkinRecord.$typeName, ...typeArgs ) as "0x0::hive_profile::SkinRecord"; this.$typeArgs = typeArgs;

 this.kraftAccess = fields.kraftAccess;; this.discountAccess = fields.discountAccess;; this.discount = fields.discount;; this.royaltyFeePercent = fields.royaltyFeePercent;; this.totalGemsPorted = fields.totalGemsPorted;; this.totalSkinsKrafted = fields.totalSkinsKrafted; }

 static reified( ): SkinRecordReified { return { typeName: SkinRecord.$typeName, fullTypeName: composeSuiType( SkinRecord.$typeName, ...[] ) as "0x0::hive_profile::SkinRecord", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SkinRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SkinRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SkinRecord.fromBcs( data, ), bcs: SkinRecord.bcs, fromJSONField: (field: any) => SkinRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SkinRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SkinRecord.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SkinRecord.fetch( client, id, ), new: ( fields: SkinRecordFields, ) => { return new SkinRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SkinRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SkinRecord>> { return phantom(SkinRecord.reified( )); } static get p() { return SkinRecord.phantom() }

 static get bcs() { return bcs.struct("SkinRecord", {

 kraft_access: bcs.u8(), discount_access: bcs.u8(), discount: bcs.u64(), royalty_fee_percent: bcs.u64(), total_gems_ported: bcs.u64(), total_skins_krafted: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SkinRecord { return SkinRecord.reified( ).new( { kraftAccess: decodeFromFields("u8", fields.kraft_access), discountAccess: decodeFromFields("u8", fields.discount_access), discount: decodeFromFields("u64", fields.discount), royaltyFeePercent: decodeFromFields("u64", fields.royalty_fee_percent), totalGemsPorted: decodeFromFields("u64", fields.total_gems_ported), totalSkinsKrafted: decodeFromFields("u64", fields.total_skins_krafted) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SkinRecord { if (!isSkinRecord(item.type)) { throw new Error("not a SkinRecord type");

 }

 return SkinRecord.reified( ).new( { kraftAccess: decodeFromFieldsWithTypes("u8", item.fields.kraft_access), discountAccess: decodeFromFieldsWithTypes("u8", item.fields.discount_access), discount: decodeFromFieldsWithTypes("u64", item.fields.discount), royaltyFeePercent: decodeFromFieldsWithTypes("u64", item.fields.royalty_fee_percent), totalGemsPorted: decodeFromFieldsWithTypes("u64", item.fields.total_gems_ported), totalSkinsKrafted: decodeFromFieldsWithTypes("u64", item.fields.total_skins_krafted) } ) }

 static fromBcs( data: Uint8Array ): SkinRecord { return SkinRecord.fromFields( SkinRecord.bcs.parse(data) ) }

 toJSONField() { return {

 kraftAccess: this.kraftAccess,discountAccess: this.discountAccess,discount: this.discount.toString(),royaltyFeePercent: this.royaltyFeePercent.toString(),totalGemsPorted: this.totalGemsPorted.toString(),totalSkinsKrafted: this.totalSkinsKrafted.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SkinRecord { return SkinRecord.reified( ).new( { kraftAccess: decodeFromJSONField("u8", field.kraftAccess), discountAccess: decodeFromJSONField("u8", field.discountAccess), discount: decodeFromJSONField("u64", field.discount), royaltyFeePercent: decodeFromJSONField("u64", field.royaltyFeePercent), totalGemsPorted: decodeFromJSONField("u64", field.totalGemsPorted), totalSkinsKrafted: decodeFromJSONField("u64", field.totalSkinsKrafted) } ) }

 static fromJSON( json: Record<string, any> ): SkinRecord { if (json.$typeName !== SkinRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SkinRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SkinRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSkinRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SkinRecord object`); } return SkinRecord.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SkinRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SkinRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSkinRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SkinRecord object`); }
 return SkinRecord.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SkinRoyaltyCommissionUpdated =============================== */

export function isSkinRoyaltyCommissionUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::SkinRoyaltyCommissionUpdated"; }

export interface SkinRoyaltyCommissionUpdatedFields { version: ToField<"u64">; skinType: ToField<String>; royaltyFeePercent: ToField<"u64"> }

export type SkinRoyaltyCommissionUpdatedReified = Reified< SkinRoyaltyCommissionUpdated, SkinRoyaltyCommissionUpdatedFields >;

export class SkinRoyaltyCommissionUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::SkinRoyaltyCommissionUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = SkinRoyaltyCommissionUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::SkinRoyaltyCommissionUpdated";

 readonly $typeArgs: [];

 readonly version: ToField<"u64">; readonly skinType: ToField<String>; readonly royaltyFeePercent: ToField<"u64">

 private constructor(typeArgs: [], fields: SkinRoyaltyCommissionUpdatedFields, ) { this.$fullTypeName = composeSuiType( SkinRoyaltyCommissionUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::SkinRoyaltyCommissionUpdated"; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.skinType = fields.skinType;; this.royaltyFeePercent = fields.royaltyFeePercent; }

 static reified( ): SkinRoyaltyCommissionUpdatedReified { return { typeName: SkinRoyaltyCommissionUpdated.$typeName, fullTypeName: composeSuiType( SkinRoyaltyCommissionUpdated.$typeName, ...[] ) as "0x0::hive_profile::SkinRoyaltyCommissionUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SkinRoyaltyCommissionUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SkinRoyaltyCommissionUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SkinRoyaltyCommissionUpdated.fromBcs( data, ), bcs: SkinRoyaltyCommissionUpdated.bcs, fromJSONField: (field: any) => SkinRoyaltyCommissionUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SkinRoyaltyCommissionUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SkinRoyaltyCommissionUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SkinRoyaltyCommissionUpdated.fetch( client, id, ), new: ( fields: SkinRoyaltyCommissionUpdatedFields, ) => { return new SkinRoyaltyCommissionUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SkinRoyaltyCommissionUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SkinRoyaltyCommissionUpdated>> { return phantom(SkinRoyaltyCommissionUpdated.reified( )); } static get p() { return SkinRoyaltyCommissionUpdated.phantom() }

 static get bcs() { return bcs.struct("SkinRoyaltyCommissionUpdated", {

 version: bcs.u64(), skin_type: String.bcs, royalty_fee_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SkinRoyaltyCommissionUpdated { return SkinRoyaltyCommissionUpdated.reified( ).new( { version: decodeFromFields("u64", fields.version), skinType: decodeFromFields(String.reified(), fields.skin_type), royaltyFeePercent: decodeFromFields("u64", fields.royalty_fee_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SkinRoyaltyCommissionUpdated { if (!isSkinRoyaltyCommissionUpdated(item.type)) { throw new Error("not a SkinRoyaltyCommissionUpdated type");

 }

 return SkinRoyaltyCommissionUpdated.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), skinType: decodeFromFieldsWithTypes(String.reified(), item.fields.skin_type), royaltyFeePercent: decodeFromFieldsWithTypes("u64", item.fields.royalty_fee_percent) } ) }

 static fromBcs( data: Uint8Array ): SkinRoyaltyCommissionUpdated { return SkinRoyaltyCommissionUpdated.fromFields( SkinRoyaltyCommissionUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),skinType: this.skinType,royaltyFeePercent: this.royaltyFeePercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SkinRoyaltyCommissionUpdated { return SkinRoyaltyCommissionUpdated.reified( ).new( { version: decodeFromJSONField("u64", field.version), skinType: decodeFromJSONField(String.reified(), field.skinType), royaltyFeePercent: decodeFromJSONField("u64", field.royaltyFeePercent) } ) }

 static fromJSON( json: Record<string, any> ): SkinRoyaltyCommissionUpdated { if (json.$typeName !== SkinRoyaltyCommissionUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SkinRoyaltyCommissionUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SkinRoyaltyCommissionUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSkinRoyaltyCommissionUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SkinRoyaltyCommissionUpdated object`); } return SkinRoyaltyCommissionUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SkinRoyaltyCommissionUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SkinRoyaltyCommissionUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSkinRoyaltyCommissionUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SkinRoyaltyCommissionUpdated object`); }
 return SkinRoyaltyCommissionUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SubscriptionRoyalty =============================== */

export function isSubscriptionRoyalty(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::SubscriptionRoyalty"; }

export interface SubscriptionRoyaltyFields { numerator: ToField<"u64">; denominator: ToField<"u64">; treasuryPercent: ToField<"u64">; burnPercent: ToField<"u64"> }

export type SubscriptionRoyaltyReified = Reified< SubscriptionRoyalty, SubscriptionRoyaltyFields >;

export class SubscriptionRoyalty implements StructClass { static readonly $typeName = "0x0::hive_profile::SubscriptionRoyalty"; static readonly $numTypeParams = 0;

 readonly $typeName = SubscriptionRoyalty.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::SubscriptionRoyalty";

 readonly $typeArgs: [];

 readonly numerator: ToField<"u64">; readonly denominator: ToField<"u64">; readonly treasuryPercent: ToField<"u64">; readonly burnPercent: ToField<"u64">

 private constructor(typeArgs: [], fields: SubscriptionRoyaltyFields, ) { this.$fullTypeName = composeSuiType( SubscriptionRoyalty.$typeName, ...typeArgs ) as "0x0::hive_profile::SubscriptionRoyalty"; this.$typeArgs = typeArgs;

 this.numerator = fields.numerator;; this.denominator = fields.denominator;; this.treasuryPercent = fields.treasuryPercent;; this.burnPercent = fields.burnPercent; }

 static reified( ): SubscriptionRoyaltyReified { return { typeName: SubscriptionRoyalty.$typeName, fullTypeName: composeSuiType( SubscriptionRoyalty.$typeName, ...[] ) as "0x0::hive_profile::SubscriptionRoyalty", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SubscriptionRoyalty.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SubscriptionRoyalty.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SubscriptionRoyalty.fromBcs( data, ), bcs: SubscriptionRoyalty.bcs, fromJSONField: (field: any) => SubscriptionRoyalty.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SubscriptionRoyalty.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SubscriptionRoyalty.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SubscriptionRoyalty.fetch( client, id, ), new: ( fields: SubscriptionRoyaltyFields, ) => { return new SubscriptionRoyalty( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SubscriptionRoyalty.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SubscriptionRoyalty>> { return phantom(SubscriptionRoyalty.reified( )); } static get p() { return SubscriptionRoyalty.phantom() }

 static get bcs() { return bcs.struct("SubscriptionRoyalty", {

 numerator: bcs.u64(), denominator: bcs.u64(), treasury_percent: bcs.u64(), burn_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SubscriptionRoyalty { return SubscriptionRoyalty.reified( ).new( { numerator: decodeFromFields("u64", fields.numerator), denominator: decodeFromFields("u64", fields.denominator), treasuryPercent: decodeFromFields("u64", fields.treasury_percent), burnPercent: decodeFromFields("u64", fields.burn_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SubscriptionRoyalty { if (!isSubscriptionRoyalty(item.type)) { throw new Error("not a SubscriptionRoyalty type");

 }

 return SubscriptionRoyalty.reified( ).new( { numerator: decodeFromFieldsWithTypes("u64", item.fields.numerator), denominator: decodeFromFieldsWithTypes("u64", item.fields.denominator), treasuryPercent: decodeFromFieldsWithTypes("u64", item.fields.treasury_percent), burnPercent: decodeFromFieldsWithTypes("u64", item.fields.burn_percent) } ) }

 static fromBcs( data: Uint8Array ): SubscriptionRoyalty { return SubscriptionRoyalty.fromFields( SubscriptionRoyalty.bcs.parse(data) ) }

 toJSONField() { return {

 numerator: this.numerator.toString(),denominator: this.denominator.toString(),treasuryPercent: this.treasuryPercent.toString(),burnPercent: this.burnPercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SubscriptionRoyalty { return SubscriptionRoyalty.reified( ).new( { numerator: decodeFromJSONField("u64", field.numerator), denominator: decodeFromJSONField("u64", field.denominator), treasuryPercent: decodeFromJSONField("u64", field.treasuryPercent), burnPercent: decodeFromJSONField("u64", field.burnPercent) } ) }

 static fromJSON( json: Record<string, any> ): SubscriptionRoyalty { if (json.$typeName !== SubscriptionRoyalty.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SubscriptionRoyalty.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SubscriptionRoyalty { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSubscriptionRoyalty(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SubscriptionRoyalty object`); } return SubscriptionRoyalty.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SubscriptionRoyalty> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SubscriptionRoyalty object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSubscriptionRoyalty(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SubscriptionRoyalty object`); }
 return SubscriptionRoyalty.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== TotalActivePowerUpdated =============================== */

export function isTotalActivePowerUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::TotalActivePowerUpdated"; }

export interface TotalActivePowerUpdatedFields { newTotalActivePower: ToField<"u128">; totalStakedAssets: ToField<"u64"> }

export type TotalActivePowerUpdatedReified = Reified< TotalActivePowerUpdated, TotalActivePowerUpdatedFields >;

export class TotalActivePowerUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::TotalActivePowerUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = TotalActivePowerUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::TotalActivePowerUpdated";

 readonly $typeArgs: [];

 readonly newTotalActivePower: ToField<"u128">; readonly totalStakedAssets: ToField<"u64">

 private constructor(typeArgs: [], fields: TotalActivePowerUpdatedFields, ) { this.$fullTypeName = composeSuiType( TotalActivePowerUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::TotalActivePowerUpdated"; this.$typeArgs = typeArgs;

 this.newTotalActivePower = fields.newTotalActivePower;; this.totalStakedAssets = fields.totalStakedAssets; }

 static reified( ): TotalActivePowerUpdatedReified { return { typeName: TotalActivePowerUpdated.$typeName, fullTypeName: composeSuiType( TotalActivePowerUpdated.$typeName, ...[] ) as "0x0::hive_profile::TotalActivePowerUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TotalActivePowerUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TotalActivePowerUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TotalActivePowerUpdated.fromBcs( data, ), bcs: TotalActivePowerUpdated.bcs, fromJSONField: (field: any) => TotalActivePowerUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TotalActivePowerUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TotalActivePowerUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => TotalActivePowerUpdated.fetch( client, id, ), new: ( fields: TotalActivePowerUpdatedFields, ) => { return new TotalActivePowerUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TotalActivePowerUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TotalActivePowerUpdated>> { return phantom(TotalActivePowerUpdated.reified( )); } static get p() { return TotalActivePowerUpdated.phantom() }

 static get bcs() { return bcs.struct("TotalActivePowerUpdated", {

 new_total_active_power: bcs.u128(), total_staked_assets: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TotalActivePowerUpdated { return TotalActivePowerUpdated.reified( ).new( { newTotalActivePower: decodeFromFields("u128", fields.new_total_active_power), totalStakedAssets: decodeFromFields("u64", fields.total_staked_assets) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TotalActivePowerUpdated { if (!isTotalActivePowerUpdated(item.type)) { throw new Error("not a TotalActivePowerUpdated type");

 }

 return TotalActivePowerUpdated.reified( ).new( { newTotalActivePower: decodeFromFieldsWithTypes("u128", item.fields.new_total_active_power), totalStakedAssets: decodeFromFieldsWithTypes("u64", item.fields.total_staked_assets) } ) }

 static fromBcs( data: Uint8Array ): TotalActivePowerUpdated { return TotalActivePowerUpdated.fromFields( TotalActivePowerUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 newTotalActivePower: this.newTotalActivePower.toString(),totalStakedAssets: this.totalStakedAssets.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TotalActivePowerUpdated { return TotalActivePowerUpdated.reified( ).new( { newTotalActivePower: decodeFromJSONField("u128", field.newTotalActivePower), totalStakedAssets: decodeFromJSONField("u64", field.totalStakedAssets) } ) }

 static fromJSON( json: Record<string, any> ): TotalActivePowerUpdated { if (json.$typeName !== TotalActivePowerUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TotalActivePowerUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TotalActivePowerUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTotalActivePowerUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TotalActivePowerUpdated object`); } return TotalActivePowerUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<TotalActivePowerUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TotalActivePowerUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTotalActivePowerUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TotalActivePowerUpdated object`); }
 return TotalActivePowerUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== TraitsSetInHiveKiosk =============================== */

export function isTraitsSetInHiveKiosk(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::TraitsSetInHiveKiosk"; }

export interface TraitsSetInHiveKioskFields { creatorProfile: ToField<"address">; collectionName: ToField<String>; traitsList: ToField<Vector<String>> }

export type TraitsSetInHiveKioskReified = Reified< TraitsSetInHiveKiosk, TraitsSetInHiveKioskFields >;

export class TraitsSetInHiveKiosk implements StructClass { static readonly $typeName = "0x0::hive_profile::TraitsSetInHiveKiosk"; static readonly $numTypeParams = 0;

 readonly $typeName = TraitsSetInHiveKiosk.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::TraitsSetInHiveKiosk";

 readonly $typeArgs: [];

 readonly creatorProfile: ToField<"address">; readonly collectionName: ToField<String>; readonly traitsList: ToField<Vector<String>>

 private constructor(typeArgs: [], fields: TraitsSetInHiveKioskFields, ) { this.$fullTypeName = composeSuiType( TraitsSetInHiveKiosk.$typeName, ...typeArgs ) as "0x0::hive_profile::TraitsSetInHiveKiosk"; this.$typeArgs = typeArgs;

 this.creatorProfile = fields.creatorProfile;; this.collectionName = fields.collectionName;; this.traitsList = fields.traitsList; }

 static reified( ): TraitsSetInHiveKioskReified { return { typeName: TraitsSetInHiveKiosk.$typeName, fullTypeName: composeSuiType( TraitsSetInHiveKiosk.$typeName, ...[] ) as "0x0::hive_profile::TraitsSetInHiveKiosk", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TraitsSetInHiveKiosk.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TraitsSetInHiveKiosk.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TraitsSetInHiveKiosk.fromBcs( data, ), bcs: TraitsSetInHiveKiosk.bcs, fromJSONField: (field: any) => TraitsSetInHiveKiosk.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TraitsSetInHiveKiosk.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TraitsSetInHiveKiosk.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => TraitsSetInHiveKiosk.fetch( client, id, ), new: ( fields: TraitsSetInHiveKioskFields, ) => { return new TraitsSetInHiveKiosk( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TraitsSetInHiveKiosk.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TraitsSetInHiveKiosk>> { return phantom(TraitsSetInHiveKiosk.reified( )); } static get p() { return TraitsSetInHiveKiosk.phantom() }

 static get bcs() { return bcs.struct("TraitsSetInHiveKiosk", {

 creator_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), collection_name: String.bcs, traits_list: bcs.vector(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): TraitsSetInHiveKiosk { return TraitsSetInHiveKiosk.reified( ).new( { creatorProfile: decodeFromFields("address", fields.creator_profile), collectionName: decodeFromFields(String.reified(), fields.collection_name), traitsList: decodeFromFields(reified.vector(String.reified()), fields.traits_list) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TraitsSetInHiveKiosk { if (!isTraitsSetInHiveKiosk(item.type)) { throw new Error("not a TraitsSetInHiveKiosk type");

 }

 return TraitsSetInHiveKiosk.reified( ).new( { creatorProfile: decodeFromFieldsWithTypes("address", item.fields.creator_profile), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), traitsList: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.traits_list) } ) }

 static fromBcs( data: Uint8Array ): TraitsSetInHiveKiosk { return TraitsSetInHiveKiosk.fromFields( TraitsSetInHiveKiosk.bcs.parse(data) ) }

 toJSONField() { return {

 creatorProfile: this.creatorProfile,collectionName: this.collectionName,traitsList: fieldToJSON<Vector<String>>(`vector<0x1::string::String>`, this.traitsList),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TraitsSetInHiveKiosk { return TraitsSetInHiveKiosk.reified( ).new( { creatorProfile: decodeFromJSONField("address", field.creatorProfile), collectionName: decodeFromJSONField(String.reified(), field.collectionName), traitsList: decodeFromJSONField(reified.vector(String.reified()), field.traitsList) } ) }

 static fromJSON( json: Record<string, any> ): TraitsSetInHiveKiosk { if (json.$typeName !== TraitsSetInHiveKiosk.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TraitsSetInHiveKiosk.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TraitsSetInHiveKiosk { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTraitsSetInHiveKiosk(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TraitsSetInHiveKiosk object`); } return TraitsSetInHiveKiosk.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<TraitsSetInHiveKiosk> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TraitsSetInHiveKiosk object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTraitsSetInHiveKiosk(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TraitsSetInHiveKiosk object`); }
 return TraitsSetInHiveKiosk.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== TwapUpdateCap =============================== */

export function isTwapUpdateCap(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::TwapUpdateCap"; }

export interface TwapUpdateCapFields { id: ToField<UID> }

export type TwapUpdateCapReified = Reified< TwapUpdateCap, TwapUpdateCapFields >;

export class TwapUpdateCap implements StructClass { static readonly $typeName = "0x0::hive_profile::TwapUpdateCap"; static readonly $numTypeParams = 0;

 readonly $typeName = TwapUpdateCap.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::TwapUpdateCap";

 readonly $typeArgs: [];

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: TwapUpdateCapFields, ) { this.$fullTypeName = composeSuiType( TwapUpdateCap.$typeName, ...typeArgs ) as "0x0::hive_profile::TwapUpdateCap"; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): TwapUpdateCapReified { return { typeName: TwapUpdateCap.$typeName, fullTypeName: composeSuiType( TwapUpdateCap.$typeName, ...[] ) as "0x0::hive_profile::TwapUpdateCap", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TwapUpdateCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TwapUpdateCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TwapUpdateCap.fromBcs( data, ), bcs: TwapUpdateCap.bcs, fromJSONField: (field: any) => TwapUpdateCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TwapUpdateCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TwapUpdateCap.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => TwapUpdateCap.fetch( client, id, ), new: ( fields: TwapUpdateCapFields, ) => { return new TwapUpdateCap( [], fields ) }, kind: "StructClassReified", } }

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

 static async fetch( client: SuiClient, id: string ): Promise<TwapUpdateCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TwapUpdateCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTwapUpdateCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TwapUpdateCap object`); }
 return TwapUpdateCap.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UpdateEntropyForEpoch =============================== */

export function isUpdateEntropyForEpoch(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::UpdateEntropyForEpoch"; }

export interface UpdateEntropyForEpochFields { username: ToField<String1>; profileAddr: ToField<"address">; epoch: ToField<"u64">; maxEntropy: ToField<"u64">; entropyUsedForCurEpoch: ToField<"u64">; remainingEntropy: ToField<"u64">; maxWithdrawableGems: ToField<"u64">; availableGems: ToField<"u64"> }

export type UpdateEntropyForEpochReified = Reified< UpdateEntropyForEpoch, UpdateEntropyForEpochFields >;

export class UpdateEntropyForEpoch implements StructClass { static readonly $typeName = "0x0::hive_profile::UpdateEntropyForEpoch"; static readonly $numTypeParams = 0;

 readonly $typeName = UpdateEntropyForEpoch.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::UpdateEntropyForEpoch";

 readonly $typeArgs: [];

 readonly username: ToField<String1>; readonly profileAddr: ToField<"address">; readonly epoch: ToField<"u64">; readonly maxEntropy: ToField<"u64">; readonly entropyUsedForCurEpoch: ToField<"u64">; readonly remainingEntropy: ToField<"u64">; readonly maxWithdrawableGems: ToField<"u64">; readonly availableGems: ToField<"u64">

 private constructor(typeArgs: [], fields: UpdateEntropyForEpochFields, ) { this.$fullTypeName = composeSuiType( UpdateEntropyForEpoch.$typeName, ...typeArgs ) as "0x0::hive_profile::UpdateEntropyForEpoch"; this.$typeArgs = typeArgs;

 this.username = fields.username;; this.profileAddr = fields.profileAddr;; this.epoch = fields.epoch;; this.maxEntropy = fields.maxEntropy;; this.entropyUsedForCurEpoch = fields.entropyUsedForCurEpoch;; this.remainingEntropy = fields.remainingEntropy;; this.maxWithdrawableGems = fields.maxWithdrawableGems;; this.availableGems = fields.availableGems; }

 static reified( ): UpdateEntropyForEpochReified { return { typeName: UpdateEntropyForEpoch.$typeName, fullTypeName: composeSuiType( UpdateEntropyForEpoch.$typeName, ...[] ) as "0x0::hive_profile::UpdateEntropyForEpoch", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpdateEntropyForEpoch.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateEntropyForEpoch.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpdateEntropyForEpoch.fromBcs( data, ), bcs: UpdateEntropyForEpoch.bcs, fromJSONField: (field: any) => UpdateEntropyForEpoch.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpdateEntropyForEpoch.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpdateEntropyForEpoch.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UpdateEntropyForEpoch.fetch( client, id, ), new: ( fields: UpdateEntropyForEpochFields, ) => { return new UpdateEntropyForEpoch( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpdateEntropyForEpoch.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpdateEntropyForEpoch>> { return phantom(UpdateEntropyForEpoch.reified( )); } static get p() { return UpdateEntropyForEpoch.phantom() }

 static get bcs() { return bcs.struct("UpdateEntropyForEpoch", {

 username: String1.bcs, profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), epoch: bcs.u64(), max_entropy: bcs.u64(), entropy_used_for_cur_epoch: bcs.u64(), remaining_entropy: bcs.u64(), max_withdrawable_gems: bcs.u64(), available_gems: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UpdateEntropyForEpoch { return UpdateEntropyForEpoch.reified( ).new( { username: decodeFromFields(String1.reified(), fields.username), profileAddr: decodeFromFields("address", fields.profile_addr), epoch: decodeFromFields("u64", fields.epoch), maxEntropy: decodeFromFields("u64", fields.max_entropy), entropyUsedForCurEpoch: decodeFromFields("u64", fields.entropy_used_for_cur_epoch), remainingEntropy: decodeFromFields("u64", fields.remaining_entropy), maxWithdrawableGems: decodeFromFields("u64", fields.max_withdrawable_gems), availableGems: decodeFromFields("u64", fields.available_gems) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpdateEntropyForEpoch { if (!isUpdateEntropyForEpoch(item.type)) { throw new Error("not a UpdateEntropyForEpoch type");

 }

 return UpdateEntropyForEpoch.reified( ).new( { username: decodeFromFieldsWithTypes(String1.reified(), item.fields.username), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), maxEntropy: decodeFromFieldsWithTypes("u64", item.fields.max_entropy), entropyUsedForCurEpoch: decodeFromFieldsWithTypes("u64", item.fields.entropy_used_for_cur_epoch), remainingEntropy: decodeFromFieldsWithTypes("u64", item.fields.remaining_entropy), maxWithdrawableGems: decodeFromFieldsWithTypes("u64", item.fields.max_withdrawable_gems), availableGems: decodeFromFieldsWithTypes("u64", item.fields.available_gems) } ) }

 static fromBcs( data: Uint8Array ): UpdateEntropyForEpoch { return UpdateEntropyForEpoch.fromFields( UpdateEntropyForEpoch.bcs.parse(data) ) }

 toJSONField() { return {

 username: this.username,profileAddr: this.profileAddr,epoch: this.epoch.toString(),maxEntropy: this.maxEntropy.toString(),entropyUsedForCurEpoch: this.entropyUsedForCurEpoch.toString(),remainingEntropy: this.remainingEntropy.toString(),maxWithdrawableGems: this.maxWithdrawableGems.toString(),availableGems: this.availableGems.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpdateEntropyForEpoch { return UpdateEntropyForEpoch.reified( ).new( { username: decodeFromJSONField(String1.reified(), field.username), profileAddr: decodeFromJSONField("address", field.profileAddr), epoch: decodeFromJSONField("u64", field.epoch), maxEntropy: decodeFromJSONField("u64", field.maxEntropy), entropyUsedForCurEpoch: decodeFromJSONField("u64", field.entropyUsedForCurEpoch), remainingEntropy: decodeFromJSONField("u64", field.remainingEntropy), maxWithdrawableGems: decodeFromJSONField("u64", field.maxWithdrawableGems), availableGems: decodeFromJSONField("u64", field.availableGems) } ) }

 static fromJSON( json: Record<string, any> ): UpdateEntropyForEpoch { if (json.$typeName !== UpdateEntropyForEpoch.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpdateEntropyForEpoch.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpdateEntropyForEpoch { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpdateEntropyForEpoch(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpdateEntropyForEpoch object`); } return UpdateEntropyForEpoch.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpdateEntropyForEpoch> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpdateEntropyForEpoch object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateEntropyForEpoch(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpdateEntropyForEpoch object`); }
 return UpdateEntropyForEpoch.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UserNameUpdated =============================== */

export function isUserNameUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x0::hive_profile::UserNameUpdated"; }

export interface UserNameUpdatedFields { profileAddr: ToField<"address">; prevUsername: ToField<String>; newUsername: ToField<String> }

export type UserNameUpdatedReified = Reified< UserNameUpdated, UserNameUpdatedFields >;

export class UserNameUpdated implements StructClass { static readonly $typeName = "0x0::hive_profile::UserNameUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = UserNameUpdated.$typeName;

 readonly $fullTypeName: "0x0::hive_profile::UserNameUpdated";

 readonly $typeArgs: [];

 readonly profileAddr: ToField<"address">; readonly prevUsername: ToField<String>; readonly newUsername: ToField<String>

 private constructor(typeArgs: [], fields: UserNameUpdatedFields, ) { this.$fullTypeName = composeSuiType( UserNameUpdated.$typeName, ...typeArgs ) as "0x0::hive_profile::UserNameUpdated"; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.prevUsername = fields.prevUsername;; this.newUsername = fields.newUsername; }

 static reified( ): UserNameUpdatedReified { return { typeName: UserNameUpdated.$typeName, fullTypeName: composeSuiType( UserNameUpdated.$typeName, ...[] ) as "0x0::hive_profile::UserNameUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserNameUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserNameUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserNameUpdated.fromBcs( data, ), bcs: UserNameUpdated.bcs, fromJSONField: (field: any) => UserNameUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserNameUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserNameUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UserNameUpdated.fetch( client, id, ), new: ( fields: UserNameUpdatedFields, ) => { return new UserNameUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserNameUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserNameUpdated>> { return phantom(UserNameUpdated.reified( )); } static get p() { return UserNameUpdated.phantom() }

 static get bcs() { return bcs.struct("UserNameUpdated", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), prev_username: String.bcs, new_username: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): UserNameUpdated { return UserNameUpdated.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), prevUsername: decodeFromFields(String.reified(), fields.prev_username), newUsername: decodeFromFields(String.reified(), fields.new_username) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserNameUpdated { if (!isUserNameUpdated(item.type)) { throw new Error("not a UserNameUpdated type");

 }

 return UserNameUpdated.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), prevUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.prev_username), newUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.new_username) } ) }

 static fromBcs( data: Uint8Array ): UserNameUpdated { return UserNameUpdated.fromFields( UserNameUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,prevUsername: this.prevUsername,newUsername: this.newUsername,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserNameUpdated { return UserNameUpdated.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), prevUsername: decodeFromJSONField(String.reified(), field.prevUsername), newUsername: decodeFromJSONField(String.reified(), field.newUsername) } ) }

 static fromJSON( json: Record<string, any> ): UserNameUpdated { if (json.$typeName !== UserNameUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserNameUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserNameUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserNameUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserNameUpdated object`); } return UserNameUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserNameUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserNameUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserNameUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserNameUpdated object`); }
 return UserNameUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
