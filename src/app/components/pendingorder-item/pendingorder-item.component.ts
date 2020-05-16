import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-pendingorder-item',
  templateUrl: './pendingorder-item.component.html',
  styleUrls: ['./pendingorder-item.component.css']
})
export class PendingorderItemComponent implements OnInit {

  constructor(private myService:OrdersService) { }

  subscriber;
  deletedOrder;
  ngOnInit(): void {
  }
  @Input('orderInfo') order

  deleteOrder(id){
    debugger;
    this.subscriber = this.myService.deleteOrder(id)
    .subscribe((deletedOrder)=>{
      console.log(deletedOrder);
      if(deletedOrder)
      {
        this.deletedOrder = deletedOrder;
      }
    }),
    (err)=>{
      console.log(err);
    }
  }
}
