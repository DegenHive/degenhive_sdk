"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VecMap = exports.Entry = void 0;
exports.isEntry = isEntry;
exports.isVecMap = isVecMap;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== Entry =============================== */
function isEntry(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::vec_map::Entry` + '<'); }
class Entry {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Entry.$typeName;
        this.$isPhantom = Entry.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Entry.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.key = fields.key;
        ;
        this.value = fields.value;
    }
    static reified(K, V) { return { typeName: Entry.$typeName, fullTypeName: (0, util_1.composeSuiType)(Entry.$typeName, ...[(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)]), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], isPhantom: Entry.$isPhantom, reifiedTypeArgs: [K, V], fromFields: (fields) => Entry.fromFields([K, V], fields), fromFieldsWithTypes: (item) => Entry.fromFieldsWithTypes([K, V], item), fromBcs: (data) => Entry.fromBcs([K, V], data), bcs: Entry.bcs((0, reified_1.toBcs)(K), (0, reified_1.toBcs)(V)), fromJSONField: (field) => Entry.fromJSONField([K, V], field), fromJSON: (json) => Entry.fromJSON([K, V], json), fromSuiParsedData: (content) => Entry.fromSuiParsedData([K, V], content), fromSuiObjectData: (content) => Entry.fromSuiObjectData([K, V], content), fetch: async (client, id) => Entry.fetch(client, [K, V], id), new: (fields) => { return new Entry([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Entry.reified; }
    static phantom(K, V) { return (0, reified_1.phantom)(Entry.reified(K, V)); }
    static get p() { return Entry.phantom; }
    static get bcs() {
        return (K, V) => bcs_1.bcs.struct(`Entry<${K.name}, ${V.name}>`, {
            key: K, value: V
        });
    }
    ;
    static fromFields(typeArgs, fields) { return Entry.reified(typeArgs[0], typeArgs[1]).new({ key: (0, reified_1.decodeFromFields)(typeArgs[0], fields.key), value: (0, reified_1.decodeFromFields)(typeArgs[1], fields.value) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isEntry(item.type)) {
            throw new Error("not a Entry type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return Entry.reified(typeArgs[0], typeArgs[1]).new({ key: (0, reified_1.decodeFromFieldsWithTypes)(typeArgs[0], item.fields.key), value: (0, reified_1.decodeFromFieldsWithTypes)(typeArgs[1], item.fields.value) });
    }
    static fromBcs(typeArgs, data) { return Entry.fromFields(typeArgs, Entry.bcs((0, reified_1.toBcs)(typeArgs[0]), (0, reified_1.toBcs)(typeArgs[1])).parse(data)); }
    toJSONField() {
        return {
            key: (0, reified_1.fieldToJSON)(this.$typeArgs[0], this.key), value: (0, reified_1.fieldToJSON)(this.$typeArgs[1], this.value),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return Entry.reified(typeArgs[0], typeArgs[1]).new({ key: (0, reified_1.decodeFromJSONField)(typeArgs[0], field.key), value: (0, reified_1.decodeFromJSONField)(typeArgs[1], field.value) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== Entry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Entry.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return Entry.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEntry(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Entry object`);
    } return Entry.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isEntry(data.bcs.type)) {
                throw new Error(`object at is not a Entry object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 2) {
                throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 2; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return Entry.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Entry.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Entry object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEntry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Entry object`);
        }
        return Entry.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.Entry = Entry;
Entry.$typeName = `${index_1.PKG_V28}::vec_map::Entry`;
Entry.$numTypeParams = 2;
Entry.$isPhantom = [false, false,];
/* ============================== VecMap =============================== */
function isVecMap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::vec_map::VecMap` + '<'); }
class VecMap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = VecMap.$typeName;
        this.$isPhantom = VecMap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(VecMap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.contents = fields.contents;
    }
    static reified(K, V) { return { typeName: VecMap.$typeName, fullTypeName: (0, util_1.composeSuiType)(VecMap.$typeName, ...[(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)]), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], isPhantom: VecMap.$isPhantom, reifiedTypeArgs: [K, V], fromFields: (fields) => VecMap.fromFields([K, V], fields), fromFieldsWithTypes: (item) => VecMap.fromFieldsWithTypes([K, V], item), fromBcs: (data) => VecMap.fromBcs([K, V], data), bcs: VecMap.bcs((0, reified_1.toBcs)(K), (0, reified_1.toBcs)(V)), fromJSONField: (field) => VecMap.fromJSONField([K, V], field), fromJSON: (json) => VecMap.fromJSON([K, V], json), fromSuiParsedData: (content) => VecMap.fromSuiParsedData([K, V], content), fromSuiObjectData: (content) => VecMap.fromSuiObjectData([K, V], content), fetch: async (client, id) => VecMap.fetch(client, [K, V], id), new: (fields) => { return new VecMap([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", }; }
    static get r() { return VecMap.reified; }
    static phantom(K, V) { return (0, reified_1.phantom)(VecMap.reified(K, V)); }
    static get p() { return VecMap.phantom; }
    static get bcs() {
        return (K, V) => bcs_1.bcs.struct(`VecMap<${K.name}, ${V.name}>`, {
            contents: bcs_1.bcs.vector(Entry.bcs(K, V))
        });
    }
    ;
    static fromFields(typeArgs, fields) { return VecMap.reified(typeArgs[0], typeArgs[1]).new({ contents: (0, reified_1.decodeFromFields)(reified.vector(Entry.reified(typeArgs[0], typeArgs[1])), fields.contents) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isVecMap(item.type)) {
            throw new Error("not a VecMap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return VecMap.reified(typeArgs[0], typeArgs[1]).new({ contents: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(Entry.reified(typeArgs[0], typeArgs[1])), item.fields.contents) });
    }
    static fromBcs(typeArgs, data) { return VecMap.fromFields(typeArgs, VecMap.bcs((0, reified_1.toBcs)(typeArgs[0]), (0, reified_1.toBcs)(typeArgs[1])).parse(data)); }
    toJSONField() {
        return {
            contents: (0, reified_1.fieldToJSON)(`vector<${Entry.$typeName}<${this.$typeArgs[0]}, ${this.$typeArgs[1]}>>`, this.contents),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return VecMap.reified(typeArgs[0], typeArgs[1]).new({ contents: (0, reified_1.decodeFromJSONField)(reified.vector(Entry.reified(typeArgs[0], typeArgs[1])), field.contents) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== VecMap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(VecMap.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return VecMap.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVecMap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VecMap object`);
    } return VecMap.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVecMap(data.bcs.type)) {
                throw new Error(`object at is not a VecMap object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 2) {
                throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`);
            }
            ;
            for (let i = 0; i < 2; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            ;
            return VecMap.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return VecMap.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VecMap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVecMap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VecMap object`);
        }
        return VecMap.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.VecMap = VecMap;
VecMap.$typeName = `${index_1.PKG_V28}::vec_map::VecMap`;
VecMap.$numTypeParams = 2;
VecMap.$isPhantom = [false, false,];
