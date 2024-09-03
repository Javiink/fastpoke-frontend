import { Component } from '@angular/core';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';
import { SizeSelectorComponent } from '../../size-selector/size-selector.component';
import { CurrencyPipe } from '@angular/common';
import { ItemCardComponent } from '../item-card.component';

@Component({
  selector: 'app-item-card-md',
  standalone: true,
  imports: [ImageUrlPipe, SizeSelectorComponent, CurrencyPipe],
  templateUrl: './item-card-md.component.html',
  styles: ''
})
export class ItemCardMdComponent extends ItemCardComponent {
}
