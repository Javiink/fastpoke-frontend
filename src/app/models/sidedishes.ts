import { OrderItem } from "./order-item";

export interface Sidedish extends OrderItem {
  allergens ?: string[];
  price: {
    small: number;
    medium: number;
  };
}
