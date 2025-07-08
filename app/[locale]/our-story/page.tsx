"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

type OurStoryPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default function OurStoryPage({ params }: OurStoryPageProps) {
  const locale = React.use(params).locale || "th";
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const translations = {
    th: {
      title: "ประวัติความเป็นมา",
      subtitle: "เรื่องราวของเรา",
      slogan: "ทุกถ้วยมีเรื่องเล่า",
      story: "เริ่มต้นจากความตั้งใจที่จะสร้างคาเฟ่น้ำเต้าหู้มินิมอลที่เน้นสุขภาพ เราได้พัฒนาสูตรการผลิตมาอย่างต่อเนื่อง เพื่อให้ได้น้ำเต้าหู้ที่มีรสชาติอร่อย และคงคุณค่าทางโภชนาการไว้อย่างครบถ้วน",
      storyExtended: "ร้าน 'ถ้วยถั่ว' เกิดจากความรักในน้ำเต้าหู้และความปรารถนาที่จะสร้างพื้นที่อบอุ่นและเรียบง่ายสำหรับทุกคน เราเริ่มจากการทดลองสูตรน้ำเต้าหู้ในครัวเล็กๆ และได้รับการตอบรับที่ดีจากเพื่อนและครอบครัว จนกระทั่งเปิดเป็นคาเฟ่เล็กๆ ที่เน้นบรรยากาศอบอุ่น เรียบง่าย และเป็นมิตรกับทุกคน",
      tradition: "แนวคิดและปรัชญา",
      traditionText: "น้ำเต้าหู้มีประวัติศาสตร์อันยาวนานในวัฒนธรรมเอเชีย เราภูมิใจที่ได้นำเสนอเครื่องดื่มเพื่อสุขภาพนี้ในรูปแบบที่ทันสมัยและเข้าถึงง่าย โดยยังคงรักษาคุณค่าทางโภชนาการและรสชาติดั้งเดิมไว้อย่างครบถ้วน",
      values: "คุณค่าของเรา",
      valuesList: [
        "สุขภาพ - เราใส่ใจในการคัดสรรวัตถุดิบคุณภาพสูงและกระบวนการผลิตที่สะอาด เพื่อสุขภาพที่ดีของลูกค้า",
        "ความอบอุ่น - เราสร้างบรรยากาศและการบริการที่อบอุ่น เป็นกันเอง ให้ลูกค้ารู้สึกเหมือนอยู่บ้าน",
        "ความเรียบง่าย - เรามุ่งเน้นความเรียบง่ายในทุกด้าน ตั้งแต่การตกแต่งร้าน เมนู ไปจนถึงการบริการ",
        "ความเป็นมิตรกับทุกคน - เราออกแบบร้านและเมนูให้เหมาะกับลูกค้าทุกเพศทุกวัย ไม่ว่าจะเป็นเด็ก ผู้ใหญ่ หรือผู้สูงอายุ"
      ]
    },
    en: {
      title: "Our Story",
      subtitle: "Our Journey",
      slogan: "Every cup has a story",
      story: "Starting with the intention to create a minimalist tofu milk cafe focused on health, we have continuously developed our recipes to create delicious tofu milk that preserves all nutritional values.",
      storyExtended: "'TuayTua' was born from our love for tofu milk and the desire to create a warm and simple space for everyone. We started by experimenting with tofu milk recipes in a small kitchen and received positive feedback from friends and family. Eventually, we opened a small cafe that emphasizes a warm, simple, and friendly atmosphere for everyone.",
      tradition: "Concept and Philosophy",
      traditionText: "Tofu milk has a long history in Asian culture. We are proud to present this healthy beverage in a modern and accessible way, while preserving its nutritional value and traditional taste.",
      values: "Our Values",
      valuesList: [
        "Health - We care about selecting high-quality ingredients and maintaining clean production processes for our customers' well-being.",
        "Warmth - We create a warm and friendly atmosphere and service, making customers feel at home.",
        "Simplicity - We focus on simplicity in all aspects, from store decoration and menu to service.",
        "Friendly to Everyone - We design our store and menu to be suitable for customers of all ages and genders, whether children, adults, or the elderly."
      ]
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.th;

  return (
    <div className="bg-cream dark:bg-gray-900 min-h-screen overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full border-8 border-pink opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/6 w-48 h-48 rounded-full border-8 border-soft-green opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 rounded-full border-8 border-pastel-yellow opacity-15 animate-pulse-slow"></div>
      </div>

      {/* Header Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Decorative bubbles */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink opacity-50 animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-soft-green opacity-40 animate-float-delay"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-pastel-yellow opacity-30 animate-float-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
            <div className="inline-block bg-pastel-yellow dark:bg-gray-700 px-8 py-4 rounded-bubble shadow-lg transform -rotate-1 mb-4 border-4 border-white dark:border-gray-600">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative inline-block">
                {t.title}
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-pink rounded-full"></span>
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-6">
              {t.subtitle}
            </h2>
            <h3 className="text-lg md:text-xl text-pink dark:text-pink-300 font-medium mt-3 italic">
              {t.slogan}
            </h3>
          </div>

          <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 transform rotate-1 hover:rotate-0 transition-transform duration-300 group">
                {/* Decorative elements inside the image container */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white opacity-20 animate-float z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-white opacity-20 animate-float-delay z-10"></div>

                <Image
                  src="/our-story.svg"
                  alt="Our Story"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border-2 border-gray-200 dark:border-gray-600 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 relative">
                  {t.story}
                  <span className="absolute -top-4 -left-2 w-8 h-8 opacity-20 animate-float-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M30,20 Q50,5 70,20 Q85,40 70,60 Q50,75 30,60 Q15,40 30,20 Z" fill="currentColor" className="text-pink" />
                    </svg>
                  </span>
                </p>
                <p className="text-gray-700 dark:text-gray-300 relative">
                  {t.storyExtended}
                  <span className="absolute -bottom-4 -right-2 w-8 h-8 opacity-20 animate-float-delay">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M30,20 Q50,5 70,20 Q85,40 70,60 Q50,75 30,60 Q15,40 30,20 Z" fill="currentColor" className="text-soft-green" />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tradition Section */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`flex flex-col md:flex-row-reverse items-center gap-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 transform -rotate-1 hover:rotate-0 transition-transform duration-300 group">
                {/* Decorative elements inside the image container */}
                <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-white opacity-20 animate-float-delay z-10"></div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full bg-white opacity-20 animate-float z-10"></div>

                <Image
                  src="/tradition.svg"
                  alt="Tradition"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border-2 border-gray-200 dark:border-gray-600 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
                  {t.tradition}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blush-pink rounded-full"></span>
                  <span className="absolute -top-4 -right-4 w-8 h-8 opacity-20 animate-float">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" fill="currentColor" className="text-pink" />
                    </svg>
                  </span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 relative">
                  {t.traditionText}
                  <span className="absolute -bottom-4 -right-2 w-8 h-8 opacity-20 animate-float-sideways">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="currentColor" className="text-pink" />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="inline-block bg-pastel-blue dark:bg-gray-700 px-8 py-4 rounded-bubble shadow-lg transform rotate-1 border-4 border-white dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white relative inline-block">
                {t.values}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-soft-green rounded-full"></span>
              </h2>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}`}>
            {t.valuesList.map((value, index) => {
              // Generate random rotation for each card
              const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
              // Generate random animation delay for staggered appearance
              const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];
              const delay = delays[index % delays.length];

              return (
                <div 
                  key={index} 
                  className={`bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border-2 border-gray-200 dark:border-gray-600 transform ${rotation} hover:rotate-0 transition-all duration-300 hover:shadow-xl ${delay}`}
                >
                  <p className="text-gray-700 dark:text-gray-300 relative">
                    {value}
                    <span className="absolute -bottom-2 -right-2 w-6 h-6 opacity-20 animate-float-slow">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M50,20 C60,5 90,10 90,30 C90,50 70,40 80,60 C90,80 70,90 50,80 C30,90 10,80 20,60 C30,40 10,50 10,30 C10,10 40,5 50,20 Z" fill="currentColor" />
                      </svg>
                    </span>
                  </p>
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
