enum GameDifficulty {
    Easy,
    Medium,
    Hard
}

export var gameDifficulty: GameDifficulty = GameDifficulty.Easy;
var clickDifficultyEasy = document.getElementById("difficulty-easy");
var clickDifficultyMedium = document.getElementById("difficulty-medium");
var clickDifficultyHard = document.getElementById("difficulty-hard");

clickDifficultyEasy?.addEventListener("click", () => {
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
    

clickDifficultyMedium?.addEventListener("click", () => {
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

clickDifficultyHard?.addEventListener("click", () => {
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