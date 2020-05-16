import { Component, OnInit } from '@angular/core';
import { RegisterLoginService } from '../../core/services/register-login.service';
import { ApplicationUser } from 'src/app/core/models/ApplicationUser';
import { NgModule } from '@angular/core';
import {Router} from "@angular/router";
import { UserLoginData } from '../../core/models/userAuthKey';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authService:RegisterLoginService, private router: Router) { }

  userRegisterData = new ApplicationUser();

  ngOnInit(): void {
    if(UserLoginData.getUserSetting()){
      this.router.navigate(['/home']);
    }
  }

  // registerUser(){
  //   console.log(this.userRegisterData);
  // }
  
  registerUser(){
    this.userRegisterData.address = "at home";
    this.userRegisterData.photo = "photo";
    this.authService.registerUser(this.userRegisterData)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['login']);
        },
        err => {
          alert("Error");
          console.log(err);
        }
      );
  }

}
