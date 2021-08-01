import React from 'react';
import './App.css';
import {BoardDrawer} from "./board/board-drawer";
import {bigBoards, smallBoards} from "./board/board.data";
import {CardOnBoard, Rotation} from "./board/board.model";
import {allCards} from "./card/card.data";
import {Deck} from "./deck/deck";

const small = smallBoards[Math.floor(Math.random() * smallBoards.length)];
const big = bigBoards[Math.floor(Math.random() * bigBoards.length)];

big.cards.push(new CardOnBoard(1, 2, Array.from(allCards.entries())[Math.floor(Math.random() * allCards.size)][1], Rotation.N));

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/*<BoardDrawer board={small}/>*/}
                <BoardDrawer board={big}/>
                <Deck cards={allCards}/>
            </div>
        );
    }
}

export default App;
