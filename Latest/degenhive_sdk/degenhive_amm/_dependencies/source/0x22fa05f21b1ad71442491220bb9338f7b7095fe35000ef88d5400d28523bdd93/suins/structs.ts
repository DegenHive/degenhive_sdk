import * as reified from "../../../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../../../_framework/util";
import {Balance} from "../../0x2/balance/structs";
import {UID} from "../../0x2/object/structs";
import {SUI} from "../../0x2/sui/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::suins::AdminCap`; }

export interface AdminCapFields { id: ToField<UID> }

export type AdminCapReified = Reified< AdminCap, AdminCapFields >;

export class AdminCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::suins::AdminCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AdminCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::suins::AdminCap`; readonly $typeArgs: []; readonly $isPhantom = AdminCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: AdminCapFields, ) { this.$fullTypeName = composeSuiType( AdminCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::suins::AdminCap`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): AdminCapReified { return { typeName: AdminCap.$typeName, fullTypeName: composeSuiType( AdminCap.$typeName, ...[] ) as `${typeof PKG_V1}::suins::AdminCap`, typeArgs: [ ] as [], isPhantom: AdminCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AdminCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AdminCap.fromBcs( data, ), bcs: AdminCap.bcs, fromJSONField: (field: any) => AdminCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AdminCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => AdminCap.fetch( client, id, ), new: ( fields: AdminCapFields, ) => { return new AdminCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AdminCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AdminCap>> { return phantom(AdminCap.reified( )); } static get p() { return AdminCap.phantom() }

 static get bcs() { return bcs.struct("AdminCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AdminCap { if (!isAdminCap(item.type)) { throw new Error("not a AdminCap type");

 }

 return AdminCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): AdminCap { return AdminCap.fromFields( AdminCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): AdminCap { if (json.$typeName !== AdminCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AdminCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AdminCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAdminCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`); } return AdminCap.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<AdminCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AdminCap object`); }

 return AdminCap.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== AppKey =============================== */

export function isAppKey(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::suins::AppKey` + '<'); }

export interface AppKeyFields<App extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type AppKeyReified<App extends PhantomTypeArgument> = Reified< AppKey<App>, AppKeyFields<App> >;

export class AppKey<App extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::suins::AppKey`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = AppKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::suins::AppKey<${PhantomToTypeStr<App>}>`; readonly $typeArgs: [PhantomToTypeStr<App>]; readonly $isPhantom = AppKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<App>], fields: AppKeyFields<App>, ) { this.$fullTypeName = composeSuiType( AppKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::suins::AppKey<${PhantomToTypeStr<App>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<App extends PhantomReified<PhantomTypeArgument>>( App: App ): AppKeyReified<ToPhantomTypeArgument<App>> { return { typeName: AppKey.$typeName, fullTypeName: composeSuiType( AppKey.$typeName, ...[extractType(App)] ) as `${typeof PKG_V1}::suins::AppKey<${PhantomToTypeStr<ToPhantomTypeArgument<App>>}>`, typeArgs: [ extractType(App) ] as [PhantomToTypeStr<ToPhantomTypeArgument<App>>], isPhantom: AppKey.$isPhantom, reifiedTypeArgs: [App], fromFields: (fields: Record<string, any>) => AppKey.fromFields( App, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AppKey.fromFieldsWithTypes( App, item, ), fromBcs: (data: Uint8Array) => AppKey.fromBcs( App, data, ), bcs: AppKey.bcs, fromJSONField: (field: any) => AppKey.fromJSONField( App, field, ), fromJSON: (json: Record<string, any>) => AppKey.fromJSON( App, json, ), fromSuiParsedData: (content: SuiParsedData) => AppKey.fromSuiParsedData( App, content, ), fetch: async (client: SuiClient, id: string) => AppKey.fetch( client, App, id, ), new: ( fields: AppKeyFields<ToPhantomTypeArgument<App>>, ) => { return new AppKey( [extractType(App)], fields ) }, kind: "StructClassReified", } }

 static get r() { return AppKey.reified }

 static phantom<App extends PhantomReified<PhantomTypeArgument>>( App: App ): PhantomReified<ToTypeStr<AppKey<ToPhantomTypeArgument<App>>>> { return phantom(AppKey.reified( App )); } static get p() { return AppKey.phantom }

 static get bcs() { return bcs.struct("AppKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields<App extends PhantomReified<PhantomTypeArgument>>( typeArg: App, fields: Record<string, any> ): AppKey<ToPhantomTypeArgument<App>> { return AppKey.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<App extends PhantomReified<PhantomTypeArgument>>( typeArg: App, item: FieldsWithTypes ): AppKey<ToPhantomTypeArgument<App>> { if (!isAppKey(item.type)) { throw new Error("not a AppKey type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return AppKey.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<App extends PhantomReified<PhantomTypeArgument>>( typeArg: App, data: Uint8Array ): AppKey<ToPhantomTypeArgument<App>> { return AppKey.fromFields( typeArg, AppKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<App extends PhantomReified<PhantomTypeArgument>>( typeArg: App, field: any ): AppKey<ToPhantomTypeArgument<App>> { return AppKey.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<App extends PhantomReified<PhantomTypeArgument>>( typeArg: App, json: Record<string, any> ): AppKey<ToPhantomTypeArgument<App>> { if (json.$typeName !== AppKey.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(AppKey.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return AppKey.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<App extends PhantomReified<PhantomTypeArgument>>( typeArg: App, content: SuiParsedData ): AppKey<ToPhantomTypeArgument<App>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAppKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AppKey object`); } return AppKey.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<App extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: App, id: string ): Promise<AppKey<ToPhantomTypeArgument<App>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AppKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAppKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AppKey object`); }

 const gotTypeArgs = parseTypeName(res.data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return AppKey.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ConfigKey =============================== */

export function isConfigKey(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::suins::ConfigKey` + '<'); }

export interface ConfigKeyFields<Config extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type ConfigKeyReified<Config extends PhantomTypeArgument> = Reified< ConfigKey<Config>, ConfigKeyFields<Config> >;

export class ConfigKey<Config extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::suins::ConfigKey`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = ConfigKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::suins::ConfigKey<${PhantomToTypeStr<Config>}>`; readonly $typeArgs: [PhantomToTypeStr<Config>]; readonly $isPhantom = ConfigKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<Config>], fields: ConfigKeyFields<Config>, ) { this.$fullTypeName = composeSuiType( ConfigKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::suins::ConfigKey<${PhantomToTypeStr<Config>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<Config extends PhantomReified<PhantomTypeArgument>>( Config: Config ): ConfigKeyReified<ToPhantomTypeArgument<Config>> { return { typeName: ConfigKey.$typeName, fullTypeName: composeSuiType( ConfigKey.$typeName, ...[extractType(Config)] ) as `${typeof PKG_V1}::suins::ConfigKey<${PhantomToTypeStr<ToPhantomTypeArgument<Config>>}>`, typeArgs: [ extractType(Config) ] as [PhantomToTypeStr<ToPhantomTypeArgument<Config>>], isPhantom: ConfigKey.$isPhantom, reifiedTypeArgs: [Config], fromFields: (fields: Record<string, any>) => ConfigKey.fromFields( Config, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ConfigKey.fromFieldsWithTypes( Config, item, ), fromBcs: (data: Uint8Array) => ConfigKey.fromBcs( Config, data, ), bcs: ConfigKey.bcs, fromJSONField: (field: any) => ConfigKey.fromJSONField( Config, field, ), fromJSON: (json: Record<string, any>) => ConfigKey.fromJSON( Config, json, ), fromSuiParsedData: (content: SuiParsedData) => ConfigKey.fromSuiParsedData( Config, content, ), fetch: async (client: SuiClient, id: string) => ConfigKey.fetch( client, Config, id, ), new: ( fields: ConfigKeyFields<ToPhantomTypeArgument<Config>>, ) => { return new ConfigKey( [extractType(Config)], fields ) }, kind: "StructClassReified", } }

 static get r() { return ConfigKey.reified }

 static phantom<Config extends PhantomReified<PhantomTypeArgument>>( Config: Config ): PhantomReified<ToTypeStr<ConfigKey<ToPhantomTypeArgument<Config>>>> { return phantom(ConfigKey.reified( Config )); } static get p() { return ConfigKey.phantom }

 static get bcs() { return bcs.struct("ConfigKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, fields: Record<string, any> ): ConfigKey<ToPhantomTypeArgument<Config>> { return ConfigKey.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, item: FieldsWithTypes ): ConfigKey<ToPhantomTypeArgument<Config>> { if (!isConfigKey(item.type)) { throw new Error("not a ConfigKey type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return ConfigKey.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, data: Uint8Array ): ConfigKey<ToPhantomTypeArgument<Config>> { return ConfigKey.fromFields( typeArg, ConfigKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, field: any ): ConfigKey<ToPhantomTypeArgument<Config>> { return ConfigKey.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, json: Record<string, any> ): ConfigKey<ToPhantomTypeArgument<Config>> { if (json.$typeName !== ConfigKey.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(ConfigKey.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return ConfigKey.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, content: SuiParsedData ): ConfigKey<ToPhantomTypeArgument<Config>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConfigKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ConfigKey object`); } return ConfigKey.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<Config extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: Config, id: string ): Promise<ConfigKey<ToPhantomTypeArgument<Config>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ConfigKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConfigKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ConfigKey object`); }

 const gotTypeArgs = parseTypeName(res.data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return ConfigKey.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== RegistryKey =============================== */

export function isRegistryKey(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::suins::RegistryKey` + '<'); }

export interface RegistryKeyFields<Config extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type RegistryKeyReified<Config extends PhantomTypeArgument> = Reified< RegistryKey<Config>, RegistryKeyFields<Config> >;

export class RegistryKey<Config extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::suins::RegistryKey`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = RegistryKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::suins::RegistryKey<${PhantomToTypeStr<Config>}>`; readonly $typeArgs: [PhantomToTypeStr<Config>]; readonly $isPhantom = RegistryKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<Config>], fields: RegistryKeyFields<Config>, ) { this.$fullTypeName = composeSuiType( RegistryKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::suins::RegistryKey<${PhantomToTypeStr<Config>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<Config extends PhantomReified<PhantomTypeArgument>>( Config: Config ): RegistryKeyReified<ToPhantomTypeArgument<Config>> { return { typeName: RegistryKey.$typeName, fullTypeName: composeSuiType( RegistryKey.$typeName, ...[extractType(Config)] ) as `${typeof PKG_V1}::suins::RegistryKey<${PhantomToTypeStr<ToPhantomTypeArgument<Config>>}>`, typeArgs: [ extractType(Config) ] as [PhantomToTypeStr<ToPhantomTypeArgument<Config>>], isPhantom: RegistryKey.$isPhantom, reifiedTypeArgs: [Config], fromFields: (fields: Record<string, any>) => RegistryKey.fromFields( Config, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RegistryKey.fromFieldsWithTypes( Config, item, ), fromBcs: (data: Uint8Array) => RegistryKey.fromBcs( Config, data, ), bcs: RegistryKey.bcs, fromJSONField: (field: any) => RegistryKey.fromJSONField( Config, field, ), fromJSON: (json: Record<string, any>) => RegistryKey.fromJSON( Config, json, ), fromSuiParsedData: (content: SuiParsedData) => RegistryKey.fromSuiParsedData( Config, content, ), fetch: async (client: SuiClient, id: string) => RegistryKey.fetch( client, Config, id, ), new: ( fields: RegistryKeyFields<ToPhantomTypeArgument<Config>>, ) => { return new RegistryKey( [extractType(Config)], fields ) }, kind: "StructClassReified", } }

 static get r() { return RegistryKey.reified }

 static phantom<Config extends PhantomReified<PhantomTypeArgument>>( Config: Config ): PhantomReified<ToTypeStr<RegistryKey<ToPhantomTypeArgument<Config>>>> { return phantom(RegistryKey.reified( Config )); } static get p() { return RegistryKey.phantom }

 static get bcs() { return bcs.struct("RegistryKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, fields: Record<string, any> ): RegistryKey<ToPhantomTypeArgument<Config>> { return RegistryKey.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, item: FieldsWithTypes ): RegistryKey<ToPhantomTypeArgument<Config>> { if (!isRegistryKey(item.type)) { throw new Error("not a RegistryKey type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return RegistryKey.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, data: Uint8Array ): RegistryKey<ToPhantomTypeArgument<Config>> { return RegistryKey.fromFields( typeArg, RegistryKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, field: any ): RegistryKey<ToPhantomTypeArgument<Config>> { return RegistryKey.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, json: Record<string, any> ): RegistryKey<ToPhantomTypeArgument<Config>> { if (json.$typeName !== RegistryKey.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(RegistryKey.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return RegistryKey.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<Config extends PhantomReified<PhantomTypeArgument>>( typeArg: Config, content: SuiParsedData ): RegistryKey<ToPhantomTypeArgument<Config>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRegistryKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RegistryKey object`); } return RegistryKey.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<Config extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: Config, id: string ): Promise<RegistryKey<ToPhantomTypeArgument<Config>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RegistryKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRegistryKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RegistryKey object`); }

 const gotTypeArgs = parseTypeName(res.data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return RegistryKey.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SUINS =============================== */

export function isSUINS(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::suins::SUINS`; }

export interface SUINSFields { dummyField: ToField<"bool"> }

export type SUINSReified = Reified< SUINS, SUINSFields >;

export class SUINS implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::suins::SUINS`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SUINS.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::suins::SUINS`; readonly $typeArgs: []; readonly $isPhantom = SUINS.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: SUINSFields, ) { this.$fullTypeName = composeSuiType( SUINS.$typeName, ...typeArgs ) as `${typeof PKG_V1}::suins::SUINS`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): SUINSReified { return { typeName: SUINS.$typeName, fullTypeName: composeSuiType( SUINS.$typeName, ...[] ) as `${typeof PKG_V1}::suins::SUINS`, typeArgs: [ ] as [], isPhantom: SUINS.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SUINS.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SUINS.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SUINS.fromBcs( data, ), bcs: SUINS.bcs, fromJSONField: (field: any) => SUINS.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SUINS.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SUINS.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SUINS.fetch( client, id, ), new: ( fields: SUINSFields, ) => { return new SUINS( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SUINS.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SUINS>> { return phantom(SUINS.reified( )); } static get p() { return SUINS.phantom() }

 static get bcs() { return bcs.struct("SUINS", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): SUINS { return SUINS.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SUINS { if (!isSUINS(item.type)) { throw new Error("not a SUINS type");

 }

 return SUINS.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): SUINS { return SUINS.fromFields( SUINS.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SUINS { return SUINS.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): SUINS { if (json.$typeName !== SUINS.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SUINS.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SUINS { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSUINS(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SUINS object`); } return SUINS.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SUINS> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SUINS object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSUINS(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SUINS object`); }

 return SUINS.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SuiNS =============================== */

export function isSuiNS(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::suins::SuiNS`; }

export interface SuiNSFields { id: ToField<UID>; balance: ToField<Balance<ToPhantom<SUI>>> }

export type SuiNSReified = Reified< SuiNS, SuiNSFields >;

export class SuiNS implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::suins::SuiNS`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SuiNS.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::suins::SuiNS`; readonly $typeArgs: []; readonly $isPhantom = SuiNS.$isPhantom;

 readonly id: ToField<UID>; readonly balance: ToField<Balance<ToPhantom<SUI>>>

 private constructor(typeArgs: [], fields: SuiNSFields, ) { this.$fullTypeName = composeSuiType( SuiNS.$typeName, ...typeArgs ) as `${typeof PKG_V1}::suins::SuiNS`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.balance = fields.balance; }

 static reified( ): SuiNSReified { return { typeName: SuiNS.$typeName, fullTypeName: composeSuiType( SuiNS.$typeName, ...[] ) as `${typeof PKG_V1}::suins::SuiNS`, typeArgs: [ ] as [], isPhantom: SuiNS.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SuiNS.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SuiNS.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SuiNS.fromBcs( data, ), bcs: SuiNS.bcs, fromJSONField: (field: any) => SuiNS.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SuiNS.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SuiNS.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SuiNS.fetch( client, id, ), new: ( fields: SuiNSFields, ) => { return new SuiNS( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SuiNS.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SuiNS>> { return phantom(SuiNS.reified( )); } static get p() { return SuiNS.phantom() }

 static get bcs() { return bcs.struct("SuiNS", {

 id: UID.bcs, balance: Balance.bcs

}) };

 static fromFields( fields: Record<string, any> ): SuiNS { return SuiNS.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), balance: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.balance) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SuiNS { if (!isSuiNS(item.type)) { throw new Error("not a SuiNS type");

 }

 return SuiNS.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), balance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.balance) } ) }

 static fromBcs( data: Uint8Array ): SuiNS { return SuiNS.fromFields( SuiNS.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,balance: this.balance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SuiNS { return SuiNS.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), balance: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.balance) } ) }

 static fromJSON( json: Record<string, any> ): SuiNS { if (json.$typeName !== SuiNS.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SuiNS.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SuiNS { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSuiNS(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SuiNS object`); } return SuiNS.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SuiNS> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SuiNS object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSuiNS(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SuiNS object`); }

 return SuiNS.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
