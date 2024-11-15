"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receiving = void 0;
exports.isReceiving = isReceiving;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const structs_1 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Receiving =============================== */
function isReceiving(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::transfer::Receiving` + '<'); }
class Receiving {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Receiving.$typeName;
        this.$isPhantom = Receiving.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Receiving.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
    }
    static reified(T) { return { typeName: Receiving.$typeName, fullTypeName: (0, util_1.composeSuiType)(Receiving.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: Receiving.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => Receiving.fromFields(T, fields), fromFieldsWithTypes: (item) => Receiving.fromFieldsWithTypes(T, item), fromBcs: (data) => Receiving.fromBcs(T, data), bcs: Receiving.bcs, fromJSONField: (field) => Receiving.fromJSONField(T, field), fromJSON: (json) => Receiving.fromJSON(T, json), fromSuiParsedData: (content) => Receiving.fromSuiParsedData(T, content), fromSuiObjectData: (content) => Receiving.fromSuiObjectData(T, content), fetch: async (client, id) => Receiving.fetch(client, T, id), new: (fields) => { return new Receiving([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Receiving.reified; }
    static phantom(T) { return (0, reified_1.phantom)(Receiving.reified(T)); }
    static get p() { return Receiving.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("Receiving", {
            id: structs_1.ID.bcs, version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return Receiving.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isReceiving(item.type)) {
            throw new Error("not a Receiving type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Receiving.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(typeArg, data) { return Receiving.fromFields(typeArg, Receiving.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Receiving.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Receiving.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Receiving.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Receiving.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isReceiving(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Receiving object`);
    } return Receiving.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isReceiving(data.bcs.type)) {
                throw new Error(`object at is not a Receiving object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            ;
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            ;
            return Receiving.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Receiving.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Receiving object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isReceiving(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Receiving object`);
        }
        return Receiving.fromSuiObjectData(typeArg, res.data);
    }
}
exports.Receiving = Receiving;
Receiving.$typeName = `${index_1.PKG_V28}::transfer::Receiving`;
Receiving.$numTypeParams = 1;
Receiving.$isPhantom = [true,];
