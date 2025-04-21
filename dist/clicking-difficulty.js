import { GameDifficulty } from "./difficulty.js";
var ClickingGameDifficulty;
(function (ClickingGameDifficulty) {
    ClickingGameDifficulty[ClickingGameDifficulty["EasyRow"] = 6] = "EasyRow";
    ClickingGameDifficulty[ClickingGameDifficulty["EasyCol"] = 3] = "EasyCol";
    ClickingGameDifficulty[ClickingGameDifficulty["EasyOffsetRow"] = 5] = "EasyOffsetRow";
    ClickingGameDifficulty[ClickingGameDifficulty["EasyOffsetCol"] = 4] = "EasyOffsetCol";
    ClickingGameDifficulty[ClickingGameDifficulty["MediumRow"] = 9] = "MediumRow";
    ClickingGameDifficulty[ClickingGameDifficulty["MediumCol"] = 6] = "MediumCol";
    ClickingGameDifficulty[ClickingGameDifficulty["MediumOffsetRow"] = 3] = "MediumOffsetRow";
    ClickingGameDifficulty[ClickingGameDifficulty["MediumOffsetCol"] = 2] = "MediumOffsetCol";
    ClickingGameDifficulty[ClickingGameDifficulty["HardRow"] = 15] = "HardRow";
    ClickingGameDifficulty[ClickingGameDifficulty["HardCol"] = 9] = "HardCol";
    ClickingGameDifficulty[ClickingGameDifficulty["HardOffsetRow"] = 1] = "HardOffsetRow";
    ClickingGameDifficulty[ClickingGameDifficulty["HardOffsetCol"] = 1] = "HardOffsetCol";
})(ClickingGameDifficulty || (ClickingGameDifficulty = {}));
class Difficulty {
    constructor() {
    }
    row(difficulty) {
        switch (difficulty) {
            case GameDifficulty.Easy:
                return ClickingGameDifficulty.EasyRow;
            case GameDifficulty.Medium:
                return ClickingGameDifficulty.MediumRow;
            case GameDifficulty.Hard:
                return ClickingGameDifficulty.HardRow;
        }
    }
    col(difficulty) {
        switch (difficulty) {
            case GameDifficulty.Easy:
                return ClickingGameDifficulty.EasyCol;
            case GameDifficulty.Medium:
                return ClickingGameDifficulty.MediumCol;
            case GameDifficulty.Hard:
                return ClickingGameDifficulty.HardCol;
        }
    }
    offsetRow(difficulty) {
        switch (difficulty) {
            case GameDifficulty.Easy:
                return ClickingGameDifficulty.EasyOffsetRow;
            case GameDifficulty.Medium:
                return ClickingGameDifficulty.MediumOffsetRow;
            case GameDifficulty.Hard:
                return ClickingGameDifficulty.HardOffsetRow;
        }
    }
    offsetCol(difficulty) {
        switch (difficulty) {
            case GameDifficulty.Easy:
                return ClickingGameDifficulty.EasyOffsetCol;
            case GameDifficulty.Medium:
                return ClickingGameDifficulty.MediumOffsetCol;
            case GameDifficulty.Hard:
                return ClickingGameDifficulty.HardOffsetCol;
        }
    }
}
export default Difficulty;
