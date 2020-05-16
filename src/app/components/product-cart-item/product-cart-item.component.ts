import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import { UserLoginData } from '../../core/models/userAuthKey';
import { CartItemService } from '../../core/services/cart-item.service';
import { ProductsService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})
export class ProductCartItemComponent implements OnInit {

  constructor( private router: Router, private cartItems:CartItemService, private prodServ:ProductsService ) {
    this.isAdmin = UserLoginData.getIsAdmin();
  }
  isAdmin
  subscriper
  productItems


  onCartClick(){

    if( UserLoginData.getUserSetting() ){

      console.log(this.prod.productId);
      this.cartItems.AddToShoppingCart(UserLoginData.getUserSetting(), this.prod.productId)
        .subscribe( (prodsCartItems) => {
          if(prodsCartItems){
            console.log("Done");
          }
        })
        alert("Added Successfully");
      
      // this.cartItems.GetShoppingCartItems(UserLoginData.getUserSetting())
      //   .subscribe( (prodsCartItems) => {
      //     if(prodsCartItems){
      //       console.log(prodsCartItems);
      //     }
      //   });
    }else{
      this.router.navigate(['/login']);
    }
  }

  onRemoveClick(){
    console.log("Here");
    this.prodServ.deleteProduct(this.prod.categoryId, this.prod.productId).subscribe((response)=>{
      if(response){
        alert("Somthing is Wrong");
      }
      else
      alert("deleted");
      location.reload();
    });
  }

  ngOnInit(): void {
  }

  onEditCartClick(){
    this.router.navigate([`editprod/${this.prod.productId}/${this.prod.categoryId}`]);
  }

  @Input('prodInfo') prod
}
