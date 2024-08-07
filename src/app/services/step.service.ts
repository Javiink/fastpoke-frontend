import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomBowlAdjacentSteps, CustomBowlStep } from '../models/custom-bowl-step.model';

const emptyStep: CustomBowlStep = {
  label: '',
  title: '',
  path: 'size',
  stepIndex: 0,
  selectorType: 'selectable'
};

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps$: BehaviorSubject<CustomBowlStep[]> = new BehaviorSubject<CustomBowlStep[]>([]);
  currentStep$: BehaviorSubject<CustomBowlStep> = new BehaviorSubject<CustomBowlStep>(emptyStep);
  adjacentSteps$: BehaviorSubject<CustomBowlAdjacentSteps> = new BehaviorSubject<CustomBowlAdjacentSteps>({
    prev: emptyStep,
    next: emptyStep
  });

  constructor() {
  }

  setCurrentStep(step: CustomBowlStep): void {
    this.currentStep$.next(step);
    this.setAdjacentSteps();
  }

  getCurrentStep(): Observable<CustomBowlStep> {
    return this.currentStep$.asObservable();
  }

  setSteps(steps: CustomBowlStep[]): void {
    this.steps$.next(steps);
    this.setCurrentStep(steps[0]);
  }

  getSteps(): Observable<CustomBowlStep[]> {
    return this.steps$.asObservable();
  }

  getAdjacentSteps(): Observable<CustomBowlAdjacentSteps> {
    return this.adjacentSteps$.asObservable();
  }

  setAdjacentSteps(): void {
    const adjacentSteps: CustomBowlAdjacentSteps = {
      prev: null,
      next: null
    }

    if (!this.isFirstStep()) {
      adjacentSteps.prev = this.steps$.value[this.currentStep$.value.stepIndex - 1]
    }

    if (!this.isLastStep()) {
      adjacentSteps.next = this.steps$.value[this.currentStep$.value.stepIndex + 1]
    }

    this.adjacentSteps$.next(adjacentSteps);

  }

  moveToNextStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index < this.steps$.value.length) {
      this.setCurrentStep(this.steps$.value[index + 1]);
    }
    this.setAdjacentSteps();
  }

  moveToPreviousStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index > 0) {
      this.setCurrentStep(this.steps$.value[index - 1]);
    }
    this.setAdjacentSteps();
  }

  isFirstStep(): boolean {
    return this.currentStep$.value.stepIndex === 0;
  }

  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }

}
