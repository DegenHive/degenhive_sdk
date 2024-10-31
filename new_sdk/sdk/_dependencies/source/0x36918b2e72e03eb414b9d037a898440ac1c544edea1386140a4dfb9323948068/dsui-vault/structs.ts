import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {Vector} from "../../../../_framework/vector";
import {Balance} from "../../0x2/balance/structs";
import {TreasuryCap} from "../../0x2/coin/structs";
import {LinkedTable} from "../../0x2/linked-table/structs";
import {ID, UID} from "../../0x2/object/structs";
import {SUI} from "../../0x2/sui/structs";
import {StakedSui} from "../../0x3/staking-pool/structs";
import {DSUI} from "../../0x49ff1fad22d99ddda9118f3df46b83dccdc040f914f715c753aad0321bcd2f8e/dsui/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== ConfigParams =============================== */

export function isConfigParams(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::ConfigParams`; }

export interface ConfigParamsFields { pauseStake: ToField<"bool">; protocolFeePercent: ToField<"u64">; serviceFeePercent: ToField<"u64">; unstakeDelayEpoches: ToField<"u64">; treasuryPercent: ToField<"u64"> }

export type ConfigParamsReified = Reified< ConfigParams, ConfigParamsFields >;

export class ConfigParams implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::ConfigParams`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ConfigParams.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::ConfigParams`; readonly $typeArgs: []; readonly $isPhantom = ConfigParams.$isPhantom;

 readonly pauseStake: ToField<"bool">; readonly protocolFeePercent: ToField<"u64">; readonly serviceFeePercent: ToField<"u64">; readonly unstakeDelayEpoches: ToField<"u64">; readonly treasuryPercent: ToField<"u64">

 private constructor(typeArgs: [], fields: ConfigParamsFields, ) { this.$fullTypeName = composeSuiType( ConfigParams.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::ConfigParams`; this.$typeArgs = typeArgs;

 this.pauseStake = fields.pauseStake;; this.protocolFeePercent = fields.protocolFeePercent;; this.serviceFeePercent = fields.serviceFeePercent;; this.unstakeDelayEpoches = fields.unstakeDelayEpoches;; this.treasuryPercent = fields.treasuryPercent; }

 static reified( ): ConfigParamsReified { return { typeName: ConfigParams.$typeName, fullTypeName: composeSuiType( ConfigParams.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::ConfigParams`, typeArgs: [ ] as [], isPhantom: ConfigParams.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ConfigParams.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ConfigParams.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ConfigParams.fromBcs( data, ), bcs: ConfigParams.bcs, fromJSONField: (field: any) => ConfigParams.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ConfigParams.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ConfigParams.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ConfigParams.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ConfigParams.fetch( client, id, ), new: ( fields: ConfigParamsFields, ) => { return new ConfigParams( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ConfigParams.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ConfigParams>> { return phantom(ConfigParams.reified( )); } static get p() { return ConfigParams.phantom() }

 static get bcs() { return bcs.struct("ConfigParams", {

 pause_stake: bcs.bool(), protocol_fee_percent: bcs.u64(), service_fee_percent: bcs.u64(), unstake_delay_epoches: bcs.u64(), treasury_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ConfigParams { return ConfigParams.reified( ).new( { pauseStake: decodeFromFields("bool", fields.pause_stake), protocolFeePercent: decodeFromFields("u64", fields.protocol_fee_percent), serviceFeePercent: decodeFromFields("u64", fields.service_fee_percent), unstakeDelayEpoches: decodeFromFields("u64", fields.unstake_delay_epoches), treasuryPercent: decodeFromFields("u64", fields.treasury_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ConfigParams { if (!isConfigParams(item.type)) { throw new Error("not a ConfigParams type");

 }

 return ConfigParams.reified( ).new( { pauseStake: decodeFromFieldsWithTypes("bool", item.fields.pause_stake), protocolFeePercent: decodeFromFieldsWithTypes("u64", item.fields.protocol_fee_percent), serviceFeePercent: decodeFromFieldsWithTypes("u64", item.fields.service_fee_percent), unstakeDelayEpoches: decodeFromFieldsWithTypes("u64", item.fields.unstake_delay_epoches), treasuryPercent: decodeFromFieldsWithTypes("u64", item.fields.treasury_percent) } ) }

 static fromBcs( data: Uint8Array ): ConfigParams { return ConfigParams.fromFields( ConfigParams.bcs.parse(data) ) }

 toJSONField() { return {

 pauseStake: this.pauseStake,protocolFeePercent: this.protocolFeePercent.toString(),serviceFeePercent: this.serviceFeePercent.toString(),unstakeDelayEpoches: this.unstakeDelayEpoches.toString(),treasuryPercent: this.treasuryPercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ConfigParams { return ConfigParams.reified( ).new( { pauseStake: decodeFromJSONField("bool", field.pauseStake), protocolFeePercent: decodeFromJSONField("u64", field.protocolFeePercent), serviceFeePercent: decodeFromJSONField("u64", field.serviceFeePercent), unstakeDelayEpoches: decodeFromJSONField("u64", field.unstakeDelayEpoches), treasuryPercent: decodeFromJSONField("u64", field.treasuryPercent) } ) }

 static fromJSON( json: Record<string, any> ): ConfigParams { if (json.$typeName !== ConfigParams.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ConfigParams.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ConfigParams { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConfigParams(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ConfigParams object`); } return ConfigParams.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ConfigParams { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isConfigParams(data.bcs.type)) { throw new Error(`object at is not a ConfigParams object`); }

 return ConfigParams.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ConfigParams.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ConfigParams> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ConfigParams object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConfigParams(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ConfigParams object`); }

 return ConfigParams.fromSuiObjectData( res.data ); }

 }

/* ============================== DSuiVault =============================== */

export function isDSuiVault(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::DSuiVault`; }

export interface DSuiVaultFields { id: ToField<UID>; configParams: ToField<ConfigParams>; dsuiKraftCap: ToField<TreasuryCap<ToPhantom<DSUI>>>; whitelistedValidators: ToField<Vector<"address">>; validatorPools: ToField<LinkedTable<"address", ToPhantom<ValidatorPool>>>; selectedValidatorMapping: ToField<LinkedTable<"address", ToPhantom<Balance<ToPhantom<SUI>>>>>; suiToStake: ToField<Balance<ToPhantom<SUI>>>; hiveFeeVault: ToField<Balance<ToPhantom<SUI>>>; unstakedSuiReserve: ToField<Balance<ToPhantom<SUI>>>; unstakeEpochs: ToField<LinkedTable<"u64", ToPhantom<RequestsForEpoch>>>; totalPrincipalStaked: ToField<"u64">; totalAccruedRewards: ToField<"u64">; suiToUnstake: ToField<"u64">; uncollectedProtocolFees: ToField<"u64">; dsuiSupply: ToField<"u64">; rewardsLastUpdatedEpoch: ToField<"u64">; suiClaimablePerDsui: ToField<"u128">; version: ToField<"u64"> }

export type DSuiVaultReified = Reified< DSuiVault, DSuiVaultFields >;

export class DSuiVault implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::DSuiVault`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DSuiVault.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::DSuiVault`; readonly $typeArgs: []; readonly $isPhantom = DSuiVault.$isPhantom;

 readonly id: ToField<UID>; readonly configParams: ToField<ConfigParams>; readonly dsuiKraftCap: ToField<TreasuryCap<ToPhantom<DSUI>>>; readonly whitelistedValidators: ToField<Vector<"address">>; readonly validatorPools: ToField<LinkedTable<"address", ToPhantom<ValidatorPool>>>; readonly selectedValidatorMapping: ToField<LinkedTable<"address", ToPhantom<Balance<ToPhantom<SUI>>>>>; readonly suiToStake: ToField<Balance<ToPhantom<SUI>>>; readonly hiveFeeVault: ToField<Balance<ToPhantom<SUI>>>; readonly unstakedSuiReserve: ToField<Balance<ToPhantom<SUI>>>; readonly unstakeEpochs: ToField<LinkedTable<"u64", ToPhantom<RequestsForEpoch>>>; readonly totalPrincipalStaked: ToField<"u64">; readonly totalAccruedRewards: ToField<"u64">; readonly suiToUnstake: ToField<"u64">; readonly uncollectedProtocolFees: ToField<"u64">; readonly dsuiSupply: ToField<"u64">; readonly rewardsLastUpdatedEpoch: ToField<"u64">; readonly suiClaimablePerDsui: ToField<"u128">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: DSuiVaultFields, ) { this.$fullTypeName = composeSuiType( DSuiVault.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::DSuiVault`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.configParams = fields.configParams;; this.dsuiKraftCap = fields.dsuiKraftCap;; this.whitelistedValidators = fields.whitelistedValidators;; this.validatorPools = fields.validatorPools;; this.selectedValidatorMapping = fields.selectedValidatorMapping;; this.suiToStake = fields.suiToStake;; this.hiveFeeVault = fields.hiveFeeVault;; this.unstakedSuiReserve = fields.unstakedSuiReserve;; this.unstakeEpochs = fields.unstakeEpochs;; this.totalPrincipalStaked = fields.totalPrincipalStaked;; this.totalAccruedRewards = fields.totalAccruedRewards;; this.suiToUnstake = fields.suiToUnstake;; this.uncollectedProtocolFees = fields.uncollectedProtocolFees;; this.dsuiSupply = fields.dsuiSupply;; this.rewardsLastUpdatedEpoch = fields.rewardsLastUpdatedEpoch;; this.suiClaimablePerDsui = fields.suiClaimablePerDsui;; this.version = fields.version; }

 static reified( ): DSuiVaultReified { return { typeName: DSuiVault.$typeName, fullTypeName: composeSuiType( DSuiVault.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::DSuiVault`, typeArgs: [ ] as [], isPhantom: DSuiVault.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DSuiVault.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DSuiVault.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DSuiVault.fromBcs( data, ), bcs: DSuiVault.bcs, fromJSONField: (field: any) => DSuiVault.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DSuiVault.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DSuiVault.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DSuiVault.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DSuiVault.fetch( client, id, ), new: ( fields: DSuiVaultFields, ) => { return new DSuiVault( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DSuiVault.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DSuiVault>> { return phantom(DSuiVault.reified( )); } static get p() { return DSuiVault.phantom() }

 static get bcs() { return bcs.struct("DSuiVault", {

 id: UID.bcs, config_params: ConfigParams.bcs, dsui_kraft_cap: TreasuryCap.bcs, whitelisted_validators: bcs.vector(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), validator_pools: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), selected_validator_mapping: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), sui_to_stake: Balance.bcs, hive_fee_vault: Balance.bcs, unstaked_sui_reserve: Balance.bcs, unstake_epochs: LinkedTable.bcs(bcs.u64()), total_principal_staked: bcs.u64(), total_accrued_rewards: bcs.u64(), sui_to_unstake: bcs.u64(), uncollected_protocol_fees: bcs.u64(), dsui_supply: bcs.u64(), rewards_last_updated_epoch: bcs.u64(), sui_claimable_per_dsui: bcs.u128(), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DSuiVault { return DSuiVault.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), configParams: decodeFromFields(ConfigParams.reified(), fields.config_params), dsuiKraftCap: decodeFromFields(TreasuryCap.reified(reified.phantom(DSUI.reified())), fields.dsui_kraft_cap), whitelistedValidators: decodeFromFields(reified.vector("address"), fields.whitelisted_validators), validatorPools: decodeFromFields(LinkedTable.reified("address", reified.phantom(ValidatorPool.reified())), fields.validator_pools), selectedValidatorMapping: decodeFromFields(LinkedTable.reified("address", reified.phantom(Balance.reified(reified.phantom(SUI.reified())))), fields.selected_validator_mapping), suiToStake: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.sui_to_stake), hiveFeeVault: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.hive_fee_vault), unstakedSuiReserve: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.unstaked_sui_reserve), unstakeEpochs: decodeFromFields(LinkedTable.reified("u64", reified.phantom(RequestsForEpoch.reified())), fields.unstake_epochs), totalPrincipalStaked: decodeFromFields("u64", fields.total_principal_staked), totalAccruedRewards: decodeFromFields("u64", fields.total_accrued_rewards), suiToUnstake: decodeFromFields("u64", fields.sui_to_unstake), uncollectedProtocolFees: decodeFromFields("u64", fields.uncollected_protocol_fees), dsuiSupply: decodeFromFields("u64", fields.dsui_supply), rewardsLastUpdatedEpoch: decodeFromFields("u64", fields.rewards_last_updated_epoch), suiClaimablePerDsui: decodeFromFields("u128", fields.sui_claimable_per_dsui), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DSuiVault { if (!isDSuiVault(item.type)) { throw new Error("not a DSuiVault type");

 }

 return DSuiVault.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), configParams: decodeFromFieldsWithTypes(ConfigParams.reified(), item.fields.config_params), dsuiKraftCap: decodeFromFieldsWithTypes(TreasuryCap.reified(reified.phantom(DSUI.reified())), item.fields.dsui_kraft_cap), whitelistedValidators: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.whitelisted_validators), validatorPools: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(ValidatorPool.reified())), item.fields.validator_pools), selectedValidatorMapping: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(Balance.reified(reified.phantom(SUI.reified())))), item.fields.selected_validator_mapping), suiToStake: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.sui_to_stake), hiveFeeVault: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.hive_fee_vault), unstakedSuiReserve: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.unstaked_sui_reserve), unstakeEpochs: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(RequestsForEpoch.reified())), item.fields.unstake_epochs), totalPrincipalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_principal_staked), totalAccruedRewards: decodeFromFieldsWithTypes("u64", item.fields.total_accrued_rewards), suiToUnstake: decodeFromFieldsWithTypes("u64", item.fields.sui_to_unstake), uncollectedProtocolFees: decodeFromFieldsWithTypes("u64", item.fields.uncollected_protocol_fees), dsuiSupply: decodeFromFieldsWithTypes("u64", item.fields.dsui_supply), rewardsLastUpdatedEpoch: decodeFromFieldsWithTypes("u64", item.fields.rewards_last_updated_epoch), suiClaimablePerDsui: decodeFromFieldsWithTypes("u128", item.fields.sui_claimable_per_dsui), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): DSuiVault { return DSuiVault.fromFields( DSuiVault.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,configParams: this.configParams.toJSONField(),dsuiKraftCap: this.dsuiKraftCap.toJSONField(),whitelistedValidators: fieldToJSON<Vector<"address">>(`vector<address>`, this.whitelistedValidators),validatorPools: this.validatorPools.toJSONField(),selectedValidatorMapping: this.selectedValidatorMapping.toJSONField(),suiToStake: this.suiToStake.toJSONField(),hiveFeeVault: this.hiveFeeVault.toJSONField(),unstakedSuiReserve: this.unstakedSuiReserve.toJSONField(),unstakeEpochs: this.unstakeEpochs.toJSONField(),totalPrincipalStaked: this.totalPrincipalStaked.toString(),totalAccruedRewards: this.totalAccruedRewards.toString(),suiToUnstake: this.suiToUnstake.toString(),uncollectedProtocolFees: this.uncollectedProtocolFees.toString(),dsuiSupply: this.dsuiSupply.toString(),rewardsLastUpdatedEpoch: this.rewardsLastUpdatedEpoch.toString(),suiClaimablePerDsui: this.suiClaimablePerDsui.toString(),version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DSuiVault { return DSuiVault.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), configParams: decodeFromJSONField(ConfigParams.reified(), field.configParams), dsuiKraftCap: decodeFromJSONField(TreasuryCap.reified(reified.phantom(DSUI.reified())), field.dsuiKraftCap), whitelistedValidators: decodeFromJSONField(reified.vector("address"), field.whitelistedValidators), validatorPools: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(ValidatorPool.reified())), field.validatorPools), selectedValidatorMapping: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(Balance.reified(reified.phantom(SUI.reified())))), field.selectedValidatorMapping), suiToStake: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.suiToStake), hiveFeeVault: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.hiveFeeVault), unstakedSuiReserve: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.unstakedSuiReserve), unstakeEpochs: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(RequestsForEpoch.reified())), field.unstakeEpochs), totalPrincipalStaked: decodeFromJSONField("u64", field.totalPrincipalStaked), totalAccruedRewards: decodeFromJSONField("u64", field.totalAccruedRewards), suiToUnstake: decodeFromJSONField("u64", field.suiToUnstake), uncollectedProtocolFees: decodeFromJSONField("u64", field.uncollectedProtocolFees), dsuiSupply: decodeFromJSONField("u64", field.dsuiSupply), rewardsLastUpdatedEpoch: decodeFromJSONField("u64", field.rewardsLastUpdatedEpoch), suiClaimablePerDsui: decodeFromJSONField("u128", field.suiClaimablePerDsui), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): DSuiVault { if (json.$typeName !== DSuiVault.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DSuiVault.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DSuiVault { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDSuiVault(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DSuiVault object`); } return DSuiVault.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DSuiVault { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDSuiVault(data.bcs.type)) { throw new Error(`object at is not a DSuiVault object`); }

 return DSuiVault.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DSuiVault.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DSuiVault> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DSuiVault object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDSuiVault(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DSuiVault object`); }

 return DSuiVault.fromSuiObjectData( res.data ); }

 }

/* ============================== DegenSUIFeeStructureUpdated =============================== */

export function isDegenSUIFeeStructureUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::DegenSUIFeeStructureUpdated`; }

export interface DegenSUIFeeStructureUpdatedFields { protocolFeePercent: ToField<"u64">; serviceFeePercent: ToField<"u64">; treasuryPercent: ToField<"u64"> }

export type DegenSUIFeeStructureUpdatedReified = Reified< DegenSUIFeeStructureUpdated, DegenSUIFeeStructureUpdatedFields >;

export class DegenSUIFeeStructureUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::DegenSUIFeeStructureUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DegenSUIFeeStructureUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::DegenSUIFeeStructureUpdated`; readonly $typeArgs: []; readonly $isPhantom = DegenSUIFeeStructureUpdated.$isPhantom;

 readonly protocolFeePercent: ToField<"u64">; readonly serviceFeePercent: ToField<"u64">; readonly treasuryPercent: ToField<"u64">

 private constructor(typeArgs: [], fields: DegenSUIFeeStructureUpdatedFields, ) { this.$fullTypeName = composeSuiType( DegenSUIFeeStructureUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::DegenSUIFeeStructureUpdated`; this.$typeArgs = typeArgs;

 this.protocolFeePercent = fields.protocolFeePercent;; this.serviceFeePercent = fields.serviceFeePercent;; this.treasuryPercent = fields.treasuryPercent; }

 static reified( ): DegenSUIFeeStructureUpdatedReified { return { typeName: DegenSUIFeeStructureUpdated.$typeName, fullTypeName: composeSuiType( DegenSUIFeeStructureUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::DegenSUIFeeStructureUpdated`, typeArgs: [ ] as [], isPhantom: DegenSUIFeeStructureUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DegenSUIFeeStructureUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DegenSUIFeeStructureUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DegenSUIFeeStructureUpdated.fromBcs( data, ), bcs: DegenSUIFeeStructureUpdated.bcs, fromJSONField: (field: any) => DegenSUIFeeStructureUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DegenSUIFeeStructureUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DegenSUIFeeStructureUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DegenSUIFeeStructureUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DegenSUIFeeStructureUpdated.fetch( client, id, ), new: ( fields: DegenSUIFeeStructureUpdatedFields, ) => { return new DegenSUIFeeStructureUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DegenSUIFeeStructureUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DegenSUIFeeStructureUpdated>> { return phantom(DegenSUIFeeStructureUpdated.reified( )); } static get p() { return DegenSUIFeeStructureUpdated.phantom() }

 static get bcs() { return bcs.struct("DegenSUIFeeStructureUpdated", {

 protocol_fee_percent: bcs.u64(), service_fee_percent: bcs.u64(), treasury_percent: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DegenSUIFeeStructureUpdated { return DegenSUIFeeStructureUpdated.reified( ).new( { protocolFeePercent: decodeFromFields("u64", fields.protocol_fee_percent), serviceFeePercent: decodeFromFields("u64", fields.service_fee_percent), treasuryPercent: decodeFromFields("u64", fields.treasury_percent) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DegenSUIFeeStructureUpdated { if (!isDegenSUIFeeStructureUpdated(item.type)) { throw new Error("not a DegenSUIFeeStructureUpdated type");

 }

 return DegenSUIFeeStructureUpdated.reified( ).new( { protocolFeePercent: decodeFromFieldsWithTypes("u64", item.fields.protocol_fee_percent), serviceFeePercent: decodeFromFieldsWithTypes("u64", item.fields.service_fee_percent), treasuryPercent: decodeFromFieldsWithTypes("u64", item.fields.treasury_percent) } ) }

 static fromBcs( data: Uint8Array ): DegenSUIFeeStructureUpdated { return DegenSUIFeeStructureUpdated.fromFields( DegenSUIFeeStructureUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 protocolFeePercent: this.protocolFeePercent.toString(),serviceFeePercent: this.serviceFeePercent.toString(),treasuryPercent: this.treasuryPercent.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DegenSUIFeeStructureUpdated { return DegenSUIFeeStructureUpdated.reified( ).new( { protocolFeePercent: decodeFromJSONField("u64", field.protocolFeePercent), serviceFeePercent: decodeFromJSONField("u64", field.serviceFeePercent), treasuryPercent: decodeFromJSONField("u64", field.treasuryPercent) } ) }

 static fromJSON( json: Record<string, any> ): DegenSUIFeeStructureUpdated { if (json.$typeName !== DegenSUIFeeStructureUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DegenSUIFeeStructureUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DegenSUIFeeStructureUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDegenSUIFeeStructureUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DegenSUIFeeStructureUpdated object`); } return DegenSUIFeeStructureUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DegenSUIFeeStructureUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDegenSUIFeeStructureUpdated(data.bcs.type)) { throw new Error(`object at is not a DegenSUIFeeStructureUpdated object`); }

 return DegenSUIFeeStructureUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DegenSUIFeeStructureUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DegenSUIFeeStructureUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DegenSUIFeeStructureUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDegenSUIFeeStructureUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DegenSUIFeeStructureUpdated object`); }

 return DegenSUIFeeStructureUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== EmergencyPauseUpdate =============================== */

export function isEmergencyPauseUpdate(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::EmergencyPauseUpdate`; }

export interface EmergencyPauseUpdateFields { pauseStake: ToField<"bool"> }

export type EmergencyPauseUpdateReified = Reified< EmergencyPauseUpdate, EmergencyPauseUpdateFields >;

export class EmergencyPauseUpdate implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::EmergencyPauseUpdate`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = EmergencyPauseUpdate.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::EmergencyPauseUpdate`; readonly $typeArgs: []; readonly $isPhantom = EmergencyPauseUpdate.$isPhantom;

 readonly pauseStake: ToField<"bool">

 private constructor(typeArgs: [], fields: EmergencyPauseUpdateFields, ) { this.$fullTypeName = composeSuiType( EmergencyPauseUpdate.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::EmergencyPauseUpdate`; this.$typeArgs = typeArgs;

 this.pauseStake = fields.pauseStake; }

 static reified( ): EmergencyPauseUpdateReified { return { typeName: EmergencyPauseUpdate.$typeName, fullTypeName: composeSuiType( EmergencyPauseUpdate.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::EmergencyPauseUpdate`, typeArgs: [ ] as [], isPhantom: EmergencyPauseUpdate.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => EmergencyPauseUpdate.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => EmergencyPauseUpdate.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => EmergencyPauseUpdate.fromBcs( data, ), bcs: EmergencyPauseUpdate.bcs, fromJSONField: (field: any) => EmergencyPauseUpdate.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => EmergencyPauseUpdate.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => EmergencyPauseUpdate.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => EmergencyPauseUpdate.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => EmergencyPauseUpdate.fetch( client, id, ), new: ( fields: EmergencyPauseUpdateFields, ) => { return new EmergencyPauseUpdate( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return EmergencyPauseUpdate.reified() }

 static phantom( ): PhantomReified<ToTypeStr<EmergencyPauseUpdate>> { return phantom(EmergencyPauseUpdate.reified( )); } static get p() { return EmergencyPauseUpdate.phantom() }

 static get bcs() { return bcs.struct("EmergencyPauseUpdate", {

 pause_stake: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): EmergencyPauseUpdate { return EmergencyPauseUpdate.reified( ).new( { pauseStake: decodeFromFields("bool", fields.pause_stake) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): EmergencyPauseUpdate { if (!isEmergencyPauseUpdate(item.type)) { throw new Error("not a EmergencyPauseUpdate type");

 }

 return EmergencyPauseUpdate.reified( ).new( { pauseStake: decodeFromFieldsWithTypes("bool", item.fields.pause_stake) } ) }

 static fromBcs( data: Uint8Array ): EmergencyPauseUpdate { return EmergencyPauseUpdate.fromFields( EmergencyPauseUpdate.bcs.parse(data) ) }

 toJSONField() { return {

 pauseStake: this.pauseStake,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): EmergencyPauseUpdate { return EmergencyPauseUpdate.reified( ).new( { pauseStake: decodeFromJSONField("bool", field.pauseStake) } ) }

 static fromJSON( json: Record<string, any> ): EmergencyPauseUpdate { if (json.$typeName !== EmergencyPauseUpdate.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return EmergencyPauseUpdate.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): EmergencyPauseUpdate { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEmergencyPauseUpdate(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a EmergencyPauseUpdate object`); } return EmergencyPauseUpdate.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): EmergencyPauseUpdate { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isEmergencyPauseUpdate(data.bcs.type)) { throw new Error(`object at is not a EmergencyPauseUpdate object`); }

 return EmergencyPauseUpdate.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return EmergencyPauseUpdate.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<EmergencyPauseUpdate> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching EmergencyPauseUpdate object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEmergencyPauseUpdate(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a EmergencyPauseUpdate object`); }

 return EmergencyPauseUpdate.fromSuiObjectData( res.data ); }

 }

/* ============================== LsdFeeCollected =============================== */

export function isLsdFeeCollected(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::LsdFeeCollected`; }

export interface LsdFeeCollectedFields { collectedFeesAmt: ToField<"u64">; treasuryFees: ToField<"u64">; suiForBuyback: ToField<"u64"> }

export type LsdFeeCollectedReified = Reified< LsdFeeCollected, LsdFeeCollectedFields >;

export class LsdFeeCollected implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::LsdFeeCollected`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = LsdFeeCollected.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::LsdFeeCollected`; readonly $typeArgs: []; readonly $isPhantom = LsdFeeCollected.$isPhantom;

 readonly collectedFeesAmt: ToField<"u64">; readonly treasuryFees: ToField<"u64">; readonly suiForBuyback: ToField<"u64">

 private constructor(typeArgs: [], fields: LsdFeeCollectedFields, ) { this.$fullTypeName = composeSuiType( LsdFeeCollected.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::LsdFeeCollected`; this.$typeArgs = typeArgs;

 this.collectedFeesAmt = fields.collectedFeesAmt;; this.treasuryFees = fields.treasuryFees;; this.suiForBuyback = fields.suiForBuyback; }

 static reified( ): LsdFeeCollectedReified { return { typeName: LsdFeeCollected.$typeName, fullTypeName: composeSuiType( LsdFeeCollected.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::LsdFeeCollected`, typeArgs: [ ] as [], isPhantom: LsdFeeCollected.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LsdFeeCollected.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LsdFeeCollected.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LsdFeeCollected.fromBcs( data, ), bcs: LsdFeeCollected.bcs, fromJSONField: (field: any) => LsdFeeCollected.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LsdFeeCollected.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LsdFeeCollected.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => LsdFeeCollected.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => LsdFeeCollected.fetch( client, id, ), new: ( fields: LsdFeeCollectedFields, ) => { return new LsdFeeCollected( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LsdFeeCollected.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LsdFeeCollected>> { return phantom(LsdFeeCollected.reified( )); } static get p() { return LsdFeeCollected.phantom() }

 static get bcs() { return bcs.struct("LsdFeeCollected", {

 collected_fees_amt: bcs.u64(), treasury_fees: bcs.u64(), sui_for_buyback: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): LsdFeeCollected { return LsdFeeCollected.reified( ).new( { collectedFeesAmt: decodeFromFields("u64", fields.collected_fees_amt), treasuryFees: decodeFromFields("u64", fields.treasury_fees), suiForBuyback: decodeFromFields("u64", fields.sui_for_buyback) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LsdFeeCollected { if (!isLsdFeeCollected(item.type)) { throw new Error("not a LsdFeeCollected type");

 }

 return LsdFeeCollected.reified( ).new( { collectedFeesAmt: decodeFromFieldsWithTypes("u64", item.fields.collected_fees_amt), treasuryFees: decodeFromFieldsWithTypes("u64", item.fields.treasury_fees), suiForBuyback: decodeFromFieldsWithTypes("u64", item.fields.sui_for_buyback) } ) }

 static fromBcs( data: Uint8Array ): LsdFeeCollected { return LsdFeeCollected.fromFields( LsdFeeCollected.bcs.parse(data) ) }

 toJSONField() { return {

 collectedFeesAmt: this.collectedFeesAmt.toString(),treasuryFees: this.treasuryFees.toString(),suiForBuyback: this.suiForBuyback.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LsdFeeCollected { return LsdFeeCollected.reified( ).new( { collectedFeesAmt: decodeFromJSONField("u64", field.collectedFeesAmt), treasuryFees: decodeFromJSONField("u64", field.treasuryFees), suiForBuyback: decodeFromJSONField("u64", field.suiForBuyback) } ) }

 static fromJSON( json: Record<string, any> ): LsdFeeCollected { if (json.$typeName !== LsdFeeCollected.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LsdFeeCollected.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LsdFeeCollected { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLsdFeeCollected(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LsdFeeCollected object`); } return LsdFeeCollected.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): LsdFeeCollected { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isLsdFeeCollected(data.bcs.type)) { throw new Error(`object at is not a LsdFeeCollected object`); }

 return LsdFeeCollected.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return LsdFeeCollected.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<LsdFeeCollected> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LsdFeeCollected object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLsdFeeCollected(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LsdFeeCollected object`); }

 return LsdFeeCollected.fromSuiObjectData( res.data ); }

 }

/* ============================== RequestsForEpoch =============================== */

export function isRequestsForEpoch(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::RequestsForEpoch`; }

export interface RequestsForEpochFields { amount: ToField<"u64">; approved: ToField<"bool"> }

export type RequestsForEpochReified = Reified< RequestsForEpoch, RequestsForEpochFields >;

export class RequestsForEpoch implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::RequestsForEpoch`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RequestsForEpoch.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::RequestsForEpoch`; readonly $typeArgs: []; readonly $isPhantom = RequestsForEpoch.$isPhantom;

 readonly amount: ToField<"u64">; readonly approved: ToField<"bool">

 private constructor(typeArgs: [], fields: RequestsForEpochFields, ) { this.$fullTypeName = composeSuiType( RequestsForEpoch.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::RequestsForEpoch`; this.$typeArgs = typeArgs;

 this.amount = fields.amount;; this.approved = fields.approved; }

 static reified( ): RequestsForEpochReified { return { typeName: RequestsForEpoch.$typeName, fullTypeName: composeSuiType( RequestsForEpoch.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::RequestsForEpoch`, typeArgs: [ ] as [], isPhantom: RequestsForEpoch.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RequestsForEpoch.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RequestsForEpoch.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RequestsForEpoch.fromBcs( data, ), bcs: RequestsForEpoch.bcs, fromJSONField: (field: any) => RequestsForEpoch.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RequestsForEpoch.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RequestsForEpoch.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RequestsForEpoch.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RequestsForEpoch.fetch( client, id, ), new: ( fields: RequestsForEpochFields, ) => { return new RequestsForEpoch( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RequestsForEpoch.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RequestsForEpoch>> { return phantom(RequestsForEpoch.reified( )); } static get p() { return RequestsForEpoch.phantom() }

 static get bcs() { return bcs.struct("RequestsForEpoch", {

 amount: bcs.u64(), approved: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): RequestsForEpoch { return RequestsForEpoch.reified( ).new( { amount: decodeFromFields("u64", fields.amount), approved: decodeFromFields("bool", fields.approved) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RequestsForEpoch { if (!isRequestsForEpoch(item.type)) { throw new Error("not a RequestsForEpoch type");

 }

 return RequestsForEpoch.reified( ).new( { amount: decodeFromFieldsWithTypes("u64", item.fields.amount), approved: decodeFromFieldsWithTypes("bool", item.fields.approved) } ) }

 static fromBcs( data: Uint8Array ): RequestsForEpoch { return RequestsForEpoch.fromFields( RequestsForEpoch.bcs.parse(data) ) }

 toJSONField() { return {

 amount: this.amount.toString(),approved: this.approved,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RequestsForEpoch { return RequestsForEpoch.reified( ).new( { amount: decodeFromJSONField("u64", field.amount), approved: decodeFromJSONField("bool", field.approved) } ) }

 static fromJSON( json: Record<string, any> ): RequestsForEpoch { if (json.$typeName !== RequestsForEpoch.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RequestsForEpoch.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RequestsForEpoch { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRequestsForEpoch(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RequestsForEpoch object`); } return RequestsForEpoch.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RequestsForEpoch { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRequestsForEpoch(data.bcs.type)) { throw new Error(`object at is not a RequestsForEpoch object`); }

 return RequestsForEpoch.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RequestsForEpoch.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RequestsForEpoch> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RequestsForEpoch object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRequestsForEpoch(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RequestsForEpoch object`); }

 return RequestsForEpoch.fromSuiObjectData( res.data ); }

 }

/* ============================== RequestsForEpochDestroyed =============================== */

export function isRequestsForEpochDestroyed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::RequestsForEpochDestroyed`; }

export interface RequestsForEpochDestroyedFields { epoch: ToField<"u64"> }

export type RequestsForEpochDestroyedReified = Reified< RequestsForEpochDestroyed, RequestsForEpochDestroyedFields >;

export class RequestsForEpochDestroyed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::RequestsForEpochDestroyed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RequestsForEpochDestroyed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::RequestsForEpochDestroyed`; readonly $typeArgs: []; readonly $isPhantom = RequestsForEpochDestroyed.$isPhantom;

 readonly epoch: ToField<"u64">

 private constructor(typeArgs: [], fields: RequestsForEpochDestroyedFields, ) { this.$fullTypeName = composeSuiType( RequestsForEpochDestroyed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::RequestsForEpochDestroyed`; this.$typeArgs = typeArgs;

 this.epoch = fields.epoch; }

 static reified( ): RequestsForEpochDestroyedReified { return { typeName: RequestsForEpochDestroyed.$typeName, fullTypeName: composeSuiType( RequestsForEpochDestroyed.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::RequestsForEpochDestroyed`, typeArgs: [ ] as [], isPhantom: RequestsForEpochDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RequestsForEpochDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RequestsForEpochDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RequestsForEpochDestroyed.fromBcs( data, ), bcs: RequestsForEpochDestroyed.bcs, fromJSONField: (field: any) => RequestsForEpochDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RequestsForEpochDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RequestsForEpochDestroyed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RequestsForEpochDestroyed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RequestsForEpochDestroyed.fetch( client, id, ), new: ( fields: RequestsForEpochDestroyedFields, ) => { return new RequestsForEpochDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RequestsForEpochDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RequestsForEpochDestroyed>> { return phantom(RequestsForEpochDestroyed.reified( )); } static get p() { return RequestsForEpochDestroyed.phantom() }

 static get bcs() { return bcs.struct("RequestsForEpochDestroyed", {

 epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RequestsForEpochDestroyed { return RequestsForEpochDestroyed.reified( ).new( { epoch: decodeFromFields("u64", fields.epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RequestsForEpochDestroyed { if (!isRequestsForEpochDestroyed(item.type)) { throw new Error("not a RequestsForEpochDestroyed type");

 }

 return RequestsForEpochDestroyed.reified( ).new( { epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch) } ) }

 static fromBcs( data: Uint8Array ): RequestsForEpochDestroyed { return RequestsForEpochDestroyed.fromFields( RequestsForEpochDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 epoch: this.epoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RequestsForEpochDestroyed { return RequestsForEpochDestroyed.reified( ).new( { epoch: decodeFromJSONField("u64", field.epoch) } ) }

 static fromJSON( json: Record<string, any> ): RequestsForEpochDestroyed { if (json.$typeName !== RequestsForEpochDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RequestsForEpochDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RequestsForEpochDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRequestsForEpochDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RequestsForEpochDestroyed object`); } return RequestsForEpochDestroyed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RequestsForEpochDestroyed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRequestsForEpochDestroyed(data.bcs.type)) { throw new Error(`object at is not a RequestsForEpochDestroyed object`); }

 return RequestsForEpochDestroyed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RequestsForEpochDestroyed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RequestsForEpochDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RequestsForEpochDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRequestsForEpochDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RequestsForEpochDestroyed object`); }

 return RequestsForEpochDestroyed.fromSuiObjectData( res.data ); }

 }

/* ============================== StakeOperationProcessed =============================== */

export function isStakeOperationProcessed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::StakeOperationProcessed`; }

export interface StakeOperationProcessedFields { validatorAddr: ToField<"address">; suiToStakeAmt: ToField<"u64">; curEpoch: ToField<"u64"> }

export type StakeOperationProcessedReified = Reified< StakeOperationProcessed, StakeOperationProcessedFields >;

export class StakeOperationProcessed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::StakeOperationProcessed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakeOperationProcessed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::StakeOperationProcessed`; readonly $typeArgs: []; readonly $isPhantom = StakeOperationProcessed.$isPhantom;

 readonly validatorAddr: ToField<"address">; readonly suiToStakeAmt: ToField<"u64">; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: StakeOperationProcessedFields, ) { this.$fullTypeName = composeSuiType( StakeOperationProcessed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::StakeOperationProcessed`; this.$typeArgs = typeArgs;

 this.validatorAddr = fields.validatorAddr;; this.suiToStakeAmt = fields.suiToStakeAmt;; this.curEpoch = fields.curEpoch; }

 static reified( ): StakeOperationProcessedReified { return { typeName: StakeOperationProcessed.$typeName, fullTypeName: composeSuiType( StakeOperationProcessed.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::StakeOperationProcessed`, typeArgs: [ ] as [], isPhantom: StakeOperationProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakeOperationProcessed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakeOperationProcessed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakeOperationProcessed.fromBcs( data, ), bcs: StakeOperationProcessed.bcs, fromJSONField: (field: any) => StakeOperationProcessed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakeOperationProcessed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakeOperationProcessed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StakeOperationProcessed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StakeOperationProcessed.fetch( client, id, ), new: ( fields: StakeOperationProcessedFields, ) => { return new StakeOperationProcessed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakeOperationProcessed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakeOperationProcessed>> { return phantom(StakeOperationProcessed.reified( )); } static get p() { return StakeOperationProcessed.phantom() }

 static get bcs() { return bcs.struct("StakeOperationProcessed", {

 validator_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_to_stake_amt: bcs.u64(), cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StakeOperationProcessed { return StakeOperationProcessed.reified( ).new( { validatorAddr: decodeFromFields("address", fields.validator_addr), suiToStakeAmt: decodeFromFields("u64", fields.sui_to_stake_amt), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakeOperationProcessed { if (!isStakeOperationProcessed(item.type)) { throw new Error("not a StakeOperationProcessed type");

 }

 return StakeOperationProcessed.reified( ).new( { validatorAddr: decodeFromFieldsWithTypes("address", item.fields.validator_addr), suiToStakeAmt: decodeFromFieldsWithTypes("u64", item.fields.sui_to_stake_amt), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): StakeOperationProcessed { return StakeOperationProcessed.fromFields( StakeOperationProcessed.bcs.parse(data) ) }

 toJSONField() { return {

 validatorAddr: this.validatorAddr,suiToStakeAmt: this.suiToStakeAmt.toString(),curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakeOperationProcessed { return StakeOperationProcessed.reified( ).new( { validatorAddr: decodeFromJSONField("address", field.validatorAddr), suiToStakeAmt: decodeFromJSONField("u64", field.suiToStakeAmt), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): StakeOperationProcessed { if (json.$typeName !== StakeOperationProcessed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakeOperationProcessed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakeOperationProcessed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakeOperationProcessed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakeOperationProcessed object`); } return StakeOperationProcessed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StakeOperationProcessed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakeOperationProcessed(data.bcs.type)) { throw new Error(`object at is not a StakeOperationProcessed object`); }

 return StakeOperationProcessed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakeOperationProcessed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakeOperationProcessed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakeOperationProcessed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakeOperationProcessed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakeOperationProcessed object`); }

 return StakeOperationProcessed.fromSuiObjectData( res.data ); }

 }

/* ============================== StakeSuiRequest =============================== */

export function isStakeSuiRequest(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::StakeSuiRequest`; }

export interface StakeSuiRequestFields { staker: ToField<"address">; suiToStake: ToField<"u64">; dsuiKrafted: ToField<"u64">; suiClaimablePerDsui: ToField<"u128">; curEpoch: ToField<"u64"> }

export type StakeSuiRequestReified = Reified< StakeSuiRequest, StakeSuiRequestFields >;

export class StakeSuiRequest implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::StakeSuiRequest`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakeSuiRequest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::StakeSuiRequest`; readonly $typeArgs: []; readonly $isPhantom = StakeSuiRequest.$isPhantom;

 readonly staker: ToField<"address">; readonly suiToStake: ToField<"u64">; readonly dsuiKrafted: ToField<"u64">; readonly suiClaimablePerDsui: ToField<"u128">; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: StakeSuiRequestFields, ) { this.$fullTypeName = composeSuiType( StakeSuiRequest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::StakeSuiRequest`; this.$typeArgs = typeArgs;

 this.staker = fields.staker;; this.suiToStake = fields.suiToStake;; this.dsuiKrafted = fields.dsuiKrafted;; this.suiClaimablePerDsui = fields.suiClaimablePerDsui;; this.curEpoch = fields.curEpoch; }

 static reified( ): StakeSuiRequestReified { return { typeName: StakeSuiRequest.$typeName, fullTypeName: composeSuiType( StakeSuiRequest.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::StakeSuiRequest`, typeArgs: [ ] as [], isPhantom: StakeSuiRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakeSuiRequest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakeSuiRequest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakeSuiRequest.fromBcs( data, ), bcs: StakeSuiRequest.bcs, fromJSONField: (field: any) => StakeSuiRequest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakeSuiRequest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakeSuiRequest.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StakeSuiRequest.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StakeSuiRequest.fetch( client, id, ), new: ( fields: StakeSuiRequestFields, ) => { return new StakeSuiRequest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakeSuiRequest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakeSuiRequest>> { return phantom(StakeSuiRequest.reified( )); } static get p() { return StakeSuiRequest.phantom() }

 static get bcs() { return bcs.struct("StakeSuiRequest", {

 staker: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_to_stake: bcs.u64(), dsui_krafted: bcs.u64(), sui_claimable_per_dsui: bcs.u128(), cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StakeSuiRequest { return StakeSuiRequest.reified( ).new( { staker: decodeFromFields("address", fields.staker), suiToStake: decodeFromFields("u64", fields.sui_to_stake), dsuiKrafted: decodeFromFields("u64", fields.dsui_krafted), suiClaimablePerDsui: decodeFromFields("u128", fields.sui_claimable_per_dsui), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakeSuiRequest { if (!isStakeSuiRequest(item.type)) { throw new Error("not a StakeSuiRequest type");

 }

 return StakeSuiRequest.reified( ).new( { staker: decodeFromFieldsWithTypes("address", item.fields.staker), suiToStake: decodeFromFieldsWithTypes("u64", item.fields.sui_to_stake), dsuiKrafted: decodeFromFieldsWithTypes("u64", item.fields.dsui_krafted), suiClaimablePerDsui: decodeFromFieldsWithTypes("u128", item.fields.sui_claimable_per_dsui), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): StakeSuiRequest { return StakeSuiRequest.fromFields( StakeSuiRequest.bcs.parse(data) ) }

 toJSONField() { return {

 staker: this.staker,suiToStake: this.suiToStake.toString(),dsuiKrafted: this.dsuiKrafted.toString(),suiClaimablePerDsui: this.suiClaimablePerDsui.toString(),curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakeSuiRequest { return StakeSuiRequest.reified( ).new( { staker: decodeFromJSONField("address", field.staker), suiToStake: decodeFromJSONField("u64", field.suiToStake), dsuiKrafted: decodeFromJSONField("u64", field.dsuiKrafted), suiClaimablePerDsui: decodeFromJSONField("u128", field.suiClaimablePerDsui), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): StakeSuiRequest { if (json.$typeName !== StakeSuiRequest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakeSuiRequest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakeSuiRequest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakeSuiRequest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakeSuiRequest object`); } return StakeSuiRequest.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StakeSuiRequest { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakeSuiRequest(data.bcs.type)) { throw new Error(`object at is not a StakeSuiRequest object`); }

 return StakeSuiRequest.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakeSuiRequest.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakeSuiRequest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakeSuiRequest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakeSuiRequest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakeSuiRequest object`); }

 return StakeSuiRequest.fromSuiObjectData( res.data ); }

 }

/* ============================== StakeSuiRequestsProcessed =============================== */

export function isStakeSuiRequestsProcessed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::StakeSuiRequestsProcessed`; }

export interface StakeSuiRequestsProcessedFields { curEpoch: ToField<"u64">; totalSuiStaked: ToField<"u64">; unstakedSuiAddedToReserveAfterFee: ToField<"u64">; protocolFeeCollected: ToField<"u64">; suiClaimablePerDsui: ToField<"u128"> }

export type StakeSuiRequestsProcessedReified = Reified< StakeSuiRequestsProcessed, StakeSuiRequestsProcessedFields >;

export class StakeSuiRequestsProcessed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::StakeSuiRequestsProcessed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakeSuiRequestsProcessed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::StakeSuiRequestsProcessed`; readonly $typeArgs: []; readonly $isPhantom = StakeSuiRequestsProcessed.$isPhantom;

 readonly curEpoch: ToField<"u64">; readonly totalSuiStaked: ToField<"u64">; readonly unstakedSuiAddedToReserveAfterFee: ToField<"u64">; readonly protocolFeeCollected: ToField<"u64">; readonly suiClaimablePerDsui: ToField<"u128">

 private constructor(typeArgs: [], fields: StakeSuiRequestsProcessedFields, ) { this.$fullTypeName = composeSuiType( StakeSuiRequestsProcessed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::StakeSuiRequestsProcessed`; this.$typeArgs = typeArgs;

 this.curEpoch = fields.curEpoch;; this.totalSuiStaked = fields.totalSuiStaked;; this.unstakedSuiAddedToReserveAfterFee = fields.unstakedSuiAddedToReserveAfterFee;; this.protocolFeeCollected = fields.protocolFeeCollected;; this.suiClaimablePerDsui = fields.suiClaimablePerDsui; }

 static reified( ): StakeSuiRequestsProcessedReified { return { typeName: StakeSuiRequestsProcessed.$typeName, fullTypeName: composeSuiType( StakeSuiRequestsProcessed.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::StakeSuiRequestsProcessed`, typeArgs: [ ] as [], isPhantom: StakeSuiRequestsProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakeSuiRequestsProcessed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakeSuiRequestsProcessed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakeSuiRequestsProcessed.fromBcs( data, ), bcs: StakeSuiRequestsProcessed.bcs, fromJSONField: (field: any) => StakeSuiRequestsProcessed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakeSuiRequestsProcessed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakeSuiRequestsProcessed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StakeSuiRequestsProcessed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StakeSuiRequestsProcessed.fetch( client, id, ), new: ( fields: StakeSuiRequestsProcessedFields, ) => { return new StakeSuiRequestsProcessed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakeSuiRequestsProcessed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakeSuiRequestsProcessed>> { return phantom(StakeSuiRequestsProcessed.reified( )); } static get p() { return StakeSuiRequestsProcessed.phantom() }

 static get bcs() { return bcs.struct("StakeSuiRequestsProcessed", {

 cur_epoch: bcs.u64(), total_sui_staked: bcs.u64(), unstaked_sui_added_to_reserve_after_fee: bcs.u64(), protocol_fee_collected: bcs.u64(), sui_claimable_per_dsui: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): StakeSuiRequestsProcessed { return StakeSuiRequestsProcessed.reified( ).new( { curEpoch: decodeFromFields("u64", fields.cur_epoch), totalSuiStaked: decodeFromFields("u64", fields.total_sui_staked), unstakedSuiAddedToReserveAfterFee: decodeFromFields("u64", fields.unstaked_sui_added_to_reserve_after_fee), protocolFeeCollected: decodeFromFields("u64", fields.protocol_fee_collected), suiClaimablePerDsui: decodeFromFields("u128", fields.sui_claimable_per_dsui) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakeSuiRequestsProcessed { if (!isStakeSuiRequestsProcessed(item.type)) { throw new Error("not a StakeSuiRequestsProcessed type");

 }

 return StakeSuiRequestsProcessed.reified( ).new( { curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch), totalSuiStaked: decodeFromFieldsWithTypes("u64", item.fields.total_sui_staked), unstakedSuiAddedToReserveAfterFee: decodeFromFieldsWithTypes("u64", item.fields.unstaked_sui_added_to_reserve_after_fee), protocolFeeCollected: decodeFromFieldsWithTypes("u64", item.fields.protocol_fee_collected), suiClaimablePerDsui: decodeFromFieldsWithTypes("u128", item.fields.sui_claimable_per_dsui) } ) }

 static fromBcs( data: Uint8Array ): StakeSuiRequestsProcessed { return StakeSuiRequestsProcessed.fromFields( StakeSuiRequestsProcessed.bcs.parse(data) ) }

 toJSONField() { return {

 curEpoch: this.curEpoch.toString(),totalSuiStaked: this.totalSuiStaked.toString(),unstakedSuiAddedToReserveAfterFee: this.unstakedSuiAddedToReserveAfterFee.toString(),protocolFeeCollected: this.protocolFeeCollected.toString(),suiClaimablePerDsui: this.suiClaimablePerDsui.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakeSuiRequestsProcessed { return StakeSuiRequestsProcessed.reified( ).new( { curEpoch: decodeFromJSONField("u64", field.curEpoch), totalSuiStaked: decodeFromJSONField("u64", field.totalSuiStaked), unstakedSuiAddedToReserveAfterFee: decodeFromJSONField("u64", field.unstakedSuiAddedToReserveAfterFee), protocolFeeCollected: decodeFromJSONField("u64", field.protocolFeeCollected), suiClaimablePerDsui: decodeFromJSONField("u128", field.suiClaimablePerDsui) } ) }

 static fromJSON( json: Record<string, any> ): StakeSuiRequestsProcessed { if (json.$typeName !== StakeSuiRequestsProcessed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakeSuiRequestsProcessed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakeSuiRequestsProcessed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakeSuiRequestsProcessed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakeSuiRequestsProcessed object`); } return StakeSuiRequestsProcessed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StakeSuiRequestsProcessed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakeSuiRequestsProcessed(data.bcs.type)) { throw new Error(`object at is not a StakeSuiRequestsProcessed object`); }

 return StakeSuiRequestsProcessed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakeSuiRequestsProcessed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakeSuiRequestsProcessed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakeSuiRequestsProcessed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakeSuiRequestsProcessed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakeSuiRequestsProcessed object`); }

 return StakeSuiRequestsProcessed.fromSuiObjectData( res.data ); }

 }

/* ============================== StakeWithSelectedValidatorRequestProcessed =============================== */

export function isStakeWithSelectedValidatorRequestProcessed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::StakeWithSelectedValidatorRequestProcessed`; }

export interface StakeWithSelectedValidatorRequestProcessedFields { validatorAddr: ToField<"address">; suiToStakeAmt: ToField<"u64">; curEpoch: ToField<"u64"> }

export type StakeWithSelectedValidatorRequestProcessedReified = Reified< StakeWithSelectedValidatorRequestProcessed, StakeWithSelectedValidatorRequestProcessedFields >;

export class StakeWithSelectedValidatorRequestProcessed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::StakeWithSelectedValidatorRequestProcessed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakeWithSelectedValidatorRequestProcessed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::StakeWithSelectedValidatorRequestProcessed`; readonly $typeArgs: []; readonly $isPhantom = StakeWithSelectedValidatorRequestProcessed.$isPhantom;

 readonly validatorAddr: ToField<"address">; readonly suiToStakeAmt: ToField<"u64">; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: StakeWithSelectedValidatorRequestProcessedFields, ) { this.$fullTypeName = composeSuiType( StakeWithSelectedValidatorRequestProcessed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::StakeWithSelectedValidatorRequestProcessed`; this.$typeArgs = typeArgs;

 this.validatorAddr = fields.validatorAddr;; this.suiToStakeAmt = fields.suiToStakeAmt;; this.curEpoch = fields.curEpoch; }

 static reified( ): StakeWithSelectedValidatorRequestProcessedReified { return { typeName: StakeWithSelectedValidatorRequestProcessed.$typeName, fullTypeName: composeSuiType( StakeWithSelectedValidatorRequestProcessed.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::StakeWithSelectedValidatorRequestProcessed`, typeArgs: [ ] as [], isPhantom: StakeWithSelectedValidatorRequestProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakeWithSelectedValidatorRequestProcessed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakeWithSelectedValidatorRequestProcessed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakeWithSelectedValidatorRequestProcessed.fromBcs( data, ), bcs: StakeWithSelectedValidatorRequestProcessed.bcs, fromJSONField: (field: any) => StakeWithSelectedValidatorRequestProcessed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakeWithSelectedValidatorRequestProcessed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakeWithSelectedValidatorRequestProcessed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StakeWithSelectedValidatorRequestProcessed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StakeWithSelectedValidatorRequestProcessed.fetch( client, id, ), new: ( fields: StakeWithSelectedValidatorRequestProcessedFields, ) => { return new StakeWithSelectedValidatorRequestProcessed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakeWithSelectedValidatorRequestProcessed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakeWithSelectedValidatorRequestProcessed>> { return phantom(StakeWithSelectedValidatorRequestProcessed.reified( )); } static get p() { return StakeWithSelectedValidatorRequestProcessed.phantom() }

 static get bcs() { return bcs.struct("StakeWithSelectedValidatorRequestProcessed", {

 validator_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_to_stake_amt: bcs.u64(), cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StakeWithSelectedValidatorRequestProcessed { return StakeWithSelectedValidatorRequestProcessed.reified( ).new( { validatorAddr: decodeFromFields("address", fields.validator_addr), suiToStakeAmt: decodeFromFields("u64", fields.sui_to_stake_amt), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakeWithSelectedValidatorRequestProcessed { if (!isStakeWithSelectedValidatorRequestProcessed(item.type)) { throw new Error("not a StakeWithSelectedValidatorRequestProcessed type");

 }

 return StakeWithSelectedValidatorRequestProcessed.reified( ).new( { validatorAddr: decodeFromFieldsWithTypes("address", item.fields.validator_addr), suiToStakeAmt: decodeFromFieldsWithTypes("u64", item.fields.sui_to_stake_amt), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): StakeWithSelectedValidatorRequestProcessed { return StakeWithSelectedValidatorRequestProcessed.fromFields( StakeWithSelectedValidatorRequestProcessed.bcs.parse(data) ) }

 toJSONField() { return {

 validatorAddr: this.validatorAddr,suiToStakeAmt: this.suiToStakeAmt.toString(),curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakeWithSelectedValidatorRequestProcessed { return StakeWithSelectedValidatorRequestProcessed.reified( ).new( { validatorAddr: decodeFromJSONField("address", field.validatorAddr), suiToStakeAmt: decodeFromJSONField("u64", field.suiToStakeAmt), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): StakeWithSelectedValidatorRequestProcessed { if (json.$typeName !== StakeWithSelectedValidatorRequestProcessed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakeWithSelectedValidatorRequestProcessed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakeWithSelectedValidatorRequestProcessed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakeWithSelectedValidatorRequestProcessed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakeWithSelectedValidatorRequestProcessed object`); } return StakeWithSelectedValidatorRequestProcessed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StakeWithSelectedValidatorRequestProcessed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakeWithSelectedValidatorRequestProcessed(data.bcs.type)) { throw new Error(`object at is not a StakeWithSelectedValidatorRequestProcessed object`); }

 return StakeWithSelectedValidatorRequestProcessed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakeWithSelectedValidatorRequestProcessed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakeWithSelectedValidatorRequestProcessed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakeWithSelectedValidatorRequestProcessed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakeWithSelectedValidatorRequestProcessed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakeWithSelectedValidatorRequestProcessed object`); }

 return StakeWithSelectedValidatorRequestProcessed.fromSuiObjectData( res.data ); }

 }

/* ============================== TotalRewardsUpdated =============================== */

export function isTotalRewardsUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::TotalRewardsUpdated`; }

export interface TotalRewardsUpdatedFields { curEpoch: ToField<"u64">; totalPrincipalStaked: ToField<"u64">; suiToUnstake: ToField<"u64">; totalAccruedRewards: ToField<"u64">; newRewards: ToField<"u64">; uncollectedProtocolFees: ToField<"u64">; protocolFeeOnNewRewards: ToField<"u64">; prevSuiClaimablePerDsui: ToField<"u128">; newSuiClaimablePerDsui: ToField<"u128">; exchangeRateIncrease: ToField<"u128"> }

export type TotalRewardsUpdatedReified = Reified< TotalRewardsUpdated, TotalRewardsUpdatedFields >;

export class TotalRewardsUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::TotalRewardsUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TotalRewardsUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::TotalRewardsUpdated`; readonly $typeArgs: []; readonly $isPhantom = TotalRewardsUpdated.$isPhantom;

 readonly curEpoch: ToField<"u64">; readonly totalPrincipalStaked: ToField<"u64">; readonly suiToUnstake: ToField<"u64">; readonly totalAccruedRewards: ToField<"u64">; readonly newRewards: ToField<"u64">; readonly uncollectedProtocolFees: ToField<"u64">; readonly protocolFeeOnNewRewards: ToField<"u64">; readonly prevSuiClaimablePerDsui: ToField<"u128">; readonly newSuiClaimablePerDsui: ToField<"u128">; readonly exchangeRateIncrease: ToField<"u128">

 private constructor(typeArgs: [], fields: TotalRewardsUpdatedFields, ) { this.$fullTypeName = composeSuiType( TotalRewardsUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::TotalRewardsUpdated`; this.$typeArgs = typeArgs;

 this.curEpoch = fields.curEpoch;; this.totalPrincipalStaked = fields.totalPrincipalStaked;; this.suiToUnstake = fields.suiToUnstake;; this.totalAccruedRewards = fields.totalAccruedRewards;; this.newRewards = fields.newRewards;; this.uncollectedProtocolFees = fields.uncollectedProtocolFees;; this.protocolFeeOnNewRewards = fields.protocolFeeOnNewRewards;; this.prevSuiClaimablePerDsui = fields.prevSuiClaimablePerDsui;; this.newSuiClaimablePerDsui = fields.newSuiClaimablePerDsui;; this.exchangeRateIncrease = fields.exchangeRateIncrease; }

 static reified( ): TotalRewardsUpdatedReified { return { typeName: TotalRewardsUpdated.$typeName, fullTypeName: composeSuiType( TotalRewardsUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::TotalRewardsUpdated`, typeArgs: [ ] as [], isPhantom: TotalRewardsUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TotalRewardsUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TotalRewardsUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TotalRewardsUpdated.fromBcs( data, ), bcs: TotalRewardsUpdated.bcs, fromJSONField: (field: any) => TotalRewardsUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TotalRewardsUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TotalRewardsUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TotalRewardsUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TotalRewardsUpdated.fetch( client, id, ), new: ( fields: TotalRewardsUpdatedFields, ) => { return new TotalRewardsUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TotalRewardsUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TotalRewardsUpdated>> { return phantom(TotalRewardsUpdated.reified( )); } static get p() { return TotalRewardsUpdated.phantom() }

 static get bcs() { return bcs.struct("TotalRewardsUpdated", {

 cur_epoch: bcs.u64(), total_principal_staked: bcs.u64(), sui_to_unstake: bcs.u64(), total_accrued_rewards: bcs.u64(), new_rewards: bcs.u64(), uncollected_protocol_fees: bcs.u64(), protocol_fee_on_new_rewards: bcs.u64(), prev_sui_claimable_per_dsui: bcs.u128(), new_sui_claimable_per_dsui: bcs.u128(), exchange_rate_increase: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): TotalRewardsUpdated { return TotalRewardsUpdated.reified( ).new( { curEpoch: decodeFromFields("u64", fields.cur_epoch), totalPrincipalStaked: decodeFromFields("u64", fields.total_principal_staked), suiToUnstake: decodeFromFields("u64", fields.sui_to_unstake), totalAccruedRewards: decodeFromFields("u64", fields.total_accrued_rewards), newRewards: decodeFromFields("u64", fields.new_rewards), uncollectedProtocolFees: decodeFromFields("u64", fields.uncollected_protocol_fees), protocolFeeOnNewRewards: decodeFromFields("u64", fields.protocol_fee_on_new_rewards), prevSuiClaimablePerDsui: decodeFromFields("u128", fields.prev_sui_claimable_per_dsui), newSuiClaimablePerDsui: decodeFromFields("u128", fields.new_sui_claimable_per_dsui), exchangeRateIncrease: decodeFromFields("u128", fields.exchange_rate_increase) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TotalRewardsUpdated { if (!isTotalRewardsUpdated(item.type)) { throw new Error("not a TotalRewardsUpdated type");

 }

 return TotalRewardsUpdated.reified( ).new( { curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch), totalPrincipalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_principal_staked), suiToUnstake: decodeFromFieldsWithTypes("u64", item.fields.sui_to_unstake), totalAccruedRewards: decodeFromFieldsWithTypes("u64", item.fields.total_accrued_rewards), newRewards: decodeFromFieldsWithTypes("u64", item.fields.new_rewards), uncollectedProtocolFees: decodeFromFieldsWithTypes("u64", item.fields.uncollected_protocol_fees), protocolFeeOnNewRewards: decodeFromFieldsWithTypes("u64", item.fields.protocol_fee_on_new_rewards), prevSuiClaimablePerDsui: decodeFromFieldsWithTypes("u128", item.fields.prev_sui_claimable_per_dsui), newSuiClaimablePerDsui: decodeFromFieldsWithTypes("u128", item.fields.new_sui_claimable_per_dsui), exchangeRateIncrease: decodeFromFieldsWithTypes("u128", item.fields.exchange_rate_increase) } ) }

 static fromBcs( data: Uint8Array ): TotalRewardsUpdated { return TotalRewardsUpdated.fromFields( TotalRewardsUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 curEpoch: this.curEpoch.toString(),totalPrincipalStaked: this.totalPrincipalStaked.toString(),suiToUnstake: this.suiToUnstake.toString(),totalAccruedRewards: this.totalAccruedRewards.toString(),newRewards: this.newRewards.toString(),uncollectedProtocolFees: this.uncollectedProtocolFees.toString(),protocolFeeOnNewRewards: this.protocolFeeOnNewRewards.toString(),prevSuiClaimablePerDsui: this.prevSuiClaimablePerDsui.toString(),newSuiClaimablePerDsui: this.newSuiClaimablePerDsui.toString(),exchangeRateIncrease: this.exchangeRateIncrease.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TotalRewardsUpdated { return TotalRewardsUpdated.reified( ).new( { curEpoch: decodeFromJSONField("u64", field.curEpoch), totalPrincipalStaked: decodeFromJSONField("u64", field.totalPrincipalStaked), suiToUnstake: decodeFromJSONField("u64", field.suiToUnstake), totalAccruedRewards: decodeFromJSONField("u64", field.totalAccruedRewards), newRewards: decodeFromJSONField("u64", field.newRewards), uncollectedProtocolFees: decodeFromJSONField("u64", field.uncollectedProtocolFees), protocolFeeOnNewRewards: decodeFromJSONField("u64", field.protocolFeeOnNewRewards), prevSuiClaimablePerDsui: decodeFromJSONField("u128", field.prevSuiClaimablePerDsui), newSuiClaimablePerDsui: decodeFromJSONField("u128", field.newSuiClaimablePerDsui), exchangeRateIncrease: decodeFromJSONField("u128", field.exchangeRateIncrease) } ) }

 static fromJSON( json: Record<string, any> ): TotalRewardsUpdated { if (json.$typeName !== TotalRewardsUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TotalRewardsUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TotalRewardsUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTotalRewardsUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TotalRewardsUpdated object`); } return TotalRewardsUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TotalRewardsUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTotalRewardsUpdated(data.bcs.type)) { throw new Error(`object at is not a TotalRewardsUpdated object`); }

 return TotalRewardsUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TotalRewardsUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TotalRewardsUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TotalRewardsUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTotalRewardsUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TotalRewardsUpdated object`); }

 return TotalRewardsUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== UnstakeRequest =============================== */

export function isUnstakeRequest(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::UnstakeRequest`; }

export interface UnstakeRequestFields { id: ToField<UID>; dsuiAmount: ToField<"u64">; suiAmount: ToField<"u64">; requestedAtEpoch: ToField<"u64"> }

export type UnstakeRequestReified = Reified< UnstakeRequest, UnstakeRequestFields >;

export class UnstakeRequest implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::UnstakeRequest`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UnstakeRequest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::UnstakeRequest`; readonly $typeArgs: []; readonly $isPhantom = UnstakeRequest.$isPhantom;

 readonly id: ToField<UID>; readonly dsuiAmount: ToField<"u64">; readonly suiAmount: ToField<"u64">; readonly requestedAtEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: UnstakeRequestFields, ) { this.$fullTypeName = composeSuiType( UnstakeRequest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::UnstakeRequest`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.dsuiAmount = fields.dsuiAmount;; this.suiAmount = fields.suiAmount;; this.requestedAtEpoch = fields.requestedAtEpoch; }

 static reified( ): UnstakeRequestReified { return { typeName: UnstakeRequest.$typeName, fullTypeName: composeSuiType( UnstakeRequest.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::UnstakeRequest`, typeArgs: [ ] as [], isPhantom: UnstakeRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UnstakeRequest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnstakeRequest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UnstakeRequest.fromBcs( data, ), bcs: UnstakeRequest.bcs, fromJSONField: (field: any) => UnstakeRequest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UnstakeRequest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UnstakeRequest.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UnstakeRequest.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UnstakeRequest.fetch( client, id, ), new: ( fields: UnstakeRequestFields, ) => { return new UnstakeRequest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnstakeRequest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UnstakeRequest>> { return phantom(UnstakeRequest.reified( )); } static get p() { return UnstakeRequest.phantom() }

 static get bcs() { return bcs.struct("UnstakeRequest", {

 id: UID.bcs, dsui_amount: bcs.u64(), sui_amount: bcs.u64(), requested_at_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UnstakeRequest { return UnstakeRequest.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), dsuiAmount: decodeFromFields("u64", fields.dsui_amount), suiAmount: decodeFromFields("u64", fields.sui_amount), requestedAtEpoch: decodeFromFields("u64", fields.requested_at_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UnstakeRequest { if (!isUnstakeRequest(item.type)) { throw new Error("not a UnstakeRequest type");

 }

 return UnstakeRequest.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), dsuiAmount: decodeFromFieldsWithTypes("u64", item.fields.dsui_amount), suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount), requestedAtEpoch: decodeFromFieldsWithTypes("u64", item.fields.requested_at_epoch) } ) }

 static fromBcs( data: Uint8Array ): UnstakeRequest { return UnstakeRequest.fromFields( UnstakeRequest.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,dsuiAmount: this.dsuiAmount.toString(),suiAmount: this.suiAmount.toString(),requestedAtEpoch: this.requestedAtEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UnstakeRequest { return UnstakeRequest.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), dsuiAmount: decodeFromJSONField("u64", field.dsuiAmount), suiAmount: decodeFromJSONField("u64", field.suiAmount), requestedAtEpoch: decodeFromJSONField("u64", field.requestedAtEpoch) } ) }

 static fromJSON( json: Record<string, any> ): UnstakeRequest { if (json.$typeName !== UnstakeRequest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UnstakeRequest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UnstakeRequest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnstakeRequest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnstakeRequest object`); } return UnstakeRequest.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UnstakeRequest { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUnstakeRequest(data.bcs.type)) { throw new Error(`object at is not a UnstakeRequest object`); }

 return UnstakeRequest.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UnstakeRequest.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UnstakeRequest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnstakeRequest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnstakeRequest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnstakeRequest object`); }

 return UnstakeRequest.fromSuiObjectData( res.data ); }

 }

/* ============================== UnstakingRequestsProcessed =============================== */

export function isUnstakingRequestsProcessed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::UnstakingRequestsProcessed`; }

export interface UnstakingRequestsProcessedFields { curEpoch: ToField<"u64">; totalSuiUnstaked: ToField<"u64">; suiClaimablePerDsui: ToField<"u128"> }

export type UnstakingRequestsProcessedReified = Reified< UnstakingRequestsProcessed, UnstakingRequestsProcessedFields >;

export class UnstakingRequestsProcessed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::UnstakingRequestsProcessed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UnstakingRequestsProcessed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::UnstakingRequestsProcessed`; readonly $typeArgs: []; readonly $isPhantom = UnstakingRequestsProcessed.$isPhantom;

 readonly curEpoch: ToField<"u64">; readonly totalSuiUnstaked: ToField<"u64">; readonly suiClaimablePerDsui: ToField<"u128">

 private constructor(typeArgs: [], fields: UnstakingRequestsProcessedFields, ) { this.$fullTypeName = composeSuiType( UnstakingRequestsProcessed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::UnstakingRequestsProcessed`; this.$typeArgs = typeArgs;

 this.curEpoch = fields.curEpoch;; this.totalSuiUnstaked = fields.totalSuiUnstaked;; this.suiClaimablePerDsui = fields.suiClaimablePerDsui; }

 static reified( ): UnstakingRequestsProcessedReified { return { typeName: UnstakingRequestsProcessed.$typeName, fullTypeName: composeSuiType( UnstakingRequestsProcessed.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::UnstakingRequestsProcessed`, typeArgs: [ ] as [], isPhantom: UnstakingRequestsProcessed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UnstakingRequestsProcessed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnstakingRequestsProcessed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UnstakingRequestsProcessed.fromBcs( data, ), bcs: UnstakingRequestsProcessed.bcs, fromJSONField: (field: any) => UnstakingRequestsProcessed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UnstakingRequestsProcessed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UnstakingRequestsProcessed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UnstakingRequestsProcessed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UnstakingRequestsProcessed.fetch( client, id, ), new: ( fields: UnstakingRequestsProcessedFields, ) => { return new UnstakingRequestsProcessed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnstakingRequestsProcessed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UnstakingRequestsProcessed>> { return phantom(UnstakingRequestsProcessed.reified( )); } static get p() { return UnstakingRequestsProcessed.phantom() }

 static get bcs() { return bcs.struct("UnstakingRequestsProcessed", {

 cur_epoch: bcs.u64(), total_sui_unstaked: bcs.u64(), sui_claimable_per_dsui: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): UnstakingRequestsProcessed { return UnstakingRequestsProcessed.reified( ).new( { curEpoch: decodeFromFields("u64", fields.cur_epoch), totalSuiUnstaked: decodeFromFields("u64", fields.total_sui_unstaked), suiClaimablePerDsui: decodeFromFields("u128", fields.sui_claimable_per_dsui) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UnstakingRequestsProcessed { if (!isUnstakingRequestsProcessed(item.type)) { throw new Error("not a UnstakingRequestsProcessed type");

 }

 return UnstakingRequestsProcessed.reified( ).new( { curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch), totalSuiUnstaked: decodeFromFieldsWithTypes("u64", item.fields.total_sui_unstaked), suiClaimablePerDsui: decodeFromFieldsWithTypes("u128", item.fields.sui_claimable_per_dsui) } ) }

 static fromBcs( data: Uint8Array ): UnstakingRequestsProcessed { return UnstakingRequestsProcessed.fromFields( UnstakingRequestsProcessed.bcs.parse(data) ) }

 toJSONField() { return {

 curEpoch: this.curEpoch.toString(),totalSuiUnstaked: this.totalSuiUnstaked.toString(),suiClaimablePerDsui: this.suiClaimablePerDsui.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UnstakingRequestsProcessed { return UnstakingRequestsProcessed.reified( ).new( { curEpoch: decodeFromJSONField("u64", field.curEpoch), totalSuiUnstaked: decodeFromJSONField("u64", field.totalSuiUnstaked), suiClaimablePerDsui: decodeFromJSONField("u128", field.suiClaimablePerDsui) } ) }

 static fromJSON( json: Record<string, any> ): UnstakingRequestsProcessed { if (json.$typeName !== UnstakingRequestsProcessed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UnstakingRequestsProcessed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UnstakingRequestsProcessed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnstakingRequestsProcessed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnstakingRequestsProcessed object`); } return UnstakingRequestsProcessed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UnstakingRequestsProcessed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUnstakingRequestsProcessed(data.bcs.type)) { throw new Error(`object at is not a UnstakingRequestsProcessed object`); }

 return UnstakingRequestsProcessed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UnstakingRequestsProcessed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UnstakingRequestsProcessed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnstakingRequestsProcessed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnstakingRequestsProcessed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnstakingRequestsProcessed object`); }

 return UnstakingRequestsProcessed.fromSuiObjectData( res.data ); }

 }

/* ============================== UserClaimedSui =============================== */

export function isUserClaimedSui(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::UserClaimedSui`; }

export interface UserClaimedSuiFields { id: ToField<ID>; owner: ToField<"address">; suiWithdrawn: ToField<"u64">; suiClaimablePerDsui: ToField<"u128">; curEpoch: ToField<"u64"> }

export type UserClaimedSuiReified = Reified< UserClaimedSui, UserClaimedSuiFields >;

export class UserClaimedSui implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::UserClaimedSui`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserClaimedSui.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::UserClaimedSui`; readonly $typeArgs: []; readonly $isPhantom = UserClaimedSui.$isPhantom;

 readonly id: ToField<ID>; readonly owner: ToField<"address">; readonly suiWithdrawn: ToField<"u64">; readonly suiClaimablePerDsui: ToField<"u128">; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: UserClaimedSuiFields, ) { this.$fullTypeName = composeSuiType( UserClaimedSui.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::UserClaimedSui`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.owner = fields.owner;; this.suiWithdrawn = fields.suiWithdrawn;; this.suiClaimablePerDsui = fields.suiClaimablePerDsui;; this.curEpoch = fields.curEpoch; }

 static reified( ): UserClaimedSuiReified { return { typeName: UserClaimedSui.$typeName, fullTypeName: composeSuiType( UserClaimedSui.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::UserClaimedSui`, typeArgs: [ ] as [], isPhantom: UserClaimedSui.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserClaimedSui.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserClaimedSui.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserClaimedSui.fromBcs( data, ), bcs: UserClaimedSui.bcs, fromJSONField: (field: any) => UserClaimedSui.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserClaimedSui.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserClaimedSui.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UserClaimedSui.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UserClaimedSui.fetch( client, id, ), new: ( fields: UserClaimedSuiFields, ) => { return new UserClaimedSui( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserClaimedSui.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserClaimedSui>> { return phantom(UserClaimedSui.reified( )); } static get p() { return UserClaimedSui.phantom() }

 static get bcs() { return bcs.struct("UserClaimedSui", {

 id: ID.bcs, owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_withdrawn: bcs.u64(), sui_claimable_per_dsui: bcs.u128(), cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserClaimedSui { return UserClaimedSui.reified( ).new( { id: decodeFromFields(ID.reified(), fields.id), owner: decodeFromFields("address", fields.owner), suiWithdrawn: decodeFromFields("u64", fields.sui_withdrawn), suiClaimablePerDsui: decodeFromFields("u128", fields.sui_claimable_per_dsui), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserClaimedSui { if (!isUserClaimedSui(item.type)) { throw new Error("not a UserClaimedSui type");

 }

 return UserClaimedSui.reified( ).new( { id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), owner: decodeFromFieldsWithTypes("address", item.fields.owner), suiWithdrawn: decodeFromFieldsWithTypes("u64", item.fields.sui_withdrawn), suiClaimablePerDsui: decodeFromFieldsWithTypes("u128", item.fields.sui_claimable_per_dsui), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): UserClaimedSui { return UserClaimedSui.fromFields( UserClaimedSui.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,owner: this.owner,suiWithdrawn: this.suiWithdrawn.toString(),suiClaimablePerDsui: this.suiClaimablePerDsui.toString(),curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserClaimedSui { return UserClaimedSui.reified( ).new( { id: decodeFromJSONField(ID.reified(), field.id), owner: decodeFromJSONField("address", field.owner), suiWithdrawn: decodeFromJSONField("u64", field.suiWithdrawn), suiClaimablePerDsui: decodeFromJSONField("u128", field.suiClaimablePerDsui), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): UserClaimedSui { if (json.$typeName !== UserClaimedSui.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserClaimedSui.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserClaimedSui { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserClaimedSui(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserClaimedSui object`); } return UserClaimedSui.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UserClaimedSui { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUserClaimedSui(data.bcs.type)) { throw new Error(`object at is not a UserClaimedSui object`); }

 return UserClaimedSui.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UserClaimedSui.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserClaimedSui> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserClaimedSui object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserClaimedSui(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserClaimedSui object`); }

 return UserClaimedSui.fromSuiObjectData( res.data ); }

 }

/* ============================== UserUnstakeRequest =============================== */

export function isUserUnstakeRequest(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::UserUnstakeRequest`; }

export interface UserUnstakeRequestFields { owner: ToField<"address">; unstakeEpoch: ToField<"u64">; suiToClaim: ToField<"u64">; dsuiBurnt: ToField<"u64">; suiClaimablePerDsui: ToField<"u128">; curEpoch: ToField<"u64"> }

export type UserUnstakeRequestReified = Reified< UserUnstakeRequest, UserUnstakeRequestFields >;

export class UserUnstakeRequest implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::UserUnstakeRequest`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserUnstakeRequest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::UserUnstakeRequest`; readonly $typeArgs: []; readonly $isPhantom = UserUnstakeRequest.$isPhantom;

 readonly owner: ToField<"address">; readonly unstakeEpoch: ToField<"u64">; readonly suiToClaim: ToField<"u64">; readonly dsuiBurnt: ToField<"u64">; readonly suiClaimablePerDsui: ToField<"u128">; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: UserUnstakeRequestFields, ) { this.$fullTypeName = composeSuiType( UserUnstakeRequest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::UserUnstakeRequest`; this.$typeArgs = typeArgs;

 this.owner = fields.owner;; this.unstakeEpoch = fields.unstakeEpoch;; this.suiToClaim = fields.suiToClaim;; this.dsuiBurnt = fields.dsuiBurnt;; this.suiClaimablePerDsui = fields.suiClaimablePerDsui;; this.curEpoch = fields.curEpoch; }

 static reified( ): UserUnstakeRequestReified { return { typeName: UserUnstakeRequest.$typeName, fullTypeName: composeSuiType( UserUnstakeRequest.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::UserUnstakeRequest`, typeArgs: [ ] as [], isPhantom: UserUnstakeRequest.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserUnstakeRequest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserUnstakeRequest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserUnstakeRequest.fromBcs( data, ), bcs: UserUnstakeRequest.bcs, fromJSONField: (field: any) => UserUnstakeRequest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserUnstakeRequest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserUnstakeRequest.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UserUnstakeRequest.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UserUnstakeRequest.fetch( client, id, ), new: ( fields: UserUnstakeRequestFields, ) => { return new UserUnstakeRequest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserUnstakeRequest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserUnstakeRequest>> { return phantom(UserUnstakeRequest.reified( )); } static get p() { return UserUnstakeRequest.phantom() }

 static get bcs() { return bcs.struct("UserUnstakeRequest", {

 owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), unstake_epoch: bcs.u64(), sui_to_claim: bcs.u64(), dsui_burnt: bcs.u64(), sui_claimable_per_dsui: bcs.u128(), cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserUnstakeRequest { return UserUnstakeRequest.reified( ).new( { owner: decodeFromFields("address", fields.owner), unstakeEpoch: decodeFromFields("u64", fields.unstake_epoch), suiToClaim: decodeFromFields("u64", fields.sui_to_claim), dsuiBurnt: decodeFromFields("u64", fields.dsui_burnt), suiClaimablePerDsui: decodeFromFields("u128", fields.sui_claimable_per_dsui), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserUnstakeRequest { if (!isUserUnstakeRequest(item.type)) { throw new Error("not a UserUnstakeRequest type");

 }

 return UserUnstakeRequest.reified( ).new( { owner: decodeFromFieldsWithTypes("address", item.fields.owner), unstakeEpoch: decodeFromFieldsWithTypes("u64", item.fields.unstake_epoch), suiToClaim: decodeFromFieldsWithTypes("u64", item.fields.sui_to_claim), dsuiBurnt: decodeFromFieldsWithTypes("u64", item.fields.dsui_burnt), suiClaimablePerDsui: decodeFromFieldsWithTypes("u128", item.fields.sui_claimable_per_dsui), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): UserUnstakeRequest { return UserUnstakeRequest.fromFields( UserUnstakeRequest.bcs.parse(data) ) }

 toJSONField() { return {

 owner: this.owner,unstakeEpoch: this.unstakeEpoch.toString(),suiToClaim: this.suiToClaim.toString(),dsuiBurnt: this.dsuiBurnt.toString(),suiClaimablePerDsui: this.suiClaimablePerDsui.toString(),curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserUnstakeRequest { return UserUnstakeRequest.reified( ).new( { owner: decodeFromJSONField("address", field.owner), unstakeEpoch: decodeFromJSONField("u64", field.unstakeEpoch), suiToClaim: decodeFromJSONField("u64", field.suiToClaim), dsuiBurnt: decodeFromJSONField("u64", field.dsuiBurnt), suiClaimablePerDsui: decodeFromJSONField("u128", field.suiClaimablePerDsui), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): UserUnstakeRequest { if (json.$typeName !== UserUnstakeRequest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserUnstakeRequest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserUnstakeRequest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserUnstakeRequest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserUnstakeRequest object`); } return UserUnstakeRequest.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UserUnstakeRequest { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUserUnstakeRequest(data.bcs.type)) { throw new Error(`object at is not a UserUnstakeRequest object`); }

 return UserUnstakeRequest.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UserUnstakeRequest.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserUnstakeRequest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserUnstakeRequest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserUnstakeRequest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserUnstakeRequest object`); }

 return UserUnstakeRequest.fromSuiObjectData( res.data ); }

 }

/* ============================== UserUnstakedInstantly =============================== */

export function isUserUnstakedInstantly(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::UserUnstakedInstantly`; }

export interface UserUnstakedInstantlyFields { owner: ToField<"address">; suiWithdrawn: ToField<"u64">; serviceFeeCharged: ToField<"u64">; protocolFeeCharged: ToField<"u64">; dsuiBurnt: ToField<"u64">; suiClaimablePerDsui: ToField<"u128">; curEpoch: ToField<"u64"> }

export type UserUnstakedInstantlyReified = Reified< UserUnstakedInstantly, UserUnstakedInstantlyFields >;

export class UserUnstakedInstantly implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::UserUnstakedInstantly`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UserUnstakedInstantly.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::UserUnstakedInstantly`; readonly $typeArgs: []; readonly $isPhantom = UserUnstakedInstantly.$isPhantom;

 readonly owner: ToField<"address">; readonly suiWithdrawn: ToField<"u64">; readonly serviceFeeCharged: ToField<"u64">; readonly protocolFeeCharged: ToField<"u64">; readonly dsuiBurnt: ToField<"u64">; readonly suiClaimablePerDsui: ToField<"u128">; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: UserUnstakedInstantlyFields, ) { this.$fullTypeName = composeSuiType( UserUnstakedInstantly.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::UserUnstakedInstantly`; this.$typeArgs = typeArgs;

 this.owner = fields.owner;; this.suiWithdrawn = fields.suiWithdrawn;; this.serviceFeeCharged = fields.serviceFeeCharged;; this.protocolFeeCharged = fields.protocolFeeCharged;; this.dsuiBurnt = fields.dsuiBurnt;; this.suiClaimablePerDsui = fields.suiClaimablePerDsui;; this.curEpoch = fields.curEpoch; }

 static reified( ): UserUnstakedInstantlyReified { return { typeName: UserUnstakedInstantly.$typeName, fullTypeName: composeSuiType( UserUnstakedInstantly.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::UserUnstakedInstantly`, typeArgs: [ ] as [], isPhantom: UserUnstakedInstantly.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserUnstakedInstantly.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UserUnstakedInstantly.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UserUnstakedInstantly.fromBcs( data, ), bcs: UserUnstakedInstantly.bcs, fromJSONField: (field: any) => UserUnstakedInstantly.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UserUnstakedInstantly.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UserUnstakedInstantly.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UserUnstakedInstantly.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UserUnstakedInstantly.fetch( client, id, ), new: ( fields: UserUnstakedInstantlyFields, ) => { return new UserUnstakedInstantly( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UserUnstakedInstantly.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UserUnstakedInstantly>> { return phantom(UserUnstakedInstantly.reified( )); } static get p() { return UserUnstakedInstantly.phantom() }

 static get bcs() { return bcs.struct("UserUnstakedInstantly", {

 owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_withdrawn: bcs.u64(), service_fee_charged: bcs.u64(), protocol_fee_charged: bcs.u64(), dsui_burnt: bcs.u64(), sui_claimable_per_dsui: bcs.u128(), cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UserUnstakedInstantly { return UserUnstakedInstantly.reified( ).new( { owner: decodeFromFields("address", fields.owner), suiWithdrawn: decodeFromFields("u64", fields.sui_withdrawn), serviceFeeCharged: decodeFromFields("u64", fields.service_fee_charged), protocolFeeCharged: decodeFromFields("u64", fields.protocol_fee_charged), dsuiBurnt: decodeFromFields("u64", fields.dsui_burnt), suiClaimablePerDsui: decodeFromFields("u128", fields.sui_claimable_per_dsui), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UserUnstakedInstantly { if (!isUserUnstakedInstantly(item.type)) { throw new Error("not a UserUnstakedInstantly type");

 }

 return UserUnstakedInstantly.reified( ).new( { owner: decodeFromFieldsWithTypes("address", item.fields.owner), suiWithdrawn: decodeFromFieldsWithTypes("u64", item.fields.sui_withdrawn), serviceFeeCharged: decodeFromFieldsWithTypes("u64", item.fields.service_fee_charged), protocolFeeCharged: decodeFromFieldsWithTypes("u64", item.fields.protocol_fee_charged), dsuiBurnt: decodeFromFieldsWithTypes("u64", item.fields.dsui_burnt), suiClaimablePerDsui: decodeFromFieldsWithTypes("u128", item.fields.sui_claimable_per_dsui), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): UserUnstakedInstantly { return UserUnstakedInstantly.fromFields( UserUnstakedInstantly.bcs.parse(data) ) }

 toJSONField() { return {

 owner: this.owner,suiWithdrawn: this.suiWithdrawn.toString(),serviceFeeCharged: this.serviceFeeCharged.toString(),protocolFeeCharged: this.protocolFeeCharged.toString(),dsuiBurnt: this.dsuiBurnt.toString(),suiClaimablePerDsui: this.suiClaimablePerDsui.toString(),curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UserUnstakedInstantly { return UserUnstakedInstantly.reified( ).new( { owner: decodeFromJSONField("address", field.owner), suiWithdrawn: decodeFromJSONField("u64", field.suiWithdrawn), serviceFeeCharged: decodeFromJSONField("u64", field.serviceFeeCharged), protocolFeeCharged: decodeFromJSONField("u64", field.protocolFeeCharged), dsuiBurnt: decodeFromJSONField("u64", field.dsuiBurnt), suiClaimablePerDsui: decodeFromJSONField("u128", field.suiClaimablePerDsui), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): UserUnstakedInstantly { if (json.$typeName !== UserUnstakedInstantly.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UserUnstakedInstantly.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UserUnstakedInstantly { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserUnstakedInstantly(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserUnstakedInstantly object`); } return UserUnstakedInstantly.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UserUnstakedInstantly { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUserUnstakedInstantly(data.bcs.type)) { throw new Error(`object at is not a UserUnstakedInstantly object`); }

 return UserUnstakedInstantly.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UserUnstakedInstantly.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UserUnstakedInstantly> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserUnstakedInstantly object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserUnstakedInstantly(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserUnstakedInstantly object`); }

 return UserUnstakedInstantly.fromSuiObjectData( res.data ); }

 }

/* ============================== ValidatorListUpdated =============================== */

export function isValidatorListUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::ValidatorListUpdated`; }

export interface ValidatorListUpdatedFields { validatorList: ToField<Vector<"address">>; toAdd: ToField<"bool"> }

export type ValidatorListUpdatedReified = Reified< ValidatorListUpdated, ValidatorListUpdatedFields >;

export class ValidatorListUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::ValidatorListUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ValidatorListUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::ValidatorListUpdated`; readonly $typeArgs: []; readonly $isPhantom = ValidatorListUpdated.$isPhantom;

 readonly validatorList: ToField<Vector<"address">>; readonly toAdd: ToField<"bool">

 private constructor(typeArgs: [], fields: ValidatorListUpdatedFields, ) { this.$fullTypeName = composeSuiType( ValidatorListUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::ValidatorListUpdated`; this.$typeArgs = typeArgs;

 this.validatorList = fields.validatorList;; this.toAdd = fields.toAdd; }

 static reified( ): ValidatorListUpdatedReified { return { typeName: ValidatorListUpdated.$typeName, fullTypeName: composeSuiType( ValidatorListUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::ValidatorListUpdated`, typeArgs: [ ] as [], isPhantom: ValidatorListUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ValidatorListUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ValidatorListUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ValidatorListUpdated.fromBcs( data, ), bcs: ValidatorListUpdated.bcs, fromJSONField: (field: any) => ValidatorListUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ValidatorListUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ValidatorListUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ValidatorListUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ValidatorListUpdated.fetch( client, id, ), new: ( fields: ValidatorListUpdatedFields, ) => { return new ValidatorListUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ValidatorListUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ValidatorListUpdated>> { return phantom(ValidatorListUpdated.reified( )); } static get p() { return ValidatorListUpdated.phantom() }

 static get bcs() { return bcs.struct("ValidatorListUpdated", {

 validator_list: bcs.vector(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), to_add: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): ValidatorListUpdated { return ValidatorListUpdated.reified( ).new( { validatorList: decodeFromFields(reified.vector("address"), fields.validator_list), toAdd: decodeFromFields("bool", fields.to_add) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ValidatorListUpdated { if (!isValidatorListUpdated(item.type)) { throw new Error("not a ValidatorListUpdated type");

 }

 return ValidatorListUpdated.reified( ).new( { validatorList: decodeFromFieldsWithTypes(reified.vector("address"), item.fields.validator_list), toAdd: decodeFromFieldsWithTypes("bool", item.fields.to_add) } ) }

 static fromBcs( data: Uint8Array ): ValidatorListUpdated { return ValidatorListUpdated.fromFields( ValidatorListUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 validatorList: fieldToJSON<Vector<"address">>(`vector<address>`, this.validatorList),toAdd: this.toAdd,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ValidatorListUpdated { return ValidatorListUpdated.reified( ).new( { validatorList: decodeFromJSONField(reified.vector("address"), field.validatorList), toAdd: decodeFromJSONField("bool", field.toAdd) } ) }

 static fromJSON( json: Record<string, any> ): ValidatorListUpdated { if (json.$typeName !== ValidatorListUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ValidatorListUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ValidatorListUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isValidatorListUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ValidatorListUpdated object`); } return ValidatorListUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ValidatorListUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isValidatorListUpdated(data.bcs.type)) { throw new Error(`object at is not a ValidatorListUpdated object`); }

 return ValidatorListUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ValidatorListUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ValidatorListUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ValidatorListUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isValidatorListUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ValidatorListUpdated object`); }

 return ValidatorListUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== ValidatorPool =============================== */

export function isValidatorPool(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::ValidatorPool`; }

export interface ValidatorPoolFields { stakedSuiObjects: ToField<LinkedTable<"u64", ToPhantom<StakedSui>>>; totalPrincipalStaked: ToField<"u64">; accruedRewards: ToField<"u64"> }

export type ValidatorPoolReified = Reified< ValidatorPool, ValidatorPoolFields >;

export class ValidatorPool implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::ValidatorPool`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ValidatorPool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::ValidatorPool`; readonly $typeArgs: []; readonly $isPhantom = ValidatorPool.$isPhantom;

 readonly stakedSuiObjects: ToField<LinkedTable<"u64", ToPhantom<StakedSui>>>; readonly totalPrincipalStaked: ToField<"u64">; readonly accruedRewards: ToField<"u64">

 private constructor(typeArgs: [], fields: ValidatorPoolFields, ) { this.$fullTypeName = composeSuiType( ValidatorPool.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::ValidatorPool`; this.$typeArgs = typeArgs;

 this.stakedSuiObjects = fields.stakedSuiObjects;; this.totalPrincipalStaked = fields.totalPrincipalStaked;; this.accruedRewards = fields.accruedRewards; }

 static reified( ): ValidatorPoolReified { return { typeName: ValidatorPool.$typeName, fullTypeName: composeSuiType( ValidatorPool.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::ValidatorPool`, typeArgs: [ ] as [], isPhantom: ValidatorPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ValidatorPool.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ValidatorPool.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ValidatorPool.fromBcs( data, ), bcs: ValidatorPool.bcs, fromJSONField: (field: any) => ValidatorPool.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ValidatorPool.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ValidatorPool.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ValidatorPool.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ValidatorPool.fetch( client, id, ), new: ( fields: ValidatorPoolFields, ) => { return new ValidatorPool( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ValidatorPool.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ValidatorPool>> { return phantom(ValidatorPool.reified( )); } static get p() { return ValidatorPool.phantom() }

 static get bcs() { return bcs.struct("ValidatorPool", {

 staked_sui_objects: LinkedTable.bcs(bcs.u64()), total_principal_staked: bcs.u64(), accrued_rewards: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ValidatorPool { return ValidatorPool.reified( ).new( { stakedSuiObjects: decodeFromFields(LinkedTable.reified("u64", reified.phantom(StakedSui.reified())), fields.staked_sui_objects), totalPrincipalStaked: decodeFromFields("u64", fields.total_principal_staked), accruedRewards: decodeFromFields("u64", fields.accrued_rewards) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ValidatorPool { if (!isValidatorPool(item.type)) { throw new Error("not a ValidatorPool type");

 }

 return ValidatorPool.reified( ).new( { stakedSuiObjects: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(StakedSui.reified())), item.fields.staked_sui_objects), totalPrincipalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_principal_staked), accruedRewards: decodeFromFieldsWithTypes("u64", item.fields.accrued_rewards) } ) }

 static fromBcs( data: Uint8Array ): ValidatorPool { return ValidatorPool.fromFields( ValidatorPool.bcs.parse(data) ) }

 toJSONField() { return {

 stakedSuiObjects: this.stakedSuiObjects.toJSONField(),totalPrincipalStaked: this.totalPrincipalStaked.toString(),accruedRewards: this.accruedRewards.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ValidatorPool { return ValidatorPool.reified( ).new( { stakedSuiObjects: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(StakedSui.reified())), field.stakedSuiObjects), totalPrincipalStaked: decodeFromJSONField("u64", field.totalPrincipalStaked), accruedRewards: decodeFromJSONField("u64", field.accruedRewards) } ) }

 static fromJSON( json: Record<string, any> ): ValidatorPool { if (json.$typeName !== ValidatorPool.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ValidatorPool.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ValidatorPool { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isValidatorPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ValidatorPool object`); } return ValidatorPool.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ValidatorPool { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isValidatorPool(data.bcs.type)) { throw new Error(`object at is not a ValidatorPool object`); }

 return ValidatorPool.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ValidatorPool.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ValidatorPool> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ValidatorPool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isValidatorPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ValidatorPool object`); }

 return ValidatorPool.fromSuiObjectData( res.data ); }

 }

/* ============================== ValidatorPoolDestroyed =============================== */

export function isValidatorPoolDestroyed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::ValidatorPoolDestroyed`; }

export interface ValidatorPoolDestroyedFields { validatorAddress: ToField<"address">; curEpoch: ToField<"u64"> }

export type ValidatorPoolDestroyedReified = Reified< ValidatorPoolDestroyed, ValidatorPoolDestroyedFields >;

export class ValidatorPoolDestroyed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::ValidatorPoolDestroyed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ValidatorPoolDestroyed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::ValidatorPoolDestroyed`; readonly $typeArgs: []; readonly $isPhantom = ValidatorPoolDestroyed.$isPhantom;

 readonly validatorAddress: ToField<"address">; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: ValidatorPoolDestroyedFields, ) { this.$fullTypeName = composeSuiType( ValidatorPoolDestroyed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::ValidatorPoolDestroyed`; this.$typeArgs = typeArgs;

 this.validatorAddress = fields.validatorAddress;; this.curEpoch = fields.curEpoch; }

 static reified( ): ValidatorPoolDestroyedReified { return { typeName: ValidatorPoolDestroyed.$typeName, fullTypeName: composeSuiType( ValidatorPoolDestroyed.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::ValidatorPoolDestroyed`, typeArgs: [ ] as [], isPhantom: ValidatorPoolDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ValidatorPoolDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ValidatorPoolDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ValidatorPoolDestroyed.fromBcs( data, ), bcs: ValidatorPoolDestroyed.bcs, fromJSONField: (field: any) => ValidatorPoolDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ValidatorPoolDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ValidatorPoolDestroyed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ValidatorPoolDestroyed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ValidatorPoolDestroyed.fetch( client, id, ), new: ( fields: ValidatorPoolDestroyedFields, ) => { return new ValidatorPoolDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ValidatorPoolDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ValidatorPoolDestroyed>> { return phantom(ValidatorPoolDestroyed.reified( )); } static get p() { return ValidatorPoolDestroyed.phantom() }

 static get bcs() { return bcs.struct("ValidatorPoolDestroyed", {

 validator_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ValidatorPoolDestroyed { return ValidatorPoolDestroyed.reified( ).new( { validatorAddress: decodeFromFields("address", fields.validator_address), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ValidatorPoolDestroyed { if (!isValidatorPoolDestroyed(item.type)) { throw new Error("not a ValidatorPoolDestroyed type");

 }

 return ValidatorPoolDestroyed.reified( ).new( { validatorAddress: decodeFromFieldsWithTypes("address", item.fields.validator_address), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): ValidatorPoolDestroyed { return ValidatorPoolDestroyed.fromFields( ValidatorPoolDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 validatorAddress: this.validatorAddress,curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ValidatorPoolDestroyed { return ValidatorPoolDestroyed.reified( ).new( { validatorAddress: decodeFromJSONField("address", field.validatorAddress), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): ValidatorPoolDestroyed { if (json.$typeName !== ValidatorPoolDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ValidatorPoolDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ValidatorPoolDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isValidatorPoolDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ValidatorPoolDestroyed object`); } return ValidatorPoolDestroyed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ValidatorPoolDestroyed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isValidatorPoolDestroyed(data.bcs.type)) { throw new Error(`object at is not a ValidatorPoolDestroyed object`); }

 return ValidatorPoolDestroyed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ValidatorPoolDestroyed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ValidatorPoolDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ValidatorPoolDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isValidatorPoolDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ValidatorPoolDestroyed object`); }

 return ValidatorPoolDestroyed.fromSuiObjectData( res.data ); }

 }

/* ============================== ValidatorPoolRewardsUpdated =============================== */

export function isValidatorPoolRewardsUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::dsui_vault::ValidatorPoolRewardsUpdated`; }

export interface ValidatorPoolRewardsUpdatedFields { validatorAddr: ToField<"address">; totalStakedSuiObjs: ToField<"u64">; prevRewards: ToField<"u64">; newRewards: ToField<"u64">; totalPrincipalStaked: ToField<"u64">; curEpoch: ToField<"u64"> }

export type ValidatorPoolRewardsUpdatedReified = Reified< ValidatorPoolRewardsUpdated, ValidatorPoolRewardsUpdatedFields >;

export class ValidatorPoolRewardsUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::dsui_vault::ValidatorPoolRewardsUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ValidatorPoolRewardsUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::dsui_vault::ValidatorPoolRewardsUpdated`; readonly $typeArgs: []; readonly $isPhantom = ValidatorPoolRewardsUpdated.$isPhantom;

 readonly validatorAddr: ToField<"address">; readonly totalStakedSuiObjs: ToField<"u64">; readonly prevRewards: ToField<"u64">; readonly newRewards: ToField<"u64">; readonly totalPrincipalStaked: ToField<"u64">; readonly curEpoch: ToField<"u64">

 private constructor(typeArgs: [], fields: ValidatorPoolRewardsUpdatedFields, ) { this.$fullTypeName = composeSuiType( ValidatorPoolRewardsUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::dsui_vault::ValidatorPoolRewardsUpdated`; this.$typeArgs = typeArgs;

 this.validatorAddr = fields.validatorAddr;; this.totalStakedSuiObjs = fields.totalStakedSuiObjs;; this.prevRewards = fields.prevRewards;; this.newRewards = fields.newRewards;; this.totalPrincipalStaked = fields.totalPrincipalStaked;; this.curEpoch = fields.curEpoch; }

 static reified( ): ValidatorPoolRewardsUpdatedReified { return { typeName: ValidatorPoolRewardsUpdated.$typeName, fullTypeName: composeSuiType( ValidatorPoolRewardsUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::dsui_vault::ValidatorPoolRewardsUpdated`, typeArgs: [ ] as [], isPhantom: ValidatorPoolRewardsUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ValidatorPoolRewardsUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ValidatorPoolRewardsUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ValidatorPoolRewardsUpdated.fromBcs( data, ), bcs: ValidatorPoolRewardsUpdated.bcs, fromJSONField: (field: any) => ValidatorPoolRewardsUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ValidatorPoolRewardsUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ValidatorPoolRewardsUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ValidatorPoolRewardsUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ValidatorPoolRewardsUpdated.fetch( client, id, ), new: ( fields: ValidatorPoolRewardsUpdatedFields, ) => { return new ValidatorPoolRewardsUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ValidatorPoolRewardsUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ValidatorPoolRewardsUpdated>> { return phantom(ValidatorPoolRewardsUpdated.reified( )); } static get p() { return ValidatorPoolRewardsUpdated.phantom() }

 static get bcs() { return bcs.struct("ValidatorPoolRewardsUpdated", {

 validator_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), total_staked_sui_objs: bcs.u64(), prev_rewards: bcs.u64(), new_rewards: bcs.u64(), total_principal_staked: bcs.u64(), cur_epoch: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ValidatorPoolRewardsUpdated { return ValidatorPoolRewardsUpdated.reified( ).new( { validatorAddr: decodeFromFields("address", fields.validator_addr), totalStakedSuiObjs: decodeFromFields("u64", fields.total_staked_sui_objs), prevRewards: decodeFromFields("u64", fields.prev_rewards), newRewards: decodeFromFields("u64", fields.new_rewards), totalPrincipalStaked: decodeFromFields("u64", fields.total_principal_staked), curEpoch: decodeFromFields("u64", fields.cur_epoch) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ValidatorPoolRewardsUpdated { if (!isValidatorPoolRewardsUpdated(item.type)) { throw new Error("not a ValidatorPoolRewardsUpdated type");

 }

 return ValidatorPoolRewardsUpdated.reified( ).new( { validatorAddr: decodeFromFieldsWithTypes("address", item.fields.validator_addr), totalStakedSuiObjs: decodeFromFieldsWithTypes("u64", item.fields.total_staked_sui_objs), prevRewards: decodeFromFieldsWithTypes("u64", item.fields.prev_rewards), newRewards: decodeFromFieldsWithTypes("u64", item.fields.new_rewards), totalPrincipalStaked: decodeFromFieldsWithTypes("u64", item.fields.total_principal_staked), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) } ) }

 static fromBcs( data: Uint8Array ): ValidatorPoolRewardsUpdated { return ValidatorPoolRewardsUpdated.fromFields( ValidatorPoolRewardsUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 validatorAddr: this.validatorAddr,totalStakedSuiObjs: this.totalStakedSuiObjs.toString(),prevRewards: this.prevRewards.toString(),newRewards: this.newRewards.toString(),totalPrincipalStaked: this.totalPrincipalStaked.toString(),curEpoch: this.curEpoch.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ValidatorPoolRewardsUpdated { return ValidatorPoolRewardsUpdated.reified( ).new( { validatorAddr: decodeFromJSONField("address", field.validatorAddr), totalStakedSuiObjs: decodeFromJSONField("u64", field.totalStakedSuiObjs), prevRewards: decodeFromJSONField("u64", field.prevRewards), newRewards: decodeFromJSONField("u64", field.newRewards), totalPrincipalStaked: decodeFromJSONField("u64", field.totalPrincipalStaked), curEpoch: decodeFromJSONField("u64", field.curEpoch) } ) }

 static fromJSON( json: Record<string, any> ): ValidatorPoolRewardsUpdated { if (json.$typeName !== ValidatorPoolRewardsUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ValidatorPoolRewardsUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ValidatorPoolRewardsUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isValidatorPoolRewardsUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ValidatorPoolRewardsUpdated object`); } return ValidatorPoolRewardsUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ValidatorPoolRewardsUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isValidatorPoolRewardsUpdated(data.bcs.type)) { throw new Error(`object at is not a ValidatorPoolRewardsUpdated object`); }

 return ValidatorPoolRewardsUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ValidatorPoolRewardsUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ValidatorPoolRewardsUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ValidatorPoolRewardsUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isValidatorPoolRewardsUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ValidatorPoolRewardsUpdated object`); }

 return ValidatorPoolRewardsUpdated.fromSuiObjectData( res.data ); }

 }
