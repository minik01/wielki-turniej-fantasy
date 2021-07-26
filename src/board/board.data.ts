import {Board} from "./board.model";

const X = -1; //kill unit
const B = -2; //block

const board1 = new Board([[0, 0, 0, B, B], [B, 0, B, B, 0], [0, 0, 0, X, 0], [0, 0, 0, 0, 0], [X, 0, 0, 0, B]]);
const board2 = new Board([[B, 0, 0, B, B], [X, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, B, B], [0, 0, X, 0, B]]);
const board3 = new Board([[B, B, 0, 0, 0], [0, X, 0, B, 0], [B, 0, 0, 0, 0], [B, 0, 0, 0, X], [0, 0, 0, 0, B]]);
const board4 = new Board([[X, 0, 0, 0, 0], [0, 0, 0, X, B], [0, 0, 0, 0, B], [0, B, 0, 0, B], [B, B, 0, 0, 0]]);
const board5 = new Board([[0, X, 0, B, B], [B, 0, 0, B, 0], [0, 0, 0, 0, 0], [0, 0, X, 0, B], [B, 0, 0, 0, 0]]);

const board6 = new Board([
    [0, 0, 0, 0, 0, X, B],
    [X, 0, B, B, 0, 0, B],
    [0, 0, B, B, 0, 0, 0],
    [0, 0, X, 0, 0, B, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [B, 0, 0, 0, 0, 0, 0],
    [B, X, 0, B, 0, 0, 0]
]);
const board7 = new Board([
    [B, B, B, X, 0, 0, B],
    [B, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, X, B, B, 0, 0, B],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, B],
    [0, X, B, 0, 0, X, 0]]);
const board8 = new Board([
    [0, 0, 0, 0, B, 0, 0],
    [0, 0, 0, X, 0, 0, B],
    [0, 0, 0, B, 0, 0, 0],
    [0, 0, B, B, B, 0, 0],
    [0, 0, X, 0, 0, 0, X],
    [0, 0, 0, B, 0, 0, B],
    [0, 0, 0, X, B, 0, B]
]);
const board9 = new Board([
    [B, B, 0, X, B, 0, 0],
    [0, B, 0, 0, B, B, 0],
    [X, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, X],
    [0, 0, 0, 0, 0, 0, B],
    [B, 0, 0, 0, 0, 0, B],
    [0, 0, B, 0, X, 0, 0]
]);
const board10 = new Board([
    [B, B, B, B, 0, 0, 0],
    [B, 0, 0, 0, 0, 0, 0],
    [0, 0, X, 0, 0, 0, 0],
    [0, 0, B, B, X, B, X],
    [0, 0, B, B, 0, 0, 0],
    [X, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]);

export const smallBoards = [board1, board2, board3, board4, board5];
export const bigBoards = [board6, board7, board8, board9, board10];
