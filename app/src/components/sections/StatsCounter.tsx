"use client";

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  { value: 400, suffix: '+', label: 'Expert Teachers', icon: '👨‍🏫' },
  { value: 10000, suffix: '+', label: 'Students Enrolled', icon: '🎓' },
  { value: 40000, suffix: '+', label: 'Classes Completed', icon: '🎵' },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function formatNumber(n: number): string {
  if (n >= 10000) return (n / 1000).toFixed(0) + ',000';
  if (n >= 1000) return n.toLocaleString();
  return n.toString();
}

const StatsCounter: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden py-20 md:py-28"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf2f8] via-[#fce7f3] to-[#f3e8ff]" />

      {/* Mesh overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #e11d73 0%, transparent 50%), radial-gradient(circle at 75% 50%, #8b5cf6 0%, transparent 50%)`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-[20%] left-[10%] w-[200px] h-[200px] rounded-full bg-[#e11d73] opacity-[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[150px] h-[150px] rounded-full bg-[#8b5cf6] opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="container relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        {/* Section Header */}
        <span className="inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-[#e11d73] mb-3">
          Our Impact
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f172a] mb-4 leading-tight">
          The future of music education is here
        </h2>
        <p className="text-[#64748b] text-[15px] max-w-md mx-auto mb-16 leading-relaxed">
          Join thousands of students already learning with Muzigal&apos;s verified expert teachers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

function StatCard({ stat, isVisible, delay }: { stat: StatItem; isVisible: boolean; delay: number }) {
  const count = useCountUp(stat.value, 2000, isVisible);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowCard(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div
      className={`flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl py-10 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(225,29,115,0.08)] transition-all duration-500 hover:-translate-y-1 ${
        showCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fce7f3] to-[#f3e8ff] flex items-center justify-center mb-5 text-[24px]">
        {stat.icon}
      </div>
      <div className="text-[42px] md:text-[48px] font-bold text-[#0f172a] leading-none mb-2 tracking-tight">
        {isVisible ? formatNumber(count) : '0'}{stat.suffix}
      </div>
      <div className="text-[14px] text-[#64748b] font-medium">
        {stat.label}
      </div>
    </div>
  );
}

export default StatsCounter;