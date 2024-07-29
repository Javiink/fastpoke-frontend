import { Component, Input } from '@angular/core';
import { SizeSelectorComponent } from '../../size-selector/size-selector.component';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';
import { Size } from '../../../models/size';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item-card-xl',
  standalone: true,
  imports: [SizeSelectorComponent, ImageUrlPipe, CurrencyPipe],
  templateUrl: './item-card-xl.component.html',
  styles: ''
})
export class ItemCardXlComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) image: string = '';
  @Input() description?: string;
  @Input() allergens?: string[];
  @Input() sizes?: Size[];
  @Input() price?: number;

}
