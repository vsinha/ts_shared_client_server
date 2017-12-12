import { Entity } from "../Entity";

export abstract interface IInputEvent {
    sender: string; // id of the event sender
    entity: string;
    event: string;
}

export class GameLogic {
    public entities: { [id: string]: Entity };
    public inputEventQueue: IInputEvent[];

    constructor() {
        this.entities = {};
        this.inputEventQueue = [];
    }

    public handleInputEvent(event: IInputEvent) {
        this.inputEventQueue.push(event);
    }

    public update() {
        // detect collisions
        this.detectCollisions();

        // handle inputs (from n clients)
        this.processInputEvents();

        // update entities
        this.updateEntities();
    }

    public addEntity(e: Entity) {
        this.entities[e.id] = e;
    }

    private detectCollisions() {
        // foo
    }


    private processInputEvents() {
        this.inputEventQueue.forEach(event => {
            // check ownership
            if (!this.owns(event.sender, event.entity)) {
                return;
            }

        });
    }

    private owns(sender: string, entity: string) {
        return this.entities[entity].owner === sender;
    }

    private updateEntities() {
        Object.keys(this.entities).forEach(key => {
            const entity = this.entities[key];
            entity.update();
        });
    }
}
