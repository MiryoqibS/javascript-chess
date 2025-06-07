export class Piece {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    get symbol() {
        const symbols = {
            pawn: { w: '♙', b: '♟︎' },
            rook: { w: '♖', b: '♜' },
            knight: { w: '♘', b: '♞' },
            bishop: { w: '♗', b: '♝' },
            queen: { w: '♕', b: '♛' },
            king: { w: '♔', b: '♚' },
        };

        return symbols[this.type][this.color];
    };

    get imagePath() {
        return `/src/assets/${this.type}-${this.color}.svg`;
    }
}