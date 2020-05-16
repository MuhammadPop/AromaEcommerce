import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private myClient:HttpClient) { }
  baseURL = "https://ecommerceapi20200516034418.azurewebsites.net";

  GetProdsWithPromotions(){
    return this.myClient.get(`${this.baseURL}/api/ProductsWithPromotions`);
  }

  GetProductByName(name)
  {
    return this.myClient.get(`${this.baseURL}/api/searchforproducts/${name}`);
  }

  AddProductForCategory(categfId, product){
    return this.myClient.post(`${this.baseURL}/api/categories/${categfId}/products`,product);
  }

  //TODO:check to remove categID
  GetProductForCategory(categID, prodID){
    return this.myClient.get(`${this.baseURL}/api/categories/${categID}/products/${prodID}`);
  }

  getProductsForCategory(categID){
    return this.myClient.get(`${this.baseURL}/api/categories/${categID}/products`);
  }

  deleteProduct(CategID, ProdID){
    return this.myClient.delete(`${this.baseURL}/api/categories/${CategID}/products/${ProdID}`);
  }

  UpdateProductForCategory(CategID, ProdID, newProd){
    return this.myClient.put(`${this.baseURL}/api/categories/${CategID}/products/${ProdID}`, newProd);
  }
}
