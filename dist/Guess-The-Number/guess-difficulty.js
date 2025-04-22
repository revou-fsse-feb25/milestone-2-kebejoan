import { GameDifficulty } from "../difficulty.js";
var GuessGameDifficulty;
(function (GuessGameDifficulty) {
    GuessGameDifficulty[GuessGameDifficulty["Easy"] = 20] = "Easy";
    GuessGameDifficulty[GuessGameDifficulty["Medium"] = 50] = "Medium";
    GuessGameDifficulty[GuessGameDifficulty["Hard"] = 999] = "Hard";
})(GuessGameDifficulty || (GuessGameDifficulty = {}));
class Difficulty {
    constructor() {
    }
    range(difficulty) {
        switch (difficulty) {
            case GameDifficulty.Easy:
                return GuessGameDifficulty.Easy;
            case GameDifficulty.Medium:
                return GuessGameDifficulty.Medium;
            case GameDifficulty.Hard:
                return GuessGameDifficulty.Hard;
        }
    }
}
export default Difficulty;
