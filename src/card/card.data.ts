import {Card, CardType} from "./card.model";

export enum Race {
    NECRO = 'gray',
}

const n1 = new Card(Race.NECRO, 1, 'szkielet', [[1]], 1, null, null, [CardType.IMMORTAL, CardType.UNDEAD]);

const n2 = new Card(Race.NECRO, 2, 'szkielet', [[1, 1], [1, 0]], 1, null, null, [CardType.IMMORTAL, CardType.UNDEAD]);


export const cards = [n1, n2];
