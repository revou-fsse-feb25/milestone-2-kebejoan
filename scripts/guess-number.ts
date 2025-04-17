enum Guess{
    correct,
    low,
    high,
    closeHigh,
    closeLow,
    default
}

class GuessNumber{
    private guessMessage : HTMLElement | null;
    private guessLeft : HTMLElement | null;
    private guessInput : HTMLInputElement | null;
    private guessLeftValue : number;
    private userNumber : number;
    private randomNumber : number;
    private guessCorrect : boolean;
    private guess : Guess;

    constructor(){
        this.guessMessage = document.getElementById("guess-message");
        this.guessLeft = document.getElementById("guess-left");
        this.guessInput = document.getElementById("guess-input") as HTMLInputElement;
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        alert(`For testing purposes, the number is ${this.randomNumber}`);
        this.guessCorrect = false;
        this.guess = Guess.default;
        this.userNumber = -1;
        this.guessLeftValue = 5;
        if (this.guessMessage){
            this.guessMessage.textContent = "Guess a number between 1 and 100"; //difficulty will change the range
        }
        this.updateGuessLeft();
        this.waitForEnter();
    }

    private waitForEnter() : void{
        this.guessInput?.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                this.userNumber = this.guessInput?.valueAsNumber || -999999;
                this.compareNumbers();
                if (this.guessInput)
                    this.guessInput.value = "";
            }
        });
    }

    private compareNumbers() : void{
        if (this.userNumber === -999999){
            this.guess = Guess.default;
        } 
        else if (this.userNumber > this.randomNumber){
            if (this.userNumber - this.randomNumber < 10)
                this.guess = Guess.closeHigh;
            else this.guess = Guess.high;
        } 
        else if (this.userNumber < this.randomNumber){
            if (this.randomNumber - this.userNumber < 10)
                this.guess = Guess.closeLow;
            else this.guess = Guess.low;
        }
        else this.guess = Guess.correct;

        if (this.guess != Guess.default)
            this.guessLeftValue--;
        this.checkResult(this.guess);
    }

    private checkResult(theGuess : Guess) : void{
        switch (theGuess){
            case Guess.correct:
                this.guessCorrect = true;
                this.gameOver();
                break;
            case Guess.low:
                if (this.guessMessage)
                    this.guessMessage.textContent = "Too Low.";
                break;
            case Guess.high:
                if (this.guessMessage)
                    this.guessMessage.textContent = "Too High.";
                break;
            case Guess.closeHigh:
                if (this.guessMessage)
                    this.guessMessage.textContent = "Too High, But Close!";
                break;
            case Guess.closeLow:
                if (this.guessMessage)
                    this.guessMessage.textContent = "Too Low, But Close!";
                break;
            case Guess.default:
                if (this.guessMessage)
                    this.guessMessage.textContent = "Wrong Input!";
        }
        this.updateGuessLeft();
    }

    private updateGuessLeft() : void{
        if (this.guessLeft){
            if (this.guessLeftValue < 3){
                this.guessLeft.classList.add("text-red-700");
            }
            this.guessLeft.textContent = `GUESS LEFT : ${this.guessLeftValue}`;
        }
        if (this.guessLeftValue === 0)
            this.gameOver();
    }

    private gameOver() : void{
        this.guessInput?.classList.add("hidden");
        if (this.guessCorrect){
            if (this.guessMessage){
                this.guessMessage.textContent = `You are correct!\nThe number is ${this.randomNumber}`;
            }
        }
        else if (this.guessMessage) 
            this.guessMessage.textContent = `Game Over! The number was ${this.randomNumber}`;
    }
}
export default GuessNumber;