"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weighted = exports.Stable = exports.Curved = void 0;
exports.isCurved = isCurved;
exports.isStable = isStable;
exports.isWeighted = isWeighted;
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== Curved =============================== */
function isCurved(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::curves::Curved"; }
class Curved {
    constructor(typeArgs, fields) {
        this.$typeName = Curved.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Curved.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: Curved.$typeName, fullTypeName: (0, util_1.composeSuiType)(Curved.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Curved.fromFields(fields), fromFieldsWithTypes: (item) => Curved.fromFieldsWithTypes(item), fromBcs: (data) => Curved.fromBcs(data), bcs: Curved.bcs, fromJSONField: (field) => Curved.fromJSONField(field), fromJSON: (json) => Curved.fromJSON(json), fromSuiParsedData: (content) => Curved.fromSuiParsedData(content), fetch: async (client, id) => Curved.fetch(client, id), new: (fields) => { return new Curved([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Curved.reified(); }
    static phantom() { return (0, reified_1.phantom)(Curved.reified()); }
    static get p() { return Curved.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Curved", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return Curved.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isCurved(item.type)) {
            throw new Error("not a Curved type");
        }
        return Curved.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return Curved.fromFields(Curved.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Curved.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== Curved.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Curved.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurved(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Curved object`);
    } return Curved.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Curved object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurved(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Curved object`);
        }
        return Curved.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Curved = Curved;
Curved.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::curves::Curved";
Curved.$numTypeParams = 0;
/* ============================== Stable =============================== */
function isStable(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::curves::Stable"; }
class Stable {
    constructor(typeArgs, fields) {
        this.$typeName = Stable.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Stable.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: Stable.$typeName, fullTypeName: (0, util_1.composeSuiType)(Stable.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Stable.fromFields(fields), fromFieldsWithTypes: (item) => Stable.fromFieldsWithTypes(item), fromBcs: (data) => Stable.fromBcs(data), bcs: Stable.bcs, fromJSONField: (field) => Stable.fromJSONField(field), fromJSON: (json) => Stable.fromJSON(json), fromSuiParsedData: (content) => Stable.fromSuiParsedData(content), fetch: async (client, id) => Stable.fetch(client, id), new: (fields) => { return new Stable([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Stable.reified(); }
    static phantom() { return (0, reified_1.phantom)(Stable.reified()); }
    static get p() { return Stable.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Stable", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return Stable.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isStable(item.type)) {
            throw new Error("not a Stable type");
        }
        return Stable.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return Stable.fromFields(Stable.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Stable.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== Stable.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Stable.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStable(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Stable object`);
    } return Stable.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Stable object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStable(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Stable object`);
        }
        return Stable.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Stable = Stable;
Stable.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::curves::Stable";
Stable.$numTypeParams = 0;
/* ============================== Weighted =============================== */
function isWeighted(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::curves::Weighted"; }
class Weighted {
    constructor(typeArgs, fields) {
        this.$typeName = Weighted.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Weighted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: Weighted.$typeName, fullTypeName: (0, util_1.composeSuiType)(Weighted.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Weighted.fromFields(fields), fromFieldsWithTypes: (item) => Weighted.fromFieldsWithTypes(item), fromBcs: (data) => Weighted.fromBcs(data), bcs: Weighted.bcs, fromJSONField: (field) => Weighted.fromJSONField(field), fromJSON: (json) => Weighted.fromJSON(json), fromSuiParsedData: (content) => Weighted.fromSuiParsedData(content), fetch: async (client, id) => Weighted.fetch(client, id), new: (fields) => { return new Weighted([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Weighted.reified(); }
    static phantom() { return (0, reified_1.phantom)(Weighted.reified()); }
    static get p() { return Weighted.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Weighted", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return Weighted.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isWeighted(item.type)) {
            throw new Error("not a Weighted type");
        }
        return Weighted.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return Weighted.fromFields(Weighted.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Weighted.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== Weighted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Weighted.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isWeighted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Weighted object`);
    } return Weighted.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Weighted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWeighted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Weighted object`);
        }
        return Weighted.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Weighted = Weighted;
Weighted.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::curves::Weighted";
Weighted.$numTypeParams = 0;
