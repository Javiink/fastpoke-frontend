import { Inject, Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomBowlStep } from '../models/custom-bowl-step.model';

const emptyStep: CustomBowlStep = {
  title: '',
  component: Type,
  path: '',
  stepIndex: 0,
};

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps$: BehaviorSubject<CustomBowlStep[]> = new BehaviorSubject<CustomBowlStep[]>([]);
  currentStep$: BehaviorSubject<CustomBowlStep> = new BehaviorSubject<CustomBowlStep>(emptyStep);

  constructor() {
  }

  setCurrentStep(step: CustomBowlStep): void {
    this.currentStep$.next(step);
  }

  getCurrentStep(): Observable<CustomBowlStep> {
    return this.currentStep$.asObservable();
  }

  setSteps(steps: CustomBowlStep[]): void {
    this.steps$.next(steps);
  }

  getSteps(): Observable<CustomBowlStep[]> {
    return this.steps$.asObservable();
  }

  moveToNextStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  moveToPreviousStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index > 0) {
      this.currentStep$.next(this.steps$.value[index-1]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }
}
