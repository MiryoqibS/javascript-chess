import { PieceRender } from "./PieceRender";

export class BoardRender {
    constructor(board, root) {
        this.boardLogic = board;
        this.root = root;
        this.selectedPieceElement = null;
        this.selectedPieceObject = {};
    }

    render() {
        const board = document.createElement("div");
        board.className = "board";

        let grid = this.boardLogic.grid;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const cell = document.createElement("div");
                cell.setAttribute("position-row", row);
                cell.setAttribute("position-col", col);
                cell.className = "cell";
                // Движение фигур
                cell.addEventListener("click", (e) => {
                    const target = e.target;

                    // Проверка target является ли он фигурой
                    if (target.classList.contains("piece")) {
                        // Выбираем фигуру
                        this.selectedPieceElement = target;

                        // Определяем позицию фигуры в grid (игровая доска) массиве 
                        let cellRow = cell.getAttribute("position-row");
                        let cellCol = cell.getAttribute("position-col");

                        // Выбираем объект фигуры из grid массива
                        this.selectedPieceObject = this.boardLogic.grid[+cellRow][+cellCol];
                    } else if (this.selectedPieceElement) {
                        console.log(this.selectedPieceObject);
                        
                        // Позиция из которой была выбрана фигура
                        let selectedCellRow = +this.selectedPieceElement.closest(".cell").getAttribute("position-row");
                        let selectedCellCol = +this.selectedPieceElement.closest(".cell").getAttribute("position-col");
                        // Позиция на которую хочет перейти
                        let cellRow = +cell.getAttribute("position-row");
                        let cellCol = +cell.getAttribute("position-col");

                        if (this.selectedPieceObject.canMove(selectedCellRow, selectedCellCol, cellRow, cellCol)) {
                            cell.appendChild(this.selectedPieceElement);
                            this.selectedPieceElement = null;
                            this.boardLogic.grid[+cellRow][+cellCol] = this.selectedPieceObject;

                            // Проверка фигуры является ли она пешкой 
                            if (this.selectedPieceObject.type === "pawn") {
                                this.selectedPieceObject.isFirstStep = false;
                            };
                        }
                    };
                });

                // Определение цвета ячейки
                if ((row + col) % 2 === 0) {
                    cell.classList.add("light")
                } else {
                    cell.classList.add("dark");
                };

                // Рендеринг фигуры если она есть
                if (grid[row][col]) {
                    const position = {
                        row,
                        col,
                    };

                    const pieceRenderer = new PieceRender(grid[row][col], this.boardLogic, position);
                    const piece = pieceRenderer.render();
                    cell.appendChild(piece);
                };

                // Добавляем ячейку в доску
                board.appendChild(cell);
            };
        };

        this.root.appendChild(board);
    }
}