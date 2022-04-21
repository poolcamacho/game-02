import { Item } from "../gilded-rose";
import { decreaseSellIn, increaseQuality, isExpired } from "../itemMutators";

export const isUsableFor = (item: Item) => {
    return item.name == 'Aged Brie';
}
export const update = (item: Item) => {
    decreaseSellIn(item);
    increaseQuality(item);

    if (isExpired(item)) {
        increaseQuality(item);
    }

    return;
}
