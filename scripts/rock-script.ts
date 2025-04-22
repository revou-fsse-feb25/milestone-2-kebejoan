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

gameWindow?.addEventListener("mouseenter", () => {
    if (startMessage)
        startMessage.textContent = `First to ${difficulty.rounds(gameDifficulty)} Wins`
});

startButton?.addEventListener("click", () => {

    startButton?.classList.add("hidden");
    if (gameMessage)
        gameMessage.textContent = `Choose Your Weapon`
    startButton?.classList.add("hidden");
    startMessage?.classList.add("hidden");
    selectWindow?.classList.remove("hidden");
    scoreWindow?.classList.remove("hidden");
    gameMessage?.classList.remove("hidden");
    new RockPaperScissors(difficulty.rounds(gameDifficulty));
});

