import Update from './rock-update.js';

enum Choice {
    rock, //0
    paper, //1
    scissors, //2
    default
}
enum Result {
    win,
    loose,
    tie
}

enum Winner {
    player = "Player",
    computer = "Computer"
}
const update = new Update();
const choices : Choice[] = [Choice.rock, Choice.paper, Choice.scissors];
const winCondition : Choice[] = [Choice.scissors, Choice.rock, Choice.paper]

class RockPaperScissors {
    private gameMessage : HTMLElement | null;
    private playerRock : HTMLElement | null;
    private playerPaper : HTMLElement | null;
    private playerScissors : HTMLElement | null;
    private selectWindow : HTMLElement | null;
    private scoreWindow : HTMLElement | null;
    private score : HTMLElement | null;
    private scoreFinal : HTMLElement | null;
    private playerScore : number;
    private computerScore : number;
    private playerChoice : Choice;
    private computerChoice : Choice;
    private randomIndex : number;
    private message : string;
    private rounds : number;

    constructor(rounds : number) {
        this.gameMessage = document.getElementById("game-message");
        this.playerRock = document.getElementById("p-rock");
        this.playerPaper = document.getElementById("p-paper");
        this.playerScissors = document.getElementById("p-scissors");
        this.selectWindow = document.getElementById("select-window");
        this.scoreWindow = document.getElementById("score-window");
        this.score = document.getElementById("score");
        this.scoreFinal = document.getElementById("score-final");
        this.playerScore = 0;
        this.computerScore = 0;
        this.playerChoice = Choice.default;
        this.computerChoice = Choice.default;
        this.randomIndex = -1;
        this.message = "";
        this.rounds = rounds;

        this.generateComputerChoice();
        this.checkChoices();
    }

    private generateComputerChoice() : void {
        this.randomIndex = Math.floor(Math.random() * 3);
        this.computerChoice = choices[this.randomIndex];
    }

    private checkChoices() : void {
        this.playerRock?.addEventListener("click", () => {
            this.playerChoice = Choice.rock;
            this.compareChoices(this.computerChoice, this.playerChoice);
            update.choice(this.computerChoice, this.playerChoice);
        });
        this.playerPaper?.addEventListener("click", () => {
            this.playerChoice = Choice.paper;
            this.compareChoices(this.computerChoice, this.playerChoice);
            update.choice(this.computerChoice, this.playerChoice);
        });
        this.playerScissors?.addEventListener("click", () => {
            this.playerChoice = Choice.scissors;
            this.compareChoices(this.computerChoice, this.playerChoice);
            update.choice(this.computerChoice, this.playerChoice);
        });
    }

    private compareChoices(computer : Choice, player : Choice) : void {
        if (computer === player)
            this.resultUpdate(Result.tie)
        else winCondition[player] === computer ? this.resultUpdate(Result.win) : this.resultUpdate(Result.loose);
        setTimeout(() => {
            if (this.playerScore < this.rounds && this.computerScore < this.rounds){
                this.generateComputerChoice();
                update.newRound();
            } else if (this.playerScore === this.rounds)
                this.gameOver(Winner.player);
                else this.gameOver(Winner.computer);
        }, 2000);
    }

    private resultUpdate(result : Result) : void {
        switch (result) {
            case Result.win:
                this.message = "You win!";
                this.playerScore++;
                break;
            case Result.loose:
                this.message = "You loose!";
                this.computerScore++;
                break;
            case Result.tie:
                this.message = "It's a tie!";
        }
        if (this.gameMessage)
            this.gameMessage.textContent = this.message;
        if (this.score)
            this.score.textContent = `${this.playerScore} - ${this.computerScore}`;
    }

    private gameOver(winner : Winner) : void {
        this.selectWindow?.classList.add("hidden");
        this.scoreWindow?.classList.remove("hidden");
        if (this.gameMessage){
            this.gameMessage.textContent = `Game Over!
            ${winner} wins!`;
        }
        if (this.scoreFinal){
            this.scoreFinal.textContent = `${this.playerScore} - ${this.computerScore}`;
        }
    }

}

export default RockPaperScissors;