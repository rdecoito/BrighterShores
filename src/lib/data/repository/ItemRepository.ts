import type { Item } from '$lib/model/item/Item';
import { hides } from '$lib/data/profession/leatherworker/item/Hides';
import { leathers } from '$lib/data/profession/leatherworker/item/Leathers';
import type { ItemId } from '$lib/data/game/ItemId';
import { logs } from '$lib/data/profession/woodcutter/item/Logs';
import { planks } from '$lib/data/profession/carpenter/item/Planks';

export class ItemRepository {
	public static items: Item[] = [
		// Woodcutter
		...logs,

		// Carpenter
		...planks,

		// Leatherworker
		...hides,
		...leathers,
	];

	public static getItem(id: ItemId): Item {
		const item = this.items.find((item) => item.id === id);
		if (item === undefined) {
			throw new Error(`Could not find item with id '${id}'`);
		}
		return item;
	}
}
