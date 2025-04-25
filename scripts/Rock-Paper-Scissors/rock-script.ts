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

gameWindow?.addEventListener("mouseenter", () => {
    if (startMessage)
        startMessage.textContent = `First to ${difficulty.rounds(gameDifficulty)} Wins`;
});

startButton?.addEventListener("click", () => {

    startButton?.classList.add("hidden");
    startButton?.classList.add("hidden");
    startMessage?.classList.add("hidden");
    selectWindow?.classList.remove("hidden");
    scoreWindow?.classList.remove("hidden");
    gameMessage?.classList.remove("hidden");

    if (
        !gameMessage ||
        !playerRock ||
        !playerPaper ||
        !playerScissors ||
        !selectWindow ||
        !scoreWindow ||
        !score ||
        !scoreFinal
    )
    throw new Error("Missing required input elements for the game.");

    new RockPaperScissors
    (difficulty.rounds(gameDifficulty),
    gameMessage,
    playerRock,
    playerPaper,
    playerScissors,
    selectWindow,
    scoreWindow,
    score,
    scoreFinal
    );
});

