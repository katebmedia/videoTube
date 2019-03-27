import { Component } from '@angular/core';
import { video } from '../models/video.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'viewed-page',
  templateUrl: './viewed.component.html'
})
export class ViewedComponent {
  private _jsonURL = '../../assets/fakedata/fakedata.json';
  videos: Array<video> = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.videos = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
