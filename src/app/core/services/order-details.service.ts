import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  apiUrl:string = "https://ecommerceapi20200516034418.azurewebsites.net/api"
  constructor( private myClient:HttpClient ) { }

  GetOrderDetailsForOrder(orderID){
    return this.myClient.get(`${this.apiUrl}/orders/${orderID}/orderDetails`);
  }
}
