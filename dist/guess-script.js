import GuessNumber from './guess-number.js';
import Difficulty from './guess-difficulty.js';
import { gameDifficulty } from './difficulty.js';
let guessNumberStart = document.getElementById("guess-start");
let guessNumberForm = document.getElementById("guess-form");
let guess = new Difficulty();
guessNumberStart === null || guessNumberStart === void 0 ? void 0 : guessNumberStart.addEventListener("click", () => {
    guessNumberStart === null || guessNumberStart === void 0 ? void 0 : guessNumberStart.classList.add("hidden");
    guessNumberForm === null || guessNumberForm === void 0 ? void 0 : guessNumberForm.classList.remove("hidden");
    new GuessNumber(guess.range(gameDifficulty));
});
