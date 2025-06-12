import { Piece } from "../Piece";

export class Knight extends Piece {
    constructor(color) {
        super(color);
        this.type = "knight";
    }
}