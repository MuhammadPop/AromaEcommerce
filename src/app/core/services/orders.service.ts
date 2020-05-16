import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl:string = "https://ecommerceapi20200516034418.azurewebsites.net/api"
  constructor(private myClient:HttpClient) { }

  //get userOrders
  getOrders() {
    return this.myClient.get(`${this.apiUrl}/orders`);
  }

  //get userPendingOrders
  getPendingOrders(){
    return this.myClient.get(`${this.apiUrl}/orders/UserPendingOrders`);
  }

  //get userNotPendingOrders
  getNotPendingOrders()
  {
    let response = this.myClient.get(`${this.apiUrl}/orders/UserNotPendingOrders`,{observe:'body'});
    return response;
  }

  //delete user Order
  deleteOrder(id)
  {
    let response = this.myClient.delete(`${this.apiUrl}/orders/${id}`);
    return response;
  }

  updateOrder(orderId ,order){
    return this.myClient.put(`${this.apiUrl}/orders/${orderId}`, order);
  }
}
