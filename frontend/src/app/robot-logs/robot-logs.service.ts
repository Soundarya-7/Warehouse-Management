import { Injectable } from '@angular/core';
import {Robotlogs} from '../models/robotLogs'
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RobotLogsService {
 
  
    
   private apiUrl = "http://localhost:5050/robotLogs"
 
   constructor(private http: HttpClient){
      
   }
  
   
   getRobotLogsList() : Observable<Robotlogs[]>{
    return this.http.get<Robotlogs[]>(this.apiUrl);
   }
}