import { Directive, Input, OnInit } from '@angular/core';
import { ItemCategory, OrderService } from '../../services/order.service';
import { OrderItem } from '../../models/order-item';
import { Size } from '../../models/size';

@Directive({
  selector: 'app-item-card',
})
export class ItemCardComponent implements OnInit {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) image: string = '';
  @Input({ required: true }) category!: ItemCategory;
  @Input() description?: string;
  @Input() allergens?: string[];
  @Input() sizes?: Size[];
  @Input() price?: number;
  @Input() icon?: string;

  selectedSize: Size | undefined;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    if (this.sizes) {
      this.selectSize(this.sizes[0]);
    }
  }

  selectSize(size: Size) {
    this.selectedSize = size;
  }

  addItemToOrder(item: OrderItem) {
    const itemPrice: number = this.sizes ? this.selectedSize!.price : this.price!;

    this.orderService.addItem({ category: this.category, item, price: itemPrice });
  }
}
