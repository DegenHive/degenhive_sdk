"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerTypeList = exports.DenyList = void 0;
exports.isDenyList = isDenyList;
exports.isPerTypeList = isPerTypeList;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../bag/structs");
const structs_2 = require("../object/structs");
const structs_3 = require("../table/structs");
const structs_4 = require("../vec-set/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== DenyList =============================== */
function isDenyList(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::deny_list::DenyList"; }
class DenyList {
    constructor(typeArgs, fields) {
        this.$typeName = DenyList.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(DenyList.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.lists = fields.lists;
    }
    static reified() { return { typeName: DenyList.$typeName, fullTypeName: (0, util_1.composeSuiType)(DenyList.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => DenyList.fromFields(fields), fromFieldsWithTypes: (item) => DenyList.fromFieldsWithTypes(item), fromBcs: (data) => DenyList.fromBcs(data), bcs: DenyList.bcs, fromJSONField: (field) => DenyList.fromJSONField(field), fromJSON: (json) => DenyList.fromJSON(json), fromSuiParsedData: (content) => DenyList.fromSuiParsedData(content), fetch: async (client, id) => DenyList.fetch(client, id), new: (fields) => { return new DenyList([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DenyList.reified(); }
    static phantom() { return (0, reified_1.phantom)(DenyList.reified()); }
    static get p() { return DenyList.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DenyList", {
            id: structs_2.UID.bcs, lists: structs_1.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return DenyList.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), lists: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.lists) }); }
    static fromFieldsWithTypes(item) {
        if (!isDenyList(item.type)) {
            throw new Error("not a DenyList type");
        }
        return DenyList.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), lists: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.lists) });
    }
    static fromBcs(data) { return DenyList.fromFields(DenyList.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, lists: this.lists.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DenyList.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), lists: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.lists) }); }
    static fromJSON(json) {
        if (json.$typeName !== DenyList.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DenyList.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDenyList(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DenyList object`);
    } return DenyList.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DenyList object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDenyList(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DenyList object`);
        }
        return DenyList.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DenyList = DenyList;
DenyList.$typeName = "0x2::deny_list::DenyList";
DenyList.$numTypeParams = 0;
/* ============================== PerTypeList =============================== */
function isPerTypeList(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::deny_list::PerTypeList"; }
class PerTypeList {
    constructor(typeArgs, fields) {
        this.$typeName = PerTypeList.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(PerTypeList.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.deniedCount = fields.deniedCount;
        ;
        this.deniedAddresses = fields.deniedAddresses;
    }
    static reified() { return { typeName: PerTypeList.$typeName, fullTypeName: (0, util_1.composeSuiType)(PerTypeList.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => PerTypeList.fromFields(fields), fromFieldsWithTypes: (item) => PerTypeList.fromFieldsWithTypes(item), fromBcs: (data) => PerTypeList.fromBcs(data), bcs: PerTypeList.bcs, fromJSONField: (field) => PerTypeList.fromJSONField(field), fromJSON: (json) => PerTypeList.fromJSON(json), fromSuiParsedData: (content) => PerTypeList.fromSuiParsedData(content), fetch: async (client, id) => PerTypeList.fetch(client, id), new: (fields) => { return new PerTypeList([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PerTypeList.reified(); }
    static phantom() { return (0, reified_1.phantom)(PerTypeList.reified()); }
    static get p() { return PerTypeList.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PerTypeList", {
            id: structs_2.UID.bcs, denied_count: structs_3.Table.bcs, denied_addresses: structs_3.Table.bcs
        });
    }
    ;
    static fromFields(fields) { return PerTypeList.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), deniedCount: (0, reified_1.decodeFromFields)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), fields.denied_count), deniedAddresses: (0, reified_1.decodeFromFields)(structs_3.Table.reified(reified.phantom(reified.vector("u8")), reified.phantom(structs_4.VecSet.reified("address"))), fields.denied_addresses) }); }
    static fromFieldsWithTypes(item) {
        if (!isPerTypeList(item.type)) {
            throw new Error("not a PerTypeList type");
        }
        return PerTypeList.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), deniedCount: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), item.fields.denied_count), deniedAddresses: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Table.reified(reified.phantom(reified.vector("u8")), reified.phantom(structs_4.VecSet.reified("address"))), item.fields.denied_addresses) });
    }
    static fromBcs(data) { return PerTypeList.fromFields(PerTypeList.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, deniedCount: this.deniedCount.toJSONField(), deniedAddresses: this.deniedAddresses.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PerTypeList.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), deniedCount: (0, reified_1.decodeFromJSONField)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), field.deniedCount), deniedAddresses: (0, reified_1.decodeFromJSONField)(structs_3.Table.reified(reified.phantom(reified.vector("u8")), reified.phantom(structs_4.VecSet.reified("address"))), field.deniedAddresses) }); }
    static fromJSON(json) {
        if (json.$typeName !== PerTypeList.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PerTypeList.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPerTypeList(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PerTypeList object`);
    } return PerTypeList.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PerTypeList object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPerTypeList(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PerTypeList object`);
        }
        return PerTypeList.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PerTypeList = PerTypeList;
PerTypeList.$typeName = "0x2::deny_list::PerTypeList";
PerTypeList.$numTypeParams = 0;
