import { Component } from '@angular/core';
import { SizeSelectorComponent } from '../../size-selector/size-selector.component';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';
import { CurrencyPipe } from '@angular/common';
import { ItemCardComponent } from '../item-card.component';

@Component({
  selector: 'app-item-card-xl',
  standalone: true,
  imports: [SizeSelectorComponent, ImageUrlPipe, CurrencyPipe],
  templateUrl: './item-card-xl.component.html',
  styles: ''
})
export class ItemCardXlComponent extends ItemCardComponent{

}
