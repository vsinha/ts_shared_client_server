import { Entity } from "../Entity";

export class GameLogic {
    public entities: { [id: string]: Entity };

    constructor() {
        this.entities = {};
    }

    public update() {
        Object.keys(this.entities).forEach(key => {
            const entity = this.entities[key];
            entity.update();
          });
    }

    public addEntity(e: Entity) {
        this.entities[e.id] = e;
    }
}
