import GuessNumber from './guess-number.js';
var guessNumberStart = document.getElementById("guess-start");
var guessNumberForm = document.getElementById("guess-form");
guessNumberStart === null || guessNumberStart === void 0 ? void 0 : guessNumberStart.addEventListener("click", () => {
    guessNumberStart === null || guessNumberStart === void 0 ? void 0 : guessNumberStart.classList.add("hidden");
    guessNumberForm === null || guessNumberForm === void 0 ? void 0 : guessNumberForm.classList.remove("hidden");
    new GuessNumber( //input enum GameDifficulty here later
    );
});
