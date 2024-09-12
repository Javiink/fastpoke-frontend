import { SelectableIngredient } from "./ingredient";

export interface CustomBowlStep {
  label: string;
  title: string;
  path: string;
  index: number;
  completed: boolean;
  selectorType: 'quantity' | 'selectable';
}
export interface CustomBowlAdjacentSteps {
  prev: CustomBowlStep | null,
  next: CustomBowlStep | null
}
export interface StepIngredientsEvent {
  step: CustomBowlStep;
  ingredients: SelectableIngredient[];
}

