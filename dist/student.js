"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor() {
        this.data = {};
        this.showTime = () => {
            return this.data.time.toLocaleString('en-us', { hour12: true });
        };
        this.showOthers = () => {
            return `Course No: ${this.data.courseNumber}\n`
                + `Topic: ${this.data.topicName}\n`
                + `Teacher: ${this.data.teacherName}`;
        };
        this.show = () => {
            console.log("Student View:");
            console.log(this.showOthers());
            console.log(this.showTime());
        };
    }
    update(data) {
        this.data = data;
    }
}
exports.Student = Student;
