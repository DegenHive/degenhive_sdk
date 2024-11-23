"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = void 0;
exports.isDomain = isDomain;
const reified = require("../../../_framework/reified");
const reified_1 = require("../../../_framework/reified");
const util_1 = require("../../../_framework/util");
const structs_1 = require("../../0x1/string/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== Domain =============================== */
function isDomain(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::domain::Domain`; }
class Domain {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Domain.$typeName;
        this.$isPhantom = Domain.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Domain.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.labels = fields.labels;
    }
    static reified() { return { typeName: Domain.$typeName, fullTypeName: (0, util_1.composeSuiType)(Domain.$typeName, ...[]), typeArgs: [], isPhantom: Domain.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Domain.fromFields(fields), fromFieldsWithTypes: (item) => Domain.fromFieldsWithTypes(item), fromBcs: (data) => Domain.fromBcs(data), bcs: Domain.bcs, fromJSONField: (field) => Domain.fromJSONField(field), fromJSON: (json) => Domain.fromJSON(json), fromSuiParsedData: (content) => Domain.fromSuiParsedData(content), fromSuiObjectData: (content) => Domain.fromSuiObjectData(content), fetch: async (client, id) => Domain.fetch(client, id), new: (fields) => { return new Domain([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Domain.reified(); }
    static phantom() { return (0, reified_1.phantom)(Domain.reified()); }
    static get p() { return Domain.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Domain", {
            labels: bcs_1.bcs.vector(structs_1.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return Domain.reified().new({ labels: (0, reified_1.decodeFromFields)(reified.vector(structs_1.String.reified()), fields.labels) }); }
    static fromFieldsWithTypes(item) {
        if (!isDomain(item.type)) {
            throw new Error("not a Domain type");
        }
        return Domain.reified().new({ labels: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(structs_1.String.reified()), item.fields.labels) });
    }
    static fromBcs(data) { return Domain.fromFields(Domain.bcs.parse(data)); }
    toJSONField() {
        return {
            labels: (0, reified_1.fieldToJSON)(`vector<${structs_1.String.$typeName}>`, this.labels),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Domain.reified().new({ labels: (0, reified_1.decodeFromJSONField)(reified.vector(structs_1.String.reified()), field.labels) }); }
    static fromJSON(json) {
        if (json.$typeName !== Domain.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Domain.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDomain(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Domain object`);
    } return Domain.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDomain(data.bcs.type)) {
                throw new Error(`object at is not a Domain object`);
            }
            return Domain.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Domain.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Domain object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDomain(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Domain object`);
        }
        return Domain.fromSuiObjectData(res.data);
    }
}
exports.Domain = Domain;
Domain.$typeName = `${index_1.PKG_V1}::domain::Domain`;
Domain.$numTypeParams = 0;
Domain.$isPhantom = [];
