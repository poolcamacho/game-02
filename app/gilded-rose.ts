import { getUpdaterFor} from "./updater/generator";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, quality, sellIn) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }
}

export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;

export const itemTick = (item: Item) => {
    const getUpdate = getUpdaterFor(item);
    getUpdate.update(item);
}

export class GildedRose {
    items: Array<Item>;

    constructor(items: Array<Item>) {
        this.items = items;
    }

    tick() {
        this.items.forEach(itemTick);
        return this.items;
    }
}
