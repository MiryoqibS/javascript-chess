export class PieceRender {
    constructor({type, color, imagePath}, board, position) {
        this.type = type;
        this.color = color;
        this.imagePath = imagePath;
        this.board = board;
        this.position = position;
    }

    render() {
        const piece = document.createElement("img");
        const colorFull = {
            "b": "black",
            "w": "white",
        };
        piece.className = `piece ${colorFull[this.color]}`;
        piece.src = this.imagePath;
        return piece;
    }
}
