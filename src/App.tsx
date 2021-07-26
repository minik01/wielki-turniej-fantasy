import React from 'react';
import './App.css';
import {BoardDrawer} from "./board/board-drawer";
import {bigBoards, smallBoards} from "./board/board.data";
import {CardOnBoard, Rotation} from "./board/board.model";
import {cards as allCards} from "./card/card.data";

const small = smallBoards[Math.floor(Math.random() * smallBoards.length)];
const big = bigBoards[Math.floor(Math.random() * bigBoards.length)];

big.cards.push(new CardOnBoard(1, 2, allCards[Math.floor(Math.random() * allCards.length)], Rotation.N));

function App() {
    return (
        <div className="App">
            {/*<BoardDrawer board={small}/>*/}
            <BoardDrawer board={big}/>
        </div>
    );
}

export default App;

