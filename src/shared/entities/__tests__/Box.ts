// jest preamble
/* tslint:disable object-literal-key-quotes trailing-comma */
beforeEach(() => { process.env.__JEST__ = true; });
afterEach(() => { delete (process.env.__JEST__); });
// end jest preamble

import { Box } from "../Box";
import { ResetEntityIds } from "../../Entity";

it("initializes a simple box", () => {
    const box = new Box("0", { x: 0, y: 0 });

    expect(box.watched()).toEqual({
        position: { x: 0, y: 0 },
        velocity: { x: 0, y: 0 },
    });
});

it("updates the position of a simple box", () => {

    const box = new Box("0", { x: 0, y: 0 });
    box.velocity = { x: 1, y: 1 };

    expect(box.watched()).toEqual({
        position: { x: 0, y: 0 },
        velocity: { x: 1, y: 1 },
    });

    box.update();

    expect(box.watched()).toEqual({
        position: { x: 1, y: 1 },
        velocity: { x: 1, y: 1 },
    });
});

it("assigns an id in jest test mode", () => {

    ResetEntityIds();

    const box1 = new Box("0");
    expect(box1.id).toBe("1");

    const box2 = new Box("0");
    expect(box2.id).toBe("2");
});
