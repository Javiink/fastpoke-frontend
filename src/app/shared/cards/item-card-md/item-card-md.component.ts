import { Component, Input } from '@angular/core';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';
import { Size } from '../../../models/size';
import { SizeSelectorComponent } from '../../size-selector/size-selector.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item-card-md',
  standalone: true,
  imports: [ImageUrlPipe, SizeSelectorComponent, CurrencyPipe],
  templateUrl: './item-card-md.component.html',
  styles: ''
})
export class ItemCardMdComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) image: string = '';
  @Input() description?: string;
  @Input() allergens?: string[];
  @Input() sizes?: Size[];
  @Input() price?: number;
  @Input() icon?: string;
}
