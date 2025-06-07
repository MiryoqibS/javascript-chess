import { Piece } from "./Piece.js";

export class Board {
    constructor() {
        this.grid = this.createGrid();
        this.setupPieces();
    }

    createGrid() {
        return Array.from({ length: 8 }, () => Array(8).fill(null));
    }

    setupPieces() {
        const order = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];

        for (let i = 0; i < 8; i++) {
            // Чёрные
            this.grid[0][i] = new Piece(order[i], "b")
            this.grid[1][i] = new Piece("pawn", "b");

            // Белые
            this.grid[6][i] = new Piece("pawn", "w");
            this.grid[7][i] = new Piece(order[i], "w");
        };
    }
};

const board = new Board();
console.log(board.grid);
