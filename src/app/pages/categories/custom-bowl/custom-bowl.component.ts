import { Component, ViewChild } from '@angular/core';
import { AsyncPipe, JsonPipe, NgClass, NgComponentOutlet } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';

import { CustomBowlAdjacentSteps, CustomBowlStep, StepIngredientsEvent } from '../../../models/custom-bowl-step';
import { StepsService } from '../../../services/step.service';
import { StepTabsComponent } from '../../bowl-assistant/step-tabs/step-tabs.component';
import { StepComponent } from '../../bowl-assistant/step/step.component';
import { OrderService } from '../../../services/order.service';
import { CustomBowl, CustomBowlSize } from '../../../models/custom-bowl';


const initSteps: CustomBowlStep[] = [
  {
    label: $localize`Bowl size`,
    title: $localize `What size will it be?`,
    path: 'size',
    index: 0,
    selectorType: 'selectable',
    completed: false,
  },
  {
    label: $localize `Base`,
    title: $localize `Select the base`,
    path: 'base',
    index: 1,
    selectorType: 'selectable',
    completed: false,
  },
  {
    label: $localize`Sauce`,
    title: $localize `Put some sauce in it!`,
    path: 'sauce',
    index: 2,
    selectorType: 'selectable',
    completed: false,
  },
  {
    label: $localize`Protein`,
    title: $localize `The main component of the bowl`,
    path: 'protein',
    index: 3,
    selectorType: 'selectable',
    completed: false,
  },
  {
    label: $localize`Toppings`,
    title: $localize `Throw more ingredients! `,
    path: 'topping',
    index: 4,
    selectorType: 'selectable',
    completed: false,
  },
  {
    label: $localize`Sprinkle`,
    title: $localize `Finish with the decorations`,
    path: 'sprinkle',
    index: 5,
    selectorType: 'selectable',
    completed: false,
  },
]
@Component({
  selector: 'app-custom-bowl',
  standalone: true,
  imports: [NgComponentOutlet, NgClass, AsyncPipe, FontAwesomeModule, StepTabsComponent, StepComponent, JsonPipe],
  providers: [],
  templateUrl: './custom-bowl.component.html',
  styleUrl: './custom-bowl.component.css',
  animations: [
    /* trigger('slideAnimation', [
      state('true', style({
        transform: 'translateX(-100%)',
        opacity: '0%'
      })),
      state('false', style({
        transform: 'translateX(0%)',
        opacity:'100%'
      })),
      transition('true <=> false', animate('400ms ease-in-out'))
    ]) */
    /* trigger('slideAnimation', [
      transition(':increment', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            width: '100%',
          }),
        ], {optional: true}),
        query(':enter', [style({ transform: 'translateX(100%)' })], {optional: true}),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))], {optional: true}),
        query(':enter', [animate('300ms ease-out', style({ transform: 'translateX(0%)' }))], {optional: true}),
      ]),
      transition(':decrement', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            width: '100%',
          }),
        ], {optional: true}),
        query(':enter', [style({ transform: 'translateX(-100%)' })], {optional: true}),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('300ms ease-out', style({ transform: 'translateX(100%)' }))], {optional: true}),
        query(':enter', [animate('300ms ease-out', style({ transform: 'translateX(0%)' }))], {optional: true}),
      ]),
    ]), */

  ]
})
export class CustomBowlComponent {

  steps!: Observable<CustomBowlStep[]>;
  currentStep!: Observable<CustomBowlStep>;
  adjacentSteps!: Observable<CustomBowlAdjacentSteps>;

  isLastStep: boolean = false;

  initialBowl = {
    name: 'Custom bowl',
    ingredients: [],
    image: 'custom-bowl.png',
    size: {name: 'medium', price: 0}
  };
  bowl: CustomBowl = JSON.parse(JSON.stringify(this.initialBowl));

  constructor(private stepService: StepsService, private orderService: OrderService){
    this.initialize();
    stepService.resetSteps$.subscribe(r => {
      if (r) {
        this.initialize()
      }
    });
  }

  initialize(){
    let steps = JSON.parse(JSON.stringify(initSteps));

    this.stepService.setSteps(steps);
    this.steps = this.stepService.getSteps();
    this.currentStep = this.stepService.getCurrentStep();
    this.adjacentSteps = this.stepService.getAdjacentSteps();

    this.bowl = JSON.parse(JSON.stringify(this.initialBowl));

    this.stepService.setCurrentStep(steps[0])
  }

  prevStep(){
    this.stepService.moveToPreviousStep();
    this.checkLastStep();
  }

  nextStep(){
    this.stepService.moveToNextStep();
    this.checkLastStep();
  }

  checkLastStep(){
    this.isLastStep = this.stepService.isLastStep();
  }

  updateSize(size: CustomBowlSize){
    this.bowl.size = size
  }

  updateStepIngredient(stepIngredients: StepIngredientsEvent){
    const bowlIngredients = this.bowl.ingredients.filter(i => i.slot != stepIngredients.step.path);
    bowlIngredients.push(...stepIngredients.ingredients)
    this.bowl.ingredients = bowlIngredients;
  }

  addToOrder(){
    this.orderService.addItem({ category: 'custom-bowl', item: this.bowl, size: this.bowl.size });
    this.stepService.resetAssistant();
    this.checkLastStep();
  }

}


