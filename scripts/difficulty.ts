export enum GameDifficulty {
    Easy,
    Medium,
    Hard
}

export var gameDifficulty: GameDifficulty = GameDifficulty.Easy;
var difficultyEasy = document.getElementById("difficulty-easy");
var difficultyMedium = document.getElementById("difficulty-medium");
var difficultyHard = document.getElementById("difficulty-hard");

difficultyEasy?.addEventListener("click", () => {
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
    

difficultyMedium?.addEventListener("click", () => {
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

difficultyHard?.addEventListener("click", () => {
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