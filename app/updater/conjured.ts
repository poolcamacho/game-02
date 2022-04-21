import {Item} from "../gilded-rose";
import {decreaseQuality, decreaseSellIn, isExpired} from "../itemMutators";

export const isUsableFor = (item: Item) => {
    return item.name == 'Conjured Mana Cake';
}
export const update = (item: Item) => {
    decreaseSellIn(item);
    decreaseQuality(item);
    decreaseQuality(item);

    if (isExpired(item)) {
        decreaseQuality(item);
        decreaseQuality(item);
    }
}
