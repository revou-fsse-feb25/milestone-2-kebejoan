import getRandomNumber from "../utils.js";

enum Guess {
    correct,
    low,
    high,
    closeHigh,
    closeLow,
    invalid
}

class GuessNumber {
    private guessCorrect = false;
    private guessLeftValue = 5;
    private readonly closeRange = 10;
    private readonly invalidInput = -999999;
    private randomNumber: number;

    constructor(
            private range: number,
            private guessMessage: HTMLElement,
            private guessLeft: HTMLElement,
            private guessInput: HTMLInputElement
        ) {
        this.randomNumber = getRandomNumber(this.range, 1);
        this.guessMessage.textContent = `Guess a number between 1 and ${this.range}`;
        this.updateGuessLeft();
        this.waitForEnter();
    }

    private waitForEnter(): void {
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

    private compareNumbers(userNumber: number): Guess {
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

    private handleResult(guess: Guess): void {
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

    private getGuessMessage(guess: Guess): string {
        const messages: Record<Guess, string> = {
            [Guess.correct]: "", // never shown; handled separately
            [Guess.low]: "Too Low.",
            [Guess.high]: "Too High.",
            [Guess.closeHigh]: "Too High, But Close!",
            [Guess.closeLow]: "Too Low, But Close!",
            [Guess.invalid]: `Invalid! Guess between 1 and ${this.range}`,
        };
        return messages[guess];
    }

    private updateGuessLeft(): void {
        if (this.guessLeftValue < 3) {
            this.guessLeft.classList.add("text-red-700");
        }
        this.guessLeft.textContent = `GUESS LEFT : ${this.guessLeftValue}`;

        if (this.guessLeftValue === 0 && !this.guessCorrect) {
            this.endGame(false);
        }
    }

    private endGame(won: boolean): void {
        this.guessInput.classList.add("hidden");
        this.guessMessage.textContent = won
        ? `You are correct! The number is ${this.randomNumber}`
        : `Game Over! The number was ${this.randomNumber}`;
    }
}

export default GuessNumber;
