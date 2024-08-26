"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = exports.Entry = void 0;
exports.isEntry = isEntry;
exports.isPriorityQueue = isPriorityQueue;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== Entry =============================== */
function isEntry(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V21}::priority_queue::Entry` + '<'); }
class Entry {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Entry.$typeName;
        this.$isPhantom = Entry.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Entry.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.priority = fields.priority;
        ;
        this.value = fields.value;
    }
    static reified(T) { return { typeName: Entry.$typeName, fullTypeName: (0, util_1.composeSuiType)(Entry.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: Entry.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => Entry.fromFields(T, fields), fromFieldsWithTypes: (item) => Entry.fromFieldsWithTypes(T, item), fromBcs: (data) => Entry.fromBcs(T, data), bcs: Entry.bcs((0, reified_1.toBcs)(T)), fromJSONField: (field) => Entry.fromJSONField(T, field), fromJSON: (json) => Entry.fromJSON(T, json), fromSuiParsedData: (content) => Entry.fromSuiParsedData(T, content), fetch: async (client, id) => Entry.fetch(client, T, id), new: (fields) => { return new Entry([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Entry.reified; }
    static phantom(T) { return (0, reified_1.phantom)(Entry.reified(T)); }
    static get p() { return Entry.phantom; }
    static get bcs() {
        return (T) => bcs_1.bcs.struct(`Entry<${T.name}>`, {
            priority: bcs_1.bcs.u64(), value: T
        });
    }
    ;
    static fromFields(typeArg, fields) { return Entry.reified(typeArg).new({ priority: (0, reified_1.decodeFromFields)("u64", fields.priority), value: (0, reified_1.decodeFromFields)(typeArg, fields.value) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isEntry(item.type)) {
            throw new Error("not a Entry type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Entry.reified(typeArg).new({ priority: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.priority), value: (0, reified_1.decodeFromFieldsWithTypes)(typeArg, item.fields.value) });
    }
    static fromBcs(typeArg, data) {
        const typeArgs = [typeArg];
        return Entry.fromFields(typeArg, Entry.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    }
    toJSONField() {
        return {
            priority: this.priority.toString(), value: (0, reified_1.fieldToJSON)(this.$typeArgs[0], this.value),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Entry.reified(typeArg).new({ priority: (0, reified_1.decodeFromJSONField)("u64", field.priority), value: (0, reified_1.decodeFromJSONField)(typeArg, field.value) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Entry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Entry.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Entry.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isEntry(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Entry object`);
    } return Entry.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Entry object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isEntry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Entry object`);
        }
        const gotTypeArgs = (0, util_1.parseTypeName)(res.data.bcs.type).typeArgs;
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
        return Entry.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Entry = Entry;
Entry.$typeName = `${index_1.PKG_V21}::priority_queue::Entry`;
Entry.$numTypeParams = 1;
Entry.$isPhantom = [false,];
/* ============================== PriorityQueue =============================== */
function isPriorityQueue(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V21}::priority_queue::PriorityQueue` + '<'); }
class PriorityQueue {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PriorityQueue.$typeName;
        this.$isPhantom = PriorityQueue.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PriorityQueue.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.entries = fields.entries;
    }
    static reified(T) { return { typeName: PriorityQueue.$typeName, fullTypeName: (0, util_1.composeSuiType)(PriorityQueue.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: PriorityQueue.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => PriorityQueue.fromFields(T, fields), fromFieldsWithTypes: (item) => PriorityQueue.fromFieldsWithTypes(T, item), fromBcs: (data) => PriorityQueue.fromBcs(T, data), bcs: PriorityQueue.bcs((0, reified_1.toBcs)(T)), fromJSONField: (field) => PriorityQueue.fromJSONField(T, field), fromJSON: (json) => PriorityQueue.fromJSON(T, json), fromSuiParsedData: (content) => PriorityQueue.fromSuiParsedData(T, content), fetch: async (client, id) => PriorityQueue.fetch(client, T, id), new: (fields) => { return new PriorityQueue([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return PriorityQueue.reified; }
    static phantom(T) { return (0, reified_1.phantom)(PriorityQueue.reified(T)); }
    static get p() { return PriorityQueue.phantom; }
    static get bcs() {
        return (T) => bcs_1.bcs.struct(`PriorityQueue<${T.name}>`, {
            entries: bcs_1.bcs.vector(Entry.bcs(T))
        });
    }
    ;
    static fromFields(typeArg, fields) { return PriorityQueue.reified(typeArg).new({ entries: (0, reified_1.decodeFromFields)(reified.vector(Entry.reified(typeArg)), fields.entries) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isPriorityQueue(item.type)) {
            throw new Error("not a PriorityQueue type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return PriorityQueue.reified(typeArg).new({ entries: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(Entry.reified(typeArg)), item.fields.entries) });
    }
    static fromBcs(typeArg, data) {
        const typeArgs = [typeArg];
        return PriorityQueue.fromFields(typeArg, PriorityQueue.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    }
    toJSONField() {
        return {
            entries: (0, reified_1.fieldToJSON)(`vector<${Entry.$typeName}<${this.$typeArgs[0]}>>`, this.entries),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return PriorityQueue.reified(typeArg).new({ entries: (0, reified_1.decodeFromJSONField)(reified.vector(Entry.reified(typeArg)), field.entries) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== PriorityQueue.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(PriorityQueue.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return PriorityQueue.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPriorityQueue(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PriorityQueue object`);
    } return PriorityQueue.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PriorityQueue object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPriorityQueue(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PriorityQueue object`);
        }
        const gotTypeArgs = (0, util_1.parseTypeName)(res.data.bcs.type).typeArgs;
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
        return PriorityQueue.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PriorityQueue = PriorityQueue;
PriorityQueue.$typeName = `${index_1.PKG_V21}::priority_queue::PriorityQueue`;
PriorityQueue.$numTypeParams = 1;
PriorityQueue.$isPhantom = [false,];
