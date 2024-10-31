import * as queenMaker from "./queen-maker/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(queenMaker.AuctionConfig);
loader.register(queenMaker.AuctionInfo);
loader.register(queenMaker.BidPool);
loader.register(queenMaker.BidUpdatedByUser);
loader.register(queenMaker.BidsClosed);
loader.register(queenMaker.BidsOpenForExisting);
loader.register(queenMaker.EnergyAndHealthIncremented);
loader.register(queenMaker.LeadingDragonBee);
loader.register(queenMaker.LeadingDragonBeeUpdated);
loader.register(queenMaker.MinBidLimitUpdated);
loader.register(queenMaker.NewBeeAddedToCompetition);
loader.register(queenMaker.ParticipatingBees);
loader.register(queenMaker.ParticipationPosition);
loader.register(queenMaker.QueenClaimedByItsOwner);
loader.register(queenMaker.QueenCompetitionOver);
loader.register(queenMaker.QueenCustody);
loader.register(queenMaker.QueenMaker);
loader.register(queenMaker.UserBeeReturned);
 }
