import { Component } from '@angular/core';
import { Combo } from '../../../models/combo';
import { ApiService } from '../../../services/api.service';
import { ItemCardXlComponent } from '../../../shared/cards/item-card-xl/item-card-xl.component';
import { IngredientsComponent } from '../../../shared/ingredients/ingredients.component';
import { AllergensComponent } from '../../../shared/allergens/allergens.component';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-combos',
  standalone: true,
  imports: [ItemCardXlComponent, IngredientsComponent, AllergensComponent, ImageUrlPipe, FontAwesomeModule],
  templateUrl: './combos.component.html',
  styleUrl: './combos.component.css'
})
export class CombosComponent {

  protected items?: Combo[];

  constructor(private apiService: ApiService) {
    this.apiService.get<Combo[]>('/combos').subscribe((combo) => {
      this.items = combo;
    })
  }

}
