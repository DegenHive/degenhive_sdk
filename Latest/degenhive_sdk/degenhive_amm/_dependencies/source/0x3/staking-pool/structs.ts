import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {Option} from "../../0x1/option/structs";
import {Bag} from "../../0x2/bag/structs";
import {Balance} from "../../0x2/balance/structs";
import {ID, UID} from "../../0x2/object/structs";
import {SUI} from "../../0x2/sui/structs";
import {Table} from "../../0x2/table/structs";
import {PKG_V10} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== PoolTokenExchangeRate =============================== */

export function isPoolTokenExchangeRate(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V10}::staking_pool::PoolTokenExchangeRate`; }

export interface PoolTokenExchangeRateFields { suiAmount: ToField<"u64">; poolTokenAmount: ToField<"u64"> }

export type PoolTokenExchangeRateReified = Reified< PoolTokenExchangeRate, PoolTokenExchangeRateFields >;

export class PoolTokenExchangeRate implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V10}::staking_pool::PoolTokenExchangeRate`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PoolTokenExchangeRate.$typeName; readonly $fullTypeName: `${typeof PKG_V10}::staking_pool::PoolTokenExchangeRate`; readonly $typeArgs: []; readonly $isPhantom = PoolTokenExchangeRate.$isPhantom;

 readonly suiAmount: ToField<"u64">; readonly poolTokenAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: PoolTokenExchangeRateFields, ) { this.$fullTypeName = composeSuiType( PoolTokenExchangeRate.$typeName, ...typeArgs ) as `${typeof PKG_V10}::staking_pool::PoolTokenExchangeRate`; this.$typeArgs = typeArgs;

 this.suiAmount = fields.suiAmount;; this.poolTokenAmount = fields.poolTokenAmount; }

 static reified( ): PoolTokenExchangeRateReified { return { typeName: PoolTokenExchangeRate.$typeName, fullTypeName: composeSuiType( PoolTokenExchangeRate.$typeName, ...[] ) as `${typeof PKG_V10}::staking_pool::PoolTokenExchangeRate`, typeArgs: [ ] as [], isPhantom: PoolTokenExchangeRate.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolTokenExchangeRate.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolTokenExchangeRate.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolTokenExchangeRate.fromBcs( data, ), bcs: PoolTokenExchangeRate.bcs, fromJSONField: (field: any) => PoolTokenExchangeRate.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolTokenExchangeRate.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolTokenExchangeRate.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PoolTokenExchangeRate.fetch( client, id, ), new: ( fields: PoolTokenExchangeRateFields, ) => { return new PoolTokenExchangeRate( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolTokenExchangeRate.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolTokenExchangeRate>> { return phantom(PoolTokenExchangeRate.reified( )); } static get p() { return PoolTokenExchangeRate.phantom() }

 static get bcs() { return bcs.struct("PoolTokenExchangeRate", {

 sui_amount: bcs.u64(), pool_token_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PoolTokenExchangeRate { return PoolTokenExchangeRate.reified( ).new( { suiAmount: decodeFromFields("u64", fields.sui_amount), poolTokenAmount: decodeFromFields("u64", fields.pool_token_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolTokenExchangeRate { if (!isPoolTokenExchangeRate(item.type)) { throw new Error("not a PoolTokenExchangeRate type");

 }

 return PoolTokenExchangeRate.reified( ).new( { suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount), poolTokenAmount: decodeFromFieldsWithTypes("u64", item.fields.pool_token_amount) } ) }

 static fromBcs( data: Uint8Array ): PoolTokenExchangeRate { return PoolTokenExchangeRate.fromFields( PoolTokenExchangeRate.bcs.parse(data) ) }

 toJSONField() { return {

 suiAmount: this.suiAmount.toString(),poolTokenAmount: this.poolTokenAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolTokenExchangeRate { return PoolTokenExchangeRate.reified( ).new( { suiAmount: decodeFromJSONField("u64", field.suiAmount), poolTokenAmount: decodeFromJSONField("u64", field.poolTokenAmount) } ) }

 static fromJSON( json: Record<string, any> ): PoolTokenExchangeRate { if (json.$typeName !== PoolTokenExchangeRate.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolTokenExchangeRate.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolTokenExchangeRate { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolTokenExchangeRate(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolTokenExchangeRate object`); } return PoolTokenExchangeRate.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolTokenExchangeRate> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolTokenExchangeRate object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolTokenExchangeRate(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolTokenExchangeRate object`); }

 return PoolTokenExchangeRate.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StakedSui =============================== */

export function isStakedSui(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V10}::staking_pool::StakedSui`; }

export interface StakedSuiFields { id: ToField<UID>; poolId: ToField<ID>; stakeActivationEpoch: ToField<"u64">; principal: ToField<Balance<ToPhantom<SUI>>> }

export type StakedSuiReified = Reified< StakedSui, StakedSuiFields >;

export class StakedSui implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V10}::staking_pool::StakedSui`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakedSui.$typeName; readonly $fullTypeName: `${typeof PKG_V10}::staking_pool::StakedSui`; readonly $typeArgs: []; readonly $isPhantom = StakedSui.$isPhantom;

 readonly id: ToField<UID>; readonly poolId: ToField<ID>; readonly stakeActivationEpoch: ToField<"u64">; readonly principal: ToField<Balance<ToPhantom<SUI>>>

 private constructor(typeArgs: [], fields: StakedSuiFields, ) { this.$fullTypeName = composeSuiType( StakedSui.$typeName, ...typeArgs ) as `${typeof PKG_V10}::staking_pool::StakedSui`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.poolId = fields.poolId;; this.stakeActivationEpoch = fields.stakeActivationEpoch;; this.principal = fields.principal; }

 static reified( ): StakedSuiReified { return { typeName: StakedSui.$typeName, fullTypeName: composeSuiType( StakedSui.$typeName, ...[] ) as `${typeof PKG_V10}::staking_pool::StakedSui`, typeArgs: [ ] as [], isPhantom: StakedSui.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakedSui.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakedSui.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakedSui.fromBcs( data, ), bcs: StakedSui.bcs, fromJSONField: (field: any) => StakedSui.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakedSui.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakedSui.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StakedSui.fetch( client, id, ), new: ( fields: StakedSuiFields, ) => { return new StakedSui( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakedSui.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakedSui>> { return phantom(StakedSui.reified( )); } static get p() { return StakedSui.phantom() }

 static get bcs() { return bcs.struct("StakedSui", {

 id: UID.bcs, pool_id: ID.bcs, stake_activation_epoch: bcs.u64(), principal: Balance.bcs

}) };

 static fromFields( fields: Record<string, any> ): StakedSui { return StakedSui.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), poolId: decodeFromFields(ID.reified(), fields.pool_id), stakeActivationEpoch: decodeFromFields("u64", fields.stake_activation_epoch), principal: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.principal) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakedSui { if (!isStakedSui(item.type)) { throw new Error("not a StakedSui type");

 }

 return StakedSui.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), stakeActivationEpoch: decodeFromFieldsWithTypes("u64", item.fields.stake_activation_epoch), principal: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.principal) } ) }

 static fromBcs( data: Uint8Array ): StakedSui { return StakedSui.fromFields( StakedSui.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,poolId: this.poolId,stakeActivationEpoch: this.stakeActivationEpoch.toString(),principal: this.principal.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakedSui { return StakedSui.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), poolId: decodeFromJSONField(ID.reified(), field.poolId), stakeActivationEpoch: decodeFromJSONField("u64", field.stakeActivationEpoch), principal: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.principal) } ) }

 static fromJSON( json: Record<string, any> ): StakedSui { if (json.$typeName !== StakedSui.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakedSui.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakedSui { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakedSui(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakedSui object`); } return StakedSui.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakedSui> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakedSui object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakedSui(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakedSui object`); }

 return StakedSui.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StakingPool =============================== */

export function isStakingPool(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V10}::staking_pool::StakingPool`; }

export interface StakingPoolFields { id: ToField<UID>; activationEpoch: ToField<Option<"u64">>; deactivationEpoch: ToField<Option<"u64">>; suiBalance: ToField<"u64">; rewardsPool: ToField<Balance<ToPhantom<SUI>>>; poolTokenBalance: ToField<"u64">; exchangeRates: ToField<Table<"u64", ToPhantom<PoolTokenExchangeRate>>>; pendingStake: ToField<"u64">; pendingTotalSuiWithdraw: ToField<"u64">; pendingPoolTokenWithdraw: ToField<"u64">; extraFields: ToField<Bag> }

export type StakingPoolReified = Reified< StakingPool, StakingPoolFields >;

export class StakingPool implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V10}::staking_pool::StakingPool`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakingPool.$typeName; readonly $fullTypeName: `${typeof PKG_V10}::staking_pool::StakingPool`; readonly $typeArgs: []; readonly $isPhantom = StakingPool.$isPhantom;

 readonly id: ToField<UID>; readonly activationEpoch: ToField<Option<"u64">>; readonly deactivationEpoch: ToField<Option<"u64">>; readonly suiBalance: ToField<"u64">; readonly rewardsPool: ToField<Balance<ToPhantom<SUI>>>; readonly poolTokenBalance: ToField<"u64">; readonly exchangeRates: ToField<Table<"u64", ToPhantom<PoolTokenExchangeRate>>>; readonly pendingStake: ToField<"u64">; readonly pendingTotalSuiWithdraw: ToField<"u64">; readonly pendingPoolTokenWithdraw: ToField<"u64">; readonly extraFields: ToField<Bag>

 private constructor(typeArgs: [], fields: StakingPoolFields, ) { this.$fullTypeName = composeSuiType( StakingPool.$typeName, ...typeArgs ) as `${typeof PKG_V10}::staking_pool::StakingPool`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.activationEpoch = fields.activationEpoch;; this.deactivationEpoch = fields.deactivationEpoch;; this.suiBalance = fields.suiBalance;; this.rewardsPool = fields.rewardsPool;; this.poolTokenBalance = fields.poolTokenBalance;; this.exchangeRates = fields.exchangeRates;; this.pendingStake = fields.pendingStake;; this.pendingTotalSuiWithdraw = fields.pendingTotalSuiWithdraw;; this.pendingPoolTokenWithdraw = fields.pendingPoolTokenWithdraw;; this.extraFields = fields.extraFields; }

 static reified( ): StakingPoolReified { return { typeName: StakingPool.$typeName, fullTypeName: composeSuiType( StakingPool.$typeName, ...[] ) as `${typeof PKG_V10}::staking_pool::StakingPool`, typeArgs: [ ] as [], isPhantom: StakingPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakingPool.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakingPool.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakingPool.fromBcs( data, ), bcs: StakingPool.bcs, fromJSONField: (field: any) => StakingPool.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakingPool.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakingPool.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StakingPool.fetch( client, id, ), new: ( fields: StakingPoolFields, ) => { return new StakingPool( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakingPool.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakingPool>> { return phantom(StakingPool.reified( )); } static get p() { return StakingPool.phantom() }

 static get bcs() { return bcs.struct("StakingPool", {

 id: UID.bcs, activation_epoch: Option.bcs(bcs.u64()), deactivation_epoch: Option.bcs(bcs.u64()), sui_balance: bcs.u64(), rewards_pool: Balance.bcs, pool_token_balance: bcs.u64(), exchange_rates: Table.bcs, pending_stake: bcs.u64(), pending_total_sui_withdraw: bcs.u64(), pending_pool_token_withdraw: bcs.u64(), extra_fields: Bag.bcs

}) };

 static fromFields( fields: Record<string, any> ): StakingPool { return StakingPool.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), activationEpoch: decodeFromFields(Option.reified("u64"), fields.activation_epoch), deactivationEpoch: decodeFromFields(Option.reified("u64"), fields.deactivation_epoch), suiBalance: decodeFromFields("u64", fields.sui_balance), rewardsPool: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.rewards_pool), poolTokenBalance: decodeFromFields("u64", fields.pool_token_balance), exchangeRates: decodeFromFields(Table.reified(reified.phantom("u64"), reified.phantom(PoolTokenExchangeRate.reified())), fields.exchange_rates), pendingStake: decodeFromFields("u64", fields.pending_stake), pendingTotalSuiWithdraw: decodeFromFields("u64", fields.pending_total_sui_withdraw), pendingPoolTokenWithdraw: decodeFromFields("u64", fields.pending_pool_token_withdraw), extraFields: decodeFromFields(Bag.reified(), fields.extra_fields) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakingPool { if (!isStakingPool(item.type)) { throw new Error("not a StakingPool type");

 }

 return StakingPool.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), activationEpoch: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.activation_epoch), deactivationEpoch: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.deactivation_epoch), suiBalance: decodeFromFieldsWithTypes("u64", item.fields.sui_balance), rewardsPool: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.rewards_pool), poolTokenBalance: decodeFromFieldsWithTypes("u64", item.fields.pool_token_balance), exchangeRates: decodeFromFieldsWithTypes(Table.reified(reified.phantom("u64"), reified.phantom(PoolTokenExchangeRate.reified())), item.fields.exchange_rates), pendingStake: decodeFromFieldsWithTypes("u64", item.fields.pending_stake), pendingTotalSuiWithdraw: decodeFromFieldsWithTypes("u64", item.fields.pending_total_sui_withdraw), pendingPoolTokenWithdraw: decodeFromFieldsWithTypes("u64", item.fields.pending_pool_token_withdraw), extraFields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.extra_fields) } ) }

 static fromBcs( data: Uint8Array ): StakingPool { return StakingPool.fromFields( StakingPool.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,activationEpoch: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.activationEpoch),deactivationEpoch: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.deactivationEpoch),suiBalance: this.suiBalance.toString(),rewardsPool: this.rewardsPool.toJSONField(),poolTokenBalance: this.poolTokenBalance.toString(),exchangeRates: this.exchangeRates.toJSONField(),pendingStake: this.pendingStake.toString(),pendingTotalSuiWithdraw: this.pendingTotalSuiWithdraw.toString(),pendingPoolTokenWithdraw: this.pendingPoolTokenWithdraw.toString(),extraFields: this.extraFields.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakingPool { return StakingPool.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), activationEpoch: decodeFromJSONField(Option.reified("u64"), field.activationEpoch), deactivationEpoch: decodeFromJSONField(Option.reified("u64"), field.deactivationEpoch), suiBalance: decodeFromJSONField("u64", field.suiBalance), rewardsPool: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.rewardsPool), poolTokenBalance: decodeFromJSONField("u64", field.poolTokenBalance), exchangeRates: decodeFromJSONField(Table.reified(reified.phantom("u64"), reified.phantom(PoolTokenExchangeRate.reified())), field.exchangeRates), pendingStake: decodeFromJSONField("u64", field.pendingStake), pendingTotalSuiWithdraw: decodeFromJSONField("u64", field.pendingTotalSuiWithdraw), pendingPoolTokenWithdraw: decodeFromJSONField("u64", field.pendingPoolTokenWithdraw), extraFields: decodeFromJSONField(Bag.reified(), field.extraFields) } ) }

 static fromJSON( json: Record<string, any> ): StakingPool { if (json.$typeName !== StakingPool.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakingPool.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakingPool { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakingPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakingPool object`); } return StakingPool.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakingPool> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakingPool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakingPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakingPool object`); }

 return StakingPool.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
