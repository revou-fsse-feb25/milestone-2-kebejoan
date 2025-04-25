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
const winCondition : Choice[] = [Choice.scissors, Choice.rock, Choice.paper];

class RockPaperScissors {
    private playerScore : number;
    private computerScore : number;
    private playerChoice : Choice;
    private computerChoice : Choice;
    private randomIndex : number;
    private message : string;

    constructor(
        private rounds : number,
        private gameMessage : HTMLElement,
        private playerRock : HTMLElement,
        private playerPaper : HTMLElement,
        private playerScissors : HTMLElement,
        private selectWindow : HTMLElement,
        private scoreWindow : HTMLElement,
        private score : HTMLElement,
        private scoreFinal : HTMLElement
    ) {
        
        this.playerScore = 0;
        this.computerScore = 0;
        this.playerChoice = Choice.default;
        this.computerChoice = Choice.default;
        this.randomIndex = -1;
        this.message = "";
        this.rounds = rounds;

        this.gameMessage.textContent = "Choose Your Weapon";
        this.generateComputerChoice();
        this.checkChoices();
    }

    private generateComputerChoice() : void {
        this.randomIndex = Math.floor(Math.random() * 3);
        this.computerChoice = choices[this.randomIndex];
    }

    private checkChoices() : void {
        const choiceMap: [HTMLElement, Choice][] = [
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
        this.gameMessage.textContent = this.message;
        this.score.textContent = `${this.playerScore} - ${this.computerScore}`;
    }

    private gameOver(winner : Winner) : void {
        this.selectWindow.classList.add("hidden");
        this.scoreWindow.classList.remove("hidden");
        this.gameMessage.textContent = `Game Over! ${winner} wins!`;
        this.scoreFinal.textContent = `${this.playerScore} - ${this.computerScore}`;
    }

}

export default RockPaperScissors;