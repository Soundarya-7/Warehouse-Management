import { Robot } from "./robot";

export interface Robotlogs extends Robot{
    id: number, 
    robot: Robot
    startTime: Date,
    endTime: Date,
    accessedLocationID: number,
    capacityUsed: number
}
