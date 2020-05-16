import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../core/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private myClient:HttpClient ) {  }
  baseURL = "https://ecommerceapi20200516034418.azurewebsites.net";

  GetAllCategories(){
    return this.myClient.get(`${this.baseURL}/api/categories`);
  }
}
