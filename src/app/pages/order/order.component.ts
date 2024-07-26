import { CurrencyPipe, NgClass, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BowlsComponent } from '../categories/bowls/bowls.component';
import { CombosComponent } from '../categories/combos/combos.component';
import { SidedishesComponent } from '../categories/sidedishes/sidedishes.component';
import { CustomBowlComponent } from '../categories/custom-bowl/custom-bowl.component';
import { DrinksComponent } from '../categories/drinks/drinks.component';
import { ItemCardXlComponent } from '../../shared/cards/item-card-xl/item-card-xl.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NgClass, NgComponentOutlet, CurrencyPipe, FontAwesomeModule, CombosComponent, BowlsComponent, SidedishesComponent, CustomBowlComponent, DrinksComponent, ItemCardXlComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  protected categories = [
    {
      name: $localize`Combos`,
      path: 'combos',
      component: CombosComponent,
      icon: 'fpi-takeout-6'
    },
    {
      name: $localize`Bowls`,
      path: 'bowls',
      component: BowlsComponent,
      icon: 'fpi-bowl-1'
    },
    {
      name: $localize`Sides`,
      path: 'sidedishes',
      component: SidedishesComponent,
      icon: 'fpi-sides-7'
    },
    {
      name: $localize`Your bowl`,
      path: 'custom-bowl',
      component: CustomBowlComponent,
      icon: 'fpi-bowl-2'
    },
    {
      name: $localize`Drinks`,
      path: 'drinks',
      component: DrinksComponent,
      icon: 'fpi-drink-1'
    },
  ]

  protected activeCategory = this.categories[1];

  constructor() {
    console.log(this.activeCategory);
  }

  showCategory(path: string) {
    this.activeCategory = this.categories.find(e => e.path == path)!;
  }

  renderItemsComponent(path: string) { }
}
