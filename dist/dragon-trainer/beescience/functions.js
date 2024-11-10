"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breedBees = breedBees;
exports.calculatePow = calculatePow;
exports.computeGenePrice = computeGenePrice;
exports.decodeAppearanceTraits = decodeAppearanceTraits;
exports.decodeDominantAppearanceTraits = decodeDominantAppearanceTraits;
exports.decodeDominantPowerTraits = decodeDominantPowerTraits;
exports.decodePowerTraits = decodePowerTraits;
exports.encodeAppearanceTraits = encodeAppearanceTraits;
exports.encodePowerTraits = encodePowerTraits;
exports.enhanceTrait = enhanceTrait;
exports.evolutionChance = evolutionChance;
exports.evolveAppearanceTrait = evolveAppearanceTrait;
exports.evolveAppearanceTraits = evolveAppearanceTraits;
exports.evolveBee = evolveBee;
exports.evolvePowerTrait = evolvePowerTrait;
exports.evolvePowerTraits = evolvePowerTraits;
exports.get4Bits = get4Bits;
exports.get5Bits = get5Bits;
exports.getEvolutionStage = getEvolutionStage;
exports.getFamilyType = getFamilyType;
exports.mixAppearanceTraits = mixAppearanceTraits;
exports.mixCapabilityTraits = mixCapabilityTraits;
exports.mutateTrait = mutateTrait;
exports.powApprox = powApprox;
exports.powApproxFrac = powApproxFrac;
exports.sliceNumber = sliceNumber;
exports.subSign = subSign;
exports.synergyBoost = synergyBoost;
const __1 = require("..");
const PUBLISHED_AT = __1.dragontrainer.PUBLISHED_AT;
const util_1 = require("../../_framework/util");
function breedBees(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::breed_bees`, arguments: [(0, util_1.pure)(tx, args.parent1Genes, `u256`), (0, util_1.pure)(tx, args.parent2Genes, `u256`), (0, util_1.pure)(tx, args.appearanceRandom, `u256`), (0, util_1.pure)(tx, args.capabilityRandom, `u256`)], }); }
function calculatePow(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::calculate_pow`, arguments: [(0, util_1.pure)(tx, args.baseNumerator, `u128`), (0, util_1.pure)(tx, args.baseDenominator, `u128`), (0, util_1.pure)(tx, args.expNumerator, `u128`), (0, util_1.pure)(tx, args.expDenominator, `u128`)], }); }
function computeGenePrice(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::compute_gene_price`, arguments: [(0, util_1.pure)(tx, args.basePrice, `u64`), (0, util_1.pure)(tx, args.curveA, `u64`), (0, util_1.pure)(tx, args.eggsIncubated, `u64`)], }); }
function decodeAppearanceTraits(tx, genes) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::decode_appearance_traits`, arguments: [(0, util_1.pure)(tx, genes, `u256`)], }); }
function decodeDominantAppearanceTraits(tx, genes) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::decode_dominant_appearance_traits`, arguments: [(0, util_1.pure)(tx, genes, `u256`)], }); }
function decodeDominantPowerTraits(tx, genes) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::decode_dominant_power_traits`, arguments: [(0, util_1.pure)(tx, genes, `u256`)], }); }
function decodePowerTraits(tx, genes) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::decode_power_traits`, arguments: [(0, util_1.pure)(tx, genes, `u256`)], }); }
function encodeAppearanceTraits(tx, traits) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::encode_appearance_traits`, arguments: [(0, util_1.pure)(tx, traits, `vector<u8>`)], }); }
function encodePowerTraits(tx, traits) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::encode_power_traits`, arguments: [(0, util_1.pure)(tx, traits, `vector<u8>`)], }); }
function enhanceTrait(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::enhance_trait`, arguments: [(0, util_1.pure)(tx, args.trait1, `u8`), (0, util_1.pure)(tx, args.trait2, `u8`), (0, util_1.pure)(tx, args.rand, `u8`)], }); }
function evolutionChance(tx, stage) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolution_chance`, arguments: [(0, util_1.pure)(tx, stage, `u8`)], }); }
function evolveAppearanceTrait(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolve_appearance_trait`, arguments: [(0, util_1.pure)(tx, args.trait, `u8`), (0, util_1.pure)(tx, args.stage, `u8`), (0, util_1.pure)(tx, args.rand, `u8`)], }); }
function evolveAppearanceTraits(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolve_appearance_traits`, arguments: [(0, util_1.pure)(tx, args.genes, `u256`), (0, util_1.pure)(tx, args.stage, `u8`), (0, util_1.pure)(tx, args.randoms, `vector<u256>`)], }); }
function evolveBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolve_bee`, arguments: [(0, util_1.pure)(tx, args.genes, `u256`), (0, util_1.pure)(tx, args.randoms, `vector<u256>`)], }); }
function evolvePowerTrait(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolve_power_trait`, arguments: [(0, util_1.pure)(tx, args.trait, `u8`), (0, util_1.pure)(tx, args.stage, `u8`), (0, util_1.pure)(tx, args.rand, `u8`)], }); }
function evolvePowerTraits(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::evolve_power_traits`, arguments: [(0, util_1.pure)(tx, args.genes, `u256`), (0, util_1.pure)(tx, args.stage, `u8`), (0, util_1.pure)(tx, args.randoms, `vector<u256>`)], }); }
function get4Bits(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::get_4_bits`, arguments: [(0, util_1.pure)(tx, args.input, `u256`), (0, util_1.pure)(tx, args.slot, `u8`)], }); }
function get5Bits(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::get_5_bits`, arguments: [(0, util_1.pure)(tx, args.input, `u256`), (0, util_1.pure)(tx, args.slot, `u8`)], }); }
function getEvolutionStage(tx, input) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::get_evolution_stage`, arguments: [(0, util_1.pure)(tx, input, `u256`)], }); }
function getFamilyType(tx, input) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::get_family_type`, arguments: [(0, util_1.pure)(tx, input, `u256`)], }); }
function mixAppearanceTraits(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::mix_appearance_traits`, arguments: [(0, util_1.pure)(tx, args.parent1Genes, `u256`), (0, util_1.pure)(tx, args.parent2Genes, `u256`), (0, util_1.pure)(tx, args.random, `u256`)], }); }
function mixCapabilityTraits(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::mix_capability_traits`, arguments: [(0, util_1.pure)(tx, args.parent1Genes, `u256`), (0, util_1.pure)(tx, args.parent2Genes, `u256`), (0, util_1.pure)(tx, args.random, `u256`)], }); }
function mutateTrait(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::mutate_trait`, arguments: [(0, util_1.pure)(tx, args.baseTrait, `u8`), (0, util_1.pure)(tx, args.rand, `u8`)], }); }
function powApprox(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::pow_approx`, arguments: [(0, util_1.pure)(tx, args.x, `u128`), (0, util_1.pure)(tx, args.expNumerator, `u128`), (0, util_1.pure)(tx, args.expDenominator, `u128`)], }); }
function powApproxFrac(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::pow_approx_frac`, arguments: [(0, util_1.pure)(tx, args.base, `u256`), (0, util_1.pure)(tx, args.exp, `u128`), (0, util_1.pure)(tx, args.pPrecision, `u64`)], }); }
function sliceNumber(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::slice_number`, arguments: [(0, util_1.pure)(tx, args.input, `u256`), (0, util_1.pure)(tx, args.nbits, `u8`), (0, util_1.pure)(tx, args.offset, `u8`)], }); }
function subSign(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::sub_sign`, arguments: [(0, util_1.pure)(tx, args.a, `u256`), (0, util_1.pure)(tx, args.b, `u256`)], }); }
function synergyBoost(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::beescience::synergy_boost`, arguments: [(0, util_1.pure)(tx, args.trait1, `u8`), (0, util_1.pure)(tx, args.trait2, `u8`), (0, util_1.pure)(tx, args.rand, `u8`)], }); }
