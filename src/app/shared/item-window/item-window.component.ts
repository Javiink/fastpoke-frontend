import { Component } from '@angular/core';
import { ItemWindowService } from '../../services/item-window.service';
import { Observable } from 'rxjs';
import { OrderItemData } from '../../models/order-item';
import { AsyncPipe, LowerCasePipe, NgClass, NgStyle } from '@angular/common';
import { ImageUrlPipe } from '../../pipes/image-url.pipe';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-item-window',
  standalone: true,
  imports: [NgClass, NgStyle, AsyncPipe, LowerCasePipe, ImageUrlPipe],
  providers: [ImageUrlPipe],
  templateUrl: './item-window.component.html',
  styles: '',
  animations: [
    trigger('openClose',
      [
        state(
          'open',
          style({
            transform: 'translateY(-1rem)',
            opacity: '1'
          })
        ),
        state(
          'close',
          style({
            transform: 'translateY(0) scale(0.9)',
            opacity: '0'
          })
        ),
        transition('close => open', [animate('0.15s')]),
        transition('open => close', [animate('0.15s')]),
      ]
    )
  ]
})
export class ItemWindowComponent {

  item: Observable<OrderItemData | undefined>;
  imageStyle: string = '';
  visibility: Observable<boolean>;

  constructor(private itemWindowService: ItemWindowService, private imgUrlPipe: ImageUrlPipe){
    this.visibility = this.itemWindowService.visibility;
    this.item = itemWindowService.item;
    itemWindowService.item.subscribe(i => {
      if (i) {
        this.imageStyle = `background-image: url(${imgUrlPipe.transform(i.item.image)})`;
      }
    })
  }

}
