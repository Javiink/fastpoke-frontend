import { Component } from '@angular/core';
import { Combo } from '../../../models/combo';
import { ApiService } from '../../../services/api.service';
import { ItemCardXlComponent } from '../../../shared/cards/item-card-xl/item-card-xl.component';
import { IngredientListComponent } from '../../../shared/ingredient-list/ingredient-list.component';
import { AllergensComponent } from '../../../shared/allergens/allergens.component';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-combos',
  standalone: true,
  imports: [ItemCardXlComponent, IngredientListComponent, AllergensComponent, ImageUrlPipe, FontAwesomeModule],
  templateUrl: './combos.component.html',
  styles: ''
})
export class CombosComponent {

  protected items?: Combo[];

  constructor(private apiService: ApiService) {
    this.apiService.get<Combo[]>('/combos').subscribe((combo) => {
      this.items = combo;
    })
  }

}
