import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imageUrl',
  standalone: true
})
export class ImageUrlPipe implements PipeTransform {

  baseUrl = environment.imgUrl || `${location.protocol}//${location.hostname}/public/images`;

  transform(value: string): string {
    return this.baseUrl + '/thumbs/' + value;
  }

}
