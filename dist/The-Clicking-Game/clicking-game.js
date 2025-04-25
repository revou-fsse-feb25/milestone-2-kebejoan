class ClickingGame {
    constructor(row, col, offsetRow, offsetCol, clickMe, clickMeGrid, clickingGameMessage, scoreHTML, timeHTML) {
        this.clickMe = clickMe;
        this.clickMeGrid = clickMeGrid;
        this.clickingGameMessage = clickingGameMessage;
        this.scoreHTML = scoreHTML;
        this.timeHTML = timeHTML;
        this.timer = 10;
        this.score = 0;
        this.row = row;
        this.col = col;
        this.offsetRow = offsetRow;
        this.offsetCol = offsetCol;
        this.initTimer();
        this.updateTime();
        this.updateScore();
        this.checkClick();
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
    updateTime() {
        this.timeHTML.textContent = "TIME: " + this.timer.toString();
        if (this.timer === 5) {
            this.timeHTML.classList.add("text-red-700");
        }
        if (this.timer < 4 && this.timer > 0)
            this.timeHTML.classList.add("animate-ping");
        else
            this.timeHTML.classList.remove("animate-ping");
    }
    updateScore() {
        this.score++;
        this.scoreHTML.textContent = "SCORE: " + this.score.toString();
    }
    checkClick() {
        this.clickMe.addEventListener("click", () => {
            this.updateScore();
            this.clickMeGrid.style.gridRowStart = (Math.floor(Math.random() * this.row) + this.offsetRow).toString();
            this.clickMeGrid.style.gridColumnStart = (Math.floor(Math.random() * this.col) + this.offsetCol).toString();
        });
    }
    gameOver() {
        this.clickMe.classList.add("hidden");
        this.clickMeGrid.style.gridRowStart = "7";
        this.clickMeGrid.style.gridColumnStart = "5";
        this.clickingGameMessage.classList.remove("hidden");
        this.clickingGameMessage.textContent = `Game Over! Score: ${this.score.toString()}`;
    }
}
export default ClickingGame;
