import { Component, OnInit, Input, Output } from '@angular/core';
import { UserLoginData } from 'src/app/core/models/userAuthKey';

@Component({
  selector: '[app-submit-order-item-table]',
  templateUrl: './submit-order-item-table.component.html',
  styleUrls: ['./submit-order-item-table.component.css']
})
export class SubmitOrderItemTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('prodinCart') cartItem;

}
