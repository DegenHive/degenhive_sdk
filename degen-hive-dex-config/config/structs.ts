import * as reified from "../../_framework/reified";
import {String as String1} from "../../_dependencies/source/0x1/ascii/structs";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {LinkedTable} from "../../_dependencies/source/0x2/linked-table/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Config =============================== */

export function isConfig(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Config"; }

export interface ConfigFields { id: ToField<UID>; decimalPrecisions: ToField<LinkedTable<string, "u8">>; stableIdentifiers: ToField<LinkedTable<String1, "bool">>; ammFeeCollectors: ToField<LinkedTable<String1, "address">>; weightedPoolFee: ToField<FeeInfo>; stablePoolFee: ToField<FeeInfo>; curvedPoolFee: ToField<FeeInfo>; treasuryPercent: ToField<"u64"> }

export type ConfigReified = Reified< Config, ConfigFields >;

export class Config implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Config"; static readonly $numTypeParams = 0;

 readonly $typeName = Config.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Config";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly decimalPrecisions: ToField<LinkedTable<string, "u8">>; readonly stableIdentifiers: ToField<LinkedTable<String1, "bool">>; readonly ammFeeCollectors: ToField<LinkedTable<String1, "address">>; readonly weightedPoolFee: ToField<FeeInfo>; readonly stablePoolFee: ToField<FeeInfo>; readonly curvedPoolFee: ToField<FeeInfo>; readonly treasuryPercent: ToField<"u64">

 private constructor(typeArgs: [], fields: ConfigFields, ) { this.$fullTypeName = composeSuiType( Config.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Config"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.decimalPrecisions = fields.decimalPrecisions;; this.stableIdentifiers = fields.stableIdentifiers;; this.ammFeeCollectors = fields.ammFeeCollectors;; this.weightedPoolFee = fields.weightedPoolFee;; this.stablePoolFee = fields.stablePoolFee;; this.curvedPoolFee = fields.curvedPoolFee;; this.treasuryPercent = fields.treasuryPercent; }

 static reified( ): ConfigReified { return { typeName: Config.$typeName, fullTypeName: composeSuiType( Config.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Config", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Config.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Config.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Config.fromBcs( data, ), bcs: Config.bcs, fromJSONField: (field: any) => Config.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Config.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Config.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Config.fetch( client, id, ), new: ( fields: ConfigFields, ) => { return new Config( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Config.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Config>> { return phantom(Config.reified( )); } static get p() { return Config.phantom() }

 static get bcs() { return bcs.struct("Config", {

 id: UID.bcs, decimal_precisions: LinkedTable.bcs(String.bcs), stable_identifiers: LinkedTable.bcs(String1.bcs), amm_fee_collectors: LinkedTable.bcs(String1.bcs), weighted_pool_fee: FeeInfo.bcs, stable_pool_fee: FeeInfo.bcs, curved_pool_fee: FeeInfo.bcs, treasury_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Config { return Config.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), decimalPrecisions: decodeFromFields(LinkedTable.reified(String.reified(), reified.phantom("u8")), fields.decimal_precisions), stableIdentifiers: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("bool")), fields.stable_identifiers), ammFeeCollectors: decodeFromFields(LinkedTable.reified(String1.reified(), reified.phantom("address")), fields.amm_fee_collectors), weightedPoolFee: decodeFromFields(FeeInfo.reified(), fields.weighted_pool_fee), stablePoolFee: decodeFromFields(FeeInfo.reified(), fields.stable_pool_fee), curvedPoolFee: decodeFromFields(FeeInfo.reified(), fields.curved_pool_fee), treasuryPercent: decodeFromFields("u64", fields.treasury_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Config { if (!isConfig(item.type)) { throw new Error("not a Config type");

 }

 return Config.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), decimalPrecisions: decodeFromFieldsWithTypes(LinkedTable.reified(String.reified(), reified.phantom("u8")), item.fields.decimal_precisions), stableIdentifiers: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("bool")), item.fields.stable_identifiers), ammFeeCollectors: decodeFromFieldsWithTypes(LinkedTable.reified(String1.reified(), reified.phantom("address")), item.fields.amm_fee_collectors), weightedPoolFee: decodeFromFieldsWithTypes(FeeInfo.reified(), item.fields.weighted_pool_fee), stablePoolFee: decodeFromFieldsWithTypes(FeeInfo.reified(), item.fields.stable_pool_fee), curvedPoolFee: decodeFromFieldsWithTypes(FeeInfo.reified(), item.fields.curved_pool_fee), treasuryPercent: decodeFromFieldsWithTypes("u64", item.fields.treasury_percent) } ) }

 static fromBcs( data: Uint8Array ): Config { return Config.fromFields( Config.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,decimalPrecisions: this.decimalPrecisions.toJSONField(),stableIdentifiers: this.stableIdentifiers.toJSONField(),ammFeeCollectors: this.ammFeeCollectors.toJSONField(),weightedPoolFee: this.weightedPoolFee.toJSONField(),stablePoolFee: this.stablePoolFee.toJSONField(),curvedPoolFee: this.curvedPoolFee.toJSONField(),treasuryPercent: this.treasuryPercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Config { return Config.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), decimalPrecisions: decodeFromJSONField(LinkedTable.reified(String.reified(), reified.phantom("u8")), field.decimalPrecisions), stableIdentifiers: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("bool")), field.stableIdentifiers), ammFeeCollectors: decodeFromJSONField(LinkedTable.reified(String1.reified(), reified.phantom("address")), field.ammFeeCollectors), weightedPoolFee: decodeFromJSONField(FeeInfo.reified(), field.weightedPoolFee), stablePoolFee: decodeFromJSONField(FeeInfo.reified(), field.stablePoolFee), curvedPoolFee: decodeFromJSONField(FeeInfo.reified(), field.curvedPoolFee), treasuryPercent: decodeFromJSONField("u64", field.treasuryPercent) } ) }

 static fromJSON( json: Record<string, any> ): Config { if (json.$typeName !== Config.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Config.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Config { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Config object`); } return Config.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Config> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Config object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Config object`); }
 return Config.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== BuidlersRoyaltyCollectionAbility =============================== */

export function isBuidlersRoyaltyCollectionAbility(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::BuidlersRoyaltyCollectionAbility"; }

export interface BuidlersRoyaltyCollectionAbilityFields { id: ToField<UID> }

export type BuidlersRoyaltyCollectionAbilityReified = Reified< BuidlersRoyaltyCollectionAbility, BuidlersRoyaltyCollectionAbilityFields >;

export class BuidlersRoyaltyCollectionAbility implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::BuidlersRoyaltyCollectionAbility"; static readonly $numTypeParams = 0;

 readonly $typeName = BuidlersRoyaltyCollectionAbility.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::BuidlersRoyaltyCollectionAbility";

 readonly $typeArgs: [];

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: BuidlersRoyaltyCollectionAbilityFields, ) { this.$fullTypeName = composeSuiType( BuidlersRoyaltyCollectionAbility.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::BuidlersRoyaltyCollectionAbility"; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): BuidlersRoyaltyCollectionAbilityReified { return { typeName: BuidlersRoyaltyCollectionAbility.$typeName, fullTypeName: composeSuiType( BuidlersRoyaltyCollectionAbility.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::BuidlersRoyaltyCollectionAbility", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BuidlersRoyaltyCollectionAbility.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BuidlersRoyaltyCollectionAbility.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BuidlersRoyaltyCollectionAbility.fromBcs( data, ), bcs: BuidlersRoyaltyCollectionAbility.bcs, fromJSONField: (field: any) => BuidlersRoyaltyCollectionAbility.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BuidlersRoyaltyCollectionAbility.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BuidlersRoyaltyCollectionAbility.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => BuidlersRoyaltyCollectionAbility.fetch( client, id, ), new: ( fields: BuidlersRoyaltyCollectionAbilityFields, ) => { return new BuidlersRoyaltyCollectionAbility( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BuidlersRoyaltyCollectionAbility.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BuidlersRoyaltyCollectionAbility>> { return phantom(BuidlersRoyaltyCollectionAbility.reified( )); } static get p() { return BuidlersRoyaltyCollectionAbility.phantom() }

 static get bcs() { return bcs.struct("BuidlersRoyaltyCollectionAbility", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): BuidlersRoyaltyCollectionAbility { return BuidlersRoyaltyCollectionAbility.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BuidlersRoyaltyCollectionAbility { if (!isBuidlersRoyaltyCollectionAbility(item.type)) { throw new Error("not a BuidlersRoyaltyCollectionAbility type");

 }

 return BuidlersRoyaltyCollectionAbility.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): BuidlersRoyaltyCollectionAbility { return BuidlersRoyaltyCollectionAbility.fromFields( BuidlersRoyaltyCollectionAbility.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BuidlersRoyaltyCollectionAbility { return BuidlersRoyaltyCollectionAbility.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): BuidlersRoyaltyCollectionAbility { if (json.$typeName !== BuidlersRoyaltyCollectionAbility.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BuidlersRoyaltyCollectionAbility.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BuidlersRoyaltyCollectionAbility { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBuidlersRoyaltyCollectionAbility(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BuidlersRoyaltyCollectionAbility object`); } return BuidlersRoyaltyCollectionAbility.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<BuidlersRoyaltyCollectionAbility> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BuidlersRoyaltyCollectionAbility object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBuidlersRoyaltyCollectionAbility(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BuidlersRoyaltyCollectionAbility object`); }
 return BuidlersRoyaltyCollectionAbility.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== DecimalPrecisionForCoinTypesWhitelisted =============================== */

export function isDecimalPrecisionForCoinTypesWhitelisted(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DecimalPrecisionForCoinTypesWhitelisted"; }

export interface DecimalPrecisionForCoinTypesWhitelistedFields { coinTypes: ToField<Vector<string>>; decimalPrecisions: ToField<Vector<"u8">> }

export type DecimalPrecisionForCoinTypesWhitelistedReified = Reified< DecimalPrecisionForCoinTypesWhitelisted, DecimalPrecisionForCoinTypesWhitelistedFields >;

export class DecimalPrecisionForCoinTypesWhitelisted implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DecimalPrecisionForCoinTypesWhitelisted"; static readonly $numTypeParams = 0;

 readonly $typeName = DecimalPrecisionForCoinTypesWhitelisted.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DecimalPrecisionForCoinTypesWhitelisted";

 readonly $typeArgs: [];

 readonly coinTypes: ToField<Vector<string>>; readonly decimalPrecisions: ToField<Vector<"u8">>

 private constructor(typeArgs: [], fields: DecimalPrecisionForCoinTypesWhitelistedFields, ) { this.$fullTypeName = composeSuiType( DecimalPrecisionForCoinTypesWhitelisted.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DecimalPrecisionForCoinTypesWhitelisted"; this.$typeArgs = typeArgs;

 this.coinTypes = fields.coinTypes;; this.decimalPrecisions = fields.decimalPrecisions; }

 static reified( ): DecimalPrecisionForCoinTypesWhitelistedReified { return { typeName: DecimalPrecisionForCoinTypesWhitelisted.$typeName, fullTypeName: composeSuiType( DecimalPrecisionForCoinTypesWhitelisted.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DecimalPrecisionForCoinTypesWhitelisted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DecimalPrecisionForCoinTypesWhitelisted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DecimalPrecisionForCoinTypesWhitelisted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DecimalPrecisionForCoinTypesWhitelisted.fromBcs( data, ), bcs: DecimalPrecisionForCoinTypesWhitelisted.bcs, fromJSONField: (field: any) => DecimalPrecisionForCoinTypesWhitelisted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DecimalPrecisionForCoinTypesWhitelisted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DecimalPrecisionForCoinTypesWhitelisted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DecimalPrecisionForCoinTypesWhitelisted.fetch( client, id, ), new: ( fields: DecimalPrecisionForCoinTypesWhitelistedFields, ) => { return new DecimalPrecisionForCoinTypesWhitelisted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DecimalPrecisionForCoinTypesWhitelisted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DecimalPrecisionForCoinTypesWhitelisted>> { return phantom(DecimalPrecisionForCoinTypesWhitelisted.reified( )); } static get p() { return DecimalPrecisionForCoinTypesWhitelisted.phantom() }

 static get bcs() { return bcs.struct("DecimalPrecisionForCoinTypesWhitelisted", {

 coin_types: bcs.vector(String.bcs), decimal_precisions: bcs.vector(bcs.u8())

}) };

 static fromFields( fields: Record<string, any> ): DecimalPrecisionForCoinTypesWhitelisted { return DecimalPrecisionForCoinTypesWhitelisted.reified( ).new( { coinTypes: decodeFromFields(reified.vector(String.reified()), fields.coin_types), decimalPrecisions: decodeFromFields(reified.vector("u8"), fields.decimal_precisions) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DecimalPrecisionForCoinTypesWhitelisted { if (!isDecimalPrecisionForCoinTypesWhitelisted(item.type)) { throw new Error("not a DecimalPrecisionForCoinTypesWhitelisted type");

 }

 return DecimalPrecisionForCoinTypesWhitelisted.reified( ).new( { coinTypes: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.coin_types), decimalPrecisions: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.decimal_precisions) } ) }

 static fromBcs( data: Uint8Array ): DecimalPrecisionForCoinTypesWhitelisted { return DecimalPrecisionForCoinTypesWhitelisted.fromFields( DecimalPrecisionForCoinTypesWhitelisted.bcs.parse(data) ) }

 toJSONField() { return {

 coinTypes: fieldToJSON<Vector<string>>(`vector<0x1::string::String>`, this.coinTypes),decimalPrecisions: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.decimalPrecisions),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DecimalPrecisionForCoinTypesWhitelisted { return DecimalPrecisionForCoinTypesWhitelisted.reified( ).new( { coinTypes: decodeFromJSONField(reified.vector(String.reified()), field.coinTypes), decimalPrecisions: decodeFromJSONField(reified.vector("u8"), field.decimalPrecisions) } ) }

 static fromJSON( json: Record<string, any> ): DecimalPrecisionForCoinTypesWhitelisted { if (json.$typeName !== DecimalPrecisionForCoinTypesWhitelisted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DecimalPrecisionForCoinTypesWhitelisted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DecimalPrecisionForCoinTypesWhitelisted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDecimalPrecisionForCoinTypesWhitelisted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DecimalPrecisionForCoinTypesWhitelisted object`); } return DecimalPrecisionForCoinTypesWhitelisted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DecimalPrecisionForCoinTypesWhitelisted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DecimalPrecisionForCoinTypesWhitelisted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDecimalPrecisionForCoinTypesWhitelisted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DecimalPrecisionForCoinTypesWhitelisted object`); }
 return DecimalPrecisionForCoinTypesWhitelisted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== DefaultFeeSet =============================== */

export function isDefaultFeeSet(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DefaultFeeSet"; }

export interface DefaultFeeSetFields { curve: ToField<TypeName>; totalFeeBps: ToField<"u64">; hiveFeePercent: ToField<"u64"> }

export type DefaultFeeSetReified = Reified< DefaultFeeSet, DefaultFeeSetFields >;

export class DefaultFeeSet implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DefaultFeeSet"; static readonly $numTypeParams = 0;

 readonly $typeName = DefaultFeeSet.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DefaultFeeSet";

 readonly $typeArgs: [];

 readonly curve: ToField<TypeName>; readonly totalFeeBps: ToField<"u64">; readonly hiveFeePercent: ToField<"u64">

 private constructor(typeArgs: [], fields: DefaultFeeSetFields, ) { this.$fullTypeName = composeSuiType( DefaultFeeSet.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DefaultFeeSet"; this.$typeArgs = typeArgs;

 this.curve = fields.curve;; this.totalFeeBps = fields.totalFeeBps;; this.hiveFeePercent = fields.hiveFeePercent; }

 static reified( ): DefaultFeeSetReified { return { typeName: DefaultFeeSet.$typeName, fullTypeName: composeSuiType( DefaultFeeSet.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DefaultFeeSet", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DefaultFeeSet.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DefaultFeeSet.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DefaultFeeSet.fromBcs( data, ), bcs: DefaultFeeSet.bcs, fromJSONField: (field: any) => DefaultFeeSet.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DefaultFeeSet.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DefaultFeeSet.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DefaultFeeSet.fetch( client, id, ), new: ( fields: DefaultFeeSetFields, ) => { return new DefaultFeeSet( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DefaultFeeSet.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DefaultFeeSet>> { return phantom(DefaultFeeSet.reified( )); } static get p() { return DefaultFeeSet.phantom() }

 static get bcs() { return bcs.struct("DefaultFeeSet", {

 curve: TypeName.bcs, total_fee_bps: bcs.u64(), hive_fee_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DefaultFeeSet { return DefaultFeeSet.reified( ).new( { curve: decodeFromFields(TypeName.reified(), fields.curve), totalFeeBps: decodeFromFields("u64", fields.total_fee_bps), hiveFeePercent: decodeFromFields("u64", fields.hive_fee_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DefaultFeeSet { if (!isDefaultFeeSet(item.type)) { throw new Error("not a DefaultFeeSet type");

 }

 return DefaultFeeSet.reified( ).new( { curve: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.curve), totalFeeBps: decodeFromFieldsWithTypes("u64", item.fields.total_fee_bps), hiveFeePercent: decodeFromFieldsWithTypes("u64", item.fields.hive_fee_percent) } ) }

 static fromBcs( data: Uint8Array ): DefaultFeeSet { return DefaultFeeSet.fromFields( DefaultFeeSet.bcs.parse(data) ) }

 toJSONField() { return {

 curve: this.curve.toJSONField(),totalFeeBps: this.totalFeeBps.toString(),hiveFeePercent: this.hiveFeePercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DefaultFeeSet { return DefaultFeeSet.reified( ).new( { curve: decodeFromJSONField(TypeName.reified(), field.curve), totalFeeBps: decodeFromJSONField("u64", field.totalFeeBps), hiveFeePercent: decodeFromJSONField("u64", field.hiveFeePercent) } ) }

 static fromJSON( json: Record<string, any> ): DefaultFeeSet { if (json.$typeName !== DefaultFeeSet.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DefaultFeeSet.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DefaultFeeSet { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDefaultFeeSet(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DefaultFeeSet object`); } return DefaultFeeSet.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DefaultFeeSet> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DefaultFeeSet object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDefaultFeeSet(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DefaultFeeSet object`); }
 return DefaultFeeSet.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== DegenHiveDeployerCap =============================== */

export function isDegenHiveDeployerCap(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DegenHiveDeployerCap"; }

export interface DegenHiveDeployerCapFields { id: ToField<UID>; managerInitialized: ToField<"bool">; vaultInitialized: ToField<"bool"> }

export type DegenHiveDeployerCapReified = Reified< DegenHiveDeployerCap, DegenHiveDeployerCapFields >;

export class DegenHiveDeployerCap implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DegenHiveDeployerCap"; static readonly $numTypeParams = 0;

 readonly $typeName = DegenHiveDeployerCap.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DegenHiveDeployerCap";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly managerInitialized: ToField<"bool">; readonly vaultInitialized: ToField<"bool">

 private constructor(typeArgs: [], fields: DegenHiveDeployerCapFields, ) { this.$fullTypeName = composeSuiType( DegenHiveDeployerCap.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DegenHiveDeployerCap"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.managerInitialized = fields.managerInitialized;; this.vaultInitialized = fields.vaultInitialized; }

 static reified( ): DegenHiveDeployerCapReified { return { typeName: DegenHiveDeployerCap.$typeName, fullTypeName: composeSuiType( DegenHiveDeployerCap.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DegenHiveDeployerCap", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DegenHiveDeployerCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DegenHiveDeployerCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DegenHiveDeployerCap.fromBcs( data, ), bcs: DegenHiveDeployerCap.bcs, fromJSONField: (field: any) => DegenHiveDeployerCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DegenHiveDeployerCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DegenHiveDeployerCap.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DegenHiveDeployerCap.fetch( client, id, ), new: ( fields: DegenHiveDeployerCapFields, ) => { return new DegenHiveDeployerCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DegenHiveDeployerCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DegenHiveDeployerCap>> { return phantom(DegenHiveDeployerCap.reified( )); } static get p() { return DegenHiveDeployerCap.phantom() }

 static get bcs() { return bcs.struct("DegenHiveDeployerCap", {

 id: UID.bcs, manager_initialized: bcs.bool(), vault_initialized: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): DegenHiveDeployerCap { return DegenHiveDeployerCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), managerInitialized: decodeFromFields("bool", fields.manager_initialized), vaultInitialized: decodeFromFields("bool", fields.vault_initialized) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DegenHiveDeployerCap { if (!isDegenHiveDeployerCap(item.type)) { throw new Error("not a DegenHiveDeployerCap type");

 }

 return DegenHiveDeployerCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), managerInitialized: decodeFromFieldsWithTypes("bool", item.fields.manager_initialized), vaultInitialized: decodeFromFieldsWithTypes("bool", item.fields.vault_initialized) } ) }

 static fromBcs( data: Uint8Array ): DegenHiveDeployerCap { return DegenHiveDeployerCap.fromFields( DegenHiveDeployerCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,managerInitialized: this.managerInitialized,vaultInitialized: this.vaultInitialized,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DegenHiveDeployerCap { return DegenHiveDeployerCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), managerInitialized: decodeFromJSONField("bool", field.managerInitialized), vaultInitialized: decodeFromJSONField("bool", field.vaultInitialized) } ) }

 static fromJSON( json: Record<string, any> ): DegenHiveDeployerCap { if (json.$typeName !== DegenHiveDeployerCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DegenHiveDeployerCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DegenHiveDeployerCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDegenHiveDeployerCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DegenHiveDeployerCap object`); } return DegenHiveDeployerCap.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DegenHiveDeployerCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DegenHiveDeployerCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDegenHiveDeployerCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DegenHiveDeployerCap object`); }
 return DegenHiveDeployerCap.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== DexDaoCapability =============================== */

export function isDexDaoCapability(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DexDaoCapability"; }

export interface DexDaoCapabilityFields { id: ToField<UID> }

export type DexDaoCapabilityReified = Reified< DexDaoCapability, DexDaoCapabilityFields >;

export class DexDaoCapability implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DexDaoCapability"; static readonly $numTypeParams = 0;

 readonly $typeName = DexDaoCapability.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DexDaoCapability";

 readonly $typeArgs: [];

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: DexDaoCapabilityFields, ) { this.$fullTypeName = composeSuiType( DexDaoCapability.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DexDaoCapability"; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): DexDaoCapabilityReified { return { typeName: DexDaoCapability.$typeName, fullTypeName: composeSuiType( DexDaoCapability.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::DexDaoCapability", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DexDaoCapability.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DexDaoCapability.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DexDaoCapability.fromBcs( data, ), bcs: DexDaoCapability.bcs, fromJSONField: (field: any) => DexDaoCapability.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DexDaoCapability.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DexDaoCapability.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DexDaoCapability.fetch( client, id, ), new: ( fields: DexDaoCapabilityFields, ) => { return new DexDaoCapability( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DexDaoCapability.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DexDaoCapability>> { return phantom(DexDaoCapability.reified( )); } static get p() { return DexDaoCapability.phantom() }

 static get bcs() { return bcs.struct("DexDaoCapability", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): DexDaoCapability { return DexDaoCapability.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DexDaoCapability { if (!isDexDaoCapability(item.type)) { throw new Error("not a DexDaoCapability type");

 }

 return DexDaoCapability.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): DexDaoCapability { return DexDaoCapability.fromFields( DexDaoCapability.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DexDaoCapability { return DexDaoCapability.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): DexDaoCapability { if (json.$typeName !== DexDaoCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DexDaoCapability.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DexDaoCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDexDaoCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DexDaoCapability object`); } return DexDaoCapability.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DexDaoCapability> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DexDaoCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDexDaoCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DexDaoCapability object`); }
 return DexDaoCapability.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== FeeCollectedForCoin =============================== */

export function isFeeCollectedForCoin(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollectedForCoin"; }

export interface FeeCollectedForCoinFields { token: ToField<TypeName>; amount: ToField<"u64"> }

export type FeeCollectedForCoinReified = Reified< FeeCollectedForCoin, FeeCollectedForCoinFields >;

export class FeeCollectedForCoin implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollectedForCoin"; static readonly $numTypeParams = 0;

 readonly $typeName = FeeCollectedForCoin.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollectedForCoin";

 readonly $typeArgs: [];

 readonly token: ToField<TypeName>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [], fields: FeeCollectedForCoinFields, ) { this.$fullTypeName = composeSuiType( FeeCollectedForCoin.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollectedForCoin"; this.$typeArgs = typeArgs;

 this.token = fields.token;; this.amount = fields.amount; }

 static reified( ): FeeCollectedForCoinReified { return { typeName: FeeCollectedForCoin.$typeName, fullTypeName: composeSuiType( FeeCollectedForCoin.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollectedForCoin", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeeCollectedForCoin.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeCollectedForCoin.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FeeCollectedForCoin.fromBcs( data, ), bcs: FeeCollectedForCoin.bcs, fromJSONField: (field: any) => FeeCollectedForCoin.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FeeCollectedForCoin.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FeeCollectedForCoin.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => FeeCollectedForCoin.fetch( client, id, ), new: ( fields: FeeCollectedForCoinFields, ) => { return new FeeCollectedForCoin( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FeeCollectedForCoin.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FeeCollectedForCoin>> { return phantom(FeeCollectedForCoin.reified( )); } static get p() { return FeeCollectedForCoin.phantom() }

 static get bcs() { return bcs.struct("FeeCollectedForCoin", {

 token: TypeName.bcs, amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): FeeCollectedForCoin { return FeeCollectedForCoin.reified( ).new( { token: decodeFromFields(TypeName.reified(), fields.token), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FeeCollectedForCoin { if (!isFeeCollectedForCoin(item.type)) { throw new Error("not a FeeCollectedForCoin type");

 }

 return FeeCollectedForCoin.reified( ).new( { token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs( data: Uint8Array ): FeeCollectedForCoin { return FeeCollectedForCoin.fromFields( FeeCollectedForCoin.bcs.parse(data) ) }

 toJSONField() { return {

 token: this.token.toJSONField(),amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FeeCollectedForCoin { return FeeCollectedForCoin.reified( ).new( { token: decodeFromJSONField(TypeName.reified(), field.token), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON( json: Record<string, any> ): FeeCollectedForCoin { if (json.$typeName !== FeeCollectedForCoin.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FeeCollectedForCoin.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FeeCollectedForCoin { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeCollectedForCoin(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeCollectedForCoin object`); } return FeeCollectedForCoin.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<FeeCollectedForCoin> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeCollectedForCoin object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeCollectedForCoin(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeCollectedForCoin object`); }
 return FeeCollectedForCoin.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== FeeCollector =============================== */

export function isFeeCollector(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollector<"); }

export interface FeeCollectorFields<X extends PhantomTypeArgument> { id: ToField<UID>; balance: ToField<Balance<X>> }

export type FeeCollectorReified<X extends PhantomTypeArgument> = Reified< FeeCollector<X>, FeeCollectorFields<X> >;

export class FeeCollector<X extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollector"; static readonly $numTypeParams = 1;

 readonly $typeName = FeeCollector.$typeName;

 readonly $fullTypeName: `0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollector<${PhantomToTypeStr<X>}>`;

 readonly $typeArgs: [PhantomToTypeStr<X>];

 readonly id: ToField<UID>; readonly balance: ToField<Balance<X>>

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: FeeCollectorFields<X>, ) { this.$fullTypeName = composeSuiType( FeeCollector.$typeName, ...typeArgs ) as `0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollector<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.balance = fields.balance; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): FeeCollectorReified<ToPhantomTypeArgument<X>> { return { typeName: FeeCollector.$typeName, fullTypeName: composeSuiType( FeeCollector.$typeName, ...[extractType(X)] ) as `0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeCollector<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => FeeCollector.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeCollector.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => FeeCollector.fromBcs( X, data, ), bcs: FeeCollector.bcs, fromJSONField: (field: any) => FeeCollector.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => FeeCollector.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => FeeCollector.fromSuiParsedData( X, content, ), fetch: async (client: SuiClient, id: string) => FeeCollector.fetch( client, X, id, ), new: ( fields: FeeCollectorFields<ToPhantomTypeArgument<X>>, ) => { return new FeeCollector( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return FeeCollector.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<FeeCollector<ToPhantomTypeArgument<X>>>> { return phantom(FeeCollector.reified( X )); } static get p() { return FeeCollector.phantom }

 static get bcs() { return bcs.struct("FeeCollector", {

 id: UID.bcs, balance: Balance.bcs

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): FeeCollector<ToPhantomTypeArgument<X>> { return FeeCollector.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), balance: decodeFromFields(Balance.reified(typeArg), fields.balance) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): FeeCollector<ToPhantomTypeArgument<X>> { if (!isFeeCollector(item.type)) { throw new Error("not a FeeCollector type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return FeeCollector.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), balance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.balance) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): FeeCollector<ToPhantomTypeArgument<X>> { return FeeCollector.fromFields( typeArg, FeeCollector.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,balance: this.balance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): FeeCollector<ToPhantomTypeArgument<X>> { return FeeCollector.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), balance: decodeFromJSONField(Balance.reified(typeArg), field.balance) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): FeeCollector<ToPhantomTypeArgument<X>> { if (json.$typeName !== FeeCollector.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(FeeCollector.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return FeeCollector.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): FeeCollector<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeCollector(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeCollector object`); } return FeeCollector.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<FeeCollector<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeCollector object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeCollector(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeCollector object`); }
 return FeeCollector.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== FeeExtractedForCoin =============================== */

export function isFeeExtractedForCoin(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeExtractedForCoin"; }

export interface FeeExtractedForCoinFields { token: ToField<TypeName>; amount: ToField<"u64"> }

export type FeeExtractedForCoinReified = Reified< FeeExtractedForCoin, FeeExtractedForCoinFields >;

export class FeeExtractedForCoin implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeExtractedForCoin"; static readonly $numTypeParams = 0;

 readonly $typeName = FeeExtractedForCoin.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeExtractedForCoin";

 readonly $typeArgs: [];

 readonly token: ToField<TypeName>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [], fields: FeeExtractedForCoinFields, ) { this.$fullTypeName = composeSuiType( FeeExtractedForCoin.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeExtractedForCoin"; this.$typeArgs = typeArgs;

 this.token = fields.token;; this.amount = fields.amount; }

 static reified( ): FeeExtractedForCoinReified { return { typeName: FeeExtractedForCoin.$typeName, fullTypeName: composeSuiType( FeeExtractedForCoin.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeExtractedForCoin", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeeExtractedForCoin.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeExtractedForCoin.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FeeExtractedForCoin.fromBcs( data, ), bcs: FeeExtractedForCoin.bcs, fromJSONField: (field: any) => FeeExtractedForCoin.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FeeExtractedForCoin.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FeeExtractedForCoin.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => FeeExtractedForCoin.fetch( client, id, ), new: ( fields: FeeExtractedForCoinFields, ) => { return new FeeExtractedForCoin( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FeeExtractedForCoin.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FeeExtractedForCoin>> { return phantom(FeeExtractedForCoin.reified( )); } static get p() { return FeeExtractedForCoin.phantom() }

 static get bcs() { return bcs.struct("FeeExtractedForCoin", {

 token: TypeName.bcs, amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): FeeExtractedForCoin { return FeeExtractedForCoin.reified( ).new( { token: decodeFromFields(TypeName.reified(), fields.token), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FeeExtractedForCoin { if (!isFeeExtractedForCoin(item.type)) { throw new Error("not a FeeExtractedForCoin type");

 }

 return FeeExtractedForCoin.reified( ).new( { token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs( data: Uint8Array ): FeeExtractedForCoin { return FeeExtractedForCoin.fromFields( FeeExtractedForCoin.bcs.parse(data) ) }

 toJSONField() { return {

 token: this.token.toJSONField(),amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FeeExtractedForCoin { return FeeExtractedForCoin.reified( ).new( { token: decodeFromJSONField(TypeName.reified(), field.token), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON( json: Record<string, any> ): FeeExtractedForCoin { if (json.$typeName !== FeeExtractedForCoin.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FeeExtractedForCoin.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FeeExtractedForCoin { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeExtractedForCoin(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeExtractedForCoin object`); } return FeeExtractedForCoin.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<FeeExtractedForCoin> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeExtractedForCoin object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeExtractedForCoin(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeExtractedForCoin object`); }
 return FeeExtractedForCoin.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== FeeInfo =============================== */

export function isFeeInfo(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeInfo"; }

export interface FeeInfoFields { totalFeeBps: ToField<"u64">; hiveFeePercent: ToField<"u64"> }

export type FeeInfoReified = Reified< FeeInfo, FeeInfoFields >;

export class FeeInfo implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeInfo"; static readonly $numTypeParams = 0;

 readonly $typeName = FeeInfo.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeInfo";

 readonly $typeArgs: [];

 readonly totalFeeBps: ToField<"u64">; readonly hiveFeePercent: ToField<"u64">

 private constructor(typeArgs: [], fields: FeeInfoFields, ) { this.$fullTypeName = composeSuiType( FeeInfo.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeInfo"; this.$typeArgs = typeArgs;

 this.totalFeeBps = fields.totalFeeBps;; this.hiveFeePercent = fields.hiveFeePercent; }

 static reified( ): FeeInfoReified { return { typeName: FeeInfo.$typeName, fullTypeName: composeSuiType( FeeInfo.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::FeeInfo", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeeInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FeeInfo.fromBcs( data, ), bcs: FeeInfo.bcs, fromJSONField: (field: any) => FeeInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FeeInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FeeInfo.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => FeeInfo.fetch( client, id, ), new: ( fields: FeeInfoFields, ) => { return new FeeInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FeeInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FeeInfo>> { return phantom(FeeInfo.reified( )); } static get p() { return FeeInfo.phantom() }

 static get bcs() { return bcs.struct("FeeInfo", {

 total_fee_bps: bcs.u64(), hive_fee_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): FeeInfo { return FeeInfo.reified( ).new( { totalFeeBps: decodeFromFields("u64", fields.total_fee_bps), hiveFeePercent: decodeFromFields("u64", fields.hive_fee_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FeeInfo { if (!isFeeInfo(item.type)) { throw new Error("not a FeeInfo type");

 }

 return FeeInfo.reified( ).new( { totalFeeBps: decodeFromFieldsWithTypes("u64", item.fields.total_fee_bps), hiveFeePercent: decodeFromFieldsWithTypes("u64", item.fields.hive_fee_percent) } ) }

 static fromBcs( data: Uint8Array ): FeeInfo { return FeeInfo.fromFields( FeeInfo.bcs.parse(data) ) }

 toJSONField() { return {

 totalFeeBps: this.totalFeeBps.toString(),hiveFeePercent: this.hiveFeePercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FeeInfo { return FeeInfo.reified( ).new( { totalFeeBps: decodeFromJSONField("u64", field.totalFeeBps), hiveFeePercent: decodeFromJSONField("u64", field.hiveFeePercent) } ) }

 static fromJSON( json: Record<string, any> ): FeeInfo { if (json.$typeName !== FeeInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FeeInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FeeInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeInfo object`); } return FeeInfo.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<FeeInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeInfo object`); }
 return FeeInfo.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveDaoCapability =============================== */

export function isHiveDaoCapability(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveDaoCapability"; }

export interface HiveDaoCapabilityFields { id: ToField<UID> }

export type HiveDaoCapabilityReified = Reified< HiveDaoCapability, HiveDaoCapabilityFields >;

export class HiveDaoCapability implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveDaoCapability"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveDaoCapability.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveDaoCapability";

 readonly $typeArgs: [];

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: HiveDaoCapabilityFields, ) { this.$fullTypeName = composeSuiType( HiveDaoCapability.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveDaoCapability"; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): HiveDaoCapabilityReified { return { typeName: HiveDaoCapability.$typeName, fullTypeName: composeSuiType( HiveDaoCapability.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveDaoCapability", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveDaoCapability.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveDaoCapability.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveDaoCapability.fromBcs( data, ), bcs: HiveDaoCapability.bcs, fromJSONField: (field: any) => HiveDaoCapability.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveDaoCapability.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveDaoCapability.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveDaoCapability.fetch( client, id, ), new: ( fields: HiveDaoCapabilityFields, ) => { return new HiveDaoCapability( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveDaoCapability.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveDaoCapability>> { return phantom(HiveDaoCapability.reified( )); } static get p() { return HiveDaoCapability.phantom() }

 static get bcs() { return bcs.struct("HiveDaoCapability", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): HiveDaoCapability { return HiveDaoCapability.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveDaoCapability { if (!isHiveDaoCapability(item.type)) { throw new Error("not a HiveDaoCapability type");

 }

 return HiveDaoCapability.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): HiveDaoCapability { return HiveDaoCapability.fromFields( HiveDaoCapability.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveDaoCapability { return HiveDaoCapability.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): HiveDaoCapability { if (json.$typeName !== HiveDaoCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveDaoCapability.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveDaoCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveDaoCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveDaoCapability object`); } return HiveDaoCapability.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveDaoCapability> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveDaoCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveDaoCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveDaoCapability object`); }
 return HiveDaoCapability.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== HiveEntryCap =============================== */

export function isHiveEntryCap(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveEntryCap"; }

export interface HiveEntryCapFields { id: ToField<UID> }

export type HiveEntryCapReified = Reified< HiveEntryCap, HiveEntryCapFields >;

export class HiveEntryCap implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveEntryCap"; static readonly $numTypeParams = 0;

 readonly $typeName = HiveEntryCap.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveEntryCap";

 readonly $typeArgs: [];

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: HiveEntryCapFields, ) { this.$fullTypeName = composeSuiType( HiveEntryCap.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveEntryCap"; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): HiveEntryCapReified { return { typeName: HiveEntryCap.$typeName, fullTypeName: composeSuiType( HiveEntryCap.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::HiveEntryCap", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HiveEntryCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HiveEntryCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HiveEntryCap.fromBcs( data, ), bcs: HiveEntryCap.bcs, fromJSONField: (field: any) => HiveEntryCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HiveEntryCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HiveEntryCap.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => HiveEntryCap.fetch( client, id, ), new: ( fields: HiveEntryCapFields, ) => { return new HiveEntryCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HiveEntryCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HiveEntryCap>> { return phantom(HiveEntryCap.reified( )); } static get p() { return HiveEntryCap.phantom() }

 static get bcs() { return bcs.struct("HiveEntryCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): HiveEntryCap { return HiveEntryCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HiveEntryCap { if (!isHiveEntryCap(item.type)) { throw new Error("not a HiveEntryCap type");

 }

 return HiveEntryCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): HiveEntryCap { return HiveEntryCap.fromFields( HiveEntryCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HiveEntryCap { return HiveEntryCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): HiveEntryCap { if (json.$typeName !== HiveEntryCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HiveEntryCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HiveEntryCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHiveEntryCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HiveEntryCap object`); } return HiveEntryCap.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<HiveEntryCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HiveEntryCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHiveEntryCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HiveEntryCap object`); }
 return HiveEntryCap.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NewFeeCollectorKrafted =============================== */

export function isNewFeeCollectorKrafted(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::NewFeeCollectorKrafted"; }

export interface NewFeeCollectorKraftedFields { coinType: ToField<String1>; feeCollectorAddr: ToField<"address"> }

export type NewFeeCollectorKraftedReified = Reified< NewFeeCollectorKrafted, NewFeeCollectorKraftedFields >;

export class NewFeeCollectorKrafted implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::NewFeeCollectorKrafted"; static readonly $numTypeParams = 0;

 readonly $typeName = NewFeeCollectorKrafted.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::NewFeeCollectorKrafted";

 readonly $typeArgs: [];

 readonly coinType: ToField<String1>; readonly feeCollectorAddr: ToField<"address">

 private constructor(typeArgs: [], fields: NewFeeCollectorKraftedFields, ) { this.$fullTypeName = composeSuiType( NewFeeCollectorKrafted.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::NewFeeCollectorKrafted"; this.$typeArgs = typeArgs;

 this.coinType = fields.coinType;; this.feeCollectorAddr = fields.feeCollectorAddr; }

 static reified( ): NewFeeCollectorKraftedReified { return { typeName: NewFeeCollectorKrafted.$typeName, fullTypeName: composeSuiType( NewFeeCollectorKrafted.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::NewFeeCollectorKrafted", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewFeeCollectorKrafted.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewFeeCollectorKrafted.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NewFeeCollectorKrafted.fromBcs( data, ), bcs: NewFeeCollectorKrafted.bcs, fromJSONField: (field: any) => NewFeeCollectorKrafted.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NewFeeCollectorKrafted.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NewFeeCollectorKrafted.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NewFeeCollectorKrafted.fetch( client, id, ), new: ( fields: NewFeeCollectorKraftedFields, ) => { return new NewFeeCollectorKrafted( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewFeeCollectorKrafted.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NewFeeCollectorKrafted>> { return phantom(NewFeeCollectorKrafted.reified( )); } static get p() { return NewFeeCollectorKrafted.phantom() }

 static get bcs() { return bcs.struct("NewFeeCollectorKrafted", {

 coin_type: String1.bcs, fee_collector_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): NewFeeCollectorKrafted { return NewFeeCollectorKrafted.reified( ).new( { coinType: decodeFromFields(String1.reified(), fields.coin_type), feeCollectorAddr: decodeFromFields("address", fields.fee_collector_addr) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NewFeeCollectorKrafted { if (!isNewFeeCollectorKrafted(item.type)) { throw new Error("not a NewFeeCollectorKrafted type");

 }

 return NewFeeCollectorKrafted.reified( ).new( { coinType: decodeFromFieldsWithTypes(String1.reified(), item.fields.coin_type), feeCollectorAddr: decodeFromFieldsWithTypes("address", item.fields.fee_collector_addr) } ) }

 static fromBcs( data: Uint8Array ): NewFeeCollectorKrafted { return NewFeeCollectorKrafted.fromFields( NewFeeCollectorKrafted.bcs.parse(data) ) }

 toJSONField() { return {

 coinType: this.coinType,feeCollectorAddr: this.feeCollectorAddr,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NewFeeCollectorKrafted { return NewFeeCollectorKrafted.reified( ).new( { coinType: decodeFromJSONField(String1.reified(), field.coinType), feeCollectorAddr: decodeFromJSONField("address", field.feeCollectorAddr) } ) }

 static fromJSON( json: Record<string, any> ): NewFeeCollectorKrafted { if (json.$typeName !== NewFeeCollectorKrafted.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NewFeeCollectorKrafted.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NewFeeCollectorKrafted { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewFeeCollectorKrafted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewFeeCollectorKrafted object`); } return NewFeeCollectorKrafted.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NewFeeCollectorKrafted> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewFeeCollectorKrafted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewFeeCollectorKrafted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewFeeCollectorKrafted object`); }
 return NewFeeCollectorKrafted.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StableIdentifierAdded =============================== */

export function isStableIdentifierAdded(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierAdded"; }

export interface StableIdentifierAddedFields { identifier: ToField<String1> }

export type StableIdentifierAddedReified = Reified< StableIdentifierAdded, StableIdentifierAddedFields >;

export class StableIdentifierAdded implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierAdded"; static readonly $numTypeParams = 0;

 readonly $typeName = StableIdentifierAdded.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierAdded";

 readonly $typeArgs: [];

 readonly identifier: ToField<String1>

 private constructor(typeArgs: [], fields: StableIdentifierAddedFields, ) { this.$fullTypeName = composeSuiType( StableIdentifierAdded.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierAdded"; this.$typeArgs = typeArgs;

 this.identifier = fields.identifier; }

 static reified( ): StableIdentifierAddedReified { return { typeName: StableIdentifierAdded.$typeName, fullTypeName: composeSuiType( StableIdentifierAdded.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierAdded", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StableIdentifierAdded.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StableIdentifierAdded.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StableIdentifierAdded.fromBcs( data, ), bcs: StableIdentifierAdded.bcs, fromJSONField: (field: any) => StableIdentifierAdded.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StableIdentifierAdded.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StableIdentifierAdded.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StableIdentifierAdded.fetch( client, id, ), new: ( fields: StableIdentifierAddedFields, ) => { return new StableIdentifierAdded( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StableIdentifierAdded.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StableIdentifierAdded>> { return phantom(StableIdentifierAdded.reified( )); } static get p() { return StableIdentifierAdded.phantom() }

 static get bcs() { return bcs.struct("StableIdentifierAdded", {

 identifier: String1.bcs

}) };

 static fromFields( fields: Record<string, any> ): StableIdentifierAdded { return StableIdentifierAdded.reified( ).new( { identifier: decodeFromFields(String1.reified(), fields.identifier) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StableIdentifierAdded { if (!isStableIdentifierAdded(item.type)) { throw new Error("not a StableIdentifierAdded type");

 }

 return StableIdentifierAdded.reified( ).new( { identifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.identifier) } ) }

 static fromBcs( data: Uint8Array ): StableIdentifierAdded { return StableIdentifierAdded.fromFields( StableIdentifierAdded.bcs.parse(data) ) }

 toJSONField() { return {

 identifier: this.identifier,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StableIdentifierAdded { return StableIdentifierAdded.reified( ).new( { identifier: decodeFromJSONField(String1.reified(), field.identifier) } ) }

 static fromJSON( json: Record<string, any> ): StableIdentifierAdded { if (json.$typeName !== StableIdentifierAdded.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StableIdentifierAdded.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StableIdentifierAdded { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStableIdentifierAdded(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StableIdentifierAdded object`); } return StableIdentifierAdded.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StableIdentifierAdded> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StableIdentifierAdded object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStableIdentifierAdded(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StableIdentifierAdded object`); }
 return StableIdentifierAdded.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StableIdentifierRemoved =============================== */

export function isStableIdentifierRemoved(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierRemoved"; }

export interface StableIdentifierRemovedFields { identifier: ToField<String1> }

export type StableIdentifierRemovedReified = Reified< StableIdentifierRemoved, StableIdentifierRemovedFields >;

export class StableIdentifierRemoved implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierRemoved"; static readonly $numTypeParams = 0;

 readonly $typeName = StableIdentifierRemoved.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierRemoved";

 readonly $typeArgs: [];

 readonly identifier: ToField<String1>

 private constructor(typeArgs: [], fields: StableIdentifierRemovedFields, ) { this.$fullTypeName = composeSuiType( StableIdentifierRemoved.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierRemoved"; this.$typeArgs = typeArgs;

 this.identifier = fields.identifier; }

 static reified( ): StableIdentifierRemovedReified { return { typeName: StableIdentifierRemoved.$typeName, fullTypeName: composeSuiType( StableIdentifierRemoved.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::StableIdentifierRemoved", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StableIdentifierRemoved.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StableIdentifierRemoved.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StableIdentifierRemoved.fromBcs( data, ), bcs: StableIdentifierRemoved.bcs, fromJSONField: (field: any) => StableIdentifierRemoved.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StableIdentifierRemoved.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StableIdentifierRemoved.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StableIdentifierRemoved.fetch( client, id, ), new: ( fields: StableIdentifierRemovedFields, ) => { return new StableIdentifierRemoved( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StableIdentifierRemoved.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StableIdentifierRemoved>> { return phantom(StableIdentifierRemoved.reified( )); } static get p() { return StableIdentifierRemoved.phantom() }

 static get bcs() { return bcs.struct("StableIdentifierRemoved", {

 identifier: String1.bcs

}) };

 static fromFields( fields: Record<string, any> ): StableIdentifierRemoved { return StableIdentifierRemoved.reified( ).new( { identifier: decodeFromFields(String1.reified(), fields.identifier) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StableIdentifierRemoved { if (!isStableIdentifierRemoved(item.type)) { throw new Error("not a StableIdentifierRemoved type");

 }

 return StableIdentifierRemoved.reified( ).new( { identifier: decodeFromFieldsWithTypes(String1.reified(), item.fields.identifier) } ) }

 static fromBcs( data: Uint8Array ): StableIdentifierRemoved { return StableIdentifierRemoved.fromFields( StableIdentifierRemoved.bcs.parse(data) ) }

 toJSONField() { return {

 identifier: this.identifier,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StableIdentifierRemoved { return StableIdentifierRemoved.reified( ).new( { identifier: decodeFromJSONField(String1.reified(), field.identifier) } ) }

 static fromJSON( json: Record<string, any> ): StableIdentifierRemoved { if (json.$typeName !== StableIdentifierRemoved.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StableIdentifierRemoved.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StableIdentifierRemoved { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStableIdentifierRemoved(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StableIdentifierRemoved object`); } return StableIdentifierRemoved.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StableIdentifierRemoved> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StableIdentifierRemoved object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStableIdentifierRemoved(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StableIdentifierRemoved object`); }
 return StableIdentifierRemoved.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ThreeAmmFeeClaimCapability =============================== */

export function isThreeAmmFeeClaimCapability(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::ThreeAmmFeeClaimCapability"; }

export interface ThreeAmmFeeClaimCapabilityFields { id: ToField<UID> }

export type ThreeAmmFeeClaimCapabilityReified = Reified< ThreeAmmFeeClaimCapability, ThreeAmmFeeClaimCapabilityFields >;

export class ThreeAmmFeeClaimCapability implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::ThreeAmmFeeClaimCapability"; static readonly $numTypeParams = 0;

 readonly $typeName = ThreeAmmFeeClaimCapability.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::ThreeAmmFeeClaimCapability";

 readonly $typeArgs: [];

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: ThreeAmmFeeClaimCapabilityFields, ) { this.$fullTypeName = composeSuiType( ThreeAmmFeeClaimCapability.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::ThreeAmmFeeClaimCapability"; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): ThreeAmmFeeClaimCapabilityReified { return { typeName: ThreeAmmFeeClaimCapability.$typeName, fullTypeName: composeSuiType( ThreeAmmFeeClaimCapability.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::ThreeAmmFeeClaimCapability", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ThreeAmmFeeClaimCapability.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ThreeAmmFeeClaimCapability.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ThreeAmmFeeClaimCapability.fromBcs( data, ), bcs: ThreeAmmFeeClaimCapability.bcs, fromJSONField: (field: any) => ThreeAmmFeeClaimCapability.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ThreeAmmFeeClaimCapability.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ThreeAmmFeeClaimCapability.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ThreeAmmFeeClaimCapability.fetch( client, id, ), new: ( fields: ThreeAmmFeeClaimCapabilityFields, ) => { return new ThreeAmmFeeClaimCapability( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ThreeAmmFeeClaimCapability.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ThreeAmmFeeClaimCapability>> { return phantom(ThreeAmmFeeClaimCapability.reified( )); } static get p() { return ThreeAmmFeeClaimCapability.phantom() }

 static get bcs() { return bcs.struct("ThreeAmmFeeClaimCapability", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): ThreeAmmFeeClaimCapability { return ThreeAmmFeeClaimCapability.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ThreeAmmFeeClaimCapability { if (!isThreeAmmFeeClaimCapability(item.type)) { throw new Error("not a ThreeAmmFeeClaimCapability type");

 }

 return ThreeAmmFeeClaimCapability.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): ThreeAmmFeeClaimCapability { return ThreeAmmFeeClaimCapability.fromFields( ThreeAmmFeeClaimCapability.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ThreeAmmFeeClaimCapability { return ThreeAmmFeeClaimCapability.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): ThreeAmmFeeClaimCapability { if (json.$typeName !== ThreeAmmFeeClaimCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ThreeAmmFeeClaimCapability.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ThreeAmmFeeClaimCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isThreeAmmFeeClaimCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ThreeAmmFeeClaimCapability object`); } return ThreeAmmFeeClaimCapability.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ThreeAmmFeeClaimCapability> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ThreeAmmFeeClaimCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isThreeAmmFeeClaimCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ThreeAmmFeeClaimCapability object`); }
 return ThreeAmmFeeClaimCapability.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Treasury =============================== */

export function isTreasury(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Treasury<"); }

export interface TreasuryFields<X extends PhantomTypeArgument> { id: ToField<UID>; balance: ToField<Balance<X>> }

export type TreasuryReified<X extends PhantomTypeArgument> = Reified< Treasury<X>, TreasuryFields<X> >;

export class Treasury<X extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Treasury"; static readonly $numTypeParams = 1;

 readonly $typeName = Treasury.$typeName;

 readonly $fullTypeName: `0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Treasury<${PhantomToTypeStr<X>}>`;

 readonly $typeArgs: [PhantomToTypeStr<X>];

 readonly id: ToField<UID>; readonly balance: ToField<Balance<X>>

 private constructor(typeArgs: [PhantomToTypeStr<X>], fields: TreasuryFields<X>, ) { this.$fullTypeName = composeSuiType( Treasury.$typeName, ...typeArgs ) as `0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Treasury<${PhantomToTypeStr<X>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.balance = fields.balance; }

 static reified<X extends PhantomReified<PhantomTypeArgument>>( X: X ): TreasuryReified<ToPhantomTypeArgument<X>> { return { typeName: Treasury.$typeName, fullTypeName: composeSuiType( Treasury.$typeName, ...[extractType(X)] ) as `0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::Treasury<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}>`, typeArgs: [ extractType(X) ] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>], reifiedTypeArgs: [X], fromFields: (fields: Record<string, any>) => Treasury.fromFields( X, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Treasury.fromFieldsWithTypes( X, item, ), fromBcs: (data: Uint8Array) => Treasury.fromBcs( X, data, ), bcs: Treasury.bcs, fromJSONField: (field: any) => Treasury.fromJSONField( X, field, ), fromJSON: (json: Record<string, any>) => Treasury.fromJSON( X, json, ), fromSuiParsedData: (content: SuiParsedData) => Treasury.fromSuiParsedData( X, content, ), fetch: async (client: SuiClient, id: string) => Treasury.fetch( client, X, id, ), new: ( fields: TreasuryFields<ToPhantomTypeArgument<X>>, ) => { return new Treasury( [extractType(X)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Treasury.reified }

 static phantom<X extends PhantomReified<PhantomTypeArgument>>( X: X ): PhantomReified<ToTypeStr<Treasury<ToPhantomTypeArgument<X>>>> { return phantom(Treasury.reified( X )); } static get p() { return Treasury.phantom }

 static get bcs() { return bcs.struct("Treasury", {

 id: UID.bcs, balance: Balance.bcs

}) };

 static fromFields<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, fields: Record<string, any> ): Treasury<ToPhantomTypeArgument<X>> { return Treasury.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), balance: decodeFromFields(Balance.reified(typeArg), fields.balance) } ) }

 static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, item: FieldsWithTypes ): Treasury<ToPhantomTypeArgument<X>> { if (!isTreasury(item.type)) { throw new Error("not a Treasury type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Treasury.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), balance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.balance) } ) }

 static fromBcs<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, data: Uint8Array ): Treasury<ToPhantomTypeArgument<X>> { return Treasury.fromFields( typeArg, Treasury.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,balance: this.balance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, field: any ): Treasury<ToPhantomTypeArgument<X>> { return Treasury.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), balance: decodeFromJSONField(Balance.reified(typeArg), field.balance) } ) }

 static fromJSON<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, json: Record<string, any> ): Treasury<ToPhantomTypeArgument<X>> { if (json.$typeName !== Treasury.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Treasury.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Treasury.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>>( typeArg: X, content: SuiParsedData ): Treasury<ToPhantomTypeArgument<X>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTreasury(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Treasury object`); } return Treasury.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<X extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: X, id: string ): Promise<Treasury<ToPhantomTypeArgument<X>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Treasury object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTreasury(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Treasury object`); }
 return Treasury.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== TreasuryPercentUpdated =============================== */

export function isTreasuryPercentUpdated(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryPercentUpdated"; }

export interface TreasuryPercentUpdatedFields { treasuryFeePercent: ToField<"u64"> }

export type TreasuryPercentUpdatedReified = Reified< TreasuryPercentUpdated, TreasuryPercentUpdatedFields >;

export class TreasuryPercentUpdated implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryPercentUpdated"; static readonly $numTypeParams = 0;

 readonly $typeName = TreasuryPercentUpdated.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryPercentUpdated";

 readonly $typeArgs: [];

 readonly treasuryFeePercent: ToField<"u64">

 private constructor(typeArgs: [], fields: TreasuryPercentUpdatedFields, ) { this.$fullTypeName = composeSuiType( TreasuryPercentUpdated.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryPercentUpdated"; this.$typeArgs = typeArgs;

 this.treasuryFeePercent = fields.treasuryFeePercent; }

 static reified( ): TreasuryPercentUpdatedReified { return { typeName: TreasuryPercentUpdated.$typeName, fullTypeName: composeSuiType( TreasuryPercentUpdated.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryPercentUpdated", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TreasuryPercentUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TreasuryPercentUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TreasuryPercentUpdated.fromBcs( data, ), bcs: TreasuryPercentUpdated.bcs, fromJSONField: (field: any) => TreasuryPercentUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TreasuryPercentUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TreasuryPercentUpdated.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => TreasuryPercentUpdated.fetch( client, id, ), new: ( fields: TreasuryPercentUpdatedFields, ) => { return new TreasuryPercentUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TreasuryPercentUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TreasuryPercentUpdated>> { return phantom(TreasuryPercentUpdated.reified( )); } static get p() { return TreasuryPercentUpdated.phantom() }

 static get bcs() { return bcs.struct("TreasuryPercentUpdated", {

 treasury_fee_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TreasuryPercentUpdated { return TreasuryPercentUpdated.reified( ).new( { treasuryFeePercent: decodeFromFields("u64", fields.treasury_fee_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TreasuryPercentUpdated { if (!isTreasuryPercentUpdated(item.type)) { throw new Error("not a TreasuryPercentUpdated type");

 }

 return TreasuryPercentUpdated.reified( ).new( { treasuryFeePercent: decodeFromFieldsWithTypes("u64", item.fields.treasury_fee_percent) } ) }

 static fromBcs( data: Uint8Array ): TreasuryPercentUpdated { return TreasuryPercentUpdated.fromFields( TreasuryPercentUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 treasuryFeePercent: this.treasuryFeePercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TreasuryPercentUpdated { return TreasuryPercentUpdated.reified( ).new( { treasuryFeePercent: decodeFromJSONField("u64", field.treasuryFeePercent) } ) }

 static fromJSON( json: Record<string, any> ): TreasuryPercentUpdated { if (json.$typeName !== TreasuryPercentUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TreasuryPercentUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TreasuryPercentUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTreasuryPercentUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TreasuryPercentUpdated object`); } return TreasuryPercentUpdated.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<TreasuryPercentUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TreasuryPercentUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTreasuryPercentUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TreasuryPercentUpdated object`); }
 return TreasuryPercentUpdated.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== TreasuryResourcesDistributed =============================== */

export function isTreasuryResourcesDistributed(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryResourcesDistributed"; }

export interface TreasuryResourcesDistributedFields { token: ToField<TypeName>; amount: ToField<"u64"> }

export type TreasuryResourcesDistributedReified = Reified< TreasuryResourcesDistributed, TreasuryResourcesDistributedFields >;

export class TreasuryResourcesDistributed implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryResourcesDistributed"; static readonly $numTypeParams = 0;

 readonly $typeName = TreasuryResourcesDistributed.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryResourcesDistributed";

 readonly $typeArgs: [];

 readonly token: ToField<TypeName>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [], fields: TreasuryResourcesDistributedFields, ) { this.$fullTypeName = composeSuiType( TreasuryResourcesDistributed.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryResourcesDistributed"; this.$typeArgs = typeArgs;

 this.token = fields.token;; this.amount = fields.amount; }

 static reified( ): TreasuryResourcesDistributedReified { return { typeName: TreasuryResourcesDistributed.$typeName, fullTypeName: composeSuiType( TreasuryResourcesDistributed.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TreasuryResourcesDistributed", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TreasuryResourcesDistributed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TreasuryResourcesDistributed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TreasuryResourcesDistributed.fromBcs( data, ), bcs: TreasuryResourcesDistributed.bcs, fromJSONField: (field: any) => TreasuryResourcesDistributed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TreasuryResourcesDistributed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TreasuryResourcesDistributed.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => TreasuryResourcesDistributed.fetch( client, id, ), new: ( fields: TreasuryResourcesDistributedFields, ) => { return new TreasuryResourcesDistributed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TreasuryResourcesDistributed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TreasuryResourcesDistributed>> { return phantom(TreasuryResourcesDistributed.reified( )); } static get p() { return TreasuryResourcesDistributed.phantom() }

 static get bcs() { return bcs.struct("TreasuryResourcesDistributed", {

 token: TypeName.bcs, amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TreasuryResourcesDistributed { return TreasuryResourcesDistributed.reified( ).new( { token: decodeFromFields(TypeName.reified(), fields.token), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TreasuryResourcesDistributed { if (!isTreasuryResourcesDistributed(item.type)) { throw new Error("not a TreasuryResourcesDistributed type");

 }

 return TreasuryResourcesDistributed.reified( ).new( { token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs( data: Uint8Array ): TreasuryResourcesDistributed { return TreasuryResourcesDistributed.fromFields( TreasuryResourcesDistributed.bcs.parse(data) ) }

 toJSONField() { return {

 token: this.token.toJSONField(),amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TreasuryResourcesDistributed { return TreasuryResourcesDistributed.reified( ).new( { token: decodeFromJSONField(TypeName.reified(), field.token), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON( json: Record<string, any> ): TreasuryResourcesDistributed { if (json.$typeName !== TreasuryResourcesDistributed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TreasuryResourcesDistributed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TreasuryResourcesDistributed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTreasuryResourcesDistributed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TreasuryResourcesDistributed object`); } return TreasuryResourcesDistributed.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<TreasuryResourcesDistributed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TreasuryResourcesDistributed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTreasuryResourcesDistributed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TreasuryResourcesDistributed object`); }
 return TreasuryResourcesDistributed.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== TwoAmmFeeClaimCapability =============================== */

export function isTwoAmmFeeClaimCapability(type: string): boolean { type = compressSuiType(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TwoAmmFeeClaimCapability"; }

export interface TwoAmmFeeClaimCapabilityFields { id: ToField<UID> }

export type TwoAmmFeeClaimCapabilityReified = Reified< TwoAmmFeeClaimCapability, TwoAmmFeeClaimCapabilityFields >;

export class TwoAmmFeeClaimCapability implements StructClass { static readonly $typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TwoAmmFeeClaimCapability"; static readonly $numTypeParams = 0;

 readonly $typeName = TwoAmmFeeClaimCapability.$typeName;

 readonly $fullTypeName: "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TwoAmmFeeClaimCapability";

 readonly $typeArgs: [];

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: TwoAmmFeeClaimCapabilityFields, ) { this.$fullTypeName = composeSuiType( TwoAmmFeeClaimCapability.$typeName, ...typeArgs ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TwoAmmFeeClaimCapability"; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): TwoAmmFeeClaimCapabilityReified { return { typeName: TwoAmmFeeClaimCapability.$typeName, fullTypeName: composeSuiType( TwoAmmFeeClaimCapability.$typeName, ...[] ) as "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::config::TwoAmmFeeClaimCapability", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TwoAmmFeeClaimCapability.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TwoAmmFeeClaimCapability.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TwoAmmFeeClaimCapability.fromBcs( data, ), bcs: TwoAmmFeeClaimCapability.bcs, fromJSONField: (field: any) => TwoAmmFeeClaimCapability.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TwoAmmFeeClaimCapability.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TwoAmmFeeClaimCapability.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => TwoAmmFeeClaimCapability.fetch( client, id, ), new: ( fields: TwoAmmFeeClaimCapabilityFields, ) => { return new TwoAmmFeeClaimCapability( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TwoAmmFeeClaimCapability.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TwoAmmFeeClaimCapability>> { return phantom(TwoAmmFeeClaimCapability.reified( )); } static get p() { return TwoAmmFeeClaimCapability.phantom() }

 static get bcs() { return bcs.struct("TwoAmmFeeClaimCapability", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): TwoAmmFeeClaimCapability { return TwoAmmFeeClaimCapability.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TwoAmmFeeClaimCapability { if (!isTwoAmmFeeClaimCapability(item.type)) { throw new Error("not a TwoAmmFeeClaimCapability type");

 }

 return TwoAmmFeeClaimCapability.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): TwoAmmFeeClaimCapability { return TwoAmmFeeClaimCapability.fromFields( TwoAmmFeeClaimCapability.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TwoAmmFeeClaimCapability { return TwoAmmFeeClaimCapability.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): TwoAmmFeeClaimCapability { if (json.$typeName !== TwoAmmFeeClaimCapability.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TwoAmmFeeClaimCapability.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TwoAmmFeeClaimCapability { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTwoAmmFeeClaimCapability(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TwoAmmFeeClaimCapability object`); } return TwoAmmFeeClaimCapability.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<TwoAmmFeeClaimCapability> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TwoAmmFeeClaimCapability object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTwoAmmFeeClaimCapability(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TwoAmmFeeClaimCapability object`); }
 return TwoAmmFeeClaimCapability.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
