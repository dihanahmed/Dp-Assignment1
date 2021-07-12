import {Data} from "./data";

export interface Observer {
    update(data: Data) :void
}