import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  private _registerUrl = "https://ecommerceapi20200516034418.azurewebsites.net/api/auth/Register";
  private _loginUrl = "https://ecommerceapi20200516034418.azurewebsites.net/api/auth/Login";
  
  constructor( private httpClient:HttpClient ) {  }

  registerUser(user){
    return this.httpClient.post<any>(this._registerUrl, user);
  }

  loginUser(user){
    return this.httpClient.post<any>(this._loginUrl, user);
  }
}
