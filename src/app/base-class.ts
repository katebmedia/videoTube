import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export class BaseClass {
  // private _jsonURL = '../../assets/fakedata/fakedata.json';
  //../../assets/fakedata/fakedata.json
  //../../assets/fakedata/users.json

  constructor(public http: HttpClient) {
  }
  public getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }

  public getApi(url: string): Observable<any> {
    let token = localStorage.getItem("token")

    return this.http.get(url, { headers: { "token": token } });
  }
}