import * as reified from "../../../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../../../_framework/util";
import {Vector} from "../../../../_framework/vector";
import {Option} from "../../0x1/option/structs";
import {String} from "../../0x1/string/structs";
import {Balance} from "../../0x2/balance/structs";
import {TreasuryCap} from "../../0x2/coin/structs";
import {LinkedTable} from "../../0x2/linked-table/structs";
import {UID} from "../../0x2/object/structs";
import {BEE} from "../../0x784e390ba69b497f2c8c6df0ca1e19009be2a51050d7d982986babeff019f15c/bee/structs";
import {HiveGemKraftCap, HiveGems} from "../../0x784e390ba69b497f2c8c6df0ca1e19009be2a51050d7d982986babeff019f15c/hive-gems/structs";
import {HiveAppAccessCapability, HiveProfile} from "../../0xde95a90163cfc2474c23284f8abe78dd602915dbc0b2a65452bf27c38d11392c/hive-profile/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== BidUpdatedByUser =============================== */

export function isBidUpdatedByUser(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::BidUpdatedByUser`; }

export interface BidUpdatedByUserFields { bidderProfile: ToField<"address">; username: ToField<String>; bidAmt: ToField<"u64">; flag: ToField<"bool">; bidEpochStream: ToField<"u64">; nextStreamFromEpoch: ToField<"u64">; buzzCostInHive: ToField<"u64">; accessType: ToField<"u8">; collectionName: ToField<String> }

export type BidUpdatedByUserReified = Reified< BidUpdatedByUser, BidUpdatedByUserFields >;

export class BidUpdatedByUser implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::BidUpdatedByUser`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BidUpdatedByUser.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::BidUpdatedByUser`; readonly $typeArgs: []; readonly $isPhantom = BidUpdatedByUser.$isPhantom;

 readonly bidderProfile: ToField<"address">; readonly username: ToField<String>; readonly bidAmt: ToField<"u64">; readonly flag: ToField<"bool">; readonly bidEpochStream: ToField<"u64">; readonly nextStreamFromEpoch: ToField<"u64">; readonly buzzCostInHive: ToField<"u64">; readonly accessType: ToField<"u8">; readonly collectionName: ToField<String>

 private constructor(typeArgs: [], fields: BidUpdatedByUserFields, ) { this.$fullTypeName = composeSuiType( BidUpdatedByUser.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::BidUpdatedByUser`; this.$typeArgs = typeArgs;

 this.bidderProfile = fields.bidderProfile;; this.username = fields.username;; this.bidAmt = fields.bidAmt;; this.flag = fields.flag;; this.bidEpochStream = fields.bidEpochStream;; this.nextStreamFromEpoch = fields.nextStreamFromEpoch;; this.buzzCostInHive = fields.buzzCostInHive;; this.accessType = fields.accessType;; this.collectionName = fields.collectionName; }

 static reified( ): BidUpdatedByUserReified { return { typeName: BidUpdatedByUser.$typeName, fullTypeName: composeSuiType( BidUpdatedByUser.$typeName, ...[] ) as `${typeof PKG_V1}::hive::BidUpdatedByUser`, typeArgs: [ ] as [], isPhantom: BidUpdatedByUser.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidUpdatedByUser.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BidUpdatedByUser.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BidUpdatedByUser.fromBcs( data, ), bcs: BidUpdatedByUser.bcs, fromJSONField: (field: any) => BidUpdatedByUser.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BidUpdatedByUser.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BidUpdatedByUser.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BidUpdatedByUser.fetch( client, id, ), new: ( fields: BidUpdatedByUserFields, ) => { return new BidUpdatedByUser( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BidUpdatedByUser.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BidUpdatedByUser>> { return phantom(BidUpdatedByUser.reified( )); } static get p() { return BidUpdatedByUser.phantom() }

 static get bcs() { return bcs.struct("BidUpdatedByUser", {

 bidder_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, bid_amt: bcs.u64(), flag: bcs.bool(), bid_epoch_stream: bcs.u64(), next_stream_from_epoch: bcs.u64(), buzz_cost_in_hive: bcs.u64(), access_type: bcs.u8(), collection_name: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): BidUpdatedByUser { return BidUpdatedByUser.reified( ).new( { bidderProfile: decodeFromFields("address", fields.bidder_profile), username: decodeFromFields(String.reified(), fields.username), bidAmt: decodeFromFields("u64", fields.bid_amt), flag: decodeFromFields("bool", fields.flag), bidEpochStream: decodeFromFields("u64", fields.bid_epoch_stream), nextStreamFromEpoch: decodeFromFields("u64", fields.next_stream_from_epoch), buzzCostInHive: decodeFromFields("u64", fields.buzz_cost_in_hive), accessType: decodeFromFields("u8", fields.access_type), collectionName: decodeFromFields(String.reified(), fields.collection_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BidUpdatedByUser { if (!isBidUpdatedByUser(item.type)) { throw new Error("not a BidUpdatedByUser type");

 }

 return BidUpdatedByUser.reified( ).new( { bidderProfile: decodeFromFieldsWithTypes("address", item.fields.bidder_profile), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), bidAmt: decodeFromFieldsWithTypes("u64", item.fields.bid_amt), flag: decodeFromFieldsWithTypes("bool", item.fields.flag), bidEpochStream: decodeFromFieldsWithTypes("u64", item.fields.bid_epoch_stream), nextStreamFromEpoch: decodeFromFieldsWithTypes("u64", item.fields.next_stream_from_epoch), buzzCostInHive: decodeFromFieldsWithTypes("u64", item.fields.buzz_cost_in_hive), accessType: decodeFromFieldsWithTypes("u8", item.fields.access_type), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name) } ) }

 static fromBcs( data: Uint8Array ): BidUpdatedByUser { return BidUpdatedByUser.fromFields( BidUpdatedByUser.bcs.parse(data) ) }

 toJSONField() { return {

 bidderProfile: this.bidderProfile,username: this.username,bidAmt: this.bidAmt.toString(),flag: this.flag,bidEpochStream: this.bidEpochStream.toString(),nextStreamFromEpoch: this.nextStreamFromEpoch.toString(),buzzCostInHive: this.buzzCostInHive.toString(),accessType: this.accessType,collectionName: this.collectionName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BidUpdatedByUser { return BidUpdatedByUser.reified( ).new( { bidderProfile: decodeFromJSONField("address", field.bidderProfile), username: decodeFromJSONField(String.reified(), field.username), bidAmt: decodeFromJSONField("u64", field.bidAmt), flag: decodeFromJSONField("bool", field.flag), bidEpochStream: decodeFromJSONField("u64", field.bidEpochStream), nextStreamFromEpoch: decodeFromJSONField("u64", field.nextStreamFromEpoch), buzzCostInHive: decodeFromJSONField("u64", field.buzzCostInHive), accessType: decodeFromJSONField("u8", field.accessType), collectionName: decodeFromJSONField(String.reified(), field.collectionName) } ) }

 static fromJSON( json: Record<string, any> ): BidUpdatedByUser { if (json.$typeName !== BidUpdatedByUser.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BidUpdatedByUser.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BidUpdatedByUser { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidUpdatedByUser(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidUpdatedByUser object`); } return BidUpdatedByUser.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BidUpdatedByUser> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidUpdatedByUser object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidUpdatedByUser(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidUpdatedByUser object`); }

 return BidUpdatedByUser.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BurnHive =============================== */

export function isBurnHive(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::BurnHive`; }

export interface BurnHiveFields { user: ToField<"address">; hiveBurnt: ToField<"u64"> }

export type BurnHiveReified = Reified< BurnHive, BurnHiveFields >;

export class BurnHive implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::BurnHive`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BurnHive.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::BurnHive`; readonly $typeArgs: []; readonly $isPhantom = BurnHive.$isPhantom;

 readonly user: ToField<"address">; readonly hiveBurnt: ToField<"u64">

 private constructor(typeArgs: [], fields: BurnHiveFields, ) { this.$fullTypeName = composeSuiType( BurnHive.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::BurnHive`; this.$typeArgs = typeArgs;

 this.user = fields.user;; this.hiveBurnt = fields.hiveBurnt; }

 static reified( ): BurnHiveReified { return { typeName: BurnHive.$typeName, fullTypeName: composeSuiType( BurnHive.$typeName, ...[] ) as `${typeof PKG_V1}::hive::BurnHive`, typeArgs: [ ] as [], isPhantom: BurnHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BurnHive.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BurnHive.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BurnHive.fromBcs( data, ), bcs: BurnHive.bcs, fromJSONField: (field: any) => BurnHive.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BurnHive.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BurnHive.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BurnHive.fetch( client, id, ), new: ( fields: BurnHiveFields, ) => { return new BurnHive( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BurnHive.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BurnHive>> { return phantom(BurnHive.reified( )); } static get p() { return BurnHive.phantom() }

 static get bcs() { return bcs.struct("BurnHive", {

 user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), hive_burnt: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BurnHive { return BurnHive.reified( ).new( { user: decodeFromFields("address", fields.user), hiveBurnt: decodeFromFields("u64", fields.hive_burnt) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BurnHive { if (!isBurnHive(item.type)) { throw new Error("not a BurnHive type");

 }

 return BurnHive.reified( ).new( { user: decodeFromFieldsWithTypes("address", item.fields.user), hiveBurnt: decodeFromFieldsWithTypes("u64", item.fields.hive_burnt) } ) }

 static fromBcs( data: Uint8Array ): BurnHive { return BurnHive.fromFields( BurnHive.bcs.parse(data) ) }

 toJSONField() { return {

 user: this.user,hiveBurnt: this.hiveBurnt.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BurnHive { return BurnHive.reified( ).new( { user: decodeFromJSONField("address", field.user), hiveBurnt: decodeFromJSONField("u64", field.hiveBurnt) } ) }

 static fromJSON( json: Record<string, any> ): BurnHive { if (json.$typeName !== BurnHive.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BurnHive.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BurnHive { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBurnHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BurnHive object`); } return BurnHive.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BurnHive> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BurnHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBurnHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BurnHive object`); }

 return BurnHive.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BuzzChoosenForStream =============================== */

export function isBuzzChoosenForStream(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::BuzzChoosenForStream`; }

export interface BuzzChoosenForStreamFields { rankIndex: ToField<"u64">; streamerProfileAddr: ToField<"address">; streamIndex: ToField<"u64">; streamInnerIndex: ToField<"u64">; choosenBuzzProfile: ToField<"address">; buzz: ToField<String>; genAiUrl: ToField<Option<String>> }

export type BuzzChoosenForStreamReified = Reified< BuzzChoosenForStream, BuzzChoosenForStreamFields >;

export class BuzzChoosenForStream implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::BuzzChoosenForStream`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BuzzChoosenForStream.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::BuzzChoosenForStream`; readonly $typeArgs: []; readonly $isPhantom = BuzzChoosenForStream.$isPhantom;

 readonly rankIndex: ToField<"u64">; readonly streamerProfileAddr: ToField<"address">; readonly streamIndex: ToField<"u64">; readonly streamInnerIndex: ToField<"u64">; readonly choosenBuzzProfile: ToField<"address">; readonly buzz: ToField<String>; readonly genAiUrl: ToField<Option<String>>

 private constructor(typeArgs: [], fields: BuzzChoosenForStreamFields, ) { this.$fullTypeName = composeSuiType( BuzzChoosenForStream.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::BuzzChoosenForStream`; this.$typeArgs = typeArgs;

 this.rankIndex = fields.rankIndex;; this.streamerProfileAddr = fields.streamerProfileAddr;; this.streamIndex = fields.streamIndex;; this.streamInnerIndex = fields.streamInnerIndex;; this.choosenBuzzProfile = fields.choosenBuzzProfile;; this.buzz = fields.buzz;; this.genAiUrl = fields.genAiUrl; }

 static reified( ): BuzzChoosenForStreamReified { return { typeName: BuzzChoosenForStream.$typeName, fullTypeName: composeSuiType( BuzzChoosenForStream.$typeName, ...[] ) as `${typeof PKG_V1}::hive::BuzzChoosenForStream`, typeArgs: [ ] as [], isPhantom: BuzzChoosenForStream.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BuzzChoosenForStream.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BuzzChoosenForStream.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BuzzChoosenForStream.fromBcs( data, ), bcs: BuzzChoosenForStream.bcs, fromJSONField: (field: any) => BuzzChoosenForStream.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BuzzChoosenForStream.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BuzzChoosenForStream.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BuzzChoosenForStream.fetch( client, id, ), new: ( fields: BuzzChoosenForStreamFields, ) => { return new BuzzChoosenForStream( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BuzzChoosenForStream.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BuzzChoosenForStream>> { return phantom(BuzzChoosenForStream.reified( )); } static get p() { return BuzzChoosenForStream.phantom() }

 static get bcs() { return bcs.struct("BuzzChoosenForStream", {

 rank_index: bcs.u64(), streamer_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), stream_index: bcs.u64(), stream_inner_index: bcs.u64(), choosen_buzz_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), buzz: String.bcs, gen_ai_url: Option.bcs(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): BuzzChoosenForStream { return BuzzChoosenForStream.reified( ).new( { rankIndex: decodeFromFields("u64", fields.rank_index), streamerProfileAddr: decodeFromFields("address", fields.streamer_profile_addr), streamIndex: decodeFromFields("u64", fields.stream_index), streamInnerIndex: decodeFromFields("u64", fields.stream_inner_index), choosenBuzzProfile: decodeFromFields("address", fields.choosen_buzz_profile), buzz: decodeFromFields(String.reified(), fields.buzz), genAiUrl: decodeFromFields(Option.reified(String.reified()), fields.gen_ai_url) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BuzzChoosenForStream { if (!isBuzzChoosenForStream(item.type)) { throw new Error("not a BuzzChoosenForStream type");

 }

 return BuzzChoosenForStream.reified( ).new( { rankIndex: decodeFromFieldsWithTypes("u64", item.fields.rank_index), streamerProfileAddr: decodeFromFieldsWithTypes("address", item.fields.streamer_profile_addr), streamIndex: decodeFromFieldsWithTypes("u64", item.fields.stream_index), streamInnerIndex: decodeFromFieldsWithTypes("u64", item.fields.stream_inner_index), choosenBuzzProfile: decodeFromFieldsWithTypes("address", item.fields.choosen_buzz_profile), buzz: decodeFromFieldsWithTypes(String.reified(), item.fields.buzz), genAiUrl: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.gen_ai_url) } ) }

 static fromBcs( data: Uint8Array ): BuzzChoosenForStream { return BuzzChoosenForStream.fromFields( BuzzChoosenForStream.bcs.parse(data) ) }

 toJSONField() { return {

 rankIndex: this.rankIndex.toString(),streamerProfileAddr: this.streamerProfileAddr,streamIndex: this.streamIndex.toString(),streamInnerIndex: this.streamInnerIndex.toString(),choosenBuzzProfile: this.choosenBuzzProfile,buzz: this.buzz,genAiUrl: fieldToJSON<Option<String>>(`${Option.$typeName}<${String.$typeName}>`, this.genAiUrl),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BuzzChoosenForStream { return BuzzChoosenForStream.reified( ).new( { rankIndex: decodeFromJSONField("u64", field.rankIndex), streamerProfileAddr: decodeFromJSONField("address", field.streamerProfileAddr), streamIndex: decodeFromJSONField("u64", field.streamIndex), streamInnerIndex: decodeFromJSONField("u64", field.streamInnerIndex), choosenBuzzProfile: decodeFromJSONField("address", field.choosenBuzzProfile), buzz: decodeFromJSONField(String.reified(), field.buzz), genAiUrl: decodeFromJSONField(Option.reified(String.reified()), field.genAiUrl) } ) }

 static fromJSON( json: Record<string, any> ): BuzzChoosenForStream { if (json.$typeName !== BuzzChoosenForStream.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BuzzChoosenForStream.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BuzzChoosenForStream { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBuzzChoosenForStream(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BuzzChoosenForStream object`); } return BuzzChoosenForStream.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BuzzChoosenForStream> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BuzzChoosenForStream object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBuzzChoosenForStream(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BuzzChoosenForStream object`); }

 return BuzzChoosenForStream.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== CurrentStreamersInfo =============================== */

export function isCurrentStreamersInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::CurrentStreamersInfo`; }

export interface CurrentStreamersInfoFields { rank1Profile: ToField<Option<"address">>; rank1Info: ToField<StreamerInfo>; rank2Profile: ToField<Option<"address">>; rank2Info: ToField<StreamerInfo>; rank3Profile: ToField<Option<"address">>; rank3Info: ToField<StreamerInfo> }

export type CurrentStreamersInfoReified = Reified< CurrentStreamersInfo, CurrentStreamersInfoFields >;

export class CurrentStreamersInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::CurrentStreamersInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = CurrentStreamersInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::CurrentStreamersInfo`; readonly $typeArgs: []; readonly $isPhantom = CurrentStreamersInfo.$isPhantom;

 readonly rank1Profile: ToField<Option<"address">>; readonly rank1Info: ToField<StreamerInfo>; readonly rank2Profile: ToField<Option<"address">>; readonly rank2Info: ToField<StreamerInfo>; readonly rank3Profile: ToField<Option<"address">>; readonly rank3Info: ToField<StreamerInfo>

 private constructor(typeArgs: [], fields: CurrentStreamersInfoFields, ) { this.$fullTypeName = composeSuiType( CurrentStreamersInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::CurrentStreamersInfo`; this.$typeArgs = typeArgs;

 this.rank1Profile = fields.rank1Profile;; this.rank1Info = fields.rank1Info;; this.rank2Profile = fields.rank2Profile;; this.rank2Info = fields.rank2Info;; this.rank3Profile = fields.rank3Profile;; this.rank3Info = fields.rank3Info; }

 static reified( ): CurrentStreamersInfoReified { return { typeName: CurrentStreamersInfo.$typeName, fullTypeName: composeSuiType( CurrentStreamersInfo.$typeName, ...[] ) as `${typeof PKG_V1}::hive::CurrentStreamersInfo`, typeArgs: [ ] as [], isPhantom: CurrentStreamersInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CurrentStreamersInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CurrentStreamersInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => CurrentStreamersInfo.fromBcs( data, ), bcs: CurrentStreamersInfo.bcs, fromJSONField: (field: any) => CurrentStreamersInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => CurrentStreamersInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => CurrentStreamersInfo.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => CurrentStreamersInfo.fetch( client, id, ), new: ( fields: CurrentStreamersInfoFields, ) => { return new CurrentStreamersInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return CurrentStreamersInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<CurrentStreamersInfo>> { return phantom(CurrentStreamersInfo.reified( )); } static get p() { return CurrentStreamersInfo.phantom() }

 static get bcs() { return bcs.struct("CurrentStreamersInfo", {

 rank1_profile: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), rank1_info: StreamerInfo.bcs, rank2_profile: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), rank2_info: StreamerInfo.bcs, rank3_profile: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), rank3_info: StreamerInfo.bcs

}) };

 static fromFields( fields: Record<string, any> ): CurrentStreamersInfo { return CurrentStreamersInfo.reified( ).new( { rank1Profile: decodeFromFields(Option.reified("address"), fields.rank1_profile), rank1Info: decodeFromFields(StreamerInfo.reified(), fields.rank1_info), rank2Profile: decodeFromFields(Option.reified("address"), fields.rank2_profile), rank2Info: decodeFromFields(StreamerInfo.reified(), fields.rank2_info), rank3Profile: decodeFromFields(Option.reified("address"), fields.rank3_profile), rank3Info: decodeFromFields(StreamerInfo.reified(), fields.rank3_info) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): CurrentStreamersInfo { if (!isCurrentStreamersInfo(item.type)) { throw new Error("not a CurrentStreamersInfo type");

 }

 return CurrentStreamersInfo.reified( ).new( { rank1Profile: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.rank1_profile), rank1Info: decodeFromFieldsWithTypes(StreamerInfo.reified(), item.fields.rank1_info), rank2Profile: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.rank2_profile), rank2Info: decodeFromFieldsWithTypes(StreamerInfo.reified(), item.fields.rank2_info), rank3Profile: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.rank3_profile), rank3Info: decodeFromFieldsWithTypes(StreamerInfo.reified(), item.fields.rank3_info) } ) }

 static fromBcs( data: Uint8Array ): CurrentStreamersInfo { return CurrentStreamersInfo.fromFields( CurrentStreamersInfo.bcs.parse(data) ) }

 toJSONField() { return {

 rank1Profile: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.rank1Profile),rank1Info: this.rank1Info.toJSONField(),rank2Profile: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.rank2Profile),rank2Info: this.rank2Info.toJSONField(),rank3Profile: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.rank3Profile),rank3Info: this.rank3Info.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): CurrentStreamersInfo { return CurrentStreamersInfo.reified( ).new( { rank1Profile: decodeFromJSONField(Option.reified("address"), field.rank1Profile), rank1Info: decodeFromJSONField(StreamerInfo.reified(), field.rank1Info), rank2Profile: decodeFromJSONField(Option.reified("address"), field.rank2Profile), rank2Info: decodeFromJSONField(StreamerInfo.reified(), field.rank2Info), rank3Profile: decodeFromJSONField(Option.reified("address"), field.rank3Profile), rank3Info: decodeFromJSONField(StreamerInfo.reified(), field.rank3Info) } ) }

 static fromJSON( json: Record<string, any> ): CurrentStreamersInfo { if (json.$typeName !== CurrentStreamersInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return CurrentStreamersInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): CurrentStreamersInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurrentStreamersInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CurrentStreamersInfo object`); } return CurrentStreamersInfo.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<CurrentStreamersInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CurrentStreamersInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurrentStreamersInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CurrentStreamersInfo object`); }

 return CurrentStreamersInfo.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== EngagementScores =============================== */

export function isEngagementScores(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::EngagementScores`; }

export interface EngagementScoresFields { hiveGemsAvailable: ToField<HiveGems>; hivePerAdSlot: ToField<"u64">; beesAvailable: ToField<Balance<ToPhantom<BEE>>>; beesPerAdSlot: ToField<"u64">; ongoingPointsSum: ToField<"u128">; userPointsScore: ToField<LinkedTable<"address", ToPhantom<ProfileScore>>>; totalSuiBidded: ToField<"u64">; leadingBidAmt: ToField<"u64">; pointsPerSuiBidded: ToField<"u128">; historicalRecords: ToField<LinkedTable<"u64", ToPhantom<HistoricalRecord>>> }

export type EngagementScoresReified = Reified< EngagementScores, EngagementScoresFields >;

export class EngagementScores implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::EngagementScores`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = EngagementScores.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::EngagementScores`; readonly $typeArgs: []; readonly $isPhantom = EngagementScores.$isPhantom;

 readonly hiveGemsAvailable: ToField<HiveGems>; readonly hivePerAdSlot: ToField<"u64">; readonly beesAvailable: ToField<Balance<ToPhantom<BEE>>>; readonly beesPerAdSlot: ToField<"u64">; readonly ongoingPointsSum: ToField<"u128">; readonly userPointsScore: ToField<LinkedTable<"address", ToPhantom<ProfileScore>>>; readonly totalSuiBidded: ToField<"u64">; readonly leadingBidAmt: ToField<"u64">; readonly pointsPerSuiBidded: ToField<"u128">; readonly historicalRecords: ToField<LinkedTable<"u64", ToPhantom<HistoricalRecord>>>

 private constructor(typeArgs: [], fields: EngagementScoresFields, ) { this.$fullTypeName = composeSuiType( EngagementScores.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::EngagementScores`; this.$typeArgs = typeArgs;

 this.hiveGemsAvailable = fields.hiveGemsAvailable;; this.hivePerAdSlot = fields.hivePerAdSlot;; this.beesAvailable = fields.beesAvailable;; this.beesPerAdSlot = fields.beesPerAdSlot;; this.ongoingPointsSum = fields.ongoingPointsSum;; this.userPointsScore = fields.userPointsScore;; this.totalSuiBidded = fields.totalSuiBidded;; this.leadingBidAmt = fields.leadingBidAmt;; this.pointsPerSuiBidded = fields.pointsPerSuiBidded;; this.historicalRecords = fields.historicalRecords; }

 static reified( ): EngagementScoresReified { return { typeName: EngagementScores.$typeName, fullTypeName: composeSuiType( EngagementScores.$typeName, ...[] ) as `${typeof PKG_V1}::hive::EngagementScores`, typeArgs: [ ] as [], isPhantom: EngagementScores.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => EngagementScores.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => EngagementScores.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => EngagementScores.fromBcs( data, ), bcs: EngagementScores.bcs, fromJSONField: (field: any) => EngagementScores.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => EngagementScores.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => EngagementScores.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => EngagementScores.fetch( client, id, ), new: ( fields: EngagementScoresFields, ) => { return new EngagementScores( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return EngagementScores.reified() }

 static phantom( ): PhantomReified<ToTypeStr<EngagementScores>> { return phantom(EngagementScores.reified( )); } static get p() { return EngagementScores.phantom() }

 static get bcs() { return bcs.struct("EngagementScores", {

 hive_gems_available: HiveGems.bcs, hive_per_ad_slot: bcs.u64(), bees_available: Balance.bcs, bees_per_ad_slot: bcs.u64(), ongoing_points_sum: bcs.u128(), user_points_score: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), total_sui_bidded: bcs.u64(), leading_bid_amt: bcs.u64(), points_per_sui_bidded: bcs.u128(), historical_records: LinkedTable.bcs(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): EngagementScores { return EngagementScores.reified( ).new( { hiveGemsAvailable: decodeFromFields(HiveGems.reified(), fields.hive_gems_available), hivePerAdSlot: decodeFromFields("u64", fields.hive_per_ad_slot), beesAvailable: decodeFromFields(Balance.reified(reified.phantom(BEE.reified())), fields.bees_available), beesPerAdSlot: decodeFromFields("u64", fields.bees_per_ad_slot), ongoingPointsSum: decodeFromFields("u128", fields.ongoing_points_sum), userPointsScore: decodeFromFields(LinkedTable.reified("address", reified.phantom(ProfileScore.reified())), fields.user_points_score), totalSuiBidded: decodeFromFields("u64", fields.total_sui_bidded), leadingBidAmt: decodeFromFields("u64", fields.leading_bid_amt), pointsPerSuiBidded: decodeFromFields("u128", fields.points_per_sui_bidded), historicalRecords: decodeFromFields(LinkedTable.reified("u64", reified.phantom(HistoricalRecord.reified())), fields.historical_records) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): EngagementScores { if (!isEngagementScores(item.type)) { throw new Error("not a EngagementScores type");

 }

 return EngagementScores.reified( ).new( { hiveGemsAvailable: decodeFromFieldsWithTypes(HiveGems.reified(), item.fields.hive_gems_available), hivePerAdSlot: decodeFromFieldsWithTypes("u64", item.fields.hive_per_ad_slot), beesAvailable: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(BEE.reified())), item.fields.bees_available), beesPerAdSlot: decodeFromFieldsWithTypes("u64", item.fields.bees_per_ad_slot), ongoingPointsSum: decodeFromFieldsWithTypes("u128", item.fields.ongoing_points_sum), userPointsScore: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(ProfileScore.reified())), item.fields.user_points_score), totalSuiBidded: decodeFromFieldsWithTypes("u64", item.fields.total_sui_bidded), leadingBidAmt: decodeFromFieldsWithTypes("u64", item.fields.leading_bid_amt), pointsPerSuiBidded: decodeFromFieldsWithTypes("u128", item.fields.points_per_sui_bidded), historicalRecords: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(HistoricalRecord.reified())), item.fields.historical_records) } ) }

 static fromBcs( data: Uint8Array ): EngagementScores { return EngagementScores.fromFields( EngagementScores.bcs.parse(data) ) }

 toJSONField() { return {

 hiveGemsAvailable: this.hiveGemsAvailable.toJSONField(),hivePerAdSlot: this.hivePerAdSlot.toString(),beesAvailable: this.beesAvailable.toJSONField(),beesPerAdSlot: this.beesPerAdSlot.toString(),ongoingPointsSum: this.ongoingPointsSum.toString(),userPointsScore: this.userPointsScore.toJSONField(),totalSuiBidded: this.totalSuiBidded.toString(),leadingBidAmt: this.leadingBidAmt.toString(),pointsPerSuiBidded: this.pointsPerSuiBidded.toString(),historicalRecords: this.historicalRecords.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): EngagementScores { return EngagementScores.reified( ).new( { hiveGemsAvailable: decodeFromJSONField(HiveGems.reified(), field.hiveGemsAvailable), hivePerAdSlot: decodeFromJSONField("u64", field.hivePerAdSlot), beesAvailable: decodeFromJSONField(Balance.reified(reified.phantom(BEE.reified())), field.beesAvailable), beesPerAdSlot: decodeFromJSONField("u64", field.beesPerAdSlot), ongoingPointsSum: decodeFromJSONField("u128", field.ongoingPointsSum), userPointsScore: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(ProfileScore.reified())), field.userPointsScore), totalSuiBidded: decodeFromJSONField("u64", field.totalSuiBidded), leadingBidAmt: decodeFromJSONField("u64", field.leadingBidAmt), pointsPerSuiBidded: decodeFromJSONField("u128", field.pointsPerSuiBidded), historicalRecords: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(HistoricalRecord.reified())), field.historicalRecords) } ) }

 static fromJSON( json: Record<string, any> ): EngagementScores { if (json.$typeName !== EngagementScores.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return EngagementScores.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): EngagementScores { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEngagementScores(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a EngagementScores object`); } return EngagementScores.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<EngagementScores> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching EngagementScores object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEngagementScores(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a EngagementScores object`); }

 return EngagementScores.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HIVE =============================== */

export function isHIVE(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::HIVE`; }

export interface HIVEFields { dummyField: ToField<"bool"> }

export type HIVEReified = Reified< HIVE, HIVEFields >;

export class HIVE implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::HIVE`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HIVE.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::HIVE`; readonly $typeArgs: []; readonly $isPhantom = HIVE.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: HIVEFields, ) { this.$fullTypeName = composeSuiType( HIVE.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::HIVE`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): HIVEReified { return { typeName: HIVE.$typeName, fullTypeName: composeSuiType( HIVE.$typeName, ...[] ) as `${typeof PKG_V1}::hive::HIVE`, typeArgs: [ ] as [], isPhantom: HIVE.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HIVE.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HIVE.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HIVE.fromBcs( data, ), bcs: HIVE.bcs, fromJSONField: (field: any) => HIVE.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HIVE.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HIVE.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HIVE.fetch( client, id, ), new: ( fields: HIVEFields, ) => { return new HIVE( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HIVE.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HIVE>> { return phantom(HIVE.reified( )); } static get p() { return HIVE.phantom() }

 static get bcs() { return bcs.struct("HIVE", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): HIVE { return HIVE.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HIVE { if (!isHIVE(item.type)) { throw new Error("not a HIVE type");

 }

 return HIVE.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): HIVE { return HIVE.fromFields( HIVE.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HIVE { return HIVE.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): HIVE { if (json.$typeName !== HIVE.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HIVE.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HIVE { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHIVE(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HIVE object`); } return HIVE.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HIVE> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HIVE object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHIVE(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HIVE object`); }

 return HIVE.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HistoricalRecord =============================== */

export function isHistoricalRecord(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::HistoricalRecord`; }

export interface HistoricalRecordFields { hiveForParticipants: ToField<"u64">; beesForParticipants: ToField<"u64">; totalPointsSum: ToField<"u128">; pointsPerSuiBidded: ToField<"u256"> }

export type HistoricalRecordReified = Reified< HistoricalRecord, HistoricalRecordFields >;

export class HistoricalRecord implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::HistoricalRecord`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HistoricalRecord.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::HistoricalRecord`; readonly $typeArgs: []; readonly $isPhantom = HistoricalRecord.$isPhantom;

 readonly hiveForParticipants: ToField<"u64">; readonly beesForParticipants: ToField<"u64">; readonly totalPointsSum: ToField<"u128">; readonly pointsPerSuiBidded: ToField<"u256">

 private constructor(typeArgs: [], fields: HistoricalRecordFields, ) { this.$fullTypeName = composeSuiType( HistoricalRecord.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::HistoricalRecord`; this.$typeArgs = typeArgs;

 this.hiveForParticipants = fields.hiveForParticipants;; this.beesForParticipants = fields.beesForParticipants;; this.totalPointsSum = fields.totalPointsSum;; this.pointsPerSuiBidded = fields.pointsPerSuiBidded; }

 static reified( ): HistoricalRecordReified { return { typeName: HistoricalRecord.$typeName, fullTypeName: composeSuiType( HistoricalRecord.$typeName, ...[] ) as `${typeof PKG_V1}::hive::HistoricalRecord`, typeArgs: [ ] as [], isPhantom: HistoricalRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HistoricalRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HistoricalRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HistoricalRecord.fromBcs( data, ), bcs: HistoricalRecord.bcs, fromJSONField: (field: any) => HistoricalRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HistoricalRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HistoricalRecord.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HistoricalRecord.fetch( client, id, ), new: ( fields: HistoricalRecordFields, ) => { return new HistoricalRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HistoricalRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HistoricalRecord>> { return phantom(HistoricalRecord.reified( )); } static get p() { return HistoricalRecord.phantom() }

 static get bcs() { return bcs.struct("HistoricalRecord", {

 hive_for_participants: bcs.u64(), bees_for_participants: bcs.u64(), total_points_sum: bcs.u128(), points_per_sui_bidded: bcs.u256()

}) };

 static fromFields( fields: Record<string, any> ): HistoricalRecord { return HistoricalRecord.reified( ).new( { hiveForParticipants: decodeFromFields("u64", fields.hive_for_participants), beesForParticipants: decodeFromFields("u64", fields.bees_for_participants), totalPointsSum: decodeFromFields("u128", fields.total_points_sum), pointsPerSuiBidded: decodeFromFields("u256", fields.points_per_sui_bidded) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HistoricalRecord { if (!isHistoricalRecord(item.type)) { throw new Error("not a HistoricalRecord type");

 }

 return HistoricalRecord.reified( ).new( { hiveForParticipants: decodeFromFieldsWithTypes("u64", item.fields.hive_for_participants), beesForParticipants: decodeFromFieldsWithTypes("u64", item.fields.bees_for_participants), totalPointsSum: decodeFromFieldsWithTypes("u128", item.fields.total_points_sum), pointsPerSuiBidded: decodeFromFieldsWithTypes("u256", item.fields.points_per_sui_bidded) } ) }

 static fromBcs( data: Uint8Array ): HistoricalRecord { return HistoricalRecord.fromFields( HistoricalRecord.bcs.parse(data) ) }

 toJSONField() { return {

 hiveForParticipants: this.hiveForParticipants.toString(),beesForParticipants: this.beesForParticipants.toString(),totalPointsSum: this.totalPointsSum.toString(),pointsPerSuiBidded: this.pointsPerSuiBidded.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HistoricalRecord { return HistoricalRecord.reified( ).new( { hiveForParticipants: decodeFromJSONField("u64", field.hiveForParticipants), beesForParticipants: decodeFromJSONField("u64", field.beesForParticipants), totalPointsSum: decodeFromJSONField("u128", field.totalPointsSum), pointsPerSuiBidded: decodeFromJSONField("u256", field.pointsPerSuiBidded) } ) }

 static fromJSON( json: Record<string, any> ): HistoricalRecord { if (json.$typeName !== HistoricalRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HistoricalRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HistoricalRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHistoricalRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HistoricalRecord object`); } return HistoricalRecord.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HistoricalRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HistoricalRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHistoricalRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HistoricalRecord object`); }

 return HistoricalRecord.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveBuzz =============================== */

export function isHiveBuzz(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::hive::HiveBuzz` + '<'); }

export interface HiveBuzzFields<X extends PhantomTypeArgument> { buzz: ToField<String>; genAiUrl: ToField<Option<String>>; suiEarned: ToField<Balance<X>>; isChoosen: ToField<"bool">; upvotes: ToField<LinkedTable<"address", "bool">> }

export type HiveBuzzReified<X extends PhantomTypeArgument> = Reified< HiveBuzz<X>, HiveBuzzFields<X> >;

export class HiveBuzz<X extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::HiveBuzz`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = HiveBuzz.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::HiveBuzz<${PhantomToTypeStr<X>}>`; readonly $typeArgs: [PhantomToTypeStr<X>]; readonly $isPhantom = HiveBuzz.$isPhantom;

 readonly buzz: ToField<String>; readonly genAiUrl: ToField<Option<String>>; readonly suiEarned: ToField<Balance<X>>; readonly isChoosen: ToField<"bool">; readonly upvotes: ToField<LinkedTable<"address", "bool">>

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: HiveBuzzFields<X>, ) { this.$fullTypeName = composeSuiType( HiveBuzz.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::HiveBuzz<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.buzz = fields.buzz;; this.genAiUrl = fields.genAiUrl;; this.suiEarned = fields.suiEarned;; this.isChoosen = fields.isChoosen;; this.upvotes = fields.upvotes; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): HiveBuzzReified<ToPhantomTypeArgument<X>> { return { typeName: HiveBuzz.$typeName, fullTypeName: composeSuiType( HiveBuzz.$typeName, ...[extractType(X)] ) as `${typeof PKG_V1}::hive::HiveBuzz<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], isPhantom: HiveBuzz.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => HiveBuzz.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveBuzz.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => HiveBuzz.fromBcs( X, data, ), bcs: HiveBuzz.bcs, fromJSONField: (field: any) => HiveBuzz.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => HiveBuzz.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => HiveBuzz.fromSuiParsedData( X, content, ), fetch: async (client: SuiClient, id: string) => HiveBuzz.fetch( client, X, id, ), new: ( fields: HiveBuzzFields<ToPhantomTypeArgument<X>>, ) => { return new HiveBuzz( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveBuzz.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<HiveBuzz<ToPhantomTypeArgument<X>>>> { return phantom(HiveBuzz.reified( X )); } static get p() { return HiveBuzz.phantom }

 static get bcs() { return bcs.struct("HiveBuzz", {

 buzz: String.bcs, gen_ai_url: Option.bcs(String.bcs), sui_earned: Balance.bcs, is_choosen: bcs.bool(), upvotes: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): HiveBuzz<ToPhantomTypeArgument<X>> { return HiveBuzz.reified( typeArg, ).new( { buzz: decodeFromFields(String.reified(), fields.buzz), genAiUrl: decodeFromFields(Option.reified(String.reified()), fields.gen_ai_url), suiEarned: decodeFromFields(Balance.reified(typeArg), fields.sui_earned), isChoosen: decodeFromFields("bool", fields.is_choosen), upvotes: decodeFromFields(LinkedTable.reified("address", reified.phantom("bool")), fields.upvotes) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): HiveBuzz<ToPhantomTypeArgument<X>> { if (!isHiveBuzz(item.type)) { throw new Error("not a HiveBuzz type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return HiveBuzz.reified( typeArg, ).new( { buzz: decodeFromFieldsWithTypes(String.reified(), item.fields.buzz), genAiUrl: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.gen_ai_url), suiEarned: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.sui_earned), isChoosen: decodeFromFieldsWithTypes("bool", item.fields.is_choosen), upvotes: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("bool")), item.fields.upvotes) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): HiveBuzz<ToPhantomTypeArgument<X>> { return HiveBuzz.fromFields( typeArg, HiveBuzz.bcs.parse(data) ) }

 toJSONField() { return {

 buzz: this.buzz,genAiUrl: fieldToJSON<Option<String>>(`${Option.$typeName}<${String.$typeName}>`, this.genAiUrl),suiEarned: this.suiEarned.toJSONField(),isChoosen: this.isChoosen,upvotes: this.upvotes.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): HiveBuzz<ToPhantomTypeArgument<X>> { return HiveBuzz.reified( typeArg, ).new( { buzz: decodeFromJSONField(String.reified(), field.buzz), genAiUrl: decodeFromJSONField(Option.reified(String.reified()), field.genAiUrl), suiEarned: decodeFromJSONField(Balance.reified(typeArg), field.suiEarned), isChoosen: decodeFromJSONField("bool", field.isChoosen), upvotes: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("bool")), field.upvotes) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): HiveBuzz<ToPhantomTypeArgument<X>> { if (json.$typeName !== HiveBuzz.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(HiveBuzz.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return HiveBuzz.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): HiveBuzz<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveBuzz(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveBuzz object`); } return HiveBuzz.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<HiveBuzz<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveBuzz object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveBuzz(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveBuzz object`); }

 const gotTypeArgs = parseTypeName(res.data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return HiveBuzz.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveBuzzForAStreamBuzzKrafted =============================== */

export function isHiveBuzzForAStreamBuzzKrafted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::HiveBuzzForAStreamBuzzKrafted`; }

export interface HiveBuzzForAStreamBuzzKraftedFields { streamerProfile: ToField<"address">; streamIndex: ToField<"u64">; streamInnerIndex: ToField<"u64">; userProfile: ToField<"address">; username: ToField<String>; userBuzz: ToField<String>; genAiUrl: ToField<Option<String>>; hiveStreamedToStreamer: ToField<"u64"> }

export type HiveBuzzForAStreamBuzzKraftedReified = Reified< HiveBuzzForAStreamBuzzKrafted, HiveBuzzForAStreamBuzzKraftedFields >;

export class HiveBuzzForAStreamBuzzKrafted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::HiveBuzzForAStreamBuzzKrafted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveBuzzForAStreamBuzzKrafted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::HiveBuzzForAStreamBuzzKrafted`; readonly $typeArgs: []; readonly $isPhantom = HiveBuzzForAStreamBuzzKrafted.$isPhantom;

 readonly streamerProfile: ToField<"address">; readonly streamIndex: ToField<"u64">; readonly streamInnerIndex: ToField<"u64">; readonly userProfile: ToField<"address">; readonly username: ToField<String>; readonly userBuzz: ToField<String>; readonly genAiUrl: ToField<Option<String>>; readonly hiveStreamedToStreamer: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveBuzzForAStreamBuzzKraftedFields, ) { this.$fullTypeName = composeSuiType( HiveBuzzForAStreamBuzzKrafted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::HiveBuzzForAStreamBuzzKrafted`; this.$typeArgs = typeArgs;

 this.streamerProfile = fields.streamerProfile;; this.streamIndex = fields.streamIndex;; this.streamInnerIndex = fields.streamInnerIndex;; this.userProfile = fields.userProfile;; this.username = fields.username;; this.userBuzz = fields.userBuzz;; this.genAiUrl = fields.genAiUrl;; this.hiveStreamedToStreamer = fields.hiveStreamedToStreamer; }

 static reified( ): HiveBuzzForAStreamBuzzKraftedReified { return { typeName: HiveBuzzForAStreamBuzzKrafted.$typeName, fullTypeName: composeSuiType( HiveBuzzForAStreamBuzzKrafted.$typeName, ...[] ) as `${typeof PKG_V1}::hive::HiveBuzzForAStreamBuzzKrafted`, typeArgs: [ ] as [], isPhantom: HiveBuzzForAStreamBuzzKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveBuzzForAStreamBuzzKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveBuzzForAStreamBuzzKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveBuzzForAStreamBuzzKrafted.fromBcs( data, ), bcs: HiveBuzzForAStreamBuzzKrafted.bcs, fromJSONField: (field: any) => HiveBuzzForAStreamBuzzKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveBuzzForAStreamBuzzKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveBuzzForAStreamBuzzKrafted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveBuzzForAStreamBuzzKrafted.fetch( client, id, ), new: ( fields: HiveBuzzForAStreamBuzzKraftedFields, ) => { return new HiveBuzzForAStreamBuzzKrafted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveBuzzForAStreamBuzzKrafted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveBuzzForAStreamBuzzKrafted>> { return phantom(HiveBuzzForAStreamBuzzKrafted.reified( )); } static get p() { return HiveBuzzForAStreamBuzzKrafted.phantom() }

 static get bcs() { return bcs.struct("HiveBuzzForAStreamBuzzKrafted", {

 streamer_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), stream_index: bcs.u64(), stream_inner_index: bcs.u64(), user_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, user_buzz: String.bcs, gen_ai_url: Option.bcs(String.bcs), hive_streamed_to_streamer: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveBuzzForAStreamBuzzKrafted { return HiveBuzzForAStreamBuzzKrafted.reified( ).new( { streamerProfile: decodeFromFields("address", fields.streamer_profile), streamIndex: decodeFromFields("u64", fields.stream_index), streamInnerIndex: decodeFromFields("u64", fields.stream_inner_index), userProfile: decodeFromFields("address", fields.user_profile), username: decodeFromFields(String.reified(), fields.username), userBuzz: decodeFromFields(String.reified(), fields.user_buzz), genAiUrl: decodeFromFields(Option.reified(String.reified()), fields.gen_ai_url), hiveStreamedToStreamer: decodeFromFields("u64", fields.hive_streamed_to_streamer) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveBuzzForAStreamBuzzKrafted { if (!isHiveBuzzForAStreamBuzzKrafted(item.type)) { throw new Error("not a HiveBuzzForAStreamBuzzKrafted type");

 }

 return HiveBuzzForAStreamBuzzKrafted.reified( ).new( { streamerProfile: decodeFromFieldsWithTypes("address", item.fields.streamer_profile), streamIndex: decodeFromFieldsWithTypes("u64", item.fields.stream_index), streamInnerIndex: decodeFromFieldsWithTypes("u64", item.fields.stream_inner_index), userProfile: decodeFromFieldsWithTypes("address", item.fields.user_profile), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), userBuzz: decodeFromFieldsWithTypes(String.reified(), item.fields.user_buzz), genAiUrl: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.gen_ai_url), hiveStreamedToStreamer: decodeFromFieldsWithTypes("u64", item.fields.hive_streamed_to_streamer) } ) }

 static fromBcs( data: Uint8Array ): HiveBuzzForAStreamBuzzKrafted { return HiveBuzzForAStreamBuzzKrafted.fromFields( HiveBuzzForAStreamBuzzKrafted.bcs.parse(data) ) }

 toJSONField() { return {

 streamerProfile: this.streamerProfile,streamIndex: this.streamIndex.toString(),streamInnerIndex: this.streamInnerIndex.toString(),userProfile: this.userProfile,username: this.username,userBuzz: this.userBuzz,genAiUrl: fieldToJSON<Option<String>>(`${Option.$typeName}<${String.$typeName}>`, this.genAiUrl),hiveStreamedToStreamer: this.hiveStreamedToStreamer.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveBuzzForAStreamBuzzKrafted { return HiveBuzzForAStreamBuzzKrafted.reified( ).new( { streamerProfile: decodeFromJSONField("address", field.streamerProfile), streamIndex: decodeFromJSONField("u64", field.streamIndex), streamInnerIndex: decodeFromJSONField("u64", field.streamInnerIndex), userProfile: decodeFromJSONField("address", field.userProfile), username: decodeFromJSONField(String.reified(), field.username), userBuzz: decodeFromJSONField(String.reified(), field.userBuzz), genAiUrl: decodeFromJSONField(Option.reified(String.reified()), field.genAiUrl), hiveStreamedToStreamer: decodeFromJSONField("u64", field.hiveStreamedToStreamer) } ) }

 static fromJSON( json: Record<string, any> ): HiveBuzzForAStreamBuzzKrafted { if (json.$typeName !== HiveBuzzForAStreamBuzzKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveBuzzForAStreamBuzzKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveBuzzForAStreamBuzzKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveBuzzForAStreamBuzzKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveBuzzForAStreamBuzzKrafted object`); } return HiveBuzzForAStreamBuzzKrafted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveBuzzForAStreamBuzzKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveBuzzForAStreamBuzzKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveBuzzForAStreamBuzzKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveBuzzForAStreamBuzzKrafted object`); }

 return HiveBuzzForAStreamBuzzKrafted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveVault =============================== */

export function isHiveVault(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::HiveVault`; }

export interface HiveVaultFields { id: ToField<UID>; streamerProfile: ToField<HiveProfile>; gemsKraftCap: ToField<HiveGemKraftCap>; hiveKraftCap: ToField<TreasuryCap<ToPhantom<HIVE>>>; streamBuzzCap: ToField<HiveAppAccessCapability>; activeSupply: ToField<"u64"> }

export type HiveVaultReified = Reified< HiveVault, HiveVaultFields >;

export class HiveVault implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::HiveVault`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HiveVault.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::HiveVault`; readonly $typeArgs: []; readonly $isPhantom = HiveVault.$isPhantom;

 readonly id: ToField<UID>; readonly streamerProfile: ToField<HiveProfile>; readonly gemsKraftCap: ToField<HiveGemKraftCap>; readonly hiveKraftCap: ToField<TreasuryCap<ToPhantom<HIVE>>>; readonly streamBuzzCap: ToField<HiveAppAccessCapability>; readonly activeSupply: ToField<"u64">

 private constructor(typeArgs: [], fields: HiveVaultFields, ) { this.$fullTypeName = composeSuiType( HiveVault.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::HiveVault`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.streamerProfile = fields.streamerProfile;; this.gemsKraftCap = fields.gemsKraftCap;; this.hiveKraftCap = fields.hiveKraftCap;; this.streamBuzzCap = fields.streamBuzzCap;; this.activeSupply = fields.activeSupply; }

 static reified( ): HiveVaultReified { return { typeName: HiveVault.$typeName, fullTypeName: composeSuiType( HiveVault.$typeName, ...[] ) as `${typeof PKG_V1}::hive::HiveVault`, typeArgs: [ ] as [], isPhantom: HiveVault.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveVault.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveVault.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveVault.fromBcs( data, ), bcs: HiveVault.bcs, fromJSONField: (field: any) => HiveVault.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveVault.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveVault.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveVault.fetch( client, id, ), new: ( fields: HiveVaultFields, ) => { return new HiveVault( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveVault.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveVault>> { return phantom(HiveVault.reified( )); } static get p() { return HiveVault.phantom() }

 static get bcs() { return bcs.struct("HiveVault", {

 id: UID.bcs, streamer_profile: HiveProfile.bcs, gems_kraft_cap: HiveGemKraftCap.bcs, hive_kraft_cap: TreasuryCap.bcs, stream_buzz_cap: HiveAppAccessCapability.bcs, active_supply: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HiveVault { return HiveVault.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), streamerProfile: decodeFromFields(HiveProfile.reified(), fields.streamer_profile), gemsKraftCap: decodeFromFields(HiveGemKraftCap.reified(), fields.gems_kraft_cap), hiveKraftCap: decodeFromFields(TreasuryCap.reified(reified.phantom(HIVE.reified())), fields.hive_kraft_cap), streamBuzzCap: decodeFromFields(HiveAppAccessCapability.reified(), fields.stream_buzz_cap), activeSupply: decodeFromFields("u64", fields.active_supply) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveVault { if (!isHiveVault(item.type)) { throw new Error("not a HiveVault type");

 }

 return HiveVault.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), streamerProfile: decodeFromFieldsWithTypes(HiveProfile.reified(), item.fields.streamer_profile), gemsKraftCap: decodeFromFieldsWithTypes(HiveGemKraftCap.reified(), item.fields.gems_kraft_cap), hiveKraftCap: decodeFromFieldsWithTypes(TreasuryCap.reified(reified.phantom(HIVE.reified())), item.fields.hive_kraft_cap), streamBuzzCap: decodeFromFieldsWithTypes(HiveAppAccessCapability.reified(), item.fields.stream_buzz_cap), activeSupply: decodeFromFieldsWithTypes("u64", item.fields.active_supply) } ) }

 static fromBcs( data: Uint8Array ): HiveVault { return HiveVault.fromFields( HiveVault.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,streamerProfile: this.streamerProfile.toJSONField(),gemsKraftCap: this.gemsKraftCap.toJSONField(),hiveKraftCap: this.hiveKraftCap.toJSONField(),streamBuzzCap: this.streamBuzzCap.toJSONField(),activeSupply: this.activeSupply.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveVault { return HiveVault.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), streamerProfile: decodeFromJSONField(HiveProfile.reified(), field.streamerProfile), gemsKraftCap: decodeFromJSONField(HiveGemKraftCap.reified(), field.gemsKraftCap), hiveKraftCap: decodeFromJSONField(TreasuryCap.reified(reified.phantom(HIVE.reified())), field.hiveKraftCap), streamBuzzCap: decodeFromJSONField(HiveAppAccessCapability.reified(), field.streamBuzzCap), activeSupply: decodeFromJSONField("u64", field.activeSupply) } ) }

 static fromJSON( json: Record<string, any> ): HiveVault { if (json.$typeName !== HiveVault.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveVault.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveVault { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveVault(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveVault object`); } return HiveVault.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveVault> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveVault object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveVault(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveVault object`); }

 return HiveVault.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== KraftHive =============================== */

export function isKraftHive(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::KraftHive`; }

export interface KraftHiveFields { user: ToField<"address">; hiveKrafted: ToField<"u64"> }

export type KraftHiveReified = Reified< KraftHive, KraftHiveFields >;

export class KraftHive implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::KraftHive`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = KraftHive.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::KraftHive`; readonly $typeArgs: []; readonly $isPhantom = KraftHive.$isPhantom;

 readonly user: ToField<"address">; readonly hiveKrafted: ToField<"u64">

 private constructor(typeArgs: [], fields: KraftHiveFields, ) { this.$fullTypeName = composeSuiType( KraftHive.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::KraftHive`; this.$typeArgs = typeArgs;

 this.user = fields.user;; this.hiveKrafted = fields.hiveKrafted; }

 static reified( ): KraftHiveReified { return { typeName: KraftHive.$typeName, fullTypeName: composeSuiType( KraftHive.$typeName, ...[] ) as `${typeof PKG_V1}::hive::KraftHive`, typeArgs: [ ] as [], isPhantom: KraftHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => KraftHive.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => KraftHive.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => KraftHive.fromBcs( data, ), bcs: KraftHive.bcs, fromJSONField: (field: any) => KraftHive.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => KraftHive.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => KraftHive.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => KraftHive.fetch( client, id, ), new: ( fields: KraftHiveFields, ) => { return new KraftHive( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return KraftHive.reified() }

 static phantom( ): PhantomReified<ToTypeStr<KraftHive>> { return phantom(KraftHive.reified( )); } static get p() { return KraftHive.phantom() }

 static get bcs() { return bcs.struct("KraftHive", {

 user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), hive_krafted: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): KraftHive { return KraftHive.reified( ).new( { user: decodeFromFields("address", fields.user), hiveKrafted: decodeFromFields("u64", fields.hive_krafted) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): KraftHive { if (!isKraftHive(item.type)) { throw new Error("not a KraftHive type");

 }

 return KraftHive.reified( ).new( { user: decodeFromFieldsWithTypes("address", item.fields.user), hiveKrafted: decodeFromFieldsWithTypes("u64", item.fields.hive_krafted) } ) }

 static fromBcs( data: Uint8Array ): KraftHive { return KraftHive.fromFields( KraftHive.bcs.parse(data) ) }

 toJSONField() { return {

 user: this.user,hiveKrafted: this.hiveKrafted.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): KraftHive { return KraftHive.reified( ).new( { user: decodeFromJSONField("address", field.user), hiveKrafted: decodeFromJSONField("u64", field.hiveKrafted) } ) }

 static fromJSON( json: Record<string, any> ): KraftHive { if (json.$typeName !== KraftHive.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return KraftHive.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): KraftHive { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isKraftHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a KraftHive object`); } return KraftHive.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<KraftHive> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching KraftHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isKraftHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a KraftHive object`); }

 return KraftHive.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== LeadingBidsInfo =============================== */

export function isLeadingBidsInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::LeadingBidsInfo`; }

export interface LeadingBidsInfoFields { oProfileAddr: ToField<Option<"address">>; oBidAmt: ToField<"u64">; sProfileAddr: ToField<Option<"address">>; sBidAmt: ToField<"u64">; tProfileAddr: ToField<Option<"address">>; tBidAmt: ToField<"u64"> }

export type LeadingBidsInfoReified = Reified< LeadingBidsInfo, LeadingBidsInfoFields >;

export class LeadingBidsInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::LeadingBidsInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = LeadingBidsInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::LeadingBidsInfo`; readonly $typeArgs: []; readonly $isPhantom = LeadingBidsInfo.$isPhantom;

 readonly oProfileAddr: ToField<Option<"address">>; readonly oBidAmt: ToField<"u64">; readonly sProfileAddr: ToField<Option<"address">>; readonly sBidAmt: ToField<"u64">; readonly tProfileAddr: ToField<Option<"address">>; readonly tBidAmt: ToField<"u64">

 private constructor(typeArgs: [], fields: LeadingBidsInfoFields, ) { this.$fullTypeName = composeSuiType( LeadingBidsInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::LeadingBidsInfo`; this.$typeArgs = typeArgs;

 this.oProfileAddr = fields.oProfileAddr;; this.oBidAmt = fields.oBidAmt;; this.sProfileAddr = fields.sProfileAddr;; this.sBidAmt = fields.sBidAmt;; this.tProfileAddr = fields.tProfileAddr;; this.tBidAmt = fields.tBidAmt; }

 static reified( ): LeadingBidsInfoReified { return { typeName: LeadingBidsInfo.$typeName, fullTypeName: composeSuiType( LeadingBidsInfo.$typeName, ...[] ) as `${typeof PKG_V1}::hive::LeadingBidsInfo`, typeArgs: [ ] as [], isPhantom: LeadingBidsInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LeadingBidsInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LeadingBidsInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LeadingBidsInfo.fromBcs( data, ), bcs: LeadingBidsInfo.bcs, fromJSONField: (field: any) => LeadingBidsInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LeadingBidsInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LeadingBidsInfo.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => LeadingBidsInfo.fetch( client, id, ), new: ( fields: LeadingBidsInfoFields, ) => { return new LeadingBidsInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LeadingBidsInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LeadingBidsInfo>> { return phantom(LeadingBidsInfo.reified( )); } static get p() { return LeadingBidsInfo.phantom() }

 static get bcs() { return bcs.struct("LeadingBidsInfo", {

 o_profile_addr: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), o_bid_amt: bcs.u64(), s_profile_addr: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), s_bid_amt: bcs.u64(), t_profile_addr: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), t_bid_amt: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): LeadingBidsInfo { return LeadingBidsInfo.reified( ).new( { oProfileAddr: decodeFromFields(Option.reified("address"), fields.o_profile_addr), oBidAmt: decodeFromFields("u64", fields.o_bid_amt), sProfileAddr: decodeFromFields(Option.reified("address"), fields.s_profile_addr), sBidAmt: decodeFromFields("u64", fields.s_bid_amt), tProfileAddr: decodeFromFields(Option.reified("address"), fields.t_profile_addr), tBidAmt: decodeFromFields("u64", fields.t_bid_amt) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LeadingBidsInfo { if (!isLeadingBidsInfo(item.type)) { throw new Error("not a LeadingBidsInfo type");

 }

 return LeadingBidsInfo.reified( ).new( { oProfileAddr: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.o_profile_addr), oBidAmt: decodeFromFieldsWithTypes("u64", item.fields.o_bid_amt), sProfileAddr: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.s_profile_addr), sBidAmt: decodeFromFieldsWithTypes("u64", item.fields.s_bid_amt), tProfileAddr: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.t_profile_addr), tBidAmt: decodeFromFieldsWithTypes("u64", item.fields.t_bid_amt) } ) }

 static fromBcs( data: Uint8Array ): LeadingBidsInfo { return LeadingBidsInfo.fromFields( LeadingBidsInfo.bcs.parse(data) ) }

 toJSONField() { return {

 oProfileAddr: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.oProfileAddr),oBidAmt: this.oBidAmt.toString(),sProfileAddr: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.sProfileAddr),sBidAmt: this.sBidAmt.toString(),tProfileAddr: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.tProfileAddr),tBidAmt: this.tBidAmt.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LeadingBidsInfo { return LeadingBidsInfo.reified( ).new( { oProfileAddr: decodeFromJSONField(Option.reified("address"), field.oProfileAddr), oBidAmt: decodeFromJSONField("u64", field.oBidAmt), sProfileAddr: decodeFromJSONField(Option.reified("address"), field.sProfileAddr), sBidAmt: decodeFromJSONField("u64", field.sBidAmt), tProfileAddr: decodeFromJSONField(Option.reified("address"), field.tProfileAddr), tBidAmt: decodeFromJSONField("u64", field.tBidAmt) } ) }

 static fromJSON( json: Record<string, any> ): LeadingBidsInfo { if (json.$typeName !== LeadingBidsInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LeadingBidsInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LeadingBidsInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLeadingBidsInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LeadingBidsInfo object`); } return LeadingBidsInfo.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<LeadingBidsInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LeadingBidsInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLeadingBidsInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LeadingBidsInfo object`); }

 return LeadingBidsInfo.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== LeadingBidsUpdated =============================== */

export function isLeadingBidsUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::LeadingBidsUpdated`; }

export interface LeadingBidsUpdatedFields { rank1Profile: ToField<Option<"address">>; rank1BidAmt: ToField<"u64">; rank2Profile: ToField<Option<"address">>; rank2BidAmt: ToField<"u64">; rank3Profile: ToField<Option<"address">>; rank3BidAmt: ToField<"u64"> }

export type LeadingBidsUpdatedReified = Reified< LeadingBidsUpdated, LeadingBidsUpdatedFields >;

export class LeadingBidsUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::LeadingBidsUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = LeadingBidsUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::LeadingBidsUpdated`; readonly $typeArgs: []; readonly $isPhantom = LeadingBidsUpdated.$isPhantom;

 readonly rank1Profile: ToField<Option<"address">>; readonly rank1BidAmt: ToField<"u64">; readonly rank2Profile: ToField<Option<"address">>; readonly rank2BidAmt: ToField<"u64">; readonly rank3Profile: ToField<Option<"address">>; readonly rank3BidAmt: ToField<"u64">

 private constructor(typeArgs: [], fields: LeadingBidsUpdatedFields, ) { this.$fullTypeName = composeSuiType( LeadingBidsUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::LeadingBidsUpdated`; this.$typeArgs = typeArgs;

 this.rank1Profile = fields.rank1Profile;; this.rank1BidAmt = fields.rank1BidAmt;; this.rank2Profile = fields.rank2Profile;; this.rank2BidAmt = fields.rank2BidAmt;; this.rank3Profile = fields.rank3Profile;; this.rank3BidAmt = fields.rank3BidAmt; }

 static reified( ): LeadingBidsUpdatedReified { return { typeName: LeadingBidsUpdated.$typeName, fullTypeName: composeSuiType( LeadingBidsUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::hive::LeadingBidsUpdated`, typeArgs: [ ] as [], isPhantom: LeadingBidsUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LeadingBidsUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LeadingBidsUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LeadingBidsUpdated.fromBcs( data, ), bcs: LeadingBidsUpdated.bcs, fromJSONField: (field: any) => LeadingBidsUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LeadingBidsUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LeadingBidsUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => LeadingBidsUpdated.fetch( client, id, ), new: ( fields: LeadingBidsUpdatedFields, ) => { return new LeadingBidsUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LeadingBidsUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LeadingBidsUpdated>> { return phantom(LeadingBidsUpdated.reified( )); } static get p() { return LeadingBidsUpdated.phantom() }

 static get bcs() { return bcs.struct("LeadingBidsUpdated", {

 rank1_profile: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), rank1_bid_amt: bcs.u64(), rank2_profile: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), rank2_bid_amt: bcs.u64(), rank3_profile: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), rank3_bid_amt: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): LeadingBidsUpdated { return LeadingBidsUpdated.reified( ).new( { rank1Profile: decodeFromFields(Option.reified("address"), fields.rank1_profile), rank1BidAmt: decodeFromFields("u64", fields.rank1_bid_amt), rank2Profile: decodeFromFields(Option.reified("address"), fields.rank2_profile), rank2BidAmt: decodeFromFields("u64", fields.rank2_bid_amt), rank3Profile: decodeFromFields(Option.reified("address"), fields.rank3_profile), rank3BidAmt: decodeFromFields("u64", fields.rank3_bid_amt) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LeadingBidsUpdated { if (!isLeadingBidsUpdated(item.type)) { throw new Error("not a LeadingBidsUpdated type");

 }

 return LeadingBidsUpdated.reified( ).new( { rank1Profile: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.rank1_profile), rank1BidAmt: decodeFromFieldsWithTypes("u64", item.fields.rank1_bid_amt), rank2Profile: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.rank2_profile), rank2BidAmt: decodeFromFieldsWithTypes("u64", item.fields.rank2_bid_amt), rank3Profile: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.rank3_profile), rank3BidAmt: decodeFromFieldsWithTypes("u64", item.fields.rank3_bid_amt) } ) }

 static fromBcs( data: Uint8Array ): LeadingBidsUpdated { return LeadingBidsUpdated.fromFields( LeadingBidsUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 rank1Profile: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.rank1Profile),rank1BidAmt: this.rank1BidAmt.toString(),rank2Profile: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.rank2Profile),rank2BidAmt: this.rank2BidAmt.toString(),rank3Profile: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.rank3Profile),rank3BidAmt: this.rank3BidAmt.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LeadingBidsUpdated { return LeadingBidsUpdated.reified( ).new( { rank1Profile: decodeFromJSONField(Option.reified("address"), field.rank1Profile), rank1BidAmt: decodeFromJSONField("u64", field.rank1BidAmt), rank2Profile: decodeFromJSONField(Option.reified("address"), field.rank2Profile), rank2BidAmt: decodeFromJSONField("u64", field.rank2BidAmt), rank3Profile: decodeFromJSONField(Option.reified("address"), field.rank3Profile), rank3BidAmt: decodeFromJSONField("u64", field.rank3BidAmt) } ) }

 static fromJSON( json: Record<string, any> ): LeadingBidsUpdated { if (json.$typeName !== LeadingBidsUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LeadingBidsUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LeadingBidsUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLeadingBidsUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LeadingBidsUpdated object`); } return LeadingBidsUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<LeadingBidsUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LeadingBidsUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLeadingBidsUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LeadingBidsUpdated object`); }

 return LeadingBidsUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewStreamBuzzKrafted =============================== */

export function isNewStreamBuzzKrafted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::NewStreamBuzzKrafted`; }

export interface NewStreamBuzzKraftedFields { curAuctionStream: ToField<"u64">; streamerProfileAddr: ToField<"address">; streamerName: ToField<String>; buzz: ToField<String>; genAiUrl: ToField<Option<String>>; streamIndex: ToField<"u64">; index: ToField<"u64"> }

export type NewStreamBuzzKraftedReified = Reified< NewStreamBuzzKrafted, NewStreamBuzzKraftedFields >;

export class NewStreamBuzzKrafted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::NewStreamBuzzKrafted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = NewStreamBuzzKrafted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::NewStreamBuzzKrafted`; readonly $typeArgs: []; readonly $isPhantom = NewStreamBuzzKrafted.$isPhantom;

 readonly curAuctionStream: ToField<"u64">; readonly streamerProfileAddr: ToField<"address">; readonly streamerName: ToField<String>; readonly buzz: ToField<String>; readonly genAiUrl: ToField<Option<String>>; readonly streamIndex: ToField<"u64">; readonly index: ToField<"u64">

 private constructor(typeArgs: [], fields: NewStreamBuzzKraftedFields, ) { this.$fullTypeName = composeSuiType( NewStreamBuzzKrafted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::NewStreamBuzzKrafted`; this.$typeArgs = typeArgs;

 this.curAuctionStream = fields.curAuctionStream;; this.streamerProfileAddr = fields.streamerProfileAddr;; this.streamerName = fields.streamerName;; this.buzz = fields.buzz;; this.genAiUrl = fields.genAiUrl;; this.streamIndex = fields.streamIndex;; this.index = fields.index; }

 static reified( ): NewStreamBuzzKraftedReified { return { typeName: NewStreamBuzzKrafted.$typeName, fullTypeName: composeSuiType( NewStreamBuzzKrafted.$typeName, ...[] ) as `${typeof PKG_V1}::hive::NewStreamBuzzKrafted`, typeArgs: [ ] as [], isPhantom: NewStreamBuzzKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewStreamBuzzKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewStreamBuzzKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewStreamBuzzKrafted.fromBcs( data, ), bcs: NewStreamBuzzKrafted.bcs, fromJSONField: (field: any) => NewStreamBuzzKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewStreamBuzzKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewStreamBuzzKrafted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewStreamBuzzKrafted.fetch( client, id, ), new: ( fields: NewStreamBuzzKraftedFields, ) => { return new NewStreamBuzzKrafted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewStreamBuzzKrafted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewStreamBuzzKrafted>> { return phantom(NewStreamBuzzKrafted.reified( )); } static get p() { return NewStreamBuzzKrafted.phantom() }

 static get bcs() { return bcs.struct("NewStreamBuzzKrafted", {

 cur_auction_stream: bcs.u64(), streamer_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), streamer_name: String.bcs, buzz: String.bcs, gen_ai_url: Option.bcs(String.bcs), stream_index: bcs.u64(), index: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): NewStreamBuzzKrafted { return NewStreamBuzzKrafted.reified( ).new( { curAuctionStream: decodeFromFields("u64", fields.cur_auction_stream), streamerProfileAddr: decodeFromFields("address", fields.streamer_profile_addr), streamerName: decodeFromFields(String.reified(), fields.streamer_name), buzz: decodeFromFields(String.reified(), fields.buzz), genAiUrl: decodeFromFields(Option.reified(String.reified()), fields.gen_ai_url), streamIndex: decodeFromFields("u64", fields.stream_index), index: decodeFromFields("u64", fields.index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewStreamBuzzKrafted { if (!isNewStreamBuzzKrafted(item.type)) { throw new Error("not a NewStreamBuzzKrafted type");

 }

 return NewStreamBuzzKrafted.reified( ).new( { curAuctionStream: decodeFromFieldsWithTypes("u64", item.fields.cur_auction_stream), streamerProfileAddr: decodeFromFieldsWithTypes("address", item.fields.streamer_profile_addr), streamerName: decodeFromFieldsWithTypes(String.reified(), item.fields.streamer_name), buzz: decodeFromFieldsWithTypes(String.reified(), item.fields.buzz), genAiUrl: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.gen_ai_url), streamIndex: decodeFromFieldsWithTypes("u64", item.fields.stream_index), index: decodeFromFieldsWithTypes("u64", item.fields.index) } ) }

 static fromBcs( data: Uint8Array ): NewStreamBuzzKrafted { return NewStreamBuzzKrafted.fromFields( NewStreamBuzzKrafted.bcs.parse(data) ) }

 toJSONField() { return {

 curAuctionStream: this.curAuctionStream.toString(),streamerProfileAddr: this.streamerProfileAddr,streamerName: this.streamerName,buzz: this.buzz,genAiUrl: fieldToJSON<Option<String>>(`${Option.$typeName}<${String.$typeName}>`, this.genAiUrl),streamIndex: this.streamIndex.toString(),index: this.index.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewStreamBuzzKrafted { return NewStreamBuzzKrafted.reified( ).new( { curAuctionStream: decodeFromJSONField("u64", field.curAuctionStream), streamerProfileAddr: decodeFromJSONField("address", field.streamerProfileAddr), streamerName: decodeFromJSONField(String.reified(), field.streamerName), buzz: decodeFromJSONField(String.reified(), field.buzz), genAiUrl: decodeFromJSONField(Option.reified(String.reified()), field.genAiUrl), streamIndex: decodeFromJSONField("u64", field.streamIndex), index: decodeFromJSONField("u64", field.index) } ) }

 static fromJSON( json: Record<string, any> ): NewStreamBuzzKrafted { if (json.$typeName !== NewStreamBuzzKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewStreamBuzzKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewStreamBuzzKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewStreamBuzzKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewStreamBuzzKrafted object`); } return NewStreamBuzzKrafted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewStreamBuzzKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewStreamBuzzKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewStreamBuzzKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewStreamBuzzKrafted object`); }

 return NewStreamBuzzKrafted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewStreamInitiated =============================== */

export function isNewStreamInitiated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::NewStreamInitiated`; }

export interface NewStreamInitiatedFields { streamInitMs: ToField<"u64">; streamingFromEpoch: ToField<"u64">; hiveForParticipants: ToField<"u64">; beesForParticipants: ToField<"u64">; pointsPerSuiBidded: ToField<"u256">; totalPointsSum: ToField<"u128">; pointsForAllBids: ToField<"u128">; suiForPolFromBid: ToField<"u64"> }

export type NewStreamInitiatedReified = Reified< NewStreamInitiated, NewStreamInitiatedFields >;

export class NewStreamInitiated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::NewStreamInitiated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = NewStreamInitiated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::NewStreamInitiated`; readonly $typeArgs: []; readonly $isPhantom = NewStreamInitiated.$isPhantom;

 readonly streamInitMs: ToField<"u64">; readonly streamingFromEpoch: ToField<"u64">; readonly hiveForParticipants: ToField<"u64">; readonly beesForParticipants: ToField<"u64">; readonly pointsPerSuiBidded: ToField<"u256">; readonly totalPointsSum: ToField<"u128">; readonly pointsForAllBids: ToField<"u128">; readonly suiForPolFromBid: ToField<"u64">

 private constructor(typeArgs: [], fields: NewStreamInitiatedFields, ) { this.$fullTypeName = composeSuiType( NewStreamInitiated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::NewStreamInitiated`; this.$typeArgs = typeArgs;

 this.streamInitMs = fields.streamInitMs;; this.streamingFromEpoch = fields.streamingFromEpoch;; this.hiveForParticipants = fields.hiveForParticipants;; this.beesForParticipants = fields.beesForParticipants;; this.pointsPerSuiBidded = fields.pointsPerSuiBidded;; this.totalPointsSum = fields.totalPointsSum;; this.pointsForAllBids = fields.pointsForAllBids;; this.suiForPolFromBid = fields.suiForPolFromBid; }

 static reified( ): NewStreamInitiatedReified { return { typeName: NewStreamInitiated.$typeName, fullTypeName: composeSuiType( NewStreamInitiated.$typeName, ...[] ) as `${typeof PKG_V1}::hive::NewStreamInitiated`, typeArgs: [ ] as [], isPhantom: NewStreamInitiated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewStreamInitiated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewStreamInitiated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewStreamInitiated.fromBcs( data, ), bcs: NewStreamInitiated.bcs, fromJSONField: (field: any) => NewStreamInitiated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewStreamInitiated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewStreamInitiated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewStreamInitiated.fetch( client, id, ), new: ( fields: NewStreamInitiatedFields, ) => { return new NewStreamInitiated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewStreamInitiated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewStreamInitiated>> { return phantom(NewStreamInitiated.reified( )); } static get p() { return NewStreamInitiated.phantom() }

 static get bcs() { return bcs.struct("NewStreamInitiated", {

 stream_init_ms: bcs.u64(), streaming_from_epoch: bcs.u64(), hive_for_participants: bcs.u64(), bees_for_participants: bcs.u64(), points_per_sui_bidded: bcs.u256(), total_points_sum: bcs.u128(), points_for_all_bids: bcs.u128(), sui_for_pol_from_bid: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): NewStreamInitiated { return NewStreamInitiated.reified( ).new( { streamInitMs: decodeFromFields("u64", fields.stream_init_ms), streamingFromEpoch: decodeFromFields("u64", fields.streaming_from_epoch), hiveForParticipants: decodeFromFields("u64", fields.hive_for_participants), beesForParticipants: decodeFromFields("u64", fields.bees_for_participants), pointsPerSuiBidded: decodeFromFields("u256", fields.points_per_sui_bidded), totalPointsSum: decodeFromFields("u128", fields.total_points_sum), pointsForAllBids: decodeFromFields("u128", fields.points_for_all_bids), suiForPolFromBid: decodeFromFields("u64", fields.sui_for_pol_from_bid) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewStreamInitiated { if (!isNewStreamInitiated(item.type)) { throw new Error("not a NewStreamInitiated type");

 }

 return NewStreamInitiated.reified( ).new( { streamInitMs: decodeFromFieldsWithTypes("u64", item.fields.stream_init_ms), streamingFromEpoch: decodeFromFieldsWithTypes("u64", item.fields.streaming_from_epoch), hiveForParticipants: decodeFromFieldsWithTypes("u64", item.fields.hive_for_participants), beesForParticipants: decodeFromFieldsWithTypes("u64", item.fields.bees_for_participants), pointsPerSuiBidded: decodeFromFieldsWithTypes("u256", item.fields.points_per_sui_bidded), totalPointsSum: decodeFromFieldsWithTypes("u128", item.fields.total_points_sum), pointsForAllBids: decodeFromFieldsWithTypes("u128", item.fields.points_for_all_bids), suiForPolFromBid: decodeFromFieldsWithTypes("u64", item.fields.sui_for_pol_from_bid) } ) }

 static fromBcs( data: Uint8Array ): NewStreamInitiated { return NewStreamInitiated.fromFields( NewStreamInitiated.bcs.parse(data) ) }

 toJSONField() { return {

 streamInitMs: this.streamInitMs.toString(),streamingFromEpoch: this.streamingFromEpoch.toString(),hiveForParticipants: this.hiveForParticipants.toString(),beesForParticipants: this.beesForParticipants.toString(),pointsPerSuiBidded: this.pointsPerSuiBidded.toString(),totalPointsSum: this.totalPointsSum.toString(),pointsForAllBids: this.pointsForAllBids.toString(),suiForPolFromBid: this.suiForPolFromBid.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewStreamInitiated { return NewStreamInitiated.reified( ).new( { streamInitMs: decodeFromJSONField("u64", field.streamInitMs), streamingFromEpoch: decodeFromJSONField("u64", field.streamingFromEpoch), hiveForParticipants: decodeFromJSONField("u64", field.hiveForParticipants), beesForParticipants: decodeFromJSONField("u64", field.beesForParticipants), pointsPerSuiBidded: decodeFromJSONField("u256", field.pointsPerSuiBidded), totalPointsSum: decodeFromJSONField("u128", field.totalPointsSum), pointsForAllBids: decodeFromJSONField("u128", field.pointsForAllBids), suiForPolFromBid: decodeFromJSONField("u64", field.suiForPolFromBid) } ) }

 static fromJSON( json: Record<string, any> ): NewStreamInitiated { if (json.$typeName !== NewStreamInitiated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewStreamInitiated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewStreamInitiated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewStreamInitiated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewStreamInitiated object`); } return NewStreamInitiated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewStreamInitiated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewStreamInitiated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewStreamInitiated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewStreamInitiated object`); }

 return NewStreamInitiated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewStreamerForStream =============================== */

export function isNewStreamerForStream(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::NewStreamerForStream`; }

export interface NewStreamerForStreamFields { curAuctionStream: ToField<"u64">; rank: ToField<"u8">; profileAddr: ToField<"address">; username: ToField<String>; userAddress: ToField<"address">; accessType: ToField<"u8">; buzzCostInHive: ToField<"u64">; collectionName: ToField<String>; hiveRewards: ToField<"u64">; beeRewards: ToField<"u64"> }

export type NewStreamerForStreamReified = Reified< NewStreamerForStream, NewStreamerForStreamFields >;

export class NewStreamerForStream implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::NewStreamerForStream`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = NewStreamerForStream.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::NewStreamerForStream`; readonly $typeArgs: []; readonly $isPhantom = NewStreamerForStream.$isPhantom;

 readonly curAuctionStream: ToField<"u64">; readonly rank: ToField<"u8">; readonly profileAddr: ToField<"address">; readonly username: ToField<String>; readonly userAddress: ToField<"address">; readonly accessType: ToField<"u8">; readonly buzzCostInHive: ToField<"u64">; readonly collectionName: ToField<String>; readonly hiveRewards: ToField<"u64">; readonly beeRewards: ToField<"u64">

 private constructor(typeArgs: [], fields: NewStreamerForStreamFields, ) { this.$fullTypeName = composeSuiType( NewStreamerForStream.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::NewStreamerForStream`; this.$typeArgs = typeArgs;

 this.curAuctionStream = fields.curAuctionStream;; this.rank = fields.rank;; this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.userAddress = fields.userAddress;; this.accessType = fields.accessType;; this.buzzCostInHive = fields.buzzCostInHive;; this.collectionName = fields.collectionName;; this.hiveRewards = fields.hiveRewards;; this.beeRewards = fields.beeRewards; }

 static reified( ): NewStreamerForStreamReified { return { typeName: NewStreamerForStream.$typeName, fullTypeName: composeSuiType( NewStreamerForStream.$typeName, ...[] ) as `${typeof PKG_V1}::hive::NewStreamerForStream`, typeArgs: [ ] as [], isPhantom: NewStreamerForStream.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewStreamerForStream.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewStreamerForStream.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewStreamerForStream.fromBcs( data, ), bcs: NewStreamerForStream.bcs, fromJSONField: (field: any) => NewStreamerForStream.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewStreamerForStream.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewStreamerForStream.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewStreamerForStream.fetch( client, id, ), new: ( fields: NewStreamerForStreamFields, ) => { return new NewStreamerForStream( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewStreamerForStream.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewStreamerForStream>> { return phantom(NewStreamerForStream.reified( )); } static get p() { return NewStreamerForStream.phantom() }

 static get bcs() { return bcs.struct("NewStreamerForStream", {

 cur_auction_stream: bcs.u64(), rank: bcs.u8(), profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, user_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), access_type: bcs.u8(), buzz_cost_in_hive: bcs.u64(), collection_name: String.bcs, hive_rewards: bcs.u64(), bee_rewards: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): NewStreamerForStream { return NewStreamerForStream.reified( ).new( { curAuctionStream: decodeFromFields("u64", fields.cur_auction_stream), rank: decodeFromFields("u8", fields.rank), profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String.reified(), fields.username), userAddress: decodeFromFields("address", fields.user_address), accessType: decodeFromFields("u8", fields.access_type), buzzCostInHive: decodeFromFields("u64", fields.buzz_cost_in_hive), collectionName: decodeFromFields(String.reified(), fields.collection_name), hiveRewards: decodeFromFields("u64", fields.hive_rewards), beeRewards: decodeFromFields("u64", fields.bee_rewards) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewStreamerForStream { if (!isNewStreamerForStream(item.type)) { throw new Error("not a NewStreamerForStream type");

 }

 return NewStreamerForStream.reified( ).new( { curAuctionStream: decodeFromFieldsWithTypes("u64", item.fields.cur_auction_stream), rank: decodeFromFieldsWithTypes("u8", item.fields.rank), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), userAddress: decodeFromFieldsWithTypes("address", item.fields.user_address), accessType: decodeFromFieldsWithTypes("u8", item.fields.access_type), buzzCostInHive: decodeFromFieldsWithTypes("u64", item.fields.buzz_cost_in_hive), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name), hiveRewards: decodeFromFieldsWithTypes("u64", item.fields.hive_rewards), beeRewards: decodeFromFieldsWithTypes("u64", item.fields.bee_rewards) } ) }

 static fromBcs( data: Uint8Array ): NewStreamerForStream { return NewStreamerForStream.fromFields( NewStreamerForStream.bcs.parse(data) ) }

 toJSONField() { return {

 curAuctionStream: this.curAuctionStream.toString(),rank: this.rank,profileAddr: this.profileAddr,username: this.username,userAddress: this.userAddress,accessType: this.accessType,buzzCostInHive: this.buzzCostInHive.toString(),collectionName: this.collectionName,hiveRewards: this.hiveRewards.toString(),beeRewards: this.beeRewards.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewStreamerForStream { return NewStreamerForStream.reified( ).new( { curAuctionStream: decodeFromJSONField("u64", field.curAuctionStream), rank: decodeFromJSONField("u8", field.rank), profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String.reified(), field.username), userAddress: decodeFromJSONField("address", field.userAddress), accessType: decodeFromJSONField("u8", field.accessType), buzzCostInHive: decodeFromJSONField("u64", field.buzzCostInHive), collectionName: decodeFromJSONField(String.reified(), field.collectionName), hiveRewards: decodeFromJSONField("u64", field.hiveRewards), beeRewards: decodeFromJSONField("u64", field.beeRewards) } ) }

 static fromJSON( json: Record<string, any> ): NewStreamerForStream { if (json.$typeName !== NewStreamerForStream.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewStreamerForStream.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewStreamerForStream { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewStreamerForStream(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewStreamerForStream object`); } return NewStreamerForStream.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewStreamerForStream> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewStreamerForStream object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewStreamerForStream(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewStreamerForStream object`); }

 return NewStreamerForStream.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewStreamerNotFound =============================== */

export function isNewStreamerNotFound(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::NewStreamerNotFound`; }

export interface NewStreamerNotFoundFields { streamInitMs: ToField<"u64">; streamingFromEpoch: ToField<"u64"> }

export type NewStreamerNotFoundReified = Reified< NewStreamerNotFound, NewStreamerNotFoundFields >;

export class NewStreamerNotFound implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::NewStreamerNotFound`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = NewStreamerNotFound.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::NewStreamerNotFound`; readonly $typeArgs: []; readonly $isPhantom = NewStreamerNotFound.$isPhantom;

 readonly streamInitMs: ToField<"u64">; readonly streamingFromEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: NewStreamerNotFoundFields, ) { this.$fullTypeName = composeSuiType( NewStreamerNotFound.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::NewStreamerNotFound`; this.$typeArgs = typeArgs;

 this.streamInitMs = fields.streamInitMs;; this.streamingFromEpoch = fields.streamingFromEpoch; }

 static reified( ): NewStreamerNotFoundReified { return { typeName: NewStreamerNotFound.$typeName, fullTypeName: composeSuiType( NewStreamerNotFound.$typeName, ...[] ) as `${typeof PKG_V1}::hive::NewStreamerNotFound`, typeArgs: [ ] as [], isPhantom: NewStreamerNotFound.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewStreamerNotFound.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewStreamerNotFound.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewStreamerNotFound.fromBcs( data, ), bcs: NewStreamerNotFound.bcs, fromJSONField: (field: any) => NewStreamerNotFound.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewStreamerNotFound.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewStreamerNotFound.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewStreamerNotFound.fetch( client, id, ), new: ( fields: NewStreamerNotFoundFields, ) => { return new NewStreamerNotFound( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewStreamerNotFound.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewStreamerNotFound>> { return phantom(NewStreamerNotFound.reified( )); } static get p() { return NewStreamerNotFound.phantom() }

 static get bcs() { return bcs.struct("NewStreamerNotFound", {

 stream_init_ms: bcs.u64(), streaming_from_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): NewStreamerNotFound { return NewStreamerNotFound.reified( ).new( { streamInitMs: decodeFromFields("u64", fields.stream_init_ms), streamingFromEpoch: decodeFromFields("u64", fields.streaming_from_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewStreamerNotFound { if (!isNewStreamerNotFound(item.type)) { throw new Error("not a NewStreamerNotFound type");

 }

 return NewStreamerNotFound.reified( ).new( { streamInitMs: decodeFromFieldsWithTypes("u64", item.fields.stream_init_ms), streamingFromEpoch: decodeFromFieldsWithTypes("u64", item.fields.streaming_from_epoch) } ) }

 static fromBcs( data: Uint8Array ): NewStreamerNotFound { return NewStreamerNotFound.fromFields( NewStreamerNotFound.bcs.parse(data) ) }

 toJSONField() { return {

 streamInitMs: this.streamInitMs.toString(),streamingFromEpoch: this.streamingFromEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewStreamerNotFound { return NewStreamerNotFound.reified( ).new( { streamInitMs: decodeFromJSONField("u64", field.streamInitMs), streamingFromEpoch: decodeFromJSONField("u64", field.streamingFromEpoch) } ) }

 static fromJSON( json: Record<string, any> ): NewStreamerNotFound { if (json.$typeName !== NewStreamerNotFound.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewStreamerNotFound.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewStreamerNotFound { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewStreamerNotFound(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewStreamerNotFound object`); } return NewStreamerNotFound.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewStreamerNotFound> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewStreamerNotFound object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewStreamerNotFound(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewStreamerNotFound object`); }

 return NewStreamerNotFound.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ProfileScore =============================== */

export function isProfileScore(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::ProfileScore`; }

export interface ProfileScoreFields { streamEpoch: ToField<"u64">; points: ToField<"u64">; suiBidded: ToField<"u64">; flag: ToField<"bool">; buzzCostInHive: ToField<"u64">; accessType: ToField<"u8">; collectionName: ToField<String> }

export type ProfileScoreReified = Reified< ProfileScore, ProfileScoreFields >;

export class ProfileScore implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::ProfileScore`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ProfileScore.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::ProfileScore`; readonly $typeArgs: []; readonly $isPhantom = ProfileScore.$isPhantom;

 readonly streamEpoch: ToField<"u64">; readonly points: ToField<"u64">; readonly suiBidded: ToField<"u64">; readonly flag: ToField<"bool">; readonly buzzCostInHive: ToField<"u64">; readonly accessType: ToField<"u8">; readonly collectionName: ToField<String>

 private constructor(typeArgs: [], fields: ProfileScoreFields, ) { this.$fullTypeName = composeSuiType( ProfileScore.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::ProfileScore`; this.$typeArgs = typeArgs;

 this.streamEpoch = fields.streamEpoch;; this.points = fields.points;; this.suiBidded = fields.suiBidded;; this.flag = fields.flag;; this.buzzCostInHive = fields.buzzCostInHive;; this.accessType = fields.accessType;; this.collectionName = fields.collectionName; }

 static reified( ): ProfileScoreReified { return { typeName: ProfileScore.$typeName, fullTypeName: composeSuiType( ProfileScore.$typeName, ...[] ) as `${typeof PKG_V1}::hive::ProfileScore`, typeArgs: [ ] as [], isPhantom: ProfileScore.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ProfileScore.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProfileScore.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ProfileScore.fromBcs( data, ), bcs: ProfileScore.bcs, fromJSONField: (field: any) => ProfileScore.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ProfileScore.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ProfileScore.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ProfileScore.fetch( client, id, ), new: ( fields: ProfileScoreFields, ) => { return new ProfileScore( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ProfileScore.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ProfileScore>> { return phantom(ProfileScore.reified( )); } static get p() { return ProfileScore.phantom() }

 static get bcs() { return bcs.struct("ProfileScore", {

 stream_epoch: bcs.u64(), points: bcs.u64(), sui_bidded: bcs.u64(), flag: bcs.bool(), buzz_cost_in_hive: bcs.u64(), access_type: bcs.u8(), collection_name: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): ProfileScore { return ProfileScore.reified( ).new( { streamEpoch: decodeFromFields("u64", fields.stream_epoch), points: decodeFromFields("u64", fields.points), suiBidded: decodeFromFields("u64", fields.sui_bidded), flag: decodeFromFields("bool", fields.flag), buzzCostInHive: decodeFromFields("u64", fields.buzz_cost_in_hive), accessType: decodeFromFields("u8", fields.access_type), collectionName: decodeFromFields(String.reified(), fields.collection_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ProfileScore { if (!isProfileScore(item.type)) { throw new Error("not a ProfileScore type");

 }

 return ProfileScore.reified( ).new( { streamEpoch: decodeFromFieldsWithTypes("u64", item.fields.stream_epoch), points: decodeFromFieldsWithTypes("u64", item.fields.points), suiBidded: decodeFromFieldsWithTypes("u64", item.fields.sui_bidded), flag: decodeFromFieldsWithTypes("bool", item.fields.flag), buzzCostInHive: decodeFromFieldsWithTypes("u64", item.fields.buzz_cost_in_hive), accessType: decodeFromFieldsWithTypes("u8", item.fields.access_type), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name) } ) }

 static fromBcs( data: Uint8Array ): ProfileScore { return ProfileScore.fromFields( ProfileScore.bcs.parse(data) ) }

 toJSONField() { return {

 streamEpoch: this.streamEpoch.toString(),points: this.points.toString(),suiBidded: this.suiBidded.toString(),flag: this.flag,buzzCostInHive: this.buzzCostInHive.toString(),accessType: this.accessType,collectionName: this.collectionName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ProfileScore { return ProfileScore.reified( ).new( { streamEpoch: decodeFromJSONField("u64", field.streamEpoch), points: decodeFromJSONField("u64", field.points), suiBidded: decodeFromJSONField("u64", field.suiBidded), flag: decodeFromJSONField("bool", field.flag), buzzCostInHive: decodeFromJSONField("u64", field.buzzCostInHive), accessType: decodeFromJSONField("u8", field.accessType), collectionName: decodeFromJSONField(String.reified(), field.collectionName) } ) }

 static fromJSON( json: Record<string, any> ): ProfileScore { if (json.$typeName !== ProfileScore.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ProfileScore.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ProfileScore { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProfileScore(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ProfileScore object`); } return ProfileScore.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ProfileScore> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProfileScore object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProfileScore(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProfileScore object`); }

 return ProfileScore.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StreamBuzz =============================== */

export function isStreamBuzz(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::hive::StreamBuzz` + '<'); }

export interface StreamBuzzFields<X extends PhantomTypeArgument> { streamer: ToField<"address">; timestamp: ToField<"u64">; buzz: ToField<String>; genAiUrl: ToField<Option<String>>; likes: ToField<LinkedTable<"address", "bool">>; buzzes: ToField<LinkedTable<"address", ToPhantom<HiveBuzz<X>>>> }

export type StreamBuzzReified<X extends PhantomTypeArgument> = Reified< StreamBuzz<X>, StreamBuzzFields<X> >;

export class StreamBuzz<X extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::StreamBuzz`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = StreamBuzz.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::StreamBuzz<${PhantomToTypeStr<X>}>`; readonly $typeArgs: [PhantomToTypeStr<X>]; readonly $isPhantom = StreamBuzz.$isPhantom;

 readonly streamer: ToField<"address">; readonly timestamp: ToField<"u64">; readonly buzz: ToField<String>; readonly genAiUrl: ToField<Option<String>>; readonly likes: ToField<LinkedTable<"address", "bool">>; readonly buzzes: ToField<LinkedTable<"address", ToPhantom<HiveBuzz<X>>>>

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: StreamBuzzFields<X>, ) { this.$fullTypeName = composeSuiType( StreamBuzz.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::StreamBuzz<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.streamer = fields.streamer;; this.timestamp = fields.timestamp;; this.buzz = fields.buzz;; this.genAiUrl = fields.genAiUrl;; this.likes = fields.likes;; this.buzzes = fields.buzzes; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): StreamBuzzReified<ToPhantomTypeArgument<X>> { return { typeName: StreamBuzz.$typeName, fullTypeName: composeSuiType( StreamBuzz.$typeName, ...[extractType(X)] ) as `${typeof PKG_V1}::hive::StreamBuzz<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], isPhantom: StreamBuzz.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => StreamBuzz.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StreamBuzz.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => StreamBuzz.fromBcs( X, data, ), bcs: StreamBuzz.bcs, fromJSONField: (field: any) => StreamBuzz.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => StreamBuzz.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => StreamBuzz.fromSuiParsedData( X, content, ), fetch: async (client: SuiClient, id: string) => StreamBuzz.fetch( client, X, id, ), new: ( fields: StreamBuzzFields<ToPhantomTypeArgument<X>>, ) => { return new StreamBuzz( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return StreamBuzz.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<StreamBuzz<ToPhantomTypeArgument<X>>>> { return phantom(StreamBuzz.reified( X )); } static get p() { return StreamBuzz.phantom }

 static get bcs() { return bcs.struct("StreamBuzz", {

 streamer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), timestamp: bcs.u64(), buzz: String.bcs, gen_ai_url: Option.bcs(String.bcs), likes: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), buzzes: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): StreamBuzz<ToPhantomTypeArgument<X>> { return StreamBuzz.reified( typeArg, ).new( { streamer: decodeFromFields("address", fields.streamer), timestamp: decodeFromFields("u64", fields.timestamp), buzz: decodeFromFields(String.reified(), fields.buzz), genAiUrl: decodeFromFields(Option.reified(String.reified()), fields.gen_ai_url), likes: decodeFromFields(LinkedTable.reified("address", reified.phantom("bool")), fields.likes), buzzes: decodeFromFields(LinkedTable.reified("address", reified.phantom(HiveBuzz.reified(typeArg))), fields.buzzes) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): StreamBuzz<ToPhantomTypeArgument<X>> { if (!isStreamBuzz(item.type)) { throw new Error("not a StreamBuzz type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return StreamBuzz.reified( typeArg, ).new( { streamer: decodeFromFieldsWithTypes("address", item.fields.streamer), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp), buzz: decodeFromFieldsWithTypes(String.reified(), item.fields.buzz), genAiUrl: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.gen_ai_url), likes: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("bool")), item.fields.likes), buzzes: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(HiveBuzz.reified(typeArg))), item.fields.buzzes) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): StreamBuzz<ToPhantomTypeArgument<X>> { return StreamBuzz.fromFields( typeArg, StreamBuzz.bcs.parse(data) ) }

 toJSONField() { return {

 streamer: this.streamer,timestamp: this.timestamp.toString(),buzz: this.buzz,genAiUrl: fieldToJSON<Option<String>>(`${Option.$typeName}<${String.$typeName}>`, this.genAiUrl),likes: this.likes.toJSONField(),buzzes: this.buzzes.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): StreamBuzz<ToPhantomTypeArgument<X>> { return StreamBuzz.reified( typeArg, ).new( { streamer: decodeFromJSONField("address", field.streamer), timestamp: decodeFromJSONField("u64", field.timestamp), buzz: decodeFromJSONField(String.reified(), field.buzz), genAiUrl: decodeFromJSONField(Option.reified(String.reified()), field.genAiUrl), likes: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("bool")), field.likes), buzzes: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(HiveBuzz.reified(typeArg))), field.buzzes) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): StreamBuzz<ToPhantomTypeArgument<X>> { if (json.$typeName !== StreamBuzz.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(StreamBuzz.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return StreamBuzz.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): StreamBuzz<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStreamBuzz(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StreamBuzz object`); } return StreamBuzz.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<StreamBuzz<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StreamBuzz object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStreamBuzz(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StreamBuzz object`); }

 const gotTypeArgs = parseTypeName(res.data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return StreamBuzz.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StreamBuzzesConfigUpdated =============================== */

export function isStreamBuzzesConfigUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::StreamBuzzesConfigUpdated`; }

export interface StreamBuzzesConfigUpdatedFields { areLive: ToField<"bool">; hivePerAdSlot: ToField<"u64">; beesPerAdSlot: ToField<"u64">; taxOnBid: ToField<"u64">; curAuctionStream: ToField<"u64">; winningBidPoints: ToField<"u64">; newBuzzesCount: ToField<"u64">; firstRankAssetsLimit: ToField<"u64">; secondRankAssetsLimit: ToField<"u64">; thirdRankAssetsLimit: ToField<"u64">; maxStreamsToStore: ToField<"u64"> }

export type StreamBuzzesConfigUpdatedReified = Reified< StreamBuzzesConfigUpdated, StreamBuzzesConfigUpdatedFields >;

export class StreamBuzzesConfigUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::StreamBuzzesConfigUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StreamBuzzesConfigUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::StreamBuzzesConfigUpdated`; readonly $typeArgs: []; readonly $isPhantom = StreamBuzzesConfigUpdated.$isPhantom;

 readonly areLive: ToField<"bool">; readonly hivePerAdSlot: ToField<"u64">; readonly beesPerAdSlot: ToField<"u64">; readonly taxOnBid: ToField<"u64">; readonly curAuctionStream: ToField<"u64">; readonly winningBidPoints: ToField<"u64">; readonly newBuzzesCount: ToField<"u64">; readonly firstRankAssetsLimit: ToField<"u64">; readonly secondRankAssetsLimit: ToField<"u64">; readonly thirdRankAssetsLimit: ToField<"u64">; readonly maxStreamsToStore: ToField<"u64">

 private constructor(typeArgs: [], fields: StreamBuzzesConfigUpdatedFields, ) { this.$fullTypeName = composeSuiType( StreamBuzzesConfigUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::StreamBuzzesConfigUpdated`; this.$typeArgs = typeArgs;

 this.areLive = fields.areLive;; this.hivePerAdSlot = fields.hivePerAdSlot;; this.beesPerAdSlot = fields.beesPerAdSlot;; this.taxOnBid = fields.taxOnBid;; this.curAuctionStream = fields.curAuctionStream;; this.winningBidPoints = fields.winningBidPoints;; this.newBuzzesCount = fields.newBuzzesCount;; this.firstRankAssetsLimit = fields.firstRankAssetsLimit;; this.secondRankAssetsLimit = fields.secondRankAssetsLimit;; this.thirdRankAssetsLimit = fields.thirdRankAssetsLimit;; this.maxStreamsToStore = fields.maxStreamsToStore; }

 static reified( ): StreamBuzzesConfigUpdatedReified { return { typeName: StreamBuzzesConfigUpdated.$typeName, fullTypeName: composeSuiType( StreamBuzzesConfigUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::hive::StreamBuzzesConfigUpdated`, typeArgs: [ ] as [], isPhantom: StreamBuzzesConfigUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StreamBuzzesConfigUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StreamBuzzesConfigUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StreamBuzzesConfigUpdated.fromBcs( data, ), bcs: StreamBuzzesConfigUpdated.bcs, fromJSONField: (field: any) => StreamBuzzesConfigUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StreamBuzzesConfigUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StreamBuzzesConfigUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StreamBuzzesConfigUpdated.fetch( client, id, ), new: ( fields: StreamBuzzesConfigUpdatedFields, ) => { return new StreamBuzzesConfigUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StreamBuzzesConfigUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StreamBuzzesConfigUpdated>> { return phantom(StreamBuzzesConfigUpdated.reified( )); } static get p() { return StreamBuzzesConfigUpdated.phantom() }

 static get bcs() { return bcs.struct("StreamBuzzesConfigUpdated", {

 are_live: bcs.bool(), hive_per_ad_slot: bcs.u64(), bees_per_ad_slot: bcs.u64(), tax_on_bid: bcs.u64(), cur_auction_stream: bcs.u64(), winning_bid_points: bcs.u64(), new_buzzes_count: bcs.u64(), first_rank_assets_limit: bcs.u64(), second_rank_assets_limit: bcs.u64(), third_rank_assets_limit: bcs.u64(), max_streams_to_store: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StreamBuzzesConfigUpdated { return StreamBuzzesConfigUpdated.reified( ).new( { areLive: decodeFromFields("bool", fields.are_live), hivePerAdSlot: decodeFromFields("u64", fields.hive_per_ad_slot), beesPerAdSlot: decodeFromFields("u64", fields.bees_per_ad_slot), taxOnBid: decodeFromFields("u64", fields.tax_on_bid), curAuctionStream: decodeFromFields("u64", fields.cur_auction_stream), winningBidPoints: decodeFromFields("u64", fields.winning_bid_points), newBuzzesCount: decodeFromFields("u64", fields.new_buzzes_count), firstRankAssetsLimit: decodeFromFields("u64", fields.first_rank_assets_limit), secondRankAssetsLimit: decodeFromFields("u64", fields.second_rank_assets_limit), thirdRankAssetsLimit: decodeFromFields("u64", fields.third_rank_assets_limit), maxStreamsToStore: decodeFromFields("u64", fields.max_streams_to_store) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StreamBuzzesConfigUpdated { if (!isStreamBuzzesConfigUpdated(item.type)) { throw new Error("not a StreamBuzzesConfigUpdated type");

 }

 return StreamBuzzesConfigUpdated.reified( ).new( { areLive: decodeFromFieldsWithTypes("bool", item.fields.are_live), hivePerAdSlot: decodeFromFieldsWithTypes("u64", item.fields.hive_per_ad_slot), beesPerAdSlot: decodeFromFieldsWithTypes("u64", item.fields.bees_per_ad_slot), taxOnBid: decodeFromFieldsWithTypes("u64", item.fields.tax_on_bid), curAuctionStream: decodeFromFieldsWithTypes("u64", item.fields.cur_auction_stream), winningBidPoints: decodeFromFieldsWithTypes("u64", item.fields.winning_bid_points), newBuzzesCount: decodeFromFieldsWithTypes("u64", item.fields.new_buzzes_count), firstRankAssetsLimit: decodeFromFieldsWithTypes("u64", item.fields.first_rank_assets_limit), secondRankAssetsLimit: decodeFromFieldsWithTypes("u64", item.fields.second_rank_assets_limit), thirdRankAssetsLimit: decodeFromFieldsWithTypes("u64", item.fields.third_rank_assets_limit), maxStreamsToStore: decodeFromFieldsWithTypes("u64", item.fields.max_streams_to_store) } ) }

 static fromBcs( data: Uint8Array ): StreamBuzzesConfigUpdated { return StreamBuzzesConfigUpdated.fromFields( StreamBuzzesConfigUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 areLive: this.areLive,hivePerAdSlot: this.hivePerAdSlot.toString(),beesPerAdSlot: this.beesPerAdSlot.toString(),taxOnBid: this.taxOnBid.toString(),curAuctionStream: this.curAuctionStream.toString(),winningBidPoints: this.winningBidPoints.toString(),newBuzzesCount: this.newBuzzesCount.toString(),firstRankAssetsLimit: this.firstRankAssetsLimit.toString(),secondRankAssetsLimit: this.secondRankAssetsLimit.toString(),thirdRankAssetsLimit: this.thirdRankAssetsLimit.toString(),maxStreamsToStore: this.maxStreamsToStore.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StreamBuzzesConfigUpdated { return StreamBuzzesConfigUpdated.reified( ).new( { areLive: decodeFromJSONField("bool", field.areLive), hivePerAdSlot: decodeFromJSONField("u64", field.hivePerAdSlot), beesPerAdSlot: decodeFromJSONField("u64", field.beesPerAdSlot), taxOnBid: decodeFromJSONField("u64", field.taxOnBid), curAuctionStream: decodeFromJSONField("u64", field.curAuctionStream), winningBidPoints: decodeFromJSONField("u64", field.winningBidPoints), newBuzzesCount: decodeFromJSONField("u64", field.newBuzzesCount), firstRankAssetsLimit: decodeFromJSONField("u64", field.firstRankAssetsLimit), secondRankAssetsLimit: decodeFromJSONField("u64", field.secondRankAssetsLimit), thirdRankAssetsLimit: decodeFromJSONField("u64", field.thirdRankAssetsLimit), maxStreamsToStore: decodeFromJSONField("u64", field.maxStreamsToStore) } ) }

 static fromJSON( json: Record<string, any> ): StreamBuzzesConfigUpdated { if (json.$typeName !== StreamBuzzesConfigUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StreamBuzzesConfigUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StreamBuzzesConfigUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStreamBuzzesConfigUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StreamBuzzesConfigUpdated object`); } return StreamBuzzesConfigUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StreamBuzzesConfigUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StreamBuzzesConfigUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStreamBuzzesConfigUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StreamBuzzesConfigUpdated object`); }

 return StreamBuzzesConfigUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StreamDeleted =============================== */

export function isStreamDeleted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::StreamDeleted`; }

export interface StreamDeletedFields { streamIndex: ToField<"u64">; streamLength: ToField<"u64"> }

export type StreamDeletedReified = Reified< StreamDeleted, StreamDeletedFields >;

export class StreamDeleted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::StreamDeleted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StreamDeleted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::StreamDeleted`; readonly $typeArgs: []; readonly $isPhantom = StreamDeleted.$isPhantom;

 readonly streamIndex: ToField<"u64">; readonly streamLength: ToField<"u64">

 private constructor(typeArgs: [], fields: StreamDeletedFields, ) { this.$fullTypeName = composeSuiType( StreamDeleted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::StreamDeleted`; this.$typeArgs = typeArgs;

 this.streamIndex = fields.streamIndex;; this.streamLength = fields.streamLength; }

 static reified( ): StreamDeletedReified { return { typeName: StreamDeleted.$typeName, fullTypeName: composeSuiType( StreamDeleted.$typeName, ...[] ) as `${typeof PKG_V1}::hive::StreamDeleted`, typeArgs: [ ] as [], isPhantom: StreamDeleted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StreamDeleted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StreamDeleted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StreamDeleted.fromBcs( data, ), bcs: StreamDeleted.bcs, fromJSONField: (field: any) => StreamDeleted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StreamDeleted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StreamDeleted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StreamDeleted.fetch( client, id, ), new: ( fields: StreamDeletedFields, ) => { return new StreamDeleted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StreamDeleted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StreamDeleted>> { return phantom(StreamDeleted.reified( )); } static get p() { return StreamDeleted.phantom() }

 static get bcs() { return bcs.struct("StreamDeleted", {

 stream_index: bcs.u64(), stream_length: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StreamDeleted { return StreamDeleted.reified( ).new( { streamIndex: decodeFromFields("u64", fields.stream_index), streamLength: decodeFromFields("u64", fields.stream_length) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StreamDeleted { if (!isStreamDeleted(item.type)) { throw new Error("not a StreamDeleted type");

 }

 return StreamDeleted.reified( ).new( { streamIndex: decodeFromFieldsWithTypes("u64", item.fields.stream_index), streamLength: decodeFromFieldsWithTypes("u64", item.fields.stream_length) } ) }

 static fromBcs( data: Uint8Array ): StreamDeleted { return StreamDeleted.fromFields( StreamDeleted.bcs.parse(data) ) }

 toJSONField() { return {

 streamIndex: this.streamIndex.toString(),streamLength: this.streamLength.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StreamDeleted { return StreamDeleted.reified( ).new( { streamIndex: decodeFromJSONField("u64", field.streamIndex), streamLength: decodeFromJSONField("u64", field.streamLength) } ) }

 static fromJSON( json: Record<string, any> ): StreamDeleted { if (json.$typeName !== StreamDeleted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StreamDeleted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StreamDeleted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStreamDeleted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StreamDeleted object`); } return StreamDeleted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StreamDeleted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StreamDeleted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStreamDeleted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StreamDeleted object`); }

 return StreamDeleted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StreamPointsFinalizedForProfile =============================== */

export function isStreamPointsFinalizedForProfile(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::StreamPointsFinalizedForProfile`; }

export interface StreamPointsFinalizedForProfileFields { profileAddr: ToField<"address">; username: ToField<String>; fromStream: ToField<"u64">; points: ToField<"u64">; pointsFromBid: ToField<"u64">; totalPoints: ToField<"u64">; hiveEarned: ToField<"u64">; beesEarned: ToField<"u64">; curEpoch: ToField<"u64"> }

export type StreamPointsFinalizedForProfileReified = Reified< StreamPointsFinalizedForProfile, StreamPointsFinalizedForProfileFields >;

export class StreamPointsFinalizedForProfile implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::StreamPointsFinalizedForProfile`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StreamPointsFinalizedForProfile.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::StreamPointsFinalizedForProfile`; readonly $typeArgs: []; readonly $isPhantom = StreamPointsFinalizedForProfile.$isPhantom;

 readonly profileAddr: ToField<"address">; readonly username: ToField<String>; readonly fromStream: ToField<"u64">; readonly points: ToField<"u64">; readonly pointsFromBid: ToField<"u64">; readonly totalPoints: ToField<"u64">; readonly hiveEarned: ToField<"u64">; readonly beesEarned: ToField<"u64">; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: StreamPointsFinalizedForProfileFields, ) { this.$fullTypeName = composeSuiType( StreamPointsFinalizedForProfile.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::StreamPointsFinalizedForProfile`; this.$typeArgs = typeArgs;

 this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.fromStream = fields.fromStream;; this.points = fields.points;; this.pointsFromBid = fields.pointsFromBid;; this.totalPoints = fields.totalPoints;; this.hiveEarned = fields.hiveEarned;; this.beesEarned = fields.beesEarned;; this.curEpoch = fields.curEpoch; }

 static reified( ): StreamPointsFinalizedForProfileReified { return { typeName: StreamPointsFinalizedForProfile.$typeName, fullTypeName: composeSuiType( StreamPointsFinalizedForProfile.$typeName, ...[] ) as `${typeof PKG_V1}::hive::StreamPointsFinalizedForProfile`, typeArgs: [ ] as [], isPhantom: StreamPointsFinalizedForProfile.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StreamPointsFinalizedForProfile.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StreamPointsFinalizedForProfile.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StreamPointsFinalizedForProfile.fromBcs( data, ), bcs: StreamPointsFinalizedForProfile.bcs, fromJSONField: (field: any) => StreamPointsFinalizedForProfile.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StreamPointsFinalizedForProfile.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StreamPointsFinalizedForProfile.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StreamPointsFinalizedForProfile.fetch( client, id, ), new: ( fields: StreamPointsFinalizedForProfileFields, ) => { return new StreamPointsFinalizedForProfile( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StreamPointsFinalizedForProfile.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StreamPointsFinalizedForProfile>> { return phantom(StreamPointsFinalizedForProfile.reified( )); } static get p() { return StreamPointsFinalizedForProfile.phantom() }

 static get bcs() { return bcs.struct("StreamPointsFinalizedForProfile", {

 profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, from_stream: bcs.u64(), points: bcs.u64(), points_from_bid: bcs.u64(), total_points: bcs.u64(), hive_earned: bcs.u64(), bees_earned: bcs.u64(), cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StreamPointsFinalizedForProfile { return StreamPointsFinalizedForProfile.reified( ).new( { profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String.reified(), fields.username), fromStream: decodeFromFields("u64", fields.from_stream), points: decodeFromFields("u64", fields.points), pointsFromBid: decodeFromFields("u64", fields.points_from_bid), totalPoints: decodeFromFields("u64", fields.total_points), hiveEarned: decodeFromFields("u64", fields.hive_earned), beesEarned: decodeFromFields("u64", fields.bees_earned), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StreamPointsFinalizedForProfile { if (!isStreamPointsFinalizedForProfile(item.type)) { throw new Error("not a StreamPointsFinalizedForProfile type");

 }

 return StreamPointsFinalizedForProfile.reified( ).new( { profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), fromStream: decodeFromFieldsWithTypes("u64", item.fields.from_stream), points: decodeFromFieldsWithTypes("u64", item.fields.points), pointsFromBid: decodeFromFieldsWithTypes("u64", item.fields.points_from_bid), totalPoints: decodeFromFieldsWithTypes("u64", item.fields.total_points), hiveEarned: decodeFromFieldsWithTypes("u64", item.fields.hive_earned), beesEarned: decodeFromFieldsWithTypes("u64", item.fields.bees_earned), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): StreamPointsFinalizedForProfile { return StreamPointsFinalizedForProfile.fromFields( StreamPointsFinalizedForProfile.bcs.parse(data) ) }

 toJSONField() { return {

 profileAddr: this.profileAddr,username: this.username,fromStream: this.fromStream.toString(),points: this.points.toString(),pointsFromBid: this.pointsFromBid.toString(),totalPoints: this.totalPoints.toString(),hiveEarned: this.hiveEarned.toString(),beesEarned: this.beesEarned.toString(),curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StreamPointsFinalizedForProfile { return StreamPointsFinalizedForProfile.reified( ).new( { profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String.reified(), field.username), fromStream: decodeFromJSONField("u64", field.fromStream), points: decodeFromJSONField("u64", field.points), pointsFromBid: decodeFromJSONField("u64", field.pointsFromBid), totalPoints: decodeFromJSONField("u64", field.totalPoints), hiveEarned: decodeFromJSONField("u64", field.hiveEarned), beesEarned: decodeFromJSONField("u64", field.beesEarned), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): StreamPointsFinalizedForProfile { if (json.$typeName !== StreamPointsFinalizedForProfile.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StreamPointsFinalizedForProfile.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StreamPointsFinalizedForProfile { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStreamPointsFinalizedForProfile(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StreamPointsFinalizedForProfile object`); } return StreamPointsFinalizedForProfile.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StreamPointsFinalizedForProfile> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StreamPointsFinalizedForProfile object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStreamPointsFinalizedForProfile(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StreamPointsFinalizedForProfile object`); }

 return StreamPointsFinalizedForProfile.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StreamerBuzzes =============================== */

export function isStreamerBuzzes(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::hive::StreamerBuzzes` + '<'); }

export interface StreamerBuzzesFields<X extends PhantomTypeArgument> { id: ToField<UID>; areLive: ToField<"bool">; config: ToField<StreamerConfig>; curAuctionStream: ToField<"u64">; streamInitMs: ToField<"u64">; streamerBuzzes: ToField<LinkedTable<"u64", ToPhantom<Vector<StreamBuzz<X>>>>>; streamersInfo: ToField<CurrentStreamersInfo>; suiForStream: ToField<Balance<X>>; engagementScores: ToField<EngagementScores>; bidPool: ToField<Balance<X>>; leadingBids: ToField<LeadingBidsInfo>; suiAvailForPol: ToField<Balance<X>>; isIncrementing: ToField<"bool"> }

export type StreamerBuzzesReified<X extends PhantomTypeArgument> = Reified< StreamerBuzzes<X>, StreamerBuzzesFields<X> >;

export class StreamerBuzzes<X extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::StreamerBuzzes`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = StreamerBuzzes.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::StreamerBuzzes<${PhantomToTypeStr<X>}>`; readonly $typeArgs: [PhantomToTypeStr<X>]; readonly $isPhantom = StreamerBuzzes.$isPhantom;

 readonly id: ToField<UID>; readonly areLive: ToField<"bool">; readonly config: ToField<StreamerConfig>; readonly curAuctionStream: ToField<"u64">; readonly streamInitMs: ToField<"u64">; readonly streamerBuzzes: ToField<LinkedTable<"u64", ToPhantom<Vector<StreamBuzz<X>>>>>; readonly streamersInfo: ToField<CurrentStreamersInfo>; readonly suiForStream: ToField<Balance<X>>; readonly engagementScores: ToField<EngagementScores>; readonly bidPool: ToField<Balance<X>>; readonly leadingBids: ToField<LeadingBidsInfo>; readonly suiAvailForPol: ToField<Balance<X>>; readonly isIncrementing: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: StreamerBuzzesFields<X>, ) { this.$fullTypeName = composeSuiType( StreamerBuzzes.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::StreamerBuzzes<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.areLive = fields.areLive;; this.config = fields.config;; this.curAuctionStream = fields.curAuctionStream;; this.streamInitMs = fields.streamInitMs;; this.streamerBuzzes = fields.streamerBuzzes;; this.streamersInfo = fields.streamersInfo;; this.suiForStream = fields.suiForStream;; this.engagementScores = fields.engagementScores;; this.bidPool = fields.bidPool;; this.leadingBids = fields.leadingBids;; this.suiAvailForPol = fields.suiAvailForPol;; this.isIncrementing = fields.isIncrementing; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): StreamerBuzzesReified<ToPhantomTypeArgument<X>> { return { typeName: StreamerBuzzes.$typeName, fullTypeName: composeSuiType( StreamerBuzzes.$typeName, ...[extractType(X)] ) as `${typeof PKG_V1}::hive::StreamerBuzzes<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], isPhantom: StreamerBuzzes.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => StreamerBuzzes.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StreamerBuzzes.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => StreamerBuzzes.fromBcs( X, data, ), bcs: StreamerBuzzes.bcs, fromJSONField: (field: any) => StreamerBuzzes.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => StreamerBuzzes.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => StreamerBuzzes.fromSuiParsedData( X, content, ), fetch: async (client: SuiClient, id: string) => StreamerBuzzes.fetch( client, X, id, ), new: ( fields: StreamerBuzzesFields<ToPhantomTypeArgument<X>>, ) => { return new StreamerBuzzes( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return StreamerBuzzes.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<StreamerBuzzes<ToPhantomTypeArgument<X>>>> { return phantom(StreamerBuzzes.reified( X )); } static get p() { return StreamerBuzzes.phantom }

 static get bcs() { return bcs.struct("StreamerBuzzes", {

 id: UID.bcs, are_live: bcs.bool(), config: StreamerConfig.bcs, cur_auction_stream: bcs.u64(), stream_init_ms: bcs.u64(), streamer_buzzes: LinkedTable.bcs(bcs.u64()), streamers_info: CurrentStreamersInfo.bcs, sui_for_stream: Balance.bcs, engagement_scores: EngagementScores.bcs, bid_pool: Balance.bcs, leading_bids: LeadingBidsInfo.bcs, sui_avail_for_pol: Balance.bcs, is_incrementing: bcs.bool()

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): StreamerBuzzes<ToPhantomTypeArgument<X>> { return StreamerBuzzes.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), areLive: decodeFromFields("bool", fields.are_live), config: decodeFromFields(StreamerConfig.reified(), fields.config), curAuctionStream: decodeFromFields("u64", fields.cur_auction_stream), streamInitMs: decodeFromFields("u64", fields.stream_init_ms), streamerBuzzes: decodeFromFields(LinkedTable.reified("u64", reified.phantom(reified.vector(StreamBuzz.reified(typeArg)))), fields.streamer_buzzes), streamersInfo: decodeFromFields(CurrentStreamersInfo.reified(), fields.streamers_info), suiForStream: decodeFromFields(Balance.reified(typeArg), fields.sui_for_stream), engagementScores: decodeFromFields(EngagementScores.reified(), fields.engagement_scores), bidPool: decodeFromFields(Balance.reified(typeArg), fields.bid_pool), leadingBids: decodeFromFields(LeadingBidsInfo.reified(), fields.leading_bids), suiAvailForPol: decodeFromFields(Balance.reified(typeArg), fields.sui_avail_for_pol), isIncrementing: decodeFromFields("bool", fields.is_incrementing) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): StreamerBuzzes<ToPhantomTypeArgument<X>> { if (!isStreamerBuzzes(item.type)) { throw new Error("not a StreamerBuzzes type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return StreamerBuzzes.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), areLive: decodeFromFieldsWithTypes("bool", item.fields.are_live), config: decodeFromFieldsWithTypes(StreamerConfig.reified(), item.fields.config), curAuctionStream: decodeFromFieldsWithTypes("u64", item.fields.cur_auction_stream), streamInitMs: decodeFromFieldsWithTypes("u64", item.fields.stream_init_ms), streamerBuzzes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(reified.vector(StreamBuzz.reified(typeArg)))), item.fields.streamer_buzzes), streamersInfo: decodeFromFieldsWithTypes(CurrentStreamersInfo.reified(), item.fields.streamers_info), suiForStream: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.sui_for_stream), engagementScores: decodeFromFieldsWithTypes(EngagementScores.reified(), item.fields.engagement_scores), bidPool: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.bid_pool), leadingBids: decodeFromFieldsWithTypes(LeadingBidsInfo.reified(), item.fields.leading_bids), suiAvailForPol: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.sui_avail_for_pol), isIncrementing: decodeFromFieldsWithTypes("bool", item.fields.is_incrementing) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): StreamerBuzzes<ToPhantomTypeArgument<X>> { return StreamerBuzzes.fromFields( typeArg, StreamerBuzzes.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,areLive: this.areLive,config: this.config.toJSONField(),curAuctionStream: this.curAuctionStream.toString(),streamInitMs: this.streamInitMs.toString(),streamerBuzzes: this.streamerBuzzes.toJSONField(),streamersInfo: this.streamersInfo.toJSONField(),suiForStream: this.suiForStream.toJSONField(),engagementScores: this.engagementScores.toJSONField(),bidPool: this.bidPool.toJSONField(),leadingBids: this.leadingBids.toJSONField(),suiAvailForPol: this.suiAvailForPol.toJSONField(),isIncrementing: this.isIncrementing,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): StreamerBuzzes<ToPhantomTypeArgument<X>> { return StreamerBuzzes.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), areLive: decodeFromJSONField("bool", field.areLive), config: decodeFromJSONField(StreamerConfig.reified(), field.config), curAuctionStream: decodeFromJSONField("u64", field.curAuctionStream), streamInitMs: decodeFromJSONField("u64", field.streamInitMs), streamerBuzzes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(reified.vector(StreamBuzz.reified(typeArg)))), field.streamerBuzzes), streamersInfo: decodeFromJSONField(CurrentStreamersInfo.reified(), field.streamersInfo), suiForStream: decodeFromJSONField(Balance.reified(typeArg), field.suiForStream), engagementScores: decodeFromJSONField(EngagementScores.reified(), field.engagementScores), bidPool: decodeFromJSONField(Balance.reified(typeArg), field.bidPool), leadingBids: decodeFromJSONField(LeadingBidsInfo.reified(), field.leadingBids), suiAvailForPol: decodeFromJSONField(Balance.reified(typeArg), field.suiAvailForPol), isIncrementing: decodeFromJSONField("bool", field.isIncrementing) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): StreamerBuzzes<ToPhantomTypeArgument<X>> { if (json.$typeName !== StreamerBuzzes.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(StreamerBuzzes.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return StreamerBuzzes.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): StreamerBuzzes<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStreamerBuzzes(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StreamerBuzzes object`); } return StreamerBuzzes.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<StreamerBuzzes<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StreamerBuzzes object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStreamerBuzzes(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StreamerBuzzes object`); }

 const gotTypeArgs = parseTypeName(res.data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return StreamerBuzzes.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StreamerConfig =============================== */

export function isStreamerConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::StreamerConfig`; }

export interface StreamerConfigFields { choosenBuzzesCount: ToField<"u64">; winningBidPoints: ToField<"u64">; firstRankAssetsLimit: ToField<"u64">; secondRankAssetsLimit: ToField<"u64">; thirdRankAssetsLimit: ToField<"u64">; maxStreamsToStore: ToField<"u64">; minBidLimit: ToField<"u64">; taxOnBid: ToField<"u64"> }

export type StreamerConfigReified = Reified< StreamerConfig, StreamerConfigFields >;

export class StreamerConfig implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::StreamerConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StreamerConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::StreamerConfig`; readonly $typeArgs: []; readonly $isPhantom = StreamerConfig.$isPhantom;

 readonly choosenBuzzesCount: ToField<"u64">; readonly winningBidPoints: ToField<"u64">; readonly firstRankAssetsLimit: ToField<"u64">; readonly secondRankAssetsLimit: ToField<"u64">; readonly thirdRankAssetsLimit: ToField<"u64">; readonly maxStreamsToStore: ToField<"u64">; readonly minBidLimit: ToField<"u64">; readonly taxOnBid: ToField<"u64">

 private constructor(typeArgs: [], fields: StreamerConfigFields, ) { this.$fullTypeName = composeSuiType( StreamerConfig.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::StreamerConfig`; this.$typeArgs = typeArgs;

 this.choosenBuzzesCount = fields.choosenBuzzesCount;; this.winningBidPoints = fields.winningBidPoints;; this.firstRankAssetsLimit = fields.firstRankAssetsLimit;; this.secondRankAssetsLimit = fields.secondRankAssetsLimit;; this.thirdRankAssetsLimit = fields.thirdRankAssetsLimit;; this.maxStreamsToStore = fields.maxStreamsToStore;; this.minBidLimit = fields.minBidLimit;; this.taxOnBid = fields.taxOnBid; }

 static reified( ): StreamerConfigReified { return { typeName: StreamerConfig.$typeName, fullTypeName: composeSuiType( StreamerConfig.$typeName, ...[] ) as `${typeof PKG_V1}::hive::StreamerConfig`, typeArgs: [ ] as [], isPhantom: StreamerConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StreamerConfig.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StreamerConfig.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StreamerConfig.fromBcs( data, ), bcs: StreamerConfig.bcs, fromJSONField: (field: any) => StreamerConfig.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StreamerConfig.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StreamerConfig.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StreamerConfig.fetch( client, id, ), new: ( fields: StreamerConfigFields, ) => { return new StreamerConfig( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StreamerConfig.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StreamerConfig>> { return phantom(StreamerConfig.reified( )); } static get p() { return StreamerConfig.phantom() }

 static get bcs() { return bcs.struct("StreamerConfig", {

 choosen_buzzes_count: bcs.u64(), winning_bid_points: bcs.u64(), first_rank_assets_limit: bcs.u64(), second_rank_assets_limit: bcs.u64(), third_rank_assets_limit: bcs.u64(), max_streams_to_store: bcs.u64(), min_bid_limit: bcs.u64(), tax_on_bid: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StreamerConfig { return StreamerConfig.reified( ).new( { choosenBuzzesCount: decodeFromFields("u64", fields.choosen_buzzes_count), winningBidPoints: decodeFromFields("u64", fields.winning_bid_points), firstRankAssetsLimit: decodeFromFields("u64", fields.first_rank_assets_limit), secondRankAssetsLimit: decodeFromFields("u64", fields.second_rank_assets_limit), thirdRankAssetsLimit: decodeFromFields("u64", fields.third_rank_assets_limit), maxStreamsToStore: decodeFromFields("u64", fields.max_streams_to_store), minBidLimit: decodeFromFields("u64", fields.min_bid_limit), taxOnBid: decodeFromFields("u64", fields.tax_on_bid) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StreamerConfig { if (!isStreamerConfig(item.type)) { throw new Error("not a StreamerConfig type");

 }

 return StreamerConfig.reified( ).new( { choosenBuzzesCount: decodeFromFieldsWithTypes("u64", item.fields.choosen_buzzes_count), winningBidPoints: decodeFromFieldsWithTypes("u64", item.fields.winning_bid_points), firstRankAssetsLimit: decodeFromFieldsWithTypes("u64", item.fields.first_rank_assets_limit), secondRankAssetsLimit: decodeFromFieldsWithTypes("u64", item.fields.second_rank_assets_limit), thirdRankAssetsLimit: decodeFromFieldsWithTypes("u64", item.fields.third_rank_assets_limit), maxStreamsToStore: decodeFromFieldsWithTypes("u64", item.fields.max_streams_to_store), minBidLimit: decodeFromFieldsWithTypes("u64", item.fields.min_bid_limit), taxOnBid: decodeFromFieldsWithTypes("u64", item.fields.tax_on_bid) } ) }

 static fromBcs( data: Uint8Array ): StreamerConfig { return StreamerConfig.fromFields( StreamerConfig.bcs.parse(data) ) }

 toJSONField() { return {

 choosenBuzzesCount: this.choosenBuzzesCount.toString(),winningBidPoints: this.winningBidPoints.toString(),firstRankAssetsLimit: this.firstRankAssetsLimit.toString(),secondRankAssetsLimit: this.secondRankAssetsLimit.toString(),thirdRankAssetsLimit: this.thirdRankAssetsLimit.toString(),maxStreamsToStore: this.maxStreamsToStore.toString(),minBidLimit: this.minBidLimit.toString(),taxOnBid: this.taxOnBid.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StreamerConfig { return StreamerConfig.reified( ).new( { choosenBuzzesCount: decodeFromJSONField("u64", field.choosenBuzzesCount), winningBidPoints: decodeFromJSONField("u64", field.winningBidPoints), firstRankAssetsLimit: decodeFromJSONField("u64", field.firstRankAssetsLimit), secondRankAssetsLimit: decodeFromJSONField("u64", field.secondRankAssetsLimit), thirdRankAssetsLimit: decodeFromJSONField("u64", field.thirdRankAssetsLimit), maxStreamsToStore: decodeFromJSONField("u64", field.maxStreamsToStore), minBidLimit: decodeFromJSONField("u64", field.minBidLimit), taxOnBid: decodeFromJSONField("u64", field.taxOnBid) } ) }

 static fromJSON( json: Record<string, any> ): StreamerConfig { if (json.$typeName !== StreamerConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StreamerConfig.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StreamerConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStreamerConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StreamerConfig object`); } return StreamerConfig.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StreamerConfig> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StreamerConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStreamerConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StreamerConfig object`); }

 return StreamerConfig.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StreamerInfo =============================== */

export function isStreamerInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::StreamerInfo`; }

export interface StreamerInfoFields { streamerName: ToField<Option<String>>; streamsCount: ToField<"u64">; accessType: ToField<"u8">; suiPerBuzz: ToField<"u64">; buzzCostInHive: ToField<"u64">; remainingBuzzesCount: ToField<"u64">; engagementPoints: ToField<"u128">; collectionName: ToField<String> }

export type StreamerInfoReified = Reified< StreamerInfo, StreamerInfoFields >;

export class StreamerInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::StreamerInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StreamerInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::StreamerInfo`; readonly $typeArgs: []; readonly $isPhantom = StreamerInfo.$isPhantom;

 readonly streamerName: ToField<Option<String>>; readonly streamsCount: ToField<"u64">; readonly accessType: ToField<"u8">; readonly suiPerBuzz: ToField<"u64">; readonly buzzCostInHive: ToField<"u64">; readonly remainingBuzzesCount: ToField<"u64">; readonly engagementPoints: ToField<"u128">; readonly collectionName: ToField<String>

 private constructor(typeArgs: [], fields: StreamerInfoFields, ) { this.$fullTypeName = composeSuiType( StreamerInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::StreamerInfo`; this.$typeArgs = typeArgs;

 this.streamerName = fields.streamerName;; this.streamsCount = fields.streamsCount;; this.accessType = fields.accessType;; this.suiPerBuzz = fields.suiPerBuzz;; this.buzzCostInHive = fields.buzzCostInHive;; this.remainingBuzzesCount = fields.remainingBuzzesCount;; this.engagementPoints = fields.engagementPoints;; this.collectionName = fields.collectionName; }

 static reified( ): StreamerInfoReified { return { typeName: StreamerInfo.$typeName, fullTypeName: composeSuiType( StreamerInfo.$typeName, ...[] ) as `${typeof PKG_V1}::hive::StreamerInfo`, typeArgs: [ ] as [], isPhantom: StreamerInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StreamerInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StreamerInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StreamerInfo.fromBcs( data, ), bcs: StreamerInfo.bcs, fromJSONField: (field: any) => StreamerInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StreamerInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StreamerInfo.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StreamerInfo.fetch( client, id, ), new: ( fields: StreamerInfoFields, ) => { return new StreamerInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StreamerInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StreamerInfo>> { return phantom(StreamerInfo.reified( )); } static get p() { return StreamerInfo.phantom() }

 static get bcs() { return bcs.struct("StreamerInfo", {

 streamer_name: Option.bcs(String.bcs), streams_count: bcs.u64(), access_type: bcs.u8(), sui_per_buzz: bcs.u64(), buzz_cost_in_hive: bcs.u64(), remaining_buzzes_count: bcs.u64(), engagement_points: bcs.u128(), collection_name: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): StreamerInfo { return StreamerInfo.reified( ).new( { streamerName: decodeFromFields(Option.reified(String.reified()), fields.streamer_name), streamsCount: decodeFromFields("u64", fields.streams_count), accessType: decodeFromFields("u8", fields.access_type), suiPerBuzz: decodeFromFields("u64", fields.sui_per_buzz), buzzCostInHive: decodeFromFields("u64", fields.buzz_cost_in_hive), remainingBuzzesCount: decodeFromFields("u64", fields.remaining_buzzes_count), engagementPoints: decodeFromFields("u128", fields.engagement_points), collectionName: decodeFromFields(String.reified(), fields.collection_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StreamerInfo { if (!isStreamerInfo(item.type)) { throw new Error("not a StreamerInfo type");

 }

 return StreamerInfo.reified( ).new( { streamerName: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.streamer_name), streamsCount: decodeFromFieldsWithTypes("u64", item.fields.streams_count), accessType: decodeFromFieldsWithTypes("u8", item.fields.access_type), suiPerBuzz: decodeFromFieldsWithTypes("u64", item.fields.sui_per_buzz), buzzCostInHive: decodeFromFieldsWithTypes("u64", item.fields.buzz_cost_in_hive), remainingBuzzesCount: decodeFromFieldsWithTypes("u64", item.fields.remaining_buzzes_count), engagementPoints: decodeFromFieldsWithTypes("u128", item.fields.engagement_points), collectionName: decodeFromFieldsWithTypes(String.reified(), item.fields.collection_name) } ) }

 static fromBcs( data: Uint8Array ): StreamerInfo { return StreamerInfo.fromFields( StreamerInfo.bcs.parse(data) ) }

 toJSONField() { return {

 streamerName: fieldToJSON<Option<String>>(`${Option.$typeName}<${String.$typeName}>`, this.streamerName),streamsCount: this.streamsCount.toString(),accessType: this.accessType,suiPerBuzz: this.suiPerBuzz.toString(),buzzCostInHive: this.buzzCostInHive.toString(),remainingBuzzesCount: this.remainingBuzzesCount.toString(),engagementPoints: this.engagementPoints.toString(),collectionName: this.collectionName,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StreamerInfo { return StreamerInfo.reified( ).new( { streamerName: decodeFromJSONField(Option.reified(String.reified()), field.streamerName), streamsCount: decodeFromJSONField("u64", field.streamsCount), accessType: decodeFromJSONField("u8", field.accessType), suiPerBuzz: decodeFromJSONField("u64", field.suiPerBuzz), buzzCostInHive: decodeFromJSONField("u64", field.buzzCostInHive), remainingBuzzesCount: decodeFromJSONField("u64", field.remainingBuzzesCount), engagementPoints: decodeFromJSONField("u128", field.engagementPoints), collectionName: decodeFromJSONField(String.reified(), field.collectionName) } ) }

 static fromJSON( json: Record<string, any> ): StreamerInfo { if (json.$typeName !== StreamerInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StreamerInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StreamerInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStreamerInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StreamerInfo object`); } return StreamerInfo.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StreamerInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StreamerInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStreamerInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StreamerInfo object`); }

 return StreamerInfo.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StreamerNotFoundForStream =============================== */

export function isStreamerNotFoundForStream(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::StreamerNotFoundForStream`; }

export interface StreamerNotFoundForStreamFields { curAuctionStream: ToField<"u64">; rank: ToField<"u8"> }

export type StreamerNotFoundForStreamReified = Reified< StreamerNotFoundForStream, StreamerNotFoundForStreamFields >;

export class StreamerNotFoundForStream implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::StreamerNotFoundForStream`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StreamerNotFoundForStream.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::StreamerNotFoundForStream`; readonly $typeArgs: []; readonly $isPhantom = StreamerNotFoundForStream.$isPhantom;

 readonly curAuctionStream: ToField<"u64">; readonly rank: ToField<"u8">

 private constructor(typeArgs: [], fields: StreamerNotFoundForStreamFields, ) { this.$fullTypeName = composeSuiType( StreamerNotFoundForStream.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::StreamerNotFoundForStream`; this.$typeArgs = typeArgs;

 this.curAuctionStream = fields.curAuctionStream;; this.rank = fields.rank; }

 static reified( ): StreamerNotFoundForStreamReified { return { typeName: StreamerNotFoundForStream.$typeName, fullTypeName: composeSuiType( StreamerNotFoundForStream.$typeName, ...[] ) as `${typeof PKG_V1}::hive::StreamerNotFoundForStream`, typeArgs: [ ] as [], isPhantom: StreamerNotFoundForStream.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StreamerNotFoundForStream.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StreamerNotFoundForStream.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StreamerNotFoundForStream.fromBcs( data, ), bcs: StreamerNotFoundForStream.bcs, fromJSONField: (field: any) => StreamerNotFoundForStream.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StreamerNotFoundForStream.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StreamerNotFoundForStream.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StreamerNotFoundForStream.fetch( client, id, ), new: ( fields: StreamerNotFoundForStreamFields, ) => { return new StreamerNotFoundForStream( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StreamerNotFoundForStream.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StreamerNotFoundForStream>> { return phantom(StreamerNotFoundForStream.reified( )); } static get p() { return StreamerNotFoundForStream.phantom() }

 static get bcs() { return bcs.struct("StreamerNotFoundForStream", {

 cur_auction_stream: bcs.u64(), rank: bcs.u8()

}) };

 static fromFields( fields: Record<string, any> ): StreamerNotFoundForStream { return StreamerNotFoundForStream.reified( ).new( { curAuctionStream: decodeFromFields("u64", fields.cur_auction_stream), rank: decodeFromFields("u8", fields.rank) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StreamerNotFoundForStream { if (!isStreamerNotFoundForStream(item.type)) { throw new Error("not a StreamerNotFoundForStream type");

 }

 return StreamerNotFoundForStream.reified( ).new( { curAuctionStream: decodeFromFieldsWithTypes("u64", item.fields.cur_auction_stream), rank: decodeFromFieldsWithTypes("u8", item.fields.rank) } ) }

 static fromBcs( data: Uint8Array ): StreamerNotFoundForStream { return StreamerNotFoundForStream.fromFields( StreamerNotFoundForStream.bcs.parse(data) ) }

 toJSONField() { return {

 curAuctionStream: this.curAuctionStream.toString(),rank: this.rank,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StreamerNotFoundForStream { return StreamerNotFoundForStream.reified( ).new( { curAuctionStream: decodeFromJSONField("u64", field.curAuctionStream), rank: decodeFromJSONField("u8", field.rank) } ) }

 static fromJSON( json: Record<string, any> ): StreamerNotFoundForStream { if (json.$typeName !== StreamerNotFoundForStream.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StreamerNotFoundForStream.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StreamerNotFoundForStream { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStreamerNotFoundForStream(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StreamerNotFoundForStream object`); } return StreamerNotFoundForStream.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StreamerNotFoundForStream> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StreamerNotFoundForStream object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStreamerNotFoundForStream(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StreamerNotFoundForStream object`); }

 return StreamerNotFoundForStream.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UserBidExpired =============================== */

export function isUserBidExpired(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::UserBidExpired`; }

export interface UserBidExpiredFields { bidderProfile: ToField<"address">; username: ToField<String>; bidAmt: ToField<"u64">; taxOnBid: ToField<"u64">; bidEpochStream: ToField<"u64"> }

export type UserBidExpiredReified = Reified< UserBidExpired, UserBidExpiredFields >;

export class UserBidExpired implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::UserBidExpired`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserBidExpired.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::UserBidExpired`; readonly $typeArgs: []; readonly $isPhantom = UserBidExpired.$isPhantom;

 readonly bidderProfile: ToField<"address">; readonly username: ToField<String>; readonly bidAmt: ToField<"u64">; readonly taxOnBid: ToField<"u64">; readonly bidEpochStream: ToField<"u64">

 private constructor(typeArgs: [], fields: UserBidExpiredFields, ) { this.$fullTypeName = composeSuiType( UserBidExpired.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::UserBidExpired`; this.$typeArgs = typeArgs;

 this.bidderProfile = fields.bidderProfile;; this.username = fields.username;; this.bidAmt = fields.bidAmt;; this.taxOnBid = fields.taxOnBid;; this.bidEpochStream = fields.bidEpochStream; }

 static reified( ): UserBidExpiredReified { return { typeName: UserBidExpired.$typeName, fullTypeName: composeSuiType( UserBidExpired.$typeName, ...[] ) as `${typeof PKG_V1}::hive::UserBidExpired`, typeArgs: [ ] as [], isPhantom: UserBidExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserBidExpired.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserBidExpired.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserBidExpired.fromBcs( data, ), bcs: UserBidExpired.bcs, fromJSONField: (field: any) => UserBidExpired.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserBidExpired.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserBidExpired.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UserBidExpired.fetch( client, id, ), new: ( fields: UserBidExpiredFields, ) => { return new UserBidExpired( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserBidExpired.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserBidExpired>> { return phantom(UserBidExpired.reified( )); } static get p() { return UserBidExpired.phantom() }

 static get bcs() { return bcs.struct("UserBidExpired", {

 bidder_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, bid_amt: bcs.u64(), tax_on_bid: bcs.u64(), bid_epoch_stream: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserBidExpired { return UserBidExpired.reified( ).new( { bidderProfile: decodeFromFields("address", fields.bidder_profile), username: decodeFromFields(String.reified(), fields.username), bidAmt: decodeFromFields("u64", fields.bid_amt), taxOnBid: decodeFromFields("u64", fields.tax_on_bid), bidEpochStream: decodeFromFields("u64", fields.bid_epoch_stream) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserBidExpired { if (!isUserBidExpired(item.type)) { throw new Error("not a UserBidExpired type");

 }

 return UserBidExpired.reified( ).new( { bidderProfile: decodeFromFieldsWithTypes("address", item.fields.bidder_profile), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), bidAmt: decodeFromFieldsWithTypes("u64", item.fields.bid_amt), taxOnBid: decodeFromFieldsWithTypes("u64", item.fields.tax_on_bid), bidEpochStream: decodeFromFieldsWithTypes("u64", item.fields.bid_epoch_stream) } ) }

 static fromBcs( data: Uint8Array ): UserBidExpired { return UserBidExpired.fromFields( UserBidExpired.bcs.parse(data) ) }

 toJSONField() { return {

 bidderProfile: this.bidderProfile,username: this.username,bidAmt: this.bidAmt.toString(),taxOnBid: this.taxOnBid.toString(),bidEpochStream: this.bidEpochStream.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserBidExpired { return UserBidExpired.reified( ).new( { bidderProfile: decodeFromJSONField("address", field.bidderProfile), username: decodeFromJSONField(String.reified(), field.username), bidAmt: decodeFromJSONField("u64", field.bidAmt), taxOnBid: decodeFromJSONField("u64", field.taxOnBid), bidEpochStream: decodeFromJSONField("u64", field.bidEpochStream) } ) }

 static fromJSON( json: Record<string, any> ): UserBidExpired { if (json.$typeName !== UserBidExpired.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserBidExpired.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserBidExpired { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserBidExpired(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserBidExpired object`); } return UserBidExpired.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserBidExpired> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserBidExpired object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserBidExpired(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserBidExpired object`); }

 return UserBidExpired.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UserLikedStreamBuzz =============================== */

export function isUserLikedStreamBuzz(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::UserLikedStreamBuzz`; }

export interface UserLikedStreamBuzzFields { userProfileAddr: ToField<"address">; username: ToField<String>; streamIndex: ToField<"u64">; streamInnerIndex: ToField<"u64">; streamerProfile: ToField<"address">; engagementPoints: ToField<"u128"> }

export type UserLikedStreamBuzzReified = Reified< UserLikedStreamBuzz, UserLikedStreamBuzzFields >;

export class UserLikedStreamBuzz implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::UserLikedStreamBuzz`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserLikedStreamBuzz.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::UserLikedStreamBuzz`; readonly $typeArgs: []; readonly $isPhantom = UserLikedStreamBuzz.$isPhantom;

 readonly userProfileAddr: ToField<"address">; readonly username: ToField<String>; readonly streamIndex: ToField<"u64">; readonly streamInnerIndex: ToField<"u64">; readonly streamerProfile: ToField<"address">; readonly engagementPoints: ToField<"u128">

 private constructor(typeArgs: [], fields: UserLikedStreamBuzzFields, ) { this.$fullTypeName = composeSuiType( UserLikedStreamBuzz.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::UserLikedStreamBuzz`; this.$typeArgs = typeArgs;

 this.userProfileAddr = fields.userProfileAddr;; this.username = fields.username;; this.streamIndex = fields.streamIndex;; this.streamInnerIndex = fields.streamInnerIndex;; this.streamerProfile = fields.streamerProfile;; this.engagementPoints = fields.engagementPoints; }

 static reified( ): UserLikedStreamBuzzReified { return { typeName: UserLikedStreamBuzz.$typeName, fullTypeName: composeSuiType( UserLikedStreamBuzz.$typeName, ...[] ) as `${typeof PKG_V1}::hive::UserLikedStreamBuzz`, typeArgs: [ ] as [], isPhantom: UserLikedStreamBuzz.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserLikedStreamBuzz.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserLikedStreamBuzz.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserLikedStreamBuzz.fromBcs( data, ), bcs: UserLikedStreamBuzz.bcs, fromJSONField: (field: any) => UserLikedStreamBuzz.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserLikedStreamBuzz.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserLikedStreamBuzz.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UserLikedStreamBuzz.fetch( client, id, ), new: ( fields: UserLikedStreamBuzzFields, ) => { return new UserLikedStreamBuzz( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserLikedStreamBuzz.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserLikedStreamBuzz>> { return phantom(UserLikedStreamBuzz.reified( )); } static get p() { return UserLikedStreamBuzz.phantom() }

 static get bcs() { return bcs.struct("UserLikedStreamBuzz", {

 user_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, stream_index: bcs.u64(), stream_inner_index: bcs.u64(), streamer_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), engagement_points: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): UserLikedStreamBuzz { return UserLikedStreamBuzz.reified( ).new( { userProfileAddr: decodeFromFields("address", fields.user_profile_addr), username: decodeFromFields(String.reified(), fields.username), streamIndex: decodeFromFields("u64", fields.stream_index), streamInnerIndex: decodeFromFields("u64", fields.stream_inner_index), streamerProfile: decodeFromFields("address", fields.streamer_profile), engagementPoints: decodeFromFields("u128", fields.engagement_points) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserLikedStreamBuzz { if (!isUserLikedStreamBuzz(item.type)) { throw new Error("not a UserLikedStreamBuzz type");

 }

 return UserLikedStreamBuzz.reified( ).new( { userProfileAddr: decodeFromFieldsWithTypes("address", item.fields.user_profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), streamIndex: decodeFromFieldsWithTypes("u64", item.fields.stream_index), streamInnerIndex: decodeFromFieldsWithTypes("u64", item.fields.stream_inner_index), streamerProfile: decodeFromFieldsWithTypes("address", item.fields.streamer_profile), engagementPoints: decodeFromFieldsWithTypes("u128", item.fields.engagement_points) } ) }

 static fromBcs( data: Uint8Array ): UserLikedStreamBuzz { return UserLikedStreamBuzz.fromFields( UserLikedStreamBuzz.bcs.parse(data) ) }

 toJSONField() { return {

 userProfileAddr: this.userProfileAddr,username: this.username,streamIndex: this.streamIndex.toString(),streamInnerIndex: this.streamInnerIndex.toString(),streamerProfile: this.streamerProfile,engagementPoints: this.engagementPoints.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserLikedStreamBuzz { return UserLikedStreamBuzz.reified( ).new( { userProfileAddr: decodeFromJSONField("address", field.userProfileAddr), username: decodeFromJSONField(String.reified(), field.username), streamIndex: decodeFromJSONField("u64", field.streamIndex), streamInnerIndex: decodeFromJSONField("u64", field.streamInnerIndex), streamerProfile: decodeFromJSONField("address", field.streamerProfile), engagementPoints: decodeFromJSONField("u128", field.engagementPoints) } ) }

 static fromJSON( json: Record<string, any> ): UserLikedStreamBuzz { if (json.$typeName !== UserLikedStreamBuzz.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserLikedStreamBuzz.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserLikedStreamBuzz { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserLikedStreamBuzz(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserLikedStreamBuzz object`); } return UserLikedStreamBuzz.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserLikedStreamBuzz> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserLikedStreamBuzz object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserLikedStreamBuzz(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserLikedStreamBuzz object`); }

 return UserLikedStreamBuzz.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UserUpvotedHiveBuzz =============================== */

export function isUserUpvotedHiveBuzz(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::hive::UserUpvotedHiveBuzz`; }

export interface UserUpvotedHiveBuzzFields { upvotedByProfileAddr: ToField<"address">; upvotedByUsername: ToField<String>; streamIndex: ToField<"u64">; streamInnerIndex: ToField<"u64">; hiveBuzzByProfile: ToField<"address">; streamerProfile: ToField<"address">; engagementPoints: ToField<"u128"> }

export type UserUpvotedHiveBuzzReified = Reified< UserUpvotedHiveBuzz, UserUpvotedHiveBuzzFields >;

export class UserUpvotedHiveBuzz implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::hive::UserUpvotedHiveBuzz`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserUpvotedHiveBuzz.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::hive::UserUpvotedHiveBuzz`; readonly $typeArgs: []; readonly $isPhantom = UserUpvotedHiveBuzz.$isPhantom;

 readonly upvotedByProfileAddr: ToField<"address">; readonly upvotedByUsername: ToField<String>; readonly streamIndex: ToField<"u64">; readonly streamInnerIndex: ToField<"u64">; readonly hiveBuzzByProfile: ToField<"address">; readonly streamerProfile: ToField<"address">; readonly engagementPoints: ToField<"u128">

 private constructor(typeArgs: [], fields: UserUpvotedHiveBuzzFields, ) { this.$fullTypeName = composeSuiType( UserUpvotedHiveBuzz.$typeName, ...typeArgs ) as `${typeof PKG_V1}::hive::UserUpvotedHiveBuzz`; this.$typeArgs = typeArgs;

 this.upvotedByProfileAddr = fields.upvotedByProfileAddr;; this.upvotedByUsername = fields.upvotedByUsername;; this.streamIndex = fields.streamIndex;; this.streamInnerIndex = fields.streamInnerIndex;; this.hiveBuzzByProfile = fields.hiveBuzzByProfile;; this.streamerProfile = fields.streamerProfile;; this.engagementPoints = fields.engagementPoints; }

 static reified( ): UserUpvotedHiveBuzzReified { return { typeName: UserUpvotedHiveBuzz.$typeName, fullTypeName: composeSuiType( UserUpvotedHiveBuzz.$typeName, ...[] ) as `${typeof PKG_V1}::hive::UserUpvotedHiveBuzz`, typeArgs: [ ] as [], isPhantom: UserUpvotedHiveBuzz.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserUpvotedHiveBuzz.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserUpvotedHiveBuzz.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserUpvotedHiveBuzz.fromBcs( data, ), bcs: UserUpvotedHiveBuzz.bcs, fromJSONField: (field: any) => UserUpvotedHiveBuzz.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserUpvotedHiveBuzz.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserUpvotedHiveBuzz.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UserUpvotedHiveBuzz.fetch( client, id, ), new: ( fields: UserUpvotedHiveBuzzFields, ) => { return new UserUpvotedHiveBuzz( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserUpvotedHiveBuzz.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserUpvotedHiveBuzz>> { return phantom(UserUpvotedHiveBuzz.reified( )); } static get p() { return UserUpvotedHiveBuzz.phantom() }

 static get bcs() { return bcs.struct("UserUpvotedHiveBuzz", {

 upvoted_by_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), upvoted_by_username: String.bcs, stream_index: bcs.u64(), stream_inner_index: bcs.u64(), hive_buzz_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), streamer_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), engagement_points: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): UserUpvotedHiveBuzz { return UserUpvotedHiveBuzz.reified( ).new( { upvotedByProfileAddr: decodeFromFields("address", fields.upvoted_by_profile_addr), upvotedByUsername: decodeFromFields(String.reified(), fields.upvoted_by_username), streamIndex: decodeFromFields("u64", fields.stream_index), streamInnerIndex: decodeFromFields("u64", fields.stream_inner_index), hiveBuzzByProfile: decodeFromFields("address", fields.hive_buzz_by_profile), streamerProfile: decodeFromFields("address", fields.streamer_profile), engagementPoints: decodeFromFields("u128", fields.engagement_points) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserUpvotedHiveBuzz { if (!isUserUpvotedHiveBuzz(item.type)) { throw new Error("not a UserUpvotedHiveBuzz type");

 }

 return UserUpvotedHiveBuzz.reified( ).new( { upvotedByProfileAddr: decodeFromFieldsWithTypes("address", item.fields.upvoted_by_profile_addr), upvotedByUsername: decodeFromFieldsWithTypes(String.reified(), item.fields.upvoted_by_username), streamIndex: decodeFromFieldsWithTypes("u64", item.fields.stream_index), streamInnerIndex: decodeFromFieldsWithTypes("u64", item.fields.stream_inner_index), hiveBuzzByProfile: decodeFromFieldsWithTypes("address", item.fields.hive_buzz_by_profile), streamerProfile: decodeFromFieldsWithTypes("address", item.fields.streamer_profile), engagementPoints: decodeFromFieldsWithTypes("u128", item.fields.engagement_points) } ) }

 static fromBcs( data: Uint8Array ): UserUpvotedHiveBuzz { return UserUpvotedHiveBuzz.fromFields( UserUpvotedHiveBuzz.bcs.parse(data) ) }

 toJSONField() { return {

 upvotedByProfileAddr: this.upvotedByProfileAddr,upvotedByUsername: this.upvotedByUsername,streamIndex: this.streamIndex.toString(),streamInnerIndex: this.streamInnerIndex.toString(),hiveBuzzByProfile: this.hiveBuzzByProfile,streamerProfile: this.streamerProfile,engagementPoints: this.engagementPoints.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserUpvotedHiveBuzz { return UserUpvotedHiveBuzz.reified( ).new( { upvotedByProfileAddr: decodeFromJSONField("address", field.upvotedByProfileAddr), upvotedByUsername: decodeFromJSONField(String.reified(), field.upvotedByUsername), streamIndex: decodeFromJSONField("u64", field.streamIndex), streamInnerIndex: decodeFromJSONField("u64", field.streamInnerIndex), hiveBuzzByProfile: decodeFromJSONField("address", field.hiveBuzzByProfile), streamerProfile: decodeFromJSONField("address", field.streamerProfile), engagementPoints: decodeFromJSONField("u128", field.engagementPoints) } ) }

 static fromJSON( json: Record<string, any> ): UserUpvotedHiveBuzz { if (json.$typeName !== UserUpvotedHiveBuzz.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserUpvotedHiveBuzz.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserUpvotedHiveBuzz { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserUpvotedHiveBuzz(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserUpvotedHiveBuzz object`); } return UserUpvotedHiveBuzz.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserUpvotedHiveBuzz> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserUpvotedHiveBuzz object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserUpvotedHiveBuzz(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserUpvotedHiveBuzz object`); }

 return UserUpvotedHiveBuzz.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
