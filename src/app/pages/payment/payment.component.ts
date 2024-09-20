import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NgClass, LogoComponent],
  templateUrl: './payment.component.html',
  styles: ''
})
export class PaymentComponent implements OnInit{

  @ViewChild('tapToPay') tapToPayAnimation!: ElementRef;
  @ViewChild('takeReceipt') takeReceiptAnimation!: ElementRef;
  payed: boolean = false;

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    this.mockPayed().then(() => {
      this.orderService.sendOrder();
    });
  }

  mockPayed(){
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        this.tapToPayAnimation.nativeElement.play();
        setTimeout(() => {
          this.payed = true;
          resolve();
        }, 3000);
      }, 4000);
    })
  }

  reloadApplication(){
    window.location.href = '/';
  }

}
