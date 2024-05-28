import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface PowArgs { base: bigint | TransactionArgument; exponent: bigint | TransactionArgument }

export function pow( txb: TransactionBlock, args: PowArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::pow`, arguments: [ pure(txb, args.base, `u128`), pure(txb, args.exponent, `u128`) ], }) }

export function sqrt( txb: TransactionBlock, y: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::sqrt`, arguments: [ pure(txb, y, `u128`) ], }) }

export interface AddVectorsArgs { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function addVectors( txb: TransactionBlock, args: AddVectorsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::add_vectors`, arguments: [ pure(txb, args.vecA, `vector<u64>`), pure(txb, args.vecB, `vector<u64>`) ], }) }

export interface AddVectorsU128Args { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function addVectorsU128( txb: TransactionBlock, args: AddVectorsU128Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::add_vectors_u128`, arguments: [ pure(txb, args.vecA, `vector<u128>`), pure(txb, args.vecB, `vector<u64>`) ], }) }

export interface AddVectorsU256Args { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function addVectorsU256( txb: TransactionBlock, args: AddVectorsU256Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::add_vectors_u256`, arguments: [ pure(txb, args.vecA, `vector<u256>`), pure(txb, args.vecB, `vector<u256>`) ], }) }

export function createZeroVector( txb: TransactionBlock, len: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::create_zero_vector`, arguments: [ pure(txb, len, `u64`) ], }) }

export function createZeroVectorU256( txb: TransactionBlock, len: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::create_zero_vector_u256`, arguments: [ pure(txb, len, `u64`) ], }) }

export interface FindGreatestFrom2Args { a: number | TransactionArgument; b: number | TransactionArgument }

export function findGreatestFrom2( txb: TransactionBlock, args: FindGreatestFrom2Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_2`, arguments: [ pure(txb, args.a, `u8`), pure(txb, args.b, `u8`) ], }) }

export interface FindGreatestFrom3Args { a: number | TransactionArgument; b: number | TransactionArgument; c: number | TransactionArgument }

export function findGreatestFrom3( txb: TransactionBlock, args: FindGreatestFrom3Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_3`, arguments: [ pure(txb, args.a, `u8`), pure(txb, args.b, `u8`), pure(txb, args.c, `u8`) ], }) }

export interface FindGreatestFrom4Args { a: number | TransactionArgument; b: number | TransactionArgument; c: number | TransactionArgument; d: number | TransactionArgument }

export function findGreatestFrom4( txb: TransactionBlock, args: FindGreatestFrom4Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_4`, arguments: [ pure(txb, args.a, `u8`), pure(txb, args.b, `u8`), pure(txb, args.c, `u8`), pure(txb, args.d, `u8`) ], }) }

export interface FindGreatestFrom5Args { a: number | TransactionArgument; b: number | TransactionArgument; c: number | TransactionArgument; d: number | TransactionArgument; e: number | TransactionArgument }

export function findGreatestFrom5( txb: TransactionBlock, args: FindGreatestFrom5Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_5`, arguments: [ pure(txb, args.a, `u8`), pure(txb, args.b, `u8`), pure(txb, args.c, `u8`), pure(txb, args.d, `u8`), pure(txb, args.e, `u8`) ], }) }

export function getNonZeroCountAndIndex( txb: TransactionBlock, vec: Array<bigint | TransactionArgument> | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::get_non_zero_count_and_index`, arguments: [ pure(txb, vec, `vector<u64>`) ], }) }

export function getNonZeroCountAndIndexU256( txb: TransactionBlock, vec: Array<bigint | TransactionArgument> | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::get_non_zero_count_and_index_u256`, arguments: [ pure(txb, vec, `vector<u256>`) ], }) }

export function init( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::init`, arguments: [ ], }) }

export interface MaxU128Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function maxU128( txb: TransactionBlock, args: MaxU128Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::max_u128`, arguments: [ pure(txb, args.a, `u128`), pure(txb, args.b, `u128`) ], }) }

export interface MaxU256Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function maxU256( txb: TransactionBlock, args: MaxU256Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::max_u256`, arguments: [ pure(txb, args.a, `u256`), pure(txb, args.b, `u256`) ], }) }

export interface MaxU64Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function maxU64( txb: TransactionBlock, args: MaxU64Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::max_u64`, arguments: [ pure(txb, args.a, `u64`), pure(txb, args.b, `u64`) ], }) }

export interface MergeArgs { left: Array<bigint | TransactionArgument> | TransactionArgument; right: Array<bigint | TransactionArgument> | TransactionArgument }

export function merge( txb: TransactionBlock, args: MergeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::merge`, arguments: [ pure(txb, args.left, `vector<u256>`), pure(txb, args.right, `vector<u256>`) ], }) }

export interface MinU128Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function minU128( txb: TransactionBlock, args: MinU128Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::min_u128`, arguments: [ pure(txb, args.a, `u128`), pure(txb, args.b, `u128`) ], }) }

export interface MinU256Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function minU256( txb: TransactionBlock, args: MinU256Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::min_u256`, arguments: [ pure(txb, args.a, `u256`), pure(txb, args.b, `u256`) ], }) }

export interface MinU64Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function minU64( txb: TransactionBlock, args: MinU64Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::min_u64`, arguments: [ pure(txb, args.a, `u64`), pure(txb, args.b, `u64`) ], }) }

export interface MulDivArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument; z: bigint | TransactionArgument }

export function mulDiv( txb: TransactionBlock, args: MulDivArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::mul_div`, arguments: [ pure(txb, args.x, `u64`), pure(txb, args.y, `u64`), pure(txb, args.z, `u64`) ], }) }

export interface MulDivU128Args { x: bigint | TransactionArgument; y: bigint | TransactionArgument; z: bigint | TransactionArgument }

export function mulDivU128( txb: TransactionBlock, args: MulDivU128Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::mul_div_u128`, arguments: [ pure(txb, args.x, `u128`), pure(txb, args.y, `u128`), pure(txb, args.z, `u128`) ], }) }

export interface MulDivU256Args { x: bigint | TransactionArgument; y: bigint | TransactionArgument; z: bigint | TransactionArgument }

export function mulDivU256( txb: TransactionBlock, args: MulDivU256Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::mul_div_u256`, arguments: [ pure(txb, args.x, `u256`), pure(txb, args.y, `u256`), pure(txb, args.z, `u256`) ], }) }

export interface MulToU128Args { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function mulToU128( txb: TransactionBlock, args: MulToU128Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::mul_to_u128`, arguments: [ pure(txb, args.x, `u64`), pure(txb, args.y, `u64`) ], }) }

export interface MultiplyVectorsArgs { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument; precision: bigint | TransactionArgument }

export function multiplyVectors( txb: TransactionBlock, args: MultiplyVectorsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::multiply_vectors`, arguments: [ pure(txb, args.vecA, `vector<u64>`), pure(txb, args.vecB, `vector<u64>`), pure(txb, args.precision, `u64`) ], }) }

export interface MultiplyVectorsU256Args { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function multiplyVectorsU256( txb: TransactionBlock, args: MultiplyVectorsU256Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::multiply_vectors_u256`, arguments: [ pure(txb, args.vecA, `vector<u256>`), pure(txb, args.vecB, `vector<u256>`) ], }) }

export interface OverflowAddArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function overflowAdd( txb: TransactionBlock, args: OverflowAddArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::overflow_add`, arguments: [ pure(txb, args.a, `u128`), pure(txb, args.b, `u128`) ], }) }

export interface OverflowAddU256Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function overflowAddU256( txb: TransactionBlock, args: OverflowAddU256Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::overflow_add_u256`, arguments: [ pure(txb, args.a, `u256`), pure(txb, args.b, `u256`) ], }) }

export function pow10( txb: TransactionBlock, degree: number | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::pow_10`, arguments: [ pure(txb, degree, `u8`) ], }) }

export function pow10U256( txb: TransactionBlock, degree: number | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::pow_10_u256`, arguments: [ pure(txb, degree, `u8`) ], }) }

export interface PowU256Args { base: bigint | TransactionArgument; exponent: bigint | TransactionArgument }

export function powU256( txb: TransactionBlock, args: PowU256Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::pow_u256`, arguments: [ pure(txb, args.base, `u128`), pure(txb, args.exponent, `u128`) ], }) }

export interface SliceVectorArgs { vec: Array<bigint | TransactionArgument> | TransactionArgument; start: bigint | TransactionArgument; end: bigint | TransactionArgument }

export function sliceVector( txb: TransactionBlock, args: SliceVectorArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::slice_vector`, arguments: [ pure(txb, args.vec, `vector<u256>`), pure(txb, args.start, `u64`), pure(txb, args.end, `u64`) ], }) }

export function sort( txb: TransactionBlock, vec: Array<bigint | TransactionArgument> | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::sort`, arguments: [ pure(txb, vec, `vector<u128>`) ], }) }

export function sortU256( txb: TransactionBlock, vec: Array<bigint | TransactionArgument> | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::sort_u256`, arguments: [ pure(txb, vec, `vector<u256>`) ], }) }

export function sqrtInt( txb: TransactionBlock, x: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::sqrt_int`, arguments: [ pure(txb, x, `u256`) ], }) }

export function sqrtIntU256( txb: TransactionBlock, x: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::sqrt_int_u256`, arguments: [ pure(txb, x, `u256`) ], }) }

export function subFromMaxU256( txb: TransactionBlock, a: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::sub_from_max_u256`, arguments: [ pure(txb, a, `u256`) ], }) }

export interface SubtractModArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function subtractMod( txb: TransactionBlock, args: SubtractModArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::subtract_mod`, arguments: [ pure(txb, args.a, `u128`), pure(txb, args.b, `u128`) ], }) }

export interface SubtractModU256Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function subtractModU256( txb: TransactionBlock, args: SubtractModU256Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::subtract_mod_u256`, arguments: [ pure(txb, args.a, `u256`), pure(txb, args.b, `u256`) ], }) }

export interface SubtractVectorsArgs { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function subtractVectors( txb: TransactionBlock, args: SubtractVectorsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::subtract_vectors`, arguments: [ pure(txb, args.vecA, `vector<u64>`), pure(txb, args.vecB, `vector<u64>`) ], }) }

export interface SubtractVectorsU256Args { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function subtractVectorsU256( txb: TransactionBlock, args: SubtractVectorsU256Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::subtract_vectors_u256`, arguments: [ pure(txb, args.vecA, `vector<u256>`), pure(txb, args.vecB, `vector<u256>`) ], }) }

export interface VectorCreateU128Args { a: (bigint | TransactionArgument | TransactionArgument | null); b: (bigint | TransactionArgument | TransactionArgument | null); c: (bigint | TransactionArgument | TransactionArgument | null); d: (bigint | TransactionArgument | TransactionArgument | null); e: (bigint | TransactionArgument | TransactionArgument | null) }

export function vectorCreateU128( txb: TransactionBlock, args: VectorCreateU128Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::vector_create_u128`, arguments: [ pure(txb, args.a, `0x1::option::Option<u128>`), pure(txb, args.b, `0x1::option::Option<u128>`), pure(txb, args.c, `0x1::option::Option<u128>`), pure(txb, args.d, `0x1::option::Option<u128>`), pure(txb, args.e, `0x1::option::Option<u128>`) ], }) }

export interface VectorCreateU64Args { a: (bigint | TransactionArgument | TransactionArgument | null); b: (bigint | TransactionArgument | TransactionArgument | null); c: (bigint | TransactionArgument | TransactionArgument | null); d: (bigint | TransactionArgument | TransactionArgument | null); e: (bigint | TransactionArgument | TransactionArgument | null) }

export function vectorCreateU64( txb: TransactionBlock, args: VectorCreateU64Args ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::vector_create_u64`, arguments: [ pure(txb, args.a, `0x1::option::Option<u64>`), pure(txb, args.b, `0x1::option::Option<u64>`), pure(txb, args.c, `0x1::option::Option<u64>`), pure(txb, args.d, `0x1::option::Option<u64>`), pure(txb, args.e, `0x1::option::Option<u64>`) ], }) }

export function vectorSumU256( txb: TransactionBlock, vec: Array<bigint | TransactionArgument> | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::vector_sum_u256`, arguments: [ pure(txb, vec, `vector<u256>`) ], }) }

export function vectorSumU64( txb: TransactionBlock, vec: Array<bigint | TransactionArgument> | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::vector_sum_u64`, arguments: [ pure(txb, vec, `vector<u64>`) ], }) }

export function vectorU64ToU128( txb: TransactionBlock, vec: Array<bigint | TransactionArgument> | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::vector_u64_to_u128`, arguments: [ pure(txb, vec, `vector<u64>`) ], }) }

export function vectorU64ToU256( txb: TransactionBlock, vec: Array<bigint | TransactionArgument> | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::vector_u64_to_u256`, arguments: [ pure(txb, vec, `vector<u64>`) ], }) }

export function zeroVector( txb: TransactionBlock, len: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::math::zero_vector`, arguments: [ pure(txb, len, `u64`) ], }) }
