import { Piece } from "../Piece";

export class Rook extends Piece {
    constructor(color) {
        super(color);
        this.type = "rook";
    }

    canMove(fromY, fromX, toY, toX, boardLogic) {
        // Ладья ходит только по прямой
        const directionX = toX - fromX;
        const directionY = toY - fromY;

        // Горизонталь
        if (directionY === 0) {
            const step = directionX > 0 ? 1 : -1;
            for (let x = fromX + step; x !== toX; x += step) {
                if (!boardLogic.isEmpty(fromY, x)) {
                    return false;
                }
            }
            return true;
        }

        // Вертикаль
        if (directionX === 0) {
            const step = directionY > 0 ? 1 : -1;
            for (let y = fromY + step; y !== toY; y += step) {
                if (!boardLogic.isEmpty(y, fromX)) {
                    return false;
                }
            }
            return true;
        }

        return false;
    }


    canEat(fromY, fromX, toY, toX, target, boardLogic) {
        if (!target || target.color === this.color) return false;

        return this.canMove(fromY, fromX, toY, toX, boardLogic);
    };
}