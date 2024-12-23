import type { Profession } from '$lib/model/profession/Profession';
import { ProfessionId } from '$lib/data/game/ProfessionId';

export const blacksmith: Profession = {
	id: ProfessionId.Blacksmith,
	name: 'Blacksmith',
	icon: 'profession/blacksmith.png',
	actions: [],
	passives: [],
};
