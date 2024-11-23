"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pow = pow;
exports.sqrt = sqrt;
exports.addVectors = addVectors;
exports.addVectorsU128 = addVectorsU128;
exports.addVectorsU256 = addVectorsU256;
exports.createZeroVector = createZeroVector;
exports.createZeroVectorU256 = createZeroVectorU256;
exports.findGreatestFrom2 = findGreatestFrom2;
exports.findGreatestFrom3 = findGreatestFrom3;
exports.findGreatestFrom4 = findGreatestFrom4;
exports.findGreatestFrom5 = findGreatestFrom5;
exports.getNonZeroCountAndIndex = getNonZeroCountAndIndex;
exports.getNonZeroCountAndIndexU256 = getNonZeroCountAndIndexU256;
exports.init = init;
exports.maxU128 = maxU128;
exports.maxU256 = maxU256;
exports.maxU64 = maxU64;
exports.merge = merge;
exports.minU128 = minU128;
exports.minU256 = minU256;
exports.minU64 = minU64;
exports.mulDiv = mulDiv;
exports.mulDivU128 = mulDivU128;
exports.mulDivU256 = mulDivU256;
exports.mulToU128 = mulToU128;
exports.multiplyVectors = multiplyVectors;
exports.multiplyVectorsU256 = multiplyVectorsU256;
exports.overflowAdd = overflowAdd;
exports.overflowAddU256 = overflowAddU256;
exports.pow10 = pow10;
exports.pow10U256 = pow10U256;
exports.powNu256 = powNu256;
exports.powU256 = powU256;
exports.sliceVector = sliceVector;
exports.sort = sort;
exports.sortU256 = sortU256;
exports.sqrtInt = sqrtInt;
exports.sqrtIntU256 = sqrtIntU256;
exports.subFromMaxU256 = subFromMaxU256;
exports.subtractMod = subtractMod;
exports.subtractModU256 = subtractModU256;
exports.subtractVectors = subtractVectors;
exports.subtractVectorsU256 = subtractVectorsU256;
exports.vectorCreateU128 = vectorCreateU128;
exports.vectorCreateU64 = vectorCreateU64;
exports.vectorSumU256 = vectorSumU256;
exports.vectorSumU64 = vectorSumU64;
exports.vectorU64ToU128 = vectorU64ToU128;
exports.vectorU64ToU256 = vectorU64ToU256;
exports.zeroVector = zeroVector;
const __1 = require("..");
const PUBLISHED_AT = __1.yieldflow.PUBLISHED_AT;
const structs_1 = require("../../source/0x1/option/structs");
const util_1 = require("../../_framework/util");
function pow(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::pow`, arguments: [(0, util_1.pure)(tx, args.base, `u128`), (0, util_1.pure)(tx, args.exponent, `u128`)], }); }
function sqrt(tx, y) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sqrt`, arguments: [(0, util_1.pure)(tx, y, `u128`)], }); }
function addVectors(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::add_vectors`, arguments: [(0, util_1.pure)(tx, args.vecA, `vector<u64>`), (0, util_1.pure)(tx, args.vecB, `vector<u64>`)], }); }
function addVectorsU128(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::add_vectors_u128`, arguments: [(0, util_1.pure)(tx, args.vecA, `vector<u128>`), (0, util_1.pure)(tx, args.vecB, `vector<u64>`)], }); }
function addVectorsU256(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::add_vectors_u256`, arguments: [(0, util_1.pure)(tx, args.vecA, `vector<u256>`), (0, util_1.pure)(tx, args.vecB, `vector<u256>`)], }); }
function createZeroVector(tx, len) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::create_zero_vector`, arguments: [(0, util_1.pure)(tx, len, `u64`)], }); }
function createZeroVectorU256(tx, len) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::create_zero_vector_u256`, arguments: [(0, util_1.pure)(tx, len, `u64`)], }); }
function findGreatestFrom2(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_2`, arguments: [(0, util_1.pure)(tx, args.a, `u8`), (0, util_1.pure)(tx, args.b, `u8`)], }); }
function findGreatestFrom3(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_3`, arguments: [(0, util_1.pure)(tx, args.a, `u8`), (0, util_1.pure)(tx, args.b, `u8`), (0, util_1.pure)(tx, args.c, `u8`)], }); }
function findGreatestFrom4(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_4`, arguments: [(0, util_1.pure)(tx, args.a, `u8`), (0, util_1.pure)(tx, args.b, `u8`), (0, util_1.pure)(tx, args.c, `u8`), (0, util_1.pure)(tx, args.d, `u8`)], }); }
function findGreatestFrom5(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_5`, arguments: [(0, util_1.pure)(tx, args.a, `u8`), (0, util_1.pure)(tx, args.b, `u8`), (0, util_1.pure)(tx, args.c, `u8`), (0, util_1.pure)(tx, args.d, `u8`), (0, util_1.pure)(tx, args.e, `u8`)], }); }
function getNonZeroCountAndIndex(tx, vec) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::get_non_zero_count_and_index`, arguments: [(0, util_1.pure)(tx, vec, `vector<u64>`)], }); }
function getNonZeroCountAndIndexU256(tx, vec) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::get_non_zero_count_and_index_u256`, arguments: [(0, util_1.pure)(tx, vec, `vector<u256>`)], }); }
function init(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::init`, arguments: [], }); }
function maxU128(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::max_u128`, arguments: [(0, util_1.pure)(tx, args.a, `u128`), (0, util_1.pure)(tx, args.b, `u128`)], }); }
function maxU256(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::max_u256`, arguments: [(0, util_1.pure)(tx, args.a, `u256`), (0, util_1.pure)(tx, args.b, `u256`)], }); }
function maxU64(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::max_u64`, arguments: [(0, util_1.pure)(tx, args.a, `u64`), (0, util_1.pure)(tx, args.b, `u64`)], }); }
function merge(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::merge`, arguments: [(0, util_1.pure)(tx, args.left, `vector<u256>`), (0, util_1.pure)(tx, args.right, `vector<u256>`)], }); }
function minU128(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::min_u128`, arguments: [(0, util_1.pure)(tx, args.a, `u128`), (0, util_1.pure)(tx, args.b, `u128`)], }); }
function minU256(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::min_u256`, arguments: [(0, util_1.pure)(tx, args.a, `u256`), (0, util_1.pure)(tx, args.b, `u256`)], }); }
function minU64(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::min_u64`, arguments: [(0, util_1.pure)(tx, args.a, `u64`), (0, util_1.pure)(tx, args.b, `u64`)], }); }
function mulDiv(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_div`, arguments: [(0, util_1.pure)(tx, args.x, `u64`), (0, util_1.pure)(tx, args.y, `u64`), (0, util_1.pure)(tx, args.z, `u64`)], }); }
function mulDivU128(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_div_u128`, arguments: [(0, util_1.pure)(tx, args.x, `u128`), (0, util_1.pure)(tx, args.y, `u128`), (0, util_1.pure)(tx, args.z, `u128`)], }); }
function mulDivU256(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_div_u256`, arguments: [(0, util_1.pure)(tx, args.x, `u256`), (0, util_1.pure)(tx, args.y, `u256`), (0, util_1.pure)(tx, args.z, `u256`)], }); }
function mulToU128(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_to_u128`, arguments: [(0, util_1.pure)(tx, args.x, `u64`), (0, util_1.pure)(tx, args.y, `u64`)], }); }
function multiplyVectors(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::multiply_vectors`, arguments: [(0, util_1.pure)(tx, args.vecA, `vector<u64>`), (0, util_1.pure)(tx, args.vecB, `vector<u64>`), (0, util_1.pure)(tx, args.precision, `u64`)], }); }
function multiplyVectorsU256(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::multiply_vectors_u256`, arguments: [(0, util_1.pure)(tx, args.vecA, `vector<u256>`), (0, util_1.pure)(tx, args.vecB, `vector<u256>`)], }); }
function overflowAdd(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::overflow_add`, arguments: [(0, util_1.pure)(tx, args.a, `u128`), (0, util_1.pure)(tx, args.b, `u128`)], }); }
function overflowAddU256(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::overflow_add_u256`, arguments: [(0, util_1.pure)(tx, args.a, `u256`), (0, util_1.pure)(tx, args.b, `u256`)], }); }
function pow10(tx, degree) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::pow_10`, arguments: [(0, util_1.pure)(tx, degree, `u8`)], }); }
function pow10U256(tx, degree) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::pow_10_u256`, arguments: [(0, util_1.pure)(tx, degree, `u8`)], }); }
function powNu256(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::pow_nu256`, arguments: [(0, util_1.pure)(tx, args.baseU256, `u256`), (0, util_1.pure)(tx, args.exponent, `u128`)], }); }
function powU256(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::pow_u256`, arguments: [(0, util_1.pure)(tx, args.base, `u128`), (0, util_1.pure)(tx, args.exponent, `u128`)], }); }
function sliceVector(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::slice_vector`, arguments: [(0, util_1.pure)(tx, args.vec, `vector<u256>`), (0, util_1.pure)(tx, args.start, `u64`), (0, util_1.pure)(tx, args.end, `u64`)], }); }
function sort(tx, vec) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sort`, arguments: [(0, util_1.pure)(tx, vec, `vector<u128>`)], }); }
function sortU256(tx, vec) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sort_u256`, arguments: [(0, util_1.pure)(tx, vec, `vector<u256>`)], }); }
function sqrtInt(tx, x) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sqrt_int`, arguments: [(0, util_1.pure)(tx, x, `u256`)], }); }
function sqrtIntU256(tx, x) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sqrt_int_u256`, arguments: [(0, util_1.pure)(tx, x, `u256`)], }); }
function subFromMaxU256(tx, a) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sub_from_max_u256`, arguments: [(0, util_1.pure)(tx, a, `u256`)], }); }
function subtractMod(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::subtract_mod`, arguments: [(0, util_1.pure)(tx, args.a, `u128`), (0, util_1.pure)(tx, args.b, `u128`)], }); }
function subtractModU256(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::subtract_mod_u256`, arguments: [(0, util_1.pure)(tx, args.a, `u256`), (0, util_1.pure)(tx, args.b, `u256`)], }); }
function subtractVectors(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::subtract_vectors`, arguments: [(0, util_1.pure)(tx, args.vecA, `vector<u64>`), (0, util_1.pure)(tx, args.vecB, `vector<u64>`)], }); }
function subtractVectorsU256(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::subtract_vectors_u256`, arguments: [(0, util_1.pure)(tx, args.vecA, `vector<u256>`), (0, util_1.pure)(tx, args.vecB, `vector<u256>`)], }); }
function vectorCreateU128(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_create_u128`, arguments: [(0, util_1.pure)(tx, args.a, `${structs_1.Option.$typeName}<u128>`), (0, util_1.pure)(tx, args.b, `${structs_1.Option.$typeName}<u128>`), (0, util_1.pure)(tx, args.c, `${structs_1.Option.$typeName}<u128>`), (0, util_1.pure)(tx, args.d, `${structs_1.Option.$typeName}<u128>`), (0, util_1.pure)(tx, args.e, `${structs_1.Option.$typeName}<u128>`)], }); }
function vectorCreateU64(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_create_u64`, arguments: [(0, util_1.pure)(tx, args.a, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.b, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.c, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.d, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.e, `${structs_1.Option.$typeName}<u64>`)], }); }
function vectorSumU256(tx, vec) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_sum_u256`, arguments: [(0, util_1.pure)(tx, vec, `vector<u256>`)], }); }
function vectorSumU64(tx, vec) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_sum_u64`, arguments: [(0, util_1.pure)(tx, vec, `vector<u64>`)], }); }
function vectorU64ToU128(tx, vec) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_u64_to_u128`, arguments: [(0, util_1.pure)(tx, vec, `vector<u64>`)], }); }
function vectorU64ToU256(tx, vec) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_u64_to_u256`, arguments: [(0, util_1.pure)(tx, vec, `vector<u64>`)], }); }
function zeroVector(tx, len) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::zero_vector`, arguments: [(0, util_1.pure)(tx, len, `u64`)], }); }
