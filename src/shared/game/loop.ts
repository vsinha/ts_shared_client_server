import { EventEmitter } from 'events';

const desiredFramerate = 20;
const tickLengthMs = 1000 / desiredFramerate;

export class GameLoop extends EventEmitter {

    private previousTick: number = Date.now();
    private actualTicks: number = 0;

    private running: boolean = false;

    constructor() {
        super();
    }

    public start() {
        this.emit("start");
        this.running = true;
        this.run();
    }

    public stop() {
        this.running = false;
        this.emit('stop');
    }

    private run() {
        const now = Date.now();
        this.actualTicks += 1;
        if (this.previousTick + tickLengthMs <= now) {
            const delta = (now - this.previousTick) / 1000;
            this.previousTick = now;

            this.emit('update');

            console.log('delta', delta, '(target: ' + tickLengthMs + ' ms)',
                'node ticks', this.actualTicks);

            this.actualTicks = 0;
        }

        const elapsed = Date.now() - this.previousTick;

        if (this.running) {
            return setTimeout(() => {
                this.run();
            }, elapsed);
        }
    }

    private aVerySlowFunction(milliseconds) {
        // waste time
        const start = Date.now();
        while (Date.now() < start + milliseconds) { /* do nothing */ }
    }
}
