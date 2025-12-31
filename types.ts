
export interface Ingredient {
  item: string;
  quantity?: string;
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export enum Category {
  WHEY = 'Whey Protein',
  YOGURT = 'Iogurte Grego',
  COCONUT = 'Leite de Coco',
  COFFEE_CHOC = 'Café e Chocolate',
  RED_FRUIT = 'Frutas Vermelhas',
  TROPICAL = 'Frutas Tropicais',
  BANANA = 'Banana',
  SPICES = 'Especiarias',
  MATCHA_TEA = 'Matcha e Chá',
  NUTS = 'Nozes e Sementes',
  NATURAL_YOGURT = 'Iogurte Natural',
  GELATO = 'Gelato',
  SMOOTHIE = 'Smoothie Bowl',
  SORBET = 'Sorbets (Frutas Puras)',
  SPECIAL = 'Especiais',
}

export interface Recipe {
  id: string;
  title: string;
  category: Category;
  nutrition: Nutrition;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
  mode?: string; // e.g., "Lite Ice Cream", "Gelato"
  yield?: string; // e.g., "400g"
}

export interface FilterState {
  search: string;
  categories: Category[];
  maxCalories: number | null;
  minProtein: number | null;
}
