import {EventEmitter} from "events";

const emitter = new EventEmitter();

emitter.addListener("nama-event", (nama) => {
    console.info(`Event diterima dengan pesan: ${nama}`);
});

emitter.emit("nama-event", "Ihsan");