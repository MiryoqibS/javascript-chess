export class HeaderRender {
    constructor(boardLogic, root) {
        this.boardLogic = boardLogic;
        this.root = root;
    }

    init() {
        const header = this.render();

        this.root.appendChild(header);
    }

    render() {
        const header = document.createElement("header");
        header.className = "header";

        const players = [
            {
                name: "Whites",
                color: "w",
            },
            {
                name: "Blacks",
                color: "b",
            },
        ];

        for (const player of players) {
            const playerPanel = document.createElement("div");
            playerPanel.className = "player-panel";

            const playerPanelHeader = document.createElement("div");
            playerPanelHeader.className = "player-panel__header";

            // Пока что сделаем отображение только цвета на аватаре так как нету мультиплеера
            const playerPanelPhoto = document.createElement("span");
            playerPanelPhoto.className = "player-panel__photo";

            if (player.color === "w") {
                playerPanelPhoto.classList.add("white");
            } else {
                playerPanelPhoto.classList.add("black");
            };

            // Информация об игроке
            const playerPanelDetails = document.createElement("div");
            playerPanelDetails.className = "player-panel__details";

            const playerPanelTitle = document.createElement("h3");
            playerPanelTitle.innerText = player.name;
            playerPanelTitle.className = "player-panel__title";

            const playerPanelTurn = document.createElement("p");
            playerPanelTurn.className = "player-panel__turn";
            playerPanelTurn.innerText = "• Turn";

            if (this.boardLogic.playerTurn !== player.color) {
                playerPanelTurn.classList.add("hide");
            };

            // Сведенные фигуры
            const playerPanelCaptured = document.createElement("div");
            playerPanelCaptured.className = "player-panel__captured";

            if (player.color === "w") {
                const capturedPieces = this.boardLogic.allCaptured;

                capturedPieces.white.forEach(piece => {
                    console.log(piece);
                    
                    const pieceElement = document.createElement("img");
                    pieceElement.src = piece.imagePath;

                    playerPanelCaptured.appendChild(pieceElement);
                });
            } else {
                const capturedPieces = this.boardLogic.allCaptured;

                capturedPieces.black.forEach(piece => {
                    console.log(piece);

                    const pieceElement = document.createElement("img");
                    pieceElement.src = piece.imagePath;

                    playerPanelCaptured.appendChild(pieceElement);
                });
            };

            // Группируем информацию об игроке
            playerPanelDetails.appendChild(playerPanelTitle);
            playerPanelDetails.appendChild(playerPanelTurn);

            // Группируем header
            playerPanelHeader.appendChild(playerPanelPhoto)
            playerPanelHeader.appendChild(playerPanelDetails)

            // Добавляем дочерние элементы в панель
            playerPanel.appendChild(playerPanelHeader);
            playerPanel.appendChild(playerPanelCaptured);

            // Добавляем панель игрока в header
            header.appendChild(playerPanel);
        };

        return header;
    };

    update() {
        const oldHeader = document.querySelector(".header");
        const newHeader = this.render();

        if (oldHeader) {
            oldHeader.replaceWith(newHeader);
        };
    };
}