import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== DSUI =============================== */

export function isDSUI(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI"; }

export interface DSUIFields { dummyField: ToField<"bool"> }

export type DSUIReified = Reified< DSUI, DSUIFields >;

export class DSUI implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI"; static readonly $numTypeParams = 0;

 readonly $typeName = DSUI.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI";

 readonly $typeArgs: [];

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: DSUIFields, ) { this.$fullTypeName = composeSuiType( DSUI.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI"; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): DSUIReified { return { typeName: DSUI.$typeName, fullTypeName: composeSuiType( DSUI.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DSUI.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DSUI.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DSUI.fromBcs( data, ), bcs: DSUI.bcs, fromJSONField: (field: any) => DSUI.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DSUI.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DSUI.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DSUI.fetch( client, id, ), new: ( fields: DSUIFields, ) => { return new DSUI( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DSUI.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DSUI>> { return phantom(DSUI.reified( )); } static get p() { return DSUI.phantom() }

 static get bcs() { return bcs.struct("DSUI", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): DSUI { return DSUI.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DSUI { if (!isDSUI(item.type)) { throw new Error("not a DSUI type");

 }

 return DSUI.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): DSUI { return DSUI.fromFields( DSUI.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DSUI { return DSUI.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): DSUI { if (json.$typeName !== DSUI.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DSUI.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DSUI { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDSUI(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DSUI object`); } return DSUI.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DSUI> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DSUI object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDSUI(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DSUI object`); }
 return DSUI.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
