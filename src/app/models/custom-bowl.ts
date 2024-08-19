import { Ingredient } from "./ingredient";

export interface CustomBowl {
  ingredients: Ingredient[];
  sizes: [
    {
      name: string,
      price: number
    }
  ];
}
