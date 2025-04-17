import ClickingGame from './clicking-game.js';
// import GuessNumber from "./guess-number";
// import RockPaperScissors from "./rock-paper-scissors";
var GameDifficulty;
(function (GameDifficulty) {
    GameDifficulty[GameDifficulty["Easy"] = 0] = "Easy";
    GameDifficulty[GameDifficulty["Medium"] = 1] = "Medium";
    GameDifficulty[GameDifficulty["Hard"] = 2] = "Hard";
})(GameDifficulty || (GameDifficulty = {}));
var gameDifficulty = GameDifficulty.Easy;
var clickingGameStart = document.getElementById("clicking-game-start");
var clickMe = document.getElementById("click-me");
var clickingGameStartMessage = document.getElementById("clicking-game-message");
var clickMeGrid = document.getElementById("click-me-grid");
var clickDifficultyEasy = document.getElementById("click-difficulty-easy");
var clickDifficultyMedium = document.getElementById("click-difficulty-medium");
var clickDifficultyHard = document.getElementById("click-difficulty-hard");
if (clickDifficultyEasy) {
    clickDifficultyEasy.addEventListener("click", () => {
        gameDifficulty = GameDifficulty.Easy;
        if (clickDifficultyEasy) {
            clickDifficultyEasy.style.color = "red";
        }
        if (clickDifficultyMedium) {
            clickDifficultyMedium.style.color = "white";
        }
        if (clickDifficultyHard) {
            clickDifficultyHard.style.color = "white";
        }
    });
}
if (clickDifficultyMedium) {
    clickDifficultyMedium.addEventListener("click", () => {
        gameDifficulty = GameDifficulty.Medium;
        if (clickDifficultyEasy) {
            clickDifficultyEasy.style.color = "white";
        }
        if (clickDifficultyMedium) {
            clickDifficultyMedium.style.color = "red";
        }
        if (clickDifficultyHard) {
            clickDifficultyHard.style.color = "white";
        }
    });
}
if (clickDifficultyHard) {
    clickDifficultyHard.addEventListener("click", () => {
        gameDifficulty = GameDifficulty.Hard;
        if (clickDifficultyEasy) {
            clickDifficultyEasy.style.color = "white";
        }
        if (clickDifficultyMedium) {
            clickDifficultyMedium.style.color = "white";
        }
        if (clickDifficultyHard) {
            clickDifficultyHard.style.color = "red";
        }
    });
}
if (clickingGameStart) {
    clickingGameStart.addEventListener("click", () => {
        if (clickingGameStart) {
            clickingGameStart.classList.add("hidden");
        }
        if (clickingGameStartMessage) {
            clickingGameStartMessage.classList.add("hidden");
        }
        if (clickMe) {
            clickMe.classList.remove("hidden");
        }
        if (clickMeGrid) {
            const rowValue = Math.floor(Math.random() * 7) + 1;
            const columnValue = Math.floor(Math.random() * 5) + 1;
            clickMeGrid.style.gridRowStart = rowValue.toString();
            clickMeGrid.style.gridColumnStart = columnValue.toString();
        }
        new ClickingGame();
    });
}
