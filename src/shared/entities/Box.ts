import { Entity, IProps } from "../Entity";

export interface IVec2d {
    x: number;
    y: number;
}

export class Box extends Entity {
    public position: IVec2d;
    public velocity: IVec2d;

    constructor(owner: string, startingPos: IVec2d = {x: 0, y: 0}) {
        super(owner);
        this.position = startingPos;
        this.velocity = { x: 0, y: 0 };
    }

    public update() {
        this.updateMovement();
    }

    public watched(): IProps {
        return {
            position: this.position,
            velocity: this.velocity,
        };
    }

    private updateMovement() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
