
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { String } from "../../_dependencies/source/0x1/string/structs";
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
import { TransactionObjectInput } from "@mysten/sui.js/transactions";
import { twopool } from ".."
const PUBLISHED_AT = twopool.PUBLISHED_AT

export interface TransferBeesArgs { beeToken: TransactionObjectInput; beesManager: TransactionObjectInput; policy: TransactionObjectInput; transferAmt: bigint | TransactionArgument; receipient: string | TransactionArgument }

export function transferBees(tx: TransactionBlock, args: TransferBeesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::transfer_bees`, arguments: [obj(tx, args.beeToken), obj(tx, args.beesManager), obj(tx, args.policy), pure(tx, args.transferAmt, `u64`), pure(tx, args.receipient, `address`)], }) }

export interface TransferBeesBalanceArgs { policy: TransactionObjectInput; beesManager: TransactionObjectInput; beesBalance: TransactionObjectInput; recepient: string | TransactionArgument }

export function transferBeesBalance(tx: TransactionBlock, args: TransferBeesBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::transfer_bees_balance`, arguments: [obj(tx, args.policy), obj(tx, args.beesManager), obj(tx, args.beesBalance), pure(tx, args.recepient, `address`)], }) }

export interface AddBidForStreamerBuzzesArgs { clock: TransactionObjectInput; mappingStore: TransactionObjectInput; hiveVault: TransactionObjectInput; beesManager: TransactionObjectInput; policy: TransactionObjectInput; userProfile: TransactionObjectInput; suiCoin: TransactionObjectInput; addToBid: bigint | TransactionArgument; newBuzzCostInHive: bigint | TransactionArgument; accessType: number | TransactionArgument; collectionName: string | TransactionArgument }

export function addBidForStreamerBuzzes(tx: TransactionBlock, typeArg: string, args: AddBidForStreamerBuzzesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::add_bid_for_streamer_buzzes`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.mappingStore), obj(tx, args.hiveVault), obj(tx, args.beesManager), obj(tx, args.policy), obj(tx, args.userProfile), obj(tx, args.suiCoin), pure(tx, args.addToBid, `u64`), pure(tx, args.newBuzzCostInHive, `u64`), pure(tx, args.accessType, `u8`), pure(tx, args.collectionName, `${String.$typeName}`)], }) }

export interface ClaimStreamRewardsWithdrawBidArgs { mappingStore: TransactionObjectInput; hiveVault: TransactionObjectInput; userProfile: TransactionObjectInput; beesManager: TransactionObjectInput; policy: TransactionObjectInput }

export function claimStreamRewardsWithdrawBid(tx: TransactionBlock, typeArg: string, args: ClaimStreamRewardsWithdrawBidArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::claim_stream_rewards_withdraw_bid`, typeArguments: [typeArg], arguments: [obj(tx, args.mappingStore), obj(tx, args.hiveVault), obj(tx, args.userProfile), obj(tx, args.beesManager), obj(tx, args.policy)], }) }

export interface IncrementStreamPart2Args { clock: TransactionObjectInput; mappingStore: TransactionObjectInput; hiveVault: TransactionObjectInput; newStreamerRank1: TransactionObjectInput; newStreamerRank2: TransactionObjectInput; newStreamerRank3: TransactionObjectInput; beesManager: TransactionObjectInput; policy: TransactionObjectInput }

export function incrementStreamPart2(tx: TransactionBlock, typeArg: string, args: IncrementStreamPart2Args) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::increment_stream_part_2`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.mappingStore), obj(tx, args.hiveVault), obj(tx, args.newStreamerRank1), obj(tx, args.newStreamerRank2), obj(tx, args.newStreamerRank3), obj(tx, args.beesManager), obj(tx, args.policy)], }) }

export interface InteractWithStreamBuzzArgs { clock: TransactionObjectInput; mappingStore: TransactionObjectInput; hiveManager: TransactionObjectInput; hiveVault: TransactionObjectInput; beesManager: TransactionObjectInput; policy: TransactionObjectInput; hiveDisperser: TransactionObjectInput; userProfile: TransactionObjectInput; streamerProfile: TransactionObjectInput; streamIndex: bigint | TransactionArgument; streamInnerIndex: bigint | TransactionArgument; userBuzz: string | TransactionArgument; userGenAi: (string | TransactionArgument | TransactionArgument | null) }

export function interactWithStreamBuzz(tx: TransactionBlock, typeArg: string, args: InteractWithStreamBuzzArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::interact_with_stream_buzz`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.mappingStore), obj(tx, args.hiveManager), obj(tx, args.hiveVault), obj(tx, args.beesManager), obj(tx, args.policy), obj(tx, args.hiveDisperser), obj(tx, args.userProfile), obj(tx, args.streamerProfile), pure(tx, args.streamIndex, `u64`), pure(tx, args.streamInnerIndex, `u64`), pure(tx, args.userBuzz, `${String.$typeName}`), pure(tx, args.userGenAi, `${Option.$typeName}<${String.$typeName}>`)], }) }

export interface InteractWithStreamBuzzNoUrlArgs { clock: TransactionObjectInput; mappingStore: TransactionObjectInput; hiveManager: TransactionObjectInput; hiveVault: TransactionObjectInput; beesManager: TransactionObjectInput; policy: TransactionObjectInput; hiveDisperser: TransactionObjectInput; userProfile: TransactionObjectInput; streamerProfile: TransactionObjectInput; streamIndex: bigint | TransactionArgument; streamInnerIndex: bigint | TransactionArgument; userBuzz: string | TransactionArgument }

export function interactWithStreamBuzzNoUrl(tx: TransactionBlock, typeArg: string, args: InteractWithStreamBuzzNoUrlArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::interact_with_stream_buzz_no_url`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.mappingStore), obj(tx, args.hiveManager), obj(tx, args.hiveVault), obj(tx, args.beesManager), obj(tx, args.policy), obj(tx, args.hiveDisperser), obj(tx, args.userProfile), obj(tx, args.streamerProfile), pure(tx, args.streamIndex, `u64`), pure(tx, args.streamInnerIndex, `u64`), pure(tx, args.userBuzz, `${String.$typeName}`)], }) }

export interface LikeStreamBuzzArgs { clock: TransactionObjectInput; mappingStore: TransactionObjectInput; hiveManager: TransactionObjectInput; hiveVault: TransactionObjectInput; beesManager: TransactionObjectInput; policy: TransactionObjectInput; userProfile: TransactionObjectInput; streamIndex: bigint | TransactionArgument; streamInnerIndex: bigint | TransactionArgument }

export function likeStreamBuzz(tx: TransactionBlock, typeArg: string, args: LikeStreamBuzzArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::like_stream_buzz`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.mappingStore), obj(tx, args.hiveManager), obj(tx, args.hiveVault), obj(tx, args.beesManager), obj(tx, args.policy), obj(tx, args.userProfile), pure(tx, args.streamIndex, `u64`), pure(tx, args.streamInnerIndex, `u64`)], }) }

export interface UpvoteHiveBuzzArgs { clock: TransactionObjectInput; mappingStore: TransactionObjectInput; hiveManager: TransactionObjectInput; hiveVault: TransactionObjectInput; userProfile: TransactionObjectInput; beesManager: TransactionObjectInput; policy: TransactionObjectInput; hiveBuzzByProfile: string | TransactionArgument; streamIndex: bigint | TransactionArgument; streamInnerIndex: bigint | TransactionArgument }

export function upvoteHiveBuzz(tx: TransactionBlock, typeArg: string, args: UpvoteHiveBuzzArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::upvote_hive_buzz`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.mappingStore), obj(tx, args.hiveManager), obj(tx, args.hiveVault), obj(tx, args.userProfile), obj(tx, args.beesManager), obj(tx, args.policy), pure(tx, args.hiveBuzzByProfile, `address`), pure(tx, args.streamIndex, `u64`), pure(tx, args.streamInnerIndex, `u64`)], }) }

export interface RemoveLiquidityFromXBeePoolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; lpCoins: TransactionObjectInput; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument; policy: TransactionObjectInput }

export function removeLiquidityFromXBeePool(tx: TransactionBlock, typeArgs: [string, string, string], args: RemoveLiquidityFromXBeePoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::remove_liquidity_from_x_bee_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.lpCoins), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`), obj(tx, args.policy)], }) }

export interface SwapBeeCoinsArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xIn: TransactionObjectInput; xInAmt: bigint | TransactionArgument; xOutMin: bigint | TransactionArgument; beesTokenIn: TransactionObjectInput; yInAmt: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument; beesManager: TransactionObjectInput; policy: TransactionObjectInput }

export function swapBeeCoins(tx: TransactionBlock, typeArgs: [string, string, string], args: SwapBeeCoinsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::swap_bee_coins`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.xIn), pure(tx, args.xInAmt, `u64`), pure(tx, args.xOutMin, `u64`), obj(tx, args.beesTokenIn), pure(tx, args.yInAmt, `u64`), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`), obj(tx, args.beesManager), obj(tx, args.policy)], }) }

export interface AddLiquidityToXBeePoolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; beesTokenIn: TransactionObjectInput; beesToAdd: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument; beesManager: TransactionObjectInput; policy: TransactionObjectInput }

export function addLiquidityToXBeePool(tx: TransactionBlock, typeArgs: [string, string, string], args: AddLiquidityToXBeePoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::add_liquidity_to_x_bee_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), obj(tx, args.beesTokenIn), pure(tx, args.beesToAdd, `u64`), pure(tx, args.minLpMinted, `u64`), obj(tx, args.beesManager), obj(tx, args.policy)], }) }

export interface AddLiquidityToXBeePoolAndReturnLpArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; beesTokenIn: TransactionObjectInput; beesToAdd: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument; beesManager: TransactionObjectInput; policy: TransactionObjectInput }

export function addLiquidityToXBeePoolAndReturnLp(tx: TransactionBlock, typeArgs: [string, string, string], args: AddLiquidityToXBeePoolAndReturnLpArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::add_liquidity_to_x_bee_pool_and_return_lp`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), obj(tx, args.beesTokenIn), pure(tx, args.beesToAdd, `u64`), pure(tx, args.minLpMinted, `u64`), obj(tx, args.beesManager), obj(tx, args.policy)], }) }

export interface BurnBeesFromSupplyArgs { policy: TransactionObjectInput; beesManager: TransactionObjectInput }

export function burnBeesFromSupply(tx: TransactionBlock, args: BurnBeesFromSupplyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::burn_bees_from_supply`, arguments: [obj(tx, args.policy), obj(tx, args.beesManager)], }) }

export interface ClaimBeesForChronicleFarmingArgs { hiveEntryCap: TransactionObjectInput; beesManager: TransactionObjectInput }

export function claimBeesForChronicleFarming(tx: TransactionBlock, args: ClaimBeesForChronicleFarmingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::claim_bees_for_chronicle_farming`, arguments: [obj(tx, args.hiveEntryCap), obj(tx, args.beesManager)], }) }

export interface DepositBeeToDexDaoArgs { cap: TransactionObjectInput; beesManager: TransactionObjectInput; transferAmt: bigint | TransactionArgument }

export function depositBeeToDexDao(tx: TransactionBlock, args: DepositBeeToDexDaoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::deposit_bee_to_dex_dao`, arguments: [obj(tx, args.cap), obj(tx, args.beesManager), pure(tx, args.transferAmt, `u64`)], }) }

export function incrementBeesManager(tx: TransactionBlock, typeArg: string, beesManager: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::increment_bees_manager`, typeArguments: [typeArg], arguments: [obj(tx, beesManager)], }) }

export interface KraftGenesisBeesArgs { hiveVault: TransactionObjectInput; beeKraftCap: TransactionObjectInput }

export function kraftGenesisBees(tx: TransactionBlock, typeArg: string, args: KraftGenesisBeesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::kraft_genesis_bees`, typeArguments: [typeArg], arguments: [obj(tx, args.hiveVault), obj(tx, args.beeKraftCap)], }) }

export interface RemoveLiquidityFromXBeePoolAndReturnArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; lpCoins: TransactionObjectInput; lpToBurn: bigint | TransactionArgument; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument; policy: TransactionObjectInput; beesManager: TransactionObjectInput }

export function removeLiquidityFromXBeePoolAndReturn(tx: TransactionBlock, typeArgs: [string, string, string], args: RemoveLiquidityFromXBeePoolAndReturnArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::remove_liquidity_from_x_bee_pool_and_return`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.lpCoins), pure(tx, args.lpToBurn, `u64`), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`), obj(tx, args.policy), obj(tx, args.beesManager)], }) }

export interface TransferBeesFromTreasuryArgs { cap: TransactionObjectInput; beesManager: TransactionObjectInput; policy: TransactionObjectInput; transferAmt: bigint | TransactionArgument; receipient: string | TransactionArgument }

export function transferBeesFromTreasury(tx: TransactionBlock, args: TransferBeesFromTreasuryArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::transfer_bees_from_treasury`, arguments: [obj(tx, args.cap), obj(tx, args.beesManager), obj(tx, args.policy), pure(tx, args.transferAmt, `u64`), pure(tx, args.receipient, `address`)], }) }

export interface UpdateBeeForEngagementPerEpochArgs { cap: TransactionObjectInput; beesManager: TransactionObjectInput; beeForEngagementPerEpoch: bigint | TransactionArgument }

export function updateBeeForEngagementPerEpoch(tx: TransactionBlock, args: UpdateBeeForEngagementPerEpochArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::bee_trade::update_bee_for_engagement_per_epoch`, arguments: [obj(tx, args.cap), obj(tx, args.beesManager), pure(tx, args.beeForEngagementPerEpoch, `u64`)], }) }
