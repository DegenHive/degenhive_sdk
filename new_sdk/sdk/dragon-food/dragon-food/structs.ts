import * as reified from "../../_framework/reified";
import {String as String1} from "../../_dependencies/source/0x1/ascii/structs";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {LinkedTable} from "../../_dependencies/source/0x2/linked-table/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {MysticalBee} from "../../dragon-trainer/dragon-trainer/structs";
import {HIVE} from "../../yield-flow/hive/structs";
import {HONEY} from "../../yield-flow/honey/structs";
import {DragonFoodCapability} from "../../yield-flow/yield-flow/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== AddHiveAndEnergyForNextCycle =============================== */

export function isAddHiveAndEnergyForNextCycle(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::AddHiveAndEnergyForNextCycle`; }

export interface AddHiveAndEnergyForNextCycleFields { poolHiveAddr: ToField<"address">; version: ToField<"u64">; incrementCycle: ToField<"u64">; increaseInEnergy: ToField<"u128">; increaseInHealth: ToField<"u128">; newHiveEnergy: ToField<"u128">; newHoneyHealth: ToField<"u128"> }

export type AddHiveAndEnergyForNextCycleReified = Reified< AddHiveAndEnergyForNextCycle, AddHiveAndEnergyForNextCycleFields >;

export class AddHiveAndEnergyForNextCycle implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::AddHiveAndEnergyForNextCycle`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AddHiveAndEnergyForNextCycle.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::AddHiveAndEnergyForNextCycle`; readonly $typeArgs: []; readonly $isPhantom = AddHiveAndEnergyForNextCycle.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly version: ToField<"u64">; readonly incrementCycle: ToField<"u64">; readonly increaseInEnergy: ToField<"u128">; readonly increaseInHealth: ToField<"u128">; readonly newHiveEnergy: ToField<"u128">; readonly newHoneyHealth: ToField<"u128">

 private constructor(typeArgs: [], fields: AddHiveAndEnergyForNextCycleFields, ) { this.$fullTypeName = composeSuiType( AddHiveAndEnergyForNextCycle.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::AddHiveAndEnergyForNextCycle`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.version = fields.version;; this.incrementCycle = fields.incrementCycle;; this.increaseInEnergy = fields.increaseInEnergy;; this.increaseInHealth = fields.increaseInHealth;; this.newHiveEnergy = fields.newHiveEnergy;; this.newHoneyHealth = fields.newHoneyHealth; }

 static reified( ): AddHiveAndEnergyForNextCycleReified { return { typeName: AddHiveAndEnergyForNextCycle.$typeName, fullTypeName: composeSuiType( AddHiveAndEnergyForNextCycle.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::AddHiveAndEnergyForNextCycle`, typeArgs: [ ] as [], isPhantom: AddHiveAndEnergyForNextCycle.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AddHiveAndEnergyForNextCycle.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AddHiveAndEnergyForNextCycle.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AddHiveAndEnergyForNextCycle.fromBcs( data, ), bcs: AddHiveAndEnergyForNextCycle.bcs, fromJSONField: (field: any) => AddHiveAndEnergyForNextCycle.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AddHiveAndEnergyForNextCycle.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AddHiveAndEnergyForNextCycle.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AddHiveAndEnergyForNextCycle.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AddHiveAndEnergyForNextCycle.fetch( client, id, ), new: ( fields: AddHiveAndEnergyForNextCycleFields, ) => { return new AddHiveAndEnergyForNextCycle( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AddHiveAndEnergyForNextCycle.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AddHiveAndEnergyForNextCycle>> { return phantom(AddHiveAndEnergyForNextCycle.reified( )); } static get p() { return AddHiveAndEnergyForNextCycle.phantom() }

 static get bcs() { return bcs.struct("AddHiveAndEnergyForNextCycle", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), increment_cycle: bcs.u64(), increase_in_energy: bcs.u128(), increase_in_health: bcs.u128(), new_hive_energy: bcs.u128(), new_honey_health: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): AddHiveAndEnergyForNextCycle { return AddHiveAndEnergyForNextCycle.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), version: decodeFromFields("u64", fields.version), incrementCycle: decodeFromFields("u64", fields.increment_cycle), increaseInEnergy: decodeFromFields("u128", fields.increase_in_energy), increaseInHealth: decodeFromFields("u128", fields.increase_in_health), newHiveEnergy: decodeFromFields("u128", fields.new_hive_energy), newHoneyHealth: decodeFromFields("u128", fields.new_honey_health) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AddHiveAndEnergyForNextCycle { if (!isAddHiveAndEnergyForNextCycle(item.type)) { throw new Error("not a AddHiveAndEnergyForNextCycle type");

 }

 return AddHiveAndEnergyForNextCycle.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), version: decodeFromFieldsWithTypes("u64", item.fields.version), incrementCycle: decodeFromFieldsWithTypes("u64", item.fields.increment_cycle), increaseInEnergy: decodeFromFieldsWithTypes("u128", item.fields.increase_in_energy), increaseInHealth: decodeFromFieldsWithTypes("u128", item.fields.increase_in_health), newHiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.new_hive_energy), newHoneyHealth: decodeFromFieldsWithTypes("u128", item.fields.new_honey_health) } ) }

 static fromBcs( data: Uint8Array ): AddHiveAndEnergyForNextCycle { return AddHiveAndEnergyForNextCycle.fromFields( AddHiveAndEnergyForNextCycle.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,version: this.version.toString(),incrementCycle: this.incrementCycle.toString(),increaseInEnergy: this.increaseInEnergy.toString(),increaseInHealth: this.increaseInHealth.toString(),newHiveEnergy: this.newHiveEnergy.toString(),newHoneyHealth: this.newHoneyHealth.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AddHiveAndEnergyForNextCycle { return AddHiveAndEnergyForNextCycle.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), version: decodeFromJSONField("u64", field.version), incrementCycle: decodeFromJSONField("u64", field.incrementCycle), increaseInEnergy: decodeFromJSONField("u128", field.increaseInEnergy), increaseInHealth: decodeFromJSONField("u128", field.increaseInHealth), newHiveEnergy: decodeFromJSONField("u128", field.newHiveEnergy), newHoneyHealth: decodeFromJSONField("u128", field.newHoneyHealth) } ) }

 static fromJSON( json: Record<string, any> ): AddHiveAndEnergyForNextCycle { if (json.$typeName !== AddHiveAndEnergyForNextCycle.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AddHiveAndEnergyForNextCycle.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AddHiveAndEnergyForNextCycle { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAddHiveAndEnergyForNextCycle(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AddHiveAndEnergyForNextCycle object`); } return AddHiveAndEnergyForNextCycle.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AddHiveAndEnergyForNextCycle { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAddHiveAndEnergyForNextCycle(data.bcs.type)) { throw new Error(`object at is not a AddHiveAndEnergyForNextCycle object`); }

 return AddHiveAndEnergyForNextCycle.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AddHiveAndEnergyForNextCycle.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AddHiveAndEnergyForNextCycle> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AddHiveAndEnergyForNextCycle object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAddHiveAndEnergyForNextCycle(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AddHiveAndEnergyForNextCycle object`); }

 return AddHiveAndEnergyForNextCycle.fromSuiObjectData( res.data ); }

 }

/* ============================== AddedToDragonDen =============================== */

export function isAddedToDragonDen(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::AddedToDragonDen`; }

export interface AddedToDragonDenFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address">; username: ToField<String>; lpBalanceAdded: ToField<"u64">; isDragonBeeLocked: ToField<"bool">; hiveEarned: ToField<"u64">; honeyEarned: ToField<"u64">; hiveClaimIndex: ToField<"u256">; honeyClaimIndex: ToField<"u256"> }

export type AddedToDragonDenReified = Reified< AddedToDragonDen, AddedToDragonDenFields >;

export class AddedToDragonDen implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::AddedToDragonDen`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AddedToDragonDen.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::AddedToDragonDen`; readonly $typeArgs: []; readonly $isPhantom = AddedToDragonDen.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">; readonly username: ToField<String>; readonly lpBalanceAdded: ToField<"u64">; readonly isDragonBeeLocked: ToField<"bool">; readonly hiveEarned: ToField<"u64">; readonly honeyEarned: ToField<"u64">; readonly hiveClaimIndex: ToField<"u256">; readonly honeyClaimIndex: ToField<"u256">

 private constructor(typeArgs: [], fields: AddedToDragonDenFields, ) { this.$fullTypeName = composeSuiType( AddedToDragonDen.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::AddedToDragonDen`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr;; this.username = fields.username;; this.lpBalanceAdded = fields.lpBalanceAdded;; this.isDragonBeeLocked = fields.isDragonBeeLocked;; this.hiveEarned = fields.hiveEarned;; this.honeyEarned = fields.honeyEarned;; this.hiveClaimIndex = fields.hiveClaimIndex;; this.honeyClaimIndex = fields.honeyClaimIndex; }

 static reified( ): AddedToDragonDenReified { return { typeName: AddedToDragonDen.$typeName, fullTypeName: composeSuiType( AddedToDragonDen.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::AddedToDragonDen`, typeArgs: [ ] as [], isPhantom: AddedToDragonDen.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AddedToDragonDen.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AddedToDragonDen.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AddedToDragonDen.fromBcs( data, ), bcs: AddedToDragonDen.bcs, fromJSONField: (field: any) => AddedToDragonDen.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AddedToDragonDen.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AddedToDragonDen.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AddedToDragonDen.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AddedToDragonDen.fetch( client, id, ), new: ( fields: AddedToDragonDenFields, ) => { return new AddedToDragonDen( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AddedToDragonDen.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AddedToDragonDen>> { return phantom(AddedToDragonDen.reified( )); } static get p() { return AddedToDragonDen.phantom() }

 static get bcs() { return bcs.struct("AddedToDragonDen", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, lp_balance_added: bcs.u64(), is_dragon_bee_locked: bcs.bool(), hive_earned: bcs.u64(), honey_earned: bcs.u64(), hive_claim_index: bcs.u256(), honey_claim_index: bcs.u256()

}) };

 static fromFields( fields: Record<string, any> ): AddedToDragonDen { return AddedToDragonDen.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr), username: decodeFromFields(String.reified(), fields.username), lpBalanceAdded: decodeFromFields("u64", fields.lp_balance_added), isDragonBeeLocked: decodeFromFields("bool", fields.is_dragon_bee_locked), hiveEarned: decodeFromFields("u64", fields.hive_earned), honeyEarned: decodeFromFields("u64", fields.honey_earned), hiveClaimIndex: decodeFromFields("u256", fields.hive_claim_index), honeyClaimIndex: decodeFromFields("u256", fields.honey_claim_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AddedToDragonDen { if (!isAddedToDragonDen(item.type)) { throw new Error("not a AddedToDragonDen type");

 }

 return AddedToDragonDen.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), lpBalanceAdded: decodeFromFieldsWithTypes("u64", item.fields.lp_balance_added), isDragonBeeLocked: decodeFromFieldsWithTypes("bool", item.fields.is_dragon_bee_locked), hiveEarned: decodeFromFieldsWithTypes("u64", item.fields.hive_earned), honeyEarned: decodeFromFieldsWithTypes("u64", item.fields.honey_earned), hiveClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.hive_claim_index), honeyClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.honey_claim_index) } ) }

 static fromBcs( data: Uint8Array ): AddedToDragonDen { return AddedToDragonDen.fromFields( AddedToDragonDen.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,username: this.username,lpBalanceAdded: this.lpBalanceAdded.toString(),isDragonBeeLocked: this.isDragonBeeLocked,hiveEarned: this.hiveEarned.toString(),honeyEarned: this.honeyEarned.toString(),hiveClaimIndex: this.hiveClaimIndex.toString(),honeyClaimIndex: this.honeyClaimIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AddedToDragonDen { return AddedToDragonDen.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr), username: decodeFromJSONField(String.reified(), field.username), lpBalanceAdded: decodeFromJSONField("u64", field.lpBalanceAdded), isDragonBeeLocked: decodeFromJSONField("bool", field.isDragonBeeLocked), hiveEarned: decodeFromJSONField("u64", field.hiveEarned), honeyEarned: decodeFromJSONField("u64", field.honeyEarned), hiveClaimIndex: decodeFromJSONField("u256", field.hiveClaimIndex), honeyClaimIndex: decodeFromJSONField("u256", field.honeyClaimIndex) } ) }

 static fromJSON( json: Record<string, any> ): AddedToDragonDen { if (json.$typeName !== AddedToDragonDen.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AddedToDragonDen.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AddedToDragonDen { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAddedToDragonDen(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AddedToDragonDen object`); } return AddedToDragonDen.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AddedToDragonDen { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAddedToDragonDen(data.bcs.type)) { throw new Error(`object at is not a AddedToDragonDen object`); }

 return AddedToDragonDen.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AddedToDragonDen.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AddedToDragonDen> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AddedToDragonDen object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAddedToDragonDen(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AddedToDragonDen object`); }

 return AddedToDragonDen.fromSuiObjectData( res.data ); }

 }

/* ============================== BribeAddedForEmissions =============================== */

export function isBribeAddedForEmissions(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::BribeAddedForEmissions`; }

export interface BribeAddedForEmissionsFields { coinType: ToField<String>; bribeForHiveEmisions: ToField<"u64">; bribeForHoneyEmisions: ToField<"u64">; forCycle: ToField<"u64"> }

export type BribeAddedForEmissionsReified = Reified< BribeAddedForEmissions, BribeAddedForEmissionsFields >;

export class BribeAddedForEmissions implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::BribeAddedForEmissions`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BribeAddedForEmissions.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::BribeAddedForEmissions`; readonly $typeArgs: []; readonly $isPhantom = BribeAddedForEmissions.$isPhantom;

 readonly coinType: ToField<String>; readonly bribeForHiveEmisions: ToField<"u64">; readonly bribeForHoneyEmisions: ToField<"u64">; readonly forCycle: ToField<"u64">

 private constructor(typeArgs: [], fields: BribeAddedForEmissionsFields, ) { this.$fullTypeName = composeSuiType( BribeAddedForEmissions.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::BribeAddedForEmissions`; this.$typeArgs = typeArgs;

 this.coinType = fields.coinType;; this.bribeForHiveEmisions = fields.bribeForHiveEmisions;; this.bribeForHoneyEmisions = fields.bribeForHoneyEmisions;; this.forCycle = fields.forCycle; }

 static reified( ): BribeAddedForEmissionsReified { return { typeName: BribeAddedForEmissions.$typeName, fullTypeName: composeSuiType( BribeAddedForEmissions.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::BribeAddedForEmissions`, typeArgs: [ ] as [], isPhantom: BribeAddedForEmissions.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BribeAddedForEmissions.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BribeAddedForEmissions.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BribeAddedForEmissions.fromBcs( data, ), bcs: BribeAddedForEmissions.bcs, fromJSONField: (field: any) => BribeAddedForEmissions.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BribeAddedForEmissions.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BribeAddedForEmissions.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BribeAddedForEmissions.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BribeAddedForEmissions.fetch( client, id, ), new: ( fields: BribeAddedForEmissionsFields, ) => { return new BribeAddedForEmissions( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BribeAddedForEmissions.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BribeAddedForEmissions>> { return phantom(BribeAddedForEmissions.reified( )); } static get p() { return BribeAddedForEmissions.phantom() }

 static get bcs() { return bcs.struct("BribeAddedForEmissions", {

 coin_type: String.bcs, bribe_for_hive_emisions: bcs.u64(), bribe_for_honey_emisions: bcs.u64(), for_cycle: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BribeAddedForEmissions { return BribeAddedForEmissions.reified( ).new( { coinType: decodeFromFields(String.reified(), fields.coin_type), bribeForHiveEmisions: decodeFromFields("u64", fields.bribe_for_hive_emisions), bribeForHoneyEmisions: decodeFromFields("u64", fields.bribe_for_honey_emisions), forCycle: decodeFromFields("u64", fields.for_cycle) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BribeAddedForEmissions { if (!isBribeAddedForEmissions(item.type)) { throw new Error("not a BribeAddedForEmissions type");

 }

 return BribeAddedForEmissions.reified( ).new( { coinType: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_type), bribeForHiveEmisions: decodeFromFieldsWithTypes("u64", item.fields.bribe_for_hive_emisions), bribeForHoneyEmisions: decodeFromFieldsWithTypes("u64", item.fields.bribe_for_honey_emisions), forCycle: decodeFromFieldsWithTypes("u64", item.fields.for_cycle) } ) }

 static fromBcs( data: Uint8Array ): BribeAddedForEmissions { return BribeAddedForEmissions.fromFields( BribeAddedForEmissions.bcs.parse(data) ) }

 toJSONField() { return {

 coinType: this.coinType,bribeForHiveEmisions: this.bribeForHiveEmisions.toString(),bribeForHoneyEmisions: this.bribeForHoneyEmisions.toString(),forCycle: this.forCycle.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BribeAddedForEmissions { return BribeAddedForEmissions.reified( ).new( { coinType: decodeFromJSONField(String.reified(), field.coinType), bribeForHiveEmisions: decodeFromJSONField("u64", field.bribeForHiveEmisions), bribeForHoneyEmisions: decodeFromJSONField("u64", field.bribeForHoneyEmisions), forCycle: decodeFromJSONField("u64", field.forCycle) } ) }

 static fromJSON( json: Record<string, any> ): BribeAddedForEmissions { if (json.$typeName !== BribeAddedForEmissions.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BribeAddedForEmissions.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BribeAddedForEmissions { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBribeAddedForEmissions(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BribeAddedForEmissions object`); } return BribeAddedForEmissions.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BribeAddedForEmissions { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBribeAddedForEmissions(data.bcs.type)) { throw new Error(`object at is not a BribeAddedForEmissions object`); }

 return BribeAddedForEmissions.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BribeAddedForEmissions.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BribeAddedForEmissions> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BribeAddedForEmissions object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBribeAddedForEmissions(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BribeAddedForEmissions object`); }

 return BribeAddedForEmissions.fromSuiObjectData( res.data ); }

 }

/* ============================== BribeClaimedByTrainerThreePool =============================== */

export function isBribeClaimedByTrainerThreePool(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::BribeClaimedByTrainerThreePool`; }

export interface BribeClaimedByTrainerThreePoolFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address">; claimedCycles: ToField<Vector<"u64">>; claimedHiveBribesA: ToField<Vector<"u64">>; claimedHoneyBribesA: ToField<Vector<"u64">>; claimedHiveBribesB: ToField<Vector<"u64">>; claimedHoneyBribesB: ToField<Vector<"u64">>; claimedHiveBribesC: ToField<Vector<"u64">>; claimedHoneyBribesC: ToField<Vector<"u64">>; bribeABal: ToField<"u64">; bribeBBal: ToField<"u64">; bribeCBal: ToField<"u64"> }

export type BribeClaimedByTrainerThreePoolReified = Reified< BribeClaimedByTrainerThreePool, BribeClaimedByTrainerThreePoolFields >;

export class BribeClaimedByTrainerThreePool implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::BribeClaimedByTrainerThreePool`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BribeClaimedByTrainerThreePool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::BribeClaimedByTrainerThreePool`; readonly $typeArgs: []; readonly $isPhantom = BribeClaimedByTrainerThreePool.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">; readonly claimedCycles: ToField<Vector<"u64">>; readonly claimedHiveBribesA: ToField<Vector<"u64">>; readonly claimedHoneyBribesA: ToField<Vector<"u64">>; readonly claimedHiveBribesB: ToField<Vector<"u64">>; readonly claimedHoneyBribesB: ToField<Vector<"u64">>; readonly claimedHiveBribesC: ToField<Vector<"u64">>; readonly claimedHoneyBribesC: ToField<Vector<"u64">>; readonly bribeABal: ToField<"u64">; readonly bribeBBal: ToField<"u64">; readonly bribeCBal: ToField<"u64">

 private constructor(typeArgs: [], fields: BribeClaimedByTrainerThreePoolFields, ) { this.$fullTypeName = composeSuiType( BribeClaimedByTrainerThreePool.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::BribeClaimedByTrainerThreePool`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr;; this.claimedCycles = fields.claimedCycles;; this.claimedHiveBribesA = fields.claimedHiveBribesA;; this.claimedHoneyBribesA = fields.claimedHoneyBribesA;; this.claimedHiveBribesB = fields.claimedHiveBribesB;; this.claimedHoneyBribesB = fields.claimedHoneyBribesB;; this.claimedHiveBribesC = fields.claimedHiveBribesC;; this.claimedHoneyBribesC = fields.claimedHoneyBribesC;; this.bribeABal = fields.bribeABal;; this.bribeBBal = fields.bribeBBal;; this.bribeCBal = fields.bribeCBal; }

 static reified( ): BribeClaimedByTrainerThreePoolReified { return { typeName: BribeClaimedByTrainerThreePool.$typeName, fullTypeName: composeSuiType( BribeClaimedByTrainerThreePool.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::BribeClaimedByTrainerThreePool`, typeArgs: [ ] as [], isPhantom: BribeClaimedByTrainerThreePool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BribeClaimedByTrainerThreePool.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BribeClaimedByTrainerThreePool.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BribeClaimedByTrainerThreePool.fromBcs( data, ), bcs: BribeClaimedByTrainerThreePool.bcs, fromJSONField: (field: any) => BribeClaimedByTrainerThreePool.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BribeClaimedByTrainerThreePool.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BribeClaimedByTrainerThreePool.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BribeClaimedByTrainerThreePool.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BribeClaimedByTrainerThreePool.fetch( client, id, ), new: ( fields: BribeClaimedByTrainerThreePoolFields, ) => { return new BribeClaimedByTrainerThreePool( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BribeClaimedByTrainerThreePool.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BribeClaimedByTrainerThreePool>> { return phantom(BribeClaimedByTrainerThreePool.reified( )); } static get p() { return BribeClaimedByTrainerThreePool.phantom() }

 static get bcs() { return bcs.struct("BribeClaimedByTrainerThreePool", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), claimed_cycles: bcs.vector(bcs.u64()), claimed_hive_bribes_a: bcs.vector(bcs.u64()), claimed_honey_bribes_a: bcs.vector(bcs.u64()), claimed_hive_bribes_b: bcs.vector(bcs.u64()), claimed_honey_bribes_b: bcs.vector(bcs.u64()), claimed_hive_bribes_c: bcs.vector(bcs.u64()), claimed_honey_bribes_c: bcs.vector(bcs.u64()), bribe_a_bal: bcs.u64(), bribe_b_bal: bcs.u64(), bribe_c_bal: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BribeClaimedByTrainerThreePool { return BribeClaimedByTrainerThreePool.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr), claimedCycles: decodeFromFields(reified.vector("u64"), fields.claimed_cycles), claimedHiveBribesA: decodeFromFields(reified.vector("u64"), fields.claimed_hive_bribes_a), claimedHoneyBribesA: decodeFromFields(reified.vector("u64"), fields.claimed_honey_bribes_a), claimedHiveBribesB: decodeFromFields(reified.vector("u64"), fields.claimed_hive_bribes_b), claimedHoneyBribesB: decodeFromFields(reified.vector("u64"), fields.claimed_honey_bribes_b), claimedHiveBribesC: decodeFromFields(reified.vector("u64"), fields.claimed_hive_bribes_c), claimedHoneyBribesC: decodeFromFields(reified.vector("u64"), fields.claimed_honey_bribes_c), bribeABal: decodeFromFields("u64", fields.bribe_a_bal), bribeBBal: decodeFromFields("u64", fields.bribe_b_bal), bribeCBal: decodeFromFields("u64", fields.bribe_c_bal) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BribeClaimedByTrainerThreePool { if (!isBribeClaimedByTrainerThreePool(item.type)) { throw new Error("not a BribeClaimedByTrainerThreePool type");

 }

 return BribeClaimedByTrainerThreePool.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), claimedCycles: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_cycles), claimedHiveBribesA: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_hive_bribes_a), claimedHoneyBribesA: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_honey_bribes_a), claimedHiveBribesB: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_hive_bribes_b), claimedHoneyBribesB: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_honey_bribes_b), claimedHiveBribesC: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_hive_bribes_c), claimedHoneyBribesC: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_honey_bribes_c), bribeABal: decodeFromFieldsWithTypes("u64", item.fields.bribe_a_bal), bribeBBal: decodeFromFieldsWithTypes("u64", item.fields.bribe_b_bal), bribeCBal: decodeFromFieldsWithTypes("u64", item.fields.bribe_c_bal) } ) }

 static fromBcs( data: Uint8Array ): BribeClaimedByTrainerThreePool { return BribeClaimedByTrainerThreePool.fromFields( BribeClaimedByTrainerThreePool.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,claimedCycles: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedCycles),claimedHiveBribesA: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHiveBribesA),claimedHoneyBribesA: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHoneyBribesA),claimedHiveBribesB: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHiveBribesB),claimedHoneyBribesB: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHoneyBribesB),claimedHiveBribesC: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHiveBribesC),claimedHoneyBribesC: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHoneyBribesC),bribeABal: this.bribeABal.toString(),bribeBBal: this.bribeBBal.toString(),bribeCBal: this.bribeCBal.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BribeClaimedByTrainerThreePool { return BribeClaimedByTrainerThreePool.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr), claimedCycles: decodeFromJSONField(reified.vector("u64"), field.claimedCycles), claimedHiveBribesA: decodeFromJSONField(reified.vector("u64"), field.claimedHiveBribesA), claimedHoneyBribesA: decodeFromJSONField(reified.vector("u64"), field.claimedHoneyBribesA), claimedHiveBribesB: decodeFromJSONField(reified.vector("u64"), field.claimedHiveBribesB), claimedHoneyBribesB: decodeFromJSONField(reified.vector("u64"), field.claimedHoneyBribesB), claimedHiveBribesC: decodeFromJSONField(reified.vector("u64"), field.claimedHiveBribesC), claimedHoneyBribesC: decodeFromJSONField(reified.vector("u64"), field.claimedHoneyBribesC), bribeABal: decodeFromJSONField("u64", field.bribeABal), bribeBBal: decodeFromJSONField("u64", field.bribeBBal), bribeCBal: decodeFromJSONField("u64", field.bribeCBal) } ) }

 static fromJSON( json: Record<string, any> ): BribeClaimedByTrainerThreePool { if (json.$typeName !== BribeClaimedByTrainerThreePool.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BribeClaimedByTrainerThreePool.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BribeClaimedByTrainerThreePool { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBribeClaimedByTrainerThreePool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BribeClaimedByTrainerThreePool object`); } return BribeClaimedByTrainerThreePool.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BribeClaimedByTrainerThreePool { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBribeClaimedByTrainerThreePool(data.bcs.type)) { throw new Error(`object at is not a BribeClaimedByTrainerThreePool object`); }

 return BribeClaimedByTrainerThreePool.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BribeClaimedByTrainerThreePool.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BribeClaimedByTrainerThreePool> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BribeClaimedByTrainerThreePool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBribeClaimedByTrainerThreePool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BribeClaimedByTrainerThreePool object`); }

 return BribeClaimedByTrainerThreePool.fromSuiObjectData( res.data ); }

 }

/* ============================== BribeClaimedByTrainerTwoPool =============================== */

export function isBribeClaimedByTrainerTwoPool(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::BribeClaimedByTrainerTwoPool`; }

export interface BribeClaimedByTrainerTwoPoolFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address">; claimedCycles: ToField<Vector<"u64">>; claimedHiveBribesA: ToField<Vector<"u64">>; claimedHoneyBribesA: ToField<Vector<"u64">>; claimedHiveBribesB: ToField<Vector<"u64">>; claimedHoneyBribesB: ToField<Vector<"u64">>; bribeABal: ToField<"u64">; bribeBBal: ToField<"u64"> }

export type BribeClaimedByTrainerTwoPoolReified = Reified< BribeClaimedByTrainerTwoPool, BribeClaimedByTrainerTwoPoolFields >;

export class BribeClaimedByTrainerTwoPool implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::BribeClaimedByTrainerTwoPool`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BribeClaimedByTrainerTwoPool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::BribeClaimedByTrainerTwoPool`; readonly $typeArgs: []; readonly $isPhantom = BribeClaimedByTrainerTwoPool.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">; readonly claimedCycles: ToField<Vector<"u64">>; readonly claimedHiveBribesA: ToField<Vector<"u64">>; readonly claimedHoneyBribesA: ToField<Vector<"u64">>; readonly claimedHiveBribesB: ToField<Vector<"u64">>; readonly claimedHoneyBribesB: ToField<Vector<"u64">>; readonly bribeABal: ToField<"u64">; readonly bribeBBal: ToField<"u64">

 private constructor(typeArgs: [], fields: BribeClaimedByTrainerTwoPoolFields, ) { this.$fullTypeName = composeSuiType( BribeClaimedByTrainerTwoPool.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::BribeClaimedByTrainerTwoPool`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr;; this.claimedCycles = fields.claimedCycles;; this.claimedHiveBribesA = fields.claimedHiveBribesA;; this.claimedHoneyBribesA = fields.claimedHoneyBribesA;; this.claimedHiveBribesB = fields.claimedHiveBribesB;; this.claimedHoneyBribesB = fields.claimedHoneyBribesB;; this.bribeABal = fields.bribeABal;; this.bribeBBal = fields.bribeBBal; }

 static reified( ): BribeClaimedByTrainerTwoPoolReified { return { typeName: BribeClaimedByTrainerTwoPool.$typeName, fullTypeName: composeSuiType( BribeClaimedByTrainerTwoPool.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::BribeClaimedByTrainerTwoPool`, typeArgs: [ ] as [], isPhantom: BribeClaimedByTrainerTwoPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BribeClaimedByTrainerTwoPool.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BribeClaimedByTrainerTwoPool.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BribeClaimedByTrainerTwoPool.fromBcs( data, ), bcs: BribeClaimedByTrainerTwoPool.bcs, fromJSONField: (field: any) => BribeClaimedByTrainerTwoPool.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BribeClaimedByTrainerTwoPool.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BribeClaimedByTrainerTwoPool.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BribeClaimedByTrainerTwoPool.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BribeClaimedByTrainerTwoPool.fetch( client, id, ), new: ( fields: BribeClaimedByTrainerTwoPoolFields, ) => { return new BribeClaimedByTrainerTwoPool( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BribeClaimedByTrainerTwoPool.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BribeClaimedByTrainerTwoPool>> { return phantom(BribeClaimedByTrainerTwoPool.reified( )); } static get p() { return BribeClaimedByTrainerTwoPool.phantom() }

 static get bcs() { return bcs.struct("BribeClaimedByTrainerTwoPool", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), claimed_cycles: bcs.vector(bcs.u64()), claimed_hive_bribes_a: bcs.vector(bcs.u64()), claimed_honey_bribes_a: bcs.vector(bcs.u64()), claimed_hive_bribes_b: bcs.vector(bcs.u64()), claimed_honey_bribes_b: bcs.vector(bcs.u64()), bribe_a_bal: bcs.u64(), bribe_b_bal: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BribeClaimedByTrainerTwoPool { return BribeClaimedByTrainerTwoPool.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr), claimedCycles: decodeFromFields(reified.vector("u64"), fields.claimed_cycles), claimedHiveBribesA: decodeFromFields(reified.vector("u64"), fields.claimed_hive_bribes_a), claimedHoneyBribesA: decodeFromFields(reified.vector("u64"), fields.claimed_honey_bribes_a), claimedHiveBribesB: decodeFromFields(reified.vector("u64"), fields.claimed_hive_bribes_b), claimedHoneyBribesB: decodeFromFields(reified.vector("u64"), fields.claimed_honey_bribes_b), bribeABal: decodeFromFields("u64", fields.bribe_a_bal), bribeBBal: decodeFromFields("u64", fields.bribe_b_bal) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BribeClaimedByTrainerTwoPool { if (!isBribeClaimedByTrainerTwoPool(item.type)) { throw new Error("not a BribeClaimedByTrainerTwoPool type");

 }

 return BribeClaimedByTrainerTwoPool.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), claimedCycles: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_cycles), claimedHiveBribesA: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_hive_bribes_a), claimedHoneyBribesA: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_honey_bribes_a), claimedHiveBribesB: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_hive_bribes_b), claimedHoneyBribesB: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_honey_bribes_b), bribeABal: decodeFromFieldsWithTypes("u64", item.fields.bribe_a_bal), bribeBBal: decodeFromFieldsWithTypes("u64", item.fields.bribe_b_bal) } ) }

 static fromBcs( data: Uint8Array ): BribeClaimedByTrainerTwoPool { return BribeClaimedByTrainerTwoPool.fromFields( BribeClaimedByTrainerTwoPool.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,claimedCycles: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedCycles),claimedHiveBribesA: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHiveBribesA),claimedHoneyBribesA: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHoneyBribesA),claimedHiveBribesB: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHiveBribesB),claimedHoneyBribesB: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHoneyBribesB),bribeABal: this.bribeABal.toString(),bribeBBal: this.bribeBBal.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BribeClaimedByTrainerTwoPool { return BribeClaimedByTrainerTwoPool.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr), claimedCycles: decodeFromJSONField(reified.vector("u64"), field.claimedCycles), claimedHiveBribesA: decodeFromJSONField(reified.vector("u64"), field.claimedHiveBribesA), claimedHoneyBribesA: decodeFromJSONField(reified.vector("u64"), field.claimedHoneyBribesA), claimedHiveBribesB: decodeFromJSONField(reified.vector("u64"), field.claimedHiveBribesB), claimedHoneyBribesB: decodeFromJSONField(reified.vector("u64"), field.claimedHoneyBribesB), bribeABal: decodeFromJSONField("u64", field.bribeABal), bribeBBal: decodeFromJSONField("u64", field.bribeBBal) } ) }

 static fromJSON( json: Record<string, any> ): BribeClaimedByTrainerTwoPool { if (json.$typeName !== BribeClaimedByTrainerTwoPool.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BribeClaimedByTrainerTwoPool.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BribeClaimedByTrainerTwoPool { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBribeClaimedByTrainerTwoPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BribeClaimedByTrainerTwoPool object`); } return BribeClaimedByTrainerTwoPool.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BribeClaimedByTrainerTwoPool { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBribeClaimedByTrainerTwoPool(data.bcs.type)) { throw new Error(`object at is not a BribeClaimedByTrainerTwoPool object`); }

 return BribeClaimedByTrainerTwoPool.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BribeClaimedByTrainerTwoPool.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BribeClaimedByTrainerTwoPool> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BribeClaimedByTrainerTwoPool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBribeClaimedByTrainerTwoPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BribeClaimedByTrainerTwoPool object`); }

 return BribeClaimedByTrainerTwoPool.fromSuiObjectData( res.data ); }

 }

/* ============================== Bribes =============================== */

export function isBribes(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::Bribes`; }

export interface BribesFields { votingBribes: ToField<Vector<String>>; hiveBribe: ToField<Balance<ToPhantom<HIVE>>>; honeyBribe: ToField<Balance<ToPhantom<HONEY>>>; hiveFeeClaimIndexes: ToField<LinkedTable<"u64", "u256">>; honeyFeeClaimIndexes: ToField<LinkedTable<"u64", "u256">> }

export type BribesReified = Reified< Bribes, BribesFields >;

export class Bribes implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::Bribes`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Bribes.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::Bribes`; readonly $typeArgs: []; readonly $isPhantom = Bribes.$isPhantom;

 readonly votingBribes: ToField<Vector<String>>; readonly hiveBribe: ToField<Balance<ToPhantom<HIVE>>>; readonly honeyBribe: ToField<Balance<ToPhantom<HONEY>>>; readonly hiveFeeClaimIndexes: ToField<LinkedTable<"u64", "u256">>; readonly honeyFeeClaimIndexes: ToField<LinkedTable<"u64", "u256">>

 private constructor(typeArgs: [], fields: BribesFields, ) { this.$fullTypeName = composeSuiType( Bribes.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::Bribes`; this.$typeArgs = typeArgs;

 this.votingBribes = fields.votingBribes;; this.hiveBribe = fields.hiveBribe;; this.honeyBribe = fields.honeyBribe;; this.hiveFeeClaimIndexes = fields.hiveFeeClaimIndexes;; this.honeyFeeClaimIndexes = fields.honeyFeeClaimIndexes; }

 static reified( ): BribesReified { return { typeName: Bribes.$typeName, fullTypeName: composeSuiType( Bribes.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::Bribes`, typeArgs: [ ] as [], isPhantom: Bribes.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Bribes.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Bribes.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Bribes.fromBcs( data, ), bcs: Bribes.bcs, fromJSONField: (field: any) => Bribes.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Bribes.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Bribes.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Bribes.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Bribes.fetch( client, id, ), new: ( fields: BribesFields, ) => { return new Bribes( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Bribes.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Bribes>> { return phantom(Bribes.reified( )); } static get p() { return Bribes.phantom() }

 static get bcs() { return bcs.struct("Bribes", {

 voting_bribes: bcs.vector(String.bcs), hive_bribe: Balance.bcs, honey_bribe: Balance.bcs, hive_fee_claim_indexes: LinkedTable.bcs(bcs.u64()), honey_fee_claim_indexes: LinkedTable.bcs(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): Bribes { return Bribes.reified( ).new( { votingBribes: decodeFromFields(reified.vector(String.reified()), fields.voting_bribes), hiveBribe: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_bribe), honeyBribe: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_bribe), hiveFeeClaimIndexes: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u256")), fields.hive_fee_claim_indexes), honeyFeeClaimIndexes: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u256")), fields.honey_fee_claim_indexes) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Bribes { if (!isBribes(item.type)) { throw new Error("not a Bribes type");

 }

 return Bribes.reified( ).new( { votingBribes: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.voting_bribes), hiveBribe: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_bribe), honeyBribe: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_bribe), hiveFeeClaimIndexes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u256")), item.fields.hive_fee_claim_indexes), honeyFeeClaimIndexes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u256")), item.fields.honey_fee_claim_indexes) } ) }

 static fromBcs( data: Uint8Array ): Bribes { return Bribes.fromFields( Bribes.bcs.parse(data) ) }

 toJSONField() { return {

 votingBribes: fieldToJSON<Vector<String>>(`vector<${String.$typeName}>`, this.votingBribes),hiveBribe: this.hiveBribe.toJSONField(),honeyBribe: this.honeyBribe.toJSONField(),hiveFeeClaimIndexes: this.hiveFeeClaimIndexes.toJSONField(),honeyFeeClaimIndexes: this.honeyFeeClaimIndexes.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Bribes { return Bribes.reified( ).new( { votingBribes: decodeFromJSONField(reified.vector(String.reified()), field.votingBribes), hiveBribe: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveBribe), honeyBribe: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyBribe), hiveFeeClaimIndexes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u256")), field.hiveFeeClaimIndexes), honeyFeeClaimIndexes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u256")), field.honeyFeeClaimIndexes) } ) }

 static fromJSON( json: Record<string, any> ): Bribes { if (json.$typeName !== Bribes.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Bribes.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Bribes { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBribes(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Bribes object`); } return Bribes.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Bribes { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBribes(data.bcs.type)) { throw new Error(`object at is not a Bribes object`); }

 return Bribes.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Bribes.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Bribes> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Bribes object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBribes(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Bribes object`); }

 return Bribes.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonBeeWithdrawalRequested =============================== */

export function isDragonBeeWithdrawalRequested(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::DragonBeeWithdrawalRequested`; }

export interface DragonBeeWithdrawalRequestedFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address">; beeVersion: ToField<"u64">; withdrawableAtCycle: ToField<"u64"> }

export type DragonBeeWithdrawalRequestedReified = Reified< DragonBeeWithdrawalRequested, DragonBeeWithdrawalRequestedFields >;

export class DragonBeeWithdrawalRequested implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::DragonBeeWithdrawalRequested`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonBeeWithdrawalRequested.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::DragonBeeWithdrawalRequested`; readonly $typeArgs: []; readonly $isPhantom = DragonBeeWithdrawalRequested.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">; readonly beeVersion: ToField<"u64">; readonly withdrawableAtCycle: ToField<"u64">

 private constructor(typeArgs: [], fields: DragonBeeWithdrawalRequestedFields, ) { this.$fullTypeName = composeSuiType( DragonBeeWithdrawalRequested.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::DragonBeeWithdrawalRequested`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr;; this.beeVersion = fields.beeVersion;; this.withdrawableAtCycle = fields.withdrawableAtCycle; }

 static reified( ): DragonBeeWithdrawalRequestedReified { return { typeName: DragonBeeWithdrawalRequested.$typeName, fullTypeName: composeSuiType( DragonBeeWithdrawalRequested.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::DragonBeeWithdrawalRequested`, typeArgs: [ ] as [], isPhantom: DragonBeeWithdrawalRequested.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonBeeWithdrawalRequested.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonBeeWithdrawalRequested.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonBeeWithdrawalRequested.fromBcs( data, ), bcs: DragonBeeWithdrawalRequested.bcs, fromJSONField: (field: any) => DragonBeeWithdrawalRequested.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonBeeWithdrawalRequested.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonBeeWithdrawalRequested.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonBeeWithdrawalRequested.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonBeeWithdrawalRequested.fetch( client, id, ), new: ( fields: DragonBeeWithdrawalRequestedFields, ) => { return new DragonBeeWithdrawalRequested( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonBeeWithdrawalRequested.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonBeeWithdrawalRequested>> { return phantom(DragonBeeWithdrawalRequested.reified( )); } static get p() { return DragonBeeWithdrawalRequested.phantom() }

 static get bcs() { return bcs.struct("DragonBeeWithdrawalRequested", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bee_version: bcs.u64(), withdrawable_at_cycle: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DragonBeeWithdrawalRequested { return DragonBeeWithdrawalRequested.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr), beeVersion: decodeFromFields("u64", fields.bee_version), withdrawableAtCycle: decodeFromFields("u64", fields.withdrawable_at_cycle) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonBeeWithdrawalRequested { if (!isDragonBeeWithdrawalRequested(item.type)) { throw new Error("not a DragonBeeWithdrawalRequested type");

 }

 return DragonBeeWithdrawalRequested.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), withdrawableAtCycle: decodeFromFieldsWithTypes("u64", item.fields.withdrawable_at_cycle) } ) }

 static fromBcs( data: Uint8Array ): DragonBeeWithdrawalRequested { return DragonBeeWithdrawalRequested.fromFields( DragonBeeWithdrawalRequested.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,beeVersion: this.beeVersion.toString(),withdrawableAtCycle: this.withdrawableAtCycle.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonBeeWithdrawalRequested { return DragonBeeWithdrawalRequested.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr), beeVersion: decodeFromJSONField("u64", field.beeVersion), withdrawableAtCycle: decodeFromJSONField("u64", field.withdrawableAtCycle) } ) }

 static fromJSON( json: Record<string, any> ): DragonBeeWithdrawalRequested { if (json.$typeName !== DragonBeeWithdrawalRequested.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonBeeWithdrawalRequested.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonBeeWithdrawalRequested { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonBeeWithdrawalRequested(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonBeeWithdrawalRequested object`); } return DragonBeeWithdrawalRequested.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonBeeWithdrawalRequested { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonBeeWithdrawalRequested(data.bcs.type)) { throw new Error(`object at is not a DragonBeeWithdrawalRequested object`); }

 return DragonBeeWithdrawalRequested.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonBeeWithdrawalRequested.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonBeeWithdrawalRequested> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonBeeWithdrawalRequested object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonBeeWithdrawalRequested(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonBeeWithdrawalRequested object`); }

 return DragonBeeWithdrawalRequested.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonDen =============================== */

export function isDragonDen(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::dragon_food::DragonDen` + '<'); }

export interface DragonDenFields<H extends PhantomTypeArgument> { stakedBalance: ToField<Balance<H>>; hiveClaimIndex: ToField<"u256">; honeyClaimIndex: ToField<"u256">; dragonBee: ToField<Option<LockedDragonBee>>; rewardsIndexes: ToField<LinkedTable<String1, "u256">>; isLocked: ToField<"bool"> }

export type DragonDenReified<H extends PhantomTypeArgument> = Reified< DragonDen<H>, DragonDenFields<H> >;

export class DragonDen<H extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::DragonDen`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = DragonDen.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::DragonDen<${PhantomToTypeStr<H>}>`; readonly $typeArgs: [PhantomToTypeStr<H>]; readonly $isPhantom = DragonDen.$isPhantom;

 readonly stakedBalance: ToField<Balance<H>>; readonly hiveClaimIndex: ToField<"u256">; readonly honeyClaimIndex: ToField<"u256">; readonly dragonBee: ToField<Option<LockedDragonBee>>; readonly rewardsIndexes: ToField<LinkedTable<String1, "u256">>; readonly isLocked: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<H>], fields: DragonDenFields<H>, ) { this.$fullTypeName = composeSuiType( DragonDen.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::DragonDen<${PhantomToTypeStr<H>}>`; this.$typeArgs = typeArgs;

 this.stakedBalance = fields.stakedBalance;; this.hiveClaimIndex = fields.hiveClaimIndex;; this.honeyClaimIndex = fields.honeyClaimIndex;; this.dragonBee = fields.dragonBee;; this.rewardsIndexes = fields.rewardsIndexes;; this.isLocked = fields.isLocked; }

 static reified<H extends PhantomReified<PhantomTypeArgument>>( H: H ): DragonDenReified<ToPhantomTypeArgument<H>> { return { typeName: DragonDen.$typeName, fullTypeName: composeSuiType( DragonDen.$typeName, ...[extractType(H)] ) as `${typeof PKG_V1}::dragon_food::DragonDen<${PhantomToTypeStr<ToPhantomTypeArgument<H>>}>`, typeArgs: [ extractType(H) ] as [PhantomToTypeStr<ToPhantomTypeArgument<H>>], isPhantom: DragonDen.$isPhantom, reifiedTypeArgs: [H], fromFields: (fields: Record<string, any>) => DragonDen.fromFields( H, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonDen.fromFieldsWithTypes( H, item, ), fromBcs: (data: Uint8Array) => DragonDen.fromBcs( H, data, ), bcs: DragonDen.bcs, fromJSONField: (field: any) => DragonDen.fromJSONField( H, field, ), fromJSON: (json: Record<string, any>) => DragonDen.fromJSON( H, json, ), fromSuiParsedData: (content: SuiParsedData) => DragonDen.fromSuiParsedData( H, content, ), fromSuiObjectData: (content: SuiObjectData) => DragonDen.fromSuiObjectData( H, content, ), fetch: async (client: SuiClient, id: string) => DragonDen.fetch( client, H, id, ), new: ( fields: DragonDenFields<ToPhantomTypeArgument<H>>, ) => { return new DragonDen( [extractType(H)], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonDen.reified }

 static phantom<H extends PhantomReified<PhantomTypeArgument>>( H: H ): PhantomReified<ToTypeStr<DragonDen<ToPhantomTypeArgument<H>>>> { return phantom(DragonDen.reified( H )); } static get p() { return DragonDen.phantom }

 static get bcs() { return bcs.struct("DragonDen", {

 staked_balance: Balance.bcs, hive_claim_index: bcs.u256(), honey_claim_index: bcs.u256(), dragon_bee: Option.bcs(LockedDragonBee.bcs), rewards_indexes: LinkedTable.bcs(String1.bcs), is_locked: bcs.bool()

}) };

 static fromFields<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, fields: Record<string, any> ): DragonDen<ToPhantomTypeArgument<H>> { return DragonDen.reified( typeArg, ).new( { stakedBalance: decodeFromFields(Balance.reified(typeArg), fields.staked_balance), hiveClaimIndex: decodeFromFields("u256", fields.hive_claim_index), honeyClaimIndex: decodeFromFields("u256", fields.honey_claim_index), dragonBee: decodeFromFields(Option.reified(LockedDragonBee.reified()), fields.dragon_bee), rewardsIndexes: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("u256")), fields.rewards_indexes), isLocked: decodeFromFields("bool", fields.is_locked) } ) }

 static fromFieldsWithTypes<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, item: FieldsWithTypes ): DragonDen<ToPhantomTypeArgument<H>> { if (!isDragonDen(item.type)) { throw new Error("not a DragonDen type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return DragonDen.reified( typeArg, ).new( { stakedBalance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.staked_balance), hiveClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.hive_claim_index), honeyClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.honey_claim_index), dragonBee: decodeFromFieldsWithTypes(Option.reified(LockedDragonBee.reified()), item.fields.dragon_bee), rewardsIndexes: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("u256")), item.fields.rewards_indexes), isLocked: decodeFromFieldsWithTypes("bool", item.fields.is_locked) } ) }

 static fromBcs<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, data: Uint8Array ): DragonDen<ToPhantomTypeArgument<H>> { return DragonDen.fromFields( typeArg, DragonDen.bcs.parse(data) ) }

 toJSONField() { return {

 stakedBalance: this.stakedBalance.toJSONField(),hiveClaimIndex: this.hiveClaimIndex.toString(),honeyClaimIndex: this.honeyClaimIndex.toString(),dragonBee: fieldToJSON<Option<LockedDragonBee>>(`${Option.$typeName}<${LockedDragonBee.$typeName}>`, this.dragonBee),rewardsIndexes: this.rewardsIndexes.toJSONField(),isLocked: this.isLocked,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, field: any ): DragonDen<ToPhantomTypeArgument<H>> { return DragonDen.reified( typeArg, ).new( { stakedBalance: decodeFromJSONField(Balance.reified(typeArg), field.stakedBalance), hiveClaimIndex: decodeFromJSONField("u256", field.hiveClaimIndex), honeyClaimIndex: decodeFromJSONField("u256", field.honeyClaimIndex), dragonBee: decodeFromJSONField(Option.reified(LockedDragonBee.reified()), field.dragonBee), rewardsIndexes: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("u256")), field.rewardsIndexes), isLocked: decodeFromJSONField("bool", field.isLocked) } ) }

 static fromJSON<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, json: Record<string, any> ): DragonDen<ToPhantomTypeArgument<H>> { if (json.$typeName !== DragonDen.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(DragonDen.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return DragonDen.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, content: SuiParsedData ): DragonDen<ToPhantomTypeArgument<H>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonDen(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonDen object`); } return DragonDen.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, data: SuiObjectData ): DragonDen<ToPhantomTypeArgument<H>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonDen(data.bcs.type)) { throw new Error(`object at is not a DragonDen object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return DragonDen.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonDen.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<H extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: H, id: string ): Promise<DragonDen<ToPhantomTypeArgument<H>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonDen object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonDen(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonDen object`); }

 return DragonDen.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== DragonFood =============================== */

export function isDragonFood(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::DragonFood`; }

export interface DragonFoodFields { id: ToField<UID>; dragonFoodCap: ToField<DragonFoodCapability>; emissions: ToField<EmissionSchedule>; hiveAvailable: ToField<Balance<ToPhantom<HIVE>>>; honeyAvailable: ToField<Balance<ToPhantom<HONEY>>>; ongoingCycle: ToField<"u64">; curCycleStartEpoch: ToField<"u64">; cycleDuration: ToField<"u64">; addedHiveEnergy: ToField<"u128">; totalHiveEnergy: ToField<LinkedTable<"u64", "u128">>; removedHiveEnergy: ToField<"u128">; addedHoneyHealth: ToField<"u128">; totalHoneyHealth: ToField<LinkedTable<"u64", "u128">>; removedHoneyHealth: ToField<"u128">; voteConfig: ToField<VoteConfig>; activePoolHives: ToField<"u64">; poolHives: ToField<LinkedTable<String1, "address">>; moduleVersion: ToField<"u64"> }

export type DragonFoodReified = Reified< DragonFood, DragonFoodFields >;

export class DragonFood implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::DragonFood`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonFood.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::DragonFood`; readonly $typeArgs: []; readonly $isPhantom = DragonFood.$isPhantom;

 readonly id: ToField<UID>; readonly dragonFoodCap: ToField<DragonFoodCapability>; readonly emissions: ToField<EmissionSchedule>; readonly hiveAvailable: ToField<Balance<ToPhantom<HIVE>>>; readonly honeyAvailable: ToField<Balance<ToPhantom<HONEY>>>; readonly ongoingCycle: ToField<"u64">; readonly curCycleStartEpoch: ToField<"u64">; readonly cycleDuration: ToField<"u64">; readonly addedHiveEnergy: ToField<"u128">; readonly totalHiveEnergy: ToField<LinkedTable<"u64", "u128">>; readonly removedHiveEnergy: ToField<"u128">; readonly addedHoneyHealth: ToField<"u128">; readonly totalHoneyHealth: ToField<LinkedTable<"u64", "u128">>; readonly removedHoneyHealth: ToField<"u128">; readonly voteConfig: ToField<VoteConfig>; readonly activePoolHives: ToField<"u64">; readonly poolHives: ToField<LinkedTable<String1, "address">>; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [], fields: DragonFoodFields, ) { this.$fullTypeName = composeSuiType( DragonFood.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::DragonFood`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.dragonFoodCap = fields.dragonFoodCap;; this.emissions = fields.emissions;; this.hiveAvailable = fields.hiveAvailable;; this.honeyAvailable = fields.honeyAvailable;; this.ongoingCycle = fields.ongoingCycle;; this.curCycleStartEpoch = fields.curCycleStartEpoch;; this.cycleDuration = fields.cycleDuration;; this.addedHiveEnergy = fields.addedHiveEnergy;; this.totalHiveEnergy = fields.totalHiveEnergy;; this.removedHiveEnergy = fields.removedHiveEnergy;; this.addedHoneyHealth = fields.addedHoneyHealth;; this.totalHoneyHealth = fields.totalHoneyHealth;; this.removedHoneyHealth = fields.removedHoneyHealth;; this.voteConfig = fields.voteConfig;; this.activePoolHives = fields.activePoolHives;; this.poolHives = fields.poolHives;; this.moduleVersion = fields.moduleVersion; }

 static reified( ): DragonFoodReified { return { typeName: DragonFood.$typeName, fullTypeName: composeSuiType( DragonFood.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::DragonFood`, typeArgs: [ ] as [], isPhantom: DragonFood.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonFood.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonFood.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonFood.fromBcs( data, ), bcs: DragonFood.bcs, fromJSONField: (field: any) => DragonFood.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonFood.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonFood.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonFood.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonFood.fetch( client, id, ), new: ( fields: DragonFoodFields, ) => { return new DragonFood( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonFood.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonFood>> { return phantom(DragonFood.reified( )); } static get p() { return DragonFood.phantom() }

 static get bcs() { return bcs.struct("DragonFood", {

 id: UID.bcs, dragon_food_cap: DragonFoodCapability.bcs, emissions: EmissionSchedule.bcs, hive_available: Balance.bcs, honey_available: Balance.bcs, ongoing_cycle: bcs.u64(), cur_cycle_start_epoch: bcs.u64(), cycle_duration: bcs.u64(), added_hive_energy: bcs.u128(), total_hive_energy: LinkedTable.bcs(bcs.u64()), removed_hive_energy: bcs.u128(), added_honey_health: bcs.u128(), total_honey_health: LinkedTable.bcs(bcs.u64()), removed_honey_health: bcs.u128(), vote_config: VoteConfig.bcs, active_pool_hives: bcs.u64(), pool_hives: LinkedTable.bcs(String1.bcs), module_version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DragonFood { return DragonFood.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), dragonFoodCap: decodeFromFields(DragonFoodCapability.reified(), fields.dragon_food_cap), emissions: decodeFromFields(EmissionSchedule.reified(), fields.emissions), hiveAvailable: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_available), honeyAvailable: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_available), ongoingCycle: decodeFromFields("u64", fields.ongoing_cycle), curCycleStartEpoch: decodeFromFields("u64", fields.cur_cycle_start_epoch), cycleDuration: decodeFromFields("u64", fields.cycle_duration), addedHiveEnergy: decodeFromFields("u128", fields.added_hive_energy), totalHiveEnergy: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u128")), fields.total_hive_energy), removedHiveEnergy: decodeFromFields("u128", fields.removed_hive_energy), addedHoneyHealth: decodeFromFields("u128", fields.added_honey_health), totalHoneyHealth: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u128")), fields.total_honey_health), removedHoneyHealth: decodeFromFields("u128", fields.removed_honey_health), voteConfig: decodeFromFields(VoteConfig.reified(), fields.vote_config), activePoolHives: decodeFromFields("u64", fields.active_pool_hives), poolHives: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.pool_hives), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonFood { if (!isDragonFood(item.type)) { throw new Error("not a DragonFood type");

 }

 return DragonFood.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), dragonFoodCap: decodeFromFieldsWithTypes(DragonFoodCapability.reified(), item.fields.dragon_food_cap), emissions: decodeFromFieldsWithTypes(EmissionSchedule.reified(), item.fields.emissions), hiveAvailable: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_available), honeyAvailable: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_available), ongoingCycle: decodeFromFieldsWithTypes("u64", item.fields.ongoing_cycle), curCycleStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_cycle_start_epoch), cycleDuration: decodeFromFieldsWithTypes("u64", item.fields.cycle_duration), addedHiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.added_hive_energy), totalHiveEnergy: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u128")), item.fields.total_hive_energy), removedHiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.removed_hive_energy), addedHoneyHealth: decodeFromFieldsWithTypes("u128", item.fields.added_honey_health), totalHoneyHealth: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u128")), item.fields.total_honey_health), removedHoneyHealth: decodeFromFieldsWithTypes("u128", item.fields.removed_honey_health), voteConfig: decodeFromFieldsWithTypes(VoteConfig.reified(), item.fields.vote_config), activePoolHives: decodeFromFieldsWithTypes("u64", item.fields.active_pool_hives), poolHives: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.pool_hives), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs( data: Uint8Array ): DragonFood { return DragonFood.fromFields( DragonFood.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,dragonFoodCap: this.dragonFoodCap.toJSONField(),emissions: this.emissions.toJSONField(),hiveAvailable: this.hiveAvailable.toJSONField(),honeyAvailable: this.honeyAvailable.toJSONField(),ongoingCycle: this.ongoingCycle.toString(),curCycleStartEpoch: this.curCycleStartEpoch.toString(),cycleDuration: this.cycleDuration.toString(),addedHiveEnergy: this.addedHiveEnergy.toString(),totalHiveEnergy: this.totalHiveEnergy.toJSONField(),removedHiveEnergy: this.removedHiveEnergy.toString(),addedHoneyHealth: this.addedHoneyHealth.toString(),totalHoneyHealth: this.totalHoneyHealth.toJSONField(),removedHoneyHealth: this.removedHoneyHealth.toString(),voteConfig: this.voteConfig.toJSONField(),activePoolHives: this.activePoolHives.toString(),poolHives: this.poolHives.toJSONField(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonFood { return DragonFood.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), dragonFoodCap: decodeFromJSONField(DragonFoodCapability.reified(), field.dragonFoodCap), emissions: decodeFromJSONField(EmissionSchedule.reified(), field.emissions), hiveAvailable: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveAvailable), honeyAvailable: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyAvailable), ongoingCycle: decodeFromJSONField("u64", field.ongoingCycle), curCycleStartEpoch: decodeFromJSONField("u64", field.curCycleStartEpoch), cycleDuration: decodeFromJSONField("u64", field.cycleDuration), addedHiveEnergy: decodeFromJSONField("u128", field.addedHiveEnergy), totalHiveEnergy: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u128")), field.totalHiveEnergy), removedHiveEnergy: decodeFromJSONField("u128", field.removedHiveEnergy), addedHoneyHealth: decodeFromJSONField("u128", field.addedHoneyHealth), totalHoneyHealth: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u128")), field.totalHoneyHealth), removedHoneyHealth: decodeFromJSONField("u128", field.removedHoneyHealth), voteConfig: decodeFromJSONField(VoteConfig.reified(), field.voteConfig), activePoolHives: decodeFromJSONField("u64", field.activePoolHives), poolHives: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.poolHives), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON( json: Record<string, any> ): DragonFood { if (json.$typeName !== DragonFood.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonFood.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonFood { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonFood(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonFood object`); } return DragonFood.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonFood { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonFood(data.bcs.type)) { throw new Error(`object at is not a DragonFood object`); }

 return DragonFood.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonFood.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonFood> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonFood object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonFood(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonFood object`); }

 return DragonFood.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonFoodCycleUpdated =============================== */

export function isDragonFoodCycleUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::DragonFoodCycleUpdated`; }

export interface DragonFoodCycleUpdatedFields { hivePerEpoch: ToField<"u64">; honeyPerEpoch: ToField<"u64">; curCycle: ToField<"u64">; curCycleStartEpoch: ToField<"u64">; cycleDuration: ToField<"u64">; curTotalHiveEnergy: ToField<"u128">; curTotalHoneyHealth: ToField<"u128"> }

export type DragonFoodCycleUpdatedReified = Reified< DragonFoodCycleUpdated, DragonFoodCycleUpdatedFields >;

export class DragonFoodCycleUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::DragonFoodCycleUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonFoodCycleUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::DragonFoodCycleUpdated`; readonly $typeArgs: []; readonly $isPhantom = DragonFoodCycleUpdated.$isPhantom;

 readonly hivePerEpoch: ToField<"u64">; readonly honeyPerEpoch: ToField<"u64">; readonly curCycle: ToField<"u64">; readonly curCycleStartEpoch: ToField<"u64">; readonly cycleDuration: ToField<"u64">; readonly curTotalHiveEnergy: ToField<"u128">; readonly curTotalHoneyHealth: ToField<"u128">

 private constructor(typeArgs: [], fields: DragonFoodCycleUpdatedFields, ) { this.$fullTypeName = composeSuiType( DragonFoodCycleUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::DragonFoodCycleUpdated`; this.$typeArgs = typeArgs;

 this.hivePerEpoch = fields.hivePerEpoch;; this.honeyPerEpoch = fields.honeyPerEpoch;; this.curCycle = fields.curCycle;; this.curCycleStartEpoch = fields.curCycleStartEpoch;; this.cycleDuration = fields.cycleDuration;; this.curTotalHiveEnergy = fields.curTotalHiveEnergy;; this.curTotalHoneyHealth = fields.curTotalHoneyHealth; }

 static reified( ): DragonFoodCycleUpdatedReified { return { typeName: DragonFoodCycleUpdated.$typeName, fullTypeName: composeSuiType( DragonFoodCycleUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::DragonFoodCycleUpdated`, typeArgs: [ ] as [], isPhantom: DragonFoodCycleUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonFoodCycleUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonFoodCycleUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonFoodCycleUpdated.fromBcs( data, ), bcs: DragonFoodCycleUpdated.bcs, fromJSONField: (field: any) => DragonFoodCycleUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonFoodCycleUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonFoodCycleUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonFoodCycleUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonFoodCycleUpdated.fetch( client, id, ), new: ( fields: DragonFoodCycleUpdatedFields, ) => { return new DragonFoodCycleUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonFoodCycleUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonFoodCycleUpdated>> { return phantom(DragonFoodCycleUpdated.reified( )); } static get p() { return DragonFoodCycleUpdated.phantom() }

 static get bcs() { return bcs.struct("DragonFoodCycleUpdated", {

 hive_per_epoch: bcs.u64(), honey_per_epoch: bcs.u64(), cur_cycle: bcs.u64(), cur_cycle_start_epoch: bcs.u64(), cycle_duration: bcs.u64(), cur_total_hive_energy: bcs.u128(), cur_total_honey_health: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): DragonFoodCycleUpdated { return DragonFoodCycleUpdated.reified( ).new( { hivePerEpoch: decodeFromFields("u64", fields.hive_per_epoch), honeyPerEpoch: decodeFromFields("u64", fields.honey_per_epoch), curCycle: decodeFromFields("u64", fields.cur_cycle), curCycleStartEpoch: decodeFromFields("u64", fields.cur_cycle_start_epoch), cycleDuration: decodeFromFields("u64", fields.cycle_duration), curTotalHiveEnergy: decodeFromFields("u128", fields.cur_total_hive_energy), curTotalHoneyHealth: decodeFromFields("u128", fields.cur_total_honey_health) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonFoodCycleUpdated { if (!isDragonFoodCycleUpdated(item.type)) { throw new Error("not a DragonFoodCycleUpdated type");

 }

 return DragonFoodCycleUpdated.reified( ).new( { hivePerEpoch: decodeFromFieldsWithTypes("u64", item.fields.hive_per_epoch), honeyPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.honey_per_epoch), curCycle: decodeFromFieldsWithTypes("u64", item.fields.cur_cycle), curCycleStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_cycle_start_epoch), cycleDuration: decodeFromFieldsWithTypes("u64", item.fields.cycle_duration), curTotalHiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.cur_total_hive_energy), curTotalHoneyHealth: decodeFromFieldsWithTypes("u128", item.fields.cur_total_honey_health) } ) }

 static fromBcs( data: Uint8Array ): DragonFoodCycleUpdated { return DragonFoodCycleUpdated.fromFields( DragonFoodCycleUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 hivePerEpoch: this.hivePerEpoch.toString(),honeyPerEpoch: this.honeyPerEpoch.toString(),curCycle: this.curCycle.toString(),curCycleStartEpoch: this.curCycleStartEpoch.toString(),cycleDuration: this.cycleDuration.toString(),curTotalHiveEnergy: this.curTotalHiveEnergy.toString(),curTotalHoneyHealth: this.curTotalHoneyHealth.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonFoodCycleUpdated { return DragonFoodCycleUpdated.reified( ).new( { hivePerEpoch: decodeFromJSONField("u64", field.hivePerEpoch), honeyPerEpoch: decodeFromJSONField("u64", field.honeyPerEpoch), curCycle: decodeFromJSONField("u64", field.curCycle), curCycleStartEpoch: decodeFromJSONField("u64", field.curCycleStartEpoch), cycleDuration: decodeFromJSONField("u64", field.cycleDuration), curTotalHiveEnergy: decodeFromJSONField("u128", field.curTotalHiveEnergy), curTotalHoneyHealth: decodeFromJSONField("u128", field.curTotalHoneyHealth) } ) }

 static fromJSON( json: Record<string, any> ): DragonFoodCycleUpdated { if (json.$typeName !== DragonFoodCycleUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonFoodCycleUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonFoodCycleUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonFoodCycleUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonFoodCycleUpdated object`); } return DragonFoodCycleUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonFoodCycleUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonFoodCycleUpdated(data.bcs.type)) { throw new Error(`object at is not a DragonFoodCycleUpdated object`); }

 return DragonFoodCycleUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonFoodCycleUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonFoodCycleUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonFoodCycleUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonFoodCycleUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonFoodCycleUpdated object`); }

 return DragonFoodCycleUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== DragonFoodVotingConfigUpdated =============================== */

export function isDragonFoodVotingConfigUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::DragonFoodVotingConfigUpdated`; }

export interface DragonFoodVotingConfigUpdatedFields { proposalRequiredDeposit: ToField<"u64">; votingStartDelay: ToField<"u64">; votingPeriodLength: ToField<"u64">; executionDelay: ToField<"u64">; executionPeriodLength: ToField<"u64">; proposalRequiredQuorum: ToField<"u64">; proposalApprovalThreshold: ToField<"u64"> }

export type DragonFoodVotingConfigUpdatedReified = Reified< DragonFoodVotingConfigUpdated, DragonFoodVotingConfigUpdatedFields >;

export class DragonFoodVotingConfigUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::DragonFoodVotingConfigUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DragonFoodVotingConfigUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::DragonFoodVotingConfigUpdated`; readonly $typeArgs: []; readonly $isPhantom = DragonFoodVotingConfigUpdated.$isPhantom;

 readonly proposalRequiredDeposit: ToField<"u64">; readonly votingStartDelay: ToField<"u64">; readonly votingPeriodLength: ToField<"u64">; readonly executionDelay: ToField<"u64">; readonly executionPeriodLength: ToField<"u64">; readonly proposalRequiredQuorum: ToField<"u64">; readonly proposalApprovalThreshold: ToField<"u64">

 private constructor(typeArgs: [], fields: DragonFoodVotingConfigUpdatedFields, ) { this.$fullTypeName = composeSuiType( DragonFoodVotingConfigUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::DragonFoodVotingConfigUpdated`; this.$typeArgs = typeArgs;

 this.proposalRequiredDeposit = fields.proposalRequiredDeposit;; this.votingStartDelay = fields.votingStartDelay;; this.votingPeriodLength = fields.votingPeriodLength;; this.executionDelay = fields.executionDelay;; this.executionPeriodLength = fields.executionPeriodLength;; this.proposalRequiredQuorum = fields.proposalRequiredQuorum;; this.proposalApprovalThreshold = fields.proposalApprovalThreshold; }

 static reified( ): DragonFoodVotingConfigUpdatedReified { return { typeName: DragonFoodVotingConfigUpdated.$typeName, fullTypeName: composeSuiType( DragonFoodVotingConfigUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::DragonFoodVotingConfigUpdated`, typeArgs: [ ] as [], isPhantom: DragonFoodVotingConfigUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DragonFoodVotingConfigUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DragonFoodVotingConfigUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DragonFoodVotingConfigUpdated.fromBcs( data, ), bcs: DragonFoodVotingConfigUpdated.bcs, fromJSONField: (field: any) => DragonFoodVotingConfigUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DragonFoodVotingConfigUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DragonFoodVotingConfigUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DragonFoodVotingConfigUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DragonFoodVotingConfigUpdated.fetch( client, id, ), new: ( fields: DragonFoodVotingConfigUpdatedFields, ) => { return new DragonFoodVotingConfigUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DragonFoodVotingConfigUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DragonFoodVotingConfigUpdated>> { return phantom(DragonFoodVotingConfigUpdated.reified( )); } static get p() { return DragonFoodVotingConfigUpdated.phantom() }

 static get bcs() { return bcs.struct("DragonFoodVotingConfigUpdated", {

 proposal_required_deposit: bcs.u64(), voting_start_delay: bcs.u64(), voting_period_length: bcs.u64(), execution_delay: bcs.u64(), execution_period_length: bcs.u64(), proposal_required_quorum: bcs.u64(), proposal_approval_threshold: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DragonFoodVotingConfigUpdated { return DragonFoodVotingConfigUpdated.reified( ).new( { proposalRequiredDeposit: decodeFromFields("u64", fields.proposal_required_deposit), votingStartDelay: decodeFromFields("u64", fields.voting_start_delay), votingPeriodLength: decodeFromFields("u64", fields.voting_period_length), executionDelay: decodeFromFields("u64", fields.execution_delay), executionPeriodLength: decodeFromFields("u64", fields.execution_period_length), proposalRequiredQuorum: decodeFromFields("u64", fields.proposal_required_quorum), proposalApprovalThreshold: decodeFromFields("u64", fields.proposal_approval_threshold) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DragonFoodVotingConfigUpdated { if (!isDragonFoodVotingConfigUpdated(item.type)) { throw new Error("not a DragonFoodVotingConfigUpdated type");

 }

 return DragonFoodVotingConfigUpdated.reified( ).new( { proposalRequiredDeposit: decodeFromFieldsWithTypes("u64", item.fields.proposal_required_deposit), votingStartDelay: decodeFromFieldsWithTypes("u64", item.fields.voting_start_delay), votingPeriodLength: decodeFromFieldsWithTypes("u64", item.fields.voting_period_length), executionDelay: decodeFromFieldsWithTypes("u64", item.fields.execution_delay), executionPeriodLength: decodeFromFieldsWithTypes("u64", item.fields.execution_period_length), proposalRequiredQuorum: decodeFromFieldsWithTypes("u64", item.fields.proposal_required_quorum), proposalApprovalThreshold: decodeFromFieldsWithTypes("u64", item.fields.proposal_approval_threshold) } ) }

 static fromBcs( data: Uint8Array ): DragonFoodVotingConfigUpdated { return DragonFoodVotingConfigUpdated.fromFields( DragonFoodVotingConfigUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 proposalRequiredDeposit: this.proposalRequiredDeposit.toString(),votingStartDelay: this.votingStartDelay.toString(),votingPeriodLength: this.votingPeriodLength.toString(),executionDelay: this.executionDelay.toString(),executionPeriodLength: this.executionPeriodLength.toString(),proposalRequiredQuorum: this.proposalRequiredQuorum.toString(),proposalApprovalThreshold: this.proposalApprovalThreshold.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DragonFoodVotingConfigUpdated { return DragonFoodVotingConfigUpdated.reified( ).new( { proposalRequiredDeposit: decodeFromJSONField("u64", field.proposalRequiredDeposit), votingStartDelay: decodeFromJSONField("u64", field.votingStartDelay), votingPeriodLength: decodeFromJSONField("u64", field.votingPeriodLength), executionDelay: decodeFromJSONField("u64", field.executionDelay), executionPeriodLength: decodeFromJSONField("u64", field.executionPeriodLength), proposalRequiredQuorum: decodeFromJSONField("u64", field.proposalRequiredQuorum), proposalApprovalThreshold: decodeFromJSONField("u64", field.proposalApprovalThreshold) } ) }

 static fromJSON( json: Record<string, any> ): DragonFoodVotingConfigUpdated { if (json.$typeName !== DragonFoodVotingConfigUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DragonFoodVotingConfigUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DragonFoodVotingConfigUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDragonFoodVotingConfigUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DragonFoodVotingConfigUpdated object`); } return DragonFoodVotingConfigUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DragonFoodVotingConfigUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDragonFoodVotingConfigUpdated(data.bcs.type)) { throw new Error(`object at is not a DragonFoodVotingConfigUpdated object`); }

 return DragonFoodVotingConfigUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DragonFoodVotingConfigUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DragonFoodVotingConfigUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DragonFoodVotingConfigUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDragonFoodVotingConfigUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DragonFoodVotingConfigUpdated object`); }

 return DragonFoodVotingConfigUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== EmissionSchedule =============================== */

export function isEmissionSchedule(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::EmissionSchedule`; }

export interface EmissionScheduleFields { startEpoch: ToField<"u64">; hivePerEpoch: ToField<"u64">; honeyPerEpoch: ToField<"u64">; changePctPerCycle: ToField<"u64">; hiveIncreaseVotes: ToField<LinkedTable<"u64", "u128">>; hiveDecreaseVotes: ToField<LinkedTable<"u64", "u128">>; hiveSameVotes: ToField<LinkedTable<"u64", "u128">>; honeyIncreaseVotes: ToField<LinkedTable<"u64", "u128">>; honeyDecreaseVotes: ToField<LinkedTable<"u64", "u128">>; honeySameVotes: ToField<LinkedTable<"u64", "u128">> }

export type EmissionScheduleReified = Reified< EmissionSchedule, EmissionScheduleFields >;

export class EmissionSchedule implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::EmissionSchedule`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = EmissionSchedule.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::EmissionSchedule`; readonly $typeArgs: []; readonly $isPhantom = EmissionSchedule.$isPhantom;

 readonly startEpoch: ToField<"u64">; readonly hivePerEpoch: ToField<"u64">; readonly honeyPerEpoch: ToField<"u64">; readonly changePctPerCycle: ToField<"u64">; readonly hiveIncreaseVotes: ToField<LinkedTable<"u64", "u128">>; readonly hiveDecreaseVotes: ToField<LinkedTable<"u64", "u128">>; readonly hiveSameVotes: ToField<LinkedTable<"u64", "u128">>; readonly honeyIncreaseVotes: ToField<LinkedTable<"u64", "u128">>; readonly honeyDecreaseVotes: ToField<LinkedTable<"u64", "u128">>; readonly honeySameVotes: ToField<LinkedTable<"u64", "u128">>

 private constructor(typeArgs: [], fields: EmissionScheduleFields, ) { this.$fullTypeName = composeSuiType( EmissionSchedule.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::EmissionSchedule`; this.$typeArgs = typeArgs;

 this.startEpoch = fields.startEpoch;; this.hivePerEpoch = fields.hivePerEpoch;; this.honeyPerEpoch = fields.honeyPerEpoch;; this.changePctPerCycle = fields.changePctPerCycle;; this.hiveIncreaseVotes = fields.hiveIncreaseVotes;; this.hiveDecreaseVotes = fields.hiveDecreaseVotes;; this.hiveSameVotes = fields.hiveSameVotes;; this.honeyIncreaseVotes = fields.honeyIncreaseVotes;; this.honeyDecreaseVotes = fields.honeyDecreaseVotes;; this.honeySameVotes = fields.honeySameVotes; }

 static reified( ): EmissionScheduleReified { return { typeName: EmissionSchedule.$typeName, fullTypeName: composeSuiType( EmissionSchedule.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::EmissionSchedule`, typeArgs: [ ] as [], isPhantom: EmissionSchedule.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => EmissionSchedule.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => EmissionSchedule.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => EmissionSchedule.fromBcs( data, ), bcs: EmissionSchedule.bcs, fromJSONField: (field: any) => EmissionSchedule.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => EmissionSchedule.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => EmissionSchedule.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => EmissionSchedule.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => EmissionSchedule.fetch( client, id, ), new: ( fields: EmissionScheduleFields, ) => { return new EmissionSchedule( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return EmissionSchedule.reified() }

 static phantom( ): PhantomReified<ToTypeStr<EmissionSchedule>> { return phantom(EmissionSchedule.reified( )); } static get p() { return EmissionSchedule.phantom() }

 static get bcs() { return bcs.struct("EmissionSchedule", {

 start_epoch: bcs.u64(), hive_per_epoch: bcs.u64(), honey_per_epoch: bcs.u64(), change_pct_per_cycle: bcs.u64(), hive_increase_votes: LinkedTable.bcs(bcs.u64()), hive_decrease_votes: LinkedTable.bcs(bcs.u64()), hive_same_votes: LinkedTable.bcs(bcs.u64()), honey_increase_votes: LinkedTable.bcs(bcs.u64()), honey_decrease_votes: LinkedTable.bcs(bcs.u64()), honey_same_votes: LinkedTable.bcs(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): EmissionSchedule { return EmissionSchedule.reified( ).new( { startEpoch: decodeFromFields("u64", fields.start_epoch), hivePerEpoch: decodeFromFields("u64", fields.hive_per_epoch), honeyPerEpoch: decodeFromFields("u64", fields.honey_per_epoch), changePctPerCycle: decodeFromFields("u64", fields.change_pct_per_cycle), hiveIncreaseVotes: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u128")), fields.hive_increase_votes), hiveDecreaseVotes: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u128")), fields.hive_decrease_votes), hiveSameVotes: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u128")), fields.hive_same_votes), honeyIncreaseVotes: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u128")), fields.honey_increase_votes), honeyDecreaseVotes: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u128")), fields.honey_decrease_votes), honeySameVotes: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u128")), fields.honey_same_votes) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): EmissionSchedule { if (!isEmissionSchedule(item.type)) { throw new Error("not a EmissionSchedule type");

 }

 return EmissionSchedule.reified( ).new( { startEpoch: decodeFromFieldsWithTypes("u64", item.fields.start_epoch), hivePerEpoch: decodeFromFieldsWithTypes("u64", item.fields.hive_per_epoch), honeyPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.honey_per_epoch), changePctPerCycle: decodeFromFieldsWithTypes("u64", item.fields.change_pct_per_cycle), hiveIncreaseVotes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u128")), item.fields.hive_increase_votes), hiveDecreaseVotes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u128")), item.fields.hive_decrease_votes), hiveSameVotes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u128")), item.fields.hive_same_votes), honeyIncreaseVotes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u128")), item.fields.honey_increase_votes), honeyDecreaseVotes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u128")), item.fields.honey_decrease_votes), honeySameVotes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u128")), item.fields.honey_same_votes) } ) }

 static fromBcs( data: Uint8Array ): EmissionSchedule { return EmissionSchedule.fromFields( EmissionSchedule.bcs.parse(data) ) }

 toJSONField() { return {

 startEpoch: this.startEpoch.toString(),hivePerEpoch: this.hivePerEpoch.toString(),honeyPerEpoch: this.honeyPerEpoch.toString(),changePctPerCycle: this.changePctPerCycle.toString(),hiveIncreaseVotes: this.hiveIncreaseVotes.toJSONField(),hiveDecreaseVotes: this.hiveDecreaseVotes.toJSONField(),hiveSameVotes: this.hiveSameVotes.toJSONField(),honeyIncreaseVotes: this.honeyIncreaseVotes.toJSONField(),honeyDecreaseVotes: this.honeyDecreaseVotes.toJSONField(),honeySameVotes: this.honeySameVotes.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): EmissionSchedule { return EmissionSchedule.reified( ).new( { startEpoch: decodeFromJSONField("u64", field.startEpoch), hivePerEpoch: decodeFromJSONField("u64", field.hivePerEpoch), honeyPerEpoch: decodeFromJSONField("u64", field.honeyPerEpoch), changePctPerCycle: decodeFromJSONField("u64", field.changePctPerCycle), hiveIncreaseVotes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u128")), field.hiveIncreaseVotes), hiveDecreaseVotes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u128")), field.hiveDecreaseVotes), hiveSameVotes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u128")), field.hiveSameVotes), honeyIncreaseVotes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u128")), field.honeyIncreaseVotes), honeyDecreaseVotes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u128")), field.honeyDecreaseVotes), honeySameVotes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u128")), field.honeySameVotes) } ) }

 static fromJSON( json: Record<string, any> ): EmissionSchedule { if (json.$typeName !== EmissionSchedule.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return EmissionSchedule.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): EmissionSchedule { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEmissionSchedule(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a EmissionSchedule object`); } return EmissionSchedule.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): EmissionSchedule { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isEmissionSchedule(data.bcs.type)) { throw new Error(`object at is not a EmissionSchedule object`); }

 return EmissionSchedule.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return EmissionSchedule.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<EmissionSchedule> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching EmissionSchedule object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEmissionSchedule(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a EmissionSchedule object`); }

 return EmissionSchedule.fromSuiObjectData( res.data ); }

 }

/* ============================== EmissionsRcvdByPoolHive =============================== */

export function isEmissionsRcvdByPoolHive(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::EmissionsRcvdByPoolHive`; }

export interface EmissionsRcvdByPoolHiveFields { poolHiveAddr: ToField<"address">; hiveEarned: ToField<"u64">; honeyEarned: ToField<"u64">; hivePerEpoch: ToField<"u256">; honeyPerEpoch: ToField<"u256">; hiveIndexIncrement: ToField<"u256">; honeyIndexIncrement: ToField<"u256">; globalHoneyClaimIndex: ToField<"u256">; globalHiveClaimIndex: ToField<"u256">; lastClaimEpoch: ToField<"u64"> }

export type EmissionsRcvdByPoolHiveReified = Reified< EmissionsRcvdByPoolHive, EmissionsRcvdByPoolHiveFields >;

export class EmissionsRcvdByPoolHive implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::EmissionsRcvdByPoolHive`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = EmissionsRcvdByPoolHive.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::EmissionsRcvdByPoolHive`; readonly $typeArgs: []; readonly $isPhantom = EmissionsRcvdByPoolHive.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly hiveEarned: ToField<"u64">; readonly honeyEarned: ToField<"u64">; readonly hivePerEpoch: ToField<"u256">; readonly honeyPerEpoch: ToField<"u256">; readonly hiveIndexIncrement: ToField<"u256">; readonly honeyIndexIncrement: ToField<"u256">; readonly globalHoneyClaimIndex: ToField<"u256">; readonly globalHiveClaimIndex: ToField<"u256">; readonly lastClaimEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: EmissionsRcvdByPoolHiveFields, ) { this.$fullTypeName = composeSuiType( EmissionsRcvdByPoolHive.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::EmissionsRcvdByPoolHive`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.hiveEarned = fields.hiveEarned;; this.honeyEarned = fields.honeyEarned;; this.hivePerEpoch = fields.hivePerEpoch;; this.honeyPerEpoch = fields.honeyPerEpoch;; this.hiveIndexIncrement = fields.hiveIndexIncrement;; this.honeyIndexIncrement = fields.honeyIndexIncrement;; this.globalHoneyClaimIndex = fields.globalHoneyClaimIndex;; this.globalHiveClaimIndex = fields.globalHiveClaimIndex;; this.lastClaimEpoch = fields.lastClaimEpoch; }

 static reified( ): EmissionsRcvdByPoolHiveReified { return { typeName: EmissionsRcvdByPoolHive.$typeName, fullTypeName: composeSuiType( EmissionsRcvdByPoolHive.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::EmissionsRcvdByPoolHive`, typeArgs: [ ] as [], isPhantom: EmissionsRcvdByPoolHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => EmissionsRcvdByPoolHive.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => EmissionsRcvdByPoolHive.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => EmissionsRcvdByPoolHive.fromBcs( data, ), bcs: EmissionsRcvdByPoolHive.bcs, fromJSONField: (field: any) => EmissionsRcvdByPoolHive.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => EmissionsRcvdByPoolHive.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => EmissionsRcvdByPoolHive.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => EmissionsRcvdByPoolHive.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => EmissionsRcvdByPoolHive.fetch( client, id, ), new: ( fields: EmissionsRcvdByPoolHiveFields, ) => { return new EmissionsRcvdByPoolHive( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return EmissionsRcvdByPoolHive.reified() }

 static phantom( ): PhantomReified<ToTypeStr<EmissionsRcvdByPoolHive>> { return phantom(EmissionsRcvdByPoolHive.reified( )); } static get p() { return EmissionsRcvdByPoolHive.phantom() }

 static get bcs() { return bcs.struct("EmissionsRcvdByPoolHive", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), hive_earned: bcs.u64(), honey_earned: bcs.u64(), hive_per_epoch: bcs.u256(), honey_per_epoch: bcs.u256(), hive_index_increment: bcs.u256(), honey_index_increment: bcs.u256(), global_honey_claim_index: bcs.u256(), global_hive_claim_index: bcs.u256(), last_claim_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): EmissionsRcvdByPoolHive { return EmissionsRcvdByPoolHive.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), hiveEarned: decodeFromFields("u64", fields.hive_earned), honeyEarned: decodeFromFields("u64", fields.honey_earned), hivePerEpoch: decodeFromFields("u256", fields.hive_per_epoch), honeyPerEpoch: decodeFromFields("u256", fields.honey_per_epoch), hiveIndexIncrement: decodeFromFields("u256", fields.hive_index_increment), honeyIndexIncrement: decodeFromFields("u256", fields.honey_index_increment), globalHoneyClaimIndex: decodeFromFields("u256", fields.global_honey_claim_index), globalHiveClaimIndex: decodeFromFields("u256", fields.global_hive_claim_index), lastClaimEpoch: decodeFromFields("u64", fields.last_claim_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): EmissionsRcvdByPoolHive { if (!isEmissionsRcvdByPoolHive(item.type)) { throw new Error("not a EmissionsRcvdByPoolHive type");

 }

 return EmissionsRcvdByPoolHive.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), hiveEarned: decodeFromFieldsWithTypes("u64", item.fields.hive_earned), honeyEarned: decodeFromFieldsWithTypes("u64", item.fields.honey_earned), hivePerEpoch: decodeFromFieldsWithTypes("u256", item.fields.hive_per_epoch), honeyPerEpoch: decodeFromFieldsWithTypes("u256", item.fields.honey_per_epoch), hiveIndexIncrement: decodeFromFieldsWithTypes("u256", item.fields.hive_index_increment), honeyIndexIncrement: decodeFromFieldsWithTypes("u256", item.fields.honey_index_increment), globalHoneyClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.global_honey_claim_index), globalHiveClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.global_hive_claim_index), lastClaimEpoch: decodeFromFieldsWithTypes("u64", item.fields.last_claim_epoch) } ) }

 static fromBcs( data: Uint8Array ): EmissionsRcvdByPoolHive { return EmissionsRcvdByPoolHive.fromFields( EmissionsRcvdByPoolHive.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,hiveEarned: this.hiveEarned.toString(),honeyEarned: this.honeyEarned.toString(),hivePerEpoch: this.hivePerEpoch.toString(),honeyPerEpoch: this.honeyPerEpoch.toString(),hiveIndexIncrement: this.hiveIndexIncrement.toString(),honeyIndexIncrement: this.honeyIndexIncrement.toString(),globalHoneyClaimIndex: this.globalHoneyClaimIndex.toString(),globalHiveClaimIndex: this.globalHiveClaimIndex.toString(),lastClaimEpoch: this.lastClaimEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): EmissionsRcvdByPoolHive { return EmissionsRcvdByPoolHive.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), hiveEarned: decodeFromJSONField("u64", field.hiveEarned), honeyEarned: decodeFromJSONField("u64", field.honeyEarned), hivePerEpoch: decodeFromJSONField("u256", field.hivePerEpoch), honeyPerEpoch: decodeFromJSONField("u256", field.honeyPerEpoch), hiveIndexIncrement: decodeFromJSONField("u256", field.hiveIndexIncrement), honeyIndexIncrement: decodeFromJSONField("u256", field.honeyIndexIncrement), globalHoneyClaimIndex: decodeFromJSONField("u256", field.globalHoneyClaimIndex), globalHiveClaimIndex: decodeFromJSONField("u256", field.globalHiveClaimIndex), lastClaimEpoch: decodeFromJSONField("u64", field.lastClaimEpoch) } ) }

 static fromJSON( json: Record<string, any> ): EmissionsRcvdByPoolHive { if (json.$typeName !== EmissionsRcvdByPoolHive.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return EmissionsRcvdByPoolHive.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): EmissionsRcvdByPoolHive { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEmissionsRcvdByPoolHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a EmissionsRcvdByPoolHive object`); } return EmissionsRcvdByPoolHive.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): EmissionsRcvdByPoolHive { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isEmissionsRcvdByPoolHive(data.bcs.type)) { throw new Error(`object at is not a EmissionsRcvdByPoolHive object`); }

 return EmissionsRcvdByPoolHive.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return EmissionsRcvdByPoolHive.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<EmissionsRcvdByPoolHive> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching EmissionsRcvdByPoolHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEmissionsRcvdByPoolHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a EmissionsRcvdByPoolHive object`); }

 return EmissionsRcvdByPoolHive.fromSuiObjectData( res.data ); }

 }

/* ============================== FeedingFoodToBee =============================== */

export function isFeedingFoodToBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::FeedingFoodToBee`; }

export interface FeedingFoodToBeeFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address">; beeVersion: ToField<"u64">; lockedAtCycle: ToField<"u64">; hiveEarned: ToField<"u64">; honeyEarned: ToField<"u64">; stakedForHoney: ToField<"u64"> }

export type FeedingFoodToBeeReified = Reified< FeedingFoodToBee, FeedingFoodToBeeFields >;

export class FeedingFoodToBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::FeedingFoodToBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FeedingFoodToBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::FeedingFoodToBee`; readonly $typeArgs: []; readonly $isPhantom = FeedingFoodToBee.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">; readonly beeVersion: ToField<"u64">; readonly lockedAtCycle: ToField<"u64">; readonly hiveEarned: ToField<"u64">; readonly honeyEarned: ToField<"u64">; readonly stakedForHoney: ToField<"u64">

 private constructor(typeArgs: [], fields: FeedingFoodToBeeFields, ) { this.$fullTypeName = composeSuiType( FeedingFoodToBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::FeedingFoodToBee`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr;; this.beeVersion = fields.beeVersion;; this.lockedAtCycle = fields.lockedAtCycle;; this.hiveEarned = fields.hiveEarned;; this.honeyEarned = fields.honeyEarned;; this.stakedForHoney = fields.stakedForHoney; }

 static reified( ): FeedingFoodToBeeReified { return { typeName: FeedingFoodToBee.$typeName, fullTypeName: composeSuiType( FeedingFoodToBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::FeedingFoodToBee`, typeArgs: [ ] as [], isPhantom: FeedingFoodToBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeedingFoodToBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FeedingFoodToBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FeedingFoodToBee.fromBcs( data, ), bcs: FeedingFoodToBee.bcs, fromJSONField: (field: any) => FeedingFoodToBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FeedingFoodToBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FeedingFoodToBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FeedingFoodToBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FeedingFoodToBee.fetch( client, id, ), new: ( fields: FeedingFoodToBeeFields, ) => { return new FeedingFoodToBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FeedingFoodToBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FeedingFoodToBee>> { return phantom(FeedingFoodToBee.reified( )); } static get p() { return FeedingFoodToBee.phantom() }

 static get bcs() { return bcs.struct("FeedingFoodToBee", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bee_version: bcs.u64(), locked_at_cycle: bcs.u64(), hive_earned: bcs.u64(), honey_earned: bcs.u64(), staked_for_honey: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): FeedingFoodToBee { return FeedingFoodToBee.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr), beeVersion: decodeFromFields("u64", fields.bee_version), lockedAtCycle: decodeFromFields("u64", fields.locked_at_cycle), hiveEarned: decodeFromFields("u64", fields.hive_earned), honeyEarned: decodeFromFields("u64", fields.honey_earned), stakedForHoney: decodeFromFields("u64", fields.staked_for_honey) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FeedingFoodToBee { if (!isFeedingFoodToBee(item.type)) { throw new Error("not a FeedingFoodToBee type");

 }

 return FeedingFoodToBee.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), lockedAtCycle: decodeFromFieldsWithTypes("u64", item.fields.locked_at_cycle), hiveEarned: decodeFromFieldsWithTypes("u64", item.fields.hive_earned), honeyEarned: decodeFromFieldsWithTypes("u64", item.fields.honey_earned), stakedForHoney: decodeFromFieldsWithTypes("u64", item.fields.staked_for_honey) } ) }

 static fromBcs( data: Uint8Array ): FeedingFoodToBee { return FeedingFoodToBee.fromFields( FeedingFoodToBee.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,beeVersion: this.beeVersion.toString(),lockedAtCycle: this.lockedAtCycle.toString(),hiveEarned: this.hiveEarned.toString(),honeyEarned: this.honeyEarned.toString(),stakedForHoney: this.stakedForHoney.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FeedingFoodToBee { return FeedingFoodToBee.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr), beeVersion: decodeFromJSONField("u64", field.beeVersion), lockedAtCycle: decodeFromJSONField("u64", field.lockedAtCycle), hiveEarned: decodeFromJSONField("u64", field.hiveEarned), honeyEarned: decodeFromJSONField("u64", field.honeyEarned), stakedForHoney: decodeFromJSONField("u64", field.stakedForHoney) } ) }

 static fromJSON( json: Record<string, any> ): FeedingFoodToBee { if (json.$typeName !== FeedingFoodToBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FeedingFoodToBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FeedingFoodToBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeedingFoodToBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeedingFoodToBee object`); } return FeedingFoodToBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FeedingFoodToBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFeedingFoodToBee(data.bcs.type)) { throw new Error(`object at is not a FeedingFoodToBee object`); }

 return FeedingFoodToBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FeedingFoodToBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FeedingFoodToBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeedingFoodToBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeedingFoodToBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeedingFoodToBee object`); }

 return FeedingFoodToBee.fromSuiObjectData( res.data ); }

 }

/* ============================== FeesClaimedForEmissions =============================== */

export function isFeesClaimedForEmissions(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::FeesClaimedForEmissions`; }

export interface FeesClaimedForEmissionsFields { isAdded: ToField<"bool">; hiveFeeClaimed: ToField<"u64">; honeyFeeClaimed: ToField<"u64">; cycle: ToField<"u64">; hiveFeeIndexIncrement: ToField<"u256">; honeyFeeIndexIncrement: ToField<"u256"> }

export type FeesClaimedForEmissionsReified = Reified< FeesClaimedForEmissions, FeesClaimedForEmissionsFields >;

export class FeesClaimedForEmissions implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::FeesClaimedForEmissions`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FeesClaimedForEmissions.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::FeesClaimedForEmissions`; readonly $typeArgs: []; readonly $isPhantom = FeesClaimedForEmissions.$isPhantom;

 readonly isAdded: ToField<"bool">; readonly hiveFeeClaimed: ToField<"u64">; readonly honeyFeeClaimed: ToField<"u64">; readonly cycle: ToField<"u64">; readonly hiveFeeIndexIncrement: ToField<"u256">; readonly honeyFeeIndexIncrement: ToField<"u256">

 private constructor(typeArgs: [], fields: FeesClaimedForEmissionsFields, ) { this.$fullTypeName = composeSuiType( FeesClaimedForEmissions.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::FeesClaimedForEmissions`; this.$typeArgs = typeArgs;

 this.isAdded = fields.isAdded;; this.hiveFeeClaimed = fields.hiveFeeClaimed;; this.honeyFeeClaimed = fields.honeyFeeClaimed;; this.cycle = fields.cycle;; this.hiveFeeIndexIncrement = fields.hiveFeeIndexIncrement;; this.honeyFeeIndexIncrement = fields.honeyFeeIndexIncrement; }

 static reified( ): FeesClaimedForEmissionsReified { return { typeName: FeesClaimedForEmissions.$typeName, fullTypeName: composeSuiType( FeesClaimedForEmissions.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::FeesClaimedForEmissions`, typeArgs: [ ] as [], isPhantom: FeesClaimedForEmissions.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeesClaimedForEmissions.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FeesClaimedForEmissions.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FeesClaimedForEmissions.fromBcs( data, ), bcs: FeesClaimedForEmissions.bcs, fromJSONField: (field: any) => FeesClaimedForEmissions.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FeesClaimedForEmissions.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FeesClaimedForEmissions.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FeesClaimedForEmissions.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FeesClaimedForEmissions.fetch( client, id, ), new: ( fields: FeesClaimedForEmissionsFields, ) => { return new FeesClaimedForEmissions( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FeesClaimedForEmissions.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FeesClaimedForEmissions>> { return phantom(FeesClaimedForEmissions.reified( )); } static get p() { return FeesClaimedForEmissions.phantom() }

 static get bcs() { return bcs.struct("FeesClaimedForEmissions", {

 is_added: bcs.bool(), hive_fee_claimed: bcs.u64(), honey_fee_claimed: bcs.u64(), cycle: bcs.u64(), hive_fee_index_increment: bcs.u256(), honey_fee_index_increment: bcs.u256()

}) };

 static fromFields( fields: Record<string, any> ): FeesClaimedForEmissions { return FeesClaimedForEmissions.reified( ).new( { isAdded: decodeFromFields("bool", fields.is_added), hiveFeeClaimed: decodeFromFields("u64", fields.hive_fee_claimed), honeyFeeClaimed: decodeFromFields("u64", fields.honey_fee_claimed), cycle: decodeFromFields("u64", fields.cycle), hiveFeeIndexIncrement: decodeFromFields("u256", fields.hive_fee_index_increment), honeyFeeIndexIncrement: decodeFromFields("u256", fields.honey_fee_index_increment) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FeesClaimedForEmissions { if (!isFeesClaimedForEmissions(item.type)) { throw new Error("not a FeesClaimedForEmissions type");

 }

 return FeesClaimedForEmissions.reified( ).new( { isAdded: decodeFromFieldsWithTypes("bool", item.fields.is_added), hiveFeeClaimed: decodeFromFieldsWithTypes("u64", item.fields.hive_fee_claimed), honeyFeeClaimed: decodeFromFieldsWithTypes("u64", item.fields.honey_fee_claimed), cycle: decodeFromFieldsWithTypes("u64", item.fields.cycle), hiveFeeIndexIncrement: decodeFromFieldsWithTypes("u256", item.fields.hive_fee_index_increment), honeyFeeIndexIncrement: decodeFromFieldsWithTypes("u256", item.fields.honey_fee_index_increment) } ) }

 static fromBcs( data: Uint8Array ): FeesClaimedForEmissions { return FeesClaimedForEmissions.fromFields( FeesClaimedForEmissions.bcs.parse(data) ) }

 toJSONField() { return {

 isAdded: this.isAdded,hiveFeeClaimed: this.hiveFeeClaimed.toString(),honeyFeeClaimed: this.honeyFeeClaimed.toString(),cycle: this.cycle.toString(),hiveFeeIndexIncrement: this.hiveFeeIndexIncrement.toString(),honeyFeeIndexIncrement: this.honeyFeeIndexIncrement.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FeesClaimedForEmissions { return FeesClaimedForEmissions.reified( ).new( { isAdded: decodeFromJSONField("bool", field.isAdded), hiveFeeClaimed: decodeFromJSONField("u64", field.hiveFeeClaimed), honeyFeeClaimed: decodeFromJSONField("u64", field.honeyFeeClaimed), cycle: decodeFromJSONField("u64", field.cycle), hiveFeeIndexIncrement: decodeFromJSONField("u256", field.hiveFeeIndexIncrement), honeyFeeIndexIncrement: decodeFromJSONField("u256", field.honeyFeeIndexIncrement) } ) }

 static fromJSON( json: Record<string, any> ): FeesClaimedForEmissions { if (json.$typeName !== FeesClaimedForEmissions.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FeesClaimedForEmissions.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FeesClaimedForEmissions { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeesClaimedForEmissions(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeesClaimedForEmissions object`); } return FeesClaimedForEmissions.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FeesClaimedForEmissions { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFeesClaimedForEmissions(data.bcs.type)) { throw new Error(`object at is not a FeesClaimedForEmissions object`); }

 return FeesClaimedForEmissions.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FeesClaimedForEmissions.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FeesClaimedForEmissions> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeesClaimedForEmissions object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeesClaimedForEmissions(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeesClaimedForEmissions object`); }

 return FeesClaimedForEmissions.fromSuiObjectData( res.data ); }

 }

/* ============================== FoodCycleUpdatedForPoolHive =============================== */

export function isFoodCycleUpdatedForPoolHive(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::FoodCycleUpdatedForPoolHive`; }

export interface FoodCycleUpdatedForPoolHiveFields { poolHiveAddr: ToField<"address">; curCycle: ToField<"u64">; curCycleStartEpoch: ToField<"u64">; curTotalHiveEnergy: ToField<"u128">; curTotalHoneyHealth: ToField<"u128"> }

export type FoodCycleUpdatedForPoolHiveReified = Reified< FoodCycleUpdatedForPoolHive, FoodCycleUpdatedForPoolHiveFields >;

export class FoodCycleUpdatedForPoolHive implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::FoodCycleUpdatedForPoolHive`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FoodCycleUpdatedForPoolHive.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::FoodCycleUpdatedForPoolHive`; readonly $typeArgs: []; readonly $isPhantom = FoodCycleUpdatedForPoolHive.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly curCycle: ToField<"u64">; readonly curCycleStartEpoch: ToField<"u64">; readonly curTotalHiveEnergy: ToField<"u128">; readonly curTotalHoneyHealth: ToField<"u128">

 private constructor(typeArgs: [], fields: FoodCycleUpdatedForPoolHiveFields, ) { this.$fullTypeName = composeSuiType( FoodCycleUpdatedForPoolHive.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::FoodCycleUpdatedForPoolHive`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.curCycle = fields.curCycle;; this.curCycleStartEpoch = fields.curCycleStartEpoch;; this.curTotalHiveEnergy = fields.curTotalHiveEnergy;; this.curTotalHoneyHealth = fields.curTotalHoneyHealth; }

 static reified( ): FoodCycleUpdatedForPoolHiveReified { return { typeName: FoodCycleUpdatedForPoolHive.$typeName, fullTypeName: composeSuiType( FoodCycleUpdatedForPoolHive.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::FoodCycleUpdatedForPoolHive`, typeArgs: [ ] as [], isPhantom: FoodCycleUpdatedForPoolHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FoodCycleUpdatedForPoolHive.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FoodCycleUpdatedForPoolHive.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FoodCycleUpdatedForPoolHive.fromBcs( data, ), bcs: FoodCycleUpdatedForPoolHive.bcs, fromJSONField: (field: any) => FoodCycleUpdatedForPoolHive.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FoodCycleUpdatedForPoolHive.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FoodCycleUpdatedForPoolHive.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FoodCycleUpdatedForPoolHive.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FoodCycleUpdatedForPoolHive.fetch( client, id, ), new: ( fields: FoodCycleUpdatedForPoolHiveFields, ) => { return new FoodCycleUpdatedForPoolHive( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FoodCycleUpdatedForPoolHive.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FoodCycleUpdatedForPoolHive>> { return phantom(FoodCycleUpdatedForPoolHive.reified( )); } static get p() { return FoodCycleUpdatedForPoolHive.phantom() }

 static get bcs() { return bcs.struct("FoodCycleUpdatedForPoolHive", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), cur_cycle: bcs.u64(), cur_cycle_start_epoch: bcs.u64(), cur_total_hive_energy: bcs.u128(), cur_total_honey_health: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): FoodCycleUpdatedForPoolHive { return FoodCycleUpdatedForPoolHive.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), curCycle: decodeFromFields("u64", fields.cur_cycle), curCycleStartEpoch: decodeFromFields("u64", fields.cur_cycle_start_epoch), curTotalHiveEnergy: decodeFromFields("u128", fields.cur_total_hive_energy), curTotalHoneyHealth: decodeFromFields("u128", fields.cur_total_honey_health) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FoodCycleUpdatedForPoolHive { if (!isFoodCycleUpdatedForPoolHive(item.type)) { throw new Error("not a FoodCycleUpdatedForPoolHive type");

 }

 return FoodCycleUpdatedForPoolHive.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), curCycle: decodeFromFieldsWithTypes("u64", item.fields.cur_cycle), curCycleStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_cycle_start_epoch), curTotalHiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.cur_total_hive_energy), curTotalHoneyHealth: decodeFromFieldsWithTypes("u128", item.fields.cur_total_honey_health) } ) }

 static fromBcs( data: Uint8Array ): FoodCycleUpdatedForPoolHive { return FoodCycleUpdatedForPoolHive.fromFields( FoodCycleUpdatedForPoolHive.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,curCycle: this.curCycle.toString(),curCycleStartEpoch: this.curCycleStartEpoch.toString(),curTotalHiveEnergy: this.curTotalHiveEnergy.toString(),curTotalHoneyHealth: this.curTotalHoneyHealth.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FoodCycleUpdatedForPoolHive { return FoodCycleUpdatedForPoolHive.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), curCycle: decodeFromJSONField("u64", field.curCycle), curCycleStartEpoch: decodeFromJSONField("u64", field.curCycleStartEpoch), curTotalHiveEnergy: decodeFromJSONField("u128", field.curTotalHiveEnergy), curTotalHoneyHealth: decodeFromJSONField("u128", field.curTotalHoneyHealth) } ) }

 static fromJSON( json: Record<string, any> ): FoodCycleUpdatedForPoolHive { if (json.$typeName !== FoodCycleUpdatedForPoolHive.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FoodCycleUpdatedForPoolHive.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FoodCycleUpdatedForPoolHive { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFoodCycleUpdatedForPoolHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FoodCycleUpdatedForPoolHive object`); } return FoodCycleUpdatedForPoolHive.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FoodCycleUpdatedForPoolHive { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFoodCycleUpdatedForPoolHive(data.bcs.type)) { throw new Error(`object at is not a FoodCycleUpdatedForPoolHive object`); }

 return FoodCycleUpdatedForPoolHive.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FoodCycleUpdatedForPoolHive.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FoodCycleUpdatedForPoolHive> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FoodCycleUpdatedForPoolHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFoodCycleUpdatedForPoolHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FoodCycleUpdatedForPoolHive object`); }

 return FoodCycleUpdatedForPoolHive.fromSuiObjectData( res.data ); }

 }

/* ============================== FruitLife =============================== */

export function isFruitLife(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::FruitLife`; }

export interface FruitLifeFields { fruitTypename: ToField<TypeName>; startEpoch: ToField<"u64">; endEpoch: ToField<"u64"> }

export type FruitLifeReified = Reified< FruitLife, FruitLifeFields >;

export class FruitLife implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::FruitLife`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FruitLife.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::FruitLife`; readonly $typeArgs: []; readonly $isPhantom = FruitLife.$isPhantom;

 readonly fruitTypename: ToField<TypeName>; readonly startEpoch: ToField<"u64">; readonly endEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: FruitLifeFields, ) { this.$fullTypeName = composeSuiType( FruitLife.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::FruitLife`; this.$typeArgs = typeArgs;

 this.fruitTypename = fields.fruitTypename;; this.startEpoch = fields.startEpoch;; this.endEpoch = fields.endEpoch; }

 static reified( ): FruitLifeReified { return { typeName: FruitLife.$typeName, fullTypeName: composeSuiType( FruitLife.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::FruitLife`, typeArgs: [ ] as [], isPhantom: FruitLife.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FruitLife.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FruitLife.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FruitLife.fromBcs( data, ), bcs: FruitLife.bcs, fromJSONField: (field: any) => FruitLife.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FruitLife.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FruitLife.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FruitLife.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FruitLife.fetch( client, id, ), new: ( fields: FruitLifeFields, ) => { return new FruitLife( [], fields ) }, kind: "StructClassReified", } }

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

 static fromSuiObjectData( data: SuiObjectData ): FruitLife { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFruitLife(data.bcs.type)) { throw new Error(`object at is not a FruitLife object`); }

 return FruitLife.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FruitLife.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FruitLife> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FruitLife object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFruitLife(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FruitLife object`); }

 return FruitLife.fromSuiObjectData( res.data ); }

 }

/* ============================== HivePerEpochUpdated =============================== */

export function isHivePerEpochUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::HivePerEpochUpdated`; }

export interface HivePerEpochUpdatedFields { hivePerEpoch: ToField<"u64">; startEpoch: ToField<"u64">; honeyPerEpoch: ToField<"u64"> }

export type HivePerEpochUpdatedReified = Reified< HivePerEpochUpdated, HivePerEpochUpdatedFields >;

export class HivePerEpochUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::HivePerEpochUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HivePerEpochUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::HivePerEpochUpdated`; readonly $typeArgs: []; readonly $isPhantom = HivePerEpochUpdated.$isPhantom;

 readonly hivePerEpoch: ToField<"u64">; readonly startEpoch: ToField<"u64">; readonly honeyPerEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: HivePerEpochUpdatedFields, ) { this.$fullTypeName = composeSuiType( HivePerEpochUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::HivePerEpochUpdated`; this.$typeArgs = typeArgs;

 this.hivePerEpoch = fields.hivePerEpoch;; this.startEpoch = fields.startEpoch;; this.honeyPerEpoch = fields.honeyPerEpoch; }

 static reified( ): HivePerEpochUpdatedReified { return { typeName: HivePerEpochUpdated.$typeName, fullTypeName: composeSuiType( HivePerEpochUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::HivePerEpochUpdated`, typeArgs: [ ] as [], isPhantom: HivePerEpochUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HivePerEpochUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HivePerEpochUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HivePerEpochUpdated.fromBcs( data, ), bcs: HivePerEpochUpdated.bcs, fromJSONField: (field: any) => HivePerEpochUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HivePerEpochUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HivePerEpochUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HivePerEpochUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HivePerEpochUpdated.fetch( client, id, ), new: ( fields: HivePerEpochUpdatedFields, ) => { return new HivePerEpochUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HivePerEpochUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HivePerEpochUpdated>> { return phantom(HivePerEpochUpdated.reified( )); } static get p() { return HivePerEpochUpdated.phantom() }

 static get bcs() { return bcs.struct("HivePerEpochUpdated", {

 hive_per_epoch: bcs.u64(), start_epoch: bcs.u64(), honey_per_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HivePerEpochUpdated { return HivePerEpochUpdated.reified( ).new( { hivePerEpoch: decodeFromFields("u64", fields.hive_per_epoch), startEpoch: decodeFromFields("u64", fields.start_epoch), honeyPerEpoch: decodeFromFields("u64", fields.honey_per_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HivePerEpochUpdated { if (!isHivePerEpochUpdated(item.type)) { throw new Error("not a HivePerEpochUpdated type");

 }

 return HivePerEpochUpdated.reified( ).new( { hivePerEpoch: decodeFromFieldsWithTypes("u64", item.fields.hive_per_epoch), startEpoch: decodeFromFieldsWithTypes("u64", item.fields.start_epoch), honeyPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.honey_per_epoch) } ) }

 static fromBcs( data: Uint8Array ): HivePerEpochUpdated { return HivePerEpochUpdated.fromFields( HivePerEpochUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 hivePerEpoch: this.hivePerEpoch.toString(),startEpoch: this.startEpoch.toString(),honeyPerEpoch: this.honeyPerEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HivePerEpochUpdated { return HivePerEpochUpdated.reified( ).new( { hivePerEpoch: decodeFromJSONField("u64", field.hivePerEpoch), startEpoch: decodeFromJSONField("u64", field.startEpoch), honeyPerEpoch: decodeFromJSONField("u64", field.honeyPerEpoch) } ) }

 static fromJSON( json: Record<string, any> ): HivePerEpochUpdated { if (json.$typeName !== HivePerEpochUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HivePerEpochUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HivePerEpochUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHivePerEpochUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HivePerEpochUpdated object`); } return HivePerEpochUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HivePerEpochUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHivePerEpochUpdated(data.bcs.type)) { throw new Error(`object at is not a HivePerEpochUpdated object`); }

 return HivePerEpochUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HivePerEpochUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HivePerEpochUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HivePerEpochUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHivePerEpochUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HivePerEpochUpdated object`); }

 return HivePerEpochUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== HoneyFruit =============================== */

export function isHoneyFruit(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::dragon_food::HoneyFruit` + '<'); }

export interface HoneyFruitFields<X extends PhantomTypeArgument> { id: ToField<UID>; availableFruits: ToField<Balance<X>>; fruitsPerEpoch: ToField<"u64">; startEpoch: ToField<"u64">; endEpoch: ToField<"u64">; claimIndex: ToField<"u256">; lastClaimEpoch: ToField<"u64">; moduleVersion: ToField<"u64"> }

export type HoneyFruitReified<X extends PhantomTypeArgument> = Reified< HoneyFruit<X>, HoneyFruitFields<X> >;

export class HoneyFruit<X extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::HoneyFruit`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = HoneyFruit.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::HoneyFruit<${PhantomToTypeStr<X>}>`; readonly $typeArgs: [PhantomToTypeStr<X>]; readonly $isPhantom = HoneyFruit.$isPhantom;

 readonly id: ToField<UID>; readonly availableFruits: ToField<Balance<X>>; readonly fruitsPerEpoch: ToField<"u64">; readonly startEpoch: ToField<"u64">; readonly endEpoch: ToField<"u64">; readonly claimIndex: ToField<"u256">; readonly lastClaimEpoch: ToField<"u64">; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: HoneyFruitFields<X>, ) { this.$fullTypeName = composeSuiType( HoneyFruit.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::HoneyFruit<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.availableFruits = fields.availableFruits;; this.fruitsPerEpoch = fields.fruitsPerEpoch;; this.startEpoch = fields.startEpoch;; this.endEpoch = fields.endEpoch;; this.claimIndex = fields.claimIndex;; this.lastClaimEpoch = fields.lastClaimEpoch;; this.moduleVersion = fields.moduleVersion; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): HoneyFruitReified<ToPhantomTypeArgument<X>> { return { typeName: HoneyFruit.$typeName, fullTypeName: composeSuiType( HoneyFruit.$typeName, ...[extractType(X)] ) as `${typeof PKG_V1}::dragon_food::HoneyFruit<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], isPhantom: HoneyFruit.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => HoneyFruit.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyFruit.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => HoneyFruit.fromBcs( X, data, ), bcs: HoneyFruit.bcs, fromJSONField: (field: any) => HoneyFruit.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => HoneyFruit.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => HoneyFruit.fromSuiParsedData( X, content, ), fromSuiObjectData: (content: SuiObjectData) => HoneyFruit.fromSuiObjectData( X, content, ), fetch: async (client: SuiClient, id: string) => HoneyFruit.fetch( client, X, id, ), new: ( fields: HoneyFruitFields<ToPhantomTypeArgument<X>>, ) => { return new HoneyFruit( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return HoneyFruit.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<HoneyFruit<ToPhantomTypeArgument<X>>>> { return phantom(HoneyFruit.reified( X )); } static get p() { return HoneyFruit.phantom }

 static get bcs() { return bcs.struct("HoneyFruit", {

 id: UID.bcs, available_fruits: Balance.bcs, fruits_per_epoch: bcs.u64(), start_epoch: bcs.u64(), end_epoch: bcs.u64(), claim_index: bcs.u256(), last_claim_epoch: bcs.u64(), module_version: bcs.u64()

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): HoneyFruit<ToPhantomTypeArgument<X>> { return HoneyFruit.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), availableFruits: decodeFromFields(Balance.reified(typeArg), fields.available_fruits), fruitsPerEpoch: decodeFromFields("u64", fields.fruits_per_epoch), startEpoch: decodeFromFields("u64", fields.start_epoch), endEpoch: decodeFromFields("u64", fields.end_epoch), claimIndex: decodeFromFields("u256", fields.claim_index), lastClaimEpoch: decodeFromFields("u64", fields.last_claim_epoch), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): HoneyFruit<ToPhantomTypeArgument<X>> { if (!isHoneyFruit(item.type)) { throw new Error("not a HoneyFruit type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return HoneyFruit.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), availableFruits: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.available_fruits), fruitsPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.fruits_per_epoch), startEpoch: decodeFromFieldsWithTypes("u64", item.fields.start_epoch), endEpoch: decodeFromFieldsWithTypes("u64", item.fields.end_epoch), claimIndex: decodeFromFieldsWithTypes("u256", item.fields.claim_index), lastClaimEpoch: decodeFromFieldsWithTypes("u64", item.fields.last_claim_epoch), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): HoneyFruit<ToPhantomTypeArgument<X>> { return HoneyFruit.fromFields( typeArg, HoneyFruit.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,availableFruits: this.availableFruits.toJSONField(),fruitsPerEpoch: this.fruitsPerEpoch.toString(),startEpoch: this.startEpoch.toString(),endEpoch: this.endEpoch.toString(),claimIndex: this.claimIndex.toString(),lastClaimEpoch: this.lastClaimEpoch.toString(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): HoneyFruit<ToPhantomTypeArgument<X>> { return HoneyFruit.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), availableFruits: decodeFromJSONField(Balance.reified(typeArg), field.availableFruits), fruitsPerEpoch: decodeFromJSONField("u64", field.fruitsPerEpoch), startEpoch: decodeFromJSONField("u64", field.startEpoch), endEpoch: decodeFromJSONField("u64", field.endEpoch), claimIndex: decodeFromJSONField("u256", field.claimIndex), lastClaimEpoch: decodeFromJSONField("u64", field.lastClaimEpoch), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): HoneyFruit<ToPhantomTypeArgument<X>> { if (json.$typeName !== HoneyFruit.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(HoneyFruit.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return HoneyFruit.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): HoneyFruit<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyFruit(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyFruit object`); } return HoneyFruit.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: SuiObjectData ): HoneyFruit<ToPhantomTypeArgument<X>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHoneyFruit(data.bcs.type)) { throw new Error(`object at is not a HoneyFruit object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return HoneyFruit.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HoneyFruit.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<HoneyFruit<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyFruit object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyFruit(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyFruit object`); }

 return HoneyFruit.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== HoneyFruitDestroyed =============================== */

export function isHoneyFruitDestroyed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::HoneyFruitDestroyed`; }

export interface HoneyFruitDestroyedFields { poolHiveAddr: ToField<"address">; honeyFruitType: ToField<String1>; curEpoch: ToField<"u64"> }

export type HoneyFruitDestroyedReified = Reified< HoneyFruitDestroyed, HoneyFruitDestroyedFields >;

export class HoneyFruitDestroyed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::HoneyFruitDestroyed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HoneyFruitDestroyed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::HoneyFruitDestroyed`; readonly $typeArgs: []; readonly $isPhantom = HoneyFruitDestroyed.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly honeyFruitType: ToField<String1>; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: HoneyFruitDestroyedFields, ) { this.$fullTypeName = composeSuiType( HoneyFruitDestroyed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::HoneyFruitDestroyed`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.honeyFruitType = fields.honeyFruitType;; this.curEpoch = fields.curEpoch; }

 static reified( ): HoneyFruitDestroyedReified { return { typeName: HoneyFruitDestroyed.$typeName, fullTypeName: composeSuiType( HoneyFruitDestroyed.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::HoneyFruitDestroyed`, typeArgs: [ ] as [], isPhantom: HoneyFruitDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HoneyFruitDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyFruitDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HoneyFruitDestroyed.fromBcs( data, ), bcs: HoneyFruitDestroyed.bcs, fromJSONField: (field: any) => HoneyFruitDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HoneyFruitDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HoneyFruitDestroyed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HoneyFruitDestroyed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HoneyFruitDestroyed.fetch( client, id, ), new: ( fields: HoneyFruitDestroyedFields, ) => { return new HoneyFruitDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HoneyFruitDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HoneyFruitDestroyed>> { return phantom(HoneyFruitDestroyed.reified( )); } static get p() { return HoneyFruitDestroyed.phantom() }

 static get bcs() { return bcs.struct("HoneyFruitDestroyed", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), honey_fruit_type: String1.bcs, cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): HoneyFruitDestroyed { return HoneyFruitDestroyed.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), honeyFruitType: decodeFromFields(String1.reified(), fields.honey_fruit_type), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HoneyFruitDestroyed { if (!isHoneyFruitDestroyed(item.type)) { throw new Error("not a HoneyFruitDestroyed type");

 }

 return HoneyFruitDestroyed.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), honeyFruitType: decodeFromFieldsWithTypes(String1.reified(), item.fields.honey_fruit_type), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): HoneyFruitDestroyed { return HoneyFruitDestroyed.fromFields( HoneyFruitDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,honeyFruitType: this.honeyFruitType,curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HoneyFruitDestroyed { return HoneyFruitDestroyed.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), honeyFruitType: decodeFromJSONField(String1.reified(), field.honeyFruitType), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): HoneyFruitDestroyed { if (json.$typeName !== HoneyFruitDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HoneyFruitDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HoneyFruitDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyFruitDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyFruitDestroyed object`); } return HoneyFruitDestroyed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HoneyFruitDestroyed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHoneyFruitDestroyed(data.bcs.type)) { throw new Error(`object at is not a HoneyFruitDestroyed object`); }

 return HoneyFruitDestroyed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HoneyFruitDestroyed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HoneyFruitDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyFruitDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyFruitDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyFruitDestroyed object`); }

 return HoneyFruitDestroyed.fromSuiObjectData( res.data ); }

 }

/* ============================== HoneyFruitKraftedForPoolHive =============================== */

export function isHoneyFruitKraftedForPoolHive(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::HoneyFruitKraftedForPoolHive`; }

export interface HoneyFruitKraftedForPoolHiveFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; honeyFruitIdentifier: ToField<TypeName> }

export type HoneyFruitKraftedForPoolHiveReified = Reified< HoneyFruitKraftedForPoolHive, HoneyFruitKraftedForPoolHiveFields >;

export class HoneyFruitKraftedForPoolHive implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::HoneyFruitKraftedForPoolHive`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HoneyFruitKraftedForPoolHive.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::HoneyFruitKraftedForPoolHive`; readonly $typeArgs: []; readonly $isPhantom = HoneyFruitKraftedForPoolHive.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly honeyFruitIdentifier: ToField<TypeName>

 private constructor(typeArgs: [], fields: HoneyFruitKraftedForPoolHiveFields, ) { this.$fullTypeName = composeSuiType( HoneyFruitKraftedForPoolHive.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::HoneyFruitKraftedForPoolHive`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.honeyFruitIdentifier = fields.honeyFruitIdentifier; }

 static reified( ): HoneyFruitKraftedForPoolHiveReified { return { typeName: HoneyFruitKraftedForPoolHive.$typeName, fullTypeName: composeSuiType( HoneyFruitKraftedForPoolHive.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::HoneyFruitKraftedForPoolHive`, typeArgs: [ ] as [], isPhantom: HoneyFruitKraftedForPoolHive.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HoneyFruitKraftedForPoolHive.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HoneyFruitKraftedForPoolHive.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HoneyFruitKraftedForPoolHive.fromBcs( data, ), bcs: HoneyFruitKraftedForPoolHive.bcs, fromJSONField: (field: any) => HoneyFruitKraftedForPoolHive.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HoneyFruitKraftedForPoolHive.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HoneyFruitKraftedForPoolHive.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HoneyFruitKraftedForPoolHive.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HoneyFruitKraftedForPoolHive.fetch( client, id, ), new: ( fields: HoneyFruitKraftedForPoolHiveFields, ) => { return new HoneyFruitKraftedForPoolHive( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HoneyFruitKraftedForPoolHive.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HoneyFruitKraftedForPoolHive>> { return phantom(HoneyFruitKraftedForPoolHive.reified( )); } static get p() { return HoneyFruitKraftedForPoolHive.phantom() }

 static get bcs() { return bcs.struct("HoneyFruitKraftedForPoolHive", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), proposal_id: bcs.u64(), honey_fruit_identifier: TypeName.bcs

}) };

 static fromFields( fields: Record<string, any> ): HoneyFruitKraftedForPoolHive { return HoneyFruitKraftedForPoolHive.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), proposalId: decodeFromFields("u64", fields.proposal_id), honeyFruitIdentifier: decodeFromFields(TypeName.reified(), fields.honey_fruit_identifier) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HoneyFruitKraftedForPoolHive { if (!isHoneyFruitKraftedForPoolHive(item.type)) { throw new Error("not a HoneyFruitKraftedForPoolHive type");

 }

 return HoneyFruitKraftedForPoolHive.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), proposalId: decodeFromFieldsWithTypes("u64", item.fields.proposal_id), honeyFruitIdentifier: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.honey_fruit_identifier) } ) }

 static fromBcs( data: Uint8Array ): HoneyFruitKraftedForPoolHive { return HoneyFruitKraftedForPoolHive.fromFields( HoneyFruitKraftedForPoolHive.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,proposalId: this.proposalId.toString(),honeyFruitIdentifier: this.honeyFruitIdentifier.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HoneyFruitKraftedForPoolHive { return HoneyFruitKraftedForPoolHive.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), proposalId: decodeFromJSONField("u64", field.proposalId), honeyFruitIdentifier: decodeFromJSONField(TypeName.reified(), field.honeyFruitIdentifier) } ) }

 static fromJSON( json: Record<string, any> ): HoneyFruitKraftedForPoolHive { if (json.$typeName !== HoneyFruitKraftedForPoolHive.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HoneyFruitKraftedForPoolHive.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HoneyFruitKraftedForPoolHive { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHoneyFruitKraftedForPoolHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HoneyFruitKraftedForPoolHive object`); } return HoneyFruitKraftedForPoolHive.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HoneyFruitKraftedForPoolHive { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHoneyFruitKraftedForPoolHive(data.bcs.type)) { throw new Error(`object at is not a HoneyFruitKraftedForPoolHive object`); }

 return HoneyFruitKraftedForPoolHive.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HoneyFruitKraftedForPoolHive.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HoneyFruitKraftedForPoolHive> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HoneyFruitKraftedForPoolHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHoneyFruitKraftedForPoolHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HoneyFruitKraftedForPoolHive object`); }

 return HoneyFruitKraftedForPoolHive.fromSuiObjectData( res.data ); }

 }

/* ============================== LendingPoolCapability =============================== */

export function isLendingPoolCapability(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::LendingPoolCapability`; }

export interface LendingPoolCapabilityFields { id: ToField<UID> }

export type LendingPoolCapabilityReified = Reified< LendingPoolCapability, LendingPoolCapabilityFields >;

export class LendingPoolCapability implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::LendingPoolCapability`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = LendingPoolCapability.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::LendingPoolCapability`; readonly $typeArgs: []; readonly $isPhantom = LendingPoolCapability.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: LendingPoolCapabilityFields, ) { this.$fullTypeName = composeSuiType( LendingPoolCapability.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::LendingPoolCapability`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): LendingPoolCapabilityReified { return { typeName: LendingPoolCapability.$typeName, fullTypeName: composeSuiType( LendingPoolCapability.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::LendingPoolCapability`, typeArgs: [ ] as [], isPhantom: LendingPoolCapability.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LendingPoolCapability.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LendingPoolCapability.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LendingPoolCapability.fromBcs( data, ), bcs: LendingPoolCapability.bcs, fromJSONField: (field: any) => LendingPoolCapability.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LendingPoolCapability.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LendingPoolCapability.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => LendingPoolCapability.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => LendingPoolCapability.fetch( client, id, ), new: ( fields: LendingPoolCapabilityFields, ) => { return new LendingPoolCapability( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LendingPoolCapability.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LendingPoolCapability>> { return phantom(LendingPoolCapability.reified( )); } static get p() { return LendingPoolCapability.phantom() }

 static get bcs() { return bcs.struct("LendingPoolCapability", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): LendingPoolCapability { return LendingPoolCapability.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LendingPoolCapability { if (!isLendingPoolCapability(item.type)) { throw new Error("not a LendingPoolCapability type");

 }

 return LendingPoolCapability.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): LendingPoolCapability { return LendingPoolCapability.fromFields( LendingPoolCapability.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LendingPoolCapability { return LendingPoolCapability.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): LendingPoolCapability { if (json.$typeName !== LendingPoolCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LendingPoolCapability.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LendingPoolCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLendingPoolCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LendingPoolCapability object`); } return LendingPoolCapability.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): LendingPoolCapability { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isLendingPoolCapability(data.bcs.type)) { throw new Error(`object at is not a LendingPoolCapability object`); }

 return LendingPoolCapability.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return LendingPoolCapability.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<LendingPoolCapability> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LendingPoolCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLendingPoolCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LendingPoolCapability object`); }

 return LendingPoolCapability.fromSuiObjectData( res.data ); }

 }

/* ============================== LiquidatedLP =============================== */

export function isLiquidatedLP(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::LiquidatedLP`; }

export interface LiquidatedLPFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address">; amtLiquidated: ToField<"u64"> }

export type LiquidatedLPReified = Reified< LiquidatedLP, LiquidatedLPFields >;

export class LiquidatedLP implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::LiquidatedLP`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = LiquidatedLP.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::LiquidatedLP`; readonly $typeArgs: []; readonly $isPhantom = LiquidatedLP.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">; readonly amtLiquidated: ToField<"u64">

 private constructor(typeArgs: [], fields: LiquidatedLPFields, ) { this.$fullTypeName = composeSuiType( LiquidatedLP.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::LiquidatedLP`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr;; this.amtLiquidated = fields.amtLiquidated; }

 static reified( ): LiquidatedLPReified { return { typeName: LiquidatedLP.$typeName, fullTypeName: composeSuiType( LiquidatedLP.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::LiquidatedLP`, typeArgs: [ ] as [], isPhantom: LiquidatedLP.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LiquidatedLP.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidatedLP.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LiquidatedLP.fromBcs( data, ), bcs: LiquidatedLP.bcs, fromJSONField: (field: any) => LiquidatedLP.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LiquidatedLP.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LiquidatedLP.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => LiquidatedLP.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => LiquidatedLP.fetch( client, id, ), new: ( fields: LiquidatedLPFields, ) => { return new LiquidatedLP( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LiquidatedLP.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LiquidatedLP>> { return phantom(LiquidatedLP.reified( )); } static get p() { return LiquidatedLP.phantom() }

 static get bcs() { return bcs.struct("LiquidatedLP", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), amt_liquidated: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): LiquidatedLP { return LiquidatedLP.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr), amtLiquidated: decodeFromFields("u64", fields.amt_liquidated) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LiquidatedLP { if (!isLiquidatedLP(item.type)) { throw new Error("not a LiquidatedLP type");

 }

 return LiquidatedLP.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), amtLiquidated: decodeFromFieldsWithTypes("u64", item.fields.amt_liquidated) } ) }

 static fromBcs( data: Uint8Array ): LiquidatedLP { return LiquidatedLP.fromFields( LiquidatedLP.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,amtLiquidated: this.amtLiquidated.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LiquidatedLP { return LiquidatedLP.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr), amtLiquidated: decodeFromJSONField("u64", field.amtLiquidated) } ) }

 static fromJSON( json: Record<string, any> ): LiquidatedLP { if (json.$typeName !== LiquidatedLP.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LiquidatedLP.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LiquidatedLP { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLiquidatedLP(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LiquidatedLP object`); } return LiquidatedLP.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): LiquidatedLP { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isLiquidatedLP(data.bcs.type)) { throw new Error(`object at is not a LiquidatedLP object`); }

 return LiquidatedLP.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return LiquidatedLP.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<LiquidatedLP> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LiquidatedLP object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidatedLP(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LiquidatedLP object`); }

 return LiquidatedLP.fromSuiObjectData( res.data ); }

 }

/* ============================== LockedDragonBee =============================== */

export function isLockedDragonBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::LockedDragonBee`; }

export interface LockedDragonBeeFields { version: ToField<"u64">; lockedAtCycle: ToField<"u64">; mysticalBee: ToField<MysticalBee>; incrementCycle: ToField<"u64">; increaseInEnergy: ToField<"u128">; increaseInHealth: ToField<"u128">; hiveEnergy: ToField<"u128">; tempHiveEnergy: ToField<"u128">; honeyHealth: ToField<"u128">; tempHoneyHealth: ToField<"u128">; daoVoteCycle: ToField<"u64">; bribesClaimedTill: ToField<"u64">; feesClaimedTill: ToField<"u64">; hiveFeeClaimIndexes: ToField<LinkedTable<"u64", "u256">>; honeyFeeClaimIndexes: ToField<LinkedTable<"u64", "u256">>; withdrawableAtCycle: ToField<"u64"> }

export type LockedDragonBeeReified = Reified< LockedDragonBee, LockedDragonBeeFields >;

export class LockedDragonBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::LockedDragonBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = LockedDragonBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::LockedDragonBee`; readonly $typeArgs: []; readonly $isPhantom = LockedDragonBee.$isPhantom;

 readonly version: ToField<"u64">; readonly lockedAtCycle: ToField<"u64">; readonly mysticalBee: ToField<MysticalBee>; readonly incrementCycle: ToField<"u64">; readonly increaseInEnergy: ToField<"u128">; readonly increaseInHealth: ToField<"u128">; readonly hiveEnergy: ToField<"u128">; readonly tempHiveEnergy: ToField<"u128">; readonly honeyHealth: ToField<"u128">; readonly tempHoneyHealth: ToField<"u128">; readonly daoVoteCycle: ToField<"u64">; readonly bribesClaimedTill: ToField<"u64">; readonly feesClaimedTill: ToField<"u64">; readonly hiveFeeClaimIndexes: ToField<LinkedTable<"u64", "u256">>; readonly honeyFeeClaimIndexes: ToField<LinkedTable<"u64", "u256">>; readonly withdrawableAtCycle: ToField<"u64">

 private constructor(typeArgs: [], fields: LockedDragonBeeFields, ) { this.$fullTypeName = composeSuiType( LockedDragonBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::LockedDragonBee`; this.$typeArgs = typeArgs;

 this.version = fields.version;; this.lockedAtCycle = fields.lockedAtCycle;; this.mysticalBee = fields.mysticalBee;; this.incrementCycle = fields.incrementCycle;; this.increaseInEnergy = fields.increaseInEnergy;; this.increaseInHealth = fields.increaseInHealth;; this.hiveEnergy = fields.hiveEnergy;; this.tempHiveEnergy = fields.tempHiveEnergy;; this.honeyHealth = fields.honeyHealth;; this.tempHoneyHealth = fields.tempHoneyHealth;; this.daoVoteCycle = fields.daoVoteCycle;; this.bribesClaimedTill = fields.bribesClaimedTill;; this.feesClaimedTill = fields.feesClaimedTill;; this.hiveFeeClaimIndexes = fields.hiveFeeClaimIndexes;; this.honeyFeeClaimIndexes = fields.honeyFeeClaimIndexes;; this.withdrawableAtCycle = fields.withdrawableAtCycle; }

 static reified( ): LockedDragonBeeReified { return { typeName: LockedDragonBee.$typeName, fullTypeName: composeSuiType( LockedDragonBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::LockedDragonBee`, typeArgs: [ ] as [], isPhantom: LockedDragonBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LockedDragonBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LockedDragonBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LockedDragonBee.fromBcs( data, ), bcs: LockedDragonBee.bcs, fromJSONField: (field: any) => LockedDragonBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LockedDragonBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LockedDragonBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => LockedDragonBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => LockedDragonBee.fetch( client, id, ), new: ( fields: LockedDragonBeeFields, ) => { return new LockedDragonBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LockedDragonBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LockedDragonBee>> { return phantom(LockedDragonBee.reified( )); } static get p() { return LockedDragonBee.phantom() }

 static get bcs() { return bcs.struct("LockedDragonBee", {

 version: bcs.u64(), locked_at_cycle: bcs.u64(), mystical_bee: MysticalBee.bcs, increment_cycle: bcs.u64(), increase_in_energy: bcs.u128(), increase_in_health: bcs.u128(), hive_energy: bcs.u128(), temp_hive_energy: bcs.u128(), honey_health: bcs.u128(), temp_honey_health: bcs.u128(), dao_vote_cycle: bcs.u64(), bribes_claimed_till: bcs.u64(), fees_claimed_till: bcs.u64(), hive_fee_claim_indexes: LinkedTable.bcs(bcs.u64()), honey_fee_claim_indexes: LinkedTable.bcs(bcs.u64()), withdrawable_at_cycle: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): LockedDragonBee { return LockedDragonBee.reified( ).new( { version: decodeFromFields("u64", fields.version), lockedAtCycle: decodeFromFields("u64", fields.locked_at_cycle), mysticalBee: decodeFromFields(MysticalBee.reified(), fields.mystical_bee), incrementCycle: decodeFromFields("u64", fields.increment_cycle), increaseInEnergy: decodeFromFields("u128", fields.increase_in_energy), increaseInHealth: decodeFromFields("u128", fields.increase_in_health), hiveEnergy: decodeFromFields("u128", fields.hive_energy), tempHiveEnergy: decodeFromFields("u128", fields.temp_hive_energy), honeyHealth: decodeFromFields("u128", fields.honey_health), tempHoneyHealth: decodeFromFields("u128", fields.temp_honey_health), daoVoteCycle: decodeFromFields("u64", fields.dao_vote_cycle), bribesClaimedTill: decodeFromFields("u64", fields.bribes_claimed_till), feesClaimedTill: decodeFromFields("u64", fields.fees_claimed_till), hiveFeeClaimIndexes: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u256")), fields.hive_fee_claim_indexes), honeyFeeClaimIndexes: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u256")), fields.honey_fee_claim_indexes), withdrawableAtCycle: decodeFromFields("u64", fields.withdrawable_at_cycle) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LockedDragonBee { if (!isLockedDragonBee(item.type)) { throw new Error("not a LockedDragonBee type");

 }

 return LockedDragonBee.reified( ).new( { version: decodeFromFieldsWithTypes("u64", item.fields.version), lockedAtCycle: decodeFromFieldsWithTypes("u64", item.fields.locked_at_cycle), mysticalBee: decodeFromFieldsWithTypes(MysticalBee.reified(), item.fields.mystical_bee), incrementCycle: decodeFromFieldsWithTypes("u64", item.fields.increment_cycle), increaseInEnergy: decodeFromFieldsWithTypes("u128", item.fields.increase_in_energy), increaseInHealth: decodeFromFieldsWithTypes("u128", item.fields.increase_in_health), hiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.hive_energy), tempHiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.temp_hive_energy), honeyHealth: decodeFromFieldsWithTypes("u128", item.fields.honey_health), tempHoneyHealth: decodeFromFieldsWithTypes("u128", item.fields.temp_honey_health), daoVoteCycle: decodeFromFieldsWithTypes("u64", item.fields.dao_vote_cycle), bribesClaimedTill: decodeFromFieldsWithTypes("u64", item.fields.bribes_claimed_till), feesClaimedTill: decodeFromFieldsWithTypes("u64", item.fields.fees_claimed_till), hiveFeeClaimIndexes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u256")), item.fields.hive_fee_claim_indexes), honeyFeeClaimIndexes: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u256")), item.fields.honey_fee_claim_indexes), withdrawableAtCycle: decodeFromFieldsWithTypes("u64", item.fields.withdrawable_at_cycle) } ) }

 static fromBcs( data: Uint8Array ): LockedDragonBee { return LockedDragonBee.fromFields( LockedDragonBee.bcs.parse(data) ) }

 toJSONField() { return {

 version: this.version.toString(),lockedAtCycle: this.lockedAtCycle.toString(),mysticalBee: this.mysticalBee.toJSONField(),incrementCycle: this.incrementCycle.toString(),increaseInEnergy: this.increaseInEnergy.toString(),increaseInHealth: this.increaseInHealth.toString(),hiveEnergy: this.hiveEnergy.toString(),tempHiveEnergy: this.tempHiveEnergy.toString(),honeyHealth: this.honeyHealth.toString(),tempHoneyHealth: this.tempHoneyHealth.toString(),daoVoteCycle: this.daoVoteCycle.toString(),bribesClaimedTill: this.bribesClaimedTill.toString(),feesClaimedTill: this.feesClaimedTill.toString(),hiveFeeClaimIndexes: this.hiveFeeClaimIndexes.toJSONField(),honeyFeeClaimIndexes: this.honeyFeeClaimIndexes.toJSONField(),withdrawableAtCycle: this.withdrawableAtCycle.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LockedDragonBee { return LockedDragonBee.reified( ).new( { version: decodeFromJSONField("u64", field.version), lockedAtCycle: decodeFromJSONField("u64", field.lockedAtCycle), mysticalBee: decodeFromJSONField(MysticalBee.reified(), field.mysticalBee), incrementCycle: decodeFromJSONField("u64", field.incrementCycle), increaseInEnergy: decodeFromJSONField("u128", field.increaseInEnergy), increaseInHealth: decodeFromJSONField("u128", field.increaseInHealth), hiveEnergy: decodeFromJSONField("u128", field.hiveEnergy), tempHiveEnergy: decodeFromJSONField("u128", field.tempHiveEnergy), honeyHealth: decodeFromJSONField("u128", field.honeyHealth), tempHoneyHealth: decodeFromJSONField("u128", field.tempHoneyHealth), daoVoteCycle: decodeFromJSONField("u64", field.daoVoteCycle), bribesClaimedTill: decodeFromJSONField("u64", field.bribesClaimedTill), feesClaimedTill: decodeFromJSONField("u64", field.feesClaimedTill), hiveFeeClaimIndexes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u256")), field.hiveFeeClaimIndexes), honeyFeeClaimIndexes: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u256")), field.honeyFeeClaimIndexes), withdrawableAtCycle: decodeFromJSONField("u64", field.withdrawableAtCycle) } ) }

 static fromJSON( json: Record<string, any> ): LockedDragonBee { if (json.$typeName !== LockedDragonBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LockedDragonBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LockedDragonBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLockedDragonBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LockedDragonBee object`); } return LockedDragonBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): LockedDragonBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isLockedDragonBee(data.bcs.type)) { throw new Error(`object at is not a LockedDragonBee object`); }

 return LockedDragonBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return LockedDragonBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<LockedDragonBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LockedDragonBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLockedDragonBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LockedDragonBee object`); }

 return LockedDragonBee.fromSuiObjectData( res.data ); }

 }

/* ============================== LockedLP =============================== */

export function isLockedLP(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::LockedLP`; }

export interface LockedLPFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address"> }

export type LockedLPReified = Reified< LockedLP, LockedLPFields >;

export class LockedLP implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::LockedLP`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = LockedLP.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::LockedLP`; readonly $typeArgs: []; readonly $isPhantom = LockedLP.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">

 private constructor(typeArgs: [], fields: LockedLPFields, ) { this.$fullTypeName = composeSuiType( LockedLP.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::LockedLP`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr; }

 static reified( ): LockedLPReified { return { typeName: LockedLP.$typeName, fullTypeName: composeSuiType( LockedLP.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::LockedLP`, typeArgs: [ ] as [], isPhantom: LockedLP.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LockedLP.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LockedLP.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LockedLP.fromBcs( data, ), bcs: LockedLP.bcs, fromJSONField: (field: any) => LockedLP.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LockedLP.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LockedLP.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => LockedLP.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => LockedLP.fetch( client, id, ), new: ( fields: LockedLPFields, ) => { return new LockedLP( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LockedLP.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LockedLP>> { return phantom(LockedLP.reified( )); } static get p() { return LockedLP.phantom() }

 static get bcs() { return bcs.struct("LockedLP", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): LockedLP { return LockedLP.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LockedLP { if (!isLockedLP(item.type)) { throw new Error("not a LockedLP type");

 }

 return LockedLP.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr) } ) }

 static fromBcs( data: Uint8Array ): LockedLP { return LockedLP.fromFields( LockedLP.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LockedLP { return LockedLP.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr) } ) }

 static fromJSON( json: Record<string, any> ): LockedLP { if (json.$typeName !== LockedLP.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LockedLP.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LockedLP { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLockedLP(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LockedLP object`); } return LockedLP.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): LockedLP { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isLockedLP(data.bcs.type)) { throw new Error(`object at is not a LockedLP object`); }

 return LockedLP.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return LockedLP.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<LockedLP> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LockedLP object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLockedLP(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LockedLP object`); }

 return LockedLP.fromSuiObjectData( res.data ); }

 }

/* ============================== MoreFruitsAdded =============================== */

export function isMoreFruitsAdded(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::MoreFruitsAdded`; }

export interface MoreFruitsAddedFields { poolHiveAddr: ToField<"address">; honeyFruitType: ToField<String1>; fruitsAdded: ToField<"u64">; additionalPerEpoch: ToField<"u64">; fruitsPerEpoch: ToField<"u64">; availableFruits: ToField<"u64"> }

export type MoreFruitsAddedReified = Reified< MoreFruitsAdded, MoreFruitsAddedFields >;

export class MoreFruitsAdded implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::MoreFruitsAdded`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MoreFruitsAdded.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::MoreFruitsAdded`; readonly $typeArgs: []; readonly $isPhantom = MoreFruitsAdded.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly honeyFruitType: ToField<String1>; readonly fruitsAdded: ToField<"u64">; readonly additionalPerEpoch: ToField<"u64">; readonly fruitsPerEpoch: ToField<"u64">; readonly availableFruits: ToField<"u64">

 private constructor(typeArgs: [], fields: MoreFruitsAddedFields, ) { this.$fullTypeName = composeSuiType( MoreFruitsAdded.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::MoreFruitsAdded`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.honeyFruitType = fields.honeyFruitType;; this.fruitsAdded = fields.fruitsAdded;; this.additionalPerEpoch = fields.additionalPerEpoch;; this.fruitsPerEpoch = fields.fruitsPerEpoch;; this.availableFruits = fields.availableFruits; }

 static reified( ): MoreFruitsAddedReified { return { typeName: MoreFruitsAdded.$typeName, fullTypeName: composeSuiType( MoreFruitsAdded.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::MoreFruitsAdded`, typeArgs: [ ] as [], isPhantom: MoreFruitsAdded.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MoreFruitsAdded.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MoreFruitsAdded.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MoreFruitsAdded.fromBcs( data, ), bcs: MoreFruitsAdded.bcs, fromJSONField: (field: any) => MoreFruitsAdded.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MoreFruitsAdded.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MoreFruitsAdded.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MoreFruitsAdded.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MoreFruitsAdded.fetch( client, id, ), new: ( fields: MoreFruitsAddedFields, ) => { return new MoreFruitsAdded( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MoreFruitsAdded.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MoreFruitsAdded>> { return phantom(MoreFruitsAdded.reified( )); } static get p() { return MoreFruitsAdded.phantom() }

 static get bcs() { return bcs.struct("MoreFruitsAdded", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), honey_fruit_type: String1.bcs, fruits_added: bcs.u64(), additional_per_epoch: bcs.u64(), fruits_per_epoch: bcs.u64(), available_fruits: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): MoreFruitsAdded { return MoreFruitsAdded.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), honeyFruitType: decodeFromFields(String1.reified(), fields.honey_fruit_type), fruitsAdded: decodeFromFields("u64", fields.fruits_added), additionalPerEpoch: decodeFromFields("u64", fields.additional_per_epoch), fruitsPerEpoch: decodeFromFields("u64", fields.fruits_per_epoch), availableFruits: decodeFromFields("u64", fields.available_fruits) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MoreFruitsAdded { if (!isMoreFruitsAdded(item.type)) { throw new Error("not a MoreFruitsAdded type");

 }

 return MoreFruitsAdded.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), honeyFruitType: decodeFromFieldsWithTypes(String1.reified(), item.fields.honey_fruit_type), fruitsAdded: decodeFromFieldsWithTypes("u64", item.fields.fruits_added), additionalPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.additional_per_epoch), fruitsPerEpoch: decodeFromFieldsWithTypes("u64", item.fields.fruits_per_epoch), availableFruits: decodeFromFieldsWithTypes("u64", item.fields.available_fruits) } ) }

 static fromBcs( data: Uint8Array ): MoreFruitsAdded { return MoreFruitsAdded.fromFields( MoreFruitsAdded.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,honeyFruitType: this.honeyFruitType,fruitsAdded: this.fruitsAdded.toString(),additionalPerEpoch: this.additionalPerEpoch.toString(),fruitsPerEpoch: this.fruitsPerEpoch.toString(),availableFruits: this.availableFruits.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MoreFruitsAdded { return MoreFruitsAdded.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), honeyFruitType: decodeFromJSONField(String1.reified(), field.honeyFruitType), fruitsAdded: decodeFromJSONField("u64", field.fruitsAdded), additionalPerEpoch: decodeFromJSONField("u64", field.additionalPerEpoch), fruitsPerEpoch: decodeFromJSONField("u64", field.fruitsPerEpoch), availableFruits: decodeFromJSONField("u64", field.availableFruits) } ) }

 static fromJSON( json: Record<string, any> ): MoreFruitsAdded { if (json.$typeName !== MoreFruitsAdded.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MoreFruitsAdded.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MoreFruitsAdded { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMoreFruitsAdded(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MoreFruitsAdded object`); } return MoreFruitsAdded.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MoreFruitsAdded { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMoreFruitsAdded(data.bcs.type)) { throw new Error(`object at is not a MoreFruitsAdded object`); }

 return MoreFruitsAdded.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MoreFruitsAdded.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MoreFruitsAdded> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MoreFruitsAdded object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMoreFruitsAdded(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MoreFruitsAdded object`); }

 return MoreFruitsAdded.fromSuiObjectData( res.data ); }

 }

/* ============================== NewProposalKrafted =============================== */

export function isNewProposalKrafted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::NewProposalKrafted`; }

export interface NewProposalKraftedFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; proposer: ToField<"address">; title: ToField<String>; description: ToField<String>; link: ToField<String>; proposalType: ToField<"u64">; votingStartEpoch: ToField<"u64">; votingEndEpoch: ToField<"u64">; executionStartEpoch: ToField<"u64">; executionEndEpoch: ToField<"u64">; newParams: ToField<Option<Vector<"u64">>>; newWeights: ToField<Option<Vector<"u64">>>; newFeeInfo: ToField<Option<Vector<"u64">>>; fruitLife: ToField<Option<FruitLife>> }

export type NewProposalKraftedReified = Reified< NewProposalKrafted, NewProposalKraftedFields >;

export class NewProposalKrafted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::NewProposalKrafted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = NewProposalKrafted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::NewProposalKrafted`; readonly $typeArgs: []; readonly $isPhantom = NewProposalKrafted.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly proposer: ToField<"address">; readonly title: ToField<String>; readonly description: ToField<String>; readonly link: ToField<String>; readonly proposalType: ToField<"u64">; readonly votingStartEpoch: ToField<"u64">; readonly votingEndEpoch: ToField<"u64">; readonly executionStartEpoch: ToField<"u64">; readonly executionEndEpoch: ToField<"u64">; readonly newParams: ToField<Option<Vector<"u64">>>; readonly newWeights: ToField<Option<Vector<"u64">>>; readonly newFeeInfo: ToField<Option<Vector<"u64">>>; readonly fruitLife: ToField<Option<FruitLife>>

 private constructor(typeArgs: [], fields: NewProposalKraftedFields, ) { this.$fullTypeName = composeSuiType( NewProposalKrafted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::NewProposalKrafted`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.proposer = fields.proposer;; this.title = fields.title;; this.description = fields.description;; this.link = fields.link;; this.proposalType = fields.proposalType;; this.votingStartEpoch = fields.votingStartEpoch;; this.votingEndEpoch = fields.votingEndEpoch;; this.executionStartEpoch = fields.executionStartEpoch;; this.executionEndEpoch = fields.executionEndEpoch;; this.newParams = fields.newParams;; this.newWeights = fields.newWeights;; this.newFeeInfo = fields.newFeeInfo;; this.fruitLife = fields.fruitLife; }

 static reified( ): NewProposalKraftedReified { return { typeName: NewProposalKrafted.$typeName, fullTypeName: composeSuiType( NewProposalKrafted.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::NewProposalKrafted`, typeArgs: [ ] as [], isPhantom: NewProposalKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewProposalKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewProposalKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewProposalKrafted.fromBcs( data, ), bcs: NewProposalKrafted.bcs, fromJSONField: (field: any) => NewProposalKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewProposalKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewProposalKrafted.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => NewProposalKrafted.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => NewProposalKrafted.fetch( client, id, ), new: ( fields: NewProposalKraftedFields, ) => { return new NewProposalKrafted( [], fields ) }, kind: "StructClassReified", } }

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

 poolHiveAddr: this.poolHiveAddr,proposalId: this.proposalId.toString(),proposer: this.proposer,title: this.title,description: this.description,link: this.link,proposalType: this.proposalType.toString(),votingStartEpoch: this.votingStartEpoch.toString(),votingEndEpoch: this.votingEndEpoch.toString(),executionStartEpoch: this.executionStartEpoch.toString(),executionEndEpoch: this.executionEndEpoch.toString(),newParams: fieldToJSON<Option<Vector<"u64">>>(`${Option.$typeName}<vector<u64>>`, this.newParams),newWeights: fieldToJSON<Option<Vector<"u64">>>(`${Option.$typeName}<vector<u64>>`, this.newWeights),newFeeInfo: fieldToJSON<Option<Vector<"u64">>>(`${Option.$typeName}<vector<u64>>`, this.newFeeInfo),fruitLife: fieldToJSON<Option<FruitLife>>(`${Option.$typeName}<${FruitLife.$typeName}>`, this.fruitLife),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewProposalKrafted { return NewProposalKrafted.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), proposalId: decodeFromJSONField("u64", field.proposalId), proposer: decodeFromJSONField("address", field.proposer), title: decodeFromJSONField(String.reified(), field.title), description: decodeFromJSONField(String.reified(), field.description), link: decodeFromJSONField(String.reified(), field.link), proposalType: decodeFromJSONField("u64", field.proposalType), votingStartEpoch: decodeFromJSONField("u64", field.votingStartEpoch), votingEndEpoch: decodeFromJSONField("u64", field.votingEndEpoch), executionStartEpoch: decodeFromJSONField("u64", field.executionStartEpoch), executionEndEpoch: decodeFromJSONField("u64", field.executionEndEpoch), newParams: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newParams), newWeights: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newWeights), newFeeInfo: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newFeeInfo), fruitLife: decodeFromJSONField(Option.reified(FruitLife.reified()), field.fruitLife) } ) }

 static fromJSON( json: Record<string, any> ): NewProposalKrafted { if (json.$typeName !== NewProposalKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewProposalKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewProposalKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewProposalKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewProposalKrafted object`); } return NewProposalKrafted.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): NewProposalKrafted { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isNewProposalKrafted(data.bcs.type)) { throw new Error(`object at is not a NewProposalKrafted object`); }

 return NewProposalKrafted.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return NewProposalKrafted.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewProposalKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewProposalKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewProposalKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewProposalKrafted object`); }

 return NewProposalKrafted.fromSuiObjectData( res.data ); }

 }

/* ============================== PoolHive =============================== */

export function isPoolHive(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::dragon_food::PoolHive` + '<'); }

export interface PoolHiveFields<H extends PhantomTypeArgument> { id: ToField<UID>; poolAddr: ToField<"address">; totalStaked: ToField<"u64">; stakedForHoney: ToField<"u64">; honeyAvailable: ToField<Balance<ToPhantom<HONEY>>>; hiveAvailable: ToField<Balance<ToPhantom<HIVE>>>; globalHiveClaimIndex: ToField<"u256">; globalHoneyClaimIndex: ToField<"u256">; lastClaimEpoch: ToField<"u64">; lastClaimHoneyEpoch: ToField<"u64">; ongoingCycle: ToField<"u64">; curCycleStartEpoch: ToField<"u64">; bribes: ToField<Bribes>; addedHiveEnergy: ToField<"u128">; activeHiveEnergy: ToField<LinkedTable<"u64", "u128">>; removedHiveEnergy: ToField<"u128">; addedHoneyHealth: ToField<"u128">; activeHoneyHealth: ToField<LinkedTable<"u64", "u128">>; removedHoneyHealth: ToField<"u128">; restingDragons: ToField<LinkedTable<"address", ToPhantom<DragonDen<H>>>>; additionalRewards: ToField<Vector<String1>>; proposalList: ToField<LinkedTable<"u64", ToPhantom<Proposal>>>; nextProposalId: ToField<"u64">; moduleVersion: ToField<"u64"> }

export type PoolHiveReified<H extends PhantomTypeArgument> = Reified< PoolHive<H>, PoolHiveFields<H> >;

export class PoolHive<H extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::PoolHive`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = PoolHive.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::PoolHive<${PhantomToTypeStr<H>}>`; readonly $typeArgs: [PhantomToTypeStr<H>]; readonly $isPhantom = PoolHive.$isPhantom;

 readonly id: ToField<UID>; readonly poolAddr: ToField<"address">; readonly totalStaked: ToField<"u64">; readonly stakedForHoney: ToField<"u64">; readonly honeyAvailable: ToField<Balance<ToPhantom<HONEY>>>; readonly hiveAvailable: ToField<Balance<ToPhantom<HIVE>>>; readonly globalHiveClaimIndex: ToField<"u256">; readonly globalHoneyClaimIndex: ToField<"u256">; readonly lastClaimEpoch: ToField<"u64">; readonly lastClaimHoneyEpoch: ToField<"u64">; readonly ongoingCycle: ToField<"u64">; readonly curCycleStartEpoch: ToField<"u64">; readonly bribes: ToField<Bribes>; readonly addedHiveEnergy: ToField<"u128">; readonly activeHiveEnergy: ToField<LinkedTable<"u64", "u128">>; readonly removedHiveEnergy: ToField<"u128">; readonly addedHoneyHealth: ToField<"u128">; readonly activeHoneyHealth: ToField<LinkedTable<"u64", "u128">>; readonly removedHoneyHealth: ToField<"u128">; readonly restingDragons: ToField<LinkedTable<"address", ToPhantom<DragonDen<H>>>>; readonly additionalRewards: ToField<Vector<String1>>; readonly proposalList: ToField<LinkedTable<"u64", ToPhantom<Proposal>>>; readonly nextProposalId: ToField<"u64">; readonly moduleVersion: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<H>], fields: PoolHiveFields<H>, ) { this.$fullTypeName = composeSuiType( PoolHive.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::PoolHive<${PhantomToTypeStr<H>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.poolAddr = fields.poolAddr;; this.totalStaked = fields.totalStaked;; this.stakedForHoney = fields.stakedForHoney;; this.honeyAvailable = fields.honeyAvailable;; this.hiveAvailable = fields.hiveAvailable;; this.globalHiveClaimIndex = fields.globalHiveClaimIndex;; this.globalHoneyClaimIndex = fields.globalHoneyClaimIndex;; this.lastClaimEpoch = fields.lastClaimEpoch;; this.lastClaimHoneyEpoch = fields.lastClaimHoneyEpoch;; this.ongoingCycle = fields.ongoingCycle;; this.curCycleStartEpoch = fields.curCycleStartEpoch;; this.bribes = fields.bribes;; this.addedHiveEnergy = fields.addedHiveEnergy;; this.activeHiveEnergy = fields.activeHiveEnergy;; this.removedHiveEnergy = fields.removedHiveEnergy;; this.addedHoneyHealth = fields.addedHoneyHealth;; this.activeHoneyHealth = fields.activeHoneyHealth;; this.removedHoneyHealth = fields.removedHoneyHealth;; this.restingDragons = fields.restingDragons;; this.additionalRewards = fields.additionalRewards;; this.proposalList = fields.proposalList;; this.nextProposalId = fields.nextProposalId;; this.moduleVersion = fields.moduleVersion; }

 static reified<H extends PhantomReified<PhantomTypeArgument>>( H: H ): PoolHiveReified<ToPhantomTypeArgument<H>> { return { typeName: PoolHive.$typeName, fullTypeName: composeSuiType( PoolHive.$typeName, ...[extractType(H)] ) as `${typeof PKG_V1}::dragon_food::PoolHive<${PhantomToTypeStr<ToPhantomTypeArgument<H>>}>`, typeArgs: [ extractType(H) ] as [PhantomToTypeStr<ToPhantomTypeArgument<H>>], isPhantom: PoolHive.$isPhantom, reifiedTypeArgs: [H], fromFields: (fields: Record<string, any>) => PoolHive.fromFields( H, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolHive.fromFieldsWithTypes( H, item, ), fromBcs: (data: Uint8Array) => PoolHive.fromBcs( H, data, ), bcs: PoolHive.bcs, fromJSONField: (field: any) => PoolHive.fromJSONField( H, field, ), fromJSON: (json: Record<string, any>) => PoolHive.fromJSON( H, json, ), fromSuiParsedData: (content: SuiParsedData) => PoolHive.fromSuiParsedData( H, content, ), fromSuiObjectData: (content: SuiObjectData) => PoolHive.fromSuiObjectData( H, content, ), fetch: async (client: SuiClient, id: string) => PoolHive.fetch( client, H, id, ), new: ( fields: PoolHiveFields<ToPhantomTypeArgument<H>>, ) => { return new PoolHive( [extractType(H)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolHive.reified }

 static phantom<H extends PhantomReified<PhantomTypeArgument>>( H: H ): PhantomReified<ToTypeStr<PoolHive<ToPhantomTypeArgument<H>>>> { return phantom(PoolHive.reified( H )); } static get p() { return PoolHive.phantom }

 static get bcs() { return bcs.struct("PoolHive", {

 id: UID.bcs, pool_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), total_staked: bcs.u64(), staked_for_honey: bcs.u64(), honey_available: Balance.bcs, hive_available: Balance.bcs, global_hive_claim_index: bcs.u256(), global_honey_claim_index: bcs.u256(), last_claim_epoch: bcs.u64(), last_claim_honey_epoch: bcs.u64(), ongoing_cycle: bcs.u64(), cur_cycle_start_epoch: bcs.u64(), bribes: Bribes.bcs, added_hive_energy: bcs.u128(), active_hive_energy: LinkedTable.bcs(bcs.u64()), removed_hive_energy: bcs.u128(), added_honey_health: bcs.u128(), active_honey_health: LinkedTable.bcs(bcs.u64()), removed_honey_health: bcs.u128(), resting_dragons: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), additional_rewards: bcs.vector(String1.bcs), proposal_list: LinkedTable.bcs(bcs.u64()), next_proposal_id: bcs.u64(), module_version: bcs.u64()

}) };

 static fromFields<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, fields: Record<string, any> ): PoolHive<ToPhantomTypeArgument<H>> { return PoolHive.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), poolAddr: decodeFromFields("address", fields.pool_addr), totalStaked: decodeFromFields("u64", fields.total_staked), stakedForHoney: decodeFromFields("u64", fields.staked_for_honey), honeyAvailable: decodeFromFields(Balance.reified(reified.phantom(HONEY.reified())), fields.honey_available), hiveAvailable: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_available), globalHiveClaimIndex: decodeFromFields("u256", fields.global_hive_claim_index), globalHoneyClaimIndex: decodeFromFields("u256", fields.global_honey_claim_index), lastClaimEpoch: decodeFromFields("u64", fields.last_claim_epoch), lastClaimHoneyEpoch: decodeFromFields("u64", fields.last_claim_honey_epoch), ongoingCycle: decodeFromFields("u64", fields.ongoing_cycle), curCycleStartEpoch: decodeFromFields("u64", fields.cur_cycle_start_epoch), bribes: decodeFromFields(Bribes.reified(), fields.bribes), addedHiveEnergy: decodeFromFields("u128", fields.added_hive_energy), activeHiveEnergy: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u128")), fields.active_hive_energy), removedHiveEnergy: decodeFromFields("u128", fields.removed_hive_energy), addedHoneyHealth: decodeFromFields("u128", fields.added_honey_health), activeHoneyHealth: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u128")), fields.active_honey_health), removedHoneyHealth: decodeFromFields("u128", fields.removed_honey_health), restingDragons: decodeFromFields(LinkedTable.reified("address", reified.phantom(DragonDen.reified(typeArg))), fields.resting_dragons), additionalRewards: decodeFromFields(reified.vector(String1.reified()), fields.additional_rewards), proposalList: decodeFromFields(LinkedTable.reified("u64", reified.phantom(Proposal.reified())), fields.proposal_list), nextProposalId: decodeFromFields("u64", fields.next_proposal_id), moduleVersion: decodeFromFields("u64", fields.module_version) } ) }

 static fromFieldsWithTypes<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, item: FieldsWithTypes ): PoolHive<ToPhantomTypeArgument<H>> { if (!isPoolHive(item.type)) { throw new Error("not a PoolHive type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return PoolHive.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), poolAddr: decodeFromFieldsWithTypes("address", item.fields.pool_addr), totalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_staked), stakedForHoney: decodeFromFieldsWithTypes("u64", item.fields.staked_for_honey), honeyAvailable: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HONEY.reified())), item.fields.honey_available), hiveAvailable: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_available), globalHiveClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.global_hive_claim_index), globalHoneyClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.global_honey_claim_index), lastClaimEpoch: decodeFromFieldsWithTypes("u64", item.fields.last_claim_epoch), lastClaimHoneyEpoch: decodeFromFieldsWithTypes("u64", item.fields.last_claim_honey_epoch), ongoingCycle: decodeFromFieldsWithTypes("u64", item.fields.ongoing_cycle), curCycleStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_cycle_start_epoch), bribes: decodeFromFieldsWithTypes(Bribes.reified(), item.fields.bribes), addedHiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.added_hive_energy), activeHiveEnergy: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u128")), item.fields.active_hive_energy), removedHiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.removed_hive_energy), addedHoneyHealth: decodeFromFieldsWithTypes("u128", item.fields.added_honey_health), activeHoneyHealth: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u128")), item.fields.active_honey_health), removedHoneyHealth: decodeFromFieldsWithTypes("u128", item.fields.removed_honey_health), restingDragons: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(DragonDen.reified(typeArg))), item.fields.resting_dragons), additionalRewards: decodeFromFieldsWithTypes(reified.vector(String1.reified()), item.fields.additional_rewards), proposalList: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(Proposal.reified())), item.fields.proposal_list), nextProposalId: decodeFromFieldsWithTypes("u64", item.fields.next_proposal_id), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) } ) }

 static fromBcs<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, data: Uint8Array ): PoolHive<ToPhantomTypeArgument<H>> { return PoolHive.fromFields( typeArg, PoolHive.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,poolAddr: this.poolAddr,totalStaked: this.totalStaked.toString(),stakedForHoney: this.stakedForHoney.toString(),honeyAvailable: this.honeyAvailable.toJSONField(),hiveAvailable: this.hiveAvailable.toJSONField(),globalHiveClaimIndex: this.globalHiveClaimIndex.toString(),globalHoneyClaimIndex: this.globalHoneyClaimIndex.toString(),lastClaimEpoch: this.lastClaimEpoch.toString(),lastClaimHoneyEpoch: this.lastClaimHoneyEpoch.toString(),ongoingCycle: this.ongoingCycle.toString(),curCycleStartEpoch: this.curCycleStartEpoch.toString(),bribes: this.bribes.toJSONField(),addedHiveEnergy: this.addedHiveEnergy.toString(),activeHiveEnergy: this.activeHiveEnergy.toJSONField(),removedHiveEnergy: this.removedHiveEnergy.toString(),addedHoneyHealth: this.addedHoneyHealth.toString(),activeHoneyHealth: this.activeHoneyHealth.toJSONField(),removedHoneyHealth: this.removedHoneyHealth.toString(),restingDragons: this.restingDragons.toJSONField(),additionalRewards: fieldToJSON<Vector<String1>>(`vector<${String1.$typeName}>`, this.additionalRewards),proposalList: this.proposalList.toJSONField(),nextProposalId: this.nextProposalId.toString(),moduleVersion: this.moduleVersion.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, field: any ): PoolHive<ToPhantomTypeArgument<H>> { return PoolHive.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), poolAddr: decodeFromJSONField("address", field.poolAddr), totalStaked: decodeFromJSONField("u64", field.totalStaked), stakedForHoney: decodeFromJSONField("u64", field.stakedForHoney), honeyAvailable: decodeFromJSONField(Balance.reified(reified.phantom(HONEY.reified())), field.honeyAvailable), hiveAvailable: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveAvailable), globalHiveClaimIndex: decodeFromJSONField("u256", field.globalHiveClaimIndex), globalHoneyClaimIndex: decodeFromJSONField("u256", field.globalHoneyClaimIndex), lastClaimEpoch: decodeFromJSONField("u64", field.lastClaimEpoch), lastClaimHoneyEpoch: decodeFromJSONField("u64", field.lastClaimHoneyEpoch), ongoingCycle: decodeFromJSONField("u64", field.ongoingCycle), curCycleStartEpoch: decodeFromJSONField("u64", field.curCycleStartEpoch), bribes: decodeFromJSONField(Bribes.reified(), field.bribes), addedHiveEnergy: decodeFromJSONField("u128", field.addedHiveEnergy), activeHiveEnergy: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u128")), field.activeHiveEnergy), removedHiveEnergy: decodeFromJSONField("u128", field.removedHiveEnergy), addedHoneyHealth: decodeFromJSONField("u128", field.addedHoneyHealth), activeHoneyHealth: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u128")), field.activeHoneyHealth), removedHoneyHealth: decodeFromJSONField("u128", field.removedHoneyHealth), restingDragons: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(DragonDen.reified(typeArg))), field.restingDragons), additionalRewards: decodeFromJSONField(reified.vector(String1.reified()), field.additionalRewards), proposalList: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(Proposal.reified())), field.proposalList), nextProposalId: decodeFromJSONField("u64", field.nextProposalId), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) } ) }

 static fromJSON<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, json: Record<string, any> ): PoolHive<ToPhantomTypeArgument<H>> { if (json.$typeName !== PoolHive.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PoolHive.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return PoolHive.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, content: SuiParsedData ): PoolHive<ToPhantomTypeArgument<H>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolHive(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolHive object`); } return PoolHive.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<H extends PhantomReified<PhantomTypeArgument>>( typeArg: H, data: SuiObjectData ): PoolHive<ToPhantomTypeArgument<H>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPoolHive(data.bcs.type)) { throw new Error(`object at is not a PoolHive object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return PoolHive.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PoolHive.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<H extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: H, id: string ): Promise<PoolHive<ToPhantomTypeArgument<H>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolHive object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolHive(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolHive object`); }

 return PoolHive.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== PoolHiveKrafted =============================== */

export function isPoolHiveKrafted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::PoolHiveKrafted`; }

export interface PoolHiveKraftedFields { poolId: ToField<"address">; lpIdentifier: ToField<String1>; poolHiveAddr: ToField<"address">; curEpoch: ToField<"u64">; ongoingCycle: ToField<"u64">; curCycleStartEpoch: ToField<"u64">; acceptedBribesVec: ToField<Vector<String>> }

export type PoolHiveKraftedReified = Reified< PoolHiveKrafted, PoolHiveKraftedFields >;

export class PoolHiveKrafted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::PoolHiveKrafted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PoolHiveKrafted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::PoolHiveKrafted`; readonly $typeArgs: []; readonly $isPhantom = PoolHiveKrafted.$isPhantom;

 readonly poolId: ToField<"address">; readonly lpIdentifier: ToField<String1>; readonly poolHiveAddr: ToField<"address">; readonly curEpoch: ToField<"u64">; readonly ongoingCycle: ToField<"u64">; readonly curCycleStartEpoch: ToField<"u64">; readonly acceptedBribesVec: ToField<Vector<String>>

 private constructor(typeArgs: [], fields: PoolHiveKraftedFields, ) { this.$fullTypeName = composeSuiType( PoolHiveKrafted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::PoolHiveKrafted`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.lpIdentifier = fields.lpIdentifier;; this.poolHiveAddr = fields.poolHiveAddr;; this.curEpoch = fields.curEpoch;; this.ongoingCycle = fields.ongoingCycle;; this.curCycleStartEpoch = fields.curCycleStartEpoch;; this.acceptedBribesVec = fields.acceptedBribesVec; }

 static reified( ): PoolHiveKraftedReified { return { typeName: PoolHiveKrafted.$typeName, fullTypeName: composeSuiType( PoolHiveKrafted.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::PoolHiveKrafted`, typeArgs: [ ] as [], isPhantom: PoolHiveKrafted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolHiveKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolHiveKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolHiveKrafted.fromBcs( data, ), bcs: PoolHiveKrafted.bcs, fromJSONField: (field: any) => PoolHiveKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolHiveKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolHiveKrafted.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PoolHiveKrafted.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PoolHiveKrafted.fetch( client, id, ), new: ( fields: PoolHiveKraftedFields, ) => { return new PoolHiveKrafted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolHiveKrafted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolHiveKrafted>> { return phantom(PoolHiveKrafted.reified( )); } static get p() { return PoolHiveKrafted.phantom() }

 static get bcs() { return bcs.struct("PoolHiveKrafted", {

 pool_id: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), lp_identifier: String1.bcs, pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), cur_epoch: bcs.u64(), ongoing_cycle: bcs.u64(), cur_cycle_start_epoch: bcs.u64(), accepted_bribes_vec: bcs.vector(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): PoolHiveKrafted { return PoolHiveKrafted.reified( ).new( { poolId: decodeFromFields("address", fields.pool_id), lpIdentifier: decodeFromFields(String1.reified(), fields.lp_identifier), poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), curEpoch: decodeFromFields("u64", fields.cur_epoch), ongoingCycle: decodeFromFields("u64", fields.ongoing_cycle), curCycleStartEpoch: decodeFromFields("u64", fields.cur_cycle_start_epoch), acceptedBribesVec: decodeFromFields(reified.vector(String.reified()), fields.accepted_bribes_vec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolHiveKrafted { if (!isPoolHiveKrafted(item.type)) { throw new Error("not a PoolHiveKrafted type");

 }

 return PoolHiveKrafted.reified( ).new( { poolId: decodeFromFieldsWithTypes("address", item.fields.pool_id), lpIdentifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.lp_identifier), poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch), ongoingCycle: decodeFromFieldsWithTypes("u64", item.fields.ongoing_cycle), curCycleStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_cycle_start_epoch), acceptedBribesVec: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.accepted_bribes_vec) } ) }

 static fromBcs( data: Uint8Array ): PoolHiveKrafted { return PoolHiveKrafted.fromFields( PoolHiveKrafted.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,lpIdentifier: this.lpIdentifier,poolHiveAddr: this.poolHiveAddr,curEpoch: this.curEpoch.toString(),ongoingCycle: this.ongoingCycle.toString(),curCycleStartEpoch: this.curCycleStartEpoch.toString(),acceptedBribesVec: fieldToJSON<Vector<String>>(`vector<${String.$typeName}>`, this.acceptedBribesVec),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolHiveKrafted { return PoolHiveKrafted.reified( ).new( { poolId: decodeFromJSONField("address", field.poolId), lpIdentifier: decodeFromJSONField(String1.reified(), field.lpIdentifier), poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), curEpoch: decodeFromJSONField("u64", field.curEpoch), ongoingCycle: decodeFromJSONField("u64", field.ongoingCycle), curCycleStartEpoch: decodeFromJSONField("u64", field.curCycleStartEpoch), acceptedBribesVec: decodeFromJSONField(reified.vector(String.reified()), field.acceptedBribesVec) } ) }

 static fromJSON( json: Record<string, any> ): PoolHiveKrafted { if (json.$typeName !== PoolHiveKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolHiveKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolHiveKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolHiveKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolHiveKrafted object`); } return PoolHiveKrafted.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PoolHiveKrafted { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPoolHiveKrafted(data.bcs.type)) { throw new Error(`object at is not a PoolHiveKrafted object`); }

 return PoolHiveKrafted.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PoolHiveKrafted.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolHiveKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolHiveKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolHiveKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolHiveKrafted object`); }

 return PoolHiveKrafted.fromSuiObjectData( res.data ); }

 }

/* ============================== Proposal =============================== */

export function isProposal(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::Proposal`; }

export interface ProposalFields { proposalId: ToField<"u64">; proposer: ToField<"address">; deposit: ToField<Balance<ToPhantom<HIVE>>>; title: ToField<String>; description: ToField<String>; link: ToField<String>; proposalType: ToField<"u64">; votingStartEpoch: ToField<"u64">; votingEndEpoch: ToField<"u64">; executionStartEpoch: ToField<"u64">; executionEndEpoch: ToField<"u64">; proposalStatus: ToField<"u64">; yesVotes: ToField<"u64">; noVotes: ToField<"u64">; voters: ToField<LinkedTable<"address", ToPhantom<Vote>>>; fruitLife: ToField<Option<FruitLife>>; newParams: ToField<Option<Vector<"u64">>>; newWeights: ToField<Option<Vector<"u64">>>; newFeeInfo: ToField<Option<Vector<"u64">>> }

export type ProposalReified = Reified< Proposal, ProposalFields >;

export class Proposal implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::Proposal`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Proposal.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::Proposal`; readonly $typeArgs: []; readonly $isPhantom = Proposal.$isPhantom;

 readonly proposalId: ToField<"u64">; readonly proposer: ToField<"address">; readonly deposit: ToField<Balance<ToPhantom<HIVE>>>; readonly title: ToField<String>; readonly description: ToField<String>; readonly link: ToField<String>; readonly proposalType: ToField<"u64">; readonly votingStartEpoch: ToField<"u64">; readonly votingEndEpoch: ToField<"u64">; readonly executionStartEpoch: ToField<"u64">; readonly executionEndEpoch: ToField<"u64">; readonly proposalStatus: ToField<"u64">; readonly yesVotes: ToField<"u64">; readonly noVotes: ToField<"u64">; readonly voters: ToField<LinkedTable<"address", ToPhantom<Vote>>>; readonly fruitLife: ToField<Option<FruitLife>>; readonly newParams: ToField<Option<Vector<"u64">>>; readonly newWeights: ToField<Option<Vector<"u64">>>; readonly newFeeInfo: ToField<Option<Vector<"u64">>>

 private constructor(typeArgs: [], fields: ProposalFields, ) { this.$fullTypeName = composeSuiType( Proposal.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::Proposal`; this.$typeArgs = typeArgs;

 this.proposalId = fields.proposalId;; this.proposer = fields.proposer;; this.deposit = fields.deposit;; this.title = fields.title;; this.description = fields.description;; this.link = fields.link;; this.proposalType = fields.proposalType;; this.votingStartEpoch = fields.votingStartEpoch;; this.votingEndEpoch = fields.votingEndEpoch;; this.executionStartEpoch = fields.executionStartEpoch;; this.executionEndEpoch = fields.executionEndEpoch;; this.proposalStatus = fields.proposalStatus;; this.yesVotes = fields.yesVotes;; this.noVotes = fields.noVotes;; this.voters = fields.voters;; this.fruitLife = fields.fruitLife;; this.newParams = fields.newParams;; this.newWeights = fields.newWeights;; this.newFeeInfo = fields.newFeeInfo; }

 static reified( ): ProposalReified { return { typeName: Proposal.$typeName, fullTypeName: composeSuiType( Proposal.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::Proposal`, typeArgs: [ ] as [], isPhantom: Proposal.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Proposal.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Proposal.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Proposal.fromBcs( data, ), bcs: Proposal.bcs, fromJSONField: (field: any) => Proposal.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Proposal.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Proposal.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Proposal.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Proposal.fetch( client, id, ), new: ( fields: ProposalFields, ) => { return new Proposal( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Proposal.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Proposal>> { return phantom(Proposal.reified( )); } static get p() { return Proposal.phantom() }

 static get bcs() { return bcs.struct("Proposal", {

 proposal_id: bcs.u64(), proposer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), deposit: Balance.bcs, title: String.bcs, description: String.bcs, link: String.bcs, proposal_type: bcs.u64(), voting_start_epoch: bcs.u64(), voting_end_epoch: bcs.u64(), execution_start_epoch: bcs.u64(), execution_end_epoch: bcs.u64(), proposal_status: bcs.u64(), yes_votes: bcs.u64(), no_votes: bcs.u64(), voters: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), fruit_life: Option.bcs(FruitLife.bcs), new_params: Option.bcs(bcs.vector(bcs.u64())), new_weights: Option.bcs(bcs.vector(bcs.u64())), new_fee_info: Option.bcs(bcs.vector(bcs.u64()))

}) };

 static fromFields( fields: Record<string, any> ): Proposal { return Proposal.reified( ).new( { proposalId: decodeFromFields("u64", fields.proposal_id), proposer: decodeFromFields("address", fields.proposer), deposit: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.deposit), title: decodeFromFields(String.reified(), fields.title), description: decodeFromFields(String.reified(), fields.description), link: decodeFromFields(String.reified(), fields.link), proposalType: decodeFromFields("u64", fields.proposal_type), votingStartEpoch: decodeFromFields("u64", fields.voting_start_epoch), votingEndEpoch: decodeFromFields("u64", fields.voting_end_epoch), executionStartEpoch: decodeFromFields("u64", fields.execution_start_epoch), executionEndEpoch: decodeFromFields("u64", fields.execution_end_epoch), proposalStatus: decodeFromFields("u64", fields.proposal_status), yesVotes: decodeFromFields("u64", fields.yes_votes), noVotes: decodeFromFields("u64", fields.no_votes), voters: decodeFromFields(LinkedTable.reified("address", reified.phantom(Vote.reified())), fields.voters), fruitLife: decodeFromFields(Option.reified(FruitLife.reified()), fields.fruit_life), newParams: decodeFromFields(Option.reified(reified.vector("u64")), fields.new_params), newWeights: decodeFromFields(Option.reified(reified.vector("u64")), fields.new_weights), newFeeInfo: decodeFromFields(Option.reified(reified.vector("u64")), fields.new_fee_info) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Proposal { if (!isProposal(item.type)) { throw new Error("not a Proposal type");

 }

 return Proposal.reified( ).new( { proposalId: decodeFromFieldsWithTypes("u64", item.fields.proposal_id), proposer: decodeFromFieldsWithTypes("address", item.fields.proposer), deposit: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.deposit), title: decodeFromFieldsWithTypes(String.reified(), item.fields.title), description: decodeFromFieldsWithTypes(String.reified(), item.fields.description), link: decodeFromFieldsWithTypes(String.reified(), item.fields.link), proposalType: decodeFromFieldsWithTypes("u64", item.fields.proposal_type), votingStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.voting_start_epoch), votingEndEpoch: decodeFromFieldsWithTypes("u64", item.fields.voting_end_epoch), executionStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.execution_start_epoch), executionEndEpoch: decodeFromFieldsWithTypes("u64", item.fields.execution_end_epoch), proposalStatus: decodeFromFieldsWithTypes("u64", item.fields.proposal_status), yesVotes: decodeFromFieldsWithTypes("u64", item.fields.yes_votes), noVotes: decodeFromFieldsWithTypes("u64", item.fields.no_votes), voters: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(Vote.reified())), item.fields.voters), fruitLife: decodeFromFieldsWithTypes(Option.reified(FruitLife.reified()), item.fields.fruit_life), newParams: decodeFromFieldsWithTypes(Option.reified(reified.vector("u64")), item.fields.new_params), newWeights: decodeFromFieldsWithTypes(Option.reified(reified.vector("u64")), item.fields.new_weights), newFeeInfo: decodeFromFieldsWithTypes(Option.reified(reified.vector("u64")), item.fields.new_fee_info) } ) }

 static fromBcs( data: Uint8Array ): Proposal { return Proposal.fromFields( Proposal.bcs.parse(data) ) }

 toJSONField() { return {

 proposalId: this.proposalId.toString(),proposer: this.proposer,deposit: this.deposit.toJSONField(),title: this.title,description: this.description,link: this.link,proposalType: this.proposalType.toString(),votingStartEpoch: this.votingStartEpoch.toString(),votingEndEpoch: this.votingEndEpoch.toString(),executionStartEpoch: this.executionStartEpoch.toString(),executionEndEpoch: this.executionEndEpoch.toString(),proposalStatus: this.proposalStatus.toString(),yesVotes: this.yesVotes.toString(),noVotes: this.noVotes.toString(),voters: this.voters.toJSONField(),fruitLife: fieldToJSON<Option<FruitLife>>(`${Option.$typeName}<${FruitLife.$typeName}>`, this.fruitLife),newParams: fieldToJSON<Option<Vector<"u64">>>(`${Option.$typeName}<vector<u64>>`, this.newParams),newWeights: fieldToJSON<Option<Vector<"u64">>>(`${Option.$typeName}<vector<u64>>`, this.newWeights),newFeeInfo: fieldToJSON<Option<Vector<"u64">>>(`${Option.$typeName}<vector<u64>>`, this.newFeeInfo),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Proposal { return Proposal.reified( ).new( { proposalId: decodeFromJSONField("u64", field.proposalId), proposer: decodeFromJSONField("address", field.proposer), deposit: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.deposit), title: decodeFromJSONField(String.reified(), field.title), description: decodeFromJSONField(String.reified(), field.description), link: decodeFromJSONField(String.reified(), field.link), proposalType: decodeFromJSONField("u64", field.proposalType), votingStartEpoch: decodeFromJSONField("u64", field.votingStartEpoch), votingEndEpoch: decodeFromJSONField("u64", field.votingEndEpoch), executionStartEpoch: decodeFromJSONField("u64", field.executionStartEpoch), executionEndEpoch: decodeFromJSONField("u64", field.executionEndEpoch), proposalStatus: decodeFromJSONField("u64", field.proposalStatus), yesVotes: decodeFromJSONField("u64", field.yesVotes), noVotes: decodeFromJSONField("u64", field.noVotes), voters: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(Vote.reified())), field.voters), fruitLife: decodeFromJSONField(Option.reified(FruitLife.reified()), field.fruitLife), newParams: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newParams), newWeights: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newWeights), newFeeInfo: decodeFromJSONField(Option.reified(reified.vector("u64")), field.newFeeInfo) } ) }

 static fromJSON( json: Record<string, any> ): Proposal { if (json.$typeName !== Proposal.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Proposal.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Proposal { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProposal(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Proposal object`); } return Proposal.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Proposal { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isProposal(data.bcs.type)) { throw new Error(`object at is not a Proposal object`); }

 return Proposal.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Proposal.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Proposal> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Proposal object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProposal(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Proposal object`); }

 return Proposal.fromSuiObjectData( res.data ); }

 }

/* ============================== ProposalDeleted =============================== */

export function isProposalDeleted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::ProposalDeleted`; }

export interface ProposalDeletedFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; proposalType: ToField<"u64">; proposalStatus: ToField<"u64"> }

export type ProposalDeletedReified = Reified< ProposalDeleted, ProposalDeletedFields >;

export class ProposalDeleted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::ProposalDeleted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ProposalDeleted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::ProposalDeleted`; readonly $typeArgs: []; readonly $isPhantom = ProposalDeleted.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly proposalType: ToField<"u64">; readonly proposalStatus: ToField<"u64">

 private constructor(typeArgs: [], fields: ProposalDeletedFields, ) { this.$fullTypeName = composeSuiType( ProposalDeleted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::ProposalDeleted`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.proposalType = fields.proposalType;; this.proposalStatus = fields.proposalStatus; }

 static reified( ): ProposalDeletedReified { return { typeName: ProposalDeleted.$typeName, fullTypeName: composeSuiType( ProposalDeleted.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::ProposalDeleted`, typeArgs: [ ] as [], isPhantom: ProposalDeleted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ProposalDeleted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProposalDeleted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ProposalDeleted.fromBcs( data, ), bcs: ProposalDeleted.bcs, fromJSONField: (field: any) => ProposalDeleted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ProposalDeleted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ProposalDeleted.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ProposalDeleted.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ProposalDeleted.fetch( client, id, ), new: ( fields: ProposalDeletedFields, ) => { return new ProposalDeleted( [], fields ) }, kind: "StructClassReified", } }

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

 static fromSuiObjectData( data: SuiObjectData ): ProposalDeleted { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isProposalDeleted(data.bcs.type)) { throw new Error(`object at is not a ProposalDeleted object`); }

 return ProposalDeleted.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ProposalDeleted.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ProposalDeleted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProposalDeleted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProposalDeleted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProposalDeleted object`); }

 return ProposalDeleted.fromSuiObjectData( res.data ); }

 }

/* ============================== ProposalEvaluated =============================== */

export function isProposalEvaluated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::ProposalEvaluated`; }

export interface ProposalEvaluatedFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; proposalStatus: ToField<"u64">; yesVotes: ToField<"u64">; noVotes: ToField<"u64">; totalPossibleVotes: ToField<"u64">; votesQuorum: ToField<"u64">; yesVotesThreshold: ToField<"u64"> }

export type ProposalEvaluatedReified = Reified< ProposalEvaluated, ProposalEvaluatedFields >;

export class ProposalEvaluated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::ProposalEvaluated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ProposalEvaluated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::ProposalEvaluated`; readonly $typeArgs: []; readonly $isPhantom = ProposalEvaluated.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly proposalStatus: ToField<"u64">; readonly yesVotes: ToField<"u64">; readonly noVotes: ToField<"u64">; readonly totalPossibleVotes: ToField<"u64">; readonly votesQuorum: ToField<"u64">; readonly yesVotesThreshold: ToField<"u64">

 private constructor(typeArgs: [], fields: ProposalEvaluatedFields, ) { this.$fullTypeName = composeSuiType( ProposalEvaluated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::ProposalEvaluated`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.proposalStatus = fields.proposalStatus;; this.yesVotes = fields.yesVotes;; this.noVotes = fields.noVotes;; this.totalPossibleVotes = fields.totalPossibleVotes;; this.votesQuorum = fields.votesQuorum;; this.yesVotesThreshold = fields.yesVotesThreshold; }

 static reified( ): ProposalEvaluatedReified { return { typeName: ProposalEvaluated.$typeName, fullTypeName: composeSuiType( ProposalEvaluated.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::ProposalEvaluated`, typeArgs: [ ] as [], isPhantom: ProposalEvaluated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ProposalEvaluated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProposalEvaluated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ProposalEvaluated.fromBcs( data, ), bcs: ProposalEvaluated.bcs, fromJSONField: (field: any) => ProposalEvaluated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ProposalEvaluated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ProposalEvaluated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ProposalEvaluated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ProposalEvaluated.fetch( client, id, ), new: ( fields: ProposalEvaluatedFields, ) => { return new ProposalEvaluated( [], fields ) }, kind: "StructClassReified", } }

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

 static fromSuiObjectData( data: SuiObjectData ): ProposalEvaluated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isProposalEvaluated(data.bcs.type)) { throw new Error(`object at is not a ProposalEvaluated object`); }

 return ProposalEvaluated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ProposalEvaluated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ProposalEvaluated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProposalEvaluated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProposalEvaluated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProposalEvaluated object`); }

 return ProposalEvaluated.fromSuiObjectData( res.data ); }

 }

/* ============================== ProposalExecuted =============================== */

export function isProposalExecuted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::ProposalExecuted`; }

export interface ProposalExecutedFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; proposalType: ToField<"u64"> }

export type ProposalExecutedReified = Reified< ProposalExecuted, ProposalExecutedFields >;

export class ProposalExecuted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::ProposalExecuted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ProposalExecuted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::ProposalExecuted`; readonly $typeArgs: []; readonly $isPhantom = ProposalExecuted.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly proposalType: ToField<"u64">

 private constructor(typeArgs: [], fields: ProposalExecutedFields, ) { this.$fullTypeName = composeSuiType( ProposalExecuted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::ProposalExecuted`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.proposalType = fields.proposalType; }

 static reified( ): ProposalExecutedReified { return { typeName: ProposalExecuted.$typeName, fullTypeName: composeSuiType( ProposalExecuted.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::ProposalExecuted`, typeArgs: [ ] as [], isPhantom: ProposalExecuted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ProposalExecuted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProposalExecuted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ProposalExecuted.fromBcs( data, ), bcs: ProposalExecuted.bcs, fromJSONField: (field: any) => ProposalExecuted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ProposalExecuted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ProposalExecuted.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ProposalExecuted.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ProposalExecuted.fetch( client, id, ), new: ( fields: ProposalExecutedFields, ) => { return new ProposalExecuted( [], fields ) }, kind: "StructClassReified", } }

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

 static fromSuiObjectData( data: SuiObjectData ): ProposalExecuted { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isProposalExecuted(data.bcs.type)) { throw new Error(`object at is not a ProposalExecuted object`); }

 return ProposalExecuted.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ProposalExecuted.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ProposalExecuted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProposalExecuted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProposalExecuted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProposalExecuted object`); }

 return ProposalExecuted.fromSuiObjectData( res.data ); }

 }

/* ============================== RestedLockedDragonBeeReturnedInWild =============================== */

export function isRestedLockedDragonBeeReturnedInWild(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::RestedLockedDragonBeeReturnedInWild`; }

export interface RestedLockedDragonBeeReturnedInWildFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address">; beeVersion: ToField<"u64">; hiveEarned: ToField<"u64">; honeyEarned: ToField<"u64">; unlockedAtCycle: ToField<"u64">; stakedForHoney: ToField<"u64"> }

export type RestedLockedDragonBeeReturnedInWildReified = Reified< RestedLockedDragonBeeReturnedInWild, RestedLockedDragonBeeReturnedInWildFields >;

export class RestedLockedDragonBeeReturnedInWild implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::RestedLockedDragonBeeReturnedInWild`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RestedLockedDragonBeeReturnedInWild.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::RestedLockedDragonBeeReturnedInWild`; readonly $typeArgs: []; readonly $isPhantom = RestedLockedDragonBeeReturnedInWild.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">; readonly beeVersion: ToField<"u64">; readonly hiveEarned: ToField<"u64">; readonly honeyEarned: ToField<"u64">; readonly unlockedAtCycle: ToField<"u64">; readonly stakedForHoney: ToField<"u64">

 private constructor(typeArgs: [], fields: RestedLockedDragonBeeReturnedInWildFields, ) { this.$fullTypeName = composeSuiType( RestedLockedDragonBeeReturnedInWild.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::RestedLockedDragonBeeReturnedInWild`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr;; this.beeVersion = fields.beeVersion;; this.hiveEarned = fields.hiveEarned;; this.honeyEarned = fields.honeyEarned;; this.unlockedAtCycle = fields.unlockedAtCycle;; this.stakedForHoney = fields.stakedForHoney; }

 static reified( ): RestedLockedDragonBeeReturnedInWildReified { return { typeName: RestedLockedDragonBeeReturnedInWild.$typeName, fullTypeName: composeSuiType( RestedLockedDragonBeeReturnedInWild.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::RestedLockedDragonBeeReturnedInWild`, typeArgs: [ ] as [], isPhantom: RestedLockedDragonBeeReturnedInWild.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RestedLockedDragonBeeReturnedInWild.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RestedLockedDragonBeeReturnedInWild.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RestedLockedDragonBeeReturnedInWild.fromBcs( data, ), bcs: RestedLockedDragonBeeReturnedInWild.bcs, fromJSONField: (field: any) => RestedLockedDragonBeeReturnedInWild.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RestedLockedDragonBeeReturnedInWild.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RestedLockedDragonBeeReturnedInWild.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RestedLockedDragonBeeReturnedInWild.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RestedLockedDragonBeeReturnedInWild.fetch( client, id, ), new: ( fields: RestedLockedDragonBeeReturnedInWildFields, ) => { return new RestedLockedDragonBeeReturnedInWild( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RestedLockedDragonBeeReturnedInWild.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RestedLockedDragonBeeReturnedInWild>> { return phantom(RestedLockedDragonBeeReturnedInWild.reified( )); } static get p() { return RestedLockedDragonBeeReturnedInWild.phantom() }

 static get bcs() { return bcs.struct("RestedLockedDragonBeeReturnedInWild", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bee_version: bcs.u64(), hive_earned: bcs.u64(), honey_earned: bcs.u64(), unlocked_at_cycle: bcs.u64(), staked_for_honey: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RestedLockedDragonBeeReturnedInWild { return RestedLockedDragonBeeReturnedInWild.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr), beeVersion: decodeFromFields("u64", fields.bee_version), hiveEarned: decodeFromFields("u64", fields.hive_earned), honeyEarned: decodeFromFields("u64", fields.honey_earned), unlockedAtCycle: decodeFromFields("u64", fields.unlocked_at_cycle), stakedForHoney: decodeFromFields("u64", fields.staked_for_honey) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RestedLockedDragonBeeReturnedInWild { if (!isRestedLockedDragonBeeReturnedInWild(item.type)) { throw new Error("not a RestedLockedDragonBeeReturnedInWild type");

 }

 return RestedLockedDragonBeeReturnedInWild.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), hiveEarned: decodeFromFieldsWithTypes("u64", item.fields.hive_earned), honeyEarned: decodeFromFieldsWithTypes("u64", item.fields.honey_earned), unlockedAtCycle: decodeFromFieldsWithTypes("u64", item.fields.unlocked_at_cycle), stakedForHoney: decodeFromFieldsWithTypes("u64", item.fields.staked_for_honey) } ) }

 static fromBcs( data: Uint8Array ): RestedLockedDragonBeeReturnedInWild { return RestedLockedDragonBeeReturnedInWild.fromFields( RestedLockedDragonBeeReturnedInWild.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,beeVersion: this.beeVersion.toString(),hiveEarned: this.hiveEarned.toString(),honeyEarned: this.honeyEarned.toString(),unlockedAtCycle: this.unlockedAtCycle.toString(),stakedForHoney: this.stakedForHoney.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RestedLockedDragonBeeReturnedInWild { return RestedLockedDragonBeeReturnedInWild.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr), beeVersion: decodeFromJSONField("u64", field.beeVersion), hiveEarned: decodeFromJSONField("u64", field.hiveEarned), honeyEarned: decodeFromJSONField("u64", field.honeyEarned), unlockedAtCycle: decodeFromJSONField("u64", field.unlockedAtCycle), stakedForHoney: decodeFromJSONField("u64", field.stakedForHoney) } ) }

 static fromJSON( json: Record<string, any> ): RestedLockedDragonBeeReturnedInWild { if (json.$typeName !== RestedLockedDragonBeeReturnedInWild.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RestedLockedDragonBeeReturnedInWild.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RestedLockedDragonBeeReturnedInWild { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRestedLockedDragonBeeReturnedInWild(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RestedLockedDragonBeeReturnedInWild object`); } return RestedLockedDragonBeeReturnedInWild.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RestedLockedDragonBeeReturnedInWild { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRestedLockedDragonBeeReturnedInWild(data.bcs.type)) { throw new Error(`object at is not a RestedLockedDragonBeeReturnedInWild object`); }

 return RestedLockedDragonBeeReturnedInWild.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RestedLockedDragonBeeReturnedInWild.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RestedLockedDragonBeeReturnedInWild> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RestedLockedDragonBeeReturnedInWild object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRestedLockedDragonBeeReturnedInWild(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RestedLockedDragonBeeReturnedInWild object`); }

 return RestedLockedDragonBeeReturnedInWild.fromSuiObjectData( res.data ); }

 }

/* ============================== RipeFruitsClaimed =============================== */

export function isRipeFruitsClaimed(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::dragon_food::RipeFruitsClaimed` + '<'); }

export interface RipeFruitsClaimedFields<A extends PhantomTypeArgument> { fruitType: ToField<String1>; trainerAddr: ToField<"address">; userName: ToField<String>; fruitGlobalClaimIndex: ToField<"u256">; earnedFruits: ToField<"u64">; poolHiveAddr: ToField<"address"> }

export type RipeFruitsClaimedReified<A extends PhantomTypeArgument> = Reified< RipeFruitsClaimed<A>, RipeFruitsClaimedFields<A> >;

export class RipeFruitsClaimed<A extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::RipeFruitsClaimed`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = RipeFruitsClaimed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::RipeFruitsClaimed<${PhantomToTypeStr<A>}>`; readonly $typeArgs: [PhantomToTypeStr<A>]; readonly $isPhantom = RipeFruitsClaimed.$isPhantom;

 readonly fruitType: ToField<String1>; readonly trainerAddr: ToField<"address">; readonly userName: ToField<String>; readonly fruitGlobalClaimIndex: ToField<"u256">; readonly earnedFruits: ToField<"u64">; readonly poolHiveAddr: ToField<"address">

 private constructor(typeArgs: [PhantomToTypeStr<A>], fields: RipeFruitsClaimedFields<A>, ) { this.$fullTypeName = composeSuiType( RipeFruitsClaimed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::RipeFruitsClaimed<${PhantomToTypeStr<A>}>`; this.$typeArgs = typeArgs;

 this.fruitType = fields.fruitType;; this.trainerAddr = fields.trainerAddr;; this.userName = fields.userName;; this.fruitGlobalClaimIndex = fields.fruitGlobalClaimIndex;; this.earnedFruits = fields.earnedFruits;; this.poolHiveAddr = fields.poolHiveAddr; }

 static reified<A extends PhantomReified<PhantomTypeArgument>>( A: A ): RipeFruitsClaimedReified<ToPhantomTypeArgument<A>> { return { typeName: RipeFruitsClaimed.$typeName, fullTypeName: composeSuiType( RipeFruitsClaimed.$typeName, ...[extractType(A)] ) as `${typeof PKG_V1}::dragon_food::RipeFruitsClaimed<${PhantomToTypeStr<ToPhantomTypeArgument<A>>}>`, typeArgs: [ extractType(A) ] as [PhantomToTypeStr<ToPhantomTypeArgument<A>>], isPhantom: RipeFruitsClaimed.$isPhantom, reifiedTypeArgs: [A], fromFields: (fields: Record<string, any>) => RipeFruitsClaimed.fromFields( A, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RipeFruitsClaimed.fromFieldsWithTypes( A, item, ), fromBcs: (data: Uint8Array) => RipeFruitsClaimed.fromBcs( A, data, ), bcs: RipeFruitsClaimed.bcs, fromJSONField: (field: any) => RipeFruitsClaimed.fromJSONField( A, field, ), fromJSON: (json: Record<string, any>) => RipeFruitsClaimed.fromJSON( A, json, ), fromSuiParsedData: (content: SuiParsedData) => RipeFruitsClaimed.fromSuiParsedData( A, content, ), fromSuiObjectData: (content: SuiObjectData) => RipeFruitsClaimed.fromSuiObjectData( A, content, ), fetch: async (client: SuiClient, id: string) => RipeFruitsClaimed.fetch( client, A, id, ), new: ( fields: RipeFruitsClaimedFields<ToPhantomTypeArgument<A>>, ) => { return new RipeFruitsClaimed( [extractType(A)], fields ) }, kind: "StructClassReified", } }

 static get r() { return RipeFruitsClaimed.reified }

 static phantom<A extends PhantomReified<PhantomTypeArgument>>( A: A ): PhantomReified<ToTypeStr<RipeFruitsClaimed<ToPhantomTypeArgument<A>>>> { return phantom(RipeFruitsClaimed.reified( A )); } static get p() { return RipeFruitsClaimed.phantom }

 static get bcs() { return bcs.struct("RipeFruitsClaimed", {

 fruit_type: String1.bcs, trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), user_name: String.bcs, fruit_global_claim_index: bcs.u256(), earned_fruits: bcs.u64(), pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, fields: Record<string, any> ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { return RipeFruitsClaimed.reified( typeArg, ).new( { fruitType: decodeFromFields(String1.reified(), fields.fruit_type), trainerAddr: decodeFromFields("address", fields.trainer_addr), userName: decodeFromFields(String.reified(), fields.user_name), fruitGlobalClaimIndex: decodeFromFields("u256", fields.fruit_global_claim_index), earnedFruits: decodeFromFields("u64", fields.earned_fruits), poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr) } ) }

 static fromFieldsWithTypes<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, item: FieldsWithTypes ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { if (!isRipeFruitsClaimed(item.type)) { throw new Error("not a RipeFruitsClaimed type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return RipeFruitsClaimed.reified( typeArg, ).new( { fruitType: decodeFromFieldsWithTypes(String1.reified(), item.fields.fruit_type), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), userName: decodeFromFieldsWithTypes(String.reified(), item.fields.user_name), fruitGlobalClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.fruit_global_claim_index), earnedFruits: decodeFromFieldsWithTypes("u64", item.fields.earned_fruits), poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr) } ) }

 static fromBcs<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, data: Uint8Array ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { return RipeFruitsClaimed.fromFields( typeArg, RipeFruitsClaimed.bcs.parse(data) ) }

 toJSONField() { return {

 fruitType: this.fruitType,trainerAddr: this.trainerAddr,userName: this.userName,fruitGlobalClaimIndex: this.fruitGlobalClaimIndex.toString(),earnedFruits: this.earnedFruits.toString(),poolHiveAddr: this.poolHiveAddr,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, field: any ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { return RipeFruitsClaimed.reified( typeArg, ).new( { fruitType: decodeFromJSONField(String1.reified(), field.fruitType), trainerAddr: decodeFromJSONField("address", field.trainerAddr), userName: decodeFromJSONField(String.reified(), field.userName), fruitGlobalClaimIndex: decodeFromJSONField("u256", field.fruitGlobalClaimIndex), earnedFruits: decodeFromJSONField("u64", field.earnedFruits), poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr) } ) }

 static fromJSON<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, json: Record<string, any> ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { if (json.$typeName !== RipeFruitsClaimed.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(RipeFruitsClaimed.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return RipeFruitsClaimed.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, content: SuiParsedData ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRipeFruitsClaimed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RipeFruitsClaimed object`); } return RipeFruitsClaimed.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<A extends PhantomReified<PhantomTypeArgument>>( typeArg: A, data: SuiObjectData ): RipeFruitsClaimed<ToPhantomTypeArgument<A>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRipeFruitsClaimed(data.bcs.type)) { throw new Error(`object at is not a RipeFruitsClaimed object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return RipeFruitsClaimed.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RipeFruitsClaimed.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<A extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: A, id: string ): Promise<RipeFruitsClaimed<ToPhantomTypeArgument<A>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RipeFruitsClaimed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRipeFruitsClaimed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RipeFruitsClaimed object`); }

 return RipeFruitsClaimed.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== TradingFeeClaimedByTrainer =============================== */

export function isTradingFeeClaimedByTrainer(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::TradingFeeClaimedByTrainer`; }

export interface TradingFeeClaimedByTrainerFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address">; claimedCycles: ToField<Vector<"u64">>; claimedHiveFees: ToField<Vector<"u64">>; claimedHoneyFees: ToField<Vector<"u64">>; hiveFeeBal: ToField<"u64">; honeyFeeBal: ToField<"u64"> }

export type TradingFeeClaimedByTrainerReified = Reified< TradingFeeClaimedByTrainer, TradingFeeClaimedByTrainerFields >;

export class TradingFeeClaimedByTrainer implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::TradingFeeClaimedByTrainer`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TradingFeeClaimedByTrainer.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::TradingFeeClaimedByTrainer`; readonly $typeArgs: []; readonly $isPhantom = TradingFeeClaimedByTrainer.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">; readonly claimedCycles: ToField<Vector<"u64">>; readonly claimedHiveFees: ToField<Vector<"u64">>; readonly claimedHoneyFees: ToField<Vector<"u64">>; readonly hiveFeeBal: ToField<"u64">; readonly honeyFeeBal: ToField<"u64">

 private constructor(typeArgs: [], fields: TradingFeeClaimedByTrainerFields, ) { this.$fullTypeName = composeSuiType( TradingFeeClaimedByTrainer.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::TradingFeeClaimedByTrainer`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr;; this.claimedCycles = fields.claimedCycles;; this.claimedHiveFees = fields.claimedHiveFees;; this.claimedHoneyFees = fields.claimedHoneyFees;; this.hiveFeeBal = fields.hiveFeeBal;; this.honeyFeeBal = fields.honeyFeeBal; }

 static reified( ): TradingFeeClaimedByTrainerReified { return { typeName: TradingFeeClaimedByTrainer.$typeName, fullTypeName: composeSuiType( TradingFeeClaimedByTrainer.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::TradingFeeClaimedByTrainer`, typeArgs: [ ] as [], isPhantom: TradingFeeClaimedByTrainer.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TradingFeeClaimedByTrainer.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TradingFeeClaimedByTrainer.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TradingFeeClaimedByTrainer.fromBcs( data, ), bcs: TradingFeeClaimedByTrainer.bcs, fromJSONField: (field: any) => TradingFeeClaimedByTrainer.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TradingFeeClaimedByTrainer.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TradingFeeClaimedByTrainer.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TradingFeeClaimedByTrainer.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TradingFeeClaimedByTrainer.fetch( client, id, ), new: ( fields: TradingFeeClaimedByTrainerFields, ) => { return new TradingFeeClaimedByTrainer( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TradingFeeClaimedByTrainer.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TradingFeeClaimedByTrainer>> { return phantom(TradingFeeClaimedByTrainer.reified( )); } static get p() { return TradingFeeClaimedByTrainer.phantom() }

 static get bcs() { return bcs.struct("TradingFeeClaimedByTrainer", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), claimed_cycles: bcs.vector(bcs.u64()), claimed_hive_fees: bcs.vector(bcs.u64()), claimed_honey_fees: bcs.vector(bcs.u64()), hive_fee_bal: bcs.u64(), honey_fee_bal: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TradingFeeClaimedByTrainer { return TradingFeeClaimedByTrainer.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr), claimedCycles: decodeFromFields(reified.vector("u64"), fields.claimed_cycles), claimedHiveFees: decodeFromFields(reified.vector("u64"), fields.claimed_hive_fees), claimedHoneyFees: decodeFromFields(reified.vector("u64"), fields.claimed_honey_fees), hiveFeeBal: decodeFromFields("u64", fields.hive_fee_bal), honeyFeeBal: decodeFromFields("u64", fields.honey_fee_bal) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TradingFeeClaimedByTrainer { if (!isTradingFeeClaimedByTrainer(item.type)) { throw new Error("not a TradingFeeClaimedByTrainer type");

 }

 return TradingFeeClaimedByTrainer.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), claimedCycles: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_cycles), claimedHiveFees: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_hive_fees), claimedHoneyFees: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.claimed_honey_fees), hiveFeeBal: decodeFromFieldsWithTypes("u64", item.fields.hive_fee_bal), honeyFeeBal: decodeFromFieldsWithTypes("u64", item.fields.honey_fee_bal) } ) }

 static fromBcs( data: Uint8Array ): TradingFeeClaimedByTrainer { return TradingFeeClaimedByTrainer.fromFields( TradingFeeClaimedByTrainer.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,claimedCycles: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedCycles),claimedHiveFees: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHiveFees),claimedHoneyFees: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.claimedHoneyFees),hiveFeeBal: this.hiveFeeBal.toString(),honeyFeeBal: this.honeyFeeBal.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TradingFeeClaimedByTrainer { return TradingFeeClaimedByTrainer.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr), claimedCycles: decodeFromJSONField(reified.vector("u64"), field.claimedCycles), claimedHiveFees: decodeFromJSONField(reified.vector("u64"), field.claimedHiveFees), claimedHoneyFees: decodeFromJSONField(reified.vector("u64"), field.claimedHoneyFees), hiveFeeBal: decodeFromJSONField("u64", field.hiveFeeBal), honeyFeeBal: decodeFromJSONField("u64", field.honeyFeeBal) } ) }

 static fromJSON( json: Record<string, any> ): TradingFeeClaimedByTrainer { if (json.$typeName !== TradingFeeClaimedByTrainer.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TradingFeeClaimedByTrainer.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TradingFeeClaimedByTrainer { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTradingFeeClaimedByTrainer(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TradingFeeClaimedByTrainer object`); } return TradingFeeClaimedByTrainer.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TradingFeeClaimedByTrainer { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTradingFeeClaimedByTrainer(data.bcs.type)) { throw new Error(`object at is not a TradingFeeClaimedByTrainer object`); }

 return TradingFeeClaimedByTrainer.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TradingFeeClaimedByTrainer.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TradingFeeClaimedByTrainer> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TradingFeeClaimedByTrainer object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTradingFeeClaimedByTrainer(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TradingFeeClaimedByTrainer object`); }

 return TradingFeeClaimedByTrainer.fromSuiObjectData( res.data ); }

 }

/* ============================== TrainerVotedForEmissions =============================== */

export function isTrainerVotedForEmissions(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::TrainerVotedForEmissions`; }

export interface TrainerVotedForEmissionsFields { beeVersion: ToField<"u64">; hiveEnergy: ToField<"u128">; honeyHealth: ToField<"u128">; hiveVoteType: ToField<"u8">; honeyVoteType: ToField<"u8">; daoVoteCycle: ToField<"u64"> }

export type TrainerVotedForEmissionsReified = Reified< TrainerVotedForEmissions, TrainerVotedForEmissionsFields >;

export class TrainerVotedForEmissions implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::TrainerVotedForEmissions`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TrainerVotedForEmissions.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::TrainerVotedForEmissions`; readonly $typeArgs: []; readonly $isPhantom = TrainerVotedForEmissions.$isPhantom;

 readonly beeVersion: ToField<"u64">; readonly hiveEnergy: ToField<"u128">; readonly honeyHealth: ToField<"u128">; readonly hiveVoteType: ToField<"u8">; readonly honeyVoteType: ToField<"u8">; readonly daoVoteCycle: ToField<"u64">

 private constructor(typeArgs: [], fields: TrainerVotedForEmissionsFields, ) { this.$fullTypeName = composeSuiType( TrainerVotedForEmissions.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::TrainerVotedForEmissions`; this.$typeArgs = typeArgs;

 this.beeVersion = fields.beeVersion;; this.hiveEnergy = fields.hiveEnergy;; this.honeyHealth = fields.honeyHealth;; this.hiveVoteType = fields.hiveVoteType;; this.honeyVoteType = fields.honeyVoteType;; this.daoVoteCycle = fields.daoVoteCycle; }

 static reified( ): TrainerVotedForEmissionsReified { return { typeName: TrainerVotedForEmissions.$typeName, fullTypeName: composeSuiType( TrainerVotedForEmissions.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::TrainerVotedForEmissions`, typeArgs: [ ] as [], isPhantom: TrainerVotedForEmissions.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TrainerVotedForEmissions.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TrainerVotedForEmissions.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TrainerVotedForEmissions.fromBcs( data, ), bcs: TrainerVotedForEmissions.bcs, fromJSONField: (field: any) => TrainerVotedForEmissions.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TrainerVotedForEmissions.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TrainerVotedForEmissions.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TrainerVotedForEmissions.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TrainerVotedForEmissions.fetch( client, id, ), new: ( fields: TrainerVotedForEmissionsFields, ) => { return new TrainerVotedForEmissions( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TrainerVotedForEmissions.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TrainerVotedForEmissions>> { return phantom(TrainerVotedForEmissions.reified( )); } static get p() { return TrainerVotedForEmissions.phantom() }

 static get bcs() { return bcs.struct("TrainerVotedForEmissions", {

 bee_version: bcs.u64(), hive_energy: bcs.u128(), honey_health: bcs.u128(), hive_vote_type: bcs.u8(), honey_vote_type: bcs.u8(), dao_vote_cycle: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TrainerVotedForEmissions { return TrainerVotedForEmissions.reified( ).new( { beeVersion: decodeFromFields("u64", fields.bee_version), hiveEnergy: decodeFromFields("u128", fields.hive_energy), honeyHealth: decodeFromFields("u128", fields.honey_health), hiveVoteType: decodeFromFields("u8", fields.hive_vote_type), honeyVoteType: decodeFromFields("u8", fields.honey_vote_type), daoVoteCycle: decodeFromFields("u64", fields.dao_vote_cycle) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TrainerVotedForEmissions { if (!isTrainerVotedForEmissions(item.type)) { throw new Error("not a TrainerVotedForEmissions type");

 }

 return TrainerVotedForEmissions.reified( ).new( { beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), hiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.hive_energy), honeyHealth: decodeFromFieldsWithTypes("u128", item.fields.honey_health), hiveVoteType: decodeFromFieldsWithTypes("u8", item.fields.hive_vote_type), honeyVoteType: decodeFromFieldsWithTypes("u8", item.fields.honey_vote_type), daoVoteCycle: decodeFromFieldsWithTypes("u64", item.fields.dao_vote_cycle) } ) }

 static fromBcs( data: Uint8Array ): TrainerVotedForEmissions { return TrainerVotedForEmissions.fromFields( TrainerVotedForEmissions.bcs.parse(data) ) }

 toJSONField() { return {

 beeVersion: this.beeVersion.toString(),hiveEnergy: this.hiveEnergy.toString(),honeyHealth: this.honeyHealth.toString(),hiveVoteType: this.hiveVoteType,honeyVoteType: this.honeyVoteType,daoVoteCycle: this.daoVoteCycle.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TrainerVotedForEmissions { return TrainerVotedForEmissions.reified( ).new( { beeVersion: decodeFromJSONField("u64", field.beeVersion), hiveEnergy: decodeFromJSONField("u128", field.hiveEnergy), honeyHealth: decodeFromJSONField("u128", field.honeyHealth), hiveVoteType: decodeFromJSONField("u8", field.hiveVoteType), honeyVoteType: decodeFromJSONField("u8", field.honeyVoteType), daoVoteCycle: decodeFromJSONField("u64", field.daoVoteCycle) } ) }

 static fromJSON( json: Record<string, any> ): TrainerVotedForEmissions { if (json.$typeName !== TrainerVotedForEmissions.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TrainerVotedForEmissions.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TrainerVotedForEmissions { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTrainerVotedForEmissions(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TrainerVotedForEmissions object`); } return TrainerVotedForEmissions.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TrainerVotedForEmissions { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTrainerVotedForEmissions(data.bcs.type)) { throw new Error(`object at is not a TrainerVotedForEmissions object`); }

 return TrainerVotedForEmissions.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TrainerVotedForEmissions.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TrainerVotedForEmissions> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TrainerVotedForEmissions object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTrainerVotedForEmissions(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TrainerVotedForEmissions object`); }

 return TrainerVotedForEmissions.fromSuiObjectData( res.data ); }

 }

/* ============================== UnbondingFromDragonDen =============================== */

export function isUnbondingFromDragonDen(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::UnbondingFromDragonDen`; }

export interface UnbondingFromDragonDenFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address">; isDragonBeeLocked: ToField<"bool">; lpBalanceUnbonded: ToField<"u64">; hiveEarned: ToField<"u64">; honeyEarned: ToField<"u64">; hiveClaimIndex: ToField<"u256">; honeyClaimIndex: ToField<"u256"> }

export type UnbondingFromDragonDenReified = Reified< UnbondingFromDragonDen, UnbondingFromDragonDenFields >;

export class UnbondingFromDragonDen implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::UnbondingFromDragonDen`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UnbondingFromDragonDen.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::UnbondingFromDragonDen`; readonly $typeArgs: []; readonly $isPhantom = UnbondingFromDragonDen.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">; readonly isDragonBeeLocked: ToField<"bool">; readonly lpBalanceUnbonded: ToField<"u64">; readonly hiveEarned: ToField<"u64">; readonly honeyEarned: ToField<"u64">; readonly hiveClaimIndex: ToField<"u256">; readonly honeyClaimIndex: ToField<"u256">

 private constructor(typeArgs: [], fields: UnbondingFromDragonDenFields, ) { this.$fullTypeName = composeSuiType( UnbondingFromDragonDen.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::UnbondingFromDragonDen`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr;; this.isDragonBeeLocked = fields.isDragonBeeLocked;; this.lpBalanceUnbonded = fields.lpBalanceUnbonded;; this.hiveEarned = fields.hiveEarned;; this.honeyEarned = fields.honeyEarned;; this.hiveClaimIndex = fields.hiveClaimIndex;; this.honeyClaimIndex = fields.honeyClaimIndex; }

 static reified( ): UnbondingFromDragonDenReified { return { typeName: UnbondingFromDragonDen.$typeName, fullTypeName: composeSuiType( UnbondingFromDragonDen.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::UnbondingFromDragonDen`, typeArgs: [ ] as [], isPhantom: UnbondingFromDragonDen.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UnbondingFromDragonDen.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnbondingFromDragonDen.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UnbondingFromDragonDen.fromBcs( data, ), bcs: UnbondingFromDragonDen.bcs, fromJSONField: (field: any) => UnbondingFromDragonDen.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UnbondingFromDragonDen.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UnbondingFromDragonDen.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UnbondingFromDragonDen.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UnbondingFromDragonDen.fetch( client, id, ), new: ( fields: UnbondingFromDragonDenFields, ) => { return new UnbondingFromDragonDen( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnbondingFromDragonDen.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UnbondingFromDragonDen>> { return phantom(UnbondingFromDragonDen.reified( )); } static get p() { return UnbondingFromDragonDen.phantom() }

 static get bcs() { return bcs.struct("UnbondingFromDragonDen", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), is_dragon_bee_locked: bcs.bool(), lp_balance_unbonded: bcs.u64(), hive_earned: bcs.u64(), honey_earned: bcs.u64(), hive_claim_index: bcs.u256(), honey_claim_index: bcs.u256()

}) };

 static fromFields( fields: Record<string, any> ): UnbondingFromDragonDen { return UnbondingFromDragonDen.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr), isDragonBeeLocked: decodeFromFields("bool", fields.is_dragon_bee_locked), lpBalanceUnbonded: decodeFromFields("u64", fields.lp_balance_unbonded), hiveEarned: decodeFromFields("u64", fields.hive_earned), honeyEarned: decodeFromFields("u64", fields.honey_earned), hiveClaimIndex: decodeFromFields("u256", fields.hive_claim_index), honeyClaimIndex: decodeFromFields("u256", fields.honey_claim_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UnbondingFromDragonDen { if (!isUnbondingFromDragonDen(item.type)) { throw new Error("not a UnbondingFromDragonDen type");

 }

 return UnbondingFromDragonDen.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), isDragonBeeLocked: decodeFromFieldsWithTypes("bool", item.fields.is_dragon_bee_locked), lpBalanceUnbonded: decodeFromFieldsWithTypes("u64", item.fields.lp_balance_unbonded), hiveEarned: decodeFromFieldsWithTypes("u64", item.fields.hive_earned), honeyEarned: decodeFromFieldsWithTypes("u64", item.fields.honey_earned), hiveClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.hive_claim_index), honeyClaimIndex: decodeFromFieldsWithTypes("u256", item.fields.honey_claim_index) } ) }

 static fromBcs( data: Uint8Array ): UnbondingFromDragonDen { return UnbondingFromDragonDen.fromFields( UnbondingFromDragonDen.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,isDragonBeeLocked: this.isDragonBeeLocked,lpBalanceUnbonded: this.lpBalanceUnbonded.toString(),hiveEarned: this.hiveEarned.toString(),honeyEarned: this.honeyEarned.toString(),hiveClaimIndex: this.hiveClaimIndex.toString(),honeyClaimIndex: this.honeyClaimIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UnbondingFromDragonDen { return UnbondingFromDragonDen.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr), isDragonBeeLocked: decodeFromJSONField("bool", field.isDragonBeeLocked), lpBalanceUnbonded: decodeFromJSONField("u64", field.lpBalanceUnbonded), hiveEarned: decodeFromJSONField("u64", field.hiveEarned), honeyEarned: decodeFromJSONField("u64", field.honeyEarned), hiveClaimIndex: decodeFromJSONField("u256", field.hiveClaimIndex), honeyClaimIndex: decodeFromJSONField("u256", field.honeyClaimIndex) } ) }

 static fromJSON( json: Record<string, any> ): UnbondingFromDragonDen { if (json.$typeName !== UnbondingFromDragonDen.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UnbondingFromDragonDen.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UnbondingFromDragonDen { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnbondingFromDragonDen(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnbondingFromDragonDen object`); } return UnbondingFromDragonDen.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UnbondingFromDragonDen { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUnbondingFromDragonDen(data.bcs.type)) { throw new Error(`object at is not a UnbondingFromDragonDen object`); }

 return UnbondingFromDragonDen.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UnbondingFromDragonDen.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UnbondingFromDragonDen> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnbondingFromDragonDen object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnbondingFromDragonDen(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnbondingFromDragonDen object`); }

 return UnbondingFromDragonDen.fromSuiObjectData( res.data ); }

 }

/* ============================== UnlockedLP =============================== */

export function isUnlockedLP(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::UnlockedLP`; }

export interface UnlockedLPFields { poolHiveAddr: ToField<"address">; trainerAddr: ToField<"address"> }

export type UnlockedLPReified = Reified< UnlockedLP, UnlockedLPFields >;

export class UnlockedLP implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::UnlockedLP`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UnlockedLP.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::UnlockedLP`; readonly $typeArgs: []; readonly $isPhantom = UnlockedLP.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly trainerAddr: ToField<"address">

 private constructor(typeArgs: [], fields: UnlockedLPFields, ) { this.$fullTypeName = composeSuiType( UnlockedLP.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::UnlockedLP`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.trainerAddr = fields.trainerAddr; }

 static reified( ): UnlockedLPReified { return { typeName: UnlockedLP.$typeName, fullTypeName: composeSuiType( UnlockedLP.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::UnlockedLP`, typeArgs: [ ] as [], isPhantom: UnlockedLP.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UnlockedLP.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnlockedLP.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UnlockedLP.fromBcs( data, ), bcs: UnlockedLP.bcs, fromJSONField: (field: any) => UnlockedLP.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UnlockedLP.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UnlockedLP.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UnlockedLP.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UnlockedLP.fetch( client, id, ), new: ( fields: UnlockedLPFields, ) => { return new UnlockedLP( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnlockedLP.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UnlockedLP>> { return phantom(UnlockedLP.reified( )); } static get p() { return UnlockedLP.phantom() }

 static get bcs() { return bcs.struct("UnlockedLP", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): UnlockedLP { return UnlockedLP.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), trainerAddr: decodeFromFields("address", fields.trainer_addr) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UnlockedLP { if (!isUnlockedLP(item.type)) { throw new Error("not a UnlockedLP type");

 }

 return UnlockedLP.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr) } ) }

 static fromBcs( data: Uint8Array ): UnlockedLP { return UnlockedLP.fromFields( UnlockedLP.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,trainerAddr: this.trainerAddr,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UnlockedLP { return UnlockedLP.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), trainerAddr: decodeFromJSONField("address", field.trainerAddr) } ) }

 static fromJSON( json: Record<string, any> ): UnlockedLP { if (json.$typeName !== UnlockedLP.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UnlockedLP.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UnlockedLP { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnlockedLP(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnlockedLP object`); } return UnlockedLP.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UnlockedLP { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUnlockedLP(data.bcs.type)) { throw new Error(`object at is not a UnlockedLP object`); }

 return UnlockedLP.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UnlockedLP.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UnlockedLP> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnlockedLP object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnlockedLP(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnlockedLP object`); }

 return UnlockedLP.fromSuiObjectData( res.data ); }

 }

/* ============================== Vote =============================== */

export function isVote(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::Vote`; }

export interface VoteFields { vote: ToField<"bool">; stakedAmt: ToField<"u64"> }

export type VoteReified = Reified< Vote, VoteFields >;

export class Vote implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::Vote`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Vote.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::Vote`; readonly $typeArgs: []; readonly $isPhantom = Vote.$isPhantom;

 readonly vote: ToField<"bool">; readonly stakedAmt: ToField<"u64">

 private constructor(typeArgs: [], fields: VoteFields, ) { this.$fullTypeName = composeSuiType( Vote.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::Vote`; this.$typeArgs = typeArgs;

 this.vote = fields.vote;; this.stakedAmt = fields.stakedAmt; }

 static reified( ): VoteReified { return { typeName: Vote.$typeName, fullTypeName: composeSuiType( Vote.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::Vote`, typeArgs: [ ] as [], isPhantom: Vote.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Vote.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Vote.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Vote.fromBcs( data, ), bcs: Vote.bcs, fromJSONField: (field: any) => Vote.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Vote.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Vote.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Vote.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Vote.fetch( client, id, ), new: ( fields: VoteFields, ) => { return new Vote( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Vote.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Vote>> { return phantom(Vote.reified( )); } static get p() { return Vote.phantom() }

 static get bcs() { return bcs.struct("Vote", {

 vote: bcs.bool(), staked_amt: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Vote { return Vote.reified( ).new( { vote: decodeFromFields("bool", fields.vote), stakedAmt: decodeFromFields("u64", fields.staked_amt) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Vote { if (!isVote(item.type)) { throw new Error("not a Vote type");

 }

 return Vote.reified( ).new( { vote: decodeFromFieldsWithTypes("bool", item.fields.vote), stakedAmt: decodeFromFieldsWithTypes("u64", item.fields.staked_amt) } ) }

 static fromBcs( data: Uint8Array ): Vote { return Vote.fromFields( Vote.bcs.parse(data) ) }

 toJSONField() { return {

 vote: this.vote,stakedAmt: this.stakedAmt.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Vote { return Vote.reified( ).new( { vote: decodeFromJSONField("bool", field.vote), stakedAmt: decodeFromJSONField("u64", field.stakedAmt) } ) }

 static fromJSON( json: Record<string, any> ): Vote { if (json.$typeName !== Vote.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Vote.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Vote { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVote(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Vote object`); } return Vote.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Vote { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVote(data.bcs.type)) { throw new Error(`object at is not a Vote object`); }

 return Vote.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Vote.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Vote> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Vote object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVote(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Vote object`); }

 return Vote.fromSuiObjectData( res.data ); }

 }

/* ============================== VoteCasted =============================== */

export function isVoteCasted(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::VoteCasted`; }

export interface VoteCastedFields { poolHiveAddr: ToField<"address">; proposalId: ToField<"u64">; voter: ToField<String>; voterTrainer: ToField<"address">; vote: ToField<"bool">; stakedAmt: ToField<"u64">; yesVotes: ToField<"u64">; noVotes: ToField<"u64">; totalStaked: ToField<"u64"> }

export type VoteCastedReified = Reified< VoteCasted, VoteCastedFields >;

export class VoteCasted implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::VoteCasted`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = VoteCasted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::VoteCasted`; readonly $typeArgs: []; readonly $isPhantom = VoteCasted.$isPhantom;

 readonly poolHiveAddr: ToField<"address">; readonly proposalId: ToField<"u64">; readonly voter: ToField<String>; readonly voterTrainer: ToField<"address">; readonly vote: ToField<"bool">; readonly stakedAmt: ToField<"u64">; readonly yesVotes: ToField<"u64">; readonly noVotes: ToField<"u64">; readonly totalStaked: ToField<"u64">

 private constructor(typeArgs: [], fields: VoteCastedFields, ) { this.$fullTypeName = composeSuiType( VoteCasted.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::VoteCasted`; this.$typeArgs = typeArgs;

 this.poolHiveAddr = fields.poolHiveAddr;; this.proposalId = fields.proposalId;; this.voter = fields.voter;; this.voterTrainer = fields.voterTrainer;; this.vote = fields.vote;; this.stakedAmt = fields.stakedAmt;; this.yesVotes = fields.yesVotes;; this.noVotes = fields.noVotes;; this.totalStaked = fields.totalStaked; }

 static reified( ): VoteCastedReified { return { typeName: VoteCasted.$typeName, fullTypeName: composeSuiType( VoteCasted.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::VoteCasted`, typeArgs: [ ] as [], isPhantom: VoteCasted.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VoteCasted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VoteCasted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VoteCasted.fromBcs( data, ), bcs: VoteCasted.bcs, fromJSONField: (field: any) => VoteCasted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VoteCasted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VoteCasted.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => VoteCasted.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => VoteCasted.fetch( client, id, ), new: ( fields: VoteCastedFields, ) => { return new VoteCasted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VoteCasted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VoteCasted>> { return phantom(VoteCasted.reified( )); } static get p() { return VoteCasted.phantom() }

 static get bcs() { return bcs.struct("VoteCasted", {

 pool_hive_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), proposal_id: bcs.u64(), voter: String.bcs, voter_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), vote: bcs.bool(), staked_amt: bcs.u64(), yes_votes: bcs.u64(), no_votes: bcs.u64(), total_staked: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): VoteCasted { return VoteCasted.reified( ).new( { poolHiveAddr: decodeFromFields("address", fields.pool_hive_addr), proposalId: decodeFromFields("u64", fields.proposal_id), voter: decodeFromFields(String.reified(), fields.voter), voterTrainer: decodeFromFields("address", fields.voter_trainer), vote: decodeFromFields("bool", fields.vote), stakedAmt: decodeFromFields("u64", fields.staked_amt), yesVotes: decodeFromFields("u64", fields.yes_votes), noVotes: decodeFromFields("u64", fields.no_votes), totalStaked: decodeFromFields("u64", fields.total_staked) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VoteCasted { if (!isVoteCasted(item.type)) { throw new Error("not a VoteCasted type");

 }

 return VoteCasted.reified( ).new( { poolHiveAddr: decodeFromFieldsWithTypes("address", item.fields.pool_hive_addr), proposalId: decodeFromFieldsWithTypes("u64", item.fields.proposal_id), voter: decodeFromFieldsWithTypes(String.reified(), item.fields.voter), voterTrainer: decodeFromFieldsWithTypes("address", item.fields.voter_trainer), vote: decodeFromFieldsWithTypes("bool", item.fields.vote), stakedAmt: decodeFromFieldsWithTypes("u64", item.fields.staked_amt), yesVotes: decodeFromFieldsWithTypes("u64", item.fields.yes_votes), noVotes: decodeFromFieldsWithTypes("u64", item.fields.no_votes), totalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_staked) } ) }

 static fromBcs( data: Uint8Array ): VoteCasted { return VoteCasted.fromFields( VoteCasted.bcs.parse(data) ) }

 toJSONField() { return {

 poolHiveAddr: this.poolHiveAddr,proposalId: this.proposalId.toString(),voter: this.voter,voterTrainer: this.voterTrainer,vote: this.vote,stakedAmt: this.stakedAmt.toString(),yesVotes: this.yesVotes.toString(),noVotes: this.noVotes.toString(),totalStaked: this.totalStaked.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VoteCasted { return VoteCasted.reified( ).new( { poolHiveAddr: decodeFromJSONField("address", field.poolHiveAddr), proposalId: decodeFromJSONField("u64", field.proposalId), voter: decodeFromJSONField(String.reified(), field.voter), voterTrainer: decodeFromJSONField("address", field.voterTrainer), vote: decodeFromJSONField("bool", field.vote), stakedAmt: decodeFromJSONField("u64", field.stakedAmt), yesVotes: decodeFromJSONField("u64", field.yesVotes), noVotes: decodeFromJSONField("u64", field.noVotes), totalStaked: decodeFromJSONField("u64", field.totalStaked) } ) }

 static fromJSON( json: Record<string, any> ): VoteCasted { if (json.$typeName !== VoteCasted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VoteCasted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VoteCasted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVoteCasted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VoteCasted object`); } return VoteCasted.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): VoteCasted { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVoteCasted(data.bcs.type)) { throw new Error(`object at is not a VoteCasted object`); }

 return VoteCasted.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VoteCasted.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<VoteCasted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VoteCasted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVoteCasted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VoteCasted object`); }

 return VoteCasted.fromSuiObjectData( res.data ); }

 }

/* ============================== VoteConfig =============================== */

export function isVoteConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::VoteConfig`; }

export interface VoteConfigFields { proposalRequiredDeposit: ToField<"u64">; votingStartDelay: ToField<"u64">; votingPeriodLength: ToField<"u64">; executionDelay: ToField<"u64">; executionPeriodLength: ToField<"u64">; proposalRequiredQuorum: ToField<"u64">; proposalApprovalThreshold: ToField<"u64"> }

export type VoteConfigReified = Reified< VoteConfig, VoteConfigFields >;

export class VoteConfig implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::VoteConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = VoteConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::VoteConfig`; readonly $typeArgs: []; readonly $isPhantom = VoteConfig.$isPhantom;

 readonly proposalRequiredDeposit: ToField<"u64">; readonly votingStartDelay: ToField<"u64">; readonly votingPeriodLength: ToField<"u64">; readonly executionDelay: ToField<"u64">; readonly executionPeriodLength: ToField<"u64">; readonly proposalRequiredQuorum: ToField<"u64">; readonly proposalApprovalThreshold: ToField<"u64">

 private constructor(typeArgs: [], fields: VoteConfigFields, ) { this.$fullTypeName = composeSuiType( VoteConfig.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::VoteConfig`; this.$typeArgs = typeArgs;

 this.proposalRequiredDeposit = fields.proposalRequiredDeposit;; this.votingStartDelay = fields.votingStartDelay;; this.votingPeriodLength = fields.votingPeriodLength;; this.executionDelay = fields.executionDelay;; this.executionPeriodLength = fields.executionPeriodLength;; this.proposalRequiredQuorum = fields.proposalRequiredQuorum;; this.proposalApprovalThreshold = fields.proposalApprovalThreshold; }

 static reified( ): VoteConfigReified { return { typeName: VoteConfig.$typeName, fullTypeName: composeSuiType( VoteConfig.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::VoteConfig`, typeArgs: [ ] as [], isPhantom: VoteConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VoteConfig.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VoteConfig.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VoteConfig.fromBcs( data, ), bcs: VoteConfig.bcs, fromJSONField: (field: any) => VoteConfig.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VoteConfig.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VoteConfig.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => VoteConfig.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => VoteConfig.fetch( client, id, ), new: ( fields: VoteConfigFields, ) => { return new VoteConfig( [], fields ) }, kind: "StructClassReified", } }

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

 static fromSuiObjectData( data: SuiObjectData ): VoteConfig { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVoteConfig(data.bcs.type)) { throw new Error(`object at is not a VoteConfig object`); }

 return VoteConfig.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VoteConfig.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<VoteConfig> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VoteConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVoteConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VoteConfig object`); }

 return VoteConfig.fromSuiObjectData( res.data ); }

 }

/* ============================== VotingBribes =============================== */

export function isVotingBribes(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::dragon_food::VotingBribes` + '<'); }

export interface VotingBribesFields<X extends PhantomTypeArgument> { id: ToField<UID>; bribe: ToField<Balance<X>>; cycleToHiveBribesMap: ToField<LinkedTable<"u64", "u64">>; cycleToHoneyBribesMap: ToField<LinkedTable<"u64", "u64">> }

export type VotingBribesReified<X extends PhantomTypeArgument> = Reified< VotingBribes<X>, VotingBribesFields<X> >;

export class VotingBribes<X extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::VotingBribes`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = VotingBribes.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::VotingBribes<${PhantomToTypeStr<X>}>`; readonly $typeArgs: [PhantomToTypeStr<X>]; readonly $isPhantom = VotingBribes.$isPhantom;

 readonly id: ToField<UID>; readonly bribe: ToField<Balance<X>>; readonly cycleToHiveBribesMap: ToField<LinkedTable<"u64", "u64">>; readonly cycleToHoneyBribesMap: ToField<LinkedTable<"u64", "u64">>

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: VotingBribesFields<X>, ) { this.$fullTypeName = composeSuiType( VotingBribes.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::VotingBribes<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.bribe = fields.bribe;; this.cycleToHiveBribesMap = fields.cycleToHiveBribesMap;; this.cycleToHoneyBribesMap = fields.cycleToHoneyBribesMap; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): VotingBribesReified<ToPhantomTypeArgument<X>> { return { typeName: VotingBribes.$typeName, fullTypeName: composeSuiType( VotingBribes.$typeName, ...[extractType(X)] ) as `${typeof PKG_V1}::dragon_food::VotingBribes<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], isPhantom: VotingBribes.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => VotingBribes.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VotingBribes.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => VotingBribes.fromBcs( X, data, ), bcs: VotingBribes.bcs, fromJSONField: (field: any) => VotingBribes.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => VotingBribes.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => VotingBribes.fromSuiParsedData( X, content, ), fromSuiObjectData: (content: SuiObjectData) => VotingBribes.fromSuiObjectData( X, content, ), fetch: async (client: SuiClient, id: string) => VotingBribes.fetch( client, X, id, ), new: ( fields: VotingBribesFields<ToPhantomTypeArgument<X>>, ) => { return new VotingBribes( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return VotingBribes.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<VotingBribes<ToPhantomTypeArgument<X>>>> { return phantom(VotingBribes.reified( X )); } static get p() { return VotingBribes.phantom }

 static get bcs() { return bcs.struct("VotingBribes", {

 id: UID.bcs, bribe: Balance.bcs, cycle_to_hive_bribes_map: LinkedTable.bcs(bcs.u64()), cycle_to_honey_bribes_map: LinkedTable.bcs(bcs.u64())

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): VotingBribes<ToPhantomTypeArgument<X>> { return VotingBribes.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), bribe: decodeFromFields(Balance.reified(typeArg), fields.bribe), cycleToHiveBribesMap: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u64")), fields.cycle_to_hive_bribes_map), cycleToHoneyBribesMap: decodeFromFields(LinkedTable.reified("u64", reified.phantom("u64")), fields.cycle_to_honey_bribes_map) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): VotingBribes<ToPhantomTypeArgument<X>> { if (!isVotingBribes(item.type)) { throw new Error("not a VotingBribes type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return VotingBribes.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), bribe: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.bribe), cycleToHiveBribesMap: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u64")), item.fields.cycle_to_hive_bribes_map), cycleToHoneyBribesMap: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom("u64")), item.fields.cycle_to_honey_bribes_map) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): VotingBribes<ToPhantomTypeArgument<X>> { return VotingBribes.fromFields( typeArg, VotingBribes.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,bribe: this.bribe.toJSONField(),cycleToHiveBribesMap: this.cycleToHiveBribesMap.toJSONField(),cycleToHoneyBribesMap: this.cycleToHoneyBribesMap.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): VotingBribes<ToPhantomTypeArgument<X>> { return VotingBribes.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), bribe: decodeFromJSONField(Balance.reified(typeArg), field.bribe), cycleToHiveBribesMap: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u64")), field.cycleToHiveBribesMap), cycleToHoneyBribesMap: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom("u64")), field.cycleToHoneyBribesMap) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): VotingBribes<ToPhantomTypeArgument<X>> { if (json.$typeName !== VotingBribes.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(VotingBribes.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return VotingBribes.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): VotingBribes<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVotingBribes(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VotingBribes object`); } return VotingBribes.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: SuiObjectData ): VotingBribes<ToPhantomTypeArgument<X>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVotingBribes(data.bcs.type)) { throw new Error(`object at is not a VotingBribes object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return VotingBribes.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VotingBribes.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<VotingBribes<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VotingBribes object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVotingBribes(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VotingBribes object`); }

 return VotingBribes.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== VotingPowerIncreasedForLockedBee =============================== */

export function isVotingPowerIncreasedForLockedBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dragon_food::VotingPowerIncreasedForLockedBee`; }

export interface VotingPowerIncreasedForLockedBeeFields { beeVersion: ToField<"u64">; hiveEnergy: ToField<"u128">; honeyHealth: ToField<"u128"> }

export type VotingPowerIncreasedForLockedBeeReified = Reified< VotingPowerIncreasedForLockedBee, VotingPowerIncreasedForLockedBeeFields >;

export class VotingPowerIncreasedForLockedBee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dragon_food::VotingPowerIncreasedForLockedBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = VotingPowerIncreasedForLockedBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dragon_food::VotingPowerIncreasedForLockedBee`; readonly $typeArgs: []; readonly $isPhantom = VotingPowerIncreasedForLockedBee.$isPhantom;

 readonly beeVersion: ToField<"u64">; readonly hiveEnergy: ToField<"u128">; readonly honeyHealth: ToField<"u128">

 private constructor(typeArgs: [], fields: VotingPowerIncreasedForLockedBeeFields, ) { this.$fullTypeName = composeSuiType( VotingPowerIncreasedForLockedBee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dragon_food::VotingPowerIncreasedForLockedBee`; this.$typeArgs = typeArgs;

 this.beeVersion = fields.beeVersion;; this.hiveEnergy = fields.hiveEnergy;; this.honeyHealth = fields.honeyHealth; }

 static reified( ): VotingPowerIncreasedForLockedBeeReified { return { typeName: VotingPowerIncreasedForLockedBee.$typeName, fullTypeName: composeSuiType( VotingPowerIncreasedForLockedBee.$typeName, ...[] ) as `${typeof PKG_V1}::dragon_food::VotingPowerIncreasedForLockedBee`, typeArgs: [ ] as [], isPhantom: VotingPowerIncreasedForLockedBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VotingPowerIncreasedForLockedBee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VotingPowerIncreasedForLockedBee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VotingPowerIncreasedForLockedBee.fromBcs( data, ), bcs: VotingPowerIncreasedForLockedBee.bcs, fromJSONField: (field: any) => VotingPowerIncreasedForLockedBee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VotingPowerIncreasedForLockedBee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VotingPowerIncreasedForLockedBee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => VotingPowerIncreasedForLockedBee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => VotingPowerIncreasedForLockedBee.fetch( client, id, ), new: ( fields: VotingPowerIncreasedForLockedBeeFields, ) => { return new VotingPowerIncreasedForLockedBee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VotingPowerIncreasedForLockedBee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VotingPowerIncreasedForLockedBee>> { return phantom(VotingPowerIncreasedForLockedBee.reified( )); } static get p() { return VotingPowerIncreasedForLockedBee.phantom() }

 static get bcs() { return bcs.struct("VotingPowerIncreasedForLockedBee", {

 bee_version: bcs.u64(), hive_energy: bcs.u128(), honey_health: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): VotingPowerIncreasedForLockedBee { return VotingPowerIncreasedForLockedBee.reified( ).new( { beeVersion: decodeFromFields("u64", fields.bee_version), hiveEnergy: decodeFromFields("u128", fields.hive_energy), honeyHealth: decodeFromFields("u128", fields.honey_health) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VotingPowerIncreasedForLockedBee { if (!isVotingPowerIncreasedForLockedBee(item.type)) { throw new Error("not a VotingPowerIncreasedForLockedBee type");

 }

 return VotingPowerIncreasedForLockedBee.reified( ).new( { beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), hiveEnergy: decodeFromFieldsWithTypes("u128", item.fields.hive_energy), honeyHealth: decodeFromFieldsWithTypes("u128", item.fields.honey_health) } ) }

 static fromBcs( data: Uint8Array ): VotingPowerIncreasedForLockedBee { return VotingPowerIncreasedForLockedBee.fromFields( VotingPowerIncreasedForLockedBee.bcs.parse(data) ) }

 toJSONField() { return {

 beeVersion: this.beeVersion.toString(),hiveEnergy: this.hiveEnergy.toString(),honeyHealth: this.honeyHealth.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VotingPowerIncreasedForLockedBee { return VotingPowerIncreasedForLockedBee.reified( ).new( { beeVersion: decodeFromJSONField("u64", field.beeVersion), hiveEnergy: decodeFromJSONField("u128", field.hiveEnergy), honeyHealth: decodeFromJSONField("u128", field.honeyHealth) } ) }

 static fromJSON( json: Record<string, any> ): VotingPowerIncreasedForLockedBee { if (json.$typeName !== VotingPowerIncreasedForLockedBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VotingPowerIncreasedForLockedBee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VotingPowerIncreasedForLockedBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVotingPowerIncreasedForLockedBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VotingPowerIncreasedForLockedBee object`); } return VotingPowerIncreasedForLockedBee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): VotingPowerIncreasedForLockedBee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVotingPowerIncreasedForLockedBee(data.bcs.type)) { throw new Error(`object at is not a VotingPowerIncreasedForLockedBee object`); }

 return VotingPowerIncreasedForLockedBee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VotingPowerIncreasedForLockedBee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<VotingPowerIncreasedForLockedBee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VotingPowerIncreasedForLockedBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVotingPowerIncreasedForLockedBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VotingPowerIncreasedForLockedBee object`); }

 return VotingPowerIncreasedForLockedBee.fromSuiObjectData( res.data ); }

 }
