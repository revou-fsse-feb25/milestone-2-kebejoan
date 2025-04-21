import { GameDifficulty } from "./difficulty.js"

enum ClickingGameDifficulty {
    EasyRow = 6,
    EasyCol = 3,
    EasyOffsetRow = 5,
    EasyOffsetCol = 4,
    MediumRow = 9,
    MediumCol = 6,
    MediumOffsetRow = 3,
    MediumOffsetCol = 2,
    HardRow = 15,
    HardCol = 9,
    HardOffsetRow = 1,
    HardOffsetCol = 1
}

class Difficulty{

    constructor(){
    }

    public row(difficulty : GameDifficulty) : number{
        switch (difficulty) {
            case GameDifficulty.Easy:
                return ClickingGameDifficulty.EasyRow;
            case GameDifficulty.Medium:
                return ClickingGameDifficulty.MediumRow;
            case GameDifficulty.Hard:
                return ClickingGameDifficulty.HardRow;
        }
    }

    public col(difficulty : GameDifficulty) : number{
        switch (difficulty) {
            case GameDifficulty.Easy:
                return ClickingGameDifficulty.EasyCol;
            case GameDifficulty.Medium:
                return ClickingGameDifficulty.MediumCol;
            case GameDifficulty.Hard:
                return ClickingGameDifficulty.HardCol;
        }
    }

    public offsetRow(difficulty : GameDifficulty) : number{
        switch (difficulty) {
            case GameDifficulty.Easy:
                return ClickingGameDifficulty.EasyOffsetRow;
            case GameDifficulty.Medium:
                return ClickingGameDifficulty.MediumOffsetRow;
            case GameDifficulty.Hard:
                return ClickingGameDifficulty.HardOffsetRow;
        }
    }

    public offsetCol(difficulty : GameDifficulty) : number{
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