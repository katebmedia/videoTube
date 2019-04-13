import { Component } from '@angular/core';
import { BaseClass } from '../base-class';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/video.model';


@Component({
  selector: 'login-page',
  templateUrl: './login.component.html'
})
export class LoginComponent extends BaseClass {
  users: Array<User> = [];
  userName: string;
  userPassword: string;
  message: string;
  constructor(public http: HttpClient) {
    super(http);

  }
  performLogin() {
    let user = this.login(this.userName, this.userPassword)
    if (user == null){
      this.message = "نام کاربری یا رمز عبور اشتباه است.";
      return;
    } 
   
    window.location.href = "/settings"
  }
}
