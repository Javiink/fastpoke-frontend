import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderReviewComponent } from "../order/order-review/order-review.component";
import { ModalService } from '../../services/modal.service';
import { Observable } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass, AsyncPipe, OrderReviewComponent],
  template: `
    <div class="hidden fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-50" [ngClass]="{'!flex': (visible | async) === true }" [@backgroundAnimation]="((visible | async) || ((visible | async) && hiding))">
      <div class="relative bg-gradient-to-br from-sky-50 to-sky-200 rounded-2xl shadow-xl p-6 w-[90%] h-[90%] transition-all duration-300 transform" [@modalAnimation]="(visible | async) && !hiding">
        <span class="close absolute -right-2 -top-2 px-1 py-1 -pt-2 aspect-square leading-5 text-5xl font-bold bg-slate-600 text-white rounded-full border-white border-2 hover:cursor-pointer transition-all" (click)="close()">×</span>
        @if(title){
          <h1 class="mb-4 text-4xl font-bold">{{(title | async)}}</h1>
        }
        <app-order-review></app-order-review>
      </div>
    </div>
  `,
  styles: '',
  animations: [
    trigger('backgroundAnimation', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', [animate('0.2s ease-out')]),
      transition('true => false', [animate('0.2s ease-in')])
    ]),
    trigger('modalAnimation', [
      state('false', style({ opacity: 0, transform: 'translateY(60px)' })),
      state('true', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('false => true', [animate('0.2s ease-out')]),
      transition('true => false', [animate('0.2s ease-in')])
    ]),
  ]
})
export class ModalComponent {
  title?: Observable<string>;
  visible: Observable<boolean>;
  hiding: boolean = false;


  constructor(private modalService: ModalService){
    this.visible = this.modalService.visible;
    this.title = this.modalService.title;
  }

  close() {
    this.hiding = true;
    setTimeout(() => {
      this.modalService.hide();
      this.hiding = false;
    }, 200);
  }

}
