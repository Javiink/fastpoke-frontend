import { Bowl } from "./bowl";
import { Drink } from "./drink";
import { OrderItem } from "./order-item";
import { Sidedish } from "./sidedishes";

export interface Combo extends OrderItem{
  bowl: Bowl;
  sidedish?: Sidedish;
  sidedishSize?: SidedishSizes;
  drink: Drink;
  price: number;
}

export type SidedishSizes = 'small' | 'medium';
