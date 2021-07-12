export class Data {
    private _courseNumber: string = "";
    private _topicName: string = "";
    private _teacherName: string = "";
    private _time: Date = new Date();


    setData(courseNumber: string, topicName: string, teacherName: string) {
        this._courseNumber = courseNumber;
        this._topicName = topicName;
        this._teacherName = teacherName;
    }


    get courseNumber(): string {
        return this._courseNumber;
    }

    get topicName(): string {
        return this._topicName;
    }

    get teacherName(): string {
        return this._teacherName;
    }

    get time(): Date {
        return this._time;
    }
}

