import { v4 as uuid } from 'uuid';

let i = 0;
function newEntityId(): string {
    if (process.env.__JEST__) {
        i += 1;
        return String(i);
    } else {
        return uuid();
    }
}
export function ResetEntityIds() {
    i = 0;
}

export interface IProps {
    [name: string]: any;
}

export interface IEntityState {
    id: string;
    owner: string;
    props: IProps;
}

export abstract class Entity {
    public owner: string;
    public id: string;

    constructor(owner: string) {
        this.owner = owner;
        this.id = newEntityId();
    }

    public getState(): IEntityState {
        return {
            owner: this.owner,
            id: this.id,
            props: this.watched,
        };
    }

    public abstract update();
    public abstract watched(): IProps;
}
