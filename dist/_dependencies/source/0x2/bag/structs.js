"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
exports.isBag = isBag;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Bag =============================== */
function isBag(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::bag::Bag"; }
class Bag {
    constructor(typeArgs, fields) {
        this.$typeName = Bag.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Bag.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.size = fields.size;
    }
    static reified() { return { typeName: Bag.$typeName, fullTypeName: (0, util_1.composeSuiType)(Bag.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Bag.fromFields(fields), fromFieldsWithTypes: (item) => Bag.fromFieldsWithTypes(item), fromBcs: (data) => Bag.fromBcs(data), bcs: Bag.bcs, fromJSONField: (field) => Bag.fromJSONField(field), fromJSON: (json) => Bag.fromJSON(json), fromSuiParsedData: (content) => Bag.fromSuiParsedData(content), fetch: async (client, id) => Bag.fetch(client, id), new: (fields) => { return new Bag([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Bag.reified(); }
    static phantom() { return (0, reified_1.phantom)(Bag.reified()); }
    static get p() { return Bag.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Bag", {
            id: structs_1.UID.bcs, size: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Bag.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), size: (0, reified_1.decodeFromFields)("u64", fields.size) }); }
    static fromFieldsWithTypes(item) {
        if (!isBag(item.type)) {
            throw new Error("not a Bag type");
        }
        return Bag.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size) });
    }
    static fromBcs(data) { return Bag.fromFields(Bag.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, size: this.size.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Bag.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), size: (0, reified_1.decodeFromJSONField)("u64", field.size) }); }
    static fromJSON(json) {
        if (json.$typeName !== Bag.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Bag.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBag(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Bag object`);
    } return Bag.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Bag object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBag(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Bag object`);
        }
        return Bag.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Bag = Bag;
Bag.$typeName = "0x2::bag::Bag";
Bag.$numTypeParams = 0;
