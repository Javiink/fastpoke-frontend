import { Injectable } from '@angular/core';
import { OrderItem } from '../models/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items: OrderItem[] = [];
  takeout: boolean = false;

  constructor() { }

  setEatin(){
    this.takeout = false;
  }

  setTakeout(){
    this.takeout = true;
  }

}
