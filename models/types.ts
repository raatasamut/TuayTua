/**
 * Type definitions for the TuayTua application
 */

/**
 * Represents a menu item in the application
 */
export interface MenuItem {
  name: string;
  description?: string;
  benefits: string;
  ingredients: string;
  price: string;
}

/**
 * Represents a collection of menu items by category
 */
export interface MenuCategories {
  signature: number[];
  original: number[];
  sweet: number[];
  healthy: number[];
  special: number[];
}

/**
 * Represents UI-related properties for menu display
 */
export interface MenuUIHelpers {
  colors: string[];
  delays: string[];
  getBgColor: (index: number) => string;
  getRandomDelay: () => string;
}

/**
 * Represents menu-related translations
 */
export interface MenuTranslations {
  title: string;
  subtitle: string;
  slogan: string;
  description: string;
  name: string;
  benefits: string;
  ingredients: string;
  price: string;
  allItems: string;
  original: string;
  sweet: string;
  healthy: string;
  special: string;
  signature: string;
}