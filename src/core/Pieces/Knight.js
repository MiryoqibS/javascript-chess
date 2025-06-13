import { Piece } from "../Piece";

export class Knight extends Piece {
    constructor(color) {
        super(color);
        this.type = "knight";
    }

    canMove(fromY, fromX, toY, toX) {
        const directionX = Math.abs(fromX - toX);
        const directionY = Math.abs(fromY - toY);

        const isLshape = directionX === 1 && directionY === 2 || directionX === 2 && directionY === 1;

        if (isLshape) {
            return true;
        };

        return false;
    }

    canEat(fromY, fromX, toY, toX, target) {
        const directionX = Math.abs(fromX - toX);
        const directionY = Math.abs(fromY - toY);

        const isLshape = directionX === 1 && directionY === 2 || directionX === 2 && directionY === 1;

        if (isLshape && target && target.color !== this.color) {
            return true;
        };

        return false;
    }
}