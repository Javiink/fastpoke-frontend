import { CustomBowl } from "./custom-bowl";
import { Size } from "./size";

export interface OrderItem {
  id: string;
  name: string;
  description?: string;
  image: string;
}
export type OrderItemData = {
  index?: number;
  category: ItemCategory;
  item: (OrderItem | CustomBowl);
  size?: Size;
  price?: number;
};

export type ItemCategory = 'bowls' | 'combos' | 'drinks' | 'sidedishes' | 'custom-bowl';

