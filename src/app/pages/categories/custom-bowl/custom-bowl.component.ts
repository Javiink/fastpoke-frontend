import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe, NgClass, NgComponentOutlet } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';

import { CustomBowlAdjacentSteps, CustomBowlStep } from '../../../models/custom-bowl-step.model';
import { StepsService } from '../../../services/step.service';
import { StepTabsComponent } from '../../bowl-assistant/step-tabs/step-tabs.component';
import { StepComponent } from '../../bowl-assistant/step/step.component';


const initSteps: CustomBowlStep[] = [
  {
    label: $localize`Bowl size`,
    title: $localize `What size will it be?`,
    path: 'size',
    stepIndex: 0,
    selectorType: 'selectable'
  },
  {
    label: $localize `Base`,
    title: $localize `Select the base`,
    path: 'base',
    stepIndex: 1,
    selectorType: 'selectable'
  },
  {
    label: $localize`Sauce`,
    title: $localize `Put some sauce in it!`,
    path: 'sauce',
    stepIndex: 2,
    selectorType: 'selectable'
  },
  {
    label: $localize`Protein`,
    title: $localize `The main component of the bowl`,
    path: 'protein',
    stepIndex: 3,
    selectorType: 'quantity'
  },
  {
    label: $localize`Toppings`,
    title: $localize `Throw more ingredients! `,
    path: 'topping',
    stepIndex: 4,
    selectorType: 'quantity'
  },
  {
    label: $localize`Sprinkle`,
    title: $localize `Finish with the decorations`,
    path: 'sprinkle',
    stepIndex: 5,
    selectorType: 'selectable'
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

  steps: Observable<CustomBowlStep[]>;
  currentStep: Observable<CustomBowlStep>;
  adjacentSteps: Observable<CustomBowlAdjacentSteps>;

  constructor(private stepService: StepsService){
    this.stepService.setSteps(initSteps);
    this.steps = this.stepService.getSteps();
    this.currentStep = this.stepService.getCurrentStep();
    this.adjacentSteps = this.stepService.getAdjacentSteps();

    stepService.setCurrentStep(initSteps[1])
  }

  prevStep(){
    this.stepService.moveToPreviousStep();
  }

  nextStep(){
    this.stepService.moveToNextStep();
  }

}
