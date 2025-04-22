import { GameDifficulty } from "./difficulty.js";

enum rockDifficulty {
    Easy = 3,
    Medium = 5,
    Hard = 10
}

class Difficulty {

    constructor() {
        
    }

    public rounds (difficulty : GameDifficulty) : number {
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