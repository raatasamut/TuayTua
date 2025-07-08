"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default function HomePage({ params }: HomePageProps) {
  const locale = React.use(params).locale || "th";
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const translations = {
    th: {
      title: "ถ้วยถั่ว",
      subtitle: "คาเฟ่น้ำเต้าหู้มินิมอล",
      slogan: "สุขภาพดี เริ่มต้นที่ถ้วยถั่ว",
      welcomeMessage: "ยินดีต้อนรับสู่ร้านถ้วยถั่ว",
      description: "น้ำเต้าหู้คุณภาพสูง เน้นสุขภาพ อบอุ่น เรียบง่าย เหมาะกับลูกค้าทุกเพศทุกวัย",
      ctaButton: "ดูเพิ่มเติม",
      featuredProducts: "เมนูแนะนำ",
      original: "ถ้วยอุ่น",
      originalDesc: "น้ำเต้าหู้ร้อน หอม อุ่นใจ, อุดมไปด้วยโปรตีน ช่วยบำรุงกระดูกและกล้ามเนื้อ ให้ความอบอุ่นแก่ร่างกาย",
      sweetened: "ถ้วยดำ",
      sweetenedDesc: "น้ำเต้าหู้งาดำ เข้มข้น เต็มคุณค่า, อุดมไปด้วยแคลเซียมและวิตามินอี ช่วยบำรุงกระดูกและผิวพรรณ",
      unsweetened: "ถ้วยเต็ม",
      unsweetenedDesc: "น้ำเต้าหู้ธัญพืชรวม เต็มถ้วย เต็มคุณค่า, ให้พลังงานสูง อุดมไปด้วยใยอาหาร ช่วยบำรุงสุขภาพโดยรวม"
    },
    en: {
      title: "TuayTua",
      subtitle: "Minimalist Tofu Milk Cafe",
      slogan: "Good health starts with TuayTua",
      welcomeMessage: "Welcome to TuayTua",
      description: "High-quality tofu milk focused on health, warmth, and simplicity, suitable for customers of all ages",
      ctaButton: "Learn More",
      featuredProducts: "Featured Menu",
      original: "Warm Cup",
      originalDesc: "Hot Soy Milk – smooth, comforting warmth, Rich in protein, helps strengthen bones and muscles, provides warmth to the body",
      sweetened: "Black Cup",
      sweetenedDesc: "Black Sesame Soy Milk – rich and nutty, Rich in calcium and vitamin E, helps strengthen bones and skin",
      unsweetened: "Full Cup",
      unsweetenedDesc: "Mixed Grain Soy Milk – hearty and wholesome, High energy, rich in fiber, promotes overall health"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.th;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full border-8 border-pink opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/6 w-48 h-48 rounded-full border-8 border-soft-green opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 rounded-full border-8 border-pastel-yellow opacity-15 animate-pulse-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-blush-pink dark:bg-gray-900 py-16 md:py-24 rounded-b-4xl overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`flex flex-col md:flex-row items-center transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-2 border-gray-200 dark:border-gray-600 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {t.title}
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3">
                  {t.subtitle}
                </h2>
                <h3 className="text-lg md:text-xl text-pink dark:text-pink-300 font-medium mb-4 italic">
                  {t.slogan}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-md">
                  {t.description}
                </p>
                <Link
                  href={`/${locale}/our-story`}
                  className="inline-block bg-soft-green hover:bg-pastel-yellow dark:bg-green-700 dark:hover:bg-green-600 text-gray-800 dark:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  {t.ctaButton}
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/banner/banner.png"
                  alt="TuayTua Tofu Milk"
                  width={500}
                  height={500}
                  className="w-full h-full object-fill"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative bg-white dark:bg-gray-800 py-16 overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="relative inline-block">
              <div className="inline-block bg-pastel-yellow dark:bg-gray-700 px-8 py-4 rounded-bubble shadow-lg transform -rotate-1 border-4 border-white dark:border-gray-600">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white relative inline-block">
                  {t.featuredProducts}
                  <span className="absolute -bottom-2 left-0 right-0 h-2 bg-pink rounded-full"></span>
                </h2>
              </div>

              {/* Decorative milk splash */}
              <div className="absolute -top-8 -right-8 w-16 h-16 animate-pulse-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" 
                    fill="white" stroke="#4A5568" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}`}>
            {/* Product 1 */}
            <div className="bg-cream dark:bg-gray-700 rounded-3xl p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl border-4 border-white dark:border-gray-700 group">
              <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden bg-white p-2 group-hover:bg-opacity-80 transition-all duration-300">
                {/* Decorative bubbles inside the image container */}
                <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-cream opacity-40 animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-cream opacity-30 animate-float-delay"></div>

                <Image
                  src="/menu/menu-item-1.png"
                  alt="Warm Cup"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300 rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative inline-block group">
                {t.original}
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-soft-green rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 relative">
                {t.originalDesc}
                <span className="absolute -bottom-2 right-0 w-8 h-8 opacity-20 animate-float-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" fill="currentColor" />
                  </svg>
                </span>
              </p>
            </div>

            {/* Product 2 */}
            <div className="bg-pink dark:bg-gray-700 rounded-3xl p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl border-4 border-white dark:border-gray-700 group">
              <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden bg-white p-2 group-hover:bg-opacity-80 transition-all duration-300">
                {/* Decorative hearts inside the image container */}
                <div className="absolute top-1/3 left-1/4 w-8 h-8 opacity-30 animate-float-delay">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" fill="#F8D7DA" />
                  </svg>
                </div>
                <div className="absolute bottom-1/3 right-1/4 w-6 h-6 opacity-30 animate-float">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" fill="#F8D7DA" />
                  </svg>
                </div>

                <Image
                    src="/menu/menu-item-4.png"
                  alt="Black Cup"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative inline-block group">
                {t.sweetened}
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-pink rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 relative">
                {t.sweetenedDesc}
                <span className="absolute -bottom-2 right-0 w-8 h-8 opacity-20 animate-float-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M30,10 L70,10 L90,30 L90,70 L70,90 L30,90 L10,70 L10,30 Z" fill="currentColor" />
                  </svg>
                </span>
              </p>
            </div>

            {/* Product 3 */}
            <div className="bg-soft-green dark:bg-gray-700 rounded-3xl p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl border-4 border-white dark:border-gray-700 group">
              <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden bg-white p-2 group-hover:bg-opacity-80 transition-all duration-300">
                {/* Decorative leaf elements */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 opacity-30 animate-float">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#D1E7DD" />
                    <path d="M50,20 Q70,50 50,80 Q30,50 50,20" fill="none" stroke="#8BC34A" strokeWidth="2" />
                  </svg>
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 opacity-30 animate-float-delay">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#D1E7DD" />
                    <path d="M50,20 Q70,50 50,80 Q30,50 50,20" fill="none" stroke="#8BC34A" strokeWidth="2" />
                  </svg>
                </div>

                <Image
                    src="/menu/menu-item-6.png"
                  alt="Full Cup"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative inline-block group">
                {t.unsweetened}
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-soft-green rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 relative">
                {t.unsweetenedDesc}
                <span className="absolute -bottom-2 right-0 w-8 h-8 opacity-20 animate-float-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="currentColor" />
                  </svg>
                </span>
              </p>
            </div>
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
