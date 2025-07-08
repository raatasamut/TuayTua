/**
 * Menu model for the TuayTua application
 */

import { MenuItem, MenuCategories } from './types';

/**
 * Available menu category names
 */
export const categoryNames = ["all", "signature", "original", "sweet", "healthy", "special"];

/**
 * Get menu items based on locale
 * @param locale - The current locale (th or en)
 * @returns Array of menu items
 */
export function getMenuItems(locale: string): MenuItem[] {
  return locale === "th" 
    ? require("../locales/th.json").menu.items 
    : require("../locales/en.json").menu.items;
}

/**
 * Menu categories with their corresponding item indices
 */
export const menuCategories: MenuCategories = {
  signature: [0, 1, 2, 3, 4, 5], // Signature items: Warm Cup, Cold Cup, Green Cup, Black Cup, Clear Cup, Full Cup
  original: [6, 7, 8], // Original, Sweetened, Unsweetened
  sweet: [7, 11, 13, 14, 15], // Sweetened, Chocolate, Honey, Banana, Strawberry
  healthy: [8, 9, 10, 12], // Unsweetened, Black Sesame, Almond, Matcha
  special: [9, 10, 12, 13, 15] // Black Sesame, Almond, Matcha, Honey, Strawberry
};

/**
 * Filter menu items by category
 * @param items - All menu items
 * @param category - Category to filter by (or "all" for all items)
 * @returns Filtered menu items
 */
export function filterMenuItemsByCategory(items: MenuItem[], category: string): MenuItem[] {
  if (category === "all") {
    return items;
  }

  const categoryIndices = menuCategories[category as keyof MenuCategories];
  if (!categoryIndices) {
    return items; // Return all items if category doesn't exist
  }

  return items.filter((_, index) => categoryIndices.includes(index));
}

/**
 * Get the original index of a menu item in the full menu items array
 * @param allItems - All menu items
 * @param item - The item to find
 * @returns The index of the item in the full array
 */
export function getOriginalIndex(allItems: MenuItem[], item: MenuItem): number {
  return allItems.findIndex((menuItem) => menuItem.name === item.name);
}
