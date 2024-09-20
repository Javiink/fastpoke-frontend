import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderItem, OrderItemData } from '../models/order-item';
import { CustomBowl } from '../models/custom-bowl';

@Injectable({
  providedIn: 'root'
})
export class ItemWindowService {

  public visibility: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public item: BehaviorSubject<OrderItemData | undefined> = new BehaviorSubject<OrderItemData | undefined>(undefined);
  private timeout?: ReturnType<typeof setTimeout>;


  constructor() {}

  show(item: OrderItemData) {
    this.item.next(item);
    this.visibility.next(true);
    if(this.timeout){
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {
      this.hide();
    }, 1200);
  }

  hide() {
    this.visibility.next(false);
  }
}
