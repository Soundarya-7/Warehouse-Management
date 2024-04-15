import { Injectable } from '@angular/core';
import { RobotComponent } from './robot.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Robot } from '../models/robot';
 
@Injectable({
  providedIn: 'root'
})
export class RobotService {
 
  private apiUrl = "http://localhost:5050/robots";
 
  robotList = []
 
  // constructor() {
  //   this.robotList = JSON.parse(localStorage.getItem("robot"));
  //  }
 
  constructor(private http: HttpClient){
      
  }
 
  
   getRobotList() : Observable<Robot[]>{
    return this.http.get<Robot[]>(this.apiUrl);
   }
 
   createRobot(robot: Robot) : Observable<Robot>{
     return this.http.post<Robot>(this.apiUrl, robot);
   }
}