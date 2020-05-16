import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductsService} from 'src/app/core/services/products.service';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  subscriber
  id
  product
  constructor(private myActivatedRoute:ActivatedRoute, private myService:ProductsService) { 
    this.id = this.myActivatedRoute.snapshot.params["id"];
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.subscriber = this.myService.getSingleProduct(this.id)
    .subscribe((product)=>{
      console.log(product);
      if(product)
      {
        this.product = product;
      }
    }),
    (err)=>{
      console.log(err);
    }
  }
}
