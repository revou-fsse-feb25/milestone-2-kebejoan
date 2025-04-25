import GuessNumber from './guess-number.js';
import Difficulty from './guess-difficulty.js';
import { gameDifficulty } from '../difficulty.js';

const guessStart = document.getElementById("guess-start");
const guessForm = document.getElementById("guess-form");

const guessMessage = document.getElementById("guess-message");
const guessLeft = document.getElementById("guess-left");
const guessInput = document.getElementById("guess-input") as HTMLInputElement;

const difficulty = new Difficulty();

guessStart?.addEventListener("click", () => {
    guessStart.classList.add("hidden");
    guessForm?.classList.remove("hidden");
    if (!guessMessage || !guessLeft || !guessInput) {
        throw new Error("Missing required input elements for the game.");
    }

    new GuessNumber(
    difficulty.range(gameDifficulty),
    guessMessage,
    guessLeft,
    guessInput
    );
});