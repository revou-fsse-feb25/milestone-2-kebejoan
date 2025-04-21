import ClickingGame from './clicking-game.js';
import Difficulty from './clicking-difficulty.js';
import { gameDifficulty } from './difficulty.js';
let clickingGameStart = document.getElementById("clicking-game-start");
let clickMe = document.getElementById("click-me");
let clickingGameStartMessage = document.getElementById("clicking-game-message");
let clickMeGrid = document.getElementById("click-me-grid");
let difficulty = new Difficulty();
clickingGameStart === null || clickingGameStart === void 0 ? void 0 : clickingGameStart.addEventListener("click", () => {
    clickingGameStart === null || clickingGameStart === void 0 ? void 0 : clickingGameStart.classList.add("hidden");
    clickingGameStartMessage === null || clickingGameStartMessage === void 0 ? void 0 : clickingGameStartMessage.classList.add("hidden");
    clickMe === null || clickMe === void 0 ? void 0 : clickMe.classList.remove("hidden");
    let rowDifficulty = difficulty.row(gameDifficulty);
    let colDifficulty = difficulty.col(gameDifficulty);
    let offsetRowDifficulty = difficulty.offsetRow(gameDifficulty);
    let offsetColDifficulty = difficulty.offsetCol(gameDifficulty);
    if (clickMeGrid) {
        const rowValue = Math.floor(Math.random() * rowDifficulty) + offsetRowDifficulty;
        const columnValue = Math.floor(Math.random() * colDifficulty) + offsetColDifficulty;
        clickMeGrid.style.gridRowStart = rowValue.toString();
        clickMeGrid.style.gridColumnStart = columnValue.toString();
    }
    new ClickingGame(rowDifficulty, colDifficulty, offsetRowDifficulty, offsetColDifficulty);
});
