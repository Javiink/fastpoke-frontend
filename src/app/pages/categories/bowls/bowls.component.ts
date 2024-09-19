import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Bowl } from '../../../models/bowl';
import { ItemCardXlComponent } from '../../../shared/cards/item-card-xl/item-card-xl.component';
import { IngredientListComponent } from '../../../shared/ingredient-list/ingredient-list.component';
import { AllergensComponent } from '../../../shared/allergens/allergens.component';

@Component({
  selector: 'app-bowls',
  standalone: true,
  imports: [ItemCardXlComponent, IngredientListComponent, AllergensComponent],
  templateUrl: './bowls.component.html',
  styles: ''
})
export class BowlsComponent {

  protected items?: Bowl[];

  constructor(private apiService: ApiService){
    this.apiService.get<Bowl[]>('/bowls').subscribe((bowls) => {
      this.items = bowls;
    })
  }



}
