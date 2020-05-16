import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../core/services/product.service';
import { UserLoginData } from '../../core/models/userAuthKey';
import {Router} from "@angular/router";
import{ActivatedRoute} from '@angular/router';
import { product } from 'src/app/core/models/product';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  userLoginData = new UserLoginData();
  
  categID;
  prodId;

  productRecieved = new product();

  constructor(private prodServ:ProductsService, private router: Router, private myActivatedRoute:ActivatedRoute) { 
    if(!UserLoginData.getIsAdmin()){
      this.router.navigate(['/home']);
    }
    this.categID = this.myActivatedRoute.snapshot.params["categid"];
    this.prodId = this.myActivatedRoute.snapshot.params["prodid"];
  }

  ngOnInit(): void {
    this.prodServ.GetProductForCategory(this.categID,this.prodId)
      .subscribe( (productResult:product)=> {
        if(productResult){
          this.productRecieved = productResult;
        }
      });
  }

  onSubmitOrderClick(){
    this.prodServ.UpdateProductForCategory(this.categID, this.prodId, this.productRecieved)
      .subscribe( (response)=>{
        if(response)
          alert("Error :'( ");
        else
          alert("Success :D");  
      });
  }
}
