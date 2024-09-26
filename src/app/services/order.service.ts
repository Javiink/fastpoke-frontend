import { Injectable } from '@angular/core';
import { OrderItem, OrderItemData } from '../models/order-item';
import { CustomBowl } from '../models/custom-bowl';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemWindowService } from './item-window.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  itemIndex: number = 0;

  public total$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public items$: BehaviorSubject<OrderItemData[]> = new BehaviorSubject<OrderItemData[]>([]);
  public takeout$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private itemWindowService: ItemWindowService, private apiService: ApiService) {}

  setEatin(){
    this.takeout$.next(false);
  }

  setTakeout(){
    this.takeout$.next(true);
  }

  isTakeout(){
    return this.takeout$.asObservable();
  }

  addItem(data: OrderItemData){
    if (data.category == 'custom-bowl')
      data.item.id = this.itemIndex;

    data.index = this.itemIndex;

    if (data.size) {
      data.price = data.size.price
    } else {
      const d = data.item as ((OrderItem | CustomBowl) & { price: number })
      data.price = d.price
    }

    this.items$.next(this.items$.getValue().concat(data))
    this.itemIndex++;

    this.itemWindowService.show(data);
    this.recalculateTotal();

  }

  getItems(){
    return this.items$.asObservable();
  }

  removeItem(index: number){
    const newOrderItems = this.items$.getValue().filter( i => i.index != index)
    this.items$.next(newOrderItems);
    this.recalculateTotal();
  }

  emptyOrder(){
    this.items$.next([]);
  }

  recalculateTotal(){
    let total = 0;

    const orderItems = this.items$.getValue();
    orderItems.forEach(i => {
      total = total + i.price!;
    });

    total = Math.round(total * 100)/100;
    this.total$.next(total);
  }

  getTotal(): Observable<number> {
    return this.total$.asObservable();
  }

  sendOrder(){
    const items = this.items$.value.map((item) => {
      return {
        item: item.item.id?.toString(),
        category: item.category,
        size: item.size
      }
    });
    const order = {
      total: this.total$.value,
      takeout: this.takeout$.value,
      items,
      payed: true
    }

    this.apiService.post('/orders', order).subscribe((res) => {
      console.log(`Order sent to backend, responded with ${res} code`);
    })

    this.emptyOrder();

  }
}


