import "./styles/main.scss";
import { Board } from "./core/Board.js";
import { BoardRender } from "./ui/BoardRender.js";

const app = document.getElementById("app");

const board = new Board();
const boardRender = new BoardRender(board, app);
boardRender.render();