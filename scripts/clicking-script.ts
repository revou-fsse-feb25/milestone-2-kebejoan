import ClickingGame from './clicking-game.js';
import { gameDifficulty } from './difficulty.js';

var clickingGameStart = document.getElementById("clicking-game-start");
var clickMe = document.getElementById("click-me");
var clickingGameStartMessage = document.getElementById("clicking-game-message");
var clickMeGrid = document.getElementById("click-me-grid");

clickingGameStart?.addEventListener("click", () => {
        clickingGameStart?.classList.add("hidden");
        clickingGameStartMessage?.classList.add("hidden");
        clickMe?.classList.remove("hidden");
    if(clickMeGrid){
        const rowValue : number = Math.floor(Math.random() * 7) + 1;
        const columnValue : number = Math.floor(Math.random() * 5) + 1;
        clickMeGrid.style.gridRowStart = rowValue.toString();
        clickMeGrid.style.gridColumnStart = columnValue.toString();
    }
    new ClickingGame();
});