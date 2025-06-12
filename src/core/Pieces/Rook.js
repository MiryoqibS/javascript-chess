import { Piece } from "../Piece";

export class Rook extends Piece {
    constructor(color) {
        super(color);
        this.type = "rook";
    }
}