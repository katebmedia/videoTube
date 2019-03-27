import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { video } from '../models/video.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'detail-page',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  video: video = new video();
  private _jsonURL = '../../assets/fakedata/fakedata.json';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.route.params.subscribe(params => {
        var id = params['id']
        data.forEach(item => {
          if (item.id == id.toString()) {
            this.video = {
              id: item.id,
              name: item.name,
              videoSrc: item.videoSrc,
              poster: item.poster,
              description: item.description
            }
          }
        });;
      });

    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  ngOnInit() {

  }
}
