import { Component } from '@angular/core';
import { BaseClass } from '../base-class';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'register-page',
  templateUrl: './register.component.html'
})
export class RegisterComponent extends BaseClass {
  userName: string;
  userPassword: string;
  message: string;
  constructor(public http: HttpClient) {
    super(http);
  }
  performRegister() {
    if (this.userName == "" || this.userPassword == "") {
    this.message = "نام کاربری و رمز عبور الزامی است.";
      return;
    }
    this.addUser({
      username: this.userName,
      password: this.userPassword
    });
    this.login(this.userName, this.userPassword)
    window.location.href = "/mypage"
  }
}
