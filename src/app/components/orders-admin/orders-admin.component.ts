import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../../core/services/orders.service';
import { NgModel } from '@angular/forms';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent implements OnInit {

  constructor( private OrdersServ:OrdersService ) { }
  orderStatus = "accepted";
  ProdsInOrder;

  ngOnInit(): void {

    this.OrdersServ.getOrders()
      .subscribe((ordersResponse)=>{
        this.ProdsInOrder = ordersResponse;
        console.log(this.ProdsInOrder);
      });
  }

  onAcceptClick(order){
    order.orderStatus = "accepted";
    this.OrdersServ.updateOrder(order.orderId ,order)
      .subscribe((response)=>{
        if(response)
          alert("Somthing is wrong :\"(");
        else{
            alert("Accepted :D");
            location.reload();
          }
      });
  }

  onRejectClick(order){
    order.orderStatus = "rejected";
    this.OrdersServ.updateOrder(order.orderId ,order)
      .subscribe((response)=>{
        if(response)
          alert("Somthing is wrong :\"(");
        else{
          alert("Rejected :D");
          location.reload();
        }
      });
  }

}
