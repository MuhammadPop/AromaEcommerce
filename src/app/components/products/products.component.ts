import { Component, OnInit } from '@angular/core';
import { ProductsService} from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  name = '';
  constructor( private myService:ProductsService) { }

  subscriber;
  products;
  ngOnInit(): void {
    //debugger;
    this.subscriber = this.myService.getAllProducts()
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
