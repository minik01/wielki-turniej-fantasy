import {Fragment, useEffect, useState} from "react";
import {Board, CardOnBoard, Rotation} from './board.model';
import _ from 'lodash';
import {allCards} from "../card/card.data";
import {CardModel} from "../card/card.model";

export function BoardDrawer(props: { board: Board, unitColor?: string }) {
    const [v, sv] = useState(0);
    const gridTemplate = `repeat(${props.board.raw.length}, var(--box-size)) / repeat(${props.board.raw.length}, var(--box-size))`

    useEffect(() => {
        console.log('changerd');
    }, [props.board.cards.length]);

    let validateCard = (ev: any): false | { x: number, y: number, card: CardModel, rot: Rotation } => {
        const coods: string[] = ev.target.getAttribute('id')?.split(':');
        const card = allCards.get(ev.dataTransfer.getData("card"));
        if (coods && card) {
            coods[0] = coods[0].split('(')[1];
            coods[1] = coods[1].split(')')[0];
            const x = Number(coods[0]);
            const y = Number(coods[1]);
            const rot = Rotation.N;
            const isValid = props.board.isValid(new CardOnBoard(x, y, card, rot));
            return isValid ? {x, y, card, rot} : false;
        } else {
            return false;
        }
    };

    function getClassName(field: number) {
        return 'board-field '
            + (field === 1 ? 'field--unit ' : '')
            + (field === -1 ? 'field--kill ' : '')
            + (field === -2 ? 'field--blocked ' : 'field--droppable ');
    }

    return <div className={'board'} style={{gridTemplate: gridTemplate}}>
        {
            props.board.raw.map((row, rowIndex) =>
                <Fragment key={rowIndex}>
                    {row.map((field, colIndex) =>
                        <span
                            key={`(${colIndex}:${rowIndex})`}
                            id={`(${colIndex}:${rowIndex})`}
                            className={getClassName(field)}
                            style={field === 1 ? {backgroundColor: props.unitColor} : {}}
                            onDragOver={(ev) => {
                                ev.preventDefault();
                                // _.throttle(validateCard, 300)(ev);
                            }}
                            onDrop={(ev) => {
                                ev.preventDefault();
                                const ans = validateCard(ev);
                                if (ans !== false) {
                                    const {x, y, card, rot} = ans;
                                    props.board.cards.push(new CardOnBoard(x, y, card, rot));
                                    sv(v+1);
                                }

                            }}
                        >
                        {props.board.drawCard(colIndex, rowIndex)}
                    </span>)}
                </Fragment>
            )
        }
    </div>
}
