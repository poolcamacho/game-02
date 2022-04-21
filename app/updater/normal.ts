import { Item } from "../gilded-rose";
import { decreaseSellIn, decreaseQuality, isExpired } from "../itemMutators";

export const update = (item: Item) => {
    decreaseSellIn(item);
    decreaseQuality(item);

    if (isExpired(item)) {
        decreaseQuality(item);
    }
}
