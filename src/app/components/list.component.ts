import { Component, Input } from '@angular/core';
import { video } from '../models/video.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() sorted:string;
  @Input() video:Array<video>;

  ngOnInit() {
    if(this.sorted) this.video.sort((a, b) => (b[this.sorted] - a[this.sorted]));
  }
}