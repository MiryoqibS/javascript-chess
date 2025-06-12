import { Piece } from "../Piece";

export class Bishop extends Piece {
    constructor(color) {
        super(color);
        this.type = "bishop";
    }
}