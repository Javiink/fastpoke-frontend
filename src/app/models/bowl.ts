import { Ingredient } from "./ingredient";
import { OrderItem } from "./order-item";

export interface Bowl extends OrderItem{
  name: string;
  ingredients: Ingredient[];
  description?: string;
  allergens?: string[];
  image: string;
  sizes: [
    {
      name: string,
      price: number
    }
  ];
  extras?: Ingredient[];
}
