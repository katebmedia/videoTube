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
    this.getJSON('../../assets/fakedata/users.json').subscribe((data: Array<User>) => {
      data.forEach(item => {
        if (item.username == this.userName && item.password == this.userPassword) {
          localStorage.setItem("token", item.token);
          localStorage.setItem("username", item.username);
          localStorage.setItem("email", item.email);
          localStorage.setItem("avatar", item.avatar);
          // this.router.navigate(['/mypage']);
          window.location.href = "/mypage"

        } else {
          this.message = "نام کاربری یا رمز عبور اشتباه است."
        }
      });
    });

  }
}
