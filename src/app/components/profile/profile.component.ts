import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private myService:OrdersService,private myService2:UserService) { }

  subscriber;
  pendingOrders;
  notPendingOrders;
  subscriber3;
  subscriber2;
  data;
  ngOnInit(): void {

    //user pending orders
    debugger;
    this.subscriber = this.myService.getOrders()
    .subscribe((pendingOrders)=>{
      console.log(pendingOrders);
      if(pendingOrders)
      {
        this.pendingOrders = pendingOrders;
      }
    }),
    (err)=>{
      console.log(err);
    }

    //user not pending orders
    //debugger;
    this.subscriber3 = this.myService.getNotPendingOrders()
    .subscribe((notPendingOrders)=>{
      console.log(notPendingOrders);
      if(notPendingOrders)
      {
        this.notPendingOrders = notPendingOrders;
      }
    }),
    (err)=>{
      console.log(err);
    }

    //user info 
    //debugger;
    this.subscriber2=this.myService2.getUserInfo()
    .subscribe((data)=>{
      console.log("data",data);
      if(data)
      {
        this.data = data;
      }
    }),
    (err)=>{
      console.log(err);
    }
  }
}
