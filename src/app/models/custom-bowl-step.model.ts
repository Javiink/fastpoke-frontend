import { Component, ComponentDecorator, Type } from "@angular/core";

export interface CustomBowlStep {
  title: string;
  component: Type<any>;
  path: string;
  stepIndex: number;
  isComplete?: boolean;
}

