import { Component, Injectable } from '@angular/core';
import { video } from '../models/video.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'dateAdded-page',
  templateUrl: './dateAdded.component.html'
})
export class DateAddedComponent {
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
