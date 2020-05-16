import { Component, OnInit } from '@angular/core';
import { RegisterLoginService } from '../../core/services/register-login.service';
import { ApplicationUser } from 'src/app/core/models/ApplicationUser';
import {Router} from "@angular/router";
import { UserLoginData } from '../../core/models/userAuthKey';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = new ApplicationUser();
  userLoginData = new UserLoginData();
  constructor(private authService : RegisterLoginService, private router: Router) { }


  ngOnInit(): void {
    if(UserLoginData.getUserSetting()){
      this.router.navigate(['/home']);
    }
  }


  loginUser(){
    this.authService.loginUser(this.loginUserData)
    .subscribe(
      res => {
        alert("Sucess");
        console.log(res);
        UserLoginData.setSetting(res.message);
        console.log(this.loginUserData.email);
        this.router.navigate(['/home']);
        location.reload();
        UserLoginData.checkAdmin(this.loginUserData.email);
      },
      err => {
        alert("error");
        console.log(err);
      }
    );
  }
}
