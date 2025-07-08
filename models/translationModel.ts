/**
 * Translation model for the TuayTua application
 */

import { MenuTranslations } from './types';

/**
 * Menu translations for Thai language
 */
export const thMenuTranslations: MenuTranslations = {
  title: "เมนูของเรา",
  subtitle: "เครื่องดื่มน้ำเต้าหู้สุดพิเศษ",
  slogan: "หอมเนียน อุ่นใจ ถ้วยถั่ว",
  description: "เมนูน้ำเต้าหู้ที่หลากหลาย เน้นสุขภาพ อบอุ่น เรียบง่าย เหมาะกับลูกค้าทุกเพศทุกวัย",
  name: "ชื่อ",
  benefits: "ประโยชน์",
  ingredients: "ส่วนประกอบ",
  price: "ราคา",
  allItems: "ทั้งหมด",
  original: "ดั้งเดิม",
  sweet: "หวาน",
  healthy: "เพื่อสุขภาพ",
  special: "พิเศษ",
  signature: "ซิกเนเจอร์"
};

/**
 * Menu translations for English language
 */
export const enMenuTranslations: MenuTranslations = {
  title: "Our Menu",
  subtitle: "Special Tofu Milk Drinks",
  slogan: "Fragrant, smooth, heartwarming TuayTua",
  description: "A variety of tofu milk drinks focused on health, warmth, and simplicity, suitable for customers of all ages",
  name: "Name",
  benefits: "Benefits",
  ingredients: "Ingredients",
  price: "Price",
  allItems: "All Items",
  original: "Original",
  sweet: "Sweet",
  healthy: "Healthy",
  special: "Special",
  signature: "Signature"
};

/**
 * Get menu translations based on locale
 * @param locale - The current locale (th or en)
 * @returns Menu translations for the specified locale
 */
export function getMenuTranslations(locale: string): MenuTranslations {
  return locale === "th" ? thMenuTranslations : enMenuTranslations;
}