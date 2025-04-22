import { GameDifficulty } from "./difficulty.js";
var rockDifficulty;
(function (rockDifficulty) {
    rockDifficulty[rockDifficulty["Easy"] = 3] = "Easy";
    rockDifficulty[rockDifficulty["Medium"] = 5] = "Medium";
    rockDifficulty[rockDifficulty["Hard"] = 10] = "Hard";
})(rockDifficulty || (rockDifficulty = {}));
class Difficulty {
    constructor() {
    }
    rounds(difficulty) {
        switch (difficulty) {
            case GameDifficulty.Easy:
                return rockDifficulty.Easy;
            case GameDifficulty.Medium:
                return rockDifficulty.Medium;
            case GameDifficulty.Hard:
                return rockDifficulty.Hard;
        }
    }
}
export default Difficulty;
