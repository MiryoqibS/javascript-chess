import { Piece } from "../Piece";

export class King extends Piece {
    constructor(color) {
        super(color);
        this.type = "king";
    }
}