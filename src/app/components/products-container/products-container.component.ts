import { Component, OnInit, OnDestroy} from '@angular/core';
import { ProductsService } from '../../core/services/product.service';
import { UserLoginData } from '../../core/models/userAuthKey';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  constructor( private prodsService: ProductsService ) { }
  subcriber;
  products;
  ngOnDestroy(): void{
    //this.subcriber.unsubscribe()
  }

  ngOnInit(): void {
    this.subcriber = this.prodsService.GetProdsWithPromotions()
      .subscribe((prods) => {
        if(prods){
          this.products = prods;
        }
      })
  }

}
