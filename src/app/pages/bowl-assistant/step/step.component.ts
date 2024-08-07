import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ApiService } from '../../../services/api.service';
import { CustomBowlStep } from '../../../models/custom-bowl-step.model';
import { IngredientSlots, SelectableIngredient } from '../../../models/ingredient';
import { environment } from '../../../../environments/environment';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [NgClass, ImageUrlPipe, CurrencyPipe, FontAwesomeModule],
  templateUrl: './step.component.html',
  styles: ``
})
export class StepComponent implements OnInit {

  @Input({required: true}) stepData!: CustomBowlStep;
  ingredients: SelectableIngredient[] = [];

  maxSelectableNumber: number = environment.maxCustomSelectableIngredients;
  maxCustomDistinctIngredients: number = 0;

  selectedIngredients: SelectableIngredient[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get(`/ingredients/slot/${this.stepData.path}`).subscribe((ingredients) => {
      this.ingredients = ingredients as SelectableIngredient[];
      if (this.stepData.selectorType == 'quantity') {
        this.ingredients.forEach(i => {i.quantity = 0})
      }
    })
    this.maxCustomDistinctIngredients = this.getMaxCustomDistinctIngredients();
  }

  ingredientQty(ingredient: SelectableIngredient, action: boolean) {
    if (this.stepData.selectorType != 'quantity')
      return;


    if (action) {
      const totalSelected = this.getSelectedIngredients().length;
      if (totalSelected < this.maxCustomDistinctIngredients && ingredient.quantity! < this.maxSelectableNumber) {
        ingredient.quantity!++;
      }
    } else {
      ingredient.quantity!--;
    }

    if (ingredient.quantity! > 0) {
      ingredient.selected = true;
    } else {
      ingredient.selected = false;
    }

    this.selectedIngredients = this.getSelectedIngredients();
  }

  selectIngredient(ingredient: SelectableIngredient) {
    if (this.stepData.selectorType != 'selectable')
      return;

    const totalSelected = this.getSelectedIngredients().length;
    if (!ingredient.selected && totalSelected < this.maxCustomDistinctIngredients) {
      ingredient.selected = true;
    } else if (ingredient.selected) {
      ingredient.selected = false;
    }

    this.selectedIngredients = this.getSelectedIngredients();
  }

  getMaxCustomDistinctIngredients(): number{
    const path = this.stepData.path as (keyof typeof environment.maxCustomDistinctIngredients);
    return environment.maxCustomDistinctIngredients[path];
  }

  getSelectedIngredients(){
    if (this.stepData.selectorType == 'quantity') {
      return this.ingredients.filter(i => i.quantity! > 0)
    } else {
      return this.ingredients.filter(i => i.selected)
    }
  }

}

