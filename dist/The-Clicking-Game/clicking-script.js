import ClickingGame from './clicking-game.js';
import Difficulty from './clicking-difficulty.js';
import { gameDifficulty } from '../difficulty.js';
import getRandomNumber from '../utils.js';
const clickingGameStart = document.getElementById("clicking-game-start");
const clickingGameStartMessage = document.getElementById("clicking-game-message");
const clickMe = document.getElementById("click-me");
const clickMeGrid = document.getElementById("click-me-grid");
const clickingGameMessage = document.getElementById("clicking-game-message");
const scoreHTML = document.getElementById("score");
const timeHTML = document.getElementById("time");
const difficulty = new Difficulty();
clickingGameStart === null || clickingGameStart === void 0 ? void 0 : clickingGameStart.addEventListener("click", () => {
    clickingGameStart === null || clickingGameStart === void 0 ? void 0 : clickingGameStart.classList.add("hidden");
    clickingGameStartMessage === null || clickingGameStartMessage === void 0 ? void 0 : clickingGameStartMessage.classList.add("hidden");
    clickMe === null || clickMe === void 0 ? void 0 : clickMe.classList.remove("hidden");
    if (!clickMe ||
        !clickMeGrid ||
        !clickingGameMessage ||
        !scoreHTML ||
        !timeHTML)
        throw new Error("Missing required input elements for the game.");
    const rowDifficulty = difficulty.row(gameDifficulty);
    const colDifficulty = difficulty.col(gameDifficulty);
    const offsetRowDifficulty = difficulty.offsetRow(gameDifficulty);
    const offsetColDifficulty = difficulty.offsetCol(gameDifficulty);
    const rowValue = getRandomNumber(rowDifficulty, offsetColDifficulty);
    const columnValue = getRandomNumber(colDifficulty, offsetColDifficulty);
    clickMeGrid.style.gridRowStart = rowValue.toString();
    clickMeGrid.style.gridColumnStart = columnValue.toString();
    new ClickingGame(rowDifficulty, colDifficulty, offsetRowDifficulty, offsetColDifficulty, clickMe, clickMeGrid, clickingGameMessage, scoreHTML, timeHTML);
});
