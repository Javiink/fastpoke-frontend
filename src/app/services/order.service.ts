import { Injectable } from '@angular/core';
import { OrderItem } from '../models/order-item';
import { CustomBowl } from '../models/custom-bowl';
import { Size } from '../models/size';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items: OrderItemData[] = [];
  itemIndex: number = 0;
  takeOut: boolean = false;

  public total$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  setEatIn(){
    this.takeOut = false;
  }

  setTakeOut(){
    this.takeOut = true;
  }

  addItem(data: OrderItemData){
    if (data.category == 'custom-bowl')
      data.item.id = this.itemIndex;

    if (data.size) {
      data.price = data.size.price
    } else {
      const d = data.item as ((OrderItem | CustomBowl) & { price: number })
      data.price = d.price
    }

    this.items.push(data)
    this.itemIndex++;

    this.recalculateTotal();

  }

  removeItem(index: number){}

  recalculateTotal(){
    let total = 0;

    const orderItems = this.items;
    orderItems.forEach(i => {
      total = total + i.price!;
    });

    total = Math.round(total * 100)/100;
    this.total$.next(total);
  }

  getTotal(): Observable<number> {
    return this.total$.asObservable();
  }

}

export type ItemCategory = 'bowls' | 'combos' | 'drinks' | 'sidedishes' | 'custom-bowl';

export type OrderItemData = { category: ItemCategory, item: (OrderItem | CustomBowl), size?: Size, price?: number };
