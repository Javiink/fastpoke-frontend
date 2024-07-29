import { Component } from '@angular/core';
import { Drink } from '../../../models/drink';
import { ApiService } from '../../../services/api.service';
import { ItemCardMdComponent } from '../../../shared/cards/item-card-md/item-card-md.component';
import { AllergensComponent } from '../../../shared/allergens/allergens.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [ItemCardMdComponent, AllergensComponent, CurrencyPipe],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {

  protected items?: Drink[];

  constructor(private apiService: ApiService) {
    this.apiService.get<Drink[]>('/drinks').subscribe((drinks) => {
      this.items = drinks;
      console.log(this.items);
    })
  }

}
