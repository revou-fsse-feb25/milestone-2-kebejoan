import RockPaperScissors from './rock-paper-scissors.js';
import Difficulty from './rock-difficulty.js';
import { gameDifficulty } from './difficulty.js';
let startButton = document.getElementById("start-button");
let startMessage = document.getElementById("start-message");
let gameWindow = document.getElementById("game-window");
let selectWindow = document.getElementById("select-window");
let scoreWindow = document.getElementById("score-window");
let gameMessage = document.getElementById("game-message");
let difficulty = new Difficulty();
gameWindow === null || gameWindow === void 0 ? void 0 : gameWindow.addEventListener("mouseenter", () => {
    if (startMessage)
        startMessage.textContent = `First to ${difficulty.rounds(gameDifficulty)} Wins`;
});
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener("click", () => {
    startButton === null || startButton === void 0 ? void 0 : startButton.classList.add("hidden");
    if (gameMessage)
        gameMessage.textContent = `Choose Your Weapon`;
    startButton === null || startButton === void 0 ? void 0 : startButton.classList.add("hidden");
    startMessage === null || startMessage === void 0 ? void 0 : startMessage.classList.add("hidden");
    selectWindow === null || selectWindow === void 0 ? void 0 : selectWindow.classList.remove("hidden");
    scoreWindow === null || scoreWindow === void 0 ? void 0 : scoreWindow.classList.remove("hidden");
    gameMessage === null || gameMessage === void 0 ? void 0 : gameMessage.classList.remove("hidden");
    new RockPaperScissors(difficulty.rounds(gameDifficulty));
});
