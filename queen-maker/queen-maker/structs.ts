import * as reified from "../../_framework/reified";
import { String } from "../../_dependencies/source/0x1/string/structs";
import { Balance } from "../../_dependencies/source/0x2/balance/structs";
import { TreasuryCap } from "../../_dependencies/source/0x2/coin/structs";
import { LinkedTable } from "../../_dependencies/source/0x2/linked-table/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { SUI } from "../../_dependencies/source/0x2/sui/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { MysticalBee } from "../../dragon-trainer/dragon-trainer/structs";
import { HIVE } from "../../yield-flow/hive/structs";;
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { bcs, fromB64, fromHEX } from "@mysten/bcs";
import { queenmaker } from ".."

const PUBLISHED_AT = queenmaker.PUBLISHED_AT

const PKG_V1 = queenmaker.PKG_V1

/* ============================== AuctionConfig =============================== */

export function isAuctionConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::AuctionConfig`; }

export interface AuctionConfigFields { bidIncreasePct: ToField<"u64">; bidDecreasePct: ToField<"u64">; unlimitedDepositWindow: ToField<"u64">; limitedDepositWindow: ToField<"u64">; cooldownPeriod: ToField<"u64">; maxEggsPerQueen: ToField<"u64">; energyTax: ToField<"u64"> }

export type AuctionConfigReified = Reified<AuctionConfig, AuctionConfigFields>;

export class AuctionConfig implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::AuctionConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = AuctionConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::AuctionConfig`; readonly $typeArgs: []; readonly $isPhantom = AuctionConfig.$isPhantom;

    readonly bidIncreasePct: ToField<"u64">; readonly bidDecreasePct: ToField<"u64">; readonly unlimitedDepositWindow: ToField<"u64">; readonly limitedDepositWindow: ToField<"u64">; readonly cooldownPeriod: ToField<"u64">; readonly maxEggsPerQueen: ToField<"u64">; readonly energyTax: ToField<"u64">

    private constructor(typeArgs: [], fields: AuctionConfigFields,) {
        this.$fullTypeName = composeSuiType(AuctionConfig.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::AuctionConfig`; this.$typeArgs = typeArgs;

        this.bidIncreasePct = fields.bidIncreasePct;; this.bidDecreasePct = fields.bidDecreasePct;; this.unlimitedDepositWindow = fields.unlimitedDepositWindow;; this.limitedDepositWindow = fields.limitedDepositWindow;; this.cooldownPeriod = fields.cooldownPeriod;; this.maxEggsPerQueen = fields.maxEggsPerQueen;; this.energyTax = fields.energyTax;
    }

    static reified(): AuctionConfigReified { return { typeName: AuctionConfig.$typeName, fullTypeName: composeSuiType(AuctionConfig.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::AuctionConfig`, typeArgs: [] as [], isPhantom: AuctionConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AuctionConfig.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => AuctionConfig.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => AuctionConfig.fromBcs(data,), bcs: AuctionConfig.bcs, fromJSONField: (field: any) => AuctionConfig.fromJSONField(field,), fromJSON: (json: Record<string, any>) => AuctionConfig.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => AuctionConfig.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => AuctionConfig.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => AuctionConfig.fetch(client, id,), new: (fields: AuctionConfigFields,) => { return new AuctionConfig([], fields) }, kind: "StructClassReified", } }

    static get r() { return AuctionConfig.reified() }

    static phantom(): PhantomReified<ToTypeStr<AuctionConfig>> { return phantom(AuctionConfig.reified()); } static get p() { return AuctionConfig.phantom() }

    static get bcs() {
        return bcs.struct("AuctionConfig", {

            bid_increase_pct: bcs.u64(), bid_decrease_pct: bcs.u64(), unlimited_deposit_window: bcs.u64(), limited_deposit_window: bcs.u64(), cooldown_period: bcs.u64(), max_eggs_per_queen: bcs.u64(), energy_tax: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): AuctionConfig { return AuctionConfig.reified().new({ bidIncreasePct: decodeFromFields("u64", fields.bid_increase_pct), bidDecreasePct: decodeFromFields("u64", fields.bid_decrease_pct), unlimitedDepositWindow: decodeFromFields("u64", fields.unlimited_deposit_window), limitedDepositWindow: decodeFromFields("u64", fields.limited_deposit_window), cooldownPeriod: decodeFromFields("u64", fields.cooldown_period), maxEggsPerQueen: decodeFromFields("u64", fields.max_eggs_per_queen), energyTax: decodeFromFields("u64", fields.energy_tax) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): AuctionConfig {
        if (!isAuctionConfig(item.type)) {
            throw new Error("not a AuctionConfig type");

        }

        return AuctionConfig.reified().new({ bidIncreasePct: decodeFromFieldsWithTypes("u64", item.fields.bid_increase_pct), bidDecreasePct: decodeFromFieldsWithTypes("u64", item.fields.bid_decrease_pct), unlimitedDepositWindow: decodeFromFieldsWithTypes("u64", item.fields.unlimited_deposit_window), limitedDepositWindow: decodeFromFieldsWithTypes("u64", item.fields.limited_deposit_window), cooldownPeriod: decodeFromFieldsWithTypes("u64", item.fields.cooldown_period), maxEggsPerQueen: decodeFromFieldsWithTypes("u64", item.fields.max_eggs_per_queen), energyTax: decodeFromFieldsWithTypes("u64", item.fields.energy_tax) })
    }

    static fromBcs(data: Uint8Array): AuctionConfig { return AuctionConfig.fromFields(AuctionConfig.bcs.parse(data)) }

    toJSONField() {
        return {

            bidIncreasePct: this.bidIncreasePct.toString(), bidDecreasePct: this.bidDecreasePct.toString(), unlimitedDepositWindow: this.unlimitedDepositWindow.toString(), limitedDepositWindow: this.limitedDepositWindow.toString(), cooldownPeriod: this.cooldownPeriod.toString(), maxEggsPerQueen: this.maxEggsPerQueen.toString(), energyTax: this.energyTax.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): AuctionConfig { return AuctionConfig.reified().new({ bidIncreasePct: decodeFromJSONField("u64", field.bidIncreasePct), bidDecreasePct: decodeFromJSONField("u64", field.bidDecreasePct), unlimitedDepositWindow: decodeFromJSONField("u64", field.unlimitedDepositWindow), limitedDepositWindow: decodeFromJSONField("u64", field.limitedDepositWindow), cooldownPeriod: decodeFromJSONField("u64", field.cooldownPeriod), maxEggsPerQueen: decodeFromJSONField("u64", field.maxEggsPerQueen), energyTax: decodeFromJSONField("u64", field.energyTax) }) }

    static fromJSON(json: Record<string, any>): AuctionConfig {
        if (json.$typeName !== AuctionConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return AuctionConfig.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): AuctionConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAuctionConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AuctionConfig object`); } return AuctionConfig.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): AuctionConfig {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAuctionConfig(data.bcs.type)) { throw new Error(`object at is not a AuctionConfig object`); }

            return AuctionConfig.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return AuctionConfig.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AuctionConfig> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AuctionConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAuctionConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AuctionConfig object`); }

        return AuctionConfig.fromSuiObjectData(res.data);
    }

}

/* ============================== AuctionInfo =============================== */

export function isAuctionInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::AuctionInfo`; }

export interface AuctionInfoFields { auctionStartEpoch: ToField<"u64">; auctionStatus: ToField<"u8">; priceToBeAQueen: ToField<"u64">; priceToBeAQueenUpdateEpoch: ToField<"u64">; auctionPhase2StartEpoch: ToField<"u64">; unlimitedDepositsCloseMs: ToField<"u64"> }

export type AuctionInfoReified = Reified<AuctionInfo, AuctionInfoFields>;

export class AuctionInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::AuctionInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = AuctionInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::AuctionInfo`; readonly $typeArgs: []; readonly $isPhantom = AuctionInfo.$isPhantom;

    readonly auctionStartEpoch: ToField<"u64">; readonly auctionStatus: ToField<"u8">; readonly priceToBeAQueen: ToField<"u64">; readonly priceToBeAQueenUpdateEpoch: ToField<"u64">; readonly auctionPhase2StartEpoch: ToField<"u64">; readonly unlimitedDepositsCloseMs: ToField<"u64">

    private constructor(typeArgs: [], fields: AuctionInfoFields,) {
        this.$fullTypeName = composeSuiType(AuctionInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::AuctionInfo`; this.$typeArgs = typeArgs;

        this.auctionStartEpoch = fields.auctionStartEpoch;; this.auctionStatus = fields.auctionStatus;; this.priceToBeAQueen = fields.priceToBeAQueen;; this.priceToBeAQueenUpdateEpoch = fields.priceToBeAQueenUpdateEpoch;; this.auctionPhase2StartEpoch = fields.auctionPhase2StartEpoch;; this.unlimitedDepositsCloseMs = fields.unlimitedDepositsCloseMs;
    }

    static reified(): AuctionInfoReified { return { typeName: AuctionInfo.$typeName, fullTypeName: composeSuiType(AuctionInfo.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::AuctionInfo`, typeArgs: [] as [], isPhantom: AuctionInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AuctionInfo.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => AuctionInfo.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => AuctionInfo.fromBcs(data,), bcs: AuctionInfo.bcs, fromJSONField: (field: any) => AuctionInfo.fromJSONField(field,), fromJSON: (json: Record<string, any>) => AuctionInfo.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => AuctionInfo.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => AuctionInfo.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => AuctionInfo.fetch(client, id,), new: (fields: AuctionInfoFields,) => { return new AuctionInfo([], fields) }, kind: "StructClassReified", } }

    static get r() { return AuctionInfo.reified() }

    static phantom(): PhantomReified<ToTypeStr<AuctionInfo>> { return phantom(AuctionInfo.reified()); } static get p() { return AuctionInfo.phantom() }

    static get bcs() {
        return bcs.struct("AuctionInfo", {

            auction_start_epoch: bcs.u64(), auction_status: bcs.u8(), price_to_be_a_queen: bcs.u64(), price_to_be_a_queen_update_epoch: bcs.u64(), auction_phase_2_start_epoch: bcs.u64(), unlimited_deposits_close_ms: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): AuctionInfo { return AuctionInfo.reified().new({ auctionStartEpoch: decodeFromFields("u64", fields.auction_start_epoch), auctionStatus: decodeFromFields("u8", fields.auction_status), priceToBeAQueen: decodeFromFields("u64", fields.price_to_be_a_queen), priceToBeAQueenUpdateEpoch: decodeFromFields("u64", fields.price_to_be_a_queen_update_epoch), auctionPhase2StartEpoch: decodeFromFields("u64", fields.auction_phase_2_start_epoch), unlimitedDepositsCloseMs: decodeFromFields("u64", fields.unlimited_deposits_close_ms) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): AuctionInfo {
        if (!isAuctionInfo(item.type)) {
            throw new Error("not a AuctionInfo type");

        }

        return AuctionInfo.reified().new({ auctionStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_start_epoch), auctionStatus: decodeFromFieldsWithTypes("u8", item.fields.auction_status), priceToBeAQueen: decodeFromFieldsWithTypes("u64", item.fields.price_to_be_a_queen), priceToBeAQueenUpdateEpoch: decodeFromFieldsWithTypes("u64", item.fields.price_to_be_a_queen_update_epoch), auctionPhase2StartEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_phase_2_start_epoch), unlimitedDepositsCloseMs: decodeFromFieldsWithTypes("u64", item.fields.unlimited_deposits_close_ms) })
    }

    static fromBcs(data: Uint8Array): AuctionInfo { return AuctionInfo.fromFields(AuctionInfo.bcs.parse(data)) }

    toJSONField() {
        return {

            auctionStartEpoch: this.auctionStartEpoch.toString(), auctionStatus: this.auctionStatus, priceToBeAQueen: this.priceToBeAQueen.toString(), priceToBeAQueenUpdateEpoch: this.priceToBeAQueenUpdateEpoch.toString(), auctionPhase2StartEpoch: this.auctionPhase2StartEpoch.toString(), unlimitedDepositsCloseMs: this.unlimitedDepositsCloseMs.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): AuctionInfo { return AuctionInfo.reified().new({ auctionStartEpoch: decodeFromJSONField("u64", field.auctionStartEpoch), auctionStatus: decodeFromJSONField("u8", field.auctionStatus), priceToBeAQueen: decodeFromJSONField("u64", field.priceToBeAQueen), priceToBeAQueenUpdateEpoch: decodeFromJSONField("u64", field.priceToBeAQueenUpdateEpoch), auctionPhase2StartEpoch: decodeFromJSONField("u64", field.auctionPhase2StartEpoch), unlimitedDepositsCloseMs: decodeFromJSONField("u64", field.unlimitedDepositsCloseMs) }) }

    static fromJSON(json: Record<string, any>): AuctionInfo {
        if (json.$typeName !== AuctionInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return AuctionInfo.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): AuctionInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAuctionInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AuctionInfo object`); } return AuctionInfo.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): AuctionInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAuctionInfo(data.bcs.type)) { throw new Error(`object at is not a AuctionInfo object`); }

            return AuctionInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return AuctionInfo.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<AuctionInfo> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AuctionInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAuctionInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AuctionInfo object`); }

        return AuctionInfo.fromSuiObjectData(res.data);
    }

}

/* ============================== BidPool =============================== */

export function isBidPool(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::BidPool`; }

export interface BidPoolFields { suiAvailable: ToField<Balance<ToPhantom<SUI>>>; totalSuiBidded: ToField<"u64">; energyYield: ToField<"u64">; totalHiveEnergy: ToField<"u64">; totalHealth: ToField<"u64">; beesParticipated: ToField<"u64"> }

export type BidPoolReified = Reified<BidPool, BidPoolFields>;

export class BidPool implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::BidPool`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = BidPool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::BidPool`; readonly $typeArgs: []; readonly $isPhantom = BidPool.$isPhantom;

    readonly suiAvailable: ToField<Balance<ToPhantom<SUI>>>; readonly totalSuiBidded: ToField<"u64">; readonly energyYield: ToField<"u64">; readonly totalHiveEnergy: ToField<"u64">; readonly totalHealth: ToField<"u64">; readonly beesParticipated: ToField<"u64">

    private constructor(typeArgs: [], fields: BidPoolFields,) {
        this.$fullTypeName = composeSuiType(BidPool.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::BidPool`; this.$typeArgs = typeArgs;

        this.suiAvailable = fields.suiAvailable;; this.totalSuiBidded = fields.totalSuiBidded;; this.energyYield = fields.energyYield;; this.totalHiveEnergy = fields.totalHiveEnergy;; this.totalHealth = fields.totalHealth;; this.beesParticipated = fields.beesParticipated;
    }

    static reified(): BidPoolReified { return { typeName: BidPool.$typeName, fullTypeName: composeSuiType(BidPool.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::BidPool`, typeArgs: [] as [], isPhantom: BidPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidPool.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => BidPool.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => BidPool.fromBcs(data,), bcs: BidPool.bcs, fromJSONField: (field: any) => BidPool.fromJSONField(field,), fromJSON: (json: Record<string, any>) => BidPool.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => BidPool.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => BidPool.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => BidPool.fetch(client, id,), new: (fields: BidPoolFields,) => { return new BidPool([], fields) }, kind: "StructClassReified", } }

    static get r() { return BidPool.reified() }

    static phantom(): PhantomReified<ToTypeStr<BidPool>> { return phantom(BidPool.reified()); } static get p() { return BidPool.phantom() }

    static get bcs() {
        return bcs.struct("BidPool", {

            sui_available: Balance.bcs, total_sui_bidded: bcs.u64(), energy_yield: bcs.u64(), total_hive_energy: bcs.u64(), total_health: bcs.u64(), bees_participated: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): BidPool { return BidPool.reified().new({ suiAvailable: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.sui_available), totalSuiBidded: decodeFromFields("u64", fields.total_sui_bidded), energyYield: decodeFromFields("u64", fields.energy_yield), totalHiveEnergy: decodeFromFields("u64", fields.total_hive_energy), totalHealth: decodeFromFields("u64", fields.total_health), beesParticipated: decodeFromFields("u64", fields.bees_participated) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): BidPool {
        if (!isBidPool(item.type)) {
            throw new Error("not a BidPool type");

        }

        return BidPool.reified().new({ suiAvailable: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.sui_available), totalSuiBidded: decodeFromFieldsWithTypes("u64", item.fields.total_sui_bidded), energyYield: decodeFromFieldsWithTypes("u64", item.fields.energy_yield), totalHiveEnergy: decodeFromFieldsWithTypes("u64", item.fields.total_hive_energy), totalHealth: decodeFromFieldsWithTypes("u64", item.fields.total_health), beesParticipated: decodeFromFieldsWithTypes("u64", item.fields.bees_participated) })
    }

    static fromBcs(data: Uint8Array): BidPool { return BidPool.fromFields(BidPool.bcs.parse(data)) }

    toJSONField() {
        return {

            suiAvailable: this.suiAvailable.toJSONField(), totalSuiBidded: this.totalSuiBidded.toString(), energyYield: this.energyYield.toString(), totalHiveEnergy: this.totalHiveEnergy.toString(), totalHealth: this.totalHealth.toString(), beesParticipated: this.beesParticipated.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): BidPool { return BidPool.reified().new({ suiAvailable: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.suiAvailable), totalSuiBidded: decodeFromJSONField("u64", field.totalSuiBidded), energyYield: decodeFromJSONField("u64", field.energyYield), totalHiveEnergy: decodeFromJSONField("u64", field.totalHiveEnergy), totalHealth: decodeFromJSONField("u64", field.totalHealth), beesParticipated: decodeFromJSONField("u64", field.beesParticipated) }) }

    static fromJSON(json: Record<string, any>): BidPool {
        if (json.$typeName !== BidPool.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return BidPool.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): BidPool { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidPool object`); } return BidPool.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): BidPool {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidPool(data.bcs.type)) { throw new Error(`object at is not a BidPool object`); }

            return BidPool.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return BidPool.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<BidPool> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidPool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidPool object`); }

        return BidPool.fromSuiObjectData(res.data);
    }

}

/* ============================== BidUpdatedByUser =============================== */

export function isBidUpdatedByUser(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::BidUpdatedByUser`; }

export interface BidUpdatedByUserFields { trainerAddr: ToField<"address">; username: ToField<String>; bidAmt: ToField<"u64">; taxAmt: ToField<"u64">; flag: ToField<"bool">; auctionStartAt: ToField<"u64"> }

export type BidUpdatedByUserReified = Reified<BidUpdatedByUser, BidUpdatedByUserFields>;

export class BidUpdatedByUser implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::BidUpdatedByUser`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = BidUpdatedByUser.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::BidUpdatedByUser`; readonly $typeArgs: []; readonly $isPhantom = BidUpdatedByUser.$isPhantom;

    readonly trainerAddr: ToField<"address">; readonly username: ToField<String>; readonly bidAmt: ToField<"u64">; readonly taxAmt: ToField<"u64">; readonly flag: ToField<"bool">; readonly auctionStartAt: ToField<"u64">

    private constructor(typeArgs: [], fields: BidUpdatedByUserFields,) {
        this.$fullTypeName = composeSuiType(BidUpdatedByUser.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::BidUpdatedByUser`; this.$typeArgs = typeArgs;

        this.trainerAddr = fields.trainerAddr;; this.username = fields.username;; this.bidAmt = fields.bidAmt;; this.taxAmt = fields.taxAmt;; this.flag = fields.flag;; this.auctionStartAt = fields.auctionStartAt;
    }

    static reified(): BidUpdatedByUserReified { return { typeName: BidUpdatedByUser.$typeName, fullTypeName: composeSuiType(BidUpdatedByUser.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::BidUpdatedByUser`, typeArgs: [] as [], isPhantom: BidUpdatedByUser.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidUpdatedByUser.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => BidUpdatedByUser.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => BidUpdatedByUser.fromBcs(data,), bcs: BidUpdatedByUser.bcs, fromJSONField: (field: any) => BidUpdatedByUser.fromJSONField(field,), fromJSON: (json: Record<string, any>) => BidUpdatedByUser.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => BidUpdatedByUser.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => BidUpdatedByUser.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => BidUpdatedByUser.fetch(client, id,), new: (fields: BidUpdatedByUserFields,) => { return new BidUpdatedByUser([], fields) }, kind: "StructClassReified", } }

    static get r() { return BidUpdatedByUser.reified() }

    static phantom(): PhantomReified<ToTypeStr<BidUpdatedByUser>> { return phantom(BidUpdatedByUser.reified()); } static get p() { return BidUpdatedByUser.phantom() }

    static get bcs() {
        return bcs.struct("BidUpdatedByUser", {

            trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, bid_amt: bcs.u64(), tax_amt: bcs.u64(), flag: bcs.bool(), auction_start_at: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): BidUpdatedByUser { return BidUpdatedByUser.reified().new({ trainerAddr: decodeFromFields("address", fields.trainer_addr), username: decodeFromFields(String.reified(), fields.username), bidAmt: decodeFromFields("u64", fields.bid_amt), taxAmt: decodeFromFields("u64", fields.tax_amt), flag: decodeFromFields("bool", fields.flag), auctionStartAt: decodeFromFields("u64", fields.auction_start_at) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): BidUpdatedByUser {
        if (!isBidUpdatedByUser(item.type)) {
            throw new Error("not a BidUpdatedByUser type");

        }

        return BidUpdatedByUser.reified().new({ trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), bidAmt: decodeFromFieldsWithTypes("u64", item.fields.bid_amt), taxAmt: decodeFromFieldsWithTypes("u64", item.fields.tax_amt), flag: decodeFromFieldsWithTypes("bool", item.fields.flag), auctionStartAt: decodeFromFieldsWithTypes("u64", item.fields.auction_start_at) })
    }

    static fromBcs(data: Uint8Array): BidUpdatedByUser { return BidUpdatedByUser.fromFields(BidUpdatedByUser.bcs.parse(data)) }

    toJSONField() {
        return {

            trainerAddr: this.trainerAddr, username: this.username, bidAmt: this.bidAmt.toString(), taxAmt: this.taxAmt.toString(), flag: this.flag, auctionStartAt: this.auctionStartAt.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): BidUpdatedByUser { return BidUpdatedByUser.reified().new({ trainerAddr: decodeFromJSONField("address", field.trainerAddr), username: decodeFromJSONField(String.reified(), field.username), bidAmt: decodeFromJSONField("u64", field.bidAmt), taxAmt: decodeFromJSONField("u64", field.taxAmt), flag: decodeFromJSONField("bool", field.flag), auctionStartAt: decodeFromJSONField("u64", field.auctionStartAt) }) }

    static fromJSON(json: Record<string, any>): BidUpdatedByUser {
        if (json.$typeName !== BidUpdatedByUser.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return BidUpdatedByUser.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): BidUpdatedByUser { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidUpdatedByUser(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidUpdatedByUser object`); } return BidUpdatedByUser.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): BidUpdatedByUser {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidUpdatedByUser(data.bcs.type)) { throw new Error(`object at is not a BidUpdatedByUser object`); }

            return BidUpdatedByUser.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return BidUpdatedByUser.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<BidUpdatedByUser> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidUpdatedByUser object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidUpdatedByUser(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidUpdatedByUser object`); }

        return BidUpdatedByUser.fromSuiObjectData(res.data);
    }

}

/* ============================== BidsClosed =============================== */

export function isBidsClosed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::BidsClosed`; }

export interface BidsClosedFields { auctionStartEpoch: ToField<"u64"> }

export type BidsClosedReified = Reified<BidsClosed, BidsClosedFields>;

export class BidsClosed implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::BidsClosed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = BidsClosed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::BidsClosed`; readonly $typeArgs: []; readonly $isPhantom = BidsClosed.$isPhantom;

    readonly auctionStartEpoch: ToField<"u64">

    private constructor(typeArgs: [], fields: BidsClosedFields,) {
        this.$fullTypeName = composeSuiType(BidsClosed.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::BidsClosed`; this.$typeArgs = typeArgs;

        this.auctionStartEpoch = fields.auctionStartEpoch;
    }

    static reified(): BidsClosedReified { return { typeName: BidsClosed.$typeName, fullTypeName: composeSuiType(BidsClosed.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::BidsClosed`, typeArgs: [] as [], isPhantom: BidsClosed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidsClosed.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => BidsClosed.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => BidsClosed.fromBcs(data,), bcs: BidsClosed.bcs, fromJSONField: (field: any) => BidsClosed.fromJSONField(field,), fromJSON: (json: Record<string, any>) => BidsClosed.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => BidsClosed.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => BidsClosed.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => BidsClosed.fetch(client, id,), new: (fields: BidsClosedFields,) => { return new BidsClosed([], fields) }, kind: "StructClassReified", } }

    static get r() { return BidsClosed.reified() }

    static phantom(): PhantomReified<ToTypeStr<BidsClosed>> { return phantom(BidsClosed.reified()); } static get p() { return BidsClosed.phantom() }

    static get bcs() {
        return bcs.struct("BidsClosed", {

            auction_start_epoch: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): BidsClosed { return BidsClosed.reified().new({ auctionStartEpoch: decodeFromFields("u64", fields.auction_start_epoch) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): BidsClosed {
        if (!isBidsClosed(item.type)) {
            throw new Error("not a BidsClosed type");

        }

        return BidsClosed.reified().new({ auctionStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_start_epoch) })
    }

    static fromBcs(data: Uint8Array): BidsClosed { return BidsClosed.fromFields(BidsClosed.bcs.parse(data)) }

    toJSONField() {
        return {

            auctionStartEpoch: this.auctionStartEpoch.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): BidsClosed { return BidsClosed.reified().new({ auctionStartEpoch: decodeFromJSONField("u64", field.auctionStartEpoch) }) }

    static fromJSON(json: Record<string, any>): BidsClosed {
        if (json.$typeName !== BidsClosed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return BidsClosed.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): BidsClosed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidsClosed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidsClosed object`); } return BidsClosed.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): BidsClosed {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidsClosed(data.bcs.type)) { throw new Error(`object at is not a BidsClosed object`); }

            return BidsClosed.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return BidsClosed.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<BidsClosed> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidsClosed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidsClosed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidsClosed object`); }

        return BidsClosed.fromSuiObjectData(res.data);
    }

}

/* ============================== BidsOpenForExisting =============================== */

export function isBidsOpenForExisting(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::BidsOpenForExisting`; }

export interface BidsOpenForExistingFields { auctionStartEpoch: ToField<"u64">; priceToBeAQueen: ToField<"u64">; curEpoch: ToField<"u64">; depositsOpenTill: ToField<"u64"> }

export type BidsOpenForExistingReified = Reified<BidsOpenForExisting, BidsOpenForExistingFields>;

export class BidsOpenForExisting implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::BidsOpenForExisting`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = BidsOpenForExisting.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::BidsOpenForExisting`; readonly $typeArgs: []; readonly $isPhantom = BidsOpenForExisting.$isPhantom;

    readonly auctionStartEpoch: ToField<"u64">; readonly priceToBeAQueen: ToField<"u64">; readonly curEpoch: ToField<"u64">; readonly depositsOpenTill: ToField<"u64">

    private constructor(typeArgs: [], fields: BidsOpenForExistingFields,) {
        this.$fullTypeName = composeSuiType(BidsOpenForExisting.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::BidsOpenForExisting`; this.$typeArgs = typeArgs;

        this.auctionStartEpoch = fields.auctionStartEpoch;; this.priceToBeAQueen = fields.priceToBeAQueen;; this.curEpoch = fields.curEpoch;; this.depositsOpenTill = fields.depositsOpenTill;
    }

    static reified(): BidsOpenForExistingReified { return { typeName: BidsOpenForExisting.$typeName, fullTypeName: composeSuiType(BidsOpenForExisting.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::BidsOpenForExisting`, typeArgs: [] as [], isPhantom: BidsOpenForExisting.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BidsOpenForExisting.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => BidsOpenForExisting.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => BidsOpenForExisting.fromBcs(data,), bcs: BidsOpenForExisting.bcs, fromJSONField: (field: any) => BidsOpenForExisting.fromJSONField(field,), fromJSON: (json: Record<string, any>) => BidsOpenForExisting.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => BidsOpenForExisting.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => BidsOpenForExisting.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => BidsOpenForExisting.fetch(client, id,), new: (fields: BidsOpenForExistingFields,) => { return new BidsOpenForExisting([], fields) }, kind: "StructClassReified", } }

    static get r() { return BidsOpenForExisting.reified() }

    static phantom(): PhantomReified<ToTypeStr<BidsOpenForExisting>> { return phantom(BidsOpenForExisting.reified()); } static get p() { return BidsOpenForExisting.phantom() }

    static get bcs() {
        return bcs.struct("BidsOpenForExisting", {

            auction_start_epoch: bcs.u64(), price_to_be_a_queen: bcs.u64(), cur_epoch: bcs.u64(), deposits_open_till: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): BidsOpenForExisting { return BidsOpenForExisting.reified().new({ auctionStartEpoch: decodeFromFields("u64", fields.auction_start_epoch), priceToBeAQueen: decodeFromFields("u64", fields.price_to_be_a_queen), curEpoch: decodeFromFields("u64", fields.cur_epoch), depositsOpenTill: decodeFromFields("u64", fields.deposits_open_till) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): BidsOpenForExisting {
        if (!isBidsOpenForExisting(item.type)) {
            throw new Error("not a BidsOpenForExisting type");

        }

        return BidsOpenForExisting.reified().new({ auctionStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_start_epoch), priceToBeAQueen: decodeFromFieldsWithTypes("u64", item.fields.price_to_be_a_queen), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch), depositsOpenTill: decodeFromFieldsWithTypes("u64", item.fields.deposits_open_till) })
    }

    static fromBcs(data: Uint8Array): BidsOpenForExisting { return BidsOpenForExisting.fromFields(BidsOpenForExisting.bcs.parse(data)) }

    toJSONField() {
        return {

            auctionStartEpoch: this.auctionStartEpoch.toString(), priceToBeAQueen: this.priceToBeAQueen.toString(), curEpoch: this.curEpoch.toString(), depositsOpenTill: this.depositsOpenTill.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): BidsOpenForExisting { return BidsOpenForExisting.reified().new({ auctionStartEpoch: decodeFromJSONField("u64", field.auctionStartEpoch), priceToBeAQueen: decodeFromJSONField("u64", field.priceToBeAQueen), curEpoch: decodeFromJSONField("u64", field.curEpoch), depositsOpenTill: decodeFromJSONField("u64", field.depositsOpenTill) }) }

    static fromJSON(json: Record<string, any>): BidsOpenForExisting {
        if (json.$typeName !== BidsOpenForExisting.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return BidsOpenForExisting.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): BidsOpenForExisting { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBidsOpenForExisting(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BidsOpenForExisting object`); } return BidsOpenForExisting.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): BidsOpenForExisting {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBidsOpenForExisting(data.bcs.type)) { throw new Error(`object at is not a BidsOpenForExisting object`); }

            return BidsOpenForExisting.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return BidsOpenForExisting.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<BidsOpenForExisting> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BidsOpenForExisting object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBidsOpenForExisting(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BidsOpenForExisting object`); }

        return BidsOpenForExisting.fromSuiObjectData(res.data);
    }

}

/* ============================== EnergyAndHealthIncremented =============================== */

export function isEnergyAndHealthIncremented(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::EnergyAndHealthIncremented`; }

export interface EnergyAndHealthIncrementedFields { auctionEpoch: ToField<"u64">; totalSuiBidded: ToField<"u64">; energyYield: ToField<"u64">; totalHiveEnergy: ToField<"u64">; totalHealth: ToField<"u64"> }

export type EnergyAndHealthIncrementedReified = Reified<EnergyAndHealthIncremented, EnergyAndHealthIncrementedFields>;

export class EnergyAndHealthIncremented implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::EnergyAndHealthIncremented`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = EnergyAndHealthIncremented.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::EnergyAndHealthIncremented`; readonly $typeArgs: []; readonly $isPhantom = EnergyAndHealthIncremented.$isPhantom;

    readonly auctionEpoch: ToField<"u64">; readonly totalSuiBidded: ToField<"u64">; readonly energyYield: ToField<"u64">; readonly totalHiveEnergy: ToField<"u64">; readonly totalHealth: ToField<"u64">

    private constructor(typeArgs: [], fields: EnergyAndHealthIncrementedFields,) {
        this.$fullTypeName = composeSuiType(EnergyAndHealthIncremented.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::EnergyAndHealthIncremented`; this.$typeArgs = typeArgs;

        this.auctionEpoch = fields.auctionEpoch;; this.totalSuiBidded = fields.totalSuiBidded;; this.energyYield = fields.energyYield;; this.totalHiveEnergy = fields.totalHiveEnergy;; this.totalHealth = fields.totalHealth;
    }

    static reified(): EnergyAndHealthIncrementedReified { return { typeName: EnergyAndHealthIncremented.$typeName, fullTypeName: composeSuiType(EnergyAndHealthIncremented.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::EnergyAndHealthIncremented`, typeArgs: [] as [], isPhantom: EnergyAndHealthIncremented.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => EnergyAndHealthIncremented.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => EnergyAndHealthIncremented.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => EnergyAndHealthIncremented.fromBcs(data,), bcs: EnergyAndHealthIncremented.bcs, fromJSONField: (field: any) => EnergyAndHealthIncremented.fromJSONField(field,), fromJSON: (json: Record<string, any>) => EnergyAndHealthIncremented.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => EnergyAndHealthIncremented.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => EnergyAndHealthIncremented.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => EnergyAndHealthIncremented.fetch(client, id,), new: (fields: EnergyAndHealthIncrementedFields,) => { return new EnergyAndHealthIncremented([], fields) }, kind: "StructClassReified", } }

    static get r() { return EnergyAndHealthIncremented.reified() }

    static phantom(): PhantomReified<ToTypeStr<EnergyAndHealthIncremented>> { return phantom(EnergyAndHealthIncremented.reified()); } static get p() { return EnergyAndHealthIncremented.phantom() }

    static get bcs() {
        return bcs.struct("EnergyAndHealthIncremented", {

            auction_epoch: bcs.u64(), total_sui_bidded: bcs.u64(), energy_yield: bcs.u64(), total_hive_energy: bcs.u64(), total_health: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): EnergyAndHealthIncremented { return EnergyAndHealthIncremented.reified().new({ auctionEpoch: decodeFromFields("u64", fields.auction_epoch), totalSuiBidded: decodeFromFields("u64", fields.total_sui_bidded), energyYield: decodeFromFields("u64", fields.energy_yield), totalHiveEnergy: decodeFromFields("u64", fields.total_hive_energy), totalHealth: decodeFromFields("u64", fields.total_health) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): EnergyAndHealthIncremented {
        if (!isEnergyAndHealthIncremented(item.type)) {
            throw new Error("not a EnergyAndHealthIncremented type");

        }

        return EnergyAndHealthIncremented.reified().new({ auctionEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_epoch), totalSuiBidded: decodeFromFieldsWithTypes("u64", item.fields.total_sui_bidded), energyYield: decodeFromFieldsWithTypes("u64", item.fields.energy_yield), totalHiveEnergy: decodeFromFieldsWithTypes("u64", item.fields.total_hive_energy), totalHealth: decodeFromFieldsWithTypes("u64", item.fields.total_health) })
    }

    static fromBcs(data: Uint8Array): EnergyAndHealthIncremented { return EnergyAndHealthIncremented.fromFields(EnergyAndHealthIncremented.bcs.parse(data)) }

    toJSONField() {
        return {

            auctionEpoch: this.auctionEpoch.toString(), totalSuiBidded: this.totalSuiBidded.toString(), energyYield: this.energyYield.toString(), totalHiveEnergy: this.totalHiveEnergy.toString(), totalHealth: this.totalHealth.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): EnergyAndHealthIncremented { return EnergyAndHealthIncremented.reified().new({ auctionEpoch: decodeFromJSONField("u64", field.auctionEpoch), totalSuiBidded: decodeFromJSONField("u64", field.totalSuiBidded), energyYield: decodeFromJSONField("u64", field.energyYield), totalHiveEnergy: decodeFromJSONField("u64", field.totalHiveEnergy), totalHealth: decodeFromJSONField("u64", field.totalHealth) }) }

    static fromJSON(json: Record<string, any>): EnergyAndHealthIncremented {
        if (json.$typeName !== EnergyAndHealthIncremented.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return EnergyAndHealthIncremented.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): EnergyAndHealthIncremented { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEnergyAndHealthIncremented(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a EnergyAndHealthIncremented object`); } return EnergyAndHealthIncremented.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): EnergyAndHealthIncremented {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isEnergyAndHealthIncremented(data.bcs.type)) { throw new Error(`object at is not a EnergyAndHealthIncremented object`); }

            return EnergyAndHealthIncremented.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return EnergyAndHealthIncremented.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<EnergyAndHealthIncremented> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching EnergyAndHealthIncremented object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEnergyAndHealthIncremented(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a EnergyAndHealthIncremented object`); }

        return EnergyAndHealthIncremented.fromSuiObjectData(res.data);
    }

}

/* ============================== LeadingDragonBee =============================== */

export function isLeadingDragonBee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::LeadingDragonBee`; }

export interface LeadingDragonBeeFields { familyType: ToField<"u64">; version: ToField<"u64">; bidAmount: ToField<"u64">; trainerAddr: ToField<"address">; username: ToField<String> }

export type LeadingDragonBeeReified = Reified<LeadingDragonBee, LeadingDragonBeeFields>;

export class LeadingDragonBee implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::LeadingDragonBee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = LeadingDragonBee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::LeadingDragonBee`; readonly $typeArgs: []; readonly $isPhantom = LeadingDragonBee.$isPhantom;

    readonly familyType: ToField<"u64">; readonly version: ToField<"u64">; readonly bidAmount: ToField<"u64">; readonly trainerAddr: ToField<"address">; readonly username: ToField<String>

    private constructor(typeArgs: [], fields: LeadingDragonBeeFields,) {
        this.$fullTypeName = composeSuiType(LeadingDragonBee.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::LeadingDragonBee`; this.$typeArgs = typeArgs;

        this.familyType = fields.familyType;; this.version = fields.version;; this.bidAmount = fields.bidAmount;; this.trainerAddr = fields.trainerAddr;; this.username = fields.username;
    }

    static reified(): LeadingDragonBeeReified { return { typeName: LeadingDragonBee.$typeName, fullTypeName: composeSuiType(LeadingDragonBee.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::LeadingDragonBee`, typeArgs: [] as [], isPhantom: LeadingDragonBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LeadingDragonBee.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => LeadingDragonBee.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => LeadingDragonBee.fromBcs(data,), bcs: LeadingDragonBee.bcs, fromJSONField: (field: any) => LeadingDragonBee.fromJSONField(field,), fromJSON: (json: Record<string, any>) => LeadingDragonBee.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => LeadingDragonBee.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => LeadingDragonBee.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => LeadingDragonBee.fetch(client, id,), new: (fields: LeadingDragonBeeFields,) => { return new LeadingDragonBee([], fields) }, kind: "StructClassReified", } }

    static get r() { return LeadingDragonBee.reified() }

    static phantom(): PhantomReified<ToTypeStr<LeadingDragonBee>> { return phantom(LeadingDragonBee.reified()); } static get p() { return LeadingDragonBee.phantom() }

    static get bcs() {
        return bcs.struct("LeadingDragonBee", {

            family_type: bcs.u64(), version: bcs.u64(), bid_amount: bcs.u64(), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs

        })
    };

    static fromFields(fields: Record<string, any>): LeadingDragonBee { return LeadingDragonBee.reified().new({ familyType: decodeFromFields("u64", fields.family_type), version: decodeFromFields("u64", fields.version), bidAmount: decodeFromFields("u64", fields.bid_amount), trainerAddr: decodeFromFields("address", fields.trainer_addr), username: decodeFromFields(String.reified(), fields.username) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): LeadingDragonBee {
        if (!isLeadingDragonBee(item.type)) {
            throw new Error("not a LeadingDragonBee type");

        }

        return LeadingDragonBee.reified().new({ familyType: decodeFromFieldsWithTypes("u64", item.fields.family_type), version: decodeFromFieldsWithTypes("u64", item.fields.version), bidAmount: decodeFromFieldsWithTypes("u64", item.fields.bid_amount), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username) })
    }

    static fromBcs(data: Uint8Array): LeadingDragonBee { return LeadingDragonBee.fromFields(LeadingDragonBee.bcs.parse(data)) }

    toJSONField() {
        return {

            familyType: this.familyType.toString(), version: this.version.toString(), bidAmount: this.bidAmount.toString(), trainerAddr: this.trainerAddr, username: this.username,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): LeadingDragonBee { return LeadingDragonBee.reified().new({ familyType: decodeFromJSONField("u64", field.familyType), version: decodeFromJSONField("u64", field.version), bidAmount: decodeFromJSONField("u64", field.bidAmount), trainerAddr: decodeFromJSONField("address", field.trainerAddr), username: decodeFromJSONField(String.reified(), field.username) }) }

    static fromJSON(json: Record<string, any>): LeadingDragonBee {
        if (json.$typeName !== LeadingDragonBee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return LeadingDragonBee.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): LeadingDragonBee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLeadingDragonBee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LeadingDragonBee object`); } return LeadingDragonBee.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): LeadingDragonBee {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLeadingDragonBee(data.bcs.type)) { throw new Error(`object at is not a LeadingDragonBee object`); }

            return LeadingDragonBee.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return LeadingDragonBee.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<LeadingDragonBee> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LeadingDragonBee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLeadingDragonBee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LeadingDragonBee object`); }

        return LeadingDragonBee.fromSuiObjectData(res.data);
    }

}

/* ============================== LeadingDragonBeeUpdated =============================== */

export function isLeadingDragonBeeUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::LeadingDragonBeeUpdated`; }

export interface LeadingDragonBeeUpdatedFields { auctionStartEpoch: ToField<"u64">; familyType: ToField<"u64">; version: ToField<"u64">; bidAmount: ToField<"u64">; trainerAddr: ToField<"address">; username: ToField<String> }

export type LeadingDragonBeeUpdatedReified = Reified<LeadingDragonBeeUpdated, LeadingDragonBeeUpdatedFields>;

export class LeadingDragonBeeUpdated implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::LeadingDragonBeeUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = LeadingDragonBeeUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::LeadingDragonBeeUpdated`; readonly $typeArgs: []; readonly $isPhantom = LeadingDragonBeeUpdated.$isPhantom;

    readonly auctionStartEpoch: ToField<"u64">; readonly familyType: ToField<"u64">; readonly version: ToField<"u64">; readonly bidAmount: ToField<"u64">; readonly trainerAddr: ToField<"address">; readonly username: ToField<String>

    private constructor(typeArgs: [], fields: LeadingDragonBeeUpdatedFields,) {
        this.$fullTypeName = composeSuiType(LeadingDragonBeeUpdated.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::LeadingDragonBeeUpdated`; this.$typeArgs = typeArgs;

        this.auctionStartEpoch = fields.auctionStartEpoch;; this.familyType = fields.familyType;; this.version = fields.version;; this.bidAmount = fields.bidAmount;; this.trainerAddr = fields.trainerAddr;; this.username = fields.username;
    }

    static reified(): LeadingDragonBeeUpdatedReified { return { typeName: LeadingDragonBeeUpdated.$typeName, fullTypeName: composeSuiType(LeadingDragonBeeUpdated.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::LeadingDragonBeeUpdated`, typeArgs: [] as [], isPhantom: LeadingDragonBeeUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LeadingDragonBeeUpdated.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => LeadingDragonBeeUpdated.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => LeadingDragonBeeUpdated.fromBcs(data,), bcs: LeadingDragonBeeUpdated.bcs, fromJSONField: (field: any) => LeadingDragonBeeUpdated.fromJSONField(field,), fromJSON: (json: Record<string, any>) => LeadingDragonBeeUpdated.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => LeadingDragonBeeUpdated.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => LeadingDragonBeeUpdated.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => LeadingDragonBeeUpdated.fetch(client, id,), new: (fields: LeadingDragonBeeUpdatedFields,) => { return new LeadingDragonBeeUpdated([], fields) }, kind: "StructClassReified", } }

    static get r() { return LeadingDragonBeeUpdated.reified() }

    static phantom(): PhantomReified<ToTypeStr<LeadingDragonBeeUpdated>> { return phantom(LeadingDragonBeeUpdated.reified()); } static get p() { return LeadingDragonBeeUpdated.phantom() }

    static get bcs() {
        return bcs.struct("LeadingDragonBeeUpdated", {

            auction_start_epoch: bcs.u64(), family_type: bcs.u64(), version: bcs.u64(), bid_amount: bcs.u64(), trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs

        })
    };

    static fromFields(fields: Record<string, any>): LeadingDragonBeeUpdated { return LeadingDragonBeeUpdated.reified().new({ auctionStartEpoch: decodeFromFields("u64", fields.auction_start_epoch), familyType: decodeFromFields("u64", fields.family_type), version: decodeFromFields("u64", fields.version), bidAmount: decodeFromFields("u64", fields.bid_amount), trainerAddr: decodeFromFields("address", fields.trainer_addr), username: decodeFromFields(String.reified(), fields.username) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): LeadingDragonBeeUpdated {
        if (!isLeadingDragonBeeUpdated(item.type)) {
            throw new Error("not a LeadingDragonBeeUpdated type");

        }

        return LeadingDragonBeeUpdated.reified().new({ auctionStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_start_epoch), familyType: decodeFromFieldsWithTypes("u64", item.fields.family_type), version: decodeFromFieldsWithTypes("u64", item.fields.version), bidAmount: decodeFromFieldsWithTypes("u64", item.fields.bid_amount), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username) })
    }

    static fromBcs(data: Uint8Array): LeadingDragonBeeUpdated { return LeadingDragonBeeUpdated.fromFields(LeadingDragonBeeUpdated.bcs.parse(data)) }

    toJSONField() {
        return {

            auctionStartEpoch: this.auctionStartEpoch.toString(), familyType: this.familyType.toString(), version: this.version.toString(), bidAmount: this.bidAmount.toString(), trainerAddr: this.trainerAddr, username: this.username,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): LeadingDragonBeeUpdated { return LeadingDragonBeeUpdated.reified().new({ auctionStartEpoch: decodeFromJSONField("u64", field.auctionStartEpoch), familyType: decodeFromJSONField("u64", field.familyType), version: decodeFromJSONField("u64", field.version), bidAmount: decodeFromJSONField("u64", field.bidAmount), trainerAddr: decodeFromJSONField("address", field.trainerAddr), username: decodeFromJSONField(String.reified(), field.username) }) }

    static fromJSON(json: Record<string, any>): LeadingDragonBeeUpdated {
        if (json.$typeName !== LeadingDragonBeeUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return LeadingDragonBeeUpdated.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): LeadingDragonBeeUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLeadingDragonBeeUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LeadingDragonBeeUpdated object`); } return LeadingDragonBeeUpdated.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): LeadingDragonBeeUpdated {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLeadingDragonBeeUpdated(data.bcs.type)) { throw new Error(`object at is not a LeadingDragonBeeUpdated object`); }

            return LeadingDragonBeeUpdated.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return LeadingDragonBeeUpdated.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<LeadingDragonBeeUpdated> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LeadingDragonBeeUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLeadingDragonBeeUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LeadingDragonBeeUpdated object`); }

        return LeadingDragonBeeUpdated.fromSuiObjectData(res.data);
    }

}

/* ============================== MinBidLimitUpdated =============================== */

export function isMinBidLimitUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::MinBidLimitUpdated`; }

export interface MinBidLimitUpdatedFields { auctionStartEpoch: ToField<"u64">; priceToBeAQueen: ToField<"u64">; curEpoch: ToField<"u64"> }

export type MinBidLimitUpdatedReified = Reified<MinBidLimitUpdated, MinBidLimitUpdatedFields>;

export class MinBidLimitUpdated implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::MinBidLimitUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = MinBidLimitUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::MinBidLimitUpdated`; readonly $typeArgs: []; readonly $isPhantom = MinBidLimitUpdated.$isPhantom;

    readonly auctionStartEpoch: ToField<"u64">; readonly priceToBeAQueen: ToField<"u64">; readonly curEpoch: ToField<"u64">

    private constructor(typeArgs: [], fields: MinBidLimitUpdatedFields,) {
        this.$fullTypeName = composeSuiType(MinBidLimitUpdated.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::MinBidLimitUpdated`; this.$typeArgs = typeArgs;

        this.auctionStartEpoch = fields.auctionStartEpoch;; this.priceToBeAQueen = fields.priceToBeAQueen;; this.curEpoch = fields.curEpoch;
    }

    static reified(): MinBidLimitUpdatedReified { return { typeName: MinBidLimitUpdated.$typeName, fullTypeName: composeSuiType(MinBidLimitUpdated.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::MinBidLimitUpdated`, typeArgs: [] as [], isPhantom: MinBidLimitUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MinBidLimitUpdated.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => MinBidLimitUpdated.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => MinBidLimitUpdated.fromBcs(data,), bcs: MinBidLimitUpdated.bcs, fromJSONField: (field: any) => MinBidLimitUpdated.fromJSONField(field,), fromJSON: (json: Record<string, any>) => MinBidLimitUpdated.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => MinBidLimitUpdated.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => MinBidLimitUpdated.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => MinBidLimitUpdated.fetch(client, id,), new: (fields: MinBidLimitUpdatedFields,) => { return new MinBidLimitUpdated([], fields) }, kind: "StructClassReified", } }

    static get r() { return MinBidLimitUpdated.reified() }

    static phantom(): PhantomReified<ToTypeStr<MinBidLimitUpdated>> { return phantom(MinBidLimitUpdated.reified()); } static get p() { return MinBidLimitUpdated.phantom() }

    static get bcs() {
        return bcs.struct("MinBidLimitUpdated", {

            auction_start_epoch: bcs.u64(), price_to_be_a_queen: bcs.u64(), cur_epoch: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): MinBidLimitUpdated { return MinBidLimitUpdated.reified().new({ auctionStartEpoch: decodeFromFields("u64", fields.auction_start_epoch), priceToBeAQueen: decodeFromFields("u64", fields.price_to_be_a_queen), curEpoch: decodeFromFields("u64", fields.cur_epoch) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): MinBidLimitUpdated {
        if (!isMinBidLimitUpdated(item.type)) {
            throw new Error("not a MinBidLimitUpdated type");

        }

        return MinBidLimitUpdated.reified().new({ auctionStartEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_start_epoch), priceToBeAQueen: decodeFromFieldsWithTypes("u64", item.fields.price_to_be_a_queen), curEpoch: decodeFromFieldsWithTypes("u64", item.fields.cur_epoch) })
    }

    static fromBcs(data: Uint8Array): MinBidLimitUpdated { return MinBidLimitUpdated.fromFields(MinBidLimitUpdated.bcs.parse(data)) }

    toJSONField() {
        return {

            auctionStartEpoch: this.auctionStartEpoch.toString(), priceToBeAQueen: this.priceToBeAQueen.toString(), curEpoch: this.curEpoch.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): MinBidLimitUpdated { return MinBidLimitUpdated.reified().new({ auctionStartEpoch: decodeFromJSONField("u64", field.auctionStartEpoch), priceToBeAQueen: decodeFromJSONField("u64", field.priceToBeAQueen), curEpoch: decodeFromJSONField("u64", field.curEpoch) }) }

    static fromJSON(json: Record<string, any>): MinBidLimitUpdated {
        if (json.$typeName !== MinBidLimitUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return MinBidLimitUpdated.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): MinBidLimitUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMinBidLimitUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MinBidLimitUpdated object`); } return MinBidLimitUpdated.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): MinBidLimitUpdated {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMinBidLimitUpdated(data.bcs.type)) { throw new Error(`object at is not a MinBidLimitUpdated object`); }

            return MinBidLimitUpdated.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return MinBidLimitUpdated.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<MinBidLimitUpdated> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MinBidLimitUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMinBidLimitUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MinBidLimitUpdated object`); }

        return MinBidLimitUpdated.fromSuiObjectData(res.data);
    }

}

/* ============================== NewBeeAddedToCompetition =============================== */

export function isNewBeeAddedToCompetition(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::NewBeeAddedToCompetition`; }

export interface NewBeeAddedToCompetitionFields { trainerAddr: ToField<"address">; username: ToField<String>; version: ToField<"u64">; familyType: ToField<"u64">; bidAmt: ToField<"u64">; taxAmt: ToField<"u64">; auctionStartAt: ToField<"u64"> }

export type NewBeeAddedToCompetitionReified = Reified<NewBeeAddedToCompetition, NewBeeAddedToCompetitionFields>;

export class NewBeeAddedToCompetition implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::NewBeeAddedToCompetition`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = NewBeeAddedToCompetition.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::NewBeeAddedToCompetition`; readonly $typeArgs: []; readonly $isPhantom = NewBeeAddedToCompetition.$isPhantom;

    readonly trainerAddr: ToField<"address">; readonly username: ToField<String>; readonly version: ToField<"u64">; readonly familyType: ToField<"u64">; readonly bidAmt: ToField<"u64">; readonly taxAmt: ToField<"u64">; readonly auctionStartAt: ToField<"u64">

    private constructor(typeArgs: [], fields: NewBeeAddedToCompetitionFields,) {
        this.$fullTypeName = composeSuiType(NewBeeAddedToCompetition.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::NewBeeAddedToCompetition`; this.$typeArgs = typeArgs;

        this.trainerAddr = fields.trainerAddr;; this.username = fields.username;; this.version = fields.version;; this.familyType = fields.familyType;; this.bidAmt = fields.bidAmt;; this.taxAmt = fields.taxAmt;; this.auctionStartAt = fields.auctionStartAt;
    }

    static reified(): NewBeeAddedToCompetitionReified { return { typeName: NewBeeAddedToCompetition.$typeName, fullTypeName: composeSuiType(NewBeeAddedToCompetition.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::NewBeeAddedToCompetition`, typeArgs: [] as [], isPhantom: NewBeeAddedToCompetition.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NewBeeAddedToCompetition.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => NewBeeAddedToCompetition.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => NewBeeAddedToCompetition.fromBcs(data,), bcs: NewBeeAddedToCompetition.bcs, fromJSONField: (field: any) => NewBeeAddedToCompetition.fromJSONField(field,), fromJSON: (json: Record<string, any>) => NewBeeAddedToCompetition.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => NewBeeAddedToCompetition.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => NewBeeAddedToCompetition.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => NewBeeAddedToCompetition.fetch(client, id,), new: (fields: NewBeeAddedToCompetitionFields,) => { return new NewBeeAddedToCompetition([], fields) }, kind: "StructClassReified", } }

    static get r() { return NewBeeAddedToCompetition.reified() }

    static phantom(): PhantomReified<ToTypeStr<NewBeeAddedToCompetition>> { return phantom(NewBeeAddedToCompetition.reified()); } static get p() { return NewBeeAddedToCompetition.phantom() }

    static get bcs() {
        return bcs.struct("NewBeeAddedToCompetition", {

            trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, version: bcs.u64(), family_type: bcs.u64(), bid_amt: bcs.u64(), tax_amt: bcs.u64(), auction_start_at: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): NewBeeAddedToCompetition { return NewBeeAddedToCompetition.reified().new({ trainerAddr: decodeFromFields("address", fields.trainer_addr), username: decodeFromFields(String.reified(), fields.username), version: decodeFromFields("u64", fields.version), familyType: decodeFromFields("u64", fields.family_type), bidAmt: decodeFromFields("u64", fields.bid_amt), taxAmt: decodeFromFields("u64", fields.tax_amt), auctionStartAt: decodeFromFields("u64", fields.auction_start_at) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewBeeAddedToCompetition {
        if (!isNewBeeAddedToCompetition(item.type)) {
            throw new Error("not a NewBeeAddedToCompetition type");

        }

        return NewBeeAddedToCompetition.reified().new({ trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), version: decodeFromFieldsWithTypes("u64", item.fields.version), familyType: decodeFromFieldsWithTypes("u64", item.fields.family_type), bidAmt: decodeFromFieldsWithTypes("u64", item.fields.bid_amt), taxAmt: decodeFromFieldsWithTypes("u64", item.fields.tax_amt), auctionStartAt: decodeFromFieldsWithTypes("u64", item.fields.auction_start_at) })
    }

    static fromBcs(data: Uint8Array): NewBeeAddedToCompetition { return NewBeeAddedToCompetition.fromFields(NewBeeAddedToCompetition.bcs.parse(data)) }

    toJSONField() {
        return {

            trainerAddr: this.trainerAddr, username: this.username, version: this.version.toString(), familyType: this.familyType.toString(), bidAmt: this.bidAmt.toString(), taxAmt: this.taxAmt.toString(), auctionStartAt: this.auctionStartAt.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): NewBeeAddedToCompetition { return NewBeeAddedToCompetition.reified().new({ trainerAddr: decodeFromJSONField("address", field.trainerAddr), username: decodeFromJSONField(String.reified(), field.username), version: decodeFromJSONField("u64", field.version), familyType: decodeFromJSONField("u64", field.familyType), bidAmt: decodeFromJSONField("u64", field.bidAmt), taxAmt: decodeFromJSONField("u64", field.taxAmt), auctionStartAt: decodeFromJSONField("u64", field.auctionStartAt) }) }

    static fromJSON(json: Record<string, any>): NewBeeAddedToCompetition {
        if (json.$typeName !== NewBeeAddedToCompetition.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return NewBeeAddedToCompetition.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): NewBeeAddedToCompetition { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewBeeAddedToCompetition(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewBeeAddedToCompetition object`); } return NewBeeAddedToCompetition.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): NewBeeAddedToCompetition {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewBeeAddedToCompetition(data.bcs.type)) { throw new Error(`object at is not a NewBeeAddedToCompetition object`); }

            return NewBeeAddedToCompetition.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return NewBeeAddedToCompetition.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<NewBeeAddedToCompetition> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewBeeAddedToCompetition object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewBeeAddedToCompetition(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewBeeAddedToCompetition object`); }

        return NewBeeAddedToCompetition.fromSuiObjectData(res.data);
    }

}

/* ============================== ParticipatingBees =============================== */

export function isParticipatingBees(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::ParticipatingBees`; }

export interface ParticipatingBeesFields { userParticipation: ToField<LinkedTable<"address", ToPhantom<ParticipationPosition>>> }

export type ParticipatingBeesReified = Reified<ParticipatingBees, ParticipatingBeesFields>;

export class ParticipatingBees implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::ParticipatingBees`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = ParticipatingBees.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::ParticipatingBees`; readonly $typeArgs: []; readonly $isPhantom = ParticipatingBees.$isPhantom;

    readonly userParticipation: ToField<LinkedTable<"address", ToPhantom<ParticipationPosition>>>

    private constructor(typeArgs: [], fields: ParticipatingBeesFields,) {
        this.$fullTypeName = composeSuiType(ParticipatingBees.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::ParticipatingBees`; this.$typeArgs = typeArgs;

        this.userParticipation = fields.userParticipation;
    }

    static reified(): ParticipatingBeesReified { return { typeName: ParticipatingBees.$typeName, fullTypeName: composeSuiType(ParticipatingBees.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::ParticipatingBees`, typeArgs: [] as [], isPhantom: ParticipatingBees.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ParticipatingBees.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => ParticipatingBees.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => ParticipatingBees.fromBcs(data,), bcs: ParticipatingBees.bcs, fromJSONField: (field: any) => ParticipatingBees.fromJSONField(field,), fromJSON: (json: Record<string, any>) => ParticipatingBees.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => ParticipatingBees.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => ParticipatingBees.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => ParticipatingBees.fetch(client, id,), new: (fields: ParticipatingBeesFields,) => { return new ParticipatingBees([], fields) }, kind: "StructClassReified", } }

    static get r() { return ParticipatingBees.reified() }

    static phantom(): PhantomReified<ToTypeStr<ParticipatingBees>> { return phantom(ParticipatingBees.reified()); } static get p() { return ParticipatingBees.phantom() }

    static get bcs() {
        return bcs.struct("ParticipatingBees", {

            user_participation: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

        })
    };

    static fromFields(fields: Record<string, any>): ParticipatingBees { return ParticipatingBees.reified().new({ userParticipation: decodeFromFields(LinkedTable.reified("address", reified.phantom(ParticipationPosition.reified())), fields.user_participation) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): ParticipatingBees {
        if (!isParticipatingBees(item.type)) {
            throw new Error("not a ParticipatingBees type");

        }

        return ParticipatingBees.reified().new({ userParticipation: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(ParticipationPosition.reified())), item.fields.user_participation) })
    }

    static fromBcs(data: Uint8Array): ParticipatingBees { return ParticipatingBees.fromFields(ParticipatingBees.bcs.parse(data)) }

    toJSONField() {
        return {

            userParticipation: this.userParticipation.toJSONField(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): ParticipatingBees { return ParticipatingBees.reified().new({ userParticipation: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(ParticipationPosition.reified())), field.userParticipation) }) }

    static fromJSON(json: Record<string, any>): ParticipatingBees {
        if (json.$typeName !== ParticipatingBees.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return ParticipatingBees.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): ParticipatingBees { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isParticipatingBees(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ParticipatingBees object`); } return ParticipatingBees.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): ParticipatingBees {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isParticipatingBees(data.bcs.type)) { throw new Error(`object at is not a ParticipatingBees object`); }

            return ParticipatingBees.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return ParticipatingBees.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ParticipatingBees> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ParticipatingBees object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isParticipatingBees(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ParticipatingBees object`); }

        return ParticipatingBees.fromSuiObjectData(res.data);
    }

}

/* ============================== ParticipationPosition =============================== */

export function isParticipationPosition(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::ParticipationPosition`; }

export interface ParticipationPositionFields { familyType: ToField<"u64">; mysticalBee: ToField<MysticalBee>; beeVersion: ToField<"u64">; auctionStartAt: ToField<"u64">; username: ToField<String>; trainerAddr: ToField<"address">; suiBidded: ToField<"u64">; tax: ToField<"u64">; flag: ToField<"bool"> }

export type ParticipationPositionReified = Reified<ParticipationPosition, ParticipationPositionFields>;

export class ParticipationPosition implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::ParticipationPosition`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = ParticipationPosition.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::ParticipationPosition`; readonly $typeArgs: []; readonly $isPhantom = ParticipationPosition.$isPhantom;

    readonly familyType: ToField<"u64">; readonly mysticalBee: ToField<MysticalBee>; readonly beeVersion: ToField<"u64">; readonly auctionStartAt: ToField<"u64">; readonly username: ToField<String>; readonly trainerAddr: ToField<"address">; readonly suiBidded: ToField<"u64">; readonly tax: ToField<"u64">; readonly flag: ToField<"bool">

    private constructor(typeArgs: [], fields: ParticipationPositionFields,) {
        this.$fullTypeName = composeSuiType(ParticipationPosition.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::ParticipationPosition`; this.$typeArgs = typeArgs;

        this.familyType = fields.familyType;; this.mysticalBee = fields.mysticalBee;; this.beeVersion = fields.beeVersion;; this.auctionStartAt = fields.auctionStartAt;; this.username = fields.username;; this.trainerAddr = fields.trainerAddr;; this.suiBidded = fields.suiBidded;; this.tax = fields.tax;; this.flag = fields.flag;
    }

    static reified(): ParticipationPositionReified { return { typeName: ParticipationPosition.$typeName, fullTypeName: composeSuiType(ParticipationPosition.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::ParticipationPosition`, typeArgs: [] as [], isPhantom: ParticipationPosition.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ParticipationPosition.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => ParticipationPosition.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => ParticipationPosition.fromBcs(data,), bcs: ParticipationPosition.bcs, fromJSONField: (field: any) => ParticipationPosition.fromJSONField(field,), fromJSON: (json: Record<string, any>) => ParticipationPosition.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => ParticipationPosition.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => ParticipationPosition.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => ParticipationPosition.fetch(client, id,), new: (fields: ParticipationPositionFields,) => { return new ParticipationPosition([], fields) }, kind: "StructClassReified", } }

    static get r() { return ParticipationPosition.reified() }

    static phantom(): PhantomReified<ToTypeStr<ParticipationPosition>> { return phantom(ParticipationPosition.reified()); } static get p() { return ParticipationPosition.phantom() }

    static get bcs() {
        return bcs.struct("ParticipationPosition", {

            family_type: bcs.u64(), mystical_bee: MysticalBee.bcs, bee_version: bcs.u64(), auction_start_at: bcs.u64(), username: String.bcs, trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), sui_bidded: bcs.u64(), tax: bcs.u64(), flag: bcs.bool()

        })
    };

    static fromFields(fields: Record<string, any>): ParticipationPosition { return ParticipationPosition.reified().new({ familyType: decodeFromFields("u64", fields.family_type), mysticalBee: decodeFromFields(MysticalBee.reified(), fields.mystical_bee), beeVersion: decodeFromFields("u64", fields.bee_version), auctionStartAt: decodeFromFields("u64", fields.auction_start_at), username: decodeFromFields(String.reified(), fields.username), trainerAddr: decodeFromFields("address", fields.trainer_addr), suiBidded: decodeFromFields("u64", fields.sui_bidded), tax: decodeFromFields("u64", fields.tax), flag: decodeFromFields("bool", fields.flag) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): ParticipationPosition {
        if (!isParticipationPosition(item.type)) {
            throw new Error("not a ParticipationPosition type");

        }

        return ParticipationPosition.reified().new({ familyType: decodeFromFieldsWithTypes("u64", item.fields.family_type), mysticalBee: decodeFromFieldsWithTypes(MysticalBee.reified(), item.fields.mystical_bee), beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), auctionStartAt: decodeFromFieldsWithTypes("u64", item.fields.auction_start_at), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), suiBidded: decodeFromFieldsWithTypes("u64", item.fields.sui_bidded), tax: decodeFromFieldsWithTypes("u64", item.fields.tax), flag: decodeFromFieldsWithTypes("bool", item.fields.flag) })
    }

    static fromBcs(data: Uint8Array): ParticipationPosition { return ParticipationPosition.fromFields(ParticipationPosition.bcs.parse(data)) }

    toJSONField() {
        return {

            familyType: this.familyType.toString(), mysticalBee: this.mysticalBee.toJSONField(), beeVersion: this.beeVersion.toString(), auctionStartAt: this.auctionStartAt.toString(), username: this.username, trainerAddr: this.trainerAddr, suiBidded: this.suiBidded.toString(), tax: this.tax.toString(), flag: this.flag,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): ParticipationPosition { return ParticipationPosition.reified().new({ familyType: decodeFromJSONField("u64", field.familyType), mysticalBee: decodeFromJSONField(MysticalBee.reified(), field.mysticalBee), beeVersion: decodeFromJSONField("u64", field.beeVersion), auctionStartAt: decodeFromJSONField("u64", field.auctionStartAt), username: decodeFromJSONField(String.reified(), field.username), trainerAddr: decodeFromJSONField("address", field.trainerAddr), suiBidded: decodeFromJSONField("u64", field.suiBidded), tax: decodeFromJSONField("u64", field.tax), flag: decodeFromJSONField("bool", field.flag) }) }

    static fromJSON(json: Record<string, any>): ParticipationPosition {
        if (json.$typeName !== ParticipationPosition.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return ParticipationPosition.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): ParticipationPosition { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isParticipationPosition(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ParticipationPosition object`); } return ParticipationPosition.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): ParticipationPosition {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isParticipationPosition(data.bcs.type)) { throw new Error(`object at is not a ParticipationPosition object`); }

            return ParticipationPosition.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return ParticipationPosition.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<ParticipationPosition> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ParticipationPosition object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isParticipationPosition(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ParticipationPosition object`); }

        return ParticipationPosition.fromSuiObjectData(res.data);
    }

}

/* ============================== QueenClaimedByItsOwner =============================== */

export function isQueenClaimedByItsOwner(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::QueenClaimedByItsOwner`; }

export interface QueenClaimedByItsOwnerFields { trainerAddr: ToField<"address">; version: ToField<"u64">; suiBidded: ToField<"u64">; auctionEpoch: ToField<"u64"> }

export type QueenClaimedByItsOwnerReified = Reified<QueenClaimedByItsOwner, QueenClaimedByItsOwnerFields>;

export class QueenClaimedByItsOwner implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::QueenClaimedByItsOwner`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = QueenClaimedByItsOwner.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::QueenClaimedByItsOwner`; readonly $typeArgs: []; readonly $isPhantom = QueenClaimedByItsOwner.$isPhantom;

    readonly trainerAddr: ToField<"address">; readonly version: ToField<"u64">; readonly suiBidded: ToField<"u64">; readonly auctionEpoch: ToField<"u64">

    private constructor(typeArgs: [], fields: QueenClaimedByItsOwnerFields,) {
        this.$fullTypeName = composeSuiType(QueenClaimedByItsOwner.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::QueenClaimedByItsOwner`; this.$typeArgs = typeArgs;

        this.trainerAddr = fields.trainerAddr;; this.version = fields.version;; this.suiBidded = fields.suiBidded;; this.auctionEpoch = fields.auctionEpoch;
    }

    static reified(): QueenClaimedByItsOwnerReified { return { typeName: QueenClaimedByItsOwner.$typeName, fullTypeName: composeSuiType(QueenClaimedByItsOwner.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::QueenClaimedByItsOwner`, typeArgs: [] as [], isPhantom: QueenClaimedByItsOwner.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => QueenClaimedByItsOwner.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => QueenClaimedByItsOwner.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => QueenClaimedByItsOwner.fromBcs(data,), bcs: QueenClaimedByItsOwner.bcs, fromJSONField: (field: any) => QueenClaimedByItsOwner.fromJSONField(field,), fromJSON: (json: Record<string, any>) => QueenClaimedByItsOwner.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => QueenClaimedByItsOwner.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => QueenClaimedByItsOwner.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => QueenClaimedByItsOwner.fetch(client, id,), new: (fields: QueenClaimedByItsOwnerFields,) => { return new QueenClaimedByItsOwner([], fields) }, kind: "StructClassReified", } }

    static get r() { return QueenClaimedByItsOwner.reified() }

    static phantom(): PhantomReified<ToTypeStr<QueenClaimedByItsOwner>> { return phantom(QueenClaimedByItsOwner.reified()); } static get p() { return QueenClaimedByItsOwner.phantom() }

    static get bcs() {
        return bcs.struct("QueenClaimedByItsOwner", {

            trainer_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64(), sui_bidded: bcs.u64(), auction_epoch: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): QueenClaimedByItsOwner { return QueenClaimedByItsOwner.reified().new({ trainerAddr: decodeFromFields("address", fields.trainer_addr), version: decodeFromFields("u64", fields.version), suiBidded: decodeFromFields("u64", fields.sui_bidded), auctionEpoch: decodeFromFields("u64", fields.auction_epoch) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): QueenClaimedByItsOwner {
        if (!isQueenClaimedByItsOwner(item.type)) {
            throw new Error("not a QueenClaimedByItsOwner type");

        }

        return QueenClaimedByItsOwner.reified().new({ trainerAddr: decodeFromFieldsWithTypes("address", item.fields.trainer_addr), version: decodeFromFieldsWithTypes("u64", item.fields.version), suiBidded: decodeFromFieldsWithTypes("u64", item.fields.sui_bidded), auctionEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_epoch) })
    }

    static fromBcs(data: Uint8Array): QueenClaimedByItsOwner { return QueenClaimedByItsOwner.fromFields(QueenClaimedByItsOwner.bcs.parse(data)) }

    toJSONField() {
        return {

            trainerAddr: this.trainerAddr, version: this.version.toString(), suiBidded: this.suiBidded.toString(), auctionEpoch: this.auctionEpoch.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): QueenClaimedByItsOwner { return QueenClaimedByItsOwner.reified().new({ trainerAddr: decodeFromJSONField("address", field.trainerAddr), version: decodeFromJSONField("u64", field.version), suiBidded: decodeFromJSONField("u64", field.suiBidded), auctionEpoch: decodeFromJSONField("u64", field.auctionEpoch) }) }

    static fromJSON(json: Record<string, any>): QueenClaimedByItsOwner {
        if (json.$typeName !== QueenClaimedByItsOwner.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return QueenClaimedByItsOwner.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): QueenClaimedByItsOwner { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isQueenClaimedByItsOwner(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a QueenClaimedByItsOwner object`); } return QueenClaimedByItsOwner.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): QueenClaimedByItsOwner {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQueenClaimedByItsOwner(data.bcs.type)) { throw new Error(`object at is not a QueenClaimedByItsOwner object`); }

            return QueenClaimedByItsOwner.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return QueenClaimedByItsOwner.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<QueenClaimedByItsOwner> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching QueenClaimedByItsOwner object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isQueenClaimedByItsOwner(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a QueenClaimedByItsOwner object`); }

        return QueenClaimedByItsOwner.fromSuiObjectData(res.data);
    }

}

/* ============================== QueenCompetitionOver =============================== */

export function isQueenCompetitionOver(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::QueenCompetitionOver`; }

export interface QueenCompetitionOverFields { startedAtEpoch: ToField<"u64">; nextEventFrom: ToField<"u64">; hiveBurntAmt: ToField<"u64">; totalSuiBidded: ToField<"u64">; energyFromQueens: ToField<"u64">; communityEnergy: ToField<"u64">; becomingQueenExpensiveBy: ToField<"u64">; priceToBeAQueen: ToField<"u64"> }

export type QueenCompetitionOverReified = Reified<QueenCompetitionOver, QueenCompetitionOverFields>;

export class QueenCompetitionOver implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::QueenCompetitionOver`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = QueenCompetitionOver.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::QueenCompetitionOver`; readonly $typeArgs: []; readonly $isPhantom = QueenCompetitionOver.$isPhantom;

    readonly startedAtEpoch: ToField<"u64">; readonly nextEventFrom: ToField<"u64">; readonly hiveBurntAmt: ToField<"u64">; readonly totalSuiBidded: ToField<"u64">; readonly energyFromQueens: ToField<"u64">; readonly communityEnergy: ToField<"u64">; readonly becomingQueenExpensiveBy: ToField<"u64">; readonly priceToBeAQueen: ToField<"u64">

    private constructor(typeArgs: [], fields: QueenCompetitionOverFields,) {
        this.$fullTypeName = composeSuiType(QueenCompetitionOver.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::QueenCompetitionOver`; this.$typeArgs = typeArgs;

        this.startedAtEpoch = fields.startedAtEpoch;; this.nextEventFrom = fields.nextEventFrom;; this.hiveBurntAmt = fields.hiveBurntAmt;; this.totalSuiBidded = fields.totalSuiBidded;; this.energyFromQueens = fields.energyFromQueens;; this.communityEnergy = fields.communityEnergy;; this.becomingQueenExpensiveBy = fields.becomingQueenExpensiveBy;; this.priceToBeAQueen = fields.priceToBeAQueen;
    }

    static reified(): QueenCompetitionOverReified { return { typeName: QueenCompetitionOver.$typeName, fullTypeName: composeSuiType(QueenCompetitionOver.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::QueenCompetitionOver`, typeArgs: [] as [], isPhantom: QueenCompetitionOver.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => QueenCompetitionOver.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => QueenCompetitionOver.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => QueenCompetitionOver.fromBcs(data,), bcs: QueenCompetitionOver.bcs, fromJSONField: (field: any) => QueenCompetitionOver.fromJSONField(field,), fromJSON: (json: Record<string, any>) => QueenCompetitionOver.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => QueenCompetitionOver.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => QueenCompetitionOver.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => QueenCompetitionOver.fetch(client, id,), new: (fields: QueenCompetitionOverFields,) => { return new QueenCompetitionOver([], fields) }, kind: "StructClassReified", } }

    static get r() { return QueenCompetitionOver.reified() }

    static phantom(): PhantomReified<ToTypeStr<QueenCompetitionOver>> { return phantom(QueenCompetitionOver.reified()); } static get p() { return QueenCompetitionOver.phantom() }

    static get bcs() {
        return bcs.struct("QueenCompetitionOver", {

            started_at_epoch: bcs.u64(), next_event_from: bcs.u64(), hive_burnt_amt: bcs.u64(), total_sui_bidded: bcs.u64(), energy_from_queens: bcs.u64(), community_energy: bcs.u64(), becoming_queen_expensive_by: bcs.u64(), price_to_be_a_queen: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): QueenCompetitionOver { return QueenCompetitionOver.reified().new({ startedAtEpoch: decodeFromFields("u64", fields.started_at_epoch), nextEventFrom: decodeFromFields("u64", fields.next_event_from), hiveBurntAmt: decodeFromFields("u64", fields.hive_burnt_amt), totalSuiBidded: decodeFromFields("u64", fields.total_sui_bidded), energyFromQueens: decodeFromFields("u64", fields.energy_from_queens), communityEnergy: decodeFromFields("u64", fields.community_energy), becomingQueenExpensiveBy: decodeFromFields("u64", fields.becoming_queen_expensive_by), priceToBeAQueen: decodeFromFields("u64", fields.price_to_be_a_queen) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): QueenCompetitionOver {
        if (!isQueenCompetitionOver(item.type)) {
            throw new Error("not a QueenCompetitionOver type");

        }

        return QueenCompetitionOver.reified().new({ startedAtEpoch: decodeFromFieldsWithTypes("u64", item.fields.started_at_epoch), nextEventFrom: decodeFromFieldsWithTypes("u64", item.fields.next_event_from), hiveBurntAmt: decodeFromFieldsWithTypes("u64", item.fields.hive_burnt_amt), totalSuiBidded: decodeFromFieldsWithTypes("u64", item.fields.total_sui_bidded), energyFromQueens: decodeFromFieldsWithTypes("u64", item.fields.energy_from_queens), communityEnergy: decodeFromFieldsWithTypes("u64", item.fields.community_energy), becomingQueenExpensiveBy: decodeFromFieldsWithTypes("u64", item.fields.becoming_queen_expensive_by), priceToBeAQueen: decodeFromFieldsWithTypes("u64", item.fields.price_to_be_a_queen) })
    }

    static fromBcs(data: Uint8Array): QueenCompetitionOver { return QueenCompetitionOver.fromFields(QueenCompetitionOver.bcs.parse(data)) }

    toJSONField() {
        return {

            startedAtEpoch: this.startedAtEpoch.toString(), nextEventFrom: this.nextEventFrom.toString(), hiveBurntAmt: this.hiveBurntAmt.toString(), totalSuiBidded: this.totalSuiBidded.toString(), energyFromQueens: this.energyFromQueens.toString(), communityEnergy: this.communityEnergy.toString(), becomingQueenExpensiveBy: this.becomingQueenExpensiveBy.toString(), priceToBeAQueen: this.priceToBeAQueen.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): QueenCompetitionOver { return QueenCompetitionOver.reified().new({ startedAtEpoch: decodeFromJSONField("u64", field.startedAtEpoch), nextEventFrom: decodeFromJSONField("u64", field.nextEventFrom), hiveBurntAmt: decodeFromJSONField("u64", field.hiveBurntAmt), totalSuiBidded: decodeFromJSONField("u64", field.totalSuiBidded), energyFromQueens: decodeFromJSONField("u64", field.energyFromQueens), communityEnergy: decodeFromJSONField("u64", field.communityEnergy), becomingQueenExpensiveBy: decodeFromJSONField("u64", field.becomingQueenExpensiveBy), priceToBeAQueen: decodeFromJSONField("u64", field.priceToBeAQueen) }) }

    static fromJSON(json: Record<string, any>): QueenCompetitionOver {
        if (json.$typeName !== QueenCompetitionOver.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return QueenCompetitionOver.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): QueenCompetitionOver { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isQueenCompetitionOver(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a QueenCompetitionOver object`); } return QueenCompetitionOver.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): QueenCompetitionOver {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQueenCompetitionOver(data.bcs.type)) { throw new Error(`object at is not a QueenCompetitionOver object`); }

            return QueenCompetitionOver.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return QueenCompetitionOver.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<QueenCompetitionOver> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching QueenCompetitionOver object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isQueenCompetitionOver(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a QueenCompetitionOver object`); }

        return QueenCompetitionOver.fromSuiObjectData(res.data);
    }

}

/* ============================== QueenCustody =============================== */

export function isQueenCustody(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::QueenCustody`; }

export interface QueenCustodyFields { familyType: ToField<"u64">; mysticalBee: ToField<MysticalBee>; suiBidded: ToField<"u64">; auctionEpoch: ToField<"u64"> }

export type QueenCustodyReified = Reified<QueenCustody, QueenCustodyFields>;

export class QueenCustody implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::QueenCustody`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = QueenCustody.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::QueenCustody`; readonly $typeArgs: []; readonly $isPhantom = QueenCustody.$isPhantom;

    readonly familyType: ToField<"u64">; readonly mysticalBee: ToField<MysticalBee>; readonly suiBidded: ToField<"u64">; readonly auctionEpoch: ToField<"u64">

    private constructor(typeArgs: [], fields: QueenCustodyFields,) {
        this.$fullTypeName = composeSuiType(QueenCustody.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::QueenCustody`; this.$typeArgs = typeArgs;

        this.familyType = fields.familyType;; this.mysticalBee = fields.mysticalBee;; this.suiBidded = fields.suiBidded;; this.auctionEpoch = fields.auctionEpoch;
    }

    static reified(): QueenCustodyReified { return { typeName: QueenCustody.$typeName, fullTypeName: composeSuiType(QueenCustody.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::QueenCustody`, typeArgs: [] as [], isPhantom: QueenCustody.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => QueenCustody.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => QueenCustody.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => QueenCustody.fromBcs(data,), bcs: QueenCustody.bcs, fromJSONField: (field: any) => QueenCustody.fromJSONField(field,), fromJSON: (json: Record<string, any>) => QueenCustody.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => QueenCustody.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => QueenCustody.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => QueenCustody.fetch(client, id,), new: (fields: QueenCustodyFields,) => { return new QueenCustody([], fields) }, kind: "StructClassReified", } }

    static get r() { return QueenCustody.reified() }

    static phantom(): PhantomReified<ToTypeStr<QueenCustody>> { return phantom(QueenCustody.reified()); } static get p() { return QueenCustody.phantom() }

    static get bcs() {
        return bcs.struct("QueenCustody", {

            family_type: bcs.u64(), mystical_bee: MysticalBee.bcs, sui_bidded: bcs.u64(), auction_epoch: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): QueenCustody { return QueenCustody.reified().new({ familyType: decodeFromFields("u64", fields.family_type), mysticalBee: decodeFromFields(MysticalBee.reified(), fields.mystical_bee), suiBidded: decodeFromFields("u64", fields.sui_bidded), auctionEpoch: decodeFromFields("u64", fields.auction_epoch) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): QueenCustody {
        if (!isQueenCustody(item.type)) {
            throw new Error("not a QueenCustody type");

        }

        return QueenCustody.reified().new({ familyType: decodeFromFieldsWithTypes("u64", item.fields.family_type), mysticalBee: decodeFromFieldsWithTypes(MysticalBee.reified(), item.fields.mystical_bee), suiBidded: decodeFromFieldsWithTypes("u64", item.fields.sui_bidded), auctionEpoch: decodeFromFieldsWithTypes("u64", item.fields.auction_epoch) })
    }

    static fromBcs(data: Uint8Array): QueenCustody { return QueenCustody.fromFields(QueenCustody.bcs.parse(data)) }

    toJSONField() {
        return {

            familyType: this.familyType.toString(), mysticalBee: this.mysticalBee.toJSONField(), suiBidded: this.suiBidded.toString(), auctionEpoch: this.auctionEpoch.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): QueenCustody { return QueenCustody.reified().new({ familyType: decodeFromJSONField("u64", field.familyType), mysticalBee: decodeFromJSONField(MysticalBee.reified(), field.mysticalBee), suiBidded: decodeFromJSONField("u64", field.suiBidded), auctionEpoch: decodeFromJSONField("u64", field.auctionEpoch) }) }

    static fromJSON(json: Record<string, any>): QueenCustody {
        if (json.$typeName !== QueenCustody.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return QueenCustody.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): QueenCustody { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isQueenCustody(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a QueenCustody object`); } return QueenCustody.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): QueenCustody {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQueenCustody(data.bcs.type)) { throw new Error(`object at is not a QueenCustody object`); }

            return QueenCustody.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return QueenCustody.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<QueenCustody> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching QueenCustody object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isQueenCustody(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a QueenCustody object`); }

        return QueenCustody.fromSuiObjectData(res.data);
    }

}

/* ============================== QueenMaker =============================== */

export function isQueenMaker(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::QueenMaker`; }

export interface QueenMakerFields { id: ToField<UID>; hiveKraftCap: ToField<TreasuryCap<ToPhantom<HIVE>>>; hiveToBurn: ToField<Balance<ToPhantom<HIVE>>>; config: ToField<AuctionConfig>; areLive: ToField<"bool">; queenCustody: ToField<LinkedTable<"address", ToPhantom<QueenCustody>>>; currentAuction: ToField<AuctionInfo>; leadingBees: ToField<LinkedTable<"u64", ToPhantom<LeadingDragonBee>>>; minimumLeadingBidAmt: ToField<"u64">; participatingBees: ToField<ParticipatingBees>; bidPools: ToField<LinkedTable<"u64", ToPhantom<BidPool>>>; energyYield: ToField<Balance<ToPhantom<SUI>>>; moduleVersion: ToField<"u64"> }

export type QueenMakerReified = Reified<QueenMaker, QueenMakerFields>;

export class QueenMaker implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::QueenMaker`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = QueenMaker.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::QueenMaker`; readonly $typeArgs: []; readonly $isPhantom = QueenMaker.$isPhantom;

    readonly id: ToField<UID>; readonly hiveKraftCap: ToField<TreasuryCap<ToPhantom<HIVE>>>; readonly hiveToBurn: ToField<Balance<ToPhantom<HIVE>>>; readonly config: ToField<AuctionConfig>; readonly areLive: ToField<"bool">; readonly queenCustody: ToField<LinkedTable<"address", ToPhantom<QueenCustody>>>; readonly currentAuction: ToField<AuctionInfo>; readonly leadingBees: ToField<LinkedTable<"u64", ToPhantom<LeadingDragonBee>>>; readonly minimumLeadingBidAmt: ToField<"u64">; readonly participatingBees: ToField<ParticipatingBees>; readonly bidPools: ToField<LinkedTable<"u64", ToPhantom<BidPool>>>; readonly energyYield: ToField<Balance<ToPhantom<SUI>>>; readonly moduleVersion: ToField<"u64">

    private constructor(typeArgs: [], fields: QueenMakerFields,) {
        this.$fullTypeName = composeSuiType(QueenMaker.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::QueenMaker`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.hiveKraftCap = fields.hiveKraftCap;; this.hiveToBurn = fields.hiveToBurn;; this.config = fields.config;; this.areLive = fields.areLive;; this.queenCustody = fields.queenCustody;; this.currentAuction = fields.currentAuction;; this.leadingBees = fields.leadingBees;; this.minimumLeadingBidAmt = fields.minimumLeadingBidAmt;; this.participatingBees = fields.participatingBees;; this.bidPools = fields.bidPools;; this.energyYield = fields.energyYield;; this.moduleVersion = fields.moduleVersion;
    }

    static reified(): QueenMakerReified { return { typeName: QueenMaker.$typeName, fullTypeName: composeSuiType(QueenMaker.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::QueenMaker`, typeArgs: [] as [], isPhantom: QueenMaker.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => QueenMaker.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => QueenMaker.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => QueenMaker.fromBcs(data,), bcs: QueenMaker.bcs, fromJSONField: (field: any) => QueenMaker.fromJSONField(field,), fromJSON: (json: Record<string, any>) => QueenMaker.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => QueenMaker.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => QueenMaker.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => QueenMaker.fetch(client, id,), new: (fields: QueenMakerFields,) => { return new QueenMaker([], fields) }, kind: "StructClassReified", } }

    static get r() { return QueenMaker.reified() }

    static phantom(): PhantomReified<ToTypeStr<QueenMaker>> { return phantom(QueenMaker.reified()); } static get p() { return QueenMaker.phantom() }

    static get bcs() {
        return bcs.struct("QueenMaker", {

            id: UID.bcs, hive_kraft_cap: TreasuryCap.bcs, hive_to_burn: Balance.bcs, config: AuctionConfig.bcs, are_live: bcs.bool(), queen_custody: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), current_auction: AuctionInfo.bcs, leading_bees: LinkedTable.bcs(bcs.u64()), minimum_leading_bid_amt: bcs.u64(), participating_bees: ParticipatingBees.bcs, bid_pools: LinkedTable.bcs(bcs.u64()), energy_yield: Balance.bcs, module_version: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): QueenMaker { return QueenMaker.reified().new({ id: decodeFromFields(UID.reified(), fields.id), hiveKraftCap: decodeFromFields(TreasuryCap.reified(reified.phantom(HIVE.reified())), fields.hive_kraft_cap), hiveToBurn: decodeFromFields(Balance.reified(reified.phantom(HIVE.reified())), fields.hive_to_burn), config: decodeFromFields(AuctionConfig.reified(), fields.config), areLive: decodeFromFields("bool", fields.are_live), queenCustody: decodeFromFields(LinkedTable.reified("address", reified.phantom(QueenCustody.reified())), fields.queen_custody), currentAuction: decodeFromFields(AuctionInfo.reified(), fields.current_auction), leadingBees: decodeFromFields(LinkedTable.reified("u64", reified.phantom(LeadingDragonBee.reified())), fields.leading_bees), minimumLeadingBidAmt: decodeFromFields("u64", fields.minimum_leading_bid_amt), participatingBees: decodeFromFields(ParticipatingBees.reified(), fields.participating_bees), bidPools: decodeFromFields(LinkedTable.reified("u64", reified.phantom(BidPool.reified())), fields.bid_pools), energyYield: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.energy_yield), moduleVersion: decodeFromFields("u64", fields.module_version) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): QueenMaker {
        if (!isQueenMaker(item.type)) {
            throw new Error("not a QueenMaker type");

        }

        return QueenMaker.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), hiveKraftCap: decodeFromFieldsWithTypes(TreasuryCap.reified(reified.phantom(HIVE.reified())), item.fields.hive_kraft_cap), hiveToBurn: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(HIVE.reified())), item.fields.hive_to_burn), config: decodeFromFieldsWithTypes(AuctionConfig.reified(), item.fields.config), areLive: decodeFromFieldsWithTypes("bool", item.fields.are_live), queenCustody: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(QueenCustody.reified())), item.fields.queen_custody), currentAuction: decodeFromFieldsWithTypes(AuctionInfo.reified(), item.fields.current_auction), leadingBees: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(LeadingDragonBee.reified())), item.fields.leading_bees), minimumLeadingBidAmt: decodeFromFieldsWithTypes("u64", item.fields.minimum_leading_bid_amt), participatingBees: decodeFromFieldsWithTypes(ParticipatingBees.reified(), item.fields.participating_bees), bidPools: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(BidPool.reified())), item.fields.bid_pools), energyYield: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.energy_yield), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) })
    }

    static fromBcs(data: Uint8Array): QueenMaker { return QueenMaker.fromFields(QueenMaker.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, hiveKraftCap: this.hiveKraftCap.toJSONField(), hiveToBurn: this.hiveToBurn.toJSONField(), config: this.config.toJSONField(), areLive: this.areLive, queenCustody: this.queenCustody.toJSONField(), currentAuction: this.currentAuction.toJSONField(), leadingBees: this.leadingBees.toJSONField(), minimumLeadingBidAmt: this.minimumLeadingBidAmt.toString(), participatingBees: this.participatingBees.toJSONField(), bidPools: this.bidPools.toJSONField(), energyYield: this.energyYield.toJSONField(), moduleVersion: this.moduleVersion.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): QueenMaker { return QueenMaker.reified().new({ id: decodeFromJSONField(UID.reified(), field.id), hiveKraftCap: decodeFromJSONField(TreasuryCap.reified(reified.phantom(HIVE.reified())), field.hiveKraftCap), hiveToBurn: decodeFromJSONField(Balance.reified(reified.phantom(HIVE.reified())), field.hiveToBurn), config: decodeFromJSONField(AuctionConfig.reified(), field.config), areLive: decodeFromJSONField("bool", field.areLive), queenCustody: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(QueenCustody.reified())), field.queenCustody), currentAuction: decodeFromJSONField(AuctionInfo.reified(), field.currentAuction), leadingBees: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(LeadingDragonBee.reified())), field.leadingBees), minimumLeadingBidAmt: decodeFromJSONField("u64", field.minimumLeadingBidAmt), participatingBees: decodeFromJSONField(ParticipatingBees.reified(), field.participatingBees), bidPools: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(BidPool.reified())), field.bidPools), energyYield: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.energyYield), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) }) }

    static fromJSON(json: Record<string, any>): QueenMaker {
        if (json.$typeName !== QueenMaker.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return QueenMaker.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): QueenMaker { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isQueenMaker(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a QueenMaker object`); } return QueenMaker.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): QueenMaker {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQueenMaker(data.bcs.type)) { throw new Error(`object at is not a QueenMaker object`); }

            return QueenMaker.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return QueenMaker.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<QueenMaker> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching QueenMaker object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isQueenMaker(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a QueenMaker object`); }

        return QueenMaker.fromSuiObjectData(res.data);
    }

}

/* ============================== UserBeeReturned =============================== */

export function isUserBeeReturned(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::queen_maker::UserBeeReturned`; }

export interface UserBeeReturnedFields { bidderTrainer: ToField<"address">; username: ToField<String>; beeVersion: ToField<"u64">; bidAmt: ToField<"u64">; tax: ToField<"u64">; auctionStartAt: ToField<"u64"> }

export type UserBeeReturnedReified = Reified<UserBeeReturned, UserBeeReturnedFields>;

export class UserBeeReturned implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::queen_maker::UserBeeReturned`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = UserBeeReturned.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::queen_maker::UserBeeReturned`; readonly $typeArgs: []; readonly $isPhantom = UserBeeReturned.$isPhantom;

    readonly bidderTrainer: ToField<"address">; readonly username: ToField<String>; readonly beeVersion: ToField<"u64">; readonly bidAmt: ToField<"u64">; readonly tax: ToField<"u64">; readonly auctionStartAt: ToField<"u64">

    private constructor(typeArgs: [], fields: UserBeeReturnedFields,) {
        this.$fullTypeName = composeSuiType(UserBeeReturned.$typeName, ...typeArgs) as `${typeof PKG_V1}::queen_maker::UserBeeReturned`; this.$typeArgs = typeArgs;

        this.bidderTrainer = fields.bidderTrainer;; this.username = fields.username;; this.beeVersion = fields.beeVersion;; this.bidAmt = fields.bidAmt;; this.tax = fields.tax;; this.auctionStartAt = fields.auctionStartAt;
    }

    static reified(): UserBeeReturnedReified { return { typeName: UserBeeReturned.$typeName, fullTypeName: composeSuiType(UserBeeReturned.$typeName, ...[]) as `${typeof PKG_V1}::queen_maker::UserBeeReturned`, typeArgs: [] as [], isPhantom: UserBeeReturned.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UserBeeReturned.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => UserBeeReturned.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => UserBeeReturned.fromBcs(data,), bcs: UserBeeReturned.bcs, fromJSONField: (field: any) => UserBeeReturned.fromJSONField(field,), fromJSON: (json: Record<string, any>) => UserBeeReturned.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => UserBeeReturned.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => UserBeeReturned.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => UserBeeReturned.fetch(client, id,), new: (fields: UserBeeReturnedFields,) => { return new UserBeeReturned([], fields) }, kind: "StructClassReified", } }

    static get r() { return UserBeeReturned.reified() }

    static phantom(): PhantomReified<ToTypeStr<UserBeeReturned>> { return phantom(UserBeeReturned.reified()); } static get p() { return UserBeeReturned.phantom() }

    static get bcs() {
        return bcs.struct("UserBeeReturned", {

            bidder_trainer: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), username: String.bcs, bee_version: bcs.u64(), bid_amt: bcs.u64(), tax: bcs.u64(), auction_start_at: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): UserBeeReturned { return UserBeeReturned.reified().new({ bidderTrainer: decodeFromFields("address", fields.bidder_trainer), username: decodeFromFields(String.reified(), fields.username), beeVersion: decodeFromFields("u64", fields.bee_version), bidAmt: decodeFromFields("u64", fields.bid_amt), tax: decodeFromFields("u64", fields.tax), auctionStartAt: decodeFromFields("u64", fields.auction_start_at) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): UserBeeReturned {
        if (!isUserBeeReturned(item.type)) {
            throw new Error("not a UserBeeReturned type");

        }

        return UserBeeReturned.reified().new({ bidderTrainer: decodeFromFieldsWithTypes("address", item.fields.bidder_trainer), username: decodeFromFieldsWithTypes(String.reified(), item.fields.username), beeVersion: decodeFromFieldsWithTypes("u64", item.fields.bee_version), bidAmt: decodeFromFieldsWithTypes("u64", item.fields.bid_amt), tax: decodeFromFieldsWithTypes("u64", item.fields.tax), auctionStartAt: decodeFromFieldsWithTypes("u64", item.fields.auction_start_at) })
    }

    static fromBcs(data: Uint8Array): UserBeeReturned { return UserBeeReturned.fromFields(UserBeeReturned.bcs.parse(data)) }

    toJSONField() {
        return {

            bidderTrainer: this.bidderTrainer, username: this.username, beeVersion: this.beeVersion.toString(), bidAmt: this.bidAmt.toString(), tax: this.tax.toString(), auctionStartAt: this.auctionStartAt.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): UserBeeReturned { return UserBeeReturned.reified().new({ bidderTrainer: decodeFromJSONField("address", field.bidderTrainer), username: decodeFromJSONField(String.reified(), field.username), beeVersion: decodeFromJSONField("u64", field.beeVersion), bidAmt: decodeFromJSONField("u64", field.bidAmt), tax: decodeFromJSONField("u64", field.tax), auctionStartAt: decodeFromJSONField("u64", field.auctionStartAt) }) }

    static fromJSON(json: Record<string, any>): UserBeeReturned {
        if (json.$typeName !== UserBeeReturned.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return UserBeeReturned.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): UserBeeReturned { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUserBeeReturned(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UserBeeReturned object`); } return UserBeeReturned.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): UserBeeReturned {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUserBeeReturned(data.bcs.type)) { throw new Error(`object at is not a UserBeeReturned object`); }

            return UserBeeReturned.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return UserBeeReturned.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<UserBeeReturned> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UserBeeReturned object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUserBeeReturned(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UserBeeReturned object`); }

        return UserBeeReturned.fromSuiObjectData(res.data);
    }

}
