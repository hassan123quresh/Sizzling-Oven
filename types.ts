
export type Category = 
  | 'All' 
  | 'Pizza' 
  | 'Burgers' 
  | 'Steaks' 
  | 'Fried Chicken' 
  | 'Wings' 
  | 'Sandwiches' 
  | 'Wraps' 
  | 'Rolls' 
  | 'Pasta' 
  | 'Fries' 
  | 'Soup' 
  | 'Hot Drinks' 
  | 'Cold Drinks';

export interface PriceVariation {
  size: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // Used as "Starting from" price
  variations?: PriceVariation[]; // Optional array for multiple sizes/types
  image: string;
  category: Category;
  isFeatured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
