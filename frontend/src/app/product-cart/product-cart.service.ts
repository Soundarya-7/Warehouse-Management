import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { ProductCart } from '../models/product-cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  

  private productCartList: Observable<ProductCart[]>;
  private apiUrl = "http://localhost:5050"

  constructor(private http: HttpClient) { 
  }

  getProductList():Observable<ProductCart[]>{
    this.productCartList = this.http.get<ProductCart[]>(this.apiUrl+"/ledger");
    return this.productCartList;
  }

  updateLocation(locationId, statusCode):Observable<void>{
    console.log(this.apiUrl+"/location/"+locationId+"/status/"+statusCode);
    return this.http.put<void>(this.apiUrl+"/location/location/"+locationId+"/status/"+statusCode, location);
  }


}
