import { Ingredient } from "./ingredient";
import { OrderItem } from "./order-item";

export interface Bowl extends OrderItem{
  name: string;
  ingredients: Ingredient[];
  description?: string;
  allergens?: string[];
  image: string;
  price?: {
    medium: number;
    large: number;
  };
  extras?: Ingredient[];
}
