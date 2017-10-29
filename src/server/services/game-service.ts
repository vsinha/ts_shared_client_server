import { GameLogic } from "../../shared/Game";

export class GameInstanceService {
    public game: GameLogic;

    constructor() {
        this.game = new GameLogic();
    }
}
