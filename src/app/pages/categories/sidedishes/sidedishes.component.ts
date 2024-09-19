import { Component } from '@angular/core';
import { ItemCardMdComponent } from '../../../shared/cards/item-card-md/item-card-md.component';
import { AllergensComponent } from '../../../shared/allergens/allergens.component';
import { CurrencyPipe } from '@angular/common';
import { Sidedish } from '../../../models/sidedishes';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-sidedishes',
  standalone: true,
  imports: [ItemCardMdComponent, AllergensComponent, CurrencyPipe],
  templateUrl: './sidedishes.component.html',
  styles: ''
})
export class SidedishesComponent {

  protected items?: Sidedish[];

  constructor(private apiService: ApiService) {
    this.apiService.get<Sidedish[]>('/sidedishes').subscribe((sides) => {
      this.items = sides;
    })
  }

}
