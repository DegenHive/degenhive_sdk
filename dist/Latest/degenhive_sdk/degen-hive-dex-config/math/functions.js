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
const util_1 = require("../../_framework/util");
function pow(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::pow`, arguments: [(0, util_1.pure)(txb, args.base, `u128`), (0, util_1.pure)(txb, args.exponent, `u128`)], }); }
function sqrt(txb, y) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::sqrt`, arguments: [(0, util_1.pure)(txb, y, `u128`)], }); }
function addVectors(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::add_vectors`, arguments: [(0, util_1.pure)(txb, args.vecA, `vector<u64>`), (0, util_1.pure)(txb, args.vecB, `vector<u64>`)], }); }
function addVectorsU128(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::add_vectors_u128`, arguments: [(0, util_1.pure)(txb, args.vecA, `vector<u128>`), (0, util_1.pure)(txb, args.vecB, `vector<u64>`)], }); }
function addVectorsU256(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::add_vectors_u256`, arguments: [(0, util_1.pure)(txb, args.vecA, `vector<u256>`), (0, util_1.pure)(txb, args.vecB, `vector<u256>`)], }); }
function createZeroVector(txb, len) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::create_zero_vector`, arguments: [(0, util_1.pure)(txb, len, `u64`)], }); }
function createZeroVectorU256(txb, len) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::create_zero_vector_u256`, arguments: [(0, util_1.pure)(txb, len, `u64`)], }); }
function findGreatestFrom2(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::find_greatest_from_2`, arguments: [(0, util_1.pure)(txb, args.a, `u8`), (0, util_1.pure)(txb, args.b, `u8`)], }); }
function findGreatestFrom3(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::find_greatest_from_3`, arguments: [(0, util_1.pure)(txb, args.a, `u8`), (0, util_1.pure)(txb, args.b, `u8`), (0, util_1.pure)(txb, args.c, `u8`)], }); }
function findGreatestFrom4(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::find_greatest_from_4`, arguments: [(0, util_1.pure)(txb, args.a, `u8`), (0, util_1.pure)(txb, args.b, `u8`), (0, util_1.pure)(txb, args.c, `u8`), (0, util_1.pure)(txb, args.d, `u8`)], }); }
function findGreatestFrom5(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::find_greatest_from_5`, arguments: [(0, util_1.pure)(txb, args.a, `u8`), (0, util_1.pure)(txb, args.b, `u8`), (0, util_1.pure)(txb, args.c, `u8`), (0, util_1.pure)(txb, args.d, `u8`), (0, util_1.pure)(txb, args.e, `u8`)], }); }
function getNonZeroCountAndIndex(txb, vec) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::get_non_zero_count_and_index`, arguments: [(0, util_1.pure)(txb, vec, `vector<u64>`)], }); }
function getNonZeroCountAndIndexU256(txb, vec) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::get_non_zero_count_and_index_u256`, arguments: [(0, util_1.pure)(txb, vec, `vector<u256>`)], }); }
function init(txb) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::init`, arguments: [], }); }
function maxU128(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::max_u128`, arguments: [(0, util_1.pure)(txb, args.a, `u128`), (0, util_1.pure)(txb, args.b, `u128`)], }); }
function maxU256(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::max_u256`, arguments: [(0, util_1.pure)(txb, args.a, `u256`), (0, util_1.pure)(txb, args.b, `u256`)], }); }
function maxU64(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::max_u64`, arguments: [(0, util_1.pure)(txb, args.a, `u64`), (0, util_1.pure)(txb, args.b, `u64`)], }); }
function merge(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::merge`, arguments: [(0, util_1.pure)(txb, args.left, `vector<u256>`), (0, util_1.pure)(txb, args.right, `vector<u256>`)], }); }
function minU128(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::min_u128`, arguments: [(0, util_1.pure)(txb, args.a, `u128`), (0, util_1.pure)(txb, args.b, `u128`)], }); }
function minU256(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::min_u256`, arguments: [(0, util_1.pure)(txb, args.a, `u256`), (0, util_1.pure)(txb, args.b, `u256`)], }); }
function minU64(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::min_u64`, arguments: [(0, util_1.pure)(txb, args.a, `u64`), (0, util_1.pure)(txb, args.b, `u64`)], }); }
function mulDiv(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::mul_div`, arguments: [(0, util_1.pure)(txb, args.x, `u64`), (0, util_1.pure)(txb, args.y, `u64`), (0, util_1.pure)(txb, args.z, `u64`)], }); }
function mulDivU128(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::mul_div_u128`, arguments: [(0, util_1.pure)(txb, args.x, `u128`), (0, util_1.pure)(txb, args.y, `u128`), (0, util_1.pure)(txb, args.z, `u128`)], }); }
function mulDivU256(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::mul_div_u256`, arguments: [(0, util_1.pure)(txb, args.x, `u256`), (0, util_1.pure)(txb, args.y, `u256`), (0, util_1.pure)(txb, args.z, `u256`)], }); }
function mulToU128(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::mul_to_u128`, arguments: [(0, util_1.pure)(txb, args.x, `u64`), (0, util_1.pure)(txb, args.y, `u64`)], }); }
function multiplyVectors(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::multiply_vectors`, arguments: [(0, util_1.pure)(txb, args.vecA, `vector<u64>`), (0, util_1.pure)(txb, args.vecB, `vector<u64>`), (0, util_1.pure)(txb, args.precision, `u64`)], }); }
function multiplyVectorsU256(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::multiply_vectors_u256`, arguments: [(0, util_1.pure)(txb, args.vecA, `vector<u256>`), (0, util_1.pure)(txb, args.vecB, `vector<u256>`)], }); }
function overflowAdd(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::overflow_add`, arguments: [(0, util_1.pure)(txb, args.a, `u128`), (0, util_1.pure)(txb, args.b, `u128`)], }); }
function overflowAddU256(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::overflow_add_u256`, arguments: [(0, util_1.pure)(txb, args.a, `u256`), (0, util_1.pure)(txb, args.b, `u256`)], }); }
function pow10(txb, degree) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::pow_10`, arguments: [(0, util_1.pure)(txb, degree, `u8`)], }); }
function pow10U256(txb, degree) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::pow_10_u256`, arguments: [(0, util_1.pure)(txb, degree, `u8`)], }); }
function powU256(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::pow_u256`, arguments: [(0, util_1.pure)(txb, args.base, `u128`), (0, util_1.pure)(txb, args.exponent, `u128`)], }); }
function sliceVector(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::slice_vector`, arguments: [(0, util_1.pure)(txb, args.vec, `vector<u256>`), (0, util_1.pure)(txb, args.start, `u64`), (0, util_1.pure)(txb, args.end, `u64`)], }); }
function sort(txb, vec) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::sort`, arguments: [(0, util_1.pure)(txb, vec, `vector<u128>`)], }); }
function sortU256(txb, vec) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::sort_u256`, arguments: [(0, util_1.pure)(txb, vec, `vector<u256>`)], }); }
function sqrtInt(txb, x) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::sqrt_int`, arguments: [(0, util_1.pure)(txb, x, `u256`)], }); }
function sqrtIntU256(txb, x) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::sqrt_int_u256`, arguments: [(0, util_1.pure)(txb, x, `u256`)], }); }
function subFromMaxU256(txb, a) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::sub_from_max_u256`, arguments: [(0, util_1.pure)(txb, a, `u256`)], }); }
function subtractMod(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::subtract_mod`, arguments: [(0, util_1.pure)(txb, args.a, `u128`), (0, util_1.pure)(txb, args.b, `u128`)], }); }
function subtractModU256(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::subtract_mod_u256`, arguments: [(0, util_1.pure)(txb, args.a, `u256`), (0, util_1.pure)(txb, args.b, `u256`)], }); }
function subtractVectors(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::subtract_vectors`, arguments: [(0, util_1.pure)(txb, args.vecA, `vector<u64>`), (0, util_1.pure)(txb, args.vecB, `vector<u64>`)], }); }
function subtractVectorsU256(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::subtract_vectors_u256`, arguments: [(0, util_1.pure)(txb, args.vecA, `vector<u256>`), (0, util_1.pure)(txb, args.vecB, `vector<u256>`)], }); }
function vectorCreateU128(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::vector_create_u128`, arguments: [(0, util_1.pure)(txb, args.a, `0x1::option::Option<u128>`), (0, util_1.pure)(txb, args.b, `0x1::option::Option<u128>`), (0, util_1.pure)(txb, args.c, `0x1::option::Option<u128>`), (0, util_1.pure)(txb, args.d, `0x1::option::Option<u128>`), (0, util_1.pure)(txb, args.e, `0x1::option::Option<u128>`)], }); }
function vectorCreateU64(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::vector_create_u64`, arguments: [(0, util_1.pure)(txb, args.a, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.b, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.c, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.d, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.e, `0x1::option::Option<u64>`)], }); }
function vectorSumU256(txb, vec) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::vector_sum_u256`, arguments: [(0, util_1.pure)(txb, vec, `vector<u256>`)], }); }
function vectorSumU64(txb, vec) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::vector_sum_u64`, arguments: [(0, util_1.pure)(txb, vec, `vector<u64>`)], }); }
function vectorU64ToU128(txb, vec) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::vector_u64_to_u128`, arguments: [(0, util_1.pure)(txb, vec, `vector<u64>`)], }); }
function vectorU64ToU256(txb, vec) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::vector_u64_to_u256`, arguments: [(0, util_1.pure)(txb, vec, `vector<u64>`)], }); }
function zeroVector(txb, len) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::math::zero_vector`, arguments: [(0, util_1.pure)(txb, len, `u64`)], }); }
