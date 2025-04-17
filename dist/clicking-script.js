import ClickingGame from './clicking-game.js';
var clickingGameStart = document.getElementById("clicking-game-start");
var clickMe = document.getElementById("click-me");
var clickingGameStartMessage = document.getElementById("clicking-game-message");
var clickMeGrid = document.getElementById("click-me-grid");
clickingGameStart === null || clickingGameStart === void 0 ? void 0 : clickingGameStart.addEventListener("click", () => {
    clickingGameStart === null || clickingGameStart === void 0 ? void 0 : clickingGameStart.classList.add("hidden");
    clickingGameStartMessage === null || clickingGameStartMessage === void 0 ? void 0 : clickingGameStartMessage.classList.add("hidden");
    clickMe === null || clickMe === void 0 ? void 0 : clickMe.classList.remove("hidden");
    if (clickMeGrid) {
        const rowValue = Math.floor(Math.random() * 7) + 1;
        const columnValue = Math.floor(Math.random() * 5) + 1;
        clickMeGrid.style.gridRowStart = rowValue.toString();
        clickMeGrid.style.gridColumnStart = columnValue.toString();
    }
    new ClickingGame();
});
