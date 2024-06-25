"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.LinkedTable = void 0;
exports.isLinkedTable = isLinkedTable;
exports.isNode = isNode;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/option/structs");
const structs_2 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== LinkedTable =============================== */
function isLinkedTable(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::linked_table::LinkedTable<"); }
class LinkedTable {
    constructor(typeArgs, fields) {
        this.$typeName = LinkedTable.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(LinkedTable.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.size = fields.size;
        ;
        this.head = fields.head;
        ;
        this.tail = fields.tail;
    }
    static reified(K, V) { return { typeName: LinkedTable.$typeName, fullTypeName: (0, util_1.composeSuiType)(LinkedTable.$typeName, ...[(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)]), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], reifiedTypeArgs: [K, V], fromFields: (fields) => LinkedTable.fromFields([K, V], fields), fromFieldsWithTypes: (item) => LinkedTable.fromFieldsWithTypes([K, V], item), fromBcs: (data) => LinkedTable.fromBcs([K, V], data), bcs: LinkedTable.bcs((0, reified_1.toBcs)(K)), fromJSONField: (field) => LinkedTable.fromJSONField([K, V], field), fromJSON: (json) => LinkedTable.fromJSON([K, V], json), fromSuiParsedData: (content) => LinkedTable.fromSuiParsedData([K, V], content), fetch: async (client, id) => LinkedTable.fetch(client, [K, V], id), new: (fields) => { return new LinkedTable([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", }; }
    static get r() { return LinkedTable.reified; }
    static phantom(K, V) { return (0, reified_1.phantom)(LinkedTable.reified(K, V)); }
    static get p() { return LinkedTable.phantom; }
    static get bcs() {
        return (K) => bcs_1.bcs.struct(`LinkedTable<${K.name}>`, {
            id: structs_2.UID.bcs, size: bcs_1.bcs.u64(), head: structs_1.Option.bcs(K), tail: structs_1.Option.bcs(K)
        });
    }
    ;
    static fromFields(typeArgs, fields) { return LinkedTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), size: (0, reified_1.decodeFromFields)("u64", fields.size), head: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.head), tail: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.tail) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isLinkedTable(item.type)) {
            throw new Error("not a LinkedTable type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return LinkedTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size), head: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.head), tail: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.tail) });
    }
    static fromBcs(typeArgs, data) { return LinkedTable.fromFields(typeArgs, LinkedTable.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data)); }
    toJSONField() {
        return {
            id: this.id, size: this.size.toString(), head: (0, reified_1.fieldToJSON)(`0x1::option::Option<${this.$typeArgs[0]}>`, this.head), tail: (0, reified_1.fieldToJSON)(`0x1::option::Option<${this.$typeArgs[0]}>`, this.tail),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return LinkedTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), size: (0, reified_1.decodeFromJSONField)("u64", field.size), head: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.head), tail: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.tail) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== LinkedTable.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(LinkedTable.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return LinkedTable.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLinkedTable(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LinkedTable object`);
    } return LinkedTable.fromFieldsWithTypes(typeArgs, content); }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LinkedTable object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLinkedTable(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LinkedTable object`);
        }
        return LinkedTable.fromBcs(typeArgs, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.LinkedTable = LinkedTable;
LinkedTable.$typeName = "0x2::linked_table::LinkedTable";
LinkedTable.$numTypeParams = 2;
/* ============================== Node =============================== */
function isNode(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::linked_table::Node<"); }
class Node {
    constructor(typeArgs, fields) {
        this.$typeName = Node.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Node.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.prev = fields.prev;
        ;
        this.next = fields.next;
        ;
        this.value = fields.value;
    }
    static reified(K, V) { return { typeName: Node.$typeName, fullTypeName: (0, util_1.composeSuiType)(Node.$typeName, ...[(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)]), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], reifiedTypeArgs: [K, V], fromFields: (fields) => Node.fromFields([K, V], fields), fromFieldsWithTypes: (item) => Node.fromFieldsWithTypes([K, V], item), fromBcs: (data) => Node.fromBcs([K, V], data), bcs: Node.bcs((0, reified_1.toBcs)(K), (0, reified_1.toBcs)(V)), fromJSONField: (field) => Node.fromJSONField([K, V], field), fromJSON: (json) => Node.fromJSON([K, V], json), fromSuiParsedData: (content) => Node.fromSuiParsedData([K, V], content), fetch: async (client, id) => Node.fetch(client, [K, V], id), new: (fields) => { return new Node([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Node.reified; }
    static phantom(K, V) { return (0, reified_1.phantom)(Node.reified(K, V)); }
    static get p() { return Node.phantom; }
    static get bcs() {
        return (K, V) => bcs_1.bcs.struct(`Node<${K.name}, ${V.name}>`, {
            prev: structs_1.Option.bcs(K), next: structs_1.Option.bcs(K), value: V
        });
    }
    ;
    static fromFields(typeArgs, fields) { return Node.reified(typeArgs[0], typeArgs[1]).new({ prev: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.prev), next: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArgs[0]), fields.next), value: (0, reified_1.decodeFromFields)(typeArgs[1], fields.value) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isNode(item.type)) {
            throw new Error("not a Node type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return Node.reified(typeArgs[0], typeArgs[1]).new({ prev: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.prev), next: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArgs[0]), item.fields.next), value: (0, reified_1.decodeFromFieldsWithTypes)(typeArgs[1], item.fields.value) });
    }
    static fromBcs(typeArgs, data) { return Node.fromFields(typeArgs, Node.bcs((0, reified_1.toBcs)(typeArgs[0]), (0, reified_1.toBcs)(typeArgs[1])).parse(data)); }
    toJSONField() {
        return {
            prev: (0, reified_1.fieldToJSON)(`0x1::option::Option<${this.$typeArgs[0]}>`, this.prev), next: (0, reified_1.fieldToJSON)(`0x1::option::Option<${this.$typeArgs[0]}>`, this.next), value: (0, reified_1.fieldToJSON)(this.$typeArgs[1], this.value),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return Node.reified(typeArgs[0], typeArgs[1]).new({ prev: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.prev), next: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArgs[0]), field.next), value: (0, reified_1.decodeFromJSONField)(typeArgs[1], field.value) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== Node.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Node.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return Node.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNode(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Node object`);
    } return Node.fromFieldsWithTypes(typeArgs, content); }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Node object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNode(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Node object`);
        }
        return Node.fromBcs(typeArgs, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Node = Node;
Node.$typeName = "0x2::linked_table::Node";
Node.$numTypeParams = 2;
