export var GameDifficulty;
(function (GameDifficulty) {
    GameDifficulty[GameDifficulty["Easy"] = 0] = "Easy";
    GameDifficulty[GameDifficulty["Medium"] = 1] = "Medium";
    GameDifficulty[GameDifficulty["Hard"] = 2] = "Hard";
})(GameDifficulty || (GameDifficulty = {}));
export var gameDifficulty = GameDifficulty.Easy;
var difficultyEasy = document.getElementById("difficulty-easy");
var difficultyMedium = document.getElementById("difficulty-medium");
var difficultyHard = document.getElementById("difficulty-hard");
difficultyEasy === null || difficultyEasy === void 0 ? void 0 : difficultyEasy.addEventListener("click", () => {
    gameDifficulty = GameDifficulty.Easy;
    if (difficultyEasy) {
        difficultyEasy.style.color = "red";
    }
    if (difficultyMedium) {
        difficultyMedium.style.color = "white";
    }
    if (difficultyHard) {
        difficultyHard.style.color = "white";
    }
});
difficultyMedium === null || difficultyMedium === void 0 ? void 0 : difficultyMedium.addEventListener("click", () => {
    gameDifficulty = GameDifficulty.Medium;
    if (difficultyEasy) {
        difficultyEasy.style.color = "white";
    }
    if (difficultyMedium) {
        difficultyMedium.style.color = "red";
    }
    if (difficultyHard) {
        difficultyHard.style.color = "white";
    }
});
difficultyHard === null || difficultyHard === void 0 ? void 0 : difficultyHard.addEventListener("click", () => {
    gameDifficulty = GameDifficulty.Hard;
    if (difficultyEasy) {
        difficultyEasy.style.color = "white";
    }
    if (difficultyMedium) {
        difficultyMedium.style.color = "white";
    }
    if (difficultyHard) {
        difficultyHard.style.color = "red";
    }
});
