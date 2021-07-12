"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    constructor() {
        this.data = {};
        this.showTime = () => {
            return this.data.time.toLocaleString('de-DE', {
                hour12: false
            });
        };
        this.showOthers = () => {
            return `Course No: ${this.data.courseNumber}\n`
                + `Topic: ${this.data.topicName}\n`
                + `Teacher: ${this.data.teacherName}`;
        };
        this.show = () => {
            console.log("Teacher View:");
            console.log(this.showOthers());
            console.log(this.showTime());
        };
    }
    update(data) {
        this.data = data;
    }
}
exports.Teacher = Teacher;
