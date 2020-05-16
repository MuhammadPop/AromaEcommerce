import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';


@Component({
  selector: 'app-not-pendingorder-item',
  templateUrl: './not-pendingorder-item.component.html',
  styles: [
  ]
})
export class NotPendingorderItemComponent implements OnInit {

  constructor(private myService:OrdersService) { }

  ngOnInit(): void {
  }
  @Input('orderInfo') order
}
