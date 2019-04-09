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
      username: localStorage.getItem("username") == 'undefined' ? null : localStorage.getItem("username"),
      token: localStorage.getItem("token") == 'undefined' ? null : localStorage.getItem("token"),
      firstname: localStorage.getItem("firstname") == 'undefined' ? null : localStorage.getItem("firstname"),
      lastname: localStorage.getItem("lastname") == 'undefined' ? null : localStorage.getItem("lastname"),
      avatar: localStorage.getItem("avatar") == 'undefined' ? null : localStorage.getItem("avatar"),
      fullname: (localStorage.getItem("firstname") == 'undefined' || localStorage.getItem("lastname") == 'undefined') ? null : localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"),
    };
  }

  addUser(user: User) {
    let ls_users = localStorage.getItem("Users")
    let users: User[] = [];
    if (ls_users)
      users = <User[]>JSON.parse(ls_users);

    user.token = this.token();
    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users));
  }
  editUser(user: User): User {
    let ls_users = localStorage.getItem("Users");
    let users: User[] = [];
    if (ls_users)
      users = <User[]>JSON.parse(ls_users)
    let finded = users.find(x => x.username == user.username)

    if (finded == null)
      return null;

    finded.firstname = user.firstname;
    finded.lastname = user.lastname;
    localStorage.setItem("Users", JSON.stringify(users));

    return finded;
  }
  login(username: string, password: string): User {
    let ls_users = localStorage.getItem("Users")
    let users: User[] = [];
    if (ls_users)
      users = <User[]>JSON.parse(ls_users);

    let finded = users.find(x => x.username == username && x.password == password)

    if (finded == null)
      return null;


    this.setCurrentUser(finded);


    return finded;
  }

  setCurrentUser(user: User) {
    localStorage.setItem("token", user.token);
    localStorage.setItem("username", user.username);
    localStorage.setItem("firstname", user.firstname);
    localStorage.setItem("lastname", user.lastname);
    localStorage.setItem("avatar", user.avatar);
  }

  rand() {
    return Math.random().toString(36).substr(2); // remove `0.`
  };

  token() {
    return this.rand() + this.rand(); // to make it longer
  };

}