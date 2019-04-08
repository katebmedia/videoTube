import { Component } from '@angular/core';
import { video } from './models/video.model';
import { HttpClient } from '@angular/common/http';
import { BaseClass } from './base-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends BaseClass {
  videos: Array<video> = [];
  searchVideos: Array<video> = [];
  showlogin: boolean = true;
  username: string;
  email: string;
  avatar: string;
  constructor(public http: HttpClient) {
    super(http);
    this.getJSON('../../assets/fakedata/fakedata.json').subscribe(data => {
      this.videos = data;
    });
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    let avatar = localStorage.getItem("avatar");
    this.username = username;
    this.email = email;
    this.avatar = avatar;
    if (token) {
      this.showlogin = false;
    }
  }


  onSearchChange(data: string) {
    if (!data) {
      this.searchVideos = [];
      return;
    }
    this.searchVideos = this.videos.filter(item => item.name.indexOf(data) !== -1);
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("avatar");
    window.location.href = "/"
  }
}


