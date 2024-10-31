import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export interface CalculatePowArgs { baseNumerator: bigint | TransactionArgument; baseDenominator: bigint | TransactionArgument; expNumerator: bigint | TransactionArgument; expDenominator: bigint | TransactionArgument }

export function calculatePow( tx: Transaction, args: CalculatePowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::calculate_pow`, arguments: [ pure(tx, args.baseNumerator, `u128`), pure(tx, args.baseDenominator, `u128`), pure(tx, args.expNumerator, `u128`), pure(tx, args.expDenominator, `u128`) ], }) }

export interface PowApproxArgs { x: bigint | TransactionArgument; expNumerator: bigint | TransactionArgument; expDenominator: bigint | TransactionArgument }

export function powApprox( tx: Transaction, args: PowApproxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::pow_approx`, arguments: [ pure(tx, args.x, `u128`), pure(tx, args.expNumerator, `u128`), pure(tx, args.expDenominator, `u128`) ], }) }

export interface SubSignArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function subSign( tx: Transaction, args: SubSignArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::sub_sign`, arguments: [ pure(tx, args.a, `u256`), pure(tx, args.b, `u256`) ], }) }

export interface BreedBeesArgs { parent1Genes: bigint | TransactionArgument; parent2Genes: bigint | TransactionArgument; appearanceRandom: bigint | TransactionArgument; capabilityRandom: bigint | TransactionArgument }

export function breedBees( tx: Transaction, args: BreedBeesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::breed_bees`, arguments: [ pure(tx, args.parent1Genes, `u256`), pure(tx, args.parent2Genes, `u256`), pure(tx, args.appearanceRandom, `u256`), pure(tx, args.capabilityRandom, `u256`) ], }) }

export interface ComputeGenePriceArgs { basePrice: bigint | TransactionArgument; curveA: bigint | TransactionArgument; eggsIncubated: bigint | TransactionArgument }

export function computeGenePrice( tx: Transaction, args: ComputeGenePriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::compute_gene_price`, arguments: [ pure(tx, args.basePrice, `u64`), pure(tx, args.curveA, `u64`), pure(tx, args.eggsIncubated, `u64`) ], }) }

export function decodeAppearanceTraits( tx: Transaction, genes: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::decode_appearance_traits`, arguments: [ pure(tx, genes, `u256`) ], }) }

export function decodeDominantAppearanceTraits( tx: Transaction, genes: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::decode_dominant_appearance_traits`, arguments: [ pure(tx, genes, `u256`) ], }) }

export function decodeDominantPowerTraits( tx: Transaction, genes: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::decode_dominant_power_traits`, arguments: [ pure(tx, genes, `u256`) ], }) }

export function decodePowerTraits( tx: Transaction, genes: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::decode_power_traits`, arguments: [ pure(tx, genes, `u256`) ], }) }

export function encodeAppearanceTraits( tx: Transaction, traits: Array<number | TransactionArgument> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::encode_appearance_traits`, arguments: [ pure(tx, traits, `vector<u8>`) ], }) }

export function encodePowerTraits( tx: Transaction, traits: Array<number | TransactionArgument> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::encode_power_traits`, arguments: [ pure(tx, traits, `vector<u8>`) ], }) }

export interface EnhanceTraitArgs { trait1: number | TransactionArgument; trait2: number | TransactionArgument; rand: number | TransactionArgument }

export function enhanceTrait( tx: Transaction, args: EnhanceTraitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::enhance_trait`, arguments: [ pure(tx, args.trait1, `u8`), pure(tx, args.trait2, `u8`), pure(tx, args.rand, `u8`) ], }) }

export function evolutionChance( tx: Transaction, stage: number | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolution_chance`, arguments: [ pure(tx, stage, `u8`) ], }) }

export interface EvolveAppearanceTraitArgs { trait: number | TransactionArgument; stage: number | TransactionArgument; rand: number | TransactionArgument }

export function evolveAppearanceTrait( tx: Transaction, args: EvolveAppearanceTraitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolve_appearance_trait`, arguments: [ pure(tx, args.trait, `u8`), pure(tx, args.stage, `u8`), pure(tx, args.rand, `u8`) ], }) }

export interface EvolveAppearanceTraitsArgs { genes: bigint | TransactionArgument; stage: number | TransactionArgument; randoms: Array<bigint | TransactionArgument> | TransactionArgument }

export function evolveAppearanceTraits( tx: Transaction, args: EvolveAppearanceTraitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolve_appearance_traits`, arguments: [ pure(tx, args.genes, `u256`), pure(tx, args.stage, `u8`), pure(tx, args.randoms, `vector<u256>`) ], }) }

export interface EvolveBeeArgs { genes: bigint | TransactionArgument; randoms: Array<bigint | TransactionArgument> | TransactionArgument }

export function evolveBee( tx: Transaction, args: EvolveBeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolve_bee`, arguments: [ pure(tx, args.genes, `u256`), pure(tx, args.randoms, `vector<u256>`) ], }) }

export interface EvolvePowerTraitArgs { trait: number | TransactionArgument; stage: number | TransactionArgument; rand: number | TransactionArgument }

export function evolvePowerTrait( tx: Transaction, args: EvolvePowerTraitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolve_power_trait`, arguments: [ pure(tx, args.trait, `u8`), pure(tx, args.stage, `u8`), pure(tx, args.rand, `u8`) ], }) }

export interface EvolvePowerTraitsArgs { genes: bigint | TransactionArgument; stage: number | TransactionArgument; randoms: Array<bigint | TransactionArgument> | TransactionArgument }

export function evolvePowerTraits( tx: Transaction, args: EvolvePowerTraitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolve_power_traits`, arguments: [ pure(tx, args.genes, `u256`), pure(tx, args.stage, `u8`), pure(tx, args.randoms, `vector<u256>`) ], }) }

export interface Get4BitsArgs { input: bigint | TransactionArgument; slot: number | TransactionArgument }

export function get4Bits( tx: Transaction, args: Get4BitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::get_4_bits`, arguments: [ pure(tx, args.input, `u256`), pure(tx, args.slot, `u8`) ], }) }

export interface Get5BitsArgs { input: bigint | TransactionArgument; slot: number | TransactionArgument }

export function get5Bits( tx: Transaction, args: Get5BitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::get_5_bits`, arguments: [ pure(tx, args.input, `u256`), pure(tx, args.slot, `u8`) ], }) }

export function getEvolutionStage( tx: Transaction, input: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::get_evolution_stage`, arguments: [ pure(tx, input, `u256`) ], }) }

export function getFamilyType( tx: Transaction, input: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::get_family_type`, arguments: [ pure(tx, input, `u256`) ], }) }

export interface MixAppearanceTraitsArgs { parent1Genes: bigint | TransactionArgument; parent2Genes: bigint | TransactionArgument; random: bigint | TransactionArgument }

export function mixAppearanceTraits( tx: Transaction, args: MixAppearanceTraitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::mix_appearance_traits`, arguments: [ pure(tx, args.parent1Genes, `u256`), pure(tx, args.parent2Genes, `u256`), pure(tx, args.random, `u256`) ], }) }

export interface MixCapabilityTraitsArgs { parent1Genes: bigint | TransactionArgument; parent2Genes: bigint | TransactionArgument; random: bigint | TransactionArgument }

export function mixCapabilityTraits( tx: Transaction, args: MixCapabilityTraitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::mix_capability_traits`, arguments: [ pure(tx, args.parent1Genes, `u256`), pure(tx, args.parent2Genes, `u256`), pure(tx, args.random, `u256`) ], }) }

export interface MutateTraitArgs { baseTrait: number | TransactionArgument; rand: number | TransactionArgument }

export function mutateTrait( tx: Transaction, args: MutateTraitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::mutate_trait`, arguments: [ pure(tx, args.baseTrait, `u8`), pure(tx, args.rand, `u8`) ], }) }

export interface PowApproxFracArgs { base: bigint | TransactionArgument; exp: bigint | TransactionArgument; pPrecision: bigint | TransactionArgument }

export function powApproxFrac( tx: Transaction, args: PowApproxFracArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::pow_approx_frac`, arguments: [ pure(tx, args.base, `u256`), pure(tx, args.exp, `u128`), pure(tx, args.pPrecision, `u64`) ], }) }

export interface SliceNumberArgs { input: bigint | TransactionArgument; nbits: number | TransactionArgument; offset: number | TransactionArgument }

export function sliceNumber( tx: Transaction, args: SliceNumberArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::slice_number`, arguments: [ pure(tx, args.input, `u256`), pure(tx, args.nbits, `u8`), pure(tx, args.offset, `u8`) ], }) }

export interface SynergyBoostArgs { trait1: number | TransactionArgument; trait2: number | TransactionArgument; rand: number | TransactionArgument }

export function synergyBoost( tx: Transaction, args: SynergyBoostArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::synergy_boost`, arguments: [ pure(tx, args.trait1, `u8`), pure(tx, args.trait2, `u8`), pure(tx, args.rand, `u8`) ], }) }
