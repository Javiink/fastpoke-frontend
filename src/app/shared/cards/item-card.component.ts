import { Directive, Input, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ItemCategory } from '../../models/order-item';
import { OrderItem } from '../../models/order-item';
import { Size } from '../../models/size';

@Directive({
  selector: 'app-item-card',
})
export class ItemCardComponent {
  @Input({ required: true }) item!: OrderItem;
  @Input({ required: true }) category!: ItemCategory;
  @Input() sizes?: Size[];
  @Input() price?: number;
  @Input() icon?: string;

  selectedSize: Size | undefined;

  constructor(private orderService: OrderService) { }

  selectSize(size: Size) {
    this.selectedSize = size;
  }

  addItemToOrder() {
    if (this.sizes) {
      this.orderService.addItem({ category: this.category, item: this.item, size: this.selectedSize });
    } else {
      this.orderService.addItem({ category: this.category, item: this.item });
    }

  }
}
