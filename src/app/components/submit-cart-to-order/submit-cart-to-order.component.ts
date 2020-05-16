import { Component, OnInit } from '@angular/core';
import { Order } from '../../core/models/order';
import {UserLoginData} from '../../core/models/userAuthKey';
import { CheckoutService } from '../../core/services/checkout.service';
import { CartItemService } from '../../core/services/cart-item.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-submit-cart-to-order',
  templateUrl: './submit-cart-to-order.component.html',
  styleUrls: ['./submit-cart-to-order.component.css']
})
export class SubmitCartToOrderComponent implements OnInit {

  constructor(  private checkoutServ:CheckoutService, 
                private cartItemServ:CartItemService, 
                private _Activatedroute:ActivatedRoute, 
                private router: Router ) { }

  prodsCartItemsfromReq;
  total;

  orderDetails = new Order();

  ngOnInit(): void {
    this.total = 0;

    this.cartItemServ.GetShoppingCartItems(UserLoginData.getUserSetting())
      .subscribe( (prodsCartItems) => {
        if(prodsCartItems){
          this.prodsCartItemsfromReq = prodsCartItems;
          console.log(this.prodsCartItemsfromReq);
          this.prodsCartItemsfromReq.forEach(element => {
            this.total += element.product.price * element.amount;
          });
        }
      }
    );
  }

  onSubmitOrderClick(){
    this.orderDetails.OrderStatus = "Pending";
    this.checkoutServ.CreateOrder(this.orderDetails)
      .subscribe( (returnedOrder) => {
        if(returnedOrder){
          this.cartItemServ.GetShoppingCartItems(UserLoginData.getUserSetting())
            .subscribe( (prodsCartItems) => {
              if(prodsCartItems){
                this.prodsCartItemsfromReq = prodsCartItems;
                
                this.prodsCartItemsfromReq.forEach(prodCart => {
                  for(var i = 0; i < prodCart.amount; i++){
                    this.cartItemServ.RemoveFromShoppingCart(UserLoginData.getUserSetting(), prodCart.product.productId)
                      .subscribe(()=>{});
                  }
                });
              }
            }
          );

          alert("success");
          this.router.navigate(['/home']);
        }
      });
  }


}
