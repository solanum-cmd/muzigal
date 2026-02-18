"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";

const Header = () => {
  const [isTeacherHovered, setIsTeacherHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const categories = [
    {
      title: "Strings",
      items: [
        { name: "Acoustic Guitar", href: "/learn-music" },
        { name: "Electric Guitar", href: "/learn-music" },
        { name: "Bass Guitar", href: "/learn-music" },
        { name: "Veena", href: "/learn-music" },
        { name: "Sitar", href: "/learn-music" },
        { name: "Violin", href: "/learn-music" },
        { name: "Ukulele", href: "/learn-music" },
        { name: "Mandolin", href: "/learn-music" },
        { name: "Clarinet", href: "/learn-music" },
        { name: "Carnatic Violin", href: "/learn-music" },
      ],
    },
    {
      title: "Keys",
      items: [
        { name: "Piano", href: "/learn-music" },
        { name: "Keyboard", href: "/learn-music" },
        { name: "Harmonium", href: "/learn-music" },
      ],
    },
    {
      title: "Vocal",
      items: [
        { name: "Western Vocal", href: "/learn-music" },
        { name: "Vocal - Popular Songs", href: "/learn-music" },
        { name: "Vocal - Carnatic", href: "/learn-music" },
        { name: "Vocal - Hindustani", href: "/learn-music" },
        { name: "Light Vocal", href: "/learn-music" },
      ],
    },
    {
      title: "Percussion",
      items: [
        { name: "Drums", href: "/learn-music" },
        { name: "Tabla", href: "/learn-music" },
        { name: "Mrudangam", href: "/learn-music" },
      ],
    },
    {
      title: "Wind",
      items: [
        { name: "Flute", href: "/learn-music" },
        { name: "Saxophone", href: "/learn-music" },
        { name: "Trumpet", href: "/learn-music" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#e0e0e0] h-[70px] flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between max-w-[1240px]">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="https://muzigal.com/images/logo.svg"
                width={135}
                height={40}
                alt="Muzigal"
                priority
              />
            </Link>
          </div>

        {/* Navigation & Search Container */}
        <div className="flex items-center space-x-8 flex-grow justify-end">
          {/* Main Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
              <div className="relative">
                <Link
                  href="/find-an-academy"
                  className="text-[#132742] font-semibold text-[15px] hover:text-[#d63384] transition-colors"
                >
                  Find An Academy
                </Link>
              </div>

              <div 
                className="relative py-4"
                onMouseEnter={() => setIsTeacherHovered(true)}
                onMouseLeave={() => setIsTeacherHovered(false)}
              >
                <Link
                  href="/learn-music"
                  className="text-[#132742] font-semibold text-[15px] hover:text-[#d63384] transition-colors flex items-center gap-1"
                >
                  Find A Teacher
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTeacherHovered ? 'rotate-180' : ''}`} />
                </Link>

                {/* Mega Menu Dropdown */}
                {isTeacherHovered && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-[#e0e0e0] rounded-b-lg p-6 min-w-[700px] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-4 gap-8">
                      {categories.slice(0, 4).map((cat) => (
                        <div key={cat.title}>
                          <h4 className="text-[#6b7280] text-[12px] font-bold uppercase tracking-wider mb-3 pb-1 border-b border-[#f0f2f5]">
                            {cat.title}
                          </h4>
                          <ul className="space-y-2">
                            {cat.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-[#132742] text-[14px] hover:text-[#d63384] block py-0.5 transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <Link
                  href="/shop"
                  className="text-[#132742] font-semibold text-[15px] hover:text-[#d63384] transition-colors"
                >
                  Shop
                </Link>
              </div>
            </nav>

          {/* Search Bar */}
          <div className="relative w-full max-w-[280px]">
            <form onSubmit={(e) => { e.preventDefault(); if (searchQuery) router.push(`/learn-music?q=${encodeURIComponent(searchQuery)}`); }}>
            <div className="flex items-center bg-[#f0f2f5] rounded py-2 px-3 border border-transparent focus-within:border-[#e0e0e0] transition-all">
              <Search className="w-4 h-4 text-[#6b7280]" />
              <input
                type="text"
                placeholder="Search for academy, subject or"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-[14px] text-[#132742] ml-2 w-full placeholder:text-[#6b7280]"
              />
            </div>
            </form>
          </div>

          {/* Login Button */}
          <div className="flex-shrink-0">
            <Link href="/login">
              <button className="border border-[#132742] text-[#132742] px-5 py-2 rounded-[4px] font-semibold text-[15px] hover:bg-[#132742] hover:text-white transition-all">
                Login/Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;