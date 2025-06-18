import { Piece } from "../Piece";

export class King extends Piece {
    constructor(color) {
        super(color);
        this.type = "king";
    }

    canMove(fromY, fromX, toY, toX) {
        const directionX = Math.abs(fromX - toX);
        const directionY = Math.abs(fromY - toY);

        return directionX <= 1 && directionY <= 1 && (directionX + directionY > 0);
    }

    canEat(fromY, fromX, toY, toX, target, boardLogic) {
        if (!target || target.color === this. color) return false;

        return this.canMove(fromY, fromX, toY, toX, boardLogic);
    }
}