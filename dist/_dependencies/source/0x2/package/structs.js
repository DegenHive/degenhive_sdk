"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeTicket = exports.isUpgradeTicket = exports.UpgradeReceipt = exports.isUpgradeReceipt = exports.UpgradeCap = exports.isUpgradeCap = exports.Publisher = exports.isPublisher = void 0;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/ascii/structs");
const structs_2 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Publisher =============================== */
function isPublisher(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::package::Publisher"; }
exports.isPublisher = isPublisher;
class Publisher {
    constructor(typeArgs, fields) {
        this.$typeName = Publisher.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Publisher.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.package = fields.package;
        ;
        this.moduleName = fields.moduleName;
    }
    static reified() { return { typeName: Publisher.$typeName, fullTypeName: (0, util_1.composeSuiType)(Publisher.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Publisher.fromFields(fields), fromFieldsWithTypes: (item) => Publisher.fromFieldsWithTypes(item), fromBcs: (data) => Publisher.fromBcs(data), bcs: Publisher.bcs, fromJSONField: (field) => Publisher.fromJSONField(field), fromJSON: (json) => Publisher.fromJSON(json), fromSuiParsedData: (content) => Publisher.fromSuiParsedData(content), fetch: async (client, id) => Publisher.fetch(client, id), new: (fields) => { return new Publisher([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Publisher.reified(); }
    static phantom() { return (0, reified_1.phantom)(Publisher.reified()); }
    static get p() { return Publisher.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Publisher", {
            id: structs_2.UID.bcs, package: structs_1.String.bcs, module_name: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return Publisher.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), package: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.package), moduleName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.module_name) }); }
    static fromFieldsWithTypes(item) {
        if (!isPublisher(item.type)) {
            throw new Error("not a Publisher type");
        }
        return Publisher.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), package: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.package), moduleName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.module_name) });
    }
    static fromBcs(data) { return Publisher.fromFields(Publisher.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, package: this.package, moduleName: this.moduleName,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Publisher.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), package: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.package), moduleName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.moduleName) }); }
    static fromJSON(json) {
        if (json.$typeName !== Publisher.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Publisher.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPublisher(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Publisher object`);
    } return Publisher.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Publisher object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPublisher(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Publisher object`);
        }
        return Publisher.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Publisher = Publisher;
Publisher.$typeName = "0x2::package::Publisher";
Publisher.$numTypeParams = 0;
/* ============================== UpgradeCap =============================== */
function isUpgradeCap(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::package::UpgradeCap"; }
exports.isUpgradeCap = isUpgradeCap;
class UpgradeCap {
    constructor(typeArgs, fields) {
        this.$typeName = UpgradeCap.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UpgradeCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.package = fields.package;
        ;
        this.version = fields.version;
        ;
        this.policy = fields.policy;
    }
    static reified() { return { typeName: UpgradeCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(UpgradeCap.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UpgradeCap.fromFields(fields), fromFieldsWithTypes: (item) => UpgradeCap.fromFieldsWithTypes(item), fromBcs: (data) => UpgradeCap.fromBcs(data), bcs: UpgradeCap.bcs, fromJSONField: (field) => UpgradeCap.fromJSONField(field), fromJSON: (json) => UpgradeCap.fromJSON(json), fromSuiParsedData: (content) => UpgradeCap.fromSuiParsedData(content), fetch: async (client, id) => UpgradeCap.fetch(client, id), new: (fields) => { return new UpgradeCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UpgradeCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(UpgradeCap.reified()); }
    static get p() { return UpgradeCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UpgradeCap", {
            id: structs_2.UID.bcs, package: structs_2.ID.bcs, version: bcs_1.bcs.u64(), policy: bcs_1.bcs.u8()
        });
    }
    ;
    static fromFields(fields) { return UpgradeCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), package: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.package), version: (0, reified_1.decodeFromFields)("u64", fields.version), policy: (0, reified_1.decodeFromFields)("u8", fields.policy) }); }
    static fromFieldsWithTypes(item) {
        if (!isUpgradeCap(item.type)) {
            throw new Error("not a UpgradeCap type");
        }
        return UpgradeCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), package: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.package), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), policy: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.policy) });
    }
    static fromBcs(data) { return UpgradeCap.fromFields(UpgradeCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, package: this.package, version: this.version.toString(), policy: this.policy,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UpgradeCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), package: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.package), version: (0, reified_1.decodeFromJSONField)("u64", field.version), policy: (0, reified_1.decodeFromJSONField)("u8", field.policy) }); }
    static fromJSON(json) {
        if (json.$typeName !== UpgradeCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpgradeCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpgradeCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UpgradeCap object`);
    } return UpgradeCap.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UpgradeCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpgradeCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpgradeCap object`);
        }
        return UpgradeCap.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UpgradeCap = UpgradeCap;
UpgradeCap.$typeName = "0x2::package::UpgradeCap";
UpgradeCap.$numTypeParams = 0;
/* ============================== UpgradeReceipt =============================== */
function isUpgradeReceipt(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::package::UpgradeReceipt"; }
exports.isUpgradeReceipt = isUpgradeReceipt;
class UpgradeReceipt {
    constructor(typeArgs, fields) {
        this.$typeName = UpgradeReceipt.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UpgradeReceipt.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.cap = fields.cap;
        ;
        this.package = fields.package;
    }
    static reified() { return { typeName: UpgradeReceipt.$typeName, fullTypeName: (0, util_1.composeSuiType)(UpgradeReceipt.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UpgradeReceipt.fromFields(fields), fromFieldsWithTypes: (item) => UpgradeReceipt.fromFieldsWithTypes(item), fromBcs: (data) => UpgradeReceipt.fromBcs(data), bcs: UpgradeReceipt.bcs, fromJSONField: (field) => UpgradeReceipt.fromJSONField(field), fromJSON: (json) => UpgradeReceipt.fromJSON(json), fromSuiParsedData: (content) => UpgradeReceipt.fromSuiParsedData(content), fetch: async (client, id) => UpgradeReceipt.fetch(client, id), new: (fields) => { return new UpgradeReceipt([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UpgradeReceipt.reified(); }
    static phantom() { return (0, reified_1.phantom)(UpgradeReceipt.reified()); }
    static get p() { return UpgradeReceipt.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UpgradeReceipt", {
            cap: structs_2.ID.bcs, package: structs_2.ID.bcs
        });
    }
    ;
    static fromFields(fields) { return UpgradeReceipt.reified().new({ cap: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.cap), package: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.package) }); }
    static fromFieldsWithTypes(item) {
        if (!isUpgradeReceipt(item.type)) {
            throw new Error("not a UpgradeReceipt type");
        }
        return UpgradeReceipt.reified().new({ cap: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.cap), package: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.package) });
    }
    static fromBcs(data) { return UpgradeReceipt.fromFields(UpgradeReceipt.bcs.parse(data)); }
    toJSONField() {
        return {
            cap: this.cap, package: this.package,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UpgradeReceipt.reified().new({ cap: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.cap), package: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.package) }); }
    static fromJSON(json) {
        if (json.$typeName !== UpgradeReceipt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpgradeReceipt.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpgradeReceipt(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UpgradeReceipt object`);
    } return UpgradeReceipt.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UpgradeReceipt object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpgradeReceipt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpgradeReceipt object`);
        }
        return UpgradeReceipt.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UpgradeReceipt = UpgradeReceipt;
UpgradeReceipt.$typeName = "0x2::package::UpgradeReceipt";
UpgradeReceipt.$numTypeParams = 0;
/* ============================== UpgradeTicket =============================== */
function isUpgradeTicket(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::package::UpgradeTicket"; }
exports.isUpgradeTicket = isUpgradeTicket;
class UpgradeTicket {
    constructor(typeArgs, fields) {
        this.$typeName = UpgradeTicket.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UpgradeTicket.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.cap = fields.cap;
        ;
        this.package = fields.package;
        ;
        this.policy = fields.policy;
        ;
        this.digest = fields.digest;
    }
    static reified() { return { typeName: UpgradeTicket.$typeName, fullTypeName: (0, util_1.composeSuiType)(UpgradeTicket.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UpgradeTicket.fromFields(fields), fromFieldsWithTypes: (item) => UpgradeTicket.fromFieldsWithTypes(item), fromBcs: (data) => UpgradeTicket.fromBcs(data), bcs: UpgradeTicket.bcs, fromJSONField: (field) => UpgradeTicket.fromJSONField(field), fromJSON: (json) => UpgradeTicket.fromJSON(json), fromSuiParsedData: (content) => UpgradeTicket.fromSuiParsedData(content), fetch: async (client, id) => UpgradeTicket.fetch(client, id), new: (fields) => { return new UpgradeTicket([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UpgradeTicket.reified(); }
    static phantom() { return (0, reified_1.phantom)(UpgradeTicket.reified()); }
    static get p() { return UpgradeTicket.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UpgradeTicket", {
            cap: structs_2.ID.bcs, package: structs_2.ID.bcs, policy: bcs_1.bcs.u8(), digest: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return UpgradeTicket.reified().new({ cap: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.cap), package: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.package), policy: (0, reified_1.decodeFromFields)("u8", fields.policy), digest: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.digest) }); }
    static fromFieldsWithTypes(item) {
        if (!isUpgradeTicket(item.type)) {
            throw new Error("not a UpgradeTicket type");
        }
        return UpgradeTicket.reified().new({ cap: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.cap), package: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.package), policy: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.policy), digest: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.digest) });
    }
    static fromBcs(data) { return UpgradeTicket.fromFields(UpgradeTicket.bcs.parse(data)); }
    toJSONField() {
        return {
            cap: this.cap, package: this.package, policy: this.policy, digest: (0, reified_1.fieldToJSON)(`vector<u8>`, this.digest),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UpgradeTicket.reified().new({ cap: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.cap), package: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.package), policy: (0, reified_1.decodeFromJSONField)("u8", field.policy), digest: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.digest) }); }
    static fromJSON(json) {
        if (json.$typeName !== UpgradeTicket.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UpgradeTicket.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUpgradeTicket(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UpgradeTicket object`);
    } return UpgradeTicket.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UpgradeTicket object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUpgradeTicket(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpgradeTicket object`);
        }
        return UpgradeTicket.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UpgradeTicket = UpgradeTicket;
UpgradeTicket.$typeName = "0x2::package::UpgradeTicket";
UpgradeTicket.$numTypeParams = 0;
