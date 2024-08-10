import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {Bag} from "../../0x2/bag/structs";
import {Balance} from "../../0x2/balance/structs";
import {SUI} from "../../0x2/sui/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== StakeSubsidy =============================== */

export function isStakeSubsidy(type: string): boolean { type = compressSuiType(type); return type === "0x3::stake_subsidy::StakeSubsidy"; }

export interface StakeSubsidyFields { balance: ToField<Balance<ToPhantom<SUI>>>; distributionCounter: ToField<"u64">; currentDistributionAmount: ToField<"u64">; stakeSubsidyPeriodLength: ToField<"u64">; stakeSubsidyDecreaseRate: ToField<"u16">; extraFields: ToField<Bag> }

export type StakeSubsidyReified = Reified< StakeSubsidy, StakeSubsidyFields >;

export class StakeSubsidy implements StructClass { static readonly $typeName = "0x3::stake_subsidy::StakeSubsidy"; static readonly $numTypeParams = 0;

 readonly $typeName = StakeSubsidy.$typeName;

 readonly $fullTypeName: "0x3::stake_subsidy::StakeSubsidy";

 readonly $typeArgs: [];

 readonly balance: ToField<Balance<ToPhantom<SUI>>>; readonly distributionCounter: ToField<"u64">; readonly currentDistributionAmount: ToField<"u64">; readonly stakeSubsidyPeriodLength: ToField<"u64">; readonly stakeSubsidyDecreaseRate: ToField<"u16">; readonly extraFields: ToField<Bag>

 private constructor(typeArgs: [], fields: StakeSubsidyFields, ) { this.$fullTypeName = composeSuiType( StakeSubsidy.$typeName, ...typeArgs ) as "0x3::stake_subsidy::StakeSubsidy"; this.$typeArgs = typeArgs;

 this.balance = fields.balance;; this.distributionCounter = fields.distributionCounter;; this.currentDistributionAmount = fields.currentDistributionAmount;; this.stakeSubsidyPeriodLength = fields.stakeSubsidyPeriodLength;; this.stakeSubsidyDecreaseRate = fields.stakeSubsidyDecreaseRate;; this.extraFields = fields.extraFields; }

 static reified( ): StakeSubsidyReified { return { typeName: StakeSubsidy.$typeName, fullTypeName: composeSuiType( StakeSubsidy.$typeName, ...[] ) as "0x3::stake_subsidy::StakeSubsidy", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakeSubsidy.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakeSubsidy.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakeSubsidy.fromBcs( data, ), bcs: StakeSubsidy.bcs, fromJSONField: (field: any) => StakeSubsidy.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakeSubsidy.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakeSubsidy.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StakeSubsidy.fetch( client, id, ), new: ( fields: StakeSubsidyFields, ) => { return new StakeSubsidy( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakeSubsidy.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakeSubsidy>> { return phantom(StakeSubsidy.reified( )); } static get p() { return StakeSubsidy.phantom() }

 static get bcs() { return bcs.struct("StakeSubsidy", {

 balance: Balance.bcs, distribution_counter: bcs.u64(), current_distribution_amount: bcs.u64(), stake_subsidy_period_length: bcs.u64(), stake_subsidy_decrease_rate: bcs.u16(), extra_fields: Bag.bcs

}) };

 static fromFields( fields: Record<string, any> ): StakeSubsidy { return StakeSubsidy.reified( ).new( { balance: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.balance), distributionCounter: decodeFromFields("u64", fields.distribution_counter), currentDistributionAmount: decodeFromFields("u64", fields.current_distribution_amount), stakeSubsidyPeriodLength: decodeFromFields("u64", fields.stake_subsidy_period_length), stakeSubsidyDecreaseRate: decodeFromFields("u16", fields.stake_subsidy_decrease_rate), extraFields: decodeFromFields(Bag.reified(), fields.extra_fields) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakeSubsidy { if (!isStakeSubsidy(item.type)) { throw new Error("not a StakeSubsidy type");

 }

 return StakeSubsidy.reified( ).new( { balance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.balance), distributionCounter: decodeFromFieldsWithTypes("u64", item.fields.distribution_counter), currentDistributionAmount: decodeFromFieldsWithTypes("u64", item.fields.current_distribution_amount), stakeSubsidyPeriodLength: decodeFromFieldsWithTypes("u64", item.fields.stake_subsidy_period_length), stakeSubsidyDecreaseRate: decodeFromFieldsWithTypes("u16", item.fields.stake_subsidy_decrease_rate), extraFields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.extra_fields) } ) }

 static fromBcs( data: Uint8Array ): StakeSubsidy { return StakeSubsidy.fromFields( StakeSubsidy.bcs.parse(data) ) }

 toJSONField() { return {

 balance: this.balance.toJSONField(),distributionCounter: this.distributionCounter.toString(),currentDistributionAmount: this.currentDistributionAmount.toString(),stakeSubsidyPeriodLength: this.stakeSubsidyPeriodLength.toString(),stakeSubsidyDecreaseRate: this.stakeSubsidyDecreaseRate,extraFields: this.extraFields.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakeSubsidy { return StakeSubsidy.reified( ).new( { balance: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.balance), distributionCounter: decodeFromJSONField("u64", field.distributionCounter), currentDistributionAmount: decodeFromJSONField("u64", field.currentDistributionAmount), stakeSubsidyPeriodLength: decodeFromJSONField("u64", field.stakeSubsidyPeriodLength), stakeSubsidyDecreaseRate: decodeFromJSONField("u16", field.stakeSubsidyDecreaseRate), extraFields: decodeFromJSONField(Bag.reified(), field.extraFields) } ) }

 static fromJSON( json: Record<string, any> ): StakeSubsidy { if (json.$typeName !== StakeSubsidy.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakeSubsidy.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakeSubsidy { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakeSubsidy(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakeSubsidy object`); } return StakeSubsidy.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakeSubsidy> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakeSubsidy object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakeSubsidy(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakeSubsidy object`); }
 return StakeSubsidy.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
