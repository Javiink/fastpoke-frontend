import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ApiService } from '../../../services/api.service';
import { CustomBowlStep } from '../../../models/custom-bowl-step.model';
import { SelectableIngredient } from '../../../models/ingredient';
import { environment } from '../../../../environments/environment';
import { ImageUrlPipe } from '../../../pipes/image-url.pipe';
import { StepsService } from '../../../services/step.service';
import { BowlSizes } from '../../../models/combo';
import { AllergensComponent } from '../../../shared/allergens/allergens.component';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [NgClass, ImageUrlPipe, CurrencyPipe, FontAwesomeModule, AllergensComponent],
  templateUrl: './step.component.html',
  styles: ``
})
export class StepComponent implements OnInit {

  @Input({required: true}) stepData!: CustomBowlStep;
  ingredients: SelectableIngredient[] = [];

  maxCustomDistinctIngredients: number = 0;
  selectedIngredients: SelectableIngredient[] = [];
  selectedSize: BowlSizes | '' = '';

  constructor(private apiService: ApiService, private stepService: StepsService) {}

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
      if (totalSelected < this.maxCustomDistinctIngredients) {
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
    this.completeStep();
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
    this.completeStep();
  }

  selectSize(size: BowlSizes){
    this.selectedSize = size;
    this.stepService.completeCurrentStep();
  }

  getMaxCustomDistinctIngredients(): number{
    const path = this.stepData.path as (keyof typeof environment.customBowl.maxDistinctIngredients);
    return environment.customBowl.maxDistinctIngredients[path];
  }

  getSelectedIngredients(){
    if (this.stepData.selectorType == 'quantity') {
      return this.ingredients.filter(i => i.quantity! > 0)
    } else {
      return this.ingredients.filter(i => i.selected)
    }
  }

  completeStep(){
    if (this.selectedIngredients.length > 0) {
      this.stepService.completeCurrentStep();
    } else {
      this.stepService.uncompleteCurrentStep();
    }
  }

}

