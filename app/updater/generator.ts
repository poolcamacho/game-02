import {Item} from "../gilded-rose";
import * as TicketUpdater from "./ticket"
import * as LegendaryUpdater from "./legendary"
import * as CheeseUpdater from "./cheese"
import * as ConjuredUpdater from "./conjured"
import * as NormalUpdater from "./normal"

const UPDATERS = [TicketUpdater, LegendaryUpdater, CheeseUpdater,ConjuredUpdater];

export const getUpdaterFor = (item: Item) => {

    return UPDATERS.find(updater => updater.isUsableFor(item))
        || NormalUpdater;
}