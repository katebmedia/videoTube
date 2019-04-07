import { Pipe, PipeTransform } from '@angular/core';
import { video } from '../models/video.model';
@Pipe({
    name: 'filterSearch',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
      var _jsonURL = '../../assets/fakedata/fakedata.json';
      var videos: Array<video> = [];
      
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.name.indexOf(filter) !== -1);
    }
}