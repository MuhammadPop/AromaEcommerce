import { Component, OnInit } from '@angular/core';
import {UserLoginData} from '../../core/models/userAuthKey';
import { Router } from '@angular/router';
import { CartItemService } from 'src/app/core/services/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( private router: Router, private cartItems:CartItemService ) { }

  prodsCartItemsfromReq;
  total_Price;
  ngOnInit(): void {
    this.total_Price = 0;
    this.cartItems.GetShoppingCartItems(UserLoginData.getUserSetting())
      .subscribe( (prodsCartItems) => {
        if(prodsCartItems){
          this.prodsCartItemsfromReq = prodsCartItems;
          console.log(this.prodsCartItemsfromReq);
          this.prodsCartItemsfromReq.forEach(element => {
            this.total_Price += element.product.price * element.amount;
          });
        }
      });
  }

  totalPriceParentMethod($event){
   this.total_Price += $event;
  }

  totalPriceReduceparentMethod($event){
    this.total_Price -= $event;
  }

}
