import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UserLoginData } from './core/models/userAuthKey';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor( private router: Router ) {  }

  userKey:string =  UserLoginData.getUserSetting();
  isAdmin:boolean = UserLoginData.getIsAdmin();

  onClickCheckAuth(){
    if( !UserLoginData.getUserSetting() ){
      alert("Not authorized! Please login or register...");
      this.router.navigate(['/login']);
    }
  }

  onLogoutClick(){
    UserLoginData.cleanAll();
    //UserLoginData.isAdmin = false;
    this.router.navigate(['/home']);
    window.location.reload();
  }
  
  ngOnInit(): void {
    console.log(this.userKey);
    //UserLoginData.clearUserSetting();
    this.userKey = UserLoginData.getUserSetting();
  }
  title = 'Aroma Shop';
}
