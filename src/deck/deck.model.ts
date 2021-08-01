import {CardModel} from "../card/card.model";

export class DeckModel {
    constructor(public readonly cards: CardModel[]) {
    }
}
