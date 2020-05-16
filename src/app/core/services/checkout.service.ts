import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor( private httpClient:HttpClient ) { }

  private cartItemURL = "https://ecommerceapi20200516034418.azurewebsites.net";

  CreateOrder(orderData){
    return this.httpClient.post<any>(`${this.cartItemURL}/api/orders`, orderData);
  }
}
