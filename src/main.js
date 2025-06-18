import "./styles/main.scss";
import { Board } from "./core/Board.js";
import { BoardRender } from "./ui/BoardRender.js";
import { HeaderRender } from "./ui/HeaderRender.js";

const app = document.getElementById("app");

const board = new Board();
const headerRender = new HeaderRender(board, app);
const boardRender = new BoardRender(board, app, headerRender);
headerRender.init();
boardRender.render();