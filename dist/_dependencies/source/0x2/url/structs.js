"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
exports.isUrl = isUrl;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/ascii/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== Url =============================== */
function isUrl(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::url::Url`; }
class Url {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Url.$typeName;
        this.$isPhantom = Url.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Url.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.url = fields.url;
    }
    static reified() { return { typeName: Url.$typeName, fullTypeName: (0, util_1.composeSuiType)(Url.$typeName, ...[]), typeArgs: [], isPhantom: Url.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Url.fromFields(fields), fromFieldsWithTypes: (item) => Url.fromFieldsWithTypes(item), fromBcs: (data) => Url.fromBcs(data), bcs: Url.bcs, fromJSONField: (field) => Url.fromJSONField(field), fromJSON: (json) => Url.fromJSON(json), fromSuiParsedData: (content) => Url.fromSuiParsedData(content), fromSuiObjectData: (content) => Url.fromSuiObjectData(content), fetch: async (client, id) => Url.fetch(client, id), new: (fields) => { return new Url([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Url.reified(); }
    static phantom() { return (0, reified_1.phantom)(Url.reified()); }
    static get p() { return Url.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Url", {
            url: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return Url.reified().new({ url: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.url) }); }
    static fromFieldsWithTypes(item) {
        if (!isUrl(item.type)) {
            throw new Error("not a Url type");
        }
        return Url.reified().new({ url: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.url) });
    }
    static fromBcs(data) { return Url.fromFields(Url.bcs.parse(data)); }
    toJSONField() {
        return {
            url: this.url,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Url.reified().new({ url: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.url) }); }
    static fromJSON(json) {
        if (json.$typeName !== Url.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Url.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUrl(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Url object`);
    } return Url.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUrl(data.bcs.type)) {
                throw new Error(`object at is not a Url object`);
            }
            return Url.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Url.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Url object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUrl(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Url object`);
        }
        return Url.fromSuiObjectData(res.data);
    }
}
exports.Url = Url;
Url.$typeName = `${index_1.PKG_V28}::url::Url`;
Url.$numTypeParams = 0;
Url.$isPhantom = [];
