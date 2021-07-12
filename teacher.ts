import {Observer} from "./observer";
import {Data} from "./data";

export class Teacher implements Observer {
    data ={} as Data;


    private showTime = (): string => {
        return this.data.time.toLocaleString('de-DE', {
            hour12: false
        })
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
        console.log("Teacher View:");
        console.log(this.showOthers());
        console.log(this.showTime());
    }


}