import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {Balance} from "../../0x2/balance/structs";
import {SUI} from "../../0x2/sui/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== StorageFund =============================== */

export function isStorageFund(type: string): boolean { type = compressSuiType(type); return type === "0x3::storage_fund::StorageFund"; }

export interface StorageFundFields { totalObjectStorageRebates: ToField<Balance<ToPhantom<SUI>>>; nonRefundableBalance: ToField<Balance<ToPhantom<SUI>>> }

export type StorageFundReified = Reified< StorageFund, StorageFundFields >;

export class StorageFund implements StructClass { static readonly $typeName = "0x3::storage_fund::StorageFund"; static readonly $numTypeParams = 0;

 readonly $typeName = StorageFund.$typeName;

 readonly $fullTypeName: "0x3::storage_fund::StorageFund";

 readonly $typeArgs: [];

 readonly totalObjectStorageRebates: ToField<Balance<ToPhantom<SUI>>>; readonly nonRefundableBalance: ToField<Balance<ToPhantom<SUI>>>

 private constructor(typeArgs: [], fields: StorageFundFields, ) { this.$fullTypeName = composeSuiType( StorageFund.$typeName, ...typeArgs ) as "0x3::storage_fund::StorageFund"; this.$typeArgs = typeArgs;

 this.totalObjectStorageRebates = fields.totalObjectStorageRebates;; this.nonRefundableBalance = fields.nonRefundableBalance; }

 static reified( ): StorageFundReified { return { typeName: StorageFund.$typeName, fullTypeName: composeSuiType( StorageFund.$typeName, ...[] ) as "0x3::storage_fund::StorageFund", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StorageFund.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StorageFund.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StorageFund.fromBcs( data, ), bcs: StorageFund.bcs, fromJSONField: (field: any) => StorageFund.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StorageFund.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StorageFund.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StorageFund.fetch( client, id, ), new: ( fields: StorageFundFields, ) => { return new StorageFund( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StorageFund.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StorageFund>> { return phantom(StorageFund.reified( )); } static get p() { return StorageFund.phantom() }

 static get bcs() { return bcs.struct("StorageFund", {

 total_object_storage_rebates: Balance.bcs, non_refundable_balance: Balance.bcs

}) };

 static fromFields( fields: Record<string, any> ): StorageFund { return StorageFund.reified( ).new( { totalObjectStorageRebates: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.total_object_storage_rebates), nonRefundableBalance: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.non_refundable_balance) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StorageFund { if (!isStorageFund(item.type)) { throw new Error("not a StorageFund type");

 }

 return StorageFund.reified( ).new( { totalObjectStorageRebates: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.total_object_storage_rebates), nonRefundableBalance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.non_refundable_balance) } ) }

 static fromBcs( data: Uint8Array ): StorageFund { return StorageFund.fromFields( StorageFund.bcs.parse(data) ) }

 toJSONField() { return {

 totalObjectStorageRebates: this.totalObjectStorageRebates.toJSONField(),nonRefundableBalance: this.nonRefundableBalance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StorageFund { return StorageFund.reified( ).new( { totalObjectStorageRebates: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.totalObjectStorageRebates), nonRefundableBalance: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.nonRefundableBalance) } ) }

 static fromJSON( json: Record<string, any> ): StorageFund { if (json.$typeName !== StorageFund.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StorageFund.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StorageFund { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStorageFund(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StorageFund object`); } return StorageFund.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StorageFund> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StorageFund object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStorageFund(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StorageFund object`); }
 return StorageFund.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
