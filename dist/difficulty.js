var GameDifficulty;
(function (GameDifficulty) {
    GameDifficulty[GameDifficulty["Easy"] = 0] = "Easy";
    GameDifficulty[GameDifficulty["Medium"] = 1] = "Medium";
    GameDifficulty[GameDifficulty["Hard"] = 2] = "Hard";
})(GameDifficulty || (GameDifficulty = {}));
export var gameDifficulty = GameDifficulty.Easy;
var clickDifficultyEasy = document.getElementById("difficulty-easy");
var clickDifficultyMedium = document.getElementById("difficulty-medium");
var clickDifficultyHard = document.getElementById("difficulty-hard");
clickDifficultyEasy === null || clickDifficultyEasy === void 0 ? void 0 : clickDifficultyEasy.addEventListener("click", () => {
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
clickDifficultyMedium === null || clickDifficultyMedium === void 0 ? void 0 : clickDifficultyMedium.addEventListener("click", () => {
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
clickDifficultyHard === null || clickDifficultyHard === void 0 ? void 0 : clickDifficultyHard.addEventListener("click", () => {
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
