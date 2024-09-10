import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonIconTextXlComponent } from '../../shared/buttons/button-icon-text-xl/button-icon-text-xl.component';
import { LogoComponent } from '../../shared/logo/logo.component';
import { LangSwitcherComponent } from '../../shared/lang-switcher/lang-switcher.component';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-entrypoint',
  standalone: true,
  imports: [ButtonIconTextXlComponent, LogoComponent, LangSwitcherComponent],
  templateUrl: './entrypoint.component.html',
  styleUrl: './entrypoint.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntrypointComponent {

  constructor(private orderService: OrderService){}

  eatin(){
    this.orderService.setEatin()
  }

  takeout(){
    this.orderService.setTakeout()
  }

}
