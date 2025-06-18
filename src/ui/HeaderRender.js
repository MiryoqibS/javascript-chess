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
            const playerElement = document.createElement("div");
            playerElement.className = "header-player";

            // Пока что сделаем отображение только цвета на аватаре так как нету мультиплеера
            const playerElementPhoto = document.createElement("span");
            playerElementPhoto.className = "header-player__photo";

            if (player.color === "w") {
                playerElementPhoto.classList.add("white");
            } else {
                playerElementPhoto.classList.add("black");
            };

            const playerElementInfo = document.createElement("div");
            playerElementInfo.className = "header-player__info";

            const playerElementTitle = document.createElement("h3");
            playerElementTitle.innerText = player.name;
            playerElementTitle.className = "header-player__title";

            const playerElementTurn = document.createElement("p");
            playerElementTurn.className = "header-player__turn";
            playerElementTurn.innerText = "• Turn";

            if (this.boardLogic.playerTurn !== player.color) {
                playerElementTurn.classList.add("hide");
            };

            playerElementInfo.appendChild(playerElementTitle);
            playerElementInfo.appendChild(playerElementTurn);

            playerElement.appendChild(playerElementPhoto);
            playerElement.appendChild(playerElementInfo);

            header.appendChild(playerElement);
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