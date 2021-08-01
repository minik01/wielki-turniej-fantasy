import {CardModel, CardType} from "./card.model";
import {Board} from "../board/board.model";

export enum Race {
    NECRO = 'gray',
}

const n1 = new CardModel('c001', Race.NECRO, 1, 'szkielet', new Board([[1]]), 1, null, null, [CardType.IMMORTAL, CardType.UNDEAD]);

const n2 = new CardModel('c002', Race.NECRO, 2, 'mroczny rycerz', new Board([[1, 1], [1, 0]]), 1, null, null, [CardType.IMMORTAL, CardType.UNDEAD]);


export const allCards: Map<string, CardModel> = new Map([n1, n2].map(card => {
    return [card.id, card];
}));
