import { yieldflow } from ".."
const PUBLISHED_AT = yieldflow.PUBLISHED_AT
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export interface PowArgs { base: bigint | TransactionArgument; exponent: bigint | TransactionArgument }

export function pow(tx: Transaction, args: PowArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::pow`, arguments: [pure(tx, args.base, `u128`), pure(tx, args.exponent, `u128`)], }) }

export function sqrt(tx: Transaction, y: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sqrt`, arguments: [pure(tx, y, `u128`)], }) }

export interface AddVectorsArgs { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function addVectors(tx: Transaction, args: AddVectorsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::add_vectors`, arguments: [pure(tx, args.vecA, `vector<u64>`), pure(tx, args.vecB, `vector<u64>`)], }) }

export interface AddVectorsU128Args { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function addVectorsU128(tx: Transaction, args: AddVectorsU128Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::add_vectors_u128`, arguments: [pure(tx, args.vecA, `vector<u128>`), pure(tx, args.vecB, `vector<u64>`)], }) }

export interface AddVectorsU256Args { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function addVectorsU256(tx: Transaction, args: AddVectorsU256Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::add_vectors_u256`, arguments: [pure(tx, args.vecA, `vector<u256>`), pure(tx, args.vecB, `vector<u256>`)], }) }

export function createZeroVector(tx: Transaction, len: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::create_zero_vector`, arguments: [pure(tx, len, `u64`)], }) }

export function createZeroVectorU256(tx: Transaction, len: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::create_zero_vector_u256`, arguments: [pure(tx, len, `u64`)], }) }

export interface FindGreatestFrom2Args { a: number | TransactionArgument; b: number | TransactionArgument }

export function findGreatestFrom2(tx: Transaction, args: FindGreatestFrom2Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_2`, arguments: [pure(tx, args.a, `u8`), pure(tx, args.b, `u8`)], }) }

export interface FindGreatestFrom3Args { a: number | TransactionArgument; b: number | TransactionArgument; c: number | TransactionArgument }

export function findGreatestFrom3(tx: Transaction, args: FindGreatestFrom3Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_3`, arguments: [pure(tx, args.a, `u8`), pure(tx, args.b, `u8`), pure(tx, args.c, `u8`)], }) }

export interface FindGreatestFrom4Args { a: number | TransactionArgument; b: number | TransactionArgument; c: number | TransactionArgument; d: number | TransactionArgument }

export function findGreatestFrom4(tx: Transaction, args: FindGreatestFrom4Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_4`, arguments: [pure(tx, args.a, `u8`), pure(tx, args.b, `u8`), pure(tx, args.c, `u8`), pure(tx, args.d, `u8`)], }) }

export interface FindGreatestFrom5Args { a: number | TransactionArgument; b: number | TransactionArgument; c: number | TransactionArgument; d: number | TransactionArgument; e: number | TransactionArgument }

export function findGreatestFrom5(tx: Transaction, args: FindGreatestFrom5Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::find_greatest_from_5`, arguments: [pure(tx, args.a, `u8`), pure(tx, args.b, `u8`), pure(tx, args.c, `u8`), pure(tx, args.d, `u8`), pure(tx, args.e, `u8`)], }) }

export function getNonZeroCountAndIndex(tx: Transaction, vec: Array<bigint | TransactionArgument> | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::get_non_zero_count_and_index`, arguments: [pure(tx, vec, `vector<u64>`)], }) }

export function getNonZeroCountAndIndexU256(tx: Transaction, vec: Array<bigint | TransactionArgument> | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::get_non_zero_count_and_index_u256`, arguments: [pure(tx, vec, `vector<u256>`)], }) }

export function init(tx: Transaction,) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::init`, arguments: [], }) }

export interface MaxU128Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function maxU128(tx: Transaction, args: MaxU128Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::max_u128`, arguments: [pure(tx, args.a, `u128`), pure(tx, args.b, `u128`)], }) }

export interface MaxU256Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function maxU256(tx: Transaction, args: MaxU256Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::max_u256`, arguments: [pure(tx, args.a, `u256`), pure(tx, args.b, `u256`)], }) }

export interface MaxU64Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function maxU64(tx: Transaction, args: MaxU64Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::max_u64`, arguments: [pure(tx, args.a, `u64`), pure(tx, args.b, `u64`)], }) }

export interface MergeArgs { left: Array<bigint | TransactionArgument> | TransactionArgument; right: Array<bigint | TransactionArgument> | TransactionArgument }

export function merge(tx: Transaction, args: MergeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::merge`, arguments: [pure(tx, args.left, `vector<u256>`), pure(tx, args.right, `vector<u256>`)], }) }

export interface MinU128Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function minU128(tx: Transaction, args: MinU128Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::min_u128`, arguments: [pure(tx, args.a, `u128`), pure(tx, args.b, `u128`)], }) }

export interface MinU256Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function minU256(tx: Transaction, args: MinU256Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::min_u256`, arguments: [pure(tx, args.a, `u256`), pure(tx, args.b, `u256`)], }) }

export interface MinU64Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function minU64(tx: Transaction, args: MinU64Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::min_u64`, arguments: [pure(tx, args.a, `u64`), pure(tx, args.b, `u64`)], }) }

export interface MulDivArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument; z: bigint | TransactionArgument }

export function mulDiv(tx: Transaction, args: MulDivArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_div`, arguments: [pure(tx, args.x, `u64`), pure(tx, args.y, `u64`), pure(tx, args.z, `u64`)], }) }

export interface MulDivU128Args { x: bigint | TransactionArgument; y: bigint | TransactionArgument; z: bigint | TransactionArgument }

export function mulDivU128(tx: Transaction, args: MulDivU128Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_div_u128`, arguments: [pure(tx, args.x, `u128`), pure(tx, args.y, `u128`), pure(tx, args.z, `u128`)], }) }

export interface MulDivU256Args { x: bigint | TransactionArgument; y: bigint | TransactionArgument; z: bigint | TransactionArgument }

export function mulDivU256(tx: Transaction, args: MulDivU256Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_div_u256`, arguments: [pure(tx, args.x, `u256`), pure(tx, args.y, `u256`), pure(tx, args.z, `u256`)], }) }

export interface MulToU128Args { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function mulToU128(tx: Transaction, args: MulToU128Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_to_u128`, arguments: [pure(tx, args.x, `u64`), pure(tx, args.y, `u64`)], }) }

export interface MultiplyVectorsArgs { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument; precision: bigint | TransactionArgument }

export function multiplyVectors(tx: Transaction, args: MultiplyVectorsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::multiply_vectors`, arguments: [pure(tx, args.vecA, `vector<u64>`), pure(tx, args.vecB, `vector<u64>`), pure(tx, args.precision, `u64`)], }) }

export interface MultiplyVectorsU256Args { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function multiplyVectorsU256(tx: Transaction, args: MultiplyVectorsU256Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::multiply_vectors_u256`, arguments: [pure(tx, args.vecA, `vector<u256>`), pure(tx, args.vecB, `vector<u256>`)], }) }

export interface OverflowAddArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function overflowAdd(tx: Transaction, args: OverflowAddArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::overflow_add`, arguments: [pure(tx, args.a, `u128`), pure(tx, args.b, `u128`)], }) }

export interface OverflowAddU256Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function overflowAddU256(tx: Transaction, args: OverflowAddU256Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::overflow_add_u256`, arguments: [pure(tx, args.a, `u256`), pure(tx, args.b, `u256`)], }) }

export function pow10(tx: Transaction, degree: number | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::pow_10`, arguments: [pure(tx, degree, `u8`)], }) }

export function pow10U256(tx: Transaction, degree: number | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::pow_10_u256`, arguments: [pure(tx, degree, `u8`)], }) }

export interface PowNu256Args { baseU256: bigint | TransactionArgument; exponent: bigint | TransactionArgument }

export function powNu256(tx: Transaction, args: PowNu256Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::pow_nu256`, arguments: [pure(tx, args.baseU256, `u256`), pure(tx, args.exponent, `u128`)], }) }

export interface PowU256Args { base: bigint | TransactionArgument; exponent: bigint | TransactionArgument }

export function powU256(tx: Transaction, args: PowU256Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::pow_u256`, arguments: [pure(tx, args.base, `u128`), pure(tx, args.exponent, `u128`)], }) }

export interface SliceVectorArgs { vec: Array<bigint | TransactionArgument> | TransactionArgument; start: bigint | TransactionArgument; end: bigint | TransactionArgument }

export function sliceVector(tx: Transaction, args: SliceVectorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::slice_vector`, arguments: [pure(tx, args.vec, `vector<u256>`), pure(tx, args.start, `u64`), pure(tx, args.end, `u64`)], }) }

export function sort(tx: Transaction, vec: Array<bigint | TransactionArgument> | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sort`, arguments: [pure(tx, vec, `vector<u128>`)], }) }

export function sortU256(tx: Transaction, vec: Array<bigint | TransactionArgument> | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sort_u256`, arguments: [pure(tx, vec, `vector<u256>`)], }) }

export function sqrtInt(tx: Transaction, x: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sqrt_int`, arguments: [pure(tx, x, `u256`)], }) }

export function sqrtIntU256(tx: Transaction, x: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sqrt_int_u256`, arguments: [pure(tx, x, `u256`)], }) }

export function subFromMaxU256(tx: Transaction, a: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sub_from_max_u256`, arguments: [pure(tx, a, `u256`)], }) }

export interface SubtractModArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function subtractMod(tx: Transaction, args: SubtractModArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::subtract_mod`, arguments: [pure(tx, args.a, `u128`), pure(tx, args.b, `u128`)], }) }

export interface SubtractModU256Args { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function subtractModU256(tx: Transaction, args: SubtractModU256Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::subtract_mod_u256`, arguments: [pure(tx, args.a, `u256`), pure(tx, args.b, `u256`)], }) }

export interface SubtractVectorsArgs { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function subtractVectors(tx: Transaction, args: SubtractVectorsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::subtract_vectors`, arguments: [pure(tx, args.vecA, `vector<u64>`), pure(tx, args.vecB, `vector<u64>`)], }) }

export interface SubtractVectorsU256Args { vecA: Array<bigint | TransactionArgument> | TransactionArgument; vecB: Array<bigint | TransactionArgument> | TransactionArgument }

export function subtractVectorsU256(tx: Transaction, args: SubtractVectorsU256Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::subtract_vectors_u256`, arguments: [pure(tx, args.vecA, `vector<u256>`), pure(tx, args.vecB, `vector<u256>`)], }) }

export interface VectorCreateU128Args { a: (bigint | TransactionArgument | TransactionArgument | null); b: (bigint | TransactionArgument | TransactionArgument | null); c: (bigint | TransactionArgument | TransactionArgument | null); d: (bigint | TransactionArgument | TransactionArgument | null); e: (bigint | TransactionArgument | TransactionArgument | null) }

export function vectorCreateU128(tx: Transaction, args: VectorCreateU128Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_create_u128`, arguments: [pure(tx, args.a, `${Option.$typeName}<u128>`), pure(tx, args.b, `${Option.$typeName}<u128>`), pure(tx, args.c, `${Option.$typeName}<u128>`), pure(tx, args.d, `${Option.$typeName}<u128>`), pure(tx, args.e, `${Option.$typeName}<u128>`)], }) }

export interface VectorCreateU64Args { a: (bigint | TransactionArgument | TransactionArgument | null); b: (bigint | TransactionArgument | TransactionArgument | null); c: (bigint | TransactionArgument | TransactionArgument | null); d: (bigint | TransactionArgument | TransactionArgument | null); e: (bigint | TransactionArgument | TransactionArgument | null) }

export function vectorCreateU64(tx: Transaction, args: VectorCreateU64Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_create_u64`, arguments: [pure(tx, args.a, `${Option.$typeName}<u64>`), pure(tx, args.b, `${Option.$typeName}<u64>`), pure(tx, args.c, `${Option.$typeName}<u64>`), pure(tx, args.d, `${Option.$typeName}<u64>`), pure(tx, args.e, `${Option.$typeName}<u64>`)], }) }

export function vectorSumU256(tx: Transaction, vec: Array<bigint | TransactionArgument> | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_sum_u256`, arguments: [pure(tx, vec, `vector<u256>`)], }) }

export function vectorSumU64(tx: Transaction, vec: Array<bigint | TransactionArgument> | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_sum_u64`, arguments: [pure(tx, vec, `vector<u64>`)], }) }

export function vectorU64ToU128(tx: Transaction, vec: Array<bigint | TransactionArgument> | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_u64_to_u128`, arguments: [pure(tx, vec, `vector<u64>`)], }) }

export function vectorU64ToU256(tx: Transaction, vec: Array<bigint | TransactionArgument> | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::vector_u64_to_u256`, arguments: [pure(tx, vec, `vector<u64>`)], }) }

export function zeroVector(tx: Transaction, len: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::zero_vector`, arguments: [pure(tx, len, `u64`)], }) }
