import {Fetcher} from "./fetcher";
import {Student} from "./student";
import {Teacher} from "./teacher";
import {Data} from "./data";


let student: Student = new Student();
let teacher: Teacher = new Teacher();
let data: Data = new Data();


let fetcher :Fetcher = new Fetcher([student,teacher],data);


console.log("Try 1:");
data.setData("SWE 4501","Observer Pattern", "Nazmul Haque");
fetcher.fetch();
student.show();
teacher.show();


console.log("\n\nTry 2: After changing data");
data.setData("SWE 4301","Refactoring", "Mohayemin");
fetcher.fetch();
student.show();
teacher.show();



