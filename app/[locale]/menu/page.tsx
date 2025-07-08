"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MenuItem } from "@/models/types";
import { getMenuItems, filterMenuItemsByCategory, getOriginalIndex, categoryNames } from "@/models/menuModel";
import { menuUIHelpers } from "@/models/uiHelpers";
import { getMenuTranslations } from "@/models/translationModel";

type MenuPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default function MenuPage({ params }: MenuPageProps) {
  const locale = React.use(params).locale || "th";
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Get translations from the model
  const t = getMenuTranslations(locale);

  // Get menu items from the model
  const menuItems = getMenuItems(locale);

  // Filter menu items by category using the model
  const filteredItems = filterMenuItemsByCategory(menuItems, activeCategory);

  // Get UI helper functions from the model
  const getBgColor = menuUIHelpers.getBgColor.bind(menuUIHelpers);
  const getRandomDelay = menuUIHelpers.getRandomDelay.bind(menuUIHelpers);

  return (
    <div className="bg-cream dark:bg-gray-900 min-h-screen overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full border-8 border-pink opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/6 w-48 h-48 rounded-full border-8 border-soft-green opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 rounded-full border-8 border-pastel-yellow opacity-15 animate-pulse-slow"></div>
      </div>

      {/* Header Section with Decorative Elements */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Decorative bubbles */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink opacity-50 animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-soft-green opacity-40 animate-float-delay"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-pastel-yellow opacity-30 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-pastel-blue opacity-25 animate-float-sideways"></div>

        {/* Cute milk bottle decorations */}
        <div className="absolute -left-6 top-1/2 w-24 h-24 opacity-20 animate-float-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="35" y="20" width="30" height="60" rx="5" fill="currentColor" className="text-gray-400" />
            <rect x="40" y="10" width="20" height="10" rx="3" fill="currentColor" className="text-gray-400" />
            <ellipse cx="50" cy="80" rx="15" ry="5" fill="currentColor" className="text-gray-400" />
          </svg>
        </div>
        <div className="absolute -right-6 top-2/3 w-24 h-24 opacity-20 animate-float-delay">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M30,30 L70,30 L65,80 L35,80 Z" fill="currentColor" className="text-gray-400" />
            <path d="M35,30 C35,20 65,20 65,30" fill="currentColor" className="text-gray-400" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
            {/* Cute title container with animated elements */}
            <div className="relative inline-block">
              <div className="inline-block bg-pastel-yellow dark:bg-gray-700 px-10 py-6 rounded-bubble shadow-lg transform -rotate-2 mb-4 border-4 border-white dark:border-gray-600">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative inline-block">
                  {t.title}
                  <span className="absolute -bottom-2 left-0 right-0 h-2 bg-pink rounded-full"></span>
                </h1>
              </div>

              {/* Decorative milk splash */}
              <div className="absolute -top-8 -right-8 w-16 h-16 animate-pulse-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" 
                    fill="white" stroke="#4A5568" strokeWidth="2" />
                </svg>
              </div>

              {/* Cute soybean decoration */}
              <div className="absolute -bottom-4 -left-8 w-16 h-16 animate-float-sideways">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <ellipse cx="50" cy="50" rx="30" ry="40" fill="#D1E7DD" stroke="#4A5568" strokeWidth="2" />
                  <path d="M50,30 Q60,50 50,70 Q40,50 50,30" fill="none" stroke="#4A5568" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-6 font-medium">
              {t.subtitle}
            </h2>

            <h3 className="mt-3 text-lg md:text-xl text-pink dark:text-pink-300 font-medium italic">
              {t.slogan}
            </h3>

            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            {categoryNames.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category 
                    ? "bg-pink dark:bg-pink text-green-900 shadow-md scale-105" 
                    : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:bg-pink hover:text-white"
                }`}
              >
                {t[category as keyof typeof t] ?? (locale === 'th' ? 'ทั้งหมด' : 'ALL MENU')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="pb-16 md:pb-24 relative">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-16 h-16 opacity-20 animate-float-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="currentColor" className="text-gray-400" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 opacity-20 animate-float-delay">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="currentColor" className="text-gray-400" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Menu Items Grid with Masonry-like layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item: MenuItem, index: number) => {
              const originalIndex = getOriginalIndex(menuItems, item);
              const delay = getRandomDelay();

              return (
                <div 
                  key={index} 
                  className={`${getBgColor(originalIndex)} dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-700 transform hover:scale-105 transition-all duration-500 hover:shadow-xl ${
                    index % 3 === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""
                  } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} transition-all ${delay}`}
                >
                  <div className="relative p-4">

                    {/* Image with animated container */}
                    <div className="relative h-48 flex items-center justify-center mb-4 overflow-hidden group">
                      <div className="absolute inset-0 bg-white rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="absolute inset-0 bg-opacity-10 rounded-2xl">
                        {/* Decorative bubbles inside the image container */}
                        <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-white opacity-40 animate-float"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-white opacity-30 animate-float-delay"></div>
                      </div>
                      <Image
                        src={`/menu/menu-item-${originalIndex + 1}.png`}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="h-40 w-auto object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300 rounded-2xl"
                      />
                    </div>

                    {/* Content with playful design */}
                    <div className="bg-white dark:bg-gray-700 rounded-2xl p-5 shadow-inner">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative inline-block group">
                        {item.name} ({item.price})
                        <span className="absolute -bottom-1 left-0 right-0 h-1 bg-soft-green rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      </h3>

                      {item.description && (
                        <p className="text-md text-pink dark:text-pink-300 italic mb-3">
                          {item.description}
                        </p>
                      )}

                      {/* Benefits section with cute icon */}
                      <div className="mb-3 bg-soft-green bg-opacity-20 dark:bg-opacity-10 rounded-xl p-3 relative overflow-hidden hover:bg-opacity-30 transition-all duration-300 group">
                        <div className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 transform group-hover:rotate-12 transition-transform duration-300">
                          <svg viewBox="0 0 100 100" className="w-full h-full text-soft-green opacity-20">
                            <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" 
                              fill="currentColor" />
                          </svg>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center">
                          <span className="w-5 h-5 bg-soft-green rounded-full flex items-center justify-center mr-2 text-green-900 text-xs group-hover:scale-110 transition-transform duration-300">✓</span>
                          {t.benefits}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {item.benefits}
                        </p>
                      </div>

                      {/* Ingredients section with cute icon */}
                      <div className="bg-blush-pink bg-opacity-20 dark:bg-opacity-10 rounded-xl p-3 relative overflow-hidden hover:bg-opacity-30 transition-all duration-300 group">
                        <div className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 transform group-hover:-rotate-12 transition-transform duration-300">
                          <svg viewBox="0 0 100 100" className="w-full h-full text-blush-pink opacity-20">
                            <path d="M30,10 L70,10 L90,30 L90,70 L70,90 L30,90 L10,70 L10,30 Z" 
                              fill="currentColor" />
                          </svg>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center">
                          <span className="w-5 h-5 bg-blush-pink rounded-full flex items-center justify-center mr-2 text-green-900 text-xs group-hover:scale-110 transition-transform duration-300">♥</span>
                          {t.ingredients}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {item.ingredients}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cute footer decoration */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
            <path d="M0,0 C150,90 350,0 500,80 C650,160 750,40 900,100 C1050,160 1150,60 1200,80 L1200,120 L0,120 Z" 
              className="fill-current text-pink opacity-30"></path>
            <path d="M0,40 C150,130 350,40 500,120 L0,120 Z" 
              className="fill-current text-soft-green opacity-20"></path>
            <path d="M1200,40 C1050,130 850,40 700,120 L1200,120 Z" 
              className="fill-current text-pastel-yellow opacity-20"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
