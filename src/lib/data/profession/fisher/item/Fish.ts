import type { Item } from '$lib/model/item/Item';
import { ItemId } from '$lib/data/game/ItemId';
import { EpisodeId } from '$lib/data/game/EpisodeId';
import { ProfessionId } from '$lib/data/game/ProfessionId';

interface Fish {
	quality: string;
	species: string;
	description: string;
	id: ItemId;
	f: number;
	buyValue: number;
	sellValue: number;
}

// prettier-ignore
const rawFish: Fish[] = [
	// Active Fish
	{ id: ItemId.PlacidBass, quality: 'Placid', species: 'Bass', description: '', buyValue: 0, sellValue: 480, f: 28 },
	{ id: ItemId.StripedBass, quality: 'Striped', species: 'Bass', description: '', buyValue: 0, sellValue: 0, f: 84 },
	{ id: ItemId.EmeraldBass, quality: 'Emerald', species: 'Bass', description: '', buyValue: 0, sellValue: 0, f: 137 },
	{ id: ItemId.DroptheBass, quality: 'Dropthe', species: 'Bass', description: '', buyValue: 0, sellValue: 0, f: 191 },
	{ id: ItemId.GiantBass, quality: 'Giant', species: 'Bass', description: '', buyValue: 0, sellValue: 0, f: 349 },

	{ id: ItemId.SlightCod, quality: 'Slight', species: 'Cod', description: '', buyValue: 0, sellValue: 0, f: 70 },
	{ id: ItemId.WaltzingCod, quality: 'Waltzing', species: 'Cod', description: '', buyValue: 0, sellValue: 0, f: 104 },
	{ id: ItemId.TealCod, quality: 'Teal', species: 'Cod', description: '', buyValue: 0, sellValue: 0, f: 145 },
	{ id: ItemId.PearlyCod, quality: 'Pearly', species: 'Cod', description: '', buyValue: 0, sellValue: 0, f: 178 },
	{ id: ItemId.MosaicCod, quality: 'Mosaic', species: 'Cod', description: '', buyValue: 0, sellValue: 0, f: 235 },
	{ id: ItemId.BurlyCod, quality: 'Burly', species: 'Cod', description: '', buyValue: 0, sellValue: 0, f: 366 },
	{ id: ItemId.EmperorCod, quality: 'Emperor', species: 'Cod', description: '', buyValue: 0, sellValue: 0, f: 454 },

	{ id: ItemId.LesserEel, quality: 'Lesser', species: 'Eel', description: '', buyValue: 0, sellValue: 165, f: 2 },
	{ id: ItemId.GrayEel, quality: 'Gray', species: 'Eel', description: '', buyValue: 0, sellValue: 210, f: 8 },
	{ id: ItemId.RockyEel, quality: 'Rocky', species: 'Eel', description: '', buyValue: 0, sellValue: 270, f: 16 },
	{ id: ItemId.RordEel, quality: 'Rord', species: 'Eel', description: '', buyValue: 0, sellValue: 420, f: 36 },
	{ id: ItemId.MorayEel, quality: 'Moray', species: 'Eel', description: '', buyValue: 0, sellValue: 0, f: 76 },
	{ id: ItemId.CongerEel, quality: 'Conger', species: 'Eel', description: '', buyValue: 0, sellValue: 0, f: 131 },
	{ id: ItemId.LeopardEel, quality: 'Leopard', species: 'Eel', description: '', buyValue: 0, sellValue: 0, f: 186 },
	{ id: ItemId.GreaterEel, quality: 'Greater', species: 'Eel', description: '', buyValue: 0, sellValue: 0, f: 323 },

	{ id: ItemId.MottledFlounder, quality: 'Mottled', species: 'Flounder', description: '', buyValue: 0, sellValue: 150, f: 0 },
	{ id: ItemId.OliveFlounder, quality: 'Olive', species: 'Flounder', description: '', buyValue: 0, sellValue: 195, f: 6 },
	{ id: ItemId.StoneFlounder, quality: 'Stone', species: 'Flounder', description: '', buyValue: 0, sellValue: 240, f: 12 },
	{ id: ItemId.ArrowtoothFlounder, quality: 'Arrowtooth', species: 'Flounder', description: '', buyValue: 0, sellValue: 315, f: 22 },
	{ id: ItemId.FloweryFlounder, quality: 'Flowery', species: 'Flounder', description: '', buyValue: 0, sellValue: 0, f: 62 },
	{ id: ItemId.JellyFlounder, quality: 'Jelly', species: 'Flounder', description: '', buyValue: 0, sellValue: 0, f: 118 },
	{ id: ItemId.PeacockFlounder, quality: 'Peacock', species: 'Flounder', description: '', buyValue: 0, sellValue: 0, f: 172 },
	{ id: ItemId.StarryFlounder, quality: 'Starry', species: 'Flounder', description: '', buyValue: 0, sellValue: 0, f: 279 },
	{ id: ItemId.BlackFlounder, quality: 'Black', species: 'Flounder', description: '', buyValue: 0, sellValue: 0, f: 472 },

	{ id: ItemId.YellowtailGurnard, quality: 'Yellowtail', species: 'Gurnard', description: '', buyValue: 0, sellValue: 255, f: 14 },
	{ id: ItemId.BigeyeGurnard, quality: 'Bigeye', species: 'Gurnard', description: '', buyValue: 0, sellValue: 570, f: 56 },
	{ id: ItemId.BlackfinGurnard, quality: 'Blackfin', species: 'Gurnard', description: '', buyValue: 0, sellValue: 0, f: 112 },
	{ id: ItemId.ShinyGurnard, quality: 'Shiny', species: 'Gurnard', description: '', buyValue: 0, sellValue: 0, f: 164 },
	{ id: ItemId.TorpedoGurnard, quality: 'Torpedo', species: 'Gurnard', description: '', buyValue: 0, sellValue: 0, f: 261 },
	{ id: ItemId.GrandGurnard, quality: 'Grand', species: 'Gurnard', description: '', buyValue: 0, sellValue: 0, f: 428 },

	{ id: ItemId.SandyPufferfish, quality: 'Sandy', species: 'Pufferfish', description: '', buyValue: 0, sellValue: 180, f: 4 },
	{ id: ItemId.LonelyPufferfish, quality: 'Lonely', species: 'Pufferfish', description: '', buyValue: 0, sellValue: 225, f: 10 },
	{ id: ItemId.LemonPufferfish, quality: 'Lemon', species: 'Pufferfish', description: '', buyValue: 0, sellValue: 285, f: 18 },
	{ id: ItemId.FigureEightPufferfish, quality: 'Figure', species: 'Eight Pufferfish', description: '', buyValue: 0, sellValue: 465, f: 42, },
	{ id: ItemId.RubberPufferfish, quality: 'Rubber', species: 'Pufferfish', description: '', buyValue: 0, sellValue: 0, f: 98 },
	{ id: ItemId.MerryOldPufferfish, quality: 'Merry', species: 'Old Pufferfish', description: '', buyValue: 0, sellValue: 0, f: 150 },
	{ id: ItemId.HightidePufferfish, quality: 'Hightide', species: 'Pufferfish', description: '', buyValue: 0, sellValue: 0, f: 217 },
	{ id: ItemId.UnicornPufferfish, quality: 'Unicorn', species: 'Pufferfish', description: '', buyValue: 0, sellValue: 0, f: 384 },

	{ id: ItemId.CommonRay, quality: 'Common', species: 'Ray', description: '', buyValue: 0, sellValue: 525, f: 50 },
	{ id: ItemId.DimRay, quality: 'Dim', species: 'Ray', description: '', buyValue: 0, sellValue: 0, f: 90 },
	{ id: ItemId.SoldierRay, quality: 'Soldier', species: 'Ray', description: '', buyValue: 0, sellValue: 0, f: 123 },
	{ id: ItemId.NimbleRay, quality: 'Nimble', species: 'Ray', description: '', buyValue: 0, sellValue: 0, f: 159 },
	{ id: ItemId.TigerRay, quality: 'Tiger', species: 'Ray', description: '', buyValue: 0, sellValue: 0, f: 197 },
	{ id: ItemId.BroadRay, quality: 'Broad', species: 'Ray', description: '', buyValue: 0, sellValue: 0, f: 305 },
	{ id: ItemId.JadeRay, quality: 'Jade', species: 'Ray', description: '', buyValue: 0, sellValue: 0, f: 410 },
	{ id: ItemId.PrimeRay, quality: 'Prime', species: 'Ray', description: '', buyValue: 0, sellValue: 0, f: 490 },

	// Passive Fish
	{ id: ItemId.LeatheryBream, quality: 'Leathery', species: 'Bream', description: '', buyValue: 0, sellValue: 0, f: 48 },
	{ id: ItemId.BlackBream, quality: 'Black', species: 'Bream', description: '', buyValue: 0, sellValue: 0, f: 87 },
	{ id: ItemId.SurfBream, quality: 'Surf', species: 'Bream', description: '', buyValue: 0, sellValue: 0, f: 120 },
	{ id: ItemId.GracefulBream, quality: 'Graceful', species: 'Bream', description: '', buyValue: 0, sellValue: 0, f: 167 },
	{ id: ItemId.CreamBream, quality: 'Cream', species: 'Bream', description: '', buyValue: 0, sellValue: 0, f: 194 },
	{ id: ItemId.GiltHeadedBream, quality: 'Gilt-Headed', species: 'Bream', description: '', buyValue: 0, sellValue: 0, f: 296 },
	{ id: ItemId.BrilliantBream, quality: 'Brilliant', species: 'Bream', description: '', buyValue: 0, sellValue: 0, f: 402 },

	{ id: ItemId.CommonDab, quality: 'Common', species: 'Dab', description: '', buyValue: 0, sellValue: 3600, f: 20 },
	{ id: ItemId.SmallDab, quality: 'Small', species: 'Dab', description: '', buyValue: 0, sellValue: 0, f: 53 },
	{ id: ItemId.DancingDab, quality: 'Dancing', species: 'Dab', description: '', buyValue: 0, sellValue: 0, f: 93 },
	{ id: ItemId.SummerDab, quality: 'Summer', species: 'Dab', description: '', buyValue: 0, sellValue: 0, f: 129 },
	{ id: ItemId.SmoothDab, quality: 'Smooth', species: 'Dab', description: '', buyValue: 0, sellValue: 0, f: 161 },
	{ id: ItemId.ScreamingAbDab, quality: 'Screaming', species: 'Ab Dab', description: '', buyValue: 0, sellValue: 0, f: 208 },
	{ id: ItemId.SpottedDab, quality: 'Spotted', species: 'Dab', description: '', buyValue: 0, sellValue: 0, f: 314 },
	{ id: ItemId.MightyDab, quality: 'Mighty', species: 'Dab', description: '', buyValue: 0, sellValue: 0, f: 446 },

	{ id: ItemId.RidgedHerring, quality: 'Ridged', species: 'Herring', description: '', buyValue: 0, sellValue: 4600, f: 34 },
	{ id: ItemId.GrayHerring, quality: 'Gray', species: 'Herring', description: '', buyValue: 0, sellValue: 0, f: 67 },
	{ id: ItemId.RedHerring, quality: 'Red', species: 'Herring', description: '', buyValue: 0, sellValue: 0, f: 110 },
	{ id: ItemId.OchreHerring, quality: 'Ochre', species: 'Herring', description: '', buyValue: 0, sellValue: 0, f: 148 },
	{ id: ItemId.WishfulHerring, quality: 'Wishful', species: 'Herring', description: '', buyValue: 0, sellValue: 0, f: 180 },
	{ id: ItemId.HopeHerring, quality: 'Hope', species: 'Herring', description: '', buyValue: 0, sellValue: 0, f: 270 },
	{ id: ItemId.ShimmeringHerring, quality: 'Shimmering', species: 'Herring', description: '', buyValue: 0, sellValue: 0, f: 375 },

	{ id: ItemId.SpottedMackibut, quality: 'Spotted', species: 'Mackibut', description: '', buyValue: 0, sellValue: 3400, f: 25 },
	{ id: ItemId.WhitespotMackibut, quality: 'Whitespot', species: 'Mackibut', description: '', buyValue: 0, sellValue: 0, f: 59 },
	{ id: ItemId.BlueJackMackibut, quality: 'Blue', species: 'Jack Mackibut', description: '', buyValue: 0, sellValue: 0, f: 81 },
	{ id: ItemId.StreakedMackibut, quality: 'Streaked', species: 'Mackibut', description: '', buyValue: 0, sellValue: 0, f: 115 },
	{ id: ItemId.HorseMackibut, quality: 'Horse', species: 'Mackibut', description: '', buyValue: 0, sellValue: 0, f: 134 },
	{ id: ItemId.ChubMackibut, quality: 'Chub', species: 'Mackibut', description: '', buyValue: 0, sellValue: 0, f: 156 },
	{ id: ItemId.BlueMackibut, quality: 'Blue', species: 'Mackibut', description: '', buyValue: 0, sellValue: 0, f: 189 },
	{ id: ItemId.WahooMackibut, quality: 'Wahoo', species: 'Mackibut', description: '', buyValue: 0, sellValue: 0, f: 252 },
	{ id: ItemId.EtwayMackibut, quality: 'Etway', species: 'Mackibut', description: '', buyValue: 0, sellValue: 0, f: 340 },
	{ id: ItemId.KingMackibut, quality: 'King', species: 'Mackibut', description: '', buyValue: 0, sellValue: 0, f: 419 },

	{ id: ItemId.IdleSturlet, quality: 'Idle', species: 'Sturlet', description: '', buyValue: 0, sellValue: 0, f: 45 },
	{ id: ItemId.FlatheadSturlet, quality: 'Flathead', species: 'Sturlet', description: '', buyValue: 0, sellValue: 0, f: 79 },
	{ id: ItemId.StripedSturlet, quality: 'Striped', species: 'Sturlet', description: '', buyValue: 0, sellValue: 0, f: 95 },
	{ id: ItemId.ThickLippedSturlet, quality: 'Thick-Lipped', species: 'Sturlet', description: '', buyValue: 0, sellValue: 0, f: 126 },
	{ id: ItemId.WanderingSturlet, quality: 'Wandering', species: 'Sturlet', description: '', buyValue: 0, sellValue: 0, f: 153 },
	{ id: ItemId.SilverSturlet, quality: 'Silver', species: 'Sturlet', description: '', buyValue: 0, sellValue: 0, f: 183 },
	{ id: ItemId.WesternSturlet, quality: 'Western', species: 'Sturlet', description: '', buyValue: 0, sellValue: 0, f: 200 },
	{ id: ItemId.BlondSturlet, quality: 'Blond', species: 'Sturlet', description: '', buyValue: 0, sellValue: 0, f: 287 },
	{ id: ItemId.BulletSturlet, quality: 'Bullet', species: 'Sturlet', description: '', buyValue: 0, sellValue: 0, f: 393 },
	{ id: ItemId.MightySturlet, quality: 'Mighty', species: 'Sturlet', description: '', buyValue: 0, sellValue: 0, f: 481 },

	{ id: ItemId.BallanWraddock, quality: 'Ballan', species: 'Wraddock', description: '', buyValue: 0, sellValue: 4600, f: 31 },
	{ id: ItemId.GoldsinnyWraddock, quality: 'Goldsinny', species: 'Wraddock', description: '', buyValue: 0, sellValue: 0, f: 65 },
	{ id: ItemId.CuckooWraddock, quality: 'Cuckoo', species: 'Wraddock', description: '', buyValue: 0, sellValue: 0, f: 101 },
	{ id: ItemId.CleanerWraddock, quality: 'Cleaner', species: 'Wraddock', description: '', buyValue: 0, sellValue: 0, f: 142 },
	{ id: ItemId.OrnateWraddock, quality: 'Ornate', species: 'Wraddock', description: '', buyValue: 0, sellValue: 0, f: 170 },
	{ id: ItemId.SixLineWraddock, quality: 'Six', species: 'Line Wraddock', description: '', buyValue: 0, sellValue: 0, f: 243 },
	{ id: ItemId.CorkwingWraddock, quality: 'Corkwing', species: 'Wraddock', description: '', buyValue: 0, sellValue: 0, f: 358 },
	{ id: ItemId.MegaWraddock, quality: 'Mega', species: 'Wraddock', description: '', buyValue: 0, sellValue: 0, f: 463 },

	// Venture Fish
	{ id: ItemId.OrangeLobster, quality: 'Orange', species: 'Lobster', description: '', buyValue: 0, sellValue: 531, f: 39 },
	{ id: ItemId.BeachOyster, quality: 'Beach', species: 'Oyster', description: '', buyValue: 0, sellValue: 0, f: 73 },
	{ id: ItemId.StripedLobster, quality: 'Striped', species: 'Lobster', description: '', buyValue: 0, sellValue: 0, f: 107 },
	{ id: ItemId.SignalOyster, quality: 'Signal', species: 'Oyster', description: '', buyValue: 0, sellValue: 0, f: 140 },
	{ id: ItemId.GhostLobster, quality: 'Ghost', species: 'Lobster', description: '', buyValue: 0, sellValue: 0, f: 175 },
	{ id: ItemId.SpeckledOyster, quality: 'Speckled', species: 'Oyster', description: '', buyValue: 0, sellValue: 0, f: 226 },
	{ id: ItemId.CunningLobster, quality: 'Cunning', species: 'Lobster', description: '', buyValue: 0, sellValue: 0, f: 331 },
	{ id: ItemId.RustyOyster, quality: 'Rusty', species: 'Oyster', description: '', buyValue: 0, sellValue: 0, f: 437 },
];

export const fish: Item[] = rawFish.map((fish) => {
	return {
		...fish,
		name: fish.species,
		fullName: `${fish.quality} ${fish.species}`,
		episodes: [EpisodeId.Hopeport],
		professions: [{ profession: ProfessionId.Fisher, level: fish.f }],
	};
});