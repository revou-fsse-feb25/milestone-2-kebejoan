import GuessNumber from './guess-number.js';

var guessNumberStart = document.getElementById("guess-start");
var guessNumberForm = document.getElementById("guess-form");
var guessNumberMessage = document.getElementById("guess-message");

guessNumberStart?.addEventListener("click", () => {
    guessNumberStart?.classList.add("hidden");
    guessNumberForm?.classList.remove("hidden");
    new GuessNumber(//input enum GameDifficulty here later
    );
});