import { Component } from '@angular/core';
import { ButtonIconTextXlComponent } from '../../shared/buttons/button-icon-text-xl/button-icon-text-xl.component';
import { LogoComponent } from '../../shared/logo/logo.component';
import { LangSwitcherComponent } from '../../shared/lang-switcher/lang-switcher.component';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrypoint',
  standalone: true,
  imports: [ButtonIconTextXlComponent, LogoComponent, LangSwitcherComponent],
  templateUrl: './entrypoint.component.html',
  styles: ''
})
export class EntrypointComponent {

  constructor(private orderService: OrderService, private router: Router){}

  eatin(){
    this.orderService.setEatin();
    this.router.navigate(['order']);
  }

  takeout(){
    this.orderService.setTakeout();
    this.router.navigate(['order']);
  }

}
