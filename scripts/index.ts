import ClickingGame from './clicking-game.js';
// import GuessNumber from "./guess-number";
// import RockPaperScissors from "./rock-paper-scissors";

var clickingGameStart = document.getElementById("clicking-game-start");
var clickMe = document.getElementById("click-me");
var clickingGameStartMessage = document.getElementById("clicking-game-start-message");
var clickMeGrid = document.getElementById("click-me-grid");

if (clickingGameStart) {
    clickingGameStart.addEventListener("click", () => {
        if (clickingGameStart) {
            clickingGameStart.classList.add("hidden");
        }
        if(clickingGameStartMessage){
            clickingGameStartMessage.classList.add("hidden");
        }
        if(clickMe){
            clickMe.classList.remove("hidden");
        }
        if(clickMeGrid){ //need to move to Class
            clickMeGrid.style.gridRowStart = "1";
            clickMeGrid.style.gridColumnStart = "1";
        }
        new ClickingGame();
    });
}