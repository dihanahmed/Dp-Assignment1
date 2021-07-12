"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetcher = void 0;
class Fetcher {
    constructor(observers, data) {
        this.fetch = () => {
            this.observers.forEach(observer => {
                observer.update(this.data);
            });
        };
        this.observers = observers;
        this.data = data;
    }
}
exports.Fetcher = Fetcher;
