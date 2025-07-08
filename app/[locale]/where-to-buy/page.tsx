"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

type WhereToBuyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default function WhereToBuyPage({ params }: WhereToBuyPageProps) {
  const locale = React.use(params).locale || "th";
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const translations = {
    th: {
      title: "จุดจำหน่าย",
      subtitle: "หาซื้อได้ที่ไหน",
      description: "คุณสามารถหาซื้อนมถั่วเหลืองของเราได้ที่ร้านค้าต่อไปนี้",
      onlineStores: "ร้านค้าออนไลน์",
      physicalStores: "ร้านค้าทั่วไป",
      contactUs: "ติดต่อเรา",
      contactDescription: "หากคุณต้องการสั่งซื้อโดยตรงหรือมีคำถามเกี่ยวกับผลิตภัณฑ์ของเรา โปรดติดต่อเราที่",
      phone: "โทร: 02-123-4567",
      email: "อีเมล: info@soymilk.com",
      address: "123 ถนนสุขุมวิท กรุงเทพฯ 10110",
      storeLocations: "ที่ตั้งร้านค้า",
      bangkok: "กรุงเทพมหานคร",
      chiangMai: "เชียงใหม่",
      phuket: "ภูเก็ต"
    },
    en: {
      title: "Where to Buy",
      subtitle: "Find Our Products",
      description: "You can find our soy milk at the following stores:",
      onlineStores: "Online Stores",
      physicalStores: "Physical Stores",
      contactUs: "Contact Us",
      contactDescription: "If you would like to order directly or have questions about our products, please contact us at:",
      phone: "Tel: 02-123-4567",
      email: "Email: info@soymilk.com",
      address: "123 Sukhumvit Road, Bangkok 10110",
      storeLocations: "Store Locations",
      bangkok: "Bangkok",
      chiangMai: "Chiang Mai",
      phuket: "Phuket"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.th;

  const onlineStores = [
    {
      name: "Shopee",
      url: "https://shopee.co.th",
      logo: "/shopee-logo.svg"
    },
    {
      name: "Lazada",
      url: "https://lazada.co.th",
      logo: "/lazada-logo.svg"
    },
    {
      name: "Line Shopping",
      url: "https://shop.line.me",
      logo: "/line-shopping-logo.svg"
    }
  ];

  const physicalStores = {
    bangkok: [
      "Central World, ชั้น G",
      "Siam Paragon, ชั้น B",
      "EmQuartier, ชั้น M",
      "Terminal 21 Asoke, ชั้น G",
      "Icon Siam, ชั้น M"
    ],
    chiangMai: [
      "Maya Shopping Center, ชั้น 2",
      "Central Festival Chiang Mai, ชั้น G",
      "Nimman Promenade, ซอย 1"
    ],
    phuket: [
      "Central Phuket Festival, ชั้น 1",
      "Jungceylon Shopping Mall, ชั้น G",
      "Porto de Phuket, ถนนเทพกระษัตรี"
    ]
  };

  return (
    <div className="bg-cream dark:bg-gray-900 min-h-screen overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full border-8 border-soft-green opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/6 w-48 h-48 rounded-full border-8 border-pink opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 rounded-full border-8 border-pastel-yellow opacity-15 animate-pulse-slow"></div>
      </div>
      {/* Header Section with Decorative Elements */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Decorative bubbles */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-soft-green opacity-50 animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-pink opacity-40 animate-float-delay"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-pastel-yellow opacity-30 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-pastel-blue opacity-25 animate-float-sideways"></div>

        {/* Store location pin decoration */}
        <div className="absolute -right-6 top-1/2 w-24 h-24 opacity-20 animate-float-delay">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,10 C30,10 15,25 15,45 C15,75 50,90 50,90 C50,90 85,75 85,45 C85,25 70,10 50,10 Z" fill="currentColor" className="text-gray-400" />
            <circle cx="50" cy="45" r="10" fill="white" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
            {/* Cute title container with animated elements */}
            <div className="relative inline-block">
              <div className="inline-block bg-soft-green dark:bg-gray-700 px-10 py-6 rounded-bubble shadow-lg transform -rotate-2 mb-4 border-4 border-white dark:border-gray-600">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative inline-block">
                  {t.title}
                  <span className="absolute -bottom-2 left-0 right-0 h-2 bg-pink rounded-full"></span>
                </h1>
              </div>

              {/* Decorative map pin */}
              <div className="absolute -top-8 -right-8 w-16 h-16 animate-pulse-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50,10 C30,10 15,25 15,45 C15,75 50,90 50,90 C50,90 85,75 85,45 C85,25 70,10 50,10 Z" fill="#F8D7DA" stroke="#4A5568" strokeWidth="2" />
                  <circle cx="50" cy="45" r="10" fill="white" stroke="#4A5568" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-6 font-medium">
              {t.subtitle}
            </h2>

            <p className={`mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
              {t.description}
            </p>
          </div>
        </div>
      </section>

      {/* Online Stores Section */}
      <section className="bg-pink dark:bg-gray-800 py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-16 h-16 opacity-20 animate-float-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="currentColor" className="text-white" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 opacity-20 animate-float-delay">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="currentColor" className="text-white" />
          </svg>
        </div>

        {/* Shopping cart decoration */}
        <div className="absolute -left-6 top-1/3 w-24 h-24 opacity-20 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M30,30 L80,30 L70,60 L40,60 Z" fill="currentColor" className="text-white" />
            <circle cx="45" cy="70" r="5" fill="currentColor" className="text-white" />
            <circle cx="65" cy="70" r="5" fill="currentColor" className="text-white" />
            <path d="M20,20 L30,30" stroke="currentColor" strokeWidth="2" className="text-white" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="inline-block bg-white dark:bg-gray-700 px-8 py-4 rounded-bubble shadow-lg transform rotate-1 border-4 border-white dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white relative inline-block">
                {t.onlineStores}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-soft-green rounded-full"></span>
              </h2>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}`}>
            {onlineStores.map((store, index) => {
              // Generate random animation delay for staggered appearance
              const delays = ["delay-0", "delay-100", "delay-200"];
              const delay = delays[index % delays.length];

              return (
                <a 
                  key={index}
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white dark:bg-gray-700 rounded-3xl p-6 shadow-lg border-4 border-white dark:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-xl flex flex-col items-center transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 ${delay}`}
                >
                  <div className="relative w-32 h-32 mb-4 group">
                    {/* Decorative elements inside the logo container */}
                    <div className="absolute inset-0 bg-pastel-yellow bg-opacity-10 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-pink opacity-20 animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-soft-green opacity-20 animate-float-delay"></div>

                    <Image
                      src={store.logo}
                      alt={store.name}
                      fill
                      style={{ objectFit: "contain" }}
                      className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white relative inline-block group">
                    {store.name}
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-pink rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </h3>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Physical Stores Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-10 w-20 h-20 opacity-20 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="currentColor" className="text-soft-green" />
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-10 w-16 h-16 opacity-20 animate-float-delay">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="currentColor" className="text-pink" />
          </svg>
        </div>

        {/* Map decoration */}
        <div className="absolute -right-10 bottom-0 w-40 h-40 opacity-10 animate-float-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M20,20 C40,10 60,30 80,20 C100,10 120,30 140,20 C160,10 180,30 180,50 C180,70 160,90 140,80 C120,70 100,90 80,80 C60,70 40,90 20,80 C0,70 0,30 20,20 Z" fill="#D1E7DD" />
            <circle cx="50" cy="40" r="5" fill="#F8D7DA" />
            <circle cx="120" cy="60" r="5" fill="#F8D7DA" />
            <circle cx="80" cy="30" r="5" fill="#F8D7DA" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="inline-block bg-pastel-blue dark:bg-gray-700 px-8 py-4 rounded-bubble shadow-lg transform -rotate-1 border-4 border-white dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white relative inline-block">
                {t.physicalStores}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-pink rounded-full"></span>
              </h2>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}`}>
            {/* Bangkok Stores */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border-4 border-white dark:border-gray-600 transform rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-xl group">
              <div className="relative mb-4">
                <div className="absolute -top-3 -right-3 w-12 h-12 animate-pulse-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,10 C30,10 15,25 15,45 C15,75 50,90 50,90 C50,90 85,75 85,45 C85,25 70,10 50,10 Z" fill="#F8D7DA" stroke="#4A5568" strokeWidth="2" />
                    <circle cx="50" cy="45" r="10" fill="white" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block group-hover:text-pink transition-colors duration-300">
                  {t.bangkok}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-pink rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </h3>
              </div>
              <ul className="space-y-3">
                {physicalStores.bangkok.map((store, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 pl-6 relative">
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-pink bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                    {store}
                  </li>
                ))}
              </ul>
            </div>

            {/* Chiang Mai Stores */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border-4 border-white dark:border-gray-600 transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-xl group">
              <div className="relative mb-4">
                <div className="absolute -top-3 -right-3 w-12 h-12 animate-pulse-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,10 C30,10 15,25 15,45 C15,75 50,90 50,90 C50,90 85,75 85,45 C85,25 70,10 50,10 Z" fill="#D1E7DD" stroke="#4A5568" strokeWidth="2" />
                    <circle cx="50" cy="45" r="10" fill="white" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block group-hover:text-soft-green transition-colors duration-300">
                  {t.chiangMai}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-soft-green rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </h3>
              </div>
              <ul className="space-y-3">
                {physicalStores.chiangMai.map((store, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 pl-6 relative">
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-soft-green bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                    {store}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phuket Stores */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border-4 border-white dark:border-gray-600 transform rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-xl group">
              <div className="relative mb-4">
                <div className="absolute -top-3 -right-3 w-12 h-12 animate-pulse-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,10 C30,10 15,25 15,45 C15,75 50,90 50,90 C50,90 85,75 85,45 C85,25 70,10 50,10 Z" fill="#FFF9C4" stroke="#4A5568" strokeWidth="2" />
                    <circle cx="50" cy="45" r="10" fill="white" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block group-hover:text-pastel-yellow transition-colors duration-300">
                  {t.phuket}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-pastel-yellow rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </h3>
              </div>
              <ul className="space-y-3">
                {physicalStores.phuket.map((store, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 pl-6 relative">
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-pastel-yellow bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                    {store}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-soft-green dark:bg-gray-800 py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-16 h-16 opacity-20 animate-float-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="currentColor" className="text-white" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 opacity-20 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="currentColor" className="text-white" />
          </svg>
        </div>

        {/* Envelope decoration */}
        <div className="absolute -left-6 top-1/3 w-24 h-24 opacity-20 animate-float-delay">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="10" y="20" width="80" height="60" fill="currentColor" className="text-white" />
            <path d="M10,20 L50,50 L90,20" stroke="currentColor" strokeWidth="2" fill="none" className="text-white" />
            <path d="M10,80 L40,50" stroke="currentColor" strokeWidth="2" fill="none" className="text-white" />
            <path d="M90,80 L60,50" stroke="currentColor" strokeWidth="2" fill="none" className="text-white" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 transform -rotate-1 hover:rotate-0 transition-transform duration-300 group">
                {/* Decorative elements inside the image container */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white opacity-20 animate-float z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-white opacity-20 animate-float-delay z-10"></div>

                <Image
                  src="/contact.svg"
                  alt="Contact Us"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border-2 border-gray-200 dark:border-gray-600 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-4 w-12 h-12 animate-pulse-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M20,30 C20,20 80,20 80,30 L80,70 C80,80 20,80 20,70 L20,30 Z" fill="#D1E7DD" stroke="#4A5568" strokeWidth="2" />
                      <path d="M20,30 L50,50 L80,30" stroke="#4A5568" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 relative inline-block">
                    {t.contactUs}
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-soft-green rounded-full"></span>
                  </h2>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 relative">
                  {t.contactDescription}
                  <span className="absolute -right-2 top-1/2 w-6 h-6 opacity-20 animate-float-sideways">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" fill="currentColor" />
                    </svg>
                  </span>
                </p>

                <address className="not-italic text-gray-700 dark:text-gray-300 space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-soft-green bg-opacity-20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p>{t.address}</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-pink bg-opacity-20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <p>{t.phone}</p>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-pastel-yellow bg-opacity-20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p>{t.email}</p>
                  </div>
                </address>
              </div>
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
