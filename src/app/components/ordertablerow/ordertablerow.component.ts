import { Component, OnInit, Input } from '@angular/core';
import { OrderDetails } from '../../core/models/OrderDetails';
import { OrderDetailsService } from '../../core/services/order-details.service';

@Component({
  selector: '[app-ordertablerow]',
  templateUrl: './ordertablerow.component.html',
  styleUrls: ['./ordertablerow.component.css']
})
export class OrdertablerowComponent implements OnInit {

  constructor( private orderDetailsServ:OrderDetailsService ) { }

  orderInfo;

  ngOnInit(): void {
    this.orderDetailsServ.GetOrderDetailsForOrder(this.order.orderId)
      .subscribe((prodsInOrder)=>{
        this.orderInfo = prodsInOrder;
        console.log(prodsInOrder);
      });
  }

  @Input('orderData') order;

}
