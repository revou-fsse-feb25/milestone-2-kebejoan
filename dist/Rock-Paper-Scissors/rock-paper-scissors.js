import Update from './rock-update.js';
var Choice;
(function (Choice) {
    Choice[Choice["rock"] = 0] = "rock";
    Choice[Choice["paper"] = 1] = "paper";
    Choice[Choice["scissors"] = 2] = "scissors";
    Choice[Choice["default"] = 3] = "default";
})(Choice || (Choice = {}));
var Result;
(function (Result) {
    Result[Result["win"] = 0] = "win";
    Result[Result["loose"] = 1] = "loose";
    Result[Result["tie"] = 2] = "tie";
})(Result || (Result = {}));
var Winner;
(function (Winner) {
    Winner["player"] = "Player";
    Winner["computer"] = "Computer";
})(Winner || (Winner = {}));
const update = new Update();
const choices = [Choice.rock, Choice.paper, Choice.scissors];
const winCondition = [Choice.scissors, Choice.rock, Choice.paper];
class RockPaperScissors {
    constructor(rounds) {
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
    generateComputerChoice() {
        this.randomIndex = Math.floor(Math.random() * 3);
        this.computerChoice = choices[this.randomIndex];
    }
    checkChoices() {
        var _a, _b, _c;
        (_a = this.playerRock) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            this.playerChoice = Choice.rock;
            this.compareChoices(this.computerChoice, this.playerChoice);
            update.choice(this.computerChoice, this.playerChoice);
        });
        (_b = this.playerPaper) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            this.playerChoice = Choice.paper;
            this.compareChoices(this.computerChoice, this.playerChoice);
            update.choice(this.computerChoice, this.playerChoice);
        });
        (_c = this.playerScissors) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            this.playerChoice = Choice.scissors;
            this.compareChoices(this.computerChoice, this.playerChoice);
            update.choice(this.computerChoice, this.playerChoice);
        });
    }
    compareChoices(computer, player) {
        if (computer === player)
            this.resultUpdate(Result.tie);
        else
            winCondition[player] === computer ? this.resultUpdate(Result.win) : this.resultUpdate(Result.loose);
        setTimeout(() => {
            if (this.playerScore < this.rounds && this.computerScore < this.rounds) {
                this.generateComputerChoice();
                update.newRound();
            }
            else if (this.playerScore === this.rounds)
                this.gameOver(Winner.player);
            else
                this.gameOver(Winner.computer);
        }, 2000);
    }
    resultUpdate(result) {
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
    gameOver(winner) {
        var _a, _b;
        (_a = this.selectWindow) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        (_b = this.scoreWindow) === null || _b === void 0 ? void 0 : _b.classList.remove("hidden");
        if (this.gameMessage) {
            this.gameMessage.textContent = `Game Over!
            ${winner} wins!`;
        }
        if (this.scoreFinal) {
            this.scoreFinal.textContent = `${this.playerScore} - ${this.computerScore}`;
        }
    }
}
export default RockPaperScissors;
