import { Ingredient } from "./ingredient";

export interface CustomBowl {
  id?: number;
  name: string;
  ingredients: Ingredient[];
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
