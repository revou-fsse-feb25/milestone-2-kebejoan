var minimumResolutionMessage = `Minimum Resolution to play this game is 1920x1080! 
Adjust with ctrl+wheel if needed`;
const isClickedString = "it's clicked";
// var clickMe = document.getElementById("click-me");
// var restartButton = document.getElementById("restart");
// var score = document.getElementById("score");
// var time = document.getElementById("time");
// var scoreValue : number = 0;
class ClickingGame {
    constructor() {
        this.clickMe = document.getElementById("click-me");
        this.clickMeGrid = document.getElementById("click-me-grid");
        this.clickingGameMessage = document.getElementById("clicking-game-message");
        this.scoreHTML = document.getElementById("score");
        this.timeHTML = document.getElementById("time");
        this.timer = 10;
        this.score = 1;
        this.initTimer();
        this.initClickingGame();
    }
    initTimer() {
        if (this.timer > 0) {
            setTimeout(() => {
                this.timer--;
                this.updateTime();
                this.initTimer();
            }, 1000);
        }
        else
            this.gameOver();
    }
    initClickingGame() {
        this.score = 1;
        this.updateScore();
        this.updateTime();
        this.checkClick();
    }
    updateTime() {
        if (this.timeHTML) {
            this.timeHTML.textContent = "TIME: " + this.timer.toString();
        }
    }
    updateScore() {
        this.score++;
        if (this.scoreHTML) {
            this.scoreHTML.textContent = "SCORE: " + this.score.toString();
        }
    }
    checkClick() {
        if (this.clickMe) {
            this.clickMe.addEventListener("click", () => {
                this.updateScore();
                if (this.clickMeGrid) {
                    this.clickMeGrid.style.gridRowStart = (Math.floor(Math.random() * 15) + 1).toString();
                    this.clickMeGrid.style.gridColumnStart = (Math.floor(Math.random() * 9) + 1).toString();
                }
            });
        }
    }
    gameOver() {
        if (this.clickMe) {
            this.clickMe.classList.add("hidden");
        }
        if (this.clickMeGrid) {
            this.clickMeGrid.style.gridRowStart = "7";
            this.clickMeGrid.style.gridColumnStart = "5";
        }
        if (this.clickingGameMessage) {
            this.clickingGameMessage.classList.remove("hidden");
            this.clickingGameMessage.textContent = `Game Over!
            Score: ${this.score.toString()}`;
        }
    }
    gameRestart() {
        // temporary using refresh page method XD
    }
}
export default ClickingGame;
// function updateScoree() : void{
//     scoreValue++;
//     if (score){
//         score.textContent = "SCORE: " + scoreValue.toString();
//     } 
// }
// function resetScore() : void{
//     scoreValue = 0;
//     if (score){
//         score.textContent = "SCORE: 0";
//     }
// }
// if (clickMe){
//     clickMe.addEventListener("click", () => {
//         updateScoree();
//     });
// }
// if (restartButton){
//     restartButton.addEventListener("click", () => {
//         resetScore();
//     });
// }
