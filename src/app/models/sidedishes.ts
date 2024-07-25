import { OrderItem } from "./order-item";

export interface Sidedish extends OrderItem {
  allergens ?: string[];
  sizes: [
    {
      name: string,
      price: number
    }
  ];
}
