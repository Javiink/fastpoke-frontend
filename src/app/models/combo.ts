import { Bowl } from "./bowl";
import { Drink } from "./drink";
import { OrderItem } from "./order-item";
import { Sidedish } from "./sidedishes";

export interface Combo extends OrderItem{
  bowl: Bowl;
  bowlSize?: BowlSizes;
  sidedish?: Sidedish;
  sidedishSize?: SidedishSizes;
  drink: Drink;
  price: number;
  allergens: string[];
}

export type SidedishSizes = 'small' | 'medium';
export type BowlSizes = 'medium' | 'large';
