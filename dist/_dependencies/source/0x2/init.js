"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
const authenticatorState = require("./authenticator-state/structs");
const bag = require("./bag/structs");
const balance = require("./balance/structs");
const bcs = require("./bcs/structs");
const bls12381 = require("./bls12381/structs");
const borrow = require("./borrow/structs");
const clock = require("./clock/structs");
const coin = require("./coin/structs");
const config = require("./config/structs");
const denyList = require("./deny-list/structs");
const display = require("./display/structs");
const dynamicField = require("./dynamic-field/structs");
const dynamicObjectField = require("./dynamic-object-field/structs");
const groth16 = require("./groth16/structs");
const groupOps = require("./group-ops/structs");
const kioskExtension = require("./kiosk-extension/structs");
const kiosk = require("./kiosk/structs");
const linkedTable = require("./linked-table/structs");
const objectBag = require("./object-bag/structs");
const objectTable = require("./object-table/structs");
const object = require("./object/structs");
const package_ = require("./package/structs");
const priorityQueue = require("./priority-queue/structs");
const random = require("./random/structs");
const sui = require("./sui/structs");
const tableVec = require("./table-vec/structs");
const table = require("./table/structs");
const token = require("./token/structs");
const transferPolicy = require("./transfer-policy/structs");
const transfer = require("./transfer/structs");
const txContext = require("./tx-context/structs");
const url = require("./url/structs");
const vecMap = require("./vec-map/structs");
const vecSet = require("./vec-set/structs");
const versioned = require("./versioned/structs");
const zkloginVerifiedId = require("./zklogin-verified-id/structs");
const zkloginVerifiedIssuer = require("./zklogin-verified-issuer/structs");
function registerClasses(loader) {
    loader.register(txContext.TxContext);
    loader.register(object.ID);
    loader.register(object.UID);
    loader.register(transfer.Receiving);
    loader.register(dynamicField.Field);
    loader.register(authenticatorState.ActiveJwk);
    loader.register(authenticatorState.AuthenticatorState);
    loader.register(authenticatorState.AuthenticatorStateInner);
    loader.register(authenticatorState.JWK);
    loader.register(authenticatorState.JwkId);
    loader.register(bag.Bag);
    loader.register(balance.Balance);
    loader.register(balance.Supply);
    loader.register(bcs.BCS);
    loader.register(groupOps.Element);
    loader.register(bls12381.G1);
    loader.register(bls12381.G2);
    loader.register(bls12381.GT);
    loader.register(bls12381.Scalar);
    loader.register(borrow.Borrow);
    loader.register(borrow.Referent);
    loader.register(clock.Clock);
    loader.register(url.Url);
    loader.register(vecSet.VecSet);
    loader.register(table.Table);
    loader.register(dynamicObjectField.Wrapper);
    loader.register(config.Config);
    loader.register(config.Setting);
    loader.register(config.SettingData);
    loader.register(denyList.AddressKey);
    loader.register(denyList.ConfigKey);
    loader.register(denyList.ConfigWriteCap);
    loader.register(denyList.DenyList);
    loader.register(denyList.GlobalPauseKey);
    loader.register(denyList.PerTypeConfigCreated);
    loader.register(denyList.PerTypeList);
    loader.register(coin.Coin);
    loader.register(coin.CoinMetadata);
    loader.register(coin.CurrencyCreated);
    loader.register(coin.DenyCap);
    loader.register(coin.DenyCapV2);
    loader.register(coin.RegulatedCoinMetadata);
    loader.register(coin.TreasuryCap);
    loader.register(vecMap.Entry);
    loader.register(vecMap.VecMap);
    loader.register(package_.Publisher);
    loader.register(package_.UpgradeCap);
    loader.register(package_.UpgradeReceipt);
    loader.register(package_.UpgradeTicket);
    loader.register(display.Display);
    loader.register(display.DisplayCreated);
    loader.register(display.VersionUpdated);
    loader.register(groth16.Curve);
    loader.register(groth16.PreparedVerifyingKey);
    loader.register(groth16.ProofPoints);
    loader.register(groth16.PublicProofInputs);
    loader.register(sui.SUI);
    loader.register(transferPolicy.RuleKey);
    loader.register(transferPolicy.TransferPolicy);
    loader.register(transferPolicy.TransferPolicyCap);
    loader.register(transferPolicy.TransferPolicyCreated);
    loader.register(transferPolicy.TransferPolicyDestroyed);
    loader.register(transferPolicy.TransferRequest);
    loader.register(kiosk.Borrow);
    loader.register(kiosk.Item);
    loader.register(kiosk.ItemDelisted);
    loader.register(kiosk.ItemListed);
    loader.register(kiosk.ItemPurchased);
    loader.register(kiosk.Kiosk);
    loader.register(kiosk.KioskOwnerCap);
    loader.register(kiosk.Listing);
    loader.register(kiosk.Lock);
    loader.register(kiosk.PurchaseCap);
    loader.register(kioskExtension.Extension);
    loader.register(kioskExtension.ExtensionKey);
    loader.register(linkedTable.LinkedTable);
    loader.register(linkedTable.Node);
    loader.register(objectBag.ObjectBag);
    loader.register(objectTable.ObjectTable);
    loader.register(priorityQueue.Entry);
    loader.register(priorityQueue.PriorityQueue);
    loader.register(versioned.VersionChangeCap);
    loader.register(versioned.Versioned);
    loader.register(random.Random);
    loader.register(random.RandomGenerator);
    loader.register(random.RandomInner);
    loader.register(tableVec.TableVec);
    loader.register(token.RuleKey);
    loader.register(token.ActionRequest);
    loader.register(token.Token);
    loader.register(token.TokenPolicy);
    loader.register(token.TokenPolicyCap);
    loader.register(token.TokenPolicyCreated);
    loader.register(zkloginVerifiedId.VerifiedID);
    loader.register(zkloginVerifiedIssuer.VerifiedIssuer);
}
