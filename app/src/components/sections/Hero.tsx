import React from 'react';
import Image from 'next/image';

/**
 * Hero Section Component
 * 
 * Clones the primary landing section of Muzigal.
 * Features:
 * - Navy Blue background (#132742)
 * - Headline: "Start learning from the best music teachers."
 * - Primary Pink CTA: "Find An Academy" (#D63384)
 * - Stylized grid-style image collage on the right.
 */

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#132742] text-white py-12 md:py-20 lg:py-24">
      {/* Background Decorative Element (Blob Pattern) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div 
          className="absolute -left-[10%] top-[10%] w-[600px] h-[600px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(214, 51, 132, 0.2) 0%, transparent 70%)',
          }}
        />
        {/* The "Blob" pattern typically seen in the background */}
        <div 
          className="absolute -left-20 bottom-10 w-96 h-96 opacity-10 bg-no-repeat bg-contain" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30,20 Q50,0 70,20 T90,50 T70,80 T30,80 T10,50 T30,20\' fill=\'%23ffffff\' /%3E%3C/svg%3E")' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.2] tracking-tight max-w-[500px]">
              Start learning from the best music teachers.
            </h1>
            
            <div className="pt-2">
              <a 
                href="https://muzigal.com/find-an-academy"
                className="bg-[#D63384] hover:bg-[#c12e76] text-white px-8 py-4 rounded-[4px] font-semibold text-base transition-all duration-300 inline-block shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Find An Academy
              </a>
            </div>
          </div>

          {/* Right Column: Image Collage */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-700">
            <div className="relative w-full max-w-[480px]">
              {/* Main Collage Image */}
              <div className="relative z-10">
                <Image
                  src="https://muzigal.com/images/banner-frame.png"
                  alt="Student and Teachers Learning Music"
                  width={432}
                  height={417}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Decorative Shapes for Grid Vibe (Representing the visual style in screenshot) */}
              <div 
                className="absolute -top-[5%] -right-[5%] w-[80%] h-[80%] bg-[#f29f41] rounded-[40px] -z-10 opacity-80" 
                style={{ clipPath: 'inset(0 0 30% 30% round 40px)' }}
              />
              <div 
                className="absolute -bottom-[5%] -left-[5%] w-[40%] h-[40%] bg-[#d63384] rounded-[40px] -z-10 opacity-20"
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative Wave/Transition at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-background/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;