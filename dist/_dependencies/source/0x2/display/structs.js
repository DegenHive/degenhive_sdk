"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionUpdated = exports.isVersionUpdated = exports.DisplayCreated = exports.isDisplayCreated = exports.Display = exports.isDisplay = void 0;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/string/structs");
const structs_2 = require("../object/structs");
const structs_3 = require("../vec-map/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Display =============================== */
function isDisplay(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::display::Display<"); }
exports.isDisplay = isDisplay;
class Display {
    constructor(typeArgs, fields) {
        this.$typeName = Display.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Display.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.fields = fields.fields;
        ;
        this.version = fields.version;
    }
    static reified(T) { return { typeName: Display.$typeName, fullTypeName: (0, util_1.composeSuiType)(Display.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => Display.fromFields(T, fields), fromFieldsWithTypes: (item) => Display.fromFieldsWithTypes(T, item), fromBcs: (data) => Display.fromBcs(T, data), bcs: Display.bcs, fromJSONField: (field) => Display.fromJSONField(T, field), fromJSON: (json) => Display.fromJSON(T, json), fromSuiParsedData: (content) => Display.fromSuiParsedData(T, content), fetch: async (client, id) => Display.fetch(client, T, id), new: (fields) => { return new Display([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Display.reified; }
    static phantom(T) { return (0, reified_1.phantom)(Display.reified(T)); }
    static get p() { return Display.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("Display", {
            id: structs_2.UID.bcs, fields: structs_3.VecMap.bcs(structs_1.String.bcs, structs_1.String.bcs), version: bcs_1.bcs.u16()
        });
    }
    ;
    static fromFields(typeArg, fields) { return Display.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), fields: (0, reified_1.decodeFromFields)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), fields.fields), version: (0, reified_1.decodeFromFields)("u16", fields.version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isDisplay(item.type)) {
            throw new Error("not a Display type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Display.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), fields: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), item.fields.fields), version: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.version) });
    }
    static fromBcs(typeArg, data) { return Display.fromFields(typeArg, Display.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, fields: this.fields.toJSONField(), version: this.version,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Display.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), fields: (0, reified_1.decodeFromJSONField)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), field.fields), version: (0, reified_1.decodeFromJSONField)("u16", field.version) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Display.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Display.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Display.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDisplay(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Display object`);
    } return Display.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Display object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDisplay(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Display object`);
        }
        return Display.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Display = Display;
Display.$typeName = "0x2::display::Display";
Display.$numTypeParams = 1;
/* ============================== DisplayCreated =============================== */
function isDisplayCreated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::display::DisplayCreated<"); }
exports.isDisplayCreated = isDisplayCreated;
class DisplayCreated {
    constructor(typeArgs, fields) {
        this.$typeName = DisplayCreated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(DisplayCreated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified(T) { return { typeName: DisplayCreated.$typeName, fullTypeName: (0, util_1.composeSuiType)(DisplayCreated.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => DisplayCreated.fromFields(T, fields), fromFieldsWithTypes: (item) => DisplayCreated.fromFieldsWithTypes(T, item), fromBcs: (data) => DisplayCreated.fromBcs(T, data), bcs: DisplayCreated.bcs, fromJSONField: (field) => DisplayCreated.fromJSONField(T, field), fromJSON: (json) => DisplayCreated.fromJSON(T, json), fromSuiParsedData: (content) => DisplayCreated.fromSuiParsedData(T, content), fetch: async (client, id) => DisplayCreated.fetch(client, T, id), new: (fields) => { return new DisplayCreated([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return DisplayCreated.reified; }
    static phantom(T) { return (0, reified_1.phantom)(DisplayCreated.reified(T)); }
    static get p() { return DisplayCreated.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("DisplayCreated", {
            id: structs_2.ID.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return DisplayCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isDisplayCreated(item.type)) {
            throw new Error("not a DisplayCreated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return DisplayCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id) });
    }
    static fromBcs(typeArg, data) { return DisplayCreated.fromFields(typeArg, DisplayCreated.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return DisplayCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== DisplayCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(DisplayCreated.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return DisplayCreated.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDisplayCreated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DisplayCreated object`);
    } return DisplayCreated.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DisplayCreated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDisplayCreated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DisplayCreated object`);
        }
        return DisplayCreated.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.DisplayCreated = DisplayCreated;
DisplayCreated.$typeName = "0x2::display::DisplayCreated";
DisplayCreated.$numTypeParams = 1;
/* ============================== VersionUpdated =============================== */
function isVersionUpdated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::display::VersionUpdated<"); }
exports.isVersionUpdated = isVersionUpdated;
class VersionUpdated {
    constructor(typeArgs, fields) {
        this.$typeName = VersionUpdated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(VersionUpdated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
        ;
        this.fields = fields.fields;
    }
    static reified(T) { return { typeName: VersionUpdated.$typeName, fullTypeName: (0, util_1.composeSuiType)(VersionUpdated.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => VersionUpdated.fromFields(T, fields), fromFieldsWithTypes: (item) => VersionUpdated.fromFieldsWithTypes(T, item), fromBcs: (data) => VersionUpdated.fromBcs(T, data), bcs: VersionUpdated.bcs, fromJSONField: (field) => VersionUpdated.fromJSONField(T, field), fromJSON: (json) => VersionUpdated.fromJSON(T, json), fromSuiParsedData: (content) => VersionUpdated.fromSuiParsedData(T, content), fetch: async (client, id) => VersionUpdated.fetch(client, T, id), new: (fields) => { return new VersionUpdated([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return VersionUpdated.reified; }
    static phantom(T) { return (0, reified_1.phantom)(VersionUpdated.reified(T)); }
    static get p() { return VersionUpdated.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("VersionUpdated", {
            id: structs_2.ID.bcs, version: bcs_1.bcs.u16(), fields: structs_3.VecMap.bcs(structs_1.String.bcs, structs_1.String.bcs)
        });
    }
    ;
    static fromFields(typeArg, fields) { return VersionUpdated.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u16", fields.version), fields: (0, reified_1.decodeFromFields)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), fields.fields) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isVersionUpdated(item.type)) {
            throw new Error("not a VersionUpdated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return VersionUpdated.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.version), fields: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), item.fields.fields) });
    }
    static fromBcs(typeArg, data) { return VersionUpdated.fromFields(typeArg, VersionUpdated.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, version: this.version, fields: this.fields.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return VersionUpdated.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u16", field.version), fields: (0, reified_1.decodeFromJSONField)(structs_3.VecMap.reified(structs_1.String.reified(), structs_1.String.reified()), field.fields) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== VersionUpdated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(VersionUpdated.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return VersionUpdated.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVersionUpdated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VersionUpdated object`);
    } return VersionUpdated.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VersionUpdated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVersionUpdated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VersionUpdated object`);
        }
        return VersionUpdated.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.VersionUpdated = VersionUpdated;
VersionUpdated.$typeName = "0x2::display::VersionUpdated";
VersionUpdated.$numTypeParams = 1;
