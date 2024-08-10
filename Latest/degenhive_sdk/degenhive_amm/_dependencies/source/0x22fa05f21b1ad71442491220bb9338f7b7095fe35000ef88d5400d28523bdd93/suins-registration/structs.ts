import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/string/structs";
import {UID} from "../../0x2/object/structs";
import {Domain} from "../domain/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== SuinsRegistration =============================== */

export function isSuinsRegistration(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::suins_registration::SuinsRegistration`; }

export interface SuinsRegistrationFields { id: ToField<UID>; domain: ToField<Domain>; domainName: ToField<String>; expirationTimestampMs: ToField<"u64">; imageUrl: ToField<String> }

export type SuinsRegistrationReified = Reified< SuinsRegistration, SuinsRegistrationFields >;

export class SuinsRegistration implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::suins_registration::SuinsRegistration`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SuinsRegistration.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::suins_registration::SuinsRegistration`; readonly $typeArgs: []; readonly $isPhantom = SuinsRegistration.$isPhantom;

 readonly id: ToField<UID>; readonly domain: ToField<Domain>; readonly domainName: ToField<String>; readonly expirationTimestampMs: ToField<"u64">; readonly imageUrl: ToField<String>

 private constructor(typeArgs: [], fields: SuinsRegistrationFields, ) { this.$fullTypeName = composeSuiType( SuinsRegistration.$typeName, ...typeArgs ) as `${typeof PKG_V1}::suins_registration::SuinsRegistration`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.domain = fields.domain;; this.domainName = fields.domainName;; this.expirationTimestampMs = fields.expirationTimestampMs;; this.imageUrl = fields.imageUrl; }

 static reified( ): SuinsRegistrationReified { return { typeName: SuinsRegistration.$typeName, fullTypeName: composeSuiType( SuinsRegistration.$typeName, ...[] ) as `${typeof PKG_V1}::suins_registration::SuinsRegistration`, typeArgs: [ ] as [], isPhantom: SuinsRegistration.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SuinsRegistration.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SuinsRegistration.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SuinsRegistration.fromBcs( data, ), bcs: SuinsRegistration.bcs, fromJSONField: (field: any) => SuinsRegistration.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SuinsRegistration.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SuinsRegistration.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SuinsRegistration.fetch( client, id, ), new: ( fields: SuinsRegistrationFields, ) => { return new SuinsRegistration( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SuinsRegistration.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SuinsRegistration>> { return phantom(SuinsRegistration.reified( )); } static get p() { return SuinsRegistration.phantom() }

 static get bcs() { return bcs.struct("SuinsRegistration", {

 id: UID.bcs, domain: Domain.bcs, domain_name: String.bcs, expiration_timestamp_ms: bcs.u64(), image_url: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): SuinsRegistration { return SuinsRegistration.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), domain: decodeFromFields(Domain.reified(), fields.domain), domainName: decodeFromFields(String.reified(), fields.domain_name), expirationTimestampMs: decodeFromFields("u64", fields.expiration_timestamp_ms), imageUrl: decodeFromFields(String.reified(), fields.image_url) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SuinsRegistration { if (!isSuinsRegistration(item.type)) { throw new Error("not a SuinsRegistration type");

 }

 return SuinsRegistration.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), domain: decodeFromFieldsWithTypes(Domain.reified(), item.fields.domain), domainName: decodeFromFieldsWithTypes(String.reified(), item.fields.domain_name), expirationTimestampMs: decodeFromFieldsWithTypes("u64", item.fields.expiration_timestamp_ms), imageUrl: decodeFromFieldsWithTypes(String.reified(), item.fields.image_url) } ) }

 static fromBcs( data: Uint8Array ): SuinsRegistration { return SuinsRegistration.fromFields( SuinsRegistration.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,domain: this.domain.toJSONField(),domainName: this.domainName,expirationTimestampMs: this.expirationTimestampMs.toString(),imageUrl: this.imageUrl,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SuinsRegistration { return SuinsRegistration.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), domain: decodeFromJSONField(Domain.reified(), field.domain), domainName: decodeFromJSONField(String.reified(), field.domainName), expirationTimestampMs: decodeFromJSONField("u64", field.expirationTimestampMs), imageUrl: decodeFromJSONField(String.reified(), field.imageUrl) } ) }

 static fromJSON( json: Record<string, any> ): SuinsRegistration { if (json.$typeName !== SuinsRegistration.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SuinsRegistration.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SuinsRegistration { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSuinsRegistration(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SuinsRegistration object`); } return SuinsRegistration.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SuinsRegistration> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SuinsRegistration object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSuinsRegistration(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SuinsRegistration object`); }

 return SuinsRegistration.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
