import { Component } from '@angular/core';
import { OrderItemData } from '../../../models/order-item';
import { Observable } from 'rxjs';
import { OrderService } from '../../../services/order.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-order-review',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, FontAwesomeModule],
  templateUrl: './order-review.component.html',
  styleUrl: './order-review.component.css'
})
export class OrderReviewComponent {

  isTakeout: Observable<boolean>;
  orderTotal: Observable<number>;
  orderItems: Observable<OrderItemData[]>;

  constructor(private orderService: OrderService) {
    this.orderTotal = orderService.getTotal();
    this.orderItems = orderService.getItems();
    this.isTakeout = orderService.isTakeout();
  }



}
