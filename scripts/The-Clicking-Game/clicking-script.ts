import ClickingGame from './clicking-game.js';
import Difficulty from './clicking-difficulty.js';
import { gameDifficulty } from '../difficulty.js';

const clickingGameStart = document.getElementById("clicking-game-start");
const clickingGameStartMessage = document.getElementById("clicking-game-message");

const clickMe = document.getElementById("click-me");
const clickMeGrid = document.getElementById("click-me-grid");
const clickingGameMessage = document.getElementById("clicking-game-message");
const scoreHTML = document.getElementById("score");
const timeHTML = document.getElementById("time");

const difficulty = new Difficulty();

clickingGameStart?.addEventListener("click", () => {
    clickingGameStart?.classList.add("hidden");
    clickingGameStartMessage?.classList.add("hidden");
    clickMe?.classList.remove("hidden");

    
    if (
        !clickMe ||
        !clickMeGrid ||
        !clickingGameMessage ||
        !scoreHTML ||
        !timeHTML
    )
    throw new Error("Missing required input elements for the game.");

    const rowDifficulty : number = difficulty.row(gameDifficulty);
    const colDifficulty : number = difficulty.col(gameDifficulty);
    const offsetRowDifficulty : number = difficulty.offsetRow(gameDifficulty);
    const offsetColDifficulty : number = difficulty.offsetCol(gameDifficulty);
    const rowValue : number = Math.floor(Math.random() * rowDifficulty) + offsetRowDifficulty;
    const columnValue : number = Math.floor(Math.random() * colDifficulty) + offsetColDifficulty;
    
    clickMeGrid.style.gridRowStart = rowValue.toString();
    clickMeGrid.style.gridColumnStart = columnValue.toString();

    new ClickingGame(
        rowDifficulty, 
        colDifficulty, 
        offsetRowDifficulty, 
        offsetColDifficulty,
        clickMe,
        clickMeGrid,
        clickingGameMessage,
        scoreHTML,
        timeHTML,
    );
});