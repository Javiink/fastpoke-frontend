import { Type } from "@angular/core";
import { IngredientSlots } from "./ingredient";

export interface CustomBowlStep {
  label: string;
  title: string;
  path: string;
  stepIndex: number;
  isComplete?: boolean;
  selectorType: 'quantity' | 'selectable';
}
export interface CustomBowlAdjacentSteps {
  prev: CustomBowlStep | null,
  next: CustomBowlStep | null
}

