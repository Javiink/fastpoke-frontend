import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderItemData } from '../../../models/order-item';
import { Observable } from 'rxjs';
import { OrderService } from '../../../services/order.service';
import { AsyncPipe, CurrencyPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-review',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, TitleCasePipe, ImageUrlPipe, FontAwesomeModule],
  templateUrl: './order-review.component.html',
  styles: ''
})
export class OrderReviewComponent {
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();

  isTakeout: Observable<boolean>;
  orderTotal: Observable<number>;
  orderItems: Observable<OrderItemData[]>;

  constructor(private orderService: OrderService, private router: Router) {
    this.orderTotal = orderService.getTotal();
    this.orderItems = orderService.getItems();
    this.isTakeout = orderService.isTakeout();
  }

  removeItem(index: number){
    this.orderService.removeItem(index);
  }

  goToPayment(){
    this.router.navigate(['payment']);
    this.closeModalEvent.emit();
  }

}
