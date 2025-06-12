import { Piece } from "../Piece.js";

export class Pawn extends Piece {
    constructor(color) {
        super(color);
        this.type = "pawn";
        this.isFirstStep = true;
    }

    canMove(fromY, fromX, toY, toX) {
        const directionX = Math.abs(fromX - toX);
        const directionY = toY - fromY;

        // Первый шаг
        if (directionX === 0 && directionY === 2 && this.isFirstStep) {
            return true;
        }

        // Обычный шаг
        if (directionX === 0 && directionY === 1) {
            return true;
        }

        return false;
    };
}