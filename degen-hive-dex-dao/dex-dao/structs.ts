import * as reified from "../../_framework/reified";
import { HiveProfile } from "../../degen-hive-profile/hive-profile/structs";
import {String as String1} from "../../_dependencies/source/0x1/ascii/structs";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {HIVE} from "../../degen-hive-dex-config/dsui/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {LinkedTable} from "../../_dependencies/source/0x2/linked-table/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import { DexDaoCapability } from "../../degen-hive-dex-config/config/structs";
import { HiveGems } from "../../degen-hive-dex-config/hive-gems/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== AddedToBeeBox =============================== */

export function isAddedToBeeBox(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::AddedToBeeBox"; }

export interface AddedToBeeBoxFields { poolHiveAddr: ToField<"address">; profileAddr: ToField<"address">; username: ToField<String>; lpBalanceAdded: ToField<"u64">; hiveGemsEarned: ToField<"u64">; claimIndex: ToField<"u256"> }

export type AddedToBeeBoxReified = Reified< AddedToBeeBox, AddedToBeeBoxFields >;

export class AddedToBeeBox implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::AddedToBeeBox"; static readonly $numTypeParams = 0;

 readonly $typeName = AddedToBeeBox.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::AddedToBeeBox";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly profileAddr: ToField<"address">; readonly username: ToField<String>; readonly lpBalanceAdded: ToField<"u64">; readonly hiveGemsEarned: ToField<"u64">; readonly claimIndex: ToField<"u256">

 private constructor(typeArgs: [], fields: AddedToBeeBoxFields, ) { this.$fullTypeName = composeSuiType( AddedToBeeBox.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::AddedToBeeBox"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.profileAddr = fields.profileAddr;; this.username = fields.username;; this.lpBalanceAdded = fields.lpBalanceAdded;; this.hiveGemsEarned = fields.hiveGemsEarned;; this.claimIndex = fields.claimIndex; }

 static reified( ): AddedToBeeBoxReified { return { typeName: AddedToBeeBox.$typeName, fullTypeName: composeSuiType( AddedToBeeBox.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::AddedToBeeBox", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AddedToBeeBox.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AddedToBeeBox.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AddedToBeeBox.fromBcs( data, ), bcs: AddedToBeeBox.bcs, fromJSONField: (field: any) => AddedToBeeBox.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AddedToBeeBox.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AddedToBeeBox.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AddedToBeeBox.fetch( client, id, ), new: ( fields: AddedToBeeBoxFields, ) => { return new AddedToBeeBox( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AddedToBeeBox.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AddedToBeeBox>> { return phantom(AddedToBeeBox.reified( )); } static get p() { return AddedToBeeBox.phantom() }

 static get bcs() { return bcs.struct("AddedToBeeBox", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, lp_balance_added: bcs.u64(), hive_gems_earned: bcs.u64(), claim_index: bcs.u256()

}) };

 static fromFields( fields: Record<string, any> ): AddedToBeeBox { return AddedToBeeBox.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), profileAddr: decodeFromFields("address", fields.profile_addr), username: decodeFromFields(String.reified(), fields.username), lpBalanceAdded: decodeFromFields("u64", fields.lp_balance_added), hiveGemsEarned: decodeFromFields("u64", fields.hive_gems_earned), claimIndex: decodeFromFields("u256", fields.claim_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AddedToBeeBox { if (!isAddedToBeeBox(item.type)) { throw new Error("not a AddedToBeeBox type");

 }

 return AddedToBeeBox.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), lpBalanceAdded: decodeFromFieldsWithTypes("u64", item.fields.lp_balance_added), hiveGemsEarned: decodeFromFieldsWithTypes("u64", item.fields.hive_gems_earned), claimIndex: decodeFromFieldsWithTypes("u256", item.fields.claim_index) } ) }

 static fromBcs( data: Uint8Array ): AddedToBeeBox { return AddedToBeeBox.fromFields( AddedToBeeBox.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,profileAddr: this.profileAddr,username: this.username,lpBalanceAdded: this.lpBalanceAdded.toString(),hiveGemsEarned: this.hiveGemsEarned.toString(),claimIndex: this.claimIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AddedToBeeBox { return AddedToBeeBox.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), profileAddr: decodeFromJSONField("address", field.profileAddr), username: decodeFromJSONField(String.reified(), field.username), lpBalanceAdded: decodeFromJSONField("u64", field.lpBalanceAdded), hiveGemsEarned: decodeFromJSONField("u64", field.hiveGemsEarned), claimIndex: decodeFromJSONField("u256", field.claimIndex) } ) }

 static fromJSON( json: Record<string, any> ): AddedToBeeBox { if (json.$typeName !== AddedToBeeBox.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AddedToBeeBox.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AddedToBeeBox { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAddedToBeeBox(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AddedToBeeBox object`); } return AddedToBeeBox.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AddedToBeeBox> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AddedToBeeBox object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAddedToBeeBox(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AddedToBeeBox object`); }
 return AddedToBeeBox.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BeeFruit =============================== */

export function isBeeFruit(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruit<"); }

export interface BeeFruitFields<X extends PhantomTypeArgument> { id: ToField<UID>; availableFruits: ToField<Balance<X>>; fruitsPerEpoch: ToField<"u64">; startEpoch: ToField<"u64">; endEpoch: ToField<"u64">; claimIndex: ToField<"u256">; lastClaimEpoch: ToField<"u64">; moduleVersion: ToField<"u64"> }

export type BeeFruitReified<X extends PhantomTypeArgument> = Reified< BeeFruit<X>, BeeFruitFields<X> >;

export class BeeFruit<X extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruit"; static readonly $numTypeParams = 1;

 readonly $typeName = BeeFruit.$typeName;

 readonly $fullTypeName: `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruit<${PhantomToTypeStr<X>}>`;

 readonly $typeArgs: [PhantomToTypeStr<X>];

 readonly id: ToField<UID>; readonly availableFruits: ToField<Balance<X>>; readonly fruitsPerEpoch: ToField<"u64">; readonly startEpoch: ToField<"u64">; readonly endEpoch: ToField<"u64">; readonly claimIndex: ToField<"u256">; readonly lastClaimEpoch: ToField<"u64">; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: BeeFruitFields<X>, ) { this.$fullTypeName = composeSuiType( BeeFruit.$typeName, ...typeArgs ) as `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruit<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.availableFruits = fields.availableFruits;; this.fruitsPerEpoch = fields.fruitsPerEpoch;; this.startEpoch = fields.startEpoch;; this.endEpoch = fields.endEpoch;; this.claimIndex = fields.claimIndex;; this.lastClaimEpoch = fields.lastClaimEpoch;; this.moduleVersion = fields.moduleVersion; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): BeeFruitReified<ToPhantomTypeArgument<X>> { return { typeName: BeeFruit.$typeName, fullTypeName: composeSuiType( BeeFruit.$typeName, ...[extractType(X)] ) as `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruit<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => BeeFruit.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeFruit.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => BeeFruit.fromBcs( X, data, ), bcs: BeeFruit.bcs, fromJSONField: (field: any) => BeeFruit.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => BeeFruit.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => BeeFruit.fromSuiParsedData( X, content, ), fetch: async (client: SuiClient, id: string) => BeeFruit.fetch( client, X, id, ), new: ( fields: BeeFruitFields<ToPhantomTypeArgument<X>>, ) => { return new BeeFruit( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeFruit.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<BeeFruit<ToPhantomTypeArgument<X>>>> { return phantom(BeeFruit.reified( X )); } static get p() { return BeeFruit.phantom }

 static get bcs() { return bcs.struct("BeeFruit", {

 id: UID.bcs, available_fruits: Balance.bcs, fruits_per_epoch: bcs.u64(), start_epoch: bcs.u64(), end_epoch: bcs.u64(), claim_index: bcs.u256(), last_claim_epoch: bcs.u64(), module_version: bcs.u64()

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): BeeFruit<ToPhantomTypeArgument<X>> { return BeeFruit.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), availableFruits: decodeFromFields(Balance.reified(typeArg), fields.available_fruits), fruitsPerEpoch: decodeFromFields("u64", fields.fruits_per_epoch), startEpoch: decodeFromFields("u64", fields.start_epoch), endEpoch: decodeFromFields("u64", fields.end_epoch), claimIndex: decodeFromFields("u256", fields.claim_index), lastClaimEpoch: decodeFromFields("u64", fields.last_claim_epoch), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): BeeFruit<ToPhantomTypeArgument<X>> { if (!isBeeFruit(item.type)) { throw new Error("not a BeeFruit type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return BeeFruit.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), availableFruits: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.available_fruits), fruitsPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.fruits_per_epoch), startEpoch: decodeFromFieldsWithTypes("u64", item.fields.start_epoch), endEpoch: decodeFromFieldsWithTypes("u64", item.fields.end_epoch), claimIndex: decodeFromFieldsWithTypes("u256", item.fields.claim_index), lastClaimEpoch: decodeFromFieldsWithTypes("u64", item.fields.last_claim_epoch), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): BeeFruit<ToPhantomTypeArgument<X>> { return BeeFruit.fromFields( typeArg, BeeFruit.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,availableFruits: this.availableFruits.toJSONField(),fruitsPerEpoch: this.fruitsPerEpoch.toString(),startEpoch: this.startEpoch.toString(),endEpoch: this.endEpoch.toString(),claimIndex: this.claimIndex.toString(),lastClaimEpoch: this.lastClaimEpoch.toString(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): BeeFruit<ToPhantomTypeArgument<X>> { return BeeFruit.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), availableFruits: decodeFromJSONField(Balance.reified(typeArg), field.availableFruits), fruitsPerEpoch: decodeFromJSONField("u64", field.fruitsPerEpoch), startEpoch: decodeFromJSONField("u64", field.startEpoch), endEpoch: decodeFromJSONField("u64", field.endEpoch), claimIndex: decodeFromJSONField("u256", field.claimIndex), lastClaimEpoch: decodeFromJSONField("u64", field.lastClaimEpoch), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): BeeFruit<ToPhantomTypeArgument<X>> { if (json.$typeName !== BeeFruit.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(BeeFruit.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return BeeFruit.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): BeeFruit<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeFruit(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeFruit object`); } return BeeFruit.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<BeeFruit<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeFruit object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeFruit(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeFruit object`); }
 return BeeFruit.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BeeFruitDestroyed =============================== */

export function isBeeFruitDestroyed(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitDestroyed"; }

export interface BeeFruitDestroyedFields { poolHiveAddr: ToField<"address">; beeFruitType: ToField<String1>; curEpoch: ToField<"u64"> }

export type BeeFruitDestroyedReified = Reified< BeeFruitDestroyed, BeeFruitDestroyedFields >;

export class BeeFruitDestroyed implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitDestroyed"; static readonly $numTypeParams = 0;

 readonly $typeName = BeeFruitDestroyed.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitDestroyed";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly beeFruitType: ToField<String1>; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: BeeFruitDestroyedFields, ) { this.$fullTypeName = composeSuiType( BeeFruitDestroyed.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitDestroyed"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.beeFruitType = fields.beeFruitType;; this.curEpoch = fields.curEpoch; }

 static reified( ): BeeFruitDestroyedReified { return { typeName: BeeFruitDestroyed.$typeName, fullTypeName: composeSuiType( BeeFruitDestroyed.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitDestroyed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeFruitDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeFruitDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeFruitDestroyed.fromBcs( data, ), bcs: BeeFruitDestroyed.bcs, fromJSONField: (field: any) => BeeFruitDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeFruitDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeFruitDestroyed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BeeFruitDestroyed.fetch( client, id, ), new: ( fields: BeeFruitDestroyedFields, ) => { return new BeeFruitDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeFruitDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeFruitDestroyed>> { return phantom(BeeFruitDestroyed.reified( )); } static get p() { return BeeFruitDestroyed.phantom() }

 static get bcs() { return bcs.struct("BeeFruitDestroyed", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bee_fruit_type: String1.bcs, cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BeeFruitDestroyed { return BeeFruitDestroyed.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), beeFruitType: decodeFromFields(String1.reified(), fields.bee_fruit_type), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeFruitDestroyed { if (!isBeeFruitDestroyed(item.type)) { throw new Error("not a BeeFruitDestroyed type");

 }

 return BeeFruitDestroyed.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), beeFruitType: decodeFromFieldsWithTypes(String1.reified(), item.fields.bee_fruit_type), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): BeeFruitDestroyed { return BeeFruitDestroyed.fromFields( BeeFruitDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,beeFruitType: this.beeFruitType,curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeFruitDestroyed { return BeeFruitDestroyed.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), beeFruitType: decodeFromJSONField(String1.reified(), field.beeFruitType), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): BeeFruitDestroyed { if (json.$typeName !== BeeFruitDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeFruitDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeFruitDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeFruitDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeFruitDestroyed object`); } return BeeFruitDestroyed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeFruitDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeFruitDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeFruitDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeFruitDestroyed object`); }
 return BeeFruitDestroyed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BeeFruitKraftedForPoolHive =============================== */

export function isBeeFruitKraftedForPoolHive(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitKraftedForPoolHive"; }

export interface BeeFruitKraftedForPoolHiveFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; beeFruitIdentifier: ToField<TypeName> }

export type BeeFruitKraftedForPoolHiveReified = Reified< BeeFruitKraftedForPoolHive, BeeFruitKraftedForPoolHiveFields >;

export class BeeFruitKraftedForPoolHive implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitKraftedForPoolHive"; static readonly $numTypeParams = 0;

 readonly $typeName = BeeFruitKraftedForPoolHive.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitKraftedForPoolHive";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly beeFruitIdentifier: ToField<TypeName>

 private constructor(typeArgs: [], fields: BeeFruitKraftedForPoolHiveFields, ) { this.$fullTypeName = composeSuiType( BeeFruitKraftedForPoolHive.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitKraftedForPoolHive"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.beeFruitIdentifier = fields.beeFruitIdentifier; }

 static reified( ): BeeFruitKraftedForPoolHiveReified { return { typeName: BeeFruitKraftedForPoolHive.$typeName, fullTypeName: composeSuiType( BeeFruitKraftedForPoolHive.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::BeeFruitKraftedForPoolHive", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BeeFruitKraftedForPoolHive.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BeeFruitKraftedForPoolHive.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BeeFruitKraftedForPoolHive.fromBcs( data, ), bcs: BeeFruitKraftedForPoolHive.bcs, fromJSONField: (field: any) => BeeFruitKraftedForPoolHive.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BeeFruitKraftedForPoolHive.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BeeFruitKraftedForPoolHive.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BeeFruitKraftedForPoolHive.fetch( client, id, ), new: ( fields: BeeFruitKraftedForPoolHiveFields, ) => { return new BeeFruitKraftedForPoolHive( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BeeFruitKraftedForPoolHive.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BeeFruitKraftedForPoolHive>> { return phantom(BeeFruitKraftedForPoolHive.reified( )); } static get p() { return BeeFruitKraftedForPoolHive.phantom() }

 static get bcs() { return bcs.struct("BeeFruitKraftedForPoolHive", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), proposal_id: bcs.u64(), bee_fruit_identifier: TypeName.bcs

}) };

 static fromFields( fields: Record<string, any> ): BeeFruitKraftedForPoolHive { return BeeFruitKraftedForPoolHive.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), proposalId: decodeFromFields("u64", fields.proposal_id), beeFruitIdentifier: decodeFromFields(TypeName.reified(), fields.bee_fruit_identifier) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BeeFruitKraftedForPoolHive { if (!isBeeFruitKraftedForPoolHive(item.type)) { throw new Error("not a BeeFruitKraftedForPoolHive type");

 }

 return BeeFruitKraftedForPoolHive.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), proposalId: decodeFromFieldsWithTypes("u64", item.fields.proposal_id), beeFruitIdentifier: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.bee_fruit_identifier) } ) }

 static fromBcs( data: Uint8Array ): BeeFruitKraftedForPoolHive { return BeeFruitKraftedForPoolHive.fromFields( BeeFruitKraftedForPoolHive.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,proposalId: this.proposalId.toString(),beeFruitIdentifier: this.beeFruitIdentifier.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BeeFruitKraftedForPoolHive { return BeeFruitKraftedForPoolHive.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), proposalId: decodeFromJSONField("u64", field.proposalId), beeFruitIdentifier: decodeFromJSONField(TypeName.reified(), field.beeFruitIdentifier) } ) }

 static fromJSON( json: Record<string, any> ): BeeFruitKraftedForPoolHive { if (json.$typeName !== BeeFruitKraftedForPoolHive.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BeeFruitKraftedForPoolHive.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BeeFruitKraftedForPoolHive { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBeeFruitKraftedForPoolHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BeeFruitKraftedForPoolHive object`); } return BeeFruitKraftedForPoolHive.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BeeFruitKraftedForPoolHive> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BeeFruitKraftedForPoolHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBeeFruitKraftedForPoolHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BeeFruitKraftedForPoolHive object`); }
 return BeeFruitKraftedForPoolHive.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Dialogue =============================== */

export function isDialogue(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogue"; }

export interface DialogueFields { buzz: ToField<String>; upvotes: ToField<LinkedTable<"address", "bool">> }

export type DialogueReified = Reified< Dialogue, DialogueFields >;

export class Dialogue implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogue"; static readonly $numTypeParams = 0;

 readonly $typeName = Dialogue.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogue";

 readonly $typeArgs: [];

 readonly buzz: ToField<String>; readonly upvotes: ToField<LinkedTable<"address", "bool">>

 private constructor(typeArgs: [], fields: DialogueFields, ) { this.$fullTypeName = composeSuiType( Dialogue.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogue"; this.$typeArgs = typeArgs;

 this.buzz = fields.buzz;; this.upvotes = fields.upvotes; }

 static reified( ): DialogueReified { return { typeName: Dialogue.$typeName, fullTypeName: composeSuiType( Dialogue.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogue", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Dialogue.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Dialogue.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Dialogue.fromBcs( data, ), bcs: Dialogue.bcs, fromJSONField: (field: any) => Dialogue.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Dialogue.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Dialogue.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Dialogue.fetch( client, id, ), new: ( fields: DialogueFields, ) => { return new Dialogue( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Dialogue.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Dialogue>> { return phantom(Dialogue.reified( )); } static get p() { return Dialogue.phantom() }

 static get bcs() { return bcs.struct("Dialogue", {

 buzz: String.bcs, upvotes: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

}) };

 static fromFields( fields: Record<string, any> ): Dialogue { return Dialogue.reified( ).new( { buzz: decodeFromFields(String.reified(), fields.buzz), upvotes: decodeFromFields(LinkedTable.reified("address", reified.phantom("bool")), fields.upvotes) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Dialogue { if (!isDialogue(item.type)) { throw new Error("not a Dialogue type");

 }

 return Dialogue.reified( ).new( { buzz: decodeFromFieldsWithTypes(String.reified(), item.fields.buzz), upvotes: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("bool")), item.fields.upvotes) } ) }

 static fromBcs( data: Uint8Array ): Dialogue { return Dialogue.fromFields( Dialogue.bcs.parse(data) ) }

 toJSONField() { return {

 buzz: this.buzz,upvotes: this.upvotes.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Dialogue { return Dialogue.reified( ).new( { buzz: decodeFromJSONField(String.reified(), field.buzz), upvotes: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("bool")), field.upvotes) } ) }

 static fromJSON( json: Record<string, any> ): Dialogue { if (json.$typeName !== Dialogue.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Dialogue.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Dialogue { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDialogue(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Dialogue object`); } return Dialogue.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Dialogue> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Dialogue object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDialogue(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Dialogue object`); }
 return Dialogue.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Dialogues =============================== */

export function isDialogues(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogues"; }

export interface DialoguesFields { dialogues: ToField<LinkedTable<"u64", ToPhantom<Dialogue>>> }

export type DialoguesReified = Reified< Dialogues, DialoguesFields >;

export class Dialogues implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogues"; static readonly $numTypeParams = 0;

 readonly $typeName = Dialogues.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogues";

 readonly $typeArgs: [];

 readonly dialogues: ToField<LinkedTable<"u64", ToPhantom<Dialogue>>>

 private constructor(typeArgs: [], fields: DialoguesFields, ) { this.$fullTypeName = composeSuiType( Dialogues.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogues"; this.$typeArgs = typeArgs;

 this.dialogues = fields.dialogues; }

 static reified( ): DialoguesReified { return { typeName: Dialogues.$typeName, fullTypeName: composeSuiType( Dialogues.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Dialogues", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Dialogues.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Dialogues.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Dialogues.fromBcs( data, ), bcs: Dialogues.bcs, fromJSONField: (field: any) => Dialogues.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Dialogues.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Dialogues.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Dialogues.fetch( client, id, ), new: ( fields: DialoguesFields, ) => { return new Dialogues( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Dialogues.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Dialogues>> { return phantom(Dialogues.reified( )); } static get p() { return Dialogues.phantom() }

 static get bcs() { return bcs.struct("Dialogues", {

 dialogues: LinkedTable.bcs(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): Dialogues { return Dialogues.reified( ).new( { dialogues: decodeFromFields(LinkedTable.reified("u64", reified.phantom(Dialogue.reified())), fields.dialogues) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Dialogues { if (!isDialogues(item.type)) { throw new Error("not a Dialogues type");

 }

 return Dialogues.reified( ).new( { dialogues: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(Dialogue.reified())), item.fields.dialogues) } ) }

 static fromBcs( data: Uint8Array ): Dialogues { return Dialogues.fromFields( Dialogues.bcs.parse(data) ) }

 toJSONField() { return {

 dialogues: this.dialogues.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Dialogues { return Dialogues.reified( ).new( { dialogues: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(Dialogue.reified())), field.dialogues) } ) }

 static fromJSON( json: Record<string, any> ): Dialogues { if (json.$typeName !== Dialogues.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Dialogues.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Dialogues { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDialogues(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Dialogues object`); } return Dialogues.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Dialogues> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Dialogues object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDialogues(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Dialogues object`); }
 return Dialogues.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== FruitLife =============================== */

export function isFruitLife(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife"; }

export interface FruitLifeFields { fruitTypename: ToField<TypeName>; startEpoch: ToField<"u64">; endEpoch: ToField<"u64"> }

export type FruitLifeReified = Reified< FruitLife, FruitLifeFields >;

export class FruitLife implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife"; static readonly $numTypeParams = 0;

 readonly $typeName = FruitLife.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife";

 readonly $typeArgs: [];

 readonly fruitTypename: ToField<TypeName>; readonly startEpoch: ToField<"u64">; readonly endEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: FruitLifeFields, ) { this.$fullTypeName = composeSuiType( FruitLife.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife"; this.$typeArgs = typeArgs;

 this.fruitTypename = fields.fruitTypename;; this.startEpoch = fields.startEpoch;; this.endEpoch = fields.endEpoch; }

 static reified( ): FruitLifeReified { return { typeName: FruitLife.$typeName, fullTypeName: composeSuiType( FruitLife.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FruitLife.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FruitLife.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FruitLife.fromBcs( data, ), bcs: FruitLife.bcs, fromJSONField: (field: any) => FruitLife.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FruitLife.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FruitLife.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => FruitLife.fetch( client, id, ), new: ( fields: FruitLifeFields, ) => { return new FruitLife( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FruitLife.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FruitLife>> { return phantom(FruitLife.reified( )); } static get p() { return FruitLife.phantom() }

 static get bcs() { return bcs.struct("FruitLife", {

 fruit_typename: TypeName.bcs, start_epoch: bcs.u64(), end_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): FruitLife { return FruitLife.reified( ).new( { fruitTypename: decodeFromFields(TypeName.reified(), fields.fruit_typename), startEpoch: decodeFromFields("u64", fields.start_epoch), endEpoch: decodeFromFields("u64", fields.end_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FruitLife { if (!isFruitLife(item.type)) { throw new Error("not a FruitLife type");

 }

 return FruitLife.reified( ).new( { fruitTypename: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.fruit_typename), startEpoch: decodeFromFieldsWithTypes("u64", item.fields.start_epoch), endEpoch: decodeFromFieldsWithTypes("u64", item.fields.end_epoch) } ) }

 static fromBcs( data: Uint8Array ): FruitLife { return FruitLife.fromFields( FruitLife.bcs.parse(data) ) }

 toJSONField() { return {

 fruitTypename: this.fruitTypename.toJSONField(),startEpoch: this.startEpoch.toString(),endEpoch: this.endEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FruitLife { return FruitLife.reified( ).new( { fruitTypename: decodeFromJSONField(TypeName.reified(), field.fruitTypename), startEpoch: decodeFromJSONField("u64", field.startEpoch), endEpoch: decodeFromJSONField("u64", field.endEpoch) } ) }

 static fromJSON( json: Record<string, any> ): FruitLife { if (json.$typeName !== FruitLife.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FruitLife.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FruitLife { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFruitLife(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FruitLife object`); } return FruitLife.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<FruitLife> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FruitLife object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFruitLife(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FruitLife object`); }
 return FruitLife.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== GemsPerEpochUpdated =============================== */

export function isGemsPerEpochUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsPerEpochUpdated"; }

export interface GemsPerEpochUpdatedFields { newGemsPerEpoch: ToField<"u64"> }

export type GemsPerEpochUpdatedReified = Reified< GemsPerEpochUpdated, GemsPerEpochUpdatedFields >;

export class GemsPerEpochUpdated implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsPerEpochUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = GemsPerEpochUpdated.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsPerEpochUpdated";

 readonly $typeArgs: [];

 readonly newGemsPerEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: GemsPerEpochUpdatedFields, ) { this.$fullTypeName = composeSuiType( GemsPerEpochUpdated.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsPerEpochUpdated"; this.$typeArgs = typeArgs;

 this.newGemsPerEpoch = fields.newGemsPerEpoch; }

 static reified( ): GemsPerEpochUpdatedReified { return { typeName: GemsPerEpochUpdated.$typeName, fullTypeName: composeSuiType( GemsPerEpochUpdated.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsPerEpochUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GemsPerEpochUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GemsPerEpochUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GemsPerEpochUpdated.fromBcs( data, ), bcs: GemsPerEpochUpdated.bcs, fromJSONField: (field: any) => GemsPerEpochUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GemsPerEpochUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GemsPerEpochUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => GemsPerEpochUpdated.fetch( client, id, ), new: ( fields: GemsPerEpochUpdatedFields, ) => { return new GemsPerEpochUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GemsPerEpochUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GemsPerEpochUpdated>> { return phantom(GemsPerEpochUpdated.reified( )); } static get p() { return GemsPerEpochUpdated.phantom() }

 static get bcs() { return bcs.struct("GemsPerEpochUpdated", {

 new_gems_per_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): GemsPerEpochUpdated { return GemsPerEpochUpdated.reified( ).new( { newGemsPerEpoch: decodeFromFields("u64", fields.new_gems_per_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GemsPerEpochUpdated { if (!isGemsPerEpochUpdated(item.type)) { throw new Error("not a GemsPerEpochUpdated type");

 }

 return GemsPerEpochUpdated.reified( ).new( { newGemsPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.new_gems_per_epoch) } ) }

 static fromBcs( data: Uint8Array ): GemsPerEpochUpdated { return GemsPerEpochUpdated.fromFields( GemsPerEpochUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 newGemsPerEpoch: this.newGemsPerEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GemsPerEpochUpdated { return GemsPerEpochUpdated.reified( ).new( { newGemsPerEpoch: decodeFromJSONField("u64", field.newGemsPerEpoch) } ) }

 static fromJSON( json: Record<string, any> ): GemsPerEpochUpdated { if (json.$typeName !== GemsPerEpochUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GemsPerEpochUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GemsPerEpochUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGemsPerEpochUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GemsPerEpochUpdated object`); } return GemsPerEpochUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<GemsPerEpochUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GemsPerEpochUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGemsPerEpochUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GemsPerEpochUpdated object`); }
 return GemsPerEpochUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== GemsSchedule =============================== */

export function isGemsSchedule(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSchedule"; }

export interface GemsScheduleFields { startEpoch: ToField<"u64">; endEpoch: ToField<"u64">; gemsPerEpoch: ToField<"u64"> }

export type GemsScheduleReified = Reified< GemsSchedule, GemsScheduleFields >;

export class GemsSchedule implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSchedule"; static readonly $numTypeParams = 0;

 readonly $typeName = GemsSchedule.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSchedule";

 readonly $typeArgs: [];

 readonly startEpoch: ToField<"u64">; readonly endEpoch: ToField<"u64">; readonly gemsPerEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: GemsScheduleFields, ) { this.$fullTypeName = composeSuiType( GemsSchedule.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSchedule"; this.$typeArgs = typeArgs;

 this.startEpoch = fields.startEpoch;; this.endEpoch = fields.endEpoch;; this.gemsPerEpoch = fields.gemsPerEpoch; }

 static reified( ): GemsScheduleReified { return { typeName: GemsSchedule.$typeName, fullTypeName: composeSuiType( GemsSchedule.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSchedule", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GemsSchedule.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GemsSchedule.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GemsSchedule.fromBcs( data, ), bcs: GemsSchedule.bcs, fromJSONField: (field: any) => GemsSchedule.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GemsSchedule.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GemsSchedule.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => GemsSchedule.fetch( client, id, ), new: ( fields: GemsScheduleFields, ) => { return new GemsSchedule( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GemsSchedule.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GemsSchedule>> { return phantom(GemsSchedule.reified( )); } static get p() { return GemsSchedule.phantom() }

 static get bcs() { return bcs.struct("GemsSchedule", {

 start_epoch: bcs.u64(), end_epoch: bcs.u64(), gems_per_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): GemsSchedule { return GemsSchedule.reified( ).new( { startEpoch: decodeFromFields("u64", fields.start_epoch), endEpoch: decodeFromFields("u64", fields.end_epoch), gemsPerEpoch: decodeFromFields("u64", fields.gems_per_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GemsSchedule { if (!isGemsSchedule(item.type)) { throw new Error("not a GemsSchedule type");

 }

 return GemsSchedule.reified( ).new( { startEpoch: decodeFromFieldsWithTypes("u64", item.fields.start_epoch), endEpoch: decodeFromFieldsWithTypes("u64", item.fields.end_epoch), gemsPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.gems_per_epoch) } ) }

 static fromBcs( data: Uint8Array ): GemsSchedule { return GemsSchedule.fromFields( GemsSchedule.bcs.parse(data) ) }

 toJSONField() { return {

 startEpoch: this.startEpoch.toString(),endEpoch: this.endEpoch.toString(),gemsPerEpoch: this.gemsPerEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GemsSchedule { return GemsSchedule.reified( ).new( { startEpoch: decodeFromJSONField("u64", field.startEpoch), endEpoch: decodeFromJSONField("u64", field.endEpoch), gemsPerEpoch: decodeFromJSONField("u64", field.gemsPerEpoch) } ) }

 static fromJSON( json: Record<string, any> ): GemsSchedule { if (json.$typeName !== GemsSchedule.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GemsSchedule.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GemsSchedule { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGemsSchedule(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GemsSchedule object`); } return GemsSchedule.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<GemsSchedule> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GemsSchedule object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGemsSchedule(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GemsSchedule object`); }
 return GemsSchedule.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== GemsSetForNewHiveCycle =============================== */

export function isGemsSetForNewHiveCycle(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSetForNewHiveCycle"; }

export interface GemsSetForNewHiveCycleFields { gemsCycle: ToField<"u64">; startEpoch: ToField<"u64">; endEpoch: ToField<"u64">; gemsPerEpoch: ToField<"u64"> }

export type GemsSetForNewHiveCycleReified = Reified< GemsSetForNewHiveCycle, GemsSetForNewHiveCycleFields >;

export class GemsSetForNewHiveCycle implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSetForNewHiveCycle"; static readonly $numTypeParams = 0;

 readonly $typeName = GemsSetForNewHiveCycle.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSetForNewHiveCycle";

 readonly $typeArgs: [];

 readonly gemsCycle: ToField<"u64">; readonly startEpoch: ToField<"u64">; readonly endEpoch: ToField<"u64">; readonly gemsPerEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: GemsSetForNewHiveCycleFields, ) { this.$fullTypeName = composeSuiType( GemsSetForNewHiveCycle.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSetForNewHiveCycle"; this.$typeArgs = typeArgs;

 this.gemsCycle = fields.gemsCycle;; this.startEpoch = fields.startEpoch;; this.endEpoch = fields.endEpoch;; this.gemsPerEpoch = fields.gemsPerEpoch; }

 static reified( ): GemsSetForNewHiveCycleReified { return { typeName: GemsSetForNewHiveCycle.$typeName, fullTypeName: composeSuiType( GemsSetForNewHiveCycle.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GemsSetForNewHiveCycle", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GemsSetForNewHiveCycle.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GemsSetForNewHiveCycle.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GemsSetForNewHiveCycle.fromBcs( data, ), bcs: GemsSetForNewHiveCycle.bcs, fromJSONField: (field: any) => GemsSetForNewHiveCycle.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GemsSetForNewHiveCycle.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GemsSetForNewHiveCycle.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => GemsSetForNewHiveCycle.fetch( client, id, ), new: ( fields: GemsSetForNewHiveCycleFields, ) => { return new GemsSetForNewHiveCycle( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GemsSetForNewHiveCycle.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GemsSetForNewHiveCycle>> { return phantom(GemsSetForNewHiveCycle.reified( )); } static get p() { return GemsSetForNewHiveCycle.phantom() }

 static get bcs() { return bcs.struct("GemsSetForNewHiveCycle", {

 gems_cycle: bcs.u64(), start_epoch: bcs.u64(), end_epoch: bcs.u64(), gems_per_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): GemsSetForNewHiveCycle { return GemsSetForNewHiveCycle.reified( ).new( { gemsCycle: decodeFromFields("u64", fields.gems_cycle), startEpoch: decodeFromFields("u64", fields.start_epoch), endEpoch: decodeFromFields("u64", fields.end_epoch), gemsPerEpoch: decodeFromFields("u64", fields.gems_per_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GemsSetForNewHiveCycle { if (!isGemsSetForNewHiveCycle(item.type)) { throw new Error("not a GemsSetForNewHiveCycle type");

 }

 return GemsSetForNewHiveCycle.reified( ).new( { gemsCycle: decodeFromFieldsWithTypes("u64", item.fields.gems_cycle), startEpoch: decodeFromFieldsWithTypes("u64", item.fields.start_epoch), endEpoch: decodeFromFieldsWithTypes("u64", item.fields.end_epoch), gemsPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.gems_per_epoch) } ) }

 static fromBcs( data: Uint8Array ): GemsSetForNewHiveCycle { return GemsSetForNewHiveCycle.fromFields( GemsSetForNewHiveCycle.bcs.parse(data) ) }

 toJSONField() { return {

 gemsCycle: this.gemsCycle.toString(),startEpoch: this.startEpoch.toString(),endEpoch: this.endEpoch.toString(),gemsPerEpoch: this.gemsPerEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GemsSetForNewHiveCycle { return GemsSetForNewHiveCycle.reified( ).new( { gemsCycle: decodeFromJSONField("u64", field.gemsCycle), startEpoch: decodeFromJSONField("u64", field.startEpoch), endEpoch: decodeFromJSONField("u64", field.endEpoch), gemsPerEpoch: decodeFromJSONField("u64", field.gemsPerEpoch) } ) }

 static fromJSON( json: Record<string, any> ): GemsSetForNewHiveCycle { if (json.$typeName !== GemsSetForNewHiveCycle.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GemsSetForNewHiveCycle.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GemsSetForNewHiveCycle { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGemsSetForNewHiveCycle(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GemsSetForNewHiveCycle object`); } return GemsSetForNewHiveCycle.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<GemsSetForNewHiveCycle> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GemsSetForNewHiveCycle object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGemsSetForNewHiveCycle(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GemsSetForNewHiveCycle object`); }
 return GemsSetForNewHiveCycle.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== GovernorBuzz =============================== */

export function isGovernorBuzz(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzz"; }

export interface GovernorBuzzFields { poolHive: ToField<"address">; buzz: ToField<String>; genAi: ToField<Option<String>>; likes: ToField<LinkedTable<"address", "bool">>; userBuzzes: ToField<LinkedTable<"address", ToPhantom<Dialogues>>> }

export type GovernorBuzzReified = Reified< GovernorBuzz, GovernorBuzzFields >;

export class GovernorBuzz implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzz"; static readonly $numTypeParams = 0;

 readonly $typeName = GovernorBuzz.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzz";

 readonly $typeArgs: [];

 readonly poolHive: ToField<"address">; readonly buzz: ToField<String>; readonly genAi: ToField<Option<String>>; readonly likes: ToField<LinkedTable<"address", "bool">>; readonly userBuzzes: ToField<LinkedTable<"address", ToPhantom<Dialogues>>>

 private constructor(typeArgs: [], fields: GovernorBuzzFields, ) { this.$fullTypeName = composeSuiType( GovernorBuzz.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzz"; this.$typeArgs = typeArgs;

 this.poolHive = fields.poolHive;; this.buzz = fields.buzz;; this.genAi = fields.genAi;; this.likes = fields.likes;; this.userBuzzes = fields.userBuzzes; }

 static reified( ): GovernorBuzzReified { return { typeName: GovernorBuzz.$typeName, fullTypeName: composeSuiType( GovernorBuzz.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzz", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GovernorBuzz.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GovernorBuzz.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GovernorBuzz.fromBcs( data, ), bcs: GovernorBuzz.bcs, fromJSONField: (field: any) => GovernorBuzz.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GovernorBuzz.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GovernorBuzz.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => GovernorBuzz.fetch( client, id, ), new: ( fields: GovernorBuzzFields, ) => { return new GovernorBuzz( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GovernorBuzz.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GovernorBuzz>> { return phantom(GovernorBuzz.reified( )); } static get p() { return GovernorBuzz.phantom() }

 static get bcs() { return bcs.struct("GovernorBuzz", {

 pool_hive: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), buzz: String.bcs, gen_ai: Option.bcs(String.bcs), likes: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), user_buzzes: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

}) };

 static fromFields( fields: Record<string, any> ): GovernorBuzz { return GovernorBuzz.reified( ).new( { poolHive: decodeFromFields("address", fields.pool_hive), buzz: decodeFromFields(String.reified(), fields.buzz), genAi: decodeFromFields(Option.reified(String.reified()), fields.gen_ai), likes: decodeFromFields(LinkedTable.reified("address", reified.phantom("bool")), fields.likes), userBuzzes: decodeFromFields(LinkedTable.reified("address", reified.phantom(Dialogues.reified())), fields.user_buzzes) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GovernorBuzz { if (!isGovernorBuzz(item.type)) { throw new Error("not a GovernorBuzz type");

 }

 return GovernorBuzz.reified( ).new( { poolHive: decodeFromFieldsWithTypes("address", item.fields.pool_hive), buzz: decodeFromFieldsWithTypes(String.reified(), item.fields.buzz), genAi: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.gen_ai), likes: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("bool")), item.fields.likes), userBuzzes: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(Dialogues.reified())), item.fields.user_buzzes) } ) }

 static fromBcs( data: Uint8Array ): GovernorBuzz { return GovernorBuzz.fromFields( GovernorBuzz.bcs.parse(data) ) }

 toJSONField() { return {

 poolHive: this.poolHive,buzz: this.buzz,genAi: fieldToJSON<Option<String>>(`0x1::option::Option<0x1::string::String>`, this.genAi),likes: this.likes.toJSONField(),userBuzzes: this.userBuzzes.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GovernorBuzz { return GovernorBuzz.reified( ).new( { poolHive: decodeFromJSONField("address", field.poolHive), buzz: decodeFromJSONField(String.reified(), field.buzz), genAi: decodeFromJSONField(Option.reified(String.reified()), field.genAi), likes: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("bool")), field.likes), userBuzzes: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(Dialogues.reified())), field.userBuzzes) } ) }

 static fromJSON( json: Record<string, any> ): GovernorBuzz { if (json.$typeName !== GovernorBuzz.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GovernorBuzz.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GovernorBuzz { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGovernorBuzz(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GovernorBuzz object`); } return GovernorBuzz.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<GovernorBuzz> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GovernorBuzz object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGovernorBuzz(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GovernorBuzz object`); }
 return GovernorBuzz.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== GovernorBuzzDestroyed =============================== */

export function isGovernorBuzzDestroyed(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzzDestroyed"; }

export interface GovernorBuzzDestroyedFields { index: ToField<"u64">; poolHive: ToField<"address">; buzz: ToField<String>; genAi: ToField<Option<String>> }

export type GovernorBuzzDestroyedReified = Reified< GovernorBuzzDestroyed, GovernorBuzzDestroyedFields >;

export class GovernorBuzzDestroyed implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzzDestroyed"; static readonly $numTypeParams = 0;

 readonly $typeName = GovernorBuzzDestroyed.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzzDestroyed";

 readonly $typeArgs: [];

 readonly index: ToField<"u64">; readonly poolHive: ToField<"address">; readonly buzz: ToField<String>; readonly genAi: ToField<Option<String>>

 private constructor(typeArgs: [], fields: GovernorBuzzDestroyedFields, ) { this.$fullTypeName = composeSuiType( GovernorBuzzDestroyed.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzzDestroyed"; this.$typeArgs = typeArgs;

 this.index = fields.index;; this.poolHive = fields.poolHive;; this.buzz = fields.buzz;; this.genAi = fields.genAi; }

 static reified( ): GovernorBuzzDestroyedReified { return { typeName: GovernorBuzzDestroyed.$typeName, fullTypeName: composeSuiType( GovernorBuzzDestroyed.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::GovernorBuzzDestroyed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GovernorBuzzDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GovernorBuzzDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GovernorBuzzDestroyed.fromBcs( data, ), bcs: GovernorBuzzDestroyed.bcs, fromJSONField: (field: any) => GovernorBuzzDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GovernorBuzzDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GovernorBuzzDestroyed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => GovernorBuzzDestroyed.fetch( client, id, ), new: ( fields: GovernorBuzzDestroyedFields, ) => { return new GovernorBuzzDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GovernorBuzzDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GovernorBuzzDestroyed>> { return phantom(GovernorBuzzDestroyed.reified( )); } static get p() { return GovernorBuzzDestroyed.phantom() }

 static get bcs() { return bcs.struct("GovernorBuzzDestroyed", {

 index: bcs.u64(), pool_hive: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), buzz: String.bcs, gen_ai: Option.bcs(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): GovernorBuzzDestroyed { return GovernorBuzzDestroyed.reified( ).new( { index: decodeFromFields("u64", fields.index), poolHive: decodeFromFields("address", fields.pool_hive), buzz: decodeFromFields(String.reified(), fields.buzz), genAi: decodeFromFields(Option.reified(String.reified()), fields.gen_ai) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GovernorBuzzDestroyed { if (!isGovernorBuzzDestroyed(item.type)) { throw new Error("not a GovernorBuzzDestroyed type");

 }

 return GovernorBuzzDestroyed.reified( ).new( { index: decodeFromFieldsWithTypes("u64", item.fields.index), poolHive: decodeFromFieldsWithTypes("address", item.fields.pool_hive), buzz: decodeFromFieldsWithTypes(String.reified(), item.fields.buzz), genAi: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.gen_ai) } ) }

 static fromBcs( data: Uint8Array ): GovernorBuzzDestroyed { return GovernorBuzzDestroyed.fromFields( GovernorBuzzDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 index: this.index.toString(),poolHive: this.poolHive,buzz: this.buzz,genAi: fieldToJSON<Option<String>>(`0x1::option::Option<0x1::string::String>`, this.genAi),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GovernorBuzzDestroyed { return GovernorBuzzDestroyed.reified( ).new( { index: decodeFromJSONField("u64", field.index), poolHive: decodeFromJSONField("address", field.poolHive), buzz: decodeFromJSONField(String.reified(), field.buzz), genAi: decodeFromJSONField(Option.reified(String.reified()), field.genAi) } ) }

 static fromJSON( json: Record<string, any> ): GovernorBuzzDestroyed { if (json.$typeName !== GovernorBuzzDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GovernorBuzzDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GovernorBuzzDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGovernorBuzzDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GovernorBuzzDestroyed object`); } return GovernorBuzzDestroyed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<GovernorBuzzDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GovernorBuzzDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGovernorBuzzDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GovernorBuzzDestroyed object`); }
 return GovernorBuzzDestroyed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== KraftedGemsForPoolHive =============================== */

export function isKraftedGemsForPoolHive(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::KraftedGemsForPoolHive"; }

export interface KraftedGemsForPoolHiveFields { poolHiveAddr: ToField<"address">; gemsEarnedByHive: ToField<"u64">; gemsPerEpochForHive: ToField<"u256">; indexIncrement: ToField<"u256">; globalClaimIndex: ToField<"u256">; lastClaimEpoch: ToField<"u64"> }

export type KraftedGemsForPoolHiveReified = Reified< KraftedGemsForPoolHive, KraftedGemsForPoolHiveFields >;

export class KraftedGemsForPoolHive implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::KraftedGemsForPoolHive"; static readonly $numTypeParams = 0;

 readonly $typeName = KraftedGemsForPoolHive.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::KraftedGemsForPoolHive";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly gemsEarnedByHive: ToField<"u64">; readonly gemsPerEpochForHive: ToField<"u256">; readonly indexIncrement: ToField<"u256">; readonly globalClaimIndex: ToField<"u256">; readonly lastClaimEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: KraftedGemsForPoolHiveFields, ) { this.$fullTypeName = composeSuiType( KraftedGemsForPoolHive.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::KraftedGemsForPoolHive"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.gemsEarnedByHive = fields.gemsEarnedByHive;; this.gemsPerEpochForHive = fields.gemsPerEpochForHive;; this.indexIncrement = fields.indexIncrement;; this.globalClaimIndex = fields.globalClaimIndex;; this.lastClaimEpoch = fields.lastClaimEpoch; }

 static reified( ): KraftedGemsForPoolHiveReified { return { typeName: KraftedGemsForPoolHive.$typeName, fullTypeName: composeSuiType( KraftedGemsForPoolHive.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::KraftedGemsForPoolHive", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => KraftedGemsForPoolHive.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => KraftedGemsForPoolHive.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => KraftedGemsForPoolHive.fromBcs( data, ), bcs: KraftedGemsForPoolHive.bcs, fromJSONField: (field: any) => KraftedGemsForPoolHive.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => KraftedGemsForPoolHive.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => KraftedGemsForPoolHive.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => KraftedGemsForPoolHive.fetch( client, id, ), new: ( fields: KraftedGemsForPoolHiveFields, ) => { return new KraftedGemsForPoolHive( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return KraftedGemsForPoolHive.reified() }

 static phantom( ): PhantomReified<ToTypeStr<KraftedGemsForPoolHive>> { return phantom(KraftedGemsForPoolHive.reified( )); } static get p() { return KraftedGemsForPoolHive.phantom() }

 static get bcs() { return bcs.struct("KraftedGemsForPoolHive", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), gems_earned_by_hive: bcs.u64(), gems_per_epoch_for_hive: bcs.u256(), index_increment: bcs.u256(), global_claim_index: bcs.u256(), last_claim_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): KraftedGemsForPoolHive { return KraftedGemsForPoolHive.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), gemsEarnedByHive: decodeFromFields("u64", fields.gems_earned_by_hive), gemsPerEpochForHive: decodeFromFields("u256", fields.gems_per_epoch_for_hive), indexIncrement: decodeFromFields("u256", fields.index_increment), globalClaimIndex: decodeFromFields("u256", fields.global_claim_index), lastClaimEpoch: decodeFromFields("u64", fields.last_claim_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): KraftedGemsForPoolHive { if (!isKraftedGemsForPoolHive(item.type)) { throw new Error("not a KraftedGemsForPoolHive type");

 }

 return KraftedGemsForPoolHive.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), gemsEarnedByHive: decodeFromFieldsWithTypes("u64", item.fields.gems_earned_by_hive), gemsPerEpochForHive: decodeFromFieldsWithTypes("u256", item.fields.gems_per_epoch_for_hive), indexIncrement: decodeFromFieldsWithTypes("u256", item.fields.index_increment), globalClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.global_claim_index), lastClaimEpoch: decodeFromFieldsWithTypes("u64", item.fields.last_claim_epoch) } ) }

 static fromBcs( data: Uint8Array ): KraftedGemsForPoolHive { return KraftedGemsForPoolHive.fromFields( KraftedGemsForPoolHive.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,gemsEarnedByHive: this.gemsEarnedByHive.toString(),gemsPerEpochForHive: this.gemsPerEpochForHive.toString(),indexIncrement: this.indexIncrement.toString(),globalClaimIndex: this.globalClaimIndex.toString(),lastClaimEpoch: this.lastClaimEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): KraftedGemsForPoolHive { return KraftedGemsForPoolHive.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), gemsEarnedByHive: decodeFromJSONField("u64", field.gemsEarnedByHive), gemsPerEpochForHive: decodeFromJSONField("u256", field.gemsPerEpochForHive), indexIncrement: decodeFromJSONField("u256", field.indexIncrement), globalClaimIndex: decodeFromJSONField("u256", field.globalClaimIndex), lastClaimEpoch: decodeFromJSONField("u64", field.lastClaimEpoch) } ) }

 static fromJSON( json: Record<string, any> ): KraftedGemsForPoolHive { if (json.$typeName !== KraftedGemsForPoolHive.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return KraftedGemsForPoolHive.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): KraftedGemsForPoolHive { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isKraftedGemsForPoolHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a KraftedGemsForPoolHive object`); } return KraftedGemsForPoolHive.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<KraftedGemsForPoolHive> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching KraftedGemsForPoolHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isKraftedGemsForPoolHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a KraftedGemsForPoolHive object`); }
 return KraftedGemsForPoolHive.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== LpBeeBox =============================== */

export function isLpBeeBox(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::LpBeeBox<"); }

export interface LpBeeBoxFields<H extends PhantomTypeArgument> { stakedBalance: ToField<Balance<H>>; totalGemsEarned: ToField<"u64">; claimIndex: ToField<"u256">; unbondingPsns: ToField<LinkedTable<"u64", "u64">>; unbondingBalance: ToField<Balance<H>>; beeFruits: ToField<LinkedTable<String1, "u256">> }

export type LpBeeBoxReified<H extends PhantomTypeArgument> = Reified< LpBeeBox<H>, LpBeeBoxFields<H> >;

export class LpBeeBox<H extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::LpBeeBox"; static readonly $numTypeParams = 1;

 readonly $typeName = LpBeeBox.$typeName;

 readonly $fullTypeName: `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::LpBeeBox<${PhantomToTypeStr<H>}>`;

 readonly $typeArgs: [PhantomToTypeStr<H>];

 readonly stakedBalance: ToField<Balance<H>>; readonly totalGemsEarned: ToField<"u64">; readonly claimIndex: ToField<"u256">; readonly unbondingPsns: ToField<LinkedTable<"u64", "u64">>; readonly unbondingBalance: ToField<Balance<H>>; readonly beeFruits: ToField<LinkedTable<String1, "u256">>

 private constructor(typeArgs: [PhantomToTypeStr<H>], fields: LpBeeBoxFields<H>, ) { this.$fullTypeName = composeSuiType( LpBeeBox.$typeName, ...typeArgs ) as `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::LpBeeBox<${PhantomToTypeStr<H>}>`; this.$typeArgs = typeArgs;

 this.stakedBalance = fields.stakedBalance;; this.totalGemsEarned = fields.totalGemsEarned;; this.claimIndex = fields.claimIndex;; this.unbondingPsns = fields.unbondingPsns;; this.unbondingBalance = fields.unbondingBalance;; this.beeFruits = fields.beeFruits; }

 static reified<H extends PhantomReified<PhantomTypeArgument>>( H: H ): LpBeeBoxReified<ToPhantomTypeArgument<H>> { return { typeName: LpBeeBox.$typeName, fullTypeName: composeSuiType( LpBeeBox.$typeName, ...[extractType(H)] ) as `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::LpBeeBox<${PhantomToTypeStr<ToPhantomTypeArgument<H>>}>`, typeArgs: [ extractType(H) ] as [PhantomToTypeStr<ToPhantomTypeArgument<H>>], reifiedTypeArgs: [H], fromFields: (fields: Record<string, any>) => LpBeeBox.fromFields( H, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LpBeeBox.fromFieldsWithTypes( H, item, ), fromBcs: (data: Uint8Array) => LpBeeBox.fromBcs( H, data, ), bcs: LpBeeBox.bcs, fromJSONField: (field: any) => LpBeeBox.fromJSONField( H, field, ), fromJSON: (json: Record<string, any>) => LpBeeBox.fromJSON( H, json, ), fromSuiParsedData: (content: SuiParsedData) => LpBeeBox.fromSuiParsedData( H, content, ), fetch: async (client: SuiClient, id: string) => LpBeeBox.fetch( client, H, id, ), new: ( fields: LpBeeBoxFields<ToPhantomTypeArgument<H>>, ) => { return new LpBeeBox( [extractType(H)], fields ) }, kind: "StructClassReified", } }

 static get r() { return LpBeeBox.reified }

 static phantom<H extends PhantomReified<PhantomTypeArgument>>( H: H ): PhantomReified<ToTypeStr<LpBeeBox<ToPhantomTypeArgument<H>>>> { return phantom(LpBeeBox.reified( H )); } static get p() { return LpBeeBox.phantom }

 static get bcs() { return bcs.struct("LpBeeBox", {

 staked_balance: Balance.bcs, total_gems_earned: bcs.u64(), claim_index: bcs.u256(), unbonding_psns: LinkedTable.bcs(bcs.u64()), unbonding_balance: Balance.bcs, bee_fruits: LinkedTable.bcs(String1.bcs)

}) };

 static fromFields<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, fields: Record<string, any> ): LpBeeBox<ToPhantomTypeArgument<H>> { return LpBeeBox.reified( typeArg, ).new( { stakedBalance: decodeFromFields(Balance.reified(typeArg), fields.staked_balance), totalGemsEarned: decodeFromFields("u64", fields.total_gems_earned), claimIndex: decodeFromFields("u256", fields.claim_index), unbondingPsns: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u64")), fields.unbonding_psns), unbondingBalance: decodeFromFields(Balance.reified(typeArg), fields.unbonding_balance), beeFruits: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("u256")), fields.bee_fruits) } ) }

 static fromFieldsWithTypes<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, item: FieldsWithTypes ): LpBeeBox<ToPhantomTypeArgument<H>> { if (!isLpBeeBox(item.type)) { throw new Error("not a LpBeeBox type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return LpBeeBox.reified( typeArg, ).new( { stakedBalance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.staked_balance), totalGemsEarned: decodeFromFieldsWithTypes("u64", item.fields.total_gems_earned), claimIndex: decodeFromFieldsWithTypes("u256", item.fields.claim_index), unbondingPsns: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u64")), item.fields.unbonding_psns), unbondingBalance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.unbonding_balance), beeFruits: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("u256")), item.fields.bee_fruits) } ) }

 static fromBcs<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, data: Uint8Array ): LpBeeBox<ToPhantomTypeArgument<H>> { return LpBeeBox.fromFields( typeArg, LpBeeBox.bcs.parse(data) ) }

 toJSONField() { return {

 stakedBalance: this.stakedBalance.toJSONField(),totalGemsEarned: this.totalGemsEarned.toString(),claimIndex: this.claimIndex.toString(),unbondingPsns: this.unbondingPsns.toJSONField(),unbondingBalance: this.unbondingBalance.toJSONField(),beeFruits: this.beeFruits.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, field: any ): LpBeeBox<ToPhantomTypeArgument<H>> { return LpBeeBox.reified( typeArg, ).new( { stakedBalance: decodeFromJSONField(Balance.reified(typeArg), field.stakedBalance), totalGemsEarned: decodeFromJSONField("u64", field.totalGemsEarned), claimIndex: decodeFromJSONField("u256", field.claimIndex), unbondingPsns: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u64")), field.unbondingPsns), unbondingBalance: decodeFromJSONField(Balance.reified(typeArg), field.unbondingBalance), beeFruits: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("u256")), field.beeFruits) } ) }

 static fromJSON<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, json: Record<string, any> ): LpBeeBox<ToPhantomTypeArgument<H>> { if (json.$typeName !== LpBeeBox.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(LpBeeBox.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return LpBeeBox.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, content: SuiParsedData ): LpBeeBox<ToPhantomTypeArgument<H>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLpBeeBox(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LpBeeBox object`); } return LpBeeBox.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<H extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: H, id: string ): Promise<LpBeeBox<ToPhantomTypeArgument<H>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LpBeeBox object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLpBeeBox(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LpBeeBox object`); }
 return LpBeeBox.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== MoreFruitsAdded =============================== */

export function isMoreFruitsAdded(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::MoreFruitsAdded"; }

export interface MoreFruitsAddedFields { poolHiveAddr: ToField<"address">; beeFruitType: ToField<String1>; fruitsAdded: ToField<"u64">; additionalPerEpoch: ToField<"u64">; fruitsPerEpoch: ToField<"u64">; availableFruits: ToField<"u64"> }

export type MoreFruitsAddedReified = Reified< MoreFruitsAdded, MoreFruitsAddedFields >;

export class MoreFruitsAdded implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::MoreFruitsAdded"; static readonly $numTypeParams = 0;

 readonly $typeName = MoreFruitsAdded.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::MoreFruitsAdded";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly beeFruitType: ToField<String1>; readonly fruitsAdded: ToField<"u64">; readonly additionalPerEpoch: ToField<"u64">; readonly fruitsPerEpoch: ToField<"u64">; readonly availableFruits: ToField<"u64">

 private constructor(typeArgs: [], fields: MoreFruitsAddedFields, ) { this.$fullTypeName = composeSuiType( MoreFruitsAdded.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::MoreFruitsAdded"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.beeFruitType = fields.beeFruitType;; this.fruitsAdded = fields.fruitsAdded;; this.additionalPerEpoch = fields.additionalPerEpoch;; this.fruitsPerEpoch = fields.fruitsPerEpoch;; this.availableFruits = fields.availableFruits; }

 static reified( ): MoreFruitsAddedReified { return { typeName: MoreFruitsAdded.$typeName, fullTypeName: composeSuiType( MoreFruitsAdded.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::MoreFruitsAdded", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MoreFruitsAdded.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MoreFruitsAdded.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MoreFruitsAdded.fromBcs( data, ), bcs: MoreFruitsAdded.bcs, fromJSONField: (field: any) => MoreFruitsAdded.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MoreFruitsAdded.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MoreFruitsAdded.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => MoreFruitsAdded.fetch( client, id, ), new: ( fields: MoreFruitsAddedFields, ) => { return new MoreFruitsAdded( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MoreFruitsAdded.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MoreFruitsAdded>> { return phantom(MoreFruitsAdded.reified( )); } static get p() { return MoreFruitsAdded.phantom() }

 static get bcs() { return bcs.struct("MoreFruitsAdded", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bee_fruit_type: String1.bcs, fruits_added: bcs.u64(), additional_per_epoch: bcs.u64(), fruits_per_epoch: bcs.u64(), available_fruits: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): MoreFruitsAdded { return MoreFruitsAdded.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), beeFruitType: decodeFromFields(String1.reified(), fields.bee_fruit_type), fruitsAdded: decodeFromFields("u64", fields.fruits_added), additionalPerEpoch: decodeFromFields("u64", fields.additional_per_epoch), fruitsPerEpoch: decodeFromFields("u64", fields.fruits_per_epoch), availableFruits: decodeFromFields("u64", fields.available_fruits) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MoreFruitsAdded { if (!isMoreFruitsAdded(item.type)) { throw new Error("not a MoreFruitsAdded type");

 }

 return MoreFruitsAdded.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), beeFruitType: decodeFromFieldsWithTypes(String1.reified(), item.fields.bee_fruit_type), fruitsAdded: decodeFromFieldsWithTypes("u64", item.fields.fruits_added), additionalPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.additional_per_epoch), fruitsPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.fruits_per_epoch), availableFruits: decodeFromFieldsWithTypes("u64", item.fields.available_fruits) } ) }

 static fromBcs( data: Uint8Array ): MoreFruitsAdded { return MoreFruitsAdded.fromFields( MoreFruitsAdded.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,beeFruitType: this.beeFruitType,fruitsAdded: this.fruitsAdded.toString(),additionalPerEpoch: this.additionalPerEpoch.toString(),fruitsPerEpoch: this.fruitsPerEpoch.toString(),availableFruits: this.availableFruits.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MoreFruitsAdded { return MoreFruitsAdded.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), beeFruitType: decodeFromJSONField(String1.reified(), field.beeFruitType), fruitsAdded: decodeFromJSONField("u64", field.fruitsAdded), additionalPerEpoch: decodeFromJSONField("u64", field.additionalPerEpoch), fruitsPerEpoch: decodeFromJSONField("u64", field.fruitsPerEpoch), availableFruits: decodeFromJSONField("u64", field.availableFruits) } ) }

 static fromJSON( json: Record<string, any> ): MoreFruitsAdded { if (json.$typeName !== MoreFruitsAdded.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MoreFruitsAdded.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MoreFruitsAdded { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMoreFruitsAdded(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MoreFruitsAdded object`); } return MoreFruitsAdded.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<MoreFruitsAdded> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MoreFruitsAdded object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMoreFruitsAdded(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MoreFruitsAdded object`); }
 return MoreFruitsAdded.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewGovernorBuzz =============================== */

export function isNewGovernorBuzz(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewGovernorBuzz"; }

export interface NewGovernorBuzzFields { count: ToField<"u64">; poolHive: ToField<"address">; buzz: ToField<String>; genAi: ToField<Option<String>> }

export type NewGovernorBuzzReified = Reified< NewGovernorBuzz, NewGovernorBuzzFields >;

export class NewGovernorBuzz implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewGovernorBuzz"; static readonly $numTypeParams = 0;

 readonly $typeName = NewGovernorBuzz.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewGovernorBuzz";

 readonly $typeArgs: [];

 readonly count: ToField<"u64">; readonly poolHive: ToField<"address">; readonly buzz: ToField<String>; readonly genAi: ToField<Option<String>>

 private constructor(typeArgs: [], fields: NewGovernorBuzzFields, ) { this.$fullTypeName = composeSuiType( NewGovernorBuzz.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewGovernorBuzz"; this.$typeArgs = typeArgs;

 this.count = fields.count;; this.poolHive = fields.poolHive;; this.buzz = fields.buzz;; this.genAi = fields.genAi; }

 static reified( ): NewGovernorBuzzReified { return { typeName: NewGovernorBuzz.$typeName, fullTypeName: composeSuiType( NewGovernorBuzz.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewGovernorBuzz", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewGovernorBuzz.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewGovernorBuzz.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewGovernorBuzz.fromBcs( data, ), bcs: NewGovernorBuzz.bcs, fromJSONField: (field: any) => NewGovernorBuzz.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewGovernorBuzz.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewGovernorBuzz.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewGovernorBuzz.fetch( client, id, ), new: ( fields: NewGovernorBuzzFields, ) => { return new NewGovernorBuzz( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewGovernorBuzz.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewGovernorBuzz>> { return phantom(NewGovernorBuzz.reified( )); } static get p() { return NewGovernorBuzz.phantom() }

 static get bcs() { return bcs.struct("NewGovernorBuzz", {

 count: bcs.u64(), pool_hive: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), buzz: String.bcs, gen_ai: Option.bcs(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): NewGovernorBuzz { return NewGovernorBuzz.reified( ).new( { count: decodeFromFields("u64", fields.count), poolHive: decodeFromFields("address", fields.pool_hive), buzz: decodeFromFields(String.reified(), fields.buzz), genAi: decodeFromFields(Option.reified(String.reified()), fields.gen_ai) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewGovernorBuzz { if (!isNewGovernorBuzz(item.type)) { throw new Error("not a NewGovernorBuzz type");

 }

 return NewGovernorBuzz.reified( ).new( { count: decodeFromFieldsWithTypes("u64", item.fields.count), poolHive: decodeFromFieldsWithTypes("address", item.fields.pool_hive), buzz: decodeFromFieldsWithTypes(String.reified(), item.fields.buzz), genAi: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.gen_ai) } ) }

 static fromBcs( data: Uint8Array ): NewGovernorBuzz { return NewGovernorBuzz.fromFields( NewGovernorBuzz.bcs.parse(data) ) }

 toJSONField() { return {

 count: this.count.toString(),poolHive: this.poolHive,buzz: this.buzz,genAi: fieldToJSON<Option<String>>(`0x1::option::Option<0x1::string::String>`, this.genAi),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewGovernorBuzz { return NewGovernorBuzz.reified( ).new( { count: decodeFromJSONField("u64", field.count), poolHive: decodeFromJSONField("address", field.poolHive), buzz: decodeFromJSONField(String.reified(), field.buzz), genAi: decodeFromJSONField(Option.reified(String.reified()), field.genAi) } ) }

 static fromJSON( json: Record<string, any> ): NewGovernorBuzz { if (json.$typeName !== NewGovernorBuzz.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewGovernorBuzz.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewGovernorBuzz { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewGovernorBuzz(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewGovernorBuzz object`); } return NewGovernorBuzz.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewGovernorBuzz> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewGovernorBuzz object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewGovernorBuzz(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewGovernorBuzz object`); }
 return NewGovernorBuzz.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewProposalKrafted =============================== */

export function isNewProposalKrafted(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewProposalKrafted"; }

export interface NewProposalKraftedFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; proposer: ToField<"address">; title: ToField<String>; description: ToField<String>; link: ToField<String>; proposalType: ToField<"u64">; votingStartEpoch: ToField<"u64">; votingEndEpoch: ToField<"u64">; executionStartEpoch: ToField<"u64">; executionEndEpoch: ToField<"u64">; newParams: ToField<Option<Vector<"u64">>>; newWeights: ToField<Option<Vector<"u64">>>; newFeeInfo: ToField<Option<Vector<"u64">>>; fruitLife: ToField<Option<FruitLife>> }

export type NewProposalKraftedReified = Reified< NewProposalKrafted, NewProposalKraftedFields >;

export class NewProposalKrafted implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewProposalKrafted"; static readonly $numTypeParams = 0;

 readonly $typeName = NewProposalKrafted.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewProposalKrafted";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly proposer: ToField<"address">; readonly title: ToField<String>; readonly description: ToField<String>; readonly link: ToField<String>; readonly proposalType: ToField<"u64">; readonly votingStartEpoch: ToField<"u64">; readonly votingEndEpoch: ToField<"u64">; readonly executionStartEpoch: ToField<"u64">; readonly executionEndEpoch: ToField<"u64">; readonly newParams: ToField<Option<Vector<"u64">>>; readonly newWeights: ToField<Option<Vector<"u64">>>; readonly newFeeInfo: ToField<Option<Vector<"u64">>>; readonly fruitLife: ToField<Option<FruitLife>>

 private constructor(typeArgs: [], fields: NewProposalKraftedFields, ) { this.$fullTypeName = composeSuiType( NewProposalKrafted.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewProposalKrafted"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.proposer = fields.proposer;; this.title = fields.title;; this.description = fields.description;; this.link = fields.link;; this.proposalType = fields.proposalType;; this.votingStartEpoch = fields.votingStartEpoch;; this.votingEndEpoch = fields.votingEndEpoch;; this.executionStartEpoch = fields.executionStartEpoch;; this.executionEndEpoch = fields.executionEndEpoch;; this.newParams = fields.newParams;; this.newWeights = fields.newWeights;; this.newFeeInfo = fields.newFeeInfo;; this.fruitLife = fields.fruitLife; }

 static reified( ): NewProposalKraftedReified { return { typeName: NewProposalKrafted.$typeName, fullTypeName: composeSuiType( NewProposalKrafted.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::NewProposalKrafted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewProposalKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewProposalKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewProposalKrafted.fromBcs( data, ), bcs: NewProposalKrafted.bcs, fromJSONField: (field: any) => NewProposalKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewProposalKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewProposalKrafted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewProposalKrafted.fetch( client, id, ), new: ( fields: NewProposalKraftedFields, ) => { return new NewProposalKrafted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewProposalKrafted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewProposalKrafted>> { return phantom(NewProposalKrafted.reified( )); } static get p() { return NewProposalKrafted.phantom() }

 static get bcs() { return bcs.struct("NewProposalKrafted", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), proposal_id: bcs.u64(), proposer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), title: String.bcs, description: String.bcs, link: String.bcs, proposal_type: bcs.u64(), voting_start_epoch: bcs.u64(), voting_end_epoch: bcs.u64(), execution_start_epoch: bcs.u64(), execution_end_epoch: bcs.u64(), new_params: Option.bcs(bcs.vector(bcs.u64())), new_weights: Option.bcs(bcs.vector(bcs.u64())), new_fee_info: Option.bcs(bcs.vector(bcs.u64())), fruit_life: Option.bcs(FruitLife.bcs)

}) };

 static fromFields( fields: Record<string, any> ): NewProposalKrafted { return NewProposalKrafted.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), proposalId: decodeFromFields("u64", fields.proposal_id), proposer: decodeFromFields("address", fields.proposer), title: decodeFromFields(String.reified(), fields.title), description: decodeFromFields(String.reified(), fields.description), link: decodeFromFields(String.reified(), fields.link), proposalType: decodeFromFields("u64", fields.proposal_type), votingStartEpoch: decodeFromFields("u64", fields.voting_start_epoch), votingEndEpoch: decodeFromFields("u64", fields.voting_end_epoch), executionStartEpoch: decodeFromFields("u64", fields.execution_start_epoch), executionEndEpoch: decodeFromFields("u64", fields.execution_end_epoch), newParams: decodeFromFields(Option.reified(reified.vector("u64")), fields.new_params), newWeights: decodeFromFields(Option.reified(reified.vector("u64")), fields.new_weights), newFeeInfo: decodeFromFields(Option.reified(reified.vector("u64")), fields.new_fee_info), fruitLife: decodeFromFields(Option.reified(FruitLife.reified()), fields.fruit_life) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewProposalKrafted { if (!isNewProposalKrafted(item.type)) { throw new Error("not a NewProposalKrafted type");

 }

 return NewProposalKrafted.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), proposalId: decodeFromFieldsWithTypes("u64", item.fields.proposal_id), proposer: decodeFromFieldsWithTypes("address", item.fields.proposer), title: decodeFromFieldsWithTypes(String.reified(), item.fields.title), description: decodeFromFieldsWithTypes(String.reified(), item.fields.description), link: decodeFromFieldsWithTypes(String.reified(), item.fields.link), proposalType: decodeFromFieldsWithTypes("u64", item.fields.proposal_type), votingStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.voting_start_epoch), votingEndEpoch: decodeFromFieldsWithTypes("u64", item.fields.voting_end_epoch), executionStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.execution_start_epoch), executionEndEpoch: decodeFromFieldsWithTypes("u64", item.fields.execution_end_epoch), newParams: decodeFromFieldsWithTypes(Option.reified(reified.vector("u64")), item.fields.new_params), newWeights: decodeFromFieldsWithTypes(Option.reified(reified.vector("u64")), item.fields.new_weights), newFeeInfo: decodeFromFieldsWithTypes(Option.reified(reified.vector("u64")), item.fields.new_fee_info), fruitLife: decodeFromFieldsWithTypes(Option.reified(FruitLife.reified()), item.fields.fruit_life) } ) }

 static fromBcs( data: Uint8Array ): NewProposalKrafted { return NewProposalKrafted.fromFields( NewProposalKrafted.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,proposalId: this.proposalId.toString(),proposer: this.proposer,title: this.title,description: this.description,link: this.link,proposalType: this.proposalType.toString(),votingStartEpoch: this.votingStartEpoch.toString(),votingEndEpoch: this.votingEndEpoch.toString(),executionStartEpoch: this.executionStartEpoch.toString(),executionEndEpoch: this.executionEndEpoch.toString(),newParams: fieldToJSON<Option<Vector<"u64">>>(`0x1::option::Option<vector<u64>>`, this.newParams),newWeights: fieldToJSON<Option<Vector<"u64">>>(`0x1::option::Option<vector<u64>>`, this.newWeights),newFeeInfo: fieldToJSON<Option<Vector<"u64">>>(`0x1::option::Option<vector<u64>>`, this.newFeeInfo),fruitLife: fieldToJSON<Option<FruitLife>>(`0x1::option::Option<0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife>`, this.fruitLife),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewProposalKrafted { return NewProposalKrafted.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), proposalId: decodeFromJSONField("u64", field.proposalId), proposer: decodeFromJSONField("address", field.proposer), title: decodeFromJSONField(String.reified(), field.title), description: decodeFromJSONField(String.reified(), field.description), link: decodeFromJSONField(String.reified(), field.link), proposalType: decodeFromJSONField("u64", field.proposalType), votingStartEpoch: decodeFromJSONField("u64", field.votingStartEpoch), votingEndEpoch: decodeFromJSONField("u64", field.votingEndEpoch), executionStartEpoch: decodeFromJSONField("u64", field.executionStartEpoch), executionEndEpoch: decodeFromJSONField("u64", field.executionEndEpoch), newParams: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newParams), newWeights: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newWeights), newFeeInfo: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newFeeInfo), fruitLife: decodeFromJSONField(Option.reified(FruitLife.reified()), field.fruitLife) } ) }

 static fromJSON( json: Record<string, any> ): NewProposalKrafted { if (json.$typeName !== NewProposalKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewProposalKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewProposalKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewProposalKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewProposalKrafted object`); } return NewProposalKrafted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewProposalKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewProposalKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewProposalKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewProposalKrafted object`); }
 return NewProposalKrafted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PoolGovernorBuzzes =============================== */

export function isPoolGovernorBuzzes(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolGovernorBuzzes"; }

export interface PoolGovernorBuzzesFields { id: ToField<UID>; governorBuzzes: ToField<LinkedTable<"u64", ToPhantom<GovernorBuzz>>>; count: ToField<"u64"> }

export type PoolGovernorBuzzesReified = Reified< PoolGovernorBuzzes, PoolGovernorBuzzesFields >;

export class PoolGovernorBuzzes implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolGovernorBuzzes"; static readonly $numTypeParams = 0;

 readonly $typeName = PoolGovernorBuzzes.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolGovernorBuzzes";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly governorBuzzes: ToField<LinkedTable<"u64", ToPhantom<GovernorBuzz>>>; readonly count: ToField<"u64">

 private constructor(typeArgs: [], fields: PoolGovernorBuzzesFields, ) { this.$fullTypeName = composeSuiType( PoolGovernorBuzzes.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolGovernorBuzzes"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.governorBuzzes = fields.governorBuzzes;; this.count = fields.count; }

 static reified( ): PoolGovernorBuzzesReified { return { typeName: PoolGovernorBuzzes.$typeName, fullTypeName: composeSuiType( PoolGovernorBuzzes.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolGovernorBuzzes", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolGovernorBuzzes.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolGovernorBuzzes.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolGovernorBuzzes.fromBcs( data, ), bcs: PoolGovernorBuzzes.bcs, fromJSONField: (field: any) => PoolGovernorBuzzes.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolGovernorBuzzes.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolGovernorBuzzes.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PoolGovernorBuzzes.fetch( client, id, ), new: ( fields: PoolGovernorBuzzesFields, ) => { return new PoolGovernorBuzzes( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolGovernorBuzzes.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolGovernorBuzzes>> { return phantom(PoolGovernorBuzzes.reified( )); } static get p() { return PoolGovernorBuzzes.phantom() }

 static get bcs() { return bcs.struct("PoolGovernorBuzzes", {

 id: UID.bcs, governor_buzzes: LinkedTable.bcs(bcs.u64()), count: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PoolGovernorBuzzes { return PoolGovernorBuzzes.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), governorBuzzes: decodeFromFields(LinkedTable.reified("u64", reified.phantom(GovernorBuzz.reified())), fields.governor_buzzes), count: decodeFromFields("u64", fields.count) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolGovernorBuzzes { if (!isPoolGovernorBuzzes(item.type)) { throw new Error("not a PoolGovernorBuzzes type");

 }

 return PoolGovernorBuzzes.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), governorBuzzes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(GovernorBuzz.reified())), item.fields.governor_buzzes), count: decodeFromFieldsWithTypes("u64", item.fields.count) } ) }

 static fromBcs( data: Uint8Array ): PoolGovernorBuzzes { return PoolGovernorBuzzes.fromFields( PoolGovernorBuzzes.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,governorBuzzes: this.governorBuzzes.toJSONField(),count: this.count.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolGovernorBuzzes { return PoolGovernorBuzzes.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), governorBuzzes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(GovernorBuzz.reified())), field.governorBuzzes), count: decodeFromJSONField("u64", field.count) } ) }

 static fromJSON( json: Record<string, any> ): PoolGovernorBuzzes { if (json.$typeName !== PoolGovernorBuzzes.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolGovernorBuzzes.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolGovernorBuzzes { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolGovernorBuzzes(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolGovernorBuzzes object`); } return PoolGovernorBuzzes.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolGovernorBuzzes> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolGovernorBuzzes object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolGovernorBuzzes(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolGovernorBuzzes object`); }
 return PoolGovernorBuzzes.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PoolHive =============================== */

export function isPoolHive(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHive<"); }

export interface PoolHiveFields<H extends PhantomTypeArgument> { id: ToField<UID>; totalStaked: ToField<"u64">; totalUnbonding: ToField<"u64">; lpBeeBoxes: ToField<LinkedTable<"address", ToPhantom<LpBeeBox<H>>>>; gemsAvailable: ToField<HiveGems>; globalClaimIndex: ToField<"u256">; lastClaimEpoch: ToField<"u64">; beeFruitList: ToField<Vector<String1>>; proposalList: ToField<LinkedTable<"u64", ToPhantom<Proposal>>>; nextProposalId: ToField<"u64">; moduleVersion: ToField<"u64"> }

export type PoolHiveReified<H extends PhantomTypeArgument> = Reified< PoolHive<H>, PoolHiveFields<H> >;

export class PoolHive<H extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHive"; static readonly $numTypeParams = 1;

 readonly $typeName = PoolHive.$typeName;

 readonly $fullTypeName: `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHive<${PhantomToTypeStr<H>}>`;

 readonly $typeArgs: [PhantomToTypeStr<H>];

 readonly id: ToField<UID>; readonly totalStaked: ToField<"u64">; readonly totalUnbonding: ToField<"u64">; readonly lpBeeBoxes: ToField<LinkedTable<"address", ToPhantom<LpBeeBox<H>>>>; readonly gemsAvailable: ToField<HiveGems>; readonly globalClaimIndex: ToField<"u256">; readonly lastClaimEpoch: ToField<"u64">; readonly beeFruitList: ToField<Vector<String1>>; readonly proposalList: ToField<LinkedTable<"u64", ToPhantom<Proposal>>>; readonly nextProposalId: ToField<"u64">; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<H>], fields: PoolHiveFields<H>, ) { this.$fullTypeName = composeSuiType( PoolHive.$typeName, ...typeArgs ) as `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHive<${PhantomToTypeStr<H>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.totalStaked = fields.totalStaked;; this.totalUnbonding = fields.totalUnbonding;; this.lpBeeBoxes = fields.lpBeeBoxes;; this.gemsAvailable = fields.gemsAvailable;; this.globalClaimIndex = fields.globalClaimIndex;; this.lastClaimEpoch = fields.lastClaimEpoch;; this.beeFruitList = fields.beeFruitList;; this.proposalList = fields.proposalList;; this.nextProposalId = fields.nextProposalId;; this.moduleVersion = fields.moduleVersion; }

 static reified<H extends PhantomReified<PhantomTypeArgument>>( H: H ): PoolHiveReified<ToPhantomTypeArgument<H>> { return { typeName: PoolHive.$typeName, fullTypeName: composeSuiType( PoolHive.$typeName, ...[extractType(H)] ) as `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHive<${PhantomToTypeStr<ToPhantomTypeArgument<H>>}>`, typeArgs: [ extractType(H) ] as [PhantomToTypeStr<ToPhantomTypeArgument<H>>], reifiedTypeArgs: [H], fromFields: (fields: Record<string, any>) => PoolHive.fromFields( H, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolHive.fromFieldsWithTypes( H, item, ), fromBcs: (data: Uint8Array) => PoolHive.fromBcs( H, data, ), bcs: PoolHive.bcs, fromJSONField: (field: any) => PoolHive.fromJSONField( H, field, ), fromJSON: (json: Record<string, any>) => PoolHive.fromJSON( H, json, ), fromSuiParsedData: (content: SuiParsedData) => PoolHive.fromSuiParsedData( H, content, ), fetch: async (client: SuiClient, id: string) => PoolHive.fetch( client, H, id, ), new: ( fields: PoolHiveFields<ToPhantomTypeArgument<H>>, ) => { return new PoolHive( [extractType(H)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolHive.reified }

 static phantom<H extends PhantomReified<PhantomTypeArgument>>( H: H ): PhantomReified<ToTypeStr<PoolHive<ToPhantomTypeArgument<H>>>> { return phantom(PoolHive.reified( H )); } static get p() { return PoolHive.phantom }

 static get bcs() { return bcs.struct("PoolHive", {

 id: UID.bcs, total_staked: bcs.u64(), total_unbonding: bcs.u64(), lp_bee_boxes: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), gems_available: HiveGems.bcs, global_claim_index: bcs.u256(), last_claim_epoch: bcs.u64(), bee_fruit_list: bcs.vector(String1.bcs), proposal_list: LinkedTable.bcs(bcs.u64()), next_proposal_id: bcs.u64(), module_version: bcs.u64()

}) };

 static fromFields<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, fields: Record<string, any> ): PoolHive<ToPhantomTypeArgument<H>> { return PoolHive.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), totalStaked: decodeFromFields("u64", fields.total_staked), totalUnbonding: decodeFromFields("u64", fields.total_unbonding), lpBeeBoxes: decodeFromFields(LinkedTable.reified("address", reified.phantom(LpBeeBox.reified(typeArg))), fields.lp_bee_boxes), gemsAvailable: decodeFromFields(HiveGems.reified(), fields.gems_available), globalClaimIndex: decodeFromFields("u256", fields.global_claim_index), lastClaimEpoch: decodeFromFields("u64", fields.last_claim_epoch), beeFruitList: decodeFromFields(reified.vector(String1.reified()), fields.bee_fruit_list), proposalList: decodeFromFields(LinkedTable.reified("u64", reified.phantom(Proposal.reified())), fields.proposal_list), nextProposalId: decodeFromFields("u64", fields.next_proposal_id), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, item: FieldsWithTypes ): PoolHive<ToPhantomTypeArgument<H>> { if (!isPoolHive(item.type)) { throw new Error("not a PoolHive type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return PoolHive.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), totalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_staked), totalUnbonding: decodeFromFieldsWithTypes("u64", item.fields.total_unbonding), lpBeeBoxes: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(LpBeeBox.reified(typeArg))), item.fields.lp_bee_boxes), gemsAvailable: decodeFromFieldsWithTypes(HiveGems.reified(), item.fields.gems_available), globalClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.global_claim_index), lastClaimEpoch: decodeFromFieldsWithTypes("u64", item.fields.last_claim_epoch), beeFruitList: decodeFromFieldsWithTypes(reified.vector(String1.reified()), item.fields.bee_fruit_list), proposalList: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(Proposal.reified())), item.fields.proposal_list), nextProposalId: decodeFromFieldsWithTypes("u64", item.fields.next_proposal_id), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, data: Uint8Array ): PoolHive<ToPhantomTypeArgument<H>> { return PoolHive.fromFields( typeArg, PoolHive.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,totalStaked: this.totalStaked.toString(),totalUnbonding: this.totalUnbonding.toString(),lpBeeBoxes: this.lpBeeBoxes.toJSONField(),gemsAvailable: this.gemsAvailable.toJSONField(),globalClaimIndex: this.globalClaimIndex.toString(),lastClaimEpoch: this.lastClaimEpoch.toString(),beeFruitList: fieldToJSON<Vector<String1>>(`vector<0x1::ascii::String>`, this.beeFruitList),proposalList: this.proposalList.toJSONField(),nextProposalId: this.nextProposalId.toString(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, field: any ): PoolHive<ToPhantomTypeArgument<H>> { return PoolHive.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), totalStaked: decodeFromJSONField("u64", field.totalStaked), totalUnbonding: decodeFromJSONField("u64", field.totalUnbonding), lpBeeBoxes: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(LpBeeBox.reified(typeArg))), field.lpBeeBoxes), gemsAvailable: decodeFromJSONField(HiveGems.reified(), field.gemsAvailable), globalClaimIndex: decodeFromJSONField("u256", field.globalClaimIndex), lastClaimEpoch: decodeFromJSONField("u64", field.lastClaimEpoch), beeFruitList: decodeFromJSONField(reified.vector(String1.reified()), field.beeFruitList), proposalList: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(Proposal.reified())), field.proposalList), nextProposalId: decodeFromJSONField("u64", field.nextProposalId), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, json: Record<string, any> ): PoolHive<ToPhantomTypeArgument<H>> { if (json.$typeName !== PoolHive.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PoolHive.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return PoolHive.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, content: SuiParsedData ): PoolHive<ToPhantomTypeArgument<H>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolHive object`); } return PoolHive.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<H extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: H, id: string ): Promise<PoolHive<ToPhantomTypeArgument<H>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolHive object`); }
 return PoolHive.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PoolHiveKrafted =============================== */

export function isPoolHiveKrafted(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveKrafted"; }

export interface PoolHiveKraftedFields { poolId: ToField<"address">; lpIdentifier: ToField<String1>; poolHiveAddr: ToField<"address">; curEpoch: ToField<"u64"> }

export type PoolHiveKraftedReified = Reified< PoolHiveKrafted, PoolHiveKraftedFields >;

export class PoolHiveKrafted implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveKrafted"; static readonly $numTypeParams = 0;

 readonly $typeName = PoolHiveKrafted.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveKrafted";

 readonly $typeArgs: [];

 readonly poolId: ToField<"address">; readonly lpIdentifier: ToField<String1>; readonly poolHiveAddr: ToField<"address">; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: PoolHiveKraftedFields, ) { this.$fullTypeName = composeSuiType( PoolHiveKrafted.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveKrafted"; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.lpIdentifier = fields.lpIdentifier;; this.poolHiveAddr = fields.poolHiveAddr;; this.curEpoch = fields.curEpoch; }

 static reified( ): PoolHiveKraftedReified { return { typeName: PoolHiveKrafted.$typeName, fullTypeName: composeSuiType( PoolHiveKrafted.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveKrafted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolHiveKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolHiveKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolHiveKrafted.fromBcs( data, ), bcs: PoolHiveKrafted.bcs, fromJSONField: (field: any) => PoolHiveKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolHiveKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolHiveKrafted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PoolHiveKrafted.fetch( client, id, ), new: ( fields: PoolHiveKraftedFields, ) => { return new PoolHiveKrafted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolHiveKrafted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolHiveKrafted>> { return phantom(PoolHiveKrafted.reified( )); } static get p() { return PoolHiveKrafted.phantom() }

 static get bcs() { return bcs.struct("PoolHiveKrafted", {

 pool_id: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), lp_identifier: String1.bcs, pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PoolHiveKrafted { return PoolHiveKrafted.reified( ).new( { poolId: decodeFromFields("address", fields.pool_id), lpIdentifier: decodeFromFields(String1.reified(), fields.lp_identifier), poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolHiveKrafted { if (!isPoolHiveKrafted(item.type)) { throw new Error("not a PoolHiveKrafted type");

 }

 return PoolHiveKrafted.reified( ).new( { poolId: decodeFromFieldsWithTypes("address", item.fields.pool_id), lpIdentifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.lp_identifier), poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): PoolHiveKrafted { return PoolHiveKrafted.fromFields( PoolHiveKrafted.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,lpIdentifier: this.lpIdentifier,poolHiveAddr: this.poolHiveAddr,curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolHiveKrafted { return PoolHiveKrafted.reified( ).new( { poolId: decodeFromJSONField("address", field.poolId), lpIdentifier: decodeFromJSONField(String1.reified(), field.lpIdentifier), poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): PoolHiveKrafted { if (json.$typeName !== PoolHiveKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolHiveKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolHiveKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolHiveKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolHiveKrafted object`); } return PoolHiveKrafted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolHiveKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolHiveKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolHiveKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolHiveKrafted object`); }
 return PoolHiveKrafted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PoolHiveNecatarPointsUpdated =============================== */

export function isPoolHiveNecatarPointsUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveNecatarPointsUpdated"; }

export interface PoolHiveNecatarPointsUpdatedFields { poolHiveIdentifier: ToField<"address">; newGemsPoints: ToField<"u64">; totalGemsPoints: ToField<"u64"> }

export type PoolHiveNecatarPointsUpdatedReified = Reified< PoolHiveNecatarPointsUpdated, PoolHiveNecatarPointsUpdatedFields >;

export class PoolHiveNecatarPointsUpdated implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveNecatarPointsUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = PoolHiveNecatarPointsUpdated.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveNecatarPointsUpdated";

 readonly $typeArgs: [];

 readonly poolHiveIdentifier: ToField<"address">; readonly newGemsPoints: ToField<"u64">; readonly totalGemsPoints: ToField<"u64">

 private constructor(typeArgs: [], fields: PoolHiveNecatarPointsUpdatedFields, ) { this.$fullTypeName = composeSuiType( PoolHiveNecatarPointsUpdated.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveNecatarPointsUpdated"; this.$typeArgs = typeArgs;

 this.poolHiveIdentifier = fields.poolHiveIdentifier;; this.newGemsPoints = fields.newGemsPoints;; this.totalGemsPoints = fields.totalGemsPoints; }

 static reified( ): PoolHiveNecatarPointsUpdatedReified { return { typeName: PoolHiveNecatarPointsUpdated.$typeName, fullTypeName: composeSuiType( PoolHiveNecatarPointsUpdated.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolHiveNecatarPointsUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolHiveNecatarPointsUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolHiveNecatarPointsUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolHiveNecatarPointsUpdated.fromBcs( data, ), bcs: PoolHiveNecatarPointsUpdated.bcs, fromJSONField: (field: any) => PoolHiveNecatarPointsUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolHiveNecatarPointsUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolHiveNecatarPointsUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PoolHiveNecatarPointsUpdated.fetch( client, id, ), new: ( fields: PoolHiveNecatarPointsUpdatedFields, ) => { return new PoolHiveNecatarPointsUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolHiveNecatarPointsUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolHiveNecatarPointsUpdated>> { return phantom(PoolHiveNecatarPointsUpdated.reified( )); } static get p() { return PoolHiveNecatarPointsUpdated.phantom() }

 static get bcs() { return bcs.struct("PoolHiveNecatarPointsUpdated", {

 pool_hive_identifier: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), new_gems_points: bcs.u64(), total_gems_points: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PoolHiveNecatarPointsUpdated { return PoolHiveNecatarPointsUpdated.reified( ).new( { poolHiveIdentifier: decodeFromFields("address", fields.pool_hive_identifier), newGemsPoints: decodeFromFields("u64", fields.new_gems_points), totalGemsPoints: decodeFromFields("u64", fields.total_gems_points) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolHiveNecatarPointsUpdated { if (!isPoolHiveNecatarPointsUpdated(item.type)) { throw new Error("not a PoolHiveNecatarPointsUpdated type");

 }

 return PoolHiveNecatarPointsUpdated.reified( ).new( { poolHiveIdentifier: decodeFromFieldsWithTypes("address", item.fields.pool_hive_identifier), newGemsPoints: decodeFromFieldsWithTypes("u64", item.fields.new_gems_points), totalGemsPoints: decodeFromFieldsWithTypes("u64", item.fields.total_gems_points) } ) }

 static fromBcs( data: Uint8Array ): PoolHiveNecatarPointsUpdated { return PoolHiveNecatarPointsUpdated.fromFields( PoolHiveNecatarPointsUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveIdentifier: this.poolHiveIdentifier,newGemsPoints: this.newGemsPoints.toString(),totalGemsPoints: this.totalGemsPoints.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolHiveNecatarPointsUpdated { return PoolHiveNecatarPointsUpdated.reified( ).new( { poolHiveIdentifier: decodeFromJSONField("address", field.poolHiveIdentifier), newGemsPoints: decodeFromJSONField("u64", field.newGemsPoints), totalGemsPoints: decodeFromJSONField("u64", field.totalGemsPoints) } ) }

 static fromJSON( json: Record<string, any> ): PoolHiveNecatarPointsUpdated { if (json.$typeName !== PoolHiveNecatarPointsUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolHiveNecatarPointsUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolHiveNecatarPointsUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolHiveNecatarPointsUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolHiveNecatarPointsUpdated object`); } return PoolHiveNecatarPointsUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolHiveNecatarPointsUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolHiveNecatarPointsUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolHiveNecatarPointsUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolHiveNecatarPointsUpdated object`); }
 return PoolHiveNecatarPointsUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PoolsGovernor =============================== */

export function isPoolsGovernor(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernor"; }

export interface PoolsGovernorFields { id: ToField<UID>; governorProfile: ToField<HiveProfile>; managedBuzzes: ToField<LinkedTable<String1, ToPhantom<SystemBuzz>>>; buzzesToStore: ToField<"u64">; gemsCycle: ToField<"u64">; gemsSchedule: ToField<GemsSchedule>; totalGemsPoints: ToField<"u64">; gemsPointsMap: ToField<LinkedTable<"address", "u64">>; dexDaoCap: ToField<DexDaoCapability>; unbondingDuration: ToField<"u64">; voteConfig: ToField<VoteConfig>; activePoolHives: ToField<"u64">; poolHives: ToField<LinkedTable<String1, "address">>; moduleVersion: ToField<"u64"> }

export type PoolsGovernorReified = Reified< PoolsGovernor, PoolsGovernorFields >;

export class PoolsGovernor implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernor"; static readonly $numTypeParams = 0;

 readonly $typeName = PoolsGovernor.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernor";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly governorProfile: ToField<HiveProfile>; readonly managedBuzzes: ToField<LinkedTable<String1, ToPhantom<SystemBuzz>>>; readonly buzzesToStore: ToField<"u64">; readonly gemsCycle: ToField<"u64">; readonly gemsSchedule: ToField<GemsSchedule>; readonly totalGemsPoints: ToField<"u64">; readonly gemsPointsMap: ToField<LinkedTable<"address", "u64">>; readonly dexDaoCap: ToField<DexDaoCapability>; readonly unbondingDuration: ToField<"u64">; readonly voteConfig: ToField<VoteConfig>; readonly activePoolHives: ToField<"u64">; readonly poolHives: ToField<LinkedTable<String1, "address">>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: PoolsGovernorFields, ) { this.$fullTypeName = composeSuiType( PoolsGovernor.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernor"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.governorProfile = fields.governorProfile;; this.managedBuzzes = fields.managedBuzzes;; this.buzzesToStore = fields.buzzesToStore;; this.gemsCycle = fields.gemsCycle;; this.gemsSchedule = fields.gemsSchedule;; this.totalGemsPoints = fields.totalGemsPoints;; this.gemsPointsMap = fields.gemsPointsMap;; this.dexDaoCap = fields.dexDaoCap;; this.unbondingDuration = fields.unbondingDuration;; this.voteConfig = fields.voteConfig;; this.activePoolHives = fields.activePoolHives;; this.poolHives = fields.poolHives;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): PoolsGovernorReified { return { typeName: PoolsGovernor.$typeName, fullTypeName: composeSuiType( PoolsGovernor.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernor", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolsGovernor.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolsGovernor.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolsGovernor.fromBcs( data, ), bcs: PoolsGovernor.bcs, fromJSONField: (field: any) => PoolsGovernor.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolsGovernor.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolsGovernor.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PoolsGovernor.fetch( client, id, ), new: ( fields: PoolsGovernorFields, ) => { return new PoolsGovernor( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolsGovernor.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolsGovernor>> { return phantom(PoolsGovernor.reified( )); } static get p() { return PoolsGovernor.phantom() }

 static get bcs() { return bcs.struct("PoolsGovernor", {

 id: UID.bcs, governor_profile: HiveProfile.bcs, managed_buzzes: LinkedTable.bcs(String1.bcs), buzzes_to_store: bcs.u64(), gems_cycle: bcs.u64(), gems_schedule: GemsSchedule.bcs, total_gems_points: bcs.u64(), gems_points_map: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), dex_dao_cap: DexDaoCapability.bcs, unbonding_duration: bcs.u64(), vote_config: VoteConfig.bcs, active_pool_hives: bcs.u64(), pool_hives: LinkedTable.bcs(String1.bcs), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PoolsGovernor { return PoolsGovernor.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), governorProfile: decodeFromFields(HiveProfile.reified(), fields.governor_profile), managedBuzzes: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom(SystemBuzz.reified())), fields.managed_buzzes), buzzesToStore: decodeFromFields("u64", fields.buzzes_to_store), gemsCycle: decodeFromFields("u64", fields.gems_cycle), gemsSchedule: decodeFromFields(GemsSchedule.reified(), fields.gems_schedule), totalGemsPoints: decodeFromFields("u64", fields.total_gems_points), gemsPointsMap: decodeFromFields(LinkedTable.reified("address", reified.phantom("u64")), fields.gems_points_map), dexDaoCap: decodeFromFields(DexDaoCapability.reified(), fields.dex_dao_cap), unbondingDuration: decodeFromFields("u64", fields.unbonding_duration), voteConfig: decodeFromFields(VoteConfig.reified(), fields.vote_config), activePoolHives: decodeFromFields("u64", fields.active_pool_hives), poolHives: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.pool_hives), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolsGovernor { if (!isPoolsGovernor(item.type)) { throw new Error("not a PoolsGovernor type");

 }

 return PoolsGovernor.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), governorProfile: decodeFromFieldsWithTypes(HiveProfile.reified(), item.fields.governor_profile), managedBuzzes: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom(SystemBuzz.reified())), item.fields.managed_buzzes), buzzesToStore: decodeFromFieldsWithTypes("u64", item.fields.buzzes_to_store), gemsCycle: decodeFromFieldsWithTypes("u64", item.fields.gems_cycle), gemsSchedule: decodeFromFieldsWithTypes(GemsSchedule.reified(), item.fields.gems_schedule), totalGemsPoints: decodeFromFieldsWithTypes("u64", item.fields.total_gems_points), gemsPointsMap: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("u64")), item.fields.gems_points_map), dexDaoCap: decodeFromFieldsWithTypes(DexDaoCapability.reified(), item.fields.dex_dao_cap), unbondingDuration: decodeFromFieldsWithTypes("u64", item.fields.unbonding_duration), voteConfig: decodeFromFieldsWithTypes(VoteConfig.reified(), item.fields.vote_config), activePoolHives: decodeFromFieldsWithTypes("u64", item.fields.active_pool_hives), poolHives: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.pool_hives), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): PoolsGovernor { return PoolsGovernor.fromFields( PoolsGovernor.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,governorProfile: this.governorProfile.toJSONField(),managedBuzzes: this.managedBuzzes.toJSONField(),buzzesToStore: this.buzzesToStore.toString(),gemsCycle: this.gemsCycle.toString(),gemsSchedule: this.gemsSchedule.toJSONField(),totalGemsPoints: this.totalGemsPoints.toString(),gemsPointsMap: this.gemsPointsMap.toJSONField(),dexDaoCap: this.dexDaoCap.toJSONField(),unbondingDuration: this.unbondingDuration.toString(),voteConfig: this.voteConfig.toJSONField(),activePoolHives: this.activePoolHives.toString(),poolHives: this.poolHives.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolsGovernor { return PoolsGovernor.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), governorProfile: decodeFromJSONField(HiveProfile.reified(), field.governorProfile), managedBuzzes: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom(SystemBuzz.reified())), field.managedBuzzes), buzzesToStore: decodeFromJSONField("u64", field.buzzesToStore), gemsCycle: decodeFromJSONField("u64", field.gemsCycle), gemsSchedule: decodeFromJSONField(GemsSchedule.reified(), field.gemsSchedule), totalGemsPoints: decodeFromJSONField("u64", field.totalGemsPoints), gemsPointsMap: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("u64")), field.gemsPointsMap), dexDaoCap: decodeFromJSONField(DexDaoCapability.reified(), field.dexDaoCap), unbondingDuration: decodeFromJSONField("u64", field.unbondingDuration), voteConfig: decodeFromJSONField(VoteConfig.reified(), field.voteConfig), activePoolHives: decodeFromJSONField("u64", field.activePoolHives), poolHives: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.poolHives), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): PoolsGovernor { if (json.$typeName !== PoolsGovernor.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolsGovernor.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolsGovernor { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolsGovernor(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolsGovernor object`); } return PoolsGovernor.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolsGovernor> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolsGovernor object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolsGovernor(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolsGovernor object`); }
 return PoolsGovernor.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PoolsGovernorUpdated =============================== */

export function isPoolsGovernorUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernorUpdated"; }

export interface PoolsGovernorUpdatedFields { proposalRequiredDeposit: ToField<"u64">; votingStartDelay: ToField<"u64">; votingPeriodLength: ToField<"u64">; executionDelay: ToField<"u64">; executionPeriodLength: ToField<"u64">; proposalRequiredQuorum: ToField<"u64">; proposalApprovalThreshold: ToField<"u64">; buzzesToStore: ToField<"u64"> }

export type PoolsGovernorUpdatedReified = Reified< PoolsGovernorUpdated, PoolsGovernorUpdatedFields >;

export class PoolsGovernorUpdated implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernorUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = PoolsGovernorUpdated.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernorUpdated";

 readonly $typeArgs: [];

 readonly proposalRequiredDeposit: ToField<"u64">; readonly votingStartDelay: ToField<"u64">; readonly votingPeriodLength: ToField<"u64">; readonly executionDelay: ToField<"u64">; readonly executionPeriodLength: ToField<"u64">; readonly proposalRequiredQuorum: ToField<"u64">; readonly proposalApprovalThreshold: ToField<"u64">; readonly buzzesToStore: ToField<"u64">

 private constructor(typeArgs: [], fields: PoolsGovernorUpdatedFields, ) { this.$fullTypeName = composeSuiType( PoolsGovernorUpdated.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernorUpdated"; this.$typeArgs = typeArgs;

 this.proposalRequiredDeposit = fields.proposalRequiredDeposit;; this.votingStartDelay = fields.votingStartDelay;; this.votingPeriodLength = fields.votingPeriodLength;; this.executionDelay = fields.executionDelay;; this.executionPeriodLength = fields.executionPeriodLength;; this.proposalRequiredQuorum = fields.proposalRequiredQuorum;; this.proposalApprovalThreshold = fields.proposalApprovalThreshold;; this.buzzesToStore = fields.buzzesToStore; }

 static reified( ): PoolsGovernorUpdatedReified { return { typeName: PoolsGovernorUpdated.$typeName, fullTypeName: composeSuiType( PoolsGovernorUpdated.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::PoolsGovernorUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolsGovernorUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolsGovernorUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolsGovernorUpdated.fromBcs( data, ), bcs: PoolsGovernorUpdated.bcs, fromJSONField: (field: any) => PoolsGovernorUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolsGovernorUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolsGovernorUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PoolsGovernorUpdated.fetch( client, id, ), new: ( fields: PoolsGovernorUpdatedFields, ) => { return new PoolsGovernorUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolsGovernorUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolsGovernorUpdated>> { return phantom(PoolsGovernorUpdated.reified( )); } static get p() { return PoolsGovernorUpdated.phantom() }

 static get bcs() { return bcs.struct("PoolsGovernorUpdated", {

 proposal_required_deposit: bcs.u64(), voting_start_delay: bcs.u64(), voting_period_length: bcs.u64(), execution_delay: bcs.u64(), execution_period_length: bcs.u64(), proposal_required_quorum: bcs.u64(), proposal_approval_threshold: bcs.u64(), buzzes_to_store: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PoolsGovernorUpdated { return PoolsGovernorUpdated.reified( ).new( { proposalRequiredDeposit: decodeFromFields("u64", fields.proposal_required_deposit), votingStartDelay: decodeFromFields("u64", fields.voting_start_delay), votingPeriodLength: decodeFromFields("u64", fields.voting_period_length), executionDelay: decodeFromFields("u64", fields.execution_delay), executionPeriodLength: decodeFromFields("u64", fields.execution_period_length), proposalRequiredQuorum: decodeFromFields("u64", fields.proposal_required_quorum), proposalApprovalThreshold: decodeFromFields("u64", fields.proposal_approval_threshold), buzzesToStore: decodeFromFields("u64", fields.buzzes_to_store) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolsGovernorUpdated { if (!isPoolsGovernorUpdated(item.type)) { throw new Error("not a PoolsGovernorUpdated type");

 }

 return PoolsGovernorUpdated.reified( ).new( { proposalRequiredDeposit: decodeFromFieldsWithTypes("u64", item.fields.proposal_required_deposit), votingStartDelay: decodeFromFieldsWithTypes("u64", item.fields.voting_start_delay), votingPeriodLength: decodeFromFieldsWithTypes("u64", item.fields.voting_period_length), executionDelay: decodeFromFieldsWithTypes("u64", item.fields.execution_delay), executionPeriodLength: decodeFromFieldsWithTypes("u64", item.fields.execution_period_length), proposalRequiredQuorum: decodeFromFieldsWithTypes("u64", item.fields.proposal_required_quorum), proposalApprovalThreshold: decodeFromFieldsWithTypes("u64", item.fields.proposal_approval_threshold), buzzesToStore: decodeFromFieldsWithTypes("u64", item.fields.buzzes_to_store) } ) }

 static fromBcs( data: Uint8Array ): PoolsGovernorUpdated { return PoolsGovernorUpdated.fromFields( PoolsGovernorUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 proposalRequiredDeposit: this.proposalRequiredDeposit.toString(),votingStartDelay: this.votingStartDelay.toString(),votingPeriodLength: this.votingPeriodLength.toString(),executionDelay: this.executionDelay.toString(),executionPeriodLength: this.executionPeriodLength.toString(),proposalRequiredQuorum: this.proposalRequiredQuorum.toString(),proposalApprovalThreshold: this.proposalApprovalThreshold.toString(),buzzesToStore: this.buzzesToStore.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolsGovernorUpdated { return PoolsGovernorUpdated.reified( ).new( { proposalRequiredDeposit: decodeFromJSONField("u64", field.proposalRequiredDeposit), votingStartDelay: decodeFromJSONField("u64", field.votingStartDelay), votingPeriodLength: decodeFromJSONField("u64", field.votingPeriodLength), executionDelay: decodeFromJSONField("u64", field.executionDelay), executionPeriodLength: decodeFromJSONField("u64", field.executionPeriodLength), proposalRequiredQuorum: decodeFromJSONField("u64", field.proposalRequiredQuorum), proposalApprovalThreshold: decodeFromJSONField("u64", field.proposalApprovalThreshold), buzzesToStore: decodeFromJSONField("u64", field.buzzesToStore) } ) }

 static fromJSON( json: Record<string, any> ): PoolsGovernorUpdated { if (json.$typeName !== PoolsGovernorUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolsGovernorUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolsGovernorUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolsGovernorUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolsGovernorUpdated object`); } return PoolsGovernorUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolsGovernorUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolsGovernorUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolsGovernorUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolsGovernorUpdated object`); }
 return PoolsGovernorUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Proposal =============================== */

export function isProposal(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Proposal"; }

export interface ProposalFields { proposalId: ToField<"u64">; proposer: ToField<"address">; deposit: ToField<Balance<ToPhantom<HIVE>>>; title: ToField<String>; description: ToField<String>; link: ToField<String>; proposalType: ToField<"u64">; votingStartEpoch: ToField<"u64">; votingEndEpoch: ToField<"u64">; executionStartEpoch: ToField<"u64">; executionEndEpoch: ToField<"u64">; proposalStatus: ToField<"u64">; yesVotes: ToField<"u64">; noVotes: ToField<"u64">; voters: ToField<LinkedTable<"address", "bool">>; fruitLife: ToField<Option<FruitLife>>; newParams: ToField<Option<Vector<"u64">>>; newWeights: ToField<Option<Vector<"u64">>>; newFeeInfo: ToField<Option<Vector<"u64">>> }

export type ProposalReified = Reified< Proposal, ProposalFields >;

export class Proposal implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Proposal"; static readonly $numTypeParams = 0;

 readonly $typeName = Proposal.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Proposal";

 readonly $typeArgs: [];

 readonly proposalId: ToField<"u64">; readonly proposer: ToField<"address">; readonly deposit: ToField<Balance<ToPhantom<HIVE>>>; readonly title: ToField<String>; readonly description: ToField<String>; readonly link: ToField<String>; readonly proposalType: ToField<"u64">; readonly votingStartEpoch: ToField<"u64">; readonly votingEndEpoch: ToField<"u64">; readonly executionStartEpoch: ToField<"u64">; readonly executionEndEpoch: ToField<"u64">; readonly proposalStatus: ToField<"u64">; readonly yesVotes: ToField<"u64">; readonly noVotes: ToField<"u64">; readonly voters: ToField<LinkedTable<"address", "bool">>; readonly fruitLife: ToField<Option<FruitLife>>; readonly newParams: ToField<Option<Vector<"u64">>>; readonly newWeights: ToField<Option<Vector<"u64">>>; readonly newFeeInfo: ToField<Option<Vector<"u64">>>

 private constructor(typeArgs: [], fields: ProposalFields, ) { this.$fullTypeName = composeSuiType( Proposal.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Proposal"; this.$typeArgs = typeArgs;

 this.proposalId = fields.proposalId;; this.proposer = fields.proposer;; this.deposit = fields.deposit;; this.title = fields.title;; this.description = fields.description;; this.link = fields.link;; this.proposalType = fields.proposalType;; this.votingStartEpoch = fields.votingStartEpoch;; this.votingEndEpoch = fields.votingEndEpoch;; this.executionStartEpoch = fields.executionStartEpoch;; this.executionEndEpoch = fields.executionEndEpoch;; this.proposalStatus = fields.proposalStatus;; this.yesVotes = fields.yesVotes;; this.noVotes = fields.noVotes;; this.voters = fields.voters;; this.fruitLife = fields.fruitLife;; this.newParams = fields.newParams;; this.newWeights = fields.newWeights;; this.newFeeInfo = fields.newFeeInfo; }

 static reified( ): ProposalReified { return { typeName: Proposal.$typeName, fullTypeName: composeSuiType( Proposal.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::Proposal", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Proposal.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Proposal.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Proposal.fromBcs( data, ), bcs: Proposal.bcs, fromJSONField: (field: any) => Proposal.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Proposal.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Proposal.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Proposal.fetch( client, id, ), new: ( fields: ProposalFields, ) => { return new Proposal( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Proposal.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Proposal>> { return phantom(Proposal.reified( )); } static get p() { return Proposal.phantom() }

 static get bcs() { return bcs.struct("Proposal", {

 proposal_id: bcs.u64(), proposer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), deposit: Balance.bcs, title: String.bcs, description: String.bcs, link: String.bcs, proposal_type: bcs.u64(), voting_start_epoch: bcs.u64(), voting_end_epoch: bcs.u64(), execution_start_epoch: bcs.u64(), execution_end_epoch: bcs.u64(), proposal_status: bcs.u64(), yes_votes: bcs.u64(), no_votes: bcs.u64(), voters: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), fruit_life: Option.bcs(FruitLife.bcs), new_params: Option.bcs(bcs.vector(bcs.u64())), new_weights: Option.bcs(bcs.vector(bcs.u64())), new_fee_info: Option.bcs(bcs.vector(bcs.u64()))

}) };

 static fromFields( fields: Record<string, any> ): Proposal { return Proposal.reified( ).new( { proposalId: decodeFromFields("u64", fields.proposal_id), proposer: decodeFromFields("address", fields.proposer), deposit: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.deposit), title: decodeFromFields(String.reified(), fields.title), description: decodeFromFields(String.reified(), fields.description), link: decodeFromFields(String.reified(), fields.link), proposalType: decodeFromFields("u64", fields.proposal_type), votingStartEpoch: decodeFromFields("u64", fields.voting_start_epoch), votingEndEpoch: decodeFromFields("u64", fields.voting_end_epoch), executionStartEpoch: decodeFromFields("u64", fields.execution_start_epoch), executionEndEpoch: decodeFromFields("u64", fields.execution_end_epoch), proposalStatus: decodeFromFields("u64", fields.proposal_status), yesVotes: decodeFromFields("u64", fields.yes_votes), noVotes: decodeFromFields("u64", fields.no_votes), voters: decodeFromFields(LinkedTable.reified("address", reified.phantom("bool")), fields.voters), fruitLife: decodeFromFields(Option.reified(FruitLife.reified()), fields.fruit_life), newParams: decodeFromFields(Option.reified(reified.vector("u64")), fields.new_params), newWeights: decodeFromFields(Option.reified(reified.vector("u64")), fields.new_weights), newFeeInfo: decodeFromFields(Option.reified(reified.vector("u64")), fields.new_fee_info) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Proposal { if (!isProposal(item.type)) { throw new Error("not a Proposal type");

 }

 return Proposal.reified( ).new( { proposalId: decodeFromFieldsWithTypes("u64", item.fields.proposal_id), proposer: decodeFromFieldsWithTypes("address", item.fields.proposer), deposit: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.deposit), title: decodeFromFieldsWithTypes(String.reified(), item.fields.title), description: decodeFromFieldsWithTypes(String.reified(), item.fields.description), link: decodeFromFieldsWithTypes(String.reified(), item.fields.link), proposalType: decodeFromFieldsWithTypes("u64", item.fields.proposal_type), votingStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.voting_start_epoch), votingEndEpoch: decodeFromFieldsWithTypes("u64", item.fields.voting_end_epoch), executionStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.execution_start_epoch), executionEndEpoch: decodeFromFieldsWithTypes("u64", item.fields.execution_end_epoch), proposalStatus: decodeFromFieldsWithTypes("u64", item.fields.proposal_status), yesVotes: decodeFromFieldsWithTypes("u64", item.fields.yes_votes), noVotes: decodeFromFieldsWithTypes("u64", item.fields.no_votes), voters: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("bool")), item.fields.voters), fruitLife: decodeFromFieldsWithTypes(Option.reified(FruitLife.reified()), item.fields.fruit_life), newParams: decodeFromFieldsWithTypes(Option.reified(reified.vector("u64")), item.fields.new_params), newWeights: decodeFromFieldsWithTypes(Option.reified(reified.vector("u64")), item.fields.new_weights), newFeeInfo: decodeFromFieldsWithTypes(Option.reified(reified.vector("u64")), item.fields.new_fee_info) } ) }

 static fromBcs( data: Uint8Array ): Proposal { return Proposal.fromFields( Proposal.bcs.parse(data) ) }

 toJSONField() { return {

 proposalId: this.proposalId.toString(),proposer: this.proposer,deposit: this.deposit.toJSONField(),title: this.title,description: this.description,link: this.link,proposalType: this.proposalType.toString(),votingStartEpoch: this.votingStartEpoch.toString(),votingEndEpoch: this.votingEndEpoch.toString(),executionStartEpoch: this.executionStartEpoch.toString(),executionEndEpoch: this.executionEndEpoch.toString(),proposalStatus: this.proposalStatus.toString(),yesVotes: this.yesVotes.toString(),noVotes: this.noVotes.toString(),voters: this.voters.toJSONField(),fruitLife: fieldToJSON<Option<FruitLife>>(`0x1::option::Option<0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::FruitLife>`, this.fruitLife),newParams: fieldToJSON<Option<Vector<"u64">>>(`0x1::option::Option<vector<u64>>`, this.newParams),newWeights: fieldToJSON<Option<Vector<"u64">>>(`0x1::option::Option<vector<u64>>`, this.newWeights),newFeeInfo: fieldToJSON<Option<Vector<"u64">>>(`0x1::option::Option<vector<u64>>`, this.newFeeInfo),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Proposal { return Proposal.reified( ).new( { proposalId: decodeFromJSONField("u64", field.proposalId), proposer: decodeFromJSONField("address", field.proposer), deposit: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.deposit), title: decodeFromJSONField(String.reified(), field.title), description: decodeFromJSONField(String.reified(), field.description), link: decodeFromJSONField(String.reified(), field.link), proposalType: decodeFromJSONField("u64", field.proposalType), votingStartEpoch: decodeFromJSONField("u64", field.votingStartEpoch), votingEndEpoch: decodeFromJSONField("u64", field.votingEndEpoch), executionStartEpoch: decodeFromJSONField("u64", field.executionStartEpoch), executionEndEpoch: decodeFromJSONField("u64", field.executionEndEpoch), proposalStatus: decodeFromJSONField("u64", field.proposalStatus), yesVotes: decodeFromJSONField("u64", field.yesVotes), noVotes: decodeFromJSONField("u64", field.noVotes), voters: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("bool")), field.voters), fruitLife: decodeFromJSONField(Option.reified(FruitLife.reified()), field.fruitLife), newParams: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newParams), newWeights: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newWeights), newFeeInfo: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newFeeInfo) } ) }

 static fromJSON( json: Record<string, any> ): Proposal { if (json.$typeName !== Proposal.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Proposal.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Proposal { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProposal(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Proposal object`); } return Proposal.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Proposal> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Proposal object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProposal(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Proposal object`); }
 return Proposal.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ProposalDeleted =============================== */

export function isProposalDeleted(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalDeleted"; }

export interface ProposalDeletedFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; proposalType: ToField<"u64">; proposalStatus: ToField<"u64"> }

export type ProposalDeletedReified = Reified< ProposalDeleted, ProposalDeletedFields >;

export class ProposalDeleted implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalDeleted"; static readonly $numTypeParams = 0;

 readonly $typeName = ProposalDeleted.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalDeleted";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly proposalType: ToField<"u64">; readonly proposalStatus: ToField<"u64">

 private constructor(typeArgs: [], fields: ProposalDeletedFields, ) { this.$fullTypeName = composeSuiType( ProposalDeleted.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalDeleted"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.proposalType = fields.proposalType;; this.proposalStatus = fields.proposalStatus; }

 static reified( ): ProposalDeletedReified { return { typeName: ProposalDeleted.$typeName, fullTypeName: composeSuiType( ProposalDeleted.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalDeleted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ProposalDeleted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProposalDeleted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ProposalDeleted.fromBcs( data, ), bcs: ProposalDeleted.bcs, fromJSONField: (field: any) => ProposalDeleted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ProposalDeleted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ProposalDeleted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ProposalDeleted.fetch( client, id, ), new: ( fields: ProposalDeletedFields, ) => { return new ProposalDeleted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ProposalDeleted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ProposalDeleted>> { return phantom(ProposalDeleted.reified( )); } static get p() { return ProposalDeleted.phantom() }

 static get bcs() { return bcs.struct("ProposalDeleted", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), proposal_id: bcs.u64(), proposal_type: bcs.u64(), proposal_status: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ProposalDeleted { return ProposalDeleted.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), proposalId: decodeFromFields("u64", fields.proposal_id), proposalType: decodeFromFields("u64", fields.proposal_type), proposalStatus: decodeFromFields("u64", fields.proposal_status) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ProposalDeleted { if (!isProposalDeleted(item.type)) { throw new Error("not a ProposalDeleted type");

 }

 return ProposalDeleted.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), proposalId: decodeFromFieldsWithTypes("u64", item.fields.proposal_id), proposalType: decodeFromFieldsWithTypes("u64", item.fields.proposal_type), proposalStatus: decodeFromFieldsWithTypes("u64", item.fields.proposal_status) } ) }

 static fromBcs( data: Uint8Array ): ProposalDeleted { return ProposalDeleted.fromFields( ProposalDeleted.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,proposalId: this.proposalId.toString(),proposalType: this.proposalType.toString(),proposalStatus: this.proposalStatus.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ProposalDeleted { return ProposalDeleted.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), proposalId: decodeFromJSONField("u64", field.proposalId), proposalType: decodeFromJSONField("u64", field.proposalType), proposalStatus: decodeFromJSONField("u64", field.proposalStatus) } ) }

 static fromJSON( json: Record<string, any> ): ProposalDeleted { if (json.$typeName !== ProposalDeleted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ProposalDeleted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ProposalDeleted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProposalDeleted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ProposalDeleted object`); } return ProposalDeleted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ProposalDeleted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProposalDeleted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProposalDeleted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProposalDeleted object`); }
 return ProposalDeleted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ProposalEvaluated =============================== */

export function isProposalEvaluated(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalEvaluated"; }

export interface ProposalEvaluatedFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; proposalStatus: ToField<"u64">; yesVotes: ToField<"u64">; noVotes: ToField<"u64">; totalPossibleVotes: ToField<"u64">; votesQuorum: ToField<"u64">; yesVotesThreshold: ToField<"u64"> }

export type ProposalEvaluatedReified = Reified< ProposalEvaluated, ProposalEvaluatedFields >;

export class ProposalEvaluated implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalEvaluated"; static readonly $numTypeParams = 0;

 readonly $typeName = ProposalEvaluated.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalEvaluated";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly proposalStatus: ToField<"u64">; readonly yesVotes: ToField<"u64">; readonly noVotes: ToField<"u64">; readonly totalPossibleVotes: ToField<"u64">; readonly votesQuorum: ToField<"u64">; readonly yesVotesThreshold: ToField<"u64">

 private constructor(typeArgs: [], fields: ProposalEvaluatedFields, ) { this.$fullTypeName = composeSuiType( ProposalEvaluated.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalEvaluated"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.proposalStatus = fields.proposalStatus;; this.yesVotes = fields.yesVotes;; this.noVotes = fields.noVotes;; this.totalPossibleVotes = fields.totalPossibleVotes;; this.votesQuorum = fields.votesQuorum;; this.yesVotesThreshold = fields.yesVotesThreshold; }

 static reified( ): ProposalEvaluatedReified { return { typeName: ProposalEvaluated.$typeName, fullTypeName: composeSuiType( ProposalEvaluated.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalEvaluated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ProposalEvaluated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProposalEvaluated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ProposalEvaluated.fromBcs( data, ), bcs: ProposalEvaluated.bcs, fromJSONField: (field: any) => ProposalEvaluated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ProposalEvaluated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ProposalEvaluated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ProposalEvaluated.fetch( client, id, ), new: ( fields: ProposalEvaluatedFields, ) => { return new ProposalEvaluated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ProposalEvaluated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ProposalEvaluated>> { return phantom(ProposalEvaluated.reified( )); } static get p() { return ProposalEvaluated.phantom() }

 static get bcs() { return bcs.struct("ProposalEvaluated", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), proposal_id: bcs.u64(), proposal_status: bcs.u64(), yes_votes: bcs.u64(), no_votes: bcs.u64(), total_possible_votes: bcs.u64(), votes_quorum: bcs.u64(), yes_votes_threshold: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ProposalEvaluated { return ProposalEvaluated.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), proposalId: decodeFromFields("u64", fields.proposal_id), proposalStatus: decodeFromFields("u64", fields.proposal_status), yesVotes: decodeFromFields("u64", fields.yes_votes), noVotes: decodeFromFields("u64", fields.no_votes), totalPossibleVotes: decodeFromFields("u64", fields.total_possible_votes), votesQuorum: decodeFromFields("u64", fields.votes_quorum), yesVotesThreshold: decodeFromFields("u64", fields.yes_votes_threshold) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ProposalEvaluated { if (!isProposalEvaluated(item.type)) { throw new Error("not a ProposalEvaluated type");

 }

 return ProposalEvaluated.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), proposalId: decodeFromFieldsWithTypes("u64", item.fields.proposal_id), proposalStatus: decodeFromFieldsWithTypes("u64", item.fields.proposal_status), yesVotes: decodeFromFieldsWithTypes("u64", item.fields.yes_votes), noVotes: decodeFromFieldsWithTypes("u64", item.fields.no_votes), totalPossibleVotes: decodeFromFieldsWithTypes("u64", item.fields.total_possible_votes), votesQuorum: decodeFromFieldsWithTypes("u64", item.fields.votes_quorum), yesVotesThreshold: decodeFromFieldsWithTypes("u64", item.fields.yes_votes_threshold) } ) }

 static fromBcs( data: Uint8Array ): ProposalEvaluated { return ProposalEvaluated.fromFields( ProposalEvaluated.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,proposalId: this.proposalId.toString(),proposalStatus: this.proposalStatus.toString(),yesVotes: this.yesVotes.toString(),noVotes: this.noVotes.toString(),totalPossibleVotes: this.totalPossibleVotes.toString(),votesQuorum: this.votesQuorum.toString(),yesVotesThreshold: this.yesVotesThreshold.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ProposalEvaluated { return ProposalEvaluated.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), proposalId: decodeFromJSONField("u64", field.proposalId), proposalStatus: decodeFromJSONField("u64", field.proposalStatus), yesVotes: decodeFromJSONField("u64", field.yesVotes), noVotes: decodeFromJSONField("u64", field.noVotes), totalPossibleVotes: decodeFromJSONField("u64", field.totalPossibleVotes), votesQuorum: decodeFromJSONField("u64", field.votesQuorum), yesVotesThreshold: decodeFromJSONField("u64", field.yesVotesThreshold) } ) }

 static fromJSON( json: Record<string, any> ): ProposalEvaluated { if (json.$typeName !== ProposalEvaluated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ProposalEvaluated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ProposalEvaluated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProposalEvaluated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ProposalEvaluated object`); } return ProposalEvaluated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ProposalEvaluated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProposalEvaluated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProposalEvaluated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProposalEvaluated object`); }
 return ProposalEvaluated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ProposalExecuted =============================== */

export function isProposalExecuted(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalExecuted"; }

export interface ProposalExecutedFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; proposalType: ToField<"u64"> }

export type ProposalExecutedReified = Reified< ProposalExecuted, ProposalExecutedFields >;

export class ProposalExecuted implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalExecuted"; static readonly $numTypeParams = 0;

 readonly $typeName = ProposalExecuted.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalExecuted";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly proposalType: ToField<"u64">

 private constructor(typeArgs: [], fields: ProposalExecutedFields, ) { this.$fullTypeName = composeSuiType( ProposalExecuted.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalExecuted"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.proposalType = fields.proposalType; }

 static reified( ): ProposalExecutedReified { return { typeName: ProposalExecuted.$typeName, fullTypeName: composeSuiType( ProposalExecuted.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::ProposalExecuted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ProposalExecuted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProposalExecuted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ProposalExecuted.fromBcs( data, ), bcs: ProposalExecuted.bcs, fromJSONField: (field: any) => ProposalExecuted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ProposalExecuted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ProposalExecuted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ProposalExecuted.fetch( client, id, ), new: ( fields: ProposalExecutedFields, ) => { return new ProposalExecuted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ProposalExecuted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ProposalExecuted>> { return phantom(ProposalExecuted.reified( )); } static get p() { return ProposalExecuted.phantom() }

 static get bcs() { return bcs.struct("ProposalExecuted", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), proposal_id: bcs.u64(), proposal_type: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ProposalExecuted { return ProposalExecuted.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), proposalId: decodeFromFields("u64", fields.proposal_id), proposalType: decodeFromFields("u64", fields.proposal_type) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ProposalExecuted { if (!isProposalExecuted(item.type)) { throw new Error("not a ProposalExecuted type");

 }

 return ProposalExecuted.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), proposalId: decodeFromFieldsWithTypes("u64", item.fields.proposal_id), proposalType: decodeFromFieldsWithTypes("u64", item.fields.proposal_type) } ) }

 static fromBcs( data: Uint8Array ): ProposalExecuted { return ProposalExecuted.fromFields( ProposalExecuted.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,proposalId: this.proposalId.toString(),proposalType: this.proposalType.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ProposalExecuted { return ProposalExecuted.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), proposalId: decodeFromJSONField("u64", field.proposalId), proposalType: decodeFromJSONField("u64", field.proposalType) } ) }

 static fromJSON( json: Record<string, any> ): ProposalExecuted { if (json.$typeName !== ProposalExecuted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ProposalExecuted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ProposalExecuted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProposalExecuted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ProposalExecuted object`); } return ProposalExecuted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ProposalExecuted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProposalExecuted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProposalExecuted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProposalExecuted object`); }
 return ProposalExecuted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== RipeFruitsClaimed =============================== */

export function isRipeFruitsClaimed(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::RipeFruitsClaimed<"); }

export interface RipeFruitsClaimedFields<A extends PhantomTypeArgument> { fruitType: ToField<String1>; profileAddr: ToField<"address">; userName: ToField<String>; fruitGlobalClaimIndex: ToField<"u256">; earnedFruits: ToField<"u64">; poolHiveAddr: ToField<"address"> }

export type RipeFruitsClaimedReified<A extends PhantomTypeArgument> = Reified< RipeFruitsClaimed<A>, RipeFruitsClaimedFields<A> >;

export class RipeFruitsClaimed<A extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::RipeFruitsClaimed"; static readonly $numTypeParams = 1;

 readonly $typeName = RipeFruitsClaimed.$typeName;

 readonly $fullTypeName: `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::RipeFruitsClaimed<${PhantomToTypeStr<A>}>`;

 readonly $typeArgs: [PhantomToTypeStr<A>];

 readonly fruitType: ToField<String1>; readonly profileAddr: ToField<"address">; readonly userName: ToField<String>; readonly fruitGlobalClaimIndex: ToField<"u256">; readonly earnedFruits: ToField<"u64">; readonly poolHiveAddr: ToField<"address">

 private constructor(typeArgs: [PhantomToTypeStr<A>], fields: RipeFruitsClaimedFields<A>, ) { this.$fullTypeName = composeSuiType( RipeFruitsClaimed.$typeName, ...typeArgs ) as `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::RipeFruitsClaimed<${PhantomToTypeStr<A>}>`; this.$typeArgs = typeArgs;

 this.fruitType = fields.fruitType;; this.profileAddr = fields.profileAddr;; this.userName = fields.userName;; this.fruitGlobalClaimIndex = fields.fruitGlobalClaimIndex;; this.earnedFruits = fields.earnedFruits;; this.poolHiveAddr = fields.poolHiveAddr; }

 static reified<A extends PhantomReified<PhantomTypeArgument>>( A: A ): RipeFruitsClaimedReified<ToPhantomTypeArgument<A>> { return { typeName: RipeFruitsClaimed.$typeName, fullTypeName: composeSuiType( RipeFruitsClaimed.$typeName, ...[extractType(A)] ) as `0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::RipeFruitsClaimed<${PhantomToTypeStr<ToPhantomTypeArgument<A>>}>`, typeArgs: [ extractType(A) ] as [PhantomToTypeStr<ToPhantomTypeArgument<A>>], reifiedTypeArgs: [A], fromFields: (fields: Record<string, any>) => RipeFruitsClaimed.fromFields( A, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RipeFruitsClaimed.fromFieldsWithTypes( A, item, ), fromBcs: (data: Uint8Array) => RipeFruitsClaimed.fromBcs( A, data, ), bcs: RipeFruitsClaimed.bcs, fromJSONField: (field: any) => RipeFruitsClaimed.fromJSONField( A, field, ), fromJSON: (json: Record<string, any>) => RipeFruitsClaimed.fromJSON( A, json, ), fromSuiParsedData: (content: SuiParsedData) => RipeFruitsClaimed.fromSuiParsedData( A, content, ), fetch: async (client: SuiClient, id: string) => RipeFruitsClaimed.fetch( client, A, id, ), new: ( fields: RipeFruitsClaimedFields<ToPhantomTypeArgument<A>>, ) => { return new RipeFruitsClaimed( [extractType(A)], fields ) }, kind: "StructClassReified", } }

 static get r() { return RipeFruitsClaimed.reified }

 static phantom<A extends PhantomReified<PhantomTypeArgument>>( A: A ): PhantomReified<ToTypeStr<RipeFruitsClaimed<ToPhantomTypeArgument<A>>>> { return phantom(RipeFruitsClaimed.reified( A )); } static get p() { return RipeFruitsClaimed.phantom }

 static get bcs() { return bcs.struct("RipeFruitsClaimed", {

 fruit_type: String1.bcs, profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), user_name: String.bcs, fruit_global_claim_index: bcs.u256(), earned_fruits: bcs.u64(), pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, fields: Record<string, any> ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { return RipeFruitsClaimed.reified( typeArg, ).new( { fruitType: decodeFromFields(String1.reified(), fields.fruit_type), profileAddr: decodeFromFields("address", fields.profile_addr), userName: decodeFromFields(String.reified(), fields.user_name), fruitGlobalClaimIndex: decodeFromFields("u256", fields.fruit_global_claim_index), earnedFruits: decodeFromFields("u64", fields.earned_fruits), poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr) } ) }

 static fromFieldsWithTypes<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, item: FieldsWithTypes ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { if (!isRipeFruitsClaimed(item.type)) { throw new Error("not a RipeFruitsClaimed type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return RipeFruitsClaimed.reified( typeArg, ).new( { fruitType: decodeFromFieldsWithTypes(String1.reified(), item.fields.fruit_type), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), userName: decodeFromFieldsWithTypes(String.reified(), item.fields.user_name), fruitGlobalClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.fruit_global_claim_index), earnedFruits: decodeFromFieldsWithTypes("u64", item.fields.earned_fruits), poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr) } ) }

 static fromBcs<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, data: Uint8Array ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { return RipeFruitsClaimed.fromFields( typeArg, RipeFruitsClaimed.bcs.parse(data) ) }

 toJSONField() { return {

 fruitType: this.fruitType,profileAddr: this.profileAddr,userName: this.userName,fruitGlobalClaimIndex: this.fruitGlobalClaimIndex.toString(),earnedFruits: this.earnedFruits.toString(),poolHiveAddr: this.poolHiveAddr,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, field: any ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { return RipeFruitsClaimed.reified( typeArg, ).new( { fruitType: decodeFromJSONField(String1.reified(), field.fruitType), profileAddr: decodeFromJSONField("address", field.profileAddr), userName: decodeFromJSONField(String.reified(), field.userName), fruitGlobalClaimIndex: decodeFromJSONField("u256", field.fruitGlobalClaimIndex), earnedFruits: decodeFromJSONField("u64", field.earnedFruits), poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr) } ) }

 static fromJSON<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, json: Record<string, any> ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { if (json.$typeName !== RipeFruitsClaimed.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(RipeFruitsClaimed.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return RipeFruitsClaimed.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, content: SuiParsedData ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRipeFruitsClaimed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RipeFruitsClaimed object`); } return RipeFruitsClaimed.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<A extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: A, id: string ): Promise<RipeFruitsClaimed<ToPhantomTypeArgument<A>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RipeFruitsClaimed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRipeFruitsClaimed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RipeFruitsClaimed object`); }
 return RipeFruitsClaimed.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SystemBuzz =============================== */

export function isSystemBuzz(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::SystemBuzz"; }

export interface SystemBuzzFields { buzz: ToField<String>; genAi: ToField<Option<String>> }

export type SystemBuzzReified = Reified< SystemBuzz, SystemBuzzFields >;

export class SystemBuzz implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::SystemBuzz"; static readonly $numTypeParams = 0;

 readonly $typeName = SystemBuzz.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::SystemBuzz";

 readonly $typeArgs: [];

 readonly buzz: ToField<String>; readonly genAi: ToField<Option<String>>

 private constructor(typeArgs: [], fields: SystemBuzzFields, ) { this.$fullTypeName = composeSuiType( SystemBuzz.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::SystemBuzz"; this.$typeArgs = typeArgs;

 this.buzz = fields.buzz;; this.genAi = fields.genAi; }

 static reified( ): SystemBuzzReified { return { typeName: SystemBuzz.$typeName, fullTypeName: composeSuiType( SystemBuzz.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::SystemBuzz", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SystemBuzz.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SystemBuzz.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SystemBuzz.fromBcs( data, ), bcs: SystemBuzz.bcs, fromJSONField: (field: any) => SystemBuzz.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SystemBuzz.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SystemBuzz.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SystemBuzz.fetch( client, id, ), new: ( fields: SystemBuzzFields, ) => { return new SystemBuzz( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SystemBuzz.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SystemBuzz>> { return phantom(SystemBuzz.reified( )); } static get p() { return SystemBuzz.phantom() }

 static get bcs() { return bcs.struct("SystemBuzz", {

 buzz: String.bcs, gen_ai: Option.bcs(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): SystemBuzz { return SystemBuzz.reified( ).new( { buzz: decodeFromFields(String.reified(), fields.buzz), genAi: decodeFromFields(Option.reified(String.reified()), fields.gen_ai) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SystemBuzz { if (!isSystemBuzz(item.type)) { throw new Error("not a SystemBuzz type");

 }

 return SystemBuzz.reified( ).new( { buzz: decodeFromFieldsWithTypes(String.reified(), item.fields.buzz), genAi: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.gen_ai) } ) }

 static fromBcs( data: Uint8Array ): SystemBuzz { return SystemBuzz.fromFields( SystemBuzz.bcs.parse(data) ) }

 toJSONField() { return {

 buzz: this.buzz,genAi: fieldToJSON<Option<String>>(`0x1::option::Option<0x1::string::String>`, this.genAi),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SystemBuzz { return SystemBuzz.reified( ).new( { buzz: decodeFromJSONField(String.reified(), field.buzz), genAi: decodeFromJSONField(Option.reified(String.reified()), field.genAi) } ) }

 static fromJSON( json: Record<string, any> ): SystemBuzz { if (json.$typeName !== SystemBuzz.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SystemBuzz.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SystemBuzz { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSystemBuzz(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SystemBuzz object`); } return SystemBuzz.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SystemBuzz> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SystemBuzz object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSystemBuzz(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SystemBuzz object`); }
 return SystemBuzz.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UnbondingFromBeeBox =============================== */

export function isUnbondingFromBeeBox(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnbondingFromBeeBox"; }

export interface UnbondingFromBeeBoxFields { poolHiveAddr: ToField<"address">; profileAddr: ToField<"address">; lpBalanceUnbonded: ToField<"u64">; unlockEpoch: ToField<"u64">; hiveGemsEarned: ToField<"u64">; claimIndex: ToField<"u256"> }

export type UnbondingFromBeeBoxReified = Reified< UnbondingFromBeeBox, UnbondingFromBeeBoxFields >;

export class UnbondingFromBeeBox implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnbondingFromBeeBox"; static readonly $numTypeParams = 0;

 readonly $typeName = UnbondingFromBeeBox.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnbondingFromBeeBox";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly profileAddr: ToField<"address">; readonly lpBalanceUnbonded: ToField<"u64">; readonly unlockEpoch: ToField<"u64">; readonly hiveGemsEarned: ToField<"u64">; readonly claimIndex: ToField<"u256">

 private constructor(typeArgs: [], fields: UnbondingFromBeeBoxFields, ) { this.$fullTypeName = composeSuiType( UnbondingFromBeeBox.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnbondingFromBeeBox"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.profileAddr = fields.profileAddr;; this.lpBalanceUnbonded = fields.lpBalanceUnbonded;; this.unlockEpoch = fields.unlockEpoch;; this.hiveGemsEarned = fields.hiveGemsEarned;; this.claimIndex = fields.claimIndex; }

 static reified( ): UnbondingFromBeeBoxReified { return { typeName: UnbondingFromBeeBox.$typeName, fullTypeName: composeSuiType( UnbondingFromBeeBox.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnbondingFromBeeBox", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UnbondingFromBeeBox.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnbondingFromBeeBox.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UnbondingFromBeeBox.fromBcs( data, ), bcs: UnbondingFromBeeBox.bcs, fromJSONField: (field: any) => UnbondingFromBeeBox.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UnbondingFromBeeBox.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UnbondingFromBeeBox.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UnbondingFromBeeBox.fetch( client, id, ), new: ( fields: UnbondingFromBeeBoxFields, ) => { return new UnbondingFromBeeBox( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnbondingFromBeeBox.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UnbondingFromBeeBox>> { return phantom(UnbondingFromBeeBox.reified( )); } static get p() { return UnbondingFromBeeBox.phantom() }

 static get bcs() { return bcs.struct("UnbondingFromBeeBox", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), lp_balance_unbonded: bcs.u64(), unlock_epoch: bcs.u64(), hive_gems_earned: bcs.u64(), claim_index: bcs.u256()

}) };

 static fromFields( fields: Record<string, any> ): UnbondingFromBeeBox { return UnbondingFromBeeBox.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), profileAddr: decodeFromFields("address", fields.profile_addr), lpBalanceUnbonded: decodeFromFields("u64", fields.lp_balance_unbonded), unlockEpoch: decodeFromFields("u64", fields.unlock_epoch), hiveGemsEarned: decodeFromFields("u64", fields.hive_gems_earned), claimIndex: decodeFromFields("u256", fields.claim_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UnbondingFromBeeBox { if (!isUnbondingFromBeeBox(item.type)) { throw new Error("not a UnbondingFromBeeBox type");

 }

 return UnbondingFromBeeBox.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), lpBalanceUnbonded: decodeFromFieldsWithTypes("u64", item.fields.lp_balance_unbonded), unlockEpoch: decodeFromFieldsWithTypes("u64", item.fields.unlock_epoch), hiveGemsEarned: decodeFromFieldsWithTypes("u64", item.fields.hive_gems_earned), claimIndex: decodeFromFieldsWithTypes("u256", item.fields.claim_index) } ) }

 static fromBcs( data: Uint8Array ): UnbondingFromBeeBox { return UnbondingFromBeeBox.fromFields( UnbondingFromBeeBox.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,profileAddr: this.profileAddr,lpBalanceUnbonded: this.lpBalanceUnbonded.toString(),unlockEpoch: this.unlockEpoch.toString(),hiveGemsEarned: this.hiveGemsEarned.toString(),claimIndex: this.claimIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UnbondingFromBeeBox { return UnbondingFromBeeBox.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), profileAddr: decodeFromJSONField("address", field.profileAddr), lpBalanceUnbonded: decodeFromJSONField("u64", field.lpBalanceUnbonded), unlockEpoch: decodeFromJSONField("u64", field.unlockEpoch), hiveGemsEarned: decodeFromJSONField("u64", field.hiveGemsEarned), claimIndex: decodeFromJSONField("u256", field.claimIndex) } ) }

 static fromJSON( json: Record<string, any> ): UnbondingFromBeeBox { if (json.$typeName !== UnbondingFromBeeBox.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UnbondingFromBeeBox.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UnbondingFromBeeBox { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnbondingFromBeeBox(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnbondingFromBeeBox object`); } return UnbondingFromBeeBox.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UnbondingFromBeeBox> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnbondingFromBeeBox object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnbondingFromBeeBox(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnbondingFromBeeBox object`); }
 return UnbondingFromBeeBox.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UnlockFromBeeBox =============================== */

export function isUnlockFromBeeBox(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnlockFromBeeBox"; }

export interface UnlockFromBeeBoxFields { poolHiveAddr: ToField<"address">; username: ToField<String>; profileAddr: ToField<"address">; stakerAddr: ToField<"address">; lpBalanceUnlocked: ToField<"u64">; unlockedEpoches: ToField<Vector<"u64">> }

export type UnlockFromBeeBoxReified = Reified< UnlockFromBeeBox, UnlockFromBeeBoxFields >;

export class UnlockFromBeeBox implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnlockFromBeeBox"; static readonly $numTypeParams = 0;

 readonly $typeName = UnlockFromBeeBox.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnlockFromBeeBox";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly username: ToField<String>; readonly profileAddr: ToField<"address">; readonly stakerAddr: ToField<"address">; readonly lpBalanceUnlocked: ToField<"u64">; readonly unlockedEpoches: ToField<Vector<"u64">>

 private constructor(typeArgs: [], fields: UnlockFromBeeBoxFields, ) { this.$fullTypeName = composeSuiType( UnlockFromBeeBox.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnlockFromBeeBox"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.username = fields.username;; this.profileAddr = fields.profileAddr;; this.stakerAddr = fields.stakerAddr;; this.lpBalanceUnlocked = fields.lpBalanceUnlocked;; this.unlockedEpoches = fields.unlockedEpoches; }

 static reified( ): UnlockFromBeeBoxReified { return { typeName: UnlockFromBeeBox.$typeName, fullTypeName: composeSuiType( UnlockFromBeeBox.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UnlockFromBeeBox", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UnlockFromBeeBox.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnlockFromBeeBox.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UnlockFromBeeBox.fromBcs( data, ), bcs: UnlockFromBeeBox.bcs, fromJSONField: (field: any) => UnlockFromBeeBox.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UnlockFromBeeBox.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UnlockFromBeeBox.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UnlockFromBeeBox.fetch( client, id, ), new: ( fields: UnlockFromBeeBoxFields, ) => { return new UnlockFromBeeBox( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnlockFromBeeBox.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UnlockFromBeeBox>> { return phantom(UnlockFromBeeBox.reified( )); } static get p() { return UnlockFromBeeBox.phantom() }

 static get bcs() { return bcs.struct("UnlockFromBeeBox", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), staker_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), lp_balance_unlocked: bcs.u64(), unlocked_epoches: bcs.vector(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): UnlockFromBeeBox { return UnlockFromBeeBox.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), username: decodeFromFields(String.reified(), fields.username), profileAddr: decodeFromFields("address", fields.profile_addr), stakerAddr: decodeFromFields("address", fields.staker_addr), lpBalanceUnlocked: decodeFromFields("u64", fields.lp_balance_unlocked), unlockedEpoches: decodeFromFields(reified.vector("u64"), fields.unlocked_epoches) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UnlockFromBeeBox { if (!isUnlockFromBeeBox(item.type)) { throw new Error("not a UnlockFromBeeBox type");

 }

 return UnlockFromBeeBox.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), profileAddr: decodeFromFieldsWithTypes("address", item.fields.profile_addr), stakerAddr: decodeFromFieldsWithTypes("address", item.fields.staker_addr), lpBalanceUnlocked: decodeFromFieldsWithTypes("u64", item.fields.lp_balance_unlocked), unlockedEpoches: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.unlocked_epoches) } ) }

 static fromBcs( data: Uint8Array ): UnlockFromBeeBox { return UnlockFromBeeBox.fromFields( UnlockFromBeeBox.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,username: this.username,profileAddr: this.profileAddr,stakerAddr: this.stakerAddr,lpBalanceUnlocked: this.lpBalanceUnlocked.toString(),unlockedEpoches: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.unlockedEpoches),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UnlockFromBeeBox { return UnlockFromBeeBox.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), username: decodeFromJSONField(String.reified(), field.username), profileAddr: decodeFromJSONField("address", field.profileAddr), stakerAddr: decodeFromJSONField("address", field.stakerAddr), lpBalanceUnlocked: decodeFromJSONField("u64", field.lpBalanceUnlocked), unlockedEpoches: decodeFromJSONField(reified.vector("u64"), field.unlockedEpoches) } ) }

 static fromJSON( json: Record<string, any> ): UnlockFromBeeBox { if (json.$typeName !== UnlockFromBeeBox.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UnlockFromBeeBox.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UnlockFromBeeBox { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnlockFromBeeBox(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnlockFromBeeBox object`); } return UnlockFromBeeBox.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UnlockFromBeeBox> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnlockFromBeeBox object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnlockFromBeeBox(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnlockFromBeeBox object`); }
 return UnlockFromBeeBox.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UserBuzzOnGovernanceBuzzDetected =============================== */

export function isUserBuzzOnGovernanceBuzzDetected(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserBuzzOnGovernanceBuzzDetected"; }

export interface UserBuzzOnGovernanceBuzzDetectedFields { userProfileAddr: ToField<"address">; governanceBuzzIndex: ToField<"u64">; username: ToField<String>; dialogueIndex: ToField<"u64">; userBuzz: ToField<String> }

export type UserBuzzOnGovernanceBuzzDetectedReified = Reified< UserBuzzOnGovernanceBuzzDetected, UserBuzzOnGovernanceBuzzDetectedFields >;

export class UserBuzzOnGovernanceBuzzDetected implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserBuzzOnGovernanceBuzzDetected"; static readonly $numTypeParams = 0;

 readonly $typeName = UserBuzzOnGovernanceBuzzDetected.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserBuzzOnGovernanceBuzzDetected";

 readonly $typeArgs: [];

 readonly userProfileAddr: ToField<"address">; readonly governanceBuzzIndex: ToField<"u64">; readonly username: ToField<String>; readonly dialogueIndex: ToField<"u64">; readonly userBuzz: ToField<String>

 private constructor(typeArgs: [], fields: UserBuzzOnGovernanceBuzzDetectedFields, ) { this.$fullTypeName = composeSuiType( UserBuzzOnGovernanceBuzzDetected.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserBuzzOnGovernanceBuzzDetected"; this.$typeArgs = typeArgs;

 this.userProfileAddr = fields.userProfileAddr;; this.governanceBuzzIndex = fields.governanceBuzzIndex;; this.username = fields.username;; this.dialogueIndex = fields.dialogueIndex;; this.userBuzz = fields.userBuzz; }

 static reified( ): UserBuzzOnGovernanceBuzzDetectedReified { return { typeName: UserBuzzOnGovernanceBuzzDetected.$typeName, fullTypeName: composeSuiType( UserBuzzOnGovernanceBuzzDetected.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserBuzzOnGovernanceBuzzDetected", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserBuzzOnGovernanceBuzzDetected.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserBuzzOnGovernanceBuzzDetected.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserBuzzOnGovernanceBuzzDetected.fromBcs( data, ), bcs: UserBuzzOnGovernanceBuzzDetected.bcs, fromJSONField: (field: any) => UserBuzzOnGovernanceBuzzDetected.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserBuzzOnGovernanceBuzzDetected.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserBuzzOnGovernanceBuzzDetected.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UserBuzzOnGovernanceBuzzDetected.fetch( client, id, ), new: ( fields: UserBuzzOnGovernanceBuzzDetectedFields, ) => { return new UserBuzzOnGovernanceBuzzDetected( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserBuzzOnGovernanceBuzzDetected.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserBuzzOnGovernanceBuzzDetected>> { return phantom(UserBuzzOnGovernanceBuzzDetected.reified( )); } static get p() { return UserBuzzOnGovernanceBuzzDetected.phantom() }

 static get bcs() { return bcs.struct("UserBuzzOnGovernanceBuzzDetected", {

 user_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), governance_buzz_index: bcs.u64(), username: String.bcs, dialogue_index: bcs.u64(), user_buzz: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): UserBuzzOnGovernanceBuzzDetected { return UserBuzzOnGovernanceBuzzDetected.reified( ).new( { userProfileAddr: decodeFromFields("address", fields.user_profile_addr), governanceBuzzIndex: decodeFromFields("u64", fields.governance_buzz_index), username: decodeFromFields(String.reified(), fields.username), dialogueIndex: decodeFromFields("u64", fields.dialogue_index), userBuzz: decodeFromFields(String.reified(), fields.user_buzz) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserBuzzOnGovernanceBuzzDetected { if (!isUserBuzzOnGovernanceBuzzDetected(item.type)) { throw new Error("not a UserBuzzOnGovernanceBuzzDetected type");

 }

 return UserBuzzOnGovernanceBuzzDetected.reified( ).new( { userProfileAddr: decodeFromFieldsWithTypes("address", item.fields.user_profile_addr), governanceBuzzIndex: decodeFromFieldsWithTypes("u64", item.fields.governance_buzz_index), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), dialogueIndex: decodeFromFieldsWithTypes("u64", item.fields.dialogue_index), userBuzz: decodeFromFieldsWithTypes(String.reified(), item.fields.user_buzz) } ) }

 static fromBcs( data: Uint8Array ): UserBuzzOnGovernanceBuzzDetected { return UserBuzzOnGovernanceBuzzDetected.fromFields( UserBuzzOnGovernanceBuzzDetected.bcs.parse(data) ) }

 toJSONField() { return {

 userProfileAddr: this.userProfileAddr,governanceBuzzIndex: this.governanceBuzzIndex.toString(),username: this.username,dialogueIndex: this.dialogueIndex.toString(),userBuzz: this.userBuzz,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserBuzzOnGovernanceBuzzDetected { return UserBuzzOnGovernanceBuzzDetected.reified( ).new( { userProfileAddr: decodeFromJSONField("address", field.userProfileAddr), governanceBuzzIndex: decodeFromJSONField("u64", field.governanceBuzzIndex), username: decodeFromJSONField(String.reified(), field.username), dialogueIndex: decodeFromJSONField("u64", field.dialogueIndex), userBuzz: decodeFromJSONField(String.reified(), field.userBuzz) } ) }

 static fromJSON( json: Record<string, any> ): UserBuzzOnGovernanceBuzzDetected { if (json.$typeName !== UserBuzzOnGovernanceBuzzDetected.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserBuzzOnGovernanceBuzzDetected.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserBuzzOnGovernanceBuzzDetected { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserBuzzOnGovernanceBuzzDetected(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserBuzzOnGovernanceBuzzDetected object`); } return UserBuzzOnGovernanceBuzzDetected.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserBuzzOnGovernanceBuzzDetected> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserBuzzOnGovernanceBuzzDetected object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserBuzzOnGovernanceBuzzDetected(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserBuzzOnGovernanceBuzzDetected object`); }
 return UserBuzzOnGovernanceBuzzDetected.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UserLikedGovernorBuzz =============================== */

export function isUserLikedGovernorBuzz(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserLikedGovernorBuzz"; }

export interface UserLikedGovernorBuzzFields { userProfileAddr: ToField<"address">; username: ToField<String>; governanceBuzzIndex: ToField<"u64"> }

export type UserLikedGovernorBuzzReified = Reified< UserLikedGovernorBuzz, UserLikedGovernorBuzzFields >;

export class UserLikedGovernorBuzz implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserLikedGovernorBuzz"; static readonly $numTypeParams = 0;

 readonly $typeName = UserLikedGovernorBuzz.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserLikedGovernorBuzz";

 readonly $typeArgs: [];

 readonly userProfileAddr: ToField<"address">; readonly username: ToField<String>; readonly governanceBuzzIndex: ToField<"u64">

 private constructor(typeArgs: [], fields: UserLikedGovernorBuzzFields, ) { this.$fullTypeName = composeSuiType( UserLikedGovernorBuzz.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserLikedGovernorBuzz"; this.$typeArgs = typeArgs;

 this.userProfileAddr = fields.userProfileAddr;; this.username = fields.username;; this.governanceBuzzIndex = fields.governanceBuzzIndex; }

 static reified( ): UserLikedGovernorBuzzReified { return { typeName: UserLikedGovernorBuzz.$typeName, fullTypeName: composeSuiType( UserLikedGovernorBuzz.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserLikedGovernorBuzz", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserLikedGovernorBuzz.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserLikedGovernorBuzz.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserLikedGovernorBuzz.fromBcs( data, ), bcs: UserLikedGovernorBuzz.bcs, fromJSONField: (field: any) => UserLikedGovernorBuzz.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserLikedGovernorBuzz.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserLikedGovernorBuzz.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UserLikedGovernorBuzz.fetch( client, id, ), new: ( fields: UserLikedGovernorBuzzFields, ) => { return new UserLikedGovernorBuzz( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserLikedGovernorBuzz.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserLikedGovernorBuzz>> { return phantom(UserLikedGovernorBuzz.reified( )); } static get p() { return UserLikedGovernorBuzz.phantom() }

 static get bcs() { return bcs.struct("UserLikedGovernorBuzz", {

 user_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, governance_buzz_index: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserLikedGovernorBuzz { return UserLikedGovernorBuzz.reified( ).new( { userProfileAddr: decodeFromFields("address", fields.user_profile_addr), username: decodeFromFields(String.reified(), fields.username), governanceBuzzIndex: decodeFromFields("u64", fields.governance_buzz_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserLikedGovernorBuzz { if (!isUserLikedGovernorBuzz(item.type)) { throw new Error("not a UserLikedGovernorBuzz type");

 }

 return UserLikedGovernorBuzz.reified( ).new( { userProfileAddr: decodeFromFieldsWithTypes("address", item.fields.user_profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), governanceBuzzIndex: decodeFromFieldsWithTypes("u64", item.fields.governance_buzz_index) } ) }

 static fromBcs( data: Uint8Array ): UserLikedGovernorBuzz { return UserLikedGovernorBuzz.fromFields( UserLikedGovernorBuzz.bcs.parse(data) ) }

 toJSONField() { return {

 userProfileAddr: this.userProfileAddr,username: this.username,governanceBuzzIndex: this.governanceBuzzIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserLikedGovernorBuzz { return UserLikedGovernorBuzz.reified( ).new( { userProfileAddr: decodeFromJSONField("address", field.userProfileAddr), username: decodeFromJSONField(String.reified(), field.username), governanceBuzzIndex: decodeFromJSONField("u64", field.governanceBuzzIndex) } ) }

 static fromJSON( json: Record<string, any> ): UserLikedGovernorBuzz { if (json.$typeName !== UserLikedGovernorBuzz.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserLikedGovernorBuzz.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserLikedGovernorBuzz { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserLikedGovernorBuzz(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserLikedGovernorBuzz object`); } return UserLikedGovernorBuzz.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserLikedGovernorBuzz> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserLikedGovernorBuzz object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserLikedGovernorBuzz(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserLikedGovernorBuzz object`); }
 return UserLikedGovernorBuzz.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UserUnLikedGovernorBuzz =============================== */

export function isUserUnLikedGovernorBuzz(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUnLikedGovernorBuzz"; }

export interface UserUnLikedGovernorBuzzFields { userProfileAddr: ToField<"address">; username: ToField<String>; governanceBuzzIndex: ToField<"u64"> }

export type UserUnLikedGovernorBuzzReified = Reified< UserUnLikedGovernorBuzz, UserUnLikedGovernorBuzzFields >;

export class UserUnLikedGovernorBuzz implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUnLikedGovernorBuzz"; static readonly $numTypeParams = 0;

 readonly $typeName = UserUnLikedGovernorBuzz.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUnLikedGovernorBuzz";

 readonly $typeArgs: [];

 readonly userProfileAddr: ToField<"address">; readonly username: ToField<String>; readonly governanceBuzzIndex: ToField<"u64">

 private constructor(typeArgs: [], fields: UserUnLikedGovernorBuzzFields, ) { this.$fullTypeName = composeSuiType( UserUnLikedGovernorBuzz.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUnLikedGovernorBuzz"; this.$typeArgs = typeArgs;

 this.userProfileAddr = fields.userProfileAddr;; this.username = fields.username;; this.governanceBuzzIndex = fields.governanceBuzzIndex; }

 static reified( ): UserUnLikedGovernorBuzzReified { return { typeName: UserUnLikedGovernorBuzz.$typeName, fullTypeName: composeSuiType( UserUnLikedGovernorBuzz.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUnLikedGovernorBuzz", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserUnLikedGovernorBuzz.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserUnLikedGovernorBuzz.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserUnLikedGovernorBuzz.fromBcs( data, ), bcs: UserUnLikedGovernorBuzz.bcs, fromJSONField: (field: any) => UserUnLikedGovernorBuzz.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserUnLikedGovernorBuzz.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserUnLikedGovernorBuzz.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UserUnLikedGovernorBuzz.fetch( client, id, ), new: ( fields: UserUnLikedGovernorBuzzFields, ) => { return new UserUnLikedGovernorBuzz( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserUnLikedGovernorBuzz.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserUnLikedGovernorBuzz>> { return phantom(UserUnLikedGovernorBuzz.reified( )); } static get p() { return UserUnLikedGovernorBuzz.phantom() }

 static get bcs() { return bcs.struct("UserUnLikedGovernorBuzz", {

 user_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, governance_buzz_index: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserUnLikedGovernorBuzz { return UserUnLikedGovernorBuzz.reified( ).new( { userProfileAddr: decodeFromFields("address", fields.user_profile_addr), username: decodeFromFields(String.reified(), fields.username), governanceBuzzIndex: decodeFromFields("u64", fields.governance_buzz_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserUnLikedGovernorBuzz { if (!isUserUnLikedGovernorBuzz(item.type)) { throw new Error("not a UserUnLikedGovernorBuzz type");

 }

 return UserUnLikedGovernorBuzz.reified( ).new( { userProfileAddr: decodeFromFieldsWithTypes("address", item.fields.user_profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), governanceBuzzIndex: decodeFromFieldsWithTypes("u64", item.fields.governance_buzz_index) } ) }

 static fromBcs( data: Uint8Array ): UserUnLikedGovernorBuzz { return UserUnLikedGovernorBuzz.fromFields( UserUnLikedGovernorBuzz.bcs.parse(data) ) }

 toJSONField() { return {

 userProfileAddr: this.userProfileAddr,username: this.username,governanceBuzzIndex: this.governanceBuzzIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserUnLikedGovernorBuzz { return UserUnLikedGovernorBuzz.reified( ).new( { userProfileAddr: decodeFromJSONField("address", field.userProfileAddr), username: decodeFromJSONField(String.reified(), field.username), governanceBuzzIndex: decodeFromJSONField("u64", field.governanceBuzzIndex) } ) }

 static fromJSON( json: Record<string, any> ): UserUnLikedGovernorBuzz { if (json.$typeName !== UserUnLikedGovernorBuzz.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserUnLikedGovernorBuzz.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserUnLikedGovernorBuzz { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserUnLikedGovernorBuzz(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserUnLikedGovernorBuzz object`); } return UserUnLikedGovernorBuzz.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserUnLikedGovernorBuzz> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserUnLikedGovernorBuzz object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserUnLikedGovernorBuzz(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserUnLikedGovernorBuzz object`); }
 return UserUnLikedGovernorBuzz.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UserUpvotedGovernanceBuzz =============================== */

export function isUserUpvotedGovernanceBuzz(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUpvotedGovernanceBuzz"; }

export interface UserUpvotedGovernanceBuzzFields { userProfileAddr: ToField<"address">; username: ToField<String>; governanceBuzzIndex: ToField<"u64">; userBuzzByProfile: ToField<"address"> }

export type UserUpvotedGovernanceBuzzReified = Reified< UserUpvotedGovernanceBuzz, UserUpvotedGovernanceBuzzFields >;

export class UserUpvotedGovernanceBuzz implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUpvotedGovernanceBuzz"; static readonly $numTypeParams = 0;

 readonly $typeName = UserUpvotedGovernanceBuzz.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUpvotedGovernanceBuzz";

 readonly $typeArgs: [];

 readonly userProfileAddr: ToField<"address">; readonly username: ToField<String>; readonly governanceBuzzIndex: ToField<"u64">; readonly userBuzzByProfile: ToField<"address">

 private constructor(typeArgs: [], fields: UserUpvotedGovernanceBuzzFields, ) { this.$fullTypeName = composeSuiType( UserUpvotedGovernanceBuzz.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUpvotedGovernanceBuzz"; this.$typeArgs = typeArgs;

 this.userProfileAddr = fields.userProfileAddr;; this.username = fields.username;; this.governanceBuzzIndex = fields.governanceBuzzIndex;; this.userBuzzByProfile = fields.userBuzzByProfile; }

 static reified( ): UserUpvotedGovernanceBuzzReified { return { typeName: UserUpvotedGovernanceBuzz.$typeName, fullTypeName: composeSuiType( UserUpvotedGovernanceBuzz.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::UserUpvotedGovernanceBuzz", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserUpvotedGovernanceBuzz.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserUpvotedGovernanceBuzz.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserUpvotedGovernanceBuzz.fromBcs( data, ), bcs: UserUpvotedGovernanceBuzz.bcs, fromJSONField: (field: any) => UserUpvotedGovernanceBuzz.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserUpvotedGovernanceBuzz.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserUpvotedGovernanceBuzz.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UserUpvotedGovernanceBuzz.fetch( client, id, ), new: ( fields: UserUpvotedGovernanceBuzzFields, ) => { return new UserUpvotedGovernanceBuzz( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserUpvotedGovernanceBuzz.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserUpvotedGovernanceBuzz>> { return phantom(UserUpvotedGovernanceBuzz.reified( )); } static get p() { return UserUpvotedGovernanceBuzz.phantom() }

 static get bcs() { return bcs.struct("UserUpvotedGovernanceBuzz", {

 user_profile_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, governance_buzz_index: bcs.u64(), user_buzz_by_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): UserUpvotedGovernanceBuzz { return UserUpvotedGovernanceBuzz.reified( ).new( { userProfileAddr: decodeFromFields("address", fields.user_profile_addr), username: decodeFromFields(String.reified(), fields.username), governanceBuzzIndex: decodeFromFields("u64", fields.governance_buzz_index), userBuzzByProfile: decodeFromFields("address", fields.user_buzz_by_profile) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserUpvotedGovernanceBuzz { if (!isUserUpvotedGovernanceBuzz(item.type)) { throw new Error("not a UserUpvotedGovernanceBuzz type");

 }

 return UserUpvotedGovernanceBuzz.reified( ).new( { userProfileAddr: decodeFromFieldsWithTypes("address", item.fields.user_profile_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), governanceBuzzIndex: decodeFromFieldsWithTypes("u64", item.fields.governance_buzz_index), userBuzzByProfile: decodeFromFieldsWithTypes("address", item.fields.user_buzz_by_profile) } ) }

 static fromBcs( data: Uint8Array ): UserUpvotedGovernanceBuzz { return UserUpvotedGovernanceBuzz.fromFields( UserUpvotedGovernanceBuzz.bcs.parse(data) ) }

 toJSONField() { return {

 userProfileAddr: this.userProfileAddr,username: this.username,governanceBuzzIndex: this.governanceBuzzIndex.toString(),userBuzzByProfile: this.userBuzzByProfile,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserUpvotedGovernanceBuzz { return UserUpvotedGovernanceBuzz.reified( ).new( { userProfileAddr: decodeFromJSONField("address", field.userProfileAddr), username: decodeFromJSONField(String.reified(), field.username), governanceBuzzIndex: decodeFromJSONField("u64", field.governanceBuzzIndex), userBuzzByProfile: decodeFromJSONField("address", field.userBuzzByProfile) } ) }

 static fromJSON( json: Record<string, any> ): UserUpvotedGovernanceBuzz { if (json.$typeName !== UserUpvotedGovernanceBuzz.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserUpvotedGovernanceBuzz.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserUpvotedGovernanceBuzz { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserUpvotedGovernanceBuzz(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserUpvotedGovernanceBuzz object`); } return UserUpvotedGovernanceBuzz.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserUpvotedGovernanceBuzz> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserUpvotedGovernanceBuzz object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserUpvotedGovernanceBuzz(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserUpvotedGovernanceBuzz object`); }
 return UserUpvotedGovernanceBuzz.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== VoteCasted =============================== */

export function isVoteCasted(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteCasted"; }

export interface VoteCastedFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; voter: ToField<String>; voterProfile: ToField<"address">; vote: ToField<"bool">; yesVotes: ToField<"u64">; noVotes: ToField<"u64">; totalStaked: ToField<"u64"> }

export type VoteCastedReified = Reified< VoteCasted, VoteCastedFields >;

export class VoteCasted implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteCasted"; static readonly $numTypeParams = 0;

 readonly $typeName = VoteCasted.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteCasted";

 readonly $typeArgs: [];

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly voter: ToField<String>; readonly voterProfile: ToField<"address">; readonly vote: ToField<"bool">; readonly yesVotes: ToField<"u64">; readonly noVotes: ToField<"u64">; readonly totalStaked: ToField<"u64">

 private constructor(typeArgs: [], fields: VoteCastedFields, ) { this.$fullTypeName = composeSuiType( VoteCasted.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteCasted"; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.voter = fields.voter;; this.voterProfile = fields.voterProfile;; this.vote = fields.vote;; this.yesVotes = fields.yesVotes;; this.noVotes = fields.noVotes;; this.totalStaked = fields.totalStaked; }

 static reified( ): VoteCastedReified { return { typeName: VoteCasted.$typeName, fullTypeName: composeSuiType( VoteCasted.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteCasted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VoteCasted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VoteCasted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VoteCasted.fromBcs( data, ), bcs: VoteCasted.bcs, fromJSONField: (field: any) => VoteCasted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VoteCasted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VoteCasted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => VoteCasted.fetch( client, id, ), new: ( fields: VoteCastedFields, ) => { return new VoteCasted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VoteCasted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VoteCasted>> { return phantom(VoteCasted.reified( )); } static get p() { return VoteCasted.phantom() }

 static get bcs() { return bcs.struct("VoteCasted", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), proposal_id: bcs.u64(), voter: String.bcs, voter_profile: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), vote: bcs.bool(), yes_votes: bcs.u64(), no_votes: bcs.u64(), total_staked: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): VoteCasted { return VoteCasted.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), proposalId: decodeFromFields("u64", fields.proposal_id), voter: decodeFromFields(String.reified(), fields.voter), voterProfile: decodeFromFields("address", fields.voter_profile), vote: decodeFromFields("bool", fields.vote), yesVotes: decodeFromFields("u64", fields.yes_votes), noVotes: decodeFromFields("u64", fields.no_votes), totalStaked: decodeFromFields("u64", fields.total_staked) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VoteCasted { if (!isVoteCasted(item.type)) { throw new Error("not a VoteCasted type");

 }

 return VoteCasted.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), proposalId: decodeFromFieldsWithTypes("u64", item.fields.proposal_id), voter: decodeFromFieldsWithTypes(String.reified(), item.fields.voter), voterProfile: decodeFromFieldsWithTypes("address", item.fields.voter_profile), vote: decodeFromFieldsWithTypes("bool", item.fields.vote), yesVotes: decodeFromFieldsWithTypes("u64", item.fields.yes_votes), noVotes: decodeFromFieldsWithTypes("u64", item.fields.no_votes), totalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_staked) } ) }

 static fromBcs( data: Uint8Array ): VoteCasted { return VoteCasted.fromFields( VoteCasted.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,proposalId: this.proposalId.toString(),voter: this.voter,voterProfile: this.voterProfile,vote: this.vote,yesVotes: this.yesVotes.toString(),noVotes: this.noVotes.toString(),totalStaked: this.totalStaked.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VoteCasted { return VoteCasted.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), proposalId: decodeFromJSONField("u64", field.proposalId), voter: decodeFromJSONField(String.reified(), field.voter), voterProfile: decodeFromJSONField("address", field.voterProfile), vote: decodeFromJSONField("bool", field.vote), yesVotes: decodeFromJSONField("u64", field.yesVotes), noVotes: decodeFromJSONField("u64", field.noVotes), totalStaked: decodeFromJSONField("u64", field.totalStaked) } ) }

 static fromJSON( json: Record<string, any> ): VoteCasted { if (json.$typeName !== VoteCasted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VoteCasted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VoteCasted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVoteCasted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VoteCasted object`); } return VoteCasted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<VoteCasted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VoteCasted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVoteCasted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VoteCasted object`); }
 return VoteCasted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== VoteConfig =============================== */

export function isVoteConfig(type: string): boolean { type = compressSuiType(type); return type === "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteConfig"; }

export interface VoteConfigFields { proposalRequiredDeposit: ToField<"u64">; votingStartDelay: ToField<"u64">; votingPeriodLength: ToField<"u64">; executionDelay: ToField<"u64">; executionPeriodLength: ToField<"u64">; proposalRequiredQuorum: ToField<"u64">; proposalApprovalThreshold: ToField<"u64"> }

export type VoteConfigReified = Reified< VoteConfig, VoteConfigFields >;

export class VoteConfig implements StructClass { static readonly $typeName = "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteConfig"; static readonly $numTypeParams = 0;

 readonly $typeName = VoteConfig.$typeName;

 readonly $fullTypeName: "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteConfig";

 readonly $typeArgs: [];

 readonly proposalRequiredDeposit: ToField<"u64">; readonly votingStartDelay: ToField<"u64">; readonly votingPeriodLength: ToField<"u64">; readonly executionDelay: ToField<"u64">; readonly executionPeriodLength: ToField<"u64">; readonly proposalRequiredQuorum: ToField<"u64">; readonly proposalApprovalThreshold: ToField<"u64">

 private constructor(typeArgs: [], fields: VoteConfigFields, ) { this.$fullTypeName = composeSuiType( VoteConfig.$typeName, ...typeArgs ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteConfig"; this.$typeArgs = typeArgs;

 this.proposalRequiredDeposit = fields.proposalRequiredDeposit;; this.votingStartDelay = fields.votingStartDelay;; this.votingPeriodLength = fields.votingPeriodLength;; this.executionDelay = fields.executionDelay;; this.executionPeriodLength = fields.executionPeriodLength;; this.proposalRequiredQuorum = fields.proposalRequiredQuorum;; this.proposalApprovalThreshold = fields.proposalApprovalThreshold; }

 static reified( ): VoteConfigReified { return { typeName: VoteConfig.$typeName, fullTypeName: composeSuiType( VoteConfig.$typeName, ...[] ) as "0x6f845274929daac791f66dbde3f7369b5e652d367104f8824de60923d862847a::dex_dao::VoteConfig", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VoteConfig.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VoteConfig.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VoteConfig.fromBcs( data, ), bcs: VoteConfig.bcs, fromJSONField: (field: any) => VoteConfig.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VoteConfig.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VoteConfig.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => VoteConfig.fetch( client, id, ), new: ( fields: VoteConfigFields, ) => { return new VoteConfig( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VoteConfig.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VoteConfig>> { return phantom(VoteConfig.reified( )); } static get p() { return VoteConfig.phantom() }

 static get bcs() { return bcs.struct("VoteConfig", {

 proposal_required_deposit: bcs.u64(), voting_start_delay: bcs.u64(), voting_period_length: bcs.u64(), execution_delay: bcs.u64(), execution_period_length: bcs.u64(), proposal_required_quorum: bcs.u64(), proposal_approval_threshold: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): VoteConfig { return VoteConfig.reified( ).new( { proposalRequiredDeposit: decodeFromFields("u64", fields.proposal_required_deposit), votingStartDelay: decodeFromFields("u64", fields.voting_start_delay), votingPeriodLength: decodeFromFields("u64", fields.voting_period_length), executionDelay: decodeFromFields("u64", fields.execution_delay), executionPeriodLength: decodeFromFields("u64", fields.execution_period_length), proposalRequiredQuorum: decodeFromFields("u64", fields.proposal_required_quorum), proposalApprovalThreshold: decodeFromFields("u64", fields.proposal_approval_threshold) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VoteConfig { if (!isVoteConfig(item.type)) { throw new Error("not a VoteConfig type");

 }

 return VoteConfig.reified( ).new( { proposalRequiredDeposit: decodeFromFieldsWithTypes("u64", item.fields.proposal_required_deposit), votingStartDelay: decodeFromFieldsWithTypes("u64", item.fields.voting_start_delay), votingPeriodLength: decodeFromFieldsWithTypes("u64", item.fields.voting_period_length), executionDelay: decodeFromFieldsWithTypes("u64", item.fields.execution_delay), executionPeriodLength: decodeFromFieldsWithTypes("u64", item.fields.execution_period_length), proposalRequiredQuorum: decodeFromFieldsWithTypes("u64", item.fields.proposal_required_quorum), proposalApprovalThreshold: decodeFromFieldsWithTypes("u64", item.fields.proposal_approval_threshold) } ) }

 static fromBcs( data: Uint8Array ): VoteConfig { return VoteConfig.fromFields( VoteConfig.bcs.parse(data) ) }

 toJSONField() { return {

 proposalRequiredDeposit: this.proposalRequiredDeposit.toString(),votingStartDelay: this.votingStartDelay.toString(),votingPeriodLength: this.votingPeriodLength.toString(),executionDelay: this.executionDelay.toString(),executionPeriodLength: this.executionPeriodLength.toString(),proposalRequiredQuorum: this.proposalRequiredQuorum.toString(),proposalApprovalThreshold: this.proposalApprovalThreshold.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VoteConfig { return VoteConfig.reified( ).new( { proposalRequiredDeposit: decodeFromJSONField("u64", field.proposalRequiredDeposit), votingStartDelay: decodeFromJSONField("u64", field.votingStartDelay), votingPeriodLength: decodeFromJSONField("u64", field.votingPeriodLength), executionDelay: decodeFromJSONField("u64", field.executionDelay), executionPeriodLength: decodeFromJSONField("u64", field.executionPeriodLength), proposalRequiredQuorum: decodeFromJSONField("u64", field.proposalRequiredQuorum), proposalApprovalThreshold: decodeFromJSONField("u64", field.proposalApprovalThreshold) } ) }

 static fromJSON( json: Record<string, any> ): VoteConfig { if (json.$typeName !== VoteConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VoteConfig.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VoteConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVoteConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VoteConfig object`); } return VoteConfig.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<VoteConfig> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VoteConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVoteConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VoteConfig object`); }
 return VoteConfig.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
