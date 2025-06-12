export class Piece {
    constructor(color) {
        this.color = color;
    }

    get imagePath() {
        return `/src/assets/${this.type}-${this.color}.svg`;
    }
}