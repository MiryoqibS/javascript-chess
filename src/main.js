import "./styles/main.scss";
import { Board } from "./core/Board.js";
import { BoardRender } from "./ui/BoardRender.js";
import { HeaderRender } from "./ui/HeaderRender.js";
import { Alert } from "./core/components/Alert.js";

const app = document.getElementById("app");

const board = new Board();
const alert = new Alert(document.body);
const headerRender = new HeaderRender(board, app);
const boardRender = new BoardRender(board, app, headerRender, alert);

headerRender.init();
boardRender.init();