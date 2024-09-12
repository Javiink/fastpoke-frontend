import { SelectableIngredient } from "./ingredient";

export interface CustomBowl {
  id?: number;
  name: string;
  ingredients: SelectableIngredient[];
  image: string;
  size: {
    name: string,
    price: number
  };
}

export interface CustomBowlSize {
  name: 'medium' | 'large',
  price: 10.90   | 13.90
}
