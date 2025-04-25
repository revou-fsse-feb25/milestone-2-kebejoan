var Guess;
(function (Guess) {
    Guess[Guess["correct"] = 0] = "correct";
    Guess[Guess["low"] = 1] = "low";
    Guess[Guess["high"] = 2] = "high";
    Guess[Guess["closeHigh"] = 3] = "closeHigh";
    Guess[Guess["closeLow"] = 4] = "closeLow";
    Guess[Guess["default"] = 5] = "default";
})(Guess || (Guess = {}));
class GuessNumber {
    constructor(range) {
        this.guessMessage = document.getElementById("guess-message");
        this.guessLeft = document.getElementById("guess-left");
        this.guessInput = document.getElementById("guess-input");
        this.guessCorrect = false;
        this.guess = Guess.default;
        this.message = "";
        this.userNumber = -1;
        this.guessLeftValue = 5;
        this.invalidInput = -999999;
        this.closeRange = 10;
        this.range = range;
        this.randomNumber = Math.floor(Math.random() * this.range) + 1;
        if (this.guessMessage) {
            this.guessMessage.textContent = `Guess a number between 1 and ${this.range}`; //difficulty will change the range
        }
        this.updateGuessLeft();
        this.waitForEnter();
    }
    waitForEnter() {
        var _a;
        (_a = this.guessInput) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", (event) => {
            var _a;
            if (event.key === "Enter") {
                event.preventDefault();
                this.userNumber = ((_a = this.guessInput) === null || _a === void 0 ? void 0 : _a.valueAsNumber) || this.invalidInput;
                this.compareNumbers();
                if (this.guessInput)
                    this.guessInput.value = "";
            }
        });
    }
    compareNumbers() {
        if (this.userNumber === this.invalidInput) {
            this.guess = Guess.default;
        }
        else if (this.userNumber > this.randomNumber) {
            if (this.userNumber - this.randomNumber < this.closeRange)
                this.guess = Guess.closeHigh;
            else
                this.guess = Guess.high;
        }
        else if (this.userNumber < this.randomNumber) {
            if (this.randomNumber - this.userNumber < this.closeRange)
                this.guess = Guess.closeLow;
            else
                this.guess = Guess.low;
        }
        else
            this.guess = Guess.correct;
        if (this.guess != Guess.default)
            this.guessLeftValue--;
        this.checkResult(this.guess);
    }
    checkResult(theGuess) {
        switch (theGuess) {
            case Guess.correct:
                this.guessCorrect = true;
                this.gameOver();
                break;
            case Guess.low:
                this.message = "Too Low.";
                break;
            case Guess.high:
                this.message = "Too High.";
                break;
            case Guess.closeHigh:
                this.message = "Too High, But Close!";
                break;
            case Guess.closeLow:
                this.message = "Too Low, But Close!";
                break;
            case Guess.default:
                this.message = `Invalid! Guess between 1 and ${this.range}`;
        }
        if (!this.guessCorrect) {
            if (this.guessMessage)
                this.guessMessage.textContent = this.message;
            this.updateGuessLeft();
        }
    }
    updateGuessLeft() {
        if (this.guessLeft) {
            if (this.guessLeftValue < 3) {
                this.guessLeft.classList.add("text-red-700");
            }
            this.guessLeft.textContent = `GUESS LEFT : ${this.guessLeftValue}`;
        }
        if (this.guessLeftValue === 0)
            this.gameOver();
    }
    gameOver() {
        var _a;
        (_a = this.guessInput) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        if (this.guessCorrect) {
            if (this.guessMessage)
                this.guessMessage.textContent = `You are correct! The number is ${this.randomNumber}`;
        }
        else if (this.guessMessage)
            this.guessMessage.textContent = `Game Over! The number was ${this.randomNumber}`;
    }
}
export default GuessNumber;
