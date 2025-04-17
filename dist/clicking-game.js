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
            if (this.timer === 5) {
                this.timeHTML.classList.add("text-red-700");
            }
            if (this.timer < 4 && this.timer > 0)
                this.timeHTML.classList.add("animate-ping");
            else
                this.timeHTML.classList.remove("animate-ping");
        }
    }
    updateScore() {
        this.score++;
        if (this.scoreHTML) {
            this.scoreHTML.textContent = "SCORE: " + this.score.toString();
        }
    }
    checkClick() {
        var _a;
        (_a = this.clickMe) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            this.updateScore();
            if (this.clickMeGrid) {
                this.clickMeGrid.style.gridRowStart = (Math.floor(Math.random() * 15) + 1).toString();
                this.clickMeGrid.style.gridColumnStart = (Math.floor(Math.random() * 9) + 1).toString();
            }
        });
    }
    gameOver() {
        var _a;
        (_a = this.clickMe) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
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
