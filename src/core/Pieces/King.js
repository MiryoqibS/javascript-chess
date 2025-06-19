import { Piece } from "../Piece";

export class King extends Piece {
    constructor(color) {
        super(color);
        this.type = "king";
    }

    canMove(fromY, fromX, toY, toX, boardLogic) {
        const directionX = Math.abs(fromX - toX);
        const directionY = Math.abs(fromY - toY);

        const isInRange = directionX <= 1 && directionY <= 1 && (directionX + directionY > 0);
        if (!isInRange) return false;

        const opponentColor = this.color === "w" ? "b" : "w";

        for (let row = 0; row < boardLogic.grid.length; row++) {
            for (let col = 0; col < 8; col++) {
                const piece = boardLogic.getPiece(row, col);

                if (piece && piece.color === opponentColor) {
                    if (piece.canEat(row, col, toY, toX, this, boardLogic)) {
                        return false;
                    };
                };
            };
        };

        return true;
    }

    canEat(fromY, fromX, toY, toX, target, boardLogic) {
        if (!target || target.color === this. color) return false;

        return this.canMove(fromY, fromX, toY, toX, boardLogic);
    }
}