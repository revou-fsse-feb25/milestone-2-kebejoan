import Update from './rock-update.js';
import getRandomNumber from '../utils.js';
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
    constructor(rounds, gameMessage, playerRock, playerPaper, playerScissors, selectWindow, scoreWindow, score, scoreFinal) {
        this.rounds = rounds;
        this.gameMessage = gameMessage;
        this.playerRock = playerRock;
        this.playerPaper = playerPaper;
        this.playerScissors = playerScissors;
        this.selectWindow = selectWindow;
        this.scoreWindow = scoreWindow;
        this.score = score;
        this.scoreFinal = scoreFinal;
        this.playerScore = 0;
        this.computerScore = 0;
        this.playerChoice = Choice.default;
        this.computerChoice = Choice.default;
        this.randomIndex = -1;
        this.message = "";
        this.rounds = rounds;
        this.gameMessage.textContent = "Choose Your Weapon";
        this.computerChoice = choices[getRandomNumber(3, 0)];
        this.checkChoices();
    }
    checkChoices() {
        const choiceMap = [
            [this.playerRock, Choice.rock],
            [this.playerPaper, Choice.paper],
            [this.playerScissors, Choice.scissors]
        ];
        choiceMap.forEach(([element, choice]) => {
            element.addEventListener("click", () => {
                this.playerChoice = choice;
                this.compareChoices(this.computerChoice, this.playerChoice);
                update.choice(this.computerChoice, this.playerChoice);
            });
        });
    }
    compareChoices(computer, player) {
        if (computer === player)
            this.resultUpdate(Result.tie);
        else
            winCondition[player] === computer ? this.resultUpdate(Result.win) : this.resultUpdate(Result.loose);
        setTimeout(() => {
            if (this.playerScore < this.rounds && this.computerScore < this.rounds) {
                this.computerChoice = choices[getRandomNumber(3, 0)];
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
        this.gameMessage.textContent = this.message;
        this.score.textContent = `${this.playerScore} - ${this.computerScore}`;
    }
    gameOver(winner) {
        this.selectWindow.classList.add("hidden");
        this.scoreWindow.classList.remove("hidden");
        this.gameMessage.textContent = `Game Over! ${winner} wins!`;
        this.scoreFinal.textContent = `${this.playerScore} - ${this.computerScore}`;
    }
}
export default RockPaperScissors;
