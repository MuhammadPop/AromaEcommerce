import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService} from 'src/app/core/services/products.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit, OnDestroy {

  subscriber
  name
  products
  constructor(private myActivatedRoute:ActivatedRoute, private myService:ProductsService) { 
    this.name = this.myActivatedRoute.snapshot.params["name"];
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.subscriber = this.myService.searchForProducts(this.name)
    .subscribe((products)=>{
      console.log(products);
      if(products)
      {
        this.products = products;
      }
    }),
    (err)=>{
      console.log(err);
    }
  }

}
