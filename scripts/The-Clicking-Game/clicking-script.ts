import ClickingGame from './clicking-game.js';
import Difficulty from './clicking-difficulty.js';
import { gameDifficulty } from '../difficulty.js';

let clickingGameStart = document.getElementById("clicking-game-start");
let clickMe = document.getElementById("click-me");
let clickingGameStartMessage = document.getElementById("clicking-game-message");
let clickMeGrid = document.getElementById("click-me-grid");
let difficulty = new Difficulty();

clickingGameStart?.addEventListener("click", () => {
        clickingGameStart?.classList.add("hidden");
        clickingGameStartMessage?.classList.add("hidden");
        clickMe?.classList.remove("hidden");
        let rowDifficulty : number = difficulty.row(gameDifficulty);
        let colDifficulty : number = difficulty.col(gameDifficulty);
        let offsetRowDifficulty : number = difficulty.offsetRow(gameDifficulty);
        let offsetColDifficulty : number = difficulty.offsetCol(gameDifficulty);
    if(clickMeGrid){
        const rowValue : number = Math.floor(Math.random() * rowDifficulty) + offsetRowDifficulty;
        const columnValue : number = Math.floor(Math.random() * colDifficulty) + offsetColDifficulty;
        clickMeGrid.style.gridRowStart = rowValue.toString();
        clickMeGrid.style.gridColumnStart = columnValue.toString();
    }

    new ClickingGame(rowDifficulty, colDifficulty, offsetRowDifficulty, offsetColDifficulty);
});