"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxContext = void 0;
exports.isTxContext = isTxContext;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== TxContext =============================== */
function isTxContext(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V21}::tx_context::TxContext`; }
class TxContext {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TxContext.$typeName;
        this.$isPhantom = TxContext.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TxContext.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.sender = fields.sender;
        ;
        this.txHash = fields.txHash;
        ;
        this.epoch = fields.epoch;
        ;
        this.epochTimestampMs = fields.epochTimestampMs;
        ;
        this.idsCreated = fields.idsCreated;
    }
    static reified() { return { typeName: TxContext.$typeName, fullTypeName: (0, util_1.composeSuiType)(TxContext.$typeName, ...[]), typeArgs: [], isPhantom: TxContext.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TxContext.fromFields(fields), fromFieldsWithTypes: (item) => TxContext.fromFieldsWithTypes(item), fromBcs: (data) => TxContext.fromBcs(data), bcs: TxContext.bcs, fromJSONField: (field) => TxContext.fromJSONField(field), fromJSON: (json) => TxContext.fromJSON(json), fromSuiParsedData: (content) => TxContext.fromSuiParsedData(content), fetch: async (client, id) => TxContext.fetch(client, id), new: (fields) => { return new TxContext([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TxContext.reified(); }
    static phantom() { return (0, reified_1.phantom)(TxContext.reified()); }
    static get p() { return TxContext.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TxContext", {
            sender: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), }), tx_hash: bcs_1.bcs.vector(bcs_1.bcs.u8()), epoch: bcs_1.bcs.u64(), epoch_timestamp_ms: bcs_1.bcs.u64(), ids_created: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return TxContext.reified().new({ sender: (0, reified_1.decodeFromFields)("address", fields.sender), txHash: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.tx_hash), epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), epochTimestampMs: (0, reified_1.decodeFromFields)("u64", fields.epoch_timestamp_ms), idsCreated: (0, reified_1.decodeFromFields)("u64", fields.ids_created) }); }
    static fromFieldsWithTypes(item) {
        if (!isTxContext(item.type)) {
            throw new Error("not a TxContext type");
        }
        return TxContext.reified().new({ sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), txHash: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.tx_hash), epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), epochTimestampMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch_timestamp_ms), idsCreated: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.ids_created) });
    }
    static fromBcs(data) { return TxContext.fromFields(TxContext.bcs.parse(data)); }
    toJSONField() {
        return {
            sender: this.sender, txHash: (0, reified_1.fieldToJSON)(`vector<u8>`, this.txHash), epoch: this.epoch.toString(), epochTimestampMs: this.epochTimestampMs.toString(), idsCreated: this.idsCreated.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TxContext.reified().new({ sender: (0, reified_1.decodeFromJSONField)("address", field.sender), txHash: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.txHash), epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), epochTimestampMs: (0, reified_1.decodeFromJSONField)("u64", field.epochTimestampMs), idsCreated: (0, reified_1.decodeFromJSONField)("u64", field.idsCreated) }); }
    static fromJSON(json) {
        if (json.$typeName !== TxContext.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TxContext.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTxContext(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TxContext object`);
    } return TxContext.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TxContext object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTxContext(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TxContext object`);
        }
        return TxContext.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TxContext = TxContext;
TxContext.$typeName = `${index_1.PKG_V21}::tx_context::TxContext`;
TxContext.$numTypeParams = 0;
TxContext.$isPhantom = [];
