import { GameDifficulty } from './difficulty.js';

class ClickingGame {
    private clickMe : HTMLElement | null;
    private clickMeGrid : HTMLElement | null;
    private clickingGameMessage : HTMLElement | null;
    private scoreHTML : HTMLElement | null;
    private timeHTML : HTMLElement | null;
    private timer : number;
    private score : number;
    private row : number;
    private col : number;
    private offsetRow : number;
    private offsetCol : number;

    constructor(row : number, col : number, offsetRow : number, offsetCol : number) {
        this.clickMe = document.getElementById("click-me");
        this.clickMeGrid = document.getElementById("click-me-grid");
        this.clickingGameMessage = document.getElementById("clicking-game-message");
        this.scoreHTML = document.getElementById("score");
        this.timeHTML = document.getElementById("time");
        this.timer = 10;
        this.score = 1;
        this.row = row;
        this.col = col;
        this.offsetRow = offsetRow;
        this.offsetCol = offsetCol;

        this.initTimer();
        this.initClickingGame();
    }

    private initTimer() : void{
        if (this.timer > 0){
            setTimeout(() => {
                this.timer--;
                this.updateTime();
                this.initTimer();
            }, 1000);
        }
        else this.gameOver();
    }

    private initClickingGame() : void{
        this.score = 1;
        this.updateScore();
        this.updateTime();
        this.checkClick();
    }

    private updateTime() : void{
        if (this.timeHTML){
            this.timeHTML.textContent = "TIME: " + this.timer.toString();
            if (this.timer === 5){
                this.timeHTML.classList.add("text-red-700");
            }
            if (this.timer < 4 && this.timer > 0)
                this.timeHTML.classList.add("animate-ping");
            else this.timeHTML.classList.remove("animate-ping");
        }
    }

    private updateScore() : void{
        this.score++;
        if (this.scoreHTML){
            this.scoreHTML.textContent = "SCORE: " + this.score.toString();
        }
    }

    private checkClick() : void{
        this.clickMe?.addEventListener("click", () => {
            this.updateScore();
            if (this.clickMeGrid){
                this.clickMeGrid.style.gridRowStart = (Math.floor(Math.random() * this.row) + this.offsetRow).toString();
                this.clickMeGrid.style.gridColumnStart = (Math.floor(Math.random() * this.col) + this.offsetCol).toString();
            }
        });
    }

    private gameOver() : void{
        this.clickMe?.classList.add("hidden");
        if (this.clickMeGrid){
            this.clickMeGrid.style.gridRowStart = "7";
            this.clickMeGrid.style.gridColumnStart = "5";
        }
        if (this.clickingGameMessage){
            this.clickingGameMessage.classList.remove("hidden");
            this.clickingGameMessage.textContent = `Game Over!
            Score: ${this.score.toString()}`;
        }
    }

    private gameRestart() : void{
        // temporary using refresh page method XD
    }
}

export default ClickingGame;