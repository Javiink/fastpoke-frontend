export interface Ingredient {
  id: string;
  name: string;
  slot: IngredientSlots;
  description?: string;
  allergens?: string[];
  image: string;
  price?: number;
}

export type IngredientSlots = 'base' | 'sauce' | 'protein' | 'topping' | 'sprinkle';
