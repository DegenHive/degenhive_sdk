"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseCap = exports.Lock = exports.Listing = exports.KioskOwnerCap = exports.Kiosk = exports.ItemPurchased = exports.ItemListed = exports.ItemDelisted = exports.Item = exports.Borrow = void 0;
exports.isBorrow = isBorrow;
exports.isItem = isItem;
exports.isItemDelisted = isItemDelisted;
exports.isItemListed = isItemListed;
exports.isItemPurchased = isItemPurchased;
exports.isKiosk = isKiosk;
exports.isKioskOwnerCap = isKioskOwnerCap;
exports.isListing = isListing;
exports.isLock = isLock;
exports.isPurchaseCap = isPurchaseCap;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../balance/structs");
const index_1 = require("../index");
const structs_2 = require("../object/structs");
const structs_3 = require("../sui/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Borrow =============================== */
function isBorrow(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::kiosk::Borrow`; }
class Borrow {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Borrow.$typeName;
        this.$isPhantom = Borrow.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Borrow.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.kioskId = fields.kioskId;
        ;
        this.itemId = fields.itemId;
    }
    static reified() { return { typeName: Borrow.$typeName, fullTypeName: (0, util_1.composeSuiType)(Borrow.$typeName, ...[]), typeArgs: [], isPhantom: Borrow.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Borrow.fromFields(fields), fromFieldsWithTypes: (item) => Borrow.fromFieldsWithTypes(item), fromBcs: (data) => Borrow.fromBcs(data), bcs: Borrow.bcs, fromJSONField: (field) => Borrow.fromJSONField(field), fromJSON: (json) => Borrow.fromJSON(json), fromSuiParsedData: (content) => Borrow.fromSuiParsedData(content), fromSuiObjectData: (content) => Borrow.fromSuiObjectData(content), fetch: async (client, id) => Borrow.fetch(client, id), new: (fields) => { return new Borrow([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Borrow.reified(); }
    static phantom() { return (0, reified_1.phantom)(Borrow.reified()); }
    static get p() { return Borrow.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Borrow", {
            kiosk_id: structs_2.ID.bcs, item_id: structs_2.ID.bcs
        });
    }
    ;
    static fromFields(fields) { return Borrow.reified().new({ kioskId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.kiosk_id), itemId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.item_id) }); }
    static fromFieldsWithTypes(item) {
        if (!isBorrow(item.type)) {
            throw new Error("not a Borrow type");
        }
        return Borrow.reified().new({ kioskId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.kiosk_id), itemId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.item_id) });
    }
    static fromBcs(data) { return Borrow.fromFields(Borrow.bcs.parse(data)); }
    toJSONField() {
        return {
            kioskId: this.kioskId, itemId: this.itemId,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Borrow.reified().new({ kioskId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.kioskId), itemId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.itemId) }); }
    static fromJSON(json) {
        if (json.$typeName !== Borrow.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Borrow.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBorrow(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Borrow object`);
    } return Borrow.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBorrow(data.bcs.type)) {
                throw new Error(`object at is not a Borrow object`);
            }
            return Borrow.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Borrow.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Borrow object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBorrow(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Borrow object`);
        }
        return Borrow.fromSuiObjectData(res.data);
    }
}
exports.Borrow = Borrow;
Borrow.$typeName = `${index_1.PKG_V28}::kiosk::Borrow`;
Borrow.$numTypeParams = 0;
Borrow.$isPhantom = [];
/* ============================== Item =============================== */
function isItem(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::kiosk::Item`; }
class Item {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Item.$typeName;
        this.$isPhantom = Item.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Item.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: Item.$typeName, fullTypeName: (0, util_1.composeSuiType)(Item.$typeName, ...[]), typeArgs: [], isPhantom: Item.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Item.fromFields(fields), fromFieldsWithTypes: (item) => Item.fromFieldsWithTypes(item), fromBcs: (data) => Item.fromBcs(data), bcs: Item.bcs, fromJSONField: (field) => Item.fromJSONField(field), fromJSON: (json) => Item.fromJSON(json), fromSuiParsedData: (content) => Item.fromSuiParsedData(content), fromSuiObjectData: (content) => Item.fromSuiObjectData(content), fetch: async (client, id) => Item.fetch(client, id), new: (fields) => { return new Item([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Item.reified(); }
    static phantom() { return (0, reified_1.phantom)(Item.reified()); }
    static get p() { return Item.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Item", {
            id: structs_2.ID.bcs
        });
    }
    ;
    static fromFields(fields) { return Item.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isItem(item.type)) {
            throw new Error("not a Item type");
        }
        return Item.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return Item.fromFields(Item.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Item.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== Item.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Item.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isItem(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Item object`);
    } return Item.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isItem(data.bcs.type)) {
                throw new Error(`object at is not a Item object`);
            }
            return Item.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Item.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Item object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isItem(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Item object`);
        }
        return Item.fromSuiObjectData(res.data);
    }
}
exports.Item = Item;
Item.$typeName = `${index_1.PKG_V28}::kiosk::Item`;
Item.$numTypeParams = 0;
Item.$isPhantom = [];
/* ============================== ItemDelisted =============================== */
function isItemDelisted(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::kiosk::ItemDelisted` + '<'); }
class ItemDelisted {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ItemDelisted.$typeName;
        this.$isPhantom = ItemDelisted.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ItemDelisted.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.kiosk = fields.kiosk;
        ;
        this.id = fields.id;
    }
    static reified(T) { return { typeName: ItemDelisted.$typeName, fullTypeName: (0, util_1.composeSuiType)(ItemDelisted.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: ItemDelisted.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => ItemDelisted.fromFields(T, fields), fromFieldsWithTypes: (item) => ItemDelisted.fromFieldsWithTypes(T, item), fromBcs: (data) => ItemDelisted.fromBcs(T, data), bcs: ItemDelisted.bcs, fromJSONField: (field) => ItemDelisted.fromJSONField(T, field), fromJSON: (json) => ItemDelisted.fromJSON(T, json), fromSuiParsedData: (content) => ItemDelisted.fromSuiParsedData(T, content), fromSuiObjectData: (content) => ItemDelisted.fromSuiObjectData(T, content), fetch: async (client, id) => ItemDelisted.fetch(client, T, id), new: (fields) => { return new ItemDelisted([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return ItemDelisted.reified; }
    static phantom(T) { return (0, reified_1.phantom)(ItemDelisted.reified(T)); }
    static get p() { return ItemDelisted.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("ItemDelisted", {
            kiosk: structs_2.ID.bcs, id: structs_2.ID.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return ItemDelisted.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.kiosk), id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isItemDelisted(item.type)) {
            throw new Error("not a ItemDelisted type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ItemDelisted.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.kiosk), id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id) });
    }
    static fromBcs(typeArg, data) { return ItemDelisted.fromFields(typeArg, ItemDelisted.bcs.parse(data)); }
    toJSONField() {
        return {
            kiosk: this.kiosk, id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return ItemDelisted.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.kiosk), id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== ItemDelisted.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ItemDelisted.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ItemDelisted.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isItemDelisted(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ItemDelisted object`);
    } return ItemDelisted.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isItemDelisted(data.bcs.type)) {
                throw new Error(`object at is not a ItemDelisted object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
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
            return ItemDelisted.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ItemDelisted.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ItemDelisted object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isItemDelisted(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ItemDelisted object`);
        }
        return ItemDelisted.fromSuiObjectData(typeArg, res.data);
    }
}
exports.ItemDelisted = ItemDelisted;
ItemDelisted.$typeName = `${index_1.PKG_V28}::kiosk::ItemDelisted`;
ItemDelisted.$numTypeParams = 1;
ItemDelisted.$isPhantom = [true,];
/* ============================== ItemListed =============================== */
function isItemListed(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::kiosk::ItemListed` + '<'); }
class ItemListed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ItemListed.$typeName;
        this.$isPhantom = ItemListed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ItemListed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.kiosk = fields.kiosk;
        ;
        this.id = fields.id;
        ;
        this.price = fields.price;
    }
    static reified(T) { return { typeName: ItemListed.$typeName, fullTypeName: (0, util_1.composeSuiType)(ItemListed.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: ItemListed.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => ItemListed.fromFields(T, fields), fromFieldsWithTypes: (item) => ItemListed.fromFieldsWithTypes(T, item), fromBcs: (data) => ItemListed.fromBcs(T, data), bcs: ItemListed.bcs, fromJSONField: (field) => ItemListed.fromJSONField(T, field), fromJSON: (json) => ItemListed.fromJSON(T, json), fromSuiParsedData: (content) => ItemListed.fromSuiParsedData(T, content), fromSuiObjectData: (content) => ItemListed.fromSuiObjectData(T, content), fetch: async (client, id) => ItemListed.fetch(client, T, id), new: (fields) => { return new ItemListed([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return ItemListed.reified; }
    static phantom(T) { return (0, reified_1.phantom)(ItemListed.reified(T)); }
    static get p() { return ItemListed.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("ItemListed", {
            kiosk: structs_2.ID.bcs, id: structs_2.ID.bcs, price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return ItemListed.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.kiosk), id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), price: (0, reified_1.decodeFromFields)("u64", fields.price) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isItemListed(item.type)) {
            throw new Error("not a ItemListed type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ItemListed.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.kiosk), id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price) });
    }
    static fromBcs(typeArg, data) { return ItemListed.fromFields(typeArg, ItemListed.bcs.parse(data)); }
    toJSONField() {
        return {
            kiosk: this.kiosk, id: this.id, price: this.price.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return ItemListed.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.kiosk), id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), price: (0, reified_1.decodeFromJSONField)("u64", field.price) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== ItemListed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ItemListed.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ItemListed.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isItemListed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ItemListed object`);
    } return ItemListed.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isItemListed(data.bcs.type)) {
                throw new Error(`object at is not a ItemListed object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
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
            return ItemListed.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ItemListed.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ItemListed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isItemListed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ItemListed object`);
        }
        return ItemListed.fromSuiObjectData(typeArg, res.data);
    }
}
exports.ItemListed = ItemListed;
ItemListed.$typeName = `${index_1.PKG_V28}::kiosk::ItemListed`;
ItemListed.$numTypeParams = 1;
ItemListed.$isPhantom = [true,];
/* ============================== ItemPurchased =============================== */
function isItemPurchased(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::kiosk::ItemPurchased` + '<'); }
class ItemPurchased {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ItemPurchased.$typeName;
        this.$isPhantom = ItemPurchased.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ItemPurchased.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.kiosk = fields.kiosk;
        ;
        this.id = fields.id;
        ;
        this.price = fields.price;
    }
    static reified(T) { return { typeName: ItemPurchased.$typeName, fullTypeName: (0, util_1.composeSuiType)(ItemPurchased.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: ItemPurchased.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => ItemPurchased.fromFields(T, fields), fromFieldsWithTypes: (item) => ItemPurchased.fromFieldsWithTypes(T, item), fromBcs: (data) => ItemPurchased.fromBcs(T, data), bcs: ItemPurchased.bcs, fromJSONField: (field) => ItemPurchased.fromJSONField(T, field), fromJSON: (json) => ItemPurchased.fromJSON(T, json), fromSuiParsedData: (content) => ItemPurchased.fromSuiParsedData(T, content), fromSuiObjectData: (content) => ItemPurchased.fromSuiObjectData(T, content), fetch: async (client, id) => ItemPurchased.fetch(client, T, id), new: (fields) => { return new ItemPurchased([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return ItemPurchased.reified; }
    static phantom(T) { return (0, reified_1.phantom)(ItemPurchased.reified(T)); }
    static get p() { return ItemPurchased.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("ItemPurchased", {
            kiosk: structs_2.ID.bcs, id: structs_2.ID.bcs, price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return ItemPurchased.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.kiosk), id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), price: (0, reified_1.decodeFromFields)("u64", fields.price) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isItemPurchased(item.type)) {
            throw new Error("not a ItemPurchased type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ItemPurchased.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.kiosk), id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), price: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.price) });
    }
    static fromBcs(typeArg, data) { return ItemPurchased.fromFields(typeArg, ItemPurchased.bcs.parse(data)); }
    toJSONField() {
        return {
            kiosk: this.kiosk, id: this.id, price: this.price.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return ItemPurchased.reified(typeArg).new({ kiosk: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.kiosk), id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), price: (0, reified_1.decodeFromJSONField)("u64", field.price) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== ItemPurchased.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ItemPurchased.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ItemPurchased.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isItemPurchased(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ItemPurchased object`);
    } return ItemPurchased.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isItemPurchased(data.bcs.type)) {
                throw new Error(`object at is not a ItemPurchased object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
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
            return ItemPurchased.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ItemPurchased.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ItemPurchased object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isItemPurchased(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ItemPurchased object`);
        }
        return ItemPurchased.fromSuiObjectData(typeArg, res.data);
    }
}
exports.ItemPurchased = ItemPurchased;
ItemPurchased.$typeName = `${index_1.PKG_V28}::kiosk::ItemPurchased`;
ItemPurchased.$numTypeParams = 1;
ItemPurchased.$isPhantom = [true,];
/* ============================== Kiosk =============================== */
function isKiosk(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::kiosk::Kiosk`; }
class Kiosk {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Kiosk.$typeName;
        this.$isPhantom = Kiosk.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Kiosk.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.profits = fields.profits;
        ;
        this.owner = fields.owner;
        ;
        this.itemCount = fields.itemCount;
        ;
        this.allowExtensions = fields.allowExtensions;
    }
    static reified() { return { typeName: Kiosk.$typeName, fullTypeName: (0, util_1.composeSuiType)(Kiosk.$typeName, ...[]), typeArgs: [], isPhantom: Kiosk.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Kiosk.fromFields(fields), fromFieldsWithTypes: (item) => Kiosk.fromFieldsWithTypes(item), fromBcs: (data) => Kiosk.fromBcs(data), bcs: Kiosk.bcs, fromJSONField: (field) => Kiosk.fromJSONField(field), fromJSON: (json) => Kiosk.fromJSON(json), fromSuiParsedData: (content) => Kiosk.fromSuiParsedData(content), fromSuiObjectData: (content) => Kiosk.fromSuiObjectData(content), fetch: async (client, id) => Kiosk.fetch(client, id), new: (fields) => { return new Kiosk([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Kiosk.reified(); }
    static phantom() { return (0, reified_1.phantom)(Kiosk.reified()); }
    static get p() { return Kiosk.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Kiosk", {
            id: structs_2.UID.bcs, profits: structs_1.Balance.bcs, owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), item_count: bcs_1.bcs.u32(), allow_extensions: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return Kiosk.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), profits: (0, reified_1.decodeFromFields)(structs_1.Balance.reified(reified.phantom(structs_3.SUI.reified())), fields.profits), owner: (0, reified_1.decodeFromFields)("address", fields.owner), itemCount: (0, reified_1.decodeFromFields)("u32", fields.item_count), allowExtensions: (0, reified_1.decodeFromFields)("bool", fields.allow_extensions) }); }
    static fromFieldsWithTypes(item) {
        if (!isKiosk(item.type)) {
            throw new Error("not a Kiosk type");
        }
        return Kiosk.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), profits: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Balance.reified(reified.phantom(structs_3.SUI.reified())), item.fields.profits), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), itemCount: (0, reified_1.decodeFromFieldsWithTypes)("u32", item.fields.item_count), allowExtensions: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.allow_extensions) });
    }
    static fromBcs(data) { return Kiosk.fromFields(Kiosk.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, profits: this.profits.toJSONField(), owner: this.owner, itemCount: this.itemCount, allowExtensions: this.allowExtensions,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Kiosk.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), profits: (0, reified_1.decodeFromJSONField)(structs_1.Balance.reified(reified.phantom(structs_3.SUI.reified())), field.profits), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), itemCount: (0, reified_1.decodeFromJSONField)("u32", field.itemCount), allowExtensions: (0, reified_1.decodeFromJSONField)("bool", field.allowExtensions) }); }
    static fromJSON(json) {
        if (json.$typeName !== Kiosk.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Kiosk.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isKiosk(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Kiosk object`);
    } return Kiosk.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isKiosk(data.bcs.type)) {
                throw new Error(`object at is not a Kiosk object`);
            }
            return Kiosk.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Kiosk.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Kiosk object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isKiosk(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Kiosk object`);
        }
        return Kiosk.fromSuiObjectData(res.data);
    }
}
exports.Kiosk = Kiosk;
Kiosk.$typeName = `${index_1.PKG_V28}::kiosk::Kiosk`;
Kiosk.$numTypeParams = 0;
Kiosk.$isPhantom = [];
/* ============================== KioskOwnerCap =============================== */
function isKioskOwnerCap(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::kiosk::KioskOwnerCap`; }
class KioskOwnerCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = KioskOwnerCap.$typeName;
        this.$isPhantom = KioskOwnerCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(KioskOwnerCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.for = fields.for;
    }
    static reified() { return { typeName: KioskOwnerCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(KioskOwnerCap.$typeName, ...[]), typeArgs: [], isPhantom: KioskOwnerCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => KioskOwnerCap.fromFields(fields), fromFieldsWithTypes: (item) => KioskOwnerCap.fromFieldsWithTypes(item), fromBcs: (data) => KioskOwnerCap.fromBcs(data), bcs: KioskOwnerCap.bcs, fromJSONField: (field) => KioskOwnerCap.fromJSONField(field), fromJSON: (json) => KioskOwnerCap.fromJSON(json), fromSuiParsedData: (content) => KioskOwnerCap.fromSuiParsedData(content), fromSuiObjectData: (content) => KioskOwnerCap.fromSuiObjectData(content), fetch: async (client, id) => KioskOwnerCap.fetch(client, id), new: (fields) => { return new KioskOwnerCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return KioskOwnerCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(KioskOwnerCap.reified()); }
    static get p() { return KioskOwnerCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("KioskOwnerCap", {
            id: structs_2.UID.bcs, for: structs_2.ID.bcs
        });
    }
    ;
    static fromFields(fields) { return KioskOwnerCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), for: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.for) }); }
    static fromFieldsWithTypes(item) {
        if (!isKioskOwnerCap(item.type)) {
            throw new Error("not a KioskOwnerCap type");
        }
        return KioskOwnerCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), for: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.for) });
    }
    static fromBcs(data) { return KioskOwnerCap.fromFields(KioskOwnerCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, for: this.for,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return KioskOwnerCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), for: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.for) }); }
    static fromJSON(json) {
        if (json.$typeName !== KioskOwnerCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return KioskOwnerCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isKioskOwnerCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a KioskOwnerCap object`);
    } return KioskOwnerCap.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isKioskOwnerCap(data.bcs.type)) {
                throw new Error(`object at is not a KioskOwnerCap object`);
            }
            return KioskOwnerCap.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return KioskOwnerCap.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching KioskOwnerCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isKioskOwnerCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a KioskOwnerCap object`);
        }
        return KioskOwnerCap.fromSuiObjectData(res.data);
    }
}
exports.KioskOwnerCap = KioskOwnerCap;
KioskOwnerCap.$typeName = `${index_1.PKG_V28}::kiosk::KioskOwnerCap`;
KioskOwnerCap.$numTypeParams = 0;
KioskOwnerCap.$isPhantom = [];
/* ============================== Listing =============================== */
function isListing(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::kiosk::Listing`; }
class Listing {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Listing.$typeName;
        this.$isPhantom = Listing.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Listing.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.isExclusive = fields.isExclusive;
    }
    static reified() { return { typeName: Listing.$typeName, fullTypeName: (0, util_1.composeSuiType)(Listing.$typeName, ...[]), typeArgs: [], isPhantom: Listing.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Listing.fromFields(fields), fromFieldsWithTypes: (item) => Listing.fromFieldsWithTypes(item), fromBcs: (data) => Listing.fromBcs(data), bcs: Listing.bcs, fromJSONField: (field) => Listing.fromJSONField(field), fromJSON: (json) => Listing.fromJSON(json), fromSuiParsedData: (content) => Listing.fromSuiParsedData(content), fromSuiObjectData: (content) => Listing.fromSuiObjectData(content), fetch: async (client, id) => Listing.fetch(client, id), new: (fields) => { return new Listing([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Listing.reified(); }
    static phantom() { return (0, reified_1.phantom)(Listing.reified()); }
    static get p() { return Listing.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Listing", {
            id: structs_2.ID.bcs, is_exclusive: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return Listing.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id), isExclusive: (0, reified_1.decodeFromFields)("bool", fields.is_exclusive) }); }
    static fromFieldsWithTypes(item) {
        if (!isListing(item.type)) {
            throw new Error("not a Listing type");
        }
        return Listing.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id), isExclusive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_exclusive) });
    }
    static fromBcs(data) { return Listing.fromFields(Listing.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, isExclusive: this.isExclusive,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Listing.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id), isExclusive: (0, reified_1.decodeFromJSONField)("bool", field.isExclusive) }); }
    static fromJSON(json) {
        if (json.$typeName !== Listing.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Listing.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isListing(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Listing object`);
    } return Listing.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isListing(data.bcs.type)) {
                throw new Error(`object at is not a Listing object`);
            }
            return Listing.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Listing.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Listing object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isListing(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Listing object`);
        }
        return Listing.fromSuiObjectData(res.data);
    }
}
exports.Listing = Listing;
Listing.$typeName = `${index_1.PKG_V28}::kiosk::Listing`;
Listing.$numTypeParams = 0;
Listing.$isPhantom = [];
/* ============================== Lock =============================== */
function isLock(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::kiosk::Lock`; }
class Lock {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Lock.$typeName;
        this.$isPhantom = Lock.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Lock.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: Lock.$typeName, fullTypeName: (0, util_1.composeSuiType)(Lock.$typeName, ...[]), typeArgs: [], isPhantom: Lock.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Lock.fromFields(fields), fromFieldsWithTypes: (item) => Lock.fromFieldsWithTypes(item), fromBcs: (data) => Lock.fromBcs(data), bcs: Lock.bcs, fromJSONField: (field) => Lock.fromJSONField(field), fromJSON: (json) => Lock.fromJSON(json), fromSuiParsedData: (content) => Lock.fromSuiParsedData(content), fromSuiObjectData: (content) => Lock.fromSuiObjectData(content), fetch: async (client, id) => Lock.fetch(client, id), new: (fields) => { return new Lock([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Lock.reified(); }
    static phantom() { return (0, reified_1.phantom)(Lock.reified()); }
    static get p() { return Lock.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Lock", {
            id: structs_2.ID.bcs
        });
    }
    ;
    static fromFields(fields) { return Lock.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isLock(item.type)) {
            throw new Error("not a Lock type");
        }
        return Lock.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return Lock.fromFields(Lock.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Lock.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== Lock.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Lock.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLock(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Lock object`);
    } return Lock.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLock(data.bcs.type)) {
                throw new Error(`object at is not a Lock object`);
            }
            return Lock.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Lock.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Lock object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLock(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Lock object`);
        }
        return Lock.fromSuiObjectData(res.data);
    }
}
exports.Lock = Lock;
Lock.$typeName = `${index_1.PKG_V28}::kiosk::Lock`;
Lock.$numTypeParams = 0;
Lock.$isPhantom = [];
/* ============================== PurchaseCap =============================== */
function isPurchaseCap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::kiosk::PurchaseCap` + '<'); }
class PurchaseCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PurchaseCap.$typeName;
        this.$isPhantom = PurchaseCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PurchaseCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.kioskId = fields.kioskId;
        ;
        this.itemId = fields.itemId;
        ;
        this.minPrice = fields.minPrice;
    }
    static reified(T) { return { typeName: PurchaseCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(PurchaseCap.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: PurchaseCap.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => PurchaseCap.fromFields(T, fields), fromFieldsWithTypes: (item) => PurchaseCap.fromFieldsWithTypes(T, item), fromBcs: (data) => PurchaseCap.fromBcs(T, data), bcs: PurchaseCap.bcs, fromJSONField: (field) => PurchaseCap.fromJSONField(T, field), fromJSON: (json) => PurchaseCap.fromJSON(T, json), fromSuiParsedData: (content) => PurchaseCap.fromSuiParsedData(T, content), fromSuiObjectData: (content) => PurchaseCap.fromSuiObjectData(T, content), fetch: async (client, id) => PurchaseCap.fetch(client, T, id), new: (fields) => { return new PurchaseCap([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return PurchaseCap.reified; }
    static phantom(T) { return (0, reified_1.phantom)(PurchaseCap.reified(T)); }
    static get p() { return PurchaseCap.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("PurchaseCap", {
            id: structs_2.UID.bcs, kiosk_id: structs_2.ID.bcs, item_id: structs_2.ID.bcs, min_price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return PurchaseCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), kioskId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.kiosk_id), itemId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.item_id), minPrice: (0, reified_1.decodeFromFields)("u64", fields.min_price) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isPurchaseCap(item.type)) {
            throw new Error("not a PurchaseCap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return PurchaseCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), kioskId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.kiosk_id), itemId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.item_id), minPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.min_price) });
    }
    static fromBcs(typeArg, data) { return PurchaseCap.fromFields(typeArg, PurchaseCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, kioskId: this.kioskId, itemId: this.itemId, minPrice: this.minPrice.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return PurchaseCap.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), kioskId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.kioskId), itemId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.itemId), minPrice: (0, reified_1.decodeFromJSONField)("u64", field.minPrice) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== PurchaseCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(PurchaseCap.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return PurchaseCap.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPurchaseCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PurchaseCap object`);
    } return PurchaseCap.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPurchaseCap(data.bcs.type)) {
                throw new Error(`object at is not a PurchaseCap object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
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
            return PurchaseCap.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PurchaseCap.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PurchaseCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPurchaseCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PurchaseCap object`);
        }
        return PurchaseCap.fromSuiObjectData(typeArg, res.data);
    }
}
exports.PurchaseCap = PurchaseCap;
PurchaseCap.$typeName = `${index_1.PKG_V28}::kiosk::PurchaseCap`;
PurchaseCap.$numTypeParams = 1;
PurchaseCap.$isPhantom = [true,];
