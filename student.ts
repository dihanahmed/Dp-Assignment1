import {Observer} from "./observer";
import {Data} from "./data";

export class Student implements Observer {
    data ={} as Data;

    private showTime = (): string => {
        return this.data.time.toLocaleString('en-us',{hour12:true});
    }

    private showOthers = (): string => {
        return `Course No: ${this.data.courseNumber}\n`
            + `Topic: ${this.data.topicName}\n`
            + `Teacher: ${this.data.teacherName}`
    }

    update(data: Data) {
        this.data = data;
    }

    show = (): void => {
        console.log("Student View:");
        console.log(this.showOthers());
        console.log(this.showTime());
    }


}