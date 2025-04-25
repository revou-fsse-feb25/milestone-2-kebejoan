import RockPaperScissors from './rock-paper-scissors.js';
import Difficulty from './rock-difficulty.js';
import { gameDifficulty } from '../difficulty.js';
const startButton = document.getElementById("start-button");
const startMessage = document.getElementById("start-message");
const gameWindow = document.getElementById("game-window");
const gameMessage = document.getElementById("game-message");
const playerRock = document.getElementById("p-rock");
const playerPaper = document.getElementById("p-paper");
const playerScissors = document.getElementById("p-scissors");
const selectWindow = document.getElementById("select-window");
const scoreWindow = document.getElementById("score-window");
const score = document.getElementById("score");
const scoreFinal = document.getElementById("score-final");
const difficulty = new Difficulty();
gameWindow === null || gameWindow === void 0 ? void 0 : gameWindow.addEventListener("mouseenter", () => {
    if (startMessage)
        startMessage.textContent = `First to ${difficulty.rounds(gameDifficulty)} Wins`;
});
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener("click", () => {
    startButton === null || startButton === void 0 ? void 0 : startButton.classList.add("hidden");
    startButton === null || startButton === void 0 ? void 0 : startButton.classList.add("hidden");
    startMessage === null || startMessage === void 0 ? void 0 : startMessage.classList.add("hidden");
    selectWindow === null || selectWindow === void 0 ? void 0 : selectWindow.classList.remove("hidden");
    scoreWindow === null || scoreWindow === void 0 ? void 0 : scoreWindow.classList.remove("hidden");
    gameMessage === null || gameMessage === void 0 ? void 0 : gameMessage.classList.remove("hidden");
    if (!gameMessage ||
        !playerRock ||
        !playerPaper ||
        !playerScissors ||
        !selectWindow ||
        !scoreWindow ||
        !score ||
        !scoreFinal)
        throw new Error("Missing required input elements for the game.");
    new RockPaperScissors(difficulty.rounds(gameDifficulty), gameMessage, playerRock, playerPaper, playerScissors, selectWindow, scoreWindow, score, scoreFinal);
});
