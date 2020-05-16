import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string = "https://ecommerceapi20200516034418.azurewebsites.net/api"
  constructor(private myClient:HttpClient) { }

  //get user info
  getUserInfo()
  {
    let response = this.myClient.get(`${this.apiUrl}/auth/GetUserInfo`,{observe:'body'});
    return response;
  }

  //update user info
  updateUserInfo()
  {
    let response = this.myClient.put<void>(`${this.apiUrl}/auth/UpdateUserInfo`,{observe:'body'},{ 
      headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
    })
    return response;
  }
}
