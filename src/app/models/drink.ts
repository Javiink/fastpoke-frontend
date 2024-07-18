import { OrderItem } from "./order-item";

export interface Drink extends OrderItem{
  name: string;
  description?: string;
  image: string;
  allergens?: string[];
  price: number;
}
