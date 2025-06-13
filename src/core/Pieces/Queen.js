import { Piece } from "../Piece";

export class Queen extends Piece {
    constructor(color) {
        super(color);
        this.type = "queen";
    }

    canMove(fromY, fromX, toY, toX, boardLogic) {
        const deltaX = toX - fromX;
        const deltaY = toY - fromY;

        // Правила движения ладьи
        if (deltaX === 0 || deltaY === 0) {
            // Горизонталь
            const stepX = deltaX === 0 ? 0 : deltaX > 0 ? 1 : -1;
            const stepY = deltaY === 0 ? 0 : deltaY > 0 ? 1 : -1;

            let y = fromY + stepY;
            let x = fromX + stepX;

            while (x !== toX || y !== toY) {
                if (!boardLogic.isEmpty(y, x)) {
                    return false;
                };

                x += stepX;
                y += stepY;
            };

            return true;
        };

        // Правила движения слона
        if (Math.abs(deltaX) === Math.abs(deltaY)) {
            const stepX = deltaX > 0 ? 1 : -1;
            const stepY = deltaY > 0 ? 1 : -1;

            let x = fromX + stepX;
            let y = fromY + stepY;

            while (x !== toX && y !== toY) {
                if (!boardLogic.isEmpty(y, x)) {
                    return false;
                };

                x += stepX;
                y += stepY;
            };

            return true;
        };

        return false;
    }

    canEat(fromY, fromX, toY, toX, target, boardLogic) {
        if (!target || target.color === this.color) return false;

        return this.canMove(fromY, fromX, toY, toX, boardLogic);
    }
}