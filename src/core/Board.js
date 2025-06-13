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

    getPiece(row, col) {
        return this.grid[row][col];
    }

    isEmpty(row, col) {
        if (
            row < 0 || col >= 8 ||
            col < 0 || row >= 8
        ) {
            return false;
        };

        return this.grid[row][col] === null;
    }

    setPiece(row, col, piece) {
        this.grid[row][col] = piece;
    }

    movePiece(fromRow, fromCol, toRow, toCol) {
        const piece = this.getPiece(fromRow, fromCol);
        this.setPiece(toRow, toCol, piece);
        this.setPiece(fromRow, fromCol, null);
    }

    getAvailablePieceMoves(piece, fromRow, fromCol) {
        const moves = [];

        for (let toRow = 0; toRow < this.grid.length; toRow++) {
            for (let toCol = 0; toCol < 8; toCol++) {
                if (toRow === fromRow && toCol === fromCol) continue;

                const targetPiece = this.getPiece(toRow, toCol);
                
                if (targetPiece) {
                    if (piece.canEat(fromRow, fromCol, toRow, toCol, targetPiece, this)) {
                        moves.push({row: toRow, col: toCol});
                    };
                } else {
                    if (piece.canMove(fromRow, fromCol, toRow, toCol, this)) {
                        moves.push({row: toRow, col: toCol});
                    };
                };
            };
        };

        return moves;
    }
};

const board = new Board();
console.log(board.grid);
