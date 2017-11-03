import { GameLogic } from "./logic";
import { GameLoop } from "./loop";

export class GameRoom {
    public game: GameLogic;
    public loop: GameLoop;

    constructor() {
        this.game = new GameLogic();
        this.loop = new GameLoop();

        this.loop.on("update", () => {
            this.game.update();
        });
    }

    public start() {
        this.loop.start();
    }

    public stop() {
        this.loop.stop();
    }
}
