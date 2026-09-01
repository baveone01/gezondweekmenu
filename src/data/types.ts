// Gezondweekmenu.nl – data types & hulpfuncties

export type MealCategory = 'ontbijt' | 'lunch' | 'avondeten' | 'soep' | 'salade' | 'dessert';

export type DietTag =
  | 'gezond'
  | 'vegetarisch'
  | 'vegan'
  | 'koolhydraatarm'
  | 'glutenvrij'
  | 'snel'
  | 'kindervriendelijk';

export interface Ingredient {
  qty?: string;
  name: string;
}

export interface RecipeMeta {
  slug: string;
  title: string;
  intro: string;
  category: MealCategory;
  tags: DietTag[];
  prepMin: number;
  cookMin: number;
  servings: number;
  difficulty: 'gemakkelijk' | 'gemiddeld' | 'uitdagend';
  ingredients: Ingredient[];
  steps: string[];
  variations: { title: string; text: string }[];
  tips: string[];
  nutrition: { kcal: number; protein: number; carbs: number; fat: number; fiber: number };
  imagePrompt: string;
  featured?: boolean;
}

// Categorie => Nederlands label
export const CATEGORY_LABEL: Record<MealCategory, string> = {
  ontbijt: 'Ontbijt',
  lunch: 'Lunch',
  avondeten: 'Avondeten',
  soep: 'Soep',
  salade: 'Salade',
  dessert: 'Dessert',
};

export const CATEGORY_DESC: Record<MealCategory, string> = {
  ontbijt: 'Gezonde en snelle ontbijtjes die je dag met energie starten.',
  lunch: 'Lichte en voedzame lunchideeën voor werk en thuis.',
  avondeten: 'Gezonde avondmaaltijden voor het hele gezin, zonder stress.',
  soep: 'Vullende en gezonde soepen voor elk seizoen.',
  salade: 'Frisse salades als lunch of lichte avondmaaltijd.',
  dessert: 'Gezonde, verantwoorde zoetigheden.',
};

export const CATEGORY_SLUG: Record<MealCategory, string> = {
  ontbijt: 'ontbijt',
  lunch: 'lunch',
  avondeten: 'avondeten',
  soep: 'soep',
  salade: 'salade',
  dessert: 'dessert',
};

// Dieetlabel => label & korte uitleg (voor filterpagina's)
export const DIET_LABEL: Record<DietTag, string> = {
  gezond: 'Gezond',
  vegetarisch: 'Vegetarisch',
  vegan: 'Vegan',
  koolhydraatarm: 'Koolhydraatarm',
  glutenvrij: 'Glutenvrij',
  snel: 'Snel klaar',
  kindervriendelijk: 'Kindvriendelijk',
};

export const DIET_DESC: Record<DietTag, string> = {
  gezond: 'Lekkere, voedzame recepten die passen in een gezond eetpatroon.',
  vegetarisch: 'Recepten zonder vlees, boordevol groenten en plantaardige eiwitten.',
  vegan: '100% plantaardige recepten, zonder dierlijke producten.',
  koolhydraatarm: 'Recepten met weinig koolhydraten, ideaal voor een koolhydraatarm eetpatroon.',
  glutenvrij: 'Recepten zonder gluten, geschikt bij een glutenvrij dieet.',
  snel: 'In 30 minuten of minder op tafel.',
  kindervriendelijk: 'Maaltijden waar ook kieskeurige kleintjes van genieten.',
};

// Gestandaardiseerde receptafbeelding via AI beeldservice
export function foodImage(prompt: string, size = 'landscape_4_3'): string {
  return `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${size}`;
}

// TotalTime in minuten
export function totalMin(r: Pick<RecipeMeta, 'prepMin' | 'cookMin'>): number {
  return r.prepMin + r.cookMin;
}

// Mini ondersteuning: ingredienten in één regel (voor boodschappenlijst)
export function ingrLabel(i: Ingredient): string {
  return i.qty ? `${i.qty} ${i.name}`.trim() : i.name;
}

// ============ Weekmenu ============
export interface MealRef {
  text: string;
  recipeSlug?: string; // optionele link naar een recept
}

export interface WeekMenuDay {
  day: string; // 'Maandag' ... 'Zondag'
  theme: string;
  ontbijt: MealRef;
  lunch: MealRef;
  avondeten: MealRef;
  snack: MealRef;
}

export interface WeekMenu {
  slug: string;
  title: string;
  weekLabel: string;
  description: string;
  intro: string;
  days: WeekMenuDay[];
  shoppingList: { group: string; items: string[] }[];
  prepTips: string[];
  faq: { q: string; a: string }[];
  imagePrompt: string;
  featured?: boolean;
}