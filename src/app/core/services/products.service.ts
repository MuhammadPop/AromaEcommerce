import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl:string = "https://ecommerceapi20200516034418.azurewebsites.net/api"
  constructor(private myClient:HttpClient) { 

  }

  //get products by catgory id
  getProducts(id)
  {
    let response = this.myClient.get(`${this.apiUrl}/categories/${id}/products`,{observe:'body'});
    return response;
  }

  getAllProducts()
  {
    let response = this.myClient.get(`${this.apiUrl}/ProductsWithoutCategory`,{observe:'body'});
    return response;
  }

  getSingleProduct(productId)
  {
    let response = this.myClient.get(`${this.apiUrl}/products/${productId}`,{observe:'body'});
    return response;
  }

  searchForProducts(productName)
  {
    let response = this.myClient.get(`${this.apiUrl}/searchforproducts/${productName}`,{observe:'body'});
    return response;
  }
}
