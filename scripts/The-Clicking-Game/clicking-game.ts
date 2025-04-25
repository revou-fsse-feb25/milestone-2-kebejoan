class ClickingGame {
    private timer : number;
    private score : number;
    private row : number;
    private col : number;
    private offsetRow : number;
    private offsetCol : number;

    constructor(
        row : number, 
        col : number, 
        offsetRow : number, 
        offsetCol : number,
        private clickMe : HTMLElement,
        private clickMeGrid : HTMLElement,
        private clickingGameMessage : HTMLElement,
        private scoreHTML : HTMLElement,
        private timeHTML : HTMLElement,
    ) {
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

    private initTimer() : void{
        if (this.timer > 0){
            setTimeout(() => { // --> may memory leak. Try set Interval and clear Interval
                this.timer--;
                this.updateTime();
                this.initTimer();
            }, 1000);
        }
        else this.gameOver();
    }

    private updateTime() : void{
        this.timeHTML.textContent = "TIME: " + this.timer.toString();
        if (this.timer === 5){
            this.timeHTML.classList.add("text-red-700");
        }
        if (this.timer < 4 && this.timer > 0)
            this.timeHTML.classList.add("animate-ping");
        else this.timeHTML.classList.remove("animate-ping");
    }

    private updateScore() : void{
        this.score++;
        this.scoreHTML.textContent = "SCORE: " + this.score.toString();
    }

    private checkClick() : void{
        this.clickMe.addEventListener("click", () => {
            this.updateScore();
            this.clickMeGrid.style.gridRowStart = (Math.floor(Math.random() * this.row) + this.offsetRow).toString();
            this.clickMeGrid.style.gridColumnStart = (Math.floor(Math.random() * this.col) + this.offsetCol).toString();
        });
    }

    private gameOver() : void{
        this.clickMe.classList.add("hidden");
        this.clickMeGrid.style.gridRowStart = "7";
        this.clickMeGrid.style.gridColumnStart = "5";
        this.clickingGameMessage.classList.remove("hidden");
        this.clickingGameMessage.textContent = `Game Over! Score: ${this.score.toString()}`;
    }
}

export default ClickingGame;