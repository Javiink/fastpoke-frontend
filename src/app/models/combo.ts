import { Bowl } from "./bowl";
import { Drink } from "./drink";
import { OrderItem } from "./order-item";
import { Sidedish } from "./sidedishes";

export interface Combo extends OrderItem{
  bowl: Bowl;
  bowlSize?: BowlSize;
  sidedish?: Sidedish;
  sidedishSize?: SidedishSize;
  drink: Drink;
  price: number;
  allergens: string[];
}

export type SidedishSize = 'small' | 'medium';
export type BowlSize = 'medium' | 'large';
