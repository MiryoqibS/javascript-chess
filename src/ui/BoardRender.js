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
                    const isPiece = target.classList.contains("piece");

                    let cellRow = +cell.getAttribute("position-row");
                    let cellCol = +cell.getAttribute("position-col");
                    const targetPiece = this.boardLogic.getPiece(+cellRow, +cellCol);

                    // <= 1 - Клик по фигуре =>
                    if (isPiece) {
                        if (!this.selectedPieceElement) {
                            // Выбираем фигуру
                            this.selectedPieceElement = target;
                            this.selectedPieceObject = targetPiece;
                            this.selectedPieceElement.classList.add("selected");
                            return;
                        };

                        // Позиция из которой была выбрана фигура
                        let selectedCellRow = +this.selectedPieceElement.closest(".cell").getAttribute("position-row");
                        let selectedCellCol = +this.selectedPieceElement.closest(".cell").getAttribute("position-col");

                        // Может ли фигура съесть другую фигуру
                        if (this.selectedPieceObject.canEat(selectedCellRow, selectedCellCol, cellRow, cellCol, targetPiece)) {
                            this.boardLogic.setPiece(cellRow, cellCol, this.selectedPieceObject);
                            this.boardLogic.setPiece(selectedCellRow, selectedCellCol, null);

                            cell.innerHTML = "";
                            cell.appendChild(this.selectedPieceElement);
                        };
                    };

                    // <= 2 - Клик по пустой клетке =>
                    if (this.selectedPieceElement) {
                        console.log(this.selectedPieceObject);
                        // Позиция из которой была выбрана фигура
                        let selectedCellRow = +this.selectedPieceElement.closest(".cell").getAttribute("position-row");
                        let selectedCellCol = +this.selectedPieceElement.closest(".cell").getAttribute("position-col");

                        const canMove = this.selectedPieceObject.canMove(selectedCellRow, selectedCellCol, cellRow, cellCol);
                        if (canMove && this.boardLogic.isEmpty(cellRow, cellCol)) {
                            cell.appendChild(this.selectedPieceElement);
                            this.boardLogic.movePiece(selectedCellRow, selectedCellCol, cellRow, cellCol);

                            // Проверка фигуры является ли она пешкой 
                            if (this.selectedPieceObject.type === "pawn") {
                                this.selectedPieceObject.isFirstStep = false;
                            };

                            console.log(this.boardLogic.grid);
                        }
                    };

                    // Обнуляем выделенный элемент и его объект
                    this.selectedPieceElement.classList.remove("selected");
                    this.selectedPieceElement = null;
                    this.selectedPieceObject = null;
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