export class PieceRender {
    constructor({type, color, imagePath}) {
        this.type = type;
        this.color = color;
        this.imagePath = imagePath;
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
