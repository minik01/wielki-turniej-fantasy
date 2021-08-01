import {CardModel} from "../card/card.model";

export enum Rotation {
    N, E, S, W
}

export class CardOnBoard {
    constructor(public x: number,
                public y: number,
                public readonly card: CardModel,
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

    getInvalidCardIds(): string[] {
        return this.cards
            .filter(card => !this.isValid(card))
            .map(cardOnBoard => cardOnBoard.card.id);
    }

    drawCard(colIndex: number, rowIndex: number) {
        const card = this.cards.find(c => (
            c.x <= colIndex &&
            colIndex < c.x + c.card.board.raw[0].length &&
            c.y <= rowIndex &&
            rowIndex < c.y + c.card.board.raw.length
        ))
        if (card) {
            //rot + empty spaces

            const colOffset = colIndex - card.x;
            const rowOffset = rowIndex - card.y;
            if (card.card.board.raw[rowOffset][colOffset])
                return <div style={{backgroundColor: card.card.race, width: '100%', height: '100%'}}>
                </div>
            else <></>

        } else
            <></>
    }

    public isValid(card: CardOnBoard): boolean {
        const cardBoard = card.card.board.raw;
        let cardSize = cardBoard.length;
        for (let y = 0; y < cardSize; y++) {
            for (let x = 0; x < cardSize; x++) {
                if (cardBoard[y][x] === 1 &&
                    (
                        this.raw[(card.y + y)] === undefined ||
                        this.raw[(card.y + y)][(card.x + x)] === undefined ||
                        this.raw[card.y + y][card.x + x] === -2
                    )
                ) return false;
            }
        }
        return true;
    }
}
