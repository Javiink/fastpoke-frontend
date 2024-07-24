import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  protected navItems = [
    {
      name: $localize`Combos`,
      path: '/category/combos',
      icon: 'fpi-takeout-6'
    },
    {
      name: $localize`Bowls`,
      path: '/category/bowls',
      icon: 'fpi-bowl-1'
    },
    {
      name: $localize`Sides`,
      path: '/category/sidedishes',
      icon: 'fpi-sides-7'
    },
    {
      name: $localize`Your bowl`,
      path: '/category/custom-bowl',
      icon: 'fpi-bowl-2'
    },
    {
      name: $localize`Drinks`,
      path: '/category/drinks',
      icon: 'fpi-drink-1'
    },
  ]

  protected activeCategory = this.navItems[0].path;

  constructor(){}

  showCategory(path: string){
    this.activeCategory = path;
  }
}
