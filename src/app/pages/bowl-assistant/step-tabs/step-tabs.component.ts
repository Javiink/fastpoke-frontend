import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomBowlStep } from '../../../models/custom-bowl-step.model';
import { StepsService } from '../../../services/step.service';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-step-tabs',
  standalone: true,
  imports: [AsyncPipe, NgClass],
  templateUrl: './step-tabs.component.html',
  styles: ``
})
export class StepTabsComponent {
  steps: Observable<CustomBowlStep[]>;
  currentStep: Observable<CustomBowlStep>;

  constructor(private stepService: StepsService) {
    this.steps = this.stepService.getSteps();
    this.currentStep = this.stepService.getCurrentStep();
  }

  onStepClick(step: CustomBowlStep) {
    this.stepService.setCurrentStep(step);
  }
}
