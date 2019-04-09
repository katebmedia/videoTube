import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "./models/video.model";

export class BaseClass {
  // private _jsonURL = '../../assets/fakedata/fakedata.json';
  //../../assets/fakedata/fakedata.json
  //../../assets/fakedata/users.json

  username: string;
  firstname: string;
  lastname: string;
  avatar: string;
  fullname: string;
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
      firstname: localStorage.getItem("firstname"),
      lastname: localStorage.getItem("lastname"),
      avatar: localStorage.getItem("avatar"),
      fullname: localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"),
    };
  }

  addUser(user: User) {
    let ls_users = localStorage.getItem("Users")
    let users: User[] = [];
    if (ls_users)
      users = <User[]>JSON.parse(ls_users);

    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users));
  }

  login(username: string, password: string): User {
    let ls_users = localStorage.getItem("Users")
    let users: User[] = [];
    if (ls_users)
      users = <User[]>JSON.parse(ls_users);

    let finded = users.find(x => x.username == username && x.password == password)

    if (finded == null)
      return null;

      
    finded.token = this.token();

    localStorage.setItem("token", finded.token);
    localStorage.setItem("username", finded.username);
    localStorage.setItem("firstname", finded.firstname);
    localStorage.setItem("lastname", finded.lastname);
    localStorage.setItem("avatar", finded.avatar);

    return finded;
  }

  rand() {
    return Math.random().toString(36).substr(2); // remove `0.`
  };

  token() {
    return this.rand() + this.rand(); // to make it longer
  };

}