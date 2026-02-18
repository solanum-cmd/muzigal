"use client";

import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    topLinks: [
      { label: 'About Us', href: '#' },
      { label: "Founder's Message", href: '#' },
      { label: 'Join the Student Community', href: '#' },
      { label: 'Need help? Contact us', href: '#' },
      { label: 'Muzigal Pro-Academy', href: '#' },
    ],
    blog: [
      { label: 'Things To Consider When You Begin Learning The Piano', href: '#' },
      { label: 'The basics of Carnatic Vocals', href: '#' },
      { label: 'Online Music Lessons – The New Way To Effective Learning', href: '#' },
      { label: 'Correct Posture For Playing Piano', href: '#' },
      { label: 'Choosing the right kind of Guitar', href: '#' },
    ],
    courses: [
      { label: 'Beginner Guitar', href: '#' },
      { label: 'Beginner Piano', href: '#' },
      { label: 'Beginner Keyboard', href: '#' },
      { label: 'Beginner Drums', href: '#' },
      { label: 'Beginner Carnatic Vocals', href: '#' },
      { label: 'Beginner Hindustani Vocals', href: '#' },
    ],
    partner: [
      { label: 'Muzigal Academy Franchise', href: '#' },
      { label: 'Muzigal for Schools', href: '#' },
      { label: 'Muzigal for Corporates', href: '#' },
      { label: 'Muzigal for Gated Communities', href: '#' },
      { label: 'Trade Kiosk Franchise', href: '#' },
      { label: 'Teach for Muzigal', href: '#' },
      { label: 'Careers at Muzigal', href: '#' },
    ],
    faq: [
      { label: 'How do I choose a Teacher on Muzigal?', href: '#' },
      { label: 'How many trials can I take for a specified instrument?', href: '#' },
      { label: 'How does lesson recording work?', href: '#' },
      { label: 'How do I showcase my talent to Muzigal community and get feedback?', href: '#' },
    ],
  };

  return (
    <footer className="w-full bg-[#132742] text-white pt-[60px] pb-[40px] font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top Horizontal Links */}
        <div className="flex flex-wrap items-center justify-between pb-8 border-b border-white/10 gap-y-4">
          {footerLinks.topLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-[14px] font-semibold hover:text-[#d63384] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Multi-column Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* Section 1: Blog */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/50 mb-6">Muzigal Blog</h4>
            <ul className="space-y-4">
              {footerLinks.blog.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[14px] leading-[1.4] hover:text-[#d63384] transition-colors block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Featured Courses */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/50 mb-6">Featured Courses</h4>
            <ul className="space-y-4">
              {footerLinks.courses.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[14px] hover:text-[#d63384] transition-colors block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Partner With Muzigal */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/50 mb-6">Partner With Muzigal</h4>
            <ul className="space-y-4">
              {footerLinks.partner.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[14px] hover:text-[#d63384] transition-colors block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: FAQ */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/50 mb-6">FAQ</h4>
            <ul className="space-y-4">
              {footerLinks.faq.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[14px] leading-[1.4] hover:text-[#d63384] transition-colors block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 mb-4">
              <a href="/">
                <Image
                  src="https://muzigal.com/images/logo.svg"
                  alt="Muzigal"
                  width={135}
                  height={40}
                  className="brightness-0 invert"
                />
              </a>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded border border-white/10">
                <Globe size={16} />
                <span className="text-[14px]">🇮🇳</span>
              </div>
            </div>
            <p className="text-[12px] text-white/50">
              © 2025, Muzigal Edutech Pvt. Ltd. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#d63384] transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#d63384] transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#d63384] transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#d63384] transition-all">
              <Youtube size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#" className="text-[12px] font-semibold hover:text-[#d63384]">Press Kit</a>
            <a href="#" className="text-[12px] font-semibold hover:text-[#d63384]">Terms & Conditions</a>
            <a href="#" className="text-[12px] font-semibold hover:text-[#d63384]">Sitemap</a>
            <a href="#" className="text-[12px] font-semibold hover:text-[#d63384]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;