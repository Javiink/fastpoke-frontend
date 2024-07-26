import { Component, Input } from '@angular/core';
import { SizeSelectorComponent } from '../../size-selector/size-selector.component';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';
import { Size } from '../../../models/size';

@Component({
  selector: 'app-item-card-xl',
  standalone: true,
  imports: [SizeSelectorComponent, ImageUrlPipe],
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
