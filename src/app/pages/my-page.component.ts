import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass } from '../base-class';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'my-page-page',
  templateUrl: './my-page.component.html'
})
export class MyPageComponent extends BaseClass {
  firstName: string;
  lastName: string;
  constructor(private router: Router, public http: HttpClient) {
    super(http);
    let token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(['/login']);
    }

  }
  completeLogin() {
    let user = this.getCurrentUser();
    let completedUser=this.editUser({
      username: user.username,
      firstname: this.firstName,
      lastname: this.lastName
    })
    this.setCurrentUser(completedUser);
  }
}
