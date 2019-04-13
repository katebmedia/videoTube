import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass } from '../base-class';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'settings-page',
  templateUrl: './settings.component.html'
})
export class SettingsComponent extends BaseClass {
  firstName: string;
  lastName: string;
  message: string;
  type: string;
  constructor(private router: Router, public http: HttpClient) {
    super(http)
    let token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(['/login']);
    }
  }
  completeLogin() {
    try {
      let user = this.getCurrentUser();
      let completedUser = this.editUser({
        username: user.username,
        firstname: this.firstName,
        lastname: this.lastName
      })
      this.setCurrentUser(completedUser);
      this.type = "success";
      this.message = "تغییرات با موفقیت انجام شد."
    } catch (error) {
      this.type = "danger";
      this.message="متاسفانه ثبت تغییرات با مشکل مواجه شده است."
    }

  }
  ngOnInit() {
    let user = this.getCurrentUser();
    this.firstName = user.firstname;
    this.lastName = user.lastname;
  }
}
