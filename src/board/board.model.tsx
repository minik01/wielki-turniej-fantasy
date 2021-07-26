import {Card} from "../card/card.model";
import {cards} from "../card/card.data";

export enum Rotation {
    N, E, S, W
}

export class CardOnBoard {
    constructor(public x: number,
                public y: number,
                public readonly card: Card,
                public rot: Rotation,
    ) {
    }

}

export class Board {
    public type: 'small' | 'big';

    constructor(public readonly raw: number [][],
                public cards: CardOnBoard[] = []
    ) {
        this.type = raw.length === 5 ? 'small' : 'big';
    }

    isValid(): boolean {
        return false;
    }

    drawCard(colIndex: number, rowIndex: number) {
        const card = this.cards.find(c => (
            c.x <= colIndex &&
            colIndex < c.x + c.card.rawArray[0].length &&
            c.y <= rowIndex &&
            rowIndex < c.y + c.card.rawArray.length
        ))
        if (card) {
            //rot + empty spaces

            const colOffset = colIndex - card.x;
            const rowOffset = rowIndex - card.y;
            if (card.card.rawArray[rowOffset][colOffset])
                return <div style={{backgroundColor: card.card.race, width: '100%', height: '100%'}}>
                </div>
            else <></>

        } else
            <></>
    }
}
