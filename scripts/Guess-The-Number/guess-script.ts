import GuessNumber from './guess-number.js';
import Difficulty from './guess-difficulty.js';
import { gameDifficulty } from '../difficulty.js';

let guessNumberStart = document.getElementById("guess-start");
let guessNumberForm = document.getElementById("guess-form");
let guess = new Difficulty();

guessNumberStart?.addEventListener("click", () => {
    guessNumberStart?.classList.add("hidden");
    guessNumberForm?.classList.remove("hidden");
    new GuessNumber(guess.range(gameDifficulty));
});