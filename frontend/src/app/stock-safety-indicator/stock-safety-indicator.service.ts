import { Injectable } from '@angular/core';
import { StockSafetyIndicator } from '../models/stock-safety-indicator';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class StockSafetyIndicatorService {

  private apiURL = 'http://localhost:5050/safetystock'


  
  constructor(private http: HttpClient){}

 

  getStocksThresholdItems(): Observable<StockSafetyIndicator[]> {
    return this.http.get<StockSafetyIndicator[]>(this.apiURL);
  }

}
