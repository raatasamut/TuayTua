/**
 * UI helper functions for the TuayTua application
 */

import { MenuUIHelpers } from './types';

/**
 * Menu UI helper functions and properties
 */
export const menuUIHelpers: MenuUIHelpers = {
  // Background colors for menu items
  colors: [
    "bg-cream", "bg-pink", "bg-soft-green", 
    "bg-pastel-yellow", "bg-pastel-blue", "bg-pastel-orange", 
    "bg-pastel-purple", "bg-blush-pink", "bg-beige", "bg-pastel-yellow"
  ],
  
  // Animation delay options
  delays: ["delay-0", "delay-100", "delay-200", "delay-300", "delay-500", "delay-700"],
  
  /**
   * Get background color based on index
   * @param index - The index of the menu item
   * @returns CSS class name for background color
   */
  getBgColor: function(index: number): string {
    return this.colors[index % this.colors.length];
  },
  
  /**
   * Get a random animation delay
   * @returns CSS class name for animation delay
   */
  getRandomDelay: function(): string {
    return this.delays[Math.floor(Math.random() * this.delays.length)];
  }
};