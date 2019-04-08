import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "./models/video.model";

export class BaseClass {
  // private _jsonURL = '../../assets/fakedata/fakedata.json';
  //../../assets/fakedata/fakedata.json
  //../../assets/fakedata/users.json

  username: string;
  email: string;
  avatar: string;
  constructor(public http: HttpClient) {
  }
  public getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }

  public getApi(url: string): Observable<any> {
    let token = localStorage.getItem("token")

    return this.http.get(url, { headers: { "token": token } });
  }
  getCurrentUser(): User {
    return {
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token"),
      email:localStorage.getItem("email"),
      avatar: localStorage.getItem("avatar")
    };
  }
}