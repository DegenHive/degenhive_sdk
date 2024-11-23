"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BCS = void 0;
exports.isBCS = isBCS;
const reified = require("../../../_framework/reified");
const reified_1 = require("../../../_framework/reified");
const util_1 = require("../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== BCS =============================== */
function isBCS(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::bcs::BCS`; }
class BCS {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BCS.$typeName;
        this.$isPhantom = BCS.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BCS.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    static reified() { return { typeName: BCS.$typeName, fullTypeName: (0, util_1.composeSuiType)(BCS.$typeName, ...[]), typeArgs: [], isPhantom: BCS.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BCS.fromFields(fields), fromFieldsWithTypes: (item) => BCS.fromFieldsWithTypes(item), fromBcs: (data) => BCS.fromBcs(data), bcs: BCS.bcs, fromJSONField: (field) => BCS.fromJSONField(field), fromJSON: (json) => BCS.fromJSON(json), fromSuiParsedData: (content) => BCS.fromSuiParsedData(content), fromSuiObjectData: (content) => BCS.fromSuiObjectData(content), fetch: async (client, id) => BCS.fetch(client, id), new: (fields) => { return new BCS([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BCS.reified(); }
    static phantom() { return (0, reified_1.phantom)(BCS.reified()); }
    static get p() { return BCS.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BCS", {
            bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return BCS.reified().new({ bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bytes) }); }
    static fromFieldsWithTypes(item) {
        if (!isBCS(item.type)) {
            throw new Error("not a BCS type");
        }
        return BCS.reified().new({ bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bytes) });
    }
    static fromBcs(data) { return BCS.fromFields(BCS.bcs.parse(data)); }
    toJSONField() {
        return {
            bytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.bytes),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BCS.reified().new({ bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bytes) }); }
    static fromJSON(json) {
        if (json.$typeName !== BCS.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BCS.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBCS(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BCS object`);
    } return BCS.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBCS(data.bcs.type)) {
                throw new Error(`object at is not a BCS object`);
            }
            return BCS.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BCS.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BCS object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBCS(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BCS object`);
        }
        return BCS.fromSuiObjectData(res.data);
    }
}
exports.BCS = BCS;
BCS.$typeName = `${index_1.PKG_V28}::bcs::BCS`;
BCS.$numTypeParams = 0;
BCS.$isPhantom = [];
