"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
exports.isField = isField;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const structs_1 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Field =============================== */
function isField(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::dynamic_field::Field` + '<'); }
class Field {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Field.$typeName;
        this.$isPhantom = Field.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Field.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.name = fields.name;
        ;
        this.value = fields.value;
    }
    static reified(Name, Value) { return { typeName: Field.$typeName, fullTypeName: (0, util_1.composeSuiType)(Field.$typeName, ...[(0, reified_1.extractType)(Name), (0, reified_1.extractType)(Value)]), typeArgs: [(0, reified_1.extractType)(Name), (0, reified_1.extractType)(Value)], isPhantom: Field.$isPhantom, reifiedTypeArgs: [Name, Value], fromFields: (fields) => Field.fromFields([Name, Value], fields), fromFieldsWithTypes: (item) => Field.fromFieldsWithTypes([Name, Value], item), fromBcs: (data) => Field.fromBcs([Name, Value], data), bcs: Field.bcs((0, reified_1.toBcs)(Name), (0, reified_1.toBcs)(Value)), fromJSONField: (field) => Field.fromJSONField([Name, Value], field), fromJSON: (json) => Field.fromJSON([Name, Value], json), fromSuiParsedData: (content) => Field.fromSuiParsedData([Name, Value], content), fromSuiObjectData: (content) => Field.fromSuiObjectData([Name, Value], content), fetch: async (client, id) => Field.fetch(client, [Name, Value], id), new: (fields) => { return new Field([(0, reified_1.extractType)(Name), (0, reified_1.extractType)(Value)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Field.reified; }
    static phantom(Name, Value) { return (0, reified_1.phantom)(Field.reified(Name, Value)); }
    static get p() { return Field.phantom; }
    static get bcs() {
        return (Name, Value) => bcs_1.bcs.struct(`Field<${Name.name}, ${Value.name}>`, {
            id: structs_1.UID.bcs, name: Name, value: Value
        });
    }
    ;
    static fromFields(typeArgs, fields) { return Field.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), name: (0, reified_1.decodeFromFields)(typeArgs[0], fields.name), value: (0, reified_1.decodeFromFields)(typeArgs[1], fields.value) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isField(item.type)) {
            throw new Error("not a Field type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return Field.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), name: (0, reified_1.decodeFromFieldsWithTypes)(typeArgs[0], item.fields.name), value: (0, reified_1.decodeFromFieldsWithTypes)(typeArgs[1], item.fields.value) });
    }
    static fromBcs(typeArgs, data) { return Field.fromFields(typeArgs, Field.bcs((0, reified_1.toBcs)(typeArgs[0]), (0, reified_1.toBcs)(typeArgs[1])).parse(data)); }
    toJSONField() {
        return {
            id: this.id, name: (0, reified_1.fieldToJSON)(this.$typeArgs[0], this.name), value: (0, reified_1.fieldToJSON)(this.$typeArgs[1], this.value),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return Field.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), name: (0, reified_1.decodeFromJSONField)(typeArgs[0], field.name), value: (0, reified_1.decodeFromJSONField)(typeArgs[1], field.value) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== Field.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Field.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return Field.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isField(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Field object`);
    } return Field.fromFieldsWithTypes(typeArgs, content); }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isField(data.bcs.type)) {
                throw new Error(`object at is not a Field object`);
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
            return Field.fromBcs(typeArgs, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Field.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Field object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isField(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Field object`);
        }
        return Field.fromSuiObjectData(typeArgs, res.data);
    }
}
exports.Field = Field;
Field.$typeName = `${index_1.PKG_V28}::dynamic_field::Field`;
Field.$numTypeParams = 2;
Field.$isPhantom = [false, false,];
