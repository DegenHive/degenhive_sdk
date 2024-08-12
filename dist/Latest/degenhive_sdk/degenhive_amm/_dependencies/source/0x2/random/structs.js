"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomInner = exports.RandomGenerator = exports.Random = void 0;
exports.isRandom = isRandom;
exports.isRandomGenerator = isRandomGenerator;
exports.isRandomInner = isRandomInner;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const structs_1 = require("../object/structs");
const structs_2 = require("../versioned/structs");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== Random =============================== */
function isRandom(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V21}::random::Random`; }
class Random {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Random.$typeName;
        this.$isPhantom = Random.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Random.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.inner = fields.inner;
    }
    static reified() { return { typeName: Random.$typeName, fullTypeName: (0, util_1.composeSuiType)(Random.$typeName, ...[]), typeArgs: [], isPhantom: Random.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Random.fromFields(fields), fromFieldsWithTypes: (item) => Random.fromFieldsWithTypes(item), fromBcs: (data) => Random.fromBcs(data), bcs: Random.bcs, fromJSONField: (field) => Random.fromJSONField(field), fromJSON: (json) => Random.fromJSON(json), fromSuiParsedData: (content) => Random.fromSuiParsedData(content), fetch: async (client, id) => Random.fetch(client, id), new: (fields) => { return new Random([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Random.reified(); }
    static phantom() { return (0, reified_1.phantom)(Random.reified()); }
    static get p() { return Random.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Random", {
            id: structs_1.UID.bcs, inner: structs_2.Versioned.bcs
        });
    }
    ;
    static fromFields(fields) { return Random.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), inner: (0, reified_1.decodeFromFields)(structs_2.Versioned.reified(), fields.inner) }); }
    static fromFieldsWithTypes(item) {
        if (!isRandom(item.type)) {
            throw new Error("not a Random type");
        }
        return Random.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), inner: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Versioned.reified(), item.fields.inner) });
    }
    static fromBcs(data) { return Random.fromFields(Random.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, inner: this.inner.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Random.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), inner: (0, reified_1.decodeFromJSONField)(structs_2.Versioned.reified(), field.inner) }); }
    static fromJSON(json) {
        if (json.$typeName !== Random.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Random.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRandom(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Random object`);
    } return Random.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Random object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRandom(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Random object`);
        }
        return Random.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Random = Random;
Random.$typeName = `${index_1.PKG_V21}::random::Random`;
Random.$numTypeParams = 0;
Random.$isPhantom = [];
/* ============================== RandomGenerator =============================== */
function isRandomGenerator(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V21}::random::RandomGenerator`; }
class RandomGenerator {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RandomGenerator.$typeName;
        this.$isPhantom = RandomGenerator.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RandomGenerator.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.seed = fields.seed;
        ;
        this.counter = fields.counter;
        ;
        this.buffer = fields.buffer;
    }
    static reified() { return { typeName: RandomGenerator.$typeName, fullTypeName: (0, util_1.composeSuiType)(RandomGenerator.$typeName, ...[]), typeArgs: [], isPhantom: RandomGenerator.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RandomGenerator.fromFields(fields), fromFieldsWithTypes: (item) => RandomGenerator.fromFieldsWithTypes(item), fromBcs: (data) => RandomGenerator.fromBcs(data), bcs: RandomGenerator.bcs, fromJSONField: (field) => RandomGenerator.fromJSONField(field), fromJSON: (json) => RandomGenerator.fromJSON(json), fromSuiParsedData: (content) => RandomGenerator.fromSuiParsedData(content), fetch: async (client, id) => RandomGenerator.fetch(client, id), new: (fields) => { return new RandomGenerator([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RandomGenerator.reified(); }
    static phantom() { return (0, reified_1.phantom)(RandomGenerator.reified()); }
    static get p() { return RandomGenerator.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RandomGenerator", {
            seed: bcs_1.bcs.vector(bcs_1.bcs.u8()), counter: bcs_1.bcs.u16(), buffer: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return RandomGenerator.reified().new({ seed: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.seed), counter: (0, reified_1.decodeFromFields)("u16", fields.counter), buffer: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.buffer) }); }
    static fromFieldsWithTypes(item) {
        if (!isRandomGenerator(item.type)) {
            throw new Error("not a RandomGenerator type");
        }
        return RandomGenerator.reified().new({ seed: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.seed), counter: (0, reified_1.decodeFromFieldsWithTypes)("u16", item.fields.counter), buffer: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.buffer) });
    }
    static fromBcs(data) { return RandomGenerator.fromFields(RandomGenerator.bcs.parse(data)); }
    toJSONField() {
        return {
            seed: (0, reified_1.fieldToJSON)(`vector<u8>`, this.seed), counter: this.counter, buffer: (0, reified_1.fieldToJSON)(`vector<u8>`, this.buffer),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RandomGenerator.reified().new({ seed: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.seed), counter: (0, reified_1.decodeFromJSONField)("u16", field.counter), buffer: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.buffer) }); }
    static fromJSON(json) {
        if (json.$typeName !== RandomGenerator.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RandomGenerator.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRandomGenerator(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RandomGenerator object`);
    } return RandomGenerator.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RandomGenerator object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRandomGenerator(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RandomGenerator object`);
        }
        return RandomGenerator.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RandomGenerator = RandomGenerator;
RandomGenerator.$typeName = `${index_1.PKG_V21}::random::RandomGenerator`;
RandomGenerator.$numTypeParams = 0;
RandomGenerator.$isPhantom = [];
/* ============================== RandomInner =============================== */
function isRandomInner(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V21}::random::RandomInner`; }
class RandomInner {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RandomInner.$typeName;
        this.$isPhantom = RandomInner.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RandomInner.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.epoch = fields.epoch;
        ;
        this.randomnessRound = fields.randomnessRound;
        ;
        this.randomBytes = fields.randomBytes;
    }
    static reified() { return { typeName: RandomInner.$typeName, fullTypeName: (0, util_1.composeSuiType)(RandomInner.$typeName, ...[]), typeArgs: [], isPhantom: RandomInner.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => RandomInner.fromFields(fields), fromFieldsWithTypes: (item) => RandomInner.fromFieldsWithTypes(item), fromBcs: (data) => RandomInner.fromBcs(data), bcs: RandomInner.bcs, fromJSONField: (field) => RandomInner.fromJSONField(field), fromJSON: (json) => RandomInner.fromJSON(json), fromSuiParsedData: (content) => RandomInner.fromSuiParsedData(content), fetch: async (client, id) => RandomInner.fetch(client, id), new: (fields) => { return new RandomInner([], fields); }, kind: "StructClassReified", }; }
    static get r() { return RandomInner.reified(); }
    static phantom() { return (0, reified_1.phantom)(RandomInner.reified()); }
    static get p() { return RandomInner.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("RandomInner", {
            version: bcs_1.bcs.u64(), epoch: bcs_1.bcs.u64(), randomness_round: bcs_1.bcs.u64(), random_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return RandomInner.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch), randomnessRound: (0, reified_1.decodeFromFields)("u64", fields.randomness_round), randomBytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.random_bytes) }); }
    static fromFieldsWithTypes(item) {
        if (!isRandomInner(item.type)) {
            throw new Error("not a RandomInner type");
        }
        return RandomInner.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch), randomnessRound: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.randomness_round), randomBytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.random_bytes) });
    }
    static fromBcs(data) { return RandomInner.fromFields(RandomInner.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), epoch: this.epoch.toString(), randomnessRound: this.randomnessRound.toString(), randomBytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.randomBytes),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return RandomInner.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch), randomnessRound: (0, reified_1.decodeFromJSONField)("u64", field.randomnessRound), randomBytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.randomBytes) }); }
    static fromJSON(json) {
        if (json.$typeName !== RandomInner.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return RandomInner.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRandomInner(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RandomInner object`);
    } return RandomInner.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RandomInner object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRandomInner(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RandomInner object`);
        }
        return RandomInner.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RandomInner = RandomInner;
RandomInner.$typeName = `${index_1.PKG_V21}::random::RandomInner`;
RandomInner.$numTypeParams = 0;
RandomInner.$isPhantom = [];
