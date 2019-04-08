import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { video, Comment } from '../models/video.model';
import { HttpClient } from '@angular/common/http';
import { BaseClass } from '../base-class';

@Component({
  selector: 'detail-page',
  templateUrl: './detail.component.html'
})
export class DetailComponent extends BaseClass {
  video: video = new video();
  comments: Array<Comment> = [];
  pageId: string;
  commentValue: string;
  showCommentFooter: boolean = true;

  constructor(public route: ActivatedRoute, public http: HttpClient) {
    super(http);
    this.getJSON('../../assets/fakedata/fakedata.json').subscribe(data => {
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

        this.getJSON('../../assets/fakedata/fakecomment.json').subscribe(data => {
          data.forEach(item => {
            if (item.id_post == this.pageId) {
              this.comments.push(item);
              this.comments.sort((a, b) => (b.dateAdd - a.dateAdd));
            }
          });
        });
      });
    });
  }

  ngOnInit() {
  }
  onComment() {
    if (this.commentValue.length > 0) {
      this.showCommentFooter = false;
    }
    if (this.commentValue.length == 0)
    {
      this.showCommentFooter = true;
    }
  }
  cancelComment(){
    this.showCommentFooter = true;
    this.commentValue = "";
  }
}