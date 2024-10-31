import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {Vector} from "../../../../_framework/vector";
import {String} from "../../0x1/string/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Domain =============================== */

export function isDomain(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::domain::Domain`; }

export interface DomainFields { labels: ToField<Vector<String>> }

export type DomainReified = Reified< Domain, DomainFields >;

export class Domain implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::domain::Domain`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Domain.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::domain::Domain`; readonly $typeArgs: []; readonly $isPhantom = Domain.$isPhantom;

 readonly labels: ToField<Vector<String>>

 private constructor(typeArgs: [], fields: DomainFields, ) { this.$fullTypeName = composeSuiType( Domain.$typeName, ...typeArgs ) as `${typeof PKG_V1}::domain::Domain`; this.$typeArgs = typeArgs;

 this.labels = fields.labels; }

 static reified( ): DomainReified { return { typeName: Domain.$typeName, fullTypeName: composeSuiType( Domain.$typeName, ...[] ) as `${typeof PKG_V1}::domain::Domain`, typeArgs: [ ] as [], isPhantom: Domain.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Domain.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Domain.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Domain.fromBcs( data, ), bcs: Domain.bcs, fromJSONField: (field: any) => Domain.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Domain.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Domain.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Domain.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Domain.fetch( client, id, ), new: ( fields: DomainFields, ) => { return new Domain( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Domain.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Domain>> { return phantom(Domain.reified( )); } static get p() { return Domain.phantom() }

 static get bcs() { return bcs.struct("Domain", {

 labels: bcs.vector(String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): Domain { return Domain.reified( ).new( { labels: decodeFromFields(reified.vector(String.reified()), fields.labels) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Domain { if (!isDomain(item.type)) { throw new Error("not a Domain type");

 }

 return Domain.reified( ).new( { labels: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.labels) } ) }

 static fromBcs( data: Uint8Array ): Domain { return Domain.fromFields( Domain.bcs.parse(data) ) }

 toJSONField() { return {

 labels: fieldToJSON<Vector<String>>(`vector<${String.$typeName}>`, this.labels),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Domain { return Domain.reified( ).new( { labels: decodeFromJSONField(reified.vector(String.reified()), field.labels) } ) }

 static fromJSON( json: Record<string, any> ): Domain { if (json.$typeName !== Domain.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Domain.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Domain { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDomain(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Domain object`); } return Domain.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Domain { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDomain(data.bcs.type)) { throw new Error(`object at is not a Domain object`); }

 return Domain.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Domain.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Domain> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Domain object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDomain(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Domain object`); }

 return Domain.fromSuiObjectData( res.data ); }

 }
