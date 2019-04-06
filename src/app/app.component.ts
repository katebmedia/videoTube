import { Component } from '@angular/core';
import { video } from './models/video.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private _jsonURL = '../../assets/fakedata/fakedata.json';
  videos: Array<video> = [];
  searchVideos: Array<video> = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.videos = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  onSearchChange(data:string)
  {
    if(!data)
    {
      this.searchVideos = [];
      return;
    }
    this.searchVideos = this.videos.filter(item => item.name.indexOf(data) !== -1);
  }
}