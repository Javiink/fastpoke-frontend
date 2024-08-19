import { Injectable } from '@angular/core';
import { OrderItem } from '../models/order-item';
import { CustomBowl } from '../models/custom-bowl';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items: (OrderItem | CustomBowl)[] = [];
  takeOut: boolean = false;
  total: number = 0;

  constructor() { }

  setEatIn(){
    this.takeOut = false;
  }

  setTakeOut(){
    this.takeOut = true;
  }

}
