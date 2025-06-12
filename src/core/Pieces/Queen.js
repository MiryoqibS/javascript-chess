import { Piece } from "../Piece";

export class Queen extends Piece {
    constructor(color) {
        super(color);
        this.type = "queen";
    }
}