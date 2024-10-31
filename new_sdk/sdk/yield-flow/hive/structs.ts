import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

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

 static reified( ): HIVEReified { return { typeName: HIVE.$typeName, fullTypeName: composeSuiType( HIVE.$typeName, ...[] ) as `${typeof PKG_V1}::hive::HIVE`, typeArgs: [ ] as [], isPhantom: HIVE.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HIVE.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HIVE.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HIVE.fromBcs( data, ), bcs: HIVE.bcs, fromJSONField: (field: any) => HIVE.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HIVE.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HIVE.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HIVE.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HIVE.fetch( client, id, ), new: ( fields: HIVEFields, ) => { return new HIVE( [], fields ) }, kind: "StructClassReified", } }

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

 static fromSuiObjectData( data: SuiObjectData ): HIVE { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHIVE(data.bcs.type)) { throw new Error(`object at is not a HIVE object`); }

 return HIVE.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HIVE.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HIVE> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HIVE object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHIVE(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HIVE object`); }

 return HIVE.fromSuiObjectData( res.data ); }

 }
