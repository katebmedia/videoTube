import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { video, comment } from '../models/video.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'detail-page',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  video: video = new video();
  comments: Array<comment> = [];
  private _jsonURL = '../../assets/fakedata/fakedata.json';
  private _jsonCommentURL = '../../assets/fakedata/fakecomment.json';
  pageId: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.getJSON(jsonTypeEnum.data).subscribe(data => {
      this.route.params.subscribe(params => {
        this.pageId = params['id']
        data.forEach(item => {
          if (item.id == this.pageId.toString()) {
            this.video = {
              id: item.id,
              name: item.name,
              videoSrc: item.videoSrc,
              poster: item.poster,
              description: item.description,
              hitCount: item.hitCount
            }
          }
        });

        this.getJSON(jsonTypeEnum.comment).subscribe(data => {
          data.forEach(item => {
            if (item.id_post == this.pageId) {
              this.comments.push(item);
            }
          });
        });
      });
    });
  }
  public getJSON(value: jsonTypeEnum): Observable<any> {
    if (value == jsonTypeEnum.data) return this.http.get(this._jsonURL);
    if (value == jsonTypeEnum.comment) return this.http.get(this._jsonCommentURL);
  }
  ngOnInit() {

  }
}
export enum jsonTypeEnum {
  data = "Data",
  comment = "Comment"
}