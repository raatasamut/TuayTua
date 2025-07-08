"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

type IngredientsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default function IngredientsPage({ params }: IngredientsPageProps) {
  const locale = React.use(params).locale || "th";
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const translations = {
    th: {
      title: "แหล่งผลิตวัตถุดิบ",
      subtitle: "จากไร่สู่แก้ว",
      description: "เราคัดสรรถั่วเหลืองออร์แกนิคคุณภาพสูงจากเกษตรกรท้องถิ่น ที่ปลูกด้วยความใส่ใจและไม่ใช้สารเคมี",
      farmToTable: "จากไร่สู่โต๊ะอาหาร",
      farmToTableDescription: "เรามุ่งมั่นที่จะสร้างความยั่งยืนให้กับชุมชนและสิ่งแวดล้อม ด้วยการสนับสนุนเกษตรกรท้องถิ่นและใช้วัตถุดิบที่ปลูกอย่างยั่งยืน",
      organicFarming: "การเกษตรแบบออร์แกนิค",
      organicFarmingDescription: "เกษตรกรของเราใช้วิธีการปลูกแบบออร์แกนิค ไม่ใช้สารเคมีหรือยาฆ่าแมลง เพื่อให้ได้ถั่วเหลืองที่มีคุณภาพสูงและปลอดภัยต่อผู้บริโภค",
      qualityControl: "การควบคุมคุณภาพ",
      qualityControlDescription: "ทุกขั้นตอนการผลิตของเราได้รับการควบคุมอย่างเข้มงวด ตั้งแต่การคัดเลือกเมล็ดพันธุ์ การเพาะปลูก การเก็บเกี่ยว ไปจนถึงการแปรรูปเป็นนมถั่วเหลือง",
      regions: "แหล่งเพาะปลูก",
      northRegion: "ภาคเหนือ",
      northRegionDescription: "ถั่วเหลืองจากภาคเหนือของประเทศไทย ปลูกในพื้นที่สูงที่มีอากาศเย็น ทำให้ได้ถั่วเหลืองที่มีรสชาติหวานและมีคุณค่าทางโภชนาการสูง",
      northeastRegion: "ภาคตะวันออกเฉียงเหนือ",
      northeastRegionDescription: "ถั่วเหลืองจากภาคอีสาน ปลูกในดินที่มีแร่ธาตุอุดมสมบูรณ์ ทำให้ได้ถั่วเหลืองที่มีโปรตีนสูง"
    },
    en: {
      title: "Ingredients",
      subtitle: "From Farm to Glass",
      description: "We select high-quality organic soybeans from local farmers who grow them with care and without chemicals.",
      farmToTable: "Farm to Table",
      farmToTableDescription: "We are committed to creating sustainability for the community and environment by supporting local farmers and using sustainably grown ingredients.",
      organicFarming: "Organic Farming",
      organicFarmingDescription: "Our farmers use organic farming methods, without chemicals or pesticides, to produce high-quality soybeans that are safe for consumers.",
      qualityControl: "Quality Control",
      qualityControlDescription: "Every step of our production process is strictly controlled, from seed selection, cultivation, harvesting, to processing into soy milk.",
      regions: "Growing Regions",
      northRegion: "Northern Region",
      northRegionDescription: "Soybeans from the northern region of Thailand, grown in high altitude areas with cool climate, resulting in sweet-tasting soybeans with high nutritional value.",
      northeastRegion: "Northeastern Region",
      northeastRegionDescription: "Soybeans from the northeastern region, grown in mineral-rich soil, resulting in high-protein soybeans."
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.th;

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

        {/* Cute soybean decorations */}
        <div className="absolute -left-6 top-1/2 w-24 h-24 opacity-20 animate-float-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <ellipse cx="50" cy="50" rx="30" ry="40" fill="#D1E7DD" stroke="#4A5568" strokeWidth="2" />
            <path d="M50,30 Q60,50 50,70 Q40,50 50,30" fill="none" stroke="#4A5568" strokeWidth="2" />
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

              {/* Decorative leaf */}
              <div className="absolute -top-8 -right-8 w-16 h-16 animate-pulse-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#D1E7DD" />
                  <path d="M50,20 Q70,50 50,80 Q30,50 50,20" fill="none" stroke="#8BC34A" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-6 font-medium">
              {t.subtitle}
            </h2>
          </div>

          <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 transform rotate-1 hover:rotate-0 transition-transform duration-300 group">
                {/* Decorative elements inside the image container */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white opacity-20 animate-float z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-white opacity-20 animate-float-delay z-10"></div>

                <Image
                  src="/ingredients.svg"
                  alt="Organic Soybeans"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border-2 border-gray-200 dark:border-gray-600 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 relative">
                  {t.description}
                  <span className="absolute -top-4 -left-2 w-8 h-8 opacity-20 animate-float-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M30,20 Q50,5 70,20 Q85,40 70,60 Q50,75 30,60 Q15,40 30,20 Z" fill="currentColor" className="text-soft-green" />
                    </svg>
                  </span>
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 relative inline-block">
                  {t.farmToTable}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-soft-green rounded-full"></span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 relative">
                  {t.farmToTableDescription}
                  <span className="absolute -bottom-4 -right-2 w-8 h-8 opacity-20 animate-float-delay">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M30,20 Q50,5 70,20 Q85,40 70,60 Q50,75 30,60 Q15,40 30,20 Z" fill="currentColor" className="text-pink" />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organic Farming Section */}
      <section className="bg-soft-green dark:bg-gray-800 py-16 relative overflow-hidden">
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

        {/* Plant growth animation */}
        <div className="absolute bottom-0 left-1/4 w-20 h-40 opacity-30">
          <svg viewBox="0 0 100 200" className="w-full h-full">
            <path d="M50,200 L50,150 C50,150 30,130 50,110 C70,130 50,150 50,150 L50,200" fill="#8BC34A" />
            <path d="M50,150 C50,150 20,120 40,90 C60,120 50,150 50,150" fill="#8BC34A" />
            <path d="M50,150 C50,150 80,120 60,90 C40,120 50,150 50,150" fill="#8BC34A" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`flex flex-col md:flex-row-reverse items-center gap-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 transform -rotate-1 hover:rotate-0 transition-transform duration-300 group">
                {/* Decorative elements inside the image container */}
                <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-white opacity-20 animate-float-delay z-10"></div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full bg-white opacity-20 animate-float z-10"></div>

                <Image
                  src="/organic-farming.svg"
                  alt="Organic Farming"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border-2 border-gray-200 dark:border-gray-600 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
                  {t.organicFarming}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-pastel-yellow rounded-full"></span>
                  <span className="absolute -top-4 -right-4 w-8 h-8 opacity-20 animate-float">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" fill="currentColor" className="text-soft-green" />
                    </svg>
                  </span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 relative">
                  {t.organicFarmingDescription}
                  <span className="absolute -right-2 top-1/2 w-6 h-6 opacity-20 animate-float-sideways">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#8BC34A" />
                      <path d="M50,20 Q70,50 50,80 Q30,50 50,20" fill="none" stroke="#8BC34A" strokeWidth="2" />
                    </svg>
                  </span>
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 relative inline-block group">
                  {t.qualityControl}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-pink rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 relative">
                  {t.qualityControlDescription}
                  <span className="absolute -bottom-4 -right-2 w-8 h-8 opacity-20 animate-float-sideways">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="currentColor" className="text-soft-green" />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growing Regions Section */}
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

        {/* Mountain decoration */}
        <div className="absolute -left-10 bottom-0 w-40 h-32 opacity-10">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            <path d="M0,100 L60,20 L100,60 L160,0 L200,100 Z" fill="#8BC34A" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="inline-block bg-pastel-blue dark:bg-gray-700 px-8 py-4 rounded-bubble shadow-lg transform rotate-1 border-4 border-white dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white relative inline-block">
                {t.regions}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-soft-green rounded-full"></span>
              </h2>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}`}>
            {/* Northern Region */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border-4 border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-500 hover:shadow-xl group">
              <div className="relative w-full h-64 overflow-hidden">
                {/* Decorative elements inside the image container */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-pastel-yellow opacity-20 animate-float z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-soft-green opacity-20 animate-float-delay z-10"></div>

                {/* Mountain decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30">
                  <svg viewBox="0 0 400 100" className="w-full h-full">
                    <path d="M0,100 L80,30 L120,50 L200,10 L280,60 L350,20 L400,100 Z" fill="#F5F5DC" />
                  </svg>
                </div>

                <Image
                  src="/north-region.svg"
                  alt="Northern Region"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative inline-block group">
                  {t.northRegion}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-pastel-yellow rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 relative">
                  {t.northRegionDescription}
                  <span className="absolute -bottom-2 -right-2 w-6 h-6 opacity-20 animate-float-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" fill="currentColor" />
                    </svg>
                  </span>
                </p>
              </div>
            </div>

            {/* Northeastern Region */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border-4 border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-500 hover:shadow-xl group">
              <div className="relative w-full h-64 overflow-hidden">
                {/* Decorative elements inside the image container */}
                <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-pink opacity-20 animate-float-delay z-10"></div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full bg-pastel-blue opacity-20 animate-float z-10"></div>

                {/* Field decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30">
                  <svg viewBox="0 0 400 100" className="w-full h-full">
                    <path d="M0,100 C50,80 100,90 150,70 C200,50 250,60 300,40 C350,20 400,30 400,100 Z" fill="#F8F3E6" />
                  </svg>
                </div>

                <Image
                  src="/northeast-region.svg"
                  alt="Northeastern Region"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative inline-block group">
                  {t.northeastRegion}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-pink rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 relative">
                  {t.northeastRegionDescription}
                  <span className="absolute -bottom-2 -right-2 w-6 h-6 opacity-20 animate-float-sideways">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="currentColor" />
                    </svg>
                  </span>
                </p>
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
