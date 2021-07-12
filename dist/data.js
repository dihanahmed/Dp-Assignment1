"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor() {
        this._courseNumber = "";
        this._topicName = "";
        this._teacherName = "";
        this._time = new Date();
    }
    setData(courseNumber, topicName, teacherName) {
        this._courseNumber = courseNumber;
        this._topicName = topicName;
        this._teacherName = teacherName;
    }
    get courseNumber() {
        return this._courseNumber;
    }
    get topicName() {
        return this._topicName;
    }
    get teacherName() {
        return this._teacherName;
    }
    get time() {
        return this._time;
    }
}
exports.Data = Data;
