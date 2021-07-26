import { Fragment } from "react";
import {Board} from "./board.model";

export function BoardDrawer(props: { board: Board }) {
    return <div className={`board board--${props.board.type}`}>
        {
            props.board.raw.map((row, rowIndex) =>
                <Fragment key={rowIndex}>
                    {row.map((field, colIndex) => <span
                        key={`(${colIndex}:${rowIndex})`}
                        id={`(${colIndex}:${rowIndex})`}
                        className={'board-field '
                        + (field === -1 ? 'field--kill ' : '')
                        + (field === -2 ? 'field--blocked ' : '')}>
                        {props.board.drawCard(colIndex, rowIndex)}
                    </span>)}
                </Fragment >
            )
        }
    </div>
}
