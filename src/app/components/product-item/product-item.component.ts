import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import { UserLoginData } from '../../core/models/userAuthKey';
import { CartItemService } from '../../core/services/cart-item.service';
import { ProductsService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor( private router: Router, private cartItems:CartItemService, private prodServ:ProductsService ) {
    this.userLoginData = UserLoginData.getIsAdmin();  
  }

  ngOnInit(): void {
  }
  userLoginData
  subscriper;
  productItems;

  onCartClick(){
    if( UserLoginData.getUserSetting() ){

      console.log(this.product.productId);
      this.cartItems.AddToShoppingCart(UserLoginData.getUserSetting(), this.product.productId)
        .subscribe( (prodsCartItems) => {
          if(prodsCartItems){
            console.log("Done");
          }
        })
        alert("Added Successfully");
    }else{
      this.router.navigate(['/login']);
    }
  }

  onRemoveClick(){
    console.log("Here");
    this.prodServ.deleteProduct(this.product.categoryId, this.product.productId).subscribe((response)=>{
      if(response){
        alert("Somthing is Wrong");
      }
      else
      alert("deleted");
      location.reload();
    });
  }

  onEditCartClick(){
    this.router.navigate([`editprod/${this.product.productId}/${this.product.categoryId}`]);
  }

@Input('productInfo') product
}
