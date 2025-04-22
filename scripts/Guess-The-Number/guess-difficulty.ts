import { GameDifficulty } from "../difficulty.js";

enum GuessGameDifficulty {
    Easy = 20,
    Medium = 50,
    Hard = 999
}

class Difficulty {

    constructor() {
        
    }

    public range (difficulty : GameDifficulty) : number {
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