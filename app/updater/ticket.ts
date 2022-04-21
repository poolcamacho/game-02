import { Item, MIN_QUALITY } from "../gilded-rose";
import {decreaseSellIn, increaseQuality, isExpired} from "../itemMutators";

export const isUsableFor = (item: Item) => {
    return item.name == 'Backstage passes to a TAFKAL80ETC concert'
}
export const update = (item: Item) => {
    decreaseSellIn(item);
    increaseQuality(item);

    if (item.sellIn < 10) {
        increaseQuality(item);
    }

    if (item.sellIn < 5) {
        increaseQuality(item);
    }

    if (isExpired(item)) {
        item.quality = MIN_QUALITY;
    }
    return;
}