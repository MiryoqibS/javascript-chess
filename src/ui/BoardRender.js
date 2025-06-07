import { PieceRender } from "./PieceRender";

export class BoardRender {
    constructor(board, root) {
        this.boardLogic = board;
        this.root = root;
    }

    render() {
        const board = document.createElement("div");
        board.className = "board";

        let grid = this.boardLogic.grid;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const cell = document.createElement("div");
                cell.className = "cell";

                if ((row + col) % 2 === 0) {
                    cell.classList.add("light")
                } else {
                    cell.classList.add("dark");
                };

                if (grid[row][col]) {
                    const pieceRenderer = new PieceRender(grid[row][col]);
                    const piece = pieceRenderer.render();
                    cell.appendChild(piece);
                };

                board.appendChild(cell);
            };
        };

        this.root.appendChild(board);
    }
}