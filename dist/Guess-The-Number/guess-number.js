import getRandomNumber from "../utils.js";
var Guess;
(function (Guess) {
    Guess[Guess["correct"] = 0] = "correct";
    Guess[Guess["low"] = 1] = "low";
    Guess[Guess["high"] = 2] = "high";
    Guess[Guess["closeHigh"] = 3] = "closeHigh";
    Guess[Guess["closeLow"] = 4] = "closeLow";
    Guess[Guess["invalid"] = 5] = "invalid";
})(Guess || (Guess = {}));
class GuessNumber {
    constructor(range, guessMessage, guessLeft, guessInput) {
        this.range = range;
        this.guessMessage = guessMessage;
        this.guessLeft = guessLeft;
        this.guessInput = guessInput;
        this.guessCorrect = false;
        this.guessLeftValue = 5;
        this.closeRange = 10;
        this.invalidInput = -999999;
        this.randomNumber = getRandomNumber(this.range, 1);
        this.guessMessage.textContent = `Guess a number between 1 and ${this.range}`;
        this.updateGuessLeft();
        this.waitForEnter();
    }
    waitForEnter() {
        this.guessInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                const userNumber = this.guessInput.valueAsNumber || this.invalidInput;
                const result = this.compareNumbers(userNumber);
                this.handleResult(result);
                this.guessInput.value = "";
            }
        });
    }
    compareNumbers(userNumber) {
        if (userNumber === this.invalidInput)
            return Guess.invalid;
        if (userNumber === this.randomNumber)
            return Guess.correct;
        const diff = Math.abs(userNumber - this.randomNumber);
        const isHigh = userNumber > this.randomNumber;
        if (diff < this.closeRange)
            return isHigh ? Guess.closeHigh : Guess.closeLow;
        return isHigh ? Guess.high : Guess.low;
    }
    handleResult(guess) {
        if (guess !== Guess.invalid) {
            this.guessLeftValue--;
        }
        if (guess === Guess.correct) {
            this.guessCorrect = true;
            this.endGame(true);
            return;
        }
        this.guessMessage.textContent = this.getGuessMessage(guess);
        this.updateGuessLeft();
    }
    getGuessMessage(guess) {
        const messages = {
            [Guess.correct]: "", // never shown; handled separately
            [Guess.low]: "Too Low.",
            [Guess.high]: "Too High.",
            [Guess.closeHigh]: "Too High, But Close!",
            [Guess.closeLow]: "Too Low, But Close!",
            [Guess.invalid]: `Invalid! Guess between 1 and ${this.range}`,
        };
        return messages[guess];
    }
    updateGuessLeft() {
        if (this.guessLeftValue < 3) {
            this.guessLeft.classList.add("text-red-700");
        }
        this.guessLeft.textContent = `GUESS LEFT : ${this.guessLeftValue}`;
        if (this.guessLeftValue === 0 && !this.guessCorrect) {
            this.endGame(false);
        }
    }
    endGame(won) {
        this.guessInput.classList.add("hidden");
        this.guessMessage.textContent = won
            ? `You are correct! The number is ${this.randomNumber}`
            : `Game Over! The number was ${this.randomNumber}`;
    }
}
export default GuessNumber;
