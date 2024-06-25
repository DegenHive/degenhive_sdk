"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clock = void 0;
exports.isClock = isClock;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Clock =============================== */
function isClock(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::clock::Clock"; }
class Clock {
    constructor(typeArgs, fields) {
        this.$typeName = Clock.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Clock.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.timestampMs = fields.timestampMs;
    }
    static reified() { return { typeName: Clock.$typeName, fullTypeName: (0, util_1.composeSuiType)(Clock.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Clock.fromFields(fields), fromFieldsWithTypes: (item) => Clock.fromFieldsWithTypes(item), fromBcs: (data) => Clock.fromBcs(data), bcs: Clock.bcs, fromJSONField: (field) => Clock.fromJSONField(field), fromJSON: (json) => Clock.fromJSON(json), fromSuiParsedData: (content) => Clock.fromSuiParsedData(content), fetch: async (client, id) => Clock.fetch(client, id), new: (fields) => { return new Clock([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Clock.reified(); }
    static phantom() { return (0, reified_1.phantom)(Clock.reified()); }
    static get p() { return Clock.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Clock", {
            id: structs_1.UID.bcs, timestamp_ms: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Clock.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), timestampMs: (0, reified_1.decodeFromFields)("u64", fields.timestamp_ms) }); }
    static fromFieldsWithTypes(item) {
        if (!isClock(item.type)) {
            throw new Error("not a Clock type");
        }
        return Clock.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), timestampMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.timestamp_ms) });
    }
    static fromBcs(data) { return Clock.fromFields(Clock.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, timestampMs: this.timestampMs.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Clock.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), timestampMs: (0, reified_1.decodeFromJSONField)("u64", field.timestampMs) }); }
    static fromJSON(json) {
        if (json.$typeName !== Clock.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Clock.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isClock(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Clock object`);
    } return Clock.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Clock object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isClock(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Clock object`);
        }
        return Clock.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Clock = Clock;
Clock.$typeName = "0x2::clock::Clock";
Clock.$numTypeParams = 0;
