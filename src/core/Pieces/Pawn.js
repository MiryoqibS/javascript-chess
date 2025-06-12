import { Piece } from "../Piece.js";

export class Pawn extends Piece {
    constructor(color) {
        super(color);
        this.type = "pawn";
        this.isFirstStep = true;
    }

    canMove(fromY, fromX, toY, toX) {
        const directionX = fromX - toX;
        const directionY = toY - fromY;

        const forward = this.color === "w" ? -1 : 1;

        // Первый шаг
        if (directionX === 0 && directionY === forward * 2 && this.isFirstStep) {
            return true;
        }

        // Обычный шаг
        if (directionX === 0 && directionY === forward) {
            return true;
        }

        return false;
    }

    canEat(fromY, fromX, toY, toX, target) {
        const directionX = fromX - toX;
        const directionY = toY - fromY;

        const forward = this.color === "w" ? -1 : 1;
        const isDiagonal = Math.abs(directionX) === 1 && directionY === forward;


        if (isDiagonal && target && target.color !== this.color) {
            return true;
        };

        return false;
    }
}