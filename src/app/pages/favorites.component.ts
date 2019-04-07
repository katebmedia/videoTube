import { Component } from '@angular/core';
import { video } from '../models/video.model';
import { HttpClient } from '@angular/common/http';
import { BaseClass } from '../base-class';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent extends BaseClass {
  videos: Array<video> = [];
  constructor(public http: HttpClient) {
    super(http);
    this.getJSON('../../assets/fakedata/fakedata.json').subscribe(data => {
      this.videos= data;
    });
  }

}
