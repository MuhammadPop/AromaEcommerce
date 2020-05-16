import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItemService } from '../../core/services/cart-item.service';
import { UserLoginData } from 'src/app/core/models/userAuthKey';

@Component({
  selector: '[app-cart-table-row]',
  templateUrl: './cart-table-row.component.html',
  styleUrls: ['./cart-table-row.component.css']
})
export class CartTableRowComponent implements OnInit {

  constructor(private cartItems:CartItemService) { }

  @Output() totalPriceOutput = new EventEmitter<number>();

  totalPriceMethod(){
    if(this.item.amount < 10){
      this.cartItems.AddToShoppingCart(UserLoginData.getUserSetting(), this.item.product.productId)
        .subscribe( () => {
          this.totalPriceOutput.emit(this.item.product.price)
          this.item.amount++;
        })

    }
  }

  @Output() totalPriceOutputReduce = new EventEmitter<number>();

  totalPriceReduceMethod(){
    if(this.item.amount > 0){
      this.cartItems.RemoveFromShoppingCart(UserLoginData.getUserSetting(), this.item.product.productId)
        .subscribe( () => {
          this.totalPriceOutputReduce.emit(this.item.product.price)
          this.item.amount--;
        })
    }
  }

  ngOnInit(): void {
    
  }

  @Input('prodinCart') item;

}
