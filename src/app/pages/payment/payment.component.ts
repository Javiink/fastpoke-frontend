import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './payment.component.html',
  styles: ''
})
export class PaymentComponent implements OnInit{

  @ViewChild('tapToPay') tapToPayAnimation!: ElementRef;
  @ViewChild('takeReceipt') takeReceiptAnimation!: ElementRef;
  payed: boolean = false;

  ngOnInit(): void {
    this.mockPayed().then(() => {
      // Send order to backend
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


}
