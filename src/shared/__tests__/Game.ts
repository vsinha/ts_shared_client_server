// jest preamble
/* tslint:disable object-literal-key-quotes trailing-comma */
beforeEach(() => { process.env.__JEST__ = true; });
afterEach(() => { delete (process.env.__JEST__); });
// end jest preamble

import { GameLogic } from "../Game";
import { Box } from "../entities/Box";

it("Updates the position of its entites", () => {
    const game = new GameLogic();
    const box1 = new Box("0");
    box1.velocity = {x: 1, y: 0};

    game.addEntity(box1);
    expect(game.entities).toEqual({
        "1": {
            "id": "1",
            "owner": "0",
            "position": { "x": 0, "y": 0 },
            "velocity": { "x": 1, "y": 0 }
        }
    });

    game.update();
    game.update();
    expect(game.entities).toEqual({
        "1": {
            "id": "1",
            "owner": "0",
            "position": { "x": 2, "y": 0 },
            "velocity": { "x": 1, "y": 0 }
        }
    });
});
