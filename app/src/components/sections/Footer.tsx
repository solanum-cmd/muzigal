"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e11d73] via-[#8b5cf6] to-[#e11d73]" />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e11d73]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] px-6 pt-20 pb-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & About */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://muzigal.com/images/logo.svg"
                width={140}
                height={40}
                alt="Muzigal"
                className="brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-[#94a3b8] text-[15px] leading-relaxed max-w-[320px]">
              Muzigal is a global platform connecting students with expert music teachers for personalized, high-quality music education.
            </p>
            
            <div className="flex gap-4 pt-2">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Youtube size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[16px] mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink href="/find-an-academy">Find an Academy</FooterLink>
              <FooterLink href="/learn-music">Find a Teacher</FooterLink>
              <FooterLink href="https://shop.muzigal.com/">Shop Instruments</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[16px] mb-6">Resources</h4>
            <ul className="space-y-4">
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="https://muzigal.com/become-a-teacher">Become a Teacher</FooterLink>
              <FooterLink href="https://landing.muzigal.com/mz/franchise">Partner with Us</FooterLink>
              <FooterLink href="/faqs">FAQs</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[16px] mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-[#94a3b8] text-[14px]">
                <MapPin size={18} className="text-[#e11d73] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Level 1, T-Hub, Knowledge City, Hyderabad, 500081</span>
              </li>
              <li className="flex items-center gap-3 text-[#94a3b8] text-[14px]">
                <Phone size={18} className="text-[#e11d73] shrink-0" />
                <span>+91 9000 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-[#94a3b8] text-[14px]">
                <Mail size={18} className="text-[#e11d73] shrink-0" />
                <a href="mailto:support@muzigal.com" className="hover:text-white transition-colors">support@muzigal.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748b] text-[13px]">
            &copy; {currentYear} Muzigal. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-[#64748b]">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#94a3b8] hover:bg-gradient-to-br hover:from-[#e11d73] hover:to-[#be185d] hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[#94a3b8] text-[14px] hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
      >
        {children}
      </Link>
    </li>
  );
}