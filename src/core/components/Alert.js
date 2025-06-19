export class Alert {
    constructor(root) {
        this.root = root;
    }

    init(pieceIcon, title, message) {
        const alert = this.render(pieceIcon, title, message);

        this.root.appendChild(alert);
    }

    render(pieceIcon, title, message) {
        const alert = document.createElement("div");
        alert.className = "alert hidden";

        const alertFireworks = document.createElement("div");
        alertFireworks.className = "alert-fireworks";
        const alertFireworksBefore = document.createElement("div");
        alertFireworksBefore.className = "alert-fireworks__before";
        const alertFireworksAfter = document.createElement("div");
        alertFireworksAfter.className = "alert-fireworks__after";

        alertFireworks.appendChild(alertFireworksBefore);
        alertFireworks.appendChild(alertFireworksAfter);

        const alertIcon = document.createElement("img");
        alertIcon.className = "alert__icon";
        alertIcon.src = pieceIcon;

        const alertTitle = document.createElement("h3");
        alertTitle.className = "alert__title";
        alertTitle.innerText = title;

        const alertMessage = document.createElement("p");
        alertMessage.className = "alert__message";
        alertMessage.innerText = message;

        const alertButton = document.createElement("button");
        alertButton.className = "alert__button";

        const restartIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        restartIcon.setAttribute("width", 12);
        restartIcon.setAttribute("height", 12);

        const restartIconUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
        restartIconUse.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `/sprites.svg#icon-restart`);
        restartIcon.appendChild(restartIconUse)

        alertButton.appendChild(restartIcon)
        alertButton.append("Start over");

        alertButton.addEventListener("click", () => {
            window.location.reload();
        });

        alert.appendChild(alertFireworks);
        alert.appendChild(alertIcon);
        alert.appendChild(alertTitle);
        alert.appendChild(alertMessage);
        alert.appendChild(alertButton);

        return alert;
    }

    show() {
        const alert = document.querySelector(".alert");

        setTimeout(() => {
            alert.classList.remove("hidden")
        }, 1000);
    }

    hide() {
        const alert = document.querySelector(".alert");

        if (alert) {
            alert.classList.add("hidden")
        };
    }
}