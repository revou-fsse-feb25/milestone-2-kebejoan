enum Choice {
    rock, //0
    paper, //1
    scissors, //2
    default
}

class Update {
    private gameMessage : HTMLElement | null;
    private playerRock : HTMLElement | null;
    private playerPaper : HTMLElement | null;
    private playerScissors : HTMLElement | null;
    private computerRock : HTMLElement | null;
    private computerPaper : HTMLElement | null;
    private computerScissors : HTMLElement | null;

    constructor() {
        this.gameMessage = document.getElementById("game-message");
        this.playerRock = document.getElementById("p-rock");
        this.playerPaper = document.getElementById("p-paper");
        this.playerScissors = document.getElementById("p-scissors");
        this.computerRock = document.getElementById("c-rock");
        this.computerPaper = document.getElementById("c-paper");
        this.computerScissors = document.getElementById("c-scissors");
    }

    public choice(computer : Choice, player : Choice) : void {
        this.playerRock?.classList.remove("animate-pulse");
        this.playerPaper?.classList.remove("animate-pulse");
        this.playerScissors?.classList.remove("animate-pulse");
        this.playerRock?.classList.add("pointer-events-none");
        this.playerPaper?.classList.add("pointer-events-none");
        this.playerScissors?.classList.add("pointer-events-none");
        switch (computer) {
            case Choice.rock:
                this.computerRock?.classList.remove("grayscale-100");
                this.computerRock?.classList.remove("opacity-60");
                break;
            case Choice.paper:
                this.computerPaper?.classList.remove("grayscale-100");
                this.computerPaper?.classList.remove("opacity-60");
                break;
            case Choice.scissors:
                this.computerScissors?.classList.remove("grayscale-100");
                this.computerScissors?.classList.remove("opacity-60");
                break;
        }
        switch (player) {
            case Choice.rock:
                this.playerRock?.classList.remove("grayscale-100");
                this.playerPaper?.classList.add("opacity-60");
                this.playerScissors?.classList.add("opacity-60");
                break;
            case Choice.paper:
                this.playerPaper?.classList.remove("grayscale-100");
                this.playerScissors?.classList.add("opacity-60");
                this.playerRock?.classList.add("opacity-60");
                break;
            case Choice.scissors:
                this.playerScissors?.classList.remove("grayscale-100");
                this.playerRock?.classList.add("opacity-60");
                this.playerPaper?.classList.add("opacity-60");
                break;
        }
    } 

    public newRound() : void {
        this.playerRock?.classList.add("animate-pulse");
        this.playerRock?.classList.add("grayscale-100");
        this.playerRock?.classList.remove("pointer-events-none");
        this.playerRock?.classList.remove("opacity-60");
        this.playerPaper?.classList.add("animate-pulse");
        this.playerPaper?.classList.add("grayscale-100");
        this.playerPaper?.classList.remove("pointer-events-none");
        this.playerPaper?.classList.remove("opacity-60");
        this.playerScissors?.classList.remove("pointer-events-none");
        this.playerScissors?.classList.remove("opacity-60");
        this.playerScissors?.classList.add("animate-pulse");
        this.playerScissors?.classList.add("grayscale-100");
        this.computerRock?.classList.add("grayscale-100");
        this.computerRock?.classList.add("opacity-60");
        this.computerPaper?.classList.add("grayscale-100");
        this.computerPaper?.classList.add("opacity-60");
        this.computerScissors?.classList.add("grayscale-100");
        this.computerScissors?.classList.add("opacity-60");
        if (this.gameMessage){
            this.gameMessage.textContent = "Choose Your Weapon";
        }
    }
}

export default Update;