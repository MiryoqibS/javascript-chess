import { Pawn } from "./Pieces/Pawn.js";
import { Rook } from "./Pieces/Rook.js";
import { Knight } from "./Pieces/Knight.js"
import { Bishop } from "./Pieces/Bishop.js"
import { Queen } from "./Pieces/Queen.js";
import { King } from "./Pieces/King.js";

export class Board {
    constructor() {
        this.grid = this.createGrid();
        this.setupPieces();
    }

    createGrid() {
        return Array.from({ length: 8 }, () => Array(8).fill(null));
    }

    setupPieces() {
        const order = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];

        for (let i = 0; i < 8; i++) {
            // Чёрные
            this.grid[0][i] = new order[i]("b");
            this.grid[1][i] = new Pawn("b");

            // Белые
            this.grid[6][i] = new Pawn("w");
            this.grid[7][i] = new order[i]("w");
        };
    }
};

const board = new Board();
console.log(board.grid);
