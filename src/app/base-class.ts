import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export class BaseClass{
  // private _jsonURL = '../../assets/fakedata/fakedata.json';
  // private _jsonCommentURL = '../../assets/fakedata/fakecomment.json';
  
    constructor(public http: HttpClient) {
    }
    public getJSON(url:string): Observable<any> {
      return this.http.get(url);
    }
  }