import {Data} from "./data";
import {Observer} from "./observer";

export class Fetcher {
    data: Data;
    observers: Observer[];


    constructor(observers: Observer[], data: Data) {
        this.observers = observers;
        this.data = data;
    }

    fetch = () => {
        this.observers.forEach(observer => {
            observer.update(this.data);
        })
    }

}