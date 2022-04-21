import {Item, MAX_QUALITY, MIN_QUALITY} from "./gilded-rose";

export const increaseQuality = (item: Item) => {
    if (item.quality < MAX_QUALITY) {
        item.quality += 1
    }
}
export const decreaseQuality = (item: Item) => {
    if (item.quality > MIN_QUALITY) {
        item.quality -= 1
    }
}
export const decreaseSellIn = (item: Item) => {
    item.sellIn -= 1;
}
export const isExpired = (item: Item) => {
    return item.sellIn < 0;
}
