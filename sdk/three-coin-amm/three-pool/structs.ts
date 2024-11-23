import * as reified from "../../_framework/reified";
import { Option } from "../../source/0x1/option/structs";
import { TypeName } from "../../source/0x1/type-name/structs";
import { Balance, Supply } from "../../source/0x2/balance/structs";
import { LinkedTable } from "../../source/0x2/linked-table/structs";
import { ID, UID } from "../../source/0x2/object/structs";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom } from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { CurvedPoolConfig } from "../../pool-math/curved-math/structs";
import { StablePoolConfig } from "../../pool-math/stable-math/structs";
import { WeightedConfig } from "../../pool-math/weighted-math/structs";
import { ThreeAmmFlowAccess } from "../../yield-flow/yield-flow/structs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui.js/dist/cjs/client";
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { threecoin } from ".."

const PUBLISHED_AT = threecoin.PUBLISHED_AT

const PKG_V1 = threecoin.PKG_V1


/* ============================== CumPriceUpdatedEvent =============================== */

export function isCumPriceUpdatedEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::CumPriceUpdatedEvent` + '<'); }

export interface CumPriceUpdatedEventFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<ID>; cumulativeXPriceY: ToField<"u256">; cumulativeYPriceX: ToField<"u256">; cumulativeXPriceZ: ToField<"u256">; cumulativeZPriceX: ToField<"u256">; cumulativeYPriceZ: ToField<"u256">; cumulativeZPriceY: ToField<"u256">; timestamp: ToField<"u64"> }

export type CumPriceUpdatedEventReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<CumPriceUpdatedEvent<X, Y, Z, Curve>, CumPriceUpdatedEventFields<X, Y, Z, Curve>>;

export class CumPriceUpdatedEvent<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::CumPriceUpdatedEvent`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = CumPriceUpdatedEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::CumPriceUpdatedEvent<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = CumPriceUpdatedEvent.$isPhantom;

    readonly id: ToField<ID>; readonly cumulativeXPriceY: ToField<"u256">; readonly cumulativeYPriceX: ToField<"u256">; readonly cumulativeXPriceZ: ToField<"u256">; readonly cumulativeZPriceX: ToField<"u256">; readonly cumulativeYPriceZ: ToField<"u256">; readonly cumulativeZPriceY: ToField<"u256">; readonly timestamp: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: CumPriceUpdatedEventFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(CumPriceUpdatedEvent.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::CumPriceUpdatedEvent<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.cumulativeXPriceY = fields.cumulativeXPriceY;; this.cumulativeYPriceX = fields.cumulativeYPriceX;; this.cumulativeXPriceZ = fields.cumulativeXPriceZ;; this.cumulativeZPriceX = fields.cumulativeZPriceX;; this.cumulativeYPriceZ = fields.cumulativeYPriceZ;; this.cumulativeZPriceY = fields.cumulativeZPriceY;; this.timestamp = fields.timestamp;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): CumPriceUpdatedEventReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: CumPriceUpdatedEvent.$typeName, fullTypeName: composeSuiType(CumPriceUpdatedEvent.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::CumPriceUpdatedEvent<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: CumPriceUpdatedEvent.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => CumPriceUpdatedEvent.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => CumPriceUpdatedEvent.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => CumPriceUpdatedEvent.fromBcs([X, Y, Z, Curve], data,), bcs: CumPriceUpdatedEvent.bcs, fromJSONField: (field: any) => CumPriceUpdatedEvent.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => CumPriceUpdatedEvent.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => CumPriceUpdatedEvent.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => CumPriceUpdatedEvent.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => CumPriceUpdatedEvent.fetch(client, [X, Y, Z, Curve], id,), new: (fields: CumPriceUpdatedEventFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new CumPriceUpdatedEvent([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return CumPriceUpdatedEvent.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<CumPriceUpdatedEvent<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(CumPriceUpdatedEvent.reified(X, Y, Z, Curve)); } static get p() { return CumPriceUpdatedEvent.phantom }

    static get bcs() {
        return bcs.struct("CumPriceUpdatedEvent", {

            id: ID.bcs, cumulative_x_price_y: bcs.u256(), cumulative_y_price_x: bcs.u256(), cumulative_x_price_z: bcs.u256(), cumulative_z_price_x: bcs.u256(), cumulative_y_price_z: bcs.u256(), cumulative_z_price_y: bcs.u256(), timestamp: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): CumPriceUpdatedEvent<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return CumPriceUpdatedEvent.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(ID.reified(), fields.id), cumulativeXPriceY: decodeFromFields("u256", fields.cumulative_x_price_y), cumulativeYPriceX: decodeFromFields("u256", fields.cumulative_y_price_x), cumulativeXPriceZ: decodeFromFields("u256", fields.cumulative_x_price_z), cumulativeZPriceX: decodeFromFields("u256", fields.cumulative_z_price_x), cumulativeYPriceZ: decodeFromFields("u256", fields.cumulative_y_price_z), cumulativeZPriceY: decodeFromFields("u256", fields.cumulative_z_price_y), timestamp: decodeFromFields("u64", fields.timestamp) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): CumPriceUpdatedEvent<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isCumPriceUpdatedEvent(item.type)) {
            throw new Error("not a CumPriceUpdatedEvent type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return CumPriceUpdatedEvent.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), cumulativeXPriceY: decodeFromFieldsWithTypes("u256", item.fields.cumulative_x_price_y), cumulativeYPriceX: decodeFromFieldsWithTypes("u256", item.fields.cumulative_y_price_x), cumulativeXPriceZ: decodeFromFieldsWithTypes("u256", item.fields.cumulative_x_price_z), cumulativeZPriceX: decodeFromFieldsWithTypes("u256", item.fields.cumulative_z_price_x), cumulativeYPriceZ: decodeFromFieldsWithTypes("u256", item.fields.cumulative_y_price_z), cumulativeZPriceY: decodeFromFieldsWithTypes("u256", item.fields.cumulative_z_price_y), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): CumPriceUpdatedEvent<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return CumPriceUpdatedEvent.fromFields(typeArgs, CumPriceUpdatedEvent.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, cumulativeXPriceY: this.cumulativeXPriceY.toString(), cumulativeYPriceX: this.cumulativeYPriceX.toString(), cumulativeXPriceZ: this.cumulativeXPriceZ.toString(), cumulativeZPriceX: this.cumulativeZPriceX.toString(), cumulativeYPriceZ: this.cumulativeYPriceZ.toString(), cumulativeZPriceY: this.cumulativeZPriceY.toString(), timestamp: this.timestamp.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): CumPriceUpdatedEvent<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return CumPriceUpdatedEvent.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(ID.reified(), field.id), cumulativeXPriceY: decodeFromJSONField("u256", field.cumulativeXPriceY), cumulativeYPriceX: decodeFromJSONField("u256", field.cumulativeYPriceX), cumulativeXPriceZ: decodeFromJSONField("u256", field.cumulativeXPriceZ), cumulativeZPriceX: decodeFromJSONField("u256", field.cumulativeZPriceX), cumulativeYPriceZ: decodeFromJSONField("u256", field.cumulativeYPriceZ), cumulativeZPriceY: decodeFromJSONField("u256", field.cumulativeZPriceY), timestamp: decodeFromJSONField("u64", field.timestamp) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): CumPriceUpdatedEvent<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== CumPriceUpdatedEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(CumPriceUpdatedEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return CumPriceUpdatedEvent.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): CumPriceUpdatedEvent<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCumPriceUpdatedEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CumPriceUpdatedEvent object`); } return CumPriceUpdatedEvent.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): CumPriceUpdatedEvent<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCumPriceUpdatedEvent(data.bcs.type)) { throw new Error(`object at is not a CumPriceUpdatedEvent object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return CumPriceUpdatedEvent.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return CumPriceUpdatedEvent.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<CumPriceUpdatedEvent<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CumPriceUpdatedEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCumPriceUpdatedEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CumPriceUpdatedEvent object`); }

        return CumPriceUpdatedEvent.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== CurvedConfigUpdatedAmp =============================== */

export function isCurvedConfigUpdatedAmp(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::CurvedConfigUpdatedAmp` + '<'); }

export interface CurvedConfigUpdatedAmpFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<ID>; initAGammaTime: ToField<"u64">; nextAmp: ToField<"u64">; nextGamma: ToField<"u256">; futureAGammaTime: ToField<"u64"> }

export type CurvedConfigUpdatedAmpReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<CurvedConfigUpdatedAmp<X, Y, Z, Curve>, CurvedConfigUpdatedAmpFields<X, Y, Z, Curve>>;

export class CurvedConfigUpdatedAmp<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::CurvedConfigUpdatedAmp`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = CurvedConfigUpdatedAmp.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::CurvedConfigUpdatedAmp<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = CurvedConfigUpdatedAmp.$isPhantom;

    readonly id: ToField<ID>; readonly initAGammaTime: ToField<"u64">; readonly nextAmp: ToField<"u64">; readonly nextGamma: ToField<"u256">; readonly futureAGammaTime: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: CurvedConfigUpdatedAmpFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(CurvedConfigUpdatedAmp.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::CurvedConfigUpdatedAmp<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.initAGammaTime = fields.initAGammaTime;; this.nextAmp = fields.nextAmp;; this.nextGamma = fields.nextGamma;; this.futureAGammaTime = fields.futureAGammaTime;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): CurvedConfigUpdatedAmpReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: CurvedConfigUpdatedAmp.$typeName, fullTypeName: composeSuiType(CurvedConfigUpdatedAmp.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::CurvedConfigUpdatedAmp<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: CurvedConfigUpdatedAmp.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => CurvedConfigUpdatedAmp.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => CurvedConfigUpdatedAmp.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => CurvedConfigUpdatedAmp.fromBcs([X, Y, Z, Curve], data,), bcs: CurvedConfigUpdatedAmp.bcs, fromJSONField: (field: any) => CurvedConfigUpdatedAmp.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => CurvedConfigUpdatedAmp.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => CurvedConfigUpdatedAmp.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => CurvedConfigUpdatedAmp.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => CurvedConfigUpdatedAmp.fetch(client, [X, Y, Z, Curve], id,), new: (fields: CurvedConfigUpdatedAmpFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new CurvedConfigUpdatedAmp([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return CurvedConfigUpdatedAmp.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<CurvedConfigUpdatedAmp<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(CurvedConfigUpdatedAmp.reified(X, Y, Z, Curve)); } static get p() { return CurvedConfigUpdatedAmp.phantom }

    static get bcs() {
        return bcs.struct("CurvedConfigUpdatedAmp", {

            id: ID.bcs, init_A_gamma_time: bcs.u64(), next_amp: bcs.u64(), next_gamma: bcs.u256(), future_A_gamma_time: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): CurvedConfigUpdatedAmp<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return CurvedConfigUpdatedAmp.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(ID.reified(), fields.id), initAGammaTime: decodeFromFields("u64", fields.init_A_gamma_time), nextAmp: decodeFromFields("u64", fields.next_amp), nextGamma: decodeFromFields("u256", fields.next_gamma), futureAGammaTime: decodeFromFields("u64", fields.future_A_gamma_time) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): CurvedConfigUpdatedAmp<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isCurvedConfigUpdatedAmp(item.type)) {
            throw new Error("not a CurvedConfigUpdatedAmp type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return CurvedConfigUpdatedAmp.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), initAGammaTime: decodeFromFieldsWithTypes("u64", item.fields.init_A_gamma_time), nextAmp: decodeFromFieldsWithTypes("u64", item.fields.next_amp), nextGamma: decodeFromFieldsWithTypes("u256", item.fields.next_gamma), futureAGammaTime: decodeFromFieldsWithTypes("u64", item.fields.future_A_gamma_time) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): CurvedConfigUpdatedAmp<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return CurvedConfigUpdatedAmp.fromFields(typeArgs, CurvedConfigUpdatedAmp.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, initAGammaTime: this.initAGammaTime.toString(), nextAmp: this.nextAmp.toString(), nextGamma: this.nextGamma.toString(), futureAGammaTime: this.futureAGammaTime.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): CurvedConfigUpdatedAmp<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return CurvedConfigUpdatedAmp.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(ID.reified(), field.id), initAGammaTime: decodeFromJSONField("u64", field.initAGammaTime), nextAmp: decodeFromJSONField("u64", field.nextAmp), nextGamma: decodeFromJSONField("u256", field.nextGamma), futureAGammaTime: decodeFromJSONField("u64", field.futureAGammaTime) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): CurvedConfigUpdatedAmp<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== CurvedConfigUpdatedAmp.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(CurvedConfigUpdatedAmp.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return CurvedConfigUpdatedAmp.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): CurvedConfigUpdatedAmp<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurvedConfigUpdatedAmp(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CurvedConfigUpdatedAmp object`); } return CurvedConfigUpdatedAmp.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): CurvedConfigUpdatedAmp<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCurvedConfigUpdatedAmp(data.bcs.type)) { throw new Error(`object at is not a CurvedConfigUpdatedAmp object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return CurvedConfigUpdatedAmp.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return CurvedConfigUpdatedAmp.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<CurvedConfigUpdatedAmp<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CurvedConfigUpdatedAmp object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurvedConfigUpdatedAmp(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CurvedConfigUpdatedAmp object`); }

        return CurvedConfigUpdatedAmp.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== CurvedConfigUpdatedParams =============================== */

export function isCurvedConfigUpdatedParams(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::CurvedConfigUpdatedParams` + '<'); }

export interface CurvedConfigUpdatedParamsFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<ID>; newMidFee: ToField<"u64">; newOutFee: ToField<"u64">; newFeeGamma: ToField<"u64">; newMaHalfTime: ToField<"u64">; newAllowedExtraProfit: ToField<"u64">; newAdjustmentStep: ToField<"u64"> }

export type CurvedConfigUpdatedParamsReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<CurvedConfigUpdatedParams<X, Y, Z, Curve>, CurvedConfigUpdatedParamsFields<X, Y, Z, Curve>>;

export class CurvedConfigUpdatedParams<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::CurvedConfigUpdatedParams`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = CurvedConfigUpdatedParams.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::CurvedConfigUpdatedParams<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = CurvedConfigUpdatedParams.$isPhantom;

    readonly id: ToField<ID>; readonly newMidFee: ToField<"u64">; readonly newOutFee: ToField<"u64">; readonly newFeeGamma: ToField<"u64">; readonly newMaHalfTime: ToField<"u64">; readonly newAllowedExtraProfit: ToField<"u64">; readonly newAdjustmentStep: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: CurvedConfigUpdatedParamsFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(CurvedConfigUpdatedParams.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::CurvedConfigUpdatedParams<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.newMidFee = fields.newMidFee;; this.newOutFee = fields.newOutFee;; this.newFeeGamma = fields.newFeeGamma;; this.newMaHalfTime = fields.newMaHalfTime;; this.newAllowedExtraProfit = fields.newAllowedExtraProfit;; this.newAdjustmentStep = fields.newAdjustmentStep;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): CurvedConfigUpdatedParamsReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: CurvedConfigUpdatedParams.$typeName, fullTypeName: composeSuiType(CurvedConfigUpdatedParams.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::CurvedConfigUpdatedParams<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: CurvedConfigUpdatedParams.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => CurvedConfigUpdatedParams.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => CurvedConfigUpdatedParams.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => CurvedConfigUpdatedParams.fromBcs([X, Y, Z, Curve], data,), bcs: CurvedConfigUpdatedParams.bcs, fromJSONField: (field: any) => CurvedConfigUpdatedParams.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => CurvedConfigUpdatedParams.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => CurvedConfigUpdatedParams.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => CurvedConfigUpdatedParams.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => CurvedConfigUpdatedParams.fetch(client, [X, Y, Z, Curve], id,), new: (fields: CurvedConfigUpdatedParamsFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new CurvedConfigUpdatedParams([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return CurvedConfigUpdatedParams.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<CurvedConfigUpdatedParams<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(CurvedConfigUpdatedParams.reified(X, Y, Z, Curve)); } static get p() { return CurvedConfigUpdatedParams.phantom }

    static get bcs() {
        return bcs.struct("CurvedConfigUpdatedParams", {

            id: ID.bcs, new_mid_fee: bcs.u64(), new_out_fee: bcs.u64(), new_fee_gamma: bcs.u64(), new_ma_half_time: bcs.u64(), new_allowed_extra_profit: bcs.u64(), new_adjustment_step: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): CurvedConfigUpdatedParams<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return CurvedConfigUpdatedParams.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(ID.reified(), fields.id), newMidFee: decodeFromFields("u64", fields.new_mid_fee), newOutFee: decodeFromFields("u64", fields.new_out_fee), newFeeGamma: decodeFromFields("u64", fields.new_fee_gamma), newMaHalfTime: decodeFromFields("u64", fields.new_ma_half_time), newAllowedExtraProfit: decodeFromFields("u64", fields.new_allowed_extra_profit), newAdjustmentStep: decodeFromFields("u64", fields.new_adjustment_step) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): CurvedConfigUpdatedParams<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isCurvedConfigUpdatedParams(item.type)) {
            throw new Error("not a CurvedConfigUpdatedParams type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return CurvedConfigUpdatedParams.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), newMidFee: decodeFromFieldsWithTypes("u64", item.fields.new_mid_fee), newOutFee: decodeFromFieldsWithTypes("u64", item.fields.new_out_fee), newFeeGamma: decodeFromFieldsWithTypes("u64", item.fields.new_fee_gamma), newMaHalfTime: decodeFromFieldsWithTypes("u64", item.fields.new_ma_half_time), newAllowedExtraProfit: decodeFromFieldsWithTypes("u64", item.fields.new_allowed_extra_profit), newAdjustmentStep: decodeFromFieldsWithTypes("u64", item.fields.new_adjustment_step) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): CurvedConfigUpdatedParams<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return CurvedConfigUpdatedParams.fromFields(typeArgs, CurvedConfigUpdatedParams.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, newMidFee: this.newMidFee.toString(), newOutFee: this.newOutFee.toString(), newFeeGamma: this.newFeeGamma.toString(), newMaHalfTime: this.newMaHalfTime.toString(), newAllowedExtraProfit: this.newAllowedExtraProfit.toString(), newAdjustmentStep: this.newAdjustmentStep.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): CurvedConfigUpdatedParams<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return CurvedConfigUpdatedParams.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(ID.reified(), field.id), newMidFee: decodeFromJSONField("u64", field.newMidFee), newOutFee: decodeFromJSONField("u64", field.newOutFee), newFeeGamma: decodeFromJSONField("u64", field.newFeeGamma), newMaHalfTime: decodeFromJSONField("u64", field.newMaHalfTime), newAllowedExtraProfit: decodeFromJSONField("u64", field.newAllowedExtraProfit), newAdjustmentStep: decodeFromJSONField("u64", field.newAdjustmentStep) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): CurvedConfigUpdatedParams<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== CurvedConfigUpdatedParams.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(CurvedConfigUpdatedParams.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return CurvedConfigUpdatedParams.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): CurvedConfigUpdatedParams<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurvedConfigUpdatedParams(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CurvedConfigUpdatedParams object`); } return CurvedConfigUpdatedParams.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): CurvedConfigUpdatedParams<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCurvedConfigUpdatedParams(data.bcs.type)) { throw new Error(`object at is not a CurvedConfigUpdatedParams object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return CurvedConfigUpdatedParams.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return CurvedConfigUpdatedParams.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<CurvedConfigUpdatedParams<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CurvedConfigUpdatedParams object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurvedConfigUpdatedParams(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CurvedConfigUpdatedParams object`); }

        return CurvedConfigUpdatedParams.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== FlashLoanExecuted =============================== */

export function isFlashLoanExecuted(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::FlashLoanExecuted` + '<'); }

export interface FlashLoanExecutedFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<ID>; xLoan: ToField<"u64">; yLoan: ToField<"u64">; zLoan: ToField<"u64">; totalXFee: ToField<"u64">; totalYFee: ToField<"u64">; totalZFee: ToField<"u64">; xHiveFee: ToField<"u64">; yHiveFee: ToField<"u64">; zHiveFee: ToField<"u64"> }

export type FlashLoanExecutedReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<FlashLoanExecuted<X, Y, Z, Curve>, FlashLoanExecutedFields<X, Y, Z, Curve>>;

export class FlashLoanExecuted<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::FlashLoanExecuted`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = FlashLoanExecuted.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::FlashLoanExecuted<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = FlashLoanExecuted.$isPhantom;

    readonly id: ToField<ID>; readonly xLoan: ToField<"u64">; readonly yLoan: ToField<"u64">; readonly zLoan: ToField<"u64">; readonly totalXFee: ToField<"u64">; readonly totalYFee: ToField<"u64">; readonly totalZFee: ToField<"u64">; readonly xHiveFee: ToField<"u64">; readonly yHiveFee: ToField<"u64">; readonly zHiveFee: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: FlashLoanExecutedFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(FlashLoanExecuted.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::FlashLoanExecuted<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.xLoan = fields.xLoan;; this.yLoan = fields.yLoan;; this.zLoan = fields.zLoan;; this.totalXFee = fields.totalXFee;; this.totalYFee = fields.totalYFee;; this.totalZFee = fields.totalZFee;; this.xHiveFee = fields.xHiveFee;; this.yHiveFee = fields.yHiveFee;; this.zHiveFee = fields.zHiveFee;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): FlashLoanExecutedReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: FlashLoanExecuted.$typeName, fullTypeName: composeSuiType(FlashLoanExecuted.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::FlashLoanExecuted<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: FlashLoanExecuted.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => FlashLoanExecuted.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => FlashLoanExecuted.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => FlashLoanExecuted.fromBcs([X, Y, Z, Curve], data,), bcs: FlashLoanExecuted.bcs, fromJSONField: (field: any) => FlashLoanExecuted.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => FlashLoanExecuted.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => FlashLoanExecuted.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => FlashLoanExecuted.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => FlashLoanExecuted.fetch(client, [X, Y, Z, Curve], id,), new: (fields: FlashLoanExecutedFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new FlashLoanExecuted([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return FlashLoanExecuted.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<FlashLoanExecuted<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(FlashLoanExecuted.reified(X, Y, Z, Curve)); } static get p() { return FlashLoanExecuted.phantom }

    static get bcs() {
        return bcs.struct("FlashLoanExecuted", {

            id: ID.bcs, x_loan: bcs.u64(), y_loan: bcs.u64(), z_loan: bcs.u64(), total_x_fee: bcs.u64(), total_y_fee: bcs.u64(), total_z_fee: bcs.u64(), x_hive_fee: bcs.u64(), y_hive_fee: bcs.u64(), z_hive_fee: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): FlashLoanExecuted<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return FlashLoanExecuted.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(ID.reified(), fields.id), xLoan: decodeFromFields("u64", fields.x_loan), yLoan: decodeFromFields("u64", fields.y_loan), zLoan: decodeFromFields("u64", fields.z_loan), totalXFee: decodeFromFields("u64", fields.total_x_fee), totalYFee: decodeFromFields("u64", fields.total_y_fee), totalZFee: decodeFromFields("u64", fields.total_z_fee), xHiveFee: decodeFromFields("u64", fields.x_hive_fee), yHiveFee: decodeFromFields("u64", fields.y_hive_fee), zHiveFee: decodeFromFields("u64", fields.z_hive_fee) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): FlashLoanExecuted<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isFlashLoanExecuted(item.type)) {
            throw new Error("not a FlashLoanExecuted type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return FlashLoanExecuted.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), xLoan: decodeFromFieldsWithTypes("u64", item.fields.x_loan), yLoan: decodeFromFieldsWithTypes("u64", item.fields.y_loan), zLoan: decodeFromFieldsWithTypes("u64", item.fields.z_loan), totalXFee: decodeFromFieldsWithTypes("u64", item.fields.total_x_fee), totalYFee: decodeFromFieldsWithTypes("u64", item.fields.total_y_fee), totalZFee: decodeFromFieldsWithTypes("u64", item.fields.total_z_fee), xHiveFee: decodeFromFieldsWithTypes("u64", item.fields.x_hive_fee), yHiveFee: decodeFromFieldsWithTypes("u64", item.fields.y_hive_fee), zHiveFee: decodeFromFieldsWithTypes("u64", item.fields.z_hive_fee) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): FlashLoanExecuted<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return FlashLoanExecuted.fromFields(typeArgs, FlashLoanExecuted.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, xLoan: this.xLoan.toString(), yLoan: this.yLoan.toString(), zLoan: this.zLoan.toString(), totalXFee: this.totalXFee.toString(), totalYFee: this.totalYFee.toString(), totalZFee: this.totalZFee.toString(), xHiveFee: this.xHiveFee.toString(), yHiveFee: this.yHiveFee.toString(), zHiveFee: this.zHiveFee.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): FlashLoanExecuted<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return FlashLoanExecuted.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(ID.reified(), field.id), xLoan: decodeFromJSONField("u64", field.xLoan), yLoan: decodeFromJSONField("u64", field.yLoan), zLoan: decodeFromJSONField("u64", field.zLoan), totalXFee: decodeFromJSONField("u64", field.totalXFee), totalYFee: decodeFromJSONField("u64", field.totalYFee), totalZFee: decodeFromJSONField("u64", field.totalZFee), xHiveFee: decodeFromJSONField("u64", field.xHiveFee), yHiveFee: decodeFromJSONField("u64", field.yHiveFee), zHiveFee: decodeFromJSONField("u64", field.zHiveFee) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): FlashLoanExecuted<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== FlashLoanExecuted.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(FlashLoanExecuted.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return FlashLoanExecuted.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): FlashLoanExecuted<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFlashLoanExecuted(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FlashLoanExecuted object`); } return FlashLoanExecuted.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): FlashLoanExecuted<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFlashLoanExecuted(data.bcs.type)) { throw new Error(`object at is not a FlashLoanExecuted object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return FlashLoanExecuted.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return FlashLoanExecuted.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<FlashLoanExecuted<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FlashLoanExecuted object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFlashLoanExecuted(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FlashLoanExecuted object`); }

        return FlashLoanExecuted.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== Flashloan =============================== */

export function isFlashloan(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::Flashloan` + '<'); }

export interface FlashloanFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { xLoan: ToField<"u64">; yLoan: ToField<"u64">; zLoan: ToField<"u64"> }

export type FlashloanReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<Flashloan<X, Y, Z, Curve>, FlashloanFields<X, Y, Z, Curve>>;

export class Flashloan<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::Flashloan`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = Flashloan.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::Flashloan<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = Flashloan.$isPhantom;

    readonly xLoan: ToField<"u64">; readonly yLoan: ToField<"u64">; readonly zLoan: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: FlashloanFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(Flashloan.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::Flashloan<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.xLoan = fields.xLoan;; this.yLoan = fields.yLoan;; this.zLoan = fields.zLoan;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): FlashloanReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: Flashloan.$typeName, fullTypeName: composeSuiType(Flashloan.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::Flashloan<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: Flashloan.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => Flashloan.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => Flashloan.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => Flashloan.fromBcs([X, Y, Z, Curve], data,), bcs: Flashloan.bcs, fromJSONField: (field: any) => Flashloan.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => Flashloan.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => Flashloan.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => Flashloan.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => Flashloan.fetch(client, [X, Y, Z, Curve], id,), new: (fields: FlashloanFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new Flashloan([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return Flashloan.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<Flashloan<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(Flashloan.reified(X, Y, Z, Curve)); } static get p() { return Flashloan.phantom }

    static get bcs() {
        return bcs.struct("Flashloan", {

            x_loan: bcs.u64(), y_loan: bcs.u64(), z_loan: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): Flashloan<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return Flashloan.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ xLoan: decodeFromFields("u64", fields.x_loan), yLoan: decodeFromFields("u64", fields.y_loan), zLoan: decodeFromFields("u64", fields.z_loan) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): Flashloan<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isFlashloan(item.type)) {
            throw new Error("not a Flashloan type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return Flashloan.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ xLoan: decodeFromFieldsWithTypes("u64", item.fields.x_loan), yLoan: decodeFromFieldsWithTypes("u64", item.fields.y_loan), zLoan: decodeFromFieldsWithTypes("u64", item.fields.z_loan) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): Flashloan<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return Flashloan.fromFields(typeArgs, Flashloan.bcs.parse(data)) }

    toJSONField() {
        return {

            xLoan: this.xLoan.toString(), yLoan: this.yLoan.toString(), zLoan: this.zLoan.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): Flashloan<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return Flashloan.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ xLoan: decodeFromJSONField("u64", field.xLoan), yLoan: decodeFromJSONField("u64", field.yLoan), zLoan: decodeFromJSONField("u64", field.zLoan) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): Flashloan<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== Flashloan.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(Flashloan.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return Flashloan.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): Flashloan<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFlashloan(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Flashloan object`); } return Flashloan.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): Flashloan<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isFlashloan(data.bcs.type)) { throw new Error(`object at is not a Flashloan object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return Flashloan.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return Flashloan.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<Flashloan<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Flashloan object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFlashloan(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Flashloan object`); }

        return Flashloan.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== InternalPricesUpdated =============================== */

export function isInternalPricesUpdated(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::InternalPricesUpdated` + '<'); }

export interface InternalPricesUpdatedFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<ID>; priceScale: ToField<Vector<"u256">>; oraclePrices: ToField<Vector<"u256">>; lastPrices: ToField<Vector<"u256">>; lastPricesTimestamp: ToField<"u64">; virtualPrice: ToField<"u256">; xcpProfit: ToField<"u256">; notAdjusted: ToField<"bool">; d: ToField<"u256"> }

export type InternalPricesUpdatedReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<InternalPricesUpdated<X, Y, Z, Curve>, InternalPricesUpdatedFields<X, Y, Z, Curve>>;

export class InternalPricesUpdated<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::InternalPricesUpdated`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = InternalPricesUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::InternalPricesUpdated<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = InternalPricesUpdated.$isPhantom;

    readonly id: ToField<ID>; readonly priceScale: ToField<Vector<"u256">>; readonly oraclePrices: ToField<Vector<"u256">>; readonly lastPrices: ToField<Vector<"u256">>; readonly lastPricesTimestamp: ToField<"u64">; readonly virtualPrice: ToField<"u256">; readonly xcpProfit: ToField<"u256">; readonly notAdjusted: ToField<"bool">; readonly d: ToField<"u256">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: InternalPricesUpdatedFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(InternalPricesUpdated.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::InternalPricesUpdated<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.priceScale = fields.priceScale;; this.oraclePrices = fields.oraclePrices;; this.lastPrices = fields.lastPrices;; this.lastPricesTimestamp = fields.lastPricesTimestamp;; this.virtualPrice = fields.virtualPrice;; this.xcpProfit = fields.xcpProfit;; this.notAdjusted = fields.notAdjusted;; this.d = fields.d;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): InternalPricesUpdatedReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: InternalPricesUpdated.$typeName, fullTypeName: composeSuiType(InternalPricesUpdated.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::InternalPricesUpdated<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: InternalPricesUpdated.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => InternalPricesUpdated.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => InternalPricesUpdated.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => InternalPricesUpdated.fromBcs([X, Y, Z, Curve], data,), bcs: InternalPricesUpdated.bcs, fromJSONField: (field: any) => InternalPricesUpdated.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => InternalPricesUpdated.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => InternalPricesUpdated.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => InternalPricesUpdated.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => InternalPricesUpdated.fetch(client, [X, Y, Z, Curve], id,), new: (fields: InternalPricesUpdatedFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new InternalPricesUpdated([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return InternalPricesUpdated.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<InternalPricesUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(InternalPricesUpdated.reified(X, Y, Z, Curve)); } static get p() { return InternalPricesUpdated.phantom }

    static get bcs() {
        return bcs.struct("InternalPricesUpdated", {

            id: ID.bcs, price_scale: bcs.vector(bcs.u256()), oracle_prices: bcs.vector(bcs.u256()), last_prices: bcs.vector(bcs.u256()), last_prices_timestamp: bcs.u64(), virtual_price: bcs.u256(), xcp_profit: bcs.u256(), not_adjusted: bcs.bool(), _D: bcs.u256()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): InternalPricesUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return InternalPricesUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(ID.reified(), fields.id), priceScale: decodeFromFields(reified.vector("u256"), fields.price_scale), oraclePrices: decodeFromFields(reified.vector("u256"), fields.oracle_prices), lastPrices: decodeFromFields(reified.vector("u256"), fields.last_prices), lastPricesTimestamp: decodeFromFields("u64", fields.last_prices_timestamp), virtualPrice: decodeFromFields("u256", fields.virtual_price), xcpProfit: decodeFromFields("u256", fields.xcp_profit), notAdjusted: decodeFromFields("bool", fields.not_adjusted), d: decodeFromFields("u256", fields._D) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): InternalPricesUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isInternalPricesUpdated(item.type)) {
            throw new Error("not a InternalPricesUpdated type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return InternalPricesUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), priceScale: decodeFromFieldsWithTypes(reified.vector("u256"), item.fields.price_scale), oraclePrices: decodeFromFieldsWithTypes(reified.vector("u256"), item.fields.oracle_prices), lastPrices: decodeFromFieldsWithTypes(reified.vector("u256"), item.fields.last_prices), lastPricesTimestamp: decodeFromFieldsWithTypes("u64", item.fields.last_prices_timestamp), virtualPrice: decodeFromFieldsWithTypes("u256", item.fields.virtual_price), xcpProfit: decodeFromFieldsWithTypes("u256", item.fields.xcp_profit), notAdjusted: decodeFromFieldsWithTypes("bool", item.fields.not_adjusted), d: decodeFromFieldsWithTypes("u256", item.fields._D) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): InternalPricesUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return InternalPricesUpdated.fromFields(typeArgs, InternalPricesUpdated.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, priceScale: fieldToJSON<Vector<"u256">>(`vector<u256>`, this.priceScale), oraclePrices: fieldToJSON<Vector<"u256">>(`vector<u256>`, this.oraclePrices), lastPrices: fieldToJSON<Vector<"u256">>(`vector<u256>`, this.lastPrices), lastPricesTimestamp: this.lastPricesTimestamp.toString(), virtualPrice: this.virtualPrice.toString(), xcpProfit: this.xcpProfit.toString(), notAdjusted: this.notAdjusted, d: this.d.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): InternalPricesUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return InternalPricesUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(ID.reified(), field.id), priceScale: decodeFromJSONField(reified.vector("u256"), field.priceScale), oraclePrices: decodeFromJSONField(reified.vector("u256"), field.oraclePrices), lastPrices: decodeFromJSONField(reified.vector("u256"), field.lastPrices), lastPricesTimestamp: decodeFromJSONField("u64", field.lastPricesTimestamp), virtualPrice: decodeFromJSONField("u256", field.virtualPrice), xcpProfit: decodeFromJSONField("u256", field.xcpProfit), notAdjusted: decodeFromJSONField("bool", field.notAdjusted), d: decodeFromJSONField("u256", field.d) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): InternalPricesUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== InternalPricesUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(InternalPricesUpdated.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return InternalPricesUpdated.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): InternalPricesUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isInternalPricesUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a InternalPricesUpdated object`); } return InternalPricesUpdated.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): InternalPricesUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isInternalPricesUpdated(data.bcs.type)) { throw new Error(`object at is not a InternalPricesUpdated object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return InternalPricesUpdated.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return InternalPricesUpdated.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<InternalPricesUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching InternalPricesUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isInternalPricesUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a InternalPricesUpdated object`); }

        return InternalPricesUpdated.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== LP =============================== */

export function isLP(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::LP` + '<'); }

export interface LPFields<A extends PhantomTypeArgument, B extends PhantomTypeArgument, C extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type LPReified<A extends PhantomTypeArgument, B extends PhantomTypeArgument, C extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<LP<A, B, C, Curve>, LPFields<A, B, C, Curve>>;

export class LP<A extends PhantomTypeArgument, B extends PhantomTypeArgument, C extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::LP`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = LP.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::LP<${PhantomToTypeStr<A>}, ${PhantomToTypeStr<B>}, ${PhantomToTypeStr<C>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<A>, PhantomToTypeStr<B>, PhantomToTypeStr<C>, PhantomToTypeStr<Curve>]; readonly $isPhantom = LP.$isPhantom;

    readonly dummyField: ToField<"bool">

    private constructor(typeArgs: [PhantomToTypeStr<A>, PhantomToTypeStr<B>, PhantomToTypeStr<C>, PhantomToTypeStr<Curve>], fields: LPFields<A, B, C, Curve>,) {
        this.$fullTypeName = composeSuiType(LP.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::LP<${PhantomToTypeStr<A>}, ${PhantomToTypeStr<B>}, ${PhantomToTypeStr<C>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified<A extends PhantomReified<PhantomTypeArgument>, B extends PhantomReified<PhantomTypeArgument>, C extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(A: A, B: B, C: C, Curve: Curve): LPReified<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>> { return { typeName: LP.$typeName, fullTypeName: composeSuiType(LP.$typeName, ...[extractType(A), extractType(B), extractType(C), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::LP<${PhantomToTypeStr<ToPhantomTypeArgument<A>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<B>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<C>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(A), extractType(B), extractType(C), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<A>>, PhantomToTypeStr<ToPhantomTypeArgument<B>>, PhantomToTypeStr<ToPhantomTypeArgument<C>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: LP.$isPhantom, reifiedTypeArgs: [A, B, C, Curve], fromFields: (fields: Record<string, any>) => LP.fromFields([A, B, C, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => LP.fromFieldsWithTypes([A, B, C, Curve], item,), fromBcs: (data: Uint8Array) => LP.fromBcs([A, B, C, Curve], data,), bcs: LP.bcs, fromJSONField: (field: any) => LP.fromJSONField([A, B, C, Curve], field,), fromJSON: (json: Record<string, any>) => LP.fromJSON([A, B, C, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => LP.fromSuiParsedData([A, B, C, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => LP.fromSuiObjectData([A, B, C, Curve], content,), fetch: async (client: SuiClient, id: string) => LP.fetch(client, [A, B, C, Curve], id,), new: (fields: LPFields<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>>,) => { return new LP([extractType(A), extractType(B), extractType(C), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return LP.reified }

    static phantom<A extends PhantomReified<PhantomTypeArgument>, B extends PhantomReified<PhantomTypeArgument>, C extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(A: A, B: B, C: C, Curve: Curve): PhantomReified<ToTypeStr<LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>>>> { return phantom(LP.reified(A, B, C, Curve)); } static get p() { return LP.phantom }

    static get bcs() {
        return bcs.struct("LP", {

            dummy_field: bcs.bool()

        })
    };

    static fromFields<A extends PhantomReified<PhantomTypeArgument>, B extends PhantomReified<PhantomTypeArgument>, C extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [A, B, C, Curve], fields: Record<string, any>): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>> { return LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ dummyField: decodeFromFields("bool", fields.dummy_field) }) }

    static fromFieldsWithTypes<A extends PhantomReified<PhantomTypeArgument>, B extends PhantomReified<PhantomTypeArgument>, C extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [A, B, C, Curve], item: FieldsWithTypes): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>> {
        if (!isLP(item.type)) {
            throw new Error("not a LP type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) })
    }

    static fromBcs<A extends PhantomReified<PhantomTypeArgument>, B extends PhantomReified<PhantomTypeArgument>, C extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [A, B, C, Curve], data: Uint8Array): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>> { return LP.fromFields(typeArgs, LP.bcs.parse(data)) }

    toJSONField() {
        return {

            dummyField: this.dummyField,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<A extends PhantomReified<PhantomTypeArgument>, B extends PhantomReified<PhantomTypeArgument>, C extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [A, B, C, Curve], field: any): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>> { return LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ dummyField: decodeFromJSONField("bool", field.dummyField) }) }

    static fromJSON<A extends PhantomReified<PhantomTypeArgument>, B extends PhantomReified<PhantomTypeArgument>, C extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [A, B, C, Curve], json: Record<string, any>): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== LP.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(LP.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return LP.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<A extends PhantomReified<PhantomTypeArgument>, B extends PhantomReified<PhantomTypeArgument>, C extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [A, B, C, Curve], content: SuiParsedData): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLP(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LP object`); } return LP.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<A extends PhantomReified<PhantomTypeArgument>, B extends PhantomReified<PhantomTypeArgument>, C extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [A, B, C, Curve], data: SuiObjectData): LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLP(data.bcs.type)) { throw new Error(`object at is not a LP object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return LP.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return LP.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<A extends PhantomReified<PhantomTypeArgument>, B extends PhantomReified<PhantomTypeArgument>, C extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [A, B, C, Curve], id: string): Promise<LP<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>, ToPhantomTypeArgument<C>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LP object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLP(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LP object`); }

        return LP.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== LiquidityAddedToPool =============================== */

export function isLiquidityAddedToPool(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::LiquidityAddedToPool` + '<'); }

export interface LiquidityAddedToPoolFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<ID>; coinXAmount: ToField<"u64">; coinYAmount: ToField<"u64">; coinZAmount: ToField<"u64">; lpMinted: ToField<"u64">; totalXFee: ToField<"u64">; totalYFee: ToField<"u64">; totalZFee: ToField<"u64">; xHiveFee: ToField<"u64">; yHiveFee: ToField<"u64">; zHiveFee: ToField<"u64"> }

export type LiquidityAddedToPoolReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<LiquidityAddedToPool<X, Y, Z, Curve>, LiquidityAddedToPoolFields<X, Y, Z, Curve>>;

export class LiquidityAddedToPool<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::LiquidityAddedToPool`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = LiquidityAddedToPool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::LiquidityAddedToPool<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = LiquidityAddedToPool.$isPhantom;

    readonly id: ToField<ID>; readonly coinXAmount: ToField<"u64">; readonly coinYAmount: ToField<"u64">; readonly coinZAmount: ToField<"u64">; readonly lpMinted: ToField<"u64">; readonly totalXFee: ToField<"u64">; readonly totalYFee: ToField<"u64">; readonly totalZFee: ToField<"u64">; readonly xHiveFee: ToField<"u64">; readonly yHiveFee: ToField<"u64">; readonly zHiveFee: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: LiquidityAddedToPoolFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(LiquidityAddedToPool.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::LiquidityAddedToPool<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.coinXAmount = fields.coinXAmount;; this.coinYAmount = fields.coinYAmount;; this.coinZAmount = fields.coinZAmount;; this.lpMinted = fields.lpMinted;; this.totalXFee = fields.totalXFee;; this.totalYFee = fields.totalYFee;; this.totalZFee = fields.totalZFee;; this.xHiveFee = fields.xHiveFee;; this.yHiveFee = fields.yHiveFee;; this.zHiveFee = fields.zHiveFee;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): LiquidityAddedToPoolReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: LiquidityAddedToPool.$typeName, fullTypeName: composeSuiType(LiquidityAddedToPool.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::LiquidityAddedToPool<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: LiquidityAddedToPool.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => LiquidityAddedToPool.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidityAddedToPool.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => LiquidityAddedToPool.fromBcs([X, Y, Z, Curve], data,), bcs: LiquidityAddedToPool.bcs, fromJSONField: (field: any) => LiquidityAddedToPool.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => LiquidityAddedToPool.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => LiquidityAddedToPool.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => LiquidityAddedToPool.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => LiquidityAddedToPool.fetch(client, [X, Y, Z, Curve], id,), new: (fields: LiquidityAddedToPoolFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new LiquidityAddedToPool([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return LiquidityAddedToPool.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<LiquidityAddedToPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(LiquidityAddedToPool.reified(X, Y, Z, Curve)); } static get p() { return LiquidityAddedToPool.phantom }

    static get bcs() {
        return bcs.struct("LiquidityAddedToPool", {

            id: ID.bcs, coin_x_amount: bcs.u64(), coin_y_amount: bcs.u64(), coin_z_amount: bcs.u64(), lp_minted: bcs.u64(), total_x_fee: bcs.u64(), total_y_fee: bcs.u64(), total_z_fee: bcs.u64(), x_hive_fee: bcs.u64(), y_hive_fee: bcs.u64(), z_hive_fee: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): LiquidityAddedToPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return LiquidityAddedToPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(ID.reified(), fields.id), coinXAmount: decodeFromFields("u64", fields.coin_x_amount), coinYAmount: decodeFromFields("u64", fields.coin_y_amount), coinZAmount: decodeFromFields("u64", fields.coin_z_amount), lpMinted: decodeFromFields("u64", fields.lp_minted), totalXFee: decodeFromFields("u64", fields.total_x_fee), totalYFee: decodeFromFields("u64", fields.total_y_fee), totalZFee: decodeFromFields("u64", fields.total_z_fee), xHiveFee: decodeFromFields("u64", fields.x_hive_fee), yHiveFee: decodeFromFields("u64", fields.y_hive_fee), zHiveFee: decodeFromFields("u64", fields.z_hive_fee) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): LiquidityAddedToPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isLiquidityAddedToPool(item.type)) {
            throw new Error("not a LiquidityAddedToPool type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return LiquidityAddedToPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), coinXAmount: decodeFromFieldsWithTypes("u64", item.fields.coin_x_amount), coinYAmount: decodeFromFieldsWithTypes("u64", item.fields.coin_y_amount), coinZAmount: decodeFromFieldsWithTypes("u64", item.fields.coin_z_amount), lpMinted: decodeFromFieldsWithTypes("u64", item.fields.lp_minted), totalXFee: decodeFromFieldsWithTypes("u64", item.fields.total_x_fee), totalYFee: decodeFromFieldsWithTypes("u64", item.fields.total_y_fee), totalZFee: decodeFromFieldsWithTypes("u64", item.fields.total_z_fee), xHiveFee: decodeFromFieldsWithTypes("u64", item.fields.x_hive_fee), yHiveFee: decodeFromFieldsWithTypes("u64", item.fields.y_hive_fee), zHiveFee: decodeFromFieldsWithTypes("u64", item.fields.z_hive_fee) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): LiquidityAddedToPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return LiquidityAddedToPool.fromFields(typeArgs, LiquidityAddedToPool.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, coinXAmount: this.coinXAmount.toString(), coinYAmount: this.coinYAmount.toString(), coinZAmount: this.coinZAmount.toString(), lpMinted: this.lpMinted.toString(), totalXFee: this.totalXFee.toString(), totalYFee: this.totalYFee.toString(), totalZFee: this.totalZFee.toString(), xHiveFee: this.xHiveFee.toString(), yHiveFee: this.yHiveFee.toString(), zHiveFee: this.zHiveFee.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): LiquidityAddedToPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return LiquidityAddedToPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(ID.reified(), field.id), coinXAmount: decodeFromJSONField("u64", field.coinXAmount), coinYAmount: decodeFromJSONField("u64", field.coinYAmount), coinZAmount: decodeFromJSONField("u64", field.coinZAmount), lpMinted: decodeFromJSONField("u64", field.lpMinted), totalXFee: decodeFromJSONField("u64", field.totalXFee), totalYFee: decodeFromJSONField("u64", field.totalYFee), totalZFee: decodeFromJSONField("u64", field.totalZFee), xHiveFee: decodeFromJSONField("u64", field.xHiveFee), yHiveFee: decodeFromJSONField("u64", field.yHiveFee), zHiveFee: decodeFromJSONField("u64", field.zHiveFee) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): LiquidityAddedToPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== LiquidityAddedToPool.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(LiquidityAddedToPool.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return LiquidityAddedToPool.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): LiquidityAddedToPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLiquidityAddedToPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LiquidityAddedToPool object`); } return LiquidityAddedToPool.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): LiquidityAddedToPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidityAddedToPool(data.bcs.type)) { throw new Error(`object at is not a LiquidityAddedToPool object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return LiquidityAddedToPool.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return LiquidityAddedToPool.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<LiquidityAddedToPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LiquidityAddedToPool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidityAddedToPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LiquidityAddedToPool object`); }

        return LiquidityAddedToPool.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== LiquidityPool =============================== */

export function isLiquidityPool(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::LiquidityPool` + '<'); }

export interface LiquidityPoolFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<UID>; coinXReserve: ToField<Balance<X>>; coinXDecimals: ToField<"u8">; coinYReserve: ToField<Balance<Y>>; coinYDecimals: ToField<"u8">; coinZReserve: ToField<Balance<Z>>; coinZDecimals: ToField<"u8">; lpSupply: ToField<Supply<ToPhantom<LP<X, Y, Z, Curve>>>>; totalLpKrafted: ToField<"u64">; curvedConfig: ToField<Option<CurvedPoolConfig>>; stableConfig: ToField<Option<StablePoolConfig>>; weightedConfig: ToField<Option<WeightedConfig>>; collectedFeeX: ToField<Balance<X>>; collectedFeeY: ToField<Balance<Y>>; collectedFeeZ: ToField<Balance<Z>>; feeInfo: ToField<PoolFeeInfo>; isLocked: ToField<"bool">; cumulativeXPriceY: ToField<"u256">; cumulativeYPriceX: ToField<"u256">; cumulativeXPriceZ: ToField<"u256">; cumulativeZPriceX: ToField<"u256">; cumulativeYPriceZ: ToField<"u256">; cumulativeZPriceY: ToField<"u256">; lastTimestamp: ToField<"u64">; poolHiveAddr: ToField<Option<"address">>; moduleVersion: ToField<"u64"> }

export type LiquidityPoolReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<LiquidityPool<X, Y, Z, Curve>, LiquidityPoolFields<X, Y, Z, Curve>>;

export class LiquidityPool<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::LiquidityPool`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = LiquidityPool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::LiquidityPool<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = LiquidityPool.$isPhantom;

    readonly id: ToField<UID>; readonly coinXReserve: ToField<Balance<X>>; readonly coinXDecimals: ToField<"u8">; readonly coinYReserve: ToField<Balance<Y>>; readonly coinYDecimals: ToField<"u8">; readonly coinZReserve: ToField<Balance<Z>>; readonly coinZDecimals: ToField<"u8">; readonly lpSupply: ToField<Supply<ToPhantom<LP<X, Y, Z, Curve>>>>; readonly totalLpKrafted: ToField<"u64">; readonly curvedConfig: ToField<Option<CurvedPoolConfig>>; readonly stableConfig: ToField<Option<StablePoolConfig>>; readonly weightedConfig: ToField<Option<WeightedConfig>>; readonly collectedFeeX: ToField<Balance<X>>; readonly collectedFeeY: ToField<Balance<Y>>; readonly collectedFeeZ: ToField<Balance<Z>>; readonly feeInfo: ToField<PoolFeeInfo>; readonly isLocked: ToField<"bool">; readonly cumulativeXPriceY: ToField<"u256">; readonly cumulativeYPriceX: ToField<"u256">; readonly cumulativeXPriceZ: ToField<"u256">; readonly cumulativeZPriceX: ToField<"u256">; readonly cumulativeYPriceZ: ToField<"u256">; readonly cumulativeZPriceY: ToField<"u256">; readonly lastTimestamp: ToField<"u64">; readonly poolHiveAddr: ToField<Option<"address">>; readonly moduleVersion: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: LiquidityPoolFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(LiquidityPool.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::LiquidityPool<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.coinXReserve = fields.coinXReserve;; this.coinXDecimals = fields.coinXDecimals;; this.coinYReserve = fields.coinYReserve;; this.coinYDecimals = fields.coinYDecimals;; this.coinZReserve = fields.coinZReserve;; this.coinZDecimals = fields.coinZDecimals;; this.lpSupply = fields.lpSupply;; this.totalLpKrafted = fields.totalLpKrafted;; this.curvedConfig = fields.curvedConfig;; this.stableConfig = fields.stableConfig;; this.weightedConfig = fields.weightedConfig;; this.collectedFeeX = fields.collectedFeeX;; this.collectedFeeY = fields.collectedFeeY;; this.collectedFeeZ = fields.collectedFeeZ;; this.feeInfo = fields.feeInfo;; this.isLocked = fields.isLocked;; this.cumulativeXPriceY = fields.cumulativeXPriceY;; this.cumulativeYPriceX = fields.cumulativeYPriceX;; this.cumulativeXPriceZ = fields.cumulativeXPriceZ;; this.cumulativeZPriceX = fields.cumulativeZPriceX;; this.cumulativeYPriceZ = fields.cumulativeYPriceZ;; this.cumulativeZPriceY = fields.cumulativeZPriceY;; this.lastTimestamp = fields.lastTimestamp;; this.poolHiveAddr = fields.poolHiveAddr;; this.moduleVersion = fields.moduleVersion;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): LiquidityPoolReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: LiquidityPool.$typeName, fullTypeName: composeSuiType(LiquidityPool.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::LiquidityPool<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: LiquidityPool.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => LiquidityPool.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidityPool.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => LiquidityPool.fromBcs([X, Y, Z, Curve], data,), bcs: LiquidityPool.bcs, fromJSONField: (field: any) => LiquidityPool.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => LiquidityPool.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => LiquidityPool.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => LiquidityPool.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => LiquidityPool.fetch(client, [X, Y, Z, Curve], id,), new: (fields: LiquidityPoolFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new LiquidityPool([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return LiquidityPool.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<LiquidityPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(LiquidityPool.reified(X, Y, Z, Curve)); } static get p() { return LiquidityPool.phantom }

    static get bcs() {
        return bcs.struct("LiquidityPool", {

            id: UID.bcs, coin_x_reserve: Balance.bcs, coin_x_decimals: bcs.u8(), coin_y_reserve: Balance.bcs, coin_y_decimals: bcs.u8(), coin_z_reserve: Balance.bcs, coin_z_decimals: bcs.u8(), lp_supply: Supply.bcs, total_lp_krafted: bcs.u64(), curved_config: Option.bcs(CurvedPoolConfig.bcs), stable_config: Option.bcs(StablePoolConfig.bcs), weighted_config: Option.bcs(WeightedConfig.bcs), collected_fee_x: Balance.bcs, collected_fee_y: Balance.bcs, collected_fee_z: Balance.bcs, fee_info: PoolFeeInfo.bcs, is_locked: bcs.bool(), cumulative_x_price_y: bcs.u256(), cumulative_y_price_x: bcs.u256(), cumulative_x_price_z: bcs.u256(), cumulative_z_price_x: bcs.u256(), cumulative_y_price_z: bcs.u256(), cumulative_z_price_y: bcs.u256(), last_timestamp: bcs.u64(), pool_hive_addr: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), module_version: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): LiquidityPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return LiquidityPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(UID.reified(), fields.id), coinXReserve: decodeFromFields(Balance.reified(typeArgs[0]), fields.coin_x_reserve), coinXDecimals: decodeFromFields("u8", fields.coin_x_decimals), coinYReserve: decodeFromFields(Balance.reified(typeArgs[1]), fields.coin_y_reserve), coinYDecimals: decodeFromFields("u8", fields.coin_y_decimals), coinZReserve: decodeFromFields(Balance.reified(typeArgs[2]), fields.coin_z_reserve), coinZDecimals: decodeFromFields("u8", fields.coin_z_decimals), lpSupply: decodeFromFields(Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]))), fields.lp_supply), totalLpKrafted: decodeFromFields("u64", fields.total_lp_krafted), curvedConfig: decodeFromFields(Option.reified(CurvedPoolConfig.reified()), fields.curved_config), stableConfig: decodeFromFields(Option.reified(StablePoolConfig.reified()), fields.stable_config), weightedConfig: decodeFromFields(Option.reified(WeightedConfig.reified()), fields.weighted_config), collectedFeeX: decodeFromFields(Balance.reified(typeArgs[0]), fields.collected_fee_x), collectedFeeY: decodeFromFields(Balance.reified(typeArgs[1]), fields.collected_fee_y), collectedFeeZ: decodeFromFields(Balance.reified(typeArgs[2]), fields.collected_fee_z), feeInfo: decodeFromFields(PoolFeeInfo.reified(), fields.fee_info), isLocked: decodeFromFields("bool", fields.is_locked), cumulativeXPriceY: decodeFromFields("u256", fields.cumulative_x_price_y), cumulativeYPriceX: decodeFromFields("u256", fields.cumulative_y_price_x), cumulativeXPriceZ: decodeFromFields("u256", fields.cumulative_x_price_z), cumulativeZPriceX: decodeFromFields("u256", fields.cumulative_z_price_x), cumulativeYPriceZ: decodeFromFields("u256", fields.cumulative_y_price_z), cumulativeZPriceY: decodeFromFields("u256", fields.cumulative_z_price_y), lastTimestamp: decodeFromFields("u64", fields.last_timestamp), poolHiveAddr: decodeFromFields(Option.reified("address"), fields.pool_hive_addr), moduleVersion: decodeFromFields("u64", fields.module_version) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): LiquidityPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isLiquidityPool(item.type)) {
            throw new Error("not a LiquidityPool type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return LiquidityPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), coinXReserve: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.coin_x_reserve), coinXDecimals: decodeFromFieldsWithTypes("u8", item.fields.coin_x_decimals), coinYReserve: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.coin_y_reserve), coinYDecimals: decodeFromFieldsWithTypes("u8", item.fields.coin_y_decimals), coinZReserve: decodeFromFieldsWithTypes(Balance.reified(typeArgs[2]), item.fields.coin_z_reserve), coinZDecimals: decodeFromFieldsWithTypes("u8", item.fields.coin_z_decimals), lpSupply: decodeFromFieldsWithTypes(Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]))), item.fields.lp_supply), totalLpKrafted: decodeFromFieldsWithTypes("u64", item.fields.total_lp_krafted), curvedConfig: decodeFromFieldsWithTypes(Option.reified(CurvedPoolConfig.reified()), item.fields.curved_config), stableConfig: decodeFromFieldsWithTypes(Option.reified(StablePoolConfig.reified()), item.fields.stable_config), weightedConfig: decodeFromFieldsWithTypes(Option.reified(WeightedConfig.reified()), item.fields.weighted_config), collectedFeeX: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.collected_fee_x), collectedFeeY: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.collected_fee_y), collectedFeeZ: decodeFromFieldsWithTypes(Balance.reified(typeArgs[2]), item.fields.collected_fee_z), feeInfo: decodeFromFieldsWithTypes(PoolFeeInfo.reified(), item.fields.fee_info), isLocked: decodeFromFieldsWithTypes("bool", item.fields.is_locked), cumulativeXPriceY: decodeFromFieldsWithTypes("u256", item.fields.cumulative_x_price_y), cumulativeYPriceX: decodeFromFieldsWithTypes("u256", item.fields.cumulative_y_price_x), cumulativeXPriceZ: decodeFromFieldsWithTypes("u256", item.fields.cumulative_x_price_z), cumulativeZPriceX: decodeFromFieldsWithTypes("u256", item.fields.cumulative_z_price_x), cumulativeYPriceZ: decodeFromFieldsWithTypes("u256", item.fields.cumulative_y_price_z), cumulativeZPriceY: decodeFromFieldsWithTypes("u256", item.fields.cumulative_z_price_y), lastTimestamp: decodeFromFieldsWithTypes("u64", item.fields.last_timestamp), poolHiveAddr: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.pool_hive_addr), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): LiquidityPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return LiquidityPool.fromFields(typeArgs, LiquidityPool.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, coinXReserve: this.coinXReserve.toJSONField(), coinXDecimals: this.coinXDecimals, coinYReserve: this.coinYReserve.toJSONField(), coinYDecimals: this.coinYDecimals, coinZReserve: this.coinZReserve.toJSONField(), coinZDecimals: this.coinZDecimals, lpSupply: this.lpSupply.toJSONField(), totalLpKrafted: this.totalLpKrafted.toString(), curvedConfig: fieldToJSON<Option<CurvedPoolConfig>>(`${Option.$typeName}<${CurvedPoolConfig.$typeName}>`, this.curvedConfig), stableConfig: fieldToJSON<Option<StablePoolConfig>>(`${Option.$typeName}<${StablePoolConfig.$typeName}>`, this.stableConfig), weightedConfig: fieldToJSON<Option<WeightedConfig>>(`${Option.$typeName}<${WeightedConfig.$typeName}>`, this.weightedConfig), collectedFeeX: this.collectedFeeX.toJSONField(), collectedFeeY: this.collectedFeeY.toJSONField(), collectedFeeZ: this.collectedFeeZ.toJSONField(), feeInfo: this.feeInfo.toJSONField(), isLocked: this.isLocked, cumulativeXPriceY: this.cumulativeXPriceY.toString(), cumulativeYPriceX: this.cumulativeYPriceX.toString(), cumulativeXPriceZ: this.cumulativeXPriceZ.toString(), cumulativeZPriceX: this.cumulativeZPriceX.toString(), cumulativeYPriceZ: this.cumulativeYPriceZ.toString(), cumulativeZPriceY: this.cumulativeZPriceY.toString(), lastTimestamp: this.lastTimestamp.toString(), poolHiveAddr: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.poolHiveAddr), moduleVersion: this.moduleVersion.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): LiquidityPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return LiquidityPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(UID.reified(), field.id), coinXReserve: decodeFromJSONField(Balance.reified(typeArgs[0]), field.coinXReserve), coinXDecimals: decodeFromJSONField("u8", field.coinXDecimals), coinYReserve: decodeFromJSONField(Balance.reified(typeArgs[1]), field.coinYReserve), coinYDecimals: decodeFromJSONField("u8", field.coinYDecimals), coinZReserve: decodeFromJSONField(Balance.reified(typeArgs[2]), field.coinZReserve), coinZDecimals: decodeFromJSONField("u8", field.coinZDecimals), lpSupply: decodeFromJSONField(Supply.reified(reified.phantom(LP.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3]))), field.lpSupply), totalLpKrafted: decodeFromJSONField("u64", field.totalLpKrafted), curvedConfig: decodeFromJSONField(Option.reified(CurvedPoolConfig.reified()), field.curvedConfig), stableConfig: decodeFromJSONField(Option.reified(StablePoolConfig.reified()), field.stableConfig), weightedConfig: decodeFromJSONField(Option.reified(WeightedConfig.reified()), field.weightedConfig), collectedFeeX: decodeFromJSONField(Balance.reified(typeArgs[0]), field.collectedFeeX), collectedFeeY: decodeFromJSONField(Balance.reified(typeArgs[1]), field.collectedFeeY), collectedFeeZ: decodeFromJSONField(Balance.reified(typeArgs[2]), field.collectedFeeZ), feeInfo: decodeFromJSONField(PoolFeeInfo.reified(), field.feeInfo), isLocked: decodeFromJSONField("bool", field.isLocked), cumulativeXPriceY: decodeFromJSONField("u256", field.cumulativeXPriceY), cumulativeYPriceX: decodeFromJSONField("u256", field.cumulativeYPriceX), cumulativeXPriceZ: decodeFromJSONField("u256", field.cumulativeXPriceZ), cumulativeZPriceX: decodeFromJSONField("u256", field.cumulativeZPriceX), cumulativeYPriceZ: decodeFromJSONField("u256", field.cumulativeYPriceZ), cumulativeZPriceY: decodeFromJSONField("u256", field.cumulativeZPriceY), lastTimestamp: decodeFromJSONField("u64", field.lastTimestamp), poolHiveAddr: decodeFromJSONField(Option.reified("address"), field.poolHiveAddr), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): LiquidityPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== LiquidityPool.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(LiquidityPool.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return LiquidityPool.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): LiquidityPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLiquidityPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LiquidityPool object`); } return LiquidityPool.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): LiquidityPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidityPool(data.bcs.type)) { throw new Error(`object at is not a LiquidityPool object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return LiquidityPool.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return LiquidityPool.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<LiquidityPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LiquidityPool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidityPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LiquidityPool object`); }

        return LiquidityPool.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== LiquidityRemovedFromPool =============================== */

export function isLiquidityRemovedFromPool(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::LiquidityRemovedFromPool` + '<'); }

export interface LiquidityRemovedFromPoolFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<ID>; coinXAmount: ToField<"u64">; coinYAmount: ToField<"u64">; coinZAmount: ToField<"u64">; lpBurned: ToField<"u64">; totalXFee: ToField<"u64">; totalYFee: ToField<"u64">; totalZFee: ToField<"u64">; xHiveFee: ToField<"u64">; yHiveFee: ToField<"u64">; zHiveFee: ToField<"u64"> }

export type LiquidityRemovedFromPoolReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<LiquidityRemovedFromPool<X, Y, Z, Curve>, LiquidityRemovedFromPoolFields<X, Y, Z, Curve>>;

export class LiquidityRemovedFromPool<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::LiquidityRemovedFromPool`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = LiquidityRemovedFromPool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::LiquidityRemovedFromPool<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = LiquidityRemovedFromPool.$isPhantom;

    readonly id: ToField<ID>; readonly coinXAmount: ToField<"u64">; readonly coinYAmount: ToField<"u64">; readonly coinZAmount: ToField<"u64">; readonly lpBurned: ToField<"u64">; readonly totalXFee: ToField<"u64">; readonly totalYFee: ToField<"u64">; readonly totalZFee: ToField<"u64">; readonly xHiveFee: ToField<"u64">; readonly yHiveFee: ToField<"u64">; readonly zHiveFee: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: LiquidityRemovedFromPoolFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(LiquidityRemovedFromPool.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::LiquidityRemovedFromPool<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.coinXAmount = fields.coinXAmount;; this.coinYAmount = fields.coinYAmount;; this.coinZAmount = fields.coinZAmount;; this.lpBurned = fields.lpBurned;; this.totalXFee = fields.totalXFee;; this.totalYFee = fields.totalYFee;; this.totalZFee = fields.totalZFee;; this.xHiveFee = fields.xHiveFee;; this.yHiveFee = fields.yHiveFee;; this.zHiveFee = fields.zHiveFee;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): LiquidityRemovedFromPoolReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: LiquidityRemovedFromPool.$typeName, fullTypeName: composeSuiType(LiquidityRemovedFromPool.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::LiquidityRemovedFromPool<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: LiquidityRemovedFromPool.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => LiquidityRemovedFromPool.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => LiquidityRemovedFromPool.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => LiquidityRemovedFromPool.fromBcs([X, Y, Z, Curve], data,), bcs: LiquidityRemovedFromPool.bcs, fromJSONField: (field: any) => LiquidityRemovedFromPool.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => LiquidityRemovedFromPool.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => LiquidityRemovedFromPool.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => LiquidityRemovedFromPool.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => LiquidityRemovedFromPool.fetch(client, [X, Y, Z, Curve], id,), new: (fields: LiquidityRemovedFromPoolFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new LiquidityRemovedFromPool([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return LiquidityRemovedFromPool.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<LiquidityRemovedFromPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(LiquidityRemovedFromPool.reified(X, Y, Z, Curve)); } static get p() { return LiquidityRemovedFromPool.phantom }

    static get bcs() {
        return bcs.struct("LiquidityRemovedFromPool", {

            id: ID.bcs, coin_x_amount: bcs.u64(), coin_y_amount: bcs.u64(), coin_z_amount: bcs.u64(), lp_burned: bcs.u64(), total_x_fee: bcs.u64(), total_y_fee: bcs.u64(), total_z_fee: bcs.u64(), x_hive_fee: bcs.u64(), y_hive_fee: bcs.u64(), z_hive_fee: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): LiquidityRemovedFromPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return LiquidityRemovedFromPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(ID.reified(), fields.id), coinXAmount: decodeFromFields("u64", fields.coin_x_amount), coinYAmount: decodeFromFields("u64", fields.coin_y_amount), coinZAmount: decodeFromFields("u64", fields.coin_z_amount), lpBurned: decodeFromFields("u64", fields.lp_burned), totalXFee: decodeFromFields("u64", fields.total_x_fee), totalYFee: decodeFromFields("u64", fields.total_y_fee), totalZFee: decodeFromFields("u64", fields.total_z_fee), xHiveFee: decodeFromFields("u64", fields.x_hive_fee), yHiveFee: decodeFromFields("u64", fields.y_hive_fee), zHiveFee: decodeFromFields("u64", fields.z_hive_fee) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): LiquidityRemovedFromPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isLiquidityRemovedFromPool(item.type)) {
            throw new Error("not a LiquidityRemovedFromPool type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return LiquidityRemovedFromPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), coinXAmount: decodeFromFieldsWithTypes("u64", item.fields.coin_x_amount), coinYAmount: decodeFromFieldsWithTypes("u64", item.fields.coin_y_amount), coinZAmount: decodeFromFieldsWithTypes("u64", item.fields.coin_z_amount), lpBurned: decodeFromFieldsWithTypes("u64", item.fields.lp_burned), totalXFee: decodeFromFieldsWithTypes("u64", item.fields.total_x_fee), totalYFee: decodeFromFieldsWithTypes("u64", item.fields.total_y_fee), totalZFee: decodeFromFieldsWithTypes("u64", item.fields.total_z_fee), xHiveFee: decodeFromFieldsWithTypes("u64", item.fields.x_hive_fee), yHiveFee: decodeFromFieldsWithTypes("u64", item.fields.y_hive_fee), zHiveFee: decodeFromFieldsWithTypes("u64", item.fields.z_hive_fee) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): LiquidityRemovedFromPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return LiquidityRemovedFromPool.fromFields(typeArgs, LiquidityRemovedFromPool.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, coinXAmount: this.coinXAmount.toString(), coinYAmount: this.coinYAmount.toString(), coinZAmount: this.coinZAmount.toString(), lpBurned: this.lpBurned.toString(), totalXFee: this.totalXFee.toString(), totalYFee: this.totalYFee.toString(), totalZFee: this.totalZFee.toString(), xHiveFee: this.xHiveFee.toString(), yHiveFee: this.yHiveFee.toString(), zHiveFee: this.zHiveFee.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): LiquidityRemovedFromPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return LiquidityRemovedFromPool.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(ID.reified(), field.id), coinXAmount: decodeFromJSONField("u64", field.coinXAmount), coinYAmount: decodeFromJSONField("u64", field.coinYAmount), coinZAmount: decodeFromJSONField("u64", field.coinZAmount), lpBurned: decodeFromJSONField("u64", field.lpBurned), totalXFee: decodeFromJSONField("u64", field.totalXFee), totalYFee: decodeFromJSONField("u64", field.totalYFee), totalZFee: decodeFromJSONField("u64", field.totalZFee), xHiveFee: decodeFromJSONField("u64", field.xHiveFee), yHiveFee: decodeFromJSONField("u64", field.yHiveFee), zHiveFee: decodeFromJSONField("u64", field.zHiveFee) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): LiquidityRemovedFromPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== LiquidityRemovedFromPool.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(LiquidityRemovedFromPool.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return LiquidityRemovedFromPool.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): LiquidityRemovedFromPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLiquidityRemovedFromPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LiquidityRemovedFromPool object`); } return LiquidityRemovedFromPool.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): LiquidityRemovedFromPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidityRemovedFromPool(data.bcs.type)) { throw new Error(`object at is not a LiquidityRemovedFromPool object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return LiquidityRemovedFromPool.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return LiquidityRemovedFromPool.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<LiquidityRemovedFromPool<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LiquidityRemovedFromPool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLiquidityRemovedFromPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LiquidityRemovedFromPool object`); }

        return LiquidityRemovedFromPool.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== LpBurntForever =============================== */

export function isLpBurntForever(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::three_pool::LpBurntForever`; }

export interface LpBurntForeverFields { poolAddr: ToField<"address">; lpBurned: ToField<"u64"> }

export type LpBurntForeverReified = Reified<LpBurntForever, LpBurntForeverFields>;

export class LpBurntForever implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::LpBurntForever`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = LpBurntForever.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::LpBurntForever`; readonly $typeArgs: []; readonly $isPhantom = LpBurntForever.$isPhantom;

    readonly poolAddr: ToField<"address">; readonly lpBurned: ToField<"u64">

    private constructor(typeArgs: [], fields: LpBurntForeverFields,) {
        this.$fullTypeName = composeSuiType(LpBurntForever.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::LpBurntForever`; this.$typeArgs = typeArgs;

        this.poolAddr = fields.poolAddr;; this.lpBurned = fields.lpBurned;
    }

    static reified(): LpBurntForeverReified { return { typeName: LpBurntForever.$typeName, fullTypeName: composeSuiType(LpBurntForever.$typeName, ...[]) as `${typeof PKG_V1}::three_pool::LpBurntForever`, typeArgs: [] as [], isPhantom: LpBurntForever.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LpBurntForever.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => LpBurntForever.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => LpBurntForever.fromBcs(data,), bcs: LpBurntForever.bcs, fromJSONField: (field: any) => LpBurntForever.fromJSONField(field,), fromJSON: (json: Record<string, any>) => LpBurntForever.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => LpBurntForever.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => LpBurntForever.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => LpBurntForever.fetch(client, id,), new: (fields: LpBurntForeverFields,) => { return new LpBurntForever([], fields) }, kind: "StructClassReified", } }

    static get r() { return LpBurntForever.reified() }

    static phantom(): PhantomReified<ToTypeStr<LpBurntForever>> { return phantom(LpBurntForever.reified()); } static get p() { return LpBurntForever.phantom() }

    static get bcs() {
        return bcs.struct("LpBurntForever", {

            pool_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), lp_burned: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): LpBurntForever { return LpBurntForever.reified().new({ poolAddr: decodeFromFields("address", fields.pool_addr), lpBurned: decodeFromFields("u64", fields.lp_burned) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): LpBurntForever {
        if (!isLpBurntForever(item.type)) {
            throw new Error("not a LpBurntForever type");

        }

        return LpBurntForever.reified().new({ poolAddr: decodeFromFieldsWithTypes("address", item.fields.pool_addr), lpBurned: decodeFromFieldsWithTypes("u64", item.fields.lp_burned) })
    }

    static fromBcs(data: Uint8Array): LpBurntForever { return LpBurntForever.fromFields(LpBurntForever.bcs.parse(data)) }

    toJSONField() {
        return {

            poolAddr: this.poolAddr, lpBurned: this.lpBurned.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): LpBurntForever { return LpBurntForever.reified().new({ poolAddr: decodeFromJSONField("address", field.poolAddr), lpBurned: decodeFromJSONField("u64", field.lpBurned) }) }

    static fromJSON(json: Record<string, any>): LpBurntForever {
        if (json.$typeName !== LpBurntForever.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return LpBurntForever.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): LpBurntForever { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLpBurntForever(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LpBurntForever object`); } return LpBurntForever.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): LpBurntForever {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLpBurntForever(data.bcs.type)) { throw new Error(`object at is not a LpBurntForever object`); }

            return LpBurntForever.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return LpBurntForever.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<LpBurntForever> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LpBurntForever object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLpBurntForever(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LpBurntForever object`); }

        return LpBurntForever.fromSuiObjectData(res.data);
    }

}

/* ============================== NewPoolCreated =============================== */

export function isNewPoolCreated(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::NewPoolCreated` + '<'); }

export interface NewPoolCreatedFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { poolId: ToField<ID> }

export type NewPoolCreatedReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<NewPoolCreated<X, Y, Z, Curve>, NewPoolCreatedFields<X, Y, Z, Curve>>;

export class NewPoolCreated<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::NewPoolCreated`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = NewPoolCreated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::NewPoolCreated<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = NewPoolCreated.$isPhantom;

    readonly poolId: ToField<ID>

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: NewPoolCreatedFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(NewPoolCreated.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::NewPoolCreated<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.poolId = fields.poolId;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): NewPoolCreatedReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: NewPoolCreated.$typeName, fullTypeName: composeSuiType(NewPoolCreated.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::NewPoolCreated<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: NewPoolCreated.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => NewPoolCreated.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => NewPoolCreated.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => NewPoolCreated.fromBcs([X, Y, Z, Curve], data,), bcs: NewPoolCreated.bcs, fromJSONField: (field: any) => NewPoolCreated.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => NewPoolCreated.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => NewPoolCreated.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => NewPoolCreated.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => NewPoolCreated.fetch(client, [X, Y, Z, Curve], id,), new: (fields: NewPoolCreatedFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new NewPoolCreated([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return NewPoolCreated.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<NewPoolCreated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(NewPoolCreated.reified(X, Y, Z, Curve)); } static get p() { return NewPoolCreated.phantom }

    static get bcs() {
        return bcs.struct("NewPoolCreated", {

            pool_id: ID.bcs

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): NewPoolCreated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return NewPoolCreated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ poolId: decodeFromFields(ID.reified(), fields.pool_id) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): NewPoolCreated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isNewPoolCreated(item.type)) {
            throw new Error("not a NewPoolCreated type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return NewPoolCreated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): NewPoolCreated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return NewPoolCreated.fromFields(typeArgs, NewPoolCreated.bcs.parse(data)) }

    toJSONField() {
        return {

            poolId: this.poolId,

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): NewPoolCreated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return NewPoolCreated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ poolId: decodeFromJSONField(ID.reified(), field.poolId) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): NewPoolCreated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== NewPoolCreated.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(NewPoolCreated.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return NewPoolCreated.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): NewPoolCreated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewPoolCreated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewPoolCreated object`); } return NewPoolCreated.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): NewPoolCreated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewPoolCreated(data.bcs.type)) { throw new Error(`object at is not a NewPoolCreated object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return NewPoolCreated.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return NewPoolCreated.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<NewPoolCreated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewPoolCreated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewPoolCreated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewPoolCreated object`); }

        return NewPoolCreated.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== PoolFeeInfo =============================== */

export function isPoolFeeInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::three_pool::PoolFeeInfo`; }

export interface PoolFeeInfoFields { totalFeeBps: ToField<"u64">; beesFeePct: ToField<"u64"> }

export type PoolFeeInfoReified = Reified<PoolFeeInfo, PoolFeeInfoFields>;

export class PoolFeeInfo implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::PoolFeeInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = PoolFeeInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::PoolFeeInfo`; readonly $typeArgs: []; readonly $isPhantom = PoolFeeInfo.$isPhantom;

    readonly totalFeeBps: ToField<"u64">; readonly beesFeePct: ToField<"u64">

    private constructor(typeArgs: [], fields: PoolFeeInfoFields,) {
        this.$fullTypeName = composeSuiType(PoolFeeInfo.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::PoolFeeInfo`; this.$typeArgs = typeArgs;

        this.totalFeeBps = fields.totalFeeBps;; this.beesFeePct = fields.beesFeePct;
    }

    static reified(): PoolFeeInfoReified { return { typeName: PoolFeeInfo.$typeName, fullTypeName: composeSuiType(PoolFeeInfo.$typeName, ...[]) as `${typeof PKG_V1}::three_pool::PoolFeeInfo`, typeArgs: [] as [], isPhantom: PoolFeeInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolFeeInfo.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolFeeInfo.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => PoolFeeInfo.fromBcs(data,), bcs: PoolFeeInfo.bcs, fromJSONField: (field: any) => PoolFeeInfo.fromJSONField(field,), fromJSON: (json: Record<string, any>) => PoolFeeInfo.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => PoolFeeInfo.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => PoolFeeInfo.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => PoolFeeInfo.fetch(client, id,), new: (fields: PoolFeeInfoFields,) => { return new PoolFeeInfo([], fields) }, kind: "StructClassReified", } }

    static get r() { return PoolFeeInfo.reified() }

    static phantom(): PhantomReified<ToTypeStr<PoolFeeInfo>> { return phantom(PoolFeeInfo.reified()); } static get p() { return PoolFeeInfo.phantom() }

    static get bcs() {
        return bcs.struct("PoolFeeInfo", {

            total_fee_bps: bcs.u64(), bees_fee_pct: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): PoolFeeInfo { return PoolFeeInfo.reified().new({ totalFeeBps: decodeFromFields("u64", fields.total_fee_bps), beesFeePct: decodeFromFields("u64", fields.bees_fee_pct) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): PoolFeeInfo {
        if (!isPoolFeeInfo(item.type)) {
            throw new Error("not a PoolFeeInfo type");

        }

        return PoolFeeInfo.reified().new({ totalFeeBps: decodeFromFieldsWithTypes("u64", item.fields.total_fee_bps), beesFeePct: decodeFromFieldsWithTypes("u64", item.fields.bees_fee_pct) })
    }

    static fromBcs(data: Uint8Array): PoolFeeInfo { return PoolFeeInfo.fromFields(PoolFeeInfo.bcs.parse(data)) }

    toJSONField() {
        return {

            totalFeeBps: this.totalFeeBps.toString(), beesFeePct: this.beesFeePct.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): PoolFeeInfo { return PoolFeeInfo.reified().new({ totalFeeBps: decodeFromJSONField("u64", field.totalFeeBps), beesFeePct: decodeFromJSONField("u64", field.beesFeePct) }) }

    static fromJSON(json: Record<string, any>): PoolFeeInfo {
        if (json.$typeName !== PoolFeeInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return PoolFeeInfo.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): PoolFeeInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolFeeInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolFeeInfo object`); } return PoolFeeInfo.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): PoolFeeInfo {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolFeeInfo(data.bcs.type)) { throw new Error(`object at is not a PoolFeeInfo object`); }

            return PoolFeeInfo.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return PoolFeeInfo.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PoolFeeInfo> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolFeeInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolFeeInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolFeeInfo object`); }

        return PoolFeeInfo.fromSuiObjectData(res.data);
    }

}

/* ============================== PoolFeeUpdated =============================== */

export function isPoolFeeUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::three_pool::PoolFeeUpdated`; }

export interface PoolFeeUpdatedFields { id: ToField<ID>; totalFeeBps: ToField<"u64">; beesFeePct: ToField<"u64"> }

export type PoolFeeUpdatedReified = Reified<PoolFeeUpdated, PoolFeeUpdatedFields>;

export class PoolFeeUpdated implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::PoolFeeUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = PoolFeeUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::PoolFeeUpdated`; readonly $typeArgs: []; readonly $isPhantom = PoolFeeUpdated.$isPhantom;

    readonly id: ToField<ID>; readonly totalFeeBps: ToField<"u64">; readonly beesFeePct: ToField<"u64">

    private constructor(typeArgs: [], fields: PoolFeeUpdatedFields,) {
        this.$fullTypeName = composeSuiType(PoolFeeUpdated.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::PoolFeeUpdated`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.totalFeeBps = fields.totalFeeBps;; this.beesFeePct = fields.beesFeePct;
    }

    static reified(): PoolFeeUpdatedReified { return { typeName: PoolFeeUpdated.$typeName, fullTypeName: composeSuiType(PoolFeeUpdated.$typeName, ...[]) as `${typeof PKG_V1}::three_pool::PoolFeeUpdated`, typeArgs: [] as [], isPhantom: PoolFeeUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolFeeUpdated.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolFeeUpdated.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => PoolFeeUpdated.fromBcs(data,), bcs: PoolFeeUpdated.bcs, fromJSONField: (field: any) => PoolFeeUpdated.fromJSONField(field,), fromJSON: (json: Record<string, any>) => PoolFeeUpdated.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => PoolFeeUpdated.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => PoolFeeUpdated.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => PoolFeeUpdated.fetch(client, id,), new: (fields: PoolFeeUpdatedFields,) => { return new PoolFeeUpdated([], fields) }, kind: "StructClassReified", } }

    static get r() { return PoolFeeUpdated.reified() }

    static phantom(): PhantomReified<ToTypeStr<PoolFeeUpdated>> { return phantom(PoolFeeUpdated.reified()); } static get p() { return PoolFeeUpdated.phantom() }

    static get bcs() {
        return bcs.struct("PoolFeeUpdated", {

            id: ID.bcs, total_fee_bps: bcs.u64(), bees_fee_pct: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): PoolFeeUpdated { return PoolFeeUpdated.reified().new({ id: decodeFromFields(ID.reified(), fields.id), totalFeeBps: decodeFromFields("u64", fields.total_fee_bps), beesFeePct: decodeFromFields("u64", fields.bees_fee_pct) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): PoolFeeUpdated {
        if (!isPoolFeeUpdated(item.type)) {
            throw new Error("not a PoolFeeUpdated type");

        }

        return PoolFeeUpdated.reified().new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), totalFeeBps: decodeFromFieldsWithTypes("u64", item.fields.total_fee_bps), beesFeePct: decodeFromFieldsWithTypes("u64", item.fields.bees_fee_pct) })
    }

    static fromBcs(data: Uint8Array): PoolFeeUpdated { return PoolFeeUpdated.fromFields(PoolFeeUpdated.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, totalFeeBps: this.totalFeeBps.toString(), beesFeePct: this.beesFeePct.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): PoolFeeUpdated { return PoolFeeUpdated.reified().new({ id: decodeFromJSONField(ID.reified(), field.id), totalFeeBps: decodeFromJSONField("u64", field.totalFeeBps), beesFeePct: decodeFromJSONField("u64", field.beesFeePct) }) }

    static fromJSON(json: Record<string, any>): PoolFeeUpdated {
        if (json.$typeName !== PoolFeeUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return PoolFeeUpdated.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): PoolFeeUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolFeeUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolFeeUpdated object`); } return PoolFeeUpdated.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): PoolFeeUpdated {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolFeeUpdated(data.bcs.type)) { throw new Error(`object at is not a PoolFeeUpdated object`); }

            return PoolFeeUpdated.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return PoolFeeUpdated.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PoolFeeUpdated> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolFeeUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolFeeUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolFeeUpdated object`); }

        return PoolFeeUpdated.fromSuiObjectData(res.data);
    }

}

/* ============================== PoolRegistry =============================== */

export function isPoolRegistry(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::three_pool::PoolRegistry`; }

export interface PoolRegistryFields { id: ToField<UID>; kraftFee: ToField<"u64">; kraftedPoolsList: ToField<LinkedTable<PoolRegistryItem, ToPhantom<ID>>>; feeClaimCap: ToField<ThreeAmmFlowAccess>; moduleVersion: ToField<"u64"> }

export type PoolRegistryReified = Reified<PoolRegistry, PoolRegistryFields>;

export class PoolRegistry implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::PoolRegistry`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = PoolRegistry.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::PoolRegistry`; readonly $typeArgs: []; readonly $isPhantom = PoolRegistry.$isPhantom;

    readonly id: ToField<UID>; readonly kraftFee: ToField<"u64">; readonly kraftedPoolsList: ToField<LinkedTable<PoolRegistryItem, ToPhantom<ID>>>; readonly feeClaimCap: ToField<ThreeAmmFlowAccess>; readonly moduleVersion: ToField<"u64">

    private constructor(typeArgs: [], fields: PoolRegistryFields,) {
        this.$fullTypeName = composeSuiType(PoolRegistry.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::PoolRegistry`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.kraftFee = fields.kraftFee;; this.kraftedPoolsList = fields.kraftedPoolsList;; this.feeClaimCap = fields.feeClaimCap;; this.moduleVersion = fields.moduleVersion;
    }

    static reified(): PoolRegistryReified { return { typeName: PoolRegistry.$typeName, fullTypeName: composeSuiType(PoolRegistry.$typeName, ...[]) as `${typeof PKG_V1}::three_pool::PoolRegistry`, typeArgs: [] as [], isPhantom: PoolRegistry.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolRegistry.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolRegistry.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => PoolRegistry.fromBcs(data,), bcs: PoolRegistry.bcs, fromJSONField: (field: any) => PoolRegistry.fromJSONField(field,), fromJSON: (json: Record<string, any>) => PoolRegistry.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => PoolRegistry.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => PoolRegistry.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => PoolRegistry.fetch(client, id,), new: (fields: PoolRegistryFields,) => { return new PoolRegistry([], fields) }, kind: "StructClassReified", } }

    static get r() { return PoolRegistry.reified() }

    static phantom(): PhantomReified<ToTypeStr<PoolRegistry>> { return phantom(PoolRegistry.reified()); } static get p() { return PoolRegistry.phantom() }

    static get bcs() {
        return bcs.struct("PoolRegistry", {

            id: UID.bcs, kraft_fee: bcs.u64(), krafted_pools_list: LinkedTable.bcs(PoolRegistryItem.bcs), fee_claim_cap: ThreeAmmFlowAccess.bcs, module_version: bcs.u64()

        })
    };

    static fromFields(fields: Record<string, any>): PoolRegistry { return PoolRegistry.reified().new({ id: decodeFromFields(UID.reified(), fields.id), kraftFee: decodeFromFields("u64", fields.kraft_fee), kraftedPoolsList: decodeFromFields(LinkedTable.reified(PoolRegistryItem.reified(), reified.phantom(ID.reified())), fields.krafted_pools_list), feeClaimCap: decodeFromFields(ThreeAmmFlowAccess.reified(), fields.fee_claim_cap), moduleVersion: decodeFromFields("u64", fields.module_version) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): PoolRegistry {
        if (!isPoolRegistry(item.type)) {
            throw new Error("not a PoolRegistry type");

        }

        return PoolRegistry.reified().new({ id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), kraftFee: decodeFromFieldsWithTypes("u64", item.fields.kraft_fee), kraftedPoolsList: decodeFromFieldsWithTypes(LinkedTable.reified(PoolRegistryItem.reified(), reified.phantom(ID.reified())), item.fields.krafted_pools_list), feeClaimCap: decodeFromFieldsWithTypes(ThreeAmmFlowAccess.reified(), item.fields.fee_claim_cap), moduleVersion: decodeFromFieldsWithTypes("u64", item.fields.module_version) })
    }

    static fromBcs(data: Uint8Array): PoolRegistry { return PoolRegistry.fromFields(PoolRegistry.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, kraftFee: this.kraftFee.toString(), kraftedPoolsList: this.kraftedPoolsList.toJSONField(), feeClaimCap: this.feeClaimCap.toJSONField(), moduleVersion: this.moduleVersion.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): PoolRegistry { return PoolRegistry.reified().new({ id: decodeFromJSONField(UID.reified(), field.id), kraftFee: decodeFromJSONField("u64", field.kraftFee), kraftedPoolsList: decodeFromJSONField(LinkedTable.reified(PoolRegistryItem.reified(), reified.phantom(ID.reified())), field.kraftedPoolsList), feeClaimCap: decodeFromJSONField(ThreeAmmFlowAccess.reified(), field.feeClaimCap), moduleVersion: decodeFromJSONField("u64", field.moduleVersion) }) }

    static fromJSON(json: Record<string, any>): PoolRegistry {
        if (json.$typeName !== PoolRegistry.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return PoolRegistry.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): PoolRegistry { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolRegistry(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolRegistry object`); } return PoolRegistry.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): PoolRegistry {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolRegistry(data.bcs.type)) { throw new Error(`object at is not a PoolRegistry object`); }

            return PoolRegistry.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return PoolRegistry.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PoolRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolRegistry object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolRegistry(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolRegistry object`); }

        return PoolRegistry.fromSuiObjectData(res.data);
    }

}

/* ============================== PoolRegistryItem =============================== */

export function isPoolRegistryItem(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::three_pool::PoolRegistryItem`; }

export interface PoolRegistryItemFields { a: ToField<TypeName>; b: ToField<TypeName>; c: ToField<TypeName>; curve: ToField<TypeName> }

export type PoolRegistryItemReified = Reified<PoolRegistryItem, PoolRegistryItemFields>;

export class PoolRegistryItem implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::PoolRegistryItem`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

    readonly $typeName = PoolRegistryItem.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::PoolRegistryItem`; readonly $typeArgs: []; readonly $isPhantom = PoolRegistryItem.$isPhantom;

    readonly a: ToField<TypeName>; readonly b: ToField<TypeName>; readonly c: ToField<TypeName>; readonly curve: ToField<TypeName>

    private constructor(typeArgs: [], fields: PoolRegistryItemFields,) {
        this.$fullTypeName = composeSuiType(PoolRegistryItem.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::PoolRegistryItem`; this.$typeArgs = typeArgs;

        this.a = fields.a;; this.b = fields.b;; this.c = fields.c;; this.curve = fields.curve;
    }

    static reified(): PoolRegistryItemReified { return { typeName: PoolRegistryItem.$typeName, fullTypeName: composeSuiType(PoolRegistryItem.$typeName, ...[]) as `${typeof PKG_V1}::three_pool::PoolRegistryItem`, typeArgs: [] as [], isPhantom: PoolRegistryItem.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolRegistryItem.fromFields(fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolRegistryItem.fromFieldsWithTypes(item,), fromBcs: (data: Uint8Array) => PoolRegistryItem.fromBcs(data,), bcs: PoolRegistryItem.bcs, fromJSONField: (field: any) => PoolRegistryItem.fromJSONField(field,), fromJSON: (json: Record<string, any>) => PoolRegistryItem.fromJSON(json,), fromSuiParsedData: (content: SuiParsedData) => PoolRegistryItem.fromSuiParsedData(content,), fromSuiObjectData: (content: SuiObjectData) => PoolRegistryItem.fromSuiObjectData(content,), fetch: async (client: SuiClient, id: string) => PoolRegistryItem.fetch(client, id,), new: (fields: PoolRegistryItemFields,) => { return new PoolRegistryItem([], fields) }, kind: "StructClassReified", } }

    static get r() { return PoolRegistryItem.reified() }

    static phantom(): PhantomReified<ToTypeStr<PoolRegistryItem>> { return phantom(PoolRegistryItem.reified()); } static get p() { return PoolRegistryItem.phantom() }

    static get bcs() {
        return bcs.struct("PoolRegistryItem", {

            a: TypeName.bcs, b: TypeName.bcs, c: TypeName.bcs, curve: TypeName.bcs

        })
    };

    static fromFields(fields: Record<string, any>): PoolRegistryItem { return PoolRegistryItem.reified().new({ a: decodeFromFields(TypeName.reified(), fields.a), b: decodeFromFields(TypeName.reified(), fields.b), c: decodeFromFields(TypeName.reified(), fields.c), curve: decodeFromFields(TypeName.reified(), fields.curve) }) }

    static fromFieldsWithTypes(item: FieldsWithTypes): PoolRegistryItem {
        if (!isPoolRegistryItem(item.type)) {
            throw new Error("not a PoolRegistryItem type");

        }

        return PoolRegistryItem.reified().new({ a: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.a), b: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.b), c: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.c), curve: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.curve) })
    }

    static fromBcs(data: Uint8Array): PoolRegistryItem { return PoolRegistryItem.fromFields(PoolRegistryItem.bcs.parse(data)) }

    toJSONField() {
        return {

            a: this.a.toJSONField(), b: this.b.toJSONField(), c: this.c.toJSONField(), curve: this.curve.toJSONField(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField(field: any): PoolRegistryItem { return PoolRegistryItem.reified().new({ a: decodeFromJSONField(TypeName.reified(), field.a), b: decodeFromJSONField(TypeName.reified(), field.b), c: decodeFromJSONField(TypeName.reified(), field.c), curve: decodeFromJSONField(TypeName.reified(), field.curve) }) }

    static fromJSON(json: Record<string, any>): PoolRegistryItem {
        if (json.$typeName !== PoolRegistryItem.$typeName) { throw new Error("not a WithTwoGenerics json object") };

        return PoolRegistryItem.fromJSONField(json,)
    }

    static fromSuiParsedData(content: SuiParsedData): PoolRegistryItem { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolRegistryItem(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolRegistryItem object`); } return PoolRegistryItem.fromFieldsWithTypes(content); }

    static fromSuiObjectData(data: SuiObjectData): PoolRegistryItem {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPoolRegistryItem(data.bcs.type)) { throw new Error(`object at is not a PoolRegistryItem object`); }

            return PoolRegistryItem.fromBcs(fromB64(data.bcs.bcsBytes));
        } if (data.content) { return PoolRegistryItem.fromSuiParsedData(data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<PoolRegistryItem> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolRegistryItem object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolRegistryItem(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolRegistryItem object`); }

        return PoolRegistryItem.fromSuiObjectData(res.data);
    }

}

/* ============================== StableConfigUpdated =============================== */

export function isStableConfigUpdated(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::StableConfigUpdated` + '<'); }

export interface StableConfigUpdatedFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<ID>; initAmpTime: ToField<"u64">; nextAmp: ToField<"u64">; nextAmpTime: ToField<"u64"> }

export type StableConfigUpdatedReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<StableConfigUpdated<X, Y, Z, Curve>, StableConfigUpdatedFields<X, Y, Z, Curve>>;

export class StableConfigUpdated<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::StableConfigUpdated`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = StableConfigUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::StableConfigUpdated<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = StableConfigUpdated.$isPhantom;

    readonly id: ToField<ID>; readonly initAmpTime: ToField<"u64">; readonly nextAmp: ToField<"u64">; readonly nextAmpTime: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: StableConfigUpdatedFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(StableConfigUpdated.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::StableConfigUpdated<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.initAmpTime = fields.initAmpTime;; this.nextAmp = fields.nextAmp;; this.nextAmpTime = fields.nextAmpTime;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): StableConfigUpdatedReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: StableConfigUpdated.$typeName, fullTypeName: composeSuiType(StableConfigUpdated.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::StableConfigUpdated<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: StableConfigUpdated.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => StableConfigUpdated.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => StableConfigUpdated.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => StableConfigUpdated.fromBcs([X, Y, Z, Curve], data,), bcs: StableConfigUpdated.bcs, fromJSONField: (field: any) => StableConfigUpdated.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => StableConfigUpdated.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => StableConfigUpdated.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => StableConfigUpdated.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => StableConfigUpdated.fetch(client, [X, Y, Z, Curve], id,), new: (fields: StableConfigUpdatedFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new StableConfigUpdated([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return StableConfigUpdated.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<StableConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(StableConfigUpdated.reified(X, Y, Z, Curve)); } static get p() { return StableConfigUpdated.phantom }

    static get bcs() {
        return bcs.struct("StableConfigUpdated", {

            id: ID.bcs, init_amp_time: bcs.u64(), next_amp: bcs.u64(), next_amp_time: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): StableConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return StableConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(ID.reified(), fields.id), initAmpTime: decodeFromFields("u64", fields.init_amp_time), nextAmp: decodeFromFields("u64", fields.next_amp), nextAmpTime: decodeFromFields("u64", fields.next_amp_time) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): StableConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isStableConfigUpdated(item.type)) {
            throw new Error("not a StableConfigUpdated type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return StableConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), initAmpTime: decodeFromFieldsWithTypes("u64", item.fields.init_amp_time), nextAmp: decodeFromFieldsWithTypes("u64", item.fields.next_amp), nextAmpTime: decodeFromFieldsWithTypes("u64", item.fields.next_amp_time) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): StableConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return StableConfigUpdated.fromFields(typeArgs, StableConfigUpdated.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, initAmpTime: this.initAmpTime.toString(), nextAmp: this.nextAmp.toString(), nextAmpTime: this.nextAmpTime.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): StableConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return StableConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(ID.reified(), field.id), initAmpTime: decodeFromJSONField("u64", field.initAmpTime), nextAmp: decodeFromJSONField("u64", field.nextAmp), nextAmpTime: decodeFromJSONField("u64", field.nextAmpTime) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): StableConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== StableConfigUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(StableConfigUpdated.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return StableConfigUpdated.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): StableConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStableConfigUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StableConfigUpdated object`); } return StableConfigUpdated.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): StableConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStableConfigUpdated(data.bcs.type)) { throw new Error(`object at is not a StableConfigUpdated object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return StableConfigUpdated.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return StableConfigUpdated.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<StableConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StableConfigUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStableConfigUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StableConfigUpdated object`); }

        return StableConfigUpdated.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== TokensSwapped =============================== */

export function isTokensSwapped(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::TokensSwapped` + '<'); }

export interface TokensSwappedFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<ID>; xOfferAmt: ToField<"u64">; yOfferAmt: ToField<"u64">; zOfferAmt: ToField<"u64">; xReturnAmt: ToField<"u64">; yReturnAmt: ToField<"u64">; zReturnAmt: ToField<"u64">; xTotalFee: ToField<"u64">; yTotalFee: ToField<"u64">; zTotalFee: ToField<"u64">; xHiveFee: ToField<"u64">; yHiveFee: ToField<"u64">; zHiveFee: ToField<"u64"> }

export type TokensSwappedReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<TokensSwapped<X, Y, Z, Curve>, TokensSwappedFields<X, Y, Z, Curve>>;

export class TokensSwapped<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::TokensSwapped`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = TokensSwapped.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::TokensSwapped<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = TokensSwapped.$isPhantom;

    readonly id: ToField<ID>; readonly xOfferAmt: ToField<"u64">; readonly yOfferAmt: ToField<"u64">; readonly zOfferAmt: ToField<"u64">; readonly xReturnAmt: ToField<"u64">; readonly yReturnAmt: ToField<"u64">; readonly zReturnAmt: ToField<"u64">; readonly xTotalFee: ToField<"u64">; readonly yTotalFee: ToField<"u64">; readonly zTotalFee: ToField<"u64">; readonly xHiveFee: ToField<"u64">; readonly yHiveFee: ToField<"u64">; readonly zHiveFee: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: TokensSwappedFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(TokensSwapped.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::TokensSwapped<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.xOfferAmt = fields.xOfferAmt;; this.yOfferAmt = fields.yOfferAmt;; this.zOfferAmt = fields.zOfferAmt;; this.xReturnAmt = fields.xReturnAmt;; this.yReturnAmt = fields.yReturnAmt;; this.zReturnAmt = fields.zReturnAmt;; this.xTotalFee = fields.xTotalFee;; this.yTotalFee = fields.yTotalFee;; this.zTotalFee = fields.zTotalFee;; this.xHiveFee = fields.xHiveFee;; this.yHiveFee = fields.yHiveFee;; this.zHiveFee = fields.zHiveFee;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): TokensSwappedReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: TokensSwapped.$typeName, fullTypeName: composeSuiType(TokensSwapped.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::TokensSwapped<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: TokensSwapped.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => TokensSwapped.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => TokensSwapped.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => TokensSwapped.fromBcs([X, Y, Z, Curve], data,), bcs: TokensSwapped.bcs, fromJSONField: (field: any) => TokensSwapped.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => TokensSwapped.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => TokensSwapped.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => TokensSwapped.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => TokensSwapped.fetch(client, [X, Y, Z, Curve], id,), new: (fields: TokensSwappedFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new TokensSwapped([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return TokensSwapped.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<TokensSwapped<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(TokensSwapped.reified(X, Y, Z, Curve)); } static get p() { return TokensSwapped.phantom }

    static get bcs() {
        return bcs.struct("TokensSwapped", {

            id: ID.bcs, x_offer_amt: bcs.u64(), y_offer_amt: bcs.u64(), z_offer_amt: bcs.u64(), x_return_amt: bcs.u64(), y_return_amt: bcs.u64(), z_return_amt: bcs.u64(), x_total_fee: bcs.u64(), y_total_fee: bcs.u64(), z_total_fee: bcs.u64(), x_hive_fee: bcs.u64(), y_hive_fee: bcs.u64(), z_hive_fee: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): TokensSwapped<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return TokensSwapped.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(ID.reified(), fields.id), xOfferAmt: decodeFromFields("u64", fields.x_offer_amt), yOfferAmt: decodeFromFields("u64", fields.y_offer_amt), zOfferAmt: decodeFromFields("u64", fields.z_offer_amt), xReturnAmt: decodeFromFields("u64", fields.x_return_amt), yReturnAmt: decodeFromFields("u64", fields.y_return_amt), zReturnAmt: decodeFromFields("u64", fields.z_return_amt), xTotalFee: decodeFromFields("u64", fields.x_total_fee), yTotalFee: decodeFromFields("u64", fields.y_total_fee), zTotalFee: decodeFromFields("u64", fields.z_total_fee), xHiveFee: decodeFromFields("u64", fields.x_hive_fee), yHiveFee: decodeFromFields("u64", fields.y_hive_fee), zHiveFee: decodeFromFields("u64", fields.z_hive_fee) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): TokensSwapped<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isTokensSwapped(item.type)) {
            throw new Error("not a TokensSwapped type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return TokensSwapped.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), xOfferAmt: decodeFromFieldsWithTypes("u64", item.fields.x_offer_amt), yOfferAmt: decodeFromFieldsWithTypes("u64", item.fields.y_offer_amt), zOfferAmt: decodeFromFieldsWithTypes("u64", item.fields.z_offer_amt), xReturnAmt: decodeFromFieldsWithTypes("u64", item.fields.x_return_amt), yReturnAmt: decodeFromFieldsWithTypes("u64", item.fields.y_return_amt), zReturnAmt: decodeFromFieldsWithTypes("u64", item.fields.z_return_amt), xTotalFee: decodeFromFieldsWithTypes("u64", item.fields.x_total_fee), yTotalFee: decodeFromFieldsWithTypes("u64", item.fields.y_total_fee), zTotalFee: decodeFromFieldsWithTypes("u64", item.fields.z_total_fee), xHiveFee: decodeFromFieldsWithTypes("u64", item.fields.x_hive_fee), yHiveFee: decodeFromFieldsWithTypes("u64", item.fields.y_hive_fee), zHiveFee: decodeFromFieldsWithTypes("u64", item.fields.z_hive_fee) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): TokensSwapped<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return TokensSwapped.fromFields(typeArgs, TokensSwapped.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, xOfferAmt: this.xOfferAmt.toString(), yOfferAmt: this.yOfferAmt.toString(), zOfferAmt: this.zOfferAmt.toString(), xReturnAmt: this.xReturnAmt.toString(), yReturnAmt: this.yReturnAmt.toString(), zReturnAmt: this.zReturnAmt.toString(), xTotalFee: this.xTotalFee.toString(), yTotalFee: this.yTotalFee.toString(), zTotalFee: this.zTotalFee.toString(), xHiveFee: this.xHiveFee.toString(), yHiveFee: this.yHiveFee.toString(), zHiveFee: this.zHiveFee.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): TokensSwapped<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return TokensSwapped.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(ID.reified(), field.id), xOfferAmt: decodeFromJSONField("u64", field.xOfferAmt), yOfferAmt: decodeFromJSONField("u64", field.yOfferAmt), zOfferAmt: decodeFromJSONField("u64", field.zOfferAmt), xReturnAmt: decodeFromJSONField("u64", field.xReturnAmt), yReturnAmt: decodeFromJSONField("u64", field.yReturnAmt), zReturnAmt: decodeFromJSONField("u64", field.zReturnAmt), xTotalFee: decodeFromJSONField("u64", field.xTotalFee), yTotalFee: decodeFromJSONField("u64", field.yTotalFee), zTotalFee: decodeFromJSONField("u64", field.zTotalFee), xHiveFee: decodeFromJSONField("u64", field.xHiveFee), yHiveFee: decodeFromJSONField("u64", field.yHiveFee), zHiveFee: decodeFromJSONField("u64", field.zHiveFee) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): TokensSwapped<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== TokensSwapped.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(TokensSwapped.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return TokensSwapped.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): TokensSwapped<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTokensSwapped(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TokensSwapped object`); } return TokensSwapped.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): TokensSwapped<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTokensSwapped(data.bcs.type)) { throw new Error(`object at is not a TokensSwapped object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return TokensSwapped.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return TokensSwapped.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<TokensSwapped<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TokensSwapped object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTokensSwapped(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TokensSwapped object`); }

        return TokensSwapped.fromSuiObjectData(typeArgs, res.data);
    }

}

/* ============================== WeightedConfigUpdated =============================== */

export function isWeightedConfigUpdated(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::three_pool::WeightedConfigUpdated` + '<'); }

export interface WeightedConfigUpdatedFields<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> { id: ToField<ID>; newWeights: ToField<Vector<"u64">>; newExitFee: ToField<"u64"> }

export type WeightedConfigUpdatedReified<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> = Reified<WeightedConfigUpdated<X, Y, Z, Curve>, WeightedConfigUpdatedFields<X, Y, Z, Curve>>;

export class WeightedConfigUpdated<X extends PhantomTypeArgument, Y extends PhantomTypeArgument, Z extends PhantomTypeArgument, Curve extends PhantomTypeArgument> implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::three_pool::WeightedConfigUpdated`; static readonly $numTypeParams = 4; static readonly $isPhantom = [true, true, true, true,] as const;

    readonly $typeName = WeightedConfigUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::three_pool::WeightedConfigUpdated<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; readonly $typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>]; readonly $isPhantom = WeightedConfigUpdated.$isPhantom;

    readonly id: ToField<ID>; readonly newWeights: ToField<Vector<"u64">>; readonly newExitFee: ToField<"u64">

    private constructor(typeArgs: [PhantomToTypeStr<X>, PhantomToTypeStr<Y>, PhantomToTypeStr<Z>, PhantomToTypeStr<Curve>], fields: WeightedConfigUpdatedFields<X, Y, Z, Curve>,) {
        this.$fullTypeName = composeSuiType(WeightedConfigUpdated.$typeName, ...typeArgs) as `${typeof PKG_V1}::three_pool::WeightedConfigUpdated<${PhantomToTypeStr<X>}, ${PhantomToTypeStr<Y>}, ${PhantomToTypeStr<Z>}, ${PhantomToTypeStr<Curve>}>`; this.$typeArgs = typeArgs;

        this.id = fields.id;; this.newWeights = fields.newWeights;; this.newExitFee = fields.newExitFee;
    }

    static reified<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): WeightedConfigUpdatedReified<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return { typeName: WeightedConfigUpdated.$typeName, fullTypeName: composeSuiType(WeightedConfigUpdated.$typeName, ...[extractType(X), extractType(Y), extractType(Z), extractType(Curve)]) as `${typeof PKG_V1}::three_pool::WeightedConfigUpdated<${PhantomToTypeStr<ToPhantomTypeArgument<X>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Y>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Z>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Curve>>}>`, typeArgs: [extractType(X), extractType(Y), extractType(Z), extractType(Curve)] as [PhantomToTypeStr<ToPhantomTypeArgument<X>>, PhantomToTypeStr<ToPhantomTypeArgument<Y>>, PhantomToTypeStr<ToPhantomTypeArgument<Z>>, PhantomToTypeStr<ToPhantomTypeArgument<Curve>>], isPhantom: WeightedConfigUpdated.$isPhantom, reifiedTypeArgs: [X, Y, Z, Curve], fromFields: (fields: Record<string, any>) => WeightedConfigUpdated.fromFields([X, Y, Z, Curve], fields,), fromFieldsWithTypes: (item: FieldsWithTypes) => WeightedConfigUpdated.fromFieldsWithTypes([X, Y, Z, Curve], item,), fromBcs: (data: Uint8Array) => WeightedConfigUpdated.fromBcs([X, Y, Z, Curve], data,), bcs: WeightedConfigUpdated.bcs, fromJSONField: (field: any) => WeightedConfigUpdated.fromJSONField([X, Y, Z, Curve], field,), fromJSON: (json: Record<string, any>) => WeightedConfigUpdated.fromJSON([X, Y, Z, Curve], json,), fromSuiParsedData: (content: SuiParsedData) => WeightedConfigUpdated.fromSuiParsedData([X, Y, Z, Curve], content,), fromSuiObjectData: (content: SuiObjectData) => WeightedConfigUpdated.fromSuiObjectData([X, Y, Z, Curve], content,), fetch: async (client: SuiClient, id: string) => WeightedConfigUpdated.fetch(client, [X, Y, Z, Curve], id,), new: (fields: WeightedConfigUpdatedFields<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>,) => { return new WeightedConfigUpdated([extractType(X), extractType(Y), extractType(Z), extractType(Curve)], fields) }, kind: "StructClassReified", } }

    static get r() { return WeightedConfigUpdated.reified }

    static phantom<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(X: X, Y: Y, Z: Z, Curve: Curve): PhantomReified<ToTypeStr<WeightedConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>>> { return phantom(WeightedConfigUpdated.reified(X, Y, Z, Curve)); } static get p() { return WeightedConfigUpdated.phantom }

    static get bcs() {
        return bcs.struct("WeightedConfigUpdated", {

            id: ID.bcs, new_weights: bcs.vector(bcs.u64()), new_exit_fee: bcs.u64()

        })
    };

    static fromFields<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], fields: Record<string, any>): WeightedConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return WeightedConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFields(ID.reified(), fields.id), newWeights: decodeFromFields(reified.vector("u64"), fields.new_weights), newExitFee: decodeFromFields("u64", fields.new_exit_fee) }) }

    static fromFieldsWithTypes<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], item: FieldsWithTypes): WeightedConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (!isWeightedConfigUpdated(item.type)) {
            throw new Error("not a WeightedConfigUpdated type");

        } assertFieldsWithTypesArgsMatch(item, typeArgs);

        return WeightedConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id), newWeights: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.new_weights), newExitFee: decodeFromFieldsWithTypes("u64", item.fields.new_exit_fee) })
    }

    static fromBcs<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: Uint8Array): WeightedConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return WeightedConfigUpdated.fromFields(typeArgs, WeightedConfigUpdated.bcs.parse(data)) }

    toJSONField() {
        return {

            id: this.id, newWeights: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.newWeights), newExitFee: this.newExitFee.toString(),

        }
    }

    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

    static fromJSONField<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], field: any): WeightedConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { return WeightedConfigUpdated.reified(typeArgs[0], typeArgs[1], typeArgs[2], typeArgs[3],).new({ id: decodeFromJSONField(ID.reified(), field.id), newWeights: decodeFromJSONField(reified.vector("u64"), field.newWeights), newExitFee: decodeFromJSONField("u64", field.newExitFee) }) }

    static fromJSON<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], json: Record<string, any>): WeightedConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (json.$typeName !== WeightedConfigUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch(composeSuiType(WeightedConfigUpdated.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs,)

        return WeightedConfigUpdated.fromJSONField(typeArgs, json,)
    }

    static fromSuiParsedData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], content: SuiParsedData): WeightedConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWeightedConfigUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WeightedConfigUpdated object`); } return WeightedConfigUpdated.fromFieldsWithTypes(typeArgs, content); }

    static fromSuiObjectData<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(typeArgs: [X, Y, Z, Curve], data: SuiObjectData): WeightedConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>> {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isWeightedConfigUpdated(data.bcs.type)) { throw new Error(`object at is not a WeightedConfigUpdated object`); }

            const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 4) { throw new Error(`type argument mismatch: expected 4 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 4; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

            return WeightedConfigUpdated.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
        } if (data.content) { return WeightedConfigUpdated.fromSuiParsedData(typeArgs, data.content) } throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch<X extends PhantomReified<PhantomTypeArgument>, Y extends PhantomReified<PhantomTypeArgument>, Z extends PhantomReified<PhantomTypeArgument>, Curve extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [X, Y, Z, Curve], id: string): Promise<WeightedConfigUpdated<ToPhantomTypeArgument<X>, ToPhantomTypeArgument<Y>, ToPhantomTypeArgument<Z>, ToPhantomTypeArgument<Curve>>> {
        const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WeightedConfigUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWeightedConfigUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WeightedConfigUpdated object`); }

        return WeightedConfigUpdated.fromSuiObjectData(typeArgs, res.data);
    }

}
