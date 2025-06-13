import { Piece } from "../Piece";

export class Bishop extends Piece {
    constructor(color) {
        super(color);
        this.type = "bishop";
    }

    canMove(fromY, fromX, toY, toX, boardLogic) {
        const deltaX = toX - fromX;
        const deltaY = toY - fromY;

        if (Math.abs(deltaX) !== Math.abs(deltaY)) {
            return false;
        };

        const stepY = deltaY > 0 ? 1 : -1;
        const stepX = deltaX > 0 ? 1 : -1;

        let y = fromY + stepY;
        let x = fromX + stepX;

        while (x !== toX && y !== toY) {
            if (!boardLogic.isEmpty(y, x)) {
                return false;
            };

            x += stepX;
            y += stepY;
        };

        return true;
    }

    canEat(fromY, fromX, toY, toX, target, boardLogic) {
        if (!target || target.color === this.color) return false;

        return this.canMove(fromY, fromX, toY, toX, boardLogic);
    }
}